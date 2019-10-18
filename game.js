//Declare variables
//TODO: reduce scope of variables where possible
var playerTank;
var up = false;
var down = false;
var left = false;
var right = false;
var xpos;
var ypos;

function startGame() {
  playerTank = new tank(300,300); //Create a new tank with starting coordinates of (300,300)
  gameCanvas.start(); //Call start function on game canvas
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
      this.context.clearRect(0,0,this.canvas.width,this.canvas.height); //Redraw the canvas
    }
  }

//Add event listener for key presses
document.addEventListener("keydown", keyDown);

 function keyDown(e){
//Assign variable based on which key was pressed
   var keyCode = e.keyCode;
     switch(keyCode) {
       case 65: //A
           xpos = xpos - 4;
           break;
       case 87: //S
           ypos = ypos - 4;
           break;
       case 68: //D
           xpos = xpos + 4;
           break;
       case 83: //W
           ypos = ypos + 4;
           break;

     }
}

window.addEventListener('mousemove', function(ev) {
  mouse[0] = ev.clientX
  mouse[1] = ev.clientY
})
//Constructor for the tank
function tank(startxpos,startypos) {
 xpos = Math.floor(Math.random()*(window.innerWidth-130));
 ypos = Math.floor(Math.random()*(window.innerHeight-130));


//Function to update the tank on the canvas
  this.update = function() {
    ctx = gameCanvas.context;
    //Draw tank on canvas using tankBody HTML image element
    //TODO: Get tank to rotate, get arm to point at cursor

    var rotation = math.atan2(mouse[0] - xpos, mouse[1] - ypos) * 180 / math.pi;

    ctx.drawImage(document.getElementById("tankBody"), xpos, ypos,120, 120);
    ctx.drawImage(document.getElementById("tankArm"), xpos + 35 , ypos - 30 ,50, 100);
    ctx.rotation(rotation);

  }
}
//Function to clear and redraw the canvas
function updateGameCanvas() {
    gameCanvas.clear();
    playerTank.update();
}
