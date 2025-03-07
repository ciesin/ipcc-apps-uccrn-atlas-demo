import {
  o
} from "./chunk-56GFF6UO.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/chunks/lclayout.js
var e;
var t = { exports: {} };
function n() {
  var _a;
  return e || (e = 1, r = t, n2 = "undefined" != typeof document ? (_a = document.currentScript) == null ? void 0 : _a.src : void 0, a2 = function(r2 = {}) {
    var e2, t2, a3 = Object.assign({}, r2), o3 = new Promise((r3, n3) => {
      e2 = r3, t2 = n3;
    }), i = true, u = Object.assign({}, a3), s = "./this.program", l = "";
    function c(r3) {
      return a3.locateFile ? a3.locateFile(r3, l) : l + r3;
    }
    "undefined" != typeof document && document.currentScript && (l = document.currentScript.src), n2 && (l = n2), l = l.startsWith("blob:") ? "" : l.substr(0, l.replace(/[?#].*/, "").lastIndexOf("/") + 1), a3.print || console.log.bind(console);
    var f, d, h = a3.printErr || console.error.bind(console);
    Object.assign(a3, u), u = null, a3.arguments && a3.arguments, a3.thisProgram && (s = a3.thisProgram), a3.quit && a3.quit, a3.wasmBinary && (f = a3.wasmBinary);
    var m, v, p, y, g, w, _, b, A = false;
    function T() {
      var r3 = d.buffer;
      a3.HEAP8 = m = new Int8Array(r3), a3.HEAP16 = p = new Int16Array(r3), a3.HEAPU8 = v = new Uint8Array(r3), a3.HEAPU16 = y = new Uint16Array(r3), a3.HEAP32 = g = new Int32Array(r3), a3.HEAPU32 = w = new Uint32Array(r3), a3.HEAPF32 = _ = new Float32Array(r3), a3.HEAPF64 = b = new Float64Array(r3);
    }
    var C = [], F = [], P = [];
    function W() {
      if (a3.preRun) for ("function" == typeof a3.preRun && (a3.preRun = [a3.preRun]); a3.preRun.length; ) O(a3.preRun.shift());
      G(C);
    }
    function E() {
      G(F);
    }
    function S() {
      if (a3.postRun) for ("function" == typeof a3.postRun && (a3.postRun = [a3.postRun]); a3.postRun.length; ) j(a3.postRun.shift());
      G(P);
    }
    function O(r3) {
      C.unshift(r3);
    }
    function $(r3) {
      F.unshift(r3);
    }
    function j(r3) {
      P.unshift(r3);
    }
    var M = 0, D = null;
    function R(r3) {
      var _a2;
      M++, (_a2 = a3.monitorRunDependencies) == null ? void 0 : _a2.call(a3, M);
    }
    function x(r3) {
      var _a2;
      if (M--, (_a2 = a3.monitorRunDependencies) == null ? void 0 : _a2.call(a3, M), 0 == M && D) {
        var e3 = D;
        D = null, e3();
      }
    }
    function k(r3) {
      var _a2;
      (_a2 = a3.onAbort) == null ? void 0 : _a2.call(a3, r3), h(r3 = "Aborted(" + r3 + ")"), A = true, r3 += ". Build with -sASSERTIONS for more info.";
      var e3 = new WebAssembly.RuntimeError(r3);
      throw t2(e3), e3;
    }
    var H, I = "data:application/octet-stream;base64,", V = (r3) => r3.startsWith(I);
    function U(r3) {
      if (r3 == H && f) return new Uint8Array(f);
      throw "both async and sync fetching of the wasm failed";
    }
    function Y(r3) {
      return !f && i && "function" == typeof fetch ? fetch(r3, { credentials: "same-origin" }).then((e3) => {
        if (!e3.ok) throw `failed to load wasm binary file at '${r3}'`;
        return e3.arrayBuffer();
      }).catch(() => U(r3)) : Promise.resolve().then(() => U(r3));
    }
    function B(r3, e3, t3) {
      return Y(r3).then((r4) => WebAssembly.instantiate(r4, e3)).then(t3, (r4) => {
        h(`failed to asynchronously prepare wasm: ${r4}`), k(r4);
      });
    }
    function z(r3, e3, t3, n3) {
      return r3 || "function" != typeof WebAssembly.instantiateStreaming || V(e3) || "function" != typeof fetch ? B(e3, t3, n3) : fetch(e3, { credentials: "same-origin" }).then((r4) => WebAssembly.instantiateStreaming(r4, t3).then(n3, function(r5) {
        return h(`wasm streaming compile failed: ${r5}`), h("falling back to ArrayBuffer instantiation"), B(e3, t3, n3);
      }));
    }
    function N() {
      return { a: st };
    }
    function q() {
      var r3 = N();
      function e3(r4, e4) {
        return lt = r4.exports, d = lt.N, T(), kr = lt.Q, $(lt.O), x(), lt;
      }
      function n3(r4) {
        e3(r4.instance);
      }
      if (R(), a3.instantiateWasm) try {
        return a3.instantiateWasm(r3, e3);
      } catch (o4) {
        h(`Module.instantiateWasm callback failed with error: ${o4}`), t2(o4);
      }
      return z(f, H, r3, n3).catch(t2), {};
    }
    V(H = "lclayout.wasm") || (H = c(H));
    var G = (r3) => {
      for (; r3.length > 0; ) r3.shift()(a3);
    };
    a3.noExitRuntime;
    class J {
      constructor(r3) {
        this.excPtr = r3, this.ptr = r3 - 24;
      }
      set_type(r3) {
        w[this.ptr + 4 >> 2] = r3;
      }
      get_type() {
        return w[this.ptr + 4 >> 2];
      }
      set_destructor(r3) {
        w[this.ptr + 8 >> 2] = r3;
      }
      get_destructor() {
        return w[this.ptr + 8 >> 2];
      }
      set_caught(r3) {
        r3 = r3 ? 1 : 0, m[this.ptr + 12] = r3;
      }
      get_caught() {
        return 0 != m[this.ptr + 12];
      }
      set_rethrown(r3) {
        r3 = r3 ? 1 : 0, m[this.ptr + 13] = r3;
      }
      get_rethrown() {
        return 0 != m[this.ptr + 13];
      }
      init(r3, e3) {
        this.set_adjusted_ptr(0), this.set_type(r3), this.set_destructor(e3);
      }
      set_adjusted_ptr(r3) {
        w[this.ptr + 16 >> 2] = r3;
      }
      get_adjusted_ptr() {
        return w[this.ptr + 16 >> 2];
      }
      get_exception_ptr() {
        if (ht(this.get_type())) return w[this.excPtr >> 2];
        var r3 = this.get_adjusted_ptr();
        return 0 !== r3 ? r3 : this.excPtr;
      }
    }
    var L = (r3, e3, t3) => {
      throw new J(r3).init(e3, t3), r3;
    }, X = {}, K = (r3) => {
      for (; r3.length; ) {
        var e3 = r3.pop();
        r3.pop()(e3);
      }
    };
    function Q(r3) {
      return this.fromWireType(w[r3 >> 2]);
    }
    var Z, rr, er, tr = {}, nr = {}, ar = {}, or = (r3) => {
      throw new Z(r3);
    }, ir = (r3, e3, t3) => {
      function n3(e4) {
        var n4 = t3(e4);
        n4.length !== r3.length && or("Mismatched type converter count");
        for (var a5 = 0; a5 < r3.length; ++a5) hr(r3[a5], n4[a5]);
      }
      r3.forEach(function(r4) {
        ar[r4] = e3;
      });
      var a4 = new Array(e3.length), o4 = [], i2 = 0;
      e3.forEach((r4, e4) => {
        nr.hasOwnProperty(r4) ? a4[e4] = nr[r4] : (o4.push(r4), tr.hasOwnProperty(r4) || (tr[r4] = []), tr[r4].push(() => {
          a4[e4] = nr[r4], ++i2 === o4.length && n3(a4);
        }));
      }), 0 === o4.length && n3(a4);
    }, ur = (r3) => {
      var e3 = X[r3];
      delete X[r3];
      var t3 = e3.rawConstructor, n3 = e3.rawDestructor, a4 = e3.fields, o4 = a4.map((r4) => r4.getterReturnType).concat(a4.map((r4) => r4.setterArgumentType));
      ir([r3], o4, (r4) => {
        var o5 = {};
        return a4.forEach((e4, t4) => {
          var n4 = e4.fieldName, i2 = r4[t4], u2 = e4.getter, s2 = e4.getterContext, l2 = r4[t4 + a4.length], c2 = e4.setter, f2 = e4.setterContext;
          o5[n4] = { read: (r5) => i2.fromWireType(u2(s2, r5)), write: (r5, e5) => {
            var t5 = [];
            c2(f2, r5, l2.toWireType(t5, e5)), K(t5);
          } };
        }), [{ name: e3.name, fromWireType: (r5) => {
          var e4 = {};
          for (var t4 in o5) e4[t4] = o5[t4].read(r5);
          return n3(r5), e4;
        }, toWireType: (r5, e4) => {
          for (var a5 in o5) if (!(a5 in e4)) throw new TypeError(`Missing field: "${a5}"`);
          var i2 = t3();
          for (a5 in o5) o5[a5].write(i2, e4[a5]);
          return null !== r5 && r5.push(n3, i2), i2;
        }, argPackAdvance: mr, readValueFromPointer: Q, destructorFunction: n3 }];
      });
    }, sr = (r3, e3, t3, n3, a4) => {
    }, lr = () => {
      for (var r3 = new Array(256), e3 = 0; e3 < 256; ++e3) r3[e3] = String.fromCharCode(e3);
      rr = r3;
    }, cr = (r3) => {
      for (var e3 = "", t3 = r3; v[t3]; ) e3 += rr[v[t3++]];
      return e3;
    }, fr = (r3) => {
      throw new er(r3);
    };
    function dr(r3, e3, t3 = {}) {
      var n3 = e3.name;
      if (r3 || fr(`type "${n3}" must have a positive integer typeid pointer`), nr.hasOwnProperty(r3)) {
        if (t3.ignoreDuplicateRegistrations) return;
        fr(`Cannot register type '${n3}' twice`);
      }
      if (nr[r3] = e3, delete ar[r3], tr.hasOwnProperty(r3)) {
        var a4 = tr[r3];
        delete tr[r3], a4.forEach((r4) => r4());
      }
    }
    function hr(r3, e3, t3 = {}) {
      if (!("argPackAdvance" in e3)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      return dr(r3, e3, t3);
    }
    var mr = 8, vr = (r3, e3, t3, n3) => {
      hr(r3, { name: e3 = cr(e3), fromWireType: function(r4) {
        return !!r4;
      }, toWireType: function(r4, e4) {
        return e4 ? t3 : n3;
      }, argPackAdvance: mr, readValueFromPointer: function(r4) {
        return this.fromWireType(v[r4]);
      }, destructorFunction: null });
    }, pr = (r3, e3, t3) => {
      r3 = cr(r3), ir([], [e3], (e4) => (e4 = e4[0], a3[r3] = e4.fromWireType(t3), []));
    }, yr = [], gr = [], wr = (r3) => {
      r3 > 9 && 0 == --gr[r3 + 1] && (gr[r3] = void 0, yr.push(r3));
    }, _r = () => gr.length / 2 - 5 - yr.length, br = () => {
      gr.push(0, 1, void 0, 1, null, 1, true, 1, false, 1), a3.count_emval_handles = _r;
    }, Ar = { toValue: (r3) => (r3 || fr("Cannot use deleted val. handle = " + r3), gr[r3]), toHandle: (r3) => {
      switch (r3) {
        case void 0:
          return 2;
        case null:
          return 4;
        case true:
          return 6;
        case false:
          return 8;
        default: {
          const e3 = yr.pop() || gr.length;
          return gr[e3] = r3, gr[e3 + 1] = 1, e3;
        }
      }
    } }, Tr = { name: "emscripten::val", fromWireType: (r3) => {
      var e3 = Ar.toValue(r3);
      return wr(r3), e3;
    }, toWireType: (r3, e3) => Ar.toHandle(e3), argPackAdvance: mr, readValueFromPointer: Q, destructorFunction: null }, Cr = (r3) => hr(r3, Tr), Fr = (r3, e3, t3) => {
      if (void 0 === r3[e3].overloadTable) {
        var n3 = r3[e3];
        r3[e3] = function(...n4) {
          return r3[e3].overloadTable.hasOwnProperty(n4.length) || fr(`Function '${t3}' called with an invalid number of arguments (${n4.length}) - expects one of (${r3[e3].overloadTable})!`), r3[e3].overloadTable[n4.length].apply(this, n4);
        }, r3[e3].overloadTable = [], r3[e3].overloadTable[n3.argCount] = n3;
      }
    }, Pr = (r3, e3, t3) => {
      a3.hasOwnProperty(r3) ? ((void 0 === t3 || void 0 !== a3[r3].overloadTable && void 0 !== a3[r3].overloadTable[t3]) && fr(`Cannot register public name '${r3}' twice`), Fr(a3, r3, r3), a3.hasOwnProperty(t3) && fr(`Cannot register multiple overloads of a function with the same number of arguments (${t3})!`), a3[r3].overloadTable[t3] = e3) : (a3[r3] = e3, void 0 !== t3 && (a3[r3].numArguments = t3));
    }, Wr = (r3, e3, t3) => {
      switch (e3) {
        case 1:
          return t3 ? function(r4) {
            return this.fromWireType(m[r4]);
          } : function(r4) {
            return this.fromWireType(v[r4]);
          };
        case 2:
          return t3 ? function(r4) {
            return this.fromWireType(p[r4 >> 1]);
          } : function(r4) {
            return this.fromWireType(y[r4 >> 1]);
          };
        case 4:
          return t3 ? function(r4) {
            return this.fromWireType(g[r4 >> 2]);
          } : function(r4) {
            return this.fromWireType(w[r4 >> 2]);
          };
        default:
          throw new TypeError(`invalid integer width (${e3}): ${r3}`);
      }
    }, Er = (r3, e3, t3, n3) => {
      function a4() {
      }
      e3 = cr(e3), a4.values = {}, hr(r3, { name: e3, constructor: a4, fromWireType: function(r4) {
        return this.constructor.values[r4];
      }, toWireType: (r4, e4) => e4.value, argPackAdvance: mr, readValueFromPointer: Wr(e3, t3, n3), destructorFunction: null }), Pr(e3, a4);
    }, Sr = (r3, e3) => Object.defineProperty(e3, "name", { value: r3 }), Or = (r3) => {
      var e3 = ct(r3), t3 = cr(e3);
      return dt(e3), t3;
    }, $r = (r3, e3) => {
      var t3 = nr[r3];
      return void 0 === t3 && fr(`${e3} has unknown type ${Or(r3)}`), t3;
    }, jr = (r3, e3, t3) => {
      var n3 = $r(r3, "enum");
      e3 = cr(e3);
      var a4 = n3.constructor, o4 = Object.create(n3.constructor.prototype, { value: { value: t3 }, constructor: { value: Sr(`${n3.name}_${e3}`, function() {
      }) } });
      a4.values[t3] = o4, a4[e3] = o4;
    }, Mr = (r3, e3) => {
      switch (e3) {
        case 4:
          return function(r4) {
            return this.fromWireType(_[r4 >> 2]);
          };
        case 8:
          return function(r4) {
            return this.fromWireType(b[r4 >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${e3}): ${r3}`);
      }
    }, Dr = (r3, e3, t3) => {
      hr(r3, { name: e3 = cr(e3), fromWireType: (r4) => r4, toWireType: (r4, e4) => e4, argPackAdvance: mr, readValueFromPointer: Mr(e3, t3), destructorFunction: null });
    };
    function Rr(r3) {
      for (var e3 = 1; e3 < r3.length; ++e3) if (null !== r3[e3] && void 0 === r3[e3].destructorFunction) return true;
      return false;
    }
    function xr(r3, e3, t3, n3, a4, o4) {
      var i2 = e3.length;
      i2 < 2 && fr("argTypes array size mismatch! Must at least get return value and 'this' types!"), e3[1];
      var u2 = Rr(e3), s2 = "void" !== e3[0].name, l2 = i2 - 2, c2 = new Array(l2), f2 = [], d2 = [];
      return Sr(r3, function(...t4) {
        var o5;
        t4.length !== l2 && fr(`function ${r3} called with ${t4.length} arguments, expected ${l2}`), d2.length = 0, f2.length = 1, f2[0] = a4;
        for (var i3 = 0; i3 < l2; ++i3) c2[i3] = e3[i3 + 2].toWireType(d2, t4[i3]), f2.push(c2[i3]);
        function h2(r4) {
          if (u2) K(d2);
          else for (var t5 = 2; t5 < e3.length; t5++) {
            var n4 = 1 === t5 ? o5 : c2[t5 - 2];
            null !== e3[t5].destructorFunction && e3[t5].destructorFunction(n4);
          }
          if (s2) return e3[0].fromWireType(r4);
        }
        return h2(n3(...f2));
      });
    }
    var kr, Hr, Ir, Vr = (r3, e3) => {
      for (var t3 = [], n3 = 0; n3 < r3; n3++) t3.push(w[e3 + 4 * n3 >> 2]);
      return t3;
    }, Ur = (r3, e3, t3) => {
      a3.hasOwnProperty(r3) || or("Replacing nonexistent public symbol"), void 0 !== a3[r3].overloadTable && void 0 !== t3 ? a3[r3].overloadTable[t3] = e3 : (a3[r3] = e3, a3[r3].argCount = t3);
    }, Yr = (r3, e3, t3) => (r3 = r3.replace(/p/g, "i"), (0, a3["dynCall_" + r3])(e3, ...t3)), Br = [], zr = (r3) => {
      var e3 = Br[r3];
      return e3 || (r3 >= Br.length && (Br.length = r3 + 1), Br[r3] = e3 = kr.get(r3)), e3;
    }, Nr = (r3, e3, t3 = []) => r3.includes("j") ? Yr(r3, e3, t3) : zr(e3)(...t3), qr = (r3, e3) => (...t3) => Nr(r3, e3, t3), Gr = (r3, e3) => {
      function t3() {
        return r3.includes("j") ? qr(r3, e3) : zr(e3);
      }
      r3 = cr(r3);
      var n3 = t3();
      return "function" != typeof n3 && fr(`unknown function pointer with signature ${r3}: ${e3}`), n3;
    }, Jr = (r3, e3) => {
      var t3 = Sr(e3, function(r4) {
        this.name = e3, this.message = r4;
        var t4 = new Error(r4).stack;
        void 0 !== t4 && (this.stack = this.toString() + "\n" + t4.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return t3.prototype = Object.create(r3.prototype), t3.prototype.constructor = t3, t3.prototype.toString = function() {
        return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
      }, t3;
    }, Lr = (r3, e3) => {
      var t3 = [], n3 = {};
      function a4(r4) {
        n3[r4] || nr[r4] || (ar[r4] ? ar[r4].forEach(a4) : (t3.push(r4), n3[r4] = true));
      }
      throw e3.forEach(a4), new Hr(`${r3}: ` + t3.map(Or).join([", "]));
    }, Xr = (r3) => {
      const e3 = (r3 = r3.trim()).indexOf("(");
      return -1 !== e3 ? r3.substr(0, e3) : r3;
    }, Kr = (r3, e3, t3, n3, a4, o4, i2) => {
      var u2 = Vr(e3, t3);
      r3 = cr(r3), r3 = Xr(r3), a4 = Gr(n3, a4), Pr(r3, function() {
        Lr(`Cannot call ${r3} due to unbound types`, u2);
      }, e3 - 1), ir([], u2, (t4) => {
        var n4 = [t4[0], null].concat(t4.slice(1));
        return Ur(r3, xr(r3, n4, null, a4, o4), e3 - 1), [];
      });
    }, Qr = (r3, e3, t3) => {
      switch (e3) {
        case 1:
          return t3 ? (r4) => m[r4] : (r4) => v[r4];
        case 2:
          return t3 ? (r4) => p[r4 >> 1] : (r4) => y[r4 >> 1];
        case 4:
          return t3 ? (r4) => g[r4 >> 2] : (r4) => w[r4 >> 2];
        default:
          throw new TypeError(`invalid integer width (${e3}): ${r3}`);
      }
    }, Zr = (r3, e3, t3, n3, a4) => {
      e3 = cr(e3);
      var o4 = (r4) => r4;
      if (0 === n3) {
        var i2 = 32 - 8 * t3;
        o4 = (r4) => r4 << i2 >>> i2;
      }
      var u2 = e3.includes("unsigned"), s2 = (r4, e4) => {
      };
      hr(r3, { name: e3, fromWireType: o4, toWireType: u2 ? function(r4, e4) {
        return s2(e4, this.name), e4 >>> 0;
      } : function(r4, e4) {
        return s2(e4, this.name), e4;
      }, argPackAdvance: mr, readValueFromPointer: Qr(e3, t3, 0 !== n3), destructorFunction: null });
    }, re = (r3, e3, t3) => {
      var n3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e3];
      function a4(r4) {
        var e4 = w[r4 >> 2], t4 = w[r4 + 4 >> 2];
        return new n3(m.buffer, t4, e4);
      }
      hr(r3, { name: t3 = cr(t3), fromWireType: a4, argPackAdvance: mr, readValueFromPointer: a4 }, { ignoreDuplicateRegistrations: true });
    }, ee = (r3, e3) => {
      Cr(r3);
    }, te = (r3, e3, t3, n3) => {
      if (!(n3 > 0)) return 0;
      for (var a4 = t3, o4 = t3 + n3 - 1, i2 = 0; i2 < r3.length; ++i2) {
        var u2 = r3.charCodeAt(i2);
        if (u2 >= 55296 && u2 <= 57343 && (u2 = 65536 + ((1023 & u2) << 10) | 1023 & r3.charCodeAt(++i2)), u2 <= 127) {
          if (t3 >= o4) break;
          e3[t3++] = u2;
        } else if (u2 <= 2047) {
          if (t3 + 1 >= o4) break;
          e3[t3++] = 192 | u2 >> 6, e3[t3++] = 128 | 63 & u2;
        } else if (u2 <= 65535) {
          if (t3 + 2 >= o4) break;
          e3[t3++] = 224 | u2 >> 12, e3[t3++] = 128 | u2 >> 6 & 63, e3[t3++] = 128 | 63 & u2;
        } else {
          if (t3 + 3 >= o4) break;
          e3[t3++] = 240 | u2 >> 18, e3[t3++] = 128 | u2 >> 12 & 63, e3[t3++] = 128 | u2 >> 6 & 63, e3[t3++] = 128 | 63 & u2;
        }
      }
      return e3[t3] = 0, t3 - a4;
    }, ne = (r3, e3, t3) => te(r3, v, e3, t3), ae = (r3) => {
      for (var e3 = 0, t3 = 0; t3 < r3.length; ++t3) {
        var n3 = r3.charCodeAt(t3);
        n3 <= 127 ? e3++ : n3 <= 2047 ? e3 += 2 : n3 >= 55296 && n3 <= 57343 ? (e3 += 4, ++t3) : e3 += 3;
      }
      return e3;
    }, oe = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, ie = (r3, e3, t3) => {
      for (var n3 = e3 + t3, a4 = e3; r3[a4] && !(a4 >= n3); ) ++a4;
      if (a4 - e3 > 16 && r3.buffer && oe) return oe.decode(r3.subarray(e3, a4));
      for (var o4 = ""; e3 < a4; ) {
        var i2 = r3[e3++];
        if (128 & i2) {
          var u2 = 63 & r3[e3++];
          if (192 != (224 & i2)) {
            var s2 = 63 & r3[e3++];
            if ((i2 = 224 == (240 & i2) ? (15 & i2) << 12 | u2 << 6 | s2 : (7 & i2) << 18 | u2 << 12 | s2 << 6 | 63 & r3[e3++]) < 65536) o4 += String.fromCharCode(i2);
            else {
              var l2 = i2 - 65536;
              o4 += String.fromCharCode(55296 | l2 >> 10, 56320 | 1023 & l2);
            }
          } else o4 += String.fromCharCode((31 & i2) << 6 | u2);
        } else o4 += String.fromCharCode(i2);
      }
      return o4;
    }, ue = (r3, e3) => r3 ? ie(v, r3, e3) : "", se = (r3, e3) => {
      var t3 = "std::string" === (e3 = cr(e3));
      hr(r3, { name: e3, fromWireType(r4) {
        var e4, n3 = w[r4 >> 2], a4 = r4 + 4;
        if (t3) for (var o4 = a4, i2 = 0; i2 <= n3; ++i2) {
          var u2 = a4 + i2;
          if (i2 == n3 || 0 == v[u2]) {
            var s2 = ue(o4, u2 - o4);
            void 0 === e4 ? e4 = s2 : (e4 += String.fromCharCode(0), e4 += s2), o4 = u2 + 1;
          }
        }
        else {
          var l2 = new Array(n3);
          for (i2 = 0; i2 < n3; ++i2) l2[i2] = String.fromCharCode(v[a4 + i2]);
          e4 = l2.join("");
        }
        return dt(r4), e4;
      }, toWireType(r4, e4) {
        var n3;
        e4 instanceof ArrayBuffer && (e4 = new Uint8Array(e4));
        var a4 = "string" == typeof e4;
        a4 || e4 instanceof Uint8Array || e4 instanceof Uint8ClampedArray || e4 instanceof Int8Array || fr("Cannot pass non-string to std::string"), n3 = t3 && a4 ? ae(e4) : e4.length;
        var o4 = ft(4 + n3 + 1), i2 = o4 + 4;
        if (w[o4 >> 2] = n3, t3 && a4) ne(e4, i2, n3 + 1);
        else if (a4) for (var u2 = 0; u2 < n3; ++u2) {
          var s2 = e4.charCodeAt(u2);
          s2 > 255 && (dt(i2), fr("String has UTF-16 code units that do not fit in 8 bits")), v[i2 + u2] = s2;
        }
        else for (u2 = 0; u2 < n3; ++u2) v[i2 + u2] = e4[u2];
        return null !== r4 && r4.push(dt, o4), o4;
      }, argPackAdvance: mr, readValueFromPointer: Q, destructorFunction(r4) {
        dt(r4);
      } });
    }, le = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, ce = (r3, e3) => {
      for (var t3 = r3, n3 = t3 >> 1, a4 = n3 + e3 / 2; !(n3 >= a4) && y[n3]; ) ++n3;
      if ((t3 = n3 << 1) - r3 > 32 && le) return le.decode(v.subarray(r3, t3));
      for (var o4 = "", i2 = 0; !(i2 >= e3 / 2); ++i2) {
        var u2 = p[r3 + 2 * i2 >> 1];
        if (0 == u2) break;
        o4 += String.fromCharCode(u2);
      }
      return o4;
    }, fe = (r3, e3, t3) => {
      if (t3 ?? (t3 = 2147483647), t3 < 2) return 0;
      for (var n3 = e3, a4 = (t3 -= 2) < 2 * r3.length ? t3 / 2 : r3.length, o4 = 0; o4 < a4; ++o4) {
        var i2 = r3.charCodeAt(o4);
        p[e3 >> 1] = i2, e3 += 2;
      }
      return p[e3 >> 1] = 0, e3 - n3;
    }, de = (r3) => 2 * r3.length, he = (r3, e3) => {
      for (var t3 = 0, n3 = ""; !(t3 >= e3 / 4); ) {
        var a4 = g[r3 + 4 * t3 >> 2];
        if (0 == a4) break;
        if (++t3, a4 >= 65536) {
          var o4 = a4 - 65536;
          n3 += String.fromCharCode(55296 | o4 >> 10, 56320 | 1023 & o4);
        } else n3 += String.fromCharCode(a4);
      }
      return n3;
    }, me = (r3, e3, t3) => {
      if (t3 ?? (t3 = 2147483647), t3 < 4) return 0;
      for (var n3 = e3, a4 = n3 + t3 - 4, o4 = 0; o4 < r3.length; ++o4) {
        var i2 = r3.charCodeAt(o4);
        if (i2 >= 55296 && i2 <= 57343 && (i2 = 65536 + ((1023 & i2) << 10) | 1023 & r3.charCodeAt(++o4)), g[e3 >> 2] = i2, (e3 += 4) + 4 > a4) break;
      }
      return g[e3 >> 2] = 0, e3 - n3;
    }, ve = (r3) => {
      for (var e3 = 0, t3 = 0; t3 < r3.length; ++t3) {
        var n3 = r3.charCodeAt(t3);
        n3 >= 55296 && n3 <= 57343 && ++t3, e3 += 4;
      }
      return e3;
    }, pe = (r3, e3, t3) => {
      var n3, a4, o4, i2;
      t3 = cr(t3), 2 === e3 ? (n3 = ce, a4 = fe, i2 = de, o4 = (r4) => y[r4 >> 1]) : 4 === e3 && (n3 = he, a4 = me, i2 = ve, o4 = (r4) => w[r4 >> 2]), hr(r3, { name: t3, fromWireType: (r4) => {
        for (var t4, a5 = w[r4 >> 2], i3 = r4 + 4, u2 = 0; u2 <= a5; ++u2) {
          var s2 = r4 + 4 + u2 * e3;
          if (u2 == a5 || 0 == o4(s2)) {
            var l2 = n3(i3, s2 - i3);
            void 0 === t4 ? t4 = l2 : (t4 += String.fromCharCode(0), t4 += l2), i3 = s2 + e3;
          }
        }
        return dt(r4), t4;
      }, toWireType: (r4, n4) => {
        "string" != typeof n4 && fr(`Cannot pass non-string to C++ string type ${t3}`);
        var o5 = i2(n4), u2 = ft(4 + o5 + e3);
        return w[u2 >> 2] = o5 / e3, a4(n4, u2 + 4, o5 + e3), null !== r4 && r4.push(dt, u2), u2;
      }, argPackAdvance: mr, readValueFromPointer: Q, destructorFunction(r4) {
        dt(r4);
      } });
    }, ye = (r3, e3, t3, n3, a4, o4) => {
      X[r3] = { name: cr(e3), rawConstructor: Gr(t3, n3), rawDestructor: Gr(a4, o4), fields: [] };
    }, ge = (r3, e3, t3, n3, a4, o4, i2, u2, s2, l2) => {
      X[r3].fields.push({ fieldName: cr(e3), getterReturnType: t3, getter: Gr(n3, a4), getterContext: o4, setterArgumentType: i2, setter: Gr(u2, s2), setterContext: l2 });
    }, we = (r3, e3) => {
      hr(r3, { isVoid: true, name: e3 = cr(e3), argPackAdvance: 0, fromWireType: () => {
      }, toWireType: (r4, e4) => {
      } });
    }, _e = 1, be = () => _e, Ae = (r3, e3, t3) => v.copyWithin(r3, e3, e3 + t3), Te = (r3, e3, t3) => {
      var n3 = [], a4 = r3.toWireType(n3, t3);
      return n3.length && (w[e3 >> 2] = Ar.toHandle(n3)), a4;
    }, Ce = (r3, e3, t3) => (r3 = Ar.toValue(r3), e3 = $r(e3, "emval::as"), Te(e3, t3, r3)), Fe = [], Pe = (r3, e3, t3, n3) => (r3 = Fe[r3])(null, e3 = Ar.toValue(e3), t3, n3), We = {}, Ee = (r3) => {
      var e3 = We[r3];
      return void 0 === e3 ? cr(r3) : e3;
    }, Se = (r3, e3, t3, n3, a4) => (r3 = Fe[r3])(e3 = Ar.toValue(e3), e3[t3 = Ee(t3)], n3, a4), Oe = (r3) => {
      var e3 = Fe.length;
      return Fe.push(r3), e3;
    }, $e = (r3, e3) => {
      for (var t3 = new Array(r3), n3 = 0; n3 < r3; ++n3) t3[n3] = $r(w[e3 + 4 * n3 >> 2], "parameter " + n3);
      return t3;
    }, je = Reflect.construct, Me = (r3, e3, t3) => {
      var n3 = $e(r3, e3), a4 = n3.shift();
      r3--;
      var o4 = new Array(r3), i2 = (e4, i3, u3, s2) => {
        for (var l2 = 0, c2 = 0; c2 < r3; ++c2) o4[c2] = n3[c2].readValueFromPointer(s2 + l2), l2 += n3[c2].argPackAdvance;
        var f2 = 1 === t3 ? je(i3, o4) : i3.apply(e4, o4);
        return Te(a4, u3, f2);
      }, u2 = `methodCaller<(${n3.map((r4) => r4.name).join(", ")}) => ${a4.name}>`;
      return Oe(Sr(u2, i2));
    }, De = (r3, e3) => (r3 = Ar.toValue(r3), e3 = Ar.toValue(e3), Ar.toHandle(r3[e3])), Re = () => Ar.toHandle([]), xe = (r3) => {
      r3 = Ar.toValue(r3);
      for (var e3 = new Array(r3.length), t3 = 0; t3 < r3.length; t3++) e3[t3] = r3[t3];
      return Ar.toHandle(e3);
    }, ke = (r3) => Ar.toHandle(Ee(r3)), He = (r3) => {
      var e3 = Ar.toValue(r3);
      K(e3), wr(r3);
    }, Ie = (r3, e3) => {
      var t3 = (r3 = $r(r3, "_emval_take_value")).readValueFromPointer(e3);
      return Ar.toHandle(t3);
    }, Ve = () => {
      k("");
    }, Ue = () => Date.now(), Ye = () => 2147483648, Be = () => Ye();
    Ir = () => performance.now();
    var ze = (r3) => {
      var e3 = (r3 - d.buffer.byteLength + 65535) / 65536;
      try {
        return d.grow(e3), T(), 1;
      } catch (t3) {
      }
    }, Ne = (r3) => {
      var e3 = v.length;
      r3 >>>= 0;
      var t3 = Ye();
      if (r3 > t3) return false;
      for (var n3 = (r4, e4) => r4 + (e4 - r4 % e4) % e4, a4 = 1; a4 <= 4; a4 *= 2) {
        var o4 = e3 * (1 + 0.2 / a4);
        o4 = Math.min(o4, r3 + 100663296);
        var i2 = Math.min(t3, n3(Math.max(r3, o4), 65536));
        if (ze(i2)) return true;
      }
      return false;
    }, qe = {}, Ge = () => s || "./this.program", Je = () => {
      if (!Je.strings) {
        var r3 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: Ge() };
        for (var e3 in qe) void 0 === qe[e3] ? delete r3[e3] : r3[e3] = qe[e3];
        var t3 = [];
        for (var e3 in r3) t3.push(`${e3}=${r3[e3]}`);
        Je.strings = t3;
      }
      return Je.strings;
    }, Le = (r3, e3) => {
      for (var t3 = 0; t3 < r3.length; ++t3) m[e3++] = r3.charCodeAt(t3);
      m[e3] = 0;
    }, Xe = (r3, e3) => {
      var t3 = 0;
      return Je().forEach((n3, a4) => {
        var o4 = e3 + t3;
        w[r3 + 4 * a4 >> 2] = o4, Le(n3, o4), t3 += n3.length + 1;
      }), 0;
    }, Ke = (r3, e3) => {
      var t3 = Je();
      w[r3 >> 2] = t3.length;
      var n3 = 0;
      return t3.forEach((r4) => n3 += r4.length + 1), w[e3 >> 2] = n3, 0;
    }, Qe = (r3) => r3 % 4 == 0 && (r3 % 100 != 0 || r3 % 400 == 0), Ze = (r3, e3) => {
      for (var t3 = 0, n3 = 0; n3 <= e3; t3 += r3[n3++]) ;
      return t3;
    }, rt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], et = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], tt = (r3, e3) => {
      for (var t3 = new Date(r3.getTime()); e3 > 0; ) {
        var n3 = Qe(t3.getFullYear()), a4 = t3.getMonth(), o4 = (n3 ? rt : et)[a4];
        if (!(e3 > o4 - t3.getDate())) return t3.setDate(t3.getDate() + e3), t3;
        e3 -= o4 - t3.getDate() + 1, t3.setDate(1), a4 < 11 ? t3.setMonth(a4 + 1) : (t3.setMonth(0), t3.setFullYear(t3.getFullYear() + 1));
      }
      return t3;
    };
    function nt(r3, e3, t3) {
      var n3 = ae(r3) + 1, a4 = new Array(n3);
      return te(r3, a4, 0, a4.length), a4;
    }
    var at = (r3, e3) => {
      m.set(r3, e3);
    }, ot = (r3, e3, t3, n3) => {
      var a4 = w[n3 + 40 >> 2], o4 = { tm_sec: g[n3 >> 2], tm_min: g[n3 + 4 >> 2], tm_hour: g[n3 + 8 >> 2], tm_mday: g[n3 + 12 >> 2], tm_mon: g[n3 + 16 >> 2], tm_year: g[n3 + 20 >> 2], tm_wday: g[n3 + 24 >> 2], tm_yday: g[n3 + 28 >> 2], tm_isdst: g[n3 + 32 >> 2], tm_gmtoff: g[n3 + 36 >> 2], tm_zone: a4 ? ue(a4) : "" }, i2 = ue(t3), u2 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
      for (var s2 in u2) i2 = i2.replace(new RegExp(s2, "g"), u2[s2]);
      var l2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], c2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function f2(r4, e4, t4) {
        for (var n4 = "number" == typeof r4 ? r4.toString() : r4 || ""; n4.length < e4; ) n4 = t4[0] + n4;
        return n4;
      }
      function d2(r4, e4) {
        return f2(r4, e4, "0");
      }
      function h2(r4, e4) {
        function t4(r5) {
          return r5 < 0 ? -1 : r5 > 0 ? 1 : 0;
        }
        var n4;
        return 0 === (n4 = t4(r4.getFullYear() - e4.getFullYear())) && 0 === (n4 = t4(r4.getMonth() - e4.getMonth())) && (n4 = t4(r4.getDate() - e4.getDate())), n4;
      }
      function m2(r4) {
        switch (r4.getDay()) {
          case 0:
            return new Date(r4.getFullYear() - 1, 11, 29);
          case 1:
            return r4;
          case 2:
            return new Date(r4.getFullYear(), 0, 3);
          case 3:
            return new Date(r4.getFullYear(), 0, 2);
          case 4:
            return new Date(r4.getFullYear(), 0, 1);
          case 5:
            return new Date(r4.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(r4.getFullYear() - 1, 11, 30);
        }
      }
      function v2(r4) {
        var e4 = tt(new Date(r4.tm_year + 1900, 0, 1), r4.tm_yday), t4 = new Date(e4.getFullYear(), 0, 4), n4 = new Date(e4.getFullYear() + 1, 0, 4), a5 = m2(t4), o5 = m2(n4);
        return h2(a5, e4) <= 0 ? h2(o5, e4) <= 0 ? e4.getFullYear() + 1 : e4.getFullYear() : e4.getFullYear() - 1;
      }
      var p2 = { "%a": (r4) => l2[r4.tm_wday].substring(0, 3), "%A": (r4) => l2[r4.tm_wday], "%b": (r4) => c2[r4.tm_mon].substring(0, 3), "%B": (r4) => c2[r4.tm_mon], "%C": (r4) => d2((r4.tm_year + 1900) / 100 | 0, 2), "%d": (r4) => d2(r4.tm_mday, 2), "%e": (r4) => f2(r4.tm_mday, 2, " "), "%g": (r4) => v2(r4).toString().substring(2), "%G": v2, "%H": (r4) => d2(r4.tm_hour, 2), "%I": (r4) => {
        var e4 = r4.tm_hour;
        return 0 == e4 ? e4 = 12 : e4 > 12 && (e4 -= 12), d2(e4, 2);
      }, "%j": (r4) => d2(r4.tm_mday + Ze(Qe(r4.tm_year + 1900) ? rt : et, r4.tm_mon - 1), 3), "%m": (r4) => d2(r4.tm_mon + 1, 2), "%M": (r4) => d2(r4.tm_min, 2), "%n": () => "\n", "%p": (r4) => r4.tm_hour >= 0 && r4.tm_hour < 12 ? "AM" : "PM", "%S": (r4) => d2(r4.tm_sec, 2), "%t": () => "	", "%u": (r4) => r4.tm_wday || 7, "%U": (r4) => {
        var e4 = r4.tm_yday + 7 - r4.tm_wday;
        return d2(Math.floor(e4 / 7), 2);
      }, "%V": (r4) => {
        var e4 = Math.floor((r4.tm_yday + 7 - (r4.tm_wday + 6) % 7) / 7);
        if ((r4.tm_wday + 371 - r4.tm_yday - 2) % 7 <= 2 && e4++, e4) {
          if (53 == e4) {
            var t4 = (r4.tm_wday + 371 - r4.tm_yday) % 7;
            4 == t4 || 3 == t4 && Qe(r4.tm_year) || (e4 = 1);
          }
        } else {
          e4 = 52;
          var n4 = (r4.tm_wday + 7 - r4.tm_yday - 1) % 7;
          (4 == n4 || 5 == n4 && Qe(r4.tm_year % 400 - 1)) && e4++;
        }
        return d2(e4, 2);
      }, "%w": (r4) => r4.tm_wday, "%W": (r4) => {
        var e4 = r4.tm_yday + 7 - (r4.tm_wday + 6) % 7;
        return d2(Math.floor(e4 / 7), 2);
      }, "%y": (r4) => (r4.tm_year + 1900).toString().substring(2), "%Y": (r4) => r4.tm_year + 1900, "%z": (r4) => {
        var e4 = r4.tm_gmtoff, t4 = e4 >= 0;
        return e4 = (e4 = Math.abs(e4) / 60) / 60 * 100 + e4 % 60, (t4 ? "+" : "-") + String("0000" + e4).slice(-4);
      }, "%Z": (r4) => r4.tm_zone, "%%": () => "%" };
      for (var s2 in i2 = i2.replace(/%%/g, "\0\0"), p2) i2.includes(s2) && (i2 = i2.replace(new RegExp(s2, "g"), p2[s2](o4)));
      var y2 = nt(i2 = i2.replace(/\0\0/g, "%"));
      return y2.length > e3 ? 0 : (at(y2, r3), y2.length - 1);
    }, it = (r3, e3, t3, n3, a4) => ot(r3, e3, t3, n3);
    Z = a3.InternalError = class extends Error {
      constructor(r3) {
        super(r3), this.name = "InternalError";
      }
    }, lr(), er = a3.BindingError = class extends Error {
      constructor(r3) {
        super(r3), this.name = "BindingError";
      }
    }, br(), Hr = a3.UnboundTypeError = Jr(Error, "UnboundTypeError");
    var ut, st = { a: L, k: ur, z: sr, w: vr, t: pr, M: Cr, r: Er, j: jr, v: Dr, e: Kr, m: Zr, f: re, L: ee, u: se, s: pe, l: ye, c: ge, x: we, F: be, J: Ae, g: Ce, y: Pe, p: Se, b: wr, n: Me, h: De, q: Re, K: xe, o: ke, d: He, i: Ie, E: Ve, G: Ue, A: Be, I: Ir, H: Ne, C: Xe, D: Ke, B: it }, lt = q(), ct = (r3) => (ct = lt.P)(r3), ft = a3._malloc = (r3) => (ft = a3._malloc = lt.R)(r3), dt = a3._free = (r3) => (dt = a3._free = lt.S)(r3), ht = (r3) => (ht = lt.T)(r3);
    function mt() {
      function r3() {
        ut || (ut = true, a3.calledRun = true, A || (E(), e2(a3), a3.onRuntimeInitialized && a3.onRuntimeInitialized(), S()));
      }
      M > 0 || (W(), M > 0 || (a3.setStatus ? (a3.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          a3.setStatus("");
        }, 1), r3();
      }, 1)) : r3()));
    }
    if (a3.dynCall_viijii = (r3, e3, t3, n3, o4, i2, u2) => (a3.dynCall_viijii = lt.U)(r3, e3, t3, n3, o4, i2, u2), a3.dynCall_iiiiij = (r3, e3, t3, n3, o4, i2, u2) => (a3.dynCall_iiiiij = lt.V)(r3, e3, t3, n3, o4, i2, u2), a3.dynCall_iiiiijj = (r3, e3, t3, n3, o4, i2, u2, s2, l2) => (a3.dynCall_iiiiijj = lt.W)(r3, e3, t3, n3, o4, i2, u2, s2, l2), a3.dynCall_iiiiiijj = (r3, e3, t3, n3, o4, i2, u2, s2, l2, c2) => (a3.dynCall_iiiiiijj = lt.X)(r3, e3, t3, n3, o4, i2, u2, s2, l2, c2), D = function r3() {
      ut || mt(), ut || (D = r3);
    }, a3.preInit) for ("function" == typeof a3.preInit && (a3.preInit = [a3.preInit]); a3.preInit.length > 0; ) a3.preInit.pop()();
    return mt(), o3;
  }, r.exports = a2), t.exports;
  var r, n2, a2;
}
var a = o(n());
var o2 = Object.freeze(Object.defineProperty({ __proto__: null, default: a }, Symbol.toStringTag, { value: "Module" }));
export {
  o2 as l
};
//# sourceMappingURL=lclayout-EJ7PYUAX.js.map
