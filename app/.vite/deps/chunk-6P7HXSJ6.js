// node_modules/@arcgis/core/core/mathUtils.js
var t = new Float32Array(1);
function n(t2) {
  --t2;
  for (let n2 = 1; n2 < 32; n2 <<= 1) t2 |= t2 >> n2;
  return t2 + 1;
}
function r(t2, n2, r2) {
  return Math.min(Math.max(t2, n2), r2);
}
function i(t2) {
  return t2--, t2 |= t2 >> 1, t2 |= t2 >> 2, t2 |= t2 >> 4, t2 |= t2 >> 8, t2 |= t2 >> 16, ++t2;
}
function o(t2, n2, r2) {
  return t2 + (n2 - t2) * r2;
}
function c(t2, n2, r2, e, u) {
  return o(e, u, (t2 - n2) / (r2 - n2));
}
function s(t2) {
  return t2 * Math.PI / 180;
}
function M(t2) {
  return 180 * t2 / Math.PI;
}
function h(t2, n2 = 1e-6) {
  return (t2 < 0 ? -1 : 1) / Math.max(Math.abs(t2), n2);
}
function b(t2) {
  return Math.acos(r(t2, -1, 1));
}
function l(t2) {
  return Math.asin(r(t2, -1, 1));
}
function m(t2, n2, r2 = 1e-6) {
  if (t2 === n2) return true;
  if (!Number.isFinite(t2) || !Number.isFinite(n2)) return false;
  return (t2 > n2 ? t2 - n2 : n2 - t2) <= r2;
}
function N(t2, n2, r2 = 1e-6) {
  return !m(t2, n2, r2) && t2 > n2;
}
function F(t2, n2, r2 = 1e-6) {
  return !m(t2, n2, r2) && t2 < n2;
}
function g(t2, n2, r2 = 1e-6) {
  return m(t2, n2, r2) || t2 > n2;
}
var I = new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT));
function p(t2) {
  return I.setFloat64(0, t2), I.getBigInt64(0);
}
function x(t2) {
  return I.setBigInt64(0, t2), I.getFloat64(0);
}
var B = BigInt("1000000");
var w = y(1);
function y(t2) {
  const n2 = p(t2 = Math.abs(t2)), r2 = x(n2 <= B ? B : n2 - B);
  return Math.abs(t2 - r2);
}
function P(t2, n2, r2 = w) {
  if (t2 === n2) return true;
  if (!Number.isFinite(t2) || !Number.isFinite(n2)) return false;
  if (null != r2) {
    if (y(Math.min(Math.abs(t2), Math.abs(n2))) < r2) return Math.abs(t2 - n2) <= r2;
  }
  const e = p(t2), u = p(n2);
  if (e < 0 != u < 0) return false;
  return !((e < u ? u - e : e - u) > B);
}
function S(t2) {
  return d(Math.max(-q, Math.min(t2, q)));
}
function d(n2) {
  return t[0] = n2, t[0];
}
function T(t2) {
  const n2 = t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2], r2 = t2[3] * t2[3] + t2[4] * t2[4] + t2[5] * t2[5], e = t2[6] * t2[6] + t2[7] * t2[7] + t2[8] * t2[8];
  return !(m(n2, 1) && m(r2, 1) && m(e, 1));
}
var q = d(34028234663852886e22);
function v(t2, n2, r2) {
  if (void 0 === r2 || 0 == +r2) return Math[t2](n2);
  if (n2 = +n2, r2 = +r2, isNaN(n2) || "number" != typeof r2 || r2 % 1 != 0) return NaN;
  let e = n2.toString().split("e");
  return e = (n2 = Math[t2](+(e[0] + "e" + (e[1] ? +e[1] - r2 : -r2)))).toString().split("e"), +(e[0] + "e" + (e[1] ? +e[1] + r2 : r2));
}

export {
  n,
  r,
  i,
  o,
  c,
  s,
  M,
  h,
  b,
  l,
  m,
  N,
  F,
  g,
  P,
  S,
  T,
  q,
  v
};
//# sourceMappingURL=chunk-6P7HXSJ6.js.map
