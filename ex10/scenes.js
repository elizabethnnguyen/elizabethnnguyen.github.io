// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================




////////////////////////////// 1 /////////////////
function scene1() {
  var textX;
  var textY;

  this.setup = function() {

  }

  this.enter = function() {
    girl.visible = false;
    flame.visible = false;
    textX = 10;
    textY = 0;

    background(245, 192, 47);
    fill("black");
    textAlign(CENTER);
    textSize(15);
    text("Press keys 1, 2, 3, or 4 to jump scenes\n" +
      "Click mouse to play monosynth in scene 2\n" +
      "Click and drag mouse to play oscillator in scene 3\n", width/2, height/2);
  }


}



///////////////////////  2  ////////////////////////

function scene2() {
  this.y = 0;
  this.lox = 50;
  this.loy = 120;


  this.setup = function() {

    myanimation = flame.addAnimation("sitting", "sprites/flame0001.png", "sprites/flame0009.png");
    flame.addAnimation("singingHigh", "sprites/g4_singingFlame0001.png");
    flame.addAnimation("singingLow", "sprites/fb4_singingFlame0001.png");
    myanimation.frameDelay = 5;
  }

  // important to create object here not in set
  //this.ghosty = createSprite(this.lox, this.loy);




  this.enter = function() {
    girl.visible = false;
    flame.visible = true;
    flame.position.x = width / 2;
    flame.position.y = height / 2;
    flame.changeAnimation("sitting");

  }


  this.draw = function() {
    background(45);
    drawSprites();
  }

  this.leave = function() {
    console.log("wow");
  }


  this.mousePressed = function() {
    userStartAudio();

    var note = random(["Fb4", "G4"])
    var velocity = 1; // time from now (in seconds)
    var time = 0; // note duration (in seconds)
    var dur = 1 / 8;
    monoSynth.play(note, velocity, time, dur);
    if (note == "G4") {
      flame.changeAnimation("singingHigh");
    } else if (note == "Fb4") {
      flame.changeAnimation("singingLow");
    }

  }

  this.mouseReleased = function() {
    console.log("mouseReleased");
    if (!monoSynth.play()) {
      flame.changeAnimation("sitting");
    }
  }

}





////////////////////////////// 3 /////////////////

function scene3() {

  // this.oAnim1 = null;
  // var oAnim = null;
  this.y = 0;
  this.lox = 50;
  this.loy = 120;


  this.setup = function() {

    mySecAnimation = girl.addAnimation("default", "sprites/girl_default0001.png");
    girl.addAnimation("low", "sprites/girl_low0001.png");
    girl.addAnimation("medLow", "sprites/girl_medlow0001.png");
    girl.addAnimation("medHigh", "sprites/girl_medhigh0001.png");
    girl.addAnimation("high", "sprites/girl_high0001.png");

    mySecAnimation.frameDelay = 5;
  }


  this.enter = function() {
    flame.visible = false;
    girl.visible = true;
    girl.position.x = width / 2;
    girl.position.y = height / 2;
    girl.changeAnimation("default");

  }


  this.draw = function() {
    background(250, 222, 222);
    drawSprites();
  }

  this.mousePressed = function() {
    osc.start();
    playing = true;
    this.mouseDragged = function() {
      freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
      amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);
      if (playing) {
        // smooth the transitions by 0.1 seconds
        osc.freq(freq, 0.1);
        osc.amp(amp, 0.1);
      }
      if (freq >= 100 && freq < 200) {
        girl.changeAnimation("low");
      } else if (freq >= 200 && freq < 300) {
        girl.changeAnimation("medLow");
      } else if (freq >= 300 && freq < 400) {
        girl.changeAnimation("medHigh");
      } else if (freq >= 400 && freq <= 500) {
        girl.changeAnimation("high");
      } else {
        girl.changeAnimation("default");
      }
    }

  }

  this.mouseReleased = function() {
    console.log("mouseReleased");
    osc.amp(0, 0.5);
    playing = false;
    girl.changeAnimation("default");
  }


}



////////////////////////////// 4 /////////////////

function scene4() {
  var textX;
  var textY;
  var lox = 0;

  this.enter = function() {
    background(245, 192, 47);
  }


  this.draw = function() {
    background(245, 192, 47);
    stroke(255);
    strokeWeight(1);
    rectMode(CENTER);

    scribble.scribbleRect(width / 2 - 300, height / 2 + 50, 100, 100);
    scribble.scribbleRect(width / 2 - 150, height / 2 + 50, 100, 100);
    scribble.scribbleRect(width / 2, height / 2 + 50, 100, 100);
    scribble.scribbleRect(width / 2 + 150, height / 2 + 50, 100, 100);
    scribble.scribbleRect(width / 2 + 300, height / 2 + 50, 100, 100);

    scribble.scribbleRect(width / 2 - 300, height / 2 + 50, 10, 10);
    scribble.scribbleRect(width / 2 - 150, height / 2 + 50, 10, 10);
    scribble.scribbleRect(width / 2, height / 2 + 50, 10, 10);
    scribble.scribbleRect(width / 2 + 150, height / 2 + 50, 10, 10);
    scribble.scribbleRect(width / 2 + 300, height / 2 + 50, 10, 10);

    fill("black")
    textAlign(CENTER);
    noStroke();
    textSize(15);
    text("T H A N K   Y O U !", width / 2, height / 2 - 50)

  }

}
