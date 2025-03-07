import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  V,
  zt
} from "./chunk-F7TCEOHX.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/portal/support/resourceUtils.js
async function o(e, t = {}, s2) {
  await e.load(s2);
  const o2 = V(e.itemUrl, "resources"), { start: a2 = 1, num: n2 = 10, sortOrder: c2 = "asc", sortField: l2 = "resource" } = t, i2 = { query: { start: a2, num: n2, sortOrder: c2, sortField: l2, token: e.apiKey }, signal: s2 == null ? void 0 : s2.signal }, u2 = await e.portal.request(o2, i2);
  return { total: u2.total, nextStart: u2.nextStart, resources: u2.resources.map(({ created: t2, size: r, resource: s3 }) => ({ created: new Date(t2), size: r, resource: e.resourceFromPath(s3) })) };
}
async function a(e, s2, o2, a2) {
  const n2 = /* @__PURE__ */ new Map();
  for (const { resource: r, content: i2, compress: u2, access: p2 } of s2) {
    if (!r.hasPath()) throw new s(`portal-item-resource-${o2}:invalid-path`, "Resource does not have a valid path");
    const [e2, s3] = l(r.path), a3 = `${e2}/${u2 ?? ""}/${p2 ?? ""}`;
    n2.has(a3) || n2.set(a3, { prefix: e2, compress: u2, access: p2, files: [] });
    n2.get(a3).files.push({ fileName: s3, content: i2 });
  }
  await e.load(a2);
  const c2 = V(e.userItemUrl, "add" === o2 ? "addResources" : "updateResources");
  for (const { prefix: t, compress: r, access: l2, files: i2 } of n2.values()) {
    const s3 = 25;
    for (let o3 = 0; o3 < i2.length; o3 += s3) {
      const n3 = i2.slice(o3, o3 + s3), u2 = new FormData();
      t && "." !== t && u2.append("resourcesPrefix", t), r && u2.append("compress", "true"), l2 && u2.append("access", l2);
      let p2 = 0;
      for (const { fileName: e2, content: t2 } of n3) u2.append("file" + ++p2, t2, e2);
      u2.append("f", "json"), await e.portal.request(c2, { method: "post", body: u2, signal: a2 == null ? void 0 : a2.signal });
    }
  }
}
async function n(e, s2, o2) {
  if (!s2.hasPath()) throw new s("portal-item-resources-remove:invalid-path", "Resource does not have a valid path");
  await e.load(o2);
  const a2 = V(e.userItemUrl, "removeResources");
  await e.portal.request(a2, { method: "post", query: { resource: s2.path }, signal: o2 == null ? void 0 : o2.signal }), s2.portalItem = null;
}
async function c(e, t) {
  await e.load(t);
  const s2 = V(e.userItemUrl, "removeResources");
  return e.portal.request(s2, { method: "post", query: { deleteAll: true }, signal: t == null ? void 0 : t.signal });
}
function l(e) {
  const t = e.lastIndexOf("/");
  return -1 === t ? [".", e] : [e.slice(0, t), e.slice(t + 1)];
}
function i(e) {
  const [t, r] = u(e), [s2, o2] = l(t);
  return [s2, o2, r];
}
function u(e) {
  const t = zt(e);
  return null == t ? [e, ""] : [e.slice(0, e.length - t.length - 1), `.${t}`];
}
async function p(t) {
  if ("blob" === t.type) return t.blob;
  if ("json" === t.type) return new Blob([t.jsonString], { type: "application/json" });
  return (await P(t.url, { responseType: "blob" })).data;
}
function f(e, t) {
  if (!e.hasPath()) return null;
  const [s2, , o2] = i(e.path);
  return e.portalItem.resourceFromPath(V(s2, t + o2));
}
function m(e, t) {
  if (!e.hasPath()) return null;
  const [s2, , o2] = i(e.path);
  return e.portalItem.resourceFromPath(V(s2, t + o2));
}

export {
  o,
  a,
  n,
  c,
  i,
  p,
  f,
  m
};
//# sourceMappingURL=chunk-ZJ7EGTR4.js.map
