import {
  r
} from "./chunk-DVZSVGIW.js";
import {
  h
} from "./chunk-3UHB6K6P.js";

// node_modules/@arcgis/core/widgets/Legend/support/colorRampUtils.js
var o = new h([64, 64, 64]);
function n(l, o2) {
  const n2 = [], r3 = l.length - 1;
  return 5 === l.length ? n2.push(0, 2, 4) : n2.push(0, r3), l.map((l2, t2) => n2.includes(t2) ? r(l2, t2, r3, o2) : null);
}
async function r2(l, e, o2) {
  let r3 = false, a2 = [], u2 = [];
  if (l.stops) {
    const e2 = l.stops;
    a2 = e2.map((l2) => l2.value), r3 = e2.some((l2) => !!l2.label), r3 && (u2 = e2.map((l2) => l2.label));
  }
  const s2 = a2[0], i2 = a2[a2.length - 1];
  if (null == s2 && null == i2) return null;
  const c = r3 ? null : n(a2, o2);
  return (await Promise.all(a2.map(async (o3, n2) => ({ value: o3, color: "opacity" === l.type ? await t(o3, l, e) : (await import("./visualVariableUtils-ZEYVTAMY.js")).getColor(l, o3), label: r3 ? u2[n2] : (c == null ? void 0 : c[n2]) ?? "" })))).reverse();
}
async function t(e, n2, r3) {
  const t2 = new h(r3 ?? o), a2 = (await import("./visualVariableUtils-ZEYVTAMY.js")).getOpacity(n2, e);
  return null != a2 && (t2.a = a2), t2;
}
function a(l) {
  let e = false, o2 = [], r3 = [];
  o2 = l.map((l2) => l2.value), e = l.some((l2) => !!l2.label), e && (r3 = l.map((l2) => l2.label ?? ""));
  const t2 = o2[0], a2 = o2[o2.length - 1];
  if (null == t2 && null == a2) return null;
  const s2 = e ? null : n(o2);
  return o2.map((o3, n2) => ({ value: o3, color: u(o3, l), label: e ? r3[n2] : (s2 == null ? void 0 : s2[n2]) ?? "" })).reverse();
}
function u(e, o2) {
  const { startIndex: n2, endIndex: r3, weight: t2 } = s(e, o2);
  if (n2 === r3) return o2[n2].color;
  const a2 = h.blendColors(o2[n2].color, o2[r3].color, t2);
  return new h(a2);
}
function s(l, e) {
  let o2 = 0, n2 = e.length - 1;
  return e.some((e2, r3) => l < e2.value ? (n2 = r3, true) : (o2 = r3, false)), { startIndex: o2, endIndex: n2, weight: (l - e[o2].value) / (e[n2].value - e[o2].value) };
}
function i(e, o2) {
  let n2 = [];
  if (e && "multipart" === e.type) e.colorRamps.reverse().forEach((r3, t2) => {
    0 === t2 ? n2.push({ value: o2.max, color: new h(r3.toColor), label: "high" }) : n2.push({ value: null, color: new h(r3.toColor), label: "" }), t2 === e.colorRamps.length - 1 ? n2.push({ value: o2.min, color: new h(r3.fromColor), label: "low" }) : n2.push({ value: null, color: new h(r3.fromColor), label: "" });
  });
  else {
    let r3, t2;
    e && "algorithmic" === e.type ? (r3 = e.fromColor, t2 = e.toColor) : (r3 = [0, 0, 0, 1], t2 = [255, 255, 255, 1]), n2 = [{ value: o2.max, color: new h(t2), label: "high" }, { value: o2.min, color: new h(r3), label: "low" }];
  }
  return n2;
}

export {
  r2 as r,
  a,
  u,
  i
};
//# sourceMappingURL=chunk-Y27EMLXK.js.map
