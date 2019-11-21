//Add event listener for key presses
document.addEventListener("keydown", keyDown);

 function keyDown(e){
/* Assign variable based on which key was pressed
* Uses a switch case and the ASCII code of the key press to determine
* what to do.
* For the movement, WASD is used. It adjusts the tanks x and y coordinates as well
* as the angle of the tank.
* For the projectile angle, q and e is used. This rotates the angle around by
* 2 degrees every keypress.
*/
   var keyCode = e.keyCode;
     switch(keyCode) {
       case 65: //A
           playerTank.xpos = playerTank.xpos - 4;
           playerTank.angle = Math.PI / -2;
           break;
       case 87: //W
           playerTank.ypos = playerTank.ypos - 4;
           playerTank.angle = 0;
           break;
       case 68: //D
           playerTank.xpos = playerTank.xpos + 4;
           playerTank.angle = Math.PI / 2;
           break;
       case 83: //S
           playerTank.ypos = playerTank.ypos + 4;
           playerTank.angle = Math.PI;
           break;
      case 81: //Q
          if(playerShell.angle >  270) {
            playerShell.angle = -90;
          }
          if(playerShell.angle < -90) {
            playerShell.angle = 360 + playerShell.angle;
          }
          playerShell.angle-=2;
          //Update angle in HTML table
          document.getElementById("tankAngle").innerHTML = (playerShell.angle + 90) + " degree(s)";
          break;
      case 69: //E
          if(playerShell.angle > 270) {
            playerShell.angle = -90;
          }
          if(playerShell.angle < -90) {
            playerShell.angle = 360 + playerShell.angle;
          }
          playerShell.angle+=2;
          //Update angle in HTML table
          document.getElementById("tankAngle").innerHTML = (playerShell.angle + 90) + " degree(s)";
          break;
     }
}
