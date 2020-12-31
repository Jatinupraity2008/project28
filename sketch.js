const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree,boy;
var m1,m2,m3,m4,m5,m6,m7;
var stone;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (width/2,602,width,20);
	m1 = new Mango(600,300,20);
	m2 = new Mango(550,320,20);
	m3 = new Mango(570,340,20);
	m4 = new Mango(650,320,20);
	m5 = new Mango(750,350,20);
	m6 = new Mango(480,380,20); 
	m7 = new Mango(520,320,20);
	tree = new Tree(600,410,100,100);
	boy = new Boy(200,540,100,100);
	stone = new Stone(140,492,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  
  tree.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  boy.display();
  stone.display();

  drawSprites();
 }



