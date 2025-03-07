import {
  n as n2,
  r as r2
} from "./chunk-LMA7TSBN.js";
import {
  s
} from "./chunk-BDBI2KVA.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a,
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/geometry/support/MeshVertexAttributes.js
var g;
var p = g = class extends S {
  constructor(t) {
    super(t), this.color = null, this.position = new Float64Array(0), this.uv = null, this.normal = null, this.tangent = null;
  }
  castColor(t) {
    return n2(t, Uint8Array, [Uint8ClampedArray], { loggerTag: ".color=", stride: 4 }, n.getLogger(this));
  }
  castPosition(t) {
    t && t instanceof Float32Array && n.getLogger(this).warn(".position=", "Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");
    return n2(t, Float64Array, [Float32Array], { loggerTag: ".position=", stride: 3 }, n.getLogger(this));
  }
  castUv(t) {
    return n2(t, Float32Array, [Float64Array], { loggerTag: ".uv=", stride: 2 }, n.getLogger(this));
  }
  castNormal(t) {
    return n2(t, Float32Array, [Float64Array], { loggerTag: ".normal=", stride: 3 }, n.getLogger(this));
  }
  castTangent(t) {
    return n2(t, Float32Array, [Float64Array], { loggerTag: ".tangent=", stride: 4 }, n.getLogger(this));
  }
  clone() {
    const t = { position: a(this.position), uv: a(this.uv), normal: a(this.normal), tangent: a(this.tangent), color: a(this.color) };
    return new g(t);
  }
  clonePositional() {
    const t = { position: a(this.position), normal: a(this.normal), tangent: a(this.tangent), uv: this.uv, color: this.color };
    return new g(t);
  }
  get usedMemory() {
    var _a, _b, _c, _d;
    return this.position.byteLength + (((_a = this.uv) == null ? void 0 : _a.byteLength) ?? 0) + (((_b = this.normal) == null ? void 0 : _b.byteLength) ?? 0) + (((_c = this.tangent) == null ? void 0 : _c.byteLength) ?? 0) + (((_d = this.color) == null ? void 0 : _d.byteLength) ?? 0);
  }
};
r([m({ json: { write: r2 } })], p.prototype, "color", void 0), r([s("color")], p.prototype, "castColor", null), r([m({ nonNullable: true, json: { write: r2 } })], p.prototype, "position", void 0), r([s("position")], p.prototype, "castPosition", null), r([m({ json: { write: r2 } })], p.prototype, "uv", void 0), r([s("uv")], p.prototype, "castUv", null), r([m({ json: { write: r2 } })], p.prototype, "normal", void 0), r([s("normal")], p.prototype, "castNormal", null), r([m({ json: { write: r2 } })], p.prototype, "tangent", void 0), r([s("tangent")], p.prototype, "castTangent", null), p = g = r([a2("esri.geometry.support.MeshVertexAttributes")], p);

export {
  p
};
//# sourceMappingURL=chunk-SKW2R7G5.js.map
