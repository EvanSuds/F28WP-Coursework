var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
const sqlite3 = require('sqlite3').verbose();
var app = express();
var server = http.Server(app);
var io = socketIO(server);
var uname;
var playerInfoDB;
app.set('port', 5000); //Set the port to be 5000
app.use(express.static(path.join(__dirname, 'public'))); //Use the public folder to find the files

/*
* Open the index.html file first as it contains links to all the other html, css and js files
* It is stored in the public directory like all the other files but not in a subfolder.
*/

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
})


io.on('connection', function(client) { //Logs that a user has connected
  client.on('joinGame', function(createTank) {
    console.log("A new user connected");
    uname = createTank.name;
    console.log(uname + " has joined the game");
    client.emit('newTank');
  });

  client.on('newUser', function (user, pass) {

    console.log('new user function called');
    playerInfoDB.run('INSERT INTO users(username, password) VALUES(?, ?)', [user, pass]);
  });
});


setInterval(function() { //Sends message to all connected users
  io.sockets.emit('message', 'Communicating with the server!');
}, 1000);

server.listen(5000, function() {
  console.log('Starting server on port 5000');

  playerInfoDB = new sqlite3.Database('./public/databases/playerinfo.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  playerInfoDB.run('CREATE TABLE if not exists users(username text, password text)');
  console.log('Connected to the player info database.');
  });
<<<<<<< HEAD
=======

>>>>>>> 01a90e9f61780f612b304ffef72de196db60c9b4
});

});
