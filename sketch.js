
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall, ground;
var wall1, wall2, wall3;
var bin, binPic;

function preload()
{	
	binPic = loadImage("bin.png")
}

function setup() {
	createCanvas(1000, 400);
	
	engine = Engine.create();
	world = engine.world;

	paperBall = new Paper(150, 330, 18);
	ground = new Grounds(500, 380, 1000, 10);
	wall1 = new Dustbins(690, 305, 5, 125);
	wall2 = new Dustbins(810, 305, 5, 125);
	wall3 = new Dustbins(750, 370, 120, 5);

	bin = createSprite(750, 292, 100, 100);
	bin.addImage(binPic)
	bin.scale = 0.5

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  drawSprites();
  paperBall.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:60, y:-50});
	}
}