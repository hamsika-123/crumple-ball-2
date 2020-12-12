
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1,box1,box2,box3;
//var img;

function preload()
{
	//img=loadImage("crumplePaperImage.png");
	binnyImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1400, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	binny=createSprite(1075,400,100,300);
	binny.addImage(binnyImg);
	binny.scale=0.55
	paper1=new paper(400,0,25);
	
	ground1= new Ground(700,480,1400,10);

	box1 = new dustbin (1010,450,10,80);
    box2 = new dustbin (1050,465,100,20)
	box3 = new dustbin (1105,450,30,80);
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
 drawSprites();
  paper1.display();
  
 
 

  
 

 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:95,y:-95})
	
	  }
}





