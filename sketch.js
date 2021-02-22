
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5; 
var world,boy, rope;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1200,134,30);
	mango3=new mango(1134,156,30);
	mango4=new mango(1000,173,30);
	mango5=new mango(1212,164,30);
	 
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Stone();
	stoneObj.scale=0.25;
	launcherObject = new Slingshot(stoneObj.body, {x:245, y:410});

	Engine.run(engine);
	
	
}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
launcherObject.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
if(stoneObj.body.position.x > 1300){
	text("Press Space to throw stone again", 100, 100);
}
if(keyCode === 32)	{
	Matter.Body.setPosition(stoneObj.body, {x: 245, y:410});
	launcherObject.attach(stoneObj.body);
}
stoneObj.display();
  groundObject.display();
  Touching();
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x:mouseX, y: mouseY})
}

function mouseReleased(){
	launcherObject.fly();
}
function Touching(){
	if((stoneObj.body.position.x === mango1.body.position.x) && (stoneObj.body.position.y === mango1.body.position.y)){
		Matter.Body.setStatic(mango1.body, false);
	}
	if((stoneObj.body.position.x === mango2.body.position.x) && (stoneObj.body.position.y === mango2.body.position.y)){
		Matter.Body.setStatic(mango2.body, false);
	}
	if((stoneObj.body.position.x === mango3.body.position.x) && (stoneObj.body.position.y === mango3.body.position.y)){
		Matter.Body.setStatic(mango3.body, false);
	}
	if((stoneObj.body.position.x === mango4.body.position.x) && (stoneObj.body.position.y === mango4.body.position.y)){
		Matter.Body.setStatic(mango4.body, false);
	}
	if((stoneObj.body.position.x === mango5.body.position.x) && (stoneObj.body.position.y === mango5.body.position.y)){
		Matter.Body.setStatic(mango5.body, false);
	}
}


