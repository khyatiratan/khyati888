function setup() {
  createCanvas(800,400);
 ball=createSprite(400, 200, 50, 50);
 ball.shapeColor="black";
 ball2=createSprite(200,290,30,50);
 ball2.shapeColor="blue";
}

function draw() {
  background(255,255,255);  

ball.x=mouseX;
ball.y=mouseY;
if(ball.x-ball2.x<ball2.width/2+ball.width/2
  &&ball2.x-ball.x<ball2.width/2+ball.width/2
  &&ball.y-ball2.y<ball2.height/2+ball.height/2
  &&ball2.y-ball.y<ball2.height/2+ball.height/2
  )
{ball.shapeColor="pink";
ball2.shapeColor="orange";

}
else{ball.shapeColor="black";
ball2.shapeColor="blue";

}


  drawSprites();



}