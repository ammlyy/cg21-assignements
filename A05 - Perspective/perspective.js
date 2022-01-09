function perspective() {
	// Make perspective projection, FoV-y = 70 deg, a = 16/9, n = 1, f = 101.
	var A1 =  this.createPerspectiveProjection(70, 16/9, 1,101)
			   
	// Make perspective projection, FoV-y = 105 deg, a = 16/9, n = 1, f = 101
	var A2 =  this.createPerspectiveProjection(105, 16/9, 1,101)
			   
	// Make perspective projection, FoV-y = 40 deg, a = 16/9, n = 1, f = 101
	var A3 =   this.createPerspectiveProjection(40, 16/9, 1,101)
			   
	// Make perspective projection, FoV-y = 90 deg, a = 4/3, n = 1, f = 101. Note: since the aspect ratio is not correct, the image should appear to be deformed
	var O1 =  this.createPerspectiveProjection(90, 4/3, 1,101)

	// Make perspective projection, l = -1.2, r = 0, t = 0.3375, b = -0.3375, n = 1, f = 101. Note: due to the asimmetry of this projection, only the left part of the scene should be visible
	var O2 =  this.createPerspectiveProjection2(-1.2, 0, 0.3375, -0.3375, 1, 101)

	return [A1, A2, A3, O1, O2];
}


function createPerspectiveProjection(fov, a, n, f){
	let m =[1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,0,-1,0];
	
	let theta = utils.degToRad(fov)
	let t = 1 / Math.tan(theta/2)

	m[0] = t / a
	m[5] = t
	m[10] = (f + n )/ (n-f)
	m[11] = 2*f*n / (n-f)

	return m;
	
}

function createPerspectiveProjection2(l,r,t,b,n,f){

	let m =[1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,0,-1,0];

	m[0] = 2.0 * n / (r-l);
	m[2] = (r+l) / (r-l);
	m[5] = 2.0 * n / (t-b);
	m[6] = (t+b) / (t-b);
	m[10] = (f + n) / (n - f);
	m[11] = 2.0 * f * n / (n - f);	

	return m
}