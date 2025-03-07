import {
  a
} from "./chunk-5WX74QOU.js";
import {
  e as e2
} from "./chunk-YRSM2W7P.js";
import {
  o,
  s as s3
} from "./chunk-EM6PL3GZ.js";
import {
  e
} from "./chunk-J7454WTE.js";
import {
  $,
  s2
} from "./chunk-LTDNORB5.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/rest/query/operations/pbfOptimizedFeatureSet.js
var n = ["esriGeometryPoint", "esriGeometryMultipoint", "esriGeometryPolyline", "esriGeometryPolygon"];
var a2 = class {
  constructor(e3) {
    this._options = e3, this.geometryTypes = n, this._coordinatePtr = 0, this._vertexDimension = 0;
  }
  createFeatureResult() {
    return new e2();
  }
  prepareFeatures(e3) {
    this._vertexDimension = 2, e3.hasZ && this._vertexDimension++, e3.hasM && this._vertexDimension++;
  }
  finishFeatureResult(o3) {
    if (!(o3 == null ? void 0 : o3.features) || !o3.hasZ || !this._options.sourceSpatialReference || !o3.spatialReference || s2(o3.spatialReference, this._options.sourceSpatialReference) || o3.spatialReference.vcsWkid) return;
    const i2 = $(this._options.sourceSpatialReference) / $(o3.spatialReference);
    if (1 !== i2) for (const e3 of o3.features) {
      if (!o(e3)) continue;
      const t2 = e3.geometry.coords;
      for (let e4 = 2; e4 < t2.length; e4 += 3) t2[e4] *= i2;
    }
  }
  addFeature(e3, t2) {
    e3.features.push(t2);
  }
  createFeature() {
    return new s3(null, {}, null, 0);
  }
  createSpatialReference() {
    return { wkid: 0 };
  }
  createGeometry() {
    return new e();
  }
  addField(e3, t2) {
    e3.fields.push(t2);
  }
  allocateCoordinates(e3) {
    e3.coords.length = e3.lengths.reduce((e4, t2) => e4 + t2, 0) * this._vertexDimension, this._coordinatePtr = 0;
  }
  addCoordinate(e3, t2) {
    e3.coords[this._coordinatePtr++] = t2;
  }
  addCoordinatePoint(e3, t2) {
    e3.coords.push(t2);
  }
  addLength(e3, t2) {
    e3.lengths.push(t2);
  }
  addQueryGeometry(e3, t2) {
    e3.queryGeometry = t2.queryGeometry, e3.queryGeometryType = t2.queryGeometryType;
  }
  createPointGeometry() {
    return new e();
  }
};

// node_modules/@arcgis/core/rest/query/operations/pbfFeatureServiceParser.js
var a3 = ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeString", "esriFieldTypeDate", "esriFieldTypeOID", "esriFieldTypeGeometry", "esriFieldTypeBlob", "esriFieldTypeRaster", "esriFieldTypeGUID", "esriFieldTypeGlobalID", "esriFieldTypeXML", "esriFieldTypeBigInteger", "esriFieldTypeDateOnly", "esriFieldTypeTimeOnly", "esriFieldTypeTimestampOffset"];
var n2 = ["sqlTypeBigInt", "sqlTypeBinary", "sqlTypeBit", "sqlTypeChar", "sqlTypeDate", "sqlTypeDecimal", "sqlTypeDouble", "sqlTypeFloat", "sqlTypeGeometry", "sqlTypeGUID", "sqlTypeInteger", "sqlTypeLongNVarchar", "sqlTypeLongVarbinary", "sqlTypeLongVarchar", "sqlTypeNChar", "sqlTypeNVarchar", "sqlTypeOther", "sqlTypeReal", "sqlTypeSmallInt", "sqlTypeSqlXml", "sqlTypeTime", "sqlTypeTimestamp", "sqlTypeTimestamp2", "sqlTypeTinyInt", "sqlTypeVarbinary", "sqlTypeVarchar"];
var i = ["upperLeft", "lowerLeft"];
function o2(e3) {
  return e3 >= a3.length ? null : a3[e3];
}
function c(e3) {
  return e3 >= n2.length ? null : n2[e3];
}
function l(e3) {
  return e3 >= i.length ? null : i[e3];
}
function g(e3, t2) {
  return t2 >= e3.geometryTypes.length ? null : e3.geometryTypes[t2];
}
function p(e3, t2, s4) {
  const r = 3, a4 = e3.asUnsafe(), n3 = t2.createPointGeometry(s4);
  for (; a4.next(); ) switch (a4.tag()) {
    case r: {
      const e4 = a4.getUInt32(), s5 = a4.pos() + e4;
      let r2 = 0;
      for (; a4.pos() < s5; ) t2.addCoordinatePoint(n3, a4.getSInt64(), r2++);
      break;
    }
    default:
      a4.skip();
  }
  return n3;
}
function u(e3, t2, s4) {
  const r = 2, a4 = 3, n3 = e3.asUnsafe(), i2 = t2.createGeometry(s4), o3 = 2 + (s4.hasZ ? 1 : 0) + (s4.hasM ? 1 : 0);
  for (; n3.next(); ) switch (n3.tag()) {
    case r: {
      const e4 = n3.getUInt32(), s5 = n3.pos() + e4;
      let r2 = 0;
      for (; n3.pos() < s5; ) t2.addLength(i2, n3.getUInt32(), r2++);
      break;
    }
    case a4: {
      const e4 = n3.getUInt32(), s5 = n3.pos() + e4;
      let r2 = 0;
      for (t2.allocateCoordinates(i2); n3.pos() < s5; ) t2.addCoordinate(i2, n3.getSInt64(), r2), r2++, r2 === o3 && (r2 = 0);
      break;
    }
    default:
      n3.skip();
  }
  return i2;
}
function f(e3) {
  const t2 = 1, a4 = 2, n3 = 3, i2 = e3.asUnsafe(), o3 = new e();
  let c2 = "esriGeometryPoint";
  for (; i2.next(); ) switch (i2.tag()) {
    case a4: {
      const e4 = i2.getUInt32(), t3 = i2.pos() + e4;
      for (; i2.pos() < t3; ) o3.lengths.push(i2.getUInt32());
      break;
    }
    case n3: {
      const e4 = i2.getUInt32(), t3 = i2.pos() + e4;
      for (; i2.pos() < t3; ) o3.coords.push(i2.getSInt64());
      break;
    }
    case t2:
      c2 = n[i2.getEnum()];
      break;
    default:
      i2.skip();
  }
  return { queryGeometry: o3, queryGeometryType: c2 };
}
function y(e3) {
  const t2 = 1, s4 = 2, r = 3, a4 = 4, n3 = 5, i2 = 6, o3 = 7, c2 = 8, l2 = 9, g2 = e3.asUnsafe();
  for (; g2.next(); ) switch (g2.tag()) {
    case t2:
      return g2.getString();
    case s4:
      return g2.getFloat();
    case r:
      return g2.getDouble();
    case a4:
      return g2.getSInt32();
    case n3:
      return g2.getUInt32();
    case i2:
      return g2.getInt64();
    case o3:
      return g2.getUInt64();
    case c2:
      return g2.getSInt64();
    case l2:
      return g2.getBool();
    default:
      return g2.skip(), null;
  }
  return null;
}
function b(e3) {
  const t2 = 1, s4 = 2, r = 3, a4 = 4, n3 = 5, i2 = 6, l2 = e3.asUnsafe(), g2 = { type: o2(0) };
  for (; l2.next(); ) switch (l2.tag()) {
    case t2:
      g2.name = l2.getString();
      break;
    case s4:
      g2.type = o2(l2.getEnum());
      break;
    case r:
      g2.alias = l2.getString();
      break;
    case a4:
      g2.sqlType = c(l2.getEnum());
      break;
    case n3:
      l2.skip();
      break;
    case i2:
      g2.defaultValue = l2.getString();
      break;
    default:
      l2.skip();
  }
  return g2;
}
function k(e3) {
  const t2 = 1, s4 = 2, r = {}, a4 = e3.asUnsafe();
  for (; a4.next(); ) switch (a4.tag()) {
    case t2:
      r.name = a4.getString();
      break;
    case s4:
      r.isSystemMaintained = a4.getBool();
      break;
    default:
      a4.skip();
  }
  return r;
}
function d(e3, t2, s4, r) {
  const a4 = 1, n3 = 2, i2 = 4, o3 = t2.createFeature(s4);
  let c2 = 0;
  for (; e3.next(); ) switch (e3.tag()) {
    case a4: {
      const t3 = r[c2++].name;
      o3.attributes[t3] = e3.processMessage(y);
      break;
    }
    case n3:
      o3.geometry = e3.processMessageWithArgs(u, t2, s4);
      break;
    case i2:
      o3.centroid = e3.processMessageWithArgs(p, t2, s4);
      break;
    default:
      e3.skip();
  }
  return o3;
}
function T(e3) {
  const t2 = 1, s4 = 2, r = 3, a4 = 4, n3 = [1, 1, 1, 1], i2 = e3.asUnsafe();
  for (; i2.next(); ) switch (i2.tag()) {
    case t2:
      n3[0] = i2.getDouble();
      break;
    case s4:
      n3[1] = i2.getDouble();
      break;
    case a4:
      n3[2] = i2.getDouble();
      break;
    case r:
      n3[3] = i2.getDouble();
      break;
    default:
      i2.skip();
  }
  return n3;
}
function m(e3) {
  const t2 = 1, s4 = 2, r = 3, a4 = 4, n3 = [0, 0, 0, 0], i2 = e3.asUnsafe();
  for (; i2.next(); ) switch (i2.tag()) {
    case t2:
      n3[0] = i2.getDouble();
      break;
    case s4:
      n3[1] = i2.getDouble();
      break;
    case a4:
      n3[2] = i2.getDouble();
      break;
    case r:
      n3[3] = i2.getDouble();
      break;
    default:
      i2.skip();
  }
  return n3;
}
function h(e3) {
  const t2 = 1, s4 = 2, r = 3, a4 = { originPosition: l(0) }, n3 = e3.asUnsafe();
  for (; n3.next(); ) switch (n3.tag()) {
    case t2:
      a4.originPosition = l(n3.getEnum());
      break;
    case s4:
      a4.scale = n3.processMessage(T);
      break;
    case r:
      a4.translate = n3.processMessage(m);
      break;
    default:
      n3.skip();
  }
  return a4;
}
function F(e3) {
  const t2 = 1, s4 = 2, r = 3, a4 = {}, n3 = e3.asUnsafe();
  for (; n3.next(); ) switch (n3.tag()) {
    case t2:
      a4.shapeAreaFieldName = n3.getString();
      break;
    case s4:
      a4.shapeLengthFieldName = n3.getString();
      break;
    case r:
      a4.units = n3.getString();
      break;
    default:
      n3.skip();
  }
  return a4;
}
function q(e3, t2) {
  const s4 = 1, r = 2, a4 = 3, n3 = 4, i2 = 5, o3 = t2.createSpatialReference();
  for (; e3.next(); ) switch (e3.tag()) {
    case s4:
      o3.wkid = e3.getUInt32();
      break;
    case i2:
      o3.wkt = e3.getString();
      break;
    case r:
      o3.latestWkid = e3.getUInt32();
      break;
    case a4:
      o3.vcsWkid = e3.getUInt32();
      break;
    case n3:
      o3.latestVcsWkid = e3.getUInt32();
      break;
    default:
      e3.skip();
  }
  return o3;
}
function I(e3, t2) {
  const s4 = 1, r = 2, a4 = 3, n3 = 4, i2 = 5, o3 = 7, c2 = 8, l2 = 9, p2 = 10, u2 = 11, f2 = 12, y2 = 13, T2 = 15, m2 = t2.createFeatureResult(), I2 = e3.asUnsafe();
  m2.geometryType = g(t2, 0);
  let U2 = false;
  for (; I2.next(); ) switch (I2.tag()) {
    case s4:
      m2.objectIdFieldName = I2.getString();
      break;
    case a4:
      m2.globalIdFieldName = I2.getString();
      break;
    case n3:
      m2.geohashFieldName = I2.getString();
      break;
    case i2:
      m2.geometryProperties = I2.processMessage(F);
      break;
    case o3:
      m2.geometryType = g(t2, I2.getEnum());
      break;
    case c2:
      m2.spatialReference = I2.processMessageWithArgs(q, t2);
      break;
    case p2:
      m2.hasZ = I2.getBool();
      break;
    case u2:
      m2.hasM = I2.getBool();
      break;
    case f2:
      m2.transform = I2.processMessage(h);
      break;
    case l2:
      m2.exceededTransferLimit = I2.getBool();
      break;
    case y2:
      t2.addField(m2, I2.processMessage(b));
      break;
    case T2:
      U2 || (t2.prepareFeatures(m2), U2 = true), t2.addFeature(m2, I2.processMessageWithArgs(d, t2, m2, m2.fields));
      break;
    case r:
      m2.uniqueIdField = I2.processMessage(k);
      break;
    default:
      I2.skip();
  }
  return t2.finishFeatureResult(m2), m2;
}
function U(e3, t2) {
  const s4 = 1, r = 4, a4 = {};
  let n3 = null;
  for (; e3.next(); ) switch (e3.tag()) {
    case r:
      n3 = e3.processMessageWithArgs(f);
      break;
    case s4:
      a4.featureResult = e3.processMessageWithArgs(I, t2);
      break;
    default:
      e3.skip();
  }
  return null != n3 && a4.featureResult && t2.addQueryGeometry(a4, n3), a4;
}
function S(s4, r) {
  try {
    const e3 = 2, a4 = new a(new Uint8Array(s4), new DataView(s4)), n3 = {};
    for (; a4.next(); ) if (a4.tag() === e3) n3.queryResult = a4.processMessageWithArgs(U, r);
    else a4.skip();
    return n3;
  } catch (a4) {
    throw new s("query:parsing-pbf", "Error while parsing FeatureSet PBF payload", { error: a4 });
  }
}

// node_modules/@arcgis/core/rest/query/operations/pbfQueryUtils.js
function t(t2, r) {
  const u2 = S(t2, r), o3 = u2.queryResult.featureResult, s4 = u2.queryResult.queryGeometry, y2 = u2.queryResult.queryGeometryType;
  if (o3 && o3.features && o3.features.length && o3.objectIdFieldName) {
    const e3 = o3.objectIdFieldName;
    for (const t3 of o3.features) t3.attributes && (t3.objectId = t3.attributes[e3]);
  }
  return o3 && (o3.queryGeometry = s4, o3.queryGeometryType = y2), o3;
}

export {
  a2 as a,
  b,
  h,
  t
};
//# sourceMappingURL=chunk-22F4IMT5.js.map
