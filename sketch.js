function setup() {
  createCanvas(800,400);
 fixedrect =  createSprite(400, 200, 50, 50);
 movingrect =  createSprite(200, 200, 80, 40);
}

function draw() {
  background("red"); 
  movingrect.x = mouseX 
  movingrect.y = mouseY
  if(isTouching(fixedrect,movingrect) ){
    fixedrect.shapeColor = "green"
    movingrect.shapeColor = "green"
  }
  else{
    fixedrect.shapeColor = "blue"
    movingrect.shapeColor = "blue"  
  }
  drawSprites();
}
function isTouching(object1,object2){
  if(abs (object1.x-object2.x)<object2.width/2+object1.width/2&&
  abs (object1.y-object2.y)<object2.height/2+object1.height/2 ){
    return true
  }
  else{
   return false 
  }  
}