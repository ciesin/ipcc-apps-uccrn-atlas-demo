import {
  r
} from "./chunk-6P7HXSJ6.js";

// node_modules/@arcgis/core/views/support/screenshotUtils.js
var h = 2048;
var i = 1.5;
var e = 8;
function o(h2, i2) {
  const { format: e2, quality: o2, rotation: n2, disableDecorations: a2 } = h2 || {}, r3 = b(h2, i2.padding), l2 = p(h2, { width: i2.width - r3.left - r3.right, height: i2.height - r3.top - r3.bottom }), { width: g2, height: f2 } = m(h2, l2), d2 = j(e2), u2 = R[d2];
  return { format: d2, quality: r(null != o2 ? o2 : u2, 0, 100), area: l2, width: g2, height: f2, rotation: n2, disableDecorations: !!a2, ignoreBackground: !!(h2 == null ? void 0 : h2.ignoreBackground), ignorePadding: !!(h2 == null ? void 0 : h2.ignorePadding) };
}
function n(t, h2) {
  const i2 = o(t, h2), e2 = i2.area, n2 = i2.width / e2.width, a2 = b(i2, h2.padding), r3 = a2.left + a2.right, l2 = a2.top + a2.bottom, g2 = h2.width - r3, f2 = h2.height - l2, d2 = Math.floor(g2 * n2 + r3), u2 = Math.floor(f2 * n2 + l2), c2 = (t == null ? void 0 : t.layers) ?? [], s3 = i2.ignoreBackground, w2 = i2.ignorePadding;
  return { framebufferWidth: d2, framebufferHeight: u2, region: { x: Math.floor(e2.x * n2) + a2.left, y: Math.floor(e2.y * n2) + a2.top, width: i2.width, height: i2.height }, format: i2.format, quality: i2.quality, rotation: i2.rotation, pixelRatio: n2, layers: c2, disableDecorations: i2.disableDecorations, ignoreBackground: s3, ignorePadding: w2, objectAndLayerIdColor: false };
}
function a(t, h2, i2) {
  const { ctx: e2, canvas: o2 } = l(t, i2), n2 = e2.getImageData(0, 0, t.width, t.height), a2 = u(o2, h2);
  return g(o2), { dataUrl: a2, data: n2 };
}
function r2(t, h2) {
  const { ctx: i2, canvas: e2 } = l(t, h2), o2 = i2.getImageData(0, 0, t.width, t.height);
  return g(e2), o2;
}
function l(t, h2) {
  const i2 = f();
  h2.premultipliedAlpha && q(t), i2.width = t.width, i2.height = t.height;
  const e2 = i2.getContext("2d", { willReadFrequently: true });
  return e2.putImageData(t, 0, 0), h2.flipY && D(e2), { ctx: e2, canvas: i2 };
}
function g(t) {
  t.width = 0, t.height = 0;
}
function f() {
  return null == d && (d = document.createElement("canvas")), d;
}
var d = null;
function u(t, h2) {
  const i2 = v[h2.format], e2 = h2.quality / 100;
  return t.toDataURL(i2, e2);
}
function c(h2, i2) {
  const e2 = j(h2), o2 = R[e2];
  return { format: e2, quality: r(null != i2 ? i2 : o2, 0, 100) };
}
function s2(t, h2) {
  return h2 / Math.max(t[0], t[1]);
}
function w(t, h2, i2, e2 = 0, o2 = 0, n2 = t.width - e2, a2 = t.height - o2, r3 = false) {
  const { data: l2 } = t, { width: g2, height: f2, data: d2 } = h2, u2 = n2 / g2, c2 = a2 / f2, s3 = Math.ceil(u2 / 2), w2 = Math.ceil(c2 / 2), M2 = t.width;
  for (let m2 = 0; m2 < f2; m2++) for (let t2 = 0; t2 < g2; t2++) {
    const h3 = 4 * (t2 + (r3 ? f2 - m2 - 1 : m2) * g2);
    let n3 = 0, a3 = 0, p2 = 0, x2 = 0, y2 = 0, b2 = 0;
    const j2 = (m2 + 0.5) * c2;
    for (let r4 = Math.floor(m2 * c2); r4 < (m2 + 1) * c2; r4++) {
      const h4 = Math.abs(j2 - (r4 + 0.5)) / w2, g3 = (t2 + 0.5) * u2, f3 = h4 * h4;
      for (let d3 = Math.floor(t2 * u2); d3 < (t2 + 1) * u2; d3++) {
        const t3 = Math.abs(g3 - (d3 + 0.5)) / s3, h5 = Math.sqrt(f3 + t3 * t3);
        if (h5 >= 1) continue;
        let u3 = 2 * h5 * h5 * h5 - 3 * h5 * h5 + 1;
        const c3 = 4 * (e2 + d3 + (o2 + r4) * M2);
        b2 += u3 * l2[c3 + 3], a3 += u3, !i2 && l2[c3 + 3] < 255 && (u3 = u3 * l2[c3 + 3] / 255), p2 += u3 * l2[c3], x2 += u3 * l2[c3 + 1], y2 += u3 * l2[c3 + 2], n3 += u3;
      }
    }
    d2[h3] = p2 / n3, d2[h3 + 1] = x2 / n3, d2[h3 + 2] = y2 / n3, d2[h3 + 3] = b2 / a3;
  }
  return h2;
}
function M(t, o2, n2) {
  if (!o2) return t;
  const { framebufferWidth: a2, framebufferHeight: r3, pixelRatio: l2, region: g2 } = t, f2 = b(t, n2), d2 = f2.left + f2.right, u2 = f2.top + f2.bottom, c2 = a2 - d2, s3 = r3 - u2, w2 = Math.min(e, Math.min((h - d2) / c2, (h - u2) / s3));
  return w2 < i ? t : { ...t, framebufferWidth: Math.round(c2 * w2) + d2, framebufferHeight: Math.round(s3 * w2) + u2, pixelRatio: l2 * w2, resample: { region: { x: Math.round((g2.x - f2.left) * w2) + f2.left, y: Math.round((g2.y - f2.top) * w2) + f2.top, width: Math.round(g2.width * w2), height: Math.round(g2.height * w2) }, width: a2, height: r3 } };
}
function m(t, h2) {
  if (!t) return h2;
  const i2 = t.width, e2 = t.height;
  if (null != i2 && null != e2) return { width: Math.floor(i2), height: Math.floor(e2) };
  if (null == i2 && null == e2) return h2;
  const o2 = h2.width / h2.height;
  return null == e2 ? { width: Math.floor(i2), height: Math.floor(i2 / o2) } : { width: Math.floor(e2 * o2), height: Math.floor(e2) };
}
function p(t, h2) {
  const i2 = { x: 0, y: 0, width: h2.width, height: h2.height };
  if (t == null ? void 0 : t.area) {
    null != t.area.x && (i2.x = Math.floor(t.area.x)), null != t.area.y && (i2.y = Math.floor(t.area.y));
    const e2 = null != t.area.width ? Math.floor(t.area.width) : null, o2 = null != t.area.height ? Math.floor(t.area.height) : null;
    if (i2.width = h2.width - i2.x, i2.height = h2.height - i2.y, null != e2 && null != o2) i2.width = Math.min(i2.width, e2), i2.height = Math.min(i2.height, o2);
    else if (null == e2 && null != o2) {
      const t2 = Math.min(i2.width, e2);
      i2.height = t2 / i2.width * i2.height, i2.width = t2;
    } else if (null != e2 && null == o2) {
      const t2 = Math.min(i2.height, o2);
      i2.width = t2 / i2.height * i2.width, i2.height = t2;
    }
  }
  return x(y(i2, t), h2);
}
function x(t, h2) {
  const i2 = Math.floor(Math.max(t.x, 0)), e2 = Math.floor(Math.max(t.y, 0)), o2 = { x: i2, y: e2, width: Math.floor(Math.min(t.width, h2.width - i2)), height: Math.floor(Math.min(t.height, h2.height - e2)) }, n2 = o2.width / o2.height, a2 = t.width / t.height;
  if (a2 === n2) return o2;
  if (a2 > n2) {
    const t2 = Math.floor(o2.width / a2), h3 = o2.height - t2;
    return { x: o2.x, y: Math.floor(o2.y + h3 / 2), width: o2.width, height: t2 };
  }
  const r3 = Math.floor(o2.height * a2), l2 = o2.width - r3;
  return { x: Math.floor(o2.x + l2 / 2), y: o2.y, width: r3, height: o2.height };
}
function y(t, h2) {
  if (null == (h2 == null ? void 0 : h2.width) || null == h2.height) return t;
  const i2 = h2.width / h2.height, e2 = t.width / t.height;
  if (e2 === i2) return t;
  if (e2 < i2) {
    const h3 = Math.floor(t.height * i2);
    return t.x -= (h3 - t.width) / 2, t.width = h3, t;
  }
  const o2 = Math.floor(t.width / i2);
  return t.y -= (o2 - t.height) / 2, t.height = o2, t;
}
function b(t, h2) {
  return !h2 || (t == null ? void 0 : t.ignorePadding) ? k : h2;
}
function j(t) {
  switch (t) {
    case "png":
    case "jpg":
    case "jpeg":
      return t;
    default:
      return P;
  }
}
function D(t) {
  t.save(), t.globalCompositeOperation = "copy", t.scale(1, -1), t.translate(0, -t.canvas.height), t.drawImage(t.canvas, 0, 0), t.restore();
}
function q(t) {
  const h2 = t.data, i2 = h2.length;
  for (let e2 = 0; e2 < i2; e2 += 4) {
    const t2 = h2[e2 + 3];
    if (255 !== t2 && t2 > 0) {
      const i3 = 255 / t2;
      h2[e2] = h2[e2] * i3, h2[e2 + 1] = h2[e2 + 1] * i3, h2[e2 + 2] = h2[e2 + 2] * i3;
    }
  }
}
var v = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg" };
var I = 98;
var P = "png";
var R = { png: 100, jpg: I, jpeg: I };
var k = { top: 0, right: 0, bottom: 0, left: 0 };

export {
  o,
  n,
  a,
  r2 as r,
  u,
  c,
  s2 as s,
  w,
  M
};
//# sourceMappingURL=chunk-BJ33GWVC.js.map
