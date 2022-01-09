function view() {
	// Make a Look-In-Direction matrix centered at (5,2.5,0), looking west and aiming 30 degrees down.
	var A1 =  createViewMatrix(5,2.5, 0, 90, -30, 0 )
			   
	// Make a Look-In-Direction matrix centered at (0,-1,-5), angled 170 degrees, with an elevation of 15 degrees, and a roll of 45 degrees.
	var A2 = createViewMatrix(0,-1,-5,170,15,45 )
			   
	// Make a Look-At-Matrix, centered at (-4, 2, -4), aiming at (0,0.5,0.5) and with up-vector (0,1,0).
		var A3 =  createLookAtMatrix([-4,2,-4], [0, 0.5, 0.5], [0,1,0])
			   
	// Make a Look-At-Matrix, centered at (2.57, 0, 0), aiming at (2.8,0,-1) and with up-vector (1,0,0).
		var A4 =  createLookAtMatrix([2.56,0,0], [2.8,0,-1], [1,0,0])



	return [A1, A2, A3, A4];
}

function createViewMatrix(cx,cy,cz, compass, elevation, roll ){
	let Rx = utils.MakeRotateXMatrix(-elevation)
	let Ry = utils.MakeRotateYMatrix(-compass)
	let Rz = utils.MakeRotateZMatrix(-roll)
	let T = utils.MakeTranslateMatrix(-cx,-cy,-cz)

	return utils.multiplyMatrices(Rz, utils.multiplyMatrices(Rx, utils.multiplyMatrices(Ry, T)))

}

function createLookAtMatrix(c, a, u){
	let vz = norm( [ c[0]-a[0], c[1]-a[1], c[2]-a[2] ])
	let vx = norm(utils.crossVector(norm(u), vz))
	let vy = utils.crossVector(vz,vx)

	let mc = [vx[0],vx[1], vx[2], 0.0,
			vy[0], vy[1], vy[2], 0.0, 
			vz[0], vz[1], vz[2], 0.0,
			0.0,   0.0,   0.0,  1.0 ];

	let ci = utils.multiplyMatrixVector(mc, [c[0],c[1],c[2],0.0])

	mc[3] = -ci[0]
	mc[7] = -ci[1]
	mc[11] = -ci[2]

	return mc
}

function norm(v){
	var n = Math.sqrt(Math.pow(v[0],2)+Math.pow(v[1],2)+Math.pow(v[2],2));
	return [v[0]/n, v[1]/n, v[2]/n];  
}