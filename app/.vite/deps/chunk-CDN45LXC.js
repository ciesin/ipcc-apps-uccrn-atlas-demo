import {
  r
} from "./chunk-TERED6XM.js";
import {
  e as e3
} from "./chunk-ARZQ2ENM.js";
import {
  e as e5,
  p as p3,
  t as t5,
  u as u2,
  v
} from "./chunk-FBCKMXY6.js";
import {
  x
} from "./chunk-2ICSBW5I.js";
import {
  m,
  n2 as n3,
  o3
} from "./chunk-AY7NUQ6K.js";
import {
  n as n4,
  o,
  o2,
  t as t3
} from "./chunk-TP7H7H6D.js";
import {
  p as p4
} from "./chunk-M5YS3OM7.js";
import {
  e as e4
} from "./chunk-HJA3Q6AG.js";
import {
  e2 as e6,
  e3 as e7,
  s,
  t2 as t4
} from "./chunk-XJ5CGMWY.js";
import {
  d as d3,
  e as e9
} from "./chunk-C5H3KDE3.js";
import {
  d as d2
} from "./chunk-YIMQSH52.js";
import {
  p
} from "./chunk-LZBWOTLM.js";
import {
  d,
  f,
  p as p2
} from "./chunk-TWZMNVWK.js";
import {
  e as e8
} from "./chunk-R2BXFO5E.js";
import {
  s as s2
} from "./chunk-EDOH6SI4.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  n as n2,
  u
} from "./chunk-BSNHCIEC.js";
import {
  e as e2
} from "./chunk-D7JG6K4Y.js";
import {
  n,
  t as t2
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";
import {
  t
} from "./chunk-O2L6JAHP.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PathVertexPosition.glsl.js
var p5 = 8;
function f2(e10, c) {
  const f3 = e.FEATUREVALUE;
  e10.attributes.add(f3, "vec4");
  const n6 = e10.vertex;
  n6.code.add(n`
  bool isCapVertex() {
    return ${f3}.w == 1.0;
  }
  `), n6.uniforms.add(new e8("size", (e11) => e11.size)), c.vvSize ? (n6.uniforms.add(new e2("vvSizeMinSize", (e11) => e11.vvSize.minSize), new e2("vvSizeMaxSize", (e11) => e11.vvSize.maxSize), new e2("vvSizeOffset", (e11) => e11.vvSize.offset), new e2("vvSizeFactor", (e11) => e11.vvSize.factor)), n6.code.add(n`
    vec2 getSize() {
      return size * clamp(vvSizeOffset + ${f3}.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
    }
    `)) : n6.code.add(n`vec2 getSize(){
return size;
}`), c.vvOpacity ? (n6.constants.add("vvOpacityNumber", "int", p5), n6.uniforms.add(new s("vvOpacityValues", (e11) => e11.vvOpacity.values, p5), new s("vvOpacityOpacities", (e11) => e11.vvOpacity.opacityValues, p5)), n6.code.add(n`
    vec4 applyOpacity(vec4 color) {
      float value = ${f3}.z;
      if (value <= vvOpacityValues[0]) {
        return vec4( color.xyz, vvOpacityOpacities[0]);
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return vec4( color.xyz, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
        }
      }

      return vec4( color.xyz, vvOpacityOpacities[vvOpacityNumber - 1]);
    }
    `)) : n6.code.add(n`vec4 applyOpacity(vec4 color){
return color;
}`), c.vvColor ? (n6.constants.add("vvColorNumber", "int", e7), n6.uniforms.add(new s("vvColorValues", (e11) => e11.vvColor.values, e7), new e6("vvColorColors", (e11) => e11.vvColor.colors, e7)), n6.code.add(n`
    vec4 getColor() {
      float value = ${f3}.y;
      if (value <= vvColorValues[0]) {
        return applyOpacity(vvColorColors[0]);
      }

      for (int i = 1; i < vvColorNumber; ++i) {
        if (vvColorValues[i] >= value) {
          float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
          return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
        }
      }

      return applyOpacity(vvColorColors[vvColorNumber - 1]);
    }
    `)) : n6.code.add(n`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`), e10.include(o), e10.attributes.add(e.PROFILERIGHT, "vec4"), e10.attributes.add(e.PROFILEUP, "vec4"), e10.attributes.add(e.PROFILEVERTEXANDNORMAL, "vec4"), n6.code.add(n`vec3 calculateVPos() {
vec2 size = getSize();
vec3 origin = position;
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileVertex = profileVertexAndNormal.xy * size;
vec2 profileNormal = profileVertexAndNormal.zw;
float positionOffsetAlongProfilePlaneNormal = 0.0;
float normalOffsetAlongProfilePlaneNormal = 0.0;`), n6.code.add(n`if(!isCapVertex()) {
vec2 rotationRight = vec2(profileRight.w, profileUp.w);
float maxDistance = length(rotationRight);`), n6.code.add(n`rotationRight = maxDistance > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
}else{
positionOffsetAlongProfilePlaneNormal = profileRight.w * size[0];
normalOffsetAlongProfilePlaneNormal = profileUp.w;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}`), n6.code.add(n`vec3 localNormal() {
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileNormal = profileVertexAndNormal.zw;
vec3 normal = right * profileNormal.x + up * profileNormal.y;
if(isCapVertex()) {
normal += forward * profileUp.w;
}
return normal;
}`);
}
var n5 = class extends t4 {
  constructor() {
    super(...arguments), this.size = t(1, 1);
  }
};

// node_modules/@arcgis/core/chunks/Path.glsl.js
function F(F2) {
  const V2 = new i(), { vertex: _, fragment: x2 } = V2;
  f(_, F2), V2.varyings.add("vpos", "vec3"), V2.include(f2, F2);
  const { output: z, spherical: M, pbrMode: H, receiveShadows: N } = F2, k = u(z);
  switch ((k || z === n2.ObjectAndLayerIdColor) && (V2.include(o2, F2), V2.include(x, F2), V2.include(n4, F2), V2.include(e4, F2), V2.include(d3, F2), V2.varyings.add("vnormal", "vec3"), V2.varyings.add("vcolor", "vec4"), _.main.add(n`
      vpos = calculateVPos();
      vnormal = normalize(localNormal());
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);

      gl_Position = transformPosition(proj, view, vpos);

      ${k ? "forwardLinearDepth();" : ""}
      forwardObjectAndLayerIdColor();

      vcolor = getColor();`)), z) {
    case n2.ColorEmission:
    case n2.Color:
      V2.include(m, F2), V2.include(v, F2), V2.include(t5, F2), V2.include(x, F2), V2.include(e3, F2), V2.fragment.include(p, F2), V2.include(p4, F2), d(x2, F2), u2(x2), p3(x2), x2.uniforms.add(_.uniforms.get("localOrigin"), new e2("ambient", (e10) => e10.ambient), new e2("diffuse", (e10) => e10.diffuse), new e2("specular", (e10) => e10.specular), new s2("opacity", (e10) => e10.opacity)), x2.include(e9), o3(x2), x2.main.add(n`
        discardBySlice(vpos);
        discardByTerrainDepth();

        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        vec3 posWorld = vpos + localOrigin;
        vec3 normalGround = ${M ? "normalize(posWorld);" : "vec3(0.0, 0.0, 1.0);"}

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        float shadow = ${N ? "max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth));" : M ? "lightingGlobalFactor * (1.0 - additionalAmbientScale);" : "0.0;"}
        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;
        albedo += 0.25 * specular; // don't completely ignore specular for now

        ${t2(H === n3.Schematic, "float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];\n           vec4 emission = getEmissions();")}

        vec3 shadedColor = ${H === n3.Schematic ? "evaluateSceneLightingPBR(normal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);" : "evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);"}
        vec4 finalColor = vec4(shadedColor, combinedOpacity);
        outputColorHighlightOID(finalColor, vpos);`);
      break;
    case n2.Depth:
      V2.include(o2, F2), _.main.add(n`vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);`), V2.fragment.include(p, F2), x2.main.add(n`discardBySlice(vpos);`);
      break;
    case n2.Shadow:
    case n2.ShadowHighlight:
    case n2.ShadowExcludeHighlight:
    case n2.ViewshedShadow:
      V2.include(o2, F2), t3(V2), V2.varyings.add("depth", "float"), _.main.add(n`vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);`), V2.fragment.include(p, F2), V2.include(e5, F2), x2.main.add(n`discardBySlice(vpos);
outputDepth(depth);`);
      break;
    case n2.ObjectAndLayerIdColor:
      V2.fragment.include(p, F2), x2.main.add(n`discardBySlice(vpos);
outputObjectAndLayerIdColor();`);
      break;
    case n2.Normal:
      V2.include(o2, F2), V2.include(r, F2), p2(_), V2.varyings.add("vnormal", "vec3"), _.main.add(n`vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);`), V2.fragment.include(p, F2), x2.main.add(n`discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);`);
      break;
    case n2.Highlight:
      V2.include(o2, F2), V2.include(r, F2), V2.varyings.add("vnormal", "vec3"), _.main.add(n`vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);`), V2.fragment.include(p, F2), V2.include(d2, F2), x2.main.add(n`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`);
  }
  return V2;
}
var V = Object.freeze(Object.defineProperty({ __proto__: null, build: F }, Symbol.toStringTag, { value: "Module" }));

export {
  n5 as n,
  F,
  V
};
//# sourceMappingURL=chunk-CDN45LXC.js.map
