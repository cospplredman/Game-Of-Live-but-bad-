class quadTree{
	this.b = {};
	function eq(f){
		for(let i = 0; i != 4; i++)
			if(!(f.b[i] == this.b[1] || f.b[1].eq(f.b[1])))
				return false;
		return true;
	}
	function ascend(){
		for(let i = 0; i != 4; i++)
			if(this.b[i]) let k = new quadTree(), this.b[i].b[(i + 2) % 3] = this.b[i], this.b[i] = k;
	}
	function set(x,y,v){
		let f = x|y;
		if(f > N)
			while(N < f){
				N <<= 1;
				this.ascend();
			}
		//todo finish set
	}
}

function update(){
	let startTime = new Date().getTime();
	
	alive = nxt;
	tpsAccurate = 1000 / (new Date().getTime() - startTime);
	tpsAccurate = (tpsAccurate > tps && tps != 0 ? tps : tpsAccurate);
}
