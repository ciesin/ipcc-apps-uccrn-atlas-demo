import {
  S
} from "./chunk-5BULKNR2.js";
import {
  n2 as n,
  s,
  s2
} from "./chunk-CWMZW2S5.js";
import {
  G
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/portal/support/urlUtils.js
var t = /^https:\/\/([a-z\d-]+)(\.maps([^.]*))?\.arcgis\.com/i;
var e = { devext: { customBaseUrl: "mapsdevext.arcgis.com", portalHostname: "devext.arcgis.com" }, qaext: { customBaseUrl: "mapsqa.arcgis.com", portalHostname: "qaext.arcgis.com" }, www: { customBaseUrl: "maps.arcgis.com", portalHostname: "www.arcgis.com" } };
function s3(s4) {
  const a3 = s4 == null ? void 0 : s4.match(t);
  if (!a3) return null;
  const [, r2, c2, o] = a3;
  if (!r2) return null;
  let l = null, m2 = null, n3 = null;
  const { devext: u2, qaext: i, www: p2 } = e;
  if (c2) if (l = r2, o) switch (o.toLowerCase()) {
    case "devext":
      ({ customBaseUrl: m2, portalHostname: n3 } = u2);
      break;
    case "qa":
      ({ customBaseUrl: m2, portalHostname: n3 } = i);
      break;
    default:
      return null;
  }
  else ({ customBaseUrl: m2, portalHostname: n3 } = p2);
  else switch (r2.toLowerCase()) {
    case "devext":
      ({ customBaseUrl: m2, portalHostname: n3 } = u2);
      break;
    case "qaext":
      ({ customBaseUrl: m2, portalHostname: n3 } = i);
      break;
    case "www":
      ({ customBaseUrl: m2, portalHostname: n3 } = p2);
      break;
    default:
      return null;
  }
  return { customBaseUrl: m2, isPortal: false, portalHostname: n3, urlKey: l };
}
function a(t3) {
  return /\/(sharing|usrsvcs)\/(appservices|servers)\//i.test(t3);
}
function r(t3) {
  const e2 = /^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i, s4 = /^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, a3 = /^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;
  return e2.test(t3) ? t3 = t3.replace(e2, "https://www.arcgis.com") : s4.test(t3) ? t3 = t3.replace(s4, "https://devext.arcgis.com") : a3.test(t3) && (t3 = t3.replace(a3, "https://qaext.arcgis.com")), t3;
}

// node_modules/@arcgis/core/support/base64Utils.js
function t2(t3) {
  const n3 = atob(t3), r2 = new Uint8Array(n3.length);
  for (let e2 = 0; e2 < n3.length; e2++) r2[e2] = n3.charCodeAt(e2);
  return r2.buffer;
}
function n2(t3) {
  const n3 = new Uint8Array(t3);
  let r2 = "";
  for (let e2 = 0; e2 < n3.length; e2++) r2 += String.fromCharCode(n3[e2]);
  return btoa(r2);
}

// node_modules/@arcgis/core/core/urlUtils.js
var u = () => n.getLogger("esri.core.urlUtils");
var c = s.request;
var f = "esri/config: esriConfig.request.proxyUrl is not set.";
var a2 = /^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i;
var p = /^\s*http:/i;
var h = /^\s*https:/i;
var d = /^\s*file:/i;
var m = /:\d+$/;
var y = /^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i;
var g = new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$");
var $ = new RegExp("^((([^[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^[:]*))(:([0-9]+))?$");
var x = class {
  constructor(t3 = "") {
    this.uri = t3, this.scheme = null, this.authority = null, this.path = null, this.query = null, this.fragment = null, this.user = null, this.password = null, this.host = null, this.port = null;
    let n3 = this.uri.match(g);
    this.scheme = n3[2] || (n3[1] ? "" : null), this.authority = n3[4] || (n3[3] ? "" : null), this.path = n3[5], this.query = n3[7] || (n3[6] ? "" : null), this.fragment = n3[9] || (n3[8] ? "" : null), null != this.authority && (n3 = this.authority.match($), this.user = n3[3] || null, this.password = n3[4] || null, this.host = n3[6] || n3[7], this.port = n3[9] || null);
  }
  toString() {
    return this.uri;
  }
};
var w = {};
var O = new x(s.applicationUrl);
var U = O;
var R = j();
var q = R;
var C = () => U;
var b = () => q;
function j() {
  const t3 = U.path, n3 = t3.slice(0, t3.lastIndexOf("/") + 1);
  return `${`${U.scheme}://${U.host}${null != U.port ? `:${U.port}` : ""}`}${n3}`;
}
function I(t3) {
  if (!t3) return null;
  const n3 = { path: null, query: null }, e2 = new x(t3), r2 = t3.indexOf("?");
  return null === e2.query ? n3.path = t3 : (n3.path = t3.slice(0, r2), n3.query = A(e2.query)), e2.fragment && (n3.hash = e2.fragment, null === e2.query && (n3.path = n3.path.slice(0, n3.path.length - (e2.fragment.length + 1)))), n3;
}
function A(t3) {
  const n3 = t3.split("&"), e2 = {};
  for (const r2 of n3) {
    if (!r2) continue;
    const t4 = r2.indexOf("=");
    let n4, o;
    t4 < 0 ? (n4 = decodeURIComponent(r2), o = "") : (n4 = decodeURIComponent(r2.slice(0, t4)), o = decodeURIComponent(r2.slice(t4 + 1)));
    let i = e2[n4];
    "string" == typeof i && (i = e2[n4] = [i]), Array.isArray(i) ? i.push(o) : e2[n4] = o;
  }
  return e2;
}
function v(t3, n3) {
  return t3 ? n3 && "function" == typeof n3 ? Object.keys(t3).map((e2) => encodeURIComponent(e2) + "=" + encodeURIComponent(n3(e2, t3[e2]))).join("&") : Object.keys(t3).map((e2) => {
    const o = t3[e2];
    if (null == o) return "";
    const i = encodeURIComponent(e2) + "=", s4 = n3 == null ? void 0 : n3[e2];
    return s4 ? i + encodeURIComponent(s4(o)) : Array.isArray(o) ? o.map((t4) => S.isSerializable(t4) ? i + encodeURIComponent(JSON.stringify(t4)) : i + encodeURIComponent(t4)).join("&") : S.isSerializable(o) ? i + encodeURIComponent(JSON.stringify(o)) : i + encodeURIComponent(o);
  }).filter((t4) => t4).join("&") : "";
}
function S2(t3 = false) {
  let n3, r2 = c.proxyUrl;
  if ("string" == typeof t3) {
    n3 = dt(t3);
    const e2 = H(t3);
    e2 && (r2 = e2.proxyUrl);
  } else n3 = !!t3;
  if (!r2) throw u().warn(f), new s2("urlUtils:proxy-not-set", f);
  n3 && wt() && (r2 = $t(r2));
  return I(r2);
}
function P(t3, n3 = false) {
  const e2 = H(t3);
  let r2, o;
  if (e2) {
    const t4 = E(e2.proxyUrl);
    r2 = t4.path, o = t4.query ? A(t4.query) : null;
  } else if (n3) {
    const n4 = S2(t3);
    r2 = n4.path, o = n4.query;
  }
  if (r2) {
    const n4 = I(t3);
    t3 = r2 + "?" + n4.path;
    const e3 = v({ ...o, ...n4.query });
    e3 && (t3 = `${t3}?${e3}`);
  }
  return t3;
}
var k = { path: "", query: "" };
function E(t3) {
  const n3 = t3.indexOf("?");
  return -1 !== n3 ? (k.path = t3.slice(0, n3), k.query = t3.slice(n3 + 1)) : (k.path = t3, k.query = null), k;
}
function B(t3) {
  return t3 = (t3 = Ot(t3 = Ct(t3 = E(t3).path), true)).toLowerCase();
}
function z(t3) {
  const n3 = { proxyUrl: t3.proxyUrl, urlPrefix: B(t3.urlPrefix) }, e2 = c.proxyRules, r2 = n3.urlPrefix;
  let o = e2.length;
  for (let i = 0; i < e2.length; i++) {
    const t4 = e2[i].urlPrefix;
    if (0 === r2.indexOf(t4)) {
      if (r2.length === t4.length) return -1;
      o = i;
      break;
    }
    0 === t4.indexOf(r2) && (o = i + 1);
  }
  return e2.splice(o, 0, n3), o;
}
function H(t3) {
  const n3 = c.proxyRules, e2 = B(t3);
  for (let r2 = 0; r2 < n3.length; r2++) if (0 === e2.indexOf(n3[r2].urlPrefix)) return n3[r2];
}
function T(t3, n3) {
  if (!t3 || !n3) return false;
  t3 = N(t3), n3 = N(n3);
  const e2 = s3(t3), r2 = s3(n3);
  return null != e2 && null != r2 ? e2.portalHostname === r2.portalHostname : null == e2 && null == r2 && F(t3, n3, true);
}
function J(t3, n3) {
  return t3 = N(t3), n3 = N(n3), Ot(t3) === Ot(n3);
}
function N(t3) {
  const n3 = (t3 = K(t3)).indexOf("/sharing");
  return n3 > 0 ? t3.slice(0, n3) : t3.replace(/\/+$/, "");
}
function D(t3, n3 = c.interceptors) {
  const e2 = (n4) => null == n4 || n4 instanceof RegExp && n4.test(t3) || "string" == typeof n4 && t3.startsWith(n4);
  if (n3) {
    for (const r2 of n3) if (Array.isArray(r2.urls)) {
      if (r2.urls.some(e2)) return r2;
    } else if (e2(r2.urls)) return r2;
  }
  return null;
}
function F(t3, n3, e2 = false) {
  if (!t3 || !n3) return false;
  const r2 = vt(t3), o = vt(n3);
  return !(!e2 && r2.scheme !== o.scheme) && (null != r2.host && null != o.host && (r2.host.toLowerCase() === o.host.toLowerCase() && r2.port === o.port));
}
function M(t3) {
  if ("string" == typeof t3) {
    if (!Y(t3)) return true;
    t3 = vt(t3);
  }
  if (F(t3, U)) return true;
  const n3 = c.trustedServers || [];
  for (let e2 = 0; e2 < n3.length; e2++) {
    const r2 = Q(n3[e2]);
    for (let n4 = 0; n4 < r2.length; n4++) if (F(t3, r2[n4])) return true;
  }
  return false;
}
function Q(t3) {
  return w[t3] || (ht(t3) || pt(t3) ? w[t3] = [new x(_(t3))] : w[t3] = [new x(`http://${t3}`), new x(`https://${t3}`)]), w[t3];
}
function _(t3, n3 = q, e2) {
  return pt(t3) ? (e2 == null ? void 0 : e2.preserveProtocolRelative) ? t3 : "http" === U.scheme && U.authority === X(t3).slice(2) ? `http:${t3}` : `https:${t3}` : ht(t3) ? t3 : V("/" === t3[0] ? Ut(n3) : n3, t3);
}
function G2(t3, n3 = q, e2) {
  if (null == t3 || !Y(t3)) return t3;
  const r2 = K(t3), o = r2.toLowerCase(), i = K(n3).toLowerCase().replace(/\/+$/, ""), s4 = e2 ? K(e2).toLowerCase().replace(/\/+$/, "") : null;
  if (s4 && 0 !== i.indexOf(s4)) return t3;
  const l = (t4, n4, e3) => -1 === (e3 = t4.indexOf(n4, e3)) ? t4.length : e3;
  let u2 = l(o, "/", o.indexOf("//") + 2), c2 = -1;
  for (; o.slice(0, u2 + 1) === i.slice(0, u2) + "/" && (c2 = u2 + 1, u2 !== o.length); ) u2 = l(o, "/", u2 + 1);
  if (-1 === c2) return t3;
  if (s4 && c2 < s4.length) return t3;
  t3 = r2.slice(c2);
  const f2 = i.slice(c2 - 1).replaceAll(/[^/]+/g, "").length;
  if (f2 > 0) for (let a3 = 0; a3 < f2; a3++) t3 = `../${t3}`;
  else t3 = `./${t3}`;
  return t3;
}
function K(t3) {
  return t3 = It(t3 = Lt(t3 = jt(t3 = _(t3 = t3.trim()))));
}
function V(...t3) {
  const e2 = t3.filter(G);
  if (!(e2 == null ? void 0 : e2.length)) return;
  const r2 = [];
  if (Y(e2[0])) {
    const t4 = e2[0], n3 = t4.indexOf("//");
    -1 !== n3 && (r2.push(t4.slice(0, n3 + 1)), yt(e2[0]) && (r2[0] += "/"), e2[0] = t4.slice(n3 + 2));
  } else "/" === e2[0][0] && r2.push("");
  const o = e2.reduce((t4, n3) => n3 ? t4.concat(n3.split("/")) : t4, []);
  for (let n3 = 0; n3 < o.length; n3++) {
    const t4 = o[n3];
    ".." === t4 && r2.length > 0 && ".." !== r2[r2.length - 1] ? r2.pop() : (!t4 && n3 === o.length - 1 || t4 && ("." !== t4 || 0 === r2.length)) && r2.push(t4);
  }
  return r2.join("/");
}
function X(t3, n3 = false) {
  if (null == t3 || Z(t3) || tt(t3)) return null;
  let e2 = t3.indexOf("://");
  if (-1 === e2 && pt(t3)) e2 = 2;
  else {
    if (-1 === e2) return null;
    e2 += 3;
  }
  const r2 = t3.indexOf("/", e2);
  return -1 !== r2 && (t3 = t3.slice(0, r2)), n3 && (t3 = Ot(t3, true)), t3;
}
function Y(t3) {
  return pt(t3) || ht(t3);
}
function Z(t3) {
  return null != t3 && "blob:" === t3.slice(0, 5);
}
function tt(t3) {
  return null != t3 && "data:" === t3.slice(0, 5);
}
function nt(t3) {
  const n3 = ot(t3);
  return (n3 == null ? void 0 : n3.isBase64) ? t2(n3.data) : null;
}
function et(t3) {
  return n2(t3).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
var rt = /^data:(.*?)(;base64)?,(.*)$/;
function ot(t3) {
  const n3 = t3.match(rt);
  if (!n3) return null;
  const [, e2, r2, o] = n3;
  return { mediaType: e2, isBase64: !!r2, data: o };
}
function it(t3) {
  return t3.isBase64 ? `data:${t3.mediaType};base64,${t3.data}` : `data:${t3.mediaType},${t3.data}`;
}
async function st(t3) {
  return (await fetch(t3)).blob();
}
function lt(t3) {
  const n3 = nt(t3);
  if (!n3) return null;
  const e2 = ot(t3);
  return new Blob([n3], { type: e2.mediaType });
}
function pt(t3) {
  return null != t3 && "/" === t3[0] && "/" === t3[1];
}
function ht(t3) {
  return null != t3 && a2.test(t3);
}
function dt(t3) {
  return null != t3 && h.test(t3) || "https" === U.scheme && pt(t3);
}
function mt(t3) {
  return null != t3 && p.test(t3) || "http" === U.scheme && pt(t3);
}
function yt(t3) {
  return null != t3 && d.test(t3);
}
function $t(t3) {
  return pt(t3) ? `https:${t3}` : t3.replace(p, "https:");
}
function xt() {
  return "http" === U.scheme;
}
function wt() {
  return "https" === U.scheme;
}
function Ot(t3, n3 = false) {
  return pt(t3) ? t3.slice(2) : (t3 = t3.replace(a2, ""), n3 && t3.length > 1 && "/" === t3[0] && "/" === t3[1] && (t3 = t3.slice(2)), t3);
}
function Ut(t3) {
  const n3 = t3.indexOf("//"), e2 = t3.indexOf("/", n3 + 2);
  return -1 === e2 ? t3 : t3.slice(0, e2);
}
function Rt(t3) {
  let n3 = 0;
  if (Y(t3)) {
    const e3 = t3.indexOf("//");
    -1 !== e3 && (n3 = e3 + 2);
  }
  const e2 = t3.lastIndexOf("/");
  return e2 < n3 ? t3 : t3.slice(0, e2 + 1);
}
function qt(t3, n3) {
  if (!t3) return "";
  const e2 = I(t3).path.replace(/\/+$/, ""), r2 = e2.slice(e2.lastIndexOf("/") + 1);
  if (!(n3 == null ? void 0 : n3.length)) return r2;
  const o = new RegExp(`\\.(${n3.join("|")})$`, "i");
  return r2.replace(o, "");
}
function Ct(t3) {
  return t3.endsWith("/") ? t3 : `${t3}/`;
}
function bt(t3) {
  return t3.replace(/\/+$/, "");
}
function jt(t3) {
  if (/^https?:\/\//i.test(t3)) {
    const n3 = E(t3);
    t3 = (t3 = n3.path.replaceAll(/\/{2,}/g, "/")).replace("/", "//"), n3.query && (t3 += `?${n3.query}`);
  }
  return t3;
}
function Lt(t3) {
  return t3.replace(/^(https?:\/\/)(arcgis\.com)/i, "$1www.$2");
}
function It(t3) {
  const n3 = c.httpsDomains;
  if (!mt(t3)) return t3;
  const e2 = t3.indexOf("/", 7);
  let r2;
  if (r2 = -1 === e2 ? t3 : t3.slice(0, e2), r2 = r2.toLowerCase().slice(7), m.test(r2)) {
    if (!r2.endsWith(":80")) return t3;
    r2 = r2.slice(0, -3), t3 = t3.replace(":80", "");
  }
  return xt() && r2 === U.authority && !y.test(t3) || (wt() && r2 === U.authority || n3 && n3.some((t4) => r2 === t4 || r2.endsWith(`.${t4}`)) || wt() && !H(t3)) && (t3 = $t(t3)), t3;
}
function At(t3, n3, e2) {
  if (!(n3 && e2 && t3 && Y(t3))) return t3;
  const r2 = t3.indexOf("//"), o = t3.indexOf("/", r2 + 2), i = t3.indexOf(":", r2 + 2), s4 = Math.min(o < 0 ? t3.length : o, i < 0 ? t3.length : i);
  if (t3.slice(r2 + 2, s4).toLowerCase() !== n3.toLowerCase()) return t3;
  return `${t3.slice(0, r2 + 2)}${e2}${t3.slice(s4)}`;
}
function vt(t3) {
  return "string" == typeof t3 ? new x(_(t3)) : (t3.scheme || (t3.scheme = U.scheme), t3);
}
function St(t3) {
  return Jt.test(t3);
}
function Pt(t3, n3) {
  const e2 = I(t3), r2 = Object.keys(e2.query || {});
  return r2.length > 0 && n3 && n3.warn("removeQueryParameters()", `Url query parameters are not supported, the following parameters have been removed: ${r2.join(", ")}.`), e2.path;
}
function kt(t3, n3, e2) {
  const r2 = I(t3), o = r2.query || {};
  return o[n3] = String(e2), `${r2.path}?${v(o)}`;
}
function Et(t3, n3) {
  if (!n3) return t3;
  const e2 = I(t3), r2 = e2.query || {};
  for (const [i, s4] of Object.entries(n3)) null != s4 && (r2[i] = s4);
  const o = v(r2);
  return o ? `${e2.path}?${o}` : e2.path;
}
function zt(t3) {
  if (null == t3) return null;
  const n3 = t3.match(Wt);
  return n3 ? n3[2] : null;
}
function Ht(t3) {
  if (null == t3) return null;
  const n3 = t3.match(Wt);
  return n3 ? { path: n3[1], extension: n3[2] } : { path: t3, extension: null };
}
async function Tt(t3) {
  if ("string" == typeof t3) {
    return ot(t3) ?? { data: t3 };
  }
  return new Promise((n3, e2) => {
    const r2 = new FileReader();
    r2.readAsDataURL(t3), r2.onload = () => n3(ot(r2.result)), r2.onerror = (t4) => e2(t4);
  });
}
var Wt = /([^.]*)\.([^/]*)$/;
var Jt = /(^data:image\/svg|\.svg$)/i;

export {
  s3 as s,
  a,
  r,
  t2 as t,
  x,
  C,
  b,
  I,
  A,
  v,
  S2 as S,
  P,
  z,
  H,
  T,
  J,
  D,
  F,
  M,
  _,
  G2 as G,
  K,
  V,
  X,
  Y,
  Z,
  tt,
  nt,
  et,
  ot,
  it,
  st,
  lt,
  pt,
  dt,
  $t,
  Rt,
  qt,
  Ct,
  bt,
  At,
  St,
  Pt,
  kt,
  Et,
  zt,
  Ht,
  Tt
};
//# sourceMappingURL=chunk-F7TCEOHX.js.map
