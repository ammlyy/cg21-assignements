const { PI } = require("three-nebula/build/cjs/constants");

function Anim1(t) {
	// moving car
	var out = utils.MakeTranslateMatrix(t * 0.25, 0.5, 0.0);
	out = utils.multiplyMatrices(out, utils.MakeScaleMatrix(0.25))
	return out;
}

function Anim2(t) {
	// bumping code
	var time_translate = utils.MakeTranslateMatrix(0, 0.25 - Math.abs(0.5*t - 0.25) , 0);
	var uv_centerscale = utils.multiplyMatrices(utils.MakeTranslateMatrix(0.75, 0.5, 0), utils.MakeScaleMatrix(0.25));	
	
	return utils.multiplyMatrices(uv_centerscale, time_translate)
}

function Anim3(t) {
	// rotating fan

	var uv_center = utils.MakeTranslateMatrix(0.5, 0.75, 0);
	var scale = utils.MakeScaleMatrix(0.25); 	

	var translate_center = utils.MakeTranslateMatrix(0.125, 0.125, 0);	
	var rotation = utils.MakeRotateZMatrix(360*t);	
	
	var rotation_around_center = utils.multiplyMatrices(translate_center, utils.multiplyMatrices(rotation, utils.invertMatrix(translate_center)));
	var out = utils.multiplyMatrices(uv_center, utils.multiplyMatrices(rotation_around_center, scale));	
	return out;
}

function Anim4(t) {
	// buring flame
	var frame_dim = 1/12  // there are 12 frames per row
	var start_u = 0.0; 
	var start_v = 0.5 - frame_dim;
	// 72 frames
	let index = Math.floor(t*72)
	let u = start_u + frame_dim * (index%12)  // calculate the column position (from 0 to 11)* frame dimension + initial pos 
	let v = start_v - frame_dim * Math.floor(index / 12) // initial pos - frame_dim * row position ( 0 to 5)
	
	var scale = utils.MakeScaleMatrix(0.25/3);
	var translate = utils.MakeTranslateMatrix(u, v, 0.0)

	return utils.multiplyMatrices(translate, scale);
}