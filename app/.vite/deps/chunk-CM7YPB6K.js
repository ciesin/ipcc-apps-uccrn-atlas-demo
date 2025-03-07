import {
  e
} from "./chunk-565WHU6G.js";
import {
  G,
  _,
  r,
  x
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorGeodeticArea.js
var r2;
function o() {
  return !!r2 && r();
}
async function i() {
  if (!o()) {
    const [n2, o2] = await Promise.all([import("./OperatorGeodeticArea-63RGNI2J.js"), import("./ProjectionTransformation-R2EJJYVI.js").then((e2) => e2.aG).then(({ injectPe: e2 }) => e2), _()]);
    r2 = new n2.OperatorGeodeticArea(), o2(G);
  }
}
function s(e2, t, n2) {
  return r2.execute(e2, t, n2, null);
}
function a() {
  return r2.supportsCurves();
}

// node_modules/@arcgis/core/chunks/geodeticAreaOperator.js
var i2;
var p;
var u;
var n;
function c() {
  return !!i2 && o();
}
async function m() {
  if (!c()) {
    const [e2] = await Promise.all([import("./apiConverter-FWDHR6ZO.js"), i()]);
    i2 = e2.fromGeometry, p = e2.fromSpatialReference, u = e2.getSpatialReference, n = a();
  }
}
function l(r3, o2 = {}) {
  const { curveType: s2 = "geodesic", unit: n2 } = o2, c2 = u(r3);
  let m2 = s(i2(r3), p(c2), e[s2]);
  return m2 && n2 && (m2 = x(m2, "square-meters", n2)), m2;
}
var f = Object.freeze(Object.defineProperty({ __proto__: null, execute: l, isLoaded: c, load: m, get supportsCurves() {
  return n;
} }, Symbol.toStringTag, { value: "Module" }));

export {
  n,
  c,
  m,
  l,
  f
};
//# sourceMappingURL=chunk-CM7YPB6K.js.map
