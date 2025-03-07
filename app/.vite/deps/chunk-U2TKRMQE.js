import {
  t
} from "./chunk-BV7O6P7Z.js";

// node_modules/@arcgis/core/chunks/vec3.js
function e(t2, e2, f2) {
  r(t2.typedBuffer, e2.typedBuffer, f2, t2.typedBufferStride, e2.typedBufferStride);
}
function r(t2, e2, r2, f2 = 3, n2 = f2) {
  if (t2.length / f2 !== Math.ceil(e2.length / n2)) return t2;
  const o2 = t2.length / f2, i2 = r2[0], u2 = r2[1], l2 = r2[2], a2 = r2[4], s2 = r2[5], d2 = r2[6], c2 = r2[8], p2 = r2[9], h = r2[10], y = r2[12], B = r2[13], g = r2[14];
  let S = 0, m = 0;
  for (let M = 0; M < o2; M++) {
    const r3 = e2[S], o3 = e2[S + 1], M2 = e2[S + 2];
    t2[m] = i2 * r3 + a2 * o3 + c2 * M2 + y, t2[m + 1] = u2 * r3 + s2 * o3 + p2 * M2 + B, t2[m + 2] = l2 * r3 + d2 * o3 + h * M2 + g, S += n2, m += f2;
  }
  return t2;
}
function f(t2, e2, r2) {
  n(t2.typedBuffer, e2.typedBuffer, r2, t2.typedBufferStride, e2.typedBufferStride);
}
function n(t2, e2, r2, f2 = 3, n2 = f2) {
  if (t2.length / f2 !== Math.ceil(e2.length / n2)) return;
  const o2 = t2.length / f2, i2 = r2[0], u2 = r2[1], l2 = r2[2], a2 = r2[3], s2 = r2[4], d2 = r2[5], c2 = r2[6], p2 = r2[7], h = r2[8];
  let y = 0, B = 0;
  for (let g = 0; g < o2; g++) {
    const r3 = e2[y], o3 = e2[y + 1], g2 = e2[y + 2];
    t2[B] = i2 * r3 + a2 * o3 + c2 * g2, t2[B + 1] = u2 * r3 + s2 * o3 + p2 * g2, t2[B + 2] = l2 * r3 + d2 * o3 + h * g2, y += n2, B += f2;
  }
}
function o(t2, e2, r2) {
  i(t2.typedBuffer, e2.typedBuffer, r2, t2.typedBufferStride, e2.typedBufferStride);
}
function i(t2, e2, r2, f2 = 3, n2 = f2) {
  const o2 = Math.min(t2.length / f2, e2.length / n2);
  let i2 = 0, u2 = 0;
  for (let l2 = 0; l2 < o2; l2++) t2[u2] = r2 * e2[i2], t2[u2 + 1] = r2 * e2[i2 + 1], t2[u2 + 2] = r2 * e2[i2 + 2], i2 += n2, u2 += f2;
  return t2;
}
function u(t2, e2, r2, f2) {
  l(t2.typedBuffer, e2.typedBuffer, r2, f2, t2.typedBufferStride, e2.typedBufferStride);
}
function l(e2, r2, f2, n2, o2 = 3, i2 = o2) {
  const u2 = Math.min(e2.length / o2, r2.length / i2);
  let l2 = 0, a2 = 0;
  const s2 = 1 / t;
  for (let t2 = 0; t2 < u2; t2++) e2[a2] = n2 * (f2 * r2[l2]) ** s2, e2[a2 + 1] = n2 * (f2 * r2[l2 + 1]) ** s2, e2[a2 + 2] = n2 * (f2 * r2[l2 + 2]) ** s2, l2 += i2, a2 += o2;
}
function a(t2, e2, r2, f2 = 3, n2 = f2) {
  const o2 = t2.length / f2;
  if (o2 !== Math.ceil(e2.length / n2)) return t2;
  let i2 = 0, u2 = 0;
  for (let l2 = 0; l2 < o2; l2++) t2[u2] = e2[i2] + r2[0], t2[u2 + 1] = e2[i2 + 1] + r2[1], t2[u2 + 2] = e2[i2 + 2] + r2[2], i2 += n2, u2 += f2;
  return t2;
}
function s(t2, e2) {
  d(t2.typedBuffer, e2.typedBuffer, t2.typedBufferStride, e2.typedBufferStride);
}
function d(t2, e2, r2 = 3, f2 = r2) {
  const n2 = Math.min(t2.length / r2, e2.length / f2);
  let o2 = 0, i2 = 0;
  for (let u2 = 0; u2 < n2; u2++) {
    const n3 = e2[o2], u3 = e2[o2 + 1], l2 = e2[o2 + 2], a2 = n3 * n3 + u3 * u3 + l2 * l2;
    if (a2 > 0) {
      const e3 = 1 / Math.sqrt(a2);
      t2[i2] = e3 * n3, t2[i2 + 1] = e3 * u3, t2[i2 + 2] = e3 * l2;
    }
    o2 += f2, i2 += r2;
  }
}
function c(t2, e2, r2) {
  const f2 = Math.min(t2.count, e2.count), n2 = t2.typedBuffer, o2 = t2.typedBufferStride, i2 = e2.typedBuffer, u2 = e2.typedBufferStride;
  let l2 = 0, a2 = 0;
  for (let s2 = 0; s2 < f2; s2++) n2[a2] = i2[l2] >> r2, n2[a2 + 1] = i2[l2 + 1] >> r2, n2[a2 + 2] = i2[l2 + 2] >> r2, l2 += u2, a2 += o2;
}
var p = Object.freeze(Object.defineProperty({ __proto__: null, linearToSRGB: l, linearToSRGBView: u, normalize: d, normalizeView: s, scale: i, scaleView: o, shiftRight: c, transformMat3: n, transformMat3View: f, transformMat4: r, transformMat4View: e, translate: a }, Symbol.toStringTag, { value: "Module" }));

export {
  e,
  r,
  f,
  n,
  u,
  l,
  a,
  s,
  d
};
//# sourceMappingURL=chunk-U2TKRMQE.js.map
