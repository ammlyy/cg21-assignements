function world() {
	// Positioned in 0,0,-3. Yaw=90, Pitch and Roll = 0
	
	var t = utils.MakeTranslateMatrix(0,0,-3);
	var ry = utils.MakeRotateYMatrix(90);
	
	var A1 = utils.multiplyMatrices( t, ry);
	
			   
	// Positioned in 0,2,0. Yaw=0, Pitch = 60, Roll = 0, 1/10th of size
	
	var t = utils.MakeTranslateMatrix(0,2,0);
	var rx = utils.MakeRotateXMatrix(60);
	var s = utils.MakeScaleMatrix(1/10);
	
	var A2 = utils.multiplyMatrices(utils.multiplyMatrices(t, rx), s); 
	
	// Positioned in 0,0,0. Yaw=30, Pitch = 0 Roll = 45
	
	
	var ry = utils.MakeRotateYMatrix(30);
	var rz = utils.MakeRotateZMatrix(45);
	
	var A3 = utils.multiplyMatrices(ry, rz);
	
			   
	// Positioned in 2,0,2. Yaw=180, Pitch and Roll = 0, two times wider
	
	var t = utils.MakeTranslateMatrix(2,0,2);
	var ry = utils.MakeRotateYMatrix(180);
	var s = utils.MakeScaleNuMatrix(2,1,1);
	
	var A4 = utils.multiplyMatrices(t, ry);
	A4 = utils.multiplyMatrices(A4, s);

	// Positioned in 1,-1,2.5. Yaw=-30, Pitch = 45 Roll = -15, Scaled with the following factors: 0.8 (x), 0.75 (y), 1.2 (z)
	
	var t = utils.MakeTranslateMatrix(1,-1,2.5);
	var rx = utils.MakeRotateXMatrix(45);
	var ry = utils.MakeRotateYMatrix(-30);
	var rz = utils.MakeRotateZMatrix(-15);
	var s = utils.MakeScaleNuMatrix(0.8, 0.75, 1.2);
	
	var A5 = utils.multiplyMatrices(t, ry);
	A5 = utils.multiplyMatrices(A5, rx);
	A5 = utils.multiplyMatrices(A5, rz);
	A5 = utils.multiplyMatrices(A5, s);

	return [A1, A2, A3, A4, A5]

}

