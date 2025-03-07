import {
  n
} from "./chunk-MHM4GDCM.js";
import {
  _
} from "./chunk-363AT5UF.js";
import {
  e,
  u
} from "./chunk-JLFV7EBO.js";
import {
  r
} from "./chunk-6P7HXSJ6.js";

// node_modules/@arcgis/core/renderers/support/heatmapUtils.js
var c = 2.4;
function e2(t) {
  return e(t * c);
}
function a(t) {
  return u(t) / c;
}
function s(r2, o, i, c2) {
  let { color: e3, ratio: a2 } = o, { color: s2, ratio: f2 } = i;
  if (f2 === a2) {
    const t = 1e-6;
    1 === f2 ? a2 -= t : f2 += t;
  }
  const l2 = r((c2 - a2) / (f2 - a2), 0, 1);
  _(r2, e3.toArray(), s2.toArray(), l2);
}
function f(t) {
  const r2 = 512, o = new Uint8ClampedArray(4 * r2);
  if (t = t.filter(({ ratio: t2 }) => t2 >= 0 && t2 <= 1).sort((t2, r3) => t2.ratio - r3.ratio).map(({ color: t2, ratio: r3 }) => ({ color: t2, ratio: Math.max(r3, 1e-3) })), t.length < 1) return o;
  let n2 = t[0], c2 = t[0], e3 = 1;
  const a2 = n();
  for (let i = 0; i < r2; i++) {
    const f2 = (i + 0.5) / r2;
    for (; f2 > c2.ratio && e3 < t.length; ) n2 = c2, c2 = t[e3++];
    s(a2, n2, c2, f2), o.set(a2, 4 * i);
  }
  return o;
}
function l(t, r2, o) {
  const n2 = Math.sqrt(t ** 2 + r2 ** 2) / o;
  return n2 > 1 ? 0 : 3 / (Math.PI * o ** 2) * (1 - n2 ** 2) ** 2;
}
function u2(t) {
  return "function" == typeof t ? t : t ? (r2) => +r2[t] : () => 1;
}

export {
  c,
  e2 as e,
  a,
  f,
  l,
  u2 as u
};
//# sourceMappingURL=chunk-RAXTPGM6.js.map
