
var blob;
var btn1;
var head;
var p1;
var p2;
var btnCounter = 0;
var counter = 0;
let myFont;
let myOtherFont;
var input;
// var myFont = document.createElement('link');
// var url = new URL("fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap"); myFont.href = url; myFont.rel = "stylesheet"; document.head.appendChild(myFont);

function preload() {
  myFont = loadFont("Inconsolata-Light.ttf");
  myOtherFont = loadFont("Inconsolata-Regular.ttf");
}

function setup() {
  background(0);
   // this is an option if you want to only use the Dom elements
  noCanvas();
  //createCanvas(760,100);

  input = createInput();
  input.position(windowWidth/2-85, windowHeight/2);
  // create the button DOM element
  btn1 =  createButton('enter');
  // attach button listener
  btn1.mousePressed(btn1pressed);
  btn1.position(windowWidth/2+85, windowHeight/2);

}


function btn1pressed(){
   // a simple way of seeing if the json file has been loaded already.
   // is it has it will return blob as true, therefore if (!false) it will be true..
   // otherwise it will be false and not reload.
 // if (!blob) {
    // asynch loading command, with a callback function that gets called when done
    btnCounter++;
    input.value('');
    blob = loadJSON("blob.json", showBlob);
 // }
}

// this is the callback way of loading an external file
function showBlob () {

  //if button is pressed 2 or more times, then p2
  if (btnCounter>1)
  {
    p2 = createP(random(blob.phrases));
    p2.position(random(windowWidth), random(windowHeight));
  } else
  {
    p1 = createP('My name is ' + blob.name);
    p1.position(random(windowWidth), random(windowHeight));
  }

  p1.style("font-size", "20pt");
  p1.style("font-family", "Inconsolata-Regular");
  p2.style("font-size", "20pt");
  p2.style("font-family", "Inconsolata-Light");
  // p2.style("color", "255");



  //head = createElement('h1', 'This is the Color');
  //head.style(textFont(myFont));
  // this is how you can concatanate the rgb for css into a string.
  // rgba(0-255,0-255,0-255,0-1)
  // var tempStr = "rgba(" + blob.r + "," + blob.g + "," + blob.b + "," + "1)" ;
  // console.log(tempStr);
  // head.style("background-color", tempStr);
  // head.style("color", "#FFF");
  // head.style("width", "800");
  // head.style("font-size", "20pt");
  // head.style("padding", "10px");

  // this shows the whole blob json data package
  console.log(blob);


}


function draw() {
  // draw stuff here
  background(0);
}
