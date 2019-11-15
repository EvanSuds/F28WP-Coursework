function shell(){
    document.getElementById("shell").style.display = "none"; //Hide the shell until it is fired

    this.height = 15; // 15x15 size
    this.width = 15;
    this.speed = 7;
    this.firing = false;
    var angle = 0;

    this.fire = function(e){ //shell.fire called when left click is pressed
      document.getElementById("shell").style.display = "block"; //Make the element visible
      this.firing = true;
      this.xpos = playerTank.xpos; // Shell fires from where the tank is
      this.ypos = playerTank.ypos;
      var mousepositions = mouseposition(e); //TODO : get the mouse position when left click is pressed
      var tankposition = {x:this.xpos, y:this.ypos}; // Get current tank position
      angle = angleBetweenPoints(mousepositions,tankposition); // Get angle in radians between the points
      console.log("Angle in radians between two points: " + angle);
}
    this.update = function() {
      if(this.xpos == enemyTank.xpos && this.ypos == enemyTank.ypos) {
        console.log("collision");
        enemyTank.kill();
      }
      if(this.firing) {
      this.xpos += this.speed * Math.cos(angle);
      this.ypos += this.speed * Math.sin(angle);
      window.ctx = gameCanvas.context;
      ctx.drawImage(document.getElementById("shell"),playerShell.xpos,playerShell.ypos,this.width,this.height);
   }
   else {
     return;
   }
  }
}
