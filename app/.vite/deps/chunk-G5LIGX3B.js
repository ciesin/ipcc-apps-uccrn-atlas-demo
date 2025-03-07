import {
  n3 as n2,
  t as t3
} from "./chunk-3SEDCXI3.js";
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
  t as t2
} from "./chunk-3VWS6Q3L.js";
import {
  U2 as U,
  _,
  g3 as g2
} from "./chunk-T4YD2MX2.js";
import {
  E as E3,
  e
} from "./chunk-RD3QRDRK.js";
import {
  t
} from "./chunk-HYJ4YR5G.js";
import {
  p,
  w as w2
} from "./chunk-5AJMZDUM.js";
import {
  C,
  D,
  E,
  F,
  G,
  I,
  O,
  R
} from "./chunk-CRKFUUKK.js";
import {
  M,
  b as b3,
  f,
  h,
  i,
  l,
  o
} from "./chunk-LH36NQSN.js";
import {
  b as b2
} from "./chunk-5X74MKXM.js";
import {
  u
} from "./chunk-JLFV7EBO.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  s as s2
} from "./chunk-6P7HXSJ6.js";
import {
  d
} from "./chunk-YSPSOPLL.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  b,
  s
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/views/2d/engine/flow/utils.js
function s3(t6) {
  const n4 = a2(u2(t6)), i3 = n4, o4 = true, s6 = Math.max(n4 / 2, 5), r3 = Math.round(u(t6.maxPathLength) / s6) + 1, l6 = 10, { density: c4 } = t6;
  return { smoothing: u(t6.smoothing), interpolate: true, velocityScale: "flow-from" === t6.flowRepresentation ? 1 : -1, verticesPerLine: r3, minSpeedThreshold: 1e-3, segmentLength: s6, maxTurnAngle: 1, collisions: o4, lineCollisionWidth: i3, lineSpacing: l6, density: c4 };
}
function a2(e4) {
  return "constant" === e4.kind ? e4.value[0] : e4.values[e4.values.length - 1];
}
function r2(e4) {
  const t6 = e4.toRgba();
  return [t6[0] / 255, t6[1] / 255, t6[2] / 255, t6[3]];
}
function l2(e4) {
  return { kind: "constant", value: [0.1, 0.1, 0.1, 1] };
}
function u2(t6) {
  if (!t6.hasVisualVariables("size")) return { kind: "constant", value: [u(t6.trailWidth)] };
  const n4 = t6.getVisualVariablesForType("size")[0], i3 = [], o4 = [];
  let s6;
  if (n4.stops) {
    for (const t7 of n4.stops) i3.push(t7.value), o4.push(u(t7.size));
    s6 = n4.stops.length;
  } else i3.push(n4.minDataValue, n4.maxDataValue), o4.push(u(n4.minSize), u(n4.maxSize)), s6 = 2;
  return { kind: "ramp", stops: i3, values: o4, count: s6 };
}
function c(e4) {
  if (!e4.hasVisualVariables("color")) return { kind: "constant", value: r2(e4.color) };
  const t6 = e4.getVisualVariablesForType("color")[0], n4 = [], i3 = [];
  for (const o4 of t6.stops) n4.push(o4.value), Array.prototype.push.apply(i3, r2(o4.color));
  return { kind: "ramp", stops: n4, values: i3, count: t6.stops.length };
}
function p2(e4) {
  if (!e4.hasVisualVariables("opacity")) return { kind: "constant", value: [1] };
  const t6 = e4.getVisualVariablesForType("opacity")[0], n4 = [], i3 = [];
  for (const o4 of t6.stops) n4.push(o4.value), i3.push(o4.opacity);
  return { kind: "ramp", stops: n4, values: i3, count: t6.stops.length };
}
function m2(e4, t6, n4, i3) {
  switch (t6) {
    case "int":
      e4.setUniform1iv(n4, i3);
      break;
    case "float":
      e4.setUniform1fv(n4, i3);
      break;
    case "vec2":
      e4.setUniform2fv(n4, i3);
      break;
    case "vec3":
      e4.setUniform3fv(n4, i3);
      break;
    case "vec4":
      e4.setUniform4fv(n4, i3);
  }
}
function f2(e4, t6, n4, i3) {
  "constant" === i3.kind ? m2(e4, n4, `u_${t6}`, i3.value) : (m2(e4, "float", `u_${t6}_stops`, i3.stops), m2(e4, n4, `u_${t6}_values`, i3.values), e4.setUniform1i(`u_${t6}_count`, i3.count));
}
function h2(e4, t6) {
  let n4 = true;
  return n4 = n4 && e4.collisions === t6.collisions, n4 = n4 && e4.density === t6.density, n4 = n4 && e4.interpolate === t6.interpolate, n4 = n4 && e4.lineCollisionWidth === t6.lineCollisionWidth, n4 = n4 && e4.lineSpacing === t6.lineSpacing, n4 = n4 && e4.maxTurnAngle === t6.maxTurnAngle, n4 = n4 && e4.minSpeedThreshold === t6.minSpeedThreshold, n4 = n4 && e4.segmentLength === t6.segmentLength, n4 = n4 && e4.smoothing === t6.smoothing, n4 = n4 && e4.velocityScale === t6.velocityScale, n4 = n4 && e4.verticesPerLine === t6.verticesPerLine, n4;
}
function d2(e4, t6) {
  return e4 === t6 || null != e4 && null != t6 && e4.equals(t6);
}
function g3(e4, t6) {
  if (!h2(e4.simulationSettings, t6.simulationSettings)) return false;
  if (!d2(e4.timeExtent, t6.timeExtent)) return false;
  let n4 = true;
  return n4 = n4 && e4.loadImagery === t6.loadImagery, n4 = n4 && e4.createFlowMesh === t6.createFlowMesh, n4 = n4 && e4.color.kind === t6.color.kind, n4 = n4 && e4.opacity.kind === t6.opacity.kind, n4 = n4 && e4.size.kind === t6.size.kind, n4;
}

// node_modules/@arcgis/core/views/2d/engine/flow/styles/Imagery.js
var f3 = class _f {
  constructor(t6) {
    this._params = t6, this.animated = false;
  }
  isCompatible(t6) {
    if (!(t6 instanceof _f)) return false;
    if (!d2(this._params.timeExtent, t6._params.timeExtent)) return false;
    let e4 = true;
    return e4 = e4 && this._params.loadImagery === t6._params.loadImagery, e4 = e4 && this._params.color.kind === t6._params.color.kind, e4 = e4 && this._params.opacity.kind === t6._params.opacity.kind, e4;
  }
  async load(a3, e4) {
    const { extent: r3, size: s6 } = a3;
    s(e4);
    const o4 = await this._params.loadImagery(r3, s6[0], s6[1], this._params.timeExtent, e4);
    return new x(o4, { color: this._params.color, opacity: this._params.opacity });
  }
  render(t6, a3, r3) {
    const { context: s6 } = t6, { program: n4 } = r3;
    s6.setFaceCullingEnabled(false), s6.setBlendingEnabled(true), s6.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), s6.useProgram(n4), n4.setUniformMatrix3fv("u_dvsMat3", a3.dvsMat3), s6.bindTexture(r3.texture, 0), n4.setUniform1i("u_texture", 0), n4.setUniform1f("u_Min", r3.min), n4.setUniform1f("u_Max", r3.max), f2(n4, "color", "vec4", this._params.color), f2(n4, "opacity", "float", this._params.opacity), s6.bindVAO(r3.vertexArray), s6.drawArrays(E.TRIANGLE_STRIP, 0, 4);
  }
};
var d3 = /* @__PURE__ */ new Map();
d3.set("a_position", 0), d3.set("a_texcoord", 1);
var w3 = /* @__PURE__ */ new Map([["geometry", [new t2("a_position", 2, C.UNSIGNED_SHORT, 0, 8), new t2("a_texcoord", 2, C.UNSIGNED_SHORT, 4, 8)]]]);
var u3 = { vsPath: "raster/flow/imagery", fsPath: "raster/flow/imagery", attributes: d3 };
var x = class {
  constructor(t6, a3) {
    this._flowData = t6, this._values = a3;
  }
  attach(t6) {
    const { context: a3 } = t6, { width: e4, height: s6 } = this._flowData, o4 = E2.createVertex(a3, F.STATIC_DRAW, new Uint16Array([0, 0, 0, 1, e4, 0, 1, 1, 0, s6, 0, 0, e4, s6, 1, 0])), i3 = /* @__PURE__ */ new Map([["geometry", o4]]), _4 = new o2(a3, d3, w3, i3), f9 = [];
    "ramp" === this._values.color.kind && f9.push("vvColor"), "ramp" === this._values.opacity.kind && f9.push("vvOpacity");
    const x2 = t6.getProgram(u3, f9);
    let y2 = 1e6, g5 = -1e6;
    for (let r3 = 0; r3 < s6; r3++) for (let t7 = 0; t7 < e4; t7++) if (0 !== this._flowData.mask[r3 * e4 + t7]) {
      const a4 = this._flowData.data[2 * (r3 * e4 + t7)], s7 = this._flowData.data[2 * (r3 * e4 + t7) + 1], o5 = Math.sqrt(a4 * a4 + s7 * s7);
      y2 = Math.min(y2, o5), g5 = Math.max(g5, o5);
    }
    const A = new Uint8Array(4 * e4 * s6);
    for (let r3 = 0; r3 < s6; r3++) for (let t7 = 0; t7 < e4; t7++) if (0 !== this._flowData.mask[r3 * e4 + t7]) {
      const a4 = this._flowData.data[2 * (r3 * e4 + t7)], s7 = this._flowData.data[2 * (r3 * e4 + t7) + 1], o5 = (Math.sqrt(a4 * a4 + s7 * s7) - y2) / (g5 - y2);
      A[4 * (r3 * e4 + t7)] = 255 * o5, A[4 * (r3 * e4 + t7) + 1] = 0, A[4 * (r3 * e4 + t7) + 2] = 0, A[4 * (r3 * e4 + t7) + 3] = 255;
    } else A[4 * (r3 * e4 + t7)] = 0, A[4 * (r3 * e4 + t7) + 1] = 0, A[4 * (r3 * e4 + t7) + 2] = 0, A[4 * (r3 * e4 + t7) + 3] = 0;
    const b4 = new p();
    b4.internalFormat = G.RGBA, b4.wrapMode = D.CLAMP_TO_EDGE, b4.flipped = true, b4.width = e4, b4.height = s6;
    const v = new w2(a3, b4, A);
    this.vertexArray = _4, this.program = x2, this.texture = v, this.min = y2, this.max = g5, this._flowData = null;
  }
  detach() {
    this.vertexArray.dispose(), this.texture.dispose();
  }
  get ready() {
    return this.program.compiled;
  }
};

// node_modules/@arcgis/core/views/2d/engine/flow/styles/Particles.js
var _2 = class __ {
  constructor(t6) {
    this._params = t6;
  }
  get animated() {
    return this._params.flowSpeed > 0;
  }
  isCompatible(t6) {
    return t6 instanceof __ && g3(this._params, t6._params);
  }
  async load(e4, a3) {
    const { extent: s6, size: r3 } = e4;
    s(a3);
    const i3 = await this._params.loadImagery(s6, r3[0], r3[1], this._params.timeExtent, a3), { vertexData: o4, indexData: n4 } = await this._params.createFlowMesh("Particles", this._params.simulationSettings, i3, a3);
    return new c2(o4, n4, { color: this._params.color, opacity: this._params.opacity, size: this._params.size });
  }
  render(t6, e4, s6) {
    const { context: n4 } = t6, { program: m5 } = s6;
    n4.setFaceCullingEnabled(false), n4.setBlendingEnabled(true), n4.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), n4.useProgram(m5), m5.setUniform1f("u_time", e4.time), m5.setUniform1f("u_trailLength", this._params.trailLength), m5.setUniform1f("u_flowSpeed", this._params.flowSpeed), m5.setUniform1f("u_featheringSize", this._params.featheringSize), m5.setUniform1f("u_featheringOffset", this._params.featheringOffset), m5.setUniform1f("u_introFade", this._params.introFade ? 1 : 0), m5.setUniform1f("u_fadeToZero", this._params.fadeToZero ? 1 : 0), m5.setUniform1f("u_decayRate", this._params.decayRate), m5.setUniformMatrix3fv("u_dvsMat3", e4.dvsMat3), m5.setUniformMatrix3fv("u_displayViewMat3", e4.displayViewMat3), f2(m5, "color", "vec4", this._params.color), f2(m5, "opacity", "float", this._params.opacity), f2(m5, "size", "float", this._params.size), n4.bindVAO(s6.vertexArray), n4.drawElements(E.TRIANGLES, s6.indexCount, C.UNSIGNED_INT, 0);
  }
};
var h3 = /* @__PURE__ */ new Map();
h3.set("a_xyts0", 0), h3.set("a_xyts1", 1), h3.set("a_typeIdDurationSeed", 2), h3.set("a_extrudeInfo", 3);
var l3 = /* @__PURE__ */ new Map([["geometry", [new t2("a_xyts0", 4, C.FLOAT, 0, 64), new t2("a_xyts1", 4, C.FLOAT, 16, 64), new t2("a_typeIdDurationSeed", 4, C.FLOAT, 32, 64), new t2("a_extrudeInfo", 4, C.FLOAT, 48, 64)]]]);
var f4 = { vsPath: "raster/flow/particles", fsPath: "raster/flow/particles", attributes: h3 };
var c2 = class {
  constructor(t6, e4, a3) {
    this._vertexData = t6, this._indexData = e4, this._values = a3;
  }
  attach(t6) {
    const { context: e4 } = t6, a3 = E2.createVertex(e4, F.STATIC_DRAW, this._vertexData), r3 = E2.createIndex(e4, F.STATIC_DRAW, this._indexData), i3 = /* @__PURE__ */ new Map([["geometry", a3]]), o4 = new o2(e4, h3, l3, i3, r3), p4 = [];
    "ramp" === this._values.color.kind && p4.push("vvColor"), "ramp" === this._values.opacity.kind && p4.push("vvOpacity"), "ramp" === this._values.size.kind && p4.push("vvSize");
    const _4 = t6.getProgram(f4, p4);
    this.vertexArray = o4, this.program = _4, this.indexCount = this._indexData.length, this._vertexData = null, this._indexData = null;
  }
  detach() {
    this.vertexArray.dispose();
  }
  get ready() {
    return this.program.compiled;
  }
};

// node_modules/@arcgis/core/views/2d/engine/flow/styles/Stack.js
var t4 = class _t {
  constructor(t6) {
    this._styles = t6;
  }
  get animated() {
    return this._styles.reduce((t6, s6) => t6 || s6.animated, false);
  }
  isCompatible(s6) {
    if (!(s6 instanceof _t)) return false;
    if (this._styles.length !== s6._styles.length) return false;
    const e4 = this._styles.length;
    for (let t6 = 0; t6 < e4; t6++) if (!this._styles[t6].isCompatible(s6._styles[t6])) return false;
    return true;
  }
  async load(t6, e4) {
    const r3 = await Promise.all(this._styles.map((s6) => s6.load(t6, e4)));
    return new s4(r3);
  }
  render(t6, s6, e4) {
    for (let r3 = 0; r3 < this._styles.length; r3++) this._styles[r3].render(t6, s6, e4.resources[r3]);
  }
};
var s4 = class {
  constructor(t6) {
    this.resources = t6;
  }
  attach(t6) {
    for (const s6 of this.resources) s6.attach(t6);
  }
  detach() {
    for (const t6 of this.resources) t6.detach();
  }
  get ready() {
    return this.resources.reduce((t6, s6) => t6 && s6.ready, true);
  }
};

// node_modules/@arcgis/core/views/2d/engine/flow/styles/Streamlines.js
var _3 = class __ {
  constructor(e4) {
    this._params = e4;
  }
  get animated() {
    return this._params.flowSpeed > 0;
  }
  isCompatible(e4) {
    return e4 instanceof __ && g3(this._params, e4._params);
  }
  async load(t6, a3) {
    const { extent: s6, size: r3 } = t6;
    s(a3);
    const i3 = await this._params.loadImagery(s6, r3[0], r3[1], this._params.timeExtent, a3), { vertexData: o4, indexData: n4 } = await this._params.createFlowMesh("Streamlines", this._params.simulationSettings, i3, a3);
    return new d4(o4, n4, { color: this._params.color, opacity: this._params.opacity, size: this._params.size });
  }
  render(e4, t6, s6) {
    const { context: n4 } = e4, { program: m5 } = s6;
    n4.setFaceCullingEnabled(false), n4.setBlendingEnabled(true), n4.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), n4.useProgram(m5), m5.setUniform1f("u_time", t6.time), m5.setUniform1f("u_trailLength", this._params.trailLength), m5.setUniform1f("u_flowSpeed", this._params.flowSpeed), m5.setUniform1f("u_featheringSize", this._params.featheringSize), m5.setUniform1f("u_featheringOffset", this._params.featheringOffset), m5.setUniform1f("u_introFade", this._params.introFade ? 1 : 0), m5.setUniform1f("u_fadeToZero", this._params.fadeToZero ? 1 : 0), m5.setUniform1f("u_decayRate", this._params.decayRate), m5.setUniformMatrix3fv("u_dvsMat3", t6.dvsMat3), m5.setUniformMatrix3fv("u_displayViewMat3", t6.displayViewMat3), f2(m5, "color", "vec4", this._params.color), f2(m5, "opacity", "float", this._params.opacity), f2(m5, "size", "float", this._params.size), n4.bindVAO(s6.vertexArray), n4.drawElements(E.TRIANGLES, s6.indexCount, C.UNSIGNED_INT, 0);
  }
};
var l4 = /* @__PURE__ */ new Map();
l4.set("a_positionAndSide", 0), l4.set("a_timeInfo", 1), l4.set("a_extrude", 2), l4.set("a_speed", 3);
var h4 = /* @__PURE__ */ new Map([["geometry", [new t2("a_positionAndSide", 3, C.FLOAT, 0, 36), new t2("a_timeInfo", 3, C.FLOAT, 12, 36), new t2("a_extrude", 2, C.FLOAT, 24, 36), new t2("a_speed", 1, C.FLOAT, 32, 36)]]]);
var f5 = { vsPath: "raster/flow/streamlines", fsPath: "raster/flow/streamlines", attributes: l4 };
var d4 = class {
  constructor(e4, t6, a3) {
    this._vertexData = e4, this._indexData = t6, this._values = a3;
  }
  attach(e4) {
    const { context: t6 } = e4, a3 = E2.createVertex(t6, F.STATIC_DRAW, this._vertexData), r3 = E2.createIndex(t6, F.STATIC_DRAW, this._indexData), i3 = /* @__PURE__ */ new Map([["geometry", a3]]), o4 = new o2(t6, l4, h4, i3, r3), p4 = [];
    "ramp" === this._values.color.kind && p4.push("vvColor"), "ramp" === this._values.opacity.kind && p4.push("vvOpacity"), "ramp" === this._values.size.kind && p4.push("vvSize");
    const _4 = e4.getProgram(f5, p4);
    this.vertexArray = o4, this.program = _4, this.indexCount = this._indexData.length, this._vertexData = null, this._indexData = null;
  }
  detach() {
    this.vertexArray.dispose();
  }
  get ready() {
    return this.program.compiled;
  }
};

// node_modules/@arcgis/core/views/2d/engine/flow/createFlowStyle.js
var m3 = 4;
var u4 = 1;
var f6 = 0.5;
var p3 = true;
var d5 = true;
var y = 2.3;
function g4(g5, w4) {
  const { flowSpeed: h7, trailLength: v } = g5, S = s3(g5);
  let j2 = null;
  const k = { opacity: p2(g5), size: u2(g5) };
  let x2 = c(g5);
  if ("none" === g5.background) k.color = x2;
  else {
    "constant" === x2.kind && (x2 = { kind: "ramp", stops: [0, 1], values: [0, 0, 0, 1, x2.value[0], x2.value[1], x2.value[2], x2.value[3]], count: 2 });
    const e4 = { loadImagery: w4.loadImagery, timeExtent: w4.timeExtent, color: x2, opacity: { kind: "constant", value: [1] } };
    j2 = new f3(e4), k.color = l2();
  }
  const I2 = { loadImagery: w4.loadImagery, createFlowMesh: w4.createFlowMesh, simulationSettings: S, timeExtent: w4.timeExtent, trailLength: v, flowSpeed: h7, featheringSize: u4, featheringOffset: f6, introFade: p3, fadeToZero: d5, decayRate: y, color: k.color, opacity: k.opacity, size: k.size }, z = "butt" === g5.trailCap || a2(u2(g5)) <= m3 ? new _3(I2) : new _2(I2);
  return null != j2 ? new t4([j2, z]) : z;
}

// node_modules/@arcgis/core/views/2d/engine/flow/BrushFlow.js
var s5 = class extends t3 {
  constructor() {
    super(...arguments), this._visualState = { time: 0, dvsMat3: e(), displayViewMat3: e() };
  }
  dispose() {
  }
  prepareState(t6) {
    const { context: e4 } = t6;
    e4.setColorMask(true, true, true, true), e4.setStencilFunction(O.EQUAL, 0, 255);
  }
  draw(t6, e4) {
    const { requestRender: a3, allowDelayedRender: s6 } = t6, { displayData: r3 } = e4;
    if (null == r3) return;
    if ("loaded" === r3.state.name && r3.attach({ context: t6.context, getProgram: (e5, a4) => t6.painter.materialManager.getProgram(e5, a4) }), "attached" !== r3.state.name) return;
    const i3 = r3.state.resources;
    !s6 || i3.ready || null == a3 ? (this._visualState.time = t6.time / 1e3, this._visualState.dvsMat3 = e4.transforms.displayViewScreenMat3, this._visualState.displayViewMat3 = t6.state.displayViewMat3, r3.flowStyle.render({ context: t6.context, getProgram: (e5, a4) => t6.painter.materialManager.getProgram(e5, a4) }, this._visualState, i3), r3.flowStyle.animated && null != a3 && a3()) : a3();
  }
};

// node_modules/@arcgis/core/views/2d/engine/flow/FlowContainer.js
var t5 = class extends n2 {
  constructor() {
    super(...arguments), this.flowStyle = null;
  }
  doRender(e4) {
    super.doRender(e4);
  }
  prepareRenderPasses(s6) {
    const t6 = s6.registerRenderPass({ name: "flow", brushes: [s5], target: () => this.children, drawPhase: E3.MAP });
    return [...super.prepareRenderPasses(s6), t6];
  }
};

// node_modules/@arcgis/core/views/2d/engine/flow/FlowDisplayData.js
var e3 = class {
  constructor(t6, e4, s6, a3) {
    this.state = { name: "created" }, this.flowStyle = t6, this.extent = e4, this.size = s6, this.pixelRatio = a3;
  }
  async load() {
    const t6 = new AbortController();
    this.state = { name: "loading", abortController: t6 };
    const e4 = { extent: this.extent, size: this.size, pixelRatio: this.pixelRatio }, s6 = await this.flowStyle.load(e4, t6.signal);
    this.state = { name: "loaded", resources: s6 };
  }
  attach(e4) {
    if ("loaded" !== this.state.name) return void n.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");
    const s6 = this.state.resources;
    s6.attach(e4), this.state = { name: "attached", resources: s6 };
  }
  detach() {
    if ("loading" === this.state.name) return this.state.abortController.abort(), void (this.state = { name: "detached" });
    "attached" === this.state.name && (this.state.resources.detach(), this.state = { name: "detached" });
  }
  update(t6) {
    if (!this.flowStyle.isCompatible(t6.flowStyle)) return false;
    return !(!this.extent.equals(t6.extent) || this.size[0] !== t6.size[0] || this.size[1] !== t6.size[1] || this.pixelRatio !== t6.pixelRatio) && (this.flowStyle = t6.flowStyle, true);
  }
};

// node_modules/@arcgis/core/views/2d/engine/flow/FlowDisplayObject.js
var o3 = class extends e2 {
  constructor() {
    super(...arguments), this._displayData = null;
  }
  get displayData() {
    return this._displayData;
  }
  set displayData(t6) {
    this._displayData = t6, this.requestRender();
  }
  clear() {
    null != this._displayData && (this._displayData.detach(), this._displayData = null, this.requestRender());
  }
  setTransform(r3) {
    const { displayData: l6 } = this;
    if (null == l6) return;
    const o4 = l6.extent.xmin, n4 = l6.extent.ymax, p4 = [0, 0];
    r3.toScreen(p4, [o4, n4]);
    const m5 = (l6.extent.xmax - l6.extent.xmin) / l6.size[0] / r3.resolution, c4 = s2(r3.rotation), { displayViewScreenMat3: x2 } = this.transforms;
    l(x2, [-1, 1, 0]), f(x2, x2, [2 / (r3.size[0] * r3.pixelRatio), -2 / (r3.size[1] * r3.pixelRatio), 1]), M(x2, x2, [p4[0], p4[1], 0]), h(x2, x2, c4), f(x2, x2, [m5 * r3.pixelRatio, m5 * r3.pixelRatio, 1]);
  }
  _createTransforms() {
    return { displayViewScreenMat3: e() };
  }
};

// node_modules/@arcgis/core/views/2d/engine/flow/FlowStrategy.js
var m4 = 1.15;
var d6 = class extends g {
  constructor(t6) {
    super(t6), this._flowDisplayObject = new o3(), this._loading = null;
  }
  initialize() {
    this.flowContainer.addChild(this._flowDisplayObject);
  }
  destroy() {
    this._clear(), this.flowContainer.removeAllChildren();
  }
  get updating() {
    return null != this._loading;
  }
  update(t6) {
    const { flowStyle: o4 } = this.flowContainer;
    if (null == o4) return void this._clear();
    const { extent: e4, rotation: s6, resolution: l6, pixelRatio: r3 } = t6.state, n4 = f7(e4, s6);
    n4.expand(m4);
    const c4 = [Math.round((n4.xmax - n4.xmin) / l6), Math.round((n4.ymax - n4.ymin) / l6)], d9 = new e3(o4, n4, c4, r3);
    if (null != this._loading) {
      if (this._loading.update(d9)) return;
      this._loading.detach(), this._loading = null;
    }
    null != this._flowDisplayObject.displayData && this._flowDisplayObject.displayData.update(d9) || (d9.load().then(() => {
      this._flowDisplayObject.clear(), this._flowDisplayObject.displayData = this._loading, this._loading = null;
    }, (t7) => {
      b(t7) || (n.getLogger(this).error("A resource failed to load.", t7), this._loading = null);
    }), this._loading = d9);
  }
  _clear() {
    this._flowDisplayObject.clear(), null != this._loading && (this._loading.detach(), this._loading = null);
  }
};
r([m()], d6.prototype, "_loading", void 0), r([m()], d6.prototype, "flowContainer", void 0), r([m()], d6.prototype, "updating", null), d6 = r([a("esri.views.2d.engine.flow.FlowStrategy")], d6);
var h5 = d6;
function f7(t6, o4) {
  const i3 = new j({ x: (t6.xmax + t6.xmin) / 2, y: (t6.ymax + t6.ymin) / 2, spatialReference: t6.spatialReference }), a3 = t6.xmax - t6.xmin, s6 = t6.ymax - t6.ymin, l6 = Math.abs(Math.cos(s2(o4))), p4 = Math.abs(Math.sin(s2(o4))), c4 = l6 * a3 + p4 * s6, m5 = p4 * a3 + l6 * s6, d9 = new w({ xmin: i3.x - c4 / 2, ymin: i3.y - m5 / 2, xmax: i3.x + c4 / 2, ymax: i3.y + m5 / 2, spatialReference: t6.spatialReference });
  return d9.centerAt(i3), d9;
}

// node_modules/@arcgis/core/views/2d/engine/flow/FlowView2D.js
var h6 = class extends g {
  constructor() {
    super(...arguments), this._loadImagery = (t6, e4, i3, o4, r3) => g2(this.layer, t6, e4, i3, o4, r3), this._createFlowMesh = (t6, e4, i3, o4) => this.layer.createFlowMesh({ meshType: t6, flowData: i3, simulationSettings: e4 }, { signal: o4 }), this.attached = false, this.type = "flow", this.timeExtent = null, this.redrawOrRefetch = async () => {
      this._updateVisualization();
    };
  }
  get updating() {
    return !this.attached || this._strategy.updating;
  }
  attach() {
    const { layer: t6 } = this, e4 = () => {
      this._loadImagery = (e5, i3, o4, r3, s6) => g2(t6, e5, i3, o4, r3, s6), this._updateVisualization();
    };
    "multidimensionalDefinition" in t6 ? this.addHandles(d(() => t6.multidimensionalDefinition, e4)) : this.addHandles([d(() => t6.mosaicRule, e4), d(() => t6.rasterFunction, e4), d(() => t6.definitionExpression, e4)]), this.container = new t5(), this._strategy = new h5({ flowContainer: this.container }), this._updateVisualization();
  }
  detach() {
    var _a;
    this._strategy.destroy(), (_a = this.container) == null ? void 0 : _a.removeAllChildren(), this.container = null, this.removeHandles();
  }
  update(t6) {
    t6.stationary ? this._strategy.update(t6) : this.layerView.requestUpdate();
  }
  hitTest(t6) {
    return new b2({ attributes: {}, geometry: t6.clone(), layer: this.layer });
  }
  moveEnd() {
  }
  async doRefresh() {
  }
  _updateVisualization() {
    const t6 = this.layer.renderer;
    if (null == t6 || "flow" !== t6.type) return;
    const e4 = g4(t6, { loadImagery: this._loadImagery, createFlowMesh: this._createFlowMesh, timeExtent: this.timeExtent });
    this.container.flowStyle = e4, this.layerView.requestUpdate();
  }
};
r([m()], h6.prototype, "_strategy", void 0), r([m()], h6.prototype, "attached", void 0), r([m()], h6.prototype, "container", void 0), r([m()], h6.prototype, "layer", void 0), r([m()], h6.prototype, "layerView", void 0), r([m()], h6.prototype, "type", void 0), r([m()], h6.prototype, "updating", null), r([m()], h6.prototype, "timeExtent", void 0), h6 = r([a("esri.views.2d.engine.flow.FlowView2D")], h6);
var d7 = h6;

// node_modules/@arcgis/core/views/2d/engine/imagery/BrushVectorField.js
var n3 = new Float32Array([0.27058823529411763, 0.4588235294117647, 0.7098039215686275, 1, 0.396078431372549, 0.5372549019607843, 0.7215686274509804, 1, 0.5176470588235295, 0.6196078431372549, 0.7294117647058823, 1, 0.6352941176470588, 0.7058823529411765, 0.7411764705882353, 1, 0.7529411764705882, 0.8, 0.7450980392156863, 1, 0.8705882352941177, 0.8901960784313725, 0.7490196078431373, 1, 1, 1, 0.7490196078431373, 1, 1, 0.8627450980392157, 0.6313725490196078, 1, 0.9803921568627451, 0.7254901960784313, 0.5176470588235295, 1, 0.9607843137254902, 0.596078431372549, 0.4117647058823529, 1, 0.9294117647058824, 0.4588235294117647, 0.3176470588235294, 1, 0.9098039215686274, 0.08235294117647059, 0.08235294117647059, 1]);
var i2 = new Float32Array([0, 92 / 255, 230 / 255, 1]);
var l5 = { beaufort_ft: n3, beaufort_m: n3, beaufort_km: n3, beaufort_mi: n3, beaufort_kn: new Float32Array([0.1568627450980392, 0.5725490196078431, 0.7803921568627451, 1, 0.34901960784313724, 0.6352941176470588, 0.7294117647058823, 1, 0.5058823529411764, 0.7019607843137254, 0.6705882352941176, 1, 0.6274509803921569, 0.7607843137254902, 0.6078431372549019, 1, 0.7490196078431373, 0.8313725490196079, 0.5411764705882353, 1, 0.8549019607843137, 0.9019607843137255, 0.4666666666666667, 1, 0.9803921568627451, 0.9803921568627451, 0.39215686274509803, 1, 0.9882352941176471, 0.8352941176470589, 0.3254901960784314, 1, 0.9882352941176471, 0.7019607843137254, 0.4, 1, 0.9803921568627451, 0.5529411764705883, 0.20392156862745098, 1, 0.9686274509803922, 0.43137254901960786, 0.16470588235294117, 1, 0.9411764705882353, 0.2784313725490196, 0.11372549019607843, 1]), classified_arrow: new Float32Array([0.2196078431372549, 0.6588235294117647, 0, 1, 0.5450980392156862, 1.2117647058823529, 0, 1, 1, 1, 0, 1, 1, 0.5019607843137255, 0, 1, 1, 0, 0, 1]), ocean_current_m: new Float32Array([0.3058823529411765, 0.10196078431372549, 0.6, 1, 0.7019607843137254, 0.10588235294117647, 0.10196078431372549, 1, 0.792156862745098, 0.5019607843137255, 0.10196078431372549, 1, 0.6941176470588235, 0.6941176470588235, 0.6941176470588235, 1]), ocean_current_kn: new Float32Array([0, 0, 0, 1, 0, 0.1450980392156863, 0.39215686274509803, 1, 0.3058823529411765, 0.10196078431372549, 0.6, 1, 0.592156862745098, 0, 0.39215686274509803, 1, 0.7019607843137254, 0.10588235294117647, 0.10196078431372549, 1, 0.6941176470588235, 0.3058823529411765, 0.10196078431372549, 1, 0.792156862745098, 0.5019607843137255, 0.10196078431372549, 1, 0.6941176470588235, 0.7019607843137254, 0.20392156862745098, 1, 0.6941176470588235, 0.6941176470588235, 0.6941176470588235, 1]), simple_scalar: i2, single_arrow: i2, wind_speed: new Float32Array([0, 0, 0, 1]) };
var c3 = [0, 20];
var d8 = class extends t3 {
  constructor() {
    super(...arguments), this._desc = { magdir: { vsPath: "raster/magdir", fsPath: "raster/magdir", attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_offset", 1], ["a_vv", 2]]) }, scalar: { vsPath: "raster/scalar", fsPath: "raster/scalar", attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_offset", 1], ["a_vv", 2]]) } };
  }
  dispose() {
  }
  prepareState({ context: e4 }) {
    e4.setBlendingEnabled(true), e4.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e4.setColorMask(true, true, true, true), e4.setStencilWriteMask(0), e4.setStencilTestEnabled(true), e4.setStencilOp(I.KEEP, I.KEEP, I.REPLACE);
  }
  draw(e4, a3) {
    if (null == a3.source || 0 === a3.source.validPixelCount) return;
    const { context: t6, timeline: s6 } = e4;
    if (s6.begin(this.name), t6.setStencilFunction(O.EQUAL, a3.stencilRef, 255), a3.updateVectorFieldVAO(e4), "scalar" === e4.renderPass) {
      const t7 = a3.vaoData.scalar;
      t7 && this._drawScalars(e4, a3, t7.vao, t7.elementCount);
    } else {
      const t7 = a3.vaoData.magdir;
      t7 && this._drawTriangles(e4, a3, t7.vao, t7.elementCount);
    }
    s6.end(this.name);
  }
  _drawTriangles(e4, a3, t6, r3) {
    const { context: n4, painter: i3, requestRender: d9, allowDelayedRender: m5 } = e4, { symbolizerParameters: u5 } = a3, f9 = u5.dataRange ? ["dataRange"] : [];
    "geographic" === u5.rotationType && f9.push("rotationGeographic");
    const _4 = i3.materialManager.getProgram(this._desc.magdir, f9);
    if (m5 && null != d9 && !_4.compiled) return void d9();
    n4.useProgram(_4);
    const { coordScale: g5, opacity: p4, transforms: y2 } = a3;
    _4.setUniform2fv("u_coordScale", g5), _4.setUniform1f("u_opacity", p4), _4.setUniformMatrix3fv("u_dvsMat3", y2.displayViewScreenMat3);
    const { style: S, dataRange: b4, rotation: h7, symbolPercentRange: v } = u5;
    _4.setUniform4fv("u_colors", l5[S]), _4.setUniform2fv("u_dataRange", b4 || c3), _4.setUniform1f("u_rotation", h7), _4.setUniform2fv("u_symbolPercentRange", v);
    const w4 = this._getSymbolSize(e4, a3);
    _4.setUniform2fv("u_symbolSize", w4), n4.bindVAO(t6), n4.drawElements(E.TRIANGLES, r3, C.UNSIGNED_INT, 0);
  }
  _drawScalars(e4, a3, t6, r3) {
    const { context: n4, painter: i3, requestRender: l6, allowDelayedRender: d9 } = e4, { symbolizerParameters: m5 } = a3, u5 = [];
    "wind_speed" === m5.style ? u5.push("innerCircle") : m5.dataRange && u5.push("dataRange"), "geographic" === m5.rotationType && u5.push("rotationGeographic");
    const f9 = i3.materialManager.getProgram(this._desc.scalar, u5);
    if (d9 && null != l6 && !f9.compiled) return void l6();
    n4.useProgram(f9);
    const { coordScale: _4, opacity: g5, transforms: p4 } = a3;
    f9.setUniform2fv("u_coordScale", _4), f9.setUniform1f("u_opacity", g5), f9.setUniformMatrix3fv("u_dvsMat3", p4.displayViewScreenMat3);
    const { dataRange: y2, symbolPercentRange: S } = m5;
    f9.setUniform2fv("u_dataRange", y2 || c3), f9.setUniform2fv("u_symbolPercentRange", S);
    const b4 = this._getSymbolSize(e4, a3);
    f9.setUniform2fv("u_symbolSize", b4), n4.bindVAO(t6), n4.drawElements(E.TRIANGLES, r3, C.UNSIGNED_INT, 0);
  }
  _getSymbolSize(e4, a3) {
    const t6 = a3.key ? 2 ** (e4.displayLevel - a3.key.level) : a3.resolution / e4.state.resolution, { symbolTileSize: r3 } = a3.symbolizerParameters;
    return [r3 / (Math.round((a3.width - a3.offset[0]) / r3) * r3) / t6, r3 / (Math.round((a3.height - a3.offset[1]) / r3) * r3) / t6];
  }
};

// node_modules/@arcgis/core/views/2d/engine/imagery/RasterVFDisplayObject.js
var f8 = class extends e2 {
  constructor(t6 = null) {
    super(), this._source = null, this._symbolizerParameters = null, this._vaoInvalidated = true, this.coordScale = [1, 1], this.height = null, this.key = null, this.offset = null, this.stencilRef = 0, this.resolution = null, this.pixelRatio = 1, this.x = 0, this.y = 0, this.rotation = 0, this.rawPixelData = null, this.vaoData = null, this.width = null, this.source = t6;
  }
  destroy() {
    var _a, _b;
    null != this.vaoData && ((_a = this.vaoData.magdir) == null ? void 0 : _a.vao.dispose(), (_b = this.vaoData.scalar) == null ? void 0 : _b.vao.dispose(), this.vaoData = null);
  }
  get symbolizerParameters() {
    return this._symbolizerParameters;
  }
  set symbolizerParameters(t6) {
    JSON.stringify(this._symbolizerParameters) !== JSON.stringify(t6) && (this._symbolizerParameters = t6, this.invalidateVAO());
  }
  get source() {
    return this._source;
  }
  set source(t6) {
    this._source = t6, this.invalidateVAO();
  }
  invalidateVAO() {
    var _a, _b;
    this._vaoInvalidated || null == this.vaoData || ((_a = this.vaoData.magdir) == null ? void 0 : _a.vao.dispose(), (_b = this.vaoData.scalar) == null ? void 0 : _b.vao.dispose(), this.vaoData = null, this._vaoInvalidated = true, this.requestRender());
  }
  updateVectorFieldVAO(t6) {
    if (this._vaoInvalidated) {
      if (this._vaoInvalidated = false, null != this.source && null == this.vaoData) {
        const { style: e4 } = this.symbolizerParameters;
        switch (e4) {
          case "beaufort_ft":
          case "beaufort_km":
          case "beaufort_kn":
          case "beaufort_m":
          case "beaufort_mi":
          case "classified_arrow":
          case "ocean_current_kn":
          case "ocean_current_m":
          case "single_arrow":
            {
              const e5 = U(this.source, this.symbolizerParameters), a3 = this._createVectorFieldVAO(t6.context, e5);
              this.vaoData = { magdir: a3 };
            }
            break;
          case "simple_scalar":
            {
              const e5 = _(this.source, this.symbolizerParameters), a3 = this._createVectorFieldVAO(t6.context, e5);
              this.vaoData = { scalar: a3 };
            }
            break;
          case "wind_speed": {
            const e5 = U(this.source, this.symbolizerParameters), a3 = this._createVectorFieldVAO(t6.context, e5), s6 = _(this.source, this.symbolizerParameters), i3 = this._createVectorFieldVAO(t6.context, s6);
            this.vaoData = { magdir: a3, scalar: i3 };
          }
        }
      }
      this.ready(), this.requestRender();
    }
  }
  _createTransforms() {
    return { displayViewScreenMat3: e() };
  }
  setTransform(r3) {
    const l6 = o(this.transforms.displayViewScreenMat3), [n4, c4] = r3.toScreenNoRotation([0, 0], [this.x, this.y]), h7 = this.resolution / this.pixelRatio / r3.resolution, m5 = h7 * this.width, u5 = h7 * this.height, d9 = Math.PI * this.rotation / 180;
    M(l6, l6, t(n4, c4)), M(l6, l6, t(m5 / 2, u5 / 2)), h(l6, l6, -d9), M(l6, l6, t(-m5 / 2, -u5 / 2)), b3(l6, l6, t(m5, u5)), i(this.transforms.displayViewScreenMat3, r3.displayViewMat3, l6);
  }
  onAttach() {
    this.invalidateVAO();
  }
  onDetach() {
    this.invalidateVAO();
  }
  _createVectorFieldVAO(t6, e4) {
    const { vertexData: a3, indexData: s6 } = e4, i3 = E2.createVertex(t6, F.STATIC_DRAW, new Float32Array(a3)), r3 = E2.createIndex(t6, F.STATIC_DRAW, new Uint32Array(s6)), o4 = $("vector-field", { geometry: [{ location: 0, name: "a_pos", count: 2, type: C.FLOAT, normalized: false }, { location: 1, name: "a_offset", count: 2, type: C.FLOAT, normalized: false }, { location: 2, name: "a_vv", count: 2, type: C.FLOAT, normalized: false }] });
    return { vao: new o2(t6, o4.attributes, o4.bufferLayouts, /* @__PURE__ */ new Map([["geometry", i3]]), r3), elementCount: s6.length };
  }
};

export {
  d7 as d,
  d8 as d2,
  f8 as f
};
//# sourceMappingURL=chunk-G5LIGX3B.js.map
