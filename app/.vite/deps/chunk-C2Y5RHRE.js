import {
  e as e2
} from "./chunk-ZRT3UCXK.js";
import {
  d
} from "./chunk-LTDNORB5.js";
import {
  e2 as e
} from "./chunk-4LTV6KQ5.js";

// node_modules/@arcgis/core/views/2d/tiling/LODInfo.js
function i(t, r2) {
  return [t, r2];
}
function o(t, r2, i3) {
  return t[0] = r2, t[1] = i3, t;
}
function e3(t, r2, i3, o3, e4) {
  return t[0] = r2, t[1] = i3, t[2] = o3, t[3] = e4, t;
}
var s = new e2("0/0/0/0");
var l = class _l {
  static create(r2, e4, s3 = null) {
    const n2 = d(r2.spatialReference), a2 = e4.origin || i(r2.origin.x, r2.origin.y), h2 = i(r2.size[0] * e4.resolution, r2.size[1] * e4.resolution), u = i(-1 / 0, -1 / 0), c = i(1 / 0, 1 / 0), m = i(1 / 0, 1 / 0);
    null != s3 && (o(u, Math.max(0, Math.floor((s3.xmin - a2[0]) / h2[0])), Math.max(0, Math.floor((a2[1] - s3.ymax) / h2[1]))), o(c, Math.max(0, Math.floor((s3.xmax - a2[0]) / h2[0])), Math.max(0, Math.floor((a2[1] - s3.ymin) / h2[1]))), o(m, c[0] - u[0] + 1, c[1] - u[1] + 1));
    const { cols: g, rows: w } = e4;
    let d2, f, p, z;
    return !s3 && g && w && (o(u, g[0], w[0]), o(c, g[1], w[1]), o(m, g[1] - g[0] + 1, w[1] - w[0] + 1)), r2.isWrappable ? (d2 = i(Math.ceil(Math.round((n2.valid[1] - n2.valid[0]) / e4.resolution) / r2.size[0]), m[1]), f = true, p = n2.origin, z = n2.valid) : (d2 = m, f = false), new _l(e4.level, e4.resolution, e4.scale, a2, u, c, m, h2, d2, f, p, z);
  }
  constructor(t, r2, i3, o3, e4, s3, l2, n2, a2, h2, u, c) {
    this.level = t, this.resolution = r2, this.scale = i3, this.origin = o3, this.first = e4, this.last = s3, this.size = l2, this.norm = n2, this.worldSize = a2, this.wrap = h2, this._spatialReferenceOrigin = u, this._spatialReferenceValid = c;
  }
  normalizeCol(t) {
    if (!this.wrap) return t;
    const r2 = this.worldSize[0];
    return t < 0 ? r2 - 1 - Math.abs((t + 1) % r2) : t % r2;
  }
  normalizeKey(t) {
    if (!this.wrap) return;
    const r2 = this.worldSize[0], i3 = t.col;
    i3 < 0 ? (t.col = i3 + r2, t.world -= 1) : i3 >= r2 && (t.col = i3 - r2, t.world += 1);
  }
  denormalizeCol(t, r2) {
    return this.wrap ? this.worldSize[0] * r2 + t : t;
  }
  getWorldForColumn(t) {
    return this.wrap ? Math.floor(t / this.worldSize[0]) : 0;
  }
  getFirstColumnForWorld(t) {
    return t * this.worldSize[0] + this.first[0];
  }
  getLastColumnForWorld(t) {
    return t * this.worldSize[0] + this.first[0] + this.size[0] - 1;
  }
  getColumnForX(t) {
    return (t - this.origin[0]) / this.norm[0];
  }
  getXForColumn(t) {
    const r2 = this.origin[0] + t * this.norm[0], i3 = this._spatialReferenceOrigin, o3 = this._spatialReferenceValid;
    return this.wrap && i3 && o3 ? r2 === i3[0] ? o3[0] : this.origin[0] === i3[0] && t === this.worldSize[0] ? o3[1] : r2 : r2;
  }
  getRowForY(t) {
    return (this.origin[1] - t) / this.norm[1];
  }
  getYForRow(t) {
    return this.origin[1] - t * this.norm[1];
  }
  getTileBounds(t, r2, i3 = false) {
    s.set(r2);
    const o3 = i3 ? s.col : this.denormalizeCol(s.col, s.world), l2 = s.row;
    return e3(t, this.getXForColumn(o3), this.getYForRow(l2 + 1), this.getXForColumn(o3 + 1), this.getYForRow(l2)), t;
  }
  getTileCoords(t, r2, i3 = false) {
    s.set(r2);
    const e4 = i3 ? s.col : this.denormalizeCol(s.col, s.world);
    return Array.isArray(t) ? o(t, this.getXForColumn(e4), this.getYForRow(s.row)) : (t.x = this.getXForColumn(e4), t.y = this.getYForRow(s.row)), t;
  }
};

// node_modules/@arcgis/core/views/2d/tiling/TileCoverage.js
var s2 = class {
  constructor() {
    this.spans = [];
  }
  acquire(o3) {
    this.lodInfo = o3;
  }
  release() {
    this.lodInfo = null, this.spans.length = 0;
  }
  *keys() {
    const o3 = this.lodInfo;
    for (const { row: s3, colFrom: e4, colTo: r2 } of this.spans) for (let t = e4; t <= r2; t++) {
      const e5 = o3.getWorldForColumn(t);
      yield new e2(o3.level, s3, o3.normalizeCol(t), e5);
    }
  }
  forEach(o3, l2) {
    const { spans: s3, lodInfo: e4 } = this, { level: r2 } = e4;
    if (0 !== s3.length) for (const { row: t, colFrom: n2, colTo: c } of s3) for (let s4 = n2; s4 <= c; s4++) o3.call(l2, r2, t, e4.normalizeCol(s4), e4.getWorldForColumn(s4));
  }
};
s2.pool = new e(s2);

// node_modules/@arcgis/core/views/2d/tiling/TileSpan.js
var o2 = class {
  constructor(o3, s3, t) {
    this.row = o3, this.colFrom = s3, this.colTo = t;
  }
};

// node_modules/@arcgis/core/views/2d/tiling/TileInfoView.js
var i2 = new e2("0/0/0/0");
var n = class _n {
  static create(e4, t) {
    e4[1] > t[1] && ([e4, t] = [t, e4]);
    const [o3, l2] = e4, [s3, i3] = t, r2 = s3 - o3, a2 = i3 - l2, h2 = 0 !== a2 ? r2 / a2 : 0, c = (Math.ceil(l2) - l2) * h2, f = (Math.floor(l2) - l2) * h2;
    return new _n(o3, Math.floor(l2), Math.ceil(i3), h2, r2 < 0 ? c : f, r2 < 0 ? f : c, r2 < 0 ? s3 : o3, r2 < 0 ? o3 : s3);
  }
  constructor(e4, t, o3, l2, s3, i3, n2, r2) {
    this.x = e4, this.ymin = t, this.ymax = o3, this.invM = l2, this.leftAdjust = s3, this.rightAdjust = i3, this.leftBound = n2, this.rightBound = r2;
  }
  incrRow() {
    this.x += this.invM;
  }
  getLeftCol() {
    return Math.max(this.x + this.leftAdjust, this.leftBound);
  }
  getRightCol() {
    return Math.min(this.x + this.rightAdjust, this.rightBound);
  }
};
var r = [[0, 0], [0, 0], [0, 0], [0, 0]];
var a = 1e-6;
var h = class {
  constructor(e4, o3 = null, l2 = e4.lods[0].level, s3 = e4.lods[e4.lods.length - 1].level) {
    this.tileInfo = e4, this.fullExtent = o3, this.scales = [], this._infoByScale = {}, this._infoByLevel = {};
    const i3 = e4.lods.filter((e5) => e5.level >= l2 && e5.level <= s3);
    this.minScale = i3[0].scale, this.maxScale = i3[i3.length - 1].scale;
    const n2 = this._lodInfos = i3.map((l3) => l.create(e4, l3, o3));
    i3.forEach((e5, t) => {
      this._infoByLevel[e5.level] = n2[t], this._infoByScale[e5.scale] = n2[t], this.scales[t] = e5.scale;
    }, this), this._wrap = e4.isWrappable;
  }
  get spatialReference() {
    return this.tileInfo.spatialReference;
  }
  getLODInfoAt(e4) {
    return this._infoByLevel["number" == typeof e4 ? e4 : e4.level];
  }
  getTileBounds(e4, t, o3 = false) {
    i2.set(t);
    const l2 = this._infoByLevel[i2.level];
    return l2 ? l2.getTileBounds(e4, i2, o3) : e4;
  }
  getTileCoords(e4, t, o3 = false) {
    i2.set(t);
    const l2 = this._infoByLevel[i2.level];
    return l2 ? l2.getTileCoords(e4, i2, o3) : e4;
  }
  getTileCoverage(e4, t = 192, l2 = true, i3 = "closest") {
    if (!l2 && (e4.scale > this.minScale || e4.scale < this.maxScale)) return null;
    const a2 = "closest" === i3 ? this.getClosestInfoForScale(e4.scale) : this.getSmallestInfoForScale(e4.scale), h2 = s2.pool.acquire(a2), c = this._wrap;
    let f, u, m, g = 1 / 0, d2 = -1 / 0;
    const v = h2.spans;
    r[0][0] = r[0][1] = r[1][1] = r[3][0] = -t, r[1][0] = r[2][0] = e4.size[0] + t, r[2][1] = r[3][1] = e4.size[1] + t;
    for (const o3 of r) e4.toMap(o3, o3), o3[0] = a2.getColumnForX(o3[0]), o3[1] = a2.getRowForY(o3[1]);
    const y = [];
    let _ = 3;
    for (let o3 = 0; o3 < 4; o3++) {
      if (r[o3][1] === r[_][1]) {
        _ = o3;
        continue;
      }
      const e5 = n.create(r[o3], r[_]);
      g = Math.min(e5.ymin, g), d2 = Math.max(e5.ymax, d2), void 0 === y[e5.ymin] && (y[e5.ymin] = []), y[e5.ymin].push(e5), _ = o3;
    }
    if (null == g || null == d2 || d2 - g > 100) return null;
    let p = [];
    for (f = g; f < d2; ) {
      null != y[f] && (p = p.concat(y[f])), u = 1 / 0, m = -1 / 0;
      for (let e5 = p.length - 1; e5 >= 0; e5--) {
        const t2 = p[e5];
        u = Math.min(u, t2.getLeftCol()), m = Math.max(m, t2.getRightCol());
      }
      if (u = Math.floor(u), m = Math.floor(m), f >= a2.first[1] && f <= a2.last[1]) if (c) if (a2.size[0] < a2.worldSize[0]) {
        const e5 = Math.floor(m / a2.worldSize[0]);
        for (let t2 = Math.floor(u / a2.worldSize[0]); t2 <= e5; t2++) v.push(new o2(f, Math.max(a2.getFirstColumnForWorld(t2), u), Math.min(a2.getLastColumnForWorld(t2), m)));
      } else v.push(new o2(f, u, m));
      else u > a2.last[0] || m < a2.first[0] || (u = Math.max(u, a2.first[0]), m = Math.min(m, a2.last[0]), v.push(new o2(f, u, m)));
      f += 1;
      for (let e5 = p.length - 1; e5 >= 0; e5--) {
        const t2 = p[e5];
        t2.ymax >= f ? t2.incrRow() : p.splice(e5, 1);
      }
    }
    return h2;
  }
  getTileParentId(e4) {
    i2.set(e4);
    const t = this._infoByLevel[i2.level], o3 = this._lodInfos.indexOf(t) - 1;
    return o3 < 0 ? null : (this._getTileIdAtLOD(i2, this._lodInfos[o3], i2), i2.id);
  }
  getTileResolution(e4) {
    const t = this._infoByLevel["object" == typeof e4 ? e4.level : e4];
    return t ? t.resolution : -1;
  }
  getTileScale(e4) {
    const t = this._infoByLevel[e4.level];
    return t ? t.scale : -1;
  }
  intersects(e4, t) {
    i2.set(t);
    const o3 = this._infoByLevel[i2.level], l2 = e4.lodInfo;
    if (l2.resolution > o3.resolution) {
      this._getTileIdAtLOD(i2, l2, i2);
      const t2 = l2.denormalizeCol(i2.col, i2.world);
      for (const o4 of e4.spans) if (o4.row === i2.row && o4.colFrom <= t2 && o4.colTo >= t2) return true;
    }
    if (l2.resolution < o3.resolution) {
      const [t2, s4, n2, r2] = e4.spans.reduce((e5, t3) => (e5[0] = Math.min(e5[0], t3.row), e5[1] = Math.max(e5[1], t3.row), e5[2] = Math.min(e5[2], t3.colFrom), e5[3] = Math.max(e5[3], t3.colTo), e5), [1 / 0, -1 / 0, 1 / 0, -1 / 0]), a2 = o3.denormalizeCol(i2.col, i2.world), h2 = l2.getColumnForX(o3.getXForColumn(a2)), c = l2.getRowForY(o3.getYForRow(i2.row)), f = l2.getColumnForX(o3.getXForColumn(a2 + 1)) - 1, u = l2.getRowForY(o3.getYForRow(i2.row + 1)) - 1;
      return !(h2 > r2 || f < n2 || c > s4 || u < t2);
    }
    const s3 = l2.denormalizeCol(i2.col, i2.world);
    return e4.spans.some((e5) => e5.row === i2.row && e5.colFrom <= s3 && e5.colTo >= s3);
  }
  normalizeBounds(t, o3, l2) {
    if (t[0] = o3[0], t[1] = o3[1], t[2] = o3[2], t[3] = o3[3], this._wrap) {
      const o4 = d(this.tileInfo.spatialReference), s3 = -l2 * (o4.valid[1] - o4.valid[0]);
      t[0] += s3, t[2] += s3;
    }
    return t;
  }
  getSmallestInfoForScale(e4) {
    const t = this.scales;
    if (this._infoByScale[e4]) return this._infoByScale[e4];
    if (e4 > t[0]) return this._infoByScale[t[0]];
    for (let o3 = 1; o3 < t.length - 1; o3++) if (e4 > t[o3] + a) return this._infoByScale[t[o3 - 1]];
    return this._infoByScale[t[t.length - 1]];
  }
  getClosestInfoForScale(e4) {
    const t = this.scales;
    return this._infoByScale[e4] || (e4 = t.reduce((t2, o3) => Math.abs(o3 - e4) < Math.abs(t2 - e4) ? o3 : t2, t[0])), this._infoByScale[e4];
  }
  scaleToLevel(e4) {
    const t = this.scales;
    if (this._infoByScale[e4]) return this._infoByScale[e4].level;
    for (let o3 = t.length - 1; o3 >= 0; o3--) if (e4 < t[o3]) {
      if (o3 === t.length - 1) return this._infoByScale[t[t.length - 1]].level;
      return this._infoByScale[t[o3]].level + (t[o3] - e4) / (t[o3] - t[o3 + 1]);
    }
    return this._infoByScale[t[0]].level;
  }
  scaleToZoom(e4) {
    return this.tileInfo.scaleToZoom(e4);
  }
  zoomToScale(e4) {
    return this.tileInfo.zoomToScale(e4);
  }
  _getTileIdAtLOD(e4, t, o3) {
    const l2 = this._infoByLevel[o3.level];
    return e4.set(o3), t.resolution < l2.resolution ? null : (t.resolution === l2.resolution || (e4.level = t.level, e4.col = Math.floor(o3.col * l2.resolution / t.resolution + 0.01), e4.row = Math.floor(o3.row * l2.resolution / t.resolution + 0.01)), e4);
  }
};

export {
  s2 as s,
  h
};
//# sourceMappingURL=chunk-C2Y5RHRE.js.map
