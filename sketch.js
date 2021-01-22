
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,700,800,30)
  paper = new Paper (60,200,20,20);
  dustbin1 = new Dustbin (500,675,150,20)
  dustbin2 = new Dustbin (425,650,20,50)
  dustbin3 = new Dustbin (575,650,20,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  
}

function keyPressed(){
if(keyCode === UP_ARROW){

  Matter.Body.applyForce(paper.body,paper.body.position,{x:7,y:-7})

}

}

  

