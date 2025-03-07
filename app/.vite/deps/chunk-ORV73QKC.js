import {
  r as r3
} from "./chunk-ZYOZHQFS.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/layers/support/rasterTransforms/BaseRasterTransform.js
var t = class extends S {
  get affectsPixelSize() {
    return false;
  }
  forwardTransform(r4) {
    return r4;
  }
  inverseTransform(r4) {
    return r4;
  }
};
r([m()], t.prototype, "affectsPixelSize", null), r([m({ json: { write: true } })], t.prototype, "spatialReference", void 0), t = r([a("esri.layers.support.rasterTransforms.BaseRasterTransform")], t);
var a2 = t;

// node_modules/@arcgis/core/layers/support/rasterTransforms/PolynomialTransform.js
var p;
function a3(e, r4, o2) {
  const { x: t2, y: s } = r4;
  if (o2 < 2) {
    return { x: e[0] + t2 * e[2] + s * e[4], y: e[1] + t2 * e[3] + s * e[5] };
  }
  if (2 === o2) {
    const r5 = t2 * t2, o3 = s * s, i2 = t2 * s;
    return { x: e[0] + t2 * e[2] + s * e[4] + r5 * e[6] + i2 * e[8] + o3 * e[10], y: e[1] + t2 * e[3] + s * e[5] + r5 * e[7] + i2 * e[9] + o3 * e[11] };
  }
  const i = t2 * t2, n2 = s * s, f = t2 * s, l = i * t2, p2 = i * s, a5 = t2 * n2, c3 = s * n2;
  return { x: e[0] + t2 * e[2] + s * e[4] + i * e[6] + f * e[8] + n2 * e[10] + l * e[12] + p2 * e[14] + a5 * e[16] + c3 * e[18], y: e[1] + t2 * e[3] + s * e[5] + i * e[7] + f * e[9] + n2 * e[11] + l * e[13] + p2 * e[15] + a5 * e[17] + c3 * e[19] };
}
function c(e, r4, o2) {
  const { xmin: t2, ymin: s, xmax: i, ymax: f, spatialReference: l } = r4;
  let p2 = [];
  if (o2 < 2) p2.push({ x: t2, y: f }), p2.push({ x: i, y: f }), p2.push({ x: t2, y: s }), p2.push({ x: i, y: s });
  else {
    let e2 = 10;
    for (let r5 = 0; r5 < e2; r5++) p2.push({ x: t2, y: s + (f - s) * r5 / (e2 - 1) }), p2.push({ x: i, y: s + (f - s) * r5 / (e2 - 1) });
    e2 = 8;
    for (let r5 = 1; r5 <= e2; r5++) p2.push({ x: t2 + (i - t2) * r5 / e2, y: s }), p2.push({ x: t2 + (i - t2) * r5 / e2, y: f });
  }
  p2 = p2.map((r5) => a3(e, r5, o2));
  const c3 = p2.map((e2) => e2.x), u2 = p2.map((e2) => e2.y);
  return new w({ xmin: Math.min.apply(null, c3), xmax: Math.max.apply(null, c3), ymin: Math.min.apply(null, u2), ymax: Math.max.apply(null, u2), spatialReference: l });
}
function u(e) {
  const [r4, o2, t2, s, i, n2] = e, f = t2 * n2 - i * s, l = i * s - t2 * n2;
  return [(i * o2 - r4 * n2) / f, (t2 * o2 - r4 * s) / l, n2 / f, s / l, -i / f, -t2 / l];
}
var m2 = p = class extends a2 {
  constructor() {
    super(...arguments), this.polynomialOrder = 1, this.type = "polynomial";
  }
  readForwardCoefficients(e, r4) {
    const { coeffX: o2, coeffY: t2 } = r4;
    if (!(o2 == null ? void 0 : o2.length) || !(t2 == null ? void 0 : t2.length) || o2.length !== t2.length) return null;
    const s = [];
    for (let i = 0; i < o2.length; i++) s.push(o2[i]), s.push(t2[i]);
    return s;
  }
  writeForwardCoefficients(e, r4, o2) {
    const t2 = [], s = [];
    for (let i = 0; i < (e == null ? void 0 : e.length); i++) i % 2 == 0 ? t2.push(e[i]) : s.push(e[i]);
    r4.coeffX = t2, r4.coeffY = s;
  }
  get inverseCoefficients() {
    let e = this._get("inverseCoefficients");
    const r4 = this._get("forwardCoefficients");
    return !e && r4 && this.polynomialOrder < 2 && (e = u(r4)), e;
  }
  set inverseCoefficients(e) {
    this._set("inverseCoefficients", e);
  }
  readInverseCoefficients(e, r4) {
    const { inverseCoeffX: o2, inverseCoeffY: t2 } = r4;
    if (!(o2 == null ? void 0 : o2.length) || !(t2 == null ? void 0 : t2.length) || o2.length !== t2.length) return null;
    const s = [];
    for (let i = 0; i < o2.length; i++) s.push(o2[i]), s.push(t2[i]);
    return s;
  }
  writeInverseCoefficients(e, r4, o2) {
    const t2 = [], s = [];
    for (let i = 0; i < (e == null ? void 0 : e.length); i++) i % 2 == 0 ? t2.push(e[i]) : s.push(e[i]);
    r4.inverseCoeffX = t2, r4.inverseCoeffY = s;
  }
  get affectsPixelSize() {
    return this.polynomialOrder > 0;
  }
  forwardTransform(e) {
    if ("point" === e.type) {
      const r4 = a3(this.forwardCoefficients, e, this.polynomialOrder);
      return new j({ x: r4.x, y: r4.y, spatialReference: e.spatialReference });
    }
    return c(this.forwardCoefficients, e, this.polynomialOrder);
  }
  inverseTransform(e) {
    if ("point" === e.type) {
      const r4 = a3(this.inverseCoefficients, e, this.polynomialOrder);
      return new j({ x: r4.x, y: r4.y, spatialReference: e.spatialReference });
    }
    return c(this.inverseCoefficients, e, this.polynomialOrder);
  }
  clone() {
    return new p({ polynomialOrder: this.polynomialOrder, forwardCoefficients: this.forwardCoefficients ? [...this.forwardCoefficients] : null, inverseCoefficients: this.inverseCoefficients ? [...this.inverseCoefficients] : null });
  }
};
r([m({ json: { write: true } })], m2.prototype, "polynomialOrder", void 0), r([m()], m2.prototype, "forwardCoefficients", void 0), r([o("forwardCoefficients", ["coeffX", "coeffY"])], m2.prototype, "readForwardCoefficients", null), r([r2("forwardCoefficients")], m2.prototype, "writeForwardCoefficients", null), r([m({ json: { write: true } })], m2.prototype, "inverseCoefficients", null), r([o("inverseCoefficients", ["inverseCoeffX", "inverseCoeffY"])], m2.prototype, "readInverseCoefficients", null), r([r2("inverseCoefficients")], m2.prototype, "writeInverseCoefficients", null), r([m()], m2.prototype, "affectsPixelSize", null), r([r3({ PolynomialXform: "polynomial" })], m2.prototype, "type", void 0), m2 = p = r([a("esri.layers.support.rasterTransforms.PolynomialTransform")], m2);
var y = m2;

// node_modules/@arcgis/core/layers/support/rasterTransforms/GCSShiftTransform.js
var a4;
var n = a4 = class extends a2 {
  constructor() {
    super(...arguments), this.type = "gcs-shift", this.tolerance = 1e-8;
  }
  forwardTransform(r4) {
    return "point" === (r4 = r4.clone()).type ? (r4.x > 180 + this.tolerance && (r4.x -= 360), r4) : (r4.xmin >= 180 - this.tolerance ? (r4.xmax -= 360, r4.xmin -= 360) : r4.xmax > 180 + this.tolerance && (r4.xmin = -180, r4.xmax = 180), r4);
  }
  inverseTransform(r4) {
    return "point" === (r4 = r4.clone()).type ? (r4.x < -this.tolerance && (r4.x += 360), r4) : (r4.xmin < -this.tolerance && (r4.xmin += 360, r4.xmax += 360), r4);
  }
  clone() {
    return new a4({ tolerance: this.tolerance });
  }
};
r([r3({ GCSShiftXform: "gcs-shift" })], n.prototype, "type", void 0), r([m()], n.prototype, "tolerance", void 0), n = a4 = r([a("esri.layers.support.rasterTransforms.GCSShiftTransform")], n);
var c2 = n;

export {
  a2 as a,
  y,
  c2 as c
};
//# sourceMappingURL=chunk-ORV73QKC.js.map
