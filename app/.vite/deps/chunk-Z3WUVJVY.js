import {
  l as l2,
  n as n4,
  u
} from "./chunk-4N6EURWG.js";
import {
  o as o4,
  s as s3,
  t as t4
} from "./chunk-ZARQIHWV.js";
import {
  e as e4
} from "./chunk-HJA3Q6AG.js";
import {
  l
} from "./chunk-TD7VJ4Z2.js";
import {
  d as d2,
  e as e6,
  o as o3
} from "./chunk-C5H3KDE3.js";
import {
  d,
  o as o6
} from "./chunk-YIMQSH52.js";
import {
  m
} from "./chunk-LZBWOTLM.js";
import {
  w
} from "./chunk-TWZMNVWK.js";
import {
  e as e3
} from "./chunk-QXP5ULTQ.js";
import {
  o as o5
} from "./chunk-JZNIMAZ2.js";
import {
  e as e5
} from "./chunk-R2BXFO5E.js";
import {
  o as o7
} from "./chunk-W3SIP2H3.js";
import {
  e as e2
} from "./chunk-IG22ED74.js";
import {
  s as s4
} from "./chunk-EDOH6SI4.js";
import {
  s as s2
} from "./chunk-XUP22FSP.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  o as o2
} from "./chunk-EOMGQOKR.js";
import {
  t as t3
} from "./chunk-BDV3SAJ7.js";
import {
  n as n3
} from "./chunk-BSNHCIEC.js";
import {
  n as n2,
  t as t2
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";
import {
  n
} from "./chunk-O2L6JAHP.js";
import {
  o,
  r as r2
} from "./chunk-K35H6D4D.js";
import {
  r,
  s
} from "./chunk-MHM4GDCM.js";
import {
  t
} from "./chunk-HQLPC24M.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/HUDOcclusionPass.glsl.js
function i2(i3, t5) {
  const { vertex: s5, fragment: p } = i3;
  i3.include(d2, t5), s5.include(l2), s5.main.add(n2`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`), p.main.add(n2`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`);
}

// node_modules/@arcgis/core/chunks/HUDMaterial.glsl.js
function E(o8) {
  const i3 = new i(), E2 = o8.signedDistanceFieldEnabled;
  i3.include(u, o8), i3.vertex.include(m, o8);
  const { occlusionPass: H2, output: V2, oitPass: _ } = o8;
  if (H2) return i3.include(i2, o8), i3;
  const { vertex: I, fragment: q } = i3;
  i3.include(s3), i3.include(l, o8), i3.include(e4, o8), i3.include(n4), q.include(t3), q.include(e6), i3.varyings.add("vcolor", "vec4"), i3.varyings.add("vtc", "vec2"), i3.varyings.add("vsize", "vec2");
  const k = V2 === n3.Highlight, G = k && o8.occlusionTestEnabled;
  G && i3.varyings.add("voccluded", "float"), I.uniforms.add(new o7("viewport", (e7) => e7.camera.fullViewport), new e5("screenOffset", (o9, i4) => o(R, 2 * o9.screenOffset[0] * i4.camera.pixelRatio, 2 * o9.screenOffset[1] * i4.camera.pixelRatio)), new e5("anchorPosition", (e7) => U(e7)), new e3("materialColor", (e7) => e7.color), new s4("materialRotation", (e7) => e7.rotation)), w(I), E2 && (I.uniforms.add(new e3("outlineColor", (e7) => e7.outlineColor)), q.uniforms.add(new e3("outlineColor", (e7) => M(e7) ? e7.outlineColor : s), new s4("outlineSize", (e7) => M(e7) ? e7.outlineSize : 0))), o8.horizonCullingEnabled && I.uniforms.add(new o2("pointDistanceSphere", (e7, o9) => {
    const i4 = o9.camera.eye, r3 = e7.origin;
    return r(r3[0] - i4[0], r3[1] - i4[1], r3[2] - i4[2], t.radius);
  })), o8.pixelSnappingEnabled && I.include(l2), o8.hasScreenSizePerspective && (t4(I), o4(I)), o8.debugDrawLabelBorder && i3.varyings.add("debugBorderCoords", "vec4"), i3.attributes.add(e.UV0, "vec2"), i3.attributes.add(e.COLOR, "vec4"), i3.attributes.add(e.SIZE, "vec2"), i3.attributes.add(e.ROTATION, "float"), i3.attributes.add(e.FEATUREATTRIBUTE, "vec4"), I.code.add(o8.horizonCullingEnabled ? n2`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return  b > 0.0 && b < a && b * b  > a * c;
}` : n2`bool behindHorizon(vec3 posModel) { return false; }`), I.main.add(n2`
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }

      if (behindHorizon(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }

      vec2 inputSize;
      ${t2(o8.hasScreenSizePerspective, n2`
          inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
          vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`, n2`
          inputSize = size;
          vec2 screenOffsetScaled = screenOffset;`)}
      ${t2(o8.vvSize, n2`inputSize *= vvScale(featureAttribute).xx;`)}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${t2(o8.occlusionTestEnabled, n2`
      bool visible = testHUDVisibility(posProj);
      if (!visible) {
        vtc = vec2(0.0);
        ${t2(o8.debugDrawLabelBorder, "debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
        return;
      }`)}
      ${t2(G, n2`voccluded = visible ? 0.0 : 1.0;`)}
    `);
  const N = n2`
      vec2 uv01 = floor(uv0);
      vec2 uv = uv0 - uv01;
      quadOffset.xy = (uv01 - anchorPosition) * 2.0 * combinedSize;

      ${t2(o8.hasRotation, n2`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `, Z = o8.pixelSnappingEnabled ? E2 ? n2`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;` : n2`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}` : n2`posProj += quadOffset;`;
  I.main.add(n2`
    ${N}
    ${o8.vvColor ? "vcolor = interpolateVVColor(featureAttribute.y) * materialColor;" : "vcolor = color / 255.0 * materialColor;"}

    ${t2(V2 === n3.ObjectAndLayerIdColor, n2`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${n2.float(o6)};
    ${t2(E2, `alphaDiscard = alphaDiscard && outlineColor.a < ${n2.float(o6)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${Z}
      gl_Position = posProj;
    }

    vtc = uv;

    ${t2(o8.debugDrawLabelBorder, n2`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `), q.uniforms.add(new s2("tex", (e7) => e7.texture)), o8.occludedFragmentFade && (q.uniforms.add(new o5("depthMap", (e7) => e7.mainDepth)), q.uniforms.add(new e2("occludedOpacity", (e7) => e7.hudOccludedFragmentOpacity)));
  const J = o8.debugDrawLabelBorder ? n2`(isBorder > 0.0 ? 0.0 : ${n2.float(o6)})` : n2.float(o6), K = n2`
    ${t2(o8.debugDrawLabelBorder, n2`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    ${t2(o8.sampleSignedDistanceFieldTexelCenter, n2`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;`, n2`vec2 samplePos = vtc;`)}

    ${E2 ? n2`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgbaTofloat(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${J} ||
          fillPixelColor.a + outlinePixelColor.a < ${n2.float(o6)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${t2(!k, n2`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${J}) {
          discard;
        }

        ${t2(!k, n2`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      ` : n2`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${J}) {
            discard;
          }
          ${t2(!k, n2`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${t2(o8.occludedFragmentFade && !k, n2`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${t2(!k && o8.debugDrawLabelBorder, n2`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;
  switch (V2) {
    case n3.Color:
    case n3.ColorEmission:
      i3.outputs.add("fragColor", "vec4", 0), V2 === n3.ColorEmission && i3.outputs.add("fragEmission", "vec4", 1), _ === o3.ColorAlpha && i3.outputs.add("fragAlpha", "float", V2 === n3.ColorEmission ? 2 : 1), q.main.add(n2`
        ${K}
        ${t2(_ === o3.FrontFace, n2`fragColor.rgb /= fragColor.a;`)}
        ${t2(V2 === n3.ColorEmission, n2`fragEmission = vec4(0.0);`)}
        ${t2(_ === o3.ColorAlpha, n2`fragAlpha = fragColor.a;`)}`);
      break;
    case n3.ObjectAndLayerIdColor:
      q.main.add(n2`
        ${K}
        outputObjectAndLayerIdColor();`);
      break;
    case n3.Highlight:
      i3.include(d, o8), q.main.add(n2`
        ${K}
        outputHighlight(${t2(G, n2`voccluded == 1.0`, n2`false`)});`);
  }
  return i3;
}
function M(e7) {
  return e7.outlineColor[3] > 0 && e7.outlineSize > 0;
}
function U(e7) {
  return e7.textureIsSignedDistanceField ? H(e7.anchorPosition, e7.distanceFieldBoundingBox, R) : r2(R, e7.anchorPosition), R;
}
function H(o8, i3, r3) {
  o(r3, o8[0] * (i3[2] - i3[0]) + i3[0], o8[1] * (i3[3] - i3[1]) + i3[1]);
}
var R = n();
var V = Object.freeze(Object.defineProperty({ __proto__: null, build: E, calculateAnchorPosition: U }, Symbol.toStringTag, { value: "Module" }));

export {
  E,
  U,
  V
};
//# sourceMappingURL=chunk-Z3WUVJVY.js.map
