import {
  t
} from "./chunk-HS4XAAAN.js";
import {
  r
} from "./chunk-7QTMSBS3.js";
import {
  L,
  c2 as c,
  u3 as u
} from "./chunk-M6FNW7GP.js";
import {
  n
} from "./chunk-5HI5HAKB.js";

// node_modules/@arcgis/core/core/PerformanceSampler.js
var s = class {
  constructor(s2, t2 = 30) {
    this.name = s2, this._counter = 0, this._samples = new Array(t2);
  }
  push(s2) {
    null != s2 && (this._samples[++this._counter % this._samples.length] = s2);
  }
  set(s2) {
    null != s2 && (this._samples[this._counter % this._samples.length] = s2);
  }
  get median() {
    return this._samples.slice().sort((s2, t2) => s2 - t2)[Math.floor(this._samples.length / 2)];
  }
  get average() {
    return this._samples.reduce((s2, t2) => s2 + t2, 0) / this._samples.length;
  }
  get last() {
    return this._samples[this._counter % this._samples.length];
  }
};

// node_modules/@arcgis/core/core/scheduling.js
var i = class {
  constructor(e) {
    this.phases = e, this.paused = false, this.ticks = -1, this.removed = false;
  }
};
var c2 = class {
  constructor(e) {
    this.callback = e, this.isActive = true;
  }
  remove() {
    this.isActive = false;
  }
};
var m = 0;
var l = 0;
var u2 = { time: n(0), deltaTime: n(0), elapsedFrameTime: n(0), frameDuration: n(0) };
var p = ["prepare", "preRender", "render", "postRender", "update", "finish"];
var f = [];
var h = new r();
var d = class {
  constructor(e) {
    this._task = e;
  }
  remove() {
    this._task.removed = true;
  }
  pause() {
    this._task.paused = true;
  }
  resume() {
    this._task.paused = false, k();
  }
};
function w() {
  null != T && (cancelAnimationFrame(T), T = requestAnimationFrame(D));
}
function k() {
  null == T && (m = performance.now(), T = requestAnimationFrame(D));
}
var v = { frameTasks: h, willDispatch: false, clearFrameTasks: j, dispatch: g, executeFrameTasks: q, reschedule: w };
function A(t2) {
  const n2 = new c2(t2);
  return f.push(n2), v.willDispatch || (v.willDispatch = true, t(g)), n2;
}
function F(e) {
  const t2 = new i(e);
  return h.push(t2), k(), new d(t2);
}
var T = null;
function j(e = false) {
  h.forAll((e2) => {
    e2.removed = true;
  }), e && b();
}
function D() {
  const e = performance.now();
  T = null;
  const t2 = h.some((e2) => !e2.paused && !e2.removed);
  T = t2 ? requestAnimationFrame(D) : null, v.executeFrameTasks(e);
}
function q(e) {
  const t2 = n(e - m);
  m = e;
  const n2 = l > 0 ? l : 1e3 / 60, r2 = Math.max(0, t2 - n2);
  u2.time = e, u2.frameDuration = n(n2 - r2);
  for (let s2 = 0; s2 < p.length; s2++) {
    const n3 = performance.now(), r3 = p[s2];
    h.forAll((n4) => {
      var _a;
      if (n4.paused || n4.removed) return;
      0 === s2 && n4.ticks++;
      n4.phases[r3] && (u2.elapsedFrameTime = n(performance.now() - e), u2.deltaTime = 0 === n4.ticks ? n(0) : t2, (_a = n4.phases[r3]) == null ? void 0 : _a.call(n4, u2));
    }), U[s2].push(performance.now() - n3);
  }
  b(), S.push(performance.now() - e);
}
var _ = new r();
function b() {
  h.forAll((e) => {
    e.removed && _.push(e);
  }), h.removeUnorderedMany(_.data, _.length), _.clear();
}
function g() {
  for (; f.length; ) {
    const e = f.shift();
    e.isActive && e.callback();
  }
  v.willDispatch = false;
}
function y(t2 = 1, n2) {
  const a = L(), i2 = () => {
    c(n2) ? a.reject(u()) : 0 === t2 ? a() : (--t2, t(() => i2()));
  };
  return i2(), a.promise;
}
function M(e) {
  return y(1, e);
}
async function R(e) {
  await M(e), await new Promise((t2) => requestAnimationFrame(() => {
    (e == null ? void 0 : e.aborted) || t2();
  }));
}
var U = p.map((e) => new s(e));
var S = new s("total");

export {
  s,
  A,
  F,
  y,
  M,
  R
};
//# sourceMappingURL=chunk-WCGYJMU3.js.map
