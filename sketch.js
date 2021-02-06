var p1,p2,a1,a2

function preload(){
    a1 = loadImage("p1.png")
    a2 = loadImage("p2.png")
}

function setup(){
    createCanvas(1200,600)
   p1 = createSprite(200,100,20,20)
   p2 = createSprite(800,100,20,20)
   ball = createSprite(600,200,30,30)
   ball.velocityX = 3;
   ball.velocityY = 3;

   p1.addImage(a1)
   p2.addImage(a2)
}

function draw(){
    
    background('white');

    edges = createEdgeSprites();
    ball.bounceOff(edges)
    ball.bounceOff(p1)
    ball.bounceOff(p2)
    drawSprites();
}   

