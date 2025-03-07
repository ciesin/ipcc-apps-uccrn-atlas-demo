import {
  me,
  pe,
  v
} from "./chunk-O4H354HZ.js";
import {
  e,
  n
} from "./chunk-ZDVQNOKR.js";

// node_modules/@arcgis/core/arcade/functions/fieldStats.js
function a(e2) {
  let t = 0;
  for (let r = 0; r < e2.length; r++) t += e2[r];
  return t / e2.length;
}
function u(e2) {
  const t = a(e2);
  let r = 0;
  for (let n2 = 0; n2 < e2.length; n2++) r += (t - e2[n2]) ** 2;
  return r / e2.length;
}
function c(e2) {
  let t = 0;
  for (let r = 0; r < e2.length; r++) t += e2[r];
  return t;
}
function o(e2, a2) {
  const u2 = [], c2 = {}, o2 = [];
  for (let i = 0; i < e2.length; i++) {
    if (void 0 !== e2[i] && null !== e2[i] && e2[i] !== v) {
      const t = e2[i];
      if (n(t) || e(t)) void 0 === c2[t] && (u2.push(t), c2[t] = 1);
      else {
        let e3 = false;
        for (let n2 = 0; n2 < o2.length; n2++) true === me(o2[n2], t) && (e3 = true);
        false === e3 && (o2.push(t), u2.push(t));
      }
    }
    if (u2.length >= a2 && -1 !== a2) return u2;
  }
  return u2;
}
function l(t, r, n2 = 1e3) {
  switch (t.toLowerCase()) {
    case "distinct":
      return o(r, n2);
    case "avg":
    case "mean":
      return a(pe(r));
    case "min":
      return Math.min.apply(Math, pe(r));
    case "sum":
      return c(pe(r));
    case "max":
      return Math.max.apply(Math, pe(r));
    case "stdev":
    case "stddev":
      return Math.sqrt(u(pe(r)));
    case "var":
    case "variance":
      return u(pe(r));
    case "count":
      return r.length;
  }
  return 0;
}

export {
  l
};
//# sourceMappingURL=chunk-OQ3YQLHO.js.map
