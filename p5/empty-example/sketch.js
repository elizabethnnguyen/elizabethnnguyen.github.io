function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background('grey');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
fill(random(255), 201, 196);
strokeWeight(0.5);
ellipse(mouseX, mouseY, 20, 20);

stroke(255);
strokeWeight(0.5);
 // note: line(x1, y1, x2, y2);

beginShape();
//head
fill(255, 199, 150);
vertex(250, 350); vertex(200, 300);
vertex(280, 370); vertex(250, 350);
vertex(300, 380); vertex(280, 370);
vertex(390, 380); vertex(300, 380);
vertex(400, 380); vertex(390, 380);
vertex(490, 350); vertex(400, 380);
vertex(500, 340); vertex(490, 350);
vertex(510, 320); vertex(500, 340);
vertex(520, 290); vertex(510, 320);
vertex(530, 230); vertex(520, 290);
vertex(530, 220); vertex(530, 230);
vertex(500, 190); vertex(530, 220);
vertex(490, 180); vertex(500, 190);
vertex(480, 140); vertex(490, 180);
vertex(470, 120); vertex(480, 140);
vertex(430, 80); vertex(470, 120);
vertex(400, 65); vertex(430, 80);
vertex(380, 60); vertex(400, 65);
vertex(330, 60); vertex(380, 60);
vertex(260, 70); vertex(330, 60);
vertex(250, 75); vertex(260, 70);
vertex(210, 100); vertex(250, 75);
vertex(200, 110); vertex(210, 100);
vertex(190, 120); vertex(200, 110);
vertex(180, 130); vertex(190, 120);
vertex(170, 150); vertex(180, 130);
vertex(160, 170); vertex(170, 150);
vertex(160, 190); vertex(160, 170);
vertex(160, 200); vertex(160, 190);
vertex(160, 200); vertex(160, 230);
vertex(180, 280); vertex(160, 230);
vertex(180, 280); vertex(190, 290);
vertex(190, 290); vertex(200, 300);
endShape();

beginShape();
//mouth
strokeWeight(1.0);
line(445, 280, 465, 275);


// beginShape();
// fill('red');
// noStroke();
// ellipse(320, 280, 120, 120);
// endShape();

//glasses
fill(255);
rotate(PI/-7.0);
strokeWeight(5.0);
vertex(210, 320); vertex(70, 350);
vertex(210, 330); vertex(350, 360);
ellipse(220, 340, 125, 155); //x, y, w, h
ellipse(370, 380, 100, 140);
endShape();

}
