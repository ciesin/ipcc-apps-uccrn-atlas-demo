import {
  A as A2,
  M as M2,
  v
} from "./chunk-L3N7SR24.js";
import {
  w as w2
} from "./chunk-WAKNRSGF.js";
import {
  s as s3
} from "./chunk-NATJDMSF.js";
import {
  D,
  H as H2,
  M,
  O,
  P as P2,
  U,
  c as c2,
  f,
  h as h2,
  q2 as q,
  w,
  x,
  y,
  z
} from "./chunk-NVEHOQKI.js";
import {
  e
} from "./chunk-X5RZJMNW.js";
import {
  A,
  E,
  H,
  K,
  P,
  c,
  g,
  j,
  o,
  p as p2,
  r as r2,
  s as s2,
  u
} from "./chunk-UMYFDXOJ.js";
import {
  n as n2
} from "./chunk-UCMTPLHQ.js";
import {
  a
} from "./chunk-G34KEQQG.js";
import {
  h,
  p,
  s
} from "./chunk-53ZTROGC.js";
import {
  n as n3,
  r,
  t
} from "./chunk-JLFSX3JT.js";
import {
  b
} from "./chunk-6P7HXSJ6.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/chunks/boundedPlane.js
var z2 = () => n.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");
var D2 = class {
  constructor() {
    this.plane = M(), this.origin = n3(), this.basis1 = n3(), this.basis2 = n3();
  }
};
var G = D2;
function W(s4 = Ms) {
  return { plane: M(s4.plane), origin: t(s4.origin), basis1: t(s4.basis1), basis2: t(s4.basis2) };
}
function X(s4, t2, i) {
  const n4 = As.get();
  return n4.origin = s4, n4.basis1 = t2, n4.basis2 = i, n4.plane = D(0, 0, 0, 0), K2(n4), n4;
}
function Z(s4, t2 = W()) {
  return J(s4.origin, s4.basis1, s4.basis2, t2);
}
function H3(s4, t2) {
  s2(t2.origin, s4.origin), s2(t2.basis1, s4.basis1), s2(t2.basis2, s4.basis2), h2(t2.plane, s4.plane);
}
function J(s4, t2, i, n4 = W()) {
  return s2(n4.origin, s4), s2(n4.basis1, t2), s2(n4.basis2, i), K2(n4), ws(n4, "fromValues()"), n4;
}
function K2(s4) {
  P2(s4.basis2, s4.basis1, s4.origin, s4.plane);
}
function Q(s4, t2, i) {
  s4 !== i && Z(s4, i);
  const n4 = g(c2.get(), ys(s4), t2);
  return u(i.origin, i.origin, n4), i.plane[3] -= t2, i;
}
function $(s4, t2, i) {
  return ts(t2, i), Q(i, ls(s4, s4.origin), i), i;
}
function ss(s4, t2) {
  const i = s4.basis1[0], n4 = s4.basis2[1], [r3, o2] = s4.origin;
  return a(r3 - i, o2 - n4, r3 + i, o2 + n4, t2);
}
function ts(s4, t2 = W()) {
  const i = (s4[2] - s4[0]) / 2, n4 = (s4[3] - s4[1]) / 2;
  return o(t2.origin, s4[0] + i, s4[1] + n4, 0), o(t2.basis1, i, 0, 0), o(t2.basis2, 0, n4, 0), U(0, 0, 1, 0, t2.plane), t2;
}
function is(s4, t2, i) {
  return !!x(s4.plane, t2, i) && Ps(s4, i);
}
function ns(s4, t2, i) {
  if (is(s4, t2, i)) return i;
  const n4 = rs(s4, t2, c2.get());
  return u(i, t2.origin, g(c2.get(), t2.direction, p2(t2.origin, n4) / r2(t2.direction))), i;
}
function rs(s4, i, n4) {
  const r3 = Ss.get();
  xs(s4, i, r3, Ss.get());
  let o2 = Number.POSITIVE_INFINITY;
  for (const e2 of Es) {
    const c3 = Ns(s4, e2, Ts.get()), u2 = c2.get();
    if (q(r3, c3, u2)) {
      const s5 = K(c2.get(), i.origin, u2), r4 = Math.abs(b(P(i.direction, s5)));
      r4 < o2 && (o2 = r4, s2(n4, u2));
    }
  }
  return o2 === Number.POSITIVE_INFINITY ? es(s4, i, n4) : n4;
}
function os(s4, t2) {
  return (t2 - s4) / t2;
}
function es(s4, t2, i) {
  if (is(s4, t2, i)) return i;
  const n4 = Ss.get(), r3 = Ss.get();
  xs(s4, t2, n4, r3);
  let o2 = Number.POSITIVE_INFINITY;
  for (const e2 of Es) {
    const c3 = Ns(s4, e2, Ts.get()), u2 = c2.get();
    if (w(n4, c3, u2)) {
      const s5 = w2(t2, u2);
      if (!z(r3, u2)) continue;
      s5 < o2 && (o2 = s5, s2(i, u2));
    }
  }
  return us(s4, t2.origin) < o2 && as(s4, t2.origin, i), i;
}
function as(s4, t2, i) {
  const n4 = H2(s4.plane, t2, c2.get()), r3 = A2(vs(s4, s4.basis1), n4, -1, 1, c2.get()), o2 = A2(vs(s4, s4.basis2), n4, -1, 1, c2.get());
  return c(i, u(c2.get(), r3, o2), s4.origin), i;
}
function cs(s4, t2, i) {
  const { origin: n4, basis1: r3, basis2: o2 } = s4, e2 = c(c2.get(), t2, n4), a2 = f(r3, e2), c3 = f(o2, e2), u2 = f(ys(s4), e2);
  return o(i, a2, c3, u2);
}
function us(s4, t2) {
  const i = cs(s4, t2, c2.get()), { basis1: n4, basis2: r3 } = s4, o2 = r2(n4), e2 = r2(r3), a2 = Math.max(Math.abs(i[0]) - o2, 0), c3 = Math.max(Math.abs(i[1]) - e2, 0), u2 = i[2];
  return a2 * a2 + c3 * c3 + u2 * u2;
}
function gs(s4, t2) {
  return Math.sqrt(us(s4, t2));
}
function bs(s4, t2) {
  let i = Number.NEGATIVE_INFINITY;
  for (const n4 of Es) {
    const r3 = Ns(s4, n4, Ts.get()), o2 = M2(r3, t2);
    o2 > i && (i = o2);
  }
  return Math.sqrt(i);
}
function fs(s4, t2) {
  return z(s4.plane, t2) && Ps(s4, t2);
}
function ps(s4, t2, i, n4) {
  return Is(s4, i, n4);
}
function ls(s4, t2) {
  const i = -s4.plane[3];
  return f(ys(s4), t2) - i;
}
function ms(s4, t2, i, n4) {
  const r3 = ls(s4, t2), o2 = g(Vs, ys(s4), i - r3);
  return u(n4, t2, o2), n4;
}
function ds(s4, t2) {
  return H(s4.basis1, t2.basis1) && H(s4.basis2, t2.basis2) && H(s4.origin, t2.origin);
}
function hs(s4, t2, i) {
  return s4 !== i && Z(s4, i), h(_s, t2), s(_s, _s), E(i.basis1, s4.basis1, _s), E(i.basis2, s4.basis2, _s), E(O(i.plane), O(s4.plane), _s), E(i.origin, s4.origin, t2), y(i.plane, i.plane, i.origin), i;
}
function js(s4, t2, i, n4) {
  return s4 !== n4 && Z(s4, n4), p(Os, t2, i), E(n4.basis1, s4.basis1, Os), E(n4.basis2, s4.basis2, Os), K2(n4), n4;
}
function ys(s4) {
  return O(s4.plane);
}
function Is(s4, t2, i) {
  switch (t2) {
    case n2.X:
      s2(i, s4.basis1), A(i, i);
      break;
    case n2.Y:
      s2(i, s4.basis2), A(i, i);
      break;
    case n2.Z:
      s2(i, ys(s4));
  }
  return i;
}
function Ps(s4, t2) {
  const i = c(c2.get(), t2, s4.origin), n4 = j(s4.basis1), r3 = j(s4.basis2), o2 = P(s4.basis1, i), e2 = P(s4.basis2, i);
  return -o2 - n4 < 0 && o2 - n4 < 0 && -e2 - r3 < 0 && e2 - r3 < 0;
}
function vs(s4, t2) {
  const i = Ts.get();
  return s2(i.origin, s4.origin), s2(i.vector, t2), i;
}
function Ns(s4, t2, i) {
  const { basis1: n4, basis2: r3, origin: o2 } = s4, e2 = g(c2.get(), n4, t2.origin[0]), a2 = g(c2.get(), r3, t2.origin[1]);
  u(i.origin, e2, a2), u(i.origin, i.origin, o2);
  const g2 = g(c2.get(), n4, t2.direction[0]), b2 = g(c2.get(), r3, t2.direction[1]);
  return g(i.vector, u(g2, g2, b2), 2), i;
}
function ws(s4, t2) {
  Math.abs(P(s4.basis1, s4.basis2) / (r2(s4.basis1) * r2(s4.basis2))) > 1e-6 && z2().warn(t2, "Provided basis vectors are not perpendicular"), Math.abs(P(s4.basis1, ys(s4))) > 1e-6 && z2().warn(t2, "Basis vectors and plane normal are not perpendicular"), Math.abs(-P(ys(s4), s4.origin) - s4.plane[3]) > 1e-6 && z2().warn(t2, "Plane offset is not consistent with plane origin");
}
function xs(s4, t2, i, n4) {
  const r3 = ys(s4);
  P2(r3, t2.direction, t2.origin, i), P2(O(i), r3, t2.origin, n4);
}
var Ms = { plane: M(), origin: r(0, 0, 0), basis1: r(1, 0, 0), basis2: r(0, 1, 0) };
var Ss = new s3(M);
var Ts = new s3(v);
var Vs = n3();
var As = new s3(() => W());
var Es = [{ origin: [-1, -1], direction: [1, 0] }, { origin: [1, -1], direction: [0, 1] }, { origin: [1, 1], direction: [-1, 0] }, { origin: [-1, 1], direction: [0, -1] }];
var _s = e();
var Os = e();
var ks = Object.freeze(Object.defineProperty({ __proto__: null, BoundedPlaneClass: G, altitudeAt: ls, axisAt: ps, cameraFrustumCoverage: os, closestPoint: es, closestPointOnSilhouette: rs, copy: Z, copyWithoutVerify: H3, create: W, distance: gs, distance2: us, distanceToSilhouette: bs, elevate: Q, equals: ds, extrusionContainsPoint: fs, fromAABoundingRect: ts, fromValues: J, getExtent: ss, intersectRay: is, intersectRayClosestSilhouette: ns, normal: ys, projectPoint: as, projectPointLocal: cs, rotate: js, setAltitudeAt: ms, setExtent: $, transform: hs, up: Ms, updateUnboundedPlane: K2, wrap: X }, Symbol.toStringTag, { value: "Module" }));

export {
  W,
  Z,
  J,
  K2 as K,
  ts,
  gs,
  ks
};
//# sourceMappingURL=chunk-QUTHUJLU.js.map
