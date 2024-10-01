function setup() {
  createCanvas(600, 600);
  background("blue")
}

function draw() {
  
  stroke("green");
  fill("green");

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 30, 55);
  }
}
