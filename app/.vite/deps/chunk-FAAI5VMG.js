import {
  N as N2,
  a,
  c as c2,
  d as d3,
  d2 as d4,
  f,
  j as j5,
  s as s4,
  v as v2
} from "./chunk-6MN3R543.js";
import {
  c as c3
} from "./chunk-TY5FDDRF.js";
import {
  b as b3,
  j as j4,
  q as q4
} from "./chunk-NJTJZUTI.js";
import {
  e as e3
} from "./chunk-NQPBPVRE.js";
import {
  $,
  I,
  O as O2,
  U,
  _ as _3
} from "./chunk-WAKNRSGF.js";
import {
  H as H2,
  M,
  O,
  Q,
  V,
  k,
  l as l3,
  p as p2,
  q as q2,
  z
} from "./chunk-NVEHOQKI.js";
import {
  _ as _4
} from "./chunk-3WMBBCKF.js";
import {
  l as l2,
  n as n3,
  t as t2
} from "./chunk-O2L6JAHP.js";
import {
  B,
  E,
  _ as _2,
  b as b2,
  d as d2,
  e as e2,
  j as j3,
  o as o3,
  p as p3,
  q as q3
} from "./chunk-K35H6D4D.js";
import {
  A as A2,
  H,
  J,
  P,
  R,
  Z,
  _,
  c,
  j as j2,
  o as o2,
  p,
  q,
  s as s3,
  v
} from "./chunk-UMYFDXOJ.js";
import {
  n as n2
} from "./chunk-MHM4GDCM.js";
import {
  j,
  s as s2
} from "./chunk-363AT5UF.js";
import {
  r as r3
} from "./chunk-D3HK4ZSW.js";
import {
  b
} from "./chunk-AI2O2GKK.js";
import {
  r
} from "./chunk-STBNLAGT.js";
import {
  i
} from "./chunk-WJGG35K6.js";
import {
  e
} from "./chunk-PUM22WTC.js";
import {
  N,
  n,
  r as r2,
  t
} from "./chunk-JLFSX3JT.js";
import {
  g
} from "./chunk-HP7OWCUK.js";
import {
  l,
  m
} from "./chunk-6P7HXSJ6.js";
import {
  A,
  d
} from "./chunk-YSPSOPLL.js";
import {
  o3 as o
} from "./chunk-RYSF6YCR.js";
import {
  G,
  s
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/support/geometry3dUtils.js
function U2({ start: t3, end: o4, type: c4 }, i2, u2) {
  const a2 = [], f3 = e2(et, o4, t3), m3 = e2(ot, t3, i2), L = p3(f3), h2 = 2 * j3(f3, m3), A3 = h2 * h2 - 4 * L * (p3(m3) - u2 * u2);
  if (0 === A3) {
    const n4 = -h2 / (2 * L);
    (c4 === rt.PLANE || n4 >= 0) && a2.push(d2(n3(), t3, f3, n4));
  } else if (A3 > 0) {
    const n4 = Math.sqrt(A3), r4 = (-h2 + n4) / (2 * L);
    (c4 === rt.PLANE || r4 >= 0) && a2.push(d2(n3(), t3, f3, r4));
    const s5 = (-h2 - n4) / (2 * L);
    (c4 === rt.PLANE || s5 >= 0) && a2.push(d2(n3(), t3, f3, s5));
  }
  return a2;
}
function k2(t3, r4) {
  const e4 = t3.start, c4 = t3.end, i2 = e2(et, c4, e4), u2 = o2(it, -i2[1], i2[0], 0), a2 = r4.start, f3 = r4.end, p4 = R(ut, f3, a2), m3 = P(p4, u2), L = o2(at, e4[0], e4[1], 0), E3 = R(ft, L, a2), N4 = P(E3, u2), y2 = e();
  if (Math.abs(m3) < y2) return Math.abs(N4), [];
  const P2 = q(pt, a2, p4, N4 / m3);
  if (r4.type === j5.RAY) {
    const t4 = R(mt, P2, a2);
    if (P(t4, p4) < -y2) return [];
  }
  if (t3.type === rt.HALF_PLANE) {
    const t4 = B(ot, P2, e4);
    if (j3(t4, i2) < -y2) return [];
  }
  return [t(P2)];
}
function w(t3, n4) {
  return T(X(ht, n4[2], t3), n4);
}
function z2(t3, n4) {
  const r4 = 0;
  return S(X(ht, r4, t3), X(At, r4, n4)).map(([t4, n5]) => t2(t4, n5));
}
function C(t3, n4, r4) {
  return J2(t3, X(ht, t3[2], n4), r4);
}
function D(t3, r4, s5, o4 = n()) {
  const i2 = e2(et, t3, r4), u2 = q3(i2);
  return d2(o4, r4, i2, 0 === u2 ? 1 : s5 / u2), o4[2] = t3[2], o4;
}
function J2(t3, { start: n4, end: r4, type: s5 }, e4 = n()) {
  const o4 = R(ct, t3, n4), c4 = R(it, r4, n4), i2 = P(o4, c4) / P(c4, c4);
  return q(e4, n4, c4, s5 === j5.RAY ? Math.max(i2, 0) : i2);
}
var O3 = (() => {
  const t3 = n(), n4 = n(), r4 = n();
  return ({ start: s5, end: e4 }, { center: o4, radius: c4, normal: i2, slicePlane: u2 }) => {
    const a2 = l3(o4, i2, Lt);
    if ($2(Q(a2, s5), 0) && $2(Q(a2, e4), 0)) {
      q2(i2, t3, n4);
      const a3 = (s6, e5) => (c(r4, e5, o4), o3(s6, P(r4, t3), P(r4, n4)), s6), p5 = d4({ start: a3(et, s5), end: a3(ot, e4), type: j5.LINE }, l2, c4), m3 = [];
      for (const [r5, s6] of p5) {
        const e5 = s3(n(), o4);
        q(e5, e5, t3, r5), q(e5, e5, n4, s6), u2 && !nt(u2, e5) || m3.push(e5);
      }
      return m3;
    }
    const p4 = n();
    return k(a2, s5, e4, p4) ? !$2(p(p4, o4), c4) || u2 && !nt(u2, p4) ? [] : [p4] : [];
  };
})();
function Q2({ start: t3, end: e4, type: o4 }, c4, i2) {
  const u2 = [], a2 = c(ct, e4, t3), f3 = e2(ot, t3, c4), p4 = p3(a2), m3 = 2 * j3(a2, f3), L = m3 * m3 - 4 * p4 * (p3(f3) - i2 * i2);
  if (0 === L) {
    const n4 = -m3 / (2 * p4);
    (o4 === j5.LINE || n4 >= 0) && u2.push(q(n(), t3, a2, n4));
  } else if (L > 0) {
    const n4 = Math.sqrt(L), r4 = (-m3 + n4) / (2 * p4);
    (o4 === j5.LINE || r4 >= 0) && u2.push(q(n(), t3, a2, r4));
    const s5 = (-m3 - n4) / (2 * p4);
    (o4 === j5.LINE || s5 >= 0) && u2.push(q(n(), t3, a2, s5));
  }
  return u2;
}
function S(t3, n4) {
  const r4 = t3.start, s5 = t3.end, e4 = n4.start, o4 = n4.end, c4 = R(ct, s5, r4), i2 = R(it, o4, e4), u2 = R(ut, e4, r4), a2 = _(at, c4, i2);
  if (!$2(P(u2, a2), 0)) return [];
  const f3 = Z(a2);
  if ($2(f3, 0)) return [];
  const p4 = _(ft, u2, i2), m3 = P(p4, a2) / f3, L = q(pt, r4, c4, m3);
  if (t3.type === j5.RAY) {
    const t4 = R(mt, L, r4);
    if (P(c4, t4) < -e()) return [];
  }
  if (n4.type === j5.RAY) {
    const t4 = R(mt, L, e4);
    if (P(i2, t4) < -e()) return [];
  }
  return [t(L)];
}
function T({ start: t3, end: n4, type: r4 }, s5) {
  const e4 = R(ct, s5, t3), o4 = R(it, n4, t3), c4 = _(ut, o4, e4), i2 = Z(c4) / Z(o4), u2 = e();
  if (i2 < u2) switch (r4) {
    case j5.LINE:
      return [t(s5)];
    case j5.RAY:
      return P(o4, e4) < -u2 ? [] : [t(s5)];
  }
  return [];
}
function W(t3, n4, r4, s5) {
  const [e4, o4] = t3, [c4, i2] = r4, u2 = c4 - e4, f3 = i2 - o4, p4 = u2 * u2 + f3 * f3, L = Math.sqrt(p4);
  if (L > n4 + s5) return [];
  if (L < Math.abs(n4 - s5)) return [];
  if ($2(L, 0) && $2(n4, s5)) return [];
  const h2 = (n4 * n4 - s5 * s5 + p4) / (2 * L), A3 = Math.sqrt(n4 * n4 - h2 * h2), d6 = A3 * f3 / L, l4 = A3 * u2 / L, [E3, N4] = _2(et, t3, r4, h2 / L);
  return $2(d6, l4) ? [t2(E3, N4)] : [t2(E3 + d6, N4 - l4), t2(E3 - d6, N4 + l4)];
}
function X(t3, n4, { start: r4, end: s5, type: e4 }) {
  return o2(t3.start, r4[0], r4[1], n4), o2(t3.end, s5[0], s5[1], n4), t3.type = st[e4], t3;
}
function Z2(t3, n4) {
  return $2(t3[2], n4[2]);
}
function $2(n4, r4) {
  return m(Math.abs(n4 - r4), 0, e());
}
function tt(t3, n4) {
  return n4.filter((n5) => nt(t3, n5));
}
function nt(t3, n4) {
  return z(t3, n4);
}
var rt;
!function(t3) {
  t3[t3.PLANE = 0] = "PLANE", t3[t3.HALF_PLANE = 1] = "HALF_PLANE";
}(rt || (rt = {}));
var st = { [rt.PLANE]: j5.LINE, [rt.HALF_PLANE]: j5.RAY };
var et = n3();
var ot = n3();
var ct = n();
var it = n();
var ut = n();
var at = n();
var ft = n();
var pt = n();
var mt = n();
var Lt = M();
var ht = { start: n(), end: n(), type: j5.LINE };
var At = { start: n(), end: n(), type: j5.LINE };

// node_modules/@arcgis/core/views/interactive/sketch/constraints.js
var mt2 = class {
  intersect(t3) {
    return Ht(this, t3);
  }
  closestPoints(t3) {
    return [this.closestTo(t3)];
  }
};
var gt = class extends mt2 {
  constructor(t3) {
    super(), this.point = t3;
  }
  equals(t3) {
    return this === t3 || Le(t3) && H(this.point, t3.point);
  }
  closestTo() {
    return v2(this.point);
  }
};
var _t = class extends mt2 {
  constructor(t3, e4, s5) {
    super(), this.start = t3, this.end = e4, this.lineLike = { start: t3, end: e4, type: s5 };
  }
  equals(t3) {
    return this === t3 || ke(t3) && this.lineLike.type === t3.lineLike.type && H(this.start, t3.start) && H(this.end, t3.end);
  }
  closestTo(t3) {
    const e4 = c2();
    return J2(t3, this.lineLike, e4), e4;
  }
};
var Lt2 = class extends _t {
  constructor(t3, e4) {
    super(t3, e4, j5.LINE);
  }
};
var kt = class extends _t {
  constructor(t3, e4) {
    super(t3, e4, j5.RAY);
  }
};
var xt = class extends mt2 {
  constructor(t3) {
    super(), this.constraints = t3;
  }
  equals(t3) {
    return this === t3 || _e(t3) && s(this.constraints, t3.constraints, (t4, e4) => t4.equals(e4));
  }
  closestTo(t3) {
    let e4, s5 = 1 / 0;
    for (const r4 of this.constraints) {
      const n4 = r4.closestTo(t3), i2 = v(t3, n4);
      i2 < s5 && (s5 = i2, e4 = n4);
    }
    return v2(e4 ?? t3);
  }
  closestPoints(t3) {
    return this.constraints.flatMap((e4) => e4 === this ? [] : e4.closestPoints(t3));
  }
};
var yt = class extends mt2 {
  constructor(t3, e4) {
    super(), this.center = t3, this.radius = e4;
  }
  equals(t3) {
    return this === t3 || Pe(t3) && this.center[0] === t3.center[0] && this.center[1] === t3.center[1] && this.radius === t3.radius;
  }
  closestTo(t3) {
    const e4 = c2();
    return D(t3, this.center, this.radius, e4), e4;
  }
};
var Pt = class extends mt2 {
  constructor(t3, e4) {
    super(), this.center = t3, this.radius = e4;
  }
  equals(t3) {
    return this === t3 || ze(t3) && H(this.center, t3.center) && this.radius === t3.radius;
  }
  closestTo(t3) {
    const e4 = c2();
    return D(t3, this.center, this.radius, e4), e4[2] = this.center[2], e4;
  }
  asCircle() {
    return new zt(v2(this.center), this.radius, d3(0, 0, 1));
  }
};
var zt = class extends mt2 {
  constructor(t3, e4, s5, r4 = void 0) {
    super(), this.center = t3, this.radius = e4, this.normal = s5, this.slicePlane = r4;
  }
  equals(t3) {
    return this === t3 || Me(t3) && H(this.center, t3.center) && H(this.normal, t3.normal) && this.radius === t3.radius;
  }
  closestTo(t3) {
    const { center: e4, radius: s5 } = this;
    H2(this.getPlane(Tt), t3, Mt);
    const r4 = R(Mt, Mt, e4), n4 = j2(r4);
    if ($2(n4, 0)) return v2(t3);
    const i2 = s5 / Math.sqrt(n4), o4 = c2();
    q(o4, e4, r4, i2);
    const { slicePlane: c4 } = this;
    if (c4 && !nt(c4, o4)) {
      const e5 = Jt(c4, this);
      return (e5 == null ? void 0 : e5.closestTo(t3)) ?? v2(t3);
    }
    return o4;
  }
  getPlane(t3 = M()) {
    return l3(this.center, this.normal, t3);
  }
};
var Mt = n();
var Tt = M();
var qt = class extends mt2 {
  constructor(t3) {
    super(), this.z = t3;
  }
  equals(t3) {
    return this === t3 || xe(t3) && this.z === t3.z;
  }
  closestTo(t3) {
    return d3(t3[0], t3[1], this.z);
  }
  getPlane(t3 = M()) {
    return o2(wt, 0, 0, this.z), l3(wt, N, t3);
  }
};
var wt = n();
var jt = class extends mt2 {
  constructor(t3, e4, s5) {
    super(), this.start = t3, this.end = e4, this.planeLike = { start: s4(t3), end: s4(e4), type: s5 };
  }
  equals(t3) {
    return this === t3 || ye(t3) && this.planeLike.type === t3.planeLike.type && H(this.start, t3.start) && H(this.end, t3.end);
  }
  closestTo(t3) {
    const e4 = c2();
    return C(t3, this.planeLike, e4), e4;
  }
  closestEndTo(t3) {
    const { start: e4, end: s5 } = this.planeLike;
    return Math.sign(j3(e2(vt, s5, e4), e2(At2, s4(t3), e4))) > 0 ? this.end : this.start;
  }
  getPlane(t3 = M()) {
    const e4 = s3(Dt, this.end);
    return e4[2] += 1, p2(this.start, this.end, e4, t3);
  }
  getSlicePlane(t3 = M()) {
    const { start: e4, end: s5, type: r4 } = this.planeLike;
    if (r4 === rt.PLANE) return;
    const n4 = o2(Dt, e4[0], e4[1], 0), i2 = o2(bt, s5[0], s5[1], 0), o4 = c(bt, i2, n4);
    return l3(n4, o4, t3), t3;
  }
};
var vt = n3();
var At2 = n3();
var Dt = n();
var bt = n();
var Et = class extends jt {
  constructor(t3, e4) {
    super(t3, e4, rt.HALF_PLANE);
  }
};
var Rt = class extends jt {
  constructor(t3, e4) {
    super(t3, e4, rt.PLANE);
  }
};
var It = class extends mt2 {
  constructor(t3, e4) {
    super(), this.sphere = O2(t3, e4);
  }
  equals(t3) {
    return this === t3 || Te(t3) && _3(this.sphere, t3.sphere);
  }
  closestTo(t3) {
    const e4 = c2();
    return $(this.sphere, t3, e4), e4;
  }
  get center() {
    return U(this.sphere);
  }
  get radius() {
    return this.sphere[3];
  }
};
var Nt = class extends mt2 {
  constructor(t3, e4, s5) {
    super(), this.start = t3, this.end = e4, this.getZ = s5, this.planeLike = { start: s4(t3), end: s4(e4), type: rt.PLANE };
  }
  equals(t3) {
    return this === t3 || qe(t3) && H(this.start, t3.start) && H(this.end, t3.end) && this.getZ === t3.getZ;
  }
  closestTo(t3) {
    return Ft(this, t3);
  }
  addIfOnTheGround(t3, e4) {
    for (const s5 of e4) {
      const e5 = this.getZ(s5[0], s5[1]) ?? 0;
      $2(s5[2], e5) && (s5[2] = e5, t3.push(s5));
    }
  }
};
var Ut = class extends mt2 {
  constructor(t3, e4, s5) {
    super(), this._x = t3, this._y = e4, this._z = s5;
  }
  equals(t3) {
    return this === t3 || je(t3) && this._x === t3._x && this._y === t3._y && this._z === t3._z;
  }
  closestTo([t3, e4, s5]) {
    return f(this._x ?? t3, this._y ?? e4, this._z ?? s5);
  }
};
var Zt = class extends mt2 {
  constructor(t3, e4, s5, r4, n4) {
    super(), this._origin = t3, this._spatialReference = e4, this._distanceMeters = s5, this._z = r4, this._directionDegrees = n4;
  }
  equals(t3) {
    return this === t3 || we(t3) && E(this._origin, t3._origin) && this._spatialReference === t3._spatialReference && this._distanceMeters === t3._distanceMeters && this._z === t3._z && this._directionDegrees === t3._directionDegrees;
  }
  closestTo([t3, e4, s5]) {
    return o3(St, t3, e4), E(St, this._origin) || this._applyDirectionAndDistance(St), f(St[0], St[1], this._z ?? s5);
  }
  _applyDirectionAndDistance(t3) {
    if (null != this._directionDegrees && null != this._distanceMeters) j4(t3, this._origin, this._directionDegrees, this._distanceMeters, this._spatialReference);
    else if (null != this._directionDegrees) Gt(t3, this._origin, this._directionDegrees, t3, this._spatialReference);
    else if (null != this._distanceMeters) {
      const { azimuth: e4 } = q4(Ct, this._origin, t3, this._spatialReference);
      j4(t3, this._origin, e4 ?? 0, this._distanceMeters, this._spatialReference);
    }
  }
};
var St = [0, 0];
var Ct = new b3();
function Gt(t3, e4, s5, r4, n4) {
  let { azimuth: i2, distance: o4 } = q4(Ot, e4, r4, n4);
  i2 ?? (i2 = 0);
  let c4 = o4 * Math.cos((i2 - s5) * i);
  c4 = Math.max(0, c4), j4(t3, e4, s5, c4, n4);
}
var Ot = new b3();
function Ft(t3, e4) {
  const s5 = c2();
  return C(e4, t3.planeLike, s5), s5[2] = t3.getZ(s5[0], s5[1]) ?? ve, s5;
}
function Ht(t3, e4) {
  if (_e(t3)) {
    const s5 = [];
    for (const r4 of t3.constraints) {
      const t4 = r4.intersect(e4);
      t4 && s5.push(t4);
    }
    return ge(s5);
  }
  if (_e(e4)) return Ht(e4, t3);
  if (qe(t3)) return le(t3, e4);
  if (qe(e4)) return le(e4, t3);
  if (Le(t3)) {
    const { point: s5 } = t3;
    if (Le(e4)) return H(s5, e4.point) ? t3 : void 0;
    const r4 = e4.closestTo(s5);
    return J(r4, s5) ? t3 : void 0;
  }
  if (ke(t3)) {
    if (Le(e4)) return Ht(e4, t3);
    if (ke(e4)) return pe(S(t3.lineLike, e4.lineLike));
    if (xe(e4)) return Vt(t3, e4);
    if (ye(e4)) return pe(k2(e4.planeLike, t3.lineLike));
    if (Pe(e4)) return pe(Q2(t3.lineLike, e4.center, e4.radius));
    if (Me(e4)) return pe(O3(t3.lineLike, e4));
    if (ze(e4)) return Yt(t3, e4);
    if (Te(e4)) return Bt(t3, e4);
  } else if (xe(t3)) {
    if (Le(e4) || ke(e4)) return Ht(e4, t3);
    if (xe(e4)) return Kt(t3, e4);
    if (ye(e4)) return Qt(t3, e4);
    if (Pe(e4)) return Wt(t3, e4);
    if (Me(e4)) return $t(t3, e4);
    if (ze(e4)) return Xt(t3, e4);
    if (Te(e4)) return te(t3, e4);
  } else if (ye(t3)) {
    if (Le(e4) || ke(e4) || xe(e4)) return Ht(e4, t3);
    if (ye(e4)) return de(z2(t3.planeLike, e4.planeLike));
    if (Pe(e4)) return de(U2(t3.planeLike, e4.center, e4.radius));
    if (Me(e4)) return se(t3, e4);
    if (ze(e4)) return ee(t3, e4);
    if (Te(e4)) return re(t3, e4);
  } else if (Pe(t3)) {
    if (Le(e4) || ke(e4) || xe(e4) || ye(e4)) return Ht(e4, t3);
    if (Pe(e4)) return de(W(s4(t3.center), t3.radius, s4(e4.center), e4.radius));
    if (Me(e4)) return ne();
    if (ze(e4)) return ie(t3, e4);
    if (Te(e4)) return oe();
  } else if (Me(t3)) {
    if (Le(e4) || ke(e4) || xe(e4) || ye(e4) || Pe(e4)) return Ht(e4, t3);
    if (Me(e4)) return ce();
    if (ze(e4)) return ce(e4.asCircle());
    if (Te(e4)) return ue();
  } else if (ze(t3)) {
    if (Le(e4) || ke(e4) || xe(e4) || ye(e4) || Pe(e4) || Me(e4)) return Ht(e4, t3);
    if (ze(e4)) return ae(e4, t3);
    if (Te(e4)) return he();
  } else if (Te(t3)) {
    if (Le(e4) || ke(e4) || xe(e4) || ye(e4) || Pe(e4) || ze(e4)) return Ht(e4, t3);
    if (Te(e4)) return fe();
  }
}
var Vt = (() => {
  const t3 = M();
  return (e4, s5) => {
    const { start: r4, end: n4 } = e4;
    if (Z2(r4, n4) && $2(r4[2], s5.z)) return e4;
    const i2 = c2();
    return k(s5.getPlane(t3), r4, n4, i2) ? new gt(i2) : void 0;
  };
})();
function Yt({ lineLike: t3 }, { center: e4, radius: s5 }) {
  const r4 = e4[2];
  return pe(Q2(t3, e4, s5).filter((t4) => $2(t4[2], r4)));
}
function Bt({ lineLike: t3 }, { sphere: e4 }) {
  return pe(I(e4, t3.start, t3.end));
}
var Jt = (() => {
  const t3 = n2(), e4 = n(), r4 = n();
  return (n4, i2, o4) => {
    const { normal: c4, center: u2, radius: h2 } = i2;
    q2(c4, e4, r4);
    const f3 = O(n4), l4 = h2 * P(f3, e4), d6 = h2 * P(f3, r4);
    s2(t3, u2[0], u2[1], u2[2], 1);
    const p4 = j(n4, t3), m3 = Math.hypot(l4, d6), g2 = $2(m3, 0);
    if ($2(Q(n4, u2), 0)) {
      if (g2) return i2;
      if ($2(h2, 0)) return !o4 || nt(o4, u2) ? new gt(v2(u2)) : void 0;
      _(e4, f3, c4), A2(e4, e4);
      const t4 = new Array(), s5 = t(u2);
      q(s5, s5, e4, h2), o4 && !nt(o4, s5) || t4.push(s5);
      const r5 = t(u2);
      return q(r5, r5, e4, -h2), o4 && !nt(o4, r5) || t4.push(r5), pe(t4);
    }
    if (g2) return;
    const _5 = -p4 / m3;
    if (Math.abs(_5) > 1 || $2(_5, 1)) return;
    const z3 = Math.atan(l4 / d6), M2 = l(_5) - z3, w3 = Math.PI - M2, j7 = new Array(), v3 = n();
    q(v3, u2, e4, h2 * Math.cos(M2)), q(v3, v3, r4, h2 * Math.sin(M2)), j7.push(v3);
    const A3 = n();
    return q(A3, u2, e4, h2 * Math.cos(w3)), q(A3, A3, r4, h2 * Math.sin(w3)), j7.push(A3), pe(o4 ? tt(o4, j7) : j7);
  };
})();
function Kt(t3, e4) {
  return $2(t3.z, e4.z) ? t3 : void 0;
}
function Qt({ z: t3 }, { planeLike: e4 }) {
  const [s5, r4] = e4.start, [n4, i2] = e4.end, o4 = d3(s5, r4, t3), c4 = d3(n4, i2, t3);
  return e4.type === rt.PLANE ? new Lt2(o4, c4) : new kt(o4, c4);
}
function Wt(t3, e4) {
  const [s5, r4] = e4.center;
  return new Pt(d3(s5, r4, t3.z), e4.radius);
}
function Xt(t3, e4) {
  return $2(e4.center[2], t3.z) ? e4 : void 0;
}
var $t = (() => {
  const t3 = M();
  return (e4, s5) => Jt(e4.getPlane(t3), s5, s5.slicePlane);
})();
function te(t3, { center: e4, radius: s5 }) {
  const r4 = Math.abs(e4[2] - t3.z);
  if (r4 > s5 && !$2(r4, s5)) return;
  const n4 = d3(e4[0], e4[1], t3.z), i2 = Math.sqrt(s5 ** 2 - r4 ** 2);
  return $2(i2, 0) ? void 0 : new Pt(n4, i2);
}
var ee = (() => {
  const t3 = M();
  return (e4, { center: s5, radius: r4 }) => {
    const n4 = U2(e4.planeLike, s5, r4), i2 = s5[2];
    e4.getSlicePlane(t3);
    const o4 = new Array();
    for (const [c4, u2] of n4) {
      const e5 = [c4, u2, i2];
      nt(t3, e5) && o4.push(e5);
    }
    return pe(o4);
  };
})();
var se = (() => {
  const t3 = M(), e4 = M();
  return (s5, r4) => Jt(s5.getPlane(t3), r4, s5.getSlicePlane(e4));
})();
var re = (() => {
  const t3 = M();
  return (e4, { center: s5, radius: r4 }) => {
    const n4 = e4.getPlane(t3), i2 = V(n4, s5), o4 = Math.abs(i2);
    if (o4 > r4 && !$2(o4, r4)) return;
    const c4 = Math.sqrt(r4 ** 2 - i2 ** 2);
    if ($2(c4, 0)) {
      const t4 = c2();
      return H2(n4, s5, t4), new gt(t4);
    }
    const u2 = c2(), h2 = t(O(n4));
    return q(u2, s5, h2, i2), new zt(u2, c4, h2, e4.getSlicePlane());
  };
})();
function ne(t3, e4) {
}
function ie(t3, e4) {
  const s5 = b2(s4(t3.center), s4(e4.center));
  if ($2(s5, 0) && $2(t3.radius, e4.radius)) return e4;
  return me(W(s4(t3.center), t3.radius, s4(e4.center), e4.radius), e4.center[2]);
}
function oe(t3, e4) {
}
function ce(t3, e4) {
}
function ue(t3, e4) {
}
function ae(t3, e4) {
  if (!Z2(t3.center, e4.center)) return;
  const s5 = b2(s4(t3.center), s4(e4.center));
  if ($2(s5, 0) && $2(t3.radius, e4.radius)) return t3;
  return me(W(s4(t3.center), t3.radius, s4(e4.center), e4.radius), t3.center[2]);
}
function he(t3, e4) {
}
function fe(t3, e4) {
}
function le(t3, e4) {
  const { planeLike: s5, getZ: r4 } = t3, n4 = new Array();
  if (Le(e4)) t3.addIfOnTheGround(n4, w(s5, e4.point));
  else if (ke(e4)) t3.addIfOnTheGround(n4, k2(s5, e4.lineLike));
  else if (Pe(e4)) for (const [i2, o4] of U2(s5, e4.center, e4.radius)) {
    const t4 = r4(i2, o4);
    null != t4 && n4.push(r2(i2, o4, t4));
  }
  else if (ye(e4) || qe(e4)) for (const [i2, o4] of z2(s5, e4.planeLike)) {
    const t4 = r4(i2, o4) ?? ve;
    n4.push(r2(i2, o4, t4));
  }
  return pe(n4);
}
function de(t3) {
  return ge(t3.map(([t4, e4]) => {
    const s5 = d3(t4, e4, 0), r4 = d3(t4, e4, 1);
    return new Lt2(s5, r4);
  }));
}
function pe(t3) {
  return ge(t3.map((t4) => t4 ? new gt(a(t4)) : void 0));
}
function me(t3, e4) {
  return pe(t3.map(([t4, s5]) => [t4, s5, e4]));
}
function ge(e4) {
  if (0 !== e4.length) return 1 === e4.length ? e4[0] ?? void 0 : new xt(e4.filter(G));
}
function _e(t3) {
  return t3 instanceof xt;
}
function Le(t3) {
  return t3 instanceof gt;
}
function ke(t3) {
  return t3 instanceof _t;
}
function xe(t3) {
  return t3 instanceof qt;
}
function ye(t3) {
  return t3 instanceof jt;
}
function Pe(t3) {
  return t3 instanceof yt;
}
function ze(t3) {
  return t3 instanceof Pt;
}
function Me(t3) {
  return t3 instanceof zt;
}
function Te(t3) {
  return t3 instanceof It;
}
function qe(t3) {
  return t3 instanceof Nt;
}
function we(t3) {
  return t3 instanceof Zt;
}
function je(t3) {
  return t3 instanceof Ut;
}
var ve = 0;

// node_modules/@arcgis/core/views/interactive/snapping/snappingUtils.js
var d5 = Symbol("grid-placement-graphic");
function u(e4, t3) {
  const n4 = e4.x - t3.x, r4 = e4.y - t3.y;
  return n4 * n4 + r4 * r4;
}
function f2(e4, t3) {
  return Math.sqrt(u(e4, t3));
}
function E2(e4, t3) {
  t3.sort((t4, n4) => v(t4.targetPoint, e4) - v(n4.targetPoint, e4));
}
var h;
function y({ point: e4, distance: t3, returnEdge: n4, vertexMode: i2, coordinateHelper: { spatialReference: l4 }, filter: p4 }, c4, m3) {
  return m3 = null != m3 ? m3.clone() : new b({ where: "1=1" }), p4 && (m3.geometry = p4.geometry, m3.distance = p4.distance, m3.spatialRelationship = p4.spatialRelationship, m3.where = r(m3.where, p4.where), m3.timeExtent = g(m3.timeExtent, p4.timeExtent), m3.objectIds = w2(m3.objectIds, p4.objectIds)), { point: e3(e4[0], e4[1], e4[2], l4.toJSON()), mode: c4, distance: t3, returnEdge: n4, vertexMode: i2, query: m3.toJSON() };
}
function w2(e4, t3) {
  return e4 || t3 ? t3 ? e4 ? Array.from(o(new Set(e4), new Set(t3))) : t3 : e4 : null;
}
function j6(e4, t3, n4) {
  return { left: N2(e4.leftVertex.pos, t3, n4), right: N2(e4.rightVertex.pos, t3, n4) };
}
!function(e4) {
  e4[e4.TARGET = 0] = "TARGET", e4[e4.REFERENCE = 1] = "REFERENCE", e4[e4.REFERENCE_EXTENSION = 2] = "REFERENCE_EXTENSION";
}(h || (h = {}));
var R2 = Symbol("snapping-toggle");
function N3(n4, r4 = () => {
}) {
  const o4 = d(() => ({ view: n4.view, snappingOptions: n4.snappingOptions }), ({ view: e4, snappingOptions: t3 }) => {
    if (n4.removeHandles(R2), !e4 || !t3) return;
    const o5 = _4.TOOL, i2 = [e4.on("key-down", (e5) => {
      e5.key !== c3.toggle || e5.repeat || (t3.enabledToggled = true, r4());
    }, o5), e4.on("key-up", (e5) => {
      e5.key === c3.toggle && (t3.enabledToggled = false, r4());
    }, o5), e4.on("pointer-move", (e5) => {
      const n5 = e5.native.ctrlKey;
      t3.enabledToggled !== n5 && (t3.enabledToggled = n5, r4());
    }, o5)];
    n4.addHandles(i2, R2);
  }, A);
  n4.addHandles(o4);
}
function b4(e4) {
  var _a;
  return r3(e4) && "utilityNetworks" in e4 && !!((_a = e4.utilityNetworks) == null ? void 0 : _a.length);
}

export {
  J2 as J,
  gt,
  Lt2 as Lt,
  yt,
  qt,
  Et,
  Rt,
  Nt,
  Ut,
  Zt,
  ge,
  Le,
  d5 as d,
  u,
  f2 as f,
  E2 as E,
  h,
  y,
  j6 as j,
  N3 as N,
  b4 as b
};
//# sourceMappingURL=chunk-FAAI5VMG.js.map
