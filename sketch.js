var bullet,wall;
var speed,weight,thickness = random(22,83);

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(0,200,50,20);
  bullet.shapeColor="white";
  thickness =random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.width=thickness;
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  

  bullet.velocityX= speed;

  
}


  

function draw() {
  background(0);
  
  
//collision(bullet,wall);
hasCollided(bullet,wall);
if(wall.x-bullet.x<(bullet.width-wall.width)/2){
  bullet.velocityX=0;
  var damage= 0.5 * weight * speed * speed/(thickness* thickness * thickness);


if(damage > 10){
  bullet.shapeColor=color(255,0,0);
}

if(damage < 10 ){
  bullet.shapeColor=color(0,255,0);
}
console.log(damage);
}

  drawSprites();
}

function hasCollided(object1,object2){
  object1RightEdge=object1.x+object1.width;
  object2.LeftEdge=object2.x;
  if(object1.RightEdge>= wall.LeftEdge){
  return true;
  }
  return false;
 
}

