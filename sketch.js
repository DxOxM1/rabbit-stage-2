//Renaming
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

function preload(){
  bg = loadImage("ImagesSound/background.png")
  hungrybunny = loadImage("ImagesSound/Rabbit-01.png")
  food = loadImage("ImagesSound/melon.png")



}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(7, {x:250, y:30})
  fruit = Bodies.circle(250,250,30)
  Matter.Composite.add(rope.body,fruit)
  FruitConnection = new Link(rope,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  button = createImg("ImagesSound/cut_btn.png")
  button.position(220,30)
  button.size(50,50)
  button.mouseClicked(drop)
  bunny = createSprite(250,600,20,20)
  bunny.addImage(hungrybunny)
  bunny.scale = 0.3
}

function draw() 
{
  background(bg);
  //ground.show();
  rope.show();
  push()
  imageMode(CENTER)
  image(food,fruit.position.x,fruit.position.y,90,90)
  pop()
  Engine.update(engine);
  

 
  drawSprites()
}
function drop(){
  rope.break()
  FruitConnection.breakFruit()
  FruitConnection = null
}
