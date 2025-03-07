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

// node_modules/@arcgis/core/geometry/geometryAdapters/hydrated.js
var r = { convertToGEGeometry: s, exportPoint: a, exportPolygon: c, exportPolyline: h, exportMultipoint: m, exportExtent: x };
function s(e, n) {
  if (null == n) return null;
  let t = "cache" in n ? n.cache._geVersion : void 0;
  return null == t && (t = e.convertJSONToGeometry(n), "cache" in n && (n.cache._geVersion = t)), t;
}
function a(e, n, o) {
  const i = e.hasZ(n), r2 = e.hasM(n), s2 = new j({ x: e.getPointX(n), y: e.getPointY(n), spatialReference: o });
  return i && (s2.z = e.getPointZ(n)), r2 && (s2.m = e.getPointM(n)), s2.cache._geVersion = n, s2;
}
function c(e, n, t) {
  const i = new j2({ rings: e.exportPaths(n), hasZ: e.hasZ(n), hasM: e.hasM(n), spatialReference: t });
  return i.cache._geVersion = n, i;
}
function h(e, n, t) {
  const o = new P({ paths: e.exportPaths(n), hasZ: e.hasZ(n), hasM: e.hasM(n), spatialReference: t });
  return o.cache._geVersion = n, o;
}
function m(e, t, o) {
  const i = new u({ hasZ: e.hasZ(t), hasM: e.hasM(t), points: e.exportPoints(t), spatialReference: o });
  return i.cache._geVersion = t, i;
}
function x(n, t, o) {
  const i = n.hasZ(t), r2 = n.hasM(t), s2 = new w({ xmin: n.getXMin(t), ymin: n.getYMin(t), xmax: n.getXMax(t), ymax: n.getYMax(t), spatialReference: o });
  if (i) {
    const e = n.getZExtent(t);
    s2.zmin = e.vmin, s2.zmax = e.vmax;
  }
  if (r2) {
    const e = n.getMExtent(t);
    s2.mmin = e.vmin, s2.mmax = e.vmax;
  }
  return s2.cache._geVersion = t, s2;
}

export {
  r
};
//# sourceMappingURL=chunk-CVKVLVEF.js.map
