import {
  p
} from "./chunk-IN4KKF4A.js";
import {
  i
} from "./chunk-PZ5WNCF2.js";
import {
  x
} from "./chunk-JOUVYFAY.js";
import {
  n as n2
} from "./chunk-5EWD56QJ.js";
import {
  P,
  U,
  f,
  g,
  m,
  y
} from "./chunk-UFBX3XSC.js";
import {
  V,
  Y,
  Z,
  st,
  zt
} from "./chunk-F7TCEOHX.js";
import {
  j,
  n2 as n
} from "./chunk-RYSF6YCR.js";
import {
  o2 as o
} from "./chunk-4LTV6KQ5.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js
function v(r) {
  const t = (r == null ? void 0 : r.origins) ?? [void 0];
  return (e, o2) => {
    const s2 = U2(r, e, o2);
    for (const r2 of t) {
      const t2 = j(e, r2, o2);
      for (const r3 in s2) t2[r3] = s2[r3];
    }
  };
}
function U2(r, t, e) {
  if ("resource" === (r == null ? void 0 : r.type)) return w(r, t, e);
  switch ((r == null ? void 0 : r.type) ?? "other") {
    case "other":
      return { read: true, write: true };
    case "url": {
      const { read: r2, write: t2 } = P;
      return { read: r2, write: t2 };
    }
  }
}
function w(r, t, n3) {
  var _a, _b;
  const i2 = o(t, n3);
  return { type: String, read: (r2, t2, e) => {
    const o2 = f(r2, t2, e);
    return i2.type === String ? o2 : "function" == typeof i2.type ? new i2.type({ url: o2 }) : void 0;
  }, write: { isRequired: (_b = (_a = i2.json) == null ? void 0 : _a.write) == null ? void 0 : _b.isRequired, writer(t2, p2, c, u) {
    if (!(u == null ? void 0 : u.resources)) return "string" == typeof t2 ? void (p2[c] = m(t2, u)) : void (p2[c] = t2.write({}, u));
    const l = x2(t2), m2 = m(l, { ...u, verifyItemRelativeUrls: (u == null ? void 0 : u.verifyItemRelativeUrls) ? { writtenUrls: u.verifyItemRelativeUrls.writtenUrls, rootPath: void 0 } : void 0 }, y.NO), d = i2.type !== String && (!i(this) || (u == null ? void 0 : u.origin) && this.originIdOf(n3) > n(u.origin)), h = { object: this, propertyName: n3, value: t2, targetUrl: m2, dest: p2, targetPropertyName: c, context: u, params: r };
    (u == null ? void 0 : u.portalItem) && m2 && !Y(m2) ? d && (r == null ? void 0 : r.contentAddressed) ? I(h) : d ? N(h) : P2(h) : (u == null ? void 0 : u.portalItem) && (null == m2 || null != U(m2) || Z(m2) || d) ? I(h) : p2[c] = m2;
  } } };
}
function I(e) {
  var _a;
  const { targetUrl: o2, params: p2, value: u, context: a, dest: l, targetPropertyName: d } = e;
  if (!a.portalItem) return;
  const f2 = g(o2), y2 = S(u, o2, a);
  if ((p2 == null ? void 0 : p2.contentAddressed) && "json" !== y2.type) return void ((_a = a.messages) == null ? void 0 : _a.push(new s("persistable:contentAddressingUnsupported", `Property "${d}" is trying to serializing a resource with content of type ${y2.type} with content addressing. Content addressing is only supported for json resources.`, { content: y2 })));
  const g2 = (p2 == null ? void 0 : p2.contentAddressed) && "json" === y2.type ? x(y2.jsonString) : (f2 == null ? void 0 : f2.filename) ?? n2(), j2 = V((p2 == null ? void 0 : p2.prefix) ?? (f2 == null ? void 0 : f2.prefix), g2), v2 = `${j2}.${p(y2)}`;
  if ((p2 == null ? void 0 : p2.contentAddressed) && a.resources && "json" === y2.type) {
    const r = a.resources.toKeep.find(({ resource: r2 }) => r2.path === v2) ?? a.resources.toAdd.find(({ resource: r2 }) => r2.path === v2);
    if (r) return void (l[d] = r.resource.itemRelativeUrl);
  }
  const U3 = a.portalItem.resourceFromPath(v2);
  Z(o2) && a.resources && a.resources.pendingOperations.push(st(o2).then((r) => {
    U3.path = `${j2}.${p({ type: "blob", blob: r })}`, l[d] = U3.itemRelativeUrl;
  }).catch(() => {
  }));
  const w2 = (p2 == null ? void 0 : p2.compress) ?? false;
  a.resources && b({ ...e, resource: U3, content: y2, compress: w2, updates: a.resources.toAdd }), l[d] = U3.itemRelativeUrl;
}
function N(r) {
  const { context: t, targetUrl: e, params: o2, value: s2, dest: n3, targetPropertyName: i2 } = r;
  if (!t.portalItem) return;
  const c = t.portalItem.resourceFromPath(e), u = S(s2, e, t), a = p(u), l = zt(c.path), d = (o2 == null ? void 0 : o2.compress) ?? false;
  a === l ? (t.resources && b({ ...r, resource: c, content: u, compress: d, updates: t.resources.toUpdate }), n3[i2] = e) : I(r);
}
function P2({ context: r, targetUrl: t, dest: e, targetPropertyName: o2 }) {
  r.portalItem && r.resources && (r.resources.toKeep.push({ resource: r.portalItem.resourceFromPath(t), compress: false }), e[o2] = t);
}
function b({ object: r, propertyName: t, updates: e, resource: o2, content: s2, compress: n3 }) {
  const i2 = (e2) => {
    O(r, t, e2);
  };
  e.push({ resource: o2, content: s2, compress: n3, finish: i2 });
}
function S(r, t, e) {
  return "string" == typeof r ? { type: "url", url: t } : { type: "json", jsonString: JSON.stringify(r.toJSON(e)) };
}
function x2(r) {
  return null == r ? null : "string" == typeof r ? r : r.url;
}
function O(r, t, e) {
  "string" == typeof r[t] ? r[t] = e.url : r[t].url = e.url;
}

export {
  v
};
//# sourceMappingURL=chunk-FSXB4GOR.js.map
