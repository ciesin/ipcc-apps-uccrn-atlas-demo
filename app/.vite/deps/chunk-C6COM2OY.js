import {
  e as e3
} from "./chunk-6BJQY5YG.js";
import {
  o2 as o
} from "./chunk-TP7H7H6D.js";
import {
  p as p2
} from "./chunk-M5YS3OM7.js";
import {
  e as e5
} from "./chunk-HJA3Q6AG.js";
import {
  l
} from "./chunk-TD7VJ4Z2.js";
import {
  d as d2,
  e as e6
} from "./chunk-C5H3KDE3.js";
import {
  p
} from "./chunk-LZBWOTLM.js";
import {
  d,
  f
} from "./chunk-TWZMNVWK.js";
import {
  e as e4
} from "./chunk-QXP5ULTQ.js";
import {
  e as e2
} from "./chunk-IG22ED74.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  n as n2
} from "./chunk-BSNHCIEC.js";
import {
  n
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/PatternStyle.js
var a;
!function(a2) {
  a2[a2.Horizontal = 0] = "Horizontal", a2[a2.Vertical = 1] = "Vertical", a2[a2.Cross = 2] = "Cross", a2[a2.ForwardDiagonal = 3] = "ForwardDiagonal", a2[a2.BackwardDiagonal = 4] = "BackwardDiagonal", a2[a2.DiagonalCross = 5] = "DiagonalCross", a2[a2.COUNT = 6] = "COUNT";
}(a || (a = {}));

// node_modules/@arcgis/core/chunks/Pattern.glsl.js
var w = 0.70710678118;
var b = w;
var h = 0.08715574274;
var y = 10;
var S = 1;
function j(j2) {
  const C2 = new i(), { vertex: T, fragment: P, attributes: R, varyings: V } = C2, D = j2.output === n2.Highlight;
  f(T, j2), C2.include(o, j2), C2.include(e3, j2), C2.include(l, j2), C2.include(e5, j2), C2.fragment.include(p, j2), C2.include(p2, j2), C2.include(d2, j2), j2.draped ? T.uniforms.add(new e2("worldToScreenRatio", (e7) => 1 / e7.screenToPCSRatio)) : R.add(e.BOUNDINGRECT, "mat3"), R.add(e.POSITION, "vec3"), R.add(e.UVMAPSPACE, "vec4"), j2.vvColor && R.add(e.COLORFEATUREATTRIBUTE, "float"), j2.hasVertexColors || V.add("vColor", "vec4"), V.add("vpos", "vec3"), V.add("vuv", "vec2"), T.uniforms.add(new e4("uColor", (e7) => e7.color));
  const O = j2.style === a.ForwardDiagonal || j2.style === a.BackwardDiagonal || j2.style === a.DiagonalCross;
  return O && T.code.add(n`
      const mat2 rotate45 = mat2(${n.float(w)}, ${n.float(-0.70710678118)},
                                 ${n.float(b)}, ${n.float(w)});
    `), j2.draped || (d(T, j2), T.uniforms.add(new e2("worldToScreenPerDistanceRatio", (e7) => 1 / e7.camera.perScreenPixelRatio)), T.code.add(n`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`), T.code.add(n`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`), T.code.add(n`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${n.float(h)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `)), T.code.add(n`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${O ? " * rotate45" : ""};
      vec2 uvCellOrigin = uvMapSpace.zw ${O ? " * rotate45" : ""};

      ${j2.draped ? "" : n`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${n.float(y)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `), T.main.add(n`
    vuv = scaledUV();
    vpos = position;
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardNormalizedVertexColor();
    forwardObjectAndLayerIdColor();
    ${j2.hasVertexColors ? "vColor *= uColor;" : j2.vvColor ? "vColor = uColor * interpolateVVColor(colorFeatureAttribute);" : "vColor = uColor;"}
    gl_Position = transformPosition(proj, view, vpos);
  `), P.include(e6), j2.draped && P.uniforms.add(new e2("texelSize", (e7) => 1 / e7.camera.pixelRatio)), D || (P.code.add(n`
      const float lineWidth = ${n.float(S)};
      const float spacing = ${n.float(y)};
      const float spacingINV = ${n.float(1 / y)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `), j2.draped || P.code.add(n`const int maxSamples = 5;
float sampleAA(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`)), P.main.add(n`
    discardBySlice(vpos);
    discardByTerrainDepth();
    vec4 color = vColor;
    ${D ? "" : n`color.a *= ${x(j2)};`}
    outputColorHighlightOID(color, vpos);
  `), C2;
}
function x(e7) {
  function o2(o3) {
    return e7.draped ? n`coverage(vuv.${o3}, texelSize)` : n`sampleAA(vuv.${o3})`;
  }
  switch (e7.style) {
    case a.ForwardDiagonal:
    case a.Horizontal:
      return o2("y");
    case a.BackwardDiagonal:
    case a.Vertical:
      return o2("x");
    case a.DiagonalCross:
    case a.Cross:
      return n`1.0 - (1.0 - ${o2("x")}) * (1.0 - ${o2("y")})`;
    default:
      return "0.0";
  }
}
var C = Object.freeze(Object.defineProperty({ __proto__: null, build: j }, Symbol.toStringTag, { value: "Module" }));

export {
  a,
  j,
  C
};
//# sourceMappingURL=chunk-C6COM2OY.js.map
