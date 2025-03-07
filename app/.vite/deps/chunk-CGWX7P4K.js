import {
  i as i2
} from "./chunk-FZIAHPUP.js";
import {
  e as e3
} from "./chunk-QXP5ULTQ.js";
import {
  o as o2
} from "./chunk-B2Y4XQVD.js";
import {
  l as l2
} from "./chunk-L3N7SR24.js";
import {
  e as e4
} from "./chunk-R2BXFO5E.js";
import {
  e as e2
} from "./chunk-IG22ED74.js";
import {
  e as e5
} from "./chunk-LN4OREZH.js";
import {
  s as s3
} from "./chunk-EDOH6SI4.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  e
} from "./chunk-D7JG6K4Y.js";
import {
  E as E2,
  U
} from "./chunk-WAKNRSGF.js";
import {
  n as n4
} from "./chunk-OULJFYM2.js";
import {
  M,
  l
} from "./chunk-NVEHOQKI.js";
import {
  n as n3
} from "./chunk-O2L6JAHP.js";
import {
  o
} from "./chunk-K35H6D4D.js";
import {
  A,
  E,
  _,
  c,
  p,
  r,
  s as s2,
  u
} from "./chunk-UMYFDXOJ.js";
import {
  n as n2
} from "./chunk-MHM4GDCM.js";
import {
  z
} from "./chunk-363AT5UF.js";
import {
  n
} from "./chunk-JLFSX3JT.js";
import {
  s
} from "./chunk-6P7HXSJ6.js";

// node_modules/@arcgis/core/chunks/Laserlines.glsl.js
var V = s(6);
function y(e6) {
  const i3 = new i();
  i3.include(e5), i3.include(i2, e6);
  const t = i3.fragment;
  if (e6.lineVerticalPlaneEnabled || e6.heightManifoldEnabled) if (t.uniforms.add(new s3("maxPixelDistance", (i4, t2) => e6.heightManifoldEnabled ? 2 * t2.camera.computeScreenPixelSizeAt(i4.heightManifoldTarget) : 2 * t2.camera.computeScreenPixelSizeAt(i4.lineVerticalPlaneSegment.origin))), t.code.add(n4`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`), e6.spherical) {
    const e7 = (e8, i5, t2) => E(e8, i5.heightManifoldTarget, t2.camera.viewMatrix), i4 = (e8, i5) => E(e8, [0, 0, 0], i5.camera.viewMatrix);
    t.uniforms.add(new e3("heightManifoldOrigin", (t2, r2) => (e7(F, t2, r2), i4(H, r2), c(H, H, F), A(G, H), G[3] = r(H), G)), new o2("globalOrigin", (e8) => i4(F, e8)), new s3("cosSphericalAngleThreshold", (e8, i5) => 1 - Math.max(2, p(i5.camera.eye, e8.heightManifoldTarget) * i5.camera.perRenderPixelRatio) / r(e8.heightManifoldTarget))), t.code.add(n4`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`);
  } else t.code.add(n4`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);
  if (e6.pointDistanceEnabled && (t.uniforms.add(new s3("maxPixelDistance", (e7, i4) => 2 * i4.camera.computeScreenPixelSizeAt(e7.pointDistanceTarget))), t.code.add(n4`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)), e6.intersectsLineEnabled && t.uniforms.add(new e2("perScreenPixelRatio", (e7) => e7.camera.perScreenPixelRatio)).code.add(n4`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`), (e6.lineVerticalPlaneEnabled || e6.intersectsLineEnabled) && t.code.add(n4`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`), t.main.add(n4`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`), e6.heightManifoldEnabled) {
    t.uniforms.add(new e4("angleCutoff", (e7) => O(e7)), new e3("heightPlane", (e7, i5) => R(e7.heightManifoldTarget, e7.renderCoordsHelper.worldUpAtPosition(e7.heightManifoldTarget, F), i5.camera.viewMatrix)));
    const i4 = e6.spherical ? n4`normalize(globalOrigin - pos)` : n4`heightPlane.xyz`;
    t.main.add(n4`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${i4})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`);
  }
  return e6.pointDistanceEnabled && (t.uniforms.add(new e4("angleCutoff", (e7) => O(e7)), new e3("pointDistanceSphere", (e7, i4) => E3(e7, i4))), t.main.add(n4`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)), e6.lineVerticalPlaneEnabled && (t.uniforms.add(new e4("angleCutoff", (e7) => O(e7)), new e3("lineVerticalPlane", (e7, i4) => z2(e7, i4)), new e("lineVerticalStart", (e7, i4) => I(e7, i4)), new e("lineVerticalEnd", (e7, i4) => T(e7, i4))), t.main.add(n4`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)), e6.intersectsLineEnabled && (t.uniforms.add(new e4("angleCutoff", (e7) => O(e7)), new e("intersectsLineStart", (e7, i4) => E(F, e7.lineStartWorld, i4.camera.viewMatrix)), new e("intersectsLineEnd", (e7, i4) => E(F, e7.lineEndWorld, i4.camera.viewMatrix)), new e("intersectsLineDirection", (e7, i4) => (s2(G, e7.intersectsLineSegment.vector), G[3] = 0, A(F, z(G, G, i4.camera.viewMatrix)))), new s3("intersectsLineRadius", (e7) => e7.intersectsLineRadius)), t.main.add(n4`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)), t.main.add(n4`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`), i3;
}
function O(t) {
  return o(U2, Math.cos(t.angleCutoff), Math.cos(Math.max(0, t.angleCutoff - s(2))));
}
function E3(e6, i3) {
  return E(U(N), e6.pointDistanceOrigin, i3.camera.viewMatrix), N[3] = p(e6.pointDistanceOrigin, e6.pointDistanceTarget), N;
}
function z2(e6, i3) {
  const t = l2(e6.lineVerticalPlaneSegment, 0.5, F), n5 = e6.renderCoordsHelper.worldUpAtPosition(t, W), o3 = A(H, e6.lineVerticalPlaneSegment.vector), r2 = _(F, n5, o3);
  return A(r2, r2), R(e6.lineVerticalPlaneSegment.origin, r2, i3.camera.viewMatrix);
}
function I(e6, i3) {
  const t = s2(F, e6.lineVerticalPlaneSegment.origin);
  return e6.renderCoordsHelper.setAltitude(t, 0), E(t, t, i3.camera.viewMatrix);
}
function T(e6, i3) {
  const t = u(F, e6.lineVerticalPlaneSegment.origin, e6.lineVerticalPlaneSegment.vector);
  return e6.renderCoordsHelper.setAltitude(t, 0), E(t, t, i3.camera.viewMatrix);
}
function R(e6, i3, t) {
  return E(_2, e6, t), s2(G, i3), G[3] = 0, z(G, G, t), l(_2, G, B);
}
var U2 = n3();
var F = n();
var G = n2();
var W = n();
var H = n();
var _2 = n();
var B = M();
var N = E2();
var $ = Object.freeze(Object.defineProperty({ __proto__: null, build: y, defaultAngleCutoff: V }, Symbol.toStringTag, { value: "Module" }));

export {
  V,
  y,
  $
};
//# sourceMappingURL=chunk-CGWX7P4K.js.map
