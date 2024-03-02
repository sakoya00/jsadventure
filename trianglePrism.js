//Created in the p5.js editor: editor.p5js.org

let grid= 50;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB,360,120,120,120);
}

function draw(){
  //let colors= ["#80c4b7","#edcbd2","#e3856b"];
  //let pick= Math.floor(Math.random()*3);
  stroke(10);
  strokeWeight(2);
  background(0);
  for (i=0; i< this.width+grid; i+=grid){
    for (j=0; j<this.height+grid; j+=grid){
      fill(i,j, 100,80);
      triangle(i,j, i+grid,j-grid, i-grid, j-grid);
    }
  }
}
