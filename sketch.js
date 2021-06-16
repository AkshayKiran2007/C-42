var hasDocked=false;
var iss , spacecraft1;

function preload(){
bg=loadImage("Docking-undocking/spacebg.jpg")
iss_img=loadImage("Docking-undocking/iss.png")
sc1=loadImage("Docking-undocking/spacecraft1.png")
sc2=loadImage("Docking-undocking/spacecraft2.png")
sc3=loadImage("Docking-undocking/spacecraft3.png")
sc4=loadImage("Docking-undocking/spacecraft4.png")
}
  
function setup() {
  createCanvas(800,500);
  iss=createSprite(300, 175);
  iss.addImage(iss_img);
  iss.scale=0.8
  spacecraft1=createSprite(250,265);
  spacecraft1.addImage(sc1)
  spacecraft1.scale=0.2
 
}

function draw() {
  background(bg);
  if(!hasDocked){
    spacecraft1.x=spacecraft1.x+Math.random(-1,1);
  } 
  if(keyDown("left")){
    spacecraft1.addImage(sc3);
    spacecraft1.x=spacecraft1.x-1;
  } 
  if(keyDown("right")){
    spacecraft1.addImage(sc4);
    spacecraft1.x=spacecraft1.x+1;
  } 
  if(keyDown("down")){
    spacecraft1.addImage(sc2);
  }
  if(keyDown("up")){
    spacecraft1.y=spacecraft1.y-1;
  } 

  if(spacecraft1.y <= spacecraft1.y+70 && spacecraft1.x <= spacecraft1.x-10){
    hasDocked=true;
    text ("docking succesful",200,300);
    fill("white");
    textSize(25)
    

  }

  
  drawSprites();

}
