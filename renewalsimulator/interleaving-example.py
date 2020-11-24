from systemtools.basics import *
from systemtools.file import *
from systemtools.location import *
import interleaving
import pickle
from datastructuretools.hashmap import *

def getSD():
	(user, password, host) = getOctodsMongoAuth()
	sd = SerializableDict("interleaving-test", user=user, password=password, host=host, useMongodb=True)
	return sd


def interleave(recs_a, recs_b, method="teamdraft"):
	"""
		This function returns a tuple containing:
		 * a list of ids which corresponds to the interleaved list (from 2 rec lists)
		 * a serialized object (bytes) that can be stored in MongoDB (an `interleaving.ranking.TeamRanking` object).
	
		The TeamDraft method already randomize the order of systems.
		So we don't need to shuffle recsys.
		It also handle recommendation list with different length...

		Requirements:
		import interleaving
	"""
	if method == "teamdraft":
		method = interleaving.TeamDraft([recs_a, recs_b])
		ranking = method.interleave()
		return (list(ranking), pickle.dumps(ranking))
	else:
		raise Exception("Unknown method")

def evaluate(ser_ranking, clicked_news):
	"""
		This function returns the outcome of a 1vs1:

			* 1: the first system wins
			* 0: draw
			* -1: the second system wins

		It takes a serialized ranking (bytes).
		And a lists of ids (clicked news).
	"""
	# We deserialize ser_ranking:
	ranking = pickle.loads(ser_ranking)
	# We convert lists of ids in clicked indexes:
	ranking_list = list(ranking)
	clicks = []
	for i in range(len(ranking_list)):
		if ranking_list[i] in clicked_news:
			clicks.append(i)
	print(clicks)
	# We return the outcome:
	outcomes = interleaving.TeamDraft.evaluate(ranking, clicks)
	if len(outcomes) == 0:
		return 0
	elif len(outcomes) == 1:
		if outcomes[0] == (0, 1):
			return 1
		elif outcomes[0] == (1, 0):
			return -1
	else:
		return 0


def test1():
	# Doing the interleave:
	a = list(range(1, 31))
	b = [9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7, 8, 100, 101]
	sd = getSD()
	ranking, ser_ranking = interleave(a, b) # You need to send ranking to the user and store both
	print(ranking)
	sd["a"] = ser_ranking
	time.sleep(1)
	
	# Evaluation:
	print("When we'll have feedbacks on this bucket...")
	sd = None
	clicked_news = [1, 9, 12, 3] # draw
	# clicked_news = [12, 9, 100, 101, 10] # B wins
	# clicked_news = [3, 1, 2, 4, 8, 5] # A wins
	sd = getSD()
	ser_ranking = sd["a"]
	outcome = evaluate(ser_ranking, clicked_news)
	if outcome == 0:
		print("It's a draw")
	elif outcome == 1:
		print("A won")
	elif outcome == -1:
		print("B won")
	

if __name__ == '__main__':
	test1()