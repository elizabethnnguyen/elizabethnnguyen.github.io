"use strict";


let vid_0;
let vid_0_playing = false;
let vid_1;
let vid_1_playing = false;
let documentActive = false; // we need to make sure they engage with page before it can auto play


function setup() {
  // dophin vid 1!
  vid_0 = createVideo(['assets/ASMR.mp4', 'ASMR.webmhd.webm']);;
  vid_0.size(600,700);

  vid_0.mouseOver(playVid_0);
  vid_0.mouseOut(pauseVid_0);
}


function draw() {}
function playVid_0() {
  if (documentActive) {
    vid_0.loop();
    vid_0_playing = true;
  }
}

function pauseVid_0() {
  vid_0.pause();
  vid_0_playing = false;
}

function mousePressed() {
  documentActive = true; // since they have clicked, now we can play
}
