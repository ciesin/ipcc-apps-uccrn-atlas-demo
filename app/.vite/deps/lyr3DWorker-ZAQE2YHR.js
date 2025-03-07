import {
  e,
  o
} from "./chunk-56GFF6UO.js";
import {
  __publicField
} from "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/chunks/lyr3DWorker.js
var t;
var n = { exports: {} };
function o2() {
  var _a;
  return t || (t = 1, e2 = n, o3 = "undefined" != typeof document ? (_a = document.currentScript) == null ? void 0 : _a.src : void 0, a2 = function(e3 = {}) {
    var t2, n2, a3, i2, s = e3, l = new Promise((r, e4) => {
      t2 = r, n2 = e4;
    }), u = Object.assign({}, s), d = "./this.program", c = (r, e4) => {
      throw e4;
    }, f = "";
    function h(r) {
      return s.locateFile ? s.locateFile(r, f) : f + r;
    }
    "undefined" != typeof document && document.currentScript && (f = document.currentScript.src), o3 && (f = o3), f = f.startsWith("blob:") ? "" : f.substr(0, f.replace(/[?#].*/, "").lastIndexOf("/") + 1), a3 = (r) => fetch(r, { credentials: "same-origin" }).then((r2) => r2.ok ? r2.arrayBuffer() : Promise.reject(new Error(r2.status + " : " + r2.url)));
    var m = s.print || console.log.bind(console), p = s.printErr || console.error.bind(console);
    Object.assign(s, u), u = null, s.arguments && s.arguments, s.thisProgram && (d = s.thisProgram);
    var v, w, y, g, E, _, b, k, F, P = s.wasmBinary, A = false;
    function S() {
      var r = v.buffer;
      s.HEAP8 = w = new Int8Array(r), s.HEAP16 = g = new Int16Array(r), s.HEAPU8 = y = new Uint8Array(r), s.HEAPU16 = E = new Uint16Array(r), s.HEAP32 = _ = new Int32Array(r), s.HEAPU32 = b = new Uint32Array(r), s.HEAPF32 = k = new Float32Array(r), s.HEAPF64 = F = new Float64Array(r);
    }
    var D = [], $ = [], C = [];
    function T() {
      if (s.preRun) for ("function" == typeof s.preRun && (s.preRun = [s.preRun]); s.preRun.length; ) x(s.preRun.shift());
      tr(D);
    }
    function j() {
      s.noFSInit || jr.initialized || jr.init(), jr.ignorePermissions = false, tr($);
    }
    function M() {
      if (s.postRun) for ("function" == typeof s.postRun && (s.postRun = [s.postRun]); s.postRun.length; ) N(s.postRun.shift());
      tr(C);
    }
    function x(r) {
      D.unshift(r);
    }
    function R(r) {
      $.unshift(r);
    }
    function N(r) {
      C.unshift(r);
    }
    var z = 0, W = null;
    function O(r) {
      return r;
    }
    function U(r) {
      var _a2;
      z++, (_a2 = s.monitorRunDependencies) == null ? void 0 : _a2.call(s, z);
    }
    function B(r) {
      var _a2;
      if (z--, (_a2 = s.monitorRunDependencies) == null ? void 0 : _a2.call(s, z), 0 == z && W) {
        var e4 = W;
        W = null, e4();
      }
    }
    function L(r) {
      var _a2;
      (_a2 = s.onAbort) == null ? void 0 : _a2.call(s, r), p(r = "Aborted(" + r + ")"), A = true, r += ". Build with -sASSERTIONS for more info.";
      var e4 = new WebAssembly.RuntimeError(r);
      throw n2(e4), e4;
    }
    var I, H, V, q = "data:application/octet-stream;base64,", X = (r) => r.startsWith(q);
    function G() {
      var r = "lyr3DWorker.wasm";
      return X(r) ? r : h(r);
    }
    function K(r) {
      if (r == I && P) return new Uint8Array(P);
      throw "both async and sync fetching of the wasm failed";
    }
    function Y(r) {
      return P ? Promise.resolve().then(() => K(r)) : a3(r).then((r2) => new Uint8Array(r2), () => K(r));
    }
    function J(r, e4, t3) {
      return Y(r).then((r2) => WebAssembly.instantiate(r2, e4)).then(t3, (r2) => {
        p(`failed to asynchronously prepare wasm: ${r2}`), L(r2);
      });
    }
    function Q(r, e4, t3, n3) {
      return r || "function" != typeof WebAssembly.instantiateStreaming || X(e4) || "function" != typeof fetch ? J(e4, t3, n3) : fetch(e4, { credentials: "same-origin" }).then((r2) => WebAssembly.instantiateStreaming(r2, t3).then(n3, function(r3) {
        return p(`wasm streaming compile failed: ${r3}`), p("falling back to ArrayBuffer instantiation"), J(e4, t3, n3);
      }));
    }
    function Z() {
      return { a: nn };
    }
    function rr() {
      function r(r2, e5) {
        return on = r2.exports, v = on._, S(), ye = on.ba, R(on.$), B(), on;
      }
      function e4(e5) {
        r(e5.instance);
      }
      U();
      var t3 = Z();
      if (s.instantiateWasm) try {
        return s.instantiateWasm(t3, r);
      } catch (o4) {
        p(`Module.instantiateWasm callback failed with error: ${o4}`), n2(o4);
      }
      return I ?? (I = G()), Q(P, I, t3, e4).catch(n2), {};
    }
    class er {
      constructor(r) {
        __publicField(this, "name", "ExitStatus");
        this.message = `Program terminated with exit(${r})`, this.status = r;
      }
    }
    var tr = (r) => {
      for (; r.length > 0; ) r.shift()(s);
    }, nr = s.noExitRuntime || true, or = (r) => dn(r), ar = () => cn();
    class ir {
      constructor(r) {
        this.excPtr = r, this.ptr = r - 24;
      }
      set_type(r) {
        b[this.ptr + 4 >> 2] = r;
      }
      get_type() {
        return b[this.ptr + 4 >> 2];
      }
      set_destructor(r) {
        b[this.ptr + 8 >> 2] = r;
      }
      get_destructor() {
        return b[this.ptr + 8 >> 2];
      }
      set_caught(r) {
        r = r ? 1 : 0, w[this.ptr + 12] = r;
      }
      get_caught() {
        return 0 != w[this.ptr + 12];
      }
      set_rethrown(r) {
        r = r ? 1 : 0, w[this.ptr + 13] = r;
      }
      get_rethrown() {
        return 0 != w[this.ptr + 13];
      }
      init(r, e4) {
        this.set_adjusted_ptr(0), this.set_type(r), this.set_destructor(e4);
      }
      set_adjusted_ptr(r) {
        b[this.ptr + 16 >> 2] = r;
      }
      get_adjusted_ptr() {
        return b[this.ptr + 16 >> 2];
      }
    }
    var sr = (r, e4, t3) => {
      throw new ir(r).init(e4, t3), r;
    }, lr = () => {
      var r = _[+xr.varargs >> 2];
      return xr.varargs += 4, r;
    }, ur = lr, dr = { isAbs: (r) => "/" === r.charAt(0), splitPath: (r) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(r).slice(1), normalizeArray: (r, e4) => {
      for (var t3 = 0, n3 = r.length - 1; n3 >= 0; n3--) {
        var o4 = r[n3];
        "." === o4 ? r.splice(n3, 1) : ".." === o4 ? (r.splice(n3, 1), t3++) : t3 && (r.splice(n3, 1), t3--);
      }
      if (e4) for (; t3; t3--) r.unshift("..");
      return r;
    }, normalize: (r) => {
      var e4 = dr.isAbs(r), t3 = "/" === r.substr(-1);
      return (r = dr.normalizeArray(r.split("/").filter((r2) => !!r2), !e4).join("/")) || e4 || (r = "."), r && t3 && (r += "/"), (e4 ? "/" : "") + r;
    }, dirname: (r) => {
      var e4 = dr.splitPath(r), t3 = e4[0], n3 = e4[1];
      return t3 || n3 ? (n3 && (n3 = n3.substr(0, n3.length - 1)), t3 + n3) : ".";
    }, basename: (r) => {
      if ("/" === r) return "/";
      var e4 = (r = (r = dr.normalize(r)).replace(/\/$/, "")).lastIndexOf("/");
      return -1 === e4 ? r : r.substr(e4 + 1);
    }, join: (...r) => dr.normalize(r.join("/")), join2: (r, e4) => dr.normalize(r + "/" + e4) }, cr = () => {
      if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) return (r) => crypto.getRandomValues(r);
      L("initRandomDevice");
    }, fr = (r) => (fr = cr())(r), hr = { resolve: (...r) => {
      for (var e4 = "", t3 = false, n3 = r.length - 1; n3 >= -1 && !t3; n3--) {
        var o4 = n3 >= 0 ? r[n3] : jr.cwd();
        if ("string" != typeof o4) throw new TypeError("Arguments to path.resolve must be strings");
        if (!o4) return "";
        e4 = o4 + "/" + e4, t3 = dr.isAbs(o4);
      }
      return (t3 ? "/" : "") + (e4 = dr.normalizeArray(e4.split("/").filter((r2) => !!r2), !t3).join("/")) || ".";
    }, relative: (r, e4) => {
      function t3(r2) {
        for (var e5 = 0; e5 < r2.length && "" === r2[e5]; e5++) ;
        for (var t4 = r2.length - 1; t4 >= 0 && "" === r2[t4]; t4--) ;
        return e5 > t4 ? [] : r2.slice(e5, t4 - e5 + 1);
      }
      r = hr.resolve(r).substr(1), e4 = hr.resolve(e4).substr(1);
      for (var n3 = t3(r.split("/")), o4 = t3(e4.split("/")), a4 = Math.min(n3.length, o4.length), i3 = a4, s2 = 0; s2 < a4; s2++) if (n3[s2] !== o4[s2]) {
        i3 = s2;
        break;
      }
      var l2 = [];
      for (s2 = i3; s2 < n3.length; s2++) l2.push("..");
      return (l2 = l2.concat(o4.slice(i3))).join("/");
    } }, mr = "undefined" != typeof TextDecoder ? new TextDecoder() : void 0, pr = (r, e4 = 0, t3 = NaN) => {
      for (var n3 = e4 + t3, o4 = e4; r[o4] && !(o4 >= n3); ) ++o4;
      if (o4 - e4 > 16 && r.buffer && mr) return mr.decode(r.subarray(e4, o4));
      for (var a4 = ""; e4 < o4; ) {
        var i3 = r[e4++];
        if (128 & i3) {
          var s2 = 63 & r[e4++];
          if (192 != (224 & i3)) {
            var l2 = 63 & r[e4++];
            if ((i3 = 224 == (240 & i3) ? (15 & i3) << 12 | s2 << 6 | l2 : (7 & i3) << 18 | s2 << 12 | l2 << 6 | 63 & r[e4++]) < 65536) a4 += String.fromCharCode(i3);
            else {
              var u2 = i3 - 65536;
              a4 += String.fromCharCode(55296 | u2 >> 10, 56320 | 1023 & u2);
            }
          } else a4 += String.fromCharCode((31 & i3) << 6 | s2);
        } else a4 += String.fromCharCode(i3);
      }
      return a4;
    }, vr = [], wr = (r) => {
      for (var e4 = 0, t3 = 0; t3 < r.length; ++t3) {
        var n3 = r.charCodeAt(t3);
        n3 <= 127 ? e4++ : n3 <= 2047 ? e4 += 2 : n3 >= 55296 && n3 <= 57343 ? (e4 += 4, ++t3) : e4 += 3;
      }
      return e4;
    }, yr = (r, e4, t3, n3) => {
      if (!(n3 > 0)) return 0;
      for (var o4 = t3, a4 = t3 + n3 - 1, i3 = 0; i3 < r.length; ++i3) {
        var s2 = r.charCodeAt(i3);
        if (s2 >= 55296 && s2 <= 57343 && (s2 = 65536 + ((1023 & s2) << 10) | 1023 & r.charCodeAt(++i3)), s2 <= 127) {
          if (t3 >= a4) break;
          e4[t3++] = s2;
        } else if (s2 <= 2047) {
          if (t3 + 1 >= a4) break;
          e4[t3++] = 192 | s2 >> 6, e4[t3++] = 128 | 63 & s2;
        } else if (s2 <= 65535) {
          if (t3 + 2 >= a4) break;
          e4[t3++] = 224 | s2 >> 12, e4[t3++] = 128 | s2 >> 6 & 63, e4[t3++] = 128 | 63 & s2;
        } else {
          if (t3 + 3 >= a4) break;
          e4[t3++] = 240 | s2 >> 18, e4[t3++] = 128 | s2 >> 12 & 63, e4[t3++] = 128 | s2 >> 6 & 63, e4[t3++] = 128 | 63 & s2;
        }
      }
      return e4[t3] = 0, t3 - o4;
    };
    function gr(r, e4, t3) {
      var n3 = wr(r) + 1, o4 = new Array(n3), a4 = yr(r, o4, 0, o4.length);
      return o4.length = a4, o4;
    }
    var Er = () => {
      if (!vr.length) {
        var r = null;
        if ("undefined" != typeof window && "function" == typeof window.prompt && null !== (r = window.prompt("Input: ")) && (r += "\n"), !r) return null;
        vr = gr(r);
      }
      return vr.shift();
    }, _r = { ttys: [], init() {
    }, shutdown() {
    }, register(r, e4) {
      _r.ttys[r] = { input: [], output: [], ops: e4 }, jr.registerDevice(r, _r.stream_ops);
    }, stream_ops: { open(r) {
      var e4 = _r.ttys[r.node.rdev];
      if (!e4) throw new jr.ErrnoError(43);
      r.tty = e4, r.seekable = false;
    }, close(r) {
      r.tty.ops.fsync(r.tty);
    }, fsync(r) {
      r.tty.ops.fsync(r.tty);
    }, read(r, e4, t3, n3, o4) {
      if (!r.tty || !r.tty.ops.get_char) throw new jr.ErrnoError(60);
      for (var a4 = 0, i3 = 0; i3 < n3; i3++) {
        var s2;
        try {
          s2 = r.tty.ops.get_char(r.tty);
        } catch (l2) {
          throw new jr.ErrnoError(29);
        }
        if (void 0 === s2 && 0 === a4) throw new jr.ErrnoError(6);
        if (null == s2) break;
        a4++, e4[t3 + i3] = s2;
      }
      return a4 && (r.node.timestamp = Date.now()), a4;
    }, write(r, e4, t3, n3, o4) {
      if (!r.tty || !r.tty.ops.put_char) throw new jr.ErrnoError(60);
      try {
        for (var a4 = 0; a4 < n3; a4++) r.tty.ops.put_char(r.tty, e4[t3 + a4]);
      } catch (i3) {
        throw new jr.ErrnoError(29);
      }
      return n3 && (r.node.timestamp = Date.now()), a4;
    } }, default_tty_ops: { get_char: (r) => Er(), put_char(r, e4) {
      null === e4 || 10 === e4 ? (m(pr(r.output)), r.output = []) : 0 != e4 && r.output.push(e4);
    }, fsync(r) {
      r.output && r.output.length > 0 && (m(pr(r.output)), r.output = []);
    }, ioctl_tcgets: (r) => ({ c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }), ioctl_tcsets: (r, e4, t3) => 0, ioctl_tiocgwinsz: (r) => [24, 80] }, default_tty1_ops: { put_char(r, e4) {
      null === e4 || 10 === e4 ? (p(pr(r.output)), r.output = []) : 0 != e4 && r.output.push(e4);
    }, fsync(r) {
      r.output && r.output.length > 0 && (p(pr(r.output)), r.output = []);
    } } }, br = (r, e4) => Math.ceil(r / e4) * e4, kr = (r) => {
      L();
    }, Fr = { ops_table: null, mount: (r) => Fr.createNode(null, "/", 16895, 0), createNode(r, e4, t3, n3) {
      if (jr.isBlkdev(t3) || jr.isFIFO(t3)) throw new jr.ErrnoError(63);
      Fr.ops_table || (Fr.ops_table = { dir: { node: { getattr: Fr.node_ops.getattr, setattr: Fr.node_ops.setattr, lookup: Fr.node_ops.lookup, mknod: Fr.node_ops.mknod, rename: Fr.node_ops.rename, unlink: Fr.node_ops.unlink, rmdir: Fr.node_ops.rmdir, readdir: Fr.node_ops.readdir, symlink: Fr.node_ops.symlink }, stream: { llseek: Fr.stream_ops.llseek } }, file: { node: { getattr: Fr.node_ops.getattr, setattr: Fr.node_ops.setattr }, stream: { llseek: Fr.stream_ops.llseek, read: Fr.stream_ops.read, write: Fr.stream_ops.write, allocate: Fr.stream_ops.allocate, mmap: Fr.stream_ops.mmap, msync: Fr.stream_ops.msync } }, link: { node: { getattr: Fr.node_ops.getattr, setattr: Fr.node_ops.setattr, readlink: Fr.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: Fr.node_ops.getattr, setattr: Fr.node_ops.setattr }, stream: jr.chrdev_stream_ops } });
      var o4 = jr.createNode(r, e4, t3, n3);
      return jr.isDir(o4.mode) ? (o4.node_ops = Fr.ops_table.dir.node, o4.stream_ops = Fr.ops_table.dir.stream, o4.contents = {}) : jr.isFile(o4.mode) ? (o4.node_ops = Fr.ops_table.file.node, o4.stream_ops = Fr.ops_table.file.stream, o4.usedBytes = 0, o4.contents = null) : jr.isLink(o4.mode) ? (o4.node_ops = Fr.ops_table.link.node, o4.stream_ops = Fr.ops_table.link.stream) : jr.isChrdev(o4.mode) && (o4.node_ops = Fr.ops_table.chrdev.node, o4.stream_ops = Fr.ops_table.chrdev.stream), o4.timestamp = Date.now(), r && (r.contents[e4] = o4, r.timestamp = o4.timestamp), o4;
    }, getFileDataAsTypedArray: (r) => r.contents ? r.contents.subarray ? r.contents.subarray(0, r.usedBytes) : new Uint8Array(r.contents) : new Uint8Array(0), expandFileStorage(r, e4) {
      var t3 = r.contents ? r.contents.length : 0;
      if (!(t3 >= e4)) {
        var n3 = 1048576;
        e4 = Math.max(e4, t3 * (t3 < n3 ? 2 : 1.125) >>> 0), 0 != t3 && (e4 = Math.max(e4, 256));
        var o4 = r.contents;
        r.contents = new Uint8Array(e4), r.usedBytes > 0 && r.contents.set(o4.subarray(0, r.usedBytes), 0);
      }
    }, resizeFileStorage(r, e4) {
      if (r.usedBytes != e4) if (0 == e4) r.contents = null, r.usedBytes = 0;
      else {
        var t3 = r.contents;
        r.contents = new Uint8Array(e4), t3 && r.contents.set(t3.subarray(0, Math.min(e4, r.usedBytes))), r.usedBytes = e4;
      }
    }, node_ops: { getattr(r) {
      var e4 = {};
      return e4.dev = jr.isChrdev(r.mode) ? r.id : 1, e4.ino = r.id, e4.mode = r.mode, e4.nlink = 1, e4.uid = 0, e4.gid = 0, e4.rdev = r.rdev, jr.isDir(r.mode) ? e4.size = 4096 : jr.isFile(r.mode) ? e4.size = r.usedBytes : jr.isLink(r.mode) ? e4.size = r.link.length : e4.size = 0, e4.atime = new Date(r.timestamp), e4.mtime = new Date(r.timestamp), e4.ctime = new Date(r.timestamp), e4.blksize = 4096, e4.blocks = Math.ceil(e4.size / e4.blksize), e4;
    }, setattr(r, e4) {
      void 0 !== e4.mode && (r.mode = e4.mode), void 0 !== e4.timestamp && (r.timestamp = e4.timestamp), void 0 !== e4.size && Fr.resizeFileStorage(r, e4.size);
    }, lookup(r, e4) {
      throw Fr.doesNotExistError;
    }, mknod: (r, e4, t3, n3) => Fr.createNode(r, e4, t3, n3), rename(r, e4, t3) {
      if (jr.isDir(r.mode)) {
        var n3;
        try {
          n3 = jr.lookupNode(e4, t3);
        } catch (a4) {
        }
        if (n3) for (var o4 in n3.contents) throw new jr.ErrnoError(55);
      }
      delete r.parent.contents[r.name], r.parent.timestamp = Date.now(), r.name = t3, e4.contents[t3] = r, e4.timestamp = r.parent.timestamp;
    }, unlink(r, e4) {
      delete r.contents[e4], r.timestamp = Date.now();
    }, rmdir(r, e4) {
      var t3 = jr.lookupNode(r, e4);
      for (var n3 in t3.contents) throw new jr.ErrnoError(55);
      delete r.contents[e4], r.timestamp = Date.now();
    }, readdir(r) {
      var e4 = [".", ".."];
      for (var t3 of Object.keys(r.contents)) e4.push(t3);
      return e4;
    }, symlink(r, e4, t3) {
      var n3 = Fr.createNode(r, e4, 41471, 0);
      return n3.link = t3, n3;
    }, readlink(r) {
      if (!jr.isLink(r.mode)) throw new jr.ErrnoError(28);
      return r.link;
    } }, stream_ops: { read(r, e4, t3, n3, o4) {
      var a4 = r.node.contents;
      if (o4 >= r.node.usedBytes) return 0;
      var i3 = Math.min(r.node.usedBytes - o4, n3);
      if (i3 > 8 && a4.subarray) e4.set(a4.subarray(o4, o4 + i3), t3);
      else for (var s2 = 0; s2 < i3; s2++) e4[t3 + s2] = a4[o4 + s2];
      return i3;
    }, write(r, e4, t3, n3, o4, a4) {
      if (e4.buffer === w.buffer && (a4 = false), !n3) return 0;
      var i3 = r.node;
      if (i3.timestamp = Date.now(), e4.subarray && (!i3.contents || i3.contents.subarray)) {
        if (a4) return i3.contents = e4.subarray(t3, t3 + n3), i3.usedBytes = n3, n3;
        if (0 === i3.usedBytes && 0 === o4) return i3.contents = e4.slice(t3, t3 + n3), i3.usedBytes = n3, n3;
        if (o4 + n3 <= i3.usedBytes) return i3.contents.set(e4.subarray(t3, t3 + n3), o4), n3;
      }
      if (Fr.expandFileStorage(i3, o4 + n3), i3.contents.subarray && e4.subarray) i3.contents.set(e4.subarray(t3, t3 + n3), o4);
      else for (var s2 = 0; s2 < n3; s2++) i3.contents[o4 + s2] = e4[t3 + s2];
      return i3.usedBytes = Math.max(i3.usedBytes, o4 + n3), n3;
    }, llseek(r, e4, t3) {
      var n3 = e4;
      if (1 === t3 ? n3 += r.position : 2 === t3 && jr.isFile(r.node.mode) && (n3 += r.node.usedBytes), n3 < 0) throw new jr.ErrnoError(28);
      return n3;
    }, allocate(r, e4, t3) {
      Fr.expandFileStorage(r.node, e4 + t3), r.node.usedBytes = Math.max(r.node.usedBytes, e4 + t3);
    }, mmap(r, e4, t3, n3, o4) {
      if (!jr.isFile(r.node.mode)) throw new jr.ErrnoError(43);
      var a4, i3, s2 = r.node.contents;
      if (2 & o4 || !s2 || s2.buffer !== w.buffer) {
        if (i3 = true, !(a4 = kr())) throw new jr.ErrnoError(48);
        s2 && ((t3 > 0 || t3 + e4 < s2.length) && (s2 = s2.subarray ? s2.subarray(t3, t3 + e4) : Array.prototype.slice.call(s2, t3, t3 + e4)), w.set(s2, a4));
      } else i3 = false, a4 = s2.byteOffset;
      return { ptr: a4, allocated: i3 };
    }, msync: (r, e4, t3, n3, o4) => (Fr.stream_ops.write(r, e4, 0, n3, t3, false), 0) } }, Pr = (r, e4, t3, n3) => {
      var o4 = O(`al ${r}`);
      a3(r).then((r2) => {
        e4(new Uint8Array(r2)), o4 && B();
      }, (e5) => {
        if (!t3) throw `Loading data file "${r}" failed.`;
        t3();
      }), o4 && U();
    }, Ar = (r, e4, t3, n3, o4, a4) => {
      jr.createDataFile(r, e4, t3, n3, o4, a4);
    }, Sr = s.preloadPlugins || [], Dr = (r, e4, t3, n3) => {
      "undefined" != typeof Browser && Browser.init();
      var o4 = false;
      return Sr.forEach((a4) => {
        o4 || a4.canHandle(e4) && (a4.handle(r, e4, t3, n3), o4 = true);
      }), o4;
    }, $r = (r, e4, t3, n3, o4, a4, i3, s2, l2, u2) => {
      var d2 = e4 ? hr.resolve(dr.join2(r, e4)) : r;
      function c2(t4) {
        function c3(t5) {
          u2 == null ? void 0 : u2(), s2 || Ar(r, e4, t5, n3, o4, l2), a4 == null ? void 0 : a4(), B();
        }
        Dr(t4, d2, c3, () => {
          i3 == null ? void 0 : i3(), B();
        }) || c3(t4);
      }
      U(), "string" == typeof t3 ? Pr(t3, c2, i3) : c2(t3);
    }, Cr = (r) => {
      var e4 = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[r];
      if (void 0 === e4) throw new Error(`Unknown file open mode: ${r}`);
      return e4;
    }, Tr = (r, e4) => {
      var t3 = 0;
      return r && (t3 |= 365), e4 && (t3 |= 146), t3;
    }, jr = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: class {
      constructor(r) {
        __publicField(this, "name", "ErrnoError");
        this.errno = r;
      }
    }, filesystems: null, syncFSRequests: 0, readFiles: {}, FSStream: class {
      constructor() {
        __publicField(this, "shared", {});
      }
      get object() {
        return this.node;
      }
      set object(r) {
        this.node = r;
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
      set flags(r) {
        this.shared.flags = r;
      }
      get position() {
        return this.shared.position;
      }
      set position(r) {
        this.shared.position = r;
      }
    }, FSNode: class {
      constructor(r, e4, t3, n3) {
        __publicField(this, "node_ops", {});
        __publicField(this, "stream_ops", {});
        __publicField(this, "readMode", 365);
        __publicField(this, "writeMode", 146);
        __publicField(this, "mounted", null);
        r || (r = this), this.parent = r, this.mount = r.mount, this.id = jr.nextInode++, this.name = e4, this.mode = t3, this.rdev = n3;
      }
      get read() {
        return (this.mode & this.readMode) === this.readMode;
      }
      set read(r) {
        r ? this.mode |= this.readMode : this.mode &= ~this.readMode;
      }
      get write() {
        return (this.mode & this.writeMode) === this.writeMode;
      }
      set write(r) {
        r ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
      }
      get isFolder() {
        return jr.isDir(this.mode);
      }
      get isDevice() {
        return jr.isChrdev(this.mode);
      }
    }, lookupPath(r, e4 = {}) {
      if (!(r = hr.resolve(r))) return { path: "", node: null };
      var t3 = { follow_mount: true, recurse_count: 0 };
      if ((e4 = Object.assign(t3, e4)).recurse_count > 8) throw new jr.ErrnoError(32);
      for (var n3 = r.split("/").filter((r2) => !!r2), o4 = jr.root, a4 = "/", i3 = 0; i3 < n3.length; i3++) {
        var s2 = i3 === n3.length - 1;
        if (s2 && e4.parent) break;
        if (o4 = jr.lookupNode(o4, n3[i3]), a4 = dr.join2(a4, n3[i3]), jr.isMountpoint(o4) && (!s2 || s2 && e4.follow_mount) && (o4 = o4.mounted.root), !s2 || e4.follow) for (var l2 = 0; jr.isLink(o4.mode); ) {
          var u2 = jr.readlink(a4);
          if (a4 = hr.resolve(dr.dirname(a4), u2), o4 = jr.lookupPath(a4, { recurse_count: e4.recurse_count + 1 }).node, l2++ > 40) throw new jr.ErrnoError(32);
        }
      }
      return { path: a4, node: o4 };
    }, getPath(r) {
      for (var e4; ; ) {
        if (jr.isRoot(r)) {
          var t3 = r.mount.mountpoint;
          return e4 ? "/" !== t3[t3.length - 1] ? `${t3}/${e4}` : t3 + e4 : t3;
        }
        e4 = e4 ? `${r.name}/${e4}` : r.name, r = r.parent;
      }
    }, hashName(r, e4) {
      for (var t3 = 0, n3 = 0; n3 < e4.length; n3++) t3 = (t3 << 5) - t3 + e4.charCodeAt(n3) | 0;
      return (r + t3 >>> 0) % jr.nameTable.length;
    }, hashAddNode(r) {
      var e4 = jr.hashName(r.parent.id, r.name);
      r.name_next = jr.nameTable[e4], jr.nameTable[e4] = r;
    }, hashRemoveNode(r) {
      var e4 = jr.hashName(r.parent.id, r.name);
      if (jr.nameTable[e4] === r) jr.nameTable[e4] = r.name_next;
      else for (var t3 = jr.nameTable[e4]; t3; ) {
        if (t3.name_next === r) {
          t3.name_next = r.name_next;
          break;
        }
        t3 = t3.name_next;
      }
    }, lookupNode(r, e4) {
      var t3 = jr.mayLookup(r);
      if (t3) throw new jr.ErrnoError(t3);
      for (var n3 = jr.hashName(r.id, e4), o4 = jr.nameTable[n3]; o4; o4 = o4.name_next) {
        var a4 = o4.name;
        if (o4.parent.id === r.id && a4 === e4) return o4;
      }
      return jr.lookup(r, e4);
    }, createNode(r, e4, t3, n3) {
      var o4 = new jr.FSNode(r, e4, t3, n3);
      return jr.hashAddNode(o4), o4;
    }, destroyNode(r) {
      jr.hashRemoveNode(r);
    }, isRoot: (r) => r === r.parent, isMountpoint: (r) => !!r.mounted, isFile: (r) => 32768 == (61440 & r), isDir: (r) => 16384 == (61440 & r), isLink: (r) => 40960 == (61440 & r), isChrdev: (r) => 8192 == (61440 & r), isBlkdev: (r) => 24576 == (61440 & r), isFIFO: (r) => 4096 == (61440 & r), isSocket: (r) => !(49152 & ~r), flagsToPermissionString(r) {
      var e4 = ["r", "w", "rw"][3 & r];
      return 512 & r && (e4 += "w"), e4;
    }, nodePermissions: (r, e4) => jr.ignorePermissions || (!e4.includes("r") || 292 & r.mode) && (!e4.includes("w") || 146 & r.mode) && (!e4.includes("x") || 73 & r.mode) ? 0 : 2, mayLookup(r) {
      if (!jr.isDir(r.mode)) return 54;
      var e4 = jr.nodePermissions(r, "x");
      return e4 || (r.node_ops.lookup ? 0 : 2);
    }, mayCreate(r, e4) {
      try {
        return jr.lookupNode(r, e4), 20;
      } catch (t3) {
      }
      return jr.nodePermissions(r, "wx");
    }, mayDelete(r, e4, t3) {
      var n3;
      try {
        n3 = jr.lookupNode(r, e4);
      } catch (a4) {
        return a4.errno;
      }
      var o4 = jr.nodePermissions(r, "wx");
      if (o4) return o4;
      if (t3) {
        if (!jr.isDir(n3.mode)) return 54;
        if (jr.isRoot(n3) || jr.getPath(n3) === jr.cwd()) return 10;
      } else if (jr.isDir(n3.mode)) return 31;
      return 0;
    }, mayOpen: (r, e4) => r ? jr.isLink(r.mode) ? 32 : jr.isDir(r.mode) && ("r" !== jr.flagsToPermissionString(e4) || 512 & e4) ? 31 : jr.nodePermissions(r, jr.flagsToPermissionString(e4)) : 44, MAX_OPEN_FDS: 4096, nextfd() {
      for (var r = 0; r <= jr.MAX_OPEN_FDS; r++) if (!jr.streams[r]) return r;
      throw new jr.ErrnoError(33);
    }, getStreamChecked(r) {
      var e4 = jr.getStream(r);
      if (!e4) throw new jr.ErrnoError(8);
      return e4;
    }, getStream: (r) => jr.streams[r], createStream: (r, e4 = -1) => (r = Object.assign(new jr.FSStream(), r), -1 == e4 && (e4 = jr.nextfd()), r.fd = e4, jr.streams[e4] = r, r), closeStream(r) {
      jr.streams[r] = null;
    }, dupStream(r, e4 = -1) {
      var _a2, _b;
      var t3 = jr.createStream(r, e4);
      return (_b = (_a2 = t3.stream_ops) == null ? void 0 : _a2.dup) == null ? void 0 : _b.call(_a2, t3), t3;
    }, chrdev_stream_ops: { open(r) {
      var _a2, _b;
      var e4 = jr.getDevice(r.node.rdev);
      r.stream_ops = e4.stream_ops, (_b = (_a2 = r.stream_ops).open) == null ? void 0 : _b.call(_a2, r);
    }, llseek() {
      throw new jr.ErrnoError(70);
    } }, major: (r) => r >> 8, minor: (r) => 255 & r, makedev: (r, e4) => r << 8 | e4, registerDevice(r, e4) {
      jr.devices[r] = { stream_ops: e4 };
    }, getDevice: (r) => jr.devices[r], getMounts(r) {
      for (var e4 = [], t3 = [r]; t3.length; ) {
        var n3 = t3.pop();
        e4.push(n3), t3.push(...n3.mounts);
      }
      return e4;
    }, syncfs(r, e4) {
      "function" == typeof r && (e4 = r, r = false), jr.syncFSRequests++, jr.syncFSRequests > 1 && p(`warning: ${jr.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
      var t3 = jr.getMounts(jr.root.mount), n3 = 0;
      function o4(r2) {
        return jr.syncFSRequests--, e4(r2);
      }
      function a4(r2) {
        if (r2) return a4.errored ? void 0 : (a4.errored = true, o4(r2));
        ++n3 >= t3.length && o4(null);
      }
      t3.forEach((e5) => {
        if (!e5.type.syncfs) return a4(null);
        e5.type.syncfs(e5, r, a4);
      });
    }, mount(r, e4, t3) {
      var n3, o4 = "/" === t3, a4 = !t3;
      if (o4 && jr.root) throw new jr.ErrnoError(10);
      if (!o4 && !a4) {
        var i3 = jr.lookupPath(t3, { follow_mount: false });
        if (t3 = i3.path, n3 = i3.node, jr.isMountpoint(n3)) throw new jr.ErrnoError(10);
        if (!jr.isDir(n3.mode)) throw new jr.ErrnoError(54);
      }
      var s2 = { type: r, opts: e4, mountpoint: t3, mounts: [] }, l2 = r.mount(s2);
      return l2.mount = s2, s2.root = l2, o4 ? jr.root = l2 : n3 && (n3.mounted = s2, n3.mount && n3.mount.mounts.push(s2)), l2;
    }, unmount(r) {
      var e4 = jr.lookupPath(r, { follow_mount: false });
      if (!jr.isMountpoint(e4.node)) throw new jr.ErrnoError(28);
      var t3 = e4.node, n3 = t3.mounted, o4 = jr.getMounts(n3);
      Object.keys(jr.nameTable).forEach((r2) => {
        for (var e5 = jr.nameTable[r2]; e5; ) {
          var t4 = e5.name_next;
          o4.includes(e5.mount) && jr.destroyNode(e5), e5 = t4;
        }
      }), t3.mounted = null;
      var a4 = t3.mount.mounts.indexOf(n3);
      t3.mount.mounts.splice(a4, 1);
    }, lookup: (r, e4) => r.node_ops.lookup(r, e4), mknod(r, e4, t3) {
      var n3 = jr.lookupPath(r, { parent: true }).node, o4 = dr.basename(r);
      if (!o4 || "." === o4 || ".." === o4) throw new jr.ErrnoError(28);
      var a4 = jr.mayCreate(n3, o4);
      if (a4) throw new jr.ErrnoError(a4);
      if (!n3.node_ops.mknod) throw new jr.ErrnoError(63);
      return n3.node_ops.mknod(n3, o4, e4, t3);
    }, statfs(r) {
      var e4 = { bsize: 4096, frsize: 4096, blocks: 1e6, bfree: 5e5, bavail: 5e5, files: jr.nextInode, ffree: jr.nextInode - 1, fsid: 42, flags: 2, namelen: 255 }, t3 = jr.lookupPath(r, { follow: true }).node;
      return (t3 == null ? void 0 : t3.node_ops.statfs) && Object.assign(e4, t3.node_ops.statfs(t3.mount.opts.root)), e4;
    }, create: (r, e4 = 438) => (e4 &= 4095, e4 |= 32768, jr.mknod(r, e4, 0)), mkdir: (r, e4 = 511) => (e4 &= 1023, e4 |= 16384, jr.mknod(r, e4, 0)), mkdirTree(r, e4) {
      for (var t3 = r.split("/"), n3 = "", o4 = 0; o4 < t3.length; ++o4) if (t3[o4]) {
        n3 += "/" + t3[o4];
        try {
          jr.mkdir(n3, e4);
        } catch (a4) {
          if (20 != a4.errno) throw a4;
        }
      }
    }, mkdev: (r, e4, t3) => (void 0 === t3 && (t3 = e4, e4 = 438), e4 |= 8192, jr.mknod(r, e4, t3)), symlink(r, e4) {
      if (!hr.resolve(r)) throw new jr.ErrnoError(44);
      var t3 = jr.lookupPath(e4, { parent: true }).node;
      if (!t3) throw new jr.ErrnoError(44);
      var n3 = dr.basename(e4), o4 = jr.mayCreate(t3, n3);
      if (o4) throw new jr.ErrnoError(o4);
      if (!t3.node_ops.symlink) throw new jr.ErrnoError(63);
      return t3.node_ops.symlink(t3, n3, r);
    }, rename(r, e4) {
      var t3, n3, o4 = dr.dirname(r), a4 = dr.dirname(e4), i3 = dr.basename(r), s2 = dr.basename(e4);
      if (t3 = jr.lookupPath(r, { parent: true }).node, n3 = jr.lookupPath(e4, { parent: true }).node, !t3 || !n3) throw new jr.ErrnoError(44);
      if (t3.mount !== n3.mount) throw new jr.ErrnoError(75);
      var l2, u2 = jr.lookupNode(t3, i3), d2 = hr.relative(r, a4);
      if ("." !== d2.charAt(0)) throw new jr.ErrnoError(28);
      if ("." !== (d2 = hr.relative(e4, o4)).charAt(0)) throw new jr.ErrnoError(55);
      try {
        l2 = jr.lookupNode(n3, s2);
      } catch (h2) {
      }
      if (u2 !== l2) {
        var c2 = jr.isDir(u2.mode), f2 = jr.mayDelete(t3, i3, c2);
        if (f2) throw new jr.ErrnoError(f2);
        if (f2 = l2 ? jr.mayDelete(n3, s2, c2) : jr.mayCreate(n3, s2)) throw new jr.ErrnoError(f2);
        if (!t3.node_ops.rename) throw new jr.ErrnoError(63);
        if (jr.isMountpoint(u2) || l2 && jr.isMountpoint(l2)) throw new jr.ErrnoError(10);
        if (n3 !== t3 && (f2 = jr.nodePermissions(t3, "w"))) throw new jr.ErrnoError(f2);
        jr.hashRemoveNode(u2);
        try {
          t3.node_ops.rename(u2, n3, s2), u2.parent = n3;
        } catch (h2) {
          throw h2;
        } finally {
          jr.hashAddNode(u2);
        }
      }
    }, rmdir(r) {
      var e4 = jr.lookupPath(r, { parent: true }).node, t3 = dr.basename(r), n3 = jr.lookupNode(e4, t3), o4 = jr.mayDelete(e4, t3, true);
      if (o4) throw new jr.ErrnoError(o4);
      if (!e4.node_ops.rmdir) throw new jr.ErrnoError(63);
      if (jr.isMountpoint(n3)) throw new jr.ErrnoError(10);
      e4.node_ops.rmdir(e4, t3), jr.destroyNode(n3);
    }, readdir(r) {
      var e4 = jr.lookupPath(r, { follow: true }).node;
      if (!e4.node_ops.readdir) throw new jr.ErrnoError(54);
      return e4.node_ops.readdir(e4);
    }, unlink(r) {
      var e4 = jr.lookupPath(r, { parent: true }).node;
      if (!e4) throw new jr.ErrnoError(44);
      var t3 = dr.basename(r), n3 = jr.lookupNode(e4, t3), o4 = jr.mayDelete(e4, t3, false);
      if (o4) throw new jr.ErrnoError(o4);
      if (!e4.node_ops.unlink) throw new jr.ErrnoError(63);
      if (jr.isMountpoint(n3)) throw new jr.ErrnoError(10);
      e4.node_ops.unlink(e4, t3), jr.destroyNode(n3);
    }, readlink(r) {
      var e4 = jr.lookupPath(r).node;
      if (!e4) throw new jr.ErrnoError(44);
      if (!e4.node_ops.readlink) throw new jr.ErrnoError(28);
      return e4.node_ops.readlink(e4);
    }, stat(r, e4) {
      var t3 = jr.lookupPath(r, { follow: !e4 }).node;
      if (!t3) throw new jr.ErrnoError(44);
      if (!t3.node_ops.getattr) throw new jr.ErrnoError(63);
      return t3.node_ops.getattr(t3);
    }, lstat: (r) => jr.stat(r, true), chmod(r, e4, t3) {
      var n3;
      if (!(n3 = "string" == typeof r ? jr.lookupPath(r, { follow: !t3 }).node : r).node_ops.setattr) throw new jr.ErrnoError(63);
      n3.node_ops.setattr(n3, { mode: 4095 & e4 | -4096 & n3.mode, timestamp: Date.now() });
    }, lchmod(r, e4) {
      jr.chmod(r, e4, true);
    }, fchmod(r, e4) {
      var t3 = jr.getStreamChecked(r);
      jr.chmod(t3.node, e4);
    }, chown(r, e4, t3, n3) {
      var o4;
      if (!(o4 = "string" == typeof r ? jr.lookupPath(r, { follow: !n3 }).node : r).node_ops.setattr) throw new jr.ErrnoError(63);
      o4.node_ops.setattr(o4, { timestamp: Date.now() });
    }, lchown(r, e4, t3) {
      jr.chown(r, e4, t3, true);
    }, fchown(r, e4, t3) {
      var n3 = jr.getStreamChecked(r);
      jr.chown(n3.node, e4, t3);
    }, truncate(r, e4) {
      if (e4 < 0) throw new jr.ErrnoError(28);
      var t3;
      if (!(t3 = "string" == typeof r ? jr.lookupPath(r, { follow: true }).node : r).node_ops.setattr) throw new jr.ErrnoError(63);
      if (jr.isDir(t3.mode)) throw new jr.ErrnoError(31);
      if (!jr.isFile(t3.mode)) throw new jr.ErrnoError(28);
      var n3 = jr.nodePermissions(t3, "w");
      if (n3) throw new jr.ErrnoError(n3);
      t3.node_ops.setattr(t3, { size: e4, timestamp: Date.now() });
    }, ftruncate(r, e4) {
      var t3 = jr.getStreamChecked(r);
      if (!(2097155 & t3.flags)) throw new jr.ErrnoError(28);
      jr.truncate(t3.node, e4);
    }, utime(r, e4, t3) {
      var n3 = jr.lookupPath(r, { follow: true }).node;
      n3.node_ops.setattr(n3, { timestamp: Math.max(e4, t3) });
    }, open(r, e4, t3 = 438) {
      if ("" === r) throw new jr.ErrnoError(44);
      var n3;
      if (t3 = 64 & (e4 = "string" == typeof e4 ? Cr(e4) : e4) ? 4095 & t3 | 32768 : 0, "object" == typeof r) n3 = r;
      else {
        r = dr.normalize(r);
        try {
          n3 = jr.lookupPath(r, { follow: !(131072 & e4) }).node;
        } catch (l2) {
        }
      }
      var o4 = false;
      if (64 & e4) if (n3) {
        if (128 & e4) throw new jr.ErrnoError(20);
      } else n3 = jr.mknod(r, t3, 0), o4 = true;
      if (!n3) throw new jr.ErrnoError(44);
      if (jr.isChrdev(n3.mode) && (e4 &= -513), 65536 & e4 && !jr.isDir(n3.mode)) throw new jr.ErrnoError(54);
      if (!o4) {
        var a4 = jr.mayOpen(n3, e4);
        if (a4) throw new jr.ErrnoError(a4);
      }
      512 & e4 && !o4 && jr.truncate(n3, 0), e4 &= -131713;
      var i3 = jr.createStream({ node: n3, path: jr.getPath(n3), flags: e4, seekable: true, position: 0, stream_ops: n3.stream_ops, ungotten: [], error: false });
      return i3.stream_ops.open && i3.stream_ops.open(i3), !s.logReadFiles || 1 & e4 || r in jr.readFiles || (jr.readFiles[r] = 1), i3;
    }, close(r) {
      if (jr.isClosed(r)) throw new jr.ErrnoError(8);
      r.getdents && (r.getdents = null);
      try {
        r.stream_ops.close && r.stream_ops.close(r);
      } catch (e4) {
        throw e4;
      } finally {
        jr.closeStream(r.fd);
      }
      r.fd = null;
    }, isClosed: (r) => null === r.fd, llseek(r, e4, t3) {
      if (jr.isClosed(r)) throw new jr.ErrnoError(8);
      if (!r.seekable || !r.stream_ops.llseek) throw new jr.ErrnoError(70);
      if (0 != t3 && 1 != t3 && 2 != t3) throw new jr.ErrnoError(28);
      return r.position = r.stream_ops.llseek(r, e4, t3), r.ungotten = [], r.position;
    }, read(r, e4, t3, n3, o4) {
      if (n3 < 0 || o4 < 0) throw new jr.ErrnoError(28);
      if (jr.isClosed(r)) throw new jr.ErrnoError(8);
      if (1 == (2097155 & r.flags)) throw new jr.ErrnoError(8);
      if (jr.isDir(r.node.mode)) throw new jr.ErrnoError(31);
      if (!r.stream_ops.read) throw new jr.ErrnoError(28);
      var a4 = void 0 !== o4;
      if (a4) {
        if (!r.seekable) throw new jr.ErrnoError(70);
      } else o4 = r.position;
      var i3 = r.stream_ops.read(r, e4, t3, n3, o4);
      return a4 || (r.position += i3), i3;
    }, write(r, e4, t3, n3, o4, a4) {
      if (n3 < 0 || o4 < 0) throw new jr.ErrnoError(28);
      if (jr.isClosed(r)) throw new jr.ErrnoError(8);
      if (!(2097155 & r.flags)) throw new jr.ErrnoError(8);
      if (jr.isDir(r.node.mode)) throw new jr.ErrnoError(31);
      if (!r.stream_ops.write) throw new jr.ErrnoError(28);
      r.seekable && 1024 & r.flags && jr.llseek(r, 0, 2);
      var i3 = void 0 !== o4;
      if (i3) {
        if (!r.seekable) throw new jr.ErrnoError(70);
      } else o4 = r.position;
      var s2 = r.stream_ops.write(r, e4, t3, n3, o4, a4);
      return i3 || (r.position += s2), s2;
    }, allocate(r, e4, t3) {
      if (jr.isClosed(r)) throw new jr.ErrnoError(8);
      if (e4 < 0 || t3 <= 0) throw new jr.ErrnoError(28);
      if (!(2097155 & r.flags)) throw new jr.ErrnoError(8);
      if (!jr.isFile(r.node.mode) && !jr.isDir(r.node.mode)) throw new jr.ErrnoError(43);
      if (!r.stream_ops.allocate) throw new jr.ErrnoError(138);
      r.stream_ops.allocate(r, e4, t3);
    }, mmap(r, e4, t3, n3, o4) {
      if (2 & n3 && !(2 & o4) && 2 != (2097155 & r.flags)) throw new jr.ErrnoError(2);
      if (1 == (2097155 & r.flags)) throw new jr.ErrnoError(2);
      if (!r.stream_ops.mmap) throw new jr.ErrnoError(43);
      if (!e4) throw new jr.ErrnoError(28);
      return r.stream_ops.mmap(r, e4, t3, n3, o4);
    }, msync: (r, e4, t3, n3, o4) => r.stream_ops.msync ? r.stream_ops.msync(r, e4, t3, n3, o4) : 0, ioctl(r, e4, t3) {
      if (!r.stream_ops.ioctl) throw new jr.ErrnoError(59);
      return r.stream_ops.ioctl(r, e4, t3);
    }, readFile(r, e4 = {}) {
      if (e4.flags = e4.flags || 0, e4.encoding = e4.encoding || "binary", "utf8" !== e4.encoding && "binary" !== e4.encoding) throw new Error(`Invalid encoding type "${e4.encoding}"`);
      var t3, n3 = jr.open(r, e4.flags), o4 = jr.stat(r).size, a4 = new Uint8Array(o4);
      return jr.read(n3, a4, 0, o4, 0), "utf8" === e4.encoding ? t3 = pr(a4) : "binary" === e4.encoding && (t3 = a4), jr.close(n3), t3;
    }, writeFile(r, e4, t3 = {}) {
      t3.flags = t3.flags || 577;
      var n3 = jr.open(r, t3.flags, t3.mode);
      if ("string" == typeof e4) {
        var o4 = new Uint8Array(wr(e4) + 1), a4 = yr(e4, o4, 0, o4.length);
        jr.write(n3, o4, 0, a4, void 0, t3.canOwn);
      } else {
        if (!ArrayBuffer.isView(e4)) throw new Error("Unsupported data type");
        jr.write(n3, e4, 0, e4.byteLength, void 0, t3.canOwn);
      }
      jr.close(n3);
    }, cwd: () => jr.currentPath, chdir(r) {
      var e4 = jr.lookupPath(r, { follow: true });
      if (null === e4.node) throw new jr.ErrnoError(44);
      if (!jr.isDir(e4.node.mode)) throw new jr.ErrnoError(54);
      var t3 = jr.nodePermissions(e4.node, "x");
      if (t3) throw new jr.ErrnoError(t3);
      jr.currentPath = e4.path;
    }, createDefaultDirectories() {
      jr.mkdir("/tmp"), jr.mkdir("/home"), jr.mkdir("/home/web_user");
    }, createDefaultDevices() {
      jr.mkdir("/dev"), jr.registerDevice(jr.makedev(1, 3), { read: () => 0, write: (r2, e5, t4, n3, o4) => n3, llseek: () => 0 }), jr.mkdev("/dev/null", jr.makedev(1, 3)), _r.register(jr.makedev(5, 0), _r.default_tty_ops), _r.register(jr.makedev(6, 0), _r.default_tty1_ops), jr.mkdev("/dev/tty", jr.makedev(5, 0)), jr.mkdev("/dev/tty1", jr.makedev(6, 0));
      var r = new Uint8Array(1024), e4 = 0, t3 = () => (0 === e4 && (e4 = fr(r).byteLength), r[--e4]);
      jr.createDevice("/dev", "random", t3), jr.createDevice("/dev", "urandom", t3), jr.mkdir("/dev/shm"), jr.mkdir("/dev/shm/tmp");
    }, createSpecialDirectories() {
      jr.mkdir("/proc");
      var r = jr.mkdir("/proc/self");
      jr.mkdir("/proc/self/fd"), jr.mount({ mount() {
        var e4 = jr.createNode(r, "fd", 16895, 73);
        return e4.node_ops = { lookup(r2, e5) {
          var t3 = +e5, n3 = jr.getStreamChecked(t3), o4 = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => n3.path } };
          return o4.parent = o4, o4;
        } }, e4;
      } }, {}, "/proc/self/fd");
    }, createStandardStreams(r, e4, t3) {
      r ? jr.createDevice("/dev", "stdin", r) : jr.symlink("/dev/tty", "/dev/stdin"), e4 ? jr.createDevice("/dev", "stdout", null, e4) : jr.symlink("/dev/tty", "/dev/stdout"), t3 ? jr.createDevice("/dev", "stderr", null, t3) : jr.symlink("/dev/tty1", "/dev/stderr"), jr.open("/dev/stdin", 0), jr.open("/dev/stdout", 1), jr.open("/dev/stderr", 1);
    }, staticInit() {
      jr.nameTable = new Array(4096), jr.mount(Fr, {}, "/"), jr.createDefaultDirectories(), jr.createDefaultDevices(), jr.createSpecialDirectories(), jr.filesystems = { MEMFS: Fr };
    }, init(r, e4, t3) {
      jr.initialized = true, r ?? (r = s.stdin), e4 ?? (e4 = s.stdout), t3 ?? (t3 = s.stderr), jr.createStandardStreams(r, e4, t3);
    }, quit() {
      jr.initialized = false;
      for (var r = 0; r < jr.streams.length; r++) {
        var e4 = jr.streams[r];
        e4 && jr.close(e4);
      }
    }, findObject(r, e4) {
      var t3 = jr.analyzePath(r, e4);
      return t3.exists ? t3.object : null;
    }, analyzePath(r, e4) {
      try {
        r = (n3 = jr.lookupPath(r, { follow: !e4 })).path;
      } catch (o4) {
      }
      var t3 = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
      try {
        var n3 = jr.lookupPath(r, { parent: true });
        t3.parentExists = true, t3.parentPath = n3.path, t3.parentObject = n3.node, t3.name = dr.basename(r), n3 = jr.lookupPath(r, { follow: !e4 }), t3.exists = true, t3.path = n3.path, t3.object = n3.node, t3.name = n3.node.name, t3.isRoot = "/" === n3.path;
      } catch (o4) {
        t3.error = o4.errno;
      }
      return t3;
    }, createPath(r, e4, t3, n3) {
      r = "string" == typeof r ? r : jr.getPath(r);
      for (var o4 = e4.split("/").reverse(); o4.length; ) {
        var a4 = o4.pop();
        if (a4) {
          var i3 = dr.join2(r, a4);
          try {
            jr.mkdir(i3);
          } catch (s2) {
          }
          r = i3;
        }
      }
      return i3;
    }, createFile(r, e4, t3, n3, o4) {
      var a4 = dr.join2("string" == typeof r ? r : jr.getPath(r), e4), i3 = Tr(n3, o4);
      return jr.create(a4, i3);
    }, createDataFile(r, e4, t3, n3, o4, a4) {
      var i3 = e4;
      r && (r = "string" == typeof r ? r : jr.getPath(r), i3 = e4 ? dr.join2(r, e4) : r);
      var s2 = Tr(n3, o4), l2 = jr.create(i3, s2);
      if (t3) {
        if ("string" == typeof t3) {
          for (var u2 = new Array(t3.length), d2 = 0, c2 = t3.length; d2 < c2; ++d2) u2[d2] = t3.charCodeAt(d2);
          t3 = u2;
        }
        jr.chmod(l2, 146 | s2);
        var f2 = jr.open(l2, 577);
        jr.write(f2, t3, 0, t3.length, 0, a4), jr.close(f2), jr.chmod(l2, s2);
      }
    }, createDevice(r, e4, t3, n3) {
      var _a2;
      var o4 = dr.join2("string" == typeof r ? r : jr.getPath(r), e4), a4 = Tr(!!t3, !!n3);
      (_a2 = jr.createDevice).major ?? (_a2.major = 64);
      var i3 = jr.makedev(jr.createDevice.major++, 0);
      return jr.registerDevice(i3, { open(r2) {
        r2.seekable = false;
      }, close(r2) {
        var _a3;
        ((_a3 = n3 == null ? void 0 : n3.buffer) == null ? void 0 : _a3.length) && n3(10);
      }, read(r2, e5, n4, o5, a5) {
        for (var i4 = 0, s2 = 0; s2 < o5; s2++) {
          var l2;
          try {
            l2 = t3();
          } catch (u2) {
            throw new jr.ErrnoError(29);
          }
          if (void 0 === l2 && 0 === i4) throw new jr.ErrnoError(6);
          if (null == l2) break;
          i4++, e5[n4 + s2] = l2;
        }
        return i4 && (r2.node.timestamp = Date.now()), i4;
      }, write(r2, e5, t4, o5, a5) {
        for (var i4 = 0; i4 < o5; i4++) try {
          n3(e5[t4 + i4]);
        } catch (s2) {
          throw new jr.ErrnoError(29);
        }
        return o5 && (r2.node.timestamp = Date.now()), i4;
      } }), jr.mkdev(o4, a4, i3);
    }, forceLoadFile(r) {
      if (r.isDevice || r.isFolder || r.link || r.contents) return true;
      if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      try {
        r.contents = i2(r.url), r.usedBytes = r.contents.length;
      } catch (e4) {
        throw new jr.ErrnoError(29);
      }
    }, createLazyFile(r, e4, t3, n3, o4) {
      if ("undefined" != typeof XMLHttpRequest) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
      var a4 = { isDevice: false, url: t3 }, i3 = jr.createFile(r, e4, a4, n3, o4);
      a4.contents ? i3.contents = a4.contents : a4.url && (i3.contents = null, i3.url = a4.url), Object.defineProperties(i3, { usedBytes: { get: function() {
        return this.contents.length;
      } } });
      var s2 = {};
      function l2(r2, e5, t4, n4, o5) {
        var a5 = r2.node.contents;
        if (o5 >= a5.length) return 0;
        var i4 = Math.min(a5.length - o5, n4);
        if (a5.slice) for (var s3 = 0; s3 < i4; s3++) e5[t4 + s3] = a5[o5 + s3];
        else for (s3 = 0; s3 < i4; s3++) e5[t4 + s3] = a5.get(o5 + s3);
        return i4;
      }
      return Object.keys(i3.stream_ops).forEach((r2) => {
        var e5 = i3.stream_ops[r2];
        s2[r2] = (...r3) => (jr.forceLoadFile(i3), e5(...r3));
      }), s2.read = (r2, e5, t4, n4, o5) => (jr.forceLoadFile(i3), l2(r2, e5, t4, n4, o5)), s2.mmap = (r2, e5, t4, n4, o5) => {
        jr.forceLoadFile(i3);
        var a5 = kr();
        if (!a5) throw new jr.ErrnoError(48);
        return l2(r2, w, a5, e5, t4), { ptr: a5, allocated: true };
      }, i3.stream_ops = s2, i3;
    } }, Mr = (r, e4) => r ? pr(y, r, e4) : "", xr = { DEFAULT_POLLMASK: 5, calculateAt(r, e4, t3) {
      if (dr.isAbs(e4)) return e4;
      var n3;
      if (n3 = -100 === r ? jr.cwd() : xr.getStreamFromFD(r).path, 0 == e4.length) {
        if (!t3) throw new jr.ErrnoError(44);
        return n3;
      }
      return dr.join2(n3, e4);
    }, doStat(r, e4, t3) {
      var n3 = r(e4);
      _[t3 >> 2] = n3.dev, _[t3 + 4 >> 2] = n3.mode, b[t3 + 8 >> 2] = n3.nlink, _[t3 + 12 >> 2] = n3.uid, _[t3 + 16 >> 2] = n3.gid, _[t3 + 20 >> 2] = n3.rdev, V = [n3.size >>> 0, (H = n3.size, +Math.abs(H) >= 1 ? H > 0 ? +Math.floor(H / 4294967296) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)], _[t3 + 24 >> 2] = V[0], _[t3 + 28 >> 2] = V[1], _[t3 + 32 >> 2] = 4096, _[t3 + 36 >> 2] = n3.blocks;
      var o4 = n3.atime.getTime(), a4 = n3.mtime.getTime(), i3 = n3.ctime.getTime();
      return V = [Math.floor(o4 / 1e3) >>> 0, (H = Math.floor(o4 / 1e3), +Math.abs(H) >= 1 ? H > 0 ? +Math.floor(H / 4294967296) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)], _[t3 + 40 >> 2] = V[0], _[t3 + 44 >> 2] = V[1], b[t3 + 48 >> 2] = o4 % 1e3 * 1e3 * 1e3, V = [Math.floor(a4 / 1e3) >>> 0, (H = Math.floor(a4 / 1e3), +Math.abs(H) >= 1 ? H > 0 ? +Math.floor(H / 4294967296) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)], _[t3 + 56 >> 2] = V[0], _[t3 + 60 >> 2] = V[1], b[t3 + 64 >> 2] = a4 % 1e3 * 1e3 * 1e3, V = [Math.floor(i3 / 1e3) >>> 0, (H = Math.floor(i3 / 1e3), +Math.abs(H) >= 1 ? H > 0 ? +Math.floor(H / 4294967296) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)], _[t3 + 72 >> 2] = V[0], _[t3 + 76 >> 2] = V[1], b[t3 + 80 >> 2] = i3 % 1e3 * 1e3 * 1e3, V = [n3.ino >>> 0, (H = n3.ino, +Math.abs(H) >= 1 ? H > 0 ? +Math.floor(H / 4294967296) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)], _[t3 + 88 >> 2] = V[0], _[t3 + 92 >> 2] = V[1], 0;
    }, doMsync(r, e4, t3, n3, o4) {
      if (!jr.isFile(e4.node.mode)) throw new jr.ErrnoError(43);
      if (2 & n3) return 0;
      var a4 = y.slice(r, r + t3);
      jr.msync(e4, a4, o4, t3, n3);
    }, getStreamFromFD: (r) => jr.getStreamChecked(r), varargs: void 0, getStr: (r) => Mr(r) };
    function Rr(r, e4, t3) {
      xr.varargs = t3;
      try {
        var n3 = xr.getStreamFromFD(r);
        switch (e4) {
          case 0:
            if ((o4 = lr()) < 0) return -28;
            for (; jr.streams[o4]; ) o4++;
            return jr.dupStream(n3, o4).fd;
          case 1:
          case 2:
          case 13:
          case 14:
            return 0;
          case 3:
            return n3.flags;
          case 4:
            var o4 = lr();
            return n3.flags |= o4, 0;
          case 12:
            return o4 = ur(), g[o4 + 0 >> 1] = 2, 0;
        }
        return -28;
      } catch (a4) {
        if (void 0 === jr || "ErrnoError" !== a4.name) throw a4;
        return -a4.errno;
      }
    }
    function Nr(r, e4, t3) {
      xr.varargs = t3;
      try {
        var n3 = xr.getStreamFromFD(r);
        switch (e4) {
          case 21509:
          case 21510:
          case 21511:
          case 21512:
          case 21524:
          case 21515:
            return n3.tty ? 0 : -59;
          case 21505:
            if (!n3.tty) return -59;
            if (n3.tty.ops.ioctl_tcgets) {
              var o4 = n3.tty.ops.ioctl_tcgets(n3), a4 = ur();
              _[a4 >> 2] = o4.c_iflag || 0, _[a4 + 4 >> 2] = o4.c_oflag || 0, _[a4 + 8 >> 2] = o4.c_cflag || 0, _[a4 + 12 >> 2] = o4.c_lflag || 0;
              for (var i3 = 0; i3 < 32; i3++) w[a4 + i3 + 17] = o4.c_cc[i3] || 0;
              return 0;
            }
            return 0;
          case 21506:
          case 21507:
          case 21508:
            if (!n3.tty) return -59;
            if (n3.tty.ops.ioctl_tcsets) {
              a4 = ur();
              var s2 = _[a4 >> 2], l2 = _[a4 + 4 >> 2], u2 = _[a4 + 8 >> 2], d2 = _[a4 + 12 >> 2], c2 = [];
              for (i3 = 0; i3 < 32; i3++) c2.push(w[a4 + i3 + 17]);
              return n3.tty.ops.ioctl_tcsets(n3.tty, e4, { c_iflag: s2, c_oflag: l2, c_cflag: u2, c_lflag: d2, c_cc: c2 });
            }
            return 0;
          case 21519:
            return n3.tty ? (a4 = ur(), _[a4 >> 2] = 0, 0) : -59;
          case 21520:
            return n3.tty ? -28 : -59;
          case 21531:
            return a4 = ur(), jr.ioctl(n3, e4, a4);
          case 21523:
            if (!n3.tty) return -59;
            if (n3.tty.ops.ioctl_tiocgwinsz) {
              var f2 = n3.tty.ops.ioctl_tiocgwinsz(n3.tty);
              a4 = ur(), g[a4 >> 1] = f2[0], g[a4 + 2 >> 1] = f2[1];
            }
            return 0;
          default:
            return -28;
        }
      } catch (h2) {
        if (void 0 === jr || "ErrnoError" !== h2.name) throw h2;
        return -h2.errno;
      }
    }
    function zr(r, e4, t3, n3) {
      xr.varargs = n3;
      try {
        e4 = xr.getStr(e4), e4 = xr.calculateAt(r, e4);
        var o4 = n3 ? lr() : 0;
        return jr.open(e4, t3, o4).fd;
      } catch (a4) {
        if (void 0 === jr || "ErrnoError" !== a4.name) throw a4;
        return -a4.errno;
      }
    }
    var Wr = () => L(""), Or = {}, Ur = (r) => {
      for (; r.length; ) {
        var e4 = r.pop();
        r.pop()(e4);
      }
    };
    function Br(r) {
      return this.fromWireType(b[r >> 2]);
    }
    var Lr, Ir, Hr, Vr = {}, qr = {}, Xr = {}, Gr = (r) => {
      throw new Lr(r);
    }, Kr = (r, e4, t3) => {
      function n3(e5) {
        var n4 = t3(e5);
        n4.length !== r.length && Gr("Mismatched type converter count");
        for (var o5 = 0; o5 < r.length; ++o5) te(r[o5], n4[o5]);
      }
      r.forEach((r2) => Xr[r2] = e4);
      var o4 = new Array(e4.length), a4 = [], i3 = 0;
      e4.forEach((r2, e5) => {
        qr.hasOwnProperty(r2) ? o4[e5] = qr[r2] : (a4.push(r2), Vr.hasOwnProperty(r2) || (Vr[r2] = []), Vr[r2].push(() => {
          o4[e5] = qr[r2], ++i3 === a4.length && n3(o4);
        }));
      }), 0 === a4.length && n3(o4);
    }, Yr = (r) => {
      var e4 = Or[r];
      delete Or[r];
      var t3 = e4.rawConstructor, n3 = e4.rawDestructor, o4 = e4.fields, a4 = o4.map((r2) => r2.getterReturnType).concat(o4.map((r2) => r2.setterArgumentType));
      Kr([r], a4, (r2) => {
        var a5 = {};
        return o4.forEach((e5, t4) => {
          var n4 = e5.fieldName, i3 = r2[t4], s2 = e5.getter, l2 = e5.getterContext, u2 = r2[t4 + o4.length], d2 = e5.setter, c2 = e5.setterContext;
          a5[n4] = { read: (r3) => i3.fromWireType(s2(l2, r3)), write: (r3, e6) => {
            var t5 = [];
            d2(c2, r3, u2.toWireType(t5, e6)), Ur(t5);
          } };
        }), [{ name: e4.name, fromWireType: (r3) => {
          var e5 = {};
          for (var t4 in a5) e5[t4] = a5[t4].read(r3);
          return n3(r3), e5;
        }, toWireType: (r3, e5) => {
          for (var o5 in a5) if (!(o5 in e5)) throw new TypeError(`Missing field: "${o5}"`);
          var i3 = t3();
          for (o5 in a5) a5[o5].write(i3, e5[o5]);
          return null !== r3 && r3.push(n3, i3), i3;
        }, argPackAdvance: ne, readValueFromPointer: Br, destructorFunction: n3 }];
      });
    }, Jr = (r, e4, t3, n3, o4) => {
    }, Qr = () => {
      for (var r = new Array(256), e4 = 0; e4 < 256; ++e4) r[e4] = String.fromCharCode(e4);
      Ir = r;
    }, Zr = (r) => {
      for (var e4 = "", t3 = r; y[t3]; ) e4 += Ir[y[t3++]];
      return e4;
    }, re = (r) => {
      throw new Hr(r);
    };
    function ee(r, e4, t3 = {}) {
      var n3 = e4.name;
      if (r || re(`type "${n3}" must have a positive integer typeid pointer`), qr.hasOwnProperty(r)) {
        if (t3.ignoreDuplicateRegistrations) return;
        re(`Cannot register type '${n3}' twice`);
      }
      if (qr[r] = e4, delete Xr[r], Vr.hasOwnProperty(r)) {
        var o4 = Vr[r];
        delete Vr[r], o4.forEach((r2) => r2());
      }
    }
    function te(r, e4, t3 = {}) {
      return ee(r, e4, t3);
    }
    var ne = 8, oe = (r, e4, t3, n3) => {
      te(r, { name: e4 = Zr(e4), fromWireType: function(r2) {
        return !!r2;
      }, toWireType: function(r2, e5) {
        return e5 ? t3 : n3;
      }, argPackAdvance: ne, readValueFromPointer: function(r2) {
        return this.fromWireType(y[r2]);
      }, destructorFunction: null });
    }, ae = [], ie = [], se = (r) => {
      r > 9 && 0 == --ie[r + 1] && (ie[r] = void 0, ae.push(r));
    }, le = () => ie.length / 2 - 5 - ae.length, ue = () => {
      ie.push(0, 1, void 0, 1, null, 1, true, 1, false, 1), s.count_emval_handles = le;
    }, de = { toValue: (r) => (r || re("Cannot use deleted val. handle = " + r), ie[r]), toHandle: (r) => {
      switch (r) {
        case void 0:
          return 2;
        case null:
          return 4;
        case true:
          return 6;
        case false:
          return 8;
        default: {
          const e4 = ae.pop() || ie.length;
          return ie[e4] = r, ie[e4 + 1] = 1, e4;
        }
      }
    } }, ce = { name: "emscripten::val", fromWireType: (r) => {
      var e4 = de.toValue(r);
      return se(r), e4;
    }, toWireType: (r, e4) => de.toHandle(e4), argPackAdvance: ne, readValueFromPointer: Br, destructorFunction: null }, fe = (r) => te(r, ce), he = (r, e4) => {
      switch (e4) {
        case 4:
          return function(r2) {
            return this.fromWireType(k[r2 >> 2]);
          };
        case 8:
          return function(r2) {
            return this.fromWireType(F[r2 >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${e4}): ${r}`);
      }
    }, me = (r, e4, t3) => {
      te(r, { name: e4 = Zr(e4), fromWireType: (r2) => r2, toWireType: (r2, e5) => e5, argPackAdvance: ne, readValueFromPointer: he(e4, t3), destructorFunction: null });
    }, pe = (r, e4) => Object.defineProperty(e4, "name", { value: r });
    function ve(r) {
      for (var e4 = 1; e4 < r.length; ++e4) if (null !== r[e4] && void 0 === r[e4].destructorFunction) return true;
      return false;
    }
    function we(r, e4, t3, n3, o4, a4) {
      var i3 = e4.length;
      i3 < 2 && re("argTypes array size mismatch! Must at least get return value and 'this' types!"), e4[1];
      var s2 = ve(e4), l2 = "void" !== e4[0].name, u2 = i3 - 2, d2 = new Array(u2), c2 = [], f2 = [];
      return pe(r, function(...r2) {
        var t4;
        f2.length = 0, c2.length = 1, c2[0] = o4;
        for (var a5 = 0; a5 < u2; ++a5) d2[a5] = e4[a5 + 2].toWireType(f2, r2[a5]), c2.push(d2[a5]);
        function i4(r3) {
          if (s2) Ur(f2);
          else for (var n4 = 2; n4 < e4.length; n4++) {
            var o5 = 1 === n4 ? t4 : d2[n4 - 2];
            null !== e4[n4].destructorFunction && e4[n4].destructorFunction(o5);
          }
          if (l2) return e4[0].fromWireType(r3);
        }
        return i4(n3(...c2));
      });
    }
    var ye, ge, Ee = (r, e4, t3) => {
      if (void 0 === r[e4].overloadTable) {
        var n3 = r[e4];
        r[e4] = function(...n4) {
          return r[e4].overloadTable.hasOwnProperty(n4.length) || re(`Function '${t3}' called with an invalid number of arguments (${n4.length}) - expects one of (${r[e4].overloadTable})!`), r[e4].overloadTable[n4.length].apply(this, n4);
        }, r[e4].overloadTable = [], r[e4].overloadTable[n3.argCount] = n3;
      }
    }, _e = (r, e4, t3) => {
      s.hasOwnProperty(r) ? ((void 0 === t3 || void 0 !== s[r].overloadTable && void 0 !== s[r].overloadTable[t3]) && re(`Cannot register public name '${r}' twice`), Ee(s, r, r), s[r].overloadTable.hasOwnProperty(t3) && re(`Cannot register multiple overloads of a function with the same number of arguments (${t3})!`), s[r].overloadTable[t3] = e4) : (s[r] = e4, s[r].argCount = t3);
    }, be = (r, e4) => {
      for (var t3 = [], n3 = 0; n3 < r; n3++) t3.push(b[e4 + 4 * n3 >> 2]);
      return t3;
    }, ke = (r, e4, t3) => {
      s.hasOwnProperty(r) || Gr("Replacing nonexistent public symbol"), void 0 !== s[r].overloadTable && void 0 !== t3 ? s[r].overloadTable[t3] = e4 : (s[r] = e4, s[r].argCount = t3);
    }, Fe = (r, e4, t3) => (r = r.replace(/p/g, "i"), (0, s["dynCall_" + r])(e4, ...t3)), Pe = [], Ae = (r) => {
      var e4 = Pe[r];
      return e4 || (r >= Pe.length && (Pe.length = r + 1), Pe[r] = e4 = ye.get(r)), e4;
    }, Se = (r, e4, t3 = []) => r.includes("j") ? Fe(r, e4, t3) : Ae(e4)(...t3), De = (r, e4) => (...t3) => Se(r, e4, t3), $e = (r, e4) => {
      function t3() {
        return r.includes("j") ? De(r, e4) : Ae(e4);
      }
      r = Zr(r);
      var n3 = t3();
      return "function" != typeof n3 && re(`unknown function pointer with signature ${r}: ${e4}`), n3;
    }, Ce = (r, e4) => {
      var t3 = pe(e4, function(r2) {
        this.name = e4, this.message = r2;
        var t4 = new Error(r2).stack;
        void 0 !== t4 && (this.stack = this.toString() + "\n" + t4.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return t3.prototype = Object.create(r.prototype), t3.prototype.constructor = t3, t3.prototype.toString = function() {
        return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
      }, t3;
    }, Te = (r) => {
      var e4 = an(r), t3 = Zr(e4);
      return ln(e4), t3;
    }, je = (r, e4) => {
      var t3 = [], n3 = {};
      function o4(r2) {
        n3[r2] || qr[r2] || (Xr[r2] ? Xr[r2].forEach(o4) : (t3.push(r2), n3[r2] = true));
      }
      throw e4.forEach(o4), new ge(`${r}: ` + t3.map(Te).join([", "]));
    }, Me = (r) => {
      const e4 = (r = r.trim()).indexOf("(");
      return -1 !== e4 ? r.substr(0, e4) : r;
    }, xe = (r, e4, t3, n3, o4, a4, i3, s2) => {
      var l2 = be(e4, t3);
      r = Zr(r), r = Me(r), o4 = $e(n3, o4), _e(r, function() {
        je(`Cannot call ${r} due to unbound types`, l2);
      }, e4 - 1), Kr([], l2, (t4) => {
        var n4 = [t4[0], null].concat(t4.slice(1));
        return ke(r, we(r, n4, null, o4, a4), e4 - 1), [];
      });
    }, Re = (r, e4, t3) => {
      switch (e4) {
        case 1:
          return t3 ? (r2) => w[r2] : (r2) => y[r2];
        case 2:
          return t3 ? (r2) => g[r2 >> 1] : (r2) => E[r2 >> 1];
        case 4:
          return t3 ? (r2) => _[r2 >> 2] : (r2) => b[r2 >> 2];
        default:
          throw new TypeError(`invalid integer width (${e4}): ${r}`);
      }
    }, Ne = (r, e4, t3, n3, o4) => {
      e4 = Zr(e4);
      var a4 = (r2) => r2;
      if (0 === n3) {
        var i3 = 32 - 8 * t3;
        a4 = (r2) => r2 << i3 >>> i3;
      }
      var s2 = e4.includes("unsigned"), l2 = (r2, e5) => {
      };
      te(r, { name: e4, fromWireType: a4, toWireType: s2 ? function(r2, e5) {
        return l2(e5, this.name), e5 >>> 0;
      } : function(r2, e5) {
        return l2(e5, this.name), e5;
      }, argPackAdvance: ne, readValueFromPointer: Re(e4, t3, 0 !== n3), destructorFunction: null });
    }, ze = (r, e4, t3) => {
      var n3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e4];
      function o4(r2) {
        var e5 = b[r2 >> 2], t4 = b[r2 + 4 >> 2];
        return new n3(w.buffer, t4, e5);
      }
      te(r, { name: t3 = Zr(t3), fromWireType: o4, argPackAdvance: ne, readValueFromPointer: o4 }, { ignoreDuplicateRegistrations: true });
    }, We = (r, e4, t3) => yr(r, y, e4, t3), Oe = (r, e4) => {
      var t3 = "std::string" === (e4 = Zr(e4));
      te(r, { name: e4, fromWireType(r2) {
        var e5, n3 = b[r2 >> 2], o4 = r2 + 4;
        if (t3) for (var a4 = o4, i3 = 0; i3 <= n3; ++i3) {
          var s2 = o4 + i3;
          if (i3 == n3 || 0 == y[s2]) {
            var l2 = Mr(a4, s2 - a4);
            void 0 === e5 ? e5 = l2 : (e5 += String.fromCharCode(0), e5 += l2), a4 = s2 + 1;
          }
        }
        else {
          var u2 = new Array(n3);
          for (i3 = 0; i3 < n3; ++i3) u2[i3] = String.fromCharCode(y[o4 + i3]);
          e5 = u2.join("");
        }
        return ln(r2), e5;
      }, toWireType(r2, e5) {
        var n3;
        e5 instanceof ArrayBuffer && (e5 = new Uint8Array(e5));
        var o4 = "string" == typeof e5;
        o4 || e5 instanceof Uint8Array || e5 instanceof Uint8ClampedArray || e5 instanceof Int8Array || re("Cannot pass non-string to std::string"), n3 = t3 && o4 ? wr(e5) : e5.length;
        var a4 = sn(4 + n3 + 1), i3 = a4 + 4;
        if (b[a4 >> 2] = n3, t3 && o4) We(e5, i3, n3 + 1);
        else if (o4) for (var s2 = 0; s2 < n3; ++s2) {
          var l2 = e5.charCodeAt(s2);
          l2 > 255 && (ln(i3), re("String has UTF-16 code units that do not fit in 8 bits")), y[i3 + s2] = l2;
        }
        else for (s2 = 0; s2 < n3; ++s2) y[i3 + s2] = e5[s2];
        return null !== r2 && r2.push(ln, a4), a4;
      }, argPackAdvance: ne, readValueFromPointer: Br, destructorFunction(r2) {
        ln(r2);
      } });
    }, Ue = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, Be = (r, e4) => {
      for (var t3 = r, n3 = t3 >> 1, o4 = n3 + e4 / 2; !(n3 >= o4) && E[n3]; ) ++n3;
      if ((t3 = n3 << 1) - r > 32 && Ue) return Ue.decode(y.subarray(r, t3));
      for (var a4 = "", i3 = 0; !(i3 >= e4 / 2); ++i3) {
        var s2 = g[r + 2 * i3 >> 1];
        if (0 == s2) break;
        a4 += String.fromCharCode(s2);
      }
      return a4;
    }, Le = (r, e4, t3) => {
      if (t3 ?? (t3 = 2147483647), t3 < 2) return 0;
      for (var n3 = e4, o4 = (t3 -= 2) < 2 * r.length ? t3 / 2 : r.length, a4 = 0; a4 < o4; ++a4) {
        var i3 = r.charCodeAt(a4);
        g[e4 >> 1] = i3, e4 += 2;
      }
      return g[e4 >> 1] = 0, e4 - n3;
    }, Ie = (r) => 2 * r.length, He = (r, e4) => {
      for (var t3 = 0, n3 = ""; !(t3 >= e4 / 4); ) {
        var o4 = _[r + 4 * t3 >> 2];
        if (0 == o4) break;
        if (++t3, o4 >= 65536) {
          var a4 = o4 - 65536;
          n3 += String.fromCharCode(55296 | a4 >> 10, 56320 | 1023 & a4);
        } else n3 += String.fromCharCode(o4);
      }
      return n3;
    }, Ve = (r, e4, t3) => {
      if (t3 ?? (t3 = 2147483647), t3 < 4) return 0;
      for (var n3 = e4, o4 = n3 + t3 - 4, a4 = 0; a4 < r.length; ++a4) {
        var i3 = r.charCodeAt(a4);
        if (i3 >= 55296 && i3 <= 57343 && (i3 = 65536 + ((1023 & i3) << 10) | 1023 & r.charCodeAt(++a4)), _[e4 >> 2] = i3, (e4 += 4) + 4 > o4) break;
      }
      return _[e4 >> 2] = 0, e4 - n3;
    }, qe = (r) => {
      for (var e4 = 0, t3 = 0; t3 < r.length; ++t3) {
        var n3 = r.charCodeAt(t3);
        n3 >= 55296 && n3 <= 57343 && ++t3, e4 += 4;
      }
      return e4;
    }, Xe = (r, e4, t3) => {
      var n3, o4, a4, i3;
      t3 = Zr(t3), 2 === e4 ? (n3 = Be, o4 = Le, i3 = Ie, a4 = (r2) => E[r2 >> 1]) : 4 === e4 && (n3 = He, o4 = Ve, i3 = qe, a4 = (r2) => b[r2 >> 2]), te(r, { name: t3, fromWireType: (r2) => {
        for (var t4, o5 = b[r2 >> 2], i4 = r2 + 4, s2 = 0; s2 <= o5; ++s2) {
          var l2 = r2 + 4 + s2 * e4;
          if (s2 == o5 || 0 == a4(l2)) {
            var u2 = n3(i4, l2 - i4);
            void 0 === t4 ? t4 = u2 : (t4 += String.fromCharCode(0), t4 += u2), i4 = l2 + e4;
          }
        }
        return ln(r2), t4;
      }, toWireType: (r2, n4) => {
        "string" != typeof n4 && re(`Cannot pass non-string to C++ string type ${t3}`);
        var a5 = i3(n4), s2 = sn(4 + a5 + e4);
        return b[s2 >> 2] = a5 / e4, o4(n4, s2 + 4, a5 + e4), null !== r2 && r2.push(ln, s2), s2;
      }, argPackAdvance: ne, readValueFromPointer: Br, destructorFunction(r2) {
        ln(r2);
      } });
    }, Ge = (r, e4, t3, n3, o4, a4) => {
      Or[r] = { name: Zr(e4), rawConstructor: $e(t3, n3), rawDestructor: $e(o4, a4), fields: [] };
    }, Ke = (r, e4, t3, n3, o4, a4, i3, s2, l2, u2) => {
      Or[r].fields.push({ fieldName: Zr(e4), getterReturnType: t3, getter: $e(n3, o4), getterContext: a4, setterArgumentType: i3, setter: $e(s2, l2), setterContext: u2 });
    }, Ye = (r, e4) => {
      te(r, { isVoid: true, name: e4 = Zr(e4), argPackAdvance: 0, fromWireType: () => {
      }, toWireType: (r2, e5) => {
      } });
    }, Je = (r) => {
      do {
        var e4 = b[r >> 2], t3 = b[(r += 4) >> 2], n3 = b[(r += 4) >> 2];
        r += 4;
        var o4 = Mr(e4);
        jr.createPath("/", dr.dirname(o4), true, true), jr.createDataFile(o4, null, w.subarray(n3, n3 + t3), true, true, true);
      } while (b[r >> 2]);
    }, Qe = (r, e4, t3) => y.copyWithin(r, e4, e4 + t3), Ze = () => {
      throw 1 / 0;
    }, rt = (r, e4) => {
      var t3 = qr[r];
      return void 0 === t3 && re(`${e4} has unknown type ${Te(r)}`), t3;
    }, et = (r, e4, t3) => {
      var n3 = [], o4 = r.toWireType(n3, t3);
      return n3.length && (b[e4 >> 2] = de.toHandle(n3)), o4;
    }, tt = (r, e4, t3) => (r = de.toValue(r), e4 = rt(e4, "emval::as"), et(e4, t3, r)), nt = {}, ot = (r) => {
      var e4 = nt[r];
      return void 0 === e4 ? Zr(r) : e4;
    }, at = [], it = (r, e4, t3, n3, o4) => (r = at[r])(e4 = de.toValue(e4), e4[t3 = ot(t3)], n3, o4), st = () => {
      if ("object" == typeof globalThis) return globalThis;
      function e4(r) {
        r.$$$embind_global$$$ = r;
        var e5 = "object" == typeof $$$embind_global$$$ && r.$$$embind_global$$$ == r;
        return e5 || delete r.$$$embind_global$$$, e5;
      }
      if ("object" == typeof $$$embind_global$$$) return $$$embind_global$$$;
      if ("object" == typeof e && e4(e) ? $$$embind_global$$$ = e : "object" == typeof self && e4(self) && ($$$embind_global$$$ = self), "object" == typeof $$$embind_global$$$) return $$$embind_global$$$;
      throw Error("unable to get global object.");
    }, lt = (r) => 0 === r ? de.toHandle(st()) : (r = ot(r), de.toHandle(st()[r])), ut = (r) => {
      var e4 = at.length;
      return at.push(r), e4;
    }, dt = (r, e4) => {
      for (var t3 = new Array(r), n3 = 0; n3 < r; ++n3) t3[n3] = rt(b[e4 + 4 * n3 >> 2], "parameter " + n3);
      return t3;
    }, ct = Reflect.construct, ft = (r, e4, t3) => {
      var n3 = dt(r, e4), o4 = n3.shift();
      r--;
      var a4 = new Array(r), i3 = (e5, i4, s3, l2) => {
        for (var u2 = 0, d2 = 0; d2 < r; ++d2) a4[d2] = n3[d2].readValueFromPointer(l2 + u2), u2 += n3[d2].argPackAdvance;
        var c2 = 1 === t3 ? ct(i4, a4) : i4.apply(e5, a4);
        return et(o4, s3, c2);
      }, s2 = `methodCaller<(${n3.map((r2) => r2.name).join(", ")}) => ${o4.name}>`;
      return ut(pe(s2, i3));
    }, ht = (r, e4) => (r = de.toValue(r), e4 = de.toValue(e4), de.toHandle(r[e4])), mt = (r) => {
      r > 9 && (ie[r + 1] += 1);
    }, pt = () => de.toHandle([]), vt = (r) => de.toHandle(ot(r)), wt = (r) => {
      var e4 = de.toValue(r);
      Ur(e4), se(r);
    }, yt = (r, e4, t3) => {
      r = de.toValue(r), e4 = de.toValue(e4), t3 = de.toValue(t3), r[e4] = t3;
    }, gt = (r, e4) => {
      var t3 = (r = rt(r, "_emval_take_value")).readValueFromPointer(e4);
      return de.toHandle(t3);
    }, Et = (r, e4, t3, n3) => {
      var o4 = (/* @__PURE__ */ new Date()).getFullYear(), a4 = new Date(o4, 0, 1), i3 = new Date(o4, 6, 1), s2 = a4.getTimezoneOffset(), l2 = i3.getTimezoneOffset(), u2 = Math.max(s2, l2);
      b[r >> 2] = 60 * u2, _[e4 >> 2] = Number(s2 != l2);
      var d2 = (r2) => {
        var e5 = r2 >= 0 ? "-" : "+", t4 = Math.abs(r2);
        return `UTC${e5}${String(Math.floor(t4 / 60)).padStart(2, "0")}${String(t4 % 60).padStart(2, "0")}`;
      }, c2 = d2(s2), f2 = d2(l2);
      l2 < s2 ? (We(c2, t3, 17), We(f2, n3, 17)) : (We(c2, n3, 17), We(f2, t3, 17));
    }, _t = () => 2147483648, bt = (r) => {
      var e4 = (r - v.buffer.byteLength + 65535) / 65536 | 0;
      try {
        return v.grow(e4), S(), 1;
      } catch (t3) {
      }
    }, kt = (r) => {
      var e4 = y.length;
      r >>>= 0;
      var t3 = _t();
      if (r > t3) return false;
      for (var n3 = 1; n3 <= 4; n3 *= 2) {
        var o4 = e4 * (1 + 0.2 / n3);
        o4 = Math.min(o4, r + 100663296);
        var a4 = Math.min(t3, br(Math.max(r, o4), 65536));
        if (bt(a4)) return true;
      }
      return false;
    }, Ft = {}, Pt = () => d || "./this.program", At = () => {
      if (!At.strings) {
        var r = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: Pt() };
        for (var e4 in Ft) void 0 === Ft[e4] ? delete r[e4] : r[e4] = Ft[e4];
        var t3 = [];
        for (var e4 in r) t3.push(`${e4}=${r[e4]}`);
        At.strings = t3;
      }
      return At.strings;
    }, St = (r, e4) => {
      for (var t3 = 0; t3 < r.length; ++t3) w[e4++] = r.charCodeAt(t3);
      w[e4] = 0;
    }, Dt = (r, e4) => {
      var t3 = 0;
      return At().forEach((n3, o4) => {
        var a4 = e4 + t3;
        b[r + 4 * o4 >> 2] = a4, St(n3, a4), t3 += n3.length + 1;
      }), 0;
    }, $t = (r, e4) => {
      var t3 = At();
      b[r >> 2] = t3.length;
      var n3 = 0;
      return t3.forEach((r2) => n3 += r2.length + 1), b[e4 >> 2] = n3, 0;
    }, Ct = 0, Tt = () => nr || Ct > 0, jt = (r) => {
      var _a2;
      Tt() || ((_a2 = s.onExit) == null ? void 0 : _a2.call(s, r), A = true), c(r, new er(r));
    }, Mt = (r, e4) => {
      jt(r);
    };
    function xt(r) {
      try {
        var e4 = xr.getStreamFromFD(r);
        return jr.close(e4), 0;
      } catch (t3) {
        if (void 0 === jr || "ErrnoError" !== t3.name) throw t3;
        return t3.errno;
      }
    }
    var Rt = (r, e4, t3, n3) => {
      for (var o4 = 0, a4 = 0; a4 < t3; a4++) {
        var i3 = b[e4 >> 2], s2 = b[e4 + 4 >> 2];
        e4 += 8;
        var l2 = jr.read(r, w, i3, s2, n3);
        if (l2 < 0) return -1;
        if (o4 += l2, l2 < s2) break;
      }
      return o4;
    };
    function Nt(r, e4, t3, n3) {
      try {
        var o4 = xr.getStreamFromFD(r), a4 = Rt(o4, e4, t3);
        return b[n3 >> 2] = a4, 0;
      } catch (i3) {
        if (void 0 === jr || "ErrnoError" !== i3.name) throw i3;
        return i3.errno;
      }
    }
    var zt = (r, e4) => e4 + 2097152 >>> 0 < 4194305 - !!r ? (r >>> 0) + 4294967296 * e4 : NaN;
    function Wt(r, e4, t3, n3, o4) {
      var a4 = zt(e4, t3);
      try {
        if (isNaN(a4)) return 61;
        var i3 = xr.getStreamFromFD(r);
        return jr.llseek(i3, a4, n3), V = [i3.position >>> 0, (H = i3.position, +Math.abs(H) >= 1 ? H > 0 ? +Math.floor(H / 4294967296) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)], _[o4 >> 2] = V[0], _[o4 + 4 >> 2] = V[1], i3.getdents && 0 === a4 && 0 === n3 && (i3.getdents = null), 0;
      } catch (s2) {
        if (void 0 === jr || "ErrnoError" !== s2.name) throw s2;
        return s2.errno;
      }
    }
    var Ot = (r, e4, t3, n3) => {
      for (var o4 = 0, a4 = 0; a4 < t3; a4++) {
        var i3 = b[e4 >> 2], s2 = b[e4 + 4 >> 2];
        e4 += 8;
        var l2 = jr.write(r, w, i3, s2, n3);
        if (l2 < 0) return -1;
        if (o4 += l2, l2 < s2) break;
      }
      return o4;
    };
    function Ut(r, e4, t3, n3) {
      try {
        var o4 = xr.getStreamFromFD(r), a4 = Ot(o4, e4, t3);
        return b[n3 >> 2] = a4, 0;
      } catch (i3) {
        if (void 0 === jr || "ErrnoError" !== i3.name) throw i3;
        return i3.errno;
      }
    }
    var Bt, Lt = (r, e4) => {
      r < 128 ? e4.push(r) : e4.push(r % 128 | 128, r >> 7);
    }, It = (r) => {
      for (var e4 = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" }, t3 = { parameters: [], results: "v" == r[0] ? [] : [e4[r[0]]] }, n3 = 1; n3 < r.length; ++n3) t3.parameters.push(e4[r[n3]]);
      return t3;
    }, Ht = (r, e4) => {
      var t3 = r.slice(0, 1), n3 = r.slice(1), o4 = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
      e4.push(96), Lt(n3.length, e4);
      for (var a4 = 0; a4 < n3.length; ++a4) e4.push(o4[n3[a4]]);
      "v" == t3 ? e4.push(0) : e4.push(1, o4[t3]);
    }, Vt = (r, e4) => {
      if ("function" == typeof WebAssembly.Function) return new WebAssembly.Function(It(e4), r);
      var t3 = [1];
      Ht(e4, t3);
      var n3 = [0, 97, 115, 109, 1, 0, 0, 0, 1];
      Lt(t3.length, n3), n3.push(...t3), n3.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
      var o4 = new WebAssembly.Module(new Uint8Array(n3));
      return new WebAssembly.Instance(o4, { e: { f: r } }).exports.f;
    }, qt = (r, e4) => {
      if (Bt) for (var t3 = r; t3 < r + e4; t3++) {
        var n3 = Ae(t3);
        n3 && Bt.set(n3, t3);
      }
    }, Xt = (r) => (Bt || (Bt = /* @__PURE__ */ new WeakMap(), qt(0, ye.length)), Bt.get(r) || 0), Gt = [], Kt = () => {
      if (Gt.length) return Gt.pop();
      try {
        ye.grow(1);
      } catch (p2) {
        if (!(p2 instanceof RangeError)) throw p2;
        throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
      }
      return ye.length - 1;
    }, Yt = (r, e4) => {
      ye.set(r, e4), Pe[r] = ye.get(r);
    }, Jt = (r, e4) => {
      var t3 = Xt(r);
      if (t3) return t3;
      var n3 = Kt();
      try {
        Yt(n3, r);
      } catch (p2) {
        if (!(p2 instanceof TypeError)) throw p2;
        var o4 = Vt(r, e4);
        Yt(n3, o4);
      }
      return Bt.set(r, n3), n3;
    }, Qt = jr.createPath, Zt = (r) => jr.unlink(r), rn = jr.createLazyFile, en = jr.createDevice;
    jr.createPreloadedFile = $r, jr.staticInit(), s.FS_createPath = jr.createPath, s.FS_createDataFile = jr.createDataFile, s.FS_createPreloadedFile = jr.createPreloadedFile, s.FS_unlink = jr.unlink, s.FS_createLazyFile = jr.createLazyFile, s.FS_createDevice = jr.createDevice, Fr.doesNotExistError = new jr.ErrnoError(44), Fr.doesNotExistError.stack = "<generic error, no stack>", Lr = s.InternalError = class extends Error {
      constructor(r) {
        super(r), this.name = "InternalError";
      }
    }, Qr(), Hr = s.BindingError = class extends Error {
      constructor(r) {
        super(r), this.name = "BindingError";
      }
    }, ue(), ge = s.UnboundTypeError = Ce(Error, "UnboundTypeError");
    var tn, nn = { i: sr, w: Rr, M: Nr, N: zr, P: Wr, V: Yr, F: Jr, T: oe, S: fe, y: me, q: xe, c: Ne, b: ze, x: Oe, p: Xe, W: Ge, k: Ke, U: Ye, R: Je, O: Qe, G: Ze, Y: tt, z: it, a: se, Z: lt, A: ft, m: ht, g: mt, B: pt, h: vt, r: wt, X: yt, l: gt, I: Et, H: kt, J: Dt, K: $t, Q: Mt, u: xt, L: Nt, E: Wt, v: Ut, n: fn, j: pn, o: wn, s: yn, D: En, t: vn, d: hn, C: _n, e: gn, f: mn }, on = rr(), an = (r) => (an = on.aa)(r), sn = s._malloc = (r) => (sn = s._malloc = on.ca)(r), ln = s._free = (r) => (ln = s._free = on.da)(r), un = (r, e4) => (un = on.ea)(r, e4), dn = (r) => (dn = on.fa)(r), cn = () => (cn = on.ga)();
    function fn(r, e4) {
      var t3 = ar();
      try {
        return Ae(r)(e4);
      } catch (n3) {
        if (or(t3), n3 !== n3 + 0) throw n3;
        un(1, 0);
      }
    }
    function hn(r, e4) {
      var t3 = ar();
      try {
        Ae(r)(e4);
      } catch (n3) {
        if (or(t3), n3 !== n3 + 0) throw n3;
        un(1, 0);
      }
    }
    function mn(r, e4, t3, n3) {
      var o4 = ar();
      try {
        Ae(r)(e4, t3, n3);
      } catch (a4) {
        if (or(o4), a4 !== a4 + 0) throw a4;
        un(1, 0);
      }
    }
    function pn(r, e4, t3) {
      var n3 = ar();
      try {
        return Ae(r)(e4, t3);
      } catch (o4) {
        if (or(n3), o4 !== o4 + 0) throw o4;
        un(1, 0);
      }
    }
    function vn(r) {
      var e4 = ar();
      try {
        Ae(r)();
      } catch (t3) {
        if (or(e4), t3 !== t3 + 0) throw t3;
        un(1, 0);
      }
    }
    function wn(r, e4, t3, n3) {
      var o4 = ar();
      try {
        return Ae(r)(e4, t3, n3);
      } catch (a4) {
        if (or(o4), a4 !== a4 + 0) throw a4;
        un(1, 0);
      }
    }
    function yn(r, e4, t3, n3, o4) {
      var a4 = ar();
      try {
        return Ae(r)(e4, t3, n3, o4);
      } catch (i3) {
        if (or(a4), i3 !== i3 + 0) throw i3;
        un(1, 0);
      }
    }
    function gn(r, e4, t3) {
      var n3 = ar();
      try {
        Ae(r)(e4, t3);
      } catch (o4) {
        if (or(n3), o4 !== o4 + 0) throw o4;
        un(1, 0);
      }
    }
    function En(r, e4, t3, n3, o4, a4, i3, s2, l2, u2) {
      var d2 = ar();
      try {
        return Ae(r)(e4, t3, n3, o4, a4, i3, s2, l2, u2);
      } catch (c2) {
        if (or(d2), c2 !== c2 + 0) throw c2;
        un(1, 0);
      }
    }
    function _n(r, e4, t3, n3) {
      var o4 = ar();
      try {
        Ae(r)(e4, t3, n3);
      } catch (a4) {
        if (or(o4), a4 !== a4 + 0) throw a4;
        un(1, 0);
      }
    }
    function bn() {
      function r() {
        var _a2;
        tn || (tn = true, s.calledRun = true, A || (j(), t2(s), (_a2 = s.onRuntimeInitialized) == null ? void 0 : _a2.call(s), M()));
      }
      z > 0 || (T(), z > 0 || (s.setStatus ? (s.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => s.setStatus(""), 1), r();
      }, 1)) : r()));
    }
    if (s.dynCall_viji = (r, e4, t3, n3, o4) => (s.dynCall_viji = on.ha)(r, e4, t3, n3, o4), s.dynCall_ji = (r, e4) => (s.dynCall_ji = on.ia)(r, e4), s.dynCall_jiji = (r, e4, t3, n3, o4) => (s.dynCall_jiji = on.ja)(r, e4, t3, n3, o4), s.dynCall_viijii = (r, e4, t3, n3, o4, a4, i3) => (s.dynCall_viijii = on.ka)(r, e4, t3, n3, o4, a4, i3), s.dynCall_iiiiij = (r, e4, t3, n3, o4, a4, i3) => (s.dynCall_iiiiij = on.la)(r, e4, t3, n3, o4, a4, i3), s.dynCall_iiiiijj = (r, e4, t3, n3, o4, a4, i3, l2, u2) => (s.dynCall_iiiiijj = on.ma)(r, e4, t3, n3, o4, a4, i3, l2, u2), s.dynCall_iiiiiijj = (r, e4, t3, n3, o4, a4, i3, l2, u2, d2) => (s.dynCall_iiiiiijj = on.na)(r, e4, t3, n3, o4, a4, i3, l2, u2, d2), s.___emscripten_embedded_file_data = 1536624, s.addRunDependency = U, s.removeRunDependency = B, s.addFunction = Jt, s.UTF8ToString = Mr, s.FS_createPreloadedFile = $r, s.FS_unlink = Zt, s.FS_createPath = Qt, s.FS_createDevice = en, s.FS_createDataFile = Ar, s.FS_createLazyFile = rn, W = function r() {
      tn || bn(), tn || (W = r);
    }, s.preInit) for ("function" == typeof s.preInit && (s.preInit = [s.preInit]); s.preInit.length > 0; ) s.preInit.pop()();
    return bn(), l;
  }, e2.exports = a2), n.exports;
  var e2, o3, a2;
}
var a = o(o2());
var i = Object.freeze(Object.defineProperty({ __proto__: null, default: a }, Symbol.toStringTag, { value: "Module" }));
export {
  i as l
};
//# sourceMappingURL=lyr3DWorker-ZAQE2YHR.js.map
