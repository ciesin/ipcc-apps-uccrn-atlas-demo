import {
  S,
  p
} from "./chunk-JS6F4JFY.js";
import {
  i
} from "./chunk-RYF2HIUG.js";
import {
  r as r2
} from "./chunk-3SEDCXI3.js";
import {
  E,
  e
} from "./chunk-RD3QRDRK.js";
import {
  u
} from "./chunk-G34KEQQG.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/views/2d/engine/BitmapTile.js
var r3 = class extends r2 {
  constructor(e3, s2, r5, i2, a2, n2, o2 = null) {
    super(e3, s2, r5, i2, a2, n2), this.bitmap = new S(o2), this.bitmap.coordScale = [a2, n2], this.bitmap.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.bitmap.destroy();
  }
  beforeRender(e3) {
    this.bitmap.beforeRender(e3), super.beforeRender(e3);
  }
  afterRender(e3) {
    this.bitmap.afterRender(e3), super.afterRender(e3);
  }
  set stencilRef(e3) {
    this.bitmap.stencilRef = e3;
  }
  get stencilRef() {
    return this.bitmap.stencilRef;
  }
  _createTransforms() {
    return { displayViewScreenMat3: e(), tileMat3: e() };
  }
  setTransform(e3) {
    super.setTransform(e3), this.bitmap.transforms.displayViewScreenMat3 = this.transforms.displayViewScreenMat3;
  }
  onAttach() {
    this.bitmap.stage = this.stage;
  }
  onDetach() {
    this.bitmap && (this.bitmap.stage = null);
  }
};

// node_modules/@arcgis/core/views/2d/engine/BitmapTileContainer.js
var s = class extends i {
  constructor() {
    super(...arguments), this._bitmapTechnique = null;
  }
  get requiresDedicatedFBO() {
    return this.children.some((e3) => "additive" === e3.bitmap.blendFunction);
  }
  createTile(t2) {
    const n2 = this.tileInfoView.getTileBounds(u(), t2), r5 = this.tileInfoView.getTileResolution(t2.level), [s2, o2] = this.tileInfoView.tileInfo.size;
    return new r3(t2, r5, n2[0], n2[3], s2, o2);
  }
  onAttach() {
    super.onAttach(), this._bitmapTechnique = new p();
  }
  onDetach() {
    var _a;
    super.onDetach(), (_a = this._bitmapTechnique) == null ? void 0 : _a.shutdown(), this._bitmapTechnique = null;
  }
  renderChildren(e3) {
    if (super.renderChildren(e3), !this.visible || e3.drawPhase !== E.MAP || null == this._bitmapTechnique) return;
    const i2 = this.children.map((e4) => e4.bitmap);
    this._bitmapTechnique.render(e3, { bitmaps: i2 });
  }
};

// node_modules/@arcgis/core/views/2d/layers/BitmapTileLayerView2D.js
var r4 = (r5) => {
  let s2 = class extends r5 {
    attach() {
      this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`), this._bitmapView = new s(this._tileInfoView), this.container.addChild(this._bitmapView);
    }
    detach() {
      var _a;
      this.container.removeChild(this._bitmapView), (_a = this._bitmapView) == null ? void 0 : _a.removeAllChildren(), this._bitmapView = null;
    }
  };
  return s2 = r([a("esri.views.2d.layers.BitmapTileLayerView2D")], s2), s2;
};

// node_modules/@arcgis/core/views/2d/layers/support/imageUtils.js
function e2(e3) {
  return e3 instanceof HTMLImageElement ? e3.naturalWidth : e3.width;
}
function t(e3) {
  return e3 instanceof HTMLImageElement ? e3.naturalHeight : e3.height;
}
function n(n2, l, r5, u2) {
  if (r5.level === u2.level) return l;
  const i2 = n2.tileInfo.size, a2 = n2.getTileResolution(r5.level), c = n2.getTileResolution(u2.level);
  let g = n2.getLODInfoAt(u2.level);
  const h = g.getXForColumn(u2.col), d = g.getYForRow(u2.row);
  g = n2.getLODInfoAt(r5.level);
  const f = g.getXForColumn(r5.col), s2 = g.getYForRow(r5.row), m = e2(l) / i2[0], v = t(l) / i2[1], w = Math.round(m * ((h - f) / a2)), I = Math.round(v * (-(d - s2) / a2)), M = Math.round(m * i2[0] * (c / a2)), F = Math.round(v * i2[1] * (c / a2)), L = o(i2);
  return L.getContext("2d").drawImage(l, w, I, M, F, 0, 0, i2[0], i2[1]), L;
}
function o(e3) {
  const t2 = document.createElement("canvas");
  return [t2.width, t2.height] = e3, t2;
}

export {
  r4 as r,
  n,
  o
};
//# sourceMappingURL=chunk-A4V4BDUI.js.map
