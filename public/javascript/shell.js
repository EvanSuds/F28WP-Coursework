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

  function isColliding(rect1,rect2) { //Check if the objects are colliding using bounding rectangles
    if (rect1.xpos-35 < rect2.xpos + rect2.width
      && rect1.xpos + rect1.width-35 > rect2.xpos 
      && rect1.ypos-35 < rect2.ypos + rect2.height 
      && rect1.ypos + rect1.height-35 > rect2.ypos) {
        return true;
      }
        return false;
    }

    this.update = function() { //Update function
      //if(isColliding(enemyTank, playerShell) && this.firing) { //Check if the shell has collided
        var kill = false;
        //this.firing = false; //Stop firing
      //}
      if(kill) {
        playerTank.kill(); //Call kill function
      }

      if(this.firing) { //Move projectile across screen and draw on canvas
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
