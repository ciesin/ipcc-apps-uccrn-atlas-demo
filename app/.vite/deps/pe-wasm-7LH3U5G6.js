import {
  o
} from "./chunk-56GFF6UO.js";
import {
  __commonJS
} from "./chunk-JVWSFFO4.js";

// browser-external:fs
var require_fs = __commonJS({
  "browser-external:fs"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_2, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "fs" has been externalized for browser compatibility. Cannot access "fs.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:path
var require_path = __commonJS({
  "browser-external:path"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_2, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "path" has been externalized for browser compatibility. Cannot access "path.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/@arcgis/core/chunks/pe-wasm.js
var e;
var _ = { exports: {} };
function r() {
  var _a;
  return e || (e = 1, t = _, r2 = "undefined" != typeof document ? (_a = document.currentScript) == null ? void 0 : _a.src : void 0, "undefined" != typeof __filename && (r2 = r2 || __filename), o3 = function(t2 = {}) {
    var e2, _2, o4, n2, p = t2, i = new Promise((t3, r3) => {
      e2 = t3, _2 = r3;
    }), c = "object" == typeof window, s = "undefined" != typeof WorkerGlobalScope, P = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node && "renderer" != process.type, a = Object.assign({}, p), g = "./this.program", y = "";
    function d(t3) {
      return p.locateFile ? p.locateFile(t3, y) : y + t3;
    }
    if (P) {
      var u = require_fs(), b = require_path();
      y = __dirname + "/", n2 = (t3) => (t3 = q(t3) ? new URL(t3) : b.normalize(t3), u.readFileSync(t3)), o4 = (t3, e3 = true) => (t3 = q(t3) ? new URL(t3) : b.normalize(t3), new Promise((_3, r3) => {
        u.readFile(t3, e3 ? void 0 : "utf8", (t4, o5) => {
          t4 ? r3(t4) : _3(e3 ? o5.buffer : o5);
        });
      })), !p.thisProgram && process.argv.length > 1 && (g = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2);
    } else (c || s) && (s ? y = self.location.href : "undefined" != typeof document && document.currentScript && (y = document.currentScript.src), r2 && (y = r2), y = y.startsWith("blob:") ? "" : y.substr(0, y.replace(/[?#].*/, "").lastIndexOf("/") + 1), s && (n2 = (t3) => {
      var e3 = new XMLHttpRequest();
      return e3.open("GET", t3, false), e3.responseType = "arraybuffer", e3.send(null), new Uint8Array(e3.response);
    }), o4 = (t3) => q(t3) ? new Promise((e3, _3) => {
      var r3 = new XMLHttpRequest();
      r3.open("GET", t3, true), r3.responseType = "arraybuffer", r3.onload = () => {
        200 == r3.status || 0 == r3.status && r3.response ? e3(r3.response) : _3(r3.status);
      }, r3.onerror = _3, r3.send(null);
    }) : fetch(t3, { credentials: "same-origin" }).then((t4) => t4.ok ? t4.arrayBuffer() : Promise.reject(new Error(t4.status + " : " + t4.url))));
    var f, E, m = console.log.bind(console), T = console.error.bind(console);
    Object.assign(p, a), a = null;
    var O, S, h, N, l, M, D, v = false;
    function A(t3, e3) {
      t3 || X(e3);
    }
    function j() {
      var t3 = E.buffer;
      p.HEAP8 = O = new Int8Array(t3), p.HEAP16 = h = new Int16Array(t3), p.HEAPU8 = S = new Uint8Array(t3), p.HEAPU16 = new Uint16Array(t3), p.HEAP32 = N = new Int32Array(t3), p.HEAPU32 = l = new Uint32Array(t3), p.HEAPF32 = M = new Float32Array(t3), p.HEAPF64 = D = new Float64Array(t3);
    }
    var R = [], G = [], C = [];
    function I() {
      tt(R);
    }
    function L() {
      tt(G);
    }
    function U() {
      tt(C);
    }
    function F(t3) {
      G.unshift(t3);
    }
    var Y = 0, w = null;
    function x(t3) {
      Y++;
    }
    function H(t3) {
      if (0 == --Y && w) {
        var e3 = w;
        w = null, e3();
      }
    }
    function X(t3) {
      T(t3 = "Aborted(" + t3 + ")"), v = true, t3 += ". Build with -sASSERTIONS for more info.";
      var e3 = new WebAssembly.RuntimeError(t3);
      throw _2(e3), e3;
    }
    var z, W = "data:application/octet-stream;base64,", Z = (t3) => t3.startsWith(W), q = (t3) => t3.startsWith("file://");
    function B() {
      var t3 = "pe-wasm.wasm";
      return Z(t3) ? t3 : d(t3);
    }
    function K(t3) {
      if (n2) return n2(t3);
      throw "both async and sync fetching of the wasm failed";
    }
    function V(t3) {
      return o4(t3).then((t4) => new Uint8Array(t4), () => K(t3));
    }
    function k(t3, e3, _3) {
      return V(t3).then((t4) => WebAssembly.instantiate(t4, e3)).then(_3, (t4) => {
        T(`failed to asynchronously prepare wasm: ${t4}`), X(t4);
      });
    }
    function $(t3, e3, _3, r3) {
      return "function" != typeof WebAssembly.instantiateStreaming || Z(e3) || q(e3) || P || "function" != typeof fetch ? k(e3, _3, r3) : fetch(e3, { credentials: "same-origin" }).then((t4) => WebAssembly.instantiateStreaming(t4, _3).then(r3, function(t5) {
        return T(`wasm streaming compile failed: ${t5}`), T("falling back to ArrayBuffer instantiation"), k(e3, _3, r3);
      }));
    }
    function J() {
      return { a: vt };
    }
    function Q() {
      var t3 = J();
      function e3(t4, e4) {
        return At = t4.exports, E = At.t, j(), F(At.u), H(), At;
      }
      function r3(t4) {
        e3(t4.instance);
      }
      return x(), z ?? (z = B()), $(f, z, t3, r3).catch(_2), {};
    }
    var tt = (t3) => {
      for (; t3.length > 0; ) t3.shift()(p);
    };
    function et(t3, e3 = "i8") {
      switch (e3.endsWith("*") && (e3 = "*"), e3) {
        case "i1":
        case "i8":
          return O[t3];
        case "i16":
          return h[t3 >> 1];
        case "i32":
          return N[t3 >> 2];
        case "i64":
          X("to do getValue(i64) use WASM_BIGINT");
        case "float":
          return M[t3 >> 2];
        case "double":
          return D[t3 >> 3];
        case "*":
          return l[t3 >> 2];
        default:
          X(`invalid type for getValue: ${e3}`);
      }
    }
    var _t = "undefined" != typeof TextDecoder ? new TextDecoder() : void 0, rt = (t3, e3 = 0, _3 = NaN) => {
      for (var r3 = e3 + _3, o5 = e3; t3[o5] && !(o5 >= r3); ) ++o5;
      if (o5 - e3 > 16 && t3.buffer && _t) return _t.decode(t3.subarray(e3, o5));
      for (var n3 = ""; e3 < o5; ) {
        var p2 = t3[e3++];
        if (128 & p2) {
          var i2 = 63 & t3[e3++];
          if (192 != (224 & p2)) {
            var c2 = 63 & t3[e3++];
            if ((p2 = 224 == (240 & p2) ? (15 & p2) << 12 | i2 << 6 | c2 : (7 & p2) << 18 | i2 << 12 | c2 << 6 | 63 & t3[e3++]) < 65536) n3 += String.fromCharCode(p2);
            else {
              var s2 = p2 - 65536;
              n3 += String.fromCharCode(55296 | s2 >> 10, 56320 | 1023 & s2);
            }
          } else n3 += String.fromCharCode((31 & p2) << 6 | i2);
        } else n3 += String.fromCharCode(p2);
      }
      return n3;
    }, ot = (t3, e3) => t3 ? rt(S, t3, e3) : "";
    function nt(t3, e3, _3) {
      return 0;
    }
    var pt = (t3, e3, _3, r3) => {
      if (!(r3 > 0)) return 0;
      for (var o5 = _3, n3 = _3 + r3 - 1, p2 = 0; p2 < t3.length; ++p2) {
        var i2 = t3.charCodeAt(p2);
        if (i2 >= 55296 && i2 <= 57343 && (i2 = 65536 + ((1023 & i2) << 10) | 1023 & t3.charCodeAt(++p2)), i2 <= 127) {
          if (_3 >= n3) break;
          e3[_3++] = i2;
        } else if (i2 <= 2047) {
          if (_3 + 1 >= n3) break;
          e3[_3++] = 192 | i2 >> 6, e3[_3++] = 128 | 63 & i2;
        } else if (i2 <= 65535) {
          if (_3 + 2 >= n3) break;
          e3[_3++] = 224 | i2 >> 12, e3[_3++] = 128 | i2 >> 6 & 63, e3[_3++] = 128 | 63 & i2;
        } else {
          if (_3 + 3 >= n3) break;
          e3[_3++] = 240 | i2 >> 18, e3[_3++] = 128 | i2 >> 12 & 63, e3[_3++] = 128 | i2 >> 6 & 63, e3[_3++] = 128 | 63 & i2;
        }
      }
      return e3[_3] = 0, _3 - o5;
    }, it = (t3, e3, _3) => pt(t3, S, e3, _3);
    function ct(t3, e3, _3) {
      return 0;
    }
    function st(t3, e3, _3, r3) {
    }
    var Pt = (t3) => t3 % 4 == 0 && (t3 % 100 != 0 || t3 % 400 == 0), at = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], gt = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], yt = (t3) => (Pt(t3.getFullYear()) ? at : gt)[t3.getMonth()] + t3.getDate() - 1, dt = (t3, e3) => e3 + 2097152 >>> 0 < 4194305 - !!t3 ? (t3 >>> 0) + 4294967296 * e3 : NaN;
    function ut(t3, e3, _3) {
      var r3 = dt(t3, e3), o5 = new Date(1e3 * r3);
      N[_3 >> 2] = o5.getSeconds(), N[_3 + 4 >> 2] = o5.getMinutes(), N[_3 + 8 >> 2] = o5.getHours(), N[_3 + 12 >> 2] = o5.getDate(), N[_3 + 16 >> 2] = o5.getMonth(), N[_3 + 20 >> 2] = o5.getFullYear() - 1900, N[_3 + 24 >> 2] = o5.getDay();
      var n3 = 0 | yt(o5);
      N[_3 + 28 >> 2] = n3, N[_3 + 36 >> 2] = -60 * o5.getTimezoneOffset();
      var p2 = new Date(o5.getFullYear(), 0, 1), i2 = new Date(o5.getFullYear(), 6, 1).getTimezoneOffset(), c2 = p2.getTimezoneOffset(), s2 = 0 | (i2 != c2 && o5.getTimezoneOffset() == Math.min(c2, i2));
      N[_3 + 32 >> 2] = s2;
    }
    var bt = () => 2147483648, ft = (t3, e3) => Math.ceil(t3 / e3) * e3, Et = (t3) => {
      var e3 = (t3 - E.buffer.byteLength + 65535) / 65536 | 0;
      try {
        return E.grow(e3), j(), 1;
      } catch (_3) {
      }
    }, mt = {}, Tt = () => g || "./this.program", Ot = () => {
      if (!Ot.strings) {
        var t3 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: Tt() };
        for (var e3 in mt) void 0 === mt[e3] ? delete t3[e3] : t3[e3] = mt[e3];
        var _3 = [];
        for (var e3 in t3) _3.push(`${e3}=${t3[e3]}`);
        Ot.strings = _3;
      }
      return Ot.strings;
    }, St = (t3, e3) => {
      for (var _3 = 0; _3 < t3.length; ++_3) O[e3++] = t3.charCodeAt(_3);
      O[e3] = 0;
    };
    function ht(t3, e3, _3, r3, o5) {
      return 70;
    }
    var Nt = [null, [], []], lt = (t3, e3) => {
      var _3 = Nt[t3];
      0 === e3 || 10 === e3 ? ((1 === t3 ? m : T)(rt(_3)), _3.length = 0) : _3.push(e3);
    }, Mt = (t3) => {
      for (var e3 = 0, _3 = 0; _3 < t3.length; ++_3) {
        var r3 = t3.charCodeAt(_3);
        r3 <= 127 ? e3++ : r3 <= 2047 ? e3 += 2 : r3 >= 55296 && r3 <= 57343 ? (e3 += 4, ++_3) : e3 += 3;
      }
      return e3;
    };
    function Dt(t3, e3, _3) {
      var r3 = Mt(t3) + 1, o5 = new Array(r3);
      return pt(t3, o5, 0, o5.length), o5;
    }
    var vt = { c: nt, q: (t3, e3, _3) => {
    }, h: ct, d: st, o: (t3) => {
    }, n: (t3, e3) => {
    }, p: (t3, e3, _3) => {
    }, l: () => {
      X("");
    }, s: (t3, e3, _3) => S.copyWithin(t3, e3, e3 + _3), j: ut, r: (t3, e3, _3, r3) => {
      var o5 = (/* @__PURE__ */ new Date()).getFullYear(), n3 = new Date(o5, 0, 1), p2 = new Date(o5, 6, 1), i2 = n3.getTimezoneOffset(), c2 = p2.getTimezoneOffset(), s2 = Math.max(i2, c2);
      l[t3 >> 2] = 60 * s2, N[e3 >> 2] = Number(i2 != c2);
      var P2 = (t4) => {
        var e4 = t4 >= 0 ? "-" : "+", _4 = Math.abs(t4);
        return `UTC${e4}${String(Math.floor(_4 / 60)).padStart(2, "0")}${String(_4 % 60).padStart(2, "0")}`;
      }, a2 = P2(i2), g2 = P2(c2);
      c2 < i2 ? (it(a2, _3, 17), it(g2, r3, 17)) : (it(a2, r3, 17), it(g2, _3, 17));
    }, i: () => Date.now(), m: (t3) => {
      var e3 = S.length;
      t3 >>>= 0;
      var _3 = bt();
      if (t3 > _3) return false;
      for (var r3 = 1; r3 <= 4; r3 *= 2) {
        var o5 = e3 * (1 + 0.2 / r3);
        o5 = Math.min(o5, t3 + 100663296);
        var n3 = Math.min(_3, ft(Math.max(t3, o5), 65536));
        if (Et(n3)) return true;
      }
      return false;
    }, e: (t3, e3) => {
      var _3 = 0;
      return Ot().forEach((r3, o5) => {
        var n3 = e3 + _3;
        l[t3 + 4 * o5 >> 2] = n3, St(r3, n3), _3 += r3.length + 1;
      }), 0;
    }, f: (t3, e3) => {
      var _3 = Ot();
      l[t3 >> 2] = _3.length;
      var r3 = 0;
      return _3.forEach((t4) => r3 += t4.length + 1), l[e3 >> 2] = r3, 0;
    }, a: (t3) => 52, g: (t3, e3, _3, r3) => 52, k: ht, b: (t3, e3, _3, r3) => {
      for (var o5 = 0, n3 = 0; n3 < _3; n3++) {
        var p2 = l[e3 >> 2], i2 = l[e3 + 4 >> 2];
        e3 += 8;
        for (var c2 = 0; c2 < i2; c2++) lt(t3, S[p2 + c2]);
        o5 += i2;
      }
      return l[r3 >> 2] = o5, 0;
    } }, At = Q();
    p._webidl_free = (t3) => (p._webidl_free = At.v)(t3), p._webidl_malloc = (t3) => (p._webidl_malloc = At.w)(t3);
    var jt, Rt = p._emscripten_bind_PeObject_getCode_0 = (t3) => (Rt = p._emscripten_bind_PeObject_getCode_0 = At.x)(t3), Gt = p._emscripten_bind_PeObject_getName_1 = (t3, e3) => (Gt = p._emscripten_bind_PeObject_getName_1 = At.y)(t3, e3), Ct = p._emscripten_bind_PeObject_getType_0 = (t3) => (Ct = p._emscripten_bind_PeObject_getType_0 = At.z)(t3), It = p._emscripten_bind_PeCoordsys_isEqual_1 = (t3, e3) => (It = p._emscripten_bind_PeCoordsys_isEqual_1 = At.A)(t3, e3), Lt = p._emscripten_bind_PeCoordsys_getCode_0 = (t3) => (Lt = p._emscripten_bind_PeCoordsys_getCode_0 = At.B)(t3), Ut = p._emscripten_bind_PeCoordsys_getName_1 = (t3, e3) => (Ut = p._emscripten_bind_PeCoordsys_getName_1 = At.C)(t3, e3), Ft = p._emscripten_bind_PeCoordsys_getType_0 = (t3) => (Ft = p._emscripten_bind_PeCoordsys_getType_0 = At.D)(t3), Yt = p._emscripten_bind_PeUnit_getUnitFactor_0 = (t3) => (Yt = p._emscripten_bind_PeUnit_getUnitFactor_0 = At.E)(t3), wt = p._emscripten_bind_PeUnit_getCode_0 = (t3) => (wt = p._emscripten_bind_PeUnit_getCode_0 = At.F)(t3), xt = p._emscripten_bind_PeUnit_getName_1 = (t3, e3) => (xt = p._emscripten_bind_PeUnit_getName_1 = At.G)(t3, e3), Ht = p._emscripten_bind_PeUnit_getType_0 = (t3) => (Ht = p._emscripten_bind_PeUnit_getType_0 = At.H)(t3), Xt = p._emscripten_bind_VoidPtr___destroy___0 = (t3) => (Xt = p._emscripten_bind_VoidPtr___destroy___0 = At.I)(t3), zt = p._emscripten_bind_PeAngunit_getCode_0 = (t3) => (zt = p._emscripten_bind_PeAngunit_getCode_0 = At.J)(t3), Wt = p._emscripten_bind_PeAngunit_getName_1 = (t3, e3) => (Wt = p._emscripten_bind_PeAngunit_getName_1 = At.K)(t3, e3), Zt = p._emscripten_bind_PeAngunit_getType_0 = (t3) => (Zt = p._emscripten_bind_PeAngunit_getType_0 = At.L)(t3), qt = p._emscripten_bind_PeAngunit_getUnitFactor_0 = (t3) => (qt = p._emscripten_bind_PeAngunit_getUnitFactor_0 = At.M)(t3), Bt = p._emscripten_bind_PeDatum_getSpheroid_0 = (t3) => (Bt = p._emscripten_bind_PeDatum_getSpheroid_0 = At.N)(t3), Kt = p._emscripten_bind_PeDatum_getCode_0 = (t3) => (Kt = p._emscripten_bind_PeDatum_getCode_0 = At.O)(t3), Vt = p._emscripten_bind_PeDatum_getName_1 = (t3, e3) => (Vt = p._emscripten_bind_PeDatum_getName_1 = At.P)(t3, e3), kt = p._emscripten_bind_PeDatum_getType_0 = (t3) => (kt = p._emscripten_bind_PeDatum_getType_0 = At.Q)(t3), $t = p._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = (t3) => ($t = p._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = At.R)(t3), Jt = p._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = (t3) => (Jt = p._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = At.S)(t3), Qt = p._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = (t3) => (Qt = p._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = At.T)(t3), te = p._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = (t3) => (te = p._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = At.U)(t3), ee = p._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = (t3) => (ee = p._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = At.V)(t3), _e = p._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = (t3) => (_e = p._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = At.W)(t3), re = p._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = (t3) => (re = p._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = At.X)(t3), oe = p._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = (t3) => (oe = p._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = At.Y)(t3), ne = p._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = (t3) => (ne = p._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = At.Z)(t3), pe = p._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = (t3) => (pe = p._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = At._)(t3), ie = p._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = (t3) => (ie = p._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = At.$)(t3), ce = p._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = (t3) => (ce = p._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = At.aa)(t3), se = p._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = (t3) => (se = p._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = At.ba)(t3), Pe = p._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = (t3) => (Pe = p._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = At.ca)(t3), ae = p._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = (t3) => (ae = p._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = At.da)(t3), ge = p._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = (t3) => (ge = p._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = At.ea)(t3), ye = p._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = (t3) => (ye = p._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = At.fa)(t3), de = p._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = (t3) => (de = p._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = At.ga)(t3), ue = p._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = (t3) => (ue = p._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = At.ha)(t3), be = p._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = (t3) => (be = p._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = At.ia)(t3), fe = p._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT_0 = (t3) => (fe = p._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT_0 = At.ja)(t3), Ee = p._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT2_0 = (t3) => (Ee = p._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT2_0 = At.ka)(t3), me = p._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = (t3) => (me = p._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = At.la)(t3), Te = p._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = (t3) => (Te = p._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = At.ma)(t3), Oe = p._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = (t3) => (Oe = p._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = At.na)(t3), Se = p._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = (t3) => (Se = p._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = At.oa)(t3), he = p._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = (t3) => (he = p._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = At.pa)(t3), Ne = p._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = (t3) => (Ne = p._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = At.qa)(t3), le = p._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = (t3) => (le = p._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = At.ra)(t3), Me = p._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = (t3) => (Me = p._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = At.sa)(t3), De = p._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = (t3) => (De = p._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = At.ta)(t3), ve = p._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = (t3) => (ve = p._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = At.ua)(t3), Ae = p._emscripten_bind_PeDouble_PeDouble_1 = (t3) => (Ae = p._emscripten_bind_PeDouble_PeDouble_1 = At.va)(t3), je = p._emscripten_bind_PeDouble_get_val_0 = (t3) => (je = p._emscripten_bind_PeDouble_get_val_0 = At.wa)(t3), Re = p._emscripten_bind_PeDouble_set_val_1 = (t3, e3) => (Re = p._emscripten_bind_PeDouble_set_val_1 = At.xa)(t3, e3), Ge = p._emscripten_bind_PeDouble___destroy___0 = (t3) => (Ge = p._emscripten_bind_PeDouble___destroy___0 = At.ya)(t3), Ce = p._emscripten_bind_PeFactory_initialize_1 = (t3) => (Ce = p._emscripten_bind_PeFactory_initialize_1 = At.za)(t3), Ie = p._emscripten_bind_PeFactory_factoryByType_2 = (t3, e3) => (Ie = p._emscripten_bind_PeFactory_factoryByType_2 = At.Aa)(t3, e3), Le = p._emscripten_bind_PeFactory_fromString_2 = (t3, e3) => (Le = p._emscripten_bind_PeFactory_fromString_2 = At.Ba)(t3, e3), Ue = p._emscripten_bind_PeFactory_getCode_1 = (t3) => (Ue = p._emscripten_bind_PeFactory_getCode_1 = At.Ca)(t3), Fe = p._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = (t3, e3, _3, r3, o5, n3) => (Fe = p._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = At.Da)(t3, e3, _3, r3, o5, n3), Ye = p._emscripten_bind_PeGCSExtent_getLLon_0 = (t3) => (Ye = p._emscripten_bind_PeGCSExtent_getLLon_0 = At.Ea)(t3), we = p._emscripten_bind_PeGCSExtent_getSLat_0 = (t3) => (we = p._emscripten_bind_PeGCSExtent_getSLat_0 = At.Fa)(t3), xe = p._emscripten_bind_PeGCSExtent_getRLon_0 = (t3) => (xe = p._emscripten_bind_PeGCSExtent_getRLon_0 = At.Ga)(t3), He = p._emscripten_bind_PeGCSExtent_getNLat_0 = (t3) => (He = p._emscripten_bind_PeGCSExtent_getNLat_0 = At.Ha)(t3), Xe = p._emscripten_bind_PeGCSExtent___destroy___0 = (t3) => (Xe = p._emscripten_bind_PeGCSExtent___destroy___0 = At.Ia)(t3), ze = p._emscripten_bind_PeGeogcs_Delete_0 = (t3) => (ze = p._emscripten_bind_PeGeogcs_Delete_0 = At.Ja)(t3), We = p._emscripten_bind_PeGeogcs_cloneAlterUnits_1 = (t3, e3) => (We = p._emscripten_bind_PeGeogcs_cloneAlterUnits_1 = At.Ka)(t3, e3), Ze = p._emscripten_bind_PeGeogcs_getDatum_0 = (t3) => (Ze = p._emscripten_bind_PeGeogcs_getDatum_0 = At.La)(t3), qe = p._emscripten_bind_PeGeogcs_getPrimem_0 = (t3) => (qe = p._emscripten_bind_PeGeogcs_getPrimem_0 = At.Ma)(t3), Be = p._emscripten_bind_PeGeogcs_getUnit_0 = (t3) => (Be = p._emscripten_bind_PeGeogcs_getUnit_0 = At.Na)(t3), Ke = p._emscripten_bind_PeGeogcs_isEqual_1 = (t3, e3) => (Ke = p._emscripten_bind_PeGeogcs_isEqual_1 = At.Oa)(t3, e3), Ve = p._emscripten_bind_PeGeogcs_getCode_0 = (t3) => (Ve = p._emscripten_bind_PeGeogcs_getCode_0 = At.Pa)(t3), ke = p._emscripten_bind_PeGeogcs_getName_1 = (t3, e3) => (ke = p._emscripten_bind_PeGeogcs_getName_1 = At.Qa)(t3, e3), $e = p._emscripten_bind_PeGeogcs_getType_0 = (t3) => ($e = p._emscripten_bind_PeGeogcs_getType_0 = At.Ra)(t3), Je = p._emscripten_bind_PeGeogtran_isEqual_1 = (t3, e3) => (Je = p._emscripten_bind_PeGeogtran_isEqual_1 = At.Sa)(t3, e3), Qe = p._emscripten_bind_PeGeogtran_getGeogcs1_0 = (t3) => (Qe = p._emscripten_bind_PeGeogtran_getGeogcs1_0 = At.Ta)(t3), t_ = p._emscripten_bind_PeGeogtran_getGeogcs2_0 = (t3) => (t_ = p._emscripten_bind_PeGeogtran_getGeogcs2_0 = At.Ua)(t3), e_ = p._emscripten_bind_PeGeogtran_getParameters_0 = (t3) => (e_ = p._emscripten_bind_PeGeogtran_getParameters_0 = At.Va)(t3), __ = p._emscripten_bind_PeGeogtran_loadConstants_0 = (t3) => (__ = p._emscripten_bind_PeGeogtran_loadConstants_0 = At.Wa)(t3), r_ = p._emscripten_bind_PeGeogtran_getCode_0 = (t3) => (r_ = p._emscripten_bind_PeGeogtran_getCode_0 = At.Xa)(t3), o_ = p._emscripten_bind_PeGeogtran_getName_1 = (t3, e3) => (o_ = p._emscripten_bind_PeGeogtran_getName_1 = At.Ya)(t3, e3), n_ = p._emscripten_bind_PeGeogtran_getType_0 = (t3) => (n_ = p._emscripten_bind_PeGeogtran_getType_0 = At.Za)(t3), p_ = p._emscripten_bind_PeGTlistExtended_getGTlist_6 = (t3, e3, _3, r3, o5, n3) => (p_ = p._emscripten_bind_PeGTlistExtended_getGTlist_6 = At._a)(t3, e3, _3, r3, o5, n3), i_ = p._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = (t3) => (i_ = p._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = At.$a)(t3), c_ = p._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = (t3) => (c_ = p._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = At.ab)(t3), s_ = p._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = (t3) => (s_ = p._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = At.bb)(t3), P_ = p._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = (t3) => (P_ = p._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = At.cb)(t3), a_ = p._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = (t3) => (a_ = p._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = At.db)(t3), g_ = p._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = (t3) => (g_ = p._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = At.eb)(t3), y_ = p._emscripten_bind_PeHorizon_getNump_0 = (t3) => (y_ = p._emscripten_bind_PeHorizon_getNump_0 = At.fb)(t3), d_ = p._emscripten_bind_PeHorizon_getKind_0 = (t3) => (d_ = p._emscripten_bind_PeHorizon_getKind_0 = At.gb)(t3), u_ = p._emscripten_bind_PeHorizon_getInclusive_0 = (t3) => (u_ = p._emscripten_bind_PeHorizon_getInclusive_0 = At.hb)(t3), b_ = p._emscripten_bind_PeHorizon_getSize_0 = (t3) => (b_ = p._emscripten_bind_PeHorizon_getSize_0 = At.ib)(t3), f_ = p._emscripten_bind_PeHorizon_getCoord_0 = (t3) => (f_ = p._emscripten_bind_PeHorizon_getCoord_0 = At.jb)(t3), E_ = p._emscripten_bind_PeInteger_PeInteger_1 = (t3) => (E_ = p._emscripten_bind_PeInteger_PeInteger_1 = At.kb)(t3), m_ = p._emscripten_bind_PeInteger_get_val_0 = (t3) => (m_ = p._emscripten_bind_PeInteger_get_val_0 = At.lb)(t3), T_ = p._emscripten_bind_PeInteger_set_val_1 = (t3, e3) => (T_ = p._emscripten_bind_PeInteger_set_val_1 = At.mb)(t3, e3), O_ = p._emscripten_bind_PeInteger___destroy___0 = (t3) => (O_ = p._emscripten_bind_PeInteger___destroy___0 = At.nb)(t3), S_ = p._emscripten_bind_PeLineType_geodetic_distance_10 = (t3, e3, _3, r3, o5, n3, i2, c2, s2, P2) => (S_ = p._emscripten_bind_PeLineType_geodetic_distance_10 = At.ob)(t3, e3, _3, r3, o5, n3, i2, c2, s2, P2), h_ = p._emscripten_bind_PeLineType_geodetic_coordinate_9 = (t3, e3, _3, r3, o5, n3, i2, c2, s2) => (h_ = p._emscripten_bind_PeLineType_geodetic_coordinate_9 = At.pb)(t3, e3, _3, r3, o5, n3, i2, c2, s2), N_ = p._emscripten_bind_PeLineType_geodesic_coordinate_8 = (t3, e3, _3, r3, o5, n3, i2, c2) => (N_ = p._emscripten_bind_PeLineType_geodesic_coordinate_8 = At.qb)(t3, e3, _3, r3, o5, n3, i2, c2), l_ = p._emscripten_bind_PeLineType_great_elliptic_distance_9 = (t3, e3, _3, r3, o5, n3, i2, c2, s2) => (l_ = p._emscripten_bind_PeLineType_great_elliptic_distance_9 = At.rb)(t3, e3, _3, r3, o5, n3, i2, c2, s2), M_ = p._emscripten_bind_PeMath_phi_to_eta_2 = (t3, e3) => (M_ = p._emscripten_bind_PeMath_phi_to_eta_2 = At.sb)(t3, e3), D_ = p._emscripten_bind_PeMath_eta_to_phi_2 = (t3, e3) => (D_ = p._emscripten_bind_PeMath_eta_to_phi_2 = At.tb)(t3, e3), v_ = p._emscripten_bind_PeMath_phi_to_phig_2 = (t3, e3) => (v_ = p._emscripten_bind_PeMath_phi_to_phig_2 = At.ub)(t3, e3), A_ = p._emscripten_bind_PeMath_q_3 = (t3, e3, _3) => (A_ = p._emscripten_bind_PeMath_q_3 = At.vb)(t3, e3, _3), j_ = p._emscripten_bind_PeMath_q90_2 = (t3, e3) => (j_ = p._emscripten_bind_PeMath_q90_2 = At.wb)(t3, e3), R_ = p._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = (t3) => (R_ = p._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = At.xb)(t3), G_ = p._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = (t3) => (G_ = p._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = At.yb)(t3), C_ = p._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = (t3) => (C_ = p._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = At.zb)(t3), I_ = p._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = (t3) => (I_ = p._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = At.Ab)(t3), L_ = p._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = (t3) => (L_ = p._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = At.Bb)(t3), U_ = p._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = (t3) => (U_ = p._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = At.Cb)(t3), F_ = p._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = (t3) => (F_ = p._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = At.Db)(t3), Y_ = p._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = (t3) => (Y_ = p._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = At.Eb)(t3), w_ = p._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = (t3) => (w_ = p._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = At.Fb)(t3), x_ = p._emscripten_bind_PeParameter_getValue_0 = (t3) => (x_ = p._emscripten_bind_PeParameter_getValue_0 = At.Gb)(t3), H_ = p._emscripten_bind_PeParameter_getCode_0 = (t3) => (H_ = p._emscripten_bind_PeParameter_getCode_0 = At.Hb)(t3), X_ = p._emscripten_bind_PeParameter_getName_1 = (t3, e3) => (X_ = p._emscripten_bind_PeParameter_getName_1 = At.Ib)(t3, e3), z_ = p._emscripten_bind_PeParameter_getType_0 = (t3) => (z_ = p._emscripten_bind_PeParameter_getType_0 = At.Jb)(t3), W_ = p._emscripten_bind_PePCSInfo_getCentralMeridian_0 = (t3) => (W_ = p._emscripten_bind_PePCSInfo_getCentralMeridian_0 = At.Kb)(t3), Z_ = p._emscripten_bind_PePCSInfo_getDomainMinx_0 = (t3) => (Z_ = p._emscripten_bind_PePCSInfo_getDomainMinx_0 = At.Lb)(t3), q_ = p._emscripten_bind_PePCSInfo_getDomainMiny_0 = (t3) => (q_ = p._emscripten_bind_PePCSInfo_getDomainMiny_0 = At.Mb)(t3), B_ = p._emscripten_bind_PePCSInfo_getDomainMaxx_0 = (t3) => (B_ = p._emscripten_bind_PePCSInfo_getDomainMaxx_0 = At.Nb)(t3), K_ = p._emscripten_bind_PePCSInfo_getDomainMaxy_0 = (t3) => (K_ = p._emscripten_bind_PePCSInfo_getDomainMaxy_0 = At.Ob)(t3), V_ = p._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = (t3) => (V_ = p._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = At.Pb)(t3), k_ = p._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = (t3) => (k_ = p._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = At.Qb)(t3), $_ = p._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = (t3) => ($_ = p._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = At.Rb)(t3), J_ = p._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = (t3) => (J_ = p._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = At.Sb)(t3), Q_ = p._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = (t3) => (Q_ = p._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = At.Tb)(t3), tr = p._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = (t3) => (tr = p._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = At.Ub)(t3), er = p._emscripten_bind_PePCSInfo_isPannableRectangle_0 = (t3) => (er = p._emscripten_bind_PePCSInfo_isPannableRectangle_0 = At.Vb)(t3), _r = p._emscripten_bind_PePCSInfo_generate_2 = (t3, e3) => (_r = p._emscripten_bind_PePCSInfo_generate_2 = At.Wb)(t3, e3), rr = p._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = (t3) => (rr = p._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = At.Xb)(t3), or = p._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = (t3) => (or = p._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = At.Yb)(t3), nr = p._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = (t3) => (nr = p._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = At.Zb)(t3), pr = p._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = (t3) => (pr = p._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = At._b)(t3), ir = p._emscripten_bind_PePrimem_getLongitude_0 = (t3) => (ir = p._emscripten_bind_PePrimem_getLongitude_0 = At.$b)(t3), cr = p._emscripten_bind_PePrimem_getCode_0 = (t3) => (cr = p._emscripten_bind_PePrimem_getCode_0 = At.ac)(t3), sr = p._emscripten_bind_PePrimem_getName_1 = (t3, e3) => (sr = p._emscripten_bind_PePrimem_getName_1 = At.bc)(t3, e3), Pr = p._emscripten_bind_PePrimem_getType_0 = (t3) => (Pr = p._emscripten_bind_PePrimem_getType_0 = At.cc)(t3), ar = p._emscripten_bind_PeProjcs_Delete_0 = (t3) => (ar = p._emscripten_bind_PeProjcs_Delete_0 = At.dc)(t3), gr = p._emscripten_bind_PeProjcs_getGeogcs_0 = (t3) => (gr = p._emscripten_bind_PeProjcs_getGeogcs_0 = At.ec)(t3), yr = p._emscripten_bind_PeProjcs_getProjection_0 = (t3) => (yr = p._emscripten_bind_PeProjcs_getProjection_0 = At.fc)(t3), dr = p._emscripten_bind_PeProjcs_getParameters_0 = (t3) => (dr = p._emscripten_bind_PeProjcs_getParameters_0 = At.gc)(t3), ur = p._emscripten_bind_PeProjcs_getUnit_0 = (t3) => (ur = p._emscripten_bind_PeProjcs_getUnit_0 = At.hc)(t3), br = p._emscripten_bind_PeProjcs_loadConstants_0 = (t3) => (br = p._emscripten_bind_PeProjcs_loadConstants_0 = At.ic)(t3), fr = p._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = (t3) => (fr = p._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = At.jc)(t3), Er = p._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = (t3) => (Er = p._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = At.kc)(t3), mr = p._emscripten_bind_PeProjcs_isEqual_1 = (t3, e3) => (mr = p._emscripten_bind_PeProjcs_isEqual_1 = At.lc)(t3, e3), Tr = p._emscripten_bind_PeProjcs_getCode_0 = (t3) => (Tr = p._emscripten_bind_PeProjcs_getCode_0 = At.mc)(t3), Or = p._emscripten_bind_PeProjcs_getName_1 = (t3, e3) => (Or = p._emscripten_bind_PeProjcs_getName_1 = At.nc)(t3, e3), Sr = p._emscripten_bind_PeProjcs_getType_0 = (t3) => (Sr = p._emscripten_bind_PeProjcs_getType_0 = At.oc)(t3), hr = p._emscripten_bind_PeSpheroid_getAxis_0 = (t3) => (hr = p._emscripten_bind_PeSpheroid_getAxis_0 = At.pc)(t3), Nr = p._emscripten_bind_PeSpheroid_getFlattening_0 = (t3) => (Nr = p._emscripten_bind_PeSpheroid_getFlattening_0 = At.qc)(t3), lr = p._emscripten_bind_PeSpheroid_getCode_0 = (t3) => (lr = p._emscripten_bind_PeSpheroid_getCode_0 = At.rc)(t3), Mr = p._emscripten_bind_PeSpheroid_getName_1 = (t3, e3) => (Mr = p._emscripten_bind_PeSpheroid_getName_1 = At.sc)(t3, e3), Dr = p._emscripten_bind_PeSpheroid_getType_0 = (t3) => (Dr = p._emscripten_bind_PeSpheroid_getType_0 = At.tc)(t3), vr = p._emscripten_bind_PeVersion_version_string_0 = (t3) => (vr = p._emscripten_bind_PeVersion_version_string_0 = At.uc)(t3);
    function Ar() {
      function t3() {
        jt || (jt = true, p.calledRun = true, v || (L(), e2(p), U()));
      }
      Y > 0 || (I(), Y > 0 || t3());
    }
    function jr() {
    }
    function Rr(t3) {
      return (t3 || jr).__cache__;
    }
    function Gr(t3, e3) {
      var _3 = Rr(e3), r3 = _3[t3];
      return r3 || ((r3 = Object.create((e3 || jr).prototype)).ptr = t3, _3[t3] = r3);
    }
    function Cr(t3, e3) {
      return Gr(t3.ptr, e3);
    }
    function Ir(t3) {
      if (!t3.__destroy__) throw "Error: Cannot destroy object. (Did you create it yourself?)";
      t3.__destroy__(), delete Rr(t3.__class__)[t3.ptr];
    }
    function Lr(t3, e3) {
      return t3.ptr === e3.ptr;
    }
    function Ur(t3) {
      return t3.ptr;
    }
    function Fr(t3) {
      return t3.__class__;
    }
    p._pe_getPeGTlistExtendedEntrySize = () => (p._pe_getPeGTlistExtendedEntrySize = At.vc)(), p._pe_getPeGTlistExtendedGTsSize = () => (p._pe_getPeGTlistExtendedGTsSize = At.wc)(), p._pe_getPeHorizonSize = () => (p._pe_getPeHorizonSize = At.xc)(), p._pe_geog_to_geog = (t3, e3, _3, r3, o5) => (p._pe_geog_to_geog = At.zc)(t3, e3, _3, r3, o5), p._pe_geog_to_proj = (t3, e3, _3) => (p._pe_geog_to_proj = At.Ac)(t3, e3, _3), p._pe_geog_to_dd = (t3, e3, _3, r3, o5) => (p._pe_geog_to_dd = At.Bc)(t3, e3, _3, r3, o5), p._pe_dd_to_geog = (t3, e3, _3, r3) => (p._pe_dd_to_geog = At.Cc)(t3, e3, _3, r3), p._pe_geog_to_ddm = (t3, e3, _3, r3, o5) => (p._pe_geog_to_ddm = At.Dc)(t3, e3, _3, r3, o5), p._pe_ddm_to_geog = (t3, e3, _3, r3) => (p._pe_ddm_to_geog = At.Ec)(t3, e3, _3, r3), p._pe_geog_to_dms = (t3, e3, _3, r3, o5) => (p._pe_geog_to_dms = At.Fc)(t3, e3, _3, r3, o5), p._pe_dms_to_geog = (t3, e3, _3, r3) => (p._pe_dms_to_geog = At.Gc)(t3, e3, _3, r3), p._pe_geog_to_mgrs_extended = (t3, e3, _3, r3, o5, n3, i2) => (p._pe_geog_to_mgrs_extended = At.Hc)(t3, e3, _3, r3, o5, n3, i2), p._pe_mgrs_to_geog_extended = (t3, e3, _3, r3, o5) => (p._pe_mgrs_to_geog_extended = At.Ic)(t3, e3, _3, r3, o5), p._pe_geog_to_usng = (t3, e3, _3, r3, o5, n3, i2) => (p._pe_geog_to_usng = At.Jc)(t3, e3, _3, r3, o5, n3, i2), p._pe_usng_to_geog = (t3, e3, _3, r3) => (p._pe_usng_to_geog = At.Kc)(t3, e3, _3, r3), p._pe_geog_to_utm = (t3, e3, _3, r3, o5) => (p._pe_geog_to_utm = At.Lc)(t3, e3, _3, r3, o5), p._pe_utm_to_geog = (t3, e3, _3, r3, o5) => (p._pe_utm_to_geog = At.Mc)(t3, e3, _3, r3, o5), p._pe_object_to_string_ext = (t3, e3, _3) => (p._pe_object_to_string_ext = At.Nc)(t3, e3, _3), p._pe_proj_to_geog_center = (t3, e3, _3, r3) => (p._pe_proj_to_geog_center = At.Oc)(t3, e3, _3, r3), p.getValue = et, p.UTF8ToString = ot, w = function t3() {
      jt || Ar(), jt || (w = t3);
    }, Ar(), jr.prototype = Object.create(jr.prototype), jr.prototype.constructor = jr, jr.prototype.__class__ = jr, jr.__cache__ = {}, p.WrapperObject = jr, p.getCache = Rr, p.wrapPointer = Gr, p.castObject = Cr, p.NULL = Gr(0), p.destroy = Ir, p.compare = Lr, p.getPointer = Ur, p.getClass = Fr;
    var Yr = { buffer: 0, size: 0, pos: 0, temps: [], needed: 0, prepare() {
      if (Yr.needed) {
        for (var t3 = 0; t3 < Yr.temps.length; t3++) p._webidl_free(Yr.temps[t3]);
        Yr.temps.length = 0, p._webidl_free(Yr.buffer), Yr.buffer = 0, Yr.size += Yr.needed, Yr.needed = 0;
      }
      Yr.buffer || (Yr.size += 128, Yr.buffer = p._webidl_malloc(Yr.size), A(Yr.buffer)), Yr.pos = 0;
    }, alloc(t3, e3) {
      A(Yr.buffer);
      var _3, r3 = e3.BYTES_PER_ELEMENT, o5 = t3.length * r3;
      return o5 = ft(o5, 8), Yr.pos + o5 >= Yr.size ? (A(o5 > 0), Yr.needed += o5, _3 = p._webidl_malloc(o5), Yr.temps.push(_3)) : (_3 = Yr.buffer + Yr.pos, Yr.pos += o5), _3;
    }, copy(t3, e3, _3) {
      _3 /= e3.BYTES_PER_ELEMENT;
      for (var r3 = 0; r3 < t3.length; r3++) e3[_3 + r3] = t3[r3];
    } };
    function wr(t3) {
      if ("string" == typeof t3) {
        var e3 = Dt(t3), _3 = Yr.alloc(e3, O);
        return Yr.copy(e3, O, _3), _3;
      }
      return t3;
    }
    function xr(t3) {
      if ("object" == typeof t3) {
        var e3 = Yr.alloc(t3, O);
        return Yr.copy(t3, O, e3), e3;
      }
      return t3;
    }
    function Hr(t3) {
      if ("object" == typeof t3) {
        var e3 = Yr.alloc(t3, h);
        return Yr.copy(t3, h, e3), e3;
      }
      return t3;
    }
    function Xr(t3) {
      if ("object" == typeof t3) {
        var e3 = Yr.alloc(t3, N);
        return Yr.copy(t3, N, e3), e3;
      }
      return t3;
    }
    function zr(t3) {
      if ("object" == typeof t3) {
        var e3 = Yr.alloc(t3, M);
        return Yr.copy(t3, M, e3), e3;
      }
      return t3;
    }
    function Wr(t3) {
      if ("object" == typeof t3) {
        var e3 = Yr.alloc(t3, D);
        return Yr.copy(t3, D, e3), e3;
      }
      return t3;
    }
    function Zr() {
      throw "cannot construct a PeObject, no constructor in IDL";
    }
    function qr() {
      throw "cannot construct a PeCoordsys, no constructor in IDL";
    }
    function Br() {
      throw "cannot construct a PeUnit, no constructor in IDL";
    }
    function Kr() {
      throw "cannot construct a VoidPtr, no constructor in IDL";
    }
    function Vr() {
      throw "cannot construct a PeAngunit, no constructor in IDL";
    }
    function kr() {
      throw "cannot construct a PeDatum, no constructor in IDL";
    }
    function $r() {
      throw "cannot construct a PeDefs, no constructor in IDL";
    }
    function Jr(t3) {
      t3 && "object" == typeof t3 && (t3 = t3.ptr), this.ptr = Ae(t3), Rr(Jr)[this.ptr] = this;
    }
    function Qr() {
      throw "cannot construct a PeFactory, no constructor in IDL";
    }
    function to(t3, e3, _3, r3, o5, n3) {
      t3 && "object" == typeof t3 && (t3 = t3.ptr), e3 && "object" == typeof e3 && (e3 = e3.ptr), _3 && "object" == typeof _3 && (_3 = _3.ptr), r3 && "object" == typeof r3 && (r3 = r3.ptr), o5 && "object" == typeof o5 && (o5 = o5.ptr), n3 && "object" == typeof n3 && (n3 = n3.ptr), this.ptr = Fe(t3, e3, _3, r3, o5, n3), Rr(to)[this.ptr] = this;
    }
    function eo() {
      throw "cannot construct a PeGeogcs, no constructor in IDL";
    }
    function _o() {
      throw "cannot construct a PeGeogtran, no constructor in IDL";
    }
    function ro() {
      throw "cannot construct a PeGTlistExtended, no constructor in IDL";
    }
    function oo() {
      throw "cannot construct a PeGTlistExtendedEntry, no constructor in IDL";
    }
    function no() {
      throw "cannot construct a PeGTlistExtendedGTs, no constructor in IDL";
    }
    function po() {
      throw "cannot construct a PeHorizon, no constructor in IDL";
    }
    function io(t3) {
      t3 && "object" == typeof t3 && (t3 = t3.ptr), this.ptr = E_(t3), Rr(io)[this.ptr] = this;
    }
    function co() {
      throw "cannot construct a PeLineType, no constructor in IDL";
    }
    function so() {
      throw "cannot construct a PeMath, no constructor in IDL";
    }
    function Po() {
      throw "cannot construct a PeNotationMgrs, no constructor in IDL";
    }
    function ao() {
      throw "cannot construct a PeNotationUtm, no constructor in IDL";
    }
    function go() {
      throw "cannot construct a PeParameter, no constructor in IDL";
    }
    function yo() {
      throw "cannot construct a PePCSInfo, no constructor in IDL";
    }
    function uo() {
      throw "cannot construct a PePrimem, no constructor in IDL";
    }
    function bo() {
      throw "cannot construct a PeProjcs, no constructor in IDL";
    }
    function fo() {
      throw "cannot construct a PeSpheroid, no constructor in IDL";
    }
    function Eo() {
      throw "cannot construct a PeVersion, no constructor in IDL";
    }
    return Zr.prototype = Object.create(jr.prototype), Zr.prototype.constructor = Zr, Zr.prototype.__class__ = Zr, Zr.__cache__ = {}, p.PeObject = Zr, Zr.prototype.getCode = Zr.prototype.getCode = function() {
      var t3 = this.ptr;
      return Rt(t3);
    }, Zr.prototype.getName = Zr.prototype.getName = function(t3) {
      var e3 = this.ptr;
      return Yr.prepare(), "object" == typeof t3 && (t3 = xr(t3)), ot(Gt(e3, t3));
    }, Zr.prototype.getType = Zr.prototype.getType = function() {
      var t3 = this.ptr;
      return Ct(t3);
    }, qr.prototype = Object.create(Zr.prototype), qr.prototype.constructor = qr, qr.prototype.__class__ = qr, qr.__cache__ = {}, p.PeCoordsys = qr, qr.prototype.isEqual = qr.prototype.isEqual = function(t3) {
      var e3 = this.ptr;
      return t3 && "object" == typeof t3 && (t3 = t3.ptr), !!It(e3, t3);
    }, qr.prototype.getCode = qr.prototype.getCode = function() {
      var t3 = this.ptr;
      return Lt(t3);
    }, qr.prototype.getName = qr.prototype.getName = function(t3) {
      var e3 = this.ptr;
      return Yr.prepare(), "object" == typeof t3 && (t3 = xr(t3)), ot(Ut(e3, t3));
    }, qr.prototype.getType = qr.prototype.getType = function() {
      var t3 = this.ptr;
      return Ft(t3);
    }, Br.prototype = Object.create(Zr.prototype), Br.prototype.constructor = Br, Br.prototype.__class__ = Br, Br.__cache__ = {}, p.PeUnit = Br, Br.prototype.getUnitFactor = Br.prototype.getUnitFactor = function() {
      var t3 = this.ptr;
      return Yt(t3);
    }, Br.prototype.getCode = Br.prototype.getCode = function() {
      var t3 = this.ptr;
      return wt(t3);
    }, Br.prototype.getName = Br.prototype.getName = function(t3) {
      var e3 = this.ptr;
      return Yr.prepare(), "object" == typeof t3 && (t3 = xr(t3)), ot(xt(e3, t3));
    }, Br.prototype.getType = Br.prototype.getType = function() {
      var t3 = this.ptr;
      return Ht(t3);
    }, Kr.prototype = Object.create(jr.prototype), Kr.prototype.constructor = Kr, Kr.prototype.__class__ = Kr, Kr.__cache__ = {}, p.VoidPtr = Kr, Kr.prototype.__destroy__ = Kr.prototype.__destroy__ = function() {
      var t3 = this.ptr;
      Xt(t3);
    }, Vr.prototype = Object.create(Br.prototype), Vr.prototype.constructor = Vr, Vr.prototype.__class__ = Vr, Vr.__cache__ = {}, p.PeAngunit = Vr, Vr.prototype.getCode = Vr.prototype.getCode = function() {
      var t3 = this.ptr;
      return zt(t3);
    }, Vr.prototype.getName = Vr.prototype.getName = function(t3) {
      var e3 = this.ptr;
      return Yr.prepare(), "object" == typeof t3 && (t3 = xr(t3)), ot(Wt(e3, t3));
    }, Vr.prototype.getType = Vr.prototype.getType = function() {
      var t3 = this.ptr;
      return Zt(t3);
    }, Vr.prototype.getUnitFactor = Vr.prototype.getUnitFactor = function() {
      var t3 = this.ptr;
      return qt(t3);
    }, kr.prototype = Object.create(Zr.prototype), kr.prototype.constructor = kr, kr.prototype.__class__ = kr, kr.__cache__ = {}, p.PeDatum = kr, kr.prototype.getSpheroid = kr.prototype.getSpheroid = function() {
      var t3 = this.ptr;
      return Gr(Bt(t3), fo);
    }, kr.prototype.getCode = kr.prototype.getCode = function() {
      var t3 = this.ptr;
      return Kt(t3);
    }, kr.prototype.getName = kr.prototype.getName = function(t3) {
      var e3 = this.ptr;
      return Yr.prepare(), "object" == typeof t3 && (t3 = xr(t3)), ot(Vt(e3, t3));
    }, kr.prototype.getType = kr.prototype.getType = function() {
      var t3 = this.ptr;
      return kt(t3);
    }, $r.prototype = Object.create(jr.prototype), $r.prototype.constructor = $r, $r.prototype.__class__ = $r, $r.__cache__ = {}, p.PeDefs = $r, $r.prototype.get_PE_BUFFER_MAX = $r.prototype.get_PE_BUFFER_MAX = function() {
      var t3 = this.ptr;
      return $t(t3);
    }, Object.defineProperty($r.prototype, "PE_BUFFER_MAX", { get: $r.prototype.get_PE_BUFFER_MAX }), $r.prototype.get_PE_NAME_MAX = $r.prototype.get_PE_NAME_MAX = function() {
      var t3 = this.ptr;
      return Jt(t3);
    }, Object.defineProperty($r.prototype, "PE_NAME_MAX", { get: $r.prototype.get_PE_NAME_MAX }), $r.prototype.get_PE_MGRS_MAX = $r.prototype.get_PE_MGRS_MAX = function() {
      var t3 = this.ptr;
      return Qt(t3);
    }, Object.defineProperty($r.prototype, "PE_MGRS_MAX", { get: $r.prototype.get_PE_MGRS_MAX }), $r.prototype.get_PE_USNG_MAX = $r.prototype.get_PE_USNG_MAX = function() {
      var t3 = this.ptr;
      return te(t3);
    }, Object.defineProperty($r.prototype, "PE_USNG_MAX", { get: $r.prototype.get_PE_USNG_MAX }), $r.prototype.get_PE_DD_MAX = $r.prototype.get_PE_DD_MAX = function() {
      var t3 = this.ptr;
      return ee(t3);
    }, Object.defineProperty($r.prototype, "PE_DD_MAX", { get: $r.prototype.get_PE_DD_MAX }), $r.prototype.get_PE_DMS_MAX = $r.prototype.get_PE_DMS_MAX = function() {
      var t3 = this.ptr;
      return _e(t3);
    }, Object.defineProperty($r.prototype, "PE_DMS_MAX", { get: $r.prototype.get_PE_DMS_MAX }), $r.prototype.get_PE_DDM_MAX = $r.prototype.get_PE_DDM_MAX = function() {
      var t3 = this.ptr;
      return re(t3);
    }, Object.defineProperty($r.prototype, "PE_DDM_MAX", { get: $r.prototype.get_PE_DDM_MAX }), $r.prototype.get_PE_UTM_MAX = $r.prototype.get_PE_UTM_MAX = function() {
      var t3 = this.ptr;
      return oe(t3);
    }, Object.defineProperty($r.prototype, "PE_UTM_MAX", { get: $r.prototype.get_PE_UTM_MAX }), $r.prototype.get_PE_PARM_MAX = $r.prototype.get_PE_PARM_MAX = function() {
      var t3 = this.ptr;
      return ne(t3);
    }, Object.defineProperty($r.prototype, "PE_PARM_MAX", { get: $r.prototype.get_PE_PARM_MAX }), $r.prototype.get_PE_TYPE_NONE = $r.prototype.get_PE_TYPE_NONE = function() {
      var t3 = this.ptr;
      return pe(t3);
    }, Object.defineProperty($r.prototype, "PE_TYPE_NONE", { get: $r.prototype.get_PE_TYPE_NONE }), $r.prototype.get_PE_TYPE_GEOGCS = $r.prototype.get_PE_TYPE_GEOGCS = function() {
      var t3 = this.ptr;
      return ie(t3);
    }, Object.defineProperty($r.prototype, "PE_TYPE_GEOGCS", { get: $r.prototype.get_PE_TYPE_GEOGCS }), $r.prototype.get_PE_TYPE_PROJCS = $r.prototype.get_PE_TYPE_PROJCS = function() {
      var t3 = this.ptr;
      return ce(t3);
    }, Object.defineProperty($r.prototype, "PE_TYPE_PROJCS", { get: $r.prototype.get_PE_TYPE_PROJCS }), $r.prototype.get_PE_TYPE_GEOGTRAN = $r.prototype.get_PE_TYPE_GEOGTRAN = function() {
      var t3 = this.ptr;
      return se(t3);
    }, Object.defineProperty($r.prototype, "PE_TYPE_GEOGTRAN", { get: $r.prototype.get_PE_TYPE_GEOGTRAN }), $r.prototype.get_PE_TYPE_COORDSYS = $r.prototype.get_PE_TYPE_COORDSYS = function() {
      var t3 = this.ptr;
      return Pe(t3);
    }, Object.defineProperty($r.prototype, "PE_TYPE_COORDSYS", { get: $r.prototype.get_PE_TYPE_COORDSYS }), $r.prototype.get_PE_TYPE_UNIT = $r.prototype.get_PE_TYPE_UNIT = function() {
      var t3 = this.ptr;
      return ae(t3);
    }, Object.defineProperty($r.prototype, "PE_TYPE_UNIT", { get: $r.prototype.get_PE_TYPE_UNIT }), $r.prototype.get_PE_TYPE_LINUNIT = $r.prototype.get_PE_TYPE_LINUNIT = function() {
      var t3 = this.ptr;
      return ge(t3);
    }, Object.defineProperty($r.prototype, "PE_TYPE_LINUNIT", { get: $r.prototype.get_PE_TYPE_LINUNIT }), $r.prototype.get_PE_STR_OPTS_NONE = $r.prototype.get_PE_STR_OPTS_NONE = function() {
      var t3 = this.ptr;
      return ye(t3);
    }, Object.defineProperty($r.prototype, "PE_STR_OPTS_NONE", { get: $r.prototype.get_PE_STR_OPTS_NONE }), $r.prototype.get_PE_STR_AUTH_NONE = $r.prototype.get_PE_STR_AUTH_NONE = function() {
      var t3 = this.ptr;
      return de(t3);
    }, Object.defineProperty($r.prototype, "PE_STR_AUTH_NONE", { get: $r.prototype.get_PE_STR_AUTH_NONE }), $r.prototype.get_PE_STR_AUTH_TOP = $r.prototype.get_PE_STR_AUTH_TOP = function() {
      var t3 = this.ptr;
      return ue(t3);
    }, Object.defineProperty($r.prototype, "PE_STR_AUTH_TOP", { get: $r.prototype.get_PE_STR_AUTH_TOP }), $r.prototype.get_PE_STR_NAME_CANON = $r.prototype.get_PE_STR_NAME_CANON = function() {
      var t3 = this.ptr;
      return be(t3);
    }, Object.defineProperty($r.prototype, "PE_STR_NAME_CANON", { get: $r.prototype.get_PE_STR_NAME_CANON }), $r.prototype.get_PE_STR_FMT_WKT = $r.prototype.get_PE_STR_FMT_WKT = function() {
      var t3 = this.ptr;
      return fe(t3);
    }, Object.defineProperty($r.prototype, "PE_STR_FMT_WKT", { get: $r.prototype.get_PE_STR_FMT_WKT }), $r.prototype.get_PE_STR_FMT_WKT2 = $r.prototype.get_PE_STR_FMT_WKT2 = function() {
      var t3 = this.ptr;
      return Ee(t3);
    }, Object.defineProperty($r.prototype, "PE_STR_FMT_WKT2", { get: $r.prototype.get_PE_STR_FMT_WKT2 }), $r.prototype.get_PE_PARM_X0 = $r.prototype.get_PE_PARM_X0 = function() {
      var t3 = this.ptr;
      return me(t3);
    }, Object.defineProperty($r.prototype, "PE_PARM_X0", { get: $r.prototype.get_PE_PARM_X0 }), $r.prototype.get_PE_PARM_ND = $r.prototype.get_PE_PARM_ND = function() {
      var t3 = this.ptr;
      return Te(t3);
    }, Object.defineProperty($r.prototype, "PE_PARM_ND", { get: $r.prototype.get_PE_PARM_ND }), $r.prototype.get_PE_TRANSFORM_1_TO_2 = $r.prototype.get_PE_TRANSFORM_1_TO_2 = function() {
      var t3 = this.ptr;
      return Oe(t3);
    }, Object.defineProperty($r.prototype, "PE_TRANSFORM_1_TO_2", { get: $r.prototype.get_PE_TRANSFORM_1_TO_2 }), $r.prototype.get_PE_TRANSFORM_2_TO_1 = $r.prototype.get_PE_TRANSFORM_2_TO_1 = function() {
      var t3 = this.ptr;
      return Se(t3);
    }, Object.defineProperty($r.prototype, "PE_TRANSFORM_2_TO_1", { get: $r.prototype.get_PE_TRANSFORM_2_TO_1 }), $r.prototype.get_PE_TRANSFORM_P_TO_G = $r.prototype.get_PE_TRANSFORM_P_TO_G = function() {
      var t3 = this.ptr;
      return he(t3);
    }, Object.defineProperty($r.prototype, "PE_TRANSFORM_P_TO_G", { get: $r.prototype.get_PE_TRANSFORM_P_TO_G }), $r.prototype.get_PE_TRANSFORM_G_TO_P = $r.prototype.get_PE_TRANSFORM_G_TO_P = function() {
      var t3 = this.ptr;
      return Ne(t3);
    }, Object.defineProperty($r.prototype, "PE_TRANSFORM_G_TO_P", { get: $r.prototype.get_PE_TRANSFORM_G_TO_P }), $r.prototype.get_PE_HORIZON_RECT = $r.prototype.get_PE_HORIZON_RECT = function() {
      var t3 = this.ptr;
      return le(t3);
    }, Object.defineProperty($r.prototype, "PE_HORIZON_RECT", { get: $r.prototype.get_PE_HORIZON_RECT }), $r.prototype.get_PE_HORIZON_POLY = $r.prototype.get_PE_HORIZON_POLY = function() {
      var t3 = this.ptr;
      return Me(t3);
    }, Object.defineProperty($r.prototype, "PE_HORIZON_POLY", { get: $r.prototype.get_PE_HORIZON_POLY }), $r.prototype.get_PE_HORIZON_LINE = $r.prototype.get_PE_HORIZON_LINE = function() {
      var t3 = this.ptr;
      return De(t3);
    }, Object.defineProperty($r.prototype, "PE_HORIZON_LINE", { get: $r.prototype.get_PE_HORIZON_LINE }), $r.prototype.get_PE_HORIZON_DELTA = $r.prototype.get_PE_HORIZON_DELTA = function() {
      var t3 = this.ptr;
      return ve(t3);
    }, Object.defineProperty($r.prototype, "PE_HORIZON_DELTA", { get: $r.prototype.get_PE_HORIZON_DELTA }), Jr.prototype = Object.create(jr.prototype), Jr.prototype.constructor = Jr, Jr.prototype.__class__ = Jr, Jr.__cache__ = {}, p.PeDouble = Jr, Jr.prototype.get_val = Jr.prototype.get_val = function() {
      var t3 = this.ptr;
      return je(t3);
    }, Jr.prototype.set_val = Jr.prototype.set_val = function(t3) {
      var e3 = this.ptr;
      t3 && "object" == typeof t3 && (t3 = t3.ptr), Re(e3, t3);
    }, Object.defineProperty(Jr.prototype, "val", { get: Jr.prototype.get_val, set: Jr.prototype.set_val }), Jr.prototype.__destroy__ = Jr.prototype.__destroy__ = function() {
      var t3 = this.ptr;
      Ge(t3);
    }, Qr.prototype = Object.create(jr.prototype), Qr.prototype.constructor = Qr, Qr.prototype.__class__ = Qr, Qr.__cache__ = {}, p.PeFactory = Qr, Qr.prototype.initialize = Qr.prototype.initialize = function(t3) {
      Yr.prepare(), t3 = t3 && "object" == typeof t3 ? t3.ptr : wr(t3), Ce(t3);
    }, Qr.prototype.factoryByType = Qr.prototype.factoryByType = function(t3, e3) {
      return t3 && "object" == typeof t3 && (t3 = t3.ptr), e3 && "object" == typeof e3 && (e3 = e3.ptr), Gr(Ie(t3, e3), Zr);
    }, Qr.prototype.fromString = Qr.prototype.fromString = function(t3, e3) {
      return Yr.prepare(), t3 && "object" == typeof t3 && (t3 = t3.ptr), e3 = e3 && "object" == typeof e3 ? e3.ptr : wr(e3), Gr(Le(t3, e3), Zr);
    }, Qr.prototype.getCode = Qr.prototype.getCode = function(t3) {
      return t3 && "object" == typeof t3 && (t3 = t3.ptr), Ue(t3);
    }, to.prototype = Object.create(jr.prototype), to.prototype.constructor = to, to.prototype.__class__ = to, to.__cache__ = {}, p.PeGCSExtent = to, to.prototype.getLLon = to.prototype.getLLon = function() {
      var t3 = this.ptr;
      return Ye(t3);
    }, to.prototype.getSLat = to.prototype.getSLat = function() {
      var t3 = this.ptr;
      return we(t3);
    }, to.prototype.getRLon = to.prototype.getRLon = function() {
      var t3 = this.ptr;
      return xe(t3);
    }, to.prototype.getNLat = to.prototype.getNLat = function() {
      var t3 = this.ptr;
      return He(t3);
    }, to.prototype.__destroy__ = to.prototype.__destroy__ = function() {
      var t3 = this.ptr;
      Xe(t3);
    }, eo.prototype = Object.create(qr.prototype), eo.prototype.constructor = eo, eo.prototype.__class__ = eo, eo.__cache__ = {}, p.PeGeogcs = eo, eo.prototype.Delete = eo.prototype.Delete = function() {
      var t3 = this.ptr;
      ze(t3);
    }, eo.prototype.cloneAlterUnits = eo.prototype.cloneAlterUnits = function(t3) {
      var e3 = this.ptr;
      return t3 && "object" == typeof t3 && (t3 = t3.ptr), Gr(We(e3, t3), eo);
    }, eo.prototype.getDatum = eo.prototype.getDatum = function() {
      var t3 = this.ptr;
      return Gr(Ze(t3), kr);
    }, eo.prototype.getPrimem = eo.prototype.getPrimem = function() {
      var t3 = this.ptr;
      return Gr(qe(t3), uo);
    }, eo.prototype.getUnit = eo.prototype.getUnit = function() {
      var t3 = this.ptr;
      return Gr(Be(t3), Vr);
    }, eo.prototype.isEqual = eo.prototype.isEqual = function(t3) {
      var e3 = this.ptr;
      return t3 && "object" == typeof t3 && (t3 = t3.ptr), !!Ke(e3, t3);
    }, eo.prototype.getCode = eo.prototype.getCode = function() {
      var t3 = this.ptr;
      return Ve(t3);
    }, eo.prototype.getName = eo.prototype.getName = function(t3) {
      var e3 = this.ptr;
      return Yr.prepare(), "object" == typeof t3 && (t3 = xr(t3)), ot(ke(e3, t3));
    }, eo.prototype.getType = eo.prototype.getType = function() {
      var t3 = this.ptr;
      return $e(t3);
    }, _o.prototype = Object.create(Zr.prototype), _o.prototype.constructor = _o, _o.prototype.__class__ = _o, _o.__cache__ = {}, p.PeGeogtran = _o, _o.prototype.isEqual = _o.prototype.isEqual = function(t3) {
      var e3 = this.ptr;
      return t3 && "object" == typeof t3 && (t3 = t3.ptr), !!Je(e3, t3);
    }, _o.prototype.getGeogcs1 = _o.prototype.getGeogcs1 = function() {
      var t3 = this.ptr;
      return Gr(Qe(t3), eo);
    }, _o.prototype.getGeogcs2 = _o.prototype.getGeogcs2 = function() {
      var t3 = this.ptr;
      return Gr(t_(t3), eo);
    }, _o.prototype.getParameters = _o.prototype.getParameters = function() {
      var t3 = this.ptr;
      return e_(t3);
    }, _o.prototype.loadConstants = _o.prototype.loadConstants = function() {
      var t3 = this.ptr;
      return !!__(t3);
    }, _o.prototype.getCode = _o.prototype.getCode = function() {
      var t3 = this.ptr;
      return r_(t3);
    }, _o.prototype.getName = _o.prototype.getName = function(t3) {
      var e3 = this.ptr;
      return Yr.prepare(), "object" == typeof t3 && (t3 = xr(t3)), ot(o_(e3, t3));
    }, _o.prototype.getType = _o.prototype.getType = function() {
      var t3 = this.ptr;
      return n_(t3);
    }, ro.prototype = Object.create(jr.prototype), ro.prototype.constructor = ro, ro.prototype.__class__ = ro, ro.__cache__ = {}, p.PeGTlistExtended = ro, ro.prototype.getGTlist = ro.prototype.getGTlist = function(t3, e3, _3, r3, o5, n3) {
      return t3 && "object" == typeof t3 && (t3 = t3.ptr), e3 && "object" == typeof e3 && (e3 = e3.ptr), _3 && "object" == typeof _3 && (_3 = _3.ptr), r3 && "object" == typeof r3 && (r3 = r3.ptr), o5 && "object" == typeof o5 && (o5 = o5.ptr), n3 && "object" == typeof n3 && (n3 = n3.ptr), Gr(p_(t3, e3, _3, r3, o5, n3), oo);
    }, ro.prototype.get_PE_GTLIST_OPTS_COMMON = ro.prototype.get_PE_GTLIST_OPTS_COMMON = function() {
      var t3 = this.ptr;
      return i_(t3);
    }, Object.defineProperty(ro.prototype, "PE_GTLIST_OPTS_COMMON", { get: ro.prototype.get_PE_GTLIST_OPTS_COMMON }), oo.prototype = Object.create(jr.prototype), oo.prototype.constructor = oo, oo.prototype.__class__ = oo, oo.__cache__ = {}, p.PeGTlistExtendedEntry = oo, oo.prototype.getEntries = oo.prototype.getEntries = function() {
      var t3 = this.ptr;
      return Gr(c_(t3), no);
    }, oo.prototype.getSteps = oo.prototype.getSteps = function() {
      var t3 = this.ptr;
      return s_(t3);
    }, oo.prototype.Delete = oo.prototype.Delete = function(t3) {
      t3 && "object" == typeof t3 && (t3 = t3.ptr), P_(t3);
    }, no.prototype = Object.create(jr.prototype), no.prototype.constructor = no, no.prototype.__class__ = no, no.__cache__ = {}, p.PeGTlistExtendedGTs = no, no.prototype.getDirection = no.prototype.getDirection = function() {
      var t3 = this.ptr;
      return a_(t3);
    }, no.prototype.getGeogtran = no.prototype.getGeogtran = function() {
      var t3 = this.ptr;
      return Gr(g_(t3), _o);
    }, po.prototype = Object.create(jr.prototype), po.prototype.constructor = po, po.prototype.__class__ = po, po.__cache__ = {}, p.PeHorizon = po, po.prototype.getNump = po.prototype.getNump = function() {
      var t3 = this.ptr;
      return y_(t3);
    }, po.prototype.getKind = po.prototype.getKind = function() {
      var t3 = this.ptr;
      return d_(t3);
    }, po.prototype.getInclusive = po.prototype.getInclusive = function() {
      var t3 = this.ptr;
      return u_(t3);
    }, po.prototype.getSize = po.prototype.getSize = function() {
      var t3 = this.ptr;
      return b_(t3);
    }, po.prototype.getCoord = po.prototype.getCoord = function() {
      var t3 = this.ptr;
      return f_(t3);
    }, io.prototype = Object.create(jr.prototype), io.prototype.constructor = io, io.prototype.__class__ = io, io.__cache__ = {}, p.PeInteger = io, io.prototype.get_val = io.prototype.get_val = function() {
      var t3 = this.ptr;
      return m_(t3);
    }, io.prototype.set_val = io.prototype.set_val = function(t3) {
      var e3 = this.ptr;
      t3 && "object" == typeof t3 && (t3 = t3.ptr), T_(e3, t3);
    }, Object.defineProperty(io.prototype, "val", { get: io.prototype.get_val, set: io.prototype.set_val }), io.prototype.__destroy__ = io.prototype.__destroy__ = function() {
      var t3 = this.ptr;
      O_(t3);
    }, co.prototype = Object.create(jr.prototype), co.prototype.constructor = co, co.prototype.__class__ = co, co.__cache__ = {}, p.PeLineType = co, co.prototype.geodetic_distance = co.prototype.geodetic_distance = function(t3, e3, _3, r3, o5, n3, p2, i2, c2, s2) {
      t3 && "object" == typeof t3 && (t3 = t3.ptr), e3 && "object" == typeof e3 && (e3 = e3.ptr), _3 && "object" == typeof _3 && (_3 = _3.ptr), r3 && "object" == typeof r3 && (r3 = r3.ptr), o5 && "object" == typeof o5 && (o5 = o5.ptr), n3 && "object" == typeof n3 && (n3 = n3.ptr), p2 && "object" == typeof p2 && (p2 = p2.ptr), i2 && "object" == typeof i2 && (i2 = i2.ptr), c2 && "object" == typeof c2 && (c2 = c2.ptr), s2 && "object" == typeof s2 && (s2 = s2.ptr), S_(t3, e3, _3, r3, o5, n3, p2, i2, c2, s2);
    }, co.prototype.geodetic_coordinate = co.prototype.geodetic_coordinate = function(t3, e3, _3, r3, o5, n3, p2, i2, c2) {
      t3 && "object" == typeof t3 && (t3 = t3.ptr), e3 && "object" == typeof e3 && (e3 = e3.ptr), _3 && "object" == typeof _3 && (_3 = _3.ptr), r3 && "object" == typeof r3 && (r3 = r3.ptr), o5 && "object" == typeof o5 && (o5 = o5.ptr), n3 && "object" == typeof n3 && (n3 = n3.ptr), p2 && "object" == typeof p2 && (p2 = p2.ptr), i2 && "object" == typeof i2 && (i2 = i2.ptr), c2 && "object" == typeof c2 && (c2 = c2.ptr), h_(t3, e3, _3, r3, o5, n3, p2, i2, c2);
    }, co.prototype.geodesic_coordinate = co.prototype.geodesic_coordinate = function(t3, e3, _3, r3, o5, n3, p2, i2) {
      t3 && "object" == typeof t3 && (t3 = t3.ptr), e3 && "object" == typeof e3 && (e3 = e3.ptr), _3 && "object" == typeof _3 && (_3 = _3.ptr), r3 && "object" == typeof r3 && (r3 = r3.ptr), o5 && "object" == typeof o5 && (o5 = o5.ptr), n3 && "object" == typeof n3 && (n3 = n3.ptr), p2 && "object" == typeof p2 && (p2 = p2.ptr), i2 && "object" == typeof i2 && (i2 = i2.ptr), N_(t3, e3, _3, r3, o5, n3, p2, i2);
    }, co.prototype.great_elliptic_distance = co.prototype.great_elliptic_distance = function(t3, e3, _3, r3, o5, n3, p2, i2, c2) {
      t3 && "object" == typeof t3 && (t3 = t3.ptr), e3 && "object" == typeof e3 && (e3 = e3.ptr), _3 && "object" == typeof _3 && (_3 = _3.ptr), r3 && "object" == typeof r3 && (r3 = r3.ptr), o5 && "object" == typeof o5 && (o5 = o5.ptr), n3 && "object" == typeof n3 && (n3 = n3.ptr), p2 && "object" == typeof p2 && (p2 = p2.ptr), i2 && "object" == typeof i2 && (i2 = i2.ptr), c2 && "object" == typeof c2 && (c2 = c2.ptr), l_(t3, e3, _3, r3, o5, n3, p2, i2, c2);
    }, so.prototype = Object.create(jr.prototype), so.prototype.constructor = so, so.prototype.__class__ = so, so.__cache__ = {}, p.PeMath = so, so.prototype.phi_to_eta = so.prototype.phi_to_eta = function(t3, e3) {
      return t3 && "object" == typeof t3 && (t3 = t3.ptr), e3 && "object" == typeof e3 && (e3 = e3.ptr), M_(t3, e3);
    }, so.prototype.eta_to_phi = so.prototype.eta_to_phi = function(t3, e3) {
      return t3 && "object" == typeof t3 && (t3 = t3.ptr), e3 && "object" == typeof e3 && (e3 = e3.ptr), D_(t3, e3);
    }, so.prototype.phi_to_phig = so.prototype.phi_to_phig = function(t3, e3) {
      return t3 && "object" == typeof t3 && (t3 = t3.ptr), e3 && "object" == typeof e3 && (e3 = e3.ptr), v_(t3, e3);
    }, so.prototype.q = so.prototype.q = function(t3, e3, _3) {
      return t3 && "object" == typeof t3 && (t3 = t3.ptr), e3 && "object" == typeof e3 && (e3 = e3.ptr), _3 && "object" == typeof _3 && (_3 = _3.ptr), A_(t3, e3, _3);
    }, so.prototype.q90 = so.prototype.q90 = function(t3, e3) {
      return t3 && "object" == typeof t3 && (t3 = t3.ptr), e3 && "object" == typeof e3 && (e3 = e3.ptr), j_(t3, e3);
    }, Po.prototype = Object.create(jr.prototype), Po.prototype.constructor = Po, Po.prototype.__class__ = Po, Po.__cache__ = {}, p.PeNotationMgrs = Po, Po.prototype.get_PE_MGRS_STYLE_NEW = Po.prototype.get_PE_MGRS_STYLE_NEW = function() {
      var t3 = this.ptr;
      return R_(t3);
    }, Object.defineProperty(Po.prototype, "PE_MGRS_STYLE_NEW", { get: Po.prototype.get_PE_MGRS_STYLE_NEW }), Po.prototype.get_PE_MGRS_STYLE_OLD = Po.prototype.get_PE_MGRS_STYLE_OLD = function() {
      var t3 = this.ptr;
      return G_(t3);
    }, Object.defineProperty(Po.prototype, "PE_MGRS_STYLE_OLD", { get: Po.prototype.get_PE_MGRS_STYLE_OLD }), Po.prototype.get_PE_MGRS_STYLE_AUTO = Po.prototype.get_PE_MGRS_STYLE_AUTO = function() {
      var t3 = this.ptr;
      return C_(t3);
    }, Object.defineProperty(Po.prototype, "PE_MGRS_STYLE_AUTO", { get: Po.prototype.get_PE_MGRS_STYLE_AUTO }), Po.prototype.get_PE_MGRS_180_ZONE_1_PLUS = Po.prototype.get_PE_MGRS_180_ZONE_1_PLUS = function() {
      var t3 = this.ptr;
      return I_(t3);
    }, Object.defineProperty(Po.prototype, "PE_MGRS_180_ZONE_1_PLUS", { get: Po.prototype.get_PE_MGRS_180_ZONE_1_PLUS }), Po.prototype.get_PE_MGRS_ADD_SPACES = Po.prototype.get_PE_MGRS_ADD_SPACES = function() {
      var t3 = this.ptr;
      return L_(t3);
    }, Object.defineProperty(Po.prototype, "PE_MGRS_ADD_SPACES", { get: Po.prototype.get_PE_MGRS_ADD_SPACES }), ao.prototype = Object.create(jr.prototype), ao.prototype.constructor = ao, ao.prototype.__class__ = ao, ao.__cache__ = {}, p.PeNotationUtm = ao, ao.prototype.get_PE_UTM_OPTS_NONE = ao.prototype.get_PE_UTM_OPTS_NONE = function() {
      var t3 = this.ptr;
      return U_(t3);
    }, Object.defineProperty(ao.prototype, "PE_UTM_OPTS_NONE", { get: ao.prototype.get_PE_UTM_OPTS_NONE }), ao.prototype.get_PE_UTM_OPTS_NS = ao.prototype.get_PE_UTM_OPTS_NS = function() {
      var t3 = this.ptr;
      return F_(t3);
    }, Object.defineProperty(ao.prototype, "PE_UTM_OPTS_NS", { get: ao.prototype.get_PE_UTM_OPTS_NS }), ao.prototype.get_PE_UTM_OPTS_NS_STRICT = ao.prototype.get_PE_UTM_OPTS_NS_STRICT = function() {
      var t3 = this.ptr;
      return Y_(t3);
    }, Object.defineProperty(ao.prototype, "PE_UTM_OPTS_NS_STRICT", { get: ao.prototype.get_PE_UTM_OPTS_NS_STRICT }), ao.prototype.get_PE_UTM_OPTS_ADD_SPACES = ao.prototype.get_PE_UTM_OPTS_ADD_SPACES = function() {
      var t3 = this.ptr;
      return w_(t3);
    }, Object.defineProperty(ao.prototype, "PE_UTM_OPTS_ADD_SPACES", { get: ao.prototype.get_PE_UTM_OPTS_ADD_SPACES }), go.prototype = Object.create(Zr.prototype), go.prototype.constructor = go, go.prototype.__class__ = go, go.__cache__ = {}, p.PeParameter = go, go.prototype.getValue = go.prototype.getValue = function() {
      var t3 = this.ptr;
      return x_(t3);
    }, go.prototype.getCode = go.prototype.getCode = function() {
      var t3 = this.ptr;
      return H_(t3);
    }, go.prototype.getName = go.prototype.getName = function(t3) {
      var e3 = this.ptr;
      return Yr.prepare(), "object" == typeof t3 && (t3 = xr(t3)), ot(X_(e3, t3));
    }, go.prototype.getType = go.prototype.getType = function() {
      var t3 = this.ptr;
      return z_(t3);
    }, yo.prototype = Object.create(jr.prototype), yo.prototype.constructor = yo, yo.prototype.__class__ = yo, yo.__cache__ = {}, p.PePCSInfo = yo, yo.prototype.getCentralMeridian = yo.prototype.getCentralMeridian = function() {
      var t3 = this.ptr;
      return W_(t3);
    }, yo.prototype.getDomainMinx = yo.prototype.getDomainMinx = function() {
      var t3 = this.ptr;
      return Z_(t3);
    }, yo.prototype.getDomainMiny = yo.prototype.getDomainMiny = function() {
      var t3 = this.ptr;
      return q_(t3);
    }, yo.prototype.getDomainMaxx = yo.prototype.getDomainMaxx = function() {
      var t3 = this.ptr;
      return B_(t3);
    }, yo.prototype.getDomainMaxy = yo.prototype.getDomainMaxy = function() {
      var t3 = this.ptr;
      return K_(t3);
    }, yo.prototype.getNorthPoleLocation = yo.prototype.getNorthPoleLocation = function() {
      var t3 = this.ptr;
      return V_(t3);
    }, yo.prototype.getNorthPoleGeometry = yo.prototype.getNorthPoleGeometry = function() {
      var t3 = this.ptr;
      return k_(t3);
    }, yo.prototype.getSouthPoleLocation = yo.prototype.getSouthPoleLocation = function() {
      var t3 = this.ptr;
      return $_(t3);
    }, yo.prototype.getSouthPoleGeometry = yo.prototype.getSouthPoleGeometry = function() {
      var t3 = this.ptr;
      return J_(t3);
    }, yo.prototype.isDensificationNeeded = yo.prototype.isDensificationNeeded = function() {
      var t3 = this.ptr;
      return !!Q_(t3);
    }, yo.prototype.isGcsHorizonMultiOverlap = yo.prototype.isGcsHorizonMultiOverlap = function() {
      var t3 = this.ptr;
      return !!tr(t3);
    }, yo.prototype.isPannableRectangle = yo.prototype.isPannableRectangle = function() {
      var t3 = this.ptr;
      return !!er(t3);
    }, yo.prototype.generate = yo.prototype.generate = function(t3, e3) {
      return t3 && "object" == typeof t3 && (t3 = t3.ptr), e3 && "object" == typeof e3 && (e3 = e3.ptr), Gr(_r(t3, e3), yo);
    }, yo.prototype.get_PE_PCSINFO_OPTION_NONE = yo.prototype.get_PE_PCSINFO_OPTION_NONE = function() {
      var t3 = this.ptr;
      return rr(t3);
    }, Object.defineProperty(yo.prototype, "PE_PCSINFO_OPTION_NONE", { get: yo.prototype.get_PE_PCSINFO_OPTION_NONE }), yo.prototype.get_PE_PCSINFO_OPTION_DOMAIN = yo.prototype.get_PE_PCSINFO_OPTION_DOMAIN = function() {
      var t3 = this.ptr;
      return or(t3);
    }, Object.defineProperty(yo.prototype, "PE_PCSINFO_OPTION_DOMAIN", { get: yo.prototype.get_PE_PCSINFO_OPTION_DOMAIN }), yo.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = yo.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = function() {
      var t3 = this.ptr;
      return nr(t3);
    }, Object.defineProperty(yo.prototype, "PE_POLE_OUTSIDE_BOUNDARY", { get: yo.prototype.get_PE_POLE_OUTSIDE_BOUNDARY }), yo.prototype.get_PE_POLE_POINT = yo.prototype.get_PE_POLE_POINT = function() {
      var t3 = this.ptr;
      return pr(t3);
    }, Object.defineProperty(yo.prototype, "PE_POLE_POINT", { get: yo.prototype.get_PE_POLE_POINT }), uo.prototype = Object.create(Zr.prototype), uo.prototype.constructor = uo, uo.prototype.__class__ = uo, uo.__cache__ = {}, p.PePrimem = uo, uo.prototype.getLongitude = uo.prototype.getLongitude = function() {
      var t3 = this.ptr;
      return ir(t3);
    }, uo.prototype.getCode = uo.prototype.getCode = function() {
      var t3 = this.ptr;
      return cr(t3);
    }, uo.prototype.getName = uo.prototype.getName = function(t3) {
      var e3 = this.ptr;
      return Yr.prepare(), "object" == typeof t3 && (t3 = xr(t3)), ot(sr(e3, t3));
    }, uo.prototype.getType = uo.prototype.getType = function() {
      var t3 = this.ptr;
      return Pr(t3);
    }, bo.prototype = Object.create(qr.prototype), bo.prototype.constructor = bo, bo.prototype.__class__ = bo, bo.__cache__ = {}, p.PeProjcs = bo, bo.prototype.Delete = bo.prototype.Delete = function() {
      var t3 = this.ptr;
      ar(t3);
    }, bo.prototype.getGeogcs = bo.prototype.getGeogcs = function() {
      var t3 = this.ptr;
      return Gr(gr(t3), eo);
    }, bo.prototype.getProjection = bo.prototype.getProjection = function() {
      var t3 = this.ptr;
      return Gr(yr(t3), Zr);
    }, bo.prototype.getParameters = bo.prototype.getParameters = function() {
      var t3 = this.ptr;
      return dr(t3);
    }, bo.prototype.getUnit = bo.prototype.getUnit = function() {
      var t3 = this.ptr;
      return Gr(ur(t3), Br);
    }, bo.prototype.loadConstants = bo.prototype.loadConstants = function() {
      var t3 = this.ptr;
      return !!br(t3);
    }, bo.prototype.horizonGcsGenerate = bo.prototype.horizonGcsGenerate = function() {
      var t3 = this.ptr;
      return Gr(fr(t3), po);
    }, bo.prototype.horizonPcsGenerate = bo.prototype.horizonPcsGenerate = function() {
      var t3 = this.ptr;
      return Gr(Er(t3), po);
    }, bo.prototype.isEqual = bo.prototype.isEqual = function(t3) {
      var e3 = this.ptr;
      return t3 && "object" == typeof t3 && (t3 = t3.ptr), !!mr(e3, t3);
    }, bo.prototype.getCode = bo.prototype.getCode = function() {
      var t3 = this.ptr;
      return Tr(t3);
    }, bo.prototype.getName = bo.prototype.getName = function(t3) {
      var e3 = this.ptr;
      return Yr.prepare(), "object" == typeof t3 && (t3 = xr(t3)), ot(Or(e3, t3));
    }, bo.prototype.getType = bo.prototype.getType = function() {
      var t3 = this.ptr;
      return Sr(t3);
    }, fo.prototype = Object.create(Zr.prototype), fo.prototype.constructor = fo, fo.prototype.__class__ = fo, fo.__cache__ = {}, p.PeSpheroid = fo, fo.prototype.getAxis = fo.prototype.getAxis = function() {
      var t3 = this.ptr;
      return hr(t3);
    }, fo.prototype.getFlattening = fo.prototype.getFlattening = function() {
      var t3 = this.ptr;
      return Nr(t3);
    }, fo.prototype.getCode = fo.prototype.getCode = function() {
      var t3 = this.ptr;
      return lr(t3);
    }, fo.prototype.getName = fo.prototype.getName = function(t3) {
      var e3 = this.ptr;
      return Yr.prepare(), "object" == typeof t3 && (t3 = xr(t3)), ot(Mr(e3, t3));
    }, fo.prototype.getType = fo.prototype.getType = function() {
      var t3 = this.ptr;
      return Dr(t3);
    }, Eo.prototype = Object.create(jr.prototype), Eo.prototype.constructor = Eo, Eo.prototype.__class__ = Eo, Eo.__cache__ = {}, p.PeVersion = Eo, Eo.prototype.version_string = Eo.prototype.version_string = function() {
      var t3 = this.ptr;
      return ot(vr(t3));
    }, p.ensureCache = Yr, p.ensureString = wr, p.ensureInt8 = xr, p.ensureInt16 = Hr, p.ensureInt32 = Xr, p.ensureFloat32 = zr, p.ensureFloat64 = Wr, i;
  }, t.exports = o3), _.exports;
  var t, r2, o3;
}
var o2 = o(r());
var n = Object.freeze(Object.defineProperty({ __proto__: null, default: o2 }, Symbol.toStringTag, { value: "Module" }));
export {
  n as p
};
//# sourceMappingURL=pe-wasm-7LH3U5G6.js.map
