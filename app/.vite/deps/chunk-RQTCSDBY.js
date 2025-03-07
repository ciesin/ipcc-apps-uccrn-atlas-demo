import {
  C
} from "./chunk-GKX3Z6XX.js";
import {
  Be,
  Fe,
  Me,
  ee,
  oe,
  q
} from "./chunk-O4H354HZ.js";
import {
  a,
  r
} from "./chunk-TA6O62P3.js";
import {
  n as n2,
  o
} from "./chunk-ZDVQNOKR.js";
import {
  j as j2
} from "./chunk-T7KGE6VP.js";
import {
  P
} from "./chunk-W633AKTD.js";
import {
  G
} from "./chunk-NENDDUWH.js";
import {
  j2 as j,
  n
} from "./chunk-YUVX6H42.js";
import {
  M
} from "./chunk-6P7HXSJ6.js";
import {
  Q
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/arcade/functions/centroid.js
function r2(t, n3, e) {
  return Math.sqrt((t[0] - n3[0]) ** 2 + (t[1] - n3[1]) ** 2 + (void 0 !== t[2] && void 0 !== n3[2] ? (t[2] * e - n3[2] * e) ** 2 : 0));
}
function o2(t, n3, e) {
  return (t[0] - n3[0]) ** 2 + (t[1] - n3[1]) ** 2 + (void 0 !== t[2] && void 0 !== n3[2] ? (t[2] * e - n3[2] * e) ** 2 : 0);
}
var s = [];
for (const N of [[9002, 56146130, 6131, 6132, 8050, 8051, 8228], [9003, 5702, 6358, 6359, 6360, 8052, 8053], [9095, 5754]]) {
  const t = N[0];
  for (let n3 = 1; n3 < N.length; n3++) s[N[n3]] = t;
}
var i = [];
function c(t) {
  return t.vcsWkid && void 0 !== s[t.vcsWkid] ? i[s[t.vcsWkid]] : t.latestVcsWkid && void 0 !== s[t.latestVcsWkid] ? i[s[t.latestVcsWkid]] : 1;
}
function h(t, n3, e) {
  const r3 = n3[0] - t[0], o3 = n3[1] - t[1];
  if (e) {
    const t2 = n3[2] - n3[2];
    return Math.sqrt(r3 * r3 + o3 * o3 + t2 * t2);
  }
  return Math.sqrt(r3 * r3 + o3 * o3);
}
function l(t, n3, e) {
  const r3 = n3[0] - t[0], o3 = n3[1] - t[1];
  if (e) {
    const t2 = n3[2] - n3[2];
    return r3 * r3 + o3 * o3 + t2 * t2;
  }
  return r3 * r3 + o3 * o3;
}
function p(t, n3) {
  return t.x * n3.x + t.y * n3.y;
}
function g(t, n3) {
  return t.x * n3.y - n3.x * t.y;
}
function M2(t, n3, e = 0) {
  for (; t < e; ) t += n3;
  const r3 = e + n3;
  for (; t >= r3; ) t -= n3;
  return t;
}
function z(t, n3) {
  return Math.atan2(n3.y - t.y, n3.x - t.x);
}
function d(t, n3) {
  return M2(z(t, n3), 2 * Math.PI) * (180 / Math.PI);
}
function v(t, n3) {
  return M2(Math.PI / 2 - z(t, n3), 2 * Math.PI) * (180 / Math.PI);
}
function P2(t, n3, e) {
  const r3 = { x: t.x - n3.x, y: t.y - n3.y }, o3 = { x: e.x - n3.x, y: e.y - n3.y };
  return Math.atan2(g(r3, o3), p(r3, o3));
}
function Z(n3, e, r3) {
  return M(M2(P2(n3, e, r3), 2 * Math.PI));
}
function I(n3, e, r3) {
  return M(M2(-1 * P2(n3, e, r3), 2 * Math.PI));
}
i[9002] = 0.3048, i[9003] = 0.3048006096012192, i[9095] = 0.3048007491;
var R = [0, 0];
function k(t) {
  for (let n3 = 0; n3 < t.length; n3++) {
    const r3 = t[n3];
    for (let s2 = 0; s2 < r3.length - 1; s2++) {
      const o4 = r3[s2], i2 = r3[s2 + 1];
      for (let r4 = n3 + 1; r4 < t.length; r4++) for (let n4 = 0; n4 < t[r4].length - 1; n4++) {
        const s3 = t[r4][n4], c2 = t[r4][n4 + 1];
        if (G(o4, i2, s3, c2, R) && !(R[0] === o4[0] && R[1] === o4[1] || R[0] === s3[0] && R[1] === s3[1] || R[0] === i2[0] && R[1] === i2[1] || R[0] === c2[0] && R[1] === c2[1])) return true;
      }
    }
    const o3 = r3.length;
    if (!(o3 < 3)) for (let t2 = 0; t2 <= o3 - 2; t2++) {
      const n4 = r3[t2], s2 = r3[t2 + 1];
      for (let i2 = t2 + 2; i2 <= o3 - 2; i2++) {
        const t3 = r3[i2], o4 = r3[i2 + 1];
        if (G(n4, s2, t3, o4, R) && !(R[0] === n4[0] && R[1] === n4[1] || R[0] === t3[0] && R[1] === t3[1] || R[0] === s2[0] && R[1] === s2[1] || R[0] === o4[0] && R[1] === o4[1])) return true;
      }
    }
  }
  return false;
}
function W(t, n3, e) {
  return Math.max(n3, Math.min(e, t));
}
function j3(t, n3) {
  return t[0] * n3[0] + t[1] * n3[1] + t[2] * n3[2];
}
function q2(t) {
  return t[0] * t[0] + t[1] * t[1] + t[2] * t[2];
}
function w(t, n3, e) {
  const r3 = [e[0] - n3[0], e[1] - n3[1], e[2] - n3[2]], o3 = W(j3(r3, [t[0] - n3[0], t[1] - n3[1], t[2] - n3[2]]) / q2(r3), 0, 1);
  return [n3[0] + (e[0] - n3[0]) * o3, n3[1] + (e[1] - n3[1]) * o3, n3[2] + (e[2] - n3[2]) * o3];
}
function J(t, n3, e) {
  let r3 = 0;
  const o3 = e[0] - n3[0], s2 = e[1] - n3[1], i2 = o3 * o3 + s2 * s2;
  if (0 === i2) r3 = 0.5;
  else {
    r3 = ((t[0] - n3[0]) * o3 + (t[1] - n3[1]) * s2) / i2, r3 < 0 ? r3 = 0 : r3 > 1 && (r3 = 1);
  }
  return r3 <= 0.5 ? [n3[0] + (e[0] - n3[0]) * r3, n3[1] + (e[1] - n3[1]) * r3] : [e[0] - (e[0] - n3[0]) * (1 - r3), e[1] - (e[1] - n3[1]) * (1 - r3)];
}

// node_modules/@arcgis/core/arcade/functions/measures.js
function f(e, t, n3) {
  const s2 = t[0] - e[0], a2 = t[1] - e[1];
  return Math.sqrt(s2 * s2 + a2 * a2);
}
function u(e) {
  return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
}
function h2(e) {
  const t = u(e);
  return [e[0] / t, e[1] / t, e[2] / t];
}
function p2(e, t, n3, s2) {
  const a2 = h2([t[0] - e[0], t[1] - e[1], t[2] * s2 - e[2] * s2]);
  return [e[0] + a2[0] * n3, e[1] + a2[1] * n3, e[2] + a2[2] * n3];
}
function m(e, t, n3, s2) {
  return e + (t - e) / n3 * s2;
}
function d2(e, t, n3) {
  let s2 = t[0] - e[0], a2 = t[1] - e[1];
  const r3 = Math.sqrt(s2 * s2 + a2 * a2);
  return s2 /= r3, a2 /= r3, s2 *= n3, a2 *= n3, [e[0] + s2, e[1] + a2];
}
function y(n3, s2) {
  if (!n3) return null;
  switch (n3.type) {
    case "extent":
    case "multipoint":
    case "mesh":
    case "point":
      return null;
  }
  const a2 = "polygon" === n3.type ? n3.rings : n3.paths;
  let r3 = 1;
  if (n3.spatialReference.vcsWkid || n3.spatialReference.latestVcsWkid) {
    r3 = c(n3.spatialReference) / Q(n3.spatialReference);
  }
  if (0 === a2.length) return null;
  if (0 === a2[0].length) return null;
  if (false === n3.hasM) return null;
  let l2 = -1, o3 = 0;
  const u2 = n3.hasZ ? r2 : f, h3 = n3.hasZ ? 3 : 2, m2 = 2;
  for (const e of a2) {
    if (l2++, e.length > 0 && e[0][h3] === s2) return { partId: l2, distanceAlong: o3, coordinate: new j({ hasZ: n3.hasZ, hasM: n3.hasM, spatialReference: n3.spatialReference, x: e[0][0], y: e[0][1], ...n3.hasZ ? { z: e[0][m2] } : {}, ...n3.hasM ? { m: e[0][h3] } : {} }), segmentId: 0 };
    let t = -1;
    for (let a3 = 1; a3 < e.length; a3++) {
      const i2 = u2(e[a3 - 1], e[a3], r3);
      t++;
      const f2 = e[a3][h3] - e[a3 - 1][h3], y2 = e[a3][h3];
      if (y2 === s2) return { partId: l2, distanceAlong: i2 + o3, coordinate: new j({ hasZ: n3.hasZ, hasM: n3.hasM, spatialReference: n3.spatialReference, x: e[a3][0], y: e[a3][1], ...n3.hasZ ? { z: e[a3][m2] } : {}, ...n3.hasM ? { m: e[a3][h3] } : {} }), segmentId: t };
      if (y2 > s2 && s2 > e[a3 - 1][h3]) {
        const y3 = (s2 - e[a3 - 1][h3]) / f2 * i2;
        let Z3 = n3.hasZ ? p2(e[a3 - 1], e[a3], y3, r3) : d2(e[a3 - 1], e[a3], y3);
        Z3 = [...Z3, s2];
        const R4 = new j({ hasZ: n3.hasZ, hasM: n3.hasM, spatialReference: n3.spatialReference, x: Z3[0], y: Z3[1], ...n3.hasZ ? { z: Z3[m2] } : {}, ...n3.hasM ? { m: Z3[h3] } : {} });
        return { partId: l2, distanceAlong: o3 + u2(e[a3 - 1], [R4.x, R4.y, ...R4.hasZ ? [R4.z] : [], ...R4.hasM ? [R4.m] : []], r3), coordinate: R4, segmentId: t };
      }
      o3 += i2;
    }
  }
  return null;
}
function Z2(n3, s2) {
  if (!n3) return null;
  switch (n3.type) {
    case "extent":
    case "multipoint":
    case "mesh":
    case "point":
      return null;
  }
  const a2 = "polygon" === n3.type ? n3.rings : n3.paths;
  if (s2 < 0) return null;
  let r3 = 1;
  if (n3.spatialReference.vcsWkid || n3.spatialReference.latestVcsWkid) {
    r3 = c(n3.spatialReference) / Q(n3.spatialReference);
  }
  let l2 = 0;
  const o3 = n3.hasZ ? 3 : 2, u2 = 2, h3 = n3.hasZ ? r2 : f;
  let y2 = -1;
  if (0 === s2) return 0 === a2.length || 0 === a2[0].length ? null : { partId: 0, coordinate: new j({ hasZ: n3.hasZ, hasM: n3.hasM, spatialReference: n3.spatialReference, x: a2[0][0][0], y: a2[0][0][1], ...n3.hasZ ? { z: a2[0][0][u2] } : {}, ...n3.hasM ? { m: a2[0][0][o3] } : {} }), segmentId: 0 };
  for (const e of a2) {
    y2++;
    let t = -1;
    for (let a3 = 1; a3 < e.length; a3++) {
      t++;
      const i2 = h3(e[a3 - 1], e[a3], r3), f2 = l2 + i2;
      if (f2 === s2) return { partId: y2, coordinate: new j({ hasZ: n3.hasZ, hasM: n3.hasM, spatialReference: n3.spatialReference, x: e[a3][0], y: e[a3][1], ...n3.hasZ ? { z: e[a3][u2] } : {}, ...n3.hasM ? { m: e[a3][o3] } : {} }), segmentId: t };
      if (f2 > s2) {
        let f3 = n3.hasZ ? p2(e[a3 - 1], e[a3], s2 - l2, r3) : d2(e[a3 - 1], e[a3], s2 - l2);
        return f3 = [...f3, m(e[a3 - 1][o3], e[a3][o3], i2, s2 - l2)], { partId: y2, coordinate: new j({ hasZ: n3.hasZ, hasM: n3.hasM, spatialReference: n3.spatialReference, x: f3[0], y: f3[1], ...n3.hasZ ? { z: f3[u2] } : {}, ...n3.hasM ? { m: f3[o3] } : {} }), segmentId: t };
      }
      l2 = f2;
    }
  }
  return null;
}
function R2(s2, a2) {
  if (!s2) return null;
  if (!a2) return null;
  let r3 = 1;
  if (a2.spatialReference.vcsWkid || a2.spatialReference.latestVcsWkid) {
    r3 = c(a2.spatialReference) / Q(a2.spatialReference);
  }
  let l2 = null, c2 = 0;
  return l2 = s2, c2 = s2.hasZ && a2.hasZ ? r2([a2.x, a2.y, a2.z], [s2.x, s2.y, s2.z], r3) : h([a2.x, a2.y], [s2.x, s2.y], false), { coordinate: l2, distance: c2 };
}
function g2(t, n3) {
  if (!t) return null;
  if (!n3) return null;
  let r3 = 1;
  if (n3.spatialReference.vcsWkid || n3.spatialReference.latestVcsWkid) {
    r3 = c(n3.spatialReference) / Q(n3.spatialReference);
  }
  let l2 = null, c2 = 0, o3 = Number.MAX_VALUE, f2 = -1, u2 = -1;
  for (const e of t.points || []) {
    u2++;
    const l3 = t.hasZ && n3.hasZ ? o2([e[0], e[1], e[2]], [n3.x, n3.y, n3.z], r3) : l([e[0], e[1]], [n3.x, n3.y], false);
    l3 < o3 && (o3 = l3, f2 = u2);
  }
  return f2 < 0 ? null : (c2 = o3, l2 = t.getPoint(f2), { coordinate: l2, distance: Math.sqrt(c2) });
}
function M3(o3, f2) {
  if (!o3) return null;
  if (!f2) return null;
  const u2 = "polygon" === o3.type ? o3.rings : o3.paths;
  let h3 = 1;
  if (f2.spatialReference.vcsWkid || f2.spatialReference.latestVcsWkid) {
    h3 = c(f2.spatialReference) / Q(f2.spatialReference);
  }
  let p3 = Number.MAX_VALUE, d3 = -1, y2 = -1, Z3 = -1;
  const R4 = o3.hasZ && f2.hasZ;
  let g3 = null;
  const M4 = R4 ? [f2.x, f2.y, f2.z] : [f2.x, f2.y];
  for (const e of u2) {
    y2++;
    for (let t = 1; t < e.length; t++) {
      const n3 = R4 ? w(M4, e[t - 1], e[t]) : J(M4, e[t - 1], e[t]), i2 = R4 ? o2(n3, M4, h3) : l(n3, M4, false);
      i2 < p3 && (p3 = i2, g3 = n3, Z3 = y2, d3 = t - 1);
    }
  }
  if (d3 < 0) return null;
  const x3 = o3.hasM && o3.hasZ ? 3 : 2, I3 = 2, z2 = u2[Z3][d3], w2 = u2[Z3][d3 + 1];
  let k2 = null, W2 = null, A = R4 ? g3[2] : null;
  o3.hasM && (W2 = m(z2[x3], w2[x3], R4 ? r2(z2, w2, h3) : h(z2, w2, false), R4 ? r2(z2, g3, h3) : h(z2, g3, false))), o3.hasZ && false === f2.hasZ && (A = m(z2[I3], w2[I3], R4 ? r2(z2, w2, h3) : h(z2, w2, false), R4 ? r2(z2, g3, h3) : h(z2, g3, false))), k2 = new j({ hasZ: R4, hasM: o3.hasM, spatialReference: f2.spatialReference, x: g3[0], y: g3[1], ...o3.hasZ ? { z: A } : {}, ...o3.hasM ? { m: W2 } : {} });
  let V = 0;
  for (let e = 0; e <= Z3; e++) {
    const s2 = u2[e], a2 = e === Z3 ? d3 : s2.length - 1;
    for (let e2 = 1; e2 <= a2; e2++) V += o3.hasZ ? r2(s2[e2 - 1], s2[e2], h3) : h([s2[e2 - 1][0], s2[e2 - 1][1]], [s2[e2][0], s2[e2][1]], false);
  }
  return V += o3.hasZ ? r2(z2, [k2.x, k2.y, k2.z], h3) : h(z2, [k2.x, k2.y], false), { partId: Z3, segmentId: d3, coordinate: k2, distance: Math.sqrt(p3), distanceAlong: V };
}
function x(e, t) {
  if (!e) return null;
  if (!t) return null;
  if ("extent" === e.type) {
    const t2 = e;
    e = new j2({ spatialReference: e.spatialReference, rings: [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]] });
  }
  switch (e.type) {
    case "point":
      return R2(e, t) ?? null;
    case "multipoint":
      return g2(e, t) ?? null;
    case "polygon":
    case "polyline":
      return M3(e, t) ?? null;
    default:
      return null;
  }
}

// node_modules/@arcgis/core/arcade/geometry/functions.js
function j4(e, i2, l2) {
  if (oe(e, 2, 2, i2, l2), e[0] instanceof n && e[1] instanceof n) ;
  else if (e[0] instanceof n && null === e[1]) ;
  else if (e[1] instanceof n && null === e[0]) ;
  else if (null !== e[0] || null !== e[1]) throw new a(i2, r.InvalidParameter, l2);
}
function P3(e) {
  if ("polygon" !== e.type && "polyline" !== e.type && "extent" !== e.type) return 0;
  let n3 = 1;
  if (e.spatialReference.vcsWkid || e.spatialReference.latestVcsWkid) {
    n3 = c(e.spatialReference) / Q(e.spatialReference);
  }
  let t = 0;
  if ("polyline" === e.type) for (const r3 of e.paths) for (let e2 = 1; e2 < r3.length; e2++) t += r2(r3[e2], r3[e2 - 1], n3);
  else if ("polygon" === e.type) for (const r3 of e.rings) {
    for (let e2 = 1; e2 < r3.length; e2++) t += r2(r3[e2], r3[e2 - 1], n3);
    (r3[0][0] !== r3[r3.length - 1][0] || r3[0][1] !== r3[r3.length - 1][1] || void 0 !== r3[0][2] && r3[0][2] !== r3[r3.length - 1][2]) && (t += r2(r3[0], r3[r3.length - 1], n3));
  }
  else "extent" === e.type && (t += 2 * r2([e.xmin, e.ymin, 0], [e.xmax, e.ymin, 0], n3), t += 2 * r2([e.xmin, e.ymin, 0], [e.xmin, e.ymax, 0], n3), t *= 2, t += 4 * Math.abs(q(e.zmax, 0) * n3 - q(e.zmin, 0) * n3));
  return t;
}
var x2 = (i2, s2, c2) => {
  if (c2 = Fe(c2), oe(c2, 2, 2, i2, s2), null === c2[0]) return null;
  let u2 = c2[0];
  if ((o(c2[0]) || ee(c2[0])) && (u2 = Me(c2[0], i2.spatialReference)), null === u2) return null;
  if (!(u2 instanceof n)) throw new a(i2, r.InvalidParameter, s2);
  if (!(u2 instanceof P)) throw new a(i2, r.InvalidParameter, s2);
  if (!n2(c2[1])) throw new a(i2, r.InvalidParameter, s2);
  const p3 = y(u2, c2[1]);
  return p3 ? C.convertObjectToArcadeDictionary(p3, Be(i2), false, true) : null;
};
var I2 = (i2, s2, c2) => {
  if (c2 = Fe(c2), oe(c2, 2, 2, i2, s2), null === c2[0]) return null;
  let m2 = c2[0];
  if ((o(c2[0]) || ee(c2[0])) && (m2 = Me(c2[0], i2.spatialReference)), null === m2) return null;
  if (!(m2 instanceof n)) throw new a(i2, r.InvalidParameter, s2);
  if (!(m2 instanceof P)) throw new a(i2, r.InvalidParameter, s2);
  const p3 = c2[1];
  if (null === p3) return null;
  if (!(p3 instanceof j)) throw new a(i2, r.InvalidParameter, s2);
  const y2 = x(m2, p3);
  return y2 ? C.convertObjectToArcadeDictionary(y2, Be(i2), false, true) : null;
};
var R3 = (i2, s2, c2) => {
  if (c2 = Fe(c2), oe(c2, 2, 2, i2, s2), null === c2[0]) return null;
  let m2 = c2[0];
  if ((o(c2[0]) || ee(c2[0])) && (m2 = Me(c2[0], i2.spatialReference)), null === m2) return null;
  if (!(m2 instanceof n)) throw new a(i2, r.InvalidParameter, s2);
  if (!(m2 instanceof P)) throw new a(i2, r.InvalidParameter, s2);
  if (!n2(c2[1])) throw new a(i2, r.InvalidParameter, s2);
  const u2 = Z2(m2, c2[1]);
  return u2 ? C.convertObjectToArcadeDictionary(u2, Be(i2), false, true) : null;
};

export {
  d,
  v,
  Z,
  I,
  k,
  j4 as j,
  P3 as P,
  x2 as x,
  I2,
  R3 as R
};
//# sourceMappingURL=chunk-RQTCSDBY.js.map
