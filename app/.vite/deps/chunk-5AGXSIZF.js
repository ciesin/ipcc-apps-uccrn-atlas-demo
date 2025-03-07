import {
  w
} from "./chunk-H2PMLL3X.js";
import {
  e as e2,
  t as t2
} from "./chunk-K24WU5UX.js";
import {
  e,
  o as o2
} from "./chunk-56GFF6UO.js";
import {
  i,
  u
} from "./chunk-LH36NQSN.js";
import {
  N,
  P as P4,
  c,
  q
} from "./chunk-UMYFDXOJ.js";
import {
  o as o3
} from "./chunk-QTWG47SG.js";
import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import {
  j as j2
} from "./chunk-T7KGE6VP.js";
import {
  P as P3
} from "./chunk-W633AKTD.js";
import {
  n as n2,
  r as r4
} from "./chunk-JLFSX3JT.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  g as g2,
  r as r3
} from "./chunk-RDUV6YP6.js";
import {
  r as r2
} from "./chunk-6P7HXSJ6.js";
import {
  t
} from "./chunk-HQLPC24M.js";
import {
  P,
  d,
  v
} from "./chunk-YSPSOPLL.js";
import {
  P2,
  m3 as m2
} from "./chunk-UFBX3XSC.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/XHRAdapter.js
var s = class extends EventTarget {
  constructor() {
    super(...arguments), this._readyState = 0, this._responseType = "", this.timeout = 0, this._withCredentials = false, this.onabort = null, this.onerror = null, this.onload = null, this.onloadend = null, this.onloadstart = null, this.onprogress = null, this.ontimeout = null, this.onreadystatechange = null, this.UNSENT = 0, this.OPENED = 1, this.HEADERS_RECEIVED = 2, this.LOADING = 3, this.DONE = 4, this._abortController = null, this._error = null, this._options = {}, this._response = null, this._sendFlag = false, this._url = "";
  }
  get readyState() {
    return this._readyState;
  }
  get response() {
    return "" === this.responseType || "text" === this.responseType ? this.responseText : this.readyState !== this.DONE || this._error || !this._response ? null : this._response.data;
  }
  get responseText() {
    var _a2;
    return "" !== this.responseType && "text" !== this.responseType && this._throwDOMException(), this.readyState !== this.DONE ? "" : this._response ? this._response.data : null != ((_a2 = this._error) == null ? void 0 : _a2.raw) ? "string" == typeof this._error.raw ? this._error.raw : JSON.stringify(this._error.raw) : "";
  }
  get responseType() {
    return this._responseType;
  }
  set responseType(t3) {
    ("document" !== t3 || globalThis instanceof Window) && (this.readyState !== this.LOADING && this.readyState !== this.DONE || this._throwDOMException(), this._responseType = t3);
  }
  get responseURL() {
    var _a2;
    return ((_a2 = this._response || this._error) == null ? void 0 : _a2.url) ?? "";
  }
  get responseXML() {
    var _a2;
    return "" !== this.responseType && "document" !== this.responseType && this._throwDOMException(), this.readyState !== this.DONE ? null : ((_a2 = this._response) == null ? void 0 : _a2.data) ?? null;
  }
  get status() {
    var _a2;
    return ((_a2 = this._response || this._error) == null ? void 0 : _a2.httpStatus) ?? 0;
  }
  get statusText() {
    return "";
  }
  get upload() {
    return console.warn("upload not implemented"), null;
  }
  get withCredentials() {
    return this._withCredentials;
  }
  set withCredentials(t3) {
    this.readyState !== this.UNSENT && this.readyState !== this.OPENED && this._throwDOMException(), this._withCredentials = t3;
  }
  abort() {
    var _a2;
    this.readyState === this.OPENED && this._sendFlag || this.readyState === this.HEADERS_RECEIVED || this.readyState === this.LOADING ? (this._sendFlag = false, this._error = null, this._response = null, (_a2 = this._abortController) == null ? void 0 : _a2.abort(), this._updateReadyState(this.DONE), this._dispatchProgressEvent("abort"), this._dispatchProgressEvent("loadend")) : this.readyState === this.DONE && this._updateReadyState(this.UNSENT);
  }
  getAllResponseHeaders() {
    var _a2, _b;
    let t3 = "";
    const e8 = (_b = (_a2 = this._response || this._error) == null ? void 0 : _a2.getAllHeaders) == null ? void 0 : _b.call(_a2);
    if (e8) for (const [s3, r5] of e8) t3 += `${s3}: ${r5}\r
`;
    return t3;
  }
  getResponseHeader(t3) {
    var _a2, _b;
    return ((_b = (_a2 = this._response || this._error) == null ? void 0 : _a2.getHeader) == null ? void 0 : _b.call(_a2, t3)) ?? null;
  }
  open(t3, e8) {
    switch (this._sendFlag = false, this._options = {}, t3) {
      case "GET":
        this._options.method = "auto";
        break;
      case "POST":
        this._options.method = "post";
        break;
      case "HEAD":
        this._options.method = "head";
        break;
      case "DELETE":
        this._options.method = "delete";
        break;
      case "PUT":
        this._options.method = "put";
    }
    this._url = e8, this._error = null, this._response = null, this._abortController = new AbortController(), this._updateReadyState(this.OPENED);
  }
  overrideMimeType(t3) {
    throw new Error("overrideMimeType not implemented");
  }
  send(s3) {
    var _a2;
    (this.readyState !== this.OPENED || this._sendFlag) && this._throwDOMException(), this._sendFlag = true, this._updateReadyState(this.LOADING), this._dispatchProgressEvent("loadstart");
    const r5 = this._options;
    s3 instanceof URLSearchParams ? r5.body = s3.toString() : r5.body = s3, r5.responseType = "" === this.responseType ? "text" : "arraybuffer" === this.responseType ? "array-buffer" : this.responseType, r5.signal = (_a2 = this._abortController) == null ? void 0 : _a2.signal, this.timeout && (r5.timeout = this.timeout), this.withCredentials && (r5.withCredentials = true), P2(this._url, r5).then((t3) => {
      this._response = t3, this._updateReadyState(this.DONE), this._dispatchProgressEvent("load");
    }).catch((t3) => {
      this._sendFlag && (this._error = t3.details, this._updateReadyState(this.DONE), m2(t3) ? this._dispatchProgressEvent("timeout") : "AbortError" === t3.name ? this._dispatchProgressEvent("abort") : this._dispatchProgressEvent("error"));
    }).finally(() => {
      this._sendFlag && this._dispatchProgressEvent("loadend");
    });
  }
  setRequestHeader(t3, e8) {
    var _a2;
    (this.readyState !== this.OPENED || this._sendFlag) && this._throwDOMException(), (_a2 = this._options).headers ?? (_a2.headers = {}), this._options.headers[t3] = e8;
  }
  _dispatchProgressEvent(t3) {
    var _a2;
    const e8 = new ProgressEvent(t3, { loaded: 0, total: 0 });
    this.dispatchEvent(e8), (_a2 = this[`on${t3}`]) == null ? void 0 : _a2.call(this, e8);
  }
  _throwDOMException() {
    throw new DOMException("", "InvalidStateError");
  }
  _updateReadyState(t3) {
    var _a2;
    if (this._readyState !== t3 && (this._readyState = t3, t3 !== this.UNSENT)) {
      const t4 = new Event("readystatechange");
      this.dispatchEvent(t4), (_a2 = this.onreadystatechange) == null ? void 0 : _a2.call(this, t4);
    }
  }
};
s.UNSENT = 0, s.OPENED = 1, s.HEADERS_RECEIVED = 2, s.LOADING = 3, s.DONE = 4;

// node_modules/@arcgis/core/layers/support/TelemetryData.js
var m3 = class extends a2.ClonableMixin(S) {
  constructor(o5) {
    super(o5), this.frameCenter = null, this.frameOutline = null, this.lineOfSight = null, this.sensorLocation = null, this.sensorTrail = null;
  }
};
r([m({ type: j })], m3.prototype, "frameCenter", void 0), r([m({ type: j2 })], m3.prototype, "frameOutline", void 0), r([m({ type: P3 })], m3.prototype, "lineOfSight", void 0), r([m({ type: j })], m3.prototype, "sensorLocation", void 0), r([m({ type: P3 })], m3.prototype, "sensorTrail", void 0), m3 = r([a("esri.layers.support.TelemetryData")], m3);
var n3 = m3;

// node_modules/@arcgis/core/layers/support/VideoTimeExtent.js
var n4 = class extends a2.ClonableMixin(S) {
  constructor(t3) {
    super(t3), this.duration = null, this.end = null, this.start = null, this.timezone = "UTC";
  }
  readEnd(t3, r5) {
    return null != r5.end ? new Date(r5.end) : null;
  }
  writeEnd(t3, r5) {
    r5.end = t3 ? t3.getTime() : null;
  }
  readStart(t3, r5) {
    return null != r5.start ? new Date(r5.start) : null;
  }
  writeStart(t3, r5) {
    r5.start = t3 ? t3.getTime() : null;
  }
};
r([m({ type: Number, json: { write: { allowNull: true } } })], n4.prototype, "duration", void 0), r([m({ type: Date, json: { write: { allowNull: true } } })], n4.prototype, "end", void 0), r([o("end")], n4.prototype, "readEnd", null), r([r3("end")], n4.prototype, "writeEnd", null), r([m({ type: Date, json: { write: { allowNull: true } } })], n4.prototype, "start", void 0), r([o("start")], n4.prototype, "readStart", null), r([r3("start")], n4.prototype, "writeStart", null), r([m({ type: String })], n4.prototype, "timezone", void 0), n4 = r([a("esri.layers.support.VideoTimeExtent")], n4);
var a3 = n4;

// node_modules/@arcgis/core/layers/video/videoUtils.js
var o4 = "application/x-mpegURL";
var a4 = "video/mp4";
var u2 = "video/webm";
var s2 = { UASDatalinkLocalSet: 1e4, PrecisionTimeStamp: 10002, MissionId: 10003, PlatformTailNumber: 10004, PlatformHeadingAngle: 10005, PlatformPitchAngle: 10006, PlatformRollAngle: 10007, PlatformTrueAirspeed: 10008, PlatformIndicatedAirspeed: 10009, PlatformDesignation: 10010, ImageSourceSensor: 10011, ImageCoordinateSystem: 10012, SensorLatitude: 10013, SensorLongitude: 10014, SensorTrueAltitude: 10015, SensorHorizontalFOV: 10016, SensorVerticalFOV: 10017, SensorAzimuthAngle: 10018, SensorElevationAngle: 10019, SensorRollAngle: 10020, PlatformSlantRange: 10021, TargetWidth: 10022, FrameCenterLatitude: 10023, FrameCenterLongitude: 10024, FrameCenterElevation: 10025, OffsetCorner1Latitude: 10026, OffsetCorner1Longitude: 10027, OffsetCorner2Latitude: 10028, OffsetCorner2Longitude: 10029, OffsetCorner3Latitude: 10030, OffsetCorner3Longitude: 10031, OffsetCorner4Latitude: 10032, OffsetCorner4Longitude: 10033, TargetLocationLatitude: 10040, TargetLocationLongitude: 10041, TargetLocationElevation: 10042, TargetTrackGateWidth: 10043, TargetTrackGateHeight: 10044, TargetErrorEstimateHorizontal: 10045, TargetErrorEstimateLateral: 10046, GenericFlagData: 10047, PlatformGroundSpeed: 10056, PlatformGroundRange: 10057, PlatformRemainingFuel: 10058, PlatformCallSign: 10059, SensorFOVName: 10063, PlatformMagneticHeading: 10064, LDSVersionNumber: 10065, AlternatePlatformName: 10070, EventStartTimeUTC: 10072, VMTIDataSet: 10074, SensorEllipsoidHeight: 10075, OperationalMode: 10077, CornerLatitudePoint1: 10082, CornerLongitudePoint1: 10083, CornerLatitudePoint2: 10084, CornerLongitudePoint2: 10085, CornerLatitudePoint3: 10086, CornerLongitudePoint3: 10087, CornerLatitudePoint4: 10088, CornerLongitudePoint4: 10089, SARMotionImageryMetadata: 10095, SecurityClassification: 20001, SecurityClassifyingAuthority: 20002, SecurityClassifyingCountry: 20003, SecuritySCI: 20004, SecurityCaveats: 20005, SecurityReleaseInstructions: 20006, SecurityLDSVersion: 20022, EsriVideoWidth: 90001, EsriVideoHeight: 90002, EsriFrameCenterLatitude: 90050, EsriFrameCenterLongitude: 90051, EsriCornerLatitudePt1: 90052, EsriCornerLongitudePt1: 90053, EsriCornerLatitudePt2: 90054, EsriCornerLongitudePt2: 90055, EsriCornerLatitudePt3: 90056, EsriCornerLongitudePt3: 90057, EsriCornerLatitudePt4: 90058, EsriCornerLongitudePt4: 90059, EsriFrameOutline: 90060, EsriSensorPosition: 90061, EsriHorizonPixelPack: 90063, EsriGroundControlPoints: 90064 };
function l(e8) {
  const { duration: t3, end: r5, start: n5, timezone: o5 = "UTC" } = e8 || {};
  return "number" != typeof t3 ? null : new a3({ duration: t3 || null, end: "number" == typeof r5 ? new Date(r5) : null, start: "number" == typeof n5 ? new Date(n5) : null, timezone: o5 });
}
function d2(e8, t3) {
  const r5 = [...t3], n5 = r5.findIndex((t4) => t4.equals(e8));
  return n5 > -1 && r5.splice(n5), r5.push(e8), r5;
}
function g3(e8) {
  if (!(e8 == null ? void 0 : e8.size)) return new n3();
  const t3 = p(e8), r5 = C(e8), i2 = S2(e8), o5 = y(t3, r5);
  return new n3({ frameCenter: r5, frameOutline: i2, lineOfSight: o5, sensorLocation: t3 });
}
function f(e8) {
  var _a2;
  if (!(e8 == null ? void 0 : e8.size)) return null;
  return ((_a2 = e8.get(s2.EsriGroundControlPoints)) == null ? void 0 : _a2.value) ?? null ?? null;
}
function L(e8) {
  var _a2;
  return (e8 == null ? void 0 : e8.size) ? ((_a2 = e8.get(s2.EsriHorizonPixelPack)) == null ? void 0 : _a2.value) ?? null : null;
}
function C(e8) {
  return c2(e8) ?? E(e8);
}
function m4(e8) {
  if (!e8) return o4;
  const t3 = e8.match(/\.(\w{3,4})(?:$|\?)/i);
  if (!t3) return o4;
  switch (t3[1].toLowerCase()) {
    case "mp4":
      return a4;
    case "webm":
      return u2;
    default:
      return o4;
  }
}
function P5(e8) {
  const t3 = e8 == null ? void 0 : e8.layers;
  return (t3 == null ? void 0 : t3.length) ? t3.map((e9) => ({ layerId: e9.id, posterUrl: e9.poster, sourceType: e9.serviceType, title: e9.name, type: e9.type || "Video Layer" })) : [];
}
function c2(t3) {
  return t3 && t3.has(s2.EsriFrameCenterLatitude) && t3.has(s2.EsriFrameCenterLongitude) ? new j({ x: t3.get(s2.EsriFrameCenterLongitude).value, y: t3.get(s2.EsriFrameCenterLatitude).value, z: t3.get(s2.FrameCenterElevation).value }) : null;
}
function E(t3) {
  var _a2, _b, _c2;
  return t3 && t3.has(s2.FrameCenterLatitude) && t3.has(s2.FrameCenterLongitude) ? new j({ x: (_a2 = t3.get(s2.FrameCenterLongitude)) == null ? void 0 : _a2.value, y: (_b = t3.get(s2.FrameCenterLatitude)) == null ? void 0 : _b.value, z: (_c2 = t3.get(s2.FrameCenterElevation)) == null ? void 0 : _c2.value }) : null;
}
function S2(e8) {
  var _a2;
  if (!e8) return null;
  const r5 = (_a2 = e8.get(s2.EsriFrameOutline)) == null ? void 0 : _a2.value;
  return r5 ? j2.fromJSON(r5.geometry) : h(e8) ?? v2(e8);
}
function h(e8) {
  var _a2, _b, _c2, _d2, _e2, _f, _g2, _h2;
  if (!(e8.has(s2.EsriCornerLatitudePt1) && e8.has(s2.EsriCornerLongitudePt1) && e8.has(s2.EsriCornerLatitudePt2) && e8.has(s2.EsriCornerLongitudePt2) && e8.has(s2.EsriCornerLatitudePt3) && e8.has(s2.EsriCornerLongitudePt3) && e8.has(s2.EsriCornerLatitudePt4) && e8.has(s2.EsriCornerLongitudePt4))) return null;
  const r5 = [(_a2 = e8.get(s2.EsriCornerLongitudePt1)) == null ? void 0 : _a2.value, (_b = e8.get(s2.EsriCornerLatitudePt1)) == null ? void 0 : _b.value], n5 = [(_c2 = e8.get(s2.EsriCornerLongitudePt2)) == null ? void 0 : _c2.value, (_d2 = e8.get(s2.EsriCornerLatitudePt2)) == null ? void 0 : _d2.value], i2 = [(_e2 = e8.get(s2.EsriCornerLongitudePt3)) == null ? void 0 : _e2.value, (_f = e8.get(s2.EsriCornerLatitudePt3)) == null ? void 0 : _f.value], o5 = [(_g2 = e8.get(s2.EsriCornerLongitudePt4)) == null ? void 0 : _g2.value, (_h2 = e8.get(s2.EsriCornerLatitudePt4)) == null ? void 0 : _h2.value];
  return new j2({ rings: [[r5, n5, i2, o5]] });
}
function v2(e8) {
  var _a2, _b, _c2, _d2, _e2, _f, _g2, _h2, _i2, _j;
  if (!(e8.has(s2.OffsetCorner1Latitude) && e8.has(s2.OffsetCorner1Longitude) && e8.has(s2.OffsetCorner2Latitude) && e8.has(s2.OffsetCorner2Longitude) && e8.has(s2.OffsetCorner3Latitude) && e8.has(s2.OffsetCorner3Longitude) && e8.has(s2.OffsetCorner4Latitude) && e8.has(s2.OffsetCorner4Longitude) && e8.has(s2.FrameCenterLatitude) && e8.has(s2.FrameCenterLongitude))) return null;
  const r5 = (_a2 = e8.get(s2.FrameCenterLatitude)) == null ? void 0 : _a2.value, n5 = (_b = e8.get(s2.FrameCenterLongitude)) == null ? void 0 : _b.value, i2 = r5 + ((_c2 = e8.get(s2.OffsetCorner1Latitude)) == null ? void 0 : _c2.value), o5 = n5 + ((_d2 = e8.get(s2.OffsetCorner1Longitude)) == null ? void 0 : _d2.value), a5 = r5 + ((_e2 = e8.get(s2.OffsetCorner2Latitude)) == null ? void 0 : _e2.value), u3 = n5 + ((_f = e8.get(s2.OffsetCorner2Longitude)) == null ? void 0 : _f.value), l2 = r5 + ((_g2 = e8.get(s2.OffsetCorner3Latitude)) == null ? void 0 : _g2.value), d3 = n5 + ((_h2 = e8.get(s2.OffsetCorner3Longitude)) == null ? void 0 : _h2.value), g5 = r5 + ((_i2 = e8.get(s2.OffsetCorner4Latitude)) == null ? void 0 : _i2.value), f3 = n5 + ((_j = e8.get(s2.OffsetCorner4Longitude)) == null ? void 0 : _j.value);
  return new j2({ rings: [[[o5, i2], [u3, a5], [d3, l2], [f3, g5]]] });
}
function y(e8, t3) {
  if (!e8 || !t3) return null;
  const n5 = [e8.x, e8.y, e8.z ?? 0], i2 = [t3.x, t3.y, t3.z ?? 0];
  return new P3({ paths: [[n5, i2]] });
}
function p(t3) {
  var _a2, _b, _c2, _d2;
  if (!(t3 == null ? void 0 : t3.size)) return null;
  if (t3.has(s2.EsriSensorPosition)) {
    const r5 = (_a2 = t3.get(s2.EsriSensorPosition)) == null ? void 0 : _a2.value;
    if (r5) return j.fromJSON(r5.geometry);
  }
  return t3.has(s2.SensorLongitude) && t3.has(s2.SensorLatitude) && t3.has(s2.SensorTrueAltitude) ? new j({ x: (_b = t3.get(s2.SensorLongitude)) == null ? void 0 : _b.value, y: (_c2 = t3.get(s2.SensorLatitude)) == null ? void 0 : _c2.value, z: (_d2 = t3.get(s2.SensorTrueAltitude)) == null ? void 0 : _d2.value }) : null;
}

// node_modules/@arcgis/core/layers/video/VideoCameraSensorModel.js
var M = Math.PI / 180;
var V = class extends g {
  constructor(t3) {
    super(), this.averageElevation = 0, this.imageHeight = 0, this.imageWidth = 0, this.metadataSupportsTransforms = false, this.platformHeadingAngle = 0, this.platformPitchAngle = 0, this.platformRollAngle = 0, this.sensorHeadingAngle = 0, this.sensorAltitude = 0, this.sensorHorizontalFieldOfView = 0, this.sensorLatitude = 0, this.sensorLongitude = 0, this.sensorPitchAngle = 0, this.sensorRollAngle = 0, this.sensorVerticalFieldOfView = 0, this.vttMetadata = /* @__PURE__ */ new Map(), this._createMat3FromValues = (t4) => {
      const e9 = t4[0], o5 = t4[1], s3 = t4[2];
      return t2(e9[0], o5[0], s3[0], e9[1], o5[1], s3[1], e9[2], o5[2], s3[2]);
    }, this._multiplyMat3 = (t4, e9) => {
      const o5 = e2();
      return i(o5, t4, e9), o5;
    }, this._transposeMat3 = (t4) => {
      const e9 = e2();
      return u(e9, t4), e9;
    }, this._calculateCameraFovForward = () => this._createMat3FromValues([[0, 0, 1], [Math.tan(0.5 * this.sensorHorizontalFieldOfView * M), 0, 0], [0, Math.tan(0.5 * this.sensorVerticalFieldOfView * M), 0]]), this._calculateCameraFovReverse = () => this._createMat3FromValues([[0, 1 / Math.tan(0.5 * this.sensorHorizontalFieldOfView * M), 0], [0, 0, 1 / Math.tan(0.5 * this.sensorVerticalFieldOfView * M)], [1, 0, 0]]), this._calculateCameraLook = () => this._getRotationMatrixZYX(this.sensorHeadingAngle * M, this.sensorPitchAngle * M, this.sensorRollAngle * M), this._calculateImageDimensionsForward = () => this._createMat3FromValues([[2 / this.imageWidth, 0, -1], [0, -2 / this.imageHeight, -1], [0, 0, 1]]), this._calculateImageDimensionsReverse = () => this._createMat3FromValues([[this.imageWidth / 2, 0, this.imageWidth / 2], [0, -this.imageHeight / 2, -this.imageHeight / 2], [0, 0, 1]]), this._calculatePlatformPositionMatrix = () => {
      const t4 = Math.sin(this.sensorLatitude * M), e9 = Math.cos(this.sensorLatitude * M), o5 = Math.sin(this.sensorLongitude * M), s3 = Math.cos(this.sensorLongitude * M);
      return this._createMat3FromValues([[-t4 * s3, -o5, -e9 * s3], [-t4 * o5, s3, -e9 * o5], [e9, 0, -t4]]);
    }, this._calculatePlatformOrientation = () => this._getRotationMatrixZYX(this.platformHeadingAngle * M, this.platformPitchAngle * M, this.platformRollAngle * M), this._extractValues = (t4) => {
      var _a2, _b, _c2, _d2, _e2, _f, _g2, _h2, _i2, _j, _k, _l2, _m2, _n2, _o2;
      this.imageWidth = (_a2 = t4.get(s2.EsriVideoWidth)) == null ? void 0 : _a2.value, this.imageHeight = (_b = t4.get(s2.EsriVideoHeight)) == null ? void 0 : _b.value;
      const e9 = (_c2 = t4.get(s2.SensorEllipsoidHeight)) == null ? void 0 : _c2.value;
      this.sensorAltitude = e9 ?? ((_d2 = t4.get(s2.SensorTrueAltitude)) == null ? void 0 : _d2.value), this.sensorLatitude = (_e2 = t4.get(s2.SensorLatitude)) == null ? void 0 : _e2.value, this.sensorLongitude = (_f = t4.get(s2.SensorLongitude)) == null ? void 0 : _f.value, this.sensorHeadingAngle = (_g2 = t4.get(s2.SensorAzimuthAngle)) == null ? void 0 : _g2.value, this.sensorPitchAngle = (_h2 = t4.get(s2.SensorElevationAngle)) == null ? void 0 : _h2.value, this.sensorRollAngle = (_i2 = t4.get(s2.SensorRollAngle)) == null ? void 0 : _i2.value, this.sensorHorizontalFieldOfView = (_j = t4.get(s2.SensorHorizontalFOV)) == null ? void 0 : _j.value, this.sensorVerticalFieldOfView = (_k = t4.get(s2.SensorVerticalFOV)) == null ? void 0 : _k.value, this.platformHeadingAngle = (_l2 = t4.get(s2.PlatformHeadingAngle)) == null ? void 0 : _l2.value, this.platformPitchAngle = (_m2 = t4.get(s2.PlatformPitchAngle)) == null ? void 0 : _m2.value, this.platformRollAngle = (_n2 = t4.get(s2.PlatformRollAngle)) == null ? void 0 : _n2.value, this.averageElevation = ((_o2 = t4.get(s2.FrameCenterElevation)) == null ? void 0 : _o2.value) || 0;
    }, this._getRotationMatrixZYX = (t4, e9, o5) => {
      const s3 = Math.cos(t4), i2 = Math.sin(t4), a5 = Math.cos(e9), r5 = Math.sin(e9), l2 = Math.cos(o5), n5 = Math.sin(o5);
      return this._createMat3FromValues([[s3 * a5, s3 * r5 * n5 - l2 * i2, i2 * n5 + s3 * l2 * r5], [a5 * i2, s3 * l2 + i2 * r5 * n5, l2 * i2 * r5 - s3 * n5], [-r5, a5 * n5, a5 * l2]]);
    }, this._initCameraSensor = () => {
      const t4 = this._calculateCameraFovForward(), e9 = this._calculateCameraFovReverse(), o5 = this._calculateCameraLook(), s3 = this._calculateImageDimensionsForward(), i2 = this._calculateImageDimensionsReverse(), a5 = this._calculatePlatformPositionMatrix(), r5 = this._calculatePlatformOrientation(), l2 = this._multiplyMat3(this._multiplyMat3(a5, r5), o5);
      this._imageToEarthTransform = this._multiplyMat3(this._multiplyMat3(l2, t4), s3);
      const n5 = this._multiplyMat3(i2, e9);
      this._earthToImageTransform = this._multiplyMat3(n5, this._transposeMat3(l2)), this._platformPositionEcef = this._projectPointToECEF(this.sensorLongitude, this.sensorLatitude, this.sensorAltitude || this.averageElevation);
    }, this._metadataSupportsTransforms = (t4) => {
      var _a2, _b, _c2, _d2, _e2, _f, _g2, _h2, _i2, _j, _k, _l2, _m2, _n2;
      if (!(t4 == null ? void 0 : t4.size)) return false;
      const e9 = ((_a2 = t4.get(s2.EsriVideoWidth)) == null ? void 0 : _a2.value) ?? 0, o5 = ((_b = t4.get(s2.EsriVideoHeight)) == null ? void 0 : _b.value) ?? 0;
      if (e9 <= 0 || o5 <= 0) return false;
      const s3 = (_c2 = t4.get(s2.SensorEllipsoidHeight)) == null ? void 0 : _c2.value, i2 = (_d2 = t4.get(s2.SensorTrueAltitude)) == null ? void 0 : _d2.value, a5 = (_e2 = t4.get(s2.SensorLatitude)) == null ? void 0 : _e2.value, r5 = (_f = t4.get(s2.SensorLongitude)) == null ? void 0 : _f.value;
      if (null == s3 && null == i2 || null == a5 || null == r5) return false;
      const l2 = (_g2 = t4.get(s2.PlatformHeadingAngle)) == null ? void 0 : _g2.value, n5 = (_h2 = t4.get(s2.PlatformPitchAngle)) == null ? void 0 : _h2.value, h2 = (_i2 = t4.get(s2.PlatformRollAngle)) == null ? void 0 : _i2.value;
      if (null == l2 || null == n5 || null == h2) return false;
      const m5 = (_j = t4.get(s2.SensorHorizontalFOV)) == null ? void 0 : _j.value, g5 = (_k = t4.get(s2.SensorVerticalFOV)) == null ? void 0 : _k.value;
      if (null == m5 || null == g5) return false;
      const u3 = (_l2 = t4.get(s2.SensorAzimuthAngle)) == null ? void 0 : _l2.value, c3 = (_m2 = t4.get(s2.SensorElevationAngle)) == null ? void 0 : _m2.value, p2 = (_n2 = t4.get(s2.SensorRollAngle)) == null ? void 0 : _n2.value;
      return null != u3 && null != c3 && null != p2;
    }, this._projectPointToECEF = (t4, e9, o5) => {
      const s3 = [];
      return o3([t4, e9, o5], g2.WGS84, 0, s3, w, 0), new j({ x: s3[0], y: s3[1], z: s3[2], spatialReference: w });
    }, this._projectImageVectorToEllipsoid = (t4, e9) => {
      const o5 = t.semiMajorAxis + e9, s3 = t.semiMinorAxis + e9, i2 = s3 / o5, a5 = o5 / s3, { x: n5, y: h2, z: u3 } = this._platformPositionEcef, c3 = u3 ?? this.averageElevation, p2 = r4(n5, h2, a5 * c3), d3 = P4(t4, t4), f3 = P4(t4, p2), v4 = P4(p2, p2) - o5 * o5, A2 = (-f3 - Math.sqrt(f3 * f3 - d3 * v4)) / d3;
      if (A2 < 0) return [NaN, NaN, NaN];
      const M3 = n2();
      return q(M3, p2, t4, A2), M3[2] = M3[2] * i2, M3;
    };
    const e8 = t3 == null ? void 0 : t3.videoMetadata;
    this._set("metadataSupportsTransforms", this._metadataSupportsTransforms(e8)), this.metadataSupportsTransforms && (this._extractValues(e8), this._initCameraSensor());
  }
  transformGeoToImage(t3, e8, o5) {
    const s3 = this._platformPositionEcef;
    if (!s3) return [0, 0];
    const { x: i2, y: a5, z: n5 } = s3, h2 = r4(i2, a5, n5), m5 = this._projectPointToECEF(t3, e8, o5 || this.averageElevation), g5 = n2(), p2 = r4(m5.x, m5.y, m5.z);
    c(g5, p2, h2), N(g5, g5, this._earthToImageTransform);
    const d3 = g5[0], f3 = g5[1], v4 = g5[2];
    let _2 = r4(NaN, NaN, NaN);
    return isNaN(v4) || (_2 = r4(d3 / v4, f3 / v4, v4 / v4)), [_2[0], _2[1]];
  }
  transformImageToGeo(t3, e8) {
    const o5 = r4(t3, e8, 1), s3 = n2();
    N(s3, o5, this._imageToEarthTransform);
    const i2 = this._projectImageVectorToEllipsoid(s3, this.averageElevation);
    let a5;
    if (!isNaN(i2[0])) {
      const t4 = [];
      o3([i2[0], i2[1], i2[2]], w, 0, t4, g2.WGS84, 0), a5 = new j({ x: t4[0], y: t4[1], z: t4[2], spatialReference: g2.WGS84 });
    }
    return a5;
  }
};
r([m()], V.prototype, "averageElevation", void 0), r([m()], V.prototype, "imageHeight", void 0), r([m()], V.prototype, "imageWidth", void 0), r([m({ readOnly: true })], V.prototype, "metadataSupportsTransforms", void 0), r([m()], V.prototype, "platformHeadingAngle", void 0), r([m()], V.prototype, "platformPitchAngle", void 0), r([m()], V.prototype, "platformRollAngle", void 0), r([m()], V.prototype, "sensorHeadingAngle", void 0), r([m()], V.prototype, "sensorAltitude", void 0), r([m()], V.prototype, "sensorHorizontalFieldOfView", void 0), r([m()], V.prototype, "sensorLatitude", void 0), r([m()], V.prototype, "sensorLongitude", void 0), r([m()], V.prototype, "sensorPitchAngle", void 0), r([m()], V.prototype, "sensorRollAngle", void 0), r([m()], V.prototype, "sensorVerticalFieldOfView", void 0), r([m()], V.prototype, "vttMetadata", void 0), V = r([a("esri.layers.video.VideoCameraSensorModel")], V);
var y2 = V;

// node_modules/@arcgis/core/layers/video/VideoController.js
var g4;
var f2;
function y3() {
  return f2 ? g4 : (f2 = 1, e8 = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, g4 = e8);
  var e8;
}
var _ = o2(y3());
var b;
var v3;
var T;
var S3;
var E2;
var w2;
var C2;
var k;
var I;
var x;
var A;
var D;
var P6;
var L2;
var O;
var N2;
var R;
var M2;
var U;
var B;
var F;
var q2;
var j3;
var $;
var H;
var V2;
function z() {
  if (v3) return b;
  v3 = 1;
  var e8 = Array.prototype.slice;
  function t3(t4, i2) {
    "length" in t4 || (t4 = [t4]), t4 = e8.call(t4);
    for (; t4.length; ) {
      var s3 = t4.shift(), n5 = i2(s3);
      if (n5) return n5;
      s3.childNodes && s3.childNodes.length && (t4 = e8.call(s3.childNodes).concat(t4));
    }
  }
  return b = t3;
}
function W() {
  if (S3) return T;
  function e8(t3, i2) {
    if (!(this instanceof e8)) return new e8(t3, i2);
    this.data = t3, this.nodeValue = t3, this.length = t3.length, this.ownerDocument = i2 || null;
  }
  return S3 = 1, T = e8, e8.prototype.nodeType = 8, e8.prototype.nodeName = "#comment", e8.prototype.toString = function() {
    return "[object Comment]";
  }, T;
}
function G() {
  if (w2) return E2;
  function e8(t3, i2) {
    if (!(this instanceof e8)) return new e8(t3);
    this.data = t3 || "", this.length = this.data.length, this.ownerDocument = i2 || null;
  }
  return w2 = 1, E2 = e8, e8.prototype.type = "DOMTextNode", e8.prototype.nodeType = 3, e8.prototype.nodeName = "#text", e8.prototype.toString = function() {
    return this.data;
  }, e8.prototype.replaceData = function(e9, t3, i2) {
    var s3 = this.data, n5 = s3.substring(0, e9), r5 = s3.substring(e9 + t3, s3.length);
    this.data = n5 + i2 + r5, this.length = this.data.length;
  }, E2;
}
function X() {
  if (k) return C2;
  function e8(e9) {
    var t3 = this, i2 = e9.type;
    e9.target || (e9.target = t3), t3.listeners || (t3.listeners = {});
    var s3 = t3.listeners[i2];
    if (s3) return s3.forEach(function(i3) {
      e9.currentTarget = t3, "function" == typeof i3 ? i3(e9) : i3.handleEvent(e9);
    });
    t3.parentNode && t3.parentNode.dispatchEvent(e9);
  }
  return k = 1, C2 = e8;
}
function K() {
  if (x) return I;
  function e8(e9, t3) {
    var i2 = this;
    i2.listeners || (i2.listeners = {}), i2.listeners[e9] || (i2.listeners[e9] = []), -1 === i2.listeners[e9].indexOf(t3) && i2.listeners[e9].push(t3);
  }
  return x = 1, I = e8;
}
function Y() {
  if (D) return A;
  function e8(e9, t3) {
    var i2 = this;
    if (i2.listeners && i2.listeners[e9]) {
      var s3 = i2.listeners[e9], n5 = s3.indexOf(t3);
      -1 !== n5 && s3.splice(n5, 1);
    }
  }
  return D = 1, A = e8;
}
function Q() {
  if (L2) return P6;
  L2 = 1;
  var e8 = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"];
  function t3(e9) {
    switch (e9.nodeType) {
      case 3:
        return l2(e9.data);
      case 8:
        return "<!--" + e9.data + "-->";
      default:
        return i2(e9);
    }
  }
  function i2(i3) {
    var s4 = [], n6 = i3.tagName;
    return "http://www.w3.org/1999/xhtml" === i3.namespaceURI && (n6 = n6.toLowerCase()), s4.push("<" + n6 + o5(i3) + r5(i3)), e8.indexOf(n6) > -1 ? s4.push(" />") : (s4.push(">"), i3.childNodes.length ? s4.push.apply(s4, i3.childNodes.map(t3)) : i3.textContent || i3.innerText ? s4.push(l2(i3.textContent || i3.innerText)) : i3.innerHTML && s4.push(i3.innerHTML), s4.push("</" + n6 + ">")), s4.join("");
  }
  function s3(e9, t4) {
    var i3 = typeof e9[t4];
    return "style" === t4 && Object.keys(e9.style).length > 0 || e9.hasOwnProperty(t4) && ("string" === i3 || "boolean" === i3 || "number" === i3) && "nodeName" !== t4 && "className" !== t4 && "tagName" !== t4 && "textContent" !== t4 && "innerText" !== t4 && "namespaceURI" !== t4 && "innerHTML" !== t4;
  }
  function n5(e9) {
    if ("string" == typeof e9) return e9;
    var t4 = "";
    return Object.keys(e9).forEach(function(i3) {
      var s4 = e9[i3];
      i3 = i3.replace(/[A-Z]/g, function(e10) {
        return "-" + e10.toLowerCase();
      }), t4 += i3 + ":" + s4 + ";";
    }), t4;
  }
  function r5(e9) {
    var t4 = e9.dataset, i3 = [];
    for (var s4 in t4) i3.push({ name: "data-" + s4, value: t4[s4] });
    return i3.length ? a5(i3) : "";
  }
  function a5(e9) {
    var t4 = [];
    return e9.forEach(function(e10) {
      var i3 = e10.name, s4 = e10.value;
      "style" === i3 && (s4 = n5(s4)), t4.push(i3 + '="' + u3(s4) + '"');
    }), t4.length ? " " + t4.join(" ") : "";
  }
  function o5(e9) {
    var t4 = [];
    for (var i3 in e9) s3(e9, i3) && t4.push({ name: i3, value: e9[i3] });
    for (var n6 in e9._attributes) for (var r6 in e9._attributes[n6]) {
      var o6 = e9._attributes[n6][r6], l3 = (o6.prefix ? o6.prefix + ":" : "") + r6;
      t4.push({ name: l3, value: o6.value });
    }
    return e9.className && t4.push({ name: "class", value: e9.className }), t4.length ? a5(t4) : "";
  }
  function l2(e9) {
    var t4 = "";
    return "string" == typeof e9 ? t4 = e9 : e9 && (t4 = e9.toString()), t4.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function u3(e9) {
    return l2(e9).replace(/"/g, "&quot;");
  }
  return P6 = t3;
}
function J() {
  if (N2) return O;
  N2 = 1;
  var e8 = z(), t3 = X(), i2 = K(), s3 = Y(), n5 = Q(), r5 = "http://www.w3.org/1999/xhtml";
  function a5(e9, t4, i3) {
    if (!(this instanceof a5)) return new a5(e9);
    var s4 = void 0 === i3 ? r5 : i3 || null;
    this.tagName = s4 === r5 ? String(e9).toUpperCase() : e9, this.nodeName = this.tagName, this.className = "", this.dataset = {}, this.childNodes = [], this.parentNode = null, this.style = {}, this.ownerDocument = t4 || null, this.namespaceURI = s4, this._attributes = {}, "INPUT" === this.tagName && (this.type = "text");
  }
  return O = a5, a5.prototype.type = "DOMElement", a5.prototype.nodeType = 1, a5.prototype.appendChild = function(e9) {
    return e9.parentNode && e9.parentNode.removeChild(e9), this.childNodes.push(e9), e9.parentNode = this, e9;
  }, a5.prototype.replaceChild = function(e9, t4) {
    e9.parentNode && e9.parentNode.removeChild(e9);
    var i3 = this.childNodes.indexOf(t4);
    return t4.parentNode = null, this.childNodes[i3] = e9, e9.parentNode = this, t4;
  }, a5.prototype.removeChild = function(e9) {
    var t4 = this.childNodes.indexOf(e9);
    return this.childNodes.splice(t4, 1), e9.parentNode = null, e9;
  }, a5.prototype.insertBefore = function(e9, t4) {
    e9.parentNode && e9.parentNode.removeChild(e9);
    var i3 = null == t4 ? -1 : this.childNodes.indexOf(t4);
    return i3 > -1 ? this.childNodes.splice(i3, 0, e9) : this.childNodes.push(e9), e9.parentNode = this, e9;
  }, a5.prototype.setAttributeNS = function(e9, t4, i3) {
    var s4 = null, n6 = t4, r6 = t4.indexOf(":");
    (r6 > -1 && (s4 = t4.substr(0, r6), n6 = t4.substr(r6 + 1)), "INPUT" === this.tagName && "type" === t4) ? this.type = i3 : (this._attributes[e9] || (this._attributes[e9] = {}))[n6] = { value: i3, prefix: s4 };
  }, a5.prototype.getAttributeNS = function(e9, t4) {
    var i3 = this._attributes[e9], s4 = i3 && i3[t4] && i3[t4].value;
    return "INPUT" === this.tagName && "type" === t4 ? this.type : "string" != typeof s4 ? null : s4;
  }, a5.prototype.removeAttributeNS = function(e9, t4) {
    var i3 = this._attributes[e9];
    i3 && delete i3[t4];
  }, a5.prototype.hasAttributeNS = function(e9, t4) {
    var i3 = this._attributes[e9];
    return !!i3 && t4 in i3;
  }, a5.prototype.setAttribute = function(e9, t4) {
    return this.setAttributeNS(null, e9, t4);
  }, a5.prototype.getAttribute = function(e9) {
    return this.getAttributeNS(null, e9);
  }, a5.prototype.removeAttribute = function(e9) {
    return this.removeAttributeNS(null, e9);
  }, a5.prototype.hasAttribute = function(e9) {
    return this.hasAttributeNS(null, e9);
  }, a5.prototype.removeEventListener = s3, a5.prototype.addEventListener = i2, a5.prototype.dispatchEvent = t3, a5.prototype.focus = function() {
  }, a5.prototype.toString = function() {
    return n5(this);
  }, a5.prototype.getElementsByClassName = function(t4) {
    var i3 = t4.split(" "), s4 = [];
    return e8(this, function(e9) {
      if (1 === e9.nodeType) {
        var t5 = (e9.className || "").split(" ");
        i3.every(function(e10) {
          return -1 !== t5.indexOf(e10);
        }) && s4.push(e9);
      }
    }), s4;
  }, a5.prototype.getElementsByTagName = function(t4) {
    t4 = t4.toLowerCase();
    var i3 = [];
    return e8(this.childNodes, function(e9) {
      1 !== e9.nodeType || "*" !== t4 && e9.tagName.toLowerCase() !== t4 || i3.push(e9);
    }), i3;
  }, a5.prototype.contains = function(t4) {
    return e8(this, function(e9) {
      return t4 === e9;
    }) || false;
  }, O;
}
function Z() {
  if (M2) return R;
  M2 = 1;
  var e8 = J();
  function t3(e9) {
    if (!(this instanceof t3)) return new t3();
    this.childNodes = [], this.parentNode = null, this.ownerDocument = e9 || null;
  }
  return R = t3, t3.prototype.type = "DocumentFragment", t3.prototype.nodeType = 11, t3.prototype.nodeName = "#document-fragment", t3.prototype.appendChild = e8.prototype.appendChild, t3.prototype.replaceChild = e8.prototype.replaceChild, t3.prototype.removeChild = e8.prototype.removeChild, t3.prototype.toString = function() {
    return this.childNodes.map(function(e9) {
      return String(e9);
    }).join("");
  }, R;
}
function ee() {
  if (B) return U;
  function e8(e9) {
  }
  return B = 1, U = e8, e8.prototype.initEvent = function(e9, t3, i2) {
    this.type = e9, this.bubbles = t3, this.cancelable = i2;
  }, e8.prototype.preventDefault = function() {
  }, U;
}
function te() {
  if (q2) return F;
  q2 = 1;
  var e8 = z(), t3 = W(), i2 = G(), s3 = J(), n5 = Z(), r5 = ee(), a5 = X(), o5 = K(), l2 = Y();
  function u3() {
    if (!(this instanceof u3)) return new u3();
    this.head = this.createElement("head"), this.body = this.createElement("body"), this.documentElement = this.createElement("html"), this.documentElement.appendChild(this.head), this.documentElement.appendChild(this.body), this.childNodes = [this.documentElement], this.nodeType = 9;
  }
  F = u3;
  var h2 = u3.prototype;
  return h2.createTextNode = function(e9) {
    return new i2(e9, this);
  }, h2.createElementNS = function(e9, t4) {
    var i3 = null === e9 ? null : String(e9);
    return new s3(t4, this, i3);
  }, h2.createElement = function(e9) {
    return new s3(e9, this);
  }, h2.createDocumentFragment = function() {
    return new n5(this);
  }, h2.createEvent = function(e9) {
    return new r5(e9);
  }, h2.createComment = function(e9) {
    return new t3(e9, this);
  }, h2.getElementById = function(t4) {
    return t4 = String(t4), e8(this.childNodes, function(e9) {
      if (String(e9.id) === t4) return e9;
    }) || null;
  }, h2.getElementsByClassName = s3.prototype.getElementsByClassName, h2.getElementsByTagName = s3.prototype.getElementsByTagName, h2.contains = s3.prototype.contains, h2.removeEventListener = l2, h2.addEventListener = o5, h2.dispatchEvent = a5, F;
}
function ie() {
  if ($) return j3;
  $ = 1;
  var e8 = te();
  return j3 = new e8();
}
function se() {
  if (V2) return H;
  V2 = 1;
  var e8, t3 = void 0 !== e ? e : "undefined" != typeof window ? window : {}, i2 = ie();
  return "undefined" != typeof document ? e8 = document : (e8 = t3["__GLOBAL_DOCUMENT_CACHE@4"]) || (e8 = t3["__GLOBAL_DOCUMENT_CACHE@4"] = i2), H = e8;
}
var ne = o2(se());
var re;
var ae;
var oe;
var le;
var ue;
var he;
var de;
var ce;
var pe;
var me;
var ge = { exports: {} };
var fe = { exports: {} };
function ye() {
  return re || (re = 1, function(e8) {
    function t3() {
      return e8.exports = t3 = Object.assign ? Object.assign.bind() : function(e9) {
        for (var t4 = 1; t4 < arguments.length; t4++) {
          var i2 = arguments[t4];
          for (var s3 in i2) ({}).hasOwnProperty.call(i2, s3) && (e9[s3] = i2[s3]);
        }
        return e9;
      }, e8.exports.__esModule = true, e8.exports.default = e8.exports, t3.apply(null, arguments);
    }
    e8.exports = t3, e8.exports.__esModule = true, e8.exports.default = e8.exports;
  }(fe)), fe.exports;
}
function _e() {
  if (oe) return ae;
  oe = 1, ae = t3;
  var e8 = Object.prototype.toString;
  function t3(t4) {
    if (!t4) return false;
    var i2 = e8.call(t4);
    return "[object Function]" === i2 || "function" == typeof t4 && "[object RegExp]" !== i2 || "undefined" != typeof window && (t4 === window.setTimeout || t4 === window.alert || t4 === window.confirm || t4 === window.prompt);
  }
  return ae;
}
function be() {
  if (ue) return le;
  function e8(e9, i3) {
    var s3 = "undefined" != typeof Symbol && e9[Symbol.iterator] || e9["@@iterator"];
    if (s3) return (s3 = s3.call(e9)).next.bind(s3);
    if (Array.isArray(e9) || (s3 = t3(e9)) || i3) {
      s3 && (e9 = s3);
      var n5 = 0;
      return function() {
        return n5 >= e9.length ? { done: true } : { done: false, value: e9[n5++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function t3(e9, t4) {
    if (e9) {
      if ("string" == typeof e9) return i2(e9, t4);
      var s3 = Object.prototype.toString.call(e9).slice(8, -1);
      return "Object" === s3 && e9.constructor && (s3 = e9.constructor.name), "Map" === s3 || "Set" === s3 ? Array.from(e9) : "Arguments" === s3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s3) ? i2(e9, t4) : void 0;
    }
  }
  function i2(e9, t4) {
    (null == t4 || t4 > e9.length) && (t4 = e9.length);
    for (var i3 = 0, s3 = new Array(t4); i3 < t4; i3++) s3[i3] = e9[i3];
    return s3;
  }
  return ue = 1, le = function() {
    function t4() {
      this.typeToInterceptorsMap_ = /* @__PURE__ */ new Map(), this.enabled_ = false;
    }
    var i3 = t4.prototype;
    return i3.getIsEnabled = function() {
      return this.enabled_;
    }, i3.enable = function() {
      this.enabled_ = true;
    }, i3.disable = function() {
      this.enabled_ = false;
    }, i3.reset = function() {
      this.typeToInterceptorsMap_ = /* @__PURE__ */ new Map(), this.enabled_ = false;
    }, i3.addInterceptor = function(e9, t5) {
      this.typeToInterceptorsMap_.has(e9) || this.typeToInterceptorsMap_.set(e9, /* @__PURE__ */ new Set());
      var i4 = this.typeToInterceptorsMap_.get(e9);
      return !i4.has(t5) && (i4.add(t5), true);
    }, i3.removeInterceptor = function(e9, t5) {
      var i4 = this.typeToInterceptorsMap_.get(e9);
      return !(!i4 || !i4.has(t5)) && (i4.delete(t5), true);
    }, i3.clearInterceptorsByType = function(e9) {
      return !!this.typeToInterceptorsMap_.get(e9) && (this.typeToInterceptorsMap_.delete(e9), this.typeToInterceptorsMap_.set(e9, /* @__PURE__ */ new Set()), true);
    }, i3.clear = function() {
      return !!this.typeToInterceptorsMap_.size && (this.typeToInterceptorsMap_ = /* @__PURE__ */ new Map(), true);
    }, i3.getForType = function(e9) {
      return this.typeToInterceptorsMap_.get(e9) || /* @__PURE__ */ new Set();
    }, i3.execute = function(t5, i4) {
      for (var s3, n5 = e8(this.getForType(t5)); !(s3 = n5()).done; ) {
        var r5 = s3.value;
        try {
          i4 = r5(i4);
        } catch (a5) {
        }
      }
      return i4;
    }, t4;
  }();
}
function ve() {
  if (de) return he;
  de = 1;
  var e8 = function() {
    function e9() {
      this.maxAttempts_ = 1, this.delayFactor_ = 0.1, this.fuzzFactor_ = 0.1, this.initialDelay_ = 1e3, this.enabled_ = false;
    }
    var i2 = e9.prototype;
    return i2.getIsEnabled = function() {
      return this.enabled_;
    }, i2.enable = function() {
      this.enabled_ = true;
    }, i2.disable = function() {
      this.enabled_ = false;
    }, i2.reset = function() {
      this.maxAttempts_ = 1, this.delayFactor_ = 0.1, this.fuzzFactor_ = 0.1, this.initialDelay_ = 1e3, this.enabled_ = false;
    }, i2.getMaxAttempts = function() {
      return this.maxAttempts_;
    }, i2.setMaxAttempts = function(e10) {
      this.maxAttempts_ = e10;
    }, i2.getDelayFactor = function() {
      return this.delayFactor_;
    }, i2.setDelayFactor = function(e10) {
      this.delayFactor_ = e10;
    }, i2.getFuzzFactor = function() {
      return this.fuzzFactor_;
    }, i2.setFuzzFactor = function(e10) {
      this.fuzzFactor_ = e10;
    }, i2.getInitialDelay = function() {
      return this.initialDelay_;
    }, i2.setInitialDelay = function(e10) {
      this.initialDelay_ = e10;
    }, i2.createRetry = function(e10) {
      var i3 = void 0 === e10 ? {} : e10, s3 = i3.maxAttempts, n5 = i3.delayFactor, r5 = i3.fuzzFactor, a5 = i3.initialDelay;
      return new t3({ maxAttempts: s3 || this.maxAttempts_, delayFactor: n5 || this.delayFactor_, fuzzFactor: r5 || this.fuzzFactor_, initialDelay: a5 || this.initialDelay_ });
    }, e9;
  }(), t3 = function() {
    function e9(e10) {
      this.maxAttempts_ = e10.maxAttempts, this.delayFactor_ = e10.delayFactor, this.fuzzFactor_ = e10.fuzzFactor, this.currentDelay_ = e10.initialDelay, this.currentAttempt_ = 1;
    }
    var t4 = e9.prototype;
    return t4.moveToNextAttempt = function() {
      this.currentAttempt_++;
      var e10 = this.currentDelay_ * this.delayFactor_;
      this.currentDelay_ = this.currentDelay_ + e10;
    }, t4.shouldRetry = function() {
      return this.currentAttempt_ < this.maxAttempts_;
    }, t4.getCurrentDelay = function() {
      return this.currentDelay_;
    }, t4.getCurrentMinPossibleDelay = function() {
      return (1 - this.fuzzFactor_) * this.currentDelay_;
    }, t4.getCurrentMaxPossibleDelay = function() {
      return (1 + this.fuzzFactor_) * this.currentDelay_;
    }, t4.getCurrentFuzzedDelay = function() {
      var e10 = this.getCurrentMinPossibleDelay(), t5 = this.getCurrentMaxPossibleDelay();
      return e10 + Math.random() * (t5 - e10);
    }, e9;
  }();
  return he = e8;
}
function Te() {
  if (pe) return ce;
  pe = 1;
  var e8 = y3();
  function t3(e9) {
    return void 0 === e9 && (e9 = ""), e9.toLowerCase().split(";").reduce(function(e10, t4) {
      var i2 = t4.split("="), s3 = i2[0], n5 = i2[1];
      return "charset" === s3.trim() ? n5.trim() : e10;
    }, "utf-8");
  }
  return ce = function(i2, s3) {
    return void 0 === s3 && (s3 = false), function(n5, r5, a5) {
      if (n5) i2(n5);
      else if (r5.statusCode >= 400 && r5.statusCode <= 599) {
        var o5 = a5;
        if (s3) if (e8.TextDecoder) {
          var l2 = t3(r5.headers && r5.headers["content-type"]);
          try {
            o5 = new TextDecoder(l2).decode(a5);
          } catch (u3) {
          }
        } else o5 = String.fromCharCode.apply(null, new Uint8Array(a5));
        i2({ cause: o5 });
      } else i2(null, a5);
    };
  };
}
function Se() {
  if (me) return ge.exports;
  me = 1;
  var e8 = y3(), t3 = ye(), i2 = _e(), s3 = be(), n5 = ve();
  u3.httpHandler = Te(), u3.requestInterceptorsStorage = new s3(), u3.responseInterceptorsStorage = new s3(), u3.retryManager = new n5();
  var r5 = function(e9) {
    var t4 = {};
    return e9 ? (e9.trim().split("\n").forEach(function(e10) {
      var i3 = e10.indexOf(":"), s4 = e10.slice(0, i3).trim().toLowerCase(), n6 = e10.slice(i3 + 1).trim();
      void 0 === t4[s4] ? t4[s4] = n6 : Array.isArray(t4[s4]) ? t4[s4].push(n6) : t4[s4] = [t4[s4], n6];
    }), t4) : t4;
  };
  function a5(e9, t4) {
    for (var i3 = 0; i3 < e9.length; i3++) t4(e9[i3]);
  }
  function o5(e9) {
    for (var t4 in e9) if (e9.hasOwnProperty(t4)) return false;
    return true;
  }
  function l2(e9, s4, n6) {
    var r6 = e9;
    return i2(s4) ? (n6 = s4, "string" == typeof e9 && (r6 = { uri: e9 })) : r6 = t3({}, s4, { uri: e9 }), r6.callback = n6, r6;
  }
  function u3(e9, t4, i3) {
    return h2(t4 = l2(e9, t4, i3));
  }
  function h2(e9) {
    if (void 0 === e9.callback) throw new Error("callback argument missing");
    if (e9.requestType && u3.requestInterceptorsStorage.getIsEnabled()) {
      var t4 = { uri: e9.uri || e9.url, headers: e9.headers || {}, body: e9.body, metadata: e9.metadata || {}, retry: e9.retry, timeout: e9.timeout }, i3 = u3.requestInterceptorsStorage.execute(e9.requestType, t4);
      e9.uri = i3.uri, e9.headers = i3.headers, e9.body = i3.body, e9.metadata = i3.metadata, e9.retry = i3.retry, e9.timeout = i3.timeout;
    }
    var s4 = false, n6 = function(t5, i4, n7) {
      s4 || (s4 = true, e9.callback(t5, i4, n7));
    };
    function a6() {
      4 !== f3.readyState || u3.responseInterceptorsStorage.getIsEnabled() || setTimeout(p2, 0);
    }
    function l3() {
      var e10 = void 0;
      if (e10 = f3.response ? f3.response : f3.responseText || d3(f3), E3) try {
        e10 = JSON.parse(e10);
      } catch (t5) {
      }
      return e10;
    }
    function c4(t5) {
      if (clearTimeout(y4), clearTimeout(e9.retryTimeout), t5 instanceof Error || (t5 = new Error("" + (t5 || "Unknown XMLHttpRequest Error"))), t5.statusCode = 0, g5 || !u3.retryManager.getIsEnabled() || !e9.retry || !e9.retry.shouldRetry()) {
        if (e9.requestType && u3.responseInterceptorsStorage.getIsEnabled()) {
          var i4 = { headers: w3.headers || {}, body: w3.body, responseUrl: f3.responseURL, responseType: f3.responseType }, s5 = u3.responseInterceptorsStorage.execute(e9.requestType, i4);
          w3.body = s5.body, w3.headers = s5.headers;
        }
        return n6(t5, w3);
      }
      e9.retryTimeout = setTimeout(function() {
        e9.retry.moveToNextAttempt(), e9.xhr = f3, h2(e9);
      }, e9.retry.getCurrentFuzzedDelay());
    }
    function p2() {
      if (!g5) {
        var t5;
        clearTimeout(y4), clearTimeout(e9.retryTimeout), t5 = e9.useXDR && void 0 === f3.status ? 200 : 1223 === f3.status ? 204 : f3.status;
        var i4 = w3, s5 = null;
        if (0 !== t5 ? (i4 = { body: l3(), statusCode: t5, method: b2, headers: {}, url: _2, rawRequest: f3 }, f3.getAllResponseHeaders && (i4.headers = r5(f3.getAllResponseHeaders()))) : s5 = new Error("Internal XMLHttpRequest Error"), e9.requestType && u3.responseInterceptorsStorage.getIsEnabled()) {
          var a7 = { headers: i4.headers || {}, body: i4.body, responseUrl: f3.responseURL, responseType: f3.responseType }, o6 = u3.responseInterceptorsStorage.execute(e9.requestType, a7);
          i4.body = o6.body, i4.headers = o6.headers;
        }
        return n6(s5, i4, i4.body);
      }
    }
    var m5, g5, f3 = e9.xhr || null;
    f3 || (f3 = e9.cors || e9.useXDR ? new u3.XDomainRequest() : new u3.XMLHttpRequest());
    var y4, _2 = f3.url = e9.uri || e9.url, b2 = f3.method = e9.method || "GET", v4 = e9.body || e9.data, T2 = f3.headers = e9.headers || {}, S4 = !!e9.sync, E3 = false, w3 = { body: void 0, headers: {}, statusCode: 0, method: b2, url: _2, rawRequest: f3 };
    if ("json" in e9 && false !== e9.json && (E3 = true, T2.accept || T2.Accept || (T2.Accept = "application/json"), "GET" !== b2 && "HEAD" !== b2 && (T2["content-type"] || T2["Content-Type"] || (T2["Content-Type"] = "application/json"), v4 = JSON.stringify(true === e9.json ? v4 : e9.json))), f3.onreadystatechange = a6, f3.onload = p2, f3.onerror = c4, f3.onprogress = function() {
    }, f3.onabort = function() {
      g5 = true, clearTimeout(e9.retryTimeout);
    }, f3.ontimeout = c4, f3.open(b2, _2, !S4, e9.username, e9.password), S4 || (f3.withCredentials = !!e9.withCredentials), !S4 && e9.timeout > 0 && (y4 = setTimeout(function() {
      if (!g5) {
        g5 = true, f3.abort("timeout");
        var e10 = new Error("XMLHttpRequest timeout");
        e10.code = "ETIMEDOUT", c4(e10);
      }
    }, e9.timeout)), f3.setRequestHeader) for (m5 in T2) T2.hasOwnProperty(m5) && f3.setRequestHeader(m5, T2[m5]);
    else if (e9.headers && !o5(e9.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
    return "responseType" in e9 && (f3.responseType = e9.responseType), "beforeSend" in e9 && "function" == typeof e9.beforeSend && e9.beforeSend(f3), f3.send(v4 || null), f3;
  }
  function d3(e9) {
    try {
      if ("document" === e9.responseType) return e9.responseXML;
      var t4 = e9.responseXML && "parsererror" === e9.responseXML.documentElement.nodeName;
      if ("" === e9.responseType && !t4) return e9.responseXML;
    } catch (i3) {
    }
    return null;
  }
  function c3() {
  }
  return ge.exports = u3, ge.exports.default = u3, u3.XMLHttpRequest = e8.XMLHttpRequest || c3, u3.XDomainRequest = "withCredentials" in new u3.XMLHttpRequest() ? u3.XMLHttpRequest : e8.XDomainRequest, a5(["get", "put", "post", "patch", "head", "delete"], function(e9) {
    u3["delete" === e9 ? "del" : e9] = function(t4, i3, s4) {
      return (i3 = l2(t4, i3, s4)).method = e9.toUpperCase(), h2(i3);
    };
  }), ge.exports;
}
var Ee = o2(Se());
var we;
var Ce;
var ke;
var Ie;
var xe;
var Ae;
var De;
var Pe = { exports: {} };
function Le() {
  if (Ce) return we;
  Ce = 1;
  var e8 = se(), t3 = Object.create || /* @__PURE__ */ function() {
    function e9() {
    }
    return function(t4) {
      if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
      return e9.prototype = t4, new e9();
    };
  }();
  function i2(e9, t4) {
    this.name = "ParsingError", this.code = e9.code, this.message = t4 || e9.message;
  }
  function s3(e9) {
    function t4(e10, t5, i4, s4) {
      return 3600 * (0 | e10) + 60 * (0 | t5) + (0 | i4) + (0 | s4) / 1e3;
    }
    var i3 = e9.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
    return i3 ? i3[3] ? t4(i3[1], i3[2], i3[3].replace(":", ""), i3[4]) : i3[1] > 59 ? t4(i3[1], i3[2], 0, i3[4]) : t4(0, i3[1], i3[2], i3[4]) : null;
  }
  function n5() {
    this.values = t3(null);
  }
  function r5(e9, t4, i3, s4) {
    var n6 = s4 ? e9.split(s4) : [e9];
    for (var r6 in n6) if ("string" == typeof n6[r6]) {
      var a6 = n6[r6].split(i3);
      if (2 === a6.length) t4(a6[0].trim(), a6[1].trim());
    }
  }
  function a5(e9, t4, a6) {
    var o6 = e9;
    function l3() {
      var t5 = s3(e9);
      if (null === t5) throw new i2(i2.Errors.BadTimeStamp, "Malformed timestamp: " + o6);
      return e9 = e9.replace(/^[^\sa-zA-Z-]+/, ""), t5;
    }
    function u4(e10, t5) {
      var i3 = new n5();
      r5(e10, function(e11, t6) {
        switch (e11) {
          case "region":
            for (var s4 = a6.length - 1; s4 >= 0; s4--) if (a6[s4].id === t6) {
              i3.set(e11, a6[s4].region);
              break;
            }
            break;
          case "vertical":
            i3.alt(e11, t6, ["rl", "lr"]);
            break;
          case "line":
            var n6 = t6.split(","), r6 = n6[0];
            i3.integer(e11, r6), i3.percent(e11, r6) && i3.set("snapToLines", false), i3.alt(e11, r6, ["auto"]), 2 === n6.length && i3.alt("lineAlign", n6[1], ["start", "center", "end"]);
            break;
          case "position":
            n6 = t6.split(","), i3.percent(e11, n6[0]), 2 === n6.length && i3.alt("positionAlign", n6[1], ["start", "center", "end"]);
            break;
          case "size":
            i3.percent(e11, t6);
            break;
          case "align":
            i3.alt(e11, t6, ["start", "center", "end", "left", "right"]);
        }
      }, /:/, /\s/), t5.region = i3.get("region", null), t5.vertical = i3.get("vertical", "");
      try {
        t5.line = i3.get("line", "auto");
      } catch (s4) {
      }
      t5.lineAlign = i3.get("lineAlign", "start"), t5.snapToLines = i3.get("snapToLines", true), t5.size = i3.get("size", 100);
      try {
        t5.align = i3.get("align", "center");
      } catch (s4) {
        t5.align = i3.get("align", "middle");
      }
      try {
        t5.position = i3.get("position", "auto");
      } catch (s4) {
        t5.position = i3.get("position", { start: 0, left: 0, center: 50, middle: 50, end: 100, right: 100 }, t5.align);
      }
      t5.positionAlign = i3.get("positionAlign", { start: "start", left: "start", center: "center", middle: "center", end: "end", right: "end" }, t5.align);
    }
    function h3() {
      e9 = e9.replace(/^\s+/, "");
    }
    if (h3(), t4.startTime = l3(), h3(), "-->" !== e9.substr(0, 3)) throw new i2(i2.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + o6);
    e9 = e9.substr(3), h3(), t4.endTime = l3(), h3(), u4(e9, t4);
  }
  i2.prototype = t3(Error.prototype), i2.prototype.constructor = i2, i2.Errors = { BadSignature: { code: 0, message: "Malformed WebVTT signature." }, BadTimeStamp: { code: 1, message: "Malformed time stamp." } }, n5.prototype = { set: function(e9, t4) {
    this.get(e9) || "" === t4 || (this.values[e9] = t4);
  }, get: function(e9, t4, i3) {
    return i3 ? this.has(e9) ? this.values[e9] : t4[i3] : this.has(e9) ? this.values[e9] : t4;
  }, has: function(e9) {
    return e9 in this.values;
  }, alt: function(e9, t4, i3) {
    for (var s4 = 0; s4 < i3.length; ++s4) if (t4 === i3[s4]) {
      this.set(e9, t4);
      break;
    }
  }, integer: function(e9, t4) {
    /^-?\d+$/.test(t4) && this.set(e9, parseInt(t4, 10));
  }, percent: function(e9, t4) {
    return !!(t4.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t4 = parseFloat(t4)) >= 0 && t4 <= 100) && (this.set(e9, t4), true);
  } };
  var o5 = e8.createElement && e8.createElement("textarea"), l2 = { c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span", lang: "span" }, u3 = { white: "rgba(255,255,255,1)", lime: "rgba(0,255,0,1)", cyan: "rgba(0,255,255,1)", red: "rgba(255,0,0,1)", yellow: "rgba(255,255,0,1)", magenta: "rgba(255,0,255,1)", blue: "rgba(0,0,255,1)", black: "rgba(0,0,0,1)" }, h2 = { v: "title", lang: "lang" }, d3 = { rt: "ruby" };
  function c3(e9, t4) {
    function i3() {
      if (!t4) return null;
      function e10(e11) {
        return t4 = t4.substr(e11.length), e11;
      }
      var i4 = t4.match(/^([^<]*)(<[^>]*>?)?/);
      return e10(i4[1] ? i4[1] : i4[2]);
    }
    function n6(e10) {
      return o5.innerHTML = e10, e10 = o5.textContent, o5.textContent = "", e10;
    }
    function r6(e10, t5) {
      return !d3[t5.localName] || d3[t5.localName] === e10.localName;
    }
    function a6(t5, i4) {
      var s4 = l2[t5];
      if (!s4) return null;
      var n7 = e9.document.createElement(s4), r7 = h2[t5];
      return r7 && i4 && (n7[r7] = i4.trim()), n7;
    }
    for (var c4, p3 = e9.document.createElement("div"), m6 = p3, g6 = []; null !== (c4 = i3()); ) if ("<" !== c4[0]) m6.appendChild(e9.document.createTextNode(n6(c4)));
    else {
      if ("/" === c4[1]) {
        g6.length && g6[g6.length - 1] === c4.substr(2).replace(">", "") && (g6.pop(), m6 = m6.parentNode);
        continue;
      }
      var f4, y5 = s3(c4.substr(1, c4.length - 2));
      if (y5) {
        f4 = e9.document.createProcessingInstruction("timestamp", y5), m6.appendChild(f4);
        continue;
      }
      var _3 = c4.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
      if (!_3) continue;
      if (!(f4 = a6(_3[1], _3[3]))) continue;
      if (!r6(m6, f4)) continue;
      if (_3[2]) {
        var b3 = _3[2].split(".");
        b3.forEach(function(e10) {
          var t5 = /^bg_/.test(e10), i4 = t5 ? e10.slice(3) : e10;
          if (u3.hasOwnProperty(i4)) {
            var s4 = t5 ? "background-color" : "color", n7 = u3[i4];
            f4.style[s4] = n7;
          }
        }), f4.className = b3.join(" ");
      }
      g6.push(_3[1]), m6.appendChild(f4), m6 = f4;
    }
    return p3;
  }
  var p2 = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];
  function m5(e9) {
    for (var t4 = 0; t4 < p2.length; t4++) {
      var i3 = p2[t4];
      if (e9 >= i3[0] && e9 <= i3[1]) return true;
    }
    return false;
  }
  function g5(e9) {
    var t4 = [], i3 = "";
    if (!e9 || !e9.childNodes) return "ltr";
    function s4(e10, t5) {
      for (var i4 = t5.childNodes.length - 1; i4 >= 0; i4--) e10.push(t5.childNodes[i4]);
    }
    function n6(e10) {
      if (!e10 || !e10.length) return null;
      var t5 = e10.pop(), i4 = t5.textContent || t5.innerText;
      if (i4) {
        var r7 = i4.match(/^.*(\n|\r)/);
        return r7 ? (e10.length = 0, r7[0]) : i4;
      }
      return "ruby" === t5.tagName ? n6(e10) : t5.childNodes ? (s4(e10, t5), n6(e10)) : void 0;
    }
    for (s4(t4, e9); i3 = n6(t4); ) for (var r6 = 0; r6 < i3.length; r6++) if (m5(i3.charCodeAt(r6))) return "rtl";
    return "ltr";
  }
  function f3(e9) {
    if ("number" == typeof e9.line && (e9.snapToLines || e9.line >= 0 && e9.line <= 100)) return e9.line;
    if (!e9.track || !e9.track.textTrackList || !e9.track.textTrackList.mediaElement) return -1;
    for (var t4 = e9.track, i3 = t4.textTrackList, s4 = 0, n6 = 0; n6 < i3.length && i3[n6] !== t4; n6++) "showing" === i3[n6].mode && s4++;
    return -1 * ++s4;
  }
  function y4() {
  }
  function _2(e9, t4, i3) {
    y4.call(this), this.cue = t4, this.cueDiv = c3(e9, t4.text);
    var s4 = { color: "rgba(255, 255, 255, 1)", backgroundColor: "rgba(0, 0, 0, 0.8)", position: "relative", left: 0, right: 0, top: 0, bottom: 0, display: "inline", writingMode: "" === t4.vertical ? "horizontal-tb" : "lr" === t4.vertical ? "vertical-lr" : "vertical-rl", unicodeBidi: "plaintext" };
    this.applyStyles(s4, this.cueDiv), this.div = e9.document.createElement("div"), s4 = { direction: g5(this.cueDiv), writingMode: "" === t4.vertical ? "horizontal-tb" : "lr" === t4.vertical ? "vertical-lr" : "vertical-rl", unicodeBidi: "plaintext", textAlign: "middle" === t4.align ? "center" : t4.align, font: i3.font, whiteSpace: "pre-line", position: "absolute" }, this.applyStyles(s4), this.div.appendChild(this.cueDiv);
    var n6 = 0;
    switch (t4.positionAlign) {
      case "start":
      case "line-left":
        n6 = t4.position;
        break;
      case "center":
        n6 = t4.position - t4.size / 2;
        break;
      case "end":
      case "line-right":
        n6 = t4.position - t4.size;
    }
    "" === t4.vertical ? this.applyStyles({ left: this.formatStyle(n6, "%"), width: this.formatStyle(t4.size, "%") }) : this.applyStyles({ top: this.formatStyle(n6, "%"), height: this.formatStyle(t4.size, "%") }), this.move = function(e10) {
      this.applyStyles({ top: this.formatStyle(e10.top, "px"), bottom: this.formatStyle(e10.bottom, "px"), left: this.formatStyle(e10.left, "px"), right: this.formatStyle(e10.right, "px"), height: this.formatStyle(e10.height, "px"), width: this.formatStyle(e10.width, "px") });
    };
  }
  function b2(e9) {
    var t4, i3, s4, n6;
    if (e9.div) {
      i3 = e9.div.offsetHeight, s4 = e9.div.offsetWidth, n6 = e9.div.offsetTop;
      var r6 = (r6 = e9.div.childNodes) && (r6 = r6[0]) && r6.getClientRects && r6.getClientRects();
      e9 = e9.div.getBoundingClientRect(), t4 = r6 ? Math.max(r6[0] && r6[0].height || 0, e9.height / r6.length) : 0;
    }
    this.left = e9.left, this.right = e9.right, this.top = e9.top || n6, this.height = e9.height || i3, this.bottom = e9.bottom || n6 + (e9.height || i3), this.width = e9.width || s4, this.lineHeight = void 0 !== t4 ? t4 : e9.lineHeight;
  }
  function v4(e9, t4, i3, s4) {
    function n6(e10, t5) {
      for (var n7, r7 = new b2(e10), a7 = 1, o7 = 0; o7 < t5.length; o7++) {
        for (; e10.overlapsOppositeAxis(i3, t5[o7]) || e10.within(i3) && e10.overlapsAny(s4); ) e10.move(t5[o7]);
        if (e10.within(i3)) return e10;
        var l4 = e10.intersectPercentage(i3);
        a7 > l4 && (n7 = new b2(e10), a7 = l4), e10 = new b2(r7);
      }
      return n7 || r7;
    }
    var r6 = new b2(t4), a6 = t4.cue, o6 = f3(a6), l3 = [];
    if (a6.snapToLines) {
      var u4;
      switch (a6.vertical) {
        case "":
          l3 = ["+y", "-y"], u4 = "height";
          break;
        case "rl":
          l3 = ["+x", "-x"], u4 = "width";
          break;
        case "lr":
          l3 = ["-x", "+x"], u4 = "width";
      }
      var h3 = r6.lineHeight, d4 = h3 * Math.round(o6), c4 = i3[u4] + h3, p3 = l3[0];
      Math.abs(d4) > c4 && (d4 = d4 < 0 ? -1 : 1, d4 *= Math.ceil(c4 / h3) * h3), o6 < 0 && (d4 += "" === a6.vertical ? i3.height : i3.width, l3 = l3.reverse()), r6.move(p3, d4);
    } else {
      var m6 = r6.lineHeight / i3.height * 100;
      switch (a6.lineAlign) {
        case "center":
          o6 -= m6 / 2;
          break;
        case "end":
          o6 -= m6;
      }
      switch (a6.vertical) {
        case "":
          t4.applyStyles({ top: t4.formatStyle(o6, "%") });
          break;
        case "rl":
          t4.applyStyles({ left: t4.formatStyle(o6, "%") });
          break;
        case "lr":
          t4.applyStyles({ right: t4.formatStyle(o6, "%") });
      }
      l3 = ["+y", "-x", "+x", "-y"], r6 = new b2(t4);
    }
    var g6 = n6(r6, l3);
    t4.move(g6.toCSSCompatValues(i3));
  }
  function T2() {
  }
  y4.prototype.applyStyles = function(e9, t4) {
    for (var i3 in t4 = t4 || this.div, e9) e9.hasOwnProperty(i3) && (t4.style[i3] = e9[i3]);
  }, y4.prototype.formatStyle = function(e9, t4) {
    return 0 === e9 ? 0 : e9 + t4;
  }, _2.prototype = t3(y4.prototype), _2.prototype.constructor = _2, b2.prototype.move = function(e9, t4) {
    switch (t4 = void 0 !== t4 ? t4 : this.lineHeight, e9) {
      case "+x":
        this.left += t4, this.right += t4;
        break;
      case "-x":
        this.left -= t4, this.right -= t4;
        break;
      case "+y":
        this.top += t4, this.bottom += t4;
        break;
      case "-y":
        this.top -= t4, this.bottom -= t4;
    }
  }, b2.prototype.overlaps = function(e9) {
    return this.left < e9.right && this.right > e9.left && this.top < e9.bottom && this.bottom > e9.top;
  }, b2.prototype.overlapsAny = function(e9) {
    for (var t4 = 0; t4 < e9.length; t4++) if (this.overlaps(e9[t4])) return true;
    return false;
  }, b2.prototype.within = function(e9) {
    return this.top >= e9.top && this.bottom <= e9.bottom && this.left >= e9.left && this.right <= e9.right;
  }, b2.prototype.overlapsOppositeAxis = function(e9, t4) {
    switch (t4) {
      case "+x":
        return this.left < e9.left;
      case "-x":
        return this.right > e9.right;
      case "+y":
        return this.top < e9.top;
      case "-y":
        return this.bottom > e9.bottom;
    }
  }, b2.prototype.intersectPercentage = function(e9) {
    return Math.max(0, Math.min(this.right, e9.right) - Math.max(this.left, e9.left)) * Math.max(0, Math.min(this.bottom, e9.bottom) - Math.max(this.top, e9.top)) / (this.height * this.width);
  }, b2.prototype.toCSSCompatValues = function(e9) {
    return { top: this.top - e9.top, bottom: e9.bottom - this.bottom, left: this.left - e9.left, right: e9.right - this.right, height: this.height, width: this.width };
  }, b2.getSimpleBoxPosition = function(e9) {
    var t4 = e9.div ? e9.div.offsetHeight : e9.tagName ? e9.offsetHeight : 0, i3 = e9.div ? e9.div.offsetWidth : e9.tagName ? e9.offsetWidth : 0, s4 = e9.div ? e9.div.offsetTop : e9.tagName ? e9.offsetTop : 0;
    return { left: (e9 = e9.div ? e9.div.getBoundingClientRect() : e9.tagName ? e9.getBoundingClientRect() : e9).left, right: e9.right, top: e9.top || s4, height: e9.height || t4, bottom: e9.bottom || s4 + (e9.height || t4), width: e9.width || i3 };
  }, T2.StringDecoder = function() {
    return { decode: function(e9) {
      if (!e9) return "";
      if ("string" != typeof e9) throw new Error("Error - expected string data.");
      return decodeURIComponent(encodeURIComponent(e9));
    } };
  }, T2.convertCueToDOMTree = function(e9, t4) {
    return e9 && t4 ? c3(e9, t4) : null;
  };
  var S4 = 0.05, E3 = "sans-serif", w3 = "1.5%";
  return T2.processCues = function(e9, t4, i3) {
    if (!e9 || !t4 || !i3) return null;
    for (; i3.firstChild; ) i3.removeChild(i3.firstChild);
    var s4 = e9.document.createElement("div");
    function n6(e10) {
      for (var t5 = 0; t5 < e10.length; t5++) if (e10[t5].hasBeenReset || !e10[t5].displayState) return true;
      return false;
    }
    if (s4.style.position = "absolute", s4.style.left = "0", s4.style.right = "0", s4.style.top = "0", s4.style.bottom = "0", s4.style.margin = w3, i3.appendChild(s4), n6(t4)) {
      var r6 = [], a6 = b2.getSimpleBoxPosition(s4), o6 = { font: Math.round(a6.height * S4 * 100) / 100 + "px " + E3 };
      !function() {
        for (var i4, n7, l4 = 0; l4 < t4.length; l4++) n7 = t4[l4], i4 = new _2(e9, n7, o6), s4.appendChild(i4.div), v4(e9, i4, a6, r6), n7.displayState = i4.div, r6.push(b2.getSimpleBoxPosition(i4));
      }();
    } else for (var l3 = 0; l3 < t4.length; l3++) s4.appendChild(t4[l3].displayState);
  }, T2.Parser = function(e9, t4, i3) {
    i3 || (i3 = t4, t4 = {}), t4 || (t4 = {}), this.window = e9, this.vttjs = t4, this.state = "INITIAL", this.buffer = "", this.decoder = i3 || new TextDecoder("utf8"), this.regionList = [];
  }, T2.Parser.prototype = { reportOrThrowError: function(e9) {
    if (!(e9 instanceof i2)) throw e9;
    this.onparsingerror && this.onparsingerror(e9);
  }, parse: function(e9) {
    var t4 = this;
    function o6() {
      for (var e10 = t4.buffer, i3 = 0; i3 < e10.length && "\r" !== e10[i3] && "\n" !== e10[i3]; ) ++i3;
      var s4 = e10.substr(0, i3);
      return "\r" === e10[i3] && ++i3, "\n" === e10[i3] && ++i3, t4.buffer = e10.substr(i3), s4;
    }
    function l3(e10) {
      var i3 = new n5();
      if (r5(e10, function(e11, t5) {
        switch (e11) {
          case "id":
            i3.set(e11, t5);
            break;
          case "width":
            i3.percent(e11, t5);
            break;
          case "lines":
            i3.integer(e11, t5);
            break;
          case "regionanchor":
          case "viewportanchor":
            var s5 = t5.split(",");
            if (2 !== s5.length) break;
            var r6 = new n5();
            if (r6.percent("x", s5[0]), r6.percent("y", s5[1]), !r6.has("x") || !r6.has("y")) break;
            i3.set(e11 + "X", r6.get("x")), i3.set(e11 + "Y", r6.get("y"));
            break;
          case "scroll":
            i3.alt(e11, t5, ["up"]);
        }
      }, /=/, /\s/), i3.has("id")) {
        var s4 = new (t4.vttjs.VTTRegion || t4.window.VTTRegion)();
        s4.width = i3.get("width", 100), s4.lines = i3.get("lines", 3), s4.regionAnchorX = i3.get("regionanchorX", 0), s4.regionAnchorY = i3.get("regionanchorY", 100), s4.viewportAnchorX = i3.get("viewportanchorX", 0), s4.viewportAnchorY = i3.get("viewportanchorY", 100), s4.scroll = i3.get("scroll", ""), t4.onregion && t4.onregion(s4), t4.regionList.push({ id: i3.get("id"), region: s4 });
      }
    }
    function u4(e10) {
      var i3 = new n5();
      r5(e10, function(e11, t5) {
        switch (e11) {
          case "MPEGT":
            i3.integer(e11 + "S", t5);
            break;
          case "LOCA":
            i3.set(e11 + "L", s3(t5));
        }
      }, /[^\d]:/, /,/), t4.ontimestampmap && t4.ontimestampmap({ MPEGTS: i3.get("MPEGTS"), LOCAL: i3.get("LOCAL") });
    }
    function h3(e10) {
      e10.match(/X-TIMESTAMP-MAP/) ? r5(e10, function(e11, t5) {
        if ("X-TIMESTAMP-MAP" === e11) u4(t5);
      }, /=/) : r5(e10, function(e11, t5) {
        if ("Region" === e11) l3(t5);
      }, /:/);
    }
    e9 && (t4.buffer += t4.decoder.decode(e9, { stream: true }));
    try {
      var d4;
      if ("INITIAL" === t4.state) {
        if (!/\r\n|\n/.test(t4.buffer)) return this;
        var c4 = (d4 = o6()).match(/^WEBVTT([ \t].*)?$/);
        if (!c4 || !c4[0]) throw new i2(i2.Errors.BadSignature);
        t4.state = "HEADER";
      }
      for (var p3 = false; t4.buffer; ) {
        if (!/\r\n|\n/.test(t4.buffer)) return this;
        switch (p3 ? p3 = false : d4 = o6(), t4.state) {
          case "HEADER":
            /:/.test(d4) ? h3(d4) : d4 || (t4.state = "ID");
            continue;
          case "NOTE":
            d4 || (t4.state = "ID");
            continue;
          case "ID":
            if (/^NOTE($|[ \t])/.test(d4)) {
              t4.state = "NOTE";
              break;
            }
            if (!d4) continue;
            t4.cue = new (t4.vttjs.VTTCue || t4.window.VTTCue)(0, 0, "");
            try {
              t4.cue.align = "center";
            } catch (g6) {
              t4.cue.align = "middle";
            }
            if (t4.state = "CUE", -1 === d4.indexOf("-->")) {
              t4.cue.id = d4;
              continue;
            }
          case "CUE":
            try {
              a5(d4, t4.cue, t4.regionList);
            } catch (g6) {
              t4.reportOrThrowError(g6), t4.cue = null, t4.state = "BADCUE";
              continue;
            }
            t4.state = "CUETEXT";
            continue;
          case "CUETEXT":
            var m6 = -1 !== d4.indexOf("-->");
            if (!d4 || m6 && (p3 = true)) {
              t4.oncue && t4.oncue(t4.cue), t4.cue = null, t4.state = "ID";
              continue;
            }
            t4.cue.text && (t4.cue.text += "\n"), t4.cue.text += d4.replace(/\u2028/g, "\n").replace(/u2029/g, "\n");
            continue;
          case "BADCUE":
            d4 || (t4.state = "ID");
            continue;
        }
      }
    } catch (g6) {
      t4.reportOrThrowError(g6), "CUETEXT" === t4.state && t4.cue && t4.oncue && t4.oncue(t4.cue), t4.cue = null, t4.state = "INITIAL" === t4.state ? "BADWEBVTT" : "BADCUE";
    }
    return this;
  }, flush: function() {
    var e9 = this;
    try {
      if (e9.buffer += e9.decoder.decode(), (e9.cue || "HEADER" === e9.state) && (e9.buffer += "\n\n", e9.parse()), "INITIAL" === e9.state) throw new i2(i2.Errors.BadSignature);
    } catch (t4) {
      e9.reportOrThrowError(t4);
    }
    return e9.onflush && e9.onflush(), this;
  } }, we = T2;
}
function Oe() {
  if (Ie) return ke;
  Ie = 1;
  var e8 = "auto", t3 = { "": 1, lr: 1, rl: 1 }, i2 = { start: 1, center: 1, end: 1, left: 1, right: 1, auto: 1, "line-left": 1, "line-right": 1 };
  function s3(e9) {
    return "string" == typeof e9 && (!!t3[e9.toLowerCase()] && e9.toLowerCase());
  }
  function n5(e9) {
    return "string" == typeof e9 && (!!i2[e9.toLowerCase()] && e9.toLowerCase());
  }
  function r5(t4, i3, r6) {
    this.hasBeenReset = false;
    var a5 = "", o5 = false, l2 = t4, u3 = i3, h2 = r6, d3 = null, c3 = "", p2 = true, m5 = "auto", g5 = "start", f3 = "auto", y4 = "auto", _2 = 100, b2 = "center";
    Object.defineProperties(this, { id: { enumerable: true, get: function() {
      return a5;
    }, set: function(e9) {
      a5 = "" + e9;
    } }, pauseOnExit: { enumerable: true, get: function() {
      return o5;
    }, set: function(e9) {
      o5 = !!e9;
    } }, startTime: { enumerable: true, get: function() {
      return l2;
    }, set: function(e9) {
      if ("number" != typeof e9) throw new TypeError("Start time must be set to a number.");
      l2 = e9, this.hasBeenReset = true;
    } }, endTime: { enumerable: true, get: function() {
      return u3;
    }, set: function(e9) {
      if ("number" != typeof e9) throw new TypeError("End time must be set to a number.");
      u3 = e9, this.hasBeenReset = true;
    } }, text: { enumerable: true, get: function() {
      return h2;
    }, set: function(e9) {
      h2 = "" + e9, this.hasBeenReset = true;
    } }, region: { enumerable: true, get: function() {
      return d3;
    }, set: function(e9) {
      d3 = e9, this.hasBeenReset = true;
    } }, vertical: { enumerable: true, get: function() {
      return c3;
    }, set: function(e9) {
      var t5 = s3(e9);
      if (false === t5) throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");
      c3 = t5, this.hasBeenReset = true;
    } }, snapToLines: { enumerable: true, get: function() {
      return p2;
    }, set: function(e9) {
      p2 = !!e9, this.hasBeenReset = true;
    } }, line: { enumerable: true, get: function() {
      return m5;
    }, set: function(t5) {
      if ("number" != typeof t5 && t5 !== e8) throw new SyntaxError("Line: an invalid number or illegal string was specified.");
      m5 = t5, this.hasBeenReset = true;
    } }, lineAlign: { enumerable: true, get: function() {
      return g5;
    }, set: function(e9) {
      var t5 = n5(e9);
      t5 ? (g5 = t5, this.hasBeenReset = true) : console.warn("lineAlign: an invalid or illegal string was specified.");
    } }, position: { enumerable: true, get: function() {
      return f3;
    }, set: function(e9) {
      if (e9 < 0 || e9 > 100) throw new Error("Position must be between 0 and 100.");
      f3 = e9, this.hasBeenReset = true;
    } }, positionAlign: { enumerable: true, get: function() {
      return y4;
    }, set: function(e9) {
      var t5 = n5(e9);
      t5 ? (y4 = t5, this.hasBeenReset = true) : console.warn("positionAlign: an invalid or illegal string was specified.");
    } }, size: { enumerable: true, get: function() {
      return _2;
    }, set: function(e9) {
      if (e9 < 0 || e9 > 100) throw new Error("Size must be between 0 and 100.");
      _2 = e9, this.hasBeenReset = true;
    } }, align: { enumerable: true, get: function() {
      return b2;
    }, set: function(e9) {
      var t5 = n5(e9);
      if (!t5) throw new SyntaxError("align: an invalid or illegal alignment string was specified.");
      b2 = t5, this.hasBeenReset = true;
    } } }), this.displayState = void 0;
  }
  return r5.prototype.getCueAsHTML = function() {
    return WebVTT.convertCueToDOMTree(window, this.text);
  }, ke = r5;
}
function Ne() {
  if (Ae) return xe;
  Ae = 1;
  var e8 = { "": true, up: true };
  function t3(t4) {
    return "string" == typeof t4 && (!!e8[t4.toLowerCase()] && t4.toLowerCase());
  }
  function i2(e9) {
    return "number" == typeof e9 && e9 >= 0 && e9 <= 100;
  }
  function s3() {
    var e9 = 100, s4 = 3, n5 = 0, r5 = 100, a5 = 0, o5 = 100, l2 = "";
    Object.defineProperties(this, { width: { enumerable: true, get: function() {
      return e9;
    }, set: function(t4) {
      if (!i2(t4)) throw new Error("Width must be between 0 and 100.");
      e9 = t4;
    } }, lines: { enumerable: true, get: function() {
      return s4;
    }, set: function(e10) {
      if ("number" != typeof e10) throw new TypeError("Lines must be set to a number.");
      s4 = e10;
    } }, regionAnchorY: { enumerable: true, get: function() {
      return r5;
    }, set: function(e10) {
      if (!i2(e10)) throw new Error("RegionAnchorX must be between 0 and 100.");
      r5 = e10;
    } }, regionAnchorX: { enumerable: true, get: function() {
      return n5;
    }, set: function(e10) {
      if (!i2(e10)) throw new Error("RegionAnchorY must be between 0 and 100.");
      n5 = e10;
    } }, viewportAnchorY: { enumerable: true, get: function() {
      return o5;
    }, set: function(e10) {
      if (!i2(e10)) throw new Error("ViewportAnchorY must be between 0 and 100.");
      o5 = e10;
    } }, viewportAnchorX: { enumerable: true, get: function() {
      return a5;
    }, set: function(e10) {
      if (!i2(e10)) throw new Error("ViewportAnchorX must be between 0 and 100.");
      a5 = e10;
    } }, scroll: { enumerable: true, get: function() {
      return l2;
    }, set: function(e10) {
      var i3 = t3(e10);
      false === i3 ? console.warn("Scroll: an invalid or illegal string was specified.") : l2 = i3;
    } } });
  }
  return xe = s3;
}
function Re() {
  if (De) return Pe.exports;
  De = 1;
  var e8 = y3(), t3 = Pe.exports = { WebVTT: Le(), VTTCue: Oe(), VTTRegion: Ne() };
  e8.vttjs = t3, e8.WebVTT = t3.WebVTT;
  var i2 = t3.VTTCue, s3 = t3.VTTRegion, n5 = e8.VTTCue, r5 = e8.VTTRegion;
  return t3.shim = function() {
    e8.VTTCue = i2, e8.VTTRegion = s3;
  }, t3.restore = function() {
    e8.VTTCue = n5, e8.VTTRegion = r5;
  }, e8.VTTCue || t3.shim(), Pe.exports;
}
var Me = o2(Re());
function Ue() {
  return Ue = Object.assign ? Object.assign.bind() : function(e8) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var i2 = arguments[t3];
      for (var s3 in i2) ({}).hasOwnProperty.call(i2, s3) && (e8[s3] = i2[s3]);
    }
    return e8;
  }, Ue.apply(null, arguments);
}
var Be = "https://example.com";
var Fe = function(e8, t3) {
  if (/^[a-z]+:/i.test(t3)) return t3;
  /^data:/.test(e8) && (e8 = _.location && _.location.href || "");
  var i2 = /^\/\//.test(e8), s3 = !_.location && !/\/\//i.test(e8);
  e8 = new _.URL(e8, _.location || Be);
  var n5 = new URL(t3, e8);
  return s3 ? n5.href.slice(Be.length) : i2 ? n5.href.slice(n5.protocol.length) : n5.href;
};
var qe = function() {
  function e8() {
    this.listeners = {};
  }
  var t3 = e8.prototype;
  return t3.on = function(e9, t4) {
    this.listeners[e9] || (this.listeners[e9] = []), this.listeners[e9].push(t4);
  }, t3.off = function(e9, t4) {
    if (!this.listeners[e9]) return false;
    var i2 = this.listeners[e9].indexOf(t4);
    return this.listeners[e9] = this.listeners[e9].slice(0), this.listeners[e9].splice(i2, 1), i2 > -1;
  }, t3.trigger = function(e9) {
    var t4 = this.listeners[e9];
    if (t4) if (2 === arguments.length) for (var i2 = t4.length, s3 = 0; s3 < i2; ++s3) t4[s3].call(this, arguments[1]);
    else for (var n5 = Array.prototype.slice.call(arguments, 1), r5 = t4.length, a5 = 0; a5 < r5; ++a5) t4[a5].apply(this, n5);
  }, t3.dispose = function() {
    this.listeners = {};
  }, t3.pipe = function(e9) {
    this.on("data", function(t4) {
      e9.push(t4);
    });
  }, e8;
}();
var je = function(e8) {
  return _.atob ? _.atob(e8) : Buffer.from(e8, "base64").toString("binary");
};
function $e(e8) {
  for (var t3 = je(e8), i2 = new Uint8Array(t3.length), s3 = 0; s3 < t3.length; s3++) i2[s3] = t3.charCodeAt(s3);
  return i2;
}
var He = class extends qe {
  constructor() {
    super(), this.buffer = "";
  }
  push(e8) {
    let t3;
    for (this.buffer += e8, t3 = this.buffer.indexOf("\n"); t3 > -1; t3 = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, t3)), this.buffer = this.buffer.substring(t3 + 1);
  }
};
var Ve = String.fromCharCode(9);
var ze = function(e8) {
  const t3 = /([0-9.]*)?@?([0-9.]*)?/.exec(e8 || ""), i2 = {};
  return t3[1] && (i2.length = parseInt(t3[1], 10)), t3[2] && (i2.offset = parseInt(t3[2], 10)), i2;
};
var We = function() {
  return new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))');
};
var Ge = function(e8) {
  const t3 = {};
  if (!e8) return t3;
  const i2 = e8.split(We());
  let s3, n5 = i2.length;
  for (; n5--; ) "" !== i2[n5] && (s3 = /([^=]*)=(.*)/.exec(i2[n5]).slice(1), s3[0] = s3[0].replace(/^\s+|\s+$/g, ""), s3[1] = s3[1].replace(/^\s+|\s+$/g, ""), s3[1] = s3[1].replace(/^['"](.*)['"]$/g, "$1"), t3[s3[0]] = s3[1]);
  return t3;
};
var Xe = (e8) => {
  const t3 = e8.split("x"), i2 = {};
  return t3[0] && (i2.width = parseInt(t3[0], 10)), t3[1] && (i2.height = parseInt(t3[1], 10)), i2;
};
var Ke = class extends qe {
  constructor() {
    super(), this.customParsers = [], this.tagMappers = [];
  }
  push(e8) {
    let t3, i2;
    if (0 === (e8 = e8.trim()).length) return;
    if ("#" !== e8[0]) return void this.trigger("data", { type: "uri", uri: e8 });
    this.tagMappers.reduce((t4, i3) => {
      const s3 = i3(e8);
      return s3 === e8 ? t4 : t4.concat([s3]);
    }, [e8]).forEach((e9) => {
      for (let t4 = 0; t4 < this.customParsers.length; t4++) if (this.customParsers[t4].call(this, e9)) return;
      if (0 === e9.indexOf("#EXT")) if (e9 = e9.replace("\r", ""), t3 = /^#EXTM3U/.exec(e9), t3) this.trigger("data", { type: "tag", tagType: "m3u" });
      else {
        if (t3 = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(e9), t3) return i2 = { type: "tag", tagType: "inf" }, t3[1] && (i2.duration = parseFloat(t3[1])), t3[2] && (i2.title = t3[2]), void this.trigger("data", i2);
        if (t3 = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(e9), t3) return i2 = { type: "tag", tagType: "targetduration" }, t3[1] && (i2.duration = parseInt(t3[1], 10)), void this.trigger("data", i2);
        if (t3 = /^#EXT-X-VERSION:([0-9.]*)?/.exec(e9), t3) return i2 = { type: "tag", tagType: "version" }, t3[1] && (i2.version = parseInt(t3[1], 10)), void this.trigger("data", i2);
        if (t3 = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(e9), t3) return i2 = { type: "tag", tagType: "media-sequence" }, t3[1] && (i2.number = parseInt(t3[1], 10)), void this.trigger("data", i2);
        if (t3 = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(e9), t3) return i2 = { type: "tag", tagType: "discontinuity-sequence" }, t3[1] && (i2.number = parseInt(t3[1], 10)), void this.trigger("data", i2);
        if (t3 = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(e9), t3) return i2 = { type: "tag", tagType: "playlist-type" }, t3[1] && (i2.playlistType = t3[1]), void this.trigger("data", i2);
        if (t3 = /^#EXT-X-BYTERANGE:(.*)?$/.exec(e9), t3) return i2 = Ue(ze(t3[1]), { type: "tag", tagType: "byterange" }), void this.trigger("data", i2);
        if (t3 = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(e9), t3) return i2 = { type: "tag", tagType: "allow-cache" }, t3[1] && (i2.allowed = !/NO/.test(t3[1])), void this.trigger("data", i2);
        if (t3 = /^#EXT-X-MAP:(.*)$/.exec(e9), t3) {
          if (i2 = { type: "tag", tagType: "map" }, t3[1]) {
            const e10 = Ge(t3[1]);
            e10.URI && (i2.uri = e10.URI), e10.BYTERANGE && (i2.byterange = ze(e10.BYTERANGE));
          }
          this.trigger("data", i2);
        } else {
          if (t3 = /^#EXT-X-STREAM-INF:(.*)$/.exec(e9), t3) return i2 = { type: "tag", tagType: "stream-inf" }, t3[1] && (i2.attributes = Ge(t3[1]), i2.attributes.RESOLUTION && (i2.attributes.RESOLUTION = Xe(i2.attributes.RESOLUTION)), i2.attributes.BANDWIDTH && (i2.attributes.BANDWIDTH = parseInt(i2.attributes.BANDWIDTH, 10)), i2.attributes["FRAME-RATE"] && (i2.attributes["FRAME-RATE"] = parseFloat(i2.attributes["FRAME-RATE"])), i2.attributes["PROGRAM-ID"] && (i2.attributes["PROGRAM-ID"] = parseInt(i2.attributes["PROGRAM-ID"], 10))), void this.trigger("data", i2);
          if (t3 = /^#EXT-X-MEDIA:(.*)$/.exec(e9), t3) return i2 = { type: "tag", tagType: "media" }, t3[1] && (i2.attributes = Ge(t3[1])), void this.trigger("data", i2);
          if (t3 = /^#EXT-X-ENDLIST/.exec(e9), t3) this.trigger("data", { type: "tag", tagType: "endlist" });
          else if (t3 = /^#EXT-X-DISCONTINUITY/.exec(e9), t3) this.trigger("data", { type: "tag", tagType: "discontinuity" });
          else {
            if (t3 = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(e9), t3) return i2 = { type: "tag", tagType: "program-date-time" }, t3[1] && (i2.dateTimeString = t3[1], i2.dateTimeObject = new Date(t3[1])), void this.trigger("data", i2);
            if (t3 = /^#EXT-X-KEY:(.*)$/.exec(e9), t3) return i2 = { type: "tag", tagType: "key" }, t3[1] && (i2.attributes = Ge(t3[1]), i2.attributes.IV && ("0x" === i2.attributes.IV.substring(0, 2).toLowerCase() && (i2.attributes.IV = i2.attributes.IV.substring(2)), i2.attributes.IV = i2.attributes.IV.match(/.{8}/g), i2.attributes.IV[0] = parseInt(i2.attributes.IV[0], 16), i2.attributes.IV[1] = parseInt(i2.attributes.IV[1], 16), i2.attributes.IV[2] = parseInt(i2.attributes.IV[2], 16), i2.attributes.IV[3] = parseInt(i2.attributes.IV[3], 16), i2.attributes.IV = new Uint32Array(i2.attributes.IV))), void this.trigger("data", i2);
            if (t3 = /^#EXT-X-START:(.*)$/.exec(e9), t3) return i2 = { type: "tag", tagType: "start" }, t3[1] && (i2.attributes = Ge(t3[1]), i2.attributes["TIME-OFFSET"] = parseFloat(i2.attributes["TIME-OFFSET"]), i2.attributes.PRECISE = /YES/.test(i2.attributes.PRECISE)), void this.trigger("data", i2);
            if (t3 = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(e9), t3) return i2 = { type: "tag", tagType: "cue-out-cont" }, t3[1] ? i2.data = t3[1] : i2.data = "", void this.trigger("data", i2);
            if (t3 = /^#EXT-X-CUE-OUT:(.*)?$/.exec(e9), t3) return i2 = { type: "tag", tagType: "cue-out" }, t3[1] ? i2.data = t3[1] : i2.data = "", void this.trigger("data", i2);
            if (t3 = /^#EXT-X-CUE-IN:?(.*)?$/.exec(e9), t3) return i2 = { type: "tag", tagType: "cue-in" }, t3[1] ? i2.data = t3[1] : i2.data = "", void this.trigger("data", i2);
            if (t3 = /^#EXT-X-SKIP:(.*)$/.exec(e9), t3 && t3[1]) return i2 = { type: "tag", tagType: "skip" }, i2.attributes = Ge(t3[1]), i2.attributes.hasOwnProperty("SKIPPED-SEGMENTS") && (i2.attributes["SKIPPED-SEGMENTS"] = parseInt(i2.attributes["SKIPPED-SEGMENTS"], 10)), i2.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") && (i2.attributes["RECENTLY-REMOVED-DATERANGES"] = i2.attributes["RECENTLY-REMOVED-DATERANGES"].split(Ve)), void this.trigger("data", i2);
            if (t3 = /^#EXT-X-PART:(.*)$/.exec(e9), t3 && t3[1]) return i2 = { type: "tag", tagType: "part" }, i2.attributes = Ge(t3[1]), ["DURATION"].forEach(function(e10) {
              i2.attributes.hasOwnProperty(e10) && (i2.attributes[e10] = parseFloat(i2.attributes[e10]));
            }), ["INDEPENDENT", "GAP"].forEach(function(e10) {
              i2.attributes.hasOwnProperty(e10) && (i2.attributes[e10] = /YES/.test(i2.attributes[e10]));
            }), i2.attributes.hasOwnProperty("BYTERANGE") && (i2.attributes.byterange = ze(i2.attributes.BYTERANGE)), void this.trigger("data", i2);
            if (t3 = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(e9), t3 && t3[1]) return i2 = { type: "tag", tagType: "server-control" }, i2.attributes = Ge(t3[1]), ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(function(e10) {
              i2.attributes.hasOwnProperty(e10) && (i2.attributes[e10] = parseFloat(i2.attributes[e10]));
            }), ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function(e10) {
              i2.attributes.hasOwnProperty(e10) && (i2.attributes[e10] = /YES/.test(i2.attributes[e10]));
            }), void this.trigger("data", i2);
            if (t3 = /^#EXT-X-PART-INF:(.*)$/.exec(e9), t3 && t3[1]) return i2 = { type: "tag", tagType: "part-inf" }, i2.attributes = Ge(t3[1]), ["PART-TARGET"].forEach(function(e10) {
              i2.attributes.hasOwnProperty(e10) && (i2.attributes[e10] = parseFloat(i2.attributes[e10]));
            }), void this.trigger("data", i2);
            if (t3 = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(e9), t3 && t3[1]) return i2 = { type: "tag", tagType: "preload-hint" }, i2.attributes = Ge(t3[1]), ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function(e10) {
              if (i2.attributes.hasOwnProperty(e10)) {
                i2.attributes[e10] = parseInt(i2.attributes[e10], 10);
                const t4 = "BYTERANGE-LENGTH" === e10 ? "length" : "offset";
                i2.attributes.byterange = i2.attributes.byterange || {}, i2.attributes.byterange[t4] = i2.attributes[e10], delete i2.attributes[e10];
              }
            }), void this.trigger("data", i2);
            if (t3 = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(e9), t3 && t3[1]) return i2 = { type: "tag", tagType: "rendition-report" }, i2.attributes = Ge(t3[1]), ["LAST-MSN", "LAST-PART"].forEach(function(e10) {
              i2.attributes.hasOwnProperty(e10) && (i2.attributes[e10] = parseInt(i2.attributes[e10], 10));
            }), void this.trigger("data", i2);
            if (t3 = /^#EXT-X-DATERANGE:(.*)$/.exec(e9), t3 && t3[1]) {
              i2 = { type: "tag", tagType: "daterange" }, i2.attributes = Ge(t3[1]), ["ID", "CLASS"].forEach(function(e11) {
                i2.attributes.hasOwnProperty(e11) && (i2.attributes[e11] = String(i2.attributes[e11]));
              }), ["START-DATE", "END-DATE"].forEach(function(e11) {
                i2.attributes.hasOwnProperty(e11) && (i2.attributes[e11] = new Date(i2.attributes[e11]));
              }), ["DURATION", "PLANNED-DURATION"].forEach(function(e11) {
                i2.attributes.hasOwnProperty(e11) && (i2.attributes[e11] = parseFloat(i2.attributes[e11]));
              }), ["END-ON-NEXT"].forEach(function(e11) {
                i2.attributes.hasOwnProperty(e11) && (i2.attributes[e11] = /YES/i.test(i2.attributes[e11]));
              }), ["SCTE35-CMD", " SCTE35-OUT", "SCTE35-IN"].forEach(function(e11) {
                i2.attributes.hasOwnProperty(e11) && (i2.attributes[e11] = i2.attributes[e11].toString(16));
              });
              const e10 = /^X-([A-Z]+-)+[A-Z]+$/;
              for (const t4 in i2.attributes) {
                if (!e10.test(t4)) continue;
                const s3 = /[0-9A-Fa-f]{6}/g.test(i2.attributes[t4]), n5 = /^\d+(\.\d+)?$/.test(i2.attributes[t4]);
                i2.attributes[t4] = s3 ? i2.attributes[t4].toString(16) : n5 ? parseFloat(i2.attributes[t4]) : String(i2.attributes[t4]);
              }
              this.trigger("data", i2);
            } else if (t3 = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(e9), t3) this.trigger("data", { type: "tag", tagType: "independent-segments" });
            else if (t3 = /^#EXT-X-I-FRAMES-ONLY/.exec(e9), t3) this.trigger("data", { type: "tag", tagType: "i-frames-only" });
            else {
              if (t3 = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(e9), t3) return i2 = { type: "tag", tagType: "content-steering" }, i2.attributes = Ge(t3[1]), void this.trigger("data", i2);
              if (t3 = /^#EXT-X-I-FRAME-STREAM-INF:(.*)$/.exec(e9), t3) return i2 = { type: "tag", tagType: "i-frame-playlist" }, i2.attributes = Ge(t3[1]), i2.attributes.URI && (i2.uri = i2.attributes.URI), i2.attributes.BANDWIDTH && (i2.attributes.BANDWIDTH = parseInt(i2.attributes.BANDWIDTH, 10)), i2.attributes.RESOLUTION && (i2.attributes.RESOLUTION = Xe(i2.attributes.RESOLUTION)), i2.attributes["AVERAGE-BANDWIDTH"] && (i2.attributes["AVERAGE-BANDWIDTH"] = parseInt(i2.attributes["AVERAGE-BANDWIDTH"], 10)), i2.attributes["FRAME-RATE"] && (i2.attributes["FRAME-RATE"] = parseFloat(i2.attributes["FRAME-RATE"])), void this.trigger("data", i2);
              if (t3 = /^#EXT-X-DEFINE:(.*)$/.exec(e9), t3) return i2 = { type: "tag", tagType: "define" }, i2.attributes = Ge(t3[1]), void this.trigger("data", i2);
              this.trigger("data", { type: "tag", data: e9.slice(4) });
            }
          }
        }
      }
      else this.trigger("data", { type: "comment", text: e9.slice(1) });
    });
  }
  addParser({ expression: e8, customType: t3, dataParser: i2, segment: s3 }) {
    "function" != typeof i2 && (i2 = (e9) => e9), this.customParsers.push((n5) => {
      if (e8.exec(n5)) return this.trigger("data", { type: "custom", data: i2(n5), customType: t3, segment: s3 }), true;
    });
  }
  addTagMapper({ expression: e8, map: t3 }) {
    const i2 = (i3) => e8.test(i3) ? t3(i3) : i3;
    this.tagMappers.push(i2);
  }
};
var Ye = (e8) => e8.toLowerCase().replace(/-(\w)/g, (e9) => e9[1].toUpperCase());
var Qe = function(e8) {
  const t3 = {};
  return Object.keys(e8).forEach(function(i2) {
    t3[Ye(i2)] = e8[i2];
  }), t3;
};
var Je = function(e8) {
  const { serverControl: t3, targetDuration: i2, partTargetDuration: s3 } = e8;
  if (!t3) return;
  const n5 = "#EXT-X-SERVER-CONTROL", r5 = "holdBack", a5 = "partHoldBack", o5 = i2 && 3 * i2, l2 = s3 && 2 * s3;
  i2 && !t3.hasOwnProperty(r5) && (t3[r5] = o5, this.trigger("info", { message: `${n5} defaulting HOLD-BACK to targetDuration * 3 (${o5}).` })), o5 && t3[r5] < o5 && (this.trigger("warn", { message: `${n5} clamping HOLD-BACK (${t3[r5]}) to targetDuration * 3 (${o5})` }), t3[r5] = o5), s3 && !t3.hasOwnProperty(a5) && (t3[a5] = 3 * s3, this.trigger("info", { message: `${n5} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${t3[a5]}).` })), s3 && t3[a5] < l2 && (this.trigger("warn", { message: `${n5} clamping PART-HOLD-BACK (${t3[a5]}) to partTargetDuration * 2 (${l2}).` }), t3[a5] = l2);
};
var Ze = class extends qe {
  constructor(e8 = {}) {
    super(), this.lineStream = new He(), this.parseStream = new Ke(), this.lineStream.pipe(this.parseStream), this.mainDefinitions = e8.mainDefinitions || {}, this.params = new URL(e8.uri, "https://a.com").searchParams, this.lastProgramDateTime = null;
    const t3 = this, i2 = [];
    let s3, n5, r5 = {}, a5 = false;
    const o5 = function() {
    }, l2 = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} }, u3 = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";
    let h2 = 0;
    this.manifest = { allowCache: true, discontinuityStarts: [], dateRanges: [], iFramePlaylists: [], segments: [] };
    let d3 = 0, c3 = 0;
    const p2 = {};
    this.on("end", () => {
      r5.uri || !r5.parts && !r5.preloadHints || (!r5.map && s3 && (r5.map = s3), !r5.key && n5 && (r5.key = n5), r5.timeline || "number" != typeof h2 || (r5.timeline = h2), this.manifest.preloadSegment = r5);
    }), this.parseStream.on("data", function(e9) {
      let m5, g5;
      if (t3.manifest.definitions) {
        for (const i3 in t3.manifest.definitions) if (e9.uri && (e9.uri = e9.uri.replace(`{$${i3}}`, t3.manifest.definitions[i3])), e9.attributes) for (const s4 in e9.attributes) "string" == typeof e9.attributes[s4] && (e9.attributes[s4] = e9.attributes[s4].replace(`{$${i3}}`, t3.manifest.definitions[i3]));
      }
      ({ tag() {
        ({ version() {
          e9.version && (this.manifest.version = e9.version);
        }, "allow-cache"() {
          this.manifest.allowCache = e9.allowed, "allowed" in e9 || (this.trigger("info", { message: "defaulting allowCache to YES" }), this.manifest.allowCache = true);
        }, byterange() {
          const t4 = {};
          "length" in e9 && (r5.byterange = t4, t4.length = e9.length, "offset" in e9 || (e9.offset = d3)), "offset" in e9 && (r5.byterange = t4, t4.offset = e9.offset), d3 = t4.offset + t4.length;
        }, endlist() {
          this.manifest.endList = true;
        }, inf() {
          "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", { message: "defaulting media sequence to zero" })), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", { message: "defaulting discontinuity sequence to zero" })), e9.title && (r5.title = e9.title), e9.duration > 0 && (r5.duration = e9.duration), 0 === e9.duration && (r5.duration = 0.01, this.trigger("info", { message: "updating zero segment duration to a small value" })), this.manifest.segments = i2;
        }, key() {
          if (e9.attributes) if ("NONE" !== e9.attributes.METHOD) if (e9.attributes.URI) {
            if ("com.apple.streamingkeydelivery" === e9.attributes.KEYFORMAT) return this.manifest.contentProtection = this.manifest.contentProtection || {}, void (this.manifest.contentProtection["com.apple.fps.1_0"] = { attributes: e9.attributes });
            if ("com.microsoft.playready" === e9.attributes.KEYFORMAT) return this.manifest.contentProtection = this.manifest.contentProtection || {}, void (this.manifest.contentProtection["com.microsoft.playready"] = { uri: e9.attributes.URI });
            if (e9.attributes.KEYFORMAT === u3) {
              return -1 === ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(e9.attributes.METHOD) ? void this.trigger("warn", { message: "invalid key method provided for Widevine" }) : ("SAMPLE-AES-CENC" === e9.attributes.METHOD && this.trigger("warn", { message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead" }), "data:text/plain;base64," !== e9.attributes.URI.substring(0, 23) ? void this.trigger("warn", { message: "invalid key URI provided for Widevine" }) : e9.attributes.KEYID && "0x" === e9.attributes.KEYID.substring(0, 2) ? (this.manifest.contentProtection = this.manifest.contentProtection || {}, void (this.manifest.contentProtection["com.widevine.alpha"] = { attributes: { schemeIdUri: e9.attributes.KEYFORMAT, keyId: e9.attributes.KEYID.substring(2) }, pssh: $e(e9.attributes.URI.split(",")[1]) })) : void this.trigger("warn", { message: "invalid key ID provided for Widevine" }));
            }
            e9.attributes.METHOD || this.trigger("warn", { message: "defaulting key method to AES-128" }), n5 = { method: e9.attributes.METHOD || "AES-128", uri: e9.attributes.URI }, void 0 !== e9.attributes.IV && (n5.iv = e9.attributes.IV);
          } else this.trigger("warn", { message: "ignoring key declaration without URI" });
          else n5 = null;
          else this.trigger("warn", { message: "ignoring key declaration without attribute list" });
        }, "media-sequence"() {
          isFinite(e9.number) ? this.manifest.mediaSequence = e9.number : this.trigger("warn", { message: "ignoring invalid media sequence: " + e9.number });
        }, "discontinuity-sequence"() {
          isFinite(e9.number) ? (this.manifest.discontinuitySequence = e9.number, h2 = e9.number) : this.trigger("warn", { message: "ignoring invalid discontinuity sequence: " + e9.number });
        }, "playlist-type"() {
          /VOD|EVENT/.test(e9.playlistType) ? this.manifest.playlistType = e9.playlistType : this.trigger("warn", { message: "ignoring unknown playlist type: " + e9.playlist });
        }, map() {
          s3 = {}, e9.uri && (s3.uri = e9.uri), e9.byterange && (s3.byterange = e9.byterange), n5 && (s3.key = n5);
        }, "stream-inf"() {
          this.manifest.playlists = i2, this.manifest.mediaGroups = this.manifest.mediaGroups || l2, e9.attributes ? (r5.attributes || (r5.attributes = {}), Ue(r5.attributes, e9.attributes)) : this.trigger("warn", { message: "ignoring empty stream-inf attributes" });
        }, media() {
          if (this.manifest.mediaGroups = this.manifest.mediaGroups || l2, !(e9.attributes && e9.attributes.TYPE && e9.attributes["GROUP-ID"] && e9.attributes.NAME)) return void this.trigger("warn", { message: "ignoring incomplete or missing media group" });
          const t4 = this.manifest.mediaGroups[e9.attributes.TYPE];
          t4[e9.attributes["GROUP-ID"]] = t4[e9.attributes["GROUP-ID"]] || {}, m5 = t4[e9.attributes["GROUP-ID"]], g5 = { default: /yes/i.test(e9.attributes.DEFAULT) }, g5.default ? g5.autoselect = true : g5.autoselect = /yes/i.test(e9.attributes.AUTOSELECT), e9.attributes.LANGUAGE && (g5.language = e9.attributes.LANGUAGE), e9.attributes.URI && (g5.uri = e9.attributes.URI), e9.attributes["INSTREAM-ID"] && (g5.instreamId = e9.attributes["INSTREAM-ID"]), e9.attributes.CHARACTERISTICS && (g5.characteristics = e9.attributes.CHARACTERISTICS), e9.attributes.FORCED && (g5.forced = /yes/i.test(e9.attributes.FORCED)), m5[e9.attributes.NAME] = g5;
        }, discontinuity() {
          h2 += 1, r5.discontinuity = true, this.manifest.discontinuityStarts.push(i2.length);
        }, "program-date-time"() {
          void 0 === this.manifest.dateTimeString && (this.manifest.dateTimeString = e9.dateTimeString, this.manifest.dateTimeObject = e9.dateTimeObject), r5.dateTimeString = e9.dateTimeString, r5.dateTimeObject = e9.dateTimeObject;
          const { lastProgramDateTime: t4 } = this;
          this.lastProgramDateTime = new Date(e9.dateTimeString).getTime(), null === t4 && this.manifest.segments.reduceRight((e10, t5) => (t5.programDateTime = e10 - 1e3 * t5.duration, t5.programDateTime), this.lastProgramDateTime);
        }, targetduration() {
          !isFinite(e9.duration) || e9.duration < 0 ? this.trigger("warn", { message: "ignoring invalid target duration: " + e9.duration }) : (this.manifest.targetDuration = e9.duration, Je.call(this, this.manifest));
        }, start() {
          e9.attributes && !isNaN(e9.attributes["TIME-OFFSET"]) ? this.manifest.start = { timeOffset: e9.attributes["TIME-OFFSET"], precise: e9.attributes.PRECISE } : this.trigger("warn", { message: "ignoring start declaration without appropriate attribute list" });
        }, "cue-out"() {
          r5.cueOut = e9.data;
        }, "cue-out-cont"() {
          r5.cueOutCont = e9.data;
        }, "cue-in"() {
          r5.cueIn = e9.data;
        }, skip() {
          this.manifest.skip = Qe(e9.attributes), this.warnOnMissingAttributes_("#EXT-X-SKIP", e9.attributes, ["SKIPPED-SEGMENTS"]);
        }, part() {
          a5 = true;
          const t4 = this.manifest.segments.length, i3 = Qe(e9.attributes);
          r5.parts = r5.parts || [], r5.parts.push(i3), i3.byterange && (i3.byterange.hasOwnProperty("offset") || (i3.byterange.offset = c3), c3 = i3.byterange.offset + i3.byterange.length);
          const s4 = r5.parts.length - 1;
          this.warnOnMissingAttributes_(`#EXT-X-PART #${s4} for segment #${t4}`, e9.attributes, ["URI", "DURATION"]), this.manifest.renditionReports && this.manifest.renditionReports.forEach((e10, t5) => {
            e10.hasOwnProperty("lastPart") || this.trigger("warn", { message: `#EXT-X-RENDITION-REPORT #${t5} lacks required attribute(s): LAST-PART` });
          });
        }, "server-control"() {
          const t4 = this.manifest.serverControl = Qe(e9.attributes);
          t4.hasOwnProperty("canBlockReload") || (t4.canBlockReload = false, this.trigger("info", { message: "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false" })), Je.call(this, this.manifest), t4.canSkipDateranges && !t4.hasOwnProperty("canSkipUntil") && this.trigger("warn", { message: "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set" });
        }, "preload-hint"() {
          const t4 = this.manifest.segments.length, i3 = Qe(e9.attributes), s4 = i3.type && "PART" === i3.type;
          r5.preloadHints = r5.preloadHints || [], r5.preloadHints.push(i3), i3.byterange && (i3.byterange.hasOwnProperty("offset") || (i3.byterange.offset = s4 ? c3 : 0, s4 && (c3 = i3.byterange.offset + i3.byterange.length)));
          const n6 = r5.preloadHints.length - 1;
          if (this.warnOnMissingAttributes_(`#EXT-X-PRELOAD-HINT #${n6} for segment #${t4}`, e9.attributes, ["TYPE", "URI"]), i3.type) for (let e10 = 0; e10 < r5.preloadHints.length - 1; e10++) {
            const s5 = r5.preloadHints[e10];
            s5.type && (s5.type === i3.type && this.trigger("warn", { message: `#EXT-X-PRELOAD-HINT #${n6} for segment #${t4} has the same TYPE ${i3.type} as preload hint #${e10}` }));
          }
        }, "rendition-report"() {
          const t4 = Qe(e9.attributes);
          this.manifest.renditionReports = this.manifest.renditionReports || [], this.manifest.renditionReports.push(t4);
          const i3 = this.manifest.renditionReports.length - 1, s4 = ["LAST-MSN", "URI"];
          a5 && s4.push("LAST-PART"), this.warnOnMissingAttributes_(`#EXT-X-RENDITION-REPORT #${i3}`, e9.attributes, s4);
        }, "part-inf"() {
          this.manifest.partInf = Qe(e9.attributes), this.warnOnMissingAttributes_("#EXT-X-PART-INF", e9.attributes, ["PART-TARGET"]), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), Je.call(this, this.manifest);
        }, daterange() {
          this.manifest.dateRanges.push(Qe(e9.attributes));
          const t4 = this.manifest.dateRanges.length - 1;
          this.warnOnMissingAttributes_(`#EXT-X-DATERANGE #${t4}`, e9.attributes, ["ID", "START-DATE"]);
          const i3 = this.manifest.dateRanges[t4];
          i3.endDate && i3.startDate && new Date(i3.endDate) < new Date(i3.startDate) && this.trigger("warn", { message: "EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE" }), i3.duration && i3.duration < 0 && this.trigger("warn", { message: "EXT-X-DATERANGE DURATION must not be negative" }), i3.plannedDuration && i3.plannedDuration < 0 && this.trigger("warn", { message: "EXT-X-DATERANGE PLANNED-DURATION must not be negative" });
          const s4 = !!i3.endOnNext;
          if (s4 && !i3.class && this.trigger("warn", { message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute" }), s4 && (i3.duration || i3.endDate) && this.trigger("warn", { message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes" }), i3.duration && i3.endDate) {
            const e10 = i3.startDate.getTime() + 1e3 * i3.duration;
            this.manifest.dateRanges[t4].endDate = new Date(e10);
          }
          if (p2[i3.id]) {
            for (const t5 in p2[i3.id]) if (i3[t5] && JSON.stringify(p2[i3.id][t5]) !== JSON.stringify(i3[t5])) {
              this.trigger("warn", { message: "EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values" });
              break;
            }
            const e10 = this.manifest.dateRanges.findIndex((e11) => e11.id === i3.id);
            this.manifest.dateRanges[e10] = Ue(this.manifest.dateRanges[e10], i3), p2[i3.id] = Ue(p2[i3.id], i3), this.manifest.dateRanges.pop();
          } else p2[i3.id] = i3;
        }, "independent-segments"() {
          this.manifest.independentSegments = true;
        }, "i-frames-only"() {
          this.manifest.iFramesOnly = true, this.requiredCompatibilityversion(this.manifest.version, 4);
        }, "content-steering"() {
          this.manifest.contentSteering = Qe(e9.attributes), this.warnOnMissingAttributes_("#EXT-X-CONTENT-STEERING", e9.attributes, ["SERVER-URI"]);
        }, define() {
          this.manifest.definitions = this.manifest.definitions || {};
          const t4 = (e10, t5) => {
            e10 in this.manifest.definitions ? this.trigger("error", { message: `EXT-X-DEFINE: Duplicate name ${e10}` }) : this.manifest.definitions[e10] = t5;
          };
          if ("QUERYPARAM" in e9.attributes) {
            if ("NAME" in e9.attributes || "IMPORT" in e9.attributes) return void this.trigger("error", { message: "EXT-X-DEFINE: Invalid attributes" });
            const i3 = this.params.get(e9.attributes.QUERYPARAM);
            return i3 ? void t4(e9.attributes.QUERYPARAM, decodeURIComponent(i3)) : void this.trigger("error", { message: `EXT-X-DEFINE: No query param ${e9.attributes.QUERYPARAM}` });
          }
          return "NAME" in e9.attributes ? "IMPORT" in e9.attributes ? void this.trigger("error", { message: "EXT-X-DEFINE: Invalid attributes" }) : "VALUE" in e9.attributes && "string" == typeof e9.attributes.VALUE ? void t4(e9.attributes.NAME, e9.attributes.VALUE) : void this.trigger("error", { message: `EXT-X-DEFINE: No value for ${e9.attributes.NAME}` }) : "IMPORT" in e9.attributes ? this.mainDefinitions[e9.attributes.IMPORT] ? void t4(e9.attributes.IMPORT, this.mainDefinitions[e9.attributes.IMPORT]) : void this.trigger("error", { message: `EXT-X-DEFINE: No value ${e9.attributes.IMPORT} to import, or IMPORT used on main playlist` }) : void this.trigger("error", { message: "EXT-X-DEFINE: No attribute" });
        }, "i-frame-playlist"() {
          this.manifest.iFramePlaylists.push({ attributes: e9.attributes, uri: e9.uri, timeline: h2 }), this.warnOnMissingAttributes_("#EXT-X-I-FRAME-STREAM-INF", e9.attributes, ["BANDWIDTH", "URI"]);
        } }[e9.tagType] || o5).call(t3);
      }, uri() {
        r5.uri = e9.uri, i2.push(r5), this.manifest.targetDuration && !("duration" in r5) && (this.trigger("warn", { message: "defaulting segment duration to the target duration" }), r5.duration = this.manifest.targetDuration), n5 && (r5.key = n5), r5.timeline = h2, s3 && (r5.map = s3), c3 = 0, null !== this.lastProgramDateTime && (r5.programDateTime = this.lastProgramDateTime, this.lastProgramDateTime += 1e3 * r5.duration), r5 = {};
      }, comment() {
      }, custom() {
        e9.segment ? (r5.custom = r5.custom || {}, r5.custom[e9.customType] = e9.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[e9.customType] = e9.data);
      } })[e9.type].call(t3);
    });
  }
  requiredCompatibilityversion(e8, t3) {
    (e8 < t3 || !e8) && this.trigger("warn", { message: `manifest must be at least version ${t3}` });
  }
  warnOnMissingAttributes_(e8, t3, i2) {
    const s3 = [];
    i2.forEach(function(e9) {
      t3.hasOwnProperty(e9) || s3.push(e9);
    }), s3.length && this.trigger("warn", { message: `${e8} lacks required attribute(s): ${s3.join(", ")}` });
  }
  push(e8) {
    this.lineStream.push(e8);
  }
  end() {
    this.lineStream.push("\n"), this.manifest.dateRanges.length && null === this.lastProgramDateTime && this.trigger("warn", { message: "A playlist with EXT-X-DATERANGE tag must contain atleast one EXT-X-PROGRAM-DATE-TIME tag" }), this.lastProgramDateTime = null, this.trigger("end");
  }
  addParser(e8) {
    this.parseStream.addParser(e8);
  }
  addTagMapper(e8) {
    this.parseStream.addTagMapper(e8);
  }
};
var et;
var tt;
var it = { mp4: /^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v|stpp.ttml.im1t)/, webm: /^(vp0?[89]|av0?1|opus|vorbis)/, ogg: /^(vp0?[89]|theora|flac|opus|vorbis)/, video: /^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/, audio: /^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3|speex|aac)/, text: /^(stpp.ttml.im1t)/, muxerVideo: /^(avc0?1)/, muxerAudio: /^(mp4a)/, muxerText: /a^/ };
var st = ["video", "audio", "text"];
var nt = ["Video", "Audio", "Text"];
var rt = function(e8) {
  return e8 ? e8.replace(/avc1\.(\d+)\.(\d+)/i, function(e9, t3, i2) {
    return "avc1." + ("00" + Number(t3).toString(16)).slice(-2) + "00" + ("00" + Number(i2).toString(16)).slice(-2);
  }) : e8;
};
var at = function(e8) {
  void 0 === e8 && (e8 = "");
  var t3 = e8.split(","), i2 = [];
  return t3.forEach(function(e9) {
    var t4;
    e9 = e9.trim(), st.forEach(function(s3) {
      var n5 = it[s3].exec(e9.toLowerCase());
      if (n5 && !(n5.length <= 1)) {
        t4 = s3;
        var r5 = e9.substring(0, n5[1].length), a5 = e9.replace(r5, "");
        i2.push({ type: r5, details: a5, mediaType: s3 });
      }
    }), t4 || i2.push({ type: e9, details: "", mediaType: "unknown" });
  }), i2;
};
var ot = function(e8, t3) {
  if (!e8.mediaGroups.AUDIO || !t3) return null;
  var i2 = e8.mediaGroups.AUDIO[t3];
  if (!i2) return null;
  for (var s3 in i2) {
    var n5 = i2[s3];
    if (n5.default && n5.playlists) return at(n5.playlists[0].attributes.CODECS);
  }
  return null;
};
var lt = function(e8) {
  return void 0 === e8 && (e8 = ""), it.audio.test(e8.trim().toLowerCase());
};
var ut = function(e8) {
  return void 0 === e8 && (e8 = ""), it.text.test(e8.trim().toLowerCase());
};
var ht = function(e8) {
  if (e8 && "string" == typeof e8) {
    var t3 = e8.toLowerCase().split(",").map(function(e9) {
      return rt(e9.trim());
    }), i2 = "video";
    1 === t3.length && lt(t3[0]) ? i2 = "audio" : 1 === t3.length && ut(t3[0]) && (i2 = "application");
    var s3 = "mp4";
    return t3.every(function(e9) {
      return it.mp4.test(e9);
    }) ? s3 = "mp4" : t3.every(function(e9) {
      return it.webm.test(e9);
    }) ? s3 = "webm" : t3.every(function(e9) {
      return it.ogg.test(e9);
    }) && (s3 = "ogg"), i2 + "/" + s3 + ';codecs="' + e8 + '"';
  }
};
var dt = function(e8, t3) {
  return void 0 === e8 && (e8 = ""), void 0 === t3 && (t3 = false), _.MediaSource && _.MediaSource.isTypeSupported && _.MediaSource.isTypeSupported(ht(e8)) || t3 && _.ManagedMediaSource && _.ManagedMediaSource.isTypeSupported && _.ManagedMediaSource.isTypeSupported(ht(e8)) || false;
};
var ct = function(e8) {
  return void 0 === e8 && (e8 = ""), e8.toLowerCase().split(",").every(function(e9) {
    e9 = e9.trim();
    for (var t3 = 0; t3 < nt.length; t3++) {
      var i2 = nt[t3];
      if (it["muxer" + i2].test(e9)) return true;
    }
    return false;
  });
};
var pt = "mp4a.40.2";
var mt = "avc1.4d400d";
var gt = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i;
var ft = /^application\/dash\+xml/i;
var yt = function(e8) {
  return gt.test(e8) ? "hls" : ft.test(e8) ? "dash" : "application/vnd.videojs.vhs+json" === e8 ? "vhs-json" : null;
};
var _t = function(e8) {
  return e8.toString(2).length;
};
var bt = function(e8) {
  return Math.ceil(_t(e8) / 8);
};
var vt = function(e8) {
  return "function" === ArrayBuffer.isView ? ArrayBuffer.isView(e8) : e8 && e8.buffer instanceof ArrayBuffer;
};
var Tt = function(e8) {
  return vt(e8);
};
var St = function(e8) {
  return e8 instanceof Uint8Array ? e8 : (Array.isArray(e8) || Tt(e8) || e8 instanceof ArrayBuffer || (e8 = "number" != typeof e8 || "number" == typeof e8 && e8 != e8 ? 0 : [e8]), new Uint8Array(e8 && e8.buffer || e8, e8 && e8.byteOffset || 0, e8 && e8.byteLength || 0));
};
var Et = _.BigInt || Number;
var wt = [Et("0x1"), Et("0x100"), Et("0x10000"), Et("0x1000000"), Et("0x100000000"), Et("0x10000000000"), Et("0x1000000000000"), Et("0x100000000000000"), Et("0x10000000000000000")];
et = new Uint16Array([65484]), 255 === (tt = new Uint8Array(et.buffer, et.byteOffset, et.byteLength))[0] || tt[0];
var Ct;
var kt;
var It = function(e8, t3) {
  var i2 = void 0 === t3 ? {} : t3, s3 = i2.signed, n5 = void 0 !== s3 && s3, r5 = i2.le, a5 = void 0 !== r5 && r5;
  e8 = St(e8);
  var o5 = a5 ? "reduce" : "reduceRight", l2 = (e8[o5] ? e8[o5] : Array.prototype[o5]).call(e8, function(t4, i3, s4) {
    var n6 = a5 ? s4 : Math.abs(s4 + 1 - e8.length);
    return t4 + Et(i3) * wt[n6];
  }, Et(0));
  if (n5) {
    var u3 = wt[e8.length] / Et(2) - Et(1);
    (l2 = Et(l2)) > u3 && (l2 -= u3, l2 -= u3, l2 -= Et(2));
  }
  return Number(l2);
};
var xt = function(e8, t3) {
  var i2 = {}.le, s3 = void 0 !== i2 && i2;
  ("bigint" != typeof e8 && "number" != typeof e8 || "number" == typeof e8 && e8 != e8) && (e8 = 0), e8 = Et(e8);
  for (var n5 = bt(e8), r5 = new Uint8Array(new ArrayBuffer(n5)), a5 = 0; a5 < n5; a5++) {
    var o5 = s3 ? a5 : Math.abs(a5 + 1 - r5.length);
    r5[o5] = Number(e8 / wt[a5] & Et(255)), e8 < 0 && (r5[o5] = Math.abs(~r5[o5]), r5[o5] -= 0 === a5 ? 1 : 2);
  }
  return r5;
};
var At = function(e8, t3) {
  if ("string" != typeof e8 && e8 && "function" == typeof e8.toString && (e8 = e8.toString()), "string" != typeof e8) return new Uint8Array();
  t3 || (e8 = unescape(encodeURIComponent(e8)));
  for (var i2 = new Uint8Array(e8.length), s3 = 0; s3 < e8.length; s3++) i2[s3] = e8.charCodeAt(s3);
  return i2;
};
var Dt = function() {
  for (var e8 = arguments.length, t3 = new Array(e8), i2 = 0; i2 < e8; i2++) t3[i2] = arguments[i2];
  if (t3 = t3.filter(function(e9) {
    return e9 && (e9.byteLength || e9.length) && "string" != typeof e9;
  }), t3.length <= 1) return St(t3[0]);
  var s3 = t3.reduce(function(e9, t4, i3) {
    return e9 + (t4.byteLength || t4.length);
  }, 0), n5 = new Uint8Array(s3), r5 = 0;
  return t3.forEach(function(e9) {
    e9 = St(e9), n5.set(e9, r5), r5 += e9.byteLength;
  }), n5;
};
var Pt = function(e8, t3, i2) {
  var s3 = void 0 === i2 ? {} : i2, n5 = s3.offset, r5 = void 0 === n5 ? 0 : n5, a5 = s3.mask, o5 = void 0 === a5 ? [] : a5;
  e8 = St(e8);
  var l2 = (t3 = St(t3)).every ? t3.every : Array.prototype.every;
  return t3.length && e8.length - r5 >= t3.length && l2.call(t3, function(t4, i3) {
    return t4 === (o5[i3] ? o5[i3] & e8[r5 + i3] : e8[r5 + i3]);
  });
};
var Lt = function(e8, t3, i2) {
  t3.forEach(function(t4) {
    for (var s3 in e8.mediaGroups[t4]) for (var n5 in e8.mediaGroups[t4][s3]) {
      var r5 = e8.mediaGroups[t4][s3][n5];
      i2(r5, t4, s3, n5);
    }
  });
};
var Ot = {};
var Nt = {};
var Rt = {};
function Mt() {
  if (Ct) return Rt;
  function e8(e9, t4, i3) {
    if (void 0 === i3 && (i3 = Array.prototype), e9 && "function" == typeof i3.find) return i3.find.call(e9, t4);
    for (var s4 = 0; s4 < e9.length; s4++) if (Object.prototype.hasOwnProperty.call(e9, s4)) {
      var n6 = e9[s4];
      if (t4.call(void 0, n6, s4, e9)) return n6;
    }
  }
  function t3(e9, t4) {
    return void 0 === t4 && (t4 = Object), t4 && "function" == typeof t4.freeze ? t4.freeze(e9) : e9;
  }
  function i2(e9, t4) {
    if (null === e9 || "object" != typeof e9) throw new TypeError("target is not an object");
    for (var i3 in t4) Object.prototype.hasOwnProperty.call(t4, i3) && (e9[i3] = t4[i3]);
    return e9;
  }
  Ct = 1;
  var s3 = t3({ HTML: "text/html", isHTML: function(e9) {
    return e9 === s3.HTML;
  }, XML_APPLICATION: "application/xml", XML_TEXT: "text/xml", XML_XHTML_APPLICATION: "application/xhtml+xml", XML_SVG_IMAGE: "image/svg+xml" }), n5 = t3({ HTML: "http://www.w3.org/1999/xhtml", isHTML: function(e9) {
    return e9 === n5.HTML;
  }, SVG: "http://www.w3.org/2000/svg", XML: "http://www.w3.org/XML/1998/namespace", XMLNS: "http://www.w3.org/2000/xmlns/" });
  return Rt.assign = i2, Rt.find = e8, Rt.freeze = t3, Rt.MIME_TYPE = s3, Rt.NAMESPACE = n5, Rt;
}
function Ut() {
  if (kt) return Nt;
  kt = 1;
  var e8 = Mt(), t3 = e8.find, i2 = e8.NAMESPACE;
  function s3(e9) {
    return "" !== e9;
  }
  function n5(e9) {
    return e9 ? e9.split(/[\t\n\f\r ]+/).filter(s3) : [];
  }
  function r5(e9, t4) {
    return e9.hasOwnProperty(t4) || (e9[t4] = true), e9;
  }
  function a5(e9) {
    if (!e9) return [];
    var t4 = n5(e9);
    return Object.keys(t4.reduce(r5, {}));
  }
  function o5(e9) {
    return function(t4) {
      return e9 && -1 !== e9.indexOf(t4);
    };
  }
  function l2(e9, t4) {
    for (var i3 in e9) Object.prototype.hasOwnProperty.call(e9, i3) && (t4[i3] = e9[i3]);
  }
  function u3(e9, t4) {
    var i3 = e9.prototype;
    if (!(i3 instanceof t4)) {
      let s4 = function() {
      };
      s4.prototype = t4.prototype, l2(i3, s4 = new s4()), e9.prototype = i3 = s4;
    }
    i3.constructor != e9 && ("function" != typeof e9 && console.error("unknown Class:" + e9), i3.constructor = e9);
  }
  var h2 = {}, d3 = h2.ELEMENT_NODE = 1, c3 = h2.ATTRIBUTE_NODE = 2, p2 = h2.TEXT_NODE = 3, m5 = h2.CDATA_SECTION_NODE = 4, g5 = h2.ENTITY_REFERENCE_NODE = 5, f3 = h2.ENTITY_NODE = 6, y4 = h2.PROCESSING_INSTRUCTION_NODE = 7, _2 = h2.COMMENT_NODE = 8, b2 = h2.DOCUMENT_NODE = 9, v4 = h2.DOCUMENT_TYPE_NODE = 10, T2 = h2.DOCUMENT_FRAGMENT_NODE = 11, S4 = h2.NOTATION_NODE = 12, E3 = {}, w3 = {};
  E3.INDEX_SIZE_ERR = (w3[1] = "Index size error", 1), E3.DOMSTRING_SIZE_ERR = (w3[2] = "DOMString size error", 2);
  var C3 = E3.HIERARCHY_REQUEST_ERR = (w3[3] = "Hierarchy request error", 3);
  E3.WRONG_DOCUMENT_ERR = (w3[4] = "Wrong document", 4), E3.INVALID_CHARACTER_ERR = (w3[5] = "Invalid character", 5), E3.NO_DATA_ALLOWED_ERR = (w3[6] = "No data allowed", 6), E3.NO_MODIFICATION_ALLOWED_ERR = (w3[7] = "No modification allowed", 7);
  var k2 = E3.NOT_FOUND_ERR = (w3[8] = "Not found", 8);
  E3.NOT_SUPPORTED_ERR = (w3[9] = "Not supported", 9);
  var I2 = E3.INUSE_ATTRIBUTE_ERR = (w3[10] = "Attribute in use", 10);
  function x2(e9, t4) {
    if (t4 instanceof Error) var i3 = t4;
    else i3 = this, Error.call(this, w3[e9]), this.message = w3[e9], Error.captureStackTrace && Error.captureStackTrace(this, x2);
    return i3.code = e9, t4 && (this.message = this.message + ": " + t4), i3;
  }
  function A2() {
  }
  function D2(e9, t4) {
    this._node = e9, this._refresh = t4, P7(this);
  }
  function P7(e9) {
    var t4 = e9._node._inc || e9._node.ownerDocument._inc;
    if (e9._inc !== t4) {
      var i3 = e9._refresh(e9._node);
      if (Se2(e9, "length", i3.length), !e9.$$length || i3.length < e9.$$length) for (var s4 = i3.length; s4 in e9; s4++) Object.prototype.hasOwnProperty.call(e9, s4) && delete e9[s4];
      l2(i3, e9), e9._inc = t4;
    }
  }
  function L3() {
  }
  function O2(e9, t4) {
    for (var i3 = e9.length; i3--; ) if (e9[i3] === t4) return i3;
  }
  function N3(e9, t4, i3, s4) {
    if (s4 ? t4[O2(t4, s4)] = i3 : t4[t4.length++] = i3, e9) {
      i3.ownerElement = e9;
      var n6 = e9.ownerDocument;
      n6 && (s4 && $2(n6, e9, s4), j4(n6, e9, i3));
    }
  }
  function R2(e9, t4, i3) {
    var s4 = O2(t4, i3);
    if (!(s4 >= 0)) throw new x2(k2, new Error(e9.tagName + "@" + i3));
    for (var n6 = t4.length - 1; s4 < n6; ) t4[s4] = t4[++s4];
    if (t4.length = n6, e9) {
      var r6 = e9.ownerDocument;
      r6 && ($2(r6, e9, i3), i3.ownerElement = null);
    }
  }
  function M3() {
  }
  function U2() {
  }
  function B2(e9) {
    return ("<" == e9 ? "&lt;" : ">" == e9 && "&gt;") || "&" == e9 && "&amp;" || '"' == e9 && "&quot;" || "&#" + e9.charCodeAt() + ";";
  }
  function F2(e9, t4) {
    if (t4(e9)) return true;
    if (e9 = e9.firstChild) do {
      if (F2(e9, t4)) return true;
    } while (e9 = e9.nextSibling);
  }
  function q3() {
    this.ownerDocument = this;
  }
  function j4(e9, t4, s4) {
    e9 && e9._inc++, s4.namespaceURI === i2.XMLNS && (t4._nsMap[s4.prefix ? s4.localName : ""] = s4.value);
  }
  function $2(e9, t4, s4, n6) {
    e9 && e9._inc++, s4.namespaceURI === i2.XMLNS && delete t4._nsMap[s4.prefix ? s4.localName : ""];
  }
  function H2(e9, t4, i3) {
    if (e9 && e9._inc) {
      e9._inc++;
      var s4 = t4.childNodes;
      if (i3) s4[s4.length++] = i3;
      else {
        for (var n6 = t4.firstChild, r6 = 0; n6; ) s4[r6++] = n6, n6 = n6.nextSibling;
        s4.length = r6, delete s4[s4.length];
      }
    }
  }
  function V3(e9, t4) {
    var i3 = t4.previousSibling, s4 = t4.nextSibling;
    return i3 ? i3.nextSibling = s4 : e9.firstChild = s4, s4 ? s4.previousSibling = i3 : e9.lastChild = i3, t4.parentNode = null, t4.previousSibling = null, t4.nextSibling = null, H2(e9.ownerDocument, e9), t4;
  }
  function z2(e9) {
    return e9 && (e9.nodeType === U2.DOCUMENT_NODE || e9.nodeType === U2.DOCUMENT_FRAGMENT_NODE || e9.nodeType === U2.ELEMENT_NODE);
  }
  function W2(e9) {
    return e9 && (X2(e9) || K2(e9) || G2(e9) || e9.nodeType === U2.DOCUMENT_FRAGMENT_NODE || e9.nodeType === U2.COMMENT_NODE || e9.nodeType === U2.PROCESSING_INSTRUCTION_NODE);
  }
  function G2(e9) {
    return e9 && e9.nodeType === U2.DOCUMENT_TYPE_NODE;
  }
  function X2(e9) {
    return e9 && e9.nodeType === U2.ELEMENT_NODE;
  }
  function K2(e9) {
    return e9 && e9.nodeType === U2.TEXT_NODE;
  }
  function Y2(e9, i3) {
    var s4 = e9.childNodes || [];
    if (t3(s4, X2) || G2(i3)) return false;
    var n6 = t3(s4, G2);
    return !(i3 && n6 && s4.indexOf(n6) > s4.indexOf(i3));
  }
  function Q2(e9, i3) {
    var s4 = e9.childNodes || [];
    function n6(e10) {
      return X2(e10) && e10 !== i3;
    }
    if (t3(s4, n6)) return false;
    var r6 = t3(s4, G2);
    return !(i3 && r6 && s4.indexOf(r6) > s4.indexOf(i3));
  }
  function J2(e9, t4, i3) {
    if (!z2(e9)) throw new x2(C3, "Unexpected parent node type " + e9.nodeType);
    if (i3 && i3.parentNode !== e9) throw new x2(k2, "child not in parent");
    if (!W2(t4) || G2(t4) && e9.nodeType !== U2.DOCUMENT_NODE) throw new x2(C3, "Unexpected node type " + t4.nodeType + " for parent node type " + e9.nodeType);
  }
  function Z2(e9, i3, s4) {
    var n6 = e9.childNodes || [], r6 = i3.childNodes || [];
    if (i3.nodeType === U2.DOCUMENT_FRAGMENT_NODE) {
      var a6 = r6.filter(X2);
      if (a6.length > 1 || t3(r6, K2)) throw new x2(C3, "More than one element or text in fragment");
      if (1 === a6.length && !Y2(e9, s4)) throw new x2(C3, "Element in fragment can not be inserted before doctype");
    }
    if (X2(i3) && !Y2(e9, s4)) throw new x2(C3, "Only one element can be added and only after doctype");
    if (G2(i3)) {
      if (t3(n6, G2)) throw new x2(C3, "Only one doctype is allowed");
      var o6 = t3(n6, X2);
      if (s4 && n6.indexOf(o6) < n6.indexOf(s4)) throw new x2(C3, "Doctype can only be inserted before an element");
      if (!s4 && o6) throw new x2(C3, "Doctype can not be appended since element is present");
    }
  }
  function ee2(e9, i3, s4) {
    var n6 = e9.childNodes || [], r6 = i3.childNodes || [];
    if (i3.nodeType === U2.DOCUMENT_FRAGMENT_NODE) {
      var a6 = r6.filter(X2);
      if (a6.length > 1 || t3(r6, K2)) throw new x2(C3, "More than one element or text in fragment");
      if (1 === a6.length && !Q2(e9, s4)) throw new x2(C3, "Element in fragment can not be inserted before doctype");
    }
    if (X2(i3) && !Q2(e9, s4)) throw new x2(C3, "Only one element can be added and only after doctype");
    if (G2(i3)) {
      let l3 = function(e10) {
        return G2(e10) && e10 !== s4;
      };
      if (t3(n6, l3)) throw new x2(C3, "Only one doctype is allowed");
      var o6 = t3(n6, X2);
      if (s4 && n6.indexOf(o6) < n6.indexOf(s4)) throw new x2(C3, "Doctype can only be inserted before an element");
    }
  }
  function te2(e9, t4, i3, s4) {
    J2(e9, t4, i3), e9.nodeType === U2.DOCUMENT_NODE && (s4 || Z2)(e9, t4, i3);
    var n6 = t4.parentNode;
    if (n6 && n6.removeChild(t4), t4.nodeType === T2) {
      var r6 = t4.firstChild;
      if (null == r6) return t4;
      var a6 = t4.lastChild;
    } else r6 = a6 = t4;
    var o6 = i3 ? i3.previousSibling : e9.lastChild;
    r6.previousSibling = o6, a6.nextSibling = i3, o6 ? o6.nextSibling = r6 : e9.firstChild = r6, null == i3 ? e9.lastChild = a6 : i3.previousSibling = a6;
    do {
      r6.parentNode = e9;
    } while (r6 !== a6 && (r6 = r6.nextSibling));
    return H2(e9.ownerDocument || e9, e9), t4.nodeType == T2 && (t4.firstChild = t4.lastChild = null), t4;
  }
  function ie2(e9, t4) {
    return t4.parentNode && t4.parentNode.removeChild(t4), t4.parentNode = e9, t4.previousSibling = e9.lastChild, t4.nextSibling = null, t4.previousSibling ? t4.previousSibling.nextSibling = t4 : e9.firstChild = t4, e9.lastChild = t4, H2(e9.ownerDocument, e9, t4), t4;
  }
  function se2() {
    this._nsMap = {};
  }
  function ne2() {
  }
  function re2() {
  }
  function ae2() {
  }
  function oe2() {
  }
  function le2() {
  }
  function ue2() {
  }
  function he2() {
  }
  function de2() {
  }
  function ce2() {
  }
  function pe2() {
  }
  function me2() {
  }
  function ge2() {
  }
  function fe2(e9, t4) {
    var i3 = [], s4 = 9 == this.nodeType && this.documentElement || this, n6 = s4.prefix, r6 = s4.namespaceURI;
    if (r6 && null == n6 && null == (n6 = s4.lookupPrefix(r6))) var a6 = [{ namespace: r6, prefix: null }];
    return be2(this, i3, e9, t4, a6), i3.join("");
  }
  function ye2(e9, t4, s4) {
    var n6 = e9.prefix || "", r6 = e9.namespaceURI;
    if (!r6) return false;
    if ("xml" === n6 && r6 === i2.XML || r6 === i2.XMLNS) return false;
    for (var a6 = s4.length; a6--; ) {
      var o6 = s4[a6];
      if (o6.prefix === n6) return o6.namespace !== r6;
    }
    return true;
  }
  function _e2(e9, t4, i3) {
    e9.push(" ", t4, '="', i3.replace(/[<>&"\t\n\r]/g, B2), '"');
  }
  function be2(e9, t4, s4, n6, r6) {
    if (r6 || (r6 = []), n6) {
      if (!(e9 = n6(e9))) return;
      if ("string" == typeof e9) return void t4.push(e9);
    }
    switch (e9.nodeType) {
      case d3:
        var a6 = e9.attributes, o6 = a6.length, l3 = e9.firstChild, u4 = e9.tagName, h3 = u4;
        if (!(s4 = i2.isHTML(e9.namespaceURI) || s4) && !e9.prefix && e9.namespaceURI) {
          for (var f4, S5 = 0; S5 < a6.length; S5++) if ("xmlns" === a6.item(S5).name) {
            f4 = a6.item(S5).value;
            break;
          }
          if (!f4) for (var E4 = r6.length - 1; E4 >= 0; E4--) {
            if ("" === (w4 = r6[E4]).prefix && w4.namespace === e9.namespaceURI) {
              f4 = w4.namespace;
              break;
            }
          }
          if (f4 !== e9.namespaceURI) for (E4 = r6.length - 1; E4 >= 0; E4--) {
            var w4;
            if ((w4 = r6[E4]).namespace === e9.namespaceURI) {
              w4.prefix && (h3 = w4.prefix + ":" + u4);
              break;
            }
          }
        }
        t4.push("<", h3);
        for (var C4 = 0; C4 < o6; C4++) {
          "xmlns" == (k3 = a6.item(C4)).prefix ? r6.push({ prefix: k3.localName, namespace: k3.value }) : "xmlns" == k3.nodeName && r6.push({ prefix: "", namespace: k3.value });
        }
        for (C4 = 0; C4 < o6; C4++) {
          var k3, I3, x3;
          if (ye2(k3 = a6.item(C4), s4, r6)) _e2(t4, (I3 = k3.prefix || "") ? "xmlns:" + I3 : "xmlns", x3 = k3.namespaceURI), r6.push({ prefix: I3, namespace: x3 });
          be2(k3, t4, s4, n6, r6);
        }
        if (u4 === h3 && ye2(e9, s4, r6)) _e2(t4, (I3 = e9.prefix || "") ? "xmlns:" + I3 : "xmlns", x3 = e9.namespaceURI), r6.push({ prefix: I3, namespace: x3 });
        if (l3 || s4 && !/^(?:meta|link|img|br|hr|input)$/i.test(u4)) {
          if (t4.push(">"), s4 && /^script$/i.test(u4)) for (; l3; ) l3.data ? t4.push(l3.data) : be2(l3, t4, s4, n6, r6.slice()), l3 = l3.nextSibling;
          else for (; l3; ) be2(l3, t4, s4, n6, r6.slice()), l3 = l3.nextSibling;
          t4.push("</", h3, ">");
        } else t4.push("/>");
        return;
      case b2:
      case T2:
        for (l3 = e9.firstChild; l3; ) be2(l3, t4, s4, n6, r6.slice()), l3 = l3.nextSibling;
        return;
      case c3:
        return _e2(t4, e9.name, e9.value);
      case p2:
        return t4.push(e9.data.replace(/[<&>]/g, B2));
      case m5:
        return t4.push("<![CDATA[", e9.data, "]]>");
      case _2:
        return t4.push("<!--", e9.data, "-->");
      case v4:
        var A3 = e9.publicId, D3 = e9.systemId;
        if (t4.push("<!DOCTYPE ", e9.name), A3) t4.push(" PUBLIC ", A3), D3 && "." != D3 && t4.push(" ", D3), t4.push(">");
        else if (D3 && "." != D3) t4.push(" SYSTEM ", D3, ">");
        else {
          var P8 = e9.internalSubset;
          P8 && t4.push(" [", P8, "]"), t4.push(">");
        }
        return;
      case y4:
        return t4.push("<?", e9.target, " ", e9.data, "?>");
      case g5:
        return t4.push("&", e9.nodeName, ";");
      default:
        t4.push("??", e9.nodeName);
    }
  }
  function ve2(e9, t4, i3) {
    var s4;
    switch (t4.nodeType) {
      case d3:
        (s4 = t4.cloneNode(false)).ownerDocument = e9;
      case T2:
        break;
      case c3:
        i3 = true;
    }
    if (s4 || (s4 = t4.cloneNode(false)), s4.ownerDocument = e9, s4.parentNode = null, i3) for (var n6 = t4.firstChild; n6; ) s4.appendChild(ve2(e9, n6, i3)), n6 = n6.nextSibling;
    return s4;
  }
  function Te2(e9, t4, i3) {
    var s4 = new t4.constructor();
    for (var n6 in t4) if (Object.prototype.hasOwnProperty.call(t4, n6)) {
      var r6 = t4[n6];
      "object" != typeof r6 && r6 != s4[n6] && (s4[n6] = r6);
    }
    switch (t4.childNodes && (s4.childNodes = new A2()), s4.ownerDocument = e9, s4.nodeType) {
      case d3:
        var a6 = t4.attributes, o6 = s4.attributes = new L3(), l3 = a6.length;
        o6._ownerElement = s4;
        for (var u4 = 0; u4 < l3; u4++) s4.setAttributeNode(Te2(e9, a6.item(u4), true));
        break;
      case c3:
        i3 = true;
    }
    if (i3) for (var h3 = t4.firstChild; h3; ) s4.appendChild(Te2(e9, h3, i3)), h3 = h3.nextSibling;
    return s4;
  }
  function Se2(e9, t4, i3) {
    e9[t4] = i3;
  }
  E3.INVALID_STATE_ERR = (w3[11] = "Invalid state", 11), E3.SYNTAX_ERR = (w3[12] = "Syntax error", 12), E3.INVALID_MODIFICATION_ERR = (w3[13] = "Invalid modification", 13), E3.NAMESPACE_ERR = (w3[14] = "Invalid namespace", 14), E3.INVALID_ACCESS_ERR = (w3[15] = "Invalid access", 15), x2.prototype = Error.prototype, l2(E3, x2), A2.prototype = { length: 0, item: function(e9) {
    return e9 >= 0 && e9 < this.length ? this[e9] : null;
  }, toString: function(e9, t4) {
    for (var i3 = [], s4 = 0; s4 < this.length; s4++) be2(this[s4], i3, e9, t4);
    return i3.join("");
  }, filter: function(e9) {
    return Array.prototype.filter.call(this, e9);
  }, indexOf: function(e9) {
    return Array.prototype.indexOf.call(this, e9);
  } }, D2.prototype.item = function(e9) {
    return P7(this), this[e9] || null;
  }, u3(D2, A2), L3.prototype = { length: 0, item: A2.prototype.item, getNamedItem: function(e9) {
    for (var t4 = this.length; t4--; ) {
      var i3 = this[t4];
      if (i3.nodeName == e9) return i3;
    }
  }, setNamedItem: function(e9) {
    var t4 = e9.ownerElement;
    if (t4 && t4 != this._ownerElement) throw new x2(I2);
    var i3 = this.getNamedItem(e9.nodeName);
    return N3(this._ownerElement, this, e9, i3), i3;
  }, setNamedItemNS: function(e9) {
    var t4, i3 = e9.ownerElement;
    if (i3 && i3 != this._ownerElement) throw new x2(I2);
    return t4 = this.getNamedItemNS(e9.namespaceURI, e9.localName), N3(this._ownerElement, this, e9, t4), t4;
  }, removeNamedItem: function(e9) {
    var t4 = this.getNamedItem(e9);
    return R2(this._ownerElement, this, t4), t4;
  }, removeNamedItemNS: function(e9, t4) {
    var i3 = this.getNamedItemNS(e9, t4);
    return R2(this._ownerElement, this, i3), i3;
  }, getNamedItemNS: function(e9, t4) {
    for (var i3 = this.length; i3--; ) {
      var s4 = this[i3];
      if (s4.localName == t4 && s4.namespaceURI == e9) return s4;
    }
    return null;
  } }, M3.prototype = { hasFeature: function(e9, t4) {
    return true;
  }, createDocument: function(e9, t4, i3) {
    var s4 = new q3();
    if (s4.implementation = this, s4.childNodes = new A2(), s4.doctype = i3 || null, i3 && s4.appendChild(i3), t4) {
      var n6 = s4.createElementNS(e9, t4);
      s4.appendChild(n6);
    }
    return s4;
  }, createDocumentType: function(e9, t4, i3) {
    var s4 = new ue2();
    return s4.name = e9, s4.nodeName = e9, s4.publicId = t4 || "", s4.systemId = i3 || "", s4;
  } }, U2.prototype = { firstChild: null, lastChild: null, previousSibling: null, nextSibling: null, attributes: null, parentNode: null, childNodes: null, ownerDocument: null, nodeValue: null, namespaceURI: null, prefix: null, localName: null, insertBefore: function(e9, t4) {
    return te2(this, e9, t4);
  }, replaceChild: function(e9, t4) {
    te2(this, e9, t4, ee2), t4 && this.removeChild(t4);
  }, removeChild: function(e9) {
    return V3(this, e9);
  }, appendChild: function(e9) {
    return this.insertBefore(e9, null);
  }, hasChildNodes: function() {
    return null != this.firstChild;
  }, cloneNode: function(e9) {
    return Te2(this.ownerDocument || this, this, e9);
  }, normalize: function() {
    for (var e9 = this.firstChild; e9; ) {
      var t4 = e9.nextSibling;
      t4 && t4.nodeType == p2 && e9.nodeType == p2 ? (this.removeChild(t4), e9.appendData(t4.data)) : (e9.normalize(), e9 = t4);
    }
  }, isSupported: function(e9, t4) {
    return this.ownerDocument.implementation.hasFeature(e9, t4);
  }, hasAttributes: function() {
    return this.attributes.length > 0;
  }, lookupPrefix: function(e9) {
    for (var t4 = this; t4; ) {
      var i3 = t4._nsMap;
      if (i3) {
        for (var s4 in i3) if (Object.prototype.hasOwnProperty.call(i3, s4) && i3[s4] === e9) return s4;
      }
      t4 = t4.nodeType == c3 ? t4.ownerDocument : t4.parentNode;
    }
    return null;
  }, lookupNamespaceURI: function(e9) {
    for (var t4 = this; t4; ) {
      var i3 = t4._nsMap;
      if (i3 && Object.prototype.hasOwnProperty.call(i3, e9)) return i3[e9];
      t4 = t4.nodeType == c3 ? t4.ownerDocument : t4.parentNode;
    }
    return null;
  }, isDefaultNamespace: function(e9) {
    return null == this.lookupPrefix(e9);
  } }, l2(h2, U2), l2(h2, U2.prototype), q3.prototype = { nodeName: "#document", nodeType: b2, doctype: null, documentElement: null, _inc: 1, insertBefore: function(e9, t4) {
    if (e9.nodeType == T2) {
      for (var i3 = e9.firstChild; i3; ) {
        var s4 = i3.nextSibling;
        this.insertBefore(i3, t4), i3 = s4;
      }
      return e9;
    }
    return te2(this, e9, t4), e9.ownerDocument = this, null === this.documentElement && e9.nodeType === d3 && (this.documentElement = e9), e9;
  }, removeChild: function(e9) {
    return this.documentElement == e9 && (this.documentElement = null), V3(this, e9);
  }, replaceChild: function(e9, t4) {
    te2(this, e9, t4, ee2), e9.ownerDocument = this, t4 && this.removeChild(t4), X2(e9) && (this.documentElement = e9);
  }, importNode: function(e9, t4) {
    return ve2(this, e9, t4);
  }, getElementById: function(e9) {
    var t4 = null;
    return F2(this.documentElement, function(i3) {
      if (i3.nodeType == d3 && i3.getAttribute("id") == e9) return t4 = i3, true;
    }), t4;
  }, getElementsByClassName: function(e9) {
    var t4 = a5(e9);
    return new D2(this, function(i3) {
      var s4 = [];
      return t4.length > 0 && F2(i3.documentElement, function(n6) {
        if (n6 !== i3 && n6.nodeType === d3) {
          var r6 = n6.getAttribute("class");
          if (r6) {
            var l3 = e9 === r6;
            if (!l3) {
              var u4 = a5(r6);
              l3 = t4.every(o5(u4));
            }
            l3 && s4.push(n6);
          }
        }
      }), s4;
    });
  }, createElement: function(e9) {
    var t4 = new se2();
    return t4.ownerDocument = this, t4.nodeName = e9, t4.tagName = e9, t4.localName = e9, t4.childNodes = new A2(), (t4.attributes = new L3())._ownerElement = t4, t4;
  }, createDocumentFragment: function() {
    var e9 = new pe2();
    return e9.ownerDocument = this, e9.childNodes = new A2(), e9;
  }, createTextNode: function(e9) {
    var t4 = new ae2();
    return t4.ownerDocument = this, t4.appendData(e9), t4;
  }, createComment: function(e9) {
    var t4 = new oe2();
    return t4.ownerDocument = this, t4.appendData(e9), t4;
  }, createCDATASection: function(e9) {
    var t4 = new le2();
    return t4.ownerDocument = this, t4.appendData(e9), t4;
  }, createProcessingInstruction: function(e9, t4) {
    var i3 = new me2();
    return i3.ownerDocument = this, i3.tagName = i3.nodeName = i3.target = e9, i3.nodeValue = i3.data = t4, i3;
  }, createAttribute: function(e9) {
    var t4 = new ne2();
    return t4.ownerDocument = this, t4.name = e9, t4.nodeName = e9, t4.localName = e9, t4.specified = true, t4;
  }, createEntityReference: function(e9) {
    var t4 = new ce2();
    return t4.ownerDocument = this, t4.nodeName = e9, t4;
  }, createElementNS: function(e9, t4) {
    var i3 = new se2(), s4 = t4.split(":"), n6 = i3.attributes = new L3();
    return i3.childNodes = new A2(), i3.ownerDocument = this, i3.nodeName = t4, i3.tagName = t4, i3.namespaceURI = e9, 2 == s4.length ? (i3.prefix = s4[0], i3.localName = s4[1]) : i3.localName = t4, n6._ownerElement = i3, i3;
  }, createAttributeNS: function(e9, t4) {
    var i3 = new ne2(), s4 = t4.split(":");
    return i3.ownerDocument = this, i3.nodeName = t4, i3.name = t4, i3.namespaceURI = e9, i3.specified = true, 2 == s4.length ? (i3.prefix = s4[0], i3.localName = s4[1]) : i3.localName = t4, i3;
  } }, u3(q3, U2), se2.prototype = { nodeType: d3, hasAttribute: function(e9) {
    return null != this.getAttributeNode(e9);
  }, getAttribute: function(e9) {
    var t4 = this.getAttributeNode(e9);
    return t4 && t4.value || "";
  }, getAttributeNode: function(e9) {
    return this.attributes.getNamedItem(e9);
  }, setAttribute: function(e9, t4) {
    var i3 = this.ownerDocument.createAttribute(e9);
    i3.value = i3.nodeValue = "" + t4, this.setAttributeNode(i3);
  }, removeAttribute: function(e9) {
    var t4 = this.getAttributeNode(e9);
    t4 && this.removeAttributeNode(t4);
  }, appendChild: function(e9) {
    return e9.nodeType === T2 ? this.insertBefore(e9, null) : ie2(this, e9);
  }, setAttributeNode: function(e9) {
    return this.attributes.setNamedItem(e9);
  }, setAttributeNodeNS: function(e9) {
    return this.attributes.setNamedItemNS(e9);
  }, removeAttributeNode: function(e9) {
    return this.attributes.removeNamedItem(e9.nodeName);
  }, removeAttributeNS: function(e9, t4) {
    var i3 = this.getAttributeNodeNS(e9, t4);
    i3 && this.removeAttributeNode(i3);
  }, hasAttributeNS: function(e9, t4) {
    return null != this.getAttributeNodeNS(e9, t4);
  }, getAttributeNS: function(e9, t4) {
    var i3 = this.getAttributeNodeNS(e9, t4);
    return i3 && i3.value || "";
  }, setAttributeNS: function(e9, t4, i3) {
    var s4 = this.ownerDocument.createAttributeNS(e9, t4);
    s4.value = s4.nodeValue = "" + i3, this.setAttributeNode(s4);
  }, getAttributeNodeNS: function(e9, t4) {
    return this.attributes.getNamedItemNS(e9, t4);
  }, getElementsByTagName: function(e9) {
    return new D2(this, function(t4) {
      var i3 = [];
      return F2(t4, function(s4) {
        s4 === t4 || s4.nodeType != d3 || "*" !== e9 && s4.tagName != e9 || i3.push(s4);
      }), i3;
    });
  }, getElementsByTagNameNS: function(e9, t4) {
    return new D2(this, function(i3) {
      var s4 = [];
      return F2(i3, function(n6) {
        n6 === i3 || n6.nodeType !== d3 || "*" !== e9 && n6.namespaceURI !== e9 || "*" !== t4 && n6.localName != t4 || s4.push(n6);
      }), s4;
    });
  } }, q3.prototype.getElementsByTagName = se2.prototype.getElementsByTagName, q3.prototype.getElementsByTagNameNS = se2.prototype.getElementsByTagNameNS, u3(se2, U2), ne2.prototype.nodeType = c3, u3(ne2, U2), re2.prototype = { data: "", substringData: function(e9, t4) {
    return this.data.substring(e9, e9 + t4);
  }, appendData: function(e9) {
    e9 = this.data + e9, this.nodeValue = this.data = e9, this.length = e9.length;
  }, insertData: function(e9, t4) {
    this.replaceData(e9, 0, t4);
  }, appendChild: function(e9) {
    throw new Error(w3[C3]);
  }, deleteData: function(e9, t4) {
    this.replaceData(e9, t4, "");
  }, replaceData: function(e9, t4, i3) {
    i3 = this.data.substring(0, e9) + i3 + this.data.substring(e9 + t4), this.nodeValue = this.data = i3, this.length = i3.length;
  } }, u3(re2, U2), ae2.prototype = { nodeName: "#text", nodeType: p2, splitText: function(e9) {
    var t4 = this.data, i3 = t4.substring(e9);
    t4 = t4.substring(0, e9), this.data = this.nodeValue = t4, this.length = t4.length;
    var s4 = this.ownerDocument.createTextNode(i3);
    return this.parentNode && this.parentNode.insertBefore(s4, this.nextSibling), s4;
  } }, u3(ae2, re2), oe2.prototype = { nodeName: "#comment", nodeType: _2 }, u3(oe2, re2), le2.prototype = { nodeName: "#cdata-section", nodeType: m5 }, u3(le2, re2), ue2.prototype.nodeType = v4, u3(ue2, U2), he2.prototype.nodeType = S4, u3(he2, U2), de2.prototype.nodeType = f3, u3(de2, U2), ce2.prototype.nodeType = g5, u3(ce2, U2), pe2.prototype.nodeName = "#document-fragment", pe2.prototype.nodeType = T2, u3(pe2, U2), me2.prototype.nodeType = y4, u3(me2, U2), ge2.prototype.serializeToString = function(e9, t4, i3) {
    return fe2.call(e9, t4, i3);
  }, U2.prototype.toString = fe2;
  try {
    if (Object.defineProperty) {
      let we2 = function(e9) {
        switch (e9.nodeType) {
          case d3:
          case T2:
            var t4 = [];
            for (e9 = e9.firstChild; e9; ) 7 !== e9.nodeType && 8 !== e9.nodeType && t4.push(we2(e9)), e9 = e9.nextSibling;
            return t4.join("");
          default:
            return e9.nodeValue;
        }
      };
      Object.defineProperty(D2.prototype, "length", { get: function() {
        return P7(this), this.$$length;
      } }), Object.defineProperty(U2.prototype, "textContent", { get: function() {
        return we2(this);
      }, set: function(e9) {
        switch (this.nodeType) {
          case d3:
          case T2:
            for (; this.firstChild; ) this.removeChild(this.firstChild);
            (e9 || String(e9)) && this.appendChild(this.ownerDocument.createTextNode(e9));
            break;
          default:
            this.data = e9, this.value = e9, this.nodeValue = e9;
        }
      } }), Se2 = function(e9, t4, i3) {
        e9["$$" + t4] = i3;
      };
    }
  } catch (Ee2) {
  }
  return Nt.DocumentType = ue2, Nt.DOMException = x2, Nt.DOMImplementation = M3, Nt.Element = se2, Nt.Node = U2, Nt.NodeList = A2, Nt.XMLSerializer = ge2, Nt;
}
var Bt;
var Ft = {};
var qt = {};
function jt() {
  return Bt || (Bt = 1, e8 = qt, t3 = Mt().freeze, e8.XML_ENTITIES = t3({ amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' }), e8.HTML_ENTITIES = t3({ Aacute: "Á", aacute: "á", Abreve: "Ă", abreve: "ă", ac: "∾", acd: "∿", acE: "∾̳", Acirc: "Â", acirc: "â", acute: "´", Acy: "А", acy: "а", AElig: "Æ", aelig: "æ", af: "⁡", Afr: "𝔄", afr: "𝔞", Agrave: "À", agrave: "à", alefsym: "ℵ", aleph: "ℵ", Alpha: "Α", alpha: "α", Amacr: "Ā", amacr: "ā", amalg: "⨿", AMP: "&", amp: "&", And: "⩓", and: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", Aogon: "Ą", aogon: "ą", Aopf: "𝔸", aopf: "𝕒", ap: "≈", apacir: "⩯", apE: "⩰", ape: "≊", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", Aring: "Å", aring: "å", Ascr: "𝒜", ascr: "𝒶", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", Barwed: "⌆", barwed: "⌅", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", Bcy: "Б", bcy: "б", bdquo: "„", becaus: "∵", Because: "∵", because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", Beta: "Β", beta: "β", beth: "ℶ", between: "≬", Bfr: "𝔅", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bNot: "⫭", bnot: "⌐", Bopf: "𝔹", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxDL: "╗", boxDl: "╖", boxdL: "╕", boxdl: "┐", boxDR: "╔", boxDr: "╓", boxdR: "╒", boxdr: "┌", boxH: "═", boxh: "─", boxHD: "╦", boxHd: "╤", boxhD: "╥", boxhd: "┬", boxHU: "╩", boxHu: "╧", boxhU: "╨", boxhu: "┴", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxUL: "╝", boxUl: "╜", boxuL: "╛", boxul: "┘", boxUR: "╚", boxUr: "╙", boxuR: "╘", boxur: "└", boxV: "║", boxv: "│", boxVH: "╬", boxVh: "╫", boxvH: "╪", boxvh: "┼", boxVL: "╣", boxVl: "╢", boxvL: "╡", boxvl: "┤", boxVR: "╠", boxVr: "╟", boxvR: "╞", boxvr: "├", bprime: "‵", Breve: "˘", breve: "˘", brvbar: "¦", Bscr: "ℬ", bscr: "𝒷", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", Bumpeq: "≎", bumpeq: "≏", Cacute: "Ć", cacute: "ć", Cap: "⋒", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", Ccaron: "Č", ccaron: "č", Ccedil: "Ç", ccedil: "ç", Ccirc: "Ĉ", ccirc: "ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", Cdot: "Ċ", cdot: "ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", CenterDot: "·", centerdot: "·", Cfr: "ℭ", cfr: "𝔠", CHcy: "Ч", chcy: "ч", check: "✓", checkmark: "✓", Chi: "Χ", chi: "χ", cir: "○", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cirE: "⧃", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", Colon: "∷", colon: ":", Colone: "⩴", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", Conint: "∯", conint: "∮", ContourIntegral: "∮", Copf: "ℂ", copf: "𝕔", coprod: "∐", Coproduct: "∐", COPY: "©", copy: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", Cross: "⨯", cross: "✗", Cscr: "𝒞", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", Cup: "⋓", cup: "∪", cupbrcap: "⩈", CupCap: "≍", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", Dagger: "‡", dagger: "†", daleth: "ℸ", Darr: "↡", dArr: "⇓", darr: "↓", dash: "‐", Dashv: "⫤", dashv: "⊣", dbkarow: "⤏", dblac: "˝", Dcaron: "Ď", dcaron: "ď", Dcy: "Д", dcy: "д", DD: "ⅅ", dd: "ⅆ", ddagger: "‡", ddarr: "⇊", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", Delta: "Δ", delta: "δ", demptyv: "⦱", dfisht: "⥿", Dfr: "𝔇", dfr: "𝔡", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", Diamond: "⋄", diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", DJcy: "Ђ", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", Dopf: "𝔻", dopf: "𝕕", Dot: "¨", dot: "˙", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrow: "↓", Downarrow: "⇓", downarrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", Dscr: "𝒟", dscr: "𝒹", DScy: "Ѕ", dscy: "ѕ", dsol: "⧶", Dstrok: "Đ", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", DZcy: "Џ", dzcy: "џ", dzigrarr: "⟿", Eacute: "É", eacute: "é", easter: "⩮", Ecaron: "Ě", ecaron: "ě", ecir: "≖", Ecirc: "Ê", ecirc: "ê", ecolon: "≕", Ecy: "Э", ecy: "э", eDDot: "⩷", Edot: "Ė", eDot: "≑", edot: "ė", ee: "ⅇ", efDot: "≒", Efr: "𝔈", efr: "𝔢", eg: "⪚", Egrave: "È", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", Emacr: "Ē", emacr: "ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp: " ", emsp13: " ", emsp14: " ", ENG: "Ŋ", eng: "ŋ", ensp: " ", Eogon: "Ę", eogon: "ę", Eopf: "𝔼", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", Epsilon: "Ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", Escr: "ℰ", escr: "ℯ", esdot: "≐", Esim: "⩳", esim: "≂", Eta: "Η", eta: "η", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", ExponentialE: "ⅇ", exponentiale: "ⅇ", fallingdotseq: "≒", Fcy: "Ф", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", Ffr: "𝔉", ffr: "𝔣", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", Fopf: "𝔽", fopf: "𝕗", ForAll: "∀", forall: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", Fscr: "ℱ", fscr: "𝒻", gacute: "ǵ", Gamma: "Γ", gamma: "γ", Gammad: "Ϝ", gammad: "ϝ", gap: "⪆", Gbreve: "Ğ", gbreve: "ğ", Gcedil: "Ģ", Gcirc: "Ĝ", gcirc: "ĝ", Gcy: "Г", gcy: "г", Gdot: "Ġ", gdot: "ġ", gE: "≧", ge: "≥", gEl: "⪌", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", Gfr: "𝔊", gfr: "𝔤", Gg: "⋙", gg: "≫", ggg: "⋙", gimel: "ℷ", GJcy: "Ѓ", gjcy: "ѓ", gl: "≷", gla: "⪥", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gnE: "≩", gne: "⪈", gneq: "⪈", gneqq: "≩", gnsim: "⋧", Gopf: "𝔾", gopf: "𝕘", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", Gt: "≫", GT: ">", gt: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", HARDcy: "Ъ", hardcy: "ъ", hArr: "⇔", harr: "↔", harrcir: "⥈", harrw: "↭", Hat: "^", hbar: "ℏ", Hcirc: "Ĥ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", Hfr: "ℌ", hfr: "𝔥", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", Hopf: "ℍ", hopf: "𝕙", horbar: "―", HorizontalLine: "─", Hscr: "ℋ", hscr: "𝒽", hslash: "ℏ", Hstrok: "Ħ", hstrok: "ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", Iacute: "Í", iacute: "í", ic: "⁣", Icirc: "Î", icirc: "î", Icy: "И", icy: "и", Idot: "İ", IEcy: "Е", iecy: "е", iexcl: "¡", iff: "⇔", Ifr: "ℑ", ifr: "𝔦", Igrave: "Ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", IJlig: "Ĳ", ijlig: "ĳ", Im: "ℑ", Imacr: "Ī", imacr: "ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", Implies: "⇒", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", Int: "∬", int: "∫", intcal: "⊺", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", IOcy: "Ё", iocy: "ё", Iogon: "Į", iogon: "į", Iopf: "𝕀", iopf: "𝕚", Iota: "Ι", iota: "ι", iprod: "⨼", iquest: "¿", Iscr: "ℐ", iscr: "𝒾", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", Itilde: "Ĩ", itilde: "ĩ", Iukcy: "І", iukcy: "і", Iuml: "Ï", iuml: "ï", Jcirc: "Ĵ", jcirc: "ĵ", Jcy: "Й", jcy: "й", Jfr: "𝔍", jfr: "𝔧", jmath: "ȷ", Jopf: "𝕁", jopf: "𝕛", Jscr: "𝒥", jscr: "𝒿", Jsercy: "Ј", jsercy: "ј", Jukcy: "Є", jukcy: "є", Kappa: "Κ", kappa: "κ", kappav: "ϰ", Kcedil: "Ķ", kcedil: "ķ", Kcy: "К", kcy: "к", Kfr: "𝔎", kfr: "𝔨", kgreen: "ĸ", KHcy: "Х", khcy: "х", KJcy: "Ќ", kjcy: "ќ", Kopf: "𝕂", kopf: "𝕜", Kscr: "𝒦", kscr: "𝓀", lAarr: "⇚", Lacute: "Ĺ", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", Lambda: "Λ", lambda: "λ", Lang: "⟪", lang: "⟨", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", Larr: "↞", lArr: "⇐", larr: "←", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", lAtail: "⤛", latail: "⤙", late: "⪭", lates: "⪭︀", lBarr: "⤎", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", Lcaron: "Ľ", lcaron: "ľ", Lcedil: "Ļ", lcedil: "ļ", lceil: "⌈", lcub: "{", Lcy: "Л", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", lE: "≦", le: "≤", LeftAngleBracket: "⟨", LeftArrow: "←", Leftarrow: "⇐", leftarrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", LeftRightArrow: "↔", Leftrightarrow: "⇔", leftrightarrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", lEg: "⪋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", Lfr: "𝔏", lfr: "𝔩", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", LJcy: "Љ", ljcy: "љ", Ll: "⋘", ll: "≪", llarr: "⇇", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", Lmidot: "Ŀ", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnap: "⪉", lnapprox: "⪉", lnE: "≨", lne: "⪇", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", LongLeftArrow: "⟵", Longleftarrow: "⟸", longleftarrow: "⟵", LongLeftRightArrow: "⟷", Longleftrightarrow: "⟺", longleftrightarrow: "⟷", longmapsto: "⟼", LongRightArrow: "⟶", Longrightarrow: "⟹", longrightarrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", Lopf: "𝕃", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", Lscr: "ℒ", lscr: "𝓁", Lsh: "↰", lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", Lstrok: "Ł", lstrok: "ł", Lt: "≪", LT: "<", lt: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", Map: "⤅", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", Mcy: "М", mcy: "м", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", mfr: "𝔪", mho: "℧", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", Mopf: "𝕄", mopf: "𝕞", mp: "∓", Mscr: "ℳ", mscr: "𝓂", mstpos: "∾", Mu: "Μ", mu: "μ", multimap: "⊸", mumap: "⊸", nabla: "∇", Nacute: "Ń", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", Ncaron: "Ň", ncaron: "ň", Ncedil: "Ņ", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", Ncy: "Н", ncy: "н", ndash: "–", ne: "≠", nearhk: "⤤", neArr: "⇗", nearr: "↗", nearrow: "↗", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: "\n", nexist: "∄", nexists: "∄", Nfr: "𝔑", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", nGt: "≫⃒", ngt: "≯", ngtr: "≯", nGtv: "≫̸", nhArr: "⇎", nharr: "↮", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", NJcy: "Њ", njcy: "њ", nlArr: "⇍", nlarr: "↚", nldr: "‥", nlE: "≦̸", nle: "≰", nLeftarrow: "⇍", nleftarrow: "↚", nLeftrightarrow: "⇎", nleftrightarrow: "↮", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nLt: "≪⃒", nlt: "≮", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", Nopf: "ℕ", nopf: "𝕟", Not: "⫬", not: "¬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrArr: "⇏", nrarr: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nRightarrow: "⇏", nrightarrow: "↛", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", Nscr: "𝒩", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", Ntilde: "Ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", Nu: "Ν", nu: "ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nVDash: "⊯", nVdash: "⊮", nvDash: "⊭", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwArr: "⇖", nwarr: "↖", nwarrow: "↖", nwnear: "⤧", Oacute: "Ó", oacute: "ó", oast: "⊛", ocir: "⊚", Ocirc: "Ô", ocirc: "ô", Ocy: "О", ocy: "о", odash: "⊝", Odblac: "Ő", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", OElig: "Œ", oelig: "œ", ofcir: "⦿", Ofr: "𝔒", ofr: "𝔬", ogon: "˛", Ograve: "Ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", Omacr: "Ō", omacr: "ō", Omega: "Ω", omega: "ω", Omicron: "Ο", omicron: "ο", omid: "⦶", ominus: "⊖", Oopf: "𝕆", oopf: "𝕠", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", Or: "⩔", or: "∨", orarr: "↻", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", Oscr: "𝒪", oscr: "ℴ", Oslash: "Ø", oslash: "ø", osol: "⊘", Otilde: "Õ", otilde: "õ", Otimes: "⨷", otimes: "⊗", otimesas: "⨶", Ouml: "Ö", ouml: "ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", par: "∥", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", Pcy: "П", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", Pfr: "𝔓", pfr: "𝔭", Phi: "Φ", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", Pi: "Π", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", Popf: "ℙ", popf: "𝕡", pound: "£", Pr: "⪻", pr: "≺", prap: "⪷", prcue: "≼", prE: "⪳", pre: "⪯", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", Prime: "″", prime: "′", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportion: "∷", Proportional: "∝", propto: "∝", prsim: "≾", prurel: "⊰", Pscr: "𝒫", pscr: "𝓅", Psi: "Ψ", psi: "ψ", puncsp: " ", Qfr: "𝔔", qfr: "𝔮", qint: "⨌", Qopf: "ℚ", qopf: "𝕢", qprime: "⁗", Qscr: "𝒬", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", QUOT: '"', quot: '"', rAarr: "⇛", race: "∽̱", Racute: "Ŕ", racute: "ŕ", radic: "√", raemptyv: "⦳", Rang: "⟫", rang: "⟩", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", Rarr: "↠", rArr: "⇒", rarr: "→", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", Rarrtl: "⤖", rarrtl: "↣", rarrw: "↝", rAtail: "⤜", ratail: "⤚", ratio: "∶", rationals: "ℚ", RBarr: "⤐", rBarr: "⤏", rbarr: "⤍", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", Rcaron: "Ř", rcaron: "ř", Rcedil: "Ŗ", rcedil: "ŗ", rceil: "⌉", rcub: "}", Rcy: "Р", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", Re: "ℜ", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", REG: "®", reg: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", Rfr: "ℜ", rfr: "𝔯", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", Rho: "Ρ", rho: "ρ", rhov: "ϱ", RightAngleBracket: "⟩", RightArrow: "→", Rightarrow: "⇒", rightarrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", Ropf: "ℝ", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", Rscr: "ℛ", rscr: "𝓇", Rsh: "↱", rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", Sacute: "Ś", sacute: "ś", sbquo: "‚", Sc: "⪼", sc: "≻", scap: "⪸", Scaron: "Š", scaron: "š", sccue: "≽", scE: "⪴", sce: "⪰", Scedil: "Ş", scedil: "ş", Scirc: "Ŝ", scirc: "ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", Scy: "С", scy: "с", sdot: "⋅", sdotb: "⊡", sdote: "⩦", searhk: "⤥", seArr: "⇘", searr: "↘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", Sfr: "𝔖", sfr: "𝔰", sfrown: "⌢", sharp: "♯", SHCHcy: "Щ", shchcy: "щ", SHcy: "Ш", shcy: "ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", Sigma: "Σ", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", SOFTcy: "Ь", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", Sopf: "𝕊", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", Square: "□", square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squf: "▪", srarr: "→", Sscr: "𝒮", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", Star: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", Sub: "⋐", sub: "⊂", subdot: "⪽", subE: "⫅", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", Subset: "⋐", subset: "⊂", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", Sum: "∑", sum: "∑", sung: "♪", Sup: "⋑", sup: "⊃", sup1: "¹", sup2: "²", sup3: "³", supdot: "⪾", supdsub: "⫘", supE: "⫆", supe: "⊇", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", Supset: "⋑", supset: "⊃", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swArr: "⇙", swarr: "↙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", Tau: "Τ", tau: "τ", tbrk: "⎴", Tcaron: "Ť", tcaron: "ť", Tcedil: "Ţ", tcedil: "ţ", Tcy: "Т", tcy: "т", tdot: "⃛", telrec: "⌕", Tfr: "𝔗", tfr: "𝔱", there4: "∴", Therefore: "∴", therefore: "∴", Theta: "Θ", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", thinsp: " ", ThinSpace: " ", thkap: "≈", thksim: "∼", THORN: "Þ", thorn: "þ", Tilde: "∼", tilde: "˜", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", Topf: "𝕋", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", TRADE: "™", trade: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", Tscr: "𝒯", tscr: "𝓉", TScy: "Ц", tscy: "ц", TSHcy: "Ћ", tshcy: "ћ", Tstrok: "Ŧ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", Uacute: "Ú", uacute: "ú", Uarr: "↟", uArr: "⇑", uarr: "↑", Uarrocir: "⥉", Ubrcy: "Ў", ubrcy: "ў", Ubreve: "Ŭ", ubreve: "ŭ", Ucirc: "Û", ucirc: "û", Ucy: "У", ucy: "у", udarr: "⇅", Udblac: "Ű", udblac: "ű", udhar: "⥮", ufisht: "⥾", Ufr: "𝔘", ufr: "𝔲", Ugrave: "Ù", ugrave: "ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", Umacr: "Ū", umacr: "ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", uogon: "ų", Uopf: "𝕌", uopf: "𝕦", UpArrow: "↑", Uparrow: "⇑", uparrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", UpDownArrow: "↕", Updownarrow: "⇕", updownarrow: "↕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", Upsi: "ϒ", upsi: "υ", upsih: "ϒ", Upsilon: "Υ", upsilon: "υ", UpTee: "⊥", UpTeeArrow: "↥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", Uring: "Ů", uring: "ů", urtri: "◹", Uscr: "𝒰", uscr: "𝓊", utdot: "⋰", Utilde: "Ũ", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", Uuml: "Ü", uuml: "ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", vArr: "⇕", varr: "↕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", Vbar: "⫫", vBar: "⫨", vBarv: "⫩", Vcy: "В", vcy: "в", VDash: "⊫", Vdash: "⊩", vDash: "⊨", vdash: "⊢", Vdashl: "⫦", Vee: "⋁", vee: "∨", veebar: "⊻", veeeq: "≚", vellip: "⋮", Verbar: "‖", verbar: "|", Vert: "‖", vert: "|", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", Vopf: "𝕍", vopf: "𝕧", vprop: "∝", vrtri: "⊳", Vscr: "𝒱", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", Vvdash: "⊪", vzigzag: "⦚", Wcirc: "Ŵ", wcirc: "ŵ", wedbar: "⩟", Wedge: "⋀", wedge: "∧", wedgeq: "≙", weierp: "℘", Wfr: "𝔚", wfr: "𝔴", Wopf: "𝕎", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", Wscr: "𝒲", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", Xfr: "𝔛", xfr: "𝔵", xhArr: "⟺", xharr: "⟷", Xi: "Ξ", xi: "ξ", xlArr: "⟸", xlarr: "⟵", xmap: "⟼", xnis: "⋻", xodot: "⨀", Xopf: "𝕏", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrArr: "⟹", xrarr: "⟶", Xscr: "𝒳", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", Yacute: "Ý", yacute: "ý", YAcy: "Я", yacy: "я", Ycirc: "Ŷ", ycirc: "ŷ", Ycy: "Ы", ycy: "ы", yen: "¥", Yfr: "𝔜", yfr: "𝔶", YIcy: "Ї", yicy: "ї", Yopf: "𝕐", yopf: "𝕪", Yscr: "𝒴", yscr: "𝓎", YUcy: "Ю", yucy: "ю", Yuml: "Ÿ", yuml: "ÿ", Zacute: "Ź", zacute: "ź", Zcaron: "Ž", zcaron: "ž", Zcy: "З", zcy: "з", Zdot: "Ż", zdot: "ż", zeetrf: "ℨ", ZeroWidthSpace: "​", Zeta: "Ζ", zeta: "ζ", Zfr: "ℨ", zfr: "𝔷", ZHcy: "Ж", zhcy: "ж", zigrarr: "⇝", Zopf: "ℤ", zopf: "𝕫", Zscr: "𝒵", zscr: "𝓏", zwj: "‍", zwnj: "‌" }), e8.entityMap = e8.HTML_ENTITIES), qt;
  var e8, t3;
}
var $t;
var Ht;
var Vt;
var zt = {};
function Wt() {
  if ($t) return zt;
  $t = 1;
  var e8 = Mt().NAMESPACE, t3 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, i2 = new RegExp("[\\-\\.0-9" + t3.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), s3 = new RegExp("^" + t3.source + i2.source + "*(?::" + t3.source + i2.source + "*)?$"), n5 = 0, r5 = 1, a5 = 2, o5 = 3, l2 = 4, u3 = 5, h2 = 6, d3 = 7;
  function c3(e9, t4) {
    this.message = e9, this.locator = t4, Error.captureStackTrace && Error.captureStackTrace(this, c3);
  }
  function p2() {
  }
  function m5(t4, i3, s4, n6, r6) {
    function a6(e9) {
      if (e9 > 65535) {
        var t5 = 55296 + ((e9 -= 65536) >> 10), i4 = 56320 + (1023 & e9);
        return String.fromCharCode(t5, i4);
      }
      return String.fromCharCode(e9);
    }
    function o6(e9) {
      var t5 = e9.slice(1, -1);
      return Object.hasOwnProperty.call(s4, t5) ? s4[t5] : "#" === t5.charAt(0) ? a6(parseInt(t5.substr(1).replace("x", "0x"))) : (r6.error("entity not found:" + e9), e9);
    }
    function l3(e9) {
      if (e9 > C3) {
        var i4 = t4.substring(C3, e9).replace(/&#?\w+;/g, o6);
        m6 && u4(C3), n6.characters(i4, 0, e9 - C3), C3 = e9;
      }
    }
    function u4(e9, i4) {
      for (; e9 >= d4 && (i4 = p3.exec(t4)); ) h3 = i4.index, d4 = h3 + i4[0].length, m6.lineNumber++;
      m6.columnNumber = e9 - h3 + 1;
    }
    for (var h3 = 0, d4 = 0, p3 = /.*(?:\r\n?|\n)|.*$/g, m6 = n6.locator, v5 = [{ currentNSMap: i3 }], w4 = {}, C3 = 0; ; ) {
      try {
        var k2 = t4.indexOf("<", C3);
        if (k2 < 0) {
          if (!t4.substr(C3).match(/^\s*$/)) {
            var I2 = n6.doc, x2 = I2.createTextNode(t4.substr(C3));
            I2.appendChild(x2), n6.currentElement = x2;
          }
          return;
        }
        switch (k2 > C3 && l3(k2), t4.charAt(k2 + 1)) {
          case "/":
            var A2 = t4.indexOf(">", k2 + 3), D2 = t4.substring(k2 + 2, A2).replace(/[ \t\n\r]+$/g, ""), P7 = v5.pop();
            A2 < 0 ? (D2 = t4.substring(k2 + 2).replace(/[\s<].*/, ""), r6.error("end tag name: " + D2 + " is not complete:" + P7.tagName), A2 = k2 + 1 + D2.length) : D2.match(/\s</) && (D2 = D2.replace(/[\s<].*/, ""), r6.error("end tag name: " + D2 + " maybe not complete"), A2 = k2 + 1 + D2.length);
            var L3 = P7.localNSMap, O2 = P7.tagName == D2;
            if (O2 || P7.tagName && P7.tagName.toLowerCase() == D2.toLowerCase()) {
              if (n6.endElement(P7.uri, P7.localName, D2), L3) for (var N3 in L3) Object.prototype.hasOwnProperty.call(L3, N3) && n6.endPrefixMapping(N3);
              O2 || r6.fatalError("end tag name: " + D2 + " is not match the current start tagName:" + P7.tagName);
            } else v5.push(P7);
            A2++;
            break;
          case "?":
            m6 && u4(k2), A2 = S4(t4, k2, n6);
            break;
          case "!":
            m6 && u4(k2), A2 = T2(t4, k2, n6, r6);
            break;
          default:
            m6 && u4(k2);
            var R2 = new E3(), M3 = v5[v5.length - 1].currentNSMap, U2 = (A2 = f3(t4, k2, R2, M3, o6, r6), R2.length);
            if (!R2.closed && b2(t4, A2, R2.tagName, w4) && (R2.closed = true, s4.nbsp || r6.warning("unclosed xml attribute")), m6 && U2) {
              for (var B2 = g5(m6, {}), F2 = 0; F2 < U2; F2++) {
                var q3 = R2[F2];
                u4(q3.offset), q3.locator = g5(m6, {});
              }
              n6.locator = B2, y4(R2, n6, M3) && v5.push(R2), n6.locator = m6;
            } else y4(R2, n6, M3) && v5.push(R2);
            e8.isHTML(R2.uri) && !R2.closed ? A2 = _2(t4, A2, R2.tagName, o6, n6) : A2++;
        }
      } catch (j4) {
        if (j4 instanceof c3) throw j4;
        r6.error("element parse error: " + j4), A2 = -1;
      }
      A2 > C3 ? C3 = A2 : l3(Math.max(k2, C3) + 1);
    }
  }
  function g5(e9, t4) {
    return t4.lineNumber = e9.lineNumber, t4.columnNumber = e9.columnNumber, t4;
  }
  function f3(t4, i3, s4, c4, p3, m6) {
    function g6(e9, t5, i4) {
      s4.attributeNames.hasOwnProperty(e9) && m6.fatalError("Attribute " + e9 + " redefined"), s4.addValue(e9, t5.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, p3), i4);
    }
    for (var f4, y5 = ++i3, _3 = n5; ; ) {
      var b3 = t4.charAt(y5);
      switch (b3) {
        case "=":
          if (_3 === r5) f4 = t4.slice(i3, y5), _3 = o5;
          else {
            if (_3 !== a5) throw new Error("attribute equal must after attrName");
            _3 = o5;
          }
          break;
        case "'":
        case '"':
          if (_3 === o5 || _3 === r5) {
            if (_3 === r5 && (m6.warning('attribute value must after "="'), f4 = t4.slice(i3, y5)), i3 = y5 + 1, !((y5 = t4.indexOf(b3, i3)) > 0)) throw new Error("attribute value no end '" + b3 + "' match");
            g6(f4, v5 = t4.slice(i3, y5), i3 - 1), _3 = u3;
          } else {
            if (_3 != l2) throw new Error('attribute value must after "="');
            g6(f4, v5 = t4.slice(i3, y5), i3), m6.warning('attribute "' + f4 + '" missed start quot(' + b3 + ")!!"), i3 = y5 + 1, _3 = u3;
          }
          break;
        case "/":
          switch (_3) {
            case n5:
              s4.setTagName(t4.slice(i3, y5));
            case u3:
            case h2:
            case d3:
              _3 = d3, s4.closed = true;
            case l2:
            case r5:
              break;
            case a5:
              s4.closed = true;
              break;
            default:
              throw new Error("attribute invalid close char('/')");
          }
          break;
        case "":
          return m6.error("unexpected end of input"), _3 == n5 && s4.setTagName(t4.slice(i3, y5)), y5;
        case ">":
          switch (_3) {
            case n5:
              s4.setTagName(t4.slice(i3, y5));
            case u3:
            case h2:
            case d3:
              break;
            case l2:
            case r5:
              "/" === (v5 = t4.slice(i3, y5)).slice(-1) && (s4.closed = true, v5 = v5.slice(0, -1));
            case a5:
              _3 === a5 && (v5 = f4), _3 == l2 ? (m6.warning('attribute "' + v5 + '" missed quot(")!'), g6(f4, v5, i3)) : (e8.isHTML(c4[""]) && v5.match(/^(?:disabled|checked|selected)$/i) || m6.warning('attribute "' + v5 + '" missed value!! "' + v5 + '" instead!!'), g6(v5, v5, i3));
              break;
            case o5:
              throw new Error("attribute value missed!!");
          }
          return y5;
        case "":
          b3 = " ";
        default:
          if (b3 <= " ") switch (_3) {
            case n5:
              s4.setTagName(t4.slice(i3, y5)), _3 = h2;
              break;
            case r5:
              f4 = t4.slice(i3, y5), _3 = a5;
              break;
            case l2:
              var v5 = t4.slice(i3, y5);
              m6.warning('attribute "' + v5 + '" missed quot(")!!'), g6(f4, v5, i3);
            case u3:
              _3 = h2;
          }
          else switch (_3) {
            case a5:
              s4.tagName, e8.isHTML(c4[""]) && f4.match(/^(?:disabled|checked|selected)$/i) || m6.warning('attribute "' + f4 + '" missed value!! "' + f4 + '" instead2!!'), g6(f4, f4, i3), i3 = y5, _3 = r5;
              break;
            case u3:
              m6.warning('attribute space is required"' + f4 + '"!!');
            case h2:
              _3 = r5, i3 = y5;
              break;
            case o5:
              _3 = l2, i3 = y5;
              break;
            case d3:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
      }
      y5++;
    }
  }
  function y4(t4, i3, s4) {
    for (var n6 = t4.tagName, r6 = null, a6 = t4.length; a6--; ) {
      var o6 = t4[a6], l3 = o6.qName, u4 = o6.value;
      if ((p3 = l3.indexOf(":")) > 0) var h3 = o6.prefix = l3.slice(0, p3), d4 = l3.slice(p3 + 1), c4 = "xmlns" === h3 && d4;
      else d4 = l3, h3 = null, c4 = "xmlns" === l3 && "";
      o6.localName = d4, false !== c4 && (null == r6 && (r6 = {}, v4(s4, s4 = {})), s4[c4] = r6[c4] = u4, o6.uri = e8.XMLNS, i3.startPrefixMapping(c4, u4));
    }
    for (a6 = t4.length; a6--; ) {
      (h3 = (o6 = t4[a6]).prefix) && ("xml" === h3 && (o6.uri = e8.XML), "xmlns" !== h3 && (o6.uri = s4[h3 || ""]));
    }
    var p3;
    (p3 = n6.indexOf(":")) > 0 ? (h3 = t4.prefix = n6.slice(0, p3), d4 = t4.localName = n6.slice(p3 + 1)) : (h3 = null, d4 = t4.localName = n6);
    var m6 = t4.uri = s4[h3 || ""];
    if (i3.startElement(m6, d4, n6, t4), !t4.closed) return t4.currentNSMap = s4, t4.localNSMap = r6, true;
    if (i3.endElement(m6, d4, n6), r6) for (h3 in r6) Object.prototype.hasOwnProperty.call(r6, h3) && i3.endPrefixMapping(h3);
  }
  function _2(e9, t4, i3, s4, n6) {
    if (/^(?:script|textarea)$/i.test(i3)) {
      var r6 = e9.indexOf("</" + i3 + ">", t4), a6 = e9.substring(t4 + 1, r6);
      if (/[&<]/.test(a6)) return /^script$/i.test(i3) ? (n6.characters(a6, 0, a6.length), r6) : (a6 = a6.replace(/&#?\w+;/g, s4), n6.characters(a6, 0, a6.length), r6);
    }
    return t4 + 1;
  }
  function b2(e9, t4, i3, s4) {
    var n6 = s4[i3];
    return null == n6 && ((n6 = e9.lastIndexOf("</" + i3 + ">")) < t4 && (n6 = e9.lastIndexOf("</" + i3)), s4[i3] = n6), n6 < t4;
  }
  function v4(e9, t4) {
    for (var i3 in e9) Object.prototype.hasOwnProperty.call(e9, i3) && (t4[i3] = e9[i3]);
  }
  function T2(e9, t4, i3, s4) {
    if ("-" === e9.charAt(t4 + 2)) return "-" === e9.charAt(t4 + 3) ? (n6 = e9.indexOf("-->", t4 + 4)) > t4 ? (i3.comment(e9, t4 + 4, n6 - t4 - 4), n6 + 3) : (s4.error("Unclosed comment"), -1) : -1;
    if ("CDATA[" == e9.substr(t4 + 3, 6)) {
      var n6 = e9.indexOf("]]>", t4 + 9);
      return i3.startCDATA(), i3.characters(e9, t4 + 9, n6 - t4 - 9), i3.endCDATA(), n6 + 3;
    }
    var r6 = w3(e9, t4), a6 = r6.length;
    if (a6 > 1 && /!doctype/i.test(r6[0][0])) {
      var o6 = r6[1][0], l3 = false, u4 = false;
      a6 > 3 && (/^public$/i.test(r6[2][0]) ? (l3 = r6[3][0], u4 = a6 > 4 && r6[4][0]) : /^system$/i.test(r6[2][0]) && (u4 = r6[3][0]));
      var h3 = r6[a6 - 1];
      return i3.startDTD(o6, l3, u4), i3.endDTD(), h3.index + h3[0].length;
    }
    return -1;
  }
  function S4(e9, t4, i3) {
    var s4 = e9.indexOf("?>", t4);
    if (s4) {
      var n6 = e9.substring(t4, s4).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
      return n6 ? (n6[0].length, i3.processingInstruction(n6[1], n6[2]), s4 + 2) : -1;
    }
    return -1;
  }
  function E3() {
    this.attributeNames = {};
  }
  function w3(e9, t4) {
    var i3, s4 = [], n6 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (n6.lastIndex = t4, n6.exec(e9); i3 = n6.exec(e9); ) if (s4.push(i3), i3[1]) return s4;
  }
  return c3.prototype = new Error(), c3.prototype.name = c3.name, p2.prototype = { parse: function(e9, t4, i3) {
    var s4 = this.domBuilder;
    s4.startDocument(), v4(t4, t4 = {}), m5(e9, t4, i3, s4, this.errorHandler), s4.endDocument();
  } }, E3.prototype = { setTagName: function(e9) {
    if (!s3.test(e9)) throw new Error("invalid tagName:" + e9);
    this.tagName = e9;
  }, addValue: function(e9, t4, i3) {
    if (!s3.test(e9)) throw new Error("invalid attribute:" + e9);
    this.attributeNames[e9] = this.length, this[this.length++] = { qName: e9, value: t4, offset: i3 };
  }, length: 0, getLocalName: function(e9) {
    return this[e9].localName;
  }, getLocator: function(e9) {
    return this[e9].locator;
  }, getQName: function(e9) {
    return this[e9].qName;
  }, getURI: function(e9) {
    return this[e9].uri;
  }, getValue: function(e9) {
    return this[e9].value;
  } }, zt.XMLReader = p2, zt.ParseError = c3, zt;
}
function Gt() {
  if (Ht) return Ft;
  Ht = 1;
  var e8 = Mt(), t3 = Ut(), i2 = jt(), s3 = Wt(), n5 = t3.DOMImplementation, r5 = e8.NAMESPACE, a5 = s3.ParseError, o5 = s3.XMLReader;
  function l2(e9) {
    return e9.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n");
  }
  function u3(e9) {
    this.options = e9 || { locator: {} };
  }
  function h2(e9, t4, i3) {
    if (!e9) {
      if (t4 instanceof d3) return t4;
      e9 = t4;
    }
    var s4 = {}, n6 = e9 instanceof Function;
    function r6(t5) {
      var r7 = e9[t5];
      !r7 && n6 && (r7 = 2 == e9.length ? function(i4) {
        e9(t5, i4);
      } : e9), s4[t5] = r7 && function(e10) {
        r7("[xmldom " + t5 + "]	" + e10 + p2(i3));
      } || function() {
      };
    }
    return i3 = i3 || {}, r6("warning"), r6("error"), r6("fatalError"), s4;
  }
  function d3() {
    this.cdata = false;
  }
  function c3(e9, t4) {
    t4.lineNumber = e9.lineNumber, t4.columnNumber = e9.columnNumber;
  }
  function p2(e9) {
    if (e9) return "\n@" + (e9.systemId || "") + "#[line:" + e9.lineNumber + ",col:" + e9.columnNumber + "]";
  }
  function m5(e9, t4, i3) {
    return "string" == typeof e9 ? e9.substr(t4, i3) : e9.length >= t4 + i3 || t4 ? new java.lang.String(e9, t4, i3) + "" : e9;
  }
  function g5(e9, t4) {
    e9.currentElement ? e9.currentElement.appendChild(t4) : e9.doc.appendChild(t4);
  }
  return u3.prototype.parseFromString = function(e9, t4) {
    var s4 = this.options, n6 = new o5(), a6 = s4.domBuilder || new d3(), u4 = s4.errorHandler, c4 = s4.locator, p3 = s4.xmlns || {}, m6 = /\/x?html?$/.test(t4), g6 = m6 ? i2.HTML_ENTITIES : i2.XML_ENTITIES;
    c4 && a6.setDocumentLocator(c4), n6.errorHandler = h2(u4, a6, c4), n6.domBuilder = s4.domBuilder || a6, m6 && (p3[""] = r5.HTML), p3.xml = p3.xml || r5.XML;
    var f3 = s4.normalizeLineEndings || l2;
    return e9 && "string" == typeof e9 ? n6.parse(f3(e9), p3, g6) : n6.errorHandler.error("invalid doc source"), a6.doc;
  }, d3.prototype = { startDocument: function() {
    this.doc = new n5().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
  }, startElement: function(e9, t4, i3, s4) {
    var n6 = this.doc, r6 = n6.createElementNS(e9, i3 || t4), a6 = s4.length;
    g5(this, r6), this.currentElement = r6, this.locator && c3(this.locator, r6);
    for (var o6 = 0; o6 < a6; o6++) {
      e9 = s4.getURI(o6);
      var l3 = s4.getValue(o6), u4 = (i3 = s4.getQName(o6), n6.createAttributeNS(e9, i3));
      this.locator && c3(s4.getLocator(o6), u4), u4.value = u4.nodeValue = l3, r6.setAttributeNode(u4);
    }
  }, endElement: function(e9, t4, i3) {
    var s4 = this.currentElement;
    s4.tagName, this.currentElement = s4.parentNode;
  }, startPrefixMapping: function(e9, t4) {
  }, endPrefixMapping: function(e9) {
  }, processingInstruction: function(e9, t4) {
    var i3 = this.doc.createProcessingInstruction(e9, t4);
    this.locator && c3(this.locator, i3), g5(this, i3);
  }, ignorableWhitespace: function(e9, t4, i3) {
  }, characters: function(e9, t4, i3) {
    if (e9 = m5.apply(this, arguments)) {
      if (this.cdata) var s4 = this.doc.createCDATASection(e9);
      else s4 = this.doc.createTextNode(e9);
      this.currentElement ? this.currentElement.appendChild(s4) : /^\s*$/.test(e9) && this.doc.appendChild(s4), this.locator && c3(this.locator, s4);
    }
  }, skippedEntity: function(e9) {
  }, endDocument: function() {
    this.doc.normalize();
  }, setDocumentLocator: function(e9) {
    (this.locator = e9) && (e9.lineNumber = 0);
  }, comment: function(e9, t4, i3) {
    e9 = m5.apply(this, arguments);
    var s4 = this.doc.createComment(e9);
    this.locator && c3(this.locator, s4), g5(this, s4);
  }, startCDATA: function() {
    this.cdata = true;
  }, endCDATA: function() {
    this.cdata = false;
  }, startDTD: function(e9, t4, i3) {
    var s4 = this.doc.implementation;
    if (s4 && s4.createDocumentType) {
      var n6 = s4.createDocumentType(e9, t4, i3);
      this.locator && c3(this.locator, n6), g5(this, n6), this.doc.doctype = n6;
    }
  }, warning: function(e9) {
    console.warn("[xmldom warning]	" + e9, p2(this.locator));
  }, error: function(e9) {
    console.error("[xmldom error]	" + e9, p2(this.locator));
  }, fatalError: function(e9) {
    throw new a5(e9, this.locator);
  } }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(e9) {
    d3.prototype[e9] = function() {
      return null;
    };
  }), Ft.__DOMHandler = d3, Ft.normalizeLineEndings = l2, Ft.DOMParser = u3, Ft;
}
function Xt() {
  if (Vt) return Ot;
  Vt = 1;
  var e8 = Ut();
  return Ot.DOMImplementation = e8.DOMImplementation, Ot.XMLSerializer = e8.XMLSerializer, Ot.DOMParser = Gt().DOMParser, Ot;
}
var Kt = Xt();
var Yt = (e8) => !!e8 && "object" == typeof e8;
var Qt = (...e8) => e8.reduce((e9, t3) => ("object" != typeof t3 || Object.keys(t3).forEach((i2) => {
  Array.isArray(e9[i2]) && Array.isArray(t3[i2]) ? e9[i2] = e9[i2].concat(t3[i2]) : Yt(e9[i2]) && Yt(t3[i2]) ? e9[i2] = Qt(e9[i2], t3[i2]) : e9[i2] = t3[i2];
}), e9), {});
var Jt = (e8) => Object.keys(e8).map((t3) => e8[t3]);
var Zt = (e8, t3) => {
  const i2 = [];
  for (let s3 = e8; s3 < t3; s3++) i2.push(s3);
  return i2;
};
var ei = (e8) => e8.reduce((e9, t3) => e9.concat(t3), []);
var ti = (e8) => {
  if (!e8.length) return [];
  const t3 = [];
  for (let i2 = 0; i2 < e8.length; i2++) t3.push(e8[i2]);
  return t3;
};
var ii = (e8, t3) => e8.reduce((e9, i2, s3) => (i2[t3] && e9.push(s3), e9), []);
var si = (e8, t3) => Jt(e8.reduce((e9, i2) => (i2.forEach((i3) => {
  e9[t3(i3)] = i3;
}), e9), {}));
var ni = { INVALID_NUMBER_OF_PERIOD: "INVALID_NUMBER_OF_PERIOD", INVALID_NUMBER_OF_CONTENT_STEERING: "INVALID_NUMBER_OF_CONTENT_STEERING", DASH_EMPTY_MANIFEST: "DASH_EMPTY_MANIFEST", DASH_INVALID_XML: "DASH_INVALID_XML", NO_BASE_URL: "NO_BASE_URL", MISSING_SEGMENT_INFORMATION: "MISSING_SEGMENT_INFORMATION", SEGMENT_TIME_UNSPECIFIED: "SEGMENT_TIME_UNSPECIFIED", UNSUPPORTED_UTC_TIMING_SCHEME: "UNSUPPORTED_UTC_TIMING_SCHEME" };
var ri = ({ baseUrl: e8 = "", source: t3 = "", range: i2 = "", indexRange: s3 = "" }) => {
  const n5 = { uri: t3, resolvedUri: Fe(e8 || "", t3) };
  if (i2 || s3) {
    const e9 = (i2 || s3).split("-");
    let t4, r5 = _.BigInt ? _.BigInt(e9[0]) : parseInt(e9[0], 10), a5 = _.BigInt ? _.BigInt(e9[1]) : parseInt(e9[1], 10);
    r5 < Number.MAX_SAFE_INTEGER && "bigint" == typeof r5 && (r5 = Number(r5)), a5 < Number.MAX_SAFE_INTEGER && "bigint" == typeof a5 && (a5 = Number(a5)), t4 = "bigint" == typeof a5 || "bigint" == typeof r5 ? _.BigInt(a5) - _.BigInt(r5) + _.BigInt(1) : a5 - r5 + 1, "bigint" == typeof t4 && t4 < Number.MAX_SAFE_INTEGER && (t4 = Number(t4)), n5.byterange = { length: t4, offset: r5 };
  }
  return n5;
};
var ai = (e8) => {
  let t3;
  return t3 = "bigint" == typeof e8.offset || "bigint" == typeof e8.length ? _.BigInt(e8.offset) + _.BigInt(e8.length) - _.BigInt(1) : e8.offset + e8.length - 1, `${e8.offset}-${t3}`;
};
var oi = (e8) => (e8 && "number" != typeof e8 && (e8 = parseInt(e8, 10)), isNaN(e8) ? null : e8);
var li = { static(e8) {
  const { duration: t3, timescale: i2 = 1, sourceDuration: s3, periodDuration: n5 } = e8, r5 = oi(e8.endNumber), a5 = t3 / i2;
  return "number" == typeof r5 ? { start: 0, end: r5 } : "number" == typeof n5 ? { start: 0, end: n5 / a5 } : { start: 0, end: s3 / a5 };
}, dynamic(e8) {
  const { NOW: t3, clientOffset: i2, availabilityStartTime: s3, timescale: n5 = 1, duration: r5, periodStart: a5 = 0, minimumUpdatePeriod: o5 = 0, timeShiftBufferDepth: l2 = 1 / 0 } = e8, u3 = oi(e8.endNumber), h2 = (t3 + i2) / 1e3, d3 = s3 + a5, c3 = h2 + o5 - d3, p2 = Math.ceil(c3 * n5 / r5), m5 = Math.floor((h2 - d3 - l2) * n5 / r5), g5 = Math.floor((h2 - d3) * n5 / r5);
  return { start: Math.max(0, m5), end: "number" == typeof u3 ? u3 : Math.min(p2, g5) };
} };
var ui = (e8) => (t3) => {
  const { duration: i2, timescale: s3 = 1, periodStart: n5, startNumber: r5 = 1 } = e8;
  return { number: r5 + t3, duration: i2 / s3, timeline: n5, time: t3 * i2 };
};
var hi = (e8) => {
  const { type: t3, duration: i2, timescale: s3 = 1, periodDuration: n5, sourceDuration: r5 } = e8, { start: a5, end: o5 } = li[t3](e8), l2 = Zt(a5, o5).map(ui(e8));
  if ("static" === t3) {
    const e9 = l2.length - 1, t4 = "number" == typeof n5 ? n5 : r5;
    l2[e9].duration = t4 - i2 / s3 * e9;
  }
  return l2;
};
var di = (e8) => {
  const { baseUrl: t3, initialization: i2 = {}, sourceDuration: s3, indexRange: n5 = "", periodStart: r5, presentationTime: a5, number: o5 = 0, duration: l2 } = e8;
  if (!t3) throw new Error(ni.NO_BASE_URL);
  const u3 = ri({ baseUrl: t3, source: i2.sourceURL, range: i2.range }), h2 = ri({ baseUrl: t3, source: t3, indexRange: n5 });
  if (h2.map = u3, l2) {
    const t4 = hi(e8);
    t4.length && (h2.duration = t4[0].duration, h2.timeline = t4[0].timeline);
  } else s3 && (h2.duration = s3, h2.timeline = r5);
  return h2.presentationTime = a5 || r5, h2.number = o5, [h2];
};
var ci = (e8, t3, i2) => {
  const s3 = e8.sidx.map ? e8.sidx.map : null, n5 = e8.sidx.duration, r5 = e8.timeline || 0, a5 = e8.sidx.byterange, o5 = a5.offset + a5.length, l2 = t3.timescale, u3 = t3.references.filter((e9) => 1 !== e9.referenceType), h2 = [], d3 = e8.endList ? "static" : "dynamic", c3 = e8.sidx.timeline;
  let p2, m5 = c3, g5 = e8.mediaSequence || 0;
  p2 = "bigint" == typeof t3.firstOffset ? _.BigInt(o5) + t3.firstOffset : o5 + t3.firstOffset;
  for (let f3 = 0; f3 < u3.length; f3++) {
    const e9 = t3.references[f3], a6 = e9.referencedSize, o6 = e9.subsegmentDuration;
    let u4;
    u4 = "bigint" == typeof p2 ? p2 + _.BigInt(a6) - _.BigInt(1) : p2 + a6 - 1;
    const y4 = di({ baseUrl: i2, timescale: l2, timeline: r5, periodStart: c3, presentationTime: m5, number: g5, duration: o6, sourceDuration: n5, indexRange: `${p2}-${u4}`, type: d3 })[0];
    s3 && (y4.map = s3), h2.push(y4), p2 += "bigint" == typeof p2 ? _.BigInt(a6) : a6, m5 += o6 / l2, g5++;
  }
  return e8.segments = h2, e8;
};
var pi = ["AUDIO", "SUBTITLES"];
var mi = 1 / 60;
var gi = (e8) => si(e8, ({ timeline: e9 }) => e9).sort((e9, t3) => e9.timeline > t3.timeline ? 1 : -1);
var fi = (e8, t3) => {
  for (let i2 = 0; i2 < e8.length; i2++) if (e8[i2].attributes.NAME === t3) return e8[i2];
  return null;
};
var yi = (e8) => {
  let t3 = [];
  return Lt(e8, pi, (e9, i2, s3, n5) => {
    t3 = t3.concat(e9.playlists || []);
  }), t3;
};
var _i = ({ playlist: e8, mediaSequence: t3 }) => {
  e8.mediaSequence = t3, e8.segments.forEach((t4, i2) => {
    t4.number = e8.mediaSequence + i2;
  });
};
var bi = ({ oldPlaylists: e8, newPlaylists: t3, timelineStarts: i2 }) => {
  t3.forEach((t4) => {
    t4.discontinuitySequence = i2.findIndex(function({ timeline: e9 }) {
      return e9 === t4.timeline;
    });
    const s3 = fi(e8, t4.attributes.NAME);
    if (!s3) return;
    if (t4.sidx) return;
    const n5 = t4.segments[0], r5 = s3.segments.findIndex(function(e9) {
      return Math.abs(e9.presentationTime - n5.presentationTime) < mi;
    });
    if (-1 === r5) return _i({ playlist: t4, mediaSequence: s3.mediaSequence + s3.segments.length }), t4.segments[0].discontinuity = true, t4.discontinuityStarts.unshift(0), void ((!s3.segments.length && t4.timeline > s3.timeline || s3.segments.length && t4.timeline > s3.segments[s3.segments.length - 1].timeline) && t4.discontinuitySequence--);
    s3.segments[r5].discontinuity && !n5.discontinuity && (n5.discontinuity = true, t4.discontinuityStarts.unshift(0), t4.discontinuitySequence--), _i({ playlist: t4, mediaSequence: s3.segments[r5].number });
  });
};
var vi = ({ oldManifest: e8, newManifest: t3 }) => {
  const i2 = e8.playlists.concat(yi(e8)), s3 = t3.playlists.concat(yi(t3));
  return t3.timelineStarts = gi([e8.timelineStarts, t3.timelineStarts]), bi({ oldPlaylists: i2, newPlaylists: s3, timelineStarts: t3.timelineStarts }), t3;
};
var Ti = (e8) => e8 && e8.uri + "-" + ai(e8.byterange);
var Si = (e8) => {
  const t3 = e8.reduce(function(e9, t4) {
    return e9[t4.attributes.baseUrl] || (e9[t4.attributes.baseUrl] = []), e9[t4.attributes.baseUrl].push(t4), e9;
  }, {});
  let i2 = [];
  return Object.values(t3).forEach((e9) => {
    const t4 = Jt(e9.reduce((e10, t5) => {
      const i3 = t5.attributes.id + (t5.attributes.lang || "");
      return e10[i3] ? (t5.segments && (t5.segments[0] && (t5.segments[0].discontinuity = true), e10[i3].segments.push(...t5.segments)), t5.attributes.contentProtection && (e10[i3].attributes.contentProtection = t5.attributes.contentProtection)) : (e10[i3] = t5, e10[i3].attributes.timelineStarts = []), e10[i3].attributes.timelineStarts.push({ start: t5.attributes.periodStart, timeline: t5.attributes.periodStart }), e10;
    }, {}));
    i2 = i2.concat(t4);
  }), i2.map((e9) => (e9.discontinuityStarts = ii(e9.segments || [], "discontinuity"), e9));
};
var Ei = (e8, t3) => {
  const i2 = Ti(e8.sidx), s3 = i2 && t3[i2] && t3[i2].sidx;
  return s3 && ci(e8, s3, e8.sidx.resolvedUri), e8;
};
var wi = (e8, t3 = {}) => {
  if (!Object.keys(t3).length) return e8;
  for (const i2 in e8) e8[i2] = Ei(e8[i2], t3);
  return e8;
};
var Ci = ({ attributes: e8, segments: t3, sidx: i2, mediaSequence: s3, discontinuitySequence: n5, discontinuityStarts: r5 }, a5) => {
  const o5 = { attributes: { NAME: e8.id, BANDWIDTH: e8.bandwidth, CODECS: e8.codecs, "PROGRAM-ID": 1 }, uri: "", endList: "static" === e8.type, timeline: e8.periodStart, resolvedUri: e8.baseUrl || "", targetDuration: e8.duration, discontinuitySequence: n5, discontinuityStarts: r5, timelineStarts: e8.timelineStarts, mediaSequence: s3, segments: t3 };
  return e8.contentProtection && (o5.contentProtection = e8.contentProtection), e8.serviceLocation && (o5.attributes.serviceLocation = e8.serviceLocation), i2 && (o5.sidx = i2), a5 && (o5.attributes.AUDIO = "audio", o5.attributes.SUBTITLES = "subs"), o5;
};
var ki = ({ attributes: e8, segments: t3, mediaSequence: i2, discontinuityStarts: s3, discontinuitySequence: n5 }) => {
  void 0 === t3 && (t3 = [{ uri: e8.baseUrl, timeline: e8.periodStart, resolvedUri: e8.baseUrl || "", duration: e8.sourceDuration, number: 0 }], e8.duration = e8.sourceDuration);
  const r5 = { NAME: e8.id, BANDWIDTH: e8.bandwidth, "PROGRAM-ID": 1 };
  e8.codecs && (r5.CODECS = e8.codecs);
  const a5 = { attributes: r5, uri: "", endList: "static" === e8.type, timeline: e8.periodStart, resolvedUri: e8.baseUrl || "", targetDuration: e8.duration, timelineStarts: e8.timelineStarts, discontinuityStarts: s3, discontinuitySequence: n5, mediaSequence: i2, segments: t3 };
  return e8.serviceLocation && (a5.attributes.serviceLocation = e8.serviceLocation), a5;
};
var Ii = (e8, t3 = {}, i2 = false) => {
  let s3;
  const n5 = e8.reduce((e9, n6) => {
    const r5 = n6.attributes.role && n6.attributes.role.value || "", a5 = n6.attributes.lang || "";
    let o5 = n6.attributes.label || "main";
    if (a5 && !n6.attributes.label) {
      const e10 = r5 ? ` (${r5})` : "";
      o5 = `${n6.attributes.lang}${e10}`;
    }
    e9[o5] || (e9[o5] = { language: a5, autoselect: true, default: "main" === r5, playlists: [], uri: "" });
    const l2 = Ei(Ci(n6, i2), t3);
    return e9[o5].playlists.push(l2), void 0 === s3 && "main" === r5 && (s3 = n6, s3.default = true), e9;
  }, {});
  if (!s3) {
    n5[Object.keys(n5)[0]].default = true;
  }
  return n5;
};
var xi = (e8, t3 = {}) => e8.reduce((e9, i2) => {
  const s3 = i2.attributes.label || i2.attributes.lang || "text", n5 = i2.attributes.lang || "und";
  return e9[s3] || (e9[s3] = { language: n5, default: false, autoselect: false, playlists: [], uri: "" }), e9[s3].playlists.push(Ei(ki(i2), t3)), e9;
}, {});
var Ai = (e8) => e8.reduce((e9, t3) => t3 ? (t3.forEach((t4) => {
  const { channel: i2, language: s3 } = t4;
  e9[s3] = { autoselect: false, default: false, instreamId: i2, language: s3 }, t4.hasOwnProperty("aspectRatio") && (e9[s3].aspectRatio = t4.aspectRatio), t4.hasOwnProperty("easyReader") && (e9[s3].easyReader = t4.easyReader), t4.hasOwnProperty("3D") && (e9[s3]["3D"] = t4["3D"]);
}), e9) : e9, {});
var Di = ({ attributes: e8, segments: t3, sidx: i2, discontinuityStarts: s3 }) => {
  const n5 = { attributes: { NAME: e8.id, AUDIO: "audio", SUBTITLES: "subs", RESOLUTION: { width: e8.width, height: e8.height }, CODECS: e8.codecs, BANDWIDTH: e8.bandwidth, "PROGRAM-ID": 1 }, uri: "", endList: "static" === e8.type, timeline: e8.periodStart, resolvedUri: e8.baseUrl || "", targetDuration: e8.duration, discontinuityStarts: s3, timelineStarts: e8.timelineStarts, segments: t3 };
  return e8.frameRate && (n5.attributes["FRAME-RATE"] = e8.frameRate), e8.contentProtection && (n5.contentProtection = e8.contentProtection), e8.serviceLocation && (n5.attributes.serviceLocation = e8.serviceLocation), i2 && (n5.sidx = i2), n5;
};
var Pi = ({ attributes: e8 }) => "video/mp4" === e8.mimeType || "video/webm" === e8.mimeType || "video" === e8.contentType;
var Li = ({ attributes: e8 }) => "audio/mp4" === e8.mimeType || "audio/webm" === e8.mimeType || "audio" === e8.contentType;
var Oi = ({ attributes: e8 }) => "text/vtt" === e8.mimeType || "text" === e8.contentType;
var Ni = (e8, t3) => {
  e8.forEach((e9) => {
    e9.mediaSequence = 0, e9.discontinuitySequence = t3.findIndex(function({ timeline: t4 }) {
      return t4 === e9.timeline;
    }), e9.segments && e9.segments.forEach((e10, t4) => {
      e10.number = t4;
    });
  });
};
var Ri = (e8) => e8 ? Object.keys(e8).reduce((t3, i2) => {
  const s3 = e8[i2];
  return t3.concat(s3.playlists);
}, []) : [];
var Mi = ({ dashPlaylists: e8, locations: t3, contentSteering: i2, sidxMapping: s3 = {}, previousManifest: n5, eventStream: r5 }) => {
  if (!e8.length) return {};
  const { sourceDuration: a5, type: o5, suggestedPresentationDelay: l2, minimumUpdatePeriod: u3 } = e8[0].attributes, h2 = Si(e8.filter(Pi)).map(Di), d3 = Si(e8.filter(Li)), c3 = Si(e8.filter(Oi)), p2 = e8.map((e9) => e9.attributes.captionServices).filter(Boolean), m5 = { allowCache: true, discontinuityStarts: [], segments: [], endList: true, mediaGroups: { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} }, uri: "", duration: a5, playlists: wi(h2, s3) };
  u3 >= 0 && (m5.minimumUpdatePeriod = 1e3 * u3), t3 && (m5.locations = t3), i2 && (m5.contentSteering = i2), "dynamic" === o5 && (m5.suggestedPresentationDelay = l2), r5 && r5.length > 0 && (m5.eventStream = r5);
  const g5 = 0 === m5.playlists.length, f3 = d3.length ? Ii(d3, s3, g5) : null, y4 = c3.length ? xi(c3, s3) : null, _2 = h2.concat(Ri(f3), Ri(y4)), b2 = _2.map(({ timelineStarts: e9 }) => e9);
  return m5.timelineStarts = gi(b2), Ni(_2, m5.timelineStarts), f3 && (m5.mediaGroups.AUDIO.audio = f3), y4 && (m5.mediaGroups.SUBTITLES.subs = y4), p2.length && (m5.mediaGroups["CLOSED-CAPTIONS"].cc = Ai(p2)), n5 ? vi({ oldManifest: n5, newManifest: m5 }) : m5;
};
var Ui = (e8, t3, i2) => {
  const { NOW: s3, clientOffset: n5, availabilityStartTime: r5, timescale: a5 = 1, periodStart: o5 = 0, minimumUpdatePeriod: l2 = 0 } = e8, u3 = (s3 + n5) / 1e3 + l2 - (r5 + o5);
  return Math.ceil((u3 * a5 - t3) / i2);
};
var Bi = (e8, t3) => {
  const { type: i2, minimumUpdatePeriod: s3 = 0, media: n5 = "", sourceDuration: r5, timescale: a5 = 1, startNumber: o5 = 1, periodStart: l2 } = e8, u3 = [];
  let h2 = -1;
  for (let d3 = 0; d3 < t3.length; d3++) {
    const c3 = t3[d3], p2 = c3.d, m5 = c3.r || 0, g5 = c3.t || 0;
    let f3;
    if (h2 < 0 && (h2 = g5), g5 && g5 > h2 && (h2 = g5), m5 < 0) {
      const o6 = d3 + 1;
      f3 = o6 === t3.length ? "dynamic" === i2 && s3 > 0 && n5.indexOf("$Number$") > 0 ? Ui(e8, h2, p2) : (r5 * a5 - h2) / p2 : (t3[o6].t - h2) / p2;
    } else f3 = m5 + 1;
    const y4 = o5 + u3.length + f3;
    let _2 = o5 + u3.length;
    for (; _2 < y4; ) u3.push({ number: _2, duration: p2 / a5, time: h2, timeline: l2 }), h2 += p2, _2++;
  }
  return u3;
};
var Fi = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g;
var qi = (e8) => (t3, i2, s3, n5) => {
  if ("$$" === t3) return "$";
  if (void 0 === e8[i2]) return t3;
  const r5 = "" + e8[i2];
  return "RepresentationID" === i2 ? r5 : (n5 = s3 ? parseInt(n5, 10) : 1, r5.length >= n5 ? r5 : `${new Array(n5 - r5.length + 1).join("0")}${r5}`);
};
var ji = (e8, t3) => e8.replace(Fi, qi(t3));
var $i = (e8, t3) => e8.duration || t3 ? e8.duration ? hi(e8) : Bi(e8, t3) : [{ number: e8.startNumber || 1, duration: e8.sourceDuration, time: 0, timeline: e8.periodStart }];
var Hi = (e8, t3) => {
  const i2 = { RepresentationID: e8.id, Bandwidth: e8.bandwidth || 0 }, { initialization: s3 = { sourceURL: "", range: "" } } = e8, n5 = ri({ baseUrl: e8.baseUrl, source: ji(s3.sourceURL, i2), range: s3.range });
  return $i(e8, t3).map((t4) => {
    i2.Number = t4.number, i2.Time = t4.time;
    const s4 = ji(e8.media || "", i2), r5 = e8.timescale || 1, a5 = e8.presentationTimeOffset || 0, o5 = e8.periodStart + (t4.time - a5) / r5;
    return { uri: s4, timeline: t4.timeline, duration: t4.duration, resolvedUri: Fe(e8.baseUrl || "", s4), map: n5, number: t4.number, presentationTime: o5 };
  });
};
var Vi = (e8, t3) => {
  const { baseUrl: i2, initialization: s3 = {} } = e8, n5 = ri({ baseUrl: i2, source: s3.sourceURL, range: s3.range }), r5 = ri({ baseUrl: i2, source: t3.media, range: t3.mediaRange });
  return r5.map = n5, r5;
};
var zi = (e8, t3) => {
  const { duration: i2, segmentUrls: s3 = [], periodStart: n5 } = e8;
  if (!i2 && !t3 || i2 && t3) throw new Error(ni.SEGMENT_TIME_UNSPECIFIED);
  const r5 = s3.map((t4) => Vi(e8, t4));
  let a5;
  i2 && (a5 = hi(e8)), t3 && (a5 = Bi(e8, t3));
  return a5.map((t4, i3) => {
    if (r5[i3]) {
      const s4 = r5[i3], a6 = e8.timescale || 1, o5 = e8.presentationTimeOffset || 0;
      return s4.timeline = t4.timeline, s4.duration = t4.duration, s4.number = t4.number, s4.presentationTime = n5 + (t4.time - o5) / a6, s4;
    }
  }).filter((e9) => e9);
};
var Wi = ({ attributes: e8, segmentInfo: t3 }) => {
  let i2, s3;
  t3.template ? (s3 = Hi, i2 = Qt(e8, t3.template)) : t3.base ? (s3 = di, i2 = Qt(e8, t3.base)) : t3.list && (s3 = zi, i2 = Qt(e8, t3.list));
  const n5 = { attributes: e8 };
  if (!s3) return n5;
  const r5 = s3(i2, t3.segmentTimeline);
  if (i2.duration) {
    const { duration: e9, timescale: t4 = 1 } = i2;
    i2.duration = e9 / t4;
  } else r5.length ? i2.duration = r5.reduce((e9, t4) => Math.max(e9, Math.ceil(t4.duration)), 0) : i2.duration = 0;
  return n5.attributes = i2, n5.segments = r5, t3.base && i2.indexRange && (n5.sidx = r5[0], n5.segments = []), n5;
};
var Gi = (e8) => e8.map(Wi);
var Xi = (e8, t3) => ti(e8.childNodes).filter(({ tagName: e9 }) => e9 === t3);
var Ki = (e8) => e8.textContent.trim();
var Yi = (e8) => parseFloat(e8.split("/").reduce((e9, t3) => e9 / t3));
var Qi = (e8) => {
  const t3 = 31536e3, i2 = 2592e3, s3 = 86400, n5 = 3600, r5 = 60, a5 = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(e8);
  if (!a5) return 0;
  const [o5, l2, u3, h2, d3, c3] = a5.slice(1);
  return parseFloat(o5 || 0) * t3 + parseFloat(l2 || 0) * i2 + parseFloat(u3 || 0) * s3 + parseFloat(h2 || 0) * n5 + parseFloat(d3 || 0) * r5 + parseFloat(c3 || 0);
};
var Ji = (e8) => (/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e8) && (e8 += "Z"), Date.parse(e8));
var Zi = { mediaPresentationDuration: (e8) => Qi(e8), availabilityStartTime: (e8) => Ji(e8) / 1e3, minimumUpdatePeriod: (e8) => Qi(e8), suggestedPresentationDelay: (e8) => Qi(e8), type: (e8) => e8, timeShiftBufferDepth: (e8) => Qi(e8), start: (e8) => Qi(e8), width: (e8) => parseInt(e8, 10), height: (e8) => parseInt(e8, 10), bandwidth: (e8) => parseInt(e8, 10), frameRate: (e8) => Yi(e8), startNumber: (e8) => parseInt(e8, 10), timescale: (e8) => parseInt(e8, 10), presentationTimeOffset: (e8) => parseInt(e8, 10), duration(e8) {
  const t3 = parseInt(e8, 10);
  return isNaN(t3) ? Qi(e8) : t3;
}, d: (e8) => parseInt(e8, 10), t: (e8) => parseInt(e8, 10), r: (e8) => parseInt(e8, 10), presentationTime: (e8) => parseInt(e8, 10), DEFAULT: (e8) => e8 };
var es = (e8) => e8 && e8.attributes ? ti(e8.attributes).reduce((e9, t3) => {
  const i2 = Zi[t3.name] || Zi.DEFAULT;
  return e9[t3.name] = i2(t3.value), e9;
}, {}) : {};
var ts = { "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha", "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready", "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime", "urn:mpeg:dash:mp4protection:2011": "mp4protection" };
var is = (e8, t3) => t3.length ? ei(e8.map(function(e9) {
  return t3.map(function(t4) {
    const i2 = Ki(t4), s3 = Fe(e9.baseUrl, i2), n5 = Qt(es(t4), { baseUrl: s3 });
    return s3 !== i2 && !n5.serviceLocation && e9.serviceLocation && (n5.serviceLocation = e9.serviceLocation), n5;
  });
})) : e8;
var ss = (e8) => {
  const t3 = Xi(e8, "SegmentTemplate")[0], i2 = Xi(e8, "SegmentList")[0], s3 = i2 && Xi(i2, "SegmentURL").map((e9) => Qt({ tag: "SegmentURL" }, es(e9))), n5 = Xi(e8, "SegmentBase")[0], r5 = i2 || t3, a5 = r5 && Xi(r5, "SegmentTimeline")[0], o5 = i2 || n5 || t3, l2 = o5 && Xi(o5, "Initialization")[0], u3 = t3 && es(t3);
  u3 && l2 ? u3.initialization = l2 && es(l2) : u3 && u3.initialization && (u3.initialization = { sourceURL: u3.initialization });
  const h2 = { template: u3, segmentTimeline: a5 && Xi(a5, "S").map((e9) => es(e9)), list: i2 && Qt(es(i2), { segmentUrls: s3, initialization: es(l2) }), base: n5 && Qt(es(n5), { initialization: es(l2) }) };
  return Object.keys(h2).forEach((e9) => {
    h2[e9] || delete h2[e9];
  }), h2;
};
var ns = (e8, t3, i2) => (s3) => {
  const n5 = Xi(s3, "BaseURL"), r5 = is(t3, n5), a5 = Qt(e8, es(s3)), o5 = ss(s3);
  return r5.map((e9) => ({ segmentInfo: Qt(i2, o5), attributes: Qt(a5, e9) }));
};
var rs = (e8) => e8.reduce((e9, t3) => {
  const i2 = es(t3);
  i2.schemeIdUri && (i2.schemeIdUri = i2.schemeIdUri.toLowerCase());
  const s3 = ts[i2.schemeIdUri];
  if (s3) {
    e9[s3] = { attributes: i2 };
    const n5 = Xi(t3, "cenc:pssh")[0];
    if (n5) {
      const t4 = Ki(n5);
      e9[s3].pssh = t4 && $e(t4);
    }
  }
  return e9;
}, {});
var as = (e8) => {
  if ("urn:scte:dash:cc:cea-608:2015" === e8.schemeIdUri) {
    return ("string" != typeof e8.value ? [] : e8.value.split(";")).map((e9) => {
      let t3, i2;
      return i2 = e9, /^CC\d=/.test(e9) ? [t3, i2] = e9.split("=") : /^CC\d$/.test(e9) && (t3 = e9), { channel: t3, language: i2 };
    });
  }
  if ("urn:scte:dash:cc:cea-708:2015" === e8.schemeIdUri) {
    return ("string" != typeof e8.value ? [] : e8.value.split(";")).map((e9) => {
      const t3 = { channel: void 0, language: void 0, aspectRatio: 1, easyReader: 0, "3D": 0 };
      if (/=/.test(e9)) {
        const [i2, s3 = ""] = e9.split("=");
        t3.channel = i2, t3.language = e9, s3.split(",").forEach((e10) => {
          const [i3, s4] = e10.split(":");
          "lang" === i3 ? t3.language = s4 : "er" === i3 ? t3.easyReader = Number(s4) : "war" === i3 ? t3.aspectRatio = Number(s4) : "3D" === i3 && (t3["3D"] = Number(s4));
        });
      } else t3.language = e9;
      return t3.channel && (t3.channel = "SERVICE" + t3.channel), t3;
    });
  }
};
var os = (e8) => ei(Xi(e8.node, "EventStream").map((t3) => {
  const i2 = es(t3), s3 = i2.schemeIdUri;
  return Xi(t3, "Event").map((t4) => {
    const n5 = es(t4), r5 = n5.presentationTime || 0, a5 = i2.timescale || 1, o5 = n5.duration || 0, l2 = r5 / a5 + e8.attributes.start;
    return { schemeIdUri: s3, value: i2.value, id: n5.id, start: l2, end: l2 + o5 / a5, messageData: Ki(t4) || n5.messageData, contentEncoding: i2.contentEncoding, presentationTimeOffset: i2.presentationTimeOffset || 0 };
  });
}));
var ls = (e8, t3, i2) => (s3) => {
  const n5 = es(s3), r5 = is(t3, Xi(s3, "BaseURL")), a5 = Xi(s3, "Role")[0], o5 = { role: es(a5) };
  let l2 = Qt(e8, n5, o5);
  const u3 = Xi(s3, "Accessibility")[0], h2 = as(es(u3));
  h2 && (l2 = Qt(l2, { captionServices: h2 }));
  const d3 = Xi(s3, "Label")[0];
  if (d3 && d3.childNodes.length) {
    const e9 = d3.childNodes[0].nodeValue.trim();
    l2 = Qt(l2, { label: e9 });
  }
  const c3 = rs(Xi(s3, "ContentProtection"));
  Object.keys(c3).length && (l2 = Qt(l2, { contentProtection: c3 }));
  const p2 = ss(s3), m5 = Xi(s3, "Representation"), g5 = Qt(i2, p2);
  return ei(m5.map(ns(l2, r5, g5)));
};
var us = (e8, t3) => (i2, s3) => {
  const n5 = is(t3, Xi(i2.node, "BaseURL")), r5 = Qt(e8, { periodStart: i2.attributes.start });
  "number" == typeof i2.attributes.duration && (r5.periodDuration = i2.attributes.duration);
  const a5 = Xi(i2.node, "AdaptationSet"), o5 = ss(i2.node);
  return ei(a5.map(ls(r5, n5, o5)));
};
var hs = (e8, t3) => {
  if (e8.length > 1 && t3({ type: "warn", message: "The MPD manifest should contain no more than one ContentSteering tag" }), !e8.length) return null;
  const i2 = Qt({ serverURL: Ki(e8[0]) }, es(e8[0]));
  return i2.queryBeforeStart = "true" === i2.queryBeforeStart, i2;
};
var ds = ({ attributes: e8, priorPeriodAttributes: t3, mpdType: i2 }) => "number" == typeof e8.start ? e8.start : t3 && "number" == typeof t3.start && "number" == typeof t3.duration ? t3.start + t3.duration : t3 || "static" !== i2 ? null : 0;
var cs = (e8, t3 = {}) => {
  const { manifestUri: i2 = "", NOW: s3 = Date.now(), clientOffset: n5 = 0, eventHandler: r5 = function() {
  } } = t3, a5 = Xi(e8, "Period");
  if (!a5.length) throw new Error(ni.INVALID_NUMBER_OF_PERIOD);
  const o5 = Xi(e8, "Location"), l2 = es(e8), u3 = is([{ baseUrl: i2 }], Xi(e8, "BaseURL")), h2 = Xi(e8, "ContentSteering");
  l2.type = l2.type || "static", l2.sourceDuration = l2.mediaPresentationDuration || 0, l2.NOW = s3, l2.clientOffset = n5, o5.length && (l2.locations = o5.map(Ki));
  const d3 = [];
  return a5.forEach((e9, t4) => {
    const i3 = es(e9), s4 = d3[t4 - 1];
    i3.start = ds({ attributes: i3, priorPeriodAttributes: s4 ? s4.attributes : null, mpdType: l2.type }), d3.push({ node: e9, attributes: i3 });
  }), { locations: l2.locations, contentSteeringInfo: hs(h2, r5), representationInfo: ei(d3.map(us(l2, u3))), eventStream: ei(d3.map(os)) };
};
var ps = (e8) => {
  if ("" === e8) throw new Error(ni.DASH_EMPTY_MANIFEST);
  const t3 = new Kt.DOMParser();
  let i2, s3;
  try {
    i2 = t3.parseFromString(e8, "application/xml"), s3 = i2 && "MPD" === i2.documentElement.tagName ? i2.documentElement : null;
  } catch (n5) {
  }
  if (!s3 || s3 && s3.getElementsByTagName("parsererror").length > 0) throw new Error(ni.DASH_INVALID_XML);
  return s3;
};
var ms = (e8) => {
  const t3 = Xi(e8, "UTCTiming")[0];
  if (!t3) return null;
  const i2 = es(t3);
  switch (i2.schemeIdUri) {
    case "urn:mpeg:dash:utc:http-head:2014":
    case "urn:mpeg:dash:utc:http-head:2012":
      i2.method = "HEAD";
      break;
    case "urn:mpeg:dash:utc:http-xsdate:2014":
    case "urn:mpeg:dash:utc:http-iso:2014":
    case "urn:mpeg:dash:utc:http-xsdate:2012":
    case "urn:mpeg:dash:utc:http-iso:2012":
      i2.method = "GET";
      break;
    case "urn:mpeg:dash:utc:direct:2014":
    case "urn:mpeg:dash:utc:direct:2012":
      i2.method = "DIRECT", i2.value = Date.parse(i2.value);
      break;
    default:
      throw new Error(ni.UNSUPPORTED_UTC_TIMING_SCHEME);
  }
  return i2;
};
var gs = (e8, t3 = {}) => {
  const i2 = cs(ps(e8), t3), s3 = Gi(i2.representationInfo);
  return Mi({ dashPlaylists: s3, locations: i2.locations, contentSteering: i2.contentSteeringInfo, sidxMapping: t3.sidxMapping, previousManifest: t3.previousManifest, eventStream: i2.eventStream });
};
var fs = (e8) => ms(ps(e8));
var ys;
var _s;
var bs;
var vs;
function Ts() {
  if (_s) return ys;
  _s = 1;
  var e8 = Math.pow(2, 32);
  return ys = { getUint64: function(t3) {
    var i2, s3 = new DataView(t3.buffer, t3.byteOffset, t3.byteLength);
    return s3.getBigUint64 ? (i2 = s3.getBigUint64(0)) < Number.MAX_SAFE_INTEGER ? Number(i2) : i2 : s3.getUint32(0) * e8 + s3.getUint32(4);
  }, MAX_UINT32: e8 };
}
function Ss() {
  if (vs) return bs;
  vs = 1;
  var e8 = Ts().getUint64;
  return bs = function(t3) {
    var i2 = new DataView(t3.buffer, t3.byteOffset, t3.byteLength), s3 = { version: t3[0], flags: new Uint8Array(t3.subarray(1, 4)), references: [], referenceId: i2.getUint32(4), timescale: i2.getUint32(8) }, n5 = 12;
    0 === s3.version ? (s3.earliestPresentationTime = i2.getUint32(n5), s3.firstOffset = i2.getUint32(n5 + 4), n5 += 8) : (s3.earliestPresentationTime = e8(t3.subarray(n5)), s3.firstOffset = e8(t3.subarray(n5 + 8)), n5 += 16), n5 += 2;
    var r5 = i2.getUint16(n5);
    for (n5 += 2; r5 > 0; n5 += 12, r5--) s3.references.push({ referenceType: (128 & t3[n5]) >>> 7, referencedSize: 2147483647 & i2.getUint32(n5), subsegmentDuration: i2.getUint32(n5 + 4), startsWithSap: !!(128 & t3[n5 + 8]), sapType: (112 & t3[n5 + 8]) >>> 4, sapDeltaTime: 268435455 & i2.getUint32(n5 + 8) });
    return s3;
  };
}
var Es = o2(Ss());
var ws = St([73, 68, 51]);
var Cs = function(e8, t3) {
  void 0 === t3 && (t3 = 0);
  var i2 = (e8 = St(e8))[t3 + 5], s3 = e8[t3 + 6] << 21 | e8[t3 + 7] << 14 | e8[t3 + 8] << 7 | e8[t3 + 9];
  return (16 & i2) >> 4 ? s3 + 20 : s3 + 10;
};
var ks = function e3(t3, i2) {
  return void 0 === i2 && (i2 = 0), (t3 = St(t3)).length - i2 < 10 || !Pt(t3, ws, { offset: i2 }) ? i2 : e3(t3, i2 += Cs(t3, i2));
};
var Is = function(e8) {
  return "string" == typeof e8 ? At(e8) : e8;
};
var xs = function(e8) {
  return Array.isArray(e8) ? e8.map(function(e9) {
    return Is(e9);
  }) : [Is(e8)];
};
var As = function e4(t3, i2, s3) {
  void 0 === s3 && (s3 = false), i2 = xs(i2), t3 = St(t3);
  var n5 = [];
  if (!i2.length) return n5;
  for (var r5 = 0; r5 < t3.length; ) {
    var a5 = (t3[r5] << 24 | t3[r5 + 1] << 16 | t3[r5 + 2] << 8 | t3[r5 + 3]) >>> 0, o5 = t3.subarray(r5 + 4, r5 + 8);
    if (0 === a5) break;
    var l2 = r5 + a5;
    if (l2 > t3.length) {
      if (s3) break;
      l2 = t3.length;
    }
    var u3 = t3.subarray(r5 + 8, l2);
    Pt(o5, i2[0]) && (1 === i2.length ? n5.push(u3) : n5.push.apply(n5, e4(u3, i2.slice(1), s3))), r5 = l2;
  }
  return n5;
};
var Ds = { EBML: St([26, 69, 223, 163]), DocType: St([66, 130]), Segment: St([24, 83, 128, 103]), SegmentInfo: St([21, 73, 169, 102]), Tracks: St([22, 84, 174, 107]), Track: St([174]), TrackNumber: St([215]), DefaultDuration: St([35, 227, 131]), TrackEntry: St([174]), TrackType: St([131]), FlagDefault: St([136]), CodecID: St([134]), CodecPrivate: St([99, 162]), VideoTrack: St([224]), AudioTrack: St([225]), Cluster: St([31, 67, 182, 117]), Timestamp: St([231]), TimestampScale: St([42, 215, 177]), BlockGroup: St([160]), BlockDuration: St([155]), Block: St([161]), SimpleBlock: St([163]) };
var Ps = [128, 64, 32, 16, 8, 4, 2, 1];
var Ls = function(e8) {
  for (var t3 = 1, i2 = 0; i2 < Ps.length && !(e8 & Ps[i2]); i2++) t3++;
  return t3;
};
var Os = function(e8, t3, i2, s3) {
  void 0 === i2 && (i2 = true), void 0 === s3 && (s3 = false);
  var n5 = Ls(e8[t3]), r5 = e8.subarray(t3, t3 + n5);
  return i2 && ((r5 = Array.prototype.slice.call(e8, t3, t3 + n5))[0] ^= Ps[n5 - 1]), { length: n5, value: It(r5, { signed: s3 }), bytes: r5 };
};
var Ns = function e5(t3) {
  return "string" == typeof t3 ? t3.match(/.{1,2}/g).map(function(t4) {
    return e5(t4);
  }) : "number" == typeof t3 ? xt(t3) : t3;
};
var Rs = function(e8) {
  return Array.isArray(e8) ? e8.map(function(e9) {
    return Ns(e9);
  }) : [Ns(e8)];
};
var Ms = function e6(t3, i2, s3) {
  if (s3 >= i2.length) return i2.length;
  var n5 = Os(i2, s3, false);
  if (Pt(t3.bytes, n5.bytes)) return s3;
  var r5 = Os(i2, s3 + n5.length);
  return e6(t3, i2, s3 + r5.length + r5.value + n5.length);
};
var Us = function e7(t3, i2) {
  i2 = Rs(i2), t3 = St(t3);
  var s3 = [];
  if (!i2.length) return s3;
  for (var n5 = 0; n5 < t3.length; ) {
    var r5 = Os(t3, n5, false), a5 = Os(t3, n5 + r5.length), o5 = n5 + r5.length + a5.length;
    127 === a5.value && (a5.value = Ms(r5, t3, o5), a5.value !== t3.length && (a5.value -= o5));
    var l2 = o5 + a5.value > t3.length ? t3.length : o5 + a5.value, u3 = t3.subarray(o5, l2);
    Pt(i2[0], r5.bytes) && (1 === i2.length ? s3.push(u3) : s3 = s3.concat(e7(u3, i2.slice(1)))), n5 += r5.length + a5.length + u3.length;
  }
  return s3;
};
var Bs = St([0, 0, 0, 1]);
var Fs = St([0, 0, 1]);
var qs = St([0, 0, 3]);
var js = function(e8) {
  for (var t3 = [], i2 = 1; i2 < e8.length - 2; ) Pt(e8.subarray(i2, i2 + 3), qs) && (t3.push(i2 + 2), i2++), i2++;
  if (0 === t3.length) return e8;
  var s3 = e8.length - t3.length, n5 = new Uint8Array(s3), r5 = 0;
  for (i2 = 0; i2 < s3; r5++, i2++) r5 === t3[0] && (r5++, t3.shift()), n5[i2] = e8[r5];
  return n5;
};
var $s = function(e8, t3, i2, s3) {
  e8 = St(e8), i2 = [].concat(i2);
  for (var n5, r5 = 0, a5 = 0; r5 < e8.length && (a5 < s3 || n5); ) {
    var o5 = void 0;
    if (Pt(e8.subarray(r5), Bs) ? o5 = 4 : Pt(e8.subarray(r5), Fs) && (o5 = 3), o5) {
      if (a5++, n5) return js(e8.subarray(n5, r5));
      var l2 = void 0;
      "h264" === t3 ? l2 = 31 & e8[r5 + o5] : "h265" === t3 && (l2 = e8[r5 + o5] >> 1 & 63), -1 !== i2.indexOf(l2) && (n5 = r5 + o5), r5 += o5 + ("h264" === t3 ? 1 : 2);
    } else r5++;
  }
  return e8.subarray(0, 0);
};
var Hs = function(e8, t3, i2) {
  return $s(e8, "h264", t3, i2);
};
var Vs = function(e8, t3, i2) {
  return $s(e8, "h265", t3, i2);
};
var zs = { webm: St([119, 101, 98, 109]), matroska: St([109, 97, 116, 114, 111, 115, 107, 97]), flac: St([102, 76, 97, 67]), ogg: St([79, 103, 103, 83]), ac3: St([11, 119]), riff: St([82, 73, 70, 70]), avi: St([65, 86, 73]), wav: St([87, 65, 86, 69]), "3gp": St([102, 116, 121, 112, 51, 103]), mp4: St([102, 116, 121, 112]), fmp4: St([115, 116, 121, 112]), mov: St([102, 116, 121, 112, 113, 116]), moov: St([109, 111, 111, 118]), moof: St([109, 111, 111, 102]) };
var Ws = { aac: function(e8) {
  var t3 = ks(e8);
  return Pt(e8, [255, 16], { offset: t3, mask: [255, 22] });
}, mp3: function(e8) {
  var t3 = ks(e8);
  return Pt(e8, [255, 2], { offset: t3, mask: [255, 6] });
}, webm: function(e8) {
  var t3 = Us(e8, [Ds.EBML, Ds.DocType])[0];
  return Pt(t3, zs.webm);
}, mkv: function(e8) {
  var t3 = Us(e8, [Ds.EBML, Ds.DocType])[0];
  return Pt(t3, zs.matroska);
}, mp4: function(e8) {
  return !Ws["3gp"](e8) && !Ws.mov(e8) && (!(!Pt(e8, zs.mp4, { offset: 4 }) && !Pt(e8, zs.fmp4, { offset: 4 })) || (!(!Pt(e8, zs.moof, { offset: 4 }) && !Pt(e8, zs.moov, { offset: 4 })) || void 0));
}, mov: function(e8) {
  return Pt(e8, zs.mov, { offset: 4 });
}, "3gp": function(e8) {
  return Pt(e8, zs["3gp"], { offset: 4 });
}, ac3: function(e8) {
  var t3 = ks(e8);
  return Pt(e8, zs.ac3, { offset: t3 });
}, ts: function(e8) {
  if (e8.length < 189 && e8.length >= 1) return 71 === e8[0];
  for (var t3 = 0; t3 + 188 < e8.length && t3 < 188; ) {
    if (71 === e8[t3] && 71 === e8[t3 + 188]) return true;
    t3 += 1;
  }
  return false;
}, flac: function(e8) {
  var t3 = ks(e8);
  return Pt(e8, zs.flac, { offset: t3 });
}, ogg: function(e8) {
  return Pt(e8, zs.ogg);
}, avi: function(e8) {
  return Pt(e8, zs.riff) && Pt(e8, zs.avi, { offset: 8 });
}, wav: function(e8) {
  return Pt(e8, zs.riff) && Pt(e8, zs.wav, { offset: 8 });
}, h264: function(e8) {
  return Hs(e8, 7, 3).length;
}, h265: function(e8) {
  return Vs(e8, [32, 33], 3).length;
} };
var Gs = Object.keys(Ws).filter(function(e8) {
  return "ts" !== e8 && "h264" !== e8 && "h265" !== e8;
}).concat(["ts", "h264", "h265"]);
Gs.forEach(function(e8) {
  var t3 = Ws[e8];
  Ws[e8] = function(e9) {
    return t3(St(e9));
  };
});
var Xs;
var Ks;
var Ys = Ws;
var Qs = function(e8) {
  e8 = St(e8);
  for (var t3 = 0; t3 < Gs.length; t3++) {
    var i2 = Gs[t3];
    if (Ys[i2](e8)) return i2;
  }
  return "";
};
var Js = function(e8) {
  return As(e8, ["moof"]).length > 0;
};
function Zs() {
  if (Ks) return Xs;
  Ks = 1;
  var e8, t3, i2, s3, n5, r5, a5, o5 = 9e4;
  return n5 = function(t4, i3) {
    return e8(s3(t4, i3));
  }, r5 = function(e9, s4) {
    return t3(i2(e9), s4);
  }, a5 = function(e9, t4, s4) {
    return i2(s4 ? e9 : e9 - t4);
  }, Xs = { ONE_SECOND_IN_TS: o5, secondsToVideoTs: e8 = function(e9) {
    return e9 * o5;
  }, secondsToAudioTs: t3 = function(e9, t4) {
    return e9 * t4;
  }, videoTsToSeconds: i2 = function(e9) {
    return e9 / o5;
  }, audioTsToSeconds: s3 = function(e9, t4) {
    return e9 / t4;
  }, audioTsToVideoTs: n5, videoTsToAudioTs: r5, metadataTsToSeconds: a5 };
}
var en = Zs();
var tn = "8.21.0";
var sn = {};
var nn = function(e8, t3) {
  return sn[e8] = sn[e8] || [], t3 && (sn[e8] = sn[e8].concat(t3)), sn[e8];
};
var rn = function(e8, t3) {
  nn(e8, t3);
};
var an = function(e8, t3) {
  const i2 = nn(e8).indexOf(t3);
  return !(i2 <= -1) && (sn[e8] = sn[e8].slice(), sn[e8].splice(i2, 1), true);
};
var on = function(e8, t3) {
  nn(e8, [].concat(t3).map((t4) => {
    const i2 = (...s3) => (an(e8, i2), t4(...s3));
    return i2;
  }));
};
var ln = { prefixed: true };
var un = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"]];
var hn = un[0];
var dn;
for (let kg = 0; kg < un.length; kg++) if (un[kg][1] in ne) {
  dn = un[kg];
  break;
}
if (dn) {
  for (let e8 = 0; e8 < dn.length; e8++) ln[hn[e8]] = dn[e8];
  ln.prefixed = dn[0] !== hn[0];
}
var cn = [];
var pn = (e8, t3, i2) => (s3, n5, r5) => {
  const a5 = t3.levels[n5], o5 = new RegExp(`^(${a5})$`);
  let l2 = e8;
  if ("log" !== s3 && r5.unshift(s3.toUpperCase() + ":"), i2 && (l2 = `%c${e8}`, r5.unshift(i2)), r5.unshift(l2 + ":"), cn) {
    cn.push([].concat(r5));
    const e9 = cn.length - 1e3;
    cn.splice(0, e9 > 0 ? e9 : 0);
  }
  if (!_.console) return;
  let u3 = _.console[s3];
  u3 || "debug" !== s3 || (u3 = _.console.info || _.console.log), u3 && a5 && o5.test(s3) && u3[Array.isArray(r5) ? "apply" : "call"](_.console, r5);
};
function mn(e8, t3 = ":", i2 = "") {
  let s3, n5 = "info";
  function r5(...e9) {
    s3("log", n5, e9);
  }
  return s3 = pn(e8, r5, i2), r5.createLogger = (s4, n6, r6) => {
    const a5 = void 0 !== n6 ? n6 : t3;
    return mn(`${e8} ${a5} ${s4}`, a5, void 0 !== r6 ? r6 : i2);
  }, r5.createNewLogger = (e9, t4, i3) => mn(e9, t4, i3), r5.levels = { all: "debug|log|warn|error", off: "", debug: "debug|log|warn|error", info: "log|warn|error", warn: "warn|error", error: "error", DEFAULT: n5 }, r5.level = (e9) => {
    if ("string" == typeof e9) {
      if (!r5.levels.hasOwnProperty(e9)) throw new Error(`"${e9}" in not a valid log level`);
      n5 = e9;
    }
    return n5;
  }, r5.history = () => cn ? [].concat(cn) : [], r5.history.filter = (e9) => (cn || []).filter((t4) => new RegExp(`.*${e9}.*`).test(t4[0])), r5.history.clear = () => {
    cn && (cn.length = 0);
  }, r5.history.disable = () => {
    null !== cn && (cn.length = 0, cn = null);
  }, r5.history.enable = () => {
    null === cn && (cn = []);
  }, r5.error = (...e9) => s3("error", n5, e9), r5.warn = (...e9) => s3("warn", n5, e9), r5.debug = (...e9) => s3("debug", n5, e9), r5;
}
var gn = mn("VIDEOJS");
var fn = gn.createLogger;
var yn = Object.prototype.toString;
var _n = function(e8) {
  return Tn(e8) ? Object.keys(e8) : [];
};
function bn(e8, t3) {
  _n(e8).forEach((i2) => t3(e8[i2], i2));
}
function vn(e8, t3, i2 = 0) {
  return _n(e8).reduce((i3, s3) => t3(i3, e8[s3], s3), i2);
}
function Tn(e8) {
  return !!e8 && "object" == typeof e8;
}
function Sn(e8) {
  return Tn(e8) && "[object Object]" === yn.call(e8) && e8.constructor === Object;
}
function En(...e8) {
  const t3 = {};
  return e8.forEach((e9) => {
    e9 && bn(e9, (e10, i2) => {
      Sn(e10) ? (Sn(t3[i2]) || (t3[i2] = {}), t3[i2] = En(t3[i2], e10)) : t3[i2] = e10;
    });
  }), t3;
}
function wn(e8 = {}) {
  const t3 = [];
  for (const i2 in e8) if (e8.hasOwnProperty(i2)) {
    const s3 = e8[i2];
    t3.push(s3);
  }
  return t3;
}
function Cn(e8, t3, i2, s3 = true) {
  const n5 = (i3) => Object.defineProperty(e8, t3, { value: i3, enumerable: true, writable: true }), r5 = { configurable: true, enumerable: true, get() {
    const e9 = i2();
    return n5(e9), e9;
  } };
  return s3 && (r5.set = n5), Object.defineProperty(e8, t3, r5);
}
var kn = Object.freeze({ __proto__: null, each: bn, reduce: vn, isObject: Tn, isPlain: Sn, merge: En, values: wn, defineLazyProperty: Cn });
var In;
var xn = false;
var An = null;
var Dn = false;
var Pn = false;
var Ln = false;
var On = false;
var Nn = false;
var Rn = null;
var Mn = null;
var Un = Boolean(_.cast && _.cast.framework && _.cast.framework.CastReceiverContext);
var Bn = null;
var Fn = false;
var qn = false;
var jn = false;
var $n = false;
var Hn = false;
var Vn = false;
var zn = false;
var Wn = Boolean(Zn() && ("ontouchstart" in _ || _.navigator.maxTouchPoints || _.DocumentTouch && _.document instanceof _.DocumentTouch));
var Gn = _.navigator && _.navigator.userAgentData;
if (Gn && Gn.platform && Gn.brands && (Dn = "Android" === Gn.platform, Ln = Boolean(Gn.brands.find((e8) => "Microsoft Edge" === e8.brand)), On = Boolean(Gn.brands.find((e8) => "Chromium" === e8.brand)), Nn = !Ln && On, Rn = Mn = (Gn.brands.find((e8) => "Chromium" === e8.brand) || {}).version || null, qn = "Windows" === Gn.platform), !On) {
  const e8 = _.navigator && _.navigator.userAgent || "";
  xn = /iPod/i.test(e8), An = function() {
    const t3 = e8.match(/OS (\d+)_/i);
    return t3 && t3[1] ? t3[1] : null;
  }(), Dn = /Android/i.test(e8), In = function() {
    const t3 = e8.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
    if (!t3) return null;
    const i2 = t3[1] && parseFloat(t3[1]), s3 = t3[2] && parseFloat(t3[2]);
    return i2 && s3 ? parseFloat(t3[1] + "." + t3[2]) : i2 || null;
  }(), Pn = /Firefox/i.test(e8), Ln = /Edg/i.test(e8), On = /Chrome/i.test(e8) || /CriOS/i.test(e8), Nn = !Ln && On, Rn = Mn = function() {
    const t3 = e8.match(/(Chrome|CriOS)\/(\d+)/);
    return t3 && t3[2] ? parseFloat(t3[2]) : null;
  }(), Bn = function() {
    const t3 = /MSIE\s(\d+)\.\d/.exec(e8);
    let i2 = t3 && parseFloat(t3[1]);
    return !i2 && /Trident\/7.0/i.test(e8) && /rv:11.0/.test(e8) && (i2 = 11), i2;
  }(), Hn = /Tizen/i.test(e8), Vn = /Web0S/i.test(e8), zn = Hn || Vn, Fn = /Safari/i.test(e8) && !Nn && !Dn && !Ln && !zn, qn = /Windows/i.test(e8), jn = /iPad/i.test(e8) || Fn && Wn && !/iPhone/i.test(e8), $n = /iPhone/i.test(e8) && !jn;
}
var Xn = $n || jn || xn;
var Kn = (Fn || Xn) && !Nn;
var Yn = Object.freeze({ __proto__: null, get IS_IPOD() {
  return xn;
}, get IOS_VERSION() {
  return An;
}, get IS_ANDROID() {
  return Dn;
}, get ANDROID_VERSION() {
  return In;
}, get IS_FIREFOX() {
  return Pn;
}, get IS_EDGE() {
  return Ln;
}, get IS_CHROMIUM() {
  return On;
}, get IS_CHROME() {
  return Nn;
}, get CHROMIUM_VERSION() {
  return Rn;
}, get CHROME_VERSION() {
  return Mn;
}, IS_CHROMECAST_RECEIVER: Un, get IE_VERSION() {
  return Bn;
}, get IS_SAFARI() {
  return Fn;
}, get IS_WINDOWS() {
  return qn;
}, get IS_IPAD() {
  return jn;
}, get IS_IPHONE() {
  return $n;
}, get IS_TIZEN() {
  return Hn;
}, get IS_WEBOS() {
  return Vn;
}, get IS_SMART_TV() {
  return zn;
}, TOUCH_ENABLED: Wn, IS_IOS: Xn, IS_ANY_SAFARI: Kn });
function Qn(e8) {
  return "string" == typeof e8 && Boolean(e8.trim());
}
function Jn(e8) {
  if (e8.indexOf(" ") >= 0) throw new Error("class has illegal whitespace characters");
}
function Zn() {
  return ne === _.document;
}
function er(e8) {
  return Tn(e8) && 1 === e8.nodeType;
}
function tr() {
  try {
    return _.parent !== _.self;
  } catch (e8) {
    return true;
  }
}
function ir(e8) {
  return function(t3, i2) {
    if (!Qn(t3)) return ne[e8](null);
    Qn(i2) && (i2 = ne.querySelector(i2));
    const s3 = er(i2) ? i2 : ne;
    return s3[e8] && s3[e8](t3);
  };
}
function sr(e8 = "div", t3 = {}, i2 = {}, s3) {
  const n5 = ne.createElement(e8);
  return Object.getOwnPropertyNames(t3).forEach(function(e9) {
    const i3 = t3[e9];
    "textContent" === e9 ? nr(n5, i3) : n5[e9] === i3 && "tabIndex" !== e9 || (n5[e9] = i3);
  }), Object.getOwnPropertyNames(i2).forEach(function(e9) {
    n5.setAttribute(e9, i2[e9]);
  }), s3 && Er(n5, s3), n5;
}
function nr(e8, t3) {
  return void 0 === e8.textContent ? e8.innerText = t3 : e8.textContent = t3, e8;
}
function rr(e8, t3) {
  t3.firstChild ? t3.insertBefore(e8, t3.firstChild) : t3.appendChild(e8);
}
function ar(e8, t3) {
  return Jn(t3), e8.classList.contains(t3);
}
function or(e8, ...t3) {
  return e8.classList.add(...t3.reduce((e9, t4) => e9.concat(t4.split(/\s+/)), [])), e8;
}
function lr(e8, ...t3) {
  return e8 ? (e8.classList.remove(...t3.reduce((e9, t4) => e9.concat(t4.split(/\s+/)), [])), e8) : (gn.warn("removeClass was called with an element that doesn't exist"), null);
}
function ur(e8, t3, i2) {
  return "function" == typeof i2 && (i2 = i2(e8, t3)), "boolean" != typeof i2 && (i2 = void 0), t3.split(/\s+/).forEach((t4) => e8.classList.toggle(t4, i2)), e8;
}
function hr(e8, t3) {
  Object.getOwnPropertyNames(t3).forEach(function(i2) {
    const s3 = t3[i2];
    null == s3 || false === s3 ? e8.removeAttribute(i2) : e8.setAttribute(i2, true === s3 ? "" : s3);
  });
}
function dr(e8) {
  const t3 = {}, i2 = ["autoplay", "controls", "playsinline", "loop", "muted", "default", "defaultMuted"];
  if (e8 && e8.attributes && e8.attributes.length > 0) {
    const s3 = e8.attributes;
    for (let e9 = s3.length - 1; e9 >= 0; e9--) {
      const n5 = s3[e9].name;
      let r5 = s3[e9].value;
      i2.includes(n5) && (r5 = null !== r5), t3[n5] = r5;
    }
  }
  return t3;
}
function cr(e8, t3) {
  return e8.getAttribute(t3);
}
function pr(e8, t3, i2) {
  e8.setAttribute(t3, i2);
}
function mr(e8, t3) {
  e8.removeAttribute(t3);
}
function gr() {
  ne.body.focus(), ne.onselectstart = function() {
    return false;
  };
}
function fr() {
  ne.onselectstart = function() {
    return true;
  };
}
function yr(e8) {
  if (e8 && e8.getBoundingClientRect && e8.parentNode) {
    const t3 = e8.getBoundingClientRect(), i2 = {};
    return ["bottom", "height", "left", "right", "top", "width"].forEach((e9) => {
      void 0 !== t3[e9] && (i2[e9] = t3[e9]);
    }), i2.height || (i2.height = parseFloat(xr(e8, "height"))), i2.width || (i2.width = parseFloat(xr(e8, "width"))), i2;
  }
}
function _r(e8) {
  if (!e8 || e8 && !e8.offsetParent) return { left: 0, top: 0, width: 0, height: 0 };
  const t3 = e8.offsetWidth, i2 = e8.offsetHeight;
  let s3 = 0, n5 = 0;
  for (; e8.offsetParent && e8 !== ne[ln.fullscreenElement]; ) s3 += e8.offsetLeft, n5 += e8.offsetTop, e8 = e8.offsetParent;
  return { left: s3, top: n5, width: t3, height: i2 };
}
function br(e8, t3) {
  const i2 = { x: 0, y: 0 };
  if (Xn) {
    let t4 = e8;
    for (; t4 && "html" !== t4.nodeName.toLowerCase(); ) {
      const e9 = xr(t4, "transform");
      if (/^matrix/.test(e9)) {
        const t5 = e9.slice(7, -1).split(/,\s/).map(Number);
        i2.x += t5[4], i2.y += t5[5];
      } else if (/^matrix3d/.test(e9)) {
        const t5 = e9.slice(9, -1).split(/,\s/).map(Number);
        i2.x += t5[12], i2.y += t5[13];
      }
      if (t4.assignedSlot && t4.assignedSlot.parentElement && _.WebKitCSSMatrix) {
        const e10 = _.getComputedStyle(t4.assignedSlot.parentElement).transform, s4 = new _.WebKitCSSMatrix(e10);
        i2.x += s4.m41, i2.y += s4.m42;
      }
      t4 = t4.parentNode || t4.host;
    }
  }
  const s3 = {}, n5 = _r(t3.target), r5 = _r(e8), a5 = r5.width, o5 = r5.height;
  let l2 = t3.offsetY - (r5.top - n5.top), u3 = t3.offsetX - (r5.left - n5.left);
  return t3.changedTouches && (u3 = t3.changedTouches[0].pageX - r5.left, l2 = t3.changedTouches[0].pageY + r5.top, Xn && (u3 -= i2.x, l2 -= i2.y)), s3.y = 1 - Math.max(0, Math.min(1, l2 / o5)), s3.x = Math.max(0, Math.min(1, u3 / a5)), s3;
}
function vr(e8) {
  return Tn(e8) && 3 === e8.nodeType;
}
function Tr(e8) {
  for (; e8.firstChild; ) e8.removeChild(e8.firstChild);
  return e8;
}
function Sr(e8) {
  return "function" == typeof e8 && (e8 = e8()), (Array.isArray(e8) ? e8 : [e8]).map((e9) => ("function" == typeof e9 && (e9 = e9()), er(e9) || vr(e9) ? e9 : "string" == typeof e9 && /\S/.test(e9) ? ne.createTextNode(e9) : void 0)).filter((e9) => e9);
}
function Er(e8, t3) {
  return Sr(t3).forEach((t4) => e8.appendChild(t4)), e8;
}
function wr(e8, t3) {
  return Er(Tr(e8), t3);
}
function Cr(e8) {
  return void 0 === e8.button && void 0 === e8.buttons || (0 === e8.button && void 0 === e8.buttons || ("mouseup" === e8.type && 0 === e8.button && 0 === e8.buttons || ("mousedown" === e8.type && 0 === e8.button && 0 === e8.buttons || 0 === e8.button && 1 === e8.buttons)));
}
var kr = ir("querySelector");
var Ir = ir("querySelectorAll");
function xr(e8, t3) {
  if (!e8 || !t3) return "";
  if ("function" == typeof _.getComputedStyle) {
    let s3;
    try {
      s3 = _.getComputedStyle(e8);
    } catch (i2) {
      return "";
    }
    return s3 ? s3.getPropertyValue(t3) || s3[t3] : "";
  }
  return "";
}
function Ar(e8) {
  [...ne.styleSheets].forEach((t3) => {
    try {
      const i2 = [...t3.cssRules].map((e9) => e9.cssText).join(""), s3 = ne.createElement("style");
      s3.textContent = i2, e8.document.head.appendChild(s3);
    } catch (i2) {
      const s3 = ne.createElement("link");
      s3.rel = "stylesheet", s3.type = t3.type, s3.media = t3.media.mediaText, s3.href = t3.href, e8.document.head.appendChild(s3);
    }
  });
}
var Dr = Object.freeze({ __proto__: null, isReal: Zn, isEl: er, isInFrame: tr, createEl: sr, textContent: nr, prependTo: rr, hasClass: ar, addClass: or, removeClass: lr, toggleClass: ur, setAttributes: hr, getAttributes: dr, getAttribute: cr, setAttribute: pr, removeAttribute: mr, blockTextSelection: gr, unblockTextSelection: fr, getBoundingClientRect: yr, findPosition: _r, getPointerPosition: br, isTextNode: vr, emptyEl: Tr, normalizeContent: Sr, appendContent: Er, insertContent: wr, isSingleLeftClick: Cr, $: kr, $$: Ir, computedStyle: xr, copyStyleSheetsToWindow: Ar });
var Pr;
var Lr = false;
var Or = function() {
  if (false === Pr.options.autoSetup) return;
  const e8 = Array.prototype.slice.call(ne.getElementsByTagName("video")), t3 = Array.prototype.slice.call(ne.getElementsByTagName("audio")), i2 = Array.prototype.slice.call(ne.getElementsByTagName("video-js")), s3 = e8.concat(t3, i2);
  if (s3 && s3.length > 0) for (let n5 = 0, r5 = s3.length; n5 < r5; n5++) {
    const e9 = s3[n5];
    if (!e9 || !e9.getAttribute) {
      Nr(1);
      break;
    }
    if (void 0 === e9.player) {
      null !== e9.getAttribute("data-setup") && Pr(e9);
    }
  }
  else Lr || Nr(1);
};
function Nr(e8, t3) {
  Zn() && (t3 && (Pr = t3), _.setTimeout(Or, e8));
}
function Rr() {
  Lr = true, _.removeEventListener("load", Rr);
}
Zn() && ("complete" === ne.readyState ? Rr() : _.addEventListener("load", Rr));
var Mr = function(e8) {
  const t3 = ne.createElement("style");
  return t3.className = e8, t3;
};
var Ur = function(e8, t3) {
  e8.styleSheet ? e8.styleSheet.cssText = t3 : e8.textContent = t3;
};
var Br = /* @__PURE__ */ new WeakMap();
var Fr;
var qr = 3;
function jr() {
  return qr++;
}
function $r(e8, t3) {
  if (!Br.has(e8)) return;
  const i2 = Br.get(e8);
  0 === i2.handlers[t3].length && (delete i2.handlers[t3], e8.removeEventListener ? e8.removeEventListener(t3, i2.dispatcher, false) : e8.detachEvent && e8.detachEvent("on" + t3, i2.dispatcher)), Object.getOwnPropertyNames(i2.handlers).length <= 0 && (delete i2.handlers, delete i2.dispatcher, delete i2.disabled), 0 === Object.getOwnPropertyNames(i2).length && Br.delete(e8);
}
function Hr(e8, t3, i2, s3) {
  i2.forEach(function(i3) {
    e8(t3, i3, s3);
  });
}
function Vr(e8) {
  if (e8.fixed_) return e8;
  function t3() {
    return true;
  }
  function i2() {
    return false;
  }
  if (!e8 || !e8.isPropagationStopped || !e8.isImmediatePropagationStopped) {
    const s3 = e8 || _.event;
    e8 = {};
    const n5 = ["layerX", "layerY", "keyLocation", "path", "webkitMovementX", "webkitMovementY", "mozPressure", "mozInputSource"];
    for (const t4 in s3) n5.includes(t4) || "returnValue" === t4 && s3.preventDefault || (e8[t4] = s3[t4]);
    if (e8.target || (e8.target = e8.srcElement || ne), e8.relatedTarget || (e8.relatedTarget = e8.fromElement === e8.target ? e8.toElement : e8.fromElement), e8.preventDefault = function() {
      s3.preventDefault && s3.preventDefault(), e8.returnValue = false, s3.returnValue = false, e8.defaultPrevented = true;
    }, e8.defaultPrevented = false, e8.stopPropagation = function() {
      s3.stopPropagation && s3.stopPropagation(), e8.cancelBubble = true, s3.cancelBubble = true, e8.isPropagationStopped = t3;
    }, e8.isPropagationStopped = i2, e8.stopImmediatePropagation = function() {
      s3.stopImmediatePropagation && s3.stopImmediatePropagation(), e8.isImmediatePropagationStopped = t3, e8.stopPropagation();
    }, e8.isImmediatePropagationStopped = i2, null !== e8.clientX && void 0 !== e8.clientX) {
      const t4 = ne.documentElement, i3 = ne.body;
      e8.pageX = e8.clientX + (t4 && t4.scrollLeft || i3 && i3.scrollLeft || 0) - (t4 && t4.clientLeft || i3 && i3.clientLeft || 0), e8.pageY = e8.clientY + (t4 && t4.scrollTop || i3 && i3.scrollTop || 0) - (t4 && t4.clientTop || i3 && i3.clientTop || 0);
    }
    e8.which = e8.charCode || e8.keyCode, null !== e8.button && void 0 !== e8.button && (e8.button = 1 & e8.button ? 0 : 4 & e8.button ? 1 : 2 & e8.button ? 2 : 0);
  }
  return e8.fixed_ = true, e8;
}
var zr = function() {
  if ("boolean" != typeof Fr) {
    Fr = false;
    try {
      const e8 = Object.defineProperty({}, "passive", { get() {
        Fr = true;
      } });
      _.addEventListener("test", null, e8), _.removeEventListener("test", null, e8);
    } catch (e8) {
    }
  }
  return Fr;
};
var Wr = ["touchstart", "touchmove"];
function Gr(e8, t3, i2) {
  if (Array.isArray(t3)) return Hr(Gr, e8, t3, i2);
  Br.has(e8) || Br.set(e8, {});
  const s3 = Br.get(e8);
  if (s3.handlers || (s3.handlers = {}), s3.handlers[t3] || (s3.handlers[t3] = []), i2.guid || (i2.guid = jr()), s3.handlers[t3].push(i2), s3.dispatcher || (s3.disabled = false, s3.dispatcher = function(t4, i3) {
    if (s3.disabled) return;
    t4 = Vr(t4);
    const n5 = s3.handlers[t4.type];
    if (n5) {
      const s4 = n5.slice(0);
      for (let n6 = 0, a5 = s4.length; n6 < a5 && !t4.isImmediatePropagationStopped(); n6++) try {
        s4[n6].call(e8, t4, i3);
      } catch (r5) {
        gn.error(r5);
      }
    }
  }), 1 === s3.handlers[t3].length) if (e8.addEventListener) {
    let i3 = false;
    zr() && Wr.indexOf(t3) > -1 && (i3 = { passive: true }), e8.addEventListener(t3, s3.dispatcher, i3);
  } else e8.attachEvent && e8.attachEvent("on" + t3, s3.dispatcher);
}
function Xr(e8, t3, i2) {
  if (!Br.has(e8)) return;
  const s3 = Br.get(e8);
  if (!s3.handlers) return;
  if (Array.isArray(t3)) return Hr(Xr, e8, t3, i2);
  const n5 = function(e9, t4) {
    s3.handlers[t4] = [], $r(e9, t4);
  };
  if (void 0 === t3) {
    for (const t4 in s3.handlers) Object.prototype.hasOwnProperty.call(s3.handlers || {}, t4) && n5(e8, t4);
    return;
  }
  const r5 = s3.handlers[t3];
  if (r5) if (i2) {
    if (i2.guid) for (let e9 = 0; e9 < r5.length; e9++) r5[e9].guid === i2.guid && r5.splice(e9--, 1);
    $r(e8, t3);
  } else n5(e8, t3);
}
function Kr(e8, t3, i2) {
  const s3 = Br.has(e8) ? Br.get(e8) : {}, n5 = e8.parentNode || e8.ownerDocument;
  if ("string" == typeof t3 ? t3 = { type: t3, target: e8 } : t3.target || (t3.target = e8), t3 = Vr(t3), s3.dispatcher && s3.dispatcher.call(e8, t3, i2), n5 && !t3.isPropagationStopped() && true === t3.bubbles) Kr.call(null, n5, t3, i2);
  else if (!n5 && !t3.defaultPrevented && t3.target && t3.target[t3.type]) {
    Br.has(t3.target) || Br.set(t3.target, {});
    const e9 = Br.get(t3.target);
    t3.target[t3.type] && (e9.disabled = true, "function" == typeof t3.target[t3.type] && t3.target[t3.type](), e9.disabled = false);
  }
  return !t3.defaultPrevented;
}
function Yr(e8, t3, i2) {
  if (Array.isArray(t3)) return Hr(Yr, e8, t3, i2);
  const s3 = function() {
    Xr(e8, t3, s3), i2.apply(this, arguments);
  };
  s3.guid = i2.guid = i2.guid || jr(), Gr(e8, t3, s3);
}
function Qr(e8, t3, i2) {
  const s3 = function() {
    Xr(e8, t3, s3), i2.apply(this, arguments);
  };
  s3.guid = i2.guid = i2.guid || jr(), Gr(e8, t3, s3);
}
var Jr = Object.freeze({ __proto__: null, fixEvent: Vr, on: Gr, off: Xr, trigger: Kr, one: Yr, any: Qr });
var Zr = 30;
var ea = function(e8, t3, i2) {
  t3.guid || (t3.guid = jr());
  const s3 = t3.bind(e8);
  return s3.guid = i2 ? i2 + "_" + t3.guid : t3.guid, s3;
};
var ta = function(e8, t3) {
  let i2 = _.performance.now();
  return function(...s3) {
    const n5 = _.performance.now();
    n5 - i2 >= t3 && (e8(...s3), i2 = n5);
  };
};
var ia = function(e8, t3, i2, s3 = _) {
  let n5;
  const r5 = () => {
    s3.clearTimeout(n5), n5 = null;
  }, a5 = function() {
    const r6 = this, a6 = arguments;
    let o5 = function() {
      n5 = null, o5 = null, i2 || e8.apply(r6, a6);
    };
    !n5 && i2 && e8.apply(r6, a6), s3.clearTimeout(n5), n5 = s3.setTimeout(o5, t3);
  };
  return a5.cancel = r5, a5;
};
var sa = Object.freeze({ __proto__: null, UPDATE_REFRESH_INTERVAL: Zr, bind_: ea, throttle: ta, debounce: ia });
var na;
var ra = class {
  on(e8, t3) {
    const i2 = this.addEventListener;
    this.addEventListener = () => {
    }, Gr(this, e8, t3), this.addEventListener = i2;
  }
  off(e8, t3) {
    Xr(this, e8, t3);
  }
  one(e8, t3) {
    const i2 = this.addEventListener;
    this.addEventListener = () => {
    }, Yr(this, e8, t3), this.addEventListener = i2;
  }
  any(e8, t3) {
    const i2 = this.addEventListener;
    this.addEventListener = () => {
    }, Qr(this, e8, t3), this.addEventListener = i2;
  }
  trigger(e8) {
    const t3 = e8.type || e8;
    "string" == typeof e8 && (e8 = { type: t3 }), e8 = Vr(e8), this.allowedEvents_[t3] && this["on" + t3] && this["on" + t3](e8), Kr(this, e8);
  }
  queueTrigger(e8) {
    na || (na = /* @__PURE__ */ new Map());
    const t3 = e8.type || e8;
    let i2 = na.get(this);
    i2 || (i2 = /* @__PURE__ */ new Map(), na.set(this, i2));
    const s3 = i2.get(t3);
    i2.delete(t3), _.clearTimeout(s3);
    const n5 = _.setTimeout(() => {
      i2.delete(t3), 0 === i2.size && (i2 = null, na.delete(this)), this.trigger(e8);
    }, 0);
    i2.set(t3, n5);
  }
};
ra.prototype.allowedEvents_ = {}, ra.prototype.addEventListener = ra.prototype.on, ra.prototype.removeEventListener = ra.prototype.off, ra.prototype.dispatchEvent = ra.prototype.trigger;
var aa = (e8) => "function" == typeof e8.name ? e8.name() : "string" == typeof e8.name ? e8.name : e8.name_ ? e8.name_ : e8.constructor && e8.constructor.name ? e8.constructor.name : typeof e8;
var oa = (e8) => e8 instanceof ra || !!e8.eventBusEl_ && ["on", "one", "off", "trigger"].every((t3) => "function" == typeof e8[t3]);
var la = (e8, t3) => {
  oa(e8) ? t3() : (e8.eventedCallbacks || (e8.eventedCallbacks = []), e8.eventedCallbacks.push(t3));
};
var ua = (e8) => "string" == typeof e8 && /\S/.test(e8) || Array.isArray(e8) && !!e8.length;
var ha = (e8, t3, i2) => {
  if (!e8 || !e8.nodeName && !oa(e8)) throw new Error(`Invalid target for ${aa(t3)}#${i2}; must be a DOM node or evented object.`);
};
var da = (e8, t3, i2) => {
  if (!ua(e8)) throw new Error(`Invalid event type for ${aa(t3)}#${i2}; must be a non-empty string or array.`);
};
var ca = (e8, t3, i2) => {
  if ("function" != typeof e8) throw new Error(`Invalid listener for ${aa(t3)}#${i2}; must be a function.`);
};
var pa = (e8, t3, i2) => {
  const s3 = t3.length < 3 || t3[0] === e8 || t3[0] === e8.eventBusEl_;
  let n5, r5, a5;
  return s3 ? (n5 = e8.eventBusEl_, t3.length >= 3 && t3.shift(), [r5, a5] = t3) : (n5 = t3[0], r5 = t3[1], a5 = t3[2]), ha(n5, e8, i2), da(r5, e8, i2), ca(a5, e8, i2), a5 = ea(e8, a5), { isTargetingSelf: s3, target: n5, type: r5, listener: a5 };
};
var ma = (e8, t3, i2, s3) => {
  ha(e8, e8, t3), e8.nodeName ? Jr[t3](e8, i2, s3) : e8[t3](i2, s3);
};
var ga = { on(...e8) {
  const { isTargetingSelf: t3, target: i2, type: s3, listener: n5 } = pa(this, e8, "on");
  if (ma(i2, "on", s3, n5), !t3) {
    const e9 = () => this.off(i2, s3, n5);
    e9.guid = n5.guid;
    const t4 = () => this.off("dispose", e9);
    t4.guid = n5.guid, ma(this, "on", "dispose", e9), ma(i2, "on", "dispose", t4);
  }
}, one(...e8) {
  const { isTargetingSelf: t3, target: i2, type: s3, listener: n5 } = pa(this, e8, "one");
  if (t3) ma(i2, "one", s3, n5);
  else {
    const e9 = (...t4) => {
      this.off(i2, s3, e9), n5.apply(null, t4);
    };
    e9.guid = n5.guid, ma(i2, "one", s3, e9);
  }
}, any(...e8) {
  const { isTargetingSelf: t3, target: i2, type: s3, listener: n5 } = pa(this, e8, "any");
  if (t3) ma(i2, "any", s3, n5);
  else {
    const e9 = (...t4) => {
      this.off(i2, s3, e9), n5.apply(null, t4);
    };
    e9.guid = n5.guid, ma(i2, "any", s3, e9);
  }
}, off(e8, t3, i2) {
  if (!e8 || ua(e8)) Xr(this.eventBusEl_, e8, t3);
  else {
    const s3 = e8, n5 = t3;
    ha(s3, this, "off"), da(n5, this, "off"), ca(i2, this, "off"), i2 = ea(this, i2), this.off("dispose", i2), s3.nodeName ? (Xr(s3, n5, i2), Xr(s3, "dispose", i2)) : oa(s3) && (s3.off(n5, i2), s3.off("dispose", i2));
  }
}, trigger(e8, t3) {
  ha(this.eventBusEl_, this, "trigger");
  const i2 = e8 && "string" != typeof e8 ? e8.type : e8;
  if (!ua(i2)) throw new Error(`Invalid event type for ${aa(this)}#trigger; must be a non-empty string or object with a type key that has a non-empty value.`);
  return Kr(this.eventBusEl_, e8, t3);
} };
function fa(e8, t3 = {}) {
  const { eventBusKey: i2 } = t3;
  if (i2) {
    if (!e8[i2].nodeName) throw new Error(`The eventBusKey "${i2}" does not refer to an element.`);
    e8.eventBusEl_ = e8[i2];
  } else e8.eventBusEl_ = sr("span", { className: "vjs-event-bus" });
  return Object.assign(e8, ga), e8.eventedCallbacks && e8.eventedCallbacks.forEach((e9) => {
    e9();
  }), e8.on("dispose", () => {
    e8.off(), [e8, e8.el_, e8.eventBusEl_].forEach(function(e9) {
      e9 && Br.has(e9) && Br.delete(e9);
    }), _.setTimeout(() => {
      e8.eventBusEl_ = null;
    }, 0);
  }), e8;
}
var ya = { state: {}, setState(e8) {
  let t3;
  return "function" == typeof e8 && (e8 = e8()), bn(e8, (e9, i2) => {
    this.state[i2] !== e9 && (t3 = t3 || {}, t3[i2] = { from: this.state[i2], to: e9 }), this.state[i2] = e9;
  }), t3 && oa(this) && this.trigger({ changes: t3, type: "statechanged" }), t3;
} };
function _a(e8, t3) {
  return Object.assign(e8, ya), e8.state = Object.assign({}, e8.state, t3), "function" == typeof e8.handleStateChanged && oa(e8) && e8.on("statechanged", e8.handleStateChanged), e8;
}
var ba = function(e8) {
  return "string" != typeof e8 ? e8 : e8.replace(/./, (e9) => e9.toLowerCase());
};
var va = function(e8) {
  return "string" != typeof e8 ? e8 : e8.replace(/./, (e9) => e9.toUpperCase());
};
var Ta = function(e8, t3) {
  return va(e8) === va(t3);
};
var Sa = Object.freeze({ __proto__: null, toLowerCase: ba, toTitleCase: va, titleCaseEquals: Ta });
var Ea = class _Ea {
  constructor(e8, t3, i2) {
    if (!e8 && this.play ? this.player_ = e8 = this : this.player_ = e8, this.isDisposed_ = false, this.parentComponent_ = null, this.options_ = En({}, this.options_), t3 = this.options_ = En(this.options_, t3), this.id_ = t3.id || t3.el && t3.el.id, !this.id_) {
      const t4 = e8 && e8.id && e8.id() || "no_player";
      this.id_ = `${t4}_component_${jr()}`;
    }
    this.name_ = t3.name || null, t3.el ? this.el_ = t3.el : false !== t3.createEl && (this.el_ = this.createEl()), t3.className && this.el_ && t3.className.split(" ").forEach((e9) => this.addClass(e9)), ["on", "off", "one", "any", "trigger"].forEach((e9) => {
      this[e9] = void 0;
    }), false !== t3.evented && (fa(this, { eventBusKey: this.el_ ? "el_" : null }), this.handleLanguagechange = this.handleLanguagechange.bind(this), this.on(this.player_, "languagechange", this.handleLanguagechange)), _a(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, this.setTimeoutIds_ = /* @__PURE__ */ new Set(), this.setIntervalIds_ = /* @__PURE__ */ new Set(), this.rafIds_ = /* @__PURE__ */ new Set(), this.namedRafs_ = /* @__PURE__ */ new Map(), this.clearingTimersOnDispose_ = false, false !== t3.initChildren && this.initChildren(), this.ready(i2), false !== t3.reportTouchActivity && this.enableTouchActivity();
  }
  dispose(e8 = {}) {
    if (!this.isDisposed_) {
      if (this.readyQueue_ && (this.readyQueue_.length = 0), this.trigger({ type: "dispose", bubbles: false }), this.isDisposed_ = true, this.children_) for (let e9 = this.children_.length - 1; e9 >= 0; e9--) this.children_[e9].dispose && this.children_[e9].dispose();
      this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.parentComponent_ = null, this.el_ && (this.el_.parentNode && (e8.restoreEl ? this.el_.parentNode.replaceChild(e8.restoreEl, this.el_) : this.el_.parentNode.removeChild(this.el_)), this.el_ = null), this.player_ = null;
    }
  }
  isDisposed() {
    return Boolean(this.isDisposed_);
  }
  player() {
    return this.player_;
  }
  options(e8) {
    return e8 ? (this.options_ = En(this.options_, e8), this.options_) : this.options_;
  }
  el() {
    return this.el_;
  }
  createEl(e8, t3, i2) {
    return sr(e8, t3, i2);
  }
  localize(e8, t3, i2 = e8) {
    const s3 = this.player_.language && this.player_.language(), n5 = this.player_.languages && this.player_.languages(), r5 = n5 && n5[s3], a5 = s3 && s3.split("-")[0], o5 = n5 && n5[a5];
    let l2 = i2;
    return r5 && r5[e8] ? l2 = r5[e8] : o5 && o5[e8] && (l2 = o5[e8]), t3 && (l2 = l2.replace(/\{(\d+)\}/g, function(e9, i3) {
      const s4 = t3[i3 - 1];
      let n6 = s4;
      return void 0 === s4 && (n6 = e9), n6;
    })), l2;
  }
  handleLanguagechange() {
  }
  contentEl() {
    return this.contentEl_ || this.el_;
  }
  id() {
    return this.id_;
  }
  name() {
    return this.name_;
  }
  children() {
    return this.children_;
  }
  getChildById(e8) {
    return this.childIndex_[e8];
  }
  getChild(e8) {
    if (e8) return this.childNameIndex_[e8];
  }
  getDescendant(...e8) {
    e8 = e8.reduce((e9, t4) => e9.concat(t4), []);
    let t3 = this;
    for (let i2 = 0; i2 < e8.length; i2++) if (t3 = t3.getChild(e8[i2]), !t3 || !t3.getChild) return;
    return t3;
  }
  setIcon(e8, t3 = this.el()) {
    if (!this.player_.options_.experimentalSvgIcons) return;
    const i2 = "http://www.w3.org/2000/svg", s3 = sr("span", { className: "vjs-icon-placeholder vjs-svg-icon" }, { "aria-hidden": "true" }), n5 = ne.createElementNS(i2, "svg");
    n5.setAttributeNS(null, "viewBox", "0 0 512 512");
    const r5 = ne.createElementNS(i2, "use");
    return n5.appendChild(r5), r5.setAttributeNS(null, "href", `#vjs-icon-${e8}`), s3.appendChild(n5), this.iconIsSet_ ? t3.replaceChild(s3, t3.querySelector(".vjs-icon-placeholder")) : t3.appendChild(s3), this.iconIsSet_ = true, s3;
  }
  addChild(e8, t3 = {}, i2 = this.children_.length) {
    let s3, n5;
    if ("string" == typeof e8) {
      n5 = va(e8);
      const i3 = t3.componentClass || n5;
      t3.name = n5;
      const r5 = _Ea.getComponent(i3);
      if (!r5) throw new Error(`Component ${i3} does not exist`);
      if ("function" != typeof r5) return null;
      s3 = new r5(this.player_ || this, t3);
    } else s3 = e8;
    if (s3.parentComponent_ && s3.parentComponent_.removeChild(s3), this.children_.splice(i2, 0, s3), s3.parentComponent_ = this, "function" == typeof s3.id && (this.childIndex_[s3.id()] = s3), n5 = n5 || s3.name && va(s3.name()), n5 && (this.childNameIndex_[n5] = s3, this.childNameIndex_[ba(n5)] = s3), "function" == typeof s3.el && s3.el()) {
      let e9 = null;
      this.children_[i2 + 1] && (this.children_[i2 + 1].el_ ? e9 = this.children_[i2 + 1].el_ : er(this.children_[i2 + 1]) && (e9 = this.children_[i2 + 1])), this.contentEl().insertBefore(s3.el(), e9);
    }
    return s3;
  }
  removeChild(e8) {
    if ("string" == typeof e8 && (e8 = this.getChild(e8)), !e8 || !this.children_) return;
    let t3 = false;
    for (let s3 = this.children_.length - 1; s3 >= 0; s3--) if (this.children_[s3] === e8) {
      t3 = true, this.children_.splice(s3, 1);
      break;
    }
    if (!t3) return;
    e8.parentComponent_ = null, this.childIndex_[e8.id()] = null, this.childNameIndex_[va(e8.name())] = null, this.childNameIndex_[ba(e8.name())] = null;
    const i2 = e8.el();
    i2 && i2.parentNode === this.contentEl() && this.contentEl().removeChild(e8.el());
  }
  initChildren() {
    const e8 = this.options_.children;
    if (e8) {
      const t3 = this.options_, i2 = (e9) => {
        const i3 = e9.name;
        let s4 = e9.opts;
        if (void 0 !== t3[i3] && (s4 = t3[i3]), false === s4) return;
        true === s4 && (s4 = {}), s4.playerOptions = this.options_.playerOptions;
        const n6 = this.addChild(i3, s4);
        n6 && (this[i3] = n6);
      };
      let s3;
      const n5 = _Ea.getComponent("Tech");
      s3 = Array.isArray(e8) ? e8 : Object.keys(e8), s3.concat(Object.keys(this.options_).filter(function(e9) {
        return !s3.some(function(t4) {
          return "string" == typeof t4 ? e9 === t4 : e9 === t4.name;
        });
      })).map((t4) => {
        let i3, s4;
        return "string" == typeof t4 ? (i3 = t4, s4 = e8[i3] || this.options_[i3] || {}) : (i3 = t4.name, s4 = t4), { name: i3, opts: s4 };
      }).filter((e9) => {
        const t4 = _Ea.getComponent(e9.opts.componentClass || va(e9.name));
        return t4 && !n5.isTech(t4);
      }).forEach(i2);
    }
  }
  buildCSSClass() {
    return "";
  }
  ready(e8, t3 = false) {
    if (e8) return this.isReady_ ? void (t3 ? e8.call(this) : this.setTimeout(e8, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(e8));
  }
  triggerReady() {
    this.isReady_ = true, this.setTimeout(function() {
      const e8 = this.readyQueue_;
      this.readyQueue_ = [], e8 && e8.length > 0 && e8.forEach(function(e9) {
        e9.call(this);
      }, this), this.trigger("ready");
    }, 1);
  }
  $(e8, t3) {
    return kr(e8, t3 || this.contentEl());
  }
  $$(e8, t3) {
    return Ir(e8, t3 || this.contentEl());
  }
  hasClass(e8) {
    return ar(this.el_, e8);
  }
  addClass(...e8) {
    or(this.el_, ...e8);
  }
  removeClass(...e8) {
    lr(this.el_, ...e8);
  }
  toggleClass(e8, t3) {
    ur(this.el_, e8, t3);
  }
  show() {
    this.removeClass("vjs-hidden");
  }
  hide() {
    this.addClass("vjs-hidden");
  }
  lockShowing() {
    this.addClass("vjs-lock-showing");
  }
  unlockShowing() {
    this.removeClass("vjs-lock-showing");
  }
  getAttribute(e8) {
    return cr(this.el_, e8);
  }
  setAttribute(e8, t3) {
    pr(this.el_, e8, t3);
  }
  removeAttribute(e8) {
    mr(this.el_, e8);
  }
  width(e8, t3) {
    return this.dimension("width", e8, t3);
  }
  height(e8, t3) {
    return this.dimension("height", e8, t3);
  }
  dimensions(e8, t3) {
    this.width(e8, true), this.height(t3);
  }
  dimension(e8, t3, i2) {
    if (void 0 !== t3) return null !== t3 && t3 == t3 || (t3 = 0), -1 !== ("" + t3).indexOf("%") || -1 !== ("" + t3).indexOf("px") ? this.el_.style[e8] = t3 : this.el_.style[e8] = "auto" === t3 ? "" : t3 + "px", void (i2 || this.trigger("componentresize"));
    if (!this.el_) return 0;
    const s3 = this.el_.style[e8], n5 = s3.indexOf("px");
    return -1 !== n5 ? parseInt(s3.slice(0, n5), 10) : parseInt(this.el_["offset" + va(e8)], 10);
  }
  currentDimension(e8) {
    let t3 = 0;
    if ("width" !== e8 && "height" !== e8) throw new Error("currentDimension only accepts width or height value");
    if (t3 = xr(this.el_, e8), t3 = parseFloat(t3), 0 === t3 || isNaN(t3)) {
      const i2 = `offset${va(e8)}`;
      t3 = this.el_[i2];
    }
    return t3;
  }
  currentDimensions() {
    return { width: this.currentDimension("width"), height: this.currentDimension("height") };
  }
  currentWidth() {
    return this.currentDimension("width");
  }
  currentHeight() {
    return this.currentDimension("height");
  }
  getPositions() {
    const e8 = this.el_.getBoundingClientRect();
    return { boundingClientRect: { x: e8.x, y: e8.y, width: e8.width, height: e8.height, top: e8.top, right: e8.right, bottom: e8.bottom, left: e8.left }, center: { x: e8.left + e8.width / 2, y: e8.top + e8.height / 2, width: 0, height: 0, top: e8.top + e8.height / 2, right: e8.left + e8.width / 2, bottom: e8.top + e8.height / 2, left: e8.left + e8.width / 2 } };
  }
  focus() {
    this.el_.focus();
  }
  blur() {
    this.el_.blur();
  }
  handleKeyDown(e8) {
    this.player_ && ("Tab" === e8.key || this.player_.options_.playerOptions.spatialNavigation && this.player_.options_.playerOptions.spatialNavigation.enabled || e8.stopPropagation(), this.player_.handleKeyDown(e8));
  }
  handleKeyPress(e8) {
    this.handleKeyDown(e8);
  }
  emitTapEvents() {
    let e8 = 0, t3 = null;
    const i2 = 10, s3 = 200;
    let n5;
    this.on("touchstart", function(i3) {
      1 === i3.touches.length && (t3 = { pageX: i3.touches[0].pageX, pageY: i3.touches[0].pageY }, e8 = _.performance.now(), n5 = true);
    }), this.on("touchmove", function(e9) {
      if (e9.touches.length > 1) n5 = false;
      else if (t3) {
        const s4 = e9.touches[0].pageX - t3.pageX, r6 = e9.touches[0].pageY - t3.pageY;
        Math.sqrt(s4 * s4 + r6 * r6) > i2 && (n5 = false);
      }
    });
    const r5 = function() {
      n5 = false;
    };
    this.on("touchleave", r5), this.on("touchcancel", r5), this.on("touchend", function(i3) {
      if (t3 = null, true === n5) {
        _.performance.now() - e8 < s3 && (i3.preventDefault(), this.trigger("tap"));
      }
    });
  }
  enableTouchActivity() {
    if (!this.player() || !this.player().reportUserActivity) return;
    const e8 = ea(this.player(), this.player().reportUserActivity);
    let t3;
    this.on("touchstart", function() {
      e8(), this.clearInterval(t3), t3 = this.setInterval(e8, 250);
    });
    const i2 = function(i3) {
      e8(), this.clearInterval(t3);
    };
    this.on("touchmove", e8), this.on("touchend", i2), this.on("touchcancel", i2);
  }
  setTimeout(e8, t3) {
    var i2;
    return e8 = ea(this, e8), this.clearTimersOnDispose_(), i2 = _.setTimeout(() => {
      this.setTimeoutIds_.has(i2) && this.setTimeoutIds_.delete(i2), e8();
    }, t3), this.setTimeoutIds_.add(i2), i2;
  }
  clearTimeout(e8) {
    return this.setTimeoutIds_.has(e8) && (this.setTimeoutIds_.delete(e8), _.clearTimeout(e8)), e8;
  }
  setInterval(e8, t3) {
    e8 = ea(this, e8), this.clearTimersOnDispose_();
    const i2 = _.setInterval(e8, t3);
    return this.setIntervalIds_.add(i2), i2;
  }
  clearInterval(e8) {
    return this.setIntervalIds_.has(e8) && (this.setIntervalIds_.delete(e8), _.clearInterval(e8)), e8;
  }
  requestAnimationFrame(e8) {
    var t3;
    return this.clearTimersOnDispose_(), e8 = ea(this, e8), t3 = _.requestAnimationFrame(() => {
      this.rafIds_.has(t3) && this.rafIds_.delete(t3), e8();
    }), this.rafIds_.add(t3), t3;
  }
  requestNamedAnimationFrame(e8, t3) {
    this.namedRafs_.has(e8) && this.cancelNamedAnimationFrame(e8), this.clearTimersOnDispose_(), t3 = ea(this, t3);
    const i2 = this.requestAnimationFrame(() => {
      t3(), this.namedRafs_.has(e8) && this.namedRafs_.delete(e8);
    });
    return this.namedRafs_.set(e8, i2), e8;
  }
  cancelNamedAnimationFrame(e8) {
    this.namedRafs_.has(e8) && (this.cancelAnimationFrame(this.namedRafs_.get(e8)), this.namedRafs_.delete(e8));
  }
  cancelAnimationFrame(e8) {
    return this.rafIds_.has(e8) && (this.rafIds_.delete(e8), _.cancelAnimationFrame(e8)), e8;
  }
  clearTimersOnDispose_() {
    this.clearingTimersOnDispose_ || (this.clearingTimersOnDispose_ = true, this.one("dispose", () => {
      [["namedRafs_", "cancelNamedAnimationFrame"], ["rafIds_", "cancelAnimationFrame"], ["setTimeoutIds_", "clearTimeout"], ["setIntervalIds_", "clearInterval"]].forEach(([e8, t3]) => {
        this[e8].forEach((e9, i2) => this[t3](i2));
      }), this.clearingTimersOnDispose_ = false;
    }));
  }
  getIsDisabled() {
    return Boolean(this.el_.disabled);
  }
  getIsExpresslyInert() {
    return this.el_.inert && !this.el_.ownerDocument.documentElement.inert;
  }
  getIsFocusable(e8) {
    return (e8 || this.el_).tabIndex >= 0 && !(this.getIsDisabled() || this.getIsExpresslyInert());
  }
  getIsAvailableToBeFocused(e8) {
    function t3(e9) {
      const t4 = _.getComputedStyle(e9, null), i3 = t4.getPropertyValue("visibility");
      return "none" !== t4.getPropertyValue("display") && !["hidden", "collapse"].includes(i3);
    }
    function i2(e9) {
      return !!t3(e9.parentElement) && !(!t3(e9) || "0" === e9.style.opacity || "0px" === _.getComputedStyle(e9).height || "0px" === _.getComputedStyle(e9).width);
    }
    function s3(e9) {
      if (e9.offsetWidth + e9.offsetHeight + e9.getBoundingClientRect().height + e9.getBoundingClientRect().width === 0) return false;
      const t4 = { x: e9.getBoundingClientRect().left + e9.offsetWidth / 2, y: e9.getBoundingClientRect().top + e9.offsetHeight / 2 };
      if (t4.x < 0) return false;
      if (t4.x > (ne.documentElement.clientWidth || _.innerWidth)) return false;
      if (t4.y < 0) return false;
      if (t4.y > (ne.documentElement.clientHeight || _.innerHeight)) return false;
      let i3 = ne.elementFromPoint(t4.x, t4.y);
      for (; i3; ) {
        if (i3 === e9) return true;
        if (!i3.parentNode) return false;
        i3 = i3.parentNode;
      }
    }
    return e8 || (e8 = this.el()), !(!s3(e8) || !i2(e8) || e8.parentElement && !(e8.tabIndex >= 0));
  }
  static registerComponent(e8, t3) {
    if ("string" != typeof e8 || !e8) throw new Error(`Illegal component name, "${e8}"; must be a non-empty string.`);
    const i2 = _Ea.getComponent("Tech"), s3 = i2 && i2.isTech(t3), n5 = _Ea === t3 || _Ea.prototype.isPrototypeOf(t3.prototype);
    if (s3 || !n5) {
      let t4;
      throw t4 = s3 ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error(`Illegal component, "${e8}"; ${t4}.`);
    }
    e8 = va(e8), _Ea.components_ || (_Ea.components_ = {});
    const r5 = _Ea.getComponent("Player");
    if ("Player" === e8 && r5 && r5.players) {
      const e9 = r5.players, t4 = Object.keys(e9);
      if (e9 && t4.length > 0 && t4.map((t5) => e9[t5]).every(Boolean)) throw new Error("Can not register Player component after player has been created.");
    }
    return _Ea.components_[e8] = t3, _Ea.components_[ba(e8)] = t3, t3;
  }
  static getComponent(e8) {
    if (e8 && _Ea.components_) return _Ea.components_[e8];
  }
};
function wa(e8, t3, i2) {
  if ("number" != typeof t3 || t3 < 0 || t3 > i2) throw new Error(`Failed to execute '${e8}' on 'TimeRanges': The index provided (${t3}) is non-numeric or out of bounds (0-${i2}).`);
}
function Ca(e8, t3, i2, s3) {
  return wa(e8, s3, i2.length - 1), i2[s3][t3];
}
function ka(e8) {
  let t3;
  return t3 = void 0 === e8 || 0 === e8.length ? { length: 0, start() {
    throw new Error("This TimeRanges object is empty");
  }, end() {
    throw new Error("This TimeRanges object is empty");
  } } : { length: e8.length, start: Ca.bind(null, "start", 0, e8), end: Ca.bind(null, "end", 1, e8) }, _.Symbol && _.Symbol.iterator && (t3[_.Symbol.iterator] = () => (e8 || []).values()), t3;
}
function Ia(e8, t3) {
  return Array.isArray(e8) ? ka(e8) : void 0 === e8 || void 0 === t3 ? ka() : ka([[e8, t3]]);
}
Ea.registerComponent("Component", Ea);
var xa = function(e8, t3) {
  e8 = e8 < 0 ? 0 : e8;
  let i2 = Math.floor(e8 % 60), s3 = Math.floor(e8 / 60 % 60), n5 = Math.floor(e8 / 3600);
  const r5 = Math.floor(t3 / 60 % 60), a5 = Math.floor(t3 / 3600);
  return (isNaN(e8) || e8 === 1 / 0) && (n5 = s3 = i2 = "-"), n5 = n5 > 0 || a5 > 0 ? n5 + ":" : "", s3 = ((n5 || r5 >= 10) && s3 < 10 ? "0" + s3 : s3) + ":", i2 = i2 < 10 ? "0" + i2 : i2, n5 + s3 + i2;
};
var Aa = xa;
function Da(e8) {
  Aa = e8;
}
function Pa() {
  Aa = xa;
}
function La(e8, t3 = e8) {
  return Aa(e8, t3);
}
var Oa = Object.freeze({ __proto__: null, createTimeRanges: Ia, createTimeRange: Ia, setFormatTime: Da, resetFormatTime: Pa, formatTime: La });
function Na(e8, t3) {
  let i2, s3, n5 = 0;
  if (!t3) return 0;
  e8 && e8.length || (e8 = Ia(0, 0));
  for (let r5 = 0; r5 < e8.length; r5++) i2 = e8.start(r5), s3 = e8.end(r5), s3 > t3 && (s3 = t3), n5 += s3 - i2;
  return n5 / t3;
}
function Ra(e8) {
  if (e8 instanceof Ra) return e8;
  "number" == typeof e8 ? this.code = e8 : "string" == typeof e8 ? this.message = e8 : Tn(e8) && ("number" == typeof e8.code && (this.code = e8.code), Object.assign(this, e8)), this.message || (this.message = Ra.defaultMessages[this.code] || "");
}
function Ma(e8) {
  return null != e8 && "function" == typeof e8.then;
}
function Ua(e8) {
  Ma(e8) && e8.then(null, (e9) => {
  });
}
Ra.prototype.code = 0, Ra.prototype.message = "", Ra.prototype.status = null, Ra.prototype.metadata = null, Ra.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], Ra.defaultMessages = { 1: "You aborted the media playback", 2: "A network error caused the media download to fail part-way.", 3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.", 4: "The media could not be loaded, either because the server or network failed or because the format is not supported.", 5: "The media is encrypted and we do not have the keys to decrypt it." }, Ra.MEDIA_ERR_CUSTOM = 0, Ra.prototype.MEDIA_ERR_CUSTOM = 0, Ra.MEDIA_ERR_ABORTED = 1, Ra.prototype.MEDIA_ERR_ABORTED = 1, Ra.MEDIA_ERR_NETWORK = 2, Ra.prototype.MEDIA_ERR_NETWORK = 2, Ra.MEDIA_ERR_DECODE = 3, Ra.prototype.MEDIA_ERR_DECODE = 3, Ra.MEDIA_ERR_SRC_NOT_SUPPORTED = 4, Ra.prototype.MEDIA_ERR_SRC_NOT_SUPPORTED = 4, Ra.MEDIA_ERR_ENCRYPTED = 5, Ra.prototype.MEDIA_ERR_ENCRYPTED = 5;
var Ba = function(e8) {
  return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce((t3, i2, s3) => (e8[i2] && (t3[i2] = e8[i2]), t3), { cues: e8.cues && Array.prototype.map.call(e8.cues, function(e9) {
    return { startTime: e9.startTime, endTime: e9.endTime, text: e9.text, id: e9.id };
  }) });
};
var Fa = { textTracksToJson: function(e8) {
  const t3 = e8.$$("track"), i2 = Array.prototype.map.call(t3, (e9) => e9.track);
  return Array.prototype.map.call(t3, function(e9) {
    const t4 = Ba(e9.track);
    return e9.src && (t4.src = e9.src), t4;
  }).concat(Array.prototype.filter.call(e8.textTracks(), function(e9) {
    return -1 === i2.indexOf(e9);
  }).map(Ba));
}, jsonToTextTracks: function(e8, t3) {
  return e8.forEach(function(e9) {
    const i2 = t3.addRemoteTextTrack(e9).track;
    !e9.src && e9.cues && e9.cues.forEach((e10) => i2.addCue(e10));
  }), t3.textTracks();
}, trackToJson_: Ba };
var qa = "vjs-modal-dialog";
var ja = class extends Ea {
  constructor(e8, t3) {
    super(e8, t3), this.handleKeyDown_ = (e9) => this.handleKeyDown(e9), this.close_ = (e9) => this.close(e9), this.opened_ = this.hasBeenOpened_ = this.hasBeenFilled_ = false, this.closeable(!this.options_.uncloseable), this.content(this.options_.content), this.contentEl_ = sr("div", { className: `${qa}-content` }, { role: "document" }), this.descEl_ = sr("p", { className: `${qa}-description vjs-control-text`, id: this.el().getAttribute("aria-describedby") }), nr(this.descEl_, this.description()), this.el_.appendChild(this.descEl_), this.el_.appendChild(this.contentEl_);
  }
  createEl() {
    return super.createEl("div", { className: this.buildCSSClass(), tabIndex: -1 }, { "aria-describedby": `${this.id()}_description`, "aria-hidden": "true", "aria-label": this.label(), role: "dialog", "aria-live": "polite" });
  }
  dispose() {
    this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, super.dispose();
  }
  buildCSSClass() {
    return `${qa} vjs-hidden ${super.buildCSSClass()}`;
  }
  label() {
    return this.localize(this.options_.label || "Modal Window");
  }
  description() {
    let e8 = this.options_.description || this.localize("This is a modal window.");
    return this.closeable() && (e8 += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), e8;
  }
  open() {
    if (this.opened_) return void (this.options_.fillAlways && this.fill());
    const e8 = this.player();
    this.trigger("beforemodalopen"), this.opened_ = true, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !e8.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && e8.pause(), this.on("keydown", this.handleKeyDown_), this.hadControls_ = e8.controls(), e8.controls(false), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = true;
  }
  opened(e8) {
    return "boolean" == typeof e8 && this[e8 ? "open" : "close"](), this.opened_;
  }
  close() {
    if (!this.opened_) return;
    const e8 = this.player();
    this.trigger("beforemodalclose"), this.opened_ = false, this.wasPlaying_ && this.options_.pauseOnOpen && e8.play(), this.off("keydown", this.handleKeyDown_), this.hadControls_ && e8.controls(true), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger({ type: "modalclose", bubbles: true }), this.conditionalBlur_(), this.options_.temporary && this.dispose();
  }
  closeable(e8) {
    if ("boolean" == typeof e8) {
      const t3 = this.closeable_ = !!e8;
      let i2 = this.getChild("closeButton");
      if (t3 && !i2) {
        const e9 = this.contentEl_;
        this.contentEl_ = this.el_, i2 = this.addChild("closeButton", { controlText: "Close Modal Dialog" }), this.contentEl_ = e9, this.on(i2, "close", this.close_);
      }
      !t3 && i2 && (this.off(i2, "close", this.close_), this.removeChild(i2), i2.dispose());
    }
    return this.closeable_;
  }
  fill() {
    this.fillWith(this.content());
  }
  fillWith(e8) {
    const t3 = this.contentEl(), i2 = t3.parentNode, s3 = t3.nextSibling;
    this.trigger("beforemodalfill"), this.hasBeenFilled_ = true, i2.removeChild(t3), this.empty(), wr(t3, e8), this.trigger("modalfill"), s3 ? i2.insertBefore(t3, s3) : i2.appendChild(t3);
    const n5 = this.getChild("closeButton");
    n5 && i2.appendChild(n5.el_), this.trigger("aftermodalfill");
  }
  empty() {
    this.trigger("beforemodalempty"), Tr(this.contentEl()), this.trigger("modalempty");
  }
  content(e8) {
    return void 0 !== e8 && (this.content_ = e8), this.content_;
  }
  conditionalFocus_() {
    const e8 = ne.activeElement, t3 = this.player_.el_;
    this.previouslyActiveEl_ = null, (t3.contains(e8) || t3 === e8) && (this.previouslyActiveEl_ = e8, this.focus());
  }
  conditionalBlur_() {
    this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null);
  }
  handleKeyDown(e8) {
    if (this.trigger({ type: "modalKeydown", originalEvent: e8, target: this, bubbles: true }), e8.stopPropagation(), "Escape" === e8.key && this.closeable()) return e8.preventDefault(), void this.close();
    if ("Tab" !== e8.key) return;
    const t3 = this.focusableEls_(), i2 = this.el_.querySelector(":focus");
    let s3;
    for (let n5 = 0; n5 < t3.length; n5++) if (i2 === t3[n5]) {
      s3 = n5;
      break;
    }
    ne.activeElement === this.el_ && (s3 = 0), e8.shiftKey && 0 === s3 ? (t3[t3.length - 1].focus(), e8.preventDefault()) : e8.shiftKey || s3 !== t3.length - 1 || (t3[0].focus(), e8.preventDefault());
  }
  focusableEls_() {
    const e8 = this.el_.querySelectorAll("*");
    return Array.prototype.filter.call(e8, (e9) => (e9 instanceof _.HTMLAnchorElement || e9 instanceof _.HTMLAreaElement) && e9.hasAttribute("href") || (e9 instanceof _.HTMLInputElement || e9 instanceof _.HTMLSelectElement || e9 instanceof _.HTMLTextAreaElement || e9 instanceof _.HTMLButtonElement) && !e9.hasAttribute("disabled") || e9 instanceof _.HTMLIFrameElement || e9 instanceof _.HTMLObjectElement || e9 instanceof _.HTMLEmbedElement || e9.hasAttribute("tabindex") && -1 !== e9.getAttribute("tabindex") || e9.hasAttribute("contenteditable"));
  }
};
ja.prototype.options_ = { pauseOnOpen: true, temporary: true }, Ea.registerComponent("ModalDialog", ja);
var $a = class extends ra {
  constructor(e8 = []) {
    super(), this.tracks_ = [], Object.defineProperty(this, "length", { get() {
      return this.tracks_.length;
    } });
    for (let t3 = 0; t3 < e8.length; t3++) this.addTrack(e8[t3]);
  }
  addTrack(e8) {
    const t3 = this.tracks_.length;
    "" + t3 in this || Object.defineProperty(this, t3, { get() {
      return this.tracks_[t3];
    } }), -1 === this.tracks_.indexOf(e8) && (this.tracks_.push(e8), this.trigger({ track: e8, type: "addtrack", target: this })), e8.labelchange_ = () => {
      this.trigger({ track: e8, type: "labelchange", target: this });
    }, oa(e8) && e8.addEventListener("labelchange", e8.labelchange_);
  }
  removeTrack(e8) {
    let t3;
    for (let i2 = 0, s3 = this.length; i2 < s3; i2++) if (this[i2] === e8) {
      t3 = this[i2], t3.off && t3.off(), this.tracks_.splice(i2, 1);
      break;
    }
    t3 && this.trigger({ track: t3, type: "removetrack", target: this });
  }
  getTrackById(e8) {
    let t3 = null;
    for (let i2 = 0, s3 = this.length; i2 < s3; i2++) {
      const s4 = this[i2];
      if (s4.id === e8) {
        t3 = s4;
        break;
      }
    }
    return t3;
  }
};
$a.prototype.allowedEvents_ = { change: "change", addtrack: "addtrack", removetrack: "removetrack", labelchange: "labelchange" };
for (const kg in $a.prototype.allowedEvents_) $a.prototype["on" + kg] = null;
var Ha = function(e8, t3) {
  for (let i2 = 0; i2 < e8.length; i2++) Object.keys(e8[i2]).length && t3.id !== e8[i2].id && (e8[i2].enabled = false);
};
var Va = class extends $a {
  constructor(e8 = []) {
    for (let t3 = e8.length - 1; t3 >= 0; t3--) if (e8[t3].enabled) {
      Ha(e8, e8[t3]);
      break;
    }
    super(e8), this.changing_ = false;
  }
  addTrack(e8) {
    e8.enabled && Ha(this, e8), super.addTrack(e8), e8.addEventListener && (e8.enabledChange_ = () => {
      this.changing_ || (this.changing_ = true, Ha(this, e8), this.changing_ = false, this.trigger("change"));
    }, e8.addEventListener("enabledchange", e8.enabledChange_));
  }
  removeTrack(e8) {
    super.removeTrack(e8), e8.removeEventListener && e8.enabledChange_ && (e8.removeEventListener("enabledchange", e8.enabledChange_), e8.enabledChange_ = null);
  }
};
var za = function(e8, t3) {
  for (let i2 = 0; i2 < e8.length; i2++) Object.keys(e8[i2]).length && t3.id !== e8[i2].id && (e8[i2].selected = false);
};
var Wa = class extends $a {
  constructor(e8 = []) {
    for (let t3 = e8.length - 1; t3 >= 0; t3--) if (e8[t3].selected) {
      za(e8, e8[t3]);
      break;
    }
    super(e8), this.changing_ = false, Object.defineProperty(this, "selectedIndex", { get() {
      for (let e9 = 0; e9 < this.length; e9++) if (this[e9].selected) return e9;
      return -1;
    }, set() {
    } });
  }
  addTrack(e8) {
    e8.selected && za(this, e8), super.addTrack(e8), e8.addEventListener && (e8.selectedChange_ = () => {
      this.changing_ || (this.changing_ = true, za(this, e8), this.changing_ = false, this.trigger("change"));
    }, e8.addEventListener("selectedchange", e8.selectedChange_));
  }
  removeTrack(e8) {
    super.removeTrack(e8), e8.removeEventListener && e8.selectedChange_ && (e8.removeEventListener("selectedchange", e8.selectedChange_), e8.selectedChange_ = null);
  }
};
var Ga = class extends $a {
  addTrack(e8) {
    super.addTrack(e8), this.queueChange_ || (this.queueChange_ = () => this.queueTrigger("change")), this.triggerSelectedlanguagechange || (this.triggerSelectedlanguagechange_ = () => this.trigger("selectedlanguagechange")), e8.addEventListener("modechange", this.queueChange_);
    -1 === ["metadata", "chapters"].indexOf(e8.kind) && e8.addEventListener("modechange", this.triggerSelectedlanguagechange_);
  }
  removeTrack(e8) {
    super.removeTrack(e8), e8.removeEventListener && (this.queueChange_ && e8.removeEventListener("modechange", this.queueChange_), this.selectedlanguagechange_ && e8.removeEventListener("modechange", this.triggerSelectedlanguagechange_));
  }
};
var Xa = class {
  constructor(e8 = []) {
    this.trackElements_ = [], Object.defineProperty(this, "length", { get() {
      return this.trackElements_.length;
    } });
    for (let t3 = 0, i2 = e8.length; t3 < i2; t3++) this.addTrackElement_(e8[t3]);
  }
  addTrackElement_(e8) {
    const t3 = this.trackElements_.length;
    "" + t3 in this || Object.defineProperty(this, t3, { get() {
      return this.trackElements_[t3];
    } }), -1 === this.trackElements_.indexOf(e8) && this.trackElements_.push(e8);
  }
  getTrackElementByTrack_(e8) {
    let t3;
    for (let i2 = 0, s3 = this.trackElements_.length; i2 < s3; i2++) if (e8 === this.trackElements_[i2].track) {
      t3 = this.trackElements_[i2];
      break;
    }
    return t3;
  }
  removeTrackElement_(e8) {
    for (let t3 = 0, i2 = this.trackElements_.length; t3 < i2; t3++) if (e8 === this.trackElements_[t3]) {
      this.trackElements_[t3].track && "function" == typeof this.trackElements_[t3].track.off && this.trackElements_[t3].track.off(), "function" == typeof this.trackElements_[t3].off && this.trackElements_[t3].off(), this.trackElements_.splice(t3, 1);
      break;
    }
  }
};
var Ka = class _Ka {
  constructor(e8) {
    _Ka.prototype.setCues_.call(this, e8), Object.defineProperty(this, "length", { get() {
      return this.length_;
    } });
  }
  setCues_(e8) {
    const t3 = this.length || 0;
    let i2 = 0;
    const s3 = e8.length;
    this.cues_ = e8, this.length_ = e8.length;
    const n5 = function(e9) {
      "" + e9 in this || Object.defineProperty(this, "" + e9, { get() {
        return this.cues_[e9];
      } });
    };
    if (t3 < s3) for (i2 = t3; i2 < s3; i2++) n5.call(this, i2);
  }
  getCueById(e8) {
    let t3 = null;
    for (let i2 = 0, s3 = this.length; i2 < s3; i2++) {
      const s4 = this[i2];
      if (s4.id === e8) {
        t3 = s4;
        break;
      }
    }
    return t3;
  }
};
var Ya = { alternative: "alternative", captions: "captions", main: "main", sign: "sign", subtitles: "subtitles", commentary: "commentary" };
var Qa = { alternative: "alternative", descriptions: "descriptions", main: "main", "main-desc": "main-desc", translation: "translation", commentary: "commentary" };
var Ja = { subtitles: "subtitles", captions: "captions", descriptions: "descriptions", chapters: "chapters", metadata: "metadata" };
var Za = { disabled: "disabled", hidden: "hidden", showing: "showing" };
var eo = class extends ra {
  constructor(e8 = {}) {
    super();
    const t3 = { id: e8.id || "vjs_track_" + jr(), kind: e8.kind || "", language: e8.language || "" };
    let i2 = e8.label || "";
    for (const s3 in t3) Object.defineProperty(this, s3, { get: () => t3[s3], set() {
    } });
    Object.defineProperty(this, "label", { get: () => i2, set(e9) {
      e9 !== i2 && (i2 = e9, this.trigger("labelchange"));
    } });
  }
};
var to = function(e8) {
  return new URL(e8, ne.baseURI);
};
var io = function(e8) {
  return new URL(e8, ne.baseURI).href;
};
var so = function(e8) {
  if ("string" == typeof e8) {
    const t3 = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(e8);
    if (t3) return t3.pop().toLowerCase();
  }
  return "";
};
var no = function(e8, t3 = _.location) {
  return to(e8).origin !== t3.origin;
};
var ro = Object.freeze({ __proto__: null, parseUrl: to, getAbsoluteURL: io, getFileExtension: so, isCrossOrigin: no });
var ao = function(e8, t3) {
  const i2 = new _.WebVTT.Parser(_, _.vttjs, _.WebVTT.StringDecoder()), s3 = [];
  i2.oncue = function(e9) {
    t3.addCue(e9);
  }, i2.onparsingerror = function(e9) {
    s3.push(e9);
  }, i2.onflush = function() {
    t3.trigger({ type: "loadeddata", target: t3 });
  }, i2.parse(e8), s3.length > 0 && (_.console && _.console.groupCollapsed && _.console.groupCollapsed(`Text Track parsing errors for ${t3.src}`), s3.forEach((e9) => gn.error(e9)), _.console && _.console.groupEnd && _.console.groupEnd()), i2.flush();
};
var oo = function(e8, t3) {
  const i2 = { uri: e8 }, s3 = no(e8);
  s3 && (i2.cors = s3);
  const n5 = "use-credentials" === t3.tech_.crossOrigin();
  n5 && (i2.withCredentials = n5), Ee(i2, ea(this, function(e9, i3, s4) {
    if (e9) return gn.error(e9, i3);
    t3.loaded_ = true, "function" != typeof _.WebVTT ? t3.tech_ && t3.tech_.any(["vttjsloaded", "vttjserror"], (e10) => {
      if ("vttjserror" !== e10.type) return ao(s4, t3);
      gn.error(`vttjs failed to load, stopping trying to process ${t3.src}`);
    }) : ao(s4, t3);
  }));
};
var lo = class extends eo {
  constructor(e8 = {}) {
    if (!e8.tech) throw new Error("A tech was not provided.");
    const t3 = En(e8, { kind: Ja[e8.kind] || "subtitles", language: e8.language || e8.srclang || "" });
    let i2 = Za[t3.mode] || "disabled";
    const s3 = t3.default;
    "metadata" !== t3.kind && "chapters" !== t3.kind || (i2 = "hidden"), super(t3), this.tech_ = t3.tech, this.cues_ = [], this.activeCues_ = [], this.preload_ = false !== this.tech_.preloadTextTracks;
    const n5 = new Ka(this.cues_), r5 = new Ka(this.activeCues_);
    let a5 = false;
    this.timeupdateHandler = ea(this, function(e9 = {}) {
      this.tech_.isDisposed() || (this.tech_.isReady_ ? (this.activeCues = this.activeCues, a5 && (this.trigger("cuechange"), a5 = false), "timeupdate" !== e9.type && (this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler))) : "timeupdate" !== e9.type && (this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler)));
    });
    const o5 = () => {
      this.stopTracking();
    };
    this.tech_.one("dispose", o5), "disabled" !== i2 && this.startTracking(), Object.defineProperties(this, { default: { get: () => s3, set() {
    } }, mode: { get: () => i2, set(e9) {
      Za[e9] && i2 !== e9 && (i2 = e9, this.preload_ || "disabled" === i2 || 0 !== this.cues.length || oo(this.src, this), this.stopTracking(), "disabled" !== i2 && this.startTracking(), this.trigger("modechange"));
    } }, cues: { get() {
      return this.loaded_ ? n5 : null;
    }, set() {
    } }, activeCues: { get() {
      if (!this.loaded_) return null;
      if (0 === this.cues.length) return r5;
      const e9 = this.tech_.currentTime(), t4 = [];
      for (let i3 = 0, s4 = this.cues.length; i3 < s4; i3++) {
        const s5 = this.cues[i3];
        s5.startTime <= e9 && s5.endTime >= e9 && t4.push(s5);
      }
      if (a5 = false, t4.length !== this.activeCues_.length) a5 = true;
      else for (let i3 = 0; i3 < t4.length; i3++) -1 === this.activeCues_.indexOf(t4[i3]) && (a5 = true);
      return this.activeCues_ = t4, r5.setCues_(this.activeCues_), r5;
    }, set() {
    } } }), t3.src ? (this.src = t3.src, this.preload_ || (this.loaded_ = true), (this.preload_ || "subtitles" !== t3.kind && "captions" !== t3.kind) && oo(this.src, this)) : this.loaded_ = true;
  }
  startTracking() {
    this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler), this.tech_.on("timeupdate", this.timeupdateHandler);
  }
  stopTracking() {
    this.rvf_ && (this.tech_.cancelVideoFrameCallback(this.rvf_), this.rvf_ = void 0), this.tech_.off("timeupdate", this.timeupdateHandler);
  }
  addCue(e8) {
    let t3 = e8;
    if (!("getCueAsHTML" in t3)) {
      t3 = new _.vttjs.VTTCue(e8.startTime, e8.endTime, e8.text);
      for (const i3 in e8) i3 in t3 || (t3[i3] = e8[i3]);
      t3.id = e8.id, t3.originalCue_ = e8;
    }
    const i2 = this.tech_.textTracks();
    for (let s3 = 0; s3 < i2.length; s3++) i2[s3] !== this && i2[s3].removeCue(t3);
    this.cues_.push(t3), this.cues.setCues_(this.cues_);
  }
  removeCue(e8) {
    let t3 = this.cues_.length;
    for (; t3--; ) {
      const i2 = this.cues_[t3];
      if (i2 === e8 || i2.originalCue_ && i2.originalCue_ === e8) {
        this.cues_.splice(t3, 1), this.cues.setCues_(this.cues_);
        break;
      }
    }
  }
};
lo.prototype.allowedEvents_ = { cuechange: "cuechange" };
var uo = class extends eo {
  constructor(e8 = {}) {
    const t3 = En(e8, { kind: Qa[e8.kind] || "" });
    super(t3);
    let i2 = false;
    Object.defineProperty(this, "enabled", { get: () => i2, set(e9) {
      "boolean" == typeof e9 && e9 !== i2 && (i2 = e9, this.trigger("enabledchange"));
    } }), t3.enabled && (this.enabled = t3.enabled), this.loaded_ = true;
  }
};
var ho = class extends eo {
  constructor(e8 = {}) {
    const t3 = En(e8, { kind: Ya[e8.kind] || "" });
    super(t3);
    let i2 = false;
    Object.defineProperty(this, "selected", { get: () => i2, set(e9) {
      "boolean" == typeof e9 && e9 !== i2 && (i2 = e9, this.trigger("selectedchange"));
    } }), t3.selected && (this.selected = t3.selected);
  }
};
var co = class _co extends ra {
  constructor(e8 = {}) {
    let t3;
    super();
    const i2 = new lo(e8);
    this.kind = i2.kind, this.src = i2.src, this.srclang = i2.language, this.label = i2.label, this.default = i2.default, Object.defineProperties(this, { readyState: { get: () => t3 }, track: { get: () => i2 } }), t3 = _co.NONE, i2.addEventListener("loadeddata", () => {
      t3 = _co.LOADED, this.trigger({ type: "load", target: this });
    });
  }
};
co.prototype.allowedEvents_ = { load: "load" }, co.NONE = 0, co.LOADING = 1, co.LOADED = 2, co.ERROR = 3;
var po = { audio: { ListClass: Va, TrackClass: uo, capitalName: "Audio" }, video: { ListClass: Wa, TrackClass: ho, capitalName: "Video" }, text: { ListClass: Ga, TrackClass: lo, capitalName: "Text" } };
Object.keys(po).forEach(function(e8) {
  po[e8].getterName = `${e8}Tracks`, po[e8].privateName = `${e8}Tracks_`;
});
var mo = { remoteText: { ListClass: Ga, TrackClass: lo, capitalName: "RemoteText", getterName: "remoteTextTracks", privateName: "remoteTextTracks_" }, remoteTextEl: { ListClass: Xa, TrackClass: co, capitalName: "RemoteTextTrackEls", getterName: "remoteTextTrackEls", privateName: "remoteTextTrackEls_" } };
var go = Object.assign({}, po, mo);
function fo(e8, t3, i2, s3, n5 = {}) {
  const r5 = e8.textTracks();
  n5.kind = t3, i2 && (n5.label = i2), s3 && (n5.language = s3), n5.tech = e8;
  const a5 = new go.text.TrackClass(n5);
  return r5.addTrack(a5), a5;
}
mo.names = Object.keys(mo), po.names = Object.keys(po), go.names = [].concat(mo.names).concat(po.names);
var yo = class _yo extends Ea {
  constructor(e8 = {}, t3 = function() {
  }) {
    e8.reportTouchActivity = false, super(null, e8, t3), this.onDurationChange_ = (e9) => this.onDurationChange(e9), this.trackProgress_ = (e9) => this.trackProgress(e9), this.trackCurrentTime_ = (e9) => this.trackCurrentTime(e9), this.stopTrackingCurrentTime_ = (e9) => this.stopTrackingCurrentTime(e9), this.disposeSourceHandler_ = (e9) => this.disposeSourceHandler(e9), this.queuedHanders_ = /* @__PURE__ */ new Set(), this.hasStarted_ = false, this.on("playing", function() {
      this.hasStarted_ = true;
    }), this.on("loadstart", function() {
      this.hasStarted_ = false;
    }), go.names.forEach((t4) => {
      const i2 = go[t4];
      e8 && e8[i2.getterName] && (this[i2.privateName] = e8[i2.getterName]);
    }), this.featuresProgressEvents || this.manualProgressOn(), this.featuresTimeupdateEvents || this.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach((t4) => {
      false === e8[`native${t4}Tracks`] && (this[`featuresNative${t4}Tracks`] = false);
    }), false === e8.nativeCaptions || false === e8.nativeTextTracks ? this.featuresNativeTextTracks = false : true !== e8.nativeCaptions && true !== e8.nativeTextTracks || (this.featuresNativeTextTracks = true), this.featuresNativeTextTracks || this.emulateTextTracks(), this.preloadTextTracks = false !== e8.preloadTextTracks, this.autoRemoteTextTracks_ = new go.text.ListClass(), this.initTrackListeners(), e8.nativeControlsForTouch || this.emitTapEvents(), this.constructor && (this.name_ = this.constructor.name || "Unknown Tech");
  }
  triggerSourceset(e8) {
    this.isReady_ || this.one("ready", () => this.setTimeout(() => this.triggerSourceset(e8), 1)), this.trigger({ src: e8, type: "sourceset" });
  }
  manualProgressOn() {
    this.on("durationchange", this.onDurationChange_), this.manualProgress = true, this.one("ready", this.trackProgress_);
  }
  manualProgressOff() {
    this.manualProgress = false, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange_);
  }
  trackProgress(e8) {
    this.stopTrackingProgress(), this.progressInterval = this.setInterval(ea(this, function() {
      const e9 = this.bufferedPercent();
      this.bufferedPercent_ !== e9 && this.trigger("progress"), this.bufferedPercent_ = e9, 1 === e9 && this.stopTrackingProgress();
    }), 500);
  }
  onDurationChange(e8) {
    this.duration_ = this.duration();
  }
  buffered() {
    return Ia(0, 0);
  }
  bufferedPercent() {
    return Na(this.buffered(), this.duration_);
  }
  stopTrackingProgress() {
    this.clearInterval(this.progressInterval);
  }
  manualTimeUpdatesOn() {
    this.manualTimeUpdates = true, this.on("play", this.trackCurrentTime_), this.on("pause", this.stopTrackingCurrentTime_);
  }
  manualTimeUpdatesOff() {
    this.manualTimeUpdates = false, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime_), this.off("pause", this.stopTrackingCurrentTime_);
  }
  trackCurrentTime() {
    this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
      this.trigger({ type: "timeupdate", target: this, manuallyTriggered: true });
    }, 250);
  }
  stopTrackingCurrentTime() {
    this.clearInterval(this.currentTimeInterval), this.trigger({ type: "timeupdate", target: this, manuallyTriggered: true });
  }
  dispose() {
    this.clearTracks(po.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), super.dispose();
  }
  clearTracks(e8) {
    (e8 = [].concat(e8)).forEach((e9) => {
      const t3 = this[`${e9}Tracks`]() || [];
      let i2 = t3.length;
      for (; i2--; ) {
        const s3 = t3[i2];
        "text" === e9 && this.removeRemoteTextTrack(s3), t3.removeTrack(s3);
      }
    });
  }
  cleanupAutoTextTracks() {
    const e8 = this.autoRemoteTextTracks_ || [];
    let t3 = e8.length;
    for (; t3--; ) {
      const i2 = e8[t3];
      this.removeRemoteTextTrack(i2);
    }
  }
  reset() {
  }
  crossOrigin() {
  }
  setCrossOrigin() {
  }
  error(e8) {
    return void 0 !== e8 && (this.error_ = new Ra(e8), this.trigger("error")), this.error_;
  }
  played() {
    return this.hasStarted_ ? Ia(0, 0) : Ia();
  }
  play() {
  }
  setScrubbing(e8) {
  }
  scrubbing() {
  }
  setCurrentTime(e8) {
    this.manualTimeUpdates && this.trigger({ type: "timeupdate", target: this, manuallyTriggered: true });
  }
  initTrackListeners() {
    po.names.forEach((e8) => {
      const t3 = po[e8], i2 = () => {
        this.trigger(`${e8}trackchange`);
      }, s3 = this[t3.getterName]();
      s3.addEventListener("removetrack", i2), s3.addEventListener("addtrack", i2), this.on("dispose", () => {
        s3.removeEventListener("removetrack", i2), s3.removeEventListener("addtrack", i2);
      });
    });
  }
  addWebVttScript_() {
    if (!_.WebVTT) if (ne.body.contains(this.el())) {
      if (!this.options_["vtt.js"] && Sn(Me) && Object.keys(Me).length > 0) return void this.trigger("vttjsloaded");
      const e8 = ne.createElement("script");
      e8.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js", e8.onload = () => {
        this.trigger("vttjsloaded");
      }, e8.onerror = () => {
        this.trigger("vttjserror");
      }, this.on("dispose", () => {
        e8.onload = null, e8.onerror = null;
      }), _.WebVTT = true, this.el().parentNode.appendChild(e8);
    } else this.ready(this.addWebVttScript_);
  }
  emulateTextTracks() {
    const e8 = this.textTracks(), t3 = this.remoteTextTracks(), i2 = (t4) => e8.addTrack(t4.track), s3 = (t4) => e8.removeTrack(t4.track);
    t3.on("addtrack", i2), t3.on("removetrack", s3), this.addWebVttScript_();
    const n5 = () => this.trigger("texttrackchange"), r5 = () => {
      n5();
      for (let t4 = 0; t4 < e8.length; t4++) {
        const i3 = e8[t4];
        i3.removeEventListener("cuechange", n5), "showing" === i3.mode && i3.addEventListener("cuechange", n5);
      }
    };
    r5(), e8.addEventListener("change", r5), e8.addEventListener("addtrack", r5), e8.addEventListener("removetrack", r5), this.on("dispose", function() {
      t3.off("addtrack", i2), t3.off("removetrack", s3), e8.removeEventListener("change", r5), e8.removeEventListener("addtrack", r5), e8.removeEventListener("removetrack", r5);
      for (let t4 = 0; t4 < e8.length; t4++) {
        e8[t4].removeEventListener("cuechange", n5);
      }
    });
  }
  addTextTrack(e8, t3, i2) {
    if (!e8) throw new Error("TextTrack kind is required but was not provided");
    return fo(this, e8, t3, i2);
  }
  createRemoteTextTrack(e8) {
    const t3 = En(e8, { tech: this });
    return new mo.remoteTextEl.TrackClass(t3);
  }
  addRemoteTextTrack(e8 = {}, t3) {
    const i2 = this.createRemoteTextTrack(e8);
    return "boolean" != typeof t3 && (t3 = false), this.remoteTextTrackEls().addTrackElement_(i2), this.remoteTextTracks().addTrack(i2.track), false === t3 && this.ready(() => this.autoRemoteTextTracks_.addTrack(i2.track)), i2;
  }
  removeRemoteTextTrack(e8) {
    const t3 = this.remoteTextTrackEls().getTrackElementByTrack_(e8);
    this.remoteTextTrackEls().removeTrackElement_(t3), this.remoteTextTracks().removeTrack(e8), this.autoRemoteTextTracks_.removeTrack(e8);
  }
  getVideoPlaybackQuality() {
    return {};
  }
  requestPictureInPicture() {
    return Promise.reject();
  }
  disablePictureInPicture() {
    return true;
  }
  setDisablePictureInPicture() {
  }
  requestVideoFrameCallback(e8) {
    const t3 = jr();
    return !this.isReady_ || this.paused() ? (this.queuedHanders_.add(t3), this.one("playing", () => {
      this.queuedHanders_.has(t3) && (this.queuedHanders_.delete(t3), e8());
    })) : this.requestNamedAnimationFrame(t3, e8), t3;
  }
  cancelVideoFrameCallback(e8) {
    this.queuedHanders_.has(e8) ? this.queuedHanders_.delete(e8) : this.cancelNamedAnimationFrame(e8);
  }
  setPoster() {
  }
  playsinline() {
  }
  setPlaysinline() {
  }
  overrideNativeAudioTracks(e8) {
  }
  overrideNativeVideoTracks(e8) {
  }
  canPlayType(e8) {
    return "";
  }
  static canPlayType(e8) {
    return "";
  }
  static canPlaySource(e8, t3) {
    return _yo.canPlayType(e8.type);
  }
  static isTech(e8) {
    return e8.prototype instanceof _yo || e8 instanceof _yo || e8 === _yo;
  }
  static registerTech(e8, t3) {
    if (_yo.techs_ || (_yo.techs_ = {}), !_yo.isTech(t3)) throw new Error(`Tech ${e8} must be a Tech`);
    if (!_yo.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
    if (!_yo.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
    return e8 = va(e8), _yo.techs_[e8] = t3, _yo.techs_[ba(e8)] = t3, "Tech" !== e8 && _yo.defaultTechOrder_.push(e8), t3;
  }
  static getTech(e8) {
    if (e8) return _yo.techs_ && _yo.techs_[e8] ? _yo.techs_[e8] : (e8 = va(e8), _ && _.videojs && _.videojs[e8] ? (gn.warn(`The ${e8} tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)`), _.videojs[e8]) : void 0);
  }
};
go.names.forEach(function(e8) {
  const t3 = go[e8];
  yo.prototype[t3.getterName] = function() {
    return this[t3.privateName] = this[t3.privateName] || new t3.ListClass(), this[t3.privateName];
  };
}), yo.prototype.featuresVolumeControl = true, yo.prototype.featuresMuteControl = true, yo.prototype.featuresFullscreenResize = false, yo.prototype.featuresPlaybackRate = false, yo.prototype.featuresProgressEvents = false, yo.prototype.featuresSourceset = false, yo.prototype.featuresTimeupdateEvents = false, yo.prototype.featuresNativeTextTracks = false, yo.prototype.featuresVideoFrameCallback = false, yo.withSourceHandlers = function(e8) {
  e8.registerSourceHandler = function(t3, i2) {
    let s3 = e8.sourceHandlers;
    s3 || (s3 = e8.sourceHandlers = []), void 0 === i2 && (i2 = s3.length), s3.splice(i2, 0, t3);
  }, e8.canPlayType = function(t3) {
    const i2 = e8.sourceHandlers || [];
    let s3;
    for (let e9 = 0; e9 < i2.length; e9++) if (s3 = i2[e9].canPlayType(t3), s3) return s3;
    return "";
  }, e8.selectSourceHandler = function(t3, i2) {
    const s3 = e8.sourceHandlers || [];
    let n5;
    for (let e9 = 0; e9 < s3.length; e9++) if (n5 = s3[e9].canHandleSource(t3, i2), n5) return s3[e9];
    return null;
  }, e8.canPlaySource = function(t3, i2) {
    const s3 = e8.selectSourceHandler(t3, i2);
    return s3 ? s3.canHandleSource(t3, i2) : "";
  };
  ["seekable", "seeking", "duration"].forEach(function(e9) {
    const t3 = this[e9];
    "function" == typeof t3 && (this[e9] = function() {
      return this.sourceHandler_ && this.sourceHandler_[e9] ? this.sourceHandler_[e9].apply(this.sourceHandler_, arguments) : t3.apply(this, arguments);
    });
  }, e8.prototype), e8.prototype.setSource = function(t3) {
    let i2 = e8.selectSourceHandler(t3, this.options_);
    i2 || (e8.nativeSourceHandler ? i2 = e8.nativeSourceHandler : gn.error("No source handler found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler_), i2 !== e8.nativeSourceHandler && (this.currentSource_ = t3), this.sourceHandler_ = i2.handleSource(t3, this, this.options_), this.one("dispose", this.disposeSourceHandler_);
  }, e8.prototype.disposeSourceHandler = function() {
    this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null);
  };
}, Ea.registerComponent("Tech", yo), yo.registerTech("Tech", yo), yo.defaultTechOrder_ = [];
var _o = {};
var bo = {};
var vo = {};
function To(e8, t3) {
  _o[e8] = _o[e8] || [], _o[e8].push(t3);
}
function So(e8, t3, i2) {
  e8.setTimeout(() => No(t3, _o[t3.type], i2, e8), 1);
}
function Eo(e8, t3) {
  e8.forEach((e9) => e9.setTech && e9.setTech(t3));
}
function wo(e8, t3, i2) {
  return e8.reduceRight(Do(i2), t3[i2]());
}
function Co(e8, t3, i2, s3) {
  return t3[i2](e8.reduce(Do(i2), s3));
}
function ko(e8, t3, i2, s3 = null) {
  const n5 = "call" + va(i2), r5 = e8.reduce(Do(n5), s3), a5 = r5 === vo, o5 = a5 ? null : t3[i2](r5);
  return Po(e8, i2, o5, a5), o5;
}
var Io = { buffered: 1, currentTime: 1, duration: 1, muted: 1, played: 1, paused: 1, seekable: 1, volume: 1, ended: 1 };
var xo = { setCurrentTime: 1, setMuted: 1, setVolume: 1 };
var Ao = { play: 1, pause: 1 };
function Do(e8) {
  return (t3, i2) => t3 === vo ? vo : i2[e8] ? i2[e8](t3) : t3;
}
function Po(e8, t3, i2, s3) {
  for (let n5 = e8.length - 1; n5 >= 0; n5--) {
    const r5 = e8[n5];
    r5[t3] && r5[t3](s3, i2);
  }
}
function Lo(e8) {
  bo.hasOwnProperty(e8.id()) && delete bo[e8.id()];
}
function Oo(e8, t3) {
  const i2 = bo[e8.id()];
  let s3 = null;
  if (null == i2) return s3 = t3(e8), bo[e8.id()] = [[t3, s3]], s3;
  for (let n5 = 0; n5 < i2.length; n5++) {
    const [e9, r5] = i2[n5];
    e9 === t3 && (s3 = r5);
  }
  return null === s3 && (s3 = t3(e8), i2.push([t3, s3])), s3;
}
function No(e8 = {}, t3 = [], i2, s3, n5 = [], r5 = false) {
  const [a5, ...o5] = t3;
  if ("string" == typeof a5) No(e8, _o[a5], i2, s3, n5, r5);
  else if (a5) {
    const t4 = Oo(s3, a5);
    if (!t4.setSource) return n5.push(t4), No(e8, o5, i2, s3, n5, r5);
    t4.setSource(Object.assign({}, e8), function(a6, l2) {
      if (a6) return No(e8, o5, i2, s3, n5, r5);
      n5.push(t4), No(l2, e8.type === l2.type ? o5 : _o[l2.type], i2, s3, n5, r5);
    });
  } else o5.length ? No(e8, o5, i2, s3, n5, r5) : r5 ? i2(e8, n5) : No(e8, _o["*"], i2, s3, n5, true);
}
var Ro = { opus: "video/ogg", ogv: "video/ogg", mp4: "video/mp4", mov: "video/mp4", m4v: "video/mp4", mkv: "video/x-matroska", m4a: "audio/mp4", mp3: "audio/mpeg", aac: "audio/aac", caf: "audio/x-caf", flac: "audio/flac", oga: "audio/ogg", wav: "audio/wav", m3u8: "application/x-mpegURL", mpd: "application/dash+xml", jpg: "image/jpeg", jpeg: "image/jpeg", gif: "image/gif", png: "image/png", svg: "image/svg+xml", webp: "image/webp" };
var Mo = function(e8 = "") {
  const t3 = so(e8);
  return Ro[t3.toLowerCase()] || "";
};
var Uo = (e8, t3) => {
  if (!t3) return "";
  if (e8.cache_.source.src === t3 && e8.cache_.source.type) return e8.cache_.source.type;
  const i2 = e8.cache_.sources.filter((e9) => e9.src === t3);
  if (i2.length) return i2[0].type;
  const s3 = e8.$$("source");
  for (let n5 = 0; n5 < s3.length; n5++) {
    const e9 = s3[n5];
    if (e9.type && e9.src && e9.src === t3) return e9.type;
  }
  return Mo(t3);
};
var Bo = function(e8) {
  if (Array.isArray(e8)) {
    let t3 = [];
    e8.forEach(function(e9) {
      e9 = Bo(e9), Array.isArray(e9) ? t3 = t3.concat(e9) : Tn(e9) && t3.push(e9);
    }), e8 = t3;
  } else e8 = "string" == typeof e8 && e8.trim() ? [Fo({ src: e8 })] : Tn(e8) && "string" == typeof e8.src && e8.src && e8.src.trim() ? [Fo(e8)] : [];
  return e8;
};
function Fo(e8) {
  if (!e8.type) {
    const t3 = Mo(e8.src);
    t3 && (e8.type = t3);
  }
  return e8;
}
var qo = '<svg xmlns="http://www.w3.org/2000/svg">\n  <defs>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-play">\n      <path d="M16 10v28l22-14z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-pause">\n      <path d="M12 38h8V10h-8v28zm16-28v28h8V10h-8z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-audio">\n      <path d="M24 2C14.06 2 6 10.06 6 20v14c0 3.31 2.69 6 6 6h6V24h-8v-4c0-7.73 6.27-14 14-14s14 6.27 14 14v4h-8v16h6c3.31 0 6-2.69 6-6V20c0-9.94-8.06-18-18-18z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-captions">\n      <path d="M38 8H10c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM22 22h-3v-1h-4v6h4v-1h3v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2zm14 0h-3v-1h-4v6h4v-1h3v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-subtitles">\n      <path d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-fullscreen-enter">\n      <path d="M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4H10v10zm24 14h-6v4h10V28h-4v6zm-6-24v4h6v6h4V10H28z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-fullscreen-exit">\n      <path d="M10 32h6v6h4V28H10v4zm6-16h-6v4h10V10h-4v6zm12 22h4v-6h6v-4H28v10zm4-22v-6h-4v10h10v-4h-6z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-play-circle">\n      <path d="M20 33l12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-mute">\n      <path d="M33 24c0-3.53-2.04-6.58-5-8.05v4.42l4.91 4.91c.06-.42.09-.85.09-1.28zm5 0c0 1.88-.41 3.65-1.08 5.28l3.03 3.03C41.25 29.82 42 27 42 24c0-8.56-5.99-15.72-14-17.54v4.13c5.78 1.72 10 7.07 10 13.41zM8.55 6L6 8.55 15.45 18H6v12h8l10 10V26.55l8.51 8.51c-1.34 1.03-2.85 1.86-4.51 2.36v4.13a17.94 17.94 0 0 0 7.37-3.62L39.45 42 42 39.45l-18-18L8.55 6zM24 8l-4.18 4.18L24 16.36V8z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-low">\n      <path d="M14 18v12h8l10 10V8L22 18h-8z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-medium">\n      <path d="M37 24c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zm-27-6v12h8l10 10V8L18 18h-8z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-high">\n      <path d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-spinner">\n      <path d="M18.8 21l9.53-16.51C26.94 4.18 25.49 4 24 4c-4.8 0-9.19 1.69-12.64 4.51l7.33 12.69.11-.2zm24.28-3c-1.84-5.85-6.3-10.52-11.99-12.68L23.77 18h19.31zm.52 2H28.62l.58 1 9.53 16.5C41.99 33.94 44 29.21 44 24c0-1.37-.14-2.71-.4-4zm-26.53 4l-7.8-13.5C6.01 14.06 4 18.79 4 24c0 1.37.14 2.71.4 4h14.98l-2.31-4zM4.92 30c1.84 5.85 6.3 10.52 11.99 12.68L24.23 30H4.92zm22.54 0l-7.8 13.51c1.4.31 2.85.49 4.34.49 4.8 0 9.19-1.69 12.64-4.51L29.31 26.8 27.46 30z"></path>\n    </symbol>\n    <symbol viewBox="0 0 24 24" id="vjs-icon-hd">\n      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-chapters">\n      <path d="M6 26h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm8 8h28v-4H14v4zm0 8h28v-4H14v4zm0-20v4h28v-4H14z"></path>\n    </symbol>\n    <symbol viewBox="0 0 40 40" id="vjs-icon-downloading">\n      <path d="M18.208 36.875q-3.208-.292-5.979-1.729-2.771-1.438-4.812-3.729-2.042-2.292-3.188-5.229-1.146-2.938-1.146-6.23 0-6.583 4.334-11.416 4.333-4.834 10.833-5.5v3.166q-5.167.75-8.583 4.646Q6.25 14.75 6.25 19.958q0 5.209 3.396 9.104 3.396 3.896 8.562 4.646zM20 28.417L11.542 20l2.083-2.083 4.917 4.916v-11.25h2.916v11.25l4.875-4.916L28.417 20zm1.792 8.458v-3.167q1.833-.25 3.541-.958 1.709-.708 3.167-1.875l2.333 2.292q-1.958 1.583-4.25 2.541-2.291.959-4.791 1.167zm6.791-27.792q-1.541-1.125-3.25-1.854-1.708-.729-3.541-1.021V3.042q2.5.25 4.77 1.208 2.271.958 4.271 2.5zm4.584 21.584l-2.25-2.25q1.166-1.5 1.854-3.209.687-1.708.937-3.541h3.209q-.292 2.5-1.229 4.791-.938 2.292-2.521 4.209zm.541-12.417q-.291-1.833-.958-3.562-.667-1.73-1.833-3.188l2.375-2.208q1.541 1.916 2.458 4.208.917 2.292 1.167 4.75z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download">\n      <path d="M10.8 40.55q-1.35 0-2.375-1T7.4 37.15v-7.7h3.4v7.7h26.35v-7.7h3.4v7.7q0 1.4-1 2.4t-2.4 1zM24 32.1L13.9 22.05l2.45-2.45 5.95 5.95V7.15h3.4v18.4l5.95-5.95 2.45 2.45z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download-done">\n      <path d="M9.8 40.5v-3.45h28.4v3.45zm9.2-9.05L7.4 19.85l2.45-2.35L19 26.65l19.2-19.2 2.4 2.4z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download-off">\n      <path d="M4.9 4.75L43.25 43.1 41 45.3l-4.75-4.75q-.05.05-.075.025-.025-.025-.075-.025H10.8q-1.35 0-2.375-1T7.4 37.15v-7.7h3.4v7.7h22.05l-7-7-1.85 1.8L13.9 21.9l1.85-1.85L2.7 7zm26.75 14.7l2.45 2.45-3.75 3.8-2.45-2.5zM25.7 7.15V21.1l-3.4-3.45V7.15z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-share">\n      <path d="M36 32.17c-1.52 0-2.89.59-3.93 1.54L17.82 25.4c.11-.45.18-.92.18-1.4s-.07-.95-.18-1.4l14.1-8.23c1.07 1 2.5 1.62 4.08 1.62 3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6c0 .48.07.95.18 1.4l-14.1 8.23c-1.07-1-2.5-1.62-4.08-1.62-3.31 0-6 2.69-6 6s2.69 6 6 6c1.58 0 3.01-.62 4.08-1.62l14.25 8.31c-.1.42-.16.86-.16 1.31A5.83 5.83 0 1 0 36 32.17z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-cog">\n      <path d="M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97L29 4.84c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3a14.8 14.8 0 0 0-3.38 1.97L9.9 10.1a1 1 0 0 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31C9.06 22.69 9 23.34 9 24s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3a14.8 14.8 0 0 0 3.38-1.97l4.98 2.01a1 1 0 0 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zM24 31c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-square">\n      <path d="M36 8H12c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H12V12h24v24z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-circle">\n      <circle cx="24" cy="24" r="20"></circle>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-circle-outline">\n      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-circle-inner-circle">\n      <path d="M24 4C12.97 4 4 12.97 4 24s8.97 20 20 20 20-8.97 20-20S35.03 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm6-16c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6 6 2.69 6 6z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-cancel">\n      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 27.17L31.17 34 24 26.83 16.83 34 14 31.17 21.17 24 14 16.83 16.83 14 24 21.17 31.17 14 34 16.83 26.83 24 34 31.17z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-replay">\n      <path d="M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-repeat">\n      <path d="M14 14h20v6l8-8-8-8v6H10v12h4v-8zm20 20H14v-6l-8 8 8 8v-6h24V26h-4v8z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-5">\n      <path d="M17.689 98l-8.697 8.696 8.697 8.697 2.486-2.485-4.32-4.319h1.302c4.93 0 9.071 1.722 12.424 5.165 3.352 3.443 5.029 7.638 5.029 12.584h3.55c0-2.958-.553-5.73-1.658-8.313-1.104-2.583-2.622-4.841-4.555-6.774-1.932-1.932-4.19-3.45-6.773-4.555-2.584-1.104-5.355-1.657-8.313-1.657H15.5l4.615-4.615zm-8.08 21.659v13.861h11.357v5.008H9.609V143h12.7c.834 0 1.55-.298 2.146-.894.596-.597.895-1.31.895-2.145v-7.781c0-.835-.299-1.55-.895-2.147a2.929 2.929 0 0 0-2.147-.894h-8.227v-5.096H25.35v-4.384z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-10">\n      <path d="M42.315 125.63c0-4.997-1.694-9.235-5.08-12.713-3.388-3.479-7.571-5.218-12.552-5.218h-1.315l4.363 4.363-2.51 2.51-8.787-8.786L25.221 97l2.45 2.45-4.662 4.663h1.375c2.988 0 5.788.557 8.397 1.673 2.61 1.116 4.892 2.65 6.844 4.602 1.953 1.953 3.487 4.234 4.602 6.844 1.116 2.61 1.674 5.41 1.674 8.398zM8.183 142v-19.657H3.176V117.8h9.643V142zm13.63 0c-1.156 0-2.127-.393-2.912-1.178-.778-.778-1.168-1.746-1.168-2.902v-16.04c0-1.156.393-2.127 1.178-2.912.779-.779 1.746-1.168 2.902-1.168h7.696c1.156 0 2.126.392 2.911 1.177.779.78 1.168 1.747 1.168 2.903v16.04c0 1.156-.392 2.127-1.177 2.912-.779.779-1.746 1.168-2.902 1.168zm.556-4.636h6.583v-15.02H22.37z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-30">\n      <path d="M26.047 97l-8.733 8.732 8.733 8.733 2.496-2.494-4.336-4.338h1.307c4.95 0 9.108 1.73 12.474 5.187 3.367 3.458 5.051 7.668 5.051 12.635h3.565c0-2.97-.556-5.751-1.665-8.346-1.109-2.594-2.633-4.862-4.574-6.802-1.94-1.941-4.208-3.466-6.803-4.575-2.594-1.109-5.375-1.664-8.345-1.664H23.85l4.634-4.634zM2.555 117.531v4.688h10.297v5.25H5.873v4.687h6.979v5.156H2.555V142H13.36c1.061 0 1.95-.395 2.668-1.186.718-.79 1.076-1.772 1.076-2.94v-16.218c0-1.168-.358-2.149-1.076-2.94-.717-.79-1.607-1.185-2.668-1.185zm22.482.14c-1.149 0-2.11.39-2.885 1.165-.78.78-1.172 1.744-1.172 2.893v15.943c0 1.149.388 2.11 1.163 2.885.78.78 1.745 1.172 2.894 1.172h7.649c1.148 0 2.11-.388 2.884-1.163.78-.78 1.17-1.745 1.17-2.894v-15.943c0-1.15-.386-2.111-1.16-2.885-.78-.78-1.746-1.172-2.894-1.172zm.553 4.518h6.545v14.93H25.59z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-5">\n      <path d="M29.508 97l-2.431 2.43 4.625 4.625h-1.364c-2.965 0-5.742.554-8.332 1.66-2.589 1.107-4.851 2.629-6.788 4.566-1.937 1.937-3.458 4.2-4.565 6.788-1.107 2.59-1.66 5.367-1.66 8.331h3.557c0-4.957 1.68-9.16 5.04-12.611 3.36-3.45 7.51-5.177 12.451-5.177h1.304l-4.326 4.33 2.49 2.49 8.715-8.716zm-9.783 21.61v13.89h11.382v5.018H19.725V142h12.727a2.93 2.93 0 0 0 2.15-.896 2.93 2.93 0 0 0 .896-2.15v-7.798c0-.837-.299-1.554-.896-2.152a2.93 2.93 0 0 0-2.15-.896h-8.245V123h11.29v-4.392z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-10">\n      <path d="M23.119 97l-2.386 2.383 4.538 4.538h-1.339c-2.908 0-5.633.543-8.173 1.63-2.54 1.085-4.76 2.577-6.66 4.478-1.9 1.9-3.392 4.12-4.478 6.66-1.085 2.54-1.629 5.264-1.629 8.172h3.49c0-4.863 1.648-8.986 4.944-12.372 3.297-3.385 7.368-5.078 12.216-5.078h1.279l-4.245 4.247 2.443 2.442 8.55-8.55zm-9.52 21.45v4.42h4.871V142h4.513v-23.55zm18.136 0c-1.125 0-2.066.377-2.824 1.135-.764.764-1.148 1.709-1.148 2.834v15.612c0 1.124.38 2.066 1.139 2.824.764.764 1.708 1.145 2.833 1.145h7.489c1.125 0 2.066-.378 2.824-1.136.764-.764 1.145-1.709 1.145-2.833v-15.612c0-1.125-.378-2.067-1.136-2.825-.764-.764-1.708-1.145-2.833-1.145zm.54 4.42h6.408v14.617h-6.407z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-30">\n      <path d="M25.549 97l-2.437 2.434 4.634 4.635H26.38c-2.97 0-5.753.555-8.347 1.664-2.594 1.109-4.861 2.633-6.802 4.574-1.94 1.94-3.465 4.207-4.574 6.802-1.109 2.594-1.664 5.377-1.664 8.347h3.565c0-4.967 1.683-9.178 5.05-12.636 3.366-3.458 7.525-5.187 12.475-5.187h1.307l-4.335 4.338 2.495 2.494 8.732-8.732zm-11.553 20.53v4.689h10.297v5.249h-6.978v4.688h6.978v5.156H13.996V142h10.808c1.06 0 1.948-.395 2.666-1.186.718-.79 1.077-1.771 1.077-2.94v-16.217c0-1.169-.36-2.15-1.077-2.94-.718-.79-1.605-1.186-2.666-1.186zm21.174.168c-1.149 0-2.11.389-2.884 1.163-.78.78-1.172 1.745-1.172 2.894v15.942c0 1.15.388 2.11 1.162 2.885.78.78 1.745 1.17 2.894 1.17h7.649c1.149 0 2.11-.386 2.885-1.16.78-.78 1.17-1.746 1.17-2.895v-15.942c0-1.15-.387-2.11-1.161-2.885-.78-.78-1.745-1.172-2.894-1.172zm.552 4.516h6.542v14.931h-6.542z"></path>\n    </symbol>\n    <symbol viewBox="0 0 512 512" id="vjs-icon-audio-description">\n      <g fill-rule="evenodd"><path d="M227.29 381.351V162.993c50.38-1.017 89.108-3.028 117.631 17.126 27.374 19.342 48.734 56.965 44.89 105.325-4.067 51.155-41.335 94.139-89.776 98.475-24.085 2.155-71.972 0-71.972 0s-.84-1.352-.773-2.568m48.755-54.804c31.43 1.26 53.208-16.633 56.495-45.386 4.403-38.51-21.188-63.552-58.041-60.796v103.612c-.036 1.466.575 2.22 1.546 2.57"></path><path d="M383.78 381.328c13.336 3.71 17.387-11.06 23.215-21.408 12.722-22.571 22.294-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.51c-.587 3.874 2.226 7.315 3.865 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894"></path><path d="M425.154 381.328c13.336 3.71 17.384-11.061 23.215-21.408 12.721-22.571 22.291-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.511c-.586 3.874 2.226 7.315 3.866 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894"></path><path d="M466.26 381.328c13.337 3.71 17.385-11.061 23.216-21.408 12.722-22.571 22.292-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.51c-.587 3.874 2.225 7.315 3.865 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894M4.477 383.005H72.58l18.573-28.484 64.169-.135s.065 19.413.065 28.62h48.756V160.307h-58.816c-5.653 9.537-140.85 222.697-140.85 222.697zm152.667-145.282v71.158l-40.453-.27 40.453-70.888z"></path></g>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-next-item">\n      <path d="M12 36l17-12-17-12v24zm20-24v24h4V12h-4z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-previous-item">\n      <path d="M12 12h4v24h-4zm7 12l17 12V12z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-shuffle">\n      <path d="M21.17 18.34L10.83 8 8 10.83l10.34 10.34 2.83-2.83zM29 8l4.09 4.09L8 37.17 10.83 40l25.09-25.09L40 19V8H29zm.66 18.83l-2.83 2.83 6.26 6.26L29 40h11V29l-4.09 4.09-6.25-6.26z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-cast">\n      <path d="M42 6H6c-2.21 0-4 1.79-4 4v6h4v-6h36v28H28v4h14c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM2 36v6h6c0-3.31-2.69-6-6-6zm0-8v4c5.52 0 10 4.48 10 10h4c0-7.73-6.27-14-14-14zm0-8v4c9.94 0 18 8.06 18 18h4c0-12.15-9.85-22-22-22z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-picture-in-picture-enter">\n      <path d="M38 22H22v11.99h16V22zm8 16V9.96C46 7.76 44.2 6 42 6H6C3.8 6 2 7.76 2 9.96V38c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4zm-4 .04H6V9.94h36v28.1z"></path>\n    </symbol>\n    <symbol viewBox="0 0 22 18" id="vjs-icon-picture-in-picture-exit">\n      <path d="M18 4H4v10h14V4zm4 12V1.98C22 .88 21.1 0 20 0H2C.9 0 0 .88 0 1.98V16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H2V1.97h18v14.05z"></path>\n      <path fill="none" d="M-1-3h24v24H-1z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-facebook">\n      <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759H734V905H479V609h255V391q0-186 104-288.5T1115 0q147 0 228 12z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-linkedin">\n      <path d="M477 625v991H147V625h330zm21-306q1 73-50.5 122T312 490h-2q-82 0-132-49t-50-122q0-74 51.5-122.5T314 148t133 48.5T498 319zm1166 729v568h-329v-530q0-105-40.5-164.5T1168 862q-63 0-105.5 34.5T999 982q-11 30-11 81v553H659q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5T1285 602q171 0 275 113.5t104 332.5z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1200 1227" id="vjs-icon-twitter">\n      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-tumblr">\n      <path d="M1328 1329l80 237q-23 35-111 66t-177 32q-104 2-190.5-26T787 1564t-95-106-55.5-120-16.5-118V676H452V461q72-26 129-69.5t91-90 58-102 34-99T779 12q1-5 4.5-8.5T791 0h244v424h333v252h-334v518q0 30 6.5 56t22.5 52.5 49.5 41.5 81.5 14q78-2 134-29z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-pinterest">\n      <path d="M1664 896q0 209-103 385.5T1281.5 1561 896 1664q-111 0-218-32 59-93 78-164 9-34 54-211 20 39 73 67.5t114 28.5q121 0 216-68.5t147-188.5 52-270q0-114-59.5-214T1180 449t-255-63q-105 0-196 29t-154.5 77-109 110.5-67 129.5T377 866q0 104 40 183t117 111q30 12 38-20 2-7 8-31t8-30q6-23-11-43-51-61-51-151 0-151 104.5-259.5T904 517q151 0 235.5 82t84.5 213q0 170-68.5 289T980 1220q-61 0-98-43.5T859 1072q8-35 26.5-93.5t30-103T927 800q0-50-27-83t-77-33q-62 0-105 57t-43 142q0 73 25 122l-99 418q-17 70-13 177-206-91-333-281T128 896q0-209 103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z"></path>\n    </symbol>\n  </defs>\n</svg>';
var jo = Hn ? 10009 : Vn ? 461 : 8;
var $o = { codes: { play: 415, pause: 19, ff: 417, rw: 412, back: jo }, names: { 415: "play", 19: "pause", 417: "ff", 412: "rw", [jo]: "back" }, isEventKey(e8, t3) {
  return t3 = t3.toLowerCase(), !(!this.names[e8.keyCode] || this.names[e8.keyCode] !== t3);
}, getEventName(e8) {
  if (this.names[e8.keyCode]) return this.names[e8.keyCode];
  if (this.codes[e8.code]) {
    const t3 = this.codes[e8.code];
    return this.names[t3];
  }
  return null;
} };
var Ho = 5;
var Vo = class extends ra {
  constructor(e8) {
    super(), this.player_ = e8, this.focusableComponents = [], this.isListening_ = false, this.isPaused_ = false, this.onKeyDown_ = this.onKeyDown_.bind(this), this.lastFocusedComponent_ = null;
  }
  start() {
    this.isListening_ || (this.player_.on("keydown", this.onKeyDown_), this.player_.on("modalKeydown", this.onKeyDown_), this.player_.on("loadedmetadata", () => {
      this.focus(this.updateFocusableComponents()[0]);
    }), this.player_.on("modalclose", () => {
      this.refocusComponent();
    }), this.player_.on("focusin", this.handlePlayerFocus_.bind(this)), this.player_.on("focusout", this.handlePlayerBlur_.bind(this)), this.isListening_ = true, this.player_.errorDisplay && this.player_.errorDisplay.on("aftermodalfill", () => {
      this.updateFocusableComponents(), this.focusableComponents.length && (this.focusableComponents.length > 1 ? this.focusableComponents[1].focus() : this.focusableComponents[0].focus());
    }));
  }
  stop() {
    this.player_.off("keydown", this.onKeyDown_), this.isListening_ = false;
  }
  onKeyDown_(e8) {
    const t3 = e8.originalEvent ? e8.originalEvent : e8;
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(t3.key)) {
      if (this.isPaused_) return;
      t3.preventDefault();
      const e9 = t3.key.substring(5).toLowerCase();
      this.move(e9);
    } else if ($o.isEventKey(t3, "play") || $o.isEventKey(t3, "pause") || $o.isEventKey(t3, "ff") || $o.isEventKey(t3, "rw")) {
      t3.preventDefault();
      const e9 = $o.getEventName(t3);
      this.performMediaAction_(e9);
    } else $o.isEventKey(t3, "Back") && e8.target && "function" == typeof e8.target.closeable && e8.target.closeable() && (t3.preventDefault(), e8.target.close());
  }
  performMediaAction_(e8) {
    if (this.player_) switch (e8) {
      case "play":
        this.player_.paused() && this.player_.play();
        break;
      case "pause":
        this.player_.paused() || this.player_.pause();
        break;
      case "ff":
        this.userSeek_(this.player_.currentTime() + Ho);
        break;
      case "rw":
        this.userSeek_(this.player_.currentTime() - Ho);
    }
  }
  userSeek_(e8) {
    this.player_.liveTracker && this.player_.liveTracker.isLive() && this.player_.liveTracker.nextSeekedFromUser(), this.player_.currentTime(e8);
  }
  pause() {
    this.isPaused_ = true;
  }
  resume() {
    this.isPaused_ = false;
  }
  handlePlayerBlur_(e8) {
    const t3 = e8.relatedTarget;
    let i2 = null;
    const s3 = this.getCurrentComponent(e8.target);
    t3 && (i2 = Boolean(t3.closest(".video-js")), t3.classList.contains("vjs-text-track-settings") && !this.isPaused_ && this.searchForTrackSelect_()), (e8.currentTarget.contains(e8.relatedTarget) || i2) && t3 || (s3 && "CloseButton" === s3.name() ? this.refocusComponent() : (this.pause(), s3 && s3.el() && (this.lastFocusedComponent_ = s3)));
  }
  handlePlayerFocus_() {
    this.getCurrentComponent() && this.getCurrentComponent().getIsFocusable() && this.resume();
  }
  updateFocusableComponents() {
    const e8 = this.player_, t3 = [];
    function i2(e9) {
      for (const s3 of e9) s3.hasOwnProperty("el_") && s3.getIsFocusable() && s3.getIsAvailableToBeFocused(s3.el()) && t3.push(s3), s3.hasOwnProperty("children_") && s3.children_.length > 0 && i2(s3.children_);
    }
    return e8.children_.forEach((e9) => {
      if (e9.hasOwnProperty("el_")) {
        if (e9.getIsFocusable && e9.getIsAvailableToBeFocused && e9.getIsFocusable() && e9.getIsAvailableToBeFocused(e9.el())) return void t3.push(e9);
        e9.hasOwnProperty("children_") && e9.children_.length > 0 ? i2(e9.children_) : e9.hasOwnProperty("items") && e9.items.length > 0 ? i2(e9.items) : this.findSuitableDOMChild(e9) && t3.push(e9);
      }
      if ("ErrorDisplay" === e9.name_ && e9.opened_) {
        const i3 = e9.el_.querySelector(".vjs-errors-ok-button-container");
        if (i3) {
          i3.querySelectorAll("button").forEach((e10, i4) => {
            t3.push({ name: () => "ModalButton" + (i4 + 1), el: () => e10, getPositions: () => {
              const t4 = e10.getBoundingClientRect();
              return { boundingClientRect: { x: t4.x, y: t4.y, width: t4.width, height: t4.height, top: t4.top, right: t4.right, bottom: t4.bottom, left: t4.left }, center: { x: t4.left + t4.width / 2, y: t4.top + t4.height / 2, width: 0, height: 0, top: t4.top + t4.height / 2, right: t4.left + t4.width / 2, bottom: t4.top + t4.height / 2, left: t4.left + t4.width / 2 } };
            }, getIsAvailableToBeFocused: () => true, getIsFocusable: (e11) => true, focus: () => e10.focus() });
          });
        }
      }
    }), this.focusableComponents = t3, this.focusableComponents;
  }
  findSuitableDOMChild(e8) {
    function t3(i2) {
      if (e8.getIsFocusable(i2) && e8.getIsAvailableToBeFocused(i2)) return i2;
      for (let e9 = 0; e9 < i2.children.length; e9++) {
        const s3 = t3(i2.children[e9]);
        if (s3) return s3;
      }
      return null;
    }
    return e8.el() ? t3(e8.el()) : null;
  }
  getCurrentComponent(e8) {
    this.updateFocusableComponents();
    const t3 = e8 || document.activeElement;
    if (this.focusableComponents.length) {
      for (const i2 of this.focusableComponents) if (i2.el() === t3) return i2;
    }
  }
  add(e8) {
    const t3 = [...this.focusableComponents];
    e8.hasOwnProperty("el_") && e8.getIsFocusable() && e8.getIsAvailableToBeFocused(e8.el()) && t3.push(e8), this.focusableComponents = t3, this.trigger({ type: "focusableComponentsChanged", focusableComponents: this.focusableComponents });
  }
  remove(e8) {
    for (let t3 = 0; t3 < this.focusableComponents.length; t3++) if (this.focusableComponents[t3].name() === e8.name()) return this.focusableComponents.splice(t3, 1), void this.trigger({ type: "focusableComponentsChanged", focusableComponents: this.focusableComponents });
  }
  clear() {
    this.focusableComponents.length > 0 && (this.focusableComponents = [], this.trigger({ type: "focusableComponentsChanged", focusableComponents: this.focusableComponents }));
  }
  move(e8) {
    const t3 = this.getCurrentComponent();
    if (!t3) return;
    const i2 = t3.getPositions(), s3 = this.focusableComponents.filter((s4) => s4 !== t3 && this.isInDirection_(i2.boundingClientRect, s4.getPositions().boundingClientRect, e8)), n5 = this.findBestCandidate_(i2.center, s3, e8);
    n5 ? this.focus(n5) : this.trigger({ type: "endOfFocusableComponents", direction: e8, focusedComponent: t3 });
  }
  findBestCandidate_(e8, t3, i2) {
    let s3 = 1 / 0, n5 = null;
    for (const r5 of t3) {
      const t4 = r5.getPositions().center, a5 = this.calculateDistance_(e8, t4, i2);
      a5 < s3 && (s3 = a5, n5 = r5);
    }
    return n5;
  }
  isInDirection_(e8, t3, i2) {
    switch (i2) {
      case "right":
        return t3.left >= e8.right;
      case "left":
        return t3.right <= e8.left;
      case "down":
        return t3.top >= e8.bottom;
      case "up":
        return t3.bottom <= e8.top;
      default:
        return false;
    }
  }
  refocusComponent() {
    if (this.lastFocusedComponent_) {
      this.player_.userActive() || this.player_.userActive(true), this.updateFocusableComponents();
      for (let e8 = 0; e8 < this.focusableComponents.length; e8++) if (this.focusableComponents[e8].name() === this.lastFocusedComponent_.name()) return void this.focus(this.focusableComponents[e8]);
    } else this.focus(this.updateFocusableComponents()[0]);
  }
  focus(e8) {
    "object" == typeof e8 && (e8.getIsAvailableToBeFocused(e8.el()) ? e8.focus() : this.findSuitableDOMChild(e8) && this.findSuitableDOMChild(e8).focus());
  }
  calculateDistance_(e8, t3, i2) {
    const s3 = Math.abs(e8.x - t3.x), n5 = Math.abs(e8.y - t3.y);
    let r5;
    switch (i2) {
      case "right":
      case "left":
        r5 = s3 + 100 * n5;
        break;
      case "up":
        r5 = 2 * n5 + 0.5 * s3;
        break;
      case "down":
        r5 = 5 * n5 + s3;
        break;
      default:
        r5 = s3 + n5;
    }
    return r5;
  }
  searchForTrackSelect_() {
    const e8 = this;
    for (const t3 of e8.updateFocusableComponents()) if ("TextTrackSelect" === t3.constructor.name) {
      e8.focus(t3);
      break;
    }
  }
};
var zo = class extends Ea {
  constructor(e8, t3, i2) {
    if (super(e8, En({ createEl: false }, t3), i2), t3.playerOptions.sources && 0 !== t3.playerOptions.sources.length) e8.src(t3.playerOptions.sources);
    else for (let s3 = 0, n5 = t3.playerOptions.techOrder; s3 < n5.length; s3++) {
      const t4 = va(n5[s3]);
      let i3 = yo.getTech(t4);
      if (t4 || (i3 = Ea.getComponent(t4)), i3 && i3.isSupported()) {
        e8.loadTech_(t4);
        break;
      }
    }
  }
};
Ea.registerComponent("MediaLoader", zo);
var Wo = class extends Ea {
  constructor(e8, t3) {
    super(e8, t3), this.options_.controlText && this.controlText(this.options_.controlText), this.handleMouseOver_ = (e9) => this.handleMouseOver(e9), this.handleMouseOut_ = (e9) => this.handleMouseOut(e9), this.handleClick_ = (e9) => this.handleClick(e9), this.handleKeyDown_ = (e9) => this.handleKeyDown(e9), this.emitTapEvents(), this.enable();
  }
  createEl(e8 = "div", t3 = {}, i2 = {}) {
    t3 = Object.assign({ className: this.buildCSSClass(), tabIndex: 0 }, t3), "button" === e8 && gn.error(`Creating a ClickableComponent with an HTML element of ${e8} is not supported; use a Button instead.`), i2 = Object.assign({ role: "button" }, i2), this.tabIndex_ = t3.tabIndex;
    const s3 = sr(e8, t3, i2);
    return this.player_.options_.experimentalSvgIcons || s3.appendChild(sr("span", { className: "vjs-icon-placeholder" }, { "aria-hidden": true })), this.createControlTextEl(s3), s3;
  }
  dispose() {
    this.controlTextEl_ = null, super.dispose();
  }
  createControlTextEl(e8) {
    return this.controlTextEl_ = sr("span", { className: "vjs-control-text" }, { "aria-live": "polite" }), e8 && e8.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e8), this.controlTextEl_;
  }
  controlText(e8, t3 = this.el()) {
    if (void 0 === e8) return this.controlText_ || "Need Text";
    const i2 = this.localize(e8);
    this.controlText_ = e8, nr(this.controlTextEl_, i2), this.nonIconControl || this.player_.options_.noUITitleAttributes || t3.setAttribute("title", i2);
  }
  buildCSSClass() {
    return `vjs-control vjs-button ${super.buildCSSClass()}`;
  }
  enable() {
    this.enabled_ || (this.enabled_ = true, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick_), this.on("keydown", this.handleKeyDown_));
  }
  disable() {
    this.enabled_ = false, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off("mouseover", this.handleMouseOver_), this.off("mouseout", this.handleMouseOut_), this.off(["tap", "click"], this.handleClick_), this.off("keydown", this.handleKeyDown_);
  }
  handleLanguagechange() {
    this.controlText(this.controlText_);
  }
  handleClick(e8) {
    this.options_.clickHandler && this.options_.clickHandler.call(this, arguments);
  }
  handleKeyDown(e8) {
    " " === e8.key || "Enter" === e8.key ? (e8.preventDefault(), e8.stopPropagation(), this.trigger("click")) : super.handleKeyDown(e8);
  }
};
Ea.registerComponent("ClickableComponent", Wo);
var Go = class extends Wo {
  constructor(e8, t3) {
    super(e8, t3), this.update(), this.update_ = (e9) => this.update(e9), e8.on("posterchange", this.update_);
  }
  dispose() {
    this.player().off("posterchange", this.update_), super.dispose();
  }
  createEl() {
    return sr("div", { className: "vjs-poster" });
  }
  crossOrigin(e8) {
    if (void 0 === e8) return this.$("img") ? this.$("img").crossOrigin : this.player_.tech_ && this.player_.tech_.isReady_ ? this.player_.crossOrigin() : this.player_.options_.crossOrigin || this.player_.options_.crossorigin || null;
    null === e8 || "anonymous" === e8 || "use-credentials" === e8 ? this.$("img") && (this.$("img").crossOrigin = e8) : this.player_.log.warn(`crossOrigin must be null,  "anonymous" or "use-credentials", given "${e8}"`);
  }
  update(e8) {
    const t3 = this.player().poster();
    this.setSrc(t3), t3 ? this.show() : this.hide();
  }
  setSrc(e8) {
    e8 ? (this.$("img") || this.el_.appendChild(sr("picture", { className: "vjs-poster", tabIndex: -1 }, {}, sr("img", { loading: "lazy", crossOrigin: this.crossOrigin() }, { alt: "" }))), this.$("img").src = e8) : this.el_.textContent = "";
  }
  handleClick(e8) {
    this.player_.controls() && (this.player_.tech(true) && this.player_.tech(true).focus(), this.player_.paused() ? Ua(this.player_.play()) : this.player_.pause());
  }
};
Go.prototype.crossorigin = Go.prototype.crossOrigin, Ea.registerComponent("PosterImage", Go);
var Xo = "#222";
var Ko = "#ccc";
var Yo = { monospace: "monospace", sansSerif: "sans-serif", serif: "serif", monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace', monospaceSerif: '"Courier New", monospace', proportionalSansSerif: "sans-serif", proportionalSerif: "serif", casual: '"Comic Sans MS", Impact, fantasy', script: '"Monotype Corsiva", cursive', smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif' };
function Qo(e8, t3) {
  let i2;
  if (4 === e8.length) i2 = e8[1] + e8[1] + e8[2] + e8[2] + e8[3] + e8[3];
  else {
    if (7 !== e8.length) throw new Error("Invalid color code provided, " + e8 + "; must be formatted as e.g. #f0e or #f604e2.");
    i2 = e8.slice(1);
  }
  return "rgba(" + parseInt(i2.slice(0, 2), 16) + "," + parseInt(i2.slice(2, 4), 16) + "," + parseInt(i2.slice(4, 6), 16) + "," + t3 + ")";
}
function Jo(e8, t3, i2) {
  try {
    e8.style[t3] = i2;
  } catch (s3) {
    return;
  }
}
function Zo(e8) {
  return e8 ? `${e8}px` : "";
}
var el = class extends Ea {
  constructor(e8, t3, i2) {
    super(e8, t3, i2);
    const s3 = (e9) => this.updateDisplay(e9), n5 = (e9) => {
      this.updateDisplayOverlay(), this.updateDisplay(e9);
    };
    e8.on("loadstart", (e9) => this.toggleDisplay(e9)), e8.on("texttrackchange", s3), e8.on("loadedmetadata", (e9) => {
      this.updateDisplayOverlay(), this.preselectTrack(e9);
    }), e8.ready(ea(this, function() {
      if (e8.tech_ && e8.tech_.featuresNativeTextTracks) return void this.hide();
      e8.on("fullscreenchange", n5), e8.on("playerresize", n5);
      const t4 = _.screen.orientation || _, i3 = _.screen.orientation ? "change" : "orientationchange";
      t4.addEventListener(i3, n5), e8.on("dispose", () => t4.removeEventListener(i3, n5));
      const s4 = this.options_.playerOptions.tracks || [];
      for (let e9 = 0; e9 < s4.length; e9++) this.player_.addRemoteTextTrack(s4[e9], true);
      this.preselectTrack();
    }));
  }
  preselectTrack() {
    const e8 = { captions: 1, subtitles: 1 }, t3 = this.player_.textTracks(), i2 = this.player_.cache_.selectedLanguage;
    let s3, n5, r5;
    for (let a5 = 0; a5 < t3.length; a5++) {
      const o5 = t3[a5];
      i2 && i2.enabled && i2.language && i2.language === o5.language && o5.kind in e8 ? o5.kind === i2.kind ? r5 = o5 : r5 || (r5 = o5) : i2 && !i2.enabled ? (r5 = null, s3 = null, n5 = null) : o5.default && ("descriptions" !== o5.kind || s3 ? o5.kind in e8 && !n5 && (n5 = o5) : s3 = o5);
    }
    r5 ? r5.mode = "showing" : n5 ? n5.mode = "showing" : s3 && (s3.mode = "showing");
  }
  toggleDisplay() {
    this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show();
  }
  createEl() {
    return super.createEl("div", { className: "vjs-text-track-display" }, { translate: "yes", "aria-live": "off", "aria-atomic": "true" });
  }
  clearDisplay() {
    "function" == typeof _.WebVTT && _.WebVTT.processCues(_, [], this.el_);
  }
  updateDisplay() {
    const e8 = this.player_.textTracks(), t3 = this.options_.allowMultipleShowingTracks;
    if (this.clearDisplay(), t3) {
      const t4 = [];
      for (let i3 = 0; i3 < e8.length; ++i3) {
        const s4 = e8[i3];
        "showing" === s4.mode && t4.push(s4);
      }
      return void this.updateForTrack(t4);
    }
    let i2 = null, s3 = null, n5 = e8.length;
    for (; n5--; ) {
      const t4 = e8[n5];
      "showing" === t4.mode && ("descriptions" === t4.kind ? i2 = t4 : s3 = t4);
    }
    if (s3 ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(s3)) : i2 && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(i2)), !_.CSS.supports("inset", "10px")) {
      const e9 = this.el_, t4 = e9.querySelectorAll(".vjs-text-track-cue"), i3 = this.player_.controlBar.el_.getBoundingClientRect().height, s4 = this.player_.el_.getBoundingClientRect().height;
      e9.style = "", Jo(e9, "position", "relative"), Jo(e9, "height", s4 - i3 + "px"), Jo(e9, "top", "unset"), Jo(e9, "bottom", zn ? s4 + "px" : "0px"), t4.length > 0 && t4.forEach((e10) => {
        if (e10.style.inset) {
          const t5 = e10.style.inset.split(" ");
          3 === t5.length && Object.assign(e10.style, { top: t5[0], right: t5[1], bottom: t5[2], left: "unset" });
        }
      });
    }
  }
  updateDisplayOverlay() {
    if (!this.player_.videoHeight() || !_.CSS.supports("inset-inline: 10px")) return;
    const e8 = this.player_.currentWidth(), t3 = this.player_.currentHeight(), i2 = e8 / t3, s3 = this.player_.videoWidth() / this.player_.videoHeight();
    let n5 = 0, r5 = 0;
    Math.abs(i2 - s3) > 0.1 && (i2 > s3 ? n5 = Math.round((e8 - t3 * s3) / 2) : r5 = Math.round((t3 - e8 / s3) / 2)), Jo(this.el_, "insetInline", Zo(n5)), Jo(this.el_, "insetBlock", Zo(r5));
  }
  updateDisplayState(e8) {
    const t3 = this.player_.textTrackSettings.getValues(), i2 = e8.activeCues;
    let s3 = i2.length;
    for (; s3--; ) {
      const e9 = i2[s3];
      if (!e9) continue;
      const n5 = e9.displayState;
      if (t3.color && (n5.firstChild.style.color = t3.color), t3.textOpacity && Jo(n5.firstChild, "color", Qo(t3.color || "#fff", t3.textOpacity)), t3.backgroundColor && (n5.firstChild.style.backgroundColor = t3.backgroundColor), t3.backgroundOpacity && Jo(n5.firstChild, "backgroundColor", Qo(t3.backgroundColor || "#000", t3.backgroundOpacity)), t3.windowColor && (t3.windowOpacity ? Jo(n5, "backgroundColor", Qo(t3.windowColor, t3.windowOpacity)) : n5.style.backgroundColor = t3.windowColor), t3.edgeStyle && ("dropshadow" === t3.edgeStyle ? n5.firstChild.style.textShadow = `2px 2px 3px ${Xo}, 2px 2px 4px ${Xo}, 2px 2px 5px ${Xo}` : "raised" === t3.edgeStyle ? n5.firstChild.style.textShadow = `1px 1px ${Xo}, 2px 2px ${Xo}, 3px 3px ${Xo}` : "depressed" === t3.edgeStyle ? n5.firstChild.style.textShadow = `1px 1px ${Ko}, 0 1px ${Ko}, -1px -1px ${Xo}, 0 -1px ${Xo}` : "uniform" === t3.edgeStyle && (n5.firstChild.style.textShadow = `0 0 4px ${Xo}, 0 0 4px ${Xo}, 0 0 4px ${Xo}, 0 0 4px ${Xo}`)), t3.fontPercent && 1 !== t3.fontPercent) {
        const e10 = _.parseFloat(n5.style.fontSize);
        n5.style.fontSize = e10 * t3.fontPercent + "px", n5.style.height = "auto", n5.style.top = "auto";
      }
      t3.fontFamily && "default" !== t3.fontFamily && ("small-caps" === t3.fontFamily ? n5.firstChild.style.fontVariant = "small-caps" : n5.firstChild.style.fontFamily = Yo[t3.fontFamily]);
    }
  }
  updateForTrack(e8) {
    if (Array.isArray(e8) || (e8 = [e8]), "function" != typeof _.WebVTT || e8.every((e9) => !e9.activeCues)) return;
    const t3 = [];
    for (let i2 = 0; i2 < e8.length; ++i2) {
      const s3 = e8[i2];
      for (let e9 = 0; e9 < s3.activeCues.length; ++e9) t3.push(s3.activeCues[e9]);
    }
    _.WebVTT.processCues(_, t3, this.el_);
    for (let i2 = 0; i2 < e8.length; ++i2) {
      const t4 = e8[i2];
      for (let e9 = 0; e9 < t4.activeCues.length; ++e9) {
        const s3 = t4.activeCues[e9].displayState;
        or(s3, "vjs-text-track-cue", "vjs-text-track-cue-" + (t4.language ? t4.language : i2)), t4.language && pr(s3, "lang", t4.language);
      }
      this.player_.textTrackSettings && this.updateDisplayState(t4);
    }
  }
};
Ea.registerComponent("TextTrackDisplay", el);
var tl = class extends Ea {
  createEl() {
    const e8 = this.player_.isAudio(), t3 = this.localize(e8 ? "Audio Player" : "Video Player"), i2 = sr("span", { className: "vjs-control-text", textContent: this.localize("{1} is loading.", [t3]) }), s3 = super.createEl("div", { className: "vjs-loading-spinner", dir: "ltr" });
    return s3.appendChild(i2), s3;
  }
  handleLanguagechange() {
    this.$(".vjs-control-text").textContent = this.localize("{1} is loading.", [this.player_.isAudio() ? "Audio Player" : "Video Player"]);
  }
};
Ea.registerComponent("LoadingSpinner", tl);
var il = class extends Wo {
  createEl(e8, t3 = {}, i2 = {}) {
    const s3 = sr("button", t3 = Object.assign({ className: this.buildCSSClass() }, t3), i2 = Object.assign({ type: "button" }, i2));
    return this.player_.options_.experimentalSvgIcons || s3.appendChild(sr("span", { className: "vjs-icon-placeholder" }, { "aria-hidden": true })), this.createControlTextEl(s3), s3;
  }
  addChild(e8, t3 = {}) {
    const i2 = this.constructor.name;
    return gn.warn(`Adding an actionable (user controllable) child to a Button (${i2}) is not supported; use a ClickableComponent instead.`), Ea.prototype.addChild.call(this, e8, t3);
  }
  enable() {
    super.enable(), this.el_.removeAttribute("disabled");
  }
  disable() {
    super.disable(), this.el_.setAttribute("disabled", "disabled");
  }
  handleKeyDown(e8) {
    " " !== e8.key && "Enter" !== e8.key ? super.handleKeyDown(e8) : e8.stopPropagation();
  }
};
Ea.registerComponent("Button", il);
var sl = class extends il {
  constructor(e8, t3) {
    super(e8, t3), this.mouseused_ = false, this.setIcon("play"), this.on("mousedown", (e9) => this.handleMouseDown(e9));
  }
  buildCSSClass() {
    return "vjs-big-play-button";
  }
  handleClick(e8) {
    const t3 = this.player_.play();
    if (this.mouseused_ && "clientX" in e8 && "clientY" in e8) return Ua(t3), void (this.player_.tech(true) && this.player_.tech(true).focus());
    const i2 = this.player_.getChild("controlBar"), s3 = i2 && i2.getChild("playToggle");
    if (!s3) return void this.player_.tech(true).focus();
    const n5 = () => s3.focus();
    Ma(t3) ? t3.then(n5, () => {
    }) : this.setTimeout(n5, 1);
  }
  handleKeyDown(e8) {
    this.mouseused_ = false, super.handleKeyDown(e8);
  }
  handleMouseDown(e8) {
    this.mouseused_ = true;
  }
};
sl.prototype.controlText_ = "Play Video", Ea.registerComponent("BigPlayButton", sl);
var nl = class extends il {
  constructor(e8, t3) {
    super(e8, t3), this.setIcon("cancel"), this.controlText(t3 && t3.controlText || this.localize("Close"));
  }
  buildCSSClass() {
    return `vjs-close-button ${super.buildCSSClass()}`;
  }
  handleClick(e8) {
    this.trigger({ type: "close", bubbles: false });
  }
  handleKeyDown(e8) {
    "Escape" === e8.key ? (e8.preventDefault(), e8.stopPropagation(), this.trigger("click")) : super.handleKeyDown(e8);
  }
};
Ea.registerComponent("CloseButton", nl);
var rl = class extends il {
  constructor(e8, t3 = {}) {
    super(e8, t3), t3.replay = void 0 === t3.replay || t3.replay, this.setIcon("play"), this.on(e8, "play", (e9) => this.handlePlay(e9)), this.on(e8, "pause", (e9) => this.handlePause(e9)), t3.replay && this.on(e8, "ended", (e9) => this.handleEnded(e9));
  }
  buildCSSClass() {
    return `vjs-play-control ${super.buildCSSClass()}`;
  }
  handleClick(e8) {
    this.player_.paused() ? Ua(this.player_.play()) : this.player_.pause();
  }
  handleSeeked(e8) {
    this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(e8) : this.handlePlay(e8);
  }
  handlePlay(e8) {
    this.removeClass("vjs-ended", "vjs-paused"), this.addClass("vjs-playing"), this.setIcon("pause"), this.controlText("Pause");
  }
  handlePause(e8) {
    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.setIcon("play"), this.controlText("Play");
  }
  handleEnded(e8) {
    this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.setIcon("replay"), this.controlText("Replay"), this.one(this.player_, "seeked", (e9) => this.handleSeeked(e9));
  }
};
rl.prototype.controlText_ = "Play", Ea.registerComponent("PlayToggle", rl);
var al = class extends Ea {
  constructor(e8, t3) {
    super(e8, t3), this.on(e8, ["timeupdate", "ended", "seeking"], (e9) => this.update(e9)), this.updateTextNode_();
  }
  createEl() {
    const e8 = this.buildCSSClass(), t3 = super.createEl("div", { className: `${e8} vjs-time-control vjs-control` }), i2 = sr("span", { className: "vjs-control-text", textContent: `${this.localize(this.labelText_)} ` }, { role: "presentation" });
    return t3.appendChild(i2), this.contentEl_ = sr("span", { className: `${e8}-display` }, { role: "presentation" }), t3.appendChild(this.contentEl_), t3;
  }
  dispose() {
    this.contentEl_ = null, this.textNode_ = null, super.dispose();
  }
  update(e8) {
    (this.player_.options_.enableSmoothSeeking || "seeking" !== e8.type) && this.updateContent(e8);
  }
  updateTextNode_(e8 = 0) {
    e8 = La(e8), this.formattedTime_ !== e8 && (this.formattedTime_ = e8, this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_", () => {
      if (!this.contentEl_) return;
      let e9 = this.textNode_;
      e9 && this.contentEl_.firstChild !== e9 && (e9 = null, gn.warn("TimeDisplay#updateTextnode_: Prevented replacement of text node element since it was no longer a child of this node. Appending a new node instead.")), this.textNode_ = ne.createTextNode(this.formattedTime_), this.textNode_ && (e9 ? this.contentEl_.replaceChild(this.textNode_, e9) : this.contentEl_.appendChild(this.textNode_));
    }));
  }
  updateContent(e8) {
  }
};
al.prototype.labelText_ = "Time", al.prototype.controlText_ = "Time", Ea.registerComponent("TimeDisplay", al);
var ol = class extends al {
  buildCSSClass() {
    return "vjs-current-time";
  }
  updateContent(e8) {
    let t3;
    t3 = this.player_.ended() ? this.player_.duration() : this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(), this.updateTextNode_(t3);
  }
};
ol.prototype.labelText_ = "Current Time", ol.prototype.controlText_ = "Current Time", Ea.registerComponent("CurrentTimeDisplay", ol);
var ll = class extends al {
  constructor(e8, t3) {
    super(e8, t3);
    const i2 = (e9) => this.updateContent(e9);
    this.on(e8, "durationchange", i2), this.on(e8, "loadstart", i2), this.on(e8, "loadedmetadata", i2);
  }
  buildCSSClass() {
    return "vjs-duration";
  }
  updateContent(e8) {
    const t3 = this.player_.duration();
    this.updateTextNode_(t3);
  }
};
ll.prototype.labelText_ = "Duration", ll.prototype.controlText_ = "Duration", Ea.registerComponent("DurationDisplay", ll);
var ul = class extends Ea {
  createEl() {
    const e8 = super.createEl("div", { className: "vjs-time-control vjs-time-divider" }, { "aria-hidden": true }), t3 = super.createEl("div"), i2 = super.createEl("span", { textContent: "/" });
    return t3.appendChild(i2), e8.appendChild(t3), e8;
  }
};
Ea.registerComponent("TimeDivider", ul);
var hl = class extends al {
  constructor(e8, t3) {
    super(e8, t3), this.on(e8, "durationchange", (e9) => this.updateContent(e9));
  }
  buildCSSClass() {
    return "vjs-remaining-time";
  }
  createEl() {
    const e8 = super.createEl();
    return false !== this.options_.displayNegative && e8.insertBefore(sr("span", {}, { "aria-hidden": true }, "-"), this.contentEl_), e8;
  }
  updateContent(e8) {
    if ("number" != typeof this.player_.duration()) return;
    let t3;
    t3 = this.player_.ended() ? 0 : this.player_.remainingTimeDisplay ? this.player_.remainingTimeDisplay() : this.player_.remainingTime(), this.updateTextNode_(t3);
  }
};
hl.prototype.labelText_ = "Remaining Time", hl.prototype.controlText_ = "Remaining Time", Ea.registerComponent("RemainingTimeDisplay", hl);
var dl = class extends Ea {
  constructor(e8, t3) {
    super(e8, t3), this.updateShowing(), this.on(this.player(), "durationchange", (e9) => this.updateShowing(e9));
  }
  createEl() {
    const e8 = super.createEl("div", { className: "vjs-live-control vjs-control" });
    return this.contentEl_ = sr("div", { className: "vjs-live-display" }, { "aria-live": "off" }), this.contentEl_.appendChild(sr("span", { className: "vjs-control-text", textContent: `${this.localize("Stream Type")} ` })), this.contentEl_.appendChild(ne.createTextNode(this.localize("LIVE"))), e8.appendChild(this.contentEl_), e8;
  }
  dispose() {
    this.contentEl_ = null, super.dispose();
  }
  updateShowing(e8) {
    this.player().duration() === 1 / 0 ? this.show() : this.hide();
  }
};
Ea.registerComponent("LiveDisplay", dl);
var cl = class extends il {
  constructor(e8, t3) {
    super(e8, t3), this.updateLiveEdgeStatus(), this.player_.liveTracker && (this.updateLiveEdgeStatusHandler_ = (e9) => this.updateLiveEdgeStatus(e9), this.on(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatusHandler_));
  }
  createEl() {
    const e8 = super.createEl("button", { className: "vjs-seek-to-live-control vjs-control" });
    return this.setIcon("circle", e8), this.textEl_ = sr("span", { className: "vjs-seek-to-live-text", textContent: this.localize("LIVE") }, { "aria-hidden": "true" }), e8.appendChild(this.textEl_), e8;
  }
  updateLiveEdgeStatus() {
    !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge() ? (this.setAttribute("aria-disabled", true), this.addClass("vjs-at-live-edge"), this.controlText("Seek to live, currently playing live")) : (this.setAttribute("aria-disabled", false), this.removeClass("vjs-at-live-edge"), this.controlText("Seek to live, currently behind live"));
  }
  handleClick() {
    this.player_.liveTracker.seekToLiveEdge();
  }
  dispose() {
    this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatusHandler_), this.textEl_ = null, super.dispose();
  }
};
function pl(e8, t3, i2) {
  return e8 = Number(e8), Math.min(i2, Math.max(t3, isNaN(e8) ? t3 : e8));
}
cl.prototype.controlText_ = "Seek to live, currently playing live", Ea.registerComponent("SeekToLive", cl);
var ml = Object.freeze({ __proto__: null, clamp: pl });
var gl = class extends Ea {
  constructor(e8, t3) {
    super(e8, t3), this.handleMouseDown_ = (e9) => this.handleMouseDown(e9), this.handleMouseUp_ = (e9) => this.handleMouseUp(e9), this.handleKeyDown_ = (e9) => this.handleKeyDown(e9), this.handleClick_ = (e9) => this.handleClick(e9), this.handleMouseMove_ = (e9) => this.handleMouseMove(e9), this.update_ = (e9) => this.update(e9), this.bar = this.getChild(this.options_.barName), this.vertical(!!this.options_.vertical), this.enable();
  }
  enabled() {
    return this.enabled_;
  }
  enable() {
    this.enabled() || (this.on("mousedown", this.handleMouseDown_), this.on("touchstart", this.handleMouseDown_), this.on("keydown", this.handleKeyDown_), this.on("click", this.handleClick_), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = true);
  }
  disable() {
    if (!this.enabled()) return;
    const e8 = this.bar.el_.ownerDocument;
    this.off("mousedown", this.handleMouseDown_), this.off("touchstart", this.handleMouseDown_), this.off("keydown", this.handleKeyDown_), this.off("click", this.handleClick_), this.off(this.player_, "controlsvisible", this.update_), this.off(e8, "mousemove", this.handleMouseMove_), this.off(e8, "mouseup", this.handleMouseUp_), this.off(e8, "touchmove", this.handleMouseMove_), this.off(e8, "touchend", this.handleMouseUp_), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = false;
  }
  createEl(e8, t3 = {}, i2 = {}) {
    return t3.className = t3.className + " vjs-slider", t3 = Object.assign({ tabIndex: 0 }, t3), i2 = Object.assign({ role: "slider", "aria-valuenow": 0, "aria-valuemin": 0, "aria-valuemax": 100 }, i2), super.createEl(e8, t3, i2);
  }
  handleMouseDown(e8) {
    const t3 = this.bar.el_.ownerDocument;
    "mousedown" === e8.type && e8.preventDefault(), "touchstart" !== e8.type || Nn || e8.preventDefault(), gr(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(t3, "mousemove", this.handleMouseMove_), this.on(t3, "mouseup", this.handleMouseUp_), this.on(t3, "touchmove", this.handleMouseMove_), this.on(t3, "touchend", this.handleMouseUp_), this.handleMouseMove(e8, true);
  }
  handleMouseMove(e8) {
  }
  handleMouseUp(e8) {
    const t3 = this.bar.el_.ownerDocument;
    fr(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(t3, "mousemove", this.handleMouseMove_), this.off(t3, "mouseup", this.handleMouseUp_), this.off(t3, "touchmove", this.handleMouseMove_), this.off(t3, "touchend", this.handleMouseUp_), this.update();
  }
  update() {
    if (!this.el_ || !this.bar) return;
    const e8 = this.getProgress();
    return e8 === this.progress_ || (this.progress_ = e8, this.requestNamedAnimationFrame("Slider#update", () => {
      const t3 = this.vertical() ? "height" : "width";
      this.bar.el().style[t3] = (100 * e8).toFixed(2) + "%";
    })), e8;
  }
  getProgress() {
    return Number(pl(this.getPercent(), 0, 1).toFixed(4));
  }
  calculateDistance(e8) {
    const t3 = br(this.el_, e8);
    return this.vertical() ? t3.y : t3.x;
  }
  handleKeyDown(e8) {
    const t3 = this.options_.playerOptions.spatialNavigation, i2 = t3 && t3.enabled, s3 = t3 && t3.horizontalSeek;
    i2 ? s3 && "ArrowLeft" === e8.key || !s3 && "ArrowDown" === e8.key ? (e8.preventDefault(), e8.stopPropagation(), this.stepBack()) : s3 && "ArrowRight" === e8.key || !s3 && "ArrowUp" === e8.key ? (e8.preventDefault(), e8.stopPropagation(), this.stepForward()) : super.handleKeyDown(e8) : "ArrowLeft" === e8.key || "ArrowDown" === e8.key ? (e8.preventDefault(), e8.stopPropagation(), this.stepBack()) : "ArrowUp" === e8.key || "ArrowRight" === e8.key ? (e8.preventDefault(), e8.stopPropagation(), this.stepForward()) : super.handleKeyDown(e8);
  }
  handleClick(e8) {
    e8.stopPropagation(), e8.preventDefault();
  }
  vertical(e8) {
    if (void 0 === e8) return this.vertical_ || false;
    this.vertical_ = !!e8, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal");
  }
};
Ea.registerComponent("Slider", gl);
var fl = (e8, t3) => pl(e8 / t3 * 100, 0, 100).toFixed(2) + "%";
var yl = class extends Ea {
  constructor(e8, t3) {
    super(e8, t3), this.partEls_ = [], this.on(e8, "progress", (e9) => this.update(e9));
  }
  createEl() {
    const e8 = super.createEl("div", { className: "vjs-load-progress" }), t3 = sr("span", { className: "vjs-control-text" }), i2 = sr("span", { textContent: this.localize("Loaded") }), s3 = ne.createTextNode(": ");
    return this.percentageEl_ = sr("span", { className: "vjs-control-text-loaded-percentage", textContent: "0%" }), e8.appendChild(t3), t3.appendChild(i2), t3.appendChild(s3), t3.appendChild(this.percentageEl_), e8;
  }
  dispose() {
    this.partEls_ = null, this.percentageEl_ = null, super.dispose();
  }
  update(e8) {
    this.requestNamedAnimationFrame("LoadProgressBar#update", () => {
      const e9 = this.player_.liveTracker, t3 = this.player_.buffered(), i2 = e9 && e9.isLive() ? e9.seekableEnd() : this.player_.duration(), s3 = this.player_.bufferedEnd(), n5 = this.partEls_, r5 = fl(s3, i2);
      this.percent_ !== r5 && (this.el_.style.width = r5, nr(this.percentageEl_, r5), this.percent_ = r5);
      for (let a5 = 0; a5 < t3.length; a5++) {
        const e10 = t3.start(a5), i3 = t3.end(a5);
        let r6 = n5[a5];
        r6 || (r6 = this.el_.appendChild(sr()), n5[a5] = r6), r6.dataset.start === e10 && r6.dataset.end === i3 || (r6.dataset.start = e10, r6.dataset.end = i3, r6.style.left = fl(e10, s3), r6.style.width = fl(i3 - e10, s3));
      }
      for (let a5 = n5.length; a5 > t3.length; a5--) this.el_.removeChild(n5[a5 - 1]);
      n5.length = t3.length;
    });
  }
};
Ea.registerComponent("LoadProgressBar", yl);
var _l = class extends Ea {
  constructor(e8, t3) {
    super(e8, t3), this.update = ta(ea(this, this.update), Zr);
  }
  createEl() {
    return super.createEl("div", { className: "vjs-time-tooltip" }, { "aria-hidden": "true" });
  }
  update(e8, t3, i2) {
    const s3 = _r(this.el_), n5 = yr(this.player_.el()), r5 = e8.width * t3;
    if (!n5 || !s3) return;
    let a5 = e8.left - n5.left + r5, o5 = e8.width - r5 + (n5.right - e8.right);
    o5 || (o5 = e8.width - r5, a5 = r5);
    let l2 = s3.width / 2;
    a5 < l2 ? l2 += l2 - a5 : o5 < l2 && (l2 = o5), l2 < 0 ? l2 = 0 : l2 > s3.width && (l2 = s3.width), l2 = Math.round(l2), this.el_.style.right = `-${l2}px`, this.write(i2);
  }
  write(e8) {
    nr(this.el_, e8);
  }
  updateTime(e8, t3, i2, s3) {
    this.requestNamedAnimationFrame("TimeTooltip#updateTime", () => {
      let n5;
      const r5 = this.player_.duration();
      if (this.player_.liveTracker && this.player_.liveTracker.isLive()) {
        const e9 = this.player_.liveTracker.liveWindow(), i3 = e9 - t3 * e9;
        n5 = (i3 < 1 ? "" : "-") + La(i3, e9);
      } else n5 = La(i2, r5);
      this.update(e8, t3, n5), s3 && s3();
    });
  }
};
Ea.registerComponent("TimeTooltip", _l);
var bl = class extends Ea {
  constructor(e8, t3) {
    super(e8, t3), this.setIcon("circle"), this.update = ta(ea(this, this.update), Zr);
  }
  createEl() {
    return super.createEl("div", { className: "vjs-play-progress vjs-slider-bar" }, { "aria-hidden": "true" });
  }
  update(e8, t3) {
    const i2 = this.getChild("timeTooltip");
    if (!i2) return;
    const s3 = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
    i2.updateTime(e8, t3, s3);
  }
};
bl.prototype.options_ = { children: [] }, Xn || Dn || bl.prototype.options_.children.push("timeTooltip"), Ea.registerComponent("PlayProgressBar", bl);
var vl = class extends Ea {
  constructor(e8, t3) {
    super(e8, t3), this.update = ta(ea(this, this.update), Zr);
  }
  createEl() {
    return super.createEl("div", { className: "vjs-mouse-display" });
  }
  update(e8, t3) {
    const i2 = t3 * this.player_.duration();
    this.getChild("timeTooltip").updateTime(e8, t3, i2, () => {
      this.el_.style.left = e8.width * t3 + "px";
    });
  }
};
vl.prototype.options_ = { children: ["timeTooltip"] }, Ea.registerComponent("MouseTimeDisplay", vl);
var Tl = 5;
var Sl = 12;
var El = class _El extends gl {
  constructor(e8, t3) {
    (t3 = En(_El.prototype.options_, t3)).children = [...t3.children];
    const i2 = e8.options_.disableSeekWhileScrubbingOnMobile && (Xn || Dn);
    (!Xn && !Dn || i2) && t3.children.splice(1, 0, "mouseTimeDisplay"), super(e8, t3), this.shouldDisableSeekWhileScrubbingOnMobile_ = i2, this.pendingSeekTime_ = null, this.setEventHandlers_();
  }
  setEventHandlers_() {
    this.update_ = ea(this, this.update), this.update = ta(this.update_, Zr), this.on(this.player_, ["durationchange", "timeupdate"], this.update), this.on(this.player_, ["ended"], this.update_), this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update), this.updateInterval = null, this.enableIntervalHandler_ = (e8) => this.enableInterval_(e8), this.disableIntervalHandler_ = (e8) => this.disableInterval_(e8), this.on(this.player_, ["playing"], this.enableIntervalHandler_), this.on(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_), "hidden" in ne && "visibilityState" in ne && this.on(ne, "visibilitychange", this.toggleVisibility_);
  }
  toggleVisibility_(e8) {
    "hidden" === ne.visibilityState ? (this.cancelNamedAnimationFrame("SeekBar#update"), this.cancelNamedAnimationFrame("Slider#update"), this.disableInterval_(e8)) : (this.player_.ended() || this.player_.paused() || this.enableInterval_(), this.update());
  }
  enableInterval_() {
    this.updateInterval || (this.updateInterval = this.setInterval(this.update, Zr));
  }
  disableInterval_(e8) {
    this.player_.liveTracker && this.player_.liveTracker.isLive() && e8 && "ended" !== e8.type || this.updateInterval && (this.clearInterval(this.updateInterval), this.updateInterval = null);
  }
  createEl() {
    return super.createEl("div", { className: "vjs-progress-holder" }, { "aria-label": this.localize("Progress Bar") });
  }
  update(e8) {
    if ("hidden" === ne.visibilityState) return;
    const t3 = super.update();
    return this.requestNamedAnimationFrame("SeekBar#update", () => {
      const e9 = this.player_.ended() ? this.player_.duration() : this.getCurrentTime_(), i2 = this.player_.liveTracker;
      let s3 = this.player_.duration();
      i2 && i2.isLive() && (s3 = this.player_.liveTracker.liveCurrentTime()), this.percent_ !== t3 && (this.el_.setAttribute("aria-valuenow", (100 * t3).toFixed(2)), this.percent_ = t3), this.currentTime_ === e9 && this.duration_ === s3 || (this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [La(e9, s3), La(s3, s3)], "{1} of {2}")), this.currentTime_ = e9, this.duration_ = s3), this.bar && this.bar.update(yr(this.el()), this.getProgress());
    }), t3;
  }
  userSeek_(e8) {
    this.player_.liveTracker && this.player_.liveTracker.isLive() && this.player_.liveTracker.nextSeekedFromUser(), this.player_.currentTime(e8);
  }
  getCurrentTime_() {
    return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
  }
  getPercent() {
    if (this.pendingSeekTime_) return this.pendingSeekTime_ / this.player_.duration();
    const e8 = this.getCurrentTime_();
    let t3;
    const i2 = this.player_.liveTracker;
    return i2 && i2.isLive() ? (t3 = (e8 - i2.seekableStart()) / i2.liveWindow(), i2.atLiveEdge() && (t3 = 1)) : t3 = e8 / this.player_.duration(), t3;
  }
  handleMouseDown(e8) {
    Cr(e8) && (e8.stopPropagation(), this.videoWasPlaying = !this.player_.paused(), this.shouldDisableSeekWhileScrubbingOnMobile_ || this.player_.pause(), super.handleMouseDown(e8));
  }
  handleMouseMove(e8, t3 = false) {
    if (!Cr(e8) || isNaN(this.player_.duration())) return;
    let i2;
    t3 || this.player_.scrubbing() || this.player_.scrubbing(true);
    const s3 = this.calculateDistance(e8), n5 = this.player_.liveTracker;
    if (n5 && n5.isLive()) {
      if (s3 >= 0.99) return void n5.seekToLiveEdge();
      const e9 = n5.seekableStart(), t4 = n5.liveCurrentTime();
      if (i2 = e9 + s3 * n5.liveWindow(), i2 >= t4 && (i2 = t4), i2 <= e9 && (i2 = e9 + 0.1), i2 === 1 / 0) return;
    } else i2 = s3 * this.player_.duration(), i2 === this.player_.duration() && (i2 -= 0.1);
    this.shouldDisableSeekWhileScrubbingOnMobile_ ? this.pendingSeekTime_ = i2 : this.userSeek_(i2), this.player_.options_.enableSmoothSeeking && this.update();
  }
  enable() {
    super.enable();
    const e8 = this.getChild("mouseTimeDisplay");
    e8 && e8.show();
  }
  disable() {
    super.disable();
    const e8 = this.getChild("mouseTimeDisplay");
    e8 && e8.hide();
  }
  handleMouseUp(e8) {
    super.handleMouseUp(e8), e8 && e8.stopPropagation(), this.player_.scrubbing(false), this.pendingSeekTime_ && (this.userSeek_(this.pendingSeekTime_), this.pendingSeekTime_ = null), this.player_.trigger({ type: "timeupdate", target: this, manuallyTriggered: true }), this.videoWasPlaying ? Ua(this.player_.play()) : this.update_();
  }
  stepForward() {
    this.userSeek_(this.player_.currentTime() + Tl);
  }
  stepBack() {
    this.userSeek_(this.player_.currentTime() - Tl);
  }
  handleAction(e8) {
    this.player_.paused() ? this.player_.play() : this.player_.pause();
  }
  handleKeyDown(e8) {
    const t3 = this.player_.liveTracker;
    if (" " === e8.key || "Enter" === e8.key) e8.preventDefault(), e8.stopPropagation(), this.handleAction(e8);
    else if ("Home" === e8.key) e8.preventDefault(), e8.stopPropagation(), this.userSeek_(0);
    else if ("End" === e8.key) e8.preventDefault(), e8.stopPropagation(), t3 && t3.isLive() ? this.userSeek_(t3.liveCurrentTime()) : this.userSeek_(this.player_.duration());
    else if (/^[0-9]$/.test(e8.key)) {
      e8.preventDefault(), e8.stopPropagation();
      const i2 = 0.1 * parseInt(e8.key, 10);
      t3 && t3.isLive() ? this.userSeek_(t3.seekableStart() + t3.liveWindow() * i2) : this.userSeek_(this.player_.duration() * i2);
    } else "PageDown" === e8.key ? (e8.preventDefault(), e8.stopPropagation(), this.userSeek_(this.player_.currentTime() - Tl * Sl)) : "PageUp" === e8.key ? (e8.preventDefault(), e8.stopPropagation(), this.userSeek_(this.player_.currentTime() + Tl * Sl)) : super.handleKeyDown(e8);
  }
  dispose() {
    this.disableInterval_(), this.off(this.player_, ["durationchange", "timeupdate"], this.update), this.off(this.player_, ["ended"], this.update_), this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.update), this.off(this.player_, ["playing"], this.enableIntervalHandler_), this.off(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_), "hidden" in ne && "visibilityState" in ne && this.off(ne, "visibilitychange", this.toggleVisibility_), super.dispose();
  }
};
El.prototype.options_ = { children: ["loadProgressBar", "playProgressBar"], barName: "playProgressBar" }, Ea.registerComponent("SeekBar", El);
var wl = class extends Ea {
  constructor(e8, t3) {
    super(e8, t3), this.handleMouseMove = ta(ea(this, this.handleMouseMove), Zr), this.throttledHandleMouseSeek = ta(ea(this, this.handleMouseSeek), Zr), this.handleMouseUpHandler_ = (e9) => this.handleMouseUp(e9), this.handleMouseDownHandler_ = (e9) => this.handleMouseDown(e9), this.enable();
  }
  createEl() {
    return super.createEl("div", { className: "vjs-progress-control vjs-control" });
  }
  handleMouseMove(e8) {
    const t3 = this.getChild("seekBar");
    if (!t3) return;
    const i2 = t3.getChild("playProgressBar"), s3 = t3.getChild("mouseTimeDisplay");
    if (!i2 && !s3) return;
    const n5 = t3.el(), r5 = _r(n5);
    let a5 = br(n5, e8).x;
    a5 = pl(a5, 0, 1), s3 && s3.update(r5, a5), i2 && i2.update(r5, t3.getProgress());
  }
  handleMouseSeek(e8) {
    const t3 = this.getChild("seekBar");
    t3 && t3.handleMouseMove(e8);
  }
  enabled() {
    return this.enabled_;
  }
  disable() {
    if (this.children().forEach((e8) => e8.disable && e8.disable()), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDownHandler_), this.off(this.el_, ["mousemove", "touchmove"], this.handleMouseMove), this.removeListenersAddedOnMousedownAndTouchstart(), this.addClass("disabled"), this.enabled_ = false, this.player_.scrubbing())) {
      const e8 = this.getChild("seekBar");
      this.player_.scrubbing(false), e8.videoWasPlaying && Ua(this.player_.play());
    }
  }
  enable() {
    this.children().forEach((e8) => e8.enable && e8.enable()), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDownHandler_), this.on(this.el_, ["mousemove", "touchmove"], this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = true);
  }
  removeListenersAddedOnMousedownAndTouchstart() {
    const e8 = this.el_.ownerDocument;
    this.off(e8, "mousemove", this.throttledHandleMouseSeek), this.off(e8, "touchmove", this.throttledHandleMouseSeek), this.off(e8, "mouseup", this.handleMouseUpHandler_), this.off(e8, "touchend", this.handleMouseUpHandler_);
  }
  handleMouseDown(e8) {
    const t3 = this.el_.ownerDocument, i2 = this.getChild("seekBar");
    i2 && i2.handleMouseDown(e8), this.on(t3, "mousemove", this.throttledHandleMouseSeek), this.on(t3, "touchmove", this.throttledHandleMouseSeek), this.on(t3, "mouseup", this.handleMouseUpHandler_), this.on(t3, "touchend", this.handleMouseUpHandler_);
  }
  handleMouseUp(e8) {
    const t3 = this.getChild("seekBar");
    t3 && t3.handleMouseUp(e8), this.removeListenersAddedOnMousedownAndTouchstart();
  }
};
wl.prototype.options_ = { children: ["seekBar"] }, Ea.registerComponent("ProgressControl", wl);
var Cl = class extends il {
  constructor(e8, t3) {
    super(e8, t3), this.setIcon("picture-in-picture-enter"), this.on(e8, ["enterpictureinpicture", "leavepictureinpicture"], (e9) => this.handlePictureInPictureChange(e9)), this.on(e8, ["disablepictureinpicturechanged", "loadedmetadata"], (e9) => this.handlePictureInPictureEnabledChange(e9)), this.on(e8, ["loadedmetadata", "audioonlymodechange", "audiopostermodechange"], () => this.handlePictureInPictureAudioModeChange()), this.disable();
  }
  buildCSSClass() {
    return `vjs-picture-in-picture-control vjs-hidden ${super.buildCSSClass()}`;
  }
  handlePictureInPictureAudioModeChange() {
    "audio" === this.player_.currentType().substring(0, 5) || this.player_.audioPosterMode() || this.player_.audioOnlyMode() ? (this.player_.isInPictureInPicture() && this.player_.exitPictureInPicture(), this.hide()) : this.show();
  }
  handlePictureInPictureEnabledChange() {
    ne.pictureInPictureEnabled && false === this.player_.disablePictureInPicture() || this.player_.options_.enableDocumentPictureInPicture && "documentPictureInPicture" in _ ? this.enable() : this.disable();
  }
  handlePictureInPictureChange(e8) {
    this.player_.isInPictureInPicture() ? (this.setIcon("picture-in-picture-exit"), this.controlText("Exit Picture-in-Picture")) : (this.setIcon("picture-in-picture-enter"), this.controlText("Picture-in-Picture")), this.handlePictureInPictureEnabledChange();
  }
  handleClick(e8) {
    this.player_.isInPictureInPicture() ? this.player_.exitPictureInPicture() : this.player_.requestPictureInPicture();
  }
  show() {
    "function" == typeof ne.exitPictureInPicture && super.show();
  }
};
Cl.prototype.controlText_ = "Picture-in-Picture", Ea.registerComponent("PictureInPictureToggle", Cl);
var kl = class extends il {
  constructor(e8, t3) {
    super(e8, t3), this.setIcon("fullscreen-enter"), this.on(e8, "fullscreenchange", (e9) => this.handleFullscreenChange(e9)), false === ne[e8.fsApi_.fullscreenEnabled] && this.disable();
  }
  buildCSSClass() {
    return `vjs-fullscreen-control ${super.buildCSSClass()}`;
  }
  handleFullscreenChange(e8) {
    this.player_.isFullscreen() ? (this.controlText("Exit Fullscreen"), this.setIcon("fullscreen-exit")) : (this.controlText("Fullscreen"), this.setIcon("fullscreen-enter"));
  }
  handleClick(e8) {
    this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen();
  }
};
kl.prototype.controlText_ = "Fullscreen", Ea.registerComponent("FullscreenToggle", kl);
var Il = function(e8, t3) {
  t3.tech_ && !t3.tech_.featuresVolumeControl && e8.addClass("vjs-hidden"), e8.on(t3, "loadstart", function() {
    t3.tech_.featuresVolumeControl ? e8.removeClass("vjs-hidden") : e8.addClass("vjs-hidden");
  });
};
var xl = class extends Ea {
  createEl() {
    const e8 = super.createEl("div", { className: "vjs-volume-level" });
    return this.setIcon("circle", e8), e8.appendChild(super.createEl("span", { className: "vjs-control-text" })), e8;
  }
};
Ea.registerComponent("VolumeLevel", xl);
var Al = class extends Ea {
  constructor(e8, t3) {
    super(e8, t3), this.update = ta(ea(this, this.update), Zr);
  }
  createEl() {
    return super.createEl("div", { className: "vjs-volume-tooltip" }, { "aria-hidden": "true" });
  }
  update(e8, t3, i2, s3) {
    if (!i2) {
      const i3 = yr(this.el_), s4 = yr(this.player_.el()), n5 = e8.width * t3;
      if (!s4 || !i3) return;
      const r5 = e8.left - s4.left + n5, a5 = e8.width - n5 + (s4.right - e8.right);
      let o5 = i3.width / 2;
      r5 < o5 ? o5 += o5 - r5 : a5 < o5 && (o5 = a5), o5 < 0 ? o5 = 0 : o5 > i3.width && (o5 = i3.width), this.el_.style.right = `-${o5}px`;
    }
    this.write(`${s3}%`);
  }
  write(e8) {
    nr(this.el_, e8);
  }
  updateVolume(e8, t3, i2, s3, n5) {
    this.requestNamedAnimationFrame("VolumeLevelTooltip#updateVolume", () => {
      this.update(e8, t3, i2, s3.toFixed(0)), n5 && n5();
    });
  }
};
Ea.registerComponent("VolumeLevelTooltip", Al);
var Dl = class extends Ea {
  constructor(e8, t3) {
    super(e8, t3), this.update = ta(ea(this, this.update), Zr);
  }
  createEl() {
    return super.createEl("div", { className: "vjs-mouse-display" });
  }
  update(e8, t3, i2) {
    const s3 = 100 * t3;
    this.getChild("volumeLevelTooltip").updateVolume(e8, t3, i2, s3, () => {
      i2 ? this.el_.style.bottom = e8.height * t3 + "px" : this.el_.style.left = e8.width * t3 + "px";
    });
  }
};
Dl.prototype.options_ = { children: ["volumeLevelTooltip"] }, Ea.registerComponent("MouseVolumeLevelDisplay", Dl);
var Pl = class extends gl {
  constructor(e8, t3) {
    super(e8, t3), this.on("slideractive", (e9) => this.updateLastVolume_(e9)), this.on(e8, "volumechange", (e9) => this.updateARIAAttributes(e9)), e8.ready(() => this.updateARIAAttributes());
  }
  createEl() {
    return super.createEl("div", { className: "vjs-volume-bar vjs-slider-bar" }, { "aria-label": this.localize("Volume Level"), "aria-live": "polite" });
  }
  handleMouseDown(e8) {
    Cr(e8) && super.handleMouseDown(e8);
  }
  handleMouseMove(e8) {
    const t3 = this.getChild("mouseVolumeLevelDisplay");
    if (t3) {
      const i2 = this.el(), s3 = yr(i2), n5 = this.vertical();
      let r5 = br(i2, e8);
      r5 = n5 ? r5.y : r5.x, r5 = pl(r5, 0, 1), t3.update(s3, r5, n5);
    }
    Cr(e8) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e8)));
  }
  checkMuted() {
    this.player_.muted() && this.player_.muted(false);
  }
  getPercent() {
    return this.player_.muted() ? 0 : this.player_.volume();
  }
  stepForward() {
    this.checkMuted(), this.player_.volume(this.player_.volume() + 0.1);
  }
  stepBack() {
    this.checkMuted(), this.player_.volume(this.player_.volume() - 0.1);
  }
  updateARIAAttributes(e8) {
    const t3 = this.player_.muted() ? 0 : this.volumeAsPercentage_();
    this.el_.setAttribute("aria-valuenow", t3), this.el_.setAttribute("aria-valuetext", t3 + "%");
  }
  volumeAsPercentage_() {
    return Math.round(100 * this.player_.volume());
  }
  updateLastVolume_() {
    const e8 = this.player_.volume();
    this.one("sliderinactive", () => {
      0 === this.player_.volume() && this.player_.lastVolume_(e8);
    });
  }
};
Pl.prototype.options_ = { children: ["volumeLevel"], barName: "volumeLevel" }, Xn || Dn || Pl.prototype.options_.children.splice(0, 0, "mouseVolumeLevelDisplay"), Pl.prototype.playerEvent = "volumechange", Ea.registerComponent("VolumeBar", Pl);
var Ll = class extends Ea {
  constructor(e8, t3 = {}) {
    t3.vertical = t3.vertical || false, (void 0 === t3.volumeBar || Sn(t3.volumeBar)) && (t3.volumeBar = t3.volumeBar || {}, t3.volumeBar.vertical = t3.vertical), super(e8, t3), Il(this, e8), this.throttledHandleMouseMove = ta(ea(this, this.handleMouseMove), Zr), this.handleMouseUpHandler_ = (e9) => this.handleMouseUp(e9), this.on("mousedown", (e9) => this.handleMouseDown(e9)), this.on("touchstart", (e9) => this.handleMouseDown(e9)), this.on("mousemove", (e9) => this.handleMouseMove(e9)), this.on(this.volumeBar, ["focus", "slideractive"], () => {
      this.volumeBar.addClass("vjs-slider-active"), this.addClass("vjs-slider-active"), this.trigger("slideractive");
    }), this.on(this.volumeBar, ["blur", "sliderinactive"], () => {
      this.volumeBar.removeClass("vjs-slider-active"), this.removeClass("vjs-slider-active"), this.trigger("sliderinactive");
    });
  }
  createEl() {
    let e8 = "vjs-volume-horizontal";
    return this.options_.vertical && (e8 = "vjs-volume-vertical"), super.createEl("div", { className: `vjs-volume-control vjs-control ${e8}` });
  }
  handleMouseDown(e8) {
    const t3 = this.el_.ownerDocument;
    this.on(t3, "mousemove", this.throttledHandleMouseMove), this.on(t3, "touchmove", this.throttledHandleMouseMove), this.on(t3, "mouseup", this.handleMouseUpHandler_), this.on(t3, "touchend", this.handleMouseUpHandler_);
  }
  handleMouseUp(e8) {
    const t3 = this.el_.ownerDocument;
    this.off(t3, "mousemove", this.throttledHandleMouseMove), this.off(t3, "touchmove", this.throttledHandleMouseMove), this.off(t3, "mouseup", this.handleMouseUpHandler_), this.off(t3, "touchend", this.handleMouseUpHandler_);
  }
  handleMouseMove(e8) {
    this.volumeBar.handleMouseMove(e8);
  }
};
Ll.prototype.options_ = { children: ["volumeBar"] }, Ea.registerComponent("VolumeControl", Ll);
var Ol = function(e8, t3) {
  t3.tech_ && !t3.tech_.featuresMuteControl && e8.addClass("vjs-hidden"), e8.on(t3, "loadstart", function() {
    t3.tech_.featuresMuteControl ? e8.removeClass("vjs-hidden") : e8.addClass("vjs-hidden");
  });
};
var Nl = class extends il {
  constructor(e8, t3) {
    super(e8, t3), Ol(this, e8), this.on(e8, ["loadstart", "volumechange"], (e9) => this.update(e9));
  }
  buildCSSClass() {
    return `vjs-mute-control ${super.buildCSSClass()}`;
  }
  handleClick(e8) {
    const t3 = this.player_.volume(), i2 = this.player_.lastVolume_();
    if (0 === t3) {
      const e9 = i2 < 0.1 ? 0.1 : i2;
      this.player_.volume(e9), this.player_.muted(false);
    } else this.player_.muted(!this.player_.muted());
  }
  update(e8) {
    this.updateIcon_(), this.updateControlText_();
  }
  updateIcon_() {
    const e8 = this.player_.volume();
    let t3 = 3;
    this.setIcon("volume-high"), Xn && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted), 0 === e8 || this.player_.muted() ? (this.setIcon("volume-mute"), t3 = 0) : e8 < 0.33 ? (this.setIcon("volume-low"), t3 = 1) : e8 < 0.67 && (this.setIcon("volume-medium"), t3 = 2), lr(this.el_, [0, 1, 2, 3].reduce((e9, t4) => e9 + `${t4 ? " " : ""}vjs-vol-${t4}`, "")), or(this.el_, `vjs-vol-${t3}`);
  }
  updateControlText_() {
    const e8 = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
    this.controlText() !== e8 && this.controlText(e8);
  }
};
Nl.prototype.controlText_ = "Mute", Ea.registerComponent("MuteToggle", Nl);
var Rl = class extends Ea {
  constructor(e8, t3 = {}) {
    void 0 !== t3.inline ? t3.inline = t3.inline : t3.inline = true, (void 0 === t3.volumeControl || Sn(t3.volumeControl)) && (t3.volumeControl = t3.volumeControl || {}, t3.volumeControl.vertical = !t3.inline), super(e8, t3), this.handleKeyPressHandler_ = (e9) => this.handleKeyPress(e9), this.on(e8, ["loadstart"], (e9) => this.volumePanelState_(e9)), this.on(this.muteToggle, "keyup", (e9) => this.handleKeyPress(e9)), this.on(this.volumeControl, "keyup", (e9) => this.handleVolumeControlKeyUp(e9)), this.on("keydown", (e9) => this.handleKeyPress(e9)), this.on("mouseover", (e9) => this.handleMouseOver(e9)), this.on("mouseout", (e9) => this.handleMouseOut(e9)), this.on(this.volumeControl, ["slideractive"], this.sliderActive_), this.on(this.volumeControl, ["sliderinactive"], this.sliderInactive_);
  }
  sliderActive_() {
    this.addClass("vjs-slider-active");
  }
  sliderInactive_() {
    this.removeClass("vjs-slider-active");
  }
  volumePanelState_() {
    this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only");
  }
  createEl() {
    let e8 = "vjs-volume-panel-horizontal";
    return this.options_.inline || (e8 = "vjs-volume-panel-vertical"), super.createEl("div", { className: `vjs-volume-panel vjs-control ${e8}` });
  }
  dispose() {
    this.handleMouseOut(), super.dispose();
  }
  handleVolumeControlKeyUp(e8) {
    "Escape" === e8.key && this.muteToggle.focus();
  }
  handleMouseOver(e8) {
    this.addClass("vjs-hover"), Gr(ne, "keyup", this.handleKeyPressHandler_);
  }
  handleMouseOut(e8) {
    this.removeClass("vjs-hover"), Xr(ne, "keyup", this.handleKeyPressHandler_);
  }
  handleKeyPress(e8) {
    "Escape" === e8.key && this.handleMouseOut();
  }
};
Rl.prototype.options_ = { children: ["muteToggle", "volumeControl"] }, Ea.registerComponent("VolumePanel", Rl);
var Ml = class extends il {
  constructor(e8, t3) {
    super(e8, t3), this.validOptions = [5, 10, 30], this.skipTime = this.getSkipForwardTime(), this.skipTime && this.validOptions.includes(this.skipTime) ? (this.setIcon(`forward-${this.skipTime}`), this.controlText(this.localize("Skip forward {1} seconds", [this.skipTime.toLocaleString(e8.language())])), this.show()) : this.hide();
  }
  getSkipForwardTime() {
    const e8 = this.options_.playerOptions;
    return e8.controlBar && e8.controlBar.skipButtons && e8.controlBar.skipButtons.forward;
  }
  buildCSSClass() {
    return `vjs-skip-forward-${this.getSkipForwardTime()} ${super.buildCSSClass()}`;
  }
  handleClick(e8) {
    if (isNaN(this.player_.duration())) return;
    const t3 = this.player_.currentTime(), i2 = this.player_.liveTracker, s3 = i2 && i2.isLive() ? i2.seekableEnd() : this.player_.duration();
    let n5;
    n5 = t3 + this.skipTime <= s3 ? t3 + this.skipTime : s3, this.player_.currentTime(n5);
  }
  handleLanguagechange() {
    this.controlText(this.localize("Skip forward {1} seconds", [this.skipTime]));
  }
};
Ml.prototype.controlText_ = "Skip Forward", Ea.registerComponent("SkipForward", Ml);
var Ul = class extends il {
  constructor(e8, t3) {
    super(e8, t3), this.validOptions = [5, 10, 30], this.skipTime = this.getSkipBackwardTime(), this.skipTime && this.validOptions.includes(this.skipTime) ? (this.setIcon(`replay-${this.skipTime}`), this.controlText(this.localize("Skip backward {1} seconds", [this.skipTime.toLocaleString(e8.language())])), this.show()) : this.hide();
  }
  getSkipBackwardTime() {
    const e8 = this.options_.playerOptions;
    return e8.controlBar && e8.controlBar.skipButtons && e8.controlBar.skipButtons.backward;
  }
  buildCSSClass() {
    return `vjs-skip-backward-${this.getSkipBackwardTime()} ${super.buildCSSClass()}`;
  }
  handleClick(e8) {
    const t3 = this.player_.currentTime(), i2 = this.player_.liveTracker, s3 = i2 && i2.isLive() && i2.seekableStart();
    let n5;
    n5 = s3 && t3 - this.skipTime <= s3 ? s3 : t3 >= this.skipTime ? t3 - this.skipTime : 0, this.player_.currentTime(n5);
  }
  handleLanguagechange() {
    this.controlText(this.localize("Skip backward {1} seconds", [this.skipTime]));
  }
};
Ul.prototype.controlText_ = "Skip Backward", Ea.registerComponent("SkipBackward", Ul);
var Bl = class extends Ea {
  constructor(e8, t3) {
    super(e8, t3), t3 && (this.menuButton_ = t3.menuButton), this.focusedChild_ = -1, this.on("keydown", (e9) => this.handleKeyDown(e9)), this.boundHandleBlur_ = (e9) => this.handleBlur(e9), this.boundHandleTapClick_ = (e9) => this.handleTapClick(e9);
  }
  addEventListenerForItem(e8) {
    e8 instanceof Ea && (this.on(e8, "blur", this.boundHandleBlur_), this.on(e8, ["tap", "click"], this.boundHandleTapClick_));
  }
  removeEventListenerForItem(e8) {
    e8 instanceof Ea && (this.off(e8, "blur", this.boundHandleBlur_), this.off(e8, ["tap", "click"], this.boundHandleTapClick_));
  }
  removeChild(e8) {
    "string" == typeof e8 && (e8 = this.getChild(e8)), this.removeEventListenerForItem(e8), super.removeChild(e8);
  }
  addItem(e8) {
    const t3 = this.addChild(e8);
    t3 && this.addEventListenerForItem(t3);
  }
  createEl() {
    const e8 = this.options_.contentElType || "ul";
    this.contentEl_ = sr(e8, { className: "vjs-menu-content" }), this.contentEl_.setAttribute("role", "menu");
    const t3 = super.createEl("div", { append: this.contentEl_, className: "vjs-menu" });
    return t3.appendChild(this.contentEl_), Gr(t3, "click", function(e9) {
      e9.preventDefault(), e9.stopImmediatePropagation();
    }), t3;
  }
  dispose() {
    this.contentEl_ = null, this.boundHandleBlur_ = null, this.boundHandleTapClick_ = null, super.dispose();
  }
  handleBlur(e8) {
    const t3 = e8.relatedTarget || ne.activeElement;
    if (!this.children().some((e9) => e9.el() === t3)) {
      const e9 = this.menuButton_;
      e9 && e9.buttonPressed_ && t3 !== e9.el().firstChild && e9.unpressButton();
    }
  }
  handleTapClick(e8) {
    if (this.menuButton_) {
      this.menuButton_.unpressButton();
      const t3 = this.children();
      if (!Array.isArray(t3)) return;
      const i2 = t3.filter((t4) => t4.el() === e8.target)[0];
      if (!i2) return;
      "CaptionSettingsMenuItem" !== i2.name() && this.menuButton_.focus();
    }
  }
  handleKeyDown(e8) {
    "ArrowLeft" === e8.key || "ArrowDown" === e8.key ? (e8.preventDefault(), e8.stopPropagation(), this.stepForward()) : "ArrowRight" !== e8.key && "ArrowUp" !== e8.key || (e8.preventDefault(), e8.stopPropagation(), this.stepBack());
  }
  stepForward() {
    let e8 = 0;
    void 0 !== this.focusedChild_ && (e8 = this.focusedChild_ + 1), this.focus(e8);
  }
  stepBack() {
    let e8 = 0;
    void 0 !== this.focusedChild_ && (e8 = this.focusedChild_ - 1), this.focus(e8);
  }
  focus(e8 = 0) {
    const t3 = this.children().slice();
    t3.length && t3[0].hasClass("vjs-menu-title") && t3.shift(), t3.length > 0 && (e8 < 0 ? e8 = 0 : e8 >= t3.length && (e8 = t3.length - 1), this.focusedChild_ = e8, t3[e8].el_.focus());
  }
};
Ea.registerComponent("Menu", Bl);
var Fl = class extends Ea {
  constructor(e8, t3 = {}) {
    super(e8, t3), this.menuButton_ = new il(e8, t3), this.menuButton_.controlText(this.controlText_), this.menuButton_.el_.setAttribute("aria-haspopup", "true");
    const i2 = il.prototype.buildCSSClass();
    this.menuButton_.el_.className = this.buildCSSClass() + " " + i2, this.menuButton_.removeClass("vjs-control"), this.addChild(this.menuButton_), this.update(), this.enabled_ = true;
    const s3 = (e9) => this.handleClick(e9);
    this.handleMenuKeyUp_ = (e9) => this.handleMenuKeyUp(e9), this.on(this.menuButton_, "tap", s3), this.on(this.menuButton_, "click", s3), this.on(this.menuButton_, "keydown", (e9) => this.handleKeyDown(e9)), this.on(this.menuButton_, "mouseenter", () => {
      this.addClass("vjs-hover"), this.menu.show(), Gr(ne, "keyup", this.handleMenuKeyUp_);
    }), this.on("mouseleave", (e9) => this.handleMouseLeave(e9)), this.on("keydown", (e9) => this.handleSubmenuKeyDown(e9));
  }
  update() {
    const e8 = this.createMenu();
    this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = e8, this.addChild(e8), this.buttonPressed_ = false, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? (this.hide(), this.menu.contentEl_.removeAttribute("role")) : (this.show(), this.menu.contentEl_.setAttribute("role", "menu"));
  }
  createMenu() {
    const e8 = new Bl(this.player_, { menuButton: this });
    if (this.hideThreshold_ = 0, this.options_.title) {
      const t3 = sr("li", { className: "vjs-menu-title", textContent: va(this.options_.title), tabIndex: -1 }), i2 = new Ea(this.player_, { el: t3 });
      e8.addItem(i2);
    }
    if (this.items = this.createItems(), this.items) for (let t3 = 0; t3 < this.items.length; t3++) e8.addItem(this.items[t3]);
    return e8;
  }
  createItems() {
  }
  createEl() {
    return super.createEl("div", { className: this.buildWrapperCSSClass() }, {});
  }
  setIcon(e8) {
    super.setIcon(e8, this.menuButton_.el_);
  }
  buildWrapperCSSClass() {
    let e8 = "vjs-menu-button";
    true === this.options_.inline ? e8 += "-inline" : e8 += "-popup";
    return `vjs-menu-button ${e8} ${il.prototype.buildCSSClass()} ${super.buildCSSClass()}`;
  }
  buildCSSClass() {
    let e8 = "vjs-menu-button";
    return true === this.options_.inline ? e8 += "-inline" : e8 += "-popup", `vjs-menu-button ${e8} ${super.buildCSSClass()}`;
  }
  controlText(e8, t3 = this.menuButton_.el()) {
    return this.menuButton_.controlText(e8, t3);
  }
  dispose() {
    this.handleMouseLeave(), super.dispose();
  }
  handleClick(e8) {
    this.buttonPressed_ ? this.unpressButton() : this.pressButton();
  }
  handleMouseLeave(e8) {
    this.removeClass("vjs-hover"), Xr(ne, "keyup", this.handleMenuKeyUp_);
  }
  focus() {
    this.menuButton_.focus();
  }
  blur() {
    this.menuButton_.blur();
  }
  handleKeyDown(e8) {
    "Escape" === e8.key || "Tab" === e8.key ? (this.buttonPressed_ && this.unpressButton(), "Tab" === !e8.key && (e8.preventDefault(), this.menuButton_.focus())) : "Up" !== e8.key && ("Down" !== e8.key || this.player_.options_.playerOptions.spatialNavigation && this.player_.options_.playerOptions.spatialNavigation.enabled) || this.buttonPressed_ || (e8.preventDefault(), this.pressButton());
  }
  handleMenuKeyUp(e8) {
    "Escape" !== e8.key && "Tab" !== e8.key || this.removeClass("vjs-hover");
  }
  handleSubmenuKeyPress(e8) {
    this.handleSubmenuKeyDown(e8);
  }
  handleSubmenuKeyDown(e8) {
    "Escape" !== e8.key && "Tab" !== e8.key || (this.buttonPressed_ && this.unpressButton(), "Tab" === !e8.key && (e8.preventDefault(), this.menuButton_.focus()));
  }
  pressButton() {
    if (this.enabled_) {
      if (this.buttonPressed_ = true, this.menu.show(), this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), Xn && tr()) return;
      this.menu.focus();
    }
  }
  unpressButton() {
    this.enabled_ && (this.buttonPressed_ = false, this.menu.unlockShowing(), this.menu.hide(), this.menuButton_.el_.setAttribute("aria-expanded", "false"));
  }
  disable() {
    this.unpressButton(), this.enabled_ = false, this.addClass("vjs-disabled"), this.menuButton_.disable();
  }
  enable() {
    this.enabled_ = true, this.removeClass("vjs-disabled"), this.menuButton_.enable();
  }
};
Ea.registerComponent("MenuButton", Fl);
var ql = class extends Fl {
  constructor(e8, t3) {
    const i2 = t3.tracks;
    if (super(e8, t3), this.items.length <= 1 && this.hide(), !i2) return;
    const s3 = ea(this, this.update);
    i2.addEventListener("removetrack", s3), i2.addEventListener("addtrack", s3), i2.addEventListener("labelchange", s3), this.player_.on("ready", s3), this.player_.on("dispose", function() {
      i2.removeEventListener("removetrack", s3), i2.removeEventListener("addtrack", s3), i2.removeEventListener("labelchange", s3);
    });
  }
};
Ea.registerComponent("TrackButton", ql);
var jl = class extends Wo {
  constructor(e8, t3) {
    super(e8, t3), this.selectable = t3.selectable, this.isSelected_ = t3.selected || false, this.multiSelectable = t3.multiSelectable, this.selected(this.isSelected_), this.selectable ? this.multiSelectable ? this.el_.setAttribute("role", "menuitemcheckbox") : this.el_.setAttribute("role", "menuitemradio") : this.el_.setAttribute("role", "menuitem");
  }
  createEl(e8, t3, i2) {
    this.nonIconControl = true;
    const s3 = super.createEl("li", Object.assign({ className: "vjs-menu-item", tabIndex: -1 }, t3), i2), n5 = sr("span", { className: "vjs-menu-item-text", textContent: this.localize(this.options_.label) });
    return this.player_.options_.experimentalSvgIcons ? s3.appendChild(n5) : s3.replaceChild(n5, s3.querySelector(".vjs-icon-placeholder")), s3;
  }
  handleKeyDown(e8) {
    ["Tab", "Escape", "ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown"].includes(e8.key) || super.handleKeyDown(e8);
  }
  handleClick(e8) {
    this.selected(true);
  }
  selected(e8) {
    this.selectable && (e8 ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = true) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = false));
  }
};
Ea.registerComponent("MenuItem", jl);
var $l = class extends jl {
  constructor(e8, t3) {
    const i2 = t3.track, s3 = e8.textTracks();
    t3.label = i2.label || i2.language || "Unknown", t3.selected = "showing" === i2.mode, super(e8, t3), this.track = i2, this.kinds = (t3.kinds || [t3.kind || this.track.kind]).filter(Boolean);
    const n5 = (...e9) => {
      this.handleTracksChange.apply(this, e9);
    }, r5 = (...e9) => {
      this.handleSelectedLanguageChange.apply(this, e9);
    };
    if (e8.on(["loadstart", "texttrackchange"], n5), s3.addEventListener("change", n5), s3.addEventListener("selectedlanguagechange", r5), this.on("dispose", function() {
      e8.off(["loadstart", "texttrackchange"], n5), s3.removeEventListener("change", n5), s3.removeEventListener("selectedlanguagechange", r5);
    }), void 0 === s3.onchange) {
      let e9;
      this.on(["tap", "click"], function() {
        if ("object" != typeof _.Event) try {
          e9 = new _.Event("change");
        } catch (t4) {
        }
        e9 || (e9 = ne.createEvent("Event"), e9.initEvent("change", true, true)), s3.dispatchEvent(e9);
      });
    }
    this.handleTracksChange();
  }
  handleClick(e8) {
    const t3 = this.track, i2 = this.player_.textTracks();
    if (super.handleClick(e8), i2) for (let s3 = 0; s3 < i2.length; s3++) {
      const e9 = i2[s3];
      -1 !== this.kinds.indexOf(e9.kind) && (e9 === t3 ? "showing" !== e9.mode && (e9.mode = "showing") : "disabled" !== e9.mode && (e9.mode = "disabled"));
    }
  }
  handleTracksChange(e8) {
    const t3 = "showing" === this.track.mode;
    t3 !== this.isSelected_ && this.selected(t3);
  }
  handleSelectedLanguageChange(e8) {
    if ("showing" === this.track.mode) {
      const e9 = this.player_.cache_.selectedLanguage;
      if (e9 && e9.enabled && e9.language === this.track.language && e9.kind !== this.track.kind) return;
      this.player_.cache_.selectedLanguage = { enabled: true, language: this.track.language, kind: this.track.kind };
    }
  }
  dispose() {
    this.track = null, super.dispose();
  }
};
Ea.registerComponent("TextTrackMenuItem", $l);
var Hl = class extends $l {
  constructor(e8, t3) {
    t3.track = { player: e8, kind: t3.kind, kinds: t3.kinds, default: false, mode: "disabled" }, t3.kinds || (t3.kinds = [t3.kind]), t3.label ? t3.track.label = t3.label : t3.track.label = t3.kinds.join(" and ") + " off", t3.selectable = true, t3.multiSelectable = false, super(e8, t3);
  }
  handleTracksChange(e8) {
    const t3 = this.player().textTracks();
    let i2 = true;
    for (let s3 = 0, n5 = t3.length; s3 < n5; s3++) {
      const e9 = t3[s3];
      if (this.options_.kinds.indexOf(e9.kind) > -1 && "showing" === e9.mode) {
        i2 = false;
        break;
      }
    }
    i2 !== this.isSelected_ && this.selected(i2);
  }
  handleSelectedLanguageChange(e8) {
    const t3 = this.player().textTracks();
    let i2 = true;
    for (let s3 = 0, n5 = t3.length; s3 < n5; s3++) {
      const e9 = t3[s3];
      if (["captions", "descriptions", "subtitles"].indexOf(e9.kind) > -1 && "showing" === e9.mode) {
        i2 = false;
        break;
      }
    }
    i2 && (this.player_.cache_.selectedLanguage = { enabled: false });
  }
  handleLanguagechange() {
    this.$(".vjs-menu-item-text").textContent = this.player_.localize(this.options_.label), super.handleLanguagechange();
  }
};
Ea.registerComponent("OffTextTrackMenuItem", Hl);
var Vl = class extends ql {
  constructor(e8, t3 = {}) {
    t3.tracks = e8.textTracks(), super(e8, t3);
  }
  createItems(e8 = [], t3 = $l) {
    let i2;
    this.label_ && (i2 = `${this.label_} off`), e8.push(new Hl(this.player_, { kinds: this.kinds_, kind: this.kind_, label: i2 })), this.hideThreshold_ += 1;
    const s3 = this.player_.textTracks();
    Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
    for (let n5 = 0; n5 < s3.length; n5++) {
      const i3 = s3[n5];
      if (this.kinds_.indexOf(i3.kind) > -1) {
        const s4 = new t3(this.player_, { track: i3, kinds: this.kinds_, kind: this.kind_, selectable: true, multiSelectable: false });
        s4.addClass(`vjs-${i3.kind}-menu-item`), e8.push(s4);
      }
    }
    return e8;
  }
};
Ea.registerComponent("TextTrackButton", Vl);
var zl = class extends jl {
  constructor(e8, t3) {
    const i2 = t3.track, s3 = t3.cue, n5 = e8.currentTime();
    t3.selectable = true, t3.multiSelectable = false, t3.label = s3.text, t3.selected = s3.startTime <= n5 && n5 < s3.endTime, super(e8, t3), this.track = i2, this.cue = s3;
  }
  handleClick(e8) {
    super.handleClick(), this.player_.currentTime(this.cue.startTime);
  }
};
Ea.registerComponent("ChaptersTrackMenuItem", zl);
var Wl = class extends Vl {
  constructor(e8, t3, i2) {
    super(e8, t3, i2), this.setIcon("chapters"), this.selectCurrentItem_ = () => {
      this.items.forEach((e9) => {
        e9.selected(this.track_.activeCues[0] === e9.cue);
      });
    };
  }
  buildCSSClass() {
    return `vjs-chapters-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-chapters-button ${super.buildWrapperCSSClass()}`;
  }
  update(e8) {
    if (e8 && e8.track && "chapters" !== e8.track.kind) return;
    const t3 = this.findChaptersTrack();
    t3 !== this.track_ ? (this.setTrack(t3), super.update()) : (!this.items || t3 && t3.cues && t3.cues.length !== this.items.length) && super.update();
  }
  setTrack(e8) {
    if (this.track_ !== e8) {
      if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
        const e9 = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
        e9 && e9.removeEventListener("load", this.updateHandler_), this.track_.removeEventListener("cuechange", this.selectCurrentItem_), this.track_ = null;
      }
      if (this.track_ = e8, this.track_) {
        this.track_.mode = "hidden";
        const e9 = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
        e9 && e9.addEventListener("load", this.updateHandler_), this.track_.addEventListener("cuechange", this.selectCurrentItem_);
      }
    }
  }
  findChaptersTrack() {
    const e8 = this.player_.textTracks() || [];
    for (let t3 = e8.length - 1; t3 >= 0; t3--) {
      const i2 = e8[t3];
      if (i2.kind === this.kind_) return i2;
    }
  }
  getMenuCaption() {
    return this.track_ && this.track_.label ? this.track_.label : this.localize(va(this.kind_));
  }
  createMenu() {
    return this.options_.title = this.getMenuCaption(), super.createMenu();
  }
  createItems() {
    const e8 = [];
    if (!this.track_) return e8;
    const t3 = this.track_.cues;
    if (!t3) return e8;
    for (let i2 = 0, s3 = t3.length; i2 < s3; i2++) {
      const s4 = t3[i2], n5 = new zl(this.player_, { track: this.track_, cue: s4 });
      e8.push(n5);
    }
    return e8;
  }
};
Wl.prototype.kind_ = "chapters", Wl.prototype.controlText_ = "Chapters", Ea.registerComponent("ChaptersButton", Wl);
var Gl = class extends Vl {
  constructor(e8, t3, i2) {
    super(e8, t3, i2), this.setIcon("audio-description");
    const s3 = e8.textTracks(), n5 = ea(this, this.handleTracksChange);
    s3.addEventListener("change", n5), this.on("dispose", function() {
      s3.removeEventListener("change", n5);
    });
  }
  handleTracksChange(e8) {
    const t3 = this.player().textTracks();
    let i2 = false;
    for (let s3 = 0, n5 = t3.length; s3 < n5; s3++) {
      const e9 = t3[s3];
      if (e9.kind !== this.kind_ && "showing" === e9.mode) {
        i2 = true;
        break;
      }
    }
    i2 ? this.disable() : this.enable();
  }
  buildCSSClass() {
    return `vjs-descriptions-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-descriptions-button ${super.buildWrapperCSSClass()}`;
  }
};
Gl.prototype.kind_ = "descriptions", Gl.prototype.controlText_ = "Descriptions", Ea.registerComponent("DescriptionsButton", Gl);
var Xl = class extends Vl {
  constructor(e8, t3, i2) {
    super(e8, t3, i2), this.setIcon("subtitles");
  }
  buildCSSClass() {
    return `vjs-subtitles-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-subtitles-button ${super.buildWrapperCSSClass()}`;
  }
};
Xl.prototype.kind_ = "subtitles", Xl.prototype.controlText_ = "Subtitles", Ea.registerComponent("SubtitlesButton", Xl);
var Kl = class extends $l {
  constructor(e8, t3) {
    t3.track = { player: e8, kind: t3.kind, label: t3.kind + " settings", selectable: false, default: false, mode: "disabled" }, t3.selectable = false, t3.name = "CaptionSettingsMenuItem", super(e8, t3), this.addClass("vjs-texttrack-settings"), this.controlText(", opens " + t3.kind + " settings dialog");
  }
  handleClick(e8) {
    this.player().getChild("textTrackSettings").open();
  }
  handleLanguagechange() {
    this.$(".vjs-menu-item-text").textContent = this.player_.localize(this.options_.kind + " settings"), super.handleLanguagechange();
  }
};
Ea.registerComponent("CaptionSettingsMenuItem", Kl);
var Yl = class extends Vl {
  constructor(e8, t3, i2) {
    super(e8, t3, i2), this.setIcon("captions");
  }
  buildCSSClass() {
    return `vjs-captions-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-captions-button ${super.buildWrapperCSSClass()}`;
  }
  createItems() {
    const e8 = [];
    return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e8.push(new Kl(this.player_, { kind: this.kind_ })), this.hideThreshold_ += 1), super.createItems(e8);
  }
};
Yl.prototype.kind_ = "captions", Yl.prototype.controlText_ = "Captions", Ea.registerComponent("CaptionsButton", Yl);
var Ql = class extends $l {
  createEl(e8, t3, i2) {
    const s3 = super.createEl(e8, t3, i2), n5 = s3.querySelector(".vjs-menu-item-text");
    return "captions" === this.options_.track.kind && (this.player_.options_.experimentalSvgIcons ? this.setIcon("captions", s3) : n5.appendChild(sr("span", { className: "vjs-icon-placeholder" }, { "aria-hidden": true })), n5.appendChild(sr("span", { className: "vjs-control-text", textContent: ` ${this.localize("Captions")}` }))), s3;
  }
};
Ea.registerComponent("SubsCapsMenuItem", Ql);
var Jl = class extends Vl {
  constructor(e8, t3 = {}) {
    super(e8, t3), this.label_ = "subtitles", this.setIcon("subtitles"), ["en", "en-us", "en-ca", "fr-ca"].indexOf(this.player_.language_) > -1 && (this.label_ = "captions", this.setIcon("captions")), this.menuButton_.controlText(va(this.label_));
  }
  buildCSSClass() {
    return `vjs-subs-caps-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-subs-caps-button ${super.buildWrapperCSSClass()}`;
  }
  createItems() {
    let e8 = [];
    return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e8.push(new Kl(this.player_, { kind: this.label_ })), this.hideThreshold_ += 1), e8 = super.createItems(e8, Ql), e8;
  }
};
Jl.prototype.kinds_ = ["captions", "subtitles"], Jl.prototype.controlText_ = "Subtitles", Ea.registerComponent("SubsCapsButton", Jl);
var Zl = class extends jl {
  constructor(e8, t3) {
    const i2 = t3.track, s3 = e8.audioTracks();
    t3.label = i2.label || i2.language || "Unknown", t3.selected = i2.enabled, super(e8, t3), this.track = i2, this.addClass(`vjs-${i2.kind}-menu-item`);
    const n5 = (...e9) => {
      this.handleTracksChange.apply(this, e9);
    };
    s3.addEventListener("change", n5), this.on("dispose", () => {
      s3.removeEventListener("change", n5);
    });
  }
  createEl(e8, t3, i2) {
    const s3 = super.createEl(e8, t3, i2), n5 = s3.querySelector(".vjs-menu-item-text");
    return ["main-desc", "descriptions"].indexOf(this.options_.track.kind) >= 0 && (n5.appendChild(sr("span", { className: "vjs-icon-placeholder" }, { "aria-hidden": true })), n5.appendChild(sr("span", { className: "vjs-control-text", textContent: " " + this.localize("Descriptions") }))), s3;
  }
  handleClick(e8) {
    if (super.handleClick(e8), this.track.enabled = true, this.player_.tech_.featuresNativeAudioTracks) {
      const e9 = this.player_.audioTracks();
      for (let t3 = 0; t3 < e9.length; t3++) {
        const i2 = e9[t3];
        i2 !== this.track && (i2.enabled = i2 === this.track);
      }
    }
  }
  handleTracksChange(e8) {
    this.selected(this.track.enabled);
  }
};
Ea.registerComponent("AudioTrackMenuItem", Zl);
var eu = class extends ql {
  constructor(e8, t3 = {}) {
    t3.tracks = e8.audioTracks(), super(e8, t3), this.setIcon("audio");
  }
  buildCSSClass() {
    return `vjs-audio-button ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-audio-button ${super.buildWrapperCSSClass()}`;
  }
  createItems(e8 = []) {
    this.hideThreshold_ = 1;
    const t3 = this.player_.audioTracks();
    for (let i2 = 0; i2 < t3.length; i2++) {
      const s3 = t3[i2];
      e8.push(new Zl(this.player_, { track: s3, selectable: true, multiSelectable: false }));
    }
    return e8;
  }
};
eu.prototype.controlText_ = "Audio Track", Ea.registerComponent("AudioTrackButton", eu);
var tu = class extends jl {
  constructor(e8, t3) {
    const i2 = t3.rate, s3 = parseFloat(i2, 10);
    t3.label = i2, t3.selected = s3 === e8.playbackRate(), t3.selectable = true, t3.multiSelectable = false, super(e8, t3), this.label = i2, this.rate = s3, this.on(e8, "ratechange", (e9) => this.update(e9));
  }
  handleClick(e8) {
    super.handleClick(), this.player().playbackRate(this.rate);
  }
  update(e8) {
    this.selected(this.player().playbackRate() === this.rate);
  }
};
tu.prototype.contentElType = "button", Ea.registerComponent("PlaybackRateMenuItem", tu);
var iu = class extends Fl {
  constructor(e8, t3) {
    super(e8, t3), this.menuButton_.el_.setAttribute("aria-describedby", this.labelElId_), this.updateVisibility(), this.updateLabel(), this.on(e8, "loadstart", (e9) => this.updateVisibility(e9)), this.on(e8, "ratechange", (e9) => this.updateLabel(e9)), this.on(e8, "playbackrateschange", (e9) => this.handlePlaybackRateschange(e9));
  }
  createEl() {
    const e8 = super.createEl();
    return this.labelElId_ = "vjs-playback-rate-value-label-" + this.id_, this.labelEl_ = sr("div", { className: "vjs-playback-rate-value", id: this.labelElId_, textContent: "1x" }), e8.appendChild(this.labelEl_), e8;
  }
  dispose() {
    this.labelEl_ = null, super.dispose();
  }
  buildCSSClass() {
    return `vjs-playback-rate ${super.buildCSSClass()}`;
  }
  buildWrapperCSSClass() {
    return `vjs-playback-rate ${super.buildWrapperCSSClass()}`;
  }
  createItems() {
    const e8 = this.playbackRates(), t3 = [];
    for (let i2 = e8.length - 1; i2 >= 0; i2--) t3.push(new tu(this.player(), { rate: e8[i2] + "x" }));
    return t3;
  }
  handlePlaybackRateschange(e8) {
    this.update();
  }
  playbackRates() {
    const e8 = this.player();
    return e8.playbackRates && e8.playbackRates() || [];
  }
  playbackRateSupported() {
    return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0;
  }
  updateVisibility(e8) {
    this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden");
  }
  updateLabel(e8) {
    this.playbackRateSupported() && (this.labelEl_.textContent = this.player().playbackRate() + "x");
  }
};
iu.prototype.controlText_ = "Playback Rate", Ea.registerComponent("PlaybackRateMenuButton", iu);
var su = class extends Ea {
  buildCSSClass() {
    return `vjs-spacer ${super.buildCSSClass()}`;
  }
  createEl(e8 = "div", t3 = {}, i2 = {}) {
    return t3.className || (t3.className = this.buildCSSClass()), super.createEl(e8, t3, i2);
  }
};
Ea.registerComponent("Spacer", su);
var nu = class extends su {
  buildCSSClass() {
    return `vjs-custom-control-spacer ${super.buildCSSClass()}`;
  }
  createEl() {
    return super.createEl("div", { className: this.buildCSSClass(), textContent: " " });
  }
};
Ea.registerComponent("CustomControlSpacer", nu);
var ru = class extends Ea {
  createEl() {
    return super.createEl("div", { className: "vjs-control-bar", dir: "ltr" });
  }
};
ru.prototype.options_ = { children: ["playToggle", "skipBackward", "skipForward", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "pictureInPictureToggle", "fullscreenToggle"] }, Ea.registerComponent("ControlBar", ru);
var au = class extends ja {
  constructor(e8, t3) {
    super(e8, t3), this.on(e8, "error", (e9) => {
      this.open(e9);
    });
  }
  buildCSSClass() {
    return `vjs-error-display ${super.buildCSSClass()}`;
  }
  content() {
    const e8 = this.player().error();
    return e8 ? this.localize(e8.message) : "";
  }
};
au.prototype.options_ = Object.assign({}, ja.prototype.options_, { pauseOnOpen: false, fillAlways: true, temporary: false, uncloseable: true }), Ea.registerComponent("ErrorDisplay", au);
var ou = class extends Ea {
  constructor(e8, t3 = {}) {
    super(e8, t3), this.el_.setAttribute("aria-labelledby", this.selectLabelledbyIds);
  }
  createEl() {
    this.selectLabelledbyIds = [this.options_.legendId, this.options_.labelId].join(" ").trim();
    return sr("select", { id: this.options_.id }, {}, this.options_.SelectOptions.map((e8) => {
      const t3 = (this.options_.labelId ? this.options_.labelId : `vjs-track-option-${jr()}`) + "-" + e8[1].replace(/\W+/g, ""), i2 = sr("option", { id: t3, value: this.localize(e8[0]), textContent: this.localize(e8[1]) });
      return i2.setAttribute("aria-labelledby", `${this.selectLabelledbyIds} ${t3}`), i2;
    }));
  }
};
Ea.registerComponent("TextTrackSelect", ou);
var lu = class extends Ea {
  constructor(e8, t3 = {}) {
    super(e8, t3);
    const i2 = sr("legend", { textContent: this.localize(this.options_.legendText), id: this.options_.legendId });
    this.el().appendChild(i2);
    const s3 = this.options_.selects;
    for (const n5 of s3) {
      const t4 = this.options_.selectConfigs[n5], i3 = t4.className, s4 = t4.id.replace("%s", this.options_.id_);
      let r5 = null;
      const a5 = `vjs_select_${jr()}`;
      if ("colors" === this.options_.type) {
        r5 = sr("span", { className: i3 });
        const e9 = sr("label", { id: s4, className: "vjs-label", textContent: this.localize(t4.label) });
        e9.setAttribute("for", a5), r5.appendChild(e9);
      }
      const o5 = new ou(e8, { SelectOptions: t4.options, legendId: this.options_.legendId, id: a5, labelId: s4 });
      this.addChild(o5), "colors" === this.options_.type && (r5.appendChild(o5.el()), this.el().appendChild(r5));
    }
  }
  createEl() {
    return sr("fieldset", { className: this.options_.className });
  }
};
Ea.registerComponent("TextTrackFieldset", lu);
var uu = class extends Ea {
  constructor(e8, t3 = {}) {
    super(e8, t3);
    const i2 = this.options_.textTrackComponentid, s3 = new lu(e8, { id_: i2, legendId: `captions-text-legend-${i2}`, legendText: this.localize("Text"), className: "vjs-fg vjs-track-setting", selects: this.options_.fieldSets[0], selectConfigs: this.options_.selectConfigs, type: "colors" });
    this.addChild(s3);
    const n5 = new lu(e8, { id_: i2, legendId: `captions-background-${i2}`, legendText: this.localize("Text Background"), className: "vjs-bg vjs-track-setting", selects: this.options_.fieldSets[1], selectConfigs: this.options_.selectConfigs, type: "colors" });
    this.addChild(n5);
    const r5 = new lu(e8, { id_: i2, legendId: `captions-window-${i2}`, legendText: this.localize("Caption Area Background"), className: "vjs-window vjs-track-setting", selects: this.options_.fieldSets[2], selectConfigs: this.options_.selectConfigs, type: "colors" });
    this.addChild(r5);
  }
  createEl() {
    return sr("div", { className: "vjs-track-settings-colors" });
  }
};
Ea.registerComponent("TextTrackSettingsColors", uu);
var hu = class extends Ea {
  constructor(e8, t3 = {}) {
    super(e8, t3);
    const i2 = this.options_.textTrackComponentid, s3 = new lu(e8, { id_: i2, legendId: `captions-font-size-${i2}`, legendText: "Font Size", className: "vjs-font-percent vjs-track-setting", selects: this.options_.fieldSets[0], selectConfigs: this.options_.selectConfigs, type: "font" });
    this.addChild(s3);
    const n5 = new lu(e8, { id_: i2, legendId: `captions-edge-style-${i2}`, legendText: this.localize("Text Edge Style"), className: "vjs-edge-style vjs-track-setting", selects: this.options_.fieldSets[1], selectConfigs: this.options_.selectConfigs, type: "font" });
    this.addChild(n5);
    const r5 = new lu(e8, { id_: i2, legendId: `captions-font-family-${i2}`, legendText: this.localize("Font Family"), className: "vjs-font-family vjs-track-setting", selects: this.options_.fieldSets[2], selectConfigs: this.options_.selectConfigs, type: "font" });
    this.addChild(r5);
  }
  createEl() {
    return sr("div", { className: "vjs-track-settings-font" });
  }
};
Ea.registerComponent("TextTrackSettingsFont", hu);
var du = class extends Ea {
  constructor(e8, t3 = {}) {
    super(e8, t3);
    const i2 = this.localize("restore all settings to the default values"), s3 = new il(e8, { controlText: i2, className: "vjs-default-button" });
    s3.el().classList.remove("vjs-control", "vjs-button"), s3.el().textContent = this.localize("Reset"), this.addChild(s3);
    const n5 = new il(e8, { controlText: i2, className: "vjs-done-button" });
    n5.el().classList.remove("vjs-control", "vjs-button"), n5.el().textContent = this.localize("Done"), this.addChild(n5);
  }
  createEl() {
    return sr("div", { className: "vjs-track-settings-controls" });
  }
};
Ea.registerComponent("TrackSettingsControls", du);
var cu = "vjs-text-track-settings";
var pu = ["#000", "Black"];
var mu = ["#00F", "Blue"];
var gu = ["#0FF", "Cyan"];
var fu = ["#0F0", "Green"];
var yu = ["#F0F", "Magenta"];
var _u = ["#F00", "Red"];
var bu = ["#FFF", "White"];
var vu = ["#FF0", "Yellow"];
var Tu = ["1", "Opaque"];
var Su = ["0.5", "Semi-Transparent"];
var Eu = ["0", "Transparent"];
var wu = { backgroundColor: { selector: ".vjs-bg-color > select", id: "captions-background-color-%s", label: "Color", options: [pu, bu, _u, fu, mu, vu, yu, gu], className: "vjs-bg-color" }, backgroundOpacity: { selector: ".vjs-bg-opacity > select", id: "captions-background-opacity-%s", label: "Opacity", options: [Tu, Su, Eu], className: "vjs-bg-opacity vjs-opacity" }, color: { selector: ".vjs-text-color > select", id: "captions-foreground-color-%s", label: "Color", options: [bu, pu, _u, fu, mu, vu, yu, gu], className: "vjs-text-color" }, edgeStyle: { selector: ".vjs-edge-style > select", id: "", label: "Text Edge Style", options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Drop shadow"]] }, fontFamily: { selector: ".vjs-font-family > select", id: "", label: "Font Family", options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]] }, fontPercent: { selector: ".vjs-font-percent > select", id: "", label: "Font Size", options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]], default: 2, parser: (e8) => "1.00" === e8 ? null : Number(e8) }, textOpacity: { selector: ".vjs-text-opacity > select", id: "captions-foreground-opacity-%s", label: "Opacity", options: [Tu, Su], className: "vjs-text-opacity vjs-opacity" }, windowColor: { selector: ".vjs-window-color > select", id: "captions-window-color-%s", label: "Color", className: "vjs-window-color" }, windowOpacity: { selector: ".vjs-window-opacity > select", id: "captions-window-opacity-%s", label: "Opacity", options: [Eu, Su, Tu], className: "vjs-window-opacity vjs-opacity" } };
function Cu(e8, t3) {
  if (t3 && (e8 = t3(e8)), e8 && "none" !== e8) return e8;
}
function ku(e8, t3) {
  return Cu(e8.options[e8.options.selectedIndex].value, t3);
}
function Iu(e8, t3, i2) {
  if (t3) {
    for (let s3 = 0; s3 < e8.options.length; s3++) if (Cu(e8.options[s3].value, i2) === t3) {
      e8.selectedIndex = s3;
      break;
    }
  }
}
wu.windowColor.options = wu.backgroundColor.options;
var xu = class extends ja {
  constructor(e8, t3) {
    t3.temporary = false, super(e8, t3), this.updateDisplay = this.updateDisplay.bind(this), this.fill(), this.hasBeenOpened_ = this.hasBeenFilled_ = true, this.renderModalComponents(e8), this.endDialog = sr("p", { className: "vjs-control-text", textContent: this.localize("End of dialog window.") }), this.el().appendChild(this.endDialog), this.setDefaults(), void 0 === t3.persistTextTrackSettings && (this.options_.persistTextTrackSettings = this.options_.playerOptions.persistTextTrackSettings), this.bindFunctionsToSelectsAndButtons(), this.options_.persistTextTrackSettings && this.restoreSettings();
  }
  renderModalComponents(e8) {
    const t3 = new uu(e8, { textTrackComponentid: this.id_, selectConfigs: wu, fieldSets: [["color", "textOpacity"], ["backgroundColor", "backgroundOpacity"], ["windowColor", "windowOpacity"]] });
    this.addChild(t3);
    const i2 = new hu(e8, { textTrackComponentid: this.id_, selectConfigs: wu, fieldSets: [["fontPercent"], ["edgeStyle"], ["fontFamily"]] });
    this.addChild(i2);
    const s3 = new du(e8);
    this.addChild(s3);
  }
  bindFunctionsToSelectsAndButtons() {
    this.on(this.$(".vjs-done-button"), ["click", "tap"], () => {
      this.saveSettings(), this.close();
    }), this.on(this.$(".vjs-default-button"), ["click", "tap"], () => {
      this.setDefaults(), this.updateDisplay();
    }), bn(wu, (e8) => {
      this.on(this.$(e8.selector), "change", this.updateDisplay);
    });
  }
  dispose() {
    this.endDialog = null, super.dispose();
  }
  label() {
    return this.localize("Caption Settings Dialog");
  }
  description() {
    return this.localize("Beginning of dialog window. Escape will cancel and close the window.");
  }
  buildCSSClass() {
    return super.buildCSSClass() + " vjs-text-track-settings";
  }
  getValues() {
    return vn(wu, (e8, t3, i2) => {
      const s3 = ku(this.$(t3.selector), t3.parser);
      return void 0 !== s3 && (e8[i2] = s3), e8;
    }, {});
  }
  setValues(e8) {
    bn(wu, (t3, i2) => {
      Iu(this.$(t3.selector), e8[i2], t3.parser);
    });
  }
  setDefaults() {
    bn(wu, (e8) => {
      const t3 = e8.hasOwnProperty("default") ? e8.default : 0;
      this.$(e8.selector).selectedIndex = t3;
    });
  }
  restoreSettings() {
    let e8;
    try {
      e8 = JSON.parse(_.localStorage.getItem(cu));
    } catch (t3) {
      gn.warn(t3);
    }
    e8 && this.setValues(e8);
  }
  saveSettings() {
    if (!this.options_.persistTextTrackSettings) return;
    const e8 = this.getValues();
    try {
      Object.keys(e8).length ? _.localStorage.setItem(cu, JSON.stringify(e8)) : _.localStorage.removeItem(cu);
    } catch (t3) {
      gn.warn(t3);
    }
  }
  updateDisplay() {
    const e8 = this.player_.getChild("textTrackDisplay");
    e8 && e8.updateDisplay();
  }
  handleLanguagechange() {
    this.fill(), this.renderModalComponents(this.player_), this.bindFunctionsToSelectsAndButtons();
  }
};
Ea.registerComponent("TextTrackSettings", xu);
var Au = class extends Ea {
  constructor(e8, t3) {
    let i2 = t3.ResizeObserver || _.ResizeObserver;
    null === t3.ResizeObserver && (i2 = false);
    super(e8, En({ createEl: !i2, reportTouchActivity: false }, t3)), this.ResizeObserver = t3.ResizeObserver || _.ResizeObserver, this.loadListener_ = null, this.resizeObserver_ = null, this.debouncedHandler_ = ia(() => {
      this.resizeHandler();
    }, 100, false, this), i2 ? (this.resizeObserver_ = new this.ResizeObserver(this.debouncedHandler_), this.resizeObserver_.observe(e8.el())) : (this.loadListener_ = () => {
      if (!this.el_ || !this.el_.contentWindow) return;
      const e9 = this.debouncedHandler_;
      let t4 = this.unloadListener_ = function() {
        Xr(this, "resize", e9), Xr(this, "unload", t4), t4 = null;
      };
      Gr(this.el_.contentWindow, "unload", t4), Gr(this.el_.contentWindow, "resize", e9);
    }, this.one("load", this.loadListener_));
  }
  createEl() {
    return super.createEl("iframe", { className: "vjs-resize-manager", tabIndex: -1, title: this.localize("No content") }, { "aria-hidden": "true" });
  }
  resizeHandler() {
    this.player_ && this.player_.trigger && this.player_.trigger("playerresize");
  }
  dispose() {
    this.debouncedHandler_ && this.debouncedHandler_.cancel(), this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.loadListener_ && this.off("load", this.loadListener_), this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null, super.dispose();
  }
};
Ea.registerComponent("ResizeManager", Au);
var Du = { trackingThreshold: 20, liveTolerance: 15 };
var Pu = class extends Ea {
  constructor(e8, t3) {
    super(e8, En(Du, t3, { createEl: false })), this.trackLiveHandler_ = () => this.trackLive_(), this.handlePlay_ = (e9) => this.handlePlay(e9), this.handleFirstTimeupdate_ = (e9) => this.handleFirstTimeupdate(e9), this.handleSeeked_ = (e9) => this.handleSeeked(e9), this.seekToLiveEdge_ = (e9) => this.seekToLiveEdge(e9), this.reset_(), this.on(this.player_, "durationchange", (e9) => this.handleDurationchange(e9)), this.on(this.player_, "canplay", () => this.toggleTracking());
  }
  trackLive_() {
    const e8 = this.player_.seekable();
    if (!e8 || !e8.length) return;
    const t3 = Number(_.performance.now().toFixed(4)), i2 = -1 === this.lastTime_ ? 0 : (t3 - this.lastTime_) / 1e3;
    this.lastTime_ = t3, this.pastSeekEnd_ = this.pastSeekEnd() + i2;
    const s3 = this.liveCurrentTime(), n5 = this.player_.currentTime();
    let r5 = this.player_.paused() || this.seekedBehindLive_ || Math.abs(s3 - n5) > this.options_.liveTolerance;
    this.timeupdateSeen_ && s3 !== 1 / 0 || (r5 = false), r5 !== this.behindLiveEdge_ && (this.behindLiveEdge_ = r5, this.trigger("liveedgechange"));
  }
  handleDurationchange() {
    this.toggleTracking();
  }
  toggleTracking() {
    this.player_.duration() === 1 / 0 && this.liveWindow() >= this.options_.trackingThreshold ? (this.player_.options_.liveui && this.player_.addClass("vjs-liveui"), this.startTracking()) : (this.player_.removeClass("vjs-liveui"), this.stopTracking());
  }
  startTracking() {
    this.isTracking() || (this.timeupdateSeen_ || (this.timeupdateSeen_ = this.player_.hasStarted()), this.trackingInterval_ = this.setInterval(this.trackLiveHandler_, Zr), this.trackLive_(), this.on(this.player_, ["play", "pause"], this.trackLiveHandler_), this.timeupdateSeen_ ? this.on(this.player_, "seeked", this.handleSeeked_) : (this.one(this.player_, "play", this.handlePlay_), this.one(this.player_, "timeupdate", this.handleFirstTimeupdate_)));
  }
  handleFirstTimeupdate() {
    this.timeupdateSeen_ = true, this.on(this.player_, "seeked", this.handleSeeked_);
  }
  handleSeeked() {
    const e8 = Math.abs(this.liveCurrentTime() - this.player_.currentTime());
    this.seekedBehindLive_ = this.nextSeekedFromUser_ && e8 > 2, this.nextSeekedFromUser_ = false, this.trackLive_();
  }
  handlePlay() {
    this.one(this.player_, "timeupdate", this.seekToLiveEdge_);
  }
  reset_() {
    this.lastTime_ = -1, this.pastSeekEnd_ = 0, this.lastSeekEnd_ = -1, this.behindLiveEdge_ = true, this.timeupdateSeen_ = false, this.seekedBehindLive_ = false, this.nextSeekedFromUser_ = false, this.clearInterval(this.trackingInterval_), this.trackingInterval_ = null, this.off(this.player_, ["play", "pause"], this.trackLiveHandler_), this.off(this.player_, "seeked", this.handleSeeked_), this.off(this.player_, "play", this.handlePlay_), this.off(this.player_, "timeupdate", this.handleFirstTimeupdate_), this.off(this.player_, "timeupdate", this.seekToLiveEdge_);
  }
  nextSeekedFromUser() {
    this.nextSeekedFromUser_ = true;
  }
  stopTracking() {
    this.isTracking() && (this.reset_(), this.trigger("liveedgechange"));
  }
  seekableEnd() {
    const e8 = this.player_.seekable(), t3 = [];
    let i2 = e8 ? e8.length : 0;
    for (; i2--; ) t3.push(e8.end(i2));
    return t3.length ? t3.sort()[t3.length - 1] : 1 / 0;
  }
  seekableStart() {
    const e8 = this.player_.seekable(), t3 = [];
    let i2 = e8 ? e8.length : 0;
    for (; i2--; ) t3.push(e8.start(i2));
    return t3.length ? t3.sort()[0] : 0;
  }
  liveWindow() {
    const e8 = this.liveCurrentTime();
    return e8 === 1 / 0 ? 0 : e8 - this.seekableStart();
  }
  isLive() {
    return this.isTracking();
  }
  atLiveEdge() {
    return !this.behindLiveEdge();
  }
  liveCurrentTime() {
    return this.pastSeekEnd() + this.seekableEnd();
  }
  pastSeekEnd() {
    const e8 = this.seekableEnd();
    return -1 !== this.lastSeekEnd_ && e8 !== this.lastSeekEnd_ && (this.pastSeekEnd_ = 0), this.lastSeekEnd_ = e8, this.pastSeekEnd_;
  }
  behindLiveEdge() {
    return this.behindLiveEdge_;
  }
  isTracking() {
    return "number" == typeof this.trackingInterval_;
  }
  seekToLiveEdge() {
    this.seekedBehindLive_ = false, this.atLiveEdge() || (this.nextSeekedFromUser_ = false, this.player_.currentTime(this.liveCurrentTime()));
  }
  dispose() {
    this.stopTracking(), super.dispose();
  }
};
Ea.registerComponent("LiveTracker", Pu);
var Lu = class extends Ea {
  constructor(e8, t3) {
    super(e8, t3), this.on("statechanged", (e9) => this.updateDom_()), this.updateDom_();
  }
  createEl() {
    return this.els = { title: sr("div", { className: "vjs-title-bar-title", id: `vjs-title-bar-title-${jr()}` }), description: sr("div", { className: "vjs-title-bar-description", id: `vjs-title-bar-description-${jr()}` }) }, sr("div", { className: "vjs-title-bar" }, {}, wn(this.els));
  }
  updateDom_() {
    const e8 = this.player_.tech_, t3 = e8 && e8.el_, i2 = { title: "aria-labelledby", description: "aria-describedby" };
    ["title", "description"].forEach((e9) => {
      const s3 = this.state[e9], n5 = this.els[e9], r5 = i2[e9];
      Tr(n5), s3 && nr(n5, s3), t3 && (t3.removeAttribute(r5), s3 && t3.setAttribute(r5, n5.id));
    }), this.state.title || this.state.description ? this.show() : this.hide();
  }
  update(e8) {
    this.setState(e8);
  }
  dispose() {
    const e8 = this.player_.tech_, t3 = e8 && e8.el_;
    t3 && (t3.removeAttribute("aria-labelledby"), t3.removeAttribute("aria-describedby")), super.dispose(), this.els = null;
  }
};
Ea.registerComponent("TitleBar", Lu);
var Ou = { initialDisplay: 4e3, position: [], takeFocus: false };
var Nu = class extends il {
  constructor(e8, t3) {
    super(e8, t3 = En(Ou, t3)), this.controlText(t3.controlText), this.hide(), this.on(this.player_, ["useractive", "userinactive"], (e9) => {
      this.removeClass("force-display");
    });
  }
  buildCSSClass() {
    return `vjs-transient-button focus-visible ${this.options_.position.map((e8) => `vjs-${e8}`).join(" ")}`;
  }
  createEl() {
    const e8 = sr("button", {}, { type: "button", class: this.buildCSSClass() }, sr("span"));
    return this.controlTextEl_ = e8.querySelector("span"), e8;
  }
  show() {
    super.show(), this.addClass("force-display"), this.options_.takeFocus && this.el().focus({ preventScroll: true }), this.forceDisplayTimeout = this.player_.setTimeout(() => {
      this.removeClass("force-display");
    }, this.options_.initialDisplay);
  }
  hide() {
    this.removeClass("force-display"), super.hide();
  }
  dispose() {
    this.player_.clearTimeout(this.forceDisplayTimeout), super.dispose();
  }
};
Ea.registerComponent("TransientButton", Nu);
var Ru = (e8) => {
  const t3 = e8.el();
  if (t3.hasAttribute("src")) return e8.triggerSourceset(t3.src), true;
  const i2 = e8.$$("source"), s3 = [];
  let n5 = "";
  if (!i2.length) return false;
  for (let r5 = 0; r5 < i2.length; r5++) {
    const e9 = i2[r5].src;
    e9 && -1 === s3.indexOf(e9) && s3.push(e9);
  }
  return !!s3.length && (1 === s3.length && (n5 = s3[0]), e8.triggerSourceset(n5), true);
};
var Mu = Object.defineProperty({}, "innerHTML", { get() {
  return this.cloneNode(true).innerHTML;
}, set(e8) {
  const t3 = ne.createElement(this.nodeName.toLowerCase());
  t3.innerHTML = e8;
  const i2 = ne.createDocumentFragment();
  for (; t3.childNodes.length; ) i2.appendChild(t3.childNodes[0]);
  return this.innerText = "", _.Element.prototype.appendChild.call(this, i2), this.innerHTML;
} });
var Uu = (e8, t3) => {
  let i2 = {};
  for (let s3 = 0; s3 < e8.length && (i2 = Object.getOwnPropertyDescriptor(e8[s3], t3), !(i2 && i2.set && i2.get)); s3++) ;
  return i2.enumerable = true, i2.configurable = true, i2;
};
var Bu = (e8) => Uu([e8.el(), _.HTMLMediaElement.prototype, _.Element.prototype, Mu], "innerHTML");
var Fu = function(e8) {
  const t3 = e8.el();
  if (t3.resetSourceWatch_) return;
  const i2 = {}, s3 = Bu(e8), n5 = (i3) => (...s4) => {
    const n6 = i3.apply(t3, s4);
    return Ru(e8), n6;
  };
  ["append", "appendChild", "insertAdjacentHTML"].forEach((e9) => {
    t3[e9] && (i2[e9] = t3[e9], t3[e9] = n5(i2[e9]));
  }), Object.defineProperty(t3, "innerHTML", En(s3, { set: n5(s3.set) })), t3.resetSourceWatch_ = () => {
    t3.resetSourceWatch_ = null, Object.keys(i2).forEach((e9) => {
      t3[e9] = i2[e9];
    }), Object.defineProperty(t3, "innerHTML", s3);
  }, e8.one("sourceset", t3.resetSourceWatch_);
};
var qu = Object.defineProperty({}, "src", { get() {
  return this.hasAttribute("src") ? io(_.Element.prototype.getAttribute.call(this, "src")) : "";
}, set(e8) {
  return _.Element.prototype.setAttribute.call(this, "src", e8), e8;
} });
var ju = (e8) => Uu([e8.el(), _.HTMLMediaElement.prototype, qu], "src");
var $u = function(e8) {
  if (!e8.featuresSourceset) return;
  const t3 = e8.el();
  if (t3.resetSourceset_) return;
  const i2 = ju(e8), s3 = t3.setAttribute, n5 = t3.load;
  Object.defineProperty(t3, "src", En(i2, { set: (s4) => {
    const n6 = i2.set.call(t3, s4);
    return e8.triggerSourceset(t3.src), n6;
  } })), t3.setAttribute = (i3, n6) => {
    const r5 = s3.call(t3, i3, n6);
    return /src/i.test(i3) && e8.triggerSourceset(t3.src), r5;
  }, t3.load = () => {
    const i3 = n5.call(t3);
    return Ru(e8) || (e8.triggerSourceset(""), Fu(e8)), i3;
  }, t3.currentSrc ? e8.triggerSourceset(t3.currentSrc) : Ru(e8) || Fu(e8), t3.resetSourceset_ = () => {
    t3.resetSourceset_ = null, t3.load = n5, t3.setAttribute = s3, Object.defineProperty(t3, "src", i2), t3.resetSourceWatch_ && t3.resetSourceWatch_();
  };
};
var Hu = class _Hu extends yo {
  constructor(e8, t3) {
    super(e8, t3);
    const i2 = e8.source;
    let s3 = false;
    if (this.featuresVideoFrameCallback = this.featuresVideoFrameCallback && "VIDEO" === this.el_.tagName, i2 && (this.el_.currentSrc !== i2.src || e8.tag && 3 === e8.tag.initNetworkState_) ? this.setSource(i2) : this.handleLateInit_(this.el_), e8.enableSourceset && this.setupSourcesetHandling_(), this.isScrubbing_ = false, this.el_.hasChildNodes()) {
      const e9 = this.el_.childNodes;
      let t4 = e9.length;
      const i3 = [];
      for (; t4--; ) {
        const n5 = e9[t4];
        "track" === n5.nodeName.toLowerCase() && (this.featuresNativeTextTracks ? (this.remoteTextTrackEls().addTrackElement_(n5), this.remoteTextTracks().addTrack(n5.track), this.textTracks().addTrack(n5.track), s3 || this.el_.hasAttribute("crossorigin") || !no(n5.src) || (s3 = true)) : i3.push(n5));
      }
      for (let s4 = 0; s4 < i3.length; s4++) this.el_.removeChild(i3[s4]);
    }
    this.proxyNativeTracks_(), this.featuresNativeTextTracks && s3 && gn.warn("Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\nThis may prevent text tracks from loading."), this.restoreMetadataTracksInIOSNativePlayer_(), (Wn || $n) && true === e8.nativeControlsForTouch && this.setControls(true), this.proxyWebkitFullscreen_(), this.triggerReady();
  }
  dispose() {
    this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), _Hu.disposeMediaElement(this.el_), this.options_ = null, super.dispose();
  }
  setupSourcesetHandling_() {
    $u(this);
  }
  restoreMetadataTracksInIOSNativePlayer_() {
    const e8 = this.textTracks();
    let t3;
    const i2 = () => {
      t3 = [];
      for (let i3 = 0; i3 < e8.length; i3++) {
        const s4 = e8[i3];
        "metadata" === s4.kind && t3.push({ track: s4, storedMode: s4.mode });
      }
    };
    i2(), e8.addEventListener("change", i2), this.on("dispose", () => e8.removeEventListener("change", i2));
    const s3 = () => {
      for (let e9 = 0; e9 < t3.length; e9++) {
        const i3 = t3[e9];
        "disabled" === i3.track.mode && i3.track.mode !== i3.storedMode && (i3.track.mode = i3.storedMode);
      }
      e8.removeEventListener("change", s3);
    };
    this.on("webkitbeginfullscreen", () => {
      e8.removeEventListener("change", i2), e8.removeEventListener("change", s3), e8.addEventListener("change", s3);
    }), this.on("webkitendfullscreen", () => {
      e8.removeEventListener("change", i2), e8.addEventListener("change", i2), e8.removeEventListener("change", s3);
    });
  }
  overrideNative_(e8, t3) {
    if (t3 !== this[`featuresNative${e8}Tracks`]) return;
    const i2 = e8.toLowerCase();
    this[`${i2}TracksListeners_`] && Object.keys(this[`${i2}TracksListeners_`]).forEach((e9) => {
      this.el()[`${i2}Tracks`].removeEventListener(e9, this[`${i2}TracksListeners_`][e9]);
    }), this[`featuresNative${e8}Tracks`] = !t3, this[`${i2}TracksListeners_`] = null, this.proxyNativeTracksForType_(i2);
  }
  overrideNativeAudioTracks(e8) {
    this.overrideNative_("Audio", e8);
  }
  overrideNativeVideoTracks(e8) {
    this.overrideNative_("Video", e8);
  }
  proxyNativeTracksForType_(e8) {
    const t3 = po[e8], i2 = this.el()[t3.getterName], s3 = this[t3.getterName]();
    if (!this[`featuresNative${t3.capitalName}Tracks`] || !i2 || !i2.addEventListener) return;
    const n5 = { change: (t4) => {
      const i3 = { type: "change", target: s3, currentTarget: s3, srcElement: s3 };
      s3.trigger(i3), "text" === e8 && this[mo.remoteText.getterName]().trigger(i3);
    }, addtrack(e9) {
      s3.addTrack(e9.track);
    }, removetrack(e9) {
      s3.removeTrack(e9.track);
    } }, r5 = function() {
      const e9 = [];
      for (let t4 = 0; t4 < s3.length; t4++) {
        let n6 = false;
        for (let e10 = 0; e10 < i2.length; e10++) if (i2[e10] === s3[t4]) {
          n6 = true;
          break;
        }
        n6 || e9.push(s3[t4]);
      }
      for (; e9.length; ) s3.removeTrack(e9.shift());
    };
    this[t3.getterName + "Listeners_"] = n5, Object.keys(n5).forEach((e9) => {
      const t4 = n5[e9];
      i2.addEventListener(e9, t4), this.on("dispose", (s4) => i2.removeEventListener(e9, t4));
    }), this.on("loadstart", r5), this.on("dispose", (e9) => this.off("loadstart", r5));
  }
  proxyNativeTracks_() {
    po.names.forEach((e8) => {
      this.proxyNativeTracksForType_(e8);
    });
  }
  createEl() {
    let e8 = this.options_.tag;
    if (!e8 || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
      if (e8) {
        const t4 = e8.cloneNode(true);
        e8.parentNode && e8.parentNode.insertBefore(t4, e8), _Hu.disposeMediaElement(e8), e8 = t4;
      } else {
        e8 = ne.createElement("video");
        const t4 = En({}, this.options_.tag && dr(this.options_.tag));
        Wn && true === this.options_.nativeControlsForTouch || delete t4.controls, hr(e8, Object.assign(t4, { id: this.options_.techId, class: "vjs-tech" }));
      }
      e8.playerId = this.options_.playerId;
    }
    void 0 !== this.options_.preload && pr(e8, "preload", this.options_.preload), void 0 !== this.options_.disablePictureInPicture && (e8.disablePictureInPicture = this.options_.disablePictureInPicture);
    const t3 = ["loop", "muted", "playsinline", "autoplay"];
    for (let i2 = 0; i2 < t3.length; i2++) {
      const s3 = t3[i2], n5 = this.options_[s3];
      void 0 !== n5 && (n5 ? pr(e8, s3, s3) : mr(e8, s3), e8[s3] = n5);
    }
    return e8;
  }
  handleLateInit_(e8) {
    if (0 === e8.networkState || 3 === e8.networkState) return;
    if (0 === e8.readyState) {
      let e9 = false;
      const t4 = function() {
        e9 = true;
      };
      this.on("loadstart", t4);
      const i2 = function() {
        e9 || this.trigger("loadstart");
      };
      return this.on("loadedmetadata", i2), void this.ready(function() {
        this.off("loadstart", t4), this.off("loadedmetadata", i2), e9 || this.trigger("loadstart");
      });
    }
    const t3 = ["loadstart"];
    t3.push("loadedmetadata"), e8.readyState >= 2 && t3.push("loadeddata"), e8.readyState >= 3 && t3.push("canplay"), e8.readyState >= 4 && t3.push("canplaythrough"), this.ready(function() {
      t3.forEach(function(e9) {
        this.trigger(e9);
      }, this);
    });
  }
  setScrubbing(e8) {
    this.isScrubbing_ = e8;
  }
  scrubbing() {
    return this.isScrubbing_;
  }
  setCurrentTime(e8) {
    try {
      this.isScrubbing_ && this.el_.fastSeek && Kn ? this.el_.fastSeek(e8) : this.el_.currentTime = e8;
    } catch (t3) {
      gn(t3, "Video is not ready. (Video.js)");
    }
  }
  duration() {
    if (this.el_.duration === 1 / 0 && Dn && Nn && 0 === this.el_.currentTime) {
      const e8 = () => {
        this.el_.currentTime > 0 && (this.el_.duration === 1 / 0 && this.trigger("durationchange"), this.off("timeupdate", e8));
      };
      return this.on("timeupdate", e8), NaN;
    }
    return this.el_.duration || NaN;
  }
  width() {
    return this.el_.offsetWidth;
  }
  height() {
    return this.el_.offsetHeight;
  }
  proxyWebkitFullscreen_() {
    if (!("webkitDisplayingFullscreen" in this.el_)) return;
    const e8 = function() {
      this.trigger("fullscreenchange", { isFullscreen: false }), this.el_.controls && !this.options_.nativeControlsForTouch && this.controls() && (this.el_.controls = false);
    }, t3 = function() {
      "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", e8), this.trigger("fullscreenchange", { isFullscreen: true, nativeIOSFullscreen: true }));
    };
    this.on("webkitbeginfullscreen", t3), this.on("dispose", () => {
      this.off("webkitbeginfullscreen", t3), this.off("webkitendfullscreen", e8);
    });
  }
  supportsFullScreen() {
    return "function" == typeof this.el_.webkitEnterFullScreen;
  }
  enterFullScreen() {
    const e8 = this.el_;
    if (e8.paused && e8.networkState <= e8.HAVE_METADATA) Ua(this.el_.play()), this.setTimeout(function() {
      e8.pause();
      try {
        e8.webkitEnterFullScreen();
      } catch (t3) {
        this.trigger("fullscreenerror", t3);
      }
    }, 0);
    else try {
      e8.webkitEnterFullScreen();
    } catch (t3) {
      this.trigger("fullscreenerror", t3);
    }
  }
  exitFullScreen() {
    this.el_.webkitDisplayingFullscreen ? this.el_.webkitExitFullScreen() : this.trigger("fullscreenerror", new Error("The video is not fullscreen"));
  }
  requestPictureInPicture() {
    return this.el_.requestPictureInPicture();
  }
  requestVideoFrameCallback(e8) {
    return this.featuresVideoFrameCallback && !this.el_.webkitKeys ? this.el_.requestVideoFrameCallback(e8) : super.requestVideoFrameCallback(e8);
  }
  cancelVideoFrameCallback(e8) {
    this.featuresVideoFrameCallback && !this.el_.webkitKeys ? this.el_.cancelVideoFrameCallback(e8) : super.cancelVideoFrameCallback(e8);
  }
  src(e8) {
    if (void 0 === e8) return this.el_.src;
    this.setSrc(e8);
  }
  addSourceElement(e8, t3) {
    if (!e8) return gn.error("Invalid source URL."), false;
    const i2 = { src: e8 };
    t3 && (i2.type = t3);
    const s3 = sr("source", {}, i2);
    return this.el_.appendChild(s3), true;
  }
  removeSourceElement(e8) {
    if (!e8) return gn.error("Source URL is required to remove the source element."), false;
    const t3 = this.el_.querySelectorAll("source");
    for (const i2 of t3) if (i2.src === e8) return this.el_.removeChild(i2), true;
    return gn.warn(`No matching source element found with src: ${e8}`), false;
  }
  reset() {
    _Hu.resetMediaElement(this.el_);
  }
  currentSrc() {
    return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc;
  }
  setControls(e8) {
    this.el_.controls = !!e8;
  }
  addTextTrack(e8, t3, i2) {
    return this.featuresNativeTextTracks ? this.el_.addTextTrack(e8, t3, i2) : super.addTextTrack(e8, t3, i2);
  }
  createRemoteTextTrack(e8) {
    if (!this.featuresNativeTextTracks) return super.createRemoteTextTrack(e8);
    const t3 = ne.createElement("track");
    return e8.kind && (t3.kind = e8.kind), e8.label && (t3.label = e8.label), (e8.language || e8.srclang) && (t3.srclang = e8.language || e8.srclang), e8.default && (t3.default = e8.default), e8.id && (t3.id = e8.id), e8.src && (t3.src = e8.src), t3;
  }
  addRemoteTextTrack(e8, t3) {
    const i2 = super.addRemoteTextTrack(e8, t3);
    return this.featuresNativeTextTracks && this.el().appendChild(i2), i2;
  }
  removeRemoteTextTrack(e8) {
    if (super.removeRemoteTextTrack(e8), this.featuresNativeTextTracks) {
      const t3 = this.$$("track");
      let i2 = t3.length;
      for (; i2--; ) e8 !== t3[i2] && e8 !== t3[i2].track || this.el().removeChild(t3[i2]);
    }
  }
  getVideoPlaybackQuality() {
    if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
    const e8 = {};
    return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (e8.droppedVideoFrames = this.el().webkitDroppedFrameCount, e8.totalVideoFrames = this.el().webkitDecodedFrameCount), _.performance && (e8.creationTime = _.performance.now()), e8;
  }
};
Cn(Hu, "TEST_VID", function() {
  if (!Zn()) return;
  const e8 = ne.createElement("video"), t3 = ne.createElement("track");
  return t3.kind = "captions", t3.srclang = "en", t3.label = "English", e8.appendChild(t3), e8;
}), Hu.isSupported = function() {
  try {
    Hu.TEST_VID.volume = 0.5;
  } catch (e8) {
    return false;
  }
  return !(!Hu.TEST_VID || !Hu.TEST_VID.canPlayType);
}, Hu.canPlayType = function(e8) {
  return Hu.TEST_VID.canPlayType(e8);
}, Hu.canPlaySource = function(e8, t3) {
  return Hu.canPlayType(e8.type);
}, Hu.canControlVolume = function() {
  try {
    const e8 = Hu.TEST_VID.volume;
    Hu.TEST_VID.volume = e8 / 2 + 0.1;
    const t3 = e8 !== Hu.TEST_VID.volume;
    return t3 && Xn ? (_.setTimeout(() => {
      Hu && Hu.prototype && (Hu.prototype.featuresVolumeControl = e8 !== Hu.TEST_VID.volume);
    }), false) : t3;
  } catch (e8) {
    return false;
  }
}, Hu.canMuteVolume = function() {
  try {
    const e8 = Hu.TEST_VID.muted;
    return Hu.TEST_VID.muted = !e8, Hu.TEST_VID.muted ? pr(Hu.TEST_VID, "muted", "muted") : mr(Hu.TEST_VID, "muted", "muted"), e8 !== Hu.TEST_VID.muted;
  } catch (e8) {
    return false;
  }
}, Hu.canControlPlaybackRate = function() {
  if (Dn && Nn && Mn < 58) return false;
  try {
    const e8 = Hu.TEST_VID.playbackRate;
    return Hu.TEST_VID.playbackRate = e8 / 2 + 0.1, e8 !== Hu.TEST_VID.playbackRate;
  } catch (e8) {
    return false;
  }
}, Hu.canOverrideAttributes = function() {
  try {
    const e8 = () => {
    };
    Object.defineProperty(ne.createElement("video"), "src", { get: e8, set: e8 }), Object.defineProperty(ne.createElement("audio"), "src", { get: e8, set: e8 }), Object.defineProperty(ne.createElement("video"), "innerHTML", { get: e8, set: e8 }), Object.defineProperty(ne.createElement("audio"), "innerHTML", { get: e8, set: e8 });
  } catch (e8) {
    return false;
  }
  return true;
}, Hu.supportsNativeTextTracks = function() {
  return Kn || Xn && Nn;
}, Hu.supportsNativeVideoTracks = function() {
  return !(!Hu.TEST_VID || !Hu.TEST_VID.videoTracks);
}, Hu.supportsNativeAudioTracks = function() {
  return !(!Hu.TEST_VID || !Hu.TEST_VID.audioTracks);
}, Hu.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], [["featuresMuteControl", "canMuteVolume"], ["featuresPlaybackRate", "canControlPlaybackRate"], ["featuresSourceset", "canOverrideAttributes"], ["featuresNativeTextTracks", "supportsNativeTextTracks"], ["featuresNativeVideoTracks", "supportsNativeVideoTracks"], ["featuresNativeAudioTracks", "supportsNativeAudioTracks"]].forEach(function([e8, t3]) {
  Cn(Hu.prototype, e8, () => Hu[t3](), true);
}), Hu.prototype.featuresVolumeControl = Hu.canControlVolume(), Hu.prototype.movingMediaElementInDOM = !Xn, Hu.prototype.featuresFullscreenResize = true, Hu.prototype.featuresProgressEvents = true, Hu.prototype.featuresTimeupdateEvents = true, Hu.prototype.featuresVideoFrameCallback = !(!Hu.TEST_VID || !Hu.TEST_VID.requestVideoFrameCallback), Hu.disposeMediaElement = function(e8) {
  if (e8) {
    for (e8.parentNode && e8.parentNode.removeChild(e8); e8.hasChildNodes(); ) e8.removeChild(e8.firstChild);
    e8.removeAttribute("src"), "function" == typeof e8.load && function() {
      try {
        e8.load();
      } catch (t3) {
      }
    }();
  }
}, Hu.resetMediaElement = function(e8) {
  if (!e8) return;
  const t3 = e8.querySelectorAll("source");
  let i2 = t3.length;
  for (; i2--; ) e8.removeChild(t3[i2]);
  e8.removeAttribute("src"), "function" == typeof e8.load && function() {
    try {
      e8.load();
    } catch (t4) {
    }
  }();
}, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function(e8) {
  Hu.prototype[e8] = function() {
    return this.el_[e8] || this.el_.hasAttribute(e8);
  };
}), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function(e8) {
  Hu.prototype["set" + va(e8)] = function(t3) {
    this.el_[e8] = t3, t3 ? this.el_.setAttribute(e8, e8) : this.el_.removeAttribute(e8);
  };
}), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "played", "networkState", "readyState", "videoWidth", "videoHeight", "crossOrigin"].forEach(function(e8) {
  Hu.prototype[e8] = function() {
    return this.el_[e8];
  };
}), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "crossOrigin"].forEach(function(e8) {
  Hu.prototype["set" + va(e8)] = function(t3) {
    this.el_[e8] = t3;
  };
}), ["pause", "load", "play"].forEach(function(e8) {
  Hu.prototype[e8] = function() {
    return this.el_[e8]();
  };
}), yo.withSourceHandlers(Hu), Hu.nativeSourceHandler = {}, Hu.nativeSourceHandler.canPlayType = function(e8) {
  try {
    return Hu.TEST_VID.canPlayType(e8);
  } catch (t3) {
    return "";
  }
}, Hu.nativeSourceHandler.canHandleSource = function(e8, t3) {
  if (e8.type) return Hu.nativeSourceHandler.canPlayType(e8.type);
  if (e8.src) {
    const t4 = so(e8.src);
    return Hu.nativeSourceHandler.canPlayType(`video/${t4}`);
  }
  return "";
}, Hu.nativeSourceHandler.handleSource = function(e8, t3, i2) {
  t3.setSrc(e8.src);
}, Hu.nativeSourceHandler.dispose = function() {
}, Hu.registerSourceHandler(Hu.nativeSourceHandler), yo.registerTech("Html5", Hu);
var Vu = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"];
var zu = { canplay: "CanPlay", canplaythrough: "CanPlayThrough", playing: "Playing", seeked: "Seeked" };
var Wu = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"];
var Gu = {};
Wu.forEach((e8) => {
  const t3 = "x" === e8.charAt(0) ? `x-${e8.substring(1)}` : e8;
  Gu[e8] = `vjs-layout-${t3}`;
});
var Xu = { tiny: 210, xsmall: 320, small: 425, medium: 768, large: 1440, xlarge: 2560, huge: 1 / 0 };
var Ku = class _Ku extends Ea {
  constructor(e8, t3, i2) {
    if (e8.id = e8.id || t3.id || `vjs_video_${jr()}`, (t3 = Object.assign(_Ku.getTagSettings(e8), t3)).initChildren = false, t3.createEl = false, t3.evented = false, t3.reportTouchActivity = false, !t3.language) {
      const i3 = e8.closest("[lang]");
      i3 && (t3.language = i3.getAttribute("lang"));
    }
    if (super(null, t3, i2), this.boundDocumentFullscreenChange_ = (e9) => this.documentFullscreenChange_(e9), this.boundFullWindowOnEscKey_ = (e9) => this.fullWindowOnEscKey(e9), this.boundUpdateStyleEl_ = (e9) => this.updateStyleEl_(e9), this.boundApplyInitTime_ = (e9) => this.applyInitTime_(e9), this.boundUpdateCurrentBreakpoint_ = (e9) => this.updateCurrentBreakpoint_(e9), this.boundHandleTechClick_ = (e9) => this.handleTechClick_(e9), this.boundHandleTechDoubleClick_ = (e9) => this.handleTechDoubleClick_(e9), this.boundHandleTechTouchStart_ = (e9) => this.handleTechTouchStart_(e9), this.boundHandleTechTouchMove_ = (e9) => this.handleTechTouchMove_(e9), this.boundHandleTechTouchEnd_ = (e9) => this.handleTechTouchEnd_(e9), this.boundHandleTechTap_ = (e9) => this.handleTechTap_(e9), this.boundUpdatePlayerHeightOnAudioOnlyMode_ = (e9) => this.updatePlayerHeightOnAudioOnlyMode_(e9), this.isFullscreen_ = false, this.log = fn(this.id_), this.fsApi_ = ln, this.isPosterFromTech_ = false, this.queuedCallbacks_ = [], this.isReady_ = false, this.hasStarted_ = false, this.userActive_ = false, this.debugEnabled_ = false, this.audioOnlyMode_ = false, this.audioPosterMode_ = false, this.audioOnlyCache_ = { controlBarHeight: null, playerHeight: null, hiddenChildren: [] }, !this.options_ || !this.options_.techOrder || !this.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
    if (this.tag = e8, this.tagAttributes = e8 && dr(e8), this.language(this.options_.language), t3.languages) {
      const e9 = {};
      Object.getOwnPropertyNames(t3.languages).forEach(function(i3) {
        e9[i3.toLowerCase()] = t3.languages[i3];
      }), this.languages_ = e9;
    } else this.languages_ = _Ku.prototype.options_.languages;
    this.resetCache_(), this.poster_ = t3.poster || "", this.controls_ = !!t3.controls, e8.controls = false, e8.removeAttribute("controls"), this.changingSrc_ = false, this.playCallbacks_ = [], this.playTerminatedQueue_ = [], e8.hasAttribute("autoplay") ? this.autoplay(true) : this.autoplay(this.options_.autoplay), t3.plugins && Object.keys(t3.plugins).forEach((e9) => {
      if ("function" != typeof this[e9]) throw new Error(`plugin "${e9}" does not exist`);
    }), this.scrubbing_ = false, this.el_ = this.createEl(), fa(this, { eventBusKey: "el_" }), this.fsApi_.requestFullscreen && (Gr(ne, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), this.on(this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_)), this.fluid_ && this.on(["playerreset", "resize"], this.boundUpdateStyleEl_);
    const s3 = En(this.options_);
    if (t3.plugins && Object.keys(t3.plugins).forEach((e9) => {
      this[e9](t3.plugins[e9]);
    }), t3.debug && this.debug(true), this.options_.playerOptions = s3, this.middleware_ = [], this.playbackRates(t3.playbackRates), t3.experimentalSvgIcons) {
      const e9 = new _.DOMParser().parseFromString(qo, "image/svg+xml");
      if (e9.querySelector("parsererror")) gn.warn("Failed to load SVG Icons. Falling back to Font Icons."), this.options_.experimentalSvgIcons = null;
      else {
        const t4 = e9.documentElement;
        t4.style.display = "none", this.el_.appendChild(t4), this.addClass("vjs-svg-icons-enabled");
      }
    }
    this.initChildren(), this.isAudio("audio" === e8.nodeName.toLowerCase()), this.controls() ? this.addClass("vjs-controls-enabled") : this.addClass("vjs-controls-disabled"), this.el_.setAttribute("role", "region"), this.isAudio() ? this.el_.setAttribute("aria-label", this.localize("Audio Player")) : this.el_.setAttribute("aria-label", this.localize("Video Player")), this.isAudio() && this.addClass("vjs-audio"), t3.spatialNavigation && t3.spatialNavigation.enabled && (this.spatialNavigation = new Vo(this), this.addClass("vjs-spatial-navigation-enabled")), Wn && this.addClass("vjs-touch-enabled"), Xn || this.addClass("vjs-workinghover"), _Ku.players[this.id_] = this;
    const n5 = tn.split(".")[0];
    this.addClass(`vjs-v${n5}`), this.userActive(true), this.reportUserActivity(), this.one("play", (e9) => this.listenForUserActivity_(e9)), this.on("keydown", (e9) => this.handleKeyDown(e9)), this.on("languagechange", (e9) => this.handleLanguagechange(e9)), this.breakpoints(this.options_.breakpoints), this.responsive(this.options_.responsive), this.on("ready", () => {
      this.audioPosterMode(this.options_.audioPosterMode), this.audioOnlyMode(this.options_.audioOnlyMode);
    });
  }
  dispose() {
    this.trigger("dispose"), this.off("dispose"), Xr(ne, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), Xr(ne, "keydown", this.boundFullWindowOnEscKey_), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), _Ku.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = false, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), Lo(this), go.names.forEach((e8) => {
      const t3 = this[go[e8].getterName]();
      t3 && t3.off && t3.off();
    }), super.dispose({ restoreEl: this.options_.restoreEl });
  }
  createEl() {
    let e8, t3 = this.tag, i2 = this.playerElIngest_ = t3.parentNode && t3.parentNode.hasAttribute && t3.parentNode.hasAttribute("data-vjs-player");
    const s3 = "video-js" === this.tag.tagName.toLowerCase();
    i2 ? e8 = this.el_ = t3.parentNode : s3 || (e8 = this.el_ = super.createEl("div"));
    const n5 = dr(t3);
    if (s3) {
      for (e8 = this.el_ = t3, t3 = this.tag = ne.createElement("video"); e8.children.length; ) t3.appendChild(e8.firstChild);
      ar(e8, "video-js") || or(e8, "video-js"), e8.appendChild(t3), i2 = this.playerElIngest_ = e8, Object.keys(e8).forEach((i3) => {
        try {
          t3[i3] = e8[i3];
        } catch (s4) {
        }
      });
    }
    t3.setAttribute("tabindex", "-1"), n5.tabindex = "-1", Nn && qn && (t3.setAttribute("role", "application"), n5.role = "application"), t3.removeAttribute("width"), t3.removeAttribute("height"), "width" in n5 && delete n5.width, "height" in n5 && delete n5.height, Object.getOwnPropertyNames(n5).forEach(function(i3) {
      s3 && "class" === i3 || e8.setAttribute(i3, n5[i3]), s3 && t3.setAttribute(i3, n5[i3]);
    }), t3.playerId = t3.id, t3.id += "_html5_api", t3.className = "vjs-tech", t3.player = e8.player = this, this.addClass("vjs-paused");
    const r5 = ["IS_SMART_TV", "IS_TIZEN", "IS_WEBOS", "IS_ANDROID", "IS_IPAD", "IS_IPHONE", "IS_CHROMECAST_RECEIVER"].filter((e9) => Yn[e9]).map((e9) => "vjs-device-" + e9.substring(3).toLowerCase().replace(/\_/g, "-"));
    if (this.addClass(...r5), true !== _.VIDEOJS_NO_DYNAMIC_STYLE) {
      this.styleEl_ = Mr("vjs-styles-dimensions");
      const e9 = kr(".vjs-styles-defaults"), t4 = kr("head");
      t4.insertBefore(this.styleEl_, e9 ? e9.nextSibling : t4.firstChild);
    }
    this.fill_ = false, this.fluid_ = false, this.width(this.options_.width), this.height(this.options_.height), this.fill(this.options_.fill), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio), this.crossOrigin(this.options_.crossOrigin || this.options_.crossorigin);
    const a5 = t3.getElementsByTagName("a");
    for (let o5 = 0; o5 < a5.length; o5++) {
      const e9 = a5.item(o5);
      or(e9, "vjs-hidden"), e9.setAttribute("hidden", "hidden");
    }
    return t3.initNetworkState_ = t3.networkState, t3.parentNode && !i2 && t3.parentNode.insertBefore(e8, t3), rr(t3, e8), this.children_.unshift(t3), this.el_.setAttribute("lang", this.language_), this.el_.setAttribute("translate", "no"), this.el_ = e8, e8;
  }
  crossOrigin(e8) {
    if (void 0 === e8) return this.techGet_("crossOrigin");
    null === e8 || "anonymous" === e8 || "use-credentials" === e8 ? (this.techCall_("setCrossOrigin", e8), this.posterImage && this.posterImage.crossOrigin(e8)) : gn.warn(`crossOrigin must be null,  "anonymous" or "use-credentials", given "${e8}"`);
  }
  width(e8) {
    return this.dimension("width", e8);
  }
  height(e8) {
    return this.dimension("height", e8);
  }
  dimension(e8, t3) {
    const i2 = e8 + "_";
    if (void 0 === t3) return this[i2] || 0;
    if ("" === t3 || "auto" === t3) return this[i2] = void 0, void this.updateStyleEl_();
    const s3 = parseFloat(t3);
    isNaN(s3) ? gn.error(`Improper value "${t3}" supplied for for ${e8}`) : (this[i2] = s3, this.updateStyleEl_());
  }
  fluid(e8) {
    if (void 0 === e8) return !!this.fluid_;
    this.fluid_ = !!e8, oa(this) && this.off(["playerreset", "resize"], this.boundUpdateStyleEl_), e8 ? (this.addClass("vjs-fluid"), this.fill(false), la(this, () => {
      this.on(["playerreset", "resize"], this.boundUpdateStyleEl_);
    })) : this.removeClass("vjs-fluid"), this.updateStyleEl_();
  }
  fill(e8) {
    if (void 0 === e8) return !!this.fill_;
    this.fill_ = !!e8, e8 ? (this.addClass("vjs-fill"), this.fluid(false)) : this.removeClass("vjs-fill");
  }
  aspectRatio(e8) {
    if (void 0 === e8) return this.aspectRatio_;
    if (!/^\d+\:\d+$/.test(e8)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
    this.aspectRatio_ = e8, this.fluid(true), this.updateStyleEl_();
  }
  updateStyleEl_() {
    if (true === _.VIDEOJS_NO_DYNAMIC_STYLE) {
      const e9 = "number" == typeof this.width_ ? this.width_ : this.options_.width, t4 = "number" == typeof this.height_ ? this.height_ : this.options_.height, i3 = this.tech_ && this.tech_.el();
      return void (i3 && (e9 >= 0 && (i3.width = e9), t4 >= 0 && (i3.height = t4)));
    }
    let e8, t3, i2, s3;
    i2 = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9";
    const n5 = i2.split(":"), r5 = n5[1] / n5[0];
    e8 = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / r5 : this.videoWidth() || 300, t3 = void 0 !== this.height_ ? this.height_ : e8 * r5, s3 = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(s3), Ur(this.styleEl_, `
      .${s3} {
        width: ${e8}px;
        height: ${t3}px;
      }

      .${s3}.vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: ${100 * r5}%;
      }
    `);
  }
  loadTech_(e8, t3) {
    this.tech_ && this.unloadTech_();
    const i2 = va(e8), s3 = e8.charAt(0).toLowerCase() + e8.slice(1);
    "Html5" !== i2 && this.tag && (yo.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = i2, this.isReady_ = false;
    let n5 = this.autoplay();
    ("string" == typeof this.autoplay() || true === this.autoplay() && this.options_.normalizeAutoplay) && (n5 = false);
    const r5 = { source: t3, autoplay: n5, nativeControlsForTouch: this.options_.nativeControlsForTouch, playerId: this.id(), techId: `${this.id()}_${s3}_api`, playsinline: this.options_.playsinline, preload: this.options_.preload, loop: this.options_.loop, disablePictureInPicture: this.options_.disablePictureInPicture, muted: this.options_.muted, poster: this.poster(), language: this.language(), playerElIngest: this.playerElIngest_ || false, "vtt.js": this.options_["vtt.js"], canOverridePoster: !!this.options_.techCanOverridePoster, enableSourceset: this.options_.enableSourceset };
    go.names.forEach((e9) => {
      const t4 = go[e9];
      r5[t4.getterName] = this[t4.privateName];
    }), Object.assign(r5, this.options_[i2]), Object.assign(r5, this.options_[s3]), Object.assign(r5, this.options_[e8.toLowerCase()]), this.tag && (r5.tag = this.tag), t3 && t3.src === this.cache_.src && this.cache_.currentTime > 0 && (r5.startTime = this.cache_.currentTime);
    const a5 = yo.getTech(e8);
    if (!a5) throw new Error(`No Tech named '${i2}' exists! '${i2}' should be registered using videojs.registerTech()'`);
    this.tech_ = new a5(r5), this.tech_.ready(ea(this, this.handleTechReady_), true), Fa.jsonToTextTracks(this.textTracksJson_ || [], this.tech_), Vu.forEach((e9) => {
      this.on(this.tech_, e9, (t4) => this[`handleTech${va(e9)}_`](t4));
    }), Object.keys(zu).forEach((e9) => {
      this.on(this.tech_, e9, (t4) => {
        0 === this.tech_.playbackRate() && this.tech_.seeking() ? this.queuedCallbacks_.push({ callback: this[`handleTech${zu[e9]}_`].bind(this), event: t4 }) : this[`handleTech${zu[e9]}_`](t4);
      });
    }), this.on(this.tech_, "loadstart", (e9) => this.handleTechLoadStart_(e9)), this.on(this.tech_, "sourceset", (e9) => this.handleTechSourceset_(e9)), this.on(this.tech_, "waiting", (e9) => this.handleTechWaiting_(e9)), this.on(this.tech_, "ended", (e9) => this.handleTechEnded_(e9)), this.on(this.tech_, "seeking", (e9) => this.handleTechSeeking_(e9)), this.on(this.tech_, "play", (e9) => this.handleTechPlay_(e9)), this.on(this.tech_, "pause", (e9) => this.handleTechPause_(e9)), this.on(this.tech_, "durationchange", (e9) => this.handleTechDurationChange_(e9)), this.on(this.tech_, "fullscreenchange", (e9, t4) => this.handleTechFullscreenChange_(e9, t4)), this.on(this.tech_, "fullscreenerror", (e9, t4) => this.handleTechFullscreenError_(e9, t4)), this.on(this.tech_, "enterpictureinpicture", (e9) => this.handleTechEnterPictureInPicture_(e9)), this.on(this.tech_, "leavepictureinpicture", (e9) => this.handleTechLeavePictureInPicture_(e9)), this.on(this.tech_, "error", (e9) => this.handleTechError_(e9)), this.on(this.tech_, "posterchange", (e9) => this.handleTechPosterChange_(e9)), this.on(this.tech_, "textdata", (e9) => this.handleTechTextData_(e9)), this.on(this.tech_, "ratechange", (e9) => this.handleTechRateChange_(e9)), this.on(this.tech_, "loadedmetadata", this.boundUpdateStyleEl_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === i2 && this.tag || rr(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null);
  }
  unloadTech_() {
    go.names.forEach((e8) => {
      const t3 = go[e8];
      this[t3.privateName] = this[t3.getterName]();
    }), this.textTracksJson_ = Fa.textTracksToJson(this.tech_), this.isReady_ = false, this.tech_.dispose(), this.tech_ = false, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = false;
  }
  tech(e8) {
    return void 0 === e8 && gn.warn("Using the tech directly can be dangerous. I hope you know what you're doing.\nSee https://github.com/videojs/video.js/issues/2617 for more info.\n"), this.tech_;
  }
  version() {
    return { "video.js": tn };
  }
  addTechControlsListeners_() {
    this.removeTechControlsListeners_(), this.on(this.tech_, "click", this.boundHandleTechClick_), this.on(this.tech_, "dblclick", this.boundHandleTechDoubleClick_), this.on(this.tech_, "touchstart", this.boundHandleTechTouchStart_), this.on(this.tech_, "touchmove", this.boundHandleTechTouchMove_), this.on(this.tech_, "touchend", this.boundHandleTechTouchEnd_), this.on(this.tech_, "tap", this.boundHandleTechTap_);
  }
  removeTechControlsListeners_() {
    this.off(this.tech_, "tap", this.boundHandleTechTap_), this.off(this.tech_, "touchstart", this.boundHandleTechTouchStart_), this.off(this.tech_, "touchmove", this.boundHandleTechTouchMove_), this.off(this.tech_, "touchend", this.boundHandleTechTouchEnd_), this.off(this.tech_, "click", this.boundHandleTechClick_), this.off(this.tech_, "dblclick", this.boundHandleTechDoubleClick_);
  }
  handleTechReady_() {
    this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_();
  }
  handleTechLoadStart_() {
    this.removeClass("vjs-ended", "vjs-seeking"), this.error(null), this.handleTechDurationChange_(), this.paused() ? (this.hasStarted(false), this.trigger("loadstart")) : this.trigger("loadstart"), this.manualAutoplay_(true === this.autoplay() && this.options_.normalizeAutoplay ? "play" : this.autoplay());
  }
  manualAutoplay_(e8) {
    if (!this.tech_ || "string" != typeof e8) return;
    const t3 = () => {
      const e9 = this.muted();
      this.muted(true);
      const t4 = () => {
        this.muted(e9);
      };
      this.playTerminatedQueue_.push(t4);
      const i3 = this.play();
      if (Ma(i3)) return i3.catch((e10) => {
        throw t4(), new Error(`Rejection at manualAutoplay. Restoring muted value. ${e10 || ""}`);
      });
    };
    let i2;
    return "any" !== e8 || this.muted() ? i2 = "muted" !== e8 || this.muted() ? this.play() : t3() : (i2 = this.play(), Ma(i2) && (i2 = i2.catch(t3))), Ma(i2) ? i2.then(() => {
      this.trigger({ type: "autoplay-success", autoplay: e8 });
    }).catch(() => {
      this.trigger({ type: "autoplay-failure", autoplay: e8 });
    }) : void 0;
  }
  updateSourceCaches_(e8 = "") {
    let t3 = e8, i2 = "";
    "string" != typeof t3 && (t3 = e8.src, i2 = e8.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], t3 && !i2 && (i2 = Uo(this, t3)), this.cache_.source = En({}, e8, { src: t3, type: i2 });
    const s3 = this.cache_.sources.filter((e9) => e9.src && e9.src === t3), n5 = [], r5 = this.$$("source"), a5 = [];
    for (let o5 = 0; o5 < r5.length; o5++) {
      const e9 = dr(r5[o5]);
      n5.push(e9), e9.src && e9.src === t3 && a5.push(e9.src);
    }
    a5.length && !s3.length ? this.cache_.sources = n5 : s3.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = t3;
  }
  handleTechSourceset_(e8) {
    if (!this.changingSrc_) {
      let t3 = (e9) => this.updateSourceCaches_(e9);
      const i2 = this.currentSource().src, s3 = e8.src;
      i2 && !/^blob:/.test(i2) && /^blob:/.test(s3) && (!this.lastSource_ || this.lastSource_.tech !== s3 && this.lastSource_.player !== i2) && (t3 = () => {
      }), t3(s3), e8.src || this.tech_.any(["sourceset", "loadstart"], (e9) => {
        if ("sourceset" === e9.type) return;
        const t4 = this.techGet_("currentSrc");
        this.lastSource_.tech = t4, this.updateSourceCaches_(t4);
      });
    }
    this.lastSource_ = { player: this.currentSource().src, tech: e8.src }, this.trigger({ src: e8.src, type: "sourceset" });
  }
  hasStarted(e8) {
    if (void 0 === e8) return this.hasStarted_;
    e8 !== this.hasStarted_ && (this.hasStarted_ = e8, this.hasStarted_ ? this.addClass("vjs-has-started") : this.removeClass("vjs-has-started"));
  }
  handleTechPlay_() {
    this.removeClass("vjs-ended", "vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(true), this.trigger("play");
  }
  handleTechRateChange_() {
    this.tech_.playbackRate() > 0 && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach((e8) => e8.callback(e8.event)), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange");
  }
  handleTechWaiting_() {
    this.addClass("vjs-waiting"), this.trigger("waiting");
    const e8 = this.currentTime(), t3 = () => {
      e8 !== this.currentTime() && (this.removeClass("vjs-waiting"), this.off("timeupdate", t3));
    };
    this.on("timeupdate", t3);
  }
  handleTechCanPlay_() {
    this.removeClass("vjs-waiting"), this.trigger("canplay");
  }
  handleTechCanPlayThrough_() {
    this.removeClass("vjs-waiting"), this.trigger("canplaythrough");
  }
  handleTechPlaying_() {
    this.removeClass("vjs-waiting"), this.trigger("playing");
  }
  handleTechSeeking_() {
    this.addClass("vjs-seeking"), this.trigger("seeking");
  }
  handleTechSeeked_() {
    this.removeClass("vjs-seeking", "vjs-ended"), this.trigger("seeked");
  }
  handleTechPause_() {
    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause");
  }
  handleTechEnded_() {
    this.addClass("vjs-ended"), this.removeClass("vjs-waiting"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended");
  }
  handleTechDurationChange_() {
    this.duration(this.techGet_("duration"));
  }
  handleTechClick_(e8) {
    this.controls_ && (void 0 !== this.options_ && void 0 !== this.options_.userActions && void 0 !== this.options_.userActions.click && false === this.options_.userActions.click || (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" == typeof this.options_.userActions.click ? this.options_.userActions.click.call(this, e8) : this.paused() ? Ua(this.play()) : this.pause()));
  }
  handleTechDoubleClick_(e8) {
    if (!this.controls_) return;
    Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), (t3) => t3.contains(e8.target)) || void 0 !== this.options_ && void 0 !== this.options_.userActions && void 0 !== this.options_.userActions.doubleClick && false === this.options_.userActions.doubleClick || (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" == typeof this.options_.userActions.doubleClick ? this.options_.userActions.doubleClick.call(this, e8) : this.isInPictureInPicture() && !ne.pictureInPictureElement ? this.exitPictureInPicture() : this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen());
  }
  handleTechTap_() {
    this.userActive(!this.userActive());
  }
  handleTechTouchStart_() {
    this.userWasActive = this.userActive();
  }
  handleTechTouchMove_() {
    this.userWasActive && this.reportUserActivity();
  }
  handleTechTouchEnd_(e8) {
    e8.cancelable && e8.preventDefault();
  }
  toggleFullscreenClass_() {
    this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen");
  }
  documentFullscreenChange_(e8) {
    const t3 = e8.target.player;
    if (t3 && t3 !== this) return;
    const i2 = this.el();
    let s3 = ne[this.fsApi_.fullscreenElement] === i2;
    !s3 && i2.matches && (s3 = i2.matches(":" + this.fsApi_.fullscreen)), this.isFullscreen(s3);
  }
  handleTechFullscreenChange_(e8, t3) {
    t3 && (t3.nativeIOSFullscreen && (this.addClass("vjs-ios-native-fs"), this.tech_.one("webkitendfullscreen", () => {
      this.removeClass("vjs-ios-native-fs");
    })), this.isFullscreen(t3.isFullscreen));
  }
  handleTechFullscreenError_(e8, t3) {
    this.trigger("fullscreenerror", t3);
  }
  togglePictureInPictureClass_() {
    this.isInPictureInPicture() ? this.addClass("vjs-picture-in-picture") : this.removeClass("vjs-picture-in-picture");
  }
  handleTechEnterPictureInPicture_(e8) {
    this.isInPictureInPicture(true);
  }
  handleTechLeavePictureInPicture_(e8) {
    this.isInPictureInPicture(false);
  }
  handleTechError_() {
    const e8 = this.tech_.error();
    e8 && this.error(e8);
  }
  handleTechTextData_() {
    let e8 = null;
    arguments.length > 1 && (e8 = arguments[1]), this.trigger("textdata", e8);
  }
  getCache() {
    return this.cache_;
  }
  resetCache_() {
    this.cache_ = { currentTime: 0, initTime: 0, inactivityTimeout: this.options_.inactivityTimeout, duration: NaN, lastVolume: 1, lastPlaybackRate: this.defaultPlaybackRate(), media: null, src: "", source: {}, sources: [], playbackRates: [], volume: 1 };
  }
  techCall_(e8, t3) {
    this.ready(function() {
      if (e8 in xo) return Co(this.middleware_, this.tech_, e8, t3);
      if (e8 in Ao) return ko(this.middleware_, this.tech_, e8, t3);
      try {
        this.tech_ && this.tech_[e8](t3);
      } catch (i2) {
        throw gn(i2), i2;
      }
    }, true);
  }
  techGet_(e8) {
    if (this.tech_ && this.tech_.isReady_) {
      if (e8 in Io) return wo(this.middleware_, this.tech_, e8);
      if (e8 in Ao) return ko(this.middleware_, this.tech_, e8);
      try {
        return this.tech_[e8]();
      } catch (t3) {
        if (void 0 === this.tech_[e8]) throw gn(`Video.js: ${e8} method not defined for ${this.techName_} playback technology.`, t3), t3;
        if ("TypeError" === t3.name) throw gn(`Video.js: ${e8} unavailable on ${this.techName_} playback technology element.`, t3), this.tech_.isReady_ = false, t3;
        throw gn(t3), t3;
      }
    }
  }
  play() {
    return new Promise((e8) => {
      this.play_(e8);
    });
  }
  play_(e8 = Ua) {
    this.playCallbacks_.push(e8);
    const t3 = Boolean(!this.changingSrc_ && (this.src() || this.currentSrc())), i2 = Boolean(Kn || Xn);
    if (this.waitToPlay_ && (this.off(["ready", "loadstart"], this.waitToPlay_), this.waitToPlay_ = null), !this.isReady_ || !t3) return this.waitToPlay_ = (e9) => {
      this.play_();
    }, this.one(["ready", "loadstart"], this.waitToPlay_), void (!t3 && i2 && this.load());
    const s3 = this.techGet_("play");
    i2 && this.hasClass("vjs-ended") && this.resetProgressBar_(), null === s3 ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(s3);
  }
  runPlayTerminatedQueue_() {
    const e8 = this.playTerminatedQueue_.slice(0);
    this.playTerminatedQueue_ = [], e8.forEach(function(e9) {
      e9();
    });
  }
  runPlayCallbacks_(e8) {
    const t3 = this.playCallbacks_.slice(0);
    this.playCallbacks_ = [], this.playTerminatedQueue_ = [], t3.forEach(function(t4) {
      t4(e8);
    });
  }
  pause() {
    this.techCall_("pause");
  }
  paused() {
    return false !== this.techGet_("paused");
  }
  played() {
    return this.techGet_("played") || Ia(0, 0);
  }
  scrubbing(e8) {
    if (void 0 === e8) return this.scrubbing_;
    this.scrubbing_ = !!e8, this.techCall_("setScrubbing", this.scrubbing_), e8 ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing");
  }
  currentTime(e8) {
    return void 0 === e8 ? (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime) : (e8 < 0 && (e8 = 0), this.isReady_ && !this.changingSrc_ && this.tech_ && this.tech_.isReady_ ? (this.techCall_("setCurrentTime", e8), this.cache_.initTime = 0, void (isFinite(e8) && (this.cache_.currentTime = Number(e8)))) : (this.cache_.initTime = e8, this.off("canplay", this.boundApplyInitTime_), void this.one("canplay", this.boundApplyInitTime_)));
  }
  applyInitTime_() {
    this.currentTime(this.cache_.initTime);
  }
  duration(e8) {
    if (void 0 === e8) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
    (e8 = parseFloat(e8)) < 0 && (e8 = 1 / 0), e8 !== this.cache_.duration && (this.cache_.duration = e8, e8 === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), isNaN(e8) || this.trigger("durationchange"));
  }
  remainingTime() {
    return this.duration() - this.currentTime();
  }
  remainingTimeDisplay() {
    return Math.floor(this.duration()) - Math.floor(this.currentTime());
  }
  buffered() {
    let e8 = this.techGet_("buffered");
    return e8 && e8.length || (e8 = Ia(0, 0)), e8;
  }
  seekable() {
    let e8 = this.techGet_("seekable");
    return e8 && e8.length || (e8 = Ia(0, 0)), e8;
  }
  seeking() {
    return this.techGet_("seeking");
  }
  ended() {
    return this.techGet_("ended");
  }
  networkState() {
    return this.techGet_("networkState");
  }
  readyState() {
    return this.techGet_("readyState");
  }
  bufferedPercent() {
    return Na(this.buffered(), this.duration());
  }
  bufferedEnd() {
    const e8 = this.buffered(), t3 = this.duration();
    let i2 = e8.end(e8.length - 1);
    return i2 > t3 && (i2 = t3), i2;
  }
  volume(e8) {
    let t3;
    return void 0 !== e8 ? (t3 = Math.max(0, Math.min(1, e8)), this.cache_.volume = t3, this.techCall_("setVolume", t3), void (t3 > 0 && this.lastVolume_(t3))) : (t3 = parseFloat(this.techGet_("volume")), isNaN(t3) ? 1 : t3);
  }
  muted(e8) {
    if (void 0 === e8) return this.techGet_("muted") || false;
    this.techCall_("setMuted", e8);
  }
  defaultMuted(e8) {
    return void 0 !== e8 && this.techCall_("setDefaultMuted", e8), this.techGet_("defaultMuted") || false;
  }
  lastVolume_(e8) {
    if (void 0 === e8 || 0 === e8) return this.cache_.lastVolume;
    this.cache_.lastVolume = e8;
  }
  supportsFullScreen() {
    return this.techGet_("supportsFullScreen") || false;
  }
  isFullscreen(e8) {
    if (void 0 !== e8) {
      const t3 = this.isFullscreen_;
      return this.isFullscreen_ = Boolean(e8), this.isFullscreen_ !== t3 && this.fsApi_.prefixed && this.trigger("fullscreenchange"), void this.toggleFullscreenClass_();
    }
    return this.isFullscreen_;
  }
  requestFullscreen(e8) {
    this.isInPictureInPicture() && this.exitPictureInPicture();
    const t3 = this;
    return new Promise((i2, s3) => {
      function n5() {
        t3.off("fullscreenerror", a5), t3.off("fullscreenchange", r5);
      }
      function r5() {
        n5(), i2();
      }
      function a5(e9, t4) {
        n5(), s3(t4);
      }
      t3.one("fullscreenchange", r5), t3.one("fullscreenerror", a5);
      const o5 = t3.requestFullscreenHelper_(e8);
      o5 && (o5.then(n5, n5), o5.then(i2, s3));
    });
  }
  requestFullscreenHelper_(e8) {
    let t3;
    if (this.fsApi_.prefixed || (t3 = this.options_.fullscreen && this.options_.fullscreen.options || {}, void 0 !== e8 && (t3 = e8)), this.fsApi_.requestFullscreen) {
      const e9 = this.el_[this.fsApi_.requestFullscreen](t3);
      return e9 && e9.then(() => this.isFullscreen(true), () => this.isFullscreen(false)), e9;
    }
    this.tech_.supportsFullScreen() && true == !this.options_.preferFullWindow ? this.techCall_("enterFullScreen") : this.enterFullWindow();
  }
  exitFullscreen() {
    const e8 = this;
    return new Promise((t3, i2) => {
      function s3() {
        e8.off("fullscreenerror", r5), e8.off("fullscreenchange", n5);
      }
      function n5() {
        s3(), t3();
      }
      function r5(e9, t4) {
        s3(), i2(t4);
      }
      e8.one("fullscreenchange", n5), e8.one("fullscreenerror", r5);
      const a5 = e8.exitFullscreenHelper_();
      a5 && (a5.then(s3, s3), a5.then(t3, i2));
    });
  }
  exitFullscreenHelper_() {
    if (this.fsApi_.requestFullscreen) {
      const e8 = ne[this.fsApi_.exitFullscreen]();
      return e8 && Ua(e8.then(() => this.isFullscreen(false))), e8;
    }
    this.tech_.supportsFullScreen() && true == !this.options_.preferFullWindow ? this.techCall_("exitFullScreen") : this.exitFullWindow();
  }
  enterFullWindow() {
    this.isFullscreen(true), this.isFullWindow = true, this.docOrigOverflow = ne.documentElement.style.overflow, Gr(ne, "keydown", this.boundFullWindowOnEscKey_), ne.documentElement.style.overflow = "hidden", or(ne.body, "vjs-full-window"), this.trigger("enterFullWindow");
  }
  fullWindowOnEscKey(e8) {
    "Escape" === e8.key && true === this.isFullscreen() && (this.isFullWindow ? this.exitFullWindow() : this.exitFullscreen());
  }
  exitFullWindow() {
    this.isFullscreen(false), this.isFullWindow = false, Xr(ne, "keydown", this.boundFullWindowOnEscKey_), ne.documentElement.style.overflow = this.docOrigOverflow, lr(ne.body, "vjs-full-window"), this.trigger("exitFullWindow");
  }
  disablePictureInPicture(e8) {
    if (void 0 === e8) return this.techGet_("disablePictureInPicture");
    this.techCall_("setDisablePictureInPicture", e8), this.options_.disablePictureInPicture = e8, this.trigger("disablepictureinpicturechanged");
  }
  isInPictureInPicture(e8) {
    return void 0 !== e8 ? (this.isInPictureInPicture_ = !!e8, void this.togglePictureInPictureClass_()) : !!this.isInPictureInPicture_;
  }
  requestPictureInPicture() {
    if (this.options_.enableDocumentPictureInPicture && _.documentPictureInPicture) {
      const e8 = ne.createElement(this.el().tagName);
      return e8.classList = this.el().classList, e8.classList.add("vjs-pip-container"), this.posterImage && e8.appendChild(this.posterImage.el().cloneNode(true)), this.titleBar && e8.appendChild(this.titleBar.el().cloneNode(true)), e8.appendChild(sr("p", { className: "vjs-pip-text" }, {}, this.localize("Playing in picture-in-picture"))), _.documentPictureInPicture.requestWindow({ width: this.videoWidth(), height: this.videoHeight() }).then((t3) => (Ar(t3), this.el_.parentNode.insertBefore(e8, this.el_), t3.document.body.appendChild(this.el_), t3.document.body.classList.add("vjs-pip-window"), this.player_.isInPictureInPicture(true), this.player_.trigger({ type: "enterpictureinpicture", pipWindow: t3 }), t3.addEventListener("pagehide", (t4) => {
        const i2 = t4.target.querySelector(".video-js");
        e8.parentNode.replaceChild(i2, e8), this.player_.isInPictureInPicture(false), this.player_.trigger("leavepictureinpicture");
      }), t3));
    }
    return "pictureInPictureEnabled" in ne && false === this.disablePictureInPicture() ? this.techGet_("requestPictureInPicture") : Promise.reject("No PiP mode is available");
  }
  exitPictureInPicture() {
    return _.documentPictureInPicture && _.documentPictureInPicture.window ? (_.documentPictureInPicture.window.close(), Promise.resolve()) : "pictureInPictureEnabled" in ne ? ne.exitPictureInPicture() : void 0;
  }
  handleKeyDown(e8) {
    const { userActions: t3 } = this.options_;
    if (!t3 || !t3.hotkeys) return;
    ((e9) => {
      const t4 = e9.tagName.toLowerCase();
      if (e9.isContentEditable) return true;
      if ("input" === t4) return -1 === ["button", "checkbox", "hidden", "radio", "reset", "submit"].indexOf(e9.type);
      return -1 !== ["textarea"].indexOf(t4);
    })(this.el_.ownerDocument.activeElement) || ("function" == typeof t3.hotkeys ? t3.hotkeys.call(this, e8) : this.handleHotkeys(e8));
  }
  handleHotkeys(e8) {
    const t3 = this.options_.userActions ? this.options_.userActions.hotkeys : {}, { fullscreenKey: i2 = (t4) => "f" === e8.key.toLowerCase(), muteKey: s3 = (t4) => "m" === e8.key.toLowerCase(), playPauseKey: n5 = (t4) => "k" === e8.key.toLowerCase() || " " === e8.key.toLowerCase() } = t3;
    if (i2.call(this, e8)) {
      e8.preventDefault(), e8.stopPropagation();
      const t4 = Ea.getComponent("FullscreenToggle");
      false !== ne[this.fsApi_.fullscreenEnabled] && t4.prototype.handleClick.call(this, e8);
    } else if (s3.call(this, e8)) {
      e8.preventDefault(), e8.stopPropagation();
      Ea.getComponent("MuteToggle").prototype.handleClick.call(this, e8);
    } else if (n5.call(this, e8)) {
      e8.preventDefault(), e8.stopPropagation();
      Ea.getComponent("PlayToggle").prototype.handleClick.call(this, e8);
    }
  }
  canPlayType(e8) {
    let t3;
    for (let i2 = 0, s3 = this.options_.techOrder; i2 < s3.length; i2++) {
      const n5 = s3[i2];
      let r5 = yo.getTech(n5);
      if (r5 || (r5 = Ea.getComponent(n5)), r5) {
        if (r5.isSupported() && (t3 = r5.canPlayType(e8), t3)) return t3;
      } else gn.error(`The "${n5}" tech is undefined. Skipped browser support check for that tech.`);
    }
    return "";
  }
  selectSource(e8) {
    const t3 = this.options_.techOrder.map((e9) => [e9, yo.getTech(e9)]).filter(([e9, t4]) => t4 ? t4.isSupported() : (gn.error(`The "${e9}" tech is undefined. Skipped browser support check for that tech.`), false)), i2 = function(e9, t4, i3) {
      let s4;
      return e9.some((e10) => t4.some((t5) => {
        if (s4 = i3(e10, t5), s4) return true;
      })), s4;
    };
    let s3;
    const n5 = (e9) => (t4, i3) => e9(i3, t4), r5 = ([e9, t4], i3) => {
      if (t4.canPlaySource(i3, this.options_[e9.toLowerCase()])) return { source: i3, tech: e9 };
    };
    return s3 = this.options_.sourceOrder ? i2(e8, t3, n5(r5)) : i2(t3, e8, r5), s3 || false;
  }
  handleSrc_(e8, t3) {
    if (void 0 === e8) return this.cache_.src || "";
    this.resetRetryOnError_ && this.resetRetryOnError_();
    const i2 = Bo(e8);
    if (i2.length) {
      if (this.changingSrc_ = true, t3 || (this.cache_.sources = i2), this.updateSourceCaches_(i2[0]), So(this, i2[0], (e9, s3) => {
        this.middleware_ = s3, t3 || (this.cache_.sources = i2), this.updateSourceCaches_(e9);
        if (this.src_(e9)) return i2.length > 1 ? this.handleSrc_(i2.slice(1)) : (this.changingSrc_ = false, this.setTimeout(function() {
          this.error({ code: 4, message: this.options_.notSupportedMessage });
        }, 0), void this.triggerReady());
        Eo(s3, this.tech_);
      }), i2.length > 1) {
        const e9 = () => {
          this.error(null), this.handleSrc_(i2.slice(1), true);
        }, t4 = () => {
          this.off("error", e9);
        };
        this.one("error", e9), this.one("playing", t4), this.resetRetryOnError_ = () => {
          this.off("error", e9), this.off("playing", t4);
        };
      }
    } else this.setTimeout(function() {
      this.error({ code: 4, message: this.options_.notSupportedMessage });
    }, 0);
  }
  src(e8) {
    return this.handleSrc_(e8, false);
  }
  src_(e8) {
    const t3 = this.selectSource([e8]);
    return !t3 || (Ta(t3.tech, this.techName_) ? (this.ready(function() {
      this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e8) : this.techCall_("src", e8.src), this.changingSrc_ = false;
    }, true), false) : (this.changingSrc_ = true, this.loadTech_(t3.tech, t3.source), this.tech_.ready(() => {
      this.changingSrc_ = false;
    }), false));
  }
  addSourceElement(e8, t3) {
    return !!this.tech_ && this.tech_.addSourceElement(e8, t3);
  }
  removeSourceElement(e8) {
    return !!this.tech_ && this.tech_.removeSourceElement(e8);
  }
  load() {
    this.tech_ && this.tech_.vhs ? this.src(this.currentSource()) : this.techCall_("load");
  }
  reset() {
    if (this.paused()) this.doReset_();
    else {
      Ua(this.play().then(() => this.doReset_()));
    }
  }
  doReset_() {
    this.tech_ && this.tech_.clearTracks("text"), this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.resetCache_(), this.poster(""), this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset"), this.resetControlBarUI_(), this.error(null), this.titleBar && this.titleBar.update({ title: void 0, description: void 0 }), oa(this) && this.trigger("playerreset");
  }
  resetControlBarUI_() {
    this.resetProgressBar_(), this.resetPlaybackRate_(), this.resetVolumeBar_();
  }
  resetProgressBar_() {
    this.currentTime(0);
    const { currentTimeDisplay: e8, durationDisplay: t3, progressControl: i2, remainingTimeDisplay: s3 } = this.controlBar || {}, { seekBar: n5 } = i2 || {};
    e8 && e8.updateContent(), t3 && t3.updateContent(), s3 && s3.updateContent(), n5 && (n5.update(), n5.loadProgressBar && n5.loadProgressBar.update());
  }
  resetPlaybackRate_() {
    this.playbackRate(this.defaultPlaybackRate()), this.handleTechRateChange_();
  }
  resetVolumeBar_() {
    this.volume(1), this.trigger("volumechange");
  }
  currentSources() {
    const e8 = this.currentSource(), t3 = [];
    return 0 !== Object.keys(e8).length && t3.push(e8), this.cache_.sources || t3;
  }
  currentSource() {
    return this.cache_.source || {};
  }
  currentSrc() {
    return this.currentSource() && this.currentSource().src || "";
  }
  currentType() {
    return this.currentSource() && this.currentSource().type || "";
  }
  preload(e8) {
    return void 0 !== e8 ? (this.techCall_("setPreload", e8), void (this.options_.preload = e8)) : this.techGet_("preload");
  }
  autoplay(e8) {
    if (void 0 === e8) return this.options_.autoplay || false;
    let t3;
    "string" == typeof e8 && /(any|play|muted)/.test(e8) || true === e8 && this.options_.normalizeAutoplay ? (this.options_.autoplay = e8, this.manualAutoplay_("string" == typeof e8 ? e8 : "play"), t3 = false) : this.options_.autoplay = !!e8, t3 = void 0 === t3 ? this.options_.autoplay : t3, this.tech_ && this.techCall_("setAutoplay", t3);
  }
  playsinline(e8) {
    return void 0 !== e8 && (this.techCall_("setPlaysinline", e8), this.options_.playsinline = e8), this.techGet_("playsinline");
  }
  loop(e8) {
    return void 0 !== e8 ? (this.techCall_("setLoop", e8), void (this.options_.loop = e8)) : this.techGet_("loop");
  }
  poster(e8) {
    if (void 0 === e8) return this.poster_;
    e8 || (e8 = ""), e8 !== this.poster_ && (this.poster_ = e8, this.techCall_("setPoster", e8), this.isPosterFromTech_ = false, this.trigger("posterchange"));
  }
  handleTechPosterChange_() {
    if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
      const e8 = this.tech_.poster() || "";
      e8 !== this.poster_ && (this.poster_ = e8, this.isPosterFromTech_ = true, this.trigger("posterchange"));
    }
  }
  controls(e8) {
    if (void 0 === e8) return !!this.controls_;
    e8 = !!e8, this.controls_ !== e8 && (this.controls_ = e8, this.usingNativeControls() && this.techCall_("setControls", e8), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()));
  }
  usingNativeControls(e8) {
    if (void 0 === e8) return !!this.usingNativeControls_;
    e8 = !!e8, this.usingNativeControls_ !== e8 && (this.usingNativeControls_ = e8, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")));
  }
  error(e8) {
    if (void 0 === e8) return this.error_ || null;
    if (nn("beforeerror").forEach((t3) => {
      const i2 = t3(this, e8);
      Tn(i2) && !Array.isArray(i2) || "string" == typeof i2 || "number" == typeof i2 || null === i2 ? e8 = i2 : this.log.error("please return a value that MediaError expects in beforeerror hooks");
    }), this.options_.suppressNotSupportedError && e8 && 4 === e8.code) {
      const t3 = function() {
        this.error(e8);
      };
      return this.options_.suppressNotSupportedError = false, this.any(["click", "touchstart"], t3), void this.one("loadstart", function() {
        this.off(["click", "touchstart"], t3);
      });
    }
    if (null === e8) return this.error_ = null, this.removeClass("vjs-error"), void (this.errorDisplay && this.errorDisplay.close());
    this.error_ = new Ra(e8), this.addClass("vjs-error"), gn.error(`(CODE:${this.error_.code} ${Ra.errorTypes[this.error_.code]})`, this.error_.message, this.error_), this.trigger("error"), nn("error").forEach((e9) => e9(this, this.error_));
  }
  reportUserActivity(e8) {
    this.userActivity_ = true;
  }
  userActive(e8) {
    if (void 0 === e8) return this.userActive_;
    if ((e8 = !!e8) !== this.userActive_) {
      if (this.userActive_ = e8, this.userActive_) return this.userActivity_ = true, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
      this.tech_ && this.tech_.one("mousemove", function(e9) {
        e9.stopPropagation(), e9.preventDefault();
      }), this.userActivity_ = false, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive");
    }
  }
  listenForUserActivity_() {
    let e8, t3, i2;
    const s3 = ea(this, this.reportUserActivity), n5 = function(e9) {
      e9.screenX === t3 && e9.screenY === i2 || (t3 = e9.screenX, i2 = e9.screenY, s3());
    }, r5 = function() {
      s3(), this.clearInterval(e8), e8 = this.setInterval(s3, 250);
    }, a5 = function(t4) {
      s3(), this.clearInterval(e8);
    };
    this.on("mousedown", r5), this.on("mousemove", n5), this.on("mouseup", a5), this.on("mouseleave", a5);
    const o5 = this.getChild("controlBar");
    let l2;
    !o5 || Xn || Dn || (o5.on("mouseenter", function(e9) {
      0 !== this.player().options_.inactivityTimeout && (this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout), this.player().options_.inactivityTimeout = 0;
    }), o5.on("mouseleave", function(e9) {
      this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout;
    })), this.on("keydown", s3), this.on("keyup", s3);
    const u3 = function() {
      if (!this.userActivity_) return;
      this.userActivity_ = false, this.userActive(true), this.clearTimeout(l2);
      const e9 = this.options_.inactivityTimeout;
      e9 <= 0 || (l2 = this.setTimeout(function() {
        this.userActivity_ || this.userActive(false);
      }, e9));
    };
    this.setInterval(u3, 250);
  }
  playbackRate(e8) {
    if (void 0 === e8) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
    this.techCall_("setPlaybackRate", e8);
  }
  defaultPlaybackRate(e8) {
    return void 0 !== e8 ? this.techCall_("setDefaultPlaybackRate", e8) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1;
  }
  isAudio(e8) {
    if (void 0 === e8) return !!this.isAudio_;
    this.isAudio_ = !!e8;
  }
  updatePlayerHeightOnAudioOnlyMode_() {
    const e8 = this.getChild("ControlBar");
    e8 && this.audioOnlyCache_.controlBarHeight !== e8.currentHeight() && (this.audioOnlyCache_.controlBarHeight = e8.currentHeight(), this.height(this.audioOnlyCache_.controlBarHeight));
  }
  enableAudioOnlyUI_() {
    this.addClass("vjs-audio-only-mode");
    const e8 = this.children(), t3 = this.getChild("ControlBar"), i2 = t3 && t3.currentHeight();
    e8.forEach((e9) => {
      e9 !== t3 && e9.el_ && !e9.hasClass("vjs-hidden") && (e9.hide(), this.audioOnlyCache_.hiddenChildren.push(e9));
    }), this.audioOnlyCache_.playerHeight = this.currentHeight(), this.audioOnlyCache_.controlBarHeight = i2, this.on("playerresize", this.boundUpdatePlayerHeightOnAudioOnlyMode_), this.height(i2), this.trigger("audioonlymodechange");
  }
  disableAudioOnlyUI_() {
    this.removeClass("vjs-audio-only-mode"), this.off("playerresize", this.boundUpdatePlayerHeightOnAudioOnlyMode_), this.audioOnlyCache_.hiddenChildren.forEach((e8) => e8.show()), this.height(this.audioOnlyCache_.playerHeight), this.trigger("audioonlymodechange");
  }
  audioOnlyMode(e8) {
    if ("boolean" != typeof e8 || e8 === this.audioOnlyMode_) return this.audioOnlyMode_;
    if (this.audioOnlyMode_ = e8, e8) {
      const e9 = [];
      return this.isInPictureInPicture() && e9.push(this.exitPictureInPicture()), this.isFullscreen() && e9.push(this.exitFullscreen()), this.audioPosterMode() && e9.push(this.audioPosterMode(false)), Promise.all(e9).then(() => this.enableAudioOnlyUI_());
    }
    return Promise.resolve().then(() => this.disableAudioOnlyUI_());
  }
  enablePosterModeUI_() {
    (this.tech_ && this.tech_).hide(), this.addClass("vjs-audio-poster-mode"), this.trigger("audiopostermodechange");
  }
  disablePosterModeUI_() {
    (this.tech_ && this.tech_).show(), this.removeClass("vjs-audio-poster-mode"), this.trigger("audiopostermodechange");
  }
  audioPosterMode(e8) {
    if ("boolean" != typeof e8 || e8 === this.audioPosterMode_) return this.audioPosterMode_;
    if (this.audioPosterMode_ = e8, e8) {
      if (this.audioOnlyMode()) {
        return this.audioOnlyMode(false).then(() => {
          this.enablePosterModeUI_();
        });
      }
      return Promise.resolve().then(() => {
        this.enablePosterModeUI_();
      });
    }
    return Promise.resolve().then(() => {
      this.disablePosterModeUI_();
    });
  }
  addTextTrack(e8, t3, i2) {
    if (this.tech_) return this.tech_.addTextTrack(e8, t3, i2);
  }
  addRemoteTextTrack(e8, t3) {
    if (this.tech_) return this.tech_.addRemoteTextTrack(e8, t3);
  }
  removeRemoteTextTrack(e8 = {}) {
    let { track: t3 } = e8;
    if (t3 || (t3 = e8), this.tech_) return this.tech_.removeRemoteTextTrack(t3);
  }
  getVideoPlaybackQuality() {
    return this.techGet_("getVideoPlaybackQuality");
  }
  videoWidth() {
    return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0;
  }
  videoHeight() {
    return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0;
  }
  language(e8) {
    if (void 0 === e8) return this.language_;
    this.language_ !== String(e8).toLowerCase() && (this.language_ = String(e8).toLowerCase(), oa(this) && this.trigger("languagechange"));
  }
  languages() {
    return En(_Ku.prototype.options_.languages, this.languages_);
  }
  toJSON() {
    const e8 = En(this.options_), t3 = e8.tracks;
    e8.tracks = [];
    for (let i2 = 0; i2 < t3.length; i2++) {
      let s3 = t3[i2];
      s3 = En(s3), s3.player = void 0, e8.tracks[i2] = s3;
    }
    return e8;
  }
  createModal(e8, t3) {
    (t3 = t3 || {}).content = e8 || "";
    const i2 = new ja(this, t3);
    return this.addChild(i2), i2.on("dispose", () => {
      this.removeChild(i2);
    }), i2.open(), i2;
  }
  updateCurrentBreakpoint_() {
    if (!this.responsive()) return;
    const e8 = this.currentBreakpoint(), t3 = this.currentWidth();
    for (let i2 = 0; i2 < Wu.length; i2++) {
      const s3 = Wu[i2];
      if (t3 <= this.breakpoints_[s3]) {
        if (e8 === s3) return;
        e8 && this.removeClass(Gu[e8]), this.addClass(Gu[s3]), this.breakpoint_ = s3;
        break;
      }
    }
  }
  removeCurrentBreakpoint_() {
    const e8 = this.currentBreakpointClass();
    this.breakpoint_ = "", e8 && this.removeClass(e8);
  }
  breakpoints(e8) {
    return void 0 === e8 || (this.breakpoint_ = "", this.breakpoints_ = Object.assign({}, Xu, e8), this.updateCurrentBreakpoint_()), Object.assign(this.breakpoints_);
  }
  responsive(e8) {
    if (void 0 === e8) return this.responsive_;
    return (e8 = Boolean(e8)) !== this.responsive_ ? (this.responsive_ = e8, e8 ? (this.on("playerresize", this.boundUpdateCurrentBreakpoint_), this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.boundUpdateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), e8) : void 0;
  }
  currentBreakpoint() {
    return this.breakpoint_;
  }
  currentBreakpointClass() {
    return Gu[this.breakpoint_] || "";
  }
  loadMedia(e8, t3) {
    if (!e8 || "object" != typeof e8) return;
    const i2 = this.crossOrigin();
    this.reset(), this.cache_.media = En(e8);
    const { artist: s3, artwork: n5, description: r5, poster: a5, src: o5, textTracks: l2, title: u3 } = this.cache_.media;
    !n5 && a5 && (this.cache_.media.artwork = [{ src: a5, type: Mo(a5) }]), i2 && this.crossOrigin(i2), o5 && this.src(o5), a5 && this.poster(a5), Array.isArray(l2) && l2.forEach((e9) => this.addRemoteTextTrack(e9, false)), this.titleBar && this.titleBar.update({ title: u3, description: r5 || s3 || "" }), this.ready(t3);
  }
  getMedia() {
    if (!this.cache_.media) {
      const e8 = this.poster(), t3 = { src: this.currentSources(), textTracks: Array.prototype.map.call(this.remoteTextTracks(), (e9) => ({ kind: e9.kind, label: e9.label, language: e9.language, src: e9.src })) };
      return e8 && (t3.poster = e8, t3.artwork = [{ src: t3.poster, type: Mo(t3.poster) }]), t3;
    }
    return En(this.cache_.media);
  }
  static getTagSettings(e8) {
    const t3 = { sources: [], tracks: [] }, i2 = dr(e8), s3 = i2["data-setup"];
    if (ar(e8, "vjs-fill") && (i2.fill = true), ar(e8, "vjs-fluid") && (i2.fluid = true), null !== s3) try {
      Object.assign(i2, JSON.parse(s3 || "{}"));
    } catch (n5) {
      gn.error("data-setup", n5);
    }
    if (Object.assign(t3, i2), e8.hasChildNodes()) {
      const i3 = e8.childNodes;
      for (let e9 = 0, s4 = i3.length; e9 < s4; e9++) {
        const s5 = i3[e9], n5 = s5.nodeName.toLowerCase();
        "source" === n5 ? t3.sources.push(dr(s5)) : "track" === n5 && t3.tracks.push(dr(s5));
      }
    }
    return t3;
  }
  debug(e8) {
    if (void 0 === e8) return this.debugEnabled_;
    e8 ? (this.trigger("debugon"), this.previousLogLevel_ = this.log.level, this.log.level("debug"), this.debugEnabled_ = true) : (this.trigger("debugoff"), this.log.level(this.previousLogLevel_), this.previousLogLevel_ = void 0, this.debugEnabled_ = false);
  }
  playbackRates(e8) {
    if (void 0 === e8) return this.cache_.playbackRates;
    Array.isArray(e8) && e8.every((e9) => "number" == typeof e9) && (this.cache_.playbackRates = e8, this.trigger("playbackrateschange"));
  }
};
go.names.forEach(function(e8) {
  const t3 = go[e8];
  Ku.prototype[t3.getterName] = function() {
    return this.tech_ ? this.tech_[t3.getterName]() : (this[t3.privateName] = this[t3.privateName] || new t3.ListClass(), this[t3.privateName]);
  };
}), Ku.prototype.crossorigin = Ku.prototype.crossOrigin, Ku.players = {};
var Yu = _.navigator;
Ku.prototype.options_ = { techOrder: yo.defaultTechOrder_, html5: {}, enableSourceset: true, inactivityTimeout: 2e3, playbackRates: [], liveui: false, children: ["mediaLoader", "posterImage", "titleBar", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"], language: Yu && (Yu.languages && Yu.languages[0] || Yu.userLanguage || Yu.language) || "en", languages: {}, notSupportedMessage: "No compatible source was found for this media.", normalizeAutoplay: false, fullscreen: { options: { navigationUI: "hide" } }, breakpoints: {}, responsive: false, audioOnlyMode: false, audioPosterMode: false, spatialNavigation: { enabled: false, horizontalSeek: false }, enableSmoothSeeking: false, disableSeekWhileScrubbingOnMobile: false }, Vu.forEach(function(e8) {
  Ku.prototype[`handleTech${va(e8)}_`] = function() {
    return this.trigger(e8);
  };
}), Ea.registerComponent("Player", Ku);
var Qu = "plugin";
var Ju = "activePlugins_";
var Zu = {};
var eh = (e8) => Zu.hasOwnProperty(e8);
var th = (e8) => eh(e8) ? Zu[e8] : void 0;
var ih = (e8, t3) => {
  e8[Ju] = e8[Ju] || {}, e8[Ju][t3] = true;
};
var sh = (e8, t3, i2) => {
  const s3 = (i2 ? "before" : "") + "pluginsetup";
  e8.trigger(s3, t3), e8.trigger(s3 + ":" + t3.name, t3);
};
var nh = function(e8, t3) {
  const i2 = function() {
    sh(this, { name: e8, plugin: t3, instance: null }, true);
    const i3 = t3.apply(this, arguments);
    return ih(this, e8), sh(this, { name: e8, plugin: t3, instance: i3 }), i3;
  };
  return Object.keys(t3).forEach(function(e9) {
    i2[e9] = t3[e9];
  }), i2;
};
var rh = (e8, t3) => (t3.prototype.name = e8, function(...i2) {
  sh(this, { name: e8, plugin: t3, instance: null }, true);
  const s3 = new t3(...[this, ...i2]);
  return this[e8] = () => s3, sh(this, s3.getEventHash()), s3;
});
var ah = class _ah {
  constructor(e8) {
    if (this.constructor === _ah) throw new Error("Plugin must be sub-classed; not directly instantiated.");
    this.player = e8, this.log || (this.log = this.player.log.createLogger(this.name)), fa(this), delete this.trigger, _a(this, this.constructor.defaultState), ih(e8, this.name), this.dispose = this.dispose.bind(this), e8.on("dispose", this.dispose);
  }
  version() {
    return this.constructor.VERSION;
  }
  getEventHash(e8 = {}) {
    return e8.name = this.name, e8.plugin = this.constructor, e8.instance = this, e8;
  }
  trigger(e8, t3 = {}) {
    return Kr(this.eventBusEl_, e8, this.getEventHash(t3));
  }
  handleStateChanged(e8) {
  }
  dispose() {
    const { name: e8, player: t3 } = this;
    this.trigger("dispose"), this.off(), t3.off("dispose", this.dispose), t3[Ju][e8] = false, this.player = this.state = null, t3[e8] = rh(e8, Zu[e8]);
  }
  static isBasic(e8) {
    const t3 = "string" == typeof e8 ? th(e8) : e8;
    return "function" == typeof t3 && !_ah.prototype.isPrototypeOf(t3.prototype);
  }
  static registerPlugin(e8, t3) {
    if ("string" != typeof e8) throw new Error(`Illegal plugin name, "${e8}", must be a string, was ${typeof e8}.`);
    if (eh(e8)) gn.warn(`A plugin named "${e8}" already exists. You may want to avoid re-registering plugins!`);
    else if (Ku.prototype.hasOwnProperty(e8)) throw new Error(`Illegal plugin name, "${e8}", cannot share a name with an existing player method!`);
    if ("function" != typeof t3) throw new Error(`Illegal plugin for "${e8}", must be a function, was ${typeof t3}.`);
    return Zu[e8] = t3, e8 !== Qu && (_ah.isBasic(t3) ? Ku.prototype[e8] = nh(e8, t3) : Ku.prototype[e8] = rh(e8, t3)), t3;
  }
  static deregisterPlugin(e8) {
    if (e8 === Qu) throw new Error("Cannot de-register base plugin.");
    eh(e8) && (delete Zu[e8], delete Ku.prototype[e8]);
  }
  static getPlugins(e8 = Object.keys(Zu)) {
    let t3;
    return e8.forEach((e9) => {
      const i2 = th(e9);
      i2 && (t3 = t3 || {}, t3[e9] = i2);
    }), t3;
  }
  static getPluginVersion(e8) {
    const t3 = th(e8);
    return t3 && t3.VERSION || "";
  }
};
function oh(e8, t3) {
  let i2 = false;
  return function(...s3) {
    return i2 || gn.warn(e8), i2 = true, t3.apply(this, s3);
  };
}
function lh(e8, t3, i2, s3) {
  return oh(`${t3} is deprecated and will be removed in ${e8}.0; please use ${i2} instead.`, s3);
}
ah.getPlugin = th, ah.BASE_PLUGIN_NAME = Qu, ah.registerPlugin(Qu, ah), Ku.prototype.usingPlugin = function(e8) {
  return !!this[Ju] && true === this[Ju][e8];
}, Ku.prototype.hasPlugin = function(e8) {
  return !!eh(e8);
};
var uh = { NetworkBadStatus: "networkbadstatus", NetworkRequestFailed: "networkrequestfailed", NetworkRequestAborted: "networkrequestaborted", NetworkRequestTimeout: "networkrequesttimeout", NetworkBodyParserFailed: "networkbodyparserfailed", StreamingHlsPlaylistParserError: "streaminghlsplaylistparsererror", StreamingDashManifestParserError: "streamingdashmanifestparsererror", StreamingContentSteeringParserError: "streamingcontentsteeringparsererror", StreamingVttParserError: "streamingvttparsererror", StreamingFailedToSelectNextSegment: "streamingfailedtoselectnextsegment", StreamingFailedToDecryptSegment: "streamingfailedtodecryptsegment", StreamingFailedToTransmuxSegment: "streamingfailedtotransmuxsegment", StreamingFailedToAppendSegment: "streamingfailedtoappendsegment", StreamingCodecsChangeError: "streamingcodecschangeerror" };
var hh = (e8) => 0 === e8.indexOf("#") ? e8.slice(1) : e8;
function dh(e8, t3, i2) {
  let s3 = dh.getPlayer(e8);
  if (s3) return t3 && gn.warn(`Player "${e8}" is already initialised. Options will not be applied.`), i2 && s3.ready(i2), s3;
  const n5 = "string" == typeof e8 ? kr("#" + hh(e8)) : e8;
  if (!er(n5)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
  const r5 = "getRootNode" in n5 && n5.getRootNode() instanceof _.ShadowRoot ? n5.getRootNode() : n5.ownerDocument.body;
  n5.ownerDocument.defaultView && r5.contains(n5) || gn.warn("The element supplied is not included in the DOM"), true === (t3 = t3 || {}).restoreEl && (t3.restoreEl = (n5.parentNode && n5.parentNode.hasAttribute && n5.parentNode.hasAttribute("data-vjs-player") ? n5.parentNode : n5).cloneNode(true)), nn("beforesetup").forEach((e9) => {
    const i3 = e9(n5, En(t3));
    Tn(i3) && !Array.isArray(i3) ? t3 = En(t3, i3) : gn.error("please return an object in beforesetup hooks");
  });
  const a5 = Ea.getComponent("Player");
  return s3 = new a5(n5, t3, i2), nn("setup").forEach((e9) => e9(s3)), s3;
}
if (dh.hooks_ = sn, dh.hooks = nn, dh.hook = rn, dh.hookOnce = on, dh.removeHook = an, true !== _.VIDEOJS_NO_DYNAMIC_STYLE && Zn()) {
  let e8 = kr(".vjs-styles-defaults");
  if (!e8) {
    e8 = Mr("vjs-styles-defaults");
    const t3 = kr("head");
    t3 && t3.insertBefore(e8, t3.firstChild), Ur(e8, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid:not(.vjs-audio-only-mode) {\n        padding-top: 56.25%\n      }\n    ");
  }
}
Nr(1, dh), dh.VERSION = tn, dh.options = Ku.prototype.options_, dh.getPlayers = () => Ku.players, dh.getPlayer = (e8) => {
  const t3 = Ku.players;
  let i2;
  if ("string" == typeof e8) {
    const s3 = hh(e8), n5 = t3[s3];
    if (n5) return n5;
    i2 = kr("#" + s3);
  } else i2 = e8;
  if (er(i2)) {
    const { player: e9, playerId: s3 } = i2;
    if (e9 || t3[s3]) return e9 || t3[s3];
  }
}, dh.getAllPlayers = () => Object.keys(Ku.players).map((e8) => Ku.players[e8]).filter(Boolean), dh.players = Ku.players, dh.getComponent = Ea.getComponent, dh.registerComponent = (e8, t3) => (yo.isTech(t3) && gn.warn(`The ${e8} tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)`), Ea.registerComponent.call(Ea, e8, t3)), dh.getTech = yo.getTech, dh.registerTech = yo.registerTech, dh.use = To, Object.defineProperty(dh, "middleware", { value: {}, writeable: false, enumerable: true }), Object.defineProperty(dh.middleware, "TERMINATOR", { value: vo, writeable: false, enumerable: true }), dh.browser = Yn, dh.obj = kn, dh.mergeOptions = lh(9, "videojs.mergeOptions", "videojs.obj.merge", En), dh.defineLazyProperty = lh(9, "videojs.defineLazyProperty", "videojs.obj.defineLazyProperty", Cn), dh.bind = lh(9, "videojs.bind", "native Function.prototype.bind", ea), dh.registerPlugin = ah.registerPlugin, dh.deregisterPlugin = ah.deregisterPlugin, dh.plugin = (e8, t3) => (gn.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), ah.registerPlugin(e8, t3)), dh.getPlugins = ah.getPlugins, dh.getPlugin = ah.getPlugin, dh.getPluginVersion = ah.getPluginVersion, dh.addLanguage = function(e8, t3) {
  return e8 = ("" + e8).toLowerCase(), dh.options.languages = En(dh.options.languages, { [e8]: t3 }), dh.options.languages[e8];
}, dh.log = gn, dh.createLogger = fn, dh.time = Oa, dh.createTimeRange = lh(9, "videojs.createTimeRange", "videojs.time.createTimeRanges", Ia), dh.createTimeRanges = lh(9, "videojs.createTimeRanges", "videojs.time.createTimeRanges", Ia), dh.formatTime = lh(9, "videojs.formatTime", "videojs.time.formatTime", La), dh.setFormatTime = lh(9, "videojs.setFormatTime", "videojs.time.setFormatTime", Da), dh.resetFormatTime = lh(9, "videojs.resetFormatTime", "videojs.time.resetFormatTime", Pa), dh.parseUrl = lh(9, "videojs.parseUrl", "videojs.url.parseUrl", to), dh.isCrossOrigin = lh(9, "videojs.isCrossOrigin", "videojs.url.isCrossOrigin", no), dh.EventTarget = ra, dh.any = Qr, dh.on = Gr, dh.one = Yr, dh.off = Xr, dh.trigger = Kr, dh.xhr = Ee, dh.TextTrack = lo, dh.AudioTrack = uo, dh.VideoTrack = ho, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach((e8) => {
  dh[e8] = function() {
    return gn.warn(`videojs.${e8}() is deprecated; use videojs.dom.${e8}() instead`), Dr[e8].apply(null, arguments);
  };
}), dh.computedStyle = lh(9, "videojs.computedStyle", "videojs.dom.computedStyle", xr), dh.dom = Dr, dh.fn = sa, dh.num = ml, dh.str = Sa, dh.url = ro, dh.Error = uh;
var ch = class {
  constructor(e8) {
    let t3 = this;
    return t3.id = e8.id, t3.label = t3.id, t3.width = e8.width, t3.height = e8.height, t3.bitrate = e8.bandwidth, t3.frameRate = e8.frameRate, t3.enabled_ = e8.enabled, Object.defineProperty(t3, "enabled", { get: () => t3.enabled_(), set(e9) {
      t3.enabled_(e9);
    } }), t3;
  }
};
var ph = class extends dh.EventTarget {
  constructor() {
    super();
    let e8 = this;
    return e8.levels_ = [], e8.selectedIndex_ = -1, Object.defineProperty(e8, "selectedIndex", { get: () => e8.selectedIndex_ }), Object.defineProperty(e8, "length", { get: () => e8.levels_.length }), e8[Symbol.iterator] = () => e8.levels_.values(), e8;
  }
  addQualityLevel(e8) {
    let t3 = this.getQualityLevelById(e8.id);
    if (t3) return t3;
    const i2 = this.levels_.length;
    return t3 = new ch(e8), "" + i2 in this || Object.defineProperty(this, i2, { get() {
      return this.levels_[i2];
    } }), this.levels_.push(t3), this.trigger({ qualityLevel: t3, type: "addqualitylevel" }), t3;
  }
  removeQualityLevel(e8) {
    let t3 = null;
    for (let i2 = 0, s3 = this.length; i2 < s3; i2++) if (this[i2] === e8) {
      t3 = this.levels_.splice(i2, 1)[0], this.selectedIndex_ === i2 ? this.selectedIndex_ = -1 : this.selectedIndex_ > i2 && this.selectedIndex_--;
      break;
    }
    return t3 && this.trigger({ qualityLevel: e8, type: "removequalitylevel" }), t3;
  }
  getQualityLevelById(e8) {
    for (let t3 = 0, i2 = this.length; t3 < i2; t3++) {
      const i3 = this[t3];
      if (i3.id === e8) return i3;
    }
    return null;
  }
  dispose() {
    this.selectedIndex_ = -1, this.levels_.length = 0;
  }
};
ph.prototype.allowedEvents_ = { change: "change", addqualitylevel: "addqualitylevel", removequalitylevel: "removequalitylevel" };
for (const kg in ph.prototype.allowedEvents_) ph.prototype["on" + kg] = null;
var mh = "4.1.0";
var gh = function(e8, t3) {
  const i2 = e8.qualityLevels, s3 = new ph(), n5 = function() {
    s3.dispose(), e8.qualityLevels = i2, e8.off("dispose", n5);
  };
  return e8.on("dispose", n5), e8.qualityLevels = () => s3, e8.qualityLevels.VERSION = mh, s3;
};
var fh = function(e8) {
  return gh(this, dh.obj.merge({}, e8));
};
dh.registerPlugin("qualityLevels", fh), fh.VERSION = mh;
var yh = Fe;
var _h = (e8, t3) => t3 && t3.responseURL && e8 !== t3.responseURL ? t3.responseURL : e8;
var bh = (e8) => dh.log.debug ? dh.log.debug.bind(dh, "VHS:", `${e8} >`) : function() {
};
function vh(...e8) {
  const t3 = dh.obj || dh;
  return (t3.merge || t3.mergeOptions).apply(t3, e8);
}
function Th(...e8) {
  const t3 = dh.time || dh;
  return (t3.createTimeRanges || t3.createTimeRanges).apply(t3, e8);
}
function Sh(e8) {
  if (0 === e8.length) return "Buffered Ranges are empty";
  let t3 = "Buffered Ranges: \n";
  for (let i2 = 0; i2 < e8.length; i2++) {
    const s3 = e8.start(i2), n5 = e8.end(i2);
    t3 += `${s3} --> ${n5}. Duration (${n5 - s3})
`;
  }
  return t3;
}
var Eh = 1 / 30;
var wh = 3 * Eh;
var Ch = function(e8, t3) {
  const i2 = [];
  let s3;
  if (e8 && e8.length) for (s3 = 0; s3 < e8.length; s3++) t3(e8.start(s3), e8.end(s3)) && i2.push([e8.start(s3), e8.end(s3)]);
  return Th(i2);
};
var kh = function(e8, t3) {
  return Ch(e8, function(e9, i2) {
    return e9 - wh <= t3 && i2 + wh >= t3;
  });
};
var Ih = function(e8, t3) {
  return Ch(e8, function(e9) {
    return e9 - Eh >= t3;
  });
};
var xh = function(e8) {
  if (e8.length < 2) return Th();
  const t3 = [];
  for (let i2 = 1; i2 < e8.length; i2++) {
    const s3 = e8.end(i2 - 1), n5 = e8.start(i2);
    t3.push([s3, n5]);
  }
  return Th(t3);
};
var Ah = function(e8, t3) {
  let i2 = null, s3 = null, n5 = 0;
  const r5 = [], a5 = [];
  if (!(e8 && e8.length && t3 && t3.length)) return Th();
  let o5 = e8.length;
  for (; o5--; ) r5.push({ time: e8.start(o5), type: "start" }), r5.push({ time: e8.end(o5), type: "end" });
  for (o5 = t3.length; o5--; ) r5.push({ time: t3.start(o5), type: "start" }), r5.push({ time: t3.end(o5), type: "end" });
  for (r5.sort(function(e9, t4) {
    return e9.time - t4.time;
  }), o5 = 0; o5 < r5.length; o5++) "start" === r5[o5].type ? (n5++, 2 === n5 && (i2 = r5[o5].time)) : "end" === r5[o5].type && (n5--, 1 === n5 && (s3 = r5[o5].time)), null !== i2 && null !== s3 && (a5.push([i2, s3]), i2 = null, s3 = null);
  return Th(a5);
};
var Dh = (e8) => {
  const t3 = [];
  if (!e8 || !e8.length) return "";
  for (let i2 = 0; i2 < e8.length; i2++) t3.push(e8.start(i2) + " => " + e8.end(i2));
  return t3.join(", ");
};
var Ph = function(e8, t3, i2 = 1) {
  return ((e8.length ? e8.end(e8.length - 1) : 0) - t3) / i2;
};
var Lh = (e8) => {
  const t3 = [];
  for (let i2 = 0; i2 < e8.length; i2++) t3.push({ start: e8.start(i2), end: e8.end(i2) });
  return t3;
};
var Oh = function(e8, t3) {
  if (e8 === t3) return false;
  if (!e8 && t3 || !t3 && e8) return true;
  if (e8.length !== t3.length) return true;
  for (let i2 = 0; i2 < e8.length; i2++) if (e8.start(i2) !== t3.start(i2) || e8.end(i2) !== t3.end(i2)) return true;
  return false;
};
var Nh = function(e8) {
  if (e8 && e8.length && e8.end) return e8.end(e8.length - 1);
};
var Rh = function(e8, t3) {
  let i2 = 0;
  if (!e8 || !e8.length) return i2;
  for (let s3 = 0; s3 < e8.length; s3++) {
    const n5 = e8.start(s3), r5 = e8.end(s3);
    t3 > r5 || (i2 += t3 > n5 && t3 <= r5 ? r5 - t3 : r5 - n5);
  }
  return i2;
};
var Mh = (e8, t3) => {
  if (!t3.preload) return t3.duration;
  let i2 = 0;
  return (t3.parts || []).forEach(function(e9) {
    i2 += e9.duration;
  }), (t3.preloadHints || []).forEach(function(t4) {
    "PART" === t4.type && (i2 += e8.partTargetDuration);
  }), i2;
};
var Uh = (e8) => (e8.segments || []).reduce((e9, t3, i2) => (t3.parts ? t3.parts.forEach(function(s3, n5) {
  e9.push({ duration: s3.duration, segmentIndex: i2, partIndex: n5, part: s3, segment: t3 });
}) : e9.push({ duration: t3.duration, segmentIndex: i2, partIndex: null, segment: t3, part: null }), e9), []);
var Bh = (e8) => {
  const t3 = e8.segments && e8.segments.length && e8.segments[e8.segments.length - 1];
  return t3 && t3.parts || [];
};
var Fh = ({ preloadSegment: e8 }) => {
  if (!e8) return;
  const { parts: t3, preloadHints: i2 } = e8;
  let s3 = (i2 || []).reduce((e9, t4) => e9 + ("PART" === t4.type ? 1 : 0), 0);
  return s3 += t3 && t3.length ? t3.length : 0, s3;
};
var qh = (e8, t3) => {
  if (t3.endList) return 0;
  if (e8 && e8.suggestedPresentationDelay) return e8.suggestedPresentationDelay;
  const i2 = Bh(t3).length > 0;
  return i2 && t3.serverControl && t3.serverControl.partHoldBack ? t3.serverControl.partHoldBack : i2 && t3.partTargetDuration ? 3 * t3.partTargetDuration : t3.serverControl && t3.serverControl.holdBack ? t3.serverControl.holdBack : t3.targetDuration ? 3 * t3.targetDuration : 0;
};
var jh = function(e8, t3) {
  let i2 = 0, s3 = t3 - e8.mediaSequence, n5 = e8.segments[s3];
  if (n5) {
    if (void 0 !== n5.start) return { result: n5.start, precise: true };
    if (void 0 !== n5.end) return { result: n5.end - n5.duration, precise: true };
  }
  for (; s3--; ) {
    if (n5 = e8.segments[s3], void 0 !== n5.end) return { result: i2 + n5.end, precise: true };
    if (i2 += Mh(e8, n5), void 0 !== n5.start) return { result: i2 + n5.start, precise: true };
  }
  return { result: i2, precise: false };
};
var $h = function(e8, t3) {
  let i2, s3 = 0, n5 = t3 - e8.mediaSequence;
  for (; n5 < e8.segments.length; n5++) {
    if (i2 = e8.segments[n5], void 0 !== i2.start) return { result: i2.start - s3, precise: true };
    if (s3 += Mh(e8, i2), void 0 !== i2.end) return { result: i2.end - s3, precise: true };
  }
  return { result: -1, precise: false };
};
var Hh = function(e8, t3, i2) {
  if (void 0 === t3 && (t3 = e8.mediaSequence + e8.segments.length), t3 < e8.mediaSequence) return 0;
  const s3 = jh(e8, t3);
  if (s3.precise) return s3.result;
  const n5 = $h(e8, t3);
  return n5.precise ? n5.result : s3.result + i2;
};
var Vh = function(e8, t3, i2) {
  if (!e8) return 0;
  if ("number" != typeof i2 && (i2 = 0), void 0 === t3) {
    if (e8.totalDuration) return e8.totalDuration;
    if (!e8.endList) return _.Infinity;
  }
  return Hh(e8, t3, i2);
};
var zh = function({ defaultDuration: e8, durationList: t3, startIndex: i2, endIndex: s3 }) {
  let n5 = 0;
  if (i2 > s3 && ([i2, s3] = [s3, i2]), i2 < 0) {
    for (let t4 = i2; t4 < Math.min(0, s3); t4++) n5 += e8;
    i2 = 0;
  }
  for (let r5 = i2; r5 < s3; r5++) n5 += t3[r5].duration;
  return n5;
};
var Wh = function(e8, t3, i2, s3) {
  if (!e8 || !e8.segments) return null;
  if (e8.endList) return Vh(e8);
  if (null === t3) return null;
  t3 = t3 || 0;
  let n5 = Hh(e8, e8.mediaSequence + e8.segments.length, t3);
  return i2 && (n5 -= s3 = "number" == typeof s3 ? s3 : qh(null, e8)), Math.max(0, n5);
};
var Gh = function(e8) {
  return e8.excludeUntil && e8.excludeUntil > Date.now();
};
var Xh = function(e8) {
  return e8.excludeUntil && e8.excludeUntil === 1 / 0;
};
var Kh = function(e8) {
  const t3 = Gh(e8);
  return !e8.disabled && !t3;
};
var Yh = function(e8, t3) {
  return t3.attributes && t3.attributes[e8];
};
var Qh = function(e8, t3, i2, s3 = 0) {
  if (!Yh("BANDWIDTH", i2)) return NaN;
  return (e8 * i2.attributes.BANDWIDTH - 8 * s3) / t3;
};
var Jh = (e8, t3) => {
  if (1 === e8.playlists.length) return true;
  const i2 = t3.attributes.BANDWIDTH || Number.MAX_VALUE;
  return 0 === e8.playlists.filter((e9) => !!Kh(e9) && (e9.attributes.BANDWIDTH || 0) < i2).length;
};
var Zh = (e8, t3) => !(!e8 && !t3 || !e8 && t3 || e8 && !t3) && (e8 === t3 || (!(!e8.id || !t3.id || e8.id !== t3.id) || (!(!e8.resolvedUri || !t3.resolvedUri || e8.resolvedUri !== t3.resolvedUri) || !(!e8.uri || !t3.uri || e8.uri !== t3.uri))));
var ed = function(e8, t3) {
  const i2 = e8 && e8.mediaGroups && e8.mediaGroups.AUDIO || {};
  let s3 = false;
  for (const n5 in i2) {
    for (const e9 in i2[n5]) if (s3 = t3(i2[n5][e9]), s3) break;
    if (s3) break;
  }
  return !!s3;
};
var td = (e8) => {
  if (!e8 || !e8.playlists || !e8.playlists.length) {
    return ed(e8, (e9) => e9.playlists && e9.playlists.length || e9.uri);
  }
  for (let t3 = 0; t3 < e8.playlists.length; t3++) {
    const i2 = e8.playlists[t3], s3 = i2.attributes && i2.attributes.CODECS;
    if (s3 && s3.split(",").every((e9) => lt(e9))) continue;
    if (!ed(e8, (e9) => Zh(i2, e9))) return false;
  }
  return true;
};
var id = { liveEdgeDelay: qh, duration: Vh, seekable: function(e8, t3, i2) {
  const s3 = t3 || 0;
  let n5 = Wh(e8, t3, true, i2);
  return null === n5 ? Th() : (n5 < s3 && (n5 = s3), Th(s3, n5));
}, getMediaInfoForTime: function({ playlist: e8, currentTime: t3, startingSegmentIndex: i2, startingPartIndex: s3, startTime: n5, exactManifestTimings: r5 }) {
  let a5 = t3 - n5;
  const o5 = Uh(e8);
  let l2 = 0;
  for (let u3 = 0; u3 < o5.length; u3++) {
    const e9 = o5[u3];
    if (i2 === e9.segmentIndex && ("number" != typeof s3 || "number" != typeof e9.partIndex || s3 === e9.partIndex)) {
      l2 = u3;
      break;
    }
  }
  if (a5 < 0) {
    if (l2 > 0) for (let t4 = l2 - 1; t4 >= 0; t4--) {
      const i3 = o5[t4];
      if (a5 += i3.duration, r5) {
        if (a5 < 0) continue;
      } else if (a5 + Eh <= 0) continue;
      return { partIndex: i3.partIndex, segmentIndex: i3.segmentIndex, startTime: n5 - zh({ defaultDuration: e8.targetDuration, durationList: o5, startIndex: l2, endIndex: t4 }) };
    }
    return { partIndex: o5[0] && o5[0].partIndex || null, segmentIndex: o5[0] && o5[0].segmentIndex || 0, startTime: t3 };
  }
  if (l2 < 0) {
    for (let i3 = l2; i3 < 0; i3++) if (a5 -= e8.targetDuration, a5 < 0) return { partIndex: o5[0] && o5[0].partIndex || null, segmentIndex: o5[0] && o5[0].segmentIndex || 0, startTime: t3 };
    l2 = 0;
  }
  for (let u3 = l2; u3 < o5.length; u3++) {
    const t4 = o5[u3];
    a5 -= t4.duration;
    const i3 = t4.duration > Eh;
    if (!(0 === a5) && !(i3 && a5 + Eh >= 0) || u3 === o5.length - 1) {
      if (r5) {
        if (a5 > 0) continue;
      } else if (a5 - Eh >= 0) continue;
      return { partIndex: t4.partIndex, segmentIndex: t4.segmentIndex, startTime: n5 + zh({ defaultDuration: e8.targetDuration, durationList: o5, startIndex: l2, endIndex: u3 }) };
    }
  }
  return { segmentIndex: o5[o5.length - 1].segmentIndex, partIndex: o5[o5.length - 1].partIndex, startTime: t3 };
}, isEnabled: Kh, isDisabled: function(e8) {
  return e8.disabled;
}, isExcluded: Gh, isIncompatible: Xh, playlistEnd: Wh, isAes: function(e8) {
  for (let t3 = 0; t3 < e8.segments.length; t3++) if (e8.segments[t3].key) return true;
  return false;
}, hasAttribute: Yh, estimateSegmentRequestTime: Qh, isLowestEnabledRendition: Jh, isAudioOnly: td, playlistMatch: Zh, segmentDurationWithParts: Mh };
var { log: sd } = dh;
var nd = (e8, t3) => `${e8}-${t3}`;
var rd = (e8, t3, i2) => `placeholder-uri-${e8}-${t3}-${i2}`;
var ad = ({ onwarn: e8, oninfo: t3, manifestString: i2, customTagParsers: s3 = [], customTagMappers: n5 = [], llhls: r5 }) => {
  const a5 = new Ze();
  e8 && a5.on("warn", e8), t3 && a5.on("info", t3), s3.forEach((e9) => a5.addParser(e9)), n5.forEach((e9) => a5.addTagMapper(e9)), a5.push(i2), a5.end();
  const o5 = a5.manifest;
  if (r5 || (["preloadSegment", "skip", "serverControl", "renditionReports", "partInf", "partTargetDuration"].forEach(function(e9) {
    o5.hasOwnProperty(e9) && delete o5[e9];
  }), o5.segments && o5.segments.forEach(function(e9) {
    ["parts", "preloadHints"].forEach(function(t4) {
      e9.hasOwnProperty(t4) && delete e9[t4];
    });
  })), !o5.targetDuration) {
    let t4 = 10;
    o5.segments && o5.segments.length && (t4 = o5.segments.reduce((e9, t5) => Math.max(e9, t5.duration), 0)), e8 && e8({ message: `manifest has no targetDuration defaulting to ${t4}` }), o5.targetDuration = t4;
  }
  const l2 = Bh(o5);
  if (l2.length && !o5.partTargetDuration) {
    const t4 = l2.reduce((e9, t5) => Math.max(e9, t5.duration), 0);
    e8 && (e8({ message: `manifest has no partTargetDuration defaulting to ${t4}` }), sd.error("LL-HLS manifest has parts but lacks required #EXT-X-PART-INF:PART-TARGET value. See https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-09#section-4.4.3.7. Playback is not guaranteed.")), o5.partTargetDuration = t4;
  }
  return o5;
};
var od = (e8, t3) => {
  e8.mediaGroups && ["AUDIO", "SUBTITLES"].forEach((i2) => {
    if (e8.mediaGroups[i2]) for (const s3 in e8.mediaGroups[i2]) for (const n5 in e8.mediaGroups[i2][s3]) {
      const r5 = e8.mediaGroups[i2][s3][n5];
      t3(r5, i2, s3, n5);
    }
  });
};
var ld = ({ playlist: e8, uri: t3, id: i2 }) => {
  e8.id = i2, e8.playlistErrors_ = 0, t3 && (e8.uri = t3), e8.attributes = e8.attributes || {};
};
var ud = (e8) => {
  let t3 = e8.playlists.length;
  for (; t3--; ) {
    const i2 = e8.playlists[t3];
    ld({ playlist: i2, id: nd(t3, i2.uri) }), i2.resolvedUri = yh(e8.uri, i2.uri), e8.playlists[i2.id] = i2, e8.playlists[i2.uri] = i2, i2.attributes.BANDWIDTH || sd.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.");
  }
};
var hd = (e8) => {
  od(e8, (t3) => {
    t3.uri && (t3.resolvedUri = yh(e8.uri, t3.uri));
  });
};
var dd = (e8, t3) => {
  const i2 = nd(0, t3), s3 = { mediaGroups: { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} }, uri: _.location.href, resolvedUri: _.location.href, playlists: [{ uri: t3, id: i2, resolvedUri: t3, attributes: {} }] };
  return s3.playlists[i2] = s3.playlists[0], s3.playlists[t3] = s3.playlists[0], s3;
};
var cd = (e8, t3, i2 = rd) => {
  e8.uri = t3;
  for (let n5 = 0; n5 < e8.playlists.length; n5++) if (!e8.playlists[n5].uri) {
    const t4 = `placeholder-uri-${n5}`;
    e8.playlists[n5].uri = t4;
  }
  const s3 = td(e8);
  od(e8, (t4, n5, r5, a5) => {
    if (!t4.playlists || !t4.playlists.length) {
      if (s3 && "AUDIO" === n5 && !t4.uri) for (let t5 = 0; t5 < e8.playlists.length; t5++) {
        const i3 = e8.playlists[t5];
        if (i3.attributes && i3.attributes.AUDIO && i3.attributes.AUDIO === r5) return;
      }
      t4.playlists = [Ue({}, t4)];
    }
    t4.playlists.forEach(function(t5, s4) {
      const o5 = i2(n5, r5, a5, t5), l2 = nd(s4, o5);
      t5.uri ? t5.resolvedUri = t5.resolvedUri || yh(e8.uri, t5.uri) : (t5.uri = 0 === s4 ? o5 : l2, t5.resolvedUri = t5.uri), t5.id = t5.id || l2, t5.attributes = t5.attributes || {}, e8.playlists[t5.id] = t5, e8.playlists[t5.uri] = t5;
    });
  }), ud(e8), hd(e8);
};
var pd = class {
  constructor() {
    this.offset_ = null, this.pendingDateRanges_ = /* @__PURE__ */ new Map(), this.processedDateRanges_ = /* @__PURE__ */ new Map();
  }
  setOffset(e8 = []) {
    if (null !== this.offset_) return;
    if (!e8.length) return;
    const [t3] = e8;
    void 0 !== t3.programDateTime && (this.offset_ = t3.programDateTime / 1e3);
  }
  setPendingDateRanges(e8 = []) {
    if (!e8.length) return;
    const [t3] = e8, i2 = t3.startDate.getTime();
    this.trimProcessedDateRanges_(i2), this.pendingDateRanges_ = e8.reduce((e9, t4) => (e9.set(t4.id, t4), e9), /* @__PURE__ */ new Map());
  }
  processDateRange(e8) {
    this.pendingDateRanges_.delete(e8.id), this.processedDateRanges_.set(e8.id, e8);
  }
  getDateRangesToProcess() {
    if (null === this.offset_) return [];
    const e8 = {}, t3 = [];
    this.pendingDateRanges_.forEach((i2, s3) => {
      if (!this.processedDateRanges_.has(s3) && (i2.startTime = i2.startDate.getTime() / 1e3 - this.offset_, i2.processDateRange = () => this.processDateRange(i2), t3.push(i2), i2.class)) if (e8[i2.class]) {
        const t4 = e8[i2.class].push(i2);
        i2.classListIndex = t4 - 1;
      } else e8[i2.class] = [i2], i2.classListIndex = 0;
    });
    for (const i2 of t3) {
      const t4 = e8[i2.class] || [];
      i2.endDate ? i2.endTime = i2.endDate.getTime() / 1e3 - this.offset_ : i2.endOnNext && t4[i2.classListIndex + 1] ? i2.endTime = t4[i2.classListIndex + 1].startTime : i2.duration ? i2.endTime = i2.startTime + i2.duration : i2.plannedDuration ? i2.endTime = i2.startTime + i2.plannedDuration : i2.endTime = i2.startTime;
    }
    return t3;
  }
  trimProcessedDateRanges_(e8) {
    new Map(this.processedDateRanges_).forEach((t3, i2) => {
      t3.startDate.getTime() < e8 && this.processedDateRanges_.delete(i2);
    });
  }
};
var md = 22;
var gd = ({ requestType: e8, request: t3, error: i2, parseFailure: s3 }) => {
  const n5 = t3.status < 200 || t3.status > 299, r5 = t3.status >= 400 && t3.status <= 499, a5 = { uri: t3.uri, requestType: e8 }, o5 = n5 && !r5 || s3;
  if (i2 && r5) a5.error = Ue({}, i2), a5.errorType = dh.Error.NetworkRequestFailed;
  else if (t3.aborted) a5.errorType = dh.Error.NetworkRequestAborted;
  else if (t3.timedout) a5.erroType = dh.Error.NetworkRequestTimeout;
  else if (o5) {
    const e9 = s3 ? dh.Error.NetworkBodyParserFailed : dh.Error.NetworkBadStatus;
    a5.errorType = e9, a5.status = t3.status, a5.headers = t3.headers;
  }
  return a5;
};
var { EventTarget: fd } = dh;
var yd = (e8, t3) => {
  if (t3.endList || !t3.serverControl) return e8;
  const i2 = {};
  if (t3.serverControl.canBlockReload) {
    const { preloadSegment: e9 } = t3;
    let s3 = t3.mediaSequence + t3.segments.length;
    if (e9) {
      const n5 = e9.parts || [], r5 = Fh(t3) - 1;
      r5 > -1 && r5 !== n5.length - 1 && (i2._HLS_part = r5), (r5 > -1 || n5.length) && s3--;
    }
    i2._HLS_msn = s3;
  }
  if (t3.serverControl && t3.serverControl.canSkipUntil && (i2._HLS_skip = t3.serverControl.canSkipDateranges ? "v2" : "YES"), Object.keys(i2).length) {
    const t4 = new _.URL(e8);
    ["_HLS_skip", "_HLS_msn", "_HLS_part"].forEach(function(e9) {
      i2.hasOwnProperty(e9) && t4.searchParams.set(e9, i2[e9]);
    }), e8 = t4.toString();
  }
  return e8;
};
var _d = (e8, t3) => {
  if (!e8) return t3;
  const i2 = vh(e8, t3);
  if (e8.preloadHints && !t3.preloadHints && delete i2.preloadHints, e8.parts && !t3.parts) delete i2.parts;
  else if (e8.parts && t3.parts) for (let s3 = 0; s3 < t3.parts.length; s3++) e8.parts && e8.parts[s3] && (i2.parts[s3] = vh(e8.parts[s3], t3.parts[s3]));
  return !e8.skipped && t3.skipped && (i2.skipped = false), e8.preload && !t3.preload && (i2.preload = false), i2;
};
var bd = (e8, t3, i2) => {
  const s3 = e8.slice(), n5 = t3.slice();
  i2 = i2 || 0;
  const r5 = [];
  let a5;
  for (let o5 = 0; o5 < n5.length; o5++) {
    const e9 = s3[o5 + i2], t4 = n5[o5];
    e9 ? (a5 = e9.map || a5, r5.push(_d(e9, t4))) : (a5 && !t4.map && (t4.map = a5), r5.push(t4));
  }
  return r5;
};
var vd = (e8, t3) => {
  !e8.resolvedUri && e8.uri && (e8.resolvedUri = yh(t3, e8.uri)), e8.key && !e8.key.resolvedUri && (e8.key.resolvedUri = yh(t3, e8.key.uri)), e8.map && !e8.map.resolvedUri && (e8.map.resolvedUri = yh(t3, e8.map.uri)), e8.map && e8.map.key && !e8.map.key.resolvedUri && (e8.map.key.resolvedUri = yh(t3, e8.map.key.uri)), e8.parts && e8.parts.length && e8.parts.forEach((e9) => {
    e9.resolvedUri || (e9.resolvedUri = yh(t3, e9.uri));
  }), e8.preloadHints && e8.preloadHints.length && e8.preloadHints.forEach((e9) => {
    e9.resolvedUri || (e9.resolvedUri = yh(t3, e9.uri));
  });
};
var Td = function(e8) {
  const t3 = e8.segments || [], i2 = e8.preloadSegment;
  if (i2 && i2.parts && i2.parts.length) {
    if (i2.preloadHints) {
      for (let e9 = 0; e9 < i2.preloadHints.length; e9++) if ("MAP" === i2.preloadHints[e9].type) return t3;
    }
    i2.duration = e8.targetDuration, i2.preload = true, t3.push(i2);
  }
  return t3;
};
var Sd = (e8, t3) => e8 === t3 || e8.segments && t3.segments && e8.segments.length === t3.segments.length && e8.endList === t3.endList && e8.mediaSequence === t3.mediaSequence && e8.preloadSegment === t3.preloadSegment;
var Ed = (e8, t3, i2 = Sd) => {
  const s3 = vh(e8, {}), n5 = s3.playlists[t3.id];
  if (!n5) return null;
  if (i2(n5, t3)) return null;
  t3.segments = Td(t3);
  const r5 = vh(n5, t3);
  if (r5.preloadSegment && !t3.preloadSegment && delete r5.preloadSegment, n5.segments) {
    if (t3.skip) {
      t3.segments = t3.segments || [];
      for (let e9 = 0; e9 < t3.skip.skippedSegments; e9++) t3.segments.unshift({ skipped: true });
    }
    r5.segments = bd(n5.segments, t3.segments, t3.mediaSequence - n5.mediaSequence);
  }
  r5.segments.forEach((e9) => {
    vd(e9, r5.resolvedUri);
  });
  for (let a5 = 0; a5 < s3.playlists.length; a5++) s3.playlists[a5].id === t3.id && (s3.playlists[a5] = r5);
  return s3.playlists[t3.id] = r5, s3.playlists[t3.uri] = r5, od(e8, (e9, i3, s4, n6) => {
    if (e9.playlists) for (let a5 = 0; a5 < e9.playlists.length; a5++) t3.id === e9.playlists[a5].id && (e9.playlists[a5] = r5);
  }), s3;
};
var wd = (e8, t3) => {
  const i2 = e8.segments || [], s3 = i2[i2.length - 1], n5 = s3 && s3.parts && s3.parts[s3.parts.length - 1], r5 = n5 && n5.duration || s3 && s3.duration;
  return t3 && r5 ? 1e3 * r5 : 500 * (e8.partTargetDuration || e8.targetDuration || 10);
};
var Cd = (e8, t3, i2) => {
  if (!e8) return;
  const s3 = [];
  return e8.forEach((e9) => {
    if (!e9.attributes) return;
    const { BANDWIDTH: t4, RESOLUTION: i3, CODECS: n5 } = e9.attributes;
    s3.push({ id: e9.id, bandwidth: t4, resolution: i3, codecs: n5 });
  }), { type: t3, isLive: i2, renditions: s3 };
};
var kd = class extends fd {
  constructor(e8, t3, i2 = {}) {
    if (super(), !e8) throw new Error("A non-empty playlist URL or object is required");
    this.logger_ = bh("PlaylistLoader");
    const { withCredentials: s3 = false } = i2;
    this.src = e8, this.vhs_ = t3, this.withCredentials = s3, this.addDateRangesToTextTrack_ = i2.addDateRangesToTextTrack;
    const n5 = t3.options_;
    this.customTagParsers = n5 && n5.customTagParsers || [], this.customTagMappers = n5 && n5.customTagMappers || [], this.llhls = n5 && n5.llhls, this.dateRangesStorage_ = new pd(), this.state = "HAVE_NOTHING", this.handleMediaupdatetimeout_ = this.handleMediaupdatetimeout_.bind(this), this.on("mediaupdatetimeout", this.handleMediaupdatetimeout_), this.on("loadedplaylist", this.handleLoadedPlaylist_.bind(this));
  }
  handleLoadedPlaylist_() {
    const e8 = this.media();
    if (!e8) return;
    this.dateRangesStorage_.setOffset(e8.segments), this.dateRangesStorage_.setPendingDateRanges(e8.dateRanges);
    const t3 = this.dateRangesStorage_.getDateRangesToProcess();
    t3.length && this.addDateRangesToTextTrack_ && this.addDateRangesToTextTrack_(t3);
  }
  handleMediaupdatetimeout_() {
    if ("HAVE_METADATA" !== this.state) return;
    const e8 = this.media();
    let t3 = yh(this.main.uri, e8.uri);
    this.llhls && (t3 = yd(t3, e8)), this.state = "HAVE_CURRENT_METADATA", this.request = this.vhs_.xhr({ uri: t3, withCredentials: this.withCredentials, requestType: "hls-playlist" }, (e9, t4) => {
      if (this.request) return e9 ? this.playlistRequestError(this.request, this.media(), "HAVE_METADATA") : void this.haveMetadata({ playlistString: this.request.responseText, url: this.media().uri, id: this.media().id });
    });
  }
  playlistRequestError(e8, t3, i2) {
    const { uri: s3, id: n5 } = t3;
    this.request = null, i2 && (this.state = i2), this.error = { playlist: this.main.playlists[n5], status: e8.status, message: `HLS playlist request error at URL: ${s3}.`, responseText: e8.responseText, code: e8.status >= 500 ? 4 : 2, metadata: gd({ requestType: e8.requestType, request: e8, error: e8.error }) }, this.trigger("error");
  }
  parseManifest_({ url: e8, manifestString: t3 }) {
    try {
      return ad({ onwarn: ({ message: t4 }) => this.logger_(`m3u8-parser warn for ${e8}: ${t4}`), oninfo: ({ message: t4 }) => this.logger_(`m3u8-parser info for ${e8}: ${t4}`), manifestString: t3, customTagParsers: this.customTagParsers, customTagMappers: this.customTagMappers, llhls: this.llhls });
    } catch (i2) {
      this.error = i2, this.error.metadata = { errorType: dh.Error.StreamingHlsPlaylistParserError, error: i2 };
    }
  }
  haveMetadata({ playlistString: e8, playlistObject: t3, url: i2, id: s3 }) {
    this.request = null, this.state = "HAVE_METADATA";
    const n5 = { playlistInfo: { type: "media", uri: i2 } };
    this.trigger({ type: "playlistparsestart", metadata: n5 });
    const r5 = t3 || this.parseManifest_({ url: i2, manifestString: e8 });
    r5.lastRequest = Date.now(), ld({ playlist: r5, uri: i2, id: s3 });
    const a5 = Ed(this.main, r5);
    this.targetDuration = r5.partTargetDuration || r5.targetDuration, this.pendingMedia_ = null, a5 ? (this.main = a5, this.media_ = this.main.playlists[s3]) : this.trigger("playlistunchanged"), this.updateMediaUpdateTimeout_(wd(this.media(), !!a5)), n5.parsedPlaylist = Cd(this.main.playlists, n5.playlistInfo.type, !this.media_.endList), this.trigger({ type: "playlistparsecomplete", metadata: n5 }), this.trigger("loadedplaylist");
  }
  dispose() {
    this.trigger("dispose"), this.stopRequest(), _.clearTimeout(this.mediaUpdateTimeout), _.clearTimeout(this.finalRenditionTimeout), this.dateRangesStorage_ = new pd(), this.off();
  }
  stopRequest() {
    if (this.request) {
      const e8 = this.request;
      this.request = null, e8.onreadystatechange = null, e8.abort();
    }
  }
  media(e8, t3) {
    if (!e8) return this.media_;
    if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
    if ("string" == typeof e8) {
      if (!this.main.playlists[e8]) throw new Error("Unknown playlist URI: " + e8);
      e8 = this.main.playlists[e8];
    }
    if (_.clearTimeout(this.finalRenditionTimeout), t3) {
      const t4 = (e8.partTargetDuration || e8.targetDuration) / 2 * 1e3 || 5e3;
      return void (this.finalRenditionTimeout = _.setTimeout(this.media.bind(this, e8, false), t4));
    }
    const i2 = this.state, s3 = !this.media_ || e8.id !== this.media_.id, n5 = this.main.playlists[e8.id];
    if (n5 && n5.endList || e8.endList && e8.segments.length) return this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null), this.state = "HAVE_METADATA", this.media_ = e8, void (s3 && (this.trigger("mediachanging"), "HAVE_MAIN_MANIFEST" === i2 ? this.trigger("loadedmetadata") : this.trigger("mediachange")));
    if (this.updateMediaUpdateTimeout_(wd(e8, true)), !s3) return;
    if (this.state = "SWITCHING_MEDIA", this.request) {
      if (e8.resolvedUri === this.request.url) return;
      this.request.onreadystatechange = null, this.request.abort(), this.request = null;
    }
    this.media_ && this.trigger("mediachanging"), this.pendingMedia_ = e8;
    const r5 = { playlistInfo: { type: "media", uri: e8.uri } };
    this.trigger({ type: "playlistrequeststart", metadata: r5 }), this.request = this.vhs_.xhr({ uri: e8.resolvedUri, withCredentials: this.withCredentials, requestType: "hls-playlist" }, (t4, s4) => {
      if (this.request) {
        if (e8.lastRequest = Date.now(), e8.resolvedUri = _h(e8.resolvedUri, s4), t4) return this.playlistRequestError(this.request, e8, i2);
        this.trigger({ type: "playlistrequestcomplete", metadata: r5 }), this.haveMetadata({ playlistString: s4.responseText, url: e8.uri, id: e8.id }), "HAVE_MAIN_MANIFEST" === i2 ? this.trigger("loadedmetadata") : this.trigger("mediachange");
      }
    });
  }
  pause() {
    this.mediaUpdateTimeout && (_.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null), this.stopRequest(), "HAVE_NOTHING" === this.state && (this.started = false), "SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MAIN_MANIFEST" : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA");
  }
  load(e8) {
    this.mediaUpdateTimeout && (_.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null);
    const t3 = this.media();
    if (e8) {
      const e9 = t3 ? (t3.partTargetDuration || t3.targetDuration) / 2 * 1e3 : 5e3;
      this.mediaUpdateTimeout = _.setTimeout(() => {
        this.mediaUpdateTimeout = null, this.load();
      }, e9);
    } else this.started ? t3 && !t3.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist") : this.start();
  }
  updateMediaUpdateTimeout_(e8) {
    this.mediaUpdateTimeout && (_.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null), this.media() && !this.media().endList && (this.mediaUpdateTimeout = _.setTimeout(() => {
      this.mediaUpdateTimeout = null, this.trigger("mediaupdatetimeout"), this.updateMediaUpdateTimeout_(e8);
    }, e8));
  }
  start() {
    if (this.started = true, "object" == typeof this.src) return this.src.uri || (this.src.uri = _.location.href), this.src.resolvedUri = this.src.uri, void setTimeout(() => {
      this.setupInitialPlaylist(this.src);
    }, 0);
    const e8 = { playlistInfo: { type: "multivariant", uri: this.src } };
    this.trigger({ type: "playlistrequeststart", metadata: e8 }), this.request = this.vhs_.xhr({ uri: this.src, withCredentials: this.withCredentials, requestType: "hls-playlist" }, (t3, i2) => {
      if (!this.request) return;
      if (this.request = null, t3) return this.error = { status: i2.status, message: `HLS playlist request error at URL: ${this.src}.`, responseText: i2.responseText, code: 2, metadata: gd({ requestType: i2.requestType, request: i2, error: t3 }) }, "HAVE_NOTHING" === this.state && (this.started = false), this.trigger("error");
      this.trigger({ type: "playlistrequestcomplete", metadata: e8 }), this.src = _h(this.src, i2), this.trigger({ type: "playlistparsestart", metadata: e8 });
      const s3 = this.parseManifest_({ manifestString: i2.responseText, url: this.src });
      e8.parsedPlaylist = Cd(s3.playlists, e8.playlistInfo.type, false), this.trigger({ type: "playlistparsecomplete", metadata: e8 }), this.setupInitialPlaylist(s3);
    });
  }
  srcUri() {
    return "string" == typeof this.src ? this.src : this.src.uri;
  }
  setupInitialPlaylist(e8) {
    if (this.state = "HAVE_MAIN_MANIFEST", e8.playlists) return this.main = e8, cd(this.main, this.srcUri()), e8.playlists.forEach((e9) => {
      e9.segments = Td(e9), e9.segments.forEach((t4) => {
        vd(t4, e9.resolvedUri);
      });
    }), this.trigger("loadedplaylist"), void (this.request || this.media(this.main.playlists[0]));
    const t3 = this.srcUri() || _.location.href;
    this.main = dd(e8, t3), this.haveMetadata({ playlistObject: e8, url: t3, id: this.main.playlists[0].id }), this.trigger("loadedmetadata");
  }
  updateOrDeleteClone(e8, t3) {
    const i2 = this.main, s3 = e8.ID;
    let n5 = i2.playlists.length;
    for (; n5--; ) {
      const r5 = i2.playlists[n5];
      if (r5.attributes["PATHWAY-ID"] === s3) {
        const a5 = r5.resolvedUri, o5 = r5.id;
        if (t3) {
          const t4 = this.createCloneURI_(r5.resolvedUri, e8), a6 = nd(s3, t4), o6 = this.createCloneAttributes_(s3, r5.attributes), l2 = this.createClonePlaylist_(r5, a6, e8, o6);
          i2.playlists[n5] = l2, i2.playlists[a6] = l2, i2.playlists[t4] = l2;
        } else i2.playlists.splice(n5, 1);
        delete i2.playlists[o5], delete i2.playlists[a5];
      }
    }
    this.updateOrDeleteCloneMedia(e8, t3);
  }
  updateOrDeleteCloneMedia(e8, t3) {
    const i2 = this.main, s3 = e8.ID;
    ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((e9) => {
      if (i2.mediaGroups[e9] && i2.mediaGroups[e9][s3]) {
        for (const t4 in i2.mediaGroups[e9]) if (t4 === s3) {
          for (const s4 in i2.mediaGroups[e9][t4]) {
            i2.mediaGroups[e9][t4][s4].playlists.forEach((e10, t5) => {
              const s5 = i2.playlists[e10.id], n5 = s5.id, r5 = s5.resolvedUri;
              delete i2.playlists[n5], delete i2.playlists[r5];
            });
          }
          delete i2.mediaGroups[e9][t4];
        }
      }
    }), t3 && this.createClonedMediaGroups_(e8);
  }
  addClonePathway(e8, t3 = {}) {
    const i2 = this.main, s3 = i2.playlists.length, n5 = this.createCloneURI_(t3.resolvedUri, e8), r5 = nd(e8.ID, n5), a5 = this.createCloneAttributes_(e8.ID, t3.attributes), o5 = this.createClonePlaylist_(t3, r5, e8, a5);
    i2.playlists[s3] = o5, i2.playlists[r5] = o5, i2.playlists[n5] = o5, this.createClonedMediaGroups_(e8);
  }
  createClonedMediaGroups_(e8) {
    const t3 = e8.ID, i2 = e8["BASE-ID"], s3 = this.main;
    ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((n5) => {
      if (s3.mediaGroups[n5] && !s3.mediaGroups[n5][t3]) {
        for (const r5 in s3.mediaGroups[n5]) if (r5 === i2) {
          s3.mediaGroups[n5][t3] = {};
          for (const i3 in s3.mediaGroups[n5][r5]) {
            const a5 = s3.mediaGroups[n5][r5][i3];
            s3.mediaGroups[n5][t3][i3] = Ue({}, a5);
            const o5 = s3.mediaGroups[n5][t3][i3], l2 = this.createCloneURI_(a5.resolvedUri, e8);
            o5.resolvedUri = l2, o5.uri = l2, o5.playlists = [], a5.playlists.forEach((r6, a6) => {
              const l3 = s3.playlists[r6.id], u3 = rd(n5, t3, i3), h2 = nd(t3, u3);
              if (l3 && !s3.playlists[h2]) {
                const t4 = this.createClonePlaylist_(l3, h2, e8), i4 = t4.resolvedUri;
                s3.playlists[h2] = t4, s3.playlists[i4] = t4;
              }
              o5.playlists[a6] = this.createClonePlaylist_(r6, h2, e8);
            });
          }
        }
      }
    });
  }
  createClonePlaylist_(e8, t3, i2, s3) {
    const n5 = this.createCloneURI_(e8.resolvedUri, i2), r5 = { resolvedUri: n5, uri: n5, id: t3 };
    return e8.segments && (r5.segments = []), s3 && (r5.attributes = s3), vh(e8, r5);
  }
  createCloneURI_(e8, t3) {
    const i2 = new URL(e8);
    i2.hostname = t3["URI-REPLACEMENT"].HOST;
    const s3 = t3["URI-REPLACEMENT"].PARAMS;
    for (const n5 of Object.keys(s3)) i2.searchParams.set(n5, s3[n5]);
    return i2.href;
  }
  createCloneAttributes_(e8, t3) {
    const i2 = { "PATHWAY-ID": e8 };
    return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((s3) => {
      t3[s3] && (i2[s3] = e8);
    }), i2;
  }
  getKeyIdSet(e8) {
    if (e8.contentProtection) {
      const t3 = /* @__PURE__ */ new Set();
      for (const i2 in e8.contentProtection) {
        const s3 = e8.contentProtection[i2].attributes.keyId;
        s3 && t3.add(s3.toLowerCase());
      }
      return t3;
    }
  }
};
var Id = function(e8, t3, i2, s3) {
  const n5 = "arraybuffer" === e8.responseType ? e8.response : e8.responseText;
  !t3 && n5 && (e8.responseTime = Date.now(), e8.roundTripTime = e8.responseTime - e8.requestTime, e8.bytesReceived = n5.byteLength || n5.length, e8.bandwidth || (e8.bandwidth = Math.floor(e8.bytesReceived / e8.roundTripTime * 8 * 1e3))), i2.headers && (e8.responseHeaders = i2.headers), t3 && "ETIMEDOUT" === t3.code && (e8.timedout = true), t3 || e8.aborted || 200 === i2.statusCode || 206 === i2.statusCode || 0 === i2.statusCode || (t3 = new Error("XHR Failed with a response of: " + (e8 && (n5 || e8.responseText)))), s3(t3, e8);
};
var xd = (e8, t3) => {
  if (!e8 || !e8.size) return;
  let i2 = t3;
  return e8.forEach((e9) => {
    i2 = e9(i2);
  }), i2;
};
var Ad = (e8, t3, i2, s3) => {
  e8 && e8.size && e8.forEach((e9) => {
    e9(t3, i2, s3);
  });
};
var Dd = function() {
  const e8 = function e9(t3, i2) {
    t3 = vh({ timeout: 45e3 }, t3);
    const s3 = e9.beforeRequest || dh.Vhs.xhr.beforeRequest, n5 = e9._requestCallbackSet || dh.Vhs.xhr._requestCallbackSet || /* @__PURE__ */ new Set(), r5 = e9._responseCallbackSet || dh.Vhs.xhr._responseCallbackSet;
    s3 && "function" == typeof s3 && (dh.log.warn("beforeRequest is deprecated, use onRequest instead."), n5.add(s3));
    const a5 = true === dh.Vhs.xhr.original ? dh.xhr : dh.Vhs.xhr, o5 = xd(n5, t3);
    n5.delete(s3);
    const l2 = a5(o5 || t3, function(e10, t4) {
      return Ad(r5, l2, e10, t4), Id(l2, e10, t4, i2);
    }), u3 = l2.abort;
    return l2.abort = function() {
      return l2.aborted = true, u3.apply(l2, arguments);
    }, l2.uri = t3.uri, l2.requestType = t3.requestType, l2.requestTime = Date.now(), l2;
  };
  return e8.original = true, e8;
};
var Pd = function(e8) {
  let t3;
  const i2 = e8.offset;
  return t3 = "bigint" == typeof e8.offset || "bigint" == typeof e8.length ? _.BigInt(e8.offset) + _.BigInt(e8.length) - _.BigInt(1) : e8.offset + e8.length - 1, "bytes=" + i2 + "-" + t3;
};
var Ld = function(e8) {
  const t3 = {};
  return e8.byterange && (t3.Range = Pd(e8.byterange)), t3;
};
var Od = function(e8, t3) {
  return e8.start(t3) + "-" + e8.end(t3);
};
var Nd = function(e8, t3) {
  const i2 = e8.toString(16);
  return "00".substring(0, 2 - i2.length) + i2 + (t3 % 2 ? " " : "");
};
var Rd = function(e8) {
  return e8 >= 32 && e8 < 126 ? String.fromCharCode(e8) : ".";
};
var Md = function(e8) {
  const t3 = {};
  return Object.keys(e8).forEach((i2) => {
    const s3 = e8[i2];
    vt(s3) ? t3[i2] = { bytes: s3.buffer, byteOffset: s3.byteOffset, byteLength: s3.byteLength } : t3[i2] = s3;
  }), t3;
};
var Ud = function(e8) {
  const t3 = e8.byterange || { length: 1 / 0, offset: 0 };
  return [t3.length, t3.offset, e8.resolvedUri].join(",");
};
var Bd = function(e8) {
  return e8.resolvedUri;
};
var Fd = (e8) => {
  const t3 = Array.prototype.slice.call(e8), i2 = 16;
  let s3, n5, r5 = "";
  for (let a5 = 0; a5 < t3.length / i2; a5++) s3 = t3.slice(a5 * i2, a5 * i2 + i2).map(Nd).join(""), n5 = t3.slice(a5 * i2, a5 * i2 + i2).map(Rd).join(""), r5 += s3 + " " + n5 + "\n";
  return r5;
};
var qd = ({ bytes: e8 }) => Fd(e8);
var jd = (e8) => {
  let t3, i2 = "";
  for (t3 = 0; t3 < e8.length; t3++) i2 += Od(e8, t3) + " ";
  return i2;
};
var $d = Object.freeze({ __proto__: null, createTransferableMessage: Md, initSegmentId: Ud, segmentKeyId: Bd, hexDump: Fd, tagDump: qd, textRanges: jd });
var Hd = 0.25;
var Vd = (e8, t3) => {
  if (!t3.dateTimeObject) return null;
  const i2 = t3.videoTimingInfo.transmuxerPrependedSeconds, s3 = e8 - (t3.videoTimingInfo.transmuxedPresentationStart + i2);
  return new Date(t3.dateTimeObject.getTime() + 1e3 * s3);
};
var zd = (e8) => e8.transmuxedPresentationEnd - e8.transmuxedPresentationStart - e8.transmuxerPrependedSeconds;
var Wd = (e8, t3) => {
  let i2;
  try {
    i2 = new Date(e8);
  } catch (o5) {
    return null;
  }
  if (!t3 || !t3.segments || 0 === t3.segments.length) return null;
  let s3 = t3.segments[0];
  if (i2 < new Date(s3.dateTimeObject)) return null;
  for (let l2 = 0; l2 < t3.segments.length - 1; l2++) {
    s3 = t3.segments[l2];
    if (i2 < new Date(t3.segments[l2 + 1].dateTimeObject)) break;
  }
  const n5 = t3.segments[t3.segments.length - 1], r5 = n5.dateTimeObject, a5 = n5.videoTimingInfo ? zd(n5.videoTimingInfo) : n5.duration + n5.duration * Hd;
  return i2 > new Date(r5.getTime() + 1e3 * a5) ? null : (i2 > new Date(r5) && (s3 = n5), { segment: s3, estimatedStart: s3.videoTimingInfo ? s3.videoTimingInfo.transmuxedPresentationStart : id.duration(t3, t3.mediaSequence + t3.segments.indexOf(s3)), type: s3.videoTimingInfo ? "accurate" : "estimate" });
};
var Gd = (e8, t3) => {
  if (!t3 || !t3.segments || 0 === t3.segments.length) return null;
  let i2, s3 = 0;
  for (let r5 = 0; r5 < t3.segments.length && (i2 = t3.segments[r5], s3 = i2.videoTimingInfo ? i2.videoTimingInfo.transmuxedPresentationEnd : s3 + i2.duration, !(e8 <= s3)); r5++) ;
  const n5 = t3.segments[t3.segments.length - 1];
  if (n5.videoTimingInfo && n5.videoTimingInfo.transmuxedPresentationEnd < e8) return null;
  if (e8 > s3) {
    if (e8 > s3 + n5.duration * Hd) return null;
    i2 = n5;
  }
  return { segment: i2, estimatedStart: i2.videoTimingInfo ? i2.videoTimingInfo.transmuxedPresentationStart : s3 - i2.duration, type: i2.videoTimingInfo ? "accurate" : "estimate" };
};
var Xd = (e8, t3) => {
  let i2, s3;
  try {
    i2 = new Date(e8), s3 = new Date(t3);
  } catch (r5) {
  }
  const n5 = i2.getTime();
  return (s3.getTime() - n5) / 1e3;
};
var Kd = (e8) => {
  if (!e8.segments || 0 === e8.segments.length) return false;
  for (let t3 = 0; t3 < e8.segments.length; t3++) {
    if (!e8.segments[t3].dateTimeObject) return false;
  }
  return true;
};
var Yd = ({ playlist: e8, time: t3, callback: i2 }) => {
  if (!i2) throw new Error("getProgramTime: callback must be provided");
  if (!e8 || void 0 === t3) return i2({ message: "getProgramTime: playlist and time must be provided" });
  const s3 = Gd(t3, e8);
  if (!s3) return i2({ message: "valid programTime was not found" });
  if ("estimate" === s3.type) return i2({ message: "Accurate programTime could not be determined. Please seek to e.seekTime and try again", seekTime: s3.estimatedStart });
  const n5 = { mediaSeconds: t3 }, r5 = Vd(t3, s3.segment);
  return r5 && (n5.programDateTime = r5.toISOString()), i2(null, n5);
};
var Qd = ({ programTime: e8, playlist: t3, retryCount: i2 = 2, seekTo: s3, pauseAfterSeek: n5 = true, tech: r5, callback: a5 }) => {
  if (!a5) throw new Error("seekToProgramTime: callback must be provided");
  if (void 0 === e8 || !t3 || !s3) return a5({ message: "seekToProgramTime: programTime, seekTo and playlist must be provided" });
  if (!t3.endList && !r5.hasStarted_) return a5({ message: "player must be playing a live stream to start buffering" });
  if (!Kd(t3)) return a5({ message: "programDateTime tags must be provided in the manifest " + t3.resolvedUri });
  const o5 = Wd(e8, t3);
  if (!o5) return a5({ message: `${e8} was not found in the stream` });
  const l2 = o5.segment, u3 = Xd(l2.dateTimeObject, e8);
  if ("estimate" === o5.type) return 0 === i2 ? a5({ message: `${e8} is not buffered yet. Try again` }) : (s3(o5.estimatedStart + u3), void r5.one("seeked", () => {
    Qd({ programTime: e8, playlist: t3, retryCount: i2 - 1, seekTo: s3, pauseAfterSeek: n5, tech: r5, callback: a5 });
  }));
  const h2 = l2.start + u3, d3 = () => a5(null, r5.currentTime());
  r5.one("seeked", d3), n5 && r5.pause(), s3(h2);
};
var Jd = (e8, t3) => {
  if (4 === e8.readyState) return t3();
};
var Zd = (e8, t3, i2, s3) => {
  let n5, r5 = [], a5 = false;
  const o5 = function(e9, t4, s4, n6) {
    return t4.abort(), a5 = true, i2(e9, t4, s4, n6);
  }, l2 = function(e9, t4) {
    if (a5) return;
    if (e9) return e9.metadata = gd({ requestType: s3, request: t4, error: e9 }), o5(e9, t4, "", r5);
    const i3 = t4.responseText.substring(r5 && r5.byteLength || 0, t4.responseText.length);
    if (r5 = Dt(r5, At(i3, true)), n5 = n5 || ks(r5), r5.length < 10 || n5 && r5.length < n5 + 2) return Jd(t4, () => o5(e9, t4, "", r5));
    const l3 = Qs(r5);
    return "ts" === l3 && r5.length < 188 || !l3 && r5.length < 376 ? Jd(t4, () => o5(e9, t4, "", r5)) : o5(null, t4, l3, r5);
  }, u3 = { uri: e8, beforeSend(e9) {
    e9.overrideMimeType("text/plain; charset=x-user-defined"), e9.addEventListener("progress", function({ total: t4, loaded: i3 }) {
      return Id(e9, null, { statusCode: e9.status }, l2);
    });
  } }, h2 = t3(u3, function(e9, t4) {
    return Id(h2, e9, t4, l2);
  });
  return h2;
};
var { EventTarget: ec } = dh;
var tc = function(e8, t3) {
  if (!Sd(e8, t3)) return false;
  if (e8.sidx && t3.sidx && (e8.sidx.offset !== t3.sidx.offset || e8.sidx.length !== t3.sidx.length)) return false;
  if (!e8.sidx && t3.sidx || e8.sidx && !t3.sidx) return false;
  if (e8.segments && !t3.segments || !e8.segments && t3.segments) return false;
  if (!e8.segments && !t3.segments) return true;
  for (let i2 = 0; i2 < e8.segments.length; i2++) {
    const s3 = e8.segments[i2], n5 = t3.segments[i2];
    if (s3.uri !== n5.uri) return false;
    if (!s3.byterange && !n5.byterange) continue;
    const r5 = s3.byterange, a5 = n5.byterange;
    if (r5 && !a5 || !r5 && a5) return false;
    if (r5.offset !== a5.offset || r5.length !== a5.length) return false;
  }
  return true;
};
var ic = (e8, t3, i2, s3) => `placeholder-uri-${e8}-${t3}-${s3.attributes.NAME || i2}`;
var sc = ({ mainXml: e8, srcUrl: t3, clientOffset: i2, sidxMapping: s3, previousManifest: n5 }) => {
  const r5 = gs(e8, { manifestUri: t3, clientOffset: i2, sidxMapping: s3, previousManifest: n5 });
  return cd(r5, t3, ic), r5;
};
var nc = (e8, t3) => {
  od(e8, (i2, s3, n5, r5) => {
    t3.mediaGroups[s3][n5] && r5 in t3.mediaGroups[s3][n5] || delete e8.mediaGroups[s3][n5][r5];
  });
};
var rc = (e8, t3, i2) => {
  let s3 = true, n5 = vh(e8, { duration: t3.duration, minimumUpdatePeriod: t3.minimumUpdatePeriod, timelineStarts: t3.timelineStarts });
  for (let r5 = 0; r5 < t3.playlists.length; r5++) {
    const e9 = t3.playlists[r5];
    if (e9.sidx) {
      const t4 = Ti(e9.sidx);
      i2 && i2[t4] && i2[t4].sidx && ci(e9, i2[t4].sidx, e9.sidx.resolvedUri);
    }
    const a5 = Ed(n5, e9, tc);
    a5 && (n5 = a5, s3 = false);
  }
  return od(t3, (e9, t4, i3, r5) => {
    if (e9.playlists && e9.playlists.length) {
      const a5 = e9.playlists[0].id, o5 = Ed(n5, e9.playlists[0], tc);
      o5 && (n5 = o5, r5 in n5.mediaGroups[t4][i3] || (n5.mediaGroups[t4][i3][r5] = e9), n5.mediaGroups[t4][i3][r5].playlists[0] = n5.playlists[a5], s3 = false);
    }
  }), nc(n5, t3), t3.minimumUpdatePeriod !== e8.minimumUpdatePeriod && (s3 = false), s3 ? null : n5;
};
var ac = (e8, t3) => (Boolean(!e8.map && !t3.map) || Boolean(e8.map && t3.map && e8.map.byterange.offset === t3.map.byterange.offset && e8.map.byterange.length === t3.map.byterange.length)) && e8.uri === t3.uri && e8.byterange.offset === t3.byterange.offset && e8.byterange.length === t3.byterange.length;
var oc = (e8, t3) => {
  const i2 = {};
  for (const s3 in e8) {
    const n5 = e8[s3].sidx;
    if (n5) {
      const e9 = Ti(n5);
      if (!t3[e9]) break;
      const s4 = t3[e9].sidxInfo;
      ac(s4, n5) && (i2[e9] = t3[e9]);
    }
  }
  return i2;
};
var lc = (e8, t3) => {
  let i2 = oc(e8.playlists, t3);
  return od(e8, (e9, s3, n5, r5) => {
    if (e9.playlists && e9.playlists.length) {
      const s4 = e9.playlists;
      i2 = vh(i2, oc(s4, t3));
    }
  }), i2;
};
var uc = class extends ec {
  constructor(e8, t3, i2 = {}, s3) {
    super(), this.isPaused_ = true, this.mainPlaylistLoader_ = s3 || this, s3 || (this.isMain_ = true);
    const { withCredentials: n5 = false } = i2;
    if (this.vhs_ = t3, this.withCredentials = n5, this.addMetadataToTextTrack = i2.addMetadataToTextTrack, !e8) throw new Error("A non-empty playlist URL or object is required");
    this.on("minimumUpdatePeriod", () => {
      this.refreshXml_();
    }), this.on("mediaupdatetimeout", () => {
      this.refreshMedia_(this.media().id);
    }), this.state = "HAVE_NOTHING", this.loadedPlaylists_ = {}, this.logger_ = bh("DashPlaylistLoader"), this.isMain_ ? (this.mainPlaylistLoader_.srcUrl = e8, this.mainPlaylistLoader_.sidxMapping_ = {}) : this.childPlaylist_ = e8;
  }
  get isPaused() {
    return this.isPaused_;
  }
  requestErrored_(e8, t3, i2) {
    return !this.request || (this.request = null, e8 ? (this.error = "object" != typeof e8 || e8 instanceof Error ? { status: t3.status, message: "DASH request error at URL: " + t3.uri, response: t3.response, code: 2, metadata: e8.metadata } : e8, i2 && (this.state = i2), this.trigger("error"), true) : void 0);
  }
  addSidxSegments_(e8, t3, i2) {
    const s3 = e8.sidx && Ti(e8.sidx);
    if (!e8.sidx || !s3 || this.mainPlaylistLoader_.sidxMapping_[s3]) return _.clearTimeout(this.mediaRequest_), void (this.mediaRequest_ = _.setTimeout(() => i2(false), 0));
    const n5 = _h(e8.sidx.resolvedUri), r5 = (n6, r6) => {
      if (this.requestErrored_(n6, r6, t3)) return;
      const a6 = this.mainPlaylistLoader_.sidxMapping_, { requestType: o5 } = r6;
      let l2;
      try {
        l2 = Es(St(r6.response).subarray(8));
      } catch (u3) {
        return u3.metadata = gd({ requestType: o5, request: r6, parseFailure: true }), void this.requestErrored_(u3, r6, t3);
      }
      return a6[s3] = { sidxInfo: e8.sidx, sidx: l2 }, ci(e8, l2, e8.sidx.resolvedUri), i2(true);
    }, a5 = "dash-sidx";
    this.request = Zd(n5, this.vhs_.xhr, (t4, i3, s4, a6) => {
      if (t4) return r5(t4, i3);
      if (!s4 || "mp4" !== s4) {
        const t5 = s4 || "unknown";
        return r5({ status: i3.status, message: `Unsupported ${t5} container type for sidx segment at URL: ${n5}`, response: "", playlist: e8, internal: true, playlistExclusionDuration: 1 / 0, code: 2 }, i3);
      }
      const { offset: o5, length: l2 } = e8.sidx.byterange;
      if (a6.length >= l2 + o5) return r5(t4, { response: a6.subarray(o5, o5 + l2), status: i3.status, uri: i3.uri });
      this.request = this.vhs_.xhr({ uri: n5, responseType: "arraybuffer", requestType: "dash-sidx", headers: Ld({ byterange: e8.sidx.byterange }) }, r5);
    }, a5);
  }
  dispose() {
    this.isPaused_ = true, this.trigger("dispose"), this.stopRequest(), this.loadedPlaylists_ = {}, _.clearTimeout(this.minimumUpdatePeriodTimeout_), _.clearTimeout(this.mediaRequest_), _.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null, this.mediaRequest_ = null, this.minimumUpdatePeriodTimeout_ = null, this.mainPlaylistLoader_.createMupOnMedia_ && (this.off("loadedmetadata", this.mainPlaylistLoader_.createMupOnMedia_), this.mainPlaylistLoader_.createMupOnMedia_ = null), this.off();
  }
  hasPendingRequest() {
    return this.request || this.mediaRequest_;
  }
  stopRequest() {
    if (this.request) {
      const e8 = this.request;
      this.request = null, e8.onreadystatechange = null, e8.abort();
    }
  }
  media(e8) {
    if (!e8) return this.media_;
    if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
    const t3 = this.state;
    if ("string" == typeof e8) {
      if (!this.mainPlaylistLoader_.main.playlists[e8]) throw new Error("Unknown playlist URI: " + e8);
      e8 = this.mainPlaylistLoader_.main.playlists[e8];
    }
    const i2 = !this.media_ || e8.id !== this.media_.id;
    if (i2 && this.loadedPlaylists_[e8.id] && this.loadedPlaylists_[e8.id].endList) return this.state = "HAVE_METADATA", this.media_ = e8, void (i2 && (this.trigger("mediachanging"), this.trigger("mediachange")));
    i2 && (this.media_ && this.trigger("mediachanging"), this.addSidxSegments_(e8, t3, (i3) => {
      this.haveMetadata({ startingState: t3, playlist: e8 });
    }));
  }
  haveMetadata({ startingState: e8, playlist: t3 }) {
    this.state = "HAVE_METADATA", this.loadedPlaylists_[t3.id] = t3, _.clearTimeout(this.mediaRequest_), this.mediaRequest_ = null, this.refreshMedia_(t3.id), "HAVE_MAIN_MANIFEST" === e8 ? this.trigger("loadedmetadata") : this.trigger("mediachange");
  }
  pause() {
    this.isPaused_ = true, this.mainPlaylistLoader_.createMupOnMedia_ && (this.off("loadedmetadata", this.mainPlaylistLoader_.createMupOnMedia_), this.mainPlaylistLoader_.createMupOnMedia_ = null), this.stopRequest(), _.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null, this.isMain_ && (_.clearTimeout(this.mainPlaylistLoader_.minimumUpdatePeriodTimeout_), this.mainPlaylistLoader_.minimumUpdatePeriodTimeout_ = null), "HAVE_NOTHING" === this.state && (this.started = false);
  }
  load(e8) {
    this.isPaused_ = false, _.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null;
    const t3 = this.media();
    if (e8) {
      const e9 = t3 ? t3.targetDuration / 2 * 1e3 : 5e3;
      this.mediaUpdateTimeout = _.setTimeout(() => this.load(), e9);
    } else this.started ? t3 && !t3.endList ? (this.isMain_ && !this.minimumUpdatePeriodTimeout_ && (this.trigger("minimumUpdatePeriod"), this.updateMinimumUpdatePeriodTimeout_()), this.trigger("mediaupdatetimeout")) : this.trigger("loadedplaylist") : this.start();
  }
  start() {
    if (this.started = true, !this.isMain_) return _.clearTimeout(this.mediaRequest_), void (this.mediaRequest_ = _.setTimeout(() => this.haveMain_(), 0));
    this.requestMain_((e8, t3) => {
      this.haveMain_(), this.hasPendingRequest() || this.media_ || this.media(this.mainPlaylistLoader_.main.playlists[0]);
    });
  }
  requestMain_(e8) {
    const t3 = { manifestInfo: { uri: this.mainPlaylistLoader_.srcUrl } };
    this.trigger({ type: "manifestrequeststart", metadata: t3 }), this.request = this.vhs_.xhr({ uri: this.mainPlaylistLoader_.srcUrl, withCredentials: this.withCredentials, requestType: "dash-manifest" }, (i2, s3) => {
      if (i2) {
        const { requestType: e9 } = s3;
        i2.metadata = gd({ requestType: e9, request: s3, error: i2 });
      }
      if (this.requestErrored_(i2, s3)) return void ("HAVE_NOTHING" === this.state && (this.started = false));
      this.trigger({ type: "manifestrequestcomplete", metadata: t3 });
      const n5 = s3.responseText !== this.mainPlaylistLoader_.mainXml_;
      return this.mainPlaylistLoader_.mainXml_ = s3.responseText, s3.responseHeaders && s3.responseHeaders.date ? this.mainLoaded_ = Date.parse(s3.responseHeaders.date) : this.mainLoaded_ = Date.now(), this.mainPlaylistLoader_.srcUrl = _h(this.mainPlaylistLoader_.srcUrl, s3), n5 ? (this.handleMain_(), void this.syncClientServerClock_(() => e8(s3, n5))) : e8(s3, n5);
    });
  }
  syncClientServerClock_(e8) {
    const t3 = fs(this.mainPlaylistLoader_.mainXml_);
    return null === t3 ? (this.mainPlaylistLoader_.clientOffset_ = this.mainLoaded_ - Date.now(), e8()) : "DIRECT" === t3.method ? (this.mainPlaylistLoader_.clientOffset_ = t3.value - Date.now(), e8()) : void (this.request = this.vhs_.xhr({ uri: yh(this.mainPlaylistLoader_.srcUrl, t3.value), method: t3.method, withCredentials: this.withCredentials, requestType: "dash-clock-sync" }, (i2, s3) => {
      if (!this.request) return;
      if (i2) {
        const { requestType: t4 } = s3;
        return this.error.metadata = gd({ requestType: t4, request: s3, error: i2 }), this.mainPlaylistLoader_.clientOffset_ = this.mainLoaded_ - Date.now(), e8();
      }
      let n5;
      n5 = "HEAD" === t3.method ? s3.responseHeaders && s3.responseHeaders.date ? Date.parse(s3.responseHeaders.date) : this.mainLoaded_ : Date.parse(s3.responseText), this.mainPlaylistLoader_.clientOffset_ = n5 - Date.now(), e8();
    }));
  }
  haveMain_() {
    this.state = "HAVE_MAIN_MANIFEST", this.isMain_ ? this.trigger("loadedplaylist") : this.media_ || this.media(this.childPlaylist_);
  }
  handleMain_() {
    _.clearTimeout(this.mediaRequest_), this.mediaRequest_ = null;
    const e8 = this.mainPlaylistLoader_.main, t3 = { manifestInfo: { uri: this.mainPlaylistLoader_.srcUrl } };
    let i2;
    this.trigger({ type: "manifestparsestart", metadata: t3 });
    try {
      i2 = sc({ mainXml: this.mainPlaylistLoader_.mainXml_, srcUrl: this.mainPlaylistLoader_.srcUrl, clientOffset: this.mainPlaylistLoader_.clientOffset_, sidxMapping: this.mainPlaylistLoader_.sidxMapping_, previousManifest: e8 });
    } catch (n5) {
      this.error = n5, this.error.metadata = { errorType: dh.Error.StreamingDashManifestParserError, error: n5 }, this.trigger("error");
    }
    e8 && (i2 = rc(e8, i2, this.mainPlaylistLoader_.sidxMapping_)), this.mainPlaylistLoader_.main = i2 || e8;
    const s3 = this.mainPlaylistLoader_.main.locations && this.mainPlaylistLoader_.main.locations[0];
    if (s3 && s3 !== this.mainPlaylistLoader_.srcUrl && (this.mainPlaylistLoader_.srcUrl = s3), (!e8 || i2 && i2.minimumUpdatePeriod !== e8.minimumUpdatePeriod) && this.updateMinimumUpdatePeriodTimeout_(), this.addEventStreamToMetadataTrack_(i2), i2) {
      const { duration: e9, endList: s4 } = i2, n5 = [];
      i2.playlists.forEach((e10) => {
        n5.push({ id: e10.id, bandwidth: e10.attributes.BANDWIDTH, resolution: e10.attributes.RESOLUTION, codecs: e10.attributes.CODECS });
      });
      const r5 = { duration: e9, isLive: !s4, renditions: n5 };
      t3.parsedManifest = r5, this.trigger({ type: "manifestparsecomplete", metadata: t3 });
    }
    return Boolean(i2);
  }
  updateMinimumUpdatePeriodTimeout_() {
    const e8 = this.mainPlaylistLoader_;
    e8.createMupOnMedia_ && (e8.off("loadedmetadata", e8.createMupOnMedia_), e8.createMupOnMedia_ = null), e8.minimumUpdatePeriodTimeout_ && (_.clearTimeout(e8.minimumUpdatePeriodTimeout_), e8.minimumUpdatePeriodTimeout_ = null);
    let t3 = e8.main && e8.main.minimumUpdatePeriod;
    0 === t3 && (e8.media() ? t3 = 1e3 * e8.media().targetDuration : (e8.createMupOnMedia_ = e8.updateMinimumUpdatePeriodTimeout_, e8.one("loadedmetadata", e8.createMupOnMedia_))), "number" != typeof t3 || t3 <= 0 ? t3 < 0 && this.logger_(`found invalid minimumUpdatePeriod of ${t3}, not setting a timeout`) : this.createMUPTimeout_(t3);
  }
  createMUPTimeout_(e8) {
    const t3 = this.mainPlaylistLoader_;
    t3.minimumUpdatePeriodTimeout_ = _.setTimeout(() => {
      t3.minimumUpdatePeriodTimeout_ = null, t3.trigger("minimumUpdatePeriod"), t3.createMUPTimeout_(e8);
    }, e8);
  }
  refreshXml_() {
    this.requestMain_((e8, t3) => {
      t3 && (this.media_ && (this.media_ = this.mainPlaylistLoader_.main.playlists[this.media_.id]), this.mainPlaylistLoader_.sidxMapping_ = lc(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.sidxMapping_), this.addSidxSegments_(this.media(), this.state, (e9) => {
        this.refreshMedia_(this.media().id);
      }));
    });
  }
  refreshMedia_(e8) {
    if (!e8) throw new Error("refreshMedia_ must take a media id");
    this.media_ && this.isMain_ && this.handleMain_();
    const t3 = this.mainPlaylistLoader_.main.playlists, i2 = !this.media_ || this.media_ !== t3[e8];
    if (i2 ? this.media_ = t3[e8] : this.trigger("playlistunchanged"), !this.mediaUpdateTimeout) {
      const e9 = () => {
        this.media().endList || (this.mediaUpdateTimeout = _.setTimeout(() => {
          this.trigger("mediaupdatetimeout"), e9();
        }, wd(this.media(), Boolean(i2))));
      };
      e9();
    }
    this.trigger("loadedplaylist");
  }
  addEventStreamToMetadataTrack_(e8) {
    if (e8 && this.mainPlaylistLoader_.main.eventStream) {
      const e9 = this.mainPlaylistLoader_.main.eventStream.map((e10) => ({ cueTime: e10.start, frames: [{ data: e10.messageData }] }));
      this.addMetadataToTextTrack("EventStream", e9, this.mainPlaylistLoader_.main.duration);
    }
  }
  getKeyIdSet(e8) {
    if (e8.contentProtection) {
      const t3 = /* @__PURE__ */ new Set();
      for (const i2 in e8.contentProtection) {
        const s3 = e8.contentProtection[i2].attributes["cenc:default_KID"];
        s3 && t3.add(s3.replace(/-/g, "").toLowerCase());
      }
      return t3;
    }
  }
};
var hc = { GOAL_BUFFER_LENGTH: 30, MAX_GOAL_BUFFER_LENGTH: 60, BACK_BUFFER_LENGTH: 30, GOAL_BUFFER_LENGTH_RATE: 1, INITIAL_BANDWIDTH: 4194304, BANDWIDTH_VARIANCE: 1.2, BUFFER_LOW_WATER_LINE: 0, MAX_BUFFER_LOW_WATER_LINE: 30, EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE: 16, BUFFER_LOW_WATER_LINE_RATE: 1, BUFFER_HIGH_WATER_LINE: 30 };
var dc = (e8) => {
  const t3 = new Uint8Array(new ArrayBuffer(e8.length));
  for (let i2 = 0; i2 < e8.length; i2++) t3[i2] = e8.charCodeAt(i2);
  return t3.buffer;
};
var cc = function(e8) {
  return e8.on = e8.addEventListener, e8.off = e8.removeEventListener, e8;
};
var pc = function(e8) {
  try {
    return URL.createObjectURL(new Blob([e8], { type: "application/javascript" }));
  } catch (t3) {
    const i2 = new BlobBuilder();
    return i2.append(e8), URL.createObjectURL(i2.getBlob());
  }
};
var mc = function(e8) {
  return function() {
    const t3 = pc(e8), i2 = cc(new Worker(t3));
    i2.objURL = t3;
    const s3 = i2.terminate;
    return i2.on = i2.addEventListener, i2.off = i2.removeEventListener, i2.terminate = function() {
      return URL.revokeObjectURL(t3), s3.call(this);
    }, i2;
  };
};
var gc = function(e8) {
  return `var browserWorkerPolyFill = ${cc.toString()};
browserWorkerPolyFill(self);
` + e8;
};
var fc = function(e8) {
  return e8.toString().replace(/^function.+?{/, "").slice(0, -1);
};
var yc = gc(fc(function() {
  var e8 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, t3 = function() {
    this.init = function() {
      var e9 = {};
      this.on = function(t4, i3) {
        e9[t4] || (e9[t4] = []), e9[t4] = e9[t4].concat(i3);
      }, this.off = function(t4, i3) {
        var s4;
        return !!e9[t4] && (s4 = e9[t4].indexOf(i3), e9[t4] = e9[t4].slice(), e9[t4].splice(s4, 1), s4 > -1);
      }, this.trigger = function(t4) {
        var i3, s4, n6, r6;
        if (i3 = e9[t4]) if (2 === arguments.length) for (n6 = i3.length, s4 = 0; s4 < n6; ++s4) i3[s4].call(this, arguments[1]);
        else {
          for (r6 = [], s4 = arguments.length, s4 = 1; s4 < arguments.length; ++s4) r6.push(arguments[s4]);
          for (n6 = i3.length, s4 = 0; s4 < n6; ++s4) i3[s4].apply(this, r6);
        }
      }, this.dispose = function() {
        e9 = {};
      };
    };
  };
  t3.prototype.pipe = function(e9) {
    return this.on("data", function(t4) {
      e9.push(t4);
    }), this.on("done", function(t4) {
      e9.flush(t4);
    }), this.on("partialdone", function(t4) {
      e9.partialFlush(t4);
    }), this.on("endedtimeline", function(t4) {
      e9.endTimeline(t4);
    }), this.on("reset", function(t4) {
      e9.reset(t4);
    }), e9;
  }, t3.prototype.push = function(e9) {
    this.trigger("data", e9);
  }, t3.prototype.flush = function(e9) {
    this.trigger("done", e9);
  }, t3.prototype.partialFlush = function(e9) {
    this.trigger("partialdone", e9);
  }, t3.prototype.endTimeline = function(e9) {
    this.trigger("endedtimeline", e9);
  }, t3.prototype.reset = function(e9) {
    this.trigger("reset", e9);
  };
  var i2, s3, n5, r5, a5, o5, l2, u3, h2, d3, c3, p2, m5, g5, f3, y4, _2, b2, v4, T2, S4, E3, w3, C3, k2, I2, x2, A2, D2, P7, L3, O2, N3, R2, M3, U2, B2, F2, q3, j4, $2 = t3, H2 = Math.pow(2, 32), V3 = { getUint64: function(e9) {
    var t4, i3 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength);
    return i3.getBigUint64 ? (t4 = i3.getBigUint64(0)) < Number.MAX_SAFE_INTEGER ? Number(t4) : t4 : i3.getUint32(0) * H2 + i3.getUint32(4);
  }, MAX_UINT32: H2 }, z2 = V3.MAX_UINT32;
  !function() {
    var e9;
    if (E3 = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], mvex: [], mvhd: [], pasp: [], sdtp: [], smhd: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], styp: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [] }, "undefined" != typeof Uint8Array) {
      for (e9 in E3) E3.hasOwnProperty(e9) && (E3[e9] = [e9.charCodeAt(0), e9.charCodeAt(1), e9.charCodeAt(2), e9.charCodeAt(3)]);
      w3 = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]), k2 = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]), C3 = new Uint8Array([0, 0, 0, 1]), I2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), x2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), A2 = { video: I2, audio: x2 }, L3 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), P7 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), O2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), N3 = O2, R2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), M3 = O2, D2 = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
  }(), i2 = function(e9) {
    var t4, i3, s4 = [], n6 = 0;
    for (t4 = 1; t4 < arguments.length; t4++) s4.push(arguments[t4]);
    for (t4 = s4.length; t4--; ) n6 += s4[t4].byteLength;
    for (i3 = new Uint8Array(n6 + 8), new DataView(i3.buffer, i3.byteOffset, i3.byteLength).setUint32(0, i3.byteLength), i3.set(e9, 4), t4 = 0, n6 = 8; t4 < s4.length; t4++) i3.set(s4[t4], n6), n6 += s4[t4].byteLength;
    return i3;
  }, s3 = function() {
    return i2(E3.dinf, i2(E3.dref, L3));
  }, n5 = function(e9) {
    return i2(E3.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, e9.audioobjecttype << 3 | e9.samplingfrequencyindex >>> 1, e9.samplingfrequencyindex << 7 | e9.channelcount << 3, 6, 1, 2]));
  }, f3 = function(e9) {
    return i2(E3.hdlr, A2[e9]);
  }, g5 = function(e9) {
    var t4 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, e9.duration >>> 24 & 255, e9.duration >>> 16 & 255, e9.duration >>> 8 & 255, 255 & e9.duration, 85, 196, 0, 0]);
    return e9.samplerate && (t4[12] = e9.samplerate >>> 24 & 255, t4[13] = e9.samplerate >>> 16 & 255, t4[14] = e9.samplerate >>> 8 & 255, t4[15] = 255 & e9.samplerate), i2(E3.mdhd, t4);
  }, m5 = function(e9) {
    return i2(E3.mdia, g5(e9), f3(e9.type), o5(e9));
  }, a5 = function(e9) {
    return i2(E3.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & e9) >> 24, (16711680 & e9) >> 16, (65280 & e9) >> 8, 255 & e9]));
  }, o5 = function(e9) {
    return i2(E3.minf, "video" === e9.type ? i2(E3.vmhd, D2) : i2(E3.smhd, P7), s3(), _2(e9));
  }, l2 = function(e9, t4) {
    for (var s4 = [], n6 = t4.length; n6--; ) s4[n6] = v4(t4[n6]);
    return i2.apply(null, [E3.moof, a5(e9)].concat(s4));
  }, u3 = function(e9) {
    for (var t4 = e9.length, s4 = []; t4--; ) s4[t4] = c3(e9[t4]);
    return i2.apply(null, [E3.moov, d3(4294967295)].concat(s4).concat(h2(e9)));
  }, h2 = function(e9) {
    for (var t4 = e9.length, s4 = []; t4--; ) s4[t4] = T2(e9[t4]);
    return i2.apply(null, [E3.mvex].concat(s4));
  }, d3 = function(e9) {
    var t4 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & e9) >> 24, (16711680 & e9) >> 16, (65280 & e9) >> 8, 255 & e9, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
    return i2(E3.mvhd, t4);
  }, y4 = function(e9) {
    var t4, s4, n6 = e9.samples || [], r6 = new Uint8Array(4 + n6.length);
    for (s4 = 0; s4 < n6.length; s4++) t4 = n6[s4].flags, r6[s4 + 4] = t4.dependsOn << 4 | t4.isDependedOn << 2 | t4.hasRedundancy;
    return i2(E3.sdtp, r6);
  }, _2 = function(e9) {
    return i2(E3.stbl, b2(e9), i2(E3.stts, M3), i2(E3.stsc, N3), i2(E3.stsz, R2), i2(E3.stco, O2));
  }, b2 = function(e9) {
    return i2(E3.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === e9.type ? U2(e9) : B2(e9));
  }, U2 = function(e9) {
    var t4, s4, n6 = e9.sps || [], r6 = e9.pps || [], a6 = [], o6 = [];
    for (t4 = 0; t4 < n6.length; t4++) a6.push((65280 & n6[t4].byteLength) >>> 8), a6.push(255 & n6[t4].byteLength), a6 = a6.concat(Array.prototype.slice.call(n6[t4]));
    for (t4 = 0; t4 < r6.length; t4++) o6.push((65280 & r6[t4].byteLength) >>> 8), o6.push(255 & r6[t4].byteLength), o6 = o6.concat(Array.prototype.slice.call(r6[t4]));
    if (s4 = [E3.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e9.width) >> 8, 255 & e9.width, (65280 & e9.height) >> 8, 255 & e9.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), i2(E3.avcC, new Uint8Array([1, e9.profileIdc, e9.profileCompatibility, e9.levelIdc, 255].concat([n6.length], a6, [r6.length], o6))), i2(E3.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]))], e9.sarRatio) {
      var l3 = e9.sarRatio[0], u4 = e9.sarRatio[1];
      s4.push(i2(E3.pasp, new Uint8Array([(4278190080 & l3) >> 24, (16711680 & l3) >> 16, (65280 & l3) >> 8, 255 & l3, (4278190080 & u4) >> 24, (16711680 & u4) >> 16, (65280 & u4) >> 8, 255 & u4])));
    }
    return i2.apply(null, s4);
  }, B2 = function(e9) {
    return i2(E3.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e9.channelcount) >> 8, 255 & e9.channelcount, (65280 & e9.samplesize) >> 8, 255 & e9.samplesize, 0, 0, 0, 0, (65280 & e9.samplerate) >> 8, 255 & e9.samplerate, 0, 0]), n5(e9));
  }, p2 = function(e9) {
    var t4 = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & e9.id) >> 24, (16711680 & e9.id) >> 16, (65280 & e9.id) >> 8, 255 & e9.id, 0, 0, 0, 0, (4278190080 & e9.duration) >> 24, (16711680 & e9.duration) >> 16, (65280 & e9.duration) >> 8, 255 & e9.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & e9.width) >> 8, 255 & e9.width, 0, 0, (65280 & e9.height) >> 8, 255 & e9.height, 0, 0]);
    return i2(E3.tkhd, t4);
  }, v4 = function(e9) {
    var t4, s4, n6, r6, a6, o6, l3;
    return t4 = i2(E3.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & e9.id) >> 24, (16711680 & e9.id) >> 16, (65280 & e9.id) >> 8, 255 & e9.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), o6 = Math.floor(e9.baseMediaDecodeTime / z2), l3 = Math.floor(e9.baseMediaDecodeTime % z2), s4 = i2(E3.tfdt, new Uint8Array([1, 0, 0, 0, o6 >>> 24 & 255, o6 >>> 16 & 255, o6 >>> 8 & 255, 255 & o6, l3 >>> 24 & 255, l3 >>> 16 & 255, l3 >>> 8 & 255, 255 & l3])), a6 = 92, "audio" === e9.type ? (n6 = S4(e9, a6), i2(E3.traf, t4, s4, n6)) : (r6 = y4(e9), n6 = S4(e9, r6.length + a6), i2(E3.traf, t4, s4, n6, r6));
  }, c3 = function(e9) {
    return e9.duration = e9.duration || 4294967295, i2(E3.trak, p2(e9), m5(e9));
  }, T2 = function(e9) {
    var t4 = new Uint8Array([0, 0, 0, 0, (4278190080 & e9.id) >> 24, (16711680 & e9.id) >> 16, (65280 & e9.id) >> 8, 255 & e9.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
    return "video" !== e9.type && (t4[t4.length - 1] = 0), i2(E3.trex, t4);
  }, j4 = function(e9, t4) {
    var i3 = 0, s4 = 0, n6 = 0, r6 = 0;
    return e9.length && (void 0 !== e9[0].duration && (i3 = 1), void 0 !== e9[0].size && (s4 = 2), void 0 !== e9[0].flags && (n6 = 4), void 0 !== e9[0].compositionTimeOffset && (r6 = 8)), [0, 0, i3 | s4 | n6 | r6, 1, (4278190080 & e9.length) >>> 24, (16711680 & e9.length) >>> 16, (65280 & e9.length) >>> 8, 255 & e9.length, (4278190080 & t4) >>> 24, (16711680 & t4) >>> 16, (65280 & t4) >>> 8, 255 & t4];
  }, q3 = function(e9, t4) {
    var s4, n6, r6, a6, o6, l3;
    for (t4 += 20 + 16 * (a6 = e9.samples || []).length, r6 = j4(a6, t4), (n6 = new Uint8Array(r6.length + 16 * a6.length)).set(r6), s4 = r6.length, l3 = 0; l3 < a6.length; l3++) o6 = a6[l3], n6[s4++] = (4278190080 & o6.duration) >>> 24, n6[s4++] = (16711680 & o6.duration) >>> 16, n6[s4++] = (65280 & o6.duration) >>> 8, n6[s4++] = 255 & o6.duration, n6[s4++] = (4278190080 & o6.size) >>> 24, n6[s4++] = (16711680 & o6.size) >>> 16, n6[s4++] = (65280 & o6.size) >>> 8, n6[s4++] = 255 & o6.size, n6[s4++] = o6.flags.isLeading << 2 | o6.flags.dependsOn, n6[s4++] = o6.flags.isDependedOn << 6 | o6.flags.hasRedundancy << 4 | o6.flags.paddingValue << 1 | o6.flags.isNonSyncSample, n6[s4++] = 61440 & o6.flags.degradationPriority, n6[s4++] = 15 & o6.flags.degradationPriority, n6[s4++] = (4278190080 & o6.compositionTimeOffset) >>> 24, n6[s4++] = (16711680 & o6.compositionTimeOffset) >>> 16, n6[s4++] = (65280 & o6.compositionTimeOffset) >>> 8, n6[s4++] = 255 & o6.compositionTimeOffset;
    return i2(E3.trun, n6);
  }, F2 = function(e9, t4) {
    var s4, n6, r6, a6, o6, l3;
    for (t4 += 20 + 8 * (a6 = e9.samples || []).length, r6 = j4(a6, t4), (s4 = new Uint8Array(r6.length + 8 * a6.length)).set(r6), n6 = r6.length, l3 = 0; l3 < a6.length; l3++) o6 = a6[l3], s4[n6++] = (4278190080 & o6.duration) >>> 24, s4[n6++] = (16711680 & o6.duration) >>> 16, s4[n6++] = (65280 & o6.duration) >>> 8, s4[n6++] = 255 & o6.duration, s4[n6++] = (4278190080 & o6.size) >>> 24, s4[n6++] = (16711680 & o6.size) >>> 16, s4[n6++] = (65280 & o6.size) >>> 8, s4[n6++] = 255 & o6.size;
    return i2(E3.trun, s4);
  }, S4 = function(e9, t4) {
    return "audio" === e9.type ? F2(e9, t4) : q3(e9, t4);
  };
  var W2, G2, X2, K2, Y2, Q2, J2, Z2, ee2 = { ftyp: r5 = function() {
    return i2(E3.ftyp, w3, C3, w3, k2);
  }, mdat: function(e9) {
    return i2(E3.mdat, e9);
  }, moof: l2, moov: u3, initSegment: function(e9) {
    var t4, i3 = r5(), s4 = u3(e9);
    return (t4 = new Uint8Array(i3.byteLength + s4.byteLength)).set(i3), t4.set(s4, i3.byteLength), t4;
  } }, te2 = function() {
    return { size: 0, flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0, degradationPriority: 0, isNonSyncSample: 1 } };
  }, ie2 = function(e9, t4) {
    var i3 = te2();
    return i3.dataOffset = t4, i3.compositionTimeOffset = e9.pts - e9.dts, i3.duration = e9.duration, i3.size = 4 * e9.length, i3.size += e9.byteLength, e9.keyFrame && (i3.flags.dependsOn = 2, i3.flags.isNonSyncSample = 0), i3;
  }, se2 = function(e9, t4) {
    var i3, s4, n6, r6, a6, o6 = t4 || 0, l3 = [];
    for (i3 = 0; i3 < e9.length; i3++) for (r6 = e9[i3], s4 = 0; s4 < r6.length; s4++) a6 = r6[s4], o6 += (n6 = ie2(a6, o6)).size, l3.push(n6);
    return l3;
  }, ne2 = function(e9, t4) {
    var i3, s4 = [];
    return i3 = ie2(e9, t4 || 0), s4.push(i3), s4;
  }, re2 = { groupNalsIntoFrames: function(e9) {
    var t4, i3, s4 = [], n6 = [];
    for (n6.byteLength = 0, n6.nalCount = 0, n6.duration = 0, s4.byteLength = 0, t4 = 0; t4 < e9.length; t4++) "access_unit_delimiter_rbsp" === (i3 = e9[t4]).nalUnitType ? (s4.length && (s4.duration = i3.dts - s4.dts, n6.byteLength += s4.byteLength, n6.nalCount += s4.length, n6.duration += s4.duration, n6.push(s4)), (s4 = [i3]).byteLength = i3.data.byteLength, s4.pts = i3.pts, s4.dts = i3.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i3.nalUnitType && (s4.keyFrame = true), s4.duration = i3.dts - s4.dts, s4.byteLength += i3.data.byteLength, s4.push(i3));
    return n6.length && (!s4.duration || s4.duration <= 0) && (s4.duration = n6[n6.length - 1].duration), n6.byteLength += s4.byteLength, n6.nalCount += s4.length, n6.duration += s4.duration, n6.push(s4), n6;
  }, groupFramesIntoGops: function(e9) {
    var t4, i3, s4 = [], n6 = [];
    for (s4.byteLength = 0, s4.nalCount = 0, s4.duration = 0, s4.pts = e9[0].pts, s4.dts = e9[0].dts, n6.byteLength = 0, n6.nalCount = 0, n6.duration = 0, n6.pts = e9[0].pts, n6.dts = e9[0].dts, t4 = 0; t4 < e9.length; t4++) (i3 = e9[t4]).keyFrame ? (s4.length && (n6.push(s4), n6.byteLength += s4.byteLength, n6.nalCount += s4.nalCount, n6.duration += s4.duration), (s4 = [i3]).nalCount = i3.length, s4.byteLength = i3.byteLength, s4.pts = i3.pts, s4.dts = i3.dts, s4.duration = i3.duration) : (s4.duration += i3.duration, s4.nalCount += i3.length, s4.byteLength += i3.byteLength, s4.push(i3));
    return n6.length && s4.duration <= 0 && (s4.duration = n6[n6.length - 1].duration), n6.byteLength += s4.byteLength, n6.nalCount += s4.nalCount, n6.duration += s4.duration, n6.push(s4), n6;
  }, extendFirstKeyFrame: function(e9) {
    var t4;
    return !e9[0][0].keyFrame && e9.length > 1 && (t4 = e9.shift(), e9.byteLength -= t4.byteLength, e9.nalCount -= t4.nalCount, e9[0][0].dts = t4.dts, e9[0][0].pts = t4.pts, e9[0][0].duration += t4.duration), e9;
  }, generateSampleTable: se2, concatenateNalData: function(e9) {
    var t4, i3, s4, n6, r6, a6, o6 = 0, l3 = e9.byteLength, u4 = e9.nalCount, h3 = new Uint8Array(l3 + 4 * u4), d4 = new DataView(h3.buffer);
    for (t4 = 0; t4 < e9.length; t4++) for (n6 = e9[t4], i3 = 0; i3 < n6.length; i3++) for (r6 = n6[i3], s4 = 0; s4 < r6.length; s4++) a6 = r6[s4], d4.setUint32(o6, a6.data.byteLength), o6 += 4, h3.set(a6.data, o6), o6 += a6.data.byteLength;
    return h3;
  }, generateSampleTableForFrame: ne2, concatenateNalDataForFrame: function(e9) {
    var t4, i3, s4 = 0, n6 = e9.byteLength, r6 = e9.length, a6 = new Uint8Array(n6 + 4 * r6), o6 = new DataView(a6.buffer);
    for (t4 = 0; t4 < e9.length; t4++) i3 = e9[t4], o6.setUint32(s4, i3.data.byteLength), s4 += 4, a6.set(i3.data, s4), s4 += i3.data.byteLength;
    return a6;
  } }, ae2 = [33, 16, 5, 32, 164, 27], oe2 = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252], le2 = function(e9) {
    for (var t4 = []; e9--; ) t4.push(0);
    return t4;
  }, ue2 = function(e9) {
    return Object.keys(e9).reduce(function(t4, i3) {
      return t4[i3] = new Uint8Array(e9[i3].reduce(function(e10, t5) {
        return e10.concat(t5);
      }, [])), t4;
    }, {});
  }, he2 = function() {
    if (!W2) {
      var e9 = { 96e3: [ae2, [227, 64], le2(154), [56]], 88200: [ae2, [231], le2(170), [56]], 64e3: [ae2, [248, 192], le2(240), [56]], 48e3: [ae2, [255, 192], le2(268), [55, 148, 128], le2(54), [112]], 44100: [ae2, [255, 192], le2(268), [55, 163, 128], le2(84), [112]], 32e3: [ae2, [255, 192], le2(268), [55, 234], le2(226), [112]], 24e3: [ae2, [255, 192], le2(268), [55, 255, 128], le2(268), [111, 112], le2(126), [224]], 16e3: [ae2, [255, 192], le2(268), [55, 255, 128], le2(268), [111, 255], le2(269), [223, 108], le2(195), [1, 192]], 12e3: [oe2, le2(268), [3, 127, 248], le2(268), [6, 255, 240], le2(268), [13, 255, 224], le2(268), [27, 253, 128], le2(259), [56]], 11025: [oe2, le2(268), [3, 127, 248], le2(268), [6, 255, 240], le2(268), [13, 255, 224], le2(268), [27, 255, 192], le2(268), [55, 175, 128], le2(108), [112]], 8e3: [oe2, le2(268), [3, 121, 16], le2(47), [7]] };
      W2 = ue2(e9);
    }
    return W2;
  }, de2 = 9e4;
  Q2 = function(e9, t4) {
    return G2(Y2(e9, t4));
  }, J2 = function(e9, t4) {
    return X2(K2(e9), t4);
  }, Z2 = function(e9, t4, i3) {
    return K2(i3 ? e9 : e9 - t4);
  };
  var ce2 = { ONE_SECOND_IN_TS: de2, secondsToVideoTs: G2 = function(e9) {
    return e9 * de2;
  }, secondsToAudioTs: X2 = function(e9, t4) {
    return e9 * t4;
  }, videoTsToSeconds: K2 = function(e9) {
    return e9 / de2;
  }, audioTsToSeconds: Y2 = function(e9, t4) {
    return e9 / t4;
  }, audioTsToVideoTs: Q2, videoTsToAudioTs: J2, metadataTsToSeconds: Z2 }, pe2 = he2, me2 = ce2, ge2 = function(e9) {
    var t4, i3 = 0;
    for (t4 = 0; t4 < e9.length; t4++) i3 += e9[t4].data.byteLength;
    return i3;
  }, fe2 = function(e9) {
    var t4, i3, s4 = [];
    for (t4 = 0; t4 < e9.length; t4++) i3 = e9[t4], s4.push({ size: i3.data.byteLength, duration: 1024 });
    return s4;
  }, ye2 = { prefixWithSilence: function(e9, t4, i3, s4) {
    var n6, r6, a6, o6, l3 = 0, u4 = 0, h3 = 0, d4 = 0;
    if (t4.length && (n6 = me2.audioTsToVideoTs(e9.baseMediaDecodeTime, e9.samplerate), l3 = Math.ceil(me2.ONE_SECOND_IN_TS / (e9.samplerate / 1024)), i3 && s4 && (u4 = n6 - Math.max(i3, s4), d4 = (h3 = Math.floor(u4 / l3)) * l3), !(h3 < 1 || d4 > me2.ONE_SECOND_IN_TS / 2))) {
      for ((r6 = pe2()[e9.samplerate]) || (r6 = t4[0].data), a6 = 0; a6 < h3; a6++) o6 = t4[0], t4.splice(0, 0, { data: r6, dts: o6.dts - l3, pts: o6.pts - l3 });
      return e9.baseMediaDecodeTime -= Math.floor(me2.videoTsToAudioTs(d4, e9.samplerate)), d4;
    }
  }, trimAdtsFramesByEarliestDts: function(e9, t4, i3) {
    return t4.minSegmentDts >= i3 ? e9 : (t4.minSegmentDts = 1 / 0, e9.filter(function(e10) {
      return e10.dts >= i3 && (t4.minSegmentDts = Math.min(t4.minSegmentDts, e10.dts), t4.minSegmentPts = t4.minSegmentDts, true);
    }));
  }, generateSampleTable: fe2, concatenateFrameData: function(e9) {
    var t4, i3, s4 = 0, n6 = new Uint8Array(ge2(e9));
    for (t4 = 0; t4 < e9.length; t4++) i3 = e9[t4], n6.set(i3.data, s4), s4 += i3.data.byteLength;
    return n6;
  } }, _e2 = ce2.ONE_SECOND_IN_TS, be2 = { clearDtsInfo: function(e9) {
    delete e9.minSegmentDts, delete e9.maxSegmentDts, delete e9.minSegmentPts, delete e9.maxSegmentPts;
  }, calculateTrackBaseMediaDecodeTime: function(e9, t4) {
    var i3, s4 = e9.minSegmentDts;
    return t4 || (s4 -= e9.timelineStartInfo.dts), i3 = e9.timelineStartInfo.baseMediaDecodeTime, i3 += s4, i3 = Math.max(0, i3), "audio" === e9.type && (i3 *= e9.samplerate / _e2, i3 = Math.floor(i3)), i3;
  }, collectDtsInfo: function(e9, t4) {
    "number" == typeof t4.pts && (void 0 === e9.timelineStartInfo.pts && (e9.timelineStartInfo.pts = t4.pts), void 0 === e9.minSegmentPts ? e9.minSegmentPts = t4.pts : e9.minSegmentPts = Math.min(e9.minSegmentPts, t4.pts), void 0 === e9.maxSegmentPts ? e9.maxSegmentPts = t4.pts : e9.maxSegmentPts = Math.max(e9.maxSegmentPts, t4.pts)), "number" == typeof t4.dts && (void 0 === e9.timelineStartInfo.dts && (e9.timelineStartInfo.dts = t4.dts), void 0 === e9.minSegmentDts ? e9.minSegmentDts = t4.dts : e9.minSegmentDts = Math.min(e9.minSegmentDts, t4.dts), void 0 === e9.maxSegmentDts ? e9.maxSegmentDts = t4.dts : e9.maxSegmentDts = Math.max(e9.maxSegmentDts, t4.dts));
  } }, ve2 = 4, Te2 = 128, Se2 = { parseSei: function(e9) {
    for (var t4 = 0, i3 = { payloadType: -1, payloadSize: 0 }, s4 = 0, n6 = 0; t4 < e9.byteLength && e9[t4] !== Te2; ) {
      for (; 255 === e9[t4]; ) s4 += 255, t4++;
      for (s4 += e9[t4++]; 255 === e9[t4]; ) n6 += 255, t4++;
      if (n6 += e9[t4++], !i3.payload && s4 === ve2) {
        if ("GA94" === String.fromCharCode(e9[t4 + 3], e9[t4 + 4], e9[t4 + 5], e9[t4 + 6])) {
          i3.payloadType = s4, i3.payloadSize = n6, i3.payload = e9.subarray(t4, t4 + n6);
          break;
        }
        i3.payload = void 0;
      }
      t4 += n6, s4 = 0, n6 = 0;
    }
    return i3;
  }, parseUserData: function(e9) {
    return 181 !== e9.payload[0] || 49 != (e9.payload[1] << 8 | e9.payload[2]) || "GA94" !== String.fromCharCode(e9.payload[3], e9.payload[4], e9.payload[5], e9.payload[6]) || 3 !== e9.payload[7] ? null : e9.payload.subarray(8, e9.payload.length - 1);
  }, parseCaptionPackets: function(e9, t4) {
    var i3, s4, n6, r6, a6 = [];
    if (!(64 & t4[0])) return a6;
    for (s4 = 31 & t4[0], i3 = 0; i3 < s4; i3++) r6 = { type: 3 & t4[(n6 = 3 * i3) + 2], pts: e9 }, 4 & t4[n6 + 2] && (r6.ccData = t4[n6 + 3] << 8 | t4[n6 + 4], a6.push(r6));
    return a6;
  }, discardEmulationPreventionBytes: function(e9) {
    for (var t4, i3, s4 = e9.byteLength, n6 = [], r6 = 1; r6 < s4 - 2; ) 0 === e9[r6] && 0 === e9[r6 + 1] && 3 === e9[r6 + 2] ? (n6.push(r6 + 2), r6 += 2) : r6++;
    if (0 === n6.length) return e9;
    t4 = s4 - n6.length, i3 = new Uint8Array(t4);
    var a6 = 0;
    for (r6 = 0; r6 < t4; a6++, r6++) a6 === n6[0] && (a6++, n6.shift()), i3[r6] = e9[a6];
    return i3;
  }, USER_DATA_REGISTERED_ITU_T_T35: ve2 }, Ee2 = $2, we2 = Se2, Ce2 = function(e9) {
    e9 = e9 || {}, Ce2.prototype.init.call(this), this.parse708captions_ = "boolean" != typeof e9.parse708captions || e9.parse708captions, this.captionPackets_ = [], this.ccStreams_ = [new Ue2(0, 0), new Ue2(0, 1), new Ue2(1, 0), new Ue2(1, 1)], this.parse708captions_ && (this.cc708Stream_ = new Pe2({ captionServices: e9.captionServices })), this.reset(), this.ccStreams_.forEach(function(e10) {
      e10.on("data", this.trigger.bind(this, "data")), e10.on("partialdone", this.trigger.bind(this, "partialdone")), e10.on("done", this.trigger.bind(this, "done"));
    }, this), this.parse708captions_ && (this.cc708Stream_.on("data", this.trigger.bind(this, "data")), this.cc708Stream_.on("partialdone", this.trigger.bind(this, "partialdone")), this.cc708Stream_.on("done", this.trigger.bind(this, "done")));
  };
  Ce2.prototype = new Ee2(), Ce2.prototype.push = function(e9) {
    var t4, i3, s4;
    if ("sei_rbsp" === e9.nalUnitType && (t4 = we2.parseSei(e9.escapedRBSP)).payload && t4.payloadType === we2.USER_DATA_REGISTERED_ITU_T_T35 && (i3 = we2.parseUserData(t4))) if (e9.dts < this.latestDts_) this.ignoreNextEqualDts_ = true;
    else {
      if (e9.dts === this.latestDts_ && this.ignoreNextEqualDts_) return this.numSameDts_--, void (this.numSameDts_ || (this.ignoreNextEqualDts_ = false));
      s4 = we2.parseCaptionPackets(e9.pts, i3), this.captionPackets_ = this.captionPackets_.concat(s4), this.latestDts_ !== e9.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = e9.dts;
    }
  }, Ce2.prototype.flushCCStreams = function(e9) {
    this.ccStreams_.forEach(function(t4) {
      return "flush" === e9 ? t4.flush() : t4.partialFlush();
    }, this);
  }, Ce2.prototype.flushStream = function(e9) {
    this.captionPackets_.length ? (this.captionPackets_.forEach(function(e10, t4) {
      e10.presortIndex = t4;
    }), this.captionPackets_.sort(function(e10, t4) {
      return e10.pts === t4.pts ? e10.presortIndex - t4.presortIndex : e10.pts - t4.pts;
    }), this.captionPackets_.forEach(function(e10) {
      e10.type < 2 ? this.dispatchCea608Packet(e10) : this.dispatchCea708Packet(e10);
    }, this), this.captionPackets_.length = 0, this.flushCCStreams(e9)) : this.flushCCStreams(e9);
  }, Ce2.prototype.flush = function() {
    return this.flushStream("flush");
  }, Ce2.prototype.partialFlush = function() {
    return this.flushStream("partialFlush");
  }, Ce2.prototype.reset = function() {
    this.latestDts_ = null, this.ignoreNextEqualDts_ = false, this.numSameDts_ = 0, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function(e9) {
      e9.reset();
    });
  }, Ce2.prototype.dispatchCea608Packet = function(e9) {
    this.setsTextOrXDSActive(e9) ? this.activeCea608Channel_[e9.type] = null : this.setsChannel1Active(e9) ? this.activeCea608Channel_[e9.type] = 0 : this.setsChannel2Active(e9) && (this.activeCea608Channel_[e9.type] = 1), null !== this.activeCea608Channel_[e9.type] && this.ccStreams_[(e9.type << 1) + this.activeCea608Channel_[e9.type]].push(e9);
  }, Ce2.prototype.setsChannel1Active = function(e9) {
    return 4096 == (30720 & e9.ccData);
  }, Ce2.prototype.setsChannel2Active = function(e9) {
    return 6144 == (30720 & e9.ccData);
  }, Ce2.prototype.setsTextOrXDSActive = function(e9) {
    return 256 == (28928 & e9.ccData) || 4138 == (30974 & e9.ccData) || 6186 == (30974 & e9.ccData);
  }, Ce2.prototype.dispatchCea708Packet = function(e9) {
    this.parse708captions_ && this.cc708Stream_.push(e9);
  };
  var ke2 = { 127: 9834, 4128: 32, 4129: 160, 4133: 8230, 4138: 352, 4140: 338, 4144: 9608, 4145: 8216, 4146: 8217, 4147: 8220, 4148: 8221, 4149: 8226, 4153: 8482, 4154: 353, 4156: 339, 4157: 8480, 4159: 376, 4214: 8539, 4215: 8540, 4216: 8541, 4217: 8542, 4218: 9168, 4219: 9124, 4220: 9123, 4221: 9135, 4222: 9126, 4223: 9121, 4256: 12600 }, Ie2 = function(e9) {
    var t4 = ke2[e9] || e9;
    return 4096 & e9 && e9 === t4 ? "" : String.fromCharCode(t4);
  }, xe2 = function(e9) {
    return 32 <= e9 && e9 <= 127 || 160 <= e9 && e9 <= 255;
  }, Ae2 = function(e9) {
    this.windowNum = e9, this.reset();
  };
  Ae2.prototype.reset = function() {
    this.clearText(), this.pendingNewLine = false, this.winAttr = {}, this.penAttr = {}, this.penLoc = {}, this.penColor = {}, this.visible = 0, this.rowLock = 0, this.columnLock = 0, this.priority = 0, this.relativePositioning = 0, this.anchorVertical = 0, this.anchorHorizontal = 0, this.anchorPoint = 0, this.rowCount = 1, this.virtualRowCount = this.rowCount + 1, this.columnCount = 41, this.windowStyle = 0, this.penStyle = 0;
  }, Ae2.prototype.getText = function() {
    return this.rows.join("\n");
  }, Ae2.prototype.clearText = function() {
    this.rows = [""], this.rowIdx = 0;
  }, Ae2.prototype.newLine = function(e9) {
    for (this.rows.length >= this.virtualRowCount && "function" == typeof this.beforeRowOverflow && this.beforeRowOverflow(e9), this.rows.length > 0 && (this.rows.push(""), this.rowIdx++); this.rows.length > this.virtualRowCount; ) this.rows.shift(), this.rowIdx--;
  }, Ae2.prototype.isEmpty = function() {
    return 0 === this.rows.length || 1 === this.rows.length && "" === this.rows[0];
  }, Ae2.prototype.addText = function(e9) {
    this.rows[this.rowIdx] += e9;
  }, Ae2.prototype.backspace = function() {
    if (!this.isEmpty()) {
      var e9 = this.rows[this.rowIdx];
      this.rows[this.rowIdx] = e9.substr(0, e9.length - 1);
    }
  };
  var De2 = function(e9, t4, i3) {
    this.serviceNum = e9, this.text = "", this.currentWindow = new Ae2(-1), this.windows = [], this.stream = i3, "string" == typeof t4 && this.createTextDecoder(t4);
  };
  De2.prototype.init = function(e9, t4) {
    this.startPts = e9;
    for (var i3 = 0; i3 < 8; i3++) this.windows[i3] = new Ae2(i3), "function" == typeof t4 && (this.windows[i3].beforeRowOverflow = t4);
  }, De2.prototype.setCurrentWindow = function(e9) {
    this.currentWindow = this.windows[e9];
  }, De2.prototype.createTextDecoder = function(e9) {
    if ("undefined" == typeof TextDecoder) this.stream.trigger("log", { level: "warn", message: "The `encoding` option is unsupported without TextDecoder support" });
    else try {
      this.textDecoder_ = new TextDecoder(e9);
    } catch (t4) {
      this.stream.trigger("log", { level: "warn", message: "TextDecoder could not be created with " + e9 + " encoding. " + t4 });
    }
  };
  var Pe2 = function(e9) {
    e9 = e9 || {}, Pe2.prototype.init.call(this);
    var t4, i3 = this, s4 = e9.captionServices || {}, n6 = {};
    Object.keys(s4).forEach((e10) => {
      t4 = s4[e10], /^SERVICE/.test(e10) && (n6[e10] = t4.encoding);
    }), this.serviceEncodings = n6, this.current708Packet = null, this.services = {}, this.push = function(e10) {
      3 === e10.type ? (i3.new708Packet(), i3.add708Bytes(e10)) : (null === i3.current708Packet && i3.new708Packet(), i3.add708Bytes(e10));
    };
  };
  Pe2.prototype = new Ee2(), Pe2.prototype.new708Packet = function() {
    null !== this.current708Packet && this.push708Packet(), this.current708Packet = { data: [], ptsVals: [] };
  }, Pe2.prototype.add708Bytes = function(e9) {
    var t4 = e9.ccData, i3 = t4 >>> 8, s4 = 255 & t4;
    this.current708Packet.ptsVals.push(e9.pts), this.current708Packet.data.push(i3), this.current708Packet.data.push(s4);
  }, Pe2.prototype.push708Packet = function() {
    var e9 = this.current708Packet, t4 = e9.data, i3 = null, s4 = null, n6 = 0, r6 = t4[n6++];
    for (e9.seq = r6 >> 6, e9.sizeCode = 63 & r6; n6 < t4.length; n6++) s4 = 31 & (r6 = t4[n6++]), 7 === (i3 = r6 >> 5) && s4 > 0 && (i3 = r6 = t4[n6++]), this.pushServiceBlock(i3, n6, s4), s4 > 0 && (n6 += s4 - 1);
  }, Pe2.prototype.pushServiceBlock = function(e9, t4, i3) {
    var s4, n6 = t4, r6 = this.current708Packet.data, a6 = this.services[e9];
    for (a6 || (a6 = this.initService(e9, n6)); n6 < t4 + i3 && n6 < r6.length; n6++) s4 = r6[n6], xe2(s4) ? n6 = this.handleText(n6, a6) : 24 === s4 ? n6 = this.multiByteCharacter(n6, a6) : 16 === s4 ? n6 = this.extendedCommands(n6, a6) : 128 <= s4 && s4 <= 135 ? n6 = this.setCurrentWindow(n6, a6) : 152 <= s4 && s4 <= 159 ? n6 = this.defineWindow(n6, a6) : 136 === s4 ? n6 = this.clearWindows(n6, a6) : 140 === s4 ? n6 = this.deleteWindows(n6, a6) : 137 === s4 ? n6 = this.displayWindows(n6, a6) : 138 === s4 ? n6 = this.hideWindows(n6, a6) : 139 === s4 ? n6 = this.toggleWindows(n6, a6) : 151 === s4 ? n6 = this.setWindowAttributes(n6, a6) : 144 === s4 ? n6 = this.setPenAttributes(n6, a6) : 145 === s4 ? n6 = this.setPenColor(n6, a6) : 146 === s4 ? n6 = this.setPenLocation(n6, a6) : 143 === s4 ? a6 = this.reset(n6, a6) : 8 === s4 ? a6.currentWindow.backspace() : 12 === s4 ? a6.currentWindow.clearText() : 13 === s4 ? a6.currentWindow.pendingNewLine = true : 14 === s4 ? a6.currentWindow.clearText() : 141 === s4 && n6++;
  }, Pe2.prototype.extendedCommands = function(e9, t4) {
    var i3 = this.current708Packet.data[++e9];
    return xe2(i3) && (e9 = this.handleText(e9, t4, { isExtended: true })), e9;
  }, Pe2.prototype.getPts = function(e9) {
    return this.current708Packet.ptsVals[Math.floor(e9 / 2)];
  }, Pe2.prototype.initService = function(e9, t4) {
    var i3, s4, n6 = this;
    return (i3 = "SERVICE" + e9) in this.serviceEncodings && (s4 = this.serviceEncodings[i3]), this.services[e9] = new De2(e9, s4, n6), this.services[e9].init(this.getPts(t4), function(t5) {
      n6.flushDisplayed(t5, n6.services[e9]);
    }), this.services[e9];
  }, Pe2.prototype.handleText = function(e9, t4, i3) {
    var s4, n6, r6 = i3 && i3.isExtended, a6 = i3 && i3.isMultiByte, o6 = this.current708Packet.data, l3 = r6 ? 4096 : 0, u4 = o6[e9], h3 = o6[e9 + 1], d4 = t4.currentWindow;
    function c4(e10) {
      return e10.map((e11) => ("0" + (255 & e11).toString(16)).slice(-2)).join("");
    }
    if (a6 ? (n6 = [u4, h3], e9++) : n6 = [u4], t4.textDecoder_ && !r6) s4 = t4.textDecoder_.decode(new Uint8Array(n6));
    else if (a6) {
      const e10 = c4(n6);
      s4 = String.fromCharCode(parseInt(e10, 16));
    } else s4 = Ie2(l3 | u4);
    return d4.pendingNewLine && !d4.isEmpty() && d4.newLine(this.getPts(e9)), d4.pendingNewLine = false, d4.addText(s4), e9;
  }, Pe2.prototype.multiByteCharacter = function(e9, t4) {
    var i3 = this.current708Packet.data, s4 = i3[e9 + 1], n6 = i3[e9 + 2];
    return xe2(s4) && xe2(n6) && (e9 = this.handleText(++e9, t4, { isMultiByte: true })), e9;
  }, Pe2.prototype.setCurrentWindow = function(e9, t4) {
    var i3 = 7 & this.current708Packet.data[e9];
    return t4.setCurrentWindow(i3), e9;
  }, Pe2.prototype.defineWindow = function(e9, t4) {
    var i3 = this.current708Packet.data, s4 = i3[e9], n6 = 7 & s4;
    t4.setCurrentWindow(n6);
    var r6 = t4.currentWindow;
    return s4 = i3[++e9], r6.visible = (32 & s4) >> 5, r6.rowLock = (16 & s4) >> 4, r6.columnLock = (8 & s4) >> 3, r6.priority = 7 & s4, s4 = i3[++e9], r6.relativePositioning = (128 & s4) >> 7, r6.anchorVertical = 127 & s4, s4 = i3[++e9], r6.anchorHorizontal = s4, s4 = i3[++e9], r6.anchorPoint = (240 & s4) >> 4, r6.rowCount = 15 & s4, s4 = i3[++e9], r6.columnCount = 63 & s4, s4 = i3[++e9], r6.windowStyle = (56 & s4) >> 3, r6.penStyle = 7 & s4, r6.virtualRowCount = r6.rowCount + 1, e9;
  }, Pe2.prototype.setWindowAttributes = function(e9, t4) {
    var i3 = this.current708Packet.data, s4 = i3[e9], n6 = t4.currentWindow.winAttr;
    return s4 = i3[++e9], n6.fillOpacity = (192 & s4) >> 6, n6.fillRed = (48 & s4) >> 4, n6.fillGreen = (12 & s4) >> 2, n6.fillBlue = 3 & s4, s4 = i3[++e9], n6.borderType = (192 & s4) >> 6, n6.borderRed = (48 & s4) >> 4, n6.borderGreen = (12 & s4) >> 2, n6.borderBlue = 3 & s4, s4 = i3[++e9], n6.borderType += (128 & s4) >> 5, n6.wordWrap = (64 & s4) >> 6, n6.printDirection = (48 & s4) >> 4, n6.scrollDirection = (12 & s4) >> 2, n6.justify = 3 & s4, s4 = i3[++e9], n6.effectSpeed = (240 & s4) >> 4, n6.effectDirection = (12 & s4) >> 2, n6.displayEffect = 3 & s4, e9;
  }, Pe2.prototype.flushDisplayed = function(e9, t4) {
    for (var i3 = [], s4 = 0; s4 < 8; s4++) t4.windows[s4].visible && !t4.windows[s4].isEmpty() && i3.push(t4.windows[s4].getText());
    t4.endPts = e9, t4.text = i3.join("\n\n"), this.pushCaption(t4), t4.startPts = e9;
  }, Pe2.prototype.pushCaption = function(e9) {
    "" !== e9.text && (this.trigger("data", { startPts: e9.startPts, endPts: e9.endPts, text: e9.text, stream: "cc708_" + e9.serviceNum }), e9.text = "", e9.startPts = e9.endPts);
  }, Pe2.prototype.displayWindows = function(e9, t4) {
    var i3 = this.current708Packet.data[++e9], s4 = this.getPts(e9);
    this.flushDisplayed(s4, t4);
    for (var n6 = 0; n6 < 8; n6++) i3 & 1 << n6 && (t4.windows[n6].visible = 1);
    return e9;
  }, Pe2.prototype.hideWindows = function(e9, t4) {
    var i3 = this.current708Packet.data[++e9], s4 = this.getPts(e9);
    this.flushDisplayed(s4, t4);
    for (var n6 = 0; n6 < 8; n6++) i3 & 1 << n6 && (t4.windows[n6].visible = 0);
    return e9;
  }, Pe2.prototype.toggleWindows = function(e9, t4) {
    var i3 = this.current708Packet.data[++e9], s4 = this.getPts(e9);
    this.flushDisplayed(s4, t4);
    for (var n6 = 0; n6 < 8; n6++) i3 & 1 << n6 && (t4.windows[n6].visible ^= 1);
    return e9;
  }, Pe2.prototype.clearWindows = function(e9, t4) {
    var i3 = this.current708Packet.data[++e9], s4 = this.getPts(e9);
    this.flushDisplayed(s4, t4);
    for (var n6 = 0; n6 < 8; n6++) i3 & 1 << n6 && t4.windows[n6].clearText();
    return e9;
  }, Pe2.prototype.deleteWindows = function(e9, t4) {
    var i3 = this.current708Packet.data[++e9], s4 = this.getPts(e9);
    this.flushDisplayed(s4, t4);
    for (var n6 = 0; n6 < 8; n6++) i3 & 1 << n6 && t4.windows[n6].reset();
    return e9;
  }, Pe2.prototype.setPenAttributes = function(e9, t4) {
    var i3 = this.current708Packet.data, s4 = i3[e9], n6 = t4.currentWindow.penAttr;
    return s4 = i3[++e9], n6.textTag = (240 & s4) >> 4, n6.offset = (12 & s4) >> 2, n6.penSize = 3 & s4, s4 = i3[++e9], n6.italics = (128 & s4) >> 7, n6.underline = (64 & s4) >> 6, n6.edgeType = (56 & s4) >> 3, n6.fontStyle = 7 & s4, e9;
  }, Pe2.prototype.setPenColor = function(e9, t4) {
    var i3 = this.current708Packet.data, s4 = i3[e9], n6 = t4.currentWindow.penColor;
    return s4 = i3[++e9], n6.fgOpacity = (192 & s4) >> 6, n6.fgRed = (48 & s4) >> 4, n6.fgGreen = (12 & s4) >> 2, n6.fgBlue = 3 & s4, s4 = i3[++e9], n6.bgOpacity = (192 & s4) >> 6, n6.bgRed = (48 & s4) >> 4, n6.bgGreen = (12 & s4) >> 2, n6.bgBlue = 3 & s4, s4 = i3[++e9], n6.edgeRed = (48 & s4) >> 4, n6.edgeGreen = (12 & s4) >> 2, n6.edgeBlue = 3 & s4, e9;
  }, Pe2.prototype.setPenLocation = function(e9, t4) {
    var i3 = this.current708Packet.data, s4 = i3[e9], n6 = t4.currentWindow.penLoc;
    return t4.currentWindow.pendingNewLine = true, s4 = i3[++e9], n6.row = 15 & s4, s4 = i3[++e9], n6.column = 63 & s4, e9;
  }, Pe2.prototype.reset = function(e9, t4) {
    var i3 = this.getPts(e9);
    return this.flushDisplayed(i3, t4), this.initService(t4.serviceNum, e9);
  };
  var Le2 = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 304: 174, 305: 176, 306: 189, 307: 191, 308: 8482, 309: 162, 310: 163, 311: 9834, 312: 224, 313: 160, 314: 232, 315: 226, 316: 234, 317: 238, 318: 244, 319: 251, 544: 193, 545: 201, 546: 211, 547: 218, 548: 220, 549: 252, 550: 8216, 551: 161, 552: 42, 553: 39, 554: 8212, 555: 169, 556: 8480, 557: 8226, 558: 8220, 559: 8221, 560: 192, 561: 194, 562: 199, 563: 200, 564: 202, 565: 203, 566: 235, 567: 206, 568: 207, 569: 239, 570: 212, 571: 217, 572: 249, 573: 219, 574: 171, 575: 187, 800: 195, 801: 227, 802: 205, 803: 204, 804: 236, 805: 210, 806: 242, 807: 213, 808: 245, 809: 123, 810: 125, 811: 92, 812: 94, 813: 95, 814: 124, 815: 126, 816: 196, 817: 228, 818: 214, 819: 246, 820: 223, 821: 165, 822: 164, 823: 9474, 824: 197, 825: 229, 826: 216, 827: 248, 828: 9484, 829: 9488, 830: 9492, 831: 9496 }, Oe2 = function(e9) {
    return null === e9 ? "" : (e9 = Le2[e9] || e9, String.fromCharCode(e9));
  }, Ne2 = 14, Re2 = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152], Me2 = function() {
    for (var e9 = [], t4 = Ne2 + 1; t4--; ) e9.push({ text: "", indent: 0, offset: 0 });
    return e9;
  }, Ue2 = function(e9, t4) {
    Ue2.prototype.init.call(this), this.field_ = e9 || 0, this.dataChannel_ = t4 || 0, this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)), this.setConstants(), this.reset(), this.push = function(e10) {
      var t5, i3, s4, n6, r6;
      if ((t5 = 32639 & e10.ccData) !== this.lastControlCode_) {
        if (4096 == (61440 & t5) ? this.lastControlCode_ = t5 : t5 !== this.PADDING_ && (this.lastControlCode_ = null), s4 = t5 >>> 8, n6 = 255 & t5, t5 !== this.PADDING_) if (t5 === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
        else if (t5 === this.END_OF_CAPTION_) this.mode_ = "popOn", this.clearFormatting(e10.pts), this.flushDisplayed(e10.pts), i3 = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = i3, this.startPts_ = e10.pts;
        else if (t5 === this.ROLL_UP_2_ROWS_) this.rollUpRows_ = 2, this.setRollUp(e10.pts);
        else if (t5 === this.ROLL_UP_3_ROWS_) this.rollUpRows_ = 3, this.setRollUp(e10.pts);
        else if (t5 === this.ROLL_UP_4_ROWS_) this.rollUpRows_ = 4, this.setRollUp(e10.pts);
        else if (t5 === this.CARRIAGE_RETURN_) this.clearFormatting(e10.pts), this.flushDisplayed(e10.pts), this.shiftRowsUp_(), this.startPts_ = e10.pts;
        else if (t5 === this.BACKSPACE_) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_].text = this.nonDisplayed_[this.row_].text.slice(0, -1) : this.displayed_[this.row_].text = this.displayed_[this.row_].text.slice(0, -1);
        else if (t5 === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(e10.pts), this.displayed_ = Me2();
        else if (t5 === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = Me2();
        else if (t5 === this.RESUME_DIRECT_CAPTIONING_) "paintOn" !== this.mode_ && (this.flushDisplayed(e10.pts), this.displayed_ = Me2()), this.mode_ = "paintOn", this.startPts_ = e10.pts;
        else if (this.isSpecialCharacter(s4, n6)) r6 = Oe2((s4 = (3 & s4) << 8) | n6), this[this.mode_](e10.pts, r6), this.column_++;
        else if (this.isExtCharacter(s4, n6)) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_].text = this.nonDisplayed_[this.row_].text.slice(0, -1) : this.displayed_[this.row_].text = this.displayed_[this.row_].text.slice(0, -1), r6 = Oe2((s4 = (3 & s4) << 8) | n6), this[this.mode_](e10.pts, r6), this.column_++;
        else if (this.isMidRowCode(s4, n6)) this.clearFormatting(e10.pts), this[this.mode_](e10.pts, " "), this.column_++, 14 & ~n6 || this.addFormatting(e10.pts, ["i"]), 1 & ~n6 || this.addFormatting(e10.pts, ["u"]);
        else if (this.isOffsetControlCode(s4, n6)) {
          const e11 = 3 & n6;
          this.nonDisplayed_[this.row_].offset = e11, this.column_ += e11;
        } else if (this.isPAC(s4, n6)) {
          var a6 = Re2.indexOf(7968 & t5);
          if ("rollUp" === this.mode_ && (a6 - this.rollUpRows_ + 1 < 0 && (a6 = this.rollUpRows_ - 1), this.setRollUp(e10.pts, a6)), a6 !== this.row_ && a6 >= 0 && a6 <= 14 && (this.clearFormatting(e10.pts), this.row_ = a6), 1 & n6 && -1 === this.formatting_.indexOf("u") && this.addFormatting(e10.pts, ["u"]), !(16 & ~t5)) {
            const e11 = (14 & t5) >> 1;
            this.column_ = 4 * e11, this.nonDisplayed_[this.row_].indent += e11;
          }
          this.isColorPAC(n6) && (14 & ~n6 || this.addFormatting(e10.pts, ["i"]));
        } else this.isNormalChar(s4) && (0 === n6 && (n6 = null), r6 = Oe2(s4), r6 += Oe2(n6), this[this.mode_](e10.pts, r6), this.column_ += r6.length);
      } else this.lastControlCode_ = null;
    };
  };
  Ue2.prototype = new Ee2(), Ue2.prototype.flushDisplayed = function(e9) {
    const t4 = (e10) => {
      this.trigger("log", { level: "warn", message: "Skipping a malformed 608 caption at index " + e10 + "." });
    }, i3 = [];
    this.displayed_.forEach((e10, s4) => {
      if (e10 && e10.text && e10.text.length) {
        try {
          e10.text = e10.text.trim();
        } catch (n6) {
          t4(s4);
        }
        e10.text.length && i3.push({ text: e10.text, line: s4 + 1, position: 10 + Math.min(70, 10 * e10.indent) + 2.5 * e10.offset });
      } else null == e10 && t4(s4);
    }), i3.length && this.trigger("data", { startPts: this.startPts_, endPts: e9, content: i3, stream: this.name_ });
  }, Ue2.prototype.reset = function() {
    this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = Me2(), this.nonDisplayed_ = Me2(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = Ne2, this.rollUpRows_ = 2, this.formatting_ = [];
  }, Ue2.prototype.setConstants = function() {
    0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_;
  }, Ue2.prototype.isSpecialCharacter = function(e9, t4) {
    return e9 === this.EXT_ && t4 >= 48 && t4 <= 63;
  }, Ue2.prototype.isExtCharacter = function(e9, t4) {
    return (e9 === this.EXT_ + 1 || e9 === this.EXT_ + 2) && t4 >= 32 && t4 <= 63;
  }, Ue2.prototype.isMidRowCode = function(e9, t4) {
    return e9 === this.EXT_ && t4 >= 32 && t4 <= 47;
  }, Ue2.prototype.isOffsetControlCode = function(e9, t4) {
    return e9 === this.OFFSET_ && t4 >= 33 && t4 <= 35;
  }, Ue2.prototype.isPAC = function(e9, t4) {
    return e9 >= this.BASE_ && e9 < this.BASE_ + 8 && t4 >= 64 && t4 <= 127;
  }, Ue2.prototype.isColorPAC = function(e9) {
    return e9 >= 64 && e9 <= 79 || e9 >= 96 && e9 <= 127;
  }, Ue2.prototype.isNormalChar = function(e9) {
    return e9 >= 32 && e9 <= 127;
  }, Ue2.prototype.setRollUp = function(e9, t4) {
    if ("rollUp" !== this.mode_ && (this.row_ = Ne2, this.mode_ = "rollUp", this.flushDisplayed(e9), this.nonDisplayed_ = Me2(), this.displayed_ = Me2()), void 0 !== t4 && t4 !== this.row_) for (var i3 = 0; i3 < this.rollUpRows_; i3++) this.displayed_[t4 - i3] = this.displayed_[this.row_ - i3], this.displayed_[this.row_ - i3] = { text: "", indent: 0, offset: 0 };
    void 0 === t4 && (t4 = this.row_), this.topRow_ = t4 - this.rollUpRows_ + 1;
  }, Ue2.prototype.addFormatting = function(e9, t4) {
    this.formatting_ = this.formatting_.concat(t4);
    var i3 = t4.reduce(function(e10, t5) {
      return e10 + "<" + t5 + ">";
    }, "");
    this[this.mode_](e9, i3);
  }, Ue2.prototype.clearFormatting = function(e9) {
    if (this.formatting_.length) {
      var t4 = this.formatting_.reverse().reduce(function(e10, t5) {
        return e10 + "</" + t5 + ">";
      }, "");
      this.formatting_ = [], this[this.mode_](e9, t4);
    }
  }, Ue2.prototype.popOn = function(e9, t4) {
    var i3 = this.nonDisplayed_[this.row_].text;
    i3 += t4, this.nonDisplayed_[this.row_].text = i3;
  }, Ue2.prototype.rollUp = function(e9, t4) {
    var i3 = this.displayed_[this.row_].text;
    i3 += t4, this.displayed_[this.row_].text = i3;
  }, Ue2.prototype.shiftRowsUp_ = function() {
    var e9;
    for (e9 = 0; e9 < this.topRow_; e9++) this.displayed_[e9] = { text: "", indent: 0, offset: 0 };
    for (e9 = this.row_ + 1; e9 < Ne2 + 1; e9++) this.displayed_[e9] = { text: "", indent: 0, offset: 0 };
    for (e9 = this.topRow_; e9 < this.row_; e9++) this.displayed_[e9] = this.displayed_[e9 + 1];
    this.displayed_[this.row_] = { text: "", indent: 0, offset: 0 };
  }, Ue2.prototype.paintOn = function(e9, t4) {
    var i3 = this.displayed_[this.row_].text;
    i3 += t4, this.displayed_[this.row_].text = i3;
  };
  var Be2 = { CaptionStream: Ce2, Cea608Stream: Ue2, Cea708Stream: Pe2 }, Fe2 = { H264_STREAM_TYPE: 27, ADTS_STREAM_TYPE: 15, METADATA_STREAM_TYPE: 21 }, qe2 = $2, je2 = 8589934592, $e2 = 4294967296, He2 = "shared", Ve2 = function(e9, t4) {
    var i3 = 1;
    for (e9 > t4 && (i3 = -1); Math.abs(t4 - e9) > $e2; ) e9 += i3 * je2;
    return e9;
  }, ze2 = function(e9) {
    var t4, i3;
    ze2.prototype.init.call(this), this.type_ = e9 || He2, this.push = function(e10) {
      "metadata" !== e10.type ? this.type_ !== He2 && e10.type !== this.type_ || (void 0 === i3 && (i3 = e10.dts), e10.dts = Ve2(e10.dts, i3), e10.pts = Ve2(e10.pts, i3), t4 = e10.dts, this.trigger("data", e10)) : this.trigger("data", e10);
    }, this.flush = function() {
      i3 = t4, this.trigger("done");
    }, this.endTimeline = function() {
      this.flush(), this.trigger("endedtimeline");
    }, this.discontinuity = function() {
      i3 = void 0, t4 = void 0;
    }, this.reset = function() {
      this.discontinuity(), this.trigger("reset");
    };
  };
  ze2.prototype = new qe2();
  var We2, Ge2 = { TimestampRolloverStream: ze2, handleRollover: Ve2 }, Xe2 = (e9, t4, i3) => {
    if (!e9) return -1;
    for (var s4 = i3; s4 < e9.length; s4++) if (e9[s4] === t4) return s4;
    return -1;
  }, Ke2 = { typedArrayIndexOf: Xe2 }.typedArrayIndexOf, Ye2 = { Iso88591: 0, Utf16: 1, Utf16be: 2, Utf8: 3 }, Qe2 = function(e9, t4, i3) {
    var s4, n6 = "";
    for (s4 = t4; s4 < i3; s4++) n6 += "%" + ("00" + e9[s4].toString(16)).slice(-2);
    return n6;
  }, Je2 = function(e9, t4, i3) {
    return decodeURIComponent(Qe2(e9, t4, i3));
  }, Ze2 = function(e9, t4, i3) {
    return unescape(Qe2(e9, t4, i3));
  }, et2 = function(e9) {
    return e9[0] << 21 | e9[1] << 14 | e9[2] << 7 | e9[3];
  }, tt2 = { APIC: function(e9) {
    var t4, i3, s4 = 1, n6 = "-->";
    e9.data[0] === Ye2.Utf8 && ((t4 = Ke2(e9.data, 0, s4)) < 0 || (e9.mimeType = Ze2(e9.data, s4, t4), s4 = t4 + 1, e9.pictureType = e9.data[s4], s4++, (i3 = Ke2(e9.data, 0, s4)) < 0 || (e9.description = Je2(e9.data, s4, i3), s4 = i3 + 1, e9.mimeType === n6 ? e9.url = Ze2(e9.data, s4, e9.data.length) : e9.pictureData = e9.data.subarray(s4, e9.data.length))));
  }, "T*": function(e9) {
    e9.data[0] === Ye2.Utf8 && (e9.value = Je2(e9.data, 1, e9.data.length).replace(/\0*$/, ""), e9.values = e9.value.split("\0"));
  }, TXXX: function(e9) {
    var t4;
    e9.data[0] === Ye2.Utf8 && -1 !== (t4 = Ke2(e9.data, 0, 1)) && (e9.description = Je2(e9.data, 1, t4), e9.value = Je2(e9.data, t4 + 1, e9.data.length).replace(/\0*$/, ""), e9.data = e9.value);
  }, "W*": function(e9) {
    e9.url = Ze2(e9.data, 0, e9.data.length).replace(/\0.*$/, "");
  }, WXXX: function(e9) {
    var t4;
    e9.data[0] === Ye2.Utf8 && -1 !== (t4 = Ke2(e9.data, 0, 1)) && (e9.description = Je2(e9.data, 1, t4), e9.url = Ze2(e9.data, t4 + 1, e9.data.length).replace(/\0.*$/, ""));
  }, PRIV: function(e9) {
    var t4;
    for (t4 = 0; t4 < e9.data.length; t4++) if (0 === e9.data[t4]) {
      e9.owner = Ze2(e9.data, 0, t4);
      break;
    }
    e9.privateData = e9.data.subarray(t4 + 1), e9.data = e9.privateData;
  } }, it2 = { parseId3Frames: function(e9) {
    var t4, i3 = 10, s4 = 0, n6 = [];
    if (!(e9.length < 10 || e9[0] !== "I".charCodeAt(0) || e9[1] !== "D".charCodeAt(0) || e9[2] !== "3".charCodeAt(0))) {
      s4 = et2(e9.subarray(6, 10)), s4 += 10, 64 & e9[5] && (i3 += 4, i3 += et2(e9.subarray(10, 14)), s4 -= et2(e9.subarray(16, 20)));
      do {
        if ((t4 = et2(e9.subarray(i3 + 4, i3 + 8))) < 1) break;
        var r6 = { id: String.fromCharCode(e9[i3], e9[i3 + 1], e9[i3 + 2], e9[i3 + 3]), data: e9.subarray(i3 + 10, i3 + t4 + 10) };
        r6.key = r6.id, tt2[r6.id] ? tt2[r6.id](r6) : "T" === r6.id[0] ? tt2["T*"](r6) : "W" === r6.id[0] && tt2["W*"](r6), n6.push(r6), i3 += 10, i3 += t4;
      } while (i3 < s4);
      return n6;
    }
  }, parseSyncSafeInteger: et2, frameParsers: tt2 }, st2 = Fe2, nt2 = it2;
  (We2 = function(e9) {
    var t4, i3 = { descriptor: e9 && e9.descriptor }, s4 = 0, n6 = [], r6 = 0;
    if (We2.prototype.init.call(this), this.dispatchType = st2.METADATA_STREAM_TYPE.toString(16), i3.descriptor) for (t4 = 0; t4 < i3.descriptor.length; t4++) this.dispatchType += ("00" + i3.descriptor[t4].toString(16)).slice(-2);
    this.push = function(e10) {
      var t5, i4, a6, o6, l3;
      if ("timed-metadata" === e10.type) {
        if (e10.dataAlignmentIndicator && (r6 = 0, n6.length = 0), 0 === n6.length && (e10.data.length < 10 || e10.data[0] !== "I".charCodeAt(0) || e10.data[1] !== "D".charCodeAt(0) || e10.data[2] !== "3".charCodeAt(0))) this.trigger("log", { level: "warn", message: "Skipping unrecognized metadata packet" });
        else if (n6.push(e10), r6 += e10.data.byteLength, 1 === n6.length && (s4 = nt2.parseSyncSafeInteger(e10.data.subarray(6, 10)), s4 += 10), !(r6 < s4)) {
          for (t5 = { data: new Uint8Array(s4), frames: [], pts: n6[0].pts, dts: n6[0].dts }, l3 = 0; l3 < s4; ) t5.data.set(n6[0].data.subarray(0, s4 - l3), l3), l3 += n6[0].data.byteLength, r6 -= n6[0].data.byteLength, n6.shift();
          i4 = 10, 64 & t5.data[5] && (i4 += 4, i4 += nt2.parseSyncSafeInteger(t5.data.subarray(10, 14)), s4 -= nt2.parseSyncSafeInteger(t5.data.subarray(16, 20)));
          do {
            if ((a6 = nt2.parseSyncSafeInteger(t5.data.subarray(i4 + 4, i4 + 8))) < 1) {
              this.trigger("log", { level: "warn", message: "Malformed ID3 frame encountered. Skipping remaining metadata parsing." });
              break;
            }
            if ((o6 = { id: String.fromCharCode(t5.data[i4], t5.data[i4 + 1], t5.data[i4 + 2], t5.data[i4 + 3]), data: t5.data.subarray(i4 + 10, i4 + a6 + 10) }).key = o6.id, nt2.frameParsers[o6.id] ? nt2.frameParsers[o6.id](o6) : "T" === o6.id[0] ? nt2.frameParsers["T*"](o6) : "W" === o6.id[0] && nt2.frameParsers["W*"](o6), "com.apple.streaming.transportStreamTimestamp" === o6.owner) {
              var u4 = o6.data, h3 = (1 & u4[3]) << 30 | u4[4] << 22 | u4[5] << 14 | u4[6] << 6 | u4[7] >>> 2;
              h3 *= 4, h3 += 3 & u4[7], o6.timeStamp = h3, void 0 === t5.pts && void 0 === t5.dts && (t5.pts = o6.timeStamp, t5.dts = o6.timeStamp), this.trigger("timestamp", o6);
            }
            t5.frames.push(o6), i4 += 10, i4 += a6;
          } while (i4 < s4);
          this.trigger("data", t5);
        }
      }
    };
  }).prototype = new $2();
  var rt2, at2, ot2, lt2 = We2, ut2 = $2, ht2 = Be2, dt2 = Fe2, ct2 = Ge2.TimestampRolloverStream, pt2 = 188, mt2 = 71;
  (rt2 = function() {
    var e9 = new Uint8Array(pt2), t4 = 0;
    rt2.prototype.init.call(this), this.push = function(i3) {
      var s4, n6 = 0, r6 = pt2;
      for (t4 ? ((s4 = new Uint8Array(i3.byteLength + t4)).set(e9.subarray(0, t4)), s4.set(i3, t4), t4 = 0) : s4 = i3; r6 < s4.byteLength; ) s4[n6] !== mt2 || s4[r6] !== mt2 ? (n6++, r6++) : (this.trigger("data", s4.subarray(n6, r6)), n6 += pt2, r6 += pt2);
      n6 < s4.byteLength && (e9.set(s4.subarray(n6), 0), t4 = s4.byteLength - n6);
    }, this.flush = function() {
      t4 === pt2 && e9[0] === mt2 && (this.trigger("data", e9), t4 = 0), this.trigger("done");
    }, this.endTimeline = function() {
      this.flush(), this.trigger("endedtimeline");
    }, this.reset = function() {
      t4 = 0, this.trigger("reset");
    };
  }).prototype = new ut2(), at2 = function() {
    var e9, t4, i3, s4;
    at2.prototype.init.call(this), s4 = this, this.packetsWaitingForPmt = [], this.programMapTable = void 0, e9 = function(e10, s5) {
      var n6 = 0;
      s5.payloadUnitStartIndicator && (n6 += e10[n6] + 1), "pat" === s5.type ? t4(e10.subarray(n6), s5) : i3(e10.subarray(n6), s5);
    }, t4 = function(e10, t5) {
      t5.section_number = e10[7], t5.last_section_number = e10[8], s4.pmtPid = (31 & e10[10]) << 8 | e10[11], t5.pmtPid = s4.pmtPid;
    }, i3 = function(e10, t5) {
      var i4, n6;
      if (1 & e10[5]) {
        for (s4.programMapTable = { video: null, audio: null, "timed-metadata": {} }, i4 = 3 + ((15 & e10[1]) << 8 | e10[2]) - 4, n6 = 12 + ((15 & e10[10]) << 8 | e10[11]); n6 < i4; ) {
          var r6 = e10[n6], a6 = (31 & e10[n6 + 1]) << 8 | e10[n6 + 2];
          r6 === dt2.H264_STREAM_TYPE && null === s4.programMapTable.video ? s4.programMapTable.video = a6 : r6 === dt2.ADTS_STREAM_TYPE && null === s4.programMapTable.audio ? s4.programMapTable.audio = a6 : r6 === dt2.METADATA_STREAM_TYPE && (s4.programMapTable["timed-metadata"][a6] = r6), n6 += 5 + ((15 & e10[n6 + 3]) << 8 | e10[n6 + 4]);
        }
        t5.programMapTable = s4.programMapTable;
      }
    }, this.push = function(t5) {
      var i4 = {}, s5 = 4;
      if (i4.payloadUnitStartIndicator = !!(64 & t5[1]), i4.pid = 31 & t5[1], i4.pid <<= 8, i4.pid |= t5[2], (48 & t5[3]) >>> 4 > 1 && (s5 += t5[s5] + 1), 0 === i4.pid) i4.type = "pat", e9(t5.subarray(s5), i4), this.trigger("data", i4);
      else if (i4.pid === this.pmtPid) for (i4.type = "pmt", e9(t5.subarray(s5), i4), this.trigger("data", i4); this.packetsWaitingForPmt.length; ) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
      else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([t5, s5, i4]) : this.processPes_(t5, s5, i4);
    }, this.processPes_ = function(e10, t5, i4) {
      i4.pid === this.programMapTable.video ? i4.streamType = dt2.H264_STREAM_TYPE : i4.pid === this.programMapTable.audio ? i4.streamType = dt2.ADTS_STREAM_TYPE : i4.streamType = this.programMapTable["timed-metadata"][i4.pid], i4.type = "pes", i4.data = e10.subarray(t5), this.trigger("data", i4);
    };
  }, at2.prototype = new ut2(), at2.STREAM_TYPES = { h264: 27, adts: 15 }, ot2 = function() {
    var e9, t4 = this, i3 = false, s4 = { data: [], size: 0 }, n6 = { data: [], size: 0 }, r6 = { data: [], size: 0 }, a6 = function(e10, t5) {
      var i4;
      const s5 = e10[0] << 16 | e10[1] << 8 | e10[2];
      t5.data = new Uint8Array(), 1 === s5 && (t5.packetLength = 6 + (e10[4] << 8 | e10[5]), t5.dataAlignmentIndicator = !!(4 & e10[6]), 192 & (i4 = e10[7]) && (t5.pts = (14 & e10[9]) << 27 | (255 & e10[10]) << 20 | (254 & e10[11]) << 12 | (255 & e10[12]) << 5 | (254 & e10[13]) >>> 3, t5.pts *= 4, t5.pts += (6 & e10[13]) >>> 1, t5.dts = t5.pts, 64 & i4 && (t5.dts = (14 & e10[14]) << 27 | (255 & e10[15]) << 20 | (254 & e10[16]) << 12 | (255 & e10[17]) << 5 | (254 & e10[18]) >>> 3, t5.dts *= 4, t5.dts += (6 & e10[18]) >>> 1)), t5.data = e10.subarray(9 + e10[8]));
    }, o6 = function(e10, i4, s5) {
      var n7, r7 = new Uint8Array(e10.size), o7 = { type: i4 }, l3 = 0, u4 = 0, h3 = false;
      if (e10.data.length && !(e10.size < 9)) {
        for (o7.trackId = e10.data[0].pid, l3 = 0; l3 < e10.data.length; l3++) n7 = e10.data[l3], r7.set(n7.data, u4), u4 += n7.data.byteLength;
        a6(r7, o7), h3 = "video" === i4 || o7.packetLength <= e10.size, (s5 || h3) && (e10.size = 0, e10.data.length = 0), h3 && t4.trigger("data", o7);
      }
    };
    ot2.prototype.init.call(this), this.push = function(a7) {
      ({ pat: function() {
      }, pes: function() {
        var e10, t5;
        switch (a7.streamType) {
          case dt2.H264_STREAM_TYPE:
            e10 = s4, t5 = "video";
            break;
          case dt2.ADTS_STREAM_TYPE:
            e10 = n6, t5 = "audio";
            break;
          case dt2.METADATA_STREAM_TYPE:
            e10 = r6, t5 = "timed-metadata";
            break;
          default:
            return;
        }
        a7.payloadUnitStartIndicator && o6(e10, t5, true), e10.data.push(a7), e10.size += a7.data.byteLength;
      }, pmt: function() {
        var s5 = { type: "metadata", tracks: [] };
        null !== (e9 = a7.programMapTable).video && s5.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +e9.video, codec: "avc", type: "video" }), null !== e9.audio && s5.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +e9.audio, codec: "adts", type: "audio" }), i3 = true, t4.trigger("data", s5);
      } })[a7.type]();
    }, this.reset = function() {
      s4.size = 0, s4.data.length = 0, n6.size = 0, n6.data.length = 0, this.trigger("reset");
    }, this.flushStreams_ = function() {
      o6(s4, "video"), o6(n6, "audio"), o6(r6, "timed-metadata");
    }, this.flush = function() {
      if (!i3 && e9) {
        var s5 = { type: "metadata", tracks: [] };
        null !== e9.video && s5.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +e9.video, codec: "avc", type: "video" }), null !== e9.audio && s5.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +e9.audio, codec: "adts", type: "audio" }), t4.trigger("data", s5);
      }
      i3 = false, this.flushStreams_(), this.trigger("done");
    };
  }, ot2.prototype = new ut2();
  var gt2 = { PAT_PID: 0, MP2T_PACKET_LENGTH: pt2, TransportPacketStream: rt2, TransportParseStream: at2, ElementaryStream: ot2, TimestampRolloverStream: ct2, CaptionStream: ht2.CaptionStream, Cea608Stream: ht2.Cea608Stream, Cea708Stream: ht2.Cea708Stream, MetadataStream: lt2 };
  for (var ft2 in dt2) dt2.hasOwnProperty(ft2) && (gt2[ft2] = dt2[ft2]);
  var yt2, _t2 = gt2, bt2 = $2, vt2 = ce2.ONE_SECOND_IN_TS, Tt2 = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
  (yt2 = function(e9) {
    var t4, i3 = 0;
    yt2.prototype.init.call(this), this.skipWarn_ = function(e10, t5) {
      this.trigger("log", { level: "warn", message: `adts skiping bytes ${e10} to ${t5} in frame ${i3} outside syncword` });
    }, this.push = function(s4) {
      var n6, r6, a6, o6, l3, u4 = 0;
      if (e9 || (i3 = 0), "audio" === s4.type) {
        var h3;
        for (t4 && t4.length ? (a6 = t4, (t4 = new Uint8Array(a6.byteLength + s4.data.byteLength)).set(a6), t4.set(s4.data, a6.byteLength)) : t4 = s4.data; u4 + 7 < t4.length; ) if (255 === t4[u4] && 240 == (246 & t4[u4 + 1])) {
          if ("number" == typeof h3 && (this.skipWarn_(h3, u4), h3 = null), r6 = 2 * (1 & ~t4[u4 + 1]), n6 = (3 & t4[u4 + 3]) << 11 | t4[u4 + 4] << 3 | (224 & t4[u4 + 5]) >> 5, l3 = (o6 = 1024 * (1 + (3 & t4[u4 + 6]))) * vt2 / Tt2[(60 & t4[u4 + 2]) >>> 2], t4.byteLength - u4 < n6) break;
          this.trigger("data", { pts: s4.pts + i3 * l3, dts: s4.dts + i3 * l3, sampleCount: o6, audioobjecttype: 1 + (t4[u4 + 2] >>> 6 & 3), channelcount: (1 & t4[u4 + 2]) << 2 | (192 & t4[u4 + 3]) >>> 6, samplerate: Tt2[(60 & t4[u4 + 2]) >>> 2], samplingfrequencyindex: (60 & t4[u4 + 2]) >>> 2, samplesize: 16, data: t4.subarray(u4 + 7 + r6, u4 + n6) }), i3++, u4 += n6;
        } else "number" != typeof h3 && (h3 = u4), u4++;
        "number" == typeof h3 && (this.skipWarn_(h3, u4), h3 = null), t4 = t4.subarray(u4);
      }
    }, this.flush = function() {
      i3 = 0, this.trigger("done");
    }, this.reset = function() {
      t4 = void 0, this.trigger("reset");
    }, this.endTimeline = function() {
      t4 = void 0, this.trigger("endedtimeline");
    };
  }).prototype = new bt2();
  var St2, Et2, wt2, Ct2 = yt2, kt2 = $2, It2 = function(e9) {
    var t4 = e9.byteLength, i3 = 0, s4 = 0;
    this.length = function() {
      return 8 * t4;
    }, this.bitsAvailable = function() {
      return 8 * t4 + s4;
    }, this.loadWord = function() {
      var n6 = e9.byteLength - t4, r6 = new Uint8Array(4), a6 = Math.min(4, t4);
      if (0 === a6) throw new Error("no bytes available");
      r6.set(e9.subarray(n6, n6 + a6)), i3 = new DataView(r6.buffer).getUint32(0), s4 = 8 * a6, t4 -= a6;
    }, this.skipBits = function(e10) {
      var n6;
      s4 > e10 ? (i3 <<= e10, s4 -= e10) : (e10 -= s4, e10 -= 8 * (n6 = Math.floor(e10 / 8)), t4 -= n6, this.loadWord(), i3 <<= e10, s4 -= e10);
    }, this.readBits = function(e10) {
      var n6 = Math.min(s4, e10), r6 = i3 >>> 32 - n6;
      return (s4 -= n6) > 0 ? i3 <<= n6 : t4 > 0 && this.loadWord(), (n6 = e10 - n6) > 0 ? r6 << n6 | this.readBits(n6) : r6;
    }, this.skipLeadingZeros = function() {
      var e10;
      for (e10 = 0; e10 < s4; ++e10) if (i3 & 2147483648 >>> e10) return i3 <<= e10, s4 -= e10, e10;
      return this.loadWord(), e10 + this.skipLeadingZeros();
    }, this.skipUnsignedExpGolomb = function() {
      this.skipBits(1 + this.skipLeadingZeros());
    }, this.skipExpGolomb = function() {
      this.skipBits(1 + this.skipLeadingZeros());
    }, this.readUnsignedExpGolomb = function() {
      var e10 = this.skipLeadingZeros();
      return this.readBits(e10 + 1) - 1;
    }, this.readExpGolomb = function() {
      var e10 = this.readUnsignedExpGolomb();
      return 1 & e10 ? 1 + e10 >>> 1 : -1 * (e10 >>> 1);
    }, this.readBoolean = function() {
      return 1 === this.readBits(1);
    }, this.readUnsignedByte = function() {
      return this.readBits(8);
    }, this.loadWord();
  };
  (Et2 = function() {
    var e9, t4, i3 = 0;
    Et2.prototype.init.call(this), this.push = function(s4) {
      var n6;
      t4 ? ((n6 = new Uint8Array(t4.byteLength + s4.data.byteLength)).set(t4), n6.set(s4.data, t4.byteLength), t4 = n6) : t4 = s4.data;
      for (var r6 = t4.byteLength; i3 < r6 - 3; i3++) if (1 === t4[i3 + 2]) {
        e9 = i3 + 5;
        break;
      }
      for (; e9 < r6; ) switch (t4[e9]) {
        case 0:
          if (0 !== t4[e9 - 1]) {
            e9 += 2;
            break;
          }
          if (0 !== t4[e9 - 2]) {
            e9++;
            break;
          }
          i3 + 3 !== e9 - 2 && this.trigger("data", t4.subarray(i3 + 3, e9 - 2));
          do {
            e9++;
          } while (1 !== t4[e9] && e9 < r6);
          i3 = e9 - 2, e9 += 3;
          break;
        case 1:
          if (0 !== t4[e9 - 1] || 0 !== t4[e9 - 2]) {
            e9 += 3;
            break;
          }
          this.trigger("data", t4.subarray(i3 + 3, e9 - 2)), i3 = e9 - 2, e9 += 3;
          break;
        default:
          e9 += 3;
      }
      t4 = t4.subarray(i3), e9 -= i3, i3 = 0;
    }, this.reset = function() {
      t4 = null, i3 = 0, this.trigger("reset");
    }, this.flush = function() {
      t4 && t4.byteLength > 3 && this.trigger("data", t4.subarray(i3 + 3)), t4 = null, i3 = 0, this.trigger("done");
    }, this.endTimeline = function() {
      this.flush(), this.trigger("endedtimeline");
    };
  }).prototype = new kt2(), wt2 = { 100: true, 110: true, 122: true, 244: true, 44: true, 83: true, 86: true, 118: true, 128: true, 138: true, 139: true, 134: true }, St2 = function() {
    var e9, t4, i3, s4, n6, r6, a6, o6 = new Et2();
    St2.prototype.init.call(this), e9 = this, this.push = function(e10) {
      "video" === e10.type && (t4 = e10.trackId, i3 = e10.pts, s4 = e10.dts, o6.push(e10));
    }, o6.on("data", function(a7) {
      var o7 = { trackId: t4, pts: i3, dts: s4, data: a7, nalUnitTypeCode: 31 & a7[0] };
      switch (o7.nalUnitTypeCode) {
        case 5:
          o7.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
          break;
        case 6:
          o7.nalUnitType = "sei_rbsp", o7.escapedRBSP = n6(a7.subarray(1));
          break;
        case 7:
          o7.nalUnitType = "seq_parameter_set_rbsp", o7.escapedRBSP = n6(a7.subarray(1)), o7.config = r6(o7.escapedRBSP);
          break;
        case 8:
          o7.nalUnitType = "pic_parameter_set_rbsp";
          break;
        case 9:
          o7.nalUnitType = "access_unit_delimiter_rbsp";
      }
      e9.trigger("data", o7);
    }), o6.on("done", function() {
      e9.trigger("done");
    }), o6.on("partialdone", function() {
      e9.trigger("partialdone");
    }), o6.on("reset", function() {
      e9.trigger("reset");
    }), o6.on("endedtimeline", function() {
      e9.trigger("endedtimeline");
    }), this.flush = function() {
      o6.flush();
    }, this.partialFlush = function() {
      o6.partialFlush();
    }, this.reset = function() {
      o6.reset();
    }, this.endTimeline = function() {
      o6.endTimeline();
    }, a6 = function(e10, t5) {
      var i4, s5 = 8, n7 = 8;
      for (i4 = 0; i4 < e10; i4++) 0 !== n7 && (n7 = (s5 + t5.readExpGolomb() + 256) % 256), s5 = 0 === n7 ? s5 : n7;
    }, n6 = function(e10) {
      for (var t5, i4, s5 = e10.byteLength, n7 = [], r7 = 1; r7 < s5 - 2; ) 0 === e10[r7] && 0 === e10[r7 + 1] && 3 === e10[r7 + 2] ? (n7.push(r7 + 2), r7 += 2) : r7++;
      if (0 === n7.length) return e10;
      t5 = s5 - n7.length, i4 = new Uint8Array(t5);
      var a7 = 0;
      for (r7 = 0; r7 < t5; a7++, r7++) a7 === n7[0] && (a7++, n7.shift()), i4[r7] = e10[a7];
      return i4;
    }, r6 = function(e10) {
      var t5, i4, s5, n7, r7, o7, l3, u4, h3, d4, c4, p3, m6 = 0, g6 = 0, f4 = 0, y5 = 0, _3 = [1, 1];
      if (i4 = (t5 = new It2(e10)).readUnsignedByte(), n7 = t5.readUnsignedByte(), s5 = t5.readUnsignedByte(), t5.skipUnsignedExpGolomb(), wt2[i4] && (3 === (r7 = t5.readUnsignedExpGolomb()) && t5.skipBits(1), t5.skipUnsignedExpGolomb(), t5.skipUnsignedExpGolomb(), t5.skipBits(1), t5.readBoolean())) for (c4 = 3 !== r7 ? 8 : 12, p3 = 0; p3 < c4; p3++) t5.readBoolean() && a6(p3 < 6 ? 16 : 64, t5);
      if (t5.skipUnsignedExpGolomb(), 0 === (o7 = t5.readUnsignedExpGolomb())) t5.readUnsignedExpGolomb();
      else if (1 === o7) for (t5.skipBits(1), t5.skipExpGolomb(), t5.skipExpGolomb(), l3 = t5.readUnsignedExpGolomb(), p3 = 0; p3 < l3; p3++) t5.skipExpGolomb();
      if (t5.skipUnsignedExpGolomb(), t5.skipBits(1), u4 = t5.readUnsignedExpGolomb(), h3 = t5.readUnsignedExpGolomb(), 0 === (d4 = t5.readBits(1)) && t5.skipBits(1), t5.skipBits(1), t5.readBoolean() && (m6 = t5.readUnsignedExpGolomb(), g6 = t5.readUnsignedExpGolomb(), f4 = t5.readUnsignedExpGolomb(), y5 = t5.readUnsignedExpGolomb()), t5.readBoolean() && t5.readBoolean()) {
        switch (t5.readUnsignedByte()) {
          case 1:
            _3 = [1, 1];
            break;
          case 2:
            _3 = [12, 11];
            break;
          case 3:
            _3 = [10, 11];
            break;
          case 4:
            _3 = [16, 11];
            break;
          case 5:
            _3 = [40, 33];
            break;
          case 6:
            _3 = [24, 11];
            break;
          case 7:
            _3 = [20, 11];
            break;
          case 8:
            _3 = [32, 11];
            break;
          case 9:
            _3 = [80, 33];
            break;
          case 10:
            _3 = [18, 11];
            break;
          case 11:
            _3 = [15, 11];
            break;
          case 12:
            _3 = [64, 33];
            break;
          case 13:
            _3 = [160, 99];
            break;
          case 14:
            _3 = [4, 3];
            break;
          case 15:
            _3 = [3, 2];
            break;
          case 16:
            _3 = [2, 1];
            break;
          case 255:
            _3 = [t5.readUnsignedByte() << 8 | t5.readUnsignedByte(), t5.readUnsignedByte() << 8 | t5.readUnsignedByte()];
        }
        _3 && (_3[0], _3[1]);
      }
      return { profileIdc: i4, levelIdc: s5, profileCompatibility: n7, width: 16 * (u4 + 1) - 2 * m6 - 2 * g6, height: (2 - d4) * (h3 + 1) * 16 - 2 * f4 - 2 * y5, sarRatio: _3 };
    };
  }, St2.prototype = new kt2();
  var xt2, At2 = { H264Stream: St2, NalByteStream: Et2 }, Dt2 = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], Pt2 = function(e9, t4) {
    var i3 = e9[t4 + 6] << 21 | e9[t4 + 7] << 14 | e9[t4 + 8] << 7 | e9[t4 + 9];
    return i3 = i3 >= 0 ? i3 : 0, (16 & e9[t4 + 5]) >> 4 ? i3 + 20 : i3 + 10;
  }, Lt2 = function(e9, t4) {
    return e9.length - t4 < 10 || e9[t4] !== "I".charCodeAt(0) || e9[t4 + 1] !== "D".charCodeAt(0) || e9[t4 + 2] !== "3".charCodeAt(0) ? t4 : (t4 += Pt2(e9, t4), Lt2(e9, t4));
  }, Ot2 = function(e9) {
    return e9[0] << 21 | e9[1] << 14 | e9[2] << 7 | e9[3];
  }, Nt2 = function(e9, t4, i3) {
    var s4, n6 = "";
    for (s4 = t4; s4 < i3; s4++) n6 += "%" + ("00" + e9[s4].toString(16)).slice(-2);
    return n6;
  }, Rt2 = function(e9, t4, i3) {
    return unescape(Nt2(e9, t4, i3));
  }, Mt2 = { isLikelyAacData: function(e9) {
    var t4 = Lt2(e9, 0);
    return e9.length >= t4 + 2 && !(255 & ~e9[t4]) && !(240 & ~e9[t4 + 1]) && 16 == (22 & e9[t4 + 1]);
  }, parseId3TagSize: Pt2, parseAdtsSize: function(e9, t4) {
    var i3 = (224 & e9[t4 + 5]) >> 5, s4 = e9[t4 + 4] << 3;
    return 6144 & e9[t4 + 3] | s4 | i3;
  }, parseType: function(e9, t4) {
    return e9[t4] === "I".charCodeAt(0) && e9[t4 + 1] === "D".charCodeAt(0) && e9[t4 + 2] === "3".charCodeAt(0) ? "timed-metadata" : true & e9[t4] && !(240 & ~e9[t4 + 1]) ? "audio" : null;
  }, parseSampleRate: function(e9) {
    for (var t4 = 0; t4 + 5 < e9.length; ) {
      if (255 === e9[t4] && 240 == (246 & e9[t4 + 1])) return Dt2[(60 & e9[t4 + 2]) >>> 2];
      t4++;
    }
    return null;
  }, parseAacTimestamp: function(e9) {
    var t4, i3, s4;
    t4 = 10, 64 & e9[5] && (t4 += 4, t4 += Ot2(e9.subarray(10, 14)));
    do {
      if ((i3 = Ot2(e9.subarray(t4 + 4, t4 + 8))) < 1) return null;
      if ("PRIV" === String.fromCharCode(e9[t4], e9[t4 + 1], e9[t4 + 2], e9[t4 + 3])) {
        s4 = e9.subarray(t4 + 10, t4 + i3 + 10);
        for (var n6 = 0; n6 < s4.byteLength; n6++) if (0 === s4[n6]) {
          if ("com.apple.streaming.transportStreamTimestamp" === Rt2(s4, 0, n6)) {
            var r6 = s4.subarray(n6 + 1), a6 = (1 & r6[3]) << 30 | r6[4] << 22 | r6[5] << 14 | r6[6] << 6 | r6[7] >>> 2;
            return a6 *= 4, a6 += 3 & r6[7];
          }
          break;
        }
      }
      t4 += 10, t4 += i3;
    } while (t4 < e9.byteLength);
    return null;
  } }, Ut2 = Mt2;
  (xt2 = function() {
    var e9 = new Uint8Array(), t4 = 0;
    xt2.prototype.init.call(this), this.setTimestamp = function(e10) {
      t4 = e10;
    }, this.push = function(i3) {
      var s4, n6, r6, a6, o6 = 0, l3 = 0;
      for (e9.length ? (a6 = e9.length, (e9 = new Uint8Array(i3.byteLength + a6)).set(e9.subarray(0, a6)), e9.set(i3, a6)) : e9 = i3; e9.length - l3 >= 3; ) if (e9[l3] !== "I".charCodeAt(0) || e9[l3 + 1] !== "D".charCodeAt(0) || e9[l3 + 2] !== "3".charCodeAt(0)) if (255 & ~e9[l3] || 240 & ~e9[l3 + 1]) l3++;
      else {
        if (e9.length - l3 < 7) break;
        if (l3 + (o6 = Ut2.parseAdtsSize(e9, l3)) > e9.length) break;
        r6 = { type: "audio", data: e9.subarray(l3, l3 + o6), pts: t4, dts: t4 }, this.trigger("data", r6), l3 += o6;
      }
      else {
        if (e9.length - l3 < 10) break;
        if (l3 + (o6 = Ut2.parseId3TagSize(e9, l3)) > e9.length) break;
        n6 = { type: "timed-metadata", data: e9.subarray(l3, l3 + o6) }, this.trigger("data", n6), l3 += o6;
      }
      s4 = e9.length - l3, e9 = s4 > 0 ? e9.subarray(l3) : new Uint8Array();
    }, this.reset = function() {
      e9 = new Uint8Array(), this.trigger("reset");
    }, this.endTimeline = function() {
      e9 = new Uint8Array(), this.trigger("endedtimeline");
    };
  }).prototype = new $2();
  var Bt2, Ft2, qt2, jt2, $t2 = xt2, Ht2 = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"], Vt2 = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility", "sarRatio"], zt2 = $2, Wt2 = ee2, Gt2 = re2, Xt2 = ye2, Kt2 = be2, Yt2 = _t2, Qt2 = ce2, Jt2 = Ct2, Zt2 = At2.H264Stream, ei2 = $t2, ti2 = Mt2.isLikelyAacData, ii2 = ce2.ONE_SECOND_IN_TS, si2 = Ht2, ni2 = Vt2, ri2 = function(e9, t4) {
    t4.stream = e9, this.trigger("log", t4);
  }, ai2 = function(e9, t4) {
    for (var i3 = Object.keys(t4), s4 = 0; s4 < i3.length; s4++) {
      var n6 = i3[s4];
      "headOfPipeline" !== n6 && t4[n6].on && t4[n6].on("log", ri2.bind(e9, n6));
    }
  }, oi2 = function(e9, t4) {
    var i3;
    if (e9.length !== t4.length) return false;
    for (i3 = 0; i3 < e9.length; i3++) if (e9[i3] !== t4[i3]) return false;
    return true;
  }, li2 = function(e9, t4, i3, s4, n6, r6) {
    return { start: { dts: e9, pts: e9 + (i3 - t4) }, end: { dts: e9 + (s4 - t4), pts: e9 + (n6 - i3) }, prependedContentDuration: r6, baseMediaDecodeTime: e9 };
  };
  Ft2 = function(e9, t4) {
    var i3, s4 = [], n6 = 0, r6 = 0, a6 = 1 / 0;
    i3 = (t4 = t4 || {}).firstSequenceNumber || 0, Ft2.prototype.init.call(this), this.push = function(t5) {
      Kt2.collectDtsInfo(e9, t5), e9 && si2.forEach(function(i4) {
        e9[i4] = t5[i4];
      }), s4.push(t5);
    }, this.setEarliestDts = function(e10) {
      n6 = e10;
    }, this.setVideoBaseMediaDecodeTime = function(e10) {
      a6 = e10;
    }, this.setAudioAppendStart = function(e10) {
      r6 = e10;
    }, this.flush = function() {
      var o6, l3, u4, h3, d4, c4, p3;
      0 !== s4.length ? (o6 = Xt2.trimAdtsFramesByEarliestDts(s4, e9, n6), e9.baseMediaDecodeTime = Kt2.calculateTrackBaseMediaDecodeTime(e9, t4.keepOriginalTimestamps), p3 = Xt2.prefixWithSilence(e9, o6, r6, a6), e9.samples = Xt2.generateSampleTable(o6), u4 = Wt2.mdat(Xt2.concatenateFrameData(o6)), s4 = [], l3 = Wt2.moof(i3, [e9]), h3 = new Uint8Array(l3.byteLength + u4.byteLength), i3++, h3.set(l3), h3.set(u4, l3.byteLength), Kt2.clearDtsInfo(e9), d4 = Math.ceil(1024 * ii2 / e9.samplerate), o6.length && (c4 = o6.length * d4, this.trigger("segmentTimingInfo", li2(Qt2.audioTsToVideoTs(e9.baseMediaDecodeTime, e9.samplerate), o6[0].dts, o6[0].pts, o6[0].dts + c4, o6[0].pts + c4, p3 || 0)), this.trigger("timingInfo", { start: o6[0].pts, end: o6[0].pts + c4 })), this.trigger("data", { track: e9, boxes: h3 }), this.trigger("done", "AudioSegmentStream")) : this.trigger("done", "AudioSegmentStream");
    }, this.reset = function() {
      Kt2.clearDtsInfo(e9), s4 = [], this.trigger("reset");
    };
  }, Ft2.prototype = new zt2(), Bt2 = function(e9, t4) {
    var i3, s4, n6, r6 = [], a6 = [];
    i3 = (t4 = t4 || {}).firstSequenceNumber || 0, Bt2.prototype.init.call(this), delete e9.minPTS, this.gopCache_ = [], this.push = function(t5) {
      Kt2.collectDtsInfo(e9, t5), "seq_parameter_set_rbsp" !== t5.nalUnitType || s4 || (s4 = t5.config, e9.sps = [t5.data], ni2.forEach(function(t6) {
        e9[t6] = s4[t6];
      }, this)), "pic_parameter_set_rbsp" !== t5.nalUnitType || n6 || (n6 = t5.data, e9.pps = [t5.data]), r6.push(t5);
    }, this.flush = function() {
      for (var s5, n7, o6, l3, u4, h3, d4, c4, p3 = 0; r6.length && "access_unit_delimiter_rbsp" !== r6[0].nalUnitType; ) r6.shift();
      if (0 === r6.length) return this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
      if (s5 = Gt2.groupNalsIntoFrames(r6), (o6 = Gt2.groupFramesIntoGops(s5))[0][0].keyFrame || ((n7 = this.getGopForFusion_(r6[0], e9)) ? (p3 = n7.duration, o6.unshift(n7), o6.byteLength += n7.byteLength, o6.nalCount += n7.nalCount, o6.pts = n7.pts, o6.dts = n7.dts, o6.duration += n7.duration) : o6 = Gt2.extendFirstKeyFrame(o6)), a6.length) {
        var m6;
        if (!(m6 = t4.alignGopsAtEnd ? this.alignGopsAtEnd_(o6) : this.alignGopsAtStart_(o6))) return this.gopCache_.unshift({ gop: o6.pop(), pps: e9.pps, sps: e9.sps }), this.gopCache_.length = Math.min(6, this.gopCache_.length), r6 = [], this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
        Kt2.clearDtsInfo(e9), o6 = m6;
      }
      Kt2.collectDtsInfo(e9, o6), e9.samples = Gt2.generateSampleTable(o6), u4 = Wt2.mdat(Gt2.concatenateNalData(o6)), e9.baseMediaDecodeTime = Kt2.calculateTrackBaseMediaDecodeTime(e9, t4.keepOriginalTimestamps), this.trigger("processedGopsInfo", o6.map(function(e10) {
        return { pts: e10.pts, dts: e10.dts, byteLength: e10.byteLength };
      })), d4 = o6[0], c4 = o6[o6.length - 1], this.trigger("segmentTimingInfo", li2(e9.baseMediaDecodeTime, d4.dts, d4.pts, c4.dts + c4.duration, c4.pts + c4.duration, p3)), this.trigger("timingInfo", { start: o6[0].pts, end: o6[o6.length - 1].pts + o6[o6.length - 1].duration }), this.gopCache_.unshift({ gop: o6.pop(), pps: e9.pps, sps: e9.sps }), this.gopCache_.length = Math.min(6, this.gopCache_.length), r6 = [], this.trigger("baseMediaDecodeTime", e9.baseMediaDecodeTime), this.trigger("timelineStartInfo", e9.timelineStartInfo), l3 = Wt2.moof(i3, [e9]), h3 = new Uint8Array(l3.byteLength + u4.byteLength), i3++, h3.set(l3), h3.set(u4, l3.byteLength), this.trigger("data", { track: e9, boxes: h3 }), this.resetStream_(), this.trigger("done", "VideoSegmentStream");
    }, this.reset = function() {
      this.resetStream_(), r6 = [], this.gopCache_.length = 0, a6.length = 0, this.trigger("reset");
    }, this.resetStream_ = function() {
      Kt2.clearDtsInfo(e9), s4 = void 0, n6 = void 0;
    }, this.getGopForFusion_ = function(t5) {
      var i4, s5, n7, r7, a7, o6 = 45e3, l3 = 1 / 0;
      for (a7 = 0; a7 < this.gopCache_.length; a7++) n7 = (r7 = this.gopCache_[a7]).gop, e9.pps && oi2(e9.pps[0], r7.pps[0]) && e9.sps && oi2(e9.sps[0], r7.sps[0]) && (n7.dts < e9.timelineStartInfo.dts || (i4 = t5.dts - n7.dts - n7.duration) >= -1e4 && i4 <= o6 && (!s5 || l3 > i4) && (s5 = r7, l3 = i4));
      return s5 ? s5.gop : null;
    }, this.alignGopsAtStart_ = function(e10) {
      var t5, i4, s5, n7, r7, o6, l3, u4;
      for (r7 = e10.byteLength, o6 = e10.nalCount, l3 = e10.duration, t5 = i4 = 0; t5 < a6.length && i4 < e10.length && (s5 = a6[t5], n7 = e10[i4], s5.pts !== n7.pts); ) n7.pts > s5.pts ? t5++ : (i4++, r7 -= n7.byteLength, o6 -= n7.nalCount, l3 -= n7.duration);
      return 0 === i4 ? e10 : i4 === e10.length ? null : ((u4 = e10.slice(i4)).byteLength = r7, u4.duration = l3, u4.nalCount = o6, u4.pts = u4[0].pts, u4.dts = u4[0].dts, u4);
    }, this.alignGopsAtEnd_ = function(e10) {
      var t5, i4, s5, n7, r7, o6, l3;
      for (t5 = a6.length - 1, i4 = e10.length - 1, r7 = null, o6 = false; t5 >= 0 && i4 >= 0; ) {
        if (s5 = a6[t5], n7 = e10[i4], s5.pts === n7.pts) {
          o6 = true;
          break;
        }
        s5.pts > n7.pts ? t5-- : (t5 === a6.length - 1 && (r7 = i4), i4--);
      }
      if (!o6 && null === r7) return null;
      if (0 === (l3 = o6 ? i4 : r7)) return e10;
      var u4 = e10.slice(l3), h3 = u4.reduce(function(e11, t6) {
        return e11.byteLength += t6.byteLength, e11.duration += t6.duration, e11.nalCount += t6.nalCount, e11;
      }, { byteLength: 0, duration: 0, nalCount: 0 });
      return u4.byteLength = h3.byteLength, u4.duration = h3.duration, u4.nalCount = h3.nalCount, u4.pts = u4[0].pts, u4.dts = u4[0].dts, u4;
    }, this.alignGopsWith = function(e10) {
      a6 = e10;
    };
  }, Bt2.prototype = new zt2(), jt2 = function(e9, t4) {
    this.numberOfTracks = 0, this.metadataStream = t4, void 0 !== (e9 = e9 || {}).remux ? this.remuxTracks = !!e9.remux : this.remuxTracks = true, "boolean" == typeof e9.keepOriginalTimestamps ? this.keepOriginalTimestamps = e9.keepOriginalTimestamps : this.keepOriginalTimestamps = false, this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, jt2.prototype.init.call(this), this.push = function(e10) {
      return e10.content || e10.text ? this.pendingCaptions.push(e10) : e10.frames ? this.pendingMetadata.push(e10) : (this.pendingTracks.push(e10.track), this.pendingBytes += e10.boxes.byteLength, "video" === e10.track.type && (this.videoTrack = e10.track, this.pendingBoxes.push(e10.boxes)), void ("audio" === e10.track.type && (this.audioTrack = e10.track, this.pendingBoxes.unshift(e10.boxes))));
    };
  }, jt2.prototype = new zt2(), jt2.prototype.flush = function(e9) {
    var t4, i3, s4, n6, r6 = 0, a6 = { captions: [], captionStreams: {}, metadata: [], info: {} }, o6 = 0;
    if (this.pendingTracks.length < this.numberOfTracks) {
      if ("VideoSegmentStream" !== e9 && "AudioSegmentStream" !== e9) return;
      if (this.remuxTracks) return;
      if (0 === this.pendingTracks.length) return this.emittedTracks++, void (this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0));
    }
    if (this.videoTrack ? (o6 = this.videoTrack.timelineStartInfo.pts, ni2.forEach(function(e10) {
      a6.info[e10] = this.videoTrack[e10];
    }, this)) : this.audioTrack && (o6 = this.audioTrack.timelineStartInfo.pts, si2.forEach(function(e10) {
      a6.info[e10] = this.audioTrack[e10];
    }, this)), this.videoTrack || this.audioTrack) {
      for (1 === this.pendingTracks.length ? a6.type = this.pendingTracks[0].type : a6.type = "combined", this.emittedTracks += this.pendingTracks.length, s4 = Wt2.initSegment(this.pendingTracks), a6.initSegment = new Uint8Array(s4.byteLength), a6.initSegment.set(s4), a6.data = new Uint8Array(this.pendingBytes), n6 = 0; n6 < this.pendingBoxes.length; n6++) a6.data.set(this.pendingBoxes[n6], r6), r6 += this.pendingBoxes[n6].byteLength;
      for (n6 = 0; n6 < this.pendingCaptions.length; n6++) (t4 = this.pendingCaptions[n6]).startTime = Qt2.metadataTsToSeconds(t4.startPts, o6, this.keepOriginalTimestamps), t4.endTime = Qt2.metadataTsToSeconds(t4.endPts, o6, this.keepOriginalTimestamps), a6.captionStreams[t4.stream] = true, a6.captions.push(t4);
      for (n6 = 0; n6 < this.pendingMetadata.length; n6++) (i3 = this.pendingMetadata[n6]).cueTime = Qt2.metadataTsToSeconds(i3.pts, o6, this.keepOriginalTimestamps), a6.metadata.push(i3);
      for (a6.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", a6), n6 = 0; n6 < a6.captions.length; n6++) t4 = a6.captions[n6], this.trigger("caption", t4);
      for (n6 = 0; n6 < a6.metadata.length; n6++) i3 = a6.metadata[n6], this.trigger("id3Frame", i3);
    }
    this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0);
  }, jt2.prototype.setRemux = function(e9) {
    this.remuxTracks = e9;
  }, qt2 = function(e9) {
    var t4, i3, s4 = this, n6 = true;
    qt2.prototype.init.call(this), e9 = e9 || {}, this.baseMediaDecodeTime = e9.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function() {
      var n7 = {};
      this.transmuxPipeline_ = n7, n7.type = "aac", n7.metadataStream = new Yt2.MetadataStream(), n7.aacStream = new ei2(), n7.audioTimestampRolloverStream = new Yt2.TimestampRolloverStream("audio"), n7.timedMetadataTimestampRolloverStream = new Yt2.TimestampRolloverStream("timed-metadata"), n7.adtsStream = new Jt2(), n7.coalesceStream = new jt2(e9, n7.metadataStream), n7.headOfPipeline = n7.aacStream, n7.aacStream.pipe(n7.audioTimestampRolloverStream).pipe(n7.adtsStream), n7.aacStream.pipe(n7.timedMetadataTimestampRolloverStream).pipe(n7.metadataStream).pipe(n7.coalesceStream), n7.metadataStream.on("timestamp", function(e10) {
        n7.aacStream.setTimestamp(e10.timeStamp);
      }), n7.aacStream.on("data", function(r6) {
        "timed-metadata" !== r6.type && "audio" !== r6.type || n7.audioSegmentStream || (i3 = i3 || { timelineStartInfo: { baseMediaDecodeTime: s4.baseMediaDecodeTime }, codec: "adts", type: "audio" }, n7.coalesceStream.numberOfTracks++, n7.audioSegmentStream = new Ft2(i3, e9), n7.audioSegmentStream.on("log", s4.getLogTrigger_("audioSegmentStream")), n7.audioSegmentStream.on("timingInfo", s4.trigger.bind(s4, "audioTimingInfo")), n7.adtsStream.pipe(n7.audioSegmentStream).pipe(n7.coalesceStream), s4.trigger("trackinfo", { hasAudio: !!i3, hasVideo: !!t4 }));
      }), n7.coalesceStream.on("data", this.trigger.bind(this, "data")), n7.coalesceStream.on("done", this.trigger.bind(this, "done")), ai2(this, n7);
    }, this.setupTsPipeline = function() {
      var n7 = {};
      this.transmuxPipeline_ = n7, n7.type = "ts", n7.metadataStream = new Yt2.MetadataStream(), n7.packetStream = new Yt2.TransportPacketStream(), n7.parseStream = new Yt2.TransportParseStream(), n7.elementaryStream = new Yt2.ElementaryStream(), n7.timestampRolloverStream = new Yt2.TimestampRolloverStream(), n7.adtsStream = new Jt2(), n7.h264Stream = new Zt2(), n7.captionStream = new Yt2.CaptionStream(e9), n7.coalesceStream = new jt2(e9, n7.metadataStream), n7.headOfPipeline = n7.packetStream, n7.packetStream.pipe(n7.parseStream).pipe(n7.elementaryStream).pipe(n7.timestampRolloverStream), n7.timestampRolloverStream.pipe(n7.h264Stream), n7.timestampRolloverStream.pipe(n7.adtsStream), n7.timestampRolloverStream.pipe(n7.metadataStream).pipe(n7.coalesceStream), n7.h264Stream.pipe(n7.captionStream).pipe(n7.coalesceStream), n7.elementaryStream.on("data", function(r6) {
        var a6;
        if ("metadata" === r6.type) {
          for (a6 = r6.tracks.length; a6--; ) t4 || "video" !== r6.tracks[a6].type ? i3 || "audio" !== r6.tracks[a6].type || ((i3 = r6.tracks[a6]).timelineStartInfo.baseMediaDecodeTime = s4.baseMediaDecodeTime) : (t4 = r6.tracks[a6]).timelineStartInfo.baseMediaDecodeTime = s4.baseMediaDecodeTime;
          t4 && !n7.videoSegmentStream && (n7.coalesceStream.numberOfTracks++, n7.videoSegmentStream = new Bt2(t4, e9), n7.videoSegmentStream.on("log", s4.getLogTrigger_("videoSegmentStream")), n7.videoSegmentStream.on("timelineStartInfo", function(t5) {
            i3 && !e9.keepOriginalTimestamps && (i3.timelineStartInfo = t5, n7.audioSegmentStream.setEarliestDts(t5.dts - s4.baseMediaDecodeTime));
          }), n7.videoSegmentStream.on("processedGopsInfo", s4.trigger.bind(s4, "gopInfo")), n7.videoSegmentStream.on("segmentTimingInfo", s4.trigger.bind(s4, "videoSegmentTimingInfo")), n7.videoSegmentStream.on("baseMediaDecodeTime", function(e10) {
            i3 && n7.audioSegmentStream.setVideoBaseMediaDecodeTime(e10);
          }), n7.videoSegmentStream.on("timingInfo", s4.trigger.bind(s4, "videoTimingInfo")), n7.h264Stream.pipe(n7.videoSegmentStream).pipe(n7.coalesceStream)), i3 && !n7.audioSegmentStream && (n7.coalesceStream.numberOfTracks++, n7.audioSegmentStream = new Ft2(i3, e9), n7.audioSegmentStream.on("log", s4.getLogTrigger_("audioSegmentStream")), n7.audioSegmentStream.on("timingInfo", s4.trigger.bind(s4, "audioTimingInfo")), n7.audioSegmentStream.on("segmentTimingInfo", s4.trigger.bind(s4, "audioSegmentTimingInfo")), n7.adtsStream.pipe(n7.audioSegmentStream).pipe(n7.coalesceStream)), s4.trigger("trackinfo", { hasAudio: !!i3, hasVideo: !!t4 });
        }
      }), n7.coalesceStream.on("data", this.trigger.bind(this, "data")), n7.coalesceStream.on("id3Frame", function(e10) {
        e10.dispatchType = n7.metadataStream.dispatchType, s4.trigger("id3Frame", e10);
      }), n7.coalesceStream.on("caption", this.trigger.bind(this, "caption")), n7.coalesceStream.on("done", this.trigger.bind(this, "done")), ai2(this, n7);
    }, this.setBaseMediaDecodeTime = function(s5) {
      var n7 = this.transmuxPipeline_;
      e9.keepOriginalTimestamps || (this.baseMediaDecodeTime = s5), i3 && (i3.timelineStartInfo.dts = void 0, i3.timelineStartInfo.pts = void 0, Kt2.clearDtsInfo(i3), n7.audioTimestampRolloverStream && n7.audioTimestampRolloverStream.discontinuity()), t4 && (n7.videoSegmentStream && (n7.videoSegmentStream.gopCache_ = []), t4.timelineStartInfo.dts = void 0, t4.timelineStartInfo.pts = void 0, Kt2.clearDtsInfo(t4), n7.captionStream.reset()), n7.timestampRolloverStream && n7.timestampRolloverStream.discontinuity();
    }, this.setAudioAppendStart = function(e10) {
      i3 && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e10);
    }, this.setRemux = function(t5) {
      var i4 = this.transmuxPipeline_;
      e9.remux = t5, i4 && i4.coalesceStream && i4.coalesceStream.setRemux(t5);
    }, this.alignGopsWith = function(e10) {
      t4 && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e10);
    }, this.getLogTrigger_ = function(e10) {
      var t5 = this;
      return function(i4) {
        i4.stream = e10, t5.trigger("log", i4);
      };
    }, this.push = function(e10) {
      if (n6) {
        var t5 = ti2(e10);
        t5 && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : t5 || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), n6 = false;
      }
      this.transmuxPipeline_.headOfPipeline.push(e10);
    }, this.flush = function() {
      n6 = true, this.transmuxPipeline_.headOfPipeline.flush();
    }, this.endTimeline = function() {
      this.transmuxPipeline_.headOfPipeline.endTimeline();
    }, this.reset = function() {
      this.transmuxPipeline_.headOfPipeline && this.transmuxPipeline_.headOfPipeline.reset();
    }, this.resetCaptions = function() {
      this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset();
    };
  }, qt2.prototype = new zt2();
  var ui2, hi2, di2 = { Transmuxer: qt2, VideoSegmentStream: Bt2, AudioSegmentStream: Ft2, AUDIO_PROPERTIES: si2, VIDEO_PROPERTIES: ni2, generateSegmentTimingInfo: li2 }, ci2 = { toUnsigned: function(e9) {
    return e9 >>> 0;
  }, toHexString: function(e9) {
    return ("00" + e9.toString(16)).slice(-2);
  } }, pi2 = function(e9) {
    var t4 = "";
    return t4 += String.fromCharCode(e9[0]), t4 += String.fromCharCode(e9[1]), t4 += String.fromCharCode(e9[2]), t4 += String.fromCharCode(e9[3]);
  }, mi2 = ci2.toUnsigned, gi2 = pi2, fi2 = function(e9, t4) {
    var i3, s4, n6, r6, a6, o6 = [];
    if (!t4.length) return null;
    for (i3 = 0; i3 < e9.byteLength; ) s4 = mi2(e9[i3] << 24 | e9[i3 + 1] << 16 | e9[i3 + 2] << 8 | e9[i3 + 3]), n6 = gi2(e9.subarray(i3 + 4, i3 + 8)), r6 = s4 > 1 ? i3 + s4 : e9.byteLength, n6 === t4[0] && (1 === t4.length ? o6.push(e9.subarray(i3 + 8, r6)) : (a6 = fi2(e9.subarray(i3 + 8, r6), t4.slice(1))).length && (o6 = o6.concat(a6))), i3 = r6;
    return o6;
  }, yi2 = fi2, _i2 = ci2.toUnsigned, bi2 = V3.getUint64, vi2 = function(e9) {
    var t4 = { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)) };
    return 1 === t4.version ? t4.baseMediaDecodeTime = bi2(e9.subarray(4)) : t4.baseMediaDecodeTime = _i2(e9[4] << 24 | e9[5] << 16 | e9[6] << 8 | e9[7]), t4;
  }, Ti2 = function(e9) {
    var t4, i3 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), s4 = { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)), trackId: i3.getUint32(4) }, n6 = 1 & s4.flags[2], r6 = 2 & s4.flags[2], a6 = 8 & s4.flags[2], o6 = 16 & s4.flags[2], l3 = 32 & s4.flags[2], u4 = 65536 & s4.flags[0], h3 = 131072 & s4.flags[0];
    return t4 = 8, n6 && (t4 += 4, s4.baseDataOffset = i3.getUint32(12), t4 += 4), r6 && (s4.sampleDescriptionIndex = i3.getUint32(t4), t4 += 4), a6 && (s4.defaultSampleDuration = i3.getUint32(t4), t4 += 4), o6 && (s4.defaultSampleSize = i3.getUint32(t4), t4 += 4), l3 && (s4.defaultSampleFlags = i3.getUint32(t4)), u4 && (s4.durationIsEmpty = true), !n6 && h3 && (s4.baseDataOffsetIsMoof = true), s4;
  }, Si2 = V3.getUint64, Ei2 = function(e9) {
    var t4 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), i3 = { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)), references: [], referenceId: t4.getUint32(4), timescale: t4.getUint32(8) }, s4 = 12;
    0 === i3.version ? (i3.earliestPresentationTime = t4.getUint32(s4), i3.firstOffset = t4.getUint32(s4 + 4), s4 += 8) : (i3.earliestPresentationTime = Si2(e9.subarray(s4)), i3.firstOffset = Si2(e9.subarray(s4 + 8)), s4 += 16), s4 += 2;
    var n6 = t4.getUint16(s4);
    for (s4 += 2; n6 > 0; s4 += 12, n6--) i3.references.push({ referenceType: (128 & e9[s4]) >>> 7, referencedSize: 2147483647 & t4.getUint32(s4), subsegmentDuration: t4.getUint32(s4 + 4), startsWithSap: !!(128 & e9[s4 + 8]), sapType: (112 & e9[s4 + 8]) >>> 4, sapDeltaTime: 268435455 & t4.getUint32(s4 + 8) });
    return i3;
  }, wi2 = function(e9) {
    return { isLeading: (12 & e9[0]) >>> 2, dependsOn: 3 & e9[0], isDependedOn: (192 & e9[1]) >>> 6, hasRedundancy: (48 & e9[1]) >>> 4, paddingValue: (14 & e9[1]) >>> 1, isNonSyncSample: 1 & e9[1], degradationPriority: e9[2] << 8 | e9[3] };
  }, Ci2 = function(e9) {
    var t4, i3 = { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)), samples: [] }, s4 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), n6 = 1 & i3.flags[2], r6 = 4 & i3.flags[2], a6 = 1 & i3.flags[1], o6 = 2 & i3.flags[1], l3 = 4 & i3.flags[1], u4 = 8 & i3.flags[1], h3 = s4.getUint32(4), d4 = 8;
    for (n6 && (i3.dataOffset = s4.getInt32(d4), d4 += 4), r6 && h3 && (t4 = { flags: wi2(e9.subarray(d4, d4 + 4)) }, d4 += 4, a6 && (t4.duration = s4.getUint32(d4), d4 += 4), o6 && (t4.size = s4.getUint32(d4), d4 += 4), u4 && (1 === i3.version ? t4.compositionTimeOffset = s4.getInt32(d4) : t4.compositionTimeOffset = s4.getUint32(d4), d4 += 4), i3.samples.push(t4), h3--); h3--; ) t4 = {}, a6 && (t4.duration = s4.getUint32(d4), d4 += 4), o6 && (t4.size = s4.getUint32(d4), d4 += 4), l3 && (t4.flags = wi2(e9.subarray(d4, d4 + 4)), d4 += 4), u4 && (1 === i3.version ? t4.compositionTimeOffset = s4.getInt32(d4) : t4.compositionTimeOffset = s4.getUint32(d4), d4 += 4), i3.samples.push(t4);
    return i3;
  }, ki2 = V3.getUint64, Ii2 = function(e9) {
    return new Date(1e3 * e9 - 20828448e5);
  }, xi2 = pi2, Ai2 = function(e9) {
    var t4, i3, s4 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), n6 = [];
    for (t4 = 0; t4 + 4 < e9.length; t4 += i3) if (i3 = s4.getUint32(t4), t4 += 4, i3 <= 0) n6.push("<span style='color:red;'>MALFORMED DATA</span>");
    else switch (31 & e9[t4]) {
      case 1:
        n6.push("slice_layer_without_partitioning_rbsp");
        break;
      case 5:
        n6.push("slice_layer_without_partitioning_rbsp_idr");
        break;
      case 6:
        n6.push("sei_rbsp");
        break;
      case 7:
        n6.push("seq_parameter_set_rbsp");
        break;
      case 8:
        n6.push("pic_parameter_set_rbsp");
        break;
      case 9:
        n6.push("access_unit_delimiter_rbsp");
        break;
      default:
        n6.push("UNKNOWN NAL - " + e9[t4] & 31);
    }
    return n6;
  }, Di2 = { avc1: function(e9) {
    var t4 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength);
    return { dataReferenceIndex: t4.getUint16(6), width: t4.getUint16(24), height: t4.getUint16(26), horizresolution: t4.getUint16(28) + t4.getUint16(30) / 16, vertresolution: t4.getUint16(32) + t4.getUint16(34) / 16, frameCount: t4.getUint16(40), depth: t4.getUint16(74), config: ui2(e9.subarray(78, e9.byteLength)) };
  }, avcC: function(e9) {
    var t4, i3, s4, n6, r6 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), a6 = { configurationVersion: e9[0], avcProfileIndication: e9[1], profileCompatibility: e9[2], avcLevelIndication: e9[3], lengthSizeMinusOne: 3 & e9[4], sps: [], pps: [] }, o6 = 31 & e9[5];
    for (s4 = 6, n6 = 0; n6 < o6; n6++) i3 = r6.getUint16(s4), s4 += 2, a6.sps.push(new Uint8Array(e9.subarray(s4, s4 + i3))), s4 += i3;
    for (t4 = e9[s4], s4++, n6 = 0; n6 < t4; n6++) i3 = r6.getUint16(s4), s4 += 2, a6.pps.push(new Uint8Array(e9.subarray(s4, s4 + i3))), s4 += i3;
    return a6;
  }, btrt: function(e9) {
    var t4 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength);
    return { bufferSizeDB: t4.getUint32(0), maxBitrate: t4.getUint32(4), avgBitrate: t4.getUint32(8) };
  }, edts: function(e9) {
    return { boxes: ui2(e9) };
  }, elst: function(e9) {
    var t4, i3 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), s4 = { version: i3.getUint8(0), flags: new Uint8Array(e9.subarray(1, 4)), edits: [] }, n6 = i3.getUint32(4);
    for (t4 = 8; n6; n6--) 0 === s4.version ? (s4.edits.push({ segmentDuration: i3.getUint32(t4), mediaTime: i3.getInt32(t4 + 4), mediaRate: i3.getUint16(t4 + 8) + i3.getUint16(t4 + 10) / 65536 }), t4 += 12) : (s4.edits.push({ segmentDuration: ki2(e9.subarray(t4)), mediaTime: ki2(e9.subarray(t4 + 8)), mediaRate: i3.getUint16(t4 + 16) + i3.getUint16(t4 + 18) / 65536 }), t4 += 20);
    return s4;
  }, esds: function(e9) {
    return { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)), esId: e9[6] << 8 | e9[7], streamPriority: 31 & e9[8], decoderConfig: { objectProfileIndication: e9[11], streamType: e9[12] >>> 2 & 63, bufferSize: e9[13] << 16 | e9[14] << 8 | e9[15], maxBitrate: e9[16] << 24 | e9[17] << 16 | e9[18] << 8 | e9[19], avgBitrate: e9[20] << 24 | e9[21] << 16 | e9[22] << 8 | e9[23], decoderConfigDescriptor: { tag: e9[24], length: e9[25], audioObjectType: e9[26] >>> 3 & 31, samplingFrequencyIndex: (7 & e9[26]) << 1 | e9[27] >>> 7 & 1, channelConfiguration: e9[27] >>> 3 & 15 } } };
  }, ftyp: function(e9) {
    for (var t4 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), i3 = { majorBrand: xi2(e9.subarray(0, 4)), minorVersion: t4.getUint32(4), compatibleBrands: [] }, s4 = 8; s4 < e9.byteLength; ) i3.compatibleBrands.push(xi2(e9.subarray(s4, s4 + 4))), s4 += 4;
    return i3;
  }, dinf: function(e9) {
    return { boxes: ui2(e9) };
  }, dref: function(e9) {
    return { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)), dataReferences: ui2(e9.subarray(8)) };
  }, hdlr: function(e9) {
    var t4 = { version: new DataView(e9.buffer, e9.byteOffset, e9.byteLength).getUint8(0), flags: new Uint8Array(e9.subarray(1, 4)), handlerType: xi2(e9.subarray(8, 12)), name: "" }, i3 = 8;
    for (i3 = 24; i3 < e9.byteLength; i3++) {
      if (0 === e9[i3]) {
        i3++;
        break;
      }
      t4.name += String.fromCharCode(e9[i3]);
    }
    return t4.name = decodeURIComponent(escape(t4.name)), t4;
  }, mdat: function(e9) {
    return { byteLength: e9.byteLength, nals: Ai2(e9) };
  }, mdhd: function(e9) {
    var t4, i3 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), s4 = 4, n6 = { version: i3.getUint8(0), flags: new Uint8Array(e9.subarray(1, 4)), language: "" };
    return 1 === n6.version ? (s4 += 4, n6.creationTime = Ii2(i3.getUint32(s4)), s4 += 8, n6.modificationTime = Ii2(i3.getUint32(s4)), s4 += 4, n6.timescale = i3.getUint32(s4), s4 += 8, n6.duration = i3.getUint32(s4)) : (n6.creationTime = Ii2(i3.getUint32(s4)), s4 += 4, n6.modificationTime = Ii2(i3.getUint32(s4)), s4 += 4, n6.timescale = i3.getUint32(s4), s4 += 4, n6.duration = i3.getUint32(s4)), s4 += 4, t4 = i3.getUint16(s4), n6.language += String.fromCharCode(96 + (t4 >> 10)), n6.language += String.fromCharCode(96 + ((992 & t4) >> 5)), n6.language += String.fromCharCode(96 + (31 & t4)), n6;
  }, mdia: function(e9) {
    return { boxes: ui2(e9) };
  }, mfhd: function(e9) {
    return { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)), sequenceNumber: e9[4] << 24 | e9[5] << 16 | e9[6] << 8 | e9[7] };
  }, minf: function(e9) {
    return { boxes: ui2(e9) };
  }, mp4a: function(e9) {
    var t4 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), i3 = { dataReferenceIndex: t4.getUint16(6), channelcount: t4.getUint16(16), samplesize: t4.getUint16(18), samplerate: t4.getUint16(24) + t4.getUint16(26) / 65536 };
    return e9.byteLength > 28 && (i3.streamDescriptor = ui2(e9.subarray(28))[0]), i3;
  }, moof: function(e9) {
    return { boxes: ui2(e9) };
  }, moov: function(e9) {
    return { boxes: ui2(e9) };
  }, mvex: function(e9) {
    return { boxes: ui2(e9) };
  }, mvhd: function(e9) {
    var t4 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), i3 = 4, s4 = { version: t4.getUint8(0), flags: new Uint8Array(e9.subarray(1, 4)) };
    return 1 === s4.version ? (i3 += 4, s4.creationTime = Ii2(t4.getUint32(i3)), i3 += 8, s4.modificationTime = Ii2(t4.getUint32(i3)), i3 += 4, s4.timescale = t4.getUint32(i3), i3 += 8, s4.duration = t4.getUint32(i3)) : (s4.creationTime = Ii2(t4.getUint32(i3)), i3 += 4, s4.modificationTime = Ii2(t4.getUint32(i3)), i3 += 4, s4.timescale = t4.getUint32(i3), i3 += 4, s4.duration = t4.getUint32(i3)), i3 += 4, s4.rate = t4.getUint16(i3) + t4.getUint16(i3 + 2) / 16, i3 += 4, s4.volume = t4.getUint8(i3) + t4.getUint8(i3 + 1) / 8, i3 += 2, i3 += 2, i3 += 8, s4.matrix = new Uint32Array(e9.subarray(i3, i3 + 36)), i3 += 36, i3 += 24, s4.nextTrackId = t4.getUint32(i3), s4;
  }, pdin: function(e9) {
    var t4 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength);
    return { version: t4.getUint8(0), flags: new Uint8Array(e9.subarray(1, 4)), rate: t4.getUint32(4), initialDelay: t4.getUint32(8) };
  }, sdtp: function(e9) {
    var t4, i3 = { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)), samples: [] };
    for (t4 = 4; t4 < e9.byteLength; t4++) i3.samples.push({ dependsOn: (48 & e9[t4]) >> 4, isDependedOn: (12 & e9[t4]) >> 2, hasRedundancy: 3 & e9[t4] });
    return i3;
  }, sidx: Ei2, smhd: function(e9) {
    return { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)), balance: e9[4] + e9[5] / 256 };
  }, stbl: function(e9) {
    return { boxes: ui2(e9) };
  }, ctts: function(e9) {
    var t4, i3 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), s4 = { version: i3.getUint8(0), flags: new Uint8Array(e9.subarray(1, 4)), compositionOffsets: [] }, n6 = i3.getUint32(4);
    for (t4 = 8; n6; t4 += 8, n6--) s4.compositionOffsets.push({ sampleCount: i3.getUint32(t4), sampleOffset: i3[0 === s4.version ? "getUint32" : "getInt32"](t4 + 4) });
    return s4;
  }, stss: function(e9) {
    var t4, i3 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), s4 = { version: i3.getUint8(0), flags: new Uint8Array(e9.subarray(1, 4)), syncSamples: [] }, n6 = i3.getUint32(4);
    for (t4 = 8; n6; t4 += 4, n6--) s4.syncSamples.push(i3.getUint32(t4));
    return s4;
  }, stco: function(e9) {
    var t4, i3 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), s4 = { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)), chunkOffsets: [] }, n6 = i3.getUint32(4);
    for (t4 = 8; n6; t4 += 4, n6--) s4.chunkOffsets.push(i3.getUint32(t4));
    return s4;
  }, stsc: function(e9) {
    var t4, i3 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), s4 = i3.getUint32(4), n6 = { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)), sampleToChunks: [] };
    for (t4 = 8; s4; t4 += 12, s4--) n6.sampleToChunks.push({ firstChunk: i3.getUint32(t4), samplesPerChunk: i3.getUint32(t4 + 4), sampleDescriptionIndex: i3.getUint32(t4 + 8) });
    return n6;
  }, stsd: function(e9) {
    return { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)), sampleDescriptions: ui2(e9.subarray(8)) };
  }, stsz: function(e9) {
    var t4, i3 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), s4 = { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)), sampleSize: i3.getUint32(4), entries: [] };
    for (t4 = 12; t4 < e9.byteLength; t4 += 4) s4.entries.push(i3.getUint32(t4));
    return s4;
  }, stts: function(e9) {
    var t4, i3 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), s4 = { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)), timeToSamples: [] }, n6 = i3.getUint32(4);
    for (t4 = 8; n6; t4 += 8, n6--) s4.timeToSamples.push({ sampleCount: i3.getUint32(t4), sampleDelta: i3.getUint32(t4 + 4) });
    return s4;
  }, styp: function(e9) {
    return Di2.ftyp(e9);
  }, tfdt: vi2, tfhd: Ti2, tkhd: function(e9) {
    var t4 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), i3 = 4, s4 = { version: t4.getUint8(0), flags: new Uint8Array(e9.subarray(1, 4)) };
    return 1 === s4.version ? (i3 += 4, s4.creationTime = Ii2(t4.getUint32(i3)), i3 += 8, s4.modificationTime = Ii2(t4.getUint32(i3)), i3 += 4, s4.trackId = t4.getUint32(i3), i3 += 4, i3 += 8, s4.duration = t4.getUint32(i3)) : (s4.creationTime = Ii2(t4.getUint32(i3)), i3 += 4, s4.modificationTime = Ii2(t4.getUint32(i3)), i3 += 4, s4.trackId = t4.getUint32(i3), i3 += 4, i3 += 4, s4.duration = t4.getUint32(i3)), i3 += 4, i3 += 8, s4.layer = t4.getUint16(i3), i3 += 2, s4.alternateGroup = t4.getUint16(i3), i3 += 2, s4.volume = t4.getUint8(i3) + t4.getUint8(i3 + 1) / 8, i3 += 2, i3 += 2, s4.matrix = new Uint32Array(e9.subarray(i3, i3 + 36)), i3 += 36, s4.width = t4.getUint16(i3) + t4.getUint16(i3 + 2) / 65536, i3 += 4, s4.height = t4.getUint16(i3) + t4.getUint16(i3 + 2) / 65536, s4;
  }, traf: function(e9) {
    return { boxes: ui2(e9) };
  }, trak: function(e9) {
    return { boxes: ui2(e9) };
  }, trex: function(e9) {
    var t4 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength);
    return { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)), trackId: t4.getUint32(4), defaultSampleDescriptionIndex: t4.getUint32(8), defaultSampleDuration: t4.getUint32(12), defaultSampleSize: t4.getUint32(16), sampleDependsOn: 3 & e9[20], sampleIsDependedOn: (192 & e9[21]) >> 6, sampleHasRedundancy: (48 & e9[21]) >> 4, samplePaddingValue: (14 & e9[21]) >> 1, sampleIsDifferenceSample: !!(1 & e9[21]), sampleDegradationPriority: t4.getUint16(22) };
  }, trun: Ci2, "url ": function(e9) {
    return { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)) };
  }, vmhd: function(e9) {
    var t4 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength);
    return { version: e9[0], flags: new Uint8Array(e9.subarray(1, 4)), graphicsmode: t4.getUint16(4), opcolor: new Uint16Array([t4.getUint16(6), t4.getUint16(8), t4.getUint16(10)]) };
  } };
  ui2 = function(e9) {
    for (var t4, i3, s4, n6, r6, a6 = 0, o6 = [], l3 = new ArrayBuffer(e9.length), u4 = new Uint8Array(l3), h3 = 0; h3 < e9.length; ++h3) u4[h3] = e9[h3];
    for (t4 = new DataView(l3); a6 < e9.byteLength; ) i3 = t4.getUint32(a6), s4 = xi2(e9.subarray(a6 + 4, a6 + 8)), n6 = i3 > 1 ? a6 + i3 : e9.byteLength, (r6 = (Di2[s4] || function(e10) {
      return { data: e10 };
    })(e9.subarray(a6 + 8, n6))).size = i3, r6.type = s4, o6.push(r6), a6 = n6;
    return o6;
  }, hi2 = function(e9, t4) {
    var i3;
    return t4 = t4 || 0, i3 = new Array(2 * t4 + 1).join(" "), e9.map(function(e10, s4) {
      return i3 + e10.type + "\n" + Object.keys(e10).filter(function(e11) {
        return "type" !== e11 && "boxes" !== e11;
      }).map(function(t5) {
        var s5 = i3 + "  " + t5 + ": ", n6 = e10[t5];
        if (n6 instanceof Uint8Array || n6 instanceof Uint32Array) {
          var r6 = Array.prototype.slice.call(new Uint8Array(n6.buffer, n6.byteOffset, n6.byteLength)).map(function(e11) {
            return " " + ("00" + e11.toString(16)).slice(-2);
          }).join("").match(/.{1,24}/g);
          return r6 ? 1 === r6.length ? s5 + "<" + r6.join("").slice(1) + ">" : s5 + "<\n" + r6.map(function(e11) {
            return i3 + "  " + e11;
          }).join("\n") + "\n" + i3 + "  >" : s5 + "<>";
        }
        return s5 + JSON.stringify(n6, null, 2).split("\n").map(function(e11, t6) {
          return 0 === t6 ? e11 : i3 + "  " + e11;
        }).join("\n");
      }).join("\n") + (e10.boxes ? "\n" + hi2(e10.boxes, t4 + 1) : "");
    }).join("\n");
  };
  var Pi2, Li2, Oi2, Ni2, Ri2, Mi2, Ui2, Bi2 = { inspect: ui2, textify: hi2, parseType: xi2, findBox: yi2, parseTraf: Di2.traf, parseTfdt: Di2.tfdt, parseHdlr: Di2.hdlr, parseTfhd: Di2.tfhd, parseTrun: Di2.trun, parseSidx: Di2.sidx }, Fi2 = { uint8ToCString: function(e9) {
    for (var t4 = 0, i3 = String.fromCharCode(e9[t4]), s4 = ""; "\0" !== i3; ) s4 += i3, t4++, i3 = String.fromCharCode(e9[t4]);
    return s4 += i3;
  } }.uint8ToCString, qi2 = V3.getUint64, ji2 = function(e9) {
    var t4, i3, s4, n6, r6, a6, o6, l3 = 4, u4 = e9[0];
    if (0 === u4) l3 += (t4 = Fi2(e9.subarray(l3))).length, l3 += (i3 = Fi2(e9.subarray(l3))).length, s4 = (h3 = new DataView(e9.buffer)).getUint32(l3), l3 += 4, r6 = h3.getUint32(l3), l3 += 4, a6 = h3.getUint32(l3), l3 += 4, o6 = h3.getUint32(l3), l3 += 4;
    else if (1 === u4) {
      var h3;
      s4 = (h3 = new DataView(e9.buffer)).getUint32(l3), l3 += 4, n6 = qi2(e9.subarray(l3)), l3 += 8, a6 = h3.getUint32(l3), l3 += 4, o6 = h3.getUint32(l3), l3 += 4, l3 += (t4 = Fi2(e9.subarray(l3))).length, l3 += (i3 = Fi2(e9.subarray(l3))).length;
    }
    var d4 = { scheme_id_uri: t4, value: i3, timescale: s4 || 1, presentation_time: n6, presentation_time_delta: r6, event_duration: a6, id: o6, message_data: new Uint8Array(e9.subarray(l3, e9.byteLength)) };
    return Hi2(u4, d4) ? d4 : void 0;
  }, $i2 = function(e9, t4, i3, s4) {
    return e9 || 0 === e9 ? e9 / t4 : s4 + i3 / t4;
  }, Hi2 = function(e9, t4) {
    var i3 = "\0" !== t4.scheme_id_uri, s4 = 0 === e9 && Vi2(t4.presentation_time_delta) && i3, n6 = 1 === e9 && Vi2(t4.presentation_time) && i3;
    return !(e9 > 1) && s4 || n6;
  }, Vi2 = function(e9) {
    return void 0 !== e9 || null !== e9;
  }, zi2 = { parseEmsgBox: ji2, scaleTime: $i2 }, Wi2 = "undefined" != typeof window ? window : void 0 !== e8 ? e8 : "undefined" != typeof self ? self : {}, Gi2 = ci2.toUnsigned, Xi2 = ci2.toHexString, Ki2 = yi2, Yi2 = pi2, Qi2 = zi2, Ji2 = Ti2, Zi2 = Ci2, es2 = vi2, ts2 = V3.getUint64, is2 = Wi2, ss2 = it2.parseId3Frames;
  Pi2 = function(e9) {
    var t4 = {};
    return Ki2(e9, ["moov", "trak"]).reduce(function(e10, t5) {
      var i3, s4, n6, r6, a6;
      return (i3 = Ki2(t5, ["tkhd"])[0]) ? (s4 = i3[0], r6 = Gi2(i3[n6 = 0 === s4 ? 12 : 20] << 24 | i3[n6 + 1] << 16 | i3[n6 + 2] << 8 | i3[n6 + 3]), (a6 = Ki2(t5, ["mdia", "mdhd"])[0]) ? (n6 = 0 === (s4 = a6[0]) ? 12 : 20, e10[r6] = Gi2(a6[n6] << 24 | a6[n6 + 1] << 16 | a6[n6 + 2] << 8 | a6[n6 + 3]), e10) : null) : null;
    }, t4);
  }, Li2 = function(e9, t4) {
    var i3 = Ki2(t4, ["moof", "traf"]).reduce(function(t5, i4) {
      var s4, n6 = Ki2(i4, ["tfhd"])[0], r6 = Gi2(n6[4] << 24 | n6[5] << 16 | n6[6] << 8 | n6[7]), a6 = e9[r6] || 9e4, o6 = Ki2(i4, ["tfdt"])[0], l3 = new DataView(o6.buffer, o6.byteOffset, o6.byteLength);
      let u4;
      return "bigint" == typeof (s4 = 1 === o6[0] ? ts2(o6.subarray(4, 12)) : l3.getUint32(4)) ? u4 = s4 / is2.BigInt(a6) : "number" != typeof s4 || isNaN(s4) || (u4 = s4 / a6), u4 < Number.MAX_SAFE_INTEGER && (u4 = Number(u4)), u4 < t5 && (t5 = u4), t5;
    }, 1 / 0);
    return "bigint" == typeof i3 || isFinite(i3) ? i3 : 0;
  }, Oi2 = function(e9, t4) {
    var i3, s4 = Ki2(t4, ["moof", "traf"]), n6 = 0, r6 = 0;
    if (s4 && s4.length) {
      var a6 = Ki2(s4[0], ["tfhd"])[0], o6 = Ki2(s4[0], ["trun"])[0], l3 = Ki2(s4[0], ["tfdt"])[0];
      if (a6) i3 = Ji2(a6).trackId;
      if (l3) n6 = es2(l3).baseMediaDecodeTime;
      if (o6) {
        var u4 = Zi2(o6);
        u4.samples && u4.samples.length && (r6 = u4.samples[0].compositionTimeOffset || 0);
      }
    }
    var h3 = e9[i3] || 9e4;
    "bigint" == typeof n6 && (r6 = is2.BigInt(r6), h3 = is2.BigInt(h3));
    var d4 = (n6 + r6) / h3;
    return "bigint" == typeof d4 && d4 < Number.MAX_SAFE_INTEGER && (d4 = Number(d4)), d4;
  }, Ni2 = function(e9) {
    var t4 = Ki2(e9, ["moov", "trak"]), i3 = [];
    return t4.forEach(function(e10) {
      var t5 = Ki2(e10, ["mdia", "hdlr"]), s4 = Ki2(e10, ["tkhd"]);
      t5.forEach(function(e11, t6) {
        var n6, r6, a6 = Yi2(e11.subarray(8, 12)), o6 = s4[t6];
        "vide" === a6 && (r6 = 0 === (n6 = new DataView(o6.buffer, o6.byteOffset, o6.byteLength)).getUint8(0) ? n6.getUint32(12) : n6.getUint32(20), i3.push(r6));
      });
    }), i3;
  }, Mi2 = function(e9) {
    var t4 = 0 === e9[0] ? 12 : 20;
    return Gi2(e9[t4] << 24 | e9[t4 + 1] << 16 | e9[t4 + 2] << 8 | e9[t4 + 3]);
  }, Ri2 = function(e9) {
    var t4 = Ki2(e9, ["moov", "trak"]), i3 = [];
    return t4.forEach(function(e10) {
      var t5, s4, n6 = {}, r6 = Ki2(e10, ["tkhd"])[0];
      r6 && (s4 = (t5 = new DataView(r6.buffer, r6.byteOffset, r6.byteLength)).getUint8(0), n6.id = 0 === s4 ? t5.getUint32(12) : t5.getUint32(20));
      var a6 = Ki2(e10, ["mdia", "hdlr"])[0];
      if (a6) {
        var o6 = Yi2(a6.subarray(8, 12));
        n6.type = "vide" === o6 ? "video" : "soun" === o6 ? "audio" : o6;
      }
      var l3 = Ki2(e10, ["mdia", "minf", "stbl", "stsd"])[0];
      if (l3) {
        var u4 = l3.subarray(8);
        n6.codec = Yi2(u4.subarray(4, 8));
        var h3, d4 = Ki2(u4, [n6.codec])[0];
        d4 && (/^[asm]vc[1-9]$/i.test(n6.codec) ? (h3 = d4.subarray(78), "avcC" === Yi2(h3.subarray(4, 8)) && h3.length > 11 ? (n6.codec += ".", n6.codec += Xi2(h3[9]), n6.codec += Xi2(h3[10]), n6.codec += Xi2(h3[11])) : n6.codec = "avc1.4d400d") : /^mp4[a,v]$/i.test(n6.codec) ? (h3 = d4.subarray(28), "esds" === Yi2(h3.subarray(4, 8)) && h3.length > 20 && 0 !== h3[19] ? (n6.codec += "." + Xi2(h3[19]), n6.codec += "." + Xi2(h3[20] >>> 2 & 63).replace(/^0/, "")) : n6.codec = "mp4a.40.2") : n6.codec = n6.codec.toLowerCase());
      }
      var c4 = Ki2(e10, ["mdia", "mdhd"])[0];
      c4 && (n6.timescale = Mi2(c4)), i3.push(n6);
    }), i3;
  }, Ui2 = function(e9, t4 = 0) {
    return Ki2(e9, ["emsg"]).map((e10) => {
      var i3 = Qi2.parseEmsgBox(new Uint8Array(e10)), s4 = ss2(i3.message_data);
      return { cueTime: Qi2.scaleTime(i3.presentation_time, i3.timescale, i3.presentation_time_delta, t4), duration: Qi2.scaleTime(i3.event_duration, i3.timescale), frames: s4 };
    });
  };
  var ns2 = { findBox: Ki2, parseType: Yi2, timescale: Pi2, startTime: Li2, compositionStartTime: Oi2, videoTrackIds: Ni2, tracks: Ri2, getTimescaleFromMediaHeader: Mi2, getEmsgID3: Ui2 };
  const { parseTrun: rs2 } = Bi2, { findBox: as2 } = ns2;
  var os2 = Wi2, ls2 = function(e9) {
    var t4 = as2(e9, ["moof", "traf"]), i3 = as2(e9, ["mdat"]), s4 = [];
    return i3.forEach(function(e10, i4) {
      var n6 = t4[i4];
      s4.push({ mdat: e10, traf: n6 });
    }), s4;
  }, us2 = function(e9, t4, i3) {
    var s4 = t4, n6 = i3.defaultSampleDuration || 0, r6 = i3.defaultSampleSize || 0, a6 = i3.trackId, o6 = [];
    return e9.forEach(function(e10) {
      var t5 = rs2(e10).samples;
      t5.forEach(function(e11) {
        void 0 === e11.duration && (e11.duration = n6), void 0 === e11.size && (e11.size = r6), e11.trackId = a6, e11.dts = s4, void 0 === e11.compositionTimeOffset && (e11.compositionTimeOffset = 0), "bigint" == typeof s4 ? (e11.pts = s4 + os2.BigInt(e11.compositionTimeOffset), s4 += os2.BigInt(e11.duration)) : (e11.pts = s4 + e11.compositionTimeOffset, s4 += e11.duration);
      }), o6 = o6.concat(t5);
    }), o6;
  }, hs2 = { getMdatTrafPairs: ls2, parseSamples: us2 }, ds2 = Se2.discardEmulationPreventionBytes, cs2 = Be2.CaptionStream, ps2 = yi2, ms2 = vi2, gs2 = Ti2, { getMdatTrafPairs: fs2, parseSamples: ys2 } = hs2, _s2 = function(e9, t4) {
    for (var i3 = e9, s4 = 0; s4 < t4.length; s4++) {
      var n6 = t4[s4];
      if (i3 < n6.size) return n6;
      i3 -= n6.size;
    }
    return null;
  }, bs2 = function(e9, t4, i3) {
    var s4, n6, r6, a6, o6 = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), l3 = { logs: [], seiNals: [] };
    for (n6 = 0; n6 + 4 < e9.length; n6 += r6) if (r6 = o6.getUint32(n6), n6 += 4, !(r6 <= 0)) switch (31 & e9[n6]) {
      case 6:
        var u4 = e9.subarray(n6 + 1, n6 + 1 + r6), h3 = _s2(n6, t4);
        if (s4 = { nalUnitType: "sei_rbsp", size: r6, data: u4, escapedRBSP: ds2(u4), trackId: i3 }, h3) s4.pts = h3.pts, s4.dts = h3.dts, a6 = h3;
        else {
          if (!a6) {
            l3.logs.push({ level: "warn", message: "We've encountered a nal unit without data at " + n6 + " for trackId " + i3 + ". See mux.js#223." });
            break;
          }
          s4.pts = a6.pts, s4.dts = a6.dts;
        }
        l3.seiNals.push(s4);
    }
    return l3;
  }, vs2 = function(e9, t4) {
    var i3 = {};
    return fs2(e9).forEach(function(e10) {
      var s4, n6, r6 = e10.mdat, a6 = e10.traf, o6 = ps2(a6, ["tfhd"]), l3 = gs2(o6[0]), u4 = l3.trackId, h3 = ps2(a6, ["tfdt"]), d4 = h3.length > 0 ? ms2(h3[0]).baseMediaDecodeTime : 0, c4 = ps2(a6, ["trun"]);
      t4 === u4 && c4.length > 0 && (s4 = ys2(c4, d4, l3), n6 = bs2(r6, s4, u4), i3[u4] || (i3[u4] = { seiNals: [], logs: [] }), i3[u4].seiNals = i3[u4].seiNals.concat(n6.seiNals), i3[u4].logs = i3[u4].logs.concat(n6.logs));
    }), i3;
  }, Ts2 = function(e9, t4, i3) {
    if (null === t4) return null;
    var s4 = vs2(e9, t4)[t4] || {};
    return { seiNals: s4.seiNals, logs: s4.logs, timescale: i3 };
  }, Ss2 = function() {
    var e9, t4, i3, s4, n6, r6, a6 = false;
    this.isInitialized = function() {
      return a6;
    }, this.init = function(t5) {
      e9 = new cs2(), a6 = true, r6 = !!t5 && t5.isPartial, e9.on("data", function(e10) {
        e10.startTime = e10.startPts / s4, e10.endTime = e10.endPts / s4, n6.captions.push(e10), n6.captionStreams[e10.stream] = true;
      }), e9.on("log", function(e10) {
        n6.logs.push(e10);
      });
    }, this.isNewInit = function(e10, t5) {
      return !(e10 && 0 === e10.length || t5 && "object" == typeof t5 && 0 === Object.keys(t5).length) && (i3 !== e10[0] || s4 !== t5[i3]);
    }, this.parse = function(e10, r7, a7) {
      var o6;
      if (!this.isInitialized()) return null;
      if (!r7 || !a7) return null;
      if (this.isNewInit(r7, a7)) i3 = r7[0], s4 = a7[i3];
      else if (null === i3 || !s4) return t4.push(e10), null;
      for (; t4.length > 0; ) {
        var l3 = t4.shift();
        this.parse(l3, r7, a7);
      }
      return (o6 = Ts2(e10, i3, s4)) && o6.logs && (n6.logs = n6.logs.concat(o6.logs)), null !== o6 && o6.seiNals ? (this.pushNals(o6.seiNals), this.flushStream(), n6) : n6.logs.length ? { logs: n6.logs, captions: [], captionStreams: [] } : null;
    }, this.pushNals = function(t5) {
      if (!this.isInitialized() || !t5 || 0 === t5.length) return null;
      t5.forEach(function(t6) {
        e9.push(t6);
      });
    }, this.flushStream = function() {
      if (!this.isInitialized()) return null;
      r6 ? e9.partialFlush() : e9.flush();
    }, this.clearParsedCaptions = function() {
      n6.captions = [], n6.captionStreams = {}, n6.logs = [];
    }, this.resetCaptionStream = function() {
      if (!this.isInitialized()) return null;
      e9.reset();
    }, this.clearAllCaptions = function() {
      this.clearParsedCaptions(), this.resetCaptionStream();
    }, this.reset = function() {
      t4 = [], i3 = null, s4 = null, n6 ? this.clearParsedCaptions() : n6 = { captions: [], captionStreams: {}, logs: [] }, this.resetCaptionStream();
    }, this.reset();
  }, Es2 = Ss2;
  const { parseTfdt: ws2 } = Bi2, Cs2 = yi2, { getTimescaleFromMediaHeader: ks2 } = ns2, { parseSamples: Is2, getMdatTrafPairs: xs2 } = hs2, As2 = function() {
    let e9 = 9e4;
    this.init = function(t4) {
      const i3 = Cs2(t4, ["moov", "trak", "mdia", "mdhd"])[0];
      i3 && (e9 = ks2(i3));
    }, this.parseSegment = function(t4) {
      const i3 = [], s4 = xs2(t4);
      let n6 = 0;
      return s4.forEach(function(t5) {
        const s5 = t5.mdat, r6 = t5.traf, a6 = Cs2(r6, ["tfdt"])[0], o6 = Cs2(r6, ["tfhd"])[0], l3 = Cs2(r6, ["trun"]);
        if (a6) {
          const e10 = ws2(a6);
          n6 = e10.baseMediaDecodeTime;
        }
        if (l3.length && o6) {
          const t6 = Is2(l3, n6, o6);
          let r7 = 0;
          t6.forEach(function(t7) {
            const n7 = new TextDecoder("utf-8"), a7 = s5.slice(r7, r7 + t7.size);
            if (Cs2(a7, ["vtte"])[0]) return void (r7 += t7.size);
            Cs2(a7, ["vttc"]).forEach(function(s6) {
              const r8 = Cs2(s6, ["payl"])[0], a8 = Cs2(s6, ["sttg"])[0], o7 = t7.pts / e9, l4 = (t7.pts + t7.duration) / e9;
              let u4, h3;
              if (r8) try {
                u4 = n7.decode(r8);
              } catch (d4) {
                console.error(d4);
              }
              if (a8) try {
                h3 = n7.decode(a8);
              } catch (d4) {
                console.error(d4);
              }
              t7.duration && u4 && i3.push({ cueText: u4, start: o7, end: l4, settings: h3 });
            }), r7 += t7.size;
          });
        }
      }), i3;
    };
  };
  var Ds2 = As2, Ps2 = Fe2, Ls2 = function(e9) {
    var t4 = 31 & e9[1];
    return t4 <<= 8, t4 |= e9[2];
  }, Os2 = function(e9) {
    return !!(64 & e9[1]);
  }, Ns2 = function(e9) {
    var t4 = 0;
    return (48 & e9[3]) >>> 4 > 1 && (t4 += e9[4] + 1), t4;
  }, Rs2 = function(e9) {
    if (!Os2(e9)) return null;
    var t4 = 4 + Ns2(e9);
    if (t4 >= e9.byteLength) return null;
    var i3, s4 = null;
    return 192 & (i3 = e9[t4 + 7]) && ((s4 = {}).pts = (14 & e9[t4 + 9]) << 27 | (255 & e9[t4 + 10]) << 20 | (254 & e9[t4 + 11]) << 12 | (255 & e9[t4 + 12]) << 5 | (254 & e9[t4 + 13]) >>> 3, s4.pts *= 4, s4.pts += (6 & e9[t4 + 13]) >>> 1, s4.dts = s4.pts, 64 & i3 && (s4.dts = (14 & e9[t4 + 14]) << 27 | (255 & e9[t4 + 15]) << 20 | (254 & e9[t4 + 16]) << 12 | (255 & e9[t4 + 17]) << 5 | (254 & e9[t4 + 18]) >>> 3, s4.dts *= 4, s4.dts += (6 & e9[t4 + 18]) >>> 1)), s4;
  }, Ms2 = function(e9) {
    switch (e9) {
      case 5:
        return "slice_layer_without_partitioning_rbsp_idr";
      case 6:
        return "sei_rbsp";
      case 7:
        return "seq_parameter_set_rbsp";
      case 8:
        return "pic_parameter_set_rbsp";
      case 9:
        return "access_unit_delimiter_rbsp";
      default:
        return null;
    }
  }, Us2 = { parseType: function(e9, t4) {
    var i3 = Ls2(e9);
    return 0 === i3 ? "pat" : i3 === t4 ? "pmt" : t4 ? "pes" : null;
  }, parsePat: function(e9) {
    var t4 = Os2(e9), i3 = 4 + Ns2(e9);
    return t4 && (i3 += e9[i3] + 1), (31 & e9[i3 + 10]) << 8 | e9[i3 + 11];
  }, parsePmt: function(e9) {
    var t4 = {}, i3 = Os2(e9), s4 = 4 + Ns2(e9);
    if (i3 && (s4 += e9[s4] + 1), 1 & e9[s4 + 5]) {
      var n6;
      n6 = 3 + ((15 & e9[s4 + 1]) << 8 | e9[s4 + 2]) - 4;
      for (var r6 = 12 + ((15 & e9[s4 + 10]) << 8 | e9[s4 + 11]); r6 < n6; ) {
        var a6 = s4 + r6;
        t4[(31 & e9[a6 + 1]) << 8 | e9[a6 + 2]] = e9[a6], r6 += 5 + ((15 & e9[a6 + 3]) << 8 | e9[a6 + 4]);
      }
      return t4;
    }
  }, parsePayloadUnitStartIndicator: Os2, parsePesType: function(e9, t4) {
    switch (t4[Ls2(e9)]) {
      case Ps2.H264_STREAM_TYPE:
        return "video";
      case Ps2.ADTS_STREAM_TYPE:
        return "audio";
      case Ps2.METADATA_STREAM_TYPE:
        return "timed-metadata";
      default:
        return null;
    }
  }, parsePesTime: Rs2, videoPacketContainsKeyFrame: function(e9) {
    for (var t4 = 4 + Ns2(e9), i3 = e9.subarray(t4), s4 = 0, n6 = 0, r6 = false; n6 < i3.byteLength - 3; n6++) if (1 === i3[n6 + 2]) {
      s4 = n6 + 5;
      break;
    }
    for (; s4 < i3.byteLength; ) switch (i3[s4]) {
      case 0:
        if (0 !== i3[s4 - 1]) {
          s4 += 2;
          break;
        }
        if (0 !== i3[s4 - 2]) {
          s4++;
          break;
        }
        n6 + 3 !== s4 - 2 && "slice_layer_without_partitioning_rbsp_idr" === Ms2(31 & i3[n6 + 3]) && (r6 = true);
        do {
          s4++;
        } while (1 !== i3[s4] && s4 < i3.length);
        n6 = s4 - 2, s4 += 3;
        break;
      case 1:
        if (0 !== i3[s4 - 1] || 0 !== i3[s4 - 2]) {
          s4 += 3;
          break;
        }
        "slice_layer_without_partitioning_rbsp_idr" === Ms2(31 & i3[n6 + 3]) && (r6 = true), n6 = s4 - 2, s4 += 3;
        break;
      default:
        s4 += 3;
    }
    return i3 = i3.subarray(n6), s4 -= n6, n6 = 0, i3 && i3.byteLength > 3 && "slice_layer_without_partitioning_rbsp_idr" === Ms2(31 & i3[n6 + 3]) && (r6 = true), r6;
  } }, Bs2 = Fe2, Fs2 = Ge2.handleRollover, qs2 = {};
  qs2.ts = Us2, qs2.aac = Mt2;
  var js2 = ce2.ONE_SECOND_IN_TS, $s2 = 188, Hs2 = 71, Vs2 = function(e9, t4) {
    for (var i3, s4 = 0, n6 = $s2; n6 < e9.byteLength; ) if (e9[s4] !== Hs2 || e9[n6] !== Hs2) s4++, n6++;
    else {
      switch (i3 = e9.subarray(s4, n6), qs2.ts.parseType(i3, t4.pid)) {
        case "pat":
          t4.pid = qs2.ts.parsePat(i3);
          break;
        case "pmt":
          var r6 = qs2.ts.parsePmt(i3);
          t4.table = t4.table || {}, Object.keys(r6).forEach(function(e10) {
            t4.table[e10] = r6[e10];
          });
      }
      s4 += $s2, n6 += $s2;
    }
  }, zs2 = function(e9, t4, i3) {
    for (var s4, n6, r6, a6, o6 = 0, l3 = $s2, u4 = false; l3 <= e9.byteLength; ) if (e9[o6] !== Hs2 || e9[l3] !== Hs2 && l3 !== e9.byteLength) o6++, l3++;
    else {
      if (s4 = e9.subarray(o6, l3), "pes" === qs2.ts.parseType(s4, t4.pid)) n6 = qs2.ts.parsePesType(s4, t4.table), r6 = qs2.ts.parsePayloadUnitStartIndicator(s4), "audio" === n6 && r6 && (a6 = qs2.ts.parsePesTime(s4)) && (a6.type = "audio", i3.audio.push(a6), u4 = true);
      if (u4) break;
      o6 += $s2, l3 += $s2;
    }
    for (o6 = (l3 = e9.byteLength) - $s2, u4 = false; o6 >= 0; ) if (e9[o6] !== Hs2 || e9[l3] !== Hs2 && l3 !== e9.byteLength) o6--, l3--;
    else {
      if (s4 = e9.subarray(o6, l3), "pes" === qs2.ts.parseType(s4, t4.pid)) n6 = qs2.ts.parsePesType(s4, t4.table), r6 = qs2.ts.parsePayloadUnitStartIndicator(s4), "audio" === n6 && r6 && (a6 = qs2.ts.parsePesTime(s4)) && (a6.type = "audio", i3.audio.push(a6), u4 = true);
      if (u4) break;
      o6 -= $s2, l3 -= $s2;
    }
  }, Ws2 = function(e9, t4, i3) {
    for (var s4, n6, r6, a6, o6, l3, u4, h3 = 0, d4 = $s2, c4 = false, p3 = { data: [], size: 0 }; d4 < e9.byteLength; ) if (e9[h3] !== Hs2 || e9[d4] !== Hs2) h3++, d4++;
    else {
      if (s4 = e9.subarray(h3, d4), "pes" === qs2.ts.parseType(s4, t4.pid)) {
        if (n6 = qs2.ts.parsePesType(s4, t4.table), r6 = qs2.ts.parsePayloadUnitStartIndicator(s4), "video" === n6 && (r6 && !c4 && (a6 = qs2.ts.parsePesTime(s4)) && (a6.type = "video", i3.video.push(a6), c4 = true), !i3.firstKeyFrame)) {
          if (r6 && 0 !== p3.size) {
            for (o6 = new Uint8Array(p3.size), l3 = 0; p3.data.length; ) u4 = p3.data.shift(), o6.set(u4, l3), l3 += u4.byteLength;
            if (qs2.ts.videoPacketContainsKeyFrame(o6)) {
              var m6 = qs2.ts.parsePesTime(o6);
              m6 ? (i3.firstKeyFrame = m6, i3.firstKeyFrame.type = "video") : console.warn("Failed to extract PTS/DTS from PES at first keyframe. This could be an unusual TS segment, or else mux.js did not parse your TS segment correctly. If you know your TS segments do contain PTS/DTS on keyframes please file a bug report! You can try ffprobe to double check for yourself.");
            }
            p3.size = 0;
          }
          p3.data.push(s4), p3.size += s4.byteLength;
        }
      }
      if (c4 && i3.firstKeyFrame) break;
      h3 += $s2, d4 += $s2;
    }
    for (h3 = (d4 = e9.byteLength) - $s2, c4 = false; h3 >= 0; ) if (e9[h3] !== Hs2 || e9[d4] !== Hs2) h3--, d4--;
    else {
      if (s4 = e9.subarray(h3, d4), "pes" === qs2.ts.parseType(s4, t4.pid)) n6 = qs2.ts.parsePesType(s4, t4.table), r6 = qs2.ts.parsePayloadUnitStartIndicator(s4), "video" === n6 && r6 && (a6 = qs2.ts.parsePesTime(s4)) && (a6.type = "video", i3.video.push(a6), c4 = true);
      if (c4) break;
      h3 -= $s2, d4 -= $s2;
    }
  }, Gs2 = function(e9, t4) {
    if (e9.audio && e9.audio.length) {
      var i3 = t4;
      (void 0 === i3 || isNaN(i3)) && (i3 = e9.audio[0].dts), e9.audio.forEach(function(e10) {
        e10.dts = Fs2(e10.dts, i3), e10.pts = Fs2(e10.pts, i3), e10.dtsTime = e10.dts / js2, e10.ptsTime = e10.pts / js2;
      });
    }
    if (e9.video && e9.video.length) {
      var s4 = t4;
      if ((void 0 === s4 || isNaN(s4)) && (s4 = e9.video[0].dts), e9.video.forEach(function(e10) {
        e10.dts = Fs2(e10.dts, s4), e10.pts = Fs2(e10.pts, s4), e10.dtsTime = e10.dts / js2, e10.ptsTime = e10.pts / js2;
      }), e9.firstKeyFrame) {
        var n6 = e9.firstKeyFrame;
        n6.dts = Fs2(n6.dts, s4), n6.pts = Fs2(n6.pts, s4), n6.dtsTime = n6.dts / js2, n6.ptsTime = n6.pts / js2;
      }
    }
  }, Xs2 = function(e9) {
    for (var t4, i3 = false, s4 = 0, n6 = null, r6 = null, a6 = 0, o6 = 0; e9.length - o6 >= 3; ) {
      switch (qs2.aac.parseType(e9, o6)) {
        case "timed-metadata":
          if (e9.length - o6 < 10) {
            i3 = true;
            break;
          }
          if ((a6 = qs2.aac.parseId3TagSize(e9, o6)) > e9.length) {
            i3 = true;
            break;
          }
          null === r6 && (t4 = e9.subarray(o6, o6 + a6), r6 = qs2.aac.parseAacTimestamp(t4)), o6 += a6;
          break;
        case "audio":
          if (e9.length - o6 < 7) {
            i3 = true;
            break;
          }
          if ((a6 = qs2.aac.parseAdtsSize(e9, o6)) > e9.length) {
            i3 = true;
            break;
          }
          null === n6 && (t4 = e9.subarray(o6, o6 + a6), n6 = qs2.aac.parseSampleRate(t4)), s4++, o6 += a6;
          break;
        default:
          o6++;
      }
      if (i3) return null;
    }
    if (null === n6 || null === r6) return null;
    var l3 = js2 / n6;
    return { audio: [{ type: "audio", dts: r6, pts: r6 }, { type: "audio", dts: r6 + 1024 * s4 * l3, pts: r6 + 1024 * s4 * l3 }] };
  }, Ks2 = function(e9) {
    var t4 = { pid: null, table: null }, i3 = {};
    for (var s4 in Vs2(e9, t4), t4.table) {
      if (t4.table.hasOwnProperty(s4)) switch (t4.table[s4]) {
        case Bs2.H264_STREAM_TYPE:
          i3.video = [], Ws2(e9, t4, i3), 0 === i3.video.length && delete i3.video;
          break;
        case Bs2.ADTS_STREAM_TYPE:
          i3.audio = [], zs2(e9, t4, i3), 0 === i3.audio.length && delete i3.audio;
      }
    }
    return i3;
  }, Ys2 = { inspect: function(e9, t4) {
    var i3;
    return (i3 = qs2.aac.isLikelyAacData(e9) ? Xs2(e9) : Ks2(e9)) && (i3.audio || i3.video) ? (Gs2(i3, t4), i3) : null;
  }, parseAudioPes_: zs2 };
  const Qs2 = function(e9, t4) {
    t4.on("data", function(t5) {
      const i3 = t5.initSegment;
      t5.initSegment = { data: i3.buffer, byteOffset: i3.byteOffset, byteLength: i3.byteLength };
      const s4 = t5.data;
      t5.data = s4.buffer, e9.postMessage({ action: "data", segment: t5, byteOffset: s4.byteOffset, byteLength: s4.byteLength }, [t5.data]);
    }), t4.on("done", function(t5) {
      e9.postMessage({ action: "done" });
    }), t4.on("gopInfo", function(t5) {
      e9.postMessage({ action: "gopInfo", gopInfo: t5 });
    }), t4.on("videoSegmentTimingInfo", function(t5) {
      const i3 = { start: { decode: ce2.videoTsToSeconds(t5.start.dts), presentation: ce2.videoTsToSeconds(t5.start.pts) }, end: { decode: ce2.videoTsToSeconds(t5.end.dts), presentation: ce2.videoTsToSeconds(t5.end.pts) }, baseMediaDecodeTime: ce2.videoTsToSeconds(t5.baseMediaDecodeTime) };
      t5.prependedContentDuration && (i3.prependedContentDuration = ce2.videoTsToSeconds(t5.prependedContentDuration)), e9.postMessage({ action: "videoSegmentTimingInfo", videoSegmentTimingInfo: i3 });
    }), t4.on("audioSegmentTimingInfo", function(t5) {
      const i3 = { start: { decode: ce2.videoTsToSeconds(t5.start.dts), presentation: ce2.videoTsToSeconds(t5.start.pts) }, end: { decode: ce2.videoTsToSeconds(t5.end.dts), presentation: ce2.videoTsToSeconds(t5.end.pts) }, baseMediaDecodeTime: ce2.videoTsToSeconds(t5.baseMediaDecodeTime) };
      t5.prependedContentDuration && (i3.prependedContentDuration = ce2.videoTsToSeconds(t5.prependedContentDuration)), e9.postMessage({ action: "audioSegmentTimingInfo", audioSegmentTimingInfo: i3 });
    }), t4.on("id3Frame", function(t5) {
      e9.postMessage({ action: "id3Frame", id3Frame: t5 });
    }), t4.on("caption", function(t5) {
      e9.postMessage({ action: "caption", caption: t5 });
    }), t4.on("trackinfo", function(t5) {
      e9.postMessage({ action: "trackinfo", trackInfo: t5 });
    }), t4.on("audioTimingInfo", function(t5) {
      e9.postMessage({ action: "audioTimingInfo", audioTimingInfo: { start: ce2.videoTsToSeconds(t5.start), end: ce2.videoTsToSeconds(t5.end) } });
    }), t4.on("videoTimingInfo", function(t5) {
      e9.postMessage({ action: "videoTimingInfo", videoTimingInfo: { start: ce2.videoTsToSeconds(t5.start), end: ce2.videoTsToSeconds(t5.end) } });
    }), t4.on("log", function(t5) {
      e9.postMessage({ action: "log", log: t5 });
    });
  };
  class Js2 {
    constructor(e9, t4) {
      this.options = t4 || {}, this.self = e9, this.init();
    }
    init() {
      this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new di2.Transmuxer(this.options), Qs2(this.self, this.transmuxer);
    }
    pushMp4Captions(e9) {
      this.captionParser || (this.captionParser = new Es2(), this.captionParser.init());
      const t4 = new Uint8Array(e9.data, e9.byteOffset, e9.byteLength), i3 = this.captionParser.parse(t4, e9.trackIds, e9.timescales);
      this.self.postMessage({ action: "mp4Captions", captions: i3 && i3.captions || [], logs: i3 && i3.logs || [], data: t4.buffer }, [t4.buffer]);
    }
    initMp4WebVttParser(e9) {
      this.webVttParser || (this.webVttParser = new Ds2());
      const t4 = new Uint8Array(e9.data, e9.byteOffset, e9.byteLength);
      this.webVttParser.init(t4);
    }
    getMp4WebVttText(e9) {
      this.webVttParser || (this.webVttParser = new Ds2());
      const t4 = new Uint8Array(e9.data, e9.byteOffset, e9.byteLength), i3 = this.webVttParser.parseSegment(t4);
      this.self.postMessage({ action: "getMp4WebVttText", mp4VttCues: i3 || [], data: t4.buffer }, [t4.buffer]);
    }
    probeMp4StartTime({ timescales: e9, data: t4 }) {
      const i3 = ns2.startTime(e9, t4);
      this.self.postMessage({ action: "probeMp4StartTime", startTime: i3, data: t4 }, [t4.buffer]);
    }
    probeMp4Tracks({ data: e9 }) {
      const t4 = ns2.tracks(e9);
      this.self.postMessage({ action: "probeMp4Tracks", tracks: t4, data: e9 }, [e9.buffer]);
    }
    probeEmsgID3({ data: e9, offset: t4 }) {
      const i3 = ns2.getEmsgID3(e9, t4);
      this.self.postMessage({ action: "probeEmsgID3", id3Frames: i3, emsgData: e9 }, [e9.buffer]);
    }
    probeTs({ data: e9, baseStartTime: t4 }) {
      const i3 = "number" != typeof t4 || isNaN(t4) ? void 0 : t4 * ce2.ONE_SECOND_IN_TS, s4 = Ys2.inspect(e9, i3);
      let n6 = null;
      s4 && (n6 = { hasVideo: s4.video && 2 === s4.video.length || false, hasAudio: s4.audio && 2 === s4.audio.length || false }, n6.hasVideo && (n6.videoStart = s4.video[0].ptsTime), n6.hasAudio && (n6.audioStart = s4.audio[0].ptsTime)), this.self.postMessage({ action: "probeTs", result: n6, data: e9 }, [e9.buffer]);
    }
    clearAllMp4Captions() {
      this.captionParser && this.captionParser.clearAllCaptions();
    }
    clearParsedMp4Captions() {
      this.captionParser && this.captionParser.clearParsedCaptions();
    }
    push(e9) {
      const t4 = new Uint8Array(e9.data, e9.byteOffset, e9.byteLength);
      this.transmuxer.push(t4);
    }
    reset() {
      this.transmuxer.reset();
    }
    setTimestampOffset(e9) {
      const t4 = e9.timestampOffset || 0;
      this.transmuxer.setBaseMediaDecodeTime(Math.round(ce2.secondsToVideoTs(t4)));
    }
    setAudioAppendStart(e9) {
      this.transmuxer.setAudioAppendStart(Math.ceil(ce2.secondsToVideoTs(e9.appendStart)));
    }
    setRemux(e9) {
      this.transmuxer.setRemux(e9.remux);
    }
    flush(e9) {
      this.transmuxer.flush(), self.postMessage({ action: "done", type: "transmuxed" });
    }
    endTimeline() {
      this.transmuxer.endTimeline(), self.postMessage({ action: "endedtimeline", type: "transmuxed" });
    }
    alignGopsWith(e9) {
      this.transmuxer.alignGopsWith(e9.gopsToAlignWith.slice());
    }
  }
  self.onmessage = function(e9) {
    "init" === e9.data.action && e9.data.options ? this.messageHandlers = new Js2(self, e9.data.options) : (this.messageHandlers || (this.messageHandlers = new Js2(self)), e9.data && e9.data.action && "init" !== e9.data.action && this.messageHandlers[e9.data.action] && this.messageHandlers[e9.data.action](e9.data));
  };
}));
var _c = mc(yc);
var bc = (e8, t3, i2) => {
  const { type: s3, initSegment: n5, captions: r5, captionStreams: a5, metadata: o5, videoFrameDtsTime: l2, videoFramePtsTime: u3 } = e8.data.segment;
  t3.buffer.push({ captions: r5, captionStreams: a5, metadata: o5 });
  const h2 = e8.data.segment.boxes || { data: e8.data.segment.data }, d3 = { type: s3, data: new Uint8Array(h2.data, h2.data.byteOffset, h2.data.byteLength), initSegment: new Uint8Array(n5.data, n5.byteOffset, n5.byteLength) };
  void 0 !== l2 && (d3.videoFrameDtsTime = l2), void 0 !== u3 && (d3.videoFramePtsTime = u3), i2(d3);
};
var vc = ({ transmuxedData: e8, callback: t3 }) => {
  e8.buffer = [], t3(e8);
};
var Tc = (e8, t3) => {
  t3.gopInfo = e8.data.gopInfo;
};
var Sc = (e8) => {
  const { transmuxer: t3, bytes: i2, audioAppendStart: s3, gopsToAlignWith: n5, remux: r5, onData: a5, onTrackInfo: o5, onAudioTimingInfo: l2, onVideoTimingInfo: u3, onVideoSegmentTimingInfo: h2, onAudioSegmentTimingInfo: d3, onId3: c3, onCaptions: p2, onDone: m5, onEndedTimeline: g5, onTransmuxerLog: f3, isEndOfTimeline: y4, segment: _2, triggerSegmentEventFn: b2 } = e8, v4 = { buffer: [] };
  let T2 = y4;
  const S4 = (i3) => {
    t3.currentTransmux === e8 && ("data" === i3.data.action && bc(i3, v4, a5), "trackinfo" === i3.data.action && o5(i3.data.trackInfo), "gopInfo" === i3.data.action && Tc(i3, v4), "audioTimingInfo" === i3.data.action && l2(i3.data.audioTimingInfo), "videoTimingInfo" === i3.data.action && u3(i3.data.videoTimingInfo), "videoSegmentTimingInfo" === i3.data.action && h2(i3.data.videoSegmentTimingInfo), "audioSegmentTimingInfo" === i3.data.action && d3(i3.data.audioSegmentTimingInfo), "id3Frame" === i3.data.action && c3([i3.data.id3Frame], i3.data.id3Frame.dispatchType), "caption" === i3.data.action && p2(i3.data.caption), "endedtimeline" === i3.data.action && (T2 = false, g5()), "log" === i3.data.action && f3(i3.data.log), "transmuxed" === i3.data.type && (T2 || (t3.onmessage = null, vc({ transmuxedData: v4, callback: m5 }), Ec(t3))));
  }, E3 = () => {
    const e9 = { message: "Received an error message from the transmuxer worker", metadata: { errorType: dh.Error.StreamingFailedToTransmuxSegment, segmentInfo: Wp({ segment: _2 }) } };
    m5(null, e9);
  };
  if (t3.onmessage = S4, t3.onerror = E3, s3 && t3.postMessage({ action: "setAudioAppendStart", appendStart: s3 }), Array.isArray(n5) && t3.postMessage({ action: "alignGopsWith", gopsToAlignWith: n5 }), void 0 !== r5 && t3.postMessage({ action: "setRemux", remux: r5 }), i2.byteLength) {
    const e9 = i2 instanceof ArrayBuffer ? i2 : i2.buffer, s4 = i2 instanceof ArrayBuffer ? 0 : i2.byteOffset;
    b2({ type: "segmenttransmuxingstart", segment: _2 }), t3.postMessage({ action: "push", data: e9, byteOffset: s4, byteLength: i2.byteLength }, [e9]);
  }
  y4 && t3.postMessage({ action: "endTimeline" }), t3.postMessage({ action: "flush" });
};
var Ec = (e8) => {
  e8.currentTransmux = null, e8.transmuxQueue.length && (e8.currentTransmux = e8.transmuxQueue.shift(), "function" == typeof e8.currentTransmux ? e8.currentTransmux() : Sc(e8.currentTransmux));
};
var wc = (e8, t3) => {
  e8.postMessage({ action: t3 }), Ec(e8);
};
var Cc = (e8, t3) => {
  if (!t3.currentTransmux) return t3.currentTransmux = e8, void wc(t3, e8);
  t3.transmuxQueue.push(wc.bind(null, t3, e8));
};
var kc = (e8) => {
  if (!e8.transmuxer.currentTransmux) return e8.transmuxer.currentTransmux = e8, void Sc(e8);
  e8.transmuxer.transmuxQueue.push(e8);
};
var Ic = { reset: (e8) => {
  Cc("reset", e8);
}, endTimeline: (e8) => {
  Cc("endTimeline", e8);
}, transmux: kc, createTransmuxer: (e8) => {
  const t3 = new _c();
  t3.currentTransmux = null, t3.transmuxQueue = [];
  const i2 = t3.terminate;
  return t3.terminate = () => (t3.currentTransmux = null, t3.transmuxQueue.length = 0, i2.call(t3)), t3.postMessage({ action: "init", options: e8 }), t3;
} };
var xc = function(e8) {
  const t3 = e8.transmuxer, i2 = e8.endAction || e8.action, s3 = e8.callback, n5 = Ue({}, e8, { endAction: null, transmuxer: null, callback: null }), r5 = (n6) => {
    n6.data.action === i2 && (t3.removeEventListener("message", r5), n6.data.data && (n6.data.data = new Uint8Array(n6.data.data, e8.byteOffset || 0, e8.byteLength || n6.data.data.byteLength), e8.data && (e8.data = n6.data.data)), s3(n6.data));
  };
  if (t3.addEventListener("message", r5), e8.data) {
    const i3 = e8.data instanceof ArrayBuffer;
    n5.byteOffset = i3 ? 0 : e8.data.byteOffset, n5.byteLength = e8.data.byteLength;
    const s4 = [i3 ? e8.data : e8.data.buffer];
    t3.postMessage(n5, s4);
  } else t3.postMessage(n5);
};
var Ac = { FAILURE: 2, TIMEOUT: -101, ABORTED: -102 };
var Dc = "wvtt";
var Pc = (e8) => {
  e8.forEach((e9) => {
    e9.abort();
  });
};
var Lc = (e8) => ({ bandwidth: e8.bandwidth, bytesReceived: e8.bytesReceived || 0, roundTripTime: e8.roundTripTime || 0 });
var Oc = (e8) => {
  const t3 = e8.target, i2 = { bandwidth: 1 / 0, bytesReceived: 0, roundTripTime: Date.now() - t3.requestTime || 0 };
  return i2.bytesReceived = e8.loaded, i2.bandwidth = Math.floor(i2.bytesReceived / i2.roundTripTime * 8 * 1e3), i2;
};
var Nc = (e8, t3) => {
  const { requestType: i2 } = t3, s3 = gd({ requestType: i2, request: t3, error: e8 });
  return t3.timedout ? { status: t3.status, message: "HLS request timed-out at URL: " + t3.uri, code: Ac.TIMEOUT, xhr: t3, metadata: s3 } : t3.aborted ? { status: t3.status, message: "HLS request aborted at URL: " + t3.uri, code: Ac.ABORTED, xhr: t3, metadata: s3 } : e8 ? { status: t3.status, message: "HLS request errored at URL: " + t3.uri, code: Ac.FAILURE, xhr: t3, metadata: s3 } : "arraybuffer" === t3.responseType && 0 === t3.response.byteLength ? { status: t3.status, message: "Empty HLS response at URL: " + t3.uri, code: Ac.FAILURE, xhr: t3, metadata: s3 } : null;
};
var Rc = (e8, t3, i2, s3) => (n5, r5) => {
  const a5 = r5.response, o5 = Nc(n5, r5);
  if (o5) return i2(o5, e8);
  if (16 !== a5.byteLength) return i2({ status: r5.status, message: "Invalid HLS key at URL: " + r5.uri, code: Ac.FAILURE, xhr: r5 }, e8);
  const l2 = new DataView(a5), u3 = new Uint32Array([l2.getUint32(0), l2.getUint32(4), l2.getUint32(8), l2.getUint32(12)]);
  for (let e9 = 0; e9 < t3.length; e9++) t3[e9].bytes = u3;
  const h2 = { uri: r5.uri };
  return s3({ type: "segmentkeyloadcomplete", segment: e8, keyInfo: h2 }), i2(null, e8);
};
var Mc = (e8, t3) => {
  t3 === Dc && e8.transmuxer.postMessage({ action: "initMp4WebVttParser", data: e8.map.bytes });
};
var Uc = (e8, t3, i2) => {
  t3 === Dc && xc({ action: "getMp4WebVttText", data: e8.bytes, transmuxer: e8.transmuxer, callback: ({ data: t4, mp4VttCues: s3 }) => {
    e8.bytes = t4, i2(null, e8, { mp4VttCues: s3 });
  } });
};
var Bc = (e8, t3) => {
  const i2 = Qs(e8.map.bytes);
  if ("mp4" !== i2) {
    const s3 = e8.map.resolvedUri || e8.map.uri, n5 = i2 || "unknown";
    return t3({ internal: true, message: `Found unsupported ${n5} container for initialization segment at URL: ${s3}`, code: Ac.FAILURE, metadata: { mediaType: n5 } });
  }
  xc({ action: "probeMp4Tracks", data: e8.map.bytes, transmuxer: e8.transmuxer, callback: ({ tracks: i3, data: s3 }) => (e8.map.bytes = s3, i3.forEach(function(t4) {
    e8.map.tracks = e8.map.tracks || {}, e8.map.tracks[t4.type] || (e8.map.tracks[t4.type] = t4, "number" == typeof t4.id && t4.timescale && (e8.map.timescales = e8.map.timescales || {}, e8.map.timescales[t4.id] = t4.timescale), "text" === t4.type && Mc(e8, t4.codec));
  }), t3(null)) });
};
var Fc = ({ segment: e8, finishProcessingFn: t3, triggerSegmentEventFn: i2 }) => (s3, n5) => {
  const r5 = Nc(s3, n5);
  if (r5) return t3(r5, e8);
  const a5 = new Uint8Array(n5.response);
  if (i2({ type: "segmentloaded", segment: e8 }), e8.map.key) return e8.map.encryptedBytes = a5, t3(null, e8);
  e8.map.bytes = a5, Bc(e8, function(i3) {
    if (i3) return i3.xhr = n5, i3.status = n5.status, t3(i3, e8);
    t3(null, e8);
  });
};
var qc = ({ segment: e8, finishProcessingFn: t3, responseType: i2, triggerSegmentEventFn: s3 }) => (n5, r5) => {
  const a5 = Nc(n5, r5);
  if (a5) return t3(a5, e8);
  s3({ type: "segmentloaded", segment: e8 });
  const o5 = "arraybuffer" !== i2 && r5.responseText ? dc(r5.responseText.substring(e8.lastReachedChar || 0)) : r5.response;
  return e8.stats = Lc(r5), e8.key ? e8.encryptedBytes = new Uint8Array(o5) : e8.bytes = new Uint8Array(o5), t3(null, e8);
};
var jc = ({ segment: e8, bytes: t3, trackInfoFn: i2, timingInfoFn: s3, videoSegmentTimingInfoFn: n5, audioSegmentTimingInfoFn: r5, id3Fn: a5, captionsFn: o5, isEndOfTimeline: l2, endedTimelineFn: u3, dataFn: h2, doneFn: d3, onTransmuxerLog: c3, triggerSegmentEventFn: p2 }) => {
  const m5 = e8.map && e8.map.tracks || {}, g5 = Boolean(m5.audio && m5.video);
  let f3 = s3.bind(null, e8, "audio", "start");
  const y4 = s3.bind(null, e8, "audio", "end");
  let _2 = s3.bind(null, e8, "video", "start");
  const b2 = s3.bind(null, e8, "video", "end"), v4 = () => kc({ bytes: t3, transmuxer: e8.transmuxer, audioAppendStart: e8.audioAppendStart, gopsToAlignWith: e8.gopsToAlignWith, remux: g5, onData: (t4) => {
    t4.type = "combined" === t4.type ? "video" : t4.type, h2(e8, t4);
  }, onTrackInfo: (t4) => {
    i2 && (g5 && (t4.isMuxed = true), i2(e8, t4));
  }, onAudioTimingInfo: (e9) => {
    f3 && void 0 !== e9.start && (f3(e9.start), f3 = null), y4 && void 0 !== e9.end && y4(e9.end);
  }, onVideoTimingInfo: (e9) => {
    _2 && void 0 !== e9.start && (_2(e9.start), _2 = null), b2 && void 0 !== e9.end && b2(e9.end);
  }, onVideoSegmentTimingInfo: (t4) => {
    const i3 = { pts: { start: t4.start.presentation, end: t4.end.presentation }, dts: { start: t4.start.decode, end: t4.end.decode } };
    p2({ type: "segmenttransmuxingtiminginfoavailable", segment: e8, timingInfo: i3 }), n5(t4);
  }, onAudioSegmentTimingInfo: (t4) => {
    const i3 = { pts: { start: t4.start.pts, end: t4.end.pts }, dts: { start: t4.start.dts, end: t4.end.dts } };
    p2({ type: "segmenttransmuxingtiminginfoavailable", segment: e8, timingInfo: i3 }), r5(t4);
  }, onId3: (t4, i3) => {
    a5(e8, t4, i3);
  }, onCaptions: (t4) => {
    o5(e8, [t4]);
  }, isEndOfTimeline: l2, onEndedTimeline: () => {
    u3();
  }, onTransmuxerLog: c3, onDone: (t4, i3) => {
    d3 && (t4.type = "combined" === t4.type ? "video" : t4.type, p2({ type: "segmenttransmuxingcomplete", segment: e8 }), d3(i3, e8, t4));
  }, segment: e8, triggerSegmentEventFn: p2 });
  xc({ action: "probeTs", transmuxer: e8.transmuxer, data: t3, baseStartTime: e8.baseStartTime, callback: (s4) => {
    e8.bytes = t3 = s4.data;
    const n6 = s4.result;
    n6 && (i2(e8, { hasAudio: n6.hasAudio, hasVideo: n6.hasVideo, isMuxed: g5 }), i2 = null), v4();
  } });
};
var $c = ({ segment: e8, bytes: t3, trackInfoFn: i2, timingInfoFn: s3, videoSegmentTimingInfoFn: n5, audioSegmentTimingInfoFn: r5, id3Fn: a5, captionsFn: o5, isEndOfTimeline: l2, endedTimelineFn: u3, dataFn: h2, doneFn: d3, onTransmuxerLog: c3, triggerSegmentEventFn: p2 }) => {
  let m5 = new Uint8Array(t3);
  if (Js(m5)) {
    e8.isFmp4 = true;
    const { tracks: n6 } = e8.map;
    if (n6.text && (!n6.audio || !n6.video)) return h2(e8, { data: m5, type: "text" }), void Uc(e8, n6.text.codec, d3);
    const r6 = { isFmp4: true, hasVideo: !!n6.video, hasAudio: !!n6.audio };
    n6.audio && n6.audio.codec && "enca" !== n6.audio.codec && (r6.audioCodec = n6.audio.codec), n6.video && n6.video.codec && "encv" !== n6.video.codec && (r6.videoCodec = n6.video.codec), n6.video && n6.audio && (r6.isMuxed = true), i2(e8, r6);
    const l3 = (t4, i3) => {
      h2(e8, { data: m5, type: r6.hasAudio && !r6.isMuxed ? "audio" : "video" }), i3 && i3.length && a5(e8, i3), t4 && t4.length && o5(e8, t4), d3(null, e8, {});
    };
    xc({ action: "probeMp4StartTime", timescales: e8.map.timescales, data: m5, transmuxer: e8.transmuxer, callback: ({ data: i3, startTime: a6 }) => {
      t3 = i3.buffer, e8.bytes = m5 = i3, r6.hasAudio && !r6.isMuxed && s3(e8, "audio", "start", a6), r6.hasVideo && s3(e8, "video", "start", a6), xc({ action: "probeEmsgID3", data: m5, transmuxer: e8.transmuxer, offset: a6, callback: ({ emsgData: i4, id3Frames: s4 }) => {
        t3 = i4.buffer, e8.bytes = m5 = i4, n6.video && i4.byteLength && e8.transmuxer ? xc({ action: "pushMp4Captions", endAction: "mp4Captions", transmuxer: e8.transmuxer, data: m5, timescales: e8.map.timescales, trackIds: [n6.video.id], callback: (i5) => {
          t3 = i5.data.buffer, e8.bytes = m5 = i5.data, i5.logs.forEach(function(e9) {
            c3(vh(e9, { stream: "mp4CaptionParser" }));
          }), l3(i5.captions, s4);
        } }) : l3(void 0, s4);
      } });
    } });
  } else if (e8.transmuxer) {
    if (void 0 === e8.container && (e8.container = Qs(m5)), "ts" !== e8.container && "aac" !== e8.container) return i2(e8, { hasAudio: false, hasVideo: false }), void d3(null, e8, {});
    jc({ segment: e8, bytes: t3, trackInfoFn: i2, timingInfoFn: s3, videoSegmentTimingInfoFn: n5, audioSegmentTimingInfoFn: r5, id3Fn: a5, captionsFn: o5, isEndOfTimeline: l2, endedTimelineFn: u3, dataFn: h2, doneFn: d3, onTransmuxerLog: c3, triggerSegmentEventFn: p2 });
  } else d3(null, e8, {});
};
var Hc = function({ id: e8, key: t3, encryptedBytes: i2, decryptionWorker: s3, segment: n5, doneFn: r5 }, a5) {
  const o5 = (t4) => {
    if (t4.data.source === e8) {
      s3.removeEventListener("message", o5);
      const e9 = t4.data.decrypted;
      a5(new Uint8Array(e9.bytes, e9.byteOffset, e9.byteLength));
    }
  };
  let l2;
  s3.onerror = () => {
    const e9 = "An error occurred in the decryption worker", t4 = Wp({ segment: n5 }), i3 = { message: e9, metadata: { error: new Error(e9), errorType: dh.Error.StreamingFailedToDecryptSegment, segmentInfo: t4, keyInfo: { uri: n5.key.resolvedUri || n5.map.key.resolvedUri } } };
    r5(i3, n5);
  }, s3.addEventListener("message", o5), l2 = t3.bytes.slice ? t3.bytes.slice() : new Uint32Array(Array.prototype.slice.call(t3.bytes)), s3.postMessage(Md({ source: e8, encrypted: i2, key: l2, iv: t3.iv }), [i2.buffer, l2.buffer]);
};
var Vc = ({ decryptionWorker: e8, segment: t3, trackInfoFn: i2, timingInfoFn: s3, videoSegmentTimingInfoFn: n5, audioSegmentTimingInfoFn: r5, id3Fn: a5, captionsFn: o5, isEndOfTimeline: l2, endedTimelineFn: u3, dataFn: h2, doneFn: d3, onTransmuxerLog: c3, triggerSegmentEventFn: p2 }) => {
  p2({ type: "segmentdecryptionstart" }), Hc({ id: t3.requestId, key: t3.key, encryptedBytes: t3.encryptedBytes, decryptionWorker: e8, segment: t3, doneFn: d3 }, (e9) => {
    t3.bytes = e9, p2({ type: "segmentdecryptioncomplete", segment: t3 }), $c({ segment: t3, bytes: t3.bytes, trackInfoFn: i2, timingInfoFn: s3, videoSegmentTimingInfoFn: n5, audioSegmentTimingInfoFn: r5, id3Fn: a5, captionsFn: o5, isEndOfTimeline: l2, endedTimelineFn: u3, dataFn: h2, doneFn: d3, onTransmuxerLog: c3, triggerSegmentEventFn: p2 });
  });
};
var zc = ({ activeXhrs: e8, decryptionWorker: t3, trackInfoFn: i2, timingInfoFn: s3, videoSegmentTimingInfoFn: n5, audioSegmentTimingInfoFn: r5, id3Fn: a5, captionsFn: o5, isEndOfTimeline: l2, endedTimelineFn: u3, dataFn: h2, doneFn: d3, onTransmuxerLog: c3, triggerSegmentEventFn: p2 }) => {
  let m5 = 0, g5 = false;
  return (f3, y4) => {
    if (!g5) {
      if (f3) return g5 = true, Pc(e8), d3(f3, y4);
      if (m5 += 1, m5 === e8.length) {
        const m6 = function() {
          if (y4.encryptedBytes) return Vc({ decryptionWorker: t3, segment: y4, trackInfoFn: i2, timingInfoFn: s3, videoSegmentTimingInfoFn: n5, audioSegmentTimingInfoFn: r5, id3Fn: a5, captionsFn: o5, isEndOfTimeline: l2, endedTimelineFn: u3, dataFn: h2, doneFn: d3, onTransmuxerLog: c3, triggerSegmentEventFn: p2 });
          $c({ segment: y4, bytes: y4.bytes, trackInfoFn: i2, timingInfoFn: s3, videoSegmentTimingInfoFn: n5, audioSegmentTimingInfoFn: r5, id3Fn: a5, captionsFn: o5, isEndOfTimeline: l2, endedTimelineFn: u3, dataFn: h2, doneFn: d3, onTransmuxerLog: c3, triggerSegmentEventFn: p2 });
        };
        if (y4.endOfAllRequests = Date.now(), y4.map && y4.map.encryptedBytes && !y4.map.bytes) return p2({ type: "segmentdecryptionstart", segment: y4 }), Hc({ decryptionWorker: t3, id: y4.requestId + "-init", encryptedBytes: y4.map.encryptedBytes, key: y4.map.key, segment: y4, doneFn: d3 }, (t4) => {
          y4.map.bytes = t4, p2({ type: "segmentdecryptioncomplete", segment: y4 }), Bc(y4, (t5) => {
            if (t5) return Pc(e8), d3(t5, y4);
            m6();
          });
        });
        m6();
      }
    }
  };
};
var Wc = ({ loadendState: e8, abortFn: t3 }) => (i2) => {
  i2.target.aborted && t3 && !e8.calledAbortFn && (t3(), e8.calledAbortFn = true);
};
var Gc = ({ segment: e8, progressFn: t3, trackInfoFn: i2, timingInfoFn: s3, videoSegmentTimingInfoFn: n5, audioSegmentTimingInfoFn: r5, id3Fn: a5, captionsFn: o5, isEndOfTimeline: l2, endedTimelineFn: u3, dataFn: h2 }) => (i3) => {
  if (!i3.target.aborted) return e8.stats = vh(e8.stats, Oc(i3)), !e8.stats.firstBytesReceivedAt && e8.stats.bytesReceived && (e8.stats.firstBytesReceivedAt = Date.now()), t3(i3, e8);
};
var Xc = ({ xhr: e8, xhrOptions: t3, decryptionWorker: i2, segment: s3, abortFn: n5, progressFn: r5, trackInfoFn: a5, timingInfoFn: o5, videoSegmentTimingInfoFn: l2, audioSegmentTimingInfoFn: u3, id3Fn: h2, captionsFn: d3, isEndOfTimeline: c3, endedTimelineFn: p2, dataFn: m5, doneFn: g5, onTransmuxerLog: f3, triggerSegmentEventFn: y4 }) => {
  const _2 = [], b2 = zc({ activeXhrs: _2, decryptionWorker: i2, trackInfoFn: a5, timingInfoFn: o5, videoSegmentTimingInfoFn: l2, audioSegmentTimingInfoFn: u3, id3Fn: h2, captionsFn: d3, isEndOfTimeline: c3, endedTimelineFn: p2, dataFn: m5, doneFn: g5, onTransmuxerLog: f3, triggerSegmentEventFn: y4 });
  if (s3.key && !s3.key.bytes) {
    const i3 = [s3.key];
    s3.map && !s3.map.bytes && s3.map.key && s3.map.key.resolvedUri === s3.key.resolvedUri && i3.push(s3.map.key);
    const n6 = vh(t3, { uri: s3.key.resolvedUri, responseType: "arraybuffer", requestType: "segment-key" }), r6 = Rc(s3, i3, b2, y4);
    y4({ type: "segmentkeyloadstart", segment: s3, keyInfo: { uri: s3.key.resolvedUri } });
    const a6 = e8(n6, r6);
    _2.push(a6);
  }
  if (s3.map && !s3.map.bytes) {
    if (s3.map.key && (!s3.key || s3.key.resolvedUri !== s3.map.key.resolvedUri)) {
      const i4 = vh(t3, { uri: s3.map.key.resolvedUri, responseType: "arraybuffer", requestType: "segment-key" }), n7 = Rc(s3, [s3.map.key], b2, y4);
      y4({ type: "segmentkeyloadstart", segment: s3, keyInfo: { uri: s3.map.key.resolvedUri } });
      const r7 = e8(i4, n7);
      _2.push(r7);
    }
    const i3 = vh(t3, { uri: s3.map.resolvedUri, responseType: "arraybuffer", headers: Ld(s3.map), requestType: "segment-media-initialization" }), n6 = Fc({ segment: s3, finishProcessingFn: b2, triggerSegmentEventFn: y4 });
    y4({ type: "segmentloadstart", segment: s3 });
    const r6 = e8(i3, n6);
    _2.push(r6);
  }
  const v4 = vh(t3, { uri: s3.part && s3.part.resolvedUri || s3.resolvedUri, responseType: "arraybuffer", headers: Ld(s3), requestType: "segment" }), T2 = qc({ segment: s3, finishProcessingFn: b2, responseType: v4.responseType, triggerSegmentEventFn: y4 });
  y4({ type: "segmentloadstart", segment: s3 });
  const S4 = e8(v4, T2);
  S4.addEventListener("progress", Gc({ segment: s3, progressFn: r5, trackInfoFn: a5, timingInfoFn: o5, videoSegmentTimingInfoFn: l2, audioSegmentTimingInfoFn: u3, id3Fn: h2, captionsFn: d3, isEndOfTimeline: c3, endedTimelineFn: p2, dataFn: m5 })), _2.push(S4);
  const E3 = {};
  return _2.forEach((e9) => {
    e9.addEventListener("loadend", Wc({ loadendState: E3, abortFn: n5 }));
  }), () => Pc(_2);
};
var Kc = bh("CodecUtils");
var Yc = function(e8) {
  const t3 = e8.attributes || {};
  if (t3.CODECS) return at(t3.CODECS);
};
var Qc = (e8, t3) => {
  const i2 = t3.attributes || {};
  return e8 && e8.mediaGroups && e8.mediaGroups.AUDIO && i2.AUDIO && e8.mediaGroups.AUDIO[i2.AUDIO];
};
var Jc = (e8, t3) => {
  if (!Qc(e8, t3)) return true;
  const i2 = t3.attributes || {}, s3 = e8.mediaGroups.AUDIO[i2.AUDIO];
  for (const n5 in s3) if (!s3[n5].uri && !s3[n5].playlists) return true;
  return false;
};
var Zc = function(e8) {
  const t3 = {};
  return e8.forEach(({ mediaType: e9, type: i2, details: s3 }) => {
    t3[e9] = t3[e9] || [], t3[e9].push(rt(`${i2}${s3}`));
  }), Object.keys(t3).forEach(function(e9) {
    if (t3[e9].length > 1) return Kc(`multiple ${e9} codecs found as attributes: ${t3[e9].join(", ")}. Setting playlist codecs to null so that we wait for mux.js to probe segments for real codecs.`), void (t3[e9] = null);
    t3[e9] = t3[e9][0];
  }), t3;
};
var ep = function(e8) {
  let t3 = 0;
  return e8.audio && t3++, e8.video && t3++, t3;
};
var tp = function(e8, t3) {
  const i2 = t3.attributes || {}, s3 = Zc(Yc(t3) || []);
  if (Qc(e8, t3) && !s3.audio && !Jc(e8, t3)) {
    const t4 = Zc(ot(e8, i2.AUDIO) || []);
    t4.audio && (s3.audio = t4.audio);
  }
  return s3;
};
var ip = bh("PlaylistSelector");
var sp = function(e8) {
  if (!e8 || !e8.playlist) return;
  const t3 = e8.playlist;
  return JSON.stringify({ id: t3.id, bandwidth: e8.bandwidth, width: e8.width, height: e8.height, codecs: t3.attributes && t3.attributes.CODECS || "" });
};
var np = function(e8, t3) {
  if (!e8) return "";
  const i2 = _.getComputedStyle(e8);
  return i2 ? i2[t3] : "";
};
var rp = function(e8, t3) {
  const i2 = e8.slice();
  e8.sort(function(e9, s3) {
    const n5 = t3(e9, s3);
    return 0 === n5 ? i2.indexOf(e9) - i2.indexOf(s3) : n5;
  });
};
var ap = function(e8, t3) {
  let i2, s3;
  return e8.attributes.BANDWIDTH && (i2 = e8.attributes.BANDWIDTH), i2 = i2 || _.Number.MAX_VALUE, t3.attributes.BANDWIDTH && (s3 = t3.attributes.BANDWIDTH), s3 = s3 || _.Number.MAX_VALUE, i2 - s3;
};
var op = function(e8, t3) {
  let i2, s3;
  return e8.attributes.RESOLUTION && e8.attributes.RESOLUTION.width && (i2 = e8.attributes.RESOLUTION.width), i2 = i2 || _.Number.MAX_VALUE, t3.attributes.RESOLUTION && t3.attributes.RESOLUTION.width && (s3 = t3.attributes.RESOLUTION.width), s3 = s3 || _.Number.MAX_VALUE, i2 === s3 && e8.attributes.BANDWIDTH && t3.attributes.BANDWIDTH ? e8.attributes.BANDWIDTH - t3.attributes.BANDWIDTH : i2 - s3;
};
var lp = function(e8, t3, i2, s3, n5, r5) {
  if (!e8) return;
  const a5 = { bandwidth: t3, width: i2, height: s3, limitRenditionByPlayerDimensions: n5 };
  let o5 = e8.playlists;
  id.isAudioOnly(e8) && (o5 = r5.getAudioTrackPlaylists_(), a5.audioOnly = true);
  let l2 = o5.map((e9) => {
    let t4;
    const i3 = e9.attributes && e9.attributes.RESOLUTION && e9.attributes.RESOLUTION.width, s4 = e9.attributes && e9.attributes.RESOLUTION && e9.attributes.RESOLUTION.height;
    return t4 = e9.attributes && e9.attributes.BANDWIDTH, t4 = t4 || _.Number.MAX_VALUE, { bandwidth: t4, width: i3, height: s4, playlist: e9 };
  });
  rp(l2, (e9, t4) => e9.bandwidth - t4.bandwidth), l2 = l2.filter((e9) => !id.isIncompatible(e9.playlist));
  let u3 = l2.filter((e9) => id.isEnabled(e9.playlist));
  u3.length || (u3 = l2.filter((e9) => !id.isDisabled(e9.playlist)));
  const h2 = u3.filter((e9) => e9.bandwidth * hc.BANDWIDTH_VARIANCE < t3);
  let d3 = h2[h2.length - 1];
  const c3 = h2.filter((e9) => e9.bandwidth === d3.bandwidth)[0];
  if (false === n5) {
    const e9 = c3 || u3[0] || l2[0];
    if (e9 && e9.playlist) {
      let t4 = "sortedPlaylistReps";
      return c3 && (t4 = "bandwidthBestRep"), u3[0] && (t4 = "enabledPlaylistReps"), ip(`choosing ${sp(e9)} using ${t4} with options`, a5), e9.playlist;
    }
    return ip("could not choose a playlist with options", a5), null;
  }
  const p2 = h2.filter((e9) => e9.width && e9.height);
  rp(p2, (e9, t4) => e9.width - t4.width);
  const m5 = p2.filter((e9) => e9.width === i2 && e9.height === s3);
  d3 = m5[m5.length - 1];
  const g5 = m5.filter((e9) => e9.bandwidth === d3.bandwidth)[0];
  let f3, y4, b2, v4;
  if (g5 || (f3 = p2.filter((e9) => e9.width > i2 || e9.height > s3), y4 = f3.filter((e9) => e9.width === f3[0].width && e9.height === f3[0].height), d3 = y4[y4.length - 1], b2 = y4.filter((e9) => e9.bandwidth === d3.bandwidth)[0]), r5.leastPixelDiffSelector) {
    const e9 = p2.map((e10) => (e10.pixelDiff = Math.abs(e10.width - i2) + Math.abs(e10.height - s3), e10));
    rp(e9, (e10, t4) => e10.pixelDiff === t4.pixelDiff ? t4.bandwidth - e10.bandwidth : e10.pixelDiff - t4.pixelDiff), v4 = e9[0];
  }
  const T2 = v4 || b2 || g5 || c3 || u3[0] || l2[0];
  if (T2 && T2.playlist) {
    let e9 = "sortedPlaylistReps";
    return v4 ? e9 = "leastPixelDiffRep" : b2 ? e9 = "resolutionPlusOneRep" : g5 ? e9 = "resolutionBestRep" : c3 ? e9 = "bandwidthBestRep" : u3[0] && (e9 = "enabledPlaylistReps"), ip(`choosing ${sp(T2)} using ${e9} with options`, a5), T2.playlist;
  }
  return ip("could not choose a playlist with options", a5), null;
};
var up = function() {
  let e8 = this.useDevicePixelRatio && _.devicePixelRatio || 1;
  return isNaN(this.customPixelRatio) || (e8 = this.customPixelRatio), lp(this.playlists.main, this.systemBandwidth, parseInt(np(this.tech_.el(), "width"), 10) * e8, parseInt(np(this.tech_.el(), "height"), 10) * e8, this.limitRenditionByPlayerDimensions, this.playlistController_);
};
var hp = function(e8) {
  let t3 = -1, i2 = -1;
  if (e8 < 0 || e8 > 1) throw new Error("Moving average bandwidth decay must be between 0 and 1.");
  return function() {
    let s3 = this.useDevicePixelRatio && _.devicePixelRatio || 1;
    return isNaN(this.customPixelRatio) || (s3 = this.customPixelRatio), t3 < 0 && (t3 = this.systemBandwidth, i2 = this.systemBandwidth), this.systemBandwidth > 0 && this.systemBandwidth !== i2 && (t3 = e8 * this.systemBandwidth + (1 - e8) * t3, i2 = this.systemBandwidth), lp(this.playlists.main, t3, parseInt(np(this.tech_.el(), "width"), 10) * s3, parseInt(np(this.tech_.el(), "height"), 10) * s3, this.limitRenditionByPlayerDimensions, this.playlistController_);
  };
};
var dp = function(e8) {
  const { main: t3, currentTime: i2, bandwidth: s3, duration: n5, segmentDuration: r5, timeUntilRebuffer: a5, currentTimeline: o5, syncController: l2 } = e8, u3 = t3.playlists.filter((e9) => !id.isIncompatible(e9));
  let h2 = u3.filter(id.isEnabled);
  h2.length || (h2 = u3.filter((e9) => !id.isDisabled(e9)));
  const d3 = h2.filter(id.hasAttribute.bind(null, "BANDWIDTH")).map((e9) => {
    const t4 = l2.getSyncPoint(e9, n5, o5, i2) ? 1 : 2;
    return { playlist: e9, rebufferingImpact: id.estimateSegmentRequestTime(r5, s3, e9) * t4 - a5 };
  }), c3 = d3.filter((e9) => e9.rebufferingImpact <= 0);
  return rp(c3, (e9, t4) => ap(t4.playlist, e9.playlist)), c3.length ? c3[0] : (rp(d3, (e9, t4) => e9.rebufferingImpact - t4.rebufferingImpact), d3[0] || null);
};
var cp = function() {
  const e8 = this.playlists.main.playlists.filter(id.isEnabled);
  rp(e8, (e9, t3) => ap(e9, t3));
  return e8.filter((e9) => !!tp(this.playlists.main, e9).video)[0] || null;
};
var pp = (e8) => {
  let t3, i2 = 0;
  return e8.bytes && (t3 = new Uint8Array(e8.bytes), e8.segments.forEach((e9) => {
    t3.set(e9, i2), i2 += e9.byteLength;
  })), t3;
};
function mp(e8) {
  try {
    return new URL(e8).pathname.split("/").slice(-2).join("/");
  } catch (t3) {
    return "";
  }
}
var gp = function(e8, t3, i2) {
  if (!e8[i2]) {
    t3.trigger({ type: "usage", name: "vhs-608" });
    let s3 = i2;
    /^cc708_/.test(i2) && (s3 = "SERVICE" + i2.split("_")[1]);
    const n5 = t3.textTracks().getTrackById(s3);
    if (n5) e8[i2] = n5;
    else {
      let n6 = i2, r5 = i2, a5 = false;
      const o5 = (t3.options_.vhs && t3.options_.vhs.captionServices || {})[s3];
      o5 && (n6 = o5.label, r5 = o5.language, a5 = o5.default), e8[i2] = t3.addRemoteTextTrack({ kind: "captions", id: s3, default: a5, label: n6, language: r5 }, false).track;
    }
  }
};
var fp = function({ inbandTextTracks: e8, captionArray: t3, timestampOffset: i2 }) {
  if (!t3) return;
  const s3 = _.WebKitDataCue || _.VTTCue;
  t3.forEach((t4) => {
    const n5 = t4.stream;
    t4.content ? t4.content.forEach((r5) => {
      const a5 = new s3(t4.startTime + i2, t4.endTime + i2, r5.text);
      a5.line = r5.line, a5.align = "left", a5.position = r5.position, a5.positionAlign = "line-left", e8[n5].addCue(a5);
    }) : e8[n5].addCue(new s3(t4.startTime + i2, t4.endTime + i2, t4.text));
  });
};
var yp = function(e8) {
  Object.defineProperties(e8.frame, { id: { get: () => (dh.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), e8.value.key) }, value: { get: () => (dh.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), e8.value.data) }, privateData: { get: () => (dh.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), e8.value.data) } });
};
var _p = ({ inbandTextTracks: e8, metadataArray: t3, timestampOffset: i2, videoDuration: s3 }) => {
  if (!t3) return;
  const n5 = _.WebKitDataCue || _.VTTCue, r5 = e8.metadataTrack_;
  if (!r5) return;
  if (t3.forEach((e9) => {
    const t4 = e9.cueTime + i2;
    !("number" != typeof t4 || _.isNaN(t4) || t4 < 0) && t4 < 1 / 0 && e9.frames && e9.frames.length && e9.frames.forEach((e10) => {
      const i3 = new n5(t4, t4, e10.value || e10.url || e10.data || "");
      i3.frame = e10, i3.value = e10, yp(i3), r5.addCue(i3);
    });
  }), !r5.cues || !r5.cues.length) return;
  const a5 = r5.cues, o5 = [];
  for (let h2 = 0; h2 < a5.length; h2++) a5[h2] && o5.push(a5[h2]);
  const l2 = o5.reduce((e9, t4) => {
    const i3 = e9[t4.startTime] || [];
    return i3.push(t4), e9[t4.startTime] = i3, e9;
  }, {}), u3 = Object.keys(l2).sort((e9, t4) => Number(e9) - Number(t4));
  u3.forEach((e9, t4) => {
    const i3 = l2[e9], n6 = isFinite(s3) ? s3 : e9, r6 = Number(u3[t4 + 1]) || n6;
    i3.forEach((e10) => {
      e10.endTime = r6;
    });
  });
};
var bp = { id: "ID", class: "CLASS", startDate: "START-DATE", duration: "DURATION", endDate: "END-DATE", endOnNext: "END-ON-NEXT", plannedDuration: "PLANNED-DURATION", scte35Out: "SCTE35-OUT", scte35In: "SCTE35-IN" };
var vp = /* @__PURE__ */ new Set(["id", "class", "startDate", "duration", "endDate", "endOnNext", "startTime", "endTime", "processDateRange"]);
var Tp = ({ inbandTextTracks: e8, dateRanges: t3 }) => {
  const i2 = e8.metadataTrack_;
  if (!i2) return;
  const s3 = _.WebKitDataCue || _.VTTCue;
  t3.forEach((e9) => {
    for (const t4 of Object.keys(e9)) {
      if (vp.has(t4)) continue;
      const n5 = new s3(e9.startTime, e9.endTime, "");
      n5.id = e9.id, n5.type = "com.apple.quicktime.HLS", n5.value = { key: bp[t4], data: e9[t4] }, "scte35Out" !== t4 && "scte35In" !== t4 || (n5.value.data = new Uint8Array(n5.value.data.match(/[\da-f]{2}/gi)).buffer), i2.addCue(n5);
    }
    e9.processDateRange();
  });
};
var Sp = (e8, t3, i2) => {
  e8.metadataTrack_ || (e8.metadataTrack_ = i2.addRemoteTextTrack({ kind: "metadata", label: "Timed Metadata" }, false).track, dh.browser.IS_ANY_SAFARI || (e8.metadataTrack_.inBandMetadataTrackDispatchType = t3));
};
var Ep = function(e8, t3, i2) {
  let s3, n5;
  if (i2 && i2.cues) for (s3 = i2.cues.length; s3--; ) n5 = i2.cues[s3], n5.startTime >= e8 && n5.endTime <= t3 && i2.removeCue(n5);
};
var wp = function(e8) {
  const t3 = e8.cues;
  if (!t3) return;
  const i2 = {};
  for (let s3 = t3.length - 1; s3 >= 0; s3--) {
    const n5 = t3[s3], r5 = `${n5.startTime}-${n5.endTime}-${n5.text}`;
    i2[r5] ? e8.removeCue(n5) : i2[r5] = n5;
  }
};
var Cp = (e8, t3, i2) => {
  if (null == t3 || !e8.length) return [];
  const s3 = Math.ceil((t3 - i2 + 3) * en.ONE_SECOND_IN_TS);
  let n5;
  for (n5 = 0; n5 < e8.length && !(e8[n5].pts > s3); n5++) ;
  return e8.slice(n5);
};
var kp = (e8, t3, i2) => {
  if (!t3.length) return e8;
  if (i2) return t3.slice();
  const s3 = t3[0].pts;
  let n5 = 0;
  for (; n5 < e8.length && !(e8[n5].pts >= s3); n5++) ;
  return e8.slice(0, n5).concat(t3);
};
var Ip = (e8, t3, i2, s3) => {
  const n5 = Math.ceil((t3 - s3) * en.ONE_SECOND_IN_TS), r5 = Math.ceil((i2 - s3) * en.ONE_SECOND_IN_TS), a5 = e8.slice();
  let o5 = e8.length;
  for (; o5-- && !(e8[o5].pts <= r5); ) ;
  if (-1 === o5) return a5;
  let l2 = o5 + 1;
  for (; l2-- && !(e8[l2].pts <= n5); ) ;
  return l2 = Math.max(l2, 0), a5.splice(l2, o5 - l2 + 1), a5;
};
var xp = function(e8, t3) {
  if (!e8 && !t3 || !e8 && t3 || e8 && !t3) return false;
  if (e8 === t3) return true;
  const i2 = Object.keys(e8).sort(), s3 = Object.keys(t3).sort();
  if (i2.length !== s3.length) return false;
  for (let n5 = 0; n5 < i2.length; n5++) {
    const r5 = i2[n5];
    if (r5 !== s3[n5]) return false;
    if (e8[r5] !== t3[r5]) return false;
  }
  return true;
};
var Ap = function(e8, t3, i2) {
  t3 = t3 || [];
  const s3 = [];
  let n5 = 0;
  for (let r5 = 0; r5 < t3.length; r5++) {
    const a5 = t3[r5];
    if (e8 === a5.timeline && (s3.push(r5), n5 += a5.duration, n5 > i2)) return r5;
  }
  return 0 === s3.length ? 0 : s3[s3.length - 1];
};
var Dp = 1;
var Pp = 500;
var Lp = (e8) => "number" == typeof e8 && isFinite(e8);
var Op = 1 / 60;
var Np = (e8, t3, i2) => "main" === e8 && t3 && i2 ? i2.hasAudio || i2.hasVideo ? t3.hasVideo && !i2.hasVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !t3.hasVideo && i2.hasVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null : "Neither audio nor video found in segment." : null;
var Rp = (e8, t3, i2) => {
  let s3 = t3 - hc.BACK_BUFFER_LENGTH;
  e8.length && (s3 = Math.max(s3, e8.start(0)));
  const n5 = t3 - i2;
  return Math.min(n5, s3);
};
var Mp = (e8) => {
  const { startOfSegment: t3, duration: i2, segment: s3, part: n5, playlist: { mediaSequence: r5, id: a5, segments: o5 = [] }, mediaIndex: l2, partIndex: u3, timeline: h2 } = e8, d3 = o5.length - 1;
  let c3 = "mediaIndex/partIndex increment";
  e8.getMediaInfoForTime ? c3 = `getMediaInfoForTime (${e8.getMediaInfoForTime})` : e8.isSyncRequest && (c3 = "getSyncSegmentCandidate (isSyncRequest)"), e8.independent && (c3 += ` with independent ${e8.independent}`);
  const p2 = "number" == typeof u3, m5 = e8.segment.uri ? "segment" : "pre-segment", g5 = p2 ? Fh({ preloadSegment: s3 }) - 1 : 0;
  return `${m5} [${r5 + l2}/${r5 + d3}]` + (p2 ? ` part [${u3}/${g5}]` : "") + ` segment start/end [${s3.start} => ${s3.end}]` + (p2 ? ` part start/end [${n5.start} => ${n5.end}]` : "") + ` startOfSegment [${t3}] duration [${i2}] timeline [${h2}] selected by [${c3}] playlist [${a5}]`;
};
var Up = (e8) => `${e8}TimingInfo`;
var Bp = ({ segmentTimeline: e8, currentTimeline: t3, startOfSegment: i2, buffered: s3, overrideCheck: n5 }) => n5 || e8 !== t3 ? e8 < t3 ? i2 : s3.length ? s3.end(s3.length - 1) : i2 : null;
var Fp = ({ timelineChangeController: e8, currentTimeline: t3, segmentTimeline: i2, loaderType: s3, audioDisabled: n5 }) => {
  if (t3 === i2) return false;
  if ("audio" === s3) {
    const t4 = e8.lastTimelineChange({ type: "main" });
    return !t4 || t4.to !== i2;
  }
  if ("main" === s3 && n5) {
    const t4 = e8.pendingTimelineChange({ type: "audio" });
    return !t4 || t4.to !== i2;
  }
  return false;
};
var qp = (e8) => {
  if (!e8) return false;
  const t3 = e8.pendingTimelineChange({ type: "audio" }), i2 = e8.pendingTimelineChange({ type: "main" }), s3 = t3 && i2, n5 = s3 && t3.to !== i2.to;
  return !(!s3 || -1 === t3.from || -1 === i2.from || !n5);
};
var jp = (e8) => {
  const t3 = e8.timelineChangeController_.pendingTimelineChange({ type: "audio" }), i2 = e8.timelineChangeController_.pendingTimelineChange({ type: "main" });
  return t3 && i2 && t3.to < i2.to;
};
var $p = (e8) => {
  const t3 = e8.pendingSegment_;
  if (!t3) return;
  if (Fp({ timelineChangeController: e8.timelineChangeController_, currentTimeline: e8.currentTimeline_, segmentTimeline: t3.timeline, loaderType: e8.loaderType_, audioDisabled: e8.audioDisabled_ }) && qp(e8.timelineChangeController_)) {
    if (jp(e8)) return void e8.timelineChangeController_.trigger("audioTimelineBehind");
    e8.timelineChangeController_.trigger("fixBadTimelineChange");
  }
};
var Hp = (e8) => {
  let t3 = 0;
  return ["video", "audio"].forEach(function(i2) {
    const s3 = e8[`${i2}TimingInfo`];
    if (!s3) return;
    const { start: n5, end: r5 } = s3;
    let a5;
    "bigint" == typeof n5 || "bigint" == typeof r5 ? a5 = _.BigInt(r5) - _.BigInt(n5) : "number" == typeof n5 && "number" == typeof r5 && (a5 = r5 - n5), void 0 !== a5 && a5 > t3 && (t3 = a5);
  }), "bigint" == typeof t3 && t3 < Number.MAX_SAFE_INTEGER && (t3 = Number(t3)), t3;
};
var Vp = ({ segmentDuration: e8, maxDuration: t3 }) => !!e8 && Math.round(e8) > t3 + Eh;
var zp = (e8, t3) => {
  if ("hls" !== t3) return null;
  const i2 = Hp({ audioTimingInfo: e8.audioTimingInfo, videoTimingInfo: e8.videoTimingInfo });
  if (!i2) return null;
  const s3 = e8.playlist.targetDuration, n5 = Vp({ segmentDuration: i2, maxDuration: 2 * s3 }), r5 = Vp({ segmentDuration: i2, maxDuration: s3 }), a5 = `Segment with index ${e8.mediaIndex} from playlist ${e8.playlist.id} has a duration of ${i2} when the reported duration is ${e8.duration} and the target duration is ${s3}. For HLS content, a duration in excess of the target duration may result in playback issues. See the HLS specification section on EXT-X-TARGETDURATION for more details: https://tools.ietf.org/html/draft-pantos-http-live-streaming-23#section-4.3.3.1`;
  return n5 || r5 ? { severity: n5 ? "warn" : "info", message: a5 } : null;
};
var Wp = ({ type: e8, segment: t3 }) => {
  if (!t3) return;
  const i2 = Boolean(t3.key || t3.map && t3.map.ke), s3 = Boolean(t3.map && !t3.map.bytes), n5 = void 0 === t3.startOfSegment ? t3.start : t3.startOfSegment;
  return { type: e8 || t3.type, uri: t3.resolvedUri || t3.uri, start: n5, duration: t3.duration, isEncrypted: i2, isMediaInitialization: s3 };
};
var Gp = class extends dh.EventTarget {
  constructor(e8, t3 = {}) {
    if (super(), !e8) throw new TypeError("Initialization settings are required");
    if ("function" != typeof e8.currentTime) throw new TypeError("No currentTime getter specified");
    if (!e8.mediaSource) throw new TypeError("No MediaSource specified");
    this.bandwidth = e8.bandwidth, this.throughput = { rate: 0, count: 0 }, this.roundTrip = NaN, this.resetStats_(), this.mediaIndex = null, this.partIndex = null, this.hasPlayed_ = e8.hasPlayed, this.currentTime_ = e8.currentTime, this.seekable_ = e8.seekable, this.seeking_ = e8.seeking, this.duration_ = e8.duration, this.mediaSource_ = e8.mediaSource, this.vhs_ = e8.vhs, this.loaderType_ = e8.loaderType, this.currentMediaInfo_ = void 0, this.startingMediaInfo_ = void 0, this.segmentMetadataTrack_ = e8.segmentMetadataTrack, this.goalBufferLength_ = e8.goalBufferLength, this.sourceType_ = e8.sourceType, this.sourceUpdater_ = e8.sourceUpdater, this.inbandTextTracks_ = e8.inbandTextTracks, this.state_ = "INIT", this.timelineChangeController_ = e8.timelineChangeController, this.shouldSaveSegmentTimingInfo_ = true, this.parse708captions_ = e8.parse708captions, this.useDtsForTimestampOffset_ = e8.useDtsForTimestampOffset, this.captionServices_ = e8.captionServices, this.exactManifestTimings = e8.exactManifestTimings, this.addMetadataToTextTrack = e8.addMetadataToTextTrack, this.checkBufferTimeout_ = null, this.error_ = void 0, this.currentTimeline_ = -1, this.shouldForceTimestampOffsetAfterResync_ = false, this.pendingSegment_ = null, this.xhrOptions_ = null, this.pendingSegments_ = [], this.audioDisabled_ = false, this.isPendingTimestampOffset_ = false, this.gopBuffer_ = [], this.timeMapping_ = 0, this.safeAppend_ = false, this.appendInitSegment_ = { audio: true, video: true }, this.playlistOfLastInitSegment_ = { audio: null, video: null }, this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_ = { id3: [], caption: [] }, this.waitingOnRemove_ = false, this.quotaExceededErrorRetryTimeout_ = null, this.activeInitSegmentId_ = null, this.initSegments_ = {}, this.cacheEncryptionKeys_ = e8.cacheEncryptionKeys, this.keyCache_ = {}, this.decrypter_ = e8.decrypter, this.syncController_ = e8.syncController, this.syncPoint_ = { segmentIndex: 0, time: 0 }, this.transmuxer_ = this.createTransmuxer_(), this.triggerSyncInfoUpdate_ = () => this.trigger("syncinfoupdate"), this.syncController_.on("syncinfoupdate", this.triggerSyncInfoUpdate_), this.mediaSource_.addEventListener("sourceopen", () => {
      this.isEndOfStream_() || (this.ended_ = false);
    }), this.fetchAtBuffer_ = false, this.logger_ = bh(`SegmentLoader[${this.loaderType_}]`), Object.defineProperty(this, "state", { get() {
      return this.state_;
    }, set(e9) {
      e9 !== this.state_ && (this.logger_(`${this.state_} -> ${e9}`), this.state_ = e9, this.trigger("statechange"));
    } }), this.sourceUpdater_.on("ready", () => {
      this.hasEnoughInfoToAppend_() ? this.processCallQueue_() : $p(this);
    }), this.sourceUpdater_.on("codecschange", (e9) => {
      this.trigger(Ue({ type: "codecschange" }, e9));
    }), "main" === this.loaderType_ && this.timelineChangeController_.on("pendingtimelinechange", () => {
      this.hasEnoughInfoToAppend_() ? this.processCallQueue_() : $p(this);
    }), "audio" === this.loaderType_ && this.timelineChangeController_.on("timelinechange", (e9) => {
      this.trigger(Ue({ type: "timelinechange" }, e9)), this.hasEnoughInfoToLoad_() ? this.processLoadQueue_() : $p(this), this.hasEnoughInfoToAppend_() ? this.processCallQueue_() : $p(this);
    });
  }
  get mediaSequenceSync_() {
    return this.syncController_.getMediaSequenceSync(this.loaderType_);
  }
  createTransmuxer_() {
    return Ic.createTransmuxer({ remux: false, alignGopsAtEnd: this.safeAppend_, keepOriginalTimestamps: true, parse708captions: this.parse708captions_, captionServices: this.captionServices_ });
  }
  resetStats_() {
    this.mediaBytesTransferred = 0, this.mediaRequests = 0, this.mediaRequestsAborted = 0, this.mediaRequestsTimedout = 0, this.mediaRequestsErrored = 0, this.mediaTransferDuration = 0, this.mediaSecondsLoaded = 0, this.mediaAppends = 0;
  }
  dispose() {
    this.trigger("dispose"), this.state = "DISPOSED", this.pause(), this.abort_(), this.transmuxer_ && this.transmuxer_.terminate(), this.resetStats_(), this.checkBufferTimeout_ && _.clearTimeout(this.checkBufferTimeout_), this.syncController_ && this.triggerSyncInfoUpdate_ && this.syncController_.off("syncinfoupdate", this.triggerSyncInfoUpdate_), this.off();
  }
  setAudio(e8) {
    this.audioDisabled_ = !e8, e8 ? this.appendInitSegment_.audio = true : this.sourceUpdater_.removeAudio(0, this.duration_());
  }
  abort() {
    if ("WAITING" !== this.state) return this.pendingSegment_ && (this.pendingSegment_ = null), void this.timelineChangeController_.clearPendingTimelineChange(this.loaderType_);
    this.abort_(), this.state = "READY", this.paused() || this.monitorBuffer_();
  }
  abort_() {
    this.pendingSegment_ && this.pendingSegment_.abortRequests && this.pendingSegment_.abortRequests(), this.pendingSegment_ = null, this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [], this.timelineChangeController_.clearPendingTimelineChange(this.loaderType_), this.waitingOnRemove_ = false, _.clearTimeout(this.quotaExceededErrorRetryTimeout_), this.quotaExceededErrorRetryTimeout_ = null;
  }
  checkForAbort_(e8) {
    return "APPENDING" !== this.state || this.pendingSegment_ ? !this.pendingSegment_ || this.pendingSegment_.requestId !== e8 : (this.state = "READY", true);
  }
  error(e8) {
    return void 0 !== e8 && (this.logger_("error occurred:", e8), this.error_ = e8), this.pendingSegment_ = null, this.error_;
  }
  endOfStream() {
    this.ended_ = true, this.transmuxer_ && Ic.reset(this.transmuxer_), this.gopBuffer_.length = 0, this.pause(), this.trigger("ended");
  }
  buffered_() {
    const e8 = this.getMediaInfo_();
    if (!this.sourceUpdater_ || !e8) return Th();
    if ("main" === this.loaderType_) {
      const { hasAudio: t3, hasVideo: i2, isMuxed: s3 } = e8;
      if (i2 && t3 && !this.audioDisabled_ && !s3) return this.sourceUpdater_.buffered();
      if (i2) return this.sourceUpdater_.videoBuffered();
    }
    return this.sourceUpdater_.audioBuffered();
  }
  initSegmentForMap(e8, t3 = false) {
    if (!e8) return null;
    const i2 = Ud(e8);
    let s3 = this.initSegments_[i2];
    return t3 && !s3 && e8.bytes && (this.initSegments_[i2] = s3 = { resolvedUri: e8.resolvedUri, byterange: e8.byterange, bytes: e8.bytes, tracks: e8.tracks, timescales: e8.timescales }), s3 || e8;
  }
  segmentKey(e8, t3 = false) {
    if (!e8) return null;
    const i2 = Bd(e8);
    let s3 = this.keyCache_[i2];
    this.cacheEncryptionKeys_ && t3 && !s3 && e8.bytes && (this.keyCache_[i2] = s3 = { resolvedUri: e8.resolvedUri, bytes: e8.bytes });
    const n5 = { resolvedUri: (s3 || e8).resolvedUri };
    return s3 && (n5.bytes = s3.bytes), n5;
  }
  couldBeginLoading_() {
    return this.playlist_ && !this.paused();
  }
  load() {
    if (this.monitorBuffer_(), this.playlist_) return "INIT" === this.state && this.couldBeginLoading_() ? this.init_() : void (!this.couldBeginLoading_() || "READY" !== this.state && "INIT" !== this.state || (this.state = "READY"));
  }
  init_() {
    return this.state = "READY", this.resetEverything(), this.monitorBuffer_();
  }
  playlist(e8, t3 = {}) {
    if (!e8) return;
    if (this.playlist_ && this.playlist_.endList && e8.endList && this.playlist_.uri === e8.uri) return;
    const i2 = this.playlist_, s3 = this.pendingSegment_;
    this.playlist_ = e8, this.xhrOptions_ = t3, "INIT" === this.state && (e8.syncInfo = { mediaSequence: e8.mediaSequence, time: 0 }, "main" === this.loaderType_ && this.syncController_.setDateTimeMappingForStart(e8));
    let n5 = null;
    if (i2 && (i2.id ? n5 = i2.id : i2.uri && (n5 = i2.uri)), this.logger_(`playlist update [${n5} => ${e8.id || e8.uri}]`), this.mediaSequenceSync_ && (this.mediaSequenceSync_.update(e8, this.currentTime_()), this.logger_(`Playlist update:
currentTime: ${this.currentTime_()}
bufferedEnd: ${Nh(this.buffered_())}
`, this.mediaSequenceSync_.diagnostics)), this.trigger("syncinfoupdate"), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
    if (!i2 || i2.uri !== e8.uri) {
      if (null !== this.mediaIndex) {
        !e8.endList && "number" == typeof e8.partTargetDuration ? this.resetLoader() : this.resyncLoader();
      }
      return this.currentMediaInfo_ = void 0, void this.trigger("playlistupdate");
    }
    const r5 = e8.mediaSequence - i2.mediaSequence;
    if (this.logger_(`live window shift [${r5}]`), null !== this.mediaIndex) if (this.mediaIndex -= r5, this.mediaIndex < 0) this.mediaIndex = null, this.partIndex = null;
    else {
      const e9 = this.playlist_.segments[this.mediaIndex];
      if (this.partIndex && (!e9.parts || !e9.parts.length || !e9.parts[this.partIndex])) {
        const e10 = this.mediaIndex;
        this.logger_(`currently processing part (index ${this.partIndex}) no longer exists.`), this.resetLoader(), this.mediaIndex = e10;
      }
    }
    s3 && (s3.mediaIndex -= r5, s3.mediaIndex < 0 ? (s3.mediaIndex = null, s3.partIndex = null) : (s3.mediaIndex >= 0 && (s3.segment = e8.segments[s3.mediaIndex]), s3.partIndex >= 0 && s3.segment.parts && (s3.part = s3.segment.parts[s3.partIndex]))), this.syncController_.saveExpiredSegmentInfo(i2, e8);
  }
  pause() {
    this.checkBufferTimeout_ && (_.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null);
  }
  paused() {
    return null === this.checkBufferTimeout_;
  }
  resetEverything(e8) {
    this.ended_ = false, this.activeInitSegmentId_ = null, this.appendInitSegment_ = { audio: true, video: true }, this.resetLoader(), this.remove(0, 1 / 0, e8), this.transmuxer_ && (this.transmuxer_.postMessage({ action: "clearAllMp4Captions" }), this.transmuxer_.postMessage({ action: "reset" }));
  }
  resetLoader() {
    this.fetchAtBuffer_ = false, this.mediaSequenceSync_ && this.mediaSequenceSync_.resetAppendedStatus(), this.resyncLoader();
  }
  resyncLoader() {
    this.transmuxer_ && Ic.reset(this.transmuxer_), this.mediaIndex = null, this.partIndex = null, this.syncPoint_ = null, this.isPendingTimestampOffset_ = false;
    const e8 = this.currentMediaInfo_ && this.currentMediaInfo_.isFmp4;
    "hls" === this.sourceType_ && !e8 && (this.shouldForceTimestampOffsetAfterResync_ = true), this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [], this.abort(), this.transmuxer_ && this.transmuxer_.postMessage({ action: "clearParsedMp4Captions" });
  }
  remove(e8, t3, i2 = () => {
  }, s3 = false) {
    if (t3 === 1 / 0 && (t3 = this.duration_()), t3 <= e8) return void this.logger_("skipping remove because end ${end} is <= start ${start}");
    if (!this.sourceUpdater_ || !this.getMediaInfo_()) return void this.logger_("skipping remove because no source updater or starting media info");
    let n5 = 1;
    const r5 = () => {
      n5--, 0 === n5 && i2();
    };
    !s3 && this.audioDisabled_ || (n5++, this.sourceUpdater_.removeAudio(e8, t3, r5)), (s3 || "main" === this.loaderType_) && (this.gopBuffer_ = Ip(this.gopBuffer_, e8, t3, this.timeMapping_), n5++, this.sourceUpdater_.removeVideo(e8, t3, r5));
    for (const a5 in this.inbandTextTracks_) Ep(e8, t3, this.inbandTextTracks_[a5]);
    Ep(e8, t3, this.segmentMetadataTrack_), r5();
  }
  monitorBuffer_() {
    this.checkBufferTimeout_ && _.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = _.setTimeout(this.monitorBufferTick_.bind(this), 1);
  }
  monitorBufferTick_() {
    "READY" === this.state && this.fillBuffer_(), this.checkBufferTimeout_ && _.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = _.setTimeout(this.monitorBufferTick_.bind(this), Pp);
  }
  fillBuffer_() {
    if (this.sourceUpdater_.updating()) return;
    const e8 = this.chooseNextRequest_();
    if (!e8) return;
    const t3 = { segmentInfo: Wp({ type: this.loaderType_, segment: e8 }) };
    this.trigger({ type: "segmentselected", metadata: t3 }), "number" == typeof e8.timestampOffset && (this.isPendingTimestampOffset_ = false, this.timelineChangeController_.pendingTimelineChange({ type: this.loaderType_, from: this.currentTimeline_, to: e8.timeline })), this.loadSegment_(e8);
  }
  isEndOfStream_(e8 = this.mediaIndex, t3 = this.playlist_, i2 = this.partIndex) {
    if (!t3 || !this.mediaSource_) return false;
    const s3 = "number" == typeof e8 && t3.segments[e8], n5 = e8 + 1 === t3.segments.length, r5 = !s3 || !s3.parts || i2 + 1 === s3.parts.length;
    return t3.endList && "open" === this.mediaSource_.readyState && n5 && r5;
  }
  chooseNextRequest_() {
    const e8 = this.buffered_(), t3 = Nh(e8) || 0, i2 = Rh(e8, this.currentTime_()), s3 = !this.hasPlayed_() && i2 >= 1, n5 = i2 >= this.goalBufferLength_(), r5 = this.playlist_.segments;
    if (!r5.length || s3 || n5) return null;
    this.syncPoint_ = this.syncPoint_ || this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_(), this.loaderType_);
    const a5 = { partIndex: null, mediaIndex: null, startOfSegment: null, playlist: this.playlist_, isSyncRequest: Boolean(!this.syncPoint_) };
    if (a5.isSyncRequest) a5.mediaIndex = Ap(this.currentTimeline_, r5, t3), this.logger_(`choose next request. Can not find sync point. Fallback to media Index: ${a5.mediaIndex}`);
    else if (null !== this.mediaIndex) {
      const e9 = r5[this.mediaIndex], i3 = "number" == typeof this.partIndex ? this.partIndex : -1;
      a5.startOfSegment = e9.end ? e9.end : t3, e9.parts && e9.parts[i3 + 1] ? (a5.mediaIndex = this.mediaIndex, a5.partIndex = i3 + 1) : a5.mediaIndex = this.mediaIndex + 1;
    } else {
      let e9, i3, s4;
      const n6 = this.fetchAtBuffer_ ? t3 : this.currentTime_();
      if (this.mediaSequenceSync_ && this.logger_(`chooseNextRequest_ request after Quality Switch:
For TargetTime: ${n6}.
CurrentTime: ${this.currentTime_()}
BufferedEnd: ${t3}
Fetch At Buffer: ${this.fetchAtBuffer_}
`, this.mediaSequenceSync_.diagnostics), this.mediaSequenceSync_ && this.mediaSequenceSync_.isReliable) {
        const t4 = this.getSyncInfoFromMediaSequenceSync_(n6);
        if (!t4) {
          const e10 = "No sync info found while using media sequence sync";
          return this.error({ message: e10, metadata: { errorType: dh.Error.StreamingFailedToSelectNextSegment, error: new Error(e10) } }), this.logger_("chooseNextRequest_ - no sync info found using media sequence sync"), null;
        }
        this.logger_(`chooseNextRequest_ mediaSequence syncInfo (${t4.start} --> ${t4.end})`), e9 = t4.segmentIndex, i3 = t4.partIndex, s4 = t4.start;
      } else {
        this.logger_("chooseNextRequest_ - fallback to a regular segment selection algorithm, based on a syncPoint.");
        const t4 = id.getMediaInfoForTime({ exactManifestTimings: this.exactManifestTimings, playlist: this.playlist_, currentTime: n6, startingPartIndex: this.syncPoint_.partIndex, startingSegmentIndex: this.syncPoint_.segmentIndex, startTime: this.syncPoint_.time });
        e9 = t4.segmentIndex, i3 = t4.partIndex, s4 = t4.startTime;
      }
      a5.getMediaInfoForTime = this.fetchAtBuffer_ ? `bufferedEnd ${n6}` : `currentTime ${n6}`, a5.mediaIndex = e9, a5.startOfSegment = s4, a5.partIndex = i3, this.logger_(`choose next request. Playlist switched and we have a sync point. Media Index: ${a5.mediaIndex} `);
    }
    const o5 = r5[a5.mediaIndex];
    let l2 = o5 && "number" == typeof a5.partIndex && o5.parts && o5.parts[a5.partIndex];
    if (!o5 || "number" == typeof a5.partIndex && !l2) return null;
    "number" != typeof a5.partIndex && o5.parts && (a5.partIndex = 0, l2 = o5.parts[0]);
    const u3 = this.vhs_.playlists && this.vhs_.playlists.main && this.vhs_.playlists.main.independentSegments || this.playlist_.independentSegments;
    if (!i2 && l2 && !u3 && !l2.independent) if (0 === a5.partIndex) {
      const e9 = r5[a5.mediaIndex - 1], t4 = e9.parts && e9.parts.length && e9.parts[e9.parts.length - 1];
      t4 && t4.independent && (a5.mediaIndex -= 1, a5.partIndex = e9.parts.length - 1, a5.independent = "previous segment");
    } else o5.parts[a5.partIndex - 1].independent && (a5.partIndex -= 1, a5.independent = "previous part");
    const h2 = this.mediaSource_ && "ended" === this.mediaSource_.readyState;
    return a5.mediaIndex >= r5.length - 1 && h2 && !this.seeking_() ? null : (this.shouldForceTimestampOffsetAfterResync_ && (this.shouldForceTimestampOffsetAfterResync_ = false, a5.forceTimestampOffset = true, this.logger_("choose next request. Force timestamp offset after loader resync")), this.generateSegmentInfo_(a5));
  }
  getSyncInfoFromMediaSequenceSync_(e8) {
    if (!this.mediaSequenceSync_) return null;
    const t3 = Math.max(e8, this.mediaSequenceSync_.start);
    e8 !== t3 && this.logger_(`getSyncInfoFromMediaSequenceSync_. Pulled target time from ${e8} to ${t3}`);
    const i2 = this.mediaSequenceSync_.getSyncInfoForTime(t3);
    if (!i2) return null;
    if (!i2.isAppended) return i2;
    const s3 = this.mediaSequenceSync_.getSyncInfoForTime(i2.end);
    return s3 ? (s3.isAppended && this.logger_("getSyncInfoFromMediaSequenceSync_: We encounter unexpected scenario where next media sequence sync info is also appended!"), s3) : null;
  }
  generateSegmentInfo_(e8) {
    const { independent: t3, playlist: i2, mediaIndex: s3, startOfSegment: n5, isSyncRequest: r5, partIndex: a5, forceTimestampOffset: o5, getMediaInfoForTime: l2 } = e8, u3 = i2.segments[s3], h2 = "number" == typeof a5 && u3.parts[a5], d3 = { requestId: "segment-loader-" + Math.random(), uri: h2 && h2.resolvedUri || u3.resolvedUri, mediaIndex: s3, partIndex: h2 ? a5 : null, isSyncRequest: r5, startOfSegment: n5, playlist: i2, bytes: null, encryptedBytes: null, timestampOffset: null, timeline: u3.timeline, duration: h2 && h2.duration || u3.duration, segment: u3, part: h2, byteLength: 0, transmuxer: this.transmuxer_, getMediaInfoForTime: l2, independent: t3 }, c3 = void 0 !== o5 ? o5 : this.isPendingTimestampOffset_;
    d3.timestampOffset = this.timestampOffsetForSegment_({ segmentTimeline: u3.timeline, currentTimeline: this.currentTimeline_, startOfSegment: n5, buffered: this.buffered_(), overrideCheck: c3 });
    const p2 = Nh(this.sourceUpdater_.audioBuffered());
    return "number" == typeof p2 && (d3.audioAppendStart = p2 - this.sourceUpdater_.audioTimestampOffset()), this.sourceUpdater_.videoBuffered().length && (d3.gopsToAlignWith = Cp(this.gopBuffer_, this.currentTime_() - this.sourceUpdater_.videoTimestampOffset(), this.timeMapping_)), d3;
  }
  timestampOffsetForSegment_(e8) {
    return Bp(e8);
  }
  earlyAbortWhenNeeded_(e8) {
    if (this.vhs_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH) return;
    if (Date.now() - (e8.firstBytesReceivedAt || Date.now()) < 1e3) return;
    const t3 = this.currentTime_(), i2 = e8.bandwidth, s3 = this.pendingSegment_.duration, n5 = id.estimateSegmentRequestTime(s3, i2, this.playlist_, e8.bytesReceived), r5 = Ph(this.buffered_(), t3, this.vhs_.tech_.playbackRate()) - 1;
    if (n5 <= r5) return;
    const a5 = dp({ main: this.vhs_.playlists.main, currentTime: t3, bandwidth: i2, duration: this.duration_(), segmentDuration: s3, timeUntilRebuffer: r5, currentTimeline: this.currentTimeline_, syncController: this.syncController_ });
    if (!a5) return;
    const o5 = n5 - r5 - a5.rebufferingImpact;
    let l2 = 0.5;
    r5 <= Eh && (l2 = 1), !a5.playlist || a5.playlist.uri === this.playlist_.uri || o5 < l2 || (this.bandwidth = a5.playlist.attributes.BANDWIDTH * hc.BANDWIDTH_VARIANCE + 1, this.trigger("earlyabort"));
  }
  handleAbort_(e8) {
    this.logger_(`Aborting ${Mp(e8)}`), this.mediaRequestsAborted += 1;
  }
  handleProgress_(e8, t3) {
    this.earlyAbortWhenNeeded_(t3.stats), this.checkForAbort_(t3.requestId) || this.trigger("progress");
  }
  handleTrackInfo_(e8, t3) {
    const { hasAudio: i2, hasVideo: s3 } = t3, n5 = { segmentInfo: Wp({ type: this.loaderType_, segment: e8 }), trackInfo: { hasAudio: i2, hasVideo: s3 } };
    this.trigger({ type: "segmenttransmuxingtrackinfoavailable", metadata: n5 }), this.earlyAbortWhenNeeded_(e8.stats), this.checkForAbort_(e8.requestId) || this.checkForIllegalMediaSwitch(t3) || (t3 = t3 || {}, xp(this.currentMediaInfo_, t3) || (this.appendInitSegment_ = { audio: true, video: true }, this.startingMediaInfo_ = t3, this.currentMediaInfo_ = t3, this.logger_("trackinfo update", t3), this.trigger("trackinfo")), this.checkForAbort_(e8.requestId) || (this.pendingSegment_.trackInfo = t3, this.hasEnoughInfoToAppend_() ? this.processCallQueue_() : $p(this)));
  }
  handleTimingInfo_(e8, t3, i2, s3) {
    if (this.earlyAbortWhenNeeded_(e8.stats), this.checkForAbort_(e8.requestId)) return;
    const n5 = this.pendingSegment_, r5 = Up(t3);
    n5[r5] = n5[r5] || {}, n5[r5][i2] = s3, this.logger_(`timinginfo: ${t3} - ${i2} - ${s3}`), this.hasEnoughInfoToAppend_() ? this.processCallQueue_() : $p(this);
  }
  handleCaptions_(e8, t3) {
    if (this.earlyAbortWhenNeeded_(e8.stats), this.checkForAbort_(e8.requestId)) return;
    if (0 === t3.length) return void this.logger_("SegmentLoader received no captions from a caption event");
    if (!this.pendingSegment_.hasAppendedData_) return void this.metadataQueue_.caption.push(this.handleCaptions_.bind(this, e8, t3));
    const i2 = null === this.sourceUpdater_.videoTimestampOffset() ? this.sourceUpdater_.audioTimestampOffset() : this.sourceUpdater_.videoTimestampOffset(), s3 = {};
    t3.forEach((e9) => {
      s3[e9.stream] = s3[e9.stream] || { startTime: 1 / 0, captions: [], endTime: 0 };
      const t4 = s3[e9.stream];
      t4.startTime = Math.min(t4.startTime, e9.startTime + i2), t4.endTime = Math.max(t4.endTime, e9.endTime + i2), t4.captions.push(e9);
    }), Object.keys(s3).forEach((e9) => {
      const { startTime: t4, endTime: n5, captions: r5 } = s3[e9], a5 = this.inbandTextTracks_;
      this.logger_(`adding cues from ${t4} -> ${n5} for ${e9}`), gp(a5, this.vhs_.tech_, e9), Ep(t4, n5, a5[e9]), fp({ captionArray: r5, inbandTextTracks: a5, timestampOffset: i2 });
    }), this.transmuxer_ && this.transmuxer_.postMessage({ action: "clearParsedMp4Captions" });
  }
  handleId3_(e8, t3, i2) {
    if (this.earlyAbortWhenNeeded_(e8.stats), this.checkForAbort_(e8.requestId)) return;
    this.pendingSegment_.hasAppendedData_ ? this.addMetadataToTextTrack(i2, t3, this.duration_()) : this.metadataQueue_.id3.push(this.handleId3_.bind(this, e8, t3, i2));
  }
  processMetadataQueue_() {
    this.metadataQueue_.id3.forEach((e8) => e8()), this.metadataQueue_.caption.forEach((e8) => e8()), this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [];
  }
  processCallQueue_() {
    const e8 = this.callQueue_;
    this.callQueue_ = [], e8.forEach((e9) => e9());
  }
  processLoadQueue_() {
    const e8 = this.loadQueue_;
    this.loadQueue_ = [], e8.forEach((e9) => e9());
  }
  hasEnoughInfoToLoad_() {
    if ("audio" !== this.loaderType_) return true;
    const e8 = this.pendingSegment_;
    return !!e8 && (!this.getCurrentMediaInfo_() || !Fp({ timelineChangeController: this.timelineChangeController_, currentTimeline: this.currentTimeline_, segmentTimeline: e8.timeline, loaderType: this.loaderType_, audioDisabled: this.audioDisabled_ }));
  }
  getCurrentMediaInfo_(e8 = this.pendingSegment_) {
    return e8 && e8.trackInfo || this.currentMediaInfo_;
  }
  getMediaInfo_(e8 = this.pendingSegment_) {
    return this.getCurrentMediaInfo_(e8) || this.startingMediaInfo_;
  }
  getPendingSegmentPlaylist() {
    return this.pendingSegment_ ? this.pendingSegment_.playlist : null;
  }
  hasEnoughInfoToAppend_() {
    if (!this.sourceUpdater_.ready()) return false;
    if (this.waitingOnRemove_ || this.quotaExceededErrorRetryTimeout_) return false;
    const e8 = this.pendingSegment_, t3 = this.getCurrentMediaInfo_();
    if (!e8 || !t3) return false;
    const { hasAudio: i2, hasVideo: s3, isMuxed: n5 } = t3;
    return !(s3 && !e8.videoTimingInfo) && (!(i2 && !this.audioDisabled_ && !n5 && !e8.audioTimingInfo) && !Fp({ timelineChangeController: this.timelineChangeController_, currentTimeline: this.currentTimeline_, segmentTimeline: e8.timeline, loaderType: this.loaderType_, audioDisabled: this.audioDisabled_ }));
  }
  handleData_(e8, t3) {
    if (this.earlyAbortWhenNeeded_(e8.stats), this.checkForAbort_(e8.requestId)) return;
    if (this.callQueue_.length || !this.hasEnoughInfoToAppend_()) return $p(this), void this.callQueue_.push(this.handleData_.bind(this, e8, t3));
    const i2 = this.pendingSegment_;
    if (this.setTimeMapping_(i2.timeline), this.updateMediaSecondsLoaded_(i2.part || i2.segment), "closed" !== this.mediaSource_.readyState) {
      if (e8.map && (e8.map = this.initSegmentForMap(e8.map, true), i2.segment.map = e8.map), e8.key && this.segmentKey(e8.key, true), i2.isFmp4 = e8.isFmp4, i2.timingInfo = i2.timingInfo || {}, i2.isFmp4) this.trigger("fmp4"), i2.timingInfo.start = i2[Up(t3.type)].start;
      else {
        const e9 = this.getCurrentMediaInfo_(), t4 = "main" === this.loaderType_ && e9 && e9.hasVideo;
        let s3;
        t4 && (s3 = i2.videoTimingInfo.start), i2.timingInfo.start = this.trueSegmentStart_({ currentStart: i2.timingInfo.start, playlist: i2.playlist, mediaIndex: i2.mediaIndex, currentVideoTimestampOffset: this.sourceUpdater_.videoTimestampOffset(), useVideoTimingInfo: t4, firstVideoFrameTimeForData: s3, videoTimingInfo: i2.videoTimingInfo, audioTimingInfo: i2.audioTimingInfo });
      }
      if (this.updateAppendInitSegmentStatus(i2, t3.type), this.updateSourceBufferTimestampOffset_(i2), i2.isSyncRequest) {
        this.updateTimingInfoEnd_(i2), this.syncController_.saveSegmentTimingInfo({ segmentInfo: i2, shouldSaveTimelineMapping: "main" === this.loaderType_ });
        const e9 = this.chooseNextRequest_();
        if (e9.mediaIndex !== i2.mediaIndex || e9.partIndex !== i2.partIndex) return void this.logger_("sync segment was incorrect, not appending");
        this.logger_("sync segment was correct, appending");
      }
      i2.hasAppendedData_ = true, this.processMetadataQueue_(), this.appendData_(i2, t3);
    }
  }
  updateAppendInitSegmentStatus(e8, t3) {
    "main" !== this.loaderType_ || "number" != typeof e8.timestampOffset || e8.changedTimestampOffset || (this.appendInitSegment_ = { audio: true, video: true }), this.playlistOfLastInitSegment_[t3] !== e8.playlist && (this.appendInitSegment_[t3] = true);
  }
  getInitSegmentAndUpdateState_({ type: e8, initSegment: t3, map: i2, playlist: s3 }) {
    if (i2) {
      const e9 = Ud(i2);
      if (this.activeInitSegmentId_ === e9) return null;
      t3 = this.initSegmentForMap(i2, true).bytes, this.activeInitSegmentId_ = e9;
    }
    return t3 && this.appendInitSegment_[e8] ? (this.playlistOfLastInitSegment_[e8] = s3, this.appendInitSegment_[e8] = false, this.activeInitSegmentId_ = null, t3) : null;
  }
  handleQuotaExceededError_({ segmentInfo: e8, type: t3, bytes: i2 }, s3) {
    const n5 = this.sourceUpdater_.audioBuffered(), r5 = this.sourceUpdater_.videoBuffered();
    n5.length > 1 && this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the audio buffer: " + Lh(n5).join(", ")), r5.length > 1 && this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the video buffer: " + Lh(r5).join(", "));
    const a5 = n5.length ? n5.start(0) : 0, o5 = n5.length ? n5.end(n5.length - 1) : 0, l2 = r5.length ? r5.start(0) : 0, u3 = r5.length ? r5.end(r5.length - 1) : 0;
    if (o5 - a5 <= Dp && u3 - l2 <= Dp) return this.logger_(`On QUOTA_EXCEEDED_ERR, single segment too large to append to buffer, triggering an error. Appended byte length: ${i2.byteLength}, audio buffer: ${Lh(n5).join(", ")}, video buffer: ${Lh(r5).join(", ")}, `), this.error({ message: "Quota exceeded error with append of a single segment of content", excludeUntil: 1 / 0 }), void this.trigger("error");
    this.waitingOnRemove_ = true, this.callQueue_.push(this.appendToSourceBuffer_.bind(this, { segmentInfo: e8, type: t3, bytes: i2 }));
    const h2 = this.currentTime_() - Dp;
    this.logger_(`On QUOTA_EXCEEDED_ERR, removing audio/video from 0 to ${h2}`), this.remove(0, h2, () => {
      this.logger_(`On QUOTA_EXCEEDED_ERR, retrying append in ${Dp}s`), this.waitingOnRemove_ = false, this.quotaExceededErrorRetryTimeout_ = _.setTimeout(() => {
        this.logger_("On QUOTA_EXCEEDED_ERR, re-processing call queue"), this.quotaExceededErrorRetryTimeout_ = null, this.processCallQueue_();
      }, 1e3 * Dp);
    }, true);
  }
  handleAppendError_({ segmentInfo: e8, type: t3, bytes: i2 }, s3) {
    s3 && (s3.code !== md ? (this.logger_("Received non QUOTA_EXCEEDED_ERR on append", s3), this.error({ message: `${t3} append of ${i2.length}b failed for segment #${e8.mediaIndex} in playlist ${e8.playlist.id}`, metadata: { errorType: dh.Error.StreamingFailedToAppendSegment } }), this.trigger("appenderror")) : this.handleQuotaExceededError_({ segmentInfo: e8, type: t3, bytes: i2 }));
  }
  appendToSourceBuffer_({ segmentInfo: e8, type: t3, initSegment: i2, data: s3, bytes: n5 }) {
    if (!n5) {
      const e9 = [s3];
      let t4 = s3.byteLength;
      i2 && (e9.unshift(i2), t4 += i2.byteLength), n5 = pp({ bytes: t4, segments: e9 });
    }
    const r5 = { segmentInfo: Wp({ type: this.loaderType_, segment: e8 }) };
    this.trigger({ type: "segmentappendstart", metadata: r5 }), this.sourceUpdater_.appendBuffer({ segmentInfo: e8, type: t3, bytes: n5 }, this.handleAppendError_.bind(this, { segmentInfo: e8, type: t3, bytes: n5 }));
  }
  handleSegmentTimingInfo_(e8, t3, i2) {
    if (!this.pendingSegment_ || t3 !== this.pendingSegment_.requestId) return;
    const s3 = this.pendingSegment_.segment, n5 = `${e8}TimingInfo`;
    s3[n5] || (s3[n5] = {}), s3[n5].transmuxerPrependedSeconds = i2.prependedContentDuration || 0, s3[n5].transmuxedPresentationStart = i2.start.presentation, s3[n5].transmuxedDecodeStart = i2.start.decode, s3[n5].transmuxedPresentationEnd = i2.end.presentation, s3[n5].transmuxedDecodeEnd = i2.end.decode, s3[n5].baseMediaDecodeTime = i2.baseMediaDecodeTime;
  }
  appendData_(e8, t3) {
    const { type: i2, data: s3 } = t3;
    if (!s3 || !s3.byteLength) return;
    if ("audio" === i2 && this.audioDisabled_) return;
    const n5 = this.getInitSegmentAndUpdateState_({ type: i2, initSegment: t3.initSegment, playlist: e8.playlist, map: e8.isFmp4 ? e8.segment.map : null });
    this.appendToSourceBuffer_({ segmentInfo: e8, type: i2, initSegment: n5, data: s3 });
  }
  loadSegment_(e8) {
    if (this.state = "WAITING", this.pendingSegment_ = e8, this.trimBackBuffer_(e8), "number" == typeof e8.timestampOffset && this.transmuxer_ && this.transmuxer_.postMessage({ action: "clearAllMp4Captions" }), !this.hasEnoughInfoToLoad_()) return $p(this), void this.loadQueue_.push(() => {
      const t3 = Ue({}, e8, { forceTimestampOffset: true });
      Ue(e8, this.generateSegmentInfo_(t3)), this.isPendingTimestampOffset_ = false, this.updateTransmuxerAndRequestSegment_(e8);
    });
    this.updateTransmuxerAndRequestSegment_(e8);
  }
  updateTransmuxerAndRequestSegment_(e8) {
    this.shouldUpdateTransmuxerTimestampOffset_(e8.timestampOffset) && (this.gopBuffer_.length = 0, e8.gopsToAlignWith = [], this.timeMapping_ = 0, this.transmuxer_.postMessage({ action: "reset" }), this.transmuxer_.postMessage({ action: "setTimestampOffset", timestampOffset: e8.timestampOffset }));
    const t3 = this.createSimplifiedSegmentObj_(e8), i2 = this.isEndOfStream_(e8.mediaIndex, e8.playlist, e8.partIndex), s3 = null !== this.mediaIndex, n5 = e8.timeline !== this.currentTimeline_ && e8.timeline > 0, r5 = i2 || s3 && n5;
    this.logger_(`Requesting
${mp(e8.uri)}
${Mp(e8)}`), t3.map && !t3.map.bytes && (this.logger_("going to request init segment."), this.appendInitSegment_ = { video: true, audio: true }), e8.abortRequests = Xc({ xhr: this.vhs_.xhr, xhrOptions: this.xhrOptions_, decryptionWorker: this.decrypter_, segment: t3, abortFn: this.handleAbort_.bind(this, e8), progressFn: this.handleProgress_.bind(this), trackInfoFn: this.handleTrackInfo_.bind(this), timingInfoFn: this.handleTimingInfo_.bind(this), videoSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, "video", e8.requestId), audioSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, "audio", e8.requestId), captionsFn: this.handleCaptions_.bind(this), isEndOfTimeline: r5, endedTimelineFn: () => {
      this.logger_("received endedtimeline callback");
    }, id3Fn: this.handleId3_.bind(this), dataFn: this.handleData_.bind(this), doneFn: this.segmentRequestFinished_.bind(this), onTransmuxerLog: ({ message: t4, level: i3, stream: s4 }) => {
      this.logger_(`${Mp(e8)} logged from transmuxer stream ${s4} as a ${i3}: ${t4}`);
    }, triggerSegmentEventFn: ({ type: e9, segment: t4, keyInfo: i3, trackInfo: s4, timingInfo: n6 }) => {
      const r6 = { segmentInfo: Wp({ segment: t4 }) };
      i3 && (r6.keyInfo = i3), s4 && (r6.trackInfo = s4), n6 && (r6.timingInfo = n6), this.trigger({ type: e9, metadata: r6 });
    } });
  }
  trimBackBuffer_(e8) {
    const t3 = Rp(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
    t3 > 0 && this.remove(0, t3);
  }
  createSimplifiedSegmentObj_(e8) {
    const t3 = e8.segment, i2 = e8.part, s3 = e8.segment.key || e8.segment.map && e8.segment.map.key, n5 = e8.segment.map && !e8.segment.map.bytes, r5 = { resolvedUri: i2 ? i2.resolvedUri : t3.resolvedUri, byterange: i2 ? i2.byterange : t3.byterange, requestId: e8.requestId, transmuxer: e8.transmuxer, audioAppendStart: e8.audioAppendStart, gopsToAlignWith: e8.gopsToAlignWith, part: e8.part, type: this.loaderType_, start: e8.startOfSegment, duration: e8.duration, isEncrypted: s3, isMediaInitialization: n5 }, a5 = e8.playlist.segments[e8.mediaIndex - 1];
    if (a5 && a5.timeline === t3.timeline && (a5.videoTimingInfo ? r5.baseStartTime = a5.videoTimingInfo.transmuxedDecodeEnd : a5.audioTimingInfo && (r5.baseStartTime = a5.audioTimingInfo.transmuxedDecodeEnd)), t3.key) {
      const i3 = t3.key.iv || new Uint32Array([0, 0, 0, e8.mediaIndex + e8.playlist.mediaSequence]);
      r5.key = this.segmentKey(t3.key), r5.key.iv = i3;
    }
    return t3.map && (r5.map = this.initSegmentForMap(t3.map)), r5;
  }
  saveTransferStats_(e8) {
    this.mediaRequests += 1, e8 && (this.mediaBytesTransferred += e8.bytesReceived, this.mediaTransferDuration += e8.roundTripTime);
  }
  saveBandwidthRelatedStats_(e8, t3) {
    if (this.pendingSegment_.byteLength = t3.bytesReceived, e8 < Op) return void this.logger_(`Ignoring segment's bandwidth because its duration of ${e8} is less than the min to record ${Op}`);
    const i2 = { bandwidthInfo: { from: this.bandwidth, to: t3.bandwidth } };
    this.trigger({ type: "bandwidthupdated", metadata: i2 }), this.bandwidth = t3.bandwidth, this.roundTrip = t3.roundTripTime;
  }
  handleTimeout_() {
    this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, this.trigger("bandwidthupdate"), this.trigger("timeout");
  }
  segmentRequestFinished_(e8, t3, i2) {
    if (this.callQueue_.length) return void this.callQueue_.push(this.segmentRequestFinished_.bind(this, e8, t3, i2));
    if (this.saveTransferStats_(t3.stats), !this.pendingSegment_) return;
    if (t3.requestId !== this.pendingSegment_.requestId) return;
    if (e8) {
      if (this.pendingSegment_ = null, this.state = "READY", e8.code === Ac.ABORTED) return;
      return this.pause(), e8.code === Ac.TIMEOUT ? void this.handleTimeout_() : (this.mediaRequestsErrored += 1, this.error(e8), void this.trigger("error"));
    }
    const s3 = this.pendingSegment_;
    this.saveBandwidthRelatedStats_(s3.duration, t3.stats), s3.endOfAllRequests = t3.endOfAllRequests, i2.gopInfo && (this.gopBuffer_ = kp(this.gopBuffer_, i2.gopInfo, this.safeAppend_)), this.state = "APPENDING", this.trigger("appending"), this.waitForAppendsToComplete_(s3);
  }
  setTimeMapping_(e8) {
    const t3 = this.syncController_.mappingForTimeline(e8);
    null !== t3 && (this.timeMapping_ = t3);
  }
  updateMediaSecondsLoaded_(e8) {
    "number" == typeof e8.start && "number" == typeof e8.end ? this.mediaSecondsLoaded += e8.end - e8.start : this.mediaSecondsLoaded += e8.duration;
  }
  shouldUpdateTransmuxerTimestampOffset_(e8) {
    return null !== e8 && ("main" === this.loaderType_ && e8 !== this.sourceUpdater_.videoTimestampOffset() || !this.audioDisabled_ && e8 !== this.sourceUpdater_.audioTimestampOffset());
  }
  trueSegmentStart_({ currentStart: e8, playlist: t3, mediaIndex: i2, firstVideoFrameTimeForData: s3, currentVideoTimestampOffset: n5, useVideoTimingInfo: r5, videoTimingInfo: a5, audioTimingInfo: o5 }) {
    if (void 0 !== e8) return e8;
    if (!r5) return o5.start;
    const l2 = t3.segments[i2 - 1];
    return 0 !== i2 && l2 && void 0 !== l2.start && l2.end === s3 + n5 ? a5.start : s3;
  }
  waitForAppendsToComplete_(e8) {
    const t3 = this.getCurrentMediaInfo_(e8);
    if (!t3) return this.error({ message: "No starting media returned, likely due to an unsupported media format.", playlistExclusionDuration: 1 / 0 }), void this.trigger("error");
    const { hasAudio: i2, hasVideo: s3, isMuxed: n5 } = t3, r5 = "main" === this.loaderType_ && s3, a5 = !this.audioDisabled_ && i2 && !n5;
    if (e8.waitingOnAppends = 0, !e8.hasAppendedData_) return e8.timingInfo || "number" != typeof e8.timestampOffset || (this.isPendingTimestampOffset_ = true), e8.timingInfo = { start: 0 }, e8.waitingOnAppends++, this.isPendingTimestampOffset_ || (this.updateSourceBufferTimestampOffset_(e8), this.processMetadataQueue_()), void this.checkAppendsDone_(e8);
    r5 && e8.waitingOnAppends++, a5 && e8.waitingOnAppends++, r5 && this.sourceUpdater_.videoQueueCallback(this.checkAppendsDone_.bind(this, e8)), a5 && this.sourceUpdater_.audioQueueCallback(this.checkAppendsDone_.bind(this, e8));
  }
  checkAppendsDone_(e8) {
    this.checkForAbort_(e8.requestId) || (e8.waitingOnAppends--, 0 === e8.waitingOnAppends && this.handleAppendsDone_());
  }
  checkForIllegalMediaSwitch(e8) {
    const t3 = Np(this.loaderType_, this.getCurrentMediaInfo_(), e8);
    return !!t3 && (this.error({ message: t3, playlistExclusionDuration: 1 / 0 }), this.trigger("error"), true);
  }
  updateSourceBufferTimestampOffset_(e8) {
    if (null === e8.timestampOffset || "number" != typeof e8.timingInfo.start || e8.changedTimestampOffset || "main" !== this.loaderType_) return;
    let t3 = false;
    e8.timestampOffset -= this.getSegmentStartTimeForTimestampOffsetCalculation_({ videoTimingInfo: e8.segment.videoTimingInfo, audioTimingInfo: e8.segment.audioTimingInfo, timingInfo: e8.timingInfo }), e8.changedTimestampOffset = true, e8.timestampOffset !== this.sourceUpdater_.videoTimestampOffset() && (this.sourceUpdater_.videoTimestampOffset(e8.timestampOffset), t3 = true), e8.timestampOffset !== this.sourceUpdater_.audioTimestampOffset() && (this.sourceUpdater_.audioTimestampOffset(e8.timestampOffset), t3 = true), t3 && this.trigger("timestampoffset");
  }
  getSegmentStartTimeForTimestampOffsetCalculation_({ videoTimingInfo: e8, audioTimingInfo: t3, timingInfo: i2 }) {
    return this.useDtsForTimestampOffset_ ? e8 && "number" == typeof e8.transmuxedDecodeStart ? e8.transmuxedDecodeStart : t3 && "number" == typeof t3.transmuxedDecodeStart ? t3.transmuxedDecodeStart : i2.start : i2.start;
  }
  updateTimingInfoEnd_(e8) {
    e8.timingInfo = e8.timingInfo || {};
    const t3 = this.getMediaInfo_(), i2 = "main" === this.loaderType_ && t3 && t3.hasVideo && e8.videoTimingInfo ? e8.videoTimingInfo : e8.audioTimingInfo;
    i2 && (e8.timingInfo.end = "number" == typeof i2.end ? i2.end : i2.start + e8.duration);
  }
  handleAppendsDone_() {
    if (this.pendingSegment_) {
      const e9 = { segmentInfo: Wp({ type: this.loaderType_, segment: this.pendingSegment_ }) };
      this.trigger({ type: "appendsdone", metadata: e9 });
    }
    if (!this.pendingSegment_) return this.state = "READY", void (this.paused() || this.monitorBuffer_());
    const e8 = this.pendingSegment_;
    e8.part && e8.part.syncInfo ? e8.part.syncInfo.markAppended() : e8.segment.syncInfo && e8.segment.syncInfo.markAppended(), this.updateTimingInfoEnd_(e8), this.shouldSaveSegmentTimingInfo_ && this.syncController_.saveSegmentTimingInfo({ segmentInfo: e8, shouldSaveTimelineMapping: "main" === this.loaderType_ });
    const t3 = zp(e8, this.sourceType_);
    if (t3 && ("warn" === t3.severity ? dh.log.warn(t3.message) : this.logger_(t3.message)), this.recordThroughput_(e8), this.pendingSegment_ = null, this.state = "READY", e8.isSyncRequest && (this.trigger("syncinfoupdate"), !e8.hasAppendedData_)) return void this.logger_(`Throwing away un-appended sync request ${Mp(e8)}`);
    this.logger_(`Appended ${Mp(e8)}`), this.addSegmentMetadataCue_(e8), this.fetchAtBuffer_ = true, this.currentTimeline_ !== e8.timeline && (this.timelineChangeController_.lastTimelineChange({ type: this.loaderType_, from: this.currentTimeline_, to: e8.timeline }), "main" !== this.loaderType_ || this.audioDisabled_ || this.timelineChangeController_.lastTimelineChange({ type: "audio", from: this.currentTimeline_, to: e8.timeline })), this.currentTimeline_ = e8.timeline, this.trigger("syncinfoupdate");
    const i2 = e8.segment, s3 = e8.part, n5 = i2.end && this.currentTime_() - i2.end > 3 * e8.playlist.targetDuration, r5 = s3 && s3.end && this.currentTime_() - s3.end > 3 * e8.playlist.partTargetDuration;
    if (n5 || r5) return this.logger_(`bad ${n5 ? "segment" : "part"} ${Mp(e8)}`), void this.resetEverything();
    null !== this.mediaIndex && this.trigger("bandwidthupdate"), this.trigger("progress"), this.mediaIndex = e8.mediaIndex, this.partIndex = e8.partIndex, this.isEndOfStream_(e8.mediaIndex, e8.playlist, e8.partIndex) && this.endOfStream(), this.trigger("appended"), e8.hasAppendedData_ && this.mediaAppends++, this.paused() || this.monitorBuffer_();
  }
  recordThroughput_(e8) {
    if (e8.duration < Op) return void this.logger_(`Ignoring segment's throughput because its duration of ${e8.duration} is less than the min to record ${Op}`);
    const t3 = this.throughput.rate, i2 = Date.now() - e8.endOfAllRequests + 1, s3 = Math.floor(e8.byteLength / i2 * 8 * 1e3);
    this.throughput.rate += (s3 - t3) / ++this.throughput.count;
  }
  addSegmentMetadataCue_(e8) {
    if (!this.segmentMetadataTrack_) return;
    const t3 = e8.segment, i2 = t3.start, s3 = t3.end;
    if (!Lp(i2) || !Lp(s3)) return;
    Ep(i2, s3, this.segmentMetadataTrack_);
    const n5 = _.WebKitDataCue || _.VTTCue, r5 = { custom: t3.custom, dateTimeObject: t3.dateTimeObject, dateTimeString: t3.dateTimeString, programDateTime: t3.programDateTime, bandwidth: e8.playlist.attributes.BANDWIDTH, resolution: e8.playlist.attributes.RESOLUTION, codecs: e8.playlist.attributes.CODECS, byteLength: e8.byteLength, uri: e8.uri, timeline: e8.timeline, playlist: e8.playlist.id, start: i2, end: s3 }, a5 = new n5(i2, s3, JSON.stringify(r5));
    a5.value = r5, this.segmentMetadataTrack_.addCue(a5);
  }
};
function Xp() {
}
var Kp = function(e8) {
  return "string" != typeof e8 ? e8 : e8.replace(/./, (e9) => e9.toUpperCase());
};
var Yp = ["video", "audio"];
var Qp = (e8, t3) => {
  const i2 = t3[`${e8}Buffer`];
  return i2 && i2.updating || t3.queuePending[e8];
};
var Jp = (e8, t3) => {
  for (let i2 = 0; i2 < t3.length; i2++) {
    const s3 = t3[i2];
    if ("mediaSource" === s3.type) return null;
    if (s3.type === e8) return i2;
  }
  return null;
};
var Zp = (e8, t3) => {
  if (0 === t3.queue.length) return;
  let i2 = 0, s3 = t3.queue[i2];
  if ("mediaSource" !== s3.type) {
    if ("mediaSource" !== e8 && t3.ready() && "closed" !== t3.mediaSource.readyState && !Qp(e8, t3)) {
      if (s3.type !== e8) {
        if (i2 = Jp(e8, t3.queue), null === i2) return;
        s3 = t3.queue[i2];
      }
      return t3.queue.splice(i2, 1), t3.queuePending[e8] = s3, s3.action(e8, t3), s3.doneFn ? void 0 : (t3.queuePending[e8] = null, void Zp(e8, t3));
    }
  } else t3.updating() || "closed" === t3.mediaSource.readyState || (t3.queue.shift(), s3.action(t3), s3.doneFn && s3.doneFn(), Zp("audio", t3), Zp("video", t3));
};
var em = (e8, t3) => {
  const i2 = t3[`${e8}Buffer`], s3 = Kp(e8);
  i2 && (i2.removeEventListener("updateend", t3[`on${s3}UpdateEnd_`]), i2.removeEventListener("error", t3[`on${s3}Error_`]), t3.codecs[e8] = null, t3[`${e8}Buffer`] = null);
};
var tm = (e8, t3) => e8 && t3 && -1 !== Array.prototype.indexOf.call(e8.sourceBuffers, t3);
var im = { appendBuffer: (e8, t3, i2) => (s3, n5) => {
  const r5 = n5[`${s3}Buffer`];
  if (tm(n5.mediaSource, r5)) {
    n5.logger_(`Appending segment ${t3.mediaIndex}'s ${e8.length} bytes to ${s3}Buffer`);
    try {
      r5.appendBuffer(e8);
    } catch (a5) {
      n5.logger_(`Error with code ${a5.code} ` + (a5.code === md ? "(QUOTA_EXCEEDED_ERR) " : "") + `when appending segment ${t3.mediaIndex} to ${s3}Buffer`), n5.queuePending[s3] = null, i2(a5);
    }
  }
}, remove: (e8, t3) => (i2, s3) => {
  const n5 = s3[`${i2}Buffer`];
  if (tm(s3.mediaSource, n5)) {
    s3.logger_(`Removing ${e8} to ${t3} from ${i2}Buffer`);
    try {
      n5.remove(e8, t3);
    } catch (r5) {
      s3.logger_(`Remove ${e8} to ${t3} from ${i2}Buffer failed`);
    }
  }
}, timestampOffset: (e8) => (t3, i2) => {
  const s3 = i2[`${t3}Buffer`];
  tm(i2.mediaSource, s3) && (i2.logger_(`Setting ${t3}timestampOffset to ${e8}`), s3.timestampOffset = e8);
}, callback: (e8) => (t3, i2) => {
  e8();
}, endOfStream: (e8) => (t3) => {
  if ("open" === t3.mediaSource.readyState) {
    t3.logger_(`Calling mediaSource endOfStream(${e8 || ""})`);
    try {
      t3.mediaSource.endOfStream(e8);
    } catch (i2) {
      dh.log.warn("Failed to call media source endOfStream", i2);
    }
  }
}, duration: (e8) => (t3) => {
  t3.logger_(`Setting mediaSource duration to ${e8}`);
  try {
    t3.mediaSource.duration = e8;
  } catch (i2) {
    dh.log.warn("Failed to set media source duration", i2);
  }
}, abort: () => (e8, t3) => {
  if ("open" !== t3.mediaSource.readyState) return;
  const i2 = t3[`${e8}Buffer`];
  if (tm(t3.mediaSource, i2)) {
    t3.logger_(`calling abort on ${e8}Buffer`);
    try {
      i2.abort();
    } catch (s3) {
      dh.log.warn(`Failed to abort on ${e8}Buffer`, s3);
    }
  }
}, addSourceBuffer: (e8, t3) => (i2) => {
  const s3 = Kp(e8), n5 = ht(t3);
  i2.logger_(`Adding ${e8}Buffer with codec ${t3} to mediaSource`);
  const r5 = i2.mediaSource.addSourceBuffer(n5);
  r5.addEventListener("updateend", i2[`on${s3}UpdateEnd_`]), r5.addEventListener("error", i2[`on${s3}Error_`]), i2.codecs[e8] = t3, i2[`${e8}Buffer`] = r5;
}, removeSourceBuffer: (e8) => (t3) => {
  const i2 = t3[`${e8}Buffer`];
  if (em(e8, t3), tm(t3.mediaSource, i2)) {
    t3.logger_(`Removing ${e8}Buffer with codec ${t3.codecs[e8]} from mediaSource`);
    try {
      t3.mediaSource.removeSourceBuffer(i2);
    } catch (s3) {
      dh.log.warn(`Failed to removeSourceBuffer ${e8}Buffer`, s3);
    }
  }
}, changeType: (e8) => (t3, i2) => {
  const s3 = i2[`${t3}Buffer`], n5 = ht(e8);
  if (!tm(i2.mediaSource, s3)) return;
  const r5 = e8.substring(0, e8.indexOf(".")), a5 = i2.codecs[t3];
  if (a5.substring(0, a5.indexOf(".")) === r5) return;
  const o5 = { codecsChangeInfo: { from: a5, to: e8 } };
  i2.trigger({ type: "codecschange", metadata: o5 }), i2.logger_(`changing ${t3}Buffer codec from ${a5} to ${e8}`);
  try {
    s3.changeType(n5), i2.codecs[t3] = e8;
  } catch (l2) {
    o5.errorType = dh.Error.StreamingCodecsChangeError, o5.error = l2, l2.metadata = o5, i2.error_ = l2, i2.trigger("error"), dh.log.warn(`Failed to changeType on ${t3}Buffer`, l2);
  }
} };
var sm = ({ type: e8, sourceUpdater: t3, action: i2, doneFn: s3, name: n5 }) => {
  t3.queue.push({ type: e8, action: i2, doneFn: s3, name: n5 }), Zp(e8, t3);
};
var nm = (e8, t3) => (i2) => {
  const s3 = Sh(t3[`${e8}Buffered`]());
  if (t3.logger_(`received "updateend" event for ${e8} Source Buffer: `, s3), t3.queuePending[e8]) {
    const i3 = t3.queuePending[e8].doneFn;
    t3.queuePending[e8] = null, i3 && i3(t3[`${e8}Error_`]);
  }
  Zp(e8, t3);
};
var rm = class extends dh.EventTarget {
  constructor(e8) {
    super(), this.mediaSource = e8, this.sourceopenListener_ = () => Zp("mediaSource", this), this.mediaSource.addEventListener("sourceopen", this.sourceopenListener_), this.logger_ = bh("SourceUpdater"), this.audioTimestampOffset_ = 0, this.videoTimestampOffset_ = 0, this.queue = [], this.queuePending = { audio: null, video: null }, this.delayedAudioAppendQueue_ = [], this.videoAppendQueued_ = false, this.codecs = {}, this.onVideoUpdateEnd_ = nm("video", this), this.onAudioUpdateEnd_ = nm("audio", this), this.onVideoError_ = (e9) => {
      this.videoError_ = e9;
    }, this.onAudioError_ = (e9) => {
      this.audioError_ = e9;
    }, this.createdSourceBuffers_ = false, this.initializedEme_ = false, this.triggeredReady_ = false;
  }
  initializedEme() {
    this.initializedEme_ = true, this.triggerReady();
  }
  hasCreatedSourceBuffers() {
    return this.createdSourceBuffers_;
  }
  hasInitializedAnyEme() {
    return this.initializedEme_;
  }
  ready() {
    return this.hasCreatedSourceBuffers() && this.hasInitializedAnyEme();
  }
  createSourceBuffers(e8) {
    this.hasCreatedSourceBuffers() || (this.addOrChangeSourceBuffers(e8), this.createdSourceBuffers_ = true, this.trigger("createdsourcebuffers"), this.triggerReady());
  }
  triggerReady() {
    this.ready() && !this.triggeredReady_ && (this.triggeredReady_ = true, this.trigger("ready"));
  }
  addSourceBuffer(e8, t3) {
    sm({ type: "mediaSource", sourceUpdater: this, action: im.addSourceBuffer(e8, t3), name: "addSourceBuffer" });
  }
  abort(e8) {
    sm({ type: e8, sourceUpdater: this, action: im.abort(e8), name: "abort" });
  }
  removeSourceBuffer(e8) {
    this.canRemoveSourceBuffer() ? sm({ type: "mediaSource", sourceUpdater: this, action: im.removeSourceBuffer(e8), name: "removeSourceBuffer" }) : dh.log.error("removeSourceBuffer is not supported!");
  }
  canRemoveSourceBuffer() {
    return !dh.browser.IS_FIREFOX && _.MediaSource && _.MediaSource.prototype && "function" == typeof _.MediaSource.prototype.removeSourceBuffer;
  }
  static canChangeType() {
    return _.SourceBuffer && _.SourceBuffer.prototype && "function" == typeof _.SourceBuffer.prototype.changeType;
  }
  canChangeType() {
    return this.constructor.canChangeType();
  }
  changeType(e8, t3) {
    this.canChangeType() ? sm({ type: e8, sourceUpdater: this, action: im.changeType(t3), name: "changeType" }) : dh.log.error("changeType is not supported!");
  }
  addOrChangeSourceBuffers(e8) {
    if (!e8 || "object" != typeof e8 || 0 === Object.keys(e8).length) throw new Error("Cannot addOrChangeSourceBuffers to undefined codecs");
    Object.keys(e8).forEach((t3) => {
      const i2 = e8[t3];
      if (!this.hasCreatedSourceBuffers()) return this.addSourceBuffer(t3, i2);
      this.canChangeType() && this.changeType(t3, i2);
    });
  }
  appendBuffer(e8, t3) {
    const { segmentInfo: i2, type: s3, bytes: n5 } = e8;
    if (this.processedAppend_ = true, "audio" === s3 && this.videoBuffer && !this.videoAppendQueued_) return this.delayedAudioAppendQueue_.push([e8, t3]), void this.logger_(`delayed audio append of ${n5.length} until video append`);
    const r5 = t3;
    if (sm({ type: s3, sourceUpdater: this, action: im.appendBuffer(n5, i2 || { mediaIndex: -1 }, r5), doneFn: t3, name: "appendBuffer" }), "video" === s3) {
      if (this.videoAppendQueued_ = true, !this.delayedAudioAppendQueue_.length) return;
      const e9 = this.delayedAudioAppendQueue_.slice();
      this.logger_(`queuing delayed audio ${e9.length} appendBuffers`), this.delayedAudioAppendQueue_.length = 0, e9.forEach((e10) => {
        this.appendBuffer.apply(this, e10);
      });
    }
  }
  audioBuffered() {
    return tm(this.mediaSource, this.audioBuffer) && this.audioBuffer.buffered ? this.audioBuffer.buffered : Th();
  }
  videoBuffered() {
    return tm(this.mediaSource, this.videoBuffer) && this.videoBuffer.buffered ? this.videoBuffer.buffered : Th();
  }
  buffered() {
    const e8 = tm(this.mediaSource, this.videoBuffer) ? this.videoBuffer : null, t3 = tm(this.mediaSource, this.audioBuffer) ? this.audioBuffer : null;
    return t3 && !e8 ? this.audioBuffered() : e8 && !t3 ? this.videoBuffered() : Ah(this.audioBuffered(), this.videoBuffered());
  }
  setDuration(e8, t3 = Xp) {
    sm({ type: "mediaSource", sourceUpdater: this, action: im.duration(e8), name: "duration", doneFn: t3 });
  }
  endOfStream(e8 = null, t3 = Xp) {
    "string" != typeof e8 && (e8 = void 0), sm({ type: "mediaSource", sourceUpdater: this, action: im.endOfStream(e8), name: "endOfStream", doneFn: t3 });
  }
  removeAudio(e8, t3, i2 = Xp) {
    this.audioBuffered().length && 0 !== this.audioBuffered().end(0) ? sm({ type: "audio", sourceUpdater: this, action: im.remove(e8, t3), doneFn: i2, name: "remove" }) : i2();
  }
  removeVideo(e8, t3, i2 = Xp) {
    this.videoBuffered().length && 0 !== this.videoBuffered().end(0) ? sm({ type: "video", sourceUpdater: this, action: im.remove(e8, t3), doneFn: i2, name: "remove" }) : i2();
  }
  updating() {
    return !(!Qp("audio", this) && !Qp("video", this));
  }
  audioTimestampOffset(e8) {
    return void 0 !== e8 && this.audioBuffer && this.audioTimestampOffset_ !== e8 && (sm({ type: "audio", sourceUpdater: this, action: im.timestampOffset(e8), name: "timestampOffset" }), this.audioTimestampOffset_ = e8), this.audioTimestampOffset_;
  }
  videoTimestampOffset(e8) {
    return void 0 !== e8 && this.videoBuffer && this.videoTimestampOffset_ !== e8 && (sm({ type: "video", sourceUpdater: this, action: im.timestampOffset(e8), name: "timestampOffset" }), this.videoTimestampOffset_ = e8), this.videoTimestampOffset_;
  }
  audioQueueCallback(e8) {
    this.audioBuffer && sm({ type: "audio", sourceUpdater: this, action: im.callback(e8), name: "callback" });
  }
  videoQueueCallback(e8) {
    this.videoBuffer && sm({ type: "video", sourceUpdater: this, action: im.callback(e8), name: "callback" });
  }
  dispose() {
    this.trigger("dispose"), Yp.forEach((e8) => {
      this.abort(e8), this.canRemoveSourceBuffer() ? this.removeSourceBuffer(e8) : this[`${e8}QueueCallback`](() => em(e8, this));
    }), this.videoAppendQueued_ = false, this.delayedAudioAppendQueue_.length = 0, this.sourceopenListener_ && this.mediaSource.removeEventListener("sourceopen", this.sourceopenListener_), this.off();
  }
};
var am = (e8) => decodeURIComponent(escape(String.fromCharCode.apply(null, e8)));
var om = (e8) => {
  const t3 = new Uint8Array(e8);
  return Array.from(t3).map((e9) => e9.toString(16).padStart(2, "0")).join("");
};
var lm = new Uint8Array("\n\n".split("").map((e8) => e8.charCodeAt(0)));
var um = class extends Error {
  constructor() {
    super("Trying to parse received VTT cues, but there is no WebVTT. Make sure vtt.js is loaded.");
  }
};
var hm = class extends Gp {
  constructor(e8, t3 = {}) {
    super(e8, t3), this.mediaSource_ = null, this.subtitlesTrack_ = null, this.featuresNativeTextTracks_ = e8.featuresNativeTextTracks, this.loadVttJs = e8.loadVttJs, this.shouldSaveSegmentTimingInfo_ = false;
  }
  buffered_() {
    if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues || !this.subtitlesTrack_.cues.length) return Th();
    const e8 = this.subtitlesTrack_.cues;
    return Th([[e8[0].startTime, e8[e8.length - 1].startTime]]);
  }
  initSegmentForMap(e8, t3 = false) {
    if (!e8) return null;
    const i2 = Ud(e8);
    let s3 = this.initSegments_[i2];
    if (t3 && !s3 && e8.bytes) {
      const t4 = lm.byteLength + e8.bytes.byteLength, n5 = new Uint8Array(t4);
      n5.set(e8.bytes), n5.set(lm, e8.bytes.byteLength), this.initSegments_[i2] = s3 = { resolvedUri: e8.resolvedUri, byterange: e8.byterange, bytes: n5 };
    }
    return s3 || e8;
  }
  couldBeginLoading_() {
    return this.playlist_ && this.subtitlesTrack_ && !this.paused();
  }
  init_() {
    return this.state = "READY", this.resetEverything(), this.monitorBuffer_();
  }
  track(e8) {
    return void 0 === e8 || (this.subtitlesTrack_ = e8, "INIT" === this.state && this.couldBeginLoading_() && this.init_()), this.subtitlesTrack_;
  }
  remove(e8, t3) {
    Ep(e8, t3, this.subtitlesTrack_);
  }
  fillBuffer_() {
    const e8 = this.chooseNextRequest_();
    if (e8) {
      if (null === this.syncController_.timestampOffsetForTimeline(e8.timeline)) {
        const e9 = () => {
          this.state = "READY", this.paused() || this.monitorBuffer_();
        };
        return this.syncController_.one("timestampoffset", e9), void (this.state = "WAITING_ON_TIMELINE");
      }
      this.loadSegment_(e8);
    }
  }
  timestampOffsetForSegment_() {
    return null;
  }
  chooseNextRequest_() {
    return this.skipEmptySegments_(super.chooseNextRequest_());
  }
  skipEmptySegments_(e8) {
    for (; e8 && e8.segment.empty; ) {
      if (e8.mediaIndex + 1 >= e8.playlist.segments.length) {
        e8 = null;
        break;
      }
      e8 = this.generateSegmentInfo_({ playlist: e8.playlist, mediaIndex: e8.mediaIndex + 1, startOfSegment: e8.startOfSegment + e8.duration, isSyncRequest: e8.isSyncRequest });
    }
    return e8;
  }
  stopForError(e8) {
    this.error(e8), this.state = "READY", this.pause(), this.trigger("error");
  }
  segmentRequestFinished_(e8, t3, i2) {
    if (!this.subtitlesTrack_) return void (this.state = "READY");
    if (this.saveTransferStats_(t3.stats), !this.pendingSegment_) return this.state = "READY", void (this.mediaRequestsAborted += 1);
    if (e8) return e8.code === Ac.TIMEOUT && this.handleTimeout_(), e8.code === Ac.ABORTED ? this.mediaRequestsAborted += 1 : this.mediaRequestsErrored += 1, void this.stopForError(e8);
    const s3 = this.pendingSegment_, n5 = i2.mp4VttCues && i2.mp4VttCues.length;
    n5 && (s3.mp4VttCues = i2.mp4VttCues), this.saveBandwidthRelatedStats_(s3.duration, t3.stats), t3.key && this.segmentKey(t3.key, true), this.state = "APPENDING", this.trigger("appending");
    const r5 = s3.segment;
    if (r5.map && (r5.map.bytes = t3.map.bytes), s3.bytes = t3.bytes, "function" != typeof _.WebVTT && "function" == typeof this.loadVttJs) return this.state = "WAITING_ON_VTTJS", void this.loadVttJs().then(() => this.segmentRequestFinished_(e8, t3, i2), () => this.stopForError({ message: "Error loading vtt.js" }));
    r5.requested = true;
    try {
      this.parseVTTCues_(s3);
    } catch (a5) {
      return void this.stopForError({ message: a5.message, metadata: { errorType: dh.Error.StreamingVttParserError, error: a5 } });
    }
    if (n5 || this.updateTimeMapping_(s3, this.syncController_.timelines[s3.timeline], this.playlist_), s3.cues.length ? s3.timingInfo = { start: s3.cues[0].startTime, end: s3.cues[s3.cues.length - 1].endTime } : s3.timingInfo = { start: s3.startOfSegment, end: s3.startOfSegment + s3.duration }, s3.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void (this.state = "READY");
    s3.byteLength = s3.bytes.byteLength, this.mediaSecondsLoaded += r5.duration, s3.cues.forEach((e9) => {
      this.subtitlesTrack_.addCue(this.featuresNativeTextTracks_ ? new _.VTTCue(e9.startTime, e9.endTime, e9.text) : e9);
    }), wp(this.subtitlesTrack_), this.handleAppendsDone_();
  }
  handleData_(e8, t3) {
    const i2 = e8 && "vtt" === e8.type, s3 = t3 && "text" === t3.type;
    i2 && s3 && super.handleData_(e8, t3);
  }
  updateTimingInfoEnd_() {
  }
  parseMp4VttCues_(e8) {
    const t3 = null === this.sourceUpdater_.videoTimestampOffset() ? this.sourceUpdater_.audioTimestampOffset() : this.sourceUpdater_.videoTimestampOffset();
    e8.mp4VttCues.forEach((i2) => {
      const s3 = i2.start + t3, n5 = i2.end + t3, r5 = new _.VTTCue(s3, n5, i2.cueText);
      i2.settings && i2.settings.split(" ").forEach((e9) => {
        const t4 = e9.split(":"), i3 = t4[0], s4 = t4[1];
        r5[i3] = isNaN(s4) ? s4 : Number(s4);
      }), e8.cues.push(r5);
    });
  }
  parseVTTCues_(e8) {
    let t3, i2 = false;
    if ("function" != typeof _.WebVTT) throw new um();
    if (e8.cues = [], e8.timestampmap = { MPEGTS: 0, LOCAL: 0 }, e8.mp4VttCues) return void this.parseMp4VttCues_(e8);
    "function" == typeof _.TextDecoder ? t3 = new _.TextDecoder("utf8") : (t3 = _.WebVTT.StringDecoder(), i2 = true);
    const s3 = new _.WebVTT.Parser(_, _.vttjs, t3);
    if (s3.oncue = e8.cues.push.bind(e8.cues), s3.ontimestampmap = (t4) => {
      e8.timestampmap = t4;
    }, s3.onparsingerror = (e9) => {
      dh.log.warn("Error encountered when parsing cues: " + e9.message);
    }, e8.segment.map) {
      let t4 = e8.segment.map.bytes;
      i2 && (t4 = am(t4)), s3.parse(t4);
    }
    let n5 = e8.bytes;
    i2 && (n5 = am(n5)), s3.parse(n5), s3.flush();
  }
  updateTimeMapping_(e8, t3, i2) {
    const s3 = e8.segment;
    if (!t3) return;
    if (!e8.cues.length) return void (s3.empty = true);
    const { MPEGTS: n5, LOCAL: r5 } = e8.timestampmap, a5 = n5 / en.ONE_SECOND_IN_TS - r5 + t3.mapping;
    if (e8.cues.forEach((e9) => {
      const i3 = e9.endTime - e9.startTime, s4 = this.handleRollover_(e9.startTime + a5, t3.time);
      e9.startTime = Math.max(s4, 0), e9.endTime = Math.max(s4 + i3, 0);
    }), !i2.syncInfo) {
      const t4 = e8.cues[0].startTime, n6 = e8.cues[e8.cues.length - 1].startTime;
      i2.syncInfo = { mediaSequence: i2.mediaSequence + e8.mediaIndex, time: Math.min(t4, n6 - s3.duration) };
    }
  }
  handleRollover_(e8, t3) {
    if (null === t3) return e8;
    let i2 = e8 * en.ONE_SECOND_IN_TS;
    const s3 = t3 * en.ONE_SECOND_IN_TS;
    let n5;
    for (n5 = s3 < i2 ? -8589934592 : 8589934592; Math.abs(i2 - s3) > 4294967296; ) i2 += n5;
    return i2 / en.ONE_SECOND_IN_TS;
  }
};
var dm = function(e8, t3) {
  const i2 = e8.cues;
  for (let s3 = 0; s3 < i2.length; s3++) {
    const e9 = i2[s3];
    if (t3 >= e9.adStartTime && t3 <= e9.adEndTime) return e9;
  }
  return null;
};
var cm = function(e8, t3, i2 = 0) {
  if (!e8.segments) return;
  let s3, n5 = i2;
  for (let r5 = 0; r5 < e8.segments.length; r5++) {
    const i3 = e8.segments[r5];
    if (s3 || (s3 = dm(t3, n5 + i3.duration / 2)), s3) {
      if ("cueIn" in i3) {
        s3.endTime = n5, s3.adEndTime = n5, n5 += i3.duration, s3 = null;
        continue;
      }
      if (n5 < s3.endTime) {
        n5 += i3.duration;
        continue;
      }
      s3.endTime += i3.duration;
    } else if ("cueOut" in i3 && (s3 = new _.VTTCue(n5, n5 + i3.duration, i3.cueOut), s3.adStartTime = n5, s3.adEndTime = n5 + parseFloat(i3.cueOut), t3.addCue(s3)), "cueOutCont" in i3) {
      const [e9, r6] = i3.cueOutCont.split("/").map(parseFloat);
      s3 = new _.VTTCue(n5, n5 + i3.duration, ""), s3.adStartTime = n5 - e9, s3.adEndTime = s3.adStartTime + r6, t3.addCue(s3);
    }
    n5 += i3.duration;
  }
};
var pm = class {
  constructor({ start: e8, end: t3, segmentIndex: i2, partIndex: s3 = null, appended: n5 = false }) {
    this.start_ = e8, this.end_ = t3, this.segmentIndex_ = i2, this.partIndex_ = s3, this.appended_ = n5;
  }
  isInRange(e8) {
    return e8 >= this.start && e8 < this.end;
  }
  markAppended() {
    this.appended_ = true;
  }
  resetAppendedStatus() {
    this.appended_ = false;
  }
  get isAppended() {
    return this.appended_;
  }
  get start() {
    return this.start_;
  }
  get end() {
    return this.end_;
  }
  get segmentIndex() {
    return this.segmentIndex_;
  }
  get partIndex() {
    return this.partIndex_;
  }
};
var mm = class {
  constructor(e8, t3 = []) {
    this.segmentSyncInfo_ = e8, this.partsSyncInfo_ = t3;
  }
  get segmentSyncInfo() {
    return this.segmentSyncInfo_;
  }
  get partsSyncInfo() {
    return this.partsSyncInfo_;
  }
  get hasPartsSyncInfo() {
    return this.partsSyncInfo_.length > 0;
  }
  resetAppendStatus() {
    this.segmentSyncInfo_.resetAppendedStatus(), this.partsSyncInfo_.forEach((e8) => e8.resetAppendedStatus());
  }
};
var gm = class {
  constructor() {
    this.storage_ = /* @__PURE__ */ new Map(), this.diagnostics_ = "", this.isReliable_ = false, this.start_ = -1 / 0, this.end_ = 1 / 0;
  }
  get start() {
    return this.start_;
  }
  get end() {
    return this.end_;
  }
  get diagnostics() {
    return this.diagnostics_;
  }
  get isReliable() {
    return this.isReliable_;
  }
  resetAppendedStatus() {
    this.storage_.forEach((e8) => e8.resetAppendStatus());
  }
  update(e8, t3) {
    const { mediaSequence: i2, segments: s3 } = e8;
    if (this.isReliable_ = this.isReliablePlaylist_(i2, s3), this.isReliable_) return this.updateStorage_(s3, i2, this.calculateBaseTime_(i2, s3, t3));
  }
  getSyncInfoForTime(e8) {
    for (const { segmentSyncInfo: t3, partsSyncInfo: i2 } of this.storage_.values()) if (i2.length) {
      for (const s3 of i2) if (s3.isInRange(e8)) return s3;
    } else if (t3.isInRange(e8)) return t3;
    return null;
  }
  getSyncInfoForMediaSequence(e8) {
    return this.storage_.get(e8);
  }
  updateStorage_(e8, t3, i2) {
    const s3 = /* @__PURE__ */ new Map();
    let n5 = "\n", r5 = i2, a5 = t3;
    this.start_ = r5, e8.forEach((e9, t4) => {
      const i3 = this.storage_.get(a5), o5 = r5, l2 = o5 + e9.duration, u3 = Boolean(i3 && i3.segmentSyncInfo && i3.segmentSyncInfo.isAppended), h2 = new pm({ start: o5, end: l2, appended: u3, segmentIndex: t4 });
      e9.syncInfo = h2;
      let d3 = r5;
      const c3 = (e9.parts || []).map((e10, s4) => {
        const r6 = d3, o6 = d3 + e10.duration, l3 = Boolean(i3 && i3.partsSyncInfo && i3.partsSyncInfo[s4] && i3.partsSyncInfo[s4].isAppended), u4 = new pm({ start: r6, end: o6, appended: l3, segmentIndex: t4, partIndex: s4 });
        return d3 = o6, n5 += `Media Sequence: ${a5}.${s4} | Range: ${r6} --> ${o6} | Appended: ${l3}
`, e10.syncInfo = u4, u4;
      });
      s3.set(a5, new mm(h2, c3)), n5 += `${mp(e9.resolvedUri)} | Media Sequence: ${a5} | Range: ${o5} --> ${l2} | Appended: ${u3}
`, a5++, r5 = l2;
    }), this.end_ = r5, this.storage_ = s3, this.diagnostics_ = n5;
  }
  calculateBaseTime_(e8, t3, i2) {
    if (!this.storage_.size) return 0;
    if (this.storage_.has(e8)) return this.storage_.get(e8).segmentSyncInfo.start;
    const s3 = Math.min(...this.storage_.keys());
    if (e8 < s3) {
      const i3 = s3 - e8;
      let n5 = this.storage_.get(s3).segmentSyncInfo.start;
      for (let e9 = 0; e9 < i3; e9++) {
        n5 -= t3[e9].duration;
      }
      return n5;
    }
    return i2;
  }
  isReliablePlaylist_(e8, t3) {
    return null != e8 && Array.isArray(t3) && t3.length;
  }
};
var fm = class extends gm {
  constructor(e8) {
    super(), this.parent_ = e8;
  }
  calculateBaseTime_(e8, t3, i2) {
    if (!this.storage_.size) {
      const t4 = this.parent_.getSyncInfoForMediaSequence(e8);
      return t4 ? t4.segmentSyncInfo.start : 0;
    }
    return super.calculateBaseTime_(e8, t3, i2);
  }
};
var ym = 86400;
var _m = [{ name: "VOD", run: (e8, t3, i2, s3, n5) => {
  if (i2 !== 1 / 0) {
    return { time: 0, segmentIndex: 0, partIndex: null };
  }
  return null;
} }, { name: "MediaSequence", run: (e8, t3, i2, s3, n5, r5) => {
  const a5 = e8.getMediaSequenceSync(r5);
  if (!a5) return null;
  if (!a5.isReliable) return null;
  const o5 = a5.getSyncInfoForTime(n5);
  return o5 ? { time: o5.start, partIndex: o5.partIndex, segmentIndex: o5.segmentIndex } : null;
} }, { name: "ProgramDateTime", run: (e8, t3, i2, s3, n5) => {
  if (!Object.keys(e8.timelineToDatetimeMappings).length) return null;
  let r5 = null, a5 = null;
  const o5 = Uh(t3);
  n5 = n5 || 0;
  for (let l2 = 0; l2 < o5.length; l2++) {
    const i3 = o5[t3.endList || 0 === n5 ? l2 : o5.length - (l2 + 1)], s4 = i3.segment, u3 = e8.timelineToDatetimeMappings[s4.timeline];
    if (!u3 || !s4.dateTimeObject) continue;
    let h2 = s4.dateTimeObject.getTime() / 1e3 + u3;
    if (s4.parts && "number" == typeof i3.partIndex) for (let e9 = 0; e9 < i3.partIndex; e9++) h2 += s4.parts[e9].duration;
    const d3 = Math.abs(n5 - h2);
    if (null !== a5 && (0 === d3 || a5 < d3)) break;
    a5 = d3, r5 = { time: h2, segmentIndex: i3.segmentIndex, partIndex: i3.partIndex };
  }
  return r5;
} }, { name: "Segment", run: (e8, t3, i2, s3, n5) => {
  let r5 = null, a5 = null;
  n5 = n5 || 0;
  const o5 = Uh(t3);
  for (let l2 = 0; l2 < o5.length; l2++) {
    const e9 = o5[t3.endList || 0 === n5 ? l2 : o5.length - (l2 + 1)], i3 = e9.segment, u3 = e9.part && e9.part.start || i3 && i3.start;
    if (i3.timeline === s3 && void 0 !== u3) {
      const t4 = Math.abs(n5 - u3);
      if (null !== a5 && a5 < t4) break;
      (!r5 || null === a5 || a5 >= t4) && (a5 = t4, r5 = { time: u3, segmentIndex: e9.segmentIndex, partIndex: e9.partIndex });
    }
  }
  return r5;
} }, { name: "Discontinuity", run: (e8, t3, i2, s3, n5) => {
  let r5 = null;
  if (n5 = n5 || 0, t3.discontinuityStarts && t3.discontinuityStarts.length) {
    let i3 = null;
    for (let s4 = 0; s4 < t3.discontinuityStarts.length; s4++) {
      const a5 = t3.discontinuityStarts[s4], o5 = t3.discontinuitySequence + s4 + 1, l2 = e8.discontinuities[o5];
      if (l2) {
        const e9 = Math.abs(n5 - l2.time);
        if (null !== i3 && i3 < e9) break;
        (!r5 || null === i3 || i3 >= e9) && (i3 = e9, r5 = { time: l2.time, segmentIndex: a5, partIndex: null });
      }
    }
  }
  return r5;
} }, { name: "Playlist", run: (e8, t3, i2, s3, n5) => {
  if (t3.syncInfo) {
    return { time: t3.syncInfo.time, segmentIndex: t3.syncInfo.mediaSequence - t3.mediaSequence, partIndex: null };
  }
  return null;
} }];
var bm = class extends dh.EventTarget {
  constructor(e8 = {}) {
    super(), this.timelines = [], this.discontinuities = [], this.timelineToDatetimeMappings = {};
    const t3 = new gm(), i2 = new fm(t3), s3 = new fm(t3);
    this.mediaSequenceStorage_ = { main: t3, audio: i2, vtt: s3 }, this.logger_ = bh("SyncController");
  }
  getMediaSequenceSync(e8) {
    return this.mediaSequenceStorage_[e8] || null;
  }
  getSyncPoint(e8, t3, i2, s3, n5) {
    if (t3 !== 1 / 0) {
      return _m.find(({ name: e9 }) => "VOD" === e9).run(this, e8, t3);
    }
    const r5 = this.runStrategies_(e8, t3, i2, s3, n5);
    if (!r5.length) return null;
    for (const a5 of r5) {
      const { syncPoint: t4, strategy: i3 } = a5, { segmentIndex: n6, time: r6 } = t4;
      if (n6 < 0) continue;
      const o5 = r6, l2 = o5 + e8.segments[n6].duration;
      if (this.logger_(`Strategy: ${i3}. Current time: ${s3}. selected segment: ${n6}. Time: [${o5} -> ${l2}]}`), s3 >= o5 && s3 < l2) return this.logger_("Found sync point with exact match: ", t4), t4;
    }
    return this.selectSyncPoint_(r5, { key: "time", value: s3 });
  }
  getExpiredTime(e8, t3) {
    if (!e8 || !e8.segments) return null;
    const i2 = this.runStrategies_(e8, t3, e8.discontinuitySequence, 0);
    if (!i2.length) return null;
    const s3 = this.selectSyncPoint_(i2, { key: "segmentIndex", value: 0 });
    return s3.segmentIndex > 0 && (s3.time *= -1), Math.abs(s3.time + zh({ defaultDuration: e8.targetDuration, durationList: e8.segments, startIndex: s3.segmentIndex, endIndex: 0 }));
  }
  runStrategies_(e8, t3, i2, s3, n5) {
    const r5 = [];
    for (let a5 = 0; a5 < _m.length; a5++) {
      const o5 = _m[a5], l2 = o5.run(this, e8, t3, i2, s3, n5);
      l2 && (l2.strategy = o5.name, r5.push({ strategy: o5.name, syncPoint: l2 }));
    }
    return r5;
  }
  selectSyncPoint_(e8, t3) {
    let i2 = e8[0].syncPoint, s3 = Math.abs(e8[0].syncPoint[t3.key] - t3.value), n5 = e8[0].strategy;
    for (let r5 = 1; r5 < e8.length; r5++) {
      const a5 = Math.abs(e8[r5].syncPoint[t3.key] - t3.value);
      a5 < s3 && (s3 = a5, i2 = e8[r5].syncPoint, n5 = e8[r5].strategy);
    }
    return this.logger_(`syncPoint for [${t3.key}: ${t3.value}] chosen with strategy [${n5}]: [time:${i2.time}, segmentIndex:${i2.segmentIndex}` + ("number" == typeof i2.partIndex ? `,partIndex:${i2.partIndex}` : "") + "]"), i2;
  }
  saveExpiredSegmentInfo(e8, t3) {
    const i2 = t3.mediaSequence - e8.mediaSequence;
    if (i2 > ym) dh.log.warn(`Not saving expired segment info. Media sequence gap ${i2} is too large.`);
    else for (let s3 = i2 - 1; s3 >= 0; s3--) {
      const i3 = e8.segments[s3];
      if (i3 && void 0 !== i3.start) {
        t3.syncInfo = { mediaSequence: e8.mediaSequence + s3, time: i3.start }, this.logger_(`playlist refresh sync: [time:${t3.syncInfo.time}, mediaSequence: ${t3.syncInfo.mediaSequence}]`), this.trigger("syncinfoupdate");
        break;
      }
    }
  }
  setDateTimeMappingForStart(e8) {
    if (this.timelineToDatetimeMappings = {}, e8.segments && e8.segments.length && e8.segments[0].dateTimeObject) {
      const t3 = e8.segments[0], i2 = t3.dateTimeObject.getTime() / 1e3;
      this.timelineToDatetimeMappings[t3.timeline] = -i2;
    }
  }
  saveSegmentTimingInfo({ segmentInfo: e8, shouldSaveTimelineMapping: t3 }) {
    const i2 = this.calculateSegmentTimeMapping_(e8, e8.timingInfo, t3), s3 = e8.segment;
    i2 && (this.saveDiscontinuitySyncInfo_(e8), e8.playlist.syncInfo || (e8.playlist.syncInfo = { mediaSequence: e8.playlist.mediaSequence + e8.mediaIndex, time: s3.start }));
    const n5 = s3.dateTimeObject;
    s3.discontinuity && t3 && n5 && (this.timelineToDatetimeMappings[s3.timeline] = -n5.getTime() / 1e3);
  }
  timestampOffsetForTimeline(e8) {
    return void 0 === this.timelines[e8] ? null : this.timelines[e8].time;
  }
  mappingForTimeline(e8) {
    return void 0 === this.timelines[e8] ? null : this.timelines[e8].mapping;
  }
  calculateSegmentTimeMapping_(e8, t3, i2) {
    const s3 = e8.segment, n5 = e8.part;
    let r5, a5, o5 = this.timelines[e8.timeline];
    if ("number" == typeof e8.timestampOffset) o5 = { time: e8.startOfSegment, mapping: e8.startOfSegment - t3.start }, i2 && (this.timelines[e8.timeline] = o5, this.trigger("timestampoffset"), this.logger_(`time mapping for timeline ${e8.timeline}: [time: ${o5.time}] [mapping: ${o5.mapping}]`)), r5 = e8.startOfSegment, a5 = t3.end + o5.mapping;
    else {
      if (!o5) return false;
      r5 = t3.start + o5.mapping, a5 = t3.end + o5.mapping;
    }
    return n5 && (n5.start = r5, n5.end = a5), (!s3.start || r5 < s3.start) && (s3.start = r5), s3.end = a5, true;
  }
  saveDiscontinuitySyncInfo_(e8) {
    const t3 = e8.playlist, i2 = e8.segment;
    if (i2.discontinuity) this.discontinuities[i2.timeline] = { time: i2.start, accuracy: 0 };
    else if (t3.discontinuityStarts && t3.discontinuityStarts.length) for (let s3 = 0; s3 < t3.discontinuityStarts.length; s3++) {
      const n5 = t3.discontinuityStarts[s3], r5 = t3.discontinuitySequence + s3 + 1, a5 = n5 - e8.mediaIndex, o5 = Math.abs(a5);
      if (!this.discontinuities[r5] || this.discontinuities[r5].accuracy > o5) {
        let s4;
        s4 = a5 < 0 ? i2.start - zh({ defaultDuration: t3.targetDuration, durationList: t3.segments, startIndex: e8.mediaIndex, endIndex: n5 }) : i2.end + zh({ defaultDuration: t3.targetDuration, durationList: t3.segments, startIndex: e8.mediaIndex + 1, endIndex: n5 }), this.discontinuities[r5] = { time: s4, accuracy: o5 };
      }
    }
  }
  dispose() {
    this.trigger("dispose"), this.off();
  }
};
var vm = class extends dh.EventTarget {
  constructor() {
    super(), this.pendingTimelineChanges_ = {}, this.lastTimelineChanges_ = {};
  }
  clearPendingTimelineChange(e8) {
    this.pendingTimelineChanges_[e8] = null, this.trigger("pendingtimelinechange");
  }
  pendingTimelineChange({ type: e8, from: t3, to: i2 }) {
    return "number" == typeof t3 && "number" == typeof i2 && (this.pendingTimelineChanges_[e8] = { type: e8, from: t3, to: i2 }, this.trigger("pendingtimelinechange")), this.pendingTimelineChanges_[e8];
  }
  lastTimelineChange({ type: e8, from: t3, to: i2 }) {
    if ("number" == typeof t3 && "number" == typeof i2) {
      this.lastTimelineChanges_[e8] = { type: e8, from: t3, to: i2 }, delete this.pendingTimelineChanges_[e8];
      const s3 = { timelineChangeInfo: { from: t3, to: i2 } };
      this.trigger({ type: "timelinechange", metadata: s3 });
    }
    return this.lastTimelineChanges_[e8];
  }
  dispose() {
    this.trigger("dispose"), this.pendingTimelineChanges_ = {}, this.lastTimelineChanges_ = {}, this.off();
  }
};
var Tm = gc(fc(function() {
  var e8 = function() {
    function e9() {
      this.listeners = {};
    }
    var t4 = e9.prototype;
    return t4.on = function(e10, t5) {
      this.listeners[e10] || (this.listeners[e10] = []), this.listeners[e10].push(t5);
    }, t4.off = function(e10, t5) {
      if (!this.listeners[e10]) return false;
      var i3 = this.listeners[e10].indexOf(t5);
      return this.listeners[e10] = this.listeners[e10].slice(0), this.listeners[e10].splice(i3, 1), i3 > -1;
    }, t4.trigger = function(e10) {
      var t5 = this.listeners[e10];
      if (t5) if (2 === arguments.length) for (var i3 = t5.length, s4 = 0; s4 < i3; ++s4) t5[s4].call(this, arguments[1]);
      else for (var n6 = Array.prototype.slice.call(arguments, 1), r6 = t5.length, a6 = 0; a6 < r6; ++a6) t5[a6].apply(this, n6);
    }, t4.dispose = function() {
      this.listeners = {};
    }, t4.pipe = function(e10) {
      this.on("data", function(t5) {
        e10.push(t5);
      });
    }, e9;
  }();
  function t3(e9) {
    return e9.subarray(0, e9.byteLength - e9[e9.byteLength - 1]);
  }
  const i2 = function() {
    const e9 = [[[], [], [], [], []], [[], [], [], [], []]], t4 = e9[0], i3 = e9[1], s4 = t4[4], n6 = i3[4];
    let r6, a6, o6;
    const l3 = [], u4 = [];
    let h3, d4, c4, p3, m5, g5;
    for (r6 = 0; r6 < 256; r6++) u4[(l3[r6] = r6 << 1 ^ 283 * (r6 >> 7)) ^ r6] = r6;
    for (a6 = o6 = 0; !s4[a6]; a6 ^= h3 || 1, o6 = u4[o6] || 1) for (p3 = o6 ^ o6 << 1 ^ o6 << 2 ^ o6 << 3 ^ o6 << 4, p3 = p3 >> 8 ^ 255 & p3 ^ 99, s4[a6] = p3, n6[p3] = a6, c4 = l3[d4 = l3[h3 = l3[a6]]], g5 = 16843009 * c4 ^ 65537 * d4 ^ 257 * h3 ^ 16843008 * a6, m5 = 257 * l3[p3] ^ 16843008 * p3, r6 = 0; r6 < 4; r6++) t4[r6][a6] = m5 = m5 << 24 ^ m5 >>> 8, i3[r6][p3] = g5 = g5 << 24 ^ g5 >>> 8;
    for (r6 = 0; r6 < 5; r6++) t4[r6] = t4[r6].slice(0), i3[r6] = i3[r6].slice(0);
    return e9;
  };
  let s3 = null;
  class n5 {
    constructor(e9) {
      let t4, n6, r6;
      s3 || (s3 = i2()), this._tables = [[s3[0][0].slice(), s3[0][1].slice(), s3[0][2].slice(), s3[0][3].slice(), s3[0][4].slice()], [s3[1][0].slice(), s3[1][1].slice(), s3[1][2].slice(), s3[1][3].slice(), s3[1][4].slice()]];
      const a6 = this._tables[0][4], o6 = this._tables[1], l3 = e9.length;
      let u4 = 1;
      if (4 !== l3 && 6 !== l3 && 8 !== l3) throw new Error("Invalid aes key size");
      const h3 = e9.slice(0), d4 = [];
      for (this._key = [h3, d4], t4 = l3; t4 < 4 * l3 + 28; t4++) r6 = h3[t4 - 1], (t4 % l3 == 0 || 8 === l3 && t4 % l3 == 4) && (r6 = a6[r6 >>> 24] << 24 ^ a6[r6 >> 16 & 255] << 16 ^ a6[r6 >> 8 & 255] << 8 ^ a6[255 & r6], t4 % l3 == 0 && (r6 = r6 << 8 ^ r6 >>> 24 ^ u4 << 24, u4 = u4 << 1 ^ 283 * (u4 >> 7))), h3[t4] = h3[t4 - l3] ^ r6;
      for (n6 = 0; t4; n6++, t4--) r6 = h3[3 & n6 ? t4 : t4 - 4], d4[n6] = t4 <= 4 || n6 < 4 ? r6 : o6[0][a6[r6 >>> 24]] ^ o6[1][a6[r6 >> 16 & 255]] ^ o6[2][a6[r6 >> 8 & 255]] ^ o6[3][a6[255 & r6]];
    }
    decrypt(e9, t4, i3, s4, n6, r6) {
      const a6 = this._key[1];
      let o6, l3, u4, h3 = e9 ^ a6[0], d4 = s4 ^ a6[1], c4 = i3 ^ a6[2], p3 = t4 ^ a6[3];
      const m5 = a6.length / 4 - 2;
      let g5, f3 = 4;
      const y4 = this._tables[1], _2 = y4[0], b2 = y4[1], v4 = y4[2], T2 = y4[3], S4 = y4[4];
      for (g5 = 0; g5 < m5; g5++) o6 = _2[h3 >>> 24] ^ b2[d4 >> 16 & 255] ^ v4[c4 >> 8 & 255] ^ T2[255 & p3] ^ a6[f3], l3 = _2[d4 >>> 24] ^ b2[c4 >> 16 & 255] ^ v4[p3 >> 8 & 255] ^ T2[255 & h3] ^ a6[f3 + 1], u4 = _2[c4 >>> 24] ^ b2[p3 >> 16 & 255] ^ v4[h3 >> 8 & 255] ^ T2[255 & d4] ^ a6[f3 + 2], p3 = _2[p3 >>> 24] ^ b2[h3 >> 16 & 255] ^ v4[d4 >> 8 & 255] ^ T2[255 & c4] ^ a6[f3 + 3], f3 += 4, h3 = o6, d4 = l3, c4 = u4;
      for (g5 = 0; g5 < 4; g5++) n6[(3 & -g5) + r6] = S4[h3 >>> 24] << 24 ^ S4[d4 >> 16 & 255] << 16 ^ S4[c4 >> 8 & 255] << 8 ^ S4[255 & p3] ^ a6[f3++], o6 = h3, h3 = d4, d4 = c4, c4 = p3, p3 = o6;
    }
  }
  class r5 extends e8 {
    constructor() {
      super(e8), this.jobs = [], this.delay = 1, this.timeout_ = null;
    }
    processJob_() {
      this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null;
    }
    push(e9) {
      this.jobs.push(e9), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay));
    }
  }
  const a5 = function(e9) {
    return e9 << 24 | (65280 & e9) << 8 | (16711680 & e9) >> 8 | e9 >>> 24;
  }, o5 = function(e9, t4, i3) {
    const s4 = new Int32Array(e9.buffer, e9.byteOffset, e9.byteLength >> 2), r6 = new n5(Array.prototype.slice.call(t4)), o6 = new Uint8Array(e9.byteLength), l3 = new Int32Array(o6.buffer);
    let u4, h3, d4, c4, p3, m5, g5, f3, y4;
    for (u4 = i3[0], h3 = i3[1], d4 = i3[2], c4 = i3[3], y4 = 0; y4 < s4.length; y4 += 4) p3 = a5(s4[y4]), m5 = a5(s4[y4 + 1]), g5 = a5(s4[y4 + 2]), f3 = a5(s4[y4 + 3]), r6.decrypt(p3, m5, g5, f3, l3, y4), l3[y4] = a5(l3[y4] ^ u4), l3[y4 + 1] = a5(l3[y4 + 1] ^ h3), l3[y4 + 2] = a5(l3[y4 + 2] ^ d4), l3[y4 + 3] = a5(l3[y4 + 3] ^ c4), u4 = p3, h3 = m5, d4 = g5, c4 = f3;
    return o6;
  };
  class l2 {
    constructor(e9, i3, s4, n6) {
      const o6 = l2.STEP, u4 = new Int32Array(e9.buffer), h3 = new Uint8Array(e9.byteLength);
      let d4 = 0;
      for (this.asyncStream_ = new r5(), this.asyncStream_.push(this.decryptChunk_(u4.subarray(d4, d4 + o6), i3, s4, h3)), d4 = o6; d4 < u4.length; d4 += o6) s4 = new Uint32Array([a5(u4[d4 - 4]), a5(u4[d4 - 3]), a5(u4[d4 - 2]), a5(u4[d4 - 1])]), this.asyncStream_.push(this.decryptChunk_(u4.subarray(d4, d4 + o6), i3, s4, h3));
      this.asyncStream_.push(function() {
        n6(null, t3(h3));
      });
    }
    static get STEP() {
      return 32e3;
    }
    decryptChunk_(e9, t4, i3, s4) {
      return function() {
        const n6 = o5(e9, t4, i3);
        s4.set(n6, e9.byteOffset);
      };
    }
  }
  var u3, h2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  u3 = "undefined" != typeof window ? window : void 0 !== h2 ? h2 : "undefined" != typeof self ? self : {};
  var d3 = function(e9) {
    return "function" === ArrayBuffer.isView ? ArrayBuffer.isView(e9) : e9 && e9.buffer instanceof ArrayBuffer;
  }, c3 = u3.BigInt || Number;
  c3("0x1"), c3("0x100"), c3("0x10000"), c3("0x1000000"), c3("0x100000000"), c3("0x10000000000"), c3("0x1000000000000"), c3("0x100000000000000"), c3("0x10000000000000000"), function() {
    var e9 = new Uint16Array([65484]), t4 = new Uint8Array(e9.buffer, e9.byteOffset, e9.byteLength);
    255 === t4[0] || t4[0];
  }();
  const p2 = function(e9) {
    const t4 = {};
    return Object.keys(e9).forEach((i3) => {
      const s4 = e9[i3];
      d3(s4) ? t4[i3] = { bytes: s4.buffer, byteOffset: s4.byteOffset, byteLength: s4.byteLength } : t4[i3] = s4;
    }), t4;
  };
  self.onmessage = function(e9) {
    const t4 = e9.data, i3 = new Uint8Array(t4.encrypted.bytes, t4.encrypted.byteOffset, t4.encrypted.byteLength), s4 = new Uint32Array(t4.key.bytes, t4.key.byteOffset, t4.key.byteLength / 4), n6 = new Uint32Array(t4.iv.bytes, t4.iv.byteOffset, t4.iv.byteLength / 4);
    new l2(i3, s4, n6, function(e10, i4) {
      self.postMessage(p2({ source: t4.source, decrypted: i4 }), [i4.buffer]);
    });
  };
}));
var Sm = mc(Tm);
var Em = (e8) => {
  let t3 = e8.default ? "main" : "alternative";
  return e8.characteristics && e8.characteristics.indexOf("public.accessibility.describes-video") >= 0 && (t3 = "main-desc"), t3;
};
var wm = (e8, t3) => {
  e8.abort(), e8.pause(), t3 && t3.activePlaylistLoader && (t3.activePlaylistLoader.pause(), t3.activePlaylistLoader = null);
};
var Cm = (e8, t3) => {
  t3.activePlaylistLoader = e8, e8.load();
};
var km = (e8, t3) => () => {
  const { segmentLoaders: { [e8]: i2, main: s3 }, mediaTypes: { [e8]: n5 } } = t3, r5 = n5.activeTrack(), a5 = n5.getActiveGroup(), o5 = n5.activePlaylistLoader, l2 = n5.lastGroup_;
  a5 && l2 && a5.id === l2.id || (n5.lastGroup_ = a5, n5.lastTrack_ = r5, wm(i2, n5), a5 && !a5.isMainPlaylist && (a5.playlistLoader ? (i2.resyncLoader(), Cm(a5.playlistLoader, n5)) : o5 && s3.resetEverything()));
};
var Im = (e8, t3) => () => {
  const { segmentLoaders: { [e8]: i2 }, mediaTypes: { [e8]: s3 } } = t3;
  s3.lastGroup_ = null, i2.abort(), i2.pause();
};
var xm = (e8, t3) => () => {
  const { mainPlaylistLoader: i2, segmentLoaders: { [e8]: s3, main: n5 }, mediaTypes: { [e8]: r5 } } = t3, a5 = r5.activeTrack(), o5 = r5.getActiveGroup(), l2 = r5.activePlaylistLoader, u3 = r5.lastTrack_;
  if ((!u3 || !a5 || u3.id !== a5.id) && (r5.lastGroup_ = o5, r5.lastTrack_ = a5, wm(s3, r5), o5)) {
    if (o5.isMainPlaylist) {
      if (!a5 || !u3 || a5.id === u3.id) return;
      const e9 = t3.vhs.playlistController_, s4 = e9.selectPlaylist();
      if (e9.media() === s4) return;
      return r5.logger_(`track change. Switching main audio from ${u3.id} to ${a5.id}`), i2.pause(), n5.resetEverything(), void e9.fastQualityChange_(s4);
    }
    if ("AUDIO" === e8) {
      if (!o5.playlistLoader) return n5.setAudio(true), void n5.resetEverything();
      s3.setAudio(true), n5.setAudio(false);
    }
    l2 !== o5.playlistLoader ? (s3.track && s3.track(a5), s3.resetEverything(), Cm(o5.playlistLoader, r5)) : Cm(o5.playlistLoader, r5);
  }
};
var Am = { AUDIO: (e8, t3) => () => {
  const { mediaTypes: { [e8]: i2 }, excludePlaylist: s3 } = t3, n5 = i2.activeTrack(), r5 = i2.activeGroup(), a5 = (r5.filter((e9) => e9.default)[0] || r5[0]).id, o5 = i2.tracks[a5];
  if (n5 !== o5) {
    dh.log.warn("Problem encountered loading the alternate audio track.Switching back to default.");
    for (const e9 in i2.tracks) i2.tracks[e9].enabled = i2.tracks[e9] === o5;
    i2.onTrackChanged();
  } else s3({ error: { message: "Problem encountered loading the default audio track." } });
}, SUBTITLES: (e8, t3) => () => {
  const { mediaTypes: { [e8]: i2 } } = t3;
  dh.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track.");
  const s3 = i2.activeTrack();
  s3 && (s3.mode = "disabled"), i2.onTrackChanged();
} };
var Dm = { AUDIO: (e8, t3, i2) => {
  if (!t3) return;
  const { tech: s3, requestOptions: n5, segmentLoaders: { [e8]: r5 } } = i2;
  t3.on("loadedmetadata", () => {
    const e9 = t3.media();
    r5.playlist(e9, n5), (!s3.paused() || e9.endList && "none" !== s3.preload()) && r5.load();
  }), t3.on("loadedplaylist", () => {
    r5.playlist(t3.media(), n5), s3.paused() || r5.load();
  }), t3.on("error", Am[e8](e8, i2));
}, SUBTITLES: (e8, t3, i2) => {
  const { tech: s3, requestOptions: n5, segmentLoaders: { [e8]: r5 }, mediaTypes: { [e8]: a5 } } = i2;
  t3.on("loadedmetadata", () => {
    const e9 = t3.media();
    r5.playlist(e9, n5), r5.track(a5.activeTrack()), (!s3.paused() || e9.endList && "none" !== s3.preload()) && r5.load();
  }), t3.on("loadedplaylist", () => {
    r5.playlist(t3.media(), n5), s3.paused() || r5.load();
  }), t3.on("error", Am[e8](e8, i2));
} };
var Pm = { AUDIO: (e8, t3) => {
  const { vhs: i2, sourceType: s3, segmentLoaders: { [e8]: n5 }, requestOptions: r5, main: { mediaGroups: a5 }, mediaTypes: { [e8]: { groups: o5, tracks: l2, logger_: u3 } }, mainPlaylistLoader: h2 } = t3, d3 = td(h2.main);
  a5[e8] && 0 !== Object.keys(a5[e8]).length || (a5[e8] = { main: { default: { default: true } } }, d3 && (a5[e8].main.default.playlists = h2.main.playlists));
  for (const c3 in a5[e8]) {
    o5[c3] || (o5[c3] = []);
    for (const n6 in a5[e8][c3]) {
      let p2, m5 = a5[e8][c3][n6];
      if (d3 ? (u3(`AUDIO group '${c3}' label '${n6}' is a main playlist`), m5.isMainPlaylist = true, p2 = null) : p2 = "vhs-json" === s3 && m5.playlists ? new kd(m5.playlists[0], i2, r5) : m5.resolvedUri ? new kd(m5.resolvedUri, i2, r5) : m5.playlists && "dash" === s3 ? new uc(m5.playlists[0], i2, r5, h2) : null, m5 = vh({ id: n6, playlistLoader: p2 }, m5), Dm[e8](e8, m5.playlistLoader, t3), o5[c3].push(m5), void 0 === l2[n6]) {
        const e9 = new dh.AudioTrack({ id: n6, kind: Em(m5), enabled: false, language: m5.language, default: m5.default, label: n6 });
        l2[n6] = e9;
      }
    }
  }
  n5.on("error", Am[e8](e8, t3));
}, SUBTITLES: (e8, t3) => {
  const { tech: i2, vhs: s3, sourceType: n5, segmentLoaders: { [e8]: r5 }, requestOptions: a5, main: { mediaGroups: o5 }, mediaTypes: { [e8]: { groups: l2, tracks: u3 } }, mainPlaylistLoader: h2 } = t3;
  for (const d3 in o5[e8]) {
    l2[d3] || (l2[d3] = []);
    for (const r6 in o5[e8][d3]) {
      if (!s3.options_.useForcedSubtitles && o5[e8][d3][r6].forced) continue;
      let c3, p2 = o5[e8][d3][r6];
      if ("hls" === n5) c3 = new kd(p2.resolvedUri, s3, a5);
      else if ("dash" === n5) {
        if (!p2.playlists.filter((e9) => e9.excludeUntil !== 1 / 0).length) return;
        c3 = new uc(p2.playlists[0], s3, a5, h2);
      } else "vhs-json" === n5 && (c3 = new kd(p2.playlists ? p2.playlists[0] : p2.resolvedUri, s3, a5));
      if (p2 = vh({ id: r6, playlistLoader: c3 }, p2), Dm[e8](e8, p2.playlistLoader, t3), l2[d3].push(p2), void 0 === u3[r6]) {
        const e9 = i2.addRemoteTextTrack({ id: r6, kind: "subtitles", default: p2.default && p2.autoselect, language: p2.language, label: r6 }, false).track;
        u3[r6] = e9;
      }
    }
  }
  r5.on("error", Am[e8](e8, t3));
}, "CLOSED-CAPTIONS": (e8, t3) => {
  const { tech: i2, main: { mediaGroups: s3 }, mediaTypes: { [e8]: { groups: n5, tracks: r5 } } } = t3;
  for (const a5 in s3[e8]) {
    n5[a5] || (n5[a5] = []);
    for (const t4 in s3[e8][a5]) {
      const o5 = s3[e8][a5][t4];
      if (!/^(?:CC|SERVICE)/.test(o5.instreamId)) continue;
      const l2 = i2.options_.vhs && i2.options_.vhs.captionServices || {};
      let u3 = { label: t4, language: o5.language, instreamId: o5.instreamId, default: o5.default && o5.autoselect };
      if (l2[u3.instreamId] && (u3 = vh(u3, l2[u3.instreamId])), void 0 === u3.default && delete u3.default, n5[a5].push(vh({ id: t4 }, o5)), void 0 === r5[t4]) {
        const e9 = i2.addRemoteTextTrack({ id: u3.instreamId, kind: "captions", default: u3.default, language: u3.language, label: u3.label }, false).track;
        r5[t4] = e9;
      }
    }
  }
} };
var Lm = (e8, t3) => {
  for (let i2 = 0; i2 < e8.length; i2++) {
    if (Zh(t3, e8[i2])) return true;
    if (e8[i2].playlists && Lm(e8[i2].playlists, t3)) return true;
  }
  return false;
};
var Om = (e8, t3) => (i2) => {
  const { mainPlaylistLoader: s3, mediaTypes: { [e8]: { groups: n5 } } } = t3, r5 = s3.media();
  if (!r5) return null;
  let a5 = null;
  r5.attributes[e8] && (a5 = n5[r5.attributes[e8]]);
  const o5 = Object.keys(n5);
  if (!a5) if ("AUDIO" === e8 && o5.length > 1 && td(t3.main)) for (let e9 = 0; e9 < o5.length; e9++) {
    const t4 = n5[o5[e9]];
    if (Lm(t4, r5)) {
      a5 = t4;
      break;
    }
  }
  else n5.main ? a5 = n5.main : 1 === o5.length && (a5 = n5[o5[0]]);
  return void 0 === i2 ? a5 : null !== i2 && a5 && a5.filter((e9) => e9.id === i2.id)[0] || null;
};
var Nm = { AUDIO: (e8, t3) => () => {
  const { mediaTypes: { [e8]: { tracks: i2 } } } = t3;
  for (const e9 in i2) if (i2[e9].enabled) return i2[e9];
  return null;
}, SUBTITLES: (e8, t3) => () => {
  const { mediaTypes: { [e8]: { tracks: i2 } } } = t3;
  for (const e9 in i2) if ("showing" === i2[e9].mode || "hidden" === i2[e9].mode) return i2[e9];
  return null;
} };
var Rm = (e8, { mediaTypes: t3 }) => () => {
  const i2 = t3[e8].activeTrack();
  return i2 ? t3[e8].activeGroup(i2) : null;
};
var Mm = (e8) => {
  ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((t4) => {
    Pm[t4](t4, e8);
  });
  const { mediaTypes: t3, mainPlaylistLoader: i2, tech: s3, vhs: n5, segmentLoaders: { AUDIO: r5, main: a5 } } = e8;
  ["AUDIO", "SUBTITLES"].forEach((i3) => {
    t3[i3].activeGroup = Om(i3, e8), t3[i3].activeTrack = Nm[i3](i3, e8), t3[i3].onGroupChanged = km(i3, e8), t3[i3].onGroupChanging = Im(i3, e8), t3[i3].onTrackChanged = xm(i3, e8), t3[i3].getActiveGroup = Rm(i3, e8);
  });
  const o5 = t3.AUDIO.activeGroup();
  if (o5) {
    const e9 = (o5.filter((e10) => e10.default)[0] || o5[0]).id;
    t3.AUDIO.tracks[e9].enabled = true, t3.AUDIO.onGroupChanged(), t3.AUDIO.onTrackChanged();
    t3.AUDIO.getActiveGroup().playlistLoader ? (a5.setAudio(false), r5.setAudio(true)) : a5.setAudio(true);
  }
  i2.on("mediachange", () => {
    ["AUDIO", "SUBTITLES"].forEach((e9) => t3[e9].onGroupChanged());
  }), i2.on("mediachanging", () => {
    ["AUDIO", "SUBTITLES"].forEach((e9) => t3[e9].onGroupChanging());
  });
  const l2 = () => {
    t3.AUDIO.onTrackChanged(), s3.trigger({ type: "usage", name: "vhs-audio-change" });
  };
  s3.audioTracks().addEventListener("change", l2), s3.remoteTextTracks().addEventListener("change", t3.SUBTITLES.onTrackChanged), n5.on("dispose", () => {
    s3.audioTracks().removeEventListener("change", l2), s3.remoteTextTracks().removeEventListener("change", t3.SUBTITLES.onTrackChanged);
  }), s3.clearTracks("audio");
  for (const u3 in t3.AUDIO.tracks) s3.audioTracks().addTrack(t3.AUDIO.tracks[u3]);
};
var Um = () => {
  const e8 = {};
  return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((t3) => {
    e8[t3] = { groups: {}, tracks: {}, activePlaylistLoader: null, activeGroup: Xp, activeTrack: Xp, getActiveGroup: Xp, onGroupChanged: Xp, onTrackChanged: Xp, lastTrack_: null, logger_: bh(`MediaGroups[${t3}]`) };
  }), e8;
};
var Bm = class {
  constructor() {
    this.priority_ = [], this.pathwayClones_ = /* @__PURE__ */ new Map();
  }
  set version(e8) {
    1 === e8 && (this.version_ = e8);
  }
  set ttl(e8) {
    this.ttl_ = e8 || 300;
  }
  set reloadUri(e8) {
    e8 && (this.reloadUri_ = yh(this.reloadUri_, e8));
  }
  set priority(e8) {
    e8 && e8.length && (this.priority_ = e8);
  }
  set pathwayClones(e8) {
    e8 && e8.length && (this.pathwayClones_ = new Map(e8.map((e9) => [e9.ID, e9])));
  }
  get version() {
    return this.version_;
  }
  get ttl() {
    return this.ttl_;
  }
  get reloadUri() {
    return this.reloadUri_;
  }
  get priority() {
    return this.priority_;
  }
  get pathwayClones() {
    return this.pathwayClones_;
  }
};
var Fm = class extends dh.EventTarget {
  constructor(e8, t3) {
    super(), this.currentPathway = null, this.defaultPathway = null, this.queryBeforeStart = false, this.availablePathways_ = /* @__PURE__ */ new Set(), this.steeringManifest = new Bm(), this.proxyServerUrl_ = null, this.manifestType_ = null, this.ttlTimeout_ = null, this.request_ = null, this.currentPathwayClones = /* @__PURE__ */ new Map(), this.nextPathwayClones = /* @__PURE__ */ new Map(), this.excludedSteeringManifestURLs = /* @__PURE__ */ new Set(), this.logger_ = bh("Content Steering"), this.xhr_ = e8, this.getBandwidth_ = t3;
  }
  assignTagProperties(e8, t3) {
    this.manifestType_ = t3.serverUri ? "HLS" : "DASH";
    const i2 = t3.serverUri || t3.serverURL;
    if (!i2) return this.logger_(`steering manifest URL is ${i2}, cannot request steering manifest.`), void this.trigger("error");
    i2.startsWith("data:") ? this.decodeDataUriManifest_(i2.substring(i2.indexOf(",") + 1)) : (this.steeringManifest.reloadUri = yh(e8, i2), this.defaultPathway = t3.pathwayId || t3.defaultServiceLocation, this.queryBeforeStart = t3.queryBeforeStart, this.proxyServerUrl_ = t3.proxyServerURL, this.defaultPathway && !this.queryBeforeStart && this.trigger("content-steering"));
  }
  requestSteeringManifest(e8) {
    const t3 = this.steeringManifest.reloadUri;
    if (!t3) return;
    const i2 = e8 ? t3 : this.getRequestURI(t3);
    if (!i2) return this.logger_("No valid content steering manifest URIs. Stopping content steering."), this.trigger("error"), void this.dispose();
    const s3 = { contentSteeringInfo: { uri: i2 } };
    this.trigger({ type: "contentsteeringloadstart", metadata: s3 }), this.request_ = this.xhr_({ uri: i2, requestType: "content-steering-manifest" }, (e9, t4) => {
      if (e9) {
        if (410 === t4.status) return this.logger_(`manifest request 410 ${e9}.`), this.logger_(`There will be no more content steering requests to ${i2} this session.`), void this.excludedSteeringManifestURLs.add(i2);
        if (429 === t4.status) {
          const i3 = t4.responseHeaders["retry-after"];
          return this.logger_(`manifest request 429 ${e9}.`), this.logger_(`content steering will retry in ${i3} seconds.`), void this.startTTLTimeout_(parseInt(i3, 10));
        }
        return this.logger_(`manifest failed to load ${e9}.`), void this.startTTLTimeout_();
      }
      let n5;
      this.trigger({ type: "contentsteeringloadcomplete", metadata: s3 });
      try {
        n5 = JSON.parse(this.request_.responseText);
      } catch (a5) {
        const e10 = { errorType: dh.Error.StreamingContentSteeringParserError, error: a5 };
        this.trigger({ type: "error", metadata: e10 });
      }
      this.assignSteeringProperties_(n5);
      const r5 = { contentSteeringInfo: s3.contentSteeringInfo, contentSteeringManifest: { version: this.steeringManifest.version, reloadUri: this.steeringManifest.reloadUri, priority: this.steeringManifest.priority } };
      this.trigger({ type: "contentsteeringparsed", metadata: r5 }), this.startTTLTimeout_();
    });
  }
  setProxyServerUrl_(e8) {
    const t3 = new _.URL(e8), i2 = new _.URL(this.proxyServerUrl_);
    return i2.searchParams.set("url", encodeURI(t3.toString())), this.setSteeringParams_(i2.toString());
  }
  decodeDataUriManifest_(e8) {
    const t3 = JSON.parse(_.atob(e8));
    this.assignSteeringProperties_(t3);
  }
  setSteeringParams_(e8) {
    const t3 = new _.URL(e8), i2 = this.getPathway(), s3 = this.getBandwidth_();
    if (i2) {
      const e9 = `_${this.manifestType_}_pathway`;
      t3.searchParams.set(e9, i2);
    }
    if (s3) {
      const e9 = `_${this.manifestType_}_throughput`;
      t3.searchParams.set(e9, s3);
    }
    return t3.toString();
  }
  assignSteeringProperties_(e8) {
    if (this.steeringManifest.version = e8.VERSION, !this.steeringManifest.version) return this.logger_(`manifest version is ${e8.VERSION}, which is not supported.`), void this.trigger("error");
    this.steeringManifest.ttl = e8.TTL, this.steeringManifest.reloadUri = e8["RELOAD-URI"], this.steeringManifest.priority = e8["PATHWAY-PRIORITY"] || e8["SERVICE-LOCATION-PRIORITY"], this.steeringManifest.pathwayClones = e8["PATHWAY-CLONES"], this.nextPathwayClones = this.steeringManifest.pathwayClones, this.availablePathways_.size || (this.logger_("There are no available pathways for content steering. Ending content steering."), this.trigger("error"), this.dispose());
    const t3 = ((e9) => {
      for (const t4 of e9) if (this.availablePathways_.has(t4)) return t4;
      return [...this.availablePathways_][0];
    })(this.steeringManifest.priority);
    this.currentPathway !== t3 && (this.currentPathway = t3, this.trigger("content-steering"));
  }
  getPathway() {
    return this.currentPathway || this.defaultPathway;
  }
  getRequestURI(e8) {
    if (!e8) return null;
    const t3 = (e9) => this.excludedSteeringManifestURLs.has(e9);
    if (this.proxyServerUrl_) {
      const i3 = this.setProxyServerUrl_(e8);
      if (!t3(i3)) return i3;
    }
    const i2 = this.setSteeringParams_(e8);
    return t3(i2) ? null : i2;
  }
  startTTLTimeout_(e8 = this.steeringManifest.ttl) {
    const t3 = 1e3 * e8;
    this.ttlTimeout_ = _.setTimeout(() => {
      this.requestSteeringManifest();
    }, t3);
  }
  clearTTLTimeout_() {
    _.clearTimeout(this.ttlTimeout_), this.ttlTimeout_ = null;
  }
  abort() {
    this.request_ && this.request_.abort(), this.request_ = null;
  }
  dispose() {
    this.off("content-steering"), this.off("error"), this.abort(), this.clearTTLTimeout_(), this.currentPathway = null, this.defaultPathway = null, this.queryBeforeStart = null, this.proxyServerUrl_ = null, this.manifestType_ = null, this.ttlTimeout_ = null, this.request_ = null, this.excludedSteeringManifestURLs = /* @__PURE__ */ new Set(), this.availablePathways_ = /* @__PURE__ */ new Set(), this.steeringManifest = new Bm();
  }
  addAvailablePathway(e8) {
    e8 && this.availablePathways_.add(e8);
  }
  clearAvailablePathways() {
    this.availablePathways_.clear();
  }
  excludePathway(e8) {
    return this.availablePathways_.delete(e8);
  }
  didDASHTagChange(e8, t3) {
    return !t3 && this.steeringManifest.reloadUri || t3 && (yh(e8, t3.serverURL) !== this.steeringManifest.reloadUri || t3.defaultServiceLocation !== this.defaultPathway || t3.queryBeforeStart !== this.queryBeforeStart || t3.proxyServerURL !== this.proxyServerUrl_);
  }
  getAvailablePathways() {
    return this.availablePathways_;
  }
};
var qm = (e8, t3) => {
  let i2 = null;
  return (...s3) => {
    clearTimeout(i2), i2 = setTimeout(() => {
      e8.apply(null, s3);
    }, t3);
  };
};
var jm = 10;
var $m;
var Hm = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred", "mediaAppends"];
var Vm = function(e8) {
  return this.audioSegmentLoader_[e8] + this.mainSegmentLoader_[e8];
};
var zm = function({ currentPlaylist: e8, buffered: t3, currentTime: i2, nextPlaylist: s3, bufferLowWaterLine: n5, bufferHighWaterLine: r5, duration: a5, bufferBasedABR: o5, log: l2 }) {
  if (!s3) return dh.log.warn("We received no playlist to switch to. Please check your stream."), false;
  const u3 = `allowing switch ${e8 && e8.id || "null"} -> ${s3.id}`;
  if (!e8) return l2(`${u3} as current playlist is not set`), true;
  if (s3.id === e8.id) return false;
  const h2 = Boolean(kh(t3, i2).length);
  if (!e8.endList) return h2 || "number" != typeof e8.partTargetDuration ? (l2(`${u3} as current playlist is live`), true) : (l2(`not ${u3} as current playlist is live llhls, but currentTime isn't in buffered.`), false);
  const d3 = Rh(t3, i2), c3 = o5 ? hc.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE : hc.MAX_BUFFER_LOW_WATER_LINE;
  if (a5 < c3) return l2(`${u3} as duration < max low water line (${a5} < ${c3})`), true;
  const p2 = s3.attributes.BANDWIDTH, m5 = e8.attributes.BANDWIDTH;
  if (p2 < m5 && (!o5 || d3 < r5)) {
    let e9 = `${u3} as next bandwidth < current bandwidth (${p2} < ${m5})`;
    return o5 && (e9 += ` and forwardBuffer < bufferHighWaterLine (${d3} < ${r5})`), l2(e9), true;
  }
  if ((!o5 || p2 > m5) && d3 >= n5) {
    let e9 = `${u3} as forwardBuffer >= bufferLowWaterLine (${d3} >= ${n5})`;
    return o5 && (e9 += ` and next bandwidth > current bandwidth (${p2} > ${m5})`), l2(e9), true;
  }
  return l2(`not ${u3} as no switching criteria met`), false;
};
var Wm = class extends dh.EventTarget {
  constructor(e8) {
    super(), this.fastQualityChange_ = qm(this.fastQualityChange_.bind(this), 100);
    const { src: t3, withCredentials: i2, tech: s3, bandwidth: n5, externVhs: r5, useCueTags: a5, playlistExclusionDuration: o5, enableLowInitialPlaylist: l2, sourceType: u3, cacheEncryptionKeys: h2, bufferBasedABR: d3, leastPixelDiffSelector: c3, captionServices: p2, experimentalUseMMS: m5 } = e8;
    if (!t3) throw new Error("A non-empty playlist URL or JSON manifest string is required");
    let { maxPlaylistRetries: g5 } = e8;
    null == g5 && (g5 = 1 / 0), $m = r5, this.bufferBasedABR = Boolean(d3), this.leastPixelDiffSelector = Boolean(c3), this.withCredentials = i2, this.tech_ = s3, this.vhs_ = s3.vhs, this.player_ = e8.player_, this.sourceType_ = u3, this.useCueTags_ = a5, this.playlistExclusionDuration = o5, this.maxPlaylistRetries = g5, this.enableLowInitialPlaylist = l2, this.usingManagedMediaSource_ = false, this.useCueTags_ && (this.cueTagsTrack_ = this.tech_.addTextTrack("metadata", "ad-cues"), this.cueTagsTrack_.inBandMetadataTrackDispatchType = ""), this.requestOptions_ = { withCredentials: i2, maxPlaylistRetries: g5, timeout: null }, this.on("error", this.pauseLoading), this.mediaTypes_ = Um(), m5 && _.ManagedMediaSource ? (this.tech_.el_.disableRemotePlayback = true, this.mediaSource = new _.ManagedMediaSource(), this.usingManagedMediaSource_ = true, dh.log("Using ManagedMediaSource")) : _.MediaSource && (this.mediaSource = new _.MediaSource()), this.handleDurationChange_ = this.handleDurationChange_.bind(this), this.handleSourceOpen_ = this.handleSourceOpen_.bind(this), this.handleSourceEnded_ = this.handleSourceEnded_.bind(this), this.load = this.load.bind(this), this.pause = this.pause.bind(this), this.mediaSource.addEventListener("durationchange", this.handleDurationChange_), this.mediaSource.addEventListener("sourceopen", this.handleSourceOpen_), this.mediaSource.addEventListener("sourceended", this.handleSourceEnded_), this.mediaSource.addEventListener("startstreaming", this.load), this.mediaSource.addEventListener("endstreaming", this.pause), this.seekable_ = Th(), this.hasPlayed_ = false, this.syncController_ = new bm(e8), this.segmentMetadataTrack_ = s3.addRemoteTextTrack({ kind: "metadata", label: "segment-metadata" }, false).track, this.decrypter_ = new Sm(), this.sourceUpdater_ = new rm(this.mediaSource), this.inbandTextTracks_ = {}, this.timelineChangeController_ = new vm(), this.keyStatusMap_ = /* @__PURE__ */ new Map();
    const f3 = { vhs: this.vhs_, parse708captions: e8.parse708captions, useDtsForTimestampOffset: e8.useDtsForTimestampOffset, captionServices: p2, mediaSource: this.mediaSource, currentTime: this.tech_.currentTime.bind(this.tech_), seekable: () => this.seekable(), seeking: () => this.tech_.seeking(), duration: () => this.duration(), hasPlayed: () => this.hasPlayed_, goalBufferLength: () => this.goalBufferLength(), bandwidth: n5, syncController: this.syncController_, decrypter: this.decrypter_, sourceType: this.sourceType_, inbandTextTracks: this.inbandTextTracks_, cacheEncryptionKeys: h2, sourceUpdater: this.sourceUpdater_, timelineChangeController: this.timelineChangeController_, exactManifestTimings: e8.exactManifestTimings, addMetadataToTextTrack: this.addMetadataToTextTrack.bind(this) };
    this.mainPlaylistLoader_ = "dash" === this.sourceType_ ? new uc(t3, this.vhs_, vh(this.requestOptions_, { addMetadataToTextTrack: this.addMetadataToTextTrack.bind(this) })) : new kd(t3, this.vhs_, vh(this.requestOptions_, { addDateRangesToTextTrack: this.addDateRangesToTextTrack_.bind(this) })), this.setupMainPlaylistLoaderListeners_(), this.mainSegmentLoader_ = new Gp(vh(f3, { segmentMetadataTrack: this.segmentMetadataTrack_, loaderType: "main" }), e8), this.audioSegmentLoader_ = new Gp(vh(f3, { loaderType: "audio" }), e8), this.subtitleSegmentLoader_ = new hm(vh(f3, { loaderType: "vtt", featuresNativeTextTracks: this.tech_.featuresNativeTextTracks, loadVttJs: () => new Promise((e9, t4) => {
      function i3() {
        s3.off("vttjserror", n6), e9();
      }
      function n6() {
        s3.off("vttjsloaded", i3), t4();
      }
      s3.one("vttjsloaded", i3), s3.one("vttjserror", n6), s3.addWebVttScript_();
    }) }), e8);
    const y4 = () => this.mainSegmentLoader_.bandwidth;
    this.contentSteeringController_ = new Fm(this.vhs_.xhr, y4), this.setupSegmentLoaderListeners_(), this.bufferBasedABR && (this.mainPlaylistLoader_.one("loadedplaylist", () => this.startABRTimer_()), this.tech_.on("pause", () => this.stopABRTimer_()), this.tech_.on("play", () => this.startABRTimer_())), Hm.forEach((e9) => {
      this[e9 + "_"] = Vm.bind(this, e9);
    }), this.logger_ = bh("pc"), this.triggeredFmp4Usage = false, "none" === this.tech_.preload() ? (this.loadOnPlay_ = () => {
      this.loadOnPlay_ = null, this.mainPlaylistLoader_.load();
    }, this.tech_.one("play", this.loadOnPlay_)) : this.mainPlaylistLoader_.load(), this.timeToLoadedData__ = -1, this.mainAppendsToLoadedData__ = -1, this.audioAppendsToLoadedData__ = -1;
    const b2 = "none" === this.tech_.preload() ? "play" : "loadstart";
    this.tech_.one(b2, () => {
      const e9 = Date.now();
      this.tech_.one("loadeddata", () => {
        this.timeToLoadedData__ = Date.now() - e9, this.mainAppendsToLoadedData__ = this.mainSegmentLoader_.mediaAppends, this.audioAppendsToLoadedData__ = this.audioSegmentLoader_.mediaAppends;
      });
    });
  }
  mainAppendsToLoadedData_() {
    return this.mainAppendsToLoadedData__;
  }
  audioAppendsToLoadedData_() {
    return this.audioAppendsToLoadedData__;
  }
  appendsToLoadedData_() {
    const e8 = this.mainAppendsToLoadedData_(), t3 = this.audioAppendsToLoadedData_();
    return -1 === e8 || -1 === t3 ? -1 : e8 + t3;
  }
  timeToLoadedData_() {
    return this.timeToLoadedData__;
  }
  checkABR_(e8 = "abr") {
    const t3 = this.selectPlaylist();
    t3 && this.shouldSwitchToMedia_(t3) && this.switchMedia_(t3, e8);
  }
  switchMedia_(e8, t3, i2) {
    const s3 = this.media(), n5 = s3 && (s3.id || s3.uri), r5 = e8 && (e8.id || e8.uri);
    if (n5 && n5 !== r5) {
      this.logger_(`switch media ${n5} -> ${r5} from ${t3}`);
      const i3 = { renditionInfo: { id: r5, bandwidth: e8.attributes.BANDWIDTH, resolution: e8.attributes.RESOLUTION, codecs: e8.attributes.CODECS }, cause: t3 };
      this.trigger({ type: "renditionselected", metadata: i3 }), this.tech_.trigger({ type: "usage", name: `vhs-rendition-change-${t3}` });
    }
    this.mainPlaylistLoader_.media(e8, i2);
  }
  switchMediaForDASHContentSteering_() {
    ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((e8) => {
      const t3 = this.mediaTypes_[e8], i2 = t3 ? t3.activeGroup() : null, s3 = this.contentSteeringController_.getPathway();
      if (i2 && s3) {
        const t4 = (i2.length ? i2[0].playlists : i2.playlists).filter((e9) => e9.attributes.serviceLocation === s3);
        t4.length && this.mediaTypes_[e8].activePlaylistLoader.media(t4[0]);
      }
    });
  }
  startABRTimer_() {
    this.stopABRTimer_(), this.abrTimer_ = _.setInterval(() => this.checkABR_(), 250);
  }
  stopABRTimer_() {
    this.tech_.scrubbing && this.tech_.scrubbing() || (_.clearInterval(this.abrTimer_), this.abrTimer_ = null);
  }
  getAudioTrackPlaylists_() {
    const e8 = this.main(), t3 = e8 && e8.playlists || [];
    if (!e8 || !e8.mediaGroups || !e8.mediaGroups.AUDIO) return t3;
    const i2 = e8.mediaGroups.AUDIO, s3 = Object.keys(i2);
    let n5;
    if (Object.keys(this.mediaTypes_.AUDIO.groups).length) n5 = this.mediaTypes_.AUDIO.activeTrack();
    else {
      const e9 = i2.main || s3.length && i2[s3[0]];
      for (const t4 in e9) if (e9[t4].default) {
        n5 = { label: t4 };
        break;
      }
    }
    if (!n5) return t3;
    const r5 = [];
    for (const a5 in i2) if (i2[a5][n5.label]) {
      const t4 = i2[a5][n5.label];
      if (t4.playlists && t4.playlists.length) r5.push.apply(r5, t4.playlists);
      else if (t4.uri) r5.push(t4);
      else if (e8.playlists.length) for (let i3 = 0; i3 < e8.playlists.length; i3++) {
        const t5 = e8.playlists[i3];
        t5.attributes && t5.attributes.AUDIO && t5.attributes.AUDIO === a5 && r5.push(t5);
      }
    }
    return r5.length ? r5 : t3;
  }
  setupMainPlaylistLoaderListeners_() {
    this.mainPlaylistLoader_.on("loadedmetadata", () => {
      const e8 = this.mainPlaylistLoader_.media(), t3 = 1.5 * e8.targetDuration * 1e3;
      Jh(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.media()) ? this.requestOptions_.timeout = 0 : this.requestOptions_.timeout = t3, e8.endList && "none" !== this.tech_.preload() && (this.mainSegmentLoader_.playlist(e8, this.requestOptions_), this.mainSegmentLoader_.load()), Mm({ sourceType: this.sourceType_, segmentLoaders: { AUDIO: this.audioSegmentLoader_, SUBTITLES: this.subtitleSegmentLoader_, main: this.mainSegmentLoader_ }, tech: this.tech_, requestOptions: this.requestOptions_, mainPlaylistLoader: this.mainPlaylistLoader_, vhs: this.vhs_, main: this.main(), mediaTypes: this.mediaTypes_, excludePlaylist: this.excludePlaylist.bind(this) }), this.triggerPresenceUsage_(this.main(), e8), this.setupFirstPlay(), !this.mediaTypes_.AUDIO.activePlaylistLoader || this.mediaTypes_.AUDIO.activePlaylistLoader.media() ? this.trigger("selectedinitialmedia") : this.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata", () => {
        this.trigger("selectedinitialmedia");
      });
    }), this.mainPlaylistLoader_.on("loadedplaylist", () => {
      this.loadOnPlay_ && this.tech_.off("play", this.loadOnPlay_);
      let e8 = this.mainPlaylistLoader_.media();
      if (!e8) {
        let t3;
        if (this.attachContentSteeringListeners_(), this.initContentSteeringController_(), this.excludeUnsupportedVariants_(), this.enableLowInitialPlaylist && (t3 = this.selectInitialPlaylist()), t3 || (t3 = this.selectPlaylist()), !t3 || !this.shouldSwitchToMedia_(t3)) return;
        this.initialMedia_ = t3, this.switchMedia_(this.initialMedia_, "initial");
        if (!("vhs-json" === this.sourceType_ && this.initialMedia_.segments)) return;
        e8 = this.initialMedia_;
      }
      this.handleUpdatedMediaPlaylist(e8);
    }), this.mainPlaylistLoader_.on("error", () => {
      const e8 = this.mainPlaylistLoader_.error;
      this.excludePlaylist({ playlistToExclude: e8.playlist, error: e8 });
    }), this.mainPlaylistLoader_.on("mediachanging", () => {
      this.mainSegmentLoader_.abort(), this.mainSegmentLoader_.pause();
    }), this.mainPlaylistLoader_.on("mediachange", () => {
      const e8 = this.mainPlaylistLoader_.media(), t3 = 1.5 * e8.targetDuration * 1e3;
      Jh(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.media()) ? this.requestOptions_.timeout = 0 : this.requestOptions_.timeout = t3, "dash" === this.sourceType_ && this.mainPlaylistLoader_.isPaused && this.mainPlaylistLoader_.load(), this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.playlist(e8, this.requestOptions_), this.waitingForFastQualityPlaylistReceived_ ? this.runFastQualitySwitch_() : this.mainSegmentLoader_.load(), this.tech_.trigger({ type: "mediachange", bubbles: true });
    }), this.mainPlaylistLoader_.on("playlistunchanged", () => {
      const e8 = this.mainPlaylistLoader_.media();
      if ("playlist-unchanged" === e8.lastExcludeReason_) return;
      this.stuckAtPlaylistEnd_(e8) && (this.excludePlaylist({ error: { message: "Playlist no longer updating.", reason: "playlist-unchanged" } }), this.tech_.trigger("playliststuck"));
    }), this.mainPlaylistLoader_.on("renditiondisabled", () => {
      this.tech_.trigger({ type: "usage", name: "vhs-rendition-disabled" });
    }), this.mainPlaylistLoader_.on("renditionenabled", () => {
      this.tech_.trigger({ type: "usage", name: "vhs-rendition-enabled" });
    });
    ["manifestrequeststart", "manifestrequestcomplete", "manifestparsestart", "manifestparsecomplete", "playlistrequeststart", "playlistrequestcomplete", "playlistparsestart", "playlistparsecomplete", "renditiondisabled", "renditionenabled"].forEach((e8) => {
      this.mainPlaylistLoader_.on(e8, (e9) => {
        this.player_.trigger(Ue({}, e9));
      });
    });
  }
  handleUpdatedMediaPlaylist(e8) {
    this.useCueTags_ && this.updateAdCues_(e8), this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.playlist(e8, this.requestOptions_), this.waitingForFastQualityPlaylistReceived_ && this.runFastQualitySwitch_(), this.updateDuration(!e8.endList), this.tech_.paused() || (this.mainSegmentLoader_.load(), this.audioSegmentLoader_ && this.audioSegmentLoader_.load());
  }
  triggerPresenceUsage_(e8, t3) {
    const i2 = e8.mediaGroups || {};
    let s3 = true;
    const n5 = Object.keys(i2.AUDIO);
    for (const r5 in i2.AUDIO) for (const e9 in i2.AUDIO[r5]) {
      i2.AUDIO[r5][e9].uri || (s3 = false);
    }
    s3 && this.tech_.trigger({ type: "usage", name: "vhs-demuxed" }), Object.keys(i2.SUBTITLES).length && this.tech_.trigger({ type: "usage", name: "vhs-webvtt" }), $m.Playlist.isAes(t3) && this.tech_.trigger({ type: "usage", name: "vhs-aes" }), n5.length && Object.keys(i2.AUDIO[n5[0]]).length > 1 && this.tech_.trigger({ type: "usage", name: "vhs-alternate-audio" }), this.useCueTags_ && this.tech_.trigger({ type: "usage", name: "vhs-playlist-cue-tags" });
  }
  shouldSwitchToMedia_(e8) {
    const t3 = this.mainPlaylistLoader_.media() || this.mainPlaylistLoader_.pendingMedia_, i2 = this.tech_.currentTime(), s3 = this.bufferLowWaterLine(), n5 = this.bufferHighWaterLine(), r5 = this.tech_.buffered();
    return zm({ buffered: r5, currentTime: i2, currentPlaylist: t3, nextPlaylist: e8, bufferLowWaterLine: s3, bufferHighWaterLine: n5, duration: this.duration(), bufferBasedABR: this.bufferBasedABR, log: this.logger_ });
  }
  setupSegmentLoaderListeners_() {
    this.mainSegmentLoader_.on("bandwidthupdate", () => {
      this.checkABR_("bandwidthupdate"), this.tech_.trigger("bandwidthupdate");
    }), this.mainSegmentLoader_.on("timeout", () => {
      this.bufferBasedABR && this.mainSegmentLoader_.load();
    }), this.bufferBasedABR || this.mainSegmentLoader_.on("progress", () => {
      this.trigger("progress");
    }), this.mainSegmentLoader_.on("error", () => {
      const e9 = this.mainSegmentLoader_.error();
      this.excludePlaylist({ playlistToExclude: e9.playlist, error: e9 });
    }), this.mainSegmentLoader_.on("appenderror", () => {
      this.error = this.mainSegmentLoader_.error_, this.trigger("error");
    }), this.mainSegmentLoader_.on("syncinfoupdate", () => {
      this.onSyncInfoUpdate_();
    }), this.mainSegmentLoader_.on("timestampoffset", () => {
      this.tech_.trigger({ type: "usage", name: "vhs-timestamp-offset" });
    }), this.audioSegmentLoader_.on("syncinfoupdate", () => {
      this.onSyncInfoUpdate_();
    }), this.audioSegmentLoader_.on("appenderror", () => {
      this.error = this.audioSegmentLoader_.error_, this.trigger("error");
    }), this.mainSegmentLoader_.on("ended", () => {
      this.logger_("main segment loader ended"), this.onEndOfStream();
    }), this.timelineChangeController_.on("audioTimelineBehind", () => {
      const e9 = this.audioSegmentLoader_.pendingSegment_;
      if (!e9 || !e9.segment || !e9.segment.syncInfo) return;
      const t3 = e9.segment.syncInfo.end + 0.01;
      this.tech_.setCurrentTime(t3);
    }), this.timelineChangeController_.on("fixBadTimelineChange", () => {
      this.logger_("Fix bad timeline change. Restarting al segment loaders..."), this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.resetEverything(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.pause(), this.audioSegmentLoader_.resetEverything()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.pause(), this.subtitleSegmentLoader_.resetEverything()), this.load();
    }), this.mainSegmentLoader_.on("earlyabort", (e9) => {
      this.bufferBasedABR || (this.delegateLoaders_("all", ["abort"]), this.excludePlaylist({ error: { message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering." }, playlistExclusionDuration: jm }));
    });
    const e8 = () => {
      if (!this.sourceUpdater_.hasCreatedSourceBuffers()) return this.tryToCreateSourceBuffers_();
      const e9 = this.getCodecsOrExclude_();
      e9 && this.sourceUpdater_.addOrChangeSourceBuffers(e9);
    };
    this.mainSegmentLoader_.on("trackinfo", e8), this.audioSegmentLoader_.on("trackinfo", e8), this.mainSegmentLoader_.on("fmp4", () => {
      this.triggeredFmp4Usage || (this.tech_.trigger({ type: "usage", name: "vhs-fmp4" }), this.triggeredFmp4Usage = true);
    }), this.audioSegmentLoader_.on("fmp4", () => {
      this.triggeredFmp4Usage || (this.tech_.trigger({ type: "usage", name: "vhs-fmp4" }), this.triggeredFmp4Usage = true);
    }), this.audioSegmentLoader_.on("ended", () => {
      this.logger_("audioSegmentLoader ended"), this.onEndOfStream();
    });
    ["segmentselected", "segmentloadstart", "segmentloaded", "segmentkeyloadstart", "segmentkeyloadcomplete", "segmentdecryptionstart", "segmentdecryptioncomplete", "segmenttransmuxingstart", "segmenttransmuxingcomplete", "segmenttransmuxingtrackinfoavailable", "segmenttransmuxingtiminginfoavailable", "segmentappendstart", "appendsdone", "bandwidthupdated", "timelinechange", "codecschange"].forEach((e9) => {
      this.mainSegmentLoader_.on(e9, (e10) => {
        this.player_.trigger(Ue({}, e10));
      }), this.audioSegmentLoader_.on(e9, (e10) => {
        this.player_.trigger(Ue({}, e10));
      }), this.subtitleSegmentLoader_.on(e9, (e10) => {
        this.player_.trigger(Ue({}, e10));
      });
    });
  }
  mediaSecondsLoaded_() {
    return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded);
  }
  load() {
    this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load();
  }
  pause() {
    this.mainSegmentLoader_.pause(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.pause(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.pause();
  }
  fastQualityChange_(e8 = this.selectPlaylist()) {
    e8 && e8 === this.mainPlaylistLoader_.media() ? this.logger_("skipping fastQualityChange because new media is same as old") : (this.switchMedia_(e8, "fast-quality"), this.waitingForFastQualityPlaylistReceived_ = true);
  }
  runFastQualitySwitch_() {
    this.waitingForFastQualityPlaylistReceived_ = false, this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.resetEverything(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.pause(), this.audioSegmentLoader_.resetEverything()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.pause(), this.subtitleSegmentLoader_.resetEverything()), this.load();
  }
  play() {
    if (this.setupFirstPlay()) return;
    this.tech_.ended() && this.tech_.setCurrentTime(0), this.hasPlayed_ && this.load();
    const e8 = this.tech_.seekable();
    return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e8.start(0) ? this.tech_.setCurrentTime(e8.end(e8.length - 1)) : void 0;
  }
  setupFirstPlay() {
    const e8 = this.mainPlaylistLoader_.media();
    if (!e8 || this.tech_.paused() || this.hasPlayed_) return false;
    if (!e8.endList || e8.start) {
      const t3 = this.seekable();
      if (!t3.length) return false;
      const i2 = t3.end(0);
      let s3 = i2;
      if (e8.start) {
        const n5 = e8.start.timeOffset;
        s3 = n5 < 0 ? Math.max(i2 + n5, t3.start(0)) : Math.min(i2, n5);
      }
      this.trigger("firstplay"), this.tech_.setCurrentTime(s3);
    }
    return this.hasPlayed_ = true, this.load(), true;
  }
  handleSourceOpen_() {
    if (this.tryToCreateSourceBuffers_(), this.tech_.autoplay()) {
      const e8 = this.tech_.play();
      void 0 !== e8 && "function" == typeof e8.then && e8.then(null, (e9) => {
      });
    }
    this.trigger("sourceopen");
  }
  handleSourceEnded_() {
    if (!this.inbandTextTracks_.metadataTrack_) return;
    const e8 = this.inbandTextTracks_.metadataTrack_.cues;
    if (!e8 || !e8.length) return;
    const t3 = this.duration();
    e8[e8.length - 1].endTime = isNaN(t3) || Math.abs(t3) === 1 / 0 ? Number.MAX_VALUE : t3;
  }
  handleDurationChange_() {
    this.tech_.trigger("durationchange");
  }
  onEndOfStream() {
    let e8 = this.mainSegmentLoader_.ended_;
    if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
      const t3 = this.mainSegmentLoader_.getCurrentMediaInfo_();
      e8 = !t3 || t3.hasVideo ? e8 && this.audioSegmentLoader_.ended_ : this.audioSegmentLoader_.ended_;
    }
    e8 && (this.stopABRTimer_(), this.sourceUpdater_.endOfStream());
  }
  stuckAtPlaylistEnd_(e8) {
    if (!this.seekable().length) return false;
    const t3 = this.syncController_.getExpiredTime(e8, this.duration());
    if (null === t3) return false;
    const i2 = $m.Playlist.playlistEnd(e8, t3), s3 = this.tech_.currentTime(), n5 = this.tech_.buffered();
    if (!n5.length) return i2 - s3 <= wh;
    const r5 = n5.end(n5.length - 1);
    return r5 - s3 <= wh && i2 - r5 <= wh;
  }
  excludePlaylist({ playlistToExclude: e8 = this.mainPlaylistLoader_.media(), error: t3 = {}, playlistExclusionDuration: i2 }) {
    if (e8 = e8 || this.mainPlaylistLoader_.media(), i2 = i2 || t3.playlistExclusionDuration || this.playlistExclusionDuration, !e8) return this.error = t3, void ("open" !== this.mediaSource.readyState ? this.trigger("error") : this.sourceUpdater_.endOfStream("network"));
    e8.playlistErrors_++;
    const s3 = this.mainPlaylistLoader_.main.playlists, n5 = s3.filter(Kh), r5 = 1 === n5.length && n5[0] === e8;
    if (1 === s3.length && i2 !== 1 / 0) return dh.log.warn(`Problem encountered with playlist ${e8.id}. Trying again since it is the only playlist.`), this.tech_.trigger("retryplaylist"), this.mainPlaylistLoader_.load(r5);
    if (r5) {
      if (this.main().contentSteering) {
        const t5 = this.pathwayAttribute_(e8), i3 = 1e3 * this.contentSteeringController_.steeringManifest.ttl;
        return this.contentSteeringController_.excludePathway(t5), this.excludeThenChangePathway_(), void setTimeout(() => {
          this.contentSteeringController_.addAvailablePathway(t5);
        }, i3);
      }
      let t4 = false;
      s3.forEach((i3) => {
        if (i3 === e8) return;
        const s4 = i3.excludeUntil;
        void 0 !== s4 && s4 !== 1 / 0 && (t4 = true, delete i3.excludeUntil);
      }), t4 && (dh.log.warn("Removing other playlists from the exclusion list because the last rendition is about to be excluded."), this.tech_.trigger("retryplaylist"));
    }
    let a5;
    a5 = e8.playlistErrors_ > this.maxPlaylistRetries ? 1 / 0 : Date.now() + 1e3 * i2, e8.excludeUntil = a5, t3.reason && (e8.lastExcludeReason_ = t3.reason), this.tech_.trigger("excludeplaylist"), this.tech_.trigger({ type: "usage", name: "vhs-rendition-excluded" });
    const o5 = this.selectPlaylist();
    if (!o5) return this.error = "Playback cannot continue. No available working or supported playlists.", void this.trigger("error");
    const l2 = t3.internal ? this.logger_ : dh.log.warn, u3 = t3.message ? " " + t3.message : "";
    l2(`${t3.internal ? "Internal problem" : "Problem"} encountered with playlist ${e8.id}.${u3} Switching to playlist ${o5.id}.`), o5.attributes.AUDIO !== e8.attributes.AUDIO && this.delegateLoaders_("audio", ["abort", "pause"]), o5.attributes.SUBTITLES !== e8.attributes.SUBTITLES && this.delegateLoaders_("subtitle", ["abort", "pause"]), this.delegateLoaders_("main", ["abort", "pause"]);
    const h2 = o5.targetDuration / 2 * 1e3 || 5e3, d3 = "number" == typeof o5.lastRequest && Date.now() - o5.lastRequest <= h2;
    return this.switchMedia_(o5, "exclude", r5 || d3);
  }
  pauseLoading() {
    this.delegateLoaders_("all", ["abort", "pause"]), this.stopABRTimer_();
  }
  delegateLoaders_(e8, t3) {
    const i2 = [], s3 = "all" === e8;
    (s3 || "main" === e8) && i2.push(this.mainPlaylistLoader_);
    const n5 = [];
    (s3 || "audio" === e8) && n5.push("AUDIO"), (s3 || "subtitle" === e8) && (n5.push("CLOSED-CAPTIONS"), n5.push("SUBTITLES")), n5.forEach((e9) => {
      const t4 = this.mediaTypes_[e9] && this.mediaTypes_[e9].activePlaylistLoader;
      t4 && i2.push(t4);
    }), ["main", "audio", "subtitle"].forEach((t4) => {
      const s4 = this[`${t4}SegmentLoader_`];
      !s4 || e8 !== t4 && "all" !== e8 || i2.push(s4);
    }), i2.forEach((e9) => t3.forEach((t4) => {
      "function" == typeof e9[t4] && e9[t4]();
    }));
  }
  setCurrentTime(e8) {
    const t3 = kh(this.tech_.buffered(), e8);
    return this.mainPlaylistLoader_ && this.mainPlaylistLoader_.media() && this.mainPlaylistLoader_.media().segments ? t3 && t3.length ? e8 : (this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.resetEverything(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.pause(), this.audioSegmentLoader_.resetEverything()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.pause(), this.subtitleSegmentLoader_.resetEverything()), void this.load()) : 0;
  }
  duration() {
    if (!this.mainPlaylistLoader_) return 0;
    const e8 = this.mainPlaylistLoader_.media();
    return e8 ? e8.endList ? this.mediaSource ? this.mediaSource.duration : $m.Playlist.duration(e8) : 1 / 0 : 0;
  }
  seekable() {
    return this.seekable_;
  }
  getSeekableRange_(e8, t3) {
    const i2 = e8.media();
    if (!i2) return null;
    const s3 = this.syncController_.getMediaSequenceSync(t3);
    if (s3 && s3.isReliable) {
      const e9 = s3.start, t4 = s3.end;
      if (!isFinite(e9) || !isFinite(t4)) return null;
      const n6 = $m.Playlist.liveEdgeDelay(this.mainPlaylistLoader_.main, i2), r6 = Math.max(0, t4 - n6);
      return r6 < e9 ? null : Th([[e9, r6]]);
    }
    const n5 = this.syncController_.getExpiredTime(i2, this.duration());
    if (null === n5) return null;
    const r5 = $m.Playlist.seekable(i2, n5, $m.Playlist.liveEdgeDelay(this.mainPlaylistLoader_.main, i2));
    return r5.length ? r5 : null;
  }
  computeFinalSeekable_(e8, t3) {
    if (!t3) return e8;
    const i2 = e8.start(0), s3 = e8.end(0), n5 = t3.start(0), r5 = t3.end(0);
    return n5 > s3 || i2 > r5 ? e8 : Th([[Math.max(i2, n5), Math.min(s3, r5)]]);
  }
  onSyncInfoUpdate_() {
    if (!this.mainPlaylistLoader_) return;
    const e8 = this.getSeekableRange_(this.mainPlaylistLoader_, "main");
    if (!e8) return;
    let t3;
    if (this.mediaTypes_.AUDIO.activePlaylistLoader && (t3 = this.getSeekableRange_(this.mediaTypes_.AUDIO.activePlaylistLoader, "audio"), !t3)) return;
    const i2 = this.seekable_;
    if (this.seekable_ = this.computeFinalSeekable_(e8, t3), !this.seekable_) return;
    if (i2 && i2.length && this.seekable_.length && i2.start(0) === this.seekable_.start(0) && i2.end(0) === this.seekable_.end(0)) return;
    this.logger_(`seekable updated [${Dh(this.seekable_)}]`);
    const s3 = { seekableRanges: this.seekable_ };
    this.trigger({ type: "seekablerangeschanged", metadata: s3 }), this.tech_.trigger("seekablechanged");
  }
  updateDuration(e8) {
    if (this.updateDuration_ && (this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), this.updateDuration_ = null), "open" !== this.mediaSource.readyState) return this.updateDuration_ = this.updateDuration.bind(this, e8), void this.mediaSource.addEventListener("sourceopen", this.updateDuration_);
    if (e8) {
      const e9 = this.seekable();
      if (!e9.length) return;
      return void ((isNaN(this.mediaSource.duration) || this.mediaSource.duration < e9.end(e9.length - 1)) && this.sourceUpdater_.setDuration(e9.end(e9.length - 1)));
    }
    const t3 = this.tech_.buffered();
    let i2 = $m.Playlist.duration(this.mainPlaylistLoader_.media());
    t3.length > 0 && (i2 = Math.max(i2, t3.end(t3.length - 1))), this.mediaSource.duration !== i2 && this.sourceUpdater_.setDuration(i2);
  }
  dispose() {
    this.trigger("dispose"), this.decrypter_.terminate(), this.mainPlaylistLoader_.dispose(), this.mainSegmentLoader_.dispose(), this.contentSteeringController_.dispose(), this.keyStatusMap_.clear(), this.loadOnPlay_ && this.tech_.off("play", this.loadOnPlay_), ["AUDIO", "SUBTITLES"].forEach((e8) => {
      const t3 = this.mediaTypes_[e8].groups;
      for (const i2 in t3) t3[i2].forEach((e9) => {
        e9.playlistLoader && e9.playlistLoader.dispose();
      });
    }), this.audioSegmentLoader_.dispose(), this.subtitleSegmentLoader_.dispose(), this.sourceUpdater_.dispose(), this.timelineChangeController_.dispose(), this.stopABRTimer_(), this.updateDuration_ && this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), this.mediaSource.removeEventListener("durationchange", this.handleDurationChange_), this.mediaSource.removeEventListener("sourceopen", this.handleSourceOpen_), this.mediaSource.removeEventListener("sourceended", this.handleSourceEnded_), this.off();
  }
  main() {
    return this.mainPlaylistLoader_.main;
  }
  media() {
    return this.mainPlaylistLoader_.media() || this.initialMedia_;
  }
  areMediaTypesKnown_() {
    const e8 = !!this.mediaTypes_.AUDIO.activePlaylistLoader, t3 = !!this.mainSegmentLoader_.getCurrentMediaInfo_(), i2 = !e8 || !!this.audioSegmentLoader_.getCurrentMediaInfo_();
    return !(!t3 || !i2);
  }
  getCodecsOrExclude_() {
    const e8 = { main: this.mainSegmentLoader_.getCurrentMediaInfo_() || {}, audio: this.audioSegmentLoader_.getCurrentMediaInfo_() || {} }, t3 = this.mainSegmentLoader_.getPendingSegmentPlaylist() || this.media();
    e8.video = e8.main;
    const i2 = tp(this.main(), t3), s3 = {}, n5 = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
    if (e8.main.hasVideo && (s3.video = i2.video || e8.main.videoCodec || mt), e8.main.isMuxed && (s3.video += `,${i2.audio || e8.main.audioCodec || pt}`), (e8.main.hasAudio && !e8.main.isMuxed || e8.audio.hasAudio || n5) && (s3.audio = i2.audio || e8.main.audioCodec || e8.audio.audioCodec || pt, e8.audio.isFmp4 = e8.main.hasAudio && !e8.main.isMuxed ? e8.main.isFmp4 : e8.audio.isFmp4), !s3.audio && !s3.video) return void this.excludePlaylist({ playlistToExclude: t3, error: { message: "Could not determine codecs for playlist." }, playlistExclusionDuration: 1 / 0 });
    const r5 = (e9, t4) => e9 ? dt(t4, this.usingManagedMediaSource_) : ct(t4), a5 = {};
    let o5;
    if (["video", "audio"].forEach(function(t4) {
      if (s3.hasOwnProperty(t4) && !r5(e8[t4].isFmp4, s3[t4])) {
        const i3 = e8[t4].isFmp4 ? "browser" : "muxer";
        a5[i3] = a5[i3] || [], a5[i3].push(s3[t4]), "audio" === t4 && (o5 = i3);
      }
    }), n5 && o5 && t3.attributes.AUDIO) {
      const e9 = t3.attributes.AUDIO;
      this.main().playlists.forEach((i3) => {
        (i3.attributes && i3.attributes.AUDIO) === e9 && i3 !== t3 && (i3.excludeUntil = 1 / 0);
      }), this.logger_(`excluding audio group ${e9} as ${o5} does not support codec(s): "${s3.audio}"`);
    }
    if (!Object.keys(a5).length) {
      if (this.sourceUpdater_.hasCreatedSourceBuffers() && !this.sourceUpdater_.canChangeType()) {
        const e9 = [];
        if (["video", "audio"].forEach((t4) => {
          const i3 = (at(this.sourceUpdater_.codecs[t4] || "")[0] || {}).type, n6 = (at(s3[t4] || "")[0] || {}).type;
          i3 && n6 && i3.toLowerCase() !== n6.toLowerCase() && e9.push(`"${this.sourceUpdater_.codecs[t4]}" -> "${s3[t4]}"`);
        }), e9.length) return void this.excludePlaylist({ playlistToExclude: t3, error: { message: `Codec switching not supported: ${e9.join(", ")}.`, internal: true }, playlistExclusionDuration: 1 / 0 });
      }
      return s3;
    }
    {
      const e9 = Object.keys(a5).reduce((e10, t4) => (e10 && (e10 += ", "), e10 += `${t4} does not support codec(s): "${a5[t4].join(",")}"`), "") + ".";
      this.excludePlaylist({ playlistToExclude: t3, error: { internal: true, message: e9 }, playlistExclusionDuration: 1 / 0 });
    }
  }
  tryToCreateSourceBuffers_() {
    if ("open" !== this.mediaSource.readyState || this.sourceUpdater_.hasCreatedSourceBuffers()) return;
    if (!this.areMediaTypesKnown_()) return;
    const e8 = this.getCodecsOrExclude_();
    if (!e8) return;
    this.sourceUpdater_.createSourceBuffers(e8);
    const t3 = [e8.video, e8.audio].filter(Boolean).join(",");
    this.excludeIncompatibleVariants_(t3);
  }
  excludeUnsupportedVariants_() {
    const e8 = this.main().playlists, t3 = [];
    Object.keys(e8).forEach((i2) => {
      const s3 = e8[i2];
      if (-1 !== t3.indexOf(s3.id)) return;
      t3.push(s3.id);
      const n5 = tp(this.main, s3), r5 = [];
      !n5.audio || ct(n5.audio) || dt(n5.audio, this.usingManagedMediaSource_) || r5.push(`audio codec ${n5.audio}`), !n5.video || ct(n5.video) || dt(n5.video, this.usingManagedMediaSource_) || r5.push(`video codec ${n5.video}`), n5.text && "stpp.ttml.im1t" === n5.text && r5.push(`text codec ${n5.text}`), r5.length && (s3.excludeUntil = 1 / 0, this.logger_(`excluding ${s3.id} for unsupported: ${r5.join(", ")}`));
    });
  }
  excludeIncompatibleVariants_(e8) {
    const t3 = [], i2 = this.main().playlists, s3 = Zc(at(e8)), n5 = ep(s3), r5 = s3.video && at(s3.video)[0] || null, a5 = s3.audio && at(s3.audio)[0] || null;
    Object.keys(i2).forEach((e9) => {
      const s4 = i2[e9];
      if (-1 !== t3.indexOf(s4.id) || s4.excludeUntil === 1 / 0) return;
      t3.push(s4.id);
      const o5 = [], l2 = tp(this.mainPlaylistLoader_.main, s4), u3 = ep(l2);
      if (l2.audio || l2.video) {
        if (u3 !== n5 && o5.push(`codec count "${u3}" !== "${n5}"`), !this.sourceUpdater_.canChangeType()) {
          const e10 = l2.video && at(l2.video)[0] || null, t4 = l2.audio && at(l2.audio)[0] || null;
          e10 && r5 && e10.type.toLowerCase() !== r5.type.toLowerCase() && o5.push(`video codec "${e10.type}" !== "${r5.type}"`), t4 && a5 && t4.type.toLowerCase() !== a5.type.toLowerCase() && o5.push(`audio codec "${t4.type}" !== "${a5.type}"`);
        }
        o5.length && (s4.excludeUntil = 1 / 0, this.logger_(`excluding ${s4.id}: ${o5.join(" && ")}`));
      }
    });
  }
  updateAdCues_(e8) {
    let t3 = 0;
    const i2 = this.seekable();
    i2.length && (t3 = i2.start(0)), cm(e8, this.cueTagsTrack_, t3);
  }
  goalBufferLength() {
    const e8 = this.tech_.currentTime(), t3 = hc.GOAL_BUFFER_LENGTH, i2 = hc.GOAL_BUFFER_LENGTH_RATE, s3 = Math.max(t3, hc.MAX_GOAL_BUFFER_LENGTH);
    return Math.min(t3 + e8 * i2, s3);
  }
  bufferLowWaterLine() {
    const e8 = this.tech_.currentTime(), t3 = hc.BUFFER_LOW_WATER_LINE, i2 = hc.BUFFER_LOW_WATER_LINE_RATE, s3 = Math.max(t3, hc.MAX_BUFFER_LOW_WATER_LINE), n5 = Math.max(t3, hc.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE);
    return Math.min(t3 + e8 * i2, this.bufferBasedABR ? n5 : s3);
  }
  bufferHighWaterLine() {
    return hc.BUFFER_HIGH_WATER_LINE;
  }
  addDateRangesToTextTrack_(e8) {
    Sp(this.inbandTextTracks_, "com.apple.streaming", this.tech_), Tp({ inbandTextTracks: this.inbandTextTracks_, dateRanges: e8 });
  }
  addMetadataToTextTrack(e8, t3, i2) {
    const s3 = this.sourceUpdater_.videoBuffer ? this.sourceUpdater_.videoTimestampOffset() : this.sourceUpdater_.audioTimestampOffset();
    Sp(this.inbandTextTracks_, e8, this.tech_), _p({ inbandTextTracks: this.inbandTextTracks_, metadataArray: t3, timestampOffset: s3, videoDuration: i2 });
  }
  pathwayAttribute_(e8) {
    return e8.attributes["PATHWAY-ID"] || e8.attributes.serviceLocation;
  }
  initContentSteeringController_() {
    const e8 = this.main();
    if (e8.contentSteering) {
      for (const t3 of e8.playlists) this.contentSteeringController_.addAvailablePathway(this.pathwayAttribute_(t3));
      this.contentSteeringController_.assignTagProperties(e8.uri, e8.contentSteering), this.contentSteeringController_.queryBeforeStart ? this.contentSteeringController_.requestSteeringManifest(true) : this.tech_.one("canplay", () => {
        this.contentSteeringController_.requestSteeringManifest();
      });
    }
  }
  resetContentSteeringController_() {
    this.contentSteeringController_.clearAvailablePathways(), this.contentSteeringController_.dispose(), this.initContentSteeringController_();
  }
  attachContentSteeringListeners_() {
    this.contentSteeringController_.on("content-steering", this.excludeThenChangePathway_.bind(this));
    ["contentsteeringloadstart", "contentsteeringloadcomplete", "contentsteeringparsed"].forEach((e8) => {
      this.contentSteeringController_.on(e8, (e9) => {
        this.trigger(Ue({}, e9));
      });
    }), "dash" === this.sourceType_ && this.mainPlaylistLoader_.on("loadedplaylist", () => {
      const e8 = this.main();
      (this.contentSteeringController_.didDASHTagChange(e8.uri, e8.contentSteering) || (() => {
        const t3 = this.contentSteeringController_.getAvailablePathways(), i2 = [];
        for (const s3 of e8.playlists) {
          const e9 = s3.attributes.serviceLocation;
          if (e9 && (i2.push(e9), !t3.has(e9))) return true;
        }
        return !(i2.length || !t3.size);
      })()) && this.resetContentSteeringController_();
    });
  }
  excludeThenChangePathway_() {
    const e8 = this.contentSteeringController_.getPathway();
    if (!e8) return;
    this.handlePathwayClones_();
    const t3 = this.main().playlists, i2 = /* @__PURE__ */ new Set();
    let s3 = false;
    Object.keys(t3).forEach((n5) => {
      const r5 = t3[n5], a5 = this.pathwayAttribute_(r5), o5 = a5 && e8 !== a5;
      r5.excludeUntil === 1 / 0 && "content-steering" === r5.lastExcludeReason_ && !o5 && (delete r5.excludeUntil, delete r5.lastExcludeReason_, s3 = true);
      const l2 = !r5.excludeUntil && r5.excludeUntil !== 1 / 0;
      !i2.has(r5.id) && o5 && l2 && (i2.add(r5.id), r5.excludeUntil = 1 / 0, r5.lastExcludeReason_ = "content-steering", this.logger_(`excluding ${r5.id} for ${r5.lastExcludeReason_}`));
    }), "DASH" === this.contentSteeringController_.manifestType_ && Object.keys(this.mediaTypes_).forEach((t4) => {
      const i3 = this.mediaTypes_[t4];
      if (i3.activePlaylistLoader) {
        const t5 = i3.activePlaylistLoader.media_;
        t5 && t5.attributes.serviceLocation !== e8 && (s3 = true);
      }
    }), s3 && this.changeSegmentPathway_();
  }
  handlePathwayClones_() {
    const e8 = this.main().playlists, t3 = this.contentSteeringController_.currentPathwayClones, i2 = this.contentSteeringController_.nextPathwayClones;
    if (t3 && t3.size || i2 && i2.size) {
      for (const [e9, s3] of t3.entries()) {
        i2.get(e9) || (this.mainPlaylistLoader_.updateOrDeleteClone(s3), this.contentSteeringController_.excludePathway(e9));
      }
      for (const [s3, n5] of i2.entries()) {
        const i3 = t3.get(s3);
        if (i3) this.equalPathwayClones_(i3, n5) || (this.mainPlaylistLoader_.updateOrDeleteClone(n5, true), this.contentSteeringController_.addAvailablePathway(s3));
        else {
          e8.filter((e9) => e9.attributes["PATHWAY-ID"] === n5["BASE-ID"]).forEach((e9) => {
            this.mainPlaylistLoader_.addClonePathway(n5, e9);
          }), this.contentSteeringController_.addAvailablePathway(s3);
        }
      }
      this.contentSteeringController_.currentPathwayClones = new Map(JSON.parse(JSON.stringify([...i2])));
    }
  }
  equalPathwayClones_(e8, t3) {
    if (e8["BASE-ID"] !== t3["BASE-ID"] || e8.ID !== t3.ID || e8["URI-REPLACEMENT"].HOST !== t3["URI-REPLACEMENT"].HOST) return false;
    const i2 = e8["URI-REPLACEMENT"].PARAMS, s3 = t3["URI-REPLACEMENT"].PARAMS;
    for (const n5 in i2) if (i2[n5] !== s3[n5]) return false;
    for (const n5 in s3) if (i2[n5] !== s3[n5]) return false;
    return true;
  }
  changeSegmentPathway_() {
    const e8 = this.selectPlaylist();
    this.pauseLoading(), "DASH" === this.contentSteeringController_.manifestType_ && this.switchMediaForDASHContentSteering_(), this.switchMedia_(e8, "content-steering");
  }
  excludeNonUsablePlaylistsByKeyId_() {
    if (!this.mainPlaylistLoader_ || !this.mainPlaylistLoader_.main) return;
    let e8 = 0;
    const t3 = "non-usable";
    this.mainPlaylistLoader_.main.playlists.forEach((i2) => {
      const s3 = this.mainPlaylistLoader_.getKeyIdSet(i2);
      s3 && s3.size && s3.forEach((s4) => {
        const n5 = "usable", r5 = this.keyStatusMap_.has(s4) && this.keyStatusMap_.get(s4) === n5, a5 = i2.lastExcludeReason_ === t3 && i2.excludeUntil === 1 / 0;
        r5 ? r5 && a5 && (delete i2.excludeUntil, delete i2.lastExcludeReason_, this.logger_(`enabling playlist ${i2.id} because key ID ${s4} is ${n5}`)) : (i2.excludeUntil !== 1 / 0 && i2.lastExcludeReason_ !== t3 && (i2.excludeUntil = 1 / 0, i2.lastExcludeReason_ = t3, this.logger_(`excluding playlist ${i2.id} because the key ID ${s4} doesn't exist in the keyStatusMap or is not ${n5}`)), e8++);
      });
    }), e8 >= this.mainPlaylistLoader_.main.playlists.length && this.mainPlaylistLoader_.main.playlists.forEach((e9) => {
      const i2 = e9 && e9.attributes && e9.attributes.RESOLUTION && e9.attributes.RESOLUTION.height < 720, s3 = e9.excludeUntil === 1 / 0 && e9.lastExcludeReason_ === t3;
      i2 && s3 && (delete e9.excludeUntil, dh.log.warn(`enabling non-HD playlist ${e9.id} because all playlists were excluded due to ${t3} key IDs`));
    });
  }
  addKeyStatus_(e8, t3) {
    const i2 = ("string" == typeof e8 ? e8 : om(e8)).slice(0, 32).toLowerCase();
    this.logger_(`KeyStatus '${t3}' with key ID ${i2} added to the keyStatusMap`), this.keyStatusMap_.set(i2, t3);
  }
  updatePlaylistByKeyStatus(e8, t3) {
    this.addKeyStatus_(e8, t3), this.waitingForFastQualityPlaylistReceived_ || this.excludeNonUsableThenChangePlaylist_(), this.mainPlaylistLoader_.off("loadedplaylist", this.excludeNonUsableThenChangePlaylist_.bind(this)), this.mainPlaylistLoader_.on("loadedplaylist", this.excludeNonUsableThenChangePlaylist_.bind(this));
  }
  excludeNonUsableThenChangePlaylist_() {
    this.excludeNonUsablePlaylistsByKeyId_(), this.fastQualityChange_();
  }
};
var Gm = (e8, t3, i2) => (s3) => {
  const n5 = e8.main.playlists[t3], r5 = Xh(n5), a5 = Kh(n5);
  if (void 0 === s3) return a5;
  s3 ? delete n5.disabled : n5.disabled = true;
  const o5 = { renditionInfo: { id: t3, bandwidth: n5.attributes.BANDWIDTH, resolution: n5.attributes.RESOLUTION, codecs: n5.attributes.CODECS }, cause: "fast-quality" };
  return s3 === a5 || r5 || (s3 ? (i2(n5), e8.trigger({ type: "renditionenabled", metadata: o5 })) : e8.trigger({ type: "renditiondisabled", metadata: o5 })), s3;
};
var Xm = class {
  constructor(e8, t3, i2) {
    const { playlistController_: s3 } = e8, n5 = s3.fastQualityChange_.bind(s3);
    if (t3.attributes) {
      const e9 = t3.attributes.RESOLUTION;
      this.width = e9 && e9.width, this.height = e9 && e9.height, this.bandwidth = t3.attributes.BANDWIDTH, this.frameRate = t3.attributes["FRAME-RATE"];
    }
    this.codecs = tp(s3.main(), t3), this.playlist = t3, this.id = i2, this.enabled = Gm(e8.playlists, t3.id, n5);
  }
};
var Km = function(e8) {
  e8.representations = () => {
    const t3 = e8.playlistController_.main(), i2 = td(t3) ? e8.playlistController_.getAudioTrackPlaylists_() : t3.playlists;
    return i2 ? i2.filter((e9) => !Xh(e9)).map((t4, i3) => new Xm(e8, t4, t4.id)) : [];
  };
};
var Ym = ["seeking", "seeked", "pause", "playing", "error"];
var Qm = class extends dh.EventTarget {
  constructor(e8) {
    super(), this.playlistController_ = e8.playlistController, this.tech_ = e8.tech, this.seekable = e8.seekable, this.allowSeeksWithinUnsafeLiveWindow = e8.allowSeeksWithinUnsafeLiveWindow, this.liveRangeSafeTimeDelta = e8.liveRangeSafeTimeDelta, this.media = e8.media, this.playedRanges_ = [], this.consecutiveUpdates = 0, this.lastRecordedTime = null, this.checkCurrentTimeTimeout_ = null, this.logger_ = bh("PlaybackWatcher"), this.logger_("initialize");
    const t3 = () => this.monitorCurrentTime_(), i2 = () => this.monitorCurrentTime_(), s3 = () => this.techWaiting_(), n5 = () => this.resetTimeUpdate_(), r5 = this.playlistController_, a5 = ["main", "subtitle", "audio"], o5 = {};
    a5.forEach((e9) => {
      o5[e9] = { reset: () => this.resetSegmentDownloads_(e9), updateend: () => this.checkSegmentDownloads_(e9) }, r5[`${e9}SegmentLoader_`].on("appendsdone", o5[e9].updateend), r5[`${e9}SegmentLoader_`].on("playlistupdate", o5[e9].reset), this.tech_.on(["seeked", "seeking"], o5[e9].reset);
    });
    const l2 = (e9) => {
      ["main", "audio"].forEach((t4) => {
        r5[`${t4}SegmentLoader_`][e9]("appended", this.seekingAppendCheck_);
      });
    };
    this.seekingAppendCheck_ = () => {
      this.fixesBadSeeks_() && (this.consecutiveUpdates = 0, this.lastRecordedTime = this.tech_.currentTime(), l2("off"));
    }, this.clearSeekingAppendCheck_ = () => l2("off"), this.watchForBadSeeking_ = () => {
      this.clearSeekingAppendCheck_(), l2("on");
    }, this.tech_.on("seeked", this.clearSeekingAppendCheck_), this.tech_.on("seeking", this.watchForBadSeeking_), this.tech_.on("waiting", s3), this.tech_.on(Ym, n5), this.tech_.on("canplay", i2), this.tech_.one("play", t3), this.dispose = () => {
      this.clearSeekingAppendCheck_(), this.logger_("dispose"), this.tech_.off("waiting", s3), this.tech_.off(Ym, n5), this.tech_.off("canplay", i2), this.tech_.off("play", t3), this.tech_.off("seeking", this.watchForBadSeeking_), this.tech_.off("seeked", this.clearSeekingAppendCheck_), a5.forEach((e9) => {
        r5[`${e9}SegmentLoader_`].off("appendsdone", o5[e9].updateend), r5[`${e9}SegmentLoader_`].off("playlistupdate", o5[e9].reset), this.tech_.off(["seeked", "seeking"], o5[e9].reset);
      }), this.checkCurrentTimeTimeout_ && _.clearTimeout(this.checkCurrentTimeTimeout_), this.resetTimeUpdate_();
    };
  }
  monitorCurrentTime_() {
    this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && _.clearTimeout(this.checkCurrentTimeTimeout_), this.checkCurrentTimeTimeout_ = _.setTimeout(this.monitorCurrentTime_.bind(this), 250);
  }
  resetSegmentDownloads_(e8) {
    const t3 = this.playlistController_[`${e8}SegmentLoader_`];
    this[`${e8}StalledDownloads_`] > 0 && this.logger_(`resetting possible stalled download count for ${e8} loader`), this[`${e8}StalledDownloads_`] = 0, this[`${e8}Buffered_`] = t3.buffered_();
  }
  checkSegmentDownloads_(e8) {
    const t3 = this.playlistController_, i2 = t3[`${e8}SegmentLoader_`], s3 = i2.buffered_(), n5 = Oh(this[`${e8}Buffered_`], s3);
    if (this[`${e8}Buffered_`] = s3, n5) {
      const i3 = { bufferedRanges: s3 };
      return t3.trigger({ type: "bufferedrangeschanged", metadata: i3 }), void this.resetSegmentDownloads_(e8);
    }
    this[`${e8}StalledDownloads_`]++, this.logger_(`found #${this[`${e8}StalledDownloads_`]} ${e8} appends that did not increase buffer (possible stalled download)`, { playlistId: i2.playlist_ && i2.playlist_.id, buffered: Lh(s3) }), this[`${e8}StalledDownloads_`] < 10 || (this.logger_(`${e8} loader stalled download exclusion`), this.resetSegmentDownloads_(e8), this.tech_.trigger({ type: "usage", name: `vhs-${e8}-download-exclusion` }), "subtitle" !== e8 && t3.excludePlaylist({ error: { message: `Excessive ${e8} segment downloading detected.` }, playlistExclusionDuration: 1 / 0 }));
  }
  checkCurrentTime_() {
    if (this.tech_.paused() || this.tech_.seeking()) return;
    const e8 = this.tech_.currentTime(), t3 = this.tech_.buffered();
    if (this.lastRecordedTime === e8 && (!t3.length || e8 + wh >= t3.end(t3.length - 1))) return this.techWaiting_();
    if (this.consecutiveUpdates >= 5 && e8 === this.lastRecordedTime) this.consecutiveUpdates++, this.waiting_();
    else if (e8 === this.lastRecordedTime) this.consecutiveUpdates++;
    else {
      this.playedRanges_.push(Th([this.lastRecordedTime, e8]));
      const t4 = { playedRanges: this.playedRanges_ };
      this.playlistController_.trigger({ type: "playedrangeschanged", metadata: t4 }), this.consecutiveUpdates = 0, this.lastRecordedTime = e8;
    }
  }
  resetTimeUpdate_() {
    this.consecutiveUpdates = 0;
  }
  fixesBadSeeks_() {
    if (!this.tech_.seeking()) return false;
    const e8 = this.seekable(), t3 = this.tech_.currentTime();
    let i2;
    if (this.afterSeekableWindow_(e8, t3, this.media(), this.allowSeeksWithinUnsafeLiveWindow)) {
      i2 = e8.end(e8.length - 1);
    }
    if (this.beforeSeekableWindow_(e8, t3)) {
      const t4 = e8.start(0);
      i2 = t4 + (t4 === e8.end(0) ? 0 : wh);
    }
    if (void 0 !== i2) return this.logger_(`Trying to seek outside of seekable at time ${t3} with seekable range ${Dh(e8)}. Seeking to ${i2}.`), this.tech_.setCurrentTime(i2), true;
    const s3 = this.playlistController_.sourceUpdater_, n5 = this.tech_.buffered(), r5 = s3.audioBuffer ? s3.audioBuffered() : null, a5 = s3.videoBuffer ? s3.videoBuffered() : null, o5 = this.media(), l2 = o5.partTargetDuration ? o5.partTargetDuration : 2 * (o5.targetDuration - Eh), u3 = [r5, a5];
    for (let d3 = 0; d3 < u3.length; d3++) {
      if (!u3[d3]) continue;
      if (Rh(u3[d3], t3) < l2) return false;
    }
    const h2 = Ih(n5, t3);
    return 0 !== h2.length && (i2 = h2.start(0) + wh, this.logger_(`Buffered region starts (${h2.start(0)})  just beyond seek point (${t3}). Seeking to ${i2}.`), this.tech_.setCurrentTime(i2), true);
  }
  waiting_() {
    if (this.techWaiting_()) return;
    const e8 = this.tech_.currentTime(), t3 = this.tech_.buffered(), i2 = kh(t3, e8);
    return i2.length && e8 + 3 <= i2.end(0) ? (this.resetTimeUpdate_(), this.tech_.setCurrentTime(e8), this.logger_(`Stopped at ${e8} while inside a buffered region [${i2.start(0)} -> ${i2.end(0)}]. Attempting to resume playback by seeking to the current time.`), void this.tech_.trigger({ type: "usage", name: "vhs-unknown-waiting" })) : void 0;
  }
  techWaiting_() {
    const e8 = this.seekable(), t3 = this.tech_.currentTime();
    if (this.tech_.seeking()) return true;
    if (this.beforeSeekableWindow_(e8, t3)) {
      const i3 = e8.end(e8.length - 1);
      return this.logger_(`Fell out of live window at time ${t3}. Seeking to live point (seekable end) ${i3}`), this.resetTimeUpdate_(), this.tech_.setCurrentTime(i3), this.tech_.trigger({ type: "usage", name: "vhs-live-resync" }), true;
    }
    const i2 = this.tech_.vhs.playlistController_.sourceUpdater_, s3 = this.tech_.buffered();
    if (this.videoUnderflow_({ audioBuffered: i2.audioBuffered(), videoBuffered: i2.videoBuffered(), currentTime: t3 })) return this.resetTimeUpdate_(), this.tech_.setCurrentTime(t3), this.tech_.trigger({ type: "usage", name: "vhs-video-underflow" }), true;
    const n5 = Ih(s3, t3);
    return n5.length > 0 && (this.logger_(`Stopped at ${t3} and seeking to ${n5.start(0)}`), this.resetTimeUpdate_(), this.skipTheGap_(t3), true);
  }
  afterSeekableWindow_(e8, t3, i2, s3 = false) {
    if (!e8.length) return false;
    let n5 = e8.end(e8.length - 1) + wh;
    const r5 = !i2.endList, a5 = "number" == typeof i2.partTargetDuration;
    return r5 && (a5 || s3) && (n5 = e8.end(e8.length - 1) + 3 * i2.targetDuration), t3 > n5;
  }
  beforeSeekableWindow_(e8, t3) {
    return !!(e8.length && e8.start(0) > 0 && t3 < e8.start(0) - this.liveRangeSafeTimeDelta);
  }
  videoUnderflow_({ videoBuffered: e8, audioBuffered: t3, currentTime: i2 }) {
    if (!e8) return;
    let s3;
    if (e8.length && t3.length) {
      const n5 = kh(e8, i2 - 3), r5 = kh(e8, i2), a5 = kh(t3, i2);
      a5.length && !r5.length && n5.length && (s3 = { start: n5.end(0), end: a5.end(0) });
    } else {
      Ih(e8, i2).length || (s3 = this.gapFromVideoUnderflow_(e8, i2));
    }
    return !!s3 && (this.logger_(`Encountered a gap in video from ${s3.start} to ${s3.end}. Seeking to current time ${i2}`), true);
  }
  skipTheGap_(e8) {
    const t3 = this.tech_.buffered(), i2 = this.tech_.currentTime(), s3 = Ih(t3, i2);
    if (this.resetTimeUpdate_(), 0 === s3.length || i2 !== e8) return;
    this.logger_("skipTheGap_:", "currentTime:", i2, "scheduled currentTime:", e8, "nextRange start:", s3.start(0)), this.tech_.setCurrentTime(s3.start(0) + Eh);
    const n5 = { gapInfo: { from: i2, to: s3.start(0) } };
    this.playlistController_.trigger({ type: "gapjumped", metadata: n5 }), this.tech_.trigger({ type: "usage", name: "vhs-gap-skip" });
  }
  gapFromVideoUnderflow_(e8, t3) {
    const i2 = xh(e8);
    for (let s3 = 0; s3 < i2.length; s3++) {
      const e9 = i2.start(s3), n5 = i2.end(s3);
      if (t3 - e9 < 4 && t3 - e9 > 2) return { start: e9, end: n5 };
    }
    return null;
  }
};
var Jm = { errorInterval: 30, getSource(e8) {
  return e8(this.tech({ IWillNotUseThisInPlugins: true }).currentSource_ || this.currentSource());
} };
var Zm = function(e8, t3) {
  let i2 = 0, s3 = 0;
  const n5 = vh(Jm, t3);
  e8.ready(() => {
    e8.trigger({ type: "usage", name: "vhs-error-reload-initialized" });
  });
  const r5 = function() {
    s3 && e8.currentTime(s3);
  }, a5 = function(t4) {
    null != t4 && (s3 = e8.duration() !== 1 / 0 && e8.currentTime() || 0, e8.one("loadedmetadata", r5), e8.src(t4), e8.trigger({ type: "usage", name: "vhs-error-reload" }), e8.play());
  }, o5 = function() {
    if (Date.now() - i2 < 1e3 * n5.errorInterval) e8.trigger({ type: "usage", name: "vhs-error-reload-canceled" });
    else {
      if (n5.getSource && "function" == typeof n5.getSource) return i2 = Date.now(), n5.getSource.call(e8, a5);
      dh.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!");
    }
  }, l2 = function() {
    e8.off("loadedmetadata", r5), e8.off("error", o5), e8.off("dispose", l2);
  }, u3 = function(t4) {
    l2(), Zm(e8, t4);
  };
  e8.on("error", o5), e8.on("dispose", l2), e8.reloadSourceOnError = u3;
};
var eg = function(e8) {
  Zm(this, e8);
};
var tg = "3.16.2";
var ig = "7.1.0";
var sg = "1.3.1";
var ng = "7.2.0";
var rg = "4.0.2";
var ag = { PlaylistLoader: kd, Playlist: id, utils: $d, STANDARD_PLAYLIST_SELECTOR: up, INITIAL_PLAYLIST_SELECTOR: cp, lastBandwidthSelector: up, movingAverageBandwidthSelector: hp, comparePlaylistBandwidth: ap, comparePlaylistResolution: op, xhr: Dd() };
Object.keys(hc).forEach((e8) => {
  Object.defineProperty(ag, e8, { get: () => (dh.log.warn(`using Vhs.${e8} is UNSAFE be sure you know what you are doing`), hc[e8]), set(t3) {
    dh.log.warn(`using Vhs.${e8} is UNSAFE be sure you know what you are doing`), "number" != typeof t3 || t3 < 0 ? dh.log.warn(`value of Vhs.${e8} must be greater than or equal to 0`) : hc[e8] = t3;
  } });
});
var og = "videojs-vhs";
var lg = function(e8, t3) {
  const i2 = t3.media();
  let s3 = -1;
  for (let n5 = 0; n5 < e8.length; n5++) if (e8[n5].id === i2.id) {
    s3 = n5;
    break;
  }
  e8.selectedIndex_ = s3, e8.trigger({ selectedIndex: s3, type: "change" });
};
var ug = function(e8, t3) {
  t3.representations().forEach((t4) => {
    e8.addQualityLevel(t4);
  }), lg(e8, t3.playlists);
};
ag.canPlaySource = function() {
  return dh.log.warn("VHS is no longer a tech. Please remove it from your player's techOrder.");
};
var hg = (e8, t3, i2) => {
  if (!e8) return e8;
  let s3 = {};
  t3 && t3.attributes && t3.attributes.CODECS && (s3 = Zc(at(t3.attributes.CODECS))), i2 && i2.attributes && i2.attributes.CODECS && (s3.audio = i2.attributes.CODECS);
  const n5 = ht(s3.video), r5 = ht(s3.audio), a5 = {};
  for (const o5 in e8) a5[o5] = {}, r5 && (a5[o5].audioContentType = r5), n5 && (a5[o5].videoContentType = n5), t3.contentProtection && t3.contentProtection[o5] && t3.contentProtection[o5].pssh && (a5[o5].pssh = t3.contentProtection[o5].pssh), "string" == typeof e8[o5] && (a5[o5].url = e8[o5]);
  return vh(e8, a5);
};
var dg = (e8, t3) => e8.reduce((e9, i2) => {
  if (!i2.contentProtection) return e9;
  const s3 = t3.reduce((e10, t4) => {
    const s4 = i2.contentProtection[t4];
    return s4 && s4.pssh && (e10[t4] = { pssh: s4.pssh }), e10;
  }, {});
  return Object.keys(s3).length && e9.push(s3), e9;
}, []);
var cg = ({ player: e8, sourceKeySystems: t3, audioMedia: i2, mainPlaylists: s3 }) => {
  if (!e8.eme.initializeMediaKeys) return Promise.resolve();
  const n5 = i2 ? s3.concat([i2]) : s3, r5 = dg(n5, Object.keys(t3)), a5 = [], o5 = [];
  return r5.forEach((t4) => {
    o5.push(new Promise((t5, i3) => {
      e8.tech_.one("keysessioncreated", t5);
    })), a5.push(new Promise((i3, s4) => {
      e8.eme.initializeMediaKeys({ keySystems: t4 }, (e9) => {
        e9 ? s4(e9) : i3();
      });
    }));
  }), Promise.race([Promise.all(a5), Promise.race(o5)]);
};
var pg = ({ player: e8, sourceKeySystems: t3, media: i2, audioMedia: s3 }) => {
  const n5 = hg(t3, i2, s3);
  return !!n5 && (e8.currentSource().keySystems = n5, !(n5 && !e8.eme) || (dh.log.warn("DRM encrypted source cannot be decrypted without a DRM plugin"), false));
};
var mg = () => {
  if (!_.localStorage) return null;
  const e8 = _.localStorage.getItem(og);
  if (!e8) return null;
  try {
    return JSON.parse(e8);
  } catch (t3) {
    return null;
  }
};
var gg = (e8) => {
  if (!_.localStorage) return false;
  let t3 = mg();
  t3 = t3 ? vh(t3, e8) : e8;
  try {
    _.localStorage.setItem(og, JSON.stringify(t3));
  } catch (i2) {
    return false;
  }
  return t3;
};
var fg = (e8) => 0 === e8.toLowerCase().indexOf("data:application/vnd.videojs.vhs+json,") ? JSON.parse(e8.substring(e8.indexOf(",") + 1)) : e8;
var yg = (e8, t3) => {
  e8._requestCallbackSet || (e8._requestCallbackSet = /* @__PURE__ */ new Set()), e8._requestCallbackSet.add(t3);
};
var _g = (e8, t3) => {
  e8._responseCallbackSet || (e8._responseCallbackSet = /* @__PURE__ */ new Set()), e8._responseCallbackSet.add(t3);
};
var bg = (e8, t3) => {
  e8._requestCallbackSet && (e8._requestCallbackSet.delete(t3), e8._requestCallbackSet.size || delete e8._requestCallbackSet);
};
var vg = (e8, t3) => {
  e8._responseCallbackSet && (e8._responseCallbackSet.delete(t3), e8._responseCallbackSet.size || delete e8._responseCallbackSet);
};
ag.supportsNativeHls = function() {
  if (!ne || !ne.createElement) return false;
  const e8 = ne.createElement("video");
  if (!dh.getTech("Html5").isSupported()) return false;
  return ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some(function(t3) {
    return /maybe|probably/i.test(e8.canPlayType(t3));
  });
}(), ag.supportsNativeDash = !!(ne && ne.createElement && dh.getTech("Html5").isSupported()) && /maybe|probably/i.test(ne.createElement("video").canPlayType("application/dash+xml")), ag.supportsTypeNatively = (e8) => "hls" === e8 ? ag.supportsNativeHls : "dash" === e8 && ag.supportsNativeDash, ag.isSupported = function() {
  return dh.log.warn("VHS is no longer a tech. Please remove it from your player's techOrder.");
}, ag.xhr.onRequest = function(e8) {
  yg(ag.xhr, e8);
}, ag.xhr.onResponse = function(e8) {
  _g(ag.xhr, e8);
}, ag.xhr.offRequest = function(e8) {
  bg(ag.xhr, e8);
}, ag.xhr.offResponse = function(e8) {
  vg(ag.xhr, e8);
};
var Tg = dh.getComponent("Component");
var Sg = class extends Tg {
  constructor(e8, t3, i2) {
    if (super(t3, i2.vhs), "number" == typeof i2.initialBandwidth && (this.options_.bandwidth = i2.initialBandwidth), this.logger_ = bh("VhsHandler"), t3.options_ && t3.options_.playerId) {
      const e9 = dh.getPlayer(t3.options_.playerId);
      this.player_ = e9;
    }
    if (this.tech_ = t3, this.source_ = e8, this.stats = {}, this.ignoreNextSeekingEvent_ = false, this.setOptions_(), this.options_.overrideNative && t3.overrideNativeAudioTracks && t3.overrideNativeVideoTracks) t3.overrideNativeAudioTracks(true), t3.overrideNativeVideoTracks(true);
    else if (this.options_.overrideNative && (t3.featuresNativeVideoTracks || t3.featuresNativeAudioTracks)) throw new Error("Overriding native VHS requires emulated tracks. See https://git.io/vMpjB");
    this.on(ne, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], (e9) => {
      const t4 = ne.fullscreenElement || ne.webkitFullscreenElement || ne.mozFullScreenElement || ne.msFullscreenElement;
      t4 && t4.contains(this.tech_.el()) ? this.playlistController_.fastQualityChange_() : this.playlistController_.checkABR_();
    }), this.on(this.tech_, "seeking", function() {
      this.ignoreNextSeekingEvent_ ? this.ignoreNextSeekingEvent_ = false : this.setCurrentTime(this.tech_.currentTime());
    }), this.on(this.tech_, "error", function() {
      this.tech_.error() && this.playlistController_ && this.playlistController_.pauseLoading();
    }), this.on(this.tech_, "play", this.play);
  }
  setOptions_(e8 = {}) {
    if (this.options_ = vh(this.options_, e8), this.options_.withCredentials = this.options_.withCredentials || false, this.options_.limitRenditionByPlayerDimensions = false !== this.options_.limitRenditionByPlayerDimensions, this.options_.useDevicePixelRatio = this.options_.useDevicePixelRatio || false, this.options_.useBandwidthFromLocalStorage = void 0 !== this.source_.useBandwidthFromLocalStorage ? this.source_.useBandwidthFromLocalStorage : this.options_.useBandwidthFromLocalStorage || false, this.options_.useForcedSubtitles = this.options_.useForcedSubtitles || false, this.options_.useNetworkInformationApi = this.options_.useNetworkInformationApi || false, this.options_.useDtsForTimestampOffset = this.options_.useDtsForTimestampOffset || false, this.options_.customTagParsers = this.options_.customTagParsers || [], this.options_.customTagMappers = this.options_.customTagMappers || [], this.options_.cacheEncryptionKeys = this.options_.cacheEncryptionKeys || false, this.options_.llhls = false !== this.options_.llhls, this.options_.bufferBasedABR = this.options_.bufferBasedABR || false, "number" != typeof this.options_.playlistExclusionDuration && (this.options_.playlistExclusionDuration = 60), "number" != typeof this.options_.bandwidth && this.options_.useBandwidthFromLocalStorage) {
      const e9 = mg();
      e9 && e9.bandwidth && (this.options_.bandwidth = e9.bandwidth, this.tech_.trigger({ type: "usage", name: "vhs-bandwidth-from-local-storage" })), e9 && e9.throughput && (this.options_.throughput = e9.throughput, this.tech_.trigger({ type: "usage", name: "vhs-throughput-from-local-storage" }));
    }
    "number" != typeof this.options_.bandwidth && (this.options_.bandwidth = hc.INITIAL_BANDWIDTH), this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === hc.INITIAL_BANDWIDTH, ["withCredentials", "useDevicePixelRatio", "customPixelRatio", "limitRenditionByPlayerDimensions", "bandwidth", "customTagParsers", "customTagMappers", "cacheEncryptionKeys", "playlistSelector", "initialPlaylistSelector", "bufferBasedABR", "liveRangeSafeTimeDelta", "llhls", "useForcedSubtitles", "useNetworkInformationApi", "useDtsForTimestampOffset", "exactManifestTimings", "leastPixelDiffSelector"].forEach((e9) => {
      void 0 !== this.source_[e9] && (this.options_[e9] = this.source_[e9]);
    }), this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions, this.useDevicePixelRatio = this.options_.useDevicePixelRatio;
    const t3 = this.options_.customPixelRatio;
    "number" == typeof t3 && t3 >= 0 && (this.customPixelRatio = t3);
  }
  setOptions(e8 = {}) {
    this.setOptions_(e8);
  }
  src(e8, t3) {
    if (!e8) return;
    this.setOptions_(), this.options_.src = fg(this.source_.src), this.options_.tech = this.tech_, this.options_.externVhs = ag, this.options_.sourceType = yt(t3), this.options_.seekTo = (e9) => {
      this.tech_.setCurrentTime(e9);
    }, this.options_.player_ = this.player_, this.playlistController_ = new Wm(this.options_);
    const i2 = vh({ liveRangeSafeTimeDelta: wh }, this.options_, { seekable: () => this.seekable(), media: () => this.playlistController_.media(), playlistController: this.playlistController_ });
    this.playbackWatcher_ = new Qm(i2), this.attachStreamingEventListeners_(), this.playlistController_.on("error", () => {
      const e9 = dh.players[this.tech_.options_.playerId];
      let t4 = this.playlistController_.error;
      "object" != typeof t4 || t4.code ? "string" == typeof t4 && (t4 = { message: t4, code: 3 }) : t4.code = 3, e9.error(t4);
    });
    const s3 = this.options_.bufferBasedABR ? ag.movingAverageBandwidthSelector(0.55) : ag.STANDARD_PLAYLIST_SELECTOR;
    this.playlistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : s3.bind(this), this.playlistController_.selectInitialPlaylist = ag.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.playlistController_.mainPlaylistLoader_, this.mediaSource = this.playlistController_.mediaSource, Object.defineProperties(this, { selectPlaylist: { get() {
      return this.playlistController_.selectPlaylist;
    }, set(e9) {
      this.playlistController_.selectPlaylist = e9.bind(this);
    } }, throughput: { get() {
      return this.playlistController_.mainSegmentLoader_.throughput.rate;
    }, set(e9) {
      this.playlistController_.mainSegmentLoader_.throughput.rate = e9, this.playlistController_.mainSegmentLoader_.throughput.count = 1;
    } }, bandwidth: { get() {
      let e9 = this.playlistController_.mainSegmentLoader_.bandwidth;
      const t4 = _.navigator.connection || _.navigator.mozConnection || _.navigator.webkitConnection, i3 = 1e7;
      if (this.options_.useNetworkInformationApi && t4) {
        const s4 = 1e3 * t4.downlink * 1e3;
        e9 = s4 >= i3 && e9 >= i3 ? Math.max(e9, s4) : s4;
      }
      return e9;
    }, set(e9) {
      this.playlistController_.mainSegmentLoader_.bandwidth = e9, this.playlistController_.mainSegmentLoader_.throughput = { rate: 0, count: 0 };
    } }, systemBandwidth: { get() {
      const e9 = 1 / (this.bandwidth || 1);
      let t4;
      t4 = this.throughput > 0 ? 1 / this.throughput : 0;
      return Math.floor(1 / (e9 + t4));
    }, set() {
      dh.log.error('The "systemBandwidth" property is read-only');
    } } }), this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth), this.options_.throughput && (this.throughput = this.options_.throughput), Object.defineProperties(this.stats, { bandwidth: { get: () => this.bandwidth || 0, enumerable: true }, mediaRequests: { get: () => this.playlistController_.mediaRequests_() || 0, enumerable: true }, mediaRequestsAborted: { get: () => this.playlistController_.mediaRequestsAborted_() || 0, enumerable: true }, mediaRequestsTimedout: { get: () => this.playlistController_.mediaRequestsTimedout_() || 0, enumerable: true }, mediaRequestsErrored: { get: () => this.playlistController_.mediaRequestsErrored_() || 0, enumerable: true }, mediaTransferDuration: { get: () => this.playlistController_.mediaTransferDuration_() || 0, enumerable: true }, mediaBytesTransferred: { get: () => this.playlistController_.mediaBytesTransferred_() || 0, enumerable: true }, mediaSecondsLoaded: { get: () => this.playlistController_.mediaSecondsLoaded_() || 0, enumerable: true }, mediaAppends: { get: () => this.playlistController_.mediaAppends_() || 0, enumerable: true }, mainAppendsToLoadedData: { get: () => this.playlistController_.mainAppendsToLoadedData_() || 0, enumerable: true }, audioAppendsToLoadedData: { get: () => this.playlistController_.audioAppendsToLoadedData_() || 0, enumerable: true }, appendsToLoadedData: { get: () => this.playlistController_.appendsToLoadedData_() || 0, enumerable: true }, timeToLoadedData: { get: () => this.playlistController_.timeToLoadedData_() || 0, enumerable: true }, buffered: { get: () => Lh(this.tech_.buffered()), enumerable: true }, currentTime: { get: () => this.tech_.currentTime(), enumerable: true }, currentSource: { get: () => this.tech_.currentSource_, enumerable: true }, currentTech: { get: () => this.tech_.name_, enumerable: true }, duration: { get: () => this.tech_.duration(), enumerable: true }, main: { get: () => this.playlists.main, enumerable: true }, playerDimensions: { get: () => this.tech_.currentDimensions(), enumerable: true }, seekable: { get: () => Lh(this.tech_.seekable()), enumerable: true }, timestamp: { get: () => Date.now(), enumerable: true }, videoPlaybackQuality: { get: () => this.tech_.getVideoPlaybackQuality(), enumerable: true } }), this.tech_.one("canplay", this.playlistController_.setupFirstPlay.bind(this.playlistController_)), this.tech_.on("bandwidthupdate", () => {
      this.options_.useBandwidthFromLocalStorage && gg({ bandwidth: this.bandwidth, throughput: Math.round(this.throughput) });
    }), this.playlistController_.on("selectedinitialmedia", () => {
      Km(this);
    }), this.playlistController_.sourceUpdater_.on("createdsourcebuffers", () => {
      this.setupEme_();
    }), this.on(this.playlistController_, "progress", function() {
      this.tech_.trigger("progress");
    }), this.on(this.playlistController_, "firstplay", function() {
      this.ignoreNextSeekingEvent_ = true;
    }), this.setupQualityLevels_(), this.tech_.el() && (this.mediaSourceUrl_ = _.URL.createObjectURL(this.playlistController_.mediaSource), (dh.browser.IS_ANY_SAFARI || dh.browser.IS_IOS) && this.options_.overrideNative && "hls" === this.options_.sourceType && "function" == typeof this.tech_.addSourceElement ? (this.tech_.addSourceElement(this.mediaSourceUrl_), this.tech_.addSourceElement(this.source_.src)) : this.tech_.src(this.mediaSourceUrl_));
  }
  createKeySessions_() {
    const e8 = this.playlistController_.mediaTypes_.AUDIO.activePlaylistLoader;
    this.logger_("waiting for EME key session creation"), cg({ player: this.player_, sourceKeySystems: this.source_.keySystems, audioMedia: e8 && e8.media(), mainPlaylists: this.playlists.main.playlists }).then(() => {
      this.logger_("created EME key session"), this.playlistController_.sourceUpdater_.initializedEme();
    }).catch((e9) => {
      this.logger_("error while creating EME key session", e9), this.player_.error({ message: "Failed to initialize media keys for EME", code: 3 });
    });
  }
  handleWaitingForKey_() {
    this.logger_("waitingforkey fired, attempting to create any new key sessions"), this.createKeySessions_();
  }
  setupEme_() {
    const e8 = this.playlistController_.mediaTypes_.AUDIO.activePlaylistLoader, t3 = pg({ player: this.player_, sourceKeySystems: this.source_.keySystems, media: this.playlists.media(), audioMedia: e8 && e8.media() });
    this.player_.tech_.on("keystatuschange", (e9) => {
      this.playlistController_.updatePlaylistByKeyStatus(e9.keyId, e9.status);
    }), this.handleWaitingForKey_ = this.handleWaitingForKey_.bind(this), this.player_.tech_.on("waitingforkey", this.handleWaitingForKey_), t3 ? this.createKeySessions_() : this.playlistController_.sourceUpdater_.initializedEme();
  }
  setupQualityLevels_() {
    const e8 = dh.players[this.tech_.options_.playerId];
    e8 && e8.qualityLevels && !this.qualityLevels_ && (this.qualityLevels_ = e8.qualityLevels(), this.playlistController_.on("selectedinitialmedia", () => {
      ug(this.qualityLevels_, this);
    }), this.playlists.on("mediachange", () => {
      lg(this.qualityLevels_, this.playlists);
    }));
  }
  static version() {
    return { "@videojs/http-streaming": tg, "mux.js": ig, "mpd-parser": sg, "m3u8-parser": ng, "aes-decrypter": rg };
  }
  version() {
    return this.constructor.version();
  }
  canChangeType() {
    return rm.canChangeType();
  }
  play() {
    this.playlistController_.play();
  }
  setCurrentTime(e8) {
    this.playlistController_.setCurrentTime(e8);
  }
  duration() {
    return this.playlistController_.duration();
  }
  seekable() {
    return this.playlistController_.seekable();
  }
  dispose() {
    this.playbackWatcher_ && this.playbackWatcher_.dispose(), this.playlistController_ && this.playlistController_.dispose(), this.qualityLevels_ && this.qualityLevels_.dispose(), this.tech_ && this.tech_.vhs && delete this.tech_.vhs, this.mediaSourceUrl_ && _.URL.revokeObjectURL && (_.URL.revokeObjectURL(this.mediaSourceUrl_), this.mediaSourceUrl_ = null), this.tech_ && this.tech_.off("waitingforkey", this.handleWaitingForKey_), super.dispose();
  }
  convertToProgramTime(e8, t3) {
    return Yd({ playlist: this.playlistController_.media(), time: e8, callback: t3 });
  }
  seekToProgramTime(e8, t3, i2 = true, s3 = 2) {
    return Qd({ programTime: e8, playlist: this.playlistController_.media(), retryCount: s3, pauseAfterSeek: i2, seekTo: this.options_.seekTo, tech: this.options_.tech, callback: t3 });
  }
  setupXhrHooks_() {
    this.xhr.onRequest = (e8) => {
      yg(this.xhr, e8);
    }, this.xhr.onResponse = (e8) => {
      _g(this.xhr, e8);
    }, this.xhr.offRequest = (e8) => {
      bg(this.xhr, e8);
    }, this.xhr.offResponse = (e8) => {
      vg(this.xhr, e8);
    }, this.player_.trigger("xhr-hooks-ready");
  }
  attachStreamingEventListeners_() {
    const e8 = ["gapjumped", "playedrangeschanged"];
    ["seekablerangeschanged", "bufferedrangeschanged", "contentsteeringloadstart", "contentsteeringloadcomplete", "contentsteeringparsed"].forEach((e9) => {
      this.playlistController_.on(e9, (e10) => {
        this.player_.trigger(Ue({}, e10));
      });
    }), e8.forEach((e9) => {
      this.playbackWatcher_.on(e9, (e10) => {
        this.player_.trigger(Ue({}, e10));
      });
    });
  }
};
var Eg = { name: "videojs-http-streaming", VERSION: tg, canHandleSource(e8, t3 = {}) {
  const i2 = vh(dh.options, t3);
  return !(!i2.vhs.experimentalUseMMS && !dt("avc1.4d400d,mp4a.40.2", false)) && Eg.canPlayType(e8.type, i2);
}, handleSource(e8, t3, i2 = {}) {
  const s3 = vh(dh.options, i2);
  return t3.vhs = new Sg(e8, t3, s3), t3.vhs.xhr = Dd(), t3.vhs.setupXhrHooks_(), t3.vhs.src(e8.src, e8.type), t3.vhs;
}, canPlayType(e8, t3) {
  const i2 = yt(e8);
  if (!i2) return "";
  const s3 = Eg.getOverrideNative(t3);
  return !ag.supportsTypeNatively(i2) || s3 ? "maybe" : "";
}, getOverrideNative(e8 = {}) {
  const { vhs: t3 = {} } = e8, i2 = !(dh.browser.IS_ANY_SAFARI || dh.browser.IS_IOS), { overrideNative: s3 = i2 } = t3;
  return s3;
} };
(() => dt("avc1.4d400d,mp4a.40.2", true))() && dh.getTech("Html5").registerSourceHandler(Eg, 0), dh.VhsHandler = Sg, dh.VhsSourceHandler = Eg, dh.Vhs = ag, dh.use || dh.registerComponent("Vhs", ag), dh.options.vhs = dh.options.vhs || {}, dh.getPlugin && dh.getPlugin("reloadSourceOnError") || dh.registerPlugin("reloadSourceOnError", eg);
var wg = class extends g {
  constructor() {
    super(), this._defaultConfigs = { autoplay: false, fluid: false, fullscreen: false, loop: false, muted: false, preload: "auto", responsive: false, startTime: 0 }, this._prevPlayingState = false, this.currentMetadata = null, this.element = null, this.mimeType = null, this.sensorModel = null, this.state = "not-ready", this.waitingTimestamp = null, this._initController = () => {
      !this._controller && this.playerUrl && (this.element = document.createElement("video"), dh.log.level("error"), this._controller = dh(this.element, this._defaultConfigs), this._controller.muted(this.muted), this._controller.loop(this.loop), this._controller.playbackRate(this.rate), this._controller.ready(this._handleReady), this._controller.on("canplay", this._handleCanPlay), this._controller.on("durationchange", this._handleDurationChange), this._controller.on("ended", this._handleEnded), this._controller.on("error", this._handleError), this._controller.on("loadeddata", this._handleDataLoaded), this._controller.on("loadedmetadata", this._handleLoadedMetadata), this._controller.on("loadstart", this._handleLoadStart), this._controller.on("play", this._handlePlay), this._controller.on("timeupdate", this._handleTimeUpdate), this._controller.on("waiting", this._handleWaiting), this._controller.on("xhr-hooks-ready", this._handleXHRhooksReady));
    }, this._handleReady = () => {
      this.state = "ready";
    }, this._handleCanPlay = () => {
      this._prevPlayingState = "playing" === this.state, this.state = "can-play";
    }, this._handleCueChange = () => {
      var _a2, _b, _c2, _d2, _e2, _f, _g2;
      if (!((_b = (_a2 = this.subtitleTrack) == null ? void 0 : _a2.activeCues) == null ? void 0 : _b.length)) return;
      const e8 = (_c2 = this.subtitleTrack) == null ? void 0 : _c2.activeCues[0], t3 = e8.text ? JSON.parse(e8.text) : null;
      if (!((_d2 = t3 == null ? void 0 : t3.data) == null ? void 0 : _d2.length)) return;
      const i2 = ((_e2 = t3.data[0]) == null ? void 0 : _e2.value) ?? [], s3 = /* @__PURE__ */ new Map();
      for (const n5 of i2) {
        if (Array.isArray(n5.value)) if (90064 === n5.tagId) s3.set(n5.tagId, n5);
        else {
          n5.value.forEach((e9) => {
            s3.set(e9.tagId, e9);
          });
        }
        else s3.set(n5.tagId, n5);
      }
      s3.set(s2.EsriVideoWidth, { name: "Video Width", tagId: s2.EsriVideoWidth, value: (_f = this._controller) == null ? void 0 : _f.videoWidth() }), s3.set(s2.EsriVideoHeight, { name: "Video Height", tagId: s2.EsriVideoHeight, value: (_g2 = this._controller) == null ? void 0 : _g2.videoHeight() }), this.currentMetadata = new Map(s3), this.sensorModel = new y2({ videoMetadata: this.currentMetadata });
    }, this._handleDataLoaded = () => {
      var _a2, _b;
      this.state = "data-loaded", this._set("videoWidth", (_a2 = this._controller) == null ? void 0 : _a2.videoWidth()), this._set("videoHeight", (_b = this._controller) == null ? void 0 : _b.videoHeight());
    }, this._handleDurationChange = () => this.notifyChange("duration"), this._handleEnded = () => {
      if (!this.loop) return this._set("ended", true), this.notifyChange("buffered"), this.notifyChange("currentTime"), this.notifyChange("duration"), this.notifyChange("waiting"), void (this.state = "can-play");
      this.setCurrentTime(0), this.play();
    }, this._handleError = () => {
      var _a2;
      n.getLogger(this).error("video stream error ::", (_a2 = this._controller) == null ? void 0 : _a2.error());
    }, this._handleLoadStart = () => {
      this.state = "can-play";
    }, this._handleLoadedMetadata = () => {
      this.notifyChange("subtitleTrack"), this.notifyChange("buffered");
    }, this._handlePlay = () => this.notifyChange("ended"), this._handleTimeUpdate = () => {
      var _a2, _b;
      this.notifyChange("currentTime"), this.notifyChange("buffered"), this.notifyChange("bufferedPercent"), this._set("videoWidth", (_a2 = this._controller) == null ? void 0 : _a2.videoWidth()), this._set("videoHeight", (_b = this._controller) == null ? void 0 : _b.videoHeight());
    }, this._handleWaiting = () => {
      var _a2;
      this.waitingTimestamp = (_a2 = this._controller) == null ? void 0 : _a2.currentTime();
    }, this._handleXHRhooksReady = () => {
      var _a2, _b;
      const e8 = (e9) => (e9.xhr = new s(), e9);
      (_b = (_a2 = this._controller) == null ? void 0 : _a2.tech(true)) == null ? void 0 : _b.vhs.xhr.onRequest(e8);
    };
  }
  initialize() {
    this.addHandles([d(() => this.playerUrl, (e8) => {
      var _a2;
      e8 && (this._initController(), this.mimeType = m4(e8), (_a2 = this._controller) == null ? void 0 : _a2.src({ type: this.mimeType, src: this.playerUrl }));
    }, P), d(() => this.subtitleTrack, () => {
      this.subtitleTrack && (this.subtitleTrack.mode = "showing");
    })]), this.addHandles(v(() => this.subtitleTrack, "cuechange", this._handleCueChange));
  }
  destroy() {
    var _a2;
    (_a2 = this._controller) == null ? void 0 : _a2.dispose();
  }
  get buffered() {
    var _a2;
    return ((_a2 = this._controller) == null ? void 0 : _a2.bufferedEnd()) ?? 0;
  }
  get bufferedPercent() {
    var _a2;
    return ((_a2 = this._controller) == null ? void 0 : _a2.bufferedPercent()) ?? 0;
  }
  get crossOrigin() {
    var _a2;
    return ((_a2 = this._controller) == null ? void 0 : _a2.crossOrigin()) ?? this._get("crossOrigin");
  }
  set crossOrigin(e8) {
    var _a2;
    (_a2 = this._controller) == null ? void 0 : _a2.crossOrigin(e8), this._set("crossOrigin", e8);
  }
  get currentTime() {
    var _a2;
    return ((_a2 = this._controller) == null ? void 0 : _a2.currentTime()) ?? 0;
  }
  get duration() {
    var _a2;
    return ((_a2 = this._controller) == null ? void 0 : _a2.duration()) ?? 0;
  }
  get ended() {
    var _a2;
    return ((_a2 = this._controller) == null ? void 0 : _a2.ended()) ?? this._get("ended") ?? true;
  }
  set ended(e8) {
    var _a2;
    (_a2 = this._controller) == null ? void 0 : _a2.ended(e8), this._set("ended", e8);
  }
  get loop() {
    var _a2;
    return ((_a2 = this._controller) == null ? void 0 : _a2.loop()) ?? this._get("loop") ?? false;
  }
  set loop(e8) {
    var _a2;
    (_a2 = this._controller) == null ? void 0 : _a2.loop(e8), this._set("loop", e8);
  }
  get muted() {
    var _a2;
    return ((_a2 = this._controller) == null ? void 0 : _a2.muted()) ?? this._get("muted") ?? false;
  }
  set muted(e8) {
    var _a2;
    (_a2 = this._controller) == null ? void 0 : _a2.muted(e8), this._set("muted", e8);
  }
  get playerUrl() {
    var _a2;
    return ((_a2 = this._controller) == null ? void 0 : _a2.src()) || "";
  }
  set playerUrl(e8) {
    this._set("playerUrl", e8);
  }
  get playing() {
    return !this.ended && ("can-play" === this.state ? this._prevPlayingState : "playing" === this.state);
  }
  get playsInline() {
    var _a2;
    const e8 = (_a2 = this._controller) == null ? void 0 : _a2.playsinline();
    return e8 ?? this._get("playsInline") ?? false;
  }
  set playsInline(e8) {
    var _a2;
    (_a2 = this._controller) == null ? void 0 : _a2.playsinline(e8), this._set("playsInline", e8);
  }
  get rate() {
    var _a2;
    return ((_a2 = this._controller) == null ? void 0 : _a2.playbackRate()) ?? this._get("rate") ?? 1;
  }
  set rate(e8) {
    var _a2;
    (_a2 = this._controller) == null ? void 0 : _a2.playbackRate(e8), this._set("rate", e8);
  }
  get started() {
    var _a2;
    return ((_a2 = this._controller) == null ? void 0 : _a2.hasStarted()) || false;
  }
  get subtitleTrack() {
    var _a2;
    const e8 = (_a2 = this._controller) == null ? void 0 : _a2.textTracks();
    return (e8 == null ? void 0 : e8.length) ? Array.from(e8).find((e9) => "subtitles" === e9.kind) : null;
  }
  get waiting() {
    return !this.waitingTimestamp && (this.waitingTimestamp === this.currentTime || (this.waitingTimestamp = null, false));
  }
  pause() {
    var _a2;
    (_a2 = this._controller) == null ? void 0 : _a2.pause(), this.state = "paused";
  }
  play() {
    var _a2;
    return this.state = "playing", (_a2 = this._controller) == null ? void 0 : _a2.play();
  }
  reset() {
    this._controller && (this.pause(), this.setCurrentTime(0), this._set("ended", true));
  }
  setCurrentTime(e8) {
    var _a2;
    const t3 = r2(e8, 0, this.duration);
    (_a2 = this._controller) == null ? void 0 : _a2.currentTime(t3), this.notifyChange("currentTime");
  }
};
r([m()], wg.prototype, "buffered", null), r([m()], wg.prototype, "bufferedPercent", null), r([m()], wg.prototype, "crossOrigin", null), r([m({ readOnly: true })], wg.prototype, "currentTime", null), r([m()], wg.prototype, "currentMetadata", void 0), r([m({ readOnly: true })], wg.prototype, "duration", null), r([m()], wg.prototype, "element", void 0), r([m({ readOnly: true })], wg.prototype, "ended", null), r([m()], wg.prototype, "loop", null), r([m()], wg.prototype, "mimeType", void 0), r([m()], wg.prototype, "muted", null), r([m()], wg.prototype, "playerUrl", null), r([m({ readOnly: true })], wg.prototype, "playing", null), r([m()], wg.prototype, "playsInline", null), r([m()], wg.prototype, "rate", null), r([m()], wg.prototype, "sensorModel", void 0), r([m({ readOnly: true })], wg.prototype, "started", null), r([m()], wg.prototype, "state", void 0), r([m()], wg.prototype, "subtitleTrack", null), r([m({ readOnly: true })], wg.prototype, "videoHeight", void 0), r([m({ readOnly: true })], wg.prototype, "videoWidth", void 0), r([m({ readOnly: true })], wg.prototype, "waiting", null), r([m()], wg.prototype, "waitingTimestamp", void 0), wg = r([a("esri.layers.video.VideoController")], wg);
var Cg = wg;

export {
  n3 as n,
  l,
  d2 as d,
  g3 as g,
  f,
  L,
  P5 as P,
  Cg
};
//# sourceMappingURL=chunk-5AGXSIZF.js.map
