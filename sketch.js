const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backGround,bg;
var girl, snow, g;
var snowflake = [];

var engine,world;

function preload(){

  bg = loadImage("snow2.jpg")

  g = loadAnimation("character/girl1.jpeg","character/girl2.jpeg","character/girl3.jpeg","character/girl4.jpeg","character/girl5.jpeg","character/girl6.jpeg","character/girl7.jpeg","character/girl8.jpeg")

  sf = loadImage("snow4.webp")

}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);

  girl = createSprite(200,200,100,100);
  //girl.addAnimation("girl_walking",g)
  //girl.scale = 5;

  
  for(var i = 50; i<=width; i=i+50){
    snowflake.push(new Snow(i,0,70))
  }

}

function draw() {
  background(bg);  

  girl.velocityX = 3;

  Engine.update(engine)

  for (var i = 0; i < snowflake.length; i++) {
    snowflake[i].display();
    snowflake[i].setposition();
  }

  drawSprites();
}