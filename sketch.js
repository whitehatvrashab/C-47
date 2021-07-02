var doremon,doremonImage1;
var bg,bgImage;

function preload(){
  bgImage=loadImage("bg.jpg");
  doremonImage1=loadAnimation("doremon1.png","doremon2.png","doremon3.png","doremon4.png");
}

function setup(){
  createCanvas(800,windowHeight);
  
  
  bg=createSprite(200,250,20,20);
  bg.addImage(bgImage);
  bg.scale=1.7;
  bg.velocityX=-5;
  
  doremon=createSprite(100,430,20,20);
  doremon.addAnimation("sprite",doremonImage1);
  doremon.scale=0.6
  
  
}

function draw(){
  background("white");
  if(bg.x<0){
    bg.x=bg.width/2;
  }
  drawSprites();
}