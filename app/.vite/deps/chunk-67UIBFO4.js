import {
  f
} from "./chunk-WTN7VGO4.js";
import {
  e as e2
} from "./chunk-R2BXFO5E.js";
import {
  e
} from "./chunk-IG22ED74.js";
import {
  e as e3
} from "./chunk-LN4OREZH.js";
import {
  d
} from "./chunk-NVSB3M2P.js";
import {
  o as o2
} from "./chunk-F6RMQNRI.js";
import {
  s as s2
} from "./chunk-EDOH6SI4.js";
import {
  s
} from "./chunk-XUP22FSP.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  n as n2
} from "./chunk-OULJFYM2.js";
import {
  n
} from "./chunk-O2L6JAHP.js";
import {
  o
} from "./chunk-K35H6D4D.js";

// node_modules/@arcgis/core/chunks/SSAO.glsl.js
var d2 = 16;
function m() {
  const r = new i(), m2 = r.fragment;
  return r.include(e3), r.include(f), m2.include(d), m2.uniforms.add(new e("radius", (e4) => v(e4.camera))).code.add(n2`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`), m2.code.add(n2`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`), m2.uniforms.add(new s("normalMap", (e4) => e4.normalTexture), new s("depthMap", (e4) => e4.depthTexture), new s2("projScale", (e4) => e4.projScale), new s("rnm", (e4) => e4.noiseTexture), new e2("rnmScale", (r2, t) => o(p, t.camera.fullWidth / r2.noiseTexture.descriptor.width, t.camera.fullHeight / r2.noiseTexture.descriptor.height)), new s2("intensity", (e4) => e4.intensity), new o2("screenSize", (r2) => o(p, r2.camera.fullWidth, r2.camera.fullHeight))), r.outputs.add("fragOcclusion", "float"), m2.main.add(n2`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${n2.int(d2)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${n2.int(d2)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`), r;
}
function v(e4) {
  return Math.max(10, 20 * e4.computeScreenPixelSizeAtDist(Math.abs(4 * e4.relativeElevation)));
}
var p = n();
var g = Object.freeze(Object.defineProperty({ __proto__: null, build: m, getRadius: v }, Symbol.toStringTag, { value: "Module" }));

export {
  m,
  v,
  g
};
//# sourceMappingURL=chunk-67UIBFO4.js.map
