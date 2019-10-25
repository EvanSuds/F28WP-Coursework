document.addEventListener("mousedown",leftClick);

function leftClick(e) {
  playerShell.fire(e);

}

function mouseposition(e) {
  var x = e.clientX;
  var y = e.clientY;
  return {x: x, y: y};
}


function angleBetweenPoints(mousepos, tankpos) {
  console.log("Mouse x position: " + mousepos.x + " Mouse y position: " + mousepos.y);
  console.log("Tank x position: " + tankpos.x + " Tank y position: " + tankpos.y);
  return Math.atan2(tankpos.y - mousepos.y, tankpos.x - mousepos.x);
}