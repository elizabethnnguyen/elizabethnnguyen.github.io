"use strict";


let vid_0;
let vid_0_playing = false;
let vid_1;
let vid_1_playing = false;
let documentActive = false; // we need to make sure they engage with page before it can auto play


function setup() {
  noCanvas();
  // dophin vid 1!
  vid_0 = createVideo(['assets/CATS.mp4', 'CATS.webmhd.webm']);;
  vid_0.size(650,400);
vid_0.parent("#videoDiv");

  vid_0.mouseOver(playVid_0);
  vid_0.mouseOut(pauseVid_0);
}


function draw() {
}

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















function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
