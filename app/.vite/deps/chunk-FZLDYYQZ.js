import {
  Me,
  Ve
} from "./chunk-5GRVYYCJ.js";
import {
  Ce,
  Mu,
  Uu,
  ee,
  re
} from "./chunk-NEFPLHSJ.js";
import {
  a,
  ei
} from "./chunk-67PUVBHA.js";
import {
  u
} from "./chunk-WLGGSXQY.js";
import {
  j as j2
} from "./chunk-T7KGE6VP.js";
import {
  P
} from "./chunk-W633AKTD.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";

// node_modules/@arcgis/core/geometry/operators/support/apiConverter.js
var p = "_gxVersion";
var g = 2;
var y = 1;
function C(e) {
  return Array.isArray(e) ? e[0].spatialReference : e.spatialReference;
}
function x(e) {
  switch (e.type) {
    case "point":
      return w2(e);
    case "multipoint":
      return V(e);
    case "polyline":
      return P2(e);
    case "polygon":
      return v(e);
    case "extent":
      return M(e);
    default:
      throw new Error(`Unsupported geometry type: ${e.type}`);
  }
}
function M(e) {
  if (!e.getCacheValue(p)) {
    const t = new re();
    t.setCoords(e.xmin, e.ymin, e.xmax, e.ymax), e.hasM && t.setInterval(g, 0, e.mmin, e.mmax), e.hasZ && t.setInterval(y, 0, e.zmin, e.zmax), e.setCacheValue(p, t);
  }
  return e.getCacheValue(p);
}
function V(e) {
  if (!e.getCacheValue(p)) {
    const t = new Ce(), n = new ee(), a2 = e.points, o = e.hasM, i = e.hasZ, u2 = i ? 3 : 2;
    for (let e2 = 0, r = a2.length; e2 < r; e2++) {
      const r2 = a2[e2];
      n.setXYCoords(r2[0], r2[1]), i && n.setZ(r2[2] ?? 0), o && n.setM(r2[u2] ?? NaN), t.add(n);
    }
    e.setCacheValue(p, t);
  }
  return e.getCacheValue(p);
}
function w2(e) {
  if (!e.getCacheValue(p)) {
    const t = new ee();
    t.setXYCoords(e.x, e.y), e.hasM && t.setM(e.m), e.hasZ && t.setZ(e.z), e.setCacheValue(p, t);
  }
  return e.getCacheValue(p);
}
function v(e) {
  if (!e.getCacheValue(p)) {
    const { curveRings: t, hasM: n, hasZ: r, rings: s } = e, a2 = Ve({ curveRings: t, hasM: n, hasZ: r, rings: s });
    e.setCacheValue(p, a2);
  }
  return e.getCacheValue(p);
}
function P2(e) {
  if (!e.getCacheValue(p)) {
    const { curvePaths: t, hasM: n, hasZ: r, paths: s } = e, a2 = Ve({ curvePaths: t, hasM: n, hasZ: r, paths: s });
    e.setCacheValue(p, a2);
  }
  return e.getCacheValue(p);
}
function j3(e) {
  if (e.wkid) return Mu(e.wkid);
  const t = e.wkt2 || e.wkt;
  return t ? Uu(t) : null;
}
function Z(e, n) {
  if (e) switch (e.getGeometryType()) {
    case a.enumPoint:
      return k(e, n);
    case a.enumEnvelope:
      return E(e, n);
    case a.enumMultiPoint:
      return d(e, n);
    case a.enumPolyline:
      return z(e, n);
    case a.enumPolygon:
      return R(e, n);
  }
  return null;
}
function E(e, t) {
  if (e.isEmpty()) return null;
  const n = new w({ xmin: e.getXMin(), ymin: e.getYMin(), xmax: e.getXMax(), ymax: e.getYMax(), spatialReference: t }), r = e.getDescription();
  if (r.hasM()) {
    const t2 = e.queryInterval(g, 0);
    n.mmin = t2.vmin, n.mmax = t2.vmax;
  }
  if (r.hasZ()) {
    const t2 = e.queryInterval(y, 0);
    n.zmin = t2.vmin, n.zmax = t2.vmax;
  }
  return n.setCacheValue(p, e), n;
}
function d(e, t) {
  if (e.isEmpty()) return null;
  const n = e.getDescription(), s = n.hasM(), a2 = n.hasZ(), o = [], i = new ee();
  for (let r = 0, u2 = e.getPointCount(); r < u2; r++) {
    e.getPointByVal(r, i);
    const t2 = [i.getX(), i.getY()];
    a2 && t2.push(i.getZ()), s && t2.push(i.getM()), o.push(t2);
  }
  const c = new u({ hasM: s, hasZ: a2, points: o, spatialReference: t });
  return c.setCacheValue(p, e), c;
}
function k(t, n) {
  if (t instanceof ei) return new j({ x: t.x, y: t.y, spatialReference: n });
  if (t.isEmpty()) return null;
  const r = new j({ x: t.getX(), y: t.getY(), spatialReference: n }), s = t.getDescription();
  return s.hasM() && (r.m = t.getM()), s.hasZ() && (r.z = t.getZ()), r.setCacheValue(p, t), r;
}
function R(e, t) {
  if (e.isEmpty()) return null;
  const n = j2.fromJSON({ spatialReference: t, ...Me(e, null) });
  return n.setCacheValue(p, e), n;
}
function z(e, t) {
  if (e.isEmpty()) return null;
  const n = P.fromJSON({ spatialReference: t, ...Me(e, null) });
  return n.setCacheValue(p, e), n;
}

export {
  C,
  x,
  M,
  V,
  w2 as w,
  v,
  P2 as P,
  j3 as j,
  Z,
  E,
  d,
  k,
  R,
  z
};
//# sourceMappingURL=chunk-FZLDYYQZ.js.map
