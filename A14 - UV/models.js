
function buildGeometry() {
	var i, j;
	// Draws a pyramid --- To complete for the assignment. This is just the one in Assignment 13, where two 0.1, 0.1 UV components have been added to the vertices definitions. Such number must be replaced (differently for each vertexes), to obtain a proper Egyptian Pyramid
	var vert1 = [[0.0, 1.0, 0.0, 0.0, 0.4472, -0.8944, 0.625, 0.5], [1.0, -1.0, -1.0, 0.0, 0.4472, -0.8944, 0.5, 0.25], [-1.0, -1.0, -1.0, 0.0, 0.4472, -0.8944, 0.75, 0.25],
	[0.0, 1.0, 0.0, 0.8944, 0.4472, 0.0, 0.875, 0.5], [1.0, -1.0, 1.0, 0.8944, 0.4472, 0.0, 0.75, 0.25], [1.0, -1.0, -1.0, 0.8944, 0.4472, 0.0, 1, 0.25],
	[0.0, 1.0, 0.0, 0.0, 0.4472, 0.8944, 0.625, 0.25], [-1.0, -1.0, 1.0, 0.0, 0.4472, 0.8944, 0.5, 0.0], [1.0, -1.0, 1.0, 0.0, 0.4472, 0.8944, 0.75, 0.0],
	[0.0, 1.0, 0.0, -0.8944, 0.4472, 0.0, 0.625, 0.5], [-1.0, -1.0, -1.0, -0.8944, 0.4472, 0.0, 0.5, 0.25], [-1.0, -1.0, 1.0, -0.8944, 0.4472, 0.0, 0.75, 0.25],
	[-1.0, -1.0, -1.0, 0.0, -1.0, 0.0, 0.75, 0.0], [1.0, -1.0, -1.0, 0.0, -1.0, 0.0, 0.75, 0.225], [1.0, -1.0, 1.0, 0.0, -1.0, 0.0, 1.0, 0.25], [-1.0, -1.0, 1.0, 0.0, -1.0, 0.0, 1.0, 0.0]
	];
	var ind1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 12, 14, 15];
	var color1 = [0.0, 0.0, 1.0];

	addMesh(vert1, ind1, color1);

	// Draws a cube -- To do for the assignment.
	var vert2 = [[-1.0, -1.0, 0.0, 0.0, 0.0, 1.0, 0.125, 1.0], [1.0, -1.0, 0.0, 0.0, 0.0, 1.0, 0.25, 1.0], [1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.25, 0.875], [-1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.125, 0.875],
	[1.0, -1.0, 0.0, 1.0, 0.0, 0.0, 0.375, 0.625], [1.0, -1.0, -2.0, 1.0, 0.0, 0.0, 0.25, 0.625], [1.0, 1.0, -2.0, 1.0, 0.0, 0.0, 0.25, 0.75], [1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.375, 0.75],
	[1.0, -1.0, -2.0, 0.0, 0.0, -1.0, 0.25, 0.625], [-1.0, -1.0, -2.0, 0.0, 0.0, -1.0, 0.125, 0.625], [-1.0, 1.0, -2.0, 0.0, 0.0, -1.0, 0.125, 0.75], [1.0, 1.0, -2.0, 0.0, 0.0, -1.0, 0.25, 0.75],
	[-1.0, -1.0, -2.0, -1.0, 0.0, 0.0, 0.125, 0.625], [-1.0, -1.0, 0.0, -1.0, 0.0, 0.0, 0.0, 0.625], [-1.0, 1.0, 0.0, -1.0, 0.0, 0.0, 0.0, 0.75], [-1.0, 1.0, -2.0, -1.0, 0.0, 0.0, 0.125, 0.75],
	[-1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.125, 0.875], [1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.25, 0.875], [1.0, 1.0, -2.0, 0.0, 1.0, 0.0, 0.25, 0.75], [-1.0, 1.0, -2.0, 0.0, 1.0, 0.0, 0.125, 0.75],
	[-1.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.125, 0.5], [1.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.25, 0.5], [1.0, -1.0, -2.0, 0.0, -1.0, 0.0, 0.25, 0.625], [-1.0, -1.0, -2.0, 0.0, -1.0, 0.0, 0.125, 0.625]];

	var ind2 = [0, 1, 2, 0, 2, 3, 4, 5, 7, 5, 6, 7, 8, 9, 11, 9, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 23, 22, 20, 22, 21];

	var color2 = [0.0, 1.0, 1.0];
	addMesh(vert2, ind2, color2);

	// Draws a Cylinder --- To do for the assignment
	var cylinder = createCylinder(2, 1 )
	var vert3 = cylinder.vertices
	var ind3 = cylinder.indices
	var color3 = [0.0, 1.0, 1.0];
	addMesh(vert3, ind3, color3);
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

		vertices.push([0, height, 0, 0, ny, 0, 0.875 -  i*0.250, 0.875]) // central vertex for both faces

		for (let j = 0; j <= subdivisions; j++) {
			let nx = circle[3 * j]
			let nz = circle[3 * j + 2]
			u = 0.875 - i*0.250 + 0.125*Math.cos(2*Math.PI*j/subdivisions);
			v = 0.875 + 0.125*Math.sin(2*Math.PI*j/subdivisions);
			vertices.push([nx * radius, height, nz * radius, 0, ny, 0, u, v])
		}
	}

	let sideIdx = vertices.length

	for (i = 0; i < 2; i++) { // side
		let height = h * (i - 0.5)
		let v = 0.5 + i*0.25
		for (let j = 0; j <= subdivisions; j++) {
			let nx = circle[3 * j]
			let ny = circle[3 * j + 1]
			let nz = circle[3 * j + 2]
			let norm = Math.sqrt(Math.pow(nx, 2) + Math.pow(ny, 2) + Math.pow(nz, 2))
			vertices.push([nx * radius, height, nz * radius, nx / norm, ny / norm, nz / norm, 0.5 + 0.5*j/subdivisions, v])
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
