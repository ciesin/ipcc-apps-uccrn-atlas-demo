import {
  o as o2
} from "./chunk-U5M766SV.js";
import {
  n as n2
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-X5RZJMNW.js";
import {
  E,
  c,
  o,
  u
} from "./chunk-UMYFDXOJ.js";
import {
  i
} from "./chunk-53ZTROGC.js";
import {
  _,
  n
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js
function p(e3, s) {
  B(e3, s, new o2("slicePlaneOrigin", (e4, i2) => h(s, e4, i2)), new o2("slicePlaneBasis1", (e4, i2) => {
    var _a;
    return y(s, e4, i2, (_a = i2.slicePlane) == null ? void 0 : _a.basis1);
  }), new o2("slicePlaneBasis2", (e4, i2) => {
    var _a;
    return y(s, e4, i2, (_a = i2.slicePlane) == null ? void 0 : _a.basis2);
  }));
}
function m(e3, s) {
  v(e3, s, new o2("slicePlaneOrigin", (e4, i2) => h(s, e4, i2)), new o2("slicePlaneBasis1", (e4, i2) => {
    var _a;
    return y(s, e4, i2, (_a = i2.slicePlane) == null ? void 0 : _a.basis1);
  }), new o2("slicePlaneBasis2", (e4, i2) => {
    var _a;
    return y(s, e4, i2, (_a = i2.slicePlane) == null ? void 0 : _a.basis2);
  }));
}
var b = n2`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
bool rejectBySlice(vec3 pos) {
return sliceByPlane(pos);
}`;
function v(e3, s, ...i2) {
  s.hasSlicePlane ? (e3.uniforms.add(...i2), e3.code.add(b)) : e3.code.add("bool rejectBySlice(vec3 pos) { return false; }");
}
function B(e3, s, ...i2) {
  v(e3, s, ...i2), s.hasSlicePlane ? e3.code.add("\n    void discardBySlice(vec3 pos) {\n      if (sliceByPlane(pos)) {\n        discard;\n      }\n    }\n\n    vec4 applySliceOutline(vec4 color, vec3 pos) {\n      SliceFactors factors = calculateSliceFactors(pos);\n\n      factors.front /= 2.0 * fwidth(factors.front);\n      factors.side0 /= 2.0 * fwidth(factors.side0);\n      factors.side1 /= 2.0 * fwidth(factors.side1);\n      factors.side2 /= 2.0 * fwidth(factors.side2);\n      factors.side3 /= 2.0 * fwidth(factors.side3);\n\n      // return after calling fwidth, to avoid aliasing caused by discontinuities in the input to fwidth\n      if (sliceByFactors(factors)) {\n        return color;\n      }\n\n      float outlineFactor = (1.0 - step(0.5, factors.front))\n        * (1.0 - step(0.5, factors.side0))\n        * (1.0 - step(0.5, factors.side1))\n        * (1.0 - step(0.5, factors.side2))\n        * (1.0 - step(0.5, factors.side3));\n\n      return mix(color, vec4(vec3(0.0), color.a), outlineFactor * 0.3);\n    }\n\n    vec4 applySlice(vec4 color, vec3 pos) {\n      return sliceEnabled() ? applySliceOutline(color, pos) : color;\n    }\n  ") : e3.code.add(n2`void discardBySlice(vec3 pos) { }
vec4 applySlice(vec4 color, vec3 pos) { return color; }`);
}
function w(e3, s, i2) {
  return e3.instancedDoublePrecision ? o(F, i2.camera.viewInverseTransposeMatrix[3], i2.camera.viewInverseTransposeMatrix[7], i2.camera.viewInverseTransposeMatrix[11]) : s.slicePlaneLocalOrigin;
}
function S(e3, s) {
  return null != e3 ? c(x, s.origin, e3) : s.origin;
}
function g(s, i2, a) {
  return s.hasSliceTranslatedView ? null != i2 ? i(O, a.camera.viewMatrix, i2) : a.camera.viewMatrix : null;
}
function h(e3, s, a) {
  if (null == a.slicePlane) return _;
  const l = w(e3, s, a), c3 = S(l, a.slicePlane), o3 = g(e3, l, a);
  return null != o3 ? E(x, c3, o3) : c3;
}
function y(e3, s, c3, o3) {
  if (null == o3 || null == c3.slicePlane) return _;
  const r = w(e3, s, c3), t = S(r, c3.slicePlane), f = g(e3, r, c3);
  return null != f ? (u(j, o3, t), E(x, t, f), E(j, j, f), c(j, j, x)) : o3;
}
var F = n();
var x = n();
var j = n();
var O = e();

export {
  p,
  m
};
//# sourceMappingURL=chunk-LZBWOTLM.js.map
