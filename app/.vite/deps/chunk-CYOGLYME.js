import {
  ei,
  x3 as x
} from "./chunk-67PUVBHA.js";
import {
  s
} from "./chunk-6P7HXSJ6.js";

// node_modules/@arcgis/core/geometry/operators/support/Transformation.js
var n = { uniform: 0, conformal: 1, rigid: 2, "rigid-motion": 3, general: 4 };
var o = (r) => r.map((r2) => new ei(r2.x, r2.y));
var i = class {
  constructor() {
    this.transform = new x();
  }
  calculateErrors(t, r) {
    const s2 = t.length, n2 = r.length;
    if (s2 !== n2) throw new Error(`The input length (${s2}) is not the same as output length (${n2})`);
    const i2 = [];
    return { rms: this.transform.calculateErrors(s2, o(t), o(r), i2), errorsOut: i2 };
  }
  flipX(t, r) {
    return this.transform.flipX(t, r), this;
  }
  flipY(t, r) {
    return this.transform.flipY(t, r), this;
  }
  initializeFromControlPoints(t, r, s2, i2) {
    const e = r.length, a = s2.length;
    if (e !== a) throw new Error(`The input length (${e}) is not the same as output length (${a})`);
    this.transform.initializeFromControlPoints(n[t], e, o(r), o(s2), i2 == null ? void 0 : i2.transform);
  }
  isIdentity() {
    return this.transform.isIdentity();
  }
  rotate(r, n2, o2) {
    const i2 = s(r);
    return null != n2 && null != o2 ? this.transform.rotateAngleAbout(i2, new ei(n2, o2)) : this.transform.rotateAngle(i2), this;
  }
  scale(t, r) {
    return this.transform.scale(t, r), this;
  }
  setIdentity() {
    this.transform.setIdentity();
  }
  setSwapCoordinates() {
    return this.transform.setSwapCoordinates(), this;
  }
  shear(t, r) {
    return this.transform.shear(t, r), this;
  }
  shift(t, r) {
    return this.transform.shiftCoords(t, r), this;
  }
};

export {
  i
};
//# sourceMappingURL=chunk-CYOGLYME.js.map
