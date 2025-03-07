import {
  a,
  c,
  e,
  i,
  l,
  n,
  o,
  t as t3,
  u
} from "./chunk-YYNCM4H6.js";
import {
  t,
  t2
} from "./chunk-EWFN6VXR.js";
import "./chunk-F7A3OWWW.js";
import {
  e as e2
} from "./chunk-ACFHOOS7.js";
import {
  t as t4
} from "./chunk-EMADK6RJ.js";
import {
  s as s2
} from "./chunk-VY225BNN.js";
import "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-IP4HFFRO.js";
import {
  C
} from "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-ACGZOBZ6.js";
import "./chunk-7LY6RE4Z.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import {
  d2 as d
} from "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/portal/support/layersLoader.js
async function h(e3, t5) {
  const r = e3.instance.portalItem;
  if (r == null ? void 0 : r.id) return await r.load(t5), g(e3), e3.validateItem && e3.validateItem(r), I(e3, t5);
}
function g(t5) {
  const r = t5.instance.portalItem;
  if (!(r == null ? void 0 : r.type) || !t5.supportedTypes.includes(r.type)) throw new s("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}'", { type: r == null ? void 0 : r.type, expectedType: t5.supportedTypes.join(", ") });
}
async function I(e3, t5) {
  const r = e3.instance, o2 = r.portalItem;
  if (!o2) return;
  const { url: s3, title: l2 } = o2, i2 = e2(o2, "portal-item");
  if ("group" === r.type) return b(r, i2, e3);
  s3 && "media" !== r.type && r.read({ url: s3 }, i2);
  const u2 = new e(), p = await F(e3, u2, t5);
  return p && r.read(p, i2), r.resourceReferences = { portalItem: o2, paths: i2.readResourcePaths ?? [] }, "subtype-group" !== r.type && r.read({ title: l2 }, i2), t4(r, i2);
}
async function b(t5, r, a2) {
  const o2 = t5.portalItem;
  if (!t5.sourceIsPortalItem) return;
  const { title: n2, type: s3 } = o2;
  if ("Group Layer" === s3) {
    if (!s2(o2, "Map")) throw new s("portal:invalid-layer-item-typekeyword", "'Group Layer' item without 'Map' type keyword is not supported");
    return L(t5, a2);
  }
  return t5.read({ title: n2 }, r), S(t5, a2);
}
async function L(t5, r) {
  const a2 = t5.portalItem, o2 = await a2.fetchData("json");
  if (!o2) return;
  if (!r.populateGroupLayer) throw new s("portal:missing-populate-group-layer", "Missing populate group layer");
  const s3 = e2(a2, "web-map");
  t5.read(o2, s3), await r.populateGroupLayer(t5, o2, { context: s3 }), t5.resourceReferences = { portalItem: a2, paths: s3.readResourcePaths ?? [] };
}
async function S(t5, r) {
  var _a;
  let o2;
  const { portalItem: n2 } = t5;
  if (!n2) return;
  const p = n2.type, c2 = r.layerModuleTypeMap;
  if (!c2) throw new s("portal:missing-layer-module-type-map", "Layer module type map is required to construct sub layers");
  switch (p) {
    case "Feature Service":
    case "Feature Collection":
      o2 = c2.FeatureLayer;
      break;
    case "Stream Service":
      o2 = c2.StreamLayer;
      break;
    case "Scene Service":
      o2 = c2.SceneLayer;
      break;
    default:
      throw new s("portal:unsupported-item-type-as-group", `The item type '${p}' is not supported as a 'IGroupLayer'`);
  }
  const y = new e();
  let [m, d2] = await Promise.all([o2(), F(r, y)]), f = () => m;
  if ("Feature Service" === p) {
    const e3 = (_a = l(d2)) == null ? void 0 : _a.customParameters;
    d2 = n2.url ? await a(d2, n2.url, y) : {}, f = await D(d2, c2) || f;
    const r2 = await C2(n2.url, { customParameters: e3, loadContext: y });
    return await v(t5, f, f, d2, c2, r2);
  }
  return "Scene Service" === p && n2.url && (d2 = await o(n2, d2, y)), u(d2) > 0 ? await v(t5, f, null, d2, c2) : await T(t5, f, c2);
}
async function T(e3, t5, r) {
  var _a, _b;
  const { portalItem: a2 } = e3;
  if (!(a2 == null ? void 0 : a2.url)) return;
  const o2 = await t(a2.url);
  o2 && v(e3, t5, null, { layers: (_a = o2.layers) == null ? void 0 : _a.map(t3), tables: (_b = o2.tables) == null ? void 0 : _b.map(t3) }, r);
}
async function v(e3, t5, r, a2, o2, n2) {
  var _a;
  let s3 = a2.layers || [];
  const l2 = a2.tables || [];
  if ("Feature Collection" === ((_a = e3.portalItem) == null ? void 0 : _a.type) ? (s3.forEach((e4, t6) => {
    var _a2;
    e4.id = t6, "Table" === ((_a2 = e4 == null ? void 0 : e4.layerDefinition) == null ? void 0 : _a2.type) && l2.push(e4);
  }), s3 = s3.filter((e4) => {
    var _a2;
    return "Table" !== ((_a2 = e4 == null ? void 0 : e4.layerDefinition) == null ? void 0 : _a2.type);
  })) : (s3.reverse(), l2.reverse()), s3.forEach((r2) => {
    const o3 = n2 == null ? void 0 : n2(r2);
    if (o3 || !n2) {
      const n3 = j(e3, t5(r2), a2, r2, o3);
      e3.add(n3);
    }
  }), l2.length) {
    const t6 = r ? null : await o2.FeatureLayer();
    l2.forEach((o3) => {
      const s4 = n2 == null ? void 0 : n2(o3);
      if (s4 || !n2) {
        const n3 = j(e3, r ? r(o3) : t6, a2, o3, s4);
        e3.tables.add(n3);
      }
    });
  }
}
function j(e3, t5, r, a2, n2) {
  const s3 = e3.portalItem, l2 = { portalItem: s3.clone(), layerId: a2.id };
  null != a2.url && (l2.url = a2.url);
  const i2 = new t5(l2);
  if ("sourceJSON" in i2 && (i2.sourceJSON = n2), "subtype-group" !== i2.type && "catalog" !== i2.type && (i2.sublayerTitleMode = "service-name"), "Feature Collection" === s3.type) {
    const e4 = { origin: "portal-item", portal: s3.portal || C.getDefault() };
    i2.read(a2, e4);
    const t6 = r.showLegend;
    null != t6 && i2.read({ showLegend: t6 }, e4);
  }
  return i2;
}
async function F(e3, t5, r) {
  if (false === e3.supportsData) return;
  const a2 = e3.instance, o2 = a2.portalItem;
  if (!o2) return;
  let n2 = null;
  try {
    n2 = await o2.fetchData("json", r);
  } catch (l2) {
  }
  if (x(a2)) {
    let e4 = null;
    const r2 = await M(o2, n2, t5);
    if (((n2 == null ? void 0 : n2.layers) || (n2 == null ? void 0 : n2.tables)) && r2 > 0) {
      if (null == a2.layerId) {
        const e5 = c(a2.type), t6 = (e5 == null ? void 0 : e5.length) ? n(n2, e5)[0] : l(n2);
        t6 && (a2.layerId = t6.id);
      }
      e4 = P(n2, a2), "OrientedImageryLayer" === (e4 == null ? void 0 : e4.layerType) && "oriented-imagery" === a2.type && a2.supportedSourceTypes.add("Feature Layer"), e4 && null != n2.showLegend && (e4.showLegend = n2.showLegend);
    }
    return r2 > 1 && "sublayerTitleMode" in a2 && "service-name" !== a2.sublayerTitleMode && (a2.sublayerTitleMode = "item-title-and-service-name"), e4;
  }
  return n2;
}
async function M(e3, r, a2) {
  var _a, _b, _c, _d, _e;
  if ((r == null ? void 0 : r.layers) && (r == null ? void 0 : r.tables)) return u(r);
  const o2 = d(e3.url);
  if (!o2) return 1;
  const n2 = await a2.fetchServiceMetadata(o2.url.path, { customParameters: (_a = l(r)) == null ? void 0 : _a.customParameters }).catch(() => null);
  return (((_b = r == null ? void 0 : r.layers) == null ? void 0 : _b.length) ?? ((_c = n2 == null ? void 0 : n2.layers) == null ? void 0 : _c.length) ?? 0) + (((_d = r == null ? void 0 : r.tables) == null ? void 0 : _d.length) ?? ((_e = n2 == null ? void 0 : n2.tables) == null ? void 0 : _e.length) ?? 0);
}
function P(e3, t5) {
  var _a, _b;
  const { layerId: r } = t5, a2 = ((_a = e3.layers) == null ? void 0 : _a.find((e4) => e4.id === r)) || ((_b = e3.tables) == null ? void 0 : _b.find((e4) => e4.id === r));
  return a2 && G(a2, t5) ? a2 : null;
}
function x(e3) {
  return "stream" !== e3.type && "layerId" in e3;
}
function G(e3, t5) {
  const r = "layerType" in e3 && e3.layerType, { type: a2 } = t5;
  return !("feature" === a2 && r && "ArcGISFeatureLayer" !== e3.layerType || "catalog" === a2 && !r || "oriented-imagery" === a2 && !r || "subtype-group" === a2 && !r);
}
async function C2(e3, t5) {
  const { layersJSON: a2 } = await t2(e3, t5);
  if (!a2) return null;
  const o2 = [...a2.layers, ...a2.tables];
  return (e4) => o2.find((t6) => t6.id === e4.id);
}
async function D(e3, t5) {
  const { layers: r, tables: a2 } = e3, o2 = [...r ?? [], ...a2 ?? []];
  if (!o2.length) return;
  const n2 = /* @__PURE__ */ new Set(), s3 = [];
  for (const { layerType: u2 } of o2) {
    const e4 = u2 ?? "ArcGISFeatureLayer";
    if (n2.has(e4)) continue;
    n2.add(e4);
    const r2 = t5[i(e4)];
    s3.push(r2());
  }
  const l2 = await Promise.all(s3), i2 = /* @__PURE__ */ new Map();
  return Array.from(n2).forEach((e4, t6) => {
    i2.set(e4, l2[t6]);
  }), ({ layerType: e4 }) => {
    const t6 = e4 ?? "ArcGISFeatureLayer";
    return i2.get(t6);
  };
}
export {
  h as load
};
//# sourceMappingURL=layersLoader-YVWJOYCA.js.map
