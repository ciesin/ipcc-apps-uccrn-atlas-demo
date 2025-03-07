import {
  r,
  s
} from "./chunk-53ZTROGC.js";
import {
  e
} from "./chunk-JLFV7EBO.js";
import {
  l
} from "./chunk-BV7O6P7Z.js";

// node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f32.js
function e2() {
  const e5 = new Float32Array(16);
  return e5[0] = 1, e5[5] = 1, e5[10] = 1, e5[15] = 1, e5;
}
function r2(e5) {
  const r3 = new Float32Array(16);
  return r3[0] = e5[0], r3[1] = e5[1], r3[2] = e5[2], r3[3] = e5[3], r3[4] = e5[4], r3[5] = e5[5], r3[6] = e5[6], r3[7] = e5[7], r3[8] = e5[8], r3[9] = e5[9], r3[10] = e5[10], r3[11] = e5[11], r3[12] = e5[12], r3[13] = e5[13], r3[14] = e5[14], r3[15] = e5[15], r3;
}
function t(e5, r3, t3, n3, o3, a3, c3, u2, l4, f2, i, s3, y2, w, A, F) {
  const _ = new Float32Array(16);
  return _[0] = e5, _[1] = r3, _[2] = t3, _[3] = n3, _[4] = o3, _[5] = a3, _[6] = c3, _[7] = u2, _[8] = l4, _[9] = f2, _[10] = i, _[11] = s3, _[12] = y2, _[13] = w, _[14] = A, _[15] = F, _;
}
function n(e5, r3) {
  return new Float32Array(e5, r3, 16);
}
var o = e2();
var a = Object.freeze(Object.defineProperty({ __proto__: null, IDENTITY: o, clone: r2, create: e2, createView: n, fromValues: t }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/layers/effects/colorMatrixFunctions.js
var n2 = (n3, o3) => {
  const s3 = r(n3, o3, 0, 0, 0, 0, o3, 0, 0, 0, 0, o3, 0, 0, 0, 0, 1);
  return s(s3, s3);
};
var o2 = (n3, o3) => {
  const s3 = r(n3, o3, 0, 0, 0.5 - 0.5 * o3, 0, o3, 0, 0.5 - 0.5 * o3, 0, 0, o3, 0.5 - 0.5 * o3, 0, 0, 0, 1);
  return s(s3, s3);
};
var s2 = (n3, o3) => {
  const s3 = 1 - o3, c3 = r(n3, 0.2126 + 0.7874 * s3, 0.7152 - 0.7152 * s3, 0.0722 - 0.0722 * s3, 0, 0.2126 - 0.2126 * s3, 0.7152 + 0.2848 * s3, 0.0722 - 0.0722 * s3, 0, 0.2126 - 0.2126 * s3, 0.7152 - 0.7152 * s3, 0.0722 + 0.9278 * s3, 0, 0, 0, 0, 1);
  return s(c3, c3);
};
var c = (n3, o3) => {
  const s3 = Math.sin(o3 * Math.PI / 180), c3 = Math.cos(o3 * Math.PI / 180), e5 = r(n3, 0.213 + 0.787 * c3 - 0.213 * s3, 0.715 - 0.715 * c3 - 0.715 * s3, 0.072 - 0.072 * c3 + 0.928 * s3, 0, 0.213 - 0.213 * c3 + 0.143 * s3, 0.715 + 0.285 * c3 + 0.14 * s3, 0.072 - 0.072 * c3 - 0.283 * s3, 0, 0.213 - 0.213 * c3 - 0.787 * s3, 0.715 - 0.715 * c3 + 0.715 * s3, 0.072 + 0.928 * c3 + 0.072 * s3, 0, 0, 0, 0, 1);
  return s(e5, e5);
};
var e3 = (n3, o3) => {
  const s3 = 1 - 2 * o3, c3 = r(n3, s3, 0, 0, o3, 0, s3, 0, o3, 0, 0, s3, o3, 0, 0, 0, 1);
  return s(c3, c3);
};
var a2 = (n3, o3) => {
  const s3 = r(n3, 0.213 + 0.787 * o3, 0.715 - 0.715 * o3, 0.072 - 0.072 * o3, 0, 0.213 - 0.213 * o3, 0.715 + 0.285 * o3, 0.072 - 0.072 * o3, 0, 0.213 - 0.213 * o3, 0.715 - 0.715 * o3, 0.072 + 0.928 * o3, 0, 0, 0, 0, 1);
  return s(s3, s3);
};
var u = (n3, o3) => {
  const s3 = 1 - o3, c3 = r(n3, 0.393 + 0.607 * s3, 0.769 - 0.769 * s3, 0.189 - 0.189 * s3, 0, 0.349 - 0.349 * s3, 0.686 + 0.314 * s3, 0.168 - 0.168 * s3, 0, 0.272 - 0.272 * s3, 0.534 - 0.534 * s3, 0.131 + 0.869 * s3, 0, 0, 0, 0, 1);
  return s(c3, c3);
};

// node_modules/@arcgis/core/layers/effects/effects.js
var c2 = class _c {
  constructor(t3, s3, r3) {
    this.strength = t3, this.radius = s3, this.threshold = r3, this.type = "bloom";
  }
  interpolate(t3, s3, r3) {
    this.strength = M(t3.strength, s3.strength, r3), this.radius = M(t3.radius, s3.radius, r3), this.threshold = M(t3.threshold, s3.threshold, r3);
  }
  clone() {
    return new _c(this.strength, this.radius, this.threshold);
  }
  toJSON() {
    return { type: "bloom", radius: y(this.radius), strength: this.strength, threshold: this.threshold };
  }
};
var l2 = class _l {
  constructor(t3) {
    this.radius = t3, this.type = "blur";
  }
  interpolate(t3, s3, r3) {
    this.radius = Math.round(M(t3.radius, s3.radius, r3));
  }
  clone() {
    return new _l(this.radius);
  }
  toJSON() {
    return { type: "blur", radius: y(this.radius) };
  }
};
var p = class _p {
  constructor(t3, s3) {
    this.type = t3, this.amount = s3, "invert" !== this.type && "grayscale" !== this.type && "sepia" !== this.type || (this.amount = Math.min(this.amount, 1));
  }
  get colorMatrix() {
    return this._colorMatrix || this._updateMatrix(), this._colorMatrix;
  }
  interpolate(t3, s3, r3) {
    this.amount = M(t3.amount, s3.amount, r3), this._updateMatrix();
  }
  clone() {
    return new _p(this.type, this.amount);
  }
  toJSON() {
    return { type: this.type, amount: this.amount };
  }
  _updateMatrix() {
    const t3 = this._colorMatrix || e2();
    switch (this.type) {
      case "brightness":
        this._colorMatrix = n2(t3, this.amount);
        break;
      case "contrast":
        this._colorMatrix = o2(t3, this.amount);
        break;
      case "grayscale":
        this._colorMatrix = s2(t3, this.amount);
        break;
      case "invert":
        this._colorMatrix = e3(t3, this.amount);
        break;
      case "saturate":
        this._colorMatrix = a2(t3, this.amount);
        break;
      case "sepia":
        this._colorMatrix = u(t3, this.amount);
    }
  }
};
var d = class _d {
  constructor(t3, s3, r3, o3) {
    this.offsetX = t3, this.offsetY = s3, this.blurRadius = r3, this.color = o3, this.type = "drop-shadow";
  }
  interpolate(t3, s3, r3) {
    this.offsetX = M(t3.offsetX, s3.offsetX, r3), this.offsetY = M(t3.offsetY, s3.offsetY, r3), this.blurRadius = M(t3.blurRadius, s3.blurRadius, r3), this.color[0] = Math.round(M(t3.color[0], s3.color[0], r3)), this.color[1] = Math.round(M(t3.color[1], s3.color[1], r3)), this.color[2] = Math.round(M(t3.color[2], s3.color[2], r3)), this.color[3] = M(t3.color[3], s3.color[3], r3);
  }
  clone() {
    return new _d(this.offsetX, this.offsetY, this.blurRadius, [...this.color]);
  }
  toJSON() {
    const t3 = [...this.color];
    return t3[3] *= 255, { type: "drop-shadow", xoffset: y(this.offsetX), yoffset: y(this.offsetY), blurRadius: y(this.blurRadius), color: t3 };
  }
};
var m = class _m {
  constructor(t3) {
    this.angle = t3, this.type = "hue-rotate";
  }
  get colorMatrix() {
    return this._colorMatrix || this._updateMatrix(), this._colorMatrix;
  }
  interpolate(t3, s3, r3) {
    this.angle = M(t3.angle, s3.angle, r3), this._updateMatrix();
  }
  clone() {
    return new _m(this.angle);
  }
  toJSON() {
    return { type: "hue-rotate", angle: this.angle };
  }
  _updateMatrix() {
    const t3 = this._colorMatrix || e2();
    this._colorMatrix = c(t3, this.angle);
  }
};
var f = class _f {
  constructor(t3) {
    this.amount = t3, this.type = "opacity", this.amount = Math.min(this.amount, 1);
  }
  interpolate(t3, s3, r3) {
    this.amount = M(t3.amount, s3.amount, r3);
  }
  clone() {
    return new _f(this.amount);
  }
  toJSON() {
    return { type: "opacity", amount: this.amount };
  }
};
function M(t3, s3, r3) {
  return t3 + (s3 - t3) * r3;
}
function y(t3) {
  return Math.round(1e3 * e(t3)) / 1e3;
}
function x(s3) {
  switch (s3.type) {
    case "grayscale":
    case "sepia":
    case "invert":
      return new p(s3.type, 0);
    case "saturate":
    case "brightness":
    case "contrast":
      return new p(s3.type, 1);
    case "opacity":
      return new f(1);
    case "hue-rotate":
      return new m(0);
    case "blur":
      return new l2(0);
    case "drop-shadow":
      return new d(0, 0, 0, [...l("transparent")]);
    case "bloom":
      return new c2(0, 0, 1);
  }
}

// node_modules/@arcgis/core/layers/effects/utils.js
function t2(n3, t3) {
  const e5 = n3.length > t3.length ? n3 : t3;
  return (n3.length > t3.length ? t3 : n3).every((n4, t4) => n4.type === e5[t4].type);
}
function e4(t3, e5) {
  const l4 = t3.length > e5.length ? t3 : e5, r3 = t3.length > e5.length ? e5 : t3;
  for (let g = r3.length; g < l4.length; g++) r3.push(x(l4[g]));
}
function l3(n3) {
  const t3 = n3[0];
  return !!t3 && "type" in t3;
}

export {
  c2 as c,
  l2 as l,
  p,
  d,
  m,
  f,
  t2 as t,
  e4 as e,
  l3 as l2
};
//# sourceMappingURL=chunk-FIBMMWXR.js.map
