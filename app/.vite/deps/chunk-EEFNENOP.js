import {
  C,
  j,
  x
} from "./chunk-FZLDYYQZ.js";
import {
  Bm,
  Vr
} from "./chunk-NEFPLHSJ.js";

// node_modules/@arcgis/core/chunks/equalsOperator.js
var n = class extends Bm {
  getOperatorType() {
    return 2;
  }
  execute(e, t, o, s) {
    return Vr(e, t, o, 3, s);
  }
};
var a = new n();
function u(e) {
  const r = C(e);
  return a.accelerateGeometry(x(e), j(r), 1);
}
function c(e, r) {
  return a.execute(x(e), x(r), j(e.spatialReference), null);
}
var p = a.supportsCurves();
var l = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: u, execute: c, supportsCurves: p }, Symbol.toStringTag, { value: "Module" }));

export {
  u,
  c,
  p,
  l
};
//# sourceMappingURL=chunk-EEFNENOP.js.map
