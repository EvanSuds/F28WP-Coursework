//Declare variables
//TODO: reduce scope of variables where possible
"use strict";

var playerTank;
var playerShell;
var up = false;
var down = false;
var left = false;
var right = false;


var gameCanvas = {
  canvas : document.createElement("canvas"), //create a game canvas
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
  playerShell = new shell()
}


//Add event listener for key presses
document.addEventListener("keydown", keyDown);

 function keyDown(e){
//Assign variable based on which key was pressed
   var keyCode = e.keyCode;
     switch(keyCode) {
       case 65: //A
           playerTank.xpos = playerTank.xpos - 4;
           playerTank.angle = Math.PI / -2;
           break;
       case 87: //W
           playerTank.ypos = playerTank.ypos - 4;
           playerTank.angle = 0;
           break;
       case 68: //D
           playerTank.xpos = playerTank.xpos + 4;
           playerTank.angle = Math.PI / 2;
           break;
       case 83: //S
           playerTank.ypos = playerTank.ypos + 4;
           playerTank.angle = Math.PI;
           break;
     }
}

document.addEventListener("mousedown",leftClick);

function leftClick(e) {
  playerShell.fire(e);

}

function mouseposition(e) {
  var x = e.clientX;
  var y = e.clientY;
  return {x: x, y: y};
}


//Constructor for the tank
function tank() {
 this.xpos = 300;
 this.ypos = 300;
 this.width = 120;
 this.height = 120;
//Function to update the tank on the canvas
  this.update = function() {
  window.ctx = gameCanvas.context;
  ctx.save();
  ctx.translate(this.xpos, this.ypos);
  ctx.rotate(this.angle);
  ctx.drawImage(document.getElementById("tankBody"), 0, 0, this.width*1.5, this.height*1.5, -this.width/2, -this.height/2, this.width, this.height);
  ctx.drawImage(document.getElementById("tankArm"), 20 ,- 15 ,50, 100,-25,-50,50,100);
  ctx.restore();
  }

}

function angleBetweenPoints(mousepos, tankpos) {
  console.log("Mouse x position: " + mousepos.x + " Mouse y position: " + mousepos.y);
  console.log("Tank x position: " + tankpos.x + " Tank y position: " + tankpos.y);
  return Math.atan2(tankpos.y - mousepos.y, tankpos.x - mousepos.x);
}

function shell(){
  document.getElementById("shell").style.display = "none"; //Hide the shell until it is fired
  this.xpos = playerTank.xpos; // Shell fires from where the tank is
  this.ypos = playerTank.ypos;
  this.height = 20; // 60x20 size
  this.width = 60;
  this.speed = 3;

  this.fire = function(e){ //shell.fire called when left click is pressed
    document.getElementById("shell").style.display = "block"; //Make the element visible
    var mousepositions = mouseposition(e); //TODO : get the mouse position when left click is pressed
    var tankposition = {x:playerTank.xpos, y:playerTank.ypos}; // Get current tank position
    var angle = angleBetweenPoints(mousepositions,tankposition); // Get angle in radians between the points
    console.log("Angle in radians between two points: " + angle);
    this.xpos += this.speed * Math.cos(angle * Math.PI / 180);
    this.ypos += this.speed * Math.sin(angle * Math.PI / 180);
    window.ctx = gameCanvas.context;
    ctx.drawImage(document.getElementById("shell"),this.xpos,this.ypos,this.width,this.height);


 }
}

//Function to clear and redraw the canvas
function updateGameCanvas() {
    gameCanvas.clear();
    playerTank.update();
}
