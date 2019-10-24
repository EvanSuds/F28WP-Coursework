//Declare variables
//TODO: reduce scope of variables where possible
"use strict";

var playerTank;
var shell;
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
  //playerShell = new shell()
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
/*
document.addEventListener("leftclick" leftClick);

function leftClick() {
  shell.fire();
}
*/
//Constructor for the tank
function tank() {
 this.xpos = 300;
 this.ypos = 300;
 this.speed = 0;
 this.angle = 0;
 this.width = 120;
 this.height = 120;
//Function to update the tank on the canvas
  this.update = function() {
  window.ctx = gameCanvas.context;

  ctx.save();
  ctx.translate(this.xpos, this.ypos);
  ctx.rotate(this.angle);
  ctx.drawImage(document.getElementById("tankBody"), 0, 0, this.width, this.height, -this.width/2, -this.height/2, this.width, this.height);
  ctx.drawImage(document.getElementById("tankArm"), 35 ,- 30 ,50, 100,-25,-50,50,100);
  ctx.restore();
  }

}
/*
function shell(){
  this.hide();
  this.xpos = playerTank.xpos;
  this.ypos = playerTank.ypos;
  this.height = 60;
  this.width = 20;



  this.fire = function(){
   this.show();
   shell.setSpeed(15);
   this.setBoundAction(DIE);
   this.setPosition(playerTank.xpos, playerTank.ypos);
   this.setAngle(tankArm.getImgAngle());
   this.setImage("shell.png");
   this.setSpeed(15);
 }
}
*/
//Function to clear and redraw the canvas
function updateGameCanvas() {
    gameCanvas.clear();
    playerTank.update();
}
