// node_modules/@arcgis/core/networks/support/networkFieldUtils.js
function e(e2) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const t2 = e2 == null ? void 0 : e2.fieldsIndex, o = "fromnetworksourceid", n = "fromglobalid", r = "fromterminalid", i = "tonetworksourceid", a = "toglobalid", l = "toterminalid", s = "status", m = "associationtype", d = "iscontentvisible", g = "percentalong", u = "globalid";
  return { fromNetworkSourceId: ((_a = t2 == null ? void 0 : t2.get(o)) == null ? void 0 : _a.name) ?? o, fromGlobalId: ((_b = t2 == null ? void 0 : t2.get(n)) == null ? void 0 : _b.name) ?? n, fromTerminalId: ((_c = t2 == null ? void 0 : t2.get(r)) == null ? void 0 : _c.name) ?? r, toNetworkSourceId: ((_d = t2 == null ? void 0 : t2.get(i)) == null ? void 0 : _d.name) ?? i, toGlobalId: ((_e = t2 == null ? void 0 : t2.get(a)) == null ? void 0 : _e.name) ?? a, toTerminalId: ((_f = t2 == null ? void 0 : t2.get(l)) == null ? void 0 : _f.name) ?? l, status: ((_g = t2 == null ? void 0 : t2.get(s)) == null ? void 0 : _g.name) ?? s, associationType: ((_h = t2 == null ? void 0 : t2.get(m)) == null ? void 0 : _h.name) ?? m, isContentVisible: ((_i = t2 == null ? void 0 : t2.get(d)) == null ? void 0 : _i.name) ?? d, percentAlong: ((_j = t2 == null ? void 0 : t2.get(g)) == null ? void 0 : _j.name) ?? g, globalId: ((_k = t2 == null ? void 0 : t2.get((e2 == null ? void 0 : e2.globalIdField) ?? u)) == null ? void 0 : _k.name) ?? u };
}
function t(e2, t2) {
  if ("feature" !== t2.type && "subtype-group" !== t2.type) return [];
  if (!t2.url) return [];
  const o = "utilityNetworks" in e2.map ? e2.map.utilityNetworks ?? [] : [];
  for (const n of o) if (n.isUtilityLayer(t2)) {
    const e3 = t2.fieldsIndex.get("assetgroup"), o2 = t2.fieldsIndex.get("assettype");
    return [e3 == null ? void 0 : e3.name, o2 == null ? void 0 : o2.name].filter((e4) => null != e4);
  }
  return [];
}

export {
  e,
  t
};
//# sourceMappingURL=chunk-YIZAIKLK.js.map
