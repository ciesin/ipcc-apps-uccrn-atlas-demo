import {
  C,
  K,
  R,
  W,
  bt,
  dt,
  j,
  mt
} from "./chunk-F7TFMQ3A.js";
import {
  e
} from "./chunk-J7454WTE.js";
import {
  x
} from "./chunk-6X7CIA5N.js";
import {
  m,
  v,
  y
} from "./chunk-WZBMMIVS.js";
import {
  P,
  o,
  r as r2,
  t
} from "./chunk-NENDDUWH.js";
import {
  N
} from "./chunk-LTDNORB5.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  r
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/layers/graphics/data/geometryUtils.js
var u = new e();
var f = new e();
var m2 = new e();
var c = { esriGeometryPoint: j, esriGeometryPolyline: C, esriGeometryPolygon: K, esriGeometryMultipoint: R };
function y2(r5, t3, o3, i2 = r5.hasZ, s3 = r5.hasM) {
  if (null == t3) return null;
  const l2 = r5.hasZ && i2, u3 = r5.hasM && s3;
  if (o3) {
    const f4 = dt(m2, t3, r5.hasZ, r5.hasM, "esriGeometryPoint", o3, i2, s3);
    return j(f4, l2, u3);
  }
  return j(t3, l2, u3);
}
function a(e4, o3, i2, s3, l2, y3, a2 = o3, h4 = i2) {
  var _a, _b, _c;
  const p3 = o3 && a2, G4 = i2 && h4, g2 = null != s3 ? "coords" in s3 ? s3 : s3.geometry : null;
  if (null == g2) return null;
  if (l2) {
    let t3 = mt(f, g2, o3, i2, e4, l2, a2, h4);
    return y3 && (t3 = dt(m2, t3, p3, G4, e4, y3)), ((_a = c[e4]) == null ? void 0 : _a.call(c, t3, p3, G4)) ?? null;
  }
  if (y3) {
    const r5 = dt(m2, g2, o3, i2, e4, y3, a2, h4);
    return ((_b = c[e4]) == null ? void 0 : _b.call(c, r5, p3, G4)) ?? null;
  }
  return bt(u, g2, o3, i2, a2, h4), ((_c = c[e4]) == null ? void 0 : _c.call(c, u, p3, G4)) ?? null;
}
function h(n3) {
  return n3 && p in n3 ? JSON.parse(JSON.stringify(n3, G)) : n3;
}
var p = "_geVersion";
var G = (n3, e4) => n3 === p ? void 0 : e4;

// node_modules/@arcgis/core/geometry/support/intersects.js
function s2(s3) {
  return "mesh" === s3 ? o : P(s3);
}

// node_modules/@arcgis/core/layers/graphics/contains.js
function n(n3, t3) {
  return n3 ? t3 ? 4 : 3 : t3 ? 3 : 2;
}
function t2(n3, t3, r5, e4) {
  return o2(n3, t3, r5, e4.coords[0], e4.coords[1]);
}
function r3(t3, r5, e4, c2, u3, f4) {
  const s3 = n(u3, f4), { coords: i2, lengths: l2 } = c2;
  if (!l2) return false;
  for (let n3 = 0, d2 = 0; n3 < l2.length; n3++, d2 += s3) if (!o2(t3, r5, e4, i2[d2], i2[d2 + 1])) return false;
  return true;
}
function o2(t3, r5, o3, c2, u3) {
  if (!t3) return false;
  const f4 = n(r5, o3), { coords: s3, lengths: i2 } = t3;
  let l2 = false, d2 = 0;
  for (const n3 of i2) l2 = e2(l2, s3, f4, d2, n3, c2, u3), d2 += n3 * f4;
  return l2;
}
function e2(n3, t3, r5, o3, e4, c2, u3) {
  let f4 = n3, s3 = o3;
  for (let i2 = o3, l2 = o3 + e4 * r5; i2 < l2; i2 += r5) {
    s3 = i2 + r5, s3 === l2 && (s3 = o3);
    const n4 = t3[i2], e5 = t3[i2 + 1], d2 = t3[s3], g2 = t3[s3 + 1];
    (e5 < u3 && g2 >= u3 || g2 < u3 && e5 >= u3) && n4 + (u3 - e5) / (g2 - e5) * (d2 - n4) < c2 && (f4 = !f4);
  }
  return f4;
}

// node_modules/@arcgis/core/layers/graphics/data/spatialQuerySupport.js
var f3 = "unsupported-query";
var R2 = { spatialRelationship: { esriSpatialRelIntersects: true, esriSpatialRelContains: true, esriSpatialRelWithin: true, esriSpatialRelCrosses: true, esriSpatialRelDisjoint: true, esriSpatialRelTouches: true, esriSpatialRelOverlaps: true, esriSpatialRelEnvelopeIntersects: true, esriSpatialRelIndexIntersects: false, esriSpatialRelRelation: false }, queryGeometry: { esriGeometryPoint: true, esriGeometryMultiPatch: false, esriGeometryMultipoint: true, esriGeometryPolyline: true, esriGeometryPolygon: true, esriGeometryEnvelope: true }, layerGeometry: { esriGeometryPoint: true, esriGeometryMultiPatch: true, esriGeometryMultipoint: true, esriGeometryPolyline: true, esriGeometryPolygon: true, esriGeometryEnvelope: false } };
function S(e4) {
  return null != e4 && true === R2.spatialRelationship[e4];
}
function j2(e4) {
  return null != e4 && true === R2.queryGeometry[v(e4)];
}
function G3(e4) {
  return null != e4 && true === R2.layerGeometry[e4];
}
var g = { esriSpatialRelIntersects: () => import("./intersectsOperator-5BVIG5MM.js"), esriSpatialRelContains: () => import("./containsOperator-3QKBD5SX.js"), esriSpatialRelCrosses: () => import("./crossesOperator-R4OMXUTD.js"), esriSpatialRelDisjoint: () => import("./disjointOperator-IHW6LSIF.js"), esriSpatialRelEnvelopeIntersects: null, esriSpatialRelIndexIntersects: null, esriSpatialRelOverlaps: () => import("./overlapsOperator-3F4EHNWZ.js"), esriSpatialRelTouches: () => import("./touchesOperator-JTHLBOO2.js"), esriSpatialRelWithin: () => import("./withinOperator-WJZRDAI5.js"), esriSpatialRelRelation: null };
function h3(e4) {
  const r5 = g[e4];
  if (null == r5) throw new Error(`Cannot load unsupported spatial operator: ${e4}`);
  return r5();
}
async function I(e4, n3, a2, c2, f4) {
  if (y(n3)) {
    if ("esriGeometryPoint" === a2 && ("esriSpatialRelIntersects" === e4 || "esriSpatialRelContains" === e4)) {
      const e5 = W(new e(), n3, false, false);
      return (r5) => t2(e5, false, false, r5);
    }
    if ("esriGeometryMultipoint" === a2) {
      const r5 = W(new e(), n3, false, false);
      if ("esriSpatialRelContains" === e4) return (e5) => r3(r5, false, false, e5, c2, f4);
    }
  }
  if (m(n3)) {
    if ("esriGeometryPoint" === a2 && ("esriSpatialRelIntersects" === e4 || "esriSpatialRelContains" === e4)) return (e5) => t(n3, a(a2, c2, f4, e5));
    if ("esriGeometryMultipoint" === a2 && "esriSpatialRelContains" === e4) return (e5) => r2(n3, a(a2, c2, f4, e5));
    if ("esriSpatialRelIntersects" === e4) {
      const e5 = s2(a2);
      return (r5) => e5(n3, a(a2, c2, f4, r5));
    }
  }
  "esriSpatialRelEnvelopeIntersects" === e4 && (e4 = "esriSpatialRelIntersects");
  const R3 = await h3(e4);
  return (e5) => R3.execute(n3, a(a2, c2, f4, e5));
}
async function w(r5, t3, i2) {
  var _a;
  const { spatialRel: o3, geometry: s3 } = r5;
  if (s3) {
    if (!S(o3)) throw new s(f3, "Unsupported query spatial relationship", { query: r5 });
    if (N(s3.spatialReference) && N(i2)) {
      if (!j2(s3)) throw new s(f3, "Unsupported query geometry type", { query: r5 });
      if (!G3(t3)) throw new s(f3, "Unsupported layer geometry type", { query: r5 });
      if (r5.outSR) return x((_a = r5.geometry) == null ? void 0 : _a.spatialReference, r5.outSR);
    }
  }
}
function d(e4) {
  if (m(e4)) return true;
  if (y(e4)) {
    for (const r5 of e4.rings) {
      if (5 !== r5.length) return false;
      if (r5[0][0] !== r5[1][0] || r5[0][0] !== r5[4][0] || r5[2][0] !== r5[3][0] || r5[0][1] !== r5[3][1] || r5[0][1] !== r5[4][1] || r5[1][1] !== r5[2][1]) return false;
    }
    return true;
  }
  return false;
}

// node_modules/@arcgis/core/layers/graphics/data/timeSupport.js
async function n2(n3, l2) {
  if (!n3) return null;
  const u3 = l2.featureAdapter, { startTimeField: r5, endTimeField: e4 } = n3;
  let i2 = Number.POSITIVE_INFINITY, o3 = Number.NEGATIVE_INFINITY;
  if (r5 && e4) await l2.forEach((n4) => {
    const l3 = u3.getAttribute(r(n4), r5), s3 = u3.getAttribute(r(n4), e4);
    null == l3 || isNaN(l3) || (i2 = Math.min(i2, l3)), null == s3 || isNaN(s3) || (o3 = Math.max(o3, s3));
  });
  else {
    const n4 = r5 || e4;
    await l2.forEach((l3) => {
      const r6 = u3.getAttribute(r(l3), n4);
      null == r6 || isNaN(r6) || (i2 = Math.min(i2, r6), o3 = Math.max(o3, r6));
    });
  }
  return { start: i2, end: o3 };
}
function l(t3, n3, l2) {
  var _a;
  if (!n3 || !t3) return null;
  const { startTimeField: i2, endTimeField: o3 } = t3;
  if (!i2 && !o3) return null;
  const { start: s3, end: a2 } = n3;
  if (null === s3 && null === a2) return null;
  if (void 0 === s3 && void 0 === a2) return e3();
  const c2 = ((_a = l2.getAttributeAsTimestamp) == null ? void 0 : _a.bind(l2)) ?? l2.getAttribute.bind(l2);
  return i2 && o3 ? u2(c2, i2, o3, s3, a2) : r4(c2, i2 || o3, s3, a2);
}
function u2(t3, n3, l2, u3, r5) {
  return null != u3 && null != r5 ? (e4) => {
    const i2 = t3(e4, n3), o3 = t3(e4, l2);
    return (null == i2 || i2 <= r5) && (null == o3 || o3 >= u3);
  } : null != u3 ? (n4) => {
    const r6 = t3(n4, l2);
    return null == r6 || r6 >= u3;
  } : null != r5 ? (l3) => {
    const u4 = t3(l3, n3);
    return null == u4 || u4 <= r5;
  } : void 0;
}
function r4(t3, n3, l2, u3) {
  return null != l2 && null != u3 && l2 === u3 ? (u4) => t3(u4, n3) === l2 : null != l2 && null != u3 ? (r5) => {
    const e4 = t3(r5, n3);
    return null != e4 && e4 >= l2 && e4 <= u3;
  } : null != l2 ? (u4) => {
    const r5 = t3(u4, n3);
    return null != r5 && r5 >= l2;
  } : null != u3 ? (l3) => {
    const r5 = t3(l3, n3);
    return null != r5 && r5 <= u3;
  } : void 0;
}
function e3() {
  return () => false;
}

export {
  y2 as y,
  a,
  h,
  I,
  w,
  d,
  n2 as n,
  l
};
//# sourceMappingURL=chunk-RDJPXK25.js.map
