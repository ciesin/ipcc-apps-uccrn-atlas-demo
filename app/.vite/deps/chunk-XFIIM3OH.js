import {
  n2 as n
} from "./chunk-3SEDCXI3.js";
import {
  x
} from "./chunk-XXK557ZF.js";
import {
  E as E2,
  o
} from "./chunk-HABQD3Y4.js";
import {
  p,
  w
} from "./chunk-5AJMZDUM.js";
import {
  D,
  E,
  F,
  G,
  L,
  U,
  _
} from "./chunk-CRKFUUKK.js";
import {
  r2 as r
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/views/webgl/WebGLDriverTestModule.js
var t = class {
  constructor() {
    this._result = false;
  }
  dispose() {
    this._program = r(this._program);
  }
  get result() {
    return null != this._program && (this._result = this._test(this._program), this.dispose()), this._result;
  }
};

// node_modules/@arcgis/core/views/webgl/testSVGPremultipliedAlpha.js
var f = class extends t {
  constructor(e2) {
    super(), this._rctx = e2;
    const r2 = "\n    precision highp float;\n\n    attribute vec2 a_pos;\n    varying vec2 v_uv;\n\n    void main() {\n      v_uv = a_pos;\n      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ", t3 = "\n    precision highp float;\n\n    varying vec2 v_uv;\n\n    uniform sampler2D u_texture;\n\n    void main() {\n      gl_FragColor = texture2D(u_texture, v_uv);\n    }\n    ";
    this._program = e2.programCache.acquire(r2, t3, /* @__PURE__ */ new Map([["a_pos", 0]]));
  }
  dispose() {
    super.dispose();
  }
  _test(g) {
    const f2 = this._rctx;
    if (!f2.gl) return g.dispose(), true;
    const l = new p(1);
    l.wrapMode = D.CLAMP_TO_EDGE, l.samplingMode = L.NEAREST;
    const _2 = new x(f2, l), v = E2.createVertex(f2, F.STATIC_DRAW, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), x2 = new o(f2, /* @__PURE__ */ new Map([["a_pos", 0]]), n, /* @__PURE__ */ new Map([["geometry", v]])), h = new p();
    h.samplingMode = L.LINEAR, h.wrapMode = D.CLAMP_TO_EDGE;
    const b = new w(f2, h, w2);
    f2.useProgram(g), f2.bindTexture(b, 0), g.setUniform1i("u_texture", 0);
    const A = f2.getBoundFramebufferObject(), { x: E4, y: T, width: j, height: C } = f2.getViewport();
    f2.bindFramebuffer(_2), f2.setViewport(0, 0, 1, 1), f2.setClearColor(0, 0, 0, 0), f2.setBlendingEnabled(false), f2.clear(_.COLOR), f2.bindVAO(x2), f2.drawArrays(E.TRIANGLE_STRIP, 0, 4);
    const y = new Uint8Array(4);
    return _2.readPixels(0, 0, 1, 1, G.RGBA, U.UNSIGNED_BYTE, y), x2.dispose(), _2.dispose(), b.dispose(), f2.setViewport(E4, T, j, C), f2.bindFramebuffer(A), 255 !== y[0];
  }
};
var w2 = new Image();
w2.src = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A", w2.width = 5, w2.height = 5, w2.decode();

// node_modules/@arcgis/core/views/webgl/capabilities/DisjointTimerQuery.js
var e = class {
  constructor(e2, E4, t3, T, r2, _2, i, u, n2) {
    this.createQuery = e2, this.deleteQuery = E4, this.resultAvailable = t3, this.getResult = T, this.disjoint = r2, this.beginTimeElapsed = _2, this.endTimeElapsed = i, this.createTimestamp = u, this.timestampBits = n2;
  }
};
var E3 = false;
function t2(t3, T) {
  if (T.disjointTimerQuery) return null;
  let r2 = t3.getExtension("EXT_disjoint_timer_query_webgl2");
  return r2 ? new e(() => t3.createQuery(), (e2) => {
    t3.deleteQuery(e2), E3 = false;
  }, (e2) => t3.getQueryParameter(e2, t3.QUERY_RESULT_AVAILABLE), (e2) => t3.getQueryParameter(e2, t3.QUERY_RESULT), () => t3.getParameter(r2.GPU_DISJOINT_EXT), (e2) => {
    E3 || (E3 = true, t3.beginQuery(r2.TIME_ELAPSED_EXT, e2));
  }, () => {
    t3.endQuery(r2.TIME_ELAPSED_EXT), E3 = false;
  }, (e2) => r2.queryCounterEXT(e2, r2.TIMESTAMP_EXT), () => t3.getQuery(r2.TIMESTAMP_EXT, r2.QUERY_COUNTER_BITS_EXT)) : (r2 = t3.getExtension("EXT_disjoint_timer_query"), r2 ? new e(() => r2.createQueryEXT(), (e2) => {
    r2.deleteQueryEXT(e2), E3 = false;
  }, (e2) => r2.getQueryObjectEXT(e2, r2.QUERY_RESULT_AVAILABLE_EXT), (e2) => r2.getQueryObjectEXT(e2, r2.QUERY_RESULT_EXT), () => t3.getParameter(r2.GPU_DISJOINT_EXT), (e2) => {
    E3 || (E3 = true, r2.beginQueryEXT(r2.TIME_ELAPSED_EXT, e2));
  }, () => {
    r2.endQueryEXT(r2.TIME_ELAPSED_EXT), E3 = false;
  }, (e2) => r2.queryCounterEXT(e2, r2.TIMESTAMP_EXT), () => r2.getQueryEXT(r2.TIMESTAMP_EXT, r2.QUERY_COUNTER_BITS_EXT)) : null);
}

export {
  t2 as t,
  t as t2,
  f
};
//# sourceMappingURL=chunk-XFIIM3OH.js.map
