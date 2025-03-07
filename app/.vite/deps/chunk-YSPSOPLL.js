import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  d as d2
} from "./chunk-ACGZOBZ6.js";
import {
  w
} from "./chunk-RYSF6YCR.js";
import {
  c2 as c,
  d,
  e,
  i,
  l2 as l,
  m,
  n2 as n,
  o4 as o,
  t,
  u3 as u
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/core/reactiveUtils.js
function d3(n2, e2, t2 = {}) {
  return y(n2, e2, t2, L);
}
function p(n2, e2, t2 = {}) {
  return y(n2, e2, t2, M);
}
function y(n2, e2, t2 = {}, o2) {
  let r = null;
  const s = t2.once ? (n3, t3) => {
    o2(n3) && (l(r), e2(n3, t3));
  } : (n3, t3) => {
    o2(n3) && e2(n3, t3);
  };
  if (r = w(n2, s, t2.sync, t2.equals), t2.initial) {
    const e3 = n2();
    s(e3, e3);
  }
  return r;
}
function v(n2, e2, r, s = {}) {
  let u2 = null, l2 = null, a = null;
  function f() {
    var _a;
    u2 && l2 && (l2.remove(), (_a = s.onListenerRemove) == null ? void 0 : _a.call(s, u2), u2 = null, l2 = null);
  }
  function m2(n3) {
    s.once && s.once && l(a), r(n3);
  }
  const p2 = d3(n2, (n3, r2) => {
    var _a;
    f(), n(n3) && (u2 = n3, l2 = o(n3, e2, m2), (_a = s.onListenerAdd) == null ? void 0 : _a.call(s, n3));
  }, { sync: s.sync, initial: true });
  return a = e(() => {
    p2.remove(), f();
  }), a;
}
function w2(n2, e2) {
  return h(n2, M, e2);
}
function h(n2, e2, t2) {
  if (c(t2)) return Promise.reject(u());
  const o2 = n2();
  if (e2 == null ? void 0 : e2(o2)) return Promise.resolve(o2);
  let s = null;
  function i3() {
    s = l(s);
  }
  return new Promise((o3, c2) => {
    s = t([m(t2, () => {
      i3(), c2(u());
    }), y(n2, (n3) => {
      i3(), o3(n3);
    }, { sync: false, once: true }, e2 ?? L)]);
  });
}
function L(n2) {
  return true;
}
function M(n2) {
  return !!n2;
}
function U(n2, e2, t2 = {}) {
  let o2 = false;
  const r = d3(n2, (n3, t3) => {
    o2 || e2(n3, t3);
  }, t2);
  return { remove() {
    r.remove();
  }, pause() {
    o2 = true;
  }, resume() {
    o2 = false;
  } };
}
function g(n2, t2) {
  const o2 = new V(), r = v(n2, "after-splice", ({ added: n3, start: e2, deleteCount: r2 }) => {
    const s = o2.splice(e2, r2);
    for (const t3 of s) t3.remove();
    if (n3 == null ? void 0 : n3.length) {
      const r3 = n3.map(t2);
      o2.addMany(r3, e2);
    }
  }, { sync: true, onListenerRemove: () => o2.drain((n3) => n3.remove()), onListenerAdd: (n3) => o2.addMany(n3.items.map(t2)) });
  return o2.addHandles(r), o2;
}
function x(t2, o2) {
  const r = new V(), i3 = g(t2, (e2) => d2(async (n2) => {
    const t3 = await o2(e2, n2);
    if (c(n2)) throw t3.remove(), u();
    return t3;
  })), c2 = () => null, a = async (n2) => {
    const e2 = await n2.promise, t3 = i3.indexOf(n2);
    t3 < 0 || r.splice(t3, 1, e2);
  };
  r.addMany(i3.items.map(c2));
  for (const n2 of i3) d(a(n2));
  const m2 = i3.on("after-splice", ({ added: n2, start: e2, deleteCount: t3 }) => {
    const o3 = r.splice(e2, t3);
    for (const r2 of o3) r2 == null ? void 0 : r2.remove();
    if (n2 == null ? void 0 : n2.length) {
      r.addMany(n2.map(c2), e2);
      for (const e3 of n2) d(a(e3));
    }
  });
  return r.addHandles([i(i3), m2]), r;
}
var C = { sync: true };
var P = { initial: true };
var A = { sync: true, initial: true };

export {
  d3 as d,
  p,
  v,
  w2 as w,
  U,
  x,
  C,
  P,
  A
};
//# sourceMappingURL=chunk-YSPSOPLL.js.map
