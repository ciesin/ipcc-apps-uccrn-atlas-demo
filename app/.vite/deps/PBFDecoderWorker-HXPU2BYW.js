import {
  d,
  w,
  x
} from "./chunk-HS463BGE.js";
import "./chunk-5BFUNAMR.js";
import {
  Mt,
  ut
} from "./chunk-F7TFMQ3A.js";
import {
  t
} from "./chunk-22F4IMT5.js";
import "./chunk-5WX74QOU.js";
import "./chunk-YRSM2W7P.js";
import "./chunk-EM6PL3GZ.js";
import "./chunk-J7454WTE.js";
import "./chunk-U6JFTJMZ.js";
import "./chunk-A4LAIXK6.js";
import {
  y
} from "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import "./chunk-XEBZUAYT.js";
import {
  o
} from "./chunk-YFLBSX2D.js";
import "./chunk-XCRRZPKE.js";
import "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import {
  e3 as e
} from "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import {
  n
} from "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/rest/query/operations/pbfDehydratedFeatureSet.js
function u(t3, e2) {
  return e2;
}
function p(t3, e2, r, s2) {
  switch (r) {
    case 0:
      return f(t3, e2 + s2, 0);
    case 1:
      return "lowerLeft" === t3.originPosition ? f(t3, e2 + s2, 1) : y2(t3, e2 + s2, 1);
  }
}
function d2(t3, e2, r, s2) {
  return 2 === r ? f(t3, e2, 2) : p(t3, e2, r, s2);
}
function c(t3, e2, r, s2) {
  return 2 === r ? f(t3, e2, 3) : p(t3, e2, r, s2);
}
function m(t3, e2, r, s2) {
  return 3 === r ? f(t3, e2, 3) : d2(t3, e2, r, s2);
}
function f({ translate: t3, scale: e2 }, r, s2) {
  return t3[s2] + r * e2[s2];
}
function y2({ translate: t3, scale: e2 }, r, s2) {
  return t3[s2] - r * e2[s2];
}
var _ = class {
  constructor(t3) {
    this._options = t3, this.geometryTypes = ["point", "multipoint", "polyline", "polygon"], this._previousCoordinate = [0, 0], this._transform = null, this._applyTransform = u, this._lengths = [], this._currentLengthIndex = 0, this._toAddInCurrentPath = 0, this._vertexDimension = 0, this._coordinateBuffer = null, this._coordinateBufferPtr = 0, this._attributesConstructor = class {
    }, this._missingAttributes = [];
  }
  get missingAttributes() {
    return this._missingAttributes;
  }
  createFeatureResult() {
    return new x();
  }
  finishFeatureResult(t3) {
    if (this._options.applyTransform && (t3.transform = null), this._attributesConstructor = class {
    }, this._coordinateBuffer = null, this._lengths.length = 0, !t3.hasZ) return;
    const e2 = o(t3.geometryType, this._options.sourceSpatialReference, t3.spatialReference);
    if (null != e2) for (const r of t3.features) e2(r.geometry);
  }
  createSpatialReference() {
    return new g();
  }
  addField(t3, e2) {
    t3.fields.push(y.fromJSON(e2));
    const r = t3.fields.map((t4) => t4.name);
    this._attributesConstructor = function() {
      for (const t4 of r) this[t4] = null;
    };
  }
  addFeature(t3, e2) {
    const r = this._options.maxStringAttributeLength, s2 = this._options.maxStringAttributeFields;
    w(e2.attributes, s2, r, (r2) => {
      const s3 = e2.attributes[t3.objectIdFieldName];
      null != s3 && this._missingAttributes.push({ objectId: s3, attribute: r2 });
    }), t3.features.push(e2);
  }
  addQueryGeometry(t3, e2) {
    const { queryGeometry: r, queryGeometryType: s2 } = e2, i = this._transform ? Mt(r.clone(), r, false, false, this._transform) : r.clone(), o2 = ut(i, s2, false, false);
    switch (s2) {
      case "esriGeometryPoint":
        o2.type = "point";
        break;
      case "esriGeometryPolygon":
        o2.type = "polygon";
        break;
      case "esriGeometryPolyline":
        o2.type = "polyline";
        break;
      case "esriGeometryMultipoint":
        o2.type = "multipoint";
    }
    t3.queryGeometryType = s2, t3.queryGeometry = o2;
  }
  prepareFeatures(e2) {
    switch (this._transform = e2.transform ?? null, this._options.applyTransform && e2.transform && (this._applyTransform = this._deriveApplyTransform(e2)), this._vertexDimension = 2, e2.hasZ && this._vertexDimension++, e2.hasM && this._vertexDimension++, e2.geometryType) {
      case "point":
        this.addCoordinate = (t3, e3, r) => this.addCoordinatePoint(t3, e3, r), this.createGeometry = (t3) => this.createPointGeometry(t3);
        break;
      case "polygon":
        this.addCoordinate = (t3, e3, r) => this._addCoordinatePolygon(t3, e3, r), this.createGeometry = (t3) => this._createPolygonGeometry(t3);
        break;
      case "polyline":
        this.addCoordinate = (t3, e3, r) => this._addCoordinatePolyline(t3, e3, r), this.createGeometry = (t3) => this._createPolylineGeometry(t3);
        break;
      case "multipoint":
        this.addCoordinate = (t3, e3, r) => this._addCoordinateMultipoint(t3, e3, r), this.createGeometry = (t3) => this._createMultipointGeometry(t3);
        break;
      case "mesh":
      case "extent":
        break;
      default:
        n(e2.geometryType);
    }
  }
  createFeature() {
    return this._lengths.length = 0, this._currentLengthIndex = 0, this._previousCoordinate[0] = 0, this._previousCoordinate[1] = 0, new d(e(), null, new this._attributesConstructor());
  }
  allocateCoordinates() {
    const t3 = this._lengths.reduce((t4, e2) => t4 + e2, 0);
    this._coordinateBuffer = new Float64Array(t3 * this._vertexDimension), this._coordinateBufferPtr = 0;
  }
  addLength(t3, e2) {
    0 === this._lengths.length && (this._toAddInCurrentPath = e2), this._lengths.push(e2);
  }
  createPointGeometry(t3) {
    const e2 = { type: "point", x: 0, y: 0, spatialReference: t3.spatialReference, hasZ: !!t3.hasZ, hasM: !!t3.hasM };
    return e2.hasZ && (e2.z = 0), e2.hasM && (e2.m = 0), e2;
  }
  addCoordinatePoint(t3, e2, r) {
    const s2 = this._transform ? this._applyTransform(this._transform, e2, r, 0) : e2;
    if (null != s2) switch (r) {
      case 0:
        t3.x = s2;
        break;
      case 1:
        t3.y = s2;
        break;
      case 2:
        t3.hasZ ? t3.z = s2 : t3.m = s2;
        break;
      case 3:
        t3.m = s2;
    }
  }
  _transformPathLikeValue(t3, e2) {
    let r = 0;
    return e2 <= 1 && (r = this._previousCoordinate[e2], this._previousCoordinate[e2] += t3), this._transform ? this._applyTransform(this._transform, t3, e2, r) : t3;
  }
  _addCoordinatePolyline(t3, e2, r) {
    this._dehydratedAddPointsCoordinate(t3.paths, e2, r);
  }
  _addCoordinatePolygon(t3, e2, r) {
    this._dehydratedAddPointsCoordinate(t3.rings, e2, r);
  }
  _addCoordinateMultipoint(t3, e2, r) {
    0 === r && t3.points.push([]);
    const s2 = this._transformPathLikeValue(e2, r);
    t3.points[t3.points.length - 1].push(s2);
  }
  _createPolygonGeometry(t3) {
    return { type: "polygon", rings: [[]], spatialReference: t3.spatialReference, hasZ: !!t3.hasZ, hasM: !!t3.hasM };
  }
  _createPolylineGeometry(t3) {
    return { type: "polyline", paths: [[]], spatialReference: t3.spatialReference, hasZ: !!t3.hasZ, hasM: !!t3.hasM };
  }
  _createMultipointGeometry(t3) {
    return { type: "multipoint", points: [], spatialReference: t3.spatialReference, hasZ: !!t3.hasZ, hasM: !!t3.hasM };
  }
  _dehydratedAddPointsCoordinate(t3, e2, r) {
    0 === r && 0 == this._toAddInCurrentPath-- && (t3.push([]), this._toAddInCurrentPath = this._lengths[++this._currentLengthIndex] - 1, this._previousCoordinate[0] = 0, this._previousCoordinate[1] = 0);
    const s2 = this._transformPathLikeValue(e2, r), i = t3[t3.length - 1], o2 = this._coordinateBuffer;
    if (o2) {
      if (0 === r) {
        const t4 = this._coordinateBufferPtr * Float64Array.BYTES_PER_ELEMENT;
        i.push(new Float64Array(o2.buffer, t4, this._vertexDimension));
      }
      o2[this._coordinateBufferPtr++] = s2;
    }
  }
  _deriveApplyTransform(t3) {
    const { hasZ: e2, hasM: r } = t3;
    return e2 && r ? m : e2 ? d2 : r ? c : p;
  }
};

// node_modules/@arcgis/core/views/3d/support/PBFDecoderWorker.js
var t2 = class {
  _parseFeatureQuery(t3) {
    var _a;
    const s2 = new _(t3.options), i = t(t3.buffer, s2), o2 = { ...i, spatialReference: (_a = i.spatialReference) == null ? void 0 : _a.toJSON(), fields: i.fields ? i.fields.map((e2) => e2.toJSON()) : void 0, missingAttributes: s2.missingAttributes };
    return Promise.resolve(o2);
  }
};
function s() {
  return new t2();
}
export {
  s as default
};
//# sourceMappingURL=PBFDecoderWorker-HXPU2BYW.js.map
