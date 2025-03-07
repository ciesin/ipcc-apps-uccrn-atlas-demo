import {
  i
} from "./chunk-ZD4JXG4O.js";
import {
  s
} from "./chunk-S75M4NUB.js";
import {
  B,
  U,
  W,
  a as a2,
  c,
  v,
  z
} from "./chunk-BTTTF5H4.js";
import {
  p
} from "./chunk-HSI6V34N.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/symbols/cim/OverrideHelper.js
var m = (e) => {
  if (!e) return [0, 0, 0, 0];
  const { r, g: i2, b: t, a: s2 } = e;
  return [r, i2, t, 255 * s2];
};
var y = class _y {
  static findApplicableOverrides(e, r, i2) {
    if (e && r) {
      if (e.primitiveName) {
        let t = false;
        for (const r2 of i2) if (r2.primitiveName === e.primitiveName) {
          t = true;
          break;
        }
        if (!t) for (const s2 of r) s2.primitiveName === e.primitiveName && i2.push(s2);
      }
      switch (e.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          if (e.effects) for (const t of e.effects) _y.findApplicableOverrides(t, r, i2);
          if (e.symbolLayers) for (const t of e.symbolLayers) _y.findApplicableOverrides(t, r, i2);
          break;
        case "CIMTextSymbol":
          break;
        case "CIMSolidStroke":
        case "CIMPictureStroke":
        case "CIMGradientStroke":
        case "CIMSolidFill":
        case "CIMPictureFill":
        case "CIMHatchFill":
        case "CIMGradientFill":
        case "CIMVectorMarker":
        case "CIMCharacterMarker":
        case "CIMPictureMarker":
          if (e.effects) for (const t of e.effects) _y.findApplicableOverrides(t, r, i2);
          if (e.markerPlacement && _y.findApplicableOverrides(e.markerPlacement, r, i2), "CIMVectorMarker" === e.type) {
            if (e.markerGraphics) for (const t of e.markerGraphics) _y.findApplicableOverrides(t, r, i2), _y.findApplicableOverrides(t.symbol, r, i2);
          } else "CIMCharacterMarker" === e.type ? _y.findApplicableOverrides(e.symbol, r, i2) : "CIMHatchFill" === e.type ? _y.findApplicableOverrides(e.lineSymbol, r, i2) : "CIMPictureMarker" === e.type && _y.findApplicableOverrides(e.animatedSymbolProperties, r, i2);
      }
    }
  }
  static findEffectOverrides(e, r) {
    if (!e) return null;
    if ("CIMGeometricEffectDashes" === e.type && B(e), !r || !e.primitiveName) return { type: "cim-effect-param", effect: e, overrides: [] };
    const i2 = W(e), t = e.primitiveName, c2 = [];
    for (const s2 of r) s2.primitiveName === t && c2.push(W(s2));
    return { type: "cim-effect-param", effect: i2, overrides: U(c2) };
  }
  static async resolveSymbolOverrides(e, r, t, s2, o, a3, l) {
    if (!(e == null ? void 0 : e.symbol)) return null;
    let { symbol: n, primitiveOverrides: p2 } = e;
    const f = !!p2;
    if (!f && !s2) return n;
    n = a(n), p2 = a(p2);
    let m2 = true;
    if (r || (r = { attributes: {} }, m2 = false), f) {
      if (m2 || (p2 = p2.filter((e2) => {
        var _a;
        return !((_a = e2.valueExpressionInfo) == null ? void 0 : _a.expression.includes("$feature"));
      })), l || (p2 = p2.filter((e2) => {
        var _a;
        return !((_a = e2.valueExpressionInfo) == null ? void 0 : _a.expression.includes("$view"));
      })), p2.length > 0) {
        const e2 = { spatialReference: t, fields: v(r.attributes), geometryType: o };
        await _y.createRenderExpressions(p2, e2), _y.evaluateOverrides(p2, r, o ?? "esriGeometryPoint", a3, l);
      }
      _y.applyOverrides(n, p2);
    }
    return s2 && _y.applyDictionaryTextOverrides(n, r, s2, null), n;
  }
  static async createRenderExpressions(e, r) {
    const i2 = [];
    for (const s2 of e) {
      const e2 = s2.valueExpressionInfo;
      if (!e2 || _y._expressionToRenderExpression.has(e2.expression)) continue;
      const o = p(e2.expression, r.spatialReference, r.fields);
      i2.push(o), o.then((r2) => _y._expressionToRenderExpression.set(e2.expression, r2));
    }
    i2.length > 0 && await Promise.all(i2);
  }
  static evaluateOverrides(e, i2, t, s2, o) {
    const a3 = { $view: { scale: o == null ? void 0 : o.scale } };
    for (const c2 of e) {
      c2.value && "object" == typeof c2.value && i(c2.value) && ("Color" === c2.propertyName || "StrokeColor" === c2.propertyName) && (c2.value = m(c2.value));
      const e2 = c2.valueExpressionInfo;
      if (!e2) continue;
      const o2 = _y._expressionToRenderExpression.get(e2.expression);
      o2 && (c2.value = s(o2, i2, a3, t, s2));
    }
  }
  static applyDictionaryTextOverrides(e, r, i2, t, s2 = "Normal") {
    if (e == null ? void 0 : e.type) switch (e.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
      case "CIMTextSymbol":
        {
          const o = e.symbolLayers;
          if (!o) return;
          for (const a3 of o) a3 && "CIMVectorMarker" === a3.type && _y.applyDictionaryTextOverrides(a3, r, i2, t, "CIMTextSymbol" === e.type ? e.textCase : s2);
        }
        break;
      case "CIMVectorMarker":
        {
          const s3 = e.markerGraphics;
          if (!s3) return;
          for (const e2 of s3) e2 && _y.applyDictionaryTextOverrides(e2, r, i2, t);
        }
        break;
      case "CIMMarkerGraphic": {
        const o = e.textString;
        if (o && o.includes("[")) {
          const a3 = a2(o, i2);
          e.textString = c(r, a3, t, s2);
        }
      }
    }
  }
  static applyOverrides(e, r, i2, t) {
    if (e.primitiveName) {
      for (const s2 of r) if (s2.primitiveName === e.primitiveName) {
        const r2 = z(s2.propertyName);
        if (t && t.push({ cim: e, nocapPropertyName: r2, value: e[r2] }), i2) {
          let r3 = false;
          for (const t2 of i2) t2.primitiveName === e.primitiveName && (r3 = true);
          r3 || i2.push(s2);
        }
        null != s2.value && (e[r2] = s2.value);
      }
    }
    switch (e.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        if (e.effects) for (const s2 of e.effects) _y.applyOverrides(s2, r, i2, t);
        if (e.symbolLayers) for (const s2 of e.symbolLayers) _y.applyOverrides(s2, r, i2, t);
        break;
      case "CIMTextSymbol":
        break;
      case "CIMSolidStroke":
      case "CIMSolidFill":
      case "CIMVectorMarker":
        if (e.effects) for (const s2 of e.effects) _y.applyOverrides(s2, r, i2, t);
        if ("CIMVectorMarker" === e.type && e.markerGraphics) for (const s2 of e.markerGraphics) _y.applyOverrides(s2, r, i2, t), _y.applyOverrides(s2.symbol, r, i2, t);
    }
  }
  static restoreOverrides(e) {
    for (const r of e) r.cim[r.nocapPropertyName] = r.value;
  }
  static buildOverrideKey(e) {
    let r = "";
    for (const i2 of e) void 0 !== i2.value && (r += `${i2.primitiveName}${i2.propertyName}${JSON.stringify(i2.value)}`);
    return r;
  }
  static toValue(r, i2) {
    if ("DashTemplate" === r) return i2.split(" ").map((e) => Number(e));
    if ("Color" === r) {
      const r2 = new h(i2).toRgba();
      return r2[3] *= 255, r2;
    }
    return i2;
  }
};
y._expressionToRenderExpression = /* @__PURE__ */ new Map();

export {
  y
};
//# sourceMappingURL=chunk-N4Z2ZQI6.js.map
