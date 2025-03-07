import {
  l,
  o,
  r as r2
} from "./chunk-BV7O6P7Z.js";
import {
  r
} from "./chunk-6P7HXSJ6.js";
import {
  s
} from "./chunk-4LTV6KQ5.js";

// node_modules/@arcgis/core/Color.js
function a(t) {
  return r(s(t), 0, 255);
}
function n(t, r3, s2) {
  return t = Number(t), isNaN(t) ? s2 : t < r3 ? r3 : t > s2 ? s2 : t;
}
function o2(t, r3) {
  const s2 = t.toString(16).padStart(2, "0");
  return r3 ? s2.slice(0, 1) : s2;
}
var h = class _h {
  static blendColors(t, r3, s2, e = new _h()) {
    return e.r = Math.round(t.r + (r3.r - t.r) * s2), e.g = Math.round(t.g + (r3.g - t.g) * s2), e.b = Math.round(t.b + (r3.b - t.b) * s2), e.a = t.a + (r3.a - t.a) * s2, e._sanitize();
  }
  static fromRgb(r3, s2) {
    const e = r3.toLowerCase().match(/^(rgba?|hsla?)\(([\s.\-,%0-9]+)\)/);
    if (e) {
      const r4 = e[2].split(/\s*,\s*/), i = e[1];
      if ("rgb" === i && 3 === r4.length || "rgba" === i && 4 === r4.length) {
        const t = r4[0];
        if ("%" === t.charAt(t.length - 1)) {
          const t2 = r4.map((t3) => 2.56 * parseFloat(t3));
          return 4 === r4.length && (t2[3] = parseFloat(r4[3])), _h.fromArray(t2, s2);
        }
        return _h.fromArray(r4.map((t2) => parseFloat(t2)), s2);
      }
      if ("hsl" === i && 3 === r4.length || "hsla" === i && 4 === r4.length) return _h.fromArray(o(parseFloat(r4[0]), parseFloat(r4[1]) / 100, parseFloat(r4[2]) / 100, parseFloat(r4[3])), s2);
    }
    return null;
  }
  static fromHex(t, r3 = new _h()) {
    if ("#" !== t[0] || isNaN(Number(`0x${t.slice(1)}`))) return null;
    switch (t.length) {
      case 4:
      case 5: {
        const s2 = parseInt(t.slice(1, 2), 16), e = parseInt(t.slice(2, 3), 16), i = parseInt(t.slice(3, 4), 16), a2 = 5 === t.length ? 15 : parseInt(t.slice(4), 16);
        return _h.fromArray([s2 + 16 * s2, e + 16 * e, i + 16 * i, (a2 + 16 * a2) / 255], r3);
      }
      case 7:
      case 9: {
        const s2 = parseInt(t.slice(1, 3), 16), e = parseInt(t.slice(3, 5), 16), i = parseInt(t.slice(5, 7), 16), a2 = 7 === t.length ? 255 : parseInt(t.slice(7), 16);
        return _h.fromArray([s2, e, i, a2 / 255], r3);
      }
      default:
        return null;
    }
  }
  static fromArray(t, r3 = new _h()) {
    return r3._set(Number(t[0]), Number(t[1]), Number(t[2]), Number(t[3])), isNaN(r3.a) && (r3.a = 1), r3._sanitize();
  }
  static fromString(t, e) {
    const i = r2(t) ? l(t) : null;
    return i && _h.fromArray(i, e) || _h.fromRgb(t, e) || _h.fromHex(t, e);
  }
  static fromJSON(t) {
    return null != t ? new _h([t[0], t[1], t[2], (t[3] ?? 255) / 255]) : void 0;
  }
  static toUnitRGB(t) {
    return null != t ? [t.r / 255, t.g / 255, t.b / 255] : null;
  }
  static toUnitRGBA(t) {
    return null != t ? [t.r / 255, t.g / 255, t.b / 255, null != t.a ? t.a : 1] : null;
  }
  constructor(t) {
    this.r = 255, this.g = 255, this.b = 255, this.a = 1, t && this.setColor(t);
  }
  get isBright() {
    return 0.299 * this.r + 0.587 * this.g + 0.114 * this.b >= 127;
  }
  setColor(t) {
    return "string" == typeof t ? _h.fromString(t, this) : Array.isArray(t) ? _h.fromArray(t, this) : (this._set(t.r ?? 0, t.g ?? 0, t.b ?? 0, t.a ?? 1), t instanceof _h || this._sanitize()), this;
  }
  toRgb() {
    return [this.r, this.g, this.b];
  }
  toRgba() {
    return [this.r, this.g, this.b, this.a];
  }
  toHex(t) {
    const r3 = (t == null ? void 0 : t.capitalize) ?? false, s2 = (t == null ? void 0 : t.digits) ?? 6, e = 3 === s2 || 4 === s2, i = 4 === s2 || 8 === s2, a2 = `#${o2(this.r, e)}${o2(this.g, e)}${o2(this.b, e)}${i ? o2(Math.round(255 * this.a), e) : ""}`;
    return r3 ? a2.toUpperCase() : a2;
  }
  toCss(t = false) {
    const r3 = this.r + ", " + this.g + ", " + this.b;
    return t ? `rgba(${r3}, ${this.a})` : `rgb(${r3})`;
  }
  toString() {
    return this.toCss(true);
  }
  toJSON() {
    return this.toArray();
  }
  toArray(t = _h.AlphaMode.ALWAYS) {
    const r3 = a(this.r), s2 = a(this.g), e = a(this.b);
    return t === _h.AlphaMode.ALWAYS || 1 !== this.a ? [r3, s2, e, a(255 * this.a)] : [r3, s2, e];
  }
  clone() {
    return new _h(this.toRgba());
  }
  hash() {
    return this.r << 24 | this.g << 16 | this.b << 8 | 255 * this.a;
  }
  equals(t) {
    return null != t && t.r === this.r && t.g === this.g && t.b === this.b && t.a === this.a;
  }
  _sanitize() {
    return this.r = Math.round(n(this.r, 0, 255)), this.g = Math.round(n(this.g, 0, 255)), this.b = Math.round(n(this.b, 0, 255)), this.a = n(this.a, 0, 1), this;
  }
  _set(t, r3, s2, e) {
    this.r = t, this.g = r3, this.b = s2, this.a = e;
  }
};
h.prototype.declaredClass = "esri.Color", function(t) {
  var r3;
  (r3 = t.AlphaMode || (t.AlphaMode = {}))[r3.ALWAYS = 0] = "ALWAYS", r3[r3.UNLESS_OPAQUE = 1] = "UNLESS_OPAQUE";
}(h);

export {
  h
};
//# sourceMappingURL=chunk-3UHB6K6P.js.map
