
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(700, 700, 1600, 20)
paper1 = new paper(300, 300, 40)
dustbinObj=new dustbin(1200,650);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display();
  paper1.display();
  dustbinObj.display();
  drawSprites();


}
function keyPressed() {
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85, y:-85})
  }
}



