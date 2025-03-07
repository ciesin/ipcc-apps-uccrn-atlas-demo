import {
  a,
  n
} from "./chunk-A6DPK5GC.js";
import {
  H
} from "./chunk-UMYFDXOJ.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";

// node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js
function o(e) {
  return null == e.origin;
}
function t(e) {
  return null != e.origin;
}
function c(e) {
  return t(e.vertexSpace);
}
function u(e, r) {
  if (!t(e)) return null;
  const [i, o2, c2] = e.origin;
  return new j({ x: i, y: o2, z: c2, spatialReference: r });
}
function l(e, n2) {
  const { x: o2, y: t2, z: c2, spatialReference: u2 } = e, l2 = [o2, t2, c2 ?? 0];
  return "local" === ((n2 == null ? void 0 : n2.vertexSpace) ?? f(u2)) ? new a({ origin: l2 }) : new n({ origin: l2 });
}
function f(e) {
  return e.isGeographic || e.isWebMercator ? "local" : "georeferenced";
}
function p(n2, r) {
  return n2.type === r.type && (n2.origin === r.origin || null != n2.origin && null != r.origin && H(n2.origin, r.origin));
}

export {
  o,
  t,
  c,
  u,
  l,
  p
};
//# sourceMappingURL=chunk-YINRFSE5.js.map
