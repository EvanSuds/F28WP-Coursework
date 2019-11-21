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

//TODO, Get login screen to work
/*
app.get('/', function(req, res){
  res.render('form');// if jade
  // You should use one of line depending on type of frontend you are with
  res.sendFile(__dirname + '/form.html'); //if html file is root directory
 res.sendFile("game.html"); //if html file is within public directory
});

app.post('/',function(req,res){
   var username = req.body.username;
   var htmlData = 'Hello:' + username;
   res.send(htmlData);
   console.log(htmlData);

});
*/
server.listen(5000, function() {
  console.log('Starting server on port 5000');
});