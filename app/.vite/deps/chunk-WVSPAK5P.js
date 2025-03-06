import {
  p
} from "./chunk-JS6F4JFY.js";
import {
  n3 as n
} from "./chunk-3SEDCXI3.js";
import {
  E
} from "./chunk-RD3QRDRK.js";

// node_modules/@arcgis/core/views/2d/engine/BitmapContainer.js
var r = class extends n {
  constructor() {
    super(...arguments), this._hasCrossfade = false, this._bitmapTechnique = null;
  }
  get requiresDedicatedFBO() {
    return super.requiresDedicatedFBO || this._hasCrossfade;
  }
  beforeRender(e) {
    super.beforeRender(e), this._manageFade();
  }
  onAttach() {
    super.onAttach(), this._bitmapTechnique = new p();
  }
  onDetach() {
    var _a;
    super.onDetach(), (_a = this._bitmapTechnique) == null ? void 0 : _a.shutdown(), this._bitmapTechnique = null;
  }
  renderChildren(i) {
    super.renderChildren(i), this.visible && i.drawPhase === E.MAP && null != this._bitmapTechnique && this._bitmapTechnique.render(i, { bitmaps: this.children });
  }
  _manageFade() {
    this.children.reduce((e, i) => e + (i.inFadeTransition ? 1 : 0), 0) >= 2 ? (this.children.forEach((e) => e.blendFunction = "additive"), this._hasCrossfade = true) : (this.children.forEach((e) => e.blendFunction = "standard"), this._hasCrossfade = false);
  }
};

export {
  r
};
//# sourceMappingURL=chunk-WVSPAK5P.js.map
