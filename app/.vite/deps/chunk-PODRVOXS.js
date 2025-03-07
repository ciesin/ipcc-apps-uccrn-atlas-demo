import {
  p,
  r
} from "./chunk-A42OBC4U.js";

// node_modules/@arcgis/core/intl/number.js
var t = { ar: "ar-u-nu-latn" };
var u = /* @__PURE__ */ new WeakMap();
var r2 = {};
function a(e) {
  const a2 = e || r2;
  if (!u.has(a2)) {
    const r3 = r(), i2 = t[r()] || r3;
    u.set(a2, new Intl.NumberFormat(i2, e));
  }
  return u.get(a2);
}
function i(e = {}) {
  const n = {};
  return null != e.digitSeparator && (n.useGrouping = e.digitSeparator), null != e.places && (n.minimumFractionDigits = n.maximumFractionDigits = e.places), n;
}
function l(e, n) {
  return Object.is(e, -0) && (e = 0), a(n).format(e);
}
function o(e, t2 = r()) {
  var _a, _b;
  if (!e) return null;
  let u2 = p2.get(t2);
  if (!u2) {
    const e2 = a().formatToParts(12345.6), n = [...a({ useGrouping: false }).format(9876543210)].reverse(), r3 = new Map(n.map((e3, n2) => [e3, n2])), i2 = new RegExp(`[${(_a = e2.find((e3) => "group" === e3.type)) == null ? void 0 : _a.value}]`, "g"), l2 = new RegExp(`[${(_b = e2.find((e3) => "decimal" === e3.type)) == null ? void 0 : _b.value}]`), o2 = new RegExp(`[${n.join("")}]`, "g"), c = /[\u200E\u200F\u202A\u202B\u202C\u202D\u202E\u2066\u2067\u2068\u2069\u061C]/g, s = /[-\u2212\u2013\u2014\u2015]/g;
    u2 = (e3) => {
      if ("" === (e3 = e3.trim().replaceAll(i2, "").replace(l2, ".").replace(o2, (e4) => String(r3.get(e4))).replaceAll(c, "").replaceAll(s, "-"))) return null;
      const n2 = Number(e3);
      return isNaN(n2) ? null : n2;
    }, p2.set(t2, u2);
  }
  return u2(e);
}
p(() => {
  u = /* @__PURE__ */ new WeakMap(), r2 = {};
});
var p2 = /* @__PURE__ */ new Map();

export {
  i,
  l,
  o
};
//# sourceMappingURL=chunk-PODRVOXS.js.map
