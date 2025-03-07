import {
  e
} from "./chunk-NQPBPVRE.js";
import {
  b
} from "./chunk-5X74MKXM.js";
import {
  f as f2
} from "./chunk-WZBMMIVS.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  a
} from "./chunk-CWMZW2S5.js";
import {
  f,
  i
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/layers/graphics/hydratedFeatures.js
function o(e2) {
  return "declaredClass" in e2;
}
function m(e2) {
  return "declaredClass" in e2;
}
function l(e2) {
  return "declaredClass" in e2;
}
function c(n, r) {
  return n ? l(n) ? n : new b({ layer: r, sourceLayer: r, visible: n.visible, symbol: a(n.symbol), attributes: a(n.attributes), geometry: u(n.geometry) }) : null;
}
function u(e2) {
  return null == e2 ? null : o(e2) ? e2 : f2(f3(e2));
}
function f3(e2) {
  const { wkid: t, wkt: n, wkt2: r, latestWkid: a2 } = e2.spatialReference, s = { wkid: t, wkt: n, wkt2: r, latestWkid: a2 };
  switch (e2.type) {
    case "point": {
      const { x: t2, y: n2, z: r2, m: a3 } = e2;
      return { x: t2, y: n2, z: r2, m: a3, spatialReference: s };
    }
    case "polygon": {
      const { rings: t2, hasZ: n2, hasM: r2 } = e2;
      return { rings: p(t2), hasZ: n2, hasM: r2, spatialReference: s };
    }
    case "polyline": {
      const { paths: t2, hasZ: n2, hasM: r2 } = e2;
      return { paths: p(t2), hasZ: n2, hasM: r2, spatialReference: s };
    }
    case "extent": {
      const { xmin: t2, xmax: n2, ymin: r2, ymax: a3, zmin: i2, zmax: o2, mmin: m2, mmax: l2, hasZ: c2, hasM: u2 } = e2;
      return { xmin: t2, xmax: n2, ymin: r2, ymax: a3, zmin: i2, zmax: o2, mmin: m2, mmax: l2, hasZ: c2, hasM: u2, spatialReference: s };
    }
    case "multipoint": {
      const { points: t2, hasZ: n2, hasM: r2 } = e2;
      return { points: d(t2) ? h(t2) : t2, hasZ: n2, hasM: r2, spatialReference: s };
    }
    default:
      return;
  }
}
function p(e2) {
  return y(e2) ? e2.map((e3) => h(e3)) : e2;
}
function h(e2) {
  return e2.map((e3) => Array.from(e3));
}
function y(e2) {
  for (const t of e2) if (0 !== t.length) return d(t);
  return false;
}
function d(e2) {
  return e2.length > 0 && (i(e2[0]) || f(e2[0]));
}
function x(e2, t) {
  if (!e2) return null;
  let n;
  if (m(e2)) {
    if (null == t) return e2.clone();
    if (m(t)) return t.copy(e2);
  }
  return null != t ? (n = t, n.x = e2.x, n.y = e2.y, n.spatialReference = e2.spatialReference, e2.hasZ ? (n.z = e2.z, n.hasZ = e2.hasZ) : (n.z = void 0, n.hasZ = false), e2.hasM ? (n.m = e2.m, n.hasM = true) : (n.m = void 0, n.hasM = false)) : (n = e(e2.x, e2.y, e2.z, e2.spatialReference), e2.hasM && (n.m = e2.m, n.hasM = true)), n;
}
function k(e2) {
  const { wkid: t, wkt: n, wkt2: r, latestWkid: s } = e2, i2 = { wkid: t, wkt: n, wkt2: r, latestWkid: s };
  return g.fromJSON(i2);
}

export {
  o,
  c,
  u,
  x,
  k
};
//# sourceMappingURL=chunk-SOIGHC7A.js.map
