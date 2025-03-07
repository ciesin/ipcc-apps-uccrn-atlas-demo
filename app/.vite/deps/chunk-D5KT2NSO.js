import {
  t
} from "./chunk-BV7O6P7Z.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/geometry/support/buffer/math/common.js
var e = () => n.getLogger("esri.views.3d.support.buffer.math");

// node_modules/@arcgis/core/chunks/vec4.js
function r(t2, e2, r2) {
  if (t2.count !== e2.count) return;
  const f2 = t2.count, n3 = r2[0], o2 = r2[1], u2 = r2[2], i2 = r2[3], s2 = r2[4], c2 = r2[5], d2 = r2[6], a2 = r2[7], l = r2[8], p = r2[9], y = r2[10], B = r2[11], m = r2[12], h = r2[13], S = r2[14], g = r2[15], M = t2.typedBuffer, b = t2.typedBufferStride, j = e2.typedBuffer, v = e2.typedBufferStride;
  for (let w = 0; w < f2; w++) {
    const t3 = w * b, e3 = w * v, r3 = j[e3], f3 = j[e3 + 1], V = j[e3 + 2], _ = j[e3 + 3];
    M[t3] = n3 * r3 + s2 * f3 + l * V + m * _, M[t3 + 1] = o2 * r3 + c2 * f3 + p * V + h * _, M[t3 + 2] = u2 * r3 + d2 * f3 + y * V + S * _, M[t3 + 3] = i2 * r3 + a2 * f3 + B * V + g * _;
  }
}
function f(t2, r2, f2, n3 = 4, o2 = n3) {
  if (t2.length / n3 != r2.length / o2) return void e().error("source and destination buffers need to have the same number of elements");
  const u2 = t2.length / n3, i2 = f2[0], s2 = f2[1], c2 = f2[2], d2 = f2[3], a2 = f2[4], l = f2[5], p = f2[6], y = f2[7], B = f2[8], m = f2[9], h = f2[10], S = f2[11], g = f2[12], M = f2[13], b = f2[14], j = f2[15];
  let v = 0, w = 0;
  for (let e2 = 0; e2 < u2; e2++) {
    const e3 = r2[v], f3 = r2[v + 1], u3 = r2[v + 2], V = r2[v + 3];
    t2[w] = i2 * e3 + a2 * f3 + B * u3 + g * V, t2[w + 1] = s2 * e3 + l * f3 + m * u3 + M * V, t2[w + 2] = c2 * e3 + p * f3 + h * u3 + b * V, t2[w + 3] = d2 * e3 + y * f3 + S * u3 + j * V, v += o2, w += n3;
  }
}
function n2(t2, e2, r2) {
  o(t2.typedBuffer, e2.typedBuffer, r2, t2.typedBufferStride, e2.typedBufferStride);
}
function o(t2, e2, r2, f2 = 4, n3 = f2) {
  if (t2.length / f2 != e2.length / n3) return;
  const o2 = t2.length / f2, u2 = r2[0], i2 = r2[1], s2 = r2[2], c2 = r2[3], d2 = r2[4], a2 = r2[5], l = r2[6], p = r2[7], y = r2[8];
  let B = 0, m = 0;
  for (let h = 0; h < o2; h++) {
    const r3 = e2[B], o3 = e2[B + 1], h2 = e2[B + 2], S = e2[B + 3];
    t2[m] = u2 * r3 + c2 * o3 + l * h2, t2[m + 1] = i2 * r3 + d2 * o3 + p * h2, t2[m + 2] = s2 * r3 + a2 * o3 + y * h2, t2[m + 3] = S, B += n3, m += f2;
  }
}
function u(t2, e2) {
  const r2 = Math.min(t2.count, e2.count), f2 = t2.typedBuffer, n3 = t2.typedBufferStride, o2 = e2.typedBuffer, u2 = e2.typedBufferStride;
  for (let i2 = 0; i2 < r2; i2++) {
    const t3 = i2 * n3, e3 = i2 * u2, r3 = o2[e3], s2 = o2[e3 + 1], c2 = o2[e3 + 2], d2 = r3 * r3 + s2 * s2 + c2 * c2;
    if (d2 > 0) {
      const e4 = 1 / Math.sqrt(d2);
      f2[t3] = e4 * r3, f2[t3 + 1] = e4 * s2, f2[t3 + 2] = e4 * c2;
    }
  }
}
function i(t2, e2, r2) {
  s(t2.typedBuffer, e2, r2, t2.typedBufferStride);
}
function s(t2, e2, r2, f2 = 4) {
  const n3 = Math.min(t2.length / f2, e2.count), o2 = e2.typedBuffer, u2 = e2.typedBufferStride;
  let i2 = 0, s2 = 0;
  for (let c2 = 0; c2 < n3; c2++) t2[s2] = r2 * o2[i2], t2[s2 + 1] = r2 * o2[i2 + 1], t2[s2 + 2] = r2 * o2[i2 + 2], t2[s2 + 3] = r2 * o2[i2 + 3], i2 += u2, s2 += f2;
}
function c(t2, e2, r2, f2) {
  d(t2.typedBuffer, e2, r2, f2, t2.typedBufferStride);
}
function d(e2, r2, f2, n3, o2 = 4) {
  const u2 = Math.min(e2.length / o2, r2.count), i2 = r2.typedBuffer, s2 = r2.typedBufferStride;
  let c2 = 0, d2 = 0;
  const a2 = 1 / t;
  for (let t2 = 0; t2 < u2; t2++) e2[d2] = n3 * (f2 * i2[c2]) ** a2, e2[d2 + 1] = n3 * (f2 * i2[c2 + 1]) ** a2, e2[d2 + 2] = n3 * (f2 * i2[c2 + 2]) ** a2, e2[d2 + 3] = n3 * f2 * i2[c2 + 3], c2 += s2, d2 += o2;
}
var a = Object.freeze(Object.defineProperty({ __proto__: null, linearToSRGB: d, linearToSRGBView: c, normalize: u, scale: s, scaleView: i, transformMat3: o, transformMat3View: n2, transformMat4: f, transformMat4View: r }, Symbol.toStringTag, { value: "Module" }));

export {
  n2 as n,
  o,
  u,
  c,
  d
};
//# sourceMappingURL=chunk-D5KT2NSO.js.map
