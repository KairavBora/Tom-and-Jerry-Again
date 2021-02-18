var garden,cat,mouse
var gardenImg,catImg,catImg2,mouseImg,catImg3,mouseImg2,mouseImg3



function preload() {
    //load the images here
    gardenImg = loadImage("garden.png")
    catImg = loadImage("cat1.png")
    catImg2=loadAnimation("cat2.png","cat3.png");
    mouseImg=loadImage("mouse1.png");
    catImg3=loadImage("cat4.png");
    mouseImg2=loadImage("mouse4.png");
    mouseImg3=loadAnimation("mouse2.png","mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden=createSprite(500,400,50,80)
garden.addImage(gardenImg)

cat=createSprite(750,575,250,100);
cat.addImage(catImg);
cat.scale=0.1

mouse= createSprite(275,575,150,80);
mouse.addImage(mouseImg);
mouse.scale=0.1
}

function draw() {

    background("white");
    text(mouseX+','+mouseY,10,45)
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width+mouse.width)/2){
  cat.velocityX=0
  cat.x=300;
  cat.scale=0.1
  cat.addAnimation("catLastImage",catImg3);
  mouse.addImage("mouseLastImage",mouseImg2);
  cat.changeAnimation("catLastImage")
  mouse.changeImage("mouseLastImage")
  
}


keyPressed();



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
      mouse.addAnimation("mouseTeasing",mouseImg3);
      mouse.changeAnimation("mouseTeasing");

  }


}
