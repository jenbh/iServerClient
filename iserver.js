// --------------- UDP SERVER ---------------
// node iserver.js 127.0.0.1 3000

var udp = require('dgram');
const args = process.argv[2];
var host = args;
const args2 = process.argv[3];
var port = args2;

var server = udp.createSocket('udp4');

//ERROR
server.on('error',function(error){
    console.log('Error: ' + error);
    server.close();
});

//MESSAGE
server.on('message',function(payload,info){
    console.log('Payload received from client');
    console.log('----------------------------');
    console.log(payload.toString());
    console.log('Received from %s:%d\n', info.address,info.port);
});

//LISTENING
server.on('listening',function(){
    var address = server.address();
    var port = address.port;
    var family = address.family;
    var ip = address.address;
    console.log('Server is listening...\n');
});

//IF SOCKET CLOSES
server.on('close',function(){
    console.log('Socket is closed !');
});

server.bind(port,host);