import {
  t
} from "./chunk-4LAB32KQ.js";
import {
  d
} from "./chunk-ONZPKEDE.js";
import {
  q
} from "./chunk-LCBD3JEK.js";
import {
  C,
  K,
  M,
  u
} from "./chunk-XEBZUAYT.js";
import {
  m
} from "./chunk-W633AKTD.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  P2 as P,
  s as s2
} from "./chunk-UFBX3XSC.js";
import {
  Et
} from "./chunk-F7TCEOHX.js";
import {
  a,
  s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/kmlUtils.js
var c = { esriGeometryPoint: "points", esriGeometryPolyline: "polylines", esriGeometryPolygon: "polygons" };
function d2(e) {
  var _a;
  const o = e.folders || [], t2 = o.slice(), r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Map(), l = { esriGeometryPoint: n, esriGeometryPolyline: i, esriGeometryPolygon: f };
  (((_a = e.featureCollection) == null ? void 0 : _a.layers) || []).forEach((e2) => {
    const o2 = a(e2);
    o2.featureSet.features = [];
    const t3 = e2.featureSet.geometryType;
    r.set(t3, o2);
    const a3 = e2.layerDefinition.objectIdField;
    "esriGeometryPoint" === t3 ? h(n, a3, e2.featureSet.features) : "esriGeometryPolyline" === t3 ? h(i, a3, e2.featureSet.features) : "esriGeometryPolygon" === t3 && h(f, a3, e2.featureSet.features);
  }), e.groundOverlays && e.groundOverlays.forEach((e2) => {
    a2.set(e2.id, e2);
  }), o.forEach((o2) => {
    o2.networkLinkIds.forEach((r2) => {
      const s3 = P2(r2, o2.id, e.networkLinks);
      s3 && t2.push(s3);
    });
  }), t2.forEach((e2) => {
    var _a2;
    if (e2.featureInfos) {
      e2.points = a(r.get("esriGeometryPoint")), e2.polylines = a(r.get("esriGeometryPolyline")), e2.polygons = a(r.get("esriGeometryPolygon")), e2.mapImages = [];
      for (const o2 of e2.featureInfos) switch (o2.type) {
        case "esriGeometryPoint":
        case "esriGeometryPolyline":
        case "esriGeometryPolygon": {
          const t3 = l[o2.type].get(o2.id);
          t3 && ((_a2 = e2[c[o2.type]]) == null ? void 0 : _a2.featureSet.features.push(t3));
          break;
        }
        case "GroundOverlay": {
          const t3 = a2.get(o2.id);
          t3 && e2.mapImages.push(t3);
          break;
        }
      }
      e2.fullExtent = j([e2]);
    }
  });
  const u2 = j(t2);
  return { folders: o, sublayers: t2, extent: u2 };
}
function g2(t2, s3, i, f) {
  var _a;
  const a2 = (_a = s2) == null ? void 0 : _a.findCredential(t2);
  t2 = Et(t2, { token: a2 == null ? void 0 : a2.token });
  const l = s.kmlServiceUrl;
  return P(l, { query: { url: t2, model: "simple", folders: "", refresh: 0 !== i || void 0, outSR: JSON.stringify(s3) }, responseType: "json", signal: f });
}
function S(e, o, t2 = null, r = []) {
  const s3 = [], n = {}, i = o.sublayers, f = new Set(o.folders.map((e2) => e2.id));
  return i.forEach((o2) => {
    var _a;
    const i2 = new e();
    if (t2 ? i2.read(o2, t2) : i2.read(o2), r.length && f.has(i2.id) && (i2.visible = r.includes(i2.id)), n[o2.id] = i2, null != o2.parentFolderId && -1 !== o2.parentFolderId) {
      const e2 = n[o2.parentFolderId];
      e2.sublayers || (e2.sublayers = []), (_a = e2.sublayers) == null ? void 0 : _a.unshift(i2);
    } else s3.unshift(i2);
  }), s3;
}
function h(e, o, t2) {
  t2.forEach((t3) => {
    e.set(t3.attributes[o], t3);
  });
}
function G(e, o) {
  let t2;
  return o.some((o2) => o2.id === e && (t2 = o2, true)), t2;
}
function P2(e, o, t2) {
  const r = G(e, t2);
  return r && (r.parentFolderId = o, r.networkLink = r), r;
}
async function b(e) {
  const o = d.fromJSON(e.featureSet).features, r = e.layerDefinition, s3 = t(r.drawingInfo.renderer), n = q.fromJSON(e.popupInfo), i = [];
  for (const t2 of o) {
    const e2 = await s3.getSymbolAsync(t2);
    t2.symbol = e2, t2.popupTemplate = n, t2.visible = true, i.push(t2);
  }
  return i;
}
function j(e) {
  var _a, _b, _c, _d, _e, _f;
  const o = u(K), t2 = u(K);
  for (const r of e) {
    if ((_b = (_a = r.polygons) == null ? void 0 : _a.featureSet) == null ? void 0 : _b.features) for (const e2 of r.polygons.featureSet.features) m(o, e2.geometry), M(t2, o);
    if ((_d = (_c = r.polylines) == null ? void 0 : _c.featureSet) == null ? void 0 : _d.features) for (const e2 of r.polylines.featureSet.features) m(o, e2.geometry), M(t2, o);
    if ((_f = (_e = r.points) == null ? void 0 : _e.featureSet) == null ? void 0 : _f.features) for (const e2 of r.points.featureSet.features) m(o, e2.geometry), M(t2, o);
    if (r.mapImages) for (const e2 of r.mapImages) m(o, e2.extent), M(t2, o);
  }
  return C(t2, K) ? void 0 : { xmin: t2[0], ymin: t2[1], zmin: t2[2], xmax: t2[3], ymax: t2[4], zmax: t2[5], spatialReference: g.WGS84 };
}

export {
  d2 as d,
  g2 as g,
  S,
  b,
  j
};
//# sourceMappingURL=chunk-YY3PXV4E.js.map
