import {
  i as i2,
  n,
  r as r3
} from "./chunk-D2KPWTH5.js";
import {
  j
} from "./chunk-VWA3EWRM.js";
import {
  e as e2
} from "./chunk-4ATVMSVD.js";
import {
  E as E2,
  o as o2
} from "./chunk-HABQD3Y4.js";
import {
  $
} from "./chunk-PMUCRJCT.js";
import {
  r as r2
} from "./chunk-QHF36O7C.js";
import {
  N,
  e
} from "./chunk-RD3QRDRK.js";
import {
  t
} from "./chunk-HYJ4YR5G.js";
import {
  C,
  E,
  F,
  R
} from "./chunk-CRKFUUKK.js";
import {
  M,
  f,
  h,
  i,
  o
} from "./chunk-LH36NQSN.js";
import {
  L
} from "./chunk-67XXGAOA.js";
import {
  r2 as r,
  u2 as u
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/GraphicInstanceStore.js
var n2 = 0;
function a(t2, a2) {
  return new i2(r3(n2++), t2, a2);
}
var l = { visualVariableColor: null, visualVariableOpacity: null, visualVariableSizeMinMaxValue: null, visualVariableSizeScaleStops: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null, visualVariableRotation: null, visualVariableSizeOutlineScaleStops: null };
var o3 = class {
  constructor() {
    this.instances = { fill: a(j.fill, { uniforms: l, optionalAttributes: { zoomRange: true } }), marker: a(j.marker, { uniforms: l, optionalAttributes: { zoomRange: true } }), line: a(j.line, { uniforms: l, optionalAttributes: { zoomRange: true } }), text: a(j.text, { uniforms: l, optionalAttributes: { zoomRange: true, referenceSymbol: false, clipAngle: false } }), complexFill: a(j.complexFill, { uniforms: l, optionalAttributes: { zoomRange: true } }), gradientFill: a(j.gradientFill, { uniforms: l, optionalAttributes: { zoomRange: true } }), texturedLine: a(j.texturedLine, { uniforms: l, optionalAttributes: { zoomRange: true } }), gradientStroke: a(j.gradientStroke, { uniforms: l, optionalAttributes: { zoomRange: true } }), animatedMarker: a(j.animatedMarker, { uniforms: l, optionalAttributes: { zoomRange: true } }) }, this._instancesById = Object.values(this.instances).reduce((e3, t2) => (e3.set(t2.instanceId, t2), e3), /* @__PURE__ */ new Map());
  }
  getInstance(e3) {
    return this._instancesById.get(e3);
  }
};

// node_modules/@arcgis/core/views/2d/layers/graphics/GraphicBoundsRenderer.js
var v = Math.PI / 180;
var x = 4;
var b = class extends e2 {
  constructor(t2) {
    super(), this._program = null, this._vao = null, this._vertexBuffer = null, this._indexBuffer = null, this._dvsMat3 = e(), this._localOrigin = { x: 0, y: 0 }, this._getBounds = t2;
  }
  destroy() {
    this._vao && (this._vao.dispose(), this._vao = null, this._vertexBuffer = null, this._indexBuffer = null), this._program = r(this._program);
  }
  doRender(t2) {
    const { context: e3 } = t2, r4 = this._getBounds();
    if (r4.length < 1) return;
    this._createShaderProgram(e3), this._updateMatricesAndLocalOrigin(t2), this._updateBufferData(e3, r4), e3.setBlendingEnabled(true), e3.setDepthTestEnabled(false), e3.setStencilWriteMask(0), e3.setStencilTestEnabled(false), e3.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), e3.setColorMask(true, true, true, true);
    const i4 = this._program;
    e3.bindVAO(this._vao), e3.useProgram(i4), i4.setUniformMatrix3fv("u_dvsMat3", this._dvsMat3), e3.gl.lineWidth(1), e3.drawElements(E.LINES, 8 * r4.length, C.UNSIGNED_INT, 0), e3.bindVAO();
  }
  _createTransforms() {
    return { displayViewScreenMat3: e() };
  }
  _createShaderProgram(t2) {
    if (this._program) return;
    const e3 = "precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }", r4 = "precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }";
    this._program = t2.programCache.acquire(e3, r4, y().attributes);
  }
  _updateMatricesAndLocalOrigin(t2) {
    const { state: a2 } = t2, { displayMat3: m, size: c, resolution: u2, pixelRatio: _, rotation: h2, viewpoint: p } = a2, d = v * h2, { x: g, y: x2 } = p.targetGeometry, b2 = L(g, a2.spatialReference);
    this._localOrigin.x = b2, this._localOrigin.y = x2;
    const y2 = _ * c[0], B = _ * c[1], M2 = u2 * y2, j2 = u2 * B, A = o(this._dvsMat3);
    i(A, A, m), M(A, A, t(y2 / 2, B / 2)), f(A, A, r2(c[0] / M2, -B / j2, 1)), h(A, A, -d);
  }
  _updateBufferData(t2, e3) {
    const { x: r4, y: i4 } = this._localOrigin, s = 2 * x * e3.length, o4 = new Float32Array(s), a2 = new Uint32Array(8 * e3.length);
    let n3 = 0, l2 = 0;
    for (const f2 of e3) f2 && (o4[2 * n3] = f2[0] - r4, o4[2 * n3 + 1] = f2[1] - i4, o4[2 * n3 + 2] = f2[0] - r4, o4[2 * n3 + 3] = f2[3] - i4, o4[2 * n3 + 4] = f2[2] - r4, o4[2 * n3 + 5] = f2[3] - i4, o4[2 * n3 + 6] = f2[2] - r4, o4[2 * n3 + 7] = f2[1] - i4, a2[l2] = n3 + 0, a2[l2 + 1] = n3 + 3, a2[l2 + 2] = n3 + 3, a2[l2 + 3] = n3 + 2, a2[l2 + 4] = n3 + 2, a2[l2 + 5] = n3 + 1, a2[l2 + 6] = n3 + 1, a2[l2 + 7] = n3 + 0, n3 += 4, l2 += 8);
    if (this._vertexBuffer ? this._vertexBuffer.setData(o4.buffer) : this._vertexBuffer = E2.createVertex(t2, F.DYNAMIC_DRAW, o4.buffer), this._indexBuffer ? this._indexBuffer.setData(a2) : this._indexBuffer = E2.createIndex(t2, F.DYNAMIC_DRAW, a2), !this._vao) {
      const e4 = y();
      this._vao = new o2(t2, e4.attributes, e4.bufferLayouts, /* @__PURE__ */ new Map([["geometry", this._vertexBuffer]]), this._indexBuffer);
    }
  }
};
var y = () => $("bounds", { geometry: [{ location: 0, name: "a_position", count: 2, type: C.FLOAT }] });

// node_modules/@arcgis/core/views/2d/layers/graphics/AGraphicContainer.js
var i3 = class extends n {
  constructor(e3) {
    super(e3), this._instanceStore = new o3(), this.checkHighlight = () => true;
  }
  destroy() {
    super.destroy(), this._boundsRenderer = u(this._boundsRenderer);
  }
  get instanceStore() {
    return this._instanceStore;
  }
  enableRenderingBounds(e3) {
    this._boundsRenderer = new b(e3), this.requestRender();
  }
  get hasHighlight() {
    return this.checkHighlight();
  }
  onTileData(e3, t2) {
    e3.onMessage(t2), this.contains(e3) || this.addChild(e3), this.requestRender();
  }
  _renderChildren(e3, t2) {
    e3.selection = t2;
    for (const r4 of this.children) {
      if (!r4.visible) continue;
      const t3 = r4.getDisplayList(this._instanceStore, N.STRICT_ORDER);
      t3 == null ? void 0 : t3.render(e3);
    }
  }
};

export {
  i3 as i
};
//# sourceMappingURL=chunk-NCWMOUUB.js.map
