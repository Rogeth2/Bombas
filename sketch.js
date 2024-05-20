let cor;
let circuloX;// espaço de "n" circulos que podem ser compilados (array) e dado a direção na horizontal
let circuloY;//espaço de "n" circulos que podem ser compilados (array) e dado a direção na vertical



function setup() {
  
  createCanvas(400, 400);
  background(color(200, 50, 10));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  circuloX = [0 ,0, 0];
  circuloY = [random(height), random(height), random(height)];
 

}

function draw() {
  
    
  fill(cor);
  
  
  console.log(circuloX.length);
  for(let item in circuloX){
    console.log(item);
    circle(circuloX[item], circuloY[item], 30);
     circuloX[item]+= random(0, 1);
  circuloY[item]+= random(-10, 10);
    
    if(circuloX[item] > width){
      circuloX[item] = 0;
      circuloY[item] = random(height);
    }
  
    
  }
  
  
if(mouseIsPressed){
  cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100),)
}
} 