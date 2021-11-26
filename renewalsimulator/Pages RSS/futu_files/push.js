/* Load remote Batch SDK JavaScript code */
(function(b,a,t,c,h,e,r){h = 'batchSDK';b[h]=b[h]||function() {
    (b[h].q = b[h].q || []).push(arguments)};e=a.createElement(t),r=a.getElementsByTagName(t)[0];
e.async=1;e.src=c;r.parentNode.insertBefore(e,r);})(window,document,'script','https://via.batch.com/v2/bootstrap.min.js');

/* Initiate Batch SDK opt-in UI configuration (native prompt) */
var batchSDKUIConfig = {
    native: {
        backoffDuration: 604800
    }
};

/* Use a specific configuration for the Firefox web browser (custom prompt) */
if (navigator.userAgent.indexOf("Firefox") !== -1) {
        batchSDKUIConfig = {
            alert: {
                icon: 'https://cdn.futura-sciences.com/sources/mkt/push/push-192x192.png',
                text: "RECEVEZ LES NOTIFICATIONS DE FUTURA\n\nSoyez alertés dès qu'une actualité Futura le justifie.\nProfitez aussi des bons plans de nos partenaires.",
                negativeBtnLabel: "PLUS TARD",
                negativeBtnStyle: {
                    backgroundColor: "white",
                    hoverBackgroundColor: "white",
                    textColor: "#263c4a",
                    fontSize: 16,
                },
                positiveSubBtnLabel: "ACTIVER",
                positiveUnsubBtnLabel: "DÉSACTIVER",
                positiveBtnStyle: {
                    backgroundColor: "#263c4a",
                    hoverBackgroundColor: "#263c4a",
                    textColor: "white",
                    shadow: true,
                    fontSize: 16,
                },
                fontFamily: '"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif',
                attach: "top right",
                fontSize: 14
            }
        }
    }
/* Finalize the Batch SDK setup */
batchSDK('setup', {
    apiKey: '1871F8023103400DA77CD64E74E094C9',
    subdomain: 'futura-sciences0',
    authKey: '2.4pxlcBytzPDfWSC3Ck6/c5iWFuqnNJGIZcPV0ZhZcaU=',
    vapidPublicKey: 'BGpXfoMJnvVVkigwfMTeDwZOj1a9f9hpq9G/VyIGmZGqpkBAQ06rcqOP/PSQ4HBMSUA/o/lytUisM7u7mfGIoyA=',
    ui: batchSDKUIConfig,
    defaultIcon: 'https://cdn.futura-sciences.com/sources/mkt/push/push-192x192.png', // for Chrome desktop
    smallIcon: 'https://cdn.futura-sciences.com/sources/mkt/push/push-96x96.png', // for Chrome Android
});