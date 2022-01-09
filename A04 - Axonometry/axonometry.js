function axonometry() {
	// Make an isometric view, w = 50, a = 16/9, n = 1, f = 101.
	//rotate 45 on y, 35.26  on x and then parallel projection to obtain isometric view
	var A1 =  utils.multiplyMatrices(utils.multiplyMatrices(createParallelProjection(50, 16/9,1,101), utils.MakeRotateXMatrix(35.26)), utils.MakeRotateYMatrix(45))
			   
	// Make a dimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated 20 around the x-axis
	//DIMETRIC: different units for x and z-y axis.
	//rotate +- 45 degrees around y-axis, then arbitrary rotate x and then parallel
	var A2 =  utils.multiplyMatrices(utils.multiplyMatrices(createParallelProjection(50,16/9,1,101), utils.MakeRotateXMatrix(20)), utils.MakeRotateYMatrix(45))
			   
	// Make a trimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated -30 around the x-axis and 30 around the y-axis
	var A3 = utils.multiplyMatrices(utils.multiplyMatrices(createParallelProjection(50,16/9,1,101), utils.MakeRotateXMatrix(-30)), utils.MakeRotateYMatrix(30));

			   
	// Make an cavalier projection view, w = 50, a = 16/9, n = 1, f = 101, at 45 degrees
	var O1 = utils.multiplyMatrices(createParallelProjection(50,16/9,1,101),
	utils.MakeShearZMatrix(-Math.cos(utils.degToRad(45)), -Math.sin(utils.degToRad(45)))
	);


	// Make a cabinet projection view, w = 50, a = 16/9, n = 1, f = 101, at 60 degrees
	var O2 = utils.multiplyMatrices(createParallelProjection(50,16/9,1,101),
	utils.MakeShearZMatrix(0.5*-Math.cos(utils.degToRad(60)), 0.5*-Math.sin(utils.degToRad(60)))
	);

	return [A1, A2, A3, O1, O2];
}

function createParallelProjection(w,a,n,f){
	var m = [ 1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,0,0,1 ];

	m[0] = 1.0 / w;
	m[5] = a / w;
	m[10] = 2.0 / (n - f);
	m[11] = (n + f) / (n - f);

	return m
}