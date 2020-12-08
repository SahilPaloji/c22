
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World= Matter.World;
 const Body= Matter.Body
var myWorld, myEngine;
var ground, ball;
function setup() {
  var canvas= createCanvas(400,400);
  myEngine= Engine.create()
  // myworld is my engine"s world
  myWorld= myEngine.world;
  
var groundOptions={
  isStatic: true,
}

ground=Bodies.rectangle(200,380,400,10,groundOptions)
World.add(myWorld,ground);

console.log(ground.position)

var ballOptions={
  restitution: 1.0
}
ball=Bodies.circle(200,200,25,ballOptions);
World.add(myWorld,ball);
//Body.setStatic(ball,true)
}

function draw() {
  background(0);  
  Engine.update(myEngine);
 rectMode(CENTER)
 // rect(200,200,50,50);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25,25); 
}