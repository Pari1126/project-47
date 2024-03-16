var bg
var bottomGround
var topGround
var smileyface
var coin1,coin2,coin3,coin4,coin5,coin6,coin7
var invisibleGround, invisibleGround2
var score=0
var bgSound



function preload(){
smileyfaceImage = loadImage("SNice.svg.png")
coinImage = loadImage("coin.png")
bgSound = loadSound("bg.mp3")
endTimerSound = loadSound("failure1.mp3")

}


function setup(){

//background image
bg = createCanvas(700,700)

smileyface = createSprite(300,30,10,10);
smileyface.addImage("smileyface",smileyfaceImage);
smileyface.scale = 0.03;

coin1 = createSprite(350,170,10,10);
coin1.addImage("coin1",coinImage);
coin1.scale = 0.04

coin2 = createSprite(430,300,10,10);
coin2.addImage("coin2",coinImage);
coin2.scale = 0.04;

coin3 = createSprite(260,440,10,10);
coin3.addImage("coin3",coinImage);
coin3.scale = 0.04;

coin4 = createSprite(300,550,10,10);
coin4.addImage("coin4",coinImage);
coin4.scale = 0.04;

coin5 = createSprite(430,590,10,10);
coin5.addImage("coin5",coinImage);
coin5.scale = 0.04;

coin6 = createSprite(230,180,10,10);
coin6.addImage("coin6",coinImage);
coin6.scale = 0.04

coin7 = createSprite(440,440,10,10);
coin7.addImage("coin7",coinImage);
coin7.scale = 0.04;


invisibleGround = createSprite(400,1,800,10);
invisibleGround.visible = false;

invisibleGround2 = createSprite(400,700,800,10);
invisibleGround2.visible = false;





      
 //walls
 wall1 = createSprite(400,50,10,300); //top right wall
 wall2= createSprite(200,10,10,400); // top of big wall
 wall3 = createSprite(200,390,10,200);
 wall4 = createSprite(400,390,10,200); //bottom right wall
 wall5 = createSprite(400,200,150,10);
 wall6 = createSprite(470,400,150,10);
 wall7 = createSprite(200,290,140,10);
 wall8 = createSprite(260,120,120,10);
 wall9 = createSprite(480,340,10,290);
 wall10 = createSprite(260,400,120,10);
 wall11 = createSprite(200,200,10,170);
 wall12 = createSprite(200,550,10,170);
 wall13 = createSprite(260,500,130,10);
 wall14 = createSprite(425,550,120,10);
 wall15 = createSprite(480,490,10,120);
 wall16 = createSprite(310,630,210,10);
 wall17 = createSprite(330,60,140,10);
 wall18 = createSprite(330,350,140,10);
 wall19 = createSprite(260,180,10,130);
 wall20 = createSprite(270,550,10,100);
 wall21 = createSprite(530,550,100,10);
 wall22 = createSprite(580,595,10,100);
 wall23 = createSprite(530,600,100,10);
 

 

 



}
function draw() {
  background("purple");

  textSize(25);
  text("score:" +score,500,50);
  

  

 
  

  

  if (keyDown(RIGHT_ARROW)){
    smileyface.x = smileyface.x + 2.3;

  }

  if (keyDown(LEFT_ARROW)){
    smileyface.x = smileyface.x - 2.3;
  }

  if (keyDown(DOWN_ARROW)){
    smileyface.y = smileyface.y +2.3;
  }

  if(keyDown(UP_ARROW)){
    smileyface.y = smileyface.y -2.3;
  }

  if(smileyface.isTouching(coin1)){
    coin1.destroy();
    score=score+1
  }
  if(smileyface.isTouching(coin2)){
    coin2.destroy();
    score=score+1
  }

  if(smileyface.isTouching(coin3)){
    coin3.destroy();
    score=score+1
  }

  if(smileyface.isTouching(coin4)){
    coin4.destroy();
    score=score+1
  }

  if(smileyface.isTouching(coin5)){
    coin5.destroy();
    score=score+1
  }

  if(smileyface.isTouching(coin6)){
    coin6.destroy();
    score=score+1
  }

  if(smileyface.isTouching(coin7)){
    coin7.destroy();
    score=score+1
  }


  smileyface.collide(invisibleGround);
  smileyface.collide(invisibleGround2);

  smileyface.collide(wall1);
  smileyface.collide(wall2);
  smileyface.collide(wall3);
  smileyface.collide(wall4);
  smileyface.collide(wall5);
  smileyface.collide(wall6);
  smileyface.collide(wall7);
  smileyface.collide(wall8);
  smileyface.collide(wall9);
  smileyface.collide(wall10);
  smileyface.collide(wall11);
  smileyface.collide(wall12);
  smileyface.collide(wall13);
  smileyface.collide(wall14);
  smileyface.collide(wall15);
  smileyface.collide(wall16);
  smileyface.collide(wall17);
  smileyface.collide(wall18);
  smileyface.collide(wall19);
  smileyface.collide(wall20);
  smileyface.collide(wall21);
  smileyface.collide(wall22);
  smileyface.collide(wall23);

  
  

  



        
          
          
   
        drawSprites();
}
  
  
        
  