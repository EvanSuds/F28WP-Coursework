function shell(){
    document.getElementById("shell").style.display = "none"; //Hide the shell until it is fired

    this.height = 15; // 15x15 size
    this.width = 15;
    this.speed = 7;
    this.firing = false;
    var angleToFire = 0;

    this.fire = function(e){ //shell.fire called when left click is pressed
      document.getElementById("shell").style.display = "block"; //Make the element visible
      this.firing = true;
      this.xpos = playerTank.xpos; // Shell fires from where the tank is
      this.ypos = playerTank.ypos;

      angleToFire = this.angle * (Math.PI/180); // To ensure the angle does not change once fired
      console.log(this.angle);
      console.log(angleToFire);
      //var mousepositions = mouseposition(gameCanvas,e);
      //var tankposition = {x:this.xpos, y:this.ypos}; // Get current tank position
      //angle = angleBetweenPoints(mousepositions,tankposition); // Get angle in radians between the points
      //console.log("Angle in radians between two points: " + angle);
}
    this.update = function() {
      if(this.xpos == enemyTank.xpos && this.ypos == enemyTank.ypos) {
        console.log("collision");
        enemyTank.kill();
      }
      if(this.firing) {
      this.xpos += this.speed * Math.cos(angleToFire);
      this.ypos += this.speed * Math.sin(angleToFire);
      window.ctx = gameCanvas.context;
      ctx.drawImage(document.getElementById("shell"),playerShell.xpos,playerShell.ypos,this.width,this.height);
   }
   else {
     return;
   }
  }
}
