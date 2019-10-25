//Constructor for the tank
function tank() {
    this.xpos = Math.floor(Math.random()*(window.innerWidth-200));
    this.ypos = Math.floor(Math.random()*(window.innerHeight-350));
    this.width = 80;
    this.height = this.width*1.36;
   //Function to update the tank on the canvas
     this.update = function() {
     window.ctx = gameCanvas.context;
     ctx.save();
     ctx.translate(this.xpos, this.ypos);
     ctx.rotate(this.angle);
     ctx.drawImage(document.getElementById("tankBody"), 0, 0, this.width*3.03, this.height*3, -this.width/3.03, -this.height/3, this.width, this.height);
     ctx.restore();
     }
    }