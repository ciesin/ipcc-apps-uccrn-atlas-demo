import {
  b,
  v,
  x
} from "./chunk-HONYA6AI.js";
import {
  e
} from "./chunk-NOMJWA3C.js";
import {
  A,
  B,
  _,
  s as s2
} from "./chunk-UMYFDXOJ.js";
import {
  j
} from "./chunk-53ZTROGC.js";
import {
  N,
  m,
  y
} from "./chunk-JLFSX3JT.js";
import {
  M,
  s
} from "./chunk-6P7HXSJ6.js";

// node_modules/@arcgis/core/geometry/support/axisAngleDegrees.js
function j2(r = B2) {
  return [r[0], r[1], r[2], r[3]];
}
function q(r, t, n = j2()) {
  return s2(w(n), r), n[3] = t, n;
}
function v2(r, t, n) {
  return _(n, r, t), A(n, n), n[3] = -B(r, t), n;
}
function k(t, i = j2()) {
  const u = j(C, t);
  return A2(i, M(v(i, u))), i;
}
function U(t, n, c = j2()) {
  return b(C, w(t), z(t)), b(D, w(n), z(n)), x(C, D, C), A2(c, M(v(w(c), C)));
}
function d(r, t, n, o = j2()) {
  return q(m, r, F), q(y, t, G), q(N, n, H), U(F, G, F), U(F, H, o), o;
}
function w(r) {
  return r;
}
function y2(r) {
  return r[3];
}
function z(r) {
  return s(r[3]);
}
function A2(r, t) {
  return r[3] = t, r;
}
var B2 = [0, 0, 1, 0];
var C = e();
var D = e();
var E = j2();
var F = j2();
var G = j2();
var H = j2();

export {
  j2 as j,
  q,
  v2 as v,
  k,
  d,
  w,
  y2 as y,
  z,
  B2 as B
};
//# sourceMappingURL=chunk-QUEKTCSS.js.map
