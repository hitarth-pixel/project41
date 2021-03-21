var canvas;
var engine, world;
var drop1=[];
var maxDrop=100;
var thunder1,thunder,thunder2,thunder3;

const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body=Matter.Body;

function preload(){
    thunder1=loadAnimation("1.png","2.png","3.png","4.png");
    
}

function setup(){
    canvas=createCanvas(500,500);
    engine=Engine.create();
    world=engine.world;
    
        thunder=createSprite(100,100,40,120);
        thunder.addAnimation("thunder",thunder1);
        thunder.scale=0.5;
        
        thunder2=createSprite(200,70,30,120);
        thunder2.addAnimation("thunder",thunder1);
        thunder2.scale=0.3;
    
        thunder3=createSprite(400,100,60,120);
        thunder3.addAnimation("thunder",thunder1);
        thunder3.scale=0.3;

        umbrella=new Umbrella(150,350,20);        

    if(frameCount % 150 === 0){

      for(var i=0; i<maxDrop; i++){
          drop1.push(new Drops(random(0,500), random(0,500)));
      }

  } }

function draw(){
    Engine.update(engine);
    background(0);
    umbrella.display();
    drawSprites();
    for(var j = 0; j<maxDrop; j++){
          drop1[j].display();
          drop1[j].updateDrop()
          }
        }