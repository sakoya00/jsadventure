//Created in the p5.js editor: editor.p5js.org

let grid= 50;
let n=160;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB,360,100,100,255);
}

function draw(){
  stroke(10);
  strokeWeight(2);
  background(0);
  for (i=0; i<width+grid; i+=grid){
    for (j=0; j<height+grid; j+=grid){
      fill(i,j,100,n);
      triangle(i,j, i+grid,j-grid, i-grid, j-grid);
    }
  }
}

//Use arrow keys to adjust transparency/alpha of triangles
//Press up for more transparency and down for more opacity
function keyPressed(){
  if(keyCode === UP_ARROW){
    n= n-5;
  } else if (keyCode === DOWN_ARROW){
    n= n+5;
  }
  print("Transparency: "+ n);
}
