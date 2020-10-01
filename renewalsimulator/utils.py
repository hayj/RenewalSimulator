
from trueskill import Rating, rate_1vs1 # we asked about BETA in win_prob https://github.com/sublee/trueskill/issues/1#issuecomment-698816324
import copy
import random
from scipy import stats

def truncate_float(f, n=2):
    '''Truncates/pads a float f to n decimal places without rounding'''
    s = '{}'.format(f)
    if 'e' in s or 'E' in s:
        return float('{0:.{1}f}'.format(f, n))
    i, p, d = s.partition('.')
    return float('.'.join([i, (d+'0'*n)[:n]]))

def scores2ranks(v):
    """
        This function convert scores to ranks
    """
    v = [-e for e in v]
    return stats.rankdata(v, method="dense")

class RenewalRanking:
    def __init__(self, competitors, allow_raise=True, float_precision=None):
        """
            This class is a wrapper over [TrueSkill](https://trueskill.org/) which is a lib for making a ranking of competitors (i.e; an Elo-like rating system used in echecs federations).
        
            `competitors` is either an integer (number on competitors) or a list of hashable ids (e.g. strings, integers)
            
            "Ranks" are ranks of each contender in a vector. It means it's a vector having a size equa to the number of competitors. Each coordinate correspond to the id of the contender, and values in the vector are ranks.
            For example, [2, 3, 2, 1] means the first and the third competitors are ranked second, the last one is ranked fist (the winner).
            This vector can be generated using `get_ranks`.
            "Ranking" corresponds to an ordered vector having all competitors. The first is the winner, the last is the looser.
            This vector can be generated using `get_ranking`.
        """
        self.allow_raise = allow_raise
        self.float_precision = float_precision
        # If contende is a number, we create a list of ids:
        if isinstance(competitors, int):
            assert competitors >= 2
            nc = []
            for i in range(competitors):
                nc.append(i)
            competitors = nc
        # Else it's ok, we just check it:
        else:
            # We check all element has an order:
            assert isinstance(competitors, list)
            # We check there is no duplicates:
            assert len(set(competitors)) == len(competitors)
            # And we check the size:
            assert len(competitors) >= 2
        # We save competitors:
        self.names = competitors
        # Now we create ids for each contender:
        self.ids = list(range(len(competitors)))
        # We create all ratings:
        self.ratings = [Rating() for _ in self.ids]
        # We map names to ids:
        self.names2ids = dict()
        for i in range(len(self.ids)):
            self.names2ids[self.names[i]] = self.ids[i]
    
    def get_stats(self):
        stats = []
        for current_id in self.ids:
            current_rating = self.ratings[current_id]
            mu = current_rating.mu
            if self.float_precision is not None and isinstance(self.float_precision, int):
                mu = truncate_float(mu, self.float_precision)
            c = (self.names[current_id], mu, current_rating.sigma)
            stats.append(c)
        return stats
    
    def get_ranking_stats(self):
        """
        Ranking is an ordered (by mu desc) list of tuple (id, mu, sigma)
         > Mu value follows player’s win/draw/lose records.
         > Higher value means higher game skill.
         > And sigma value follows the number of games.
         > Lower value means many game plays and higher rating confidence.
        """
        stats = self.get_stats()
        return sorted(stats, key=lambda e: e[1], reverse=True)
    
    def get_ranking(self):
        return [e[0] for e in self.get_ranking_stats()]
    
    def get_ranks(self):
        """
        This function return a "rank vector" with rank values.
        It is not a ranking (an ordered list).
        """
        stats = self.get_stats()
        ranks = [e[1] for e in stats]
        ranks = scores2ranks(ranks)
        return ranks

    def print_ranking(self):
        ranking = self.get_ranking_stats()
        result = ""
        for current_id, mu, sigma in ranking:
            mu = truncate_float(mu)
            sigma = truncate_float(sigma)
            text = str(current_id) + "\t" + str(mu) + "\t" + str(sigma)
            result += text + "\n"
        result = "id\tskill\tconfidence (lower is better)\n" + result[:-1]
        print(result)
    
    def match(self, a, b, winner=None):
        """
        a and b are ids of systems
        winners is either a, b or None
        `winner` as None means it's a draw
        """
        error_message = "Please provide existing ids"
        if a in self.names2ids and b in self.names2ids and (winner is None or winner in self.names2ids):
            a = self.names2ids[a]
            b = self.names2ids[b]
            if winner is not None:
                winner = self.names2ids[winner]
            error_message = "The winner must be either " + str(a) + " or " + str(b)
            if winner is None:
                na, nb = rate_1vs1(self.ratings[a], self.ratings[b], drawn=True)
                self.ratings[a], self.ratings[b] = na, nb
            elif winner == a:
                na, nb = rate_1vs1(self.ratings[a], self.ratings[b])
                self.ratings[a], self.ratings[b] = na, nb
            elif winner == b:
                nb, na = rate_1vs1(self.ratings[b], self.ratings[a])
                self.ratings[a], self.ratings[b] = na, nb
            elif self.allow_raise:
                raise Exception(error_message)
            else:
                print(error_message)
        elif self.allow_raise:
            raise Exception(error_message)
        else:
            print(error_message)

def renewal_assignments(users, recsyss):
    """
    This function assign users to systems.
    A user has 2 systems assigned.
    Thus systems only handle approx 2|U|/|S| users
    (with U the set of users and S the set of systems).
    The number of users must be greater than the number of systems.

    :param users: list of users ids (hashable)
    :param recsyss: list of recommende systems ids (hashable)
    :return: return a dictionnary containing a map user -> set of systems
    """
    def shuffle(l):
        l = copy.copy(l)
        random.shuffle(l)
        return l
    assert len(recsyss) >= 2 and len(users) >= len(recsyss)
    users, recsyss = list(users), list(recsyss)
    assert len(users) == len(set(users)) and len(recsyss) == len(set(recsyss))
    assignments = dict()
    recsyss_shuffle_aggr = shuffle(recsyss) + shuffle(recsyss)
    for user in users:
        recsys1 = recsyss_shuffle_aggr.pop()
        recsys2 = recsyss_shuffle_aggr.pop()
        while recsys1 == recsys2:
            recsys2 = recsyss_shuffle_aggr.pop()
        assignments[user] = {recsys1, recsys2}
        if len(recsyss_shuffle_aggr) < len(recsyss) * 2:
            recsyss_shuffle_aggr += shuffle(recsyss)
    return assignments


def rr_test1():
    print('####### test 1 #######')
    rr = RenewalRanking(10, float_precision=1)
    rr.print_ranking()
    rr.match(0, 1, 1)
    rr.match(3, 1, 1)
    rr.match(5, 1, 1)
    rr.match(5, 0, 0)
    rr.print_ranking()
    print(rr.get_ranking())
    print(rr.get_ranks())

def rr_test2():
    print('####### test 2 #######')
    rr = RenewalRanking(["sys1", "sys2", "sys3", "sys4", "sys5"], float_precision=1)
    rr.print_ranking()
    rr.match("sys1", "sys2", "sys2")
    rr.match("sys4", "sys2", "sys2")
    rr.match("sys5", "sys2", "sys2")
    rr.match("sys5", "sys1", "sys1")
    rr.print_ranking()
    print(rr.get_ranking())
    print(rr.get_ranks())


if __name__ == '__main__':
    rr_test1()
    rr_test2()