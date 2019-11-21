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
}

    function isColliding(enemyTank,playerShell) {
      return !(
       ((enemyTank.ypos + enemyTank.height) < (playerShell.ypos)) ||
       ((enemyTank.ypos) > (playerShell.ypos + playerShell.height)) ||
       ((enemyTank.xpos + enemyTank.width) < (playerShell.xpos)) ||
       ((enemyTank.xpos) > (playerShell.xpos + playerShell.width))
   );
          }
    this.update = function() {
      if(isColliding(enemyTank, playerShell) && this.firing) {
        var kill = true;
        this.firing = false;
      }

      if(kill) {
        playerTank.kill();
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
