import {
  i
} from "./chunk-NCWMOUUB.js";
import {
  E,
  R,
  g
} from "./chunk-RD3QRDRK.js";

// node_modules/@arcgis/core/views/2d/layers/graphics/GraphicContainer.js
var t = class extends i {
  renderChildren(i2) {
    for (const e of this.children) e.setTransform(i2.state);
    if (super.renderChildren(i2), this._updateAttributeView(), this.children.some((e) => e.hasData)) {
      switch (i2.drawPhase) {
        case E.MAP:
          this._renderChildren(i2, R.All);
          break;
        case E.HIGHLIGHT:
          this.hasHighlight && this._renderHighlight(i2);
      }
      this._boundsRenderer && this._boundsRenderer.doRender(i2);
    }
  }
  _renderHighlight(e) {
    g(e, false, (e2) => {
      this._renderChildren(e2, R.Highlight);
    });
  }
};

export {
  t
};
//# sourceMappingURL=chunk-BPG2L5C7.js.map
