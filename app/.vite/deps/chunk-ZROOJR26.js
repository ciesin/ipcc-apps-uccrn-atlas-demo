import {
  u
} from "./chunk-STBNLAGT.js";
import {
  F,
  N,
  g,
  m
} from "./chunk-6P7HXSJ6.js";

// node_modules/@arcgis/core/layers/support/displayFilterUtils.js
function i(e, n) {
  return { ...n, filterMode: e.mode };
}
function u2(e, n) {
  return l(e, n).next().value ?? null;
}
function c(t, r, i2) {
  const u3 = f(t);
  if (u3 && (N(r, u3[0]) || F(i2, u3[1]))) return "";
  const c2 = Array.from(l(t, r, i2)), m3 = a(c2, r, i2) ? "1=1" : c2.map((e) => e.where || "1=1").reduce((e, n) => u(e, n), "");
  return m3 && "1=1" !== m3 ? m3 : "";
}
function f(e) {
  if ("manual" === s(e)) return null;
  const n = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY];
  for (const { minScale: t, maxScale: r } of e.filters) n[0] = Math.max(n[0], I(t)), n[1] = Math.min(n[1], d(r));
  return n;
}
function* l(e, n, t) {
  if ("manual" === s(e)) {
    const n2 = e.filters.find((n3) => n3.id === e.activeFilterId);
    n2 && (yield n2);
  } else {
    "object" == typeof n && (n = n.scale);
    for (const r of e.filters) m2(r.minScale, r.maxScale, n, t) && (yield r);
  }
}
function a(t, r, o) {
  var _a, _b;
  if (0 === t.length) return true;
  const i2 = I((_a = t.at(0)) == null ? void 0 : _a.minScale), u3 = d((_b = t.at(-1)) == null ? void 0 : _b.maxScale);
  if (F(i2, r) || N(u3, o)) return true;
  for (let e = 0; e < t.length - 1; e++) {
    const r2 = t[e], o2 = t[e + 1];
    if (F(I(o2.minScale), d(r2.maxScale))) return true;
  }
  return false;
}
function m2(e, n, o, i2) {
  return e = I(e), o = I(o), n = d(n), !(!m(o, e) && (i2 ?? o) > e) && (!g(n, o) && (void 0 === i2 || !m(i2, e)));
}
function s(e) {
  return "mode" in e ? e.mode : e.filterMode;
}
function I(e) {
  return e || Number.POSITIVE_INFINITY;
}
function d(e) {
  return e || 0;
}

export {
  i,
  u2 as u,
  c
};
//# sourceMappingURL=chunk-ZROOJR26.js.map
