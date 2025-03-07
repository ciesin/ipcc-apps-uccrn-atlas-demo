import {
  o
} from "./chunk-LZUCOHH2.js";
import {
  ci
} from "./chunk-ANT4QPJQ.js";
import {
  n as n2
} from "./chunk-MEC6IDRX.js";
import {
  i
} from "./chunk-6P7HXSJ6.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/symbols/cim/constants.js
var o2 = 15.5;
var t = 4;
var c = 64;
var e = 1024;

// node_modules/@arcgis/core/symbols/cim/rasterizingUtils.js
var l = () => n.getLogger("esri.symbols.cim.rasterizingUtils");
var c2 = 32;
var h = (o3) => "vertical" === o3 || "horizontal" === o3 || "cross" === o3 || "esriSFSCross" === o3 || "esriSFSVertical" === o3 || "esriSFSHorizontal" === o3;
function f(o3, t2, r) {
  const n3 = t2.style, a = i(Math.ceil(r)), s = h(n3) ? 8 * a : 16 * a, i2 = 2 * a;
  o3.width = s, o3.height = s;
  const l2 = o3.getContext("2d");
  l2.strokeStyle = "#ffffff", l2.lineWidth = a, l2.beginPath(), "vertical" !== n3 && "cross" !== n3 && "esriSFSCross" !== n3 && "esriSFSVertical" !== n3 || (l2.moveTo(s / 2, -i2), l2.lineTo(s / 2, s + i2)), "horizontal" !== n3 && "cross" !== n3 && "esriSFSCross" !== n3 && "esriSFSHorizontal" !== n3 || (l2.moveTo(-i2, s / 2), l2.lineTo(s + i2, s / 2)), "backward-diagonal" !== n3 && "diagonal-cross" !== n3 && "esriSFSDiagonalCross" !== n3 && "esriSFSBackwardDiagonal" !== n3 || (l2.moveTo(-i2, -i2), l2.lineTo(s + i2, s + i2), l2.moveTo(s - i2, -i2), l2.lineTo(s + i2, i2), l2.moveTo(-i2, s - i2), l2.lineTo(i2, s + i2)), "forward-diagonal" !== n3 && "diagonal-cross" !== n3 && "esriSFSForwardDiagonal" !== n3 && "esriSFSDiagonalCross" !== n3 || (l2.moveTo(s + i2, -i2), l2.lineTo(-i2, s + i2), l2.moveTo(i2, -i2), l2.lineTo(-i2, i2), l2.moveTo(s + i2, s - i2), l2.lineTo(s - i2, s + i2)), l2.stroke();
  const c3 = l2.getImageData(0, 0, o3.width, o3.height), f2 = new Uint8Array(c3.data);
  let m2;
  for (let e2 = 0; e2 < f2.length; e2 += 4) m2 = f2[e2 + 3] / 255, f2[e2] = f2[e2] * m2, f2[e2 + 1] = f2[e2 + 1] * m2, f2[e2 + 2] = f2[e2 + 2] * m2;
  return [f2, o3.width, o3.height, a];
}
function m(t2) {
  t2.length % 2 == 1 && (t2 = [...t2, ...t2]);
  const e2 = t2.reduce((o3, t3) => o3 + t3, 0), a = Math.round(e2 * t), s = 1, i2 = new Float32Array(a * s);
  let l2 = 0, c3 = 0, h2 = 0.5, f2 = true;
  for (const o3 of t2) {
    for (l2 = c3, c3 += o3 * t; h2 <= c3; ) {
      const o4 = h2 - 0.5, t3 = Math.min(Math.abs(h2 - l2), Math.abs(h2 - c3));
      i2[o4] = f2 ? -t3 : t3, h2++;
    }
    f2 = !f2;
  }
  const m2 = i2.length, u2 = new Uint8Array(4 * m2);
  for (let g2 = 0; g2 < m2; ++g2) {
    const t3 = i2[g2] / t;
    o(t3 / c * 0.5 + 0.5, u2, 4 * g2);
  }
  return [u2, a, s];
}
function u(t2, e2) {
  null == t2 && (t2 = []);
  const r = "Butt" === e2, n3 = "Square" === e2, s = !r && !n3;
  t2.length % 2 == 1 && (t2 = [...t2, ...t2]);
  const i2 = o2, l2 = 2 * i2;
  let c3 = 0;
  for (const o3 of t2) c3 += o3;
  const h2 = Math.round(c3 * i2), f2 = new Float32Array(h2 * l2), m2 = 0.5 * i2;
  let u2 = 0, g2 = 0, d2 = 0.5, p2 = true;
  for (const o3 of t2) {
    for (u2 = g2, g2 += o3 * i2; d2 <= g2; ) {
      let o4 = 0.5;
      for (; o4 < l2; ) {
        const t3 = (o4 - 0.5) * h2 + d2 - 0.5, e3 = s ? (o4 - i2) * (o4 - i2) : Math.abs(o4 - i2);
        f2[t3] = p2 ? r ? Math.max(Math.max(u2 + m2 - d2, e3), Math.max(d2 - g2 + m2, e3)) : e3 : s ? Math.min((d2 - u2) * (d2 - u2) + e3, (d2 - g2) * (d2 - g2) + e3) : n3 ? Math.min(Math.max(d2 - u2, e3), Math.max(g2 - d2, e3)) : Math.min(Math.max(d2 - u2 + m2, e3), Math.max(g2 + m2 - d2, e3)), o4++;
      }
      d2++;
    }
    p2 = !p2;
  }
  const C2 = f2.length, M2 = new Uint8Array(4 * C2);
  for (let a = 0; a < C2; ++a) {
    const t3 = (s ? Math.sqrt(f2[a]) : f2[a]) / i2;
    o(t3, M2, 4 * a);
  }
  return [M2, h2, l2];
}
function g(o3, t2) {
  const { colorRamp: e2, gradientType: r } = t2, n3 = "CIMFixedColorRamp" === e2.type, a = t2.interval || n2.CIMGradientFill.interval;
  let i2 = C(e2);
  return n3 && (i2 = M(i2, a)), "Discrete" === r || n3 ? w(o3, i2, a) : x(o3, i2);
}
var d;
function p(o3, t2) {
  const { colorRamp: e2, gradientType: r } = t2, n3 = C(e2), a = "CIMFixedColorRamp" === e2.type;
  if ("Continuous" === r && !a) return y(o3, n3);
  const i2 = t2.interval ?? n2.CIMGradientFill.interval;
  if (a) {
    return y(o3, M(n3, i2));
  }
  const l2 = [];
  d ?? (d = document.createElement("canvas")), S(d, n3, i2, 1, 0);
  const c3 = d.getContext("2d").getImageData(0, 0, i2, 1).data;
  for (let s = 0, h2 = 0; s < i2; s++, h2 = 4 * s) {
    const o4 = [c3[h2 + 0], c3[h2 + 1], c3[h2 + 2], c3[h2 + 3]];
    l2.push({ offset: s / i2, color: o4 }), l2.push({ offset: (s + 1) / i2, color: o4 });
  }
  return y(o3, l2);
}
function C(o3) {
  const t2 = [];
  switch (o3.type) {
    case "CIMPolarContinuousColorRamp":
    case "CIMLinearContinuousColorRamp": {
      "CIMPolarContinuousColorRamp" === o3.type && l().warnOnce("CIMPolarContinuousColorRamp is currently unsupported. Falling back to CIMLinearContinuousColorRamp.");
      const e2 = o3;
      t2.push({ offset: 0, color: [e2.fromColor[0], e2.fromColor[1], e2.fromColor[2], e2.fromColor[3] / 255] }), t2.push({ offset: 1, color: [e2.toColor[0], e2.toColor[1], e2.toColor[2], e2.toColor[3] / 255] });
      break;
    }
    case "CIMFixedColorRamp": {
      const e2 = o3, r = 1 / (e2.colors.length - 1);
      let n3 = 0;
      for (const o4 of e2.colors) t2.push({ offset: n3, color: [o4[0], o4[1], o4[2], o4[3] / 255] }), n3 += r;
      break;
    }
    case "CIMMultipartColorRamp": {
      const e2 = o3, r = e2.weights.reduce((o4, t3) => o4 + t3, 0);
      let n3 = 0;
      for (let o4 = 0; o4 < e2.colorRamps.length; o4++) {
        const a = e2.colorRamps[o4], s = e2.weights[o4], i2 = C(a);
        for (const o5 of i2) t2.push({ offset: (n3 + o5.offset * s) / r, color: o5.color });
        n3 += s;
      }
      break;
    }
    default:
      l().error(`Color ramp "${o3.type}" currently unsupported.`);
  }
  return t2;
}
function M(o3, t2) {
  const e2 = [], r = (o3.length - 1) / (t2 - 1);
  for (let n3 = 0; n3 < t2; n3++) {
    const a = o3[Math.round(n3 * r)].color;
    e2.push({ offset: n3 / t2, color: a }), e2.push({ offset: (n3 + 1) / t2, color: a });
  }
  return e2;
}
function x(o3, t2) {
  return S(o3, t2, c2, 1, ci), F(o3);
}
function w(o3, t2, e2) {
  return S(o3, t2, e2, 1, ci), F(o3);
}
function y(o3, t2, e2 = 0) {
  for (const { offset: r, color: n3 } of t2) o3.addColorStop(Math.min(Math.max(r, e2), 1 - e2), `rgba(${n3[0]}, ${n3[1]}, ${n3[2]}, ${n3[3]})`);
}
function S(o3, t2, e2, r, n3) {
  const a = e2 + 2 * n3;
  o3.width = a, o3.height = r;
  const s = (n3 + 1) / a, i2 = o3.getContext("2d", { willReadFrequently: true });
  if (t2.length > 0) {
    const o4 = i2.createLinearGradient(0, 0, a, r);
    y(o4, t2, s), i2.fillStyle = o4;
  } else i2.fillStyle = "rgba(128, 128, 128, 1)";
  i2.fillRect(0, 0, a, r);
}
function F(o3) {
  const { width: t2, height: e2 } = o3, r = o3.getContext("2d").getImageData(0, 0, t2, e2), n3 = new Uint8Array(r.data);
  for (let a = 0; a < n3.length; a += 4) {
    const o4 = n3[a + 3] / 255;
    n3[a] *= o4, n3[a + 1] *= o4, n3[a + 2] *= o4;
  }
  return [n3, t2, e2];
}
function v(o3) {
  var _a, _b, _c, _d;
  const t2 = ((_b = (_a = o3[0]) == null ? void 0 : _a[0]) == null ? void 0 : _b[0]) ?? 0, e2 = ((_d = (_c = o3[0]) == null ? void 0 : _c[0]) == null ? void 0 : _d[1]) ?? 0, r = { ymin: e2, xmin: t2, ymax: e2, xmax: t2, width: 0, height: 0 };
  for (let n3 = 0; n3 < o3.length; n3++) {
    const t3 = o3[n3];
    for (let o4 = 0; o4 < t3.length; o4++) {
      const e3 = t3[o4][0], n4 = t3[o4][1];
      e3 < r.xmin && (r.xmin = e3), e3 > r.xmax && (r.xmax = e3), n4 < r.ymin && (r.ymin = n4), n4 > r.ymax && (r.ymax = n4);
    }
  }
  return r.width = Math.abs(r.xmax - r.xmin), r.height = Math.abs(r.ymax - r.ymin), r;
}
function T(o3, t2) {
  const e2 = v(o3), r = 0 === e2.width ? 1 : e2.width, n3 = 0 === e2.height ? 1 : e2.height, a = [];
  for (let s = 0; s < o3.length; s++) {
    const i2 = o3[s], l2 = [];
    for (let o4 = 0; o4 < i2.length; o4++) {
      let a2 = Math.round(i2[o4][0] - e2.xmin), s2 = Math.round(i2[o4][1] - e2.ymin);
      if (a2 = t2.xmin + a2 * t2.width / r, s2 = t2.ymin + s2 * t2.height / n3, isNaN(a2) || isNaN(s2)) throw new Error("Scaled shape has NaN values");
      l2.push([a2, s2]);
    }
    a.push(l2);
  }
  return a;
}
function R(o3, t2, e2) {
  const r = [];
  for (let n3 = 0; n3 < o3.length; n3++) {
    const a = o3[n3], s = [];
    for (let o4 = 0; o4 < a.length; o4++) {
      const r2 = a[o4][0] + t2, n4 = a[o4][1] + e2;
      if (isNaN(r2) || isNaN(n4)) throw new Error("Scaled shape has NaN values");
      s.push([r2, n4]);
    }
    r.push(s);
  }
  return r;
}

export {
  t,
  c,
  e,
  f,
  m,
  u,
  g,
  p,
  T,
  R
};
//# sourceMappingURL=chunk-VCN3W5DR.js.map
