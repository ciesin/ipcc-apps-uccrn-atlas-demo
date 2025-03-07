import {
  m
} from "./chunk-DMO5AKFB.js";
import {
  E
} from "./chunk-5LWWFSEW.js";
import {
  a
} from "./chunk-3ATECVKT.js";
import {
  r as r2
} from "./chunk-6P7HXSJ6.js";
import {
  A3 as A,
  G3 as G,
  H,
  J,
  K,
  T2 as T,
  x
} from "./chunk-LTDNORB5.js";
import {
  l
} from "./chunk-PODRVOXS.js";
import {
  r
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/unitFormatUtils.js
function b(t, n, i) {
  return t.units[n][i];
}
function g(t, n, i, r3 = 2, o = "abbr") {
  return `${l(n, { minimumFractionDigits: r3, maximumFractionDigits: r3, signDisplay: n > 0 ? "never" : "exceptZero" })} ${b(t, i, o)}`;
}
function p(t, n, i, r3 = 2, o = "abbr") {
  return `${l(n, { minimumFractionDigits: r3, maximumFractionDigits: r3, signDisplay: "exceptZero" })} ${b(t, i, o)}`;
}
function D(t, n, i, r3 = 2, o = "abbr") {
  const u = J(n, i);
  return g(t, x(n, i, u), u, r3, o);
}
function x2(t, n, i, r3 = 2, o = "abbr") {
  const u = J(n, i);
  return p(t, x(n, i, u), u, r3, o);
}
function y(t, n, i, r3 = 2, o = "abbr") {
  const e = T(n, i);
  return g(t, x(n, i, e), e, r3, o);
}
function F(t, n, i, r3 = 2, o = "abbr") {
  const e = T(n, i);
  return p(t, x(n, i, e), e, r3, o);
}
function d(t, n, i, r3 = 2, o = "abbr") {
  const e = K(n, i);
  return g(t, x(n, i, e), e, r3, o);
}
function h(t, n, i, r3 = 2, o = "abbr") {
  const e = K(n, i);
  return p(t, x(n, i, e), e, r3, o);
}
function B(t, n, i, r3 = 2, o = "abbr") {
  const e = A(n, i);
  return g(t, x(n, i, e), e, r3, o);
}
function M(t, n, i, r3 = 2, o = "abbr") {
  const e = A(n, i);
  return p(t, x(n, i, e), e, r3, o);
}
function $(t, n, i, r3 = 2, o = "abbr") {
  const e = G(n, i);
  return g(t, x(n, i, e), e, r3, o);
}
function j(t, n, i, r3 = 2, o = "abbr") {
  const e = H(n, i);
  return g(t, x(n, i, e), e, r3, o);
}
var U = (t, n) => ({ style: "unit", unitDisplay: "narrow", unit: "degree", maximumFractionDigits: n, minimumFractionDigits: n, signDisplay: t > 0 ? "never" : "exceptZero" });
function w(t, i, o, e, u, c = a, a2 = true) {
  let m2 = c.normalize(m(x(t, i, "degrees"), o, e), 0, a2);
  const f = U(m2, u ?? 2);
  return m2 = I(m2, f), l(m2, f);
}
var z = /* @__PURE__ */ new Map();
function I(t, n) {
  const i = JSON.stringify(n);
  let r3 = z.get(i);
  return r3 || (r3 = new Intl.NumberFormat("en-US", n), z.set(i, r3)), /^[-+]?360\.?0*°?$/.test(r3.format(t)) ? 0 : t;
}
var O = ["B", "kB", "MB", "GB", "TB"];
function T2(n, r3) {
  let e = 0 === (r3 = Math.round(r3)) ? 0 : Math.floor(Math.log(r3) / Math.log(E.KILOBYTES));
  e = r2(e, 0, O.length - 1);
  const s = l(r3 / E.KILOBYTES ** e, { maximumFractionDigits: 2 });
  return r(n.units.bytes[O[e]], { fileSize: s });
}

export {
  b,
  g,
  p,
  D,
  x2 as x,
  y,
  F,
  d,
  h,
  B,
  M,
  $,
  j,
  w,
  T2 as T
};
//# sourceMappingURL=chunk-SA7DV5I6.js.map
