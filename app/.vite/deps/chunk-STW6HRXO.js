import {
  t
} from "./chunk-M6FNW7GP.js";
import {
  a,
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/accessorSupport/utils.js
function t2(r) {
  return r.__accessor__ ?? null;
}
function e(r, n2) {
  var _a;
  return null != ((_a = r == null ? void 0 : r.metadata) == null ? void 0 : _a[n2]);
}
function u(r, n2, t3) {
  if (t3) {
    return o(r, n2, { policy: t3, path: "" });
  }
  return o(r, n2, null);
}
function o(r, t3, e2) {
  return t3 ? Object.keys(t3).reduce((r2, i2) => {
    const u3 = i2;
    let l2 = null, s4 = "merge";
    if (e2 && (l2 = e2.path ? `${e2.path}.${i2}` : i2, s4 = e2.policy(l2)), "replace" === s4) return r2[u3] = t3[u3], r2;
    if ("replace-arrays" === s4 && Array.isArray(r2[u3])) return r2[u3] = t3[u3], r2;
    if (void 0 === r2[u3]) return r2[u3] = a(t3[u3]), r2;
    let a4 = r2[u3], c3 = t3[u3];
    if (a4 === c3) return r2;
    if (Array.isArray(c3) || Array.isArray(r2)) a4 = a4 ? Array.isArray(a4) ? r2[u3] = a4.slice() : r2[u3] = [a4] : r2[u3] = [], c3 && (Array.isArray(c3) || (c3 = [c3]), c3.forEach((r3) => {
      a4.includes(r3) || a4.push(r3);
    }));
    else if (c3 && "object" == typeof c3) if (e2) {
      const n2 = e2.path;
      e2.path = l2, r2[u3] = o(a4, c3, e2), e2.path = n2;
    } else r2[u3] = o(a4, c3, null);
    else r2.hasOwnProperty(i2) && !t3.hasOwnProperty(i2) || (r2[u3] = c3);
    return r2;
  }, r || {}) : r;
}
function s(r) {
  return Array.isArray(r) ? r : r.split(".");
}
function a2(r) {
  return r.includes(",") ? r.split(",").map((r2) => r2.trim()) : [r.trim()];
}
function c(r) {
  if (Array.isArray(r)) {
    const n2 = [];
    for (const t3 of r) n2.push(...a2(t3));
    return n2;
  }
  return a2(r);
}
function p(n2, t3, e2, i2) {
  const u3 = c(t3);
  if (1 !== u3.length) {
    const t4 = u3.map((r) => i2(n2, r, e2));
    return t(t4);
  }
  return i2(n2, u3[0], e2);
}

// node_modules/@arcgis/core/core/accessorSupport/tracking/Flags.js
var i;
!function(i2) {
  i2[i2.Dirty = 1] = "Dirty", i2[i2.Overridden = 2] = "Overridden", i2[i2.Computing = 4] = "Computing", i2[i2.NonNullable = 8] = "NonNullable", i2[i2.HasDefaultValue = 16] = "HasDefaultValue", i2[i2.DepTrackingInitialized = 32] = "DepTrackingInitialized", i2[i2.AutoTracked = 64] = "AutoTracked", i2[i2.ExplicitlyTracking = 128] = "ExplicitlyTracking";
}(i || (i = {}));

// node_modules/@arcgis/core/core/accessorSupport/tracking/TrackingTarget.js
var s2 = class {
  constructor(s4) {
    this.accessed = void 0, this._handles = void 0, this._observer = s4;
  }
  destroy() {
    var _a;
    (_a = this.accessed) == null ? void 0 : _a.clear(), this.clear();
  }
  onAccessed(s4) {
    null != this._observer && s4 !== this._observer && (null == this.accessed && (this.accessed = /* @__PURE__ */ new Set()), this.accessed.add(s4));
  }
  onTrackingEnd() {
    null != this._observer && (this.clear(), null != this.accessed && (null == this._handles && (this._handles = []), this.accessed.forEach((s4) => {
      this._handles.push(s4.observe(this._observer));
    }), this.accessed.clear()));
  }
  clear() {
    if (null != this._handles) {
      for (let s4 = 0; s4 < this._handles.length; ++s4) this._handles[s4].remove();
      this._handles.length = 0;
    }
  }
};

// node_modules/@arcgis/core/core/accessorSupport/tracking.js
var o2 = new s2();
var c2 = [];
var s3 = o2;
function a3(t3) {
  s3.onAccessed(t3);
}
var l = false;
var g = false;
function f(t3, n2, r) {
  if (l) return p2(t3, n2, r);
  let e2 = null;
  return k(t3), e2 = n2.call(r), m(), e2;
}
function u2(t3, n2) {
  return f(o2, t3, n2);
}
function p2(n2, r, e2) {
  const i2 = l;
  l = true, k(n2);
  let o3 = null;
  try {
    o3 = r.call(e2);
  } catch (c3) {
    g && n.getLogger("esri.core.accessorSupport.tracking").error(c3);
  }
  return m(), l = i2, o3;
}
function k(t3) {
  s3 = t3, c2.push(t3);
}
function m() {
  const t3 = c2.length;
  if (t3 > 1) {
    const n2 = c2.pop();
    s3 = c2[t3 - 2], n2.onTrackingEnd();
  } else if (1 === t3) {
    const t4 = c2.pop();
    s3 = o2, t4.onTrackingEnd();
  } else s3 = o2;
}
function d(t3, n2) {
  if (n2.flags & i.DepTrackingInitialized) return;
  n2.flags |= i.DepTrackingInitialized;
  const r = g;
  g = false, n2.flags & i.AutoTracked ? p2(n2.trackingTarget, n2.metadata.get, t3) : y(t3, n2), g = r;
}
var T = [];
function y(t3, r) {
  r.flags & i.ExplicitlyTracking || (r.flags |= i.ExplicitlyTracking, p2(r.trackingTarget, () => {
    const e2 = r.metadata.dependsOn || T;
    for (const r2 of e2) if ("string" != typeof r2 || r2.includes(".")) {
      const e3 = s(r2);
      for (let n2 = 0, r3 = t3; n2 < e3.length && null != r3 && "object" == typeof r3; ++n2) r3 = h(r3, e3[n2], n2 !== e3.length - 1);
    } else h(t3, r2, false);
  }), r.flags &= ~i.ExplicitlyTracking);
}
function h(t3, n2, e2) {
  const i2 = "?" === n2[n2.length - 1] ? n2.slice(0, -1) : n2;
  if (null != t3.getItemAt || Array.isArray(t3)) {
    const n3 = parseInt(i2, 10);
    if (!isNaN(n3)) return Array.isArray(t3) ? t3[n3] : t3.at(n3);
  }
  const o3 = t2(t3);
  if (o3) {
    const n3 = o3.propertiesByName.get(i2);
    n3 && (a3(n3), d(t3, n3));
  }
  return e2 ? t3[i2] : void 0;
}

export {
  t2 as t,
  e,
  u,
  s,
  p,
  i,
  s2,
  a3 as a,
  f,
  u2,
  d,
  y
};
//# sourceMappingURL=chunk-STW6HRXO.js.map
