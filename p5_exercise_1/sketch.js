// declare variables here

var ellipseWidth;
// can also use the term: let -- instead of using var
//line above is DECLARED, but not DEFINED, need to add the value of the width i.e. -->
  // var ellipseWidth = 200;

function setup() {
  // put setup code here --> this runs once upon launch

  console.log("in set up");

  createCanvas(1285, 600);

}


function draw() {
  // put drawing code here --> this loops every frame

  console.log("in draw");


  background(255, 150, 200, 50);
  // 4th parameter is "transparency"

// can also do random colors to give strobe effect: "fill(random(0,130) random (0,100))"
  fill(170, 200, 100);
  rectMode("CENTER");
  rect(360, 110, 80, 200);

  fill(0, 0, 0);
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(mouseX, mouseY, 120);

}


// write custom functions here
