function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(220);

  for(let i = 0; i  <width; i++){
    for(let j = 0; j < height; j++){
      if(floor(random(2)) == 0){
        stroke(255, 10);
      }else{
        stroke(0, 10);
      }

      point(i, j);
    }
  }
}
