import {
  K,
  L,
  O as O2,
  k,
  q
} from "./chunk-4WERUJEK.js";
import {
  j as j2
} from "./chunk-T7KGE6VP.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  O,
  P,
  Q,
  a,
  d,
  p,
  s as s2
} from "./chunk-LTDNORB5.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  G
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js
var d2;
function w2(e, t, n) {
  return !L(e, t, n);
}
function M(e, n, i) {
  const o = w2(e, n, i);
  if (o && !k()) throw new s("rasterprojectionhelper-project", "projection engine is not loaded");
  return o;
}
!function(e) {
  e[e.None = 0] = "None", e[e.North = 1] = "North", e[e.South = 2] = "South", e[e.Both = 3] = "Both";
}(d2 || (d2 = {}));
var R = (e, t, n, i = 0) => {
  if (1 === n[0]) return [0, 0];
  let o = 1, r = -1, s3 = 1, a2 = -1;
  for (let g2 = 0; g2 < e.length; g2 += 2) isNaN(e[g2]) || (o = o > e[g2] ? e[g2] : o, r = r > e[g2] ? r : e[g2], s3 = s3 > e[g2 + 1] ? e[g2 + 1] : s3, a2 = a2 > e[g2 + 1] ? a2 : e[g2 + 1]);
  const { cols: l, rows: c } = t, f = (r - o) / l / n[0], u = (a2 - s3) / c / n[1], m = 2 * i;
  let x = 0, h = false, p2 = [0, 0];
  for (let g2 = 0; g2 < l - 3; g2++) {
    for (let t2 = 0; t2 < c - 3; t2++) {
      const n2 = g2 * c * 2 + 2 * t2, i2 = (e[n2] + e[n2 + 4] + e[n2 + 4 * c] + e[n2 + 4 * c + 4]) / 4, o2 = (e[n2 + 1] + e[n2 + 5] + e[n2 + 4 * c + 1] + e[n2 + 4 * c + 5]) / 4, r2 = Math.abs((i2 - e[n2 + 2 * c + 2]) / f), s4 = Math.abs((o2 - e[n2 + 2 * c + 3]) / u);
      if (r2 + s4 > x && (x = r2 + s4, p2 = [r2, s4]), m && x > m) {
        h = true;
        break;
      }
    }
    if (h) break;
  }
  return p2;
};
var S = { 3395: 20037508342789244e-9, 3410: 17334193943686873e-9, 3857: 20037508342788905e-9, 3975: 17367530445161372e-9, 4087: 20037508342789244e-9, 4088: 20015108787169147e-9, 6933: 17367530445161372e-9, 32662: 20037508342789244e-9, 53001: 2001508679602057e-8, 53002: 1000754339801029e-8, 53003: 2001508679602057e-8, 53004: 2001508679602057e-8, 53016: 14152803599503474e-9, 53017: 17333573624304302e-9, 53034: 2001508679602057e-8, 53079: 20015114352186374e-9, 53080: 20015114352186374e-9, 54001: 20037508342789244e-9, 54002: 10018754171394624e-9, 54003: 20037508342789244e-9, 54004: 20037508342789244e-9, 54016: 14168658027268292e-9, 54017: 1736753044516137e-8, 54034: 20037508342789244e-9, 54079: 20037508342789244e-9, 54080: 20037508342789244e-9, 54100: 20037508342789244e-9, 54101: 20037508342789244e-9 };
var P2 = 32;
var b = 4;
var G2 = b;
var k2 = /* @__PURE__ */ new Map();
var E = /* @__PURE__ */ new Map();
var N = 500;
var T = 39.37;
var v = 96;
var C = null;
async function j3() {
  C && k() || (k() || await K(), C = await import("./geometryEngine-NZOZ5KZJ.js"));
}
function _(e, t, n) {
  M(e.spatialReference, t);
  return n ? q(t, e.spatialReference, e) : q(e.spatialReference, t, e);
}
function z(e, t, n, o = null) {
  const r = e.spatialReference;
  if (!r || !t || r.equals(t)) return e;
  M(r, t, o);
  const s3 = n.center, a2 = new w({ xmin: s3.x - e.x / 2, xmax: s3.x + e.x / 2, ymin: s3.y - e.y / 2, ymax: s3.y + e.y / 2, spatialReference: r }), l = O2(a2, t, o), c = te(t);
  return null == l || null != c && l.width >= c ? L2(e, r, t) : { x: l.width, y: l.height };
}
function L2(e, t, i) {
  const o = Q(t) / Q(i);
  return { x: e.x * o, y: e.y * o };
}
function I(e, i, o) {
  const { spatialReference: r } = o;
  if (!r || !i || r.equals(i)) return e;
  if (r.isGeographic && i.isGeographic) return L2(e, r, i);
  if (M(r, i), !C) throw new s("raster-projection-helper:project-dataset-resolution", "geometry engine is not loaded");
  let { x: s3, y: a2 } = e;
  const l = (s3 + a2) / 2 * Q(r);
  let c = 1;
  l > 30 && (c = 30 / l, s3 *= c, a2 *= c);
  const u = 256, m = s3 * u / 2, x = a2 * u / 2, { x: h, y: g2 } = o.center, y = [];
  for (let t = 0; t <= u; t++) y.push([h - m, g2 - x + t * a2]);
  for (let t = 1; t <= u; t++) y.push([h - m + t * s3, g2 + x]);
  for (let t = 1; t <= u; t++) y.push([h + m, g2 + x - t * a2]);
  for (let t = 1; t < u; t++) y.push([h + m - t * s3, g2 - x]);
  y.push(y[0]);
  const d3 = new j2({ rings: [y], spatialReference: r }), w3 = O2(d3, i);
  if (!w3) return L2(e, r, i);
  const R2 = w3.extent, S2 = te(i);
  if (null == R2 || null != S2 && R2.width >= S2) return L2(e, r, i);
  const P3 = C.planarArea(w3), b2 = s3 * a2 * u * u, G3 = Math.sqrt(P3 / b2) / c, k3 = { x: R2.width / c / u, y: R2.height / c / u }, E2 = { x: s3 * G3, y: a2 * G3 }, N2 = k3.x * k3.y;
  return Math.abs(N2 - E2.x * E2.y) / N2 < 0.1 ? k3 : E2;
}
function W(e, t) {
  return ("number" == typeof e ? e : (e.x + e.y) / 2) * Q(t) * v * T;
}
function O3(e, t) {
  const { pixelSize: n, extent: i } = e;
  return W(I(n, t, i), t);
}
function A(e, t = 0.01) {
  return Q(e) ? t / Q(e) : 0;
}
function B(e, t, n = null, i = true) {
  const o = e.spatialReference;
  if (o.equals(t)) return e;
  M(o, t, n);
  const r = O2(e, t, n);
  return i && r ? (F([e], [r], o, t), r) : r;
}
function F(e, t, n, i) {
  const o = ne(n, true), r = ne(i, true), s3 = A(n, N), a2 = A(i, N);
  if (s3 && null != o && null != r) for (let l = 0; l < e.length; l++) {
    const n2 = t[l];
    if (!n2) continue;
    const { x: i2 } = e[l], { x: c } = n2;
    c >= r[1] - a2 && Math.abs(i2 - o[0]) < s3 ? n2.x -= r[1] - r[0] : c <= r[0] + a2 && Math.abs(i2 - o[1]) < s3 && (n2.x += r[1] - r[0]);
  }
}
function q2(e) {
  const { inSR: t, outSR: n, datumTransformation: i, preferPE: o } = e;
  if (t.equals(n)) {
    const { points: t2 } = D(e, null);
    return t2;
  }
  if (t.isWebMercator && n.isWGS84 || t.isWGS84 && n.isWebMercator) return U(e);
  if (M(t, n, i) && o) {
    if (t.isGeographic) return J(e);
    if (null != X(t)) return J(e);
  }
  return Y(e);
}
function Y(e) {
  const { points: t } = D(e, null), { inSR: n, outSR: i, datumTransformation: o } = e, r = t.map((e2) => new j(e2[0], e2[1], n)), s3 = O2(r, i, o);
  return o && F(r, s3, n, i), s3.map((e2) => e2 ? [e2.x, e2.y] : [NaN, NaN]);
}
function J(e) {
  const { inSR: t, outSR: n, datumTransformation: i } = e, l = X(t), { points: c, mask: f } = D(e, l);
  if (!t.isGeographic) {
    const e2 = t.wkid ? p.coordsys(t.wkid) : p.fromString(t.isGeographic ? s2.PE_TYPE_GEOGCS : s2.PE_TYPE_PROJCS, t.wkt2 || t.wkt);
    P.projToGeog(e2, c.length, c);
  }
  if (null != i && i.steps.length) {
    let e2;
    const t2 = 179.9955;
    if (n.isGeographic && (e2 = c.map(([e3]) => e3 > t2 ? 1 : e3 < -179.9955 ? -1 : 0)), i.steps.forEach((e3) => {
      const t3 = e3.wkid ? p.geogtran(e3.wkid) : p.fromString(s2.PE_TYPE_GEOGTRAN, e3.wkt);
      a.geogToGeog(t3, c.length, c, null, e3.isInverse ? s2.PE_TRANSFORM_2_TO_1 : s2.PE_TRANSFORM_1_TO_2);
    }), e2) for (let n2 = 0; n2 < c.length; n2++) {
      const i2 = e2[n2], o = c[n2][0], r = o > t2 ? 1 : o < -179.9955 ? -1 : 0;
      i2 && r && i2 !== r && (c[n2][0] = i2 > 0 ? o + 360 : o - 360);
    }
  }
  if (!n.isGeographic) {
    const e2 = X(n, true), t2 = null != e2 && e2.isEnvelope ? [e2.bbox[1], e2.bbox[3]] : [-90, 90];
    H(c, t2);
    const i2 = n.wkid ? p.coordsys(n.wkid) : p.fromString(n.isGeographic ? s2.PE_TYPE_GEOGCS : s2.PE_TYPE_PROJCS, n.wkt2 || n.wkt);
    P.geogToProj(i2, c.length, c);
  }
  let u = c;
  if (f && c.length !== f.length) {
    u = [];
    for (let e2 = 0, t2 = 0; e2 < f.length; e2++) f[e2] ? u.push(c[t2++]) : u.push([NaN, NaN]);
  }
  return u;
}
function U(e) {
  const { cols: t, rows: n, xres: i, yres: o, usePixelCenter: r, inSR: s3, outSR: a2 } = e;
  let { xmin: l, ymax: f } = e;
  r && (l += i / 2, f -= o / 2);
  const u = [], m = [], x = Math.max(t, n);
  for (let g2 = 0; g2 < x; g2++) {
    const e2 = l + i * Math.min(t, g2), r2 = f - o * Math.min(n, g2), x2 = O2(new j({ x: e2, y: r2, spatialReference: s3 }), a2);
    g2 <= t && u.push(x2.x), g2 <= n && m.push(x2.y);
  }
  const h = [];
  for (let c = 0; c < t; c++) for (let e2 = 0; e2 < n; e2++) h.push([u[c], m[e2]]);
  return h;
}
function X(e, t = false) {
  let n = e.wkid || e.wkt2 || e.wkt;
  if (!n || e.isGeographic) return null;
  if (n = String(n), k2.has(n)) {
    const e2 = k2.get(n);
    return t ? e2 == null ? void 0 : e2.gcs : e2 == null ? void 0 : e2.pcs;
  }
  const i = e.wkid ? p.coordsys(e.wkid) : p.fromString(e.isGeographic ? s2.PE_TYPE_GEOGCS : s2.PE_TYPE_PROJCS, e.wkt2 || e.wkt), s3 = K2(i, A(e, 1e-4)), a2 = K2(i, 0, true);
  return k2.set(n, { pcs: s3, gcs: a2 }), t ? a2 : s3;
}
function K2(e, t = 0, n = false) {
  const i = O.generate(e), o = n ? e.horizonGcsGenerate() : e.horizonPcsGenerate();
  if (!i || !(o == null ? void 0 : o.length)) return null;
  let r = false, s3 = o.find((e2) => 1 === e2.getInclusive() && 1 === e2.getKind());
  if (!s3) {
    if (s3 = o.find((e2) => 1 === e2.getInclusive() && 0 === e2.getKind()), !s3) return null;
    r = true;
  }
  const a2 = n ? 0 : (2 === i.getNorthPoleLocation() ? 1 : 0) | (2 === i.getSouthPoleLocation() ? 2 : 0), c = i.isPannableRectangle(), f = s3.getCoord();
  if (r) return { isEnvelope: r, isPannable: c, vertices: f, coef: null, bbox: [f[0][0] - t, f[0][1] - t, f[1][0] + t, f[1][1] + t], poleLocation: a2 };
  let u = 0;
  const m = [];
  let [x, h] = f[0], [p2, g2] = f[0];
  for (let l = 0, y = f.length; l < y; l++) {
    u++, u === y && (u = 0);
    const [e2, t2] = f[l], [n2, i2] = f[u];
    if (i2 === t2) m.push([e2, n2, t2, i2, 2]);
    else {
      const o2 = (n2 - e2) / (i2 - t2 || 1e-4), r2 = e2 - o2 * t2;
      t2 < i2 ? m.push([o2, r2, t2, i2, 0]) : m.push([o2, r2, i2, t2, 1]);
    }
    x = x < e2 ? x : e2, h = h < t2 ? h : t2, p2 = p2 > e2 ? p2 : e2, g2 = g2 > t2 ? g2 : t2;
  }
  return { isEnvelope: false, isPannable: c, vertices: f, coef: m, bbox: [x, h, p2, g2], poleLocation: a2 };
}
function D(e, t) {
  const n = [], { cols: i, rows: o, xres: r, yres: s3, usePixelCenter: a2 } = e;
  let { xmin: l, ymax: c } = e;
  if (a2 && (l += r / 2, c -= s3 / 2), null == t) {
    for (let e2 = 0; e2 < i; e2++) for (let t2 = 0; t2 < o; t2++) n.push([l + r * e2, c - s3 * t2]);
    return { points: n };
  }
  const f = new Uint8Array(i * o);
  if (t.isEnvelope) {
    const { bbox: [e2, a3, u2, m2] } = t;
    for (let x = 0, h = 0; x < i; x++) {
      const i2 = l + r * x, p2 = t.isPannable || i2 >= e2 && i2 <= u2;
      for (let e3 = 0; e3 < o; e3++, h++) {
        const t2 = c - s3 * e3;
        p2 && t2 >= a3 && t2 <= m2 && (n.push([i2, t2]), f[h] = 1);
      }
    }
    return { points: n, mask: f };
  }
  const u = t.coef, m = [];
  for (let x = 0; x < o; x++) {
    const e2 = c - s3 * x, t2 = [], n2 = [];
    for (let o2 = 0; o2 < u.length; o2++) {
      const [i3, r2, s4, a3, l2] = u[o2];
      if (e2 === s4 && s4 === a3) t2.push(i3), t2.push(r2), n2.push(2), n2.push(2);
      else if (e2 >= s4 && e2 <= a3) {
        const o3 = i3 * e2 + r2;
        t2.push(o3), n2.push(l2);
      }
    }
    let i2 = t2;
    if (t2.length > 2) {
      let e3 = 2 === n2[0] ? 0 : n2[0], o2 = t2[0];
      i2 = [];
      for (let r2 = 1; r2 < n2.length; r2++) 2 === n2[r2] && r2 !== n2.length - 1 || (n2[r2] !== e3 && (i2.push(0 === e3 ? Math.min(o2, t2[r2 - 1]) : Math.max(o2, t2[r2 - 1])), e3 = n2[r2], o2 = t2[r2]), r2 === n2.length - 1 && i2.push(0 === n2[r2] ? Math.min(o2, t2[r2]) : Math.max(o2, t2[r2])));
      i2.sort((e4, t3) => e4 - t3);
    } else t2[0] > t2[1] && (i2 = [t2[1], t2[0]]);
    m.push(i2);
  }
  for (let x = 0, h = 0; x < i; x++) {
    const e2 = l + r * x;
    for (let t2 = 0; t2 < o; t2++, h++) {
      const i2 = c - s3 * t2, o2 = m[t2];
      if (2 === o2.length) e2 >= o2[0] && e2 <= o2[1] && (n.push([e2, i2]), f[h] = 1);
      else if (o2.length > 2) {
        let t3 = false;
        for (let n2 = 0; n2 < o2.length; n2 += 2) if (e2 >= o2[n2] && e2 <= o2[n2 + 1]) {
          t3 = true;
          break;
        }
        t3 && (n.push([e2, i2]), f[h] = 1);
      }
    }
  }
  return { points: n, mask: f };
}
function H(e, t) {
  const [n, i] = t;
  for (let o = 0; o < e.length; o++) {
    const t2 = e[o][1];
    (t2 < n || t2 > i) && (e[o] = [NaN, NaN]);
  }
}
function Q2(e, t) {
  const n = te(e[0].spatialReference);
  if (e.length < 2 || null == n) return e[0];
  if (t = t ?? A(e[0].spatialReference), 1 === (e = e.filter((e2) => e2.width > t)).length) return e[0];
  let { xmin: o, xmax: r, ymin: s3, ymax: a2 } = e[0];
  for (let i = 1; i < e.length; i++) {
    const t2 = e[i];
    r = t2.xmax + n * i, s3 = Math.min(s3, t2.ymin), a2 = Math.max(a2, t2.ymax);
  }
  return new w({ xmin: o, xmax: r, ymin: s3, ymax: a2, spatialReference: e[0].spatialReference });
}
function V(t, n, o = null, r = true) {
  const s3 = t.spatialReference;
  if (s3.equals(n)) return t;
  const a2 = oe(t), l = te(s3, true), c = te(n);
  if (0 === a2 || null == l || null == c) {
    const e = ee(t, n, o, r);
    if (null == l && null != c && Math.abs(e.width - c) < A(n) && k()) {
      const i = X(s3);
      if (null != i && i.poleLocation === d2.None && t.width < (i.bbox[2] - i.bbox[0]) / 2) return $(t, n) || e;
    }
    return e;
  }
  const f = t.clone().normalize();
  if (1 === f.length && t.xmax < l && t.xmax - l / 2 > A(s3)) {
    const { xmin: e, xmax: n2 } = t;
    for (let o2 = 0; o2 <= a2; o2++) {
      const r2 = 0 === o2 ? e : -l / 2, c2 = o2 === a2 ? n2 - l * o2 : l / 2;
      f[o2] = new w({ xmin: r2, xmax: c2, ymin: t.ymin, ymax: t.ymax, spatialReference: s3 });
    }
  }
  return Q2(f.map((e) => ee(e, n, o, r)).filter(G));
}
function Z(e, t, n) {
  if ("extent" === e.type) {
    const { xmin: t2, ymin: n2, xmax: i, ymax: o, spatialReference: r } = e;
    e = new j2({ rings: [[[t2, o], [i, o], [i, n2], [t2, n2], [t2, o]]], spatialReference: r });
  }
  return e.spatialReference.equals(t) ? e : (M(e.spatialReference, t, n), O2(e, t, n));
}
function $(e, t) {
  const n = te(t);
  if (null == n) return null;
  let { xmin: o, ymin: r, xmax: s3, ymax: a2 } = e;
  const l = e.spatialReference, c = new j2({ spatialReference: l, rings: [[[o, r], [s3, r], [s3, a2], [o, a2], [o, r]]] }), u = O2(c, t);
  if (2 !== u.rings.length || !u.rings[0].length || !u.rings[1].length) return null;
  const { rings: m } = u, x = A(l), h = new w({ spatialReference: t });
  for (let i = 0; i < 2; i++) {
    o = s3 = m[i][0][0], r = a2 = m[i][0][1];
    for (let e2 = 0; e2 < m[i].length; e2++) o = o > m[i][e2][0] ? m[i][e2][0] : o, s3 = s3 < m[i][e2][0] ? m[i][e2][0] : s3, r = r > m[i][e2][1] ? m[i][e2][1] : r, a2 = a2 < m[i][e2][1] ? m[i][e2][1] : a2;
    if (0 === i) h.ymin = r, h.ymax = a2, h.xmin = o, h.xmax = s3;
    else if (h.ymin = Math.min(h.ymin, r), h.ymax = Math.max(h.ymax, a2), Math.abs(s3 - n / 2) < x) h.xmin = o, h.xmax = h.xmax + n;
    else {
      if (!(Math.abs(o + n / 2) < x)) return null;
      h.xmax = s3 + n;
    }
  }
  return h;
}
function ee(e, t, n = null, i = true, o = true) {
  const r = e.spatialReference;
  if (r.equals(t) || !t) return e;
  M(r, t, n);
  const s3 = O2(e, t, n);
  if (o && t.isWebMercator && s3 && (s3.ymax = Math.min(20037508342787e-6, s3.ymax), s3.ymin = Math.max(-20037508342787e-6, s3.ymin), s3.ymin >= s3.ymax)) return null;
  if (!i || !s3) return s3;
  const a2 = ne(r, true), l = ne(t, true);
  if (null == a2 || null == l) return s3;
  const f = A(r, 1e-3), u = A(r, N), m = A(t, 1e-3);
  if (Math.abs(s3.xmin - l[0]) < m && Math.abs(s3.xmax - l[1]) < m) {
    const i2 = Math.abs(e.xmin - a2[0]), o2 = Math.abs(a2[1] - e.xmax);
    if (i2 < f && o2 > u) {
      s3.xmin = l[0];
      const i3 = [];
      i3.push(new j(e.xmax, e.ymin, r)), i3.push(new j(e.xmax, (e.ymin + e.ymax) / 2, r)), i3.push(new j(e.xmax, e.ymax, r));
      const o3 = i3.map((e2) => B(e2, t, n)).filter((e2) => !isNaN(e2 == null ? void 0 : e2.x)).map((e2) => e2.x);
      s3.xmax = Math.max.apply(null, o3);
    }
    if (o2 < f && i2 > u) {
      s3.xmax = l[1];
      const i3 = [];
      i3.push(new j(e.xmin, e.ymin, r)), i3.push(new j(e.xmin, (e.ymin + e.ymax) / 2, r)), i3.push(new j(e.xmin, e.ymax, r));
      const o3 = i3.map((e2) => B(e2, t, n)).filter((e2) => !isNaN(e2 == null ? void 0 : e2.x)).map((e2) => e2.x);
      s3.xmin = Math.min.apply(null, o3);
    }
  } else {
    const e2 = A(t, 1e-3);
    Math.abs(s3.xmin - l[0]) < e2 && (s3.xmin = l[0]), Math.abs(s3.xmax - l[1]) < e2 && (s3.xmax = l[1]);
  }
  return s3;
}
function te(e, t = false) {
  if (!e) return null;
  const n = t ? 20037508342787e-6 : 20037508342788905e-9;
  return e.isWebMercator ? 2 * n : e.wkid && e.isGeographic ? 360 : 2 * S[e.wkid] || null;
}
function ne(e, t = false) {
  if (e.isGeographic) return [-180, 180];
  const n = te(e, t);
  return null != n ? [-n / 2, n / 2] : null;
}
function ie(e, t, n, i) {
  let o = (e - t) / n;
  return o - Math.floor(o) != 0 ? o = Math.floor(o) : i && (o -= 1), o;
}
function oe(e, t = false) {
  const n = te(e.spatialReference);
  if (null == n) return 0;
  const i = t ? 0 : -(n / 2), o = A(e.spatialReference), r = !t && Math.abs(e.xmax - n / 2) < o ? n / 2 : e.xmax, s3 = !t && Math.abs(e.xmin + n / 2) < o ? -n / 2 : e.xmin;
  return ie(r, i, n, true) - ie(s3, i, n, false);
}
function re(e) {
  const t = e.storageInfo.origin.x, n = te(e.spatialReference, true);
  if (null == n) return { originX: t, halfWorldWidth: null, pyramidsInfo: null };
  const i = n / 2, { nativePixelSize: o, storageInfo: r, extent: s3 } = e, { maximumPyramidLevel: a2, blockWidth: l, pyramidScalingFactor: c } = r;
  let f = o.x;
  const u = [], m = null != e.transform && "gcs-shift" === e.transform.type, x = t + (m ? 0 : i), h = m ? n - t : i - t;
  for (let p2 = 0; p2 <= a2; p2++) {
    const e2 = (s3.xmax - t) / f / l, n2 = e2 - Math.floor(e2) == 0 ? e2 : Math.ceil(e2), i2 = h / f / l, o2 = i2 - Math.floor(i2) == 0 ? i2 : Math.ceil(i2), r2 = Math.floor(x / f / l), a3 = Math.round(x / f) % l, m2 = (l - Math.round(h / f) % l) % l;
    u.push({ resolutionX: f, blockWidth: l, datasetColumnCount: n2, worldColumnCountFromOrigin: o2, leftMargin: a3, rightPadding: m2, originColumnOffset: r2 }), f *= c;
  }
  return { originX: t, halfWorldWidth: i, pyramidsInfo: u, hasGCSSShiftTransform: m };
}
function se(e) {
  if (!e || e.isGeographic) return e;
  const t = String(e.wkid || e.wkt2 || e.wkt);
  let n;
  if (E.has(t)) n = E.get(t);
  else {
    n = (e.wkid ? p.coordsys(e.wkid) : p.fromString(s2.PE_TYPE_PROJCS, e.wkt2 || e.wkt)).getGeogcs().getCode(), E.set(t, n);
  }
  return new g({ wkid: n });
}
function ae(e) {
  const t = e.isAdaptive && null == e.spacing;
  let n = e.spacing || [P2, P2], i = le(e), o = { cols: i.size[0] + 1, rows: i.size[1] + 1 };
  const r = i.outofBoundPointCount > 0 && i.outofBoundPointCount < i.offsets.length / 2;
  let s3 = i.outofBoundPointCount === i.offsets.length / 2 || t && r ? [0, 0] : R(i.offsets, o, n, G2);
  const a2 = (s3[0] + s3[1]) / 2, l = e.projectedExtent.spatialReference, c = e.srcBufferExtent.spatialReference;
  if (t && (r || a2 > G2)) {
    w2(l, c, e.datumTransformation) && (l.isGeographic || X(l)), n = [b, b], i = le({ ...e, spacing: n }), o = { cols: i.size[0] + 1, rows: i.size[1] + 1 }, s3 = R(i.offsets, o, n, G2);
  }
  if (i.error = s3, n[0] > 1 && (i.coefficients = ce(i.offsets, o, r)), e.includeGCSGrid && !l.isGeographic && !l.isWebMercator) if (c.isGeographic) i.gcsGrid = { offsets: i.offsets, coefficients: i.coefficients, spacing: n };
  else {
    const t2 = X(l);
    if (null != t2 && !t2.isEnvelope) {
      const t3 = se(l), s4 = V(e.projectedExtent, t3), { offsets: a3 } = le({ ...e, srcBufferExtent: s4, spacing: n }), c2 = ce(a3, o, r);
      i.gcsGrid = { offsets: a3, coefficients: c2, spacing: n };
    }
  }
  return i;
}
function le(e) {
  const { projectedExtent: t, srcBufferExtent: n, pixelSize: i, datumTransformation: o, rasterTransform: r } = e, s3 = t.spatialReference, a2 = n.spatialReference, l = M(s3, a2), { xmin: f, ymin: u, xmax: m, ymax: x } = t, h = te(a2), p2 = null != h && (e.hasWrapAround || "gcs-shift" === (r == null ? void 0 : r.type)), g2 = e.spacing || [P2, P2], y = g2[0] * i.x, d3 = g2[1] * i.y, w3 = 1 === g2[0], R2 = Math.ceil((m - f) / y - 0.1 / g2[0]) + (w3 ? 0 : 1), S2 = Math.ceil((x - u) / d3 - 0.1 / g2[1]) + (w3 ? 0 : 1), G3 = q2({ cols: R2, rows: S2, xmin: f, ymax: x, xres: y, yres: d3, inSR: s3, outSR: a2, datumTransformation: o, preferPE: g2[0] <= b, usePixelCenter: w3 }), k3 = [];
  let E2, T2 = 0;
  const v2 = w3 ? -1 : NaN, { xmin: C2, xmax: j4, ymax: _2, width: z2, height: L3 } = n, I2 = A(a2, N), W2 = null != h && C2 > 0 && j4 > h / 2;
  let O4 = false;
  if (l) {
    const e2 = X(s3);
    O4 = null != e2 && e2.poleLocation > 0;
  }
  for (let M2 = 0; M2 < R2; M2++) {
    const e2 = [];
    for (let t2 = 0; t2 < S2; t2++) {
      let n2 = G3[M2 * S2 + t2];
      if (p2 && n2[0] > j4 && n2[0] > h / 2 - I2 ? n2[0] -= h : p2 && 0 === M2 && n2[0] < 0 && W2 && !r && (n2[0] += h), !n2 || isNaN(n2[0]) || isNaN(n2[1])) k3.push(v2), k3.push(v2), e2.push(null), T2++;
      else {
        if (r) {
          const e3 = r.inverseTransform(new j({ x: n2[0], y: n2[1], spatialReference: a2 }));
          n2 = [e3.x, e3.y];
        }
        e2.push(n2), M2 > 0 && p2 && E2[t2] && n2[0] < E2[t2][0] && (n2[0] += h, O4 && n2[0] > j4 && n2[0] > h && (n2[0] -= h)), k3.push((n2[0] - C2) / z2), k3.push((_2 - n2[1]) / L3);
      }
    }
    E2 = e2;
  }
  return { offsets: k3, error: null, coefficients: null, outofBoundPointCount: T2, spacing: g2, size: w3 ? [R2, S2] : [R2 - 1, S2 - 1] };
}
function ce(e, t, n) {
  const { cols: i, rows: o } = t, r = new Float32Array((i - 1) * (o - 1) * 2 * 6), s3 = new Float32Array([-0, -1, 1, -1, 1, -0, 1, -0, -0]), a2 = new Float32Array([-1, 1, 0, 0, -1, 1, 1, 0, 0]);
  for (let l = 0; l < i - 1; l++) {
    for (let t2 = 0; t2 < o - 1; t2++) {
      let n2 = l * o * 2 + 2 * t2;
      const c = e[n2], f = e[n2 + 1], u = e[n2 + 2], m = e[n2 + 3];
      n2 += 2 * o;
      const x = e[n2], h = e[n2 + 1], p2 = e[n2 + 2], g2 = e[n2 + 3];
      let y = 0, d3 = 12 * (t2 * (i - 1) + l);
      for (let e2 = 0; e2 < 3; e2++) r[d3++] = s3[y++] * c + s3[y++] * u + s3[y++] * p2;
      y = 0;
      for (let e2 = 0; e2 < 3; e2++) r[d3++] = s3[y++] * f + s3[y++] * m + s3[y++] * g2;
      y = 0;
      for (let e2 = 0; e2 < 3; e2++) r[d3++] = a2[y++] * c + a2[y++] * x + a2[y++] * p2;
      y = 0;
      for (let e2 = 0; e2 < 3; e2++) r[d3++] = a2[y++] * f + a2[y++] * h + a2[y++] * g2;
    }
    if (n) for (let e2 = 0; e2 < r.length; e2++) isNaN(r[e2]) && (r[e2] = -1);
  }
  return r;
}
function fe(e, t) {
  const n = e.clone().normalize();
  return 1 === n.length ? n[0] : Q2(n, t);
}
function ue(e) {
  const { spatialReference: t } = e, n = d(t);
  if (!n) return e;
  const [o, r] = n.valid, s3 = r - o;
  let a2 = 0;
  if (e.xmin < o) {
    const t2 = o - e.xmin;
    a2 = Math.ceil(t2 / s3);
  } else if (e.xmin > r) {
    const t2 = e.xmin - r;
    a2 = -Math.ceil(t2 / s3);
  }
  return new w({ spatialReference: e.spatialReference, xmin: e.xmin + a2 * s3, ymin: e.ymin, xmax: e.xmax + a2 * s3, ymax: e.ymax });
}
function me(e, t, i) {
  var _a;
  const { storageInfo: o, pixelSize: r } = t;
  let s3 = 0, a2 = false;
  const { pyramidResolutions: l } = o, f = "mixed" === ((_a = o.tileInfo.format) == null ? void 0 : _a.toLowerCase()) ? Math.max(1, Math.min(3, o.tileInfo.dpi / 96)) : 1, u = (e.x + e.y) / 2 / f;
  if (null != l && l.length) {
    const e2 = l[l.length - 1], o2 = (e2.x + e2.y) / 2, f2 = (r.x + r.y) / 2;
    if (u <= f2) s3 = 0;
    else if (u >= o2) s3 = l.length, a2 = u / o2 > 8;
    else {
      let e3, t2 = f2;
      for (let n = 1; n <= l.length; n++) {
        if (e3 = (l[n - 1].x + l[n - 1].y) / 2, u <= e3) {
          u === e3 ? s3 = n : "down" === i ? (s3 = n - 1, a2 = u / t2 > 8) : s3 = "up" === i || u - t2 > e3 - u || u / t2 > 2 ? n : n - 1;
          break;
        }
        t2 = e3;
      }
    }
    const m2 = 0 === s3 ? r : l[s3 - 1];
    if (a2) {
      Math.min(m2.x, m2.y) * Q(t.spatialReference) > 19567 && (a2 = false);
    }
    return { pyramidLevel: s3, pyramidResolution: new j({ x: m2.x, y: m2.y, spatialReference: t.spatialReference }), excessiveReading: a2 };
  }
  const m = Math.log(e.x / r.x) / Math.LN2, x = Math.log(e.y / r.y) / Math.LN2, h = t.storageInfo.maximumPyramidLevel || 0;
  s3 = "down" === i ? Math.floor(Math.min(m, x)) : "up" === i ? Math.ceil(Math.max(m, x)) : Math.round((m + x) / 2), s3 < 0 ? s3 = 0 : s3 > h && (a2 = s3 > h + 3, s3 = h);
  const p2 = 2 ** s3;
  return { pyramidLevel: s3, pyramidResolution: new j({ x: p2 * t.nativePixelSize.x, y: p2 * t.nativePixelSize.y, spatialReference: t.spatialReference }), excessiveReading: a2 };
}
function xe(e, t, n = false) {
  const { pixelSize: i, extent: o } = e, r = _(o, t, false), s3 = V(fe(o, (i.x + i.y) / 16), t, r);
  return n || 0 === oe(s3) ? s3 : ee(o, t, r);
}
function he(e, t, n) {
  var _a;
  const i = (n == null ? void 0 : n.tileSize) ?? 512, o = (n == null ? void 0 : n.alignGlobalDatasetWithAGOL) ?? true, r = !!(n == null ? void 0 : n.limitToSrcResolution), { extent: s3, spatialReference: a2, pixelSize: l } = e, c = I(l, t, s3);
  if (null == c) return { projectedPixelSize: null, scales: null, srcResolutions: null, isCustomTilingScheme: false };
  const f = (c.x + c.y) / 2, u = W(f, t), m = t.isGeographic ? 256 / i * 2958287637958547e-7 : 256 / i * 591657527591555e-6;
  let x = "vector-magdir" === e.dataType || "vector-uv" === e.dataType;
  const h = xe(e, t, true), p2 = Math.min(Math.ceil(Math.log(Math.min(e.width, e.height) / 32) / Math.LN2), Math.ceil(Math.log(m / 2 / u) / Math.LN2));
  if (!x && o && (t.isGeographic || t.isWebMercator)) {
    const n2 = te(t);
    if (x = oe(h) > 0 || null != n2 && h.width > n2 / 4, !x && null != n2) {
      let t2 = -1;
      if (p2 < 3) t2 = 2 ** p2 * f * i;
      else if (e.storageInfo) {
        const { maximumPyramidLevel: n3 = 0, pyramidScalingFactor: o3 = 2 } = e.storageInfo;
        t2 = o3 ** n3 * f * i;
      }
      const o2 = Math.ceil(n2 / t2);
      x = 1 === o2 || 2 === o2 && n2 / 2 - h.xmax < t2;
    }
  }
  let y, d3 = u;
  const w3 = 1.001, M2 = Math.min(2, Math.max(1.414, ((_a = e.storageInfo) == null ? void 0 : _a.pyramidScalingFactor) || 2));
  if (x) {
    d3 = m;
    const n2 = t.isGeographic ? 1341104507446289e-21 : 0.29858214164761665, i2 = W(n2, t), o2 = t.isGeographic ? 4326 : 3857;
    y = I({ x: n2, y: n2 }, a2, xe(e, new g({ wkid: o2 }), true)), y.x *= d3 / i2, y.y *= d3 / i2;
  } else {
    y = { x: l.x, y: l.y };
    let e2 = 0;
    for (; d3 < m * (w3 / 2) && e2 < p2; ) e2++, d3 *= M2, y.x *= M2, y.y *= M2;
    Math.max(d3, m) / Math.min(d3, m) <= w3 && (d3 = m);
  }
  const R2 = [d3], S2 = [{ x: y.x, y: y.y }], P3 = 70.5310735, b2 = Math.min(P3, u) / w3;
  for (; d3 >= b2; ) d3 /= M2, y.x /= M2, y.y /= M2, R2.push(d3), S2.push({ x: y.x, y: y.y });
  if (r) {
    const e2 = 1e-3 * l.x;
    let t2 = S2.findIndex((t3) => t3.x >= l.x - e2 && t3.x <= l.x + e2);
    t2 > -1 ? (S2.length = t2 + 1, R2.length = t2 + 1) : (t2 = S2.findIndex((t3) => t3.x <= l.x + e2), t2 > 0 && (S2.length = t2, R2.length = t2));
  }
  return { projectedPixelSize: c, scales: R2, srcResolutions: S2, isCustomTilingScheme: !x };
}

export {
  w2 as w,
  j3 as j,
  _,
  z,
  O3 as O,
  B,
  V,
  Z,
  te,
  oe,
  re,
  ae,
  ue,
  me,
  xe,
  he
};
//# sourceMappingURL=chunk-LHHFTRIL.js.map
