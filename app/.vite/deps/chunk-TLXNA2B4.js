import {
  r
} from "./chunk-TERED6XM.js";
import {
  m as m2,
  o as o5
} from "./chunk-T7OYNVTV.js";
import {
  m,
  x
} from "./chunk-2ICSBW5I.js";
import {
  n2 as n5,
  o3 as o4,
  t2 as t
} from "./chunk-AY7NUQ6K.js";
import {
  n as n6,
  o2
} from "./chunk-TP7H7H6D.js";
import {
  p as p2
} from "./chunk-M5YS3OM7.js";
import {
  e as e3
} from "./chunk-HJA3Q6AG.js";
import {
  d as d3,
  e as e5
} from "./chunk-C5H3KDE3.js";
import {
  d as d2,
  o as o3
} from "./chunk-YIMQSH52.js";
import {
  p
} from "./chunk-LZBWOTLM.js";
import {
  d,
  f
} from "./chunk-TWZMNVWK.js";
import {
  e as e2
} from "./chunk-QXP5ULTQ.js";
import {
  e as e4
} from "./chunk-R2BXFO5E.js";
import {
  s as s3
} from "./chunk-EDOH6SI4.js";
import {
  s as s2
} from "./chunk-XUP22FSP.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  n as n4,
  u
} from "./chunk-BSNHCIEC.js";
import {
  n as n3
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";
import {
  n as n2
} from "./chunk-O2L6JAHP.js";
import {
  o
} from "./chunk-K35H6D4D.js";
import {
  n
} from "./chunk-MHM4GDCM.js";
import {
  s
} from "./chunk-363AT5UF.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/WaterDistortion.glsl.js
function u2(t2) {
  t2.fragment.uniforms.add(new s2("texWaveNormal", (e6) => e6.waveNormal), new s2("texWavePerturbation", (e6) => e6.wavePerturbation), new e2("waveParams", (e6) => s(c, e6.waveStrength, e6.waveTextureRepeat, e6.flowStrength, e6.flowOffset)), new e4("waveDirection", (t3) => o(n7, t3.waveDirection[0] * t3.waveVelocity, t3.waveDirection[1] * t3.waveVelocity))), t2.include(o5), t2.fragment.code.add(n3`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`);
}
var c = n();
var n7 = n2();

// node_modules/@arcgis/core/chunks/WaterSurface.glsl.js
function O(O2) {
  const S2 = new i(), { vertex: D, fragment: N } = S2, { output: _, draped: F, receiveShadows: M } = O2;
  f(D, O2), S2.include(o2, O2), S2.attributes.add(e.POSITION, "vec3"), S2.attributes.add(e.UV0, "vec2");
  const z = new e2("waterColor", (e6) => e6.color);
  if (u(_) && F) return S2.varyings.add("vpos", "vec3"), D.uniforms.add(z), D.main.add(n3`
      if (waterColor.a < ${n3.float(o3)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vpos = position;
      gl_Position = transformPosition(proj, view, vpos);`), N.uniforms.add(z), N.main.add(n3`fragColor = waterColor;`), S2;
  switch (u(_) && (S2.include(r, O2), S2.include(n6, O2), S2.varyings.add("vuv", "vec2"), S2.varyings.add("vpos", "vec3"), S2.varyings.add("vnormal", "vec3"), S2.varyings.add("vtbnMatrix", "mat3"), D.uniforms.add(z), D.main.add(n3`
      if (waterColor.a < ${n3.float(o3)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vuv = uv0;
      vpos = position;

      vnormal = getLocalUp(vpos, localOrigin);
      vtbnMatrix = getTBNMatrix(vnormal);
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);

      gl_Position = transformPosition(proj, view, vpos);
      forwardLinearDepth();`)), S2.include(d3, O2), O2.output) {
    case n4.Color:
    case n4.ColorEmission:
      S2.include(m, { pbrMode: n5.Disabled, lightingSphericalHarmonicsOrder: 2 }), S2.include(u2), S2.include(x, O2), S2.include(m2, O2), S2.fragment.include(p, O2), S2.include(p2, O2), N.include(e5), d(N, O2), t(N), o4(N), N.uniforms.add(z, new s3("timeElapsed", ({ timeElapsed: e6 }) => e6), D.uniforms.get("view"), D.uniforms.get("localOrigin")).main.add(n3`
        discardBySlice(vpos);
        discardByTerrainDepth();
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${M ? n3`1.0 - readShadowMap(vpos, linearDepth)` : "1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        fragColor = delinearizeGamma(final);
        outputColorHighlightOID(fragColor, vpos);`);
      break;
    case n4.Normal:
      S2.include(r, O2), S2.include(u2, O2), S2.fragment.include(p, O2), S2.varyings.add("vpos", "vec3"), S2.varyings.add("vuv", "vec2"), D.uniforms.add(z), D.main.add(n3`
        if (waterColor.a < ${n3.float(o3)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        gl_Position = transformPosition(proj, view, vpos);`), N.uniforms.add(new s3("timeElapsed", ({ timeElapsed: e6 }) => e6)).main.add(n3`discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
fragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);`);
      break;
    case n4.Highlight:
      S2.include(d2, O2), S2.varyings.add("vpos", "vec3"), D.uniforms.add(z), D.main.add(n3`
        if (waterColor.a < ${n3.float(o3)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);`), S2.fragment.include(p, O2), N.main.add(n3`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`);
      break;
    case n4.ObjectAndLayerIdColor:
      S2.include(e3, O2), S2.varyings.add("vpos", "vec3"), D.uniforms.add(z), D.main.add(n3`
        if (waterColor.a < ${n3.float(o3)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
        forwardObjectAndLayerIdColor();`), S2.fragment.include(p, O2), N.main.add(n3`discardBySlice(vpos);
outputObjectAndLayerIdColor();`);
  }
  return S2;
}
var S = Object.freeze(Object.defineProperty({ __proto__: null, build: O }, Symbol.toStringTag, { value: "Module" }));

export {
  O,
  S
};
//# sourceMappingURL=chunk-TLXNA2B4.js.map
