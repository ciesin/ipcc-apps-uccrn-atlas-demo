import {
  C,
  c
} from "./chunk-PAGKMWJH.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  K,
  Rt
} from "./chunk-F7TCEOHX.js";
import {
  a
} from "./chunk-M6FNW7GP.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/symbols/support/styleCache.js
var e = /* @__PURE__ */ new Map();

// node_modules/@arcgis/core/symbols/support/styleUtils.js
async function f(e2, r) {
  try {
    return { data: (await p(e2, r)).data, baseUrl: Rt(e2), styleUrl: e2 };
  } catch (o) {
    return a(o), null;
  }
}
function u(e2, r, t) {
  var _a;
  const o = null != r.portal ? r.portal : C.getDefault();
  let s2;
  const l = `${o.url} - ${(_a = o.user) == null ? void 0 : _a.username} - ${e2}`, f2 = e.get(l);
  if (f2) return f2;
  const u2 = c2(e2, o, t).then((e3) => (s2 = e3, e3.fetchData())).then((r2) => ({ data: r2, baseUrl: s2.itemUrl ?? "", styleName: e2 }));
  return e.set(l, u2), u2;
}
function c2(e2, t, o) {
  return t.load(o).then(() => {
    const r = new c({ disableExtraQuery: true, query: `owner:${d} AND type:${w} AND typekeywords:"${e2}"` });
    return t.queryItems(r, o);
  }).then(({ results: t2 }) => {
    var _a;
    let s2 = null;
    const n = e2.toLowerCase();
    if (t2 && Array.isArray(t2)) for (const e3 of t2) {
      const r = (_a = e3.typeKeywords) == null ? void 0 : _a.some((e4) => e4.toLowerCase() === n);
      if (r && e3.type === w && e3.owner === d) {
        s2 = e3;
        break;
      }
    }
    if (!s2) throw new s("symbolstyleutils:style-not-found", `The style '${e2}' could not be found`, { styleName: e2 });
    return s2.load(o);
  });
}
function i(e2, t, o) {
  return null != (e2 == null ? void 0 : e2.styleUrl) ? f(e2.styleUrl, o) : null != (e2 == null ? void 0 : e2.styleName) ? u(e2.styleName, t, o) : Promise.reject(new s("symbolstyleutils:style-url-and-name-missing", "Either styleUrl or styleName is required to resolve a style"));
}
function m(e2) {
  return null === e2 || "CIMSymbolReference" === e2.type ? e2 : { type: "CIMSymbolReference", symbol: e2 };
}
function y(e2, r) {
  for (const t of r) switch (t) {
    case "cim":
      if (e2.cimRef) return { format: t, url: encodeURI(e2.cimRef) };
      break;
    case "web-gltf-basisu": {
      const r2 = b(e2, "gltf_basisu");
      if (r2) return { format: t, url: r2 };
      break;
    }
    case "web-gltf": {
      const r2 = b(e2, "gltf");
      if (r2) return { format: t, url: r2 };
      break;
    }
    case "web": {
      const r2 = b(e2, "gltf");
      if (r2) return { format: "web-gltf", url: r2 };
      if (e2.webRef) return { format: t, url: encodeURI(e2.webRef) };
      break;
    }
  }
}
function b(e2, r) {
  var _a, _b;
  if (!has("enable-feature:force-wosr")) return (_b = (_a = e2.formatInfos) == null ? void 0 : _a.find((e3) => e3.type === r)) == null ? void 0 : _b.href;
}
function p(r, t) {
  const s2 = { responseType: "json", query: { f: "json" }, ...t };
  return P(K(r), s2);
}
var d = "esri_en";
var w = "Style";
var h = "https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";

export {
  i,
  m,
  y,
  p,
  h
};
//# sourceMappingURL=chunk-CQ2PC3VP.js.map
