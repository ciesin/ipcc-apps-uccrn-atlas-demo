import {
  C,
  Z,
  x
} from "./chunk-FZLDYYQZ.js";
import {
  o
} from "./chunk-NEFPLHSJ.js";
import {
  s as s2
} from "./chunk-VUD5O2WG.js";
import {
  s
} from "./chunk-6P7HXSJ6.js";
import {
  I2 as I
} from "./chunk-LTDNORB5.js";
import {
  G
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorDensify.js
var e = new o();
function t(r, n, t2, o3) {
  return e.execute(r, n, t2, o3, null);
}
function o2(n, t2, o3, u3) {
  const s3 = e.executeMany(new s2(n), t2, o3, u3, null);
  return Array.from(s3);
}
function u() {
  return e.supportsCurves();
}

// node_modules/@arcgis/core/chunks/densifyOperator.js
function p(e2, o3, a = {}) {
  let { maxAngleInDegrees: p2 = 0, maxDeviation: u3 = 0, unit: c2 } = a;
  const l2 = C(e2);
  return c2 && (o3 = I(o3, c2, l2), u3 && (u3 = I(u3, c2, l2))), Z(t(x(e2), o3, u3, s(p2)), l2);
}
function u2(o3, s3, p2 = {}) {
  let { maxAngleInDegrees: u3 = 0, maxDeviation: c2 = 0, unit: l2 } = p2;
  const f = o3.map(x), x2 = C(o3);
  return l2 && (s3 = I(s3, l2, x2), c2 && (c2 = I(c2, l2, x2))), o2(f, s3, c2, s(u3)).map((e2) => Z(e2, x2)).filter(G);
}
var c = u();
var l = Object.freeze(Object.defineProperty({ __proto__: null, execute: p, executeMany: u2, supportsCurves: c }, Symbol.toStringTag, { value: "Module" }));

export {
  p,
  u2 as u,
  c,
  l
};
//# sourceMappingURL=chunk-HGZYMQRE.js.map
