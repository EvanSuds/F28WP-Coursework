var playerTank;


var movement = {up:false, down:false, left:false, right:false}

//sets up listener for key press
document.addEventListener('keydown', function(userinput) {
    switch (userinput.keyCode) {
        case 65: //A Key
            movement.left = true;
            break;
        case 87: //W Key
            movement.up = true;
            break;
        case 67: //DKey
            movement.right = true;
            break;
        case 83: //S Key
            movement.down = true;
            break;

    }
})

//sets up listener for key lift
document.addEventListener('keyup', function(userinput) {
    switch (userinput.keyCode) {
        case 65:
            movement.left = false;
            break;
        case 87:
            movement.up = false;
            break;
        case 67:
            movement.right = false;
            break;
        case 83:
            movement.down = false;
            break;

    }
})

function startGame() {
  var randomColour = function() { return Math.floor(Math.random() * 256);}
  var tankColour = "rgb(" + randomColour() + "," + randomColour() + "," + randomColour() + ")";
  playerTank = new tank(tankColour);
  gameCanvas.start();
}

var gameCanvas = {
  canvas : document.createElement("canvas"), //create a game canvas
  start : function(){
    this.canvas.width = window.innerWidth; //set width to window width
    this.canvas.height = window.innerHeight; //set height to window height
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval=setInterval(updateGameCanvas,10); //How often the window refreshes
  },
    clear : function() {
      this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
  }

//Constructor for the tank
function tank(colour) {
 //TODO: Random spawn positioning
 this.xpos = 250;
 this.ypos = 250;

  this.update = function() {

    if (movement.left = true) {
      this.xpos = this.xpos - 1 ;
      console.log(this.xpos);
    }
    if (movement.up = true) {
      this.ypos = this.ypos + 1 ;
    }
    if (movement.right = true) {
      this.xpos = this.xpos + 1 ;
    }
    if (movement.down = true) {
      this.ypos = this.ypos - 1 ;
    }
    ctx = gameCanvas.context;
    ctx.fillStyle = colour;
    ctx.fillRect(this.xpos,this.ypos, 60, 60);
  }

}

function updateGameCanvas() {
    gameCanvas.clear();
    playerTank.update();
}
