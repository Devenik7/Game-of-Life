function Pixel(p,c,r,g,b){
	this.prev = p;
	this.curr = c;
	this.r = r;
	this.g = g;
	this.b = b;
}

Pixel.prototype.update = function(c,r,g,b) {
	this.curr = c;
	this.r = r;
	this.g = g;
	this.b = b;
};

Pixel.prototype.draw = function(i,j) {
	if(this.prev === 0) 
		fill(this.r,this.g,this.b);
	else 									// Changing pixels have their color as white only. Others have random assigned color
		fill(255);
	rect(i*5,j*5,5,5);						// The pixels have been taken to be of a size of 5px
};