import {
  s as s3
} from "./chunk-SUVHJC6Z.js";
import {
  d,
  e as e2,
  r
} from "./chunk-UFBX3XSC.js";
import {
  L,
  S,
  b,
  c2 as c,
  e,
  l2 as l,
  m,
  o4 as o,
  s as s2,
  t,
  u3 as u
} from "./chunk-M6FNW7GP.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/core/workers/utils.js
var r2 = "worker:port-closed";
var e3;
!function(t3) {
  t3[t3.HANDSHAKE = 0] = "HANDSHAKE", t3[t3.OPEN = 1] = "OPEN", t3[t3.OPENED = 2] = "OPENED", t3[t3.RESPONSE = 3] = "RESPONSE", t3[t3.INVOKE = 4] = "INVOKE", t3[t3.ABORT = 5] = "ABORT", t3[t3.CLOSE = 6] = "CLOSE", t3[t3.OPEN_PORT = 7] = "OPEN_PORT", t3[t3.ON = 8] = "ON";
}(e3 || (e3 = {}));
var n = 0;
function s4() {
  return n++;
}
function o2(t3) {
  return t3 && "object" == typeof t3 && ("result" in t3 || "transferList" in t3);
}
function i(t3) {
  return t3 ? "string" == typeof t3 ? JSON.stringify({ name: "message", message: t3 }) : t3.toJSON ? JSON.stringify(t3) : JSON.stringify({ name: t3.name, message: t3.message, details: t3.details || { stack: t3.stack } }) : null;
}
function a(t3, r3, n4, s5) {
  if (r3.type === e3.OPEN_PORT) return void t3.postMessage(r3, [r3.port]);
  if (r3.type !== e3.INVOKE && r3.type !== e3.RESPONSE) return void t3.postMessage(r3);
  let f2;
  if (o2(n4) ? (f2 = u2(n4.transferList), r3.data = n4.result) : (f2 = u2(s5), r3.data = n4), f2) {
    if (has("ff")) {
      for (const n5 of f2) if ("byteLength" in n5 && n5.byteLength > 267386880) {
        const n6 = "Worker call with large ArrayBuffer would crash Firefox";
        switch (r3.type) {
          case e3.INVOKE:
            throw n6;
          case e3.RESPONSE:
            return void a(t3, { type: e3.RESPONSE, jobId: r3.jobId, error: i(n6) });
        }
      }
    }
    t3.postMessage(r3, f2);
  } else t3.postMessage(r3);
}
function f(t3) {
  if (!t3) return null;
  const r3 = t3.data;
  return r3 ? "string" == typeof r3 ? JSON.parse(r3) : r3 : null;
}
function u2(t3) {
  if (!(t3 == null ? void 0 : t3.length)) return null;
  if (has("esri-workers-arraybuffer-transfer")) return t3;
  const r3 = t3.filter((t4) => !c2(t4));
  return r3.length ? r3 : null;
}
function c2(t3) {
  var _a;
  return t3 instanceof ArrayBuffer || "ArrayBuffer" === ((_a = t3 == null ? void 0 : t3.constructor) == null ? void 0 : _a.name);
}
async function O(e6) {
  try {
    return await e6;
  } catch (n4) {
    const e7 = (n4 == null ? void 0 : n4.name) === r2;
    if (!(b(n4) || e7)) throw n4;
    return;
  }
}

// node_modules/@arcgis/core/core/workers/connectionRegistry.js
var n2 = new FinalizationRegistry((n4) => {
  n4.close();
});
function e4(e6, i3) {
  n2.register(e6, i3, i3);
}
function i2(e6) {
  n2.unregister(e6);
}

// node_modules/@arcgis/core/core/workers/InvokeHandler.js
function t2(t3, r3) {
  return new Proxy({}, { get: (e6, i3, s5) => (...e7) => {
    let s6, o3;
    const a2 = e7[e7.length - 1];
    n3(a2) && (s6 = a2.signal, o3 = a2.transferList, e7.pop());
    return t3.apply(r3 ? `${r3}.${i3.toString()}` : i3.toString(), e7, { transferList: o3, signal: s6 });
  } });
}
function n3(t3) {
  return "object" == typeof t3 && !Array.isArray(t3) && null != t3 && ("signal" in t3 || "transferList" in t3 || 0 === Object.keys(t3).length);
}

// node_modules/@arcgis/core/core/workers/registry.js
var e5 = { statsWorker: () => import("./statsWorker-QP2GASJ5.js"), geometryEngineWorker: () => import("./geometryEngineWorker-MK3MBYH7.js"), arcadeGeometryOperatorsWorker: () => import("./operatorsWorker-5THVTIHC.js"), CSVSourceWorker: () => import("./CSVSourceWorker-XDU55XVL.js"), EdgeProcessingWorker: () => import("./EdgeProcessingWorker-QTXOP37H.js"), ElevationSamplerWorker: () => import("./ElevationSamplerWorker-33G7UF6N.js"), FeatureServiceSnappingSourceWorker: () => import("./FeatureServiceSnappingSourceWorker-ZG4JQKMQ.js"), GeoJSONSourceWorker: () => import("./GeoJSONSourceWorker-WTO2W5VL.js"), LercWorker: () => import("./LercWorker-AJDPZL54.js"), MemorySourceWorker: () => import("./MemorySourceWorker-H3OIAY6W.js"), PBFDecoderWorker: () => import("./PBFDecoderWorker-HXPU2BYW.js"), FeaturePipelineWorker: () => import("./FeaturePipelineWorker-OJV4AYZ4.js"), PointCloudWorker: () => import("./PointCloudWorker-BSZ5D7W2.js"), RasterWorker: () => import("./RasterWorker-I5MCDSQR.js"), SceneLayerSnappingSourceWorker: () => import("./SceneLayerSnappingSourceWorker-Y3UQGFXC.js"), SceneLayerWorker: () => import("./SceneLayerWorker-WLYXE3R7.js"), WFSSourceWorker: () => import("./WFSSourceWorker-GRQPQKWD.js"), WorkerTileHandler: () => import("./WorkerTileHandler-WYI367PY.js"), Lyr3DWorker: () => import("./Lyr3DWorker-FCLNB2NI.js"), Feature3DPipelineWorker: () => import("./Feature3DPipelineWorker-EFX6J3OU.js"), TextureCompressionWorker: () => import("./TextureCompressionWorker-V55PYR7G.js") };

// node_modules/@arcgis/core/core/workers/RemoteClient.js
var { CLOSE: M, ABORT: k, INVOKE: j, RESPONSE: y, OPEN_PORT: I, ON: J } = e3;
var w = 2;
var O2 = class {
  constructor(e6) {
    this._invoke = e6, this._timer = null, this._cancelledJobIds = /* @__PURE__ */ new Set(), this._invokeMessages = [], this._timer = null, this._process = this._process.bind(this);
  }
  push(e6) {
    e6.type === e3.ABORT ? this._cancelledJobIds.add(e6.jobId) : (this._invokeMessages.push(e6), null === this._timer && (this._timer = setTimeout(this._process, 0)));
  }
  clear() {
    this._invokeMessages.length = 0, this._cancelledJobIds.clear(), this._timer = null;
  }
  _process() {
    this._timer = null;
    for (const e6 of this._invokeMessages) this._cancelledJobIds.has(e6.jobId) || this._invoke(e6);
    this._cancelledJobIds.clear(), this._invokeMessages.length = 0;
  }
};
var E = class _E {
  static connect(e6, s5) {
    const t3 = new MessageChannel();
    let o3;
    o3 = "function" == typeof e6 ? new e6() : "default" in e6 && "function" == typeof e6.default ? new e6.default() : e6;
    const n4 = new _E(t3.port1, { channel: t3, client: o3, schedule: s5 });
    return "object" == typeof o3 && "remoteClient" in o3 && (o3.remoteClient = n4), _E.clients.set(n4, o3), t3.port2;
  }
  static loadWorker(e6) {
    const s5 = e5[e6];
    return s5 ? s5() : Promise.resolve(null);
  }
  constructor(e6, s5, t3) {
    this._port = e6, this._jobQueue = t3, this._outJobs = /* @__PURE__ */ new Map(), this._inJobs = /* @__PURE__ */ new Map(), this._invokeQueue = new O2((e7) => this._onInvokeMessage(e7)), this._client = s5.client, this._onMessage = this._onMessage.bind(this), this._channel = s5.channel, this._schedule = s5.schedule, this._port.addEventListener("message", this._onMessage), this._port.start();
  }
  close() {
    this._post({ type: M }), this._close();
  }
  isBusy() {
    return this._outJobs.size > 0;
  }
  invoke(e6, s5, t3) {
    return this.apply(e6, [s5], t3);
  }
  apply(e6, t3, o3) {
    const a2 = o3 == null ? void 0 : o3.signal, h = o3 == null ? void 0 : o3.transferList;
    if (!this._port) return Promise.reject(new s(r2, `Cannot call invoke('${e6}'), port is closed`, { methodName: e6, data: t3 }));
    const c4 = s4();
    return new Promise((s5, o4) => {
      if (c(a2)) return this._processWork(), void o4(u());
      const p = m(a2, () => {
        const e7 = this._outJobs.get(c4);
        e7 && (this._outJobs.delete(c4), this._processWork(), l(e7.abortHandle), this._post({ type: k, jobId: c4 }), o4(u()));
      }), _ = { resolve: s5, reject: o4, abortHandle: p, debugInfo: e6 };
      this._outJobs.set(c4, _), this._post({ type: j, jobId: c4, methodName: e6, abortable: null != a2 }, t3, h);
    });
  }
  createInvokeProxy(e6) {
    return t2(this, e6);
  }
  on(e6, s5) {
    const t3 = new MessageChannel();
    function n4(e7) {
      s5(e7.data);
    }
    return this._port.postMessage({ type: e3.ON, eventType: e6, port: t3.port2 }, [t3.port2]), t3.port1.addEventListener("message", n4), t3.port1.start(), e(() => {
      t3.port1.postMessage({ type: e3.CLOSE }), t3.port1.close(), t3.port1.removeEventListener("message", n4);
    });
  }
  jobAdded() {
    this._processWork();
  }
  openPort() {
    const e6 = new MessageChannel();
    return this._post({ type: I, port: e6.port2 }), e6.port1;
  }
  _processWork() {
    var _a;
    if (this._outJobs.size >= w) return;
    const e6 = (_a = this._jobQueue) == null ? void 0 : _a.pop();
    if (!e6) return;
    const { methodName: s5, data: t3, invokeOptions: o3, resolver: n4 } = e6;
    this.apply(s5, t3, o3).then((e7) => n4.resolve(e7)).catch((e7) => n4.reject(e7));
  }
  _close() {
    this._channel && (this._channel = void 0), this._port.removeEventListener("message", this._onMessage), this._port.close(), this._outJobs.forEach((e6) => {
      l(e6.abortHandle), e6.reject(u(`Worker closing, aborting job calling '${e6.debugInfo}'`));
    }), this._inJobs.clear(), this._outJobs.clear(), this._invokeQueue.clear(), this._port = null, this._client = null, this._schedule = null;
  }
  _onMessage(e6) {
    null != this._schedule ? this._schedule(() => this._processMessage(e6, true)) : this._processMessage(e6, false);
  }
  _processMessage(e6, s5) {
    const t3 = f(e6);
    if (t3) switch (t3.type) {
      case y:
        this._onResponseMessage(t3);
        break;
      case j:
        s5 ? this._onInvokeMessage(t3) : this._invokeQueue.push(t3);
        break;
      case k:
        this._onAbortMessage(t3);
        break;
      case M:
        this._onCloseMessage();
        break;
      case I:
        this._onOpenPortMessage(t3);
        break;
      case J:
        this._onOnMessage(t3);
    }
  }
  _onAbortMessage(e6) {
    const s5 = this._inJobs, t3 = e6.jobId, o3 = s5.get(t3);
    this._invokeQueue.push(e6), o3 && (o3.controller && o3.controller.abort(), s5.delete(t3));
  }
  _onCloseMessage() {
    const e6 = this._client;
    this._close(), e6 && "destroy" in e6 && _E.clients.get(this) === e6 && e6.destroy(), _E.clients.delete(this), (e6 == null ? void 0 : e6.remoteClient) && (e6.remoteClient = null);
  }
  _onInvokeMessage(e6) {
    const { methodName: s5, jobId: t3, data: o3 = [], abortable: n4 } = e6, r3 = n4 ? new AbortController() : null, i3 = this._inJobs;
    let l2, c4 = this._client, p = c4[s5];
    try {
      if (!p && s5 && s5.includes(".")) {
        const e7 = s5.split(".");
        for (let s6 = 0; s6 < e7.length - 1; s6++) c4 = c4[e7[s6]], p = c4[e7[s6 + 1]];
      }
      if ("function" != typeof p) throw new TypeError(`${s5} is not a function`);
      o3.push({ client: this, signal: r3 ? r3.signal : null }), l2 = p.apply(c4, o3);
    } catch (_) {
      return void this._post({ type: y, jobId: t3, error: i(_) });
    }
    S(l2) ? (i3.set(t3, { controller: r3, promise: l2 }), l2.then((e7) => {
      i3.has(t3) && (i3.delete(t3), this._post({ type: y, jobId: t3 }, e7));
    }, (e7) => {
      i3.has(t3) && (i3.delete(t3), b(e7) || this._post({ type: y, jobId: t3, error: i(e7 || { message: `Error encountered at method ${s5}` }) }));
    })) : this._post({ type: y, jobId: t3 }, l2);
  }
  _onOpenPortMessage(e6) {
    new _E(e6.port, { client: this._client });
  }
  _onOnMessage(e6) {
    const { port: s5 } = e6, o3 = this._client.on(e6.eventType, (e7) => {
      s5.postMessage(e7);
    }), n4 = o(e6.port, "message", (e7) => {
      const t3 = f(e7);
      (t3 == null ? void 0 : t3.type) === e3.CLOSE && (n4.remove(), o3.remove(), s5.close());
    });
  }
  _onResponseMessage(e6) {
    const { jobId: t3, error: o3, data: r3 } = e6, i3 = this._outJobs;
    if (!i3.has(t3)) return;
    const l2 = i3.get(t3);
    i3.delete(t3), this._processWork(), l(l2.abortHandle), o3 ? l2.reject(s.fromJSON(JSON.parse(o3))) : l2.resolve(r3);
  }
  _post(e6, s5, t3) {
    return a(this._port, e6, s5, t3);
  }
};
E.kernelInfo = { buildDate: d, fullVersion: r, revision: e2 }, E.clients = /* @__PURE__ */ new Map();

// node_modules/@arcgis/core/core/workers/Connection.js
var c3 = class {
  constructor() {
    this._inUseClients = new Array(), this._clients = new Array(), this._clientPromises = new Array(), this._ongoingJobsQueue = new s3();
  }
  destroy() {
    this.close();
  }
  get closed() {
    var _a;
    return !((_a = this._clients) == null ? void 0 : _a.length);
  }
  open(e6, s5) {
    return new Promise((i3, o3) => {
      let r3 = true;
      const l2 = (e7) => {
        s2(s5.signal), r3 && (r3 = false, e7());
      };
      this._clients.length = e6.length, this._clientPromises.length = e6.length, this._inUseClients.length = e6.length;
      for (let n4 = 0; n4 < e6.length; ++n4) {
        const r4 = e6[n4];
        S(r4) ? this._clientPromises[n4] = r4.then((e7) => (this._clients[n4] = new E(e7, s5, this._ongoingJobsQueue), l2(i3), this._clients[n4]), () => (l2(o3), null)) : (this._clients[n4] = new E(r4, s5, this._ongoingJobsQueue), this._clientPromises[n4] = Promise.resolve(this._clients[n4]), l2(i3));
      }
    });
  }
  broadcast(e6, t3, s5) {
    const i3 = new Array(this._clientPromises.length);
    for (let n4 = 0; n4 < this._clientPromises.length; ++n4) {
      const o3 = this._clientPromises[n4];
      i3[n4] = o3.then((i4) => i4 == null ? void 0 : i4.invoke(e6, t3, s5));
    }
    return i3;
  }
  close() {
    let e6;
    for (; e6 = this._ongoingJobsQueue.pop(); ) e6.resolver.reject(u(`Worker closing, aborting job calling '${e6.methodName}'`));
    for (const t3 of this._clientPromises) t3.then((e7) => e7 == null ? void 0 : e7.close());
    this._clients.length = 0, this._clientPromises.length = 0, this._inUseClients.length = 0, i2(this);
  }
  invoke(e6, t3, s5) {
    return this.apply(e6, [t3], s5);
  }
  apply(e6, t3, s5) {
    const n4 = L();
    this._ongoingJobsQueue.push({ methodName: e6, data: t3, invokeOptions: s5, resolver: n4 });
    for (let i3 = 0; i3 < this._clientPromises.length; i3++) {
      const e7 = this._clients[i3];
      e7 ? e7.jobAdded() : this._clientPromises[i3].then((e8) => e8 == null ? void 0 : e8.jobAdded());
    }
    return n4.promise;
  }
  createInvokeProxy(e6) {
    return t2(this, e6);
  }
  on(t3, s5) {
    return Promise.all(this._clientPromises).then(() => t(this._clients.map((e6) => e6.on(t3, s5))));
  }
  openPorts() {
    return new Promise((e6) => {
      const t3 = new Array(this._clientPromises.length);
      let s5 = t3.length;
      for (let i3 = 0; i3 < this._clientPromises.length; ++i3) {
        this._clientPromises[i3].then((n4) => {
          n4 && (t3[i3] = n4.openPort()), 0 == --s5 && e6(t3);
        });
      }
    });
  }
  get test() {
  }
};

export {
  e4 as e,
  e3 as e2,
  s4 as s,
  i,
  a,
  f,
  O,
  E,
  c3 as c
};
//# sourceMappingURL=chunk-LPMFP5XM.js.map
