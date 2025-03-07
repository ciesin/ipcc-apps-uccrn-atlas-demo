import {
  E2 as E,
  s2 as s
} from "./chunk-6MN3R543.js";
import {
  H
} from "./chunk-UMYFDXOJ.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
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

// node_modules/@arcgis/core/views/interactive/snapping/Settings.js
var o = class extends S {
  constructor() {
    super(...arguments), this.enabled = true;
  }
};
r([m({ type: Boolean })], o.prototype, "enabled", void 0), o = r([a("esri.views.interactive.snapping.Settings.DefaultSnappingAlgorithm")], o);
var l = class extends S {
  constructor(e) {
    super(e), this.lineSnapper = new o(), this.parallelLineSnapper = new o(), this.rightAngleSnapper = new o(), this.rightAngleTriangleSnapper = new o(), this.shortLineThreshold = 15, this.distance = 5, this.pointThreshold = 1e-6, this.intersectionParallelLineThreshold = 1e-6, this.parallelLineThreshold = 1e-6, this.verticalLineThresholdMeters = 0.3, this.touchSensitivityMultiplier = 1.5, this.pointOnLineThreshold = 1e-6, this.orange = new h([255, 127, 0]), this.orangeTransparent = new h([255, 127, 0, 0.5]), this.lineHintWidthReference = 3, this.lineHintWidthTarget = 3, this.lineHintFadedExtensions = 0.3, this.parallelLineHintWidth = 2, this.parallelLineHintLength = 24, this.parallelLineHintOffset = 1.5, this.rightAngleHintSize = 24, this.rightAngleHintOutlineSize = 1.5, this.satisfiesConstraintScreenThreshold = 1;
  }
};
r([m({ type: o, constructOnly: true, nonNullable: true, json: { write: true } })], l.prototype, "lineSnapper", void 0), r([m({ type: o, constructOnly: true, nonNullable: true, json: { write: true } })], l.prototype, "parallelLineSnapper", void 0), r([m({ type: o, constructOnly: true, nonNullable: true, json: { write: true } })], l.prototype, "rightAngleSnapper", void 0), r([m({ type: o, constructOnly: true, nonNullable: true, json: { write: true } })], l.prototype, "rightAngleTriangleSnapper", void 0), r([m({ type: Number, nonNullable: true, range: { min: -1, max: 50, step: 1 }, json: { write: true } })], l.prototype, "shortLineThreshold", void 0), r([m({ type: Number, nonNullable: true, range: { min: -1, max: 50, step: 1 }, json: { write: true } })], l.prototype, "distance", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 1e-5 }, json: { write: true } })], l.prototype, "pointThreshold", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 1e-5 }, json: { write: true } })], l.prototype, "intersectionParallelLineThreshold", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 1e-5 }, json: { write: true } })], l.prototype, "parallelLineThreshold", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { write: true } })], l.prototype, "verticalLineThresholdMeters", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 10 }, json: { write: true } })], l.prototype, "touchSensitivityMultiplier", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 1e-5 }, json: { write: true } })], l.prototype, "pointOnLineThreshold", void 0), r([m({ type: h, nonNullable: true })], l.prototype, "orange", void 0), r([m({ type: h, nonNullable: true })], l.prototype, "orangeTransparent", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 10 }, json: { write: true } })], l.prototype, "lineHintWidthReference", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 10 }, json: { write: true } })], l.prototype, "lineHintWidthTarget", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { write: true } })], l.prototype, "lineHintFadedExtensions", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 10 }, json: { write: true } })], l.prototype, "parallelLineHintWidth", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 50 }, json: { write: true } })], l.prototype, "parallelLineHintLength", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 5 }, json: { write: true } })], l.prototype, "parallelLineHintOffset", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 46 }, json: { write: true } })], l.prototype, "rightAngleHintSize", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 6 }, json: { write: true } })], l.prototype, "rightAngleHintOutlineSize", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 5 }, json: { write: true } })], l.prototype, "satisfiesConstraintScreenThreshold", void 0), l = r([a("esri.views.interactive.snapping.Settings.Defaults")], l);
var p = new l();

// node_modules/@arcgis/core/views/interactive/snapping/hints/ParallelSnappingHint.js
var r2 = class _r extends s {
  constructor(t, i, r3, s2 = E.ALL) {
    super(r3, s2), this.lineStart = t, this.lineEnd = i;
  }
  equals(n) {
    return n instanceof _r && (H(this.lineStart, n.lineStart) && H(this.lineEnd, n.lineEnd));
  }
};

export {
  p,
  r2 as r
};
//# sourceMappingURL=chunk-U4J3KS6Z.js.map
