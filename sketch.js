let grainLayer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
  fill(74, 87, 89);
  grainLayer = createGraphics(width, height);

  for(let i = 0; i  < width; i++){
    for(let j = 0; j < height; j++){
      if(floor(random(3)) == 0){
        grainLayer.stroke(255, 10);
      }else{
        grainLayer.stroke(0, 10);
      }

      grainLayer.point(i, j);
    }
  }
}

function draw() {
  background(176, 196, 177);

  stroke(0);
  push();
  translate(width/2, height/2);
  rotate(frameCount / 360 * TWO_PI);
  line(-width/2, 0, width/2, 0);

  pop();
  
  circle(width/2, height/2, width/2);


  image(grainLayer, 0, 0);
}
