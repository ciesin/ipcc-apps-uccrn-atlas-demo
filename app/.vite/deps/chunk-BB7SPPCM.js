import {
  A,
  D as D3,
  E as E2,
  F,
  I,
  L,
  O as O2,
  S as S3,
  S2 as S4,
  T as T2,
  a as a2,
  f as f4,
  g as g3,
  h,
  l as l2,
  m as m4,
  p,
  s as s3,
  t as t2,
  t2 as t3,
  w,
  w2
} from "./chunk-N5NRCY3G.js";
import {
  t
} from "./chunk-4DEIS6AK.js";
import {
  C
} from "./chunk-GKX3Z6XX.js";
import {
  B,
  ve,
  ze
} from "./chunk-O4H354HZ.js";
import {
  D as D2,
  E,
  J,
  M,
  O,
  T,
  d,
  f as f2,
  g as g2,
  l,
  m,
  o as o2,
  s as s2,
  x
} from "./chunk-SCYMP6Y5.js";
import {
  D,
  a,
  i as i2,
  n as n3,
  u
} from "./chunk-CBVVZO37.js";
import {
  i,
  o,
  r
} from "./chunk-Z2A222O3.js";
import {
  Ye
} from "./chunk-JT5MNXX3.js";
import {
  n as n4,
  x as x2
} from "./chunk-JOUVYFAY.js";
import {
  c as c3
} from "./chunk-G7HNCC5G.js";
import {
  Z
} from "./chunk-FFVHLGAP.js";
import {
  c as c2
} from "./chunk-3GIIPEHS.js";
import {
  d as d2
} from "./chunk-5GAOP2C3.js";
import {
  b as b2
} from "./chunk-AI2O2GKK.js";
import {
  m as m3
} from "./chunk-ANGUSND2.js";
import {
  y
} from "./chunk-FF44HCOD.js";
import {
  b
} from "./chunk-5X74MKXM.js";
import {
  r as r2
} from "./chunk-STBNLAGT.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  f as f3
} from "./chunk-NTUX5M6N.js";
import {
  S as S2
} from "./chunk-IP4HFFRO.js";
import {
  m as m2
} from "./chunk-CHL75CEP.js";
import {
  n as n2
} from "./chunk-YUVX6H42.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  c
} from "./chunk-LTDNORB5.js";
import {
  P2 as P,
  s
} from "./chunk-UFBX3XSC.js";
import {
  S,
  n
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/arcade/featureSetCollection.js
var e = class {
  constructor() {
    this.declaredRootClass = "esri.arcade.featureSetCollection", this._layerById = {}, this._layerByName = {};
  }
  add(e3, t5, a6) {
    this._layerById[t5] = a6, this._layerByName[e3] = a6;
  }
  async featureSetByName(e3, t5 = true, a6 = ["*"]) {
    return void 0 === this._layerByName[e3] ? null : this._layerByName[e3];
  }
  async featureSetById(e3, t5 = true, a6 = ["*"]) {
    return void 0 === this._layerById[e3] ? null : this._layerById[e3];
  }
  castToText(e3 = false) {
    return "object, FeatureSetCollection";
  }
};

// node_modules/@arcgis/core/arcade/featureset/actions/AttributeFilter.js
var c4 = class _c extends S4 {
  constructor(e3) {
    super(e3), this.declaredClass = "esri.arcade.featureset.actions.AttributeFilter", this._maxProcessing = 1e3, this._parent = e3.parentfeatureset, e3.whereclause instanceof D ? (this._whereclause = e3.whereclause, this._whereClauseFunction = null) : (this._whereClauseFunction = e3.whereclause, this._whereclause = null);
  }
  _initialiseFeatureSet() {
    null !== this._parent ? (this.fields = this._parent.fields.slice(), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types, this.subtypeField = this._parent.subtypeField, this.subtypes = this._parent.subtypes) : (this.fields = [], this.typeIdField = "", this.subtypeField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new g({ wkid: 4326 }), this.geometryType = D2.point);
  }
  async _getSet(e3) {
    if (null === this._wset) {
      await this._ensureLoaded();
      const t5 = await this._parent._getFilteredSet("", null, this._whereclause, null, e3);
      return this._checkCancelled(e3), null !== this._whereClauseFunction ? this._wset = new t3(t5._candidates.slice().concat(t5._known.slice()), [], t5._ordered, this._clonePageDefinition(t5.pagesDefinition)) : this._wset = new t3(t5._candidates.slice(), t5._known.slice(), t5._ordered, this._clonePageDefinition(t5.pagesDefinition)), this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet(e3) {
    var _a;
    let t5 = (_a = this._parent) == null ? void 0 : _a._isInFeatureSet(e3);
    return t5 === l.NotInFeatureSet ? t5 : (t5 = this._idstates[e3], void 0 === t5 ? l.Unknown : t5);
  }
  _getFeature(e3, t5, s5) {
    return this._parent._getFeature(e3, t5, s5);
  }
  _getFeatures(e3, t5, s5, i3) {
    return this._parent._getFeatures(e3, t5, s5, i3);
  }
  _featureFromCache(e3) {
    return this._parent._featureFromCache(e3);
  }
  executeWhereClause(e3) {
    var _a;
    return ((_a = this._whereclause) == null ? void 0 : _a.testFeature(e3)) ?? false;
  }
  async executeWhereClauseDeferred(e3) {
    if (null !== this._whereClauseFunction) {
      const t5 = this._whereClauseFunction(e3);
      return S(t5), t5;
    }
    return this.executeWhereClause(e3);
  }
  async _fetchAndRefineFeatures(e3, t5, s5) {
    var _a, _b, _c2;
    const r3 = new t3([], e3, false, null), a6 = Math.min(t5, e3.length);
    if (await ((_a = this._parent) == null ? void 0 : _a._getFeatures(r3, -1, a6, s5)), this._checkCancelled(s5), null == this._whereClauseFunction) {
      for (let t6 = 0; t6 < a6; t6++) {
        const s6 = (_b = this._parent) == null ? void 0 : _b._featureFromCache(e3[t6]);
        true === this.executeWhereClause(s6) ? this._idstates[e3[t6]] = l.InFeatureSet : this._idstates[e3[t6]] = l.NotInFeatureSet;
      }
      return "success";
    }
    const l3 = [];
    for (let i3 = 0; i3 < a6; i3++) {
      const t6 = (_c2 = this._parent) == null ? void 0 : _c2._featureFromCache(e3[i3]);
      l3.push(await this.executeWhereClauseDeferred(t6));
    }
    for (let i3 = 0; i3 < t5; i3++) true === l3[i3] ? this._idstates[e3[i3]] = l.InFeatureSet : this._idstates[e3[i3]] = l.NotInFeatureSet;
    return "success";
  }
  async _getFilteredSet(e3, t5, s5, r3, n5) {
    null !== this._whereClauseFunction || (null !== s5 ? null !== this._whereclause && (s5 = g3(this._whereclause, s5)) : s5 = this._whereclause), await this._ensureLoaded();
    const l3 = await this._parent._getFilteredSet(e3, t5, s5, r3, n5);
    let h2;
    return this._checkCancelled(n5), h2 = null !== this._whereClauseFunction ? new t3(l3._candidates.slice().concat(l3._known.slice()), [], l3._ordered, this._clonePageDefinition(l3.pagesDefinition)) : new t3(l3._candidates.slice(), l3._known.slice(), l3._ordered, this._clonePageDefinition(l3.pagesDefinition)), h2;
  }
  async _stat(e3, t5, s5, i3, r3, n5, l3) {
    if (null !== this._whereClauseFunction) return null === r3 && "" === s5 && null === i3 ? this._manualStat(e3, t5, n5, l3) : { calculated: false };
    let h2 = this._whereclause;
    null !== r3 && null !== this._whereclause && (h2 = g3(this._whereclause, r3));
    const u2 = await this._parent._stat(e3, t5, s5, i3, h2, n5, l3);
    return false === u2.calculated ? null === r3 && "" === s5 && null === i3 ? this._manualStat(e3, t5, n5, l3) : { calculated: false } : u2;
  }
  async _canDoAggregates(e3, t5, s5, i3, r3) {
    return null === this._whereClauseFunction && (null !== r3 ? null !== this._whereclause && (r3 = g3(this._whereclause, r3)) : r3 = this._whereclause, null !== this._parent && this._parent._canDoAggregates(e3, t5, s5, i3, r3));
  }
  async _getAggregatePagesDataSourceDefinition(s5, i3, r3, n5, l3, h2, u2) {
    if (null === this._parent) throw new s3(t2.NeverReach);
    return null !== l3 ? null !== this._whereclause && (l3 = g3(this._whereclause, l3)) : l3 = this._whereclause, this._parent._getAggregatePagesDataSourceDefinition(s5, i3, r3, n5, l3, h2, u2);
  }
  static registerAction() {
    S4._featuresetFunctions.filter = function(e3) {
      if ("function" == typeof e3) return new _c({ parentfeatureset: this, whereclause: e3 });
      let t5 = null;
      return e3 instanceof D && (t5 = e3), new _c({ parentfeatureset: this, whereclause: t5 });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
};

// node_modules/@arcgis/core/arcade/featureset/actions/Adapted.js
var I2 = class {
  constructor(e3) {
    this.field = e3, this.sqlRewritable = false;
  }
  postInitialization(e3, t5) {
  }
};
var k = class extends I2 {
  constructor(e3) {
    super(e3), this.sqlRewritable = true;
  }
  extractValue(e3) {
    return e3.attributes[this.field.name];
  }
  rewriteSql(e3) {
    return { rewritten: this.sqlRewritable, where: e3 };
  }
};
var b3 = class extends I2 {
  constructor(e3, t5, r3) {
    super(s2(e3)), this.originalField = e3, this.sqlRewritable = true, this.field.name = t5, this.field.alias = r3;
  }
  rewriteSql(e3, t5) {
    return { rewritten: this.sqlRewritable, where: p(e3, this.field.name, this.originalField.name, t5.getFieldsIndex()) };
  }
  extractValue(e3) {
    return e3.attributes[this.originalField.name];
  }
};
var B2 = class _B extends I2 {
  constructor(e3, t5, r3) {
    super(e3), this.codefield = t5, this.lkp = r3, this.reverseLkp = {};
    for (const s5 in r3) this.reverseLkp[r3[s5]] = s5;
    this.sqlRewritable = true;
  }
  rewriteSql(e3, t5) {
    const r3 = this.evaluateNodeToWhereClause(e3.parseTree, o2.Standardised, this.field.name, this.codefield instanceof D ? f4(this.codefield, o2.Standardised) : this.codefield, e3.parameters);
    return r3.includes(_B.BADNESS) ? { rewritten: false, where: e3 } : { rewritten: this.sqlRewritable, where: D.create(r3, { fieldsIndex: t5._parent.getFieldsIndex(), timeZone: t5.dateFieldsTimeZoneDefaultUTC }) };
  }
  evaluateNodeToWhereClause(e3, t5, r3 = null, s5 = null, a6) {
    let i3, l3, n5, p3;
    switch (e3.type) {
      case "interval":
        return F(this.evaluateNodeToWhereClause(e3.value, t5, r3, s5, a6), e3.qualifier, e3.op);
      case "case-expression": {
        let s6 = " CASE ";
        "simple" === e3.format && (s6 += this.evaluateNodeToWhereClause(e3.operand, t5, r3, _B.BADNESS, a6));
        for (let i4 = 0; i4 < e3.clauses.length; i4++) s6 += " WHEN " + this.evaluateNodeToWhereClause(e3.clauses[i4].operand, t5, r3, _B.BADNESS, a6) + " THEN " + this.evaluateNodeToWhereClause(e3.clauses[i4].value, t5, r3, _B.BADNESS, a6);
        return null !== e3.else && (s6 += " ELSE " + this.evaluateNodeToWhereClause(e3.else, t5, r3, _B.BADNESS, a6)), s6 += " END ", s6;
      }
      case "parameter": {
        const r4 = a6[e3.value.toLowerCase()];
        if ("string" == typeof r4) return "'" + r4.toString().replaceAll("'", "''") + "'";
        if (d(r4)) return I(r4, t5);
        if (m(r4)) return I(r4, t5);
        if (T(r4)) return A(r4, t5);
        if (f2(r4)) return S3(r4, t5);
        if (g2(r4)) return E2(r4, t5);
        if (Array.isArray(r4)) {
          const e4 = [];
          for (let s6 = 0; s6 < r4.length; s6++) "string" == typeof r4[s6] ? e4.push("'" + r4[s6].toString().replaceAll("'", "''") + "'") : d(r4[s6]) || m(r4[s6]) ? e4.push(I(r4[s6], t5)) : T(r4[s6]) ? e4.push(A(r4[s6], t5)) : f2(r4[s6]) ? e4.push(S3(r4[s6], t5)) : g2(r4[s6]) ? e4.push(E2(r4[s6], t5)) : e4.push(r4[s6].toString());
          return e4;
        }
        return r4.toString();
      }
      case "expression-list":
        l3 = [];
        for (const i4 of e3.value) l3.push(this.evaluateNodeToWhereClause(i4, t5, r3, s5, a6));
        return l3;
      case "unary-expression":
        return " ( NOT " + this.evaluateNodeToWhereClause(e3.expr, t5, r3, _B.BADNESS, a6) + " ) ";
      case "binary-expression":
        switch (e3.operator) {
          case "AND":
            return " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, s5, a6) + " AND " + this.evaluateNodeToWhereClause(e3.right, t5, r3, s5, a6) + ") ";
          case "OR":
            return " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, s5, a6) + " OR " + this.evaluateNodeToWhereClause(e3.right, t5, r3, s5, a6) + ") ";
          case "IS":
            if ("null" !== e3.right.type) throw new n3(a.UnsupportedIsRhs);
            return " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, s5, a6) + " IS NULL )";
          case "ISNOT":
            if ("null" !== e3.right.type) throw new n3(a.UnsupportedIsRhs);
            return " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, s5, a6) + " IS NOT NULL )";
          case "IN":
            if (i3 = [], "expression-list" === e3.right.type) {
              if ("column-reference" === e3.left.type && e3.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                const i4 = [];
                let l4 = true;
                for (const t6 of e3.right.value) {
                  if ("string" !== t6.type) {
                    l4 = false;
                    break;
                  }
                  if (void 0 === this.lkp[t6.value]) {
                    l4 = false;
                    break;
                  }
                  i4.push(this.lkp[t6.value].toString());
                }
                if (l4) return " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, s5, a6) + " IN (" + i4.join(",") + ")) ";
              }
              return i3 = this.evaluateNodeToWhereClause(e3.right, t5, r3, s5, a6), " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, s5, a6) + " IN (" + i3.join(",") + ")) ";
            }
            return p3 = this.evaluateNodeToWhereClause(e3.right, t5, r3, s5, a6), Array.isArray(p3) ? " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, s5, a6) + " IN (" + p3.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, s5, a6) + " IN (" + p3 + ")) ";
          case "NOT IN":
            if (i3 = [], "expression-list" === e3.right.type) {
              if ("column-reference" === e3.left.type && e3.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                const i4 = [];
                let l4 = true;
                for (const t6 of e3.right.value) {
                  if ("string" !== t6.type) {
                    l4 = false;
                    break;
                  }
                  if (void 0 === this.lkp[t6.value]) {
                    l4 = false;
                    break;
                  }
                  i4.push(this.lkp[t6.value].toString());
                }
                if (l4) return " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, s5, a6) + " NOT IN (" + i4.join(",") + ")) ";
              }
              return i3 = this.evaluateNodeToWhereClause(e3.right, t5, r3, s5, a6), " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, s5, a6) + " NOT IN (" + i3.join(",") + ")) ";
            }
            return p3 = this.evaluateNodeToWhereClause(e3.right, t5, r3, s5, a6), Array.isArray(p3) ? " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, s5, a6) + " NOT IN (" + p3.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, s5, a6) + " NOT IN (" + p3 + ")) ";
          case "BETWEEN":
            return n5 = this.evaluateNodeToWhereClause(e3.right, t5, r3, _B.BADNESS, a6), " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, _B.BADNESS, a6) + " BETWEEN " + n5[0] + " AND " + n5[1] + " ) ";
          case "NOTBETWEEN":
            return n5 = this.evaluateNodeToWhereClause(e3.right, t5, r3, _B.BADNESS, a6), " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, _B.BADNESS, a6) + " NOT BETWEEN " + n5[0] + " AND " + n5[1] + " ) ";
          case "LIKE":
            return "" !== e3.escape ? " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, _B.BADNESS, a6) + " LIKE " + this.evaluateNodeToWhereClause(e3.right, t5, r3, _B.BADNESS, a6) + " ESCAPE '" + e3.escape + "') " : " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, _B.BADNESS, a6) + " LIKE " + this.evaluateNodeToWhereClause(e3.right, t5, r3, _B.BADNESS, a6) + ") ";
          case "NOT LIKE":
            return "" !== e3.escape ? " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, _B.BADNESS, a6) + " NOT LIKE " + this.evaluateNodeToWhereClause(e3.right, t5, r3, _B.BADNESS, a6) + " ESCAPE '" + e3.escape + "') " : " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, _B.BADNESS, a6) + " NOT LIKE " + this.evaluateNodeToWhereClause(e3.right, t5, r3, _B.BADNESS, a6) + ") ";
          case "<>":
          case "=":
            if ("column-reference" === e3.left.type && "string" === e3.right.type) {
              if (e3.left.column.toUpperCase() === this.field.name.toUpperCase() && void 0 !== this.lkp[e3.right.value.toString()]) return " (" + s5 + " " + e3.operator + " " + this.lkp[e3.right.value.toString()].toString() + ") ";
            } else if ("column-reference" === e3.right.type && "string" === e3.left.type && e3.right.column.toUpperCase() === this.field.name.toUpperCase()) return " (" + this.lkp[e3.right.value.toString()].toString() + " " + e3.operator + " " + s5 + ") ";
            return " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, _B.BADNESS, a6) + " " + e3.operator + " " + this.evaluateNodeToWhereClause(e3.right, t5, r3, _B.BADNESS, a6) + ") ";
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "*":
          case "-":
          case "+":
          case "/":
          case "||":
            return " (" + this.evaluateNodeToWhereClause(e3.left, t5, r3, _B.BADNESS, a6) + " " + e3.operator + " " + this.evaluateNodeToWhereClause(e3.right, t5, r3, _B.BADNESS, a6) + ") ";
        }
      case "null":
        return "null";
      case "boolean":
        return true === e3.value ? "1" : "0";
      case "string":
        return "'" + e3.value.toString().replaceAll("'", "''") + "'";
      case "timestamp":
        return `timestamp '${e3.value}'`;
      case "date":
        return `date '${e3.value}'`;
      case "time":
        return `time '${e3.value}'`;
      case "number":
        return e3.value.toString();
      case "current-time":
        return L(e3.mode, t5);
      case "current-user":
        return "CURRENT_USER";
      case "column-reference":
        return r3 && r3.toLowerCase() === e3.column.toLowerCase() ? "(" + s5 + ")" : h(e3.column);
      case "data-type":
        return e3.value;
      case "function": {
        const s6 = this.evaluateNodeToWhereClause(e3.args, t5, r3, _B.BADNESS, a6);
        return T2(e3.name, s6, t5);
      }
    }
    throw new n3(a.UnsupportedSyntax, { node: e3.type });
  }
  extractValue(e3) {
    return this.codefield instanceof D ? this.reverseLkp[D.convertValueToStorageFormat(this.codefield.calculateValueCompiled(e3))] : this.reverseLkp[e3.attributes[this.codefield]];
  }
};
B2.BADNESS = "_!!!_BAD_LKP_!!!!";
var L2 = class extends I2 {
  constructor(e3, t5) {
    super(e3), this._sql = t5;
  }
  rewriteSql(e3, t5) {
    return { rewritten: true, where: p(e3, this.field.name, f4(this._sql, o2.Standardised), t5.getFieldsIndex()) };
  }
  extractValue(e3) {
    return D.convertValueToStorageFormat(this._sql.calculateValueCompiled(e3), this.field.type);
  }
};
var R = class extends S4 {
  static findField(e3, t5) {
    for (const r3 of e3) if (r3.name.toLowerCase() === t5.toString().toLowerCase()) return r3;
    return null;
  }
  constructor(e3) {
    super(e3), this._calcFunc = null, this.declaredClass = "esri.arcade.featureset.actions.Adapted", this.adaptedFields = [], this._extraFilter = null, this._extraFilter = e3.extraFilter, this._parent = e3.parentfeatureset, this._maxProcessing = 30, this.adaptedFields = e3.adaptedFields;
  }
  _initialiseFeatureSet() {
    null !== this._parent ? (this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.spatialReference = new g({ wkid: 4326 }), this.objectIdField = "", this.globalIdField = "", this.geometryType = D2.point, this.typeIdField = "", this.types = null, this.subtypeField = null, this.subtypes = null), this.fields = [];
    for (const e3 of this.adaptedFields) e3.postInitialization(this, this._parent), this.fields.push(e3.field);
  }
  async _getSet(e3) {
    var _a;
    if (null === this._wset) {
      await this._ensureLoaded();
      let t5 = null;
      return t5 = this._extraFilter ? await this._getFilteredSet("", null, null, null, e3) : await ((_a = this._parent) == null ? void 0 : _a._getSet(e3)), this._checkCancelled(e3), n(t5), this._wset = new t3(t5._candidates.slice(), t5._known.slice(), t5._ordered, this._clonePageDefinition(t5.pagesDefinition)), this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet(e3) {
    return this._parent._isInFeatureSet(e3);
  }
  async _getFeatures(r3, s5, a6, l3) {
    var _a, _b;
    const n5 = [];
    -1 !== s5 && void 0 === this._featureCache[s5] && n5.push(s5);
    const o3 = this._maxQueryRate();
    if (true === this._checkIfNeedToExpandKnownPage(r3, o3)) return await this._expandPagedSet(r3, o3, 0, 0, l3), this._getFeatures(r3, s5, a6, l3);
    let u2 = 0;
    for (let e3 = r3._lastFetchedIndex; e3 < r3._known.length && (u2++, u2 <= a6 && (r3._lastFetchedIndex += 1), !(void 0 === this._featureCache[r3._known[e3]] && (r3._known[e3] !== s5 && n5.push(r3._known[e3]), n5.length >= o3))); e3++) ;
    if (0 === n5.length) return "success";
    r3 = new t3([], n5, r3._ordered, null);
    const h2 = Math.min(n5.length, a6);
    await ((_a = this._parent) == null ? void 0 : _a._getFeatures(r3, -1, h2, l3)), this._checkCancelled(l3);
    const c5 = [];
    for (let e3 = 0; e3 < h2; e3++) {
      const t5 = (_b = this._parent) == null ? void 0 : _b._featureFromCache(n5[e3]);
      void 0 !== t5 && c5.push({ geometry: t5.geometry, attributes: t5.attributes, id: n5[e3] });
    }
    for (const i3 of c5) {
      const r4 = [];
      for (const e3 of this.adaptedFields) r4[e3.field.name] = e3.extractValue(i3);
      this._featureCache[i3.id] = new b({ attributes: r4, geometry: o(i3.geometry) });
    }
    return "success";
  }
  async _fetchAndRefineFeatures() {
    throw new s3(t2.NeverReach);
  }
  async _getFilteredSet(e3, t5, r3, s5, a6) {
    let l3 = false;
    const n5 = this._reformulateWithoutAdaptions(r3);
    l3 = n5.cannot, r3 = n5.where;
    let o3 = false;
    if (null !== s5) {
      o3 = true;
      const e4 = [];
      for (const t6 of this.adaptedFields) if (!(t6 instanceof k) && true === s5.scanForField(t6.field.name)) {
        if (!(t6 instanceof b3)) {
          s5 = null, o3 = false;
          break;
        }
        e4.push({ field: t6.field.name, newfield: t6.originalField.name });
      }
      s5 && e4.length > 0 && (s5 = s5.replaceFields(e4));
    }
    null !== r3 ? null !== this._extraFilter && (r3 = g3(this._extraFilter, r3)) : r3 = this._extraFilter, await this._ensureLoaded();
    const u2 = await this._parent._getFilteredSet(e3, t5, r3, s5, a6);
    let h2;
    return this._checkCancelled(a6), h2 = true === l3 ? new t3(u2._candidates.slice().concat(u2._known.slice()), [], true === o3 && u2._ordered, this._clonePageDefinition(u2.pagesDefinition)) : new t3(u2._candidates.slice(), u2._known.slice(), true === o3 && u2._ordered, this._clonePageDefinition(u2.pagesDefinition)), h2;
  }
  _reformulateWithoutAdaptions(e3) {
    const t5 = { cannot: false, where: e3 };
    if (null !== e3) {
      for (const r3 of this.adaptedFields) if (true === D3(e3, r3.field.name)) {
        const s5 = r3.rewriteSql(e3, this);
        if (true !== s5.rewritten) {
          t5.cannot = true, t5.where = null;
          break;
        }
        t5.where = s5.where;
      }
    }
    return t5;
  }
  async _stat(e3, t5, r3, s5, a6, i3, l3) {
    let n5 = false, o3 = this._reformulateWithoutAdaptions(t5);
    if (n5 = o3.cannot, t5 = o3.where, o3 = this._reformulateWithoutAdaptions(a6), n5 = n5 || o3.cannot, null !== (a6 = o3.where) ? null !== this._extraFilter && (a6 = g3(this._extraFilter, a6)) : a6 = this._extraFilter, true === n5) return null === a6 && "" === r3 && null === s5 ? this._manualStat(e3, t5, i3, l3) : { calculated: false };
    const u2 = await this._parent._stat(e3, t5, r3, s5, a6, i3, l3);
    return false === u2.calculated ? null === a6 && "" === r3 && null === s5 ? this._manualStat(e3, t5, i3, l3) : { calculated: false } : u2;
  }
  async _canDoAggregates(e3, t5, r3, s5, a6) {
    if (null === this._parent) return false;
    for (let n5 = 0; n5 < e3.length; n5++) for (const t6 of this.adaptedFields) if (e3[n5].toLowerCase() === t6.field.name.toLowerCase() && !(t6 instanceof k)) return false;
    const i3 = [];
    for (let n5 = 0; n5 < t5.length; n5++) {
      const e4 = t5[n5];
      if (null !== e4.workingexpr) {
        const t6 = this._reformulateWithoutAdaptions(e4.workingexpr);
        if (t6.cannot) return false;
        const r4 = e4.clone();
        r4.workingexpr = t6.where, i3.push(r4);
      } else i3.push(e4);
    }
    const l3 = this._reformulateWithoutAdaptions(a6);
    return !l3.cannot && (null !== (a6 = l3.where) ? null !== this._extraFilter && (a6 = g3(this._extraFilter, a6)) : a6 = this._extraFilter, this._parent._canDoAggregates(e3, i3, r3, s5, a6));
  }
  async _getAggregatePagesDataSourceDefinition(e3, t5, a6, i3, l3, n5, o3) {
    if (null === this._parent) throw new s3(t2.NeverReach);
    const u2 = [];
    for (let c5 = 0; c5 < t5.length; c5++) {
      const e4 = t5[c5];
      if (null !== e4.workingexpr) {
        const t6 = this._reformulateWithoutAdaptions(e4.workingexpr);
        if (t6.cannot) throw new s3(t2.NeverReach);
        const a7 = e4.clone();
        a7.workingexpr = t6.where, u2.push(a7);
      } else u2.push(e4);
    }
    const h2 = this._reformulateWithoutAdaptions(l3);
    if (h2.cannot) throw new s3(t2.NeverReach);
    return null !== (l3 = h2.where) ? null !== this._extraFilter && (l3 = g3(this._extraFilter, l3)) : l3 = this._extraFilter, this._parent._getAggregatePagesDataSourceDefinition(e3, u2, a6, i3, l3, n5, o3);
  }
};

// node_modules/@arcgis/core/arcade/featureset/support/OrderbyClause.js
function t4(t5, e3) {
  return t5 === e3 ? 0 : null === t5 ? -1 : null === e3 ? 1 : t5 < e3 ? -1 : 1;
}
var e2 = class _e {
  constructor(t5) {
    const e3 = t5.split(",");
    this._fields = [], this._directions = [];
    for (let s5 = 0; s5 < e3.length; s5++) {
      const t6 = e3[s5].match(/\S+/g);
      this._fields.push(t6[0]), 2 === t6.length ? "asc" === t6[1].toLowerCase() ? this._directions.push(1) : this._directions.push(0) : this._directions.push(1);
    }
  }
  constructClause() {
    let t5 = "";
    for (let e3 = 0; e3 < this._fields.length; e3++) 0 !== e3 && (t5 += ","), t5 += this._fields[e3], 1 === this._directions[e3] ? t5 += " ASC" : t5 += " DESC";
    return t5;
  }
  order(e3) {
    e3.sort((e4, s5) => {
      for (let i3 = 0; i3 < this._fields.length; i3++) {
        const r3 = this.featureValue(e4.feature, this._fields[i3], i3), l3 = this.featureValue(s5.feature, this._fields[i3], i3);
        let o3 = 0;
        if (o3 = 1 === this._directions[i3] ? t4(r3, l3) : -1 * t4(r3, l3), 0 !== o3) return o3;
      }
      return 0;
    });
  }
  scanForField(t5) {
    for (let e3 = 0; e3 < this._fields.length; e3++) if (this._fields[e3].toLowerCase().trim() === t5.toLowerCase().trim()) return true;
    return false;
  }
  replaceFields(t5) {
    let s5 = "";
    for (let e3 = 0; e3 < this._fields.length; e3++) {
      0 !== e3 && (s5 += ",");
      let i3 = this._fields[e3];
      for (const e4 of t5) if (i3.toLowerCase() === e4.field.toLowerCase()) {
        i3 = e4.newfield;
        break;
      }
      s5 += i3, 1 === this._directions[e3] ? s5 += " ASC" : s5 += " DESC";
    }
    return new _e(s5);
  }
  featureValue(t5, e3, s5) {
    const i3 = t5.attributes[e3];
    if (void 0 !== i3) return i3;
    for (const r3 in t5.attributes) if (e3.toLowerCase() === r3.toLowerCase()) return this._fields[s5] = r3, t5.attributes[r3];
    return null;
  }
};

// node_modules/@arcgis/core/arcade/featureset/actions/OrderBy.js
var a3 = class _a extends S4 {
  constructor(e3) {
    super(e3), this._orderbyclause = null, this.declaredClass = "esri.arcade.featureset.actions.OrderBy", this._maxProcessing = 100, this._orderbyclause = e3.orderbyclause, this._parent = e3.parentfeatureset;
  }
  async _getSet(e3) {
    if (null === this._wset) {
      await this._ensureLoaded();
      const t5 = await this._getFilteredSet("", null, null, this._orderbyclause, e3);
      return this._checkCancelled(e3), this._wset = t5, this._wset;
    }
    return this._wset;
  }
  async manualOrderSet(e3, t5) {
    var _a2;
    const r3 = await this.getIdColumnDictionary(e3, [], -1, t5);
    (_a2 = this._orderbyclause) == null ? void 0 : _a2.order(r3);
    const n5 = new t3([], [], true, null);
    for (let s5 = 0; s5 < r3.length; s5++) n5._known.push(r3[s5].id);
    return n5;
  }
  async getIdColumnDictionary(t5, r3, n5, s5) {
    if (n5 < t5._known.length - 1) {
      const i3 = this._maxQueryRate();
      if ("GETPAGES" === t5._known[n5 + 1]) return await ve(this._parent._expandPagedSet(t5, i3, 0, 0, s5)), this.getIdColumnDictionary(t5, r3, n5, s5);
      let a6 = n5 + 1;
      const o3 = [];
      for (; a6 < t5._known.length && "GETPAGES" !== t5._known[a6]; ) o3.push(t5._known[a6]), a6++;
      n5 += o3.length;
      const u2 = await ve(this._parent._getFeatureBatch(o3, s5));
      this._checkCancelled(s5);
      for (const e3 of u2) r3.push({ id: e3.attributes[this.objectIdField], feature: e3 });
      return this.getIdColumnDictionary(t5, r3, n5, s5);
    }
    return t5._candidates.length > 0 ? (await ve(this._refineSetBlock(t5, this._maxProcessingRate(), s5)), this._checkCancelled(s5), this.getIdColumnDictionary(t5, r3, n5, s5)) : r3;
  }
  _isInFeatureSet(e3) {
    return this._parent._isInFeatureSet(e3);
  }
  _getFeatures(e3, t5, r3, n5) {
    return this._parent._getFeatures(e3, t5, r3, n5);
  }
  _featureFromCache(e3) {
    if (void 0 === this._featureCache[e3]) {
      const t5 = this._parent._featureFromCache(e3);
      if (void 0 === t5) return;
      return null === t5 ? null : (this._featureCache[e3] = t5, t5);
    }
    return this._featureCache[e3];
  }
  async _fetchAndRefineFeatures() {
    throw new s3(t2.NeverReach);
  }
  async _getFilteredSet(e3, t5, r3, n5, i3) {
    await this._ensureLoaded();
    const a6 = await this._parent._getFilteredSet(e3, t5, r3, null === n5 ? this._orderbyclause : n5, i3);
    this._checkCancelled(i3);
    const o3 = new t3(a6._candidates.slice(), a6._known.slice(), a6._ordered, this._clonePageDefinition(a6.pagesDefinition));
    let u2 = true;
    if (a6._candidates.length > 0 && (u2 = false), false === o3._ordered) {
      let e4 = await this.manualOrderSet(o3, i3);
      return false === u2 && (null === t5 && null === r3 || (e4 = new t3(e4._candidates.slice().concat(e4._known.slice()), [], e4._ordered, this._clonePageDefinition(e4.pagesDefinition)))), e4;
    }
    return o3;
  }
  static registerAction() {
    S4._featuresetFunctions.orderBy = function(e3) {
      return "" === e3 ? this : new _a({ parentfeatureset: this, orderbyclause: new e2(e3) });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
};

// node_modules/@arcgis/core/arcade/featureset/support/StatsField.js
function s4(s5) {
  if ("function" === s5.parseTree.type) {
    if (0 === s5.parseTree.args.value.length) return { name: s5.parseTree.name, expr: null };
    if (s5.parseTree.args.value.length > 1) throw new n3(a.MissingStatisticParameters);
    const a6 = D.create(m4(s5.parseTree.args.value[0], o2.Standardised, s5.parameters), { fieldsIndex: s5.fieldsIndex, timeZone: s5.timeZone, currentUser: s5.currentUser });
    return { name: s5.parseTree.name, expr: a6 };
  }
  return null;
}
var a4 = class _a {
  constructor() {
    this.field = "", this.tofieldname = "", this.typeofstat = "MIN", this.workingexpr = null;
  }
  clone() {
    const e3 = new _a();
    return e3.field = this.field, e3.tofieldname = this.tofieldname, e3.typeofstat = this.typeofstat, e3.workingexpr = this.workingexpr, e3;
  }
  static parseStatField(e3, t5, o3, l3) {
    const f5 = new _a();
    f5.field = e3;
    const u2 = D.create(t5, { fieldsIndex: o3, timeZone: l3 }), p3 = s4(u2);
    if (null === p3) throw new n3(a.UnsupportedSqlFunction, { function: "" });
    const c5 = p3.name.toUpperCase().trim();
    if ("MIN" === c5) {
      if (f5.typeofstat = "MIN", f5.workingexpr = p3.expr, null === u2) throw new n3(a.InvalidFunctionParameters, { function: "min" });
    } else if ("MAX" === c5) {
      if (f5.typeofstat = "MAX", f5.workingexpr = p3.expr, null === u2) throw new n3(a.InvalidFunctionParameters, { function: "max" });
    } else if ("COUNT" === c5) f5.typeofstat = "COUNT", f5.workingexpr = p3.expr;
    else if ("STDEV" === c5) {
      if (f5.typeofstat = "STDDEV", f5.workingexpr = p3.expr, null === u2) throw new n3(a.InvalidFunctionParameters, { function: "stdev" });
    } else if ("SUM" === c5) {
      if (f5.typeofstat = "SUM", f5.workingexpr = p3.expr, null === u2) throw new n3(a.InvalidFunctionParameters, { function: "sum" });
    } else if ("MEAN" === c5) {
      if (f5.typeofstat = "AVG", f5.workingexpr = p3.expr, null === u2) throw new n3(a.InvalidFunctionParameters, { function: c5 });
    } else if ("AVG" === c5) {
      if (f5.typeofstat = "AVG", f5.workingexpr = p3.expr, null === u2) throw new n3(a.InvalidFunctionParameters, { function: "avg" });
    } else {
      if ("VAR" !== c5) throw new n3(a.UnsupportedSqlFunction, { function: c5 });
      if (f5.typeofstat = "VAR", f5.workingexpr = p3.expr, null === u2) throw new n3(a.InvalidFunctionParameters, { function: "var" });
    }
    return f5;
  }
  toStatisticsName() {
    switch (this.typeofstat.toUpperCase()) {
      case "MIN":
        return "min";
      case "MAX":
        return "max";
      case "SUM":
        return "sum";
      case "COUNT":
      default:
        return "count";
      case "VAR":
        return "var";
      case "STDDEV":
        return "stddev";
      case "AVG":
        return "avg";
    }
  }
};

// node_modules/@arcgis/core/arcade/featureset/actions/GroupBy.js
function G(e3) {
  if (!e3) return "COUNT";
  switch (e3.toLowerCase()) {
    case "max":
      return "MAX";
    case "var":
    case "variance":
      return "VAR";
    case "avg":
    case "average":
    case "mean":
      return "AVG";
    case "min":
      return "MIN";
    case "sum":
      return "SUM";
    case "stdev":
    case "stddev":
      return "STDDEV";
    case "count":
      return "COUNT";
  }
  return "COUNT";
}
var O3 = class _O extends S4 {
  constructor(e3) {
    super(e3), this._decodedStatsfield = [], this._decodedGroupbyfield = [], this._candosimplegroupby = true, this.phsyicalgroupbyfields = [], this.objectIdField = "ROW__ID", this._internalObjectIdField = "ROW__ID", this._adaptedFields = [], this.declaredClass = "esri.arcade.featureset.actions.Aggregate", this._uniqueIds = 1, this._maxQuery = 10, this._maxProcessing = 10, this._parent = e3.parentfeatureset, this._config = e3;
  }
  isTable() {
    return true;
  }
  async _getSet(e3) {
    if (null === this._wset) {
      const t5 = await this._getFilteredSet("", null, null, null, e3);
      return this._wset = t5, this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet() {
    return l.InFeatureSet;
  }
  _nextUniqueName(e3) {
    for (; 1 === e3["T" + this._uniqueIds.toString()]; ) this._uniqueIds++;
    const t5 = "T" + this._uniqueIds.toString();
    return e3[t5] = 1, t5;
  }
  _convertToEsriFieldType(e3) {
    return e3;
  }
  _initialiseFeatureSet() {
    const e3 = {};
    let t5 = false, n5 = 1;
    const r3 = this._parent ? this._parent.getFieldsIndex() : new Z([]);
    for (this.objectIdField = "ROW__ID", this.globalIdField = ""; false === t5; ) {
      let e4 = false;
      for (let t6 = 0; t6 < this._config.groupbyfields.length; t6++) if (this._config.groupbyfields[t6].name.toLowerCase() === this.objectIdField.toLowerCase()) {
        e4 = true;
        break;
      }
      if (false === e4) {
        for (let t6 = 0; t6 < this._config.statsfields.length; t6++) if (this._config.statsfields[t6].name.toLowerCase() === this.objectIdField.toLowerCase()) {
          e4 = true;
          break;
        }
      }
      false === e4 ? t5 = true : (this.objectIdField = "ROW__ID" + n5.toString(), n5++);
    }
    for (const i3 of this._config.statsfields) {
      const e4 = new a4();
      e4.field = i3.name, e4.tofieldname = i3.name, e4.workingexpr = i3.expression instanceof D ? i3.expression : D.create(i3.expression, { fieldsIndex: r3, timeZone: this.dateFieldsTimeZoneDefaultUTC }), e4.typeofstat = G(i3.statistic), this._decodedStatsfield.push(e4);
    }
    this._decodedGroupbyfield = [];
    for (const i3 of this._config.groupbyfields) {
      const e4 = { name: i3.name, singlefield: null, tofieldname: i3.name, expression: i3.expression instanceof D ? i3.expression : D.create(i3.expression, { fieldsIndex: r3, timeZone: this.dateFieldsTimeZoneDefaultUTC }), sqlType: null };
      this._decodedGroupbyfield.push(e4);
    }
    if (null !== this._parent) {
      this.geometryType = this._parent.geometryType, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = "";
      for (const t6 of this._parent.fields) e3[t6.name.toUpperCase()] = 1;
      this.types = null, this.subtypes = null, this.subtypeField = "";
    } else this.geometryType = D2.point, this.typeIdField = "", this.types = null, this.subtypes = null, this.subtypeField = "", this.spatialReference = new g({ wkid: 4326 });
    this.fields = [];
    const a6 = new a4();
    a6.field = this._nextUniqueName(e3), a6.tofieldname = this.objectIdField, a6.workingexpr = D.create(this._parent.objectIdField, { fieldsIndex: this._parent.getFieldsIndex(), timeZone: this.dateFieldsTimeZoneDefaultUTC }), a6.typeofstat = "MIN", this._decodedStatsfield.push(a6);
    for (const s5 of this._decodedGroupbyfield) {
      const t6 = new y();
      if (s5.name = this._nextUniqueName(e3), t6.name = s5.tofieldname, t6.alias = t6.name, O2(s5.expression)) {
        const e4 = this._parent.getField(f4(s5.expression, o2.Standardised));
        if (!e4) throw new s3(t2.AggregationFieldNotFound);
        s5.name = e4.name, s5.singlefield = e4.name, this.phsyicalgroupbyfields.push(e4.name), t6.type = e4.type, s5.sqlType = e4.type;
      } else {
        t6.type = this._convertToEsriFieldType(w(s5.expression, this._parent.fields));
        const e4 = new y();
        e4.name = s5.name, e4.alias = e4.name, this.phsyicalgroupbyfields.push(s5.name), this._adaptedFields.push(new L2(e4, s5.expression)), this._candosimplegroupby = false, s5.sqlType = t6.type;
      }
      this.fields.push(t6);
    }
    if (this._adaptedFields.length > 0) for (const i3 of this._parent.fields) this._adaptedFields.push(new k(i3));
    for (let i3 = 0; i3 < this._decodedStatsfield.length; i3++) {
      const t6 = new y();
      let s5 = null;
      const n6 = this._decodedStatsfield[i3];
      n6.field = this._nextUniqueName(e3), n6.tofieldname === this.objectIdField && (this._internalObjectIdField = n6.field), t6.name = n6.tofieldname, t6.alias = t6.name;
      const r4 = null !== n6.workingexpr && O2(n6.workingexpr) ? f4(n6.workingexpr, o2.Standardised) : "";
      switch (this._decodedStatsfield[i3].typeofstat) {
        case "SUM":
          if ("" !== r4) {
            if (s5 = this._parent.getField(r4), !s5) throw new s3(t2.AggregationFieldNotFound);
            t6.type = s5.type;
          } else t6.type = "double";
          break;
        case "MIN":
        case "MAX":
          if ("" !== r4) {
            if (s5 = this._parent.getField(r4), !s5) throw new s3(t2.AggregationFieldNotFound);
            t6.type = s5.type;
          } else t6.type = "double";
          break;
        case "COUNT":
          t6.type = "integer";
          break;
        case "STDDEV":
        case "VAR":
        case "AVG":
          if ("" !== r4 && (s5 = this._parent.getField(r4), !s5)) throw new s3(t2.AggregationFieldNotFound);
          t6.type = "double";
      }
      this.fields.push(t6);
    }
  }
  async _canDoAggregates() {
    return false;
  }
  async _getFeatures(e3, t5, i3, s5) {
    -1 !== t5 && this._featureCache[t5];
    const n5 = this._maxQuery;
    return true === this._checkIfNeedToExpandKnownPage(e3, n5) ? (await this._expandPagedSet(e3, n5, 0, 0, s5), this._getFeatures(e3, t5, i3, s5)) : "success";
  }
  async _getFilteredSet(e3, t5, i3, s5, o3) {
    if ("" !== e3) return new t3([], [], true, null);
    let l3 = null;
    const d4 = { ordered: false, nowhereclause: false };
    if (await this._ensureLoaded(), null !== i3) {
      for (let n5 = 0; n5 < this._decodedStatsfield.length; n5++) if (true === D3(i3, this._decodedStatsfield[n5].tofieldname)) {
        d4.nowhereclause = true, i3 = null;
        break;
      }
    }
    if (null !== s5) {
      d4.ordered = true;
      for (let e4 = 0; e4 < this._decodedStatsfield.length; e4++) if (true === s5.scanForField(this._decodedStatsfield[e4].tofieldname)) {
        s5 = null, d4.ordered = false;
        break;
      }
      if (null !== s5) {
        for (const e4 of this._decodedGroupbyfield) if (null === e4.singlefield && true === s5.scanForField(e4.tofieldname)) {
          s5 = null, d4.ordered = false;
          break;
        }
      }
    }
    if (false !== this._candosimplegroupby && await this._parent._canDoAggregates(this.phsyicalgroupbyfields, this._decodedStatsfield, "", null, null)) {
      let e4 = null;
      i3 && (e4 = this._reformulateWhereClauseWithoutGroupByFields(i3));
      let t6 = null;
      s5 && (t6 = this._reformulateOrderClauseWithoutGroupByFields(s5));
      const n5 = await this._parent._getAggregatePagesDataSourceDefinition(this.phsyicalgroupbyfields, this._decodedStatsfield, "", null, e4, t6, this._internalObjectIdField);
      return this._checkCancelled(o3), l3 = true === d4.nowhereclause ? new t3(n5._candidates.slice().concat(n5._known.slice()), [], true === d4.ordered && n5._ordered, this._clonePageDefinition(n5.pagesDefinition)) : new t3(n5._candidates.slice(), n5._known.slice(), true === d4.ordered && n5._ordered, this._clonePageDefinition(n5.pagesDefinition)), l3;
    }
    let c5 = this._parent;
    if (this._adaptedFields.length > 0 && (c5 = new R({ parentfeatureset: this._parent, adaptedFields: this._adaptedFields, extraFilter: null })), true === d4.nowhereclause) l3 = new t3(["GETPAGES"], [], false, { aggregatefeaturesetpagedefinition: true, resultOffset: 0, resultRecordCount: this._maxQuery, internal: { fullyResolved: false, workingItem: null, type: "manual", iterator: null, set: [], subfeatureset: new a3({ parentfeatureset: c5, orderbyclause: new e2(this.phsyicalgroupbyfields.join(",") + "," + this._parent.objectIdField + " ASC") }) } });
    else {
      let e4 = c5;
      if (null !== i3) {
        let t6 = null;
        i3 && (t6 = this._reformulateWhereClauseWithoutGroupByFields(i3)), e4 = new c4({ parentfeatureset: e4, whereclause: t6 });
      }
      l3 = new t3(["GETPAGES"], [], false, { aggregatefeaturesetpagedefinition: true, resultOffset: 0, resultRecordCount: this._maxQuery, internal: { fullyResolved: false, workingItem: null, type: "manual", iterator: null, set: [], subfeatureset: new a3({ parentfeatureset: e4, orderbyclause: new e2(this.phsyicalgroupbyfields.join(",") + "," + this._parent.objectIdField + " ASC") }) } });
    }
    return l3;
  }
  _reformulateWhereClauseWithoutStatsFields(e3) {
    for (const t5 of this._decodedStatsfield) e3 = p(e3, t5.tofieldname, f4(t5.workingexpr, o2.Standardised), this._parent.getFieldsIndex());
    return e3;
  }
  _reformulateWhereClauseWithoutGroupByFields(e3) {
    for (const t5 of this._decodedGroupbyfield) t5.tofieldname !== t5.name && (e3 = p(e3, t5.tofieldname, f4(t5.expression, o2.Standardised), this._parent.getFieldsIndex()));
    return e3;
  }
  _reformulateOrderClauseWithoutGroupByFields(e3) {
    const t5 = [];
    for (const i3 of this._decodedGroupbyfield) i3.tofieldname !== i3.name && t5.push({ field: i3.tofieldname, newfield: i3.name });
    return t5.length > 0 ? e3.replaceFields(t5) : e3;
  }
  _clonePageDefinition(e3) {
    return null === e3 ? null : true === e3.aggregatefeaturesetpagedefinition ? { aggregatefeaturesetpagedefinition: true, resultRecordCount: e3.resultRecordCount, resultOffset: e3.resultOffset, internal: e3.internal } : this._parent._clonePageDefinition(e3);
  }
  async _refineSetBlock(e3, t5, i3) {
    if (true === this._checkIfNeedToExpandCandidatePage(e3, this._maxQuery)) return await this._expandPagedSet(e3, this._maxQuery, 0, 0, i3), this._refineSetBlock(e3, t5, i3);
    this._checkCancelled(i3);
    const s5 = e3._candidates.length;
    this._refineKnowns(e3, t5);
    e3._candidates.length;
    return e3._candidates.length, e3;
  }
  _expandPagedSet(e3, t5, i3, s5, n5) {
    return this._expandPagedSetFeatureSet(e3, t5, i3, s5, n5);
  }
  async _getPhysicalPage(t5, i3, s5) {
    if (true === t5.pagesDefinition.aggregatefeaturesetpagedefinition) return this._sequentialGetPhysicalItem(t5, t5.pagesDefinition.resultRecordCount, s5, []);
    const n5 = await this._getAgregagtePhysicalPage(t5, i3, s5);
    for (const r3 of n5) {
      const t6 = { geometry: r3.geometry, attributes: {} }, i4 = {};
      for (const e3 in r3.attributes) i4[e3.toLowerCase()] = r3.attributes[e3];
      for (const e3 of this._decodedGroupbyfield) t6.attributes[e3.tofieldname] = i4[e3.name.toLowerCase()];
      for (const e3 of this._decodedStatsfield) t6.attributes[e3.tofieldname] = i4[e3.field.toLowerCase()];
      this._featureCache[t6.attributes[this.objectIdField]] = new b(t6);
    }
    return n5.length;
  }
  _sequentialGetPhysicalItem(e3, t5, i3, s5) {
    return new Promise((n5, r3) => {
      null === e3.pagesDefinition.internal.iterator && (e3.pagesDefinition.internal.iterator = e3.pagesDefinition.internal.subfeatureset.iterator(i3)), true === e3.pagesDefinition.internal.fullyResolved || 0 === t5 ? n5(s5.length) : this._nextAggregateItem(e3, t5, i3, s5, (r4) => {
        null === r4 ? n5(s5.length) : (t5 -= 1, n5(this._sequentialGetPhysicalItem(e3, t5, i3, s5)));
      }, r3);
    });
  }
  _nextAggregateItem(e3, i3, s5, n5, r3, a6) {
    try {
      ve(e3.pagesDefinition.internal.iterator.next()).then((t5) => {
        if (null === t5) if (null !== e3.pagesDefinition.internal.workingItem) {
          const t6 = this._calculateAndAppendAggregateItem(e3.pagesDefinition.internal.workingItem);
          n5.push(t6), e3.pagesDefinition.internal.workingItem = null, e3.pagesDefinition.internal.set.push(t6.attributes[this.objectIdField]), e3.pagesDefinition.internal.fullyResolved = true, r3(null);
        } else e3.pagesDefinition.internal.fullyResolved = true, r3(null);
        else {
          const o3 = this._generateAggregateHash(t5);
          if (null === e3.pagesDefinition.internal.workingItem) e3.pagesDefinition.internal.workingItem = { features: [t5], id: o3 };
          else {
            if (o3 !== e3.pagesDefinition.internal.workingItem.id) {
              const s6 = this._calculateAndAppendAggregateItem(e3.pagesDefinition.internal.workingItem);
              return n5.push(s6), e3.pagesDefinition.internal.workingItem = null, e3.pagesDefinition.internal.set.push(s6.attributes[this.objectIdField]), i3 -= 1, e3.pagesDefinition.internal.workingItem = { features: [t5], id: o3 }, void r3(s6);
            }
            e3.pagesDefinition.internal.workingItem.features.push(t5);
          }
          this._nextAggregateItem(e3, i3, s5, n5, r3, a6);
        }
      }, a6);
    } catch (o3) {
      a6(o3);
    }
  }
  _calculateFieldStat(e3, t5, i3) {
    const s5 = [];
    for (const n5 of e3.features) if (null !== t5.workingexpr) {
      const e4 = t5.workingexpr.calculateValue(n5);
      null !== e4 && (e4 instanceof i || e4 instanceof r ? s5.push(e4.toNumber()) : e4 instanceof i2 ? s5.push(e4.toMilliseconds()) : s5.push(e4));
    } else s5.push(null);
    i3.attributes[t5.tofieldname] = u(t5.typeofstat, [s5]);
  }
  _calculateAndAppendAggregateItem(t5) {
    const i3 = { attributes: {}, geometry: null };
    for (const e3 of this._decodedGroupbyfield) {
      const s6 = e3.singlefield ? t5.features[0].attributes[e3.singlefield] : D.convertValueToStorageFormat(e3.expression.calculateValue(t5.features[0]), e3.sqlType);
      i3.attributes[e3.tofieldname] = s6;
    }
    for (const e3 of this._decodedStatsfield) this._calculateFieldStat(t5, e3, i3);
    const s5 = [];
    for (let e3 = 0; e3 < this._decodedStatsfield.length; e3++) s5.push(this._calculateFieldStat(t5, this._decodedStatsfield[e3], i3));
    return this._featureCache[i3.attributes[this.objectIdField]] = new b({ attributes: i3.attributes, geometry: i3.geometry }), i3;
  }
  _generateAggregateHash(e3) {
    let t5 = "";
    for (const i3 of this._decodedGroupbyfield) {
      const s5 = i3.singlefield ? e3.attributes[i3.singlefield] : i3.expression.calculateValue(e3);
      t5 += null == s5 ? ":" : ":" + s5.toString();
    }
    return x2(t5, n4.String);
  }
  async _stat() {
    return { calculated: false };
  }
  async getFeatureByObjectId() {
    return null;
  }
  static registerAction() {
    S4._featuresetFunctions.groupby = function(e3, t5) {
      return new _O({ parentfeatureset: this, groupbyfields: e3, statsfields: t5 });
    };
  }
};

// node_modules/@arcgis/core/arcade/featureset/actions/Top.js
var a5 = class _a extends S4 {
  constructor(t5) {
    super(t5), this._topnum = 0, this.declaredClass = "esri.arcade.featureset.actions.Top", this._countedin = 0, this._maxProcessing = 100, this._topnum = t5.topnum, this._parent = t5.parentfeatureset;
  }
  async _getSet(t5) {
    if (null === this._wset) {
      await this._ensureLoaded();
      const e3 = await this._parent._getSet(t5);
      return this._wset = new t3(e3._candidates.slice(), e3._known.slice(), false, this._clonePageDefinition(e3.pagesDefinition)), this._setKnownLength(this._wset) > this._topnum && (this._wset._known = this._wset._known.slice(0, this._topnum)), this._setKnownLength(this._wset) >= this._topnum && (this._wset._candidates = []), this._wset;
    }
    return this._wset;
  }
  _setKnownLength(t5) {
    return t5._known.length > 0 && "GETPAGES" === t5._known[t5._known.length - 1] ? t5._known.length - 1 : t5._known.length;
  }
  _isInFeatureSet(t5) {
    const e3 = this._parent._isInFeatureSet(t5);
    if (e3 === l.NotInFeatureSet) return e3;
    const n5 = this._idstates[t5];
    return n5 === l.InFeatureSet || n5 === l.NotInFeatureSet ? n5 : e3 === l.InFeatureSet && void 0 === n5 ? this._countedin < this._topnum ? (this._idstates[t5] = l.InFeatureSet, this._countedin++, l.InFeatureSet) : (this._idstates[t5] = l.NotInFeatureSet, l.NotInFeatureSet) : l.Unknown;
  }
  async _expandPagedSet(n5, s5, i3, a6, o3) {
    if (null === this._parent) throw new s3(t2.NotImplemented);
    if (s5 > this._topnum && (s5 = this._topnum), this._countedin >= this._topnum && n5.pagesDefinition.internal.set.length <= n5.pagesDefinition.resultOffset) {
      let t5 = n5._known.length;
      return t5 > 0 && "GETPAGES" === n5._known[t5 - 1] && (n5._known.length = t5 - 1), t5 = n5._candidates.length, t5 > 0 && "GETPAGES" === n5._candidates[t5 - 1] && (n5._candidates.length = t5 - 1), "success";
    }
    const r3 = await this._parent._expandPagedSet(n5, s5, i3, a6, o3);
    return this._setKnownLength(n5) > this._topnum && (n5._known.length = this._topnum), this._setKnownLength(n5) >= this._topnum && (n5._candidates.length = 0), r3;
  }
  async _getFeatures(t5, e3, n5, i3) {
    const a6 = [], o3 = this._maxQueryRate();
    if (true === this._checkIfNeedToExpandKnownPage(t5, o3)) return await this._expandPagedSet(t5, o3, 0, 0, i3), this._getFeatures(t5, e3, n5, i3);
    -1 !== e3 && void 0 === this._featureCache[e3] && a6.push(e3);
    let r3 = 0;
    for (let s5 = t5._lastFetchedIndex; s5 < t5._known.length && (r3++, r3 <= n5 && (t5._lastFetchedIndex += 1), !(void 0 === this._featureCache[t5._known[s5]] && (t5._known[s5] !== e3 && a6.push(t5._known[s5]), a6.length > o3))); s5++) ;
    if (0 === a6.length) return "success";
    const _ = new t3([], a6, false, null), h2 = Math.min(a6.length, n5);
    await this._parent._getFeatures(_, -1, h2, i3);
    for (let s5 = 0; s5 < h2; s5++) {
      const t6 = this._parent._featureFromCache(a6[s5]);
      void 0 !== t6 && (this._featureCache[a6[s5]] = t6);
    }
    return "success";
  }
  async _getFilteredSet(t5, e3, n5, i3, a6) {
    await this._ensureLoaded();
    const o3 = await this._getSet(a6);
    return new t3(o3._candidates.slice().concat(o3._known.slice()), [], false, this._clonePageDefinition(o3.pagesDefinition));
  }
  _refineKnowns(t5, e3) {
    let n5 = 0, s5 = null;
    const a6 = [];
    for (let o3 = 0; o3 < t5._candidates.length; o3++) {
      const r3 = this._isInFeatureSet(t5._candidates[o3]);
      if (r3 === l.InFeatureSet) {
        if (t5._known.push(t5._candidates[o3]), n5 += 1, null === s5 ? s5 = { start: o3, end: o3 } : s5.end === o3 - 1 ? s5.end = o3 : (a6.push(s5), s5 = { start: o3, end: o3 }), t5._known.length >= this._topnum) break;
      } else if (r3 === l.NotInFeatureSet) null === s5 ? s5 = { start: o3, end: o3 } : s5.end === o3 - 1 ? s5.end = o3 : (a6.push(s5), s5 = { start: o3, end: o3 }), n5 += 1;
      else if (r3 === l.Unknown) break;
      if (n5 >= e3) break;
    }
    null !== s5 && a6.push(s5);
    for (let i3 = a6.length - 1; i3 >= 0; i3--) t5._candidates.splice(a6[i3].start, a6[i3].end - a6[i3].start + 1);
    this._setKnownLength(t5) > this._topnum && (t5._known = t5._known.slice(0, this._topnum)), this._setKnownLength(t5) >= this._topnum && (t5._candidates = []);
  }
  async _stat() {
    return { calculated: false };
  }
  async _canDoAggregates() {
    return false;
  }
  static registerAction() {
    S4._featuresetFunctions.top = function(t5) {
      return new _a({ parentfeatureset: this, topnum: t5 });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
};

// node_modules/@arcgis/core/arcade/featureset/sources/FeatureLayerDynamic.js
var P2 = class _P extends S4 {
  constructor(e3) {
    super(e3), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerDynamic", this._removeGeometry = false, this._overrideFields = null, this.formulaCredential = null, this._pageJustIds = false, this._requestStandardised = false, this._useDefinitionExpression = true, e3.spatialReference && (this.spatialReference = e3.spatialReference), this._transparent = true, this._maxProcessing = 1e3, this._layer = e3.layer, this._wset = null, void 0 !== e3.outFields && (this._overrideFields = e3.outFields), void 0 !== e3.includeGeometry && (this._removeGeometry = false === e3.includeGeometry);
  }
  _maxQueryRate() {
    return O;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries(e3) {
    this._pageJustIds = e3;
  }
  get urlQueryPath() {
    return this._layer.parsedUrl.path || "";
  }
  convertQueryToLruCacheKey(e3) {
    const t5 = this.urlQueryPath + "," + J(e3.toJSON());
    return x2(t5, n4.String);
  }
  async loadImpl() {
    return true === this._layer.loaded ? (this._initialiseFeatureSet(), this) : (await this._layer.load(), this._initialiseFeatureSet(), this);
  }
  _initialiseFeatureSet() {
    var _a, _b, _c, _d, _e, _f;
    if (null == this.spatialReference && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType ?? "", this.fields = this._layer.fields.slice(), this.hasZ = true === ((_c = (_b = (_a = this._layer) == null ? void 0 : _a.capabilities) == null ? void 0 : _b.data) == null ? void 0 : _c.supportsZ), this.hasM = true === ((_f = (_e = (_d = this._layer) == null ? void 0 : _d.capabilities) == null ? void 0 : _e.data) == null ? void 0 : _f.supportsM), null !== this._overrideFields) if (1 === this._overrideFields.length && "*" === this._overrideFields[0]) this._overrideFields = null;
    else {
      const e3 = [], t5 = [];
      for (const r3 of this.fields) if ("oid" === r3.type) e3.push(r3), t5.push(r3.name);
      else for (const i3 of this._overrideFields) if (i3.toLowerCase() === r3.name.toLowerCase()) {
        e3.push(r3), t5.push(r3.name);
        break;
      }
      this.fields = e3, this._overrideFields = t5;
    }
    if (this._layer.source && this._layer.source.sourceJSON) {
      const e3 = this._layer.source.sourceJSON.currentVersion;
      true === this._layer.source.sourceJSON.useStandardizedQueries ? (this._databaseType = o2.StandardisedNoInterval, null != e3 && e3 >= 10.61 && (this._databaseType = o2.Standardised)) : null != e3 && (e3 >= 10.5 && (this._databaseType = o2.StandardisedNoInterval, this._requestStandardised = true), e3 >= 10.61 && (this._databaseType = o2.Standardised));
    }
    this.objectIdField = this._layer.objectIdField;
    for (const e3 of this.fields) "global-id" === e3.type && (this.globalIdField = e3.name);
    this.subtypeField = this._layer.subtypeField ?? "", this.subtypes = this._layer.subtypes, this.typeIdField = ("typeIdField" in this._layer ? this._layer.typeIdField : null) ?? "", this.types = "types" in this._layer ? this._layer.types : null;
  }
  _isInFeatureSet() {
    return l.InFeatureSet;
  }
  async _refineSetBlock(e3) {
    return e3;
  }
  _candidateIdTransform(e3) {
    return e3;
  }
  async _getSet(e3) {
    if (null === this._wset) {
      await this._ensureLoaded();
      const t5 = await this._getFilteredSet("", null, null, null, e3);
      return this._wset = t5, t5;
    }
    return this._wset;
  }
  async _runDatabaseProbe(e3) {
    await this._ensureLoaded();
    const t5 = new b2();
    this.datesInUnknownTimezone && (t5.timeReferenceUnknownClient = true), t5.where = e3.replace("OBJECTID", this._layer.objectIdField);
    try {
      return await this._layer.queryObjectIds(t5), true;
    } catch (r3) {
      return false;
    }
  }
  _canUsePagination() {
    return !(!this._layer.capabilities || !this._layer.capabilities.query || true !== this._layer.capabilities.query.supportsPagination);
  }
  _cacheableFeatureSetSourceKey() {
    return this._layer.url;
  }
  get gdbVersion() {
    return this._layer && this._layer.capabilities && this._layer.capabilities.data && this._layer.capabilities.data.isVersioned ? this._layer.gdbVersion || "SDE.DEFAULT" : "";
  }
  nativeCapabilities() {
    return { title: this._layer.title ?? "", source: this, canQueryRelated: true, capabilities: this._layer.capabilities, databaseType: this._databaseType, requestStandardised: this._requestStandardised };
  }
  _createQuery() {
    const e3 = this._layer.createQuery();
    return e3.returnZ = this.hasZ, e3.returnM = this.hasM, this.datesInUnknownTimezone && (e3.timeReferenceUnknownClient = true), this._requestStandardised && (e3.sqlFormat = "standard"), this._useDefinitionExpression ? "subtype-group" === this._layer.type && (e3.where = this._layer.definitionExpression) : e3.where = null, e3;
  }
  executeQuery(e3, t5) {
    const r3 = "execute" === t5 ? this._layer.queryFeatures.bind(this._layer) : "executeForCount" === t5 ? this._layer.queryFeatureCount.bind(this._layer) : this._layer.queryObjectIds.bind(this._layer);
    let i3 = null;
    if (this.recentlyUsedQueries) {
      const t6 = this.convertQueryToLruCacheKey(e3);
      i3 = this.recentlyUsedQueries.getFromCache(t6), null === i3 && (i3 = r3(e3), this.recentlyUsedQueries.addToCache(t6, i3), i3 = i3.catch((e4) => {
        var _a;
        throw (_a = this.recentlyUsedQueries) == null ? void 0 : _a.removeFromCache(t6), e4;
      }));
    }
    return this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: e3, method: t5 }), null === i3 && (i3 = r3(e3)), i3;
  }
  async _getFilteredSet(e3, t5, r3, i3, s5) {
    const a6 = await this.databaseType();
    if (this.isTable() && t5 && null !== e3 && "" !== e3) {
      return new t3([], [], true, null);
    }
    if (this._canUsePagination()) return this._getFilteredSetUsingPaging(e3, t5, r3, i3, s5);
    let n5 = "", l3 = false;
    null !== i3 && this._layer.capabilities && this._layer.capabilities.query && true === this._layer.capabilities.query.supportsOrderBy && (n5 = i3.constructClause(), l3 = true);
    const u2 = this._createQuery();
    u2.where = r2(u2.where, null === r3 ? null === t5 ? "1=1" : "" : f4(r3, a6)), u2.spatialRelationship = this._makeRelationshipEnum(e3), u2.outSpatialReference = this.spatialReference, u2.orderByFields = "" !== n5 ? n5.split(",") : null, u2.geometry = null === t5 ? null : t5, u2.relationParameter = this._makeRelationshipParam(e3);
    let d4 = await this.executeQuery(u2, "executeForIds");
    null === d4 && (d4 = []), this._checkCancelled(s5);
    return new t3([], d4, l3, null);
  }
  _expandPagedSet(e3, t5, r3, i3, s5) {
    return this._expandPagedSetFeatureSet(e3, t5, r3, i3, s5);
  }
  async _getFilteredSetUsingPaging(e3, t5, r3, i3, s5) {
    var _a;
    let a6 = "", n5 = false;
    null !== i3 && this._layer.capabilities && this._layer.capabilities.query && true === this._layer.capabilities.query.supportsOrderBy && (a6 = i3.constructClause(), n5 = true);
    const l3 = await this.databaseType(), u2 = null === r3 ? null === t5 ? "1=1" : "" : f4(r3, l3);
    let d4 = this._maxQueryRate();
    const c5 = (_a = this._layer.capabilities) == null ? void 0 : _a.query.maxRecordCount;
    null != c5 && c5 < d4 && (d4 = c5);
    let h2 = null;
    if (true === this._pageJustIds) h2 = new t3([], ["GETPAGES"], n5, { spatialRel: this._makeRelationshipEnum(e3), relationParam: this._makeRelationshipParam(e3), outFields: this._layer.objectIdField, resultRecordCount: d4, resultOffset: 0, geometry: null === t5 ? null : t5, where: u2, orderByFields: a6, returnGeometry: false, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: false } });
    else {
      let r4 = true;
      true === this._removeGeometry && (r4 = false);
      const i4 = this._overrideFields ?? this._fieldsIncludingObjectId(["*"]);
      h2 = new t3([], ["GETPAGES"], n5, { spatialRel: this._makeRelationshipEnum(e3), relationParam: this._makeRelationshipParam(e3), outFields: i4.join(","), resultRecordCount: d4, resultOffset: 0, geometry: null === t5 ? null : t5, where: u2, orderByFields: a6, returnGeometry: r4, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: false } });
    }
    return await this._expandPagedSet(h2, d4, 0, 1, s5), h2;
  }
  _clonePageDefinition(e3) {
    return null === e3 ? null : true !== e3.groupbypage ? { groupbypage: false, spatialRel: e3.spatialRel, relationParam: e3.relationParam, outFields: e3.outFields, resultRecordCount: e3.resultRecordCount, resultOffset: e3.resultOffset, geometry: e3.geometry, where: e3.where, orderByFields: e3.orderByFields, returnGeometry: e3.returnGeometry, returnIdsOnly: e3.returnIdsOnly, internal: e3.internal } : { groupbypage: true, spatialRel: e3.spatialRel, relationParam: e3.relationParam, outFields: e3.outFields, resultRecordCount: e3.resultRecordCount, useOIDpagination: e3.useOIDpagination, generatedOid: e3.generatedOid, groupByFieldsForStatistics: e3.groupByFieldsForStatistics, resultOffset: e3.resultOffset, outStatistics: e3.outStatistics, geometry: e3.geometry, where: e3.where, orderByFields: e3.orderByFields, returnGeometry: e3.returnGeometry, returnIdsOnly: e3.returnIdsOnly, internal: e3.internal };
  }
  async _getPhysicalPage(e3, t5, r3) {
    const i3 = e3.pagesDefinition.internal.lastRetrieved, s5 = i3, a6 = e3.pagesDefinition.internal.lastPage, n5 = this._createQuery();
    n5.spatialRelationship = e3.pagesDefinition.spatialRel, n5.relationParameter = e3.pagesDefinition.relationParam, n5.outFields = e3.pagesDefinition.outFields.split(","), n5.num = e3.pagesDefinition.resultRecordCount, n5.start = e3.pagesDefinition.internal.lastPage, n5.geometry = e3.pagesDefinition.geometry, n5.where = r2(n5.where, e3.pagesDefinition.where), n5.orderByFields = "" !== e3.pagesDefinition.orderByFields ? e3.pagesDefinition.orderByFields.split(",") : null, n5.returnGeometry = e3.pagesDefinition.returnGeometry, n5.outSpatialReference = this.spatialReference;
    const l3 = await this.executeQuery(n5, "execute");
    if (this._checkCancelled(r3), e3.pagesDefinition.internal.lastPage !== a6) return "done";
    const o3 = this._layer.objectIdField;
    for (let u2 = 0; u2 < l3.features.length; u2++) e3.pagesDefinition.internal.set[s5 + u2] = l3.features[u2].attributes[o3];
    if (false === this._pageJustIds) for (let u2 = 0; u2 < l3.features.length; u2++) this._featureCache[l3.features[u2].attributes[o3]] = l3.features[u2];
    return (void 0 === l3.exceededTransferLimit && l3.features.length !== e3.pagesDefinition.resultRecordCount || false === l3.exceededTransferLimit) && (e3.pagesDefinition.internal.fullyResolved = true), e3.pagesDefinition.internal.lastRetrieved = i3 + l3.features.length, e3.pagesDefinition.internal.lastPage += e3.pagesDefinition.resultRecordCount, "done";
  }
  _fieldsIncludingObjectId(e3) {
    if (null === e3) return [this.objectIdField];
    const t5 = e3.slice();
    if (t5.includes("*")) return t5;
    let r3 = false;
    for (const i3 of t5) if (i3.toUpperCase() === this.objectIdField.toUpperCase()) {
      r3 = true;
      break;
    }
    return false === r3 && t5.push(this.objectIdField), t5;
  }
  async _getFeatures(e3, t5, r3, i3) {
    const s5 = [];
    if (-1 !== t5 && void 0 === this._featureCache[t5] && s5.push(t5), true === this._checkIfNeedToExpandKnownPage(e3, this._maxProcessingRate())) return await this._expandPagedSet(e3, this._maxProcessingRate(), 0, 0, i3), this._getFeatures(e3, t5, r3, i3);
    let l3 = 0;
    for (let a6 = e3._lastFetchedIndex; a6 < e3._known.length; a6++) {
      if (e3._lastFetchedIndex += 1, l3++, void 0 === this._featureCache[e3._known[a6]]) {
        let r4 = false;
        if (null !== this._layer._mode && void 0 !== this._layer._mode) {
          const t6 = this._layer._mode;
          if (void 0 !== t6._featureMap[e3._known[a6]]) {
            const i4 = t6._featureMap[e3._known[a6]];
            null !== i4 && (r4 = true, this._featureCache[e3._known[a6]] = i4);
          }
        }
        if (false === r4 && (e3._known[a6] !== t5 && s5.push(e3._known[a6]), s5.length >= this._maxProcessingRate() - 1)) break;
      }
      if (l3 >= r3 && 0 === s5.length) break;
    }
    if (0 === s5.length) return "success";
    const o3 = this._createQuery();
    o3.objectIds = s5, o3.outFields = this._overrideFields ?? this._fieldsIncludingObjectId(["*"]), o3.returnGeometry = true, true === this._removeGeometry && (o3.returnGeometry = false), o3.outSpatialReference = this.spatialReference;
    const u2 = await this.executeQuery(o3, "execute");
    if (this._checkCancelled(i3), void 0 !== u2.error) throw new s3(t2.RequestFailed, { reason: u2.error });
    const d4 = this._layer.objectIdField;
    for (let a6 = 0; a6 < u2.features.length; a6++) this._featureCache[u2.features[a6].attributes[d4]] = u2.features[a6];
    return "success";
  }
  async _getDistinctPages(e3, t5, r3, i3, s5, l3, o3, u2, d4) {
    var _a;
    await this._ensureLoaded();
    const c5 = await this.databaseType();
    let h2 = r3.parseTree.column;
    const p3 = this._layer.fields ?? [];
    for (let a6 = 0; a6 < p3.length; a6++) if (p3[a6].name.toLowerCase() === h2.toLowerCase()) {
      h2 = p3[a6].name;
      break;
    }
    const f5 = this._createQuery();
    f5.where = r2(f5.where, null === l3 ? null === s5 ? "1=1" : "" : f4(l3, c5)), f5.spatialRelationship = this._makeRelationshipEnum(i3), f5.relationParameter = this._makeRelationshipParam(i3), f5.geometry = null === s5 ? null : s5, f5.returnDistinctValues = true, f5.returnGeometry = false, f5.outFields = [h2];
    const _ = await this.executeQuery(f5, "execute");
    if (this._checkCancelled(d4), !_.hasOwnProperty("features")) throw new s3(t2.InvalidStatResponse);
    let g5 = false;
    for (let a6 = 0; a6 < p3.length; a6++) if (p3[a6].name === h2) {
      "date" === p3[a6].type && (g5 = true);
      break;
    }
    for (let a6 = 0; a6 < _.features.length; a6++) {
      if (g5) {
        const e4 = _.features[a6].attributes[h2];
        null !== e4 ? u2.push(new Date(e4)) : u2.push(e4);
      } else u2.push(_.features[a6].attributes[h2]);
      if (u2.length >= o3) break;
    }
    if (0 === _.features.length) return u2;
    if (_.features.length === ((_a = this._layer.capabilities) == null ? void 0 : _a.query.maxRecordCount) && u2.length < o3) {
      return { calculated: true, result: await this._getDistinctPages(e3 + _.features.length, t5, r3, i3, s5, l3, o3, u2, d4) };
    }
    return u2;
  }
  async _distinctStat(e3, t5, r3, i3, s5, a6, n5) {
    return { calculated: true, result: await this._getDistinctPages(0, e3, t5, r3, i3, s5, a6, [], n5) };
  }
  isTable() {
    return this._layer.isTable || null === this._layer.geometryType || "table" === this._layer.type || "" === this._layer.geometryType || "esriGeometryNull" === this._layer.geometryType;
  }
  async _countstat(e3, t5, r3, i3) {
    const s5 = await this.databaseType();
    if (this.isTable() && r3 && null !== t5 && "" !== t5) return { calculated: true, result: 0 };
    const a6 = this._createQuery();
    a6.where = r2(a6.where, null === i3 ? null === r3 ? "1=1" : "" : f4(i3, s5)), a6.spatialRelationship = this._makeRelationshipEnum(t5), a6.relationParameter = this._makeRelationshipParam(t5), a6.geometry = null === r3 ? null : r3, a6.returnGeometry = false;
    return { calculated: true, result: await this.executeQuery(a6, "executeForCount") };
  }
  async _stats(e3, t5, r3, i3, s5, l3, o3) {
    var _a;
    await this._ensureLoaded();
    const u2 = (_a = this._layer.capabilities) == null ? void 0 : _a.query, d4 = !!(u2 == null ? void 0 : u2.supportsSqlExpression), c5 = !!(u2 == null ? void 0 : u2.supportsStatistics), h2 = !!(u2 == null ? void 0 : u2.supportsDistinct);
    if ("count" === e3) return h2 ? this._countstat(e3, r3, i3, s5) : { calculated: false };
    if (false === c5 || false === O2(t5) && false === d4 || false === t5.isStandardized) return "" !== r3 || null !== s5 ? { calculated: false } : this._manualStat(e3, t5, l3, o3);
    if ("distinct" === e3) return false === h2 ? "" !== r3 || null !== s5 ? { calculated: false } : this._manualStat(e3, t5, l3, o3) : this._distinctStat(e3, t5, r3, i3, s5, l3, o3);
    const p3 = await this.databaseType();
    if (this.isTable() && i3 && null !== r3 && "" !== r3) return { calculated: true, result: null };
    const g5 = this._createQuery();
    g5.where = r2(g5.where, null === s5 ? null === i3 ? "1=1" : "" : f4(s5, p3)), g5.spatialRelationship = this._makeRelationshipEnum(r3), g5.relationParameter = this._makeRelationshipParam(r3), g5.geometry = null === i3 ? null : i3;
    const m5 = new m3();
    m5.statisticType = w2(e3), m5.onStatisticField = f4(t5, p3), m5.outStatisticFieldName = "ARCADE_STAT_RESULT", g5.returnGeometry = false;
    let w3 = "ARCADE_STAT_RESULT";
    g5.outStatistics = [m5];
    const b5 = await this.executeQuery(g5, "execute");
    if (!b5.hasOwnProperty("features") || 0 === b5.features.length) throw new s3(t2.InvalidStatResponse);
    let S5 = false;
    const F3 = b5.fields ?? [];
    for (let a6 = 0; a6 < F3.length; a6++) if ("ARCADE_STAT_RESULT" === F3[a6].name.toUpperCase()) {
      w3 = F3[a6].name, "date" === F3[a6].type && (S5 = true);
      break;
    }
    if (S5) {
      let e4 = b5.features[0].attributes[w3];
      return null !== e4 && (e4 = new Date(b5.features[0].attributes[w3])), { calculated: true, result: e4 };
    }
    return { calculated: true, result: b5.features[0].attributes[w3] };
  }
  _stat(e3, t5, r3, i3, s5, a6, n5) {
    return this._stats(e3, t5, r3, i3, s5, a6, n5);
  }
  async _canDoAggregates(e3, t5) {
    var _a, _b;
    await this._ensureLoaded();
    let r3 = false;
    const i3 = (_a = this._layer.capabilities) == null ? void 0 : _a.query, s5 = true === (i3 == null ? void 0 : i3.supportsSqlExpression);
    if (null != i3 && true === i3.supportsStatistics && true === i3.supportsOrderBy && (r3 = true), r3) for (let a6 = 0; a6 < t5.length - 1; a6++) (false === ((_b = t5[a6].workingexpr) == null ? void 0 : _b.isStandardized) || false === O2(t5[a6].workingexpr) && false === s5) && (r3 = false);
    return false !== r3;
  }
  _makeRelationshipEnum(e3) {
    if (e3.includes("esriSpatialRelRelation")) return "relation";
    switch (e3) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e3;
  }
  _makeRelationshipParam(e3) {
    return e3.includes("esriSpatialRelRelation") ? e3.split(":")[1] : "";
  }
  async _getAggregatePagesDataSourceDefinition(e3, t5, r3, i3, s5, a6, n5) {
    var _a;
    await this._ensureLoaded();
    const l3 = await this.databaseType();
    let u2 = "", d4 = false, c5 = false;
    null !== a6 && this._layer.capabilities && this._layer.capabilities.query && true === this._layer.capabilities.query.supportsOrderBy && (u2 = a6.constructClause(), c5 = true), this._layer.capabilities && this._layer.capabilities.query && false === this._layer.capabilities.query.supportsPagination && (c5 = false, d4 = true, u2 = this._layer.objectIdField);
    const h2 = [];
    for (let o3 = 0; o3 < t5.length; o3++) {
      const e4 = new m3();
      e4.onStatisticField = null !== t5[o3].workingexpr ? f4(t5[o3].workingexpr, l3) : "", e4.outStatisticFieldName = t5[o3].field, e4.statisticType = t5[o3].toStatisticsName(), h2.push(e4);
    }
    "" === u2 && (u2 = e3.join(","));
    let p3 = this._maxQueryRate();
    const f5 = (_a = this._layer.capabilities) == null ? void 0 : _a.query.maxRecordCount;
    null != f5 && f5 < p3 && (p3 = f5);
    const _ = null === s5 ? null === i3 ? "1=1" : "" : f4(s5, l3);
    return new t3([], ["GETPAGES"], c5, { groupbypage: true, spatialRel: this._makeRelationshipEnum(r3), relationParam: this._makeRelationshipParam(r3), outFields: ["*"], useOIDpagination: d4, generatedOid: n5, resultRecordCount: p3, resultOffset: 0, groupByFieldsForStatistics: e3, outStatistics: h2, geometry: null === i3 ? null : i3, where: _, orderByFields: u2, returnGeometry: false, returnIdsOnly: false, internal: { lastMaxId: -1, set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: false } });
  }
  async _getAgregagtePhysicalPage(t5, r3, i3) {
    let s5 = t5.pagesDefinition.where;
    true === t5.pagesDefinition.useOIDpagination && (s5 = r2(s5, t5.pagesDefinition.generatedOid + ">" + t5.pagesDefinition.internal.lastMaxId.toString()));
    const l3 = t5.pagesDefinition.internal.lastRetrieved, o3 = l3, u2 = t5.pagesDefinition.internal.lastPage, d4 = this._createQuery();
    if (d4.where = r2(d4.where, s5), d4.spatialRelationship = t5.pagesDefinition.spatialRel, d4.relationParameter = t5.pagesDefinition.relationParam, d4.outFields = t5.pagesDefinition.outFields, d4.outStatistics = t5.pagesDefinition.outStatistics, d4.geometry = t5.pagesDefinition.geometry, d4.groupByFieldsForStatistics = t5.pagesDefinition.groupByFieldsForStatistics, d4.num = t5.pagesDefinition.resultRecordCount, d4.start = t5.pagesDefinition.internal.lastPage, d4.returnGeometry = t5.pagesDefinition.returnGeometry, d4.orderByFields = "" !== t5.pagesDefinition.orderByFields ? t5.pagesDefinition.orderByFields.split(",") : null, this.isTable() && d4.geometry && d4.spatialRelationship) return [];
    const c5 = await this.executeQuery(d4, "execute");
    if (this._checkCancelled(i3), !c5.hasOwnProperty("features")) throw new s3(t2.InvalidStatResponse);
    const h2 = [];
    if (t5.pagesDefinition.internal.lastPage !== u2) return [];
    c5.features.length > 0 && void 0 === c5.features[0].attributes[t5.pagesDefinition.generatedOid] && (t5.pagesDefinition.generatedOid = t5.pagesDefinition.generatedOid.toLowerCase());
    for (let e3 = 0; e3 < c5.features.length; e3++) t5.pagesDefinition.internal.set[o3 + e3] = c5.features[e3].attributes[t5.pagesDefinition.generatedOid];
    for (let a6 = 0; a6 < c5.features.length; a6++) h2.push(new b({ attributes: c5.features[a6].attributes, geometry: null }));
    return true === t5.pagesDefinition.useOIDpagination ? 0 === c5.features.length ? t5.pagesDefinition.internal.fullyResolved = true : t5.pagesDefinition.internal.lastMaxId = c5.features[c5.features.length - 1].attributes[t5.pagesDefinition.generatedOid] : (void 0 === c5.exceededTransferLimit && c5.features.length !== t5.pagesDefinition.resultRecordCount || false === c5.exceededTransferLimit) && (t5.pagesDefinition.internal.fullyResolved = true), t5.pagesDefinition.internal.lastRetrieved = l3 + c5.features.length, t5.pagesDefinition.internal.lastPage += t5.pagesDefinition.resultRecordCount, h2;
  }
  static create(e3, t5, r3, i3, s5) {
    const a6 = new Ye({ url: e3, outFields: null === t5 ? ["*"] : t5 });
    return new _P({ layer: a6, spatialReference: r3, lrucache: i3, interceptor: s5 });
  }
  relationshipMetaData() {
    var _a;
    return this._layer && this._layer.source && ((_a = this._layer.source.sourceJSON) == null ? void 0 : _a.relationships) ? this._layer.source.sourceJSON.relationships : [];
  }
  serviceUrl() {
    return E(this._layer.parsedUrl.path);
  }
  async queryAttachments(e3, t5, r3, a6, n5) {
    function l3(e4) {
      const t6 = e4.capabilities;
      return (t6 == null ? void 0 : t6.data.supportsAttachment) && (t6 == null ? void 0 : t6.operations.supportsQueryAttachments);
    }
    const o3 = this._layer;
    if (l3(o3)) {
      const l4 = { objectIds: [e3], returnMetadata: n5 };
      (t5 && t5 > 0 || r3 && r3 > 0) && (l4.size = [t5 && t5 > 0 ? t5 : 0, r3 && r3 > 0 ? r3 : t5 + 1]), a6 && a6.length > 0 && (l4.attachmentTypes = a6), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: o3, query: l4, method: "attachments" });
      const u2 = await o3.queryAttachments(new c2(l4)), d4 = [];
      return u2 && u2[e3] && u2[e3].forEach((t6) => {
        const r4 = this._layer.parsedUrl.path + "/" + e3.toString() + "/attachments/" + t6.id.toString();
        let a7 = null;
        n5 && t6.exifInfo && (a7 = C.convertJsonToArcade(t6.exifInfo, "system", true)), d4.push(new t(t6.id, t6.name, t6.contentType, t6.size, r4, a7, t6.keywords ?? null));
      }), d4;
    }
    return [];
  }
  async queryRelatedFeatures(t5) {
    var _a;
    const i3 = { f: "json", relationshipId: t5.relationshipId.toString(), definitionExpression: t5.where, outFields: (_a = t5.outFields) == null ? void 0 : _a.join(","), returnGeometry: t5.returnGeometry.toString() };
    void 0 !== t5.resultOffset && null !== t5.resultOffset && (i3.resultOffset = t5.resultOffset.toString()), void 0 !== t5.resultRecordCount && null !== t5.resultRecordCount && (i3.resultRecordCount = t5.resultRecordCount.toString()), t5.orderByFields && (i3.orderByFields = t5.orderByFields.join(",")), t5.objectIds && t5.objectIds.length > 0 && (i3.objectIds = t5.objectIds.join(",")), t5.outSpatialReference && (i3.outSR = c(t5.outSpatialReference)), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preRequestCallback({ layer: this._layer, queryPayload: i3, method: "relatedrecords", url: this._layer.parsedUrl.path + "/queryRelatedRecords" });
    const s5 = await P(this._layer.parsedUrl.path + "/queryRelatedRecords", { responseType: "json", query: i3 });
    if (s5.data) {
      const t6 = {}, r3 = s5.data;
      if (r3 == null ? void 0 : r3.relatedRecordGroups) {
        const i4 = r3.spatialReference;
        for (const s6 of r3.relatedRecordGroups) {
          const a6 = s6.objectId, n5 = [];
          for (const t7 of s6.relatedRecords) {
            t7.geometry && (t7.geometry.spatialReference = i4);
            const r4 = new b({ geometry: t7.geometry ? f(t7.geometry) : null, attributes: t7.attributes });
            n5.push(r4);
          }
          t6[a6] = { features: n5, exceededTransferLimit: true === r3.exceededTransferLimit };
        }
      }
      return t6;
    }
    throw new s3(t2.InvalidRequest);
  }
  async getFeatureByObjectId(e3, t5) {
    const r3 = this._createQuery();
    r3.outFields = t5, r3.returnGeometry = false, r3.outSpatialReference = this.spatialReference, r3.where = r2(r3.where, this.objectIdField + "=" + e3.toString()), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: r3, method: "execute" });
    const i3 = await this._layer.queryFeatures(r3);
    return 1 === i3.features.length ? i3.features[0] : null;
  }
  async getIdentityUser() {
    var _a;
    await this.load();
    const e3 = (_a = s) == null ? void 0 : _a.findCredential(this._layer.url);
    return e3 ? e3.userId : null;
  }
  async getOwningSystemUrl() {
    var _a, _b;
    await this.load();
    const e3 = (_a = s) == null ? void 0 : _a.findServerInfo(this._layer.url);
    if (e3) return e3.owningSystemUrl;
    let i3 = this._layer.url;
    const s5 = i3.toLowerCase().indexOf("/rest/services");
    if (i3 = s5 > -1 ? i3.slice(0, s5) : i3, i3) {
      i3 += "/rest/info";
      try {
        const e4 = await P(i3, { query: { f: "json" } });
        let t5 = "";
        return ((_b = e4.data) == null ? void 0 : _b.owningSystemUrl) && (t5 = e4.data.owningSystemUrl), t5;
      } catch (a6) {
        return "";
      }
    }
    return "";
  }
  getDataSourceFeatureSet() {
    const e3 = new _P({ layer: this._layer, spatialReference: this.spatialReference ?? void 0, outFields: this._overrideFields ?? void 0, includeGeometry: !this._removeGeometry, lrucache: this.recentlyUsedQueries ?? void 0, interceptor: this.featureSetQueryInterceptor ?? void 0 });
    return e3._useDefinitionExpression = false, e3;
  }
  get preferredTimeZone() {
    return this._layer.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._layer.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this._layer.datesInUnknownTimezone ?? false;
  }
  get editFieldsInfo() {
    return this._layer.editFieldsInfo ?? null;
  }
  get timeInfo() {
    return this._layer.timeInfo ?? null;
  }
  async getFeatureSetInfo() {
    var _a, _b;
    if (this.fsetInfo) return this.fsetInfo;
    let e3 = null, t5 = "serviceItemId" in this._layer ? this._layer.serviceItemId : null;
    const i3 = this._layer.parsedUrl.path;
    if (i3) {
      const s6 = await P(i3, { responseType: "json", query: { f: "json" } });
      e3 = ((_a = s6 == null ? void 0 : s6.data) == null ? void 0 : _a.name) ?? null, t5 = ((_b = s6 == null ? void 0 : s6.data) == null ? void 0 : _b.serviceItemId) ?? null;
    }
    const s5 = this._layer.title && null !== (this._layer.parent ?? null);
    return this.featureSetInfo = { layerId: this._layer.layerId, layerName: "" === e3 ? null : e3, itemId: "" === t5 ? null : t5, serviceLayerUrl: "" === i3 ? null : i3, webMapLayerId: s5 ? this._layer.id ?? null : null, webMapLayerTitle: s5 ? this._layer.title ?? null : null, className: null, objectClassId: null }, this.fsetInfo;
  }
};

// node_modules/@arcgis/core/arcade/featureset/sources/FeatureLayerMemory.js
var p2 = class _p extends S4 {
  constructor(e3) {
    super(e3), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerMemory", this._removeGeometry = false, this._overrideFields = null, this._forceIsTable = false, e3.spatialReference && (this.spatialReference = e3.spatialReference), this._transparent = true, this._maxProcessing = 1e3, this._layer = e3.layer, this._wset = null, true === e3.isTable && (this._forceIsTable = true), void 0 !== e3.outFields && (this._overrideFields = e3.outFields), void 0 !== e3.includeGeometry && (this._removeGeometry = false === e3.includeGeometry);
  }
  _maxQueryRate() {
    return O;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {
  }
  async loadImpl() {
    return true === this._layer.loaded ? (this._initialiseFeatureSet(), this) : (await this._layer.load(), this._initialiseFeatureSet(), this);
  }
  get gdbVersion() {
    return "";
  }
  _initialiseFeatureSet() {
    var _a, _b, _c, _d, _e, _f;
    if (null == this.spatialReference && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType ?? "", this.fields = this._layer.fields.slice(), null !== this._overrideFields) if (1 === this._overrideFields.length && "*" === this._overrideFields[0]) this._overrideFields = null;
    else {
      const e3 = [], t5 = [];
      for (const s5 of this.fields) if ("oid" === s5.type || this._layer.objectIdField === s5.name) e3.push(s5), t5.push(s5.name);
      else for (const r3 of this._overrideFields) if (r3.toLowerCase() === s5.name.toLowerCase()) {
        e3.push(s5), t5.push(s5.name);
        break;
      }
      this.fields = e3, this._overrideFields = t5;
    }
    this.objectIdField = this._layer.objectIdField;
    for (const e3 of this.fields) "global-id" === e3.type && (this.globalIdField = e3.name);
    this._databaseType = o2.Standardised, this.hasZ = true === ((_c = (_b = (_a = this._layer) == null ? void 0 : _a.capabilities) == null ? void 0 : _b.data) == null ? void 0 : _c.supportsZ), this.hasM = true === ((_f = (_e = (_d = this._layer) == null ? void 0 : _d.capabilities) == null ? void 0 : _e.data) == null ? void 0 : _f.supportsM), this.subtypeField = ("subtypeField" in this._layer ? this._layer.subtypeField : null) ?? "", this.subtypes = "subtypes" in this._layer ? this._layer.subtypes : null, this.typeIdField = ("typeIdField" in this._layer ? this._layer.typeIdField : null) ?? "", this.types = "types" in this._layer ? this._layer.types : null;
  }
  isTable() {
    return this._forceIsTable || "isTable" in this._layer && this._layer.isTable || "table" === this._layer.type || !this._layer.geometryType;
  }
  _isInFeatureSet() {
    return l.InFeatureSet;
  }
  _candidateIdTransform(e3) {
    return e3;
  }
  async _getSet(e3) {
    if (null === this._wset) {
      await this._ensureLoaded();
      const t5 = await this._getFilteredSet("", null, null, null, e3);
      return this._wset = t5, t5;
    }
    return this._wset;
  }
  _createQuery() {
    const e3 = this._layer.createQuery();
    return e3.returnZ = this.hasZ, e3.returnM = this.hasM, e3.outFields = this._overrideFields ?? ["*"], e3.returnGeometry = !this._removeGeometry, e3;
  }
  _changeFeature(t5) {
    const s5 = {};
    for (const e3 of this.fields) s5[e3.name] = t5.attributes[e3.name];
    return new b({ geometry: true === this._removeGeometry ? null : t5.geometry, attributes: s5 });
  }
  async _getFilteredSet(e3, t5, s5, r3, a6) {
    let n5 = "", h2 = false;
    if (null !== r3 && (n5 = r3.constructClause(), h2 = true), this.isTable() && t5 && null !== e3 && "" !== e3) {
      return new t3([], [], true, null);
    }
    const y2 = this._createQuery();
    y2.where = r2(y2.where, null === s5 ? null === t5 ? "1=1" : "" : f4(s5, o2.Standardised)), y2.spatialRelationship = this._makeRelationshipEnum(e3), y2.outSpatialReference = this.spatialReference, y2.orderByFields = "" !== n5 ? n5.split(",") : null, y2.geometry = null === t5 ? null : t5, y2.relationParameter = this._makeRelationshipParam(e3);
    const c5 = await this._layer.queryFeatures(y2);
    if (null === c5) return new t3([], [], h2, null);
    this._checkCancelled(a6);
    const d4 = [];
    c5.features.forEach((e4) => {
      const t6 = e4.attributes[this._layer.objectIdField];
      d4.push(t6), this._featureCache[t6] = this._changeFeature(e4);
    });
    return new t3([], d4, h2, null);
  }
  _makeRelationshipEnum(e3) {
    if (e3.includes("esriSpatialRelRelation")) return "relation";
    switch (e3) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e3;
  }
  _makeRelationshipParam(e3) {
    return e3.includes("esriSpatialRelRelation") ? e3.split(":")[1] : "";
  }
  async _queryAllFeatures() {
    if (this._wset) return this._wset;
    if (await this._ensureLoaded(), this._layer.source && this._layer.source.items) {
      const e4 = [];
      return this._layer.source.items.forEach((t6) => {
        const s6 = t6.attributes[this._layer.objectIdField];
        e4.push(s6), this._featureCache[s6] = this._changeFeature(t6);
      }), this._wset = new t3([], e4, false, null), this._wset;
    }
    const e3 = this._createQuery();
    e3.where = "1=1";
    const t5 = await this._layer.queryFeatures(e3), s5 = [];
    return t5.features.forEach((e4) => {
      const t6 = e4.attributes[this._layer.objectIdField];
      s5.push(t6), this._featureCache[t6] = this._changeFeature(e4);
    }), this._wset = new t3([], s5, false, null), this._wset;
  }
  async _getFeatures(e3, r3, i3) {
    const a6 = [];
    -1 !== r3 && void 0 === this._featureCache[r3] && a6.push(r3);
    for (let t5 = e3._lastFetchedIndex; t5 < e3._known.length && (e3._lastFetchedIndex += 1, !(void 0 === this._featureCache[e3._known[t5]] && (e3._known[t5] !== r3 && a6.push(e3._known[t5]), a6.length > i3))); t5++) ;
    if (0 === a6.length) return "success";
    throw new s3(t2.MissingFeatures);
  }
  async _refineSetBlock(e3) {
    return e3;
  }
  async _stat() {
    return { calculated: false };
  }
  async _canDoAggregates() {
    return false;
  }
  relationshipMetaData() {
    return [];
  }
  static _cloneAttr(e3) {
    const t5 = {};
    for (const s5 in e3) t5[s5] = e3[s5];
    return t5;
  }
  nativeCapabilities() {
    return { title: this._layer.title ?? "", canQueryRelated: false, source: this, capabilities: this._layer.capabilities, databaseType: this._databaseType, requestStandardised: true };
  }
  static create(e3, t5) {
    var _a, _b, _c, _d, _e, _f;
    let s5 = e3.layerDefinition.objectIdField;
    const r3 = e3.layerDefinition.typeIdField ?? "", i3 = [];
    if (e3.layerDefinition.types) for (const h2 of e3.layerDefinition.types) i3.push(c3.fromJSON(h2));
    let a6 = e3.layerDefinition.geometryType;
    void 0 === a6 && (a6 = e3.featureSet.geometryType || "");
    let l3 = e3.featureSet.features;
    const n5 = t5.toJSON();
    if (!s5) {
      let t6 = false;
      for (const r4 of e3.layerDefinition.fields) if ("oid" === r4.type || "esriFieldTypeOID" === r4.type) {
        s5 = r4.name, t6 = true;
        break;
      }
      if (false === t6) {
        let t7 = "FID", r4 = true, i4 = 0;
        for (; r4; ) {
          let s6 = true;
          for (const r5 of e3.layerDefinition.fields) if (r5.name === t7) {
            s6 = false;
            break;
          }
          true === s6 ? r4 = false : (i4++, t7 = "FID" + i4.toString());
        }
        e3.layerDefinition.fields.push({ type: "esriFieldTypeOID", name: t7, alias: t7 });
        const a7 = [];
        for (let s6 = 0; s6 < l3.length; s6++) a7.push({ geometry: e3.featureSet.features[s6].geometry, attributes: e3.featureSet.features[s6].attributes ? this._cloneAttr(e3.featureSet.features[s6].attributes) : {} }), a7[s6].attributes[t7] = s6;
        l3 = a7, s5 = t7;
      }
    }
    const o3 = [];
    for (const h2 of e3.layerDefinition.fields) h2 instanceof y ? o3.push(h2) : o3.push(y.fromJSON(h2));
    let u2 = a6;
    switch (u2 || (u2 = ""), u2) {
      case "esriGeometryPoint":
        u2 = "point";
        break;
      case "esriGeometryPolyline":
        u2 = "polyline";
        break;
      case "esriGeometryPolygon":
        u2 = "polygon";
        break;
      case "esriGeometryEnvelope":
        u2 = "extent";
        break;
      case "esriGeometryMultipoint":
        u2 = "multipoint";
        break;
      case "":
      case "esriGeometryNull":
        u2 = "esriGeometryNull";
    }
    if ("esriGeometryNull" !== u2) for (const y2 of l3) y2.geometry && y2.geometry instanceof n2 == false && (y2.geometry.type = u2, void 0 === y2.geometry.spatialReference && (y2.geometry.spatialReference = n5));
    else for (const h2 of l3) h2.geometry && (h2.geometry = null);
    const f5 = { outFields: ["*"], source: l3, fields: o3, hasZ: true === ((_a = e3 == null ? void 0 : e3.layerDefinition) == null ? void 0 : _a.hasZ) || true === ((_b = e3 == null ? void 0 : e3.featureSet) == null ? void 0 : _b.hasZ), hasM: true === ((_c = e3 == null ? void 0 : e3.layerDefinition) == null ? void 0 : _c.hasM) || true === ((_d = e3 == null ? void 0 : e3.featureSet) == null ? void 0 : _d.hasM), types: i3, typeIdField: r3, objectIdField: s5, spatialReference: t5 }, _ = "esriGeometryNull" === u2 || null === u2;
    _ || (f5.geometryType = u2);
    const m5 = new Ye(f5);
    ((_e = e3 == null ? void 0 : e3.layerDefinition) == null ? void 0 : _e.subtypeField) && ((_f = e3 == null ? void 0 : e3.layerDefinition) == null ? void 0 : _f.subtypes) && m5.read({ subtypes: e3.layerDefinition.subtypes, subtypeField: e3.layerDefinition.subtypeField });
    return new _p({ layer: m5, spatialReference: t5, isTable: _ });
  }
  async queryAttachments() {
    return [];
  }
  async getFeatureByObjectId(e3) {
    const t5 = this._createQuery();
    t5.where = this.objectIdField + "=" + e3.toString();
    const s5 = await this._layer.queryFeatures(t5);
    return 1 === s5.features.length ? s5.features[0] : null;
  }
  async getOwningSystemUrl() {
    return "";
  }
  async getIdentityUser() {
    return "";
  }
  get preferredTimeZone() {
    return "preferredTimeZone" in this._layer ? this._layer.preferredTimeZone : null;
  }
  get dateFieldsTimeZone() {
    return "dateFieldsTimeZone" in this._layer ? this._layer.dateFieldsTimeZone : null;
  }
  get datesInUnknownTimezone() {
    return "datesInUnknownTimezone" in this._layer && this._layer.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    return "editFieldsInfo" in this._layer ? this._layer.editFieldsInfo : null;
  }
  get timeInfo() {
    var _a;
    return (_a = this._layer) == null ? void 0 : _a.timeInfo;
  }
  async getFeatureSetInfo() {
    const e3 = this._layer.title && this._layer.parent;
    return this.fsetInfo ?? { layerId: null, layerName: null, itemId: null, serviceLayerUrl: null, webMapLayerId: e3 ? this._layer.id ?? null : null, webMapLayerTitle: e3 ? this._layer.title ?? null : null, className: null, objectClassId: null };
  }
};

// node_modules/@arcgis/core/arcade/featureset/sources/FeatureLayerRelated.js
var d3 = class extends S4 {
  constructor(e3) {
    super(e3), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerRelated", this._findObjectId = -1, this._requestStandardised = false, this._removeGeometry = false, this._overrideFields = null, this.featureObjectId = null, e3.spatialReference && (this.spatialReference = e3.spatialReference), this._transparent = true, this._maxProcessing = 1e3, this._layer = e3.layer, this._wset = null, this._findObjectId = e3.objectId, this.featureObjectId = e3.objectId, this.relationship = e3.relationship, this._relatedLayer = e3.relatedLayer, void 0 !== e3.outFields && (this._overrideFields = e3.outFields), void 0 !== e3.includeGeometry && (this._removeGeometry = false === e3.includeGeometry);
  }
  _maxQueryRate() {
    return O;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {
  }
  async loadImpl() {
    var _a;
    return await Promise.all([this._layer.load(), (_a = this._relatedLayer) == null ? void 0 : _a.load()]), this._initialiseFeatureSet(), this;
  }
  nativeCapabilities() {
    return this._relatedLayer.nativeCapabilities();
  }
  _initialiseFeatureSet() {
    if (null == this.spatialReference && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._relatedLayer.geometryType, this.fields = this._relatedLayer.fields.slice(), this.hasZ = this._relatedLayer.hasZ, this.hasM = this._relatedLayer.hasM, null !== this._overrideFields) if (1 === this._overrideFields.length && "*" === this._overrideFields[0]) this._overrideFields = null;
    else {
      const e4 = [], t5 = [];
      for (const r3 of this.fields) if ("oid" === r3.type) e4.push(r3), t5.push(r3.name);
      else for (const i3 of this._overrideFields) if (i3.toLowerCase() === r3.name.toLowerCase()) {
        e4.push(r3), t5.push(r3.name);
        break;
      }
      this.fields = e4, this._overrideFields = t5;
    }
    const e3 = this._layer.nativeCapabilities();
    e3 && (this._databaseType = e3.databaseType, this._requestStandardised = e3.requestStandardised), this.objectIdField = this._relatedLayer.objectIdField, this.globalIdField = this._relatedLayer.globalIdField, this.hasM = this._relatedLayer.supportsM, this.hasZ = this._relatedLayer.supportsZ, this.typeIdField = this._relatedLayer.typeIdField, this.types = this._relatedLayer.types, this.subtypeField = this._relatedLayer.subtypeField, this.subtypes = this._relatedLayer.subtypes;
  }
  async databaseType() {
    return await this._relatedLayer.databaseType(), this._databaseType = this._relatedLayer._databaseType, this._databaseType;
  }
  isTable() {
    return this._relatedLayer.isTable();
  }
  _isInFeatureSet() {
    return l.InFeatureSet;
  }
  _candidateIdTransform(e3) {
    return e3;
  }
  async _getSet(e3) {
    if (null === this._wset) {
      await this._ensureLoaded();
      const t5 = await this._getFilteredSet("", null, null, null, e3);
      return this._wset = t5, t5;
    }
    return this._wset;
  }
  _changeFeature(t5) {
    const r3 = {};
    for (const e3 of this.fields) r3[e3.name] = t5.attributes[e3.name];
    return new b({ geometry: true === this._removeGeometry ? null : t5.geometry, attributes: r3 });
  }
  async _getFilteredSet(e3, t5, r3, i3, a6) {
    var _a, _b;
    if (await this.databaseType(), this.isTable() && t5 && null !== e3 && "" !== e3) {
      return new t3([], [], true, null);
    }
    const n5 = this._layer.nativeCapabilities();
    if (false === n5.canQueryRelated) {
      return new t3([], [], true, null);
    }
    if ((_a = n5.capabilities) == null ? void 0 : _a.queryRelated.supportsPagination) return this._getFilteredSetUsingPaging(e3, t5, r3, i3, a6);
    let d4 = "", o3 = false;
    null !== i3 && true === ((_b = n5.capabilities) == null ? void 0 : _b.queryRelated.supportsOrderBy) && (d4 = i3.constructClause(), o3 = true);
    const u2 = new d2();
    u2.objectIds = [this._findObjectId];
    const h2 = null !== this._overrideFields ? this._overrideFields : this._fieldsIncludingObjectId(this._relatedLayer.fields ? this._relatedLayer.fields.map((e4) => e4.name) : ["*"]);
    u2.outFields = h2, u2.relationshipId = this.relationship.id, u2.where = "1=1";
    let c5 = true;
    true === this._removeGeometry && (c5 = false), u2.returnGeometry = c5, this._requestStandardised && (u2.sqlFormat = "standard"), u2.outSpatialReference = this.spatialReference, u2.orderByFields = "" !== d4 ? d4.split(",") : null;
    const y2 = await n5.source.queryRelatedFeatures(u2);
    this._checkCancelled(a6);
    const p3 = y2[this._findObjectId] ? y2[this._findObjectId].features : [], _ = [];
    for (let s5 = 0; s5 < p3.length; s5++) this._featureCache[p3[s5].attributes[this._relatedLayer.objectIdField]] = p3[s5], _.push(p3[s5].attributes[this._relatedLayer.objectIdField]);
    const f5 = t5 && null !== e3 && "" !== e3, g5 = null != r3;
    return new t3(f5 || g5 ? _ : [], f5 || g5 ? [] : _, o3, null);
  }
  _fieldsIncludingObjectId(e3) {
    if (null === e3) return [this.objectIdField];
    const t5 = e3.slice();
    if (t5.includes("*")) return t5;
    let r3 = false;
    for (const i3 of t5) if (i3.toUpperCase() === this.objectIdField.toUpperCase()) {
      r3 = true;
      break;
    }
    return false === r3 && t5.push(this.objectIdField), t5;
  }
  async _getFilteredSetUsingPaging(e3, t5, r3, i3, a6) {
    var _a, _b;
    let n5 = "", l3 = false;
    const d4 = this._layer.nativeCapabilities();
    null !== i3 && true === ((_a = d4.capabilities) == null ? void 0 : _a.queryRelated.supportsOrderBy) && (n5 = i3.constructClause(), l3 = true), await this.databaseType();
    const o3 = "1=1";
    let u2 = this._maxQueryRate();
    const h2 = (_b = d4.capabilities) == null ? void 0 : _b.query.maxRecordCount;
    null != h2 && h2 < u2 && (u2 = h2);
    const c5 = t5 && null !== e3 && "" !== e3, y2 = null != r3;
    let p3 = null, _ = true;
    true === this._removeGeometry && (_ = false);
    const f5 = null !== this._overrideFields ? this._overrideFields : this._fieldsIncludingObjectId(this._relatedLayer.fields ? this._relatedLayer.fields.map((e4) => e4.name) : ["*"]);
    return p3 = new t3(c5 || y2 ? ["GETPAGES"] : [], c5 || y2 ? [] : ["GETPAGES"], l3, { outFields: f5.join(","), resultRecordCount: u2, resultOffset: 0, objectIds: [this._findObjectId], where: o3, orderByFields: n5, returnGeometry: _, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: false } }), await this._expandPagedSet(p3, u2, 0, 0, a6), p3;
  }
  _expandPagedSet(e3, t5, r3, i3, s5) {
    return this._expandPagedSetFeatureSet(e3, t5, r3, i3, s5);
  }
  _clonePageDefinition(e3) {
    return null === e3 ? null : true !== e3.groupbypage ? { groupbypage: false, outFields: e3.outFields, resultRecordCount: e3.resultRecordCount, resultOffset: e3.resultOffset, where: e3.where, objectIds: e3.objectIds, orderByFields: e3.orderByFields, returnGeometry: e3.returnGeometry, returnIdsOnly: e3.returnIdsOnly, internal: e3.internal } : { groupbypage: true, outFields: e3.outFields, resultRecordCount: e3.resultRecordCount, useOIDpagination: e3.useOIDpagination, generatedOid: e3.generatedOid, groupByFieldsForStatistics: e3.groupByFieldsForStatistics, resultOffset: e3.resultOffset, outStatistics: e3.outStatistics, geometry: e3.geometry, where: e3.where, objectIds: e3.objectIds, orderByFields: e3.orderByFields, returnGeometry: e3.returnGeometry, returnIdsOnly: e3.returnIdsOnly, internal: e3.internal };
  }
  async _getPhysicalPage(e3, t5, r3) {
    const i3 = e3.pagesDefinition.internal.lastRetrieved, s5 = i3, a6 = e3.pagesDefinition.internal.lastPage, n5 = this._layer.nativeCapabilities(), d4 = new d2();
    true === this._requestStandardised && (d4.sqlFormat = "standard"), d4.relationshipId = this.relationship.id, d4.objectIds = e3.pagesDefinition.objectIds, d4.resultOffset = e3.pagesDefinition.internal.lastPage, d4.resultRecordCount = e3.pagesDefinition.resultRecordCount, d4.outFields = e3.pagesDefinition.outFields.split(","), d4.where = e3.pagesDefinition.where, d4.orderByFields = "" !== e3.pagesDefinition.orderByFields ? e3.pagesDefinition.orderByFields.split(",") : null, d4.returnGeometry = e3.pagesDefinition.returnGeometry, d4.outSpatialReference = this.spatialReference;
    const o3 = await n5.source.queryRelatedFeatures(d4);
    if (this._checkCancelled(r3), e3.pagesDefinition.internal.lastPage !== a6) return 0;
    const u2 = o3[this._findObjectId] ? o3[this._findObjectId].features : [];
    for (let l3 = 0; l3 < u2.length; l3++) e3.pagesDefinition.internal.set[s5 + l3] = u2[l3].attributes[this._relatedLayer.objectIdField];
    for (let l3 = 0; l3 < u2.length; l3++) this._featureCache[u2[l3].attributes[this._relatedLayer.objectIdField]] = u2[l3];
    const h2 = !o3[this._findObjectId] || false === o3[this._findObjectId].exceededTransferLimit;
    return u2.length !== e3.pagesDefinition.resultRecordCount && h2 && (e3.pagesDefinition.internal.fullyResolved = true), e3.pagesDefinition.internal.lastRetrieved = i3 + u2.length, e3.pagesDefinition.internal.lastPage += e3.pagesDefinition.resultRecordCount, u2.length;
  }
  async _getFeatures(e3, i3, s5, a6) {
    const n5 = [];
    -1 !== i3 && void 0 === this._featureCache[i3] && n5.push(i3);
    const l3 = this._maxQueryRate();
    if (true === this._checkIfNeedToExpandKnownPage(e3, l3)) return await this._expandPagedSet(e3, l3, 0, 0, a6), this._getFeatures(e3, i3, s5, a6);
    let d4 = 0;
    for (let t5 = e3._lastFetchedIndex; t5 < e3._known.length && (d4++, d4 <= s5 && (e3._lastFetchedIndex += 1), !("GETPAGES" !== e3._known[t5] && void 0 === this._featureCache[e3._known[t5]] && (e3._known[t5] !== i3 && n5.push(e3._known[t5]), n5.length > s5))) && !(d4 >= s5 && 0 === n5.length); t5++) ;
    if (0 === n5.length) return "success";
    throw new s3(t2.MissingFeatures);
  }
  async _refineSetBlock(e3, t5, r3) {
    return e3;
  }
  async _stat(e3, t5, r3, i3, s5, a6, n5) {
    return { calculated: false };
  }
  get gdbVersion() {
    return this._relatedLayer.gdbVersion;
  }
  async _canDoAggregates(e3, t5, r3, i3, s5) {
    return false;
  }
  relationshipMetaData() {
    return this._relatedLayer.relationshipMetaData();
  }
  serviceUrl() {
    return this._relatedLayer.serviceUrl();
  }
  queryAttachments(e3, t5, r3, i3, s5) {
    return this._relatedLayer.queryAttachments(e3, t5, r3, i3, s5);
  }
  getFeatureByObjectId(e3, t5) {
    return this._relatedLayer.getFeatureByObjectId(e3, t5);
  }
  getOwningSystemUrl() {
    return this._relatedLayer.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this._relatedLayer.getIdentityUser();
  }
  getDataSourceFeatureSet() {
    return this._relatedLayer;
  }
  get preferredTimeZone() {
    var _a;
    return ((_a = this._relatedLayer) == null ? void 0 : _a.preferredTimeZone) ?? null;
  }
  get dateFieldsTimeZone() {
    var _a;
    return ((_a = this._relatedLayer) == null ? void 0 : _a.dateFieldsTimeZone) ?? null;
  }
  get datesInUnknownTimezone() {
    var _a;
    return (_a = this._relatedLayer) == null ? void 0 : _a.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    var _a;
    return ((_a = this._relatedLayer) == null ? void 0 : _a.editFieldsInfo) ?? null;
  }
  get timeInfo() {
    var _a;
    return ((_a = this._relatedLayer) == null ? void 0 : _a.timeInfo) ?? null;
  }
  async getFeatureSetInfo() {
    return this.fsetInfo ?? this._layer.featureSetInfo;
  }
};

// node_modules/@arcgis/core/arcade/featureSetUtils.js
function g4() {
  null === a2.applicationCache && (a2.applicationCache = new a2());
}
async function k2(e3, t5, a6) {
  if (a2.applicationCache) {
    const a7 = a2.applicationCache.getLayerInfo(e3);
    if (a7) {
      const r3 = await a7;
      return new Ye({ url: e3, outFields: t5, sourceJSON: r3 });
    }
    const n5 = new Ye({ url: e3, outFields: t5 }), s5 = (async () => (await n5.load(), n5.sourceJSON))();
    if (a2.applicationCache) {
      a2.applicationCache.setLayerInfo(e3, s5);
      try {
        return await s5, n5;
      } catch (r3) {
        throw a2.applicationCache.clearLayerInfo(e3), r3;
      }
    }
    return await s5, n5;
  }
  if (null != a6) {
    const r3 = a6.getCachedLayerMetadata(e3);
    if (r3) {
      const a7 = await r3;
      return new Ye({ url: e3, outFields: t5, sourceJSON: a7 });
    }
    const s5 = new Ye({ url: e3, outFields: t5 }), l3 = (async () => (await s5.load(), s5.sourceJSON))();
    a6.setCachedLayerMetadata(e3, l3);
    try {
      return await l3, s5;
    } catch (n5) {
      throw a6.removeCachedLayerMetadata(e3, l3), n5;
    }
  }
  return new Ye({ url: e3, outFields: t5 });
}
async function F2(e3, t5, a6, r3, n5, s5 = null) {
  return N(await k2(e3, ["*"], n5), t5, a6, r3, n5, s5);
}
function N(e3, t5 = null, a6 = null, r3 = true, n5 = null, s5 = null) {
  switch (e3.type) {
    case "catalog-footprint":
      return N(e3.parent, t5, a6, r3, n5, s5);
    case "subtype-sublayer": {
      const l3 = N(e3.parent, t5, a6, r3, n5, s5);
      return l3.filter(D.create(e3.parent.subtypeField + "=" + e3.subtypeCode.toString(), { fieldsIndex: e3.parent.fieldsIndex, timeZone: l3.dateFieldsTimeZoneDefaultUTC }));
    }
    case "csv":
    case "geojson":
    case "knowledge-graph-sublayer":
    case "wfs":
      return new p2({ layer: e3, spatialReference: t5, outFields: a6, includeGeometry: r3, lrucache: n5, interceptor: s5 });
    case "catalog":
    case "feature":
    case "oriented-imagery":
    case "subtype-group": {
      const l3 = { layer: e3, spatialReference: t5, outFields: a6, includeGeometry: r3, lrucache: n5, interceptor: s5 };
      return !e3.url && e3.source ? new p2(l3) : new P2(l3);
    }
    default:
      throw new Error(`Unsupported layer type: ${e3.type}`);
  }
}
async function A2(t5) {
  if (null !== a2.applicationCache) {
    const e3 = a2.applicationCache.getLayerInfo(t5);
    if (null !== e3) return e3;
  }
  const a6 = (async () => {
    const a7 = await P(t5, { responseType: "json", query: { f: "json" } });
    return a7.data ? a7.data : null;
  })();
  if (null !== a2.applicationCache) {
    a2.applicationCache.setLayerInfo(t5, a6);
    try {
      return await a6;
    } catch (r3) {
      throw a2.applicationCache.clearLayerInfo(t5), r3;
    }
  }
  return a6;
}
async function T3(t5, a6) {
  const r3 = "QUERYDATAELEMTS:" + a6.toString() + ":" + t5;
  if (null !== a2.applicationCache) {
    const e3 = a2.applicationCache.getLayerInfo(r3);
    if (null !== e3) return e3;
  }
  const n5 = (async () => {
    var _a;
    const r4 = await P(t5 + "/queryDataElements", { method: "post", responseType: "json", query: { layers: JSON.stringify([a6.toString()]), f: "json" } });
    if (r4.data) {
      const e3 = r4.data;
      if ((_a = e3.layerDataElements) == null ? void 0 : _a[0]) return e3.layerDataElements[0];
    }
    throw new s3(t2.DataElementsNotFound);
  })();
  if (null !== a2.applicationCache) {
    a2.applicationCache.setLayerInfo(r3, n5);
    try {
      return await n5;
    } catch (s5) {
      throw a2.applicationCache.clearLayerInfo(r3), s5;
    }
  }
  return n5;
}
async function O4(t5, a6) {
  if (null !== a2.applicationCache) {
    const e3 = a2.applicationCache.getLayerInfo(t5);
    if (null !== e3) return e3;
  }
  if (null != a6) {
    const e3 = a6.getCachedServiceMetadata(t5);
    if (null != e3) return e3;
  }
  const r3 = (async () => {
    const a7 = await P(t5, { responseType: "json", query: { f: "json" } });
    if (a7.data) {
      const e3 = a7.data;
      return e3.layers || (e3.layers = []), e3.tables || (e3.tables = []), e3;
    }
    return { layers: [], tables: [] };
  })();
  if (null !== a2.applicationCache) {
    a2.applicationCache.setLayerInfo(t5, r3);
    try {
      return await r3;
    } catch (n5) {
      throw a2.applicationCache.clearLayerInfo(t5), n5;
    }
  }
  if (null != a6) {
    a6.setCachedServiceMetadata(t5, r3);
    try {
      return await r3;
    } catch (s5) {
      throw a6.removeCachedServiceMetadata(t5, r3), s5;
    }
  }
  return r3;
}
async function E3(e3, t5, a6) {
  var _a, _b, _c;
  const r3 = { metadata: null, networkId: -1, unVersion: 3, terminals: [], layerIdLookup: /* @__PURE__ */ new Map(), sourceIdLookup: /* @__PURE__ */ new Map(), queryelem: null, layerNameLkp: {}, lkp: null }, n5 = await O4(e3, null);
  if (r3.metadata = n5, void 0 !== ((_a = n5.controllerDatasetLayers) == null ? void 0 : _a.utilityNetworkLayerId) && null !== n5.controllerDatasetLayers.utilityNetworkLayerId) {
    if (n5.layers) for (const e4 of n5.layers) r3.layerNameLkp[e4.id] = e4.name;
    if (n5.tables) for (const e4 of n5.tables) r3.layerNameLkp[e4.id] = e4.name;
    const s5 = n5.controllerDatasetLayers.utilityNetworkLayerId;
    r3.networkId = s5;
    const l3 = await T3(e3, s5);
    if (l3) {
      r3.queryelem = l3, ((_b = r3.queryelem) == null ? void 0 : _b.dataElement) && void 0 !== r3.queryelem.dataElement.schemaGeneration && (r3.unVersion = r3.queryelem.dataElement.schemaGeneration), r3.lkp = {}, r3.queryelem.dataElement.domainNetworks || (r3.queryelem.dataElement.domainNetworks = []);
      for (const e4 of r3.queryelem.dataElement.domainNetworks) {
        for (const t6 of e4.edgeSources ?? []) {
          const e5 = { layerId: t6.layerId, sourceId: t6.sourceId, className: r3.layerNameLkp[t6.layerId] ?? null };
          r3.layerIdLookup.set(e5.layerId, e5), r3.sourceIdLookup.set(e5.sourceId, e5), e5.className && (r3.lkp[e5.className] = e5);
        }
        for (const t6 of e4.junctionSources ?? []) {
          const e5 = { layerId: t6.layerId, sourceId: t6.sourceId, className: r3.layerNameLkp[t6.layerId] ?? null };
          r3.layerIdLookup.set(e5.layerId, e5), r3.sourceIdLookup.set(e5.sourceId, e5), e5.className && (r3.lkp[e5.className] = e5);
        }
      }
      if (r3.queryelem.dataElement.terminalConfigurations) for (const e4 of r3.queryelem.dataElement.terminalConfigurations) for (const t6 of e4.terminals) r3.terminals.push({ terminalId: t6.terminalId, terminalName: t6.terminalName });
      const n6 = await A2(e3 + "/" + s5);
      if (void 0 !== ((_c = n6.systemLayers) == null ? void 0 : _c.associationsTableId) && null !== n6.systemLayers.associationsTableId) {
        let s6 = null;
        if (a6 && r3.unVersion < 8) {
          const a7 = [];
          r3.unVersion >= 4 && (a7.push("STATUS"), a7.push("PERCENTALONG")), s6 = await F2(e3 + "/" + n6.systemLayers.associationsTableId, t5, ["OBJECTID", "FROMNETWORKSOURCEID", "TONETWORKSOURCEID", "FROMGLOBALID", "TOGLOBALID", "TOTERMINALID", "FROMTERMINALID", "ASSOCIATIONTYPE", "ISCONTENTVISIBLE", "GLOBALID", ...a7], false, null, null), await s6.load(), r3.unVersion >= 4 && (s6 = s6.filter(D.create("STATUS NOT IN (1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62, 63)", { fieldsIndex: s6.getFieldsIndex(), timeZone: s6.dateFieldsTimeZoneDefaultUTC })), await s6.load());
        }
        return { lkp: r3.lkp, associations: s6, unVersion: r3.unVersion, terminals: r3.terminals, layerIdLookup: r3.layerIdLookup, sourceIdLookup: r3.sourceIdLookup };
      }
      return { associations: null, unVersion: r3.unVersion, lkp: null, terminals: [], layerIdLookup: /* @__PURE__ */ new Map(), sourceIdLookup: /* @__PURE__ */ new Map() };
    }
    return { associations: null, unVersion: r3.unVersion, lkp: null, terminals: [], layerIdLookup: /* @__PURE__ */ new Map(), sourceIdLookup: /* @__PURE__ */ new Map() };
  }
  return { associations: null, unVersion: r3.unVersion, lkp: null, terminals: [], layerIdLookup: /* @__PURE__ */ new Map(), sourceIdLookup: /* @__PURE__ */ new Map() };
}
async function j(e3, t5, a6, r3 = null, n5 = null, s5 = true, l3 = null, i3 = null) {
  let o3 = e3.serviceUrl();
  if (!o3) return null;
  o3 = "/" === o3.charAt(o3.length - 1) ? o3 + t5.relatedTableId.toString() : o3 + "/" + t5.relatedTableId.toString();
  const u2 = await F2(o3, r3, n5, s5, l3, i3);
  return new d3({ layer: e3, relatedLayer: u2, relationship: t5, objectId: a6, spatialReference: r3, outFields: n5, includeGeometry: s5, lrucache: l3, interceptor: i3 });
}
c4.registerAction(), O3.registerAction(), a3.registerAction(), l2.registerAction(), a5.registerAction();
var b4 = class extends e {
  constructor(e3, t5 = null, a6 = null, r3 = null) {
    super(), this._map = e3, this._overrideSpatialReference = t5, this._lrucache = a6, this._interceptor = r3, this._instantLayers = [];
  }
  _makeAndAddFeatureSet(e3, t5 = true, a6 = null) {
    const r3 = N(e3, this._overrideSpatialReference, null === a6 ? ["*"] : a6, t5, this._lrucache, this._interceptor);
    return this._instantLayers.push({ featureset: r3, opitem: e3, includeGeometry: t5, outFields: JSON.stringify(a6) }), r3;
  }
  async featureSetByName(e3, t5 = true, a6 = null) {
    if (m2.isLoadable(this._map) && !this._map.loaded) return await this._map.load(), this.featureSetByName(e3, t5, a6);
    null === a6 && (a6 = ["*"]), a6 = (a6 = a6.slice()).sort();
    const r3 = JSON.stringify(a6);
    for (let s5 = 0; s5 < this._instantLayers.length; s5++) {
      const a7 = this._instantLayers[s5];
      if (a7.opitem.title === e3 && a7.includeGeometry === t5 && a7.outFields === r3) return this._instantLayers[s5].featureset;
    }
    const n5 = this._map.allLayers.find((t6) => x(t6) && t6.title === e3);
    if (null != n5) return this._makeAndAddFeatureSet(n5, t5, a6);
    if (this._map.tables) {
      const r4 = this._map.tables.find((t6) => x(t6) && t6.title === e3);
      if (null != r4) return this._makeAndAddFeatureSet(r4, t5, a6);
    }
    return null;
  }
  async featureSetById(e3, t5 = true, a6 = ["*"]) {
    if (m2.isLoadable(this._map) && !this._map.loaded) return await this._map.load(), this.featureSetById(e3, t5, a6);
    null === a6 && (a6 = ["*"]), a6 = (a6 = a6.slice()).sort();
    const r3 = JSON.stringify(a6);
    for (let s5 = 0; s5 < this._instantLayers.length; s5++) {
      const a7 = this._instantLayers[s5];
      if (a7.opitem.id === e3 && a7.includeGeometry === t5 && a7.outFields === r3) return this._instantLayers[s5].featureset;
    }
    const n5 = this._map.allLayers.find((t6) => x(t6) && t6.id === e3);
    if (n5) return this._makeAndAddFeatureSet(n5, t5, a6);
    if (this._map.tables) {
      const r4 = this._map.tables.find((t6) => x(t6) && t6.id === e3);
      if (null != r4) return this._makeAndAddFeatureSet(r4, t5, a6);
    }
    return null;
  }
};
var D4 = class _D extends e {
  constructor(e3, t5 = null, a6 = null, r3 = null) {
    super(), this._url = e3, this._overrideSpatialReference = t5, this._lrucache = a6, this._interceptor = r3, this.metadata = null, this._instantLayers = [];
  }
  get url() {
    return this._url;
  }
  _makeAndAddFeatureSet(e3, t5 = true, a6 = null) {
    const r3 = N(e3, this._overrideSpatialReference, null === a6 ? ["*"] : a6, t5, this._lrucache);
    return this._instantLayers.push({ featureset: r3, opitem: e3, includeGeometry: t5, outFields: JSON.stringify(a6) }), r3;
  }
  async _loadMetaData() {
    const e3 = await O4(this._url, this._lrucache);
    return this.metadata = e3, e3;
  }
  load() {
    return this._loadMetaData();
  }
  clone() {
    return new _D(this._url, this._overrideSpatialReference, this._lrucache, this._interceptor);
  }
  async featureSetByName(e3, t5 = true, a6 = null) {
    null === a6 && (a6 = ["*"]), a6 = (a6 = a6.slice()).sort();
    const r3 = JSON.stringify(a6);
    for (let l3 = 0; l3 < this._instantLayers.length; l3++) {
      const a7 = this._instantLayers[l3];
      if (a7.opitem.title === e3 && a7.includeGeometry === t5 && a7.outFields === r3) return this._instantLayers[l3].featureset;
    }
    const n5 = await this._loadMetaData();
    let s5 = null;
    for (const l3 of n5.layers ?? []) l3.name === e3 && (s5 = l3);
    if (!s5) for (const l3 of n5.tables ?? []) l3.name === e3 && (s5 = l3);
    if (s5) {
      const e4 = await k2(this._url + "/" + s5.id, ["*"], this._lrucache);
      return this._makeAndAddFeatureSet(e4, t5, a6);
    }
    return null;
  }
  async featureSetById(e3, t5 = true, a6 = ["*"]) {
    null === a6 && (a6 = ["*"]), a6 = (a6 = a6.slice()).sort();
    const r3 = JSON.stringify(a6);
    e3 = null != e3 ? e3.toString() : "";
    for (let l3 = 0; l3 < this._instantLayers.length; l3++) {
      const a7 = this._instantLayers[l3];
      if (a7.opitem.id === e3 && a7.includeGeometry === t5 && a7.outFields === r3) return this._instantLayers[l3].featureset;
    }
    const n5 = await this._loadMetaData();
    let s5 = null;
    for (const l3 of n5.layers ?? []) null !== l3.id && void 0 !== l3.id && l3.id.toString() === e3 && (s5 = l3);
    if (!s5) for (const l3 of n5.tables ?? []) null !== l3.id && void 0 !== l3.id && l3.id.toString() === e3 && (s5 = l3);
    if (s5) {
      const e4 = await k2(this._url + "/" + s5.id, ["*"], this._lrucache);
      return this._makeAndAddFeatureSet(e4, t5, a6);
    }
    return null;
  }
};
function M2(e3, t5, a6 = null, r3 = null) {
  return new b4(e3, t5, a6, r3);
}
function v(e3, t5, a6 = null, r3 = null) {
  return new D4(e3, t5, a6, r3);
}
function R2(e3, t5, n5, s5, l3) {
  if (null === e3) return null;
  if (B(e3)) {
    switch (t5) {
      case "datasource":
        return e3.getDataSourceFeatureSet();
      case "parent":
        return e3;
      case "root":
        return e3.getRootFeatureSet();
    }
    return null;
  }
  if (e3 instanceof f3 && M(e3)) {
    const a6 = e3;
    switch (t5) {
      case "datasource":
        return N(a6, l3, "outFields" in a6 ? a6.outFields : null, true, n5, s5).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return N(a6, l3, "outFields" in a6 ? a6.outFields : null, true, n5, s5);
    }
    return null;
  }
  if (ze(e3)) {
    switch (t5) {
      case "datasource":
        return N(e3.parent, l3, e3.parent.outFields, true, n5, s5).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return N(e3, l3, e3.parent.outFields, true, n5, s5);
    }
    return null;
  }
  return null;
}
async function q(e3, t5, a6, r3, n5, s5, l3, i3 = null) {
  if (a2.applicationCache) {
    const o4 = a2.applicationCache.getLayerInfo(e3 + ":" + s5.url);
    if (o4) return G2(await o4, t5, a6, r3, n5, l3, i3);
  }
  if (null != l3) {
    const o4 = l3.getCachedPortalItem(s5.url, e3);
    if (null != o4) return await G2(await o4, t5, a6, r3, n5, l3, i3);
  }
  const o3 = new S2({ id: e3, portal: s5 }).load();
  a2.applicationCache ? a2.applicationCache.setLayerInfo(e3 + ":" + s5.url, o3) : null != l3 && l3.setCachedPortalItem(s5.url, e3, o3);
  try {
    return await G2(await o3, t5, a6, r3, n5, l3, i3);
  } catch (u2) {
    throw a2.applicationCache && a2.applicationCache.clearLayerInfo(e3 + ":" + s5.url), null != l3 && l3.removeCachedPortalItem(s5.url, e3, o3), u2;
  }
}
async function G2(e3, t5, a6, r3, n5, s5, l3) {
  let i3;
  if ("Feature Service" === e3.type || "Map Service" === e3.type) i3 = await k2(E(e3.url ?? "") + "/" + t5, ["*"], s5);
  else {
    if (t5) throw new Error(`layerId=${t5} provided for ${e3.type} item`);
    if (null != s5) {
      const t6 = s5.getCachedPortalItemLayer(e3.portal.url, e3.id);
      if (null != t6) i3 = await t6;
      else {
        const t7 = f3.fromPortalItem(e3);
        s5.setCachedPortalItemLayer(e3.portal.url, e3.id, t7);
        try {
          i3 = await t7;
        } catch (o3) {
          throw s5.removeCachedPortalItemLayer(e3.portal.url, e3.id, t7), o3;
        }
      }
    } else i3 = await f3.fromPortalItem(e3);
  }
  return N(i3, a6, r3, n5, s5, l3);
}

export {
  c4 as c,
  k,
  b3 as b,
  B2 as B,
  L2 as L,
  R,
  e2 as e,
  a3 as a,
  a5 as a2,
  p2 as p,
  g4 as g,
  F2 as F,
  N,
  E3 as E,
  j,
  M2 as M,
  v,
  R2,
  q
};
//# sourceMappingURL=chunk-BB7SPPCM.js.map
