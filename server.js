const http = require('node:http');
const hostname = '127.0.0.1';
const port = 4000;
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port+1 });
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});

/*
var server = require('websocket').server, http = require('http');

var socket = new server({  
    httpServer: http.createServer().listen(1337)
});

socket.on('request', function(request) {  
    var connection = request.accept(null, request.origin);

    connection.on('message', function(message) {
        console.log(message.utf8Data);
        connection.sendUTF('hello');
        setTimeout(function() {
            connection.sendUTF('this is a websocket example');
        }, 1000);
    });

    connection.on('close', function(connection) {
        console.log('connection closed');
    });
    */
});
