import {
  i as i2
} from "./chunk-ELTPMWLT.js";
import {
  t
} from "./chunk-QCTBKAKN.js";
import {
  o
} from "./chunk-ACFHOOS7.js";
import {
  E,
  i
} from "./chunk-VY225BNN.js";
import {
  S
} from "./chunk-IP4HFFRO.js";
import {
  C
} from "./chunk-PAGKMWJH.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/save/utils.js
function p(t2, r, a) {
  const o2 = a(t2);
  if (!o2.isValid) throw new s(`${r}:invalid-parameters`, o2.errorMessage, { layer: t2 });
}
async function l(e) {
  const { layer: t2, errorNamePrefix: r, validateLayer: a } = e;
  await t2.load(), p(t2, r, a);
}
function m(e, t2) {
  return `Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t2}`;
}
function c(t2) {
  const { item: r, errorNamePrefix: a, layer: o2, validateItem: i3 } = t2;
  if (u(t2), i3) {
    const t3 = i3(r);
    if (!t3.isValid) throw new s(`${a}:invalid-parameters`, t3.errorMessage, { layer: o2 });
  }
}
function u(t2) {
  const { item: r, itemType: a, additionalItemType: o2, errorNamePrefix: i3, layer: n } = t2, s2 = [a];
  if (o2 && s2.push(o2), !s2.includes(r.type)) {
    const t3 = s2.map((e) => `'${e}'`).join(", ");
    throw new s(`${i3}:portal-item-wrong-type`, `Portal item type should be one of: "${t3}"`, { item: r, layer: n });
  }
}
function f(t2) {
  const { layer: r, errorNamePrefix: a } = t2, { portalItem: o2 } = r;
  if (!o2) throw new s(`${a}:portal-item-not-set`, m(r, "requires the portalItem property to be set"));
  if (!o2.loaded) throw new s(`${a}:portal-item-not-loaded`, m(r, "cannot be saved to a portal item that does not exist or is inaccessible"));
  c({ ...t2, item: o2 });
}
function d(e) {
  const { newItem: t2, itemType: o2 } = e;
  let i3 = S.from(t2);
  return i3.id && (i3 = i3.clone(), i3.id = null), i3.type ?? (i3.type = o2), i3.portal ?? (i3.portal = C.getDefault()), c({ ...e, item: i3 }), i3;
}
function y(e) {
  return o(e, "portal-item");
}
async function w(e, t2, r) {
  var _a;
  "beforeSave" in e && "function" == typeof e.beforeSave && await e.beforeSave();
  const a = e.write({}, t2);
  return await Promise.all(((_a = t2.resources) == null ? void 0 : _a.pendingOperations) ?? []), t(t2, { errorName: "layer-write:unsupported" }, r), a;
}
function I(e) {
  i(e, E.JSAPI), e.typeKeywords && (e.typeKeywords = e.typeKeywords.filter((e2, t2, r) => r.indexOf(e2) === t2));
}
async function v(e, t2, r) {
  const a = e.portal;
  await a.signIn(), await a.user.addItem({ item: e, data: t2, folder: r == null ? void 0 : r.folder });
}
async function P(e, r) {
  const { layer: a, createItemData: o2, createJSONContext: i3, setItemProperties: n, saveResources: s2, supplementalUnsupportedErrors: p2 } = e;
  await l(e), f(e);
  const m2 = a.portalItem, c2 = i3 ? i3(m2) : y(m2), u2 = await w(a, c2, { ...r, supplementalUnsupportedErrors: p2 }), d2 = await o2({ layer: a, layerJSON: u2 }, m2);
  return await (n == null ? void 0 : n(a, m2, d2)), I(m2), await m2.update({ data: d2 }), i2(c2), await (s2 == null ? void 0 : s2(m2, c2)), m2;
}
async function $(e, r) {
  const { layer: a, createItemData: o2, createJSONContext: i3, setItemProperties: n, saveResources: s2, supplementalUnsupportedErrors: p2 } = e;
  await l(e);
  const m2 = d(e), c2 = i3 ? i3(m2) : y(m2), u2 = await w(a, c2, { ...r, supplementalUnsupportedErrors: p2 }), f2 = await o2({ layer: a, layerJSON: u2 }, m2);
  return await n(a, m2, f2), I(m2), await v(m2, f2, r), a.portalItem = m2, i2(c2), await (s2 == null ? void 0 : s2(m2, c2)), m2;
}

export {
  p,
  m,
  f,
  d,
  w,
  I,
  v,
  P,
  $
};
//# sourceMappingURL=chunk-HGATF7BF.js.map
