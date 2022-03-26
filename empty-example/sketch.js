function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(55);

  textSize(18);
  fill(255, 255, 255);
  text("Harder, better, faster, stronger", 10, 20);
}

function draw() {
  // put drawing code here
  ellipse(mouseX, mouseY, 20);
}
