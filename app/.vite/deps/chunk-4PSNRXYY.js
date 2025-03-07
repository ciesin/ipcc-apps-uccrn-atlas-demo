import {
  E
} from "./chunk-5LWWFSEW.js";
import {
  i
} from "./chunk-U6JFTJMZ.js";
import {
  t
} from "./chunk-AZYU3Z5M.js";
import {
  e as e2
} from "./chunk-JST5QDP2.js";
import {
  P,
  d
} from "./chunk-YSPSOPLL.js";
import {
  P2
} from "./chunk-UFBX3XSC.js";
import {
  v
} from "./chunk-F7TCEOHX.js";
import {
  g,
  m as m2
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  y
} from "./chunk-WCGYJMU3.js";
import {
  r as r2
} from "./chunk-7QTMSBS3.js";
import {
  b,
  c2 as c,
  e,
  m as m3,
  u3 as u
} from "./chunk-M6FNW7GP.js";
import {
  a,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  m
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/geometry/support/UintArray.js
function n(n3, e3 = false) {
  return n3 <= m ? e3 ? new Array(n3).fill(0) : new Array(n3) : new Uint32Array(n3);
}

// node_modules/@arcgis/core/layers/support/Tilemap.js
var l = class _l {
  constructor(t2) {
    s2(t2);
    const { location: i2, data: l2 } = t2;
    this.location = Object.freeze(a(i2));
    const r4 = this.location.width, n3 = this.location.height;
    let h = true, c2 = true;
    const m4 = Math.ceil(r4 * n3 / 32), f = n(m4);
    let w2 = 0;
    for (let e3 = 0; e3 < l2.length; e3++) {
      const t3 = e3 % 32;
      l2[e3] ? (c2 = false, f[w2] |= 1 << t3) : h = false, 31 === t3 && ++w2;
    }
    c2 ? (this._availability = "unavailable", this.byteSize = 40) : h ? (this._availability = "available", this.byteSize = 40) : (this._availability = f, this.byteSize = 40 + i(f));
  }
  getAvailability(t2, i2) {
    if ("unavailable" === this._availability || "available" === this._availability) return this._availability;
    const e3 = (t2 - this.location.top) * this.location.width + (i2 - this.location.left), a3 = e3 % 32, o = e3 >> 5, l2 = this._availability;
    return o < 0 || o > l2.length ? "unknown" : l2[o] & 1 << a3 ? "available" : "unavailable";
  }
  static fromDefinition(e3, a3) {
    const o = e3.service.request || P2, { row: r4, col: s3, width: h, height: c2 } = e3, m4 = { query: { f: "json" } };
    return a3 = a3 ? { ...m4, ...a3 } : m4, o(n2(e3), a3).then((t2) => t2.data).catch((t2) => {
      var _a;
      if (422 === ((_a = t2 == null ? void 0 : t2.details) == null ? void 0 : _a.httpStatus)) return { location: { top: r4, left: s3, width: h, height: c2 }, valid: true, data: new Array(h * c2).fill(0) };
      throw t2;
    }).then((t2) => {
      if (t2.location && (t2.location.top !== r4 || t2.location.left !== s3 || t2.location.width !== h || t2.location.height !== c2)) throw new s("tilemap:location-mismatch", "Tilemap response for different location than requested", { response: t2, definition: { top: r4, left: s3, width: h, height: c2 } });
      return _l.fromJSON(t2);
    });
  }
  static fromJSON(t2) {
    return Object.freeze(new _l(t2));
  }
};
function r3(t2) {
  return `${t2.level}/${t2.row}/${t2.col}/${t2.width}/${t2.height}`;
}
function n2(t2) {
  var _a;
  let i2;
  if ((_a = t2.service.tileServers) == null ? void 0 : _a.length) {
    const e4 = t2.service.tileServers;
    i2 = `${e4 && e4.length ? e4[t2.row % e4.length] : t2.service.url}/tilemap/${t2.level}/${t2.row}/${t2.col}/${t2.width}/${t2.height}`;
  } else i2 = `${t2.service.url}/tilemap/${t2.level}/${t2.row}/${t2.col}/${t2.width}/${t2.height}`;
  const e3 = t2.service.query;
  return e3 && (i2 = `${i2}?${e3}`), i2;
}
function s2(t2) {
  if (!(t2 == null ? void 0 : t2.location)) throw new s("tilemap:missing-location", "Location missing from tilemap response");
  if (false === t2.valid) throw new s("tilemap:invalid", "Tilemap response was marked as invalid");
  if (!t2.data) throw new s("tilemap:missing-data", "Data missing from tilemap response");
  if (!Array.isArray(t2.data)) throw new s("tilemap:data-mismatch", "Data must be an array of numbers");
  if (t2.data.length !== t2.location.width * t2.location.height) throw new s("tilemap:data-mismatch", "Number of data items does not match width/height of tilemap");
}

// node_modules/@arcgis/core/layers/support/TilemapCache.js
var j;
function w(e3, t2, i2) {
  return new s("tile-map:tile-unavailable", "Tile is not available", { level: e3, row: t2, col: i2 });
}
var T = j = class extends g {
  constructor(e3) {
    super(e3), this._pendingTilemapRequests = {}, this.request = P2, this.size = 32, this._prefetchingEnabled = true;
  }
  initialize() {
    this._tilemapCache = new e2(2 * E.MEGABYTES), this.addHandles(d(() => {
      const { layer: e3 } = this;
      return [e3 == null ? void 0 : e3.parsedUrl, e3 == null ? void 0 : e3.tileServers, e3 == null ? void 0 : e3.apiKey, e3 == null ? void 0 : e3.customParameters];
    }, () => this._initializeTilemapDefinition(), P));
  }
  get effectiveMinLOD() {
    return this.minLOD ?? this.layer.tileInfo.lods[0].level;
  }
  get effectiveMaxLOD() {
    return this.maxLOD ?? this.layer.tileInfo.lods[this.layer.tileInfo.lods.length - 1].level;
  }
  getAvailability(e3, t2, i2) {
    if (!this.layer.tileInfo.lodAt(e3) || e3 < this.effectiveMinLOD || e3 > this.effectiveMaxLOD) return "unavailable";
    const r4 = this._tilemapFromCache(e3, t2, i2, this._tmpTilemapDefinition);
    return r4 ? r4.getAvailability(t2, i2) : "unknown";
  }
  fetchAvailability(e3, t2, i2, r4) {
    return !this.layer.tileInfo.lodAt(e3) || e3 < this.effectiveMinLOD || e3 > this.effectiveMaxLOD ? Promise.reject(w(e3, t2, i2)) : this._fetchTilemap(e3, t2, i2, r4).catch((e4) => e4).then((r5) => {
      if (r5 instanceof l) {
        const s3 = r5.getAvailability(t2, i2);
        if ("unavailable" === s3) throw w(e3, t2, i2);
        return s3;
      }
      if (b(r5)) throw r5;
      return "unknown";
    });
  }
  fetchAvailabilityUpsample(e3, t2, i2, r4, s3) {
    r4.level = e3, r4.row = t2, r4.col = i2;
    const l2 = this.layer.tileInfo;
    l2.updateTileInfo(r4);
    const o = this.fetchAvailability(e3, t2, i2, s3).catch((e4) => {
      if (b(e4)) throw e4;
      if (l2.upsampleTile(r4)) return this.fetchAvailabilityUpsample(r4.level, r4.row, r4.col, r4, s3);
      throw e4;
    });
    return this._fetchAvailabilityUpsamplePrefetch(r4.id, e3, t2, i2, s3, o), o;
  }
  async _fetchAvailabilityUpsamplePrefetch(e3, t2, i2, r4, s3, o) {
    if (!this._prefetchingEnabled || null == e3) return;
    const a3 = `prefetch-${e3}`;
    if (this.hasHandles(a3)) return;
    const n3 = new AbortController();
    o.then(() => n3.abort(), () => n3.abort());
    let h = false;
    const p = e(() => {
      h || (h = true, n3.abort());
    });
    if (this.addHandles(p, a3), await y(10, n3.signal).catch(() => {
    }), h || (h = true, this.removeHandles(a3)), c(n3)) return;
    const m4 = new t(e3, t2, i2, r4), f = { ...s3, signal: n3.signal }, v2 = this.layer.tileInfo;
    for (let l2 = 0; j._prefetches.length < j._maxPrefetch && v2.upsampleTile(m4); ++l2) {
      const e4 = this.fetchAvailability(m4.level, m4.row, m4.col, f);
      j._prefetches.push(e4);
      const t3 = () => {
        j._prefetches.removeUnordered(e4);
      };
      e4.then(t3, t3);
    }
  }
  _fetchTilemap(e3, t2, i2, r4) {
    if (!this.layer.tileInfo.lodAt(e3) || e3 < this.effectiveMinLOD || e3 > this.effectiveMaxLOD) return Promise.reject(new s("tilemap-cache:level-unavailable", `Level ${e3} is unavailable in the service`));
    const l2 = this._tmpTilemapDefinition, o = this._tilemapFromCache(e3, t2, i2, l2);
    if (o) return Promise.resolve(o);
    const a3 = r4 == null ? void 0 : r4.signal;
    return r4 = { ...r4, signal: null }, new Promise((e4, t3) => {
      m3(a3, () => t3(u()));
      const i3 = r3(l2);
      let s3 = this._pendingTilemapRequests[i3];
      if (!s3) {
        s3 = l.fromDefinition(l2, r4).then((e6) => (this._tilemapCache.put(i3, e6, e6.byteSize), e6));
        const e5 = () => {
          delete this._pendingTilemapRequests[i3];
        };
        this._pendingTilemapRequests[i3] = s3, s3.then(e5, e5);
      }
      s3.then(e4, t3);
    });
  }
  _initializeTilemapDefinition() {
    var _a;
    if (!this.layer.parsedUrl) return;
    const { parsedUrl: e3, apiKey: t2, customParameters: i2 } = this.layer;
    this._tilemapCache.clear(), this._tmpTilemapDefinition = { service: { url: e3.path, query: v({ ...e3.query, ...i2, token: t2 ?? ((_a = e3.query) == null ? void 0 : _a.token) }), tileServers: this.layer.tileServers, request: this.request }, width: this.size, height: this.size, level: 0, row: 0, col: 0 };
  }
  _tilemapFromCache(e3, t2, i2, r4) {
    r4.level = e3, r4.row = t2 - t2 % this.size, r4.col = i2 - i2 % this.size;
    const s3 = r3(r4);
    return this._tilemapCache.get(s3);
  }
  get test() {
  }
};
T._maxPrefetch = 4, T._prefetches = new r2({ initialSize: j._maxPrefetch }), r([m2({ constructOnly: true })], T.prototype, "layer", void 0), r([m2({ constructOnly: true })], T.prototype, "minLOD", void 0), r([m2({ constructOnly: true })], T.prototype, "maxLOD", void 0), r([m2({ constructOnly: true })], T.prototype, "request", void 0), r([m2({ constructOnly: true })], T.prototype, "size", void 0), T = j = r([a2("esri.layers.support.TilemapCache")], T);

export {
  T
};
//# sourceMappingURL=chunk-4PSNRXYY.js.map
