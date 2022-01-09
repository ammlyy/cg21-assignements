function move() {
	// Translate of +1 on the x axis, and -2 on the y axis
	var T1 =  translate(1, -2, 0);
			   
	// Rotate of 30 degrees on the x axis
	var R1 =  rotateX(30);
 
	// Make the object 2 times bigger
	var S1 =  scale(2,2,2);
			   
	// Make the object 2 times longer on the z axis, and half on the other axis
	var S2 =  scale(0.5, 0.5, 2);

	// Mirror over the y axis
	var S3 =  mirror('y');
			   
	// Flatten over the x axis
	var S4 =  flatten('x')

	// Make a shear along the Y axis, with a factor of 1 along the z axis
	var H1 =  shearY()
	console.log(H1)


	return [T1, R1, S1, S2, S3, S4, H1];
}

function translate(x,y,z){
	var m = Array(4).fill(null).map(() => Array(4).fill(0));
	for (let i = 0; i < 4; i++){
		m[i][i] = 1;
	}
	m[0][3] = x;
	m[1][3] = y;
	m[2][3] = z;

	return m.reduce((a, b) => a.concat(b));
}

function rotateX(angle){
	var rad = Math.PI * (angle / 180.0)
	var m = Array(4).fill(null).map(() => Array(4).fill(0));
	for (let i = 0; i < 4; i++){
		m[i][i] = 1;
	}
	m[1][1] = Math.cos(rad);
	m[1][2] = -Math.sin(rad);
	m[2][1] = Math.sin(rad);
	m[2][2] = Math.cos(rad);

	return  m.reduce((a, b) => a.concat(b));
}

function scale(x,y,z){
	let factor = [x,y,z];
	var m = Array(4).fill(null).map(() => Array(4).fill(0));
	for (let i = 0; i < 4; i++){
		m[i][i] = factor[i];
	}
	m[3][3] = 1

	return  m.reduce((a, b) => a.concat(b));

}

function mirror(axis){
	var m = Array(4).fill(null).map(() => Array(4).fill(0));
	for (let i = 0; i < 4; i++){
		m[i][i] = 1;
	}
	switch(axis){
		case('y'):
			m[0][0] = -1;
			m[2][2] = -1;
	
	}

	return  m.reduce((a, b) => a.concat(b));

}

function flatten(axis){
	var m = Array(4).fill(null).map(() => Array(4).fill(0));
	for (let i = 0; i < 4; i++){
		m[i][i] = 1;
	}
	switch(axis){
		case('x'):
			m[0][0] = 0.001;
	}

	return  m.reduce((a, b) => a.concat(b));

}

function shearY(){
	var m = Array(4).fill(null).map(() => Array(4).fill(0));
	for (let i = 0; i < 4; i++){
		m[i][i] = 1;
	}
	m[0][1] = 0.5
	m[2][1] = 1




	return  m.reduce((a, b) => a.concat(b));

}