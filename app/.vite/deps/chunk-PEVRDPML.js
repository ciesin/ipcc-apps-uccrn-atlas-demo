import {
  Xe,
  ke
} from "./chunk-6REABBOQ.js";
import {
  o
} from "./chunk-HSI6V34N.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  d
} from "./chunk-ACGZOBZ6.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/layers/support/TitleCreator.js
var p = "relationships/";
var c = "expression/";
var d2 = class extends g {
  constructor(e) {
    super(e), this._featureUtils = null, this.effectivePopupTemplate = null;
  }
  get _arcadeTask() {
    if (this.expressionsUsedInTitle.length > 0) {
      return this._get("_arcadeTask") || d(() => o());
    }
    return null;
  }
  get featureUtilsPromise() {
    return this._get("featureUtilsPromise") ?? import("./featureUtils-CNSQ24VY.js").then((e) => this._featureUtils = e);
  }
  get calculatedExpressions() {
    var _a;
    const e = new V();
    if (!this.expressionsUsedInTitle.length) return e;
    if (!((_a = this._arcadeTask) == null ? void 0 : _a.value)) {
      for (const t of this.expressionsUsedInTitle ?? []) e.push({ name: t.name, invalid: true });
      return e;
    }
    for (const t of this.expressionsUsedInTitle) try {
      const s = this._arcadeTask.value.arcade.parseScript(t.expression, ["$layer", "$map", "$datastore"]);
      if (s.isAsync) {
        e.push({ name: t.name, invalid: true });
        break;
      }
      e.push({ name: t.name, syntax: s, invalid: false, func: this._arcadeTask.value.arcade.compileScript(s, { vars: { $feature: "any" } }) });
    } catch {
      e.push({ name: t.name, invalid: true });
      break;
    }
    return e;
  }
  get expressionsUsedInTitle() {
    var _a, _b, _c;
    let e = ((_a = this.effectivePopupTemplate) == null ? void 0 : _a.title) ?? "";
    return "string" != typeof e ? [] : (e = e.toLowerCase(), ((_c = (_b = this.effectivePopupTemplate) == null ? void 0 : _b.expressionInfos) == null ? void 0 : _c.filter((t) => e.includes(`{expression/${t.name.toLowerCase()}}`))) ?? []);
  }
  get fieldInfoMap() {
    return this._featureUtils ? this._createFieldInfoMap(this._featureUtils.getAllFieldInfos(this.effectivePopupTemplate)) : null;
  }
  get hasBadExpressions() {
    return this.calculatedExpressions.some((e) => true === e.invalid);
  }
  get requiredFields() {
    var _a, _b;
    const e = /* @__PURE__ */ new Set();
    if (((_a = this._arcadeTask) == null ? void 0 : _a.value) && !this.hasBadExpressions) for (const s of ((_b = this.calculatedExpressions) == null ? void 0 : _b.toArray()) ?? []) try {
      const t2 = this._arcadeTask.value.arcade.extractFieldLiterals(s.syntax);
      for (const s2 of t2) {
        const t3 = s2.split("."), i = this.fieldsIndex.get(t3.at(-1) ?? "");
        i && e.add(i.name);
      }
    } catch {
    }
    const t = this._extractFieldNames(this.workingTitle);
    for (const s of t) {
      const t2 = this.fieldsIndex.get(s);
      t2 && e.add(t2.name);
    }
    return e;
  }
  get titleFromDisplayField() {
    var _a, _b;
    let e = "";
    return this.displayField && (e = ((_a = this.fieldsIndex.get(this.displayField)) == null ? void 0 : _a.name) ?? ""), e || (e = ((_b = this.fieldsIndex.get(this.objectIdField)) == null ? void 0 : _b.name) ?? ""), e ? `{${e}}` : "";
  }
  get workingTitle() {
    const e = this.effectivePopupTemplate ? this.effectivePopupTemplate.title : "";
    return "" === e || null == e || this.hasBadExpressions || "string" != typeof e ? this.titleFromDisplayField : e;
  }
  async getTitle(e, t, s) {
    var _a;
    try {
      const { attributes: i } = t, r2 = (s == null ? void 0 : s.timeZone) ?? "system", [{ substituteFieldsInLinksAndAttributes: a2 }] = await Promise.all([this.featureUtilsPromise, (_a = this._arcadeTask) == null ? void 0 : _a.promise]);
      if (s.fetchMissingFields && (t = await this._checkAndReQueryGraphic(e, t)), this.workingTitle && this.fieldInfoMap) {
        const s2 = this._createFormattedAttributes(e, t, r2).global;
        return a2({ attributes: i, expressionAttributes: null, fieldInfoMap: this.fieldInfoMap, globalAttributes: s2, layer: e, text: this.workingTitle });
      }
      return "";
    } catch {
    }
    return "";
  }
  async _checkAndReQueryGraphic(e, t) {
    const s = t.getObjectId();
    if (null == s) return t;
    if (!ke(this.requiredFields, t)) {
      const t2 = e.createQuery();
      t2.where = "1=1", t2.outFields = [...this.requiredFields], t2.objectIds = [s];
      const i = await e.queryFeatures(t2);
      if (1 === (i == null ? void 0 : i.features.length)) return i.features[0];
    }
    return t;
  }
  _createFieldInfoMap(e) {
    const t = /* @__PURE__ */ new Map();
    if (!e) return t;
    for (const s of e) {
      if (!s.fieldName) continue;
      const e2 = this.fieldsIndex.get(s.fieldName), i = (e2 == null ? void 0 : e2.name) ?? s.fieldName;
      s.fieldName = i, t.set(i.toLowerCase(), s);
    }
    return t;
  }
  _createFormattedAttributes(e, t, s = "system") {
    var _a, _b;
    const i = ((_a = this.effectivePopupTemplate) == null ? void 0 : _a.fieldInfos) ?? [], r2 = {};
    if (!this._featureUtils) return {};
    if (!this.hasBadExpressions && this.calculatedExpressions.length > 0 && ((_b = this._arcadeTask) == null ? void 0 : _b.value)) {
      const s2 = this._arcadeTask.value.Feature.createFromGraphicLikeObject(t.geometry, t.attributes, e, null);
      for (const e2 of this.calculatedExpressions) try {
        r2[`expression/${e2.name}`] = e2.func({ vars: { $feature: s2 } });
      } catch {
      }
    }
    const a2 = { ...t.attributes, ...r2 };
    return { global: this._featureUtils.formatAttributes({ fieldInfos: i, attributes: a2, graphic: t, timeZone: s, layer: e, fieldInfoMap: this.fieldInfoMap }), content: [] };
  }
  _extractFieldNames(e) {
    return Xe(e).filter((e2) => !(0 === e2.indexOf(p) || 0 === e2.indexOf(c)));
  }
};
r([m({ readOnly: true })], d2.prototype, "_arcadeTask", null), r([m()], d2.prototype, "_featureUtils", void 0), r([m({ readOnly: true })], d2.prototype, "featureUtilsPromise", null), r([m({ readOnly: true })], d2.prototype, "calculatedExpressions", null), r([m()], d2.prototype, "displayField", void 0), r([m()], d2.prototype, "effectivePopupTemplate", void 0), r([m()], d2.prototype, "expressionsUsedInTitle", null), r([m()], d2.prototype, "fieldsIndex", void 0), r([m()], d2.prototype, "fieldInfoMap", null), r([m()], d2.prototype, "fields", void 0), r([m()], d2.prototype, "objectIdField", void 0), r([m()], d2.prototype, "requiredFields", null), d2 = r([a("esri.layers.support.TitleCreator")], d2);
var u = d2;

export {
  u
};
//# sourceMappingURL=chunk-PEVRDPML.js.map
