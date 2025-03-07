import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  ot,
  t
} from "./chunk-F7TCEOHX.js";
import {
  b
} from "./chunk-M6FNW7GP.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/imageUtils.js
var i = null;
var o = true;
function s2(t2, e, r) {
  if (!t2 || !e) throw new Error("Cannot construct image data without dimensions");
  if (o) try {
    return new ImageData(t2, e);
  } catch (a) {
    o = false;
  }
  return m(t2, e, r);
}
function c(t2, e, r, a) {
  if (!e || !r) throw new Error("Cannot construct image data without dimensions");
  if (o) try {
    return new ImageData(t2, e, r);
  } catch (i2) {
    o = false;
  }
  const n = m(e, r, a);
  return n.data.set(t2, 0), n;
}
function f() {
  return i || (i = document.createElement("canvas"), i.width = 1, i.height = 1), i;
}
function m(t2, e, r) {
  return r || (r = f()), r.getContext("2d").createImageData(t2, e);
}
async function u(a, n) {
  const i2 = window.URL.createObjectURL(a);
  try {
    const { data: e } = await P(i2, { ...n, responseType: "image" });
    return e;
  } catch (o2) {
    if (!b(o2)) throw new s("invalid-image", `Could not fetch requested image at ${i2}`);
    throw o2;
  } finally {
    window.URL.revokeObjectURL(i2);
  }
}
async function p(t2, e) {
  const { arrayBuffer: r, mediaType: a } = await d(t2, e), n = "image/png" === a;
  if ("image/gif" === a) {
    const { isAnimatedGIF: t3, parseGif: a2 } = await import("./gif-J2LQCNHK.js");
    if (t3(r)) return a2(r, e);
  }
  if (n) {
    const { isAnimatedPNG: t3, parseApng: a2 } = await import("./apng-2VWQILKS.js");
    if (t3(r)) return a2(r, e);
  }
  return u(new Blob([r], { type: a }), e);
}
async function d(e, r) {
  var _a;
  const i2 = ot(e);
  if (i2 == null ? void 0 : i2.isBase64) return { arrayBuffer: t(i2.data), mediaType: i2.mediaType };
  const o2 = await P(e, { responseType: "array-buffer", ...r });
  return { arrayBuffer: o2.data, mediaType: ((_a = o2.getHeader) == null ? void 0 : _a.call(o2, "Content-Type")) ?? "" };
}

export {
  s2 as s,
  c,
  p
};
//# sourceMappingURL=chunk-XJOBEGIR.js.map
