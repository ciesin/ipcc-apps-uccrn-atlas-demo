import {
  f as f2,
  o,
  s
} from "./chunk-ZARQIHWV.js";
import {
  e as e3
} from "./chunk-ZPEFCSMC.js";
import {
  d,
  f,
  p,
  w
} from "./chunk-TWZMNVWK.js";
import {
  o as o2
} from "./chunk-JZNIMAZ2.js";
import {
  o as o3
} from "./chunk-W3SIP2H3.js";
import {
  e as e2
} from "./chunk-IG22ED74.js";
import {
  s as s2
} from "./chunk-EDOH6SI4.js";
import {
  n
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl.js
var d2 = 0.5;
function u(u2, v) {
  u2.include(s), u2.attributes.add(e.POSITION, "vec3"), u2.attributes.add(e.NORMAL, "vec3"), u2.attributes.add(e.CENTEROFFSETANDDISTANCE, "vec4");
  const m = u2.vertex;
  f(m, v), d(m, v), m.uniforms.add(new o3("viewport", (e4) => e4.camera.fullViewport), new s2("polygonOffset", (e4) => e4.shaderPolygonOffset), new e2("cameraGroundRelative", (e4) => e4.camera.aboveGround ? 1 : -1)), v.hasVerticalOffset && f2(m), m.constants.add("smallOffsetAngle", "float", 0.984807753012208), m.code.add(n`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`), m.code.add(n`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${v.terrainDepthTest ? n.float(0) : n`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `), v.draped && !v.hasVerticalOffset || p(m), v.draped || (m.uniforms.add(new e2("perDistancePixelRatio", (e4) => Math.tan(e4.camera.fovY / 2) / (e4.camera.fullViewport[2] / 2))), m.code.add(n`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${n.float(d2)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)), v.screenCenterOffsetUnitsEnabled && w(m), v.hasScreenSizePerspective && o(m), m.code.add(n`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${v.draped ? "" : "applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${v.hasScreenSizePerspective && (v.hasVerticalOffset || v.screenCenterOffsetUnitsEnabled) ? "vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);" : ""}

      ${v.hasVerticalOffset ? v.hasScreenSizePerspective ? "float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);" : "float verticalOffsetScreenHeight = verticalOffset.x;" : ""}

      ${v.hasVerticalOffset ? n`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;` : ""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${v.screenCenterOffsetUnitsEnabled ? "" : n`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${v.screenCenterOffsetUnitsEnabled ? v.hasScreenSizePerspective ? "float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);" : "float centerOffsetY = centerOffset.y;" : ""}

      ${v.screenCenterOffsetUnitsEnabled ? "posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;" : ""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl.js
function l(l2) {
  l2.uniforms.add(new e3("alignPixelEnabled", (e4) => e4.alignPixelEnabled)), l2.code.add(n`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`), l2.code.add(n`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/HUDRenderStyle.js
var c;
!function(c2) {
  c2[c2.Occluded = 0] = "Occluded", c2[c2.NotOccluded = 1] = "NotOccluded", c2[c2.Both = 2] = "Both", c2[c2.COUNT = 3] = "COUNT";
}(c || (c = {}));

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/HUDVisibility.glsl.js
function n2(n3) {
  n3.vertex.uniforms.add(new e2("renderTransparentlyOccludedHUD", (e4) => e4.hudRenderStyle === c.Occluded ? 1 : e4.hudRenderStyle === c.NotOccluded ? 0 : 0.75), new o3("viewport", (e4) => e4.camera.fullViewport), new o2("hudVisibilityTexture", (e4) => {
    var _a;
    return (_a = e4.hudVisibility) == null ? void 0 : _a.getTexture();
  })), n3.vertex.include(l), n3.vertex.code.add(n`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`);
}

export {
  d2 as d,
  u,
  l,
  c,
  n2 as n
};
//# sourceMappingURL=chunk-4N6EURWG.js.map
