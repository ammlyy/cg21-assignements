// Returns the transform matrix obtained interpolating the given positions and angles
function InterpMat(
	tx1, ty1, tz1, rx1, ry1, rz1,
	tx2, ty2, tz2, rx2, ry2, rz2,
	a) {
// tx1, ty1, tz1	-> Initial position
// rx1, ry1, rz1	-> Initial rotation (in Euler angles)
// tx2, ty2, tz2	-> Final position
// rx2, ry2, rz2	-> Final rotation (in Euler angles)
// a (in 0..1 range)	-> Interpolation coefficient
//
// return the interpolated transform matrix with the given position and rotation

out = utils.identityMatrix();
var tMat = utils.MakeTranslateMatrix(a*tx2 + (1-a)*tx1, a*ty2 + (1-a)*ty1, a*tz2 +  (1-a)*tz1 );


//slerp interpolation for rotation
var rad = Math.PI/180;

var rot1 = Quaternion.fromEuler(rz1*rad, rx1*rad, ry1*rad);
var rot2 = Quaternion.fromEuler(rz2*rad, rx2*rad, ry2*rad);

var interpolation = rot1.slerp(rot2)(a);

var rMat = interpolation.toMatrix4();


out = utils.multiplyMatrices(tMat, rMat);
return out;			   
	}