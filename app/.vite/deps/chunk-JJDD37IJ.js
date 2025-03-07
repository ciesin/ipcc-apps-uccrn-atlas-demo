import {
  Mt,
  ut
} from "./chunk-F7TFMQ3A.js";
import {
  f as f2
} from "./chunk-5UCWBFBR.js";
import {
  b
} from "./chunk-AI2O2GKK.js";
import {
  f
} from "./chunk-D4CSBMND.js";
import {
  o
} from "./chunk-YFLBSX2D.js";
import {
  n
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/rest/query/operations/pbfJSONFeatureSet.js
function o2(e, t) {
  return t;
}
function i(e, t, r, s) {
  switch (r) {
    case 0:
      return u(e, t + s, 0);
    case 1:
      return "lowerLeft" === e.originPosition ? u(e, t + s, 1) : l(e, t + s, 1);
  }
}
function n2(e, t, r, s) {
  return 2 === r ? u(e, t, 2) : i(e, t, r, s);
}
function a(e, t, r, s) {
  return 2 === r ? 0 === t ? 0 : u(e, t, 3) : i(e, t, r, s);
}
function h(e, t, r, s) {
  return 3 === r ? 0 === t ? 0 : u(e, t, 3) : n2(e, t, r, s);
}
function u({ translate: e, scale: t }, r, s) {
  return e[s] + r * t[s];
}
function l({ translate: e, scale: t }, r, s) {
  return e[s] - r * t[s];
}
var d = class {
  constructor(e) {
    this._options = e, this.geometryTypes = ["esriGeometryPoint", "esriGeometryMultipoint", "esriGeometryPolyline", "esriGeometryPolygon"], this._previousCoordinate = [0, 0], this._transform = null, this._applyTransform = o2, this._lengths = [], this._currentLengthIndex = 0, this._toAddInCurrentPath = 0, this._vertexDimension = 0, this._mValueOffset = null, this._coordinateBuffer = null, this._coordinateBufferPtr = 0, this._attributesConstructor = class {
    };
  }
  createFeatureResult() {
    return { fields: [], features: [] };
  }
  finishFeatureResult(e) {
    if (this._options.applyTransform && (e.transform = null), this._attributesConstructor = class {
    }, this._coordinateBuffer = null, this._lengths.length = 0, !e.hasZ) return;
    const r = o(e.geometryType, this._options.sourceSpatialReference, e.spatialReference);
    if (null != r) for (const t of e.features) r(t.geometry);
  }
  createSpatialReference() {
    return {};
  }
  addField(t, r) {
    const s = t.fields;
    n(s), s.push(r);
    const o3 = s.map((e) => e.name);
    this._attributesConstructor = function() {
      for (const e of o3) this[e] = null;
    };
  }
  addFeature(e, t) {
    e.features.push(t);
  }
  prepareFeatures(e) {
    switch (this._transform = e.transform, this._options.applyTransform && e.transform && (this._applyTransform = this._deriveApplyTransform(e)), this._mValueOffset = null, this._vertexDimension = 2, e.hasZ && this._vertexDimension++, e.hasM && (this._mValueOffset = this._vertexDimension, this._vertexDimension++), e.geometryType) {
      case "esriGeometryPoint":
        this.addCoordinate = (e2, t, r) => this.addCoordinatePoint(e2, t, r), this.createGeometry = (e2) => this.createPointGeometry(e2);
        break;
      case "esriGeometryPolygon":
        this.addCoordinate = (e2, t, r) => this._addCoordinatePolygon(e2, t, r), this.createGeometry = (e2) => this._createPolygonGeometry(e2);
        break;
      case "esriGeometryPolyline":
        this.addCoordinate = (e2, t, r) => this._addCoordinatePolyline(e2, t, r), this.createGeometry = (e2) => this._createPolylineGeometry(e2);
        break;
      case "esriGeometryMultipoint":
        this.addCoordinate = (e2, t, r) => this._addCoordinateMultipoint(e2, t, r), this.createGeometry = (e2) => this._createMultipointGeometry(e2);
    }
  }
  createFeature() {
    return this._lengths.length = 0, this._currentLengthIndex = 0, this._previousCoordinate[0] = 0, this._previousCoordinate[1] = 0, this._coordinateBuffer = null, this._coordinateBufferPtr = 0, { attributes: new this._attributesConstructor() };
  }
  allocateCoordinates() {
  }
  addLength(e, t, r) {
    0 === this._lengths.length && (this._toAddInCurrentPath = t), this._lengths.push(t);
  }
  addQueryGeometry(e, t) {
    const { queryGeometry: o3, queryGeometryType: i2 } = t, n4 = this._transform ? Mt(o3.clone(), o3, false, false, this._transform) : o3.clone(), a2 = ut(n4, i2, false, false);
    e.queryGeometryType = i2, e.queryGeometry = { ...a2 };
  }
  createPointGeometry(e) {
    const t = { x: 0, y: 0, spatialReference: e.spatialReference };
    return e.hasZ && (t.z = 0), e.hasM && (t.m = 0), t;
  }
  addCoordinatePoint(e, t, r) {
    const s = this._transform;
    switch (t = this._applyTransform(s, t, r, 0), r) {
      case 0:
        e.x = t;
        break;
      case 1:
        e.y = t;
        break;
      case 2:
        "z" in e ? e.z = t : e.m = t;
        break;
      case 3:
        e.m = t;
    }
  }
  _transformPathLikeValue(e, t) {
    let r = 0;
    t <= 1 && (r = this._previousCoordinate[t], this._previousCoordinate[t] += e);
    const s = this._transform;
    return null !== this._mValueOffset && 0 === e && t > 0 && !(t % this._mValueOffset) ? 0 : this._applyTransform(s, e, t, r);
  }
  _addCoordinatePolyline(e, t, r) {
    this._dehydratedAddPointsCoordinate(e.paths, t, r);
  }
  _addCoordinatePolygon(e, t, r) {
    this._dehydratedAddPointsCoordinate(e.rings, t, r);
  }
  _addCoordinateMultipoint(e, t, r) {
    0 === r && e.points.push([]);
    const s = this._transformPathLikeValue(t, r);
    e.points[e.points.length - 1].push(s);
  }
  _createPolygonGeometry(e) {
    return { rings: [[]], spatialReference: e.spatialReference, hasZ: !!e.hasZ, hasM: !!e.hasM };
  }
  _createPolylineGeometry(e) {
    return { paths: [[]], spatialReference: e.spatialReference, hasZ: !!e.hasZ, hasM: !!e.hasM };
  }
  _createMultipointGeometry(e) {
    return { points: [], spatialReference: e.spatialReference, hasZ: !!e.hasZ, hasM: !!e.hasM };
  }
  _dehydratedAddPointsCoordinate(e, t, r) {
    0 === r && 0 == this._toAddInCurrentPath-- && (e.push([]), this._toAddInCurrentPath = this._lengths[++this._currentLengthIndex] - 1, this._previousCoordinate[0] = 0, this._previousCoordinate[1] = 0);
    const s = this._transformPathLikeValue(t, r), o3 = e[e.length - 1];
    0 === r && (this._coordinateBufferPtr = 0, this._coordinateBuffer = new Array(this._vertexDimension), o3.push(this._coordinateBuffer)), this._coordinateBuffer[this._coordinateBufferPtr++] = s;
  }
  _deriveApplyTransform(e) {
    const { hasZ: t, hasM: r } = e;
    return t && r ? h : t ? n2 : r ? a : i;
  }
};

// node_modules/@arcgis/core/rest/query/executeQueryPBF.js
async function n3(o3, s, n4) {
  const p = f(o3), i2 = { ...n4 }, u2 = b.from(s), m = !u2.quantizationParameters, { data: f3 } = await f2(p, u2, new d({ sourceSpatialReference: u2.sourceSpatialReference, applyTransform: m }), i2);
  return f3;
}

export {
  n3 as n
};
//# sourceMappingURL=chunk-JJDD37IJ.js.map
