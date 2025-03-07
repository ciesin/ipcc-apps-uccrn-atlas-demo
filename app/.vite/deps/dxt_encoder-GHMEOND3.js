import {
  __publicField
} from "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/chunks/dxt_encoder.js
var r;
var _a;
var e = (r = "undefined" != typeof document ? (_a = document.currentScript) == null ? void 0 : _a.src : void 0, function(e2 = {}) {
  var t, n, o = e2, a = new Promise((r2, e3) => {
    t = r2, n = e3;
  }), i = "object" == typeof window, s = "undefined" != typeof WorkerGlobalScope;
  "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node && process.type;
  var l, u, d = Object.assign({}, o), c = "./this.program", f = "";
  function h(r2) {
    return o.locateFile ? o.locateFile(r2, f) : f + r2;
  }
  (i || s) && (s ? f = self.location.href : "undefined" != typeof document && document.currentScript && (f = document.currentScript.src), r && (f = r), f = f.startsWith("blob:") ? "" : f.substr(0, f.replace(/[?#].*/, "").lastIndexOf("/") + 1), s && (u = (r2) => {
    var e3 = new XMLHttpRequest();
    return e3.open("GET", r2, false), e3.responseType = "arraybuffer", e3.send(null), new Uint8Array(e3.response);
  }), l = async (r2) => {
    var e3 = await fetch(r2, { credentials: "same-origin" });
    if (e3.ok) return e3.arrayBuffer();
    throw new Error(e3.status + " : " + e3.url);
  });
  var p = o.print || console.log.bind(console), m = o.printErr || console.error.bind(console);
  Object.assign(o, d), d = null, o.arguments && o.arguments, o.thisProgram && (c = o.thisProgram);
  var v, w, y, g, E, k, b, _, A, F = o.wasmBinary, P = false;
  function D() {
    var r2 = v.buffer;
    o.HEAP8 = w = new Int8Array(r2), o.HEAP16 = g = new Int16Array(r2), o.HEAPU8 = y = new Uint8Array(r2), o.HEAPU16 = E = new Uint16Array(r2), o.HEAP32 = k = new Int32Array(r2), o.HEAPU32 = b = new Uint32Array(r2), o.HEAPF32 = _ = new Float32Array(r2), o.HEAPF64 = A = new Float64Array(r2);
  }
  var S = [], T = [], C = [];
  function M() {
    if (o.preRun) for ("function" == typeof o.preRun && (o.preRun = [o.preRun]); o.preRun.length; ) R(o.preRun.shift());
    rr(S);
  }
  function j() {
    o.noFSInit || ft.initialized || ft.init(), ft.ignorePermissions = false, rr(T);
  }
  function x() {
    if (o.postRun) for ("function" == typeof o.postRun && (o.postRun = [o.postRun]); o.postRun.length; ) N(o.postRun.shift());
    rr(C);
  }
  function R(r2) {
    S.unshift(r2);
  }
  function $(r2) {
    T.unshift(r2);
  }
  function N(r2) {
    C.unshift(r2);
  }
  var z = 0, O = null;
  function W(r2) {
    var _a2;
    z++, (_a2 = o.monitorRunDependencies) == null ? void 0 : _a2.call(o, z);
  }
  function B(r2) {
    var _a2;
    if (z--, (_a2 = o.monitorRunDependencies) == null ? void 0 : _a2.call(o, z), 0 == z && O) {
      var e3 = O;
      O = null, e3();
    }
  }
  function U(r2) {
    var _a2;
    (_a2 = o.onAbort) == null ? void 0 : _a2.call(o, r2), m(r2 = "Aborted(" + r2 + ")"), P = true, r2 += ". Build with -sASSERTIONS for more info.";
    var e3 = new WebAssembly.RuntimeError(r2);
    throw n(e3), e3;
  }
  var L, H, I, V = "data:application/octet-stream;base64,", q = (r2) => r2.startsWith(V);
  function X() {
    var r2 = "dxt_encoder.wasm";
    return q(r2) ? r2 : h(r2);
  }
  function G(r2) {
    if (r2 == L && F) return new Uint8Array(F);
    if (u) return u(r2);
    throw "both async and sync fetching of the wasm failed";
  }
  async function K(r2) {
    if (!F) try {
      var e3 = await l(r2);
      return new Uint8Array(e3);
    } catch {
    }
    return G(r2);
  }
  async function J(r2, e3) {
    try {
      var t2 = await K(r2);
      return await WebAssembly.instantiate(t2, e3);
    } catch (n2) {
      m(`failed to asynchronously prepare wasm: ${n2}`), U(n2);
    }
  }
  async function Q(r2, e3, t2) {
    if (!r2 && "function" == typeof WebAssembly.instantiateStreaming && !q(e3) && "function" == typeof fetch) try {
      var n2 = fetch(e3, { credentials: "same-origin" });
      return await WebAssembly.instantiateStreaming(n2, t2);
    } catch (o2) {
      m(`wasm streaming compile failed: ${o2}`), m("falling back to ArrayBuffer instantiation");
    }
    return J(e3, t2);
  }
  function Y() {
    return { a: bt };
  }
  async function Z() {
    function r2(r3, e4) {
      return kt = r3.exports, v = kt.G, D(), zr = kt.J, $(kt.H), B(), kt;
    }
    function e3(e4) {
      r2(e4.instance);
    }
    W();
    var t2 = Y();
    if (o.instantiateWasm) try {
      return o.instantiateWasm(t2, r2);
    } catch (i2) {
      m(`Module.instantiateWasm callback failed with error: ${i2}`), n(i2);
    }
    L ?? (L = X());
    try {
      var a2 = await Q(F, L, t2);
      return e3(a2), a2;
    } catch (i2) {
      return void n(i2);
    }
  }
  var rr = (r2) => {
    for (; r2.length > 0; ) r2.shift()(o);
  };
  o.noExitRuntime;
  class er {
    constructor(r2) {
      this.excPtr = r2, this.ptr = r2 - 24;
    }
    set_type(r2) {
      b[this.ptr + 4 >> 2] = r2;
    }
    get_type() {
      return b[this.ptr + 4 >> 2];
    }
    set_destructor(r2) {
      b[this.ptr + 8 >> 2] = r2;
    }
    get_destructor() {
      return b[this.ptr + 8 >> 2];
    }
    set_caught(r2) {
      r2 = r2 ? 1 : 0, w[this.ptr + 12] = r2;
    }
    get_caught() {
      return 0 != w[this.ptr + 12];
    }
    set_rethrown(r2) {
      r2 = r2 ? 1 : 0, w[this.ptr + 13] = r2;
    }
    get_rethrown() {
      return 0 != w[this.ptr + 13];
    }
    init(r2, e3) {
      this.set_adjusted_ptr(0), this.set_type(r2), this.set_destructor(e3);
    }
    set_adjusted_ptr(r2) {
      b[this.ptr + 16 >> 2] = r2;
    }
    get_adjusted_ptr() {
      return b[this.ptr + 16 >> 2];
    }
  }
  var tr, nr, or, ar = (r2, e3, t2) => {
    throw new er(r2).init(e3, t2), r2;
  }, ir = () => U(""), sr = (r2, e3, t2, n2, o2) => {
  }, lr = () => {
    for (var r2 = new Array(256), e3 = 0; e3 < 256; ++e3) r2[e3] = String.fromCharCode(e3);
    tr = r2;
  }, ur = (r2) => {
    for (var e3 = "", t2 = r2; y[t2]; ) e3 += tr[y[t2++]];
    return e3;
  }, dr = {}, cr = {}, fr = {}, hr = (r2) => {
    throw new nr(r2);
  }, pr = (r2) => {
    throw new or(r2);
  }, mr = (r2, e3, t2) => {
    function n2(e4) {
      var n3 = t2(e4);
      n3.length !== r2.length && pr("Mismatched type converter count");
      for (var o3 = 0; o3 < r2.length; ++o3) wr(r2[o3], n3[o3]);
    }
    r2.forEach((r3) => fr[r3] = e3);
    var o2 = new Array(e3.length), a2 = [], i2 = 0;
    e3.forEach((r3, e4) => {
      cr.hasOwnProperty(r3) ? o2[e4] = cr[r3] : (a2.push(r3), dr.hasOwnProperty(r3) || (dr[r3] = []), dr[r3].push(() => {
        o2[e4] = cr[r3], ++i2 === a2.length && n2(o2);
      }));
    }), 0 === a2.length && n2(o2);
  };
  function vr(r2, e3, t2 = {}) {
    var n2 = e3.name;
    if (r2 || hr(`type "${n2}" must have a positive integer typeid pointer`), cr.hasOwnProperty(r2)) {
      if (t2.ignoreDuplicateRegistrations) return;
      hr(`Cannot register type '${n2}' twice`);
    }
    if (cr[r2] = e3, delete fr[r2], dr.hasOwnProperty(r2)) {
      var o2 = dr[r2];
      delete dr[r2], o2.forEach((r3) => r3());
    }
  }
  function wr(r2, e3, t2 = {}) {
    return vr(r2, e3, t2);
  }
  var yr = 8, gr = (r2, e3, t2, n2) => {
    wr(r2, { name: e3 = ur(e3), fromWireType: function(r3) {
      return !!r3;
    }, toWireType: function(r3, e4) {
      return e4 ? t2 : n2;
    }, argPackAdvance: yr, readValueFromPointer: function(r3) {
      return this.fromWireType(y[r3]);
    }, destructorFunction: null });
  }, Er = [], kr = [], br = (r2) => {
    r2 > 9 && 0 == --kr[r2 + 1] && (kr[r2] = void 0, Er.push(r2));
  }, _r = () => kr.length / 2 - 5 - Er.length, Ar = () => {
    kr.push(0, 1, void 0, 1, null, 1, true, 1, false, 1), o.count_emval_handles = _r;
  }, Fr = { toValue: (r2) => (r2 || hr("Cannot use deleted val. handle = " + r2), kr[r2]), toHandle: (r2) => {
    switch (r2) {
      case void 0:
        return 2;
      case null:
        return 4;
      case true:
        return 6;
      case false:
        return 8;
      default: {
        const e3 = Er.pop() || kr.length;
        return kr[e3] = r2, kr[e3 + 1] = 1, e3;
      }
    }
  } };
  function Pr(r2) {
    return this.fromWireType(b[r2 >> 2]);
  }
  var Dr = { name: "emscripten::val", fromWireType: (r2) => {
    var e3 = Fr.toValue(r2);
    return br(r2), e3;
  }, toWireType: (r2, e3) => Fr.toHandle(e3), argPackAdvance: yr, readValueFromPointer: Pr, destructorFunction: null }, Sr = (r2) => wr(r2, Dr), Tr = (r2, e3) => {
    switch (e3) {
      case 4:
        return function(r3) {
          return this.fromWireType(_[r3 >> 2]);
        };
      case 8:
        return function(r3) {
          return this.fromWireType(A[r3 >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${e3}): ${r2}`);
    }
  }, Cr = (r2, e3, t2) => {
    wr(r2, { name: e3 = ur(e3), fromWireType: (r3) => r3, toWireType: (r3, e4) => e4, argPackAdvance: yr, readValueFromPointer: Tr(e3, t2), destructorFunction: null });
  }, Mr = (r2, e3) => Object.defineProperty(e3, "name", { value: r2 }), jr = (r2) => {
    for (; r2.length; ) {
      var e3 = r2.pop();
      r2.pop()(e3);
    }
  };
  function xr(r2) {
    for (var e3 = 1; e3 < r2.length; ++e3) if (null !== r2[e3] && void 0 === r2[e3].destructorFunction) return true;
    return false;
  }
  function Rr(r2, e3) {
    if (!(r2 instanceof Function)) throw new TypeError(`new_ called with constructor type ${typeof r2} which is not a function`);
    var t2 = Mr(r2.name || "unknownFunctionName", function() {
    });
    t2.prototype = r2.prototype;
    var n2 = new t2(), o2 = r2.apply(n2, e3);
    return o2 instanceof Object ? o2 : n2;
  }
  function $r(r2, e3, t2, n2) {
    for (var o2 = xr(r2), a2 = r2.length - 2, i2 = [], s2 = ["fn"], l2 = 0; l2 < a2; ++l2) i2.push(`arg${l2}`), s2.push(`arg${l2}Wired`);
    i2 = i2.join(","), s2 = s2.join(",");
    var u2 = `return function (${i2}) {
`;
    o2 && (u2 += "var destructors = [];\n");
    var d2 = o2 ? "destructors" : "null", c2 = ["humanName", "throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
    for (l2 = 0; l2 < a2; ++l2) u2 += `var arg${l2}Wired = argType${l2}['toWireType'](${d2}, arg${l2});
`, c2.push(`argType${l2}`);
    if (u2 += (t2 || n2 ? "var rv = " : "") + `invoker(${s2});
`, o2) u2 += "runDestructors(destructors);\n";
    else for (l2 = 2; l2 < r2.length; ++l2) {
      var f2 = 1 === l2 ? "thisWired" : "arg" + (l2 - 2) + "Wired";
      null !== r2[l2].destructorFunction && (u2 += `${f2}_dtor(${f2});
`, c2.push(`${f2}_dtor`));
    }
    return t2 && (u2 += "var ret = retType['fromWireType'](rv);\nreturn ret;\n"), [c2, u2 += "}\n"];
  }
  function Nr(r2, e3, t2, n2, o2, a2) {
    var i2 = e3.length;
    i2 < 2 && hr("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var s2 = null !== e3[1] && null !== t2, l2 = xr(e3), u2 = "void" !== e3[0].name, d2 = [r2, hr, n2, o2, jr, e3[0], e3[1]], c2 = 0; c2 < i2 - 2; ++c2) d2.push(e3[c2 + 2]);
    if (!l2) for (c2 = 2; c2 < e3.length; ++c2) null !== e3[c2].destructorFunction && d2.push(e3[c2].destructorFunction);
    let [f2, h2] = $r(e3, s2, u2, a2);
    f2.push(h2);
    var p2 = Rr(Function, f2)(...d2);
    return Mr(r2, p2);
  }
  var zr, Or, Wr = (r2, e3, t2) => {
    if (void 0 === r2[e3].overloadTable) {
      var n2 = r2[e3];
      r2[e3] = function(...n3) {
        return r2[e3].overloadTable.hasOwnProperty(n3.length) || hr(`Function '${t2}' called with an invalid number of arguments (${n3.length}) - expects one of (${r2[e3].overloadTable})!`), r2[e3].overloadTable[n3.length].apply(this, n3);
      }, r2[e3].overloadTable = [], r2[e3].overloadTable[n2.argCount] = n2;
    }
  }, Br = (r2, e3, t2) => {
    o.hasOwnProperty(r2) ? ((void 0 === t2 || void 0 !== o[r2].overloadTable && void 0 !== o[r2].overloadTable[t2]) && hr(`Cannot register public name '${r2}' twice`), Wr(o, r2, r2), o[r2].overloadTable.hasOwnProperty(t2) && hr(`Cannot register multiple overloads of a function with the same number of arguments (${t2})!`), o[r2].overloadTable[t2] = e3) : (o[r2] = e3, o[r2].argCount = t2);
  }, Ur = (r2, e3) => {
    for (var t2 = [], n2 = 0; n2 < r2; n2++) t2.push(b[e3 + 4 * n2 >> 2]);
    return t2;
  }, Lr = (r2, e3, t2) => {
    o.hasOwnProperty(r2) || pr("Replacing nonexistent public symbol"), void 0 !== o[r2].overloadTable && void 0 !== t2 ? o[r2].overloadTable[t2] = e3 : (o[r2] = e3, o[r2].argCount = t2);
  }, Hr = (r2, e3, t2) => (r2 = r2.replace(/p/g, "i"), (0, o["dynCall_" + r2])(e3, ...t2)), Ir = [], Vr = (r2) => {
    var e3 = Ir[r2];
    return e3 || (r2 >= Ir.length && (Ir.length = r2 + 1), Ir[r2] = e3 = zr.get(r2)), e3;
  }, qr = (r2, e3, t2 = []) => r2.includes("j") ? Hr(r2, e3, t2) : Vr(e3)(...t2), Xr = (r2, e3) => (...t2) => qr(r2, e3, t2), Gr = (r2, e3) => {
    function t2() {
      return r2.includes("j") ? Xr(r2, e3) : Vr(e3);
    }
    r2 = ur(r2);
    var n2 = t2();
    return "function" != typeof n2 && hr(`unknown function pointer with signature ${r2}: ${e3}`), n2;
  }, Kr = (r2, e3) => {
    var t2 = Mr(e3, function(r3) {
      this.name = e3, this.message = r3;
      var t3 = new Error(r3).stack;
      void 0 !== t3 && (this.stack = this.toString() + "\n" + t3.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return t2.prototype = Object.create(r2.prototype), t2.prototype.constructor = t2, t2.prototype.toString = function() {
      return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
    }, t2;
  }, Jr = (r2) => {
    var e3 = At(r2), t2 = ur(e3);
    return Pt(e3), t2;
  }, Qr = (r2, e3) => {
    var t2 = [], n2 = {};
    function o2(r3) {
      n2[r3] || cr[r3] || (fr[r3] ? fr[r3].forEach(o2) : (t2.push(r3), n2[r3] = true));
    }
    throw e3.forEach(o2), new Or(`${r2}: ` + t2.map(Jr).join([", "]));
  }, Yr = (r2) => {
    const e3 = (r2 = r2.trim()).indexOf("(");
    return -1 !== e3 ? r2.substr(0, e3) : r2;
  }, Zr = (r2, e3, t2, n2, o2, a2, i2, s2) => {
    var l2 = Ur(e3, t2);
    r2 = ur(r2), r2 = Yr(r2), o2 = Gr(n2, o2), Br(r2, function() {
      Qr(`Cannot call ${r2} due to unbound types`, l2);
    }, e3 - 1), mr([], l2, (t3) => {
      var n3 = [t3[0], null].concat(t3.slice(1));
      return Lr(r2, Nr(r2, n3, null, o2, a2, i2), e3 - 1), [];
    });
  }, re = (r2, e3, t2) => {
    switch (e3) {
      case 1:
        return t2 ? (r3) => w[r3] : (r3) => y[r3];
      case 2:
        return t2 ? (r3) => g[r3 >> 1] : (r3) => E[r3 >> 1];
      case 4:
        return t2 ? (r3) => k[r3 >> 2] : (r3) => b[r3 >> 2];
      default:
        throw new TypeError(`invalid integer width (${e3}): ${r2}`);
    }
  }, ee = (r2, e3, t2, n2, o2) => {
    e3 = ur(e3);
    var a2 = (r3) => r3;
    if (0 === n2) {
      var i2 = 32 - 8 * t2;
      a2 = (r3) => r3 << i2 >>> i2;
    }
    var s2 = e3.includes("unsigned"), l2 = (r3, e4) => {
    };
    wr(r2, { name: e3, fromWireType: a2, toWireType: s2 ? function(r3, e4) {
      return l2(e4, this.name), e4 >>> 0;
    } : function(r3, e4) {
      return l2(e4, this.name), e4;
    }, argPackAdvance: yr, readValueFromPointer: re(e3, t2, 0 !== n2), destructorFunction: null });
  }, te = (r2, e3, t2) => {
    var n2 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e3];
    function o2(r3) {
      var e4 = b[r3 >> 2], t3 = b[r3 + 4 >> 2];
      return new n2(w.buffer, t3, e4);
    }
    wr(r2, { name: t2 = ur(t2), fromWireType: o2, argPackAdvance: yr, readValueFromPointer: o2 }, { ignoreDuplicateRegistrations: true });
  }, ne = (r2, e3, t2, n2) => {
    if (!(n2 > 0)) return 0;
    for (var o2 = t2, a2 = t2 + n2 - 1, i2 = 0; i2 < r2.length; ++i2) {
      var s2 = r2.charCodeAt(i2);
      if (s2 >= 55296 && s2 <= 57343 && (s2 = 65536 + ((1023 & s2) << 10) | 1023 & r2.charCodeAt(++i2)), s2 <= 127) {
        if (t2 >= a2) break;
        e3[t2++] = s2;
      } else if (s2 <= 2047) {
        if (t2 + 1 >= a2) break;
        e3[t2++] = 192 | s2 >> 6, e3[t2++] = 128 | 63 & s2;
      } else if (s2 <= 65535) {
        if (t2 + 2 >= a2) break;
        e3[t2++] = 224 | s2 >> 12, e3[t2++] = 128 | s2 >> 6 & 63, e3[t2++] = 128 | 63 & s2;
      } else {
        if (t2 + 3 >= a2) break;
        e3[t2++] = 240 | s2 >> 18, e3[t2++] = 128 | s2 >> 12 & 63, e3[t2++] = 128 | s2 >> 6 & 63, e3[t2++] = 128 | 63 & s2;
      }
    }
    return e3[t2] = 0, t2 - o2;
  }, oe = (r2, e3, t2) => ne(r2, y, e3, t2), ae = (r2) => {
    for (var e3 = 0, t2 = 0; t2 < r2.length; ++t2) {
      var n2 = r2.charCodeAt(t2);
      n2 <= 127 ? e3++ : n2 <= 2047 ? e3 += 2 : n2 >= 55296 && n2 <= 57343 ? (e3 += 4, ++t2) : e3 += 3;
    }
    return e3;
  }, ie = "undefined" != typeof TextDecoder ? new TextDecoder() : void 0, se = (r2, e3 = 0, t2 = NaN) => {
    for (var n2 = e3 + t2, o2 = e3; r2[o2] && !(o2 >= n2); ) ++o2;
    if (o2 - e3 > 16 && r2.buffer && ie) return ie.decode(r2.subarray(e3, o2));
    for (var a2 = ""; e3 < o2; ) {
      var i2 = r2[e3++];
      if (128 & i2) {
        var s2 = 63 & r2[e3++];
        if (192 != (224 & i2)) {
          var l2 = 63 & r2[e3++];
          if ((i2 = 224 == (240 & i2) ? (15 & i2) << 12 | s2 << 6 | l2 : (7 & i2) << 18 | s2 << 12 | l2 << 6 | 63 & r2[e3++]) < 65536) a2 += String.fromCharCode(i2);
          else {
            var u2 = i2 - 65536;
            a2 += String.fromCharCode(55296 | u2 >> 10, 56320 | 1023 & u2);
          }
        } else a2 += String.fromCharCode((31 & i2) << 6 | s2);
      } else a2 += String.fromCharCode(i2);
    }
    return a2;
  }, le = (r2, e3) => r2 ? se(y, r2, e3) : "", ue = (r2, e3) => {
    wr(r2, { name: e3 = ur(e3), fromWireType(r3) {
      for (var e4, t2 = b[r3 >> 2], n2 = r3 + 4, o2 = n2, a2 = 0; a2 <= t2; ++a2) {
        var i2 = n2 + a2;
        if (a2 == t2 || 0 == y[i2]) {
          var s2 = le(o2, i2 - o2);
          void 0 === e4 ? e4 = s2 : (e4 += String.fromCharCode(0), e4 += s2), o2 = i2 + 1;
        }
      }
      return Pt(r3), e4;
    }, toWireType(r3, e4) {
      var t2;
      e4 instanceof ArrayBuffer && (e4 = new Uint8Array(e4));
      var n2 = "string" == typeof e4;
      n2 || e4 instanceof Uint8Array || e4 instanceof Uint8ClampedArray || e4 instanceof Int8Array || hr("Cannot pass non-string to std::string"), t2 = n2 ? ae(e4) : e4.length;
      var o2 = Ft(4 + t2 + 1), a2 = o2 + 4;
      if (b[o2 >> 2] = t2, n2) oe(e4, a2, t2 + 1);
      else if (n2) for (var i2 = 0; i2 < t2; ++i2) {
        var s2 = e4.charCodeAt(i2);
        s2 > 255 && (Pt(a2), hr("String has UTF-16 code units that do not fit in 8 bits")), y[a2 + i2] = s2;
      }
      else for (i2 = 0; i2 < t2; ++i2) y[a2 + i2] = e4[i2];
      return null !== r3 && r3.push(Pt, o2), o2;
    }, argPackAdvance: yr, readValueFromPointer: Pr, destructorFunction(r3) {
      Pt(r3);
    } });
  }, de = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, ce = (r2, e3) => {
    for (var t2 = r2, n2 = t2 >> 1, o2 = n2 + e3 / 2; !(n2 >= o2) && E[n2]; ) ++n2;
    if ((t2 = n2 << 1) - r2 > 32 && de) return de.decode(y.subarray(r2, t2));
    for (var a2 = "", i2 = 0; !(i2 >= e3 / 2); ++i2) {
      var s2 = g[r2 + 2 * i2 >> 1];
      if (0 == s2) break;
      a2 += String.fromCharCode(s2);
    }
    return a2;
  }, fe = (r2, e3, t2) => {
    if (t2 ?? (t2 = 2147483647), t2 < 2) return 0;
    for (var n2 = e3, o2 = (t2 -= 2) < 2 * r2.length ? t2 / 2 : r2.length, a2 = 0; a2 < o2; ++a2) {
      var i2 = r2.charCodeAt(a2);
      g[e3 >> 1] = i2, e3 += 2;
    }
    return g[e3 >> 1] = 0, e3 - n2;
  }, he = (r2) => 2 * r2.length, pe = (r2, e3) => {
    for (var t2 = 0, n2 = ""; !(t2 >= e3 / 4); ) {
      var o2 = k[r2 + 4 * t2 >> 2];
      if (0 == o2) break;
      if (++t2, o2 >= 65536) {
        var a2 = o2 - 65536;
        n2 += String.fromCharCode(55296 | a2 >> 10, 56320 | 1023 & a2);
      } else n2 += String.fromCharCode(o2);
    }
    return n2;
  }, me = (r2, e3, t2) => {
    if (t2 ?? (t2 = 2147483647), t2 < 4) return 0;
    for (var n2 = e3, o2 = n2 + t2 - 4, a2 = 0; a2 < r2.length; ++a2) {
      var i2 = r2.charCodeAt(a2);
      if (i2 >= 55296 && i2 <= 57343 && (i2 = 65536 + ((1023 & i2) << 10) | 1023 & r2.charCodeAt(++a2)), k[e3 >> 2] = i2, (e3 += 4) + 4 > o2) break;
    }
    return k[e3 >> 2] = 0, e3 - n2;
  }, ve = (r2) => {
    for (var e3 = 0, t2 = 0; t2 < r2.length; ++t2) {
      var n2 = r2.charCodeAt(t2);
      n2 >= 55296 && n2 <= 57343 && ++t2, e3 += 4;
    }
    return e3;
  }, we = (r2, e3, t2) => {
    var n2, o2, a2, i2;
    t2 = ur(t2), 2 === e3 ? (n2 = ce, o2 = fe, i2 = he, a2 = (r3) => E[r3 >> 1]) : 4 === e3 && (n2 = pe, o2 = me, i2 = ve, a2 = (r3) => b[r3 >> 2]), wr(r2, { name: t2, fromWireType: (r3) => {
      for (var t3, o3 = b[r3 >> 2], i3 = r3 + 4, s2 = 0; s2 <= o3; ++s2) {
        var l2 = r3 + 4 + s2 * e3;
        if (s2 == o3 || 0 == a2(l2)) {
          var u2 = n2(i3, l2 - i3);
          void 0 === t3 ? t3 = u2 : (t3 += String.fromCharCode(0), t3 += u2), i3 = l2 + e3;
        }
      }
      return Pt(r3), t3;
    }, toWireType: (r3, n3) => {
      "string" != typeof n3 && hr(`Cannot pass non-string to C++ string type ${t2}`);
      var a3 = i2(n3), s2 = Ft(4 + a3 + e3);
      return b[s2 >> 2] = a3 / e3, o2(n3, s2 + 4, a3 + e3), null !== r3 && r3.push(Pt, s2), s2;
    }, argPackAdvance: yr, readValueFromPointer: Pr, destructorFunction(r3) {
      Pt(r3);
    } });
  }, ye = (r2, e3) => {
    wr(r2, { isVoid: true, name: e3 = ur(e3), argPackAdvance: 0, fromWireType: () => {
    }, toWireType: (r3, e4) => {
    } });
  }, ge = (r2, e3, t2) => y.copyWithin(r2, e3, e3 + t2), Ee = (r2, e3) => {
    var t2 = cr[r2];
    return void 0 === t2 && hr(`${e3} has unknown type ${Jr(r2)}`), t2;
  }, ke = (r2, e3, t2) => {
    var n2 = [], o2 = r2.toWireType(n2, t2);
    return n2.length && (b[e3 >> 2] = Fr.toHandle(n2)), o2;
  }, be = (r2, e3, t2) => (r2 = Fr.toValue(r2), e3 = Ee(e3, "emval::as"), ke(e3, t2, r2)), _e = [], Ae = (r2, e3, t2, n2) => (r2 = _e[r2])(null, e3 = Fr.toValue(e3), t2, n2), Fe = {}, Pe = (r2) => {
    var e3 = Fe[r2];
    return void 0 === e3 ? ur(r2) : e3;
  }, De = (r2, e3, t2, n2, o2) => (r2 = _e[r2])(e3 = Fr.toValue(e3), e3[t2 = Pe(t2)], n2, o2), Se = () => "object" == typeof globalThis ? globalThis : Function("return this")(), Te = (r2) => 0 === r2 ? Fr.toHandle(Se()) : (r2 = Pe(r2), Fr.toHandle(Se()[r2])), Ce = (r2) => {
    var e3 = _e.length;
    return _e.push(r2), e3;
  }, Me = (r2, e3) => {
    for (var t2 = new Array(r2), n2 = 0; n2 < r2; ++n2) t2[n2] = Ee(b[e3 + 4 * n2 >> 2], "parameter " + n2);
    return t2;
  }, je = (r2, e3, t2) => {
    var n2 = Me(r2, e3), o2 = n2.shift();
    r2--;
    var a2 = "return function (obj, func, destructorsRef, args) {\n", i2 = 0, s2 = [];
    0 === t2 && s2.push("obj");
    for (var l2 = ["retType"], u2 = [o2], d2 = 0; d2 < r2; ++d2) s2.push("arg" + d2), l2.push("argType" + d2), u2.push(n2[d2]), a2 += `  var arg${d2} = argType${d2}.readValueFromPointer(args${i2 ? "+" + i2 : ""});
`, i2 += n2[d2].argPackAdvance;
    a2 += `  var rv = ${1 === t2 ? "new func" : "func.call"}(${s2.join(", ")});
`, o2.isVoid || (l2.push("emval_returnValue"), u2.push(ke), a2 += "  return emval_returnValue(retType, destructorsRef, rv);\n"), a2 += "};\n", l2.push(a2);
    var c2 = Rr(Function, l2)(...u2), f2 = `methodCaller<(${n2.map((r3) => r3.name).join(", ")}) => ${o2.name}>`;
    return Ce(Mr(f2, c2));
  }, xe = (r2) => (r2 = Pe(r2), Fr.toHandle(o[r2])), Re = (r2, e3) => (r2 = Fr.toValue(r2), e3 = Fr.toValue(e3), Fr.toHandle(r2[e3])), $e = (r2) => {
    r2 > 9 && (kr[r2 + 1] += 1);
  }, Ne = (r2) => Fr.toHandle(Pe(r2)), ze = (r2) => {
    var e3 = Fr.toValue(r2);
    jr(e3), br(r2);
  }, Oe = (r2, e3, t2, n2) => {
    var o2 = (/* @__PURE__ */ new Date()).getFullYear(), a2 = new Date(o2, 0, 1), i2 = new Date(o2, 6, 1), s2 = a2.getTimezoneOffset(), l2 = i2.getTimezoneOffset(), u2 = Math.max(s2, l2);
    b[r2 >> 2] = 60 * u2, k[e3 >> 2] = Number(s2 != l2);
    var d2 = (r3) => {
      var e4 = r3 >= 0 ? "-" : "+", t3 = Math.abs(r3);
      return `UTC${e4}${String(Math.floor(t3 / 60)).padStart(2, "0")}${String(t3 % 60).padStart(2, "0")}`;
    }, c2 = d2(s2), f2 = d2(l2);
    l2 < s2 ? (oe(c2, t2, 17), oe(f2, n2, 17)) : (oe(c2, n2, 17), oe(f2, t2, 17));
  }, We = () => 2147483648, Be = (r2, e3) => Math.ceil(r2 / e3) * e3, Ue = (r2) => {
    var e3 = (r2 - v.buffer.byteLength + 65535) / 65536 | 0;
    try {
      return v.grow(e3), D(), 1;
    } catch (t2) {
    }
  }, Le = (r2) => {
    var e3 = y.length;
    r2 >>>= 0;
    var t2 = We();
    if (r2 > t2) return false;
    for (var n2 = 1; n2 <= 4; n2 *= 2) {
      var o2 = e3 * (1 + 0.2 / n2);
      o2 = Math.min(o2, r2 + 100663296);
      var a2 = Math.min(t2, Be(Math.max(r2, o2), 65536));
      if (Ue(a2)) return true;
    }
    return false;
  }, He = {}, Ie = () => c || "./this.program", Ve = () => {
    if (!Ve.strings) {
      var r2 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: Ie() };
      for (var e3 in He) void 0 === He[e3] ? delete r2[e3] : r2[e3] = He[e3];
      var t2 = [];
      for (var e3 in r2) t2.push(`${e3}=${r2[e3]}`);
      Ve.strings = t2;
    }
    return Ve.strings;
  }, qe = (r2, e3) => {
    for (var t2 = 0; t2 < r2.length; ++t2) w[e3++] = r2.charCodeAt(t2);
    w[e3] = 0;
  }, Xe = (r2, e3) => {
    var t2 = 0;
    return Ve().forEach((n2, o2) => {
      var a2 = e3 + t2;
      b[r2 + 4 * o2 >> 2] = a2, qe(n2, a2), t2 += n2.length + 1;
    }), 0;
  }, Ge = (r2, e3) => {
    var t2 = Ve();
    b[r2 >> 2] = t2.length;
    var n2 = 0;
    return t2.forEach((r3) => n2 += r3.length + 1), b[e3 >> 2] = n2, 0;
  }, Ke = { isAbs: (r2) => "/" === r2.charAt(0), splitPath: (r2) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(r2).slice(1), normalizeArray: (r2, e3) => {
    for (var t2 = 0, n2 = r2.length - 1; n2 >= 0; n2--) {
      var o2 = r2[n2];
      "." === o2 ? r2.splice(n2, 1) : ".." === o2 ? (r2.splice(n2, 1), t2++) : t2 && (r2.splice(n2, 1), t2--);
    }
    if (e3) for (; t2; t2--) r2.unshift("..");
    return r2;
  }, normalize: (r2) => {
    var e3 = Ke.isAbs(r2), t2 = "/" === r2.substr(-1);
    return (r2 = Ke.normalizeArray(r2.split("/").filter((r3) => !!r3), !e3).join("/")) || e3 || (r2 = "."), r2 && t2 && (r2 += "/"), (e3 ? "/" : "") + r2;
  }, dirname: (r2) => {
    var e3 = Ke.splitPath(r2), t2 = e3[0], n2 = e3[1];
    return t2 || n2 ? (n2 && (n2 = n2.substr(0, n2.length - 1)), t2 + n2) : ".";
  }, basename: (r2) => {
    if ("/" === r2) return "/";
    var e3 = (r2 = (r2 = Ke.normalize(r2)).replace(/\/$/, "")).lastIndexOf("/");
    return -1 === e3 ? r2 : r2.substr(e3 + 1);
  }, join: (...r2) => Ke.normalize(r2.join("/")), join2: (r2, e3) => Ke.normalize(r2 + "/" + e3) }, Je = () => {
    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) return (r2) => crypto.getRandomValues(r2);
    U("initRandomDevice");
  }, Qe = (r2) => (Qe = Je())(r2), Ye = { resolve: (...r2) => {
    for (var e3 = "", t2 = false, n2 = r2.length - 1; n2 >= -1 && !t2; n2--) {
      var o2 = n2 >= 0 ? r2[n2] : ft.cwd();
      if ("string" != typeof o2) throw new TypeError("Arguments to path.resolve must be strings");
      if (!o2) return "";
      e3 = o2 + "/" + e3, t2 = Ke.isAbs(o2);
    }
    return (t2 ? "/" : "") + (e3 = Ke.normalizeArray(e3.split("/").filter((r3) => !!r3), !t2).join("/")) || ".";
  }, relative: (r2, e3) => {
    function t2(r3) {
      for (var e4 = 0; e4 < r3.length && "" === r3[e4]; e4++) ;
      for (var t3 = r3.length - 1; t3 >= 0 && "" === r3[t3]; t3--) ;
      return e4 > t3 ? [] : r3.slice(e4, t3 - e4 + 1);
    }
    r2 = Ye.resolve(r2).substr(1), e3 = Ye.resolve(e3).substr(1);
    for (var n2 = t2(r2.split("/")), o2 = t2(e3.split("/")), a2 = Math.min(n2.length, o2.length), i2 = a2, s2 = 0; s2 < a2; s2++) if (n2[s2] !== o2[s2]) {
      i2 = s2;
      break;
    }
    var l2 = [];
    for (s2 = i2; s2 < n2.length; s2++) l2.push("..");
    return (l2 = l2.concat(o2.slice(i2))).join("/");
  } }, Ze = [];
  function rt(r2, e3, t2) {
    var n2 = ae(r2) + 1, o2 = new Array(n2), a2 = ne(r2, o2, 0, o2.length);
    return o2.length = a2, o2;
  }
  var et = () => {
    if (!Ze.length) {
      var r2 = null;
      if ("undefined" != typeof window && "function" == typeof window.prompt && null !== (r2 = window.prompt("Input: ")) && (r2 += "\n"), !r2) return null;
      Ze = rt(r2);
    }
    return Ze.shift();
  }, tt = { ttys: [], init() {
  }, shutdown() {
  }, register(r2, e3) {
    tt.ttys[r2] = { input: [], output: [], ops: e3 }, ft.registerDevice(r2, tt.stream_ops);
  }, stream_ops: { open(r2) {
    var e3 = tt.ttys[r2.node.rdev];
    if (!e3) throw new ft.ErrnoError(43);
    r2.tty = e3, r2.seekable = false;
  }, close(r2) {
    r2.tty.ops.fsync(r2.tty);
  }, fsync(r2) {
    r2.tty.ops.fsync(r2.tty);
  }, read(r2, e3, t2, n2, o2) {
    if (!r2.tty || !r2.tty.ops.get_char) throw new ft.ErrnoError(60);
    for (var a2 = 0, i2 = 0; i2 < n2; i2++) {
      var s2;
      try {
        s2 = r2.tty.ops.get_char(r2.tty);
      } catch (l2) {
        throw new ft.ErrnoError(29);
      }
      if (void 0 === s2 && 0 === a2) throw new ft.ErrnoError(6);
      if (null == s2) break;
      a2++, e3[t2 + i2] = s2;
    }
    return a2 && (r2.node.atime = Date.now()), a2;
  }, write(r2, e3, t2, n2, o2) {
    if (!r2.tty || !r2.tty.ops.put_char) throw new ft.ErrnoError(60);
    try {
      for (var a2 = 0; a2 < n2; a2++) r2.tty.ops.put_char(r2.tty, e3[t2 + a2]);
    } catch (i2) {
      throw new ft.ErrnoError(29);
    }
    return n2 && (r2.node.mtime = r2.node.ctime = Date.now()), a2;
  } }, default_tty_ops: { get_char: (r2) => et(), put_char(r2, e3) {
    null === e3 || 10 === e3 ? (p(se(r2.output)), r2.output = []) : 0 != e3 && r2.output.push(e3);
  }, fsync(r2) {
    r2.output && r2.output.length > 0 && (p(se(r2.output)), r2.output = []);
  }, ioctl_tcgets: (r2) => ({ c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }), ioctl_tcsets: (r2, e3, t2) => 0, ioctl_tiocgwinsz: (r2) => [24, 80] }, default_tty1_ops: { put_char(r2, e3) {
    null === e3 || 10 === e3 ? (m(se(r2.output)), r2.output = []) : 0 != e3 && r2.output.push(e3);
  }, fsync(r2) {
    r2.output && r2.output.length > 0 && (m(se(r2.output)), r2.output = []);
  } } }, nt = (r2) => {
    U();
  }, ot = { ops_table: null, mount: (r2) => ot.createNode(null, "/", 16895, 0), createNode(r2, e3, t2, n2) {
    if (ft.isBlkdev(t2) || ft.isFIFO(t2)) throw new ft.ErrnoError(63);
    ot.ops_table || (ot.ops_table = { dir: { node: { getattr: ot.node_ops.getattr, setattr: ot.node_ops.setattr, lookup: ot.node_ops.lookup, mknod: ot.node_ops.mknod, rename: ot.node_ops.rename, unlink: ot.node_ops.unlink, rmdir: ot.node_ops.rmdir, readdir: ot.node_ops.readdir, symlink: ot.node_ops.symlink }, stream: { llseek: ot.stream_ops.llseek } }, file: { node: { getattr: ot.node_ops.getattr, setattr: ot.node_ops.setattr }, stream: { llseek: ot.stream_ops.llseek, read: ot.stream_ops.read, write: ot.stream_ops.write, allocate: ot.stream_ops.allocate, mmap: ot.stream_ops.mmap, msync: ot.stream_ops.msync } }, link: { node: { getattr: ot.node_ops.getattr, setattr: ot.node_ops.setattr, readlink: ot.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: ot.node_ops.getattr, setattr: ot.node_ops.setattr }, stream: ft.chrdev_stream_ops } });
    var o2 = ft.createNode(r2, e3, t2, n2);
    return ft.isDir(o2.mode) ? (o2.node_ops = ot.ops_table.dir.node, o2.stream_ops = ot.ops_table.dir.stream, o2.contents = {}) : ft.isFile(o2.mode) ? (o2.node_ops = ot.ops_table.file.node, o2.stream_ops = ot.ops_table.file.stream, o2.usedBytes = 0, o2.contents = null) : ft.isLink(o2.mode) ? (o2.node_ops = ot.ops_table.link.node, o2.stream_ops = ot.ops_table.link.stream) : ft.isChrdev(o2.mode) && (o2.node_ops = ot.ops_table.chrdev.node, o2.stream_ops = ot.ops_table.chrdev.stream), o2.atime = o2.mtime = o2.ctime = Date.now(), r2 && (r2.contents[e3] = o2, r2.atime = r2.mtime = r2.ctime = o2.atime), o2;
  }, getFileDataAsTypedArray: (r2) => r2.contents ? r2.contents.subarray ? r2.contents.subarray(0, r2.usedBytes) : new Uint8Array(r2.contents) : new Uint8Array(0), expandFileStorage(r2, e3) {
    var t2 = r2.contents ? r2.contents.length : 0;
    if (!(t2 >= e3)) {
      var n2 = 1048576;
      e3 = Math.max(e3, t2 * (t2 < n2 ? 2 : 1.125) >>> 0), 0 != t2 && (e3 = Math.max(e3, 256));
      var o2 = r2.contents;
      r2.contents = new Uint8Array(e3), r2.usedBytes > 0 && r2.contents.set(o2.subarray(0, r2.usedBytes), 0);
    }
  }, resizeFileStorage(r2, e3) {
    if (r2.usedBytes != e3) if (0 == e3) r2.contents = null, r2.usedBytes = 0;
    else {
      var t2 = r2.contents;
      r2.contents = new Uint8Array(e3), t2 && r2.contents.set(t2.subarray(0, Math.min(e3, r2.usedBytes))), r2.usedBytes = e3;
    }
  }, node_ops: { getattr(r2) {
    var e3 = {};
    return e3.dev = ft.isChrdev(r2.mode) ? r2.id : 1, e3.ino = r2.id, e3.mode = r2.mode, e3.nlink = 1, e3.uid = 0, e3.gid = 0, e3.rdev = r2.rdev, ft.isDir(r2.mode) ? e3.size = 4096 : ft.isFile(r2.mode) ? e3.size = r2.usedBytes : ft.isLink(r2.mode) ? e3.size = r2.link.length : e3.size = 0, e3.atime = new Date(r2.atime), e3.mtime = new Date(r2.mtime), e3.ctime = new Date(r2.ctime), e3.blksize = 4096, e3.blocks = Math.ceil(e3.size / e3.blksize), e3;
  }, setattr(r2, e3) {
    for (const t2 of ["mode", "atime", "mtime", "ctime"]) e3[t2] && (r2[t2] = e3[t2]);
    void 0 !== e3.size && ot.resizeFileStorage(r2, e3.size);
  }, lookup(r2, e3) {
    throw ot.doesNotExistError;
  }, mknod: (r2, e3, t2, n2) => ot.createNode(r2, e3, t2, n2), rename(r2, e3, t2) {
    var n2;
    try {
      n2 = ft.lookupNode(e3, t2);
    } catch (a2) {
    }
    if (n2) {
      if (ft.isDir(r2.mode)) for (var o2 in n2.contents) throw new ft.ErrnoError(55);
      ft.hashRemoveNode(n2);
    }
    delete r2.parent.contents[r2.name], e3.contents[t2] = r2, r2.name = t2, e3.ctime = e3.mtime = r2.parent.ctime = r2.parent.mtime = Date.now();
  }, unlink(r2, e3) {
    delete r2.contents[e3], r2.ctime = r2.mtime = Date.now();
  }, rmdir(r2, e3) {
    var t2 = ft.lookupNode(r2, e3);
    for (var n2 in t2.contents) throw new ft.ErrnoError(55);
    delete r2.contents[e3], r2.ctime = r2.mtime = Date.now();
  }, readdir: (r2) => [".", "..", ...Object.keys(r2.contents)], symlink(r2, e3, t2) {
    var n2 = ot.createNode(r2, e3, 41471, 0);
    return n2.link = t2, n2;
  }, readlink(r2) {
    if (!ft.isLink(r2.mode)) throw new ft.ErrnoError(28);
    return r2.link;
  } }, stream_ops: { read(r2, e3, t2, n2, o2) {
    var a2 = r2.node.contents;
    if (o2 >= r2.node.usedBytes) return 0;
    var i2 = Math.min(r2.node.usedBytes - o2, n2);
    if (i2 > 8 && a2.subarray) e3.set(a2.subarray(o2, o2 + i2), t2);
    else for (var s2 = 0; s2 < i2; s2++) e3[t2 + s2] = a2[o2 + s2];
    return i2;
  }, write(r2, e3, t2, n2, o2, a2) {
    if (e3.buffer === w.buffer && (a2 = false), !n2) return 0;
    var i2 = r2.node;
    if (i2.mtime = i2.ctime = Date.now(), e3.subarray && (!i2.contents || i2.contents.subarray)) {
      if (a2) return i2.contents = e3.subarray(t2, t2 + n2), i2.usedBytes = n2, n2;
      if (0 === i2.usedBytes && 0 === o2) return i2.contents = e3.slice(t2, t2 + n2), i2.usedBytes = n2, n2;
      if (o2 + n2 <= i2.usedBytes) return i2.contents.set(e3.subarray(t2, t2 + n2), o2), n2;
    }
    if (ot.expandFileStorage(i2, o2 + n2), i2.contents.subarray && e3.subarray) i2.contents.set(e3.subarray(t2, t2 + n2), o2);
    else for (var s2 = 0; s2 < n2; s2++) i2.contents[o2 + s2] = e3[t2 + s2];
    return i2.usedBytes = Math.max(i2.usedBytes, o2 + n2), n2;
  }, llseek(r2, e3, t2) {
    var n2 = e3;
    if (1 === t2 ? n2 += r2.position : 2 === t2 && ft.isFile(r2.node.mode) && (n2 += r2.node.usedBytes), n2 < 0) throw new ft.ErrnoError(28);
    return n2;
  }, allocate(r2, e3, t2) {
    ot.expandFileStorage(r2.node, e3 + t2), r2.node.usedBytes = Math.max(r2.node.usedBytes, e3 + t2);
  }, mmap(r2, e3, t2, n2, o2) {
    if (!ft.isFile(r2.node.mode)) throw new ft.ErrnoError(43);
    var a2, i2, s2 = r2.node.contents;
    if (2 & o2 || !s2 || s2.buffer !== w.buffer) {
      if (i2 = true, !(a2 = nt())) throw new ft.ErrnoError(48);
      s2 && ((t2 > 0 || t2 + e3 < s2.length) && (s2 = s2.subarray ? s2.subarray(t2, t2 + e3) : Array.prototype.slice.call(s2, t2, t2 + e3)), w.set(s2, a2));
    } else i2 = false, a2 = s2.byteOffset;
    return { ptr: a2, allocated: i2 };
  }, msync: (r2, e3, t2, n2, o2) => (ot.stream_ops.write(r2, e3, 0, n2, t2, false), 0) } }, at = async (r2) => {
    var e3 = await l(r2);
    return new Uint8Array(e3);
  }, it = (r2, e3, t2, n2, o2, a2) => {
    ft.createDataFile(r2, e3, t2, n2, o2, a2);
  }, st = o.preloadPlugins || [], lt = (r2, e3, t2, n2) => {
    "undefined" != typeof Browser && Browser.init();
    var o2 = false;
    return st.forEach((a2) => {
      o2 || a2.canHandle(e3) && (a2.handle(r2, e3, t2, n2), o2 = true);
    }), o2;
  }, ut = (r2, e3, t2, n2, o2, a2, i2, s2, l2, u2) => {
    var d2 = e3 ? Ye.resolve(Ke.join2(r2, e3)) : r2;
    function c2(t3) {
      function c3(t4) {
        u2 == null ? void 0 : u2(), s2 || it(r2, e3, t4, n2, o2, l2), a2 == null ? void 0 : a2(), B();
      }
      lt(t3, d2, c3, () => {
        i2 == null ? void 0 : i2(), B();
      }) || c3(t3);
    }
    W(), "string" == typeof t2 ? at(t2).then(c2, i2) : c2(t2);
  }, dt = (r2) => {
    var e3 = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[r2];
    if (void 0 === e3) throw new Error(`Unknown file open mode: ${r2}`);
    return e3;
  }, ct = (r2, e3) => {
    var t2 = 0;
    return r2 && (t2 |= 365), e3 && (t2 |= 146), t2;
  }, ft = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: class {
    constructor(r2) {
      __publicField(this, "name", "ErrnoError");
      this.errno = r2;
    }
  }, filesystems: null, syncFSRequests: 0, readFiles: {}, FSStream: class {
    constructor() {
      __publicField(this, "shared", {});
    }
    get object() {
      return this.node;
    }
    set object(r2) {
      this.node = r2;
    }
    get isRead() {
      return 1 != (2097155 & this.flags);
    }
    get isWrite() {
      return !!(2097155 & this.flags);
    }
    get isAppend() {
      return 1024 & this.flags;
    }
    get flags() {
      return this.shared.flags;
    }
    set flags(r2) {
      this.shared.flags = r2;
    }
    get position() {
      return this.shared.position;
    }
    set position(r2) {
      this.shared.position = r2;
    }
  }, FSNode: class {
    constructor(r2, e3, t2, n2) {
      __publicField(this, "node_ops", {});
      __publicField(this, "stream_ops", {});
      __publicField(this, "readMode", 365);
      __publicField(this, "writeMode", 146);
      __publicField(this, "mounted", null);
      r2 || (r2 = this), this.parent = r2, this.mount = r2.mount, this.id = ft.nextInode++, this.name = e3, this.mode = t2, this.rdev = n2, this.atime = this.mtime = this.ctime = Date.now();
    }
    get read() {
      return (this.mode & this.readMode) === this.readMode;
    }
    set read(r2) {
      r2 ? this.mode |= this.readMode : this.mode &= ~this.readMode;
    }
    get write() {
      return (this.mode & this.writeMode) === this.writeMode;
    }
    set write(r2) {
      r2 ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
    }
    get isFolder() {
      return ft.isDir(this.mode);
    }
    get isDevice() {
      return ft.isChrdev(this.mode);
    }
  }, lookupPath(r2, e3 = {}) {
    if (!r2) return { path: "", node: null };
    e3.follow_mount ?? (e3.follow_mount = true), Ke.isAbs(r2) || (r2 = ft.cwd() + "/" + r2);
    r: for (var t2 = 0; t2 < 40; t2++) {
      for (var n2 = r2.split("/").filter((r3) => !!r3 && "." !== r3), o2 = ft.root, a2 = "/", i2 = 0; i2 < n2.length; i2++) {
        var s2 = i2 === n2.length - 1;
        if (s2 && e3.parent) break;
        if (".." !== n2[i2]) {
          a2 = Ke.join2(a2, n2[i2]);
          try {
            o2 = ft.lookupNode(o2, n2[i2]);
          } catch (u2) {
            if (44 === (u2 == null ? void 0 : u2.errno) && s2 && e3.noent_okay) return { path: a2 };
            throw u2;
          }
          if (!ft.isMountpoint(o2) || s2 && !e3.follow_mount || (o2 = o2.mounted.root), ft.isLink(o2.mode) && (!s2 || e3.follow)) {
            if (!o2.node_ops.readlink) throw new ft.ErrnoError(52);
            var l2 = o2.node_ops.readlink(o2);
            Ke.isAbs(l2) || (l2 = Ke.dirname(a2) + "/" + l2), r2 = l2 + "/" + n2.slice(i2 + 1).join("/");
            continue r;
          }
        } else a2 = Ke.dirname(a2), o2 = o2.parent;
      }
      return { path: a2, node: o2 };
    }
    throw new ft.ErrnoError(32);
  }, getPath(r2) {
    for (var e3; ; ) {
      if (ft.isRoot(r2)) {
        var t2 = r2.mount.mountpoint;
        return e3 ? "/" !== t2[t2.length - 1] ? `${t2}/${e3}` : t2 + e3 : t2;
      }
      e3 = e3 ? `${r2.name}/${e3}` : r2.name, r2 = r2.parent;
    }
  }, hashName(r2, e3) {
    for (var t2 = 0, n2 = 0; n2 < e3.length; n2++) t2 = (t2 << 5) - t2 + e3.charCodeAt(n2) | 0;
    return (r2 + t2 >>> 0) % ft.nameTable.length;
  }, hashAddNode(r2) {
    var e3 = ft.hashName(r2.parent.id, r2.name);
    r2.name_next = ft.nameTable[e3], ft.nameTable[e3] = r2;
  }, hashRemoveNode(r2) {
    var e3 = ft.hashName(r2.parent.id, r2.name);
    if (ft.nameTable[e3] === r2) ft.nameTable[e3] = r2.name_next;
    else for (var t2 = ft.nameTable[e3]; t2; ) {
      if (t2.name_next === r2) {
        t2.name_next = r2.name_next;
        break;
      }
      t2 = t2.name_next;
    }
  }, lookupNode(r2, e3) {
    var t2 = ft.mayLookup(r2);
    if (t2) throw new ft.ErrnoError(t2);
    for (var n2 = ft.hashName(r2.id, e3), o2 = ft.nameTable[n2]; o2; o2 = o2.name_next) {
      var a2 = o2.name;
      if (o2.parent.id === r2.id && a2 === e3) return o2;
    }
    return ft.lookup(r2, e3);
  }, createNode(r2, e3, t2, n2) {
    var o2 = new ft.FSNode(r2, e3, t2, n2);
    return ft.hashAddNode(o2), o2;
  }, destroyNode(r2) {
    ft.hashRemoveNode(r2);
  }, isRoot: (r2) => r2 === r2.parent, isMountpoint: (r2) => !!r2.mounted, isFile: (r2) => 32768 == (61440 & r2), isDir: (r2) => 16384 == (61440 & r2), isLink: (r2) => 40960 == (61440 & r2), isChrdev: (r2) => 8192 == (61440 & r2), isBlkdev: (r2) => 24576 == (61440 & r2), isFIFO: (r2) => 4096 == (61440 & r2), isSocket: (r2) => !(49152 & ~r2), flagsToPermissionString(r2) {
    var e3 = ["r", "w", "rw"][3 & r2];
    return 512 & r2 && (e3 += "w"), e3;
  }, nodePermissions: (r2, e3) => ft.ignorePermissions || (!e3.includes("r") || 292 & r2.mode) && (!e3.includes("w") || 146 & r2.mode) && (!e3.includes("x") || 73 & r2.mode) ? 0 : 2, mayLookup(r2) {
    if (!ft.isDir(r2.mode)) return 54;
    var e3 = ft.nodePermissions(r2, "x");
    return e3 || (r2.node_ops.lookup ? 0 : 2);
  }, mayCreate(r2, e3) {
    if (!ft.isDir(r2.mode)) return 54;
    try {
      return ft.lookupNode(r2, e3), 20;
    } catch (t2) {
    }
    return ft.nodePermissions(r2, "wx");
  }, mayDelete(r2, e3, t2) {
    var n2;
    try {
      n2 = ft.lookupNode(r2, e3);
    } catch (a2) {
      return a2.errno;
    }
    var o2 = ft.nodePermissions(r2, "wx");
    if (o2) return o2;
    if (t2) {
      if (!ft.isDir(n2.mode)) return 54;
      if (ft.isRoot(n2) || ft.getPath(n2) === ft.cwd()) return 10;
    } else if (ft.isDir(n2.mode)) return 31;
    return 0;
  }, mayOpen: (r2, e3) => r2 ? ft.isLink(r2.mode) ? 32 : ft.isDir(r2.mode) && ("r" !== ft.flagsToPermissionString(e3) || 512 & e3) ? 31 : ft.nodePermissions(r2, ft.flagsToPermissionString(e3)) : 44, MAX_OPEN_FDS: 4096, nextfd() {
    for (var r2 = 0; r2 <= ft.MAX_OPEN_FDS; r2++) if (!ft.streams[r2]) return r2;
    throw new ft.ErrnoError(33);
  }, getStreamChecked(r2) {
    var e3 = ft.getStream(r2);
    if (!e3) throw new ft.ErrnoError(8);
    return e3;
  }, getStream: (r2) => ft.streams[r2], createStream: (r2, e3 = -1) => (r2 = Object.assign(new ft.FSStream(), r2), -1 == e3 && (e3 = ft.nextfd()), r2.fd = e3, ft.streams[e3] = r2, r2), closeStream(r2) {
    ft.streams[r2] = null;
  }, dupStream(r2, e3 = -1) {
    var _a2, _b;
    var t2 = ft.createStream(r2, e3);
    return (_b = (_a2 = t2.stream_ops) == null ? void 0 : _a2.dup) == null ? void 0 : _b.call(_a2, t2), t2;
  }, chrdev_stream_ops: { open(r2) {
    var _a2, _b;
    var e3 = ft.getDevice(r2.node.rdev);
    r2.stream_ops = e3.stream_ops, (_b = (_a2 = r2.stream_ops).open) == null ? void 0 : _b.call(_a2, r2);
  }, llseek() {
    throw new ft.ErrnoError(70);
  } }, major: (r2) => r2 >> 8, minor: (r2) => 255 & r2, makedev: (r2, e3) => r2 << 8 | e3, registerDevice(r2, e3) {
    ft.devices[r2] = { stream_ops: e3 };
  }, getDevice: (r2) => ft.devices[r2], getMounts(r2) {
    for (var e3 = [], t2 = [r2]; t2.length; ) {
      var n2 = t2.pop();
      e3.push(n2), t2.push(...n2.mounts);
    }
    return e3;
  }, syncfs(r2, e3) {
    "function" == typeof r2 && (e3 = r2, r2 = false), ft.syncFSRequests++, ft.syncFSRequests > 1 && m(`warning: ${ft.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
    var t2 = ft.getMounts(ft.root.mount), n2 = 0;
    function o2(r3) {
      return ft.syncFSRequests--, e3(r3);
    }
    function a2(r3) {
      if (r3) return a2.errored ? void 0 : (a2.errored = true, o2(r3));
      ++n2 >= t2.length && o2(null);
    }
    t2.forEach((e4) => {
      if (!e4.type.syncfs) return a2(null);
      e4.type.syncfs(e4, r2, a2);
    });
  }, mount(r2, e3, t2) {
    var n2, o2 = "/" === t2, a2 = !t2;
    if (o2 && ft.root) throw new ft.ErrnoError(10);
    if (!o2 && !a2) {
      var i2 = ft.lookupPath(t2, { follow_mount: false });
      if (t2 = i2.path, n2 = i2.node, ft.isMountpoint(n2)) throw new ft.ErrnoError(10);
      if (!ft.isDir(n2.mode)) throw new ft.ErrnoError(54);
    }
    var s2 = { type: r2, opts: e3, mountpoint: t2, mounts: [] }, l2 = r2.mount(s2);
    return l2.mount = s2, s2.root = l2, o2 ? ft.root = l2 : n2 && (n2.mounted = s2, n2.mount && n2.mount.mounts.push(s2)), l2;
  }, unmount(r2) {
    var e3 = ft.lookupPath(r2, { follow_mount: false });
    if (!ft.isMountpoint(e3.node)) throw new ft.ErrnoError(28);
    var t2 = e3.node, n2 = t2.mounted, o2 = ft.getMounts(n2);
    Object.keys(ft.nameTable).forEach((r3) => {
      for (var e4 = ft.nameTable[r3]; e4; ) {
        var t3 = e4.name_next;
        o2.includes(e4.mount) && ft.destroyNode(e4), e4 = t3;
      }
    }), t2.mounted = null;
    var a2 = t2.mount.mounts.indexOf(n2);
    t2.mount.mounts.splice(a2, 1);
  }, lookup: (r2, e3) => r2.node_ops.lookup(r2, e3), mknod(r2, e3, t2) {
    var n2 = ft.lookupPath(r2, { parent: true }).node, o2 = Ke.basename(r2);
    if (!o2 || "." === o2 || ".." === o2) throw new ft.ErrnoError(28);
    var a2 = ft.mayCreate(n2, o2);
    if (a2) throw new ft.ErrnoError(a2);
    if (!n2.node_ops.mknod) throw new ft.ErrnoError(63);
    return n2.node_ops.mknod(n2, o2, e3, t2);
  }, statfs(r2) {
    var e3 = { bsize: 4096, frsize: 4096, blocks: 1e6, bfree: 5e5, bavail: 5e5, files: ft.nextInode, ffree: ft.nextInode - 1, fsid: 42, flags: 2, namelen: 255 }, t2 = ft.lookupPath(r2, { follow: true }).node;
    return (t2 == null ? void 0 : t2.node_ops.statfs) && Object.assign(e3, t2.node_ops.statfs(t2.mount.opts.root)), e3;
  }, create: (r2, e3 = 438) => (e3 &= 4095, e3 |= 32768, ft.mknod(r2, e3, 0)), mkdir: (r2, e3 = 511) => (e3 &= 1023, e3 |= 16384, ft.mknod(r2, e3, 0)), mkdirTree(r2, e3) {
    for (var t2 = r2.split("/"), n2 = "", o2 = 0; o2 < t2.length; ++o2) if (t2[o2]) {
      n2 += "/" + t2[o2];
      try {
        ft.mkdir(n2, e3);
      } catch (a2) {
        if (20 != a2.errno) throw a2;
      }
    }
  }, mkdev: (r2, e3, t2) => (void 0 === t2 && (t2 = e3, e3 = 438), e3 |= 8192, ft.mknod(r2, e3, t2)), symlink(r2, e3) {
    if (!Ye.resolve(r2)) throw new ft.ErrnoError(44);
    var t2 = ft.lookupPath(e3, { parent: true }).node;
    if (!t2) throw new ft.ErrnoError(44);
    var n2 = Ke.basename(e3), o2 = ft.mayCreate(t2, n2);
    if (o2) throw new ft.ErrnoError(o2);
    if (!t2.node_ops.symlink) throw new ft.ErrnoError(63);
    return t2.node_ops.symlink(t2, n2, r2);
  }, rename(r2, e3) {
    var t2, n2, o2 = Ke.dirname(r2), a2 = Ke.dirname(e3), i2 = Ke.basename(r2), s2 = Ke.basename(e3);
    if (t2 = ft.lookupPath(r2, { parent: true }).node, n2 = ft.lookupPath(e3, { parent: true }).node, !t2 || !n2) throw new ft.ErrnoError(44);
    if (t2.mount !== n2.mount) throw new ft.ErrnoError(75);
    var l2, u2 = ft.lookupNode(t2, i2), d2 = Ye.relative(r2, a2);
    if ("." !== d2.charAt(0)) throw new ft.ErrnoError(28);
    if ("." !== (d2 = Ye.relative(e3, o2)).charAt(0)) throw new ft.ErrnoError(55);
    try {
      l2 = ft.lookupNode(n2, s2);
    } catch (h2) {
    }
    if (u2 !== l2) {
      var c2 = ft.isDir(u2.mode), f2 = ft.mayDelete(t2, i2, c2);
      if (f2) throw new ft.ErrnoError(f2);
      if (f2 = l2 ? ft.mayDelete(n2, s2, c2) : ft.mayCreate(n2, s2)) throw new ft.ErrnoError(f2);
      if (!t2.node_ops.rename) throw new ft.ErrnoError(63);
      if (ft.isMountpoint(u2) || l2 && ft.isMountpoint(l2)) throw new ft.ErrnoError(10);
      if (n2 !== t2 && (f2 = ft.nodePermissions(t2, "w"))) throw new ft.ErrnoError(f2);
      ft.hashRemoveNode(u2);
      try {
        t2.node_ops.rename(u2, n2, s2), u2.parent = n2;
      } catch (h2) {
        throw h2;
      } finally {
        ft.hashAddNode(u2);
      }
    }
  }, rmdir(r2) {
    var e3 = ft.lookupPath(r2, { parent: true }).node, t2 = Ke.basename(r2), n2 = ft.lookupNode(e3, t2), o2 = ft.mayDelete(e3, t2, true);
    if (o2) throw new ft.ErrnoError(o2);
    if (!e3.node_ops.rmdir) throw new ft.ErrnoError(63);
    if (ft.isMountpoint(n2)) throw new ft.ErrnoError(10);
    e3.node_ops.rmdir(e3, t2), ft.destroyNode(n2);
  }, readdir(r2) {
    var e3 = ft.lookupPath(r2, { follow: true }).node;
    if (!e3.node_ops.readdir) throw new ft.ErrnoError(54);
    return e3.node_ops.readdir(e3);
  }, unlink(r2) {
    var e3 = ft.lookupPath(r2, { parent: true }).node;
    if (!e3) throw new ft.ErrnoError(44);
    var t2 = Ke.basename(r2), n2 = ft.lookupNode(e3, t2), o2 = ft.mayDelete(e3, t2, false);
    if (o2) throw new ft.ErrnoError(o2);
    if (!e3.node_ops.unlink) throw new ft.ErrnoError(63);
    if (ft.isMountpoint(n2)) throw new ft.ErrnoError(10);
    e3.node_ops.unlink(e3, t2), ft.destroyNode(n2);
  }, readlink(r2) {
    var e3 = ft.lookupPath(r2).node;
    if (!e3) throw new ft.ErrnoError(44);
    if (!e3.node_ops.readlink) throw new ft.ErrnoError(28);
    return e3.node_ops.readlink(e3);
  }, stat(r2, e3) {
    var t2 = ft.lookupPath(r2, { follow: !e3 }).node;
    if (!t2) throw new ft.ErrnoError(44);
    if (!t2.node_ops.getattr) throw new ft.ErrnoError(63);
    return t2.node_ops.getattr(t2);
  }, lstat: (r2) => ft.stat(r2, true), chmod(r2, e3, t2) {
    var n2;
    if (!(n2 = "string" == typeof r2 ? ft.lookupPath(r2, { follow: !t2 }).node : r2).node_ops.setattr) throw new ft.ErrnoError(63);
    n2.node_ops.setattr(n2, { mode: 4095 & e3 | -4096 & n2.mode, ctime: Date.now() });
  }, lchmod(r2, e3) {
    ft.chmod(r2, e3, true);
  }, fchmod(r2, e3) {
    var t2 = ft.getStreamChecked(r2);
    ft.chmod(t2.node, e3);
  }, chown(r2, e3, t2, n2) {
    var o2;
    if (!(o2 = "string" == typeof r2 ? ft.lookupPath(r2, { follow: !n2 }).node : r2).node_ops.setattr) throw new ft.ErrnoError(63);
    o2.node_ops.setattr(o2, { timestamp: Date.now() });
  }, lchown(r2, e3, t2) {
    ft.chown(r2, e3, t2, true);
  }, fchown(r2, e3, t2) {
    var n2 = ft.getStreamChecked(r2);
    ft.chown(n2.node, e3, t2);
  }, truncate(r2, e3) {
    if (e3 < 0) throw new ft.ErrnoError(28);
    var t2;
    if (!(t2 = "string" == typeof r2 ? ft.lookupPath(r2, { follow: true }).node : r2).node_ops.setattr) throw new ft.ErrnoError(63);
    if (ft.isDir(t2.mode)) throw new ft.ErrnoError(31);
    if (!ft.isFile(t2.mode)) throw new ft.ErrnoError(28);
    var n2 = ft.nodePermissions(t2, "w");
    if (n2) throw new ft.ErrnoError(n2);
    t2.node_ops.setattr(t2, { size: e3, timestamp: Date.now() });
  }, ftruncate(r2, e3) {
    var t2 = ft.getStreamChecked(r2);
    if (!(2097155 & t2.flags)) throw new ft.ErrnoError(28);
    ft.truncate(t2.node, e3);
  }, utime(r2, e3, t2) {
    var n2 = ft.lookupPath(r2, { follow: true }).node;
    n2.node_ops.setattr(n2, { atime: e3, mtime: t2 });
  }, open(r2, e3, t2 = 438) {
    if ("" === r2) throw new ft.ErrnoError(44);
    var n2;
    if (t2 = 64 & (e3 = "string" == typeof e3 ? dt(e3) : e3) ? 4095 & t2 | 32768 : 0, "object" == typeof r2) n2 = r2;
    else {
      var a2 = ft.lookupPath(r2, { follow: !(131072 & e3), noent_okay: true });
      n2 = a2.node, r2 = a2.path;
    }
    var i2 = false;
    if (64 & e3) if (n2) {
      if (128 & e3) throw new ft.ErrnoError(20);
    } else n2 = ft.mknod(r2, t2, 0), i2 = true;
    if (!n2) throw new ft.ErrnoError(44);
    if (ft.isChrdev(n2.mode) && (e3 &= -513), 65536 & e3 && !ft.isDir(n2.mode)) throw new ft.ErrnoError(54);
    if (!i2) {
      var s2 = ft.mayOpen(n2, e3);
      if (s2) throw new ft.ErrnoError(s2);
    }
    512 & e3 && !i2 && ft.truncate(n2, 0), e3 &= -131713;
    var l2 = ft.createStream({ node: n2, path: ft.getPath(n2), flags: e3, seekable: true, position: 0, stream_ops: n2.stream_ops, ungotten: [], error: false });
    return l2.stream_ops.open && l2.stream_ops.open(l2), !o.logReadFiles || 1 & e3 || r2 in ft.readFiles || (ft.readFiles[r2] = 1), l2;
  }, close(r2) {
    if (ft.isClosed(r2)) throw new ft.ErrnoError(8);
    r2.getdents && (r2.getdents = null);
    try {
      r2.stream_ops.close && r2.stream_ops.close(r2);
    } catch (e3) {
      throw e3;
    } finally {
      ft.closeStream(r2.fd);
    }
    r2.fd = null;
  }, isClosed: (r2) => null === r2.fd, llseek(r2, e3, t2) {
    if (ft.isClosed(r2)) throw new ft.ErrnoError(8);
    if (!r2.seekable || !r2.stream_ops.llseek) throw new ft.ErrnoError(70);
    if (0 != t2 && 1 != t2 && 2 != t2) throw new ft.ErrnoError(28);
    return r2.position = r2.stream_ops.llseek(r2, e3, t2), r2.ungotten = [], r2.position;
  }, read(r2, e3, t2, n2, o2) {
    if (n2 < 0 || o2 < 0) throw new ft.ErrnoError(28);
    if (ft.isClosed(r2)) throw new ft.ErrnoError(8);
    if (1 == (2097155 & r2.flags)) throw new ft.ErrnoError(8);
    if (ft.isDir(r2.node.mode)) throw new ft.ErrnoError(31);
    if (!r2.stream_ops.read) throw new ft.ErrnoError(28);
    var a2 = void 0 !== o2;
    if (a2) {
      if (!r2.seekable) throw new ft.ErrnoError(70);
    } else o2 = r2.position;
    var i2 = r2.stream_ops.read(r2, e3, t2, n2, o2);
    return a2 || (r2.position += i2), i2;
  }, write(r2, e3, t2, n2, o2, a2) {
    if (n2 < 0 || o2 < 0) throw new ft.ErrnoError(28);
    if (ft.isClosed(r2)) throw new ft.ErrnoError(8);
    if (!(2097155 & r2.flags)) throw new ft.ErrnoError(8);
    if (ft.isDir(r2.node.mode)) throw new ft.ErrnoError(31);
    if (!r2.stream_ops.write) throw new ft.ErrnoError(28);
    r2.seekable && 1024 & r2.flags && ft.llseek(r2, 0, 2);
    var i2 = void 0 !== o2;
    if (i2) {
      if (!r2.seekable) throw new ft.ErrnoError(70);
    } else o2 = r2.position;
    var s2 = r2.stream_ops.write(r2, e3, t2, n2, o2, a2);
    return i2 || (r2.position += s2), s2;
  }, allocate(r2, e3, t2) {
    if (ft.isClosed(r2)) throw new ft.ErrnoError(8);
    if (e3 < 0 || t2 <= 0) throw new ft.ErrnoError(28);
    if (!(2097155 & r2.flags)) throw new ft.ErrnoError(8);
    if (!ft.isFile(r2.node.mode) && !ft.isDir(r2.node.mode)) throw new ft.ErrnoError(43);
    if (!r2.stream_ops.allocate) throw new ft.ErrnoError(138);
    r2.stream_ops.allocate(r2, e3, t2);
  }, mmap(r2, e3, t2, n2, o2) {
    if (2 & n2 && !(2 & o2) && 2 != (2097155 & r2.flags)) throw new ft.ErrnoError(2);
    if (1 == (2097155 & r2.flags)) throw new ft.ErrnoError(2);
    if (!r2.stream_ops.mmap) throw new ft.ErrnoError(43);
    if (!e3) throw new ft.ErrnoError(28);
    return r2.stream_ops.mmap(r2, e3, t2, n2, o2);
  }, msync: (r2, e3, t2, n2, o2) => r2.stream_ops.msync ? r2.stream_ops.msync(r2, e3, t2, n2, o2) : 0, ioctl(r2, e3, t2) {
    if (!r2.stream_ops.ioctl) throw new ft.ErrnoError(59);
    return r2.stream_ops.ioctl(r2, e3, t2);
  }, readFile(r2, e3 = {}) {
    if (e3.flags = e3.flags || 0, e3.encoding = e3.encoding || "binary", "utf8" !== e3.encoding && "binary" !== e3.encoding) throw new Error(`Invalid encoding type "${e3.encoding}"`);
    var t2, n2 = ft.open(r2, e3.flags), o2 = ft.stat(r2).size, a2 = new Uint8Array(o2);
    return ft.read(n2, a2, 0, o2, 0), "utf8" === e3.encoding ? t2 = se(a2) : "binary" === e3.encoding && (t2 = a2), ft.close(n2), t2;
  }, writeFile(r2, e3, t2 = {}) {
    t2.flags = t2.flags || 577;
    var n2 = ft.open(r2, t2.flags, t2.mode);
    if ("string" == typeof e3) {
      var o2 = new Uint8Array(ae(e3) + 1), a2 = ne(e3, o2, 0, o2.length);
      ft.write(n2, o2, 0, a2, void 0, t2.canOwn);
    } else {
      if (!ArrayBuffer.isView(e3)) throw new Error("Unsupported data type");
      ft.write(n2, e3, 0, e3.byteLength, void 0, t2.canOwn);
    }
    ft.close(n2);
  }, cwd: () => ft.currentPath, chdir(r2) {
    var e3 = ft.lookupPath(r2, { follow: true });
    if (null === e3.node) throw new ft.ErrnoError(44);
    if (!ft.isDir(e3.node.mode)) throw new ft.ErrnoError(54);
    var t2 = ft.nodePermissions(e3.node, "x");
    if (t2) throw new ft.ErrnoError(t2);
    ft.currentPath = e3.path;
  }, createDefaultDirectories() {
    ft.mkdir("/tmp"), ft.mkdir("/home"), ft.mkdir("/home/web_user");
  }, createDefaultDevices() {
    ft.mkdir("/dev"), ft.registerDevice(ft.makedev(1, 3), { read: () => 0, write: (r3, e4, t3, n2, o2) => n2, llseek: () => 0 }), ft.mkdev("/dev/null", ft.makedev(1, 3)), tt.register(ft.makedev(5, 0), tt.default_tty_ops), tt.register(ft.makedev(6, 0), tt.default_tty1_ops), ft.mkdev("/dev/tty", ft.makedev(5, 0)), ft.mkdev("/dev/tty1", ft.makedev(6, 0));
    var r2 = new Uint8Array(1024), e3 = 0, t2 = () => (0 === e3 && (e3 = Qe(r2).byteLength), r2[--e3]);
    ft.createDevice("/dev", "random", t2), ft.createDevice("/dev", "urandom", t2), ft.mkdir("/dev/shm"), ft.mkdir("/dev/shm/tmp");
  }, createSpecialDirectories() {
    ft.mkdir("/proc");
    var r2 = ft.mkdir("/proc/self");
    ft.mkdir("/proc/self/fd"), ft.mount({ mount() {
      var e3 = ft.createNode(r2, "fd", 16895, 73);
      return e3.stream_ops = { llseek: ot.stream_ops.llseek }, e3.node_ops = { lookup(r3, e4) {
        var t2 = +e4, n2 = ft.getStreamChecked(t2), o2 = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => n2.path }, id: t2 + 1 };
        return o2.parent = o2, o2;
      }, readdir: () => Array.from(ft.streams.entries()).filter(([r3, e4]) => e4).map(([r3, e4]) => r3.toString()) }, e3;
    } }, {}, "/proc/self/fd");
  }, createStandardStreams(r2, e3, t2) {
    r2 ? ft.createDevice("/dev", "stdin", r2) : ft.symlink("/dev/tty", "/dev/stdin"), e3 ? ft.createDevice("/dev", "stdout", null, e3) : ft.symlink("/dev/tty", "/dev/stdout"), t2 ? ft.createDevice("/dev", "stderr", null, t2) : ft.symlink("/dev/tty1", "/dev/stderr"), ft.open("/dev/stdin", 0), ft.open("/dev/stdout", 1), ft.open("/dev/stderr", 1);
  }, staticInit() {
    ft.nameTable = new Array(4096), ft.mount(ot, {}, "/"), ft.createDefaultDirectories(), ft.createDefaultDevices(), ft.createSpecialDirectories(), ft.filesystems = { MEMFS: ot };
  }, init(r2, e3, t2) {
    ft.initialized = true, r2 ?? (r2 = o.stdin), e3 ?? (e3 = o.stdout), t2 ?? (t2 = o.stderr), ft.createStandardStreams(r2, e3, t2);
  }, quit() {
    ft.initialized = false;
    for (var r2 = 0; r2 < ft.streams.length; r2++) {
      var e3 = ft.streams[r2];
      e3 && ft.close(e3);
    }
  }, findObject(r2, e3) {
    var t2 = ft.analyzePath(r2, e3);
    return t2.exists ? t2.object : null;
  }, analyzePath(r2, e3) {
    try {
      r2 = (n2 = ft.lookupPath(r2, { follow: !e3 })).path;
    } catch (o2) {
    }
    var t2 = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
    try {
      var n2 = ft.lookupPath(r2, { parent: true });
      t2.parentExists = true, t2.parentPath = n2.path, t2.parentObject = n2.node, t2.name = Ke.basename(r2), n2 = ft.lookupPath(r2, { follow: !e3 }), t2.exists = true, t2.path = n2.path, t2.object = n2.node, t2.name = n2.node.name, t2.isRoot = "/" === n2.path;
    } catch (o2) {
      t2.error = o2.errno;
    }
    return t2;
  }, createPath(r2, e3, t2, n2) {
    r2 = "string" == typeof r2 ? r2 : ft.getPath(r2);
    for (var o2 = e3.split("/").reverse(); o2.length; ) {
      var a2 = o2.pop();
      if (a2) {
        var i2 = Ke.join2(r2, a2);
        try {
          ft.mkdir(i2);
        } catch (s2) {
        }
        r2 = i2;
      }
    }
    return i2;
  }, createFile(r2, e3, t2, n2, o2) {
    var a2 = Ke.join2("string" == typeof r2 ? r2 : ft.getPath(r2), e3), i2 = ct(n2, o2);
    return ft.create(a2, i2);
  }, createDataFile(r2, e3, t2, n2, o2, a2) {
    var i2 = e3;
    r2 && (r2 = "string" == typeof r2 ? r2 : ft.getPath(r2), i2 = e3 ? Ke.join2(r2, e3) : r2);
    var s2 = ct(n2, o2), l2 = ft.create(i2, s2);
    if (t2) {
      if ("string" == typeof t2) {
        for (var u2 = new Array(t2.length), d2 = 0, c2 = t2.length; d2 < c2; ++d2) u2[d2] = t2.charCodeAt(d2);
        t2 = u2;
      }
      ft.chmod(l2, 146 | s2);
      var f2 = ft.open(l2, 577);
      ft.write(f2, t2, 0, t2.length, 0, a2), ft.close(f2), ft.chmod(l2, s2);
    }
  }, createDevice(r2, e3, t2, n2) {
    var _a2;
    var o2 = Ke.join2("string" == typeof r2 ? r2 : ft.getPath(r2), e3), a2 = ct(!!t2, !!n2);
    (_a2 = ft.createDevice).major ?? (_a2.major = 64);
    var i2 = ft.makedev(ft.createDevice.major++, 0);
    return ft.registerDevice(i2, { open(r3) {
      r3.seekable = false;
    }, close(r3) {
      var _a3;
      ((_a3 = n2 == null ? void 0 : n2.buffer) == null ? void 0 : _a3.length) && n2(10);
    }, read(r3, e4, n3, o3, a3) {
      for (var i3 = 0, s2 = 0; s2 < o3; s2++) {
        var l2;
        try {
          l2 = t2();
        } catch (u2) {
          throw new ft.ErrnoError(29);
        }
        if (void 0 === l2 && 0 === i3) throw new ft.ErrnoError(6);
        if (null == l2) break;
        i3++, e4[n3 + s2] = l2;
      }
      return i3 && (r3.node.atime = Date.now()), i3;
    }, write(r3, e4, t3, o3, a3) {
      for (var i3 = 0; i3 < o3; i3++) try {
        n2(e4[t3 + i3]);
      } catch (s2) {
        throw new ft.ErrnoError(29);
      }
      return o3 && (r3.node.mtime = r3.node.ctime = Date.now()), i3;
    } }), ft.mkdev(o2, a2, i2);
  }, forceLoadFile(r2) {
    if (r2.isDevice || r2.isFolder || r2.link || r2.contents) return true;
    if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    try {
      r2.contents = u(r2.url), r2.usedBytes = r2.contents.length;
    } catch (e3) {
      throw new ft.ErrnoError(29);
    }
  }, createLazyFile(r2, e3, t2, n2, o2) {
    class a2 {
      constructor() {
        __publicField(this, "lengthKnown", false);
        __publicField(this, "chunks", []);
      }
      get(r3) {
        if (!(r3 > this.length - 1 || r3 < 0)) {
          var e4 = r3 % this.chunkSize, t3 = r3 / this.chunkSize | 0;
          return this.getter(t3)[e4];
        }
      }
      setDataGetter(r3) {
        this.getter = r3;
      }
      cacheLength() {
        var r3 = new XMLHttpRequest();
        if (r3.open("HEAD", t2, false), r3.send(null), !(r3.status >= 200 && r3.status < 300 || 304 === r3.status)) throw new Error("Couldn't load " + t2 + ". Status: " + r3.status);
        var e4, n3 = Number(r3.getResponseHeader("Content-length")), o3 = (e4 = r3.getResponseHeader("Accept-Ranges")) && "bytes" === e4, a3 = (e4 = r3.getResponseHeader("Content-Encoding")) && "gzip" === e4, i3 = 1048576;
        o3 || (i3 = n3);
        var s2 = (r4, e5) => {
          if (r4 > e5) throw new Error("invalid range (" + r4 + ", " + e5 + ") or no bytes requested!");
          if (e5 > n3 - 1) throw new Error("only " + n3 + " bytes available! programmer error!");
          var o4 = new XMLHttpRequest();
          if (o4.open("GET", t2, false), n3 !== i3 && o4.setRequestHeader("Range", "bytes=" + r4 + "-" + e5), o4.responseType = "arraybuffer", o4.overrideMimeType && o4.overrideMimeType("text/plain; charset=x-user-defined"), o4.send(null), !(o4.status >= 200 && o4.status < 300 || 304 === o4.status)) throw new Error("Couldn't load " + t2 + ". Status: " + o4.status);
          return void 0 !== o4.response ? new Uint8Array(o4.response || []) : rt(o4.responseText || "");
        }, l3 = this;
        l3.setDataGetter((r4) => {
          var e5 = r4 * i3, t3 = (r4 + 1) * i3 - 1;
          if (t3 = Math.min(t3, n3 - 1), void 0 === l3.chunks[r4] && (l3.chunks[r4] = s2(e5, t3)), void 0 === l3.chunks[r4]) throw new Error("doXHR failed!");
          return l3.chunks[r4];
        }), !a3 && n3 || (i3 = n3 = 1, n3 = this.getter(0).length, i3 = n3, p("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = n3, this._chunkSize = i3, this.lengthKnown = true;
      }
      get length() {
        return this.lengthKnown || this.cacheLength(), this._length;
      }
      get chunkSize() {
        return this.lengthKnown || this.cacheLength(), this._chunkSize;
      }
    }
    if ("undefined" != typeof XMLHttpRequest) {
      if (!s) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
      var i2 = { isDevice: false, contents: new a2() };
    } else i2 = { isDevice: false, url: t2 };
    var l2 = ft.createFile(r2, e3, i2, n2, o2);
    i2.contents ? l2.contents = i2.contents : i2.url && (l2.contents = null, l2.url = i2.url), Object.defineProperties(l2, { usedBytes: { get: function() {
      return this.contents.length;
    } } });
    var u2 = {};
    function d2(r3, e4, t3, n3, o3) {
      var a3 = r3.node.contents;
      if (o3 >= a3.length) return 0;
      var i3 = Math.min(a3.length - o3, n3);
      if (a3.slice) for (var s2 = 0; s2 < i3; s2++) e4[t3 + s2] = a3[o3 + s2];
      else for (s2 = 0; s2 < i3; s2++) e4[t3 + s2] = a3.get(o3 + s2);
      return i3;
    }
    return Object.keys(l2.stream_ops).forEach((r3) => {
      var e4 = l2.stream_ops[r3];
      u2[r3] = (...r4) => (ft.forceLoadFile(l2), e4(...r4));
    }), u2.read = (r3, e4, t3, n3, o3) => (ft.forceLoadFile(l2), d2(r3, e4, t3, n3, o3)), u2.mmap = (r3, e4, t3, n3, o3) => {
      ft.forceLoadFile(l2);
      var a3 = nt();
      if (!a3) throw new ft.ErrnoError(48);
      return d2(r3, w, a3, e4, t3), { ptr: a3, allocated: true };
    }, l2.stream_ops = u2, l2;
  } }, ht = { DEFAULT_POLLMASK: 5, calculateAt(r2, e3, t2) {
    if (Ke.isAbs(e3)) return e3;
    var n2;
    if (n2 = -100 === r2 ? ft.cwd() : ht.getStreamFromFD(r2).path, 0 == e3.length) {
      if (!t2) throw new ft.ErrnoError(44);
      return n2;
    }
    return n2 + "/" + e3;
  }, doStat(r2, e3, t2) {
    var n2 = r2(e3);
    k[t2 >> 2] = n2.dev, k[t2 + 4 >> 2] = n2.mode, b[t2 + 8 >> 2] = n2.nlink, k[t2 + 12 >> 2] = n2.uid, k[t2 + 16 >> 2] = n2.gid, k[t2 + 20 >> 2] = n2.rdev, I = [n2.size >>> 0, (H = n2.size, +Math.abs(H) >= 1 ? H > 0 ? +Math.floor(H / 4294967296) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)], k[t2 + 24 >> 2] = I[0], k[t2 + 28 >> 2] = I[1], k[t2 + 32 >> 2] = 4096, k[t2 + 36 >> 2] = n2.blocks;
    var o2 = n2.atime.getTime(), a2 = n2.mtime.getTime(), i2 = n2.ctime.getTime();
    return I = [Math.floor(o2 / 1e3) >>> 0, (H = Math.floor(o2 / 1e3), +Math.abs(H) >= 1 ? H > 0 ? +Math.floor(H / 4294967296) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)], k[t2 + 40 >> 2] = I[0], k[t2 + 44 >> 2] = I[1], b[t2 + 48 >> 2] = o2 % 1e3 * 1e3 * 1e3, I = [Math.floor(a2 / 1e3) >>> 0, (H = Math.floor(a2 / 1e3), +Math.abs(H) >= 1 ? H > 0 ? +Math.floor(H / 4294967296) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)], k[t2 + 56 >> 2] = I[0], k[t2 + 60 >> 2] = I[1], b[t2 + 64 >> 2] = a2 % 1e3 * 1e3 * 1e3, I = [Math.floor(i2 / 1e3) >>> 0, (H = Math.floor(i2 / 1e3), +Math.abs(H) >= 1 ? H > 0 ? +Math.floor(H / 4294967296) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)], k[t2 + 72 >> 2] = I[0], k[t2 + 76 >> 2] = I[1], b[t2 + 80 >> 2] = i2 % 1e3 * 1e3 * 1e3, I = [n2.ino >>> 0, (H = n2.ino, +Math.abs(H) >= 1 ? H > 0 ? +Math.floor(H / 4294967296) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)], k[t2 + 88 >> 2] = I[0], k[t2 + 92 >> 2] = I[1], 0;
  }, doMsync(r2, e3, t2, n2, o2) {
    if (!ft.isFile(e3.node.mode)) throw new ft.ErrnoError(43);
    if (2 & n2) return 0;
    var a2 = y.slice(r2, r2 + t2);
    ft.msync(e3, a2, o2, t2, n2);
  }, getStreamFromFD: (r2) => ft.getStreamChecked(r2), varargs: void 0, getStr: (r2) => le(r2) };
  function pt(r2) {
    try {
      var e3 = ht.getStreamFromFD(r2);
      return ft.close(e3), 0;
    } catch (t2) {
      if (void 0 === ft || "ErrnoError" !== t2.name) throw t2;
      return t2.errno;
    }
  }
  var mt = (r2, e3, t2, n2) => {
    for (var o2 = 0, a2 = 0; a2 < t2; a2++) {
      var i2 = b[e3 >> 2], s2 = b[e3 + 4 >> 2];
      e3 += 8;
      var l2 = ft.read(r2, w, i2, s2, n2);
      if (l2 < 0) return -1;
      if (o2 += l2, l2 < s2) break;
    }
    return o2;
  };
  function vt(r2, e3, t2, n2) {
    try {
      var o2 = ht.getStreamFromFD(r2), a2 = mt(o2, e3, t2);
      return b[n2 >> 2] = a2, 0;
    } catch (i2) {
      if (void 0 === ft || "ErrnoError" !== i2.name) throw i2;
      return i2.errno;
    }
  }
  var wt = (r2, e3) => e3 + 2097152 >>> 0 < 4194305 - !!r2 ? (r2 >>> 0) + 4294967296 * e3 : NaN;
  function yt(r2, e3, t2, n2, o2) {
    var a2 = wt(e3, t2);
    try {
      if (isNaN(a2)) return 61;
      var i2 = ht.getStreamFromFD(r2);
      return ft.llseek(i2, a2, n2), I = [i2.position >>> 0, (H = i2.position, +Math.abs(H) >= 1 ? H > 0 ? +Math.floor(H / 4294967296) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)], k[o2 >> 2] = I[0], k[o2 + 4 >> 2] = I[1], i2.getdents && 0 === a2 && 0 === n2 && (i2.getdents = null), 0;
    } catch (s2) {
      if (void 0 === ft || "ErrnoError" !== s2.name) throw s2;
      return s2.errno;
    }
  }
  var gt = (r2, e3, t2, n2) => {
    for (var o2 = 0, a2 = 0; a2 < t2; a2++) {
      var i2 = b[e3 >> 2], s2 = b[e3 + 4 >> 2];
      e3 += 8;
      var l2 = ft.write(r2, w, i2, s2, n2);
      if (l2 < 0) return -1;
      if (o2 += l2, l2 < s2) break;
    }
    return o2;
  };
  function Et(r2, e3, t2, n2) {
    try {
      var o2 = ht.getStreamFromFD(r2), a2 = gt(o2, e3, t2);
      return b[n2 >> 2] = a2, 0;
    } catch (i2) {
      if (void 0 === ft || "ErrnoError" !== i2.name) throw i2;
      return i2.errno;
    }
  }
  lr(), nr = o.BindingError = class extends Error {
    constructor(r2) {
      super(r2), this.name = "BindingError";
    }
  }, or = o.InternalError = class extends Error {
    constructor(r2) {
      super(r2), this.name = "InternalError";
    }
  }, Ar(), Or = o.UnboundTypeError = Kr(Error, "UnboundTypeError"), ft.createPreloadedFile = ut, ft.staticInit(), ot.doesNotExistError = new ft.ErrnoError(44), ot.doesNotExistError.stack = "<generic error, no stack>";
  var kt, bt = { q: ar, w: ir, s: sr, D: gr, B: Sr, o: Cr, p: Zr, c: ee, a: te, C: ue, i: we, E: ye, A: ge, m: be, k: Ae, j: De, b: br, F: Te, g: je, l: xe, e: Re, h: $e, f: Ne, d: ze, t: Oe, z: Le, u: Xe, v: Ge, x: pt, y: vt, r: yt, n: Et };
  Z();
  var _t, At = (r2) => (At = kt.I)(r2), Ft = (r2) => (Ft = kt.K)(r2), Pt = (r2) => (Pt = kt.L)(r2);
  function Dt() {
    function r2() {
      var _a2;
      _t || (_t = true, o.calledRun = true, P || (j(), t(o), (_a2 = o.onRuntimeInitialized) == null ? void 0 : _a2.call(o), x()));
    }
    z > 0 || (M(), z > 0 || (o.setStatus ? (o.setStatus("Running..."), setTimeout(() => {
      setTimeout(() => o.setStatus(""), 1), r2();
    }, 1)) : r2()));
  }
  if (o.dynCall_jiji = (r2, e3, t2, n2, a2) => (o.dynCall_jiji = kt.M)(r2, e3, t2, n2, a2), o.dynCall_viijii = (r2, e3, t2, n2, a2, i2, s2) => (o.dynCall_viijii = kt.N)(r2, e3, t2, n2, a2, i2, s2), o.dynCall_iiiiij = (r2, e3, t2, n2, a2, i2, s2) => (o.dynCall_iiiiij = kt.O)(r2, e3, t2, n2, a2, i2, s2), o.dynCall_iiiiijj = (r2, e3, t2, n2, a2, i2, s2, l2, u2) => (o.dynCall_iiiiijj = kt.P)(r2, e3, t2, n2, a2, i2, s2, l2, u2), o.dynCall_iiiiiijj = (r2, e3, t2, n2, a2, i2, s2, l2, u2, d2) => (o.dynCall_iiiiiijj = kt.Q)(r2, e3, t2, n2, a2, i2, s2, l2, u2, d2), O = function r2() {
    _t || Dt(), _t || (O = r2);
  }, o.preInit) for ("function" == typeof o.preInit && (o.preInit = [o.preInit]); o.preInit.length > 0; ) o.preInit.pop()();
  return Dt(), a;
});
export {
  e as default
};
//# sourceMappingURL=dxt_encoder-GHMEOND3.js.map
