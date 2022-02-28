
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground, leftSide, rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 450);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
	ball = new Ball(400,140,12);
	ground = new Ground(width/2,400,width,20);
	leftSide = new Ground(600,355,10,110);
	rightSide = new Ground(700,355,10,110)
	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ball.show();
  ground.show();
  leftSide.show();
  rightSide.show();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce( ball, {x:0, y:0}, {x: 0.05, y: 0});
	}
}

