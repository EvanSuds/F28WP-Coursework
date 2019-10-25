function shell(){
    document.getElementById("shell").style.display = "none"; //Hide the shell until it is fired
    this.xpos = playerTank.xpos; // Shell fires from where the tank is
    this.ypos = playerTank.ypos;
    this.height = 20; // 60x20 size
    this.width = 60;
    this.speed = 3;
  
    this.fire = function(e){ //shell.fire called when left click is pressed
      document.getElementById("shell").style.display = "block"; //Make the element visible
      var mousepositions = mouseposition(e); //TODO : get the mouse position when left click is pressed
      var tankposition = {x:playerTank.xpos, y:playerTank.ypos}; // Get current tank position
      var angle = angleBetweenPoints(mousepositions,tankposition); // Get angle in radians between the points
      console.log("Angle in radians between two points: " + angle);
      this.xpos += this.speed * Math.cos(angle * Math.PI / 180);
      this.ypos += this.speed * Math.sin(angle * Math.PI / 180);
      window.ctx = gameCanvas.context;
      ctx.drawImage(document.getElementById("shell"),this.xpos,this.ypos,this.width,this.height);
  
  
   }
  }