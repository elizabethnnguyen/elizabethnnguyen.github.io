// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================



function help(){
  var newMsg2 = "Welcome! Before you get started, I want to let you know that the goal of the game is simple: finish your chat til the end!"
  var directions2 = "You will be able to pick and choose different responses per character. The KEEPER will be the only one you'll talk to directly, but it will guide you to respond to your friends and family indirectly. Viewing buddy profiles before replying will trigger a third response. You can press 'space' anytime during the game to restart."


  this.enter = function() {
    button.hide();
    button2.mousePressed(button2Press);
    background(168, 208, 230);
    rectMode(CENTER);
    noStroke();
    fill(230);
    rect(width/2,height/2,600,400,40);
    fill(247, 108, 108);
    rect(width/2,height/2-180,600,50,40,40,0,0); //bar
    fill(50,50,50);
    // textAlign(CENTER);
    textFont(myFont);
    textSize(15);
    textLeading(20);
    text(newMsg2, width/2+10, height/2-10, 550,200)
    textSize(15);
    text(directions2, width/2+10, height/2+70, 550,200)

    button2.size(100,50);
    button2.position(width/2-45,height/2+120);
    button2.style("font-family", "Lucida-Typewriter-Regular");
    button2.style("background-color", "#f76c6c");
    button2.style("font-size", "15px");
    button2.show();

  }

  this.draw = function() {
    imageMode(CENTER);
    image(trash,50,50,55,55);
    image(folder,50,150,50,50);
    image(web,50,250,70,55);
    image(vlc,50,350,60,60);
    image(mail,50,450,60,60);

  }


}
////////////////////////////// 1 /////////////////
function preInitial() {
  var newMsg = "You have new messages!"
  var directions =  "Click the button below to view your messages."
  // this.setup = function() {
  //
  // }

  this.enter = function() {
    button2.hide();
    opening.play();
    button.mousePressed(buttonPress);
    background(168, 208, 230);
    rectMode(CENTER);
    noStroke();
    fill(230);
    rect(width/2,height/2,300,220,40);
    fill(247, 108, 108);
    rect(width/2,height/2-100,300,50,40,40,0,0); //bar
    fill(50,50,50);
    // textAlign(CENTER);
    textFont(myFont);
    textSize(15);
    textLeading(20);
    text(newMsg, width/2+35, height/2+5, 300,100)
    textSize(15);
    text(directions, width/2+10, height/2+40, 250,100)


    button.size(100,50);
    button.position(width/2-50,height/2+45);
    button.style("font-family", "Lucida-Typewriter-Regular");
    button.style("background-color", "#f76c6c");
    button.style("font-size", "15px");
    button.show();

  }

  this.draw = function() {
    imageMode(CENTER);
    image(trash,50,50,55,55);
    image(folder,50,150,50,50);
    image(web,50,250,70,55);
    image(vlc,50,350,60,60);
    image(mail,50,450,60,60);

  }

}
///////////////////////  2  ////////////////////////
function intro() {
var sTime;
var response1;
var response2;


  this.setup = function() {

    response1 = new Clickable();
    response2 = new Clickable();

    //==========RESPONSE #1===========//
    response1.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+170;
    this.width = 550;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "What did Mom say?";
    }

    response1.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+170;
    this.width = 550;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "What did Mom say?";
    this.textColor = "#000000";
    }

    response1.onPress = function(){
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+30,height/2-10,400,80,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(23);
      textLeading(35);
      text("Tell me what Mom said.", width/2+50, height/2+40);
      setTimeout(() => { mgr.showScene(mom); }, 1000);
    }


    //==========RESPONSE #2===========//

    response2.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+230;
    this.width = 550;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "Let's see what Jenn wanted.";
    }

    response2.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+230;
    this.width = 550;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "Let's see what Jenn wanted.";
    this.textColor = "#000000";
    }

    response2.onPress = function(){
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+60,height/2-10,370,80,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(23);
      textLeading(35);
      text("What's up with Jenn?", width/2+80, height/2+40);
      setTimeout(() => { mgr.showScene(jenn); }, 1000);
    }
    //==========end of responses===========//

  }




  this.enter = function() {
    button.hide();
    button2.hide();
    sTime = millis();
    messageReceived.play();
    background(168, 208, 230);
    setTimeout(() => {  messageReceived.play(); }, 1000);
    rectMode(CENTER);
    noStroke();
    fill(230);
    rect(width/2,height/2,900,600,40); //chat window
    fill(200);
    rect(width/2-325,height/2,250,600,40,0,0,40); //buddy list

    fill(230);
    strokeWeight(0.5);
    stroke(180);
    rect(width/2-325,height/2-200,248,100); //active buddy

    fill(200); //hover 180
    rect(width/2-325,height/2-100,248,100); //other inactive buddies
    rect(width/2-325,height/2-100,248,100); //other inactive buddies
    rect(width/2-325,height/2,248,100); //other inactive buddies
    rect(width/2-325,height/2+100,248,100); //other inactive buddies
    rect(width/2-325,height/2+200,248,100); //other inactive buddies

    noStroke();
    fill(247, 108, 108);
    rect(width/2,height/2-275,900,50,40,40,0,0); //bar
    fill(255);
    rect(width/2+125,height/2+210,620,150,40); //response box

    image(boticon, width/2-445, height/2-230, 240, 60); //bot icon
    image(momicon, width/2-445, height/2-130, 240, 60); //mom icon
    image(jennicon, width/2-445, height/2-30, 240, 60); //jenn icon
    image(kevicon, width/2-445, height/2+70, 240, 60); //kev icon


  }

  this.draw = function() {

    imageMode(CENTER);
    image(trash,50,50,55,55);
    image(folder,50,150,50,50);
    image(web,50,250,70,55);
    image(vlc,50,350,60,60);
    image(mail,50,450,60,60);

//texts
    rectMode(CORNER);
    noStroke();
    fill(55,71,133);
    rect(width/2-180,height/2-220,120,50,10); //BOX
    fill(255);
    textFont(myFont);
    textSize(23);
    textLeading(35);
    text("Hello", width/2-160, height/2-187)




      if(!this.sceneManager.isCurrent(preInitial) || !this.sceneManager.isCurrent(help))
      {

        if((millis() - sTime)>1000)
        {

          rectMode(CORNER);
          noStroke();
          fill(55,71,133);
          rect(width/2-180,height/2-160,300,120,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(23);
          textLeading(35);
          text("You have some\n"+"messages left by\n"+"MOM and JENN.", width/2-160, height/2-130)
          response1.draw();
          response2.draw();

          }


        }

      }



}




////////////////////////////// SCENE 3: MOM  ////////////////////////////
function mom() {
var sTime;
var response3;
var response4;
var mom;

  this.setup = function() {

    response3 = new Clickable();
    response4 = new Clickable();
    mom = new Clickable();

    mom.onHover = function(){
    this.color = "#ffffff";
    this.x = width/2-445;
    this.y = height/2-130;
    this.width = 240;
    this.height = 60;
    this.img = momiconHoverActive;
    }

    mom.onOutside = function(){
    this.color = "#ffffff";
    this.x = width/2-445;
    this.y = height/2-130;
    this.width = 240;
    this.height = 60;
    this.img = momiconActive;
    }

    mom.onPress = function(){
      mgr.showScene(momProfile);
    }


    //==========RESPONSE #1===========//
    response3.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+170;
    this.width = 550;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "I'm good.";
    }

    response3.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+170;
    this.width = 550;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "I'm good.";
    this.textColor = "#000000";
    }

    response3.onPress = function(){
      //image(reply3, width/2+140,height/2-20,280,100); //reply#3
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+110,height/2-10,330,80,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(23);
      textLeading(35);
      text("Tell her I'm\n"+"doing good. Thanks.", width/2+120, height/2+20);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+70,250,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Message sent.", width/2-160, height/2+100);
        messageReceived.play();
      }, 1000); //msg sent image
      setTimeout(() => { mgr.showScene(transitionToJenn1); }, 3000); //change scene
    }



    //==========RESPONSE #2===========//

    response4.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+230;
    this.width = 550;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "(Ignore)";
    }

    response4.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+230;
    this.width = 550;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "(Ignore)";
    this.textColor = "#000000";
    }

    response4.onPress = function(){
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+250,height/2,180,50,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(23);
      textLeading(35);
      text("Ignore it.", width/2+260, height/2+30);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+60,300,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Message ignored.", width/2-160, height/2+90);
        messageReceived.play();
      }, 1000); //msg ignored image
      setTimeout(() => { mgr.showScene(transitionToJenn1); }, 3000); //change scene
    }
    //==========end of responses===========//
  }


  this.enter = function() {
    button.hide();
    button2.hide();
    sTime = millis();
    messageReceived.play();
    background(168, 208, 230);
    setTimeout(() => {  messageReceived.play(); }, 1000);
    rectMode(CENTER);
    noStroke();
    fill(230);
    rect(width/2,height/2,900,600,40);
    fill(200);
    rect(width/2-325,height/2,250,600,40,0,0,40);

    fill(230);
    strokeWeight(0.5);
    stroke(180);
    rect(width/2-325,height/2-200,248,100); //active buddy

    fill(215);
    rect(width/2-325,height/2-100,248,100); //other inactive buddies
    fill(200);
    rect(width/2-325,height/2,248,100); //other inactive buddies
    rect(width/2-325,height/2+100,248,100); //other inactive buddies
    rect(width/2-325,height/2+200,248,100); //other inactive buddies

    fill(247, 108, 108);
    rect(width/2,height/2-275,900,50,40,40,0,0); //bar

    fill(255);
    rect(width/2+125,height/2+210,620,150,40);

    image(boticon, width/2-445, height/2-230, 240, 60); //bot icon
    //image(momicon, width/2-445, height/2-130, 240, 60); //mom icon
    image(jennicon, width/2-445, height/2-30, 240, 60); //jenn icon
    image(kevicon, width/2-445, height/2+70, 240, 60); //kev icon
  }


  this.draw = function() {
    mom.draw();
    imageMode(CENTER);
    image(trash,50,50,55,55);
    image(folder,50,150,50,50);
    image(web,50,250,70,55);
    image(vlc,50,350,60,60);
    image(mail,50,450,60,60);

    //TEXTS
    rectMode(CORNER);
    noStroke();
    fill(55,71,133);
    rect(width/2-180,height/2-230,300,120,10); //BOX
    fill(255);
    textFont(myFont);
    textSize(23);
    textLeading(35);
    text("MOM wants to\n"+"know how you're\n"+"doing.", width/2-160, height/2-200)


    if(!this.sceneManager.isCurrent(preInitial) || !this.sceneManager.isCurrent(intro) || !this.sceneManager.isCurrent(help))
    {

      if((millis() - sTime)>1000)
      {
        noStroke();
        fill(55,71,133);
        rect(width/2-180,height/2-100,300,80,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("What would you\n"+"like to say?", width/2-160, height/2-70)
        response3.draw();
        response4.draw();
      }
    }
  }




}
////////////////////////////// SCENE 7: MOM PROFILE //////////////////////////
function momProfile() {
var back;

  this.setup = function() {
    background(168, 208, 230);

    blueplant.position.x=width/2+80;
    blueplant.position.y=height/2+180;
    blueplant.scale=0.5;
    purpleplant.position.x=width/2+250;
    purpleplant.position.y=height/2+180;
    purpleplant.scale=0.5;


    back = new Clickable();
    back.onHover = function(){
      this.img = backHover;
      this.x=width/2-410;
      this.y=height/2-200;
      this.width=50;
      this.height=50;
    }

    back.onOutside = function(){
      this.img=backbutton;
      this.x=width/2-410;
      this.y=height/2-200;
      this.width=50;
      this.height=50;
    }

    back.onPress = function(){
      mgr.showScene(momThreeResponse1);
    }

}
  this.enter = function() {
    button.hide();
    button2.hide();
    angry.visible=false;
    pepper.visible=false;
    stars.visible=false;
    blueplant.visible=true;
    purpleplant.visible=true;
  }

  this.draw = function() {
    background(168, 208, 230);
    rectMode(CENTER);
    noStroke();
    fill(230);
    rect(width/2,height/2,900,600,40); //chat window
    fill(200);
    rect(width/2-410,height/2,80,600,40,0,0,40); //buddy list
    noStroke();
    fill(247, 108, 108);
    rect(width/2,height/2-275,900,50,40,40,0,0); //bar

    image(momprofilepic,width/2-380,height/2-250,300,300); //profile pic
    fill(255);
    rect(width/2+175,height/2+25,500,500,40);
    rect(width/2-223,height/2+165,250,220,40);

    fill(0);
    textFont(myFont);
    textSize(13);
    textLeading(30);
    text("Name: Mom\n"+                                       //prof description
        "Favorite color: purple!\n"+
        "Hobby: gardening\n"+
        "Status: offline\n\n"+
        "Last online: 4 hours ago", width/2-335, height/2+95);

    image(momprofile,width/2,height/2-60,350,220);
    text("Added a new member! The family is growing!", width/2-20,height/2-80);
    textSize(10);
    text("Updated 4 hours ago:", width/2-40,height/2-140);
    stroke(0);
    line(width/2-40,height/2-139,width/2+103,height/2-139);

    imageMode(CENTER);
    image(trash,50,50,55,55);
    image(folder,50,150,50,50);
    image(web,50,250,70,55);
    image(vlc,50,350,60,60);
    image(mail,50,450,60,60);
    drawSprites();
    back.draw();

  }


}
////////////////////////////// SCENE 8: JENN PROFILE //////////////////////////
function jennProfile() {
var back2;

  this.setup = function() {
    background(168, 208, 230);
    angry.position.x=width/2+280;
    angry.position.y=height/2-90;
    angry.scale=0.3;



    back2 = new Clickable();
    back2.onHover = function(){
      this.img = backHover;
      this.x=width/2-410;
      this.y=height/2-200;
      this.width=50;
      this.height=50;
    }

    back2.onOutside = function(){
      this.img=backbutton;
      this.x=width/2-410;
      this.y=height/2-200;
      this.width=50;
      this.height=50;
    }

    back2.onPress = function(){
      mgr.showScene(jennThreeResponse1);
    }

}
  this.enter = function() {
    button.hide();
    button2.hide();
    blueplant.visible=false;
    purpleplant.visible=false;
    pepper.visible=false;
    stars.visible=false;
    angry.visible=true;
  }

  this.draw = function() {
    background(168, 208, 230);
    rectMode(CENTER);
    noStroke();
    fill(230);
    rect(width/2,height/2,900,600,40); //chat window
    fill(200);
    rect(width/2-410,height/2,80,600,40,0,0,40); //buddy list
    noStroke();
    fill(247, 108, 108);
    rect(width/2,height/2-275,900,50,40,40,0,0); //bar

    image(jennprofilepic,width/2-380,height/2-250,300,300); //profile pic
    fill(255);
    rect(width/2+175,height/2+25,500,500,40);
    rect(width/2-223,height/2+165,250,220,40);
    image(jennprofile,width/2,height/2+10,350,240);


    fill(0);
    textFont(myFont);
    textSize(13);
    textLeading(30);
    text("Name: Jenn\n"+                                       //prof description
        "Favorite color: teal!\n"+
        "Hobby: drawing\n"+
        "Status: offline\n\n"+
        "Last online: 2 hours ago", width/2-335, height/2+95);
    text("This week's been terrible!\n"+"I have so much on my mind. Friday needs to\n"+"come sooner! In the meantime, drawing helps.", width/2-20,height/2-80);
    textSize(10);
    text("Updated 2 hours ago:", width/2-40,height/2-140);
    stroke(0);
    line(width/2-40,height/2-139,width/2+103,height/2-139);

    imageMode(CENTER);
    image(trash,50,50,55,55);
    image(folder,50,150,50,50);
    image(web,50,250,70,55);
    image(vlc,50,350,60,60);
    image(mail,50,450,60,60);
    drawSprites();
    back2.draw();

  }


}
////////////////////////////// SCENE 5: TRANSITION TO JENN //////////////////////////
function transitionToJenn1() {
  var response5;
  var response6;
  var sTime;
  var jenn;

    this.setup = function() {


      response5 = new Clickable();
      response6 = new Clickable();
      jenn = new Clickable();

      jenn.onHover = function(){
      this.color = "#ffffff";
      this.x = width/2-445;
      this.y = height/2-30;
      this.width = 240;
      this.height = 60;
      this.img = jenniconHoverActive;
      }

      jenn.onOutside = function(){
      this.color = "#ffffff";
      this.x = width/2-445;
      this.y = height/2-30;
      this.width = 240;
      this.height = 60;
      this.img = jenniconActive;
      }

      jenn.onPress = function(){
        mgr.showScene(jennProfile);
      }

      //==========RESPONSE #1===========//
      response5.onHover = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.textColor = "#a8a8a8";
      this.x = width/2-160;
      this.y = height/2+170;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "I need to check my schedule.";
      }

      response5.onOutside = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.x = width/2-160;
      this.y = height/2+170;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "I need to check my schedule.";
      this.textColor = "#000000";
      }

      response5.onPress = function(){
        //image(reply3, width/2+140,height/2-20,280,100); //reply#3
        rectMode(CORNER);
        noStroke();
        fill(255);
        rect(width/2+60,height/2+7,380,73,10); //BOX
        fill(0);
        textFont(myFont);
        textSize(20);
        textLeading(35);
        text("I'm not sure when. I'll\n"+"have to check my schedule", width/2+70, height/2+33);
        setTimeout(() => {
          fill(55,71,133);
          rect(width/2-180,height/2+80,220,50,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(20);
          textLeading(35);
          text("Message sent.", width/2-160, height/2+110);
          messageReceived.play();
        }, 1000); //msg sent image
        setTimeout(() => { mgr.showScene(scene11); }, 3000); //change scene
      }



      //==========RESPONSE #2===========//

      response6.onHover = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.textColor = "#a8a8a8";
      this.x = width/2-160;
      this.y = height/2+230;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "(Ignore)";
      }

      response6.onOutside = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.x = width/2-160;
      this.y = height/2+230;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "(Ignore)";
      this.textColor = "#000000";
      }

      response6.onPress = function(){
        rectMode(CORNER);
        noStroke();
        fill(255);
        rect(width/2+250,height/2+10,180,50,10); //BOX
        fill(0);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Ignore it.", width/2+260, height/2+40);
        setTimeout(() => {
          fill(55,71,133);
          rect(width/2-180,height/2+70,300,50,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(23);
          textLeading(35);
          text("Message ignored.", width/2-160, height/2+100);
          messageReceived.play();
        }, 1000); //msg ignored image
        setTimeout(() => { mgr.showScene(scene11); }, 3000); //change scene
      }
      //==========end of responses===========//
    }


    this.enter = function() {
      button.hide();
      button2.hide();
      sTime = millis();
      messageReceived.play();
      background(168, 208, 230);
      setTimeout(() => {  messageReceived.play(); }, 1000);
      setTimeout(() => {  messageReceived.play(); }, 2500);
      rectMode(CENTER);
      noStroke();
      fill(230);
      rect(width/2,height/2,900,600,40);
      fill(200);
      rect(width/2-325,height/2,250,600,40,0,0,40);

      fill(230);
      strokeWeight(0.5);
      stroke(180);
      rect(width/2-325,height/2-200,248,100); //active buddy

      fill(215); //hover 180
      rect(width/2-325,height/2,248,100); //other inactive buddies
      fill(200);
      rect(width/2-325,height/2-100,248,100); //other inactive buddies
      rect(width/2-325,height/2+100,248,100); //other inactive buddies
      rect(width/2-325,height/2+200,248,100); //other inactive buddies

      fill(247, 108, 108);
      rect(width/2,height/2-275,900,50,40,40,0,0); //bar

      fill(255);
      rect(width/2+125,height/2+210,620,150,40);

      image(boticon, width/2-445, height/2-230, 240, 60); //bot icon
      image(momicon, width/2-445, height/2-130, 240, 60); //mom icon
      //image(jennicon, width/2-445, height/2-30, 240, 60); //jenn icon
      image(kevicon, width/2-445, height/2+70, 240, 60); //kev icon

    }


    this.draw = function() {
      jenn.draw();
      imageMode(CENTER);
      image(trash,50,50,55,55);
      image(folder,50,150,50,50);
      image(web,50,250,70,55);
      image(vlc,50,350,60,60);
      image(mail,50,450,60,60);

      //TEXTS
      rectMode(CORNER);
      noStroke();
      fill(55,71,133);
      rect(width/2-180,height/2-240,290,80,10); //BOX
      fill(255);
      textFont(myFont);
      textSize(20);
      textLeading(35);
      text("You still have a\n"+"message from JENN.", width/2-160, height/2-210)


      if(!this.sceneManager.isCurrent(preInitial) || !this.sceneManager.isCurrent(intro) || !this.sceneManager.isCurrent(help))
      {

        if((millis() - sTime)>1000)
        {
          rectMode(CORNER);
          noStroke();
          fill(55,71,133);
          rect(width/2-180,height/2-157,420,80,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(20);
          textLeading(35);
          text("JENN wants to know when\n"+"you'll be free to facetime.", width/2-160, height/2-127)
        }

        if((millis() - sTime)>2500)
        {
          noStroke();
          fill(55,71,133);
          rect(width/2-180,height/2-74,240,80,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(20);
          textLeading(35);
          text("What would you\n"+"like to say?", width/2-160, height/2-44)
          response5.draw();
          response6.draw();
        }
      }
    }






}
////////////////////////////// SCENE 5: TRANSITION TO JENN //////////////////////////
function transitionToJenn2() {
  var response5b;
  var response6b;
  var sTime;
  var jennb;

    this.setup = function() {



      response5b = new Clickable();
      response6b = new Clickable();
      jennb = new Clickable();

      jennb.onHover = function(){
      this.color = "#ffffff";
      this.x = width/2-445;
      this.y = height/2-30;
      this.width = 240;
      this.height = 60;
      this.img = jenniconHoverActive;
      }

      jennb.onOutside = function(){
      this.color = "#ffffff";
      this.x = width/2-445;
      this.y = height/2-30;
      this.width = 240;
      this.height = 60;
      this.img = jenniconActive;
      }

      jennb.onPress = function(){
        mgr.showScene(jennProfile);
      }

      //==========RESPONSE #1===========//
      response5b.onHover = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.textColor = "#a8a8a8";
      this.x = width/2-160;
      this.y = height/2+170;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "I need to check my schedule.";
      }

      response5b.onOutside = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.x = width/2-160;
      this.y = height/2+170;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "I need to check my schedule.";
      this.textColor = "#000000";
      }

      response5b.onPress = function(){
        //image(reply3, width/2+140,height/2-20,280,100); //reply#3
        rectMode(CORNER);
        noStroke();
        fill(255);
        rect(width/2+60,height/2+7,380,73,10); //BOX
        fill(0);
        textFont(myFont);
        textSize(20);
        textLeading(35);
        text("I'm not sure when. I'll\n"+"have to check my schedule", width/2+70, height/2+33);
        setTimeout(() => {
          fill(55,71,133);
          rect(width/2-180,height/2+80,220,50,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(20);
          textLeading(35);
          text("Message sent.", width/2-160, height/2+110);
          messageReceived.play();
        }, 1000); //msg sent image
        setTimeout(() => { mgr.showScene(scene11); }, 3000); //change scene
      }



      //==========RESPONSE #2===========//

      response6b.onHover = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.textColor = "#a8a8a8";
      this.x = width/2-160;
      this.y = height/2+230;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "(Ignore)";
      }

      response6b.onOutside = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.x = width/2-160;
      this.y = height/2+230;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "(Ignore)";
      this.textColor = "#000000";
      }

      response6b.onPress = function(){
        rectMode(CORNER);
        noStroke();
        fill(255);
        rect(width/2+250,height/2+10,180,50,10); //BOX
        fill(0);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Ignore it.", width/2+260, height/2+40);
        setTimeout(() => {
          fill(55,71,133);
          rect(width/2-180,height/2+70,300,50,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(23);
          textLeading(35);
          text("Message ignored.", width/2-160, height/2+100);
          messageReceived.play();
        }, 1000); //msg ignored image
        setTimeout(() => { mgr.showScene(scene11); }, 3000); //change scene
      }
      //==========end of responses===========//
    }


    this.enter = function() {
      button.hide();
      button2.hide();
      sTime = millis();
      messageReceived.play();
      background(168, 208, 230);
      setTimeout(() => {  messageReceived.play(); }, 1000);
      setTimeout(() => {  messageReceived.play(); }, 2500);
      rectMode(CENTER);
      noStroke();
      fill(230);
      rect(width/2,height/2,900,600,40);
      fill(200);
      rect(width/2-325,height/2,250,600,40,0,0,40);

      fill(230);
      strokeWeight(0.5);
      stroke(180);
      rect(width/2-325,height/2-200,248,100); //active buddy

      fill(215); //hover 180
      rect(width/2-325,height/2,248,100); //other inactive buddies
      fill(200);
      rect(width/2-325,height/2-100,248,100); //other inactive buddies
      rect(width/2-325,height/2+100,248,100); //other inactive buddies
      rect(width/2-325,height/2+200,248,100); //other inactive buddies

      fill(247, 108, 108);
      rect(width/2,height/2-275,900,50,40,40,0,0); //bar

      fill(255);
      rect(width/2+125,height/2+210,620,150,40);

      image(boticon, width/2-445, height/2-230, 240, 60); //bot icon
      image(momicon, width/2-445, height/2-130, 240, 60); //mom icon
      //image(jennicon, width/2-445, height/2-30, 240, 60); //jenn icon
      image(kevicon, width/2-445, height/2+70, 240, 60); //kev icon
    }


    this.draw = function() {
      jennb.draw();
      imageMode(CENTER);
      image(trash,50,50,55,55);
      image(folder,50,150,50,50);
      image(web,50,250,70,55);
      image(vlc,50,350,60,60);
      image(mail,50,450,60,60);

      //TEXTS
      rectMode(CORNER);
      noStroke();
      fill(55,71,133);
      rect(width/2-180,height/2-240,290,80,10); //BOX
      fill(255);
      textFont(myFont);
      textSize(20);
      textLeading(35);
      text("You still have a\n"+"message from JENN.", width/2-160, height/2-210)


      if(!this.sceneManager.isCurrent(preInitial) || !this.sceneManager.isCurrent(intro) || !this.sceneManager.isCurrent(help) || !this.sceneManager.isCurrent(momProfile) || !this.sceneManager.isCurrent(momThreeResponse1))
      {

        if((millis() - sTime)>1000)
        {
          rectMode(CORNER);
          noStroke();
          fill(55,71,133);
          rect(width/2-180,height/2-157,420,80,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(20);
          textLeading(35);
          text("JENN wants to know when\n"+"you'll be free to facetime.", width/2-160, height/2-127)
        }

        if((millis() - sTime)>2500)
        {
          noStroke();
          fill(55,71,133);
          rect(width/2-180,height/2-74,240,80,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(20);
          textLeading(35);
          text("What would you\n"+"like to say?", width/2-160, height/2-44)
          response5b.draw();
          response6b.draw();
        }
      }
    }






}
///////////////////////////// SCENE 10: JENN PROFILE TO NEW THIRD RESPONSE TO BOT //////////////////////////
function jennThreeResponse1() {
var sTime;
var response14;
var response15;
var response16;


  this.setup = function() {



    response14 = new Clickable();
    response15 = new Clickable();
    response16 = new Clickable();

    //==========RESPONSE #1===========//
    response14.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+160;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "I need to check my schedule.";
    }

    response14.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+160;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "I need to check my schedule.";
    this.textColor = "#000000";
    }

    response14.onPress = function(){
      //image(reply3, width/2+140,height/2-20,280,100); //reply#3
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+60,height/2-13,380,73,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(20);
      textLeading(35);
      text("I'm not sure when. I'll\n"+"have to check my schedule", width/2+70, height/2+13);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+70,220,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(20);
        textLeading(35);
        text("Message sent.", width/2-160, height/2+100);
        messageReceived.play();
      }, 1000); //msg sent image
      setTimeout(() => { mgr.showScene(scene11); }, 3000); //change scene
    }



    //==========RESPONSE #2===========//

    response15.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+200;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "(Ignore)";
    }

    response15.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+200;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "(Ignore)";
    this.textColor = "#000000";
    }

    response15.onPress = function(){
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+250,height/2-10,180,50,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(23);
      textLeading(35);
      text("Ignore it.", width/2+260, height/2+20);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+70,300,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Message ignored.", width/2-160, height/2+100);
        messageReceived.play();
      }, 1000); //msg ignored image
      setTimeout(() => { mgr.showScene(scene11); }, 3000); //change scene
    }


    //==========RESPONSE #3===========//
    response16.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+240;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "How about this Friday?";
    }

    response16.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+240;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "How about this Friday?";
    this.textColor = "#000000";
    }

    response16.onPress = function(){
      //image(reply3, width/2+140,height/2-20,280,100); //reply#3
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+10,height/2-13,430,73,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(20);
      textLeading(35);
      text("Let's call this Friday! Looks \n"+"like you've had a long week.", width/2+20, height/2+13);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+70,220,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(20);
        textLeading(35);
        text("Message sent.", width/2-160, height/2+100);
        messageReceived.play();
      }, 1000); //msg sent image
      setTimeout(() => { mgr.showScene(scene11); }, 3000); //change scene
    }


    //==========end of responses===========//
  }


  this.enter = function() {
    button.hide();
    button2.hide();
    sTime = millis();
    messageReceived.play();
    background(168, 208, 230);
    rectMode(CENTER);
    noStroke();
    fill(230);
    rect(width/2,height/2,900,600,40);
    fill(200);
    rect(width/2-325,height/2,250,600,40,0,0,40);

    fill(230);
    strokeWeight(0.5);
    stroke(180);
    rect(width/2-325,height/2-200,248,100); //active buddy

    fill(200); //hover 180
    rect(width/2-325,height/2-100,248,100); //other inactive buddies
    rect(width/2-325,height/2-100,248,100); //other inactive buddies
    rect(width/2-325,height/2,248,100); //other inactive buddies
    rect(width/2-325,height/2+100,248,100); //other inactive buddies
    rect(width/2-325,height/2+200,248,100); //other inactive buddies

    fill(247, 108, 108);
    rect(width/2,height/2-275,900,50,40,40,0,0); //bar

    fill(255);
    rect(width/2+125,height/2+210,620,150,40);

    image(boticon, width/2-445, height/2-230, 240, 60); //bot icon
    image(momicon, width/2-445, height/2-130, 240, 60); //mom icon
    image(jennicon, width/2-445, height/2-30, 240, 60); //jenn icon
    image(kevicon, width/2-445, height/2+70, 240, 60); //kev icon
  }


  this.draw = function() {
    imageMode(CENTER);
    image(trash,50,50,55,55);
    image(folder,50,150,50,50);
    image(web,50,250,70,55);
    image(vlc,50,350,60,60);
    image(mail,50,450,60,60);

    //TEXTS
    rectMode(CORNER);
    noStroke();
    fill(55,71,133);
    rect(width/2-180,height/2-210,420,80,10); //BOX
    fill(255);
    textFont(myFont);
    textSize(20);
    textLeading(35);
    text("JENN wants to know when\n"+"you'll be free to facetime.", width/2-160, height/2-180);

    rectMode(CORNER);
    noStroke();
    fill(55,71,133);
    rect(width/2-180,height/2-117,290,80,10); //BOX
    fill(255);
    textFont(myFont);
    textSize(20);
    textLeading(35);
    text("What would you\n"+"like to say?", width/2-160, height/2-88)
    response14.draw();
    response15.draw();
    response16.draw();


}
}
////////////////////////////// SCENE 9: MOM PROFILE TO NEW THIRD RESPONSE TO BOT //////////////////////////
function momThreeResponse1() {
var response7;
var response8;
var response9;

  this.setup = function() {



    response7 = new Clickable();
    response8 = new Clickable();
    response9 = new Clickable();

    //==========RESPONSE #1===========//
    response7.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+160;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "I'm good.";
    }

    response7.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+160;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "I'm good.";
    this.textColor = "#000000";
    }

    response7.onPress = function(){
      //image(reply3, width/2+140,height/2-20,280,100); //reply#3
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+110,height/2-10,330,80,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(23);
      textLeading(35);
      text("Tell her I'm\n"+"doing good. Thanks.", width/2+120, height/2+20);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+70,250,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Message sent.", width/2-160, height/2+100);
        messageReceived.play();
      }, 1000); //msg sent image
      setTimeout(() => { mgr.showScene(transitionToJenn2); }, 3000); //change scene
    }



    //==========RESPONSE #2===========//

    response8.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+200;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "(Ignore)";
    }

    response8.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+200;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "(Ignore)";
    this.textColor = "#000000";
    }

    response8.onPress = function(){
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+250,height/2,180,50,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(23);
      textLeading(35);
      text("Ignore it.", width/2+260, height/2+30);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+60,300,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Message ignored.", width/2-160, height/2+90);
        messageReceived.play();
      }, 1000); //msg ignored image
      setTimeout(() => { mgr.showScene(transitionToJenn2); }, 3000); //change scene
    }


    //==========RESPONSE #3===========//
    response9.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+240;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "Love the new plants!";
    }

    response9.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+240;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "Love the new plants!";
    this.textColor = "#000000";
    }

    response9.onPress = function(){
      //image(reply3, width/2+140,height/2-20,280,100); //reply#3
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+80,height/2-10,360,80,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(20);
      textLeading(30);
      text("I'm doing great! I'm\n"+"loving the new addition!", width/2+90, height/2+20);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+70,250,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Message sent.", width/2-160, height/2+100);
        messageReceived.play();
      }, 1000); //msg sent image
      setTimeout(() => { mgr.showScene(transitionToJenn2); }, 3000); //change scene
    }



    //==========end of responses===========//
  }





  this.enter = function() {
    button.hide();
    button2.hide();
    messageReceived.play();
    background(168, 208, 230);
    rectMode(CENTER);
    noStroke();
    fill(230);
    rect(width/2,height/2,900,600,40);
    fill(200);
    rect(width/2-325,height/2,250,600,40,0,0,40);

    fill(230);
    strokeWeight(0.5);
    stroke(180);
    rect(width/2-325,height/2-200,248,100); //active buddy

    fill(200); //hover 180
    rect(width/2-325,height/2-100,248,100); //other inactive buddies
    rect(width/2-325,height/2-100,248,100); //other inactive buddies
    rect(width/2-325,height/2,248,100); //other inactive buddies
    rect(width/2-325,height/2+100,248,100); //other inactive buddies
    rect(width/2-325,height/2+200,248,100); //other inactive buddies

    fill(247, 108, 108);
    rect(width/2,height/2-275,900,50,40,40,0,0); //bar

    fill(255);
    rect(width/2+125,height/2+210,620,150,40);

    image(boticon, width/2-445, height/2-230, 240, 60); //bot icon
    image(momicon, width/2-445, height/2-130, 240, 60); //mom icon
    image(jennicon, width/2-445, height/2-30, 240, 60); //jenn icon
    image(kevicon, width/2-445, height/2+70, 240, 60); //kev icon
  }


  this.draw = function() {
    imageMode(CENTER);
    image(trash,50,50,55,55);
    image(folder,50,150,50,50);
    image(web,50,250,70,55);
    image(vlc,50,350,60,60);
    image(mail,50,450,60,60);

    //TEXTS
    rectMode(CORNER);
    noStroke();
    fill(55,71,133);
    rect(width/2-180,height/2-230,300,120,10); //BOX
    fill(255);
    textFont(myFont);
    textSize(23);
    textLeading(35);
    text("MOM wants to\n"+"know how you're\n"+"doing.", width/2-160, height/2-200)


        noStroke();
        fill(55,71,133);
        rect(width/2-180,height/2-100,300,80,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("What would you\n"+"like to say?", width/2-160, height/2-70)
        response7.draw();
        response8.draw();
        response9.draw();

  }




}




////////////////////////////// SCENE 4: JENN //////////////////////////
function jenn() {
var sTime;
var response10;
var response11;
var jenn;

  this.setup = function() {



    response10 = new Clickable();
    response11 = new Clickable();
    jenn = new Clickable();

    jenn.onHover = function(){
    this.color = "#ffffff";
    this.x = width/2-445;
    this.y = height/2-30;
    this.width = 240;
    this.height = 60;
    this.img = jenniconHoverActive;
    }

    jenn.onOutside = function(){
    this.color = "#ffffff";
    this.x = width/2-445;
    this.y = height/2-30;
    this.width = 240;
    this.height = 60;
    this.img = jenniconActive;
    }

    jenn.onPress = function(){
      mgr.showScene(jennProfile2);
    }


    //==========RESPONSE #1===========//
    response10.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+170;
    this.width = 550;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "I need to check my schedule.";
    }

    response10.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+170;
    this.width = 550;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "I need to check my schedule.";
    this.textColor = "#000000";
    }

    response10.onPress = function(){
      //image(reply3, width/2+140,height/2-20,280,100); //reply#3
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+60,height/2-13,380,73,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(20);
      textLeading(35);
      text("I'm not sure when. I'll\n"+"have to check my schedule", width/2+70, height/2+13);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+70,220,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(20);
        textLeading(35);
        text("Message sent.", width/2-160, height/2+100);
        messageReceived.play();
      }, 1000); //msg sent image
      setTimeout(() => { mgr.showScene(transitionToMom1); }, 3000); //change scene
    }



    //==========RESPONSE #2===========//

    response11.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+230;
    this.width = 550;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "(Ignore)";
    }

    response11.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+230;
    this.width = 550;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "(Ignore)";
    this.textColor = "#000000";
    }

    response11.onPress = function(){
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+250,height/2-10,180,50,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(23);
      textLeading(35);
      text("Ignore it.", width/2+260, height/2+20);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+70,300,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Message ignored.", width/2-160, height/2+100);
        messageReceived.play();
      }, 1000); //msg ignored image
      setTimeout(() => { mgr.showScene(transitionToMom1); }, 3000); //change scene
    }
    //==========end of responses===========//
  }


  this.enter = function() {
    button.hide();
    button2.hide();

    sTime = millis();
    messageReceived.play();
    background(168, 208, 230);
    setTimeout(() => {  messageReceived.play(); }, 1000);
    rectMode(CENTER);
    noStroke();
    fill(230);
    rect(width/2,height/2,900,600,40);
    fill(200);
    rect(width/2-325,height/2,250,600,40,0,0,40);

    fill(230);
    strokeWeight(0.5);
    stroke(180);
    rect(width/2-325,height/2-200,248,100); //active buddy

    fill(215); //hover 180
    rect(width/2-325,height/2,248,100); //other inactive buddies
    fill(200);
    rect(width/2-325,height/2-100,248,100); //other inactive buddies
    rect(width/2-325,height/2+100,248,100); //other inactive buddies
    rect(width/2-325,height/2+200,248,100); //other inactive buddies

    fill(247, 108, 108);
    rect(width/2,height/2-275,900,50,40,40,0,0); //bar

    fill(255);
    rect(width/2+125,height/2+210,620,150,40);

    image(boticon, width/2-445, height/2-230, 240, 60); //bot icon
    image(momicon, width/2-445, height/2-130, 240, 60); //mom icon
  //  image(jennicon, width/2-445, height/2-30, 240, 60); //jenn icon
    image(kevicon, width/2-445, height/2+70, 240, 60); //kev icon
  }


  this.draw = function() {
    jenn.draw();
    imageMode(CENTER);
    image(trash,50,50,55,55);
    image(folder,50,150,50,50);
    image(web,50,250,70,55);
    image(vlc,50,350,60,60);
    image(mail,50,450,60,60);

    //TEXTS
    rectMode(CORNER);
    noStroke();
    fill(55,71,133);
    rect(width/2-180,height/2-210,420,80,10); //BOX
    fill(255);
    textFont(myFont);
    textSize(20);
    textLeading(35);
    text("JENN wants to know when\n"+"you'll be free to facetime.", width/2-160, height/2-180);


    if(!this.sceneManager.isCurrent(preInitial) || !this.sceneManager.isCurrent(intro) || !this.sceneManager.isCurrent(help))
    {

      if((millis() - sTime)>1000)
      {
        rectMode(CORNER);
        noStroke();
        fill(55,71,133);
        rect(width/2-180,height/2-117,290,80,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(20);
        textLeading(35);
        text("What would you\n"+"like to say?", width/2-160, height/2-88)
        response10.draw();
        response11.draw();
      }

    }


}
}
////////////////////////////// SCENE 7: MOM PROFILE //////////////////////////
function momProfile2() {
var back3;

  this.setup = function() {
    background(168, 208, 230);

    blueplant.position.x=width/2+80;
    blueplant.position.y=height/2+180;
    blueplant.scale=0.5;
    purpleplant.position.x=width/2+250;
    purpleplant.position.y=height/2+180;
    purpleplant.scale=0.5;


    back3 = new Clickable();
    back3.onHover = function(){
      this.img = backHover;
      this.x=width/2-410;
      this.y=height/2-200;
      this.width=50;
      this.height=50;
    }

    back3.onOutside = function(){
      this.img=backbutton;
      this.x=width/2-410;
      this.y=height/2-200;
      this.width=50;
      this.height=50;
    }

    back3.onPress = function(){
      mgr.showScene(momThreeResponse2);
    }

}
  this.enter = function() {
    button.hide();
    button2.hide();
    angry.visible=false;
    blueplant.visible=true;
    purpleplant.visible=true;
    pepper.visible=false;
    stars.visible=false;
  }

  this.draw = function() {
    background(168, 208, 230);
    rectMode(CENTER);
    noStroke();
    fill(230);
    rect(width/2,height/2,900,600,40); //chat window
    fill(200);
    rect(width/2-410,height/2,80,600,40,0,0,40); //buddy list
    noStroke();
    fill(247, 108, 108);
    rect(width/2,height/2-275,900,50,40,40,0,0); //bar

    image(momprofilepic,width/2-380,height/2-250,300,300); //profile pic
    fill(255);
    rect(width/2+175,height/2+25,500,500,40);
    rect(width/2-223,height/2+165,250,220,40);

    fill(0);
    textFont(myFont);
    textSize(13);
    textLeading(30);
    text("Name: Mom\n"+                                       //prof description
        "Favorite color: purple!\n"+
        "Hobby: gardening\n"+
        "Status: offline\n\n"+
        "Last online: 4 hours ago", width/2-335, height/2+95);

    image(momprofile,width/2,height/2-60,350,220);
    text("Added a new member! The family is growing!", width/2-20,height/2-80);
    textSize(10);
    text("Updated 4 hours ago:", width/2-40,height/2-140);
    stroke(0);
    line(width/2-40,height/2-139,width/2+103,height/2-139);

    imageMode(CENTER);
    image(trash,50,50,55,55);
    image(folder,50,150,50,50);
    image(web,50,250,70,55);
    image(vlc,50,350,60,60);
    image(mail,50,450,60,60);
    drawSprites();
    back3.draw();

  }


}
////////////////////////////// SCENE 8: JENN PROFILE //////////////////////////
function jennProfile2() {
var back4;

  this.setup = function() {
    background(168, 208, 230);
    angry.position.x=width/2+280;
    angry.position.y=height/2-90;
    angry.scale=0.3;



    back4 = new Clickable();
    back4.onHover = function(){
      this.img = backHover;
      this.x=width/2-410;
      this.y=height/2-200;
      this.width=50;
      this.height=50;
    }

    back4.onOutside = function(){
      this.img=backbutton;
      this.x=width/2-410;
      this.y=height/2-200;
      this.width=50;
      this.height=50;
    }

    back4.onPress = function(){
      mgr.showScene(jennThreeResponse2);
    }

}
  this.enter = function() {
    button.hide();
    button2.hide();
    blueplant.visible=false;
    purpleplant.visible=false;
    angry.visible=true;
    pepper.visible=false;
    stars.visible=false;
  }

  this.draw = function() {
    background(168, 208, 230);
    rectMode(CENTER);
    noStroke();
    fill(230);
    rect(width/2,height/2,900,600,40); //chat window
    fill(200);
    rect(width/2-410,height/2,80,600,40,0,0,40); //buddy list
    noStroke();
    fill(247, 108, 108);
    rect(width/2,height/2-275,900,50,40,40,0,0); //bar

    image(jennprofilepic,width/2-380,height/2-250,300,300); //profile pic
    fill(255);
    rect(width/2+175,height/2+25,500,500,40);
    rect(width/2-223,height/2+165,250,220,40);
    image(jennprofile,width/2,height/2+10,350,240);


    fill(0);
    textFont(myFont);
    textSize(13);
    textLeading(30);
    text("Name: Jenn\n"+                                       //prof description
        "Favorite color: teal!\n"+
        "Hobby: drawing\n"+
        "Status: offline\n\n"+
        "Last online: 2 hours ago", width/2-335, height/2+95);
    text("This week's been terrible!\n"+"I have so much on my mind. Friday needs to\n"+"come sooner! In the meantime, drawing helps.", width/2-20,height/2-80);
    textSize(10);
    text("Updated 2 hours ago:", width/2-40,height/2-140);
    stroke(0);
    line(width/2-40,height/2-139,width/2+103,height/2-139);

    imageMode(CENTER);
    image(trash,50,50,55,55);
    image(folder,50,150,50,50);
    image(web,50,250,70,55);
    image(vlc,50,350,60,60);
    image(mail,50,450,60,60);
    drawSprites();
    back4.draw();

  }


}
////////////////////////////// SCENE 6: TRANSITION TO MOM //////////////////////////
function transitionToMom1() {
  var response12;
  var response13;
  var sTime;
  var mom;

    this.setup = function() {


      response12 = new Clickable();
      response13 = new Clickable();
      mom = new Clickable();

      mom.onHover = function(){
      this.color = "#ffffff";
      this.x = width/2-445;
      this.y = height/2-130;
      this.width = 240;
      this.height = 60;
      this.img = momiconHoverActive;
      }

      mom.onOutside = function(){
      this.color = "#ffffff";
      this.x = width/2-445;
      this.y = height/2-130;
      this.width = 240;
      this.height = 60;
      this.img = momiconActive;
      }

      mom.onPress = function(){
        mgr.showScene(momProfile2);
      }


      //==========RESPONSE #1===========//
      response12.onHover = function(){
        this.color = "#ffffff";
        this.strokeWeight = 0;
        this.textColor = "#a8a8a8";
        this.x = width/2-160;
        this.y = height/2+170;
        this.width = 550;
        this.textSize = 20;
        this.textFont = "Lucida-Typewriter-Regular";
        this.text = "I'm good.";
      }

      response12.onOutside = function(){
        this.color = "#ffffff";
        this.strokeWeight = 0;
        this.x = width/2-160;
        this.y = height/2+170;
        this.width = 550;
        this.textSize = 20;
        this.textFont = "Lucida-Typewriter-Regular";
        this.text = "I'm good.";
        this.textColor = "#000000";
      }

      response12.onPress = function(){
        //image(reply3, width/2+140,height/2-20,280,100); //reply#3
        rectMode(CORNER);
        noStroke();
        fill(255);
        rect(width/2+130,height/2-10,300,75,10); //BOX
        fill(0);
        textFont(myFont);
        textSize(20);
        textLeading(30);
        text("Tell her I'm\n"+"doing good. Thanks.", width/2+140, height/2+20);
        setTimeout(() => {
          fill(55,71,133);
          rect(width/2-180,height/2+70,250,50,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(23);
          textLeading(35);
          text("Message sent.", width/2-160, height/2+100);
          messageReceived.play();
        }, 1000); //msg sent image
        setTimeout(() => { mgr.showScene(scene11); }, 3000); //change scene
      }

      //==========RESPONSE #2===========//

      response13.onHover = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.textColor = "#a8a8a8";
      this.x = width/2-160;
      this.y = height/2+230;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "(Ignore)";
      }

      response13.onOutside = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.x = width/2-160;
      this.y = height/2+230;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "(Ignore)";
      this.textColor = "#000000";
      }

      response13.onPress = function(){
        rectMode(CORNER);
        noStroke();
        fill(255);
        rect(width/2+250,height/2+10,180,50,10); //BOX
        fill(0);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Ignore it.", width/2+260, height/2+40);
        setTimeout(() => {
          fill(55,71,133);
          rect(width/2-180,height/2+70,300,50,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(23);
          textLeading(35);
          text("Message ignored.", width/2-160, height/2+100);
          messageReceived.play();
        }, 1000); //msg ignored image
        setTimeout(() => { mgr.showScene(scene11); }, 3000); //change scene
      }
      //==========end of responses===========//
    }


    this.enter = function() {
      button.hide();
      button2.hide();
      sTime = millis();
      messageReceived.play();
      background(168, 208, 230);
      setTimeout(() => {  messageReceived.play(); }, 1000);
      setTimeout(() => {  messageReceived.play(); }, 2500);
      rectMode(CENTER);
      noStroke();
      fill(230);
      rect(width/2,height/2,900,600,40);
      fill(200);
      rect(width/2-325,height/2,250,600,40,0,0,40);

      fill(230);
      strokeWeight(0.5);
      stroke(180);
      rect(width/2-325,height/2-200,248,100); //active buddy

      fill(215); //hover 180
      rect(width/2-325,height/2-100,248,100); //other inactive buddies
      fill(200);
      rect(width/2-325,height/2,248,100); //other inactive buddies
      rect(width/2-325,height/2+100,248,100); //other inactive buddies
      rect(width/2-325,height/2+200,248,100); //other inactive buddies

      fill(247, 108, 108);
      rect(width/2,height/2-275,900,50,40,40,0,0); //bar

      fill(255);
      rect(width/2+125,height/2+210,620,150,40);

      image(boticon, width/2-445, height/2-230, 240, 60); //bot icon
      //image(momicon, width/2-445, height/2-130, 240, 60); //mom icon
      image(jennicon, width/2-445, height/2-30, 240, 60); //jenn icon
      image(kevicon, width/2-445, height/2+70, 240, 60); //kev icon

    }


    this.draw = function() {
      mom.draw();
      imageMode(CENTER);
      image(trash,50,50,55,55);
      image(folder,50,150,50,50);
      image(web,50,250,70,55);
      image(vlc,50,350,60,60);
      image(mail,50,450,60,60);

      //TEXTS
      rectMode(CORNER);
      noStroke();
      fill(55,71,133);
      rect(width/2-180,height/2-240,290,80,10); //BOX
      fill(255);
      textFont(myFont);
      textSize(20);
      textLeading(35);
      text("You still have a\n"+"message from MOM.", width/2-160, height/2-210)


      if(!this.sceneManager.isCurrent(preInitial) || !this.sceneManager.isCurrent(intro) || !this.sceneManager.isCurrent(help))
      {

        if((millis() - sTime)>1000)
        {
          rectMode(CORNER);
          noStroke();
          fill(55,71,133);
          rect(width/2-180,height/2-157,280,80,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(20);
          textLeading(35);
          text("MOM wants to know\n"+"how you're doing.", width/2-160, height/2-127)
        }

        if((millis() - sTime)>2500)
        {
          noStroke();
          fill(55,71,133);
          rect(width/2-180,height/2-74,240,80,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(20);
          textLeading(35);
          text("What would you\n"+"like to say?", width/2-160, height/2-44)
          response12.draw();
          response13.draw();
        }
      }
    }



}
////////////////////////////// SCENE 6: TRANSITION TO MOM //////////////////////////
function transitionToMom2() {
  var response12b;
  var response13b;
  var sTime;
  var momb;

    this.setup = function() {

      response12b = new Clickable();
      response13b = new Clickable();
      momb = new Clickable();

      momb.onHover = function(){
      this.color = "#ffffff";
      this.x = width/2-445;
      this.y = height/2-130;
      this.width = 240;
      this.height = 60;
      this.img = momiconHoverActive;
      }

      momb.onOutside = function(){
      this.color = "#ffffff";
      this.x = width/2-445;
      this.y = height/2-130;
      this.width = 240;
      this.height = 60;
      this.img = momiconActive;
      }

      momb.onPress = function(){
        mgr.showScene(momProfile2);
      }


      //==========RESPONSE #1===========//
      response12b.onHover = function(){
        this.color = "#ffffff";
        this.strokeWeight = 0;
        this.textColor = "#a8a8a8";
        this.x = width/2-160;
        this.y = height/2+170;
        this.width = 550;
        this.textSize = 20;
        this.textFont = "Lucida-Typewriter-Regular";
        this.text = "I'm good.";
      }

      response12b.onOutside = function(){
        this.color = "#ffffff";
        this.strokeWeight = 0;
        this.x = width/2-160;
        this.y = height/2+170;
        this.width = 550;
        this.textSize = 20;
        this.textFont = "Lucida-Typewriter-Regular";
        this.text = "I'm good.";
        this.textColor = "#000000";
      }

      response12b.onPress = function(){
        //image(reply3, width/2+140,height/2-20,280,100); //reply#3
        rectMode(CORNER);
        noStroke();
        fill(255);
        rect(width/2+130,height/2-10,300,75,10); //BOX
        fill(0);
        textFont(myFont);
        textSize(20);
        textLeading(30);
        text("Tell her I'm\n"+"doing good. Thanks.", width/2+140, height/2+20);
        setTimeout(() => {
          fill(55,71,133);
          rect(width/2-180,height/2+70,250,50,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(23);
          textLeading(35);
          text("Message sent.", width/2-160, height/2+100);
          messageReceived.play();
        }, 1000); //msg sent image
        setTimeout(() => { mgr.showScene(scene11); }, 3000); //change scene
      }

      //==========RESPONSE #2===========//

      response13b.onHover = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.textColor = "#a8a8a8";
      this.x = width/2-160;
      this.y = height/2+230;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "(Ignore)";
      }

      response13b.onOutside = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.x = width/2-160;
      this.y = height/2+230;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "(Ignore)";
      this.textColor = "#000000";
      }

      response13b.onPress = function(){
        rectMode(CORNER);
        noStroke();
        fill(255);
        rect(width/2+250,height/2+10,180,50,10); //BOX
        fill(0);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Ignore it.", width/2+260, height/2+40);
        setTimeout(() => {
          fill(55,71,133);
          rect(width/2-180,height/2+70,300,50,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(23);
          textLeading(35);
          text("Message ignored.", width/2-160, height/2+100);
          messageReceived.play();
        }, 1000); //msg ignored image
        setTimeout(() => { mgr.showScene(scene11); }, 3000); //change scene
      }
      //==========end of responses===========//
    }


    this.enter = function() {
      button.hide();
      button2.hide();
      sTime = millis();
      messageReceived.play();
      background(168, 208, 230);
      setTimeout(() => {  messageReceived.play(); }, 1000);
      setTimeout(() => {  messageReceived.play(); }, 2500);
      rectMode(CENTER);
      noStroke();
      fill(230);
      rect(width/2,height/2,900,600,40);
      fill(200);
      rect(width/2-325,height/2,250,600,40,0,0,40);

      fill(230);
      strokeWeight(0.5);
      stroke(180);
      rect(width/2-325,height/2-200,248,100); //active buddy

      fill(215); //hover 180
      rect(width/2-325,height/2-100,248,100); //other inactive buddies
      fill(200);
      rect(width/2-325,height/2,248,100); //other inactive buddies
      rect(width/2-325,height/2+100,248,100); //other inactive buddies
      rect(width/2-325,height/2+200,248,100); //other inactive buddies

      fill(247, 108, 108);
      rect(width/2,height/2-275,900,50,40,40,0,0); //bar

      fill(255);
      rect(width/2+125,height/2+210,620,150,40);

      image(boticon, width/2-445, height/2-230, 240, 60); //bot icon
      //image(momicon, width/2-445, height/2-130, 240, 60); //mom icon
      image(jennicon, width/2-445, height/2-30, 240, 60); //jenn icon
      image(kevicon, width/2-445, height/2+70, 240, 60); //kev icon


    }


    this.draw = function() {
      momb.draw();
      imageMode(CENTER);
      image(trash,50,50,55,55);
      image(folder,50,150,50,50);
      image(web,50,250,70,55);
      image(vlc,50,350,60,60);
      image(mail,50,450,60,60);

      //TEXTS
      rectMode(CORNER);
      noStroke();
      fill(55,71,133);
      rect(width/2-180,height/2-240,290,80,10); //BOX
      fill(255);
      textFont(myFont);
      textSize(20);
      textLeading(35);
      text("You still have a\n"+"message from MOM.", width/2-160, height/2-210)


      if(!this.sceneManager.isCurrent(preInitial) || !this.sceneManager.isCurrent(intro) || !this.sceneManager.isCurrent(help))
      {

        if((millis() - sTime)>1000)
        {
          rectMode(CORNER);
          noStroke();
          fill(55,71,133);
          rect(width/2-180,height/2-157,280,80,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(20);
          textLeading(35);
          text("MOM wants to know\n"+"how you're doing.", width/2-160, height/2-127)
        }

        if((millis() - sTime)>2500)
        {
          noStroke();
          fill(55,71,133);
          rect(width/2-180,height/2-74,240,80,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(20);
          textLeading(35);
          text("What would you\n"+"like to say?", width/2-160, height/2-44)
          response12b.draw();
          response13b.draw();
        }
      }
    }



}
////////////////////////////// SCENE 10: JENN PROFILE TO NEW THIRD RESPONSE TO BOT //////////////////////////
function jennThreeResponse2() {
var sTime;
var response14b;
var response15b;
var response16b;


  this.setup = function() {



    response14b = new Clickable();
    response15b = new Clickable();
    response16b = new Clickable();

    //==========RESPONSE #1===========//
    response14b.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+160;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "I need to check my schedule.";
    }

    response14b.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+160;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "I need to check my schedule.";
    this.textColor = "#000000";
    }

    response14b.onPress = function(){
      //image(reply3, width/2+140,height/2-20,280,100); //reply#3
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+60,height/2-13,380,73,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(20);
      textLeading(35);
      text("I'm not sure when. I'll\n"+"have to check my schedule", width/2+70, height/2+13);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+70,220,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(20);
        textLeading(35);
        text("Message sent.", width/2-160, height/2+100);
        messageReceived.play();
      }, 1000); //msg sent image
      setTimeout(() => { mgr.showScene(transitionToMom2); }, 3000); //change scene
    }



    //==========RESPONSE #2===========//

    response15b.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+200;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "(Ignore)";
    }

    response15b.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+200;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "(Ignore)";
    this.textColor = "#000000";
    }

    response15b.onPress = function(){
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+250,height/2-10,180,50,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(23);
      textLeading(35);
      text("Ignore it.", width/2+260, height/2+20);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+70,300,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Message ignored.", width/2-160, height/2+100);
        messageReceived.play();
      }, 1000); //msg ignored image
      setTimeout(() => { mgr.showScene(transitionToMom2); }, 3000); //change scene
    }


    //==========RESPONSE #3===========//
    response16b.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+240;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "How about this Friday?";
    }

    response16b.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+240;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "How about this Friday?";
    this.textColor = "#000000";
    }

    response16b.onPress = function(){
      //image(reply3, width/2+140,height/2-20,280,100); //reply#3
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+10,height/2-13,430,73,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(20);
      textLeading(35);
      text("Let's call this Friday! Looks \n"+"like you've had a long week.", width/2+20, height/2+13);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+70,220,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(20);
        textLeading(35);
        text("Message sent.", width/2-160, height/2+100);
        messageReceived.play();
      }, 1000); //msg sent image
      setTimeout(() => { mgr.showScene(transitionToMom2); }, 3000); //change scene
    }


    //==========end of responses===========//
  }


  this.enter = function() {
    button.hide();
    button2.hide();
    sTime = millis();
    messageReceived.play();
    background(168, 208, 230);
    rectMode(CENTER);
    noStroke();
    fill(230);
    rect(width/2,height/2,900,600,40);
    fill(200);
    rect(width/2-325,height/2,250,600,40,0,0,40);

    fill(230);
    strokeWeight(0.5);
    stroke(180);
    rect(width/2-325,height/2-200,248,100); //active buddy

    fill(200); //hover 180
    rect(width/2-325,height/2-100,248,100); //other inactive buddies
    rect(width/2-325,height/2-100,248,100); //other inactive buddies
    rect(width/2-325,height/2,248,100); //other inactive buddies
    rect(width/2-325,height/2+100,248,100); //other inactive buddies
    rect(width/2-325,height/2+200,248,100); //other inactive buddies

    fill(247, 108, 108);
    rect(width/2,height/2-275,900,50,40,40,0,0); //bar

    fill(255);
    rect(width/2+125,height/2+210,620,150,40);

    image(boticon, width/2-445, height/2-230, 240, 60); //bot icon
    image(momicon, width/2-445, height/2-130, 240, 60); //mom icon
    image(jennicon, width/2-445, height/2-30, 240, 60); //jenn icon
    image(kevicon, width/2-445, height/2+70, 240, 60); //kev icon
  }


  this.draw = function() {
    imageMode(CENTER);
    image(trash,50,50,55,55);
    image(folder,50,150,50,50);
    image(web,50,250,70,55);
    image(vlc,50,350,60,60);
    image(mail,50,450,60,60);

    //TEXTS
    rectMode(CORNER);
    noStroke();
    fill(55,71,133);
    rect(width/2-180,height/2-210,420,80,10); //BOX
    fill(255);
    textFont(myFont);
    textSize(20);
    textLeading(35);
    text("JENN wants to know when\n"+"you'll be free to facetime.", width/2-160, height/2-180);

    rectMode(CORNER);
    noStroke();
    fill(55,71,133);
    rect(width/2-180,height/2-117,290,80,10); //BOX
    fill(255);
    textFont(myFont);
    textSize(20);
    textLeading(35);
    text("What would you\n"+"like to say?", width/2-160, height/2-88)
    response14b.draw();
    response15b.draw();
    response16b.draw();


}
}
////////////////////////////// SCENE 9: MOM PROFILE TO NEW THIRD RESPONSE TO BOT //////////////////////////
function momThreeResponse2() {
var response7b;
var response8b;
var response9b;

  this.setup = function() {



    response7b = new Clickable();
    response8b = new Clickable();
    response9b = new Clickable();

    //==========RESPONSE #1===========//
    response7b.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+160;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "I'm good.";
    }

    response7b.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+160;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "I'm good.";
    this.textColor = "#000000";
    }

    response7b.onPress = function(){
      //image(reply3, width/2+140,height/2-20,280,100); //reply#3
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+110,height/2-10,330,80,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(23);
      textLeading(35);
      text("Tell her I'm\n"+"doing good. Thanks.", width/2+120, height/2+20);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+70,250,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Message sent.", width/2-160, height/2+100);
        messageReceived.play();
      }, 1000); //msg sent image
      setTimeout(() => { mgr.showScene(scene11); }, 3000); //change scene
    }



    //==========RESPONSE #2===========//

    response8b.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+200;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "(Ignore)";
    }

    response8b.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+200;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "(Ignore)";
    this.textColor = "#000000";
    }

    response8b.onPress = function(){
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+250,height/2,180,50,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(23);
      textLeading(35);
      text("Ignore it.", width/2+260, height/2+30);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+60,300,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Message ignored.", width/2-160, height/2+90);
        messageReceived.play();
      }, 1000); //msg ignored image
      setTimeout(() => { mgr.showScene(scene11); }, 3000); //change scene
    }


    //==========RESPONSE #3===========//
    response9b.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+240;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "Love the new plants!";
    }

    response9b.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+240;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "Love the new plants!";
    this.textColor = "#000000";
    }

    response9b.onPress = function(){
      //image(reply3, width/2+140,height/2-20,280,100); //reply#3
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+80,height/2-10,360,80,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(20);
      textLeading(30);
      text("I'm doing great! I'm\n"+"loving the new addition!", width/2+90, height/2+20);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+70,250,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Message sent.", width/2-160, height/2+100);
        messageReceived.play();
      }, 1000); //msg sent image
      setTimeout(() => { mgr.showScene(scene11); }, 3000); //change scene
    }



    //==========end of responses===========//
  }





  this.enter = function() {
    button.hide();
    button2.hide();
    messageReceived.play();
    background(168, 208, 230);
    rectMode(CENTER);
    noStroke();
    fill(230);
    rect(width/2,height/2,900,600,40);
    fill(200);
    rect(width/2-325,height/2,250,600,40,0,0,40);

    fill(230);
    strokeWeight(0.5);
    stroke(180);
    rect(width/2-325,height/2-200,248,100); //active buddy

    fill(200); //hover 180
    rect(width/2-325,height/2-100,248,100); //other inactive buddies
    rect(width/2-325,height/2-100,248,100); //other inactive buddies
    rect(width/2-325,height/2,248,100); //other inactive buddies
    rect(width/2-325,height/2+100,248,100); //other inactive buddies
    rect(width/2-325,height/2+200,248,100); //other inactive buddies

    fill(247, 108, 108);
    rect(width/2,height/2-275,900,50,40,40,0,0); //bar

    fill(255);
    rect(width/2+125,height/2+210,620,150,40);

    image(boticon, width/2-445, height/2-230, 240, 60); //bot icon
    image(momicon, width/2-445, height/2-130, 240, 60); //mom icon
    image(jennicon, width/2-445, height/2-30, 240, 60); //jenn icon
    image(kevicon, width/2-445, height/2+70, 240, 60); //kev icon
  }


  this.draw = function() {
    imageMode(CENTER);
    image(trash,50,50,55,55);
    image(folder,50,150,50,50);
    image(web,50,250,70,55);
    image(vlc,50,350,60,60);
    image(mail,50,450,60,60);

    //TEXTS
    rectMode(CORNER);
    noStroke();
    fill(55,71,133);
    rect(width/2-180,height/2-230,300,120,10); //BOX
    fill(255);
    textFont(myFont);
    textSize(23);
    textLeading(35);
    text("MOM wants to\n"+"know how you're\n"+"doing.", width/2-160, height/2-200)


        noStroke();
        fill(55,71,133);
        rect(width/2-180,height/2-100,300,80,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("What would you\n"+"like to say?", width/2-160, height/2-70)
        response7b.draw();
        response8b.draw();
        response9b.draw();

  }




}





////////////////////////////// SCENE 11: NEW MSG FROM KEV //////////////////////////
function scene11() {
  var sTime;
  var response17;
  var response18;


    this.setup = function() {

      response17 = new Clickable();
      response18 = new Clickable();

      //==========RESPONSE #1===========//
      response17.onHover = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.textColor = "#a8a8a8";
      this.x = width/2-160;
      this.y = height/2+170;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "Let's see it.";
      }

      response17.onOutside = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.x = width/2-160;
      this.y = height/2+170;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "Let's see it.";
      this.textColor = "#000000";
      }

      response17.onPress = function(){
        rectMode(CORNER);
        noStroke();
        fill(255);
        rect(width/2+30,height/2-10,400,80,10); //BOX
        fill(0);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Let's see the message.", width/2+50, height/2+40);
        setTimeout(() => { mgr.showScene(kev); }, 1000);
      }


      //==========RESPONSE #2===========//

      response18.onHover = function(){
        this.color = "#ffffff";
        this.strokeWeight = 0;
        this.textColor = "#a8a8a8";
        this.x = width/2-160;
        this.y = height/2+230;
        this.width = 550;
        this.textSize = 20;
        this.textFont = "Lucida-Typewriter-Regular";
        this.text = "(Ignore)";
      }

      response18.onOutside = function(){
        this.color = "#ffffff";
        this.strokeWeight = 0;
        this.x = width/2-160;
        this.y = height/2+230;
        this.width = 550;
        this.textSize = 20;
        this.textFont = "Lucida-Typewriter-Regular";
        this.text = "(Ignore)";
        this.textColor = "#000000";
      }

      response18.onPress = function(){
        rectMode(CORNER);
        noStroke();
        fill(255);
        rect(width/2+250,height/2-10,180,50,10); //BOX
        fill(0);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Ignore it.", width/2+260, height/2+20);
        setTimeout(() => {
          fill(55,71,133);
          rect(width/2-180,height/2+70,300,50,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(23);
          textLeading(35);
          text("Message ignored.", width/2-160, height/2+100);
          messageReceived.play();}, 1000);
        setTimeout(() => { mgr.showScene(botLeaves); }, 2500);
      }
      //==========end of responses===========//

    }


    this.enter = function() {
      button.hide();
      button2.hide();
      sTime = millis();
      messageReceived.play();
      background(168, 208, 230);
      setTimeout(() => {  messageReceived.play(); }, 1000);
      rectMode(CENTER);
      noStroke();
      fill(230);
      rect(width/2,height/2,900,600,40); //chat window
      fill(200);
      rect(width/2-325,height/2,250,600,40,0,0,40); //buddy list

      fill(230);
      strokeWeight(0.5);
      stroke(180);
      rect(width/2-325,height/2-200,248,100); //active buddy

      fill(200); //hover 180
      rect(width/2-325,height/2-100,248,100); //other inactive buddies
      rect(width/2-325,height/2-100,248,100); //other inactive buddies
      rect(width/2-325,height/2,248,100); //other inactive buddies
      rect(width/2-325,height/2+100,248,100); //other inactive buddies
      rect(width/2-325,height/2+200,248,100); //other inactive buddies

      noStroke();
      fill(247, 108, 108);
      rect(width/2,height/2-275,900,50,40,40,0,0); //bar
      fill(255);
      rect(width/2+125,height/2+210,620,150,40); //response box

      image(boticon, width/2-445, height/2-230, 240, 60); //bot icon
      image(momicon, width/2-445, height/2-130, 240, 60); //mom icon
      image(jennicon, width/2-445, height/2-30, 240, 60); //jenn icon
      image(kevicon, width/2-445, height/2+70, 240, 60); //kev icon

    }

    this.draw = function() {

      imageMode(CENTER);
      image(trash,50,50,55,55);
      image(folder,50,150,50,50);
      image(web,50,250,70,55);
      image(vlc,50,350,60,60);
      image(mail,50,450,60,60);

  //texts
      rectMode(CORNER);
      noStroke();
      fill(55,71,133);
      rect(width/2-180,height/2-220,390,100,10); //BOX
      fill(255);
      textFont(myFont);
      textSize(23);
      textLeading(35);
      text("Looks like you have a\n"+"new message from KEV.", width/2-160, height/2-187)



        if(this.sceneManager.isCurrent(scene11))
        {

          if((millis() - sTime)>1000)
          {

            rectMode(CORNER);
            noStroke();
            fill(55,71,133);
            rect(width/2-180,height/2-110,460,50,10); //BOX
            fill(255);
            textFont(myFont);
            textSize(23);
            textLeading(35);
            text("What would you like to do?", width/2-160, height/2-80)
            response17.draw();
            response18.draw();

            }
          }

        }


}

function kev(){
  var sTime;
  var response19;
  var response20;
  var kev;

    this.setup = function() {


      response19 = new Clickable();
      response20 = new Clickable();
      kev = new Clickable();

      kev.onHover = function(){
      this.color = "#ffffff";
      this.x = width/2-445;
      this.y = height/2+70;
      this.width = 240;
      this.height = 60;
      this.img = keviconHoverActive;
      }

      kev.onOutside = function(){
      this.color = "#ffffff";
      this.x = width/2-445;
      this.y = height/2+70;
      this.width = 240;
      this.height = 60;
      this.img = keviconActive;
      }

      kev.onPress = function(){
        mgr.showScene(kevprofile);
      }


      //==========RESPONSE #1===========//
      response19.onHover = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.textColor = "#a8a8a8";
      this.x = width/2-160;
      this.y = height/2+170;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "I don't know.";
      }

      response19.onOutside = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.x = width/2-160;
      this.y = height/2+170;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "I don't know.";
      this.textColor = "#000000";
      }

      response19.onPress = function(){
        //image(reply3, width/2+140,height/2-20,280,100); //reply#3
        rectMode(CORNER);
        noStroke();
        fill(255);
        rect(width/2+140,height/2,280,50,10); //BOX
        fill(0);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("I'm not sure...", width/2+160, height/2+30);
        setTimeout(() => {
          fill(55,71,133);
          rect(width/2-180,height/2+70,250,50,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(23);
          textLeading(35);
          text("Message sent.", width/2-160, height/2+100);
          messageReceived.play();
        }, 1000); //msg sent image
        setTimeout(() => { mgr.showScene(botLeaves); }, 3000); //change scene
      }



      //==========RESPONSE #2===========//

      response20.onHover = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.textColor = "#a8a8a8";
      this.x = width/2-160;
      this.y = height/2+230;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "(Ignore)";
      }

      response20.onOutside = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.x = width/2-160;
      this.y = height/2+230;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "(Ignore)";
      this.textColor = "#000000";
      }

      response20.onPress = function(){
        rectMode(CORNER);
        noStroke();
        fill(255);
        rect(width/2+250,height/2,180,50,10); //BOX
        fill(0);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Ignore it.", width/2+260, height/2+30);
        setTimeout(() => {
          fill(55,71,133);
          rect(width/2-180,height/2+60,300,50,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(23);
          textLeading(35);
          text("Message ignored.", width/2-160, height/2+90);
          messageReceived.play();
        }, 1000); //msg ignored image
        setTimeout(() => { mgr.showScene(botLeaves); }, 3000); //change scene
      }
      //==========end of responses===========//
    }


    this.enter = function() {
      button.hide();
      button2.hide();
      sTime = millis();
      messageReceived.play();
      background(168, 208, 230);
      setTimeout(() => {  messageReceived.play(); }, 1000);
      rectMode(CENTER);
      noStroke();
      fill(230);
      rect(width/2,height/2,900,600,40);
      fill(200);
      rect(width/2-325,height/2,250,600,40,0,0,40);

      fill(230);
      strokeWeight(0.5);
      stroke(180);
      rect(width/2-325,height/2-200,248,100); //active buddy

      fill(215); //hover 180
      rect(width/2-325,height/2+100,248,100); //other inactive buddies
      fill(200);
      rect(width/2-325,height/2-100,248,100); //other inactive buddies
      rect(width/2-325,height/2,248,100); //other inactive buddies
      rect(width/2-325,height/2+200,248,100); //other inactive buddies

      fill(247, 108, 108);
      rect(width/2,height/2-275,900,50,40,40,0,0); //bar

      fill(255);
      rect(width/2+125,height/2+210,620,150,40);

      image(boticon, width/2-445, height/2-230, 240, 60); //bot icon
      image(momicon, width/2-445, height/2-130, 240, 60); //mom icon
      image(jennicon, width/2-445, height/2-30, 240, 60); //jenn icon
      //image(kevicon, width/2-445, height/2+70, 240, 60); //kev icon

    }


    this.draw = function() {
      kev.draw();
      imageMode(CENTER);
      image(trash,50,50,55,55);
      image(folder,50,150,50,50);
      image(web,50,250,70,55);
      image(vlc,50,350,60,60);
      image(mail,50,450,60,60);

      //TEXTS
      rectMode(CORNER);
      noStroke();
      fill(55,71,133);
      rect(width/2-180,height/2-220,400,80,10); //BOX
      fill(255);
      textFont(myFont);
      textSize(23);
      textLeading(35);
      text("KEV asks, 'what do you\n"+"want for dinner?'", width/2-160, height/2-190)


      if(!this.sceneManager.isCurrent(preInitial) || !this.sceneManager.isCurrent(intro) || !this.sceneManager.isCurrent(help) || !this.sceneManager.isCurrent(mom) ||
      !this.sceneManager.isCurrent(momProfile) || !this.sceneManager.isCurrent(jennProfile) || !this.sceneManager.isCurrent(transitionToJenn1) ||
      !this.sceneManager.isCurrent(transitionToJenn2) || !this.sceneManager.isCurrent(jennThreeResponse1) || !this.sceneManager.isCurrent(momThreeResponse1) ||
      !this.sceneManager.isCurrent(jenn) || !this.sceneManager.isCurrent(momProfile2) || !this.sceneManager.isCurrent(jennProfile2) || !this.sceneManager.isCurrent(transitionToMom1) ||
      !this.sceneManager.isCurrent(transitionToMom2) || !this.sceneManager.isCurrent(jennThreeResponse2) || !this.sceneManager.isCurrent(momThreeResponse2) ||
      !this.sceneManager.isCurrent(scene11))
      {

        if((millis() - sTime)>1000)
        {
          noStroke();
          fill(55,71,133);
          rect(width/2-180,height/2-110,300,80,10); //BOX
          fill(255);
          textFont(myFont);
          textSize(23);
          textLeading(35);
          text("What would you\n"+"like to say?", width/2-160, height/2-80)
          response19.draw();
          response20.draw();
        }
      }
    }



}

function kevprofile() {
var back5;

  this.setup = function() {
    background(168, 208, 230);
    pepper.position.x=width/2+320;
    pepper.position.y=height/2-110;
    pepper.scale=0.3;

    stars.position.x=width/2;
    stars.position.y=height/2+80;
    stars.scale=0.5;

    back5 = new Clickable();
    back5.onHover = function(){
      this.img = backHover;
      this.x=width/2-410;
      this.y=height/2-200;
      this.width=50;
      this.height=50;
    }

    back5.onOutside = function(){
      this.img=backbutton;
      this.x=width/2-410;
      this.y=height/2-200;
      this.width=50;
      this.height=50;
    }

    back5.onPress = function(){
      mgr.showScene(kevThreeResponse);
    }

}
  this.enter = function() {
    button.hide();
    button2.hide();
    angry.visible=false;
    blueplant.visible=false;
    purpleplant.visible=false;
    stars.visible=true;
    pepper.visible=true;

  }

  this.draw = function() {
    background(168, 208, 230);
    rectMode(CENTER);
    noStroke();
    fill(230);
    rect(width/2,height/2,900,600,40); //chat window
    fill(200);
    rect(width/2-410,height/2,80,600,40,0,0,40); //buddy list
    noStroke();
    fill(247, 108, 108);
    rect(width/2,height/2-275,900,50,40,40,0,0); //bar

    image(kevprofilepic,width/2-380,height/2-250,300,300); //profile pic
    fill(255);
    rect(width/2+175,height/2+25,500,500,40);
    rect(width/2-223,height/2+165,250,220,40);
    image(ramen,width/2+20,height/2+60,320,200);
    fill(0);
    textFont(myFont);
    textSize(13);
    textLeading(30);
    text("Name: Kev\n"+                                       //prof description
        "Favorite color: orange\n"+
        "Hobby: photorgaphy\n"+
        "Status: offline\n\n"+
        "Last online: 5 min ago", width/2-335, height/2+95);

    text("Man, I've been craving something\n"+"spicy all week! I'd hit up a restaurant\n"+"but eating out is so expensive. Oh the\n"+"woes, haha! This photo I took two months\n"+"ago makes me wanna drool.", width/2-20,height/2-80);
    textSize(10);
    text("Updated 1 hour ago:", width/2-40,height/2-140);
    stroke(0);
    line(width/2-40,height/2-139,width/2+95,height/2-139);

    imageMode(CENTER);
    image(trash,50,50,55,55);
    image(folder,50,150,50,50);
    image(web,50,250,70,55);
    image(vlc,50,350,60,60);
    image(mail,50,450,60,60);
    drawSprites();
    back5.draw();

  }


}

function kevThreeResponse() {
var response21;
var response22;
var response23;

  this.setup = function() {

    response21 = new Clickable();
    response22 = new Clickable();
    response23 = new Clickable();

    //==========RESPONSE #1===========//
    response21.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+160;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "I don't know.";
    }

    response21.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+160;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "I don't know.";
    this.textColor = "#000000";
    }

    response21.onPress = function(){
      //image(reply3, width/2+140,height/2-20,280,100); //reply#3
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+140,height/2-10,330,80,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(23);
      textLeading(35);
      text("I'm not sure...", width/2+160, height/2+20);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+70,250,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Message sent.", width/2-160, height/2+100);
        messageReceived.play();
      }, 1000); //msg sent image
      setTimeout(() => { mgr.showScene(botLeaves); }, 3000); //change scene
    }



    //==========RESPONSE #2===========//

    response22.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+200;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "(Ignore)";
    }

    response22.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+200;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "(Ignore)";
    this.textColor = "#000000";
    }

    response22.onPress = function(){
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+250,height/2,180,50,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(23);
      textLeading(35);
      text("Ignore it.", width/2+260, height/2+30);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+60,300,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Message ignored.", width/2-160, height/2+90);
        messageReceived.play();
      }, 1000); //msg ignored image
      setTimeout(() => { mgr.showScene(botLeaves); }, 3000); //change scene
    }


    //==========RESPONSE #3===========//
    response23.onHover = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.textColor = "#a8a8a8";
    this.x = width/2-160;
    this.y = height/2+240;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "Ramen!";
    }

    response23.onOutside = function(){
    this.color = "#ffffff";
    this.strokeWeight = 0;
    this.x = width/2-160;
    this.y = height/2+240;
    this.width = 550;
    this.height=20;
    this.textSize = 20;
    this.textFont = "Lucida-Typewriter-Regular";
    this.text = "Ramen!";
    this.textColor = "#000000";
    }

    response23.onPress = function(){
      //image(reply3, width/2+140,height/2-20,280,100); //reply#3
      rectMode(CORNER);
      noStroke();
      fill(255);
      rect(width/2+100,height/2-10,330,80,10); //BOX
      fill(0);
      textFont(myFont);
      textSize(20);
      textLeading(30);
      text("Let's cook some spicy\n"+"ramen!", width/2+110, height/2+20);
      setTimeout(() => {
        fill(55,71,133);
        rect(width/2-180,height/2+70,250,50,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("Message sent.", width/2-160, height/2+100);
        messageReceived.play();
      }, 1000); //msg sent image
      setTimeout(() => { mgr.showScene(botLeaves); }, 3000); //change scene
    }



    //==========end of responses===========//
  }





  this.enter = function() {
    button.hide();
    button2.hide();
    messageReceived.play();
    background(168, 208, 230);
    rectMode(CENTER);
    noStroke();
    fill(230);
    rect(width/2,height/2,900,600,40);
    fill(200);
    rect(width/2-325,height/2,250,600,40,0,0,40);

    fill(230);
    strokeWeight(0.5);
    stroke(180);
    rect(width/2-325,height/2-200,248,100); //active buddy

    fill(200); //hover 180
    rect(width/2-325,height/2-100,248,100); //other inactive buddies
    rect(width/2-325,height/2-100,248,100); //other inactive buddies
    rect(width/2-325,height/2,248,100); //other inactive buddies
    rect(width/2-325,height/2+100,248,100); //other inactive buddies
    rect(width/2-325,height/2+200,248,100); //other inactive buddies

    fill(247, 108, 108);
    rect(width/2,height/2-275,900,50,40,40,0,0); //bar

    fill(255);
    rect(width/2+125,height/2+210,620,150,40);

    image(boticon, width/2-445, height/2-230, 240, 60); //bot icon
    image(momicon, width/2-445, height/2-130, 240, 60); //mom icon
    image(jennicon, width/2-445, height/2-30, 240, 60); //jenn icon
    image(kevicon, width/2-445, height/2+70, 240, 60); //kev icon


  }


  this.draw = function() {
    imageMode(CENTER);
    image(trash,50,50,55,55);
    image(folder,50,150,50,50);
    image(web,50,250,70,55);
    image(vlc,50,350,60,60);
    image(mail,50,450,60,60);

    //TEXTS
    rectMode(CORNER);
    noStroke();
    fill(55,71,133);
    rect(width/2-180,height/2-220,400,80,10); //BOX
    fill(255);
    textFont(myFont);
    textSize(23);
    textLeading(35);
    text("KEV asks, 'what do you\n"+"want for dinner?'", width/2-160, height/2-190)


        noStroke();
        fill(55,71,133);
        rect(width/2-180,height/2-110,300,80,10); //BOX
        fill(255);
        textFont(myFont);
        textSize(23);
        textLeading(35);
        text("What would you\n"+"like to say?", width/2-160, height/2-80)
        response21.draw();
        response22.draw();
        response23.draw();

  }


}

function botLeaves(){
  var sTime;
  var cont;

    this.setup = function() {

      cont = new Clickable();

      //==========RESPONSE #1===========//
      cont.onHover = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.textColor = "#a8a8a8";
      this.x = width/2-160;
      this.y = height/2+200;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "Restart?";
      }

      cont.onOutside = function(){
      this.color = "#ffffff";
      this.strokeWeight = 0;
      this.x = width/2-160;
      this.y = height/2+200;
      this.width = 550;
      this.textSize = 20;
      this.textFont = "Lucida-Typewriter-Regular";
      this.text = "Restart?";
      this.textColor = "#000000";
      }

      cont.onPress = function(){
        mgr.showScene(help);
      }


    }




    this.enter = function() {
      button.hide();
      button2.hide();
      sTime = millis();
      messageReceived.play();
      background(168, 208, 230);
      setTimeout(() => {  messageReceived.play(); }, 1000);
      setTimeout(() => {  ending.play(); }, 2500);
      rectMode(CENTER);
      noStroke();
      fill(230);
      rect(width/2,height/2,900,600,40); //chat window
      fill(200);
      rect(width/2-325,height/2,250,600,40,0,0,40); //buddy list

      fill(230);
      strokeWeight(0.5);
      stroke(180);
      rect(width/2-325,height/2-200,248,100); //active buddy

      fill(200); //hover 180
      rect(width/2-325,height/2-100,248,100); //other inactive buddies
      rect(width/2-325,height/2-100,248,100); //other inactive buddies
      rect(width/2-325,height/2,248,100); //other inactive buddies
      rect(width/2-325,height/2+100,248,100); //other inactive buddies
      rect(width/2-325,height/2+200,248,100); //other inactive buddies

      noStroke();
      fill(247, 108, 108);
      rect(width/2,height/2-275,900,50,40,40,0,0); //bar
      fill(255);
      rect(width/2+125,height/2+210,620,150,40); //response box

      image(boticon, width/2-445, height/2-230, 240, 60); //bot icon
      image(momicon, width/2-445, height/2-130, 240, 60); //mom icon
      image(jennicon, width/2-445, height/2-30, 240, 60); //jenn icon
      image(kevicon, width/2-445, height/2+70, 240, 60); //kev icon


    }

    this.draw = function() {

      imageMode(CENTER);
      image(trash,50,50,55,55);
      image(folder,50,150,50,50);
      image(web,50,250,70,55);
      image(vlc,50,350,60,60);
      image(mail,50,450,60,60);

  //texts
      rectMode(CORNER);
      noStroke();
      fill(55,71,133);
      rect(width/2-180,height/2-220,460,50,10); //BOX
      fill(255);
      textFont(myFont);
      textSize(23);
      textLeading(35);
      text("There are no new messages.", width/2-160, height/2-187)




        if(this.sceneManager.isCurrent(botLeaves))
        {

          if((millis() - sTime)>1000)
          {

            rectMode(CORNER);
            noStroke();
            fill(55,71,133);
            rect(width/2-180,height/2-160,170,50,10); //BOX
            fill(255);
            textFont(myFont);
            textSize(23);
            textLeading(35);
            text("Goodbye.", width/2-160, height/2-125)
            }

            if((millis() - sTime)>2500)
            {
              rectMode(CORNER);
              noStroke();
              fill(45);
              textFont(myFont);
              textSize(23);
              textLeading(35);
              text("KEEPER has left the chat.", width/2-90, height/2)
              cont.draw();
            }
          }

        }
      }
