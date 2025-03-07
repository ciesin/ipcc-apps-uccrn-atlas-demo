import {
  S
} from "./chunk-JS6F4JFY.js";
import {
  h
} from "./chunk-C2Y5RHRE.js";
import {
  e
} from "./chunk-ZRT3UCXK.js";
import {
  z
} from "./chunk-SUSOH323.js";
import {
  c,
  u
} from "./chunk-G34KEQQG.js";
import {
  d
} from "./chunk-LTDNORB5.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a as a2,
  k,
  s,
  y
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/views/2d/viewStateUtils.js
var t = Math.PI / 180;
function n(n2) {
  return n2 * t;
}
function o(t2, o2) {
  const a4 = n(o2.rotation), r2 = Math.abs(Math.cos(a4)), s2 = Math.abs(Math.sin(a4)), [u2, c2] = o2.size;
  return t2[0] = Math.round(c2 * s2 + u2 * r2), t2[1] = Math.round(c2 * r2 + u2 * s2), t2;
}
function a3(t2, n2, o2, a4) {
  const [r2, s2] = n2, [u2, c2] = a4, h2 = 0.5 * o2;
  return t2[0] = r2 - h2 * u2, t2[1] = s2 - h2 * c2, t2[2] = r2 + h2 * u2, t2[3] = s2 + h2 * c2, t2;
}

// node_modules/@arcgis/core/views/2d/layers/support/ExportStrategy.js
var y2 = u();
var x = [0, 0];
var S2 = new e(0, 0, 0, 0);
var w = { container: null, fetchSource: null, requestUpdate: null, imageMaxWidth: 2048, imageMaxHeight: 2048, imageRotationSupported: false, imageNormalizationSupported: false, hidpi: false };
var M = class extends g {
  constructor(t2) {
    super(t2), this._imagePromise = null, this.bitmaps = [], this.hidpi = w.hidpi, this.imageMaxWidth = w.imageMaxWidth, this.imageMaxHeight = w.imageMaxHeight, this.imageRotationSupported = w.imageRotationSupported, this.imageNormalizationSupported = w.imageNormalizationSupported, this.update = k(async (t3, e2) => {
      if (s(e2), !t3.stationary || this.destroyed) return;
      const i = t3.state, s2 = d(i.spatialReference), a4 = this.hidpi ? t3.pixelRatio : 1, n2 = i.worldScreenWidth > 0, p = n2 && this.imageNormalizationSupported && i.worldScreenWidth < i.size[0], m2 = Math.round((this.imageMaxWidth ?? 0) / a4), l = Math.round((this.imageMaxHeight ?? 0) / a4);
      p ? (x[0] = i.worldScreenWidth, x[1] = i.size[1]) : this.imageRotationSupported ? (x[0] = i.size[0], x[1] = i.size[1]) : o(x, i);
      const c2 = Math.floor(x[0]) > m2 || Math.floor(x[1]) > l, u2 = s2 && (i.extent.xmin < s2.valid[0] || i.extent.xmax > s2.valid[1]), g2 = !this.imageNormalizationSupported && u2, f = !c2 && !g2, y3 = this.imageRotationSupported ? i.rotation : 0, S3 = this.container.children.slice();
      if (f) {
        const t4 = p ? i.paddedViewState.center : i.center;
        this._imagePromise = this._singleExport(i, x, t4, i.resolution, y3, a4, e2);
      } else {
        let t4 = Math.min(m2, l);
        n2 && (t4 = Math.min(i.worldScreenWidth, t4), t4 = Math.round(i.worldScreenWidth / Math.ceil(i.worldScreenWidth / t4))), this._imagePromise = this._tiledExport(i, t4, a4, e2);
      }
      try {
        const t4 = await this._imagePromise ?? [];
        s(e2);
        const i2 = [];
        if (this._imagePromise = null, this.destroyed) return;
        this.bitmaps = t4;
        for (const e3 of S3) t4.includes(e3) || i2.push(e3.fadeOut().then(() => {
          e3.remove(), e3.destroy();
        }));
        for (const e3 of t4) i2.push(e3.fadeIn());
        await Promise.all(i2);
      } catch (w2) {
        this._imagePromise = null, a2(w2);
      }
    }, 5e3), this.updateExports = k(async (t3) => {
      const e2 = [];
      for (const i of this.container.children) {
        if (!i.visible || !i.stage) return;
        e2.push(t3(i).then(() => {
          i.invalidateTexture(), i.requestRender();
        }));
      }
      this._imagePromise = y(e2).then(() => this._imagePromise = null), await this._imagePromise;
    });
  }
  destroy() {
    this.bitmaps.forEach((t2) => t2.destroy()), this.bitmaps = [];
  }
  get updating() {
    return !this.destroyed && null !== this._imagePromise;
  }
  async _export(t2, e2, i, r2, s2, a4) {
    const n2 = await this.fetchSource(t2, Math.floor(e2 * s2), Math.floor(i * s2), { rotation: r2, pixelRatio: s2, signal: a4 });
    s(a4);
    const p = new S(null, true);
    return p.x = t2.xmin, p.y = t2.ymax, p.resolution = t2.width / e2, p.rotation = r2, p.pixelRatio = s2, p.opacity = 0, this.container.addChild(p), await p.setSourceAsync(n2, a4), s(a4), p;
  }
  async _singleExport(t2, e2, i, o2, r2, s2, a4) {
    a3(y2, i, o2, e2);
    const n2 = c(y2, t2.spatialReference);
    return [await this._export(n2, e2[0], e2[1], r2, s2, a4)];
  }
  _tiledExport(t2, e2, i, o2) {
    const r2 = z.create({ size: e2, spatialReference: t2.spatialReference, scales: [t2.scale] }), s2 = new h(r2), a4 = s2.getTileCoverage(t2);
    if (!a4) return null;
    const n2 = [];
    return a4.forEach((r3, a5, p, h2) => {
      S2.set(r3, a5, p, 0), s2.getTileBounds(y2, S2);
      const l = c(y2, t2.spatialReference);
      n2.push(this._export(l, e2, e2, 0, i, o2).then((t3) => (0 !== h2 && (S2.set(r3, a5, p, h2), s2.getTileBounds(y2, S2), t3.x = y2[0], t3.y = y2[3]), t3)));
    }), Promise.all(n2);
  }
};
r([m()], M.prototype, "_imagePromise", void 0), r([m()], M.prototype, "bitmaps", void 0), r([m()], M.prototype, "container", void 0), r([m()], M.prototype, "fetchSource", void 0), r([m()], M.prototype, "hidpi", void 0), r([m()], M.prototype, "imageMaxWidth", void 0), r([m()], M.prototype, "imageMaxHeight", void 0), r([m()], M.prototype, "imageRotationSupported", void 0), r([m()], M.prototype, "imageNormalizationSupported", void 0), r([m()], M.prototype, "requestUpdate", void 0), r([m()], M.prototype, "updating", null), M = r([a("esri.views.2d.layers.support.ExportStrategy")], M);
var _ = M;

export {
  _
};
//# sourceMappingURL=chunk-EJAT5LLO.js.map
