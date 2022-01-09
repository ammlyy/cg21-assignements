function drawSceneTree(S) {
	var mats = [];
	//init the world matrices to identity
	for(i = 0; i < S.length; i++){
		mats[i] = utils.identityMatrix();
	}

	//calculate the local matrices and propagate the transformation to all the child elements
	for(let i = 0; i < S.length; i++) {
		let transformed = utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
			 utils.MakeTranslateMatrix(S[i][0], S[i][1], S[i][2]),
			 utils.MakeRotateZMatrix(S[i][5])),
			 utils.MakeRotateXMatrix(S[i][3])),
			 utils.MakeRotateYMatrix(S[i][4]));

		mats[i] = utils.multiplyMatrices(mats[i], transformed);

		// if it has a first child
		if (S[i][6] != -1){
			// cycle on all the childs up to the last child index (whos position is at index 7)
			for (let j = S[i][6]; j <= S[i][7] ; j++){
				mats[j] = utils.multiplyMatrices(mats[j], mats[i]);
			}
		}
	}

	//draw scene
	for(i = 0; i < S.length; i++){
		draw(i, mats[i]);
	}

}