// NOTE
// The pixels have been taken to be of a size of 5px
// It is advised to use this everywhere and to keep in mind that there are pixels only at (5m,5n) where m,n = {0,1,2,....}			
function Life () {
	// 270 is 1366/5 and 150 is 768/5
	// IMPORTANT EFFING NOTE
	// Always use this below method for Mulit-Dimensional Arrays. Inbuilt .fill() method is bullshit and is causing wierd errors.
	this.pixels = new Array(270+5);
	for(var i=0;i<this.pixels.length;i++){
		this.pixels[i] = new Array(150+5); 
		for(var j=0;j<this.pixels[i].length;j++)
			this.pixels[i][j] = new Pixel(0,0,255,255,255);
	}
	// Populating random pixles upto 7000. Pixels may overlap. Ignoring such cases.
	for(var i=0;i<7000;i++){
		var x = floor(random(0,this.pixels.length));
		var y = floor(random(0,this.pixels[0].length));
		this.pixels[x][y].update(1,random(0,255),random(0,255),random(0,255));
	}
}

Life.prototype.update = function() {
	for(let i=0;i<this.pixels.length;i++){
		for(let j=0;j<this.pixels[i].length;j++){
			this.pixels[i][j].prev = this.pixels[i][j].curr;
		}
	}
	for (var i = 0; i < this.pixels.length; i++) {
		for (var j = 0; j < this.pixels[i].length; j++) {
			var c = this.calc(i,j);
			if(this.pixels[i][j].prev === 1){
				if(c < 2 || c > 3) 
					this.pixels[i][j].curr = 0;
			}	
			else{
				if(c === 3)
					this.pixels[i][j].update(1,random(0,255),random(0,255),random(0,255));
			}
		};	
	};
};

Life.prototype.calc = function(x,y) {
	var count = 0;
	for (let i = x-1; i <= x+1; i++) {
		for (let j = y-1; j <= y+1; j++) {
			//i = i % this.pixels.length;		// Modify here inorder to make the scene sizeless i.e., if index if [-1], then last element is taken
			//j = j % this.pixles[0].length;   // and if index is [length] then [0] is taken using mod(%) function to get the remainder
			if(i < 0 || i >= this.pixels.length || j < 0 || j >= this.pixels[x].length){
				//count++; 					// Assuming all the pixels outside bounds are defaultly alive
				continue;					// OR assuming all the pixels outside bounds are defaultly dead
			}
			else if(this.pixels[i][j].prev == 1 && (i != x || j != y))
				count++;
		};
	};
	return count;
};

Life.prototype.draw = function() {
	for(let i = 0;i < 270; i++)
		for (let j = 0; j < 150; j++) 
			if(this.pixels[i][j].curr === 1)
				this.pixels[i][j].draw(i,j);
};