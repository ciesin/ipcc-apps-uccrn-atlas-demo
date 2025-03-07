import {
  o
} from "./chunk-56GFF6UO.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/chunks/lyr3DMain.js
var e;
var t = { exports: {} };
function n() {
  var _a;
  return e || (e = 1, r = t, n2 = "undefined" != typeof document ? (_a = document.currentScript) == null ? void 0 : _a.src : void 0, a2 = function(r2 = {}) {
    var e2, t2, a3, o3 = r2, i = new Promise((r3, n3) => {
      e2 = r3, t2 = n3;
    }), u = Object.assign({}, o3), s = "./this.program", l = "";
    function f(r3) {
      return o3.locateFile ? o3.locateFile(r3, l) : l + r3;
    }
    "undefined" != typeof document && document.currentScript && (l = document.currentScript.src), n2 && (l = n2), l = l.startsWith("blob:") ? "" : l.substr(0, l.replace(/[?#].*/, "").lastIndexOf("/") + 1), a3 = (r3) => fetch(r3, { credentials: "same-origin" }).then((r4) => r4.ok ? r4.arrayBuffer() : Promise.reject(new Error(r4.status + " : " + r4.url))), o3.print || console.log.bind(console);
    var c = o3.printErr || console.error.bind(console);
    Object.assign(o3, u), u = null, o3.arguments && o3.arguments, o3.thisProgram && (s = o3.thisProgram);
    var h, d, p, v, g, m, y, w, b, A = o3.wasmBinary, T = false;
    function C() {
      var r3 = h.buffer;
      o3.HEAP8 = d = new Int8Array(r3), o3.HEAP16 = v = new Int16Array(r3), o3.HEAPU8 = p = new Uint8Array(r3), o3.HEAPU16 = g = new Uint16Array(r3), o3.HEAP32 = m = new Int32Array(r3), o3.HEAPU32 = y = new Uint32Array(r3), o3.HEAPF32 = w = new Float32Array(r3), o3.HEAPF64 = b = new Float64Array(r3);
    }
    var _ = [], P = [], W = [];
    function E() {
      if (o3.preRun) for ("function" == typeof o3.preRun && (o3.preRun = [o3.preRun]); o3.preRun.length; ) S(o3.preRun.shift());
      J(_);
    }
    function F() {
      J(P);
    }
    function j() {
      if (o3.postRun) for ("function" == typeof o3.postRun && (o3.postRun = [o3.postRun]); o3.postRun.length; ) x(o3.postRun.shift());
      J(W);
    }
    function S(r3) {
      _.unshift(r3);
    }
    function $(r3) {
      P.unshift(r3);
    }
    function x(r3) {
      W.unshift(r3);
    }
    var R = 0, k = null;
    function O(r3) {
      var _a2;
      R++, (_a2 = o3.monitorRunDependencies) == null ? void 0 : _a2.call(o3, R);
    }
    function U(r3) {
      var _a2;
      if (R--, (_a2 = o3.monitorRunDependencies) == null ? void 0 : _a2.call(o3, R), 0 == R && k) {
        var e3 = k;
        k = null, e3();
      }
    }
    function I(r3) {
      var _a2;
      (_a2 = o3.onAbort) == null ? void 0 : _a2.call(o3, r3), c(r3 = "Aborted(" + r3 + ")"), T = true, r3 += ". Build with -sASSERTIONS for more info.";
      var e3 = new WebAssembly.RuntimeError(r3);
      throw t2(e3), e3;
    }
    var H, D = "data:application/octet-stream;base64,", M = (r3) => r3.startsWith(D);
    function V() {
      var r3 = "lyr3DMain.wasm";
      return M(r3) ? r3 : f(r3);
    }
    function B(r3) {
      if (r3 == H && A) return new Uint8Array(A);
      throw "both async and sync fetching of the wasm failed";
    }
    function N(r3) {
      return A ? Promise.resolve().then(() => B(r3)) : a3(r3).then((r4) => new Uint8Array(r4), () => B(r3));
    }
    function L(r3, e3, t3) {
      return N(r3).then((r4) => WebAssembly.instantiate(r4, e3)).then(t3, (r4) => {
        c(`failed to asynchronously prepare wasm: ${r4}`), I(r4);
      });
    }
    function z(r3, e3, t3, n3) {
      return r3 || "function" != typeof WebAssembly.instantiateStreaming || M(e3) || "function" != typeof fetch ? L(e3, t3, n3) : fetch(e3, { credentials: "same-origin" }).then((r4) => WebAssembly.instantiateStreaming(r4, t3).then(n3, function(r5) {
        return c(`wasm streaming compile failed: ${r5}`), c("falling back to ArrayBuffer instantiation"), L(e3, t3, n3);
      }));
    }
    function G() {
      return { a: Xe };
    }
    function q() {
      function r3(r4, e4) {
        return Ze = r4.exports, h = Ze.E, C(), Rr = Ze.H, $(Ze.F), U(), Ze;
      }
      function e3(e4) {
        r3(e4.instance);
      }
      O();
      var n3 = G();
      if (o3.instantiateWasm) try {
        return o3.instantiateWasm(n3, r3);
      } catch (a4) {
        c(`Module.instantiateWasm callback failed with error: ${a4}`), t2(a4);
      }
      return H ?? (H = V()), z(A, H, n3, e3).catch(t2), {};
    }
    var J = (r3) => {
      for (; r3.length > 0; ) r3.shift()(o3);
    };
    o3.noExitRuntime;
    class K {
      constructor(r3) {
        this.excPtr = r3, this.ptr = r3 - 24;
      }
      set_type(r3) {
        y[this.ptr + 4 >> 2] = r3;
      }
      get_type() {
        return y[this.ptr + 4 >> 2];
      }
      set_destructor(r3) {
        y[this.ptr + 8 >> 2] = r3;
      }
      get_destructor() {
        return y[this.ptr + 8 >> 2];
      }
      set_caught(r3) {
        r3 = r3 ? 1 : 0, d[this.ptr + 12] = r3;
      }
      get_caught() {
        return 0 != d[this.ptr + 12];
      }
      set_rethrown(r3) {
        r3 = r3 ? 1 : 0, d[this.ptr + 13] = r3;
      }
      get_rethrown() {
        return 0 != d[this.ptr + 13];
      }
      init(r3, e3) {
        this.set_adjusted_ptr(0), this.set_type(r3), this.set_destructor(e3);
      }
      set_adjusted_ptr(r3) {
        y[this.ptr + 16 >> 2] = r3;
      }
      get_adjusted_ptr() {
        return y[this.ptr + 16 >> 2];
      }
    }
    var Y = (r3, e3, t3) => {
      throw new K(r3).init(e3, t3), r3;
    }, Q = () => I(""), X = {}, Z = (r3) => {
      for (; r3.length; ) {
        var e3 = r3.pop();
        r3.pop()(e3);
      }
    };
    function rr(r3) {
      return this.fromWireType(y[r3 >> 2]);
    }
    var er, tr, nr, ar = {}, or = {}, ir = {}, ur = (r3) => {
      throw new er(r3);
    }, sr = (r3, e3, t3) => {
      function n3(e4) {
        var n4 = t3(e4);
        n4.length !== r3.length && ur("Mismatched type converter count");
        for (var a5 = 0; a5 < r3.length; ++a5) mr(r3[a5], n4[a5]);
      }
      r3.forEach((r4) => ir[r4] = e3);
      var a4 = new Array(e3.length), o4 = [], i2 = 0;
      e3.forEach((r4, e4) => {
        or.hasOwnProperty(r4) ? a4[e4] = or[r4] : (o4.push(r4), ar.hasOwnProperty(r4) || (ar[r4] = []), ar[r4].push(() => {
          a4[e4] = or[r4], ++i2 === o4.length && n3(a4);
        }));
      }), 0 === o4.length && n3(a4);
    }, lr = (r3) => {
      var e3 = X[r3];
      delete X[r3];
      var t3 = e3.elements, n3 = t3.length, a4 = t3.map((r4) => r4.getterReturnType).concat(t3.map((r4) => r4.setterArgumentType)), o4 = e3.rawConstructor, i2 = e3.rawDestructor;
      sr([r3], a4, (r4) => (t3.forEach((e4, t4) => {
        var a5 = r4[t4], o5 = e4.getter, i3 = e4.getterContext, u2 = r4[t4 + n3], s2 = e4.setter, l2 = e4.setterContext;
        e4.read = (r5) => a5.fromWireType(o5(i3, r5)), e4.write = (r5, e5) => {
          var t5 = [];
          s2(l2, r5, u2.toWireType(t5, e5)), Z(t5);
        };
      }), [{ name: e3.name, fromWireType: (r5) => {
        for (var e4 = new Array(n3), a5 = 0; a5 < n3; ++a5) e4[a5] = t3[a5].read(r5);
        return i2(r5), e4;
      }, toWireType: (r5, a5) => {
        if (n3 !== a5.length) throw new TypeError(`Incorrect number of tuple elements for ${e3.name}: expected=${n3}, actual=${a5.length}`);
        for (var u2 = o4(), s2 = 0; s2 < n3; ++s2) t3[s2].write(u2, a5[s2]);
        return null !== r5 && r5.push(i2, u2), u2;
      }, argPackAdvance: yr, readValueFromPointer: rr, destructorFunction: i2 }]));
    }, fr = {}, cr = (r3) => {
      var e3 = fr[r3];
      delete fr[r3];
      var t3 = e3.rawConstructor, n3 = e3.rawDestructor, a4 = e3.fields, o4 = a4.map((r4) => r4.getterReturnType).concat(a4.map((r4) => r4.setterArgumentType));
      sr([r3], o4, (r4) => {
        var o5 = {};
        return a4.forEach((e4, t4) => {
          var n4 = e4.fieldName, i2 = r4[t4], u2 = e4.getter, s2 = e4.getterContext, l2 = r4[t4 + a4.length], f2 = e4.setter, c2 = e4.setterContext;
          o5[n4] = { read: (r5) => i2.fromWireType(u2(s2, r5)), write: (r5, e5) => {
            var t5 = [];
            f2(c2, r5, l2.toWireType(t5, e5)), Z(t5);
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
        }, argPackAdvance: yr, readValueFromPointer: rr, destructorFunction: n3 }];
      });
    }, hr = (r3, e3, t3, n3, a4) => {
    }, dr = () => {
      for (var r3 = new Array(256), e3 = 0; e3 < 256; ++e3) r3[e3] = String.fromCharCode(e3);
      tr = r3;
    }, pr = (r3) => {
      for (var e3 = "", t3 = r3; p[t3]; ) e3 += tr[p[t3++]];
      return e3;
    }, vr = (r3) => {
      throw new nr(r3);
    };
    function gr(r3, e3, t3 = {}) {
      var n3 = e3.name;
      if (r3 || vr(`type "${n3}" must have a positive integer typeid pointer`), or.hasOwnProperty(r3)) {
        if (t3.ignoreDuplicateRegistrations) return;
        vr(`Cannot register type '${n3}' twice`);
      }
      if (or[r3] = e3, delete ir[r3], ar.hasOwnProperty(r3)) {
        var a4 = ar[r3];
        delete ar[r3], a4.forEach((r4) => r4());
      }
    }
    function mr(r3, e3, t3 = {}) {
      return gr(r3, e3, t3);
    }
    var yr = 8, wr = (r3, e3, t3, n3) => {
      mr(r3, { name: e3 = pr(e3), fromWireType: function(r4) {
        return !!r4;
      }, toWireType: function(r4, e4) {
        return e4 ? t3 : n3;
      }, argPackAdvance: yr, readValueFromPointer: function(r4) {
        return this.fromWireType(p[r4]);
      }, destructorFunction: null });
    }, br = [], Ar = [], Tr = (r3) => {
      r3 > 9 && 0 == --Ar[r3 + 1] && (Ar[r3] = void 0, br.push(r3));
    }, Cr = () => Ar.length / 2 - 5 - br.length, _r = () => {
      Ar.push(0, 1, void 0, 1, null, 1, true, 1, false, 1), o3.count_emval_handles = Cr;
    }, Pr = { toValue: (r3) => (r3 || vr("Cannot use deleted val. handle = " + r3), Ar[r3]), toHandle: (r3) => {
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
          const e3 = br.pop() || Ar.length;
          return Ar[e3] = r3, Ar[e3 + 1] = 1, e3;
        }
      }
    } }, Wr = { name: "emscripten::val", fromWireType: (r3) => {
      var e3 = Pr.toValue(r3);
      return Tr(r3), e3;
    }, toWireType: (r3, e3) => Pr.toHandle(e3), argPackAdvance: yr, readValueFromPointer: rr, destructorFunction: null }, Er = (r3) => mr(r3, Wr), Fr = (r3, e3) => {
      switch (e3) {
        case 4:
          return function(r4) {
            return this.fromWireType(w[r4 >> 2]);
          };
        case 8:
          return function(r4) {
            return this.fromWireType(b[r4 >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${e3}): ${r3}`);
      }
    }, jr = (r3, e3, t3) => {
      mr(r3, { name: e3 = pr(e3), fromWireType: (r4) => r4, toWireType: (r4, e4) => e4, argPackAdvance: yr, readValueFromPointer: Fr(e3, t3), destructorFunction: null });
    }, Sr = (r3, e3) => Object.defineProperty(e3, "name", { value: r3 });
    function $r(r3) {
      for (var e3 = 1; e3 < r3.length; ++e3) if (null !== r3[e3] && void 0 === r3[e3].destructorFunction) return true;
      return false;
    }
    function xr(r3, e3, t3, n3, a4, o4) {
      var i2 = e3.length;
      i2 < 2 && vr("argTypes array size mismatch! Must at least get return value and 'this' types!"), e3[1];
      var u2 = $r(e3), s2 = "void" !== e3[0].name, l2 = i2 - 2, f2 = new Array(l2), c2 = [], h2 = [];
      return Sr(r3, function(...r4) {
        var t4;
        h2.length = 0, c2.length = 1, c2[0] = a4;
        for (var o5 = 0; o5 < l2; ++o5) f2[o5] = e3[o5 + 2].toWireType(h2, r4[o5]), c2.push(f2[o5]);
        function i3(r5) {
          if (u2) Z(h2);
          else for (var n4 = 2; n4 < e3.length; n4++) {
            var a5 = 1 === n4 ? t4 : f2[n4 - 2];
            null !== e3[n4].destructorFunction && e3[n4].destructorFunction(a5);
          }
          if (s2) return e3[0].fromWireType(r5);
        }
        return i3(n3(...c2));
      });
    }
    var Rr, kr, Or, Ur = (r3, e3, t3) => {
      if (void 0 === r3[e3].overloadTable) {
        var n3 = r3[e3];
        r3[e3] = function(...n4) {
          return r3[e3].overloadTable.hasOwnProperty(n4.length) || vr(`Function '${t3}' called with an invalid number of arguments (${n4.length}) - expects one of (${r3[e3].overloadTable})!`), r3[e3].overloadTable[n4.length].apply(this, n4);
        }, r3[e3].overloadTable = [], r3[e3].overloadTable[n3.argCount] = n3;
      }
    }, Ir = (r3, e3, t3) => {
      o3.hasOwnProperty(r3) ? ((void 0 === t3 || void 0 !== o3[r3].overloadTable && void 0 !== o3[r3].overloadTable[t3]) && vr(`Cannot register public name '${r3}' twice`), Ur(o3, r3, r3), o3[r3].overloadTable.hasOwnProperty(t3) && vr(`Cannot register multiple overloads of a function with the same number of arguments (${t3})!`), o3[r3].overloadTable[t3] = e3) : (o3[r3] = e3, o3[r3].argCount = t3);
    }, Hr = (r3, e3) => {
      for (var t3 = [], n3 = 0; n3 < r3; n3++) t3.push(y[e3 + 4 * n3 >> 2]);
      return t3;
    }, Dr = (r3, e3, t3) => {
      o3.hasOwnProperty(r3) || ur("Replacing nonexistent public symbol"), void 0 !== o3[r3].overloadTable && void 0 !== t3 ? o3[r3].overloadTable[t3] = e3 : (o3[r3] = e3, o3[r3].argCount = t3);
    }, Mr = (r3, e3, t3) => (r3 = r3.replace(/p/g, "i"), (0, o3["dynCall_" + r3])(e3, ...t3)), Vr = [], Br = (r3) => {
      var e3 = Vr[r3];
      return e3 || (r3 >= Vr.length && (Vr.length = r3 + 1), Vr[r3] = e3 = Rr.get(r3)), e3;
    }, Nr = (r3, e3, t3 = []) => r3.includes("j") ? Mr(r3, e3, t3) : Br(e3)(...t3), Lr = (r3, e3) => (...t3) => Nr(r3, e3, t3), zr = (r3, e3) => {
      function t3() {
        return r3.includes("j") ? Lr(r3, e3) : Br(e3);
      }
      r3 = pr(r3);
      var n3 = t3();
      return "function" != typeof n3 && vr(`unknown function pointer with signature ${r3}: ${e3}`), n3;
    }, Gr = (r3, e3) => {
      var t3 = Sr(e3, function(r4) {
        this.name = e3, this.message = r4;
        var t4 = new Error(r4).stack;
        void 0 !== t4 && (this.stack = this.toString() + "\n" + t4.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return t3.prototype = Object.create(r3.prototype), t3.prototype.constructor = t3, t3.prototype.toString = function() {
        return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
      }, t3;
    }, qr = (r3) => {
      var e3 = rt(r3), t3 = pr(e3);
      return et(e3), t3;
    }, Jr = (r3, e3) => {
      var t3 = [], n3 = {};
      function a4(r4) {
        n3[r4] || or[r4] || (ir[r4] ? ir[r4].forEach(a4) : (t3.push(r4), n3[r4] = true));
      }
      throw e3.forEach(a4), new kr(`${r3}: ` + t3.map(qr).join([", "]));
    }, Kr = (r3) => {
      const e3 = (r3 = r3.trim()).indexOf("(");
      return -1 !== e3 ? r3.substr(0, e3) : r3;
    }, Yr = (r3, e3, t3, n3, a4, o4, i2, u2) => {
      var s2 = Hr(e3, t3);
      r3 = pr(r3), r3 = Kr(r3), a4 = zr(n3, a4), Ir(r3, function() {
        Jr(`Cannot call ${r3} due to unbound types`, s2);
      }, e3 - 1), sr([], s2, (t4) => {
        var n4 = [t4[0], null].concat(t4.slice(1));
        return Dr(r3, xr(r3, n4, null, a4, o4), e3 - 1), [];
      });
    }, Qr = (r3, e3, t3) => {
      switch (e3) {
        case 1:
          return t3 ? (r4) => d[r4] : (r4) => p[r4];
        case 2:
          return t3 ? (r4) => v[r4 >> 1] : (r4) => g[r4 >> 1];
        case 4:
          return t3 ? (r4) => m[r4 >> 2] : (r4) => y[r4 >> 2];
        default:
          throw new TypeError(`invalid integer width (${e3}): ${r3}`);
      }
    }, Xr = (r3, e3, t3, n3, a4) => {
      e3 = pr(e3);
      var o4 = (r4) => r4;
      if (0 === n3) {
        var i2 = 32 - 8 * t3;
        o4 = (r4) => r4 << i2 >>> i2;
      }
      var u2 = e3.includes("unsigned"), s2 = (r4, e4) => {
      };
      mr(r3, { name: e3, fromWireType: o4, toWireType: u2 ? function(r4, e4) {
        return s2(e4, this.name), e4 >>> 0;
      } : function(r4, e4) {
        return s2(e4, this.name), e4;
      }, argPackAdvance: yr, readValueFromPointer: Qr(e3, t3, 0 !== n3), destructorFunction: null });
    }, Zr = (r3, e3, t3) => {
      var n3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e3];
      function a4(r4) {
        var e4 = y[r4 >> 2], t4 = y[r4 + 4 >> 2];
        return new n3(d.buffer, t4, e4);
      }
      mr(r3, { name: t3 = pr(t3), fromWireType: a4, argPackAdvance: yr, readValueFromPointer: a4 }, { ignoreDuplicateRegistrations: true });
    }, re = (r3, e3, t3, n3) => {
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
    }, ee = (r3, e3, t3) => re(r3, p, e3, t3), te = (r3) => {
      for (var e3 = 0, t3 = 0; t3 < r3.length; ++t3) {
        var n3 = r3.charCodeAt(t3);
        n3 <= 127 ? e3++ : n3 <= 2047 ? e3 += 2 : n3 >= 55296 && n3 <= 57343 ? (e3 += 4, ++t3) : e3 += 3;
      }
      return e3;
    }, ne = "undefined" != typeof TextDecoder ? new TextDecoder() : void 0, ae = (r3, e3 = 0, t3 = NaN) => {
      for (var n3 = e3 + t3, a4 = e3; r3[a4] && !(a4 >= n3); ) ++a4;
      if (a4 - e3 > 16 && r3.buffer && ne) return ne.decode(r3.subarray(e3, a4));
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
    }, oe = (r3, e3) => r3 ? ae(p, r3, e3) : "", ie = (r3, e3) => {
      var t3 = "std::string" === (e3 = pr(e3));
      mr(r3, { name: e3, fromWireType(r4) {
        var e4, n3 = y[r4 >> 2], a4 = r4 + 4;
        if (t3) for (var o4 = a4, i2 = 0; i2 <= n3; ++i2) {
          var u2 = a4 + i2;
          if (i2 == n3 || 0 == p[u2]) {
            var s2 = oe(o4, u2 - o4);
            void 0 === e4 ? e4 = s2 : (e4 += String.fromCharCode(0), e4 += s2), o4 = u2 + 1;
          }
        }
        else {
          var l2 = new Array(n3);
          for (i2 = 0; i2 < n3; ++i2) l2[i2] = String.fromCharCode(p[a4 + i2]);
          e4 = l2.join("");
        }
        return et(r4), e4;
      }, toWireType(r4, e4) {
        var n3;
        e4 instanceof ArrayBuffer && (e4 = new Uint8Array(e4));
        var a4 = "string" == typeof e4;
        a4 || e4 instanceof Uint8Array || e4 instanceof Uint8ClampedArray || e4 instanceof Int8Array || vr("Cannot pass non-string to std::string"), n3 = t3 && a4 ? te(e4) : e4.length;
        var o4 = tt(4 + n3 + 1), i2 = o4 + 4;
        if (y[o4 >> 2] = n3, t3 && a4) ee(e4, i2, n3 + 1);
        else if (a4) for (var u2 = 0; u2 < n3; ++u2) {
          var s2 = e4.charCodeAt(u2);
          s2 > 255 && (et(i2), vr("String has UTF-16 code units that do not fit in 8 bits")), p[i2 + u2] = s2;
        }
        else for (u2 = 0; u2 < n3; ++u2) p[i2 + u2] = e4[u2];
        return null !== r4 && r4.push(et, o4), o4;
      }, argPackAdvance: yr, readValueFromPointer: rr, destructorFunction(r4) {
        et(r4);
      } });
    }, ue = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, se = (r3, e3) => {
      for (var t3 = r3, n3 = t3 >> 1, a4 = n3 + e3 / 2; !(n3 >= a4) && g[n3]; ) ++n3;
      if ((t3 = n3 << 1) - r3 > 32 && ue) return ue.decode(p.subarray(r3, t3));
      for (var o4 = "", i2 = 0; !(i2 >= e3 / 2); ++i2) {
        var u2 = v[r3 + 2 * i2 >> 1];
        if (0 == u2) break;
        o4 += String.fromCharCode(u2);
      }
      return o4;
    }, le = (r3, e3, t3) => {
      if (t3 ?? (t3 = 2147483647), t3 < 2) return 0;
      for (var n3 = e3, a4 = (t3 -= 2) < 2 * r3.length ? t3 / 2 : r3.length, o4 = 0; o4 < a4; ++o4) {
        var i2 = r3.charCodeAt(o4);
        v[e3 >> 1] = i2, e3 += 2;
      }
      return v[e3 >> 1] = 0, e3 - n3;
    }, fe = (r3) => 2 * r3.length, ce = (r3, e3) => {
      for (var t3 = 0, n3 = ""; !(t3 >= e3 / 4); ) {
        var a4 = m[r3 + 4 * t3 >> 2];
        if (0 == a4) break;
        if (++t3, a4 >= 65536) {
          var o4 = a4 - 65536;
          n3 += String.fromCharCode(55296 | o4 >> 10, 56320 | 1023 & o4);
        } else n3 += String.fromCharCode(a4);
      }
      return n3;
    }, he = (r3, e3, t3) => {
      if (t3 ?? (t3 = 2147483647), t3 < 4) return 0;
      for (var n3 = e3, a4 = n3 + t3 - 4, o4 = 0; o4 < r3.length; ++o4) {
        var i2 = r3.charCodeAt(o4);
        if (i2 >= 55296 && i2 <= 57343 && (i2 = 65536 + ((1023 & i2) << 10) | 1023 & r3.charCodeAt(++o4)), m[e3 >> 2] = i2, (e3 += 4) + 4 > a4) break;
      }
      return m[e3 >> 2] = 0, e3 - n3;
    }, de = (r3) => {
      for (var e3 = 0, t3 = 0; t3 < r3.length; ++t3) {
        var n3 = r3.charCodeAt(t3);
        n3 >= 55296 && n3 <= 57343 && ++t3, e3 += 4;
      }
      return e3;
    }, pe = (r3, e3, t3) => {
      var n3, a4, o4, i2;
      t3 = pr(t3), 2 === e3 ? (n3 = se, a4 = le, i2 = fe, o4 = (r4) => g[r4 >> 1]) : 4 === e3 && (n3 = ce, a4 = he, i2 = de, o4 = (r4) => y[r4 >> 2]), mr(r3, { name: t3, fromWireType: (r4) => {
        for (var t4, a5 = y[r4 >> 2], i3 = r4 + 4, u2 = 0; u2 <= a5; ++u2) {
          var s2 = r4 + 4 + u2 * e3;
          if (u2 == a5 || 0 == o4(s2)) {
            var l2 = n3(i3, s2 - i3);
            void 0 === t4 ? t4 = l2 : (t4 += String.fromCharCode(0), t4 += l2), i3 = s2 + e3;
          }
        }
        return et(r4), t4;
      }, toWireType: (r4, n4) => {
        "string" != typeof n4 && vr(`Cannot pass non-string to C++ string type ${t3}`);
        var o5 = i2(n4), u2 = tt(4 + o5 + e3);
        return y[u2 >> 2] = o5 / e3, a4(n4, u2 + 4, o5 + e3), null !== r4 && r4.push(et, u2), u2;
      }, argPackAdvance: yr, readValueFromPointer: rr, destructorFunction(r4) {
        et(r4);
      } });
    }, ve = (r3, e3, t3, n3, a4, o4) => {
      X[r3] = { name: pr(e3), rawConstructor: zr(t3, n3), rawDestructor: zr(a4, o4), elements: [] };
    }, ge = (r3, e3, t3, n3, a4, o4, i2, u2, s2) => {
      X[r3].elements.push({ getterReturnType: e3, getter: zr(t3, n3), getterContext: a4, setterArgumentType: o4, setter: zr(i2, u2), setterContext: s2 });
    }, me = (r3, e3, t3, n3, a4, o4) => {
      fr[r3] = { name: pr(e3), rawConstructor: zr(t3, n3), rawDestructor: zr(a4, o4), fields: [] };
    }, ye = (r3, e3, t3, n3, a4, o4, i2, u2, s2, l2) => {
      fr[r3].fields.push({ fieldName: pr(e3), getterReturnType: t3, getter: zr(n3, a4), getterContext: o4, setterArgumentType: i2, setter: zr(u2, s2), setterContext: l2 });
    }, we = (r3, e3) => {
      mr(r3, { isVoid: true, name: e3 = pr(e3), argPackAdvance: 0, fromWireType: () => {
      }, toWireType: (r4, e4) => {
      } });
    }, be = (r3, e3, t3) => p.copyWithin(r3, e3, e3 + t3), Ae = (r3) => {
      r3 > 9 && (Ar[r3 + 1] += 1);
    }, Te = () => Pr.toHandle([]), Ce = {}, _e = (r3) => {
      var e3 = Ce[r3];
      return void 0 === e3 ? pr(r3) : e3;
    }, Pe = (r3) => Pr.toHandle(_e(r3)), We = () => Pr.toHandle({}), Ee = (r3, e3, t3) => {
      r3 = Pr.toValue(r3), e3 = Pr.toValue(e3), t3 = Pr.toValue(t3), r3[e3] = t3;
    }, Fe = (r3, e3) => {
      var t3 = or[r3];
      return void 0 === t3 && vr(`${e3} has unknown type ${qr(r3)}`), t3;
    }, je = (r3, e3) => {
      var t3 = (r3 = Fe(r3, "_emval_take_value")).readValueFromPointer(e3);
      return Pr.toHandle(t3);
    }, Se = (r3, e3, t3, n3) => {
      var a4 = (/* @__PURE__ */ new Date()).getFullYear(), o4 = new Date(a4, 0, 1), i2 = new Date(a4, 6, 1), u2 = o4.getTimezoneOffset(), s2 = i2.getTimezoneOffset(), l2 = Math.max(u2, s2);
      y[r3 >> 2] = 60 * l2, m[e3 >> 2] = Number(u2 != s2);
      var f2 = (r4) => {
        var e4 = r4 >= 0 ? "-" : "+", t4 = Math.abs(r4);
        return `UTC${e4}${String(Math.floor(t4 / 60)).padStart(2, "0")}${String(t4 % 60).padStart(2, "0")}`;
      }, c2 = f2(u2), h2 = f2(s2);
      s2 < u2 ? (ee(c2, t3, 17), ee(h2, n3, 17)) : (ee(c2, n3, 17), ee(h2, t3, 17));
    }, $e = () => 2147483648, xe = (r3, e3) => Math.ceil(r3 / e3) * e3, Re = (r3) => {
      var e3 = (r3 - h.buffer.byteLength + 65535) / 65536 | 0;
      try {
        return h.grow(e3), C(), 1;
      } catch (t3) {
      }
    }, ke = (r3) => {
      var e3 = p.length;
      r3 >>>= 0;
      var t3 = $e();
      if (r3 > t3) return false;
      for (var n3 = 1; n3 <= 4; n3 *= 2) {
        var a4 = e3 * (1 + 0.2 / n3);
        a4 = Math.min(a4, r3 + 100663296);
        var o4 = Math.min(t3, xe(Math.max(r3, a4), 65536));
        if (Re(o4)) return true;
      }
      return false;
    }, Oe = {}, Ue = () => s || "./this.program", Ie = () => {
      if (!Ie.strings) {
        var r3 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: Ue() };
        for (var e3 in Oe) void 0 === Oe[e3] ? delete r3[e3] : r3[e3] = Oe[e3];
        var t3 = [];
        for (var e3 in r3) t3.push(`${e3}=${r3[e3]}`);
        Ie.strings = t3;
      }
      return Ie.strings;
    }, He = (r3, e3) => {
      for (var t3 = 0; t3 < r3.length; ++t3) d[e3++] = r3.charCodeAt(t3);
      d[e3] = 0;
    }, De = (r3, e3) => {
      var t3 = 0;
      return Ie().forEach((n3, a4) => {
        var o4 = e3 + t3;
        y[r3 + 4 * a4 >> 2] = o4, He(n3, o4), t3 += n3.length + 1;
      }), 0;
    }, Me = (r3, e3) => {
      var t3 = Ie();
      y[r3 >> 2] = t3.length;
      var n3 = 0;
      return t3.forEach((r4) => n3 += r4.length + 1), y[e3 >> 2] = n3, 0;
    }, Ve = (r3, e3) => {
      r3 < 128 ? e3.push(r3) : e3.push(r3 % 128 | 128, r3 >> 7);
    }, Be = (r3) => {
      for (var e3 = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" }, t3 = { parameters: [], results: "v" == r3[0] ? [] : [e3[r3[0]]] }, n3 = 1; n3 < r3.length; ++n3) t3.parameters.push(e3[r3[n3]]);
      return t3;
    }, Ne = (r3, e3) => {
      var t3 = r3.slice(0, 1), n3 = r3.slice(1), a4 = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
      e3.push(96), Ve(n3.length, e3);
      for (var o4 = 0; o4 < n3.length; ++o4) e3.push(a4[n3[o4]]);
      "v" == t3 ? e3.push(0) : e3.push(1, a4[t3]);
    }, Le = (r3, e3) => {
      if ("function" == typeof WebAssembly.Function) return new WebAssembly.Function(Be(e3), r3);
      var t3 = [1];
      Ne(e3, t3);
      var n3 = [0, 97, 115, 109, 1, 0, 0, 0, 1];
      Ve(t3.length, n3), n3.push(...t3), n3.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
      var a4 = new WebAssembly.Module(new Uint8Array(n3));
      return new WebAssembly.Instance(a4, { e: { f: r3 } }).exports.f;
    }, ze = (r3, e3) => {
      if (Or) for (var t3 = r3; t3 < r3 + e3; t3++) {
        var n3 = Br(t3);
        n3 && Or.set(n3, t3);
      }
    }, Ge = (r3) => (Or || (Or = /* @__PURE__ */ new WeakMap(), ze(0, Rr.length)), Or.get(r3) || 0), qe = [], Je = () => {
      if (qe.length) return qe.pop();
      try {
        Rr.grow(1);
      } catch (c2) {
        if (!(c2 instanceof RangeError)) throw c2;
        throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
      }
      return Rr.length - 1;
    }, Ke = (r3, e3) => {
      Rr.set(r3, e3), Vr[r3] = Rr.get(r3);
    }, Ye = (r3, e3) => {
      var t3 = Ge(r3);
      if (t3) return t3;
      var n3 = Je();
      try {
        Ke(n3, r3);
      } catch (c2) {
        if (!(c2 instanceof TypeError)) throw c2;
        var a4 = Le(r3, e3);
        Ke(n3, a4);
      }
      return Or.set(r3, n3), n3;
    };
    er = o3.InternalError = class extends Error {
      constructor(r3) {
        super(r3), this.name = "InternalError";
      }
    }, dr(), nr = o3.BindingError = class extends Error {
      constructor(r3) {
        super(r3), this.name = "BindingError";
      }
    }, _r(), kr = o3.UnboundTypeError = Gr(Error, "UnboundTypeError");
    var Qe, Xe = { k: Y, z: Q, l: lr, t: cr, v: hr, r: wr, D: Er, q: jr, c: Yr, h: Xr, b: Zr, p: ie, n: pe, m: ve, d: ge, u: me, i: ye, s: we, B: be, a: Tr, o: Ae, C: Te, g: Pe, j: We, e: Ee, f: je, w: Se, A: ke, x: De, y: Me }, Ze = q(), rt = (r3) => (rt = Ze.G)(r3), et = o3._free = (r3) => (et = o3._free = Ze.I)(r3), tt = o3._malloc = (r3) => (tt = o3._malloc = Ze.J)(r3);
    function nt() {
      function r3() {
        var _a2;
        Qe || (Qe = true, o3.calledRun = true, T || (F(), e2(o3), (_a2 = o3.onRuntimeInitialized) == null ? void 0 : _a2.call(o3), j()));
      }
      R > 0 || (E(), R > 0 || (o3.setStatus ? (o3.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => o3.setStatus(""), 1), r3();
      }, 1)) : r3()));
    }
    if (o3.dynCall_viji = (r3, e3, t3, n3, a4) => (o3.dynCall_viji = Ze.K)(r3, e3, t3, n3, a4), o3.dynCall_ji = (r3, e3) => (o3.dynCall_ji = Ze.L)(r3, e3), o3.dynCall_viijii = (r3, e3, t3, n3, a4, i2, u2) => (o3.dynCall_viijii = Ze.M)(r3, e3, t3, n3, a4, i2, u2), o3.dynCall_iiiiij = (r3, e3, t3, n3, a4, i2, u2) => (o3.dynCall_iiiiij = Ze.N)(r3, e3, t3, n3, a4, i2, u2), o3.dynCall_iiiiijj = (r3, e3, t3, n3, a4, i2, u2, s2, l2) => (o3.dynCall_iiiiijj = Ze.O)(r3, e3, t3, n3, a4, i2, u2, s2, l2), o3.dynCall_iiiiiijj = (r3, e3, t3, n3, a4, i2, u2, s2, l2, f2) => (o3.dynCall_iiiiiijj = Ze.P)(r3, e3, t3, n3, a4, i2, u2, s2, l2, f2), o3.addFunction = Ye, o3.UTF8ToString = oe, k = function r3() {
      Qe || nt(), Qe || (k = r3);
    }, o3.preInit) for ("function" == typeof o3.preInit && (o3.preInit = [o3.preInit]); o3.preInit.length > 0; ) o3.preInit.pop()();
    return nt(), i;
  }, r.exports = a2), t.exports;
  var r, n2, a2;
}
var a = o(n());
var o2 = Object.freeze(Object.defineProperty({ __proto__: null, default: a }, Symbol.toStringTag, { value: "Module" }));
export {
  o2 as l
};
//# sourceMappingURL=lyr3DMain-HXDU4TBG.js.map
