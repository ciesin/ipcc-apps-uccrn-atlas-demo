import {
  Ch
} from "./chunk-NEFPLHSJ.js";
import {
  s
} from "./chunk-VUD5O2WG.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorIntersection.js
var n = new Ch();
function t(r, e) {
  return n.accelerateGeometry(r, e, 1);
}
function o(r, e, t2) {
  return n.execute(r, e, t2, null);
}
function u(e, t2, o2, u2) {
  const s3 = n.executeMany(new s(e), new s([t2]), o2, null, u2);
  return Array.from(s3);
}
function s2() {
  return n.supportsCurves();
}

export {
  t,
  o,
  u,
  s2 as s
};
//# sourceMappingURL=chunk-KOUTR62H.js.map
