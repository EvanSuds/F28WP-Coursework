var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
app.set('port', 5000); //Set the port to be 5000
app.use(express.static(path.join(__dirname, 'public'))); //Use the public folder to find the files

var MongoClient = require('mongodb').MongoClient;
var dbURL = 'mongodb://localhost/playerInfo'
/*
* Open the index.html file first as it contains links to all the other html, css and js files
* It is stored in the public directory like all the other files but not in a subfolder.
*/

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
})


io.on('connection', function(client) { //Logs that a user has connected
	console.log("A new user connected");

  client.on('joinGame', function(createTank) {
    console.log(createTank.name + " has joined the game");
    client.emit('newTank');
  });



});

setInterval(function() { //Sends message to all connected users
  io.sockets.emit('message', 'Communicating with the server!');
}, 1000);

server.listen(5000, function() {
  console.log('Starting server on port 5000');

  MongoClient.connect(dbURL, function(err, db){
    var leaderboardDB = db.db("leaderboard");

    leaderboardDB.createCollection("Leaderboard", function(err, res) {
        if (err) throw (err);
        console.log("Leaderboard database created");

    })

    console.log("Connected to leaderboard database");
  })
});
