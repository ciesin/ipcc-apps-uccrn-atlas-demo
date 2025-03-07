import {
  n
} from "./chunk-OULJFYM2.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl.js
function r(r2, c) {
  c.spherical ? r2.vertex.code.add(n`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return normalize(pos + origin);
}`) : r2.vertex.code.add(n`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return vec3(0.0, 0.0, 1.0);
}`), c.spherical ? r2.vertex.code.add(n`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`) : r2.vertex.code.add(n`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`);
}

export {
  r
};
//# sourceMappingURL=chunk-TERED6XM.js.map
