function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(176, 196, 177);

  for(let i = 0; i  <width; i++){
    for(let j = 0; j < height; j++){
      if(floor(random(3)) == 0){
        stroke(255, 10);
      }else{
        stroke(0, 10);
      }

      point(i, j);
    }
  }
}
