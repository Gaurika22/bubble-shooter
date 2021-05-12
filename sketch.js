const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body
const   Render = Matter.Render


var engine, world;
var animal = []
var animals


var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 400,
    wireframes: false
  }
});

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

   animals=new Animals((random(0,width), 10,10))
   Body.setVelocity(animals,{x:0,y:2})

}

function draw(){
    background(0);
    Engine.update(engine);

    if(frameCount%60===0){
        animal.push(new Animals(random(0,width), 10,10));
      }
    
     for (var j = 0; j < animal.length; j++) {
      
        animal[j].display();
      }
    
}