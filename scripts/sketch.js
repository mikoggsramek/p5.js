var rectangle;

var ball;
var ball2;

var ballArray = [];
let maxBalls = 10;

var noiseO = [];
const maxNoise = 2;

var voro;

var bok;

var displayIndex;
let button;
let voronoiSlider;

let bounceFX;
let streetImage;


function setup() {
  bounceFX = loadSound('assets/bounce.wav');
  /* background url: Photo by Patrick Tomasso on Unsplash */
  //streetImage = loadImage('../assets/patrick-tomasso-D6Bk1A3-gMA-unsplash.jpg');
  // Photo by Gianni Scognamiglio on Unsplash
  streetImage = loadImage('../assets/gianni-scognamiglio-L4sYuLbtVFs-unsplash.jpg');
  //Canvas Information
  var canvas = createCanvas(windowWidth, 250);
  //set it to be under a dom element with the id of 'sketch'
  canvas.parent('sketch');
  displayIndex = 0;
  
  //In canvas "imagery"
  rectangle = new Rectangle(-5, 125);
  ball = new Ball(10, 10, bounceFX);
  
  voro = new Voronoi();
  
  //for (let i = 0; i < maxNoise; i++){
  noiseO.push(new noiseObject(0, 0, color(0,0,0), 0.01));
  noiseO.push(new noiseObject(1000, 1000, color(255,255,255, 150), 0.01));
  noiseO.push(new noiseObject(10000, 10000, color(120,120,120, 40), 0.01));
  //}
  
  
  for(let index = 0; index < maxBalls; index++){
    ballArray[index] = new Ball(0, 0, undefined);
    ballArray[index].randomize();
  }

  bok = new Bokeh(50);
  bok.create();
  
  //dom input creation

  button = createButton('reset');
  button.mousePressed(resetDisplay)
  button.addClass('button');
  button.addClass('buttonReset');
  button.parent('reset');

  button = createButton('rectangle');
  button.mousePressed(showRectangle)
  button.addClass('button');
  button.parent('rectangle');
  
  button = createButton('1 ball');
  button.mousePressed(show1Ball)
  button.addClass('button');
  button.parent('ball');
  
  button = createButton('2 balls');
  button.mousePressed(show2Balls)
  button.addClass('button');
  button.parent('ball');
  
  button = createButton('10 balls');
  button.mousePressed(show10Balls)
  button.addClass('button');
  button.parent('ball');

  button = createButton('50 balls');
  button.mousePressed(show50Balls)
  button.addClass('button');
  button.parent('ball');
  

  button = createButton('noise');
  button.mousePressed(showNoise)
  button.addClass('button');
  button.parent('noise');

  button = createButton('voronoi');
  button.mousePressed(drawVoronoi);
  button.addClass('button');
  button.parent('voronoi');
  
  voronoiSlider = createSlider(1, 15, 6);
  voronoiSlider.addClass('button');
  voronoiSlider.parent('voronoi');

  button = createButton('bokeh?');
  button.mousePressed(showBokeh );
  button.addClass('button');
  button.parent('bokeh');

  background(255);
}

function windowResized() {
 resizeCanvas(windowWidth, 250);
  resetDisplay();
}

function draw() {
  //background(10,0,10);
  fill(220);
  stroke(220);
  if(displayIndex == 1){
    background(255);
    rectangle.update();
  }else if(displayIndex == 2){
    background(255);
    for(let index = 0; index < maxBalls; index++){
      ballArray[index].update();
    }
  }else if (displayIndex == 3) {
    background(255);
    ball.update();
  }else if(displayIndex == 5){
    background(255);
    for(let i = 0; i < noiseO.length; i++){
      noiseO[i].update();
    }
  }else if(displayIndex == 7){
    background(255);
    //3648 × 5472
    image(streetImage,-1000,-1200, 3648/1, 5472/2);
    bok.update();
  }
}

function mousePressed() {
  if (displayIndex == 6 && mouseY < height) {
    voro.addPoint(mouseX, mouseY);
  }
}

function showRectangle(){
  displayIndex = 1;
}
function show1Ball(){
  displayIndex = 3;
}
function show2Balls(){
  displayIndex = 2;
  maxBalls = 2;
  for (let index = 0; index < maxBalls; index++) {
    ballArray[index] = new Ball(0, 0, undefined);
    ballArray[index].randomize();
  }
}
function show10Balls(){
  displayIndex = 2;
  maxBalls = 10;
  for (let index = 0; index < maxBalls; index++) {
    ballArray[index] = new Ball(0, 0, undefined);
    ballArray[index].randomize();
  }
}
function show50Balls(){
  displayIndex = 2;
  maxBalls = 50;
  for (let index = 0; index < maxBalls; index++) {
    ballArray[index] = new Ball(0, 0, undefined);
    ballArray[index].randomize();
  }
}
function showNoise() {
  displayIndex = 5;
}

function drawVoronoi(){
  displayIndex = 6;
  voro.generate(voronoiSlider.value());
  voro.draw();
}
function showBokeh(){
  displayIndex = 7;
}

function resetDisplay(){
  rectangle = new Rectangle(-30, random(250));
  ball.randomize();
  ball2.randomize();
  for(let index = 0; index < maxBalls; index++){
    ballArray[index].randomize();
  }
}
