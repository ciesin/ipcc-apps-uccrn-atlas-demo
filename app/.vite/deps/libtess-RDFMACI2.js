import {
  o
} from "./chunk-56GFF6UO.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/chunks/libtess.js
function n(t, n2) {
  for (var e2 = 0; e2 < n2.length; e2++) {
    const r2 = n2[e2];
    if ("string" != typeof r2 && !Array.isArray(r2)) {
      for (const n3 in r2) if ("default" !== n3 && !(n3 in t)) {
        const e3 = Object.getOwnPropertyDescriptor(r2, n3);
        e3 && Object.defineProperty(t, n3, e3.get ? e3 : { enumerable: true, get: () => r2[n3] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var e;
var r = { exports: {} };
function o2() {
  return e || (e = 1, t = r, n2 = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, o3 = function(t2 = {}) {
    var e2, r2, o4 = t2;
    o4.ready = new Promise((t3, n3) => {
      e2 = t3, r2 = n3;
    });
    var i2 = Object.assign({}, o4), a2 = "object" == typeof window, u = "function" == typeof importScripts;
    "object" == typeof process && "object" == typeof process.versions && process.versions.node;
    var f, c = "";
    function s(t3) {
      return o4.locateFile ? o4.locateFile(t3, c) : c + t3;
    }
    (a2 || u) && (u ? c = self.location.href : "undefined" != typeof document && document.currentScript && (c = document.currentScript.src), n2 && (c = n2), c = 0 !== c.indexOf("blob:") ? c.substr(0, c.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", u && (f = (t3) => {
      var n3 = new XMLHttpRequest();
      return n3.open("GET", t3, false), n3.responseType = "arraybuffer", n3.send(null), new Uint8Array(n3.response);
    }));
    var l, p, h = o4.print || console.log.bind(console), m = o4.printErr || console.error.bind(console);
    Object.assign(o4, i2), i2 = null, o4.arguments && o4.arguments, o4.thisProgram && o4.thisProgram, o4.quit && o4.quit, o4.wasmBinary && (l = o4.wasmBinary), "object" != typeof WebAssembly && O("no native wasm support detected");
    var y, d, v = false;
    function g() {
      var t3 = p.buffer;
      o4.HEAP8 = new Int8Array(t3), o4.HEAP16 = new Int16Array(t3), o4.HEAPU8 = y = new Uint8Array(t3), o4.HEAPU16 = new Uint16Array(t3), o4.HEAP32 = new Int32Array(t3), o4.HEAPU32 = d = new Uint32Array(t3), o4.HEAPF32 = new Float32Array(t3), o4.HEAPF64 = new Float64Array(t3);
    }
    var b = [], w = [], A = [];
    function E() {
      if (o4.preRun) for ("function" == typeof o4.preRun && (o4.preRun = [o4.preRun]); o4.preRun.length; ) S(o4.preRun.shift());
      q(b);
    }
    function R() {
      q(w);
    }
    function P() {
      if (o4.postRun) for ("function" == typeof o4.postRun && (o4.postRun = [o4.postRun]); o4.postRun.length; ) H(o4.postRun.shift());
      q(A);
    }
    function S(t3) {
      b.unshift(t3);
    }
    function _(t3) {
      w.unshift(t3);
    }
    function H(t3) {
      A.unshift(t3);
    }
    var j = 0, I = null;
    function x(t3) {
      var _a;
      j++, (_a = o4.monitorRunDependencies) == null ? void 0 : _a.call(o4, j);
    }
    function T(t3) {
      var _a;
      if (j--, (_a = o4.monitorRunDependencies) == null ? void 0 : _a.call(o4, j), 0 == j && I) {
        var n3 = I;
        I = null, n3();
      }
    }
    function O(t3) {
      var _a;
      (_a = o4.onAbort) == null ? void 0 : _a.call(o4, t3), m(t3 = "Aborted(" + t3 + ")"), v = true, t3 += ". Build with -sASSERTIONS for more info.";
      var n3 = new WebAssembly.RuntimeError(t3);
      throw r2(n3), n3;
    }
    var W, C = "data:application/octet-stream;base64,", F = (t3) => t3.startsWith(C);
    function M(t3) {
      if (t3 == W && l) return new Uint8Array(l);
      if (f) return f(t3);
      throw "both async and sync fetching of the wasm failed";
    }
    function U(t3) {
      return l || !a2 && !u || "function" != typeof fetch ? Promise.resolve().then(() => M(t3)) : fetch(t3, { credentials: "same-origin" }).then((n3) => {
        if (!n3.ok) throw "failed to load wasm binary file at '" + t3 + "'";
        return n3.arrayBuffer();
      }).catch(() => M(t3));
    }
    function B(t3, n3, e3) {
      return U(t3).then((t4) => WebAssembly.instantiate(t4, n3)).then((t4) => t4).then(e3, (t4) => {
        m(`failed to asynchronously prepare wasm: ${t4}`), O(t4);
      });
    }
    function D(t3, n3, e3, r3) {
      return t3 || "function" != typeof WebAssembly.instantiateStreaming || F(n3) || "function" != typeof fetch ? B(n3, e3, r3) : fetch(n3, { credentials: "same-origin" }).then((t4) => WebAssembly.instantiateStreaming(t4, e3).then(r3, function(t5) {
        return m(`wasm streaming compile failed: ${t5}`), m("falling back to ArrayBuffer instantiation"), B(n3, e3, r3);
      }));
    }
    function k() {
      var t3 = { a: tt };
      function n3(t4, n4) {
        return nt = t4.exports, p = nt.i, g(), L = nt.m, _(nt.j), T(), nt;
      }
      function e3(t4) {
        n3(t4.instance);
      }
      if (x(), o4.instantiateWasm) try {
        return o4.instantiateWasm(t3, n3);
      } catch (i3) {
        m(`Module.instantiateWasm callback failed with error: ${i3}`), r2(i3);
      }
      return D(l, W, t3, e3).catch(r2), {};
    }
    F(W = "libtess.wasm") || (W = s(W));
    var q = (t3) => {
      for (; t3.length > 0; ) t3.shift()(o4);
    };
    o4.noExitRuntime;
    var L, z = () => {
      throw 1 / 0;
    }, N = (t3, n3, e3) => y.copyWithin(t3, n3, n3 + e3), $ = () => 2147483648, Y = (t3) => {
      var n3 = (t3 - p.buffer.byteLength + 65535) / 65536;
      try {
        return p.grow(n3), g(), 1;
      } catch (e3) {
      }
    }, G = (t3) => {
      var n3 = y.length;
      t3 >>>= 0;
      var e3 = $();
      if (t3 > e3) return false;
      for (var r3 = (t4, n4) => t4 + (n4 - t4 % n4) % n4, o5 = 1; o5 <= 4; o5 *= 2) {
        var i3 = n3 * (1 + 0.2 / o5);
        i3 = Math.min(i3, t3 + 100663296);
        var a3 = Math.min(e3, r3(Math.max(t3, i3), 65536));
        if (Y(a3)) return true;
      }
      return false;
    }, X = [null, [], []], J = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, K = (t3, n3, e3) => {
      for (var r3 = n3 + e3, o5 = n3; t3[o5] && !(o5 >= r3); ) ++o5;
      if (o5 - n3 > 16 && t3.buffer && J) return J.decode(t3.subarray(n3, o5));
      for (var i3 = ""; n3 < o5; ) {
        var a3 = t3[n3++];
        if (128 & a3) {
          var u2 = 63 & t3[n3++];
          if (192 != (224 & a3)) {
            var f2 = 63 & t3[n3++];
            if ((a3 = 224 == (240 & a3) ? (15 & a3) << 12 | u2 << 6 | f2 : (7 & a3) << 18 | u2 << 12 | f2 << 6 | 63 & t3[n3++]) < 65536) i3 += String.fromCharCode(a3);
            else {
              var c2 = a3 - 65536;
              i3 += String.fromCharCode(55296 | c2 >> 10, 56320 | 1023 & c2);
            }
          } else i3 += String.fromCharCode((31 & a3) << 6 | u2);
        } else i3 += String.fromCharCode(a3);
      }
      return i3;
    }, Q = (t3, n3) => {
      var e3 = X[t3];
      0 === n3 || 10 === n3 ? ((1 === t3 ? h : m)(K(e3, 0)), e3.length = 0) : e3.push(n3);
    }, V = [], Z = (t3) => {
      var n3 = V[t3];
      return n3 || (t3 >= V.length && (V.length = t3 + 1), V[t3] = n3 = L.get(t3)), n3;
    }, tt = { e: z, g: N, f: G, c: (t3, n3, e3, r3) => {
      for (var o5 = 0, i3 = 0; i3 < e3; i3++) {
        var a3 = d[n3 >> 2], u2 = d[n3 + 4 >> 2];
        n3 += 8;
        for (var f2 = 0; f2 < u2; f2++) Q(t3, y[a3 + f2]);
        o5 += u2;
      }
      return d[r3 >> 2] = o5, 0;
    }, b: ft, h: ct, d: ut, a: at }, nt = k();
    o4._malloc = (t3) => (o4._malloc = nt.k)(t3), o4._free = (t3) => (o4._free = nt.l)(t3), o4._triangulate = (t3, n3, e3, r3, i3, a3) => (o4._triangulate = nt.n)(t3, n3, e3, r3, i3, a3);
    var et, rt = (t3, n3) => (rt = nt.o)(t3, n3), ot = () => (ot = nt.p)(), it = (t3) => (it = nt.q)(t3);
    function at(t3, n3, e3) {
      var r3 = ot();
      try {
        Z(t3)(n3, e3);
      } catch (o5) {
        if (it(r3), o5 !== o5 + 0) throw o5;
        rt(1, 0);
      }
    }
    function ut(t3, n3) {
      var e3 = ot();
      try {
        Z(t3)(n3);
      } catch (r3) {
        if (it(e3), r3 !== r3 + 0) throw r3;
        rt(1, 0);
      }
    }
    function ft(t3, n3) {
      var e3 = ot();
      try {
        return Z(t3)(n3);
      } catch (r3) {
        if (it(e3), r3 !== r3 + 0) throw r3;
        rt(1, 0);
      }
    }
    function ct(t3, n3, e3, r3) {
      var o5 = ot();
      try {
        return Z(t3)(n3, e3, r3);
      } catch (i3) {
        if (it(o5), i3 !== i3 + 0) throw i3;
        rt(1, 0);
      }
    }
    function st() {
      function t3() {
        et || (et = true, o4.calledRun = true, v || (R(), e2(o4), o4.onRuntimeInitialized && o4.onRuntimeInitialized(), P()));
      }
      j > 0 || (E(), j > 0 || (o4.setStatus ? (o4.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          o4.setStatus("");
        }, 1), t3();
      }, 1)) : t3()));
    }
    if (I = function t3() {
      et || st(), et || (I = t3);
    }, o4.preInit) for ("function" == typeof o4.preInit && (o4.preInit = [o4.preInit]); o4.preInit.length > 0; ) o4.preInit.pop()();
    st();
    let lt = null, pt = null, ht = null, mt = null;
    const yt = 2, dt = 4e3;
    let vt = 0;
    const gt = (t3, n3, e3) => {
      lt || (lt = o4._triangulate);
      let r3 = o4.HEAPF32;
      const i3 = o4.HEAP32.BYTES_PER_ELEMENT, a3 = 2, u2 = r3.BYTES_PER_ELEMENT;
      e3 > vt && (vt = e3, ht && (o4._free(ht), ht = 0), pt && (o4._free(pt), pt = 0)), ht || (ht = o4._malloc(e3 * u2)), mt || (mt = o4._malloc(dt * i3));
      const f2 = e3 * yt;
      pt || (pt = o4._malloc(f2 * u2)), r3 = o4.HEAPF32, r3.set(t3, ht / u2), o4.HEAP32.set(n3, mt / i3);
      const c2 = f2 / a3, s2 = lt(ht, mt, Math.min(n3.length, dt), a3, pt, c2), l2 = s2 * a3;
      r3 = o4.HEAPF32;
      const p2 = r3.slice(pt / u2, pt / u2 + l2), h2 = {};
      return h2.buffer = p2, h2.vertexCount = s2, h2;
    };
    return o4.triangulate = gt, t2.ready;
  }, t.exports = o3), r.exports;
  var t, n2, o3;
}
var i = o2();
var a = n({ __proto__: null, default: o(i) }, [i]);
export {
  a as l
};
//# sourceMappingURL=libtess-RDFMACI2.js.map
