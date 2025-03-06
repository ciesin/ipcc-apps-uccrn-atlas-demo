import {
  B as B2,
  C as C2,
  D as D2,
  F,
  G,
  I,
  Q as Q2,
  R,
  Z,
  ne,
  te as te2,
  x
} from "./chunk-ZY4V5X7N.js";
import {
  n as n2
} from "./chunk-6CNFKQP7.js";
import "./chunk-OQ3YQLHO.js";
import "./chunk-RQTCSDBY.js";
import "./chunk-SMPH4DRM.js";
import "./chunk-4DEIS6AK.js";
import {
  D
} from "./chunk-7SWL6AYJ.js";
import {
  C
} from "./chunk-GKX3Z6XX.js";
import {
  B,
  H,
  Q,
  de,
  ee,
  te
} from "./chunk-O4H354HZ.js";
import "./chunk-SCYMP6Y5.js";
import {
  t as t2
} from "./chunk-TSDU5FXE.js";
import "./chunk-JMVIOIWP.js";
import "./chunk-F7TFMQ3A.js";
import "./chunk-YRSM2W7P.js";
import "./chunk-EM6PL3GZ.js";
import "./chunk-J7454WTE.js";
import "./chunk-U6JFTJMZ.js";
import "./chunk-2SVLUMFO.js";
import {
  a as a2,
  r as r2
} from "./chunk-TA6O62P3.js";
import "./chunk-CBVVZO37.js";
import {
  i,
  r
} from "./chunk-Z2A222O3.js";
import "./chunk-FFVHLGAP.js";
import "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import "./chunk-XEBZUAYT.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import {
  c,
  e,
  n,
  o,
  t
} from "./chunk-ZDVQNOKR.js";
import {
  m
} from "./chunk-Y3AY7I5U.js";
import "./chunk-WZBMMIVS.js";
import {
  u
} from "./chunk-WLGGSXQY.js";
import {
  j as j2
} from "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import {
  P
} from "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-5EWD56QJ.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-UNGOQUF2.js";
import "./chunk-7LY6RE4Z.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  a
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/arcade/Voxel.js
var n3 = "Voxel.Position";
var a3 = "Voxel.LocalTime";
function l(t3) {
  const s = t3.getAttribute(n3);
  if ("string" != typeof s) throw new a2(null, r2.InvalidParameter, null);
  const o2 = JSON.parse(s);
  if (!Array.isArray(o2) || "number" != typeof o2[0] || "number" != typeof o2[1] || "number" != typeof o2[2]) throw new a2(null, r2.InvalidParameter, null);
  return new t2(o2);
}
function u2(r3, s) {
  const n4 = r3.getAttribute(a3);
  if (null == n4) return null;
  if (!c(n4)) throw new a2(null, r2.InvalidParameter, null);
  return m.dateJSAndZoneToArcadeDate(n4, s);
}
var c2 = class {
  constructor(t3, e2) {
    this._graphic = t3, this._timeZone = e2, this.arcadeDeclaredClass = "esri.arcade.Voxel", this._layer = t3.layer;
  }
  getPosition() {
    return void 0 !== this._position ? this._position : this._position = l(this._graphic);
  }
  getLocalTime() {
    return void 0 !== this._localTime ? this._localTime : this._localTime = u2(this._graphic, this._timeZone ?? "system");
  }
  keys() {
    return this._layer.fields.map((t3) => t3.name).sort();
  }
  hasField(t3) {
    return this._layer.fieldsIndex.has(t3);
  }
  field(t3) {
    var _a, _b;
    const r3 = (_b = (_a = this._layer.fieldsIndex) == null ? void 0 : _a.get(t3)) == null ? void 0 : _b.name;
    if (null == r3) throw new a2(null, r2.FieldNotFound, null, { key: t3 });
    switch (r3) {
      case n3:
        return this.getPosition();
      case a3:
        return this.getLocalTime();
    }
    return this._graphic.attributes[r3] ?? null;
  }
  castToText(t3 = false) {
    var _a;
    const e2 = { ...this._graphic.attributes };
    e2[n3] = this.getPosition(), a3 in e2 && (e2[a3] = this.getLocalTime());
    for (const i2 of Object.keys(e2)) ((_a = this._layer.fieldsIndex) == null ? void 0 : _a.has(i2)) || delete e2[i2];
    return de(e2, { useNumbersForDates: t3 });
  }
};

// node_modules/@arcgis/core/support/arcadeUtils.js
var M = { vars: { $feature: "any", $view: "any" }, spatialReference: null };
function T(e2) {
  return e2.replaceAll(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
function z(e2) {
  return null == e2 ? null : o(e2) || ee(e2) ? "array" : te(e2) ? "date" : e(e2) ? "text" : t(e2) ? "boolean" : n(e2) ? "number" : e2 instanceof C ? "dictionary" : H(e2) ? "feature" : e2 instanceof j ? "point" : e2 instanceof j2 ? "polygon" : e2 instanceof P ? "polyline" : e2 instanceof u ? "multipoint" : e2 instanceof w ? "extent" : e2 instanceof i ? "dateOnly" : e2 instanceof r ? "time" : B(e2) ? "featureSet" : Q(e2) ? "featureSetCollection" : null;
}
function k(n4) {
  if (!n4) return null;
  try {
    return F(n4);
  } catch (r3) {
  }
  return null;
}
function J(e2, r3) {
  const t3 = "string" == typeof e2 ? k(e2) : e2;
  if (!t3) return null;
  try {
    return r3 = r3 || a(M), x(t3, r3);
  } catch (o2) {
  }
  return null;
}
function V(e2, n4, r3) {
  return { vars: { $feature: null == e2 ? new D() : D.createFromGraphic(e2, r3), $view: n4 == null ? void 0 : n4.view }, spatialReference: n4 == null ? void 0 : n4.sr, timeZone: r3 ?? null };
}
function O(e2, n4, r3) {
  return D.createFromGraphicLikeObject(n4, e2, r3, null);
}
function Z2(e2, n4) {
  null != e2.vars && (e2.vars.$feature = n4);
}
function q(e2, n4) {
  let t3;
  try {
    t3 = G(e2, n4);
  } catch (o2) {
    t3 = null;
  }
  return t3;
}
function G2(e2, n4) {
  let r3;
  try {
    r3 = e2 ? e2(n4) : null;
  } catch (t3) {
    r3 = null;
  }
  return r3;
}
function L(e2, n4) {
  try {
    return e2 ? e2(n4) : Promise.resolve(null);
  } catch (r3) {
    return Promise.resolve(null);
  }
}
var N = new Set(["$feature", "$aggregatedFeatures", "$voxel"].map((e2) => n2(e2)));
function U(e2, n4) {
  if (!e2) return [];
  const r3 = "string" == typeof e2 ? k(e2) : e2;
  if (!r3) return [];
  const o2 = C2(r3).filter(({ varId: e3 }) => N.has(e3)).map(({ memberNamePattern: e3 }) => e3).flatMap((e3) => {
    if (e3.includes("*")) {
      if (null == n4) return [];
      const r4 = new RegExp(`^${e3.split(/\*+/).map(T).join(".*")}$`, "i");
      return n4.filter((e4) => r4.test(e4));
    }
    return e3.toLowerCase();
  });
  return [...new Set(o2.sort())];
}
function B3(e2) {
  return I(e2, "$view");
}
function H2(e2, n4) {
  return !!e2 && I(e2, n4);
}
function K(e2) {
  if (!e2 || null == e2.spatialReference && (null == e2.scale || null == e2.viewingMode)) return;
  let n4, r3;
  const { timeProperties: t3, timeZone: o2 } = e2;
  if (null != t3) {
    const { currentStart: e3, currentEnd: a4 } = t3;
    null != o2 ? (n4 = null != e3 ? m.dateJSAndZoneToArcadeDate(e3, o2) : null, r3 = null != a4 ? m.dateJSAndZoneToArcadeDate(a4, o2) : null) : (n4 = null != e3 ? m.dateJSToArcadeDate(e3) : null, r3 = null != a4 ? m.dateJSToArcadeDate(a4) : null);
  }
  return { view: e2.viewingMode && null != e2.scale ? new C({ viewingMode: e2.viewingMode, scale: e2.scale, timeProperties: null != n4 || null != r3 ? new C({ currentStart: n4, currentEnd: r3, startIncluded: true, endIncluded: true }) : null }) : null, sr: e2.spatialReference };
}
function Q3({ url: e2, spatialReference: n4, lrucache: r3, interceptor: t3 }) {
  const o2 = te2();
  return o2 ? o2.createFeatureSetCollectionFromService(e2, n4, r3, t3) : null;
}
function W({ layer: e2, spatialReference: n4, outFields: r3, returnGeometry: t3, lrucache: o2, interceptor: a4 }) {
  if (null === e2) return null;
  const i2 = te2();
  return i2 ? i2.constructFeatureSet(e2, n4, r3, t3 ?? true, o2, a4) : null;
}
function X(e2) {
  if (null === (e2 == null ? void 0 : e2.map)) return null;
  const n4 = te2();
  return n4 ? n4.createFeatureSetCollectionFromMap(e2.map, e2.spatialReference, e2.lrucache, e2.interceptor) : null;
}
function Y(e2, n4) {
  return C.convertJsonToArcade(e2, n4);
}
function _(e2, n4, r3 = []) {
  return Q2(e2, n4, r3);
}
function ee2() {
  return D2();
}
function ne2() {
  return B2();
}
function re(e2) {
  return "type" in e2 && ("class-breaks" === e2.type || "dictionary" === e2.type || "dot-density" === e2.type || "pie-chart" === e2.type || "simple" === e2.type || "unique-value" === e2.type);
}
function te3(e2) {
  return "esri.layers.support.LabelClass" === e2.declaredClass;
}
function oe(e2) {
  return "esri.PopupTemplate" === e2.declaredClass;
}
function ae(e2, n4) {
  var _a, _b;
  if (!e2) return false;
  if ("string" == typeof e2) return n4(e2);
  const r3 = e2;
  if (re(r3)) {
    if ("dot-density" === r3.type) {
      const e4 = (_a = r3.attributes) == null ? void 0 : _a.some((e5) => n4(e5.valueExpression));
      if (e4) return e4;
    }
    const e3 = r3.visualVariables, t3 = !!e3 && e3.some((e4) => {
      let r4 = n4(e4.valueExpression);
      return "size" === e4.type && (ce(e4.minSize) && (r4 = r4 || n4(e4.minSize.valueExpression)), ce(e4.maxSize) && (r4 = r4 || n4(e4.maxSize.valueExpression))), r4;
    });
    return !(!("valueExpression" in r3) || !n4(r3.valueExpression)) || t3;
  }
  if (te3(r3)) {
    const e3 = (_b = r3.labelExpressionInfo) == null ? void 0 : _b.expression;
    return !(!e3 || !n4(e3)) || false;
  }
  return !!oe(r3) && (!!r3.expressionInfos && r3.expressionInfos.some((e3) => n4(e3.expression)) || Array.isArray(r3.content) && r3.content.some((e3) => {
    var _a2;
    return "expression" === e3.type && n4((_a2 = e3.expressionInfo) == null ? void 0 : _a2.expression);
  }));
}
function ie(e2) {
  const n4 = k(e2);
  return !!n4 && Z(n4);
}
function le(e2) {
  return ae(e2, ie);
}
function ue(e2) {
  const n4 = k(e2);
  return !!n4 && R(n4);
}
function se(e2) {
  return ae(e2, ue);
}
function ce(e2) {
  return e2 && "esri.renderers.visualVariables.SizeVariable" === e2.declaredClass;
}
export {
  C as Dictionary,
  c2 as Voxel,
  ne as arcade,
  D as arcadeFeature,
  W as convertFeatureLayerToFeatureSet,
  Y as convertJsonToArcade,
  X as convertMapToFeatureSetCollection,
  Q3 as convertServiceUrlToWorkspace,
  V as createExecContext,
  O as createFeature,
  J as createFunction,
  k as createSyntaxTree,
  B3 as dependsOnView,
  ne2 as enableFeatureSetOperations,
  ee2 as enableGeometryOperations,
  q as evalSyntaxTree,
  L as executeAsyncFunction,
  G2 as executeFunction,
  U as extractFieldNames,
  z as getArcadeType,
  K as getViewInfo,
  le as hasGeometryFunctions,
  se as hasGeometryOperations,
  H2 as hasVariable,
  _ as loadScriptDependencies,
  Z2 as updateExecContext
};
//# sourceMappingURL=arcadeUtils-SNKJ6EAD.js.map
