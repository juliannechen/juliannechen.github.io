
var colors = ["AliceBlue", "LightPink", "MistyRose", "Pink", "Black", "White", "LavenderBlush", "Lavender"]



function changeBackground() {
  var index = Math.floor(Math.random()*colors.length);
 document.body.style.backgroundColor = colors[index];
}

function changeDefault() {
  var index = Math.floor(Math.random()*colors.length);
 document.body.style.backgroundColor = "MistyRose";
}

function increase(){
  span.style.fontSize = "25px";
}
