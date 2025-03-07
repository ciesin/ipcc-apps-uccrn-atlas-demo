import {
  s2 as s
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/core/memoryEstimations.js
function t(r) {
  return 32 + r.length;
}
var n = 16;
function e(r) {
  if (!r) return 0;
  let t2 = s2;
  for (const n2 in r) r.hasOwnProperty(n2) && (t2 += f(r[n2], false));
  return t2;
}
function u(r) {
  if (!r) return 0;
  if ("number" == typeof r[0]) return i(r);
  if (Array.isArray(r)) return o(r);
  let t2 = s2;
  for (const n2 in r) r.hasOwnProperty(n2) && (t2 += f(r[n2]));
  return t2;
}
function o(r) {
  const t2 = r.length;
  if (0 === t2 || "number" == typeof r[0]) return c(r, 8);
  let n2 = a;
  for (let e2 = 0; e2 < t2; e2++) n2 += f(r[e2]);
  return n2;
}
function f(r, e2 = true) {
  switch (typeof r) {
    case "object":
      return e2 ? u(r) : s2;
    case "string":
      return t(r);
    case "number":
      return n;
    case "boolean":
      return 4;
    default:
      return 8;
  }
}
function i(...t2) {
  return t2.reduce((t3, e2) => t3 + (e2 ? s(e2) ? e2.byteLength + y : Array.isArray(e2) ? c(e2, n) : 0 : 0), 0);
}
function c(r, t2) {
  return a + r.length * t2;
}
var s2 = 32;
var a = 16;
var y = 145;

export {
  n,
  e,
  u,
  i,
  s2 as s,
  a,
  y
};
//# sourceMappingURL=chunk-U6JFTJMZ.js.map
