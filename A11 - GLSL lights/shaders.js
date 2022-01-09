function shaders() {
// The shader can find the required informations in the following variables:

//vec3 fs_pos;		// Position of the point in 3D space
//
//vec3  Pos;		// Position of first (or single) light
//vec3  Dir;		// Direction of first (or single) light
//float ConeOut;	// Outer cone (in degree) of the light (if spot)
//float ConeIn;		// Inner cone (in percentage of the outher cone) of the light (if spot)
//float Decay;		// Decay factor (0, 1 or 2)
//float Target;		// Target distance
//vec4  lightColor;	// color of the first light
//		
//
//vec4 ambientLightColor;		// Ambient light color. For hemispheric, this is the color on the top
//vec4 ambientLightLowColor;	// For hemispheric ambient, this is the bottom color
//vec3 ADir;					// For hemispheric ambient, this is the up direction
//vec4 SHconstColor;		// For spherical harmonics, constant term
//vec4 SHDeltaLxColor;		// For spherical harmonics, DeltaLx color
//vec4 SHDeltaLyColor;		// For spherical harmonics, DeltaLy color
//vec4 SHDeltaLzColor;		// For spherical harmonics, DeltaLz color
//
//vec3 normalVec;				// direction of the normal vector to the surface
//
//
// Final direction and colors are returned into:
//vec3 OlightDir;
//
//and intensity is returned into:
//
//vec4 OlightColor;
//
// Ambient light contribution is returned into
//
// vec4 ambientColor;

// Single directional light, constant ambient
var S1 = `
	OlightDir = Dir;
	OlightColor = lightColor;
	
	ambientColor = ambientLightColor;
`;

// Single point light without decay
var S2 = `
	OlightDir = normalize(Pos - fs_pos);
	OlightColor = lightColor;
`;

// Single spot light (without decay), constant ambient
var S3 = `
float calpha = dot(normalize(Pos - fs_pos), Dir);
float cout = cos(radians(ConeOut/2.0));
float cin = cos(radians(ConeOut*ConeIn /2.0));
OlightDir = normalize(Pos - fs_pos);
OlightColor = lightColor * clamp( (calpha -cout)/ (cin - cout), 0.0, 1.0);
`;

// Single point light with decay
var S4 = `
float decay = pow( Target , Decay);
OlightDir = normalize(Pos - fs_pos);
OlightColor = lightColor * decay;
`;

// Single spot light (with decay)
var S5 = `
float decay = pow( Target / length(Pos - fs_pos) , Decay);
float calpha = dot(normalize(Pos - fs_pos), Dir);
float cout = cos(radians(ConeOut/2.0));
float cin = cos(radians(ConeOut*ConeIn /2.0));
OlightDir = normalize(Pos - fs_pos);
OlightColor = lightColor * decay * clamp( (calpha -cout)/ (cin - cout), 0.0, 1.0);	
`;

// Single point light, hemispheric ambient 
var S6 = `
ambientColor = (dot(normalVec, ADir) + 1. ) / 2. * ambientLightColor + (1.0 - dot(normalVec, ADir) ) / 2. * ambientLightLowColor;
float decay = pow( Target / length(Pos - fs_pos) , Decay);
OlightDir = normalize(Pos - fs_pos);
OlightColor = lightColor * decay;

	
`;

// Single spot light, spherical harmonics ambient
var S7 = `
float decay = pow( Target / length(Pos - fs_pos)  , Decay);
float calpha = dot(normalize(Pos - fs_pos), Dir);
float cout = cos(radians(ConeOut/2.0));
float cin = cos(radians(ConeOut*ConeIn /2.0));
OlightDir = normalize(Pos - fs_pos);
OlightColor = lightColor * decay * clamp( (calpha -cout)/ (cin - cout), 0.0, 1.0);	

ambientColor = SHconstColor + normalVec.x * SHDeltaLxColor + normalVec.y * SHDeltaLyColor + normalVec.z * SHDeltaLzColor;

`;
	return [S1, S2, S3, S4, S5, S6, S7];
}

