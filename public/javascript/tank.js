//Constructor for the tank
function tank() {
    this.xpos = 300;//Starting coordinates of (300,300)
    this.ypos = 300;
    this.width = 70;
    this.height = 70;
    this.score = 0; //Keep a score
    this.totalKilled = 0; //Keep number of players killed
   //Function to update the tank on the canvas
     this.update = function() {
     window.ctx = gameCanvas.context;
     ctx.save();
     ctx.translate(this.xpos, this.ypos);
     ctx.rotate(this.angle);
     ctx.drawImage(document.getElementById("tankBody"), 0, 0, this.width, this.height);
     ctx.restore();
     }

     this.kill = function() { //Called if the player kills another player
       playerTank.score += 100;
       playerTank.totalKilled++;
       document.getElementById("gameScore").innerHTML = playerTank.score;
       document.getElementById("gameKilled").innerHTML = playerTank.totalKilled;

     }
    }
