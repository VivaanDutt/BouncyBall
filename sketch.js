const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, ground, ball; 


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {isStatic: true};

  ground = Bodies.rectangle(200, 700, 400, 20, ground_options); 
  World.add(world, ground);
  
  var ball_option = {restitution: 1.0};
  ball = Bodies.circle(200, 400, 20, ball_option);
  
  World.add(world, ball);
  console.log(ball);

}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

}