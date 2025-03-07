import {
  o as o2
} from "./chunk-5LR3WNQX.js";
import {
  e
} from "./chunk-LN4OREZH.js";
import {
  d
} from "./chunk-NVSB3M2P.js";
import {
  s as s2
} from "./chunk-EDOH6SI4.js";
import {
  s
} from "./chunk-XUP22FSP.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  o
} from "./chunk-EJHUCCX3.js";
import {
  n
} from "./chunk-OULJFYM2.js";

// node_modules/@arcgis/core/chunks/SSAOBlur.glsl.js
var d2 = 4;
function i2() {
  const i3 = new i(), f2 = i3.fragment;
  i3.include(e);
  const u = (d2 + 1) / 2, c = 1 / (2 * u * u);
  return f2.include(d), f2.uniforms.add(new s("depthMap", (e2) => e2.depthTexture), new o("tex", (e2) => e2.colorTexture), new o2("blurSize", (e2) => e2.blurSize), new s2("projScale", (e2, r) => {
    const t = r.camera.distance;
    return t > 5e4 ? Math.max(0, e2.projScale - (t - 5e4)) : e2.projScale;
  })), f2.code.add(n`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${n.float(c)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `), i3.outputs.add("fragBlur", "float"), f2.main.add(n`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${n.int(d2)}; r <= ${n.int(d2)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`), i3;
}
var f = Object.freeze(Object.defineProperty({ __proto__: null, build: i2 }, Symbol.toStringTag, { value: "Module" }));

export {
  i2 as i,
  f
};
//# sourceMappingURL=chunk-QVWYY3W4.js.map
