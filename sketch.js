const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;

function preload(){
gunIMG = loadImage("images/gun.png");
targetIMG = loadImage("images/target.png");
}


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  target = new Target(500,200);
  gun = Bodies.rectangle(160,320,100,100);
  World.add(world,gun);


}

function draw() {
  Engine.update(engine);
  background("black");  
  target.display();
  fill("white");
  text(mouseX+" , "+mouseY,200,30);
  imageMode(CENTER);
  image(gunIMG,160,320,100,100);


}