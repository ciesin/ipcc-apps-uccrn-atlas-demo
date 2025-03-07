import {
  m,
  p
} from "./chunk-ZJ7EGTR4.js";
import {
  n
} from "./chunk-5EWD56QJ.js";
import {
  P,
  s as s2,
  y
} from "./chunk-M6FNW7GP.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/webdoc/support/resourceUtils.js
async function p2(e, t, r) {
  const o = await u(e, t, r);
  await h(o, t, r);
}
async function n2(e, t, r, o, s3) {
  const a = await u(r, o, s3);
  await e.update({ data: t }), await h(a, o, s3);
}
async function u(o, p3, n3) {
  if (!(p3 == null ? void 0 : p3.resources)) return;
  const u2 = p3.portalItem === o.portalItem ? new Set(o.paths) : /* @__PURE__ */ new Set();
  o.paths.length = 0, o.portalItem = p3.portalItem;
  const h2 = new Set(p3.resources.toKeep.map((e) => e.resource.path)), i = /* @__PURE__ */ new Set(), m2 = [];
  h2.forEach((e) => {
    u2.delete(e), o.paths.push(e);
  });
  const f = [], l = [], w = [];
  for (const e of p3.resources.toUpdate) if (u2.delete(e.resource.path), h2.has(e.resource.path) || i.has(e.resource.path)) {
    const { resource: t, content: r, finish: p4 } = e, n4 = m(t, n());
    o.paths.push(n4.path), f.push({ resource: n4, content: await p(r), compress: e.compress }), p4 && w.push(() => p4(n4));
  } else {
    o.paths.push(e.resource.path), l.push({ resource: e.resource, content: await p(e.content), compress: e.compress });
    const t = e.finish;
    t && w.push(() => t(e.resource)), i.add(e.resource.path);
  }
  for (const e of p3.resources.toAdd) if (o.paths.push(e.resource.path), u2.has(e.resource.path)) u2.delete(e.resource.path);
  else {
    f.push({ resource: e.resource, content: await p(e.content), compress: e.compress });
    const t = e.finish;
    t && w.push(() => t(e.resource));
  }
  if (f.length || l.length) {
    const { addOrUpdateResources: e } = await import("./resourceUtils-SI6ZGLNU.js");
    await e(p3.portalItem, f, "add", n3), await e(p3.portalItem, l, "update", n3);
  }
  if (w.forEach((e) => e()), 0 === m2.length) return u2;
  const d = await P(m2);
  if (s2(n3), d.length > 0) throw new s("save:resources", "Failed to save one or more resources", { errors: d });
  return u2;
}
async function h(e, t, r) {
  if (!e || !t.portalItem) return;
  const s3 = [];
  for (const o of e) {
    const e2 = t.portalItem.resourceFromPath(o);
    s3.push(e2.portalItem.removeResource(e2, r));
  }
  await y(s3);
}

export {
  p2 as p,
  n2 as n
};
//# sourceMappingURL=chunk-VLPXOXHN.js.map
