var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');var app = express();
var server = http.Server(app);
var io = socketIO(server);app.set('port', 5000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
  
});// Starts the server.
server.listen(5000, function() {
  console.log('Starting server on port 5000');
});