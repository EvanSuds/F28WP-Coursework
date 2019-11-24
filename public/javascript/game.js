const sqlite3 = require('sqlite3').verbose();
//Declare variables
"use strict";
var playerTank;
var enemyTank;
var playerShell;
var up = false;
var down = false;
var left = false;
var right = false;
var socket = io();
var username = prompt("Please choose a username");

let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the database.');
});

var gameCanvas = {
  canvas : document.createElement('canvas'), //Create a game canvas
  start : function(){
    this.canvas.width = window.innerWidth; //Set width to window width
    this.canvas.height = window.innerHeight; //Set height to window height
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval=setInterval(updateGameCanvas,20); //How often the window refreshes
  },
    clear : function() {
      this.context.clearRect(0,0,this.canvas.width,this.canvas.height); //Redraw the canvas
    }
}

function startGame() {
  playerTank = new tank();
  enemyTank = new tank();
  gameCanvas.start();
  playerShell = new shell(); //Create a shell object
  playerShell.angle = -90; //The starting angle is -90 (which is towards the top of the screen)
   //Using socket.io to allow communication between the client and server
  socket.on('message', function(data) { //Receive a text message from the server
    console.log(data); //Log ("Communicating with the server!")
  });

// TODO - When server completed, create new row in table when player joins game
  db.run('CREATE TABLE scores(username text, score int)');
  db.run('CREATE TABLE playerInfo(username text, KD real, deaths int, kills int)');
}

$(document).ready( function(){
    console.log("Ready to play, calling joinGame function on server");
    socket.emit('joinGame', {name: username});
    document.getElementById("playerName").innerHTML = username;
});

//Function to clear, update and redraw the canvas and the elements on it
function updateGameCanvas() {
    gameCanvas.clear();
    playerTank.update();
    enemyTank.update();
    playerShell.update();
}
