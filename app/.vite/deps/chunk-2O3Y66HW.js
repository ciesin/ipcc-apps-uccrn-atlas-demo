import {
  d as d2,
  l as l2
} from "./chunk-VRFYHG34.js";
import {
  L,
  c,
  e,
  h as h2,
  l,
  m,
  n as n3,
  o,
  p as p2,
  s as s2,
  t,
  u as u2
} from "./chunk-EZQWXU2P.js";
import {
  b,
  f,
  p,
  w,
  y2 as y
} from "./chunk-M6YQSYSW.js";
import {
  B,
  U
} from "./chunk-ZD4JXG4O.js";
import {
  h
} from "./chunk-BSJSBY3M.js";
import {
  d2 as d,
  j
} from "./chunk-IPFYNOOY.js";
import {
  u
} from "./chunk-JLFV7EBO.js";
import {
  n as n2
} from "./chunk-7AOPU62X.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/symbols/support/previewSymbol3D.js
var P = t.size;
var D = t.maxSize;
var U2 = t.maxOutlineSize;
var O = t.lineWidth;
var C = t.tallSymbolWidth;
function R(e2) {
  const t2 = e2.outline, l3 = null != e2.material ? e2.material.color : null, a = null != l3 ? l3.toHex() : null;
  if (null == t2 || "pattern" in t2 && null != t2.pattern && "style" === t2.pattern.type && "none" === t2.pattern.style) return "fill" === e2.type && "#ffffff" === a ? { color: "#bdc3c7", width: 0.75 } : null;
  const s3 = u(t2.size) || 0;
  return { color: "rgba(" + (null != t2.color ? t2.color.toRgba() : "255,255,255,1") + ")", width: Math.min(s3, U2), style: "pattern" in t2 && null != t2.pattern && "style" === t2.pattern.type ? w(t2.pattern.style) : null, join: "butt", cap: "patternCap" in t2 ? t2.patternCap : "butt" };
}
async function E(t2, l3) {
  var _a, _b, _c;
  if ((_a = t2.thumbnail) == null ? void 0 : _a.url) return t2.thumbnail.url;
  if ("icon" === l3.type) {
    const e2 = (_b = l3 == null ? void 0 : l3.resource) == null ? void 0 : _b.href;
    if (e2) return p(l3);
  }
  const a = n2("esri/images/Legend/legend3dsymboldefault.png");
  if (t2.styleOrigin && (t2.styleOrigin.styleName || t2.styleOrigin.styleUrl)) {
    const e2 = await h(t2.styleOrigin, { portal: t2.styleOrigin.portal }).catch(() => null);
    if (e2 && "thumbnail" in e2 && ((_c = e2.thumbnail) == null ? void 0 : _c.url)) return e2.thumbnail.url;
  }
  return a;
}
function q(e2, a = 1) {
  const s3 = e2.a, n4 = B(e2), r = n4.h, o2 = n4.s / a, i = 100 - (100 - n4.v) / a, { r: c2, g: p3, b: u3 } = U({ h: r, s: o2, v: i });
  return [c2, p3, u3, s3];
}
function I(e2) {
  var _a;
  return "water" === e2.type ? null == e2.color ? null : e2.color : null == ((_a = e2.material) == null ? void 0 : _a.color) ? null : e2.material.color;
}
function Z(e2, t2 = 0) {
  const l3 = I(e2);
  if (!l3) {
    if ("fill" === e2.type) return null;
    const l4 = b.r, a2 = h2(l4, t2);
    return [a2, a2, a2, 100];
  }
  const a = l3.toRgba();
  for (let s3 = 0; s3 < 3; s3++) a[s3] = h2(a[s3], t2);
  return a;
}
async function H(t2, l3) {
  const a = t2.style;
  if ("none" === a) return null;
  return { type: "pattern", x: 0, y: 0, src: await f(n2(`esri/symbols/patterns/${a}.png`), l3.toCss(true)), width: 5, height: 5 };
}
function N(e2) {
  return e2.outline ? R(e2) : { color: "rgba(0, 0, 0, 1)", width: 1.5 };
}
function T(e2, t2) {
  const l3 = I(e2);
  if (!l3) return null;
  let a = "rgba(";
  return a += h2(l3.r, t2) + ",", a += h2(l3.g, t2) + ",", a += h2(l3.b, t2) + ",", a + l3.a + ");";
}
function W(e2, t2) {
  const l3 = T(e2, t2);
  if (!l3) return {};
  if ("pattern" in e2 && null != e2.pattern && "style" === e2.pattern.type && "none" === e2.pattern.style) return null;
  return { color: l3, width: Math.min(e2.size ? u(e2.size) : 0.75, U2), style: "pattern" in e2 && null != e2.pattern && "style" === e2.pattern.type ? w(e2.pattern.style) : null, cap: "cap" in e2 ? e2.cap : null, join: "join" in e2 ? "miter" === e2.join ? u(2) : e2.join : null };
}
function F(e2, t2, l3) {
  const a = null != l3 ? 0.75 * l3 : 0;
  return { type: "linear", x1: a ? 0.25 * a : 0, y1: a ? 0.5 * a : 0, x2: a || 4, y2: a ? 0.5 * a : 4, colors: [{ color: e2, offset: 0 }, { color: t2, offset: 1 }] };
}
function $(e2) {
  const t2 = e2.depth, l3 = e2.height, a = e2.width;
  return 0 !== a && 0 !== t2 && 0 !== l3 && a === t2 && null != a && null != l3 && a < l3;
}
function A(e2, t2, l3) {
  var _a, _b;
  const a = [];
  if (!e2) return a;
  switch (e2.type) {
    case "icon": {
      const l4 = 0, s3 = 0, n4 = t2, r = t2;
      switch (((_a = e2.resource) == null ? void 0 : _a.primitive) ?? j) {
        case "circle":
          a.push({ shape: { type: "circle", cx: 0, cy: 0, r: 0.5 * t2 }, fill: Z(e2, 0), stroke: R(e2) });
          break;
        case "square":
          a.push({ shape: { type: "path", path: [{ command: "M", values: [l4, r] }, { command: "L", values: [l4, s3] }, { command: "L", values: [n4, s3] }, { command: "L", values: [n4, r] }, { command: "Z", values: [] }] }, fill: Z(e2, 0), stroke: R(e2) });
          break;
        case "triangle":
          a.push({ shape: { type: "path", path: [{ command: "M", values: [l4, r] }, { command: "L", values: [0.5 * n4, s3] }, { command: "L", values: [n4, r] }, { command: "Z", values: [] }] }, fill: Z(e2, 0), stroke: R(e2) });
          break;
        case "cross":
          a.push({ shape: { type: "path", path: [{ command: "M", values: [0.5 * n4, s3] }, { command: "L", values: [0.5 * n4, r] }, { command: "M", values: [l4, 0.5 * r] }, { command: "L", values: [n4, 0.5 * r] }] }, stroke: N(e2) });
          break;
        case "x":
          a.push({ shape: { type: "path", path: [{ command: "M", values: [l4, s3] }, { command: "L", values: [n4, r] }, { command: "M", values: [n4, s3] }, { command: "L", values: [l4, r] }] }, stroke: N(e2) });
          break;
        case "kite":
          a.push({ shape: { type: "path", path: [{ command: "M", values: [l4, 0.5 * r] }, { command: "L", values: [0.5 * n4, s3] }, { command: "L", values: [n4, 0.5 * r] }, { command: "L", values: [0.5 * n4, r] }, { command: "Z", values: [] }] }, fill: Z(e2, 0), stroke: R(e2) });
      }
      break;
    }
    case "object":
      switch (((_b = e2.resource) == null ? void 0 : _b.primitive) ?? d) {
        case "cone": {
          const s3 = F(Z(e2, 0), Z(e2, -0.6), l3 ? C : t2), n4 = l(t2, l3);
          a.push({ shape: n4[0], fill: s3 }, { shape: n4[1], fill: s3 });
          break;
        }
        case "inverted-cone": {
          const l4 = Z(e2, 0), s3 = F(l4, Z(e2, -0.6), t2), n4 = o(t2);
          a.push({ shape: n4[0], fill: s3 }, { shape: n4[1], fill: l4 });
          break;
        }
        case "cube": {
          const s3 = L(t2, l3);
          a.push({ shape: s3[0], fill: Z(e2, 0) }, { shape: s3[1], fill: Z(e2, -0.3) }, { shape: s3[2], fill: Z(e2, -0.5) });
          break;
        }
        case "cylinder": {
          const s3 = F(Z(e2, 0), Z(e2, -0.6), l3 ? C : t2), n4 = n3(t2, l3);
          a.push({ shape: n4[0], fill: s3 }, { shape: n4[1], fill: s3 }, { shape: n4[2], fill: Z(e2, 0) });
          break;
        }
        case "diamond": {
          const l4 = s2(t2);
          a.push({ shape: l4[0], fill: Z(e2, -0.3) }, { shape: l4[1], fill: Z(e2, 0) }, { shape: l4[2], fill: Z(e2, -0.3) }, { shape: l4[3], fill: Z(e2, -0.7) });
          break;
        }
        case "sphere": {
          const l4 = F(Z(e2, 0), Z(e2, -0.6));
          l4.x1 = 0, l4.y1 = 0, l4.x2 = 0.25 * t2, l4.y2 = 0.25 * t2, a.push({ shape: { type: "circle", cx: 0, cy: 0, r: 0.5 * t2 }, fill: l4 });
          break;
        }
        case "tetrahedron": {
          const l4 = u2(t2);
          a.push({ shape: l4[0], fill: Z(e2, -0.3) }, { shape: l4[1], fill: Z(e2, 0) }, { shape: l4[2], fill: Z(e2, -0.6) });
          break;
        }
      }
      break;
  }
  return a;
}
function B2(e2) {
  const t2 = "number" == typeof (e2 == null ? void 0 : e2.size) ? e2 == null ? void 0 : e2.size : null;
  return t2 ? u(t2) : null;
}
function G(e2) {
  return "icon" === e2.type ? "multiply" : "tint";
}
async function J(e2, t2) {
  const l3 = B2(t2), a = (t2 == null ? void 0 : t2.maxSize) ? u(t2.maxSize) : null, r = (t2 == null ? void 0 : t2.disableUpsampling) ?? false, o2 = e2.symbolLayers, i = [], c2 = [];
  let p3 = false, u3 = 0, h3 = 0, m2 = 0;
  o2.forEach((s3) => {
    var _a, _b, _c, _d;
    if ("icon" !== s3.type && "object" !== s3.type) return;
    s3 && "icon" === s3.type && (m2 = Math.max(s3.size && u(s3.size), m2));
    const o3 = "icon" === s3.type ? s3.size && u(s3.size) : 0, f3 = l3 || o3 ? Math.ceil(Math.min(l3 || o3, a || D)) : P;
    let y3 = "icon" === s3.type ? s3.angle : null;
    if (null != (t2 == null ? void 0 : t2.rotation) && (y3 = (y3 ?? 0) + t2.rotation), c2.push(y3), (_a = s3 == null ? void 0 : s3.resource) == null ? void 0 : _a.href) {
      const t3 = E(e2, s3).then((e3) => {
        var _a2;
        const t4 = (_a2 = s3 == null ? void 0 : s3.material) == null ? void 0 : _a2.color, l4 = G(s3);
        return d2(e3, f3, t4, l4, r);
      }).then((e3) => {
        const t4 = e3.width, l4 = e3.height;
        return u3 = Math.max(u3, t4), h3 = Math.max(h3, l4), y3 && (p3 = true), [{ shape: { type: "image", x: 0, y: 0, width: t4, height: l4, src: e3.url }, fill: null, stroke: null }];
      });
      i.push(t3);
    } else {
      let e3 = f3;
      "icon" === s3.type && l3 && (e3 = f3 * (o3 / m2));
      const a2 = "tall" === (t2 == null ? void 0 : t2.symbolConfig) || ((_b = t2 == null ? void 0 : t2.symbolConfig) == null ? void 0 : _b.isTall) || "object" === s3.type && $(s3);
      u3 = Math.max(u3, a2 ? C : e3), h3 = Math.max(h3, e3), y3 && ((_c = s3.resource) == null ? void 0 : _c.primitive) && ["square", "triangle", "x"].includes((_d = s3.resource) == null ? void 0 : _d.primitive) && (p3 = true), i.push(Promise.resolve(A(s3, e3, a2)));
    }
  });
  const f2 = await Promise.allSettled(i), y2 = [];
  return f2.forEach((e3) => {
    "fulfilled" === e3.status ? y2.push(e3.value) : e3.reason && n.getLogger("esri.symbols.support.previewSymbol3D").warn("error while building swatchInfo!", e3.reason);
  }), l2(y2, [u3, h3], { node: t2 == null ? void 0 : t2.node, scale: false, opacity: t2 == null ? void 0 : t2.opacity, ariaLabel: t2 == null ? void 0 : t2.ariaLabel, rotations: c2, useRotationSize: p3 });
}
function K(e2, t2) {
  const l3 = e2.symbolLayers, a = [], s3 = y(e2), r = B2(t2), o2 = ((t2 == null ? void 0 : t2.maxSize) ? u(t2.maxSize) : null) || U2;
  let i, c2 = 0, p3 = 0;
  return l3.forEach((e3, t3) => {
    if (!e3) return;
    if ("line" !== e3.type && "path" !== e3.type) return;
    const l4 = [];
    switch (e3.type) {
      case "line": {
        const a2 = W(e3, 0);
        if (null == a2) break;
        const s4 = (a2 == null ? void 0 : a2.width) || 0;
        0 === t3 && (i = s4);
        const n4 = Math.min(r || s4, o2), u3 = 0 === t3 ? n4 : r ? n4 * (s4 / i) : n4, h3 = u3 > O / 2 ? 2 * u3 : O;
        p3 = Math.max(p3, u3), c2 = Math.max(c2, h3), a2.width = u3, l4.push({ shape: { type: "path", path: [{ command: "M", values: [0, 0.5 * p3] }, { command: "L", values: [c2, 0.5 * p3] }] }, stroke: a2 });
        break;
      }
      case "path": {
        const t4 = Math.min(r || P, o2), a2 = Z(e3, 0), s4 = Z(e3, -0.2), n4 = T(e3, -0.4), i2 = n4 ? { color: n4, width: 1 } : {};
        if ("quad" === e3.profile) {
          const t5 = e3.width, n5 = e3.height, r2 = m(t5 && n5 ? t5 / n5 : 1, 0 === n5, 0 === t5), o3 = { ...i2, join: "bevel" };
          l4.push({ shape: r2[0], fill: s4, stroke: o3 }, { shape: r2[1], fill: s4, stroke: o3 }, { shape: r2[2], fill: a2, stroke: o3 });
        } else l4.push({ shape: e.pathSymbol3DLayer[0], fill: s4, stroke: i2 }, { shape: e.pathSymbol3DLayer[1], fill: a2, stroke: i2 });
        p3 = Math.max(p3, t4), c2 = p3;
      }
    }
    a.push(l4);
  }), Promise.resolve(l2(a, [c2, p3], { node: t2 == null ? void 0 : t2.node, scale: s3, opacity: t2 == null ? void 0 : t2.opacity, ariaLabel: t2 == null ? void 0 : t2.ariaLabel }));
}
async function Q(e2, t2) {
  const l3 = "mesh-3d" === e2.type, a = e2.symbolLayers, s3 = B2(t2), r = (t2 == null ? void 0 : t2.maxSize) ? u(t2.maxSize) : null, o2 = s3 || P, i = [];
  let c2 = 0, p3 = 0, u3 = false;
  for (let n4 = 0; n4 < a.length; n4++) {
    const e3 = a.at(n4), t3 = [];
    if (!l3 || "fill" === e3.type) {
      switch (e3.type) {
        case "fill": {
          const a2 = Math.min(o2, r || D);
          if (c2 = Math.max(c2, a2), p3 = Math.max(p3, a2), u3 = true, l3) {
            const l4 = e.meshSymbol3DFill, a3 = T(e3, -0.4), s4 = a3 ? { color: a3, width: 1, join: "round" } : {};
            t3.push({ shape: l4[0], fill: Z(e3, 0), stroke: s4 }, { shape: l4[1], fill: Z(e3, -0.2), stroke: s4 }, { shape: l4[2], fill: Z(e3, -0.6), stroke: s4 });
          } else {
            let l4 = Z(e3, 0);
            const a3 = "pattern" in e3 ? e3.pattern : null, s4 = R(e3), n5 = I(e3);
            null != a3 && "style" === a3.type && "solid" !== a3.style && n5 && (l4 = await H(a3, n5)), t3.push({ shape: e.fill[0], fill: l4, stroke: s4 });
          }
          break;
        }
        case "line": {
          const l4 = W(e3, 0);
          if (null == l4) break;
          const a2 = { stroke: l4, shape: e.fill[0] };
          c2 = Math.max(c2, P), p3 = Math.max(p3, P), t3.push(a2);
          break;
        }
        case "extrude": {
          const l4 = { join: "round", width: 1, ...W(e3, -0.4) }, a2 = Z(e3, 0), s4 = Z(e3, -0.2), n5 = Math.min(o2, r || D), i2 = c(n5);
          l4.width = 1, t3.push({ shape: i2[0], fill: s4, stroke: l4 }, { shape: i2[1], fill: s4, stroke: l4 }, { shape: i2[2], fill: a2, stroke: l4 });
          const u4 = P, h3 = 0.7 * P + 0.5 * n5;
          c2 = Math.max(c2, u4), p3 = Math.max(p3, h3);
          break;
        }
        case "water": {
          const l4 = I(e3), a2 = q(l4), s4 = q(l4, 2), n5 = q(l4, 3), i2 = p2();
          u3 = true, t3.push({ shape: i2[0], fill: a2 }, { shape: i2[1], fill: s4 }, { shape: i2[2], fill: n5 });
          const h3 = Math.min(o2, r || D);
          c2 = Math.max(c2, h3), p3 = Math.max(p3, h3);
          break;
        }
      }
      i.push(t3);
    }
  }
  return l2(i, [c2, p3], { node: t2 == null ? void 0 : t2.node, scale: u3, opacity: t2 == null ? void 0 : t2.opacity, ariaLabel: t2 == null ? void 0 : t2.ariaLabel });
}
function V(e2, t2) {
  if (0 === e2.symbolLayers.length) return Promise.reject(new s("symbolPreview: renderPreviewHTML3D", "No symbolLayers in the symbol."));
  switch (e2.type) {
    case "point-3d":
      return J(e2, t2);
    case "line-3d":
      return K(e2, t2);
    case "polygon-3d":
    case "mesh-3d":
      return Q(e2, t2);
  }
  return Promise.reject(new s("symbolPreview: swatchInfo3D", "symbol not supported."));
}

export {
  Z,
  H,
  B2 as B,
  V
};
//# sourceMappingURL=chunk-2O3Y66HW.js.map
