import {
  n
} from "./chunk-5HI5HAKB.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/core/image/gif.js
var r;
var t = {};
var n2 = {};
var i = {};
function a() {
  if (r) return i;
  r = 1, Object.defineProperty(i, "__esModule", { value: true }), i.loop = i.conditional = i.parse = void 0;
  var e = function e2(r2, t3) {
    var n4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n4;
    if (Array.isArray(t3)) t3.forEach(function(t4) {
      return e2(r2, t4, n4, i2);
    });
    else if ("function" == typeof t3) t3(r2, n4, i2, e2);
    else {
      var a2 = Object.keys(t3)[0];
      Array.isArray(t3[a2]) ? (i2[a2] = {}, e2(r2, t3[a2], n4, i2[a2])) : i2[a2] = t3[a2](r2, n4, i2, e2);
    }
    return n4;
  };
  i.parse = e;
  var t2 = function(e2, r2) {
    return function(t3, n4, i2, a2) {
      r2(t3, n4, i2) && a2(t3, e2, n4, i2);
    };
  };
  i.conditional = t2;
  var n3 = function(e2, r2) {
    return function(t3, n4, i2, a2) {
      for (var o2 = [], d2 = t3.pos; r2(t3, n4, i2); ) {
        var s2 = {};
        if (a2(t3, e2, n4, s2), t3.pos === d2) break;
        d2 = t3.pos, o2.push(s2);
      }
      return o2;
    };
  };
  return i.loop = n3, i;
}
var o;
var d;
var s = {};
function u() {
  if (o) return s;
  o = 1, Object.defineProperty(s, "__esModule", { value: true }), s.readBits = s.readArray = s.readUnsigned = s.readString = s.peekBytes = s.readBytes = s.peekByte = s.readByte = s.buildStream = void 0;
  var e = function(e2) {
    return { data: e2, pos: 0 };
  };
  s.buildStream = e;
  var r2 = function() {
    return function(e2) {
      return e2.data[e2.pos++];
    };
  };
  s.readByte = r2;
  var t2 = function() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return function(r3) {
      return r3.data[r3.pos + e2];
    };
  };
  s.peekByte = t2;
  var n3 = function(e2) {
    return function(r3) {
      return r3.data.subarray(r3.pos, r3.pos += e2);
    };
  };
  s.readBytes = n3;
  var i2 = function(e2) {
    return function(r3) {
      return r3.data.subarray(r3.pos, r3.pos + e2);
    };
  };
  s.peekBytes = i2;
  var a2 = function(e2) {
    return function(r3) {
      return Array.from(n3(e2)(r3)).map(function(e3) {
        return String.fromCharCode(e3);
      }).join("");
    };
  };
  s.readString = a2;
  var d2 = function(e2) {
    return function(r3) {
      var t3 = n3(2)(r3);
      return e2 ? (t3[1] << 8) + t3[0] : (t3[0] << 8) + t3[1];
    };
  };
  s.readUnsigned = d2;
  var u2 = function(e2, r3) {
    return function(t3, i3, a3) {
      for (var o2 = "function" == typeof r3 ? r3(t3, i3, a3) : r3, d3 = n3(e2), s2 = new Array(o2), u3 = 0; u3 < o2; u3++) s2[u3] = d3(t3);
      return s2;
    };
  };
  s.readArray = u2;
  var c2 = function(e2, r3, t3) {
    for (var n4 = 0, i3 = 0; i3 < t3; i3++) n4 += e2[r3 + i3] && Math.pow(2, t3 - i3 - 1);
    return n4;
  }, f2 = function(e2) {
    return function(t3) {
      for (var n4 = r2()(t3), i3 = new Array(8), a3 = 0; a3 < 8; a3++) i3[7 - a3] = !!(n4 & 1 << a3);
      return Object.keys(e2).reduce(function(r3, t4) {
        var n5 = e2[t4];
        return n5.length ? r3[t4] = c2(i3, n5.index, n5.length) : r3[t4] = i3[n5.index], r3;
      }, {});
    };
  };
  return s.readBits = f2, s;
}
function c() {
  return d || (d = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.default = void 0;
    var r2 = a(), t2 = u(), n3 = { blocks: function(e2) {
      for (var r3 = 0, n4 = [], i3 = e2.data.length, a2 = 0, o3 = (0, t2.readByte)()(e2); o3 !== r3 && o3; o3 = (0, t2.readByte)()(e2)) {
        if (e2.pos + o3 >= i3) {
          var d3 = i3 - e2.pos;
          n4.push((0, t2.readBytes)(d3)(e2)), a2 += d3;
          break;
        }
        n4.push((0, t2.readBytes)(o3)(e2)), a2 += o3;
      }
      for (var s3 = new Uint8Array(a2), u2 = 0, c3 = 0; c3 < n4.length; c3++) s3.set(n4[c3], u2), u2 += n4[c3].length;
      return s3;
    } }, i2 = (0, r2.conditional)({ gce: [{ codes: (0, t2.readBytes)(2) }, { byteSize: (0, t2.readByte)() }, { extras: (0, t2.readBits)({ future: { index: 0, length: 3 }, disposal: { index: 3, length: 3 }, userInput: { index: 6 }, transparentColorGiven: { index: 7 } }) }, { delay: (0, t2.readUnsigned)(true) }, { transparentColorIndex: (0, t2.readByte)() }, { terminator: (0, t2.readByte)() }] }, function(e2) {
      var r3 = (0, t2.peekBytes)(2)(e2);
      return 33 === r3[0] && 249 === r3[1];
    }), o2 = (0, r2.conditional)({ image: [{ code: (0, t2.readByte)() }, { descriptor: [{ left: (0, t2.readUnsigned)(true) }, { top: (0, t2.readUnsigned)(true) }, { width: (0, t2.readUnsigned)(true) }, { height: (0, t2.readUnsigned)(true) }, { lct: (0, t2.readBits)({ exists: { index: 0 }, interlaced: { index: 1 }, sort: { index: 2 }, future: { index: 3, length: 2 }, size: { index: 5, length: 3 } }) }] }, (0, r2.conditional)({ lct: (0, t2.readArray)(3, function(e2, r3, t3) {
      return Math.pow(2, t3.descriptor.lct.size + 1);
    }) }, function(e2, r3, t3) {
      return t3.descriptor.lct.exists;
    }), { data: [{ minCodeSize: (0, t2.readByte)() }, n3] }] }, function(e2) {
      return 44 === (0, t2.peekByte)()(e2);
    }), d2 = (0, r2.conditional)({ text: [{ codes: (0, t2.readBytes)(2) }, { blockSize: (0, t2.readByte)() }, { preData: function(e2, r3, n4) {
      return (0, t2.readBytes)(n4.text.blockSize)(e2);
    } }, n3] }, function(e2) {
      var r3 = (0, t2.peekBytes)(2)(e2);
      return 33 === r3[0] && 1 === r3[1];
    }), s2 = (0, r2.conditional)({ application: [{ codes: (0, t2.readBytes)(2) }, { blockSize: (0, t2.readByte)() }, { id: function(e2, r3, n4) {
      return (0, t2.readString)(n4.blockSize)(e2);
    } }, n3] }, function(e2) {
      var r3 = (0, t2.peekBytes)(2)(e2);
      return 33 === r3[0] && 255 === r3[1];
    }), c2 = (0, r2.conditional)({ comment: [{ codes: (0, t2.readBytes)(2) }, n3] }, function(e2) {
      var r3 = (0, t2.peekBytes)(2)(e2);
      return 33 === r3[0] && 254 === r3[1];
    }), f2 = [{ header: [{ signature: (0, t2.readString)(3) }, { version: (0, t2.readString)(3) }] }, { lsd: [{ width: (0, t2.readUnsigned)(true) }, { height: (0, t2.readUnsigned)(true) }, { gct: (0, t2.readBits)({ exists: { index: 0 }, resolution: { index: 1, length: 3 }, sort: { index: 4 }, size: { index: 5, length: 3 } }) }, { backgroundColorIndex: (0, t2.readByte)() }, { pixelAspectRatio: (0, t2.readByte)() }] }, (0, r2.conditional)({ gct: (0, t2.readArray)(3, function(e2, r3) {
      return Math.pow(2, r3.lsd.gct.size + 1);
    }) }, function(e2, r3) {
      return r3.lsd.gct.exists;
    }), { frames: (0, r2.loop)([i2, s2, c2, o2, d2], function(e2) {
      var r3 = (0, t2.peekByte)()(e2);
      return 33 === r3 || 44 === r3;
    }) }];
    e.default = f2;
  }(n2)), n2;
}
var f;
var l = {};
function p() {
  if (f) return l;
  f = 1, Object.defineProperty(l, "__esModule", { value: true }), l.deinterlace = void 0;
  var e = function(e2, r2) {
    for (var t2 = new Array(e2.length), n3 = e2.length / r2, i2 = function(n4, i3) {
      var a3 = e2.slice(i3 * r2, (i3 + 1) * r2);
      t2.splice.apply(t2, [n4 * r2, r2].concat(a3));
    }, a2 = [0, 4, 2, 1], o2 = [8, 8, 4, 2], d2 = 0, s2 = 0; s2 < 4; s2++) for (var u2 = a2[s2]; u2 < n3; u2 += o2[s2]) i2(u2, d2), d2++;
    return t2;
  };
  return l.deinterlace = e, l;
}
var g;
var y;
var h = {};
function v() {
  if (g) return h;
  g = 1, Object.defineProperty(h, "__esModule", { value: true }), h.lzw = void 0;
  var e = function(e2, r2, t2) {
    var n3, i2, a2, o2, d2, s2, u2, c2, f2, l2, p2, g2, y2, h2, v2, m2, w2 = 4096, x2 = -1, B2 = t2, b2 = new Array(t2), k2 = new Array(w2), A2 = new Array(w2), U2 = new Array(w2 + 1);
    for (d2 = (i2 = 1 << (l2 = e2)) + 1, n3 = i2 + 2, u2 = x2, a2 = (1 << (o2 = l2 + 1)) - 1, c2 = 0; c2 < i2; c2++) k2[c2] = 0, A2[c2] = c2;
    for (p2 = g2 = y2 = h2 = v2 = m2 = 0, f2 = 0; f2 < B2; ) {
      if (0 === h2) {
        if (g2 < o2) {
          p2 += r2[m2] << g2, g2 += 8, m2++;
          continue;
        }
        if (c2 = p2 & a2, p2 >>= o2, g2 -= o2, c2 > n3 || c2 == d2) break;
        if (c2 == i2) {
          a2 = (1 << (o2 = l2 + 1)) - 1, n3 = i2 + 2, u2 = x2;
          continue;
        }
        if (u2 == x2) {
          U2[h2++] = A2[c2], u2 = c2, y2 = c2;
          continue;
        }
        for (s2 = c2, c2 == n3 && (U2[h2++] = y2, c2 = u2); c2 > i2; ) U2[h2++] = A2[c2], c2 = k2[c2];
        y2 = 255 & A2[c2], U2[h2++] = y2, n3 < w2 && (k2[n3] = u2, A2[n3] = y2, !(++n3 & a2) && n3 < w2 && (o2++, a2 += n3)), u2 = s2;
      }
      h2--, b2[v2++] = U2[h2], f2++;
    }
    for (f2 = v2; f2 < B2; f2++) b2[f2] = 0;
    return b2;
  };
  return h.lzw = e, h;
}
function m() {
  if (y) return t;
  y = 1, Object.defineProperty(t, "__esModule", { value: true }), t.decompressFrames = t.decompressFrame = t.parseGIF = void 0;
  var e = d2(c()), r2 = a(), n3 = u(), i2 = p(), o2 = v();
  function d2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  var s2 = function(t2) {
    var i3 = new Uint8Array(t2);
    return (0, r2.parse)((0, n3.buildStream)(i3), e.default);
  };
  t.parseGIF = s2;
  var f2 = function(e2) {
    for (var r3 = e2.pixels.length, t2 = new Uint8ClampedArray(4 * r3), n4 = 0; n4 < r3; n4++) {
      var i3 = 4 * n4, a2 = e2.pixels[n4], o3 = e2.colorTable[a2] || [0, 0, 0];
      t2[i3] = o3[0], t2[i3 + 1] = o3[1], t2[i3 + 2] = o3[2], t2[i3 + 3] = a2 !== e2.transparentIndex ? 255 : 0;
    }
    return t2;
  }, l2 = function(e2, r3, t2) {
    if (e2.image) {
      var n4 = e2.image, a2 = n4.descriptor.width * n4.descriptor.height, d3 = (0, o2.lzw)(n4.data.minCodeSize, n4.data.blocks, a2);
      n4.descriptor.lct.interlaced && (d3 = (0, i2.deinterlace)(d3, n4.descriptor.width));
      var s3 = { pixels: d3, dims: { top: e2.image.descriptor.top, left: e2.image.descriptor.left, width: e2.image.descriptor.width, height: e2.image.descriptor.height } };
      return n4.descriptor.lct && n4.descriptor.lct.exists ? s3.colorTable = n4.lct : s3.colorTable = r3, e2.gce && (s3.delay = 10 * (e2.gce.delay || 10), s3.disposalType = e2.gce.extras.disposal, e2.gce.extras.transparentColorGiven && (s3.transparentIndex = e2.gce.transparentColorIndex)), t2 && (s3.patch = f2(s3)), s3;
    }
    console.warn("gif frame does not have associated image.");
  };
  t.decompressFrame = l2;
  var g2 = function(e2, r3) {
    return e2.frames.filter(function(e3) {
      return e3.image;
    }).map(function(t2) {
      return l2(t2, e2.gct, r3);
    });
  };
  return t.decompressFrames = g2, t;
}
var w = m();
var x;
var B;
var b;
function k(e, r2) {
  return x ?? (x = document.createElement("canvas")), x.width = e, x.height = r2, x.getContext("2d", { willReadFrequently: true });
}
async function A(r2, t2) {
  const n3 = w.parseGIF(r2), i2 = w.decompressFrames(n3, true), { width: a2, height: o2 } = n3.lsd, d2 = k(a2, o2), s2 = [], u2 = [];
  let c2 = 0;
  for (const f2 of i2) {
    const r3 = n(f2.delay || 100);
    u2.push(r3), c2 += r3;
    const t3 = U(new ImageData(f2.patch, f2.dims.width, f2.dims.height)), n4 = 3 === f2.disposalType ? d2.getImageData(f2.dims.left, f2.dims.top, f2.dims.width, f2.dims.height) : void 0;
    d2.drawImage(t3, f2.dims.left, f2.dims.top);
    const i3 = d2.getImageData(0, 0, a2, o2);
    s2.push(i3), 1 === f2.disposalType || (2 === f2.disposalType ? d2.clearRect(f2.dims.left, f2.dims.top, f2.dims.width, f2.dims.height) : 3 === f2.disposalType && d2.putImageData(n4, f2.dims.left, f2.dims.top));
  }
  return { frameCount: i2.length, duration: c2, frameDurations: u2, getFrame: (e) => s2[e], width: a2, height: o2 };
}
function U(e) {
  return B ?? (B = document.createElement("canvas")), b ?? (b = B.getContext("2d", { willReadFrequently: true })), B.width = e.width, B.height = e.height, b.putImageData(e, 0, 0), B;
}
var S = [71, 73, 70];
function I(e) {
  const r2 = new Uint8Array(e);
  return !S.some((e2, t2) => e2 !== r2[t2]);
}
function z(e) {
  if (!I(e)) return false;
  const r2 = new DataView(e), t2 = r2.getUint8(10);
  let n3 = 13 + (128 & t2 ? 3 * 2 ** (1 + (7 & t2)) : 0), i2 = 0, a2 = false;
  for (; !a2; ) {
    switch (r2.getUint8(n3++)) {
      case 33:
        if (!o2()) return false;
        break;
      case 44:
        d2();
        break;
      case 59:
        a2 = true;
        break;
      default:
        return false;
    }
    if (i2 > 1) return true;
  }
  function o2() {
    switch (r2.getUint8(n3++)) {
      case 249:
        s2();
        break;
      case 1:
        u2();
        break;
      case 254:
        c2();
        break;
      case 255:
        f2();
        break;
      default:
        return false;
    }
    return true;
  }
  function d2() {
    i2++, n3 += 8;
    const e2 = r2.getUint8(n3++);
    n3 += 128 & e2 ? 3 * 2 ** (1 + (7 & e2)) : 0, n3++, l2();
  }
  function s2() {
    n3++, n3 += 4, l2();
  }
  function u2() {
    i2++, n3++, n3 += 12, l2();
  }
  function c2() {
    l2();
  }
  function f2() {
    n3++, n3 += 8, n3 += 3, l2();
  }
  function l2() {
    let e2;
    for (; e2 = r2.getUint8(n3++); ) n3 += e2;
  }
  return false;
}
export {
  z as isAnimatedGIF,
  I as isGIF,
  A as parseGif
};
//# sourceMappingURL=gif-J2LQCNHK.js.map
