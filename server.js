
const { PeerServer } = require('peer');
const port = process.env.PORT || "9000";

const peerServer = PeerServer( {
    proxied: true,
    debug: true,
    path: '/myapp',
    port: port,
});

console.log('Listening on: ' + port);
