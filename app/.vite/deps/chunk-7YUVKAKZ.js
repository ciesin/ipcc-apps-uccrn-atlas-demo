import {
  c
} from "./chunk-5UCWBFBR.js";
import {
  b
} from "./chunk-AI2O2GKK.js";
import {
  o
} from "./chunk-YFLBSX2D.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  i
} from "./chunk-I4HN3ELT.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  Et
} from "./chunk-F7TCEOHX.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  A,
  L
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/StreamConnection.js
var c2 = class extends i.EventedAccessor {
  destroy() {
    this.emit("destroy");
  }
  get connectionError() {
    return this.errorString ? new s("stream-connection", this.errorString) : null;
  }
  onFeature(r3) {
    this.emit("data-received", r3);
  }
  onMessage(r3) {
    this.emit("message-received", r3);
  }
};
r([m({ readOnly: true })], c2.prototype, "connectionError", null), c2 = r([a("esri.layers.support.StreamConnection")], c2);
var n2 = c2;

// node_modules/@arcgis/core/layers/graphics/sources/connections/WebSocketConnection.js
var h;
!function(e) {
  e[e.CONNECTING = 0] = "CONNECTING", e[e.OPEN = 1] = "OPEN", e[e.CLOSING = 2] = "CLOSING", e[e.CLOSED = 3] = "CLOSED";
}(h || (h = {}));
var d = class extends n2 {
  constructor(e) {
    super({}), this._outstandingMessages = [], this.errorString = null;
    const { geometryType: t, spatialReference: o3, sourceSpatialReference: s2 } = e;
    this._config = e, this._featureZScaler = o(t, s2, o3), this._open();
  }
  normalizeCtorArgs() {
    return {};
  }
  async _open() {
    await this._tryCreateWebSocket(), this.destroyed || await this._handshake();
  }
  destroy() {
    super.destroy(), null != this._websocket && (this._websocket.onopen = null, this._websocket.onclose = null, this._websocket.onerror = null, this._websocket.onmessage = null, this._websocket.close()), this._websocket = null;
  }
  get connectionStatus() {
    if (null == this._websocket) return "disconnected";
    switch (this._websocket.readyState) {
      case h.CONNECTING:
      case h.OPEN:
        return "connected";
      case h.CLOSING:
      case h.CLOSED:
        return "disconnected";
    }
  }
  sendMessageToSocket(e) {
    null != this._websocket ? this._websocket.send(JSON.stringify(e)) : this._outstandingMessages.push(e);
  }
  sendMessageToClient(e) {
    this._onMessage(e);
  }
  updateCustomParameters(e) {
    this._config.customParameters = e, null != this._websocket && this._websocket.close();
  }
  async _tryCreateWebSocket(e = this._config.source.path, r3 = 1e3, i2 = 0) {
    try {
      if (this.destroyed) return;
      const t = Et(e, this._config.customParameters ?? {});
      this._websocket = await this._createWebSocket(t), this.notifyChange("connectionStatus");
    } catch (c3) {
      const n3 = r3 / 1e3;
      return this._config.maxReconnectionAttempts && i2 >= this._config.maxReconnectionAttempts ? (n.getLogger(this).error(new s("websocket-connection", "Exceeded maxReconnectionAttempts attempts. No further attempts will be made")), void this.destroy()) : (n.getLogger(this).error(new s("websocket-connection", `Failed to connect. Attempting to reconnect in ${n3}s`, c3)), await A(r3), this._tryCreateWebSocket(e, Math.min(1.5 * r3, 1e3 * this._config.maxReconnectionInterval), i2 + 1));
    }
  }
  _setWebSocketJSONParseHandler(e) {
    e.onmessage = (e2) => {
      try {
        const t = JSON.parse(e2.data);
        this._onMessage(t);
      } catch (s2) {
        return void n.getLogger(this).error(new s("websocket-connection", "Failed to parse message, invalid JSON", { error: s2 }));
      }
    };
  }
  _createWebSocket(e) {
    return new Promise((t, o3) => {
      const s2 = new WebSocket(e);
      s2.onopen = () => {
        if (s2.onopen = null, this.destroyed) return s2.onclose = null, void s2.close();
        s2.onclose = (e2) => this._onClose(e2), s2.onerror = (e2) => this._onError(e2), this._setWebSocketJSONParseHandler(s2), t(s2);
      }, s2.onclose = (e2) => {
        s2.onopen = s2.onclose = null, o3(e2);
      };
    });
  }
  async _handshake(e = 1e4) {
    const s2 = this._websocket;
    if (null == s2) return;
    const n3 = L(), i2 = s2.onmessage, { filter: c3, outFields: a3, spatialReference: l } = this._config;
    return n3.timeout(e), s2.onmessage = (e2) => {
      var _a;
      let r3 = null;
      try {
        r3 = JSON.parse(e2.data);
      } catch (h3) {
      }
      r3 && "object" == typeof r3 || (n.getLogger(this).error(new s("websocket-connection", "Protocol violation. Handshake failed - malformed message", e2.data)), n3.reject(), this.destroy()), ((_a = r3.spatialReference) == null ? void 0 : _a.wkid) !== (l == null ? void 0 : l.wkid) && (n.getLogger(this).error(new s("websocket-connection", `Protocol violation. Handshake failed - expected wkid of ${l.wkid}`, e2.data)), n3.reject(), this.destroy()), "json" !== r3.format && (n.getLogger(this).error(new s("websocket-connection", "Protocol violation. Handshake failed - format is not set", e2.data)), n3.reject(), this.destroy()), c3 && r3.filter !== c3 && n.getLogger(this).error(new s("websocket-connection", "Tried to set filter, but server doesn't support it")), a3 && r3.outFields !== a3 && n.getLogger(this).error(new s("websocket-connection", "Tried to set outFields, but server doesn't support it")), s2.onmessage = i2;
      for (const t of this._outstandingMessages) s2.send(JSON.stringify(t));
      this._outstandingMessages = [], n3.resolve();
    }, s2.send(JSON.stringify({ filter: c3, outFields: a3, format: "json", spatialReference: { wkid: l.wkid } })), n3.promise;
  }
  _onMessage(e) {
    if (this.onMessage(e), "type" in e) switch (e.type) {
      case "features":
      case "featureResult":
        for (const t of e.features) null != this._featureZScaler && this._featureZScaler(t.geometry), this.onFeature(t);
    }
  }
  _onError(e) {
    const t = "Encountered an error over WebSocket connection";
    this._set("errorString", t), n.getLogger(this).error("websocket-connection", t);
  }
  _onClose(e) {
    this._websocket = null, this.notifyChange("connectionStatus"), 1e3 !== e.code && n.getLogger(this).error("websocket-connection", `WebSocket closed unexpectedly with error code ${e.code}`), this.destroyed || this._open();
  }
};
r([m()], d.prototype, "connectionStatus", null), r([m()], d.prototype, "errorString", void 0), d = r([a("esri.layers.graphics.sources.connections.WebSocketConnection")], d);

// node_modules/@arcgis/core/layers/graphics/sources/connections/GeoEventConnection.js
var h2 = 1e4;
var d2 = { maxQueryDepth: 5, maxRecordCountFactor: 3 };
var g2 = class extends d {
  constructor(e) {
    super({ ...d2, ...e }), this._buddyServicesQuery = null, this._relatedFeatures = null;
  }
  async _open() {
    const e = await this._fetchServiceDefinition(this._config.source);
    e.timeInfo.trackIdField || n.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");
    const t = this._fetchWebSocketUrl(e.streamUrls, this._config.spatialReference);
    this._buddyServicesQuery || (this._buddyServicesQuery = this._queryBuddyServices()), await this._buddyServicesQuery, await this._tryCreateWebSocket(t);
    const { filter: r3, outFields: o3 } = this._config;
    this.destroyed || this._setFilter(r3, o3);
  }
  _onMessage(e) {
    if ("attributes" in e) {
      let o3;
      try {
        o3 = this._enrich(e), null != this._featureZScaler && this._featureZScaler(o3.geometry);
      } catch (t) {
        return void n.getLogger(this).error(new s("geoevent-connection", "Failed to parse message", t));
      }
      this.onFeature(o3);
    } else this.onMessage(e);
  }
  async _fetchServiceDefinition(e) {
    const r3 = { f: "json", ...this._config.customParameters }, i2 = P(e.path, { query: r3, responseType: "json" }), o3 = (await i2).data;
    return this._serviceDefinition = o3, o3;
  }
  _fetchWebSocketUrl(e, t) {
    const r3 = e[0], { urls: i2, token: o3 } = r3, n3 = this._inferWebSocketBaseUrl(i2);
    return Et(`${n3}/subscribe`, { outSR: "" + t.wkid, token: o3 });
  }
  _inferWebSocketBaseUrl(e) {
    if (1 === e.length) return e[0];
    for (const t of e) if (t.includes("wss")) return t;
    return n.getLogger(this).error(new s("geoevent-connection", "Unable to infer WebSocket url", e)), null;
  }
  async _setFilter(e, t) {
    const s2 = this._websocket;
    if (null == s2 || null == e && null == t) return;
    const n3 = JSON.stringify({ filter: this._serializeFilter(e, t) });
    let a3 = false;
    const c3 = L(), u = () => {
      a3 || (this.destroyed || this._websocket !== s2 || n.getLogger(this).error(new s("geoevent-connection", "Server timed out when setting filter")), c3.reject());
    }, l = (e2) => {
      const t2 = JSON.parse(e2.data);
      t2.filter && (t2.error && (n.getLogger(this).error(new s("geoevent-connection", "Failed to set service filter", t2.error)), this._set("errorString", `Could not set service filter - ${t2.error}`), c3.reject(t2.error)), this._setWebSocketJSONParseHandler(s2), a3 = true, c3.resolve());
    };
    return s2.onmessage = l, s2.send(n3), setTimeout(u, h2), c3.promise;
  }
  _serializeFilter(e, t) {
    const o3 = {};
    if (null == e && null == t) return o3;
    if (e == null ? void 0 : e.geometry) try {
      const t2 = f(e.geometry);
      if ("extent" !== t2.type) throw new s(`Expected extent but found type ${t2.type}`);
      o3.geometry = JSON.stringify(t2.shiftCentralMeridian());
    } catch (s2) {
      n.getLogger(this).error(new s("geoevent-connection", "Encountered an error when setting connection geometryDefinition", s2));
    }
    return (e == null ? void 0 : e.where) && "1 = 1" !== e.where && "1=1" !== e.where && (o3.where = e.where), null != t && (o3.outFields = t.join(",")), o3;
  }
  _enrich(e) {
    if (!this._relatedFeatures) return e;
    const t = this._serviceDefinition.relatedFeatures.joinField, o3 = e.attributes[t], s2 = this._relatedFeatures.get(o3);
    if (!s2) return n.getLogger(this).warn("geoevent-connection", "Feature join failed. Is the join field configured correctly?", e), e;
    const { attributes: n3, geometry: a3 } = s2;
    for (const r3 in n3) e.attributes[r3] = n3[r3];
    return a3 && (e.geometry = a3), e.geometry || e.centroid || n.getLogger(this).error(new s("geoevent-connection", "Found malformed feature - no geometry found", e)), e;
  }
  async _queryBuddyServices() {
    try {
      const { relatedFeatures: e, keepLatestArchive: t } = this._serviceDefinition, r3 = this._queryRelatedFeatures(e), i2 = this._queryArchive(t);
      await r3;
      const o3 = await i2;
      if (!o3) return;
      for (const s2 of o3.features) this.onFeature(this._enrich(s2));
    } catch (e) {
      n.getLogger(this).error(new s("geoevent-connection", "Encountered an error when querying buddy services", { error: e }));
    }
  }
  async _queryRelatedFeatures(e) {
    if (!e) return;
    const t = await this._queryBuddy(e.featuresUrl);
    this._addRelatedFeatures(t);
  }
  async _queryArchive(e) {
    if (e) return this._queryBuddy(e.featuresUrl);
  }
  async _queryBuddy(e) {
    var _a;
    const t = new (await import("./FeatureLayer-JWLNPFWJ.js")).default({ url: e }), { capabilities: r3 } = await t.load(), i2 = r3.query.supportsMaxRecordCountFactor, o3 = r3.query.supportsPagination, s2 = r3.query.supportsCentroid, n3 = this._config.maxRecordCountFactor, c3 = t.capabilities.query.maxRecordCount, u = i2 ? c3 * n3 : c3, h3 = new b();
    if (h3.outFields = this._config.outFields ?? ["*"], h3.where = ((_a = this._config.filter) == null ? void 0 : _a.where) ?? "1=1", h3.returnGeometry = true, h3.returnExceededLimitFeatures = true, h3.outSpatialReference = g.fromJSON(this._config.spatialReference), s2 && (h3.returnCentroid = true), i2 && (h3.maxRecordCountFactor = n3), o3) return h3.num = u, t.destroy(), this._queryPages(e, h3);
    const d3 = await c(e, h3, this._config.sourceSpatialReference);
    return t.destroy(), d3.data;
  }
  async _queryPages(e, t, r3 = [], i2 = 0) {
    t.start = null != t.num ? i2 * t.num : null;
    const { data: o3 } = await c(e, t, this._config.sourceSpatialReference);
    return o3.exceededTransferLimit && i2 < (this._config.maxQueryDepth ?? 0) ? (o3.features.forEach((e2) => r3.push(e2)), this._queryPages(e, t, r3, i2 + 1)) : (r3.forEach((e2) => o3.features.push(e2)), o3);
  }
  _addRelatedFeatures(e) {
    const t = /* @__PURE__ */ new Map(), r3 = e.features, i2 = this._serviceDefinition.relatedFeatures.joinField;
    for (const o3 of r3) {
      const e2 = o3.attributes[i2];
      t.set(e2, o3);
    }
    this._relatedFeatures = t;
  }
};
g2 = r([a("esri.layers.graphics.sources.connections.GeoEventConnection")], g2);
var y = g2;

// node_modules/@arcgis/core/layers/support/ClientSideConnection.js
var a2 = class extends n2 {
  constructor(e) {
    super({}), this.connectionStatus = "connected", this.errorString = null;
    const { geometryType: r3, spatialReference: t, sourceSpatialReference: s2 } = e;
    this._featureZScaler = o(r3, s2, t);
  }
  normalizeCtorArgs() {
    return {};
  }
  updateCustomParameters(e) {
  }
  sendMessageToSocket(e) {
  }
  sendMessageToClient(e) {
    if ("type" in e) switch (e.type) {
      case "features":
      case "featureResult":
        for (const r3 of e.features) null != this._featureZScaler && this._featureZScaler(r3.geometry), this.onFeature(r3);
    }
    this.onMessage(e);
  }
};
r([m()], a2.prototype, "connectionStatus", void 0), r([m()], a2.prototype, "errorString", void 0), a2 = r([a("esri.layers.support.ClientSideConnection")], a2);

// node_modules/@arcgis/core/layers/graphics/sources/connections/createConnection.js
function o2(e, t) {
  if (null == e && null == t) return null;
  const n3 = {};
  return null != t && (n3.geometry = t), null != e && (n3.where = e), n3;
}
function r2(r3, i2, s2, c3, l, u, a3, m2, p) {
  const f2 = { source: r3, sourceSpatialReference: i2, spatialReference: s2, geometryType: c3, filter: o2(l, u), maxReconnectionAttempts: a3, maxReconnectionInterval: m2, customParameters: p };
  if (!r3) return new a2(f2);
  return r3.path.startsWith("wss://") || r3.path.startsWith("ws://") ? new d(f2) : new y(f2);
}

export {
  r2 as r
};
//# sourceMappingURL=chunk-7YUVKAKZ.js.map
