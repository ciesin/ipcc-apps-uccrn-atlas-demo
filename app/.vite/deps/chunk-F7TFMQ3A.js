import {
  e as e2
} from "./chunk-YRSM2W7P.js";
import {
  s as s3
} from "./chunk-EM6PL3GZ.js";
import {
  e
} from "./chunk-J7454WTE.js";
import {
  D,
  k
} from "./chunk-XEBZUAYT.js";
import {
  l,
  s as s2,
  u,
  y
} from "./chunk-WZBMMIVS.js";
import {
  a
} from "./chunk-G34KEQQG.js";
import {
  n as n2
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
function d(t, e3) {
  return t ? e3 ? 4 : 3 : e3 ? 3 : 2;
}
var m = () => n.getLogger("esri.layers.graphics.featureConversionUtils");
var g = { esriGeometryPoint: 0, esriGeometryPolyline: 2, esriGeometryPolygon: 3, esriGeometryMultipoint: 0, esriGeometryMultiPatch: 3, esriGeometryEnvelope: 0 };
var y2 = (t, e3, o, n3, r, s4) => {
  t[o] = r, t[o + 1] = s4;
};
var p = (t, e3, o, n3, r, s4) => {
  t[o] = r, t[o + 1] = s4, t[o + 2] = e3[n3 + 2];
};
var I = (t, e3, o, n3, r, s4) => {
  t[o] = r, t[o + 1] = s4, t[o + 2] = e3[n3 + 3];
};
var M = (t, e3, o, n3, r, s4) => {
  t[o] = r, t[o + 1] = s4, t[o + 2] = e3[n3 + 2], t[o + 3] = e3[n3 + 3];
};
function b(t, e3, o, n3) {
  if (t) {
    if (o) return e3 && n3 ? M : p;
    if (e3 && n3) return I;
  } else if (e3 && n3) return p;
  return y2;
}
function w({ scale: t, translate: e3 }, o) {
  return Math.round((o - e3[0]) / t[0]);
}
function N({ scale: t, translate: e3 }, o) {
  return Math.round((e3[1] - o) / t[1]);
}
function G({ scale: t, translate: e3 }, o) {
  return Math.round((o - e3[0]) / t[0]);
}
function T({ scale: t, translate: e3 }, o) {
  return Math.round((o - e3[1]) / t[1]);
}
function x({ scale: t, translate: e3 }, o, n3) {
  return o * t[n3] + e3[n3];
}
function j(t, e3, o) {
  return t ? e3 ? o ? Y(t) : v(t) : o ? k2(t) : Z(t) : null;
}
function Z(t) {
  const e3 = t.coords;
  return { x: e3[0], y: e3[1] };
}
function E(t, e3) {
  return t.coords[0] = e3.x, t.coords[1] = e3.y, t;
}
function v(t) {
  const e3 = t.coords;
  return { x: e3[0], y: e3[1], z: e3[2] };
}
function z(t, e3) {
  return t.coords[0] = e3.x, t.coords[1] = e3.y, t.coords[2] = e3.z, t;
}
function k2(t) {
  const e3 = t.coords;
  return { x: e3[0], y: e3[1], m: e3[2] };
}
function V(t, e3) {
  return t.coords[0] = e3.x, t.coords[1] = e3.y, t.coords[2] = e3.m, t;
}
function Y(t) {
  const e3 = t.coords;
  return { x: e3[0], y: e3[1], z: e3[2], m: e3[3] };
}
function _(t, e3) {
  return t.coords[0] = e3.x, t.coords[1] = e3.y, t.coords[2] = e3.z, t.coords[3] = e3.m, t;
}
function L(t, e3, o, n3) {
  let r = Z;
  o && n3 ? r = Y : o ? r = v : n3 && (r = k2);
  for (const s4 of e3) {
    const { geometry: e4, attributes: o2 } = s4, n4 = null != e4 ? r(e4) : null;
    t.push({ attributes: o2, geometry: n4 });
  }
  return t;
}
function O(t, e3) {
  return t && e3 ? _ : t ? z : e3 ? V : E;
}
function S(t, e3, o, n3, r) {
  const s4 = O(o, n3);
  for (const { geometry: u2, attributes: l2 } of e3) {
    const e4 = null != u2 ? s4(new e(), u2) : null;
    t.push(new s3(e4, l2, null, r ? l2[r] : void 0));
  }
  return t;
}
function U(t, e3, o = O(null != e3.z, null != e3.m)) {
  return o(t, e3);
}
function q(t, e3, o, n3) {
  for (const { geometry: r, attributes: s4 } of e3) t.push({ attributes: s4, geometry: null != r ? R(r, o, n3) : null });
  return t;
}
function R(t, e3, o) {
  if (null == t) return null;
  const n3 = d(e3, o), r = [];
  for (let s4 = 0; s4 < t.coords.length; s4 += n3) {
    const e4 = [];
    for (let o2 = 0; o2 < n3; o2++) e4.push(t.coords[s4 + o2]);
    r.push(e4);
  }
  return e3 ? o ? { points: r, hasZ: e3, hasM: o } : { points: r, hasZ: e3 } : o ? { points: r, hasM: o } : { points: r };
}
function A(t, e3, o, n3, r) {
  const s4 = d(o, n3);
  for (const { geometry: u2, attributes: l2 } of e3) {
    const e4 = null != u2 ? $(new e(), u2, s4) : null;
    t.push(new s3(e4, l2, null, r ? l2[r] : void 0));
  }
  return t;
}
function $(t, e3, o = d(e3.hasZ, e3.hasM)) {
  t.lengths[0] = e3.points.length;
  const n3 = t.coords;
  let r = 0;
  for (const s4 of e3.points) for (let t2 = 0; t2 < o; t2++) n3[r++] = s4[t2];
  return t;
}
function B(t, e3, o, n3) {
  for (const { geometry: r, attributes: s4 } of e3) t.push({ attributes: s4, geometry: null != r ? C(r, o, n3) : null });
  return t;
}
function C(t, e3, o) {
  if (!t) return null;
  const n3 = d(e3, o), { coords: r, lengths: s4 } = t, u2 = [];
  let l2 = 0;
  for (const c of s4) {
    const t2 = [];
    for (let e4 = 0; e4 < c; e4++) {
      const e5 = [];
      for (let t3 = 0; t3 < n3; t3++) e5.push(r[l2++]);
      t2.push(e5);
    }
    u2.push(t2);
  }
  return e3 ? o ? { paths: u2, hasZ: e3, hasM: o } : { paths: u2, hasZ: e3 } : o ? { paths: u2, hasM: o } : { paths: u2 };
}
function D2(t, e3, o, n3, r) {
  const s4 = d(o, n3);
  for (const { geometry: u2, attributes: l2, centroid: c } of e3) {
    const e4 = null != u2 ? H(new e(), u2, s4) : null, o2 = null != c ? U(new e(), c) : null;
    t.push(new s3(e4, l2, o2, r ? l2[r] : void 0));
  }
  return t;
}
function H(t, e3, o = d(e3.hasZ, e3.hasM)) {
  const { lengths: n3, coords: r } = t;
  let s4 = 0;
  for (const u2 of e3.paths) {
    for (const t2 of u2) for (let e4 = 0; e4 < o; e4++) r[s4++] = t2[e4];
    n3.push(u2.length);
  }
  return t;
}
function J(t, e3, o, n3) {
  for (const { geometry: r, attributes: s4, centroid: u2 } of e3) {
    const e4 = null != r ? K(r, o, n3) : null;
    if (null != u2) {
      const o2 = Z(u2);
      t.push({ attributes: s4, centroid: o2, geometry: e4 });
    } else t.push({ attributes: s4, geometry: e4 });
  }
  return t;
}
function K(t, e3, o) {
  if (!t) return null;
  const n3 = d(e3, o), { coords: r, lengths: s4 } = t, u2 = [];
  let l2 = 0;
  for (const c of s4) {
    const t2 = [];
    for (let e4 = 0; e4 < c; e4++) {
      const e5 = [];
      for (let t3 = 0; t3 < n3; t3++) e5.push(r[l2++]);
      t2.push(e5);
    }
    u2.push(t2);
  }
  return e3 ? o ? { rings: u2, hasZ: e3, hasM: o } : { rings: u2, hasZ: e3 } : o ? { rings: u2, hasM: o } : { rings: u2 };
}
function Q(t, e3, o, n3, r) {
  for (const { geometry: s4, centroid: u2, attributes: l2 } of e3) {
    const e4 = null != s4 ? W(new e(), s4, o, n3) : null, c = r ? l2[r] : void 0;
    null != u2 ? t.push(new s3(e4, l2, E(new e(), u2), c)) : t.push(new s3(e4, l2, null, c));
  }
  return t;
}
function W(t, e3, o = e3.hasZ, n3 = e3.hasM) {
  return X(t, e3.rings, o, n3);
}
function X(t, e3, o, n3) {
  const r = d(o, n3), { lengths: s4, coords: u2 } = t;
  let l2 = 0;
  Pt(t);
  for (const c of e3) {
    for (const t2 of c) for (let e4 = 0; e4 < r; e4++) u2[l2++] = t2[e4];
    s4.push(c.length);
  }
  return t;
}
var tt = [];
var et = [];
function ot(t, e3, o, n3, r) {
  tt[0] = t;
  const [s4] = nt(et, tt, e3, o, n3, r);
  return xt(tt), xt(et), s4;
}
function nt(e3, o, n3, r, s4, u2) {
  if (xt(e3), !n3) {
    for (const t of o) {
      const o2 = u2 ? t.attributes[u2] : void 0;
      e3.push(new s3(null, t.attributes, null, o2));
    }
    return e3;
  }
  switch (n3) {
    case "esriGeometryPoint":
      return S(e3, o, r, s4, u2);
    case "esriGeometryMultipoint":
      return A(e3, o, r, s4, u2);
    case "esriGeometryPolyline":
      return D2(e3, o, r, s4, u2);
    case "esriGeometryPolygon":
    case "esriGeometryMultiPatch":
      return Q(e3, o, r, s4, u2);
    default:
      m().error("convertToFeatureSet:unknown-geometry", new s(`Unable to parse unknown geometry type '${n3}'`)), xt(e3);
  }
  return e3;
}
function rt(t, e3, o, n3) {
  et[0] = t, ct(tt, et, e3, o, n3);
  const r = tt[0];
  return xt(tt), xt(et), r;
}
function st(e3, o, n3) {
  if (null == e3) return null;
  const r = new e();
  if ("hasZ" in e3 && null == o && (o = e3.hasZ), "hasM" in e3 && null == n3 && (n3 = e3.hasM), l(e3)) {
    return O(null != o ? o : null != e3.z, null != n3 ? n3 : null != e3.m)(r, e3);
  }
  return y(e3) ? W(r, e3, o, n3) : s2(e3) ? H(r, e3, d(o, n3)) : u(e3) ? $(r, e3, d(o, n3)) : void m().error("convertFromGeometry:unknown-geometry", new s(`Unable to parse unknown geometry type '${e3}'`));
}
function ut(e3, o, n3, r) {
  const s4 = e3 && ("coords" in e3 ? e3 : e3.geometry);
  if (null == s4) return null;
  switch (o) {
    case "esriGeometryPoint": {
      let t = Z;
      return n3 && r ? t = Y : n3 ? t = v : r && (t = k2), t(s4);
    }
    case "esriGeometryMultipoint":
      return R(s4, n3, r);
    case "esriGeometryPolyline":
      return C(s4, n3, r);
    case "esriGeometryPolygon":
      return K(s4, n3, r);
    default:
      return m().error("convertToGeometry:unknown-geometry", new s(`Unable to parse unknown geometry type '${o}'`)), null;
  }
}
function lt(t, e3) {
  for (const o of e3) t.push({ attributes: o.attributes });
  return t;
}
function ct(e3, o, n3, r, s4) {
  if (xt(e3), null == n3) return lt(e3, o);
  switch (n3) {
    case "esriGeometryPoint":
      return L(e3, o, r, s4);
    case "esriGeometryMultipoint":
      return q(e3, o, r, s4);
    case "esriGeometryPolyline":
      return B(e3, o, r, s4);
    case "esriGeometryPolygon":
      return J(e3, o, r, s4);
    default:
      m().error("convertToFeatureSet:unknown-geometry", new s(`Unable to parse unknown geometry type '${n3}'`));
  }
  return e3;
}
function it(t) {
  const { objectIdFieldName: e3, spatialReference: o, transform: n3, fields: r, hasM: s4, hasZ: u2, features: l2, geometryType: c, exceededTransferLimit: i, uniqueIdField: f, queryGeometry: a2, queryGeometryType: h } = t, d2 = { features: ct([], l2, c, u2, s4), fields: r, geometryType: c, objectIdFieldName: e3, spatialReference: o, uniqueIdField: f, queryGeometry: ut(a2, h, false, false) };
  return n3 && (d2.transform = n3), i && (d2.exceededTransferLimit = i), s4 && (d2.hasM = s4), u2 && (d2.hasZ = u2), d2;
}
function ft(e3, o) {
  const n3 = new e2(), { hasM: r, hasZ: s4, features: u2, objectIdFieldName: l2, spatialReference: c, geometryType: i, exceededTransferLimit: f, transform: h, fields: d2 } = e3;
  return d2 && (n3.fields = d2), n3.geometryType = i ?? null, n3.objectIdFieldName = l2 ?? o ?? null, n3.spatialReference = c ?? null, n3.objectIdFieldName ? (u2 && nt(n3.features, u2, i, s4, r, n3.objectIdFieldName), f && (n3.exceededTransferLimit = f), r && (n3.hasM = r), s4 && (n3.hasZ = s4), h && (n3.transform = h), n3) : (m().error(new s("optimized-features:invalid-objectIdFieldName", "objectIdFieldName is missing")), n3);
}
function at(t) {
  const { transform: e3, features: o, hasM: n3, hasZ: r } = t;
  if (!e3) return t;
  for (const s4 of o) null != s4.geometry && Mt(s4.geometry, s4.geometry, n3, r, e3), null != s4.centroid && Mt(s4.centroid, s4.centroid, n3, r, e3);
  return t.transform = null, t;
}
function ht(t, e3) {
  const { geometryType: o, features: n3, hasM: r, hasZ: s4 } = e3;
  if (!t) return e3;
  for (let u2 = 0; u2 < n3.length; u2++) {
    const e4 = n3[u2], l2 = e4.weakClone();
    l2.geometry = new e(), dt(l2.geometry, e4.geometry, r, s4, o, t), e4.centroid && (l2.centroid = new e(), dt(l2.centroid, e4.centroid, r, s4, "esriGeometryPoint", t)), n3[u2] = l2;
  }
  return e3.transform = t, e3;
}
function dt(t, e3, o, n3, r, s4, u2 = o, l2 = n3) {
  if (Pt(t), !(e3 == null ? void 0 : e3.coords.length)) return null;
  const c = g[r], { coords: i, lengths: f } = e3, a2 = d(o, n3), h = d(o && u2, n3 && l2), m2 = b(o, n3, u2, l2);
  if (!f.length) return m2(t.coords, i, 0, 0, w(s4, i[0]), N(s4, i[1])), Pt(t, a2, 0), t;
  let y3, p2, I2, M2, G2 = 0, T2 = 0, F = T2;
  for (const d2 of f) {
    if (d2 < c) continue;
    let e4 = 0;
    T2 = F, I2 = y3 = w(s4, i[G2]), M2 = p2 = N(s4, i[G2 + 1]), m2(t.coords, i, T2, G2, I2, M2), e4++, G2 += a2, T2 += h;
    for (let o2 = 1; o2 < d2; o2++, G2 += a2) I2 = w(s4, i[G2]), M2 = N(s4, i[G2 + 1]), I2 === y3 && M2 === p2 || (m2(t.coords, i, T2, G2, I2 - y3, M2 - p2), T2 += h, e4++, y3 = I2, p2 = M2);
    e4 >= c && (t.lengths.push(e4), F = T2);
  }
  return xt(t.coords, F), t.coords.length ? t : null;
}
function mt(t, e3, o, n3, r, s4, u2 = o, l2 = n3) {
  if (Pt(t), !(e3 == null ? void 0 : e3.coords.length)) return null;
  const c = g[r], { coords: i, lengths: f } = e3, a2 = d(o, n3), h = d(o && u2, n3 && l2), m2 = b(o, n3, u2, l2);
  if (!f.length) return m2(t.coords, i, 0, 0, i[0], i[1]), Pt(t, a2, 0), t;
  let y3 = 0;
  const p2 = s4 * s4;
  for (const d2 of f) {
    if (d2 < c) {
      y3 += d2 * a2;
      continue;
    }
    const e4 = t.coords.length / h, o2 = y3, n4 = y3 + (d2 - 1) * a2;
    m2(t.coords, i, t.coords.length, o2, i[o2], i[o2 + 1]), yt(t.coords, i, a2, p2, m2, o2, n4), m2(t.coords, i, t.coords.length, n4, i[n4], i[n4 + 1]);
    const r2 = t.coords.length / h - e4;
    r2 >= c ? t.lengths.push(r2) : xt(t.coords, e4 * h), y3 += d2 * a2;
  }
  return t.coords.length ? t : null;
}
function gt(t, e3, o, n3) {
  const r = t[e3], s4 = t[e3 + 1], u2 = t[o], l2 = t[o + 1], c = t[n3], i = t[n3 + 1];
  let f = u2, a2 = l2, h = c - f, d2 = i - a2;
  if (0 !== h || 0 !== d2) {
    const t2 = ((r - f) * h + (s4 - a2) * d2) / (h * h + d2 * d2);
    t2 > 1 ? (f = c, a2 = i) : t2 > 0 && (f += h * t2, a2 += d2 * t2);
  }
  return h = r - f, d2 = s4 - a2, h * h + d2 * d2;
}
function yt(t, e3, o, n3, r, s4, u2) {
  let l2, c = n3, i = 0;
  for (let f = s4 + o; f < u2; f += o) l2 = gt(e3, f, s4, u2), l2 > c && (i = f, c = l2);
  c > n3 && (i - s4 > o && yt(t, e3, o, n3, r, s4, i), r(t, e3, t.length, i, e3[i], e3[i + 1]), u2 - i > o && yt(t, e3, o, n3, r, i, u2));
}
function pt(t, e3, o, u2) {
  var _a;
  if (!((_a = e3 == null ? void 0 : e3.coords) == null ? void 0 : _a.length)) return null;
  const l2 = d(o, u2);
  let c = Number.POSITIVE_INFINITY, i = Number.POSITIVE_INFINITY, f = Number.NEGATIVE_INFINITY, a2 = Number.NEGATIVE_INFINITY;
  if (e3 && e3.coords) {
    const t2 = e3.coords;
    for (let e4 = 0; e4 < t2.length; e4 += l2) {
      const o2 = t2[e4], n3 = t2[e4 + 1];
      c = Math.min(c, o2), f = Math.max(f, o2), i = Math.min(i, n3), a2 = Math.max(a2, n3);
    }
  }
  return k(t) ? D(t, c, i, f, a2) : a(c, i, f, a2, t), t;
}
function Mt(t, e3, n3, r, s4) {
  const { coords: u2, lengths: l2 } = e3, c = d(n3, r);
  if (!u2.length) return t !== e3 && Pt(t), t;
  n2(s4);
  const { originPosition: i, scale: f, translate: a2 } = s4, h = jt;
  h.originPosition = i;
  const m2 = h.scale;
  m2[0] = f[0] ?? 1, m2[1] = -(f[1] ?? 1), m2[2] = f[2] ?? 1, m2[3] = f[3] ?? 1;
  const g2 = h.translate;
  if (g2[0] = a2[0] ?? 0, g2[1] = a2[1] ?? 0, g2[2] = a2[2] ?? 0, g2[3] = a2[3] ?? 0, !l2.length) {
    for (let e4 = 0; e4 < c; ++e4) t.coords[e4] = x(h, u2[e4], e4);
    return t !== e3 && Pt(t, c, 0), t;
  }
  let y3 = 0;
  for (let o = 0; o < l2.length; o++) {
    const e4 = l2[o];
    t.lengths[o] = e4;
    for (let o2 = 0; o2 < c; ++o2) t.coords[y3 + o2] = x(h, u2[y3 + o2], o2);
    let n4 = t.coords[y3], r2 = t.coords[y3 + 1];
    y3 += c;
    for (let o2 = 1; o2 < e4; o2++, y3 += c) {
      n4 += u2[y3] * m2[0], r2 += u2[y3 + 1] * m2[1], t.coords[y3] = n4, t.coords[y3 + 1] = r2;
      for (let e5 = 2; e5 < c; ++e5) t.coords[y3 + e5] = x(h, u2[y3 + e5], e5);
    }
  }
  return t !== e3 && Pt(t, u2.length, l2.length), t;
}
function bt(t, e3, o, n3, r, s4) {
  if (Pt(t), t.lengths.push(...e3.lengths), o === r && n3 === s4) for (let u2 = 0; u2 < e3.coords.length; u2++) t.coords.push(e3.coords[u2]);
  else {
    const u2 = d(o, n3), l2 = b(o, n3, r, s4), c = e3.coords;
    for (let e4 = 0; e4 < c.length; e4 += u2) l2(t.coords, c, t.coords.length, e4, c[e4], c[e4 + 1]);
  }
  return t;
}
function Nt(t, e3, o, n3) {
  let r = 0, s4 = t[n3 * e3], u2 = t[n3 * (e3 + 1)];
  for (let l2 = 1; l2 < o; l2++) {
    const o2 = s4 + t[n3 * (e3 + l2)], c = u2 + t[n3 * (e3 + l2) + 1], i = (o2 - s4) * (c + u2);
    s4 = o2, u2 = c, r += i;
  }
  return 0.5 * r;
}
function Gt(t, e3) {
  const { coords: o, lengths: n3 } = t;
  let r = 0, s4 = 0;
  for (let u2 = 0; u2 < n3.length; u2++) {
    const t2 = n3[u2];
    s4 += Nt(o, r, t2, e3), r += t2;
  }
  return Math.abs(s4);
}
function Tt(t, e3, o, n3) {
  return 0 === t * n3 - o * e3 && t * o + e3 * n3 > 0;
}
function Ft(t, e3, o, n3, r) {
  const s4 = d(n3, r);
  if (!t.lengths.length) {
    if (t.coords.length < 2) return null;
    const [o2, n4] = t.coords, r2 = G(e3, o2), s5 = T(e3, n4);
    return new e([], [r2, s5]);
  }
  const u2 = new e([], [0, 0]), l2 = g[o], c = "esriGeometryPolygon" === o || "esriGeometryPolyline" === o;
  let i = 0, f = 0;
  for (let a2 = 0; a2 < t.lengths.length; a2++) {
    const o2 = t.lengths[a2], n4 = f;
    let r2 = G(e3, t.coords[s4 * i]), h = T(e3, t.coords[s4 * i + 1]);
    u2.coords[f++] = r2, u2.coords[f++] = h;
    let d2 = 0, m2 = 0, g2 = 1;
    for (let l3 = 1; l3 < o2; l3++) {
      const o3 = G(e3, t.coords[s4 * (l3 + i)]), n5 = T(e3, t.coords[s4 * (l3 + i) + 1]);
      if (o3 !== r2 || n5 !== h) {
        const t2 = o3 - r2, e4 = n5 - h;
        c && Tt(d2, m2, t2, e4) ? (u2.coords[f - 2] += t2, u2.coords[f - 1] += e4, r2 += t2, h += e4) : (u2.coords[f++] = o3, u2.coords[f++] = n5, r2 = o3, h = n5, d2 = t2, m2 = e4, g2 += 1);
      }
    }
    g2 < l2 ? f = n4 : u2.lengths.push(g2), i += o2;
  }
  return 0 === u2.lengths.length ? null : u2;
}
function Pt(t, e3 = 0, o = 0) {
  xt(t.lengths, o), xt(t.coords, e3);
}
function xt(t, e3 = 0) {
  t.length !== e3 && (t.length = e3);
}
var jt = { originPosition: "lowerLeft", scale: [1, 1, 1, 1], translate: [0, 0, 0, 0] };

export {
  w,
  N,
  j,
  U,
  R,
  C,
  K,
  W,
  X,
  ot,
  nt,
  rt,
  st,
  ut,
  it,
  ft,
  at,
  ht,
  dt,
  mt,
  pt,
  Mt,
  bt,
  Gt,
  Ft
};
//# sourceMappingURL=chunk-F7TFMQ3A.js.map
