//let x,y;


var x = 150; // variable de posicion eje x
var y = 300;
 
var speed = 0.5; //variable de velocidad
var speed2 = 0.5; //variable de velocidad


function setup() {
  createCanvas(400, 400);


  //x = 150;
  
  
  
  
 
}

function draw() {
   background(255);
  //background(random(255),random(255),random(255),random(255));
  
  let c = color(255, 204, 0); // Define color 'c'
fill(c); // Use color variable 'c' as fill color


  circle(100,200,50,50); //oreja
  
  
  circle(300,200,50,50); //oreja
  ellipse(200,200,200,280); //cabeza
  line(250,100,250,150); //pelo
  line(150,100,150,150); //pelo
  line(150,150,106,150); //pelo
  line(250,150,294,150); //pelo
  line(150,300,250,300); //boca
  
  //line(150,y,250,y); //boca movil
  
  
  circle(200,50,50,50); //moño
  ellipse(200,100,110,80); //pelo
   
  line(200,150,200,250); //nariz
  
  c = color(255); // Update 'c' with grayscale value
fill(c); // Use updated 'c' as fill color
  circle(x,180,25,25); //ojo

  circle(x+100,180,25,25); //ojo
  
  rect(150,300,100,y-300);
  
  line(150,260,150,280);
  line(170,260,170,280);
  line(190,260,190,280);
  line(210,260,210,280);
  line(230,260,230,280);
  line(130,260,130,300);
  line(250,260,250,280);
  line(270,260,270,300);
  
  line(150,310,150,320);
  line(250,310,250,320);
  line(170,310,170,334);
  line(230,310,230,334);
  line(190,310,190,340);
  line(210,310,210,340);
  
 /* x = x + random(1,-1);
  
  if (x>170 || x < 130) {
  x = 150;}*/
  
 x = x + speed;
  if((x > 160) || (x < 140))
  {
    speed = speed * -1;
  }
  y = y + speed2;
  if((y > 310) || (y < 300))
  {
    speed2 = speed2 * -1;
  } 

  //PUPILAS
  
  push();
  translate(x, 180);
  let a = atan2(mouseY - 180, mouseX - x);
  rotate(a);
  fill(0);
  //fill(random(255),random(255),random(255),random(255));
  circle(0,5,10,10);
  pop();
  
 push();
  translate(x + 100, 180);
  let b = atan2(mouseY - 180, mouseX - x);
  rotate(b);
  fill(0);
  //fill(random(255),random(255),random(255),random(255));
  circle(0,5,10,10);
 pop();
  
}