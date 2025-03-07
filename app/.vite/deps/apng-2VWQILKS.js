import {
  o
} from "./chunk-56GFF6UO.js";
import {
  s
} from "./chunk-M6FNW7GP.js";
import {
  n
} from "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/core/image/apng.js
var n2;
var i = { exports: {} };
i.exports;
function s2() {
  return n2 || (n2 = 1, e = function() {
    return function(e2) {
      var t = {};
      function r(n3) {
        if (t[n3]) return t[n3].exports;
        var i2 = t[n3] = { exports: {}, id: n3, loaded: false };
        return e2[n3].call(i2.exports, i2, i2.exports, r), i2.loaded = true, i2.exports;
      }
      return r.m = e2, r.c = t, r.p = "", r(0);
    }([function(e2, t, r) {
      Object.defineProperty(t, "__esModule", { value: true }), t.isNotPNG = u2, t.isNotAPNG = h2, t.default = c;
      var n3 = s3(r(1)), i2 = r(2);
      function s3(e3) {
        return e3 && e3.__esModule ? e3 : { default: e3 };
      }
      var a2 = new Error("Not a PNG"), o3 = new Error("Not an animated PNG");
      function u2(e3) {
        return e3 === a2;
      }
      function h2(e3) {
        return e3 === o3;
      }
      var l2 = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
      function c(e3) {
        var t2 = new Uint8Array(e3);
        if (Array.prototype.some.call(l2, function(e4, r3) {
          return e4 !== t2[r3];
        })) return a2;
        var r2 = false;
        if (f(t2, function(e4) {
          return !(r2 = "acTL" === e4);
        }), !r2) return o3;
        var n4 = [], s4 = [], u3 = null, h3 = null, c2 = 0, p2 = new i2.APNG();
        if (f(t2, function(e4, t3, r3, a3) {
          var o4 = new DataView(t3.buffer);
          switch (e4) {
            case "IHDR":
              u3 = t3.subarray(r3 + 8, r3 + 8 + a3), p2.width = o4.getUint32(r3 + 8), p2.height = o4.getUint32(r3 + 12);
              break;
            case "acTL":
              p2.numPlays = o4.getUint32(r3 + 8 + 4);
              break;
            case "fcTL":
              h3 && (p2.frames.push(h3), c2++), (h3 = new i2.Frame()).width = o4.getUint32(r3 + 8 + 4), h3.height = o4.getUint32(r3 + 8 + 8), h3.left = o4.getUint32(r3 + 8 + 12), h3.top = o4.getUint32(r3 + 8 + 16);
              var l3 = o4.getUint16(r3 + 8 + 20), f2 = o4.getUint16(r3 + 8 + 22);
              0 === f2 && (f2 = 100), h3.delay = 1e3 * l3 / f2, h3.delay <= 10 && (h3.delay = 100), p2.playTime += h3.delay, h3.disposeOp = o4.getUint8(r3 + 8 + 24), h3.blendOp = o4.getUint8(r3 + 8 + 25), h3.dataParts = [], 0 === c2 && 2 === h3.disposeOp && (h3.disposeOp = 1);
              break;
            case "fdAT":
              h3 && h3.dataParts.push(t3.subarray(r3 + 8 + 4, r3 + 8 + a3));
              break;
            case "IDAT":
              h3 && h3.dataParts.push(t3.subarray(r3 + 8, r3 + 8 + a3));
              break;
            case "IEND":
              s4.push(d(t3, r3, 12 + a3));
              break;
            default:
              n4.push(d(t3, r3, 12 + a3));
          }
        }), h3 && p2.frames.push(h3), 0 == p2.frames.length) return o3;
        var m2 = new Blob(n4), g = new Blob(s4);
        return p2.frames.forEach(function(e4) {
          var t3 = [];
          t3.push(l2), u3.set(_(e4.width), 0), u3.set(_(e4.height), 4), t3.push(v("IHDR", u3)), t3.push(m2), e4.dataParts.forEach(function(e5) {
            return t3.push(v("IDAT", e5));
          }), t3.push(g), e4.imageData = new Blob(t3, { type: "image/png" }), delete e4.dataParts, t3 = null;
        }), p2;
      }
      function f(e3, t2) {
        var r2 = new DataView(e3.buffer), n4 = 8, i3 = void 0, s4 = void 0, a3 = void 0;
        do {
          s4 = r2.getUint32(n4), a3 = t2(i3 = p(e3, n4 + 4, 4), e3, n4, s4), n4 += 12 + s4;
        } while (false !== a3 && "IEND" != i3 && n4 < e3.length);
      }
      function p(e3, t2, r2) {
        var n4 = Array.prototype.slice.call(e3.subarray(t2, t2 + r2));
        return String.fromCharCode.apply(String, n4);
      }
      function m(e3) {
        for (var t2 = new Uint8Array(e3.length), r2 = 0; r2 < e3.length; r2++) t2[r2] = e3.charCodeAt(r2);
        return t2;
      }
      function d(e3, t2, r2) {
        var n4 = new Uint8Array(r2);
        return n4.set(e3.subarray(t2, t2 + r2)), n4;
      }
      var v = function(e3, t2) {
        var r2 = e3.length + t2.length, i3 = new Uint8Array(r2 + 8), s4 = new DataView(i3.buffer);
        s4.setUint32(0, t2.length), i3.set(m(e3), 4), i3.set(t2, 8);
        var a3 = (0, n3.default)(i3, 4, r2);
        return s4.setUint32(r2 + 4, a3), i3;
      }, _ = function(e3) {
        return new Uint8Array([e3 >>> 24 & 255, e3 >>> 16 & 255, e3 >>> 8 & 255, 255 & e3]);
      };
    }, function(e2, t) {
      Object.defineProperty(t, "__esModule", { value: true }), t.default = function(e3) {
        for (var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n4 = -1, i3 = t2, s4 = t2 + (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e3.length - t2); i3 < s4; i3++) n4 = n4 >>> 8 ^ r[255 & (n4 ^ e3[i3])];
        return ~n4;
      };
      for (var r = new Uint32Array(256), n3 = 0; n3 < 256; n3++) {
        for (var i2 = n3, s3 = 0; s3 < 8; s3++) i2 = 1 & i2 ? 3988292384 ^ i2 >>> 1 : i2 >>> 1;
        r[n3] = i2;
      }
    }, function(e2, t, r) {
      Object.defineProperty(t, "__esModule", { value: true }), t.Frame = t.APNG = void 0;
      var n3 = /* @__PURE__ */ function() {
        function e3(e4, t2) {
          for (var r2 = 0; r2 < t2.length; r2++) {
            var n4 = t2[r2];
            n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(e4, n4.key, n4);
          }
        }
        return function(t2, r2, n4) {
          return r2 && e3(t2.prototype, r2), n4 && e3(t2, n4), t2;
        };
      }(), i2 = s3(r(3));
      function s3(e3) {
        return e3 && e3.__esModule ? e3 : { default: e3 };
      }
      function a2(e3, t2) {
        if (!(e3 instanceof t2)) throw new TypeError("Cannot call a class as a function");
      }
      t.APNG = function() {
        function e3() {
          a2(this, e3), this.width = 0, this.height = 0, this.numPlays = 0, this.playTime = 0, this.frames = [];
        }
        return n3(e3, [{ key: "createImages", value: function() {
          return Promise.all(this.frames.map(function(e4) {
            return e4.createImage();
          }));
        } }, { key: "getPlayer", value: function(e4) {
          var t2 = this, r2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return this.createImages().then(function() {
            return new i2.default(t2, e4, r2);
          });
        } }]), e3;
      }(), t.Frame = function() {
        function e3() {
          a2(this, e3), this.left = 0, this.top = 0, this.width = 0, this.height = 0, this.delay = 0, this.disposeOp = 0, this.blendOp = 0, this.imageData = null, this.imageElement = null;
        }
        return n3(e3, [{ key: "createImage", value: function() {
          var e4 = this;
          return this.imageElement ? Promise.resolve() : new Promise(function(t2, r2) {
            var n4 = URL.createObjectURL(e4.imageData);
            e4.imageElement = document.createElement("img"), e4.imageElement.onload = function() {
              URL.revokeObjectURL(n4), t2();
            }, e4.imageElement.onerror = function() {
              URL.revokeObjectURL(n4), e4.imageElement = null, r2(new Error("Image creation error"));
            }, e4.imageElement.src = n4;
          });
        } }]), e3;
      }();
    }, function(e2, t, r) {
      Object.defineProperty(t, "__esModule", { value: true });
      var n3 = /* @__PURE__ */ function() {
        function e3(e4, t2) {
          for (var r2 = 0; r2 < t2.length; r2++) {
            var n4 = t2[r2];
            n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(e4, n4.key, n4);
          }
        }
        return function(t2, r2, n4) {
          return r2 && e3(t2.prototype, r2), n4 && e3(t2, n4), t2;
        };
      }();
      function i2(e3) {
        return e3 && e3.__esModule ? e3 : { default: e3 };
      }
      function s3(e3, t2) {
        if (!(e3 instanceof t2)) throw new TypeError("Cannot call a class as a function");
      }
      function a2(e3, t2) {
        if (!e3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t2 || "object" != typeof t2 && "function" != typeof t2 ? e3 : t2;
      }
      function o3(e3, t2) {
        if ("function" != typeof t2 && null !== t2) throw new TypeError("Super expression must either be null or a function, not " + typeof t2);
        e3.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t2 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t2) : e3.__proto__ = t2);
      }
      var u2 = function(e3) {
        function t2(e4, r2, n4) {
          s3(this, t2);
          var i3 = a2(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this));
          return i3.playbackRate = 1, i3._currentFrameNumber = 0, i3._ended = false, i3._paused = true, i3._numPlays = 0, i3._rafId = null, i3._apng = e4, i3.context = r2, i3.stop(), n4 && i3.play(), i3;
        }
        return o3(t2, e3), n3(t2, [{ key: "renderNextFrame", value: function() {
          this._currentFrameNumber = (this._currentFrameNumber + 1) % this._apng.frames.length, this._currentFrameNumber === this._apng.frames.length - 1 && (this._numPlays++, 0 !== this._apng.numPlays && this._numPlays >= this._apng.numPlays && (this._ended = true, this._paused = true)), this._prevFrame && 1 == this._prevFrame.disposeOp ? this.context.clearRect(this._prevFrame.left, this._prevFrame.top, this._prevFrame.width, this._prevFrame.height) : this._prevFrame && 2 == this._prevFrame.disposeOp && this.context.putImageData(this._prevFrameData, this._prevFrame.left, this._prevFrame.top);
          var e4 = this.currentFrame;
          this._prevFrame = e4, this._prevFrameData = null, 2 == e4.disposeOp && (this._prevFrameData = this.context.getImageData(e4.left, e4.top, e4.width, e4.height)), 0 == e4.blendOp && this.context.clearRect(e4.left, e4.top, e4.width, e4.height), this.context.drawImage(e4.imageElement, e4.left, e4.top), this.emit("frame", this._currentFrameNumber), this._ended && this.emit("end");
        } }, { key: "play", value: function() {
          var e4 = this;
          this._rafId && cancelAnimationFrame(this._rafId), this.emit("play"), this._ended && this.stop(), this._paused = false;
          var t3 = performance.now() + this.currentFrame.delay / this.playbackRate, r2 = function r3(n4) {
            if (!e4._ended && !e4._paused) {
              if (n4 >= t3) {
                for (; n4 - t3 >= e4._apng.playTime / e4.playbackRate; ) t3 += e4._apng.playTime / e4.playbackRate, e4._numPlays++;
                do {
                  e4.renderNextFrame(), t3 += e4.currentFrame.delay / e4.playbackRate;
                } while (!e4._ended && !e4._paused && n4 > t3);
              }
              e4._rafId = requestAnimationFrame(r3);
            }
          };
          this._rafId = requestAnimationFrame(r2);
        } }, { key: "pause", value: function() {
          this._paused || (this._rafId && (cancelAnimationFrame(this._rafId), this._rafId = null), this.emit("pause"), this._paused = true);
        } }, { key: "stop", value: function() {
          this._rafId && (cancelAnimationFrame(this._rafId), this._rafId = null), this.emit("stop"), this._numPlays = 0, this._ended = false, this._paused = true, this._currentFrameNumber = -1, this.context.clearRect(0, 0, this._apng.width, this._apng.height), this.renderNextFrame();
        } }, { key: "currentFrameNumber", get: function() {
          return this._currentFrameNumber;
        } }, { key: "currentFrame", get: function() {
          return this._apng.frames[this._currentFrameNumber];
        } }, { key: "paused", get: function() {
          return this._paused;
        } }, { key: "ended", get: function() {
          return this._ended;
        } }]), t2;
      }(i2(r(4)).default);
      t.default = u2;
    }, function(e2, t) {
      function r() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
      }
      function n3(e3) {
        return "function" == typeof e3;
      }
      function i2(e3) {
        return "number" == typeof e3;
      }
      function s3(e3) {
        return "object" == typeof e3 && null !== e3;
      }
      function a2(e3) {
        return void 0 === e3;
      }
      e2.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e3) {
        if (!i2(e3) || e3 < 0 || isNaN(e3)) throw TypeError("n must be a positive number");
        return this._maxListeners = e3, this;
      }, r.prototype.emit = function(e3) {
        var t2, r2, i3, o3, u2, h2;
        if (this._events || (this._events = {}), "error" === e3 && (!this._events.error || s3(this._events.error) && !this._events.error.length)) {
          if ((t2 = arguments[1]) instanceof Error) throw t2;
          var l2 = new Error('Uncaught, unspecified "error" event. (' + t2 + ")");
          throw l2.context = t2, l2;
        }
        if (a2(r2 = this._events[e3])) return false;
        if (n3(r2)) switch (arguments.length) {
          case 1:
            r2.call(this);
            break;
          case 2:
            r2.call(this, arguments[1]);
            break;
          case 3:
            r2.call(this, arguments[1], arguments[2]);
            break;
          default:
            o3 = Array.prototype.slice.call(arguments, 1), r2.apply(this, o3);
        }
        else if (s3(r2)) for (o3 = Array.prototype.slice.call(arguments, 1), i3 = (h2 = r2.slice()).length, u2 = 0; u2 < i3; u2++) h2[u2].apply(this, o3);
        return true;
      }, r.prototype.addListener = function(e3, t2) {
        var i3;
        if (!n3(t2)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e3, n3(t2.listener) ? t2.listener : t2), this._events[e3] ? s3(this._events[e3]) ? this._events[e3].push(t2) : this._events[e3] = [this._events[e3], t2] : this._events[e3] = t2, s3(this._events[e3]) && !this._events[e3].warned && (i3 = a2(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && i3 > 0 && this._events[e3].length > i3 && (this._events[e3].warned = true, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e3].length), "function" == typeof console.trace && console.trace()), this;
      }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e3, t2) {
        if (!n3(t2)) throw TypeError("listener must be a function");
        var r2 = false;
        function i3() {
          this.removeListener(e3, i3), r2 || (r2 = true, t2.apply(this, arguments));
        }
        return i3.listener = t2, this.on(e3, i3), this;
      }, r.prototype.removeListener = function(e3, t2) {
        var r2, i3, a3, o3;
        if (!n3(t2)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e3]) return this;
        if (a3 = (r2 = this._events[e3]).length, i3 = -1, r2 === t2 || n3(r2.listener) && r2.listener === t2) delete this._events[e3], this._events.removeListener && this.emit("removeListener", e3, t2);
        else if (s3(r2)) {
          for (o3 = a3; o3-- > 0; ) if (r2[o3] === t2 || r2[o3].listener && r2[o3].listener === t2) {
            i3 = o3;
            break;
          }
          if (i3 < 0) return this;
          1 === r2.length ? (r2.length = 0, delete this._events[e3]) : r2.splice(i3, 1), this._events.removeListener && this.emit("removeListener", e3, t2);
        }
        return this;
      }, r.prototype.removeAllListeners = function(e3) {
        var t2, r2;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e3] && delete this._events[e3], this;
        if (0 === arguments.length) {
          for (t2 in this._events) "removeListener" !== t2 && this.removeAllListeners(t2);
          return this.removeAllListeners("removeListener"), this._events = {}, this;
        }
        if (n3(r2 = this._events[e3])) this.removeListener(e3, r2);
        else if (r2) for (; r2.length; ) this.removeListener(e3, r2[r2.length - 1]);
        return delete this._events[e3], this;
      }, r.prototype.listeners = function(e3) {
        return this._events && this._events[e3] ? n3(this._events[e3]) ? [this._events[e3]] : this._events[e3].slice() : [];
      }, r.prototype.listenerCount = function(e3) {
        if (this._events) {
          var t2 = this._events[e3];
          if (n3(t2)) return 1;
          if (t2) return t2.length;
        }
        return 0;
      }, r.listenerCount = function(e3, t2) {
        return e3.listenerCount(t2);
      };
    }]);
  }, i.exports = e()), i.exports;
  var e;
}
var a = o(s2());
async function o2(e, n3) {
  const i2 = a(e);
  if (i2 instanceof Error) throw i2;
  await i2.createImages(), s(n3);
  const { frames: s3, width: o3, height: u2 } = i2, h2 = document.createElement("canvas");
  h2.width = o3, h2.height = u2;
  const l2 = h2.getContext("2d", { willReadFrequently: true }), c = [], f = [];
  let p = 0;
  for (const t of s3) {
    const e2 = n(t.delay || 100);
    f.push(e2), p += e2;
    const n4 = t.imageElement;
    0 === t.blendOp ? l2.globalCompositeOperation = "copy" : l2.globalCompositeOperation = "source-over";
    const i3 = 2 === t.disposeOp ? l2.getImageData(t.left, t.top, t.width, t.height) : void 0;
    l2.drawImage(n4, t.left, t.top);
    const s4 = l2.getImageData(0, 0, o3, u2);
    c.push(s4), 0 === t.disposeOp || (1 === t.disposeOp ? l2.clearRect(t.left, t.top, t.width, t.height) : 2 === t.disposeOp && l2.putImageData(i3, t.left, t.top));
  }
  return { frameCount: s3.length, duration: p, frameDurations: f, getFrame: (e2) => c[e2], width: o3, height: u2 };
}
var u = [137, 80, 78, 71, 13, 10, 26, 10];
function h(e) {
  const t = new Uint8Array(e);
  return !u.some((e2, r) => e2 !== t[r]);
}
function l(e) {
  if (!h(e)) return false;
  const t = new DataView(e), r = new Uint8Array(e);
  let n3, i2 = 8;
  do {
    const e2 = t.getUint32(i2);
    if (n3 = String.fromCharCode.apply(String, Array.prototype.slice.call(r.subarray(i2 + 4, i2 + 8))), "acTL" === n3) return true;
    i2 += 12 + e2;
  } while ("IEND" !== n3 && i2 < r.length);
  return false;
}
export {
  l as isAnimatedPNG,
  h as isPNG,
  o2 as parseApng
};
//# sourceMappingURL=apng-2VWQILKS.js.map
