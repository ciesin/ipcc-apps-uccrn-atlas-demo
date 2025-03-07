import {
  e,
  o
} from "./chunk-56GFF6UO.js";
import {
  __publicField
} from "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/chunks/arcgis-knowledge-client-core-simd.js
var t;
var a = { exports: {} };
function n() {
  var _a;
  return t || (t = 1, r = a, n2 = "undefined" != typeof document ? (_a = document.currentScript) == null ? void 0 : _a.src : void 0, i2 = function(r2 = {}) {
    var t2, a2, i3, o3 = r2, s = new Promise((e2, r3) => {
      t2 = e2, a2 = r3;
    }), u = Object.assign({}, o3), f = "./this.program", l = "";
    "undefined" != typeof document && document.currentScript && (l = document.currentScript.src), n2 && (l = n2), l = l.startsWith("blob:") ? "" : l.substr(0, l.replace(/[?#].*/, "").lastIndexOf("/") + 1), i3 = async (e2) => {
      if ((e2 = await fetch(e2, { credentials: "same-origin" })).ok) return e2.arrayBuffer();
      throw Error(e2.status + " : " + e2.url);
    };
    var c = o3.print || console.log.bind(console), h = o3.printErr || console.error.bind(console);
    Object.assign(o3, u), u = null, o3.thisProgram && (f = o3.thisProgram);
    var p, m, d, v, y, g, w, $, b, T, A, C, W = o3.wasmBinary, j = false;
    function P() {
      var e2 = p.buffer;
      o3.HEAP8 = d = new Int8Array(e2), o3.HEAP16 = y = new Int16Array(e2), o3.HEAPU8 = v = new Uint8Array(e2), o3.HEAPU16 = g = new Uint16Array(e2), o3.HEAP32 = w = new Int32Array(e2), o3.HEAPU32 = $ = new Uint32Array(e2), o3.HEAPF32 = b = new Float32Array(e2), o3.HEAPF64 = C = new Float64Array(e2), o3.HEAP64 = T = new BigInt64Array(e2), o3.HEAPU64 = A = new BigUint64Array(e2);
    }
    var E = [], O = [], k = [];
    function S() {
      var e2 = o3.preRun.shift();
      E.unshift(e2);
    }
    var x = 0, F = null;
    function _(e2) {
      var _a2;
      throw (_a2 = o3.onAbort) == null ? void 0 : _a2.call(o3, e2), h(e2 = "Aborted(" + e2 + ")"), j = true, e2 = new WebAssembly.RuntimeError(e2 + ". Build with -sASSERTIONS for more info."), a2(e2), e2;
    }
    var R, U = (e2) => e2.startsWith("data:application/octet-stream;base64,");
    async function I(e2) {
      if (!W) try {
        var r3 = await i3(e2);
        return new Uint8Array(r3);
      } catch {
      }
      if (e2 != R || !W) throw "both async and sync fetching of the wasm failed";
      return e2 = new Uint8Array(W);
    }
    async function B(e2, r3) {
      try {
        var t3 = await I(e2);
        return await WebAssembly.instantiate(t3, r3);
      } catch (a3) {
        h(`failed to asynchronously prepare wasm: ${a3}`), _(a3);
      }
    }
    async function H(e2) {
      var r3 = R;
      if (!W && "function" == typeof WebAssembly.instantiateStreaming && !U(r3) && "function" == typeof fetch) try {
        var t3 = fetch(r3, { credentials: "same-origin" });
        return await WebAssembly.instantiateStreaming(t3, e2);
      } catch (a3) {
        h(`wasm streaming compile failed: ${a3}`), h("falling back to ArrayBuffer instantiation");
      }
      return B(r3, e2);
    }
    class M {
      constructor(e2) {
        __publicField(this, "name", "ExitStatus");
        this.message = `Program terminated with exit(${e2})`, this.status = e2;
      }
    }
    var D = (e2) => {
      for (; 0 < e2.length; ) e2.shift()(o3);
    }, V = o3.noExitRuntime || true;
    class z {
      constructor(e2) {
        this.ga = e2 - 24;
      }
    }
    var N = {}, q = (e2) => {
      for (; e2.length; ) {
        var r3 = e2.pop();
        e2.pop()(r3);
      }
    };
    function L(e2) {
      return this.fromWireType($[e2 >> 2]);
    }
    var G, J, K, Q = {}, Y = {}, Z = {}, X = (e2, r3, t3) => {
      function a3(r4) {
        if ((r4 = t3(r4)).length !== e2.length) throw new G("Mismatched type converter count");
        for (var a4 = 0; a4 < e2.length; ++a4) ae(e2[a4], r4[a4]);
      }
      e2.forEach((e3) => Z[e3] = r3);
      var n3 = Array(r3.length), i4 = [], o4 = 0;
      r3.forEach((e3, r4) => {
        Y.hasOwnProperty(e3) ? n3[r4] = Y[e3] : (i4.push(e3), Q.hasOwnProperty(e3) || (Q[e3] = []), Q[e3].push(() => {
          n3[r4] = Y[e3], ++o4 === i4.length && a3(n3);
        }));
      }), 0 === i4.length && a3(n3);
    }, ee = (e2) => {
      if (null === e2) return "null";
      var r3 = typeof e2;
      return "object" === r3 || "array" === r3 || "function" === r3 ? e2.toString() : "" + e2;
    }, re = (e2) => {
      for (var r3 = ""; v[e2]; ) r3 += J[v[e2++]];
      return r3;
    };
    function te(e2, r3, t3 = {}) {
      var a3 = r3.name;
      if (!e2) throw new K(`type "${a3}" must have a positive integer typeid pointer`);
      if (Y.hasOwnProperty(e2)) {
        if (t3.La) return;
        throw new K(`Cannot register type '${a3}' twice`);
      }
      Y[e2] = r3, delete Z[e2], Q.hasOwnProperty(e2) && (r3 = Q[e2], delete Q[e2], r3.forEach((e3) => e3()));
    }
    function ae(e2, r3, t3 = {}) {
      return te(e2, r3, t3);
    }
    var ne = (e2, r3, t3) => {
      switch (r3) {
        case 1:
          return t3 ? (e3) => d[e3] : (e3) => v[e3];
        case 2:
          return t3 ? (e3) => y[e3 >> 1] : (e3) => g[e3 >> 1];
        case 4:
          return t3 ? (e3) => w[e3 >> 2] : (e3) => $[e3 >> 2];
        case 8:
          return t3 ? (e3) => T[e3 >> 3] : (e3) => A[e3 >> 3];
        default:
          throw new TypeError(`invalid integer width (${r3}): ${e2}`);
      }
    }, ie = (e2) => {
      throw new K(e2.ea.ha.fa.name + " instance already deleted");
    }, oe = false, se = () => {
    }, ue = (e2, r3, t3) => r3 === t3 ? e2 : void 0 === t3.ka || null === (e2 = ue(e2, r3, t3.ka)) ? null : t3.Ea(e2), fe = {}, le = {}, ce = (e2, r3) => {
      if (void 0 === r3) throw new K("ptr should not be undefined");
      for (; e2.ka; ) r3 = e2.ua(r3), e2 = e2.ka;
      return le[r3];
    }, he = (e2, r3) => {
      if (!r3.ha || !r3.ga) throw new G("makeClassHandle requires ptr and ptrType");
      if (!!r3.na != !!r3.ja) throw new G("Both smartPtrType and smartPtr must be specified");
      return r3.count = { value: 1 }, pe(Object.create(e2, { ea: { value: r3, writable: true } }));
    }, pe = (e2) => "undefined" == typeof FinalizationRegistry ? (pe = (e3) => e3, e2) : (oe = new FinalizationRegistry((e3) => {
      --(e3 = e3.ea).count.value, 0 === e3.count.value && (e3.ja ? e3.na.oa(e3.ja) : e3.ha.fa.oa(e3.ga));
    }), se = (e3) => {
      oe.unregister(e3);
    }, (pe = (e3) => {
      var r3 = e3.ea;
      return r3.ja && oe.register(e3, { ea: r3 }, e3), e3;
    })(e2));
    function me() {
    }
    var de = (e2, r3) => Object.defineProperty(r3, "name", { value: e2 }), ve = (e2, r3, t3) => {
      if (void 0 === e2[r3].ia) {
        var a3 = e2[r3];
        e2[r3] = function(...a4) {
          if (!e2[r3].ia.hasOwnProperty(a4.length)) throw new K(`Function '${t3}' called with an invalid number of arguments (${a4.length}) - expects one of (${e2[r3].ia})!`);
          return e2[r3].ia[a4.length].apply(this, a4);
        }, e2[r3].ia = [], e2[r3].ia[a3.qa] = a3;
      }
    }, ye = (e2, r3, t3) => {
      if (o3.hasOwnProperty(e2)) {
        if (void 0 === t3 || void 0 !== o3[e2].ia && void 0 !== o3[e2].ia[t3]) throw new K(`Cannot register public name '${e2}' twice`);
        if (ve(o3, e2, e2), o3[e2].ia.hasOwnProperty(t3)) throw new K(`Cannot register multiple overloads of a function with the same number of arguments (${t3})!`);
        o3[e2].ia[t3] = r3;
      } else o3[e2] = r3, o3[e2].qa = t3;
    }, ge = (e2) => {
      var r3 = (e2 = e2.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
      return 48 <= r3 && 57 >= r3 ? `_${e2}` : e2;
    };
    function we(e2, r3, t3, a3, n3, i4, o4, s2) {
      this.name = e2, this.constructor = r3, this.pa = t3, this.oa = a3, this.ka = n3, this.Ga = i4, this.ua = o4, this.Ea = s2, this.Na = [];
    }
    var $e = (e2, r3, t3) => {
      for (; r3 !== t3; ) {
        if (!r3.ua) throw new K(`Expected null or instance of ${t3.name}, got an instance of ${r3.name}`);
        e2 = r3.ua(e2), r3 = r3.ka;
      }
      return e2;
    };
    function be(e2, r3) {
      if (null === r3) {
        if (this.ya) throw new K(`null is not a valid ${this.name}`);
        return 0;
      }
      if (!r3.ea) throw new K(`Cannot pass "${ee(r3)}" as a ${this.name}`);
      if (!r3.ea.ga) throw new K(`Cannot pass deleted object as a pointer of type ${this.name}`);
      return $e(r3.ea.ga, r3.ea.ha.fa, this.fa);
    }
    function Te(e2, r3) {
      if (null === r3) {
        if (this.ya) throw new K(`null is not a valid ${this.name}`);
        if (this.xa) {
          var t3 = this.za();
          return null !== e2 && e2.push(this.oa, t3), t3;
        }
        return 0;
      }
      if (!r3 || !r3.ea) throw new K(`Cannot pass "${ee(r3)}" as a ${this.name}`);
      if (!r3.ea.ga) throw new K(`Cannot pass deleted object as a pointer of type ${this.name}`);
      if (!this.wa && r3.ea.ha.wa) throw new K(`Cannot convert argument of type ${r3.ea.na ? r3.ea.na.name : r3.ea.ha.name} to parameter type ${this.name}`);
      if (t3 = $e(r3.ea.ga, r3.ea.ha.fa, this.fa), this.xa) {
        if (void 0 === r3.ea.ja) throw new K("Passing raw pointer to smart pointer is illegal");
        switch (this.Sa) {
          case 0:
            if (r3.ea.na !== this) throw new K(`Cannot convert argument of type ${r3.ea.na ? r3.ea.na.name : r3.ea.ha.name} to parameter type ${this.name}`);
            t3 = r3.ea.ja;
            break;
          case 1:
            t3 = r3.ea.ja;
            break;
          case 2:
            if (r3.ea.na === this) t3 = r3.ea.ja;
            else {
              var a3 = r3.clone();
              t3 = this.Oa(t3, qe(() => a3.delete())), null !== e2 && e2.push(this.oa, t3);
            }
            break;
          default:
            throw new K("Unsupporting sharing policy");
        }
      }
      return t3;
    }
    function Ae(e2, r3) {
      if (null === r3) {
        if (this.ya) throw new K(`null is not a valid ${this.name}`);
        return 0;
      }
      if (!r3.ea) throw new K(`Cannot pass "${ee(r3)}" as a ${this.name}`);
      if (!r3.ea.ga) throw new K(`Cannot pass deleted object as a pointer of type ${this.name}`);
      if (r3.ea.ha.wa) throw new K(`Cannot convert argument of type ${r3.ea.ha.name} to parameter type ${this.name}`);
      return $e(r3.ea.ga, r3.ea.ha.fa, this.fa);
    }
    function Ce(e2, r3, t3, a3, n3, i4, o4, s2, u2, f2, l2) {
      this.name = e2, this.fa = r3, this.ya = t3, this.wa = a3, this.xa = n3, this.Ma = i4, this.Sa = o4, this.Ca = s2, this.za = u2, this.Oa = f2, this.oa = l2, n3 || void 0 !== r3.ka ? this.toWireType = Te : (this.toWireType = a3 ? be : Ae, this.ma = null);
    }
    var We, je, Pe = (e2, r3, t3) => {
      if (!o3.hasOwnProperty(e2)) throw new G("Replacing nonexistent public symbol");
      void 0 !== o3[e2].ia && void 0 !== t3 ? o3[e2].ia[t3] = r3 : (o3[e2] = r3, o3[e2].qa = t3);
    }, Ee = [], Oe = (e2, r3) => {
      e2 = re(e2);
      var t3 = Ee[r3];
      if (t3 || (r3 >= Ee.length && (Ee.length = r3 + 1), Ee[r3] = t3 = We.get(r3)), "function" != typeof t3) throw new K(`unknown function pointer with signature ${e2}: ${r3}`);
      return t3;
    }, ke = (e2) => {
      e2 = Er(e2);
      var r3 = re(e2);
      return kr(e2), r3;
    }, Se = (e2, r3) => {
      function t3(e3) {
        n3[e3] || Y[e3] || (Z[e3] ? Z[e3].forEach(t3) : (a3.push(e3), n3[e3] = true));
      }
      var a3 = [], n3 = {};
      throw r3.forEach(t3), new je(`${e2}: ` + a3.map(ke).join([", "]));
    };
    function xe(e2) {
      for (var r3 = 1; r3 < e2.length; ++r3) if (null !== e2[r3] && void 0 === e2[r3].ma) return true;
      return false;
    }
    function Fe(e2, r3, t3, a3, n3) {
      var i4 = r3.length;
      if (2 > i4) throw new K("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var o4 = null !== r3[1] && null !== t3, s2 = xe(r3), u2 = "void" !== r3[0].name, f2 = i4 - 2, l2 = Array(f2), c2 = [], h2 = [];
      return de(e2, function(...e3) {
        if (h2.length = 0, c2.length = o4 ? 2 : 1, c2[0] = n3, o4) {
          var t4 = r3[1].toWireType(h2, this);
          c2[1] = t4;
        }
        for (var i5 = 0; i5 < f2; ++i5) l2[i5] = r3[i5 + 2].toWireType(h2, e3[i5]), c2.push(l2[i5]);
        if (e3 = a3(...c2), s2) q(h2);
        else for (i5 = o4 ? 1 : 2; i5 < r3.length; i5++) {
          var p2 = 1 === i5 ? t4 : l2[i5 - 2];
          null !== r3[i5].ma && r3[i5].ma(p2);
        }
        return t4 = u2 ? r3[0].fromWireType(e3) : void 0;
      });
    }
    var _e, Re, Ue, Ie, Be = (e2, r3) => {
      for (var t3 = [], a3 = 0; a3 < e2; a3++) t3.push($[r3 + 4 * a3 >> 2]);
      return t3;
    }, He = (e2) => {
      const r3 = (e2 = e2.trim()).indexOf("(");
      return -1 !== r3 ? e2.substr(0, r3) : e2;
    }, Me = (e2, r3, t3) => {
      if (!(e2 instanceof Object)) throw new K(`${t3} with invalid "this": ${e2}`);
      if (!(e2 instanceof r3.fa.constructor)) throw new K(`${t3} incompatible with "this" of type ${e2.constructor.name}`);
      if (!e2.ea.ga) throw new K(`cannot call emscripten binding method ${t3} on deleted object`);
      return $e(e2.ea.ga, e2.ea.ha.fa, r3.fa);
    }, De = [], Ve = [], ze = (e2) => {
      9 < e2 && 0 == --Ve[e2 + 1] && (Ve[e2] = void 0, De.push(e2));
    }, Ne = (e2) => {
      if (!e2) throw new K("Cannot use deleted val. handle = " + e2);
      return Ve[e2];
    }, qe = (e2) => {
      switch (e2) {
        case void 0:
          return 2;
        case null:
          return 4;
        case true:
          return 6;
        case false:
          return 8;
        default:
          const r3 = De.pop() || Ve.length;
          return Ve[r3] = e2, Ve[r3 + 1] = 1, r3;
      }
    }, Le = { name: "emscripten::val", fromWireType: (e2) => {
      var r3 = Ne(e2);
      return ze(e2), r3;
    }, toWireType: (e2, r3) => qe(r3), la: 8, readValueFromPointer: L, ma: null }, Ge = (e2, r3, t3) => {
      switch (r3) {
        case 1:
          return t3 ? function(e3) {
            return this.fromWireType(d[e3]);
          } : function(e3) {
            return this.fromWireType(v[e3]);
          };
        case 2:
          return t3 ? function(e3) {
            return this.fromWireType(y[e3 >> 1]);
          } : function(e3) {
            return this.fromWireType(g[e3 >> 1]);
          };
        case 4:
          return t3 ? function(e3) {
            return this.fromWireType(w[e3 >> 2]);
          } : function(e3) {
            return this.fromWireType($[e3 >> 2]);
          };
        default:
          throw new TypeError(`invalid integer width (${r3}): ${e2}`);
      }
    }, Je = (e2, r3) => {
      var t3 = Y[e2];
      if (void 0 === t3) throw e2 = `${r3} has unknown type ${ke(e2)}`, new K(e2);
      return t3;
    }, Ke = (e2, r3) => {
      switch (r3) {
        case 4:
          return function(e3) {
            return this.fromWireType(b[e3 >> 2]);
          };
        case 8:
          return function(e3) {
            return this.fromWireType(C[e3 >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${r3}): ${e2}`);
      }
    }, Qe = Object.assign({ optional: true }, Le), Ye = (e2, r3, t3) => {
      var a3 = v;
      if (0 < t3) {
        t3 = r3 + t3 - 1;
        for (var n3 = 0; n3 < e2.length; ++n3) {
          var i4 = e2.charCodeAt(n3);
          if (55296 <= i4 && 57343 >= i4 && (i4 = 65536 + ((1023 & i4) << 10) | 1023 & e2.charCodeAt(++n3)), 127 >= i4) {
            if (r3 >= t3) break;
            a3[r3++] = i4;
          } else {
            if (2047 >= i4) {
              if (r3 + 1 >= t3) break;
              a3[r3++] = 192 | i4 >> 6;
            } else {
              if (65535 >= i4) {
                if (r3 + 2 >= t3) break;
                a3[r3++] = 224 | i4 >> 12;
              } else {
                if (r3 + 3 >= t3) break;
                a3[r3++] = 240 | i4 >> 18, a3[r3++] = 128 | i4 >> 12 & 63;
              }
              a3[r3++] = 128 | i4 >> 6 & 63;
            }
            a3[r3++] = 128 | 63 & i4;
          }
        }
        a3[r3] = 0;
      }
    }, Ze = "undefined" != typeof TextDecoder ? new TextDecoder() : void 0, Xe = (e2, r3 = 0, t3 = NaN) => {
      var a3 = r3 + t3;
      for (t3 = r3; e2[t3] && !(t3 >= a3); ) ++t3;
      if (16 < t3 - r3 && e2.buffer && Ze) return Ze.decode(e2.subarray(r3, t3));
      for (a3 = ""; r3 < t3; ) {
        var n3 = e2[r3++];
        if (128 & n3) {
          var i4 = 63 & e2[r3++];
          if (192 == (224 & n3)) a3 += String.fromCharCode((31 & n3) << 6 | i4);
          else {
            var o4 = 63 & e2[r3++];
            65536 > (n3 = 224 == (240 & n3) ? (15 & n3) << 12 | i4 << 6 | o4 : (7 & n3) << 18 | i4 << 12 | o4 << 6 | 63 & e2[r3++]) ? a3 += String.fromCharCode(n3) : (n3 -= 65536, a3 += String.fromCharCode(55296 | n3 >> 10, 56320 | 1023 & n3));
          }
        } else a3 += String.fromCharCode(n3);
      }
      return a3;
    }, er = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, rr = (e2, r3) => {
      for (var t3 = e2 >> 1, a3 = t3 + r3 / 2; !(t3 >= a3) && g[t3]; ) ++t3;
      if (32 < (t3 <<= 1) - e2 && er) return er.decode(v.subarray(e2, t3));
      for (t3 = "", a3 = 0; !(a3 >= r3 / 2); ++a3) {
        var n3 = y[e2 + 2 * a3 >> 1];
        if (0 == n3) break;
        t3 += String.fromCharCode(n3);
      }
      return t3;
    }, tr = (e2, r3, t3) => {
      if (t3 ?? (t3 = 2147483647), 2 > t3) return 0;
      var a3 = r3;
      t3 = (t3 -= 2) < 2 * e2.length ? t3 / 2 : e2.length;
      for (var n3 = 0; n3 < t3; ++n3) y[r3 >> 1] = e2.charCodeAt(n3), r3 += 2;
      return y[r3 >> 1] = 0, r3 - a3;
    }, ar = (e2) => 2 * e2.length, nr = (e2, r3) => {
      for (var t3 = 0, a3 = ""; !(t3 >= r3 / 4); ) {
        var n3 = w[e2 + 4 * t3 >> 2];
        if (0 == n3) break;
        ++t3, 65536 <= n3 ? (n3 -= 65536, a3 += String.fromCharCode(55296 | n3 >> 10, 56320 | 1023 & n3)) : a3 += String.fromCharCode(n3);
      }
      return a3;
    }, ir = (e2, r3, t3) => {
      if (t3 ?? (t3 = 2147483647), 4 > t3) return 0;
      var a3 = r3;
      t3 = a3 + t3 - 4;
      for (var n3 = 0; n3 < e2.length; ++n3) {
        var i4 = e2.charCodeAt(n3);
        if (55296 <= i4 && 57343 >= i4 && (i4 = 65536 + ((1023 & i4) << 10) | 1023 & e2.charCodeAt(++n3)), w[r3 >> 2] = i4, (r3 += 4) + 4 > t3) break;
      }
      return w[r3 >> 2] = 0, r3 - a3;
    }, or = (e2) => {
      for (var r3 = 0, t3 = 0; t3 < e2.length; ++t3) {
        var a3 = e2.charCodeAt(t3);
        55296 <= a3 && 57343 >= a3 && ++t3, r3 += 4;
      }
      return r3;
    }, sr = 0, ur = (e2, r3, t3) => {
      var a3 = [];
      return e2 = e2.toWireType(a3, t3), a3.length && ($[r3 >> 2] = qe(a3)), e2;
    }, fr = [], lr = {}, cr = (e2) => {
      var r3 = lr[e2];
      return void 0 === r3 ? re(e2) : r3;
    }, hr = () => {
      function r3(e2) {
        e2.$$$embind_global$$$ = e2;
        var r4 = "object" == typeof $$$embind_global$$$ && e2.$$$embind_global$$$ == e2;
        return r4 || delete e2.$$$embind_global$$$, r4;
      }
      if ("object" == typeof globalThis) return globalThis;
      if ("object" == typeof $$$embind_global$$$) return $$$embind_global$$$;
      if ("object" == typeof e && r3(e) ? $$$embind_global$$$ = e : "object" == typeof self && r3(self) && ($$$embind_global$$$ = self), "object" == typeof $$$embind_global$$$) return $$$embind_global$$$;
      throw Error("unable to get global object.");
    }, pr = (e2) => {
      var r3 = fr.length;
      return fr.push(e2), r3;
    }, mr = (e2, r3) => {
      for (var t3 = Array(e2), a3 = 0; a3 < e2; ++a3) t3[a3] = Je($[r3 + 4 * a3 >> 2], "parameter " + a3);
      return t3;
    }, dr = Reflect.construct, vr = {}, yr = (e2) => {
      if (!(e2 instanceof M || "unwind" == e2)) throw e2;
    }, gr = (e2) => {
      var _a2;
      throw m = e2, V || 0 < sr || ((_a2 = o3.onExit) == null ? void 0 : _a2.call(o3, e2), j = true), new M(e2);
    }, wr = (e2) => {
      if (!j) try {
        if (e2(), !(V || 0 < sr)) try {
          m = e2 = m, gr(e2);
        } catch (Ue2) {
          yr(Ue2);
        }
      } catch (Ue2) {
        yr(Ue2);
      }
    }, $r = {}, br = () => {
      if (!_e) {
        var e2, r3 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: f || "./this.program" };
        for (e2 in $r) void 0 === $r[e2] ? delete r3[e2] : r3[e2] = $r[e2];
        var t3 = [];
        for (e2 in r3) t3.push(`${e2}=${r3[e2]}`);
        _e = t3;
      }
      return _e;
    }, Tr = [null, [], []];
    G = o3.InternalError = class extends Error {
      constructor(e2) {
        super(e2), this.name = "InternalError";
      }
    };
    for (var Ar = Array(256), Cr = 0; 256 > Cr; ++Cr) Ar[Cr] = String.fromCharCode(Cr);
    J = Ar, K = o3.BindingError = class extends Error {
      constructor(e2) {
        super(e2), this.name = "BindingError";
      }
    }, Object.assign(me.prototype, { isAliasOf: function(e2) {
      if (!(this instanceof me && e2 instanceof me)) return false;
      var r3 = this.ea.ha.fa, t3 = this.ea.ga;
      e2.ea = e2.ea;
      var a3 = e2.ea.ha.fa;
      for (e2 = e2.ea.ga; r3.ka; ) t3 = r3.ua(t3), r3 = r3.ka;
      for (; a3.ka; ) e2 = a3.ua(e2), a3 = a3.ka;
      return r3 === a3 && t3 === e2;
    }, clone: function() {
      if (this.ea.ga || ie(this), this.ea.ta) return this.ea.count.value += 1, this;
      var e2 = pe, r3 = Object, t3 = r3.create, a3 = Object.getPrototypeOf(this), n3 = this.ea;
      return (e2 = e2(t3.call(r3, a3, { ea: { value: { count: n3.count, sa: n3.sa, ta: n3.ta, ga: n3.ga, ha: n3.ha, ja: n3.ja, na: n3.na } } }))).ea.count.value += 1, e2.ea.sa = false, e2;
    }, delete() {
      if (this.ea.ga || ie(this), this.ea.sa && !this.ea.ta) throw new K("Object already scheduled for deletion");
      se(this);
      var e2 = this.ea;
      --e2.count.value, 0 === e2.count.value && (e2.ja ? e2.na.oa(e2.ja) : e2.ha.fa.oa(e2.ga)), this.ea.ta || (this.ea.ja = void 0, this.ea.ga = void 0);
    }, isDeleted: function() {
      return !this.ea.ga;
    }, deleteLater: function() {
      if (this.ea.ga || ie(this), this.ea.sa && !this.ea.ta) throw new K("Object already scheduled for deletion");
      return this.ea.sa = true, this;
    } }), Object.assign(Ce.prototype, { Ha(e2) {
      return this.Ca && (e2 = this.Ca(e2)), e2;
    }, Aa(e2) {
      var _a2;
      (_a2 = this.oa) == null ? void 0 : _a2.call(this, e2);
    }, la: 8, readValueFromPointer: L, fromWireType: function(e2) {
      function r3() {
        return this.xa ? he(this.fa.pa, { ha: this.Ma, ga: t3, na: this, ja: e2 }) : he(this.fa.pa, { ha: this, ga: e2 });
      }
      var t3 = this.Ha(e2);
      if (!t3) return this.Aa(e2), null;
      var a3 = ce(this.fa, t3);
      if (void 0 !== a3) return 0 === a3.ea.count.value ? (a3.ea.ga = t3, a3.ea.ja = e2, a3.clone()) : (a3 = a3.clone(), this.Aa(e2), a3);
      if (a3 = this.fa.Ga(t3), !(a3 = fe[a3])) return r3.call(this);
      a3 = this.wa ? a3.Da : a3.pointerType;
      var n3 = ue(t3, this.fa, a3.fa);
      return null === n3 ? r3.call(this) : this.xa ? he(a3.fa.pa, { ha: a3, ga: n3, na: this, ja: e2 }) : he(a3.fa.pa, { ha: a3, ga: n3 });
    } }), je = o3.UnboundTypeError = (Re = Error, (Ie = de(Ue = "UnboundTypeError", function(e2) {
      this.name = Ue, this.message = e2, void 0 !== (e2 = Error(e2).stack) && (this.stack = this.toString() + "\n" + e2.replace(/^Error(:[^\n]*)?\n/, ""));
    })).prototype = Object.create(Re.prototype), Ie.prototype.constructor = Ie, Ie.prototype.toString = function() {
      return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
    }, Ie), Ve.push(0, 1, void 0, 1, null, 1, true, 1, false, 1), o3.count_emval_handles = () => Ve.length / 2 - 5 - De.length;
    var Wr, jr = { m: (e2, r3, t3) => {
      var a3 = new z(e2);
      throw $[a3.ga + 16 >> 2] = 0, $[a3.ga + 4 >> 2] = r3, $[a3.ga + 8 >> 2] = t3, e2;
    }, O: () => _(""), r: (e2) => {
      var r3 = N[e2];
      delete N[e2];
      var t3 = r3.za, a3 = r3.oa, n3 = r3.Ba, i4 = n3.map((e3) => e3.Ka).concat(n3.map((e3) => e3.Qa));
      X([e2], i4, (e3) => {
        var i5 = {};
        return n3.forEach((r4, t4) => {
          var a4 = e3[t4], o4 = r4.Ia, s2 = r4.Ja, u2 = e3[t4 + n3.length], f2 = r4.Pa, l2 = r4.Ra;
          i5[r4.Fa] = { read: (e4) => a4.fromWireType(o4(s2, e4)), write: (e4, r5) => {
            var t5 = [];
            f2(l2, e4, u2.toWireType(t5, r5)), q(t5);
          } };
        }), [{ name: r3.name, fromWireType: (e4) => {
          var r4, t4 = {};
          for (r4 in i5) t4[r4] = i5[r4].read(e4);
          return a3(e4), t4;
        }, toWireType: (e4, r4) => {
          for (var n4 in i5) if (!(n4 in r4)) throw new TypeError(`Missing field: "${n4}"`);
          var o4 = t3();
          for (n4 in i5) i5[n4].write(o4, r4[n4]);
          return null !== e4 && e4.push(a3, o4), o4;
        }, la: 8, readValueFromPointer: L, ma: a3 }];
      });
    }, E: (e2, r3, t3) => {
      ae(e2, { name: r3 = re(r3), fromWireType: (e3) => e3, toWireType: function(e3, r4) {
        if ("bigint" != typeof r4 && "number" != typeof r4) throw new TypeError(`Cannot convert "${ee(r4)}" to ${this.name}`);
        return "number" == typeof r4 && (r4 = BigInt(r4)), r4;
      }, la: 8, readValueFromPointer: ne(r3, t3, -1 == r3.indexOf("u")), ma: null });
    }, V: (e2, r3, t3, a3) => {
      ae(e2, { name: r3 = re(r3), fromWireType: function(e3) {
        return !!e3;
      }, toWireType: function(e3, r4) {
        return r4 ? t3 : a3;
      }, la: 8, readValueFromPointer: function(e3) {
        return this.fromWireType(v[e3]);
      }, ma: null });
    }, f: (e2, r3, t3, a3, n3, i4, o4, s2, u2, f2, l2, c2, h2) => {
      l2 = re(l2), i4 = Oe(n3, i4), s2 && (s2 = Oe(o4, s2)), f2 && (f2 = Oe(u2, f2)), h2 = Oe(c2, h2);
      var p2 = ge(l2);
      ye(p2, function() {
        Se(`Cannot construct ${l2} due to unbound types`, [a3]);
      }), X([e2, r3, t3], a3 ? [a3] : [], (r4) => {
        if (r4 = r4[0], a3) var t4 = r4.fa, n4 = t4.pa;
        else n4 = me.prototype;
        r4 = de(l2, function(...e3) {
          if (Object.getPrototypeOf(this) !== o5) throw new K("Use 'new' to construct " + l2);
          if (void 0 === c3.ra) throw new K(l2 + " has no accessible constructor");
          var r5 = c3.ra[e3.length];
          if (void 0 === r5) throw new K(`Tried to invoke ctor of ${l2} with invalid number of parameters (${e3.length}) - expected (${Object.keys(c3.ra).toString()}) parameters instead!`);
          return r5.apply(this, e3);
        });
        var o5 = Object.create(n4, { constructor: { value: r4 } });
        r4.prototype = o5;
        var u3, c3 = new we(l2, r4, o5, h2, t4, i4, s2, f2);
        return c3.ka && ((u3 = c3.ka).va ?? (u3.va = []), c3.ka.va.push(c3)), t4 = new Ce(l2, c3, true, false, false), u3 = new Ce(l2 + "*", c3, false, false, false), n4 = new Ce(l2 + " const*", c3, false, true, false), fe[e2] = { pointerType: u3, Da: n4 }, Pe(p2, r4), [t4, u3, n4];
      });
    }, v: (e2, r3, t3, a3, n3, i4, o4) => {
      var s2 = Be(t3, a3);
      r3 = re(r3), r3 = He(r3), i4 = Oe(n3, i4), X([], [e2], (e3) => {
        function a4() {
          Se(`Cannot call ${n4} due to unbound types`, s2);
        }
        var n4 = `${(e3 = e3[0]).name}.${r3}`;
        r3.startsWith("@@") && (r3 = Symbol[r3.substring(2)]);
        var u2 = e3.fa.constructor;
        return void 0 === u2[r3] ? (a4.qa = t3 - 1, u2[r3] = a4) : (ve(u2, r3, n4), u2[r3].ia[t3 - 1] = a4), X([], s2, (a5) => {
          if (a5 = Fe(n4, [a5[0], null].concat(a5.slice(1)), null, i4, o4), void 0 === u2[r3].ia ? (a5.qa = t3 - 1, u2[r3] = a5) : u2[r3].ia[t3 - 1] = a5, e3.fa.va) for (const t4 of e3.fa.va) t4.constructor.hasOwnProperty(r3) || (t4.constructor[r3] = a5);
          return [];
        }), [];
      });
    }, g: (e2, r3, t3, a3, n3, i4) => {
      var o4 = Be(r3, t3);
      n3 = Oe(a3, n3), X([], [e2], (e3) => {
        var t4 = `constructor ${(e3 = e3[0]).name}`;
        if (void 0 === e3.fa.ra && (e3.fa.ra = []), void 0 !== e3.fa.ra[r3 - 1]) throw new K(`Cannot register multiple constructors with identical number of parameters (${r3 - 1}) for class '${e3.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
        return e3.fa.ra[r3 - 1] = () => {
          Se(`Cannot construct ${e3.name} due to unbound types`, o4);
        }, X([], o4, (a4) => (a4.splice(1, 0, null), e3.fa.ra[r3 - 1] = Fe(t4, a4, null, n3, i4), [])), [];
      });
    }, a: (e2, r3, t3, a3, n3, i4, o4, s2) => {
      var u2 = Be(t3, a3);
      r3 = re(r3), r3 = He(r3), i4 = Oe(n3, i4), X([], [e2], (e3) => {
        function a4() {
          Se(`Cannot call ${n4} due to unbound types`, u2);
        }
        var n4 = `${(e3 = e3[0]).name}.${r3}`;
        r3.startsWith("@@") && (r3 = Symbol[r3.substring(2)]), s2 && e3.fa.Na.push(r3);
        var f2 = e3.fa.pa, l2 = f2[r3];
        return void 0 === l2 || void 0 === l2.ia && l2.className !== e3.name && l2.qa === t3 - 2 ? (a4.qa = t3 - 2, a4.className = e3.name, f2[r3] = a4) : (ve(f2, r3, n4), f2[r3].ia[t3 - 2] = a4), X([], u2, (a5) => (a5 = Fe(n4, a5, e3, i4, o4), void 0 === f2[r3].ia ? (a5.qa = t3 - 2, f2[r3] = a5) : f2[r3].ia[t3 - 2] = a5, [])), [];
      });
    }, c: (e2, r3, t3, a3, n3, i4, o4, s2, u2, f2) => {
      r3 = re(r3), n3 = Oe(a3, n3), X([], [e2], (e3) => {
        var a4 = `${(e3 = e3[0]).name}.${r3}`, l2 = { get() {
          Se(`Cannot access ${a4} due to unbound types`, [t3, o4]);
        }, enumerable: true, configurable: true };
        return l2.set = u2 ? () => Se(`Cannot access ${a4} due to unbound types`, [t3, o4]) : () => {
          throw new K(a4 + " is a read-only property");
        }, Object.defineProperty(e3.fa.pa, r3, l2), X([], u2 ? [t3, o4] : [t3], (t4) => {
          var o5 = t4[0], l3 = { get() {
            var r4 = Me(this, e3, a4 + " getter");
            return o5.fromWireType(n3(i4, r4));
          }, enumerable: true };
          if (u2) {
            u2 = Oe(s2, u2);
            var c2 = t4[1];
            l3.set = function(r4) {
              var t5 = Me(this, e3, a4 + " setter"), n4 = [];
              u2(f2, t5, c2.toWireType(n4, r4)), q(n4);
            };
          }
          return Object.defineProperty(e3.fa.pa, r3, l3), [];
        }), [];
      });
    }, T: (e2) => ae(e2, Le), n: (e2, r3, t3, a3) => {
      function n3() {
      }
      r3 = re(r3), n3.values = {}, ae(e2, { name: r3, constructor: n3, fromWireType: function(e3) {
        return this.constructor.values[e3];
      }, toWireType: (e3, r4) => r4.value, la: 8, readValueFromPointer: Ge(r3, t3, a3), ma: null }), ye(r3, n3);
    }, e: (e2, r3, t3) => {
      var a3 = Je(e2, "enum");
      r3 = re(r3), e2 = a3.constructor, a3 = Object.create(a3.constructor.prototype, { value: { value: t3 }, constructor: { value: de(`${a3.name}_${r3}`, function() {
      }) } }), e2.values[t3] = a3, e2[r3] = a3;
    }, D: (e2, r3, t3) => {
      ae(e2, { name: r3 = re(r3), fromWireType: (e3) => e3, toWireType: (e3, r4) => r4, la: 8, readValueFromPointer: Ke(r3, t3), ma: null });
    }, X: (e2, r3, t3, a3, n3, i4) => {
      var o4 = Be(r3, t3);
      e2 = re(e2), e2 = He(e2), n3 = Oe(a3, n3), ye(e2, function() {
        Se(`Cannot call ${e2} due to unbound types`, o4);
      }, r3 - 1), X([], o4, (t4) => (Pe(e2, Fe(e2, [t4[0], null].concat(t4.slice(1)), null, n3, i4), r3 - 1), []));
    }, w: (e2, r3, t3, a3, n3) => {
      if (r3 = re(r3), -1 === n3 && (n3 = 4294967295), n3 = (e3) => e3, 0 === a3) {
        var i4 = 32 - 8 * t3;
        n3 = (e3) => e3 << i4 >>> i4;
      }
      var o4 = r3.includes("unsigned") ? function(e3, r4) {
        return r4 >>> 0;
      } : function(e3, r4) {
        return r4;
      };
      ae(e2, { name: r3, fromWireType: n3, toWireType: o4, la: 8, readValueFromPointer: ne(r3, t3, 0 !== a3), ma: null });
    }, o: (e2, r3, t3) => {
      function a3(e3) {
        return new n3(d.buffer, $[e3 + 4 >> 2], $[e3 >> 2]);
      }
      var n3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array][r3];
      ae(e2, { name: t3 = re(t3), fromWireType: a3, la: 8, readValueFromPointer: a3 }, { La: true });
    }, t: (e2) => {
      ae(e2, Qe);
    }, i: (e2, r3, t3, a3, n3, i4, o4, s2, u2, f2, l2, c2) => {
      t3 = re(t3), i4 = Oe(n3, i4), s2 = Oe(o4, s2), f2 = Oe(u2, f2), c2 = Oe(l2, c2), X([e2], [r3], (e3) => (e3 = e3[0], [new Ce(t3, e3.fa, false, false, true, e3, a3, i4, s2, f2, c2)]));
    }, U: (e2, r3) => {
      ae(e2, { name: r3 = re(r3), fromWireType: function(e3) {
        for (var r4, t3 = $[e3 >> 2], a3 = e3 + 4, n3 = a3, i4 = 0; i4 <= t3; ++i4) {
          var o4 = a3 + i4;
          i4 != t3 && 0 != v[o4] || (n3 = n3 ? Xe(v, n3, o4 - n3) : "", void 0 === r4 ? r4 = n3 : (r4 += String.fromCharCode(0), r4 += n3), n3 = o4 + 1);
        }
        return kr(e3), r4;
      }, toWireType: function(e3, r4) {
        r4 instanceof ArrayBuffer && (r4 = new Uint8Array(r4));
        var t3, a3 = "string" == typeof r4;
        if (!(a3 || r4 instanceof Uint8Array || r4 instanceof Uint8ClampedArray || r4 instanceof Int8Array)) throw new K("Cannot pass non-string to std::string");
        if (a3) for (var n3 = t3 = 0; n3 < r4.length; ++n3) {
          var i4 = r4.charCodeAt(n3);
          127 >= i4 ? t3++ : 2047 >= i4 ? t3 += 2 : 55296 <= i4 && 57343 >= i4 ? (t3 += 4, ++n3) : t3 += 3;
        }
        else t3 = r4.length;
        if (i4 = (n3 = Or(4 + t3 + 1)) + 4, $[n3 >> 2] = t3, a3) Ye(r4, i4, t3 + 1);
        else if (a3) for (a3 = 0; a3 < t3; ++a3) {
          var o4 = r4.charCodeAt(a3);
          if (255 < o4) throw kr(i4), new K("String has UTF-16 code units that do not fit in 8 bits");
          v[i4 + a3] = o4;
        }
        else for (a3 = 0; a3 < t3; ++a3) v[i4 + a3] = r4[a3];
        return null !== e3 && e3.push(kr, n3), n3;
      }, la: 8, readValueFromPointer: L, ma(e3) {
        kr(e3);
      } });
    }, C: (e2, r3, t3) => {
      if (t3 = re(t3), 2 === r3) var a3 = rr, n3 = tr, i4 = ar, o4 = (e3) => g[e3 >> 1];
      else 4 === r3 && (a3 = nr, n3 = ir, i4 = or, o4 = (e3) => $[e3 >> 2]);
      ae(e2, { name: t3, fromWireType: (e3) => {
        for (var t4, n4 = $[e3 >> 2], i5 = e3 + 4, s2 = 0; s2 <= n4; ++s2) {
          var u2 = e3 + 4 + s2 * r3;
          s2 != n4 && 0 != o4(u2) || (i5 = a3(i5, u2 - i5), void 0 === t4 ? t4 = i5 : (t4 += String.fromCharCode(0), t4 += i5), i5 = u2 + r3);
        }
        return kr(e3), t4;
      }, toWireType: (e3, a4) => {
        if ("string" != typeof a4) throw new K(`Cannot pass non-string to C++ string type ${t3}`);
        var o5 = i4(a4), s2 = Or(4 + o5 + r3);
        return $[s2 >> 2] = o5 / r3, n3(a4, s2 + 4, o5 + r3), null !== e3 && e3.push(kr, s2), s2;
      }, la: 8, readValueFromPointer: L, ma(e3) {
        kr(e3);
      } });
    }, s: (e2, r3, t3, a3, n3, i4) => {
      N[e2] = { name: re(r3), za: Oe(t3, a3), oa: Oe(n3, i4), Ba: [] };
    }, j: (e2, r3, t3, a3, n3, i4, o4, s2, u2, f2) => {
      N[e2].Ba.push({ Fa: re(r3), Ka: t3, Ia: Oe(a3, n3), Ja: i4, Qa: o4, Pa: Oe(s2, u2), Ra: f2 });
    }, W: (e2, r3) => {
      ae(e2, { Ta: true, name: r3 = re(r3), la: 0, fromWireType: () => {
      }, toWireType: () => {
      } });
    }, J: () => {
      V = false, sr = 0;
    }, l: (e2, r3, t3) => (e2 = Ne(e2), r3 = Je(r3, "emval::as"), ur(r3, t3, e2)), y: (e2, r3) => (e2 = Ne(e2), (r3 = Je(r3, "emval::as")).toWireType(null, e2)), Y: (e2, r3, t3, a3) => (e2 = fr[e2])(null, r3 = Ne(r3), t3, a3), B: (e2, r3, t3, a3, n3) => (e2 = fr[e2])(r3 = Ne(r3), r3[t3 = cr(t3)], a3, n3), b: ze, G: (e2) => 0 === e2 ? qe(hr()) : (e2 = cr(e2), qe(hr()[e2])), A: (e2, r3, t3) => {
      var a3 = mr(e2, r3), n3 = a3.shift();
      e2--;
      var i4 = Array(e2);
      return r3 = `methodCaller<(${a3.map((e3) => e3.name).join(", ")}) => ${n3.name}>`, pr(de(r3, (r4, o4, s2, u2) => {
        for (var f2 = 0, l2 = 0; l2 < e2; ++l2) i4[l2] = a3[l2].readValueFromPointer(u2 + f2), f2 += a3[l2].la;
        return r4 = 1 === t3 ? dr(o4, i4) : o4.apply(r4, i4), ur(n3, s2, r4);
      }));
    }, q: (e2, r3) => (e2 = Ne(e2), r3 = Ne(r3), qe(e2[r3])), h: (e2) => {
      9 < e2 && (Ve[e2 + 1] += 1);
    }, I: (e2, r3) => (e2 = Ne(e2)) instanceof (r3 = Ne(r3)), u: (e2) => "number" == typeof (e2 = Ne(e2)), x: (e2) => "string" == typeof (e2 = Ne(e2)), F: () => qe([]), p: (e2) => qe(cr(e2)), k: (e2) => {
      var r3 = Ne(e2);
      q(r3), ze(e2);
    }, d: (e2, r3) => (e2 = (e2 = Je(e2, "_emval_take_value")).readValueFromPointer(r3), qe(e2)), z: (e2) => (e2 = Ne(e2), qe(typeof e2)), K: (e2, r3) => {
      if (vr[e2] && (clearTimeout(vr[e2].id), delete vr[e2]), !r3) return 0;
      var t3 = setTimeout(() => {
        delete vr[e2], wr(() => Sr(e2, performance.now()));
      }, r3);
      return vr[e2] = { id: t3, Ua: r3 }, 0;
    }, L: (e2, r3, t3, a3) => {
      var n3 = (/* @__PURE__ */ new Date()).getFullYear(), i4 = new Date(n3, 0, 1).getTimezoneOffset();
      n3 = new Date(n3, 6, 1).getTimezoneOffset(), $[e2 >> 2] = 60 * Math.max(i4, n3), w[r3 >> 2] = Number(i4 != n3), e2 = (r3 = (e3) => {
        var r4 = Math.abs(e3);
        return `UTC${0 <= e3 ? "-" : "+"}${String(Math.floor(r4 / 60)).padStart(2, "0")}${String(r4 % 60).padStart(2, "0")}`;
      })(i4), r3 = r3(n3), n3 < i4 ? (Ye(e2, t3, 17), Ye(r3, a3, 17)) : (Ye(e2, a3, 17), Ye(r3, t3, 17));
    }, P: (e2) => {
      var r3 = v.length;
      if (2147483648 < (e2 >>>= 0)) return false;
      for (var t3 = 1; 4 >= t3; t3 *= 2) {
        var a3 = r3 * (1 + 0.2 / t3);
        a3 = Math.min(a3, e2 + 100663296);
        e: {
          a3 = (Math.min(2147483648, 65536 * Math.ceil(Math.max(e2, a3) / 65536)) - p.buffer.byteLength + 65535) / 65536 | 0;
          try {
            p.grow(a3), P();
            var n3 = 1;
            break e;
          } catch (i4) {
          }
          n3 = void 0;
        }
        if (n3) return true;
      }
      return false;
    }, M: (e2, r3) => {
      var t3 = 0;
      return br().forEach((a3, n3) => {
        var i4 = r3 + t3;
        for (n3 = $[e2 + 4 * n3 >> 2] = i4, i4 = 0; i4 < a3.length; ++i4) d[n3++] = a3.charCodeAt(i4);
        d[n3] = 0, t3 += a3.length + 1;
      }), 0;
    }, N: (e2, r3) => {
      var t3 = br();
      $[e2 >> 2] = t3.length;
      var a3 = 0;
      return t3.forEach((e3) => a3 += e3.length + 1), $[r3 >> 2] = a3, 0;
    }, S: () => 52, R: function() {
      return 70;
    }, Q: (e2, r3, t3, a3) => {
      for (var n3 = 0, i4 = 0; i4 < t3; i4++) {
        var o4 = $[r3 >> 2], s2 = $[r3 + 4 >> 2];
        r3 += 8;
        for (var u2 = 0; u2 < s2; u2++) {
          var f2 = v[o4 + u2], l2 = Tr[e2];
          0 === f2 || 10 === f2 ? ((1 === e2 ? c : h)(Xe(l2)), l2.length = 0) : l2.push(f2);
        }
        n3 += s2;
      }
      return $[a3 >> 2] = n3, 0;
    }, H: gr };
    !async function() {
      var _a2;
      function e2(e3) {
        var _a3;
        return Wr = e3.exports, p = Wr.Z, P(), We = Wr.ca, O.unshift(Wr._), x--, (_a3 = o3.monitorRunDependencies) == null ? void 0 : _a3.call(o3, x), 0 == x && F && (e3 = F, F = null, e3()), Wr;
      }
      x++, (_a2 = o3.monitorRunDependencies) == null ? void 0 : _a2.call(o3, x);
      var r3 = { a: jr };
      if (o3.instantiateWasm) try {
        return o3.instantiateWasm(r3, e2);
      } catch (n3) {
        h(`Module.instantiateWasm callback failed with error: ${n3}`), a2(n3);
      }
      R ?? (R = U("arcgis-knowledge-client-core-simd.wasm") ? "arcgis-knowledge-client-core-simd.wasm" : o3.locateFile ? o3.locateFile("arcgis-knowledge-client-core-simd.wasm", l) : l + "arcgis-knowledge-client-core-simd.wasm");
      try {
        var t3 = await H(r3);
        return e2(t3.instance), t3;
      } catch (n3) {
        a2(n3);
      }
    }();
    var Pr, Er = (e2) => (Er = Wr.$)(e2), Or = (e2) => (Or = Wr.aa)(e2), kr = (e2) => (kr = Wr.ba)(e2), Sr = (e2, r3) => (Sr = Wr.da)(e2, r3);
    function xr() {
      function e2() {
        var _a2;
        if (!Pr && (Pr = true, o3.calledRun = true, !j)) {
          if (D(O), t2(o3), (_a2 = o3.onRuntimeInitialized) == null ? void 0 : _a2.call(o3), o3.postRun) for ("function" == typeof o3.postRun && (o3.postRun = [o3.postRun]); o3.postRun.length; ) {
            var e3 = o3.postRun.shift();
            k.unshift(e3);
          }
          D(k);
        }
      }
      if (!(0 < x)) {
        if (o3.preRun) for ("function" == typeof o3.preRun && (o3.preRun = [o3.preRun]); o3.preRun.length; ) S();
        D(E), 0 < x || (o3.setStatus ? (o3.setStatus("Running..."), setTimeout(() => {
          setTimeout(() => o3.setStatus(""), 1), e2();
        }, 1)) : e2());
      }
    }
    if (F = function e2() {
      Pr || xr(), Pr || (F = e2);
    }, o3.preInit) for ("function" == typeof o3.preInit && (o3.preInit = [o3.preInit]); 0 < o3.preInit.length; ) o3.preInit.pop()();
    return xr(), s;
  }, r.exports = i2, r.exports.default = i2), a.exports;
  var r, n2, i2;
}
var i = o(n());
var o2 = Object.freeze(Object.defineProperty({ __proto__: null, default: i }, Symbol.toStringTag, { value: "Module" }));
export {
  o2 as a
};
//# sourceMappingURL=arcgis-knowledge-client-core-simd-BSUGB5RX.js.map
