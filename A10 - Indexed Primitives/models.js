function buildGeometry() {
  var i;

  // Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3.
  ///// Creates vertices
  const indices = [];
  const vertices = [];
  const subdivisions = 40;

  const size = 6; // from -3 to 3
  const halfSize = size / 2; // 3
  const segSize = size / subdivisions; // distance between each grid line

  for (let i = 0; i <= subdivisions; i++) {
    const x = i * segSize - halfSize;
    for (let j = 0; j <= subdivisions; j++) {
      const z = j * segSize - halfSize;
      let y = Math.sin(x) * Math.cos(z);

      vertices.push([x, y, z]);
    }
  }

  console.log(vertices);

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

  var color2 = [0.0, 0.0, 1.0];
  addMesh(vertices, indices, color2);

  // Draws a Half Sphere
  ///// Creates vertices
  var vert3 = [];
  const radius = 1.0;
  for (i = 0; i <= subdivisions; i++) {
    let theta = (i * (Math.PI / 2)) / subdivisions; //theta
    for (j = 0; j <= subdivisions; j++) {
      let phi = (j * (2 * Math.PI)) / subdivisions; // phi

      let x = radius * Math.cos(phi) * Math.sin(theta);
      let y = radius * Math.sin(phi) * Math.sin(theta);

      let z = radius * Math.cos(theta);

      vert3.push([x, y, z]);
    }
  }


  const ind3 = [];
  ////// Creates indices
  for (let i = 0; i <= subdivisions; i++) {
    for (let j = 0; j < subdivisions; j++) {
      const a = i * (subdivisions + 1) + j;
      const d = i * (subdivisions + 1) + (j + 1);

      const b = (i + 1) * (subdivisions + 1) + j;
      const c = (i + 1) * (subdivisions + 1) + (j + 1);

        ind3.push(a, d, c);
        ind3.push(a, c, b);

    }
  }

  var color3 = [0.0, 1.0, 0.0];
  addMesh(vert3, ind3, color3);
}
