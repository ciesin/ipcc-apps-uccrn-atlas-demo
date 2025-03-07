import {
  Ie,
  Te,
  ee,
  ge,
  he,
  p,
  xe
} from "./chunk-6REABBOQ.js";
import {
  o
} from "./chunk-Y3AY7I5U.js";
import {
  f,
  n as n2,
  t
} from "./chunk-UNGOQUF2.js";
import {
  FixedOffsetZone,
  IANAZone
} from "./chunk-AIKBABBU.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  r2 as r
} from "./chunk-4LTV6KQ5.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/FieldsIndex.js
function y(e) {
  return "timeZone" in e;
}
function _(e) {
  return "timeZone" in e;
}
function g(e) {
  return "dateFieldsTimeZone" in e;
}
var T = /* @__PURE__ */ new Map();
var Z = class _Z {
  static fromJSON(e) {
    return new _Z(e.fields, e.timeZoneByFieldName);
  }
  static fromLayer(e) {
    return new _Z(e.fields ?? [], S2(e));
  }
  static fromLayerJSON(e) {
    return new _Z(e.fields ?? [], S2(e));
  }
  constructor(e = [], i) {
    var _a;
    this._fieldsMap = /* @__PURE__ */ new Map(), this._normalizedFieldsMap = /* @__PURE__ */ new Map(), this._dateFieldsSet = /* @__PURE__ */ new Set(), this._numericFieldsSet = /* @__PURE__ */ new Set(), this._requiredFields = null, this.dateFields = [], this.numericFields = [], this.fields = e || [], this._timeZoneByFieldName = i ? new Map(i) : null;
    const t2 = [];
    for (const s2 of this.fields) {
      const e2 = s2 == null ? void 0 : s2.name, i2 = M(e2);
      if (e2 && i2) {
        const n3 = w(e2);
        this._fieldsMap.set(e2, s2), this._fieldsMap.set(n3, s2), this._normalizedFieldsMap.set(i2, s2), t2.push(`${n3}:${s2.type}:${(_a = this._timeZoneByFieldName) == null ? void 0 : _a.get(e2)}`), Ie(s2) ? (this.dateFields.push(s2), this._dateFieldsSet.add(s2)) : ge(s2) && (this._numericFieldsSet.add(s2), this.numericFields.push(s2)), Te(s2) || he(s2) || (s2.editable = null == s2.editable || !!s2.editable, s2.nullable = null == s2.nullable || !!s2.nullable);
      }
    }
    t2.sort(), this.uid = t2.join();
  }
  get requiredFields() {
    if (!this._requiredFields) {
      this._requiredFields = [];
      for (const e of this.fields) Te(e) || he(e) || e.nullable || void 0 !== ee(e) || this._requiredFields.push(e);
    }
    return this._requiredFields;
  }
  equals(e) {
    return this.uid === (e == null ? void 0 : e.uid);
  }
  has(e) {
    return null != this.get(e);
  }
  get(e) {
    if (!e) return;
    let i = this._fieldsMap.get(e);
    return i || (i = this._fieldsMap.get(w(e)) ?? this._normalizedFieldsMap.get(M(e)), i && this._fieldsMap.set(e, i), i);
  }
  getTimeZone(i) {
    const s2 = this.get(i && "string" != typeof i ? i.name : i);
    return s2 ? this._timeZoneByFieldName ? this._timeZoneByFieldName.get(s2.name) : "date" === s2.type || "esriFieldTypeDate" === s2.type ? (n.getLogger("esri.layers.support.FieldsIndex").errorOnce(new s("getTimeZone:no-timezone-information", `no time zone information for field '${s2.name}'`)), n2) : N.has(s2.type) ? t : null : null;
  }
  getLuxonTimeZone(e) {
    const i = this.getTimeZone(e);
    return i ? i === t ? o.instance : i === n2 ? FixedOffsetZone.utcInstance : r(T, i, () => IANAZone.create(i)) : null;
  }
  isDateField(e) {
    return this._dateFieldsSet.has(this.get(e));
  }
  isTimeOnlyField(e) {
    return xe(this.get(e));
  }
  isNumericField(e) {
    return this._numericFieldsSet.has(this.get(e));
  }
  normalizeFieldName(e) {
    var _a;
    return ((_a = this.get(e)) == null ? void 0 : _a.name) ?? void 0;
  }
  toJSON() {
    return { fields: this.fields.map((e) => S.isSerializable(e) ? e.toJSON() : e), timeZoneByFieldName: this._timeZoneByFieldName ? Array.from(this._timeZoneByFieldName.entries()) : null };
  }
};
function w(e) {
  return e.trim().toLowerCase();
}
function M(e) {
  var _a;
  return ((_a = p(e)) == null ? void 0 : _a.toLowerCase()) ?? "";
}
var N = /* @__PURE__ */ new Set(["time-only", "date-only", "timestamp-offset", "esriFieldTypeDateOnly", "esriFieldTypeTimeOnly", "esriFieldTypeTimestampOffset"]);
function S2(e) {
  const i = /* @__PURE__ */ new Map();
  if (!e.fields) return i;
  const t2 = true === e.datesInUnknownTimezone, { timeInfo: s2, editFieldsInfo: n3 } = e, r2 = (s2 ? "startField" in s2 ? s2.startField : s2.startTimeField : "") ?? "", l = (s2 ? "endField" in s2 ? s2.endField : s2.endTimeField : "") ?? "", o2 = g(e) ? e.dateFieldsTimeZone ?? null : e.dateFieldsTimeReference ? f(e.dateFieldsTimeReference) : null, d = n3 ? y(n3) ? n3.timeZone ?? o2 : n3.dateFieldsTimeReference ? f(n3.dateFieldsTimeReference) : o2 ?? n2 : null, a = s2 ? _(s2) ? s2.timeZone ?? o2 : s2.timeReference ? f(s2.timeReference) : o2 : null, m = /* @__PURE__ */ new Map([[w((n3 == null ? void 0 : n3.creationDateField) ?? ""), d], [w((n3 == null ? void 0 : n3.editDateField) ?? ""), d], [w(r2), a], [w(l), a]]);
  for (const { name: u, type: f2 } of e.fields) if (N.has(f2)) i.set(u, t);
  else if ("date" !== f2 && "esriFieldTypeDate" !== f2) i.set(u, null);
  else if (t2) i.set(u, t);
  else {
    const e2 = m.get(w(u ?? "")) ?? o2;
    i.set(u, e2);
  }
  return i;
}

export {
  Z
};
//# sourceMappingURL=chunk-FFVHLGAP.js.map
