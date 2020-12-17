var a,b;



function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 80);
  a.shapeColor="blue";
  b=createSprite(300,200,80,50);
  b.shapeColor="green";

}

function draw() {
  background(255,255,255);  
  b.x=World.mouseX;
  b.y=World.mouseY;
  console.log(b.x-a.x)
  if(b.x-a.x<=a.width/2+b.width/2 &&a.x-b.x<=a.width/2+b.width/2
    && a.y-b.y<=a.height/2+b.height/2 && b.y-a.y<=a.height/2+b.height/2){
  a.shapeColor="green";
  b.shapeColor="blue";
  }
  else{
    a.shapeColor="blue";
    b.shapeColor="green";
  }

  drawSprites();
}