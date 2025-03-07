import {
  y
} from "./chunk-U6JFTJMZ.js";
import {
  E,
  u
} from "./chunk-5AJMZDUM.js";
import {
  A,
  C,
  F,
  V
} from "./chunk-CRKFUUKK.js";
import {
  r2 as r
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";
import {
  a2 as a,
  c2 as c,
  d,
  t2 as t
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/webgl/BufferObject.js
var h = () => n.getLogger("esri.views.webgl.BufferObject");
var E2 = class _E {
  static createIndex(t2, e, i) {
    return new _E(t2, A.ELEMENT_ARRAY_BUFFER, e, i);
  }
  static createVertex(t2, e, i) {
    return new _E(t2, A.ARRAY_BUFFER, e, i);
  }
  static createUniform(t2, e, i) {
    return new _E(t2, A.UNIFORM_BUFFER, e, i);
  }
  static createPixelPack(t2, e = F.STREAM_READ, i) {
    const s = new _E(t2, A.PIXEL_PACK_BUFFER, e);
    return i && s.setSize(i), s;
  }
  static createPixelUnpack(t2, e = F.STREAM_DRAW, i) {
    return new _E(t2, A.PIXEL_UNPACK_BUFFER, e, i);
  }
  static createTransformFeedback(t2, e = F.STATIC_DRAW, i) {
    const s = new _E(t2, A.TRANSFORM_FEEDBACK_BUFFER, e);
    return s.setSize(i), s;
  }
  constructor(t2, e, i, s) {
    this._context = t2, this.bufferType = e, this.usage = i, this._glName = null, this._size = -1, this._indexType = void 0, t2.instanceCounter.increment(V.BufferObject, this), this._glName = this._context.gl.createBuffer(), u(this._context.gl), s && this.setData(s);
  }
  get glName() {
    return this._glName;
  }
  get size() {
    return this._size;
  }
  get indexType() {
    return this._indexType;
  }
  get usedMemory() {
    if (this.bufferType === A.ELEMENT_ARRAY_BUFFER) {
      if (this._indexType === C.UNSIGNED_INT) return 4 * this._size;
      if (this._indexType === C.UNSIGNED_SHORT) return 2 * this._size;
    }
    return this._size;
  }
  get _isVAOAware() {
    return this.bufferType === A.ELEMENT_ARRAY_BUFFER || this.bufferType === A.ARRAY_BUFFER;
  }
  dispose() {
    var _a;
    if ((_a = this._context) == null ? void 0 : _a.gl) {
      if (this._glName) {
        this._context.gl.deleteBuffer(this._glName), this._glName = null;
      }
      this._context.instanceCounter.decrement(V.BufferObject, this), this._context = null;
    } else this._glName && h().warn("Leaked WebGL buffer object");
  }
  setSize(t2, e = null) {
    if (this.bufferType === A.ELEMENT_ARRAY_BUFFER && null != e) switch (this._indexType = e, e) {
      case C.UNSIGNED_SHORT:
        t2 *= 2;
        break;
      case C.UNSIGNED_INT:
        t2 *= 4;
    }
    this._setBufferData(t2);
  }
  setData(t2) {
    if (!t2) return;
    let e = t2.byteLength;
    this.bufferType === A.ELEMENT_ARRAY_BUFFER && (t(t2) ? this._indexType = C.UNSIGNED_BYTE : c(t2) ? (e /= 2, this._indexType = C.UNSIGNED_SHORT) : a(t2) && (e /= 4, this._indexType = C.UNSIGNED_INT)), this._setBufferData(e, t2);
  }
  _setBufferData(t2, e = null) {
    this._size = t2;
    const i = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null), this._context.bindBuffer(this);
    const s = this._context.gl;
    null != e ? s.bufferData(this.bufferType, e, this.usage) : s.bufferData(this.bufferType, t2, this.usage), u(s), this._isVAOAware && this._context.bindVAO(i);
  }
  setSubData(t2, e, i, s) {
    if (!t2) return;
    const r2 = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null), this._context.bindBuffer(this);
    const { gl: _ } = this._context;
    _.bufferSubData(this.bufferType, e * t2.BYTES_PER_ELEMENT, t2, i, s - i), u(_), this._isVAOAware && this._context.bindVAO(r2);
  }
  getSubData(t2, e = 0, i, s) {
    if (i < 0 || s < 0) return;
    const r2 = o(t2) ? t2.BYTES_PER_ELEMENT : 1;
    if (r2 * ((i ?? 0) + (s ?? 0)) > t2.byteLength) return;
    e + r2 * (s ?? 0) > this.usedMemory && h().warn("Potential problem getting subdata: requested data exceeds buffer size!");
    const n3 = this._context.gl;
    this.bufferType === A.TRANSFORM_FEEDBACK_BUFFER ? (this._context.bindBuffer(this, A.TRANSFORM_FEEDBACK_BUFFER), n3.getBufferSubData(A.TRANSFORM_FEEDBACK_BUFFER, e, t2, i, s), this._context.unbindBuffer(A.TRANSFORM_FEEDBACK_BUFFER)) : (this._context.bindBuffer(this, A.COPY_READ_BUFFER), n3.getBufferSubData(A.COPY_READ_BUFFER, e, t2, i, s), this._context.unbindBuffer(A.COPY_READ_BUFFER));
  }
  async getSubDataAsync(t2, e = 0, i, s) {
    await this._context.clientWaitAsync(), this.getSubData(t2, e, i, s);
  }
};
function o(e) {
  return d(e);
}

// node_modules/@arcgis/core/views/webgl/VertexArrayObject.js
var n2 = () => n.getLogger("esri.views.webgl.VertexArrayObject");
var o2 = class {
  constructor(e, t2, i, r2, s = null) {
    this._context = e, this._locations = t2, this._layout = i, this._buffers = r2, this._indexBuffer = s, this._glName = null, this._initialized = false;
  }
  get glName() {
    return this._glName;
  }
  get context() {
    return this._context;
  }
  get vertexBuffers() {
    return this._buffers;
  }
  get indexBuffer() {
    return this._indexBuffer;
  }
  get byteSize() {
    return Array.from(this._buffers.values()).reduce((e, t2) => e + t2.usedMemory, null != this._indexBuffer ? this._indexBuffer.usedMemory : 0);
  }
  get layout() {
    return this._layout;
  }
  get locations() {
    return this._locations;
  }
  get usedMemory() {
    return this.byteSize + (this._buffers.size + (this._indexBuffer ? 1 : 0)) * y;
  }
  get cachedMemory() {
    return this.usedMemory;
  }
  dispose() {
    this._context ? (this._context.getBoundVAO() === this && this._context.bindVAO(null), this._buffers.forEach((e) => e.dispose()), this._buffers.clear(), this._indexBuffer = r(this._indexBuffer), this.disposeVAOOnly()) : (this._glName || this._buffers.size > 0) && n2().warn("Leaked WebGL VAO");
  }
  disposeVAOOnly() {
    this._glName && (this._context.gl.deleteVertexArray(this._glName), this._glName = null, this._context.instanceCounter.decrement(V.VertexArrayObject, this)), this._context = null;
  }
  initialize() {
    if (this._initialized) return;
    const { gl: e } = this._context, t2 = e.createVertexArray();
    e.bindVertexArray(t2), this._bindLayout(), e.bindVertexArray(null), this._glName = t2, this._context.instanceCounter.increment(V.VertexArrayObject, this), this._initialized = true;
  }
  bind() {
    this.initialize(), this._context.gl.bindVertexArray(this.glName);
  }
  _bindLayout() {
    const { _buffers: e, _layout: t2, _indexBuffer: i } = this;
    e || n2().error("Vertex buffer dictionary is empty!");
    const r2 = this._context.gl;
    this._buffers.forEach((e2, i2) => {
      const r3 = t2.get(i2);
      r3 ? E(this._context, this._locations, e2, r3) : n2().error("Vertex element descriptor is empty!");
    }), null != i && r2.bindBuffer(r2.ELEMENT_ARRAY_BUFFER, i.glName);
  }
  unbind() {
    this.initialize(), this._context.gl.bindVertexArray(null);
  }
};

export {
  E2 as E,
  o2 as o
};
//# sourceMappingURL=chunk-HABQD3Y4.js.map
