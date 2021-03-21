
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof1=new Roof(320,220,400,20)
bob1=new Bobs(250,300)
bob2=new Bobs(300,300)
bob3=new Bobs(350,300)
bob4=new Bobs(400,300)
bob5=new Bobs(450,300)
slingshot1=new Slingshot(bob1.body,{x:200,y:400})
slingshot2=new Slingshot(bob2.body,{x:250,y:400})
slingshot3=new Slingshot(bob3.body,{x:300,y:400})
slingshot4=new Slingshot(bob4.body,{x:350,y:400})
slingshot5=new Slingshot(bob5.body,{x:400,y:400})
	Engine.run(engine);
  
}


function draw() {
	background("white");
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof1.display();
slingshot1.display();
slingshot2.display();
slingshot3.display();
slingshot4.display();
slingshot5.display();
  
  drawSprites();
 
}



