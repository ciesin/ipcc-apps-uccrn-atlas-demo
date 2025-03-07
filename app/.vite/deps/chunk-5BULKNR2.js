import {
  e,
  g,
  n2,
  o as o2,
  s as s4,
  u as u2,
  u2 as u3
} from "./chunk-RYSF6YCR.js";
import {
  a2,
  a3,
  o3 as o,
  s3
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  t,
  u
} from "./chunk-STW6HRXO.js";
import {
  a,
  n2 as n,
  s2
} from "./chunk-CWMZW2S5.js";
import {
  s
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/core/accessorSupport/write.js
function p(r2, e3, t3, i2, o3) {
  var _a, _b;
  const n4 = {};
  return (_b = (_a = e3.write) == null ? void 0 : _a.writer) == null ? void 0 : _b.call(r2, i2, n4, t3, o3), n4;
}
function f(r2, o3, u6, l, a6, p2) {
  if (!(l == null ? void 0 : l.write)) return false;
  const f3 = o2(r2, u6);
  if (!a6 && l.write.overridePolicy) {
    const e3 = l.write.overridePolicy.call(r2, f3, u6, p2 ?? void 0);
    void 0 !== e3 && (a6 = e3);
  }
  if (a6 || (a6 = l.write), !a6 || false === a6.enabled) return false;
  if (a6.layerContainerTypes && (p2 == null ? void 0 : p2.layerContainerType) && !a6.layerContainerTypes.includes(p2.layerContainerType)) return false;
  if ((null === f3 && !a6.allowNull && !a6.writerEnsuresNonNull || void 0 === f3) && a6.isRequired) {
    const i2 = new s2("web-document-write:property-required", `Missing value for required property '${u6}' on '${r2.declaredClass}'`, { propertyName: u6, target: r2 });
    return i2 && (p2 == null ? void 0 : p2.messages) ? p2.messages.push(i2) : i2 && !p2 && n.getLogger("esri.core.accessorSupport.write").error(i2.name, i2.message), false;
  }
  if (void 0 === f3) return false;
  if (null === f3 && !a6.allowNull && !a6.writerEnsuresNonNull) return false;
  if (!a6.alwaysWriteDefaults && (!o3.store.multipleOriginsSupported || o3.store.originOf(u6) === e.DEFAULTS) && c(r2, u6, p2, l, f3)) return false;
  if (!a6.ignoreOrigin && (p2 == null ? void 0 : p2.origin) && o3.store.multipleOriginsSupported) {
    if (o3.store.originOf(u6) < n2(p2.origin)) return false;
  }
  return true;
}
function c(e3, t3, i2, o3, n4) {
  const s7 = o3.default;
  if (void 0 === s7) return false;
  if (null != o3.defaultEquals) return o3.defaultEquals(n4);
  if ("function" == typeof s7) {
    if (Array.isArray(n4)) {
      const o4 = s7.call(e3, t3, i2 ?? void 0);
      return s(o4, n4);
    }
    return false;
  }
  return s7 === n4;
}
function g2(r2, e3, t3, i2) {
  const o3 = t(r2), n4 = o3.metadata, s7 = a2(n4[e3], i2);
  return !!s7 && f(r2, o3, e3, s7, t3, i2);
}
function d(r2, e3, t3) {
  var _a, _b;
  if (r2 && "function" == typeof r2.toJSON && (!r2.toJSON.isDefaultToJSON || !r2.write)) return u(e3, r2.toJSON(t3));
  const n4 = t(r2), s7 = n4.metadata;
  for (const u6 in s7) {
    const c3 = a2(s7[u6], t3);
    if (!f(r2, n4, u6, c3, void 0, t3)) continue;
    const g3 = o2(r2, u6), d3 = p(r2, c3, c3.write && "string" == typeof c3.write.target ? c3.write.target : u6, g3, t3);
    Object.keys(d3).length > 0 && (e3 = u(e3, d3), ((_b = (_a = t3 == null ? void 0 : t3.resources) == null ? void 0 : _a.pendingOperations) == null ? void 0 : _b.length) && t3.resources.pendingOperations.push(Promise.all(t3.resources.pendingOperations).then(() => u(e3, d3, () => "replace-arrays"))), (t3 == null ? void 0 : t3.writtenProperties) && t3.writtenProperties.push({ target: r2, propName: u6, oldOrigin: u3(n4.store.originOf(u6)), newOrigin: t3.origin }));
  }
  return e3;
}

// node_modules/@arcgis/core/core/accessorSupport/DefaultsStore.js
var s5 = class _s {
  constructor() {
    this._values = /* @__PURE__ */ new Map(), this.multipleOriginsSupported = false;
  }
  clone(e3) {
    const t3 = new _s();
    return this._values.forEach((s7, r2) => {
      e3 && e3.has(r2) || t3.set(r2, a(s7.value), s7.origin);
    }), t3;
  }
  get(i2, e3) {
    e3 = this._normalizeOrigin(e3);
    const s7 = this._values.get(i2);
    return null == e3 || (s7 == null ? void 0 : s7.origin) === e3 ? s7 == null ? void 0 : s7.value : void 0;
  }
  originOf(i2) {
    var _a;
    return ((_a = this._values.get(i2)) == null ? void 0 : _a.origin) ?? e.USER;
  }
  keys(i2) {
    i2 = this._normalizeOrigin(i2);
    const e3 = [...this._values.keys()];
    return null == i2 ? e3 : e3.filter((e4) => {
      var _a;
      return ((_a = this._values.get(e4)) == null ? void 0 : _a.origin) === i2;
    });
  }
  set(i2, s7, r2) {
    if ((r2 = this._normalizeOrigin(r2)) === e.DEFAULTS) {
      const e3 = this._values.get(i2);
      if (null != (e3 == null ? void 0 : e3.origin) && e3.origin > r2) return;
    }
    this._values.set(i2, new t2(s7, r2));
  }
  delete(i2, e3) {
    var _a;
    null != (e3 = this._normalizeOrigin(e3)) && ((_a = this._values.get(i2)) == null ? void 0 : _a.origin) !== e3 || this._values.delete(i2);
  }
  has(i2, e3) {
    var _a;
    return null != (e3 = this._normalizeOrigin(e3)) ? ((_a = this._values.get(i2)) == null ? void 0 : _a.origin) === e3 : this._values.has(i2);
  }
  forEach(i2) {
    this._values.forEach(({ value: e3 }, s7) => i2(e3, s7));
  }
  _normalizeOrigin(i2) {
    if (null != i2) return i2 === e.DEFAULTS ? i2 : e.USER;
  }
};
var t2 = class {
  constructor(i2, e3) {
    this.value = i2, this.origin = e3;
  }
};

// node_modules/@arcgis/core/core/accessorSupport/defaultsStoreUtils.js
function e2(e3, r2, n4) {
  r2.keys().forEach((e4) => {
    n4.set(e4, r2.get(e4), e.DEFAULTS);
  });
  const o3 = e3.metadata;
  Object.keys(o3).forEach((r3) => {
    e3.internalGet(r3) && n4.set(r3, e3.internalGet(r3), e.DEFAULTS);
  });
}

// node_modules/@arcgis/core/core/accessorSupport/read.js
function s6(e3, r2, o3) {
  if (!(e3 == null ? void 0 : e3.read) || false === e3.read.enabled || !e3.read.source) return false;
  const n4 = e3.read.source;
  if ("string" == typeof n4) {
    if (n4 === r2) return true;
    if (n4.includes(".") && 0 === n4.indexOf(r2) && s4(n4, o3)) return true;
  } else for (const s7 of n4) {
    if (s7 === r2) return true;
    if (s7.includes(".") && 0 === s7.indexOf(r2) && s4(s7, o3)) return true;
  }
  return false;
}
function i(e3) {
  return e3 && (!e3.read || false !== e3.read.enabled && !e3.read.source);
}
function f2(e3, t3, r2, n4, f3) {
  let a6 = s3(t3[r2], f3);
  i(a6) && (e3[r2] = true);
  for (const i2 of Object.getOwnPropertyNames(t3)) a6 = s3(t3[i2], f3), s6(a6, r2, n4) && (e3[i2] = true);
}
function a4(e3, t3, r2, o3) {
  const s7 = r2.metadata, i2 = o(s7[t3], o3), f3 = i2 == null ? void 0 : i2.default;
  if (void 0 === f3) return;
  const a6 = "function" == typeof f3 ? f3.call(e3, t3, o3) : f3;
  void 0 !== a6 && r2.set(t3, a6);
}
var c2 = { origin: "service" };
function u4(t3, n4, s7 = c2) {
  if (!n4 || "object" != typeof n4) return;
  const i2 = t(t3), u6 = i2.metadata, d3 = {};
  for (const e3 of Object.getOwnPropertyNames(n4)) f2(d3, u6, e3, n4, s7);
  i2.setDefaultOrigin(s7.origin);
  for (const r2 of Object.getOwnPropertyNames(d3)) {
    const f3 = s3(u6[r2], s7).read, a6 = f3 == null ? void 0 : f3.source;
    let c3;
    c3 = a6 && "string" == typeof a6 ? u2(n4, a6) : n4[r2], (f3 == null ? void 0 : f3.reader) && (c3 = f3.reader.call(t3, c3, n4, s7)), void 0 !== c3 && i2.set(r2, c3);
  }
  if (!s7 || !s7.ignoreDefaults) {
    i2.setDefaultOrigin("defaults");
    for (const e3 of Object.getOwnPropertyNames(u6)) d3[e3] || a4(t3, e3, i2, s7);
  }
  i2.setDefaultOrigin("user");
}
function d2(e3, t3, r2, o3 = c2) {
  var _a;
  const n4 = { ...o3, messages: [] };
  r2(n4), (_a = n4.messages) == null ? void 0 : _a.forEach((t4) => {
    "warning" !== t4.type || e3.loaded ? (o3 == null ? void 0 : o3.messages) && o3.messages.push(t4) : e3.loadWarnings.push(t4);
  });
}

// node_modules/@arcgis/core/core/JSONSupport.js
var u5 = (t3) => {
  let u6 = class extends t3 {
    constructor(...r2) {
      super(...r2);
      const t4 = t(this), e3 = t4.store, c3 = new s5();
      t4.store = c3, e2(t4, e3, c3);
    }
    read(r2, t4) {
      u4(this, r2, t4);
    }
    write(r2, t4) {
      return d(this, r2 ?? {}, t4);
    }
    toJSON(r2) {
      return this.write({}, r2);
    }
    static fromJSON(r2, t4) {
      return n3.call(this, r2, t4);
    }
  };
  return u6 = r([a3("esri.core.JSONSupport")], u6), u6.prototype.toJSON.isDefaultToJSON = true, u6;
};
function n3(r2, t3) {
  if (!r2) return null;
  if (r2.declaredClass) throw new Error("JSON object is already hydrated");
  const o3 = new this();
  return o3.read(r2, t3), o3;
}
var a5 = class extends u5(g) {
};
a5 = r([a3("esri.core.JSONSupport")], a5), function(r2) {
  function t3(r3) {
    return r3 && "object" == typeof r3 && "toJSON" in r3 && "function" == typeof r3.toJSON;
  }
  r2.JSONSupportMixin = u5, r2.isSerializable = t3;
}(a5 || (a5 = {}));
var S = a5;

export {
  e2 as e,
  u4 as u,
  d2 as d,
  g2 as g,
  d as d2,
  S
};
//# sourceMappingURL=chunk-5BULKNR2.js.map
