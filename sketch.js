const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body; 
const Render = Matter.Render 

var paper1, ground, bin1, bin2, bin3; 

function setup() { 
	createCanvas(800, 700); 
 
	engine = Engine.create();
	world = engine.world; 
 
	//Create the Bodies Here. 
	paper1 = new Paper(100, 600, 20); 
 
	ground = new Ground(400,695,800,10); 

	bin1 = new Dustbin(600,695,200,10);

	bin2 = new Dustbin(500,650,10,100);

	bin3 = new Dustbin(700,650,10,100);

	var render = Render.create({ element: document.body, engine: engine, options: { width: 800, height: 700, wireframes: false } }); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();

  ground.display();
  
  bin1.display();

  bin2.display();

  bin3.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body, paper1.body.position, {x:1, y:-1});
  }
}
