import {
  o
} from "./chunk-56GFF6UO.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/chunks/i3s.js
var r;
var e = { exports: {} };
function t() {
  return r || (r = 1, n = e, t2 = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, i2 = function(n2 = {}) {
    var r2, e2, i3 = void 0 !== n2 ? n2 : {};
    i3.ready = new Promise((n3, t3) => {
      r2 = n3, e2 = t3;
    });
    var o3 = Object.assign({}, i3), a = "object" == typeof window, u = "function" == typeof importScripts;
    "object" == typeof process && "object" == typeof process.versions && process.versions.node;
    var c, f = "";
    function s(n3) {
      return i3.locateFile ? i3.locateFile(n3, f) : f + n3;
    }
    (a || u) && (u ? f = self.location.href : "undefined" != typeof document && document.currentScript && (f = document.currentScript.src), t2 && (f = t2), f = 0 !== f.indexOf("blob:") ? f.substr(0, f.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", u && (c = (n3) => {
      var r3 = new XMLHttpRequest();
      return r3.open("GET", n3, false), r3.responseType = "arraybuffer", r3.send(null), new Uint8Array(r3.response);
    }));
    var l, d, p = i3.print || console.log.bind(console), v = i3.printErr || console.warn.bind(console);
    Object.assign(i3, o3), o3 = null, i3.arguments && i3.arguments, i3.thisProgram && i3.thisProgram, i3.quit && i3.quit, i3.wasmBinary && (l = i3.wasmBinary), i3.noExitRuntime, "object" != typeof WebAssembly && D("no native wasm support detected");
    var h, m, g, y, _, w, b, A, T, C = false;
    function P() {
      var n3 = d.buffer;
      i3.HEAP8 = h = new Int8Array(n3), i3.HEAP16 = g = new Int16Array(n3), i3.HEAP32 = _ = new Int32Array(n3), i3.HEAPU8 = m = new Uint8Array(n3), i3.HEAPU16 = y = new Uint16Array(n3), i3.HEAPU32 = w = new Uint32Array(n3), i3.HEAPF32 = b = new Float32Array(n3), i3.HEAPF64 = A = new Float64Array(n3);
    }
    var E = [], W = [], k = [];
    function j() {
      if (i3.preRun) for ("function" == typeof i3.preRun && (i3.preRun = [i3.preRun]); i3.preRun.length; ) S(i3.preRun.shift());
      Z(E);
    }
    function F() {
      Z(W);
    }
    function R() {
      if (i3.postRun) for ("function" == typeof i3.postRun && (i3.postRun = [i3.postRun]); i3.postRun.length; ) U(i3.postRun.shift());
      Z(k);
    }
    function S(n3) {
      E.unshift(n3);
    }
    function x(n3) {
      W.unshift(n3);
    }
    function U(n3) {
      k.unshift(n3);
    }
    var I = 0, O = null;
    function H(n3) {
      I++, i3.monitorRunDependencies && i3.monitorRunDependencies(I);
    }
    function z(n3) {
      if (I--, i3.monitorRunDependencies && i3.monitorRunDependencies(I), 0 == I && O) {
        var r3 = O;
        O = null, r3();
      }
    }
    function D(n3) {
      i3.onAbort && i3.onAbort(n3), v(n3 = "Aborted(" + n3 + ")"), C = true, n3 += ". Build with -sASSERTIONS for more info.";
      var r3 = new WebAssembly.RuntimeError(n3);
      throw e2(r3), r3;
    }
    var V, M = "data:application/octet-stream;base64,";
    function B(n3) {
      return n3.startsWith(M);
    }
    function q(n3) {
      try {
        if (n3 == V && l) return new Uint8Array(l);
        if (c) return c(n3);
        throw "both async and sync fetching of the wasm failed";
      } catch (v2) {
        D(v2);
      }
    }
    function N(n3) {
      return l || !a && !u || "function" != typeof fetch ? Promise.resolve().then(() => q(n3)) : fetch(n3, { credentials: "same-origin" }).then((r3) => {
        if (!r3.ok) throw "failed to load wasm binary file at '" + n3 + "'";
        return r3.arrayBuffer();
      }).catch(() => q(n3));
    }
    function L(n3, r3, e3) {
      return N(n3).then((n4) => WebAssembly.instantiate(n4, r3)).then((n4) => n4).then(e3, (n4) => {
        v("failed to asynchronously prepare wasm: " + n4), D(n4);
      });
    }
    function G(n3, r3, e3, t3) {
      return n3 || "function" != typeof WebAssembly.instantiateStreaming || B(r3) || "function" != typeof fetch ? L(r3, e3, t3) : fetch(r3, { credentials: "same-origin" }).then((n4) => WebAssembly.instantiateStreaming(n4, e3).then(t3, function(n5) {
        return v("wasm streaming compile failed: " + n5), v("falling back to ArrayBuffer instantiation"), L(r3, e3, t3);
      }));
    }
    function X() {
      var n3 = { env: Fr, wasi_snapshot_preview1: Fr };
      function r3(n4, r4) {
        var e3 = n4.exports;
        return i3.asm = e3, d = i3.asm.memory, P(), T = i3.asm.__indirect_function_table, x(i3.asm.__wasm_call_ctors), z(), e3;
      }
      function t3(n4) {
        r3(n4.instance);
      }
      if (H(), i3.instantiateWasm) try {
        return i3.instantiateWasm(n3, r3);
      } catch (o4) {
        v("Module.instantiateWasm callback failed with error: " + o4), e2(o4);
      }
      return G(l, V, n3, t3).catch(e2), {};
    }
    function Z(n3) {
      for (; n3.length > 0; ) n3.shift()(i3);
    }
    B(V = "i3s.wasm") || (V = s(V));
    var $ = [];
    function J(n3) {
      var r3 = $[n3];
      return r3 || (n3 >= $.length && ($.length = n3 + 1), $[n3] = r3 = T.get(n3)), r3;
    }
    function K(n3, r3) {
      J(n3)(r3);
    }
    function Q(n3) {
      this.excPtr = n3, this.ptr = n3 - 24, this.set_type = function(n4) {
        w[this.ptr + 4 >> 2] = n4;
      }, this.get_type = function() {
        return w[this.ptr + 4 >> 2];
      }, this.set_destructor = function(n4) {
        w[this.ptr + 8 >> 2] = n4;
      }, this.get_destructor = function() {
        return w[this.ptr + 8 >> 2];
      }, this.set_caught = function(n4) {
        n4 = n4 ? 1 : 0, h[this.ptr + 12 | 0] = n4;
      }, this.get_caught = function() {
        return 0 != h[this.ptr + 12 | 0];
      }, this.set_rethrown = function(n4) {
        n4 = n4 ? 1 : 0, h[this.ptr + 13 | 0] = n4;
      }, this.get_rethrown = function() {
        return 0 != h[this.ptr + 13 | 0];
      }, this.init = function(n4, r3) {
        this.set_adjusted_ptr(0), this.set_type(n4), this.set_destructor(r3);
      }, this.set_adjusted_ptr = function(n4) {
        w[this.ptr + 16 >> 2] = n4;
      }, this.get_adjusted_ptr = function() {
        return w[this.ptr + 16 >> 2];
      }, this.get_exception_ptr = function() {
        if (Ir(this.get_type())) return w[this.excPtr >> 2];
        var n4 = this.get_adjusted_ptr();
        return 0 !== n4 ? n4 : this.excPtr;
      };
    }
    function Y(n3, r3, e3) {
      throw new Q(n3).init(r3, e3), n3;
    }
    var nn = {};
    function rn(n3) {
      for (; n3.length; ) {
        var r3 = n3.pop();
        n3.pop()(r3);
      }
    }
    function en(n3) {
      return this.fromWireType(_[n3 >> 2]);
    }
    var tn = {}, on = {}, an = {}, un = 48, cn = 57;
    function fn(n3) {
      if (void 0 === n3) return "_unknown";
      var r3 = (n3 = n3.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
      return r3 >= un && r3 <= cn ? "_" + n3 : n3;
    }
    function sn(n3, r3) {
      return n3 = fn(n3), { [n3]: function() {
        return r3.apply(this, arguments);
      } }[n3];
    }
    function ln(n3, r3) {
      var e3 = sn(r3, function(n4) {
        this.name = r3, this.message = n4;
        var e4 = new Error(n4).stack;
        void 0 !== e4 && (this.stack = this.toString() + "\n" + e4.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return e3.prototype = Object.create(n3.prototype), e3.prototype.constructor = e3, e3.prototype.toString = function() {
        return void 0 === this.message ? this.name : this.name + ": " + this.message;
      }, e3;
    }
    var dn = void 0;
    function pn(n3) {
      throw new dn(n3);
    }
    function vn(n3, r3, e3) {
      function t3(r4) {
        var t4 = e3(r4);
        t4.length !== n3.length && pn("Mismatched type converter count");
        for (var i5 = 0; i5 < n3.length; ++i5) Tn(n3[i5], t4[i5]);
      }
      n3.forEach(function(n4) {
        an[n4] = r3;
      });
      var i4 = new Array(r3.length), o4 = [], a2 = 0;
      r3.forEach((n4, r4) => {
        on.hasOwnProperty(n4) ? i4[r4] = on[n4] : (o4.push(n4), tn.hasOwnProperty(n4) || (tn[n4] = []), tn[n4].push(() => {
          i4[r4] = on[n4], ++a2 === o4.length && t3(i4);
        }));
      }), 0 === o4.length && t3(i4);
    }
    function hn(n3) {
      var r3 = nn[n3];
      delete nn[n3];
      var e3 = r3.rawConstructor, t3 = r3.rawDestructor, i4 = r3.fields;
      vn([n3], i4.map((n4) => n4.getterReturnType).concat(i4.map((n4) => n4.setterArgumentType)), (n4) => {
        var o4 = {};
        return i4.forEach((r4, e4) => {
          var t4 = r4.fieldName, a2 = n4[e4], u2 = r4.getter, c2 = r4.getterContext, f2 = n4[e4 + i4.length], s2 = r4.setter, l2 = r4.setterContext;
          o4[t4] = { read: (n5) => a2.fromWireType(u2(c2, n5)), write: (n5, r5) => {
            var e5 = [];
            s2(l2, n5, f2.toWireType(e5, r5)), rn(e5);
          } };
        }), [{ name: r3.name, fromWireType: function(n5) {
          var r4 = {};
          for (var e4 in o4) r4[e4] = o4[e4].read(n5);
          return t3(n5), r4;
        }, toWireType: function(n5, r4) {
          for (var i5 in o4) if (!(i5 in r4)) throw new TypeError('Missing field:  "' + i5 + '"');
          var a2 = e3();
          for (i5 in o4) o4[i5].write(a2, r4[i5]);
          return null !== n5 && n5.push(t3, a2), a2;
        }, argPackAdvance: 8, readValueFromPointer: en, destructorFunction: t3 }];
      });
    }
    function mn(n3, r3, e3, t3, i4) {
    }
    function gn(n3) {
      switch (n3) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + n3);
      }
    }
    function yn() {
      for (var n3 = new Array(256), r3 = 0; r3 < 256; ++r3) n3[r3] = String.fromCharCode(r3);
      _n = n3;
    }
    var _n = void 0;
    function wn(n3) {
      for (var r3 = "", e3 = n3; m[e3]; ) r3 += _n[m[e3++]];
      return r3;
    }
    var bn = void 0;
    function An(n3) {
      throw new bn(n3);
    }
    function Tn(n3, r3, e3 = {}) {
      if (!("argPackAdvance" in r3)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var t3 = r3.name;
      if (n3 || An('type "' + t3 + '" must have a positive integer typeid pointer'), on.hasOwnProperty(n3)) {
        if (e3.ignoreDuplicateRegistrations) return;
        An("Cannot register type '" + t3 + "' twice");
      }
      if (on[n3] = r3, delete an[n3], tn.hasOwnProperty(n3)) {
        var i4 = tn[n3];
        delete tn[n3], i4.forEach((n4) => n4());
      }
    }
    function Cn(n3, r3, e3, t3, i4) {
      var o4 = gn(e3);
      Tn(n3, { name: r3 = wn(r3), fromWireType: function(n4) {
        return !!n4;
      }, toWireType: function(n4, r4) {
        return r4 ? t3 : i4;
      }, argPackAdvance: 8, readValueFromPointer: function(n4) {
        var t4;
        if (1 === e3) t4 = h;
        else if (2 === e3) t4 = g;
        else {
          if (4 !== e3) throw new TypeError("Unknown boolean type size: " + r3);
          t4 = _;
        }
        return this.fromWireType(t4[n4 >> o4]);
      }, destructorFunction: null });
    }
    function Pn() {
      this.allocated = [void 0], this.freelist = [], this.get = function(n3) {
        return this.allocated[n3];
      }, this.allocate = function(n3) {
        let r3 = this.freelist.pop() || this.allocated.length;
        return this.allocated[r3] = n3, r3;
      }, this.free = function(n3) {
        this.allocated[n3] = void 0, this.freelist.push(n3);
      };
    }
    var En = new Pn();
    function Wn(n3) {
      n3 >= En.reserved && 0 == --En.get(n3).refcount && En.free(n3);
    }
    function kn() {
      for (var n3 = 0, r3 = En.reserved; r3 < En.allocated.length; ++r3) void 0 !== En.allocated[r3] && ++n3;
      return n3;
    }
    function jn() {
      En.allocated.push({ value: void 0 }, { value: null }, { value: true }, { value: false }), En.reserved = En.allocated.length, i3.count_emval_handles = kn;
    }
    var Fn = { toValue: (n3) => (n3 || An("Cannot use deleted val. handle = " + n3), En.get(n3).value), toHandle: (n3) => {
      switch (n3) {
        case void 0:
          return 1;
        case null:
          return 2;
        case true:
          return 3;
        case false:
          return 4;
        default:
          return En.allocate({ refcount: 1, value: n3 });
      }
    } };
    function Rn(n3, r3) {
      Tn(n3, { name: r3 = wn(r3), fromWireType: function(n4) {
        var r4 = Fn.toValue(n4);
        return Wn(n4), r4;
      }, toWireType: function(n4, r4) {
        return Fn.toHandle(r4);
      }, argPackAdvance: 8, readValueFromPointer: en, destructorFunction: null });
    }
    function Sn(n3, r3) {
      switch (r3) {
        case 2:
          return function(n4) {
            return this.fromWireType(b[n4 >> 2]);
          };
        case 3:
          return function(n4) {
            return this.fromWireType(A[n4 >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + n3);
      }
    }
    function xn(n3, r3, e3) {
      var t3 = gn(e3);
      Tn(n3, { name: r3 = wn(r3), fromWireType: function(n4) {
        return n4;
      }, toWireType: function(n4, r4) {
        return r4;
      }, argPackAdvance: 8, readValueFromPointer: Sn(r3, t3), destructorFunction: null });
    }
    function Un(n3, r3, e3, t3, i4, o4) {
      var a2 = r3.length;
      a2 < 2 && An("argTypes array size mismatch! Must at least get return value and 'this' types!"), r3[1];
      for (var u2 = false, c2 = 1; c2 < r3.length; ++c2) if (null !== r3[c2] && void 0 === r3[c2].destructorFunction) {
        u2 = true;
        break;
      }
      var f2 = "void" !== r3[0].name, s2 = a2 - 2, l2 = new Array(s2), d2 = [], p2 = [];
      return function() {
        var e4;
        arguments.length !== s2 && An("function " + n3 + " called with " + arguments.length + " arguments, expected " + s2 + " args!"), p2.length = 0, d2.length = 1, d2[0] = i4;
        for (var o5 = 0; o5 < s2; ++o5) l2[o5] = r3[o5 + 2].toWireType(p2, arguments[o5]), d2.push(l2[o5]);
        function a3(n4) {
          if (u2) rn(p2);
          else for (var t4 = 2; t4 < r3.length; t4++) {
            var i5 = 1 === t4 ? e4 : l2[t4 - 2];
            null !== r3[t4].destructorFunction && r3[t4].destructorFunction(i5);
          }
          if (f2) return r3[0].fromWireType(n4);
        }
        return a3(t3.apply(null, d2));
      };
    }
    function In(n3, r3, e3) {
      if (void 0 === n3[r3].overloadTable) {
        var t3 = n3[r3];
        n3[r3] = function() {
          return n3[r3].overloadTable.hasOwnProperty(arguments.length) || An("Function '" + e3 + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n3[r3].overloadTable + ")!"), n3[r3].overloadTable[arguments.length].apply(this, arguments);
        }, n3[r3].overloadTable = [], n3[r3].overloadTable[t3.argCount] = t3;
      }
    }
    function On(n3, r3, e3) {
      i3.hasOwnProperty(n3) ? ((void 0 === e3 || void 0 !== i3[n3].overloadTable && void 0 !== i3[n3].overloadTable[e3]) && An("Cannot register public name '" + n3 + "' twice"), In(i3, n3, n3), i3.hasOwnProperty(e3) && An("Cannot register multiple overloads of a function with the same number of arguments (" + e3 + ")!"), i3[n3].overloadTable[e3] = r3) : (i3[n3] = r3, void 0 !== e3 && (i3[n3].numArguments = e3));
    }
    function Hn(n3, r3) {
      for (var e3 = [], t3 = 0; t3 < n3; t3++) e3.push(w[r3 + 4 * t3 >> 2]);
      return e3;
    }
    function zn(n3, r3, e3) {
      i3.hasOwnProperty(n3) || pn("Replacing nonexistant public symbol"), void 0 !== i3[n3].overloadTable && void 0 !== e3 ? i3[n3].overloadTable[e3] = r3 : (i3[n3] = r3, i3[n3].argCount = e3);
    }
    function Dn(n3, r3, e3) {
      var t3 = i3["dynCall_" + n3];
      return e3 && e3.length ? t3.apply(null, [r3].concat(e3)) : t3.call(null, r3);
    }
    function Vn(n3, r3, e3) {
      return n3.includes("j") ? Dn(n3, r3, e3) : J(r3).apply(null, e3);
    }
    function Mn(n3, r3) {
      var e3 = [];
      return function() {
        return e3.length = 0, Object.assign(e3, arguments), Vn(n3, r3, e3);
      };
    }
    function Bn(n3, r3) {
      function e3() {
        return n3.includes("j") ? Mn(n3, r3) : J(r3);
      }
      n3 = wn(n3);
      var t3 = e3();
      return "function" != typeof t3 && An("unknown function pointer with signature " + n3 + ": " + r3), t3;
    }
    var qn = void 0;
    function Nn(n3) {
      var r3 = xr(n3), e3 = wn(r3);
      return Sr(r3), e3;
    }
    function Ln(n3, r3) {
      var e3 = [], t3 = {};
      function i4(n4) {
        t3[n4] || on[n4] || (an[n4] ? an[n4].forEach(i4) : (e3.push(n4), t3[n4] = true));
      }
      throw r3.forEach(i4), new qn(n3 + ": " + e3.map(Nn).join([", "]));
    }
    function Gn(n3, r3, e3, t3, i4, o4, a2) {
      var u2 = Hn(r3, e3);
      n3 = wn(n3), i4 = Bn(t3, i4), On(n3, function() {
        Ln("Cannot call " + n3 + " due to unbound types", u2);
      }, r3 - 1), vn([], u2, function(e4) {
        var t4 = [e4[0], null].concat(e4.slice(1));
        return zn(n3, Un(n3, t4, null, i4, o4), r3 - 1), [];
      });
    }
    function Xn(n3, r3, e3) {
      switch (r3) {
        case 0:
          return e3 ? function(n4) {
            return h[n4];
          } : function(n4) {
            return m[n4];
          };
        case 1:
          return e3 ? function(n4) {
            return g[n4 >> 1];
          } : function(n4) {
            return y[n4 >> 1];
          };
        case 2:
          return e3 ? function(n4) {
            return _[n4 >> 2];
          } : function(n4) {
            return w[n4 >> 2];
          };
        default:
          throw new TypeError("Unknown integer type: " + n3);
      }
    }
    function Zn(n3, r3, e3, t3, i4) {
      r3 = wn(r3);
      var o4 = gn(e3), a2 = (n4) => n4;
      if (0 === t3) {
        var u2 = 32 - 8 * e3;
        a2 = (n4) => n4 << u2 >>> u2;
      }
      var c2 = r3.includes("unsigned"), f2 = (n4, r4) => {
      };
      Tn(n3, { name: r3, fromWireType: a2, toWireType: c2 ? function(n4, r4) {
        return f2(r4, this.name), r4 >>> 0;
      } : function(n4, r4) {
        return f2(r4, this.name), r4;
      }, argPackAdvance: 8, readValueFromPointer: Xn(r3, o4, 0 !== t3), destructorFunction: null });
    }
    function $n(n3, r3, e3) {
      var t3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r3];
      function i4(n4) {
        var r4 = w, e4 = r4[n4 >>= 2], i5 = r4[n4 + 1];
        return new t3(r4.buffer, i5, e4);
      }
      Tn(n3, { name: e3 = wn(e3), fromWireType: i4, argPackAdvance: 8, readValueFromPointer: i4 }, { ignoreDuplicateRegistrations: true });
    }
    function Jn(n3, r3, e3, t3) {
      if (!(t3 > 0)) return 0;
      for (var i4 = e3, o4 = e3 + t3 - 1, a2 = 0; a2 < n3.length; ++a2) {
        var u2 = n3.charCodeAt(a2);
        if (u2 >= 55296 && u2 <= 57343 && (u2 = 65536 + ((1023 & u2) << 10) | 1023 & n3.charCodeAt(++a2)), u2 <= 127) {
          if (e3 >= o4) break;
          r3[e3++] = u2;
        } else if (u2 <= 2047) {
          if (e3 + 1 >= o4) break;
          r3[e3++] = 192 | u2 >> 6, r3[e3++] = 128 | 63 & u2;
        } else if (u2 <= 65535) {
          if (e3 + 2 >= o4) break;
          r3[e3++] = 224 | u2 >> 12, r3[e3++] = 128 | u2 >> 6 & 63, r3[e3++] = 128 | 63 & u2;
        } else {
          if (e3 + 3 >= o4) break;
          r3[e3++] = 240 | u2 >> 18, r3[e3++] = 128 | u2 >> 12 & 63, r3[e3++] = 128 | u2 >> 6 & 63, r3[e3++] = 128 | 63 & u2;
        }
      }
      return r3[e3] = 0, e3 - i4;
    }
    function Kn(n3, r3, e3) {
      return Jn(n3, m, r3, e3);
    }
    function Qn(n3) {
      for (var r3 = 0, e3 = 0; e3 < n3.length; ++e3) {
        var t3 = n3.charCodeAt(e3);
        t3 <= 127 ? r3++ : t3 <= 2047 ? r3 += 2 : t3 >= 55296 && t3 <= 57343 ? (r3 += 4, ++e3) : r3 += 3;
      }
      return r3;
    }
    var Yn = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
    function nr(n3, r3, e3) {
      for (var t3 = r3 + e3, i4 = r3; n3[i4] && !(i4 >= t3); ) ++i4;
      if (i4 - r3 > 16 && n3.buffer && Yn) return Yn.decode(n3.subarray(r3, i4));
      for (var o4 = ""; r3 < i4; ) {
        var a2 = n3[r3++];
        if (128 & a2) {
          var u2 = 63 & n3[r3++];
          if (192 != (224 & a2)) {
            var c2 = 63 & n3[r3++];
            if ((a2 = 224 == (240 & a2) ? (15 & a2) << 12 | u2 << 6 | c2 : (7 & a2) << 18 | u2 << 12 | c2 << 6 | 63 & n3[r3++]) < 65536) o4 += String.fromCharCode(a2);
            else {
              var f2 = a2 - 65536;
              o4 += String.fromCharCode(55296 | f2 >> 10, 56320 | 1023 & f2);
            }
          } else o4 += String.fromCharCode((31 & a2) << 6 | u2);
        } else o4 += String.fromCharCode(a2);
      }
      return o4;
    }
    function rr(n3, r3) {
      return n3 ? nr(m, n3, r3) : "";
    }
    function er(n3, r3) {
      var e3 = "std::string" === (r3 = wn(r3));
      Tn(n3, { name: r3, fromWireType: function(n4) {
        var r4, t3 = w[n4 >> 2], i4 = n4 + 4;
        if (e3) for (var o4 = i4, a2 = 0; a2 <= t3; ++a2) {
          var u2 = i4 + a2;
          if (a2 == t3 || 0 == m[u2]) {
            var c2 = rr(o4, u2 - o4);
            void 0 === r4 ? r4 = c2 : (r4 += String.fromCharCode(0), r4 += c2), o4 = u2 + 1;
          }
        }
        else {
          var f2 = new Array(t3);
          for (a2 = 0; a2 < t3; ++a2) f2[a2] = String.fromCharCode(m[i4 + a2]);
          r4 = f2.join("");
        }
        return Sr(n4), r4;
      }, toWireType: function(n4, r4) {
        var t3;
        r4 instanceof ArrayBuffer && (r4 = new Uint8Array(r4));
        var i4 = "string" == typeof r4;
        i4 || r4 instanceof Uint8Array || r4 instanceof Uint8ClampedArray || r4 instanceof Int8Array || An("Cannot pass non-string to std::string"), t3 = e3 && i4 ? Qn(r4) : r4.length;
        var o4 = Rr(4 + t3 + 1), a2 = o4 + 4;
        if (w[o4 >> 2] = t3, e3 && i4) Kn(r4, a2, t3 + 1);
        else if (i4) for (var u2 = 0; u2 < t3; ++u2) {
          var c2 = r4.charCodeAt(u2);
          c2 > 255 && (Sr(a2), An("String has UTF-16 code units that do not fit in 8 bits")), m[a2 + u2] = c2;
        }
        else for (u2 = 0; u2 < t3; ++u2) m[a2 + u2] = r4[u2];
        return null !== n4 && n4.push(Sr, o4), o4;
      }, argPackAdvance: 8, readValueFromPointer: en, destructorFunction: function(n4) {
        Sr(n4);
      } });
    }
    var tr = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
    function ir(n3, r3) {
      for (var e3 = n3, t3 = e3 >> 1, i4 = t3 + r3 / 2; !(t3 >= i4) && y[t3]; ) ++t3;
      if ((e3 = t3 << 1) - n3 > 32 && tr) return tr.decode(m.subarray(n3, e3));
      for (var o4 = "", a2 = 0; !(a2 >= r3 / 2); ++a2) {
        var u2 = g[n3 + 2 * a2 >> 1];
        if (0 == u2) break;
        o4 += String.fromCharCode(u2);
      }
      return o4;
    }
    function or(n3, r3, e3) {
      if (void 0 === e3 && (e3 = 2147483647), e3 < 2) return 0;
      for (var t3 = r3, i4 = (e3 -= 2) < 2 * n3.length ? e3 / 2 : n3.length, o4 = 0; o4 < i4; ++o4) {
        var a2 = n3.charCodeAt(o4);
        g[r3 >> 1] = a2, r3 += 2;
      }
      return g[r3 >> 1] = 0, r3 - t3;
    }
    function ar(n3) {
      return 2 * n3.length;
    }
    function ur(n3, r3) {
      for (var e3 = 0, t3 = ""; !(e3 >= r3 / 4); ) {
        var i4 = _[n3 + 4 * e3 >> 2];
        if (0 == i4) break;
        if (++e3, i4 >= 65536) {
          var o4 = i4 - 65536;
          t3 += String.fromCharCode(55296 | o4 >> 10, 56320 | 1023 & o4);
        } else t3 += String.fromCharCode(i4);
      }
      return t3;
    }
    function cr(n3, r3, e3) {
      if (void 0 === e3 && (e3 = 2147483647), e3 < 4) return 0;
      for (var t3 = r3, i4 = t3 + e3 - 4, o4 = 0; o4 < n3.length; ++o4) {
        var a2 = n3.charCodeAt(o4);
        if (a2 >= 55296 && a2 <= 57343 && (a2 = 65536 + ((1023 & a2) << 10) | 1023 & n3.charCodeAt(++o4)), _[r3 >> 2] = a2, (r3 += 4) + 4 > i4) break;
      }
      return _[r3 >> 2] = 0, r3 - t3;
    }
    function fr(n3) {
      for (var r3 = 0, e3 = 0; e3 < n3.length; ++e3) {
        var t3 = n3.charCodeAt(e3);
        t3 >= 55296 && t3 <= 57343 && ++e3, r3 += 4;
      }
      return r3;
    }
    function sr(n3, r3, e3) {
      var t3, i4, o4, a2, u2;
      e3 = wn(e3), 2 === r3 ? (t3 = ir, i4 = or, a2 = ar, o4 = () => y, u2 = 1) : 4 === r3 && (t3 = ur, i4 = cr, a2 = fr, o4 = () => w, u2 = 2), Tn(n3, { name: e3, fromWireType: function(n4) {
        for (var e4, i5 = w[n4 >> 2], a3 = o4(), c2 = n4 + 4, f2 = 0; f2 <= i5; ++f2) {
          var s2 = n4 + 4 + f2 * r3;
          if (f2 == i5 || 0 == a3[s2 >> u2]) {
            var l2 = t3(c2, s2 - c2);
            void 0 === e4 ? e4 = l2 : (e4 += String.fromCharCode(0), e4 += l2), c2 = s2 + r3;
          }
        }
        return Sr(n4), e4;
      }, toWireType: function(n4, t4) {
        "string" != typeof t4 && An("Cannot pass non-string to C++ string type " + e3);
        var o5 = a2(t4), c2 = Rr(4 + o5 + r3);
        return w[c2 >> 2] = o5 >> u2, i4(t4, c2 + 4, o5 + r3), null !== n4 && n4.push(Sr, c2), c2;
      }, argPackAdvance: 8, readValueFromPointer: en, destructorFunction: function(n4) {
        Sr(n4);
      } });
    }
    function lr(n3, r3, e3, t3, i4, o4) {
      nn[n3] = { name: wn(r3), rawConstructor: Bn(e3, t3), rawDestructor: Bn(i4, o4), fields: [] };
    }
    function dr(n3, r3, e3, t3, i4, o4, a2, u2, c2, f2) {
      nn[n3].fields.push({ fieldName: wn(r3), getterReturnType: e3, getter: Bn(t3, i4), getterContext: o4, setterArgumentType: a2, setter: Bn(u2, c2), setterContext: f2 });
    }
    function pr(n3, r3) {
      Tn(n3, { isVoid: true, name: r3 = wn(r3), argPackAdvance: 0, fromWireType: function() {
      }, toWireType: function(n4, r4) {
      } });
    }
    function vr(n3) {
      n3 > 4 && (En.get(n3).refcount += 1);
    }
    var hr = {};
    function mr(n3) {
      var r3 = hr[n3];
      return void 0 === r3 ? wn(n3) : r3;
    }
    function gr(n3) {
      return Fn.toHandle(mr(n3));
    }
    function yr(n3, r3) {
      var e3 = on[n3];
      return void 0 === e3 && An(r3 + " has unknown type " + Nn(n3)), e3;
    }
    function _r(n3, r3) {
      var e3 = (n3 = yr(n3, "_emval_take_value")).readValueFromPointer(r3);
      return Fn.toHandle(e3);
    }
    function wr() {
      D("");
    }
    function br(n3, r3, e3) {
      m.copyWithin(n3, r3, r3 + e3);
    }
    function Ar() {
      return 2147483648;
    }
    function Tr(n3) {
      var r3 = d.buffer;
      try {
        return d.grow(n3 - r3.byteLength + 65535 >>> 16), P(), 1;
      } catch (e3) {
      }
    }
    function Cr(n3) {
      var r3 = m.length;
      n3 >>>= 0;
      var e3 = Ar();
      if (n3 > e3) return false;
      let t3 = (n4, r4) => n4 + (r4 - n4 % r4) % r4;
      for (var i4 = 1; i4 <= 4; i4 *= 2) {
        var o4 = r3 * (1 + 0.2 / i4);
        if (o4 = Math.min(o4, n3 + 100663296), Tr(Math.min(e3, t3(Math.max(n3, o4), 65536)))) return true;
      }
      return false;
    }
    function Pr(n3) {
      return 52;
    }
    function Er(n3, r3, e3, t3, i4) {
      return 70;
    }
    var Wr = [null, [], []];
    function kr(n3, r3) {
      var e3 = Wr[n3];
      0 === r3 || 10 === r3 ? ((1 === n3 ? p : v)(nr(e3, 0)), e3.length = 0) : e3.push(r3);
    }
    function jr(n3, r3, e3, t3) {
      for (var i4 = 0, o4 = 0; o4 < e3; o4++) {
        var a2 = w[r3 >> 2], u2 = w[r3 + 4 >> 2];
        r3 += 8;
        for (var c2 = 0; c2 < u2; c2++) kr(n3, m[a2 + c2]);
        i4 += u2;
      }
      return w[t3 >> 2] = i4, 0;
    }
    dn = i3.InternalError = ln(Error, "InternalError"), yn(), bn = i3.BindingError = ln(Error, "BindingError"), jn(), qn = i3.UnboundTypeError = ln(Error, "UnboundTypeError");
    var Fr = { __call_sighandler: K, __cxa_throw: Y, _embind_finalize_value_object: hn, _embind_register_bigint: mn, _embind_register_bool: Cn, _embind_register_emval: Rn, _embind_register_float: xn, _embind_register_function: Gn, _embind_register_integer: Zn, _embind_register_memory_view: $n, _embind_register_std_string: er, _embind_register_std_wstring: sr, _embind_register_value_object: lr, _embind_register_value_object_field: dr, _embind_register_void: pr, _emval_decref: Wn, _emval_incref: vr, _emval_new_cstring: gr, _emval_take_value: _r, abort: wr, emscripten_memcpy_big: br, emscripten_resize_heap: Cr, fd_close: Pr, fd_seek: Er, fd_write: jr };
    X();
    var Rr = function() {
      return (Rr = i3.asm.malloc).apply(null, arguments);
    }, Sr = function() {
      return (Sr = i3.asm.free).apply(null, arguments);
    }, xr = function() {
      return (xr = i3.asm.__getTypeName).apply(null, arguments);
    };
    i3.__embind_initialize_bindings = function() {
      return (i3.__embind_initialize_bindings = i3.asm._embind_initialize_bindings).apply(null, arguments);
    };
    var Ur, Ir = function() {
      return (Ir = i3.asm.__cxa_is_pointer_type).apply(null, arguments);
    };
    function Or() {
      function n3() {
        Ur || (Ur = true, i3.calledRun = true, C || (F(), r2(i3), i3.onRuntimeInitialized && i3.onRuntimeInitialized(), R()));
      }
      I > 0 || (j(), I > 0 || (i3.setStatus ? (i3.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          i3.setStatus("");
        }, 1), n3();
      }, 1)) : n3()));
    }
    if (i3.dynCall_vij = function() {
      return (i3.dynCall_vij = i3.asm.dynCall_vij).apply(null, arguments);
    }, i3.dynCall_jiji = function() {
      return (i3.dynCall_jiji = i3.asm.dynCall_jiji).apply(null, arguments);
    }, O = function n3() {
      Ur || Or(), Ur || (O = n3);
    }, i3.preInit) for ("function" == typeof i3.preInit && (i3.preInit = [i3.preInit]); i3.preInit.length > 0; ) i3.preInit.pop()();
    return Or(), n2.ready;
  }, n.exports = i2), e.exports;
  var n, t2, i2;
}
var i = o(t());
var o2 = Object.freeze(Object.defineProperty({ __proto__: null, default: i }, Symbol.toStringTag, { value: "Module" }));
export {
  o2 as i
};
//# sourceMappingURL=i3s-ONM5CED6.js.map
