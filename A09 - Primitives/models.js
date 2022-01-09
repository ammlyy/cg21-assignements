function buildGeometry() {
	var i;
	
	// Draws the outline of letter F (replace the vertices and primitive type)
	var vert1 = [
		[-0.25, -0.75, 0], [-0.25,0.5, 0.0], 
		[0.5,0.5,0.0], [0.5,0.25,0],
		[0.0,0.25,0.0], [0.0,0.0,0.0],
		[0.25, 0.0,0.0], [0.25, -0.25, 0.0],
		[0.0, -0.25, 0.0], [0.0, -0.75, 0.0]
]
	;

	addMesh(vert1, "O", [1.0, 0.0, 0.0]);


	// Draws a filled S-shaped pattern (replace the vertices and primitive type)
	var vert2 = [[-1.0,-1.0,-1.0], [-1.0,-0.8,-1.0], [-0.2, -1.0,-1.0], [-0.4, -0.8,-1.0], [-0.2, -0.3,-1.0], [-0.4, -0.5,-1.0], [-0.8, -0.3,-1.0], [-1.0, -0.5,-1.0], [-0.8, 0.0,-1.0], [-1.0, 0.2,-1.0], [-0.2, 0.0,-1.0], [-0.2, 0.2,-1.0]];

	addMesh(vert2, "S", [0.0, 0.0, 1.0]);

	// Draws a filled pentacong (replace the vertices and primitive type)
	var vert3 =  this.makePolygon(5,2)

	addMesh(vert3, "F", [0.0, 1.0, 0.0]);
	
}

function makePolygon(nvert, radius){
	let startAngle = Math.PI/nvert
	let mesh = [[0,0,0]]
	for (let i = 0; i <= nvert; i++){
		let angle = startAngle + i* (2*Math.PI/nvert)
		let x = radius * Math.cos(angle)
		let y = -radius *Math.sin(angle)
		mesh.push([x,y,0])
	}
	console.log(mesh)

	return mesh;
}