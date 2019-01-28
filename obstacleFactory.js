//This serves as a factory for objects. Will be espacially handy as soon as more objects are added.


//draws and moves single object, mainly for test purposes
class ObstacleFactory {
	constructor (b) {
		this.obstacle1 = new Obstacle1();
		this.ball = b;
	}

dmSingleObject() {
	this.obstacle1.move();
	this.obstacle1.drawObstacle();
	return this.obstacle1.collisionDetection(this.ball);
	//window.alert('test1');
}
reset() {
	this.obstacle1.reset();
}
}