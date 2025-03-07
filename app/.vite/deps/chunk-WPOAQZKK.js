import {
  t
} from "./chunk-FXK4JVMZ.js";
import {
  s as s2
} from "./chunk-EM6PL3GZ.js";
import {
  e
} from "./chunk-J7454WTE.js";
import {
  ge,
  p
} from "./chunk-6REABBOQ.js";
import {
  C
} from "./chunk-LTDNORB5.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/graphics/sources/geojson/geojson.js
var c = { LineString: "esriGeometryPolyline", MultiLineString: "esriGeometryPolyline", MultiPoint: "esriGeometryMultipoint", Point: "esriGeometryPoint", Polygon: "esriGeometryPolygon", MultiPolygon: "esriGeometryPolygon" };
function u(e2) {
  return c[e2];
}
function* l(e2) {
  switch (e2.type) {
    case "Feature":
      yield e2;
      break;
    case "FeatureCollection":
      for (const t2 of e2.features) t2 && (yield t2);
  }
}
function* f(e2) {
  if (e2) switch (e2.type) {
    case "Point":
      yield e2.coordinates;
      break;
    case "LineString":
    case "MultiPoint":
      yield* e2.coordinates;
      break;
    case "MultiLineString":
    case "Polygon":
      for (const t2 of e2.coordinates) yield* t2;
      break;
    case "MultiPolygon":
      for (const t2 of e2.coordinates) for (const e3 of t2) yield* e3;
  }
}
function* p2(e2, t2 = {}) {
  const { geometryType: n, objectIdField: i } = t2;
  for (const s3 of e2) {
    const { geometry: e3, properties: c2, id: l2 } = s3;
    if (e3 && u(e3.type) !== n) continue;
    const f2 = c2 || {};
    let p3;
    i && (p3 = f2[i], null == l2 || p3 || (f2[i] = p3 = l2));
    const a2 = new s2(e3 ? h(new e(), e3, t2) : null, f2, null, p3);
    yield a2;
  }
}
function a(e2) {
  for (const t2 of e2) if (t2.length > 2) return true;
  return false;
}
function y(e2) {
  return !g(e2);
}
function d(e2) {
  return g(e2);
}
function g(e2) {
  let t2 = 0;
  for (let n = 0; n < e2.length; n++) {
    const o = e2[n], r = e2[(n + 1) % e2.length];
    t2 += o[0] * r[1] - r[0] * o[1];
  }
  return t2 <= 0;
}
function m(e2) {
  const t2 = e2[0], n = e2[e2.length - 1];
  return t2[0] === n[0] && t2[1] === n[1] && t2[2] === n[2] || e2.push(t2), e2;
}
function h(e2, t2, n) {
  switch (t2.type) {
    case "LineString":
      return w(e2, t2, n);
    case "MultiLineString":
      return P(e2, t2, n);
    case "MultiPoint":
      return j(e2, t2, n);
    case "MultiPolygon":
      return b(e2, t2, n);
    case "Point":
      return S(e2, t2, n);
    case "Polygon":
      return F(e2, t2, n);
  }
}
function w(e2, t2, n) {
  return M(e2, t2.coordinates, n), e2;
}
function P(e2, t2, n) {
  for (const o of t2.coordinates) M(e2, o, n);
  return e2;
}
function j(e2, t2, n) {
  return M(e2, t2.coordinates, n), e2;
}
function b(e2, t2, n) {
  for (const o of t2.coordinates) {
    G(e2, o[0], n);
    for (let t3 = 1; t3 < o.length; t3++) k(e2, o[t3], n);
  }
  return e2;
}
function S(e2, t2, n) {
  return O(e2, t2.coordinates, n), e2;
}
function F(e2, t2, n) {
  const o = t2.coordinates;
  G(e2, o[0], n);
  for (let r = 1; r < o.length; r++) k(e2, o[r], n);
  return e2;
}
function G(e2, t2, n) {
  const o = m(t2);
  y(o) ? T(e2, o, n) : M(e2, o, n);
}
function k(e2, t2, n) {
  const o = m(t2);
  d(o) ? T(e2, o, n) : M(e2, o, n);
}
function M(e2, t2, n) {
  for (const o of t2) O(e2, o, n);
  e2.lengths.push(t2.length);
}
function T(e2, t2, n) {
  for (let o = t2.length - 1; o >= 0; o--) O(e2, t2[o], n);
  e2.lengths.push(t2.length);
}
function O(e2, t2, n) {
  const [o, r, i] = t2;
  e2.coords.push(o, r), n.hasZ && e2.coords.push(i || 0);
}
function L(t2) {
  switch (typeof t2) {
    case "string":
      return t(t2) ? "esriFieldTypeDate" : "esriFieldTypeString";
    case "number":
      return "esriFieldTypeDouble";
    default:
      return "unknown";
  }
}
function E(e2, o = 4326) {
  if (!e2) throw new s("geojson-layer:empty", "GeoJSON data is empty");
  if ("Feature" !== e2.type && "FeatureCollection" !== e2.type) throw new s("geojson-layer:unsupported-geojson-object", "missing or not supported GeoJSON object type", { data: e2 });
  const { crs: r } = e2;
  if (!r) return;
  const i = "string" == typeof r ? r : "name" === r.type ? r.properties.name : "EPSG" === r.type ? r.properties.code : null, s3 = C({ wkid: o }) ? new RegExp(".*(CRS84H?|4326)$", "i") : new RegExp(`.*(${o})$`, "i");
  if (!i || !s3.test(i)) throw new s("geojson:unsupported-crs", "unsupported GeoJSON 'crs' member", { crs: r });
}
function I(e2, t2 = {}) {
  const n = [], o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  let c2, p3 = false, y2 = null, d2 = false, { geometryType: g2 = null } = t2;
  for (const s3 of l(e2)) {
    const { geometry: e3, properties: t3, id: l2 } = s3;
    if (!e3 || (g2 || (g2 = u(e3.type)), u(e3.type) === g2)) {
      if (!p3) {
        p3 = a(f(e3));
      }
      if (d2 || (d2 = null != l2, d2 && (c2 = typeof l2, t3 && (y2 = Object.keys(t3).filter((e4) => t3[e4] === l2)))), t3 && y2 && d2 && null != l2 && (y2.length > 1 ? y2 = y2.filter((e4) => t3[e4] === l2) : 1 === y2.length && (y2 = t3[y2[0]] === l2 ? y2 : [])), t3) for (const e4 in t3) {
        if (o.has(e4)) continue;
        const s4 = L(t3[e4]);
        if ("unknown" === s4) {
          r.add(e4);
          continue;
        }
        r.delete(e4), o.add(e4);
        const c3 = p(e4);
        c3 && n.push({ name: c3, alias: e4, type: s4 });
      }
    }
  }
  const m2 = p(1 === (y2 == null ? void 0 : y2.length) && y2[0] || null) ?? void 0;
  if (m2) {
    for (const i of n) if (i.name === m2 && ge(i)) {
      i.type = "esriFieldTypeOID";
      break;
    }
  }
  return { fields: n, geometryType: g2, hasZ: p3, objectIdFieldName: m2, objectIdFieldType: c2, unknownFields: Array.from(r) };
}
function N(e2, t2) {
  return Array.from(p2(l(e2), t2));
}

export {
  u,
  E,
  I,
  N
};
//# sourceMappingURL=chunk-WPOAQZKK.js.map
