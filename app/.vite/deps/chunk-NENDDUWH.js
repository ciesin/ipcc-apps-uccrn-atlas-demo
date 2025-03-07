import {
  M,
  S,
  j,
  j2,
  n
} from "./chunk-YUVX6H42.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  d,
  s2 as s
} from "./chunk-LTDNORB5.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  r as r2
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/geometry/support/contains.js
var n2 = [0, 0];
function t(n3, t2) {
  return null != t2 && o(n3, t2.x, t2.y, t2.z);
}
function r3(n3, t2) {
  var _a;
  if (!((_a = t2.points) == null ? void 0 : _a.length)) return false;
  for (const r4 of t2.points) if (!i(n3, r4)) return false;
  return true;
}
function u(n3, t2) {
  const { xmin: r4, ymin: u4, zmin: i3, xmax: e2, ymax: f4, zmax: c3 } = t2;
  return n3.hasZ && t2.hasZ ? o(n3, r4, u4, i3) && o(n3, r4, f4, i3) && o(n3, e2, f4, i3) && o(n3, e2, u4, i3) && o(n3, r4, u4, c3) && o(n3, r4, f4, c3) && o(n3, e2, f4, c3) && o(n3, e2, u4, c3) : o(n3, r4, u4) && o(n3, r4, f4) && o(n3, e2, f4) && o(n3, e2, u4);
}
function i(n3, t2) {
  return o(n3, t2[0], t2[1]);
}
function e(n3, t2) {
  return o(n3, t2[0], t2[1], t2[2]);
}
function o(n3, t2, r4, u4) {
  return t2 >= n3.xmin && t2 <= n3.xmax && r4 >= n3.ymin && r4 <= n3.ymax && (null == u4 || !n3.hasZ || u4 >= n3.zmin && u4 <= n3.zmax);
}
function f(t2, r4) {
  return n2[1] = r4.y, n2[0] = r4.x, c(t2, n2);
}
function c(n3, t2) {
  return x(n3.rings, t2);
}
function x(n3, t2) {
  if (!n3) return false;
  if (m2(n3)) return s2(false, n3, t2);
  let r4 = false;
  for (let u4 = 0, i3 = n3.length; u4 < i3; u4++) r4 = s2(r4, n3[u4], t2);
  return r4;
}
function m2(n3) {
  return !Array.isArray(n3[0][0]);
}
function s2(n3, t2, r4) {
  const [u4, i3] = r4;
  let e2 = n3, o3 = 0;
  for (let f4 = 0, c3 = t2.length; f4 < c3; f4++) {
    o3++, o3 === c3 && (o3 = 0);
    const [n4, r5] = t2[f4], [x3, m4] = t2[o3];
    (r5 < i3 && m4 >= i3 || m4 < i3 && r5 >= i3) && n4 + (i3 - r5) / (m4 - r5) * (x3 - n4) < u4 && (e2 = !e2);
  }
  return e2;
}

// node_modules/@arcgis/core/geometry/support/intersectsBase.js
function i2(t2, e2) {
  return t(t2, e2);
}
function o2(n3, t2) {
  const e2 = n3.hasZ && t2.hasZ;
  let r4, i3, o3;
  if (n3.xmin <= t2.xmin) {
    if (r4 = t2.xmin, n3.xmax < r4) return false;
  } else if (r4 = n3.xmin, t2.xmax < r4) return false;
  if (n3.ymin <= t2.ymin) {
    if (i3 = t2.ymin, n3.ymax < i3) return false;
  } else if (i3 = n3.ymin, t2.ymax < i3) return false;
  if (e2 && t2.hasZ) {
    if (n3.zmin <= t2.zmin) {
      if (o3 = t2.zmin, n3.zmax < o3) return false;
    } else if (o3 = n3.zmin, t2.zmax < o3) return false;
  }
  return true;
}
function f2(n3, t2) {
  const { points: i3, hasZ: o3 } = t2, f4 = o3 ? e : i;
  for (const e2 of i3) if (f4(n3, e2)) return true;
  return false;
}
var s3 = [0, 0];
var c2 = [0, 0];
var u2 = [0, 0];
var m3 = [0, 0];
var l = [s3, c2, u2, m3];
var a2 = [[u2, s3], [s3, c2], [c2, m3], [m3, u2]];
function x2(n3, t2) {
  return y(n3, t2.rings);
}
function y(n3, r4) {
  s3[0] = n3.xmin, s3[1] = n3.ymax, c2[0] = n3.xmax, c2[1] = n3.ymax, u2[0] = n3.xmin, u2[1] = n3.ymin, m3[0] = n3.xmax, m3[1] = n3.ymin;
  for (const e2 of l) if (x(r4, e2)) return true;
  for (const t2 of r4) {
    if (!t2.length) continue;
    let r5 = t2[0];
    if (i(n3, r5)) return true;
    for (let i3 = 1; i3 < t2.length; i3++) {
      const o3 = t2[i3];
      if (i(n3, o3) || z(r5, o3, a2)) return true;
      r5 = o3;
    }
  }
  return false;
}
function h(n3, t2) {
  s3[0] = n3.xmin, s3[1] = n3.ymax, c2[0] = n3.xmax, c2[1] = n3.ymax, u2[0] = n3.xmin, u2[1] = n3.ymin, m3[0] = n3.xmax, m3[1] = n3.ymin;
  const r4 = t2.paths;
  for (const i3 of r4) {
    if (!r4.length) continue;
    let t3 = i3[0];
    if (i(n3, t3)) return true;
    for (let r5 = 1; r5 < i3.length; r5++) {
      const o3 = i3[r5];
      if (i(n3, o3) || z(t3, o3, a2)) return true;
      t3 = o3;
    }
  }
  return false;
}
var g2 = [0, 0];
function p(n3) {
  for (let t2 = 0; t2 < n3.length; t2++) {
    const e2 = n3[t2];
    for (let i3 = 0; i3 < e2.length - 1; i3++) {
      const r5 = e2[i3], o3 = e2[i3 + 1];
      for (let e3 = t2 + 1; e3 < n3.length; e3++) for (let t3 = 0; t3 < n3[e3].length - 1; t3++) {
        const i4 = n3[e3][t3], f4 = n3[e3][t3 + 1];
        if (G(r5, o3, i4, f4, g2) && !(g2[0] === r5[0] && g2[1] === r5[1] || g2[0] === i4[0] && g2[1] === i4[1] || g2[0] === o3[0] && g2[1] === o3[1] || g2[0] === f4[0] && g2[1] === f4[1])) return true;
      }
    }
    const r4 = e2.length;
    if (!(r4 <= 4)) for (let n4 = 0; n4 < r4 - 3; n4++) {
      let t3 = r4 - 1;
      0 === n4 && (t3 = r4 - 2);
      const i3 = e2[n4], o3 = e2[n4 + 1];
      for (let r5 = n4 + 2; r5 < t3; r5++) {
        const n5 = e2[r5], t4 = e2[r5 + 1];
        if (G(i3, o3, n5, t4, g2) && !(g2[0] === i3[0] && g2[1] === i3[1] || g2[0] === n5[0] && g2[1] === n5[1] || g2[0] === o3[0] && g2[1] === o3[1] || g2[0] === t4[0] && g2[1] === t4[1])) return true;
      }
    }
  }
  return false;
}
function z(n3, t2, e2) {
  for (let r4 = 0; r4 < e2.length; r4++) if (G(n3, t2, e2[r4][0], e2[r4][1])) return true;
  return false;
}
function G(n3, t2, e2, r4, i3) {
  const [o3, f4] = n3, [s4, c3] = t2, [u4, m4] = e2, [l2, a3] = r4, x3 = l2 - u4, y2 = o3 - u4, h2 = s4 - o3, g3 = a3 - m4, p2 = f4 - m4, z3 = c3 - f4, G2 = g3 * h2 - x3 * z3;
  if (0 === G2) return false;
  const P2 = (x3 * p2 - g3 * y2) / G2, Z = (h2 * p2 - z3 * y2) / G2;
  return P2 >= 0 && P2 <= 1 && Z >= 0 && Z <= 1 && (i3 && (i3[0] = o3 + P2 * (s4 - o3), i3[1] = f4 + P2 * (c3 - f4)), true);
}
function P(n3) {
  switch (n3) {
    case "esriGeometryEnvelope":
    case "extent":
      return o2;
    case "esriGeometryMultipoint":
    case "multipoint":
      return f2;
    case "esriGeometryPoint":
    case "point":
      return i2;
    case "esriGeometryMultiPatch":
    case "multipatch":
    case "esriGeometryPolygon":
    case "polygon":
      return x2;
    case "esriGeometryPolyline":
    case "polyline":
      return h;
  }
}

// node_modules/@arcgis/core/geometry/Extent.js
var u3;
function f3(t2) {
  return t2 && ("esri.geometry.SpatialReference" === t2.declaredClass || null != t2.wkid);
}
function d2(t2, i3, e2) {
  return null == i3 ? e2 : null == e2 ? i3 : t2(i3, e2);
}
var z2 = u3 = class extends n {
  constructor(...t2) {
    super(...t2), this.type = "extent", this.xmin = 0, this.ymin = 0, this.mmin = void 0, this.zmin = void 0, this.xmax = 0, this.ymax = 0, this.mmax = void 0, this.zmax = void 0;
  }
  normalizeCtorArgs(t2, i3, e2, s4, n3) {
    return f3(t2) ? { spatialReference: t2, xmin: 0, ymin: 0, xmax: 0, ymax: 0 } : "object" == typeof t2 ? (t2.spatialReference = null == t2.spatialReference ? g.WGS84 : t2.spatialReference, t2) : { xmin: t2, ymin: i3, xmax: e2, ymax: s4, spatialReference: n3 ?? g.WGS84 };
  }
  static fromPoint(t2) {
    return new u3({ xmin: t2.x, ymin: t2.y, zmin: t2.z, xmax: t2.x, ymax: t2.y, zmax: t2.z, spatialReference: t2.spatialReference });
  }
  get cache() {
    return this.commitProperty("xmin"), this.commitProperty("ymin"), this.commitProperty("zmin"), this.commitProperty("mmin"), this.commitProperty("xmax"), this.commitProperty("ymax"), this.commitProperty("zmax"), this.commitProperty("mmax"), this.commitProperty("spatialReference"), {};
  }
  get center() {
    const t2 = new j2({ x: 0.5 * (this.xmin + this.xmax), y: 0.5 * (this.ymin + this.ymax), spatialReference: this.spatialReference });
    return this.hasZ && (t2.z = 0.5 * (this.zmin + this.zmax)), this.hasM && (t2.m = 0.5 * (this.mmin + this.mmax)), t2;
  }
  get extent() {
    return this.clone();
  }
  get hasM() {
    return null != this.mmin && null != this.mmax;
  }
  get hasZ() {
    return null != this.zmin && null != this.zmax;
  }
  get height() {
    return Math.abs(this.ymax - this.ymin);
  }
  get width() {
    return Math.abs(this.xmax - this.xmin);
  }
  centerAt(t2) {
    const i3 = this.center;
    return null != t2.z && this.hasZ ? this.offset(t2.x - i3.x, t2.y - i3.y, t2.z - i3.z) : this.offset(t2.x - i3.x, t2.y - i3.y);
  }
  clone() {
    const t2 = new u3();
    return t2.xmin = this.xmin, t2.ymin = this.ymin, t2.xmax = this.xmax, t2.ymax = this.ymax, t2.spatialReference = this.spatialReference, null != this.zmin && (t2.zmin = this.zmin, t2.zmax = this.zmax), null != this.mmin && (t2.mmin = this.mmin, t2.mmax = this.mmax), t2;
  }
  contains(t2) {
    if (!t2) return false;
    const i3 = this.spatialReference, e2 = t2.spatialReference;
    return i3 && e2 && !i3.equals(e2) && M(i3, e2) && (t2 = i3.isWebMercator ? j(t2) : S(t2, true)), "point" === t2.type ? t(this, t2) : "extent" === t2.type && u(this, t2);
  }
  equals(t2) {
    if (this === t2) return true;
    if (null == t2) return false;
    const i3 = this.spatialReference, e2 = t2.spatialReference;
    return i3 && e2 && !i3.equals(e2) && M(i3, e2) && (t2 = i3.isWebMercator ? j(t2) : S(t2, true)), this.xmin === t2.xmin && this.ymin === t2.ymin && this.zmin === t2.zmin && this.mmin === t2.mmin && this.xmax === t2.xmax && this.ymax === t2.ymax && this.zmax === t2.zmax && this.mmax === t2.mmax;
  }
  expand(t2) {
    const i3 = 0.5 * (1 - t2), e2 = this.width * i3, s4 = this.height * i3;
    if (this.xmin += e2, this.ymin += s4, this.xmax -= e2, this.ymax -= s4, this.hasZ) {
      const t3 = (this.zmax - this.zmin) * i3;
      this.zmin += t3, this.zmax -= t3;
    }
    if (this.hasM) {
      const t3 = (this.mmax - this.mmin) * i3;
      this.mmin += t3, this.mmax -= t3;
    }
    return this;
  }
  intersects(t2) {
    if (null == t2) return false;
    "mesh" === t2.type && (t2 = t2.extent);
    const i3 = this.spatialReference, e2 = t2.spatialReference;
    i3 && e2 && !s(i3, e2) && M(i3, e2) && (t2 = i3.isWebMercator ? j(t2) : S(t2, true));
    return P(t2.type)(this, t2);
  }
  normalize() {
    const t2 = this._normalize(false, true);
    return Array.isArray(t2) ? t2 : [t2];
  }
  offset(t2, i3, e2) {
    return this.xmin += t2, this.ymin += i3, this.xmax += t2, this.ymax += i3, null != e2 && (this.zmin += e2, this.zmax += e2), this;
  }
  shiftCentralMeridian() {
    return this._normalize(true);
  }
  union(t2) {
    return this === t2 || (this.xmin = Math.min(this.xmin, t2.xmin), this.ymin = Math.min(this.ymin, t2.ymin), this.xmax = Math.max(this.xmax, t2.xmax), this.ymax = Math.max(this.ymax, t2.ymax), (this.hasZ || t2.hasZ) && (this.zmin = d2(Math.min, this.zmin, t2.zmin), this.zmax = d2(Math.max, this.zmax, t2.zmax)), (this.hasM || t2.hasM) && (this.mmin = d2(Math.min, this.mmin, t2.mmin), this.mmax = d2(Math.max, this.mmax, t2.mmax))), this;
  }
  intersection(t2) {
    return this === t2 ? this : null != t2 && this.intersects(t2) ? (this.xmin = Math.max(this.xmin, t2.xmin), this.ymin = Math.max(this.ymin, t2.ymin), this.xmax = Math.min(this.xmax, t2.xmax), this.ymax = Math.min(this.ymax, t2.ymax), (this.hasZ || t2.hasZ) && (this.zmin = d2(Math.max, this.zmin, t2.zmin), this.zmax = d2(Math.min, this.zmax, t2.zmax)), (this.hasM || t2.hasM) && (this.mmin = d2(Math.max, this.mmin, t2.mmin), this.mmax = d2(Math.min, this.mmax, t2.mmax)), this) : null;
  }
  toJSON(t2) {
    return this.write({}, t2);
  }
  _shiftCM(t2 = d(this.spatialReference)) {
    if (!t2 || !this.spatialReference) return this;
    const e2 = this.spatialReference, s4 = this._getCM(t2);
    if (s4) {
      const n3 = e2.isWebMercator ? S(s4) : s4;
      this.xmin -= s4.x, this.xmax -= s4.x, e2.isWebMercator || (n3.x = M2(n3.x, t2).x), this.spatialReference = new g(r2((e2.isWGS84 ? t2.altTemplate : null) ?? t2.wkTemplate, { Central_Meridian: n3.x }));
    }
    return this;
  }
  _getCM(t2) {
    let i3 = null;
    const [e2, s4] = t2.valid, n3 = this.xmin, m4 = this.xmax;
    return n3 >= e2 && n3 <= s4 && (m4 >= e2 && m4 <= s4) || (i3 = this.center), i3;
  }
  _normalize(t2, i3, e2) {
    const s4 = this.spatialReference;
    if (!s4) return this;
    const n3 = e2 ?? d(s4);
    if (null == n3) return this;
    const m4 = this._getParts(n3).map((t3) => t3.extent);
    if (m4.length < 2) return m4[0] || this;
    if (m4.length > 2) return t2 ? this._shiftCM(n3) : this.set({ xmin: n3.valid[0], xmax: n3.valid[1] });
    if (t2) return this._shiftCM(n3);
    if (i3) return m4;
    let r4 = true, a3 = true;
    return m4.forEach((t3) => {
      t3.hasZ || (r4 = false), t3.hasM || (a3 = false);
    }), { rings: m4.map((t3) => {
      const i4 = [[t3.xmin, t3.ymin], [t3.xmin, t3.ymax], [t3.xmax, t3.ymax], [t3.xmax, t3.ymin], [t3.xmin, t3.ymin]];
      if (r4) {
        const e3 = (t3.zmax - t3.zmin) / 2;
        for (let t4 = 0; t4 < i4.length; t4++) i4[t4].push(e3);
      }
      if (a3) {
        const e3 = (t3.mmax - t3.mmin) / 2;
        for (let t4 = 0; t4 < i4.length; t4++) i4[t4].push(e3);
      }
      return i4;
    }), hasZ: r4, hasM: a3, spatialReference: s4 };
  }
  _getParts(t2) {
    let i3 = this.cache._parts;
    if (!i3) {
      i3 = [];
      const { ymin: e3, ymax: s5, spatialReference: n3 } = this, m4 = this.width, r4 = this.xmin, a3 = this.xmax;
      let h2;
      t2 = t2 || d(n3);
      const [o3, x3] = t2.valid;
      h2 = M2(this.xmin, t2);
      const p2 = h2.x, c3 = h2.frameId;
      h2 = M2(this.xmax, t2);
      const y2 = h2.x, f4 = h2.frameId, d3 = p2 === y2 && m4 > 0;
      if (m4 > 2 * x3) {
        const t3 = new u3(r4 < a3 ? p2 : y2, e3, x3, s5, n3), m5 = new u3(o3, e3, r4 < a3 ? y2 : p2, s5, n3), h3 = new u3(0, e3, x3, s5, n3), l2 = new u3(o3, e3, 0, s5, n3), d4 = [], z3 = [];
        t3.contains(h3) && d4.push(c3), t3.contains(l2) && z3.push(c3), m5.contains(h3) && d4.push(f4), m5.contains(l2) && z3.push(f4);
        for (let i4 = c3 + 1; i4 < f4; i4++) d4.push(i4), z3.push(i4);
        i3.push({ extent: t3, frameIds: [c3] }, { extent: m5, frameIds: [f4] }, { extent: h3, frameIds: d4 }, { extent: l2, frameIds: z3 });
      } else p2 > y2 || d3 ? i3.push({ extent: new u3(p2, e3, x3, s5, n3), frameIds: [c3] }, { extent: new u3(o3, e3, y2, s5, n3), frameIds: [f4] }) : i3.push({ extent: new u3(p2, e3, y2, s5, n3), frameIds: [c3] });
      this.cache._parts = i3;
    }
    const e2 = this.hasZ, s4 = this.hasM;
    if (e2 || s4) {
      const t3 = {};
      e2 && (t3.zmin = this.zmin, t3.zmax = this.zmax), s4 && (t3.mmin = this.mmin, t3.mmax = this.mmax);
      for (let e3 = 0; e3 < i3.length; e3++) i3[e3].extent.set(t3);
    }
    return i3;
  }
};
function M2(t2, i3) {
  const [e2, s4] = i3.valid, n3 = 2 * s4;
  let m4, r4 = 0;
  return t2 > s4 ? (m4 = Math.ceil(Math.abs(t2 - s4) / n3), t2 -= m4 * n3, r4 = m4) : t2 < e2 && (m4 = Math.ceil(Math.abs(t2 - e2) / n3), t2 += m4 * n3, r4 = -m4), { x: t2, frameId: r4 };
}
r([m({ readOnly: true })], z2.prototype, "cache", null), r([m({ readOnly: true })], z2.prototype, "center", null), r([m({ readOnly: true })], z2.prototype, "extent", null), r([m({ readOnly: true, json: { write: { enabled: false, overridePolicy: null } } })], z2.prototype, "hasM", null), r([m({ readOnly: true, json: { write: { enabled: false, overridePolicy: null } } })], z2.prototype, "hasZ", null), r([m({ readOnly: true })], z2.prototype, "height", null), r([m({ readOnly: true })], z2.prototype, "width", null), r([m({ type: Number, json: { type: [Number, String], write: { enabled: true, allowNull: true } } })], z2.prototype, "xmin", void 0), r([m({ type: Number, json: { write: true } })], z2.prototype, "ymin", void 0), r([m({ type: Number, json: { origins: { "web-scene": { write: false } }, write: { overridePolicy() {
  return { enabled: this.hasM };
} } } })], z2.prototype, "mmin", void 0), r([m({ type: Number, json: { origins: { "web-scene": { write: false } }, write: { overridePolicy() {
  return { enabled: this.hasZ };
} } } })], z2.prototype, "zmin", void 0), r([m({ type: Number, json: { write: true } })], z2.prototype, "xmax", void 0), r([m({ type: Number, json: { write: true } })], z2.prototype, "ymax", void 0), r([m({ type: Number, json: { origins: { "web-scene": { write: false } }, write: { overridePolicy() {
  return { enabled: this.hasM };
} } } })], z2.prototype, "mmax", void 0), r([m({ type: Number, json: { origins: { "web-scene": { write: false } }, write: { overridePolicy() {
  return { enabled: this.hasZ };
} } } })], z2.prototype, "zmax", void 0), z2 = u3 = r([a("esri.geometry.Extent")], z2), z2.prototype.toJSON.isDefaultToJSON = true;
var w = z2;

export {
  t,
  r3 as r,
  f,
  x,
  o2 as o,
  x2,
  p,
  G,
  P,
  w
};
//# sourceMappingURL=chunk-NENDDUWH.js.map
