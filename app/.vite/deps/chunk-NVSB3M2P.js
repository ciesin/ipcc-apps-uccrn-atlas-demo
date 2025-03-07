import {
  o as o2
} from "./chunk-F6RMQNRI.js";
import {
  n as n2
} from "./chunk-OULJFYM2.js";
import {
  n
} from "./chunk-O2L6JAHP.js";
import {
  o
} from "./chunk-K35H6D4D.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl.js
function d(e) {
  e.uniforms.add(new o2("zProjectionMap", (e2) => a(e2.camera))), e.code.add(n2`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`), e.code.add(n2`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`), e.code.add(n2`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`);
}
function a(t) {
  const r = t.projectionMatrix;
  return o(c, r[14], r[10]);
}
var c = n();

export {
  d
};
//# sourceMappingURL=chunk-NVSB3M2P.js.map
