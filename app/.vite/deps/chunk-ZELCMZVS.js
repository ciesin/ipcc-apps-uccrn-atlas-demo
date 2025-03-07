import {
  e as e5,
  o as o4
} from "./chunk-PX3W5QSO.js";
import {
  I,
  N,
  P,
  T,
  c as c2,
  c2 as c4,
  c3 as c5,
  f,
  g,
  h as h2,
  h2 as h3,
  i as i3,
  l2,
  l3,
  m,
  o as o3,
  s as s2,
  s2 as s4,
  u as u3,
  x
} from "./chunk-OMCJ6PCE.js";
import {
  t as t2
} from "./chunk-HDT7YPJI.js";
import {
  s2 as s3
} from "./chunk-KIKC4LVZ.js";
import {
  c as c3,
  f as f2,
  h2 as h4,
  o as o2
} from "./chunk-LTF4JXOW.js";
import {
  e as e3
} from "./chunk-CVEV6FRQ.js";
import {
  r
} from "./chunk-PMUCRJCT.js";
import {
  a2,
  c
} from "./chunk-UQQJEYZO.js";
import {
  e as e4
} from "./chunk-VCN3W5DR.js";
import {
  i as i2
} from "./chunk-DYXUUD4L.js";
import {
  mt,
  ut
} from "./chunk-F7TFMQ3A.js";
import {
  e as e2
} from "./chunk-J7454WTE.js";
import {
  n as n4
} from "./chunk-AI444EOP.js";
import {
  M,
  i
} from "./chunk-CTBXY22F.js";
import {
  si,
  ti
} from "./chunk-ANT4QPJQ.js";
import {
  t
} from "./chunk-HYJ4YR5G.js";
import {
  C
} from "./chunk-CRKFUUKK.js";
import {
  n as n2
} from "./chunk-O2L6JAHP.js";
import {
  B,
  S,
  l,
  o,
  u as u2,
  v
} from "./chunk-K35H6D4D.js";
import {
  n as n3
} from "./chunk-HSI6V34N.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  u
} from "./chunk-JLFV7EBO.js";
import {
  e
} from "./chunk-4LTV6KQ5.js";
import {
  a,
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  G
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AnimatedMeshWriter.js
var o5 = class extends c2 {
};
function r2(e7) {
  const { sprite: o7, isMapAligned: r7, colorLocked: i6, scaleSymbolsProportionally: l6, isStroke: m2 } = e7;
  let n7 = 0;
  return r7 && (n7 |= f(o2.bitset.isMapAligned)), i6 && (n7 |= f(o2.bitset.colorLocked)), o7.sdf && (n7 |= f(o2.bitset.isSDF)), l6 && (n7 |= f(o2.bitset.scaleSymbolsProportionally)), m2 && (n7 |= f(o2.bitset.isStroke)), n7;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AnimatedMarkerMeshWriter.js
var c6 = class extends o5 {
  get vertexSpec() {
    return { createComputedParams: (t3) => {
      let { pixelDimensions: i6, texelDimensions: r7, baseSize: s8, referenceSize: n7, strokeWidth: o7, sizeRatio: a5 } = t3;
      i6 || (i6 = t3.sprite.sdf ? [0, 0] : [t3.sprite.width, t3.sprite.height]), r7 || (r7 = t3.sprite.sdf ? [0, 0] : i6), s8 = u(s8), n7 = u(n7), o7 = u(o7);
      const c10 = (t3.sprite.sdfDecodeCoeff ?? 1) * a5;
      return { ...t3, pixelDimensions: i6, texelDimensions: r7, baseSize: s8, referenceSize: n7, strokeWidth: o7, sdfDecodeCoeff: c10 };
    }, optionalAttributes: { zoomRange: { type: C.SHORT, count: 2, packPrecisionFactor: si, pack: ({ scaleInfo: e7 }, { tileInfo: t3 }) => m(e7, t3) } }, attributes: { id: { type: C.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: C.UNSIGNED_BYTE, count: 1, pack: r2 }, pos: { type: C.SHORT, count: 2, pack: "position", packPrecisionFactor: 1 }, offset: { type: C.FLOAT, count: 2, packAlternating: { count: 4, pack: (e7) => {
      const t3 = e7.texelDimensions;
      return [[-0.5 * t3[0], -0.5 * t3[1]], [0.5 * t3[0], -0.5 * t3[1]], [-0.5 * t3[0], 0.5 * t3[1]], [0.5 * t3[0], 0.5 * t3[1]]];
    } } }, uv: { type: C.SHORT, count: 2, packPrecisionFactor: 1, packAlternating: { count: 4, packTessellation: ({ texXmax: e7, texXmin: t3, texYmax: i6, texYmin: r7 }) => [[t3, r7], [e7, r7], [t3, i6], [e7, i6]] } }, animationPointerAndBaseSizeAndReferenceSize: { type: C.UNSIGNED_SHORT, count: 4, packPrecisionFactor: 1, pack: ({ animations: e7, baseSize: t3, referenceSize: i6 }) => [e7.dataColumn, e7.dataRow, t3, i6] }, sizing: { type: C.UNSIGNED_SHORT, count: 4, packPrecisionFactor: 8, pack: ({ strokeWidth: e7, pixelDimensions: t3, baseSize: i6, sprite: r7, sizeRatio: s8 }) => {
      const n7 = Math.max(i6 * r7.width / r7.height, i6), o7 = r7.sdfDecodeCoeff * n7 * s8;
      return [t3[0], t3[1], e7, o7];
    } }, angle: { type: C.BYTE, count: 1, packTessellation: ({ angle: e7 }) => e7 } } };
  }
  _write(e7, t3) {
    const i6 = this.evaluatedMeshParams.sprite, { textureBinding: r7 } = i6;
    e7.recordStart(this.instanceId, this.attributeLayout, r7);
    const s8 = t3.getDisplayId();
    if ("esriGeometryPolygon" === t3.geometryType) {
      const i7 = t3.readCentroidForDisplay();
      if (!i7) return;
      const [r8, n7] = i7.coords;
      this._writeQuad(e7, s8, r8, n7);
    } else if ("esriGeometryPoint" === t3.geometryType) {
      const i7 = t3.readXForDisplay(), r8 = t3.readYForDisplay();
      this._writeQuad(e7, s8, i7, r8);
    } else {
      const i7 = t3.readGeometryForDisplay();
      if (i7) {
        const { angleToLine: t4 } = this.evaluatedMeshParams;
        if (t4) {
          let t5 = true, r8 = null, n7 = null;
          i7.forEachVertex((i8, a5) => {
            if (null != r8 && null != n7) {
              const c10 = Math.atan2(a5 - n7, i8 - r8) / c3;
              t5 && (this._writeQuad(e7, s8, r8, n7, c10), t5 = false), this._writeQuad(e7, s8, i8, a5, c10);
            }
            r8 = i8, n7 = a5;
          });
        } else i7.forEachVertex((t5, i8) => {
          this._writeQuad(e7, s8, t5, i8);
        });
      }
    }
    e7.recordEnd();
  }
  _writeQuad(e7, t3, r7, s8, n7 = 0) {
    const o7 = this.evaluatedMeshParams.sprite, { rect: a5 } = o7, c10 = a5.x + ti, d2 = a5.y + ti, p2 = a5.x + a5.width - ti, l6 = a5.y + a5.height - ti, m2 = e7.vertexCount();
    e7.recordBounds(r7, s8, 64, 64);
    const u5 = { texXmin: c10, texYmin: d2, texXmax: p2, texYmax: l6, angle: n7 };
    for (let i6 = 0; i6 < 4; i6++) this._writeVertex(e7, t3, r7, s8, u5);
    e7.indexEnsureSize(6), e7.indexWrite(m2), e7.indexWrite(m2 + 1), e7.indexWrite(m2 + 2), e7.indexWrite(m2 + 1), e7.indexWrite(m2 + 3), e7.indexWrite(m2 + 2);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/segmentUtils.js
function e6(t3, e7, n7) {
  return t3[0] = e7[0] - n7[0], t3[1] = e7[1] - n7[1], t3;
}
function n5(t3, e7) {
  return Math.sqrt(t3 * t3 + e7 * e7);
}
function s5(t3) {
  const e7 = n5(t3[0], t3[1]);
  t3[0] /= e7, t3[1] /= e7;
}
function i4(t3, e7) {
  return n5(t3[0] - e7[0], t3[1] - e7[1]);
}
function r3(t3, e7) {
  return t3[e7 + 1];
}
function h5(t3) {
  return t3.length - 1;
}
function a3(t3) {
  let e7 = 0;
  for (let n7 = 0; n7 < h5(t3); n7++) e7 += c7(t3, n7);
  return e7;
}
function c7(t3, e7, n7 = 1) {
  let [s8, i6] = r3(t3, e7);
  return [s8, i6] = [Math.round(s8), Math.round(i6)], Math.sqrt(s8 * s8 + i6 * i6) * n7;
}
var u4 = class _u {
  constructor(t3, e7, n7, s8, i6) {
    this._segments = t3, this._index = e7, this._distance = n7, this._xStart = s8, this._yStart = i6, this._done = false;
  }
  static create(t3) {
    return new _u(t3, 0, 0, t3[0][0], t3[0][1]);
  }
  clone() {
    return new _u(this._segments, this._index, this._distance, this.xStart, this.yStart);
  }
  equals(t3) {
    return this._index === t3._index || t3._index === this._index - 1 && (0 === this._distance || 1 === t3._distance) || t3._index === this._index + 1 && (1 === this._distance || 0 === t3._distance);
  }
  leq(t3) {
    return this._index < t3._index || this._index === t3._index && this._distance <= t3._distance;
  }
  geq(t3) {
    return this._index > t3._index || this._index === t3._index && this._distance >= t3._distance;
  }
  get _segment() {
    return this._segments[this._index + 1];
  }
  get angle() {
    const t3 = this.dy, e7 = (0 * t3 + -1 * -this.dx) / (1 * this.length);
    let n7 = Math.acos(e7);
    return t3 > 0 && (n7 = 2 * Math.PI - n7), n7;
  }
  get xStart() {
    return this._xStart;
  }
  get yStart() {
    return this._yStart;
  }
  get x() {
    return this.xStart + this.distance * this.dx;
  }
  get y() {
    return this.yStart + this.distance * this.dy;
  }
  get dx() {
    return this._segment[0];
  }
  get dy() {
    return this._segment[1];
  }
  get xMidpoint() {
    return this.xStart + 0.5 * this.dx;
  }
  get yMidpoint() {
    return this.yStart + 0.5 * this.dy;
  }
  get xEnd() {
    return this.xStart + this.dx;
  }
  get yEnd() {
    return this.yStart + this.dy;
  }
  get length() {
    const { dx: t3, dy: e7 } = this;
    return Math.sqrt(t3 * t3 + e7 * e7);
  }
  get remainingLength() {
    return this.length * (1 - this._distance);
  }
  get backwardLength() {
    return this.length * this._distance;
  }
  get distance() {
    return this._distance;
  }
  get done() {
    return this._done;
  }
  hasPrev() {
    return this._index - 1 >= 0;
  }
  hasNext() {
    return this._index + 1 < h5(this._segments);
  }
  next() {
    return this.hasNext() ? (this._xStart += this.dx, this._yStart += this.dy, this._distance = 0, this._index += 1, this) : null;
  }
  prev() {
    return this.hasPrev() ? (this._index -= 1, this._xStart -= this.dx, this._yStart -= this.dy, this._distance = 1, this) : (this._done = true, null);
  }
  _seekBackwards(t3, e7) {
    const n7 = this.backwardLength;
    if (t3 <= n7) return this._distance = (n7 - t3) / this.length, this;
    let s8 = this.backwardLength;
    for (; this.prev(); ) {
      if (s8 + this.length > t3) return this._seekBackwards(t3 - s8);
      s8 += this.length;
    }
    return this._distance = 0, e7 ? this : null;
  }
  seek(t3, e7 = false) {
    if (t3 < 0) return this._seekBackwards(Math.abs(t3), e7);
    if (t3 <= this.remainingLength) return this._distance = (this.backwardLength + t3) / this.length, this;
    let n7 = this.remainingLength;
    for (; this.next(); ) {
      if (n7 + this.length > t3) return this.seek(t3 - n7, e7);
      n7 += this.length;
    }
    return this._distance = 1, e7 ? this : null;
  }
};
function d(e7, n7, s8, i6 = true) {
  const r7 = a3(e7), h7 = u4.create(e7), c10 = r7 / 2;
  if (!i6) return h7.seek(c10), void (Math.abs(h7.x) < e4 && Math.abs(h7.y) < e4 && s8(h7.clone(), 0, c10 + 0 * n7, r7));
  const d2 = Math.max((r7 - n7) / 2, 0), o7 = Math.floor(d2 / n7), _2 = c10 - o7 * n7;
  h7.seek(_2);
  for (let a5 = -o7; a5 <= o7; a5++) Math.abs(h7.x) < e4 && Math.abs(h7.y) < e4 && s8(h7.clone(), a5, c10 + a5 * n7, r7), h7.seek(n7);
}
function l4(t3, e7) {
  const n7 = e7;
  for (let s8 = 0; s8 < t3.length; s8++) {
    let e8 = t3[s8];
    g2(e8, n7);
    const i6 = [];
    i6.push(e8[0]);
    for (let t4 = 1; t4 < e8.length; t4++) {
      const [n8, s9] = e8[t4 - 1], [r7, h7] = e8[t4], a5 = r7 - n8, c10 = h7 - s9;
      i6.push([a5, c10]);
    }
    t3[s8] = i6, e8 = i6;
  }
  return t3;
}
function g2(t3, n7) {
  const r7 = 1e-6;
  if (n7 <= 0) return;
  const h7 = t3.length;
  if (h7 < 3) return;
  const a5 = [];
  let c10 = 0;
  a5.push(0);
  for (let e7 = 1; e7 < h7; e7++) c10 += i4(t3[e7], t3[e7 - 1]), a5.push(c10);
  n7 = Math.min(n7, 0.2 * c10);
  const u5 = [];
  u5.push(t3[0][0]), u5.push(t3[0][1]);
  const d2 = t3[h7 - 1][0], o7 = t3[h7 - 1][1], _2 = e6([0, 0], t3[0], t3[1]);
  s5(_2), t3[0][0] += n7 * _2[0], t3[0][1] += n7 * _2[1], e6(_2, t3[h7 - 1], t3[h7 - 2]), s5(_2), t3[h7 - 1][0] += n7 * _2[0], t3[h7 - 1][1] += n7 * _2[1];
  for (let e7 = 1; e7 < h7; e7++) a5[e7] += n7;
  a5[h7 - 1] += n7;
  const l6 = 0.5 * n7;
  for (let e7 = 1; e7 < h7 - 1; e7++) {
    let s8 = 0, i6 = 0, c11 = 0;
    for (let h8 = e7 - 1; h8 >= 0 && !(a5[h8 + 1] < a5[e7] - l6); h8--) {
      const u6 = l6 + a5[h8 + 1] - a5[e7], d3 = a5[h8 + 1] - a5[h8], o8 = a5[e7] - a5[h8] < l6 ? 1 : u6 / d3;
      if (Math.abs(o8) < r7) break;
      const _3 = o8 * o8, g3 = o8 * u6 - 0.5 * _3 * d3, x2 = o8 * d3 / n7, f4 = t3[h8 + 1], y2 = t3[h8][0] - f4[0], k = t3[h8][1] - f4[1];
      s8 += x2 / g3 * (f4[0] * o8 * u6 + 0.5 * _3 * (u6 * y2 - d3 * f4[0]) - _3 * o8 * d3 * y2 / 3), i6 += x2 / g3 * (f4[1] * o8 * u6 + 0.5 * _3 * (u6 * k - d3 * f4[1]) - _3 * o8 * d3 * k / 3), c11 += x2;
    }
    for (let u6 = e7 + 1; u6 < h7 && !(a5[u6 - 1] > a5[e7] + l6); u6++) {
      const h8 = l6 - a5[u6 - 1] + a5[e7], d3 = a5[u6] - a5[u6 - 1], o8 = a5[u6] - a5[e7] < l6 ? 1 : h8 / d3;
      if (Math.abs(o8) < r7) break;
      const _3 = o8 * o8, g3 = o8 * h8 - 0.5 * _3 * d3, x2 = o8 * d3 / n7, f4 = t3[u6 - 1], y2 = t3[u6][0] - f4[0], k = t3[u6][1] - f4[1];
      s8 += x2 / g3 * (f4[0] * o8 * h8 + 0.5 * _3 * (h8 * y2 - d3 * f4[0]) - _3 * o8 * d3 * y2 / 3), i6 += x2 / g3 * (f4[1] * o8 * h8 + 0.5 * _3 * (h8 * k - d3 * f4[1]) - _3 * o8 * d3 * k / 3), c11 += x2;
    }
    u5.push(s8 / c11), u5.push(i6 / c11);
  }
  u5.push(d2), u5.push(o7);
  for (let e7 = 0, s8 = 0; e7 < h7; e7++) t3[e7][0] = u5[s8++], t3[e7][1] = u5[s8++];
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/labels/LabelMeshWriter.js
var z = 1;
var A = 0;
var D = 128;
var I2 = e((e7) => {
  let t3 = 0;
  if (0 === e7) return 1 / 0;
  for (; !(e7 % 2); ) t3++, e7 /= 2;
  return t3;
});
var G2 = class extends N {
  constructor() {
    super(...arguments), this._zoomLevel = 0;
  }
  _write(e7, t3, i6, s8) {
    if (this._zoomLevel = s8 || 0, null != i6) throw new Error("InternalError: EffectGeometry not support for LabelMeshWriter");
    switch (t3.geometryType) {
      case "esriGeometryPoint": {
        const i7 = t3.readXForDisplay(), s9 = t3.readYForDisplay();
        this._writePoint(e7, i7, s9, t3);
        break;
      }
      case "esriGeometryEnvelope":
      case "esriGeometryPolygon":
      case "esriGeometryMultipoint": {
        const i7 = t3.readCentroidForDisplay();
        if (!i7) return;
        const [s9, r7] = i7.coords;
        this._writePoint(e7, s9, r7, t3);
        break;
      }
      case "esriGeometryPolyline":
        this._writeLines(e7, t3);
    }
  }
  _getMetricDir() {
    const { horizontalAlignment: e7, verticalAlignment: t3 } = this.evaluatedMeshParams;
    return ["center" === e7 ? 0 : "right" === e7 ? -1 : 1, "middle" === t3 ? 0 : "bottom" === t3 ? -1 : 1];
  }
  _createLineLabelMetric(e7, t3, i6, s8) {
    var _a, _b;
    const r7 = f2(e7), [o7, n7] = this._getMetricDir(), a5 = ((_a = this.evaluatedMeshParams.scaleInfo) == null ? void 0 : _a.maxScale) ?? 0, l6 = ((_b = this.evaluatedMeshParams.scaleInfo) == null ? void 0 : _b.minScale) ?? 0;
    return new r(r7, t3, i6, o7, n7, a5, l6, s8 ?? null);
  }
  _writePoint(e7, t3, i6, s8) {
    var _a, _b;
    const r7 = this._getShaping();
    if (!r7) return;
    const o7 = s8.getDisplayId(), n7 = a2(this.evaluatedMeshParams.horizontalAlignment), a5 = c(this.evaluatedMeshParams.verticalAlignment), l6 = ((_a = this.evaluatedMeshParams.scaleInfo) == null ? void 0 : _a.maxScale) ?? 0, h7 = ((_b = this.evaluatedMeshParams.scaleInfo) == null ? void 0 : _b.minScale) ?? 0, c10 = f2(s8.getDisplayId()), m2 = this._getPointReferenceBounds() || { offsetX: 0, offsetY: 0, size: 0 };
    e7.metricStart(new r(c10, t3, i6, n7, a5, l6, h7, m2)), this._writeGlyphs(e7, o7, t3, i6, r7, 0, m2), e7.metricBoxWrite(r7.boundsT), e7.metricEnd();
  }
  _getPointReferenceBounds() {
    if (!this._references) return null;
    for (const e7 of this._references) {
      const t3 = e7.getBoundsInfo();
      if (t3) return t3;
    }
    return null;
  }
  _writeLines(e7, t3) {
    const { scaleInfo: i6, verticalAlignment: s8 } = this.evaluatedMeshParams, r7 = this.evaluatedMeshParams.repeatLabelDistance || 128, o7 = this._getShaping("middle");
    if (!o7) return;
    const n7 = (e8, t4, i7, s9) => this._placeSubdivGlyphs(e8, t4, i7, s9), a5 = (o7.bounds.width + r7) / (1 << z);
    this._current = { out: e7, id: t3.getDisplayId(), shaping: o7, zoomRange: m(i6, this.getTileInfo()), referenceBounds: this._getPointReferenceBounds() || { offsetX: 0, offsetY: 0, size: 0 }, offsetDirection: null }, this._verticalPlacement = "bottom" === s8 ? "above" : "top" === s8 ? "below" : null, this._verticalPlacement ? this._writeAboveAndBelowAlong(t3, n7, a5) : this._writeCenterAlong(t3, n7, a5);
  }
  _writeAboveAndBelowAlong(e7, t3, i6) {
    const { repeatLabel: s8 } = this.evaluatedMeshParams, { shaping: r7 } = this._current, o7 = r7.bounds.halfHeight, n7 = e7.readGeometryForDisplay();
    if (!n7) return;
    const a5 = new e2();
    mt(a5, n7, false, false, "esriGeometryPolyline", 1);
    const l6 = j(new e2(), a5, o7), h7 = j(new e2(), a5, -o7), c10 = ut(h7, "esriGeometryPolyline", false, false), m2 = ut(l6, "esriGeometryPolyline", false, false), d2 = l4(m2.paths, r7.bounds.width), p2 = l4(c10.paths, r7.bounds.width);
    this._current.offsetDirection = "above";
    for (const u5 of d2) d(u5, i6, t3, !!s8);
    this._current.offsetDirection = "below";
    for (const u5 of p2) d(u5, i6, t3, !!s8);
  }
  _writeCenterAlong(e7, t3, i6) {
    const { repeatLabel: s8 } = this.evaluatedMeshParams, { shaping: r7 } = this._current, o7 = l4(e7.readLegacyGeometryForDisplay().paths, r7.bounds.width);
    for (const n7 of o7) d(n7, i6, t3, !!s8);
  }
  _placeSubdivGlyphs(e7, t3, i6, s8) {
    const { allowOverrun: r7, labelPosition: o7, repeatLabelDistance: n7 } = this.evaluatedMeshParams, a5 = this._current.zoomRange[0], l6 = I2(t3), h7 = this._current.shaping.bounds.width / (1 << z), c10 = Math.sqrt(n7 || D) / (1 << z), m2 = Math.min(i6, s8 - i6), d2 = this._current.shaping.isMultiline ? P : Math.log2(m2 / (c10 + h7 / 2)), u5 = 0 === t3 ? d2 : Math.min(l6, d2), f4 = Math.max(a5, this._zoomLevel + z - u5), g3 = this._zoomLevel - f4, p2 = this._current.shaping.bounds.width / 2 * 2 ** g3;
    this._current.shaping.isMultiline ? 0 === t3 && this._placeStraight(e7, f4) : r7 && g3 < 0 ? this._placeStraightAlong(e7, a5) : "parallel" === o7 ? this._placeStraightAlong(e7, f4) : "curved" === o7 && this._placeCurved(e7, f4, p2);
  }
  _placeStraight(e7, t3) {
    const { out: i6, id: s8, shaping: r7, referenceBounds: o7 } = this._current, { x: n7, y: a5 } = e7;
    i6.metricStart(this._createLineLabelMetric(s8, n7, a5)), i6.metricBoxWrite(r7.boundsT);
    const l6 = e7.angle * (180 / Math.PI) % 360, h7 = (e7.angle * (180 / Math.PI) + 180) % 360;
    this._writeGlyphs(i6, s8, n7, a5, r7, 0, o7, { clipAngle: l6, mapAligned: true, isLineLabel: true, minZoom: t3 }), this._writeGlyphs(i6, s8, n7, a5, r7, 0, o7, { clipAngle: h7, mapAligned: true, isLineLabel: true, minZoom: t3 }), i6.metricEnd();
  }
  _placeCurved(e7, t3, i6) {
    const { out: s8, id: r7 } = this._current;
    s8.metricStart(this._createLineLabelMetric(r7, e7.x, e7.y));
    const o7 = e7.clone(), n7 = e7.angle * (180 / Math.PI) % 360, a5 = (e7.angle * (180 / Math.PI) + 180) % 360;
    this._verticalPlacement && this._verticalPlacement !== this._current.offsetDirection || (this._placeFirst(o7, t3, 1, n7), this._placeBack(e7, o7, t3, i6, 1, n7), this._placeForward(e7, o7, t3, i6, 1, n7)), this._verticalPlacement && this._verticalPlacement === this._current.offsetDirection || (this._placeFirst(o7, t3, 0, a5), this._placeBack(e7, o7, t3, i6, 0, a5), this._placeForward(e7, o7, t3, i6, 0, a5)), s8.metricEnd();
  }
  _placeStraightAlong(e7, o7) {
    const { out: n7, id: a5, shaping: l6, zoomRange: h7, referenceBounds: c10 } = this._current, { boxBorderLineColor: d2, boxBackgroundColor: u5 } = this.evaluatedMeshParams, f4 = e7.clone(), g3 = e7.angle * (180 / Math.PI) % 360, p2 = (e7.angle * (180 / Math.PI) + 180) % 360, _2 = l6.glyphs.length > 0 && !(!d2 && !u5);
    if (n7.metricStart(this._createLineLabelMetric(a5, e7.x, e7.y)), _2) {
      const d3 = Math.max(o7, h7[0], 0), u6 = Math.min(P, h7[1]), f5 = M(n4(), -e7.angle), _3 = { minZoom: d3, maxZoom: u6, clipAngle: g3, mapAligned: true, isLineLabel: true }, x2 = u(this.evaluatedMeshParams.offsetX), M2 = u(this.evaluatedMeshParams.offsetY);
      if (!this._verticalPlacement || this._verticalPlacement === this._current.offsetDirection) {
        const t3 = t(x2, -1 * M2), [i6, o8] = l6.shapeBackground(i(n4(), f5, t3));
        n7.recordStart(this.instanceId, this.attributeLayout, l6.glyphs[0].textureBinding);
        const h8 = 2 * Math.max(i6.width, i6.height);
        n7.recordBounds(e7.x + i6.x, e7.y + i6.y, h8, h8), this._writeTextBox(n7, a5, e7.x, e7.y, o8, c10, _3), n7.recordEnd();
      }
      if (!this._verticalPlacement || this._verticalPlacement !== this._current.offsetDirection) {
        const t3 = t(x2, M2), [i6, o8] = l6.shapeBackground(i(n4(), f5, t3));
        _3.clipAngle = p2, n7.recordStart(this.instanceId, this.attributeLayout, l6.glyphs[0].textureBinding);
        const h8 = 2 * Math.max(i6.width, i6.height);
        n7.recordBounds(e7.x + i6.x, e7.y + i6.y, h8, h8), this._writeTextBox(n7, a5, e7.x, e7.y, o8, c10, _3), n7.recordEnd();
      }
    }
    this._verticalPlacement && this._verticalPlacement !== this._current.offsetDirection || this._placeFirst(f4, o7, 1, g3, true), this._verticalPlacement && this._verticalPlacement === this._current.offsetDirection || this._placeFirst(f4, o7, 0, p2, true), n7.metricEnd();
  }
  _placeBack(e7, t3, i6, s8, r7, o7) {
    const n7 = e7.clone();
    let a5 = e7.backwardLength + A;
    for (; n7.prev() && !(a5 >= s8); ) this._placeOnSegment(n7, t3, a5, i6, -1, r7, o7), a5 += n7.length + A;
  }
  _placeForward(e7, t3, i6, s8, r7, o7) {
    const n7 = e7.clone();
    let a5 = e7.remainingLength + A;
    for (; n7.next() && !(a5 >= s8); ) this._placeOnSegment(n7, t3, a5, i6, 1, r7, o7), a5 += n7.length + A;
  }
  _placeFirst(e7, s8, n7, a5, l6 = false) {
    const { out: h7, id: c10, shaping: d2, zoomRange: u5, referenceBounds: f4 } = this._current, g3 = d2.glyphs, p2 = u(this.evaluatedMeshParams.offsetX), _2 = u(this.evaluatedMeshParams.offsetY), x2 = t(p2, _2), M2 = M(n4(), -e7.angle);
    S(x2, x2, M2);
    for (const t3 of g3) {
      const i6 = t3.x > d2.bounds.x ? n7 : 1 - n7, r7 = i6 * e7.remainingLength + (1 - i6) * e7.backwardLength, o7 = Math.abs(t3.x + t3.width / 2 - d2.bounds.x), m2 = Math.max(0, this._zoomLevel + Math.log2(o7 / (r7 + A))), g4 = Math.max(s8, l6 ? 0 : m2);
      if (t3.maxZoom = Math.min(u5[1], P), t3.angle = e7.angle + (1 - n7) * Math.PI, t3.minZoom = Math.max(u5[0], g4), this._writeLineGlyph(h7, c10, e7.x, e7.y, d2.bounds, t3, a5, f4, true), (n7 || this._current.offsetDirection) && this._isVisible(t3.minZoom, t3.maxZoom)) {
        const e8 = new i2(t3.bounds.x + x2[0], t3.bounds.y + x2[1], t3.bounds.width, t3.bounds.height);
        h7.metricBoxWrite(e8);
      }
    }
  }
  _placeOnSegment(e7, s8, n7, a5, l6, h7, c10) {
    const { out: d2, id: u5, shaping: f4, referenceBounds: g3 } = this._current, p2 = f4.glyphs, _2 = e7.dx / e7.length, x2 = e7.dy / e7.length, M2 = { x: e7.x + n7 * -l6 * _2, y: e7.y + n7 * -l6 * x2 }, y2 = u(this.evaluatedMeshParams.offsetX), v3 = u(this.evaluatedMeshParams.offsetY), P3 = t(y2, v3), w = M(n4(), -e7.angle);
    S(P3, P3, w);
    for (const t3 of p2) {
      const i6 = t3.x > f4.bounds.x ? h7 : 1 - h7;
      if (!(i6 && 1 === l6 || !i6 && -1 === l6)) continue;
      const s9 = Math.abs(t3.x + t3.width / 2 - f4.bounds.x), r7 = Math.max(0, this._zoomLevel + Math.log2(s9 / n7) - 0.1), o7 = Math.max(a5, this._zoomLevel + Math.log2(s9 / (n7 + e7.length + A)));
      if (0 !== r7 && (t3.angle = e7.angle + (1 - h7) * Math.PI, t3.minZoom = o7, t3.maxZoom = r7, this._writeLineGlyph(d2, u5, M2.x, M2.y, f4.bounds, t3, c10, g3, true), (h7 || this._current.offsetDirection) && this._isVisible(t3.minZoom, t3.maxZoom))) {
        const e8 = new i2(t3.bounds.x + P3[0], t3.bounds.y + P3[1], t3.bounds.width, t3.bounds.height);
        d2.metricBoxWrite(e8);
      }
    }
  }
  _writeLineGlyph(e7, t3, i6, s8, r7, o7, n7, a5, l6) {
    const h7 = i6 + r7.x, c10 = s8 + r7.y, m2 = 2 * (this.evaluatedMeshParams.minPixelBuffer ? this.evaluatedMeshParams.minPixelBuffer / this._textMeshTransformProps.fontSize : 1), d2 = Math.max(r7.width, r7.height) * m2;
    e7.recordStart(this.instanceId, this.attributeLayout, o7.textureBinding), e7.recordBounds(h7, c10, d2, d2);
    const { texcoords: u5, offsets: f4 } = o7, { fontSize: g3, haloSize: p2, outlineSize: _2 } = this._textMeshTransformProps;
    this._writeQuad(e7, t3, i6, s8, { texcoords: u5, offsets: f4, fontSize: g3, haloSize: p2, outlineSize: _2, color: g(this.evaluatedMeshParams.color), isBackground: false, referenceBounds: a5, minZoom: Math.max(this._current.zoomRange[0], o7.minZoom), maxZoom: Math.min(this._current.zoomRange[1], o7.maxZoom), clipAngle: n7, mapAligned: l6, isLineLabel: true }), e7.recordEnd();
  }
  _isVisible(e7, t3) {
    const i6 = Math.floor(this._zoomLevel * si) / si;
    return e7 <= i6 && i6 <= t3;
  }
};
function j(e7, t3, i6) {
  const { coords: s8, lengths: r7 } = t3, o7 = n2(), m2 = n2(), u5 = n2(), f4 = n2(), g3 = n2(), p2 = n2(), _2 = 2;
  let x2 = 0;
  for (let d2 = 0; d2 < r7.length; d2++) {
    const t4 = r7[d2];
    for (let r8 = 0; r8 < t4; r8++) {
      const d3 = _2 * (r8 + x2 - 1), M2 = _2 * (r8 + x2), b = _2 * (r8 + x2 + 1);
      r8 > 0 ? o(o7, s8[d3], s8[d3 + 1]) : o(o7, 0, 0), o(m2, s8[M2], s8[M2 + 1]), r8 < t4 - 1 ? o(u5, s8[b], s8[b + 1]) : o(u5, 0, 0), 0 === r8 ? o(f4, 0, 0) : (B(f4, m2, o7), v(f4, f4), o(f4, f4[1], -f4[0])), r8 === t4 - 1 ? o(g3, 0, 0) : (B(g3, u5, m2), v(g3, g3), o(g3, g3[1], -g3[0])), u2(p2, f4, g3), v(p2, p2);
      const y2 = p2[0] * g3[0] + p2[1] * g3[1];
      0 !== y2 && l(p2, p2, y2), l(p2, p2, i6), e7.coords.push(m2[0] + p2[0], m2[1] + p2[1]);
    }
    e7.lengths.push(t4), x2 += t4;
  }
  return e7;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/animations/infos.js
function o6(t3) {
  return t3 instanceof n6 ? t3 : "object" == typeof t3 && "type" in t3 ? c8[t3.type].hydrate(t3) : new i5(t3);
}
var n6 = class {
  constructor(t3) {
    this.inputs = t3;
  }
  encode() {
    const t3 = [];
    for (const o7 of this.inputs) t3.push(...o7.encode());
    return t3.push(...this.instructions), t3;
  }
};
var i5 = class extends n6 {
  constructor(t3) {
    super([]), this.value = t3;
  }
  simplify() {
    return this;
  }
  get instructions() {
    if (Array.isArray(this.value)) {
      const [o7, n7, i6, s8] = this.value;
      return null != s8 ? h4.vector4.encode([o7, n7 || 0, i6 || 0, s8]) : h4.vector3.encode([o7, n7 || 0, i6 || 0]);
    }
    return h4.scalar.encode(this.value);
  }
};
var s6 = class _s extends n6 {
  constructor(t3, o7) {
    super([o7]), this._config = t3, this._parent = o7;
  }
  static hydrate(t3) {
    return new _s(t3, o6(t3.parent));
  }
  simplify() {
    if (this._config.relativeTranslation || this._config.absoluteScale) return this;
    const t3 = this._parent.simplify();
    if (!(t3 instanceof i5)) return this;
    const [o7, n7, r7, c10] = t3.value, e7 = this._config.translation.from[0], a5 = this._config.translation.from[1], f4 = this._config.rotation.from, h7 = this._config.scale.from;
    if (e7 === this._config.translation.to[0] && a5 === this._config.translation.to[1] && f4 === this._config.rotation.to && h7 === this._config.scale.to) {
      const t4 = r7 + f4, s8 = c10 * h7, u5 = Math.sin(r7), l6 = Math.cos(r7);
      return new i5([l6 * c10 * e7 - u5 * c10 * a5 + o7, u5 * c10 * e7 + l6 * c10 * a5 + n7, t4, s8]);
    }
    return new _s(this._config, t3);
  }
  get instructions() {
    return h4.animatedTransform.encode(this._config);
  }
};
var r4 = class _r extends n6 {
  constructor(t3, o7) {
    super([o7]), this._config = t3, this._parent = o7;
  }
  static hydrate(t3) {
    return new _r(t3, o6(t3.parent));
  }
  simplify() {
    const t3 = this._parent.simplify();
    if (!(t3 instanceof i5)) return this;
    const [o7, n7, s8, c10] = t3.value, e7 = this._config.color.from[0], a5 = this._config.color.from[1], f4 = this._config.color.from[2];
    let h7 = this._config.color.from[3];
    const u5 = this._config.opacity.from;
    return e7 === this._config.color.to[0] && a5 === this._config.color.to[1] && f4 === this._config.color.to[2] && h7 === this._config.color.to[3] && u5 === this._config.opacity.to ? (h7 *= u5, new i5([o7 * e7, n7 * a5, s8 * f4, c10 * h7])) : new _r(this._config, t3);
  }
  get instructions() {
    return h4.animatedColor.encode(this._config);
  }
};
var c8 = { AnimatedTransform: s6, AnimatedColor: r4 };

// node_modules/@arcgis/core/views/2d/engine/webgl/animations/utils.js
function r5(e7) {
  return a4(e7.map((e8) => f3(e8)).map((e8) => o6(e8).simplify()));
}
function s7(e7) {
  const o7 = [];
  return o7.push(e7.transform), o7.push(e7.fromColor), o7.push(e7.toColor), o7.push(e7.colorMix), o7.push(e7.toOpacity), o7.push(e7.opacityMix), o7;
}
function a4(e7) {
  const o7 = [], t3 = [];
  let i6 = 0;
  for (const r7 of e7) {
    const s8 = [...r7.encode(), ...h4.ret.encode()];
    o7.push([i6 + e7.length, 0, 0, 0]), t3.push(...s8), i6 += s8.length;
  }
  return [...o7, ...t3];
}
async function c9(e7, o7) {
  const t3 = e7;
  let i6;
  if ("number" == typeof t3 || "string" == typeof t3 || "boolean" == typeof t3) i6 = t3;
  else if (Array.isArray(t3)) i6 = await Promise.all(t3.map((e8) => c9(e8, o7)));
  else if ("object" == typeof t3) if ("valueExpressionInfo" in t3) {
    const { valueExpressionInfo: e8 } = t3, { expression: n7 } = e8;
    i6 = { ...t3, computed: await o7.createComputedField({ expression: n7 }) };
  } else {
    i6 = {};
    for (const e8 in t3) i6[e8] = await c9(t3[e8], o7);
  }
  return i6;
}
function f3(i6, n7, r7) {
  function s8(o7) {
    if (!("computed" in o7)) return o7;
    let t3 = o7.computed.readWithDefault(n7, r7, [255 * o7.defaultValue[0], 255 * o7.defaultValue[1], 255 * o7.defaultValue[2], o7.defaultValue[3]]);
    if ("string" == typeof t3) {
      const o8 = h.fromString(t3);
      o8 && (t3 = [o8.r, o8.g, o8.b, o8.a]);
    }
    return t3;
  }
  const a5 = i6;
  let c10;
  if ("number" == typeof a5 || "string" == typeof a5 || "boolean" == typeof a5) c10 = a5;
  else if (Array.isArray(a5)) c10 = a5.map((e7) => f3(e7, n7, r7));
  else if ("object" == typeof a5) if ("type" in a5 && null != a5.type && "Process" === a5.type) switch (a5.op) {
    case "ArcadeColor":
      {
        const e7 = f3(a5.value, n7, r7);
        p(Array.isArray(e7) && 4 === e7.length);
        c10 = [e7[0] / 255, e7[1] / 255, e7[2] / 255, e7[3]];
      }
      break;
    case "Transparency":
      {
        const e7 = f3(a5.value, n7, r7);
        p("number" == typeof e7), c10 = 1 - e7 / 100;
      }
      break;
    case "Divide":
    case "Add":
      {
        const e7 = f3(a5.left, n7, r7);
        p("number" == typeof e7);
        const o7 = f3(a5.right, n7, r7);
        switch (p("number" == typeof o7), a5.op) {
          case "Divide":
            c10 = e7 / o7;
            break;
          case "Add":
            c10 = e7 + o7;
        }
      }
      break;
    case "Random":
      {
        const e7 = f3(a5.seed, n7, r7), i7 = f3(a5.min, n7, r7), s9 = f3(a5.max, n7, r7), l6 = n7.getObjectId(), p2 = o4(l6 || 0);
        c10 = i7 + e5(p2, e7) * (s9 - i7);
      }
      break;
    case "Cond":
      {
        const e7 = f3(a5.condition, n7, r7), o7 = f3(a5.ifTrue, n7, r7), t3 = f3(a5.ifFalse, n7, r7);
        c10 = e7 ? o7 : t3;
      }
      break;
    case "MatchWinding": {
      const e7 = f3(a5.sign, n7, r7);
      let o7 = f3(a5.angle, n7, r7);
      if (e7 > 0) for (; o7 < 0; ) o7 += 2 * Math.PI;
      else for (; o7 > 0; ) o7 -= 2 * Math.PI;
      c10 = o7;
    }
  }
  else if ("computed" in a5) c10 = s8(a5);
  else {
    c10 = {};
    for (const e7 in a5) c10[e7] = f3(a5[e7], n7, r7);
  }
  return c10;
}
function* l5(e7) {
  const o7 = e7;
  if (Array.isArray(o7)) for (const t3 of o7) yield* l5(t3);
  else if ("object" == typeof o7) if ("type" in o7 && null != o7.type && "Process" === o7.type) switch (o7.op) {
    case "ArcadeColor":
    case "Transparency":
      yield* l5(o7.value);
      break;
    case "Divide":
    case "Add":
      yield* l5(o7.left), yield* l5(o7.right);
      break;
    case "Random":
      yield* l5(o7.seed), yield* l5(o7.min), yield* l5(o7.max);
      break;
    case "Cond":
      yield* l5(o7.condition), yield* l5(o7.ifTrue), yield* l5(o7.ifFalse);
      break;
    case "MatchWinding":
      yield* l5(o7.sign), yield* l5(o7.angle);
  }
  else if ("computed" in o7) yield o7.computed;
  else for (const t3 in o7) yield* l5(o7[t3]);
}
function p(e7) {
  if (!e7) throw new Error("Assertion failed.");
}

// node_modules/@arcgis/core/views/2d/layers/features/support/DictionaryValue.js
var r6 = class extends s3 {
  constructor(e7) {
    super(), this._value = e7;
  }
  resize(e7) {
  }
  read(e7, r7) {
    return this._value;
  }
  readWithDefault(e7, r7, t3) {
    return this._value;
  }
  hasArcadeDependency(e7) {
    return false;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/MeshWriterInputEvaluator.js
var h6 = () => n.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.mesh.MeshWriterInputEvaluator");
async function y(e7, r7, s8 = false) {
  const { defaultValue: t3, valueExpressionInfo: o7, value: a5 } = r7;
  if (o7) {
    const { expression: a6 } = o7, i6 = await e7.createComputedField({ expression: a6 }, s8);
    return i6 ? { ...r7, computed: i6, defaultValue: t3 } : null;
  }
  return { ...r7, computed: new r6(a5), defaultValue: t3 };
}
async function v2(e7, r7) {
  const { valueExpressionInfo: s8 } = r7, { expression: t3 } = s8, o7 = await e7.createComputedField({ expression: t3 });
  return o7 ? { ...r7, computed: o7 } : null;
}
function P2(e7) {
  return "object" == typeof e7 && null != e7 && (!(!("valueExpressionInfo" in e7) || !e7.valueExpressionInfo) || "type" in e7 && "Process" === e7.type && "op" in e7 && "Random" === e7.op);
}
function _(e7) {
  if (Array.isArray(e7)) {
    for (const r7 of e7) if (_(r7)) return true;
  }
  if ("object" == typeof e7) {
    if (P2(e7)) return true;
    for (const r7 in e7) {
      if (_(e7[r7])) return true;
    }
  }
  return false;
}
var I3 = class _I {
  static async create(r7, s8, t3) {
    const o7 = {}, a5 = /* @__PURE__ */ new Map(), i6 = /* @__PURE__ */ new Map(), p2 = /* @__PURE__ */ new Map(), f4 = /* @__PURE__ */ new Map(), l6 = /* @__PURE__ */ new Map(), d2 = /* @__PURE__ */ new Map();
    for (const u5 in t3) {
      const h7 = t3[u5];
      if (null != h7 && "object" == typeof h7) if (Array.isArray(h7)) {
        if ("object" == typeof h7[0]) throw new Error(`InternalError: Cannot handle ${u5}. Nested array params are not supported`);
        o7[u5] = h7;
      } else if ("valueExpressionInfo" in h7) {
        if (h7.value) {
          o7[u5] = h7.value;
          continue;
        }
        const e7 = await v2(r7, h7);
        if (!e7) {
          o7[u5] = h7.defaultValue;
          continue;
        }
        a5.set(u5, e7), o7[u5] = null;
      } else switch (h7.type) {
        case "cim-effect-infos":
          if (h7.effectInfos.some((e7) => e7.overrides.length)) {
            i6.set(u5, { effects: await Promise.all(h7.effectInfos.map(async (s9) => {
              const t4 = s9.overrides.map((e7) => y(r7, e7));
              return { effect: s9.effect, compiledOverrides: (await Promise.all(t4)).filter(G) };
            })) });
            break;
          }
          o7[u5] = h7.effectInfos.map((e7) => e7.effect);
          break;
        case "cim-marker-placement-param":
          h7.overrides.length && p2.set(u5, { placementInfo: h7, compiledOverrides: (await Promise.all(h7.overrides.map((e7) => y(r7, e7)))).filter(G) }), o7[u5] = h7.placement;
          break;
        case "text-rasterization-param": {
          if (h7.overrides.length) {
            const s9 = h7.overrides.map((e7) => y(r7, e7, h7.useLegacyLabelEvaluationRules));
            f4.set(u5, { compiledOverrides: (await Promise.all(s9)).filter(G), rasterizationParam: h7, objectIdToResourceId: /* @__PURE__ */ new Map() });
            continue;
          }
          const t4 = { type: "cim-rasterization-info", resource: h7.resource };
          o7[u5] = await s8.fetchResourceImmediate(t4) ?? null;
          break;
        }
        case "sprite-rasterization-param": {
          if (h7.overrides.length) {
            const s9 = h7.overrides.map((e7) => y(r7, e7));
            f4.set(u5, { compiledOverrides: (await Promise.all(s9)).filter(G), rasterizationParam: h7, objectIdToResourceId: /* @__PURE__ */ new Map() });
            continue;
          }
          if ("animated" === h7.resource.type) {
            f4.set(u5, { compiledOverrides: [], rasterizationParam: h7, objectIdToResourceId: /* @__PURE__ */ new Map() });
            continue;
          }
          const t4 = { type: "cim-rasterization-info", resource: h7.resource };
          o7[u5] = await s8.fetchResourceImmediate(t4) ?? null;
          break;
        }
        case "cim-marker-transform-param": {
          const { params: e7 } = h7;
          if (_(e7)) {
            const s9 = { compiledMarkerInfos: [] };
            await Promise.all(e7.map(async (e8) => {
              const t4 = { props: {} };
              for (const s10 in e8) if (P2(e8[s10])) {
                const o8 = await v2(r7, e8[s10]);
                t4.compiledExpressionMap || (t4.compiledExpressionMap = /* @__PURE__ */ new Map());
                const a6 = t4.compiledExpressionMap;
                o8 && a6.set(s10, o8);
              } else t4.props[s10] = e8[s10];
              s9.compiledMarkerInfos.push(t4);
            })), l6.set(u5, s9);
          } else o7[u5] = { type: "cim-marker-transform-info", infos: e7 };
          break;
        }
        case "animation-params": {
          const { params: e7 } = h7, t4 = s7(e7);
          if (_(t4)) {
            const e8 = await Promise.all(t4.map((e9) => c9(e9, r7)));
            d2.set(u5, { params: e8, propertyIdToResourceId: /* @__PURE__ */ new Map(), key: u5 });
          } else {
            const e8 = r5(t4), r8 = await s8.fetchResourceImmediate({ type: "animation-info", resource: e8 });
            null != r8 && "sprite" === r8.type && (o7[u5] = { dataRow: r8.rect.y, dataColumn: r8.rect.x });
          }
          break;
        }
        default:
          o7[u5] = h7;
      }
      else o7[u5] = h7;
    }
    return new _I(t3, o7, a5, i6, p2, f4, l6, d2);
  }
  constructor(e7, r7, s8, t3, a5, i6, n7, c10) {
    this.inputMeshParams = e7, this._resolvedMeshParams = r7, this._dynamicProperties = s8, this._dynamicEffectProperties = t3, this._dynamicPlacementProperties = a5, this._dynamicAsyncProperties = i6, this._dynamicTransformProperties = n7, this._dynamicAsyncAnimations = c10, this.evaluator = (e8) => e8, this._arcadeDependencies = /* @__PURE__ */ new Set();
    for (const m2 of this._expressions()) n3(this._arcadeDependencies, m2);
  }
  get hasDynamicProperties() {
    return !!(this._dynamicProperties.size || this._dynamicAsyncProperties.size || this._dynamicEffectProperties.size || this._dynamicTransformProperties.size || this._dynamicPlacementProperties.size || this._dynamicAsyncAnimations.size);
  }
  get evaluatedMeshParams() {
    return this._evaluatedMeshParams || (this._evaluatedMeshParams = this.evaluator(this._resolvedMeshParams)), this._evaluatedMeshParams;
  }
  enqueueRequest(e7, t3, o7) {
    for (const i6 of this._dynamicAsyncProperties.values()) {
      const c10 = a(i6.rasterizationParam.resource);
      "animated" === i6.rasterizationParam.resource.type && i6.rasterizationParam.resource.randomizeStartTime && (c10.primitiveName = "__RESERVED__PRIMITIVE__NAME__", c10.startGroup = o4(t3.getObjectId() || 0));
      for (const { primitiveName: e8, propertyName: s8, computed: a5, defaultValue: p2, valueExpressionInfo: f4 } of i6.compiledOverrides) try {
        const r7 = "animated" === i6.rasterizationParam.resource.type ? c10.primitiveName : e8;
        t2(c10, r7, s8, a5, t3, o7, p2);
      } catch (n7) {
        h6().errorOnce(new s("invalid-arcade-expression", `Encountered an error when evaluating the arcade expression '${f4 == null ? void 0 : f4.expression}' (primitive: '${e8}', property: '${s8}')`, n7));
      }
      const m2 = e7.enqueueRequest({ type: "cim-rasterization-info", resource: c10 });
      i6.objectIdToResourceId.set(t3.getObjectId(), m2);
    }
    for (const r7 of this._dynamicAsyncAnimations.values()) {
      const s8 = r7.params.map((e8) => f3(e8, t3, o7)).map(o6).map((e8) => e8.simplify()), a5 = a4(s8), n7 = e7.enqueueRequest({ type: "animation-info", resource: a5 });
      r7.propertyIdToResourceId.set(t3.getObjectId() + "." + r7.key, n7);
    }
  }
  evaluateMeshParams(e7, r7, s8) {
    for (const [t3, o7] of this._dynamicProperties.entries()) this._resolvedMeshParams[t3] = o7.computed.readWithDefault(r7, s8, o7.defaultValue);
    for (const [t3, o7] of this._dynamicPlacementProperties.entries()) for (const { computed: e8, defaultValue: a5, propertyName: i6 } of o7.compiledOverrides) {
      const n7 = e8.readWithDefault(r7, s8, a5);
      o7.placementInfo.placement[i6] = n7, this._resolvedMeshParams[t3] = o7.placementInfo.placement;
    }
    for (const [t3, o7] of this._dynamicEffectProperties.entries()) for (const e8 of o7.effects) {
      for (const { computed: t4, defaultValue: o8, propertyName: a5 } of e8.compiledOverrides) {
        const i6 = t4.readWithDefault(r7, s8, o8);
        e8.effect[a5] = i6;
      }
      this._resolvedMeshParams[t3] = o7.effects.map((e9) => e9.effect);
    }
    for (const [t3, o7] of this._dynamicTransformProperties.entries()) {
      const e8 = { type: "cim-marker-transform-info", infos: [] };
      for (const t4 of o7.compiledMarkerInfos) {
        const o8 = { ...t4.props };
        if (t4.compiledExpressionMap) for (const [e9, a5] of t4.compiledExpressionMap) {
          const t5 = a5.computed.readWithDefault(r7, s8, a5.defaultValue);
          o8[e9] = "number" == typeof t5 || "boolean" == typeof t5 ? t5 : a5.defaultValue;
        }
        e8.infos.push(o8);
      }
      this._resolvedMeshParams[t3] = e8;
    }
    for (const [t3, o7] of this._dynamicAsyncProperties.entries()) {
      const s9 = o7.objectIdToResourceId.get(r7.getObjectId());
      if (null == s9) continue;
      const a5 = e7.getResource(s9);
      this._resolvedMeshParams[t3] = a5;
    }
    for (const [t3, o7] of this._dynamicAsyncAnimations.entries()) {
      const s9 = o7.propertyIdToResourceId.get(r7.getObjectId() + "." + t3);
      if (null == s9) continue;
      const a5 = e7.getResource(s9);
      this._resolvedMeshParams[t3] = { dataRow: a5.rect.y, dataColumn: a5.rect.x };
    }
    return this._evaluatedMeshParams = this.evaluator(this._resolvedMeshParams), this.evaluatedMeshParams;
  }
  hasArcadeDependency(e7) {
    return this._arcadeDependencies.has(e7);
  }
  *_expressions() {
    for (const e7 of this._dynamicProperties.values()) yield e7.computed;
    for (const e7 of this._dynamicEffectProperties.values()) for (const r7 of e7.effects) for (const e8 of r7.compiledOverrides) yield e8.computed;
    for (const e7 of this._dynamicPlacementProperties.values()) for (const r7 of e7.compiledOverrides) yield r7.computed;
    for (const e7 of this._dynamicAsyncProperties.values()) for (const r7 of e7.compiledOverrides) yield r7.computed;
    for (const e7 of this._dynamicTransformProperties.values()) for (const r7 of e7.compiledMarkerInfos) if (null != r7.compiledExpressionMap) for (const e8 of r7.compiledExpressionMap.values()) yield e8.computed;
    for (const e7 of this._dynamicAsyncAnimations.values()) for (const r7 of e7.params) yield* l5(r7);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/MeshWriterRegistry.js
var F = class {
  async createMeshWriter(r7, e7, t3, i6) {
    const s8 = this._getMeshWriter(i6.techniqueType), l6 = await I3.create(r7, e7, i6.inputParams), a5 = new s8(i6.id, l6, i6.optionalAttributes, t3);
    return await a5.loadDependencies(), a5;
  }
  _getMeshWriter(W) {
    switch (W) {
      case e3.Fill:
        return c4;
      case e3.DotDensity:
        return s2;
      case e3.ComplexFill:
        return h2;
      case e3.PatternFill:
        return o3;
      case e3.GradientFill:
        return u3;
      case e3.OutlineFill:
        return h3;
      case e3.PatternOutlineFill:
        return c5;
      case e3.ComplexOutlineFill:
        return x;
      case e3.Marker:
        return I;
      case e3.PieChart:
        return s4;
      case e3.Text:
        return N;
      case e3.Line:
        return T;
      case e3.TexturedLine:
        return l3;
      case e3.GradientStroke:
        return l2;
      case e3.Heatmap:
        return i3;
      case e3.Label:
        return G2;
      case e3.AnimatedMarker:
        return c6;
      default:
        throw new Error("Internal Error: Mesh writer not in the registry");
    }
  }
};

export {
  r6 as r,
  F
};
//# sourceMappingURL=chunk-ZELCMZVS.js.map
