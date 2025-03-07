import {
  i
} from "./chunk-V7B4KA6P.js";
import {
  ht,
  te,
  ut
} from "./chunk-UQQJEYZO.js";
import {
  R,
  T
} from "./chunk-VCN3W5DR.js";
import {
  y
} from "./chunk-N4Z2ZQI6.js";
import {
  V
} from "./chunk-BTTTF5H4.js";

// node_modules/@arcgis/core/symbols/cim/CIMSymbolRasterizer.js
var o = 96 / 72;
var l = class {
  constructor(t) {
    this._spatialReference = t, this._imageDataCanvas = null, this._cimResourceManager = new i();
  }
  get _canvas() {
    return this._imageDataCanvas || (this._imageDataCanvas = document.createElement("canvas")), this._imageDataCanvas;
  }
  get resourceManager() {
    return this._cimResourceManager;
  }
  async rasterizeCIMSymbolAsync(e, t, i2, s, o2, l2, m2, g, y2, d) {
    if (!e) return null;
    const { data: w } = e;
    if (!w || "CIMSymbolReference" !== w.type || !w.symbol) return null;
    const { symbol: u } = w;
    l2 || (l2 = V(u));
    const x = await y.resolveSymbolOverrides(w, t, this._spatialReference, o2, l2, m2, g), f = this._cimResourceManager, p = [];
    te.fetchResources(x, f, p), te.fetchFonts(x, f, p), p.length > 0 && await Promise.all(p);
    const { width: b, height: M } = i2;
    let C = c(l2, b, M, s, d);
    const R2 = te.getEnvelope(x, C, f);
    if (!R2) return null;
    R2.x === 1 / 0 && (R2.x = b + 2), R2.y === 1 / 0 && (R2.y = -M / 2), R2.width === -1 / 0 && (R2.width = b), R2.height === -1 / 0 && (R2.height = M);
    let v = 1, I = 0, S = 0;
    switch (u.type) {
      case "CIMPointSymbol":
      case "CIMTextSymbol":
        {
          let e2 = 1;
          R2.width > b && (e2 = b / R2.width);
          let t2 = 1;
          R2.height > M && (t2 = M / R2.height), "preview" === s && (R2.width < b && (e2 = b / R2.width), R2.height < M && (t2 = M / R2.height)), v = Math.min(e2, t2), I = R2.x + R2.width / 2, S = R2.y + R2.height / 2;
        }
        break;
      case "CIMLineSymbol":
        if (d) {
          S = R2.y + R2.height / 2, I = R2.x + R2.width / 2;
          const e2 = R2.width - b, t2 = R2.height - M;
          C = { paths: T(C.paths, { xmin: -1 * R2.width / 2 + e2, xmax: R2.width / 2 - e2, ymin: -1 * R2.height / 2 + t2, ymax: R2.height / 2 - t2, width: R2.width - 2 * e2, height: R2.height - 2 * t2 }) };
        } else {
          (y2 || R2.height > M) && (v = M / R2.height), S = R2.y + R2.height / 2;
          const e2 = R2.x * v + b / 2, t2 = (R2.x + R2.width) * v + b / 2, { paths: i3 } = C;
          i3[0][0][0] -= e2 / v, i3[0][2][0] -= (t2 - b) / v;
        }
        break;
      case "CIMPolygonSymbol":
        if (d) {
          S = R2.y + R2.height / 2, I = R2.x + R2.width / 2;
          const e2 = R2.width - b, t2 = R2.height - M;
          C = { paths: T(C.rings, { xmin: -1 * R2.width / 2 + e2, xmax: R2.width / 2 - e2, ymin: -1 * R2.height / 2 + t2, ymax: R2.height / 2 - t2, width: R2.width - 2 * e2, height: R2.height - 2 * t2 }) };
        } else {
          I = R2.x + R2.width / 2, S = R2.y + R2.height / 2;
          const e2 = R2.x * v + b / 2, t2 = (R2.x + R2.width) * v + b / 2, i3 = R2.y * v + M / 2, h = (R2.y + R2.height) * v + M / 2, { rings: r } = C;
          e2 < 0 && (r[0][0][0] -= e2, r[0][3][0] -= e2, r[0][4][0] -= e2), i3 < 0 && (r[0][0][1] += i3, r[0][1][1] += i3, r[0][4][1] += i3), t2 > b && (r[0][1][0] -= t2 - b, r[0][2][0] -= t2 - b), h > M && (r[0][2][1] += h - M, r[0][3][1] += h - M);
        }
    }
    const _ = { type: "cim", data: { type: "CIMSymbolReference", symbol: x } };
    return this.rasterize(_, b, M, I, S, v, l2, 1, C);
  }
  rasterize(e, h, r, n, s, l2, m2, g = 0, y2 = null, d = window.devicePixelRatio || 1) {
    const { data: w } = e;
    if (!w || "CIMSymbolReference" !== w.type || !w.symbol) return null;
    const { symbol: u } = w, x = this._canvas, f = d * o;
    x.width = h * f, x.height = r * f, m2 || (m2 = V(u)), y2 || (y2 = c(m2, h, r, "legend")), x.width += 2 * g, x.height += 2 * g;
    const p = x.getContext("2d", { willReadFrequently: true }), b = ht.createIdentity();
    b.translate(-n, -s), b.scale(l2 * f, -l2 * f), b.translate(h * f / 2 + g, r * f / 2 + g), p.clearRect(0, 0, x.width, x.height);
    return new ut(p, this._cimResourceManager, b, true).drawSymbol(u, y2), p.getImageData(0, 0, x.width, x.height);
  }
};
function m(e, t, i2, h) {
  if ("esriGeometryPolygon" === t) {
    return { rings: R(T(e.rings, { xmin: 0, ymin: 0, xmax: i2, ymax: h, width: i2, height: h }), -1 * i2 / 2, -1 * h / 2) };
  }
  if ("esriGeometryPolyline" === t) {
    return { paths: R(T(e.paths, { xmin: 0, ymin: 0, xmax: i2, ymax: h, width: i2, height: h }), -1 * i2 / 2, -1 * h / 2) };
  }
  return null;
}
function c(e, t, i2, h, r) {
  const n = 1, s = -t / 2 + n, a = t / 2 - n, o2 = i2 / 2 - n, l2 = -i2 / 2 + n;
  if (r && ("esriGeometryPolygon" === e || "esriGeometryPolyline" === e)) {
    const h2 = m(r, e, t, i2);
    if (h2) return h2;
  }
  switch (e) {
    case "esriGeometryPoint":
      return { x: 0, y: 0 };
    case "esriGeometryPolyline":
      return { paths: [[[s, 0], [0, 0], [a, 0]]] };
    default:
      return "legend" === h ? { rings: [[[s, o2], [a, 0], [a, l2], [s, l2], [s, o2]]] } : { rings: [[[s, o2], [a, o2], [a, l2], [s, l2], [s, o2]]] };
  }
}

export {
  l
};
//# sourceMappingURL=chunk-FHPLFQA4.js.map
