//Learning exercise created in the p5.js editor: editor.p5js.org

//Declaring colors
let c1;
let c2;
let c3;

//Declaring circle radius value
let r=190;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  c1=color("#ff5607");
  c2=color("#ff9800");
  c3=color("#ffec19")
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200,200);
  createCircle(0,90,c1,c2);
  createCircle(90,180,c2,c3);
  createCircle(180,270,c3,c2);
  createCircle(270,360,c2,c1);
}

//Creating circle with gradient coloration
function createCircle(min,max,c1,c2){
 for (i=min; i<=max;i++){
    let amt=map(i,min,max,0,1);
    let c3=lerpColor(c1,c2,amt);
  
    stroke(c3);
    strokeWeight(.9);
    strokeCap(SQUARE);
    let x=r*cos(i);
    let y=r*sin(i);
    line(0,0,x,y);
  } 
}
