var p = {
  x: 100,
  y: 50,

}

var c = {
  r: 255,
  g: 0,
  b: 0
}

function setup(){
createCanvas(1200,600);
background(0);
}

function draw(){
  c.r=random(0,255);
  c.g=random(63,255);
  c.b=random(0,89);
  p.x =random(0,width);
  p.y = random(0,height);
  noStroke();
  fill(c.r,c.g,c.b,100);
ellipse(p.x,p.y,50,50);
strokeWeight(7);
textSize(50);
fill(255);
text("HAPPY INDEPENDENCE DAY",100,300)
}