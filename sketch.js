//variables needed :
var canvas;
var span;
let ball;
let factory;

/*
//define font used eventually :
let font,
  fontsize = 40;

//preload files etc needed:
function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('assets/Montserrat-Black.otf');
}
*/

//set up webpage for the first time:
//creates canvas, span and button
function setup() {
  	canvas = createCanvas(0,0);
  	span = createSpan('Placeholder');
  	span.position(50,100);
  	span.hide();
  	
  	ball = new Ball();
  	factory = new ObstacleFactory(ball);


	canvasManipulation();

  	/*textFont(font);
  	textSize(fontsize);
  	textAlign(CENTER, CENTER);*/
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
		span.hide();
		resizeCanvas(windowWidth, windowHeight);
	} else {
		resizeCanvas(0,0);
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
	ball.moveBall();
	var hit = factory.dmSingleObject();
	if (hit) {
		loose();
	}
}


function loose() {
	window.alert('You have hit the obstacle')
	reset();
}

function reset() {
	ball.reset();
	factory.reset();
}
