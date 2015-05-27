var http = require('http');
var dgram = require('dgram');
var dgram = require('dgram');
var udpServer = dgram.createSocket('udp4');
var fs = require('fs');

var ip = process.argv[2];
var port = process.argv[3];

var server = http.createServer(function(request, response) {

});

server.listen(port, function() {
    console.log((new Date()) + ' Server is listening on port ' + port);
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  console.log('connection');
});

udpServer.on('listening', function() {
    var address = udpServer.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

udpServer.on('message', function(message, remote) {
  console.log(remote);
  var text = message.toString("ascii", 13, message.length ) + '\n';
  console.log(text);
  fs.appendFile('log.txt', text, function (err) {

  });
});

udpServer.bind(port, ip);