//Declare variables
//TODO: reduce scope of variables where possible
"use strict";

var playerTank;
var enemyTank; // Single player tank for testing purposes
var playerShell;
var up = false;
var down = false;
var left = false;
var right = false;

var gameCanvas = {
  canvas : document.createElement('canvas'),//create a game canvas
  start : function(){
    this.canvas.width = window.innerWidth; //set width to window width
    this.canvas.height = window.innerHeight; //set height to window height
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval=setInterval(updateGameCanvas,20); //How often the window refreshes
  },
    clear : function() {
      this.context.clearRect(0,0,this.canvas.width,this.canvas.height); //Redraw the canvas
    }
}


function startGame() {
  gameCanvas.start();
  playerTank = new tank(); //Create a new tank with starting coordinates of (300,300)
  enemyTank = new tank();
  playerShell = new shell();
  playerShell.angle = -90;  
}

//Function to clear and redraw the canvas
function updateGameCanvas() {
    gameCanvas.clear();
    playerTank.update();
    enemyTank.update();
    playerShell.update();
}
