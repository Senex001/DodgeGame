//variables needed :
var canvas;
var span;
var timer;
var spawnArea;
let ball;
let factory;
let pauseVal;
let sek = 0;
let min = 0;
let hour = 0;
let sekDisplay = '00';
let minDisplay = '00';
let hourDisplay ='00';

//set up webpage for the first time:
//creates canvas, span and button
function setup() {
  	canvas = createCanvas(windowWidth,windowHeight-50);
  	span = createSpan('Placeholder');
    bottom = createDiv();
    timer = createSpan(hourDisplay + ':' + minDisplay + ':' + sekDisplay);
  	span.position(50,100);
  	span.hide();
    span.style('font-size','24px');
    timer.style('font-size','24px');
    spawnArea = createSpan('Spawn Area');
    spawnArea.style('font-size','24px');
    spawnArea.style('font-family','Arial');
    spawnArea.position(width/2-60, 20);
    spawnArea.hide();
  	
  	ball = new Ball();
  	factory = new ObstacleFactory(ball);
    setInterval(gameTimer,1000);
    canvasManipulation();
}

//detect if screen was touched and make it fullscreen
function touchStarted(){
	fullscreenONOFF();
}

//turns fullscreen on or off
function fullscreenONOFF() {
	var fs = fullscreen();
    fullscreen(!fs);
}

//calls canvasManipulation everytime the windowsize changes
function windowResized() {
  	canvasManipulation();
}

//hide canvas or span according to 
function canvasManipulation() {
	if(windowWidth<windowHeight){
    loop();
		span.hide();
    timer.show();
    spawnArea.show();
		resizeCanvas(windowWidth, windowHeight-50);
	} else {
		resizeCanvas(0,0);
    noLoop();
    timer.hide();
    spawnArea.hide();
    if (str(deviceOrientation) == 'undefined') {
      span.html('Please visit our website from your mobile device to be able to play the game.');
    } else {
      span.html('Please use your device in Portrait-mode.');
      //window.alert(deviceOrientation);
    }
		span.show();
	}
}



//called 
function draw() {
	background(150);
  fill('red');
  rect(0,0,width,75);

	ball.moveBall();
  var hit = factory.move();
	if (hit) {
		loose();
	} else {
    factory.draw();
  }
}

function gameTimer() {
  sek = (sek + 1) % 60;
  if (sek == 0) {
    min = (min + 1) % 60;
    if (min == 0) {
      hour ++;
    }
  }
  if (sek < 10) {
    sekDisplay = '0' + str(sek);
  } else {
    sekDisplay = str(sek);
  }
  if (min < 10) {
    minDisplay = '0' + str(min);
  } else {
    minDisplay = str(min);
  }
  if (hour < 10) {
    hourDisplay = '0' + str(hour);
  } else {
    hourDisplay = str(hour);
  }
  timer.html(hourDisplay + ':' + minDisplay + ':' + sekDisplay);
  if (sek % 5 == 0) {
    factory.addObstacle();
  }
}

function loose() {
	reset();
  window.alert('You have hit the obstacle');	
}

function reset() {
	ball.reset();
	factory.reset();
  sek = 0;
  min = 0;
  hour = 0;
  timer.html('00:00:00');
}
