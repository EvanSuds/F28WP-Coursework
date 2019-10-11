var movement = {up:false, down:false, left:false, right:false}
//sets up listener for key press
document.addEventListener('keydown', function(userinput) {
    switch (userinput.keyCode) {
        case 65: //A Key
            movement.left = true;
            break;
        case 87: //W Key
            movement.up = true;
            break;
        case 67: //DKey
            movement.right = true;
            break;
        case 83: //S Key
            movemnt.down = true;
            break;

    }
});

//sets up listener fpr key lift
document.addEventListener('keyup', function(userinput) {
    switch (userinput.keyCode) {
        case 65:
            movement.left = false;
            break;
        case 87:
            movement.up = false;
            break;
        case 67:
            movement.right = false;
            break;
        case 83:
            movemnt.down = false;
            break;

    }
});