import {
  c,
  l
} from "./chunk-VJAWXVKJ.js";
import {
  p
} from "./chunk-LGG5FPVD.js";
import {
  t
} from "./chunk-DWXK7D3B.js";
import {
  h
} from "./chunk-DDEXP7LW.js";
import {
  f
} from "./chunk-NTUX5M6N.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/layers/GraphicsLayer.js
var c2 = class extends p(t(f)) {
  constructor(r2) {
    super(r2), this.elevationInfo = null, this.graphics = new c(), this.screenSizePerspectiveEnabled = true, this.type = "graphics", this.internal = false;
  }
  destroy() {
    this.removeAll(), this.graphics.destroy();
  }
  add(r2) {
    return this.graphics.add(r2), this;
  }
  addMany(r2) {
    return this.graphics.addMany(r2), this;
  }
  removeAll() {
    return this.graphics.removeAll(), this;
  }
  remove(r2) {
    this.graphics.remove(r2);
  }
  removeMany(r2) {
    this.graphics.removeMany(r2);
  }
  on(r2, e) {
    return super.on(r2, e);
  }
  graphicChanged(r2) {
    this.emit("graphic-update", r2);
  }
};
r([m({ type: h })], c2.prototype, "elevationInfo", void 0), r([m(l(c, "graphics"))], c2.prototype, "graphics", void 0), r([m({ type: ["show", "hide"] })], c2.prototype, "listMode", void 0), r([m()], c2.prototype, "screenSizePerspectiveEnabled", void 0), r([m({ readOnly: true })], c2.prototype, "type", void 0), r([m({ constructOnly: true })], c2.prototype, "internal", void 0), c2 = r([a("esri.layers.GraphicsLayer")], c2);
var h2 = c2;

export {
  h2 as h
};
//# sourceMappingURL=chunk-KT6X6Y6M.js.map
