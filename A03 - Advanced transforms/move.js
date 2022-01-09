function move() {
	// Rotate 60 degrees around an arbitrary axis passing through (0,1,-1). The x-axis can be aligned to the arbitrary axis after a rotation of 45 degrees around the z-axis, and then 15 degrees around the y-axis.
		let t1 = utils.MakeTranslateMatrix(0,1,-1)
		let ry = utils.MakeRotateYMatrix(15)
		let rz = utils.MakeRotateZMatrix(45)
		let rx = utils.MakeRotateXMatrix(60)

		var R1 = utils.multiplyMatrices(t1, ry);
		R1= utils.multiplyMatrices(R1, rz)
		R1= utils.multiplyMatrices(R1, rx)
		R1= utils.multiplyMatrices(R1, utils.MakeRotateZMatrix(-45))
		R1= utils.multiplyMatrices(R1, utils.MakeRotateYMatrix(-15))
		R1= utils.multiplyMatrices(R1, utils.invertMatrix(t1))


	// Half the size of the object along a line that bisects the positive x and y axes on the xy-plane. 
	var S1 = utils.multiplyMatrices(utils.MakeRotateZMatrix(45), utils.MakeScaleNuMatrix(0.5, 1, 1))
	S1 = utils.multiplyMatrices(S1, utils.MakeRotateZMatrix(-45))
	

			   
	// Mirror the starship along a plane passing through (1,1,1), and obtained rotating 15 degree around the x axis the xz plane
	var S2 =  utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(1,1,1),
		utils.MakeRotateXMatrix(15)),
		utils.MakeScaleNuMatrix(1, -1, 1)),
		utils.MakeRotateXMatrix(-15)),
		utils.MakeTranslateMatrix(-1,-1,-1));
	
			   
	// Apply the inverse of the following sequence of transforms: rotation of 30 degree around the Y axis then Translation of (0, 0, 5), and finally a uniform scaling of a factor of 3.
	var I1 =  utils.invertMatrix(
		utils.multiplyMatrices(utils.multiplyMatrices(	
			utils.MakeScaleMatrix(3),
			utils.MakeTranslateMatrix(0,0,5)),
			utils.MakeRotateYMatrix(30))
	)

	return [R1, S1, S2, I1];
}


