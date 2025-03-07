import {
  P as P2,
  y
} from "./chunk-SCYMP6Y5.js";
import {
  t as t2
} from "./chunk-TSDU5FXE.js";
import {
  l,
  p
} from "./chunk-JMVIOIWP.js";
import {
  a as a2,
  r as r4
} from "./chunk-TA6O62P3.js";
import {
  i,
  r as r2
} from "./chunk-Z2A222O3.js";
import {
  c,
  e as e2,
  i as i2,
  n as n2,
  o,
  r as r3,
  t
} from "./chunk-ZDVQNOKR.js";
import {
  h,
  m
} from "./chunk-Y3AY7I5U.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  u
} from "./chunk-WLGGSXQY.js";
import {
  j as j2
} from "./chunk-T7KGE6VP.js";
import {
  a
} from "./chunk-T57WVICI.js";
import {
  P
} from "./chunk-W633AKTD.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j,
  n
} from "./chunk-YUVX6H42.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  DateTime
} from "./chunk-AIKBABBU.js";
import {
  r
} from "./chunk-A42OBC4U.js";
import {
  e2 as e
} from "./chunk-UFBX3XSC.js";
import {
  S
} from "./chunk-M6FNW7GP.js";
import {
  s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/arcade/ArcadeModule.js
var s2 = class {
};

// node_modules/@arcgis/core/arcade/FunctionWrapper.js
var r5 = class {
  constructor() {
  }
};
function n3(t3, n4, e4) {
  if (t3 instanceof r5 && !(t3 instanceof s3)) {
    const r6 = new s3();
    return r6.fn = t3, r6.parameterEvaluator = e4, r6.context = n4, r6;
  }
  return t3;
}
var e3 = class extends r5 {
  constructor(t3) {
    super(), this.fn = t3;
  }
  createFunction(t3) {
    return (...r6) => this.fn(t3, { preparsed: true, arguments: r6 });
  }
  call(t3, r6) {
    return this.fn(t3, r6);
  }
  marshalledCall(e4, a3, l2, c2) {
    return c2(e4, a3, (a4, o2, i4) => {
      i4 = i4.map((t3) => t3 instanceof r5 && !(t3 instanceof s3) ? n3(t3, e4, c2) : t3);
      const u2 = this.call(l2, { args: i4 });
      return S(u2) ? u2.then((t3) => n3(t3, l2, c2)) : u2;
    });
  }
};
var s3 = class extends r5 {
  constructor() {
    super(...arguments), this.fn = null, this.context = null;
  }
  createFunction(t3) {
    return this.fn.createFunction(this.context);
  }
  call(t3, r6) {
    return this.fn.marshalledCall(t3, r6, this.context, this.parameterEvaluator);
  }
  marshalledCall(t3, r6, n4) {
    return this.fn.marshalledCall(t3, r6, this.context, this.parameterEvaluator);
  }
};

// node_modules/@arcgis/core/arcade/ImmutablePointArray.js
var i3 = class _i extends t2 {
  constructor(t3, s4, i4, h3, e4, a3) {
    super(t3), this._lazyPt = [], this._hasZ = false, this._hasM = false, this._spRef = s4, this._hasZ = i4, this._hasM = h3, this._cacheId = e4, this._partId = a3;
  }
  get(t3) {
    if (void 0 === this._lazyPt[t3]) {
      const i4 = this._elements[t3];
      if (void 0 === i4) return;
      const h3 = new j(i4[0], i4[1], this._spRef);
      this._hasZ && (h3.z = i4[2]), this._hasM && (h3.m = this._hasZ ? i4[3] : i4[2]), h3.cache._arcadeCacheId = this._cacheId.toString() + "-" + this._partId.toString() + "-" + t3.toString(), this._lazyPt[t3] = h3;
    }
    return this._lazyPt[t3];
  }
  equalityTest(t3) {
    return t3 === this || null !== t3 && (t3 instanceof _i != false && t3.getUniqueHash() === this.getUniqueHash());
  }
  getUniqueHash() {
    return this._cacheId.toString() + "-" + this._partId.toString();
  }
};

// node_modules/@arcgis/core/arcade/ImmutablePathArray.js
var h2 = class _h extends t2 {
  constructor(t3, s4, h3, i4, e4) {
    super(t3), this._lazyPath = [], this._hasZ = false, this._hasM = false, this._hasZ = h3, this._hasM = i4, this._spRef = s4, this._cacheId = e4;
  }
  get(t3) {
    if (void 0 === this._lazyPath[t3]) {
      const h3 = this._elements[t3];
      if (void 0 === h3) return;
      this._lazyPath[t3] = new i3(h3, this._spRef, this._hasZ, this._hasM, this._cacheId, t3);
    }
    return this._lazyPath[t3];
  }
  equalityTest(t3) {
    return t3 === this || null !== t3 && (t3 instanceof _h != false && t3.getUniqueHash() === this.getUniqueHash());
  }
  getUniqueHash() {
    return this._cacheId.toString();
  }
};

// node_modules/@arcgis/core/chunks/languageUtils.js
var _ = class {
  constructor(e4) {
    this.value = e4;
  }
};
var I = class {
  constructor(e4) {
    this.value = e4;
  }
};
var v = { type: "VOID" };
var Y = Symbol("BREAK");
var L = Symbol("CONTINUE");
function P3(e4, t3, n4) {
  return "" === t3 || null == t3 || t3 === n4 || t3 === n4 ? e4 : e4 = e4.split(t3).join(n4);
}
function G(e4) {
  return e4 instanceof r5;
}
function V(e4) {
  return e4 instanceof s2;
}
function z(e4) {
  return !!e2(e4) || (!!n2(e4) || (!!te(e4) || (!!ne(e4) || (!!re(e4) || (!!t(e4) || (null === e4 || (e4 === v || "number" == typeof e4)))))));
}
function q(e4, t3) {
  return void 0 === e4 ? t3 : e4;
}
function E(e4) {
  return null == e4 ? "" : o(e4) || ee(e4) ? "Array" : te(e4) ? "Date" : re(e4) ? "Time" : ne(e4) ? "DateOnly" : e2(e4) ? "String" : t(e4) ? "Boolean" : n2(e4) ? "Number" : "esri.arcade.Attachment" === (e4 == null ? void 0 : e4.declaredClass) ? "Attachment" : "esri.arcade.Portal" === (e4 == null ? void 0 : e4.declaredClass) ? "Portal" : "esri.arcade.Dictionary" === (e4 == null ? void 0 : e4.declaredClass) ? "Dictionary" : X(e4) ? "KnowledgeGraph" : e4 instanceof s2 ? "Module" : H(e4) ? "Feature" : e4 instanceof j ? "Point" : e4 instanceof j2 ? "Polygon" : e4 instanceof P ? "Polyline" : e4 instanceof u ? "Multipoint" : e4 instanceof w ? "Extent" : G(e4) ? "Function" : B(e4) ? "FeatureSet" : Q(e4) ? "FeatureSetCollection" : $(e4) ? "Voxel" : e4 === v ? "" : "number" == typeof e4 && isNaN(e4) ? "Number" : "Unrecognized Type";
}
function U(e4) {
  return e4 instanceof n;
}
function H(e4) {
  return "esri.arcade.Feature" === (e4 == null ? void 0 : e4.arcadeDeclaredClass);
}
function $(e4) {
  return "esri.arcade.Voxel" === (e4 == null ? void 0 : e4.arcadeDeclaredClass);
}
function B(e4) {
  return "esri.arcade.featureset.support.FeatureSet" === (e4 == null ? void 0 : e4.declaredRootClass);
}
function K(e4) {
  return "esri.arcade.Dictionary" === (e4 == null ? void 0 : e4.declaredClass);
}
function W(e4) {
  return K(e4) || H(e4) || $(e4);
}
function Q(e4) {
  return "esri.arcade.featureSetCollection" === (e4 == null ? void 0 : e4.declaredRootClass);
}
function X(e4) {
  return "esri.rest.knowledgeGraph.KnowledgeGraph" === (e4 == null ? void 0 : e4.declaredClass);
}
function ee(e4) {
  return e4 instanceof t2;
}
function te(e4) {
  return e4 instanceof m;
}
function ne(e4) {
  return e4 instanceof i;
}
function re(e4) {
  return e4 instanceof r2;
}
function ie(e4) {
  return null != e4 && "object" == typeof e4;
}
function oe(e4, t3, n4, r6, i4) {
  if (e4.length < t3 || e4.length > n4) throw new a2(r6, r4.WrongNumberOfParameters, i4);
}
function ae(e4) {
  return e4 < 0 ? -Math.round(-e4) : Math.round(e4);
}
function ue(e4, t3) {
  return isNaN(e4) || null == t3 || "" === t3 ? e4.toString() : (t3 = P3(t3, "‰", ""), t3 = P3(t3, "¤", ""), l(e4, { pattern: t3 }));
}
function se(e4, t3) {
  return null == t3 || "" === t3 ? e4.toISOString(true) : e4.toFormat(le(t3), { locale: r(), numberingSystem: "latn" });
}
function le(e4, t3 = false) {
  e4 = e4.replaceAll(/LTS|LT|L{1,4}|l{1,4}/g, "[$&]");
  let n4 = "";
  const r6 = /(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|M{1,4}|Do|DDDo|D{1,4}|d{2,4}|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|Z{1,5}|.)/g;
  for (const i4 of e4.match(r6) || []) switch (i4) {
    case "D":
      n4 += "d";
      break;
    case "DD":
      n4 += "dd";
      break;
    case "DDD":
      n4 += "o";
      break;
    case "d":
      n4 += "c";
      break;
    case "ddd":
      n4 += "ccc";
      break;
    case "dddd":
      n4 += "cccc";
      break;
    case "M":
      n4 += "L";
      break;
    case "MM":
      n4 += "LL";
      break;
    case "MMM":
      n4 += "LLL";
      break;
    case "MMMM":
      n4 += "LLLL";
      break;
    case "YY":
      n4 += "yy";
      break;
    case "Y":
    case "YYYY":
      n4 += "yyyy";
      break;
    case "Q":
      n4 += "q";
      break;
    case "Z":
      n4 += "Z";
      break;
    case "ZZ":
      n4 += "ZZ";
      break;
    case "ZZZ":
      n4 += "ZZZ";
      break;
    case "ZZZZ":
      n4 += t3 ? "[ZZZZ]" : "ZZZZ";
      break;
    case "ZZZZZ":
      n4 += t3 ? "[ZZZZZ]" : "ZZZZZ";
      break;
    case "S":
      n4 += "'S'";
      break;
    case "SS":
      n4 += "'SS'";
      break;
    case "SSS":
      n4 += "u";
      break;
    case "A":
    case "a":
      n4 += "a";
      break;
    case "m":
    case "mm":
    case "h":
    case "hh":
    case "H":
    case "HH":
    case "s":
    case "ss":
    case "X":
    case "x":
      n4 += i4;
      break;
    default:
      i4.length >= 2 && "[" === i4.slice(0, 1) && "]" === i4.slice(-1) ? n4 += `'${i4.slice(1, -1)}'` : n4 += `'${i4}'`;
  }
  return n4;
}
function fe(e4, t3, n4) {
  switch (n4) {
    case ">":
      return e4 > t3;
    case "<":
      return e4 < t3;
    case ">=":
      return e4 >= t3;
    case "<=":
      return e4 <= t3;
  }
  return false;
}
function ce(e4, t3, r6) {
  if (null === e4) {
    if (null === t3 || t3 === v) return fe(null, null, r6);
    if (n2(t3)) return fe(0, t3, r6);
    if (e2(t3)) return fe(0, be(t3), r6);
    if (t(t3)) return fe(0, be(t3), r6);
    if (te(t3)) return fe(0, t3.toNumber(), r6);
    if (re(t3)) return fe(e4, t3.toNumber(), r6);
    if (ne(t3)) return fe(e4, t3.toNumber(), r6);
  }
  if (e4 === v) {
    if (null === t3 || t3 === v) return fe(null, null, r6);
    if (n2(t3)) return fe(0, t3, r6);
    if (e2(t3)) return fe(0, be(t3), r6);
    if (t(t3)) return fe(0, be(t3), r6);
    if (te(t3)) return fe(0, t3.toNumber(), r6);
    if (re(t3)) return fe(e4, t3.toNumber(), r6);
    if (ne(t3)) return fe(e4, t3.toNumber(), r6);
  } else if (n2(e4)) {
    if (n2(t3)) return fe(e4, t3, r6);
    if (t(t3)) return fe(e4, be(t3), r6);
    if (null === t3 || t3 === v) return fe(e4, 0, r6);
    if (e2(t3)) return fe(e4, be(t3), r6);
    if (te(t3)) return fe(e4, t3.toNumber(), r6);
    if (re(t3)) return fe(e4, t3.toNumber(), r6);
    if (ne(t3)) return fe(e4, t3.toNumber(), r6);
  } else if (e2(e4)) {
    if (e2(t3)) return fe(ye(e4), ye(t3), r6);
    if (te(t3)) return fe(be(e4), t3.toNumber(), r6);
    if (re(t3)) return fe(be(e4), t3.toNumber(), r6);
    if (ne(t3)) return fe(be(e4), t3.toNumber(), r6);
    if (n2(t3)) return fe(be(e4), t3, r6);
    if (null === t3 || t3 === v) return fe(be(e4), 0, r6);
    if (t(t3)) return fe(be(e4), be(t3), r6);
  } else if (te(e4)) {
    if (te(t3)) return e4.timeZone !== t3.timeZone && (e4.isUnknownTimeZone ? e4 = m.arcadeDateAndZoneToArcadeDate(e4, t3.timeZone) : t3.isUnknownTimeZone && (t3 = m.arcadeDateAndZoneToArcadeDate(t3, e4.timeZone))), fe(e4.toNumber(), t3.toNumber(), r6);
    if (null === t3 || t3 === v) return fe(e4.toNumber(), 0, r6);
    if (n2(t3)) return fe(e4.toNumber(), t3, r6);
    if (t(t3)) return fe(e4.toNumber(), be(t3), r6);
    if (e2(t3)) return fe(e4.toNumber(), be(t3), r6);
    if (re(t3)) throw new a2(null, r4.CannotCompareDateAndTime, null);
    if (ne(t3)) return fe(e4.toNumber(), t3.toNumber(), r6);
  } else if (t(e4)) {
    if (t(t3)) return fe(e4, t3, r6);
    if (n2(t3)) return fe(be(e4), be(t3), r6);
    if (te(t3)) return fe(be(e4), t3.toNumber(), r6);
    if (re(t3)) return fe(be(e4), t3.toNumber(), r6);
    if (ne(t3)) return fe(be(e4), t3.toNumber(), r6);
    if (null === t3 || t3 === v) return fe(be(e4), 0, r6);
    if (e2(t3)) return fe(be(e4), be(t3), r6);
  } else if (ne(e4)) {
    if (te(t3)) return fe(e4.toNumber(), t3.toNumber(), r6);
    if (null === t3 || t3 === v) return fe(e4.toNumber(), 0, r6);
    if (n2(t3)) return fe(e4.toNumber(), t3, r6);
    if (t(t3)) return fe(e4.toNumber(), be(t3), r6);
    if (e2(t3)) return fe(e4.toNumber(), be(t3), r6);
    if (re(t3)) throw new a2(null, r4.CannotCompareDateAndTime, null);
    if (ne(t3)) return fe(e4.toNumber(), t3.toNumber(), r6);
  } else if (re(e4)) {
    if (te(t3)) throw new a2(null, r4.CannotCompareDateAndTime, null);
    if (null === t3 || t3 === v) return fe(e4.toNumber(), 0, r6);
    if (n2(t3)) return fe(e4.toNumber(), t3, r6);
    if (t(t3)) return fe(e4.toNumber(), be(t3), r6);
    if (e2(t3)) return fe(e4.toNumber(), be(t3), r6);
    if (re(t3)) return fe(e4.toNumber(), t3.toNumber(), r6);
    if (ne(t3)) throw new a2(null, r4.CannotCompareDateAndTime, null);
  }
  return !!me(e4, t3) && ("<=" === r6 || ">=" === r6);
}
function me(e4, t3) {
  if (e4 === t3) return true;
  if (null === e4 && t3 === v || null === t3 && e4 === v) return true;
  if (te(e4) && te(t3)) return e4.equals(t3);
  if (re(e4) && re(t3)) return e4.equals(t3);
  if (ne(e4) && ne(t3)) return e4.equals(t3);
  if (e4 instanceof h2) return e4.equalityTest(t3);
  if (e4 instanceof i3) return e4.equalityTest(t3);
  if (e4 instanceof j && t3 instanceof j) {
    const n4 = e4.cache._arcadeCacheId, r6 = t3.cache._arcadeCacheId;
    if (null != n4) return n4 === r6;
  }
  if (ie(e4) && ie(t3)) {
    if (e4._arcadeCacheId === t3._arcadeCacheId && void 0 !== e4._arcadeCacheId && null !== e4._arcadeCacheId) return true;
    if (e4._underlyingGraphic === t3._underlyingGraphic && void 0 !== e4._underlyingGraphic && null !== e4._underlyingGraphic) return true;
  }
  return false;
}
function de(e4, { useNumbersForDates: t3 }) {
  let n4 = "";
  for (const r6 in e4) {
    "" !== n4 && (n4 += ",");
    const i4 = e4[r6];
    null == i4 ? n4 += JSON.stringify(r6) + ":null" : t(i4) || n2(i4) || e2(i4) ? n4 += JSON.stringify(r6) + ":" + JSON.stringify(i4) : U(i4) ? n4 += JSON.stringify(r6) + ":" + ge(i4) : re(i4) || ne(i4) ? n4 += `${JSON.stringify(r6)}:${JSON.stringify(i4.toString())}` : ee(i4) || Array.isArray(i4) ? n4 += JSON.stringify(r6) + ":" + ge(i4, null, t3) : te(i4) ? n4 += t3 ? JSON.stringify(r6) + ":" + JSON.stringify(i4.getTime()) : JSON.stringify(r6) + ":" + i4.stringify() : null !== i4 && "object" == typeof i4 && "castToText" in i4 && (n4 += JSON.stringify(r6) + ":" + i4.castToText(t3));
  }
  return "{" + n4 + "}";
}
function ye(e4, t3) {
  if (e2(e4)) return e4;
  if (null === e4) return "";
  if (n2(e4)) return ue(e4, t3);
  if (t(e4)) return e4.toString();
  if (te(e4)) return se(e4, t3);
  if (re(e4)) return e4.toFormat(t3);
  if (ne(e4)) return e4.toFormat(t3);
  if (e4 instanceof n) return JSON.stringify(e4.toJSON());
  if (o(e4)) {
    const t4 = [];
    for (let n4 = 0; n4 < e4.length; n4++) t4[n4] = he(e4[n4]);
    return "[" + t4.join(",") + "]";
  }
  if (e4 instanceof t2) {
    const t4 = [];
    for (let n4 = 0; n4 < e4.length(); n4++) t4[n4] = he(e4.get(n4));
    return "[" + t4.join(",") + "]";
  }
  return null !== e4 && "object" == typeof e4 && "castToText" in e4 ? e4.castToText() : G(e4) ? "object, Function" : e4 === v ? "" : V(e4) ? "object, Module" : "";
}
function pe(e4) {
  const t3 = [];
  if (e4 instanceof t2) {
    for (let n4 = 0; n4 < e4.length(); n4++) t3[n4] = be(e4.get(n4));
    return t3;
  }
  if (!o(e4)) return null;
  for (let n4 = 0; n4 < e4.length; n4++) t3[n4] = be(e4[n4]);
  return t3;
}
function ge(e4, t3, n4 = false) {
  if (e2(e4)) return e4;
  if (null === e4) return "";
  if (n2(e4)) return ue(e4, t3);
  if (t(e4)) return e4.toString();
  if (te(e4)) return se(e4, t3);
  if (re(e4)) return e4.toFormat(t3);
  if (ne(e4)) return e4.toFormat(t3);
  if (e4 instanceof n) return e4 instanceof w ? '{"xmin":' + e4.xmin.toString() + ',"ymin":' + e4.ymin.toString() + "," + (e4.hasZ ? '"zmin":' + e4.zmin.toString() + "," : "") + (e4.hasM ? '"mmin":' + e4.mmin.toString() + "," : "") + '"xmax":' + e4.xmax.toString() + ',"ymax":' + e4.ymax.toString() + "," + (e4.hasZ ? '"zmax":' + e4.zmax.toString() + "," : "") + (e4.hasM ? '"mmax":' + e4.mmax.toString() + "," : "") + '"spatialReference":' + xe(e4.spatialReference) + "}" : xe(e4.toJSON(), (e5, t4) => e5.key === t4.key ? 0 : "spatialReference" === e5.key ? 1 : "spatialReference" === t4.key || e5.key < t4.key ? -1 : e5.key > t4.key ? 1 : 0);
  if (o(e4)) {
    const t4 = [];
    for (let r6 = 0; r6 < e4.length; r6++) t4[r6] = he(e4[r6], n4);
    return "[" + t4.join(",") + "]";
  }
  if (e4 instanceof t2) {
    const t4 = [];
    for (let r6 = 0; r6 < e4.length(); r6++) t4[r6] = he(e4.get(r6), n4);
    return "[" + t4.join(",") + "]";
  }
  return null !== e4 && "object" == typeof e4 && "castToText" in e4 ? e4.castToText(n4) : G(e4) ? "object, Function" : e4 === v ? "" : V(e4) ? "object, Module" : "";
}
function he(e4, t3 = false) {
  if (null === e4) return "null";
  if (t(e4) || n2(e4) || e2(e4)) return JSON.stringify(e4);
  if (e4 instanceof n) return ge(e4, null, t3);
  if (e4 instanceof t2) return ge(e4, null, t3);
  if (Array.isArray(e4)) return ge(e4, null, t3);
  if (te(e4)) return t3 ? JSON.stringify(e4.getTime()) : JSON.stringify(se(e4, ""));
  if (re(e4)) return JSON.stringify(e4.toString());
  if (ne(e4)) return JSON.stringify(e4.toString());
  if (null !== e4 && "object" == typeof e4) {
    if ("castToText" in e4) return e4.castToText(t3);
  } else if (e4 === v) return "null";
  return "null";
}
function be(e4, t3) {
  return n2(e4) ? e4 : null === e4 || "" === e4 ? 0 : te(e4) || ne(e4) || re(e4) ? NaN : t(e4) ? e4 ? 1 : 0 : o(e4) || "" === e4 || void 0 === e4 ? NaN : void 0 !== t3 && e2(e4) ? (t3 = P3(t3, "‰", ""), t3 = P3(t3, "¤", ""), p(e4, { pattern: t3 })) : e4 === v ? 0 : Number(e4);
}
function Ne(e4, t3) {
  if (te(e4)) return e4;
  if (e2(e4)) {
    const r6 = Se(e4, t3);
    if (r6) return m.dateTimeToArcadeDate(r6);
  }
  return null;
}
function Se(e4, t3) {
  const n4 = / (\d\d)/, i4 = h(t3);
  let o2 = DateTime.fromISO(e4, { zone: i4 });
  return o2.isValid || n4.test(e4) && (e4 = e4.replace(n4, "T$1"), o2 = DateTime.fromISO(e4, { zone: t3 }), o2.isValid) ? o2 : null;
}
function Ze(e4) {
  return t(e4) ? e4 : e2(e4) ? "true" === (e4 = e4.toLowerCase()) : !!n2(e4) && (0 !== e4 && !isNaN(e4));
}
function Te(e4, t3) {
  const n4 = JSON.parse(e4);
  return n4 && !n4.spatialReference && (n4.spatialReference = t3), f(n4);
}
function Ae(e4, t3) {
  return null == e4 ? null : (null !== e4.spatialReference && void 0 !== e4.spatialReference || (e4.spatialReference = t3), e4);
}
function ke(e4) {
  if (null === e4) return null;
  if (e4 instanceof j) return "NaN" === e4.x || null === e4.x || isNaN(e4.x) ? null : e4;
  if (e4 instanceof j2) {
    if (0 === e4.rings.length) return null;
    for (const t3 of e4.rings) if (t3.length > 0) return e4;
    return null;
  }
  if (e4 instanceof P) {
    if (0 === e4.paths.length) return null;
    for (const t3 of e4.paths) if (t3.length > 0) return e4;
    return null;
  }
  return e4 instanceof u ? 0 === e4.points.length ? null : e4 : e4 instanceof w ? "NaN" === e4.xmin || null === e4.xmin || isNaN(e4.xmin) ? null : e4 : null;
}
function je(e4, t3) {
  if (!e4) return t3;
  if (!e4.domain) return t3;
  let n4 = null, r6 = null;
  if (te(t3)) n4 = t3.toNumber();
  else if (ne(t3)) n4 = t3.toString();
  else if (re(t3)) n4 = t3.toStorageString();
  else if ("string" === e4.field.type || "esriFieldTypeString" === e4.field.type) n4 = ye(t3);
  else {
    if (null == t3) return null;
    if ("" === t3) return t3;
    n4 = be(t3);
  }
  for (let i4 = 0; i4 < e4.domain.codedValues.length; i4++) {
    const t4 = e4.domain.codedValues[i4];
    t4.code === n4 && (r6 = t4);
  }
  return null === r6 ? ye(t3) : r6.name;
}
function De(e4, t3) {
  if (!e4) return t3;
  if (!e4.domain) return t3;
  let n4 = null;
  const r6 = ye(t3);
  for (let i4 = 0; i4 < e4.domain.codedValues.length; i4++) {
    const t4 = e4.domain.codedValues[i4];
    t4.name === r6 && (n4 = t4);
  }
  return null === n4 ? t3 : n4.code;
}
function Oe(e4, t3, n4 = null, r6 = null) {
  if (!t3) return null;
  if (!t3.fields) return null;
  let i4, u2, s4 = null;
  for (let o2 = 0; o2 < t3.fields.length; o2++) {
    const n5 = t3.fields[o2];
    n5.name.toLowerCase() === e4.toString().toLowerCase() && (s4 = n5);
  }
  if (null === s4) throw new a2(null, r4.FieldNotFound, null, { key: e4 });
  let l2 = t3.typeIdField, f2 = "id", c2 = t3.types;
  if (t3.subtypeField && (l2 = t3.subtypeField, f2 = "code", c2 = t3.subtypes ?? []), null === r6 && n4 && l2) r6 = n4.hasField(l2) ? n4.field(l2) : null;
  else if (l2 && null !== r6) {
    let e5 = false;
    for (const t4 of c2 || []) if (r6 === t4[f2]) {
      e5 = true;
      break;
    }
    if (!e5) {
      for (const t4 of c2 || []) if (r6 === t4.name) {
        r6 = t4[f2], e5 = true;
        break;
      }
    }
    e5 || (r6 = null, n4 && l2 && (r6 = n4.hasField(l2) ? n4.field(l2) : null));
  }
  return null != r6 && c2.some((e5) => {
    var _a;
    return e5[f2] === r6 && (i4 = (_a = e5.domains) == null ? void 0 : _a[s4.name], i4 && "inherited" === i4.type && (i4 = Ce(s4.name, t3), u2 = true), true);
  }), u2 || i4 || (i4 = Ce(e4, t3)), { field: s4, domain: i4 };
}
function Ce(e4, t3) {
  let n4;
  return t3.fields.some((t4) => (t4.name.toLowerCase() === e4.toLowerCase() && (n4 = t4.domain), !!n4)), n4;
}
function xe(e4, t3) {
  t3 || (t3 = {}), "function" == typeof t3 && (t3 = { cmp: t3 });
  const n4 = "boolean" == typeof t3.cycles && t3.cycles, r6 = t3.cmp && (i4 = t3.cmp, function(e5) {
    return function(t4, n5) {
      const r7 = { key: t4, value: e5[t4] }, o3 = { key: n5, value: e5[n5] };
      return i4(r7, o3);
    };
  });
  var i4;
  const o2 = [];
  return function e5(t4) {
    if ((t4 == null ? void 0 : t4.toJSON) && "function" == typeof t4.toJSON && (t4 = t4.toJSON()), void 0 === t4) return;
    if ("number" == typeof t4) return isFinite(t4) ? "" + t4 : "null";
    if ("object" != typeof t4) return JSON.stringify(t4);
    let i5, a3;
    if (Array.isArray(t4)) {
      for (a3 = "[", i5 = 0; i5 < t4.length; i5++) i5 && (a3 += ","), a3 += e5(t4[i5]) || "null";
      return a3 + "]";
    }
    if (null === t4) return "null";
    if (o2.includes(t4)) {
      if (n4) return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }
    const u2 = o2.push(t4) - 1, s4 = Object.keys(t4).sort(r6 == null ? void 0 : r6(t4));
    for (a3 = "", i5 = 0; i5 < s4.length; i5++) {
      const n5 = s4[i5], r7 = e5(t4[n5]);
      r7 && (a3 && (a3 += ","), a3 += JSON.stringify(n5) + ":" + r7);
    }
    return o2.splice(u2, 1), "{" + a3 + "}";
  }(e4);
}
function Fe(e4) {
  if (null === e4) return null;
  const t3 = [];
  for (const n4 of e4) H(n4) ? t3.push(n4.geometry()) : t3.push(n4);
  return t3;
}
function we(e4, t3) {
  if (!(t3 instanceof j)) throw new a2(null, r4.InvalidParameter, null);
  e4.push(t3.hasZ ? t3.hasM ? [t3.x, t3.y, t3.z, t3.m] : [t3.x, t3.y, t3.z] : [t3.x, t3.y]);
}
function Je(e4, t3) {
  if (o(e4) || ee(e4)) {
    let n4 = false, r6 = false, i4 = [], u2 = t3;
    if (o(e4)) {
      for (const t4 of e4) we(i4, t4);
      i4.length > 0 && (u2 = e4[0].spatialReference, n4 = e4[0].hasZ, r6 = e4[0].hasM);
    } else if (e4 instanceof i3) i4 = e4._elements, i4.length > 0 && (n4 = e4._hasZ, r6 = e4._hasM, u2 = e4.get(0).spatialReference);
    else {
      if (!ee(e4)) throw new a2(null, r4.InvalidParameter, null);
      for (const t4 of e4.toArray()) we(i4, t4);
      i4.length > 0 && (u2 = e4.get(0).spatialReference, n4 = true === e4.get(0).hasZ, r6 = true === e4.get(0).hasM);
    }
    if (0 === i4.length) return null;
    return a(i4) || (i4 = i4.slice().reverse()), new j2({ rings: [i4], spatialReference: u2, hasZ: n4, hasM: r6 });
  }
  return e4;
}
function Me(e4, t3) {
  if (o(e4) || ee(e4)) {
    let n4 = false, r6 = false, i4 = [], o2 = t3;
    if (o(e4)) {
      for (const t4 of e4) we(i4, t4);
      i4.length > 0 && (o2 = e4[0].spatialReference, n4 = true === e4[0].hasZ, r6 = true === e4[0].hasM);
    } else if (e4 instanceof i3) i4 = e4._elements, i4.length > 0 && (n4 = e4._hasZ, r6 = e4._hasM, o2 = e4.get(0).spatialReference);
    else if (ee(e4)) {
      for (const t4 of e4.toArray()) we(i4, t4);
      i4.length > 0 && (o2 = e4.get(0).spatialReference, n4 = true === e4.get(0).hasZ, r6 = true === e4.get(0).hasM);
    }
    return 0 === i4.length ? null : new P({ paths: [i4], spatialReference: o2, hasZ: n4, hasM: r6 });
  }
  return e4;
}
function Re(e4, t3) {
  if (o(e4) || ee(e4)) {
    let n4 = false, r6 = false, i4 = [], o2 = t3;
    if (o(e4)) {
      for (const t4 of e4) we(i4, t4);
      i4.length > 0 && (o2 = e4[0].spatialReference, n4 = true === e4[0].hasZ, r6 = true === e4[0].hasM);
    } else if (e4 instanceof i3) i4 = e4._elements, i4.length > 0 && (n4 = e4._hasZ, r6 = e4._hasM, o2 = e4.get(0).spatialReference);
    else if (ee(e4)) {
      for (const t4 of e4.toArray()) we(i4, t4);
      i4.length > 0 && (o2 = e4.get(0).spatialReference, n4 = true === e4.get(0).hasZ, r6 = true === e4.get(0).hasM);
    }
    return 0 === i4.length ? null : new u({ points: i4, spatialReference: o2, hasZ: n4, hasM: r6 });
  }
  return e4;
}
function _e(e4, t3 = false) {
  const n4 = [];
  if (null === e4) return n4;
  if (true === o(e4)) {
    for (let r6 = 0; r6 < e4.length; r6++) {
      const i4 = ye(e4[r6]);
      "" === i4 && true !== t3 || n4.push(i4);
    }
    return n4;
  }
  if (e4 instanceof t2) {
    for (let r6 = 0; r6 < e4.length(); r6++) {
      const i4 = ye(e4.get(r6));
      "" === i4 && true !== t3 || n4.push(i4);
    }
    return n4;
  }
  if (z(e4)) {
    const r6 = ye(e4);
    return "" === r6 && true !== t3 || n4.push(r6), n4;
  }
  return [];
}
var Ie = 0;
function ve(e4) {
  return Ie++, Ie % 100 == 0 ? (Ie = 0, new Promise((t3) => {
    setTimeout(() => {
      t3(e4);
    }, 0);
  })) : e4;
}
function Ye(e4, t3, n4) {
  switch (n4) {
    case "&":
      return e4 & t3;
    case "|":
      return e4 | t3;
    case "^":
      return e4 ^ t3;
    case "<<":
      return e4 << t3;
    case ">>":
      return e4 >> t3;
    case ">>>":
      return e4 >>> t3;
  }
}
function Le(e4, t3 = null) {
  return null == e4 ? null : t(e4) || n2(e4) || e2(e4) ? e4 : e4 instanceof n ? true === (t3 == null ? void 0 : t3.keepGeometryType) ? e4 : e4.toJSON() : e4 instanceof t2 ? e4.toArray().map((e5) => Le(e5, t3)) : Array.isArray(e4) ? e4.map((e5) => Le(e5, t3)) : c(e4) ? e4 : te(e4) ? e4.toJSDate() : re(e4) ? e4.toString() : ne(e4) ? e4.toJSDate() : null !== e4 && "object" == typeof e4 && void 0 !== e4.castAsJson ? e4.castAsJson(t3) : null;
}
async function Pe(e4, t3, n4, r6, i4) {
  const o2 = await Ge(e4, t3, n4);
  i4[r6] = o2;
}
async function Ge(e4, t3 = null, n4 = null) {
  if (e4 instanceof t2 && (e4 = e4.toArray()), null == e4) return null;
  if (z(e4) || e4 instanceof n || c(e4) || te(e4)) return Le(e4, n4);
  if (Array.isArray(e4)) {
    const r6 = [], i4 = [];
    for (const o2 of e4) null === o2 || z(o2) || o2 instanceof n || c(o2) || te(o2) ? i4.push(Le(o2, n4)) : (i4.push(null), r6.push(Pe(o2, t3, n4, i4.length - 1, i4)));
    return r6.length > 0 && await Promise.all(r6), i4;
  }
  return null !== e4 && "object" == typeof e4 && void 0 !== e4.castAsJsonAsync ? e4.castAsJsonAsync(t3, n4) : null;
}
function Ve(e4) {
  return ze(e4) ? e4.parent : e4;
}
function ze(e4) {
  return e4 && "declaredClass" in e4 && "esri.layers.support.SubtypeSublayer" === e4.declaredClass;
}
function qe(e4) {
  return e4 && "declaredClass" in e4 && "esri.layers.SubtypeGroupLayer" === e4.declaredClass;
}
function Ee(e4, t3, n4) {
  const r6 = Ve(e4.fullSchema());
  if (null === r6) return null;
  if (!r6.fields) return null;
  return Oe(t3, r6, e4, n4);
}
function Ue(e4) {
  const t3 = Ve(e4.fullSchema());
  return null === t3 ? null : t3.fields ? t3.subtypeField ? { subtypeField: t3.subtypeField, subtypes: t3.subtypes ? t3.subtypes.map((e5) => ({ name: e5.name, code: e5.code })) : [] } : t3.typeIdField ? { subtypeField: t3.typeIdField, subtypes: t3.types ? t3.types.map((e5) => ({ name: e5.name, code: e5.id })) : [] } : null : null;
}
function He(e4, t3, n4, r6) {
  const i4 = Ve(e4.fullSchema());
  if (null === i4) return null;
  if (!i4.fields) return null;
  const o2 = Oe(t3, i4, e4, r6);
  if (void 0 === n4) try {
    n4 = e4.field(t3);
  } catch (a3) {
    return null;
  }
  return je(o2, n4);
}
function $e(e4, t3, n4, r6) {
  const i4 = Ve(e4.fullSchema());
  if (null === i4) return null;
  if (!i4.fields) return null;
  if (void 0 === n4) {
    try {
      n4 = e4.field(t3);
    } catch (o2) {
      return null;
    }
    return n4;
  }
  return De(Oe(t3, i4, e4, r6), n4);
}
function Be(e4) {
  return (e4 == null ? void 0 : e4.timeZone) ?? "system";
}
function Ke(e4) {
  const t3 = Ve(e4.fullSchema());
  if (null === t3) return null;
  if (!t3.fields) return null;
  const n4 = [];
  for (const r6 of t3.fields) n4.push(y(r6));
  return { objectIdField: t3.objectIdField, globalIdField: t3.globalIdField ?? "", geometryType: void 0 === P2[t3.geometryType] ? "" : P2[t3.geometryType], fields: n4 };
}
function We(r6, i4) {
  const o2 = m.systemTimeZoneCanonicalName;
  return "system" === r6 && (r6 = o2), { version: Qe, engineVersion: e, timeZone: r6, userTimeZone: o2, spatialReference: i4 instanceof g ? i4.toJSON() : i4, application: s.applicationName ?? "", engine: "web", locale: r() };
}
var Qe = "1.30";
var Xe = Object.freeze(Object.defineProperty({ __proto__: null, ImplicitResult: I, ReturnResult: _, absRound: ae, arcadeVersion: Qe, autoCastArrayOfPointsToMultiPoint: Re, autoCastArrayOfPointsToPolygon: Je, autoCastArrayOfPointsToPolyline: Me, autoCastFeatureToGeometry: Fe, binaryOperator: Ye, breakResult: Y, castAsJson: Le, castAsJsonAsync: Ge, castRecordToText: de, continueResult: L, defaultExecutingContext: We, defaultTimeZone: Be, defaultUndefined: q, equalityTest: me, featureDomainCodeLookup: $e, featureDomainValueLookup: He, featureFullDomain: Ee, featureSchema: Ke, featureSubtypes: Ue, fixNullGeometry: ke, fixSpatialReference: Ae, formatDate: se, formatNumber: ue, getDomain: Oe, getDomainCode: De, getDomainValue: je, getType: E, greaterThanLessThan: ce, isArray: o, isBoolean: t, isDate: te, isDateOnly: ne, isDictionary: K, isDictionaryLike: W, isFeature: H, isFeatureSet: B, isFeatureSetCollection: Q, isFunctionParameter: G, isGeometry: U, isGraphic: i2, isImmutableArray: ee, isInteger: r3, isJsDate: c, isKnowledgeGraph: X, isModule: V, isNumber: n2, isObject: ie, isSimpleType: z, isString: e2, isSubtypeGrouplayer: qe, isSubtypeSublayer: ze, isTime: re, isVoxel: $, multiReplace: P3, parseGeometryFromJson: Te, pcCheck: oe, stableStringify: xe, standardiseDateFormat: le, tick: ve, toBoolean: Ze, toDate: Ne, toNumber: be, toNumberArray: pe, toString: ye, toStringArray: _e, toStringExplicit: ge, voidOperation: v }, Symbol.toStringTag, { value: "Module" }));

export {
  s2 as s,
  r5 as r,
  n3 as n,
  e3 as e,
  s3 as s2,
  i3 as i,
  h2 as h,
  _,
  I,
  v,
  Y,
  L,
  P3 as P,
  G,
  z,
  q,
  E,
  U,
  H,
  $,
  B,
  K,
  W,
  Q,
  X,
  ee,
  te,
  ne,
  re,
  oe,
  ae,
  le,
  ce,
  me,
  de,
  ye,
  pe,
  ge,
  be,
  Ne,
  Ze,
  Ae,
  ke,
  je,
  De,
  Oe,
  Fe,
  Je,
  Me,
  Re,
  _e,
  ve,
  Ye,
  Le,
  Ge,
  ze,
  Ee,
  Ue,
  He,
  $e,
  Be,
  Ke,
  We,
  Xe
};
//# sourceMappingURL=chunk-O4H354HZ.js.map
