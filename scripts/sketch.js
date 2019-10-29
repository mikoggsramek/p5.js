var rectangle;

var ball;
var ball2;

var ballArray = [];
const maxBalls = 10;

var noiseO = [];
const maxNoise = 2;

var voro;

var displayIndex;
let button;
let voronoiSlider;

let bounceFX;

function setup() {
  bounceFX = loadSound('assets/bounce.wav');

  //Canvas Information
  var canvas = createCanvas(windowWidth, 250);
  //set it to be under a dom element with the id of 'sketch'
  canvas.parent('sketch');
  displayIndex = 0;
  
  //In canvas "imagery"
  rectangle = new Rectangle(-5, 125);
  ball = new Ball(10, 10, bounceFX);
  ball2 = new Ball(windowWidth - 40, 230, bounceFX);
  
  voro = new Voronoi();
  
  //for (let i = 0; i < maxNoise; i++){
    // noiseO.push( new noiseObject(0, 0, color(random(100,255), random(100,255), random(100,255), 80), 0.01));
  noiseO.push(new noiseObject(0, 0, color(0,0,0), 0.01));
  //}
  noiseO.push(new noiseObject(1000, 1000, color(255,255,255, 150), 0.01));
  noiseO.push(new noiseObject(10000, 10000, color(0,0,0, 40), 0.01));
  
  
  for(let index = 0; index < maxBalls; index++){
    ballArray[index] = new Ball(0, 0, undefined);
    ballArray[index].randomize();
  }
  
  //dom input creation
  button = createButton('rectangle');
  button.mousePressed(showRectangle)
  button.addClass('button');
  button.parent('buttons');
  
  button = createButton('ball');
  button.mousePressed(showBall1)
  button.addClass('button');
  button.parent('buttons');
  
  button = createButton('ball 2');
  button.mousePressed(showBall2)
  button.addClass('button');
  button.parent('buttons');
  
  button = createButton('multiple balls');
  button.mousePressed(showBalls)
  button.addClass('button');
  button.parent('buttons');
  
  button = createButton('reset');
  button.mousePressed(resetDisplay)
  button.addClass('button');
  button.addClass('buttonReset');
  button.parent('buttons');

  button = createButton('noise');
  button.mousePressed(showNoise)
  button.addClass('button');
  button.parent('buttons');

  button = createButton('voronoi');
  button.mousePressed(drawVoronoi);
  button.addClass('button');
  button.parent('buttons');
  
  voronoiSlider = createSlider(1, 15, 6);
  voronoiSlider.addClass('button');
  voronoiSlider.parent('buttons');

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
   ball.update();
  }
  else if(displayIndex == 3){
    background(255);
   ball.update();
    ball2.update();
  }else if(displayIndex == 4){
    background(255);
    for(let index = 0; index < maxBalls; index++){
      ballArray[index].update();
    }
  }else if(displayIndex == 5){
    background(255);
    for(let i = 0; i < noiseO.length; i++){
      noiseO[i].update();
    }
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
function showBall1(){
  displayIndex = 2;
}
function showBall2(){
  displayIndex = 3;
}
function showBalls(){
  displayIndex = 4;
}
function showNoise() {
  displayIndex = 5;
}

function drawVoronoi(){
  displayIndex = 6;
  voro.generate(voronoiSlider.value());
  voro.draw();
}

function resetDisplay(){
  rectangle = new Rectangle(random(windowWidth), random(250));
  ball.randomize();
  ball2.randomize();
  for(let index = 0; index < maxBalls; index++){
    ballArray[index].randomize();
  }
}
