import {
  c,
  n as n4,
  s as s5
} from "./chunk-BCVQ3HHZ.js";
import {
  a
} from "./chunk-OBOMTFRH.js";
import {
  i as i2
} from "./chunk-NQBVVSVQ.js";
import {
  t as t4
} from "./chunk-ZJIETAJ2.js";
import {
  d,
  d2,
  p as p2
} from "./chunk-M5YS3OM7.js";
import {
  e as e4
} from "./chunk-HJA3Q6AG.js";
import {
  d as d4,
  e as e5
} from "./chunk-C5H3KDE3.js";
import {
  o as o2
} from "./chunk-YIMQSH52.js";
import {
  p
} from "./chunk-LZBWOTLM.js";
import {
  d as d3,
  f,
  w
} from "./chunk-TWZMNVWK.js";
import {
  e as e3
} from "./chunk-QXP5ULTQ.js";
import {
  o as o3
} from "./chunk-W3SIP2H3.js";
import {
  e as e2
} from "./chunk-IG22ED74.js";
import {
  o
} from "./chunk-F6RMQNRI.js";
import {
  s as s4
} from "./chunk-EDOH6SI4.js";
import {
  s as s3
} from "./chunk-XUP22FSP.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  t as t2
} from "./chunk-BDV3SAJ7.js";
import {
  n as n3
} from "./chunk-BSNHCIEC.js";
import {
  t as t3
} from "./chunk-OZ4EAB4F.js";
import {
  n as n2,
  t
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";
import {
  n,
  s as s2
} from "./chunk-MHM4GDCM.js";
import {
  s
} from "./chunk-363AT5UF.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/stippleTextureRepository.js
function c2(t6) {
  return t6.pattern.map((e7) => Math.round(e7 * t6.pixelRatio));
}
function f2(t6) {
  if (null == t6) return 1;
  const e7 = c2(t6);
  return Math.floor(e7.reduce((t7, e8) => t7 + e8));
}
function s6(t6) {
  return c2(t6).reduce((t7, e7) => Math.max(t7, e7));
}

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/ensureColor4.js
function s7(t6) {
  return null == t6 ? s2 : 4 === t6.length ? t6 : s(c3, t6[0], t6[1], t6[2], 1);
}
var c3 = n();

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl.js
function f3(n5, d5) {
  if (!d5.stippleEnabled) return void n5.fragment.code.add(n2`float getStippleAlpha() { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);
  const f4 = !(d5.draped && d5.stipplePreferContinuous), { vertex: g, fragment: h } = n5;
  h.include(t2), d5.draped || (d3(g, d5), g.uniforms.add(new e2("worldToScreenPerDistanceRatio", ({ camera: e7 }) => 1 / e7.perScreenPixelRatio)).code.add(n2`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)), n5.varyings.add("vStippleDistance", "float"), n5.varyings.add("vStippleDistanceLimits", "vec2"), n5.varyings.add("vStipplePatternStretch", "float"), g.code.add(n2`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${n2.float(u)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `), g.code.add(n2`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`), g.code.add(n2`
    if (segmentLengthPseudoScreen >= ${f4 ? "patternLength" : "1e4"}) {
  `), w(g), g.code.add(n2`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`), h.uniforms.add(new s3("stipplePatternTexture", (e7) => e7.stippleTexture), new s4("stipplePatternSDFNormalizer", (e7) => m(e7.stipplePattern)), new s4("stipplePatternPixelSizeInv", (e7) => 1 / S(e7))), d5.stippleOffColorEnabled && h.uniforms.add(new e3("stippleOffColor", (e7) => s7(e7.stippleOffColor))), h.code.add(n2`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgbaTofloat(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`), h.code.add(n2`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${t(!d5.stippleOffColorEnabled, "if (stippleAlpha < threshold) { discard; }")}
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${d5.stippleOffColorEnabled ? "mix(color, stippleOffColor, stippleAlpha)" : "vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `);
}
function m(e7) {
  return e7 ? (Math.floor(0.5 * (s6(e7) - 1)) + 0.5) / e7.pixelRatio : 1;
}
function S(e7) {
  const t6 = e7.stipplePattern;
  return t6 ? f2(e7.stipplePattern) / t6.pixelRatio : 1;
}
var u = 0.4;

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RibbonLineTechniqueConfiguration.js
var s8;
!function(o5) {
  o5[o5.BUTT = 0] = "BUTT", o5[o5.SQUARE = 1] = "SQUARE", o5[o5.ROUND = 2] = "ROUND", o5[o5.COUNT = 3] = "COUNT";
}(s8 || (s8 = {}));
var p4 = class extends a {
  constructor() {
    super(...arguments), this.capType = s8.BUTT, this.hasPolygonOffset = false, this.writeDepth = false, this.draped = false, this.stippleEnabled = false, this.stippleOffColorEnabled = false, this.stipplePreferContinuous = true, this.roundJoins = false, this.applyMarkerOffset = false, this.vvSize = false, this.vvColor = false, this.vvOpacity = false, this.falloffEnabled = false, this.innerColorEnabled = false, this.hasOccludees = false, this.occluder = false, this.terrainDepthTest = false, this.cullAboveTerrain = false, this.wireframe = false, this.discardInvisibleFragments = false, this.objectAndLayerIdColorInstanced = false, this.textureCoordinateType = d.None, this.emissionSource = d2.None, this.occlusionPass = false, this.hasVvInstancing = true, this.hasSliceTranslatedView = true;
  }
};
r([i2({ count: s8.COUNT })], p4.prototype, "capType", void 0), r([i2()], p4.prototype, "hasPolygonOffset", void 0), r([i2()], p4.prototype, "writeDepth", void 0), r([i2()], p4.prototype, "draped", void 0), r([i2()], p4.prototype, "stippleEnabled", void 0), r([i2()], p4.prototype, "stippleOffColorEnabled", void 0), r([i2()], p4.prototype, "stipplePreferContinuous", void 0), r([i2()], p4.prototype, "roundJoins", void 0), r([i2()], p4.prototype, "applyMarkerOffset", void 0), r([i2()], p4.prototype, "vvSize", void 0), r([i2()], p4.prototype, "vvColor", void 0), r([i2()], p4.prototype, "vvOpacity", void 0), r([i2()], p4.prototype, "falloffEnabled", void 0), r([i2()], p4.prototype, "innerColorEnabled", void 0), r([i2()], p4.prototype, "hasOccludees", void 0), r([i2()], p4.prototype, "occluder", void 0), r([i2()], p4.prototype, "terrainDepthTest", void 0), r([i2()], p4.prototype, "cullAboveTerrain", void 0), r([i2()], p4.prototype, "wireframe", void 0), r([i2()], p4.prototype, "discardInvisibleFragments", void 0), r([i2()], p4.prototype, "objectAndLayerIdColorInstanced", void 0);

// node_modules/@arcgis/core/chunks/RibbonLine.glsl.js
var j = 1;
function C(C2) {
  const F2 = new i(), { attributes: P, varyings: R, vertex: z, fragment: A } = F2, { applyMarkerOffset: T, draped: V, output: O, capType: W, stippleEnabled: E, falloffEnabled: I, roundJoins: N, wireframe: M, innerColorEnabled: _ } = C2;
  F2.include(t4), F2.include(c, C2), F2.include(f3, C2), F2.include(e4, C2), F2.include(d4, C2);
  const k = T && !V;
  k && (z.uniforms.add(new s4("markerScale", (e7) => e7.markerScale)), F2.include(n4, { space: s5.World })), f(z, C2), z.uniforms.add(new t3("inverseProjectionMatrix", (e7) => e7.camera.inverseProjectionMatrix), new o("nearFar", (e7) => e7.camera.nearFar), new s4("miterLimit", (e7) => "miter" !== e7.join ? 0 : e7.miterLimit), new o3("viewport", (e7) => e7.camera.fullViewport)), z.constants.add("LARGE_HALF_FLOAT", "float", 65500), P.add(e.POSITION, "vec3"), P.add(e.PREVPOSITION, "vec3"), P.add(e.NEXTPOSITION, "vec3"), P.add(e.SUBDIVISIONFACTOR, "float"), P.add(e.UV0, "vec2"), R.add("vColor", "vec4"), R.add("vpos", "vec3"), R.add("vLineDistance", "float"), R.add("vLineWidth", "float");
  const B = E;
  B && R.add("vLineSizeInv", "float");
  const U = W === s8.ROUND, $ = E && U, H = I || $;
  H && R.add("vLineDistanceNorm", "float"), U && (R.add("vSegmentSDF", "float"), R.add("vReverseSegmentSDF", "float")), z.code.add(n2`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`), z.code.add(n2`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`), z.code.add(n2`void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
float vnp = nearFar[0] * 0.99;
if(pos.z > -nearFar[0]) {
if (!isStartVertex) {
if(prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if(next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
forwardViewPosDepth(pos.xyz);
pos = projectAndScale(pos);
next = projectAndScale(next);
prev = projectAndScale(prev);
}`), w(z), z.constants.add("aaWidth", "float", E ? 0 : 1).main.add(n2`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${B ? n2`vLineSizeInv = 1.0 / lineSize;` : ""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `), k && z.main.add(n2`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`), z.main.add(n2`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`);
  (E || U) && z.main.add(n2`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${U ? n2`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);` : ""}
    `), z.main.add(n2`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`), N ? z.main.add(n2`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${E ? n2`min(1.0, subdivisionFactor * ${n2.float((j + 2) / (j + 1))})` : n2`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `) : z.main.add(n2`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);
  const J = W !== s8.BUTT;
  return z.main.add(n2`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${J ? n2`capDisplacementDir = isStartVertex ? -right : left;` : ""}
    }
  `), z.main.add(n2`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${H ? n2`vLineDistanceNorm = lineDistNorm;` : ""}

    pos.xy += dpos;
  `), U && z.main.add(n2`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`), E && (V ? z.uniforms.add(new e2("worldToScreenRatio", (e7) => 1 / e7.screenToPCSRatio)) : z.main.add(n2`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`), z.main.add(n2`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`), V ? z.main.add(n2`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`) : z.main.add(n2`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`), z.uniforms.add(new s4("stipplePatternPixelSize", (e7) => S(e7))), z.main.add(n2`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)), z.main.add(n2`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${M && !V ? "pos.z -= 0.001 * pos.w;" : ""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`), F2.fragment.include(p, C2), F2.include(p2, C2), A.include(e5), A.main.add(n2`discardBySlice(vpos);
discardByTerrainDepth();`), M ? A.main.add(n2`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`) : (U && A.main.add(n2`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${n2.float(o2)}) {
          discard;
        }
      `), $ ? A.main.add(n2`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${n2.float(o2)}, stippleCoverage);
      `) : A.main.add(n2`float stippleAlpha = getStippleAlpha();`), O !== n3.ObjectAndLayerIdColor && A.main.add(n2`discardByStippleAlpha(stippleAlpha, ${n2.float(o2)});`), A.uniforms.add(new e3("intrinsicColor", (e7) => e7.color)), A.main.add(n2`vec4 color = intrinsicColor * vColor;`), _ && (A.uniforms.add(new e3("innerColor", (e7) => e7.innerColor ?? e7.color), new s4("innerWidth", (e7, i3) => e7.innerWidth * i3.camera.pixelRatio)), A.main.add(n2`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)), A.main.add(n2`vec4 finalColor = blendStipple(color, stippleAlpha);`), I && (A.uniforms.add(new s4("falloff", (e7) => e7.falloff)), A.main.add(n2`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)), E || A.main.add(n2`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)), A.main.add(n2`outputColorHighlightOID(finalColor, vpos);`), F2;
}
var F = Object.freeze(Object.defineProperty({ __proto__: null, build: C, ribbonlineNumRoundJoinSubdivisions: j }, Symbol.toStringTag, { value: "Module" }));

export {
  s8 as s,
  p4 as p,
  j,
  C,
  F
};
//# sourceMappingURL=chunk-YC4GT4R7.js.map
