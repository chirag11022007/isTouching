var mR, fR;

function setup() {
  createCanvas(800,800);
  fR=createSprite(600, 400, 50, 50);
  fR.shapeColor="green";
  
  mR=createSprite(400, 200, 100, 50);
  mR.shapeColor="green";
}

function draw() {
  background("black");  
  mR.x=mouseX;
  mR.y=mouseY;

  //distance = mR.x-fR.x
  if((mR.x-fR.x < fR.width/2 + mR.width/2) && 
  (fR.x-mR.x < fR.width/2 + mR.width/2) && 
  (mR.y-fR.y < fR.height/2 + mR.height/2) &&
  (fR.y-mR.y < fR.height/2 + mR.height/2)){
    fR.shapeColor="red";
    mR.shapeColor="red";
  }
  else {
    fR.shapeColor="green";
    mR.shapeColor="green";
  }
 
  drawSprites();
}