import {
  e
} from "./chunk-YVJ7MJNT.js";
import {
  N,
  R,
  S,
  T
} from "./chunk-CRKFUUKK.js";

// node_modules/@arcgis/core/views/webgl/renderState.js
function l(t, e2, i = T.ADD, n = [0, 0, 0, 0]) {
  return { srcRgb: t, srcAlpha: t, dstRgb: e2, dstAlpha: e2, opRgb: i, opAlpha: i, color: { r: n[0], g: n[1], b: n[2], a: n[3] } };
}
function r(t, e2, i, n, l2 = T.ADD, r2 = T.ADD, a2 = [0, 0, 0, 0]) {
  return { srcRgb: t, srcAlpha: e2, dstRgb: i, dstAlpha: n, opRgb: l2, opAlpha: r2, color: { r: a2[0], g: a2[1], b: a2[2], a: a2[3] } };
}
var a = l(R.ZERO, R.ONE_MINUS_SRC_ALPHA);
var _ = l(R.ONE, R.ZERO);
var h = l(R.ONE, R.ONE);
var o = l(R.ONE, R.ONE_MINUS_SRC_ALPHA);
var c = r(R.SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE_MINUS_SRC_ALPHA);
var d = { face: N.BACK, mode: S.CCW };
var u = { face: N.FRONT, mode: S.CCW };
var f = (e2) => e2 === e.Back ? d : e2 === e.Front ? u : null;
var p = { zNear: 0, zFar: 1 };
var g = { r: true, g: true, b: true, a: true };
function v(t) {
  return R2.intern(t);
}
function I(t) {
  return N2.intern(t);
}
function S2(t) {
  return P.intern(t);
}
function W(t) {
  return k.intern(t);
}
function b(t) {
  return F.intern(t);
}
function T2(t) {
  return L.intern(t);
}
function w(t) {
  return U.intern(t);
}
function O(t) {
  return K.intern(t);
}
function A(t) {
  return x.intern(t);
}
function B(t) {
  return G.intern(t);
}
var D = class {
  constructor(t, e2) {
    this._makeKey = t, this._makeRef = e2, this._interns = /* @__PURE__ */ new Map();
  }
  intern(t) {
    if (!t) return null;
    const e2 = this._makeKey(t), i = this._interns;
    return i.has(e2) || i.set(e2, this._makeRef(t)), i.get(e2) ?? null;
  }
};
function C(t) {
  return "[" + t.join(",") + "]";
}
var R2 = new D(y, (t) => ({ __tag: "Blending", ...t }));
function y(t) {
  return t ? C([t.srcRgb, t.srcAlpha, t.dstRgb, t.dstAlpha, t.opRgb, t.opAlpha, t.color.r, t.color.g, t.color.b, t.color.a]) : null;
}
var N2 = new D(m, (t) => ({ __tag: "Culling", ...t }));
function m(t) {
  return t ? C([t.face, t.mode]) : null;
}
var P = new D(E, (t) => ({ __tag: "PolygonOffset", ...t }));
function E(t) {
  return t ? C([t.factor, t.units]) : null;
}
var k = new D(z, (t) => ({ __tag: "DepthTest", ...t }));
function z(t) {
  return t ? C([t.func]) : null;
}
var F = new D(H, (t) => ({ __tag: "StencilTest", ...t }));
function H(t) {
  return t ? C([t.function.func, t.function.ref, t.function.mask, t.operation.fail, t.operation.zFail, t.operation.zPass]) : null;
}
var L = new D(M, (t) => ({ __tag: "DepthWrite", ...t }));
function M(t) {
  return t ? C([t.zNear, t.zFar]) : null;
}
var U = new D(j, (t) => ({ __tag: "ColorWrite", ...t }));
function j(t) {
  return t ? C([t.r, t.g, t.b, t.a]) : null;
}
var K = new D(Z, (t) => ({ __tag: "StencilWrite", ...t }));
function Z(t) {
  return t ? C([t.mask]) : null;
}
var x = new D(q, (t) => ({ __tag: "DrawBuffers", ...t }));
function q(t) {
  return t ? C(t.buffers) : null;
}
var G = new D(J, (t) => ({ blending: v(t.blending), culling: I(t.culling), polygonOffset: S2(t.polygonOffset), depthTest: W(t.depthTest), stencilTest: b(t.stencilTest), depthWrite: T2(t.depthWrite), colorWrite: w(t.colorWrite), stencilWrite: O(t.stencilWrite), drawBuffers: A(t.drawBuffers) }));
function J(t) {
  return t ? C([y(t.blending), m(t.culling), E(t.polygonOffset), z(t.depthTest), H(t.stencilTest), M(t.depthWrite), j(t.colorWrite), Z(t.stencilWrite), q(t.drawBuffers)]) : null;
}
var Q = class {
  constructor(t) {
    this._pipelineInvalid = true, this._blendingInvalid = true, this._cullingInvalid = true, this._polygonOffsetInvalid = true, this._depthTestInvalid = true, this._stencilTestInvalid = true, this._depthWriteInvalid = true, this._colorWriteInvalid = true, this._stencilWriteInvalid = true, this._drawBuffersInvalid = true, this._stateSetters = t;
  }
  setPipeline(t) {
    (this._pipelineInvalid || t !== this._pipeline) && (this._setBlending(t.blending), this._setCulling(t.culling), this._setPolygonOffset(t.polygonOffset), this._setDepthTest(t.depthTest), this._setStencilTest(t.stencilTest), this._setDepthWrite(t.depthWrite), this._setColorWrite(t.colorWrite), this._setStencilWrite(t.stencilWrite), this._setDrawBuffers(t.drawBuffers), this._pipeline = t), this._pipelineInvalid = false;
  }
  invalidateBlending() {
    this._blendingInvalid = true, this._pipelineInvalid = true;
  }
  invalidateCulling() {
    this._cullingInvalid = true, this._pipelineInvalid = true;
  }
  invalidatePolygonOffset() {
    this._polygonOffsetInvalid = true, this._pipelineInvalid = true;
  }
  invalidateDepthTest() {
    this._depthTestInvalid = true, this._pipelineInvalid = true;
  }
  invalidateStencilTest() {
    this._stencilTestInvalid = true, this._pipelineInvalid = true;
  }
  invalidateDepthWrite() {
    this._depthWriteInvalid = true, this._pipelineInvalid = true;
  }
  invalidateColorWrite() {
    this._colorWriteInvalid = true, this._pipelineInvalid = true;
  }
  invalidateStencilWrite() {
    this._stencilTestInvalid = true, this._pipelineInvalid = true;
  }
  invalidateDrawBuffers() {
    this._drawBuffersInvalid = true, this._pipelineInvalid = true;
  }
  _setBlending(t) {
    this._blending = this._setSubState(t, this._blending, this._blendingInvalid, this._stateSetters.setBlending), this._blendingInvalid = false;
  }
  _setCulling(t) {
    this._culling = this._setSubState(t, this._culling, this._cullingInvalid, this._stateSetters.setCulling), this._cullingInvalid = false;
  }
  _setPolygonOffset(t) {
    this._polygonOffset = this._setSubState(t, this._polygonOffset, this._polygonOffsetInvalid, this._stateSetters.setPolygonOffset), this._polygonOffsetInvalid = false;
  }
  _setDepthTest(t) {
    this._depthTest = this._setSubState(t, this._depthTest, this._depthTestInvalid, this._stateSetters.setDepthTest), this._depthTestInvalid = false;
  }
  _setStencilTest(t) {
    this._stencilTest = this._setSubState(t, this._stencilTest, this._stencilTestInvalid, this._stateSetters.setStencilTest), this._stencilTestInvalid = false;
  }
  _setDepthWrite(t) {
    this._depthWrite = this._setSubState(t, this._depthWrite, this._depthWriteInvalid, this._stateSetters.setDepthWrite), this._depthWriteInvalid = false;
  }
  _setColorWrite(t) {
    this._colorWrite = this._setSubState(t, this._colorWrite, this._colorWriteInvalid, this._stateSetters.setColorWrite), this._colorWriteInvalid = false;
  }
  _setStencilWrite(t) {
    this._stencilWrite = this._setSubState(t, this._stencilWrite, this._stencilWriteInvalid, this._stateSetters.setStencilWrite), this._stencilTestInvalid = false;
  }
  _setDrawBuffers(t) {
    this._drawBuffers = this._setSubState(t, this._drawBuffers, this._drawBuffersInvalid, this._stateSetters.setDrawBuffers), this._drawBuffersInvalid = false;
  }
  _setSubState(t, e2, i, n) {
    return (i || t !== e2) && (n(t), this._pipelineInvalid = true), t;
  }
};

export {
  r,
  a,
  o,
  c,
  u,
  f,
  p,
  g,
  B,
  Q
};
//# sourceMappingURL=chunk-TKKZ7DIH.js.map
