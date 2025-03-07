import {
  e
} from "./chunk-UAMCCNF6.js";
import {
  T
} from "./chunk-4PSNRXYY.js";
import {
  z
} from "./chunk-SUSOH323.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/layers/mixins/ArcGISCachedService.js
var p = (p2) => {
  let n = class extends p2 {
    constructor() {
      super(...arguments), this.copyright = null, this.minScale = 0, this.maxScale = 0, this.spatialReference = null, this.tileInfo = null, this.tilemapCache = null;
    }
    destroy() {
      var _a, _b;
      (_b = (_a = this.tilemapCache) == null ? void 0 : _a.destroy) == null ? void 0 : _b.call(_a);
    }
    readMinScale(e2, o2) {
      return null != o2.minLOD && null != o2.maxLOD ? e2 : 0;
    }
    readMaxScale(e2, o2) {
      return null != o2.minLOD && null != o2.maxLOD ? e2 : 0;
    }
    get supportsBlankTile() {
      return this.version >= 10.2;
    }
    readTilemapCache(e2, o2, r2) {
      var _a;
      const t = (_a = o2.capabilities) == null ? void 0 : _a.includes("Tilemap");
      let { minLOD: l, maxLOD: p3, minScale: n2, maxScale: c } = o2;
      if (null == l && null == p3 && (0 !== n2 || 0 !== c)) {
        const e3 = (e4) => Math.round(1e4 * e4) / 1e4;
        n2 = e3(n2 || o2.tileInfo.lods[0].scale), c = e3(c || o2.tileInfo.lods[o2.tileInfo.lods.length - 1].scale);
        for (const r3 of o2.tileInfo.lods) {
          const o3 = e3(r3.scale);
          l = o3 >= n2 ? r3.level : l, p3 = o3 >= c ? r3.level : p3;
        }
      }
      if (t) return new T({ layer: this, minLOD: l, maxLOD: p3 });
      if (o2.tileInfo) {
        const e3 = new z();
        return e3.read(o2.tileInfo, r2), new e(e3, l, p3);
      }
      return null;
    }
  };
  return r([m({ json: { read: { source: "copyrightText" } } })], n.prototype, "copyright", void 0), r([m()], n.prototype, "minScale", void 0), r([o("service", "minScale")], n.prototype, "readMinScale", null), r([m()], n.prototype, "maxScale", void 0), r([o("service", "maxScale")], n.prototype, "readMaxScale", null), r([m({ type: g })], n.prototype, "spatialReference", void 0), r([m({ readOnly: true })], n.prototype, "supportsBlankTile", null), r([m({ type: z })], n.prototype, "tileInfo", void 0), r([m()], n.prototype, "tilemapCache", void 0), r([o("service", "tilemapCache", ["capabilities", "tileInfo"])], n.prototype, "readTilemapCache", null), r([m()], n.prototype, "version", void 0), n = r([a("esri.layers.mixins.ArcGISCachedService")], n), n;
};

export {
  p
};
//# sourceMappingURL=chunk-SYLT4S4B.js.map
