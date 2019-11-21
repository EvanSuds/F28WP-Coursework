//Constructor for the tank
function tank() {
    this.xpos = 300;
    this.ypos = 300;
    this.width = 80;
    this.height = this.width*1.36;
    this.score = 0;
    this.totalKilled = 0;
   //Function to update the tank on the canvas
     this.update = function() {
     window.ctx = gameCanvas.context;
     ctx.save();
     ctx.translate(this.xpos, this.ypos);
     ctx.rotate(this.angle);
     ctx.drawImage(document.getElementById("tankBody"), 0, 0, this.width*3.03, this.height*3, -this.width/3.03, -this.height/3, this.width, this.height);
     ctx.restore();
     }

     this.kill = function() {
       playerTank.score += 100;
       playerTank.totalKilled++;
       document.getElementById("gameScore").innerHTML = playerTank.score;
       document.getElementById("gameKilled").innerHTML = playerTank.totalKilled;

     }
    }
