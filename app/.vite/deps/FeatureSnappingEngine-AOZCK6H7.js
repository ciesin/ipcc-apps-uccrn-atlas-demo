import {
  n as n4,
  o as o2,
  s as s4
} from "./chunk-2NDSQOEM.js";
import "./chunk-3YJXAYA4.js";
import "./chunk-NWL5O6MC.js";
import {
  r as r4
} from "./chunk-QGVT5UOI.js";
import {
  n as n3,
  r as r5
} from "./chunk-647JB2RE.js";
import "./chunk-ABH42FPX.js";
import {
  E as E2,
  Et,
  b as b2,
  f
} from "./chunk-FAAI5VMG.js";
import {
  E2 as E,
  N,
  p,
  s as s3
} from "./chunk-6MN3R543.js";
import "./chunk-TY5FDDRF.js";
import "./chunk-NJTJZUTI.js";
import {
  o
} from "./chunk-H263NTAU.js";
import {
  i as i2
} from "./chunk-F4RJF7LN.js";
import "./chunk-NQPBPVRE.js";
import {
  j
} from "./chunk-PFFYYIYN.js";
import "./chunk-WAKNRSGF.js";
import "./chunk-NATJDMSF.js";
import "./chunk-NVEHOQKI.js";
import "./chunk-NOMJWA3C.js";
import "./chunk-X5RZJMNW.js";
import "./chunk-K24WU5UX.js";
import "./chunk-3WMBBCKF.js";
import "./chunk-5DJJ57UM.js";
import {
  h
} from "./chunk-PV4EUSKO.js";
import "./chunk-O2L6JAHP.js";
import "./chunk-LH36NQSN.js";
import {
  b
} from "./chunk-K35H6D4D.js";
import {
  s as s2,
  v
} from "./chunk-UMYFDXOJ.js";
import "./chunk-HLOKDQU3.js";
import {
  d as d2
} from "./chunk-FK3WBTHH.js";
import "./chunk-MHM4GDCM.js";
import "./chunk-363AT5UF.js";
import "./chunk-KWOLBNIK.js";
import "./chunk-TGMFGDP6.js";
import "./chunk-D3HK4ZSW.js";
import "./chunk-AI2O2GKK.js";
import "./chunk-ANGUSND2.js";
import "./chunk-WF2ACUGU.js";
import "./chunk-4NGIUHKX.js";
import "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import {
  r as r2
} from "./chunk-STBNLAGT.js";
import "./chunk-WJGG35K6.js";
import "./chunk-SUVHJC6Z.js";
import "./chunk-WJNMFEXQ.js";
import "./chunk-XCRRZPKE.js";
import "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-ZYOZHQFS.js";
import {
  c,
  r as r3
} from "./chunk-XWXWIBVO.js";
import "./chunk-53ZTROGC.js";
import {
  e
} from "./chunk-PUM22WTC.js";
import "./chunk-JLFV7EBO.js";
import {
  n as n2
} from "./chunk-JLFSX3JT.js";
import "./chunk-SQ6MYL73.js";
import "./chunk-HP7OWCUK.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import {
  $,
  Q
} from "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import {
  A,
  C,
  d,
  x
} from "./chunk-YSPSOPLL.js";
import "./chunk-AJSC5XSW.js";
import "./chunk-I4HN3ELT.js";
import "./chunk-ACGZOBZ6.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import {
  g as g2,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import {
  g,
  i,
  s
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";
import {
  G,
  has
} from "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/views/interactive/snapping/FeatureSnappingSourceInfo.js
var f2 = class extends g2 {
  set attributeRulesEnabled(e2) {
    this._set("attributeRulesEnabled", e2), e2 && this.loadRules();
  }
  get layerView() {
    var _a, _b;
    return (_b = (_a = this.view) == null ? void 0 : _a.allLayerViews) == null ? void 0 : _b.find((e2) => e2.layer === this.layer);
  }
  get valid() {
    const { _valid: e2, snappingSource: t, layer: r6 } = this;
    return !(!t || !r6) && e2;
  }
  get subtypeFilter() {
    var _a, _b;
    const { layer: e2, snappingSource: t } = this;
    if (!c(e2) || !((_a = e2.subtypes) == null ? void 0 : _a.length) || !t) return { mode: "not-in-use", filter: null };
    const r6 = t.layerSource.sublayerSources.filter((e3) => {
      var _a2;
      return e3.enabled && e3.layer.visible && i2((_a2 = this.view) == null ? void 0 : _a2.scale, e3.layer.effectiveScaleRange.minScale, e3.layer.effectiveScaleRange.maxScale);
    }).map((e3) => e3.layer.subtypeCode);
    if (!r6.length) return { mode: "none-visible", filter: null };
    if (r6.length === e2.subtypes.length) return { mode: "all-visible", filter: null };
    const i3 = ((_b = e2.fieldsIndex.get(e2.subtypeField)) == null ? void 0 : _b.name) ?? e2.subtypeField;
    return 1 === r6.length ? { mode: "in-use", filter: `${i3} = ${r6.getItemAt(0)}` } : { mode: "in-use", filter: `${i3} IN (${r6.join(", ")})` };
  }
  get floorFilter() {
    const { view: e2, layer: t } = this;
    return e2 && t ? o({ view: e2, layer: t }) : null;
  }
  constructor(e2) {
    super(e2), this.layer = null, this.snappingSource = null, this.rulesTable = null, this._valid = null;
  }
  initialize() {
    if (!this.snappingSource || !this.layer) return void (this._valid = false);
    const { layer: e2, snappingSource: t } = this;
    if ("refresh" in e2) {
      const r6 = e2;
      this.addHandles(r6.on("refresh", () => t.refresh()));
    }
    this.loadRules(), this.addHandles([d(() => t.updating, (e3) => t.layerSource.updating = e3, A), d(() => t.availability, (e3) => t.layerSource.availability = e3, A)]);
  }
  getFetchCandidatesParameters(e2, t, r6) {
    var _a, _b, _c, _d, _e;
    if (!this.valid) return [];
    const { layer: i3, layerView: l, floorFilter: o3, rulesTable: a2, subtypeFilter: u } = this, y = { distance: r6, mode: ((_a = this.view) == null ? void 0 : _a.type) ?? "2d", point: e2, coordinateHelper: t.coordinateHelper, ...h2(), filter: l && "filter" in l ? l.filter : null };
    if (o3 && (y.filter = m2(y.filter, o3)), "not-in-use" !== u.mode && "all-visible" !== u.mode) {
      if ("none-visible" === u.mode) return [];
      y.filter ? y.filter.where = r2(y.filter.where, u.mode) : y.filter = new d2({ where: u.filter });
    }
    if (!this.attributeRulesEnabled) return [y];
    const f3 = t.feature, v2 = "subtype-sublayer" === ((_b = f3 == null ? void 0 : f3.sourceLayer) == null ? void 0 : _b.type) ? f3.sourceLayer.parent : f3 == null ? void 0 : f3.sourceLayer;
    if (a2 && f3 && b2((_c = this.view) == null ? void 0 : _c.map) && (r3(i3) || c(i3)) && i3.layerId && (r3(v2) || c(v2)) && ((_d = this.view.map.utilityNetworks) == null ? void 0 : _d.find((e3) => e3.isUtilityLayer(v2)))) {
      if ("loaded" !== a2.loadStatus) return [];
      const e3 = [], t2 = i3.layerId, r7 = (_e = a2.getFeatureSQL(v2, f3)) == null ? void 0 : _e[t2];
      if (!r7) return [];
      const l2 = r7.anyVertex;
      let s5 = r7.endVertex;
      return s5 && l2 && s5 === l2 && (s5 = ""), s5 && e3.push({ ...y, returnEdge: false, vertexMode: "ends", filter: m2(y.filter, s5) }), l2 && e3.push({ ...y, returnEdge: has("snapping-include-edges-when-applying-any-vertex-rule") ?? false, vertexMode: "all", filter: m2(y.filter, l2) }), e3;
    }
    return [y];
  }
  async loadRules() {
    var _a, _b, _c;
    this._valid = null;
    const { layer: e2, view: t, attributeRulesEnabled: i3 } = this;
    if (i3 && e2 && t && b2(t == null ? void 0 : t.map) && (r3(e2) || c(e2))) try {
      await Promise.allSettled(((_a = t.map.utilityNetworks) == null ? void 0 : _a.map((e3) => e3.load())) ?? []);
      const r6 = (_b = t.map.utilityNetworks) == null ? void 0 : _b.find((t2) => t2.isUtilityLayer(e2));
      r6 && (this.rulesTable = await r6.getRulesTable(), await ((_c = this.rulesTable) == null ? void 0 : _c.load()));
    } catch (l) {
      return this._valid = false, void n.getLogger("esri.views.interactive.snapping.FeatureSnappingSourceInfo").error("Failed to load rules table for snapping source", e2.title);
    }
    this._valid = true;
  }
  remove() {
    this.destroy();
  }
  destroy() {
    var _a;
    (_a = this.snappingSource) == null ? void 0 : _a.destroy();
  }
};
function h2() {
  return { returnEdge: true, vertexMode: "all" };
}
function m2(e2, t) {
  return null == e2 ? new d2({ where: t }) : e2.where ? new d2({ where: r2(e2.where, t) }) : new d2({ where: t });
}
r([m({ constructOnly: true })], f2.prototype, "layer", void 0), r([m({ constructOnly: true })], f2.prototype, "snappingSource", void 0), r([m({ constructOnly: true })], f2.prototype, "view", void 0), r([m({ value: false })], f2.prototype, "attributeRulesEnabled", null), r([m()], f2.prototype, "layerView", null), r([m()], f2.prototype, "rulesTable", void 0), r([m()], f2.prototype, "valid", null), r([m()], f2.prototype, "subtypeFilter", null), r([m()], f2.prototype, "floorFilter", null), r([m()], f2.prototype, "_valid", void 0), f2 = r([a("esri.views.interactive.snapping.FeatureSnappingSourceInfo")], f2);

// node_modules/@arcgis/core/views/interactive/snapping/FeatureSnappingEngine.js
var P = class extends g2 {
  get updating() {
    return this._snappingSources.some((e2) => {
      var _a;
      return null == (e2 == null ? void 0 : e2.valid) || true === e2.valid && true === ((_a = e2.snappingSource) == null ? void 0 : _a.updating);
    }) || this._updatingHandles.updating;
  }
  constructor(e2) {
    super(e2), this.options = null, this._domain = E.FEATURE, this._updatingHandles = new h(), this._sourceModules = { featureService: { module: null, loader: null }, featureCollection: { module: null, loader: null }, graphics: { module: null, loader: null }, notes: { module: null, loader: null }, scene: { module: null, loader: null } };
  }
  initialize() {
    const e2 = x(() => {
      var _a;
      return (_a = this.options) == null ? void 0 : _a._effectiveFeatureSources;
    }, (e3, t) => this._createSourceInfo(e3, t));
    this._snappingSources = e2, this.addHandles([i(e2), d(() => {
      var _a;
      return { rulesEnabled: !!((_a = this.options) == null ? void 0 : _a.attributeRulesEnabled), sources: this._snappingSources.filter(G) };
    }, ({ rulesEnabled: e3, sources: t }) => {
      for (const r6 of t) r6.attributeRulesEnabled = e3;
    }, C)]);
  }
  destroy() {
    this._set("options", null), this._updatingHandles.destroy();
  }
  async fetchCandidates(e2, t, r6, a2) {
    var _a, _b, _c;
    if (!(t & this._domain && null != this.options && this.options.effectiveFeatureEnabled)) return [];
    const i3 = [], o3 = this._computeScreenSizeDistanceParameters(e2, r6);
    for (const n5 of this._snappingSources) {
      if (!(n5 == null ? void 0 : n5.valid) || !((_b = (_a = n5.snappingSource) == null ? void 0 : _a.layerSource) == null ? void 0 : _b.enabled) || ((_c = n5.layerView) == null ? void 0 : _c.suspended)) continue;
      const t2 = n5.getFetchCandidatesParameters(e2, r6, o3);
      for (const e3 of t2) i3.push(n5.snappingSource.fetchCandidates(e3, a2).then((e4) => e4.filter((e5) => !this._candidateIsExcluded(n5.snappingSource, e5, r6.excludeFeature))));
    }
    const c2 = (await g(i3)).flat();
    return this._addRightAngleCandidates(c2, e2, o3, r6), s(a2), E2(e2, c2), c2;
  }
  _addRightAngleCandidates(e2, t, r6, a2) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const n5 = null != a2.vertexHandle ? (_b = (_a = a2.vertexHandle.rightEdge) == null ? void 0 : _a.rightVertex) == null ? void 0 : _b.pos : null != a2.editGeometryOperations && "polygon" === a2.editGeometryOperations.data.type ? (_d = (_c = a2.editGeometryOperations.data.components[0]) == null ? void 0 : _c.getFirstVertex()) == null ? void 0 : _d.pos : null, s5 = null != a2.vertexHandle ? (_f = (_e = a2.vertexHandle.leftEdge) == null ? void 0 : _e.leftVertex) == null ? void 0 : _f.pos : null != a2.editGeometryOperations ? (_h = (_g = a2.editGeometryOperations.data.components[0]) == null ? void 0 : _g.getLastVertex()) == null ? void 0 : _h.pos : null, { view: i3 } = this, o3 = N(n5, i3, a2), c2 = N(s5, i3, a2), u = e2.length;
    for (let l = 0; l < u; l++) this._addRightAngleCandidate(e2[l], c2, t, r6, e2), this._addRightAngleCandidate(e2[l], o3, t, r6, e2);
  }
  _addRightAngleCandidate(e2, t, r6, a2, n5) {
    if (null == t || !A2(e2)) return;
    const s5 = e2.constraint.closestTo(t), i3 = (s5[0] - r6[0]) / a2.x, o3 = (s5[1] - r6[1]) / a2.y, { start: c2, end: u } = e2.constraint;
    if (i3 * i3 + o3 * o3 <= 1) {
      const r7 = b(s3(s5), s3(c2)) > b(s3(s5), s3(u)) ? c2 : u, a3 = new n4({ targetPoint: p(s5), otherVertex: t, otherVertexType: o2.NEXT, previousVertex: r7, constraint: new Et(t, s5), objectId: e2.objectId, isDraped: e2.isDraped, domain: E.FEATURE });
      n5.push(a3);
    }
  }
  _computeScreenSizeDistanceParameters(e2, t) {
    let r6 = null != this.options ? this.options.distance * ("touch" === t.pointer ? this.options.touchSensitivityMultiplier : 1) : 0;
    return null == this.view ? { x: r6, y: r6, z: r6, distance: r6 } : "2d" === this.view.type ? (r6 *= this.view.resolution, { x: r6, y: r6, z: r6, distance: r6 }) : this._computeScreenSizeDistanceParameters3D(e2, r6, this.view, t);
  }
  _computeScreenSizeDistanceParameters3D(e2, t, r6, a2) {
    const { spatialReference: n5 } = a2;
    r6.renderCoordsHelper.toRenderCoords(e2, n5, D);
    const s5 = r6.state.camera.computeScreenPixelSizeAt(D), i3 = s5 * r6.renderCoordsHelper.unitInMeters, o3 = i3 / Q(n5), c2 = i3 / $(n5), p2 = t * o3, d3 = t * c2, m3 = s4(e2, n5, j, r6), g3 = m3 ? z(m3, e2, o3, 0, 0, r6, a2) : 0, h3 = m3 ? z(m3, e2, 0, o3, 0, r6, a2) : 0, S = m3 ? z(m3, e2, 0, 0, c2, r6, a2) : 0;
    return { x: 0 === g3 ? 0 : p2 / g3, y: 0 === h3 ? 0 : p2 / h3, z: 0 === S ? 0 : d3 / S, distance: s5 * t };
  }
  _candidateIsExcluded(e2, t, r6) {
    if (null == r6) return false;
    const a2 = this._getCandidateObjectId(t);
    if (null == a2) return false;
    const n5 = e2.layerSource.layer;
    return "graphics" === n5.type ? r6.uid === a2 : r6.sourceLayer === n5 && (!(!r6.attributes || !("objectIdField" in n5)) && r6.attributes[n5.objectIdField] === a2);
  }
  _getCandidateObjectId(e2) {
    return e2 instanceof n3 ? e2.objectId : null;
  }
  async _createSourceInfo(e2, t) {
    const r6 = e2.layer;
    r6.loaded || (await r6.load(), s(t));
    const { view: a2 } = this, n5 = await this._createFeatureSnappingSourceType(e2);
    return s(t), new f2(null == n5 ? {} : { snappingSource: n5, view: a2, layer: r6 });
  }
  async _createFeatureSnappingSourceType(e2) {
    switch (e2.layer.type) {
      case "feature":
      case "geojson":
      case "csv":
      case "oriented-imagery":
      case "subtype-group":
      case "wfs":
        return this._createFeatureSnappingSourceFeatureLayer(e2);
      case "graphics":
        return this._createFeatureSnappingSourceGraphicsLayer(e2);
      case "map-notes":
        return this._createFeatureSnappingSourceMapNotesLayer(e2);
      case "scene":
      case "building-scene":
        return this._createFeatureSnappingSourceSceneLayer(e2);
    }
    return null;
  }
  async _createFeatureSnappingSourceSceneLayer(e2) {
    const { view: t } = this;
    if (null == t || "3d" !== t.type) return null;
    return new (await this._getSourceModule("scene")).SceneLayerSnappingSource({ layerSource: e2, view: t });
  }
  async _createFeatureSnappingSourceFeatureLayer(e2) {
    var _a;
    switch ((_a = e2.layer.source) == null ? void 0 : _a.type) {
      case "feature-layer":
      case "oriented-imagery":
        return new (await this._getSourceModule("featureService")).FeatureServiceSnappingSource({ spatialReference: this.spatialReference, view: this.view, layerSource: e2 });
      case "memory":
      case "csv":
      case "geojson":
      case "wfs":
        if ("mesh" === e2.layer.geometryType) return null;
        return new (await this._getSourceModule("featureCollection")).FeatureCollectionSnappingSource({ layerSource: e2, view: this.view });
    }
    return null;
  }
  async _createFeatureSnappingSourceGraphicsLayer(e2) {
    return new (await this._getSourceModule("graphics")).GraphicsSnappingSource({ getGraphicsLayers: () => [e2.layer], spatialReference: this.spatialReference, view: this.view, layerSource: e2 });
  }
  async _createFeatureSnappingSourceMapNotesLayer(e2) {
    return new (await this._getSourceModule("notes")).GraphicsSnappingSource({ getGraphicsLayers: () => {
      var _a;
      return ((_a = e2.layer.sublayers) == null ? void 0 : _a.toArray()) ?? [];
    }, spatialReference: this.spatialReference, view: this.view, layerSource: e2 });
  }
  async _getSourceModule(e2) {
    const t = this._sourceModules[e2];
    if (null == t.loader) {
      const t2 = this._loadSourceModule(e2), r6 = { module: null, loader: t2 };
      this._sourceModules[e2] = r6;
      const a2 = await t2, n5 = { module: a2, loader: t2 };
      return this._sourceModules[e2] = n5, a2;
    }
    return null == t.module ? t.loader : t.module;
  }
  _loadSourceModule(e2) {
    const t = this._updatingHandles;
    switch (e2) {
      case "featureService":
        return t.addPromise(import("./FeatureServiceSnappingSource-VNWGV7ZZ.js"));
      case "featureCollection":
        return t.addPromise(import("./FeatureCollectionSnappingSource-RBZTVUE2.js"));
      case "graphics":
      case "notes":
        return t.addPromise(import("./GraphicsSnappingSource-OZGYRLJX.js"));
      case "scene":
        return t.addPromise(import("./SceneLayerSnappingSource-QO2AKVJY.js"));
    }
  }
  get test() {
  }
};
function A2(e2) {
  return (e2 instanceof r5 || e2 instanceof r4) && !U(e2);
}
function U({ constraint: { start: e2, end: t } }) {
  const r6 = v(e2, t), a2 = b(s3(e2), s3(t));
  return r6 < e() || a2 / r6 < T;
}
function z(e2, t, r6, a2, n5, s5, { spatialReference: i3 }) {
  const o3 = s2(O, t);
  o3[0] += r6, o3[1] += a2, o3[2] += n5;
  const c2 = s4(o3, i3, j, s5);
  return c2 ? f(c2, e2) : 1 / 0;
}
r([m({ constructOnly: true })], P.prototype, "spatialReference", void 0), r([m({ constructOnly: true })], P.prototype, "view", void 0), r([m()], P.prototype, "options", void 0), r([m({ readOnly: true })], P.prototype, "updating", null), r([m()], P.prototype, "_snappingSources", void 0), P = r([a("esri.views.interactive.snapping.FeatureSnappingEngine")], P);
var D = n2();
var O = n2();
var T = 1e-4;
export {
  P as FeatureSnappingEngine
};
//# sourceMappingURL=FeatureSnappingEngine-AOZCK6H7.js.map
