import {
  M as M4,
  P,
  S as S2,
  V,
  a2 as a5,
  g as g2,
  h2 as h,
  n as n6,
  o3 as o2,
  p as p2,
  u as u3,
  y as y4,
  z2 as z
} from "./chunk-VWA3EWRM.js";
import {
  b as b2
} from "./chunk-3SEDCXI3.js";
import {
  M as M3,
  n as n4,
  n3 as n5,
  p,
  s as s4,
  x as x2
} from "./chunk-KIKC4LVZ.js";
import {
  d as d4
} from "./chunk-LTF4JXOW.js";
import {
  $,
  ee,
  ft,
  i3 as i2,
  m as m5,
  te
} from "./chunk-UQQJEYZO.js";
import {
  F,
  e as e6,
  i,
  n as n3,
  r as r3
} from "./chunk-HS463BGE.js";
import {
  a as a3
} from "./chunk-LTPPCHKR.js";
import {
  dt,
  mt,
  st
} from "./chunk-F7TFMQ3A.js";
import {
  e as e3
} from "./chunk-J7454WTE.js";
import {
  e as e2
} from "./chunk-U6JFTJMZ.js";
import {
  j,
  x
} from "./chunk-6X7CIA5N.js";
import {
  y as y3
} from "./chunk-N4Z2ZQI6.js";
import {
  e as e4
} from "./chunk-K24WU5UX.js";
import {
  i as i3
} from "./chunk-KUSC533N.js";
import {
  M as M2,
  S,
  W,
  X,
  a as a4
} from "./chunk-ANT4QPJQ.js";
import {
  e as e5,
  r as r2
} from "./chunk-LH36NQSN.js";
import {
  b
} from "./chunk-K35H6D4D.js";
import {
  L
} from "./chunk-67XXGAOA.js";
import {
  Z
} from "./chunk-FFVHLGAP.js";
import {
  N,
  O,
  y as y2
} from "./chunk-HCXUWF52.js";
import {
  m as m4,
  s as s3,
  v,
  y
} from "./chunk-WZBMMIVS.js";
import {
  l,
  o
} from "./chunk-T7KGE6VP.js";
import {
  m as m3
} from "./chunk-T57WVICI.js";
import {
  a as a2
} from "./chunk-W633AKTD.js";
import {
  H,
  M,
  R,
  e,
  s as s2,
  u
} from "./chunk-G34KEQQG.js";
import {
  u as u2
} from "./chunk-JLFV7EBO.js";
import {
  n
} from "./chunk-SWBNCJYN.js";
import {
  m as m2
} from "./chunk-6P7HXSJ6.js";
import {
  d as d3
} from "./chunk-LTDNORB5.js";
import {
  d as d2
} from "./chunk-YSPSOPLL.js";
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
  d,
  n as n2,
  s
} from "./chunk-M6FNW7GP.js";
import {
  G,
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/createGraphicSymbolMeshSchemas.js
async function m6(m7, u5, h2) {
  const f = [], k = { scaleInfo: n6(m7), scaleExpression: null };
  for (const s5 of u5) switch (s5.type) {
    case "marker":
      if (s5.animationParams) {
        f.push(...u3(h2.instances.animatedMarker, s5, z, k));
        break;
      }
      f.push(...p2(h2.instances.marker, s5, z, k));
      break;
    case "fill":
      null == s5.spriteRasterizationParam ? f.push(...S2(h2.instances.fill, s5, k)) : f.push(...V(h2.instances.complexFill, s5, false, k));
      break;
    case "line":
      s5.spriteRasterizationParam ? f.push(...g2(h2.instances.texturedLine, s5, false, k)) : f.push(...y4(h2.instances.line, s5, false, k));
      break;
    case "text":
      f.push(...P(h2.instances.text, s5, z, k));
      break;
    case "gradientFill":
      f.push(...h(h2.instances.gradientFill, s5, k));
      break;
    case "gradientStroke":
      f.push(...M4(h2.instances.gradientStroke, s5, k));
  }
  return f;
}

// node_modules/@arcgis/core/views/2d/layers/features/support/GraphicsReader.js
var a6 = class _a extends M3 {
  static from(t3, e8, r5) {
    return new _a(t3, e8, r5);
  }
  constructor(t3, e8, r5) {
    super(r5), this._items = t3, this._tile = e8, this._index = -1, this._cachedGeometry = null;
    const s5 = e8.lod;
    s5.wrap && (this._wrappingInfo = { worldSizeX: s5.worldSize[0] });
  }
  get _current() {
    return this._items[this._index];
  }
  getItem() {
    return this._current;
  }
  getZOrder() {
    return this._current.zOrder;
  }
  getMeshWriters() {
    var _a2;
    return ((_a2 = this._current.symbolResource) == null ? void 0 : _a2.symbolInfo.meshWriters) ?? [];
  }
  hasField(t3) {
    return null != this._current.attributes[t3];
  }
  field(t3) {
    return this.readAttribute(t3);
  }
  get geometryType() {
    const t3 = v(this._current.geometry);
    return "esriGeometryPoint" === t3 ? "esriGeometryMultipoint" : t3;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const t3 = new _a(this._items, this._tile, this.metadata);
    return this.copyInto(t3), t3;
  }
  copyInto(t3) {
    super.copyInto(t3), t3._cachedGeometry = this._cachedGeometry, t3._index = this._index;
  }
  get fields() {
    throw new Error("Fields reading not supported to graphics.");
  }
  get hasFeatures() {
    return !!this._items.length;
  }
  get hasNext() {
    return this._index + 1 < this._items.length;
  }
  get exceededTransferLimit() {
    throw new Error("InternalError: exceededTransferLimit not implemented for graphics.");
  }
  get hasZ() {
    return false;
  }
  get hasM() {
    return false;
  }
  get usedMemory() {
    return this._current.usedMemory;
  }
  getInTransform() {
    return this._tile.transform;
  }
  getSize() {
    return this._items.length;
  }
  getAttributeHash() {
    let t3 = "";
    for (const e8 in this._current.attributes) t3 += this._current.attributes[e8];
    return t3;
  }
  getObjectId() {
    return this._items[this._index].objectId;
  }
  getDisplayId() {
    return this._current.displayId;
  }
  setDisplayId(t3) {
    throw new Error("InternalError: Setting displayId not supported for graphics.");
  }
  setIndex(t3) {
    this._index = t3;
  }
  getIndex() {
    return this._index;
  }
  next() {
    for (this._cachedGeometry = null; ++this._index < this._items.length && !this._getExists(); ) ;
    return this._index < this._items.length;
  }
  readGeometryArea() {
    throw new Error("InternalError: readGeometryArea not supported for graphics.");
  }
  _readGeometry() {
    if (!this._cachedGeometry) {
      let t3 = st(this._current.projectedGeometry, this.hasZ, this.hasM);
      if ("esriGeometryPolyline" === this.geometryType && (t3 = mt(new e3(), t3, this.hasZ, this.hasM, this.geometryType, this._tile.transform.scale[0])), this._cachedGeometry = dt(new e3(), t3, this.hasZ, this.hasM, this.geometryType, this._tile.transform), !this._cachedGeometry) return null;
      this._wrapGeometry(this._cachedGeometry);
    }
    return this._cachedGeometry;
  }
  _wrapGeometry(t3) {
    if (!this._wrappingInfo) return;
    const { worldSizeX: e8 } = this._wrappingInfo;
    if (t3.isPoint) return 1 === e8 ? (t3.coords.push(a4, 0), t3.coords.push(-1024, 0), void t3.lengths.push(3)) : 2 === e8 ? (t3.coords.push(2 * a4, 0), t3.coords.push(-2048, 0), void t3.lengths.push(3)) : void this._wrapVertex(t3.coords, 0, 2, e8);
    if ("esriGeometryMultipoint" !== this.geometryType) ;
    else {
      if (1 === e8) {
        const e9 = t3.coords.slice();
        e9[0] -= 512;
        const r5 = t3.coords.slice();
        r5[0] += 512, t3.coords.push(...e9, ...r5);
        const s5 = t3.lengths[0];
        return void t3.lengths.push(s5, s5);
      }
      this._wrapVertex(t3.coords, 0, 2, e8);
    }
  }
  _wrapVertex(t3, e8, r5, s5) {
    const i5 = e8 * r5, o3 = t3[i5];
    o3 < -a4 * (s5 - 2) ? t3[i5] = o3 + a4 * s5 : o3 > a4 * (s5 - 1) && (t3[i5] = o3 - a4 * s5);
  }
  _readX() {
    const t3 = this._readGeometry();
    return null != t3 ? t3.coords[0] : 0;
  }
  _readY() {
    const t3 = this._readGeometry();
    return null != t3 ? t3.coords[1] : 0;
  }
  _readServerCentroid() {
    switch (this.geometryType) {
      case "esriGeometryPolygon": {
        const t3 = l(this._current.projectedGeometry), r5 = new e3([], t3);
        return dt(new e3(), r5, this.hasZ, this.hasM, this.geometryType, this._tile.transform);
      }
      case "esriGeometryPolyline": {
        const e8 = this._current.projectedGeometry, r5 = o(e8.paths, this.hasZ), s5 = new e3([], r5);
        return dt(new e3(), s5, this.hasZ, this.hasM, this.geometryType, this._tile.transform);
      }
    }
    return null;
  }
  _readAttribute(t3, e8) {
    const r5 = this._current.attributes[t3];
    if (void 0 !== r5) return r5;
    const s5 = t3.toLowerCase();
    for (const i5 in this._current.attributes) if (i5.toLowerCase() === s5) return this._current.attributes[i5];
  }
  _readAttributes() {
    return this._current.attributes;
  }
};

// node_modules/@arcgis/core/geometry/support/curveUtils.js
function n7(n8) {
  var _a, _b;
  return "curveRings" in n8 && !!((_a = n8.curveRings) == null ? void 0 : _a.length) || "curvePaths" in n8 && !!((_b = n8.curvePaths) == null ? void 0 : _b.length);
}
function r4(n8) {
  return "curveRings" in n8 ? n8.curveRings : n8.curvePaths;
}
function t(n8) {
  return "b" in n8;
}
function u4(n8) {
  return "c" in n8;
}
function e7(n8) {
  return Array.isArray(n8);
}
function i4(n8) {
  return "a" in n8;
}
function c(n8) {
  return 4 === n8.a.length;
}
function a7(n8) {
  return t(n8) ? n8.b[0] : u4(n8) ? n8.c[0] : i4(n8) ? n8.a[0] : n8;
}

// node_modules/@arcgis/core/geometry/support/densifyUtils.js
var g3 = { maxSegmentLength: 1 / 0, maxSegmentsPerCurve: 12e3, minSegmentsPerCurve: 1 };
var p3 = 1e-6;
var M5 = e4();
function l2(t3, e8) {
  return b(t3, e8);
}
function P2(t3, e8) {
  const n8 = Math.atan2(t3, e8);
  return n8 < 0 ? n8 + 2 * Math.PI : n8;
}
function x3(t3, e8, n8, { maxSegmentLength: r5, maxSegmentsPerCurve: s5, minSegmentsPerCurve: a8 }, o3) {
  const u5 = r5 * r5, c2 = 1 / s5, h2 = o3(0), m7 = o3(1);
  l2(e8, h2) > p3 && t3.push(h2);
  const i5 = [1], f = [m7], g4 = 1 / a8;
  for (let p5 = a8 - 1; p5 > 0; p5--) {
    const t4 = p5 * g4;
    i5.push(t4), f.push(o3(t4));
  }
  let M6 = 0, P3 = h2;
  for (; i5.length > 0; ) {
    const e9 = i5.pop(), n9 = f.pop();
    if (l2(P3, n9) < u5 || M6 === e9 || e9 - M6 < c2) t3.push(n9), M6 = e9, P3 = n9;
    else {
      i5.push(e9), f.push(n9);
      const t4 = (M6 + e9) / 2;
      i5.push(t4), f.push(o3(t4));
    }
  }
  return l2(n8, m7) > p3 && t3.push([...n8]), t3;
}
function S3(t3, e8, n8, r5, s5) {
  const a8 = 1 - s5, o3 = a8 * a8, u5 = s5 * s5, c2 = o3 * a8, h2 = 3 * s5 * o3, m7 = 3 * u5 * a8, i5 = u5 * s5;
  return [t3[0] * c2 + e8[0] * h2 + n8[0] * m7 + r5[0] * i5, t3[1] * c2 + e8[1] * h2 + n8[1] * m7 + r5[1] * i5];
}
function v2(t3, e8, n8, r5) {
  const [s5, a8, o3] = n8.b;
  return x3(t3, e8, s5, r5, (t4) => S3(e8, a8, o3, s5, t4));
}
function C(t3, r5, s5, a8) {
  const [o3, u5] = r5, [c2, h2] = s5, [m7, i5] = a8, f = o3 * o3 + u5 * u5, g4 = c2 * c2 + h2 * h2, p5 = m7 * m7 + i5 * i5;
  r2(M5, o3, c2, m7, u5, h2, i5, 1, 1, 1);
  const l3 = e5(M5);
  if (0 === l3) return null;
  r2(M5, f, g4, p5, u5, h2, i5, 1, 1, 1);
  const P3 = e5(M5);
  r2(M5, f, g4, p5, o3, c2, m7, 1, 1, 1);
  const x4 = P3 / l3 * 0.5, S4 = e5(M5) / l3 * -0.5;
  return t3[0] = x4, t3[1] = S4, t3;
}
function b3(t3, e8, n8, r5, s5, a8, o3, u5, { maxSegmentLength: c2, maxSegmentsPerCurve: h2, minSegmentsPerCurve: m7 }) {
  const i5 = 2 * a8, f = [r5 + a8 * Math.cos(o3), s5 + a8 * Math.sin(o3)], g4 = [r5 + a8 * Math.cos(u5), s5 + a8 * Math.sin(u5)];
  l2(e8, f) > p3 && t3.push(f);
  const M6 = u5 - o3, P3 = c2 < i5 ? 2 * Math.asin(c2 / i5) : M6, x4 = Math.min(h2, Math.max(m7, Math.ceil(Math.abs(M6 / P3)))), S4 = 1 / x4;
  for (let p5 = 1; p5 < x4; p5++) {
    const e9 = p5 * S4, n9 = o3 * (1 - e9) + u5 * e9;
    t3.push([r5 + a8 * Math.cos(n9), s5 + a8 * Math.sin(n9)]);
  }
  return t3.push(g4), l2(n8, g4) > p3 && t3.push([...n8]), t3;
}
function I(t3, e8, n8, r5) {
  const [s5, a8] = n8.c, o3 = C([], e8, a8, s5);
  if (null == o3) return t3.push([...s5]), t3;
  const [u5, c2] = e8, [h2, m7] = a8, [i5, f] = s5, [g4, p5] = o3, M6 = u5 - g4, l3 = c2 - p5, x4 = Math.sqrt(M6 * M6 + l3 * l3), S4 = P2(c2 - p5, u5 - g4), v4 = P2(m7 - p5, h2 - g4);
  let I2 = P2(f - p5, i5 - g4);
  return (v4 - S4) * (I2 - v4) < 0 && (I2 += 2 * Math.sign(S4 - I2) * Math.PI), b3(t3, e8, s5, g4, p5, x4, S4, I2, r5);
}
function L2(e8, n8, r5) {
  const [s5, a8, o3, u5] = r5.a, c2 = Math.abs(e8 - n8), h2 = c2 > Math.PI, m7 = c2 < Math.PI, i5 = m2(c2, Math.PI);
  return (!i5 && (h2 && o3 || m7 && !o3) || i5 && (e8 > n8 && u5 || e8 < n8 && !u5)) && (e8 += 2 * (Math.sign(n8 - e8) || 1) * Math.PI), e8;
}
function j2(t3, e8, n8, r5) {
  const [s5, a8] = n8.a, [o3, u5] = e8, [c2, h2] = s5, [m7, i5] = a8, f = o3 - m7, g4 = u5 - i5, p5 = Math.sqrt(f * f + g4 * g4), M6 = P2(u5 - i5, o3 - m7);
  return b3(t3, e8, s5, m7, i5, p5, M6, L2(P2(h2 - i5, c2 - m7), M6, n8), r5);
}
function R2(t3, e8, n8, r5) {
  const [s5, a8, o3, u5, c2, h2, m7] = n8.a, [i5, f] = e8, [g4, p5] = s5, [M6, l3] = a8, S4 = h2 * m7, v4 = Math.cos(c2), C2 = Math.sin(c2), b5 = P2(1 / S4 * (f - l3) * v4 - 1 / S4 * (i5 - M6) * C2, 1 / h2 * (f - l3) * C2 + 1 / h2 * (i5 - M6) * v4), I2 = L2(P2(1 / S4 * (p5 - l3) * v4 - 1 / S4 * (g4 - M6) * C2, 1 / h2 * (p5 - l3) * C2 + 1 / h2 * (g4 - M6) * v4), b5, n8);
  return x3(t3, e8, s5, r5, (t4) => {
    const e9 = b5 * (1 - t4) + I2 * t4, n9 = Math.cos(e9), r6 = Math.sin(e9);
    return [h2 * n9 * v4 - S4 * r6 * C2 + M6, h2 * n9 * C2 + S4 * r6 * v4 + l3];
  });
}
function q(t3, e8, n8, r5) {
  return t(n8) ? v2(t3, e8, n8, r5) : u4(n8) ? I(t3, e8, n8, r5) : i4(n8) ? c(n8) ? j2(t3, e8, n8, r5) : R2(t3, e8, n8, r5) : e7(n8) ? (t3.push([...n8]), t3) : t3;
}
function U(t3, e8) {
  if (!n7(t3)) return t3;
  const n8 = r4(t3), r5 = [];
  for (const s5 of n8) {
    const t4 = [];
    for (let n9 = 0, r6 = 1; r6 < s5.length; n9 = r6++) {
      const a8 = a7(s5[n9]);
      0 === n9 && t4.push(a8);
      q(t4, a8, s5[r6], { maxSegmentLength: e8.maxSegmentLength ?? g3.maxSegmentLength, maxSegmentsPerCurve: e8.maxSegmentsPerCurve ?? g3.maxSegmentsPerCurve, minSegmentsPerCurve: Math.max(e8.minSegmentsPerCurve ?? g3.minSegmentsPerCurve, 1) });
    }
    r5.push(t4);
  }
  return "curvePaths" in t3 ? { paths: r5, spatialReference: t3.spatialReference } : { rings: r5, spatialReference: t3.spatialReference };
}

// node_modules/@arcgis/core/views/2d/layers/graphics/GraphicStoreItem.js
var j3 = class _j {
  static fromGraphic(t3, e8, i5, s5) {
    return new _j(t3.geometry, e8, t3.attributes, t3.visible, t3.uid, t3.version, i5, s5);
  }
  constructor(t3, i5, s5, r5, o3, n8, m7, a8) {
    this.geometry = t3, this.symbol = i5, this.attributes = s5, this.visible = r5, this.objectId = o3, this._version = n8, this.zOrder = m7, this.displayId = a8, this.symbolBounds = H(), this.prevSymbolBounds = H(), this.size = [0, 0, 0, 0], this.geometryBounds = H(), this._isDensificationDirty = false, this._densificationSegmentLength = 1 / 0;
  }
  get projectedGeometry() {
    return this._projectedGeometry;
  }
  get linearCIM() {
    var _a;
    return (_a = this.symbolResource) == null ? void 0 : _a.symbolInfo.linearCIM;
  }
  get usedMemory() {
    return 128 + e2(this.attributes) + F(this.geometry);
  }
  get hasAnimations() {
    const { linearCIM: t3 } = this;
    return !!t3 && t3.some((t4) => "animationParams" in t4 && !!t4.animationParams);
  }
  get hasCurvedGeoemtry() {
    return null != this.geometry && "mesh" !== this.geometry.type && n7(this.geometry);
  }
  update(t3, i5, s5) {
    return (this._version !== t3.version || this.zOrder !== s5 || this.symbol !== i5) && (this.prevSymbolBounds = this.symbolBounds, this.symbolBounds = H(), this.zOrder = s5, this.geometry = t3.geometry, this.attributes = t3.attributes, this.symbol = i5, this.visible = t3.visible, this._version = t3.version, this.symbolResource = null, this._projectedGeometry = null, H(this.geometryBounds), this._minDensificationSegmentLength = null, true);
  }
  updateDensificationResolution(t3) {
    if (!this.hasCurvedGeoemtry) return false;
    const e8 = Math.max(v3(t3), this._minDensificationSegmentLength ?? 0);
    return e8 !== this._densificationSegmentLength && (this._densificationSegmentLength = e8, this._isDensificationDirty = true, true);
  }
  async projectAndNormalize(t3) {
    let e8, o3 = this.geometry;
    if (o3 && o3.spatialReference && "mesh" !== o3.type && ("extent" === o3.type && (o3 = m5(o3)), e8 = n7(o3) ? U(o3, { maxSegmentLength: 1 / 0, minSegmentsPerCurve: e6() }) : o3.toJSON(), this._projectedGeometry = await b4(e8, o3.spatialReference, t3), a2(this.geometryBounds, this._projectedGeometry), this.hasCurvedGeoemtry && null != this._projectedGeometry)) {
      const t4 = M(this.geometryBounds), e9 = s2(this.geometryBounds);
      (t4 || e9) && (this._minDensificationSegmentLength = Math.max(t4, e9) / n3());
    }
  }
  async densifyCurvedGeometryForDisplay(t3) {
    if (!this.hasCurvedGeoemtry || !this._isDensificationDirty) return;
    this._isDensificationDirty = false;
    const e8 = this.geometry;
    if (!e8 || !e8.spatialReference || "mesh" === e8.type) return;
    const i5 = t3.metersPerUnit / e8.spatialReference.metersPerUnit, s5 = this._densificationSegmentLength * i5, r5 = U(e8, { maxSegmentLength: s5, minSegmentsPerCurve: i() });
    this._projectedGeometry = await b4(r5, e8.spatialReference, t3);
  }
};
async function b4(t3, e8, i5) {
  await x(t3.spatialReference, i5);
  const s5 = a3(t3);
  if (!s5) return;
  const r5 = j(s5, e8, i5);
  return r5 && m3(r5), m4(r5) ? m5(r5) : r5;
}
function v3(t3) {
  return 2 ** Math.round(Math.log2(t3)) * r3();
}

// node_modules/@arcgis/core/views/2d/layers/graphics/GraphicUpdateMessage.js
var t2 = class {
  constructor(t3, e8, d5) {
    this.added = t3, this.updated = e8, this.removed = d5;
  }
  hasAnyUpdate() {
    return !!(this.added.length || this.updated.length || this.removed.length);
  }
};

// node_modules/@arcgis/core/views/2d/layers/graphics/GraphicStore.js
var p4 = 1e-5;
function _(e8, t3) {
  return t3.zOrder - e8.zOrder;
}
var y5 = class {
  constructor(e8, t3, s5, o3, i5) {
    this._items = /* @__PURE__ */ new Map(), this._boundsDirty = false, this._outSpatialReference = e8, this._cimResourceManager = t3, this._hittestDrawHelper = new ft(t3), this._tileInfoView = s5, this._store = i5;
    const r5 = s5.getClosestInfoForScale(o3);
    this._resolution = this._tileInfoView.getTileResolution(r5.level);
  }
  destroy() {
    this._hittestDrawHelper.destroy();
  }
  items() {
    return this._items.values();
  }
  getItem(e8) {
    return this._items.get(e8);
  }
  async update(e8, t3, s5) {
    const o3 = [], i5 = [], r5 = [], n8 = /* @__PURE__ */ new Set(), m7 = [];
    let l3 = 0;
    for (const a8 of e8.items) {
      l3++;
      const e9 = a8.uid, r6 = this._items.get(e9), u5 = t3(a8);
      if (n8.add(e9), r6) {
        const e10 = r6.update(a8, u5, l3), t4 = r6.updateDensificationResolution(this._resolution);
        e10 && m7.push(this._updateItem(r6, s5)), (e10 || t4) && i5.push(r6);
        continue;
      }
      const h2 = this._store.createDisplayIdForObjectId(e9), d5 = j3.fromGraphic(a8, u5, l3, h2);
      d5.updateDensificationResolution(this._resolution), m7.push(this._updateItem(d5, s5)), this._items.set(d5.objectId, d5), o3.push(d5);
    }
    for (const [a8, u5] of this._items.entries()) n8.has(a8) || (this._store.releaseDisplayIdForObjectId(a8), this._items.delete(a8), r5.push(u5));
    return await Promise.all(m7), this._index = null, new t2(o3, i5, r5);
  }
  updateLevel(e8) {
    if (this._resolution === e8) return false;
    this._index = null, this._boundsDirty = true, this._resolution = e8;
    for (const t3 of this.items()) if (t3.hasCurvedGeoemtry) return true;
    return false;
  }
  hitTest(e8, t3, i5, n8, m7) {
    const l3 = has("esri-mobile"), c2 = l3 ? S : W, f = c2 + (l3 ? 0 : X);
    e8 = L(e8, this._tileInfoView.spatialReference);
    const p5 = n8 * window.devicePixelRatio * f, y6 = u();
    y6[0] = e8 - p5, y6[1] = t3 - p5, y6[2] = e8 + p5, y6[3] = t3 + p5;
    const b5 = n8 * window.devicePixelRatio * c2, I2 = u();
    I2[0] = e8 - b5, I2[1] = t3 - b5, I2[2] = e8 + b5, I2[3] = t3 + b5;
    const g4 = 0.5 * n8 * (f + i2), w = this._searchIndex(e8 - g4, t3 - g4, e8 + g4, t3 + g4);
    if (!w || 0 === w.length) return [];
    const x4 = [], j4 = u(), R3 = u();
    for (const s5 of w) {
      if (!s5.visible) continue;
      const { geometryBounds: e9, symbolResource: t4 } = s5;
      this._getSymbolBounds(j4, t4, e9, R3, m7), R3[3] = R3[2] = R3[1] = R3[0] = 0, R(j4, y6) && x4.push(s5);
    }
    if (0 === x4.length) return [];
    const S4 = this._hittestDrawHelper, B = [];
    for (const s5 of x4) {
      const { projectedGeometry: e9, symbolResource: t4 } = s5;
      if (!t4) continue;
      const { textInfo: o3, symbolInfo: i6 } = t4, r5 = i6.cimSymbol;
      S4.hitTest(I2, r5.symbol, e9, o3, m7, n8) && B.push(s5);
    }
    return B.sort(_), B.map((e9) => e9.objectId);
  }
  queryItems(e8) {
    return 0 === this._items.size ? [] : this._searchForItems(e8);
  }
  clear() {
    this._items.clear(), this._index = null;
  }
  async _updateItem(e8, t3) {
    await e8.projectAndNormalize(this._outSpatialReference), await t3(e8);
    const { size: s5 } = e8;
    s5[0] = s5[1] = s5[2] = s5[3] = 0, this._getSymbolBounds(e8.symbolBounds, e8.symbolResource, e8.geometryBounds, e8.size, 0);
  }
  _searchIndex(e8, s5, o3, i5) {
    return this._boundsDirty && (this._items.forEach((e9) => this._getSymbolBounds(e9.symbolBounds, e9.symbolResource, e9.geometryBounds, e9.size, 0)), this._boundsDirty = false), this._index || (this._index = i3(9, (e9) => ({ minX: e9.symbolBounds[0], minY: e9.symbolBounds[1], maxX: e9.symbolBounds[2], maxY: e9.symbolBounds[3] })), this._index.load(Array.from(this._items.values()))), this._index.search({ minX: e8, minY: s5, maxX: o3, maxY: i5 });
  }
  _searchForItems(e8) {
    const t3 = this._tileInfoView.spatialReference, o3 = e8.bounds, i5 = d3(t3);
    if (i5 && t3.isWrappable) {
      const [t4, r5] = i5.valid, n8 = Math.abs(o3[2] - r5) < p4, m7 = Math.abs(o3[0] - t4) < p4;
      if ((!n8 || !m7) && (n8 || m7)) {
        const i6 = e8.resolution;
        let m8;
        m8 = u(n8 ? [t4, o3[1], t4 + i6 * i2, o3[3]] : [r5 - i6 * i2, o3[1], r5, o3[3]]);
        const l3 = this._searchIndex(o3[0], o3[1], o3[2], o3[3]), a8 = this._searchIndex(m8[0], m8[1], m8[2], m8[3]);
        return [.../* @__PURE__ */ new Set([...l3, ...a8])];
      }
    }
    return this._searchIndex(o3[0], o3[1], o3[2], o3[3]);
  }
  _getSymbolBounds(t3, o3, r5, n8, m7) {
    if (!o3 || !o3.symbolInfo.linearCIM) return null;
    if (t3 || (t3 = u()), e(t3, r5), !n8 || 0 === n8[0] && 0 === n8[1] && 0 === n8[2] && 0 === n8[3]) {
      const { textInfo: t4, symbolInfo: s5 } = o3, i5 = s5.cimSymbol;
      n8 || (n8 = [0, 0, 0, 0]);
      const r6 = ee.getSymbolInflateSize(n8, i5.symbol, this._cimResourceManager, m7, t4);
      n8[0] = u2(r6[0]), n8[1] = u2(r6[1]), n8[2] = u2(r6[2]), n8[3] = u2(r6[3]);
    }
    const a8 = this._resolution, u5 = ee.safeSize(n8);
    return t3[0] -= u5 * a8, t3[1] -= u5 * a8, t3[2] += u5 * a8, t3[3] += u5 * a8, t3;
  }
};

// node_modules/@arcgis/core/views/2d/layers/graphics/GraphicsView2D.js
var F2 = class _F {
  static getOrCreate(e8, t3, s5) {
    let r5 = t3.get(e8.id);
    return r5 || (r5 = new _F(e8, s5), t3.set(e8.id, r5)), r5;
  }
  static fromItems(e8, t3, s5) {
    const r5 = new _F(e8, s5);
    for (const i5 of t3) r5.append(i5);
    return r5;
  }
  constructor(e8, t3) {
    this.tile = e8, this.metadata = t3, this.addedOrModified = [], this.removed = [], this.objectIdMap = null;
  }
  get reader() {
    return this._reader || (this._reader = a6.from(this.addedOrModified, this.tile, this.metadata)), this._reader;
  }
  append(e8) {
    this.addedOrModified.push(e8), e8.hasAnimations && (this.objectIdMap = this.objectIdMap || {}, this.objectIdMap[e8.displayId] = e8.objectId);
  }
};
var O2 = class extends n.IdentifiableMixin(g) {
  constructor(e8) {
    super(e8), this._attached = false, this._tiles = /* @__PURE__ */ new Map(), this._controller = new AbortController(), this._hashToSymbolInfo = /* @__PURE__ */ new Map(), this._lastCleanup = performance.now(), this._cleanupRequired = true, this.lastUpdateId = -1, this.renderer = null, this._updateTracking = new d4({ debugName: "GraphicsView2D" }), this.updateRequested = false, this.defaultPointSymbolEnabled = true, this._commandQueue = new o2({ process: (e9) => {
      if ("update" === e9.type) return this._update();
      throw new Error("InternalError: Unsupported command");
    } }), this.graphicUpdateHandler = this.graphicUpdateHandler.bind(this);
  }
  destroy() {
    this.container.destroy(), this.view = null, this.renderer = null, this._set("graphics", null), this._controller.abort(), this._graphicStore.clear(), this._graphicStore.destroy(), this._attributeStore = null, this._hashToSymbolInfo.clear(), this._updateTracking.destroy(), this._commandQueue.destroy();
  }
  _initAttributeStore() {
    this._storage = new p({ spatialReference: this.view.spatialReference, fields: new Z() }), this._attributeStore = new x2({ isLocal: true, update: (e9) => {
      has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateStart`, { message: e9 }), this.container.attributeView.requestUpdate(e9), this.container.requestRender(), has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateEnd`, { message: e9 });
    } });
    const e8 = a5(null, []);
    this._attributeStore.update(e8, this._storage, null), this.container.checkHighlight = () => this._attributeStore.hasHighlight;
  }
  initialize() {
    this._initAttributeStore(), this._metadata = n5.createGraphics(this.view.spatialReference), this._resourceProxy = new s4({ fetch: (e9) => Promise.all(e9.map((e10) => this.view.stage.textureManager.rasterizeItem(e10))), fetchDictionary: (e9) => {
      throw new Error("InternalError: Graphics do not support Dictionary requests");
    } }), this.addHandles([d2(() => this._effectiveRenderer, () => this._pushUpdate()), this.view.graphicsTileStore.on("update", this._onTileUpdate.bind(this)), this.container.on("attach", () => {
      var _a;
      this.addHandles([this.graphics.on("change", () => this._pushUpdate())]), (_a = this._graphicStore) == null ? void 0 : _a.destroy(), this._graphicStore = new y5(this.view.spatialReference, this._cimResourceManager, this.view.featuresTilingScheme, this.view.state.scale, this._attributeStore), this._attached = true, this.requestUpdate(), this._pushUpdate();
    })]), this._updateTracking.addUpdateTracking("CommandQueue", this._commandQueue.updateTracking);
    const e8 = this.view.graphicsTileStore.tiles;
    this._onTileUpdate({ added: e8, removed: [] });
  }
  get _effectiveRenderer() {
    return "function" == typeof this.renderer ? this.renderer() : this.renderer;
  }
  get _cimResourceManager() {
    return this.view.stage.textureManager.resourceManager;
  }
  get updating() {
    const e8 = !this._attached || this._updateTracking.updating;
    return has("esri-2d-log-updating") && console.log(`Updating GraphicsView2D: ${e8}
  -> attaching ${!this._attached}
  -> updateTracking ${this._updateTracking.updating}`), e8;
  }
  hitTest(e8) {
    if (!this.view || this.view.suspended) return [];
    const { resolution: t3, rotation: r5 } = this.view.state, i5 = this._graphicStore.hitTest(e8.x, e8.y, 2, t3, r5), o3 = new Set(i5), a8 = this.graphics.items.reduce((e9, t4) => (o3.has(t4.uid) && e9.set(t4.uid, t4), e9), /* @__PURE__ */ new Map());
    return i5.map((e9) => a8.get(e9)).filter(G);
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.requestUpdateCallback()), this.notifyChange("updating");
  }
  processUpdate(e8) {
    this.updateRequested && (this.updateRequested = false, this.update(e8));
  }
  viewChange() {
    this.requestUpdate();
  }
  setHighlight(e8) {
    var _a;
    const t3 = [];
    for (const { objectId: s5, highlightFlags: r5 } of e8) {
      const e9 = (_a = this._graphicStore.getItem(s5)) == null ? void 0 : _a.displayId;
      t3.push({ objectId: s5, highlightFlags: r5, displayId: e9 });
    }
    this._attributeStore.setHighlight(t3, e8), this._pushUpdate();
  }
  graphicUpdateHandler(e8) {
    this._pushUpdate();
  }
  update(e8) {
    this.updateRequested = false, this._attached && this._graphicStore.updateLevel(e8.state.resolution) && this.pushUpdate();
  }
  pushUpdate() {
    this._pushUpdate();
  }
  _pushUpdate() {
    d(this._commandQueue.push({ type: "update" }));
  }
  async _update() {
    try {
      has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView._update start`);
      const e8 = await this._graphicStore.update(this.graphics, (e9) => this._getSymbolForGraphic(e9), (e9) => this._ensureSymbolResource(e9));
      for (const s5 of e8.updated) this.container.restartAnimation(s5.objectId);
      if (!e8.hasAnyUpdate()) return void this._attributeStore.sendUpdates();
      e8.removed.length && (this._cleanupRequired = true), has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView updateMessage`, e8);
      const t3 = this._createTileMessages(e8);
      await this._densifyItemsForDisplay(t3), await this._fetchResources(t3), this._write(t3);
      for (const s5 of e8.added) this._setFilterState(s5);
      for (const s5 of e8.updated) this._setFilterState(s5);
      has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate`, e8), this._attributeStore.sendUpdates(), has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate.await`, e8);
    } catch (e8) {
    }
    this._cleanupSharedResources();
  }
  _createTileMessages(e8) {
    const t3 = /* @__PURE__ */ new Map();
    for (const s5 of e8.added) {
      const e9 = this.view.graphicsTileStore.getIntersectingTiles(s5.symbolBounds);
      for (const r5 of e9) {
        F2.getOrCreate(r5, t3, this._metadata).append(s5);
      }
    }
    for (const s5 of e8.updated) {
      const e9 = this.view.graphicsTileStore.getIntersectingTiles(s5.prevSymbolBounds), r5 = this.view.graphicsTileStore.getIntersectingTiles(s5.symbolBounds);
      for (const i5 of e9) {
        F2.getOrCreate(i5, t3, this._metadata).removed.push(s5.displayId);
      }
      for (const i5 of r5) {
        F2.getOrCreate(i5, t3, this._metadata).append(s5);
      }
    }
    for (const s5 of e8.removed) {
      const e9 = this.view.graphicsTileStore.getIntersectingTiles(s5.symbolBounds);
      for (const r5 of e9) {
        F2.getOrCreate(r5, t3, this._metadata).removed.push(s5.displayId);
      }
    }
    return Array.from(t3.values());
  }
  async _densifyItemsForDisplay(e8) {
    const t3 = /* @__PURE__ */ new Map();
    for (const s5 of e8) for (const e9 of s5.addedOrModified) t3.has(e9) || t3.set(e9, e9.densifyCurvedGeometryForDisplay(this.view.spatialReference));
    await Promise.all(t3.values());
  }
  async _fetchResources(e8) {
    const t3 = { timeZone: null, timeExtent: null };
    for (const { tile: s5, reader: r5 } of e8) {
      has("esri-2d-update-debug") && console.debug(`Id[${this.layerId}] Tile[${s5.id}] GraphicsView fetchResources`, e8);
      const i5 = r5.getCursor();
      for (; i5.next(); ) for (const e9 of i5.getMeshWriters()) e9.enqueueRequest(this._resourceProxy, i5, s5.createArcadeEvaluationOptions(t3));
    }
    await this._resourceProxy.fetchEnqueuedResources();
  }
  _write(e8) {
    for (const t3 of e8) {
      has("esri-2d-update-debug") && console.debug(`Id[${this.layerId}] Tile[${t3.tile.id}] GraphicsView write`, t3);
      const e9 = this._writeMeshes(t3);
      let s5 = this._tiles.get(t3.tile.key);
      s5 || (s5 = this._createFeatureTile(t3.tile.key)), has("esri-2d-update-debug") && console.debug(`Id[${this.layerId}] Tile[${t3.tile.id}] GraphicsView onTileData`, t3), this.container.onTileData(s5, { type: "update", modify: e9, remove: t3.removed, end: false, attributeEpoch: this._attributeStore.epoch, objectIdMap: t3.objectIdMap }), this.container.requestRender();
    }
  }
  _writeMeshes(e8) {
    const t3 = { timeZone: null, timeExtent: null }, s5 = new n4(e8.tile.id), r5 = e8.reader.getCursor();
    for (; r5.next(); ) {
      s5.entityStart(r5.getDisplayId(), r5.getZOrder());
      for (const i5 of r5.getMeshWriters()) i5.write(s5, this._resourceProxy, r5, e8.tile.createArcadeEvaluationOptions(t3), e8.tile.level);
      s5.entityEnd();
    }
    return { ...s5.serialize().message, tileId: e8.tile.id };
  }
  _setFilterState(e8) {
    const t3 = e8.displayId, s5 = this._attributeStore.getHighlightFlags(e8.objectId);
    this._attributeStore.setData(t3, 0, 0, s5 | (e8.visible ? M2 : 0));
  }
  _getSymbolForGraphic(e8) {
    return null != e8.symbol ? e8.symbol : null != this._effectiveRenderer ? this._effectiveRenderer.getSymbol(e8) : this._getNullSymbol(e8);
  }
  async _ensureSymbolResource(e8) {
    if (!e8.symbol) return;
    const t3 = await this._getSymbolInfo(e8.symbol);
    if (!t3) return;
    const s5 = t3.linearCIM.filter((e9) => "text" === e9.type);
    if (s5.length > 0) {
      const r5 = await this._getTextResources(e8, s5);
      e8.symbolResource = { symbolInfo: t3, textInfo: r5 };
    } else e8.symbolResource = { symbolInfo: t3 };
  }
  _getSymbolInfo(e8) {
    const t3 = e8.hash();
    return this._hashToSymbolInfo.has(t3) || this._hashToSymbolInfo.set(t3, this._createSymbolInfo(t3, e8).catch((e9) => null)), this._hashToSymbolInfo.get(t3);
  }
  async _createSymbolInfo(e8, t3) {
    const s5 = await this._convertToCIMSymbol(t3), r5 = await this._createLinearCIM(s5);
    return { hash: e8, cimSymbol: s5, linearCIM: r5, meshWriters: await this._createMeshWriters(s5, r5) };
  }
  async _convertToCIMSymbol(e8) {
    const t3 = $(e8);
    if ("web-style" === t3.type) {
      return (await t3.fetchCIMSymbol()).data;
    }
    return t3;
  }
  async _createLinearCIM(e8) {
    return await Promise.all(te.fetchResources(e8.symbol, this._cimResourceManager, [])), this.view.stage.cimAnalyzer.analyzeSymbolReference(e8, false);
  }
  async _createMeshWriters(e8, t3) {
    s(this._controller.signal);
    const s5 = this.container.instanceStore, r5 = this.view.stage.meshWriterRegistry, i5 = await m6(e8, t3, s5);
    return Promise.all(i5.map((e9) => r5.createMeshWriter(this._storage, this._resourceProxy, { tileInfo: this.view.featuresTilingScheme.tileInfo }, e9)));
  }
  _onTileUpdate(e8) {
    if (e8.added && e8.added.length > 0) for (const t3 of e8.added) this._updateTracking.addPromise(this._addTile(t3));
    if (e8.removed && e8.removed.length > 0) for (const t3 of e8.removed) this._removeTile(t3.key);
  }
  _createFeatureTile(e8) {
    const t3 = this.view.featuresTilingScheme.getTileBounds(u(), e8), s5 = this.view.featuresTilingScheme.getTileResolution(e8.level), r5 = new b2(e8, s5, t3[0], t3[3]);
    return this._tiles.set(e8, r5), this.container.addChild(r5), r5;
  }
  async _addTile(e8) {
    if (!this._attached) return;
    const t3 = this._graphicStore.queryItems(e8);
    if (!t3.length) return;
    const s5 = this._createFeatureTile(e8.key), r5 = F2.fromItems(e8, t3, this._metadata);
    await this._densifyItemsForDisplay([r5]), await this._fetchResources([r5]);
    const i5 = this._writeMeshes(r5);
    s5.onMessage({ type: "append", append: i5, clear: false, end: true, attributeEpoch: this._attributeStore.epoch, objectIdMap: r5.objectIdMap });
  }
  _removeTile(e8) {
    if (!this._tiles.has(e8)) return;
    const t3 = this._tiles.get(e8);
    this.container.removeChild(t3), t3.destroy(), this._tiles.delete(e8);
  }
  _getNullSymbol(e8) {
    const t3 = e8.geometry;
    return s3(t3) ? O : y(t3) || m4(t3) ? y2 : this.defaultPointSymbolEnabled ? N : null;
  }
  async _getTextResources(e8, t3) {
    const s5 = new Array(), r5 = new Array();
    for (let i5 = 0; i5 < t3.length; i5++) {
      const o4 = t3[i5], { resource: a9, overrides: n9 } = o4.textRasterizationParam;
      if ((n9 == null ? void 0 : n9.length) > 0) {
        const t4 = y3.resolveSymbolOverrides({ type: "CIMSymbolReference", primitiveOverrides: n9, symbol: { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, size: a9.symbol.height, anchorPointUnits: "Relative", frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { x: 0, y: 0 }, symbol: a9.symbol, textString: a9.textString }], scaleSymbolsProportionally: true, respectFrame: true }] } }, e8, this.view.spatialReference, null, v(e8.projectedGeometry), null, null);
        t4.then((e9) => {
          const t5 = e9.symbolLayers[0], { textString: s6 } = t5.markerGraphics[0];
          r5.push({ type: "cim-rasterization-info", resource: { type: "text", textString: s6 || "", font: a9.font } }), o4.text = a9.textString = s6 || "";
        }), s5.push(t4);
      } else r5.push({ type: "cim-rasterization-info", resource: a9 });
    }
    s5.length > 0 && await Promise.all(s5);
    const o3 = r5.map((e9) => this.view.stage.textureManager.rasterizeItem(e9)), a8 = await Promise.all(o3);
    n2(a8);
    const n8 = /* @__PURE__ */ new Map();
    for (let i5 = 0; i5 < t3.length; i5++) {
      const e9 = t3[i5];
      n8.set(e9.textRasterizationParam.resource.symbol, { text: e9.text, glyphMosaicItems: a8[i5] });
    }
    return n8;
  }
  _cleanupSharedResources() {
    var _a;
    if (!this._cleanupRequired) return;
    const e8 = performance.now();
    if (e8 - this._lastCleanup < 5e3) return;
    this._cleanupRequired = false, this._lastCleanup = e8;
    const t3 = /* @__PURE__ */ new Set();
    for (const r5 of this._graphicStore.items()) {
      const e9 = (_a = r5.symbolResource) == null ? void 0 : _a.symbolInfo.hash;
      t3.add(e9);
    }
    const s5 = new Set(this._hashToSymbolInfo.keys());
    for (const r5 of s5.values()) t3.has(r5) || this._hashToSymbolInfo.delete(r5);
  }
};
r([m()], O2.prototype, "_effectiveRenderer", null), r([m({ constructOnly: true })], O2.prototype, "layerId", void 0), r([m({ constructOnly: true })], O2.prototype, "requestUpdateCallback", void 0), r([m()], O2.prototype, "container", void 0), r([m({ constructOnly: true })], O2.prototype, "graphics", void 0), r([m()], O2.prototype, "renderer", void 0), r([m()], O2.prototype, "_updateTracking", void 0), r([m()], O2.prototype, "updating", null), r([m()], O2.prototype, "view", void 0), r([m()], O2.prototype, "updateRequested", void 0), r([m()], O2.prototype, "defaultPointSymbolEnabled", void 0), O2 = r([a("esri.views.2d.layers.graphics.GraphicsView2D")], O2);
var A = O2;

export {
  A
};
//# sourceMappingURL=chunk-3IODMM4N.js.map
