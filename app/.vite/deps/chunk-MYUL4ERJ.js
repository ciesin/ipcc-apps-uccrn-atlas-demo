import {
  e,
  t as t2
} from "./chunk-CEFHUHE4.js";
import {
  I,
  a as a4,
  d as d3,
  h as h2,
  l as l5,
  n,
  w as w3,
  y as y2
} from "./chunk-RDJPXK25.js";
import {
  I as I2
} from "./chunk-QPYSCM2R.js";
import {
  $,
  B,
  C,
  E,
  G,
  L,
  P,
  U,
  d as d2,
  f,
  g,
  k,
  m as m2,
  p,
  v as v2
} from "./chunk-HY3PTUEL.js";
import {
  st
} from "./chunk-F7TFMQ3A.js";
import {
  t
} from "./chunk-FKPHHMJX.js";
import {
  c,
  c2,
  m as m3,
  u2 as u4
} from "./chunk-GNFRPKN6.js";
import {
  S as S2,
  b as b2,
  h,
  j,
  w as w2,
  x,
  x2
} from "./chunk-6X7CIA5N.js";
import {
  s as s4
} from "./chunk-A4LAIXK6.js";
import {
  r as r4
} from "./chunk-FF7WZBMV.js";
import {
  C as C2
} from "./chunk-DH57DJ4C.js";
import {
  Z
} from "./chunk-FFVHLGAP.js";
import {
  i
} from "./chunk-AVY6RZDG.js";
import {
  K,
  M,
  d,
  u as u3
} from "./chunk-XEBZUAYT.js";
import {
  q
} from "./chunk-4WERUJEK.js";
import {
  Fe,
  Ie,
  be,
  we,
  xe
} from "./chunk-6REABBOQ.js";
import {
  o
} from "./chunk-HSI6V34N.js";
import {
  m,
  y
} from "./chunk-WZBMMIVS.js";
import {
  l as l3,
  r as r2
} from "./chunk-T7KGE6VP.js";
import {
  a as a3,
  l as l4,
  v
} from "./chunk-W633AKTD.js";
import {
  a as a2,
  u as u2
} from "./chunk-G34KEQQG.js";
import {
  r as r3
} from "./chunk-HP7OWCUK.js";
import {
  N,
  Q,
  s2 as s3
} from "./chunk-LTDNORB5.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  l2 as l,
  l3 as l2,
  s as s2,
  u2 as u
} from "./chunk-M6FNW7GP.js";
import {
  a,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  b,
  r,
  w
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/layers/graphics/data/attributeSupport.js
var s5 = new r4(50, 500);
var t3 = "unsupported-query";
var n2 = " as ";
var o2 = /* @__PURE__ */ new Set(["esriFieldTypeOID", "esriFieldTypeSmallInteger", "esriFieldTypeBigInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeLong"]);
var a5 = /* @__PURE__ */ new Set(["esriFieldTypeDate", "esriFieldTypeDateOnly", "esriFieldTypeTimeOnly", "esriFieldTypeTimestampOffset"]);
var l6 = /* @__PURE__ */ new Set(["esriFieldTypeString", "esriFieldTypeGUID", "esriFieldTypeGlobalID", ...o2, ...a5]);
function d4(i2, r6, n3 = {}) {
  const o3 = c3(r6, i2);
  if (!o3) {
    const n4 = s5.getError(r6, i2);
    throw new s(t3, "invalid SQL expression", { expression: r6, error: n4 });
  }
  const a6 = n3.expressionName || "expression";
  if (n3.validateStandardized && !o3.isStandardized) throw new s(t3, `${a6} is not standard`, { expression: r6 });
  if (n3.validateAggregate && !o3.isAggregate) throw new s(t3, `${a6} does not contain a valid aggregate function`, { expression: r6 });
  return o3.fieldNames;
}
function p2(e3, i2, r6, s7) {
  if (!r6) return true;
  const t5 = "where clause";
  return g2(e3, i2, d4(e3, r6, { validateStandardized: true, expressionName: t5 }), { expressionName: t5, query: s7 }), true;
}
function f2(i2, r6, s7, n3, o3) {
  if (!s7) return true;
  const a6 = "having clause", l7 = d4(i2, s7, { validateAggregate: true, expressionName: a6 });
  g2(i2, r6, l7, { expressionName: a6, query: o3 });
  const p4 = c3(s7, i2), f4 = p4 == null ? void 0 : p4.getExpressions().every((e3) => {
    var _a;
    const { aggregateType: r7, field: s8 } = e3, t5 = (_a = i2.get(s8)) == null ? void 0 : _a.name;
    return n3.some((e4) => {
      var _a2;
      const { onStatisticField: s9, statisticType: n4 } = e4, o4 = (_a2 = i2.get(s9)) == null ? void 0 : _a2.name;
      return o4 === t5 && n4.toLowerCase().trim() === r7;
    });
  });
  if (!f4) throw new s(t3, "expressions in having clause should also exist in outStatistics", { having: s7 });
  return true;
}
function c3(e3, i2) {
  return e3 ? s5.get(e3, i2) : null;
}
function u5(e3) {
  return /\((.*?)\)/.test(e3) ? e3 : e3.split(n2)[0];
}
function y3(e3) {
  return e3.split(n2)[1];
}
function g2(i2, r6, s7, n3 = {}) {
  const o3 = /* @__PURE__ */ new Map();
  if (m4(o3, i2, r6, n3.allowedFieldTypes ?? l6, s7), o3.size) {
    const i3 = n3.expressionName ?? "expression";
    throw new s(t3, `${i3} contains invalid or missing fields`, { errors: Array.from(o3.values()), query: n3.query });
  }
}
function m4(e3, i2, r6, s7, t5) {
  const n3 = t5.includes("*") ? [...r6, ...t5.filter((e4) => "*" !== e4)] : t5;
  for (const a6 of n3) {
    if (i2.get(a6)) T(e3, i2, r6, s7, a6);
    else try {
      const t6 = d4(i2, u5(a6), { validateStandardized: true });
      for (const n4 of t6) T(e3, i2, r6, s7, n4);
    } catch (o3) {
      e3.set(a6, { type: "expression-error", expression: a6, error: o3 });
    }
  }
}
function T(e3, i2, s7, t5, n3) {
  const o3 = i2.get(n3);
  o3 ? s7.has(o3.name) ? "all" !== t5 && false === (t5 == null ? void 0 : t5.has(o3.type)) && e3.set(n3, { type: "invalid-type", fieldName: o3.name, fieldType: i.fromJSON(o3.type), allowedFieldTypes: Array.from(t5, (e4) => i.fromJSON(e4)) }) : e3.set(n3, { type: "missing-field", fieldName: o3.name }) : e3.set(n3, { type: "invalid-field", fieldName: n3 });
}

// node_modules/@arcgis/core/layers/graphics/data/QueryEngineCache.js
var t4 = 5;
var e2 = class {
  constructor() {
    this._storage = /* @__PURE__ */ new Map(), this._purgeInterval = t4, this._sweep = () => {
      if (this._timer = void 0, !this._storage) return;
      const t5 = 1e3 * this._purgeInterval, e3 = performance.now() - t5;
      for (const [s7, r6] of this._storage) {
        if (!(r6.time < e3)) return void (this._storage.size > 0 && (this._timer = setTimeout(this._sweep, t5)));
        this._storage.delete(s7);
      }
    };
  }
  destroy() {
    var _a;
    (_a = this._storage) == null ? void 0 : _a.clear(), this._storage = null, clearTimeout(this._timer);
  }
  put(t5, e3) {
    var _a;
    (_a = this._storage) == null ? void 0 : _a.set(t5, new r5(e3)), this._scheduleSweep();
  }
  get(t5) {
    var _a, _b, _c;
    const e3 = (_a = this._storage) == null ? void 0 : _a.get(t5);
    if (e3) return (_b = this._storage) == null ? void 0 : _b.delete(t5), e3.time = performance.now(), (_c = this._storage) == null ? void 0 : _c.set(t5, e3), e3.items;
  }
  clear() {
    var _a;
    (_a = this._storage) == null ? void 0 : _a.clear();
  }
  _scheduleSweep() {
    this._storage && (this._timer ?? (this._timer = setTimeout(this._sweep, 1e3 * this._purgeInterval)));
  }
  get test() {
  }
};
var s6 = 0;
var r5 = class {
  constructor(t5) {
    this.items = t5, this.time = performance.now(), this.id = s6++;
  }
};

// node_modules/@arcgis/core/layers/graphics/data/AttributesBuilder.js
var c4 = class {
  constructor(s7, a6, l7) {
    this._fieldDataCache = /* @__PURE__ */ new Map(), this._returnDistinctMap = /* @__PURE__ */ new Map(), this.returnDistinctValues = s7.returnDistinctValues ?? false, this.fieldsIndex = l7, this.featureAdapter = a6;
    const r6 = s7.outFields;
    if (r6 && !r6.includes("*")) {
      this.outFields = r6;
      let s8 = 0;
      for (const a7 of r6) {
        const r7 = u5(a7), n3 = this.fieldsIndex.get(r7), u7 = n3 ? null : c3(r7, l7), o3 = n3 ? n3.name : y3(a7) || "FIELD_EXP_" + s8++;
        this._fieldDataCache.set(a7, { alias: o3, clause: u7 });
      }
    }
  }
  countDistinctValues(t5) {
    return this.returnDistinctValues ? (t5.forEach((t6) => this.getAttributes(t6)), this._returnDistinctMap.size) : t5.length;
  }
  getAttributes(t5) {
    const e3 = this._processAttributesForOutFields(t5);
    return this._processAttributesForDistinctValues(e3);
  }
  getFieldValue(t5, i2, s7) {
    var _a;
    const a6 = s7 ? s7.name : i2;
    let l7 = null;
    return this._fieldDataCache.has(a6) ? l7 = (_a = this._fieldDataCache.get(a6)) == null ? void 0 : _a.clause : s7 || (l7 = c3(i2, this.fieldsIndex), this._fieldDataCache.set(a6, { alias: a6, clause: l7 })), s7 ? this.featureAdapter.getAttribute(t5, a6) : l7 == null ? void 0 : l7.calculateValue(t5, this.featureAdapter);
  }
  getDataValues(t5, e3, i2 = true) {
    const s7 = e3.normalizationType, d6 = e3.normalizationTotal, c6 = this.fieldsIndex.get(e3.field), h4 = be(c6) || we(c6), f4 = xe(c6);
    return t5.map((t6) => {
      let a6 = e3.field && this.getFieldValue(t6, e3.field, this.fieldsIndex.get(e3.field));
      if (e3.field2 ? (a6 = `${m2(a6)}${e3.fieldDelimiter}${m2(this.getFieldValue(t6, e3.field2, this.fieldsIndex.get(e3.field2)))}`, e3.field3 && (a6 = `${a6}${e3.fieldDelimiter}${m2(this.getFieldValue(t6, e3.field3, this.fieldsIndex.get(e3.field3)))}`)) : "string" == typeof a6 && i2 && (h4 ? a6 = a6 ? new Date(a6).getTime() : null : f4 && (a6 = a6 ? I2(a6) : null)), s7 && Number.isFinite(a6)) {
        const i3 = "field" === s7 && e3.normalizationField ? this.getFieldValue(t6, e3.normalizationField, this.fieldsIndex.get(e3.normalizationField)) : null;
        a6 = B(a6, s7, i3, d6);
      }
      return a6;
    });
  }
  async getExpressionValues(t5, e3, i2, a6, l7) {
    const { arcadeUtils: r6 } = await o(), n3 = r6.hasGeometryOperations(e3);
    n3 && await r6.enableGeometryOperations();
    const u7 = r6.createFunction(e3), o3 = r6.getViewInfo(i2), c6 = { fields: this.fieldsIndex.fields };
    return t5.map((t6) => {
      const e4 = { attributes: this.featureAdapter.getAttributes(t6), layer: c6, geometry: n3 ? { ...a4(a6.geometryType, a6.hasZ, a6.hasM, this.featureAdapter.getGeometry(t6)), spatialReference: i2 == null ? void 0 : i2.spatialReference } : null }, d6 = r6.createExecContext(e4, o3, l7);
      return r6.executeFunction(u7, d6);
    });
  }
  validateItem(t5, i2) {
    var _a, _b;
    return this._fieldDataCache.has(i2) || this._fieldDataCache.set(i2, { alias: i2, clause: c3(i2, this.fieldsIndex) }), ((_b = (_a = this._fieldDataCache.get(i2)) == null ? void 0 : _a.clause) == null ? void 0 : _b.testFeature(t5, this.featureAdapter)) ?? false;
  }
  validateItems(t5, i2) {
    var _a, _b;
    return this._fieldDataCache.has(i2) || this._fieldDataCache.set(i2, { alias: i2, clause: c3(i2, this.fieldsIndex) }), ((_b = (_a = this._fieldDataCache.get(i2)) == null ? void 0 : _a.clause) == null ? void 0 : _b.testSet(t5, this.featureAdapter)) ?? false;
  }
  _processAttributesForOutFields(t5) {
    const e3 = this.outFields;
    if (!(e3 == null ? void 0 : e3.length)) return this.featureAdapter.getAttributes(t5);
    const i2 = {};
    for (const s7 of e3) {
      const { alias: e4, clause: a6 } = this._fieldDataCache.get(s7);
      i2[e4] = a6 ? a6.calculateValue(t5, this.featureAdapter) : this.featureAdapter.getAttribute(t5, e4);
    }
    return i2;
  }
  _processAttributesForDistinctValues(t5) {
    if (null == t5 || !this.returnDistinctValues) return t5;
    const e3 = this.outFields, i2 = [];
    if (e3) for (const l7 of e3) {
      const { alias: e4 } = this._fieldDataCache.get(l7);
      i2.push(t5[e4]);
    }
    else for (const l7 in t5) i2.push(t5[l7]);
    const s7 = `${(e3 || ["*"]).join(",")}=${i2.join(",")}`;
    let a6 = this._returnDistinctMap.get(s7) || 0;
    return this._returnDistinctMap.set(s7, ++a6), a6 > 1 ? null : t5;
  }
};

// node_modules/@arcgis/core/layers/graphics/data/QueryEngineResult.js
var G2 = "bin";
var C3 = class {
  constructor(e3, t5, i2) {
    this.items = e3, this.query = t5, this.geometryType = i2.geometryType, this.hasM = i2.hasM, this.hasZ = i2.hasZ, this.fieldsIndex = i2.fieldsIndex, this.objectIdField = i2.objectIdField, this.spatialReference = i2.spatialReference, this.featureAdapter = i2.featureAdapter;
  }
  get size() {
    return this.items.length;
  }
  createQueryResponseForCount() {
    const e3 = new c4(this.query, this.featureAdapter, this.fieldsIndex);
    if (!this.query.outStatistics) return e3.countDistinctValues(this.items);
    const { groupByFieldsForStatistics: t5, having: i2, outStatistics: s7 } = this.query, a6 = t5 == null ? void 0 : t5.length;
    if (!!!a6) return 1;
    const r6 = /* @__PURE__ */ new Map(), n3 = /* @__PURE__ */ new Map(), o3 = /* @__PURE__ */ new Set();
    for (const l7 of s7) {
      const { statisticType: s8 } = l7, a7 = "exceedslimit" !== s8 ? l7.onStatisticField : void 0;
      if (!n3.has(a7)) {
        const i3 = [];
        for (const s9 of t5) {
          const t6 = this._getAttributeValues(e3, s9, this.items, r6);
          i3.push(t6);
        }
        n3.set(a7, this._calculateUniqueValues(i3, this.items, e3.returnDistinctValues));
      }
      const u7 = n3.get(a7);
      for (const t6 in u7) {
        const { data: s9, items: a8 } = u7[t6], r7 = s9.join(",");
        i2 && !e3.validateItems(a8, i2) || o3.add(r7);
      }
    }
    return o3.size;
  }
  async createQueryResponse() {
    let e3;
    if (this.query.outStatistics) {
      e3 = this.query.outStatistics.some((e4) => "exceedslimit" === e4.statisticType) ? this._createExceedsLimitQueryResponse() : await this._createStatisticsQueryResponse(this.query, this.items);
    } else e3 = this._createFeatureQueryResponse(this.query);
    if (this.query.returnQueryGeometry) {
      const t5 = this.query.geometry;
      N(this.query.outSR) && !s3(t5.spatialReference, this.query.outSR) ? e3.queryGeometry = h2({ spatialReference: this.query.outSR, ...j(t5, t5.spatialReference, this.query.outSR) }) : e3.queryGeometry = h2({ spatialReference: this.query.outSR, ...t5 });
    }
    return e3;
  }
  createSnappingResponse(e3, t5) {
    const i2 = this.featureAdapter, s7 = O(this.hasZ, this.hasM), { point: a6, mode: r6 } = e3, n3 = "number" == typeof e3.distance ? e3.distance : e3.distance.x, o3 = "number" == typeof e3.distance ? e3.distance : e3.distance.y, l7 = { candidates: [] }, u7 = "esriGeometryPolygon" === this.geometryType, c6 = "esriGeometryPolyline" === this.geometryType, m6 = this._getPointCreator(r6, this.spatialReference, t5), d6 = new H(null, 0), h4 = new H(null, 0), p4 = { x: 0, y: 0, z: 0 };
    for (const g3 of this.items) {
      const t6 = i2.getGeometry(g3);
      if (null == t6) continue;
      const { coords: r7 } = t6, x3 = t6.isPoint ? Q2 : t6.lengths;
      if (d6.coords = r7, h4.coords = r7, e3.returnEdge) {
        let e4 = 0;
        for (let t7 = 0; t7 < x3.length; t7++) {
          const r8 = x3[t7], c7 = e4;
          for (let t8 = 0; t8 < r8; t8++, e4 += s7) {
            if (!u7 && t8 === r8 - 1) continue;
            const y5 = d6;
            y5.coordsIndex = e4;
            const x4 = h4;
            x4.coordsIndex = t8 === r8 - 1 ? c7 : e4 + s7;
            const I3 = p4;
            if (!E2(p4, a6, y5, x4)) continue;
            const T2 = (a6.x - I3.x) / n3, F2 = (a6.y - I3.y) / o3, _ = T2 * T2 + F2 * F2;
            _ <= 1 && l7.candidates.push(e(i2.getObjectId(g3), m6(I3), Math.sqrt(_), m6(y5), m6(x4)));
          }
        }
      }
      if ("all" === e3.vertexMode) {
        let e4 = 0;
        for (let t7 = 0; t7 < x3.length; t7++) {
          const r8 = x3[t7], c7 = e4, p5 = h4;
          p5.coordsIndex = c7;
          for (let t8 = 0; t8 < r8; t8++, e4 += s7) {
            const s8 = d6;
            if (s8.coordsIndex = e4, u7 && t8 === r8 - 1 && s8.x === p5.x && s8.y === p5.y) continue;
            const c8 = (a6.x - s8.x) / n3, h5 = (a6.y - s8.y) / o3, f4 = c8 * c8 + h5 * h5;
            f4 <= 1 && l7.candidates.push(t2(i2.getObjectId(g3), m6(s8), Math.sqrt(f4)));
          }
        }
      } else if (c6 && "ends" === e3.vertexMode) {
        let e4 = 0;
        const t7 = [];
        for (let i3 = 0; i3 < x3.length; i3++) {
          t7.push(e4);
          const a7 = x3[i3];
          e4 += a7 * s7, !u7 && a7 > 1 && t7.push(e4 - s7);
        }
        for (const s8 of t7) {
          const e5 = d6;
          e5.coordsIndex = s8;
          const t8 = (a6.x - e5.x) / n3, r8 = (a6.y - e5.y) / o3, u8 = t8 * t8 + r8 * r8;
          u8 <= 1 && l7.candidates.push(t2(i2.getObjectId(g3), m6(e5), Math.sqrt(u8)));
        }
      }
    }
    return l7.candidates.sort((e4, t6) => e4.distance - t6.distance), l7;
  }
  _getPointCreator(e3, t5, i2) {
    const s7 = null == i2 || s3(t5, i2) ? (e4) => e4 : (e4) => j(e4, t5, i2), { hasZ: a6 } = this, r6 = 0;
    return "3d" === e3 ? a6 ? ({ x: e4, y: t6, z: i3 }) => s7({ x: e4, y: t6, z: i3 }) : ({ x: e4, y: t6 }) => s7({ x: e4, y: t6, z: r6 }) : ({ x: e4, y: t6 }) => s7({ x: e4, y: t6 });
  }
  async createSummaryStatisticsResponse(e3) {
    const { field: t5, valueExpression: i2, normalizationField: s7, normalizationType: a6, normalizationTotal: r6, minValue: n3, maxValue: o3, scale: l7, timeZone: u7, outStatisticTypes: c6 } = e3, m6 = this.fieldsIndex.get(t5), d6 = Ie(m6) || be(m6) || we(m6), h4 = await this._getDataValues({ field: t5, valueExpression: i2, normalizationField: s7, normalizationType: a6, normalizationTotal: r6, scale: l7, timeZone: u7 }, this.items), p4 = d2({ normalizationType: a6, normalizationField: s7, minValue: n3, maxValue: o3 }), f4 = { value: 0.5, fieldType: m6 == null ? void 0 : m6.type }, y5 = Fe(m6) ? f({ values: h4, supportsNullCount: p4, percentileParams: f4, outStatisticTypes: c6 }) : p({ values: h4, minValue: n3, maxValue: o3, useSampleStdDev: !a6, supportsNullCount: p4, percentileParams: f4, outStatisticTypes: c6 });
    return C(y5, c6, d6);
  }
  async createUniqueValuesResponse(e3) {
    const { field: t5, valueExpression: i2, domains: s7, returnAllCodedValues: a6, scale: r6, timeZone: n3 } = e3, o3 = await this._getDataValues({ field: t5, field2: e3.field2, field3: e3.field3, fieldDelimiter: e3.fieldDelimiter, valueExpression: i2, scale: r6, timeZone: n3 }, this.items, false), l7 = k(o3);
    return $(l7, s7, a6, e3.fieldDelimiter);
  }
  async createClassBreaksResponse(e3) {
    const { field: t5, valueExpression: i2, normalizationField: s7, normalizationType: a6, normalizationTotal: r6, classificationMethod: n3, standardDeviationInterval: o3, minValue: l7, maxValue: u7, numClasses: c6, scale: m6, timeZone: d6 } = e3, h4 = await this._getDataValues({ field: t5, valueExpression: i2, normalizationField: s7, normalizationType: a6, normalizationTotal: r6, scale: m6, timeZone: d6 }, this.items), p4 = E(h4, { field: t5, normalizationField: s7, normalizationType: a6, normalizationTotal: r6, classificationMethod: n3, standardDeviationInterval: o3, minValue: l7, maxValue: u7, numClasses: c6 });
    return P(p4, n3);
  }
  async createHistogramResponse(e3) {
    const { field: t5, valueExpression: i2, normalizationField: s7, normalizationType: a6, normalizationTotal: r6, classificationMethod: n3, standardDeviationInterval: o3, minValue: l7, maxValue: u7, numBins: c6, scale: m6, timeZone: d6 } = e3, h4 = await this._getDataValues({ field: t5, valueExpression: i2, normalizationField: s7, normalizationType: a6, normalizationTotal: r6, scale: m6, timeZone: d6 }, this.items);
    return U(h4, { field: t5, normalizationField: s7, normalizationType: a6, normalizationTotal: r6, classificationMethod: n3, standardDeviationInterval: o3, minValue: l7, maxValue: u7, numBins: c6 });
  }
  _sortFeatures(e3, t5, i2) {
    if (e3.length > 1 && (t5 == null ? void 0 : t5.length)) for (const s7 of t5.slice().reverse()) {
      const t6 = s7.split(" "), a6 = t6[0], r6 = this.fieldsIndex.get(a6), n3 = !!t6[1] && "desc" === t6[1].toLowerCase(), o3 = g(r6 == null ? void 0 : r6.type, n3);
      e3.sort((e4, t7) => {
        const s8 = i2(e4, a6, r6), n4 = i2(t7, a6, r6);
        return o3(s8, n4);
      });
    }
  }
  _createFeatureQueryResponse(e3) {
    const { items: t5, geometryType: i2, hasM: s7, hasZ: a6, objectIdField: r6, spatialReference: o3 } = this, { outFields: l7, outSR: u7, quantizationParameters: m6, resultRecordCount: d6, resultOffset: h4, returnZ: p4, returnM: f4 } = e3, y5 = null != d6 && t5.length > (h4 || 0) + d6, g3 = l7 && (l7.includes("*") ? [...this.fieldsIndex.fields] : l7.map((e4) => this.fieldsIndex.get(e4)));
    return { exceededTransferLimit: y5, features: this._createFeatures(e3, t5), fields: g3, geometryType: i2, hasM: s7 && f4, hasZ: a6 && p4, objectIdFieldName: r6, spatialReference: h2(u7 || o3), transform: m6 && s4(m6) || null };
  }
  _createFeatures(e3, t5) {
    const i2 = new c4(e3, this.featureAdapter, this.fieldsIndex), { hasM: s7, hasZ: a6 } = this, { orderByFields: r6, quantizationParameters: o3, returnGeometry: l7, returnCentroid: c6, maxAllowableOffset: h4, resultOffset: p4, resultRecordCount: f4, returnZ: y5 = false, returnM: g3 = false } = e3, x3 = a6 && y5, I3 = s7 && g3;
    let T2 = [], F2 = 0;
    const _ = [...t5];
    if (this._sortFeatures(_, r6, (e4, t6, s8) => i2.getFieldValue(e4, t6, s8)), this.geometryType && (l7 || c6)) {
      const e4 = s4(o3) ?? void 0, t6 = "esriGeometryPolygon" === this.geometryType || "esriGeometryPolyline" === this.geometryType;
      if (l7 && !c6) for (const s8 of _) {
        const a7 = this.featureAdapter.getGeometry(s8), r7 = { attributes: i2.getAttributes(s8), geometry: a4(this.geometryType, this.hasZ, this.hasM, a7, h4, e4, x3, I3) };
        t6 && a7 && !r7.geometry && (r7.centroid = y2(this, this.featureAdapter.getCentroid(s8, this), e4)), T2[F2++] = r7;
      }
      else if (!l7 && c6) for (const s8 of _) T2[F2++] = { attributes: i2.getAttributes(s8), centroid: y2(this, this.featureAdapter.getCentroid(s8, this), e4) };
      else for (const s8 of _) T2[F2++] = { attributes: i2.getAttributes(s8), centroid: y2(this, this.featureAdapter.getCentroid(s8, this), e4), geometry: a4(this.geometryType, this.hasZ, this.hasM, this.featureAdapter.getGeometry(s8), h4, e4, x3, I3) };
    } else for (const n3 of _) {
      const e4 = i2.getAttributes(n3);
      e4 && (T2[F2++] = { attributes: e4 });
    }
    const V2 = p4 || 0;
    if (null != f4) {
      const e4 = V2 + f4;
      T2 = T2.slice(V2, Math.min(T2.length, e4));
    }
    return T2;
  }
  _createExceedsLimitQueryResponse() {
    let e3 = false, t5 = Number.POSITIVE_INFINITY, i2 = Number.POSITIVE_INFINITY, s7 = Number.POSITIVE_INFINITY;
    for (const a6 of this.query.outStatistics ?? []) if ("exceedslimit" === a6.statisticType) {
      t5 = null != a6.maxPointCount ? a6.maxPointCount : Number.POSITIVE_INFINITY, i2 = null != a6.maxRecordCount ? a6.maxRecordCount : Number.POSITIVE_INFINITY, s7 = null != a6.maxVertexCount ? a6.maxVertexCount : Number.POSITIVE_INFINITY;
      break;
    }
    if ("esriGeometryPoint" === this.geometryType) e3 = this.items.length > t5;
    else if (this.items.length > i2) e3 = true;
    else {
      const t6 = O(this.hasZ, this.hasM), i3 = this.featureAdapter;
      e3 = this.items.reduce((e4, t7) => {
        const s8 = i3.getGeometry(t7);
        return e4 + (null != s8 && s8.coords.length || 0);
      }, 0) / t6 > s7;
    }
    return { fields: [{ name: "exceedslimit", type: "esriFieldTypeInteger", alias: "exceedslimit", sqlType: "sqlTypeInteger", domain: null, defaultValue: null }], features: [{ attributes: { exceedslimit: Number(e3) } }] };
  }
  async _createStatisticsQueryResponse(e3, t5, i2 = { attributes: {} }) {
    var _a;
    const s7 = [], a6 = /* @__PURE__ */ new Map(), r6 = /* @__PURE__ */ new Map(), n3 = /* @__PURE__ */ new Map(), o3 = /* @__PURE__ */ new Map(), l7 = new c4(e3, this.featureAdapter, this.fieldsIndex), c6 = e3.outStatistics, { groupByFieldsForStatistics: m6, having: d6, orderByFields: h4, resultRecordCount: p4 } = e3, f4 = m6 == null ? void 0 : m6.length, y5 = !!f4, g3 = y5 ? m6[0] : null, x3 = y5 && !this.fieldsIndex.get(g3);
    for (const u7 of c6 ?? []) {
      const { outStatisticFieldName: e4, statisticType: c7 } = u7, h5 = u7, p5 = "exceedslimit" !== c7 ? u7.onStatisticField : void 0, I4 = "percentile_disc" === c7 || "percentile_cont" === c7, F2 = "EnvelopeAggregate" === c7 || "CentroidAggregate" === c7 || "ConvexHullAggregate" === c7, _ = y5 && 1 === f4 && (p5 === g3 || x3) && "count" === c7;
      if (y5) {
        if (!n3.has(p5)) {
          const e5 = [];
          for (const i4 of m6) {
            const s9 = this._getAttributeValues(l7, i4, t5, a6);
            e5.push(s9);
          }
          n3.set(p5, this._calculateUniqueValues(e5, t5, !F2 && l7.returnDistinctValues));
        }
        const i3 = n3.get(p5);
        if (!i3) continue;
        const s8 = Object.keys(i3);
        for (const r7 of s8) {
          const { count: s9, data: n4, items: u8, itemPositions: c8 } = i3[r7], f5 = n4.join(",");
          if (!d6 || l7.validateItems(u8, d6)) {
            const i4 = o3.get(f5) || { attributes: {} };
            if (F2) {
              i4.aggregateGeometries || (i4.aggregateGeometries = {});
              const { aggregateGeometries: e5, outStatisticFieldName: t6 } = await this._getAggregateGeometry(h5, u8);
              i4.aggregateGeometries[t6] = e5;
            } else {
              let r9 = null;
              if (_) r9 = s9;
              else {
                const e5 = this._getAttributeValues(l7, p5, t5, a6), i5 = c8.map((t6) => e5[t6]);
                r9 = I4 && "statisticParameters" in h5 ? this._getPercentileValue(h5, i5) : this._getStatisticValue(h5, i5, null, l7.returnDistinctValues);
              }
              i4.attributes[e4] = r9;
            }
            let r8 = 0;
            m6.forEach((e5, t6) => i4.attributes[this.fieldsIndex.get(e5) ? e5 : "EXPR_" + ++r8] = n4[t6]), o3.set(f5, i4);
          }
        }
      } else if (F2) {
        i2.aggregateGeometries || (i2.aggregateGeometries = {});
        const { aggregateGeometries: e5, outStatisticFieldName: s8 } = await this._getAggregateGeometry(h5, t5);
        i2.aggregateGeometries[s8] = e5;
      } else {
        const s8 = this._getAttributeValues(l7, p5, t5, a6);
        i2.attributes[e4] = I4 && "statisticParameters" in h5 ? this._getPercentileValue(h5, s8) : this._getStatisticValue(h5, s8, r6, l7.returnDistinctValues);
      }
      const V2 = "min" !== c7 && "max" !== c7 || !Fe(this.fieldsIndex.get(p5)) && !this._isAnyDateField(p5) ? null : (_a = this.fieldsIndex.get(p5)) == null ? void 0 : _a.type;
      s7.push({ name: e4, alias: e4, type: V2 || "esriFieldTypeDouble" });
    }
    const I3 = y5 ? Array.from(o3.values()) : [i2];
    return this._sortFeatures(I3, h4, (e4, t6) => e4.attributes[t6]), p4 && (I3.length = Math.min(p4, I3.length)), { fields: s7, features: I3 };
  }
  _isAnyDateField(e3) {
    const t5 = this.fieldsIndex.get(e3);
    return Ie(t5) || be(t5) || we(t5) || xe(t5);
  }
  async _getAggregateGeometry(e3, t5) {
    const { convexHull: n3, union: o3 } = await import("./geometryEngineJSON-LBL23444.js"), { statisticType: l7, outStatisticFieldName: u7 } = e3, { featureAdapter: c6, spatialReference: d6, geometryType: h4, hasZ: p4, hasM: f4 } = this, y5 = t5.map((e4) => a4(h4, p4, f4, c6.getGeometry(e4))), g3 = n3(d6, y5, true)[0], x3 = { aggregateGeometries: null, outStatisticFieldName: null };
    if ("EnvelopeAggregate" === l7) {
      const e4 = g3 ? v(g3) : l4(o3(d6, y5));
      x3.aggregateGeometries = { ...e4, spatialReference: d6 }, x3.outStatisticFieldName = u7 || "extent";
    } else if ("CentroidAggregate" === l7) {
      const e4 = g3 ? l3(g3) : r2(l4(o3(d6, y5)));
      x3.aggregateGeometries = { x: e4[0], y: e4[1], spatialReference: d6 }, x3.outStatisticFieldName = u7 || "centroid";
    } else "ConvexHullAggregate" === l7 && (x3.aggregateGeometries = g3, x3.outStatisticFieldName = u7 || "convexHull");
    return x3;
  }
  _getStatisticValue(e3, t5, i2, s7) {
    const { onStatisticField: a6, statisticType: r6 } = e3;
    let n3 = null;
    n3 = (i2 == null ? void 0 : i2.has(a6)) ? i2.get(a6) : Fe(this.fieldsIndex.get(a6)) || this._isAnyDateField(a6) ? f({ values: t5, returnDistinct: s7 }) : p({ values: s7 ? [...new Set(t5)] : t5, minValue: null, maxValue: null, useSampleStdDev: true }), i2 && i2.set(a6, n3);
    return n3["var" === r6 ? "variance" : r6];
  }
  _getPercentileValue(e3, t5) {
    const { onStatisticField: i2, statisticParameters: s7, statisticType: a6 } = e3, { value: r6, orderBy: n3 } = s7, o3 = this.fieldsIndex.get(i2);
    return v2(t5, { value: r6, orderBy: n3, fieldType: o3 == null ? void 0 : o3.type, isDiscrete: "percentile_disc" === a6 });
  }
  _getAttributeValues(e3, t5, i2, s7) {
    if (s7.has(t5)) return s7.get(t5);
    const a6 = this.fieldsIndex.get(t5), r6 = i2.map((i3) => e3.getFieldValue(i3, t5, a6));
    return s7.set(t5, r6), r6;
  }
  _calculateUniqueValues(e3, t5, i2) {
    const s7 = {}, a6 = t5.length;
    for (let r6 = 0; r6 < a6; r6++) {
      const a7 = t5[r6], n3 = [];
      for (const t6 of e3) n3.push(t6[r6]);
      const o3 = n3.join(",");
      null == s7[o3] ? s7[o3] = { count: 1, data: n3, items: [a7], itemPositions: [r6] } : (i2 || s7[o3].count++, s7[o3].items.push(a7), s7[o3].itemPositions.push(r6));
    }
    return s7;
  }
  async _getDataValues(t5, i2, s7 = true) {
    const a6 = new c4(this.query, this.featureAdapter, this.fieldsIndex), { valueExpression: r6, scale: n3, timeZone: o3 } = t5;
    return r6 ? a6.getExpressionValues(i2, r6, { viewingMode: "map", scale: n3, spatialReference: this.query.outSR || this.spatialReference }, { geometryType: this.geometryType, hasZ: this.hasZ, hasM: this.hasM }, o3) : a6.getDataValues(i2, a(t5), s7);
  }
  async _calculateHistogramBins(e3, t5, i2) {
    if (null == t5.min && null == t5.max) return [];
    const s7 = t5.intervals, a6 = t5.min ?? 0, r6 = t5.max ?? 0, n3 = s7.map(([e4, t6]) => ({ minValue: e4, maxValue: t6, count: 0, items: [] }));
    for (let o3 = 0; o3 < e3.length; o3++) {
      const t6 = e3[o3], l7 = i2[o3];
      if (null != t6 && t6 >= a6 && t6 <= r6) {
        const e4 = L(s7, t6);
        e4 > -1 && (n3[e4].count++, n3[e4].items.push(l7));
      }
    }
    return n3;
  }
  async createQueryBinsResponse(e3) {
    var _a;
    const t5 = (_a = e3.bin) == null ? void 0 : _a.splitBy;
    if (!t5) return this._createBinsResponse(e3);
    const { value: i2, outAlias: s7, valueType: a6 } = t5, r6 = [], n3 = [{ name: s7 ?? i2, alias: s7 ?? i2, type: a6 ?? "esriFieldTypeString" }, { name: G2, alias: G2, type: "esriFieldTypeInteger" }], o3 = new c4(e3, this.featureAdapter, this.fieldsIndex), l7 = /* @__PURE__ */ new Map(), c6 = [...this.items];
    this._sortFeatures(c6, [i2], (e4, t6, i3) => o3.getFieldValue(e4, t6, i3));
    const m6 = this._getAttributeValues(o3, i2, c6, l7), d6 = this._calculateUniqueValues([m6], c6, o3.returnDistinctValues);
    for (const u7 in d6) {
      const { items: t6 } = d6[u7], a7 = await this._createBinsResponse(e3, t6);
      if (r6.push(...a7.features.map((e4) => ({ ...e4, attributes: { ...e4.attributes, [s7 ?? i2]: u7 } }))), a7.fields) for (const e4 of a7.fields) n3.some((t7) => t7.name === e4.name) || n3.push(e4);
    }
    return { fields: n3, features: r6 };
  }
  async _createBinsResponse(e3, t5) {
    const i2 = e3.bin;
    switch (t5 = t5 ?? this.items, i2.type) {
      case "autoIntervalBin":
        return this._createAutoIntervalBinsResponse(c.fromJSON(i2), e3, t5);
      case "dateBin":
        return this._createDateBinsResponse(u4.fromJSON(i2), e3, t5);
      case "fixedBoundariesBin":
        return this._createFixedBoundariesBinsResponse(m3.fromJSON(i2), e3, t5);
      case "fixedIntervalBin":
        return this._createFixedIntervalBinsResponse(c2.fromJSON(i2), e3, t5);
    }
  }
  async _createAutoIntervalBinsResponse(e3, t5, i2) {
    var _a;
    const { field: s7, normalizationField: a6, numBins: r6, normalizationType: n3, normalizationTotal: o3, start: l7, end: u7 } = e3, c6 = await this._getDataValues({ field: e3.field, normalizationField: e3.normalizationField, normalizationType: e3.normalizationType, normalizationTotal: e3.normalizationTotal, timeZone: (_a = t5.outTimeReference) == null ? void 0 : _a.ianaTimeZone }, i2), m6 = G(c6, { field: s7, normalizationField: a6, normalizationType: n3, normalizationTotal: o3, numBins: r6, minValue: h(l7, false), maxValue: h(u7, false) }), d6 = await this._calculateHistogramBins(c6, m6, i2);
    return this._createFeaturesFromHistogramBins(d6, t5);
  }
  async _createDateBinsResponse(e3, i2, s7) {
    var _a;
    const { field: a6, interval: r6, start: n3, end: o3 } = e3, l7 = r6.unit, u7 = "quarters" === l7 ? 3 * r3.months : r3[l7], c6 = r6.value * u7 / r3.milliseconds, m6 = await this._getDataValues({ field: e3.field, timeZone: (_a = i2.outTimeReference) == null ? void 0 : _a.ianaTimeZone }, s7), d6 = xe(this.fieldsIndex.get(a6)), h4 = G(m6, { field: a6, classificationMethod: "defined-interval", definedInterval: c6, minValue: h(n3, d6), maxValue: h(o3, d6) }, true), f4 = await this._calculateHistogramBins(m6, h4, s7);
    return this._createFeaturesFromHistogramBins(f4, i2);
  }
  async _createFixedBoundariesBinsResponse(e3, t5, i2) {
    var _a;
    const { field: s7 } = e3, a6 = await this._getDataValues({ field: s7, timeZone: (_a = t5.outTimeReference) == null ? void 0 : _a.ianaTimeZone }, i2), r6 = xe(this.fieldsIndex.get(s7)), n3 = e3.boundaries.map((e4) => h(e4, r6)).sort((e4, t6) => e4 - t6), o3 = [];
    for (let c6 = 0; c6 < n3.length - 1; c6++) o3.push([n3[c6], n3[c6 + 1]]);
    const l7 = { intervals: o3, min: n3.at(0), max: n3.at(-1) }, u7 = await this._calculateHistogramBins(a6, l7, i2);
    return this._createFeaturesFromHistogramBins(u7, t5);
  }
  async _createFixedIntervalBinsResponse(e3, t5, i2) {
    var _a;
    const { field: s7, interval: a6, start: r6, end: n3 } = e3, o3 = await this._getDataValues({ field: e3.field, normalizationField: e3.normalizationField, normalizationType: e3.normalizationType, normalizationTotal: e3.normalizationTotal, timeZone: (_a = t5.outTimeReference) == null ? void 0 : _a.ianaTimeZone }, i2), l7 = xe(this.fieldsIndex.get(s7)), u7 = G(o3, { field: s7, classificationMethod: "defined-interval", definedInterval: a6, minValue: h(r6, l7), maxValue: h(n3, l7) }, true), c6 = await this._calculateHistogramBins(o3, u7, i2);
    return this._createFeaturesFromHistogramBins(c6, t5);
  }
  async _createFeaturesFromHistogramBins(e3, t5) {
    var _a, _b, _c, _d, _e;
    const { upperBoundaryAlias: i2, lowerBoundaryAlias: s7 } = t5, a6 = s7 || "lowerBoundary", r6 = i2 || "upperBoundary", n3 = [], o3 = [{ name: a6, alias: a6, type: "esriFieldTypeDouble" }, { name: r6, alias: r6, type: "esriFieldTypeDouble" }], l7 = (_b = (_a = t5.bin) == null ? void 0 : _a.stackBy) == null ? void 0 : _b.value, u7 = (_d = (_c = t5.bin) == null ? void 0 : _c.stackBy) == null ? void 0 : _d.outAlias;
    l7 && o3.push({ name: G2, alias: G2, type: "esriFieldTypeInteger" }, { name: u7 ?? l7, alias: u7 ?? l7, type: "esriFieldTypeString" });
    let c6 = 0;
    for (const m6 of e3) {
      const { minValue: e4, maxValue: i3, items: s8 } = m6, d6 = { attributes: {} };
      let h4;
      if (d6.attributes[a6] = e4, d6.attributes[r6] = i3, l7 ? (h4 = await this._createStatisticsQueryResponse({ ...t5, groupByFieldsForStatistics: [l7], orderByFields: [l7] }, s8), d6.attributes[G2] = ++c6, "flat" === t5.bin.jsonStyle ? n3.push(...h4.features.map(({ attributes: { EXPR_1: e5, ...t6 }, ...i4 }) => ({ ...i4, attributes: u7 ?? e5 ? { ...t6, [u7 ?? e5]: e5, ...d6.attributes } : { ...t6, ...d6.attributes } }))) : (d6.stackedAttributes = h4.features.map(({ attributes: { EXPR_1: e5, ...t6 } }) => u7 ?? e5 ? { ...t6, [u7 ?? e5]: e5 } : t6), n3.push(d6))) : (((_e = t5.bin) == null ? void 0 : _e.splitBy) && (d6.attributes[G2] = ++c6), h4 = await this._createStatisticsQueryResponse(t5, s8, d6), n3.push(d6)), h4.fields) for (const t6 of h4.fields) o3.some((e5) => e5.name === t6.name) || o3.push(t6);
    }
    return "desc" === t5.binOrder && n3.reverse(), { fields: o3, features: n3 };
  }
};
function E2(e3, t5, i2, s7) {
  const a6 = s7.x - i2.x, r6 = s7.y - i2.y, n3 = t5.x - i2.x, o3 = t5.y - i2.y, l7 = a6 * a6 + r6 * r6;
  if (0 === l7) return false;
  const u7 = n3 * a6 + o3 * r6, c6 = Math.min(1, Math.max(0, u7 / l7));
  return e3.x = i2.x + a6 * c6, e3.y = i2.y + r6 * c6, true;
}
function O(e3, t5) {
  return e3 ? t5 ? 4 : 3 : t5 ? 3 : 2;
}
var H = class {
  constructor(e3, t5) {
    this.coords = e3, this.coordsIndex = t5;
  }
  get x() {
    return this.coords[this.coordsIndex];
  }
  get y() {
    return this.coords[this.coordsIndex + 1];
  }
  get z() {
    return this.coords[this.coordsIndex + 2];
  }
};
var Q2 = [1];

// node_modules/@arcgis/core/layers/graphics/data/queryValidationUtils.js
var u6 = "unsupported-query";
async function p3(t5, i2) {
  var _a;
  const s7 = t5.bin;
  if (!s7.onField && !((_a = s7.onExpression) == null ? void 0 : _a.value) || "autoIntervalBin" === s7.type && null == s7.parameters.numberOfBins || "dateBin" === s7.type && (null == s7.parameters.number || null == s7.parameters.unit) || "fixedBoundariesBin" === s7.type && null == s7.parameters.boundaries || "fixedIntervalBin" === s7.type && null == s7.parameters.interval) throw new s(u6, "Unsupported query options", { query: t5 });
  return c5(t5, i2);
}
async function c5(t5, { fieldsIndex: i2, geometryType: s7, spatialReference: r6, availableFields: n3 }) {
  if (null != t5.geometryPrecision || t5.multipatchOption && "xyFootprint" !== t5.multipatchOption || t5.pixelSize || t5.relationParam || t5.text) throw new s(u6, "Unsupported query options", { query: t5 });
  return d5(i2, n3, t5), m5(i2, n3, t5), Promise.all([w3(t5, s7, r6), x(r6, t5.outSR)]).then(() => t5);
}
function d5(t5, i2, n3) {
  const { outFields: o3, orderByFields: a6, returnDistinctValues: l7, outStatistics: p4 } = n3, c6 = p4 ? p4.map((e3) => e3.outStatisticFieldName && e3.outStatisticFieldName.toLowerCase()).filter(Boolean) : [];
  if (a6 && a6.length > 0) {
    const e3 = " asc", r6 = " desc", o4 = a6.map((t6) => {
      const i3 = t6.toLowerCase();
      return i3.includes(e3) ? i3.split(e3)[0] : i3.includes(r6) ? i3.split(r6)[0] : t6;
    }).filter((e4) => !c6.includes(e4));
    g2(t5, i2, o4, { expressionName: "orderByFields", query: n3 });
  }
  if (o3 && o3.length > 0) g2(t5, i2, o3, { expressionName: "outFields", query: n3, allowedFieldTypes: "all" });
  else if (l7) throw new s(u6, "outFields should be specified for returnDistinctValues", { query: n3 });
  p2(t5, i2, n3.where, n3);
}
var f3 = /* @__PURE__ */ new Set([...o2, ...a5]);
function m5(t5, i2, r6) {
  const { outStatistics: o3, groupByFieldsForStatistics: a6, having: l7 } = r6, p4 = a6 == null ? void 0 : a6.length, c6 = o3 == null ? void 0 : o3.length;
  if (l7) {
    if (!p4 || !c6) throw new s(u6, "outStatistics and groupByFieldsForStatistics should be specified with having", { query: r6 });
    f2(t5, i2, l7, o3, r6);
  }
  if (c6) {
    if (!F(o3)) return;
    const n3 = o3.map((e3) => e3.onStatisticField).filter(Boolean);
    g2(t5, i2, n3, { expressionName: "onStatisticFields", query: r6 }), p4 && g2(t5, i2, a6, { expressionName: "groupByFieldsForStatistics", query: r6 });
    for (const a7 of o3) {
      const { onStatisticField: n4, statisticType: o4 } = a7;
      if (("percentile_disc" === o4 || "percentile_cont" === o4) && "statisticParameters" in a7) {
        const { statisticParameters: t6 } = a7;
        if (!t6) throw new s(u6, "statisticParameters should be set for percentile type", { definition: a7, query: r6 });
      } else t5.get(n4) && "count" !== o4 && "min" !== o4 && "max" !== o4 && g2(t5, i2, [n4], { expressionName: `outStatistics with '${o4}' statistic type`, allowedFieldTypes: f3, query: r6 });
    }
  }
}
async function y4(t5, i2, { fieldsIndex: s7, geometryType: r6, spatialReference: n3, availableFields: l7 }) {
  if (null != t5.geometryPrecision || t5.multipatchOption || t5.pixelSize || t5.relationParam || t5.text || t5.outStatistics || t5.groupByFieldsForStatistics || t5.having || t5.orderByFields) throw new s(u6, "Unsupported query options", { query: t5 });
  return d5(s7, l7, t5), Promise.all([h3(s7, l7, i2, t5), w3(t5, r6, n3), x(n3, t5.outSR)]).then(() => t5);
}
async function h3(t5, i2, r6, n3) {
  let o3 = [];
  if (r6.valueExpression) {
    const { arcadeUtils: e3 } = await o();
    o3 = e3.extractFieldNames(r6.valueExpression);
  }
  if (r6.field && o3.push(r6.field), r6.field2 && o3.push(r6.field2), r6.field3 && o3.push(r6.field3), r6.normalizationField && o3.push(r6.normalizationField), !o3.length && !r6.valueExpression) throw new s(u6, "field or valueExpression is required", { params: r6 });
  g2(t5, i2, o3, { expressionName: "statistics", query: n3 });
}
function F(e3) {
  return null != e3 && e3.every((e4) => "exceedslimit" !== e4.statisticType);
}

// node_modules/@arcgis/core/layers/graphics/data/QueryEngine.js
var J = "unsupported-query";
var L2 = class {
  constructor(e3) {
    this._changeHandle = null, this.capabilities = { query: t }, this.geometryType = e3.geometryType, this.hasM = !!e3.hasM, this.hasZ = !!e3.hasZ, this.objectIdField = e3.objectIdField, this.spatialReference = e3.spatialReference, this.definitionExpression = e3.definitionExpression, this.featureStore = e3.featureStore, this.aggregateAdapter = e3.aggregateAdapter, this._cache = e3.cache ?? new e2(), this.timeInfo = e3.timeInfo, this._changeHandle = this.featureStore.events.on("changed", () => this._clearCache()), this.fieldsIndex = S.isSerializable(e3.fieldsIndex) ? e3.fieldsIndex : Z.fromJSON(e3.fieldsIndex), !e3.availableFields || 1 === e3.availableFields.length && "*" === e3.availableFields[0] ? this.availableFields = new Set(this.fieldsIndex.fields.map((e4) => e4.name)) : this.availableFields = new Set(e3.availableFields.map((e4) => {
      var _a;
      return (_a = this.fieldsIndex.get(e4)) == null ? void 0 : _a.name;
    }).filter((e4) => null != e4)), e3.scheduler && e3.priority && (this._frameTask = e3.scheduler.registerTask(e3.priority));
  }
  destroy() {
    this._changeHandle = l(this._changeHandle), this._frameTask = l(this._frameTask), this._clearCache(), u(this._cache);
  }
  get featureAdapter() {
    return this.featureStore.featureAdapter;
  }
  _clearCache() {
    this._cache.clear(), this._allFeaturesPromise = null, this._timeExtentPromise = null, this._fullExtentPromise = null;
  }
  async executeQuery(e3, t5) {
    const s7 = l2(t5);
    try {
      const t6 = await this._executeQuery(e3, {}, s7);
      return await t6.createQueryResponse();
    } catch (i2) {
      if (i2 !== S2) throw i2;
      return new C3([], e3, this).createQueryResponse();
    }
  }
  async executeQueryForCount(e3 = {}, t5) {
    const s7 = l2(t5);
    try {
      return (await this._executeQuery(e3, { returnGeometry: false, returnCentroid: false, outSR: null }, s7)).createQueryResponseForCount();
    } catch (i2) {
      if (i2 !== S2) throw i2;
      return 0;
    }
  }
  async executeQueryForExtent(e3, t5) {
    const s7 = l2(t5), i2 = e3.outSR;
    try {
      const t6 = await this._executeQuery(e3, { returnGeometry: true, returnCentroid: false, outSR: null }, s7), r6 = t6.size;
      if (!r6) return { count: 0, extent: null };
      return { count: r6, extent: await this._getBounds(t6.items, t6.spatialReference, i2 || this.spatialReference) };
    } catch (r6) {
      if (r6 === S2) return { count: 0, extent: null };
      throw r6;
    }
  }
  async executeQueryForIds(e3, t5) {
    return this.executeQueryForIdSet(e3, t5).then((e4) => Array.from(e4));
  }
  async executeQueryForIdSet(e3, t5) {
    const s7 = l2(t5);
    try {
      const t6 = await this._executeQuery(e3, { returnGeometry: true, returnCentroid: false, outSR: null }, s7), i2 = t6.items, r6 = /* @__PURE__ */ new Set();
      return await this.reschedule(() => {
        for (const e4 of i2) r6.add(t6.featureAdapter.getObjectId(e4));
      }, s7), r6;
    } catch (i2) {
      if (i2 === S2) return /* @__PURE__ */ new Set();
      throw i2;
    }
  }
  async executeQueryForLatestObservations(e3, t5) {
    var _a;
    const s7 = l2(t5);
    if (!((_a = this.timeInfo) == null ? void 0 : _a.trackIdField)) throw new s(J, "Missing timeInfo or timeInfo.trackIdField", { query: e3, timeInfo: this.timeInfo });
    try {
      const t6 = await this._executeQuery(e3, {}, s7);
      return await this.reschedule(() => this._filterLatest(t6), s7), await t6.createQueryResponse();
    } catch (r6) {
      if (r6 !== S2) throw r6;
      return new C3([], e3, this).createQueryResponse();
    }
  }
  async executeAttributeBinsQuery(e3, t5) {
    const s7 = l2(t5);
    let i2;
    e3 = a(e3);
    try {
      e3 = await this.schedule(() => w2(e3, this.definitionExpression, this.spatialReference), s7), e3 = await this.reschedule(() => p3(e3, { availableFields: this.availableFields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, spatialReference: this.spatialReference }), s7);
      const t6 = await this.reschedule(() => this._executeSceneFilterQuery(e3, s7), s7);
      i2 = await this.reschedule(() => this._executeGeometryQuery(e3, t6, s7), s7), await this.reschedule(() => this._executeAggregateIdsQuery(i2), s7), await this.reschedule(() => this.executeObjectIdsQuery(i2), s7), await this.reschedule(() => this.executeTimeQuery(i2), s7), await this.reschedule(() => this.executeAttributesQuery(i2), s7);
    } catch (r6) {
      if (r6 !== S2) throw r6;
      i2 = new C3([], e3, this);
    }
    return i2.createQueryBinsResponse(e3);
  }
  async executeQueryForSummaryStatistics(e3 = {}, t5, s7) {
    const i2 = l2(s7), { field: r6, normalizationField: a6, valueExpression: n3 } = t5;
    return (await this._executeQueryForStatistics(e3, { field: r6, normalizationField: a6, valueExpression: n3 }, i2)).createSummaryStatisticsResponse(t5);
  }
  async executeQueryForUniqueValues(e3 = {}, t5, s7) {
    const i2 = l2(s7), { field: r6, field2: a6, field3: n3, valueExpression: u7 } = t5;
    return (await this._executeQueryForStatistics(e3, { field: r6, field2: a6, field3: n3, valueExpression: u7 }, i2)).createUniqueValuesResponse(t5);
  }
  async executeQueryForClassBreaks(e3 = {}, t5, s7) {
    const i2 = l2(s7), { field: r6, normalizationField: a6, valueExpression: n3 } = t5;
    return (await this._executeQueryForStatistics(e3, { field: r6, normalizationField: a6, valueExpression: n3 }, i2)).createClassBreaksResponse(t5);
  }
  async executeQueryForHistogram(e3 = {}, t5, s7) {
    const i2 = l2(s7), { field: r6, normalizationField: a6, valueExpression: n3 } = t5;
    return (await this._executeQueryForStatistics(e3, { field: r6, normalizationField: a6, valueExpression: n3 }, i2)).createHistogramResponse(t5);
  }
  async fetchRecomputedExtents(e3) {
    const t5 = l2(e3);
    this._timeExtentPromise || (this._timeExtentPromise = n(this.timeInfo, this.featureStore));
    const [s7, i2] = await Promise.all([this._getFullExtent(), this._timeExtentPromise]);
    return s2(t5), { fullExtent: s7, timeExtent: i2 };
  }
  async _getBounds(e3, t5, s7) {
    const i2 = d(u3(), K);
    await this.featureStore.forEachBounds(e3, (e4) => M(i2, e4));
    const r6 = { xmin: i2[0], ymin: i2[1], xmax: i2[3], ymax: i2[4], spatialReference: h2(this.spatialReference) };
    this.hasZ && isFinite(i2[2]) && isFinite(i2[5]) && (r6.zmin = i2[2], r6.zmax = i2[5], r6.hasZ = true);
    const a6 = j(r6, t5, s7);
    if (a6.spatialReference = h2(s7), a6.xmax - a6.xmin == 0) {
      const e4 = Q(a6.spatialReference);
      a6.xmin -= e4, a6.xmax += e4;
    }
    if (a6.ymax - a6.ymin == 0) {
      const e4 = Q(a6.spatialReference);
      a6.ymin -= e4, a6.ymax += e4;
    }
    if (this.hasZ && null != a6.zmin && null != a6.zmax && a6.zmax - a6.zmin == 0) {
      const e4 = Q(a6.spatialReference);
      a6.zmin -= e4, a6.zmax += e4;
    }
    return a6;
  }
  _getFullExtent() {
    return this._fullExtentPromise || (this._fullExtentPromise = "getFullExtent" in this.featureStore && this.featureStore.getFullExtent ? Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)) : this._getAllFeatures().then((e3) => this._getBounds(e3, this.spatialReference, this.spatialReference))), this._fullExtentPromise;
  }
  async schedule(e3, t5) {
    var _a;
    return ((_a = this._frameTask) == null ? void 0 : _a.schedule(e3, t5)) ?? e3(C2);
  }
  async reschedule(e3, t5) {
    var _a;
    return ((_a = this._frameTask) == null ? void 0 : _a.reschedule(e3, t5)) ?? e3(C2);
  }
  async _getAllFeaturesQueryEngineResult(e3) {
    return new C3(await this._getAllFeatures(), e3, this);
  }
  async _getAllFeatures() {
    if (null == this._allFeaturesPromise) {
      const e4 = [];
      this._allFeaturesPromise = (async () => await this.featureStore.forEach((t6) => e4.push(t6)))().then(() => r(e4));
    }
    const e3 = this._allFeaturesPromise, t5 = await e3;
    return e3 === this._allFeaturesPromise ? t5.slice() : this._getAllFeatures();
  }
  async _executeQuery(e3, t5, s7) {
    e3 = a(e3), e3 = await this.schedule(() => x2(e3, this.definitionExpression, this.spatialReference), s7), e3 = await this.reschedule(() => c5(e3, { availableFields: this.availableFields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, spatialReference: this.spatialReference }), s7), e3 = { ...e3, ...t5 };
    const i2 = await this.reschedule(() => this._executeSceneFilterQuery(e3, s7), s7), r6 = await this.reschedule(() => this._executeGeometryQuery(e3, i2, s7), s7);
    return await this.reschedule(() => this._executeAggregateIdsQuery(r6), s7), await this.reschedule(() => this.executeObjectIdsQuery(r6), s7), await this.reschedule(() => this.executeTimeQuery(r6), s7), await this.reschedule(() => this.executeAttributesQuery(r6), s7), r6;
  }
  async _executeSceneFilterQuery(e3, t5) {
    if (null == e3.sceneFilter) return null;
    const { outSR: s7, returnGeometry: i2, returnCentroid: r6 } = e3, a6 = this.featureStore.featureSpatialReference, n3 = e3.sceneFilter.geometry, u7 = null == a6 || s3(a6, n3.spatialReference) ? n3 : j(n3, a6);
    if (!u7) return null;
    const l7 = i2 || r6, o3 = N(s7) && !s3(this.spatialReference, s7) && l7 ? async (e4) => this._project(e4, s7) : (e4) => e4, h4 = this.featureAdapter, c6 = await this.reschedule(() => this.searchFeatures(V(u7)), t5);
    if ("disjoint" === e3.sceneFilter.spatialRelationship) {
      if (!c6.length) return null;
      const s8 = /* @__PURE__ */ new Set();
      for (const e4 of c6) s8.add(h4.getObjectId(e4));
      const i3 = await this.reschedule(() => this._getAllFeatures(), t5), r7 = await this.reschedule(async () => {
        const r8 = await I("esriSpatialRelDisjoint", u7, this.geometryType, this.hasZ, this.hasM), a7 = (e4) => !s8.has(h4.getObjectId(e4)) || r8(h4.getGeometry(e4)), n4 = await this.runSpatialFilter(i3, a7, t5);
        return new C3(n4, e3, this);
      }, t5);
      return o3(r7);
    }
    if (!c6.length) return new C3([], e3, this);
    if (this._canExecuteSinglePass(u7, e3)) return o3(new C3(c6, e3, this));
    const m6 = await I("esriSpatialRelContains", u7, this.geometryType, this.hasZ, this.hasM), f4 = await this.runSpatialFilter(c6, (e4) => m6(h4.getGeometry(e4)), t5);
    return o3(new C3(f4, e3, this));
  }
  async _executeGeometryQuery(s7, i2, r6) {
    if (null != i2 && 0 === i2.items.length) return i2;
    const { geometry: a6, outSR: n3, returnGeometry: u7, returnCentroid: l7 } = s7, o3 = i2 ? null : this._getCacheKey(s7), h4 = o3 ? this._cache.get(o3) : null;
    if (h4) return new C3(h4, s7, this);
    const c6 = N(n3) && !s3(this.spatialReference, n3), m6 = u7 || l7, f4 = async (e3) => (c6 && m6 && await this._project(e3, n3), o3 && this._cache.put(o3, e3.items), e3), d6 = this.featureStore.featureSpatialReference, y5 = !a6 || null == d6 || s3(d6, a6.spatialReference) ? a6 : j(a6, d6);
    if (!y5) return f4(null != i2 ? i2 : await this._getAllFeaturesQueryEngineResult(s7));
    const p4 = this.featureAdapter;
    let g3 = await this.reschedule(() => this.searchFeatures(V(a6)), r6);
    const x3 = s7.spatialRel ?? "esriSpatialRelIntersects";
    if ("esriSpatialRelDisjoint" === x3) {
      if (!g3.length) return f4(null != i2 ? i2 : await this._getAllFeaturesQueryEngineResult(s7));
      const e3 = /* @__PURE__ */ new Set();
      for (const s8 of g3) e3.add(p4.getObjectId(s8));
      const t5 = null != i2 ? i2.items : await this.reschedule(() => this._getAllFeatures(), r6), a7 = await this.reschedule(async () => {
        const i3 = await I(x3, y5, this.geometryType, this.hasZ, this.hasM), a8 = (t6) => !e3.has(p4.getObjectId(t6)) || i3(p4.getGeometry(t6)), n4 = await this.runSpatialFilter(t5, a8, r6);
        return new C3(n4, s7, this);
      }, r6);
      return f4(a7);
    }
    if (null != i2) {
      const s8 = new w();
      g3 = g3.filter((t5) => b(i2.items, t5, i2.items.length, s8) >= 0);
    }
    if (!g3.length) {
      const e3 = new C3([], s7, this);
      return o3 && this._cache.put(o3, e3.items), e3;
    }
    if (this._canExecuteSinglePass(y5, s7)) return f4(new C3(g3, s7, this));
    const w4 = await I(x3, y5, this.geometryType, this.hasZ, this.hasM), F2 = await this.runSpatialFilter(g3, (e3) => w4(p4.getGeometry(e3)), r6);
    return f4(new C3(F2, s7, this));
  }
  _executeAggregateIdsQuery(e3) {
    var _a;
    if (0 === e3.items.length || !((_a = e3.query.aggregateIds) == null ? void 0 : _a.length) || null == this.aggregateAdapter) return;
    const t5 = /* @__PURE__ */ new Set();
    for (const i2 of e3.query.aggregateIds) {
      this.aggregateAdapter.getFeatureObjectIds(i2).forEach((e4) => t5.add(e4));
    }
    const s7 = this.featureAdapter.getObjectId;
    e3.items = e3.items.filter((e4) => t5.has(s7(e4)));
  }
  executeObjectIdsQuery(e3) {
    var _a;
    if (0 === e3.items.length || !((_a = e3.query.objectIds) == null ? void 0 : _a.length)) return;
    const t5 = new Set(e3.query.objectIds), s7 = this.featureAdapter.getObjectId;
    e3.items = e3.items.filter((e4) => t5.has(s7(e4)));
  }
  executeTimeQuery(e3) {
    if (0 === e3.items.length) return;
    const t5 = l5(this.timeInfo, e3.query.timeExtent, this.featureAdapter);
    null != t5 && (e3.items = e3.items.filter(t5));
  }
  executeAttributesQuery(e3) {
    if (0 === e3.items.length) return;
    const t5 = c3(e3.query.where, this.fieldsIndex);
    if (t5) {
      if (!t5.isStandardized) throw new TypeError("Where clause is not standardized");
      e3.items = e3.items.filter((e4) => t5.testFeature(e4, this.featureAdapter));
    }
  }
  async runSpatialFilter(e3, t5, s7) {
    if (!t5) return e3;
    if (null == this._frameTask) return e3.filter((e4) => t5(e4));
    let i2 = 0;
    const r6 = new Array(), a6 = async (n3) => {
      for (; i2 < e3.length; ) {
        const u7 = e3[i2++];
        t5(u7) && (r6.push(u7), n3.madeProgress()), n3.done && await this.reschedule((e4) => a6(e4), s7);
      }
    };
    return this.reschedule((e4) => a6(e4), s7).then(() => r6);
  }
  _filterLatest(e3) {
    const { trackIdField: t5, startTimeField: s7, endTimeField: i2 } = this.timeInfo, r6 = i2 || s7, a6 = /* @__PURE__ */ new Map(), n3 = this.featureAdapter.getAttribute;
    for (const u7 of e3.items) {
      const e4 = n3(u7, t5), s8 = n3(u7, r6), i3 = a6.get(e4);
      (!i3 || s8 > n3(i3, r6)) && a6.set(e4, u7);
    }
    e3.items = Array.from(a6.values());
  }
  _getCacheKey(e3) {
    const { geometry: t5, spatialRel: s7, returnGeometry: i2, returnCentroid: r6, outSR: a6, resultType: n3, cacheHint: u7 } = e3;
    if ("tile" !== n3 && !u7) return null;
    const l7 = i2 || r6;
    return N(a6) && !s3(this.spatialReference, a6) && l7 ? JSON.stringify([t5, s7, a6]) : JSON.stringify([t5, s7]);
  }
  _canExecuteSinglePass(e3, t5) {
    const { spatialRel: s7 } = t5;
    return d3(e3) && ("esriSpatialRelEnvelopeIntersects" === s7 || "esriGeometryPoint" === this.geometryType && ("esriSpatialRelIntersects" === s7 || "esriSpatialRelContains" === s7));
  }
  async _project(e3, t5) {
    if (!t5 || s3(this.spatialReference, t5)) return e3;
    const i2 = this.featureAdapter;
    let r6;
    try {
      const e4 = await this._getFullExtent();
      r6 = q(this.spatialReference, t5, e4);
    } catch {
    }
    const a6 = await b2(e3.items.map((e4) => a4(this.geometryType, this.hasZ, this.hasM, i2.getGeometry(e4))), this.spatialReference, t5, r6);
    return e3.items = r(a6.map((t6, s7) => i2.cloneWithGeometry(e3.items[s7], st(t6, this.hasZ, this.hasM)))), e3;
  }
  async searchFeatures(e3) {
    const t5 = /* @__PURE__ */ new Set();
    await Promise.all(e3.map((e4) => this.featureStore.forEachInBounds(e4, (e5) => t5.add(e5))));
    const s7 = Array.from(t5.values());
    return t5.clear(), s7;
  }
  async _executeQueryForStatistics(e3, t5, s7) {
    e3 = a(e3);
    try {
      e3 = await this.schedule(() => x2(e3, this.definitionExpression, this.spatialReference), s7), e3 = await this.reschedule(() => y4(e3, t5, { availableFields: this.availableFields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, spatialReference: this.spatialReference }), s7);
      const i2 = await this.reschedule(() => this._executeSceneFilterQuery(e3, s7), s7), r6 = await this.reschedule(() => this._executeGeometryQuery(e3, i2, s7), s7);
      return await this.reschedule(() => this._executeAggregateIdsQuery(r6), s7), await this.reschedule(() => this.executeObjectIdsQuery(r6), s7), await this.reschedule(() => this.executeTimeQuery(r6), s7), await this.reschedule(() => this.executeAttributesQuery(r6), s7), r6;
    } catch (i2) {
      if (i2 !== S2) throw i2;
      return new C3([], e3, this);
    }
  }
  get test() {
  }
};
function V(e3) {
  if (d3(e3)) {
    if (m(e3)) return [a2(Math.min(e3.xmin, e3.xmax), Math.min(e3.ymin, e3.ymax), Math.max(e3.xmin, e3.xmax), Math.max(e3.ymin, e3.ymax))];
    if (y(e3)) return e3.rings.map((e4) => a2(Math.min(e4[0][0], e4[2][0]), Math.min(e4[0][1], e4[2][1]), Math.max(e4[0][0], e4[2][0]), Math.max(e4[0][1], e4[2][1])));
  }
  return [a3(u2(), e3)];
}

export {
  C3 as C,
  c5 as c,
  L2 as L,
  V
};
//# sourceMappingURL=chunk-MYUL4ERJ.js.map
