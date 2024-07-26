function setup() {
  createCanvas(400, 400);
  background("black");
}

function draw() {
  stroke("green");
  fill("red");
  if (mouseIsPressed){
  rect(mouseX, mouseY, 10, 35);
  
}
}
