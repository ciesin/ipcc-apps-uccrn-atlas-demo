import {
  y as y2
} from "./chunk-FF44HCOD.js";
import {
  y
} from "./chunk-XCRRZPKE.js";
import {
  r as r2
} from "./chunk-ZYOZHQFS.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  s
} from "./chunk-BDBI2KVA.js";
import {
  i
} from "./chunk-WE4EKKVR.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  N,
  a3 as a,
  u2 as u,
  w,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/layers/support/source/MapLayerSource.js
var a2;
var c = a2 = class extends S {
  constructor(r3) {
    super(r3), this.type = "map-layer";
  }
  clone() {
    const { mapLayerId: r3, gdbVersion: o2 } = this;
    return new a2({ mapLayerId: r3, gdbVersion: o2 });
  }
};
r([r2({ mapLayer: "map-layer" }), m({ json: { write: { isRequired: true } } })], c.prototype, "type", void 0), r([m({ type: x, json: { write: { isRequired: true } } })], c.prototype, "mapLayerId", void 0), r([m({ type: String, json: { write: true } })], c.prototype, "gdbVersion", void 0), c = a2 = r([a("esri.layers.support.source.MapLayerSource")], c);

// node_modules/@arcgis/core/layers/support/source/QueryTableDataSource.js
var c2;
var a3 = c2 = class extends S {
  constructor(e) {
    super(e), this.type = "query-table";
  }
  clone() {
    const { workspaceId: e, query: r3, oidFields: o2, spatialReference: t, geometryType: s2 } = this, p3 = { workspaceId: e, query: r3, oidFields: o2, spatialReference: (t == null ? void 0 : t.clone()) ?? void 0, geometryType: s2 };
    return new c2(p3);
  }
};
r([r2({ queryTable: "query-table" }), m({ json: { write: { isRequired: true } } })], a3.prototype, "type", void 0), r([m({ type: String, json: { write: true } })], a3.prototype, "workspaceId", void 0), r([m({ type: String, json: { write: true } })], a3.prototype, "query", void 0), r([m({ type: String, json: { write: true } })], a3.prototype, "oidFields", void 0), r([m({ type: g, json: { write: true } })], a3.prototype, "spatialReference", void 0), r([r2(y)], a3.prototype, "geometryType", void 0), a3 = c2 = r([a("esri.layers.support.source.QueryTableDataSource")], a3);

// node_modules/@arcgis/core/layers/support/source/RasterDataSource.js
var p;
var a4 = p = class extends S {
  constructor(r3) {
    super(r3), this.type = "raster";
  }
  clone() {
    const { workspaceId: r3, dataSourceName: o2 } = this;
    return new p({ workspaceId: r3, dataSourceName: o2 });
  }
};
r([r2({ raster: "raster" }), m({ json: { write: { isRequired: true } } })], a4.prototype, "type", void 0), r([m({ type: String, json: { write: true } })], a4.prototype, "dataSourceName", void 0), r([m({ type: String, json: { write: true } })], a4.prototype, "workspaceId", void 0), a4 = p = r([a("esri.layers.support.source.RasterDataSource")], a4);

// node_modules/@arcgis/core/layers/support/source/TableDataSource.js
var p2;
var a5 = p2 = class extends S {
  constructor(o2) {
    super(o2), this.type = "table";
  }
  clone() {
    const { workspaceId: o2, gdbVersion: r3, dataSourceName: e } = this;
    return new p2({ workspaceId: o2, gdbVersion: r3, dataSourceName: e });
  }
};
r([r2({ table: "table" }), m({ json: { write: { isRequired: true } } })], a5.prototype, "type", void 0), r([m({ type: String, json: { write: true } })], a5.prototype, "workspaceId", void 0), r([m({ type: String, json: { write: true } })], a5.prototype, "gdbVersion", void 0), r([m({ type: String, json: { write: true } })], a5.prototype, "dataSourceName", void 0), a5 = p2 = r([a("esri.layers.support.source.TableDataSource")], a5);

// node_modules/@arcgis/core/layers/support/source/DataLayerSource.js
var f;
var j;
var m2 = i()({ esriLeftInnerJoin: "left-inner-join", esriLeftOuterJoin: "left-outer-join" });
var T = f = class extends S {
  constructor(e) {
    super(e), this.type = "join-table";
  }
  readLeftTableSource(e, r3, o2) {
    return g2()(e, r3, o2);
  }
  castLeftTableSource(e) {
    return N(w2(), e);
  }
  readRightTableSource(e, r3, o2) {
    return g2()(e, r3, o2);
  }
  castRightTableSource(e) {
    return N(w2(), e);
  }
  clone() {
    const { leftTableKey: e, rightTableKey: r3, leftTableSource: o2, rightTableSource: t, joinType: a6 } = this, s2 = { leftTableKey: e, rightTableKey: r3, leftTableSource: (o2 == null ? void 0 : o2.clone()) ?? void 0, rightTableSource: (t == null ? void 0 : t.clone()) ?? void 0, joinType: a6 };
    return new f(s2);
  }
};
r([r2({ joinTable: "join-table" }), m({ json: { write: { isRequired: true } } })], T.prototype, "type", void 0), r([m({ type: String, json: { write: true } })], T.prototype, "leftTableKey", void 0), r([m({ type: String, json: { write: true } })], T.prototype, "rightTableKey", void 0), r([m({ json: { write: true } })], T.prototype, "leftTableSource", void 0), r([o("leftTableSource")], T.prototype, "readLeftTableSource", null), r([s("leftTableSource")], T.prototype, "castLeftTableSource", null), r([m({ json: { write: true } })], T.prototype, "rightTableSource", void 0), r([o("rightTableSource")], T.prototype, "readRightTableSource", null), r([s("rightTableSource")], T.prototype, "castRightTableSource", null), r([r2(m2)], T.prototype, "joinType", void 0), T = f = r([a("esri.layers.support.source.JoinTableDataSource")], T);
var h = null;
function g2() {
  return h || (h = u({ types: w2() })), h;
}
var v = null;
function w2() {
  return v || (v = { key: "type", base: null, typeMap: { "data-layer": R, "map-layer": c } }), v;
}
var L = { key: "type", base: null, typeMap: { "join-table": T, "query-table": a3, raster: a4, table: a5 } };
var R = j = class extends S {
  constructor(e) {
    super(e), this.type = "data-layer";
  }
  clone() {
    const { fields: e, dataSource: r3 } = this;
    return new j({ fields: e, dataSource: r3 });
  }
};
r([r2({ dataLayer: "data-layer" }), m({ json: { write: { isRequired: true } } })], R.prototype, "type", void 0), r([m({ type: [y2], json: { write: true } })], R.prototype, "fields", void 0), r([m({ types: L, json: { write: true } })], R.prototype, "dataSource", void 0), R = j = r([a("esri.layers.support.source.DataLayerSource")], R), R.from = w(R);

export {
  c,
  R
};
//# sourceMappingURL=chunk-4NGIUHKX.js.map
