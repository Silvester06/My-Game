var p1,p2,a1,a2,g1,g2
var s1 = 0;
var s2 = 0;

function preload(){
    a1 = loadImage("p1.png")
    a2 = loadImage("p2.png")
}

function setup(){
    createCanvas(1200,600)
   p1 = createSprite(200,100,20,20)
   p2 = createSprite(800,100,20,20)
   ball = createSprite(600,200,30,30)
   g1 = createSprite(1150,300,10,200)
   g2 = createSprite(50,300,10,200)

   ball.velocityX = 3;
   ball.velocityY = 3;

   p1.addImage(a1)
   p2.addImage(a2)
}

function draw(){

    
    
    background('green');

    stroke('white')
    textSize(20)
    text(s1,50,100)
    text(s2,1150,100)



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

