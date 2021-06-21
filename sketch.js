const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, computer, playerBase, computerBase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  //Create Player Base and Computer Base Object
  playerBase = new PlayerBase(1100, random(450, height-300), 180, 150)
  player = new Player(285, playerBase.body.position.y - 153, 50, 180)

  computerBase = new ComputerBase(300, random(450, height-300), 180, 150)
  computer = new Computer(1105, computerBase.body.position.y-153, 50, 180)
  
  

   
 }

function draw() {

  background(200);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerBase.display() 
   computerBase.display()
   //display Player and computerplayer
   player.display()
   computer.display()

}
