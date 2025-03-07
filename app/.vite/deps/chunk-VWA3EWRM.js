import {
  B as B3,
  C as C3,
  C2 as C4,
  Ce,
  Ct,
  Ee,
  Ge,
  Gt,
  Ht,
  I as I4,
  It,
  J,
  K as K3,
  Kt,
  Le,
  Me,
  P as P2,
  Pt,
  Rt,
  Tt,
  U as U2,
  Ue,
  Ut,
  Vt,
  W,
  X,
  Xt,
  Y,
  Ye,
  Yt,
  _ as _3,
  _2 as _4,
  _e,
  a as a2,
  ce,
  cn,
  ct,
  fe,
  ft,
  g,
  ge,
  h as h3,
  ht,
  ie,
  j,
  lt,
  m as m3,
  nn,
  nt,
  ot,
  pe,
  pn,
  qe,
  re,
  rt,
  sn,
  st,
  t as t6,
  un,
  ut,
  v,
  w as w3,
  xt,
  zt
} from "./chunk-ZPDSNSZE.js";
import {
  n as n4
} from "./chunk-3SEDCXI3.js";
import {
  i as i4,
  s as s5,
  x as x2
} from "./chunk-XXK557ZF.js";
import {
  E as E3,
  o as o4
} from "./chunk-HABQD3Y4.js";
import {
  A,
  B as B2,
  C as C2,
  D as D3,
  E as E2,
  F as F2,
  G as G3,
  H as H2,
  I as I3,
  K as K2,
  L as L4,
  c as c2,
  d as d2,
  e as e3,
  e2 as e4,
  h,
  i as i3,
  k,
  n as n3,
  o as o2,
  o2 as o3,
  q,
  r as r4,
  s as s4,
  t as t5,
  u as u2,
  x
} from "./chunk-LTF4JXOW.js";
import {
  e as e2
} from "./chunk-CVEV6FRQ.js";
import {
  te
} from "./chunk-UQQJEYZO.js";
import {
  c,
  t as t4
} from "./chunk-VCN3W5DR.js";
import {
  t as t2
} from "./chunk-3VWS6Q3L.js";
import {
  r as r3,
  s as s3
} from "./chunk-JNU2FFP7.js";
import {
  _
} from "./chunk-HVQIKA6N.js";
import {
  E as E4,
  L as L5,
  M,
  S,
  c as c3,
  e as e5,
  f,
  h as h2,
  m as m2,
  p as p2,
  w as w2,
  y
} from "./chunk-RD3QRDRK.js";
import {
  t as t3
} from "./chunk-JXV2GGQH.js";
import {
  D as D2,
  H,
  I as I2,
  K,
  L as L3,
  a,
  si
} from "./chunk-ANT4QPJQ.js";
import {
  p,
  w
} from "./chunk-5AJMZDUM.js";
import {
  B,
  C,
  D,
  E,
  F,
  G as G2,
  I,
  L as L2,
  O,
  P,
  U,
  _ as _2
} from "./chunk-CRKFUUKK.js";
import {
  i as i2,
  s as s2
} from "./chunk-LH36NQSN.js";
import {
  n as n2
} from "./chunk-MEC6IDRX.js";
import {
  i
} from "./chunk-ZH6PYRVF.js";
import {
  m
} from "./chunk-TGMFGDP6.js";
import {
  o,
  u
} from "./chunk-JLFV7EBO.js";
import {
  Q
} from "./chunk-LTDNORB5.js";
import {
  e,
  r
} from "./chunk-PPIAYGRE.js";
import {
  L,
  d,
  r2
} from "./chunk-M6FNW7GP.js";
import {
  l2 as l,
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  G,
  has,
  t
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/meshing/definitions.js
var T = { [C.BYTE]: 1, [C.UNSIGNED_BYTE]: 1, [C.SHORT]: 2, [C.UNSIGNED_SHORT]: 2, [C.HALF_FLOAT]: 2, [C.INT]: 4, [C.UNSIGNED_INT]: 4, [C.FLOAT]: 4 };

// node_modules/@arcgis/core/views/2d/engine/webgl/meshing/Mesh.js
var o5 = class {
  constructor(t11, s9) {
    this._boundPart = null, this.vertexBuffers = /* @__PURE__ */ new Map(), this.indexBuffers = /* @__PURE__ */ new Map(), this.groups = [];
    for (const o13 in s9.vertex) {
      const { data: i9, attributes: n14 } = s9.vertex[o13], f12 = E3.createVertex(t11, F.STATIC_DRAW, i9);
      this.vertexBuffers.set(o13, { buffer: f12, attributes: n14 });
    }
    for (const o13 in s9.index) {
      const { data: i9 } = s9.index[o13], n14 = E3.createIndex(t11, F.STATIC_DRAW, i9);
      this.indexBuffers.set(o13, { buffer: n14 });
    }
    for (const e9 of s9.groups) this.groups.push({ ...e9, vertexArrays: /* @__PURE__ */ new Map() });
    this.parts = s9.parts;
  }
  bind(e9, r7, s9) {
    var _a;
    this._boundPart = s9;
    const { group: o13 } = this.parts[this._boundPart], i9 = this.groups[o13];
    if (!i9) throw new Error(`Missing group ${o13}.`);
    let n14 = i9.vertexArrays.get(r7.stringHash);
    if (!n14) {
      const s10 = new Set(r7.locations.keys()), o14 = i9.index ? (_a = this.indexBuffers.get(i9.index)) == null ? void 0 : _a.buffer : null, f12 = /* @__PURE__ */ new Map(), u13 = /* @__PURE__ */ new Map();
      for (const [e10, { buffer: r8, attributes: t11 }] of this.vertexBuffers) {
        const o15 = t11.filter((e11) => s10.has(e11.name));
        o15.length > 0 && (f12.set(e10, o15), u13.set(e10, r8));
      }
      n14 = new o4(e9, r7.locations, f12, u13, o14), i9.vertexArrays.set(r7.stringHash, n14);
    }
    e9.bindVAO(n14);
  }
  draw(e9) {
    if (null == this._boundPart) throw new Error("Mesh.bind() has not been called.");
    const { start: r7, count: t11 } = this.parts[this._boundPart], { group: o13 } = this.parts[this._boundPart], { primitive: i9, index: n14 } = this.groups[o13];
    if (n14) {
      const o14 = this.indexBuffers.get(n14);
      if (!o14) throw new Error(`Missing index buffer "${n14}".`);
      const { indexType: f12 } = o14.buffer;
      if (!f12) throw new Error("Buffer type error.");
      e9.drawElements(i9, t11, f12, r7 * T[f12]);
    } else e9.drawArrays(i9, r7, t11);
  }
  unbind(e9) {
    this._boundPart = null, e9.bindVAO(null);
  }
  destroy() {
    for (const { vertexArrays: e9 } of this.groups) for (const [r7, t11] of e9) t11.disposeVAOOnly();
    for (const { buffer: e9 } of this.vertexBuffers.values()) e9.dispose();
    for (const { buffer: e9 } of this.indexBuffers.values()) e9.dispose();
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/meshing/SimpleMesh.js
var o6 = { position: { type: C.SHORT, count: 2 } };
var s6 = class _s extends o5 {
  static create(e9, r7) {
    const i9 = [];
    let { stride: o13 } = r7;
    if (null == o13) {
      o13 = 0;
      for (const [e10, { count: i10, type: n14, offset: s9 }] of Object.entries(r7.layout)) {
        if (null != s9) throw new Error("Stride cannot be computed automatically when attribute offsets are supplied explicitly.");
        o13 += i10 * T[n14];
      }
    }
    let a6 = 0;
    for (const [s9, { count: d10, offset: f12, type: m17, normalized: x8 }] of Object.entries(r7.layout)) {
      null != f12 && (a6 = f12);
      const e10 = new t2(s9, d10, m17, a6, o13, null != x8 && x8, 0);
      i9.push(e10), a6 += d10 * T[m17];
    }
    const l8 = { primitive: r7.primitive };
    null != r7.index && (l8.index = "indexData");
    let { count: u13 } = r7;
    if (null == u13 && (u13 = r7.index ? r7.index.length : r7.vertex.byteLength / o13, Math.floor(u13) !== u13)) throw new Error(`The byte length of vertex data must be an exact multiple of the stride, which is ${o13}.`);
    const c8 = { start: 0, count: u13, group: 0, primitive: r7.primitive }, p16 = { vertex: { vertexData: { data: r7.vertex, attributes: i9 } }, parts: [c8], groups: [l8] };
    return null != r7.index && (p16.index = { indexData: { data: r7.index } }), new _s(e9, p16, r7.layout);
  }
  static fromVertexStream(t11, e9) {
    return _s.create(t11, { primitive: E.TRIANGLE_STRIP, vertex: new Uint16Array(e9), layout: o6 });
  }
  constructor(t11, e9, r7) {
    super(t11, e9), this._spec = r7;
  }
  bind(t11, e9, r7 = 0) {
    super.bind(t11, e9, r7);
  }
};

// node_modules/@arcgis/core/symbols/cim/animationDebugFlags.js
var e6 = class {
  get forceStaticPath() {
    return "disabled" === has("esri-cim-animations-enable-status");
  }
  get forceAnimatedPath() {
    return "forced" === has("esri-cim-animations-enable-status");
  }
  get freezeGlobalTime() {
    const e9 = has("esri-cim-animations-freeze-time");
    return e9 ?? false;
  }
  get spotlightAnimatedSymbols() {
    return !!has("esri-cim-animations-spotlight");
  }
  get forceGlobalTimeOrigin() {
    return false !== has("esri-cim-animations-freeze-time");
  }
};
var t7 = new e6();

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AnimationUniformInfo.js
var d3 = class extends P2 {
};
r([g(_3)], d3.prototype, "globalTime", void 0), r([g(C3)], d3.prototype, "animationTextureSize", void 0), r([g(U2)], d3.prototype, "animationTexture", void 0), r([g(rt)], d3.prototype, "toScreen", void 0), r([g(rt)], d3.prototype, "toNdc", void 0), r([g(_3)], d3.prototype, "mapRotation", void 0), r([g(_3)], d3.prototype, "pixelRatio", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/utils.js
function b(t11) {
  const e9 = st(12.9898), f12 = st(78.233), s9 = st(43758.5453), l8 = pe(t11, ot(e9, f12)), m17 = Ce(l8, st(3.14));
  return Ee(nn(m17).multiply(s9));
}
function w4(t11) {
  return Ut(t11, st(k));
}
function j2(t11, n14) {
  return t11.x.multiply(n14.y).subtract(n14.x.multiply(t11.y));
}
function z(t11) {
  return t11.multiply(2).subtract(1);
}
function v2(t11, r7) {
  const u13 = st(2 ** r7);
  return Ce(ge(t11.divide(u13)), st(2));
}
function h4(t11, r7) {
  return Yt(v2(t11, r7), st(0.5));
}
function k2(n14, r7) {
  return v2(n14, r7 + K);
}
function q2(t11, n14) {
  return v2(t11, n14);
}
function A2(t11) {
  const r7 = v2(t11.z, 7), u13 = st(1).subtract(r7), i9 = t11.xyz.subtract(lt(0, 0, st(128)));
  return u13.multiply(t11).add(r7.multiply(i9));
}
function B4(t11) {
  const n14 = ht(255 / 256, 255 / 65536, 255 / 16777216, 255 / 4294967296);
  return pe(t11, n14);
}
function C5(t11) {
  return qe(qe(qe(t11.x, t11.y), t11.z), t11.w);
}
function D4(t11) {
  return new _3(1).subtract(t11);
}
function E5(t11) {
  return t11.subtract(new _3(1));
}
function H3(t11, n14) {
  return t11.subtract(new _3(n14));
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/EntityStorage.js
var p3 = class extends P2 {
  getVisualVariableData(t11) {
    if (!this._vvData) {
      const a6 = this.getAttributeDataCoords(t11);
      this._vvData = pn(this.visualVariableData, a6).setDebugName("storage2");
    }
    return this._vvData;
  }
  getAttributeDataCoords(t11) {
    if (!this._uv) {
      const a6 = A2(t11), e9 = this.size, i9 = ut(a6.x), u13 = ut(a6.y).multiply(ut(256)), l8 = ut(a6.z).multiply(ut(256)).multiply(ut(256)), n14 = st(i9.add(u13).add(l8)), p16 = Ce(n14, e9), d10 = n14.subtract(p16).divide(e9);
      this._uv = new C3(p16, d10).add(0.5).divide(e9);
    }
    return this._uv;
  }
  getFilterData(t11) {
    const a6 = this.getAttributeDataCoords(t11);
    return pn(this.filterFlags, a6).setDebugName("storage0");
  }
  getAnimationData(t11) {
    const a6 = this.getAttributeDataCoords(t11);
    return pn(this.animation, a6).setDebugName("storage1");
  }
  getVVData(t11) {
    return this.getVisualVariableData(t11);
  }
  getDataDrivenData0(t11) {
    const a6 = this.getAttributeDataCoords(t11);
    return pn(this.dataDriven0, a6).setDebugName("storage30");
  }
  getDataDrivenData1(t11) {
    const a6 = this.getAttributeDataCoords(t11);
    return pn(this.dataDriven1, a6).setDebugName("storage31");
  }
  getDataDrivenData2(t11) {
    const a6 = this.getAttributeDataCoords(t11);
    return pn(this.dataDriven2, a6).setDebugName("storage32");
  }
  getGPGPUData(t11) {
    const a6 = this.getAttributeDataCoords(t11);
    return pn(this.gpgpu, a6).setDebugName("storage4");
  }
  getLocalTimeOrigin(t11) {
    const a6 = this.getAttributeDataCoords(t11);
    return pn(this.localTimeOrigin, a6).x.setDebugName("storage5");
  }
  getFilterFlags(t11) {
    return has("webgl-ignores-sampler-precision") ? re(this.getFilterData(t11).x.multiply(st(255))) : this.getFilterData(t11).x.multiply(st(255));
  }
  getLabelVisibility(t11) {
    const a6 = this.getFilterData(t11).y.multiply(255);
    return new _3(1).subtract(a6);
  }
  getAnimationValue(t11) {
    return this.getAnimationData(t11).x;
  }
  getSizeValue(t11) {
    return this.getVisualVariableData(t11).x;
  }
  getColorValue(t11) {
    return this.getVisualVariableData(t11).y;
  }
  getOpacityValue(t11) {
    return this.getVisualVariableData(t11).z;
  }
  getRotationValue(t11) {
    return this.getVisualVariableData(t11).w;
  }
};
r([g(U2)], p3.prototype, "filterFlags", void 0), r([g(U2)], p3.prototype, "animation", void 0), r([g(U2)], p3.prototype, "gpgpu", void 0), r([g(U2)], p3.prototype, "localTimeOrigin", void 0), r([g(U2)], p3.prototype, "visualVariableData", void 0), r([g(U2)], p3.prototype, "dataDriven0", void 0), r([g(U2)], p3.prototype, "dataDriven1", void 0), r([g(U2)], p3.prototype, "dataDriven2", void 0), r([g(_3)], p3.prototype, "size", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ShaderHighlight.js
var e7 = class extends P2 {
};
r([g(_3)], e7.prototype, "activeReasons", void 0), r([g(_3)], e7.prototype, "highlightAll", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ShaderHittest.js
var e8 = class extends P2 {
};
r([g(C3)], e8.prototype, "position", void 0), r([g(_3)], e8.prototype, "distance", void 0), r([g(_3)], e8.prototype, "smallSymbolDistance", void 0), r([g(_3)], e8.prototype, "smallSymbolSizeThreshold", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ViewInfo.js
var d4 = class extends P2 {
};
r([g(rt)], d4.prototype, "displayViewScreenMat3", void 0), r([g(rt)], d4.prototype, "displayViewMat3", void 0), r([g(rt)], d4.prototype, "displayMat3", void 0), r([g(rt)], d4.prototype, "viewMat3", void 0), r([g(rt)], d4.prototype, "tileMat3", void 0), r([g(_3)], d4.prototype, "displayZoomFactor", void 0), r([g(_3)], d4.prototype, "requiredZoomFactor", void 0), r([g(C3)], d4.prototype, "tileOffset", void 0), r([g(_3)], d4.prototype, "currentScale", void 0), r([g(_3)], d4.prototype, "currentZoom", void 0), r([g(_3)], d4.prototype, "metersPerSRUnit", void 0), r([g(_3)], d4.prototype, "rotation", void 0), r([g(_3)], d4.prototype, "pixelRatio", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/AFeatureShader.js
var S2 = class extends C4 {
};
r([h3(0, X)], S2.prototype, "id", void 0), r([h3(1, _3)], S2.prototype, "bitset", void 0), r([h3(2, C3)], S2.prototype, "pos", void 0);
var q3 = class extends I4 {
};
r([h3(14, C3)], q3.prototype, "nextPos1", void 0), r([h3(15, C3)], q3.prototype, "nextPos2", void 0);
var P3 = class extends v {
};
var B5 = class extends j {
  clip(t11, i9) {
    let e9 = new _3(0);
    const o13 = this.storage.getFilterFlags(t11);
    if (e9 = e9.add(st(2).multiply(st(1).subtract(k2(o13, 0)))), this.inside ? e9 = e9.add(st(2).multiply(st(1).subtract(k2(o13, 1)))) : this.outside ? e9 = e9.add(st(2).multiply(k2(o13, 1))) : this.highlight && (e9 = e9.add(st(2).multiply(st(1).subtract(this._checkHighlight(o13))))), null != i9) {
      const t12 = new _3(1).subtract(sn(i9.x, this.view.currentZoom)), o14 = sn(i9.y, this.view.currentZoom);
      e9 = e9.add(new _3(2).multiply(t12.add(o14)));
    }
    return e9;
  }
  getFragmentOutput(t11, i9, e9 = new _3(1 / 255)) {
    const o13 = new w3();
    return o13.fragColor = this._maybeWriteHittest(i9) ?? this._maybeHighlight(t11, e9) ?? t11, o13;
  }
  _maybeHighlight(t11, i9) {
    return this.highlight ? new Y(t11.rgb, sn(i9, t11.a)) : null;
  }
  _checkHighlight(t11) {
    let e9 = this._checkHighlightBit(t11, 0);
    for (let o13 = 1; o13 < K; o13++) e9 = e9.add(this._checkHighlightBit(t11, o13));
    return sn(new _3(0.1), e9.add(this.highlight.highlightAll));
  }
  _checkHighlightBit(t11, i9) {
    return q2(t11, i9).multiply(v2(this.highlight.activeReasons, i9));
  }
  maybeRunHittest(t11, i9, e9) {
    if (null == this.hittestRequest) return null;
    const o13 = this.hittest(t11, i9, e9);
    let s9 = zt(Yt(o13, this.hittestRequest.distance), new _3(2), new _3(0));
    const r7 = this.storage.getAttributeDataCoords(t11.id), h11 = z(r7);
    s9 = s9.add(this.clip(t11.id, t11.zoomRange));
    const l8 = new Y(new _3(1 / 255), 0, 0, 0);
    return { glPointSize: new _3(1), glPosition: new Y(h11, s9, 1), color: l8 };
  }
  _maybeWriteHittest(t11) {
    return null != this.hittestRequest ? t11.color : null;
  }
};
r([K3], B5.prototype, "inside", void 0), r([K3], B5.prototype, "outside", void 0), r([_4(e7)], B5.prototype, "highlight", void 0), r([g(p3)], B5.prototype, "storage", void 0), r([g(d4)], B5.prototype, "view", void 0), r([_4(e8)], B5.prototype, "hittestRequest", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/MosaicInfo.js
var p4 = class extends P2 {
};
r([g(C3)], p4.prototype, "size", void 0), r([g(U2)], p4.prototype, "texture", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableColor.js
var f2 = class extends P2 {
  getColor(s9, t11, o13) {
    return Tt([Ht(w4(s9), o13), t11], [Xt(s9, this.values.first()), this.colors.first()], [Gt(s9, this.values.last()), this.colors.last()], [true, () => {
      const t12 = this.values.findIndex((t13) => Yt(t13, s9)), o14 = this.values.get(t12), r7 = t12.subtract(1), e9 = this.values.get(r7), i9 = s9.subtract(e9).divide(o14.subtract(e9));
      return _e(this.colors.get(r7), this.colors.get(t12), i9);
    }]);
  }
};
r([g(B3.ofType(Y, 8))], f2.prototype, "colors", void 0), r([g(B3.ofType(_3, 8))], f2.prototype, "values", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableOpacity.js
var h5 = class extends P2 {
  getOpacity(t11) {
    return Tt([w4(t11), new _3(1)], [Xt(t11, this.opacityValues.first()), this.opacities.first()], [Gt(t11, this.opacityValues.last()), this.opacities.last()], [true, () => {
      const s9 = this.opacityValues.findIndex((s10) => Yt(s10, t11)), i9 = this.opacityValues.get(s9), e9 = s9.subtract(1), o13 = this.opacityValues.get(e9), a6 = t11.subtract(o13).divide(i9.subtract(o13));
      return _e(this.opacities.get(e9), this.opacities.get(s9), a6);
    }]);
  }
};
r([g(B3.ofType(_3, 8))], h5.prototype, "opacities", void 0), r([g(B3.ofType(_3, 8))], h5.prototype, "opacityValues", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableRotation.js
var d5 = class extends P2 {
  getVVRotationMat4(t11) {
    return zt(w4(t11), ct.identity(), () => {
      const e9 = this.getNormalizedAngle(t11).multiply(t5), r7 = nn(e9), o13 = ie(e9);
      return new ct(o13, r7, 0, 0, r7.multiply(new _3(-1)), o13, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    });
  }
  getVVRotationMat3(t11) {
    return zt(w4(t11), rt.identity(), () => {
      const e9 = this.getNormalizedAngle(t11).multiply(t5), r7 = nn(e9), o13 = ie(e9);
      return new rt(o13, r7, 0, r7.multiply(new _3(-1)), o13, 0, 0, 0, 1);
    });
  }
  getNormalizedAngle(t11) {
    const e9 = Ut(this.rotationType, new _3(i3.Arithmatic));
    return zt(e9, new _3(90).subtract(t11), t11);
  }
};
r([g(_3)], d5.prototype, "rotationType", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableSizeMinMaxValue.js
var m4 = class extends P2 {
  getSize(t11, e9) {
    const r7 = this.minMaxValueAndSize.xy, o13 = this.minMaxValueAndSize.zw;
    return zt(w4(t11), e9, () => {
      const e10 = t11.subtract(r7.x).divide(r7.y.subtract(r7.x)), s9 = ce(e10, new _3(0), new _3(1));
      return o13.x.add(s9.multiply(o13.y.subtract(o13.x)));
    });
  }
};
r([g(Y)], m4.prototype, "minMaxValueAndSize", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableSizeScaleStops.js
var p5 = class extends P2 {
  getSizeForViewScale(s9) {
    return Tt([Xt(s9, this.values.first()), this.sizes.first()], [Gt(s9, this.values.last()), this.sizes.last()], [true, () => {
      const t11 = this.values.findIndex((t12) => Yt(t12, s9)), e9 = this.values.get(t11), i9 = t11.subtract(1), r7 = this.values.get(i9), o13 = s9.subtract(r7).divide(e9.subtract(r7));
      return _e(this.sizes.get(i9), this.sizes.get(t11), o13);
    }]);
  }
};
r([g(B3.ofType(_3, 8))], p5.prototype, "sizes", void 0), r([g(B3.ofType(_3, 8))], p5.prototype, "values", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableSizeStops.js
var f3 = class extends P2 {
  getSize(s9, t11) {
    const e9 = Tt([w4(s9), t11], [Xt(s9, this.values.first()), this.sizes.first()], [Gt(s9, this.values.last()), this.sizes.last()], [true, () => {
      const t12 = this.values.findIndex((t13) => Yt(t13, s9)), e10 = this.values.get(t12), i9 = t12.subtract(1), r7 = this.values.get(i9), o13 = s9.subtract(r7).divide(e10.subtract(r7));
      return _e(this.sizes.get(i9), this.sizes.get(t12), o13);
    }]);
    return zt(w4(e9), t11, e9);
  }
};
r([g(B3.ofType(_3, 8))], f3.prototype, "sizes", void 0), r([g(B3.ofType(_3, 8))], f3.prototype, "values", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableSizeUnitValue.js
var l2 = class extends P2 {
  getSize(t11, o13) {
    return zt(w4(t11), o13, t11.multiply(this.unitValueToPixelsRatio));
  }
};
r([g(_3)], l2.prototype, "unitValueToPixelsRatio", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/vvUtils.js
function t8(a6) {
  return null != a6.visualVariableSizeMinMaxValue || null != a6.visualVariableSizeScaleStops || null != a6.visualVariableSizeStops || null != a6.visualVariableSizeUnitValue;
}
function l3(a6, e9, i9) {
  var _a, _b, _c, _d;
  if (t8(a6)) {
    const t11 = a6.storage.getSizeValue(e9);
    return ((_a = a6.visualVariableSizeMinMaxValue) == null ? void 0 : _a.getSize(t11, i9)) ?? ((_b = a6.visualVariableSizeScaleStops) == null ? void 0 : _b.getSizeForViewScale(a6.view.currentScale)) ?? ((_c = a6.visualVariableSizeStops) == null ? void 0 : _c.getSize(t11, i9)) ?? ((_d = a6.visualVariableSizeUnitValue) == null ? void 0 : _d.getSize(t11, i9));
  }
  return i9;
}
function r5(e9, i9, t11, l8 = new J(false)) {
  if (null == e9.visualVariableColor) return t11;
  const r7 = e9.storage.getColorValue(i9);
  return e9.visualVariableColor.getColor(r7, t11, l8);
}
function n5(a6, i9) {
  if (null == a6.visualVariableOpacity) return new _3(1);
  const t11 = a6.storage.getOpacityValue(i9);
  return a6.visualVariableOpacity.getOpacity(t11);
}
function u3(a6, e9) {
  if (null == a6.visualVariableRotation) return rt.identity();
  const t11 = a6.storage.getRotationValue(e9);
  return a6.visualVariableRotation.getVVRotationMat3(t11);
}
function o7(a6, i9) {
  if (null == a6.visualVariableRotation) return new _3(0);
  const t11 = a6.storage.getRotationValue(i9);
  return a6.visualVariableRotation.getNormalizedAngle(t11);
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AnimatedShader.js
var L6 = class extends S2 {
};
r([h3(3, Y)], L6.prototype, "animationPointerAndBaseSizeAndReferenceSize", void 0), r([h3(4, C3)], L6.prototype, "zoomRange", void 0);
var U3 = class extends P3 {
};
var E6 = class extends B5 {
  _getScreenPosition(i9) {
    const { pos: t11, translation: o13, rotation: e9, scale: a6, offset: r7, id: d10, vvScale: c8 } = i9, y6 = o7(this, d10).multiply(Math.PI / 180), f12 = o13.x.multiply(4 / 3), h11 = o13.y.multiply(-1).multiply(4 / 3), S7 = nn(y6), b10 = ie(y6), g10 = b10.multiply(f12).add(xt(S7).multiply(h11)), V4 = S7.multiply(f12).add(b10.multiply(h11)), v8 = nn(e9.subtract(y6)), w10 = ie(e9.subtract(y6)), x8 = new _3(0), j7 = new _3(1), { pixelRatio: z6 } = this.animationInfo, T4 = new rt(j7, x8, x8, x8, j7, x8, g10.multiply(z6), V4.multiply(z6), j7), _9 = new rt(w10, v8.multiply(-1), x8, v8, w10, x8, 0, 0, j7), I7 = a6.multiply(c8).multiply(z6).multiply(4 / 3), C8 = _9.multiply(I7), O3 = this.animationInfo.toScreen.multiply(new X(t11, 1)), M5 = T4.multiply(O3).xy, P9 = C8.multiply(new X(r7, 0)).xy;
    return M5.add(P9);
  }
  _clip(i9, o13) {
    let e9 = super.clip(i9, o13);
    const a6 = Xt(this._getLocalTimeOrigin(i9), new _3(0));
    return t7.forceGlobalTimeOrigin || (e9 = e9.add(Tt([a6, () => new _3(2)], [true, () => new _3(0)]))), e9;
  }
  _getLocalTimeOrigin(i9) {
    return this.storage.getLocalTimeOrigin(i9);
  }
  _toNdc(i9) {
    return this.animationInfo.toNdc.multiply(new X(i9, 1)).xy;
  }
  _getEvalParams(i9, t11) {
    const { globalTime: o13, animationTextureSize: e9, animationTexture: a6 } = this.animationInfo;
    return { globalTime: o13, localTimeOrigin: this._getLocalTimeOrigin(i9.id), animationTextureSize: e9, animationTexture: a6, pixelDimensions: t11 };
  }
  _getColor(i9, t11) {
    return zt(Ut(t11.isSDF, new _3(1)), this._getSDFColor(i9, t11), this._getSpriteColor(i9, t11));
  }
  _getSpriteColor(i9, t11) {
    return pn(this.mosaicInfo.texture, i9).multiply(t11.color);
  }
  _getSDFColor(i9, t11) {
    const o13 = pn(this.mosaicInfo.texture, i9), e9 = new _3(0.5).subtract(B4(o13)).multiply(t11.distanceToPx).multiply(o3), a6 = ce(new _3(0.5).subtract(e9), new _3(0), new _3(1)), r7 = t11.color.multiply(a6), l8 = t11.outlineSize.multiply(0.5), s9 = Kt(e9).subtract(l8), n14 = ce(new _3(0.5).subtract(s9), new _3(0), new _3(1)), u13 = t11.outlineColor.multiply(n14);
    return new _3(1).subtract(u13.a).multiply(r7).add(u13);
  }
};
function G4(i9, t11, e9) {
  const a6 = i9.add(new C3(t11, 0)), r7 = pn(e9.animationTexture, a6.add(0.5).divide(e9.animationTextureSize)).xy;
  return i9 = i9.add(r7), It({ animationPointer: i9, ...e9 }, Y, null, (i10) => {
    const { out: t12 } = i10;
    if (!t12) throw new Error("out is null");
    return x({ ...i10, out: t12 });
  });
}
r([g(p4)], E6.prototype, "mosaicInfo", void 0), r([g(d3)], E6.prototype, "animationInfo", void 0), r([_4(f2)], E6.prototype, "visualVariableColor", void 0), r([_4(h5)], E6.prototype, "visualVariableOpacity", void 0), r([_4(m4)], E6.prototype, "visualVariableSizeMinMaxValue", void 0), r([_4(p5)], E6.prototype, "visualVariableSizeScaleStops", void 0), r([_4(f3)], E6.prototype, "visualVariableSizeStops", void 0), r([_4(l2)], E6.prototype, "visualVariableSizeUnitValue", void 0), r([_4(d5)], E6.prototype, "visualVariableRotation", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/enums.js
var o8;
!function(o13) {
  o13[o13.transform = 0] = "transform", o13[o13.fromColor = 1] = "fromColor", o13[o13.toColor = 2] = "toColor", o13[o13.colorMix = 3] = "colorMix", o13[o13.toOpacity = 4] = "toOpacity", o13[o13.opacityMix = 5] = "opacityMix";
}(o8 || (o8 = {}));

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/hittestUtils.js
function v3(n14, r7) {
  return pe(n14, Ye(r7));
}
function j3(t11, u13, s9) {
  const l8 = s9.subtract(u13), c8 = v3(t11.subtract(u13), l8), e9 = ce(c8.divide(Me(l8)), new _3(0), new _3(1));
  return fe(t11, u13.add(e9.multiply(s9.subtract(u13))));
}
function g2(t11) {
  const u13 = Kt(t11);
  return sn(u13.x.add(u13.y).add(u13.z), new _3(1.05));
}
function h6(t11, u13, n14, i9) {
  const y6 = new rt(n14.x.multiply(i9.y).subtract(i9.x.multiply(n14.y)), i9.x.multiply(u13.y).subtract(u13.x.multiply(i9.y)), u13.x.multiply(n14.y).subtract(n14.x.multiply(u13.y)), n14.y.subtract(i9.y), i9.y.subtract(u13.y), u13.y.subtract(n14.y), i9.x.subtract(n14.x), u13.x.subtract(i9.x), n14.x.subtract(u13.x)), s9 = u13.x.multiply(n14.y.subtract(i9.y)), l8 = n14.x.multiply(i9.y.subtract(u13.y)), a6 = i9.x.multiply(u13.y.subtract(n14.y)), o13 = s9.add(l8).add(a6);
  return new _3(1).divide(o13).multiply(y6.multiply(new X(1, t11)));
}
function M2(t11, u13, n14, i9) {
  return Ut(g2(h6(t11, u13, n14, i9)), new _3(1));
}
function P4(t11, u13, n14, i9) {
  const y6 = n14.subtract(u13), s9 = i9.subtract(u13), l8 = j2(y6, s9), c8 = Vt(Ct(l8, new _3(u2)), Yt(l8, new _3(-0.05)));
  return Tt([Vt(Ge(c8), M2(t11.xy, u13, n14, i9)), new _3(-1)], [true, () => {
    const r7 = j3(t11, u13, n14), y7 = j3(t11, n14, i9), s10 = j3(t11, i9, u13);
    return Ue(Ue(r7, y7), s10);
  }]);
}
function q4(t11) {
  return t11.distance.add(1);
}
function z2(t11, u13, n14) {
  const { viewMat3: r7, tileMat3: i9 } = t11.view, y6 = r7.multiply(i9), s9 = y6.multiply(new X(u13.pos, 1)), l8 = y6.multiply(new X(n14.nextPos1, 1)), c8 = y6.multiply(new X(n14.nextPos2, 1));
  return P4(t11.hittestRequest.position, s9.xy, l8.xy, c8.xy);
}
function R(t11, u13, n14) {
  return fe(t11, n14).subtract(u13);
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AnimatedMarkerShader.js
var W2 = class extends L6 {
};
r([h3(5, C3)], W2.prototype, "offset", void 0), r([h3(6, C3)], W2.prototype, "uv", void 0), r([h3(7, Y)], W2.prototype, "sizing", void 0), r([h3(8, _3)], W2.prototype, "angle", void 0);
var B6 = class extends I4 {
};
r([h3(12, C3)], B6.prototype, "offsetNextVertex1", void 0), r([h3(13, C3)], B6.prototype, "offsetNextVertex2", void 0), r([h3(14, C3)], B6.prototype, "textureUVNextVertex1", void 0), r([h3(15, C3)], B6.prototype, "textureUVNextVertex2", void 0);
var E7 = class extends U3 {
};
function G5(t11, e9, i9, s9) {
  return e9.multiply(t11.x).add(i9.multiply(t11.y)).add(s9.multiply(t11.z));
}
var H4 = class extends E6 {
  constructor() {
    super(...arguments), this.type = "AnimatedMarkerShader", this.computeAttributes = { offset: ["offsetNextVertex1", "offsetNextVertex2"], uv: ["textureUVNextVertex1", "textureUVNextVertex2"] };
  }
  _vertexPreamble(t11) {
    const { id: e9, pos: i9, offset: s9, animationPointerAndBaseSizeAndReferenceSize: o13, uv: r7, sizing: p16, angle: h11 } = t11, c8 = o13.xy, x8 = o13.z, y6 = o13.w, v8 = p16.xy, f12 = p16.z, w10 = v2(t11.bitset, o2.bitset.isStroke), S7 = p16.w, b10 = v2(t11.bitset, o2.bitset.scaleSymbolsProportionally), g10 = this._getEvalParams(t11, v8), z6 = G4(c8, o8.transform, g10), P9 = Tt([Ut(v2(t11.bitset, o2.bitset.isMapAligned), new _3(1)), this.view.rotation.divide(180).multiply(Math.PI)], [true, new _3(0)]), _9 = new nt(ie(P9), nn(P9.multiply(-1)), nn(P9), ie(P9)).multiply(z6.xy), V4 = z6.z.subtract(P9).subtract(h11.multiply(c2)), C8 = z6.w, j7 = v2(t11.bitset, o2.bitset.isSDF), F10 = l3(this, e9, new _3(y6)).divide(new _3(y6));
    return { baseSize: x8, animationPointer: c8, strokeWidth: f12, isOutline: w10, unscaledDistanceToPx: S7, scaleSymbolsProportionally: b10, isSDF: j7, position: this._getScreenPosition({ id: e9, pos: i9, offset: s9, referenceSize: y6, translation: _9, rotation: V4, scale: C8, vvScale: F10 }), uv: r7, evalParams: g10, vvScale: F10, scale: C8 };
  }
  vertex(t11, e9) {
    const { position: i9, animationPointer: s9, evalParams: o13, isOutline: r7, unscaledDistanceToPx: l8, vvScale: n14, uv: d10, strokeWidth: m17, scaleSymbolsProportionally: u13, scale: v8, isSDF: f12, baseSize: w10 } = this._vertexPreamble(t11), S7 = this._toNdc(i9);
    let b10 = G4(s9, o8.fromColor, o13);
    b10 = new Y(b10.rgb.multiply(b10.a), b10.a);
    let g10 = G4(s9, o8.toColor, o13);
    g10 = new Y(g10.rgb.multiply(g10.a), g10.a);
    let z6 = G4(s9, o8.colorMix, o13);
    z6 = new Y(z6.rgb.multiply(z6.a), z6.a);
    const P9 = G4(s9, o8.toOpacity, o13).a, _9 = G4(s9, o8.opacityMix, o13).a, V4 = r5(this, t11.id, b10, Ht(h4(t11.bitset, o2.bitset.colorLocked), new J(r7))), C8 = _e(V4, g10, z6), D7 = n5(this, t11.id), j7 = _e(D7, P9, _9), F10 = C8.multiply(j7), R6 = this.clip(t11.id, t11.zoomRange), U4 = l8.multiply(n14);
    return { glPosition: new Y(S7, R6, 1), uv: d10.divide(this.mosaicInfo.size), color: F10.multiply(new _3(1).subtract(r7)), outlineColor: F10.multiply(r7), distanceToPx: U4, strokeWidth: m17.multiply(_e(new _3(1), v8, u13)), isOutline: r7, isSDF: f12, ...this.maybeRunHittest(t11, e9, { pos: t11.pos, size: w10, sizeCorrection: new _3(1), isMapAligned: new _3(1), vvRotationMat3: new rt(1, 0, 0, 0, 1, 0, 0, 0, 1), placementMat3: new rt(1, 0, 0, 0, 1, 0, 0, 0, 1), outlineSize: new _3(1), distanceToPx: U4, isSDF: f12 }) };
  }
  fragment(t11) {
    let e9 = this._getColor(t11.uv, { color: t11.color, distanceToPx: t11.distanceToPx, isSDF: t11.isSDF, outlineColor: t11.outlineColor, outlineSize: t11.strokeWidth });
    return t7.spotlightAnimatedSymbols && (e9 = e9.add(new Y(0, 0.3, 0, 0.3))), this.getFragmentOutput(e9, t11);
  }
  hittest(t11, e9, i9) {
    return zt(Ct(i9.size, this.hittestRequest.smallSymbolSizeThreshold), this._hittestSmallMarker(t11, e9, i9), this._hittestMarker(t11, e9, i9));
  }
  _hittestSmallMarker(t11, e9, i9) {
    const { position: s9, distance: o13, smallSymbolDistance: r7 } = this.hittestRequest, l8 = o13.subtract(r7), { viewMat3: a6, tileMat3: n14 } = this.view, d10 = a6.multiply(n14).multiply(new X(i9.pos, 1)).xy, m17 = i9.size.multiply(0.5);
    return fe(d10, s9).subtract(m17).add(l8);
  }
  _hittestMarker(t11, e9, i9) {
    const s9 = this._vertexPreamble({ ...t11 }).position, o13 = this._vertexPreamble({ ...t11, offset: e9.offsetNextVertex1, uv: e9.textureUVNextVertex1 }).position, r7 = this._vertexPreamble({ ...t11, offset: e9.offsetNextVertex2, uv: e9.textureUVNextVertex2 }).position, l8 = this.hittestRequest.position, a6 = this.hittestRequest.distance, n14 = P4(l8, s9, o13, r7);
    return zt(Yt(n14, a6), n14, this._hittestSamples(s9, o13, r7, t11, e9, i9));
  }
  _hittestSamples(t11, e9, i9, s9, o13, r7) {
    const { outlineSize: l8, isSDF: n14, distanceToPx: d10 } = r7, m17 = this.hittestRequest.position, u13 = this.hittestRequest.distance, h11 = h6(m17.add(new C3(xt(u13), xt(u13))), t11, e9, i9), c8 = h6(m17.add(new C3(0, xt(u13))), t11, e9, i9), x8 = h6(m17.add(new C3(u13, xt(u13))), t11, e9, i9), y6 = h6(m17.add(new C3(xt(u13), 0)), t11, e9, i9), v8 = h6(m17, t11, e9, i9), f12 = h6(m17.add(new C3(u13, 0)), t11, e9, i9), w10 = h6(m17.add(new C3(xt(u13), u13)), t11, e9, i9), S7 = h6(m17.add(new C3(0, u13)), t11, e9, i9), b10 = h6(m17.add(new C3(u13, u13)), t11, e9, i9), _9 = s9.uv.divide(this.mosaicInfo.size), V4 = o13.textureUVNextVertex1.divide(this.mosaicInfo.size), C8 = o13.textureUVNextVertex2.divide(this.mosaicInfo.size), M5 = { color: new Y(1, 1, 1, 1), outlineSize: l8, outlineColor: new Y(1, 1, 1, 1), isSDF: n14, distanceToPx: d10 };
    let N = new _3(0);
    return N = N.add(g2(h11).multiply(this._getColor(G5(h11, _9, V4, C8), M5).a)), N = N.add(g2(c8).multiply(this._getColor(G5(c8, _9, V4, C8), M5).a)), N = N.add(g2(x8).multiply(this._getColor(G5(x8, _9, V4, C8), M5).a)), N = N.add(g2(y6).multiply(this._getColor(G5(y6, _9, V4, C8), M5).a)), N = N.add(g2(v8).multiply(this._getColor(G5(v8, _9, V4, C8), M5).a)), N = N.add(g2(f12).multiply(this._getColor(G5(f12, _9, V4, C8), M5).a)), N = N.add(g2(w10).multiply(this._getColor(G5(w10, _9, V4, C8), M5).a)), N = N.add(g2(S7).multiply(this._getColor(G5(S7, _9, V4, C8), M5).a)), N = N.add(g2(b10).multiply(this._getColor(G5(b10, _9, V4, C8), M5).a)), sn(N, new _3(0.05)).multiply(q4(this.hittestRequest));
  }
};
r([e(0, m3(W2)), e(1, m3(B6))], H4.prototype, "vertex", null), r([e(0, m3(E7))], H4.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/FeatureTechnique.js
var t9 = class extends t6 {
  constructor() {
    super(...arguments), this.symbologyPlane = S.FILL, this._input = null;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AnimatedTechnique.js
var u4 = class extends t9 {
  render(a6, u13) {
    const { context: f12, painter: c8 } = a6, { target: l8 } = u13, { freezeGlobalTime: p16 } = t7, g10 = 0, x8 = c8.textureManager.animationStore.getTexture(f12, g10), d10 = [2 / a6.state.size[0], 0, 0, 0, -2 / a6.state.size[1], 0, -1, 1, 1], h11 = Array.from(s2(e5(), d10)), b10 = Array.from(i2(e5(), h11, l8.transforms.displayViewScreenMat3)), T4 = u13.instance.getInput();
    c8.setShader({ shader: this.shaders.geometry, uniforms: { ...m2(a6, u13.target, T4.uniforms), ...h2(a6, u13.target), mosaicInfo: c8.textureManager.getMosaicInfo(f12, u13.textureKey, true), animationInfo: { globalTime: false === p16 ? a6.time / 1e3 : p16, animationTextureSize: [x8.descriptor.width, x8.descriptor.height], animationTexture: { unit: 6, texture: x8 }, toScreen: b10, toNdc: d10, mapRotation: a6.state.rotation, pixelRatio: a6.state.pixelRatio } }, defines: { ...y(a6) }, optionalAttributes: { zoomRange: true }, useComputeBuffer: true }), c8.setPipelineState({ ...M(a6) }), c8.submitDraw(a6, u13), false === p16 && l8.requestRender();
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AnimatedMarkerTechnique.js
var m5 = class extends u4 {
  constructor() {
    super(...arguments), this.type = e2.AnimatedMarker, this.symbologyPlane = S.MARKER, this.shaders = { geometry: new H4() };
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/dotDensity/DotDensityPointShader.js
var z3 = class extends C4 {
};
r([h3(0, C3)], z3.prototype, "pos", void 0);
var P5 = class extends P3 {
};
var R2 = class extends P2 {
};
r([g(_3)], R2.prototype, "dotSize", void 0);
var b2 = class extends P2 {
};
r([g(U2)], b2.prototype, "locations", void 0), r([g(_3)], b2.prototype, "pixelRatio", void 0), r([g(_3)], b2.prototype, "tileZoomFactor", void 0);
var F3 = 1e-6;
var C6 = class extends j {
  constructor() {
    super(...arguments), this.type = "DotDensityPointShader";
  }
  vertex(t11) {
    const o13 = new rt(1, 0, 0, 0, -1, 0, 0, 1, 1).multiply(new X(t11.pos.xy.divide(a), 1)), i9 = pn(this.draw.locations, o13.xy), s9 = qe(this.instance.dotSize.divide(2), new _3(1));
    let r7 = new _3(0);
    r7 = r7.add(sn(i9.a, new _3(F3)).multiply(2));
    let d10 = s9.add(this.instance.dotSize);
    const n14 = this.view.displayViewScreenMat3.multiply(new X(t11.pos.add(0.5), 1)), a6 = new Y(n14.xy, r7, 1), p16 = this.instance.dotSize.divide(d10), h11 = new _3(-1).divide(s9.divide(d10));
    return d10 = d10.multiply(this.draw.pixelRatio.multiply(this.draw.tileZoomFactor)), { glPosition: a6, glPointSize: d10, color: i9, ratio: p16, invEdgeRatio: h11 };
  }
  fragment(t11) {
    const o13 = Me(t11.glPointCoord.subtract(0.5)).multiply(2), e9 = cn(new _3(0), new _3(1), t11.invEdgeRatio.multiply(o13.subtract(t11.ratio)).add(1)), i9 = new w3();
    return i9.fragColor = t11.color.multiply(e9), i9;
  }
};
r([g(R2)], C6.prototype, "instance", void 0), r([g(b2)], C6.prototype, "draw", void 0), r([g(d4)], C6.prototype, "view", void 0), r([e(0, m3(z3))], C6.prototype, "vertex", null), r([e(0, m3(P5))], C6.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/dotDensity/DotDensityPolygonShader.js
var j4 = class extends S2 {
};
r([h3(3, _3)], j4.prototype, "inverseArea", void 0);
var V = class extends P2 {
};
r([g(B3.ofType(Y, 2))], V.prototype, "isActive", void 0), r([g(B3.ofType(Y, 8))], V.prototype, "colors", void 0), r([g(_3)], V.prototype, "dotValue", void 0);
var _5 = class extends P2 {
};
r([g(U2)], _5.prototype, "dotTexture0", void 0), r([g(U2)], _5.prototype, "dotTexture1", void 0), r([g(_3)], _5.prototype, "tileZoomFactor", void 0), r([g(_3)], _5.prototype, "pixelRatio", void 0), r([g(_3)], _5.prototype, "tileDotsOverArea", void 0);
var F4 = class extends B5 {
  constructor() {
    super(...arguments), this.type = "DotDensityPolygonShader";
  }
  _dotThreshold(t11, e9, o13) {
    return t11.divide(e9).divide(o13);
  }
  vertex(t11) {
    const e9 = new rt(2 / a, 0, 0, 0, -2 / a, 0, -1, 1, 1).multiply(new X(t11.pos, 1)), s9 = this.clip(t11.id), i9 = new Y(e9.xy, s9, 1), r7 = this.storage.getVVData(t11.id).multiply(this.instance.isActive.get(0)).multiply(t11.inverseArea), l8 = this.storage.getDataDrivenData0(t11.id).multiply(this.instance.isActive.get(1)).multiply(t11.inverseArea), d10 = this.draw.tileZoomFactor.multiply(a).divide(this.draw.pixelRatio), n14 = this._dotThreshold(r7, this.instance.dotValue, this.draw.tileDotsOverArea), a6 = this._dotThreshold(l8, this.instance.dotValue, this.draw.tileDotsOverArea), u13 = t11.pos.add(0.5).divide(d10);
    return { glPosition: i9, color: new Y(0, 0, 0, 0), textureCoords: u13, thresholds0: n14, thresholds1: a6 };
  }
  fragment(t11) {
    const e9 = new w3(), o13 = pn(this.draw.dotTexture0, t11.textureCoords), s9 = pn(this.draw.dotTexture1, t11.textureCoords), i9 = t11.thresholds0.subtract(o13), r7 = t11.thresholds1.subtract(s9);
    let l8;
    const n14 = ct.fromColumns(this.instance.colors[0], this.instance.colors[1], this.instance.colors[2], this.instance.colors[3]), a6 = ct.fromColumns(this.instance.colors[4], this.instance.colors[5], this.instance.colors[6], this.instance.colors[7]);
    if (this.blending) {
      const t12 = sn(new _3(0), i9), e10 = sn(new _3(0), r7), o14 = pe(t12, i9).add(pe(e10, r7)), s10 = sn(o14, new _3(0)), d10 = new _3(1).subtract(s10), p16 = o14.add(s10), h11 = i9.multiply(t12).divide(p16), c8 = r7.multiply(e10).divide(p16), u13 = n14.multiply(h11).add(a6.multiply(c8));
      l8 = d10.multiply(u13);
    } else {
      const t12 = qe(C5(i9), C5(r7)), e10 = sn(t12, new _3(0)), o14 = new _3(1).subtract(e10), s10 = sn(t12, i9), d10 = sn(t12, r7), p16 = n14.multiply(s10).add(a6.multiply(d10));
      l8 = o14.multiply(p16);
    }
    return e9.fragColor = l8, e9;
  }
  hittest(t11) {
    return q4(this.hittestRequest);
  }
};
r([K3], F4.prototype, "blending", void 0), r([g(V)], F4.prototype, "instance", void 0), r([g(_5)], F4.prototype, "draw", void 0), r([e(0, m3(j4))], F4.prototype, "vertex", null), r([e(0, m3(P3))], F4.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/dotDensity/DotDensityResources.js
var p6 = { pos: { count: 2, type: C.UNSIGNED_SHORT } };
var f4 = class {
  constructor() {
    this._dotTextureSize = 0, this._dotTextures = null, this._dotMesh = null;
  }
  destroy() {
    this._disposeTextures(), this._dotFBO && this._dotFBO.dispose(), this._dotMesh && this._dotMesh.destroy();
  }
  getFBO(t11) {
    if (null == this._dotFBO) {
      const s9 = a, o13 = a, h11 = new p(s9, o13);
      h11.samplingMode = L2.NEAREST, h11.wrapMode = D.CLAMP_TO_EDGE;
      const d10 = new s5(t11, new i4(B.DEPTH_STENCIL, s9, o13));
      this._dotFBO = new x2(t11, h11, d10);
    }
    return this._dotFBO;
  }
  getDotDensityMesh(t11) {
    if (null == this._dotMesh) {
      const o13 = a, r7 = o13 * o13, i9 = 2, n14 = new Int16Array(r7 * i9);
      for (let t12 = 0; t12 < o13; t12++) for (let e9 = 0; e9 < o13; e9++) n14[i9 * (e9 + t12 * o13)] = e9, n14[i9 * (e9 + t12 * o13) + 1] = t12;
      this._dotMesh = s6.create(t11, { primitive: E.POINTS, vertex: n14, count: r7, layout: p6 });
    }
    return this._dotMesh;
  }
  getDotDensityTextures(e9, s9, o13) {
    if (this._dotTextureSize === s9 && this._seed === o13 || (this._disposeTextures(), this._dotTextureSize = s9, this._seed = o13), null === this._dotTextures) {
      const r7 = new t(o13);
      this._dotTextures = [this._allocDotDensityTexture(e9, s9, r7), this._allocDotDensityTexture(e9, s9, r7)];
    }
    return this._dotTextures;
  }
  _disposeTextures() {
    if (this._dotTextures) {
      for (let t11 = 0; t11 < this._dotTextures.length; t11++) this._dotTextures[t11].dispose();
      this._dotTextures = null;
    }
  }
  _allocDotDensityTexture(t11, e9, s9) {
    const o13 = new Float32Array(e9 * e9 * 4);
    for (let r7 = 0; r7 < o13.length; r7++) o13[r7] = s9.getFloat();
    const i9 = new p();
    return i9.dataType = U.FLOAT, i9.samplingMode = L2.NEAREST, i9.width = e9, i9.height = e9, new w(t11, i9, o13);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/FillShader.js
var g3 = class extends S2 {
};
r([h3(3, Y)], g3.prototype, "color", void 0), r([h3(4, C3)], g3.prototype, "zoomRange", void 0);
var x3 = class extends B5 {
  constructor() {
    super(...arguments), this.type = "FillShader", this.computeAttributes = { pos: ["nextPos1", "nextPos2"] };
  }
  vertex(t11, o13) {
    const r7 = n5(this, t11.id), e9 = r5(this, t11.id, t11.color).multiply(r7), i9 = this.view.displayViewScreenMat3.multiply(new X(t11.pos.xy, 1)), p16 = this.clip(t11.id, t11.zoomRange);
    return { glPosition: new Y(i9.xy, p16, 1), color: e9, ...this.maybeRunHittest(t11, o13, null) };
  }
  fragment(t11) {
    return this.getFragmentOutput(t11.color, t11, new _3(0));
  }
  hittest(t11, o13) {
    return z2(this, t11, o13);
  }
};
r([_4(f2)], x3.prototype, "visualVariableColor", void 0), r([_4(h5)], x3.prototype, "visualVariableOpacity", void 0), r([e(0, m3(g3)), e(1, m3(q3))], x3.prototype, "vertex", null), r([e(0, m3(P3))], x3.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/dotDensity/DotDensityTechnique.js
var w5 = class extends t9 {
  constructor() {
    super(...arguments), this.type = e2.DotDensity, this.shaders = { polygon: new F4(), point: new C6(), fill: new x3() }, this._resources = /* @__PURE__ */ new Map();
  }
  render(e9, t11) {
    p2(e9) || f(e9) ? this._renderPolygons(e9, t11) : this._renderDotDensity(e9, t11);
  }
  _renderPolygons(e9, t11) {
    const { painter: i9 } = e9;
    i9.setShader({ shader: this.shaders.fill, uniforms: { ...h2(e9, t11.target), visualVariableColor: null, visualVariableOpacity: null }, defines: { ...y(e9) }, optionalAttributes: { zoomRange: false }, useComputeBuffer: f(e9) }), i9.setPipelineState(M(e9)), i9.submitDraw(e9, t11);
  }
  _renderDotDensity(o13, r7) {
    const { context: s9, painter: u13, requiredLevel: c8 } = o13, p16 = r7.instance.getInput().uniforms, h11 = this._getOrCreateResourcesRecord(s9), m17 = h11.getDotDensityTextures(s9, a, p16.seed), w10 = 1 / 2 ** (c8 - r7.target.key.level), g10 = a, x8 = g10 * window.devicePixelRatio * g10 * window.devicePixelRatio, D7 = 1 / w10 * (1 / w10), y6 = p16.dotScale ? o13.state.scale / p16.dotScale : 1, b10 = p16.dotValue * y6 * D7;
    u13.setShader({ shader: this.shaders.polygon, uniforms: { ...h2(o13, r7.target), instance: { isActive: p16.isActive, colors: p16.colors, dotValue: Math.max(1, b10) }, draw: { dotTexture0: { unit: H, texture: m17[0] }, dotTexture1: { unit: I2, texture: m17[1] }, tileZoomFactor: w10, pixelRatio: window.devicePixelRatio, tileDotsOverArea: x8 / (a * window.devicePixelRatio * a * window.devicePixelRatio) } }, defines: { ...y(o13), blending: p16.blending }, optionalAttributes: {}, useComputeBuffer: false });
    const R6 = s9.getViewport();
    s9.setViewport(0, 0, a, a);
    const v8 = s9.getBoundFramebufferObject(), P9 = h11.getFBO(s9);
    s9.bindFramebuffer(P9), s9.setClearColor(0, 0, 0, 0), s9.clear(_2.COLOR), u13.setPipelineState({ color: { write: [true, true, true, true], blendMode: "composite" }, depth: false, stencil: false }), u13.updatePipelineState(s9), u13.submitDraw(o13, r7), s9.bindFramebuffer(v8), s9.setViewport(R6.x, R6.y, R6.width, R6.height);
    const S7 = h11.getFBO(s9).colorTexture, _9 = { shader: this.shaders.point, uniforms: { view: c3(o13, r7.target), instance: { dotSize: p16.dotSize }, draw: { locations: { unit: H, texture: S7 }, tileZoomFactor: 1, pixelRatio: window.devicePixelRatio } }, defines: { ...y(o13) }, optionalAttributes: {}, useComputeBuffer: false };
    u13.setPipelineState(M(o13)), u13.submitDrawMesh(s9, _9, h11.getDotDensityMesh(s9));
  }
  shutdown(e9) {
    var _a;
    super.shutdown(e9), (_a = this._resources.get(e9)) == null ? void 0 : _a.destroy(), this._resources.delete(e9);
  }
  _getOrCreateResourcesRecord(e9) {
    let t11 = this._resources.get(e9);
    return null == t11 && (t11 = new f4(), this._resources.set(e9, t11)), t11;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/LocalTileOffset.js
var n6 = class extends P2 {
  getPatternOffsetAtTileOrigin(t11, i9 = new _3(0), l8 = new _3(1)) {
    const n14 = new C3(I3).divide(t11);
    let p16 = t11.multiply(Ee(this.maxIntsToLocalOrigin.multiply(n14))).add(this.tileOffsetFromLocalOrigin).subtract(new _3(0.5).multiply(t11));
    return p16 = new C3(p16.x.multiply(l8).subtract(p16.y.multiply(i9)), p16.x.multiply(i9).add(p16.y.multiply(l8))), Ce(p16, t11);
  }
};
r([g(C3)], n6.prototype, "tileOffsetFromLocalOrigin", void 0), r([g(C3)], n6.prototype, "maxIntsToLocalOrigin", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ComplexFillShader.js
var q5 = class extends g3 {
};
r([h3(5, Y)], q5.prototype, "tlbr", void 0), r([h3(6, _3)], q5.prototype, "width", void 0), r([h3(7, _3)], q5.prototype, "height", void 0), r([h3(8, C3)], q5.prototype, "offset", void 0), r([h3(9, C3)], q5.prototype, "scale", void 0), r([h3(10, _3)], q5.prototype, "angle", void 0);
var G6 = class extends P3 {
};
function L7(t11, e9, o13, i9, r7) {
  const l8 = Ut(v2(r7, C2), st(1)), s9 = B4(new Y(t11, 0));
  return zt(l8, ft(i9.divide(e9.x), o13.divide(e9.y), 0, xt(o13.divide(e9.x)), i9.divide(e9.y), 0, b(ot(s9, 0)), b(ot(0, s9)), 1), ft(i9.divide(e9.x), o13.divide(e9.y), 0, xt(o13.divide(e9.x)), i9.divide(e9.y), 0, 0, 0, 1));
}
function P6(t11, e9) {
  const o13 = t11.view.requiredZoomFactor, i9 = new C3(e9.width, e9.height), r7 = i9.multiply(e9.scale).multiply(o13), m17 = e9.angle.multiply(c2), u13 = nn(m17), f12 = ie(m17), c8 = L7(e9.id, r7, u13, f12, e9.bitset), y6 = t11.localTileOffset.getPatternOffsetAtTileOrigin(i9, u13, f12), v8 = o13.multiply(e9.scale).multiply(e9.offset.subtract(y6)).divide(r7), h11 = new X(e9.pos, 1), x8 = c8.multiply(h11).xy.subtract(v8), g10 = e9.tlbr.divide(t11.mosaicInfo.size.xyxy);
  let b10 = v2(e9.bitset, q);
  return null != t11.visualVariableColor && (b10 = zt(w4(t11.storage.getColorValue(e9.id)), new _3(0), b10)), { tileTextureCoord: x8, tlbr: g10, sampleAlphaOnly: b10 };
}
function Z(t11, e9) {
  const o13 = Ce(e9.tileTextureCoord, new _3(1)), i9 = _e(e9.tlbr.xy, e9.tlbr.zw, o13);
  let r7 = pn(t11.mosaicInfo.texture, i9);
  return r7 = zt(Yt(e9.sampleAlphaOnly, new _3(0.5)), r7.aaaa, r7), e9.color.multiply(r7);
}
var _6 = class extends x3 {
  constructor() {
    super(...arguments), this.type = "ComplexFillShader";
  }
  vertex(t11, e9) {
    return { ...super.vertex(t11, e9), ...P6(this, t11) };
  }
  fragment(t11) {
    const e9 = Z(this, t11);
    return this.getFragmentOutput(e9, t11, new _3(0));
  }
};
r([g(p4)], _6.prototype, "mosaicInfo", void 0), r([g(n6)], _6.prototype, "localTileOffset", void 0), r([e(0, m3(q5)), e(1, m3(q3))], _6.prototype, "vertex", null), r([e(0, m3(G6))], _6.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/ComplexFillTechnique.js
var m6 = class extends t9 {
  constructor() {
    super(...arguments), this.type = e2.ComplexFill, this.shaders = { geometry: new _6() };
  }
  render(e9, n14) {
    const { context: u13, painter: m17 } = e9, p16 = n14.instance.getInput();
    m17.setShader({ shader: this.shaders.geometry, uniforms: { ...m2(e9, n14.target, p16.uniforms), ...h2(e9, n14.target), mosaicInfo: m17.textureManager.getMosaicInfo(u13, n14.textureKey), localTileOffset: w2(n14.target) }, defines: { ...y(e9) }, optionalAttributes: p16.optionalAttributes, useComputeBuffer: f(e9) }), m17.setPipelineState(M(e9)), m17.submitDraw(e9, n14);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/utils.js
function n7(n14) {
  const t11 = 1 / n14;
  return { antialiasing: t11, blur: 0 + t11 };
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/LineShader.js
var q6 = class extends S2 {
};
r([h3(3, Y)], q6.prototype, "color", void 0), r([h3(4, C3)], q6.prototype, "offset", void 0), r([h3(5, C3)], q6.prototype, "normal", void 0), r([h3(6, _3)], q6.prototype, "halfWidth", void 0), r([h3(7, _3)], q6.prototype, "referenceHalfWidth", void 0), r([h3(8, C3)], q6.prototype, "zoomRange", void 0);
var A3 = class extends P3 {
};
var F5 = class extends P2 {
};
function k3(t11) {
  return qe(new _3(h).multiply(sn(t11, new _3(n3))), new _3(1));
}
function D5(t11, i9) {
  const { halfWidth: e9, normal: o13 } = t11, l8 = k3(e9), a6 = Me(o13).multiply(e9);
  return ce(l8.multiply(e9.subtract(a6)).divide(i9.add(l8).subtract(new _3(1))), new _3(0), new _3(1));
}
function G7(t11, i9) {
  const { id: e9, halfWidth: o13, referenceHalfWidth: l8 } = i9;
  if (t8(t11)) {
    const i10 = new _3(2).multiply(l8), a6 = l3(t11, e9, i10);
    return new _3(0.5).multiply(o13.divide(qe(l8, new _3(s4)))).multiply(a6);
  }
  return o13;
}
function L8(t11, i9) {
  const { id: e9, offset: o13, pos: l8, normal: a6, zoomRange: r7 } = i9, { displayViewScreenMat3: s9, displayViewMat3: n14 } = t11.view, c8 = r5(t11, e9, i9.color), f12 = n5(t11, e9), h11 = G7(t11, i9), v8 = new _3(0.5).multiply(t11.antialiasingControls.antialiasing), w10 = qe(h11.add(v8), new _3(0.45)).add(new _3(0.1).multiply(v8)), V4 = k3(w10).multiply(w10).multiply(o13), b10 = n14.multiply(new X(V4, new _3(0))), S7 = s9.multiply(new X(l8, new _3(1))).add(b10), x8 = new _3(2).multiply(sn(h11, new _3(0))).add(t11.clip(e9, r7)), g10 = new Y(S7.xy, x8, 1);
  return { color: c8, opacity: f12, halfWidth: w10, normal: a6, scaledOffset: V4, scaledHalfWidth: h11, glPosition: new Y(g10.xy, x8, 1) };
}
function T2(t11, i9) {
  const { opacity: e9, color: o13 } = t11, l8 = D5(t11, i9);
  return e9.multiply(o13).multiply(l8);
}
r([g(_3)], F5.prototype, "antialiasing", void 0), r([g(_3)], F5.prototype, "blur", void 0);
var _7 = class extends B5 {
  constructor() {
    super(...arguments), this.type = "LineShader", this.computeAttributes = { pos: ["nextPos1", "nextPos2"] };
  }
  vertex(t11, i9) {
    const e9 = L8(this, t11);
    return { ...e9, ...this.maybeRunHittest(t11, i9, e9.halfWidth) };
  }
  fragment(t11) {
    const i9 = T2(t11, this.antialiasingControls.blur);
    return this.getFragmentOutput(i9, t11);
  }
  hittest(t11, i9, e9) {
    const { viewMat3: o13, tileMat3: l8 } = this.view, a6 = o13.multiply(l8), r7 = a6.multiply(new X(t11.pos, 1)), s9 = a6.multiply(new X(i9.nextPos1, 1)), n14 = a6.multiply(new X(i9.nextPos2, 1)), { distance: p16, smallSymbolDistance: u13, smallSymbolSizeThreshold: y6 } = this.hittestRequest, f12 = sn(e9, y6.multiply(0.5)).multiply(p16.subtract(u13)), h11 = this.hittestRequest.position;
    return Ue(j3(h11, r7.xy, s9.xy), j3(h11, r7.xy, n14.xy)).subtract(e9).add(f12);
  }
};
r([g(F5)], _7.prototype, "antialiasingControls", void 0), r([_4(f2)], _7.prototype, "visualVariableColor", void 0), r([_4(h5)], _7.prototype, "visualVariableOpacity", void 0), r([_4(m4)], _7.prototype, "visualVariableSizeMinMaxValue", void 0), r([_4(p5)], _7.prototype, "visualVariableSizeScaleStops", void 0), r([_4(f3)], _7.prototype, "visualVariableSizeStops", void 0), r([_4(l2)], _7.prototype, "visualVariableSizeUnitValue", void 0), r([e(0, m3(q6)), e(1, m3(q3))], _7.prototype, "vertex", null), r([e(0, m3(A3))], _7.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/OutlineFillShader.js
var W3 = class extends S2 {
};
r([h3(3, C3)], W3.prototype, "offset", void 0), r([h3(4, Y)], W3.prototype, "color", void 0), r([h3(5, C3)], W3.prototype, "normal", void 0), r([h3(6, _3)], W3.prototype, "halfWidth", void 0), r([h3(7, _3)], W3.prototype, "referenceHalfWidth", void 0), r([h3(8, C3)], W3.prototype, "zoomRange", void 0);
var F6 = class extends A3 {
};
function R3(t11, o13, i9) {
  const { id: e9, bitset: r7 } = o13, s9 = v2(r7, B2), m17 = Yt(s9, new _3(0.5)), d10 = L8(t11, o13), c8 = zt(m17, d10.halfWidth, new _3(0)), f12 = n5(t11, e9), h11 = r5(t11, e9, o13.color), v8 = zt(m17, o13.color, h11.multiply(f12)), V4 = t11.view.displayViewScreenMat3.multiply(new X(o13.pos.xy, 1)), b10 = t11.clip(o13.id), j7 = new Y(V4.xy, b10, 1), g10 = zt(m17, d10.glPosition, j7), w10 = i9 && t11.maybeRunHittest(o13, i9, m17);
  return { isOutline: s9, color: v8, opacity: new _3(1), halfWidth: c8, normal: d10.normal, glPosition: g10, ...w10 };
}
var A4 = class extends B5 {
  constructor() {
    super(...arguments), this.computeAttributes = { pos: ["nextPos1", "nextPos2"] };
  }
};
r([g(F5)], A4.prototype, "antialiasingControls", void 0), r([_4(f2)], A4.prototype, "visualVariableColor", void 0), r([_4(h5)], A4.prototype, "visualVariableOpacity", void 0), r([_4(m4)], A4.prototype, "visualVariableSizeMinMaxValue", void 0), r([_4(p5)], A4.prototype, "visualVariableSizeScaleStops", void 0), r([_4(f3)], A4.prototype, "visualVariableSizeStops", void 0), r([_4(l2)], A4.prototype, "visualVariableSizeUnitValue", void 0);
var H5 = class extends A4 {
  constructor() {
    super(...arguments), this.type = "OutlineFillShader";
  }
  vertex(t11, o13) {
    return R3(this, t11, o13);
  }
  fragment(t11) {
    const { color: o13, isOutline: i9 } = t11, e9 = Yt(i9, new _3(0.5)), r7 = T2(t11, this.antialiasingControls.blur), s9 = zt(e9, r7, o13), n14 = zt(e9, new _3(1 / 255), new _3(0));
    return this.getFragmentOutput(s9, t11, n14);
  }
  hittest(t11, o13, i9) {
    return zt(i9, q4(this.hittestRequest), z2(this, t11, o13));
  }
};
r([e(0, m3(W3)), e(1, m3(q3))], H5.prototype, "vertex", null), r([e(0, m3(F6))], H5.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/PatternFillShader.js
var w6 = class extends g3 {
};
r([h3(5, Y)], w6.prototype, "tlbr", void 0), r([h3(6, _3)], w6.prototype, "inverseRasterizationScale", void 0);
var g4 = class extends P3 {
};
function j5(t11) {
  const e9 = new _3(1), r7 = new _3(0);
  return new rt(e9.divide(t11.x), r7.divide(t11.y), 0, xt(r7.divide(t11.x)), e9.divide(t11.y), 0, 0, 0, 1);
}
function O2(t11, e9) {
  const r7 = e9.tlbr.xy, o13 = e9.tlbr.zw, i9 = o13.x.subtract(r7.x), n14 = r7.y.subtract(o13.y), a6 = new C3(i9, n14).multiply(e9.inverseRasterizationScale), p16 = a6.multiply(t11.view.requiredZoomFactor), u13 = j5(p16), c8 = t11.localTileOffset.getPatternOffsetAtTileOrigin(a6).divide(p16), d10 = new X(e9.pos, 1);
  return { tileTextureCoord: u13.multiply(d10).xy.subtract(c8), tlbr: e9.tlbr.divide(t11.mosaicInfo.size.xyxy) };
}
function S3(t11, e9) {
  const r7 = Ce(t11.tileTextureCoord, new _3(1)), o13 = _e(t11.tlbr.xy, t11.tlbr.zw, r7), i9 = pn(e9.texture, o13);
  return t11.color.multiply(i9);
}
var T3 = class extends x3 {
  constructor() {
    super(...arguments), this.type = "PatternFillShader";
  }
  vertex(t11, e9) {
    return { ...super.vertex(t11, e9), ...O2(this, t11) };
  }
  fragment(t11) {
    const e9 = S3(t11, this.mosaicInfo);
    return this.getFragmentOutput(e9, t11, new _3(0));
  }
};
r([g(p4)], T3.prototype, "mosaicInfo", void 0), r([g(n6)], T3.prototype, "localTileOffset", void 0), r([e(0, m3(w6)), e(1, m3(q3))], T3.prototype, "vertex", null), r([e(0, m3(g4))], T3.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/PatternOutlineFillShader.js
var y2 = class extends W3 {
};
r([h3(9, Y)], y2.prototype, "tlbr", void 0), r([h3(10, _3)], y2.prototype, "inverseRasterizationScale", void 0);
var S4 = class extends F6 {
};
var x4 = class extends H5 {
  constructor() {
    super(...arguments), this.type = "PatternOutlineFillShader";
  }
  vertex(t11, r7) {
    return { ...R3(this, t11, r7), ...O2(this, t11) };
  }
  fragment(t11) {
    const { isOutline: r7 } = t11, e9 = Yt(r7, new _3(0.5)), o13 = T2(t11, this.antialiasingControls.blur), s9 = S3(t11, this.mosaicInfo), n14 = zt(e9, o13, s9), p16 = zt(e9, new _3(1 / 255), new _3(0));
    return this.getFragmentOutput(n14, t11, p16);
  }
};
r([g(p4)], x4.prototype, "mosaicInfo", void 0), r([g(n6)], x4.prototype, "localTileOffset", void 0), r([e(0, m3(y2)), e(1, m3(q3))], x4.prototype, "vertex", null), r([e(0, m3(S4))], x4.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ComplexOutlineFillShader.js
var b3 = 1 / K2;
var w7 = class extends S2 {
};
r([h3(3, Y)], w7.prototype, "color", void 0), r([h3(4, Y)], w7.prototype, "tlbr", void 0), r([h3(5, _3)], w7.prototype, "angle", void 0), r([h3(6, _3)], w7.prototype, "aux1", void 0), r([h3(7, _3)], w7.prototype, "aux2", void 0), r([h3(8, C3)], w7.prototype, "aux3", void 0), r([h3(9, C3)], w7.prototype, "aux4", void 0), r([h3(10, C3)], w7.prototype, "zoomRange", void 0);
var C7 = class extends S4 {
};
var R4 = class extends A4 {
  constructor() {
    super(...arguments), this.type = "ComplexOutlineFillShader";
  }
  vertex(t11, o13) {
    const { aux1: e9, aux2: r7, aux3: i9, aux4: p16 } = t11, a6 = { ...t11, width: e9, height: r7, offset: i9, scale: p16.multiply(b3) }, n14 = { ...t11, halfWidth: e9, referenceHalfWidth: r7, offset: i9, normal: p16.subtract(L4).multiply(b3) }, m17 = R3(this, n14), u13 = P6(this, a6), f12 = Yt(m17.isOutline, new _3(0.5));
    return { ...m17, ...u13, ...this.maybeRunHittest(t11, o13, f12) };
  }
  fragment(t11) {
    const { isOutline: o13 } = t11, e9 = Yt(o13, new _3(0.5)), r7 = T2(t11, this.antialiasingControls.blur), i9 = Z(this, t11), a6 = zt(e9, r7, i9), n14 = zt(e9, new _3(1 / 255), new _3(0));
    return this.getFragmentOutput(a6, t11, n14);
  }
  hittest(t11, o13, e9) {
    return zt(e9, q4(this.hittestRequest), z2(this, t11, o13));
  }
};
r([g(p4)], R4.prototype, "mosaicInfo", void 0), r([g(n6)], R4.prototype, "localTileOffset", void 0), r([e(0, m3(w7)), e(1, m3(q3))], R4.prototype, "vertex", null), r([e(0, m3(C7))], R4.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/ComplexOutlineFillTechnique.js
var m7 = class extends t9 {
  constructor() {
    super(...arguments), this.type = e2.ComplexOutlineFill, this.shaders = { geometry: new R4() };
  }
  render(e9, a6) {
    const { context: u13, painter: m17, pixelRatio: p16 } = e9, f12 = a6.instance.getInput();
    m17.setShader({ shader: this.shaders.geometry, uniforms: { ...m2(e9, a6.target, f12.uniforms), ...h2(e9, a6.target), antialiasingControls: n7(p16), mosaicInfo: m17.textureManager.getMosaicInfo(u13, a6.textureKey), localTileOffset: w2(a6.target) }, defines: { ...y(e9) }, optionalAttributes: f12.optionalAttributes, useComputeBuffer: f(e9) }), m17.setPipelineState(M(e9)), m17.submitDraw(e9, a6);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/FillTechnique.js
var u5 = class extends t9 {
  constructor() {
    super(...arguments), this.type = e2.Fill, this.shaders = { geometry: new x3() };
  }
  render(e9, n14) {
    const { painter: a6 } = e9, u13 = n14.instance.getInput();
    a6.setShader({ shader: this.shaders.geometry, uniforms: { ...m2(e9, n14.target, u13.uniforms), ...h2(e9, n14.target) }, defines: y(e9), optionalAttributes: u13.optionalAttributes, useComputeBuffer: f(e9) }), a6.setPipelineState(M(e9)), a6.submitDraw(e9, n14);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/GradientFillShader.js
var P7 = class extends g3 {
};
r([h3(5, Y)], P7.prototype, "tlbr", void 0), r([h3(6, C3)], P7.prototype, "relativePosition", void 0), r([h3(7, _3)], P7.prototype, "gradientMethod", void 0), r([h3(8, C3)], P7.prototype, "relativeGradientSize", void 0);
var D6 = class extends P3 {
};
var A5 = class extends x3 {
  constructor() {
    super(...arguments), this.type = "GradientFillShader";
  }
  vertex(t11, e9) {
    const { tlbr: i9, relativePosition: r7, gradientMethod: o13, relativeGradientSize: n14 } = t11, d10 = zt(h4(t11.bitset, e3.isAbsolute), this.view.displayZoomFactor, new _3(1));
    return { ...super.vertex(t11, e9), tlbr: i9, relativePosition: r7, gradientMethod: o13, gradientSize: n14.multiply(d10), isDiscrete: v2(t11.bitset, e3.isDiscrete) };
  }
  fragment(t11) {
    const { tlbr: e9, relativePosition: i9, gradientMethod: r7, gradientSize: o13, isDiscrete: g10 } = t11, y6 = zt(Yt(g10, new _3(0.5)), o13.subtract(1), new C3(0)), b10 = Tt([Ut(r7, new _3(r4.rectangular)), () => {
      const t12 = Kt(i9).add(y6).divide(o13);
      return D4(qe(t12.x, t12.y));
    }], [Ut(r7, new _3(r4.circular)), D4(un(pe(i9, i9)).add(y6.x).divide(o13.x))], [true, D4(i9.x.add(y6.x).divide(o13.x))]), j7 = new C3(ce(b10, new _3(0), new _3(1)), 0.5), S7 = _e(e9.xy, e9.zw, j7).divide(this.mosaicInfo.size), z6 = pn(this.mosaicInfo.texture, S7), F10 = t11.color.a;
    return this.getFragmentOutput(z6.multiply(F10), t11, new _3(0));
  }
};
r([g(p4)], A5.prototype, "mosaicInfo", void 0), r([e(0, m3(P7)), e(1, m3(q3))], A5.prototype, "vertex", null), r([e(0, m3(D6))], A5.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/GradientFillTechnique.js
var u6 = class extends t9 {
  constructor() {
    super(...arguments), this.type = e2.GradientFill, this.shaders = { geometry: new A5() }, this.symbologyPlane = S.FILL;
  }
  render(e9, t11) {
    const { context: a6, painter: m17 } = e9, u13 = t11.instance.getInput();
    m17.setShader({ shader: this.shaders.geometry, uniforms: { ...m2(e9, t11.target, u13.uniforms), ...h2(e9, t11.target), mosaicInfo: m17.textureManager.getMosaicInfo(a6, t11.textureKey) }, defines: { ...y(e9) }, optionalAttributes: u13.optionalAttributes, useComputeBuffer: f(e9) }), m17.setPipelineState(M(e9)), m17.submitDraw(e9, t11);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/OutlineFillTechnique.js
var l4 = class extends t9 {
  constructor() {
    super(...arguments), this.type = e2.OutlineFill, this.shaders = { geometry: new H5() };
  }
  render(e9, n14) {
    const { painter: u13, pixelRatio: l8 } = e9, m17 = n14.instance.getInput();
    u13.setShader({ shader: this.shaders.geometry, uniforms: { ...m2(e9, n14.target, m17.uniforms), ...h2(e9, n14.target), antialiasingControls: n7(l8) }, defines: { ...y(e9) }, optionalAttributes: m17.optionalAttributes, useComputeBuffer: f(e9) }), u13.setPipelineState(M(e9)), u13.submitDraw(e9, n14);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/PatternFillTechnique.js
var m8 = class extends t9 {
  constructor() {
    super(...arguments), this.type = e2.PatternFill, this.shaders = { geometry: new T3() };
  }
  render(e9, n14) {
    const { context: u13, painter: m17 } = e9, f12 = n14.instance.getInput();
    m17.setShader({ shader: this.shaders.geometry, uniforms: { ...m2(e9, n14.target, f12.uniforms), ...h2(e9, n14.target), mosaicInfo: m17.textureManager.getMosaicInfo(u13, n14.textureKey), localTileOffset: w2(n14.target) }, defines: { ...y(e9) }, optionalAttributes: f12.optionalAttributes, useComputeBuffer: f(e9) }), m17.setPipelineState(M(e9)), m17.submitDraw(e9, n14);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/PatternOutlineFillTechnique.js
var m9 = class extends t9 {
  constructor() {
    super(...arguments), this.type = e2.PatternOutlineFill, this.shaders = { geometry: new x4() };
  }
  render(e9, a6) {
    const { context: l8, painter: m17, pixelRatio: p16 } = e9, f12 = a6.instance.getInput();
    m17.setShader({ shader: this.shaders.geometry, uniforms: { ...m2(e9, a6.target, f12.uniforms), ...h2(e9, a6.target), antialiasingControls: n7(p16), mosaicInfo: m17.textureManager.getMosaicInfo(l8, a6.textureKey), localTileOffset: w2(a6.target) }, defines: { ...y(e9) }, optionalAttributes: f12.optionalAttributes, useComputeBuffer: f(e9) }), m17.setPipelineState(M(e9)), m17.submitDraw(e9, a6);
  }
};

// node_modules/@arcgis/core/views/webgl/heatmapTextureUtils.js
var l5 = class {
  constructor(e9, t11, r7, o13) {
    this.dataType = e9, this.samplingMode = t11, this.pixelFormat = r7, this.internalFormat = o13;
  }
};
function n8(n14, i9) {
  const { textureFloatLinear: s9, colorBufferFloat: f12 } = n14.capabilities, u13 = f12 == null ? void 0 : f12.textureFloat, _9 = f12 == null ? void 0 : f12.textureHalfFloat, c8 = f12 == null ? void 0 : f12.floatBlend, m17 = n14.driverTest.floatBufferBlend.result;
  if (!u13 && !_9) throw new s("heatmap:missing-color-buffer-float", "HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");
  if (!(c8 && m17 || _9)) throw new s("heatmap:missing-float-blend", "HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float." + (m17 ? "" : " This device claims support for EXT_float_blend, but does not actually support it."));
  const p16 = u13 && c8 && m17, d10 = _9, R6 = s9, h11 = !!(f12 == null ? void 0 : f12.R32F), b10 = !!(f12 == null ? void 0 : f12.R16F);
  if (p16 && R6) return R6 || i9.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."), new l5(U.FLOAT, R6 ? L2.LINEAR : L2.NEAREST, h11 ? G2.RED : G2.RGBA, h11 ? P.R32F : G2.RGBA);
  if (d10) return new l5(U.HALF_FLOAT, L2.LINEAR, b10 ? G2.RED : G2.RGBA, b10 ? P.R16F : G2.RGBA);
  throw new s("heatmap:missing-hardware-support", "HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.");
}
var i5 = new l5(U.HALF_FLOAT, L2.NEAREST, G2.RGBA, G2.RGBA);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/heatmap/HeatmapResources.js
var m10 = () => n.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.heatmap.HeatmapResources");
var f5 = class {
  destroy() {
    this._accumulateFramebuffer = r2(this._accumulateFramebuffer), this._resolveGradientTexture = r2(this._resolveGradientTexture), this._prevGradientHash = null, this._qualityProfile = null;
  }
  get initialized() {
    return null != this._accumulateFramebuffer && null != this._resolveGradientTexture;
  }
  get accumulateFramebuffer() {
    return this._accumulateFramebuffer;
  }
  get resolveGradientTexture() {
    return this._resolveGradientTexture;
  }
  loadQualityProfile(e9) {
    if (null == this._qualityProfile) {
      const r7 = n8(e9, m10());
      this._qualityProfile = { ...r7, defines: { usesHalfFloatPrecision: r7.dataType !== U.FLOAT } };
    }
    return this._qualityProfile;
  }
  ensureAccumulateFBO(e9, r7, t11) {
    if (null == this._accumulateFramebuffer) {
      const { dataType: u13, samplingMode: o13, pixelFormat: m17, internalFormat: f12 } = this.loadQualityProfile(e9), h11 = new p(r7, t11);
      h11.pixelFormat = m17, h11.internalFormat = f12, h11.dataType = u13, h11.samplingMode = o13, h11.wrapMode = D.CLAMP_TO_EDGE;
      const c8 = new i4(B.DEPTH_STENCIL, r7, t11);
      this._accumulateFramebuffer = new x2(e9, h11, c8);
    } else {
      const { width: e10, height: a6 } = this._accumulateFramebuffer;
      e10 === r7 && a6 === t11 || this._accumulateFramebuffer.resize(r7, t11);
    }
    return this._accumulateFramebuffer;
  }
  ensureResolveGradientTexture(e9, r7, t11) {
    if (null == this._resolveGradientTexture) {
      const r8 = new p();
      r8.wrapMode = D.CLAMP_TO_EDGE, this._resolveGradientTexture = new w(e9, r8), this._prevGradientHash = null;
    }
    return this._prevGradientHash !== r7 && (this._resolveGradientTexture.resize(t11.length / 4, 1), this._resolveGradientTexture.setData(t11), this._prevGradientHash = r7), this._resolveGradientTexture;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/heatmapUtils.js
function n9(n14) {
  return n14 ? 0.25 : 1;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/HeatmapAccumulateShader.js
var v4 = class extends S2 {
};
r([h3(5, C3)], v4.prototype, "offset", void 0);
var x5 = class extends P3 {
};
var g5 = class extends P2 {
};
r([g(_3)], g5.prototype, "radius", void 0), r([g(_3)], g5.prototype, "isFieldActive", void 0);
var F7 = class extends B5 {
  constructor() {
    super(...arguments), this.type = "HeatmapAccumulateShader", this.usesHalfFloatPrecision = false;
  }
  vertex(t11) {
    const { radius: e9, isFieldActive: s9 } = this.kernelControls, i9 = t11.offset, l8 = s9.multiply(this.storage.getVVData(t11.id).x).add(new _3(1).subtract(s9)), o13 = this.view.displayViewScreenMat3.multiply(new X(t11.pos, 1)).add(this.view.displayViewMat3.multiply(new X(i9, 0)).multiply(e9)), r7 = this.clip(t11.id);
    return { glPosition: new Y(o13.xy, r7, 1), offset: i9, fieldValue: l8, color: new Y(0), ...this.maybeRunHittest(t11, {}, null) };
  }
  fragment(t11) {
    const { offset: e9, fieldValue: s9 } = t11, i9 = Me(e9), l8 = sn(i9, new _3(1)), o13 = new _3(1).subtract(i9.multiply(i9)), r7 = o13.multiply(o13), p16 = l8.multiply(r7).multiply(s9).multiply(new _3(n9(this.usesHalfFloatPrecision)));
    return this.getFragmentOutput(new Y(p16), t11);
  }
  hittest(t11) {
    const { viewMat3: e9, tileMat3: s9 } = this.view, i9 = e9.multiply(s9).multiply(new X(t11.pos, 1));
    return R(i9.xy, this.kernelControls.radius, this.hittestRequest.position);
  }
};
r([K3], F7.prototype, "usesHalfFloatPrecision", void 0), r([g(g5)], F7.prototype, "kernelControls", void 0), r([e(0, m3(v4))], F7.prototype, "vertex", null), r([e(0, m3(x5))], F7.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/HeatmapResolveShader.js
var g6 = class extends C4 {
};
r([h3(0, C3)], g6.prototype, "position", void 0);
var f6 = class extends v {
};
var h7 = class extends P2 {
};
r([g(U2)], h7.prototype, "texture", void 0), r([g(C3)], h7.prototype, "minAndInvRange", void 0), r([g(_3)], h7.prototype, "normalization", void 0);
var w8 = class extends P2 {
};
r([g(U2)], w8.prototype, "texture", void 0);
var b4 = class extends j {
  constructor() {
    super(...arguments), this.type = "HeatmapResolveShader", this.usesHalfFloatPrecision = false;
  }
  vertex(t11) {
    return { glPosition: new Y(t11.position.multiply(2).subtract(1), 1, 1), uv: t11.position };
  }
  fragment(t11) {
    const { accumulatedDensity: e9, gradient: o13 } = this;
    let s9 = pn(e9.texture, t11.uv).r.divide(new _3(n9(this.usesHalfFloatPrecision)));
    s9 = s9.multiply(e9.normalization), s9 = s9.subtract(e9.minAndInvRange.x).multiply(e9.minAndInvRange.y);
    const r7 = pn(o13.texture, new C3(s9, 0.5)), i9 = new w3();
    return i9.fragColor = new Y(r7.rgb.multiply(r7.a), r7.a), i9;
  }
};
r([K3], b4.prototype, "usesHalfFloatPrecision", void 0), r([g(h7)], b4.prototype, "accumulatedDensity", void 0), r([g(w8)], b4.prototype, "gradient", void 0), r([e(0, m3(g6))], b4.prototype, "vertex", null), r([e(0, m3(f6))], b4.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/heatmap/HeatmapTechnique.js
var p7 = class extends t9 {
  constructor() {
    super(...arguments), this.type = e2.Heatmap, this.drawPhase = E4.MAP | E4.HITTEST | E4.DEBUG, this.shaders = { accumulate: new F7(), resolve: new b4() }, this._isBound = false, this._resources = /* @__PURE__ */ new Map();
  }
  shutdown(e9) {
    var _a;
    super.shutdown(e9), (_a = this._resources.get(e9)) == null ? void 0 : _a.destroy(), this._resources.delete(e9), this._prevFBO = null, this._unbind();
  }
  render(e9, t11) {
    const { context: n14, painter: o13, state: u13 } = e9, a6 = t11.instance.getInput(), { isFieldActive: d10 } = a6.uniforms, l8 = this._getOrCreateResourcesRecord(n14), h11 = l8.loadQualityProfile(n14);
    f(e9) || this._bind(e9, l8, a6), o13.setShader({ shader: this.shaders.accumulate, uniforms: { ...h2(e9, t11.target), kernelControls: { radius: g7(a6, u13), isFieldActive: d10 ? 1 : 0 } }, defines: { ...y(e9), ...h11.defines }, optionalAttributes: {}, useComputeBuffer: f(e9) });
    const c8 = f(e9) ? w9 : _8;
    o13.setPipelineState(c8), o13.submitDraw(e9, t11);
  }
  getStencilReference(e9) {
    return f7(e9);
  }
  renderResolvePass(e9, t11) {
    if (f(e9)) return;
    const { context: s9, painter: i9 } = e9, n14 = this._resources.get(s9);
    if (null == this._prevFBO || null == this._prevViewport || !(n14 == null ? void 0 : n14.initialized)) return;
    const { defines: o13 } = n14.loadQualityProfile(s9), { minDensity: u13, maxDensity: a6, radius: d10 } = t11.getInput().uniforms, l8 = 8, h11 = 9, c8 = n14.accumulateFramebuffer, p16 = n14.resolveGradientTexture, m17 = { shader: this.shaders.resolve, uniforms: { accumulatedDensity: { texture: { unit: l8, texture: c8.colorTexture }, minAndInvRange: [u13, 1 / (a6 - u13)], normalization: 3 / (d10 * d10 * Math.PI) }, gradient: { texture: { unit: h11, texture: p16 } } }, defines: o13, optionalAttributes: {}, useComputeBuffer: false };
    s9.bindFramebuffer(this._prevFBO), s9.setViewport(0, 0, this._prevViewport.width, this._prevViewport.height), s9.bindTexture(c8.colorTexture, l8), s9.bindTexture(p16, h11), i9.setPipelineState(b5), i9.submitDrawMesh(s9, m17, i9.quadMesh), this._unbind();
  }
  _getOrCreateResourcesRecord(e9) {
    let t11 = this._resources.get(e9);
    return null == t11 && (t11 = new f5(), this._resources.set(e9, t11)), t11;
  }
  _unbind() {
    this._prevFBO = null, this._prevViewport = null, this._isBound = false;
  }
  _bind(e9, t11, r7) {
    if (this._isBound) return;
    const { context: s9, state: i9, pixelRatio: n14 } = e9, o13 = s9.getBoundFramebufferObject(), u13 = s9.getViewport();
    this._prevFBO = o13, this._prevViewport = u13;
    const { gradient: a6, gradientHash: d10 } = r7.uniforms;
    t11.ensureResolveGradientTexture(s9, d10, a6);
    const { width: l8, height: p16 } = u13, f12 = m11(g7(r7, i9), n14), _9 = l8 * f12, w10 = p16 * f12, b10 = t11.ensureAccumulateFBO(s9, _9, w10);
    s9.blitFramebuffer(o13, b10, 0, 0, o13.width, o13.height, 0, 0, b10.width, b10.height, _2.STENCIL, L2.NEAREST), s9.bindFramebuffer(b10), s9.setViewport(0, 0, b10.width, b10.height), s9.setColorMask(true, true, true, true), s9.setClearColor(0, 0, 0, 0), s9.clear(_2.COLOR), this._isBound = true;
  }
};
function m11(e9, t11) {
  const r7 = t11 > 1.5 ? 0.25 : 0.5;
  return e9 < 1 / (2 * r7) ? 1 : r7;
}
function f7(e9) {
  return e9.key.level + 1;
}
var _8 = { color: { write: [true, true, true, true], blendMode: "additive" }, depth: false, stencil: { write: false, test: { ref: f7, compare: O.GEQUAL, mask: 255, op: { fail: I.KEEP, zFail: I.KEEP, zPass: I.REPLACE } } } };
var w9 = { ..._8, stencil: false };
var b5 = { color: { write: [true, true, true, true], blendMode: "composite" }, depth: false, stencil: false };
function g7(e9, t11) {
  const { referenceScale: r7, radius: s9 } = e9.uniforms;
  return s9 * (0 !== r7 ? r7 / t11.scale : 1);
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/text/TextShader.js
var Q2 = 360 / 254;
var X2;
!function(t11) {
  t11[t11.Color = 0] = "Color", t11[t11.Outline = 1] = "Outline", t11[t11.Halo = 2] = "Halo";
}(X2 || (X2 = {}));
var Y2 = class extends S2 {
};
r([h3(3, Y)], Y2.prototype, "color", void 0), r([h3(4, C3)], Y2.prototype, "offset", void 0), r([h3(5, C3)], Y2.prototype, "textureUV", void 0), r([h3(6, _3)], Y2.prototype, "fontSize", void 0), r([h3(7, _3)], Y2.prototype, "referenceSize", void 0), r([h3(8, Y)], Y2.prototype, "outlineColor", void 0), r([h3(9, Y)], Y2.prototype, "haloColor", void 0), r([h3(10, C3)], Y2.prototype, "outlineAndHaloSize", void 0), r([h3(11, C3)], Y2.prototype, "zoomRange", void 0), r([h3(12, _3)], Y2.prototype, "clipAngle", void 0), r([h3(13, Y)], Y2.prototype, "referenceSymbol", void 0);
var $ = class extends I4 {
};
r([h3(14, C3)], $.prototype, "offsetNextVertex1", void 0), r([h3(15, C3)], $.prototype, "offsetNextVertex2", void 0);
var tt = class extends P3 {
};
var et = class extends B5 {
  constructor() {
    super(...arguments), this.type = "TextShader", this.computeAttributes = { offset: ["offsetNextVertex1", "offsetNextVertex2"] }, this.textRenderPassType = X2.Color, this.isBackgroundPass = false, this.isLabel = false;
  }
  clipLabel(t11, e9, o13) {
    const s9 = e9.multiply(Q2), l8 = Kt(this.view.rotation.subtract(s9)), a6 = Ue(new _3(360).subtract(l8), l8);
    let r7 = new _3(0);
    const n14 = ge(this.view.currentZoom.multiply(si)).divide(si), p16 = t11.x, h11 = t11.y, f12 = new _3(1).subtract(sn(p16, n14)).multiply(2), v8 = sn(new _3(90), a6).multiply(2), w10 = new _3(2).multiply(new _3(1).subtract(sn(n14, h11)));
    return r7 = r7.add(o13.multiply(f12)), r7 = r7.add(o13.multiply(v8)), r7 = r7.add(w10), r7;
  }
  vertex(t11, e9) {
    const i9 = v2(t11.bitset, F2), s9 = new _3(1).subtract(i9);
    let l8 = t11.fontSize, a6 = l8.divide(A);
    const r7 = this.textRenderPassType === X2.Outline ? t11.outlineColor : this.textRenderPassType === X2.Halo ? t11.haloColor : this._getVertexColor(t11), n14 = this.isLabel ? this.storage.getLabelVisibility(t11.id) : new _3(1), p16 = this.isLabel ? r7.multiply(n14) : r7, d10 = this.view.displayViewScreenMat3.multiply(new X(t11.pos, 1));
    let u13 = t11.offset, m17 = new _3(1), c8 = rt.identity(), j7 = new C3(0);
    if (this.isLabel) {
      if (!t11.referenceSymbol) throw new Error("InternalError: Optional attribute 'referenceSymbol' expected for labels");
      const e10 = t11.referenceSymbol, i10 = e10.xy, s10 = e10.z, l9 = this._unpackDirection(e10.w), a7 = l3(this, t11.id, s10).divide(2), r8 = l9.multiply(a7.add(L3));
      j7 = i10.add(r8), u13 = u13.add(j7);
    } else {
      m17 = l3(this, t11.id, t11.referenceSize).divide(t11.referenceSize), l8 = l8.multiply(m17), a6 = a6.multiply(m17), u13 = u13.multiply(m17), c8 = u3(this, t11.id), u13 = c8.multiply(new X(u13, 0)).xy;
    }
    const R6 = v2(t11.bitset, H2), C8 = this._getViewRotationMatrix(R6).multiply(new X(u13, 0));
    let O3 = this.isLabel ? this.clipLabel(t11.zoomRange, t11.clipAngle, R6) : this.clip(t11.id, t11.zoomRange);
    O3 = this.isBackgroundPass ? O3.add(s9.multiply(2)) : O3.add(i9.multiply(2));
    let M5 = new _3(0);
    if (this.textRenderPassType === X2.Outline) {
      O3 = O3.add(zt(Ut(t11.outlineAndHaloSize.x, new _3(0)), new _3(2), new _3(0)));
      M5 = new _3(t11.outlineAndHaloSize.x).divide(a6).divide(G3);
    }
    if (this.textRenderPassType === X2.Halo) {
      const e10 = t11.outlineAndHaloSize.x, i10 = new _3(t11.outlineAndHaloSize.y);
      O3 = O3.add(zt(Ut(i10, new _3(0)), new _3(2), new _3(0)));
      M5 = i10.add(e10).divide(a6).divide(G3);
    }
    const L9 = this.isLabel ? Ht(Yt(O3, new _3(1)), Xt(n14, new _3(0))) : new J(false);
    return { glPosition: new Y(d10.xy.add(C8.xy), O3, 1), color: p16, size: a6, textureUV: t11.textureUV.divide(this.mosaicInfo.size), antialiasingWidth: new _3(0.105 * A).divide(l8).divide(this.view.pixelRatio), outlineDistanceOffset: M5, ...this.maybeRunHittest(t11, e9, { vvSizeAdjustment: m17, vvRotation: c8, labelOffset: j7, labelClipped: L9 }) };
  }
  _getViewRotationMatrix(t11) {
    const e9 = this.view.displayViewMat3, i9 = this.view.displayMat3, o13 = new _3(1).subtract(t11);
    return e9.multiply(t11).add(i9.multiply(o13));
  }
  fragment(t11) {
    const e9 = new _3(2 / 8), i9 = new _3(1).subtract(e9), o13 = pn(this.mosaicInfo.texture, t11.textureUV).a;
    let s9 = i9.subtract(t11.outlineDistanceOffset);
    this.highlight && (s9 = s9.divide(2));
    const l8 = t11.antialiasingWidth, a6 = cn(s9.subtract(l8), s9.add(l8), o13);
    return this.getFragmentOutput(t11.color.multiply(a6), t11);
  }
  hittest(t11, e9, { vvSizeAdjustment: i9, vvRotation: o13, labelOffset: s9, labelClipped: l8 }) {
    let a6, r7, n14;
    this.isLabel ? (a6 = new X(t11.offset.add(s9), 0), r7 = new X(e9.offsetNextVertex1.add(s9), 0), n14 = new X(e9.offsetNextVertex2.add(s9), 0)) : (a6 = o13.multiply(new X(t11.offset.multiply(i9), 0)), r7 = o13.multiply(new X(e9.offsetNextVertex1.multiply(i9), 0)), n14 = o13.multiply(new X(e9.offsetNextVertex2.multiply(i9), 0)));
    const { viewMat3: p16, tileMat3: d10 } = this.view, u13 = p16.multiply(d10).multiply(new X(t11.pos, 1)), y6 = u13.add(d10.multiply(a6)).xy, m17 = u13.add(d10.multiply(r7)).xy, c8 = u13.add(d10.multiply(n14)).xy, f12 = P4(this.hittestRequest.position, y6.xy, m17.xy, c8.xy);
    return this.isLabel ? zt(l8, q4(this.hittestRequest), f12) : f12;
  }
  _unpackDirection(t11) {
    const e9 = new W(t11), i9 = Rt(e9, new W(2)), o13 = Pt(e9, new W(3));
    return new C3(new _3(i9).subtract(1), new _3(o13).subtract(1));
  }
  _getVertexColor(t11) {
    let e9 = t11.color;
    if (this.visualVariableColor) {
      const i9 = this.storage.getColorValue(t11.id);
      e9 = this.visualVariableColor.getColor(i9, t11.color, new J(false));
    }
    if (this.visualVariableOpacity) {
      const i9 = this.storage.getOpacityValue(t11.id), o13 = this.visualVariableOpacity.getOpacity(i9);
      e9 = e9.multiply(o13);
    }
    return e9;
  }
};
r([_4(f2)], et.prototype, "visualVariableColor", void 0), r([_4(h5)], et.prototype, "visualVariableOpacity", void 0), r([_4(d5)], et.prototype, "visualVariableRotation", void 0), r([_4(m4)], et.prototype, "visualVariableSizeMinMaxValue", void 0), r([_4(p5)], et.prototype, "visualVariableSizeScaleStops", void 0), r([_4(f3)], et.prototype, "visualVariableSizeStops", void 0), r([_4(l2)], et.prototype, "visualVariableSizeUnitValue", void 0), r([g(p4)], et.prototype, "mosaicInfo", void 0), r([K3], et.prototype, "textRenderPassType", void 0), r([K3], et.prototype, "isBackgroundPass", void 0), r([K3], et.prototype, "isLabel", void 0), r([e(0, m3(Y2)), e(1, m3($))], et.prototype, "vertex", null), r([e(0, m3(tt))], et.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/labels/LabelTechnique.js
var p8 = class extends t9 {
  constructor() {
    super(...arguments), this.type = e2.Label, this.shaders = { geometry: new et() }, this.drawPhase = E4.LABEL | E4.LABEL_ALPHA | E4.HITTEST, this.symbologyPlane = S.TEXT;
  }
  render(e9, t11) {
    const { context: s9, painter: u13 } = e9, m17 = y(e9), p16 = { ...M(e9) }, h11 = t11.instance.getInput(), f12 = { shader: this.shaders.geometry, uniforms: { ...m2(e9, t11.target, h11.uniforms), ...h2(e9, t11.target), mosaicInfo: u13.textureManager.getMosaicInfo(s9, t11.textureKey) }, defines: { ...m17, textRenderPassType: X2.Color, isBackgroundPass: true, isLabel: true }, optionalAttributes: h11.optionalAttributes, useComputeBuffer: f(e9) };
    u13.setPipelineState(p16), u13.setShader(f12), u13.submitDraw(e9, t11), u13.setShader({ ...f12, defines: { ...m17, textRenderPassType: X2.Halo, isBackgroundPass: false, isLabel: true } }), u13.submitDraw(e9, t11), u13.setShader({ ...f12, defines: { ...m17, textRenderPassType: X2.Color, isBackgroundPass: false, isLabel: true } }), u13.submitDraw(e9, t11);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/GradientStrokeShader.js
var F8 = class extends q6 {
};
r([h3(9, _3)], F8.prototype, "accumulatedDistance", void 0), r([h3(10, _3)], F8.prototype, "totalLength", void 0), r([h3(11, _3)], F8.prototype, "gradientSize", void 0), r([h3(12, C3)], F8.prototype, "segmentDirection", void 0), r([h3(13, Y)], F8.prototype, "tlbr", void 0);
var G8 = class extends P2 {
};
r([g(_3)], G8.prototype, "isColorPass", void 0);
var I5 = class extends _7 {
  constructor() {
    super(...arguments), this.type = "GradientStrokeShader";
  }
  vertex(t11, e9) {
    const { totalLength: i9, gradientSize: o13, segmentDirection: s9, tlbr: r7 } = t11, p16 = L8(this, t11), m17 = v2(t11.bitset, e4.isAlongLine), c8 = i9.divide(this.view.displayZoomFactor), h11 = zt(h4(t11.bitset, e4.isAbsoluteSize), () => {
      const t12 = zt(Yt(m17, new _3(0.5)), c8, p16.halfWidth);
      return o13.divide(t12);
    }, o13), u13 = t11.accumulatedDistance.divide(this.view.displayZoomFactor).add(pe(s9, p16.scaledOffset)).divide(c8), y6 = r7.divide(this.mosaicInfo.size.xyxy);
    return { ...p16, tlbr: y6, relativePositionAlongLine: u13, relativeGradientSize: h11, isAlongLine: v2(t11.bitset, e4.isAlongLine), isDiscrete: v2(t11.bitset, e4.isDiscrete), ...this.maybeRunHittest(t11, e9, p16.halfWidth) };
  }
  fragment(t11) {
    const { isAlongLine: e9, isDiscrete: i9, relativePositionAlongLine: o13, relativeGradientSize: s9, normal: r7, tlbr: l8 } = t11, g10 = D5(t11, this.antialiasingControls.blur), v8 = new _3(0.5).multiply(r7.y).add(new _3(0.5)), f12 = zt(Yt(e9, new _3(0.5)), o13, v8), w10 = zt(Yt(i9, new _3(0.5)), s9.subtract(1), new _3(0)), b10 = D4(f12.add(w10).divide(s9)), x8 = _e(l8.xy, l8.zw, new C3(ce(b10, new _3(0), new _3(1)), 0.5)), S7 = pn(this.mosaicInfo.texture, x8), L9 = t11.opacity.multiply(g10), A6 = this.getFragmentOutput(S7.multiply(L9), t11), D7 = sn(new _3(0.5), this.technique.isColorPass).multiply(has("gradient-depth-epsilon")), F10 = sn(new _3(0), r7.y).multiply(new _3(has("gradient-depth-bias")).subtract(D7));
    return A6.glFragDepth = ce(Me(r7).add(F10), new _3(0), new _3(1)), A6;
  }
};
r([g(p4)], I5.prototype, "mosaicInfo", void 0), r([g(G8)], I5.prototype, "technique", void 0), r([e(0, m3(F8)), e(1, m3(q3))], I5.prototype, "vertex", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/GradientStrokeTechnique.js
var d6 = class extends t9 {
  constructor() {
    super(...arguments), this.type = e2.GradientStroke, this.shaders = { geometry: new I5() }, this.symbologyPlane = S.LINE;
  }
  _getShaderOptions(e9, t11, a6) {
    const { context: n14, painter: p16, pixelRatio: c8 } = e9, l8 = t11.instance.getInput();
    return { shader: this.shaders.geometry, uniforms: { ...m2(e9, t11.target, l8.uniforms), ...h2(e9, t11.target), antialiasingControls: n7(c8), mosaicInfo: p16.textureManager.getMosaicInfo(n14, t11.textureKey), technique: { isColorPass: a6 } }, defines: { ...y(e9) }, optionalAttributes: l8.optionalAttributes, useComputeBuffer: f(e9) };
  }
  render(e9, t11) {
    const { painter: s9 } = e9;
    if (f(e9) || p2(e9)) {
      const r8 = M(e9);
      return s9.setPipelineState(r8), s9.setShader(this._getShaderOptions(e9, t11, 1)), void s9.submitDraw(e9, t11);
    }
    e9.context.setClearDepth(1), e9.context.clear(_2.DEPTH);
    const r7 = { color: false, depth: { write: { zNear: 0, zFar: 1 }, test: O.LESS }, stencil: { write: false, test: { ref: (e10) => e10.stencilRef, compare: O.EQUAL, mask: 255, op: { fail: I.KEEP, zFail: I.KEEP, zPass: I.KEEP } } } };
    s9.setShader(this._getShaderOptions(e9, t11, 0)), s9.setPipelineState(r7), s9.submitDraw(e9, t11);
    const i9 = { color: { write: [true, true, true, true], blendMode: "composite" }, depth: { write: false, test: O.LEQUAL }, stencil: { write: false, test: { ref: (e10) => e10.stencilRef, compare: O.EQUAL, mask: 255, op: { fail: I.KEEP, zFail: I.KEEP, zPass: I.KEEP } } } };
    s9.setShader(this._getShaderOptions(e9, t11, 1)), s9.setPipelineState(i9), s9.submitDraw(e9, t11);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/LineTechnique.js
var p9 = class extends t9 {
  constructor() {
    super(...arguments), this.type = e2.Line, this.shaders = { geometry: new _7() }, this.symbologyPlane = S.LINE;
  }
  render(e9, t11) {
    const { painter: a6, pixelRatio: u13 } = e9, p16 = t11.instance.getInput();
    a6.setShader({ shader: this.shaders.geometry, uniforms: { ...m2(e9, t11.target, p16.uniforms), ...h2(e9, t11.target), antialiasingControls: n7(u13) }, defines: { ...y(e9) }, optionalAttributes: p16.optionalAttributes, useComputeBuffer: f(e9) }), a6.setPipelineState(M(e9)), a6.submitDraw(e9, t11);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/TexturedLineShader.js
var W4 = class extends q6 {
};
r([h3(9, _3)], W4.prototype, "accumulatedDistance", void 0), r([h3(10, C3)], W4.prototype, "segmentDirection", void 0), r([h3(11, _3)], W4.prototype, "offsetAlongLine", void 0), r([h3(12, _3)], W4.prototype, "capType", void 0), r([h3(13, Y)], W4.prototype, "tlbr", void 0);
var H6 = class extends _7 {
  constructor() {
    super(...arguments), this.type = "TexturedLineShader";
  }
  _getDistanceRatio(t11, e9) {
    const s9 = v2(t11.bitset, D3);
    return s9.multiply(qe(e9, new _3(0.25)).multiply(new _3(2))).add(new _3(1).subtract(s9).multiply(u(1)));
  }
  _getSDFAlpha(t11) {
    const { halfWidth: e9, normal: i9, tlbr: a6, patternSize: r7, accumulatedDistance: l8, offsetAlongLine: x8, dashToPx: v8, capType: D7 } = t11, S7 = r7.x.divide(t4).multiply(v8), j7 = Ee(l8.add(x8).divide(S7)), A6 = _e(a6.xy, a6.zw, new C3(j7, 0.5)), z6 = B4(pn(this.mosaicInfo.texture, A6)).multiply(2).subtract(1).multiply(c).multiply(v8), F10 = i9.y.multiply(e9), T4 = Tt([Ut(D7, new _3(1)), z6.subtract(e9)], [Ut(D7, new _3(2)), un(Le(qe(z6, new _3(0)), new _3(2)).add(F10.multiply(F10))).subtract(e9)], [true, z6]), _9 = ce(new _3(0.25).subtract(T4), new _3(0), new _3(1));
    return new Y(_9);
  }
  _getPatternColor(t11) {
    const { halfWidth: e9, normal: i9, color: s9, accumulatedDistance: o13, patternSize: a6, sampleAlphaOnly: r7, tlbr: l8 } = t11, n14 = a6.y.multiply(new _3(2).multiply(e9).divide(a6.x)), y6 = Ee(o13.divide(n14)), h11 = new _3(0.5).multiply(i9.y).add(new _3(0.5)), f12 = _e(l8.xy, l8.zw, new C3(h11, y6));
    let w10 = pn(this.mosaicInfo.texture, f12);
    return null != this.visualVariableColor && (w10 = zt(Yt(r7, new _3(0.5)), new Y(s9.a), s9)), w10;
  }
  vertex(t11, e9) {
    const { segmentDirection: i9, tlbr: s9, bitset: o13 } = t11, a6 = L8(this, t11), r7 = t11.accumulatedDistance.divide(this.view.displayZoomFactor).add(pe(i9, a6.scaledOffset)), l8 = new C3(s9.z.subtract(s9.x), s9.w.subtract(s9.y)), n14 = s9.divide(this.mosaicInfo.size.xyxy), c8 = v2(o13, E2), m17 = v2(o13, q), d10 = zt(Yt(c8, new _3(0.5)), this._getDistanceRatio(t11, a6.scaledHalfWidth), new _3(1));
    return { ...a6, tlbr: n14, patternSize: l8, accumulatedDistance: r7, isSDF: c8, sampleAlphaOnly: m17, dashToPx: d10, offsetAlongLine: t11.offsetAlongLine, capType: t11.capType, ...this.maybeRunHittest(t11, e9, a6.halfWidth) };
  }
  fragment(t11) {
    const { color: e9, opacity: i9, isSDF: s9 } = t11, o13 = D5(t11, this.antialiasingControls.blur), a6 = zt(Yt(s9, new _3(0.5)), this._getSDFAlpha(t11), this._getPatternColor(t11)), r7 = e9.multiply(i9).multiply(o13).multiply(a6);
    return this.getFragmentOutput(r7, t11);
  }
};
r([g(p4)], H6.prototype, "mosaicInfo", void 0), r([e(0, m3(W4)), e(1, m3(q3))], H6.prototype, "vertex", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/TexturedLineTechnique.js
var p10 = class extends t9 {
  constructor() {
    super(...arguments), this.type = e2.TexturedLine, this.shaders = { geometry: new H6() }, this.symbologyPlane = S.LINE;
  }
  render(e9, t11) {
    const { context: a6, painter: m17, pixelRatio: p16 } = e9, f12 = t11.instance.getInput();
    m17.setShader({ shader: this.shaders.geometry, uniforms: { ...m2(e9, t11.target, f12.uniforms), ...h2(e9, t11.target), antialiasingControls: n7(p16), mosaicInfo: m17.textureManager.getMosaicInfo(a6, t11.textureKey) }, defines: { ...y(e9) }, optionalAttributes: f12.optionalAttributes, useComputeBuffer: f(e9) }), m17.setPipelineState(M(e9)), m17.submitDraw(e9, t11);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/markers/MarkerShader.js
var X3 = class extends S2 {
};
r([h3(3, Y)], X3.prototype, "color", void 0), r([h3(4, Y)], X3.prototype, "outlineColor", void 0), r([h3(5, C3)], X3.prototype, "offset", void 0), r([h3(6, C3)], X3.prototype, "textureUV", void 0), r([h3(7, Y)], X3.prototype, "sizing", void 0), r([h3(8, _3)], X3.prototype, "placementAngle", void 0), r([h3(9, _3)], X3.prototype, "sdfDecodeCoeff", void 0), r([h3(10, C3)], X3.prototype, "zoomRange", void 0);
var Y3 = class extends I4 {
};
r([h3(12, C3)], Y3.prototype, "offsetNextVertex1", void 0), r([h3(13, C3)], Y3.prototype, "offsetNextVertex2", void 0), r([h3(14, C3)], Y3.prototype, "textureUVNextVertex1", void 0), r([h3(15, C3)], Y3.prototype, "textureUVNextVertex2", void 0);
var Z2 = class extends P3 {
};
function $2(t11, e9, i9, o13) {
  return e9.multiply(t11.x).add(i9.multiply(t11.y)).add(o13.multiply(t11.z));
}
function tt2(t11) {
  return t11.multiply(t11).divide(128);
}
var et2 = class extends B5 {
  constructor() {
    super(...arguments), this.type = "MarkerShader", this.computeAttributes = { offset: ["offsetNextVertex1", "offsetNextVertex2"], textureUV: ["textureUVNextVertex1", "textureUVNextVertex2"] };
  }
  vertex(t11, e9) {
    const i9 = tt2(t11.sizing.x), o13 = tt2(t11.sizing.y), s9 = tt2(t11.sizing.z), l8 = t11.placementAngle, r7 = v2(t11.bitset, o2.bitset.isSDF), y6 = v2(t11.bitset, o2.bitset.isMapAligned), h11 = v2(t11.bitset, o2.bitset.scaleSymbolsProportionally), c8 = h4(t11.bitset, o2.bitset.colorLocked), x8 = n5(this, t11.id), v8 = r5(this, t11.id, t11.color, c8).multiply(x8), f12 = this.view.displayViewScreenMat3.multiply(new X(t11.pos.xy, 1)), V4 = l3(this, t11.id, s9).divide(s9), w10 = i9.multiply(V4), S7 = t11.offset.xy.multiply(V4);
    let b10 = o13.multiply(h11.multiply(V4.subtract(1)).add(1));
    b10 = Ue(b10, qe(w10.subtract(0.99), new _3(0)));
    const g10 = qe(b10, new _3(1)), C8 = Ue(b10, new _3(1)), z6 = rt.fromRotation(l8.multiply(c2)), _9 = u3(this, t11.id), j7 = this._getViewRotationMatrix(y6).multiply(_9).multiply(z6).multiply(new X(S7.xy, 0)), U4 = this.clip(t11.id, t11.zoomRange), N = new Y(f12.xy.add(j7.xy), U4, 1), D7 = t11.textureUV.divide(this.mosaicInfo.size), F10 = t11.outlineColor.multiply(C8), k4 = v2(t11.bitset, o2.bitset.overrideOutlineColor), I7 = t11.sdfDecodeCoeff.multiply(w10);
    return { glPosition: N, color: v8, textureUV: D7, outlineColor: F10, outlineSize: g10, distanceToPx: I7, isSDF: r7, overrideOutlineColor: k4, ...this.maybeRunHittest(t11, e9, { pos: t11.pos, size: w10, sizeCorrection: V4, isMapAligned: y6, vvRotationMat3: _9, placementMat3: z6, outlineSize: g10, distanceToPx: I7, isSDF: r7 }) };
  }
  fragment(t11) {
    const e9 = this._getColor(t11.textureUV, t11);
    return this.getFragmentOutput(e9, t11);
  }
  hittest(t11, e9, i9) {
    return zt(Ct(i9.size, this.hittestRequest.smallSymbolSizeThreshold), this._hittestSmallMarker(t11, e9, i9), this._hittestMarker(t11, e9, i9));
  }
  _getViewRotationMatrix(t11) {
    const e9 = this.view.displayViewMat3, i9 = this.view.displayMat3, o13 = new _3(1).subtract(t11);
    return e9.multiply(t11).add(i9.multiply(o13));
  }
  _getViewScreenMatrix(t11) {
    const e9 = this.view.viewMat3.multiply(this.view.tileMat3), i9 = this.view.tileMat3, o13 = new _3(1).subtract(t11);
    return e9.multiply(t11).add(i9.multiply(o13));
  }
  _getColor(t11, e9) {
    return zt(Ut(e9.isSDF, new _3(1)), this._getSDFColor(t11, e9), this._getSpriteColor(t11, e9));
  }
  _getSpriteColor(t11, e9) {
    return pn(this.mosaicInfo.texture, t11).multiply(e9.color);
  }
  _getSDFColor(t11, e9) {
    const i9 = pn(this.mosaicInfo.texture, t11), o13 = new _3(0.5).subtract(B4(i9)).multiply(e9.distanceToPx).multiply(o3), s9 = ce(new _3(0.5).subtract(o13), new _3(0), new _3(1)), l8 = e9.color.multiply(s9);
    let r7 = e9.outlineSize;
    this.highlight && (r7 = qe(r7, e9.overrideOutlineColor.multiply(4)));
    const a6 = r7.multiply(0.5), p16 = Kt(o13).subtract(a6), d10 = ce(new _3(0.5).subtract(p16), new _3(0), new _3(1)), m17 = _e(e9.outlineColor, e9.color, e9.overrideOutlineColor).multiply(d10);
    return new _3(1).subtract(m17.a).multiply(l8).add(m17);
  }
  _hittestSmallMarker(t11, e9, i9) {
    const { position: o13, distance: s9, smallSymbolDistance: l8 } = this.hittestRequest, r7 = s9.subtract(l8), { viewMat3: p16, tileMat3: n14 } = this.view, u13 = p16.multiply(n14).multiply(new X(i9.pos, 1)).xy, d10 = i9.size.multiply(0.5);
    return fe(u13, o13).subtract(d10).add(r7);
  }
  _hittestMarker(t11, e9, i9) {
    const { pos: o13, sizeCorrection: s9, isMapAligned: l8 } = i9, r7 = new X(t11.offset.multiply(s9), 0), p16 = new X(e9.offsetNextVertex1.multiply(s9), 0), n14 = new X(e9.offsetNextVertex2.multiply(s9), 0), { viewMat3: u13, tileMat3: d10 } = this.view, m17 = u13.multiply(d10).multiply(new X(o13, 1)), h11 = this._getViewScreenMatrix(l8).multiply(i9.vvRotationMat3).multiply(i9.placementMat3), c8 = m17.add(h11.multiply(r7)).xy, x8 = m17.add(h11.multiply(p16)).xy, v8 = m17.add(h11.multiply(n14)).xy, f12 = this.hittestRequest.position, V4 = this.hittestRequest.distance, w10 = P4(f12, c8, x8, v8);
    return zt(Yt(w10, V4), w10, this._hittestSamples(c8, x8, v8, t11, e9, i9));
  }
  _hittestSamples(t11, e9, i9, o13, s9, l8) {
    const { outlineSize: r7, isSDF: a6, distanceToPx: p16 } = l8, n14 = this.hittestRequest.position, d10 = this.hittestRequest.distance, y6 = h6(n14.add(new C3(xt(d10), xt(d10))), t11, e9, i9), h11 = h6(n14.add(new C3(0, xt(d10))), t11, e9, i9), c8 = h6(n14.add(new C3(d10, xt(d10))), t11, e9, i9), x8 = h6(n14.add(new C3(xt(d10), 0)), t11, e9, i9), v8 = h6(n14, t11, e9, i9), f12 = h6(n14.add(new C3(d10, 0)), t11, e9, i9), V4 = h6(n14.add(new C3(xt(d10), d10)), t11, e9, i9), w10 = h6(n14.add(new C3(0, d10)), t11, e9, i9), S7 = h6(n14.add(new C3(d10, d10)), t11, e9, i9), M5 = o13.textureUV.divide(this.mosaicInfo.size), z6 = s9.textureUVNextVertex1.divide(this.mosaicInfo.size), _9 = s9.textureUVNextVertex2.divide(this.mosaicInfo.size), j7 = { color: new Y(1), outlineColor: new Y(1), overrideOutlineColor: new _3(1), outlineSize: r7, distanceToPx: p16, isSDF: a6 };
    let R6 = new _3(0);
    return R6 = R6.add(g2(y6).multiply(this._getColor($2(y6, M5, z6, _9), j7).a)), R6 = R6.add(g2(h11).multiply(this._getColor($2(h11, M5, z6, _9), j7).a)), R6 = R6.add(g2(c8).multiply(this._getColor($2(c8, M5, z6, _9), j7).a)), R6 = R6.add(g2(x8).multiply(this._getColor($2(x8, M5, z6, _9), j7).a)), R6 = R6.add(g2(v8).multiply(this._getColor($2(v8, M5, z6, _9), j7).a)), R6 = R6.add(g2(f12).multiply(this._getColor($2(f12, M5, z6, _9), j7).a)), R6 = R6.add(g2(V4).multiply(this._getColor($2(V4, M5, z6, _9), j7).a)), R6 = R6.add(g2(w10).multiply(this._getColor($2(w10, M5, z6, _9), j7).a)), R6 = R6.add(g2(S7).multiply(this._getColor($2(S7, M5, z6, _9), j7).a)), sn(R6, new _3(0.05)).multiply(q4(this.hittestRequest));
  }
};
r([_4(f2)], et2.prototype, "visualVariableColor", void 0), r([_4(h5)], et2.prototype, "visualVariableOpacity", void 0), r([_4(d5)], et2.prototype, "visualVariableRotation", void 0), r([_4(m4)], et2.prototype, "visualVariableSizeMinMaxValue", void 0), r([_4(p5)], et2.prototype, "visualVariableSizeScaleStops", void 0), r([_4(f3)], et2.prototype, "visualVariableSizeStops", void 0), r([_4(l2)], et2.prototype, "visualVariableSizeUnitValue", void 0), r([g(p4)], et2.prototype, "mosaicInfo", void 0), r([e(0, m3(X3)), e(1, m3(Y3))], et2.prototype, "vertex", null), r([e(0, m3(Z2))], et2.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/markers/MarkerTechnique.js
var u7 = class extends t9 {
  constructor() {
    super(...arguments), this.type = e2.Marker, this.shaders = { geometry: new et2() }, this.symbologyPlane = S.MARKER;
  }
  render(e9, t11) {
    const { context: a6, painter: m17 } = e9, u13 = t11.instance.getInput();
    m17.setShader({ shader: this.shaders.geometry, uniforms: { ...m2(e9, t11.target, u13.uniforms), ...h2(e9, t11.target), mosaicInfo: m17.textureManager.getMosaicInfo(a6, t11.textureKey, true) }, defines: { ...y(e9) }, optionalAttributes: u13.optionalAttributes, useComputeBuffer: f(e9) }), m17.setPipelineState(M(e9)), m17.submitDraw(e9, t11);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/GLSLShaderModule.js
var o9 = class {
  constructor() {
    this.computeAttributes = {};
  }
  get locationsMap() {
    const t11 = /* @__PURE__ */ new Map();
    for (const e9 in this.locations) t11.set(e9, this.locations[e9].index);
    return t11;
  }
  get optionPropertyKeys() {
    if (!this._optionPropertyKeys) {
      const t11 = new Set(Object.keys(this.options));
      this._optionPropertyKeys = t11;
    }
    return this._optionPropertyKeys;
  }
  get _transformFeedbackBindings() {
    return [];
  }
  get locationInfo() {
    if (!this._locationInfo) {
      const e9 = this.locationsMap, o13 = Array.from(e9.entries()).map(([t11, e10]) => `${t11}.${e10}`).join("."), n14 = l(o13);
      this._locationInfo = { hash: n14, stringHash: o13, locations: e9, computeAttributeMap: this.computeAttributes };
    }
    return this._locationInfo;
  }
  get renamedLocationsMap() {
    const t11 = /* @__PURE__ */ new Map();
    for (const [e9, o13] of this.locationsMap.entries()) t11.set("a_" + e9, o13);
    return t11;
  }
  getShaderKey(t11, e9, o13) {
    return `${Object.keys(t11).map((e10) => `${e10}.${t11[e10]}`).join(".")}.${Object.keys(o13).filter((t12) => o13[t12]).map((t12) => `${t12}_${o13[t12].toString()}`).join(".")}.${Object.keys(e9).filter((t12) => this.optionPropertyKeys.has(t12)).join(".")}`;
  }
  getProgram(t11, o13, n14, r7) {
    let i9 = "", s9 = "";
    for (const e9 in n14) if (n14[e9]) {
      const t12 = "boolean" == typeof n14[e9] ? `#define ${e9}
` : `#define ${e9} ${n14[e9]}
`;
      i9 += t12, s9 += t12;
    }
    return i9 += this.vertexShader, s9 += this.fragmentShader, new a2(i9, s9, this.renamedLocationsMap, this.locationInfo, this._getUniformBindings(o13), this._transformFeedbackBindings);
  }
  _getUniformBindings(t11) {
    const e9 = [];
    for (const o13 in this.required) {
      const t12 = this.required[o13];
      e9.push({ uniformHydrated: null, shaderModulePath: o13, uniformName: o13, uniformType: t12.type, uniformArrayElementType: n10(t12), uniformArrayLength: r6(t12) });
    }
    for (const o13 in t11) {
      const i9 = this.options[o13];
      if (t11[o13]) for (const t12 in i9) {
        const s9 = i9[t12];
        e9.push({ uniformHydrated: null, shaderModulePath: `${o13}.${t12}`, uniformName: t12, uniformType: s9.type, uniformArrayElementType: n10(s9), uniformArrayLength: r6(s9) });
      }
    }
    return e9;
  }
};
var n10 = (t11) => {
  var _a;
  return "array" === t11.type ? (_a = t11.elementType) == null ? void 0 : _a.type : void 0;
};
var r6 = (t11) => "array" === t11.type ? t11.size : void 0;

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/pieChart/PieChartShader.js
var p11 = { hittestDist: _3, hittestPos: C3 };
var y3 = { filterFlags: U2, animation: U2, visualVariableData: U2, dataDriven0: U2, dataDriven1: U2, dataDriven2: U2, gpgpu: U2, size: _3 };
var d7 = { displayViewScreenMat3: rt, displayViewMat3: rt, displayMat3: rt, viewMat3: rt, tileMat3: rt, displayZoomFactor: _3, requiredZoomFactor: _3, tileOffset: C3, currentScale: _3, currentZoom: _3, metersPerSRUnit: _3 };
var u8 = class extends o9 {
  constructor() {
    super(...arguments), this.vertexShader = n4("materials/pie/pie.vert"), this.fragmentShader = n4("materials/pie/pie.frag"), this.required = { ...y3, ...d7, outlineWidth: _3, colors: B3, defaultColor: Y, othersColor: Y, outlineColor: Y, donutRatio: _3, sectorThreshold: _3 }, this.options = { hittestUniforms: p11, visualVariableSizeMinMaxValue: { minMaxValueAndSize: Y }, visualVariableSizeScaleStops: { sizes: { ...B3.ofType(_3, 8), type: "array", elementType: _3, size: 8 }, values: { ...B3.ofType(_3, 8), type: "array", elementType: _3, size: 8 } }, visualVariableSizeStops: { sizes: { ...B3.ofType(_3, 8), type: "array", elementType: _3, size: 8 }, values: { ...B3.ofType(_3, 8), type: "array", elementType: _3, size: 8 } }, visualVariableSizeUnitValue: { unitValueToPixelsRatio: _3 }, visualVariableOpacity: { opacities: { ...B3.ofType(_3, 8), type: "array", elementType: _3, size: 8 }, opacityValues: { ...B3.ofType(_3, 8), type: "array", elementType: _3, size: 8 } } }, this.locations = { pos: { index: 0, type: C3 }, id: { index: 1, type: X }, bitset: { index: 2, type: _3 }, offset: { index: 3, type: C3 }, texCoords: { index: 4, type: C3 }, size: { index: 5, type: C3 }, referenceSize: { index: 6, type: _3 }, zoomRange: { index: 7, type: C3 } }, this.defines = { VV_SIZE_MIN_MAX_VALUE: "boolean", VV_SIZE_SCALE_STOPS: "boolean", VV_SIZE_FIELD_STOPS: "boolean", VV_SIZE_UNIT_VALUE: "boolean", VV_OPACITY: "boolean", HITTEST: "boolean", numberOfFields: "number", highlight: "boolean", inside: "boolean", outside: "boolean" };
  }
  setNumberOfFields(e9) {
    this.required.colors = { ...B3.ofType(Y, e9), type: "array", elementType: Y, size: e9 };
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/pieChart/PieChartTechnique.js
var h8 = class extends t9 {
  constructor() {
    super(...arguments), this.type = e2.PieChart, this.shaders = { geometry: new u8() }, this.symbologyPlane = S.MARKER;
  }
  render(e9, t11) {
    var _a, _b;
    const { painter: u13 } = e9, { instance: n14, target: h11 } = t11, m17 = this.shaders.geometry, l8 = n14.getInput(), f12 = l8.uniforms.numberOfFields, S7 = f(e9), V4 = h2(e9, h11), d10 = y(e9);
    m17.setNumberOfFields(f12), u13.setShader({ shader: m17, uniforms: { ...m2(e9, t11.target, l8.uniforms.shader), ...V4.storage, ...V4.view, hittestUniforms: V4.hittestRequest ? { hittestDist: (_a = V4.hittestRequest) == null ? void 0 : _a.distance, hittestPos: (_b = V4.hittestRequest) == null ? void 0 : _b.position } : null }, defines: { VV_SIZE_MIN_MAX_VALUE: !!l8.uniforms.shader.visualVariableSizeMinMaxValue, VV_SIZE_SCALE_STOPS: !!l8.uniforms.shader.visualVariableSizeScaleStops, VV_SIZE_FIELD_STOPS: !!l8.uniforms.shader.visualVariableSizeStops, VV_SIZE_UNIT_VALUE: !!l8.uniforms.shader.visualVariableSizeUnitValue, VV_OPACITY: !!l8.uniforms.shader.visualVariableOpacity, HITTEST: S7, highlight: V4.highlight ? 1 : 0, ...d10, numberOfFields: f12 }, optionalAttributes: {}, useComputeBuffer: S7 }), u13.setPipelineState(M(e9)), u13.submitDraw(e9, t11);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/text/TextTechnique.js
var m12 = class extends t9 {
  constructor() {
    super(...arguments), this.type = e2.Text, this.shaders = { geometry: new et() }, this.symbologyPlane = S.TEXT;
  }
  render(e9, s9) {
    const { context: n14, painter: u13 } = e9, m17 = y(e9), p16 = s9.instance.getInput(), f12 = { shader: this.shaders.geometry, uniforms: { ...m2(e9, s9.target, p16.uniforms), ...h2(e9, s9.target), mosaicInfo: u13.textureManager.getMosaicInfo(n14, s9.textureKey) }, defines: { ...m17, isBackgroundPass: true, isLabel: false, textRenderPassType: X2.Color }, optionalAttributes: p16.optionalAttributes, useComputeBuffer: f(e9) };
    u13.setShader(f12), u13.setPipelineState(M(e9)), u13.submitDraw(e9, s9), u13.setShader({ ...f12, defines: { ...m17, isBackgroundPass: false, isLabel: false, textRenderPassType: X2.Halo } }), u13.submitDraw(e9, s9), u13.setShader({ ...f12, defines: { ...m17, isBackgroundPass: false, isLabel: false, textRenderPassType: X2.Outline } }), u13.submitDraw(e9, s9), u13.setShader({ ...f12, defines: { ...m17, isBackgroundPass: false, isLabel: false, textRenderPassType: X2.Color } }), u13.submitDraw(e9, s9);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/TechniqueRegistry.js
var j6 = { fill: new u5(), patternFill: new m8(), complexFill: new m6(), gradientFill: new u6(), outlineFill: new l4(), patternOutlineFill: new m9(), complexOutlineFill: new m7(), marker: new u7(), pieChart: new h8(), line: new p9(), texturedLine: new p10(), gradientStroke: new d6(), text: new m12(), label: new p8(), heatmap: new p7(), dotDensity: new w5(), animatedMarker: new m5() };
function q7() {
  for (const e9 in j6) {
    j6[e9].startup();
  }
}
function F9(e9) {
  for (const i9 in j6) {
    j6[i9].shutdown(e9);
  }
}

// node_modules/@arcgis/core/views/2d/layers/features/schema/processor/schemaUtils.js
function n11(n14, t11) {
  const r7 = n14.slice(0, t11), e9 = t11 - r7.length;
  for (let o13 = 0; o13 < e9; o13++) {
    const n15 = r7[r7.length - 1];
    r7.push(n15);
  }
  return r7;
}
function t10(n14) {
  if (!n14) return [0, 0, 0, 0];
  const { r: t11, g: r7, b: e9, a: o13 } = n14;
  return [t11 * (o13 / 255), r7 * (o13 / 255), e9 * (o13 / 255), o13];
}

// node_modules/@arcgis/core/views/2d/layers/features/support/rendererUtils.js
var l6 = 8;
var s7 = l6 - 2;
var n12 = () => n.getLogger("esri.views.2d.layers.features.support.rendererUtils");
function u9(e9) {
  return e9.map((e10) => a3(e10) ? i6(e10.clone()) : e10);
}
function a3(e9) {
  return ("size" === e9.type || "color" === e9.type || "opacity" === e9.type) && null != e9.stops;
}
function i6(e9) {
  return e9.stops = b6(e9.type, e9.stops ?? []), e9;
}
function p12(e9, o13, r7) {
  return (1 - r7) * e9 + r7 * o13;
}
function c4(e9, o13) {
  const [t11, ...l8] = o13, n14 = l8.pop(), u13 = l8[0].value, a6 = l8[l8.length - 1].value, i9 = (a6 - u13) / s7, c8 = [];
  for (let s9 = u13; s9 < a6; s9 += i9) {
    let t12 = 0;
    for (; s9 >= l8[t12].value; ) t12++;
    const n15 = l8[t12], u14 = o13[t12 - 1], a7 = s9 - u14.value, i10 = n15.value === u14.value ? 1 : a7 / (n15.value - u14.value);
    if ("color" === e9) {
      const e10 = l8[t12], r7 = o13[t12 - 1], n16 = e10.color.clone();
      n16.r = p12(r7.color.r, n16.r, i10), n16.g = p12(r7.color.g, n16.g, i10), n16.b = p12(r7.color.b, n16.b, i10), n16.a = p12(r7.color.a, n16.a, i10), c8.push({ value: s9, color: n16, label: e10.label });
    } else if ("size" === e9) {
      const e10 = l8[t12], n16 = o13[t12 - 1], u15 = o(e10.size), a8 = p12(o(n16.size), u15, i10);
      c8.push({ value: s9, size: a8, label: e10.label });
    } else {
      const e10 = l8[t12], r7 = p12(o13[t12 - 1].opacity, e10.opacity, i10);
      c8.push({ value: s9, opacity: r7, label: e10.label });
    }
  }
  return [t11, ...c8, n14];
}
function f8(e9) {
  const [o13, ...r7] = e9, t11 = r7.pop();
  for (; r7.length > s7; ) {
    let e10 = 0, o14 = 0;
    for (let t12 = 1; t12 < r7.length; t12++) {
      const l8 = r7[t12 - 1], s9 = r7[t12], n14 = Math.abs(s9.value - l8.value);
      n14 > o14 && (o14 = n14, e10 = t12);
    }
    r7.splice(e10, 1);
  }
  return [o13, ...r7, t11];
}
function b6(e9, o13) {
  return o13.length <= l6 ? o13 : (n12().warn(`Found ${o13.length} Visual Variable stops, but MapView only supports ${l6}. Displayed stops will be simplified.`), o13.length > 2 * l6 ? c4(e9, o13) : f8(o13));
}
function g8() {
  const { supportsColorBufferFloat: e9, supportsColorBufferFloatBlend: o13, supportsColorBufferHalfFloat: r7 } = t3();
  return e9 && o13 || r7;
}
function m13(o13) {
  if (!o13) return true;
  switch (o13.type) {
    case "dot-density":
      break;
    case "heatmap":
      if (!g8()) {
        const o14 = t3(), r7 = ["supportsColorBufferFloat", "supportsColorBufferFloatBlend", "supportsColorBufferHalfFloat"].filter((e9) => !o14[e9]).join(", ");
        return n12().errorOnce(new s("webgl-missing-extension", `Missing WebGL2 requirements for Heatmap: ${r7}`)), false;
      }
  }
  return true;
}

// node_modules/@arcgis/core/views/2d/layers/features/schema/processor/VisualVariablesSchema.js
var u10 = 1.25;
var o10 = 128;
var c5 = 128;
function p13(e9) {
  var _a;
  if (!((_a = e9.stops) == null ? void 0 : _a.length)) return null;
  const a6 = e9.stops.sort((e10, a7) => e10.value - a7.value), i9 = n11(a6, 8), l8 = i9.map(({ value: e10 }) => e10), s9 = i9.map(({ color: e10 }) => t10(e10));
  return { values: l8, colors: s9 };
}
function v5(e9) {
  var _a;
  if (!((_a = e9.stops) == null ? void 0 : _a.length)) return null;
  const a6 = e9.stops.sort((e10, a7) => e10.value - a7.value), i9 = n11(a6, 8);
  return { opacityValues: i9.map(({ value: e10 }) => e10), opacities: i9.map(({ opacity: e10 }) => e10) };
}
function V2(e9) {
  return { rotationType: "geographic" === e9.rotationType ? i3.Geographic : i3.Arithmatic };
}
function f9(a6) {
  var _a;
  if (!((_a = a6.stops) == null ? void 0 : _a.length)) return null;
  if (a6.stops.some((e9) => e9.useMaxValue || e9.useMinValue)) return (i10, s10) => {
    const r7 = i10.statisticsByLevel.get(s10.key.level), n14 = a6.stops.map((i11) => {
      var _a2, _b;
      return { value: i11.useMaxValue ? ((_a2 = r7 == null ? void 0 : r7.get(a6.field)) == null ? void 0 : _a2.maxValue) ?? 0 : i11.useMinValue ? ((_b = r7 == null ? void 0 : r7.get(a6.field)) == null ? void 0 : _b.minValue) ?? 0 : i11.value, size: i11.size ? u(i11.size) : D2 };
    }).sort((e9, a7) => e9.value - a7.value), u13 = n11(n14, 8);
    return { values: u13.map(({ value: e9 }) => e9), sizes: u13.map(({ size: e9 }) => e9) };
  };
  const i9 = a6.stops.sort((e9, a7) => e9.value - a7.value), s9 = n11(i9, 8);
  return { values: s9.map(({ value: e9 }) => e9), sizes: s9.map(({ size: a7 }) => u(a7)) };
}
function m14(e9) {
  return (l8) => {
    const { state: s9 } = l8;
    return { unitValueToPixelsRatio: Q(s9.spatialReference) / m[e9.valueUnit ?? "meters"] / s9.resolution };
  };
}
function S5(e9, a6) {
  const i9 = a6.length;
  if (e9 < a6[0].value || 1 === i9) return a6[0].size;
  for (let l8 = 1; l8 < i9; l8++) if (e9 < a6[l8].value) {
    const i10 = (e9 - a6[l8 - 1].value) / (a6[l8].value - a6[l8 - 1].value);
    return a6[l8 - 1].size + i10 * (a6[l8].size - a6[l8 - 1].size);
  }
  return a6[i9 - 1].size;
}
function b7(a6) {
  const { minDataValue: i9, maxDataValue: l8, minSize: s9, maxSize: t11 } = a6;
  if ("object" == typeof s9 && "object" == typeof t11) return (a7, r7) => {
    const n14 = a7.state.scale, u13 = u(S5(n14, s9.stops)), o13 = u(S5(n14, t11.stops));
    return { minMaxValueAndSize: [i9, l8, u13, o13] };
  };
  if ("object" == typeof s9 || "object" == typeof t11) throw new Error("InternalError: Found a partial VisualVariableSizeMinMaxValue");
  return { minMaxValueAndSize: [i9, l8, u(s9), u(t11)] };
}
var z4 = { visualVariableColor: null, visualVariableOpacity: null, visualVariableRotation: null, visualVariableSizeStops: null, visualVariableSizeScaleStops: null, visualVariableSizeOutlineScaleStops: null, visualVariableSizeUnitValue: null, visualVariableSizeMinMaxValue: null };
function x6(e9, a6 = c5, i9 = u10) {
  if (e9.visualVariableSizeMinMaxValue) return e9.visualVariableSizeMinMaxValue instanceof Function ? o10 : Math.max(e9.visualVariableSizeMinMaxValue.minMaxValueAndSize[3] * i9, a6);
  if (e9.visualVariableSizeScaleStops) {
    if (e9.visualVariableSizeScaleStops instanceof Function) return o10;
    const l8 = e9.visualVariableSizeScaleStops.sizes;
    return Math.max(l8[l8.length - 1] * i9, a6);
  }
  if (e9.visualVariableSizeStops) {
    if (e9.visualVariableSizeStops instanceof Function) return o10;
    const l8 = e9.visualVariableSizeStops.sizes;
    return Math.max(l8[l8.length - 1] * i9, a6);
  }
  return e9.visualVariableSizeUnitValue ? 2 * o10 : 0;
}
function h9(e9) {
  const a6 = { ...z4 };
  if (!e9 || !("visualVariables" in e9) || !e9.visualVariables) return a6;
  for (const i9 of u9(e9.visualVariables)) switch (i9.type) {
    case "color":
      a6.visualVariableColor = p13(i9);
      break;
    case "opacity":
      a6.visualVariableOpacity = v5(i9);
      break;
    case "rotation":
      a6.visualVariableRotation = V2(i9);
      break;
    case "size":
      switch (M3(i9)) {
        case "field-stops":
          a6.visualVariableSizeStops = f9(i9);
          break;
        case "scale-stops":
          "outline" === i9.target ? a6.visualVariableSizeOutlineScaleStops = f9(i9) : a6.visualVariableSizeScaleStops = f9(i9);
          break;
        case "min-max":
          a6.visualVariableSizeMinMaxValue = b7(i9);
          break;
        case "unit-value":
          a6.visualVariableSizeUnitValue = m14(i9);
      }
      break;
  }
  return a6;
}
function M3(e9) {
  return "number" == typeof e9.minDataValue && "number" == typeof e9.maxDataValue && null != e9.minSize && null != e9.maxSize ? "min-max" : "$view.scale" === (e9 == null ? void 0 : e9.valueExpression) && Array.isArray(e9.stops) ? "scale-stops" : null == e9.field && "$view.scale" === (e9 == null ? void 0 : e9.valueExpression) || !(Array.isArray(e9.stops) || "levels" in e9 && e9.levels) ? null != e9.field || "$view.scale" !== (e9 == null ? void 0 : e9.valueExpression) ? "unit-value" : null : "field-stops";
}

// node_modules/@arcgis/core/views/2d/layers/features/schema/processor/symbols/utils.js
function a4(a6) {
  return !!(a6.visualVariableSizeMinMaxValue || a6.visualVariableSizeScaleStops || a6.visualVariableSizeStops || a6.visualVariableSizeUnitValue || a6.visualVariableSizeOutlineScaleStops);
}
function i7(a6) {
  return !!a6.visualVariableRotation;
}

// node_modules/@arcgis/core/views/2d/layers/features/schema/processor/symbols/ComplexSymbolSchema.js
function n13(e9) {
  return e9.minScale || e9.maxScale ? { minScale: e9.minScale ?? 0, maxScale: e9.maxScale ?? 0 } : null;
}
function s8(e9) {
  if (null == e9) return null;
  if (Array.isArray(e9)) {
    const [a6, i9, t11, l8] = e9;
    return [a6, i9, t11, 255 * l8];
  }
  return "string" == typeof e9 ? e9 : { ...e9, defaultValue: s8(e9 == null ? void 0 : e9.defaultValue) };
}
async function c6(a6, i9) {
  const { cimResourceManager: t11, cimAnalyzer: l8, scaleExpression: r7 } = i9.schemaOptions;
  await Promise.all(te.fetchResources(a6.symbol, t11, []));
  const o13 = l8.analyzeSymbolReference(a6, false), s9 = { scaleInfo: n13(a6), scaleExpression: r7 }, c8 = [];
  for (const e9 of o13) switch (e9.type) {
    case "marker":
      c8.push(...f10(e9, i9, s9));
      break;
    case "fill":
      c8.push(...b8(e9, i9, s9));
      break;
    case "gradientFill":
      c8.push(...z5(e9, i9, s9));
      break;
    case "line":
      c8.push(...d8(e9, i9, s9));
      break;
    case "gradientStroke":
      c8.push(...I6(e9, i9, s9));
      break;
    case "text":
      c8.push(...R5(e9, i9, s9));
  }
  return c8;
}
function f10(e9, a6, i9) {
  const { uniforms: r7, schemaOptions: o13 } = a6, { store: n14 } = o13, s9 = e9.isOutline ? { ...z4, visualVariableSizeScaleStops: r7.visualVariableSizeOutlineScaleStops } : { visualVariableColor: r7.visualVariableColor, visualVariableOpacity: r7.visualVariableOpacity, visualVariableSizeMinMaxValue: r7.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: r7.visualVariableSizeScaleStops, visualVariableSizeStops: r7.visualVariableSizeStops, visualVariableSizeUnitValue: r7.visualVariableSizeUnitValue, visualVariableRotation: r7.visualVariableRotation };
  if (e9.animationParams) {
    return u11(n14.ensureInstance(j6.animatedMarker, { uniforms: s9, optionalAttributes: { zoomRange: true } }), e9, z4, i9);
  }
  return p14(n14.ensureInstance(j6.marker, { uniforms: s9, optionalAttributes: { zoomRange: !!i9.scaleInfo } }), e9, r7, i9);
}
function u11(e9, a6, t11, l8) {
  if (!a6.animationParams) return [];
  return [e9.createMeshInfo({ pixelDimensions: a6.pixelDimensions, texelDimensions: a6.texelDimensions, effects: a6.effects ? { type: "cim-effect-infos", effectInfos: a6.effects } : null, sprite: a6.spriteRasterizationParam, animations: a6.animationParams, scaleInfo: l8.scaleInfo, scaleSymbolsProportionally: a6.scaleSymbolsProportionally, strokeWidth: a6.outlineWidth, isMapAligned: a6.alignment === i.MAP, colorLocked: a6.colorLocked, isStroke: a6.isStroke, baseSize: a6.baseSize, referenceSize: a6.referenceSize, angleToLine: !!a6.markerPlacement && (a6.markerPlacement.placement && "angleToLine" in a6.markerPlacement.placement && a6.markerPlacement.placement.angleToLine), sizeRatio: a6.sizeRatio })];
}
function p14(e9, i9, t11, { scaleInfo: l8, scaleExpression: n14 }) {
  const c8 = a4(t11);
  return [e9.createMeshInfo({ size: i9.size, scaleX: i9.scaleX, anchorX: i9.anchorPoint.x, anchorY: i9.anchorPoint.y, angle: i9.rotation, color: s8(i9.color) ?? [0, 0, 0, 0], colorLocked: i9.colorLocked, frameHeight: i9.frameHeight, widthRatio: i9.widthRatio, scaleInfo: l8, offsetX: i9.offsetX, offsetY: i9.offsetY, outlineColor: s8(i9.outlineColor) ?? [0, 0, 0, 0], outlineSize: i9.outlineWidth, referenceSize: i9.referenceSize || n2.CIMVectorMarker.size, rotateClockwise: i9.rotateClockwise, scaleFactor: n14 ?? 1, sizeRatio: i9.sizeRatio, alignment: i9.alignment, isAbsoluteAnchorPoint: i9.isAbsoluteAnchorPoint, scaleSymbolsProportionally: i9.scaleSymbolsProportionally, sprite: i9.spriteRasterizationParam, hasSizeVV: c8, placement: i9.markerPlacement, effects: i9.effects ? { type: "cim-effect-infos", effectInfos: i9.effects } : null, transforms: i9.transform, minPixelBuffer: x6(t11) })];
}
function m15(e9, a6, i9) {
  const { uniforms: l8, schemaOptions: r7 } = a6, { store: o13 } = r7;
  return S6(o13.ensureInstance(j6.fill, { uniforms: { visualVariableColor: e9.colorLocked ? null : l8.visualVariableColor, visualVariableOpacity: l8.visualVariableOpacity }, optionalAttributes: { zoomRange: !!i9.scaleInfo } }), e9, i9);
}
function S6(e9, a6, { scaleInfo: i9 }) {
  return [e9.createMeshInfo({ color: s8(a6.color) ?? [0, 0, 0, 0], scaleInfo: i9, effects: a6.effects ? { type: "cim-effect-infos", effectInfos: a6.effects } : null })];
}
function b8(e9, a6, i9) {
  if (!e9.spriteRasterizationParam) return m15(e9, a6, i9);
  const { uniforms: l8, schemaOptions: r7 } = a6, { store: o13 } = r7;
  return V3(o13.ensureInstance(j6.complexFill, { uniforms: { visualVariableColor: e9.colorLocked ? null : l8.visualVariableColor, visualVariableOpacity: l8.visualVariableOpacity }, optionalAttributes: { zoomRange: !!i9.scaleInfo } }), e9, null != l8.visualVariableColor, i9);
}
function V3(e9, a6, i9, { scaleInfo: t11 }) {
  if (!a6.spriteRasterizationParam) throw new Error("InternalError: Sprite should always be defined");
  const l8 = !!a6.hasUnresolvedReplacementColor && (!i9 || a6.colorLocked), r7 = a6.sampleAlphaOnly && !l8, o13 = a6.spriteRasterizationParam;
  return [e9.createMeshInfo({ color: s8(a6.color) ?? [0, 0, 0, 0], height: a6.height, aspectRatio: a6.scaleX, offsetX: a6.offsetX, offsetY: a6.offsetY, scaleX: 1, scaleY: 1, angle: a6.angle, applyRandomOffset: a6.applyRandomOffset, sampleAlphaOnly: r7, scaleProportionally: "CIMHatchFill" === o13.resource.type, sprite: o13, scaleInfo: t11, effects: a6.effects ? { type: "cim-effect-infos", effectInfos: a6.effects } : null })];
}
function z5(e9, a6, i9) {
  const { uniforms: l8, schemaOptions: r7 } = a6, { store: o13 } = r7;
  return h10(o13.ensureInstance(j6.gradientFill, { uniforms: { visualVariableColor: null, visualVariableOpacity: l8.visualVariableOpacity }, optionalAttributes: { zoomRange: !!i9.scaleInfo } }), e9, i9);
}
function h10(e9, a6, { scaleInfo: i9 }) {
  if (!a6.spriteRasterizationParam) throw new Error("InternalError: Sprite should always be defined");
  const t11 = a6.spriteRasterizationParam;
  return [e9.createMeshInfo({ color: s8(a6.color) ?? [0, 0, 0, 0], angle: a6.angle, gradientMethod: a6.gradientMethod, gradientSize: a6.gradientSize, gradientSizeUnits: a6.gradientSizeUnits, gradientType: a6.gradientType, sprite: t11, scaleInfo: i9, effects: a6.effects ? { type: "cim-effect-infos", effectInfos: a6.effects } : null })];
}
function d8(e9, a6, i9) {
  const { uniforms: r7, schemaOptions: o13 } = a6, { store: n14 } = o13, s9 = e9.isOutline ? { ...z4, visualVariableSizeScaleStops: r7.visualVariableSizeOutlineScaleStops } : { visualVariableColor: e9.colorLocked ? null : r7.visualVariableColor, visualVariableOpacity: r7.visualVariableOpacity, visualVariableSizeMinMaxValue: r7.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: r7.visualVariableSizeScaleStops, visualVariableSizeStops: r7.visualVariableSizeStops, visualVariableSizeUnitValue: r7.visualVariableSizeUnitValue }, c8 = { uniforms: s9, optionalAttributes: { zoomRange: !!i9.scaleInfo } }, f12 = !!(s9.visualVariableSizeMinMaxValue || s9.visualVariableSizeScaleStops || s9.visualVariableSizeStops || s9.visualVariableSizeUnitValue);
  if (!e9.spriteRasterizationParam) {
    return y4(n14.ensureInstance(j6.line, c8), e9, f12, i9);
  }
  return g9(n14.ensureInstance(j6.texturedLine, c8), e9, f12, i9);
}
function v6(e9, a6, { scaleInfo: i9 }) {
  return { color: s8(e9.color) ?? [0, 0, 0, 0], width: e9.width, referenceWidth: e9.referenceWidth, capType: e9.cap, joinType: e9.join, miterLimit: e9.miterLimit, scaleInfo: i9, hasSizeVV: a6, effects: e9.effects ? { type: "cim-effect-infos", effectInfos: e9.effects } : null };
}
function y4(e9, a6, i9, t11) {
  if (a6.spriteRasterizationParam) throw new Error("InternalError: Sprite should not be defined");
  const l8 = v6(a6, i9, t11);
  return [e9.createMeshInfo(l8)];
}
function g9(e9, a6, i9, t11) {
  const { spriteRasterizationParam: l8, scaleDash: r7, sampleAlphaOnly: o13 } = a6;
  if (!l8) throw new Error("InternalError: Sprite should be defined");
  return [e9.createMeshInfo({ ...v6(a6, i9, t11), offsetAlongLine: a6.offsetAlongLine ?? 0, shouldScaleDash: r7 ?? false, shouldSampleAlphaOnly: o13, isSDF: "CIMPictureStroke" !== l8.resource.type && "CIMGradientStroke" !== l8.resource.type, sprite: l8 })];
}
function I6(e9, a6, i9) {
  const { uniforms: r7, schemaOptions: o13 } = a6, { store: n14 } = o13;
  return M4(n14.ensureInstance(j6.gradientStroke, { uniforms: e9.isOutline ? { ...z4, visualVariableSizeScaleStops: r7.visualVariableSizeOutlineScaleStops } : { visualVariableColor: null, visualVariableOpacity: r7.visualVariableOpacity, visualVariableSizeMinMaxValue: r7.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: r7.visualVariableSizeScaleStops, visualVariableSizeStops: r7.visualVariableSizeStops, visualVariableSizeUnitValue: r7.visualVariableSizeUnitValue }, optionalAttributes: { zoomRange: !!i9.scaleInfo } }), e9, i9);
}
function M4(e9, a6, i9) {
  if (!a6.spriteRasterizationParam) throw new Error("InternalError: Sprite should always be defined");
  const t11 = a6.spriteRasterizationParam;
  return [e9.createMeshInfo({ ...v6(a6, false, i9), gradientMethod: a6.gradientMethod, gradientSize: a6.gradientSize, gradientSizeUnits: a6.gradientSizeUnits, gradientType: a6.gradientType, sprite: t11, effects: a6.effects ? { type: "cim-effect-infos", effectInfos: a6.effects } : null })];
}
function R5(e9, a6, i9) {
  const { uniforms: l8, schemaOptions: r7 } = a6, { store: o13 } = r7;
  return P8(o13.ensureInstance(j6.text, { uniforms: { visualVariableColor: e9.colorLocked ? null : l8.visualVariableColor, visualVariableOpacity: l8.visualVariableOpacity, visualVariableRotation: l8.visualVariableRotation, visualVariableSizeMinMaxValue: l8.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: l8.visualVariableSizeScaleStops, visualVariableSizeStops: l8.visualVariableSizeStops, visualVariableSizeUnitValue: l8.visualVariableSizeUnitValue }, optionalAttributes: { zoomRange: !!i9.scaleInfo, referenceSymbol: false, clipAngle: false } }), e9, l8, i9);
}
function P8(e9, a6, i9, { scaleInfo: t11, scaleExpression: l8 }) {
  return [e9.createMeshInfo({ boxBackgroundColor: s8(a6.backgroundColor), boxBorderLineColor: s8(a6.borderLineColor), boxBorderLineSize: a6.borderLineWidth ?? 0, color: s8(a6.color) ?? [0, 0, 0, 0], offsetX: a6.offsetX, offsetY: a6.offsetY, postAngle: a6.angle, fontSize: a6.size, referenceSize: a6.referenceSize, decoration: a6.decoration, haloColor: s8(a6.haloColor) ?? [0, 0, 0, 0], haloSize: a6.haloSize ?? 0, outlineColor: s8(a6.outlineColor) ?? [0, 0, 0, 0], outlineSize: a6.outlineSize, lineWidth: a6.lineWidth || 512, lineHeightRatio: 1, horizontalAlignment: a6.horizontalAlignment ?? "center", verticalAlignment: a6.verticalAlignment ?? "baseline", useCIMAngleBehavior: false, glyphs: a6.textRasterizationParam, scaleInfo: t11, effects: a6.effects ? { type: "cim-effect-infos", effectInfos: a6.effects } : null, placement: a6.markerPlacement, transforms: a6.transform, scaleFactor: l8 ?? 1, minPixelBuffer: x6(i9), repeatLabel: null, repeatLabelDistance: null, allowOverrun: null, labelPosition: null })];
}

// node_modules/@arcgis/core/views/2d/layers/support/FeatureCommandQueue.js
var i8 = class {
  constructor() {
    this.type = "override-batch", this.messages = [], this._resovler = L();
  }
  get promise() {
    return this._resovler.promise;
  }
  resolve() {
    this._resovler.resolve();
  }
  add(e9) {
    this.messages.push(e9);
  }
};
var o11 = class {
  constructor(e9) {
    this.updateTracking = new d2({ debugName: "FeatureCommandQueue" }), this.process = e9.process, this._queueProcessor = new _({ concurrency: 1, process: async (e10) => {
      if ("override-batch" === e10.type) {
        const e11 = this._nextOverrideBatch;
        if (null == e11) throw new Error("InternalError: Override should be defined");
        return this._nextOverrideBatch = null, await this.process(e11), void e11.resolve();
      }
      return this.process(e10);
    } });
  }
  destroy() {
    this.updateTracking.destroy(), this._queueProcessor.destroy(), this.clear();
  }
  clear() {
    this._queueProcessor.clear();
  }
  async push(e9) {
    return d(this.updateTracking.addPromise(this._doPush(e9)));
  }
  async _doPush(e9) {
    const r7 = this._queueProcessor, s9 = r7.last();
    switch (e9.type) {
      case "update":
      case "highlight":
        if ((s9 == null ? void 0 : s9.type) === e9.type) return;
        return r7.push(e9);
      case "override":
      case "edit":
        return this._pushOverride(e9);
    }
  }
  _pushOverride(e9) {
    return null == this._nextOverrideBatch && (this._nextOverrideBatch = new i8(), this._queueProcessor.push(this._nextOverrideBatch)), this._nextOverrideBatch.add(e9), this._nextOverrideBatch.promise;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/schema/processor/StorageSchema.js
function a5(e9, i9) {
  return { type: "simple", filters: i9, capabilities: { maxTextureSize: t3().maxTextureSize }, bindings: u12(e9) };
}
function o12(e9, n14) {
  const t11 = t3();
  return { type: "multi", target: "feature", keyField: r3, filters: n14, capabilities: { maxTextureSize: t11.maxTextureSize }, bindings: { [s3.TrackLine]: u12(e9.trackLines.renderer), [s3.LatestObservation]: u12(e9.latestObservations.renderer), [s3.PreviousObservation]: u12(e9.previousObservations.renderer) } };
}
function l7(e9) {
  switch (e9) {
    case "opacity":
      return L5.OPACITY;
    case "color":
      return L5.COLOR;
    case "rotation":
      return L5.ROTATION;
    case "size":
      return L5.SIZE;
    default:
      return null;
  }
}
function u12(e9) {
  if (!e9) return [];
  switch (e9.type) {
    case "simple":
    case "class-breaks":
    case "unique-value":
    case "dictionary":
      return d9(e9);
    case "dot-density":
      return c7(e9);
    case "pie-chart":
      return p15(e9);
    case "heatmap":
      return f11(e9);
  }
}
function c7(e9) {
  const i9 = [];
  for (const r7 of e9.attributes) i9.push({ binding: i9.length, expression: r7.valueExpression, field: r7.field });
  return i9;
}
function p15(e9) {
  const i9 = d9(e9);
  let r7 = 4;
  for (const n14 of e9.attributes) i9.push({ binding: r7++, expression: n14.valueExpression, field: n14.field });
  return i9;
}
function f11({ valueExpression: e9, field: i9 }) {
  return e9 || i9 ? [{ binding: 0, expression: e9, field: i9 }] : [];
}
function d9(i9) {
  var _a;
  if (!("visualVariables" in i9) || !((_a = i9.visualVariables) == null ? void 0 : _a.length)) return [];
  return u9(i9.visualVariables).map((e9) => y5(e9)).filter(G);
}
function m16(e9) {
  return "$view.scale" === e9.valueExpression ? null : { binding: l7(e9.type), field: e9.field, normalizationField: e9.normalizationField, expression: e9.valueExpression, valueRepresentation: e9.valueRepresentation };
}
function b9(e9) {
  return { binding: l7(e9.type), field: e9.field, normalizationField: e9.normalizationField, expression: e9.valueExpression };
}
function x7(e9) {
  return { binding: l7(e9.type), field: e9.field, normalizationField: e9.normalizationField, expression: e9.valueExpression };
}
function v7(e9) {
  return { binding: l7(e9.type), expression: e9.valueExpression, field: e9.field };
}
function y5(e9) {
  switch (e9.type) {
    case "size":
      return m16(e9);
    case "color":
      return b9(e9);
    case "opacity":
      return x7(e9);
    case "rotation":
      return v7(e9);
  }
}

export {
  t7 as t,
  z,
  D4 as D,
  E5 as E,
  H3 as H,
  o5 as o,
  s6 as s,
  j6 as j,
  q7 as q,
  F9 as F,
  t10 as t2,
  m13 as m,
  z4 as z2,
  x6 as x,
  h9 as h,
  a4 as a,
  i7 as i,
  n13 as n,
  c6 as c,
  u11 as u,
  p14 as p,
  S6 as S,
  V3 as V,
  h10 as h2,
  y4 as y,
  g9 as g,
  M4 as M,
  P8 as P,
  a5 as a2,
  o12 as o2,
  d9 as d,
  o11 as o3
};
//# sourceMappingURL=chunk-VWA3EWRM.js.map
