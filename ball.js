class Ball {

constructor() {
	this.xPos = windowHeight/2;
	this.yPos = windowWidth/2;
	this.xAcc = 0;
	this.yAcc = 0;
	this.size = 25;
}	

//moves ball around canvas if the device is moved
moveBall() {
	//up and down acc
	//adjusted map values to -1 -> 0,5 to be able to hold device in natural hand position
	this.yAcc = map(rotationX, -90,90,-1,0.5); //x and y are messed up for the rotations
	//left and right acc
	this.xAcc = map(rotationY,-90,90,-1,1);

	if (str(deviceOrientation) == 'portrait') {
 	for (var i = 0; i <30; i ++) {
		if (this.xAcc <0 && this.xPos > ceil(this.size/2)) {
			this.xPos = this.xPos + this.xAcc;
		} else if (this.xAcc > 0 && this.xPos < windowWidth-ceil(this.size/2)){ 
			this.xPos = this.xPos + this.xAcc;
		}	

		if (this.yAcc <0 && this.yPos > ceil(this.size/2)) {
			this.yPos = this.yPos + this.yAcc;
		} else if (this.yAcc > 0 && this.yPos < windowHeight-ceil(this.size/2)){ 
			this.yPos = this.yPos + 2*this.yAcc;
		}
	}
		fill(50,50,100);
		noStroke();
		ellipse(this.xPos, this.yPos, this.size, this.size);
	}
	}

getxPos() {
	return this.xPos;
}
getyPos() {
	return this.yPos;
}
getSize() {
	return this.size;
}

reset() {
	this.xPos = windowHeight/2;
	this.yPos = windowWidth/2;
}
}