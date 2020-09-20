function preload() {
  img = loadImage('assets/laDefense.jpg');
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  block8=new Box(330,235,30,40);
  block9=new Box(360,235,30,40);
  block10=new Box(390,235,30,40);
  block11=new Box(420,235,30,40);
  block12=new Box(450,235,30,40);
  block13=new Box(360,195,30,40);
  block14=new Box(390,195,30,40);
  block15=new Box(420,195,30,40);
  block16=new Box(390,155,30,40);
  polygon = Bodies.circle(50,200,20);
  world.add(world,polygon);


}

function draw() {
  background(255,255,255);  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  bodyA=0;
}