import {
  D as D3
} from "./chunk-7SWL6AYJ.js";
import {
  a as a2
} from "./chunk-PE5QC36M.js";
import {
  D as D2,
  P,
  T,
  d,
  f as f2,
  g as g2,
  l,
  m as m2,
  o,
  y
} from "./chunk-SCYMP6Y5.js";
import {
  D,
  a,
  i as i2,
  n
} from "./chunk-CBVVZO37.js";
import {
  i,
  n as n2,
  r as r2
} from "./chunk-Z2A222O3.js";
import {
  Z
} from "./chunk-FFVHLGAP.js";
import {
  m
} from "./chunk-Y3AY7I5U.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  DateTime
} from "./chunk-AIKBABBU.js";
import {
  S
} from "./chunk-M6FNW7GP.js";
import {
  r
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/arcade/featureset/support/errorsupport.js
var t;
!function(e2) {
  e2.NeverReach = "NeverReach", e2.NotImplemented = "NotImplemented", e2.Cancelled = "Cancelled", e2.InvalidStatResponse = "InvalidStatResponse", e2.InvalidRequest = "InvalidRequest", e2.RequestFailed = "RequestFailed", e2.MissingFeatures = "MissingFeatures", e2.AggregationFieldNotFound = "AggregationFieldNotFound", e2.DataElementsNotFound = "DataElementsNotFound";
}(t || (t = {}));
var a3 = { [t.Cancelled]: "Cancelled", [t.InvalidStatResponse]: "Invalid statistics response from service", [t.InvalidRequest]: "Invalid request", [t.RequestFailed]: "Request failed - {reason}", [t.MissingFeatures]: "Missing features", [t.AggregationFieldNotFound]: "Aggregation field not found", [t.DataElementsNotFound]: "Data elements not found on service", [t.NeverReach]: "Encountered unreachable logic", [t.NotImplemented]: "Not implemented" };
var s = class _s extends Error {
  constructor(t3, n3) {
    super(r(a3[t3], n3)), this.declaredRootClass = "esri.arcade.featureset.support.featureseterror", Error.captureStackTrace && Error.captureStackTrace(this, _s);
  }
};

// node_modules/@arcgis/core/arcade/featureset/support/cache.js
var a4 = class {
  constructor() {
    this._databaseTypeMetaData = {}, this._layerInfo = {};
  }
  clearDatabaseType(a6) {
    void 0 === this._databaseTypeMetaData[a6] && delete this._databaseTypeMetaData[a6];
  }
  getDatabaseType(a6) {
    return "MUSTBESET" === a6 || void 0 === this._databaseTypeMetaData[a6] ? null : this._databaseTypeMetaData[a6];
  }
  setDatabaseType(a6, e2) {
    this._databaseTypeMetaData[a6] = e2;
  }
  getLayerInfo(a6) {
    return void 0 === this._layerInfo[a6] ? null : this._layerInfo[a6];
  }
  setLayerInfo(a6, e2) {
    this._layerInfo[a6] = e2;
  }
  clearLayerInfo(a6) {
    void 0 !== this._layerInfo[a6] && delete this._layerInfo[a6];
  }
};
a4.applicationCache = null;

// node_modules/@arcgis/core/arcade/featureset/support/sqlUtils.js
function f3(e2, r3) {
  return y2(e2 == null ? void 0 : e2.parseTree, r3, e2 == null ? void 0 : e2.parameters);
}
function m3(e2, r3, t3) {
  return y2(e2, r3, t3);
}
function p(e2, t3, a6, s2) {
  const n3 = y2(e2.parseTree, o.Standardised, e2.parameters, t3, a6);
  return D.create(n3, { fieldsIndex: s2, timeZone: e2.timeZone, currentUser: e2.currentUser });
}
function g3(e2, t3, a6 = "AND") {
  return D.create("((" + f3(e2, o.Standardised) + ")" + a6 + "(" + f3(t3, o.Standardised) + "))", { fieldsIndex: e2.fieldsIndex, timeZone: e2.timeZone, currentUser: e2.currentUser });
}
function h(e2) {
  return true === e2.delimited ? `"${e2.column.split('"').join('""')}"` : e2.column;
}
function y2(e2, u3, l3, d2 = null, f5 = null) {
  let m5, p3, g5, w3;
  switch (e2.type) {
    case "interval":
      return F(y2(e2.value, u3, l3, d2, f5), e2.qualifier, e2.op);
    case "case-expression": {
      let r3 = " CASE ";
      "simple" === e2.format && (r3 += y2(e2.operand, u3, l3, d2, f5));
      for (let t3 = 0; t3 < e2.clauses.length; t3++) r3 += " WHEN " + y2(e2.clauses[t3].operand, u3, l3, d2, f5) + " THEN " + y2(e2.clauses[t3].value, u3, l3, d2, f5);
      return null !== e2.else && (r3 += " ELSE " + y2(e2.else, u3, l3, d2, f5)), r3 += " END ", r3;
    }
    case "parameter": {
      const r3 = l3[e2.value.toLowerCase()];
      if ("string" == typeof r3) {
        return "'" + l3[e2.value.toLowerCase()].toString().replaceAll("'", "''") + "'";
      }
      if (d(r3)) return I(r3, u3);
      if (m2(r3)) return I(r3, u3);
      if (T(r3)) return A(r3, u3);
      if (f2(r3)) return S2(r3, u3);
      if (g2(r3)) return E(r3, u3);
      if (Array.isArray(r3)) {
        const e3 = [];
        for (let i3 = 0; i3 < r3.length; i3++) "string" == typeof r3[i3] ? e3.push("'" + r3[i3].toString().replaceAll("'", "''") + "'") : d(r3[i3]) || m2(r3[i3]) ? e3.push(I(r3[i3], u3)) : T(r3[i3]) ? e3.push(A(r3[i3], u3)) : f2(r3[i3]) ? e3.push(S2(r3[i3], u3)) : g2(r3[i3]) ? e3.push(E(r3[i3], u3)) : e3.push(r3[i3].toString());
        return e3;
      }
      return r3.toString();
    }
    case "expression-list":
      p3 = [];
      for (const r3 of e2.value) p3.push(y2(r3, u3, l3, d2, f5));
      return p3;
    case "unary-expression":
      return " ( NOT " + y2(e2.expr, u3, l3, d2, f5) + " ) ";
    case "binary-expression":
      switch (e2.operator) {
        case "AND":
          return " (" + y2(e2.left, u3, l3, d2, f5) + " AND " + y2(e2.right, u3, l3, d2, f5) + ") ";
        case "OR":
          return " (" + y2(e2.left, u3, l3, d2, f5) + " OR " + y2(e2.right, u3, l3, d2, f5) + ") ";
        case "IS":
          if ("null" !== e2.right.type) throw new n(a.UnsupportedIsRhs);
          return " (" + y2(e2.left, u3, l3, d2, f5) + " IS NULL )";
        case "ISNOT":
          if ("null" !== e2.right.type) throw new n(a.UnsupportedIsRhs);
          return " (" + y2(e2.left, u3, l3, d2, f5) + " IS NOT NULL )";
        case "IN":
          return m5 = [], "expression-list" === e2.right.type ? (m5 = y2(e2.right, u3, l3, d2, f5), " (" + y2(e2.left, u3, l3, d2, f5) + " IN (" + m5.join(",") + ")) ") : (w3 = y2(e2.right, u3, l3, d2, f5), Array.isArray(w3) ? " (" + y2(e2.left, u3, l3, d2, f5) + " IN (" + w3.join(",") + ")) " : " (" + y2(e2.left, u3, l3, d2, f5) + " IN (" + w3 + ")) ");
        case "NOT IN":
          return m5 = [], "expression-list" === e2.right.type ? (m5 = y2(e2.right, u3, l3, d2, f5), " (" + y2(e2.left, u3, l3, d2, f5) + " NOT IN (" + m5.join(",") + ")) ") : (w3 = y2(e2.right, u3, l3, d2, f5), Array.isArray(w3) ? " (" + y2(e2.left, u3, l3, d2, f5) + " NOT IN (" + w3.join(",") + ")) " : " (" + y2(e2.left, u3, l3, d2, f5) + " NOT IN (" + w3 + ")) ");
        case "BETWEEN":
          return g5 = y2(e2.right, u3, l3, d2, f5), " (" + y2(e2.left, u3, l3, d2, f5) + " BETWEEN " + g5[0] + " AND " + g5[1] + " ) ";
        case "NOTBETWEEN":
          return g5 = y2(e2.right, u3, l3, d2, f5), " (" + y2(e2.left, u3, l3, d2, f5) + " NOT BETWEEN " + g5[0] + " AND " + g5[1] + " ) ";
        case "LIKE":
          return "" !== e2.escape ? " (" + y2(e2.left, u3, l3, d2, f5) + " LIKE " + y2(e2.right, u3, l3, d2, f5) + " ESCAPE '" + e2.escape + "') " : " (" + y2(e2.left, u3, l3, d2, f5) + " LIKE " + y2(e2.right, u3, l3, d2, f5) + ") ";
        case "NOT LIKE":
          return "" !== e2.escape ? " (" + y2(e2.left, u3, l3, d2, f5) + " NOT LIKE " + y2(e2.right, u3, l3, d2, f5) + " ESCAPE '" + e2.escape + "') " : " (" + y2(e2.left, u3, l3, d2, f5) + " NOT LIKE " + y2(e2.right, u3, l3, d2, f5) + ") ";
        case "<>":
        case "<":
        case ">":
        case ">=":
        case "<=":
        case "=":
        case "*":
        case "-":
        case "+":
        case "/":
          return " (" + y2(e2.left, u3, l3, d2, f5) + " " + e2.operator + " " + y2(e2.right, u3, l3, d2, f5) + ") ";
        case "||":
          return " (" + y2(e2.left, u3, l3, d2, f5) + " " + (u3 === o.SqlServer ? "+" : e2.operator) + " " + y2(e2.right, u3, l3, d2, f5) + ") ";
      }
      throw new n(a.UnsupportedOperator, { operator: e2.operator });
    case "null":
      return "null";
    case "boolean":
      return true === e2.value ? "1" : "0";
    case "string":
      return "'" + e2.value.toString().replaceAll("'", "''") + "'";
    case "timestamp":
      return `timestamp '${e2.value}'`;
    case "date":
      return `date '${e2.value}'`;
    case "time":
      return `time '${e2.value}'`;
    case "number":
      return e2.value.toString();
    case "current-time":
      return L(e2.mode, u3);
    case "current-user":
      return "CURRENT_USER";
    case "column-reference":
      return d2 && d2.toLowerCase() === e2.column.toLowerCase() ? "(" + f5 + ")" : h(e2);
    case "data-type":
      return e2.value;
    case "function": {
      const r3 = y2(e2.args, u3, l3, d2, f5);
      return T2(e2.name, r3, u3);
    }
  }
  throw new n(a.UnsupportedSyntax, { node: e2.type });
}
function T2(e2, t3, a6) {
  switch (e2.toLowerCase().trim()) {
    case "cos":
    case "sin":
    case "tan":
    case "cosh":
    case "tanh":
    case "sinh":
    case "acos":
    case "asin":
    case "atan":
    case "floor":
    case "log10":
    case "log":
    case "abs":
      if (1 !== t3.length) throw new n(a.InvalidFunctionParameters, { function: e2.toLowerCase().trim() });
      return `${e2.toUpperCase().trim()}(${t3[0]})`;
    case "ceiling":
    case "ceil":
      if (1 !== t3.length) throw new n(a.InvalidFunctionParameters, { function: "ceiling" });
      switch (a6) {
        case o.Standardised:
        case o.StandardisedNoInterval:
      }
      return "CEILING(" + t3[0] + ")";
    case "mod":
    case "power":
    case "nullif":
      if (2 !== t3.length) throw new n(a.InvalidFunctionParameters, { function: e2.toLowerCase().trim() });
      return `${e2.toUpperCase().trim()}(${t3[0]},${t3[1]})`;
    case "round":
      if (2 === t3.length) return "ROUND(" + t3[0] + "," + t3[1] + ")";
      if (1 === t3.length) return "ROUND(" + t3[0] + ")";
      throw new n(a.InvalidFunctionParameters, { function: "round" });
    case "truncate":
      if (t3.length < 1 || t3.length > 2) throw new n(a.InvalidFunctionParameters, { function: "truncate" });
      return a6 === o.SqlServer ? "ROUND(" + t3[0] + (1 === t3.length ? "0" : "," + t3[1]) + ",1)" : "TRUNCATE(" + t3[0] + (1 === t3.length ? ")" : "," + t3[1] + ")");
    case "char_length":
    case "len":
      if (1 !== t3.length) throw new n(a.InvalidFunctionParameters, { function: "char_length" });
      switch (a6) {
        case o.SqlServer:
          return "LEN(" + t3[0] + ")";
        case o.Oracle:
          return "LENGTH(" + t3[0] + ")";
        default:
          return "CHAR_LENGTH(" + t3[0] + ")";
      }
    case "coalesce":
    case "concat": {
      if (t3.length < 1) throw new n(a.InvalidFunctionParameters, { function: e2.toLowerCase() });
      let r3 = e2.toUpperCase().trim() + "(";
      for (let e3 = 0; e3 < t3.length; e3++) 0 !== e3 && (r3 += ","), r3 += t3[e3];
      return r3 += ")", r3;
    }
    case "lower":
    case "lcase":
      if (1 !== t3.length) throw new n(a.InvalidFunctionParameters, { function: "lower" });
      return "LOWER(" + t3[0] + ")";
    case "upper":
    case "ucase":
      if (1 !== t3.length) throw new n(a.InvalidFunctionParameters, { function: "upper" });
      return "UPPER(" + t3[0] + ")";
    case "substring": {
      let e3 = "";
      switch (a6) {
        case o.Oracle:
          return e3 = "SUBSTR(" + t3[0] + "," + t3[1], 3 === t3.length && (e3 += "," + t3[2]), e3 += ")", e3;
        case o.SqlServer:
          return e3 = 3 === t3.length ? "SUBSTRING(" + t3[0] + "," + t3[1] + "," + t3[2] + ")" : "SUBSTRING(" + t3[0] + ",  " + t3[1] + ", LEN(" + t3[0] + ") - " + t3[1] + ")", e3;
        default:
          return e3 = "SUBSTRING(" + t3[0] + " FROM " + t3[1], 3 === t3.length && (e3 += " FOR " + t3[2]), e3 += ")", e3;
      }
    }
    case "extract":
      return "EXTRACT(" + t3[0].replaceAll("'", "") + " FROM " + t3[1] + ")";
    case "cast": {
      let e3 = "";
      switch (a6) {
        case o.Oracle:
          switch (t3[1].type) {
            case "date":
              e3 = "DATE";
              break;
            case "float":
              e3 = "DOUBLE";
              break;
            case "integer":
              e3 = "INTEGER";
              break;
            case "real":
              e3 = "REAL";
              break;
            case "smallint":
              e3 = "SMALLINT";
              break;
            case "timestamp":
              e3 = "TIMESTAMP";
              break;
            case "varchar":
              e3 = "VARCHAR(" + t3[1].size.toString() + ")";
          }
          return `CAST(${t3[0]} AS ${e3})`;
        case o.Postgres:
          switch (t3[1].type) {
            case "date":
              e3 = "DATE";
              break;
            case "float":
              e3 = "DOUBLE PRECISION";
              break;
            case "integer":
              e3 = "INT";
              break;
            case "real":
              e3 = "REAL";
              break;
            case "smallint":
              e3 = "SMALLINT";
              break;
            case "timestamp":
              e3 = "TIMESTAMP";
              break;
            case "varchar":
              e3 = "VARCHAR(" + t3[1].size.toString() + ")";
          }
          return `CAST(${t3[0]} AS ${e3})`;
        case o.SqlServer:
          switch (t3[1].type) {
            case "date":
              e3 = "DATE";
              break;
            case "float":
              e3 = "FLOAT";
              break;
            case "integer":
              e3 = "INT";
              break;
            case "real":
              e3 = "REAL";
              break;
            case "smallint":
              e3 = "SMALLINT";
              break;
            case "timestamp":
              e3 = "DATETIME";
              break;
            case "varchar":
              e3 = "VARCHAR(" + t3[1].size.toString() + ")";
          }
          return `CAST(${t3[0]} AS ${e3})`;
        default:
          switch (t3[1].type) {
            case "date":
              e3 = "DATE";
              break;
            case "float":
              e3 = "FLOAT";
              break;
            case "integer":
              e3 = "INTEGER";
              break;
            case "real":
              e3 = "REAL";
              break;
            case "smallint":
              e3 = "SMALLINT";
              break;
            case "timestamp":
              e3 = "TIMESTAMP";
              break;
            case "varchar":
              e3 = "VARCHAR(" + t3[1].size.toString() + ")";
          }
          return `CAST(${t3[0]} AS ${e3})`;
      }
    }
  }
  throw new n(a.InvalidFunctionParameters, { function: e2 });
}
function S2(e2, t3) {
  const a6 = e2.toDateTime(), s2 = 0 === a6.hour && 0 === a6.minute && 0 === a6.second && 0 === a6.millisecond;
  switch (t3) {
    case o.FILEGDB:
    case o.Standardised:
    case o.StandardisedNoInterval:
      return s2 ? `date '${a6.toFormat("yyyy-LL-dd")}'` : `timestamp '${a6.toFormat("yyyy-LL-dd HH:mm:ss")}'`;
    case o.Oracle:
      return s2 ? `TO_DATE('${a6.toFormat("yyyy-LL-dd")}','YYYY-MM-DD')` : `TO_DATE('${a6.toFormat("yyyy-LL-dd HH:mm:ss")}','YYYY-MM-DD HH24:MI:SS')`;
    case o.SqlServer:
      return `'${a6.toFormat(s2 ? "yyyy-LL-dd" : "yyyy-LL-dd HH:mm:ss")}'`;
    case o.PGDB:
      return `#${a6.toFormat(s2 ? "LL-dd-yyyy" : "LL-dd-yyyy HH:mm:ss")}#`;
    case o.Postgres:
      return `TIMESTAMP '${a6.toFormat(s2 ? "yyyy-LL-dd" : "yyyy-LL-dd HH:mm:ss")}'`;
    default:
      return `timestamp '${a6.toFormat("yyyy-LL-dd HH:mm:ss")}'`;
  }
}
function E(e2, t3) {
  switch (t3) {
    case o.FILEGDB:
    case o.Standardised:
    case o.StandardisedNoInterval:
      return e2.toSQLWithKeyword();
    case o.Oracle:
      return `TO_DATE('${e2.toFormat("Y-MM-DD")}'`;
    case o.SqlServer:
      return `'${e2.toFormat("Y-MM-DD")}'`;
    case o.PGDB:
      return `#${e2.toFormat("Y-MM-DD")}#`;
    case o.Postgres:
      return `TIMESTAMP '${e2.toFormat("Y-MM-DD")}'`;
    default:
      return e2.toSQLWithKeyword();
  }
}
function A(e2, t3) {
  switch (e2 instanceof r2 && (e2 = e2.toStorageString()), t3) {
    case o.Oracle:
      return `TO_DATE('${e2}', 'HH24:MI:SS')`;
    case o.SqlServer:
      return `'${e2}'`;
    case o.FILEGDB:
    case o.Standardised:
    case o.StandardisedNoInterval:
    case o.Postgres:
    default:
      return `time '${e2}'`;
  }
}
function I(r3, t3) {
  return S2(m.dateTimeToArcadeDate(m2(r3) ? r3 : DateTime.fromJSDate(r3)), t3);
}
function L(e2, t3) {
  switch (t3) {
    case o.FILEGDB:
    case o.Standardised:
    case o.StandardisedNoInterval:
    case o.Oracle:
    case o.PGDB:
    default:
      return "date" === e2 ? "CURRENT_DATE" : "time" === e2 ? "CURRENT_TIME" : "CURRENT_TIMESTAMP";
    case o.SqlServer:
      return "date" === e2 ? "CAST(GETDATE() AS DATE)" : "time" === e2 ? "CAST(GETDATE() AS TIME)" : "GETDATE()";
    case o.Postgres:
      return "date" === e2 ? "CURRENT_DATE" : "time" === e2 ? "LOCALTIME" : "CURRENT_TIMESTAMP";
  }
}
function w(e2, r3, t3 = {}) {
  const a6 = {}, s2 = {}, n3 = { esriFieldTypeSmallInteger: "integer", esriFieldTypeInteger: "integer", esriFieldTypeBigInteger: "integer", esriFieldTypeSingle: "double", esriFieldTypeDouble: "double", esriFieldTypeString: "string", esriFieldTypeTimeOnly: "time-only", esriFieldTypeDateOnly: "date-only", esriFieldTypeTimestampOffset: "timestamp-offset", esriFieldTypeDate: "date", esriFieldTypeOID: "integer", esriFieldTypeGUID: "guid", esriFieldTypeGlobalID: "guid", oid: "integer", long: "integer", "small-integer": "integer", integer: "integer", "big-integer": "integer", single: "double", "time-only": "time-only", "date-only": "date-only", "timestamp-offset": "timestemp-offset", double: "double", date: "date", guid: "guid", "global-id": "guid", string: "string" };
  for (const c of r3) {
    const e3 = c.type ? n3[c.type] : void 0;
    a6[c.name.toLowerCase()] = void 0 === e3 ? "" : e3;
  }
  for (const c in t3) {
    const e3 = n3[t3[c]];
    s2[c.toLowerCase()] = void 0 === e3 ? "" : e3;
  }
  switch (N(a6, e2.parseTree, e2.parameters, s2)) {
    case "double":
      return "double";
    case "integer":
      return "integer";
    case "date":
      return "date";
    case "date-only":
      return "date-only";
    case "time-only":
      return "time-only";
    case "timestamp-offset":
      return "timestamp-offset";
    case "string":
      return "string";
    case "global-id":
    case "guid":
      return "guid";
  }
  return "";
}
function N(e2, r3, a6, u3) {
  var _a, _b, _c, _d, _e;
  let l3;
  switch (r3.type) {
    case "interval":
      return "integer";
    case "case-expression": {
      const t3 = [];
      if ("simple" === r3.format) {
        for (let s2 = 0; s2 < r3.clauses.length; s2++) t3.push(N(e2, r3.clauses[s2].value, a6, u3));
        null !== r3.else && t3.push(N(e2, r3.else, a6, u3));
      } else {
        for (let s2 = 0; s2 < r3.clauses.length; s2++) t3.push(N(e2, r3.clauses[s2].value, a6, u3));
        null !== r3.else && t3.push(N(e2, r3.else, a6, u3));
      }
      return v(t3);
    }
    case "parameter": {
      const e3 = u3[r3.value.toLowerCase()];
      if (void 0 === e3 && a6) {
        const e4 = a6[r3.value.toLowerCase()];
        if (void 0 === e4) return "";
        if (null === e4) return "";
        if ("string" == typeof e4 || e4 instanceof String) return "string";
        if ("boolean" == typeof e4) return "boolean";
        if (d(e4)) return "date";
        if (f2(e4)) return "date";
        if (g2(e4)) return "date-only";
        if (T(e4)) return "time-only";
        if ("number" == typeof e4) return e4 % 1 == 0 ? "integer" : "double";
      }
      return void 0 === e3 ? "" : e3;
    }
    case "expression-list": {
      const t3 = [];
      for (const s2 of r3.value) t3.push(N(e2, s2, a6, u3));
      return t3;
    }
    case "unary-expression":
      return "boolean";
    case "binary-expression":
      switch (r3.operator) {
        case "AND":
        case "OR":
        case "IN":
        case "NOT IN":
        case "BETWEEN":
        case "NOTBETWEEN":
        case "LIKE":
        case "NOT LIKE":
        case "<>":
        case "<":
        case ">":
        case ">=":
        case "<=":
        case "=":
          return "boolean";
        case "IS":
        case "ISNOT":
          if ("null" !== r3.right.type) throw new n(a.UnsupportedIsRhs);
          return "boolean";
        case "*":
        case "-":
        case "+":
        case "/":
          return v([N(e2, r3.left, a6, u3), N(e2, r3.right, a6, u3)]);
        case "||":
          return "string";
        default:
          throw new n(a.UnsupportedOperator, { operator: r3.operator });
      }
    case "null":
      return "";
    case "boolean":
      return "boolean";
    case "string":
      return "string";
    case "number":
      return null === r3.value ? "" : r3.value % 1 == 0 ? "integer" : "double";
    case "date":
      return "date";
    case "timestamp":
      return r3.withtimezone ? "timestamp-offset" : "date";
    case "time":
      return "time-only";
    case "current-time":
      return "time" === r3.mode ? "time-only" : "date";
    case "current-user":
      return "string";
    case "column-reference": {
      const t3 = e2[r3.column.toLowerCase()];
      return void 0 === t3 ? "" : t3;
    }
    case "function":
      switch (r3.name.toLowerCase()) {
        case "cast":
          switch (((_b = (_a = r3.args) == null ? void 0 : _a.value[1]) == null ? void 0 : _b.value.type) ?? "") {
            case "integer":
            case "smallint":
              return "integer";
            case "real":
            case "float":
              return "double";
            case "date":
            case "timestamp":
              return true === ((_e = (_d = (_c = r3.args) == null ? void 0 : _c.value[1]) == null ? void 0 : _d.value) == null ? void 0 : _e.withtimezone) ? "timestamp-offset" : "date";
            case "time":
              return "time-only";
            case "varchar":
              return "string";
            default:
              return "";
          }
        case "position":
        case "extract":
        case "char_length":
        case "mod":
          return "integer";
        case "round":
          if (l3 = N(e2, r3.args, a6, u3), Array.isArray(l3)) {
            if (l3.length <= 0) return "double";
            l3 = l3[0];
          }
          return l3;
        case "sign":
          return "integer";
        case "ceiling":
        case "floor":
        case "abs":
          return l3 = N(e2, r3.args, a6, u3), Array.isArray(l3) && (l3 = v(l3)), "integer" === l3 || "double" === l3 ? l3 : "double";
        case "area":
        case "length":
        case "log":
        case "log10":
        case "sin":
        case "cos":
        case "tan":
        case "asin":
        case "acos":
        case "atan":
        case "cosh":
        case "sinh":
        case "tanh":
        case "power":
          return "double";
        case "substring":
        case "trim":
        case "concat":
        case "lower":
        case "upper":
          return "string";
        case "truncate":
          return "double";
        case "nullif":
        case "coalesce":
          return l3 = N(e2, r3.args, a6, u3), Array.isArray(l3) ? l3.length > 0 ? l3[0] : "" : l3;
      }
      return "";
  }
  throw new n(a.UnsupportedSyntax, { node: r3.type });
}
var b = { boolean: 1, string: 2, integer: 3, double: 4, date: 5 };
function v(e2) {
  if (e2) {
    let r3 = "";
    for (const t3 of e2) "" !== t3 && (r3 = "" === r3 || b[r3] < b[t3] ? t3 : r3);
    return r3;
  }
  return "";
}
function D4(e2, r3) {
  return R(e2.parseTree, r3);
}
function O(e2) {
  return "column-reference" === (e2 == null ? void 0 : e2.parseTree.type);
}
function R(e2, r3) {
  if (null == e2) return false;
  switch (e2.type) {
    case "when-clause":
      return R(e2.operand, r3) || R(e2.value, r3);
    case "case-expression":
      for (const t3 of e2.clauses) if (R(t3, r3)) return true;
      return !("simple" !== e2.format || !R(e2.operand, r3)) || !(null === e2.else || !R(e2.else, r3));
    case "parameter":
    case "null":
    case "boolean":
    case "date":
    case "timestamp":
    case "time":
    case "string":
    case "number":
      return false;
    case "expression-list":
      for (const t3 of e2.value) if (R(t3, r3)) return true;
      return false;
    case "unary-expression":
      return R(e2.expr, r3);
    case "binary-expression":
      return R(e2.left, r3) || R(e2.right, r3);
    case "column-reference":
      return r3.toLowerCase() === e2.column.toLowerCase();
    case "function":
      return R(e2.args, r3);
  }
  return false;
}
function C(e2) {
  let r3 = "";
  return r3 += e2.period.toUpperCase(), r3;
}
function F(e2, r3, t3) {
  let a6 = "";
  return a6 = "interval-period" === r3.type ? C(r3) : C(r3.start) + " TO " + C(r3.end), "INTERVAL " + t3 + " " + e2 + " " + a6;
}

// node_modules/@arcgis/core/arcade/featureset/support/FeatureSetIterator.js
var e = class {
  constructor(t3, e2) {
    this._lastId = -1, this._progress = e2, this._parent = t3;
  }
  reset() {
    this._lastId = -1;
  }
  async nextBatchAsArcadeFeatures(e2, s2) {
    const n3 = await this.nextBatch(e2);
    return null === n3 ? n3 : n3.map((e3) => D3.createFromGraphicLikeObject(e3.geometry, e3.attributes, this._parent, s2));
  }
  nextBatch(t3) {
    if (null !== this._parent._mainSetInUse) return this._parent._mainSetInUse.then((e3) => this.nextBatch(t3), (e3) => this.nextBatch(t3));
    const e2 = { returnpromise: null, hasset: false }, s2 = [];
    return e2.returnpromise = new Promise((n3, a6) => {
      this._parent._getSet(this._progress).then((r3) => {
        const i3 = r3._known;
        let h2 = i3.length - 1;
        if ("GETPAGES" === i3[i3.length - 1] && (h2 -= 1), this._lastId + t3 > h2 && i3.length > 0 && "GETPAGES" === i3[i3.length - 1]) return void this._parent._expandPagedSet(r3, this._parent._maxQueryRate(), 0, 0, this._progress).then((s3) => {
          e2.hasset = true, this._parent._mainSetInUse = null, this.nextBatch(t3).then(n3, a6);
        }, (t4) => {
          e2.hasset = true, this._parent._mainSetInUse = null, a6(t4);
        });
        const _ = r3._candidates;
        if (h2 >= this._lastId + t3 || 0 === _.length) {
          for (let e3 = 0; e3 < t3; e3++) {
            const t4 = e3 + this._lastId + 1;
            if (t4 >= i3.length) break;
            s2[e3] = i3[t4];
          }
          return this._lastId += s2.length, 0 === s2.length && (e2.hasset = true, this._parent._mainSetInUse = null, n3([])), void this._parent._getFeatureBatch(s2, this._progress).then((t4) => {
            e2.hasset = true, this._parent._mainSetInUse = null, n3(t4);
          }, (t4) => {
            e2.hasset = true, this._parent._mainSetInUse = null, a6(t4);
          });
        }
        this._parent._refineSetBlock(r3, this._parent._maxProcessingRate(), this._progress).then(() => {
          e2.hasset = true, this._parent._mainSetInUse = null, this.nextBatch(t3).then(n3, a6);
        }, (t4) => {
          e2.hasset = true, this._parent._mainSetInUse = null, a6(t4);
        });
      }, (t4) => {
        e2.hasset = true, this._parent._mainSetInUse = null, a6(t4);
      });
    }), false === e2.hasset && (this._parent._mainSetInUse = e2.returnpromise, e2.hasset = true), e2.returnpromise;
  }
  next() {
    if (null !== this._parent._mainSetInUse) return this._parent._mainSetInUse.then((t4) => this.next(), (t4) => this.next());
    const t3 = { returnpromise: null, hasset: false };
    return t3.returnpromise = new Promise((e2, s2) => {
      this._parent._getSet(this._progress).then((n3) => {
        const a6 = n3._known;
        if (this._lastId < a6.length - 1) "GETPAGES" === a6[this._lastId + 1] ? this._parent._expandPagedSet(n3, this._parent._maxQueryRate(), 0, 0, this._progress).then((e3) => (t3.hasset = true, this._parent._mainSetInUse = null, this.next())).then(e2, s2) : (this._lastId += 1, this._parent._getFeature(n3, a6[this._lastId], this._progress).then((s3) => {
          t3.hasset = true, this._parent._mainSetInUse = null, e2(s3);
        }, (e3) => {
          t3.hasset = true, this._parent._mainSetInUse = null, s2(e3);
        }));
        else {
          n3._candidates.length > 0 ? this._parent._refineSetBlock(n3, this._parent._maxProcessingRate(), this._progress).then(() => {
            t3.hasset = true, this._parent._mainSetInUse = null, this.next().then(e2, s2);
          }, (e3) => {
            t3.hasset = true, this._parent._mainSetInUse = null, s2(e3);
          }) : (t3.hasset = true, this._parent._mainSetInUse = null, e2(null));
        }
      }, (e3) => {
        t3.hasset = true, this._parent._mainSetInUse = null, s2(e3);
      });
    }), false === t3.hasset && (this._parent._mainSetInUse = t3.returnpromise, t3.hasset = true), t3.returnpromise;
  }
  async count() {
    if (-1 !== this._parent._totalCount) return this._parent._totalCount;
    const t3 = await this._parent._getSet(this._progress), e2 = await this._refineAllSets(t3);
    return this._parent._totalCount = e2._known.length, this._parent._totalCount;
  }
  async _refineAllSets(t3) {
    if (t3._known.length > 0 && "GETPAGES" === t3._known[t3._known.length - 1]) return await this._parent._expandPagedSet(t3, this._parent._maxQueryRate(), 0, 1, this._progress), this._refineAllSets(t3);
    if (t3._candidates.length > 0) {
      if ("GETPAGES" === t3._known[t3._candidates.length - 1]) return await this._parent._expandPagedSet(t3, this._parent._maxQueryRate(), 0, 2, this._progress), this._refineAllSets(t3);
      const e2 = await this._parent._refineSetBlock(t3, this._parent._maxProcessingRate(), this._progress);
      return e2._candidates.length > 0 ? this._refineAllSets(e2) : e2;
    }
    return t3;
  }
};

// node_modules/@arcgis/core/arcade/featureset/support/IdSet.js
var t2 = class {
  constructor(t3, s2, e2, i3) {
    this._lastFetchedIndex = 0, this._ordered = false, this.pagesDefinition = null, this._candidates = t3, this._known = s2, this._ordered = e2, this.pagesDefinition = i3;
  }
};

// node_modules/@arcgis/core/arcade/featureset/support/stats.js
function u(t3) {
  return t3 = +t3, isFinite(t3) ? t3 - t3 % 1 || (t3 < 0 ? -0 : 0 === t3 ? t3 : 0) : t3;
}
function f4(t3) {
  let n3 = 0;
  for (let e2 = 0; e2 < t3.length; e2++) n3 += t3[e2];
  return n3 / t3.length;
}
function m4(t3) {
  const n3 = f4(t3);
  let e2 = 0;
  for (let r3 = 0; r3 < t3.length; r3++) e2 += (n3 - t3[r3]) ** 2;
  return e2 / (t3.length - 1);
}
function g4(t3) {
  let n3 = 0;
  for (let e2 = 0; e2 < t3.length; e2++) n3 += t3[e2];
  return n3;
}
function w2(t3) {
  switch (t3.toLowerCase()) {
    case "distinct":
      return "distinct";
    case "avg":
    case "mean":
      return "avg";
    case "min":
      return "min";
    case "sum":
      return "sum";
    case "max":
      return "max";
    case "stdev":
    case "stddev":
      return "stddev";
    case "var":
    case "variance":
      return "var";
    case "count":
      return "count";
  }
  return "";
}
async function v2(t3, n3, e2) {
  const r3 = await O2(t3, n3, e2);
  return 0 === r3.length ? null : Math.min.apply(Math, r3);
}
async function y3(t3, n3, e2) {
  const r3 = await O2(t3, n3, e2);
  return 0 === r3.length ? null : Math.max.apply(Math, r3);
}
async function M(t3, n3, e2) {
  let r3 = "";
  n3 && !O(n3) && (r3 = w(n3, t3.fields));
  const a6 = await O2(t3, n3, e2);
  if (0 === a6.length) return null;
  const i3 = f4(a6);
  return null === i3 ? i3 : "integer" === r3 ? u(i3) : i3;
}
async function x(t3, n3, e2) {
  const r3 = await O2(t3, n3, e2);
  return 0 === r3.length ? null : m4(r3);
}
async function T3(t3, n3, e2) {
  const r3 = await O2(t3, n3, e2);
  return 0 === r3.length ? null : Math.sqrt(m4(r3));
}
async function k(t3, n3, e2) {
  const r3 = await O2(t3, n3, e2);
  return 0 === r3.length ? null : g4(r3);
}
async function q(t3, n3) {
  return t3.iterator(n3).count();
}
async function O2(e2, r3, a6) {
  const c = e2.iterator(a6), s2 = [], u3 = { ticker: 0 };
  let f5 = await c.next();
  for (; null !== f5; ) {
    if (u3.ticker++, a6.aborted) throw new s(t.Cancelled);
    u3.ticker % 100 == 0 && (u3.ticker = 0, await new Promise((t3) => {
      setTimeout(t3, 0);
    }));
    const e3 = r3 == null ? void 0 : r3.calculateValue(f5);
    null === e3 || (s2[s2.length] = e3 instanceof i || e3 instanceof r2 ? e3.toNumber() : e3 instanceof i2 ? e3.toMilliseconds() : e3), f5 = await c.next();
  }
  return s2;
}
async function S3(e2, r3, a6 = 1e3, c = null) {
  const s2 = e2.iterator(c), u3 = [], f5 = {}, h2 = { ticker: 0 };
  let m5 = await s2.next();
  for (; null !== m5; ) {
    if (h2.ticker++, c == null ? void 0 : c.aborted) throw new s(t.Cancelled);
    h2.ticker % 100 == 0 && (h2.ticker = 0, await new Promise((t3) => {
      setTimeout(t3, 0);
    }));
    const e3 = r3 == null ? void 0 : r3.calculateValue(m5);
    let g5 = e3;
    if (e3 instanceof i ? g5 = "!!DATEONLY!!-" + e3.toString() : e3 instanceof i2 ? g5 = "!!TSOFFSETONLY!!-" + e3.toString() : e3 instanceof r2 ? g5 = "!!TIMEONLY!!-" + e3.toString() : e3 instanceof Date && (g5 = "!!DATE!!-" + e3.toString()), null != e3 && void 0 === f5[g5] && (u3.push(e3), f5[g5] = 1), u3.length >= a6 && -1 !== a6) return u3;
    m5 = await s2.next();
  }
  return u3;
}

// node_modules/@arcgis/core/arcade/featureset/support/FeatureSet.js
var S4 = class _S {
  constructor(e2) {
    this.recentlyUsedQueries = null, this.featureSetQueryInterceptor = null, this._idstates = [], this._parent = null, this._wset = null, this._mainSetInUse = null, this._maxProcessing = 200, this._maxQuery = 500, this._totalCount = -1, this._databaseType = o.NotEvaluated, this._databaseTypeProbed = null, this.declaredRootClass = "esri.arcade.featureset.support.FeatureSet", this._featureCache = /* @__PURE__ */ Object.create(null), this.typeIdField = null, this.types = null, this.subtypeField = null, this.subtypes = null, this.fields = null, this.geometryType = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = null, this.hasM = false, this.hasZ = false, this._transparent = false, this.loaded = false, this._loadPromise = null, this._fieldsIndex = null, this.fsetInfo = null, (e2 == null ? void 0 : e2.lrucache) && (this.recentlyUsedQueries = e2.lrucache), (e2 == null ? void 0 : e2.interceptor) && (this.featureSetQueryInterceptor = e2.interceptor);
  }
  optimisePagingFeatureQueries(e2) {
    this._parent && this._parent.optimisePagingFeatureQueries(e2);
  }
  _hasMemorySource() {
    return true;
  }
  prop(e2, t3) {
    return void 0 === t3 ? this[e2] : (void 0 !== this[e2] && (this[e2] = t3), this);
  }
  end() {
    return null !== this._parent && true === this._parent._transparent ? this._parent.end() : this._parent;
  }
  _ensureLoaded() {
    return this.load();
  }
  load() {
    return null === this._loadPromise && (this._loadPromise = this.loadImpl()), this._loadPromise;
  }
  async loadImpl() {
    var _a, _b;
    return true === ((_a = this._parent) == null ? void 0 : _a.loaded) ? (this._initialiseFeatureSet(), this) : (await ((_b = this._parent) == null ? void 0 : _b.load()), this._initialiseFeatureSet(), this);
  }
  _initialiseFeatureSet() {
    null !== this._parent ? (this.fields = this._parent.fields.slice(), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types, this.subtypeField = this._parent.subtypeField, this.subtypes = this._parent.subtypes) : (this.fields = [], this.typeIdField = "", this.subtypeField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new g({ wkid: 4326 }), this.geometryType = D2.point);
  }
  getField(e2, t3) {
    let n3;
    return (t3 = t3 || this.fields) && (e2 = e2.toLowerCase(), t3.some((t4) => (t4 && t4.name.toLowerCase() === e2 && (n3 = t4), !!n3))), n3;
  }
  getFieldsIndex() {
    return null === this._fieldsIndex && (this._fieldsIndex = Z.fromLayer({ timeInfo: this.timeInfo, editFieldsInfo: this.editFieldsInfo, dateFieldsTimeZone: this.dateFieldsTimeZone, datesInUnknownTimezone: this.datesInUnknownTimezone, fields: this.fields })), this._fieldsIndex;
  }
  _maxProcessingRate() {
    return null !== this._parent ? Math.min(this._maxProcessing, this._parent._maxProcessingRate()) : Math.min(this._maxProcessing, this._maxQueryRate());
  }
  _maxQueryRate() {
    return null !== this._parent ? Math.max(this._maxQuery, this._parent._maxQueryRate()) : this._maxQuery;
  }
  _checkCancelled(e2) {
    if (null != e2 && e2.aborted) throw new s(t.Cancelled);
  }
  nativeCapabilities() {
    return this._parent.nativeCapabilities();
  }
  async _canDoAggregates(e2, t3, n3, s2, i3) {
    return null !== this._parent && this._parent._canDoAggregates(e2, t3, n3, s2, i3);
  }
  async _getAggregatePagesDataSourceDefinition(e2, s2, i3, a6, r3, l3, u3) {
    if (null === this._parent) throw new s(t.NeverReach);
    return this._parent._getAggregatePagesDataSourceDefinition(e2, s2, i3, a6, r3, l3, u3);
  }
  async _getAgregagtePhysicalPage(e2, s2, i3) {
    if (null === this._parent) throw new s(t.NeverReach);
    return this._parent._getAgregagtePhysicalPage(e2, s2, i3);
  }
  async databaseType() {
    if (this._databaseType === o.NotEvaluated) {
      if (null !== a4.applicationCache) {
        const t3 = a4.applicationCache.getDatabaseType(this._cacheableFeatureSetSourceKey());
        if (null !== t3) return t3;
      }
      if (null !== this._databaseTypeProbed) return this._databaseTypeProbed;
      try {
        this._databaseTypeProbed = this._getDatabaseTypeImpl(), null !== a4.applicationCache && a4.applicationCache.setDatabaseType(this._cacheableFeatureSetSourceKey(), this._databaseTypeProbed);
      } catch (t3) {
        throw null !== a4.applicationCache && a4.applicationCache.clearDatabaseType(this._cacheableFeatureSetSourceKey()), t3;
      }
      return this._databaseTypeProbed;
    }
    return this._databaseType;
  }
  async _getDatabaseTypeImpl() {
    const e2 = [{ thetype: o.SqlServer, testwhere: "(CAST( '2015-01-01' as DATETIME) = CAST( '2015-01-01' as DATETIME)) AND OBJECTID<0" }, { thetype: o.Oracle, testwhere: "(TO_DATE('2003-11-18','YYYY-MM-DD') = TO_DATE('2003-11-18','YYYY-MM-DD')) AND OBJECTID<0" }, { thetype: o.StandardisedNoInterval, testwhere: "(date '2015-01-01 10:10:10' = date '2015-01-01 10:10:10') AND OBJECTID<0" }];
    for (const t3 of e2) {
      if (true === await this._runDatabaseProbe(t3.testwhere)) return t3.thetype;
    }
    return o.StandardisedNoInterval;
  }
  _cacheableFeatureSetSourceKey() {
    return "MUSTBESET";
  }
  async _runDatabaseProbe(e2) {
    if (null !== this._parent) return this._parent._runDatabaseProbe(e2);
    throw new s(t.NotImplemented);
  }
  isTable() {
    var _a;
    return ((_a = this._parent) == null ? void 0 : _a.isTable()) ?? false;
  }
  _featureFromCache(e2) {
    if (void 0 !== this._featureCache[e2]) return this._featureCache[e2];
  }
  _isInFeatureSet(e2) {
    return l.Unknown;
  }
  _getSet(e2) {
    throw new s(t.NotImplemented);
  }
  async _getFeature(e2, s2, i3) {
    if (this._checkCancelled(i3), void 0 !== this._featureFromCache(s2)) return this._featureFromCache(s2);
    if (await this._getFeatures(e2, s2, this._maxProcessingRate(), i3), this._checkCancelled(i3), void 0 !== this._featureFromCache(s2)) return this._featureFromCache(s2);
    throw new s(t.MissingFeatures);
  }
  async _getFeatureBatch(e2, t3) {
    this._checkCancelled(t3);
    const n3 = new t2([], e2, false, null), s2 = [];
    await this._getFeatures(n3, -1, e2.length, t3), this._checkCancelled(t3);
    for (const i3 of e2) void 0 !== this._featureFromCache(i3) && s2.push(this._featureFromCache(i3));
    return s2;
  }
  async _getFeatures(e2, t3, n3, s2) {
    return "success";
  }
  _getFilteredSet(e2, s2, i3, a6, r3) {
    throw new s(t.NotImplemented);
  }
  async _refineSetBlock(e2, t3, n3) {
    if (true === this._checkIfNeedToExpandCandidatePage(e2, this._maxQueryRate())) return await this._expandPagedSet(e2, this._maxQueryRate(), 0, 0, n3), this._refineSetBlock(e2, t3, n3);
    this._checkCancelled(n3);
    const s2 = e2._candidates.length;
    this._refineKnowns(e2, t3);
    let i3 = s2 - e2._candidates.length;
    if (0 === e2._candidates.length) return e2;
    if (i3 >= t3) return e2;
    if (await this._refineIfParentKnown(e2, t3 - i3, n3), this._checkCancelled(n3), this._refineKnowns(e2, t3 - i3), i3 = s2 - e2._candidates.length, i3 < t3 && e2._candidates.length > 0) {
      const s3 = t3 - i3, a6 = this._prepareFetchAndRefineSet(e2._candidates);
      return await this._fetchAndRefineFeatures(a6, a6.length > s3 ? s3 : e2._candidates.length, n3), this._checkCancelled(n3), this._refineKnowns(e2, t3 - i3), e2;
    }
    return e2;
  }
  _fetchAndRefineFeatures(e2, t3, n3) {
    return null;
  }
  _prepareFetchAndRefineSet(e2) {
    const t3 = [];
    for (let n3 = 0; n3 < e2.length; n3++) this._isPhysicalFeature(e2[n3]) && t3.push(e2[n3]);
    return t3;
  }
  _isPhysicalFeature(e2) {
    return null === this._parent || this._parent._isPhysicalFeature(e2);
  }
  _refineKnowns(e2, t3) {
    let n3 = 0, s2 = null;
    const i3 = [];
    t3 = this._maxQueryRate();
    for (let a6 = 0; a6 < e2._candidates.length && "GETPAGES" !== e2._candidates[a6]; a6++) {
      let r3 = false;
      const u3 = this._candidateIdTransform(e2._candidates[a6]);
      u3 !== e2._candidates[a6] && (r3 = true);
      const h2 = this._isInFeatureSet(u3);
      if (h2 === l.InFeatureSet) true === r3 ? e2._known.includes(u3) || (e2._known.push(u3), n3 += 1) : (e2._known.push(e2._candidates[a6]), n3 += 1), null === s2 ? s2 = { start: a6, end: a6 } : s2.end === a6 - 1 ? s2.end = a6 : (i3.push(s2), s2 = { start: a6, end: a6 });
      else if (h2 === l.NotInFeatureSet) null === s2 ? s2 = { start: a6, end: a6 } : s2.end === a6 - 1 ? s2.end = a6 : (i3.push(s2), s2 = { start: a6, end: a6 }), n3 += 1;
      else if (h2 === l.Unknown && (n3 += 1, true === e2._ordered)) break;
      if (n3 >= t3) break;
    }
    null !== s2 && i3.push(s2);
    for (let a6 = i3.length - 1; a6 >= 0; a6--) e2._candidates.splice(i3[a6].start, i3[a6].end - i3[a6].start + 1);
  }
  _refineIfParentKnown(e2, t3, n3) {
    const s2 = new t2([], [], e2._ordered, null);
    return s2._candidates = e2._candidates.slice(), this._parent._refineSetBlock(s2, t3, n3);
  }
  _candidateIdTransform(e2) {
    return this._parent._candidateIdTransform(e2);
  }
  _checkIfNeedToExpandKnownPage(e2, t3) {
    if (null === e2.pagesDefinition) return false;
    let n3 = 0;
    for (let s2 = e2._lastFetchedIndex; s2 < e2._known.length; s2++) {
      if ("GETPAGES" === e2._known[s2]) return true;
      if (void 0 === this._featureCache[e2._known[s2]] && (n3 += 1, n3 >= t3)) break;
    }
    return false;
  }
  _checkIfNeedToExpandCandidatePage(e2, t3) {
    if (null === e2.pagesDefinition) return false;
    let n3 = 0;
    for (let s2 = 0; s2 < e2._candidates.length; s2++) {
      if ("GETPAGES" === e2._candidates[s2]) return true;
      if (n3 += 1, n3 >= t3) break;
    }
    return false;
  }
  async _expandPagedSet(e2, s2, i3, a6, r3) {
    if (null === this._parent) throw new s(t.NotImplemented);
    return this._parent._expandPagedSet(e2, s2, i3, a6, r3);
  }
  async _expandPagedSetFeatureSet(e2, t3, n3, s2, i3) {
    if (e2._known.length > 0 && "GETPAGES" === e2._known[e2._known.length - 1] && (s2 = 1), 0 === s2 && e2._candidates.length > 0 && "GETPAGES" === e2._candidates[e2._candidates.length - 1] && (s2 = 2), 0 === s2) return "finished";
    const a6 = await this._getPage(e2, s2, i3);
    return n3 + a6 < t3 ? this._expandPagedSet(e2, t3, n3 + a6, 0, i3) : "success";
  }
  async _getPage(e2, t3, n3) {
    const s2 = 1 === t3 ? e2._known : e2._candidates;
    if (e2.pagesDefinition.internal.set.length > e2.pagesDefinition.resultOffset || true === e2.pagesDefinition.internal.fullyResolved) {
      s2.length = s2.length - 1;
      let t4 = 0;
      for (let i3 = 0; i3 < e2.pagesDefinition.resultRecordCount && !(e2.pagesDefinition.resultOffset + i3 >= e2.pagesDefinition.internal.set.length); i3++) s2[s2.length] = e2.pagesDefinition.internal.set[e2.pagesDefinition.resultOffset + i3], t4++;
      e2.pagesDefinition.resultOffset += t4;
      let n4 = false;
      return true === e2.pagesDefinition.internal.fullyResolved && e2.pagesDefinition.internal.set.length <= e2.pagesDefinition.resultOffset && (n4 = true), false === n4 && s2.push("GETPAGES"), t4;
    }
    return await this._getPhysicalPage(e2, t3, n3), this._getPage(e2, t3, n3);
  }
  _getPhysicalPage(e2, t3, n3) {
    return null;
  }
  _clonePageDefinition(e2) {
    return null === this._parent ? null : this._parent._clonePageDefinition(e2);
  }
  _first(e2) {
    return this.iterator(e2).next();
  }
  first(e2) {
    return this._first(e2);
  }
  async calculateStatistic(e2, t3, n3, s2) {
    await this._ensureLoaded();
    let i3 = await this._stat(e2, t3, "", null, null, n3, s2);
    return false === i3.calculated && (i3 = await this._manualStat(e2, t3, n3, s2)), i3.result;
  }
  async _manualStat(e2, t3, n3, s2) {
    let i3 = null;
    switch (e2.toLowerCase()) {
      case "count":
        return i3 = await q(this, s2), { calculated: true, result: i3 };
      case "distinct":
        return i3 = await S3(this, t3, n3, s2), { calculated: true, result: i3 };
      case "avg":
      case "mean":
        return i3 = await M(this, t3, s2), { calculated: true, result: i3 };
      case "stdev":
        return i3 = await T3(this, t3, s2), { calculated: true, result: i3 };
      case "variance":
        return i3 = await x(this, t3, s2), { calculated: true, result: i3 };
      case "sum":
        return i3 = await k(this, t3, s2), { calculated: true, result: i3 };
      case "min":
        return i3 = await v2(this, t3, s2), { calculated: true, result: i3 };
      case "max":
        return i3 = await y3(this, t3, s2), { calculated: true, result: i3 };
      default:
        return { calculated: true, result: 0 };
    }
  }
  async _stat(e2, t3, n3, s2, i3, a6, r3) {
    const l3 = await this._parent._stat(e2, t3, n3, s2, i3, a6, r3);
    return false === l3.calculated ? null === i3 && "" === n3 && null === s2 ? this._manualStat(e2, t3, a6, r3) : { calculated: false } : l3;
  }
  _unionAllGeomSelf(e2) {
    const t3 = this.iterator(this._defaultTracker(e2)), n3 = [];
    return new Promise((e3, s2) => {
      this._unionShapeInBatches(n3, t3, e3, s2);
    });
  }
  _unionAllGeom(e2) {
    return new Promise((t3, n3) => {
      const s2 = this.iterator(this._defaultTracker(e2)), i3 = [];
      this._unionShapeInBatches(i3, s2, t3, n3);
    });
  }
  _unionShapeInBatches(e2, t3, n3, s2) {
    t3.next().then((i3) => {
      try {
        null !== i3 && null !== i3.geometry && e2.push(i3.geometry), e2.length > 30 || null === i3 && e2.length > 1 ? a2("union", [e2.map((e3) => e3.toJSON())]).then((a6) => {
          try {
            null === i3 ? n3(a6) : (e2 = [f(a6)], this._unionShapeInBatches(e2, t3, n3, s2));
          } catch (r3) {
            s2(r3);
          }
        }, s2) : null === i3 ? 1 === e2.length ? n3(e2[0]) : n3(null) : this._unionShapeInBatches(e2, t3, n3, s2);
      } catch (a6) {
        s2(a6);
      }
    }, s2);
  }
  iterator(e2) {
    return new e(this, e2);
  }
  intersection(e2, t3 = false) {
    return _S._featuresetFunctions.intersection.bind(this)(e2, t3);
  }
  difference(e2, t3 = false, n3 = true) {
    return _S._featuresetFunctions.difference.bind(this)(e2, t3, n3);
  }
  symmetricDifference(e2, t3 = false, n3 = true) {
    return _S._featuresetFunctions.symmetricDifference.bind(this)(e2, t3, n3);
  }
  morphShape(e2, t3, n3 = "unknown", s2 = null) {
    return _S._featuresetFunctions.morphShape.bind(this)(e2, t3, n3, s2);
  }
  morphShapeAndAttributes(e2, t3, n3 = "unknown") {
    return _S._featuresetFunctions.morphShapeAndAttributes.bind(this)(e2, t3, n3);
  }
  union(e2, t3 = false) {
    return _S._featuresetFunctions.union.bind(this)(e2, t3);
  }
  intersects(e2) {
    return _S._featuresetFunctions.intersects.bind(this)(e2);
  }
  envelopeIntersects(e2) {
    return _S._featuresetFunctions.envelopeIntersects.bind(this)(e2);
  }
  contains(e2) {
    return _S._featuresetFunctions.contains.bind(this)(e2);
  }
  overlaps(e2) {
    return _S._featuresetFunctions.overlaps.bind(this)(e2);
  }
  relate(e2, t3) {
    return _S._featuresetFunctions.relate.bind(this)(e2, t3);
  }
  within(e2) {
    return _S._featuresetFunctions.within.bind(this)(e2);
  }
  touches(e2) {
    return _S._featuresetFunctions.touches.bind(this)(e2);
  }
  top(e2) {
    return _S._featuresetFunctions.top.bind(this)(e2);
  }
  crosses(e2) {
    return _S._featuresetFunctions.crosses.bind(this)(e2);
  }
  buffer(e2, t3, n3, s2 = true) {
    return _S._featuresetFunctions.buffer.bind(this)(e2, t3, n3, s2);
  }
  filter(e2, t3 = null) {
    return _S._featuresetFunctions.filter.bind(this)(e2, t3);
  }
  orderBy(e2) {
    return _S._featuresetFunctions.orderBy.bind(this)(e2);
  }
  dissolve(e2, t3) {
    return _S._featuresetFunctions.dissolve.bind(this)(e2, t3);
  }
  groupby(e2, t3) {
    return _S._featuresetFunctions.groupby.bind(this)(e2, t3);
  }
  reduce(e2, t3 = null, n3) {
    return new Promise((s2, i3) => {
      this._reduceImpl(this.iterator(this._defaultTracker(n3)), e2, t3, 0, s2, i3, 0);
    });
  }
  _reduceImpl(e2, t3, n3, s2, i3, a6, r3) {
    try {
      if (++r3 > 1e3) return void setTimeout(() => {
        r3 = 0, this._reduceImpl(e2, t3, n3, s2, i3, a6, r3);
      });
      e2.next().then((l3) => {
        try {
          if (null === l3) i3(n3);
          else {
            const u3 = t3(n3, l3, s2, this);
            S(u3) ? u3.then((n4) => {
              this._reduceImpl(e2, t3, n4, s2 + 1, i3, a6, r3);
            }, a6) : this._reduceImpl(e2, t3, u3, s2 + 1, i3, a6, r3);
          }
        } catch (u3) {
          a6(u3);
        }
      }, a6);
    } catch (l3) {
      a6(l3);
    }
  }
  removeField(e2) {
    return _S._featuresetFunctions.removeField.bind(this)(e2);
  }
  addField(e2, t3, n3 = null) {
    return _S._featuresetFunctions.addField.bind(this)(e2, t3, n3);
  }
  async sumArea(e2, t3 = false, n3) {
    const s2 = this.iterator(n3);
    let i3, a6 = 0;
    for (; null != (i3 = await s2.next()); ) null != i3.geometry && (a6 += t3 ? await a2("geodeticArea", [i3.geometry.toJSON(), e2]) : await a2("area", [i3.geometry.toJSON(), e2]));
    return a6;
  }
  async sumLength(e2, t3 = false, n3) {
    const s2 = this.iterator(n3);
    let i3, a6 = 0;
    for (; null != (i3 = await s2.next()); ) null != i3.geometry && (a6 += t3 ? await a2("geodeticLength", [i3.geometry.toJSON(), e2]) : await a2("length", [i3.geometry.toJSON(), e2]));
    return a6;
  }
  async distinct(e2, t3 = 1e3, n3 = null, s2) {
    await this.load();
    const i3 = D.create(e2, { fieldsIndex: this.getFieldsIndex(), timeZone: this.dateFieldsTimeZoneDefaultUTC });
    return D5(i3, n3), this.calculateStatistic("distinct", i3, t3, this._defaultTracker(s2));
  }
  async min(e2, t3 = null, n3) {
    await this.load();
    const s2 = D.create(e2, { fieldsIndex: this.getFieldsIndex(), timeZone: this.dateFieldsTimeZoneDefaultUTC });
    return D5(s2, t3), this.calculateStatistic("min", s2, -1, this._defaultTracker(n3));
  }
  async max(e2, t3 = null, n3) {
    await this.load();
    const s2 = D.create(e2, { fieldsIndex: this.getFieldsIndex(), timeZone: this.dateFieldsTimeZoneDefaultUTC });
    return D5(s2, t3), this.calculateStatistic("max", s2, -1, this._defaultTracker(n3));
  }
  async avg(e2, t3 = null, n3) {
    await this.load();
    const s2 = D.create(e2, { fieldsIndex: this.getFieldsIndex(), timeZone: this.dateFieldsTimeZoneDefaultUTC });
    return D5(s2, t3), this.calculateStatistic("avg", s2, -1, this._defaultTracker(n3));
  }
  async sum(e2, t3 = null, n3) {
    await this.load();
    const s2 = D.create(e2, { fieldsIndex: this.getFieldsIndex(), timeZone: this.dateFieldsTimeZoneDefaultUTC });
    return D5(s2, t3), this.calculateStatistic("sum", s2, -1, this._defaultTracker(n3));
  }
  async stdev(e2, t3 = null, n3) {
    await this.load();
    const s2 = D.create(e2, { fieldsIndex: this.getFieldsIndex(), timeZone: this.dateFieldsTimeZoneDefaultUTC });
    return D5(s2, t3), this.calculateStatistic("stdev", s2, -1, this._defaultTracker(n3));
  }
  async variance(e2, t3 = null, n3) {
    await this.load();
    const s2 = D.create(e2, { fieldsIndex: this.getFieldsIndex(), timeZone: this.dateFieldsTimeZoneDefaultUTC });
    return D5(s2, t3), this.calculateStatistic("variance", s2, -1, this._defaultTracker(n3));
  }
  async count(e2) {
    return await this.load(), this.calculateStatistic("count", D.create("1", { fieldsIndex: this.getFieldsIndex(), timeZone: this.dateFieldsTimeZoneDefaultUTC }), -1, this._defaultTracker(e2));
  }
  _defaultTracker(e2) {
    return e2 ?? { aborted: false };
  }
  forEach(e2, t3) {
    return new Promise((n3, s2) => {
      this._forEachImpl(this.iterator(this._defaultTracker(t3)), e2, this, n3, s2, 0);
    });
  }
  _forEachImpl(e2, t3, n3, s2, i3, a6) {
    try {
      if (++a6 > 1e3) return void setTimeout(() => {
        a6 = 0, this._forEachImpl(e2, t3, n3, s2, i3, a6);
      }, 0);
      e2.next().then((r3) => {
        try {
          if (null === r3) s2(n3);
          else {
            const l3 = t3(r3);
            null == l3 ? this._forEachImpl(e2, t3, n3, s2, i3, a6) : S(l3) ? l3.then(() => {
              try {
                this._forEachImpl(e2, t3, n3, s2, i3, a6);
              } catch (r4) {
                i3(r4);
              }
            }, i3) : this._forEachImpl(e2, t3, n3, s2, i3, a6);
          }
        } catch (l3) {
          i3(l3);
        }
      }, i3);
    } catch (r3) {
      i3(r3);
    }
  }
  convertToJSON(e2) {
    const t3 = { layerDefinition: { geometryType: this.geometryType, fields: [] }, featureSet: { features: [], geometryType: this.geometryType } };
    for (let n3 = 0; n3 < this.fields.length; n3++) t3.layerDefinition.fields.push(y(this.fields[n3]));
    return this.reduce((e3, n3) => {
      var _a;
      const s2 = { geometry: (_a = n3.geometry) == null ? void 0 : _a.toJSON(), attributes: {} };
      for (const t4 in n3.attributes) s2.attributes[t4] = n3.attributes[t4];
      return t3.featureSet.features.push(s2), 1;
    }, 0, e2).then(() => t3);
  }
  castToText(e2 = false) {
    return "object, FeatureSet";
  }
  queryAttachments(e2, t3, n3, s2, i3) {
    return this._parent.queryAttachments(e2, t3, n3, s2, i3);
  }
  serviceUrl() {
    return this._parent.serviceUrl();
  }
  subtypeMetaData() {
    return this.subtypeField && this.subtypes ? { subtypeField: this.subtypeField, subtypes: this.subtypes ? this.subtypes.map((e2) => ({ name: e2.name, code: e2.code })) : [] } : this.typeIdField ? { subtypeField: this.typeIdField, subtypes: this.types ? this.types.map((e2) => ({ name: e2.name, code: e2.id })) : [] } : null;
  }
  relationshipMetaData() {
    return this._parent.relationshipMetaData();
  }
  get gdbVersion() {
    return this._parent ? this._parent.gdbVersion : "";
  }
  schema() {
    const e2 = [];
    for (const t3 of this.fields) e2.push(y(t3));
    return { objectIdField: this.objectIdField, globalIdField: this.globalIdField, geometryType: void 0 === P[this.geometryType] ? "esriGeometryNull" : P[this.geometryType], fields: e2 };
  }
  async convertToText(e2, t3) {
    if ("schema" === e2) return await this._ensureLoaded(), JSON.stringify(this.schema());
    if ("featureset" === e2) {
      await this._ensureLoaded();
      const e3 = [];
      await this.reduce((t4, n4) => {
        const s2 = { geometry: n4.geometry ? n4.geometry.toJSON() : null, attributes: n4.attributes };
        return null !== s2.geometry && s2.geometry.spatialReference && delete s2.geometry.spatialReference, e3.push(s2), 1;
      }, 0, t3);
      const n3 = this.schema();
      return n3.features = e3, n3.spatialReference = this.spatialReference.toJSON(), JSON.stringify(n3);
    }
    return this.castToText();
  }
  getFeatureByObjectId(e2, t3) {
    return this._parent.getFeatureByObjectId(e2, t3);
  }
  getOwningSystemUrl() {
    return this._parent.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this._parent.getIdentityUser();
  }
  getRootFeatureSet() {
    return null !== this._parent ? this._parent.getRootFeatureSet() : this;
  }
  getDataSourceFeatureSet() {
    return null !== this._parent ? this._parent.getDataSourceFeatureSet() : this;
  }
  castAsJson(e2 = null) {
    return "keeptype" === (e2 == null ? void 0 : e2.featureset) ? this : "none" === (e2 == null ? void 0 : e2.featureset) ? null : { type: "FeatureSet" };
  }
  async castAsJsonAsync(e2 = null, t3 = null) {
    var _a;
    if ("keeptype" === (t3 == null ? void 0 : t3.featureset)) return this;
    if ("schema" === (t3 == null ? void 0 : t3.featureset)) return await this._ensureLoaded(), JSON.parse(JSON.stringify(this.schema()));
    if ("none" === (t3 == null ? void 0 : t3.featureset)) return null;
    await this._ensureLoaded();
    const n3 = [];
    await this.reduce((e3, s3) => {
      const i3 = { geometry: s3.geometry ? true === (t3 == null ? void 0 : t3.keepGeometryType) ? s3.geometry : s3.geometry.toJSON() : null, attributes: s3.attributes };
      return null !== i3.geometry && i3.geometry.spatialReference && true !== (t3 == null ? void 0 : t3.keepGeometryType) && delete i3.geometry.spatialReference, n3.push(i3), 1;
    }, 0, e2);
    const s2 = this.schema();
    return s2.features = n3, s2.spatialReference = true === (t3 == null ? void 0 : t3.keepGeometryType) ? this.spatialReference : (_a = this.spatialReference) == null ? void 0 : _a.toJSON(), s2;
  }
  fieldTimeZone(e2) {
    return this.getFieldsIndex().getTimeZone(e2);
  }
  get preferredTimeZone() {
    var _a;
    return ((_a = this._parent) == null ? void 0 : _a.preferredTimeZone) ?? null;
  }
  get dateFieldsTimeZone() {
    var _a;
    return ((_a = this._parent) == null ? void 0 : _a.dateFieldsTimeZone) ?? null;
  }
  get dateFieldsTimeZoneDefaultUTC() {
    if (this.datesInUnknownTimezone) return "unknown";
    const e2 = this.dateFieldsTimeZone ?? "UTC";
    return "" === e2 ? "UTC" : e2;
  }
  get datesInUnknownTimezone() {
    return this._parent.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    var _a;
    return ((_a = this._parent) == null ? void 0 : _a.editFieldsInfo) ?? null;
  }
  get timeInfo() {
    var _a;
    return ((_a = this._parent) == null ? void 0 : _a.timeInfo) ?? null;
  }
  set featureSetInfo(e2) {
    this.fsetInfo = e2;
  }
  async getFeatureSetInfo() {
    var _a;
    return this.fsetInfo ?? await ((_a = this._parent) == null ? void 0 : _a.getFeatureSetInfo()) ?? null;
  }
};
function D5(e2, t3) {
  if (null !== t3) {
    const n3 = {};
    for (const e3 in t3) n3[e3.toLowerCase()] = t3[e3];
    e2.parameters = n3;
  }
}
S4._featuresetFunctions = {};

// node_modules/@arcgis/core/arcade/featureset/sources/Empty.js
var u2 = class extends S4 {
  constructor(e2) {
    super(e2), this.declaredClass = "esri.layers.featureset.sources.Empty", this._maxProcessing = 1e3, this._wset = new t2([], [], false, null), this._parent = e2.parentfeatureset, this._databaseType = o.Standardised;
  }
  async _getSet() {
    return this._wset;
  }
  optimisePagingFeatureQueries() {
  }
  _isInFeatureSet() {
    return l.NotInFeatureSet;
  }
  async _getFeature() {
    throw new s(t.NeverReach);
  }
  async queryAttachments() {
    return [];
  }
  async _getFeatures() {
    return "success";
  }
  _featureFromCache() {
    return null;
  }
  async _fetchAndRefineFeatures() {
    throw new s(t.NeverReach);
  }
  async _getFilteredSet() {
    return new t2([], [], false, null);
  }
  _stat(e2, t3, r3, s2, a6, n3, u3) {
    return this._manualStat(e2, t3, n3, u3);
  }
  async _canDoAggregates() {
    return false;
  }
};

// node_modules/@arcgis/core/arcade/featureset/actions/SpatialFilter.js
var l2 = class _l extends S4 {
  constructor(e2) {
    super(e2), this._relation = "", this._relationString = "", this.declaredClass = "esri.arcade.featureset.actions.SpatialFilter", this._relationString = e2.relationString, this._parent = e2.parentfeatureset, this._maxProcessing = 40, this._relation = e2.relation, this._relationGeom = e2.relationGeom;
  }
  async _getSet(e2) {
    if (null === this._wset) {
      await this._ensureLoaded();
      const t3 = await this._parent._getFilteredSet("esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, null, null, e2);
      return this._checkCancelled(e2), this._wset = new t2(t3._candidates.slice(), t3._known.slice(), t3._ordered, this._clonePageDefinition(t3.pagesDefinition)), this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet(e2) {
    let t3 = this._parent._isInFeatureSet(e2);
    return t3 === l.NotInFeatureSet ? t3 : (t3 = this._idstates[e2], void 0 === t3 ? l.Unknown : t3);
  }
  _getFeature(e2, t3, i3) {
    return this._parent._getFeature(e2, t3, i3);
  }
  _getFeatures(e2, t3, i3, r3) {
    return this._parent._getFeatures(e2, t3, i3, r3);
  }
  _featureFromCache(e2) {
    return this._parent._featureFromCache(e2);
  }
  async executeSpatialRelationTest(t3) {
    if (null == t3.geometry) return false;
    switch (this._relation) {
      case "esriSpatialRelEnvelopeIntersects": {
        const i3 = n2(this._relationGeom), r3 = n2(t3.geometry);
        return null != i3 && null != r3 && a2("intersects", [i3.toJSON(), r3.toJSON()]);
      }
      case "esriSpatialRelIntersects":
        return a2("intersects", [this._relationGeom.toJSON(), t3.geometry.toJSON()]);
      case "esriSpatialRelContains":
        return a2("contains", [this._relationGeom.toJSON(), t3.geometry.toJSON()]);
      case "esriSpatialRelOverlaps":
        return a2("overlaps", [this._relationGeom.toJSON(), t3.geometry.toJSON()]);
      case "esriSpatialRelWithin":
        return a2("within", [this._relationGeom.toJSON(), t3.geometry.toJSON()]);
      case "esriSpatialRelTouches":
        return a2("touches", [this._relationGeom.toJSON(), t3.geometry.toJSON()]);
      case "esriSpatialRelCrosses":
        return a2("crosses", [this._relationGeom.toJSON(), t3.geometry.toJSON()]);
      case "esriSpatialRelRelation":
        return a2("relate", [this._relationGeom.toJSON(), t3.geometry.toJSON(), this._relationString ?? ""]);
    }
  }
  async _fetchAndRefineFeatures(e2, t3, i3) {
    var _a;
    const r3 = new t2([], e2, false, null), n3 = Math.min(t3, e2.length);
    await ((_a = this._parent) == null ? void 0 : _a._getFeatures(r3, -1, n3, i3)), this._checkCancelled(i3);
    const o2 = [];
    for (let a6 = 0; a6 < n3; a6++) {
      const t4 = this._parent._featureFromCache(e2[a6]);
      o2.push(await this.executeSpatialRelationTest(t4));
    }
    for (let a6 = 0; a6 < t3; a6++) true === o2[a6] ? this._idstates[e2[a6]] = l.InFeatureSet : this._idstates[e2[a6]] = l.NotInFeatureSet;
    return "success";
  }
  async _getFilteredSet(e2, t3, i3, r3, n3) {
    await this._ensureLoaded();
    const s2 = await this._parent._getFilteredSet("esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, i3, r3, n3);
    let o2;
    return this._checkCancelled(n3), o2 = null !== t3 ? new t2(s2._candidates.slice().concat(s2._known.slice()), [], s2._ordered, this._clonePageDefinition(s2.pagesDefinition)) : new t2(s2._candidates.slice(), s2._known.slice(), s2._ordered, this._clonePageDefinition(s2.pagesDefinition)), o2;
  }
  async _stat(e2, t3, i3, r3, n3, a6, s2) {
    if ("" !== i3) return { calculated: false };
    const o2 = await this._parent._stat(e2, t3, "esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, n3, a6, s2);
    return false === o2.calculated ? null === n3 && "" === i3 && null === r3 ? this._manualStat(e2, t3, a6, s2) : { calculated: false } : o2;
  }
  async _canDoAggregates(e2, t3, i3, r3, n3) {
    return "" === i3 && null === r3 && (null !== this._parent && this._parent._canDoAggregates(e2, t3, "esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, n3));
  }
  async _getAggregatePagesDataSourceDefinition(e2, t3, n3, a6, s2, o2, l3) {
    if (null === this._parent) throw new s(t.NeverReach);
    return this._parent._getAggregatePagesDataSourceDefinition(e2, t3, "esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, s2, o2, l3);
  }
  static registerAction() {
    S4._featuresetFunctions.intersects = function(e2) {
      return null == e2 ? new u2({ parentfeatureset: this }) : new _l({ parentfeatureset: this, relation: "esriSpatialRelIntersects", relationGeom: e2 });
    }, S4._featuresetFunctions.envelopeIntersects = function(e2) {
      return null == e2 ? new u2({ parentfeatureset: this }) : new _l({ parentfeatureset: this, relation: "esriSpatialRelEnvelopeIntersects", relationGeom: e2 });
    }, S4._featuresetFunctions.contains = function(e2) {
      return null == e2 ? new u2({ parentfeatureset: this }) : new _l({ parentfeatureset: this, relation: "esriSpatialRelContains", relationGeom: e2 });
    }, S4._featuresetFunctions.overlaps = function(e2) {
      return null == e2 ? new u2({ parentfeatureset: this }) : new _l({ parentfeatureset: this, relation: "esriSpatialRelOverlaps", relationGeom: e2 });
    }, S4._featuresetFunctions.within = function(e2) {
      return null == e2 ? new u2({ parentfeatureset: this }) : new _l({ parentfeatureset: this, relation: "esriSpatialRelWithin", relationGeom: e2 });
    }, S4._featuresetFunctions.touches = function(e2) {
      return null == e2 ? new u2({ parentfeatureset: this }) : new _l({ parentfeatureset: this, relation: "esriSpatialRelTouches", relationGeom: e2 });
    }, S4._featuresetFunctions.crosses = function(e2) {
      return null == e2 ? new u2({ parentfeatureset: this }) : new _l({ parentfeatureset: this, relation: "esriSpatialRelCrosses", relationGeom: e2 });
    }, S4._featuresetFunctions.relate = function(e2, i3) {
      return null == e2 ? new u2({ parentfeatureset: this }) : new _l({ parentfeatureset: this, relation: "esriSpatialRelRelation", relationGeom: e2, relationString: i3 });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
};

export {
  t,
  s,
  a4 as a,
  t2,
  f3 as f,
  m3 as m,
  p,
  g3 as g,
  h,
  T2 as T,
  S2 as S,
  E,
  A,
  I,
  L,
  w,
  D4 as D,
  O,
  F,
  w2,
  S4 as S2,
  u2 as u,
  l2 as l
};
//# sourceMappingURL=chunk-N5NRCY3G.js.map
