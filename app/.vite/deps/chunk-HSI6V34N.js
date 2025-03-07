import {
  m
} from "./chunk-Y3AY7I5U.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/support/arcadeOnDemand.js
var i = () => n.getLogger("esri.support.arcadeOnDemand");
var a = ["geometry", "scale", "timeProperties"];
function n2(e, t) {
  if (null != t) for (const r of a) t.hasArcadeDependency(r) && e.add(r);
  return e;
}
var c;
function o() {
  return c || (c = (async () => {
    const e = await import("./arcadeUtils-SNKJ6EAD.js");
    return { arcade: e.arcade, arcadeUtils: e, Dictionary: e.Dictionary, Feature: e.arcadeFeature, Voxel: e.Voxel };
  })()), c;
}
var p = (e, t, r) => d.create(e, t, r, null, ["$feature", "$view"], []);
var u = (e, t, r, s2) => d.create(e, t, r, s2, ["$feature", "$view"], []);
var d = class _d {
  constructor(e, t, r, s2, i2, a2, n3) {
    this._dependencies = /* @__PURE__ */ new Map(), this.services = null, this.script = e, this.evaluate = s2;
    const c2 = Array.isArray(a2) ? a2 : a2 == null ? void 0 : a2.fields;
    this.fields = c2 ?? [], this._syntaxTree = r, this._arcade = t, this._arcadeFeature = i2, this._spatialReference = n3, this._dependencies.set("geometry", t.scriptTouchesGeometry(this._syntaxTree)), this._dependencies.set("scale", this._arcade.referencesMember(this._syntaxTree, "scale")), this._dependencies.set("timeProperties", this._arcade.scriptUsesViewProperties(this._syntaxTree, ["timeProperties"]));
  }
  static async create(r, a2, n3, c2, l, p2) {
    const { arcade: u2, Feature: m2, Dictionary: f } = await o(), h = a2 instanceof g ? a2 : g.fromJSON(a2);
    let w;
    try {
      w = u2.parseScript(r, p2);
    } catch (j) {
      return i().error(new s("arcade-bad-expression", "Failed to parse arcade script", { script: r, error: j })), null;
    }
    const y = l.reduce((e, t) => ({ ...e, [t]: null }), {});
    let v = null;
    null != c2 && (v = new f(c2), v.immutable = true, y.$config = null);
    const $ = u2.scriptUsesGeometryEngine(w), _ = $ && u2.enableGeometrySupport(), g2 = u2.scriptUsesFeatureSet(w) && u2.enableFeatureSetSupport(), F = u2.scriptIsAsync(w), S = F && u2.enableAsyncSupport(), b = { vars: y, spatialReference: h, useAsync: !!S };
    await Promise.all([_, g2, S]);
    const A = /* @__PURE__ */ new Set();
    await u2.loadDependentModules(A, w, null, F, $);
    const D = new f();
    D.immutable = false, D.setField("scale", 0);
    const P = u2.compileScript(w, b), T = (t, r2) => {
      var _a;
      const s2 = (_a = t.$view) == null ? void 0 : _a.timeZone;
      if ("$view" in t && t.$view) {
        let r3;
        if (D.setField("scale", "object" == typeof t.$view && "scale" in t.$view ? t.$view.scale : void 0), "object" == typeof t.$view && "timeProperties" in t.$view && null != t.$view.timeProperties) {
          const { currentStart: i2, currentEnd: a3 } = t.$view.timeProperties;
          r3 = new f({ currentStart: null != i2 ? null != s2 ? m.epochToArcadeDate(i2, s2) : m.unknownEpochToArcadeDate(i2) : void 0, currentEnd: null != a3 ? null != s2 ? m.epochToArcadeDate(a3, s2) : m.unknownEpochToArcadeDate(a3) : void 0, startIncluded: true, endIncluded: true });
        }
        D.setField("timeProperties", r3), t.$view = D;
      }
      return v && (t.$config = v), P({ vars: t, spatialReference: h, services: r2, timeZone: s2 });
    };
    return new _d(r, u2, w, T, new m2(), n3, h);
  }
  repurposeFeature(e) {
    return e.geometry && !e.geometry.spatialReference && (e.geometry.spatialReference = this._spatialReference), this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry, e.attributes, { fields: this.fields }), this._arcadeFeature;
  }
  references(e) {
    return this._dependencies.get(e) ?? false;
  }
};

export {
  n2 as n,
  o,
  p,
  u
};
//# sourceMappingURL=chunk-HSI6V34N.js.map
