import {
  s as s2
} from "./chunk-NATJDMSF.js";
import {
  c as c2
} from "./chunk-NVEHOQKI.js";
import {
  P,
  c,
  g,
  j,
  s,
  u,
  v
} from "./chunk-UMYFDXOJ.js";
import {
  n,
  t
} from "./chunk-JLFSX3JT.js";
import {
  r
} from "./chunk-6P7HXSJ6.js";

// node_modules/@arcgis/core/geometry/support/lineSegment.js
function v2(t2) {
  return t2 ? { origin: t(t2.origin), vector: t(t2.vector) } : { origin: n(), vector: n() };
}
function m(t2, r2) {
  const n2 = S.get();
  return n2.origin = t2, n2.vector = r2, n2;
}
function p(t2, r2 = v2()) {
  return h(t2.origin, t2.vector, r2);
}
function h(t2, r2, o = v2()) {
  return s(o.origin, t2), s(o.vector, r2), o;
}
function b(t2, r2, e = v2()) {
  return s(e.origin, t2), c(e.vector, r2, t2), e;
}
function M(r2, n2) {
  const c3 = c(c2.get(), n2, r2.origin), s3 = P(r2.vector, c3), u2 = P(r2.vector, r2.vector), a = r(s3 / u2, 0, 1), g2 = c(c2.get(), g(c2.get(), r2.vector, a), c3);
  return P(g2, g2);
}
function j2(t2, r2, n2) {
  return A(t2, r2, 0, 1, n2);
}
function l(t2, r2, n2) {
  return u(n2, t2.origin, g(n2, t2.vector, r2));
}
function A(r2, n2, u2, a, g2) {
  const { vector: v3, origin: m2 } = r2, p2 = c(c2.get(), n2, m2), h2 = P(v3, p2) / j(v3);
  return g(g2, v3, r(h2, u2, a)), u(g2, g2, r2.origin);
}
function d(t2, r2) {
  if (k(t2, m(r2.origin, r2.direction), false, x)) {
    const { tA: r3, pB: n2, distance2: o } = x;
    if (r3 >= 0 && r3 <= 1) return o;
    if (r3 < 0) return v(t2.origin, n2);
    if (r3 > 1) return v(u(c2.get(), t2.origin, t2.vector), n2);
  }
  return null;
}
function B(t2, r2, o) {
  return !!k(t2, r2, true, x) && (s(o, x.pA), true);
}
function k(r2, n2, o, e) {
  const i = 1e-6, s3 = r2.origin, a = u(c2.get(), s3, r2.vector), g2 = n2.origin, v3 = u(c2.get(), g2, n2.vector), m2 = c2.get(), p2 = c2.get();
  if (m2[0] = s3[0] - g2[0], m2[1] = s3[1] - g2[1], m2[2] = s3[2] - g2[2], p2[0] = v3[0] - g2[0], p2[1] = v3[1] - g2[1], p2[2] = v3[2] - g2[2], Math.abs(p2[0]) < i && Math.abs(p2[1]) < i && Math.abs(p2[2]) < i) return false;
  const h2 = c2.get();
  if (h2[0] = a[0] - s3[0], h2[1] = a[1] - s3[1], h2[2] = a[2] - s3[2], Math.abs(h2[0]) < i && Math.abs(h2[1]) < i && Math.abs(h2[2]) < i) return false;
  const b2 = m2[0] * p2[0] + m2[1] * p2[1] + m2[2] * p2[2], M2 = p2[0] * h2[0] + p2[1] * h2[1] + p2[2] * h2[2], j3 = m2[0] * h2[0] + m2[1] * h2[1] + m2[2] * h2[2], l2 = p2[0] * p2[0] + p2[1] * p2[1] + p2[2] * p2[2], A2 = (h2[0] * h2[0] + h2[1] * h2[1] + h2[2] * h2[2]) * l2 - M2 * M2;
  if (Math.abs(A2) < i) return false;
  let d2 = (b2 * M2 - j3 * l2) / A2, B2 = (b2 + M2 * d2) / l2;
  o && (d2 = r(d2, 0, 1), B2 = r(B2, 0, 1));
  const k2 = c2.get(), x2 = c2.get();
  return k2[0] = s3[0] + d2 * h2[0], k2[1] = s3[1] + d2 * h2[1], k2[2] = s3[2] + d2 * h2[2], x2[0] = g2[0] + B2 * p2[0], x2[1] = g2[1] + B2 * p2[1], x2[2] = g2[2] + B2 * p2[2], e.tA = d2, e.tB = B2, e.pA = k2, e.pB = x2, e.distance2 = v(k2, x2), true;
}
var x = { tA: 0, tB: 0, pA: n(), pB: n(), distance2: 0 };
var S = new s2(() => v2());

export {
  v2 as v,
  p,
  h,
  b,
  M,
  j2 as j,
  l,
  A,
  d,
  B
};
//# sourceMappingURL=chunk-L3N7SR24.js.map
