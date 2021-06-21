const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine , world;
var ground,stand1 ,stand2;
var polygon;
var slingShot;
var g_image
function preload()
{
	g_image =  loadImage("polygon.png");
}

function setup() {
var canvas = 	createCanvas(1200, 500);

engine = Engine.create();
world = engine.world;
Engine.run(engine);
	

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20);
  stand1 = new Ground(400,350,250,10);
  stand2 = new Ground(700,200,200,10);
 
 
  box1 = new Box(310,275,30,40);
  box2  = new Box(340 ,275,30,40);
  box3  = new Box(370 ,275,30,40);
  box4  = new Box(400 ,275,30,40);
  box5  = new Box(430 ,275,30,40);
  box6  = new Box(460 ,275,30,40);
  box7   = new Box(490,275,30,40);
  box8  = new Box(330,235,30,40);
  box9  = new Box(360,235,30,40);
  box10  = new Box(390,235,30,40);
  box11  = new Box(420,235,30,40);
  box12  = new Box(450,235,30,40);

  box13  = new Box(360,195,30,40);
  box14  = new Box(390,195,30,40);
  box15  = new Box(420,195,30,40);

  box16  = new Box(390,155,30,40);

  boxs1   = new Box(640,175,30,40);
  boxs2  = new Box(670,175,30,40);
  boxs3  = new Box(700,175,30,40);
  boxs4  = new Box(730,175,30,40);
  boxs5  = new Box(760,175,30,40);

  boxs6 = new Box(670,135,30,40);
  boxs7  = new Box(700,135,30,40);
  boxs8  = new Box(730,135,30,40);
  boxs9  = new Box(700,95,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:110,y:160});

  
}


function draw() {
  rectMode(CENTER);
  background("white");
  fill("blue");
  textSize(24);
  text("Drag the Hexagonal Stone and Release it to launch it towards the blocks",100,70);
  ground.display();
  stand1.display ();
  stand2.display ();
  fill("skyblue");
  box1.display();
  fill("skyblue");
  box2.display();
  fill("skyblue");
  box3.display();
  fill("skyblue");
  box4 .display();
  fill("skyblue");
  box5 .display();
  fill("skyblue");
  box6 .display();
  fill("skyblue");
  box7 .display();
  fill("pink");
  box8 .display();
  box9 .display();
  box10 .display();
  box11 .display();
  box12 .display();
  fill("turquoise");
  box13 .display();
  box14 .display();
  box15 .display();
  fill("grey");
  box16 .display();

  fill("skyblue");
  boxs1.display();
  fill("skyblue");
  boxs2.display();
  fill("skyblue");
  boxs3.display();
  fill("skyblue");
  boxs4 .display();
  fill("skyblue");
  boxs5 .display();
  fill("skyblue");
  boxs6 .display();
  fill("skyblue");
  boxs7 .display();
  fill("pink");
  boxs8 .display();
  boxs9 .display();
slingShot.display();

var position = this.polygon.position;
imageMode(CENTER);
image(g_image,polygon.position.x,position.y,40,40);
  drawSprites();
 
}
function mouseDragged(){

  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed() {

	if(keyCode === 32) {
		slingShot.attach(this.polygon);
  }
  
}



