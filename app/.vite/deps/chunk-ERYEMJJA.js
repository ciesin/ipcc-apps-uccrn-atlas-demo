import {
  C,
  j,
  x
} from "./chunk-FZLDYYQZ.js";
import {
  $n,
  Rm,
  Ym2 as Ym,
  sr
} from "./chunk-NEFPLHSJ.js";

// node_modules/@arcgis/core/chunks/relateOperator.js
var u = class {
  supportsCurves() {
    return true;
  }
  getOperatorType() {
    return 1;
  }
  execute(r, t, a, o, s) {
    return $n(r, t, a, o, s);
  }
  isValidDE9IM(e) {
    return 0 === sr(e);
  }
  accelerateGeometry(e, r, a) {
    return Rm(e, r, a);
  }
  canAccelerateGeometry(e) {
    return Ym(e);
  }
};
var c = new u();
function i(e) {
  const r = C(e);
  return c.accelerateGeometry(x(e), j(r), 1);
}
function p(e, r, t) {
  return c.execute(x(e), x(r), j(e.spatialReference), t, null);
}
function l(e) {
  return c.isValidDE9IM(e);
}
var m = c.supportsCurves();
var f = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: i, execute: p, isValidDE9IM: l, supportsCurves: m }, Symbol.toStringTag, { value: "Module" }));

export {
  i,
  p,
  l,
  m,
  f
};
//# sourceMappingURL=chunk-ERYEMJJA.js.map
