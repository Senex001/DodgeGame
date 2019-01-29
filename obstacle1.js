//first obstacle
//Every Obstacle has : a position, an acceleration, a move function and a draw function

class Obstacle1  {
	constructor(x,y,ax,ay) {
		this.xPos = x;
		this.yPos = y;
		this.xAcc = ax;
		this.yAcc = ay;
		this.size = 20;
		this.xMinReached = false;
		this.yMinReached = false;
	}
move(){
		if (this.xPos > 0 && !this.xMinReached) {
			this.xPos -= this.xAcc;
			if (this.xPos == 0) {
				this.xMinReached = true;
			}
		} else {
			this.xPos += this.xAcc;
			if (this.xPos == width - this.size) {
				this.xMinReached = false;
			}
		}

		//horizontal movement
		if (this.yPos > 0 && !this.yMinReached) {
			this.yPos -= this.yAcc;
			if (this.yPos == 0) {
				this.yMinReached = true;
				}
		} else {
			this.yPos += this.yAcc;
			if (this.yPos == height - this.size) {
				this.yMinReached = false;
			}
		}
	}

drawObstacle() {
		fill(100,150,50);
		noStroke();
		rect(this.xPos, this.yPos, this.size, this.size);
	}	

collisionDetection(ball) {
	if (collideRectCircle(this.xPos, this.yPos, this.size, this.size, ball.getxPos(), ball.getyPos(), ball.getSize())) {
		return true;
	} else {
		return false;
	}
}

reset() {
	this.xPos = 10;
	this.yPos = 10;
	this.xMinReached = false;
	this.yMinReached = false;
}
}






