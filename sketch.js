let angle = 0;
let spherePosition;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  spherePosition = createVector(0, 0, 0);
}

function draw() {
  background(0);

  directionalLight(255, 255, 255, 0, 0, -1);
  ambientLight(100);
  
  let camX = map(mouseX, 0, width, -200, 200);
  let camY = map(mouseY, 0, height, -200, 200);
  camera(camX, camY, (height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0);
  
  push();
  translate(spherePosition.x, spherePosition.y, spherePosition.z);
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 0.2);
  noStroke();
  fill(100, 200, 250);
  sphere(150);
  pop();
  
  angle += 0.03;
}

function mousePressed() {
  spherePosition = createVector(random(-width/2, width/2), random(-height/2, height/2), random(-500, 500));
}