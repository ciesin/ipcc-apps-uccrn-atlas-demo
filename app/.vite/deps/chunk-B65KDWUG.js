// node_modules/@arcgis/core/widgets/support/decorators/vmEvent.js
function e(e2) {
  return (a) => {
    a.hasOwnProperty("_delegatedEventNames") || (a._delegatedEventNames = a._delegatedEventNames ? a._delegatedEventNames.slice() : []);
    const n = a._delegatedEventNames, r = Array.isArray(e2) ? e2 : t(e2);
    n.push(...r);
  };
}
function t(e2) {
  return e2.split(",").map((e3) => e3.trim());
}

export {
  e
};
//# sourceMappingURL=chunk-B65KDWUG.js.map
