import {
  C,
  i as i2
} from "./chunk-GKX3Z6XX.js";
import {
  B,
  K,
  Le,
  de,
  ge,
  ne,
  re,
  te,
  z
} from "./chunk-O4H354HZ.js";
import {
  t as t2
} from "./chunk-TSDU5FXE.js";
import {
  ut
} from "./chunk-F7TFMQ3A.js";
import {
  a as a2,
  r as r2
} from "./chunk-TA6O62P3.js";
import {
  i,
  r
} from "./chunk-Z2A222O3.js";
import {
  Z
} from "./chunk-FFVHLGAP.js";
import {
  e,
  n as n2,
  t
} from "./chunk-ZDVQNOKR.js";
import {
  m
} from "./chunk-Y3AY7I5U.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  j2 as j,
  n
} from "./chunk-YUVX6H42.js";
import {
  a
} from "./chunk-4LTV6KQ5.js";

// node_modules/@arcgis/core/arcade/geometry/constructors.js
function i3(t3, s, e2 = null) {
  const a3 = u(t3, true);
  if (void 0 !== a3.hasm && (a3.hasM = a3.hasm, delete a3.hasm), void 0 !== a3.hasz && (a3.hasZ = a3.hasz, delete a3.hasz), void 0 !== a3.spatialreference && (a3.spatialReference = a3.spatialreference, delete a3.spatialreference), a3.spatialReference || (a3.spatialReference = s), void 0 !== a3.rings) {
    const n3 = I(f2(a3.rings), a3.hasZ, a3.hasM);
    if (null == n3) return null;
    a3.rings = n3.arrays, a3.hasZ = n3.hasZ, a3.hasM = n3.hasM;
  }
  if (void 0 !== a3.paths) {
    const n3 = I(f2(a3.paths), a3.hasZ, a3.hasM);
    if (null == n3) return null;
    a3.paths = n3.arrays, a3.hasZ = n3.hasZ, a3.hasM = n3.hasM;
  }
  if (void 0 !== a3.points) {
    const n3 = k(a3.points, a3.hasZ, a3.hasM);
    if (null == n3) return null;
    a3.points = n3.array, a3.hasZ = n3.hasZ, a3.hasM = n3.hasM;
  }
  const i4 = f(a3);
  if (null != e2 && (i4 == null ? void 0 : i4.type) !== e2) throw new a2(null, r2.InvalidParameter, null);
  return i4;
}
function u(n3, r3 = false) {
  const t3 = {};
  for (const e2 of n3.keys()) {
    const a3 = r3 ? e2.toLowerCase() : e2, o = n3.attributes[e2];
    t3[a3] = K(o) ? u(o) : o;
  }
  return t3;
}
var l = Symbol("NoValue");
function h(n3) {
  return Array.isArray(n3) && n3.length > 0 ? n3[0] : n3 instanceof t2 && n3.length() > 0 ? n3.get(0) : l;
}
function f2(n3) {
  const r3 = h(h(n3));
  return r3 === l || Array.isArray(r3) || r3 instanceof t2 || r3 instanceof j ? n3 : [n3];
}
var c = 0;
function p(n3) {
  return a(n3, c) ?? c;
}
function y(n3) {
  return "number" == typeof n3 && !Number.isNaN(n3);
}
var m2 = null;
function g(n3) {
  return a(n3, m2) ?? m2;
}
function M(n3) {
  return "number" == typeof n3 && !Number.isNaN(n3) || null === n3;
}
function Z2(n3) {
  return !(n3.length < 2) && ("number" == typeof n3[0] && !Number.isNaN(n3[0]) && ("number" == typeof n3[1] && !Number.isNaN(n3[1])));
}
function d(n3) {
  return Z2(n3) ? n3.length > 2 ? n3.slice(0, 2) : n3 : null;
}
function A(n3) {
  return Z2(n3) ? y(n3[2]) ? n3.length > 3 ? n3.slice(0, 3) : n3 : [n3[0], n3[1], p(n3[2])] : null;
}
function N(n3) {
  return Z2(n3) ? n3.length >= 3 && !M(n3[2]) ? [n3[0], n3[1], g(n3[2])] : n3.length > 3 ? n3.slice(0, 3) : n3 : null;
}
function b(n3) {
  return Z2(n3) ? y(n3[2]) && M(n3[3]) ? n3.length > 4 ? n3.slice(0, 4) : n3 : [n3[0], n3[1], p(n3[2]), g(n3[3])] : null;
}
function v(n3, r3) {
  return n3 ? r3 ? b : A : r3 ? N : d;
}
function j2(n3, r3) {
  return n3 ? r3 ? (n4) => [n4.x, n4.y, n4.z ?? c, n4.m ?? m2] : (n4) => [n4.x, n4.y, n4.z ?? c] : r3 ? (n4) => [n4.x, n4.y, n4.m ?? m2] : (n4) => [n4.x, n4.y];
}
function x(n3, r3, s) {
  return Array.isArray(n3) ? s(n3) : n3 instanceof j ? r3(n3) : n3 instanceof t2 ? s(n3.toArray()) : null;
}
function z2(n3, r3, s) {
  return Array.isArray(n3) ? n3.length >= r3 : n3 instanceof t2 ? n3.length() >= r3 : n3 instanceof j && n3[s];
}
function w(n3, r3, t3) {
  return void 0 === n3 && void 0 === r3 ? { hasZ: z2(t3, 3, "hasZ"), hasM: z2(t3, 4, "hasM") } : void 0 === n3 ? true === r3 ? { hasZ: z2(t3, 4, "hasZ"), hasM: true } : { hasZ: z2(t3, 3, "hasZ"), hasM: false } : void 0 === r3 ? true === n3 ? { hasZ: true, hasM: z2(t3, 4, "hasM") } : { hasZ: false, hasM: z2(t3, 3, "hasM") } : { hasZ: true === n3, hasM: true === r3 };
}
function R(n3, r3, s) {
  const e2 = [];
  if (Array.isArray(n3)) for (let t3 = 0; t3 < n3.length; t3++) {
    const a3 = x(n3[t3], r3, s);
    null != a3 && e2.push(a3);
  }
  else if (n3 instanceof t2) for (let t3 = 0; t3 < n3.length(); t3++) {
    const a3 = x(n3.get(t3), r3, s);
    null != a3 && e2.push(a3);
  }
  return e2;
}
function k(n3, r3, t3) {
  const s = h(n3);
  if (s === l) return null;
  const { hasZ: e2, hasM: a3 } = w(r3, t3, s);
  return { array: R(n3, j2(e2, a3), v(e2, a3)), hasZ: e2, hasM: a3 };
}
function I(n3, r3, s) {
  const e2 = h(h(n3));
  if (e2 === l) return null;
  const { hasZ: a3, hasM: o } = w(r3, s, e2), i4 = j2(a3, o), u2 = v(a3, o), f3 = [];
  if (Array.isArray(n3)) for (let t3 = 0; t3 < n3.length; t3++) f3.push(R(n3[t3], i4, u2));
  else if (n3 instanceof t2) for (let t3 = 0; t3 < n3.length(); t3++) f3.push(R(n3.get(t3), i4, u2));
  return { arrays: f3, hasZ: a3, hasM: o };
}

// node_modules/@arcgis/core/arcade/Feature.js
var D = class _D {
  constructor() {
    this.arcadeDeclaredClass = "esri.arcade.Feature", this._optimizedGeomDefinition = null, this._geometry = null, this.attributes = null, this._layer = null, this._fieldTypesFixed = true, this.fieldsIndex = null, this.contextTimeZone = null, this.immutable = true, this._fieldsToFixDataTypes = null, this.immutable = true;
  }
  static createFromGraphic(e2, t3) {
    const i4 = new _D();
    return i4.contextTimeZone = t3 ?? null, i4._geometry = null != e2.geometry ? e2.geometry : null, void 0 === e2.attributes || null === e2.attributes ? i4.attributes = {} : i4.attributes = e2.attributes, e2._sourceLayer ? (i4._layer = e2._sourceLayer, i4._fieldTypesFixed = false) : e2._layer ? (i4._layer = e2._layer, i4._fieldTypesFixed = false) : e2.layer && "fields" in e2.layer ? (i4._layer = e2.layer, i4._fieldTypesFixed = false) : e2.sourceLayer && "fields" in e2.sourceLayer && (i4._layer = e2.sourceLayer, i4._fieldTypesFixed = false), i4._layer && !i4._fieldTypesFixed && (i4.fieldsIndex = this.hydrateFieldsIndex(i4._layer)), i4;
  }
  static createFromArcadeFeature(e2) {
    if (e2 instanceof _D) {
      const t4 = new _D();
      return t4._fieldTypesFixed = e2._fieldTypesFixed, t4.attributes = e2.attributes, t4._geometry = e2._geometry, t4._optimizedGeomDefinition = e2._optimizedGeomDefinition, e2._layer && (t4._layer = e2._layer), t4.fieldsIndex = e2.fieldsIndex, t4.contextTimeZone = e2.contextTimeZone, t4;
    }
    const t3 = {};
    for (const i4 of e2.keys()) t3[i4] = e2.field(i4);
    return _D.createFromGraphicLikeObject(e2.geometry(), t3, e2.fullSchema(), e2.contextTimeZone);
  }
  static createFromOptimisedFeature(e2, t3, i4) {
    const s = new _D();
    return s._geometry = e2.geometry ? { geometry: e2.geometry } : null, s._optimizedGeomDefinition = i4, s.attributes = e2.attributes || {}, s._layer = t3, s._fieldTypesFixed = false, s;
  }
  static createFromArcadeDictionary(e2, t3) {
    const s = new _D();
    return s.attributes = e2.field("attributes"), null !== s.attributes && s.attributes instanceof C ? (s.attributes = s.attributes.attributes, null === s.attributes && (s.attributes = {})) : s.attributes = {}, s._geometry = e2.field("geometry"), null !== s._geometry && (s._geometry instanceof C ? s._geometry = i3(s._geometry, t3) : s._geometry instanceof n || (s._geometry = null)), s;
  }
  static createFromGraphicLikeObject(e2, t3, i4 = null, s) {
    const r3 = new _D();
    return r3.contextTimeZone = s ?? null, null === t3 && (t3 = {}), r3.attributes = t3, r3._geometry = null != e2 ? e2 : null, r3._layer = i4, r3._layer && (r3._fieldTypesFixed = false, r3.fieldsIndex = this.hydrateFieldsIndex(r3._layer)), r3;
  }
  static hydrateFieldsIndex(e2) {
    return null === e2 ? null : B(e2) ? e2.getFieldsIndex() : e2.fieldsIndex ? e2.fieldsIndex : Z.fromLayerJSON({ datesInUnknownTimezone: e2.datesInUnknownTimezone, fields: e2.fields, timeInfo: e2.timeInfo, editFieldsInfo: e2.editFieldsInfo, dateFieldsTimeReference: e2.dateFieldsTimeReference ?? { timeZone: "UTC", respectsDaylightSaving: false } });
  }
  repurposeFromGraphicLikeObject(e2, t3, i4 = null) {
    null === t3 && (t3 = {}), this.attributes = t3, this._geometry = e2 ?? null, this._layer = i4, this._layer ? this._fieldTypesFixed = false : this._fieldTypesFixed = true;
  }
  castToText(e2 = false) {
    false === this._fieldTypesFixed && this._fixFieldTypes();
    const t3 = de(this.attributes, { useNumbersForDates: e2 });
    return '{"geometry":' + (null === this.geometry() ? "null" : ge(this.geometry())) + ',"attributes":' + t3 + "}";
  }
  _fixFieldTypes() {
    var _a;
    if (this._fieldsToFixDataTypes && ((_a = this._fieldsToFixDataTypes) == null ? void 0 : _a.length) > 0) return this._fixAllFields(this._fieldsToFixDataTypes), void (this._fieldTypesFixed = true);
    const e2 = [], t3 = this._layer.fields;
    for (let i4 = 0; i4 < t3.length; i4++) {
      const s = t3[i4], { name: r3, type: o } = s;
      switch (o) {
        case "date":
        case "esriFieldTypeDate":
          e2.push({ field: r3, dataType: "date" });
          break;
        case "date-only":
        case "esriFieldTypeDateOnly":
          e2.push({ field: r3, dataType: "date-only" });
          break;
        case "time-only":
        case "esriFieldTypeTimeOnly":
          e2.push({ field: r3, dataType: "time-only" });
          break;
        case "timestamp-offset":
        case "esriFieldTypeTimestampOffset":
          e2.push({ field: r3, dataType: "timestamp-offset" });
      }
    }
    this._fieldsToFixDataTypes = e2, e2.length > 0 && this._fixAllFields(e2), this._fieldTypesFixed = true;
  }
  isUnknownDateTimeField(e2) {
    var _a;
    return "unknown" === ((_a = this.fieldsIndex) == null ? void 0 : _a.getTimeZone(e2));
  }
  _fixAllFields(t3) {
    this.attributes = { ...this.attributes };
    const i4 = this.contextTimeZone ?? "system";
    for (let s = 0; s < t3.length; s++) {
      const r3 = t3[s].field, o = t3[s].dataType;
      let n3 = this.attributes[r3];
      if (void 0 === n3) {
        for (const t4 in this.attributes) if (t4.toLowerCase() === r3.toLowerCase()) {
          if (n3 = this.attributes[t4], null !== n3) {
            if ("time-only" === o) {
              re(n3) || (this.attributes[t4] = r.fromReader(n3.toString()));
              break;
            }
            if ("date-only" === o) {
              ne(n3) || (this.attributes[t4] = i.fromReader(n3.toString()));
              break;
            }
            if ("timestamp-offset" === o) {
              te(n3) || (this.attributes[t4] = m.fromReaderAsTimeStampOffset(n3.toString()));
              break;
            }
            const s2 = this.isUnknownDateTimeField(t4);
            n3 instanceof Date ? this.attributes[t4] = s2 ? m.unknownDateJSToArcadeDate(n3) : m.dateJSAndZoneToArcadeDate(n3, i4) : te(n3) || (this.attributes[t4] = s2 ? m.unknownEpochToArcadeDate(n3) : m.epochToArcadeDate(n3, i4));
          }
          break;
        }
      } else if (null !== n3) {
        if ("time-only" === o) {
          re(n3) ? this.attributes[r3] = n3 : this.attributes[r3] = r.fromReader(n3.toString());
          continue;
        }
        if ("date-only" === o) {
          ne(n3) ? this.attributes[r3] = n3 : this.attributes[r3] = i.fromReader(n3.toString());
          continue;
        }
        if ("timestamp-offset" === o) {
          te(n3) ? this.attributes[r3] = n3 : this.attributes[r3] = m.fromReaderAsTimeStampOffset(n3.toString());
          continue;
        }
        const t4 = this.isUnknownDateTimeField(r3);
        te(n3) ? this.attributes[r3] = n3 : n3 instanceof Date ? this.attributes[r3] = t4 ? m.unknownDateJSToArcadeDate(n3) : m.dateJSAndZoneToArcadeDate(n3, i4) : this.attributes[r3] = t4 ? m.unknownEpochToArcadeDate(n3) : m.epochToArcadeDate(n3, i4);
      }
    }
  }
  geometry() {
    return null === this._geometry || this._geometry instanceof n || (this._optimizedGeomDefinition ? (this._geometry = f(ut(this._geometry, this._optimizedGeomDefinition.geometryType, this._optimizedGeomDefinition.hasZ, this._optimizedGeomDefinition.hasM)), this._geometry.spatialReference = this._optimizedGeomDefinition.spatialReference) : this._geometry = f(this._geometry)), this._geometry;
  }
  field(e2) {
    this._fieldTypesFixed || this._fixFieldTypes();
    const t3 = this.attributes[e2];
    if (void 0 !== t3) return t3;
    const i4 = e2.toLowerCase();
    for (const s in this.attributes) if (s.toLowerCase() === i4) return this.attributes[s];
    if (this._hasFieldDefinition(i4)) return null;
    throw new a2(null, r2.FieldNotFound, null, { key: e2 });
  }
  _hasFieldDefinition(e2) {
    if (null === this._layer) return false;
    for (let t3 = 0; t3 < this._layer.fields.length; t3++) {
      if (this._layer.fields[t3].name.toLowerCase() === e2) return true;
    }
    return false;
  }
  setField(t3, i4) {
    if (this.immutable) throw new a2(null, r2.Immutable, null);
    if (i4 instanceof Date && (i4 = this.isUnknownDateTimeField(t3) ? m.unknownDateJSToArcadeDate(i4) : m.dateJSToArcadeDate(i4)), false === z(i4)) throw new a2(null, r2.TypeNotAllowedInFeature, null);
    const o = t3.toLowerCase();
    if (void 0 === this.attributes[t3]) {
      for (const e2 in this.attributes) if (e2.toLowerCase() === o) return void (this.attributes[e2] = i4);
      this.attributes[t3] = i4;
    } else this.attributes[t3] = i4;
  }
  hasField(e2) {
    const t3 = e2.toLowerCase();
    if (void 0 !== this.attributes[e2]) return true;
    for (const i4 in this.attributes) if (i4.toLowerCase() === t3) return true;
    return !!this._hasFieldDefinition(t3);
  }
  keys() {
    let e2 = [];
    const t3 = {};
    for (const i4 in this.attributes) e2.push(i4), t3[i4.toLowerCase()] = 1;
    if (null !== this._layer) for (let i4 = 0; i4 < this._layer.fields.length; i4++) {
      const s = this._layer.fields[i4];
      1 !== t3[s.name.toLowerCase()] && e2.push(s.name);
    }
    return e2 = e2.sort(), e2;
  }
  static parseAttributesFromDictionary(e2) {
    const t3 = {};
    for (const i4 in e2.attributes) {
      const o = e2.attributes[i4];
      if (!z(o)) throw new a2(null, r2.InvalidParameter, null);
      t3[i4] = o;
    }
    return t3;
  }
  static fromJson(e2, t3) {
    let i4 = null;
    null !== e2.geometry && void 0 !== e2.geometry && (i4 = f(e2.geometry));
    const o = {};
    if (null !== e2.attributes && void 0 !== e2.attributes) for (const n3 in e2.attributes) {
      const t4 = e2.attributes[n3];
      if (null === t4) o[n3] = t4;
      else {
        if (!(e(t4) || n2(t4) || t(t4) || te(t4) || re(t4) || ne(t4))) throw new a2(null, r2.InvalidParameter, null);
        o[n3] = t4;
      }
    }
    return _D.createFromGraphicLikeObject(i4, o, null, t3 ?? null);
  }
  fullSchema() {
    return this._layer;
  }
  gdbVersion() {
    var _a;
    if (null === this._layer) return "";
    const e2 = this._layer.gdbVersion;
    return void 0 === e2 ? "" : "" === e2 && ((_a = this._layer.capabilities) == null ? void 0 : _a.isVersioned) ? "SDE.DEFAULT" : e2;
  }
  castAsJson(e2) {
    var _a;
    const t3 = { attributes: {}, geometry: true === (e2 == null ? void 0 : e2.keepGeometryType) ? this.geometry() : ((_a = this.geometry()) == null ? void 0 : _a.toJSON()) ?? null };
    for (const i4 in this.attributes) {
      const s = this.attributes[i4];
      void 0 !== s && (t3.attributes[i4] = Le(s, e2));
    }
    return t3;
  }
  async castAsJsonAsync(e2 = null, t3) {
    return this.castAsJson(t3);
  }
};
i2(D);

export {
  i3 as i,
  D
};
//# sourceMappingURL=chunk-7SWL6AYJ.js.map
