import {
  C,
  M,
  Z,
  j,
  x
} from "./chunk-FZLDYYQZ.js";
import {
  I
} from "./chunk-NEFPLHSJ.js";
import {
  s
} from "./chunk-VUD5O2WG.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorClip.js
var e = new I();
function t(r, n, t2) {
  return e.execute(r, n, t2, null);
}
function o(n, t2, o2) {
  const u3 = e.executeMany(new s(n), t2, o2, null);
  return Array.from(u3);
}
function u() {
  return e.supportsCurves();
}

// node_modules/@arcgis/core/chunks/clipOperator.js
function u2(e2, r) {
  const u3 = C(e2), c2 = M(r).asEnvelope2D();
  return Z(t(x(e2), c2, j(u3)), u3);
}
function c(e2, o2) {
  const u3 = e2.map(x), c2 = C(e2), m2 = M(o2).asEnvelope2D();
  return o(u3, m2, j(c2)).map((e3) => Z(e3, c2));
}
var m = u();
var i = Object.freeze(Object.defineProperty({ __proto__: null, execute: u2, executeMany: c, supportsCurves: m }, Symbol.toStringTag, { value: "Module" }));

export {
  u2 as u,
  c,
  m,
  i
};
//# sourceMappingURL=chunk-4666V5PX.js.map
