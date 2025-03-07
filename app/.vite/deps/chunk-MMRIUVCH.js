import {
  a,
  h,
  z
} from "./chunk-67PUVBHA.js";

// node_modules/@arcgis/core/chunks/GeometryCleaner-BEJM7I4l.js
function i(i2, a3) {
  const f = i2.getGeometryType();
  return f === a.enumPoint ? r(i2) : h(f) ? u(i2) : f === a.enumMultiPoint ? o(i2) : f === a.enumEnvelope ? i2 : f === a.enumMultipatch ? (z("not implemented for multipatch"), i2) : i2;
}
function r(t) {
  return t;
}
function u(e) {
  if (a2(e)) return e;
  const n = e.createInstance();
  for (let i2 = 0, r2 = e.getPathCount(); i2 < r2; i2++) {
    const r3 = e.getPathSize(i2);
    if (0 !== r3) {
      if (1 === r3) {
        if (0 === e.getSegmentCountPath(i2)) continue;
        if (e.getSegmentType(e.getPathStart(i2)) === a.enumLine) continue;
        if (!e.isClosedPath(i2)) continue;
      }
      n.addPath(e, i2, true);
    }
  }
  return n;
}
function o(t) {
  return t;
}
function a2(e) {
  for (let n = 0, i2 = e.getPathCount(); n < i2; n++) {
    const i3 = e.getPathSize(n);
    if (0 === i3) return false;
    if (1 === i3) {
      if (0 === e.getSegmentCountPath(n)) return false;
      if (e.getSegmentType(e.getPathStart(n)) === a.enumLine) return false;
      if (!e.isClosedPath(n)) return false;
    }
  }
  return true;
}

export {
  i
};
//# sourceMappingURL=chunk-MMRIUVCH.js.map
