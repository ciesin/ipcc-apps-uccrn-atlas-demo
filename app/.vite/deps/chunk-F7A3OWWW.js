import {
  S
} from "./chunk-IP4HFFRO.js";
import {
  C
} from "./chunk-PAGKMWJH.js";
import {
  P2 as P,
  d2 as d,
  s as s2
} from "./chunk-UFBX3XSC.js";
import {
  a
} from "./chunk-M6FNW7GP.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/associatedFeatureServiceUtils.js
async function s3(e, r) {
  const n = d(e);
  if (!n) throw new s("invalid-url", "Invalid scene service url");
  const o = { ...r, sceneServerUrl: n.url.path, layerId: n.sublayer ?? void 0 };
  if (o.sceneLayerItem ?? (o.sceneLayerItem = await l(o)), null == o.sceneLayerItem) return f(o.sceneServerUrl.replace("/SceneServer", "/FeatureServer"), o);
  const i = await y(o);
  if (!(i == null ? void 0 : i.url)) throw new s("related-service-not-found", "Could not find feature service through portal item relationship");
  o.featureServiceItem = i;
  const s4 = await f(i.url, o);
  return s4.portalItem = i, s4;
}
async function l(e) {
  const r = (await c(e)).serviceItemId;
  if (!r) return null;
  const t = new S({ id: r, apiKey: e.apiKey }), a2 = await u(e);
  null != a2 && (t.portal = new C({ url: a2 }));
  try {
    return await t.load({ signal: e.signal });
  } catch (s4) {
    return a(s4), null;
  }
}
async function c(e) {
  if (e.rootDocument) return e.rootDocument;
  const t = { query: { f: "json", ...e.customParameters, token: e.apiKey }, responseType: "json", signal: e.signal };
  try {
    const n = await P(e.sceneServerUrl, t);
    e.rootDocument = n.data;
  } catch {
    e.rootDocument = {};
  }
  return e.rootDocument;
}
async function u(t) {
  var _a;
  const a2 = (_a = s2) == null ? void 0 : _a.findServerInfo(t.sceneServerUrl);
  if (a2 == null ? void 0 : a2.owningSystemUrl) return a2.owningSystemUrl;
  const o = t.sceneServerUrl.replace(/(.*\/rest)\/.*/i, "$1") + "/info";
  try {
    const e = (await P(o, { query: { f: "json" }, responseType: "json", signal: t.signal })).data.owningSystemUrl;
    if (e) return e;
  } catch (i) {
    a(i);
  }
  return null;
}
async function f(e, n) {
  var _a, _b, _c;
  const o = d(e);
  if (!o) throw new s("invalid-feature-service-url", "Invalid feature service url");
  const i = o.url.path, s4 = n.layerId;
  if (null == s4) return { serverUrl: i };
  const l2 = c(n), u2 = n.featureServiceItem ? await n.featureServiceItem.fetchData("json") : null, f2 = (_c = ((_a = u2 == null ? void 0 : u2.layers) == null ? void 0 : _a[0]) || ((_b = u2 == null ? void 0 : u2.tables) == null ? void 0 : _b[0])) == null ? void 0 : _c.customParameters, y2 = (e2) => {
    const t = { query: { f: "json", ...f2 }, responseType: "json", authMode: e2, signal: n.signal };
    return P(i, t);
  }, m = y2("anonymous").catch(() => y2("no-prompt")), [p, d2] = await Promise.all([m, l2]), v = d2 == null ? void 0 : d2.layers, w = p.data && p.data.layers;
  if (!Array.isArray(w)) throw new Error("expected layers array");
  if (Array.isArray(v)) for (let r = 0; r < Math.min(v.length, w.length); r++) {
    if (v[r].id === s4) return { serverUrl: i, layerId: w[r].id };
  }
  else if (null != s4 && s4 < w.length) return { serverUrl: i, layerId: w[s4].id };
  throw new Error("could not find matching associated sublayer");
}
async function y({ sceneLayerItem: e, signal: r }) {
  if (!e) return null;
  try {
    const t = (await e.fetchRelatedItems({ relationshipType: "Service2Service", direction: "reverse" }, { signal: r })).find((e2) => "Feature Service" === e2.type) || null;
    if (!t) return null;
    const n = new S({ portal: t.portal, id: t.id });
    return await n.load(), n;
  } catch (t) {
    return a(t), null;
  }
}

export {
  s3 as s
};
//# sourceMappingURL=chunk-F7A3OWWW.js.map
