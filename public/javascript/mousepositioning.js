document.addEventListener("mousedown",leftClick);


function leftClick(e) {
  playerShell.fire(e);

}
function mouseposition(canvas,e) {
  /*
  var canvasOffset=$("canvas").offset();
  var offsetX = canvasOffset.left;
  var offsetY = canvasOffset.top;
  var x = parseInt(e.clientX-offsetX);
  var y = parseInt(e.clientY-offsetY);
  return {x: x, y: y};
  */

  var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
}


function angleBetweenPoints(mousepos, tankpos) {
  console.log("Mouse x position: " + mousepos.x + " Mouse y position: " + mousepos.y);
  console.log("Tank x position: " + tankpos.x + " Tank y position: " + tankpos.y);
  return Math.atan2(mousepos.y - tankpos.y, mousepos.x - tankpos.x);
}
