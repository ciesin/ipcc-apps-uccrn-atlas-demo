import {
  r as r3
} from "./chunk-DVLQPRGL.js";
import {
  r
} from "./chunk-QGVT5UOI.js";
import {
  r as r2
} from "./chunk-647JB2RE.js";
import {
  d,
  p
} from "./chunk-6MN3R543.js";

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/queryEngineUtils.js
function a({ x: e, y: n, z: d2 }) {
  return d(e, n, d2 ?? 0);
}
function o(t, o2) {
  switch (t.type) {
    case "edge":
      return t.draped ? new r({ edgeStart: a(t.start), edgeEnd: a(t.end), targetPoint: p(a(t.target)), objectId: t.objectId, getGroundElevation: o2 }) : new r2({ edgeStart: a(t.start), edgeEnd: a(t.end), targetPoint: p(a(t.target)), objectId: t.objectId, isDraped: false });
    case "vertex":
      return new r3({ targetPoint: p(a(t.target)), objectId: t.objectId, isDraped: false });
  }
}
function i(e, t) {
  return null != e && "3d" === e.type ? (n, d2) => e.elevationProvider.getElevation(n, d2, 0, t, "ground") : () => null;
}

export {
  o,
  i
};
//# sourceMappingURL=chunk-LHGTWVNO.js.map
