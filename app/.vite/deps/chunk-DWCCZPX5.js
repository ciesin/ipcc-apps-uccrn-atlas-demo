import {
  l,
  n as n3,
  u
} from "./chunk-4N6EURWG.js";
import {
  o as o3
} from "./chunk-ZARQIHWV.js";
import {
  m
} from "./chunk-LZBWOTLM.js";
import {
  e as e2
} from "./chunk-QXP5ULTQ.js";
import {
  o as o4
} from "./chunk-JZNIMAZ2.js";
import {
  e as e3
} from "./chunk-R2BXFO5E.js";
import {
  o as o5
} from "./chunk-W3SIP2H3.js";
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
  i
} from "./chunk-36LA23CO.js";
import {
  n as n2,
  t
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";
import {
  n
} from "./chunk-O2L6JAHP.js";
import {
  o
} from "./chunk-K35H6D4D.js";
import {
  s
} from "./chunk-MHM4GDCM.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MultipassGeometryTest.glsl.js
function r(r2) {
  r2.include(d), r2.uniforms.add(new o4("geometryDepthTexture", (e4) => {
    var _a;
    return (_a = e4.geometryDepth) == null ? void 0 : _a.attachment;
  })), r2.code.add(n2`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos);
return (elementDepth < (geometryDepth - 1.0));
}`);
}

// node_modules/@arcgis/core/chunks/LineCallout.glsl.js
function h(i2) {
  const h2 = new i(), { vertex: b2, fragment: z } = h2, { terrainDepthTest: x } = i2;
  return b2.include(l), h2.include(u, i2), h2.vertex.include(m, i2), h2.attributes.add(e.UV0, "vec2"), b2.uniforms.add(new o5("viewport", (e4) => e4.camera.fullViewport), new s2("lineSize", (e4, i3) => e4.size > 0 ? Math.max(1, e4.size) * i3.camera.pixelRatio : 0), new o2("pixelToNDC", (i3) => o(u2, 2 / i3.camera.fullViewport[2], 2 / i3.camera.fullViewport[3])), new s2("borderSize", (e4, i3) => e4.borderColor ? i3.camera.pixelRatio : 0), new e3("screenOffset", (i3, r2) => o(u2, i3.horizontalScreenOffset * r2.camera.pixelRatio, 0))), h2.varyings.add("coverageSampling", "vec4"), h2.varyings.add("lineSizes", "vec2"), x && h2.varyings.add("depth", "float"), i2.occlusionTestEnabled && h2.include(n3), i2.hasScreenSizePerspective && o3(b2), b2.main.add(n2`
    ProjectHUDAux projectAux;
    vec4 endPoint = projectPositionHUD(projectAux);

    vec3 vpos = projectAux.posModel;
    if (rejectBySlice(vpos)) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    }
    ${t(i2.occlusionTestEnabled, n2`if (!testHUDVisibility(endPoint)) {
             gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
             return;
           }`)}

    ${i2.hasScreenSizePerspective ? n2`vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
               vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);` : "vec2 screenOffsetScaled = screenOffset;"}
    // Add view dependent polygon offset to get exact same original starting point. This is mostly used to get the
    // correct depth value
    vec3 posView = (view * vec4(position, 1.0)).xyz;
    ${t(x, "depth = posView.z;")}

    applyHUDViewDependentPolygonOffset(centerOffsetAndDistance.w, projectAux.absCosAngle, posView);
    vec4 startPoint = proj * vec4(posView, 1.0);

    // Apply screen offset to both start and end point
    vec2 screenOffsetNorm = screenOffsetScaled * 2.0 / viewport.zw;
    startPoint.xy += screenOffsetNorm * startPoint.w;
    endPoint.xy += screenOffsetNorm * endPoint.w;

    // Align start and end to pixel origin
    vec4 startAligned = alignToPixelOrigin(startPoint, viewport.zw);
    vec4 endAligned = alignToPixelOrigin(endPoint, viewport.zw);
    ${t(i2.hudDepth, i2.hudDepthAlignStart ? "endAligned = vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);" : "startAligned = vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);")}
    vec4 projectedPosition = mix(startAligned, endAligned, uv0.y);

    // The direction of the line in screen space
    vec2 screenSpaceDirection = normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);
    vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x);
    ${i2.hasScreenSizePerspective ? n2`float lineSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);
               float borderSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);` : n2`float lineSizeScaled = lineSize;
               float borderSizeScaled = borderSize;`}
    float halfPixelSize = lineSizeScaled * 0.5;

    // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size
    float padding = 1.0 + borderSizeScaled;
    vec2 ndcOffset = (-halfPixelSize - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;

    // Offset x/y from the center of the line in screen space
    projectedPosition.xy += perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;

    // Compute a coverage varying which we can use in the fragment shader to determine
    // how much a pixel is actually covered by the line (i.e. to anti alias the line).
    // This works by computing two coordinates that can be linearly interpolated and then
    // subtracted to find out how far away from the line edge we are.
    float edgeDirection = (uv0.x * 2.0 - 1.0);

    float halfBorderSize = 0.5 * borderSizeScaled;
    float halfPixelSizeAndBorder = halfPixelSize + halfBorderSize;
    float outerEdgeCoverageSampler = edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);

    float isOneSided = float(lineSizeScaled < 2.0 && borderSize < 2.0);

    coverageSampling = vec4(
      // Edge coordinate
      outerEdgeCoverageSampler,

      // Border edge coordinate
      outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,

      // Line offset
      halfPixelSize - 0.5,

      // Border offset
      halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)
    );

    lineSizes = vec2(lineSizeScaled, borderSizeScaled);
    gl_Position = projectedPosition;`), z.uniforms.add(new e2("uColor", (e4) => e4.color ?? s), new e2("borderColor", (e4) => e4.borderColor ?? s)), x && (z.include(r, i2), z.uniforms.add(new o2("inverseViewport", (e4) => e4.inverseViewport))), z.main.add(n2`
    ${t(x, "if( geometryDepthTest(gl_FragCoord.xy * inverseViewport, depth) ){ discard; }")}

    vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

    float borderAlpha = uColor.a * borderColor.a * coverage.y;
    float colorAlpha = uColor.a * coverage.x;

    float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);
    ${t(!i2.hudDepth, n2`vec3 finalRgb = mix(borderColor.rgb * borderAlpha, uColor.rgb, colorAlpha);
           fragColor = vec4(finalRgb, finalAlpha);`)}`), h2;
}
var u2 = n();
var b = Object.freeze(Object.defineProperty({ __proto__: null, build: h }, Symbol.toStringTag, { value: "Module" }));

export {
  h,
  b
};
//# sourceMappingURL=chunk-DWCCZPX5.js.map
