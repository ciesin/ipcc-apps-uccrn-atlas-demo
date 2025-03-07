import {
  e
} from "./chunk-ZRT3UCXK.js";
import {
  m
} from "./chunk-AI2O2GKK.js";
import {
  c,
  u
} from "./chunk-G34KEQQG.js";
import {
  t3 as t
} from "./chunk-RYSF6YCR.js";

// node_modules/@arcgis/core/views/2d/layers/features/support/arcadeUtils.js
function e2(e3, { timeZone: t2, timeExtent: r2 }) {
  return { $view: { scale: e3, timeZone: t2, timeProperties: { currentStart: r2 == null ? void 0 : r2.start, currentEnd: r2 == null ? void 0 : r2.end } } };
}

// node_modules/@arcgis/core/views/2d/layers/features/support/Tile.js
var r = class _r {
  constructor(e3, i) {
    this.key = new e(0, 0, 0, 0), this.bounds = u(), this.objectIds = /* @__PURE__ */ new Set(), this.key.set(i);
    const s = e3.getLODInfoAt(this.key);
    this.tileInfoView = e3, this.tileInfoView.getTileBounds(this.bounds, this.key, true), this.resolution = s.resolution, this.level = s.level, this.scale = s.scale, this.minScale = e3.zoomToScale(s.level - 1), this.maxScale = e3.zoomToScale(s.level + 1);
  }
  get lod() {
    return this.tileInfoView.getLODInfoAt(this.key);
  }
  get id() {
    return this.key.id;
  }
  get extent() {
    return c(this.bounds, this.tileInfoView.tileInfo.spatialReference);
  }
  get transform() {
    return { originPosition: "upperLeft", scale: [this.resolution, this.resolution], translate: [this.bounds[0], this.bounds[3]] };
  }
  createArcadeEvaluationOptions(e3) {
    return e2(this.scale, e3);
  }
  createChildTiles() {
    const t2 = this.key.getChildKeys(), i = t.acquire();
    for (let e3 = 0; e3 < t2.length; e3++) i[e3] = new _r(this.tileInfoView, t2[e3]);
    return i;
  }
  getQuantizationParameters() {
    return m.fromJSON({ mode: "view", originPosition: "upperLeft", tolerance: this.resolution, extent: { xmin: this.bounds[0], ymin: this.bounds[1], xmax: this.bounds[2], ymax: this.bounds[3], spatialReference: this.tileInfoView.tileInfo.spatialReference } });
  }
};

export {
  e2 as e,
  r
};
//# sourceMappingURL=chunk-3KL6EETN.js.map
