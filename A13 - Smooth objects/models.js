function buildGeometry() {
	// Draws a pyramid --- Already done, just for inspiration
	var vert1 = [[0.0, 1.0, 0.0, 0.0, 0.4472, -0.8944], [1.0, -1.0, -1.0, 0.0, 0.4472, -0.8944], [-1.0, -1.0, -1.0, 0.0, 0.4472, -0.8944],
	[0.0, 1.0, 0.0, 0.8944, 0.4472, 0.0], [1.0, -1.0, 1.0, 0.8944, 0.4472, 0.0], [1.0, -1.0, -1.0, 0.8944, 0.4472, 0.0],
	[0.0, 1.0, 0.0, 0.0, 0.4472, 0.8944], [-1.0, -1.0, 1.0, 0.0, 0.4472, 0.8944], [1.0, -1.0, 1.0, 0.0, 0.4472, 0.8944],
	[0.0, 1.0, 0.0, -0.8944, 0.4472, 0.0], [-1.0, -1.0, -1.0, -0.8944, 0.4472, 0.0], [-1.0, -1.0, 1.0, -0.8944, 0.4472, 0.0],
	[-1.0, -1.0, -1.0, 0.0, -1.0, 0.0], [1.0, -1.0, -1.0, 0.0, -1.0, 0.0], [1.0, -1.0, 1.0, 0.0, -1.0, 0.0], [-1.0, -1.0, 1.0, 0.0, -1.0, 0.0],
	];
	var ind1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 12, 14, 15];
	var color1 = [0.0, 0.0, 1.0];
	addMesh(vert1, ind1, color1);

	// Draws a cube -- To do for the assignment.
	var vert2 = drawCube();
	var ind2 = [0, 1, 3, 3, 2, 0, 4, 5, 7, 7, 6, 4, 8, 9, 11, 11, 10, 8, 12, 13, 15, 15, 14, 12, 16, 17, 19, 19, 18, 16, 20, 21, 23, 23, 22, 20]
	var color2 = [0.0, 1.0, 1.0];
	addMesh(vert2, ind2, color2);

	// Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3 -- To do for the assignment.
	var plane = createPlane()
	var vert3 = plane.vertices
	var ind3 = plane.indices
	var color3 = [0.0, 1.0, 1.0];
	addMesh(vert3, ind3, color3);

	// Draws a Cylinder --- To do for the assignment
	var cylinder = createCylinder(2, 1)
	var vert4 = cylinder.vertices
	var ind4 = cylinder.indices
	var color4 = [1.0, 1.0, 0.0];
	addMesh(vert4, ind4, color4);

	// Draws a Sphere --- To do for the assignment.
	var sphere = createSphere()
	var vert5 = sphere.vertices
	var ind5 = sphere.indices
	var color5 = [1.0, 0.0, 0.0];
	addMesh(vert5, ind5, color5);
}


function drawCube() {

	return [
		[-1, -1, 1.0, 0.0, 0.0, 1.0], [1., -1., 1., 0.0, 0.0, 1.0], [-1, 1, 1, 0.0, 0.0, 1.0], [1, 1, 1.0, 0.0, 0.0, 1.0], // front face
		[1.0, -1.0, -1.0, 0.0, 0.0, -1.0], [-1, -1, -1.0, 0.0, 0.0, -1.0], [1, 1, -1.0, 0.0, 0.0, -1.0], [-1, 1, -1, 0.0, 0.0, -1.0],  // back face
		[-1, 1, 1, 0.0, 1.0, 0.0], [1, 1, 1.0, 0.0, 1.0, 0.0], [-1, 1, -1, 0.0, 1.0, 0.0], [1, 1, -1.0, 0.0, 1.0, 0.0], // top face
		[-1, -1, -1, -1.0, 0.0, 0.0], [-1, -1, 1.0, -1.0, 0.0, 0.0], [-1, 1, -1, -1.0, 0.0, 0.0], [-1, 1, 1, -1.0, 0.0, 0.0], // left face
		[1., -1., 1., 1.0, 0.0, 0.0], [1., -1., -1.0, 1.0, 0.0, 0.0], [1., 1., 1., 1.0, 0.0, 0.0], [1., 1., -1., 1.0, 0.0, 0.0], // right
		[1., -1., 1., 0.0, -1.0, 0.0], [-1, -1, 1.0, 0.0, -1.0, 0.0], [1.0, -1.0, -1.0, 0.0, -1.0, 0.0], [-1, -1, -1.0, 0.0, -1.0, 0.0]]

}

function createPlane() {
	const indices = [];
	const vertices = [];
	const subdivisions = 20;

	const size = 6; // from -3 to 3
	const halfSize = size / 2; // 3
	const segSize = size / subdivisions; // distance between each grid line

	for (let i = 0; i <= subdivisions; i++) {
		const x = i * segSize - halfSize;

		for (let j = 0; j <= subdivisions; j++) {
			const z = j * segSize - halfSize;
			let y = Math.sin(x) * Math.cos(z);
			let normals = computeNormals(x, y, z)

			vertices.push([x, y, z, normals[0], normals[1], normals[2]]);
		}
	}

	for (let i = 0; i < subdivisions; i++) {
		for (let j = 0; j < subdivisions; j++) {
			const a = i * (subdivisions + 1) + j;
			const d = i * (subdivisions + 1) + (j + 1);

			const b = (i + 1) * (subdivisions + 1) + j;
			const c = (i + 1) * (subdivisions + 1) + (j + 1);

			indices.push(a, d, c);
			indices.push(a, c, b);
		}
	}

	return { vertices: vertices, indices: indices }

}


function computeNormals(x, y, z) {
	let nx = -Math.cos(x) * Math.cos(z)
	let ny = 1
	let nz = Math.sin(x) * Math.sin(z)

	let n = Math.sqrt(Math.pow(nx, 2) + Math.pow(ny, 2) + Math.pow(nz, 2))
	return [nx / n, ny / n, nz / n]
}

function createCylinder(h, radius) {
	let subdivisions = 50;
	let step = (Math.PI * 2) / subdivisions
	let circle = [];
	let vertices = [];
	let indices = []
	// create circle on xy plane
	for (let i = 0; i <= subdivisions; i++) {
		let angle = i * step;

		circle.push(Math.cos(angle), 0, Math.sin(angle))
	}

	for (i = 0; i < 2; i++) { // top and bottom
		let height = h * (i - 0.5)
		let ny = i * 2. - 1. //normal z will be -1 and 1

		vertices.push([0, height, 0, 0, ny, 0])

		for (let j = 0; j <= subdivisions; j++) {
			let nx = circle[3 * j]
			let nz = circle[3 * j + 2]
			vertices.push([nx * radius, height, nz * radius, 0, ny, 0])
		}
	}

	let sideIdx = vertices.length

	for (i = 0; i < 2; i++) { // side
		let height = h * (i - 0.5)
		for (let j = 0; j <= subdivisions; j++) {
			let nx = circle[3 * j]
			let ny = circle[3 * j + 1]
			let nz = circle[3 * j + 2]
			let norm = Math.sqrt(Math.pow(nx, 2) + Math.pow(ny, 2) + Math.pow(nz, 2))
			vertices.push([nx * radius, height, nz * radius, nx / norm, ny / norm, nz / norm])
		}
	}

	var bottomIdx = 0;
	var topIdx = (subdivisions + 2)

	//indices for base
	for (let i = 0; i <= subdivisions; i++) {
		if (i < subdivisions) {
			indices.push(bottomIdx, i + 1, i + 2)
		}
		else {
			indices.push(0, subdivisions, 1)
		}
	}

	for (let i = topIdx + 1; i <= topIdx + subdivisions; i++) { // top indices
		if (i < topIdx + subdivisions - 1) {
			indices.push(topIdx, i + 1, i)
		}
		else {
			indices.push(i, topIdx, i + 1)
		}
	}

	//side indices
	for (let i = sideIdx, j = sideIdx + subdivisions + 1; i <= sideIdx + subdivisions; i++, j++) {
		indices.push(j, i + 1, i)
		indices.push(i, j - 1, j)
	}

	return { indices: indices, vertices: vertices }
}

function createSphere() {
	var indices = [];
	var vertices = []
	const radius = 3.0
	const subdivisions = 40
	let phistep = 2 * Math.PI / subdivisions
	let thetastep = 2 * Math.PI / subdivisions

	for (i = 0; i <= subdivisions; i++) {
		let theta = Math.PI / 2 - i * thetastep //start from PI/2 NORTH and go to -PI/2 south

		for (j = 0; j <= subdivisions; j++) {
			let phi = j * phistep

			let x = radius * Math.cos(phi) * Math.sin(theta);
			let y = radius * Math.sin(phi) * Math.sin(theta);
			let z = radius * Math.cos(theta);
			let norm = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2))


			vertices.push([x, y, z, x / norm, y / norm, z / norm]);
		}
	}

	////// Creates indices
	for (let i = 0; i < subdivisions; i++) {
		for (let j = 0; j < subdivisions; j++) {
			const a = i * (subdivisions + 1) + j;
			const d = i * (subdivisions + 1) + (j + 1);

			const b = (i + 1) * (subdivisions + 1) + j;
			const c = (i + 1) * (subdivisions + 1) + (j + 1);

			indices.push(a, d, c);
			indices.push(a, c, b);

		}
	}

	return { indices: indices, vertices: vertices }


}