// node_modules/@arcgis/core/layers/support/floorFilterUtils.js
function o(o2) {
  var _a;
  const n2 = o2.layer;
  if ("floorInfo" in n2 && ((_a = n2.floorInfo) == null ? void 0 : _a.floorField) && "floors" in o2.view) {
    return l(o2.view.floors, n2.floorInfo.floorField);
  }
  return null;
}
function n(o2, n2) {
  var _a;
  return "floorInfo" in n2 && ((_a = n2.floorInfo) == null ? void 0 : _a.floorField) ? l(o2, n2.floorInfo.floorField) : null;
}
function l(o2, n2) {
  if (!(o2 == null ? void 0 : o2.length)) return null;
  const l2 = o2.filter((o3) => "" !== o3).map((o3) => `'${o3}'`);
  return l2.push("''"), `${n2} IN (${l2.join(",")}) OR ${n2} IS NULL`;
}

export {
  o,
  n
};
//# sourceMappingURL=chunk-H263NTAU.js.map
