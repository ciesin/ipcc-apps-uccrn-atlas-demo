import {
  c,
  f
} from "./chunk-37HZDVD7.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  s as s2
} from "./chunk-M6FNW7GP.js";
import {
  s
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/External.js
var a = class {
  constructor(t, r, e) {
    this.assetName = t, this.assetMimeType = r, this.parts = e;
  }
  equals(t) {
    return this === t || this.assetName === t.assetName && this.assetMimeType === t.assetMimeType && s(this.parts, t.parts, (t2, r) => t2.equals(r));
  }
  isOnService(t) {
    return this.parts.every((r) => r.isOnService(t));
  }
  makeHash() {
    let t = "";
    for (const r of this.parts) t += r.partHash;
    return t;
  }
  async toBlob(t) {
    const { parts: r } = this;
    if (1 === r.length) return r[0].toBlob(t);
    const s3 = await Promise.all(r.map((r2) => r2.toBlob(t)));
    return s2(t), new Blob(s3);
  }
};
var i = class {
  constructor(t, r) {
    this.partUrl = t, this.partHash = r;
  }
  equals(t) {
    return this === t || this.partUrl === t.partUrl && this.partHash === t.partHash;
  }
  isOnService(t) {
    return this.partUrl.startsWith(`${t.path}/assets/`);
  }
  async toBlob(r) {
    const { data: s3 } = await P(this.partUrl, { responseType: "blob" });
    return s2(r), s3;
  }
};
function o(t) {
  return l(t == null ? void 0 : t.source);
}
function u(t) {
  if (!Array.isArray(t)) return false;
  return t.every((t2) => t2 instanceof a);
}
var c2 = /^(model\/gltf\+json)|(model\/gltf-binary)$/;
var f2 = /\.(gltf|glb)/i;
function l(t) {
  if (!t) return false;
  if (Array.isArray(t)) {
    return t.some(p);
  }
  return p(t);
}
function p(t) {
  if (t instanceof File) {
    const { type: r, name: e } = t;
    return c2.test(r) || f2.test(e);
  }
  return c2.test(t.assetMimeType) || f2.test(t.assetName);
}
function m(t, r) {
  if (!t) return false;
  const { source: e } = t;
  return y(e, r);
}
function h(t, r) {
  if (t === r) return true;
  const { source: e } = t, { source: s3 } = r;
  if (e === s3) return true;
  if (u(e) && u(s3)) {
    if (e.length !== s3.length) return false;
    const t2 = (t3, r3) => t3.assetName < r3.assetName ? -1 : t3.assetName > r3.assetName ? 1 : 0, r2 = [...e].sort(t2), n = [...s3].sort(t2);
    for (let e2 = 0; e2 < r2.length; ++e2) if (!r2[e2].equals(n[e2])) return false;
    return true;
  }
  return false;
}
function y(t, r) {
  if (Array.isArray(t)) {
    const e = t;
    return e.length > 0 && e.every((t2) => g(t2, r));
  }
  return g(t, r);
}
function g(t, r) {
  return t instanceof a && t.isOnService(r);
}
function b(t, r) {
  return t instanceof File ? c(t, r) : f(t.assetMimeType, t.assetName, r);
}
function N(t) {
  return Array.isArray(t) ? t : [t];
}
function A(t) {
  return !!t.original;
}

export {
  a,
  i,
  o,
  m,
  h,
  b,
  N,
  A
};
//# sourceMappingURL=chunk-QNB4N7PF.js.map
