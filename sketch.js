let shapesWidth, colors, randomColor;
function setup() {
  colors = [color(207, 212, 163), color(56, 93, 128)]

  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0, 0, 0);
  frameRate(30);
  noFill();
  strokeWeight(3);

}

function draw() {
  randomColor = lerpColor(colors[0], colors[1], random());
  shapesWidth = width / 6;
  const ampOfRotation = 360;
  const numberOfrectangles = 10; 

  drawRectangles(numberOfrectangles, ampOfRotation, 10,shapesWidth, height/6, randomColor)
  drawRectangles(numberOfrectangles, ampOfRotation, 10, width - shapesWidth, height - shapesWidth, randomColor)

  if(frameCount <= 270){
    drawEllipse(shapesWidth, randomColor)
  } else if (frameCount >= 270 && frameCount < 600){
    rotateRectangles(randomColor)
  } else if (frameCount >=600){
    frameCount = 0
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
  // draws small circles whenever the mouse moves 
  drawCircle(mouseX, mouseY, randomColor)
}
 
function drawCircle(posX, posY, shapeColor) {
  push();
    fill(shapeColor);
    strokeWeight(1);  
    translate(posX, posY)
    circle(0, 0, 10);
  pop();
}

function drawEllipse(shapeWidth, shapeColor){
  push();
  translate(width / 2, height / 2); 
  background(0, 0, 0, 17);
  for (let i = 0; i < 10; i++) {
      push();
        rotate(i * 360 / 10);
        stroke(shapeColor);
        ellipse(cos(frameCount) * shapeWidth, sin(frameCount), cos(frameCount)* shapeWidth)
      pop();
  }
  pop();
}

// draws multiples rectangles with different sizes
function drawRectangles(counter, ampOfRotation, side, x, y, shapeColor){
  push();
    translate(x, y);
    stroke(shapeColor);
    for (i = 0; i < counter; i++) {
      let angle = frameCount + i * 5; 
      let rotation = sin(angle) * ampOfRotation; 
      push();
      rotate(rotation);
      rect(0, 0, side * i, side * i);
      pop();
    }
  pop();
}

// draws the middle circle of rectangles 
function rotateRectangles(shapeColor){
  push();
    translate(width / 2, height / 2)
    rectMode(CENTER);
    stroke(shapeColor);
    noFill();
    rotate(frameCount/2)
    rect (0, 0, width/4, height/4);
  pop();
}
