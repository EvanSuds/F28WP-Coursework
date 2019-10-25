//Add event listener for key presses
document.addEventListener("keydown", keyDown);

 function keyDown(e){
//Assign variable based on which key was pressed
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
     }
}