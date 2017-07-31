function setup () {
	createCanvas(1366,768);
	frameRate(1000);
	this.life = new Life();
}

function draw(){
	background(25);
	this.life.update();
	this.life.draw();
}