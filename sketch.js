const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


var p1,p2,a1,a2,g1,g2,p3,g11,g12,p16,p17
var s1 = 0;
var s2 = 0;

function preload(){
    a1 = loadImage("p11.png")
    a2 = loadImage("p12.png")
    p3 = loadImage("p13.png")
    g11 = loadImage("p14 - Copy.png")
    g12 = loadImage("p15.png")
    s1 = loadImage("p16.png")
}

function setup(){
    createCanvas(1200,600)
    engine = Engine.create();
    world = engine.world;

   p1 = createSprite(200,100,20,20)
   p2 = createSprite(800,100,20,20)
   ball = createSprite(600,200,30,30)
   g1 = createSprite(1150,300,10,200)
   g2 = createSprite(50,300,10,200)
   //p16 = createSprite(500,70,80,50)



   ball.velocityX = 3;
   ball.velocityY = 3;

   p1.addImage(a1)
   p2.addImage(a2)
   ball.addImage(p3)
   g1.addImage(g11)
   g2.addImage(g12)
   //p16.addImage(s1)



   p1.scale = 0.2
   ball.scale = 0.1
   g1.scale = 0.3
   g2.scale = 0.3
   //p16.scale = 1.0
}

function draw(){
    
    
    
    background('green');
    Engine.update(engine);

    stroke('white')
    textSize(20)
    text(s1,50,100)
    text(s2,1150,100)

    image(s1,5,5,1200,250)

    if(keyDown('left')){
        p1.x-=5
    }
    if(keyDown('right')){
        p1.x+=5
    }
    if(keyDown('up')){
        p1.y-=5
    }
    if(keyDown('down')){
        p1.y+=5
    }
    if(keyDown('a')){
        p2.x-=5
    }
    if(keyDown('d')){
        p2.x+=5
    }
    if(keyDown('w')){
        p2.y-=5
    }
    if(keyDown('s')){
        p2.y+=5
    }

    if(ball.isTouching(g1)){
        ball.velocityX = 0;
        ball.velocityY = 0;
        s1 += 1;
    }

    if(ball.isTouching(g2)){
        ball.velocityX = 0;
        ball.velocityY = 0;
        s2 += 1;
    }

    edges = createEdgeSprites();
    ball.bounceOff(edges)
    ball.bounceOff(p1)
    ball.bounceOff(p2)
    p1.bounceOff(edges)
    p2.bounceOff(edges)
    drawSprites();
}   

