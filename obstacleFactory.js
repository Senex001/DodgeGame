//This serves as a factory for objects. Will be espacially handy as soon as more objects are added.

//draws and moves single object, mainly for test purposes
class ObstacleFactory {
	constructor (b) {
		this.obstacles = [];
		this.count = 3;
		for (var i = 0; i <3; i++) {
			this.obstacles.push(new Obstacle1());
		}
		this.ball = b;

	}

	move() {
		let flag = false;
		for (var i = 0; i < this.count; i++) {
			this.obstacles[i].move();
			if (this.obstacles[i].collisionDetection(this.ball)) {
				flag = true;
			}
		}
		return flag;
	}

	draw() {
	for (var i = 0; i < this.count; i++) {
		this.obstacles[i].drawObstacle();
	}
	
	//window.alert('test1');
	}

	addObstacle() {
		this.obstacles.push(new Obstacle1());
		this.count ++;
	}

	reset() {
		this.obstacles = [];
		for (var i = 0; i <3; i++) {
			this.obstacles.push(new Obstacle1());
		}
		this.count = 3;
	}
}
