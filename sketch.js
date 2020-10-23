var box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
 var paper;
 

 

function setup() {
	createCanvas(1400, 400);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

  paper = new Paper(100,315,10);
  ground =  new Ground(700,350,1400,20);
  Box1 = new Container(1100,260,10,150);
  Box2 = new Container(1030,330,150,10);
  Box3 = new Container(960,260,10,150);

    
	   Engine.run(engine);
  
}


function draw() {
  
  background(0);
  paper.display();
  ground.display();
  Box1.display();
  Box2.display();
  Box3.display();
  drawSprites();
}
function keyPressed(){
        if (keyCode === 32) {
          Matter.Body.applyForce(paper.body, paper.body.position, {
            x: random(10,15),
            y: random(-10,-15)        });
        }
      }
 
