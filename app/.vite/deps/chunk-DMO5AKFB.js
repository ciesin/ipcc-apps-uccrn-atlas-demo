import {
  D2 as D,
  x
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/core/quantityUtils.js
function r(t, u) {
  return { type: D(u), value: t, unit: u };
}
function i(n) {
  return { value: n };
}
function a(t, u) {
  return { type: D(u), value: t, unit: u };
}
function l(t, u) {
  return { type: D(u), value: t, unit: u };
}
function o(t, u, e = "arithmetic") {
  return { type: D(u), value: t, unit: u, rotationType: e };
}
function s(n, t) {
  const u = f(n, t);
  return "angle" === n.type ? o(u, t, n.rotationType) : r(u, t);
}
function f(n, t) {
  return x(n.value, n.unit, t);
}
function p(n, t) {
  return null == n ? t : null == t || n.value > x(t.value, t.unit, n.unit) ? n : t;
}
function y(n, t) {
  return null == n ? null : { ...n, value: n.value * t };
}
function m(n, t, u) {
  if (t === u) return n;
  switch (u) {
    case "arithmetic":
    case "geographic":
      return 90 - n;
  }
}
var h = a(0, "meters");
var d = l(0, "square-meters");
var T = o(0, "radians");
var U = o(0, "degrees");
var j = o(0, "degrees", "geographic");

export {
  i,
  a,
  l,
  o,
  s,
  f,
  p,
  y,
  m,
  h,
  d,
  U,
  j
};
//# sourceMappingURL=chunk-DMO5AKFB.js.map
