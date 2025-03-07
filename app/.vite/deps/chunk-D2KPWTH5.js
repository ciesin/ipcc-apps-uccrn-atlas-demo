import {
  i as i2
} from "./chunk-RYF2HIUG.js";
import {
  x as x2
} from "./chunk-XXK557ZF.js";
import {
  f
} from "./chunk-LTF4JXOW.js";
import {
  i,
  o2 as o
} from "./chunk-PMUCRJCT.js";
import {
  B,
  J,
  b,
  j,
  k,
  q,
  x,
  y,
  z
} from "./chunk-ANT4QPJQ.js";
import {
  p,
  w
} from "./chunk-5AJMZDUM.js";
import {
  D,
  L
} from "./chunk-CRKFUUKK.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/AttributeStoreView.js
var T = () => n.getLogger("esri.views.2d.engine.webgl.AttributeStoreView");
var m = class {
  constructor(t, e, i4) {
    this._texture = null, this._lastTexture = null, this._fbos = {}, this.texelSize = 4;
    const { buffer: s3, pixelType: r2, textureOnly: a } = t, n4 = i(r2);
    this.blockIndex = i4, this.pixelType = r2, this.size = e, this.textureOnly = a, a || (this.data = new n4(s3)), this._resetRange();
  }
  destroy() {
    var _a;
    (_a = this._texture) == null ? void 0 : _a.dispose();
    for (const t in this._fbos) {
      const e = this._fbos[t];
      e && ("0" === t && e.detachColorTexture(), e.dispose()), this._fbos[t] = null;
    }
    this._texture = null;
  }
  get _textureDesc() {
    const t = new p();
    return t.wrapMode = D.CLAMP_TO_EDGE, t.samplingMode = L.NEAREST, t.dataType = this.pixelType, t.width = this.size, t.height = this.size, t;
  }
  setData(t, e, i4) {
    const s3 = f(t), r2 = this.data, a = s3 * this.texelSize + e;
    !r2 || a >= r2.length || (r2[a] = i4, this.dirtyStart = Math.min(this.dirtyStart, s3), this.dirtyEnd = Math.max(this.dirtyEnd, s3));
  }
  getData(t, e) {
    if (null == this.data) return null;
    const i4 = f(t) * this.texelSize + e;
    return !this.data || i4 >= this.data.length ? null : this.data[i4];
  }
  getTexture(t) {
    return this._texture ?? this._initTexture(t);
  }
  getFBO(t, e = 0) {
    if (!this._fbos[e]) {
      const i4 = 0 === e ? this.getTexture(t) : this._textureDesc;
      this._fbos[e] = new x2(t, i4);
    }
    return this._fbos[e];
  }
  get hasDirty() {
    const t = this.dirtyStart;
    return this.dirtyEnd >= t;
  }
  updateTexture(e, i4) {
    try {
      const s3 = this.dirtyStart, r2 = this.dirtyEnd;
      if (!this.hasDirty) return;
      has("esri-2d-update-debug") && console.debug(`Version[${i4}] AttributeStoreView.updateTexture`, { start: s3, end: r2, firstBytes: new Uint8Array(this.data.buffer.slice(0, 16)), block: this }), this._resetRange();
      const a = this.data.buffer, n4 = this.getTexture(e), u = 4, h = (s3 - s3 % this.size) / this.size, o2 = (r2 - r2 % this.size) / this.size, l = h, d = this.size, _ = o2, p2 = h * this.size * u, c = (d + _ * this.size) * u - p2, x3 = i(this.pixelType), f2 = new x3(a, p2 * x3.BYTES_PER_ELEMENT, c), b2 = this.size, m2 = _ - l + 1;
      if (m2 > this.size) return void T().error(new s("mapview-webgl", "Out-of-bounds index when updating AttributeData"));
      n4.updateData(0, 0, l, b2, m2, f2);
    } catch (s3) {
    }
  }
  update(t) {
    const { data: e, start: i4, end: s3 } = t;
    if (null != e && null != this.data) {
      const s4 = this.data, r2 = i4 * this.texelSize;
      for (let i5 = 0; i5 < e.length; i5++) {
        const a = 1 << i5 % this.texelSize;
        t.layout & a && (s4[r2 + i5] = e[i5]);
      }
    }
    this.dirtyStart = Math.min(this.dirtyStart, i4), this.dirtyEnd = Math.max(this.dirtyEnd, s3);
  }
  resize(t, e) {
    const i4 = this.size;
    if (this.size = e, this.textureOnly) return void (i4 !== this.size && (this._lastTexture = this._texture, this._texture = null));
    const s3 = i(this.pixelType);
    this.destroy(), this.data = new s3(t.buffer);
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
  _initTexture(t) {
    const e = new w(t, this._textureDesc, this.data ?? void 0);
    if (null != this._lastTexture && this._fbos[0]) {
      const i4 = this._lastTexture.descriptor.width, s3 = this._lastTexture.descriptor.height, r2 = this._lastTexture.descriptor.dataType, a = this._lastTexture.descriptor.pixelFormat, n4 = this.getFBO(t), u = o(r2), h = new (i(r2))(new ArrayBuffer(i4 * s3 * u * this.texelSize)), o2 = t.getBoundFramebufferObject(), { x: l, y: d, width: p2, height: c } = t.getViewport();
      t.bindFramebuffer(n4), n4.readPixels(0, 0, i4, s3, a, r2, h), e.updateData(0, 0, 0, 2 * i4, s3 / 2, h), t.setViewport(l, d, p2, c), t.bindFramebuffer(o2);
    }
    return this.destroy(), this._texture = e, this._texture;
  }
};
var y2 = class {
  constructor() {
    this.size = 0, this._pendingAttributeUpdates = [], this._version = 0, this._epoch = 0, this._locked = false;
  }
  get locked() {
    return this._locked;
  }
  _initialize(t) {
    if (!t) throw new Error("InternalError: initArgs must be defined");
    const e = t.blockDescriptors;
    if (this.size = t.blockSize, has("esri-2d-update-debug") && console.debug("AttributeStoreView.initialize", { message: t }), null == this._data) this._data = e.map((t2, e2) => null != t2 ? new m(t2, this.size, e2) : null);
    else for (let i4 = 0; i4 < this._data.length; i4++) {
      const t2 = this._data[i4], s3 = e[i4];
      null != s3 && (null == t2 ? this._data[i4] = new m(s3, this.size, i4) : t2.resize(s3, this.size));
    }
  }
  destroy() {
    var _a;
    for (const t of this._data ?? []) t == null ? void 0 : t.destroy();
    (_a = this._defaultTexture) == null ? void 0 : _a.dispose(), this._defaultTexture = null, this._pendingAttributeUpdates = [];
  }
  isEmpty() {
    return null == this._data;
  }
  getBlock(t) {
    if (null == this._data) return null;
    return this._data[t];
  }
  setLabelMinZoom(t, e) {
    this.setData(t, J.FilterFlags, 1, e);
  }
  setLocalTimeOrigin(t, e) {
    this.setData(t, J.LocalTimeOrigin, 0, e);
  }
  getLabelMinZoom(t) {
    return this.getData(t, J.FilterFlags, 1, 255);
  }
  getFilterFlags(t) {
    return this.getData(t, J.FilterFlags, 0, 0);
  }
  getVisualVariableData(t, e) {
    return this.getData(t, J.VV, e, 0);
  }
  getData(t, e, i4, s3) {
    if (!this._data) return 0;
    const r2 = this._data[e];
    if (null == r2) return 0;
    const a = r2.getData(t, i4);
    return null != a ? a : s3;
  }
  setData(t, e, i4, s3) {
    this._data[e].setData(t, i4, s3);
  }
  lockTextureUploads() {
    this._locked = true;
  }
  unlockTextureUploads() {
    this._locked = false, this.update();
  }
  requestUpdate(t) {
    this._version = t.version, this._pendingAttributeUpdates.push(t), has("esri-2d-update-debug") && console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`, { message: t });
  }
  get currentEpoch() {
    return this._epoch;
  }
  update() {
    if (this._locked) return;
    const t = this._pendingAttributeUpdates;
    this._pendingAttributeUpdates = [];
    for (const e of t) {
      const { blockData: t2, initArgs: i4, sendUpdateEpoch: s3, version: r2 } = e;
      has("esri-2d-update-debug") && console.debug(`Version[${this._version}] Epoch[${s3}] AttributeStoreView.applyUpdate`), this._version = r2, this._epoch = s3, null != i4 && this._initialize(i4);
      const a = this._data;
      for (let e2 = 0; e2 < t2.length; e2++) {
        const i5 = t2[e2], s4 = a[e2];
        null != s4 && null != i5 && (has("esri-2d-update-debug") && console.debug(`Version[${this._version}] CpuBlock[${e2}] AttributeStoreView.update`, { block: i5 }), s4.update(i5));
      }
    }
  }
  getUniforms(t) {
    return { filterFlags: { texture: this._getTexture(t, J.FilterFlags), unit: x }, animation: { texture: this._getTexture(t, J.Animation), unit: b }, gpgpu: { texture: this._getTexture(t, J.GPGPU), unit: z }, localTimeOrigin: { texture: this._getTexture(t, J.LocalTimeOrigin), unit: B }, visualVariableData: { texture: this._getTexture(t, J.VV), unit: j }, dataDriven0: { texture: this._getTexture(t, J.DD0), unit: k }, dataDriven1: { texture: this._getTexture(t, J.DD1), unit: q }, dataDriven2: { texture: this._getTexture(t, J.DD2), unit: y }, size: this.size };
  }
  _getTexture(t, e) {
    var _a;
    const i4 = (_a = this._data) == null ? void 0 : _a[e];
    return i4 ? (i4.updateTexture(t, this._version), i4.getTexture(t)) : this._getDefaultTexture(t);
  }
  _getDefaultTexture(t) {
    if (null == this._defaultTexture) {
      const e = new p();
      e.wrapMode = D.CLAMP_TO_EDGE, e.samplingMode = L.NEAREST, e.width = 1, e.height = 1, this._defaultTexture = new w(t, e, new Uint8Array(4));
    }
    return this._defaultTexture;
  }
};

// node_modules/@arcgis/core/views/2d/engine/AFeatureContainer.js
var s2 = 60;
var n2 = class extends i2 {
  constructor(e) {
    super(e), this._statisticsByLevel = /* @__PURE__ */ new Map(), this._entityIndex = /* @__PURE__ */ new Map(), this.attributeView = new y2();
  }
  destroy() {
    this.children.forEach((t) => t.destroy()), this.removeAllChildren(), this.attributeView.destroy();
  }
  doRender(t) {
    t.context.capabilities.enable("textureFloatLinear"), super.doRender(t);
  }
  get hasAnimations() {
    for (const t of this.children) if (t.hasAnimations) return true;
    return false;
  }
  _reindexAndUpdateFeaturesIfNeeded() {
    if (this.hasAnimations && (this._reindexFeatures(), 0 !== this.attributeView.size)) for (const t of this._entityIndex.values()) t.dirty && (this.attributeView.setData(t.displayId, J.LocalTimeOrigin, 0, t.firstIndexed), t.dirty = false);
  }
  restartAnimation(t) {
    const e = this._entityIndex.get(t);
    if (!e) return;
    const i4 = performance.now() / 1e3;
    e.firstIndexed = i4, e.dirty = true;
  }
  restartAllAnimations() {
    const t = performance.now() / 1e3;
    for (const [e, i4] of this._entityIndex) i4.firstIndexed = t, i4.dirty = true;
  }
  _reindexFeatures() {
    const t = performance.now() / 1e3;
    for (const e of this.children) for (const i4 of e.entityIds) {
      const { objectId: e2 } = i4;
      let s3 = this._entityIndex.get(e2);
      s3 || (s3 = { objectId: e2, displayId: 0, firstIndexed: t, lastIndexed: 0, dirty: true }, this._entityIndex.set(e2, s3)), s3.lastIndexed = t, s3.displayId = i4.displayId;
    }
    for (const [e, i4] of this._entityIndex) t - i4.lastIndexed > s2 && this._entityIndex.delete(e);
  }
  _updateAttributeView() {
    this.attributeView.update(), this._reindexAndUpdateFeaturesIfNeeded();
  }
  createRenderParams(t) {
    const e = super.createRenderParams(t);
    return e.attributeView = this.attributeView, e.instanceStore = this._instanceStore, e.statisticsByLevel = this._statisticsByLevel, e;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/instanceIdUtils.js
function n3(n4) {
  return n4;
}
function r(n4) {
  return n4;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/TechniqueInstance.js
var i3 = class {
  constructor(t, i4, e) {
    this._instanceId = t, this.techniqueRef = i4, this._input = e;
  }
  get instanceId() {
    return n3(this._instanceId);
  }
  createMeshInfo(i4) {
    return { id: n3(this._instanceId), techniqueType: this.techniqueRef.type, inputParams: i4, optionalAttributes: this._input.optionalAttributes };
  }
  getInput() {
    return this._input;
  }
  setInput(t) {
    this._input = t;
  }
};

export {
  n2 as n,
  r,
  i3 as i
};
//# sourceMappingURL=chunk-D2KPWTH5.js.map
