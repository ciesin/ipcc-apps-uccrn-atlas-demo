import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/webdoc/support/saveUtils.js
async function r(e) {
  const r2 = [];
  for (const o2 of e.allLayers) if ("beforeSave" in o2 && "function" == typeof o2.beforeSave) {
    const e2 = o2.beforeSave();
    e2 && r2.push(e2);
  }
  await Promise.allSettled(r2);
}
var o = /* @__PURE__ */ new Set(["layer:unsupported", "property:unsupported", "symbol:unsupported", "symbol-layer:unsupported", "url:unsupported"]);
function t(r2, t2, n) {
  let s2 = (r2.messages ?? []).filter(({ type: e }) => "error" === e).map(({ name: r3, message: o2, details: t3 }) => new s(r3, o2, t3));
  if (r2.blockedRelativeUrls && (s2 = s2.concat(r2.blockedRelativeUrls.map((r3) => new s("url:unsupported", `Relative url '${r3}' is not supported`)))), n) {
    const { ignoreUnsupported: e, supplementalUnsupportedErrors: r3 = [], requiredPropertyChecksDisabled: t3 } = n;
    e && (s2 = s2.filter(({ name: e2 }) => !(o.has(e2) || r3.includes(e2)))), t3 && (s2 = s2.filter((e2) => "web-document-write:property-required" !== e2.name));
  }
  if (s2.length > 0) throw new s(t2.errorName, "Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information", { errors: s2 });
}

export {
  r,
  t
};
//# sourceMappingURL=chunk-QCTBKAKN.js.map
