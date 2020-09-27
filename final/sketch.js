
var mgr;
var trash;
var folder;
var web;
var vlc;
var mail;
var momicon;
var momiconHover;
var momiconActive;
var momiconHoverActive;
var momprofilepic;
var momprofile;
var blueplant;
var purpleplant;
var jennicon;
var jenniconHover;
var jenniconActive;
var jenniconHoverActive;
var jennprofilepic;
var jennprofile;
var angry;
var kevicon;
var keviconHover;
var keviconActive;
var keviconHoverActive;
var kevprofilepic;
var stars;
var pepper;
var ramen;
var boticon;
var myFont;
var button;
var button2;
var backbutton;
var backHover;
var messageReceived;
var opening;
var ending;


function preload()
{
    myFont = loadFont("assets/Lucida-Typewriter-Regular.otf");
    messageReceived = loadSound("assets/msgReceived.mp3");
    opening = loadSound("assets/opening.mp3");
    ending = loadSound("assets/ending.mp3");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mgr = new SceneManager();
  // masterVolume(1.0);

  blueplant = createSprite(0,0);
  myanimation1 = blueplant.addAnimation("blue", "assets/blueplant1.png",  "assets/blueplant3.png");
  myanimation1.frameDelay = 8;
  purpleplant = createSprite(0,0);
  myanimation2 = purpleplant.addAnimation("purple", "assets/purpleplant1.png",  "assets/purpleplant3.png");
  myanimation2.frameDelay = 8;

  angry = createSprite(0,0);
  myanimation3 = angry.addAnimation("angry", "assets/angry1.png",  "assets/angry2.png");
  myanimation3.frameDelay= 8;

  stars = createSprite(0,0);
  myanimation4 = stars.addAnimation("angry", "assets/star1.png",  "assets/star3.png");
  myanimation4.frameDelay= 8;
  pepper = createSprite(0,0);
  myanimation5 = pepper.addAnimation("angry", "assets/pepper1.png",  "assets/pepper2.png");
  myanimation5.frameDelay= 8;


  button = createButton("view");
  button2 = createButton("Got it!");
  trash = loadImage("assets/trash.png");
  folder = loadImage("assets/folder.png");
  web = loadImage("assets/web.png");
  vlc = loadImage("assets/vlc.png");
  mail = loadImage("assets/mail.png");
  momicon = loadImage("assets/momicon.png");
  momiconHover = loadImage("assets/momiconHover.png");
  momiconActive = loadImage("assets/momiconActive.png");
  momiconHoverActive = loadImage("assets/momiconHoverActive.png");
  momprofilepic = loadImage("assets/momprofilepic.png");
  momprofile = loadImage("assets/momprofile.png");
  jennicon = loadImage("assets/jennicon.png");
  jenniconHover = loadImage("assets/jenniconHover.png");
  jenniconActive = loadImage("assets/jenniconActive.png");
  jenniconHoverActive = loadImage("assets/jenniconHoverActive.png");
  jennprofilepic = loadImage("assets/jennprofilepic.png");
  jennprofile = loadImage("assets/jennprofile.png");
  kevicon = loadImage("assets/kevicon.png");
  keviconHover = loadImage("assets/keviconHover.png");
  keviconActive = loadImage("assets/keviconActive.png");
  keviconHoverActive = loadImage("assets/keviconHoverActive.png");
  kevprofilepic = loadImage("assets/kevprofilepic.png");
  ramen = loadImage("assets/ramen.png");
  boticon = loadImage("assets/boticon.png");
  backbutton = loadImage("assets/back.png");
  backHover = loadImage("assets/backHover.png");


  mgr.addScene(help);
  mgr.addScene(preInitial);
  mgr.addScene(intro);
  mgr.addScene(mom);
  mgr.addScene(momProfile);
  mgr.addScene(jennProfile);
  mgr.addScene(transitionToJenn1);
  mgr.addScene(transitionToJenn2);
  mgr.addScene(jennThreeResponse1);
  mgr.addScene(momThreeResponse1);
  mgr.addScene(jenn);
  mgr.addScene(momProfile2);
  mgr.addScene(jennProfile2);
  mgr.addScene(transitionToMom1);
  mgr.addScene(transitionToMom2);
  mgr.addScene(jennThreeResponse2);
  mgr.addScene(momThreeResponse2);
  mgr.addScene(scene11);
  mgr.addScene(kev);
  mgr.addScene(kevprofile);
  mgr.addScene(botLeaves);
  mgr.showNextScene();

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
        // case 'h':
        //     mgr.showScene( help );
        //     break;
        case ' ':
            mgr.showScene( help );
            break;
    }
      // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}


function buttonPress() {
  mgr.showScene( intro );
  // break;
}

function button2Press() {
  mgr.showScene( preInitial );
  // break;
}

// function setOfResponses() {
//   text(obj.response1,600,600);
// }
