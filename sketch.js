var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  var wall=createSprite(1200, 200, thickness, height/2);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background(80,80,80); 
  function hascollided(lbullet,lwall){
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    return false;
  }

  
  drawSprites();
}