import {
  m
} from "./chunk-CHL75CEP.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  _,
  p
} from "./chunk-ACGZOBZ6.js";

// node_modules/@arcgis/core/core/loadAll.js
async function t(o, l) {
  return await o.load(), a(o, l);
}
async function a(t2, a2) {
  const s = [], c = (...o) => {
    for (const l of o) null != l && (Array.isArray(l) ? c(...l) : V.isCollection(l) ? l.forEach((o2) => c(o2)) : m.isLoadable(l) && s.push(l));
  };
  a2(c);
  let f = null;
  if (await p(s, async (o) => {
    const n = await _(i(o) ? o.loadAll() : o.load());
    false !== n.ok || f || (f = n);
  }), f) throw f.error;
  return t2;
}
function i(o) {
  return "loadAll" in o && "function" == typeof o.loadAll;
}

export {
  t,
  a
};
//# sourceMappingURL=chunk-3C7TTTUX.js.map
