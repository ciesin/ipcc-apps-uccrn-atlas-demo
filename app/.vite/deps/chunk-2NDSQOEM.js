import {
  i
} from "./chunk-3YJXAYA4.js";
import {
  s
} from "./chunk-NWL5O6MC.js";
import {
  t
} from "./chunk-ABH42FPX.js";
import {
  h
} from "./chunk-FAAI5VMG.js";
import {
  E2 as E,
  n as n2
} from "./chunk-6MN3R543.js";
import {
  e
} from "./chunk-NQPBPVRE.js";
import {
  c,
  f
} from "./chunk-JLFV7EBO.js";
import {
  n
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/RightAngleSnappingCandidate.js
var n3 = class extends t {
  constructor({ targetPoint: e2, constraint: i2, previousVertex: r, otherVertex: s3, otherVertexType: n5, isDraped: o2, selfSnappingType: h2, objectId: a2, domain: x }) {
    super(e2, i2, o2, x ?? E.SELF), this.previousVertex = r, this.otherVertex = s3, this.otherVertexType = n5, this.selfSnappingType = h2 ?? p.None, this.objectId = a2 ?? null;
  }
  get hints() {
    const t2 = this.previousVertex, i2 = this.otherVertexType === o.CENTER ? this.otherVertex : this.targetPoint, n5 = this.otherVertexType === o.CENTER ? this.targetPoint : this.otherVertex;
    return [new n2(h.TARGET, i2, n5, this.isDraped, this.domain), new n2(h.REFERENCE, t2, i2, this.isDraped, this.domain), new s(this.previousVertex, i2, n5, this.isDraped, this.domain)];
  }
};
var o;
var p;
!function(t2) {
  t2[t2.NEXT = 0] = "NEXT", t2[t2.CENTER = 1] = "CENTER";
}(o || (o = {})), function(t2) {
  t2[t2.None = 0] = "None", t2[t2.LastVertex = 1] = "LastVertex", t2[t2.FirstVertex = 2] = "FirstVertex", t2[t2.ExistingEdge = 3] = "ExistingEdge";
}(p || (p = {}));

// node_modules/@arcgis/core/views/interactive/support/viewUtils.js
function s2(r, t2, o2, s3) {
  return "2d" === s3.type ? (c2.x = r[0], c2.y = r[1], c2.spatialReference = t2, s3.toScreen(c2)) : (i(r, t2, o2, s3, a), s3.state.camera.projectToScreen(a, n4), c(n4[0], n4[1]));
}
var c2 = e(0, 0, 0, null);
var a = n();
var n4 = f();

export {
  n3 as n,
  o,
  p,
  s2 as s
};
//# sourceMappingURL=chunk-2NDSQOEM.js.map
