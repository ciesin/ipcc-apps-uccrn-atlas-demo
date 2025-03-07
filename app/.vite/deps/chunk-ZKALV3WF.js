import {
  m
} from "./chunk-GUYEM3OQ.js";
import {
  C,
  k,
  w,
  x
} from "./chunk-FZLDYYQZ.js";
import {
  E,
  I2 as I
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/geometry/operators/support/proximityResult.js
function i(i2, n, r = false) {
  const o = k(i2.m_coordinate, C(n)), d = i2.m_distance, m3 = i2.isEmpty(), s = i2.m_bRightSide;
  return { coordinate: o, distance: d, isEmpty: m3, ...r && { isRightSide: s }, vertexIndex: i2.m_vertexIndex };
}

// node_modules/@arcgis/core/chunks/proximityOperator.js
var a = new m();
function c(t, r, c2 = {}) {
  const { calculateLeftRightSide: m3 = false, testPolygonInterior: p2 = true, unit: u2 } = c2, g2 = a.getNearestCoordinate(x(t), w(r).getXY(), p2, m3);
  if (u2 && g2.m_distance) {
    const r2 = C(t);
    g2.m_distance = E(g2.m_distance, r2, u2);
  }
  return i(g2, t, m3);
}
function m2(t, r, c2 = {}) {
  const { unit: m3 } = c2, p2 = a.getNearestVertex(x(t), w(r).getXY());
  if (m3 && p2.m_distance) {
    const r2 = C(t);
    p2.m_distance = E(p2.m_distance, r2, m3);
  }
  return i(p2, t);
}
function p(t, c2, m3, p2, u2 = {}) {
  const { unit: g2 } = u2, d = C(t);
  return g2 && m3 && (m3 = I(m3, g2, d)), a.getNearestVertices(x(t), w(c2).getXY(), m3, p2).map((r) => (g2 && r.m_distance && (r.m_distance = E(r.m_distance, d, g2)), i(r, t)));
}
var u = a.supportsCurves();
var g = Object.freeze(Object.defineProperty({ __proto__: null, getNearestCoordinate: c, getNearestVertex: m2, getNearestVertices: p, supportsCurves: u }, Symbol.toStringTag, { value: "Module" }));

export {
  c,
  m2 as m,
  p,
  u,
  g
};
//# sourceMappingURL=chunk-ZKALV3WF.js.map
