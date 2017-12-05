// --------------- UDP CLIENT ---------------
// node iclient.js 127.0.0.1 3000

var udp = require('dgram');
const args = process.argv[2];
var host = args;
const args2 = process.argv[3];
var port = args2;

var client = udp.createSocket('udp4');

var counter = 0;

setInterval(() => {
    var quote = new Buffer('\"It always seems impossible until it\'s done\" - Nelson Mandela \n');

    var time = Math.floor(Date.now()/1000);
    var timeInSeconds = new Buffer('Time in Seconds: ' + time.toString() + '\n');
    var timeCounter = ++counter;
    var timeSent = new Buffer('Number of Messages sent: ' + timeCounter.toString());

    client.send([quote,timeInSeconds,timeSent],port,host,function(error){
        if(error){
            client.close();
        } else{ 
            console.log('Payload sent to Server %d time(s)', timeCounter);
            }
    });
}, 2000);