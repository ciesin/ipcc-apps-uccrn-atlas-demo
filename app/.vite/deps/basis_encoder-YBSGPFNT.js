import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/chunks/basis_encoder.js
var r;
var e = (r = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, function(e2 = {}) {
  var t, n, o = e2;
  o.ready = new Promise((r2, e3) => {
    t = r2, n = e3;
  });
  var a, i, s, u = Object.assign({}, o), l = "./this.program", c = true, d = "";
  function h(r2) {
    return o.locateFile ? o.locateFile(r2, d) : d + r2;
  }
  d = self.location.href, r && (d = r), d = 0 !== d.indexOf("blob:") ? d.substr(0, d.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", a = (r2) => {
    var e3 = new XMLHttpRequest();
    return e3.open("GET", r2, false), e3.send(null), e3.responseText;
  }, s = (r2) => {
    var e3 = new XMLHttpRequest();
    return e3.open("GET", r2, false), e3.responseType = "arraybuffer", e3.send(null), new Uint8Array(e3.response);
  }, i = (r2, e3, t2) => {
    var n2 = new XMLHttpRequest();
    n2.open("GET", r2, true), n2.responseType = "arraybuffer", n2.onload = () => {
      200 == n2.status || 0 == n2.status && n2.response ? e3(n2.response) : t2();
    }, n2.onerror = t2, n2.send(null);
  };
  var p, f, m = o.print || console.log.bind(console), v = o.printErr || console.error.bind(console);
  Object.assign(o, u), u = null, o.arguments && o.arguments, o.thisProgram && (l = o.thisProgram), o.quit && o.quit, o.wasmBinary && (p = o.wasmBinary), "object" != typeof WebAssembly && L("no native wasm support detected");
  var y, g, w, E, _, b, k, $, P = false;
  function T(r2, e3) {
    r2 || L(e3);
  }
  function C() {
    var r2 = f.buffer;
    o.HEAP8 = y = new Int8Array(r2), o.HEAP16 = w = new Int16Array(r2), o.HEAPU8 = g = new Uint8Array(r2), o.HEAPU16 = E = new Uint16Array(r2), o.HEAP32 = _ = new Int32Array(r2), o.HEAPU32 = b = new Uint32Array(r2), o.HEAPF32 = k = new Float32Array(r2), o.HEAPF64 = $ = new Float64Array(r2);
  }
  var F = [], D = [], S = [];
  function A() {
    if (o.preRun) for ("function" == typeof o.preRun && (o.preRun = [o.preRun]); o.preRun.length; ) O(o.preRun.shift());
    Q(F);
  }
  function M() {
    o.noFSInit || Tr.init.initialized || Tr.init(), Tr.ignorePermissions = false, Q(D);
  }
  function j() {
    if (o.postRun) for ("function" == typeof o.postRun && (o.postRun = [o.postRun]); o.postRun.length; ) x(o.postRun.shift());
    Q(S);
  }
  function O(r2) {
    F.unshift(r2);
  }
  function R(r2) {
    D.unshift(r2);
  }
  function x(r2) {
    S.unshift(r2);
  }
  var W = 0, z = null;
  function N(r2) {
    return r2;
  }
  function H(r2) {
    W++, o.monitorRunDependencies && o.monitorRunDependencies(W);
  }
  function B(r2) {
    if (W--, o.monitorRunDependencies && o.monitorRunDependencies(W), 0 == W && z) {
      var e3 = z;
      z = null, e3();
    }
  }
  function L(r2) {
    o.onAbort && o.onAbort(r2), v(r2 = "Aborted(" + r2 + ")"), P = true, r2 += ". Build with -sASSERTIONS for more info.";
    var e3 = new WebAssembly.RuntimeError(r2);
    throw n(e3), e3;
  }
  var U, I, V, q = "data:application/octet-stream;base64,", Y = (r2) => r2.startsWith(q);
  function X(r2) {
    if (r2 == U && p) return new Uint8Array(p);
    if (s) return s(r2);
    throw "both async and sync fetching of the wasm failed";
  }
  function G(r2) {
    return !p && c && "function" == typeof fetch ? fetch(r2, { credentials: "same-origin" }).then((e3) => {
      if (!e3.ok) throw "failed to load wasm binary file at '" + r2 + "'";
      return e3.arrayBuffer();
    }).catch(() => X(r2)) : Promise.resolve().then(() => X(r2));
  }
  function K(r2, e3, t2) {
    return G(r2).then((r3) => WebAssembly.instantiate(r3, e3)).then((r3) => r3).then(t2, (r3) => {
      v(`failed to asynchronously prepare wasm: ${r3}`), L(r3);
    });
  }
  function J(r2, e3, t2, n2) {
    return r2 || "function" != typeof WebAssembly.instantiateStreaming || Y(e3) || "function" != typeof fetch ? K(e3, t2, n2) : fetch(e3, { credentials: "same-origin" }).then((r3) => WebAssembly.instantiateStreaming(r3, t2).then(n2, function(r4) {
      return v(`wasm streaming compile failed: ${r4}`), v("falling back to ArrayBuffer instantiation"), K(e3, t2, n2);
    }));
  }
  function Z() {
    var r2 = { a: Rn };
    function e3(r3, e4) {
      return xn = r3.exports, f = xn.ca, C(), ze = xn.ga, R(xn.da), B(), xn;
    }
    function t2(r3) {
      e3(r3.instance);
    }
    if (H(), o.instantiateWasm) try {
      return o.instantiateWasm(r2, e3);
    } catch (a2) {
      v(`Module.instantiateWasm callback failed with error: ${a2}`), n(a2);
    }
    return J(p, U, r2, t2).catch(n), {};
  }
  Y(U = "basis_encoder.wasm") || (U = h(U));
  var Q = (r2) => {
    for (; r2.length > 0; ) r2.shift()(o);
  };
  function rr(r2) {
    this.excPtr = r2, this.ptr = r2 - 24, this.set_type = function(r3) {
      b[this.ptr + 4 >> 2] = r3;
    }, this.get_type = function() {
      return b[this.ptr + 4 >> 2];
    }, this.set_destructor = function(r3) {
      b[this.ptr + 8 >> 2] = r3;
    }, this.get_destructor = function() {
      return b[this.ptr + 8 >> 2];
    }, this.set_caught = function(r3) {
      r3 = r3 ? 1 : 0, y[this.ptr + 12 | 0] = r3;
    }, this.get_caught = function() {
      return 0 != y[this.ptr + 12 | 0];
    }, this.set_rethrown = function(r3) {
      r3 = r3 ? 1 : 0, y[this.ptr + 13 | 0] = r3;
    }, this.get_rethrown = function() {
      return 0 != y[this.ptr + 13 | 0];
    }, this.init = function(r3, e3) {
      this.set_adjusted_ptr(0), this.set_type(r3), this.set_destructor(e3);
    }, this.set_adjusted_ptr = function(r3) {
      b[this.ptr + 16 >> 2] = r3;
    }, this.get_adjusted_ptr = function() {
      return b[this.ptr + 16 >> 2];
    }, this.get_exception_ptr = function() {
      if (qn(this.get_type())) return b[this.excPtr >> 2];
      var r3 = this.get_adjusted_ptr();
      return 0 !== r3 ? r3 : this.excPtr;
    };
  }
  o.noExitRuntime;
  var er = (r2, e3, t2) => {
    throw new rr(r2).init(e3, t2), r2;
  }, tr = (r2) => (_[Bn() >> 2] = r2, r2), nr = { isAbs: (r2) => "/" === r2.charAt(0), splitPath: (r2) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(r2).slice(1), normalizeArray: (r2, e3) => {
    for (var t2 = 0, n2 = r2.length - 1; n2 >= 0; n2--) {
      var o2 = r2[n2];
      "." === o2 ? r2.splice(n2, 1) : ".." === o2 ? (r2.splice(n2, 1), t2++) : t2 && (r2.splice(n2, 1), t2--);
    }
    if (e3) for (; t2; t2--) r2.unshift("..");
    return r2;
  }, normalize: (r2) => {
    var e3 = nr.isAbs(r2), t2 = "/" === r2.substr(-1);
    return (r2 = nr.normalizeArray(r2.split("/").filter((r3) => !!r3), !e3).join("/")) || e3 || (r2 = "."), r2 && t2 && (r2 += "/"), (e3 ? "/" : "") + r2;
  }, dirname: (r2) => {
    var e3 = nr.splitPath(r2), t2 = e3[0], n2 = e3[1];
    return t2 || n2 ? (n2 && (n2 = n2.substr(0, n2.length - 1)), t2 + n2) : ".";
  }, basename: (r2) => {
    if ("/" === r2) return "/";
    var e3 = (r2 = (r2 = nr.normalize(r2)).replace(/\/$/, "")).lastIndexOf("/");
    return -1 === e3 ? r2 : r2.substr(e3 + 1);
  }, join: function() {
    var r2 = Array.prototype.slice.call(arguments);
    return nr.normalize(r2.join("/"));
  }, join2: (r2, e3) => nr.normalize(r2 + "/" + e3) }, or = () => {
    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) return (r2) => crypto.getRandomValues(r2);
    L("initRandomDevice");
  }, ar = (r2) => (ar = or())(r2), ir = { resolve: function() {
    for (var r2 = "", e3 = false, t2 = arguments.length - 1; t2 >= -1 && !e3; t2--) {
      var n2 = t2 >= 0 ? arguments[t2] : Tr.cwd();
      if ("string" != typeof n2) throw new TypeError("Arguments to path.resolve must be strings");
      if (!n2) return "";
      r2 = n2 + "/" + r2, e3 = nr.isAbs(n2);
    }
    return (e3 ? "/" : "") + (r2 = nr.normalizeArray(r2.split("/").filter((r3) => !!r3), !e3).join("/")) || ".";
  }, relative: (r2, e3) => {
    function t2(r3) {
      for (var e4 = 0; e4 < r3.length && "" === r3[e4]; e4++) ;
      for (var t3 = r3.length - 1; t3 >= 0 && "" === r3[t3]; t3--) ;
      return e4 > t3 ? [] : r3.slice(e4, t3 - e4 + 1);
    }
    r2 = ir.resolve(r2).substr(1), e3 = ir.resolve(e3).substr(1);
    for (var n2 = t2(r2.split("/")), o2 = t2(e3.split("/")), a2 = Math.min(n2.length, o2.length), i2 = a2, s2 = 0; s2 < a2; s2++) if (n2[s2] !== o2[s2]) {
      i2 = s2;
      break;
    }
    var u2 = [];
    for (s2 = i2; s2 < n2.length; s2++) u2.push("..");
    return (u2 = u2.concat(o2.slice(i2))).join("/");
  } }, sr = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, ur = (r2, e3, t2) => {
    for (var n2 = e3 + t2, o2 = e3; r2[o2] && !(o2 >= n2); ) ++o2;
    if (o2 - e3 > 16 && r2.buffer && sr) return sr.decode(r2.subarray(e3, o2));
    for (var a2 = ""; e3 < o2; ) {
      var i2 = r2[e3++];
      if (128 & i2) {
        var s2 = 63 & r2[e3++];
        if (192 != (224 & i2)) {
          var u2 = 63 & r2[e3++];
          if ((i2 = 224 == (240 & i2) ? (15 & i2) << 12 | s2 << 6 | u2 : (7 & i2) << 18 | s2 << 12 | u2 << 6 | 63 & r2[e3++]) < 65536) a2 += String.fromCharCode(i2);
          else {
            var l2 = i2 - 65536;
            a2 += String.fromCharCode(55296 | l2 >> 10, 56320 | 1023 & l2);
          }
        } else a2 += String.fromCharCode((31 & i2) << 6 | s2);
      } else a2 += String.fromCharCode(i2);
    }
    return a2;
  }, lr = [], cr = (r2) => {
    for (var e3 = 0, t2 = 0; t2 < r2.length; ++t2) {
      var n2 = r2.charCodeAt(t2);
      n2 <= 127 ? e3++ : n2 <= 2047 ? e3 += 2 : n2 >= 55296 && n2 <= 57343 ? (e3 += 4, ++t2) : e3 += 3;
    }
    return e3;
  }, dr = (r2, e3, t2, n2) => {
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
  };
  function hr(r2, e3, t2) {
    var n2 = cr(r2) + 1, o2 = new Array(n2), a2 = dr(r2, o2, 0, o2.length);
    return e3 && (o2.length = a2), o2;
  }
  var pr = () => {
    if (!lr.length) {
      var r2 = null;
      if ("undefined" != typeof window && "function" == typeof window.prompt ? null !== (r2 = window.prompt("Input: ")) && (r2 += "\n") : "function" == typeof readline && null !== (r2 = readline()) && (r2 += "\n"), !r2) return null;
      lr = hr(r2, true);
    }
    return lr.shift();
  }, fr = { ttys: [], init() {
  }, shutdown() {
  }, register(r2, e3) {
    fr.ttys[r2] = { input: [], output: [], ops: e3 }, Tr.registerDevice(r2, fr.stream_ops);
  }, stream_ops: { open(r2) {
    var e3 = fr.ttys[r2.node.rdev];
    if (!e3) throw new Tr.ErrnoError(43);
    r2.tty = e3, r2.seekable = false;
  }, close(r2) {
    r2.tty.ops.fsync(r2.tty);
  }, fsync(r2) {
    r2.tty.ops.fsync(r2.tty);
  }, read(r2, e3, t2, n2, o2) {
    if (!r2.tty || !r2.tty.ops.get_char) throw new Tr.ErrnoError(60);
    for (var a2 = 0, i2 = 0; i2 < n2; i2++) {
      var s2;
      try {
        s2 = r2.tty.ops.get_char(r2.tty);
      } catch (u2) {
        throw new Tr.ErrnoError(29);
      }
      if (void 0 === s2 && 0 === a2) throw new Tr.ErrnoError(6);
      if (null == s2) break;
      a2++, e3[t2 + i2] = s2;
    }
    return a2 && (r2.node.timestamp = Date.now()), a2;
  }, write(r2, e3, t2, n2, o2) {
    if (!r2.tty || !r2.tty.ops.put_char) throw new Tr.ErrnoError(60);
    try {
      for (var a2 = 0; a2 < n2; a2++) r2.tty.ops.put_char(r2.tty, e3[t2 + a2]);
    } catch (i2) {
      throw new Tr.ErrnoError(29);
    }
    return n2 && (r2.node.timestamp = Date.now()), a2;
  } }, default_tty_ops: { get_char: (r2) => pr(), put_char(r2, e3) {
    null === e3 || 10 === e3 ? (m(ur(r2.output, 0)), r2.output = []) : 0 != e3 && r2.output.push(e3);
  }, fsync(r2) {
    r2.output && r2.output.length > 0 && (m(ur(r2.output, 0)), r2.output = []);
  }, ioctl_tcgets: (r2) => ({ c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }), ioctl_tcsets: (r2, e3, t2) => 0, ioctl_tiocgwinsz: (r2) => [24, 80] }, default_tty1_ops: { put_char(r2, e3) {
    null === e3 || 10 === e3 ? (v(ur(r2.output, 0)), r2.output = []) : 0 != e3 && r2.output.push(e3);
  }, fsync(r2) {
    r2.output && r2.output.length > 0 && (v(ur(r2.output, 0)), r2.output = []);
  } } }, mr = (r2, e3) => (g.fill(0, r2, r2 + e3), r2), vr = (r2, e3) => Math.ceil(r2 / e3) * e3, yr = (r2) => {
    r2 = vr(r2, 65536);
    var e3 = Ln(65536, r2);
    return e3 ? mr(e3, r2) : 0;
  }, gr = { ops_table: null, mount: (r2) => gr.createNode(null, "/", 16895, 0), createNode(r2, e3, t2, n2) {
    if (Tr.isBlkdev(t2) || Tr.isFIFO(t2)) throw new Tr.ErrnoError(63);
    gr.ops_table || (gr.ops_table = { dir: { node: { getattr: gr.node_ops.getattr, setattr: gr.node_ops.setattr, lookup: gr.node_ops.lookup, mknod: gr.node_ops.mknod, rename: gr.node_ops.rename, unlink: gr.node_ops.unlink, rmdir: gr.node_ops.rmdir, readdir: gr.node_ops.readdir, symlink: gr.node_ops.symlink }, stream: { llseek: gr.stream_ops.llseek } }, file: { node: { getattr: gr.node_ops.getattr, setattr: gr.node_ops.setattr }, stream: { llseek: gr.stream_ops.llseek, read: gr.stream_ops.read, write: gr.stream_ops.write, allocate: gr.stream_ops.allocate, mmap: gr.stream_ops.mmap, msync: gr.stream_ops.msync } }, link: { node: { getattr: gr.node_ops.getattr, setattr: gr.node_ops.setattr, readlink: gr.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: gr.node_ops.getattr, setattr: gr.node_ops.setattr }, stream: Tr.chrdev_stream_ops } });
    var o2 = Tr.createNode(r2, e3, t2, n2);
    return Tr.isDir(o2.mode) ? (o2.node_ops = gr.ops_table.dir.node, o2.stream_ops = gr.ops_table.dir.stream, o2.contents = {}) : Tr.isFile(o2.mode) ? (o2.node_ops = gr.ops_table.file.node, o2.stream_ops = gr.ops_table.file.stream, o2.usedBytes = 0, o2.contents = null) : Tr.isLink(o2.mode) ? (o2.node_ops = gr.ops_table.link.node, o2.stream_ops = gr.ops_table.link.stream) : Tr.isChrdev(o2.mode) && (o2.node_ops = gr.ops_table.chrdev.node, o2.stream_ops = gr.ops_table.chrdev.stream), o2.timestamp = Date.now(), r2 && (r2.contents[e3] = o2, r2.timestamp = o2.timestamp), o2;
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
    return e3.dev = Tr.isChrdev(r2.mode) ? r2.id : 1, e3.ino = r2.id, e3.mode = r2.mode, e3.nlink = 1, e3.uid = 0, e3.gid = 0, e3.rdev = r2.rdev, Tr.isDir(r2.mode) ? e3.size = 4096 : Tr.isFile(r2.mode) ? e3.size = r2.usedBytes : Tr.isLink(r2.mode) ? e3.size = r2.link.length : e3.size = 0, e3.atime = new Date(r2.timestamp), e3.mtime = new Date(r2.timestamp), e3.ctime = new Date(r2.timestamp), e3.blksize = 4096, e3.blocks = Math.ceil(e3.size / e3.blksize), e3;
  }, setattr(r2, e3) {
    void 0 !== e3.mode && (r2.mode = e3.mode), void 0 !== e3.timestamp && (r2.timestamp = e3.timestamp), void 0 !== e3.size && gr.resizeFileStorage(r2, e3.size);
  }, lookup(r2, e3) {
    throw Tr.genericErrors[44];
  }, mknod: (r2, e3, t2, n2) => gr.createNode(r2, e3, t2, n2), rename(r2, e3, t2) {
    if (Tr.isDir(r2.mode)) {
      var n2;
      try {
        n2 = Tr.lookupNode(e3, t2);
      } catch (a2) {
      }
      if (n2) for (var o2 in n2.contents) throw new Tr.ErrnoError(55);
    }
    delete r2.parent.contents[r2.name], r2.parent.timestamp = Date.now(), r2.name = t2, e3.contents[t2] = r2, e3.timestamp = r2.parent.timestamp, r2.parent = e3;
  }, unlink(r2, e3) {
    delete r2.contents[e3], r2.timestamp = Date.now();
  }, rmdir(r2, e3) {
    var t2 = Tr.lookupNode(r2, e3);
    for (var n2 in t2.contents) throw new Tr.ErrnoError(55);
    delete r2.contents[e3], r2.timestamp = Date.now();
  }, readdir(r2) {
    var e3 = [".", ".."];
    for (var t2 in r2.contents) r2.contents.hasOwnProperty(t2) && e3.push(t2);
    return e3;
  }, symlink(r2, e3, t2) {
    var n2 = gr.createNode(r2, e3, 41471, 0);
    return n2.link = t2, n2;
  }, readlink(r2) {
    if (!Tr.isLink(r2.mode)) throw new Tr.ErrnoError(28);
    return r2.link;
  } }, stream_ops: { read(r2, e3, t2, n2, o2) {
    var a2 = r2.node.contents;
    if (o2 >= r2.node.usedBytes) return 0;
    var i2 = Math.min(r2.node.usedBytes - o2, n2);
    if (i2 > 8 && a2.subarray) e3.set(a2.subarray(o2, o2 + i2), t2);
    else for (var s2 = 0; s2 < i2; s2++) e3[t2 + s2] = a2[o2 + s2];
    return i2;
  }, write(r2, e3, t2, n2, o2, a2) {
    if (e3.buffer === y.buffer && (a2 = false), !n2) return 0;
    var i2 = r2.node;
    if (i2.timestamp = Date.now(), e3.subarray && (!i2.contents || i2.contents.subarray)) {
      if (a2) return i2.contents = e3.subarray(t2, t2 + n2), i2.usedBytes = n2, n2;
      if (0 === i2.usedBytes && 0 === o2) return i2.contents = e3.slice(t2, t2 + n2), i2.usedBytes = n2, n2;
      if (o2 + n2 <= i2.usedBytes) return i2.contents.set(e3.subarray(t2, t2 + n2), o2), n2;
    }
    if (gr.expandFileStorage(i2, o2 + n2), i2.contents.subarray && e3.subarray) i2.contents.set(e3.subarray(t2, t2 + n2), o2);
    else for (var s2 = 0; s2 < n2; s2++) i2.contents[o2 + s2] = e3[t2 + s2];
    return i2.usedBytes = Math.max(i2.usedBytes, o2 + n2), n2;
  }, llseek(r2, e3, t2) {
    var n2 = e3;
    if (1 === t2 ? n2 += r2.position : 2 === t2 && Tr.isFile(r2.node.mode) && (n2 += r2.node.usedBytes), n2 < 0) throw new Tr.ErrnoError(28);
    return n2;
  }, allocate(r2, e3, t2) {
    gr.expandFileStorage(r2.node, e3 + t2), r2.node.usedBytes = Math.max(r2.node.usedBytes, e3 + t2);
  }, mmap(r2, e3, t2, n2, o2) {
    if (!Tr.isFile(r2.node.mode)) throw new Tr.ErrnoError(43);
    var a2, i2, s2 = r2.node.contents;
    if (2 & o2 || s2.buffer !== y.buffer) {
      if ((t2 > 0 || t2 + e3 < s2.length) && (s2 = s2.subarray ? s2.subarray(t2, t2 + e3) : Array.prototype.slice.call(s2, t2, t2 + e3)), i2 = true, !(a2 = yr(e3))) throw new Tr.ErrnoError(48);
      y.set(s2, a2);
    } else i2 = false, a2 = s2.byteOffset;
    return { ptr: a2, allocated: i2 };
  }, msync: (r2, e3, t2, n2, o2) => (gr.stream_ops.write(r2, e3, 0, n2, t2, false), 0) } }, wr = (r2, e3, t2, n2) => {
    var o2 = N(`al ${r2}`);
    i(r2, (t3) => {
      T(t3, `Loading data file "${r2}" failed (no arrayBuffer).`), e3(new Uint8Array(t3)), o2 && B();
    }, (e4) => {
      if (!t2) throw `Loading data file "${r2}" failed.`;
      t2();
    }), o2 && H();
  }, Er = (r2, e3, t2, n2, o2, a2) => Tr.createDataFile(r2, e3, t2, n2, o2, a2), _r = o.preloadPlugins || [], br = (r2, e3, t2, n2) => {
    "undefined" != typeof Browser && Browser.init();
    var o2 = false;
    return _r.forEach((a2) => {
      o2 || a2.canHandle(e3) && (a2.handle(r2, e3, t2, n2), o2 = true);
    }), o2;
  }, kr = (r2, e3, t2, n2, o2, a2, i2, s2, u2, l2) => {
    var c2 = e3 ? ir.resolve(nr.join2(r2, e3)) : r2;
    function d2(t3) {
      function d3(t4) {
        l2 && l2(), s2 || Er(r2, e3, t4, n2, o2, u2), a2 && a2(), B();
      }
      br(t3, c2, d3, () => {
        i2 && i2(), B();
      }) || d3(t3);
    }
    H(), "string" == typeof t2 ? wr(t2, (r3) => d2(r3), i2) : d2(t2);
  }, $r = (r2) => {
    var e3 = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[r2];
    if (void 0 === e3) throw new Error(`Unknown file open mode: ${r2}`);
    return e3;
  }, Pr = (r2, e3) => {
    var t2 = 0;
    return r2 && (t2 |= 365), e3 && (t2 |= 146), t2;
  }, Tr = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath(r2, e3 = {}) {
    if (!(r2 = ir.resolve(r2))) return { path: "", node: null };
    var t2 = { follow_mount: true, recurse_count: 0 };
    if ((e3 = Object.assign(t2, e3)).recurse_count > 8) throw new Tr.ErrnoError(32);
    for (var n2 = r2.split("/").filter((r3) => !!r3), o2 = Tr.root, a2 = "/", i2 = 0; i2 < n2.length; i2++) {
      var s2 = i2 === n2.length - 1;
      if (s2 && e3.parent) break;
      if (o2 = Tr.lookupNode(o2, n2[i2]), a2 = nr.join2(a2, n2[i2]), Tr.isMountpoint(o2) && (!s2 || s2 && e3.follow_mount) && (o2 = o2.mounted.root), !s2 || e3.follow) for (var u2 = 0; Tr.isLink(o2.mode); ) {
        var l2 = Tr.readlink(a2);
        if (a2 = ir.resolve(nr.dirname(a2), l2), o2 = Tr.lookupPath(a2, { recurse_count: e3.recurse_count + 1 }).node, u2++ > 40) throw new Tr.ErrnoError(32);
      }
    }
    return { path: a2, node: o2 };
  }, getPath(r2) {
    for (var e3; ; ) {
      if (Tr.isRoot(r2)) {
        var t2 = r2.mount.mountpoint;
        return e3 ? "/" !== t2[t2.length - 1] ? `${t2}/${e3}` : t2 + e3 : t2;
      }
      e3 = e3 ? `${r2.name}/${e3}` : r2.name, r2 = r2.parent;
    }
  }, hashName(r2, e3) {
    for (var t2 = 0, n2 = 0; n2 < e3.length; n2++) t2 = (t2 << 5) - t2 + e3.charCodeAt(n2) | 0;
    return (r2 + t2 >>> 0) % Tr.nameTable.length;
  }, hashAddNode(r2) {
    var e3 = Tr.hashName(r2.parent.id, r2.name);
    r2.name_next = Tr.nameTable[e3], Tr.nameTable[e3] = r2;
  }, hashRemoveNode(r2) {
    var e3 = Tr.hashName(r2.parent.id, r2.name);
    if (Tr.nameTable[e3] === r2) Tr.nameTable[e3] = r2.name_next;
    else for (var t2 = Tr.nameTable[e3]; t2; ) {
      if (t2.name_next === r2) {
        t2.name_next = r2.name_next;
        break;
      }
      t2 = t2.name_next;
    }
  }, lookupNode(r2, e3) {
    var t2 = Tr.mayLookup(r2);
    if (t2) throw new Tr.ErrnoError(t2, r2);
    for (var n2 = Tr.hashName(r2.id, e3), o2 = Tr.nameTable[n2]; o2; o2 = o2.name_next) {
      var a2 = o2.name;
      if (o2.parent.id === r2.id && a2 === e3) return o2;
    }
    return Tr.lookup(r2, e3);
  }, createNode(r2, e3, t2, n2) {
    var o2 = new Tr.FSNode(r2, e3, t2, n2);
    return Tr.hashAddNode(o2), o2;
  }, destroyNode(r2) {
    Tr.hashRemoveNode(r2);
  }, isRoot: (r2) => r2 === r2.parent, isMountpoint: (r2) => !!r2.mounted, isFile: (r2) => 32768 == (61440 & r2), isDir: (r2) => 16384 == (61440 & r2), isLink: (r2) => 40960 == (61440 & r2), isChrdev: (r2) => 8192 == (61440 & r2), isBlkdev: (r2) => 24576 == (61440 & r2), isFIFO: (r2) => 4096 == (61440 & r2), isSocket: (r2) => !(49152 & ~r2), flagsToPermissionString(r2) {
    var e3 = ["r", "w", "rw"][3 & r2];
    return 512 & r2 && (e3 += "w"), e3;
  }, nodePermissions: (r2, e3) => Tr.ignorePermissions || (!e3.includes("r") || 292 & r2.mode) && (!e3.includes("w") || 146 & r2.mode) && (!e3.includes("x") || 73 & r2.mode) ? 0 : 2, mayLookup(r2) {
    var e3 = Tr.nodePermissions(r2, "x");
    return e3 || (r2.node_ops.lookup ? 0 : 2);
  }, mayCreate(r2, e3) {
    try {
      return Tr.lookupNode(r2, e3), 20;
    } catch (t2) {
    }
    return Tr.nodePermissions(r2, "wx");
  }, mayDelete(r2, e3, t2) {
    var n2;
    try {
      n2 = Tr.lookupNode(r2, e3);
    } catch (a2) {
      return a2.errno;
    }
    var o2 = Tr.nodePermissions(r2, "wx");
    if (o2) return o2;
    if (t2) {
      if (!Tr.isDir(n2.mode)) return 54;
      if (Tr.isRoot(n2) || Tr.getPath(n2) === Tr.cwd()) return 10;
    } else if (Tr.isDir(n2.mode)) return 31;
    return 0;
  }, mayOpen: (r2, e3) => r2 ? Tr.isLink(r2.mode) ? 32 : Tr.isDir(r2.mode) && ("r" !== Tr.flagsToPermissionString(e3) || 512 & e3) ? 31 : Tr.nodePermissions(r2, Tr.flagsToPermissionString(e3)) : 44, MAX_OPEN_FDS: 4096, nextfd() {
    for (var r2 = 0; r2 <= Tr.MAX_OPEN_FDS; r2++) if (!Tr.streams[r2]) return r2;
    throw new Tr.ErrnoError(33);
  }, getStreamChecked(r2) {
    var e3 = Tr.getStream(r2);
    if (!e3) throw new Tr.ErrnoError(8);
    return e3;
  }, getStream: (r2) => Tr.streams[r2], createStream: (r2, e3 = -1) => (Tr.FSStream || (Tr.FSStream = function() {
    this.shared = {};
  }, Tr.FSStream.prototype = {}, Object.defineProperties(Tr.FSStream.prototype, { object: { get() {
    return this.node;
  }, set(r3) {
    this.node = r3;
  } }, isRead: { get() {
    return 1 != (2097155 & this.flags);
  } }, isWrite: { get() {
    return !!(2097155 & this.flags);
  } }, isAppend: { get() {
    return 1024 & this.flags;
  } }, flags: { get() {
    return this.shared.flags;
  }, set(r3) {
    this.shared.flags = r3;
  } }, position: { get() {
    return this.shared.position;
  }, set(r3) {
    this.shared.position = r3;
  } } })), r2 = Object.assign(new Tr.FSStream(), r2), -1 == e3 && (e3 = Tr.nextfd()), r2.fd = e3, Tr.streams[e3] = r2, r2), closeStream(r2) {
    Tr.streams[r2] = null;
  }, chrdev_stream_ops: { open(r2) {
    var e3 = Tr.getDevice(r2.node.rdev);
    r2.stream_ops = e3.stream_ops, r2.stream_ops.open && r2.stream_ops.open(r2);
  }, llseek() {
    throw new Tr.ErrnoError(70);
  } }, major: (r2) => r2 >> 8, minor: (r2) => 255 & r2, makedev: (r2, e3) => r2 << 8 | e3, registerDevice(r2, e3) {
    Tr.devices[r2] = { stream_ops: e3 };
  }, getDevice: (r2) => Tr.devices[r2], getMounts(r2) {
    for (var e3 = [], t2 = [r2]; t2.length; ) {
      var n2 = t2.pop();
      e3.push(n2), t2.push.apply(t2, n2.mounts);
    }
    return e3;
  }, syncfs(r2, e3) {
    "function" == typeof r2 && (e3 = r2, r2 = false), Tr.syncFSRequests++, Tr.syncFSRequests > 1 && v(`warning: ${Tr.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
    var t2 = Tr.getMounts(Tr.root.mount), n2 = 0;
    function o2(r3) {
      return Tr.syncFSRequests--, e3(r3);
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
    if (o2 && Tr.root) throw new Tr.ErrnoError(10);
    if (!o2 && !a2) {
      var i2 = Tr.lookupPath(t2, { follow_mount: false });
      if (t2 = i2.path, n2 = i2.node, Tr.isMountpoint(n2)) throw new Tr.ErrnoError(10);
      if (!Tr.isDir(n2.mode)) throw new Tr.ErrnoError(54);
    }
    var s2 = { type: r2, opts: e3, mountpoint: t2, mounts: [] }, u2 = r2.mount(s2);
    return u2.mount = s2, s2.root = u2, o2 ? Tr.root = u2 : n2 && (n2.mounted = s2, n2.mount && n2.mount.mounts.push(s2)), u2;
  }, unmount(r2) {
    var e3 = Tr.lookupPath(r2, { follow_mount: false });
    if (!Tr.isMountpoint(e3.node)) throw new Tr.ErrnoError(28);
    var t2 = e3.node, n2 = t2.mounted, o2 = Tr.getMounts(n2);
    Object.keys(Tr.nameTable).forEach((r3) => {
      for (var e4 = Tr.nameTable[r3]; e4; ) {
        var t3 = e4.name_next;
        o2.includes(e4.mount) && Tr.destroyNode(e4), e4 = t3;
      }
    }), t2.mounted = null;
    var a2 = t2.mount.mounts.indexOf(n2);
    t2.mount.mounts.splice(a2, 1);
  }, lookup: (r2, e3) => r2.node_ops.lookup(r2, e3), mknod(r2, e3, t2) {
    var n2 = Tr.lookupPath(r2, { parent: true }).node, o2 = nr.basename(r2);
    if (!o2 || "." === o2 || ".." === o2) throw new Tr.ErrnoError(28);
    var a2 = Tr.mayCreate(n2, o2);
    if (a2) throw new Tr.ErrnoError(a2);
    if (!n2.node_ops.mknod) throw new Tr.ErrnoError(63);
    return n2.node_ops.mknod(n2, o2, e3, t2);
  }, create: (r2, e3) => (e3 = void 0 !== e3 ? e3 : 438, e3 &= 4095, e3 |= 32768, Tr.mknod(r2, e3, 0)), mkdir: (r2, e3) => (e3 = void 0 !== e3 ? e3 : 511, e3 &= 1023, e3 |= 16384, Tr.mknod(r2, e3, 0)), mkdirTree(r2, e3) {
    for (var t2 = r2.split("/"), n2 = "", o2 = 0; o2 < t2.length; ++o2) if (t2[o2]) {
      n2 += "/" + t2[o2];
      try {
        Tr.mkdir(n2, e3);
      } catch (a2) {
        if (20 != a2.errno) throw a2;
      }
    }
  }, mkdev: (r2, e3, t2) => (void 0 === t2 && (t2 = e3, e3 = 438), e3 |= 8192, Tr.mknod(r2, e3, t2)), symlink(r2, e3) {
    if (!ir.resolve(r2)) throw new Tr.ErrnoError(44);
    var t2 = Tr.lookupPath(e3, { parent: true }).node;
    if (!t2) throw new Tr.ErrnoError(44);
    var n2 = nr.basename(e3), o2 = Tr.mayCreate(t2, n2);
    if (o2) throw new Tr.ErrnoError(o2);
    if (!t2.node_ops.symlink) throw new Tr.ErrnoError(63);
    return t2.node_ops.symlink(t2, n2, r2);
  }, rename(r2, e3) {
    var t2, n2, o2 = nr.dirname(r2), a2 = nr.dirname(e3), i2 = nr.basename(r2), s2 = nr.basename(e3);
    if (t2 = Tr.lookupPath(r2, { parent: true }).node, n2 = Tr.lookupPath(e3, { parent: true }).node, !t2 || !n2) throw new Tr.ErrnoError(44);
    if (t2.mount !== n2.mount) throw new Tr.ErrnoError(75);
    var u2, l2 = Tr.lookupNode(t2, i2), c2 = ir.relative(r2, a2);
    if ("." !== c2.charAt(0)) throw new Tr.ErrnoError(28);
    if ("." !== (c2 = ir.relative(e3, o2)).charAt(0)) throw new Tr.ErrnoError(55);
    try {
      u2 = Tr.lookupNode(n2, s2);
    } catch (p2) {
    }
    if (l2 !== u2) {
      var d2 = Tr.isDir(l2.mode), h2 = Tr.mayDelete(t2, i2, d2);
      if (h2) throw new Tr.ErrnoError(h2);
      if (h2 = u2 ? Tr.mayDelete(n2, s2, d2) : Tr.mayCreate(n2, s2)) throw new Tr.ErrnoError(h2);
      if (!t2.node_ops.rename) throw new Tr.ErrnoError(63);
      if (Tr.isMountpoint(l2) || u2 && Tr.isMountpoint(u2)) throw new Tr.ErrnoError(10);
      if (n2 !== t2 && (h2 = Tr.nodePermissions(t2, "w"))) throw new Tr.ErrnoError(h2);
      Tr.hashRemoveNode(l2);
      try {
        t2.node_ops.rename(l2, n2, s2);
      } catch (p2) {
        throw p2;
      } finally {
        Tr.hashAddNode(l2);
      }
    }
  }, rmdir(r2) {
    var e3 = Tr.lookupPath(r2, { parent: true }).node, t2 = nr.basename(r2), n2 = Tr.lookupNode(e3, t2), o2 = Tr.mayDelete(e3, t2, true);
    if (o2) throw new Tr.ErrnoError(o2);
    if (!e3.node_ops.rmdir) throw new Tr.ErrnoError(63);
    if (Tr.isMountpoint(n2)) throw new Tr.ErrnoError(10);
    e3.node_ops.rmdir(e3, t2), Tr.destroyNode(n2);
  }, readdir(r2) {
    var e3 = Tr.lookupPath(r2, { follow: true }).node;
    if (!e3.node_ops.readdir) throw new Tr.ErrnoError(54);
    return e3.node_ops.readdir(e3);
  }, unlink(r2) {
    var e3 = Tr.lookupPath(r2, { parent: true }).node;
    if (!e3) throw new Tr.ErrnoError(44);
    var t2 = nr.basename(r2), n2 = Tr.lookupNode(e3, t2), o2 = Tr.mayDelete(e3, t2, false);
    if (o2) throw new Tr.ErrnoError(o2);
    if (!e3.node_ops.unlink) throw new Tr.ErrnoError(63);
    if (Tr.isMountpoint(n2)) throw new Tr.ErrnoError(10);
    e3.node_ops.unlink(e3, t2), Tr.destroyNode(n2);
  }, readlink(r2) {
    var e3 = Tr.lookupPath(r2).node;
    if (!e3) throw new Tr.ErrnoError(44);
    if (!e3.node_ops.readlink) throw new Tr.ErrnoError(28);
    return ir.resolve(Tr.getPath(e3.parent), e3.node_ops.readlink(e3));
  }, stat(r2, e3) {
    var t2 = Tr.lookupPath(r2, { follow: !e3 }).node;
    if (!t2) throw new Tr.ErrnoError(44);
    if (!t2.node_ops.getattr) throw new Tr.ErrnoError(63);
    return t2.node_ops.getattr(t2);
  }, lstat: (r2) => Tr.stat(r2, true), chmod(r2, e3, t2) {
    var n2;
    if (!(n2 = "string" == typeof r2 ? Tr.lookupPath(r2, { follow: !t2 }).node : r2).node_ops.setattr) throw new Tr.ErrnoError(63);
    n2.node_ops.setattr(n2, { mode: 4095 & e3 | -4096 & n2.mode, timestamp: Date.now() });
  }, lchmod(r2, e3) {
    Tr.chmod(r2, e3, true);
  }, fchmod(r2, e3) {
    var t2 = Tr.getStreamChecked(r2);
    Tr.chmod(t2.node, e3);
  }, chown(r2, e3, t2, n2) {
    var o2;
    if (!(o2 = "string" == typeof r2 ? Tr.lookupPath(r2, { follow: !n2 }).node : r2).node_ops.setattr) throw new Tr.ErrnoError(63);
    o2.node_ops.setattr(o2, { timestamp: Date.now() });
  }, lchown(r2, e3, t2) {
    Tr.chown(r2, e3, t2, true);
  }, fchown(r2, e3, t2) {
    var n2 = Tr.getStreamChecked(r2);
    Tr.chown(n2.node, e3, t2);
  }, truncate(r2, e3) {
    if (e3 < 0) throw new Tr.ErrnoError(28);
    var t2;
    if (!(t2 = "string" == typeof r2 ? Tr.lookupPath(r2, { follow: true }).node : r2).node_ops.setattr) throw new Tr.ErrnoError(63);
    if (Tr.isDir(t2.mode)) throw new Tr.ErrnoError(31);
    if (!Tr.isFile(t2.mode)) throw new Tr.ErrnoError(28);
    var n2 = Tr.nodePermissions(t2, "w");
    if (n2) throw new Tr.ErrnoError(n2);
    t2.node_ops.setattr(t2, { size: e3, timestamp: Date.now() });
  }, ftruncate(r2, e3) {
    var t2 = Tr.getStreamChecked(r2);
    if (!(2097155 & t2.flags)) throw new Tr.ErrnoError(28);
    Tr.truncate(t2.node, e3);
  }, utime(r2, e3, t2) {
    var n2 = Tr.lookupPath(r2, { follow: true }).node;
    n2.node_ops.setattr(n2, { timestamp: Math.max(e3, t2) });
  }, open(r2, e3, t2) {
    if ("" === r2) throw new Tr.ErrnoError(44);
    var n2;
    if (t2 = void 0 === t2 ? 438 : t2, t2 = 64 & (e3 = "string" == typeof e3 ? $r(e3) : e3) ? 4095 & t2 | 32768 : 0, "object" == typeof r2) n2 = r2;
    else {
      r2 = nr.normalize(r2);
      try {
        n2 = Tr.lookupPath(r2, { follow: !(131072 & e3) }).node;
      } catch (u2) {
      }
    }
    var a2 = false;
    if (64 & e3) if (n2) {
      if (128 & e3) throw new Tr.ErrnoError(20);
    } else n2 = Tr.mknod(r2, t2, 0), a2 = true;
    if (!n2) throw new Tr.ErrnoError(44);
    if (Tr.isChrdev(n2.mode) && (e3 &= -513), 65536 & e3 && !Tr.isDir(n2.mode)) throw new Tr.ErrnoError(54);
    if (!a2) {
      var i2 = Tr.mayOpen(n2, e3);
      if (i2) throw new Tr.ErrnoError(i2);
    }
    512 & e3 && !a2 && Tr.truncate(n2, 0), e3 &= -131713;
    var s2 = Tr.createStream({ node: n2, path: Tr.getPath(n2), flags: e3, seekable: true, position: 0, stream_ops: n2.stream_ops, ungotten: [], error: false });
    return s2.stream_ops.open && s2.stream_ops.open(s2), !o.logReadFiles || 1 & e3 || (Tr.readFiles || (Tr.readFiles = {}), r2 in Tr.readFiles || (Tr.readFiles[r2] = 1)), s2;
  }, close(r2) {
    if (Tr.isClosed(r2)) throw new Tr.ErrnoError(8);
    r2.getdents && (r2.getdents = null);
    try {
      r2.stream_ops.close && r2.stream_ops.close(r2);
    } catch (e3) {
      throw e3;
    } finally {
      Tr.closeStream(r2.fd);
    }
    r2.fd = null;
  }, isClosed: (r2) => null === r2.fd, llseek(r2, e3, t2) {
    if (Tr.isClosed(r2)) throw new Tr.ErrnoError(8);
    if (!r2.seekable || !r2.stream_ops.llseek) throw new Tr.ErrnoError(70);
    if (0 != t2 && 1 != t2 && 2 != t2) throw new Tr.ErrnoError(28);
    return r2.position = r2.stream_ops.llseek(r2, e3, t2), r2.ungotten = [], r2.position;
  }, read(r2, e3, t2, n2, o2) {
    if (n2 < 0 || o2 < 0) throw new Tr.ErrnoError(28);
    if (Tr.isClosed(r2)) throw new Tr.ErrnoError(8);
    if (1 == (2097155 & r2.flags)) throw new Tr.ErrnoError(8);
    if (Tr.isDir(r2.node.mode)) throw new Tr.ErrnoError(31);
    if (!r2.stream_ops.read) throw new Tr.ErrnoError(28);
    var a2 = void 0 !== o2;
    if (a2) {
      if (!r2.seekable) throw new Tr.ErrnoError(70);
    } else o2 = r2.position;
    var i2 = r2.stream_ops.read(r2, e3, t2, n2, o2);
    return a2 || (r2.position += i2), i2;
  }, write(r2, e3, t2, n2, o2, a2) {
    if (n2 < 0 || o2 < 0) throw new Tr.ErrnoError(28);
    if (Tr.isClosed(r2)) throw new Tr.ErrnoError(8);
    if (!(2097155 & r2.flags)) throw new Tr.ErrnoError(8);
    if (Tr.isDir(r2.node.mode)) throw new Tr.ErrnoError(31);
    if (!r2.stream_ops.write) throw new Tr.ErrnoError(28);
    r2.seekable && 1024 & r2.flags && Tr.llseek(r2, 0, 2);
    var i2 = void 0 !== o2;
    if (i2) {
      if (!r2.seekable) throw new Tr.ErrnoError(70);
    } else o2 = r2.position;
    var s2 = r2.stream_ops.write(r2, e3, t2, n2, o2, a2);
    return i2 || (r2.position += s2), s2;
  }, allocate(r2, e3, t2) {
    if (Tr.isClosed(r2)) throw new Tr.ErrnoError(8);
    if (e3 < 0 || t2 <= 0) throw new Tr.ErrnoError(28);
    if (!(2097155 & r2.flags)) throw new Tr.ErrnoError(8);
    if (!Tr.isFile(r2.node.mode) && !Tr.isDir(r2.node.mode)) throw new Tr.ErrnoError(43);
    if (!r2.stream_ops.allocate) throw new Tr.ErrnoError(138);
    r2.stream_ops.allocate(r2, e3, t2);
  }, mmap(r2, e3, t2, n2, o2) {
    if (2 & n2 && !(2 & o2) && 2 != (2097155 & r2.flags)) throw new Tr.ErrnoError(2);
    if (1 == (2097155 & r2.flags)) throw new Tr.ErrnoError(2);
    if (!r2.stream_ops.mmap) throw new Tr.ErrnoError(43);
    return r2.stream_ops.mmap(r2, e3, t2, n2, o2);
  }, msync: (r2, e3, t2, n2, o2) => r2.stream_ops.msync ? r2.stream_ops.msync(r2, e3, t2, n2, o2) : 0, munmap: (r2) => 0, ioctl(r2, e3, t2) {
    if (!r2.stream_ops.ioctl) throw new Tr.ErrnoError(59);
    return r2.stream_ops.ioctl(r2, e3, t2);
  }, readFile(r2, e3 = {}) {
    if (e3.flags = e3.flags || 0, e3.encoding = e3.encoding || "binary", "utf8" !== e3.encoding && "binary" !== e3.encoding) throw new Error(`Invalid encoding type "${e3.encoding}"`);
    var t2, n2 = Tr.open(r2, e3.flags), o2 = Tr.stat(r2).size, a2 = new Uint8Array(o2);
    return Tr.read(n2, a2, 0, o2, 0), "utf8" === e3.encoding ? t2 = ur(a2, 0) : "binary" === e3.encoding && (t2 = a2), Tr.close(n2), t2;
  }, writeFile(r2, e3, t2 = {}) {
    t2.flags = t2.flags || 577;
    var n2 = Tr.open(r2, t2.flags, t2.mode);
    if ("string" == typeof e3) {
      var o2 = new Uint8Array(cr(e3) + 1), a2 = dr(e3, o2, 0, o2.length);
      Tr.write(n2, o2, 0, a2, void 0, t2.canOwn);
    } else {
      if (!ArrayBuffer.isView(e3)) throw new Error("Unsupported data type");
      Tr.write(n2, e3, 0, e3.byteLength, void 0, t2.canOwn);
    }
    Tr.close(n2);
  }, cwd: () => Tr.currentPath, chdir(r2) {
    var e3 = Tr.lookupPath(r2, { follow: true });
    if (null === e3.node) throw new Tr.ErrnoError(44);
    if (!Tr.isDir(e3.node.mode)) throw new Tr.ErrnoError(54);
    var t2 = Tr.nodePermissions(e3.node, "x");
    if (t2) throw new Tr.ErrnoError(t2);
    Tr.currentPath = e3.path;
  }, createDefaultDirectories() {
    Tr.mkdir("/tmp"), Tr.mkdir("/home"), Tr.mkdir("/home/web_user");
  }, createDefaultDevices() {
    Tr.mkdir("/dev"), Tr.registerDevice(Tr.makedev(1, 3), { read: () => 0, write: (r3, e4, t3, n2, o2) => n2 }), Tr.mkdev("/dev/null", Tr.makedev(1, 3)), fr.register(Tr.makedev(5, 0), fr.default_tty_ops), fr.register(Tr.makedev(6, 0), fr.default_tty1_ops), Tr.mkdev("/dev/tty", Tr.makedev(5, 0)), Tr.mkdev("/dev/tty1", Tr.makedev(6, 0));
    var r2 = new Uint8Array(1024), e3 = 0, t2 = () => (0 === e3 && (e3 = ar(r2).byteLength), r2[--e3]);
    Tr.createDevice("/dev", "random", t2), Tr.createDevice("/dev", "urandom", t2), Tr.mkdir("/dev/shm"), Tr.mkdir("/dev/shm/tmp");
  }, createSpecialDirectories() {
    Tr.mkdir("/proc");
    var r2 = Tr.mkdir("/proc/self");
    Tr.mkdir("/proc/self/fd"), Tr.mount({ mount() {
      var e3 = Tr.createNode(r2, "fd", 16895, 73);
      return e3.node_ops = { lookup(r3, e4) {
        var t2 = +e4, n2 = Tr.getStreamChecked(t2), o2 = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => n2.path } };
        return o2.parent = o2, o2;
      } }, e3;
    } }, {}, "/proc/self/fd");
  }, createStandardStreams() {
    o.stdin ? Tr.createDevice("/dev", "stdin", o.stdin) : Tr.symlink("/dev/tty", "/dev/stdin"), o.stdout ? Tr.createDevice("/dev", "stdout", null, o.stdout) : Tr.symlink("/dev/tty", "/dev/stdout"), o.stderr ? Tr.createDevice("/dev", "stderr", null, o.stderr) : Tr.symlink("/dev/tty1", "/dev/stderr"), Tr.open("/dev/stdin", 0), Tr.open("/dev/stdout", 1), Tr.open("/dev/stderr", 1);
  }, ensureErrnoError() {
    Tr.ErrnoError || (Tr.ErrnoError = function(r2, e3) {
      this.name = "ErrnoError", this.node = e3, this.setErrno = function(r3) {
        this.errno = r3;
      }, this.setErrno(r2), this.message = "FS error";
    }, Tr.ErrnoError.prototype = new Error(), Tr.ErrnoError.prototype.constructor = Tr.ErrnoError, [44].forEach((r2) => {
      Tr.genericErrors[r2] = new Tr.ErrnoError(r2), Tr.genericErrors[r2].stack = "<generic error, no stack>";
    }));
  }, staticInit() {
    Tr.ensureErrnoError(), Tr.nameTable = new Array(4096), Tr.mount(gr, {}, "/"), Tr.createDefaultDirectories(), Tr.createDefaultDevices(), Tr.createSpecialDirectories(), Tr.filesystems = { MEMFS: gr };
  }, init(r2, e3, t2) {
    Tr.init.initialized = true, Tr.ensureErrnoError(), o.stdin = r2 || o.stdin, o.stdout = e3 || o.stdout, o.stderr = t2 || o.stderr, Tr.createStandardStreams();
  }, quit() {
    Tr.init.initialized = false;
    for (var r2 = 0; r2 < Tr.streams.length; r2++) {
      var e3 = Tr.streams[r2];
      e3 && Tr.close(e3);
    }
  }, findObject(r2, e3) {
    var t2 = Tr.analyzePath(r2, e3);
    return t2.exists ? t2.object : null;
  }, analyzePath(r2, e3) {
    try {
      r2 = (n2 = Tr.lookupPath(r2, { follow: !e3 })).path;
    } catch (o2) {
    }
    var t2 = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
    try {
      var n2 = Tr.lookupPath(r2, { parent: true });
      t2.parentExists = true, t2.parentPath = n2.path, t2.parentObject = n2.node, t2.name = nr.basename(r2), n2 = Tr.lookupPath(r2, { follow: !e3 }), t2.exists = true, t2.path = n2.path, t2.object = n2.node, t2.name = n2.node.name, t2.isRoot = "/" === n2.path;
    } catch (o2) {
      t2.error = o2.errno;
    }
    return t2;
  }, createPath(r2, e3, t2, n2) {
    r2 = "string" == typeof r2 ? r2 : Tr.getPath(r2);
    for (var o2 = e3.split("/").reverse(); o2.length; ) {
      var a2 = o2.pop();
      if (a2) {
        var i2 = nr.join2(r2, a2);
        try {
          Tr.mkdir(i2);
        } catch (s2) {
        }
        r2 = i2;
      }
    }
    return i2;
  }, createFile(r2, e3, t2, n2, o2) {
    var a2 = nr.join2("string" == typeof r2 ? r2 : Tr.getPath(r2), e3), i2 = Pr(n2, o2);
    return Tr.create(a2, i2);
  }, createDataFile(r2, e3, t2, n2, o2, a2) {
    var i2 = e3;
    r2 && (r2 = "string" == typeof r2 ? r2 : Tr.getPath(r2), i2 = e3 ? nr.join2(r2, e3) : r2);
    var s2 = Pr(n2, o2), u2 = Tr.create(i2, s2);
    if (t2) {
      if ("string" == typeof t2) {
        for (var l2 = new Array(t2.length), c2 = 0, d2 = t2.length; c2 < d2; ++c2) l2[c2] = t2.charCodeAt(c2);
        t2 = l2;
      }
      Tr.chmod(u2, 146 | s2);
      var h2 = Tr.open(u2, 577);
      Tr.write(h2, t2, 0, t2.length, 0, a2), Tr.close(h2), Tr.chmod(u2, s2);
    }
    return u2;
  }, createDevice(r2, e3, t2, n2) {
    var o2 = nr.join2("string" == typeof r2 ? r2 : Tr.getPath(r2), e3), a2 = Pr(!!t2, !!n2);
    Tr.createDevice.major || (Tr.createDevice.major = 64);
    var i2 = Tr.makedev(Tr.createDevice.major++, 0);
    return Tr.registerDevice(i2, { open(r3) {
      r3.seekable = false;
    }, close(r3) {
      n2 && n2.buffer && n2.buffer.length && n2(10);
    }, read(r3, e4, n3, o3, a3) {
      for (var i3 = 0, s2 = 0; s2 < o3; s2++) {
        var u2;
        try {
          u2 = t2();
        } catch (l2) {
          throw new Tr.ErrnoError(29);
        }
        if (void 0 === u2 && 0 === i3) throw new Tr.ErrnoError(6);
        if (null == u2) break;
        i3++, e4[n3 + s2] = u2;
      }
      return i3 && (r3.node.timestamp = Date.now()), i3;
    }, write(r3, e4, t3, o3, a3) {
      for (var i3 = 0; i3 < o3; i3++) try {
        n2(e4[t3 + i3]);
      } catch (s2) {
        throw new Tr.ErrnoError(29);
      }
      return o3 && (r3.node.timestamp = Date.now()), i3;
    } }), Tr.mkdev(o2, a2, i2);
  }, forceLoadFile(r2) {
    if (r2.isDevice || r2.isFolder || r2.link || r2.contents) return true;
    if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    if (!a) throw new Error("Cannot load without read() or XMLHttpRequest.");
    try {
      r2.contents = hr(a(r2.url), true), r2.usedBytes = r2.contents.length;
    } catch (e3) {
      throw new Tr.ErrnoError(29);
    }
  }, createLazyFile(r2, e3, t2, n2, o2) {
    function a2() {
      this.lengthKnown = false, this.chunks = [];
    }
    if (a2.prototype.get = function(r3) {
      if (!(r3 > this.length - 1 || r3 < 0)) {
        var e4 = r3 % this.chunkSize, t3 = r3 / this.chunkSize | 0;
        return this.getter(t3)[e4];
      }
    }, a2.prototype.setDataGetter = function(r3) {
      this.getter = r3;
    }, a2.prototype.cacheLength = function() {
      var r3 = new XMLHttpRequest();
      if (r3.open("HEAD", t2, false), r3.send(null), !(r3.status >= 200 && r3.status < 300 || 304 === r3.status)) throw new Error("Couldn't load " + t2 + ". Status: " + r3.status);
      var e4, n3 = Number(r3.getResponseHeader("Content-length")), o3 = (e4 = r3.getResponseHeader("Accept-Ranges")) && "bytes" === e4, a3 = (e4 = r3.getResponseHeader("Content-Encoding")) && "gzip" === e4, i3 = 1048576;
      o3 || (i3 = n3);
      var s3 = (r4, e5) => {
        if (r4 > e5) throw new Error("invalid range (" + r4 + ", " + e5 + ") or no bytes requested!");
        if (e5 > n3 - 1) throw new Error("only " + n3 + " bytes available! programmer error!");
        var o4 = new XMLHttpRequest();
        if (o4.open("GET", t2, false), n3 !== i3 && o4.setRequestHeader("Range", "bytes=" + r4 + "-" + e5), o4.responseType = "arraybuffer", o4.overrideMimeType && o4.overrideMimeType("text/plain; charset=x-user-defined"), o4.send(null), !(o4.status >= 200 && o4.status < 300 || 304 === o4.status)) throw new Error("Couldn't load " + t2 + ". Status: " + o4.status);
        return void 0 !== o4.response ? new Uint8Array(o4.response || []) : hr(o4.responseText || "", true);
      }, u3 = this;
      u3.setDataGetter((r4) => {
        var e5 = r4 * i3, t3 = (r4 + 1) * i3 - 1;
        if (t3 = Math.min(t3, n3 - 1), void 0 === u3.chunks[r4] && (u3.chunks[r4] = s3(e5, t3)), void 0 === u3.chunks[r4]) throw new Error("doXHR failed!");
        return u3.chunks[r4];
      }), !a3 && n3 || (i3 = n3 = 1, n3 = this.getter(0).length, i3 = n3, m("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = n3, this._chunkSize = i3, this.lengthKnown = true;
    }, "undefined" != typeof XMLHttpRequest) {
      var i2 = new a2();
      Object.defineProperties(i2, { length: { get: function() {
        return this.lengthKnown || this.cacheLength(), this._length;
      } }, chunkSize: { get: function() {
        return this.lengthKnown || this.cacheLength(), this._chunkSize;
      } } });
      var s2 = { isDevice: false, contents: i2 };
    } else s2 = { isDevice: false, url: t2 };
    var u2 = Tr.createFile(r2, e3, s2, n2, o2);
    s2.contents ? u2.contents = s2.contents : s2.url && (u2.contents = null, u2.url = s2.url), Object.defineProperties(u2, { usedBytes: { get: function() {
      return this.contents.length;
    } } });
    var l2 = {};
    function c2(r3, e4, t3, n3, o3) {
      var a3 = r3.node.contents;
      if (o3 >= a3.length) return 0;
      var i3 = Math.min(a3.length - o3, n3);
      if (a3.slice) for (var s3 = 0; s3 < i3; s3++) e4[t3 + s3] = a3[o3 + s3];
      else for (s3 = 0; s3 < i3; s3++) e4[t3 + s3] = a3.get(o3 + s3);
      return i3;
    }
    return Object.keys(u2.stream_ops).forEach((r3) => {
      var e4 = u2.stream_ops[r3];
      l2[r3] = function() {
        return Tr.forceLoadFile(u2), e4.apply(null, arguments);
      };
    }), l2.read = (r3, e4, t3, n3, o3) => (Tr.forceLoadFile(u2), c2(r3, e4, t3, n3, o3)), l2.mmap = (r3, e4, t3, n3, o3) => {
      Tr.forceLoadFile(u2);
      var a3 = yr(e4);
      if (!a3) throw new Tr.ErrnoError(48);
      return c2(r3, y, a3, e4, t3), { ptr: a3, allocated: true };
    }, u2.stream_ops = l2, u2;
  } }, Cr = (r2, e3) => r2 ? ur(g, r2, e3) : "", Fr = { DEFAULT_POLLMASK: 5, calculateAt(r2, e3, t2) {
    if (nr.isAbs(e3)) return e3;
    var n2;
    if (n2 = -100 === r2 ? Tr.cwd() : Fr.getStreamFromFD(r2).path, 0 == e3.length) {
      if (!t2) throw new Tr.ErrnoError(44);
      return n2;
    }
    return nr.join2(n2, e3);
  }, doStat(r2, e3, t2) {
    try {
      var n2 = r2(e3);
    } catch (s2) {
      if (s2 && s2.node && nr.normalize(e3) !== nr.normalize(Tr.getPath(s2.node))) return -54;
      throw s2;
    }
    _[t2 >> 2] = n2.dev, _[t2 + 4 >> 2] = n2.mode, b[t2 + 8 >> 2] = n2.nlink, _[t2 + 12 >> 2] = n2.uid, _[t2 + 16 >> 2] = n2.gid, _[t2 + 20 >> 2] = n2.rdev, V = [n2.size >>> 0, (I = n2.size, +Math.abs(I) >= 1 ? I > 0 ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)], _[t2 + 24 >> 2] = V[0], _[t2 + 28 >> 2] = V[1], _[t2 + 32 >> 2] = 4096, _[t2 + 36 >> 2] = n2.blocks;
    var o2 = n2.atime.getTime(), a2 = n2.mtime.getTime(), i2 = n2.ctime.getTime();
    return V = [Math.floor(o2 / 1e3) >>> 0, (I = Math.floor(o2 / 1e3), +Math.abs(I) >= 1 ? I > 0 ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)], _[t2 + 40 >> 2] = V[0], _[t2 + 44 >> 2] = V[1], b[t2 + 48 >> 2] = o2 % 1e3 * 1e3, V = [Math.floor(a2 / 1e3) >>> 0, (I = Math.floor(a2 / 1e3), +Math.abs(I) >= 1 ? I > 0 ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)], _[t2 + 56 >> 2] = V[0], _[t2 + 60 >> 2] = V[1], b[t2 + 64 >> 2] = a2 % 1e3 * 1e3, V = [Math.floor(i2 / 1e3) >>> 0, (I = Math.floor(i2 / 1e3), +Math.abs(I) >= 1 ? I > 0 ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)], _[t2 + 72 >> 2] = V[0], _[t2 + 76 >> 2] = V[1], b[t2 + 80 >> 2] = i2 % 1e3 * 1e3, V = [n2.ino >>> 0, (I = n2.ino, +Math.abs(I) >= 1 ? I > 0 ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)], _[t2 + 88 >> 2] = V[0], _[t2 + 92 >> 2] = V[1], 0;
  }, doMsync(r2, e3, t2, n2, o2) {
    if (!Tr.isFile(e3.node.mode)) throw new Tr.ErrnoError(43);
    if (2 & n2) return 0;
    var a2 = g.slice(r2, r2 + t2);
    Tr.msync(e3, a2, o2, t2, n2);
  }, varargs: void 0, get() {
    var r2 = _[+Fr.varargs >> 2];
    return Fr.varargs += 4, r2;
  }, getp: () => Fr.get(), getStr: (r2) => Cr(r2), getStreamFromFD: (r2) => Tr.getStreamChecked(r2) };
  function Dr(r2, e3, t2) {
    Fr.varargs = t2;
    try {
      var n2 = Fr.getStreamFromFD(r2);
      switch (e3) {
        case 0:
          if ((o2 = Fr.get()) < 0) return -28;
          for (; Tr.streams[o2]; ) o2++;
          return Tr.createStream(n2, o2).fd;
        case 1:
        case 2:
        case 6:
        case 7:
          return 0;
        case 3:
          return n2.flags;
        case 4:
          var o2 = Fr.get();
          return n2.flags |= o2, 0;
        case 5:
          return o2 = Fr.getp(), w[o2 + 0 >> 1] = 2, 0;
        case 16:
        case 8:
        default:
          return -28;
        case 9:
          return tr(28), -1;
      }
    } catch (a2) {
      if (void 0 === Tr || "ErrnoError" !== a2.name) throw a2;
      return -a2.errno;
    }
  }
  function Sr(r2, e3) {
    try {
      var t2 = Fr.getStreamFromFD(r2);
      return Fr.doStat(Tr.stat, t2.path, e3);
    } catch (n2) {
      if (void 0 === Tr || "ErrnoError" !== n2.name) throw n2;
      return -n2.errno;
    }
  }
  function Ar(r2, e3, t2) {
    Fr.varargs = t2;
    try {
      var n2 = Fr.getStreamFromFD(r2);
      switch (e3) {
        case 21509:
        case 21510:
        case 21511:
        case 21512:
        case 21524:
        case 21515:
          return n2.tty ? 0 : -59;
        case 21505:
          if (!n2.tty) return -59;
          if (n2.tty.ops.ioctl_tcgets) {
            var o2 = n2.tty.ops.ioctl_tcgets(n2), a2 = Fr.getp();
            _[a2 >> 2] = o2.c_iflag || 0, _[a2 + 4 >> 2] = o2.c_oflag || 0, _[a2 + 8 >> 2] = o2.c_cflag || 0, _[a2 + 12 >> 2] = o2.c_lflag || 0;
            for (var i2 = 0; i2 < 32; i2++) y[a2 + i2 + 17 | 0] = o2.c_cc[i2] || 0;
            return 0;
          }
          return 0;
        case 21506:
        case 21507:
        case 21508:
          if (!n2.tty) return -59;
          if (n2.tty.ops.ioctl_tcsets) {
            a2 = Fr.getp();
            var s2 = _[a2 >> 2], u2 = _[a2 + 4 >> 2], l2 = _[a2 + 8 >> 2], c2 = _[a2 + 12 >> 2], d2 = [];
            for (i2 = 0; i2 < 32; i2++) d2.push(y[a2 + i2 + 17 | 0]);
            return n2.tty.ops.ioctl_tcsets(n2.tty, e3, { c_iflag: s2, c_oflag: u2, c_cflag: l2, c_lflag: c2, c_cc: d2 });
          }
          return 0;
        case 21519:
          return n2.tty ? (a2 = Fr.getp(), _[a2 >> 2] = 0, 0) : -59;
        case 21520:
          return n2.tty ? -28 : -59;
        case 21531:
          return a2 = Fr.getp(), Tr.ioctl(n2, e3, a2);
        case 21523:
          if (!n2.tty) return -59;
          if (n2.tty.ops.ioctl_tiocgwinsz) {
            var h2 = n2.tty.ops.ioctl_tiocgwinsz(n2.tty);
            a2 = Fr.getp(), w[a2 >> 1] = h2[0], w[a2 + 2 >> 1] = h2[1];
          }
          return 0;
        default:
          return -28;
      }
    } catch (p2) {
      if (void 0 === Tr || "ErrnoError" !== p2.name) throw p2;
      return -p2.errno;
    }
  }
  function Mr(r2, e3, t2, n2) {
    try {
      e3 = Fr.getStr(e3);
      var o2 = 256 & n2, a2 = 4096 & n2;
      return n2 &= -6401, e3 = Fr.calculateAt(r2, e3, a2), Fr.doStat(o2 ? Tr.lstat : Tr.stat, e3, t2);
    } catch (i2) {
      if (void 0 === Tr || "ErrnoError" !== i2.name) throw i2;
      return -i2.errno;
    }
  }
  function jr(r2, e3, t2, n2) {
    Fr.varargs = n2;
    try {
      e3 = Fr.getStr(e3), e3 = Fr.calculateAt(r2, e3);
      var o2 = n2 ? Fr.get() : 0;
      return Tr.open(e3, t2, o2).fd;
    } catch (a2) {
      if (void 0 === Tr || "ErrnoError" !== a2.name) throw a2;
      return -a2.errno;
    }
  }
  function Or(r2, e3) {
    try {
      return r2 = Fr.getStr(r2), Fr.doStat(Tr.stat, r2, e3);
    } catch (t2) {
      if (void 0 === Tr || "ErrnoError" !== t2.name) throw t2;
      return -t2.errno;
    }
  }
  var Rr = {}, xr = (r2) => {
    for (; r2.length; ) {
      var e3 = r2.pop();
      r2.pop()(e3);
    }
  };
  function Wr(r2) {
    return this.fromWireType(_[r2 >> 2]);
  }
  var zr, Nr, Hr, Br = {}, Lr = {}, Ur = {}, Ir = (r2) => {
    throw new zr(r2);
  }, Vr = (r2, e3, t2) => {
    function n2(e4) {
      var n3 = t2(e4);
      n3.length !== r2.length && Ir("Mismatched type converter count");
      for (var o3 = 0; o3 < r2.length; ++o3) Zr(r2[o3], n3[o3]);
    }
    r2.forEach(function(r3) {
      Ur[r3] = e3;
    });
    var o2 = new Array(e3.length), a2 = [], i2 = 0;
    e3.forEach((r3, e4) => {
      Lr.hasOwnProperty(r3) ? o2[e4] = Lr[r3] : (a2.push(r3), Br.hasOwnProperty(r3) || (Br[r3] = []), Br[r3].push(() => {
        o2[e4] = Lr[r3], ++i2 === a2.length && n2(o2);
      }));
    }), 0 === a2.length && n2(o2);
  }, qr = (r2) => {
    var e3 = Rr[r2];
    delete Rr[r2];
    var t2 = e3.rawConstructor, n2 = e3.rawDestructor, o2 = e3.fields, a2 = o2.map((r3) => r3.getterReturnType).concat(o2.map((r3) => r3.setterArgumentType));
    Vr([r2], a2, (r3) => {
      var a3 = {};
      return o2.forEach((e4, t3) => {
        var n3 = e4.fieldName, i2 = r3[t3], s2 = e4.getter, u2 = e4.getterContext, l2 = r3[t3 + o2.length], c2 = e4.setter, d2 = e4.setterContext;
        a3[n3] = { read: (r4) => i2.fromWireType(s2(u2, r4)), write: (r4, e5) => {
          var t4 = [];
          c2(d2, r4, l2.toWireType(t4, e5)), xr(t4);
        } };
      }), [{ name: e3.name, fromWireType: (r4) => {
        var e4 = {};
        for (var t3 in a3) e4[t3] = a3[t3].read(r4);
        return n2(r4), e4;
      }, toWireType: (r4, e4) => {
        for (var o3 in a3) if (!(o3 in e4)) throw new TypeError(`Missing field: "${o3}"`);
        var i2 = t2();
        for (o3 in a3) a3[o3].write(i2, e4[o3]);
        return null !== r4 && r4.push(n2, i2), i2;
      }, argPackAdvance: re, readValueFromPointer: Wr, destructorFunction: n2 }];
    });
  }, Yr = (r2, e3, t2, n2, o2) => {
  }, Xr = () => {
    for (var r2 = new Array(256), e3 = 0; e3 < 256; ++e3) r2[e3] = String.fromCharCode(e3);
    Nr = r2;
  }, Gr = (r2) => {
    for (var e3 = "", t2 = r2; g[t2]; ) e3 += Nr[g[t2++]];
    return e3;
  }, Kr = (r2) => {
    throw new Hr(r2);
  };
  function Jr(r2, e3, t2 = {}) {
    var n2 = e3.name;
    if (r2 || Kr(`type "${n2}" must have a positive integer typeid pointer`), Lr.hasOwnProperty(r2)) {
      if (t2.ignoreDuplicateRegistrations) return;
      Kr(`Cannot register type '${n2}' twice`);
    }
    if (Lr[r2] = e3, delete Ur[r2], Br.hasOwnProperty(r2)) {
      var o2 = Br[r2];
      delete Br[r2], o2.forEach((r3) => r3());
    }
  }
  function Zr(r2, e3, t2 = {}) {
    if (!("argPackAdvance" in e3)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
    return Jr(r2, e3, t2);
  }
  var Qr, re = 8, ee = (r2, e3, t2, n2) => {
    Zr(r2, { name: e3 = Gr(e3), fromWireType: function(r3) {
      return !!r3;
    }, toWireType: function(r3, e4) {
      return e4 ? t2 : n2;
    }, argPackAdvance: re, readValueFromPointer: function(r3) {
      return this.fromWireType(g[r3]);
    }, destructorFunction: null });
  }, te = (r2) => ({ count: r2.count, deleteScheduled: r2.deleteScheduled, preservePointerOnDelete: r2.preservePointerOnDelete, ptr: r2.ptr, ptrType: r2.ptrType, smartPtr: r2.smartPtr, smartPtrType: r2.smartPtrType }), ne = (r2) => {
    function e3(r3) {
      return r3.$$.ptrType.registeredClass.name;
    }
    Kr(e3(r2) + " instance already deleted");
  }, oe = false, ae = (r2) => {
  }, ie = (r2) => {
    r2.smartPtr ? r2.smartPtrType.rawDestructor(r2.smartPtr) : r2.ptrType.registeredClass.rawDestructor(r2.ptr);
  }, se = (r2) => {
    r2.count.value -= 1, 0 === r2.count.value && ie(r2);
  }, ue = (r2, e3, t2) => {
    if (e3 === t2) return r2;
    if (void 0 === t2.baseClass) return null;
    var n2 = ue(r2, e3, t2.baseClass);
    return null === n2 ? null : t2.downcast(n2);
  }, le = {}, ce = () => Object.keys(ve).length, de = () => {
    var r2 = [];
    for (var e3 in ve) ve.hasOwnProperty(e3) && r2.push(ve[e3]);
    return r2;
  }, he = [], pe = () => {
    for (; he.length; ) {
      var r2 = he.pop();
      r2.$$.deleteScheduled = false, r2.delete();
    }
  }, fe = (r2) => {
    Qr = r2, he.length && Qr && Qr(pe);
  }, me = () => {
    o.getInheritedInstanceCount = ce, o.getLiveInheritedInstances = de, o.flushPendingDeletes = pe, o.setDelayFunction = fe;
  }, ve = {}, ye = (r2, e3) => {
    for (void 0 === e3 && Kr("ptr should not be undefined"); r2.baseClass; ) e3 = r2.upcast(e3), r2 = r2.baseClass;
    return e3;
  }, ge = (r2, e3) => (e3 = ye(r2, e3), ve[e3]), we = (r2, e3) => (e3.ptrType && e3.ptr || Ir("makeClassHandle requires ptr and ptrType"), !!e3.smartPtrType != !!e3.smartPtr && Ir("Both smartPtrType and smartPtr must be specified"), e3.count = { value: 1 }, _e(Object.create(r2, { $$: { value: e3 } })));
  function Ee(r2) {
    var e3 = this.getPointee(r2);
    if (!e3) return this.destructor(r2), null;
    var t2 = ge(this.registeredClass, e3);
    if (void 0 !== t2) {
      if (0 === t2.$$.count.value) return t2.$$.ptr = e3, t2.$$.smartPtr = r2, t2.clone();
      var n2 = t2.clone();
      return this.destructor(r2), n2;
    }
    function o2() {
      return this.isSmartPointer ? we(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: e3, smartPtrType: this, smartPtr: r2 }) : we(this.registeredClass.instancePrototype, { ptrType: this, ptr: r2 });
    }
    var a2, i2 = this.registeredClass.getActualType(e3), s2 = le[i2];
    if (!s2) return o2.call(this);
    a2 = this.isConst ? s2.constPointerType : s2.pointerType;
    var u2 = ue(e3, this.registeredClass, a2.registeredClass);
    return null === u2 ? o2.call(this) : this.isSmartPointer ? we(a2.registeredClass.instancePrototype, { ptrType: a2, ptr: u2, smartPtrType: this, smartPtr: r2 }) : we(a2.registeredClass.instancePrototype, { ptrType: a2, ptr: u2 });
  }
  var _e = (r2) => "undefined" == typeof FinalizationRegistry ? (_e = (r3) => r3, r2) : (oe = new FinalizationRegistry((r3) => {
    se(r3.$$);
  }), _e = (r3) => {
    var e3 = r3.$$;
    if (e3.smartPtr) {
      var t2 = { $$: e3 };
      oe.register(r3, t2, r3);
    }
    return r3;
  }, ae = (r3) => oe.unregister(r3), _e(r2)), be = () => {
    Object.assign(ke.prototype, { isAliasOf(r2) {
      if (!(this instanceof ke)) return false;
      if (!(r2 instanceof ke)) return false;
      var e3 = this.$$.ptrType.registeredClass, t2 = this.$$.ptr;
      r2.$$ = r2.$$;
      for (var n2 = r2.$$.ptrType.registeredClass, o2 = r2.$$.ptr; e3.baseClass; ) t2 = e3.upcast(t2), e3 = e3.baseClass;
      for (; n2.baseClass; ) o2 = n2.upcast(o2), n2 = n2.baseClass;
      return e3 === n2 && t2 === o2;
    }, clone() {
      if (this.$$.ptr || ne(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
      var r2 = _e(Object.create(Object.getPrototypeOf(this), { $$: { value: te(this.$$) } }));
      return r2.$$.count.value += 1, r2.$$.deleteScheduled = false, r2;
    }, delete() {
      this.$$.ptr || ne(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Kr("Object already scheduled for deletion"), ae(this), se(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
    }, isDeleted() {
      return !this.$$.ptr;
    }, deleteLater() {
      return this.$$.ptr || ne(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Kr("Object already scheduled for deletion"), he.push(this), 1 === he.length && Qr && Qr(pe), this.$$.deleteScheduled = true, this;
    } });
  };
  function ke() {
  }
  var $e = 48, Pe = 57, Te = (r2) => {
    if (void 0 === r2) return "_unknown";
    var e3 = (r2 = r2.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return e3 >= $e && e3 <= Pe ? `_${r2}` : r2;
  };
  function Ce(r2, e3) {
    return r2 = Te(r2), { [r2]: function() {
      return e3.apply(this, arguments);
    } }[r2];
  }
  var Fe = (r2, e3, t2) => {
    if (void 0 === r2[e3].overloadTable) {
      var n2 = r2[e3];
      r2[e3] = function() {
        return r2[e3].overloadTable.hasOwnProperty(arguments.length) || Kr(`Function '${t2}' called with an invalid number of arguments (${arguments.length}) - expects one of (${r2[e3].overloadTable})!`), r2[e3].overloadTable[arguments.length].apply(this, arguments);
      }, r2[e3].overloadTable = [], r2[e3].overloadTable[n2.argCount] = n2;
    }
  }, De = (r2, e3, t2) => {
    o.hasOwnProperty(r2) ? ((void 0 === t2 || void 0 !== o[r2].overloadTable && void 0 !== o[r2].overloadTable[t2]) && Kr(`Cannot register public name '${r2}' twice`), Fe(o, r2, r2), o.hasOwnProperty(t2) && Kr(`Cannot register multiple overloads of a function with the same number of arguments (${t2})!`), o[r2].overloadTable[t2] = e3) : (o[r2] = e3, void 0 !== t2 && (o[r2].numArguments = t2));
  };
  function Se(r2, e3, t2, n2, o2, a2, i2, s2) {
    this.name = r2, this.constructor = e3, this.instancePrototype = t2, this.rawDestructor = n2, this.baseClass = o2, this.getActualType = a2, this.upcast = i2, this.downcast = s2, this.pureVirtualFunctions = [];
  }
  var Ae = (r2, e3, t2) => {
    for (; e3 !== t2; ) e3.upcast || Kr(`Expected null or instance of ${t2.name}, got an instance of ${e3.name}`), r2 = e3.upcast(r2), e3 = e3.baseClass;
    return r2;
  };
  function Me(r2, e3) {
    if (null === e3) return this.isReference && Kr(`null is not a valid ${this.name}`), 0;
    e3.$$ || Kr(`Cannot pass "${vt(e3)}" as a ${this.name}`), e3.$$.ptr || Kr(`Cannot pass deleted object as a pointer of type ${this.name}`);
    var t2 = e3.$$.ptrType.registeredClass;
    return Ae(e3.$$.ptr, t2, this.registeredClass);
  }
  function je(r2, e3) {
    var t2;
    if (null === e3) return this.isReference && Kr(`null is not a valid ${this.name}`), this.isSmartPointer ? (t2 = this.rawConstructor(), null !== r2 && r2.push(this.rawDestructor, t2), t2) : 0;
    e3.$$ || Kr(`Cannot pass "${vt(e3)}" as a ${this.name}`), e3.$$.ptr || Kr(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && e3.$$.ptrType.isConst && Kr(`Cannot convert argument of type ${e3.$$.smartPtrType ? e3.$$.smartPtrType.name : e3.$$.ptrType.name} to parameter type ${this.name}`);
    var n2 = e3.$$.ptrType.registeredClass;
    if (t2 = Ae(e3.$$.ptr, n2, this.registeredClass), this.isSmartPointer) switch (void 0 === e3.$$.smartPtr && Kr("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
      case 0:
        e3.$$.smartPtrType === this ? t2 = e3.$$.smartPtr : Kr(`Cannot convert argument of type ${e3.$$.smartPtrType ? e3.$$.smartPtrType.name : e3.$$.ptrType.name} to parameter type ${this.name}`);
        break;
      case 1:
        t2 = e3.$$.smartPtr;
        break;
      case 2:
        if (e3.$$.smartPtrType === this) t2 = e3.$$.smartPtr;
        else {
          var o2 = e3.clone();
          t2 = this.rawShare(t2, ct.toHandle(() => o2.delete())), null !== r2 && r2.push(this.rawDestructor, t2);
        }
        break;
      default:
        Kr("Unsupporting sharing policy");
    }
    return t2;
  }
  function Oe(r2, e3) {
    if (null === e3) return this.isReference && Kr(`null is not a valid ${this.name}`), 0;
    e3.$$ || Kr(`Cannot pass "${vt(e3)}" as a ${this.name}`), e3.$$.ptr || Kr(`Cannot pass deleted object as a pointer of type ${this.name}`), e3.$$.ptrType.isConst && Kr(`Cannot convert argument of type ${e3.$$.ptrType.name} to parameter type ${this.name}`);
    var t2 = e3.$$.ptrType.registeredClass;
    return Ae(e3.$$.ptr, t2, this.registeredClass);
  }
  function Re(r2) {
    return this.fromWireType(b[r2 >> 2]);
  }
  var xe = () => {
    Object.assign(We.prototype, { getPointee(r2) {
      return this.rawGetPointee && (r2 = this.rawGetPointee(r2)), r2;
    }, destructor(r2) {
      this.rawDestructor && this.rawDestructor(r2);
    }, argPackAdvance: re, readValueFromPointer: Re, deleteObject(r2) {
      null !== r2 && r2.delete();
    }, fromWireType: Ee });
  };
  function We(r2, e3, t2, n2, o2, a2, i2, s2, u2, l2, c2) {
    this.name = r2, this.registeredClass = e3, this.isReference = t2, this.isConst = n2, this.isSmartPointer = o2, this.pointeeType = a2, this.sharingPolicy = i2, this.rawGetPointee = s2, this.rawConstructor = u2, this.rawShare = l2, this.rawDestructor = c2, o2 || void 0 !== e3.baseClass ? this.toWireType = je : n2 ? (this.toWireType = Me, this.destructorFunction = null) : (this.toWireType = Oe, this.destructorFunction = null);
  }
  var ze, Ne, He = (r2, e3, t2) => {
    o.hasOwnProperty(r2) || Ir("Replacing nonexistant public symbol"), void 0 !== o[r2].overloadTable && void 0 !== t2 ? o[r2].overloadTable[t2] = e3 : (o[r2] = e3, o[r2].argCount = t2);
  }, Be = (r2, e3, t2) => {
    var n2 = o["dynCall_" + r2];
    return t2 && t2.length ? n2.apply(null, [e3].concat(t2)) : n2.call(null, e3);
  }, Le = [], Ue = (r2) => {
    var e3 = Le[r2];
    return e3 || (r2 >= Le.length && (Le.length = r2 + 1), Le[r2] = e3 = ze.get(r2)), e3;
  }, Ie = (r2, e3, t2) => r2.includes("j") ? Be(r2, e3, t2) : Ue(e3).apply(null, t2), Ve = (r2, e3) => {
    var t2 = [];
    return function() {
      return t2.length = 0, Object.assign(t2, arguments), Ie(r2, e3, t2);
    };
  }, qe = (r2, e3) => {
    function t2() {
      return r2.includes("j") ? Ve(r2, e3) : Ue(e3);
    }
    r2 = Gr(r2);
    var n2 = t2();
    return "function" != typeof n2 && Kr(`unknown function pointer with signature ${r2}: ${e3}`), n2;
  }, Ye = (r2, e3) => {
    var t2 = Ce(e3, function(r3) {
      this.name = e3, this.message = r3;
      var t3 = new Error(r3).stack;
      void 0 !== t3 && (this.stack = this.toString() + "\n" + t3.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return t2.prototype = Object.create(r2.prototype), t2.prototype.constructor = t2, t2.prototype.toString = function() {
      return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
    }, t2;
  }, Xe = (r2) => {
    var e3 = Nn(r2), t2 = Gr(e3);
    return Wn(e3), t2;
  }, Ge = (r2, e3) => {
    var t2 = [], n2 = {};
    function o2(r3) {
      n2[r3] || Lr[r3] || (Ur[r3] ? Ur[r3].forEach(o2) : (t2.push(r3), n2[r3] = true));
    }
    throw e3.forEach(o2), new Ne(`${r2}: ` + t2.map(Xe).join([", "]));
  }, Ke = (r2, e3, t2, n2, o2, a2, i2, s2, u2, l2, c2, d2, h2) => {
    c2 = Gr(c2), a2 = qe(o2, a2), s2 && (s2 = qe(i2, s2)), l2 && (l2 = qe(u2, l2)), h2 = qe(d2, h2);
    var p2 = Te(c2);
    De(p2, function() {
      Ge(`Cannot construct ${c2} due to unbound types`, [n2]);
    }), Vr([r2, e3, t2], n2 ? [n2] : [], function(e4) {
      var t3, o3;
      e4 = e4[0], o3 = n2 ? (t3 = e4.registeredClass).instancePrototype : ke.prototype;
      var i3 = Ce(p2, function() {
        if (Object.getPrototypeOf(this) !== u3) throw new Hr("Use 'new' to construct " + c2);
        if (void 0 === d3.constructor_body) throw new Hr(c2 + " has no accessible constructor");
        var r3 = d3.constructor_body[arguments.length];
        if (void 0 === r3) throw new Hr(`Tried to invoke ctor of ${c2} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(d3.constructor_body).toString()}) parameters instead!`);
        return r3.apply(this, arguments);
      }), u3 = Object.create(o3, { constructor: { value: i3 } });
      i3.prototype = u3;
      var d3 = new Se(c2, i3, u3, h2, t3, a2, s2, l2);
      d3.baseClass && (void 0 === d3.baseClass.__derivedClasses && (d3.baseClass.__derivedClasses = []), d3.baseClass.__derivedClasses.push(d3));
      var f2 = new We(c2, d3, true, false, false), m2 = new We(c2 + "*", d3, false, false, false), v2 = new We(c2 + " const*", d3, false, true, false);
      return le[r2] = { pointerType: m2, constPointerType: v2 }, He(p2, i3), [f2, m2, v2];
    });
  }, Je = (r2, e3) => {
    for (var t2 = [], n2 = 0; n2 < r2; n2++) t2.push(b[e3 + 4 * n2 >> 2]);
    return t2;
  };
  function Ze(r2, e3) {
    if (!(r2 instanceof Function)) throw new TypeError(`new_ called with constructor type ${typeof r2} which is not a function`);
    var t2 = Ce(r2.name || "unknownFunctionName", function() {
    });
    t2.prototype = r2.prototype;
    var n2 = new t2(), o2 = r2.apply(n2, e3);
    return o2 instanceof Object ? o2 : n2;
  }
  function Qe(r2, e3, t2, n2, o2, a2) {
    var i2 = e3.length;
    i2 < 2 && Kr("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var s2 = null !== e3[1] && null !== t2, u2 = false, l2 = 1; l2 < e3.length; ++l2) if (null !== e3[l2] && void 0 === e3[l2].destructorFunction) {
      u2 = true;
      break;
    }
    var c2 = "void" !== e3[0].name, d2 = "", h2 = "";
    for (l2 = 0; l2 < i2 - 2; ++l2) d2 += (0 !== l2 ? ", " : "") + "arg" + l2, h2 += (0 !== l2 ? ", " : "") + "arg" + l2 + "Wired";
    var p2 = `
        return function ${Te(r2)}(${d2}) {
        if (arguments.length !== ${i2 - 2}) {
          throwBindingError('function ${r2} called with ' + arguments.length + ' arguments, expected ${i2 - 2}');
        }`;
    u2 && (p2 += "var destructors = [];\n");
    var f2 = u2 ? "destructors" : "null", m2 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"], v2 = [Kr, n2, o2, xr, e3[0], e3[1]];
    for (s2 && (p2 += "var thisWired = classParam.toWireType(" + f2 + ", this);\n"), l2 = 0; l2 < i2 - 2; ++l2) p2 += "var arg" + l2 + "Wired = argType" + l2 + ".toWireType(" + f2 + ", arg" + l2 + "); // " + e3[l2 + 2].name + "\n", m2.push("argType" + l2), v2.push(e3[l2 + 2]);
    if (s2 && (h2 = "thisWired" + (h2.length > 0 ? ", " : "") + h2), p2 += (c2 || a2 ? "var rv = " : "") + "invoker(fn" + (h2.length > 0 ? ", " : "") + h2 + ");\n", u2) p2 += "runDestructors(destructors);\n";
    else for (l2 = s2 ? 1 : 2; l2 < e3.length; ++l2) {
      var y2 = 1 === l2 ? "thisWired" : "arg" + (l2 - 2) + "Wired";
      null !== e3[l2].destructorFunction && (p2 += y2 + "_dtor(" + y2 + "); // " + e3[l2].name + "\n", m2.push(y2 + "_dtor"), v2.push(e3[l2].destructorFunction));
    }
    return c2 && (p2 += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), p2 += "}\n", m2.push(p2), Ze(Function, m2).apply(null, v2);
  }
  var rt = (r2, e3, t2, n2, o2, a2) => {
    var i2 = Je(e3, t2);
    o2 = qe(n2, o2), Vr([], [r2], function(r3) {
      var t3 = `constructor ${(r3 = r3[0]).name}`;
      if (void 0 === r3.registeredClass.constructor_body && (r3.registeredClass.constructor_body = []), void 0 !== r3.registeredClass.constructor_body[e3 - 1]) throw new Hr(`Cannot register multiple constructors with identical number of parameters (${e3 - 1}) for class '${r3.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
      return r3.registeredClass.constructor_body[e3 - 1] = () => {
        Ge(`Cannot construct ${r3.name} due to unbound types`, i2);
      }, Vr([], i2, (n3) => (n3.splice(1, 0, null), r3.registeredClass.constructor_body[e3 - 1] = Qe(t3, n3, null, o2, a2), [])), [];
    });
  }, et = (r2) => {
    const e3 = (r2 = r2.trim()).indexOf("(");
    return -1 !== e3 ? (T(")" == r2[r2.length - 1], "Parentheses for argument names should match."), r2.substr(0, e3)) : r2;
  }, tt = (r2, e3, t2, n2, o2, a2, i2, s2, u2) => {
    var l2 = Je(t2, n2);
    e3 = Gr(e3), e3 = et(e3), a2 = qe(o2, a2), Vr([], [r2], function(r3) {
      var n3 = `${(r3 = r3[0]).name}.${e3}`;
      function o3() {
        Ge(`Cannot call ${n3} due to unbound types`, l2);
      }
      e3.startsWith("@@") && (e3 = Symbol[e3.substring(2)]), s2 && r3.registeredClass.pureVirtualFunctions.push(e3);
      var c2 = r3.registeredClass.instancePrototype, d2 = c2[e3];
      return void 0 === d2 || void 0 === d2.overloadTable && d2.className !== r3.name && d2.argCount === t2 - 2 ? (o3.argCount = t2 - 2, o3.className = r3.name, c2[e3] = o3) : (Fe(c2, e3, n3), c2[e3].overloadTable[t2 - 2] = o3), Vr([], l2, function(o4) {
        var s3 = Qe(n3, o4, r3, a2, i2, u2);
        return void 0 === c2[e3].overloadTable ? (s3.argCount = t2 - 2, c2[e3] = s3) : c2[e3].overloadTable[t2 - 2] = s3, [];
      }), [];
    });
  }, nt = (r2, e3, t2) => {
    r2 = Gr(r2), Vr([], [e3], function(e4) {
      return e4 = e4[0], o[r2] = e4.fromWireType(t2), [];
    });
  };
  function ot() {
    Object.assign(at.prototype, { get(r2) {
      return this.allocated[r2];
    }, has(r2) {
      return void 0 !== this.allocated[r2];
    }, allocate(r2) {
      var e3 = this.freelist.pop() || this.allocated.length;
      return this.allocated[e3] = r2, e3;
    }, free(r2) {
      this.allocated[r2] = void 0, this.freelist.push(r2);
    } });
  }
  function at() {
    this.allocated = [void 0], this.freelist = [];
  }
  var it = new at(), st = (r2) => {
    r2 >= it.reserved && 0 == --it.get(r2).refcount && it.free(r2);
  }, ut = () => {
    for (var r2 = 0, e3 = it.reserved; e3 < it.allocated.length; ++e3) void 0 !== it.allocated[e3] && ++r2;
    return r2;
  }, lt = () => {
    it.allocated.push({ value: void 0 }, { value: null }, { value: true }, { value: false }), it.reserved = it.allocated.length, o.count_emval_handles = ut;
  }, ct = { toValue: (r2) => (r2 || Kr("Cannot use deleted val. handle = " + r2), it.get(r2).value), toHandle: (r2) => {
    switch (r2) {
      case void 0:
        return 1;
      case null:
        return 2;
      case true:
        return 3;
      case false:
        return 4;
      default:
        return it.allocate({ refcount: 1, value: r2 });
    }
  } }, dt = (r2, e3) => {
    Zr(r2, { name: e3 = Gr(e3), fromWireType: (r3) => {
      var e4 = ct.toValue(r3);
      return st(r3), e4;
    }, toWireType: (r3, e4) => ct.toHandle(e4), argPackAdvance: re, readValueFromPointer: Wr, destructorFunction: null });
  }, ht = (r2, e3, t2) => {
    switch (e3) {
      case 1:
        return t2 ? function(r3) {
          return this.fromWireType(y[0 | r3]);
        } : function(r3) {
          return this.fromWireType(g[0 | r3]);
        };
      case 2:
        return t2 ? function(r3) {
          return this.fromWireType(w[r3 >> 1]);
        } : function(r3) {
          return this.fromWireType(E[r3 >> 1]);
        };
      case 4:
        return t2 ? function(r3) {
          return this.fromWireType(_[r3 >> 2]);
        } : function(r3) {
          return this.fromWireType(b[r3 >> 2]);
        };
      default:
        throw new TypeError(`invalid integer width (${e3}): ${r2}`);
    }
  }, pt = (r2, e3, t2, n2) => {
    function o2() {
    }
    e3 = Gr(e3), o2.values = {}, Zr(r2, { name: e3, constructor: o2, fromWireType: function(r3) {
      return this.constructor.values[r3];
    }, toWireType: (r3, e4) => e4.value, argPackAdvance: re, readValueFromPointer: ht(e3, t2, n2), destructorFunction: null }), De(e3, o2);
  }, ft = (r2, e3) => {
    var t2 = Lr[r2];
    return void 0 === t2 && Kr(e3 + " has unknown type " + Xe(r2)), t2;
  }, mt = (r2, e3, t2) => {
    var n2 = ft(r2, "enum");
    e3 = Gr(e3);
    var o2 = n2.constructor, a2 = Object.create(n2.constructor.prototype, { value: { value: t2 }, constructor: { value: Ce(`${n2.name}_${e3}`, function() {
    }) } });
    o2.values[t2] = a2, o2[e3] = a2;
  }, vt = (r2) => {
    if (null === r2) return "null";
    var e3 = typeof r2;
    return "object" === e3 || "array" === e3 || "function" === e3 ? r2.toString() : "" + r2;
  }, yt = (r2, e3) => {
    switch (e3) {
      case 4:
        return function(r3) {
          return this.fromWireType(k[r3 >> 2]);
        };
      case 8:
        return function(r3) {
          return this.fromWireType($[r3 >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${e3}): ${r2}`);
    }
  }, gt = (r2, e3, t2) => {
    Zr(r2, { name: e3 = Gr(e3), fromWireType: (r3) => r3, toWireType: (r3, e4) => e4, argPackAdvance: re, readValueFromPointer: yt(e3, t2), destructorFunction: null });
  }, wt = (r2, e3, t2, n2, o2, a2, i2) => {
    var s2 = Je(e3, t2);
    r2 = Gr(r2), r2 = et(r2), o2 = qe(n2, o2), De(r2, function() {
      Ge(`Cannot call ${r2} due to unbound types`, s2);
    }, e3 - 1), Vr([], s2, function(t3) {
      var n3 = [t3[0], null].concat(t3.slice(1));
      return He(r2, Qe(r2, n3, null, o2, a2, i2), e3 - 1), [];
    });
  }, Et = (r2, e3, t2) => {
    switch (e3) {
      case 1:
        return t2 ? (r3) => y[0 | r3] : (r3) => g[0 | r3];
      case 2:
        return t2 ? (r3) => w[r3 >> 1] : (r3) => E[r3 >> 1];
      case 4:
        return t2 ? (r3) => _[r3 >> 2] : (r3) => b[r3 >> 2];
      default:
        throw new TypeError(`invalid integer width (${e3}): ${r2}`);
    }
  }, _t = (r2, e3, t2, n2, o2) => {
    e3 = Gr(e3);
    var a2 = (r3) => r3;
    if (0 === n2) {
      var i2 = 32 - 8 * t2;
      a2 = (r3) => r3 << i2 >>> i2;
    }
    var s2 = e3.includes("unsigned"), u2 = (r3, e4) => {
    };
    Zr(r2, { name: e3, fromWireType: a2, toWireType: s2 ? function(r3, e4) {
      return u2(e4, this.name), e4 >>> 0;
    } : function(r3, e4) {
      return u2(e4, this.name), e4;
    }, argPackAdvance: re, readValueFromPointer: Et(e3, t2, 0 !== n2), destructorFunction: null });
  }, bt = (r2, e3, t2) => {
    var n2 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e3];
    function o2(r3) {
      var e4 = b[r3 >> 2], t3 = b[r3 + 4 >> 2];
      return new n2(y.buffer, t3, e4);
    }
    Zr(r2, { name: t2 = Gr(t2), fromWireType: o2, argPackAdvance: re, readValueFromPointer: o2 }, { ignoreDuplicateRegistrations: true });
  }, kt = (r2, e3, t2) => dr(r2, g, e3, t2), $t = (r2, e3) => {
    var t2 = "std::string" === (e3 = Gr(e3));
    Zr(r2, { name: e3, fromWireType(r3) {
      var e4, n2 = b[r3 >> 2], o2 = r3 + 4;
      if (t2) for (var a2 = o2, i2 = 0; i2 <= n2; ++i2) {
        var s2 = o2 + i2;
        if (i2 == n2 || 0 == g[s2]) {
          var u2 = Cr(a2, s2 - a2);
          void 0 === e4 ? e4 = u2 : (e4 += String.fromCharCode(0), e4 += u2), a2 = s2 + 1;
        }
      }
      else {
        var l2 = new Array(n2);
        for (i2 = 0; i2 < n2; ++i2) l2[i2] = String.fromCharCode(g[o2 + i2]);
        e4 = l2.join("");
      }
      return Wn(r3), e4;
    }, toWireType(r3, e4) {
      var n2;
      e4 instanceof ArrayBuffer && (e4 = new Uint8Array(e4));
      var o2 = "string" == typeof e4;
      o2 || e4 instanceof Uint8Array || e4 instanceof Uint8ClampedArray || e4 instanceof Int8Array || Kr("Cannot pass non-string to std::string"), n2 = t2 && o2 ? cr(e4) : e4.length;
      var a2 = zn(4 + n2 + 1), i2 = a2 + 4;
      if (b[a2 >> 2] = n2, t2 && o2) kt(e4, i2, n2 + 1);
      else if (o2) for (var s2 = 0; s2 < n2; ++s2) {
        var u2 = e4.charCodeAt(s2);
        u2 > 255 && (Wn(i2), Kr("String has UTF-16 code units that do not fit in 8 bits")), g[i2 + s2] = u2;
      }
      else for (s2 = 0; s2 < n2; ++s2) g[i2 + s2] = e4[s2];
      return null !== r3 && r3.push(Wn, a2), a2;
    }, argPackAdvance: re, readValueFromPointer: Re, destructorFunction(r3) {
      Wn(r3);
    } });
  }, Pt = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, Tt = (r2, e3) => {
    for (var t2 = r2, n2 = t2 >> 1, o2 = n2 + e3 / 2; !(n2 >= o2) && E[n2]; ) ++n2;
    if ((t2 = n2 << 1) - r2 > 32 && Pt) return Pt.decode(g.subarray(r2, t2));
    for (var a2 = "", i2 = 0; !(i2 >= e3 / 2); ++i2) {
      var s2 = w[r2 + 2 * i2 >> 1];
      if (0 == s2) break;
      a2 += String.fromCharCode(s2);
    }
    return a2;
  }, Ct = (r2, e3, t2) => {
    if (void 0 === t2 && (t2 = 2147483647), t2 < 2) return 0;
    for (var n2 = e3, o2 = (t2 -= 2) < 2 * r2.length ? t2 / 2 : r2.length, a2 = 0; a2 < o2; ++a2) {
      var i2 = r2.charCodeAt(a2);
      w[e3 >> 1] = i2, e3 += 2;
    }
    return w[e3 >> 1] = 0, e3 - n2;
  }, Ft = (r2) => 2 * r2.length, Dt = (r2, e3) => {
    for (var t2 = 0, n2 = ""; !(t2 >= e3 / 4); ) {
      var o2 = _[r2 + 4 * t2 >> 2];
      if (0 == o2) break;
      if (++t2, o2 >= 65536) {
        var a2 = o2 - 65536;
        n2 += String.fromCharCode(55296 | a2 >> 10, 56320 | 1023 & a2);
      } else n2 += String.fromCharCode(o2);
    }
    return n2;
  }, St = (r2, e3, t2) => {
    if (void 0 === t2 && (t2 = 2147483647), t2 < 4) return 0;
    for (var n2 = e3, o2 = n2 + t2 - 4, a2 = 0; a2 < r2.length; ++a2) {
      var i2 = r2.charCodeAt(a2);
      if (i2 >= 55296 && i2 <= 57343 && (i2 = 65536 + ((1023 & i2) << 10) | 1023 & r2.charCodeAt(++a2)), _[e3 >> 2] = i2, (e3 += 4) + 4 > o2) break;
    }
    return _[e3 >> 2] = 0, e3 - n2;
  }, At = (r2) => {
    for (var e3 = 0, t2 = 0; t2 < r2.length; ++t2) {
      var n2 = r2.charCodeAt(t2);
      n2 >= 55296 && n2 <= 57343 && ++t2, e3 += 4;
    }
    return e3;
  }, Mt = (r2, e3, t2) => {
    var n2, o2, a2, i2, s2;
    t2 = Gr(t2), 2 === e3 ? (n2 = Tt, o2 = Ct, i2 = Ft, a2 = () => E, s2 = 1) : 4 === e3 && (n2 = Dt, o2 = St, i2 = At, a2 = () => b, s2 = 2), Zr(r2, { name: t2, fromWireType: (r3) => {
      for (var t3, o3 = b[r3 >> 2], i3 = a2(), u2 = r3 + 4, l2 = 0; l2 <= o3; ++l2) {
        var c2 = r3 + 4 + l2 * e3;
        if (l2 == o3 || 0 == i3[c2 >> s2]) {
          var d2 = n2(u2, c2 - u2);
          void 0 === t3 ? t3 = d2 : (t3 += String.fromCharCode(0), t3 += d2), u2 = c2 + e3;
        }
      }
      return Wn(r3), t3;
    }, toWireType: (r3, n3) => {
      "string" != typeof n3 && Kr(`Cannot pass non-string to C++ string type ${t2}`);
      var a3 = i2(n3), u2 = zn(4 + a3 + e3);
      return b[u2 >> 2] = a3 >> s2, o2(n3, u2 + 4, a3 + e3), null !== r3 && r3.push(Wn, u2), u2;
    }, argPackAdvance: re, readValueFromPointer: Wr, destructorFunction(r3) {
      Wn(r3);
    } });
  }, jt = (r2, e3, t2, n2, o2, a2) => {
    Rr[r2] = { name: Gr(e3), rawConstructor: qe(t2, n2), rawDestructor: qe(o2, a2), fields: [] };
  }, Ot = (r2, e3, t2, n2, o2, a2, i2, s2, u2, l2) => {
    Rr[r2].fields.push({ fieldName: Gr(e3), getterReturnType: t2, getter: qe(n2, o2), getterContext: a2, setterArgumentType: i2, setter: qe(s2, u2), setterContext: l2 });
  }, Rt = (r2, e3) => {
    Zr(r2, { isVoid: true, name: e3 = Gr(e3), argPackAdvance: 0, fromWireType: () => {
    }, toWireType: (r3, e4) => {
    } });
  }, xt = () => {
    throw 1 / 0;
  }, Wt = (r2, e3, t2) => {
    r2 = ct.toValue(r2), e3 = ft(e3, "emval::as");
    var n2 = [], o2 = ct.toHandle(n2);
    return b[t2 >> 2] = o2, e3.toWireType(n2, r2);
  }, zt = {}, Nt = (r2) => {
    var e3 = zt[r2];
    return void 0 === e3 ? Gr(r2) : e3;
  }, Ht = [], Bt = (r2, e3, t2, n2, o2) => {
    var a2 = [], i2 = (r2 = Ht[r2])(e3 = ct.toValue(e3), t2 = Nt(t2), a2, o2);
    return a2.length && (b[n2 >> 2] = ct.toHandle(a2)), i2;
  }, Lt = () => "object" == typeof globalThis ? globalThis : Function("return this")(), Ut = (r2) => 0 === r2 ? ct.toHandle(Lt()) : (r2 = Nt(r2), ct.toHandle(Lt()[r2])), It = (r2) => {
    var e3 = Ht.length;
    return Ht.push(r2), e3;
  }, Vt = (r2, e3) => {
    for (var t2 = new Array(r2), n2 = 0; n2 < r2; ++n2) t2[n2] = ft(b[e3 + 4 * n2 >> 2], "parameter " + n2);
    return t2;
  }, qt = (r2, e3) => {
    var t2 = Vt(r2, e3), n2 = t2.shift();
    r2--;
    for (var o2 = ["retType"], a2 = [n2], i2 = "", s2 = 0; s2 < r2; ++s2) i2 += (0 !== s2 ? ", " : "") + "arg" + s2, o2.push("argType" + s2), a2.push(t2[s2]);
    var u2 = n2.name + "_$" + t2.map((r3) => r3.name).join("_") + "$", l2 = "return function " + Te("methodCaller_" + u2) + "(handle, name, destructors, args) {\n", c2 = 0;
    for (s2 = 0; s2 < r2; ++s2) l2 += "    var arg" + s2 + " = argType" + s2 + ".readValueFromPointer(args" + (c2 ? "+" + c2 : "") + ");\n", c2 += t2[s2].argPackAdvance;
    for (l2 += "    var rv = handle[name](" + i2 + ");\n", s2 = 0; s2 < r2; ++s2) t2[s2].deleteObject && (l2 += "    argType" + s2 + ".deleteObject(arg" + s2 + ");\n");
    n2.isVoid || (l2 += "    return retType.toWireType(destructors, rv);\n"), l2 += "};\n", o2.push(l2);
    var d2 = Ze(Function, o2).apply(null, a2);
    return It(d2);
  }, Yt = (r2) => (r2 = Nt(r2), ct.toHandle(o[r2])), Xt = (r2, e3) => (r2 = ct.toValue(r2), e3 = ct.toValue(e3), ct.toHandle(r2[e3])), Gt = (r2) => {
    r2 > 4 && (it.get(r2).refcount += 1);
  }, Kt = (r2) => {
    for (var e3 = "", t2 = 0; t2 < r2; ++t2) e3 += (0 !== t2 ? ", " : "") + "arg" + t2;
    var n2 = () => b, a2 = "return function emval_allocator_" + r2 + "(constructor, argTypes, args) {\n  var HEAPU32 = getMemory();\n";
    for (t2 = 0; t2 < r2; ++t2) a2 += "var argType" + t2 + " = requireRegisteredType(HEAPU32[((argTypes)>>2)], 'parameter " + t2 + "');\nvar arg" + t2 + " = argType" + t2 + ".readValueFromPointer(args);\nargs += argType" + t2 + "['argPackAdvance'];\nargTypes += 4;\n";
    return a2 += "var obj = new constructor(" + e3 + ");\nreturn valueToHandle(obj);\n}\n", new Function("requireRegisteredType", "Module", "valueToHandle", "getMemory", a2)(ft, o, ct.toHandle, n2);
  }, Jt = {}, Zt = (r2, e3, t2, n2) => {
    r2 = ct.toValue(r2);
    var o2 = Jt[e3];
    return o2 || (o2 = Kt(e3), Jt[e3] = o2), o2(r2, t2, n2);
  }, Qt = (r2) => ct.toHandle(Nt(r2)), rn = (r2) => {
    var e3 = ct.toValue(r2);
    xr(e3), st(r2);
  }, en = (r2, e3) => e3 + 2097152 >>> 0 < 4194305 - !!r2 ? (r2 >>> 0) + 4294967296 * e3 : NaN;
  function tn(r2, e3, t2, n2, o2, a2, i2, s2) {
    var u2 = en(o2, a2);
    try {
      if (isNaN(u2)) return 61;
      var l2 = Fr.getStreamFromFD(n2), c2 = Tr.mmap(l2, r2, u2, e3, t2), d2 = c2.ptr;
      return _[i2 >> 2] = c2.allocated, b[s2 >> 2] = d2, 0;
    } catch (h2) {
      if (void 0 === Tr || "ErrnoError" !== h2.name) throw h2;
      return -h2.errno;
    }
  }
  function nn(r2, e3, t2, n2, o2, a2, i2) {
    var s2 = en(a2, i2);
    try {
      if (isNaN(s2)) return 61;
      var u2 = Fr.getStreamFromFD(o2);
      2 & t2 && Fr.doMsync(r2, u2, e3, n2, s2), Tr.munmap(u2);
    } catch (l2) {
      if (void 0 === Tr || "ErrnoError" !== l2.name) throw l2;
      return -l2.errno;
    }
  }
  var on = () => {
    L("");
  }, an = () => Date.now(), sn = () => 2147483648, un = () => sn(), ln = (r2, e3, t2) => g.copyWithin(r2, e3, e3 + t2), cn = (r2) => {
    var e3 = (r2 - f.buffer.byteLength + 65535) / 65536;
    try {
      return f.grow(e3), C(), 1;
    } catch (t2) {
    }
  }, dn = (r2) => {
    var e3 = g.length;
    r2 >>>= 0;
    var t2 = sn();
    if (r2 > t2) return false;
    for (var n2 = (r3, e4) => r3 + (e4 - r3 % e4) % e4, o2 = 1; o2 <= 4; o2 *= 2) {
      var a2 = e3 * (1 + 0.2 / o2);
      a2 = Math.min(a2, r2 + 100663296);
      var i2 = Math.min(t2, n2(Math.max(r2, a2), 65536));
      if (cn(i2)) return true;
    }
    return false;
  }, hn = {}, pn = () => l || "./this.program", fn = () => {
    if (!fn.strings) {
      var r2 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: pn() };
      for (var e3 in hn) void 0 === hn[e3] ? delete r2[e3] : r2[e3] = hn[e3];
      var t2 = [];
      for (var e3 in r2) t2.push(`${e3}=${r2[e3]}`);
      fn.strings = t2;
    }
    return fn.strings;
  }, mn = (r2, e3) => {
    for (var t2 = 0; t2 < r2.length; ++t2) y[0 | e3++] = r2.charCodeAt(t2);
    y[0 | e3] = 0;
  }, vn = (r2, e3) => {
    var t2 = 0;
    return fn().forEach((n2, o2) => {
      var a2 = e3 + t2;
      b[r2 + 4 * o2 >> 2] = a2, mn(n2, a2), t2 += n2.length + 1;
    }), 0;
  }, yn = (r2, e3) => {
    var t2 = fn();
    b[r2 >> 2] = t2.length;
    var n2 = 0;
    return t2.forEach((r3) => n2 += r3.length + 1), b[e3 >> 2] = n2, 0;
  };
  function gn(r2) {
    try {
      var e3 = Fr.getStreamFromFD(r2);
      return Tr.close(e3), 0;
    } catch (t2) {
      if (void 0 === Tr || "ErrnoError" !== t2.name) throw t2;
      return t2.errno;
    }
  }
  var wn = (r2, e3, t2, n2) => {
    for (var o2 = 0, a2 = 0; a2 < t2; a2++) {
      var i2 = b[e3 >> 2], s2 = b[e3 + 4 >> 2];
      e3 += 8;
      var u2 = Tr.read(r2, y, i2, s2, n2);
      if (u2 < 0) return -1;
      if (o2 += u2, u2 < s2) break;
    }
    return o2;
  };
  function En(r2, e3, t2, n2) {
    try {
      var o2 = Fr.getStreamFromFD(r2), a2 = wn(o2, e3, t2);
      return b[n2 >> 2] = a2, 0;
    } catch (i2) {
      if (void 0 === Tr || "ErrnoError" !== i2.name) throw i2;
      return i2.errno;
    }
  }
  function _n(r2, e3, t2, n2, o2) {
    var a2 = en(e3, t2);
    try {
      if (isNaN(a2)) return 61;
      var i2 = Fr.getStreamFromFD(r2);
      return Tr.llseek(i2, a2, n2), V = [i2.position >>> 0, (I = i2.position, +Math.abs(I) >= 1 ? I > 0 ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)], _[o2 >> 2] = V[0], _[o2 + 4 >> 2] = V[1], i2.getdents && 0 === a2 && 0 === n2 && (i2.getdents = null), 0;
    } catch (s2) {
      if (void 0 === Tr || "ErrnoError" !== s2.name) throw s2;
      return s2.errno;
    }
  }
  var bn = (r2, e3, t2, n2) => {
    for (var o2 = 0, a2 = 0; a2 < t2; a2++) {
      var i2 = b[e3 >> 2], s2 = b[e3 + 4 >> 2];
      e3 += 8;
      var u2 = Tr.write(r2, y, i2, s2, n2);
      if (u2 < 0) return -1;
      o2 += u2;
    }
    return o2;
  };
  function kn(r2, e3, t2, n2) {
    try {
      var o2 = Fr.getStreamFromFD(r2), a2 = bn(o2, e3, t2);
      return b[n2 >> 2] = a2, 0;
    } catch (i2) {
      if (void 0 === Tr || "ErrnoError" !== i2.name) throw i2;
      return i2.errno;
    }
  }
  var $n = (r2) => r2 % 4 == 0 && (r2 % 100 != 0 || r2 % 400 == 0), Pn = (r2, e3) => {
    for (var t2 = 0, n2 = 0; n2 <= e3; t2 += r2[n2++]) ;
    return t2;
  }, Tn = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Cn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Fn = (r2, e3) => {
    for (var t2 = new Date(r2.getTime()); e3 > 0; ) {
      var n2 = $n(t2.getFullYear()), o2 = t2.getMonth(), a2 = (n2 ? Tn : Cn)[o2];
      if (!(e3 > a2 - t2.getDate())) return t2.setDate(t2.getDate() + e3), t2;
      e3 -= a2 - t2.getDate() + 1, t2.setDate(1), o2 < 11 ? t2.setMonth(o2 + 1) : (t2.setMonth(0), t2.setFullYear(t2.getFullYear() + 1));
    }
    return t2;
  }, Dn = (r2, e3) => {
    y.set(r2, e3);
  }, Sn = (r2, e3, t2, n2) => {
    var o2 = b[n2 + 40 >> 2], a2 = { tm_sec: _[n2 >> 2], tm_min: _[n2 + 4 >> 2], tm_hour: _[n2 + 8 >> 2], tm_mday: _[n2 + 12 >> 2], tm_mon: _[n2 + 16 >> 2], tm_year: _[n2 + 20 >> 2], tm_wday: _[n2 + 24 >> 2], tm_yday: _[n2 + 28 >> 2], tm_isdst: _[n2 + 32 >> 2], tm_gmtoff: _[n2 + 36 >> 2], tm_zone: o2 ? Cr(o2) : "" }, i2 = Cr(t2), s2 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
    for (var u2 in s2) i2 = i2.replace(new RegExp(u2, "g"), s2[u2]);
    var l2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], c2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function d2(r3, e4, t3) {
      for (var n3 = "number" == typeof r3 ? r3.toString() : r3 || ""; n3.length < e4; ) n3 = t3[0] + n3;
      return n3;
    }
    function h2(r3, e4) {
      return d2(r3, e4, "0");
    }
    function p2(r3, e4) {
      function t3(r4) {
        return r4 < 0 ? -1 : r4 > 0 ? 1 : 0;
      }
      var n3;
      return 0 === (n3 = t3(r3.getFullYear() - e4.getFullYear())) && 0 === (n3 = t3(r3.getMonth() - e4.getMonth())) && (n3 = t3(r3.getDate() - e4.getDate())), n3;
    }
    function f2(r3) {
      switch (r3.getDay()) {
        case 0:
          return new Date(r3.getFullYear() - 1, 11, 29);
        case 1:
          return r3;
        case 2:
          return new Date(r3.getFullYear(), 0, 3);
        case 3:
          return new Date(r3.getFullYear(), 0, 2);
        case 4:
          return new Date(r3.getFullYear(), 0, 1);
        case 5:
          return new Date(r3.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(r3.getFullYear() - 1, 11, 30);
      }
    }
    function m2(r3) {
      var e4 = Fn(new Date(r3.tm_year + 1900, 0, 1), r3.tm_yday), t3 = new Date(e4.getFullYear(), 0, 4), n3 = new Date(e4.getFullYear() + 1, 0, 4), o3 = f2(t3), a3 = f2(n3);
      return p2(o3, e4) <= 0 ? p2(a3, e4) <= 0 ? e4.getFullYear() + 1 : e4.getFullYear() : e4.getFullYear() - 1;
    }
    var v2 = { "%a": (r3) => l2[r3.tm_wday].substring(0, 3), "%A": (r3) => l2[r3.tm_wday], "%b": (r3) => c2[r3.tm_mon].substring(0, 3), "%B": (r3) => c2[r3.tm_mon], "%C": (r3) => h2((r3.tm_year + 1900) / 100 | 0, 2), "%d": (r3) => h2(r3.tm_mday, 2), "%e": (r3) => d2(r3.tm_mday, 2, " "), "%g": (r3) => m2(r3).toString().substring(2), "%G": (r3) => m2(r3), "%H": (r3) => h2(r3.tm_hour, 2), "%I": (r3) => {
      var e4 = r3.tm_hour;
      return 0 == e4 ? e4 = 12 : e4 > 12 && (e4 -= 12), h2(e4, 2);
    }, "%j": (r3) => h2(r3.tm_mday + Pn($n(r3.tm_year + 1900) ? Tn : Cn, r3.tm_mon - 1), 3), "%m": (r3) => h2(r3.tm_mon + 1, 2), "%M": (r3) => h2(r3.tm_min, 2), "%n": () => "\n", "%p": (r3) => r3.tm_hour >= 0 && r3.tm_hour < 12 ? "AM" : "PM", "%S": (r3) => h2(r3.tm_sec, 2), "%t": () => "	", "%u": (r3) => r3.tm_wday || 7, "%U": (r3) => {
      var e4 = r3.tm_yday + 7 - r3.tm_wday;
      return h2(Math.floor(e4 / 7), 2);
    }, "%V": (r3) => {
      var e4 = Math.floor((r3.tm_yday + 7 - (r3.tm_wday + 6) % 7) / 7);
      if ((r3.tm_wday + 371 - r3.tm_yday - 2) % 7 <= 2 && e4++, e4) {
        if (53 == e4) {
          var t3 = (r3.tm_wday + 371 - r3.tm_yday) % 7;
          4 == t3 || 3 == t3 && $n(r3.tm_year) || (e4 = 1);
        }
      } else {
        e4 = 52;
        var n3 = (r3.tm_wday + 7 - r3.tm_yday - 1) % 7;
        (4 == n3 || 5 == n3 && $n(r3.tm_year % 400 - 1)) && e4++;
      }
      return h2(e4, 2);
    }, "%w": (r3) => r3.tm_wday, "%W": (r3) => {
      var e4 = r3.tm_yday + 7 - (r3.tm_wday + 6) % 7;
      return h2(Math.floor(e4 / 7), 2);
    }, "%y": (r3) => (r3.tm_year + 1900).toString().substring(2), "%Y": (r3) => r3.tm_year + 1900, "%z": (r3) => {
      var e4 = r3.tm_gmtoff, t3 = e4 >= 0;
      return e4 = (e4 = Math.abs(e4) / 60) / 60 * 100 + e4 % 60, (t3 ? "+" : "-") + String("0000" + e4).slice(-4);
    }, "%Z": (r3) => r3.tm_zone, "%%": () => "%" };
    for (var u2 in i2 = i2.replace(/%%/g, "\0\0"), v2) i2.includes(u2) && (i2 = i2.replace(new RegExp(u2, "g"), v2[u2](a2)));
    var y2 = hr(i2 = i2.replace(/\0\0/g, "%"), false);
    return y2.length > e3 ? 0 : (Dn(y2, r2), y2.length - 1);
  }, An = (r2, e3, t2, n2, o2) => Sn(r2, e3, t2, n2), Mn = function(r2, e3, t2, n2) {
    r2 || (r2 = this), this.parent = r2, this.mount = r2.mount, this.mounted = null, this.id = Tr.nextInode++, this.name = e3, this.mode = t2, this.node_ops = {}, this.stream_ops = {}, this.rdev = n2;
  }, jn = 365, On = 146;
  Object.defineProperties(Mn.prototype, { read: { get: function() {
    return (this.mode & jn) === jn;
  }, set: function(r2) {
    r2 ? this.mode |= jn : this.mode &= -366;
  } }, write: { get: function() {
    return (this.mode & On) === On;
  }, set: function(r2) {
    r2 ? this.mode |= On : this.mode &= -147;
  } }, isFolder: { get: function() {
    return Tr.isDir(this.mode);
  } }, isDevice: { get: function() {
    return Tr.isChrdev(this.mode);
  } } }), Tr.FSNode = Mn, Tr.createPreloadedFile = kr, Tr.staticInit(), zr = o.InternalError = class extends Error {
    constructor(r2) {
      super(r2), this.name = "InternalError";
    }
  }, Xr(), Hr = o.BindingError = class extends Error {
    constructor(r2) {
      super(r2), this.name = "BindingError";
    }
  }, be(), me(), xe(), Ne = o.UnboundTypeError = Ye(Error, "UnboundTypeError"), ot(), lt();
  var Rn = { w: er, D: Dr, T: Sr, V: Ar, R: Mr, E: jr, S: Or, u: qr, K: Yr, Z: ee, y: Ke, x: rt, a: tt, e: nt, Y: dt, n: pt, b: mt, G: gt, j: wt, m: _t, g: bt, F: $t, A: Mt, v: jt, d: Ot, _: Rt, O: xt, o: Wt, p: Bt, c: st, B: Ut, q: qt, s: Yt, h: Xt, l: Gt, r: Zt, i: Qt, k: rn, H: tn, I: nn, f: on, W: an, P: un, X: ln, Q: dn, M: vn, N: yn, z: gn, U: En, J: _n, C: kn, aa: Gn, t: Yn, $: Kn, ba: Xn, L: An }, xn = Z(), Wn = (r2) => (Wn = xn.ea)(r2), zn = (r2) => (zn = xn.fa)(r2), Nn = (r2) => (Nn = xn.ha)(r2);
  o.__embind_initialize_bindings = () => (o.__embind_initialize_bindings = xn.ia)();
  var Hn, Bn = () => (Bn = xn.ja)(), Ln = (r2, e3) => (Ln = xn.ka)(r2, e3), Un = (r2, e3) => (Un = xn.la)(r2, e3), In = () => (In = xn.ma)(), Vn = (r2) => (Vn = xn.na)(r2), qn = (r2) => (qn = xn.oa)(r2);
  function Yn(r2, e3) {
    var t2 = In();
    try {
      Ue(r2)(e3);
    } catch (n2) {
      if (Vn(t2), n2 !== n2 + 0) throw n2;
      Un(1, 0);
    }
  }
  function Xn(r2, e3, t2, n2) {
    var o2 = In();
    try {
      Ue(r2)(e3, t2, n2);
    } catch (a2) {
      if (Vn(o2), a2 !== a2 + 0) throw a2;
      Un(1, 0);
    }
  }
  function Gn(r2, e3) {
    var t2 = In();
    try {
      return Ue(r2)(e3);
    } catch (n2) {
      if (Vn(t2), n2 !== n2 + 0) throw n2;
      Un(1, 0);
    }
  }
  function Kn(r2, e3, t2) {
    var n2 = In();
    try {
      Ue(r2)(e3, t2);
    } catch (o2) {
      if (Vn(n2), o2 !== o2 + 0) throw o2;
      Un(1, 0);
    }
  }
  function Jn() {
    function r2() {
      Hn || (Hn = true, o.calledRun = true, P || (M(), t(o), o.onRuntimeInitialized && o.onRuntimeInitialized(), j()));
    }
    W > 0 || (A(), W > 0 || (o.setStatus ? (o.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        o.setStatus("");
      }, 1), r2();
    }, 1)) : r2()));
  }
  if (o.dynCall_ji = (r2, e3) => (o.dynCall_ji = xn.pa)(r2, e3), o.dynCall_iij = (r2, e3, t2, n2) => (o.dynCall_iij = xn.qa)(r2, e3, t2, n2), o.dynCall_jiiii = (r2, e3, t2, n2, a2) => (o.dynCall_jiiii = xn.ra)(r2, e3, t2, n2, a2), o.dynCall_jiji = (r2, e3, t2, n2, a2) => (o.dynCall_jiji = xn.sa)(r2, e3, t2, n2, a2), o.dynCall_viijii = (r2, e3, t2, n2, a2, i2, s2) => (o.dynCall_viijii = xn.ta)(r2, e3, t2, n2, a2, i2, s2), o.dynCall_iiiiij = (r2, e3, t2, n2, a2, i2, s2) => (o.dynCall_iiiiij = xn.ua)(r2, e3, t2, n2, a2, i2, s2), o.dynCall_iiiiijj = (r2, e3, t2, n2, a2, i2, s2, u2, l2) => (o.dynCall_iiiiijj = xn.va)(r2, e3, t2, n2, a2, i2, s2, u2, l2), o.dynCall_iiiiiijj = (r2, e3, t2, n2, a2, i2, s2, u2, l2, c2) => (o.dynCall_iiiiiijj = xn.wa)(r2, e3, t2, n2, a2, i2, s2, u2, l2, c2), z = function r2() {
    Hn || Jn(), Hn || (z = r2);
  }, o.preInit) for ("function" == typeof o.preInit && (o.preInit = [o.preInit]); o.preInit.length > 0; ) o.preInit.pop()();
  return Jn(), e2.ready;
});
export {
  e as default
};
//# sourceMappingURL=basis_encoder-YBSGPFNT.js.map
