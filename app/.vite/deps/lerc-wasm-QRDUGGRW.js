import {
  o
} from "./chunk-56GFF6UO.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/chunks/lerc-wasm.js
var n;
var e = { exports: {} };
function r() {
  return n || (n = 1, t = e, r2 = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, i2 = function(t2) {
    var n2, e2;
    (t2 = void 0 !== (t2 = t2 || {}) ? t2 : {}).ready = new Promise(function(t3, r3) {
      n2 = t3, e2 = r3;
    });
    var i3 = Object.assign({}, t2), o3 = "object" == typeof window, u = "function" == typeof importScripts;
    "object" == typeof process && "object" == typeof process.versions && process.versions.node;
    var s, a = "";
    function c(n3) {
      return t2.locateFile ? t2.locateFile(n3, a) : a + n3;
    }
    (o3 || u) && (u ? a = self.location.href : "undefined" != typeof document && document.currentScript && (a = document.currentScript.src), r2 && (a = r2), a = 0 !== a.indexOf("blob:") ? a.substr(0, a.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", u && (s = (t3) => {
      var n3 = new XMLHttpRequest();
      return n3.open("GET", t3, false), n3.responseType = "arraybuffer", n3.send(null), new Uint8Array(n3.response);
    })), t2.print || console.log.bind(console);
    var f, l, p = t2.printErr || console.warn.bind(console);
    Object.assign(t2, i3), i3 = null, t2.arguments && t2.arguments, t2.thisProgram && t2.thisProgram, t2.quit && t2.quit, t2.wasmBinary && (f = t2.wasmBinary), t2.noExitRuntime, "object" != typeof WebAssembly && U("no native wasm support detected");
    var h, d, m, _, y, g, v = false, b = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
    function w(t3, n3, e3) {
      for (var r3 = n3 + e3, i4 = n3; t3[i4] && !(i4 >= r3); ) ++i4;
      if (i4 - n3 > 16 && t3.buffer && b) return b.decode(t3.subarray(n3, i4));
      for (var o4 = ""; n3 < i4; ) {
        var u2 = t3[n3++];
        if (128 & u2) {
          var s2 = 63 & t3[n3++];
          if (192 != (224 & u2)) {
            var a2 = 63 & t3[n3++];
            if ((u2 = 224 == (240 & u2) ? (15 & u2) << 12 | s2 << 6 | a2 : (7 & u2) << 18 | s2 << 12 | a2 << 6 | 63 & t3[n3++]) < 65536) o4 += String.fromCharCode(u2);
            else {
              var c2 = u2 - 65536;
              o4 += String.fromCharCode(55296 | c2 >> 10, 56320 | 1023 & c2);
            }
          } else o4 += String.fromCharCode((31 & u2) << 6 | s2);
        } else o4 += String.fromCharCode(u2);
      }
      return o4;
    }
    function A(t3, n3) {
      return t3 ? w(m, t3, n3) : "";
    }
    function R(n3) {
      h = n3, t2.HEAP8 = d = new Int8Array(n3), t2.HEAP16 = new Int16Array(n3), t2.HEAP32 = _ = new Int32Array(n3), t2.HEAPU8 = m = new Uint8Array(n3), t2.HEAPU16 = new Uint16Array(n3), t2.HEAPU32 = y = new Uint32Array(n3), t2.HEAPF32 = new Float32Array(n3), t2.HEAPF64 = new Float64Array(n3);
    }
    t2.INITIAL_MEMORY;
    var S = [], I = [], x = [];
    function P() {
      if (t2.preRun) for ("function" == typeof t2.preRun && (t2.preRun = [t2.preRun]); t2.preRun.length; ) D(t2.preRun.shift());
      N(S);
    }
    function j() {
      N(I);
    }
    function E() {
      if (t2.postRun) for ("function" == typeof t2.postRun && (t2.postRun = [t2.postRun]); t2.postRun.length; ) W(t2.postRun.shift());
      N(x);
    }
    function D(t3) {
      S.unshift(t3);
    }
    function H(t3) {
      I.unshift(t3);
    }
    function W(t3) {
      x.unshift(t3);
    }
    var T = 0, C = null;
    function M(n3) {
      T++, t2.monitorRunDependencies && t2.monitorRunDependencies(T);
    }
    function O(n3) {
      if (T--, t2.monitorRunDependencies && t2.monitorRunDependencies(T), 0 == T && C) {
        var e3 = C;
        C = null, e3();
      }
    }
    function U(n3) {
      t2.onAbort && t2.onAbort(n3), p(n3 = "Aborted(" + n3 + ")"), v = true, n3 += ". Build with -sASSERTIONS for more info.";
      var r3 = new WebAssembly.RuntimeError(n3);
      throw e2(r3), r3;
    }
    var B, k = "data:application/octet-stream;base64,";
    function F(t3) {
      return t3.startsWith(k);
    }
    function q(t3) {
      try {
        if (t3 == B && f) return new Uint8Array(f);
        if (s) return s(t3);
        throw "both async and sync fetching of the wasm failed";
      } catch (p2) {
        U(p2);
      }
    }
    function z() {
      return f || !o3 && !u || "function" != typeof fetch ? Promise.resolve().then(function() {
        return q(B);
      }) : fetch(B, { credentials: "same-origin" }).then(function(t3) {
        if (!t3.ok) throw "failed to load wasm binary file at '" + B + "'";
        return t3.arrayBuffer();
      }).catch(function() {
        return q(B);
      });
    }
    function L() {
      var n3 = { a: et };
      function r3(n4, e3) {
        var r4 = n4.exports;
        t2.asm = r4, R((l = t2.asm.g).buffer), g = t2.asm.m, H(t2.asm.h), O();
      }
      function i4(t3) {
        r3(t3.instance);
      }
      function o4(t3) {
        return z().then(function(t4) {
          return WebAssembly.instantiate(t4, n3);
        }).then(function(t4) {
          return t4;
        }).then(t3, function(t4) {
          p("failed to asynchronously prepare wasm: " + t4), U(t4);
        });
      }
      function u2() {
        return f || "function" != typeof WebAssembly.instantiateStreaming || F(B) || "function" != typeof fetch ? o4(i4) : fetch(B, { credentials: "same-origin" }).then(function(t3) {
          return WebAssembly.instantiateStreaming(t3, n3).then(i4, function(t4) {
            return p("wasm streaming compile failed: " + t4), p("falling back to ArrayBuffer instantiation"), o4(i4);
          });
        });
      }
      if (M(), t2.instantiateWasm) try {
        return t2.instantiateWasm(n3, r3);
      } catch (s2) {
        return p("Module.instantiateWasm callback failed with error: " + s2), false;
      }
      return u2().catch(e2), {};
    }
    function N(n3) {
      for (; n3.length > 0; ) {
        var e3 = n3.shift();
        if ("function" != typeof e3) {
          var r3 = e3.func;
          "number" == typeof r3 ? void 0 === e3.arg ? X(r3)() : X(r3)(e3.arg) : r3(void 0 === e3.arg ? null : e3.arg);
        } else e3(t2);
      }
    }
    F(B = "lerc-wasm.wasm") || (B = c(B));
    var G = [];
    function X(t3) {
      var n3 = G[t3];
      return n3 || (t3 >= G.length && (G.length = t3 + 1), G[t3] = n3 = g.get(t3)), n3;
    }
    function Y(t3, n3, e3, r3) {
      U("Assertion failed: " + A(t3) + ", at: " + [n3 ? A(n3) : "unknown filename", e3, r3 ? A(r3) : "unknown function"]);
    }
    function J(t3) {
      return rt(t3 + 24) + 24;
    }
    function K(t3) {
      this.excPtr = t3, this.ptr = t3 - 24, this.set_type = function(t4) {
        y[this.ptr + 4 >> 2] = t4;
      }, this.get_type = function() {
        return y[this.ptr + 4 >> 2];
      }, this.set_destructor = function(t4) {
        y[this.ptr + 8 >> 2] = t4;
      }, this.get_destructor = function() {
        return y[this.ptr + 8 >> 2];
      }, this.set_refcount = function(t4) {
        _[this.ptr >> 2] = t4;
      }, this.set_caught = function(t4) {
        t4 = t4 ? 1 : 0, d[this.ptr + 12 | 0] = t4;
      }, this.get_caught = function() {
        return 0 != d[this.ptr + 12 | 0];
      }, this.set_rethrown = function(t4) {
        t4 = t4 ? 1 : 0, d[this.ptr + 13 | 0] = t4;
      }, this.get_rethrown = function() {
        return 0 != d[this.ptr + 13 | 0];
      }, this.init = function(t4, n3) {
        this.set_adjusted_ptr(0), this.set_type(t4), this.set_destructor(n3), this.set_refcount(0), this.set_caught(false), this.set_rethrown(false);
      }, this.add_ref = function() {
        var t4 = _[this.ptr >> 2];
        _[this.ptr >> 2] = t4 + 1;
      }, this.release_ref = function() {
        var t4 = _[this.ptr >> 2];
        return _[this.ptr >> 2] = t4 - 1, 1 === t4;
      }, this.set_adjusted_ptr = function(t4) {
        y[this.ptr + 16 >> 2] = t4;
      }, this.get_adjusted_ptr = function() {
        return y[this.ptr + 16 >> 2];
      }, this.get_exception_ptr = function() {
        if (ot(this.get_type())) return y[this.excPtr >> 2];
        var t4 = this.get_adjusted_ptr();
        return 0 !== t4 ? t4 : this.excPtr;
      };
    }
    function Q(t3, n3, e3) {
      throw new K(t3).init(n3, e3), t3;
    }
    function V() {
      U("");
    }
    function Z(t3, n3, e3) {
      m.copyWithin(t3, n3, n3 + e3);
    }
    function $() {
      return 2147483648;
    }
    function tt(t3) {
      try {
        return l.grow(t3 - h.byteLength + 65535 >>> 16), R(l.buffer), 1;
      } catch (n3) {
      }
    }
    function nt(t3) {
      var n3 = m.length;
      t3 >>>= 0;
      var e3 = $();
      if (t3 > e3) return false;
      let r3 = (t4, n4) => t4 + (n4 - t4 % n4) % n4;
      for (var i4 = 1; i4 <= 4; i4 *= 2) {
        var o4 = n3 * (1 + 0.2 / i4);
        if (o4 = Math.min(o4, t3 + 100663296), tt(Math.min(e3, r3(Math.max(t3, o4), 65536)))) return true;
      }
      return false;
    }
    var et = { a: Y, c: J, b: Q, d: V, f: Z, e: nt };
    L(), t2.___wasm_call_ctors = function() {
      return (t2.___wasm_call_ctors = t2.asm.h).apply(null, arguments);
    }, t2._lerc_getBlobInfo = function() {
      return (t2._lerc_getBlobInfo = t2.asm.i).apply(null, arguments);
    }, t2._lerc_getDataRanges = function() {
      return (t2._lerc_getDataRanges = t2.asm.j).apply(null, arguments);
    }, t2._lerc_decode = function() {
      return (t2._lerc_decode = t2.asm.k).apply(null, arguments);
    }, t2._lerc_decode_4D = function() {
      return (t2._lerc_decode_4D = t2.asm.l).apply(null, arguments);
    };
    var rt = t2._malloc = function() {
      return (rt = t2._malloc = t2.asm.n).apply(null, arguments);
    };
    t2._free = function() {
      return (t2._free = t2.asm.o).apply(null, arguments);
    };
    var it, ot = t2.___cxa_is_pointer_type = function() {
      return (ot = t2.___cxa_is_pointer_type = t2.asm.p).apply(null, arguments);
    };
    function ut(e3) {
      function r3() {
        it || (it = true, t2.calledRun = true, v || (j(), n2(t2), t2.onRuntimeInitialized && t2.onRuntimeInitialized(), E()));
      }
      T > 0 || (P(), T > 0 || (t2.setStatus ? (t2.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          t2.setStatus("");
        }, 1), r3();
      }, 1)) : r3()));
    }
    if (C = function t3() {
      it || ut(), it || (C = t3);
    }, t2.run = ut, t2.preInit) for ("function" == typeof t2.preInit && (t2.preInit = [t2.preInit]); t2.preInit.length > 0; ) t2.preInit.pop()();
    return ut(), t2.ready;
  }, t.exports = i2), e.exports;
  var t, r2, i2;
}
var i = o(r());
var o2 = Object.freeze(Object.defineProperty({ __proto__: null, default: i }, Symbol.toStringTag, { value: "Module" }));
export {
  o2 as l
};
//# sourceMappingURL=lerc-wasm-QRDUGGRW.js.map
