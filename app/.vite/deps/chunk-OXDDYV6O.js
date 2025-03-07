import {
  c,
  m,
  n as n2,
  p as p4,
  s as s2,
  s2 as s3,
  w as w2
} from "./chunk-BCVQ3HHZ.js";
import {
  p as p3
} from "./chunk-M5YS3OM7.js";
import {
  d as d2,
  e as e4
} from "./chunk-C5H3KDE3.js";
import {
  d
} from "./chunk-YIMQSH52.js";
import {
  p
} from "./chunk-LZBWOTLM.js";
import {
  f,
  p as p2,
  w
} from "./chunk-TWZMNVWK.js";
import {
  e as e3
} from "./chunk-QXP5ULTQ.js";
import {
  o as o2
} from "./chunk-W3SIP2H3.js";
import {
  e as e2
} from "./chunk-IG22ED74.js";
import {
  o
} from "./chunk-F6RMQNRI.js";
import {
  s
} from "./chunk-XUP22FSP.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  t as t2
} from "./chunk-BDV3SAJ7.js";
import {
  t as t3
} from "./chunk-OZ4EAB4F.js";
import {
  n,
  t
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";

// node_modules/@arcgis/core/chunks/LineMarker.glsl.js
function L(L2) {
  const k2 = new i(), { space: M, anchor: C, hasTip: D } = L2, O = M === s2.World;
  k2.include(c, L2), k2.include(n2, L2), k2.include(d2, L2);
  const { vertex: $, fragment: T } = k2;
  T.include(t2), f($, L2), k2.attributes.add(e.POSITION, "vec3"), k2.attributes.add(e.PREVPOSITION, "vec3"), k2.attributes.add(e.UV0, "vec2"), k2.varyings.add("vColor", "vec4"), k2.varyings.add("vpos", "vec3"), k2.varyings.add("vUV", "vec2"), k2.varyings.add("vSize", "float"), D && k2.varyings.add("vLineWidth", "float"), $.uniforms.add(new o("nearFar", ({ camera: e5 }) => e5.nearFar), new o2("viewport", ({ camera: e5 }) => e5.fullViewport)), $.code.add(n`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`), $.code.add(n`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`), O ? (k2.attributes.add(e.NORMAL, "vec3"), p2($), $.constants.add("tiltThreshold", "float", 0.7), $.code.add(n`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)) : $.code.add(n`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`);
  const W = O ? "vec3" : "vec2";
  return $.code.add(n`
      ${W} normalizedSegment(${W} pos, ${W} prev) {
        ${W} segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${O ? "vec3(0.0, 0.0, 0.0)" : "vec2(0.0, 0.0)"};
      }

      ${W} displace(${W} pos, ${W} prev, float displacementLen) {
        ${W} segment = normalizedSegment(pos, prev);

        ${W} displacementDirU = perpendicular(segment);
        ${W} displacementDirV = segment;

        ${C === p4.Tip ? "pos -= 0.5 * displacementLen * displacementDirV;" : ""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `), M === s2.Screen && ($.uniforms.add(new t3("inverseProjectionMatrix", ({ camera: e5 }) => e5.inverseProjectionMatrix)), $.code.add(n`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`), $.code.add(n`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`), $.uniforms.add(new e2("perScreenPixelRatio", ({ camera: e5 }) => e5.perScreenPixelRatio)), $.code.add(n`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${t(L2.hasCap, "if(prev.z > posLeft.z) {\n                vec2 diff = posLeft.xy - posRight.xy;\n                planeOrigin.xy += perpendicular(diff) / 2.0;\n             }")};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)), w($), $.main.add(n`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      float lineWidth = getLineWidth();
      float screenMarkerSize = getScreenMarkerSize();

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      clip(pos, prev);

      ${O ? n`${t(L2.hideOnShortSegments, n`
                if (areWorldMarkersHidden(pos, prev)) {
                  // Project out of clip space
                  gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
                  return;
                }`)}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
            vec4 displacedPosScreen = projectAndScale(pos);` : n`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${t(M === s2.Screen, n`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`)}`}
      forwardViewPosDepth(pos.xyz);
      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${t(!O, "vUV *= displacedPosScreen.w;")}
      ${t(D, "vLineWidth = lineWidth;")}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`), k2.fragment.include(p, L2), k2.include(p3, L2), T.uniforms.add(new e3("intrinsicColor", (e5) => e5.color), new s("tex", (e5) => e5.markerTexture)), T.include(e4), T.constants.add("texelSize", "float", 1 / m), T.code.add(n`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgbaTofloat(texture(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`), D && T.constants.add("relativeMarkerSize", "float", s3 / m).constants.add("relativeTipLineWidth", "float", w2).code.add(n`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${t(O, "halfTipLineWidth *= fwidth(samplePos.y);")}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `), k2.include(d, L2), T.main.add(n`
    discardBySlice(vpos);
    discardByTerrainDepth();

    vec4 finalColor = intrinsicColor * vColor;

    // Cancel out perspective correct interpolation if in screen space or draped
    vec2 samplePos = vUV ${t(!O, "* gl_FragCoord.w")};
    finalColor.a *= ${D ? "max(markerAlpha(samplePos), tipAlpha(samplePos))" : "markerAlpha(samplePos)"};
    outputColorHighlightOID(finalColor, vpos);`), k2;
}
var k = Object.freeze(Object.defineProperty({ __proto__: null, build: L }, Symbol.toStringTag, { value: "Module" }));

export {
  L,
  k
};
//# sourceMappingURL=chunk-OXDDYV6O.js.map
