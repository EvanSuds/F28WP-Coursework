var playerTank;
var up = false;
var down = false;
var left = false;
var right = false;
var xpos;
var ypos;

function startGame() {
  var randomColour = function() { return Math.floor(Math.random() * 256);}
  var tankColour = "rgb(" + randomColour() + "," + randomColour() + "," + randomColour() + ")";
  playerTank = new tank(tankColour,300,300);
  gameCanvas.start();
}

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
      this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
  }
document.addEventListener("keydown", keyDown);

 function keyDown(e){
   console.log("keyDown function invoked");
   var keyCode = e.keyCode;
     switch(keyCode) {
       case 65:
           console.log("Left key pressed");
           xpos = xpos - 2;
           break;
       case 87:
           console.log("Up key pressed");
           ypos = ypos - 2;
           break;
       case 68:
           console.log("Right key pressed");
           xpos = xpos + 2;
           break;
       case 83:
           console.log("Down key pressed");
           ypos = ypos + 2;
           break;

     }
}
//Constructor for the tank
function tank(colour,startxpos,startypos) {
 //TODO: Random spawn positioning
 xpos = startxpos;
 ypos = startypos;
 console.log("Set initial coordinates");

this.update = function() {
    ctx = gameCanvas.context;
    ctx.fillStyle = colour;
    ctx.fillRect(xpos,ypos, 60, 60);

}
}


function updateGameCanvas() {
    gameCanvas.clear();
    playerTank.update();
}
