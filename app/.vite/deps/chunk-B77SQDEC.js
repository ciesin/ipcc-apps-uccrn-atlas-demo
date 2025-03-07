import {
  n
} from "./chunk-KWOLBNIK.js";
import {
  e
} from "./chunk-JST5QDP2.js";
import {
  $
} from "./chunk-LTDNORB5.js";
import {
  r2 as r
} from "./chunk-4LTV6KQ5.js";
import {
  s
} from "./chunk-M6FNW7GP.js";
import {
  a,
  l2 as l
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/snappingCandidateElevationAlignment.js
function i(e3 = false, t2) {
  if (e3) {
    const { elevationInfo: e4, alignPointsInFeatures: s3 } = t2;
    return new c(e4, s3);
  }
  return new a2();
}
var a2 = class {
  async alignCandidates(e3, t2, s3) {
    return e3;
  }
  notifyElevationSourceChange() {
  }
};
var r2 = 1024;
var c = class {
  constructor(t2, s3) {
    this._elevationInfo = t2, this._alignPointsInFeatures = s3, this._alignmentsCache = new e(r2), this._cacheVersion = 0;
  }
  async alignCandidates(e3, t2, s3) {
    const n4 = this._elevationInfo;
    return null == n4 || "absolute-height" !== n4.mode || n4.featureExpressionInfo ? this._alignComputedElevationCandidates(e3, t2, s3) : (l2(e3, t2, n4), e3);
  }
  notifyElevationSourceChange() {
    this._alignmentsCache.clear(), this._cacheVersion++;
  }
  async _alignComputedElevationCandidates(e3, n4, o2) {
    const i4 = /* @__PURE__ */ new Map();
    for (const s3 of e3) r(i4, s3.objectId, d).push(s3);
    const [a5, r5, c4] = this._prepareQuery(i4, n4), h2 = await this._alignPointsInFeatures(a5, o2);
    s(o2);
    if (c4 !== this._cacheVersion) return this._alignComputedElevationCandidates(e3, n4, o2);
    this._applyCacheAndResponse(a5, h2, r5);
    const { drapedObjectIds: u2, failedObjectIds: l3 } = h2, p = [];
    for (const t2 of e3) {
      const { objectId: e4 } = t2;
      u2.has(e4) && "edge" === t2.type && (t2.draped = true), l3.has(e4) || p.push(t2);
    }
    return p;
  }
  _prepareQuery(e3, t2) {
    const s3 = [], n4 = [];
    for (const [o2, i4] of e3) {
      const e4 = [];
      for (const t3 of i4) this._addToQueriesOrCachedResult(o2, t3.target, e4, n4), "edge" === t3.type && (this._addToQueriesOrCachedResult(o2, t3.start, e4, n4), this._addToQueriesOrCachedResult(o2, t3.end, e4, n4));
      0 !== e4.length && s3.push({ objectId: o2, points: e4 });
    }
    return [{ spatialReference: t2.toJSON(), pointsInFeatures: s3 }, n4, this._cacheVersion];
  }
  _addToQueriesOrCachedResult(e3, t2, s3, n4) {
    const o2 = u(e3, t2), i4 = this._alignmentsCache.get(o2);
    null == i4 ? s3.push(t2) : n4.push(new h(t2, i4));
  }
  _applyCacheAndResponse(e3, { elevations: t2, drapedObjectIds: s3, failedObjectIds: n4 }, o2) {
    for (const r5 of o2) r5.apply();
    let i4 = 0;
    const a5 = this._alignmentsCache;
    for (const { objectId: r5, points: c4 } of e3.pointsInFeatures) {
      if (n4.has(r5)) {
        i4 += c4.length;
        continue;
      }
      const e4 = !s3.has(r5);
      for (const s4 of c4) {
        const n5 = u(r5, s4), o3 = t2[i4++];
        s4.z = o3, e4 && a5.put(n5, o3, 1);
      }
    }
  }
};
var h = class {
  constructor(e3, t2) {
    this.point = e3, this.z = t2;
  }
  apply() {
    this.point.z = this.z;
  }
};
function u(e3, { x: t2, y: s3, z: n4, spatialReference: o2 }) {
  return `${e3}-${t2}-${s3}-${n4 ?? 0}}-wkid:${o2 == null ? void 0 : o2.wkid}`;
}
function l2(e3, t2, s3) {
  const { offset: i4, unit: a5 } = s3;
  if (null == i4) return;
  const r5 = $(t2), c4 = i4 * (n(a5 ?? "meters") / r5);
  for (const n4 of e3) switch (n4.type) {
    case "edge":
      n4.start.z += c4, n4.end.z += c4;
      continue;
    case "vertex":
      n4.target.z += c4;
      continue;
  }
}
function d() {
  return [];
}

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/snappingCandidateElevationFilter.js
var t = class {
  filter(t2, n4) {
    return n4;
  }
  notifyElevationSourceChange() {
  }
};
var n2 = class {
  filter(t2, n4) {
    const { point: r5, distance: c4 } = t2, { z: i4 } = r5;
    if (!(null != i4)) return n4;
    if (0 === n4.length) return n4;
    const o2 = s2(c4), u2 = this._updateCandidatesTo3D(n4, r5, o2).filter(e2);
    return u2.sort(a3), u2;
  }
  _updateCandidatesTo3D(t2, n4, e3) {
    for (const r5 of t2) switch (r5.type) {
      case "edge":
        c2(r5, n4, e3);
        continue;
      case "vertex":
        o(r5, n4, e3);
        continue;
    }
    return t2;
  }
};
function e2(t2) {
  return t2.distance <= 1;
}
function r3(e3 = false) {
  return e3 ? new n2() : new t();
}
function c2(t2, n4, { x: e3, y: r5, z: c4 }) {
  const { start: o2, end: s3, target: a5 } = t2;
  t2.draped || i2(a5, n4, o2, s3);
  const u2 = (n4.x - a5.x) / e3, d2 = (n4.y - a5.y) / r5, f = (n4.z - a5.z) / c4;
  t2.distance = Math.sqrt(u2 * u2 + d2 * d2 + f * f);
}
function i2(t2, n4, e3, r5) {
  const c4 = r5.x - e3.x, i4 = r5.y - e3.y, o2 = r5.z - e3.z, s3 = c4 * c4 + i4 * i4 + o2 * o2, a5 = (n4.x - e3.x) * c4 + (n4.y - e3.y) * i4 + o2 * (n4.z - e3.z), u2 = Math.min(1, Math.max(0, a5 / s3)), d2 = e3.x + c4 * u2, f = e3.y + i4 * u2, x = e3.z + o2 * u2;
  t2.x = d2, t2.y = f, t2.z = x;
}
function o(t2, n4, { x: e3, y: r5, z: c4 }) {
  const { target: i4 } = t2, o2 = (n4.x - i4.x) / e3, s3 = (n4.y - i4.y) / r5, a5 = (n4.z - i4.z) / c4, u2 = Math.sqrt(o2 * o2 + s3 * s3 + a5 * a5);
  t2.distance = u2;
}
function s2(t2) {
  return "number" == typeof t2 ? { x: t2, y: t2, z: t2 } : t2;
}
function a3(t2, n4) {
  return t2.distance - n4.distance;
}

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/symbologySnappingCandidates.js
function n3(t2 = false, e3) {
  return t2 ? new i3(e3) : new c3();
}
var c3 = class {
  async fetch() {
    return [];
  }
  notifySymbologyChange() {
  }
};
var r4 = 1024;
var i3 = class {
  constructor(t2) {
    this._getSymbologyCandidates = t2, this._candidatesCache = new e(r4), this._cacheVersion = 0;
  }
  async fetch(e3, o2) {
    if (0 === e3.length) return [];
    const n4 = [], c4 = [], r5 = this._candidatesCache;
    for (const s3 of e3) {
      const e4 = a4(s3), o3 = r5.get(e4);
      if (o3) for (const s4 of o3) c4.push(a(s4));
      else n4.push(s3), r5.put(e4, [], 1);
    }
    if (0 === n4.length) return c4;
    const i4 = this._cacheVersion, { candidates: h2, sourceCandidateIndices: d2 } = await this._getSymbologyCandidates(n4, o2);
    s(o2);
    if (i4 !== this._cacheVersion) return this.fetch(e3, o2);
    const f = [], { length: g } = h2;
    for (let s3 = 0; s3 < g; ++s3) {
      const e4 = h2[s3], o3 = a4(n4[d2[s3]]), c5 = r5.get(o3);
      c5.push(e4), r5.put(o3, c5, c5.length), f.push(a(e4));
    }
    return c4.concat(f);
  }
  notifySymbologyChange() {
    this._candidatesCache.clear(), this._cacheVersion++;
  }
};
function a4(t2) {
  switch (t2.type) {
    case "vertex": {
      const { objectId: e3, target: s3 } = t2, n4 = `${e3}-vertex-${s3.x}-${s3.y}-${s3.z ?? 0}`;
      return l(n4).toString();
    }
    case "edge": {
      const { objectId: e3, start: s3, end: n4 } = t2, c4 = `${e3}-edge-${s3.x}-${s3.y}-${s3.z ?? 0}-to-${n4.x}-${n4.y}-${n4.z ?? 0}`;
      return l(c4).toString();
    }
    default:
      return "";
  }
}

export {
  i,
  r3 as r,
  n3 as n
};
//# sourceMappingURL=chunk-B77SQDEC.js.map
