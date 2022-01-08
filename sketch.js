const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
function setup() 
{
  createCanvas(500,720);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  ground = new Ground(200,690,500,10)
  rope = new Rope(6,{x:245, y:30})
}

function draw() 
{
  background(51);
  ground.display();
 rope.show(); 
  Engine.update(engine);
 
}




