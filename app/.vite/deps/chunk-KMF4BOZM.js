import {
  C,
  Z,
  j,
  x
} from "./chunk-FZLDYYQZ.js";
import {
  zm
} from "./chunk-NEFPLHSJ.js";
import {
  s
} from "./chunk-VUD5O2WG.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorDifference.js
var e = new zm();
function o(n2, r, o2) {
  return e.execute(n2, r, o2, null);
}
function t(r, o2, t2) {
  const s3 = e.executeMany(new s(r), new s([o2]), t2, null);
  return Array.from(s3);
}
function s2() {
  return e.supportsCurves();
}

// node_modules/@arcgis/core/chunks/differenceOperator.js
function n(e2, t2) {
  const n2 = C(e2);
  return Z(o(x(e2), x(t2), j(n2)), n2);
}
function u(e2, r) {
  const n2 = e2.map(x), u2 = C(e2);
  return t(n2, x(r), j(u2)).map((e3) => Z(e3, u2));
}
var c = s2();
var m = Object.freeze(Object.defineProperty({ __proto__: null, execute: n, executeMany: u, supportsCurves: c }, Symbol.toStringTag, { value: "Module" }));

export {
  n,
  u,
  c,
  m
};
//# sourceMappingURL=chunk-KMF4BOZM.js.map
