import {
  d
} from "./chunk-TWZMNVWK.js";
import {
  e as e2
} from "./chunk-QXP5ULTQ.js";
import {
  e
} from "./chunk-D7JG6K4Y.js";
import {
  n as n3
} from "./chunk-OULJFYM2.js";
import {
  o
} from "./chunk-UMYFDXOJ.js";
import {
  n as n2
} from "./chunk-MHM4GDCM.js";
import {
  s
} from "./chunk-363AT5UF.js";
import {
  n
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js
function s2(e3) {
  e3.vertex.code.add(n3`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`), e3.vertex.code.add(n3`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`), e3.vertex.code.add(n3`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`), e3.vertex.code.add(n3`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`), e3.vertex.code.add(n3`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`), e3.vertex.code.add(n3`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);
}
function t(e3) {
  e3.uniforms.add(new e("screenSizePerspective", (e4) => i(e4.screenSizePerspective)));
}
function o2(e3) {
  e3.uniforms.add(new e("screenSizePerspectiveAlignment", (e4) => i(e4.screenSizePerspectiveAlignment || e4.screenSizePerspective)));
}
function i(a2) {
  return o(n4, a2.parameters.divisor, a2.parameters.offset, a2.minScaleFactor);
}
var n4 = n();

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js
function s3(e3, r) {
  const c = e3.vertex;
  r.hasVerticalOffset ? (f(c), r.hasScreenSizePerspective && (e3.include(s2), o2(c), d(e3.vertex, r)), c.code.add(n3`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r.spherical ? n3`vec3 worldNormal = normalize(worldPos + localOrigin);` : n3`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r.hasScreenSizePerspective ? n3`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);` : n3`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)) : c.code.add(n3`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);
}
var a = n2();
function f(r) {
  r.uniforms.add(new e2("verticalOffset", (r2, l) => {
    const { minWorldLength: t2, maxWorldLength: o3, screenLength: c } = r2.verticalOffset, i2 = Math.tan(0.5 * l.camera.fovY) / (0.5 * l.camera.fullViewport[3]), s4 = l.camera.pixelRatio || 1;
    return s(a, c * s4, i2, t2, o3);
  }));
}

export {
  s2 as s,
  t,
  o2 as o,
  s3 as s2,
  f
};
//# sourceMappingURL=chunk-ZARQIHWV.js.map
