import {
  C,
  x as x2
} from "./chunk-FZLDYYQZ.js";
import {
  Q,
  te,
  x
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/chunks/areaOperator.js
function n(n2, s2 = {}) {
  const { unit: i2 } = s2;
  let u = x2(n2).calculateArea2D();
  if (u && i2) {
    const o = C(n2);
    if (o.isGeographic) throw new Error("Unable to convert from an angular area unit to a linear area unit.");
    const s3 = te(o);
    s3 !== i2 && (s3 ? u = x(u, s3, i2) : (u = Math.sqrt(u), u *= Q(o), u **= 2, u = x(u, "square-meters", i2)));
  }
  return u;
}
var s = true;
var i = Object.freeze(Object.defineProperty({ __proto__: null, execute: n, supportsCurves: s }, Symbol.toStringTag, { value: "Module" }));

export {
  n,
  s,
  i
};
//# sourceMappingURL=chunk-3GW3EWES.js.map
