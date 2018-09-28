var HitBTC = require('hitbtc-api').default;

var key = "db9a097fbdb66100xxxxxxxxxx";
var secret = "76d028fd52xxxxxxxxxxxxx"

const restClient = new HitBTC({ key, secret, isDemo: false });
//const websocketClient =  new HitBTC.WebsocketClient({ key, secret, isDemo: false });

restClient.getOrderBook('BTCUSD')
    .then(function(value) {
        console.log(value)
    }).catch(console.error);
// restClient.getSymbols()
//     .then(console.log)
//     .catch(console.error);