var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
app.set('port', 5000); //Set the port to be 5000
app.use(express.static(path.join(__dirname, 'public'))); //Use the public folder to find the files

/*
* Open the index.html file first as it contains links to all the other html, css and js files
* It is stored in the public directory like all the other files but not in a subfolder.
*/
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html')); 
})

app.post('',function(req,res){
   var username = req.body.username;
   var password = req.body.password;
   res.send(username,password);
   console.log(username,password);

});

io.on('connection', function(client) {
	console.log("User connected");
});

setInterval(function() {
  io.sockets.emit('message', 'Communicating with the server!');
}, 1000);

server.listen(5000, function() {
  console.log('Starting server on port 5000');
});