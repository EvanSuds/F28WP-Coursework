//Constructor for the tank
function tank() {
    var socket = io();

    this.xpos = 300;//Starting coordinates of (300,300)
    this.ypos = 300;
    this.width = 70;
    this.height = 70;
    this.score = 0; //Keep a score
    this.totalKilled = 0; //Keep number of players killed
   //Function to update the tank on the canvas
     this.update = function() {
     window.ctx = gameCanvas.context;
     ctx.save(); //saves the state of the game canvas
     ctx.translate(this.xpos, this.ypos); //changes the origin of the canvas to the center of the tank
     ctx.rotate(this.angle); //rotates the entire canvas by the desired angle
     ctx.drawImage(document.getElementById("tankBody"),-this.width/2,-this.height/2,this.width,this.height); //redraw the tank on the rotated canvas pointing upwards
     ctx.restore(); //restore the canvas original rotation therefore also rotating the tank to the desired position
     }

     this.kill = function() { //Called if the player kills another player
       playerTank.score += 100;
       playerTank.totalKilled++;
       document.getElementById("gameScore").innerHTML = playerTank.score;
       document.getElementById("gameKilled").innerHTML = playerTank.totalKilled;

     }
    }
