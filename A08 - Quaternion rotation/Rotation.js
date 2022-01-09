// these global variables are used to contain the current angles of the world
// HERE YOU WILL HAVE TO ADD ONE OR MORE GLOBAL VARIABLES TO CONTAIN THE ORIENTATION
// OF THE OBJECT

// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the degree that how much the object rotates in the given direction.

q = new Quaternion(1, 1, 1, 1)

function updateWorld(rvx, rvy, rvz) {

	var newQ = Quaternion.fromEuler(utils.degToRad(rvz), utils.degToRad(rvx), utils.degToRad(rvy))
	q = newQ.mul(q)
	// compute the rotation matrix
	let rMat = q.toMatrix4()
	return rMat;
}
