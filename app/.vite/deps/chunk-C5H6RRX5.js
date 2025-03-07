import {
  V,
  me,
  z
} from "./chunk-LHHFTRIL.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";

// node_modules/@arcgis/core/layers/support/rasterDatasets/EphemeralBlockCache.js
var t = class {
  constructor(t2 = 15e3, e = 5e3) {
    this._timer = null, this._cachedBlocks = /* @__PURE__ */ new Map(), this._size = -1, this._duration = t2, this._interval = Math.min(t2, e);
  }
  decreaseRefCount(t2, e) {
    const s2 = t2 + "/" + e, r2 = this._cachedBlocks;
    if (r2.has(s2)) {
      const t3 = r2.get(s2);
      return t3.refCount--, t3.refCount <= 0 && (r2.delete(s2), t3.controller && t3.controller.abort()), t3.refCount;
    }
    return 0;
  }
  getBlock(t2, e) {
    const s2 = t2 + "/" + e, r2 = this._cachedBlocks;
    if (r2.has(s2)) {
      const t3 = r2.get(s2);
      return t3.ts = Date.now(), t3.refCount++, r2.delete(s2), r2.set(s2, t3), t3.block;
    }
    return null;
  }
  putBlock(t2, e, s2, r2) {
    const i2 = this._cachedBlocks, c2 = t2 + "/" + e;
    if (i2.has(c2)) {
      const t3 = i2.get(c2);
      t3.ts = Date.now(), t3.refCount++;
    } else i2.set(c2, { block: s2, ts: Date.now(), refCount: 1, controller: r2 });
    this._trim(), this._updateTimer();
  }
  deleteBlock(t2, e) {
    const s2 = this._cachedBlocks, r2 = t2 + "/" + e;
    s2.has(r2) && s2.delete(r2);
  }
  updateMaxSize(t2) {
    this._size = t2, this._trim();
  }
  empty() {
    this._cachedBlocks.clear(), this._clearTimer();
  }
  getCurrentSize() {
    return this._cachedBlocks.size;
  }
  _updateTimer() {
    if (null != this._timer) return;
    const t2 = this._cachedBlocks;
    this._timer = setInterval(() => {
      const e = Array.from(t2), s2 = Date.now();
      for (let r2 = 0; r2 < e.length && e[r2][1].ts <= s2 - this._duration; r2++) t2.delete(e[r2][0]);
      0 === t2.size && this._clearTimer();
    }, this._interval);
  }
  _trim() {
    const t2 = this._cachedBlocks;
    if (-1 === this._size || this._size >= t2.size) return;
    const e = Array.from(t2);
    for (let s2 = 0; s2 < e.length - this._size; s2++) t2.delete(e[s2][0]);
  }
  _clearTimer() {
    null != this._timer && (clearInterval(this._timer), this._timer = null);
  }
};

// node_modules/@arcgis/core/layers/support/rasterDatasets/RawBlockCache.js
var r = /* @__PURE__ */ new Map();
var c = new t();
function i(e, t2) {
  return null == t2 ? e : `${e}?sliceId=${t2}`;
}
function u(e, t2) {
  const n = { extent: null, rasterInfo: t2, cache: /* @__PURE__ */ new Map() }, o = r.get(e);
  return o ? (o.push(n), o.length - 1) : (r.set(e, [n]), 0);
}
function a(e, t2) {
  const n = r.get(e);
  n && (n[t2] = null, n.some((e2) => null != e2) || r.delete(e));
}
function s(e, t2, n) {
  var _a, _b;
  const o = r.get(e);
  if (!o) return null == t2 ? c.decreaseRefCount(e, n) : 0;
  if (null == t2 || null == o[t2]) return c.decreaseRefCount(e, n);
  const l = (_a = o[t2]) == null ? void 0 : _a.cache, i2 = l == null ? void 0 : l.get(n);
  if (l && i2) {
    if (i2.refCount--, 0 === i2.refCount) {
      l.delete(n);
      for (let e2 = 0; e2 < o.length; e2++) (_b = o[e2]) == null ? void 0 : _b.cache.delete(n);
      i2.controller && i2.controller.abort();
    }
    return i2.refCount;
  }
  return 0;
}
function m(e, t2, n) {
  var _a, _b, _c;
  const o = r.get(e);
  if (!o) return null == t2 ? c.getBlock(e, n) : null;
  if (null == t2 || null == o[t2]) {
    for (let e2 = 0; e2 < o.length; e2++) {
      const t3 = (_a = o[e2]) == null ? void 0 : _a.cache.get(n);
      if (t3) return t3.refCount++, t3.block;
    }
    return c.getBlock(e, n);
  }
  const l = (_b = o[t2]) == null ? void 0 : _b.cache.get(n);
  if (l) return l.refCount++, l.block;
  for (let r2 = 0; r2 < o.length; r2++) {
    if (r2 === t2 || !o[r2]) continue;
    const e2 = (_c = o[r2]) == null ? void 0 : _c.cache, l2 = e2 == null ? void 0 : e2.get(n);
    if (e2 && l2) return l2.refCount++, e2.set(n, l2), l2.block;
  }
  return null;
}
function h(e, t2, n, o, l = null) {
  var _a;
  const i2 = r.get(e);
  if (!i2) return void (null == t2 && c.putBlock(e, n, o, l));
  if (null == t2 || null == i2[t2]) return void c.putBlock(e, n, o, l);
  const u2 = { refCount: 1, block: o, isResolved: false, isRejected: false, controller: l };
  o.then(() => u2.isResolved = true).catch(() => u2.isRejected = true), (_a = i2[t2]) == null ? void 0 : _a.cache.set(n, u2);
}
function x(e, t2, n) {
  var _a;
  const o = r.get(e);
  o ? null != t2 && null != o[t2] ? (_a = o[t2]) == null ? void 0 : _a.cache.delete(n) : c.deleteBlock(e, n) : null == t2 && c.deleteBlock(e, n);
}
function d(e, t2) {
  const n = r.get(e);
  return n ? n[t2] ?? null : null;
}
function g(t2, r2, c2, i2, u2, a2, f = null) {
  const s2 = d(t2, r2);
  if (!s2) return;
  const m2 = s2.extent, { cache: h2, rasterInfo: x2 } = s2;
  if (m2 && m2.xmin === c2.xmin && m2.xmax === c2.xmax && m2.ymin === c2.ymin && m2.ymax === c2.ymax) return;
  i2 = i2 ?? 0;
  const g2 = c2.clone().normalize(), { spatialReference: y, transform: p } = x2, k = /* @__PURE__ */ new Set();
  for (let d2 = 0; d2 < g2.length; d2++) {
    const t3 = g2[d2];
    if (t3.xmax - t3.xmin <= i2 || t3.ymax - t3.ymin <= i2) continue;
    let r3 = V(t3, y, f);
    null != p && (r3 = p.inverseTransform(r3));
    const c3 = new j({ x: i2, y: i2, spatialReference: t3.spatialReference });
    if (null == u2 && !(u2 = z(c3, y, t3, f))) return;
    const { pyramidLevel: s3, pyramidResolution: m3, excessiveReading: h3 } = me(u2, x2, a2 || "closest");
    if (h3) return;
    const { storageInfo: M } = x2, { origin: R } = M, { x: C, y: B } = m3, b = Math.max(0, Math.floor((r3.xmin - R.x) / C)), v = Math.max(0, Math.floor((R.y - r3.ymax) / B)), w = Math.ceil(r3.width / C - 0.1), j2 = Math.ceil(r3.height / B - 0.1), $ = s3 > 0 ? M.pyramidBlockWidth : M.blockWidth, I = s3 > 0 ? M.pyramidBlockHeight : M.blockHeight, H = M.blockBoundary[s3];
    if (!H) continue;
    const E = 1, P = Math.max(H.minCol, Math.floor(b / $) - E), W = Math.max(H.minRow, Math.floor(v / I) - E), z2 = Math.min(H.maxCol, Math.floor((b + w - 1) / $) + E), F = Math.min(H.maxRow, Math.floor((v + j2 - 1) / I) + E);
    for (let e = W; e <= F; e++) for (let t4 = P; t4 <= z2; t4++) k.add(`${s3}/${e}/${t4}`);
  }
  h2.forEach((e, t3) => {
    if (!k.has(t3)) {
      const e2 = h2.get(t3);
      (null == e2 || e2.isResolved || e2.isRejected) && h2.delete(t3);
    }
  }), s2.extent = { xmin: c2.xmin, ymin: c2.ymin, xmax: c2.xmax, ymax: c2.ymax };
}

export {
  i,
  u,
  a,
  s,
  m,
  h,
  x,
  g
};
//# sourceMappingURL=chunk-C5H6RRX5.js.map
