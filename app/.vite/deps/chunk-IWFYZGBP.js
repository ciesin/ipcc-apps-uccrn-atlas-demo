import {
  I,
  L,
  Q
} from "./chunk-4WERUJEK.js";
import {
  o
} from "./chunk-QTWG47SG.js";
import {
  n
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/geometry/projection/projectPointToVector.js
function c(e, o2, c2, i2) {
  if (L(e.spatialReference, c2)) {
    f[0] = e.x, f[1] = e.y;
    const r = e.z;
    return f[2] = r ?? i2 ?? 0, o(f, e.spatialReference, 0, o2, c2, 0);
  }
  const s = I(e, c2);
  return !!s && (o2[0] = s == null ? void 0 : s.x, o2[1] = s == null ? void 0 : s.y, o2[2] = (s == null ? void 0 : s.z) ?? i2 ?? 0, true);
}
async function i(e, r, t, n2, i2) {
  return await Q(e.spatialReference, t, null, i2), c(e, r, t, n2);
}
var f = n();

export {
  c,
  i
};
//# sourceMappingURL=chunk-IWFYZGBP.js.map
