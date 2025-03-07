import {
  C,
  C2,
  Ee,
  K,
  P as P2,
  U,
  X,
  Y,
  _,
  _e,
  g,
  h as h2,
  j,
  m,
  pn,
  rt,
  t as t2,
  v,
  w as w4
} from "./chunk-ZPDSNSZE.js";
import {
  e as e4
} from "./chunk-4ATVMSVD.js";
import {
  e as e2
} from "./chunk-CVEV6FRQ.js";
import {
  e as e3
} from "./chunk-RD3QRDRK.js";
import {
  w as w3
} from "./chunk-ANT4QPJQ.js";
import {
  t
} from "./chunk-HYJ4YR5G.js";
import {
  p,
  w as w2
} from "./chunk-5AJMZDUM.js";
import {
  D,
  G,
  I,
  L as L2,
  O,
  P
} from "./chunk-CRKFUUKK.js";
import {
  M,
  b,
  h,
  i,
  o
} from "./chunk-LH36NQSN.js";
import {
  e,
  r
} from "./chunk-PPIAYGRE.js";
import {
  L,
  f2 as f,
  w
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/views/2d/engine/ImageryBitmapSource.js
var l = class {
  constructor(l2, e5, t3) {
    this.pixelBlock = l2, this.extent = e5, this.originalPixelBlock = t3;
  }
  get width() {
    return null != this.pixelBlock ? this.pixelBlock.width : 0;
  }
  get height() {
    return null != this.pixelBlock ? this.pixelBlock.height : 0;
  }
  render(l2) {
    const e5 = this.pixelBlock;
    if (null == e5) return;
    const t3 = this.filter({ extent: this.extent, pixelBlock: this.originalPixelBlock ?? e5 });
    if (null == t3.pixelBlock) return;
    t3.pixelBlock.maskIsAlpha && (t3.pixelBlock.premultiplyAlpha = true);
    const i2 = t3.pixelBlock.getAsRGBA(), h3 = l2.createImageData(t3.pixelBlock.width, t3.pixelBlock.height);
    h3.data.set(i2), l2.putImageData(h3, 0, 0);
  }
  getRenderedRasterPixels() {
    const l2 = this.filter({ extent: this.extent, pixelBlock: this.pixelBlock });
    return null == l2.pixelBlock ? null : (l2.pixelBlock.maskIsAlpha && (l2.pixelBlock.premultiplyAlpha = true), { width: l2.pixelBlock.width, height: l2.pixelBlock.height, renderedRasterPixels: new Uint8Array(l2.pixelBlock.getAsRGBA().buffer) });
  }
};

// node_modules/@arcgis/core/views/2d/engine/Bitmap.js
function g2(t3) {
  return t3 && "render" in t3;
}
function f2(t3) {
  const e5 = document.createElement("canvas");
  return e5.width = t3.width, e5.height = t3.height, t3.render(e5.getContext("2d")), e5;
}
function w5(t3) {
  var _a;
  return g2(t3) ? t3 instanceof l ? (_a = t3.getRenderedRasterPixels()) == null ? void 0 : _a.renderedRasterPixels : f2(t3) : t3;
}
var S = class extends e4 {
  constructor(t3 = null, e5 = false) {
    super(), this.blendFunction = "standard", this._sourceWidth = 0, this._sourceHeight = 0, this._textureInvalidated = false, this.stencilRef = 0, this.coordScale = [1, 1], this._height = void 0, this.pixelRatio = 1, this.resolution = 0, this.rotation = 0, this._source = null, this._texture = null, this._width = void 0, this.x = 0, this.y = 0, this.immutable = e5, this.source = t3, this.requestRender = this.requestRender.bind(this);
  }
  destroy() {
    this._texture && (this._texture.dispose(), this._texture = null), null != this._uploadStatus && (this._uploadStatus.controller.abort(), this._uploadStatus = null);
  }
  get isSourceScaled() {
    return this.width !== this._sourceWidth || this.height !== this._sourceHeight;
  }
  get height() {
    return void 0 !== this._height ? this._height : this._sourceHeight;
  }
  set height(t3) {
    this._height = t3;
  }
  get source() {
    return this._source;
  }
  set source(t3) {
    null == t3 && null == this._source || (this._source = t3, this.invalidateTexture(), this.requestRender());
  }
  get texture() {
    return this._texture;
  }
  get width() {
    return void 0 !== this._width ? this._width : this._sourceWidth;
  }
  set width(t3) {
    this._width = t3;
  }
  beforeRender(t3) {
    super.beforeRender(t3), this.updateTexture(t3);
  }
  async setSourceAsync(i2, s) {
    null != this._uploadStatus && this._uploadStatus.controller.abort();
    const r2 = new AbortController(), h3 = L();
    return w(s, () => r2.abort()), w(r2, (t3) => h3.reject(t3)), this._uploadStatus = { controller: r2, resolver: h3 }, this.source = i2, h3.promise;
  }
  invalidateTexture() {
    this._textureInvalidated || (this._textureInvalidated = true, this._source instanceof HTMLImageElement ? (this._sourceHeight = this._source.naturalHeight, this._sourceWidth = this._source.naturalWidth) : this._source && (this._sourceHeight = this._source.height, this._sourceWidth = this._source.width));
  }
  transitionStep(t3, e5) {
    t3 >= 64 && (this.fadeTransitionEnabled = false), super.transitionStep(t3, e5);
  }
  setTransform(t3) {
    const e5 = o(this.transforms.displayViewScreenMat3), [i2, a2] = t3.toScreenNoRotation([0, 0], [this.x, this.y]), l2 = this.resolution / this.pixelRatio / t3.resolution, d = l2 * this.width, c = l2 * this.height, _2 = Math.PI * this.rotation / 180;
    M(e5, e5, t(i2, a2)), M(e5, e5, t(d / 2, c / 2)), h(e5, e5, -_2), M(e5, e5, t(-d / 2, -c / 2)), b(e5, e5, t(d, c)), i(this.transforms.displayViewScreenMat3, t3.displayViewMat3, e5);
  }
  setSamplingProfile(t3) {
    this._texture && (t3.mips && !this._texture.descriptor.hasMipmap && this._texture.generateMipmap(), this._texture.setSamplingMode(t3.samplingMode));
  }
  bind(t3, e5) {
    this._texture && t3.bindTexture(this._texture, e5);
  }
  async updateTexture({ context: t3, painter: e5 }) {
    if (!this._textureInvalidated) return;
    if (this._textureInvalidated = false, this._texture || (this._texture = this._createTexture(t3)), !this.source) return void this._texture.setData(null);
    this._texture.resize(this._sourceWidth, this._sourceHeight);
    const s = w5(this.source);
    try {
      if (null != this._uploadStatus) {
        const { controller: t4, resolver: i2 } = this._uploadStatus, r2 = { signal: t4.signal }, { width: h3, height: o2 } = this, u = this._texture, a2 = e5.textureUploadManager;
        await a2.enqueueTextureUpdate({ data: s, texture: u, width: h3, height: o2 }, r2), i2.resolve(), this._uploadStatus = null;
      } else this._texture.setData(s);
      this.ready();
    } catch (r2) {
      f(r2);
    }
  }
  onDetach() {
    this.destroy();
  }
  _createTransforms() {
    return { displayViewScreenMat3: e3() };
  }
  _createTexture(t3) {
    const e5 = this.immutable, i2 = new p();
    return i2.internalFormat = e5 ? P.RGBA8 : G.RGBA, i2.wrapMode = D.CLAMP_TO_EDGE, i2.isImmutable = e5, i2.width = this._sourceWidth, i2.height = this._sourceHeight, new w2(t3, i2);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/bitmapUtils.js
function n(t3) {
  const u = new _(1 / 6), d = t3.multiply(t3), i2 = d.multiply(t3), n2 = u.multiply(i2.multiply(-1).add(new _(3).multiply(d)).subtract(new _(3).multiply(t3)).add(1)), p4 = u.multiply(i2.multiply(3).subtract(d.multiply(6)).add(4)), m4 = u.multiply(i2.multiply(-3).add(d.multiply(3)).add(t3.multiply(3)).add(1)), a2 = u.multiply(i2);
  return new Y(n2, p4, m4, a2);
}
function p2(t3) {
  const u = n(t3), d = u.x.add(u.y), i2 = u.z.add(u.w), p4 = new _(1).subtract(u.y.divide(d)).add(t3), m4 = new _(1).add(u.w.divide(i2)).subtract(t3);
  return new Y(p4, m4, d, i2);
}
function m2(y, n2, m4) {
  const a2 = new C(new _(1).divide(m4.x), 0), e5 = new C(0, new _(1).divide(m4.y)), r2 = n2.multiply(m4).subtract(0.5), c = p2(Ee(r2).x).xyz, s = p2(Ee(r2).y).xyz;
  let w6 = n2.add(c.x.multiply(a2)), o2 = n2.subtract(c.y.multiply(a2));
  const x = w6.add(s.x.multiply(e5)), b3 = o2.add(s.x.multiply(e5));
  w6 = w6.subtract(s.y.multiply(e5)), o2 = o2.subtract(s.y.multiply(e5));
  let z = pn(y, o2), f3 = pn(y, w6);
  const v3 = pn(y, b3), g3 = pn(y, x);
  return z = _e(z, v3, s.z), f3 = _e(f3, g3, s.z), z = _e(z, f3, c.z), z;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/BitmapShader.js
var v2 = class extends C2 {
};
r([h2(0, C)], v2.prototype, "position", void 0);
var b2 = class extends v {
};
var S2 = class extends P2 {
};
r([g(U)], S2.prototype, "texture", void 0), r([g(rt)], S2.prototype, "dvsMat3", void 0), r([g(C)], S2.prototype, "coordScale", void 0), r([g(_)], S2.prototype, "opacity", void 0);
var j2 = class extends j {
  constructor() {
    super(...arguments), this.type = "BitmapShader";
  }
  vertex(t3) {
    const o2 = this.config.dvsMat3.multiply(new X(t3.position.multiply(this.config.coordScale), 1));
    return { glPosition: new Y(o2, 1), texcoord: t3.position };
  }
  fragment(t3) {
    const o2 = new w4();
    let i2;
    return i2 = this.bicubic ? m2(this.config.texture, t3.texcoord, this.config.coordScale) : pn(this.config.texture, t3.texcoord), o2.fragColor = new Y(i2.rgb.multiply(this.config.opacity), i2.a.multiply(this.config.opacity)), o2;
  }
};
r([g(S2)], j2.prototype, "config", void 0), r([K], j2.prototype, "bicubic", void 0), r([e(0, m(v2))], j2.prototype, "vertex", null), r([e(0, m(b2))], j2.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/bitmap/BitmapTechnique.js
var a = { nearest: { samplingMode: L2.NEAREST, mips: false }, bilinear: { samplingMode: L2.LINEAR, mips: false }, bicubic: { samplingMode: L2.LINEAR, mips: false }, trilinear: { samplingMode: L2.LINEAR_MIPMAP_LINEAR, mips: true } };
var m3 = (e5, i2, t3) => {
  if ("dynamic" === t3.samplingMode) {
    const { state: t4 } = e5, s = i2.resolution / i2.pixelRatio / t4.resolution, o2 = Math.round(e5.pixelRatio) !== e5.pixelRatio, n2 = s > 1.05 || s < 0.95;
    return t4.rotation || n2 || o2 || i2.isSourceScaled || i2.rotation ? a.bilinear : a.nearest;
  }
  return a[t3.samplingMode];
};
var p3 = class extends t2 {
  constructor() {
    super(...arguments), this.name = "BrushBitmap", this.type = e2.Bitmap, this.shaders = { bitmap: new j2() };
  }
  render(i2, t3) {
    const { context: s, renderingOptions: o2, painter: p4 } = i2;
    for (const c of t3.bitmaps) {
      const t4 = c.texture;
      if (!c.source || !c.isReady || null == t4) continue;
      const l2 = m3(i2, c, o2);
      i2.timeline.begin(this.name), p4.setPipelineState({ depth: false, stencil: { test: { mask: 255, ref: c.stencilRef, compare: O.EQUAL, op: { fail: I.KEEP, zFail: I.KEEP, zPass: I.KEEP } }, write: false }, color: { write: [true, true, true, true], blendMode: "additive" === c.blendFunction ? "additive" : "composite" } }), c.setSamplingProfile(l2);
      const { coordScale: d, computedOpacity: u, transforms: f3 } = c, h3 = { texture: { texture: t4, unit: w3 }, dvsMat3: f3.displayViewScreenMat3, coordScale: d, opacity: u };
      p4.submitDrawMesh(s, { shader: this.shaders.bitmap, uniforms: { config: h3 }, defines: { bicubic: l2 === a.bicubic }, optionalAttributes: null, useComputeBuffer: false }, p4.quadMesh), i2.timeline.end(this.name);
    }
  }
};

export {
  l,
  g2 as g,
  f2 as f,
  S,
  p3 as p
};
//# sourceMappingURL=chunk-JS6F4JFY.js.map
