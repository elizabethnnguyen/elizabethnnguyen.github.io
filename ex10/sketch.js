//sound
var monoSynth;
var osc;
//p5 play
var flame;
var girl;
//scene manager
var mgr;
var scribble = new Scribble();


var myanimation;

var mySecAnimation;
function preload()
{
    monoSynth = new p5.MonoSynth();
    osc = new p5.Oscillator('sine');
}

function setup() {
  //sound---------------------------------------------
  createCanvas(windowWidth, windowHeight);
  // let cnv = createCanvas(windowWidth, windowHeight);
  // cnv.mousePressed(playSynth);
  // cnv.mouseReleased(idleanim);
  mgr = new SceneManager();
  masterVolume(1.0);

  flame = createSprite(0,0);
  girl = createSprite(0,0);

  mgr.addScene(scene1);
  mgr.addScene(scene2);
  mgr.addScene(scene3);
  mgr.addScene(scene4);
  mgr.showNextScene();
  //sprite--------------------------------------------

}

function draw() {
  mgr.draw();
}

function mousePressed()
{
  mgr.mousePressed();

}

function mouseReleased()
{
  mgr.handleEvent("mouseReleased");
}

function mouseMoved()
{
  mgr.handleEvent("mouseMoved");
}

function mouseDragged()
{
  mgr.handleEvent("mouseDragged");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( scene1 );
            break;
        case '2':
            mgr.showScene( scene2 );
            break;
        case '3':
            mgr.showScene( scene3 );
            break;
        case '4':
            mgr.showScene( scene4 );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}


// function idleanim() {
//   flame.changeAnimation("sitting");
// }
//
// function playSynth() {
//   mgr.playSynth();
// }
