function shaders() {
// The shader can find the required informations in the following variables:

//vec3 fs_pos;		// Position of the point in 3D space
//
//float SpecShine;		// specular coefficient for both Blinn and Phong
//float DToonTh;		// Threshold for diffuse in a toon shader
//float SToonTh;		// Threshold for specular in a toon shader
//
//vec4 diffColor;		// diffuse color
//vec4 ambColor;		// material ambient color
//vec4 specularColor;		// specular color
//vec4 emit;			// emitted color
//	
//vec3 normalVec;		// direction of the normal vecotr to the surface
//vec3 eyedirVec;		// looking direction
//
//
// Lighr directions can be found into:
//vec3 lightDirA;
//vec3 lightDirB;
//vec3 lightDirC;
//
//and intensity is returned into:
//
//vec4 lightColorA;
//vec4 lightColorB;
//vec4 lightColorC;
//
// Ambient light contribution can be found intop
//
// vec4 ambientLight;

// Lambert diffuse and Ambient material. No specular or emisssion.
var S1 = `
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + ambientLight * ambColor, 0.0, 1.0);
`;

// Lambert diffuse and Blinn specular. No ambient and emission.
var S2 = `
vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
vec4 LAspec = pow(clamp(dot(normalVec,normalize(lightDirA + eyedirVec)), 0.0, 1.0), SpecShine) * lightColorA;
vec4 LBspec = pow(clamp(dot(normalVec,normalize(lightDirB + eyedirVec)), 0.0, 1.0), SpecShine) * lightColorB;
vec4 LCspec = pow(clamp(dot(normalVec,normalize(lightDirC + eyedirVec)), 0.0, 1.0), SpecShine) * lightColorC;

out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr), 0.0, 1.0) 
+ clamp(specularColor * (LAspec + LBspec + LCspec), 0.0, 1.0) ; 
	
`;

// Ambient and Phong specular. No emssion and no diffuse.
var S3 = `
vec4 LAspec = pow(clamp(dot(-reflect(lightDirA, normalVec), eyedirVec),0.0,1.0), SpecShine) * lightColorA;
vec4 LBspec = pow(clamp(dot(-reflect(lightDirB, normalVec), eyedirVec),0.0,1.0), SpecShine) * lightColorB;
vec4 LCspec = pow(clamp(dot(-reflect(lightDirC, normalVec), eyedirVec),0.0,1.0), SpecShine) * lightColorC;
out_color = clamp(specularColor * (LAspec + LBspec + LCspec) + ambientLight * ambColor, 0.0, 1.0);`;

// Diffuse, ambient, emission and Phong specular.
var S4 = `
vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;

vec4 LAspec = pow(clamp(dot(-reflect(lightDirA, normalVec), eyedirVec),0.0,1.0), SpecShine) * lightColorA;
vec4 LBspec = pow(clamp(dot(-reflect(lightDirB, normalVec), eyedirVec),0.0,1.0), SpecShine) * lightColorB;
vec4 LCspec = pow(clamp(dot(-reflect(lightDirC, normalVec), eyedirVec),0.0,1.0), SpecShine) * lightColorC;


out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr)
 + ambientLight * ambColor 
 + specularColor * (LAspec + LBspec + LCspec) 
 + emit
 , 0.0, 1.0);
`;

// Ambient, Toon diffuse and and Toon (Blinn based) specular. No emssion.
var S5 = `
vec4 toonD; 
vec4 toonR;
if (dot(lightDirA, normalVec) >= DToonTh) {
	toonD = diffColor;
}
else {
	toonD = vec4(0.,0.,0.,1.);
}

vec3 rlx = 2.*normalVec * dot(lightDirA, normalVec) - lightDirA;

if (dot(rlx, eyedirVec) >= SToonTh){
	toonR = specularColor;
}
else{
	toonR = vec4(0.,0.,0.,1.);
}

out_color = clamp(toonD + toonR + ambientLight * ambColor 
		, 0.0, 1.0
		);
`;

	return [S1, S2, S3, S4, S5];
}

