import {
  a as a3,
  m as m2
} from "./chunk-2ICSBW5I.js";
import {
  R,
  h,
  l,
  l2,
  t as t3,
  t2 as t4
} from "./chunk-WP2IQPQN.js";
import {
  a as a4,
  e as e2,
  n2 as n6,
  n3 as n7,
  o2 as o3,
  o3 as o4,
  t2 as t5
} from "./chunk-AY7NUQ6K.js";
import {
  t as t6
} from "./chunk-ZJIETAJ2.js";
import {
  B,
  g
} from "./chunk-TKKZ7DIH.js";
import {
  e as e3
} from "./chunk-ZPEFCSMC.js";
import {
  o as o2
} from "./chunk-JZNIMAZ2.js";
import {
  c
} from "./chunk-P3ZDIFZS.js";
import {
  f
} from "./chunk-QVWYY3W4.js";
import {
  g as g2,
  v
} from "./chunk-67UIBFO4.js";
import {
  e
} from "./chunk-IG22ED74.js";
import {
  n as n5
} from "./chunk-BSNHCIEC.js";
import {
  n as n4
} from "./chunk-OULJFYM2.js";
import {
  a as a2
} from "./chunk-YVJ7MJNT.js";
import {
  p,
  w
} from "./chunk-5AJMZDUM.js";
import {
  D,
  G,
  _,
  t as t2
} from "./chunk-CRKFUUKK.js";
import {
  n as n3
} from "./chunk-O2L6JAHP.js";
import {
  o
} from "./chunk-K35H6D4D.js";
import {
  t
} from "./chunk-BV7O6P7Z.js";
import {
  r as r3
} from "./chunk-6P7HXSJ6.js";
import {
  d
} from "./chunk-YSPSOPLL.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  r2
} from "./chunk-M6FNW7GP.js";
import {
  n as n2
} from "./chunk-5HI5HAKB.js";
import {
  n
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js
function e4(e6, l4) {
  switch (l4.output) {
    case n5.Shadow:
    case n5.ShadowHighlight:
    case n5.ShadowExcludeHighlight:
    case n5.ViewshedShadow:
      e6.fragment.include(a3), e6.fragment.code.add(n4`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);
  }
}

// node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOBlurTechnique.js
var l3 = class extends l {
  constructor(r5, s) {
    super(r5, s, new t3(f, () => import("./SSAOBlur.glsl-OA7XPJLX.js")));
  }
  initializePipeline() {
    return B({ colorWrite: g });
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAONoiseData.js
var e5 = "eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";

// node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOParameters.js
var r4 = class extends c {
  constructor() {
    super(...arguments), this.projScale = 1;
  }
};
var t7 = class extends r4 {
  constructor() {
    super(...arguments), this.intensity = 1;
  }
};
var o5 = class extends c {
};
var c2 = class extends o5 {
  constructor() {
    super(...arguments), this.blurSize = n3();
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOTechnique.js
var t8 = class extends l {
  constructor(r5, s) {
    super(r5, s, new t3(g2, () => import("./SSAO.glsl-FV2MVCW5.js")));
  }
  initializePipeline() {
    return B({ colorWrite: g });
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAO.js
var A = 2;
var E = class extends h {
  constructor(e6) {
    super(e6), this.consumes = { required: ["normals"] }, this.produces = t4.SSAO, this.isEnabled = () => false, this._enableTime = n2(0), this._passParameters = new t7(), this._drawParameters = new c2();
  }
  initialize() {
    const e6 = Uint8Array.from(atob(e5), (e7) => e7.charCodeAt(0)), r5 = new p();
    r5.wrapMode = D.CLAMP_TO_EDGE, r5.pixelFormat = G.RGB, r5.wrapMode = D.REPEAT, r5.hasMipmap = true, r5.width = 32, r5.height = 32, this._passParameters.noiseTexture = new w(this.renderingContext, r5, e6), this.techniques.precompile(t8), this.techniques.precompile(l3), this.addHandles(d(() => this.isEnabled(), () => this._enableTime = n2(0)));
  }
  destroy() {
    this._passParameters.noiseTexture = r2(this._passParameters.noiseTexture);
  }
  render(e6) {
    const s = this.bindParameters, t10 = e6.find(({ name: e7 }) => "normals" === e7), o6 = t10 == null ? void 0 : t10.getTexture(), a5 = t10 == null ? void 0 : t10.getTexture(t2), c3 = this.fboCache, d2 = s.camera, f2 = d2.fullViewport[2], b = d2.fullViewport[3], _2 = Math.round(f2 / A), P = Math.round(b / A), x = this.techniques.get(t8), q = this.techniques.get(l3);
    if (!x.compiled || !q.compiled) return this._enableTime = n2(performance.now()), this.requestRender(a2.UPDATE), c3.acquire(_2, P, t4.SSAO, R.RED);
    0 === this._enableTime && (this._enableTime = n2(performance.now()));
    const E2 = this.renderingContext, y = this.view.qualitySettings.fadeDuration, R2 = d2.relativeElevation, v3 = r3((o3 - R2) / (o3 - e2), 0, 1), C = y > 0 ? Math.min(y, performance.now() - this._enableTime) / y : 1, D2 = C * v3;
    this._passParameters.normalTexture = o6, this._passParameters.depthTexture = a5, this._passParameters.projScale = 1 / d2.computeScreenPixelSizeAtDist(1), this._passParameters.intensity = 4 * O / v(d2) ** 6 * D2;
    const V = c3.acquire(f2, b, "ssao input", R.RG);
    E2.bindFramebuffer(V.fbo), E2.setViewport(0, 0, f2, b), E2.bindTechnique(x, s, this._passParameters, this._drawParameters), E2.screen.draw();
    const M = c3.acquire(_2, P, "ssao blur", R.RED);
    E2.bindFramebuffer(M.fbo), this._drawParameters.colorTexture = V.getTexture(), o(this._drawParameters.blurSize, 0, A / b), E2.bindTechnique(q, s, this._passParameters, this._drawParameters), E2.setViewport(0, 0, _2, P), E2.screen.draw(), V.release();
    const L = c3.acquire(_2, P, t4.SSAO, R.RED);
    return E2.bindFramebuffer(L.fbo), E2.setViewport(0, 0, f2, b), E2.setClearColor(1, 1, 1, 0), E2.clear(_.COLOR), this._drawParameters.colorTexture = M.getTexture(), o(this._drawParameters.blurSize, A / f2, 0), E2.bindTechnique(q, s, this._passParameters, this._drawParameters), E2.setViewport(0, 0, _2, P), E2.screen.draw(), E2.setViewport4fv(d2.fullViewport), M.release(), C < 1 && this.requestRender(a2.UPDATE), L;
  }
};
r([m()], E.prototype, "consumes", void 0), r([m()], E.prototype, "produces", void 0), r([m({ constructOnly: true })], E.prototype, "isEnabled", void 0), E = r([a("esri.views.3d.webgl-engine.effects.ssao.SSAO")], E);
var O = 0.5;

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js
function t9(t10, o6) {
  const n8 = t10.fragment;
  o6.receiveAmbientOcclusion ? (n8.uniforms.add(new o2("ssaoTex", (e6) => {
    var _a;
    return (_a = e6.ssao) == null ? void 0 : _a.getTexture();
  })), n8.constants.add("blurSizePixelsInverse", "float", 1 / A), n8.code.add(n4`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)) : n8.code.add(n4`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js
function u(i) {
  i.constants.add("ambientBoostFactor", "float", l2);
}
function p2(i) {
  i.uniforms.add(new e("lightingGlobalFactor", (i2) => i2.lighting.globalFactor));
}
function v2(h2, v3) {
  const f2 = h2.fragment;
  switch (h2.include(t9, v3), v3.pbrMode !== n6.Disabled && h2.include(n7, v3), h2.include(m2, v3), h2.include(t6), f2.code.add(n4`
    const float GAMMA_SRGB = ${n4.float(t)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${v3.pbrMode === n6.Disabled ? "" : "const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `), u(f2), p2(f2), t5(f2), f2.code.add(n4`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${v3.spherical ? n4`normalize(vPosWorld)` : n4`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `), o4(f2), f2.code.add(n4`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`), v3.pbrMode) {
    case n6.Disabled:
    case n6.WaterOnIntegratedMesh:
    case n6.Water:
      h2.include(a4), f2.code.add(n4`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);
      break;
    case n6.Normal:
    case n6.Schematic:
      f2.code.add(n4`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`), f2.code.add(n4`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`), v3.useFillLights ? f2.uniforms.add(new e3("hasFillLights", (i) => i.enableFillLights)) : f2.constants.add("hasFillLights", "bool", false), f2.code.add(n4`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`), f2.uniforms.add(new e("lightingSpecularStrength", (i) => i.lighting.mainLight.specularStrength), new e("lightingEnvironmentStrength", (i) => i.lighting.mainLight.environmentStrength)).code.add(n4`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`), f2.code.add(n4`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${v3.pbrMode !== n6.Schematic || v3.hasColorTexture ? n4`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));` : n4`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);
      break;
    case n6.Simplified:
    case n6.TerrainWithWater:
      t5(f2), o4(f2), f2.code.add(n4`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);
      break;
    default:
      n(v3.pbrMode);
    case n6.COUNT:
  }
}

export {
  e4 as e,
  t9 as t,
  u,
  p2 as p,
  v2 as v
};
//# sourceMappingURL=chunk-FBCKMXY6.js.map
