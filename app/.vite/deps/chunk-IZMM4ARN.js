import {
  t as t3
} from "./chunk-ZT4CGMCS.js";
import {
  o as o2
} from "./chunk-VWA3EWRM.js";
import {
  C as C2,
  C2 as C3,
  P,
  U,
  X,
  Y,
  _,
  g,
  h as h2,
  j,
  m,
  pe,
  pn,
  rt,
  t as t4,
  v,
  w
} from "./chunk-ZPDSNSZE.js";
import {
  n3 as n
} from "./chunk-3SEDCXI3.js";
import {
  e as e2
} from "./chunk-CVEV6FRQ.js";
import {
  r as r2
} from "./chunk-QHF36O7C.js";
import {
  t as t2
} from "./chunk-3VWS6Q3L.js";
import {
  E as E2,
  e as e3
} from "./chunk-RD3QRDRK.js";
import {
  mt
} from "./chunk-NDCL5BI2.js";
import {
  t
} from "./chunk-HYJ4YR5G.js";
import {
  C,
  E,
  I,
  O
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
  u as u2
} from "./chunk-PUM22WTC.js";
import {
  d
} from "./chunk-LTDNORB5.js";
import {
  e,
  r
} from "./chunk-PPIAYGRE.js";
import {
  u2 as u
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/OverlayShader.js
var x = class extends C3 {
};
r([h2(0, C2)], x.prototype, "pos", void 0), r([h2(1, C2)], x.prototype, "uv", void 0);
var g2 = class extends v {
};
var w2 = class extends P {
};
r([g(rt)], w2.prototype, "dvs", void 0);
var S = class extends P {
};
r([g(C2)], S.prototype, "perspective", void 0), r([g(C2)], S.prototype, "texSize", void 0), r([g(_)], S.prototype, "wrapAroundShift", void 0), r([g(_)], S.prototype, "opacity", void 0), r([g(U)], S.prototype, "texture", void 0);
var j2 = class extends j {
  constructor() {
    super(...arguments), this.type = "OverlayShader";
  }
  vertex(t5) {
    const o3 = t5.uv.divide(this.config.texSize), e4 = new _(1).add(pe(o3, this.config.perspective)), r3 = new X(t5.pos.add(new C2(this.config.wrapAroundShift, 0)), 1), p = this.transform.dvs.multiply(r3);
    return { uv: o3, glPosition: new Y(p.xy.multiply(e4), 0, e4) };
  }
  fragment(t5) {
    const o3 = pn(this.config.texture, t5.uv).multiply(this.config.opacity), e4 = new w();
    return e4.fragColor = o3, e4;
  }
};
r([g(w2)], j2.prototype, "transform", void 0), r([g(S)], j2.prototype, "config", void 0), r([e(0, m(x))], j2.prototype, "vertex", null), r([e(0, m(g2))], j2.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/overlay/OverlayTechnique.js
var m2 = class extends t4 {
  constructor() {
    super(...arguments), this.type = e2.Overlay, this._mesh = null, this.shaders = { overlay: new j2() };
  }
  render(e4, t5) {
    const { context: r3, painter: i2 } = e4, o3 = this._getMesh(e4, t5);
    i2.setPipelineState(t3);
    const { isWrapAround: h3, wrapAroundShift: p } = t5.config, u4 = { ...t5.config, wrapAroundShift: 0 }, m3 = { shader: this.shaders.overlay, uniforms: { transform: t5.transform, config: u4 }, defines: null, optionalAttributes: null, useComputeBuffer: false };
    i2.setPipelineState({ ...t3, stencil: { write: false, test: { compare: O.EQUAL, op: { fail: I.KEEP, zFail: I.KEEP, zPass: I.REPLACE }, ref: 0, mask: 255 } } }), i2.submitDrawMeshUntyped(r3, m3, o3), h3 && (u4.wrapAroundShift = p, i2.submitDrawMeshUntyped(r3, m3, o3));
  }
  shutdown() {
    u(this._mesh);
  }
  _getMesh(e4, s) {
    const { context: r3 } = e4;
    if (this._mesh) {
      const e5 = this._mesh.vertexBuffers.get("positions");
      if (!e5) throw new Error("Buffer not found");
      e5.buffer.setData(s.position);
    } else {
      const e5 = null != s.index ? s.index.length : s.position.length / 2;
      this._mesh = new o2(r3, { vertex: { positions: { data: s.position, attributes: [new t2("pos", 2, C.FLOAT, 0, 8)] }, uvs: { data: s.tex, attributes: [new t2("uv", 2, C.UNSIGNED_SHORT, 0, 4)] } }, index: null != s.index ? { index: { data: s.index } } : void 0, groups: [{ index: null != s.index ? "index" : void 0, primitive: E.TRIANGLE_STRIP }], parts: [{ group: 0, start: 0, count: e5 }] });
    }
    return this._mesh;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/OverlayContainer.js
var u3 = class extends n {
  constructor() {
    super(...arguments), this._viewStateId = -1, this._dvsMat3 = e3(), this._overlayTechnique = new m2();
  }
  get dvsMat3() {
    return this._dvsMat3;
  }
  beforeRender(t5) {
    this._updateMatrices(t5), this._updateOverlays(t5, this.children);
    for (const e4 of this.children) e4.beforeRender(t5);
  }
  doRender(t5) {
    if (t5.drawPhase !== E2.MAP || !this.visible) return;
    super.doRender(t5);
    const e4 = this._overlayTechnique;
    for (const r3 of this.children) r3.draw(t5, e4);
  }
  onDetach() {
    this._overlayTechnique.shutdown();
  }
  _updateMatrices(a) {
    const { state: h3 } = a, { id: m3, size: d2, pixelRatio: p, resolution: f2, rotation: u4, viewpoint: v2, displayMat3: _2 } = h3;
    if (this._viewStateId === m3) return;
    const M2 = u2(u4), g3 = p * d2[0], y = p * d2[1];
    this._localOrigin = v2.targetGeometry.clone();
    const { x: w3, y: x2 } = this._localOrigin, b = L(w3, h3.spatialReference);
    this._localOrigin.x = b, this._localOrigin.y = x2;
    const j3 = f2 * g3, O2 = f2 * y, R = o(this._dvsMat3);
    i(R, R, _2), M(R, R, t(g3 / 2, y / 2)), f(R, R, r2(g3 / j3, -y / O2, 1)), h(R, R, -M2), this._viewStateId = m3;
  }
  _updateOverlays(e4, r3) {
    const { state: o3 } = e4, { rotation: i2, spatialReference: s, worldScreenWidth: a, size: n2, viewpoint: l } = o3, c = this._localOrigin;
    let d2, p = 0;
    const f2 = d(s);
    if (f2 && s.isWrappable) {
      const e5 = n2[0], r4 = n2[1], c2 = u2(i2), h3 = Math.abs(Math.cos(c2)), u4 = Math.abs(Math.sin(c2)), v2 = Math.round(e5 * h3 + r4 * u4), [_2, M2] = f2.valid, g3 = mt(s), { x: y, y: w3 } = l.targetGeometry, x2 = [y, w3], b = [0, 0];
      o3.toScreen(b, x2);
      const j3 = [0, 0];
      let O2;
      O2 = v2 > a ? 0.5 * a : 0.5 * v2;
      const R = Math.floor((y + 0.5 * g3) / g3), q = _2 + R * g3, S2 = M2 + R * g3, G = [b[0] + O2, 0];
      o3.toMap(j3, G), j3[0] > S2 && (p = g3), G[0] = b[0] - O2, o3.toMap(j3, G), j3[0] < q && (p = -g3), d2 = { worldWidth: g3, xBounds: [_2, M2] };
    }
    for (const t5 of r3) t5.updateDrawCoords(c, p, s, d2);
  }
};

export {
  u3 as u
};
//# sourceMappingURL=chunk-IZMM4ARN.js.map
