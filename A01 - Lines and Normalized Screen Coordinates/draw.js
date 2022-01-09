function draw() {
	// line(x1,y1, x2,y2)
	// draws a line from a point at Normalized screen coordinates x1,y1 to Normalized screen coordinates x2,y2

	line(-0.5, 0.3, 0.3, 0.3);
	line(-0.5, 0.3, -0.5, -0.3);
	line(-0.5, -0.3, 0.3, -0.3);

	let radius = 0.3;
	let x0 = 0.3;
	let y0 = -0.3;

	for (let i=1; i < 64; ++i){
		let angle = i/64 * Math.PI - Math.PI/2;
		let x = radius*Math.cos(angle) + radius
		let y = radius*Math.sin(angle)
		line (x0,y0,x,y)
		x0 = x;
		y0 = y;
	}


}
