import {
  e,
  s,
  t
} from "./chunk-HQLPC24M.js";
import {
  n
} from "./chunk-7AOPU62X.js";
import {
  i
} from "./chunk-WE4EKKVR.js";
import {
  r
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/chunks/pe.js
var t2;
var o = null;
function r2() {
  return !!o;
}
function n2() {
  return !!has("esri-wasm");
}
function _() {
  return t2 || (t2 = import("./pe-wasm-7LH3U5G6.js").then((e2) => e2.p).then(({ default: t3 }) => t3({ locateFile: (t4) => n(`esri/geometry/support/${t4}`) })).then((e2) => {
    d(e2);
  }), t2);
}
var P;
var s2;
!function(e2) {
  function t3(e3, t4, r5) {
    o.ensureCache.prepare();
    const n4 = D(r5), _4 = r5 === n4, P4 = o.ensureFloat64(n4), s5 = o._pe_geog_to_proj(o.getPointer(e3), t4, P4);
    return s5 && R(r5, t4, P4, _4), s5;
  }
  function r4(e3, o4, r5, _4) {
    switch (_4) {
      case s2.PE_TRANSFORM_P_TO_G:
        return n3(e3, o4, r5);
      case s2.PE_TRANSFORM_G_TO_P:
        return t3(e3, o4, r5);
    }
    return 0;
  }
  function n3(e3, t4, o4) {
    return _3(e3, t4, o4, 0);
  }
  function _3(e3, t4, r5, n4) {
    o.ensureCache.prepare();
    const _4 = D(r5), P4 = r5 === _4, s5 = o.ensureFloat64(_4), i3 = o._pe_proj_to_geog_center(o.getPointer(e3), t4, s5, n4);
    return i3 && R(r5, t4, s5, P4), i3;
  }
  e2.geogToProj = t3, e2.projGeog = r4, e2.projToGeog = n3, e2.projToGeogCenter = _3;
}(P || (P = {})), function(e2) {
  function t3() {
    e2.PE_BUFFER_MAX = o.PeDefs.prototype.PE_BUFFER_MAX, e2.PE_NAME_MAX = o.PeDefs.prototype.PE_NAME_MAX, e2.PE_MGRS_MAX = o.PeDefs.prototype.PE_MGRS_MAX, e2.PE_USNG_MAX = o.PeDefs.prototype.PE_USNG_MAX, e2.PE_DD_MAX = o.PeDefs.prototype.PE_DD_MAX, e2.PE_DDM_MAX = o.PeDefs.prototype.PE_DDM_MAX, e2.PE_DMS_MAX = o.PeDefs.prototype.PE_DMS_MAX, e2.PE_UTM_MAX = o.PeDefs.prototype.PE_UTM_MAX, e2.PE_PARM_MAX = o.PeDefs.prototype.PE_PARM_MAX, e2.PE_TYPE_NONE = o.PeDefs.prototype.PE_TYPE_NONE, e2.PE_TYPE_GEOGCS = o.PeDefs.prototype.PE_TYPE_GEOGCS, e2.PE_TYPE_PROJCS = o.PeDefs.prototype.PE_TYPE_PROJCS, e2.PE_TYPE_GEOGTRAN = o.PeDefs.prototype.PE_TYPE_GEOGTRAN, e2.PE_TYPE_COORDSYS = o.PeDefs.prototype.PE_TYPE_COORDSYS, e2.PE_TYPE_UNIT = o.PeDefs.prototype.PE_TYPE_UNIT, e2.PE_TYPE_LINUNIT = o.PeDefs.prototype.PE_TYPE_LINUNIT, e2.PE_STR_OPTS_NONE = o.PeDefs.prototype.PE_STR_OPTS_NONE, e2.PE_STR_AUTH_NONE = o.PeDefs.prototype.PE_STR_AUTH_NONE, e2.PE_STR_AUTH_TOP = o.PeDefs.prototype.PE_STR_AUTH_TOP, e2.PE_STR_NAME_CANON = o.PeDefs.prototype.PE_STR_NAME_CANON, e2.PE_STR_FMT_WKT = o.PeDefs.prototype.PE_STR_FMT_WKT, e2.PE_STR_FMT_WKT2 = o.PeDefs.prototype.PE_STR_FMT_WKT2, e2.PE_PARM_X0 = o.PeDefs.prototype.PE_PARM_X0, e2.PE_PARM_ND = o.PeDefs.prototype.PE_PARM_ND, e2.PE_TRANSFORM_1_TO_2 = o.PeDefs.prototype.PE_TRANSFORM_1_TO_2, e2.PE_TRANSFORM_2_TO_1 = o.PeDefs.prototype.PE_TRANSFORM_2_TO_1, e2.PE_TRANSFORM_P_TO_G = o.PeDefs.prototype.PE_TRANSFORM_P_TO_G, e2.PE_TRANSFORM_G_TO_P = o.PeDefs.prototype.PE_TRANSFORM_G_TO_P, e2.PE_HORIZON_RECT = o.PeDefs.prototype.PE_HORIZON_RECT, e2.PE_HORIZON_POLY = o.PeDefs.prototype.PE_HORIZON_POLY, e2.PE_HORIZON_LINE = o.PeDefs.prototype.PE_HORIZON_LINE, e2.PE_HORIZON_DELTA = o.PeDefs.prototype.PE_HORIZON_DELTA;
  }
  e2.init = t3;
}(s2 || (s2 = {}));
var i2 = null;
var p;
!function(e2) {
  const t3 = {}, r4 = {}, n3 = (e3) => {
    const t4 = e3.getType();
    switch (t4) {
      case s2.PE_TYPE_GEOGCS:
        e3 = o.castObject(e3, o.PeGeogcs);
        break;
      case s2.PE_TYPE_PROJCS:
        e3 = o.castObject(e3, o.PeProjcs);
        break;
      case s2.PE_TYPE_GEOGTRAN:
        e3 = o.castObject(e3, o.PeGeogtran);
        break;
      default:
        t4 & s2.PE_TYPE_UNIT && (e3 = o.castObject(e3, o.PeUnit));
    }
    return e3;
  };
  function _3() {
    o.PeFactory.prototype.initialize(null);
  }
  function P4(e3) {
    return i3(s2.PE_TYPE_COORDSYS, e3);
  }
  function i3(e3, r5) {
    let _4 = null, P5 = t3[e3];
    if (P5 || (P5 = {}, t3[e3] = P5), P5.hasOwnProperty(String(r5)) && (_4 = P5[r5], o.compare(_4, o.NULL) && (_4 = null)), !_4) {
      const t4 = o.PeFactory.prototype.factoryByType(e3, r5);
      o.compare(t4, o.NULL) || (_4 = n3(t4), P5[r5] = _4);
    }
    return _4;
  }
  function p5(e3, t4) {
    let _4 = null, P5 = r4[e3];
    if (P5 || (P5 = {}, r4[e3] = P5), P5.hasOwnProperty(t4) && (_4 = P5[t4], o.compare(_4, o.NULL) && (_4 = null)), !_4) {
      const r5 = o.PeFactory.prototype.fromString(e3, t4);
      o.compare(r5, o.NULL) || (_4 = n3(r5), P5[t4] = _4);
    }
    return _4;
  }
  function u4(e3) {
    return i3(s2.PE_TYPE_GEOGCS, e3);
  }
  function E5(e3) {
    return i3(s2.PE_TYPE_GEOGTRAN, e3);
  }
  function c3(e3) {
    return o.PeFactory.prototype.getCode(e3);
  }
  function a2(e3) {
    return i3(s2.PE_TYPE_PROJCS, e3);
  }
  function g3(e3) {
    return i3(s2.PE_TYPE_UNIT, e3);
  }
  e2.initialize = _3, e2.coordsys = P4, e2.factoryByType = i3, e2.fromString = p5, e2.geogcs = u4, e2.geogtran = E5, e2.getCode = c3, e2.projcs = a2, e2.unit = g3;
}(p || (p = {}));
var u = null;
var E;
var c;
var a;
var g;
var T;
var f;
var l;
var y;
var S;
var O;
var N;
function d(e2) {
  function t3(e3, t4, o4) {
    e3[t4] = o4(e3[t4]);
  }
  o = e2, s2.init(), E.init(), l.init(), S.init(), O.init(), i2 = class extends o.PeDouble {
    constructor(e3 = NaN) {
      super(e3);
    }
    destroy() {
      o.destroy(this);
    }
    [Symbol.dispose]() {
      this.destroy();
    }
  }, u = class extends o.PeGCSExtent {
    destroy() {
      o.destroy(this);
    }
    [Symbol.dispose]() {
      this.destroy();
    }
  };
  const r4 = [o.PeAngunit, o.PeDatum, o.PeGeogcs, o.PeGeogtran, o.PeObject, o.PeParameter, o.PePrimem, o.PeProjcs, o.PeSpheroid, o.PeUnit];
  for (const o4 of r4) t3(o4.prototype, "getName", (e3) => function() {
    return e3.call(this, new Array(s2.PE_NAME_MAX));
  });
  for (const P4 of [o.PeGeogtran, o.PeProjcs]) t3(P4.prototype, "getParameters", (e3) => function() {
    const t4 = new Array(s2.PE_PARM_MAX);
    let r5 = e3.call(this);
    for (let e4 = 0; e4 < t4.length; e4++) {
      const n4 = o.getValue(r5, "*");
      t4[e4] = n4 ? o.wrapPointer(n4, o.PeParameter) : null, r5 += Int32Array.BYTES_PER_ELEMENT;
    }
    return t4;
  });
  t3(o.PeHorizon.prototype, "getCoord", (e3) => function(t4 = false) {
    const o4 = this.getSize();
    if (!o4) return null;
    const r5 = [];
    return R(r5, o4, e3.call(this), t4), r5;
  }), t3(o.PeGTlistExtendedEntry.prototype, "getEntries", (e3) => {
    const t4 = o._pe_getPeGTlistExtendedGTsSize();
    return function() {
      let r5 = null;
      const n4 = e3.call(this);
      if (!o.compare(n4, o.NULL)) {
        r5 = [n4];
        const e4 = this.getSteps();
        if (e4 > 1) {
          const _4 = o.getPointer(n4);
          for (let n5 = 1; n5 < e4; n5++) r5.push(o.wrapPointer(_4 + t4 * n5, o.PeGTlistExtendedGTs));
        }
      }
      return r5;
    };
  });
  const n3 = o._pe_getPeHorizonSize(), _3 = (e3) => function() {
    let t4 = this._cache;
    if (t4 || (t4 = /* @__PURE__ */ new Map(), this._cache = t4), t4.has(e3)) return t4.get(e3);
    let r5 = null;
    const _4 = e3.call(this);
    if (!o.compare(_4, o.NULL)) {
      r5 = [_4];
      const e4 = _4.getNump();
      if (e4 > 1) {
        const t5 = o.getPointer(_4);
        for (let _5 = 1; _5 < e4; _5++) r5.push(o.wrapPointer(t5 + n3 * _5, o.PeHorizon));
      }
    }
    return t4.set(e3, r5), r5;
  };
  t3(o.PeProjcs.prototype, "horizonGcsGenerate", _3), t3(o.PeProjcs.prototype, "horizonPcsGenerate", _3), o.PeObject.prototype.toString = function(e3 = s2.PE_STR_OPTS_NONE) {
    o.ensureCache.prepare();
    const t4 = o.getPointer(this), r5 = o.ensureInt8(new Array(s2.PE_BUFFER_MAX));
    return o.UTF8ToString(o._pe_object_to_string_ext(t4, e3, r5));
  }, o.PeGeogcs.prototype.destroy = function() {
    this.Delete(), M(this), this.ptr = 0;
  }, o.PeGeogcs.prototype[Symbol.dispose] = function() {
    this.destroy();
  }, o.PeProjcs.prototype.destroy = function() {
    this.Delete(), M(this), this.ptr = 0;
  }, o.PeProjcs.prototype[Symbol.dispose] = function() {
    this.destroy();
  };
}
function M(e2) {
  if (!e2) return;
  const t3 = o.getClass(e2);
  if (!t3) return;
  const r4 = o.getCache(t3);
  if (!r4) return;
  const n3 = o.getPointer(e2);
  n3 && delete r4[n3];
}
function A(e2, t3) {
  const r4 = [], n3 = new Array(t3);
  for (let _3 = 0; _3 < e2; _3++) r4.push(o.ensureInt8(n3));
  return r4;
}
function D(e2) {
  return ArrayBuffer.isView(e2) ? e2 : Array.isArray(e2[0]) ? e2.flat() : e2;
}
function R(e2, t3, r4, n3 = false) {
  if (n3) for (let _3 = 0; _3 < 2 * t3; _3++) e2[_3] = o.getValue(r4 + _3 * Float64Array.BYTES_PER_ELEMENT, "double");
  else {
    const n4 = 0 === e2.length;
    for (let _3 = 0; _3 < t3; _3++) n4 && (e2[_3] = new Array(2)), e2[_3][0] = o.getValue(r4, "double"), e2[_3][1] = o.getValue(r4 + Float64Array.BYTES_PER_ELEMENT, "double"), r4 += 2 * Float64Array.BYTES_PER_ELEMENT;
  }
}
!function(e2) {
  let t3;
  function r4() {
    e2.PE_GTLIST_OPTS_COMMON = o.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON, t3 = o._pe_getPeGTlistExtendedEntrySize();
  }
  function n3(e3, r5, n4, _3, P4, s5) {
    let i3 = null;
    const p5 = new o.PeInteger(s5);
    try {
      const u4 = o.PeGTlistExtended.prototype.getGTlist(e3, r5, n4, _3, P4, p5);
      if ((s5 = p5.val) && (i3 = [u4], s5 > 1)) {
        const e4 = o.getPointer(u4);
        for (let r6 = 1; r6 < s5; r6++) i3.push(o.wrapPointer(e4 + t3 * r6, o.PeGTlistExtendedEntry));
      }
    } finally {
      o.destroy(p5);
    }
    return i3;
  }
  e2.init = r4, e2.getGTlist = n3;
}(E || (E = {})), function(e2) {
  function t3(e3) {
    if (e3 == null ? void 0 : e3.length) {
      for (const t4 of e3) M(t4), t4.getEntries().forEach((e4) => {
        M(e4);
        const t5 = e4.getGeogtran();
        M(t5), t5.getParameters().forEach(M), [t5.getGeogcs1(), t5.getGeogcs2()].forEach((e5) => {
          M(e5);
          const t6 = e5.getDatum();
          M(t6), M(t6.getSpheroid()), M(e5.getPrimem()), M(e5.getUnit());
        });
      });
      o.PeGTlistExtendedEntry.prototype.Delete(e3[0]);
    }
  }
  e2.destroy = t3;
}(c || (c = {})), function(e2) {
  function t3(e3, t4, r4, n3, _3) {
    o.ensureCache.prepare();
    const P4 = D(r4), s5 = r4 === P4, i3 = o.ensureFloat64(P4);
    let p5 = 0;
    n3 && (p5 = o.ensureFloat64(n3));
    const u4 = o._pe_geog_to_geog(o.getPointer(e3), t4, i3, p5, _3);
    return u4 && R(r4, t4, i3, s5), u4;
  }
  e2.geogToGeog = t3;
}(a || (a = {})), function(e2) {
  function t3(e3, t4, r5, n4, _4, P4, s5, i3) {
    o.PeLineType.prototype.geodesic_coordinate(e3, t4, r5, n4, _4, P4, s5, i3);
  }
  function r4(e3, t4, r5, n4, _4, P4, s5, i3, p5) {
    o.PeLineType.prototype.geodetic_coordinate(e3, t4, r5, n4, _4, P4, s5, i3, p5);
  }
  function n3(e3, t4, r5, n4, _4, P4, s5, i3, p5, u4) {
    o.PeLineType.prototype.geodetic_distance(e3, t4, r5, n4, _4, P4, s5, i3, p5, u4);
  }
  function _3(e3, t4, r5, n4, _4, P4, s5, i3, p5) {
    o.PeLineType.prototype.great_elliptic_distance(e3, t4, r5, n4, _4, P4, s5, i3, p5);
  }
  e2.geodesicCoordinate = t3, e2.geodeticCoordinate = r4, e2.geodeticDistance = n3, e2.greatEllipticDistance = _3;
}(g || (g = {})), function(e2) {
  function t3(e3, t4) {
    return o.PeMath.prototype.phi_to_eta(e3, t4);
  }
  function r4(e3, t4) {
    return o.PeMath.prototype.eta_to_phi(e3, t4);
  }
  function n3(e3, t4) {
    return o.PeMath.prototype.phi_to_phig(e3, t4);
  }
  function _3(e3, t4, r5) {
    return o.PeMath.prototype.q(e3, t4, r5);
  }
  function P4(e3, t4) {
    return o.PeMath.prototype.q90(e3, t4);
  }
  e2.phiToEta = t3, e2.etaToPhi = r4, e2.phiToPhig = n3, e2.q = _3, e2.q90 = P4;
}(T || (T = {})), function(e2) {
  const t3 = (e3, t4, r5, n4, _4, P5) => {
    let i4, p6;
    switch (o.ensureCache.prepare(), e3) {
      case "dd":
        i4 = o._pe_geog_to_dd, p6 = s2.PE_DD_MAX;
        break;
      case "ddm":
        i4 = o._pe_geog_to_ddm, p6 = s2.PE_DDM_MAX;
        break;
      case "dms":
        i4 = o._pe_geog_to_dms, p6 = s2.PE_DMS_MAX;
    }
    let u5 = 0;
    t4 && (u5 = o.getPointer(t4));
    const E5 = D(n4), c3 = o.ensureFloat64(E5), a2 = A(r5, p6), g3 = i4(u5, r5, c3, _4, o.ensureInt32(a2));
    if (g3) for (let s5 = 0; s5 < r5; s5++) P5[s5] = o.UTF8ToString(a2[s5]);
    return g3;
  }, r4 = (e3, t4, r5, n4, _4) => {
    let P5;
    switch (o.ensureCache.prepare(), e3) {
      case "dd":
        P5 = o._pe_dd_to_geog;
        break;
      case "ddm":
        P5 = o._pe_ddm_to_geog;
        break;
      case "dms":
        P5 = o._pe_dms_to_geog;
    }
    let s5 = 0;
    t4 && (s5 = o.getPointer(t4));
    const i4 = n4.map((e4) => o.ensureString(e4)), p6 = o.ensureInt32(i4), u5 = o.ensureFloat64(new Array(2 * r5)), E5 = P5(s5, r5, p6, u5);
    return E5 && R(_4, r5, u5), E5;
  };
  function n3(e3, o4, r5, n4, _4) {
    return t3("dms", e3, o4, r5, n4, _4);
  }
  function _3(e3, t4, o4, n4) {
    return r4("dms", e3, t4, o4, n4);
  }
  function P4(e3, o4, r5, n4, _4) {
    return t3("ddm", e3, o4, r5, n4, _4);
  }
  function i3(e3, t4, o4, n4) {
    return r4("ddm", e3, t4, o4, n4);
  }
  function p5(e3, o4, r5, n4, _4) {
    return t3("dd", e3, o4, r5, n4, _4);
  }
  function u4(e3, t4, o4, n4) {
    return r4("dd", e3, t4, o4, n4);
  }
  e2.geogToDms = n3, e2.dmsToGeog = _3, e2.geogToDdm = P4, e2.ddmToGeog = i3, e2.geogToDd = p5, e2.ddToGeog = u4;
}(f || (f = {})), function(e2) {
  function t3() {
    e2.PE_MGRS_STYLE_NEW = o.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW, e2.PE_MGRS_STYLE_OLD = o.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD, e2.PE_MGRS_STYLE_AUTO = o.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO, e2.PE_MGRS_180_ZONE_1_PLUS = o.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS, e2.PE_MGRS_ADD_SPACES = o.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES;
  }
  function r4(e3, t4, r5, n4, _3, P4, i3) {
    o.ensureCache.prepare();
    let p5 = 0;
    e3 && (p5 = o.getPointer(e3));
    const u4 = D(r5), E5 = o.ensureFloat64(u4), c3 = A(t4, s2.PE_MGRS_MAX), a2 = o.ensureInt32(c3), g3 = o._pe_geog_to_mgrs_extended(p5, t4, E5, n4, _3, P4, a2);
    if (g3) for (let s5 = 0; s5 < t4; s5++) i3[s5] = o.UTF8ToString(c3[s5]);
    return g3;
  }
  function n3(e3, t4, r5, n4, _3) {
    o.ensureCache.prepare();
    let P4 = 0;
    e3 && (P4 = o.getPointer(e3));
    const s5 = r5.map((e4) => o.ensureString(e4)), i3 = o.ensureInt32(s5), p5 = o.ensureFloat64(new Array(2 * t4)), u4 = o._pe_mgrs_to_geog_extended(P4, t4, i3, n4, p5);
    return u4 && R(_3, t4, p5), u4;
  }
  e2.init = t3, e2.geogToMgrsExtended = r4, e2.mgrsToGeogExtended = n3;
}(l || (l = {})), function(e2) {
  function t3(e3, t4, r5, n3, _3, P4, i3) {
    o.ensureCache.prepare();
    let p5 = 0;
    e3 && (p5 = o.getPointer(e3));
    const u4 = D(r5), E5 = o.ensureFloat64(u4), c3 = A(t4, s2.PE_MGRS_MAX), a2 = o.ensureInt32(c3), g3 = o._pe_geog_to_usng(p5, t4, E5, n3, _3, P4, a2);
    if (g3) for (let s5 = 0; s5 < t4; s5++) i3[s5] = o.UTF8ToString(c3[s5]);
    return g3;
  }
  function r4(e3, t4, r5, n3) {
    o.ensureCache.prepare();
    let _3 = 0;
    e3 && (_3 = o.getPointer(e3));
    const P4 = r5.map((e4) => o.ensureString(e4)), s5 = o.ensureInt32(P4), i3 = o.ensureFloat64(new Array(2 * t4)), p5 = o._pe_usng_to_geog(_3, t4, s5, i3);
    return p5 && R(n3, t4, i3), p5;
  }
  e2.geogToUsng = t3, e2.usngToGeog = r4;
}(y || (y = {})), function(e2) {
  function t3() {
    e2.PE_UTM_OPTS_NONE = o.PeNotationUtm.prototype.PE_UTM_OPTS_NONE, e2.PE_UTM_OPTS_ADD_SPACES = o.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES, e2.PE_UTM_OPTS_NS = o.PeNotationUtm.prototype.PE_UTM_OPTS_NS;
  }
  function r4(e3, t4, r5, n4, _3) {
    o.ensureCache.prepare();
    let P4 = 0;
    e3 && (P4 = o.getPointer(e3));
    const i3 = D(r5), p5 = o.ensureFloat64(i3), u4 = A(t4, s2.PE_UTM_MAX), E5 = o.ensureInt32(u4), c3 = o._pe_geog_to_utm(P4, t4, p5, n4, E5);
    if (c3) for (let s5 = 0; s5 < t4; s5++) _3[s5] = o.UTF8ToString(u4[s5]);
    return c3;
  }
  function n3(e3, t4, r5, n4, _3) {
    o.ensureCache.prepare();
    let P4 = 0;
    e3 && (P4 = o.getPointer(e3));
    const s5 = r5.map((e4) => o.ensureString(e4)), i3 = o.ensureInt32(s5), p5 = o.ensureFloat64(new Array(2 * t4)), u4 = o._pe_utm_to_geog(P4, t4, i3, n4, p5);
    return u4 && R(_3, t4, p5), u4;
  }
  e2.init = t3, e2.geogToUtm = r4, e2.utmToGeog = n3;
}(S || (S = {})), function(e2) {
  const t3 = /* @__PURE__ */ new Map();
  function r4() {
    e2.PE_PCSINFO_OPTION_NONE = o.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE, e2.PE_PCSINFO_OPTION_DOMAIN = o.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN, e2.PE_POLE_OUTSIDE_BOUNDARY = o.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY, e2.PE_POLE_POINT = o.PePCSInfo.prototype.PE_POLE_POINT;
  }
  function n3(r5, n4 = e2.PE_PCSINFO_OPTION_DOMAIN) {
    let _3 = null, P4 = null;
    return t3.has(r5) && (P4 = t3.get(r5), P4[n4] && (_3 = P4[n4])), _3 || (_3 = o.PePCSInfo.prototype.generate(r5, n4), P4 || (P4 = [], t3.set(r5, P4)), P4[n4] = _3), _3;
  }
  e2.init = r4, e2.generate = n3;
}(O || (O = {})), function(e2) {
  function t3() {
    return o.PeVersion.prototype.version_string();
  }
  e2.versionString = t3;
}(N || (N = {}));
var G = Object.freeze(Object.defineProperty({ __proto__: null, get PeCSTransformations() {
  return P;
}, get PeDefs() {
  return s2;
}, get PeDouble() {
  return i2;
}, get PeFactory() {
  return p;
}, get PeGCSExtent() {
  return u;
}, get PeGTTransformations() {
  return a;
}, get PeGTlistExtended() {
  return E;
}, get PeGTlistExtendedEntry() {
  return c;
}, get PeLineType() {
  return g;
}, get PeMath() {
  return T;
}, get PeNotationDms() {
  return f;
}, get PeNotationMgrs() {
  return l;
}, get PeNotationUsng() {
  return y;
}, get PeNotationUtm() {
  return S;
}, get PePCSInfo() {
  return O;
}, get PeVersion() {
  return N;
}, _init: d, get _pe() {
  return o;
}, isLoaded: r2, isSupported: n2, load: _ }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/geometry/support/WKIDUnitConversion.js
var o2;
var r3 = { values: [1, 0.3048, 0.3048006096012192, 0.3047972654, 0.9143917962, 0.201166195164, 0.9143984146160287, 0.3047994715386762, 20.11676512155263, 20.11678249437587, 0.9143985307444408, 0.91439523, 0.3047997101815088, 20.1168, 20.116756, 5e4, 15e4], units: ["Meter", "Foot", "Foot_US", "Foot_Clarke", "Yard_Clarke", "Link_Clarke", "Yard_Sears", "Foot_Sears", "Chain_Sears", "Chain_Benoit_1895_B", "Yard_Indian", "Yard_Indian_1937", "Foot_Gold_Coast", "Chain", "Chain_Sears_1922_Truncated", "50_Kilometers", "150_Kilometers"], 2066: 5, 2136: 12, 2155: 2, 2157: 0, 2158: 0, 2159: 12, 2160: 12, 2204: 2, 2219: 0, 2220: 0, 2254: 2, 2255: 2, 2256: 1, 2265: 1, 2266: 1, 2267: 2, 2268: 2, 2269: 1, 2270: 1, 2271: 2, 2272: 2, 2273: 1, 2294: 0, 2295: 0, 2314: 3, 2899: 2, 2900: 2, 2901: 1, 2909: 1, 2910: 1, 2911: 2, 2912: 2, 2913: 1, 2914: 1, 2992: 1, 2993: 0, 2994: 1, 3080: 1, 3089: 2, 3090: 0, 3091: 2, 3102: 2, 3141: 0, 3142: 0, 3167: 14, 3359: 2, 3360: 0, 3361: 1, 3362: 0, 3363: 2, 3364: 0, 3365: 2, 3366: 3, 3404: 2, 3405: 0, 3406: 0, 3407: 3, 3439: 0, 3440: 0, 3479: 1, 3480: 0, 3481: 1, 3482: 0, 3483: 1, 3484: 0, 3485: 2, 3486: 0, 3487: 2, 3488: 0, 3489: 0, 3490: 2, 3491: 0, 3492: 2, 3493: 0, 3494: 2, 3495: 0, 3496: 2, 3497: 0, 3498: 2, 3499: 0, 3500: 2, 3501: 0, 3502: 2, 3503: 0, 3504: 2, 3505: 0, 3506: 2, 3507: 0, 3508: 2, 3509: 0, 3510: 2, 3511: 0, 3512: 2, 3513: 0, 3514: 0, 3515: 2, 3516: 0, 3517: 2, 3518: 0, 3519: 2, 3520: 0, 3521: 2, 3522: 0, 3523: 2, 3524: 0, 3525: 2, 3526: 0, 3527: 2, 3528: 0, 3529: 2, 3530: 0, 3531: 2, 3532: 0, 3533: 2, 3534: 0, 3535: 2, 3536: 0, 3537: 2, 3538: 0, 3539: 2, 3540: 0, 3541: 2, 3542: 0, 3543: 2, 3544: 0, 3545: 2, 3546: 0, 3547: 2, 3548: 0, 3549: 2, 3550: 0, 3551: 2, 3552: 0, 3553: 2, 3582: 2, 3583: 0, 3584: 2, 3585: 0, 3586: 2, 3587: 0, 3588: 1, 3589: 0, 3590: 1, 3591: 0, 3592: 0, 3593: 1, 3598: 2, 3599: 0, 3600: 2, 3605: 1, 3606: 0, 3607: 0, 3608: 2, 3609: 0, 3610: 2, 3611: 0, 3612: 2, 3613: 0, 3614: 2, 3615: 0, 3616: 2, 3617: 0, 3618: 2, 3619: 0, 3620: 2, 3621: 0, 3622: 2, 3623: 0, 3624: 2, 3625: 0, 3626: 2, 3627: 0, 3628: 2, 3629: 0, 3630: 2, 3631: 0, 3632: 2, 3633: 0, 3634: 1, 3635: 0, 3636: 1, 3640: 2, 3641: 0, 3642: 2, 3643: 0, 3644: 1, 3645: 0, 3646: 1, 3647: 0, 3648: 1, 3649: 0, 3650: 2, 3651: 0, 3652: 2, 3653: 0, 3654: 2, 3655: 0, 3656: 1, 3657: 0, 3658: 2, 3659: 0, 3660: 2, 3661: 0, 3662: 2, 3663: 0, 3664: 2, 3668: 2, 3669: 0, 3670: 2, 3671: 0, 3672: 2, 3673: 0, 3674: 2, 3675: 0, 3676: 1, 3677: 2, 3678: 0, 3679: 1, 3680: 2, 3681: 0, 3682: 1, 3683: 2, 3684: 0, 3685: 0, 3686: 2, 3687: 0, 3688: 2, 3689: 0, 3690: 2, 3691: 0, 3692: 2, 3696: 2, 3697: 0, 3698: 2, 3699: 0, 3700: 2, 3793: 0, 3794: 0, 3812: 0, 3854: 0, 3857: 0, 3920: 0, 3978: 0, 3979: 0, 3991: 2, 3992: 2, 4026: 0, 4037: 0, 4038: 0, 4071: 0, 4082: 0, 4083: 0, 4087: 0, 4088: 0, 4217: 2, 4414: 0, 4415: 0, 4417: 0, 4434: 0, 4437: 0, 4438: 2, 4439: 2, 4462: 0, 4467: 0, 4471: 0, 4474: 0, 4559: 0, 4647: 0, 4822: 0, 4826: 0, 4839: 0, 5018: 0, 5041: 0, 5042: 0, 5048: 0, 5221: 0, 5223: 0, 5234: 0, 5235: 0, 5243: 0, 5247: 0, 5266: 0, 5316: 0, 5320: 0, 5321: 0, 5325: 0, 5337: 0, 5361: 0, 5362: 0, 5367: 0, 5382: 0, 5383: 0, 5396: 0, 5456: 0, 5457: 0, 5469: 0, 5472: 4, 5490: 0, 5513: 0, 5514: 0, 5523: 0, 5559: 0, 5588: 1, 5589: 3, 5596: 0, 5627: 0, 5629: 0, 5641: 0, 5643: 0, 5644: 0, 5646: 2, 5654: 2, 5655: 2, 5659: 0, 5700: 0, 5825: 0, 5836: 0, 5837: 0, 5839: 0, 5842: 0, 5844: 0, 5858: 0, 5879: 0, 5880: 0, 5887: 0, 5890: 0, 6128: 1, 6129: 1, 6141: 1, 6204: 0, 6210: 0, 6211: 0, 6307: 0, 6312: 0, 6316: 0, 6362: 0, 6391: 1, 6405: 1, 6406: 0, 6407: 1, 6408: 0, 6409: 1, 6410: 0, 6411: 2, 6412: 0, 6413: 2, 6414: 0, 6415: 0, 6416: 2, 6417: 0, 6418: 2, 6419: 0, 6420: 2, 6421: 0, 6422: 2, 6423: 0, 6424: 2, 6425: 0, 6426: 2, 6427: 0, 6428: 2, 6429: 0, 6430: 2, 6431: 0, 6432: 2, 6433: 0, 6434: 2, 6435: 0, 6436: 2, 6437: 0, 6438: 2, 6439: 0, 6440: 0, 6441: 2, 6442: 0, 6443: 2, 6444: 0, 6445: 2, 6446: 0, 6447: 2, 6448: 0, 6449: 2, 6450: 0, 6451: 2, 6452: 0, 6453: 2, 6454: 0, 6455: 2, 6456: 0, 6457: 2, 6458: 0, 6459: 2, 6460: 0, 6461: 2, 6462: 0, 6463: 2, 6464: 0, 6465: 2, 6466: 0, 6467: 2, 6468: 0, 6469: 2, 6470: 0, 6471: 2, 6472: 0, 6473: 2, 6474: 0, 6475: 2, 6476: 0, 6477: 2, 6478: 0, 6479: 2, 6484: 2, 6485: 0, 6486: 2, 6487: 0, 6488: 2, 6489: 0, 6490: 2, 6491: 0, 6492: 2, 6493: 0, 6494: 1, 6495: 0, 6496: 1, 6497: 0, 6498: 0, 6499: 1, 6500: 0, 6501: 2, 6502: 0, 6503: 2, 6504: 0, 6505: 2, 6506: 0, 6507: 2, 6508: 0, 6509: 0, 6510: 2, 6515: 1, 6516: 0, 6518: 0, 6519: 2, 6520: 0, 6521: 2, 6522: 0, 6523: 2, 6524: 0, 6525: 2, 6526: 0, 6527: 2, 6528: 0, 6529: 2, 6530: 0, 6531: 2, 6532: 0, 6533: 2, 6534: 0, 6535: 2, 6536: 0, 6537: 2, 6538: 0, 6539: 2, 6540: 0, 6541: 2, 6542: 0, 6543: 2, 6544: 0, 6545: 1, 6546: 0, 6547: 1, 6548: 0, 6549: 2, 6550: 0, 6551: 2, 6552: 0, 6553: 2, 6554: 0, 6555: 2, 6556: 0, 6557: 1, 6558: 0, 6559: 1, 6560: 0, 6561: 1, 6562: 0, 6563: 2, 6564: 0, 6565: 2, 6566: 0, 6567: 0, 6568: 2, 6569: 0, 6570: 1, 6571: 0, 6572: 2, 6573: 0, 6574: 2, 6575: 0, 6576: 2, 6577: 0, 6578: 2, 6582: 2, 6583: 0, 6584: 2, 6585: 0, 6586: 2, 6587: 0, 6588: 2, 6589: 0, 6590: 2, 6591: 0, 6592: 0, 6593: 2, 6594: 0, 6595: 2, 6596: 0, 6597: 2, 6598: 0, 6599: 2, 6600: 0, 6601: 2, 6602: 0, 6603: 2, 6605: 2, 6606: 0, 6607: 2, 6608: 0, 6609: 2, 6610: 0, 6611: 0, 6612: 2, 6613: 0, 6614: 2, 6615: 0, 6616: 2, 6617: 0, 6618: 2, 6633: 2, 6646: 0, 6703: 0, 6784: 0, 6785: 1, 6786: 0, 6787: 1, 6788: 0, 6789: 1, 6790: 0, 6791: 1, 6792: 0, 6793: 1, 6794: 0, 6795: 1, 6796: 0, 6797: 1, 6798: 0, 6799: 1, 6800: 0, 6801: 1, 6802: 0, 6803: 1, 6804: 0, 6805: 1, 6806: 0, 6807: 1, 6808: 0, 6809: 1, 6810: 0, 6811: 1, 6812: 0, 6813: 1, 6814: 0, 6815: 1, 6816: 0, 6817: 1, 6818: 0, 6819: 1, 6820: 0, 6821: 1, 6822: 0, 6823: 1, 6824: 0, 6825: 1, 6826: 0, 6827: 1, 6828: 0, 6829: 1, 6830: 0, 6831: 1, 6832: 0, 6833: 1, 6834: 0, 6835: 1, 6836: 0, 6837: 1, 6838: 0, 6839: 1, 6840: 0, 6841: 1, 6842: 0, 6843: 1, 6844: 0, 6845: 1, 6846: 0, 6847: 1, 6848: 0, 6849: 1, 6850: 0, 6851: 1, 6852: 0, 6853: 1, 6854: 0, 6855: 1, 6856: 0, 6857: 1, 6858: 0, 6859: 1, 6860: 0, 6861: 1, 6862: 0, 6863: 1, 6867: 0, 6868: 1, 6870: 0, 6875: 0, 6876: 0, 6879: 0, 6880: 2, 6884: 0, 6885: 1, 6886: 0, 6887: 1, 6915: 0, 6922: 0, 6923: 2, 6924: 0, 6925: 2, 6962: 0, 6984: 0, 6991: 0, 7128: 2, 7131: 0, 7132: 2, 7142: 0, 7257: 0, 7258: 2, 7259: 0, 7260: 2, 7261: 0, 7262: 2, 7263: 0, 7264: 2, 7265: 0, 7266: 2, 7267: 0, 7268: 2, 7269: 0, 7270: 2, 7271: 0, 7272: 2, 7273: 0, 7274: 2, 7275: 0, 7276: 2, 7277: 0, 7278: 2, 7279: 0, 7280: 2, 7281: 0, 7282: 2, 7283: 0, 7284: 2, 7285: 0, 7286: 2, 7287: 0, 7288: 2, 7289: 0, 7290: 2, 7291: 0, 7292: 2, 7293: 0, 7294: 2, 7295: 0, 7296: 2, 7297: 0, 7298: 2, 7299: 0, 7300: 2, 7301: 0, 7302: 2, 7303: 0, 7304: 2, 7305: 0, 7306: 2, 7307: 0, 7308: 2, 7309: 0, 7310: 2, 7311: 0, 7312: 2, 7313: 0, 7314: 2, 7315: 0, 7316: 2, 7317: 0, 7318: 2, 7319: 0, 7320: 2, 7321: 0, 7322: 2, 7323: 0, 7324: 2, 7325: 0, 7326: 2, 7327: 0, 7328: 2, 7329: 0, 7330: 2, 7331: 0, 7332: 2, 7333: 0, 7334: 2, 7335: 0, 7336: 2, 7337: 0, 7338: 2, 7339: 0, 7340: 2, 7341: 0, 7342: 2, 7343: 0, 7344: 2, 7345: 0, 7346: 2, 7347: 0, 7348: 2, 7349: 0, 7350: 2, 7351: 0, 7352: 2, 7353: 0, 7354: 2, 7355: 0, 7356: 2, 7357: 0, 7358: 2, 7359: 0, 7360: 2, 7361: 0, 7362: 2, 7363: 0, 7364: 2, 7365: 0, 7366: 2, 7367: 0, 7368: 2, 7369: 0, 7370: 2, 7877: 0, 7878: 0, 7882: 0, 7883: 0, 7887: 0, 7899: 0, 7991: 0, 7992: 0, 8035: 2, 8036: 2, 8058: 0, 8059: 0, 8082: 0, 8083: 0, 8088: 0, 8090: 0, 8091: 2, 8092: 0, 8093: 2, 8095: 0, 8096: 2, 8097: 0, 8098: 2, 8099: 0, 8100: 2, 8101: 0, 8102: 2, 8103: 0, 8104: 2, 8105: 0, 8106: 2, 8107: 0, 8108: 2, 8109: 0, 8110: 2, 8111: 0, 8112: 2, 8113: 0, 8114: 2, 8115: 0, 8116: 2, 8117: 0, 8118: 2, 8119: 0, 8120: 2, 8121: 0, 8122: 2, 8123: 0, 8124: 2, 8125: 0, 8126: 2, 8127: 0, 8128: 2, 8129: 0, 8130: 2, 8131: 0, 8132: 2, 8133: 0, 8134: 2, 8135: 0, 8136: 2, 8137: 0, 8138: 2, 8139: 0, 8140: 2, 8141: 0, 8142: 2, 8143: 0, 8144: 2, 8145: 0, 8146: 2, 8147: 0, 8148: 2, 8149: 0, 8150: 2, 8151: 0, 8152: 2, 8153: 0, 8154: 2, 8155: 0, 8156: 2, 8157: 0, 8158: 2, 8159: 0, 8160: 2, 8161: 0, 8162: 2, 8163: 0, 8164: 2, 8165: 0, 8166: 2, 8167: 0, 8168: 2, 8169: 0, 8170: 2, 8171: 0, 8172: 2, 8173: 0, 8177: 2, 8179: 0, 8180: 2, 8181: 0, 8182: 2, 8184: 0, 8185: 2, 8187: 0, 8189: 2, 8191: 0, 8193: 2, 8196: 0, 8197: 2, 8198: 0, 8200: 2, 8201: 0, 8202: 2, 8203: 0, 8204: 2, 8205: 0, 8206: 2, 8207: 0, 8208: 2, 8209: 0, 8210: 2, 8212: 0, 8213: 2, 8214: 0, 8216: 2, 8218: 0, 8220: 2, 8222: 0, 8224: 2, 8225: 0, 8226: 2, 8311: 0, 8312: 1, 8313: 0, 8314: 1, 8315: 0, 8316: 1, 8317: 0, 8318: 1, 8319: 0, 8320: 1, 8321: 0, 8322: 1, 8323: 0, 8324: 1, 8325: 0, 8326: 1, 8327: 0, 8328: 1, 8329: 0, 8330: 1, 8331: 0, 8332: 1, 8333: 0, 8334: 1, 8335: 0, 8336: 1, 8337: 0, 8338: 1, 8339: 0, 8340: 1, 8341: 0, 8342: 1, 8343: 0, 8344: 1, 8345: 0, 8346: 1, 8347: 0, 8348: 1, 8352: 0, 8353: 0, 8379: 0, 8380: 2, 8381: 0, 8382: 2, 8383: 0, 8384: 2, 8385: 0, 8387: 2, 8391: 0, 8395: 0, 8433: 0, 8441: 0, 8455: 0, 8456: 0, 8531: 2, 8682: 0, 8686: 0, 8687: 0, 8692: 0, 8693: 0, 8826: 0, 8903: 0, 8950: 0, 8951: 0, 9039: 0, 9040: 0, 9141: 0, 9149: 0, 9150: 0, 9191: 0, 9221: 0, 9222: 0, 9249: 0, 9250: 0, 9252: 0, 9254: 0, 9265: 0, 9284: 0, 9285: 0, 9300: 0, 9354: 0, 9367: 0, 9373: 0, 9377: 0, 9387: 0, 9391: 0, 9456: 0, 9473: 0, 9498: 0, 9674: 0, 9678: 0, 9680: 0, 9709: 0, 9712: 0, 9713: 0, 9716: 0, 9741: 0, 9748: 2, 9749: 2, 9761: 0, 9766: 0, 9793: 0, 9794: 0, 9869: 0, 9874: 0, 9875: 0, 9880: 0, 9895: 0, 9943: 0, 9945: 0, 9947: 0, 9967: 0, 9972: 0, 9977: 0, 10160: 0, 10183: 0, 10188: 0, 10194: 0, 10199: 0, 10207: 0, 10212: 0, 10217: 0, 10222: 0, 10227: 0, 10235: 0, 10240: 0, 10250: 0, 10254: 0, 10270: 0, 10275: 0, 10280: 0, 10306: 0, 10329: 0, 10471: 0, 10477: 0, 10481: 2, 10516: 2, 10592: 0, 10594: 0, 10596: 0, 10598: 0, 10601: 0, 10603: 0, 10626: 0, 10632: 0, 10665: 0, 20002: 0, 20042: 0, 20050: 1, 20499: 0, 20538: 0, 20539: 0, 20790: 0, 20791: 0, 21291: 0, 21292: 0, 21500: 0, 21817: 0, 21818: 0, 22032: 0, 22033: 0, 22091: 0, 22092: 0, 22239: 0, 22240: 0, 22332: 0, 22337: 0, 22338: 0, 22391: 0, 22392: 0, 22639: 0, 22700: 0, 22739: 0, 22770: 0, 22780: 0, 22832: 0, 23090: 0, 23095: 0, 23239: 0, 23240: 0, 23433: 0, 23700: 0, 24047: 0, 24048: 0, 24100: 3, 24200: 0, 24305: 0, 24306: 0, 24382: 10, 24383: 0, 24500: 0, 24547: 0, 24548: 0, 24571: 9, 24600: 0, 25e3: 0, 25231: 0, 25884: 0, 25932: 0, 26237: 0, 26331: 0, 26332: 0, 26432: 0, 26591: 0, 26592: 0, 26632: 0, 26692: 0, 27120: 0, 27200: 0, 27291: 6, 27292: 6, 27429: 0, 27492: 0, 27493: 0, 27500: 0, 28232: 0, 28600: 0, 28991: 0, 28992: 0, 29100: 0, 29101: 0, 29220: 0, 29221: 0, 29333: 0, 29635: 0, 29636: 0, 29701: 0, 29738: 0, 29739: 0, 29849: 0, 29850: 0, 29871: 8, 29872: 7, 29873: 0, 29874: 0, 30200: 5, 30339: 0, 30340: 0, 30591: 0, 30592: 0, 30791: 0, 30792: 0, 30800: 0, 31028: 0, 31121: 0, 31154: 0, 31170: 0, 31171: 0, 31370: 0, 31528: 0, 31529: 0, 31600: 0, 31700: 0, 31838: 0, 31839: 0, 31900: 0, 31901: 0, 32061: 0, 32062: 0, 32098: 0, 32099: 2, 32100: 0, 32104: 0, 32161: 0, 32766: 0, 53048: 0, 53049: 0, 54090: 0, 54091: 0, 65061: 2, 65062: 2, 65161: 0, 65163: 0, 102041: 2, 102064: 11, 102068: 15, 102069: 16, 102118: 2, 102119: 1, 102120: 2, 102121: 2, 102217: 2, 102218: 0, 102219: 2, 102220: 2, 102378: 1, 102379: 1, 102380: 0, 102381: 1, 102589: 2, 102599: 2, 102600: 2, 102604: 2, 102647: 0, 102704: 2, 102705: 2, 102706: 0, 102731: 0, 102732: 0, 102759: 1, 102760: 1, 102761: 2, 102762: 0, 102763: 2, 102764: 0, 102765: 0, 102766: 2, 102970: 1, 102974: 2, 102993: 0, 102994: 0, 102995: 2, 102996: 2, 103015: 0, 103016: 2, 103017: 0, 103018: 2, 103025: 0, 103026: 0, 103027: 2, 103028: 2, 103035: 0, 103036: 0, 103037: 2, 103038: 2, 103039: 0, 103040: 0, 103041: 2, 103042: 2, 103043: 0, 103044: 0, 103045: 2, 103046: 2, 103047: 0, 103048: 0, 103049: 2, 103050: 2, 103051: 0, 103052: 2, 103053: 0, 103054: 2, 103055: 0, 103056: 2, 103057: 0, 103058: 0, 103059: 2, 103060: 2, 103061: 0, 103062: 0, 103063: 2, 103064: 2, 103069: 2, 103070: 0, 103071: 0, 103072: 2, 103073: 2, 103086: 0, 103087: 0, 103088: 2, 103089: 2, 103094: 1, 103095: 0, 103096: 2, 103103: 0, 103104: 2, 103105: 0, 103106: 2, 103121: 0, 103122: 2, 103123: 0, 103124: 0, 103125: 1, 103126: 1, 103127: 0, 103128: 0, 103129: 2, 103130: 2, 103131: 0, 103132: 0, 103133: 2, 103134: 2, 103135: 0, 103136: 0, 103137: 1, 103138: 1, 103139: 0, 103140: 2, 103141: 0, 103142: 2, 103143: 0, 103144: 2, 103145: 0, 103146: 1, 103147: 0, 103148: 0, 103149: 2, 103150: 2, 103151: 0, 103152: 2, 103172: 0, 103173: 2, 103174: 0, 103175: 0, 103176: 2, 103177: 2, 103178: 0, 103179: 0, 103180: 2, 103181: 2, 103182: 0, 103183: 0, 103184: 2, 103185: 2, 103228: 0, 103229: 0, 103230: 2, 103231: 2, 103250: 0, 103251: 2, 103252: 0, 103253: 2, 103260: 0, 103261: 0, 103262: 2, 103263: 2, 103270: 0, 103271: 0, 103272: 2, 103273: 2, 103274: 0, 103275: 0, 103276: 2, 103277: 2, 103278: 0, 103279: 0, 103280: 2, 103281: 2, 103282: 0, 103283: 0, 103284: 2, 103285: 2, 103286: 0, 103287: 2, 103288: 0, 103289: 2, 103290: 0, 103291: 2, 103292: 0, 103293: 0, 103294: 2, 103295: 2, 103296: 0, 103297: 0, 103298: 2, 103299: 2, 103376: 2, 103377: 0, 103378: 0, 103379: 2, 103380: 2, 103393: 0, 103394: 0, 103395: 2, 103396: 2, 103472: 0, 103473: 1, 103474: 0, 103475: 2, 103482: 0, 103483: 2, 103484: 0, 103485: 2, 103500: 0, 103501: 2, 103502: 0, 103503: 0, 103504: 1, 103505: 1, 103506: 0, 103507: 0, 103508: 2, 103509: 2, 103510: 0, 103511: 0, 103512: 2, 103513: 2, 103514: 0, 103515: 2, 103516: 0, 103517: 2, 103518: 0, 103519: 2, 103520: 0, 103521: 1, 103522: 0, 103523: 0, 103524: 2, 103525: 2, 103526: 0, 103527: 2, 103561: 2, 103562: 2, 103563: 0, 103564: 0, 103565: 2, 103566: 2, 103567: 0, 103568: 0, 103569: 2, 103570: 2, 103584: 0, 103585: 2, 103586: 0, 103587: 2, 103588: 1, 103589: 0, 103590: 2, 103591: 1, 103592: 0, 103593: 2, 103594: 1, 103695: 2, 103897: 1, 103978: 2, 103979: 0, 103980: 2, 103981: 0 };
for (o2 = 2e3; o2 <= 2045; o2++) r3[o2] = 0;
for (o2 = 2056; o2 <= 2065; o2++) r3[o2] = 0;
for (o2 = 2067; o2 <= 2135; o2++) r3[o2] = 0;
for (o2 = 2137; o2 <= 2154; o2++) r3[o2] = 0;
for (o2 = 2161; o2 <= 2170; o2++) r3[o2] = 0;
for (o2 = 2172; o2 <= 2193; o2++) r3[o2] = 0;
for (o2 = 2195; o2 <= 2198; o2++) r3[o2] = 0;
for (o2 = 2200; o2 <= 2203; o2++) r3[o2] = 0;
for (o2 = 2205; o2 <= 2217; o2++) r3[o2] = 0;
for (o2 = 2222; o2 <= 2224; o2++) r3[o2] = 1;
for (o2 = 2225; o2 <= 2250; o2++) r3[o2] = 2;
for (o2 = 2251; o2 <= 2253; o2++) r3[o2] = 1;
for (o2 = 2257; o2 <= 2264; o2++) r3[o2] = 2;
for (o2 = 2274; o2 <= 2279; o2++) r3[o2] = 2;
for (o2 = 2280; o2 <= 2282; o2++) r3[o2] = 1;
for (o2 = 2283; o2 <= 2289; o2++) r3[o2] = 2;
for (o2 = 2290; o2 <= 2292; o2++) r3[o2] = 0;
for (o2 = 2308; o2 <= 2313; o2++) r3[o2] = 0;
for (o2 = 2315; o2 <= 2491; o2++) r3[o2] = 0;
for (o2 = 2494; o2 <= 2866; o2++) r3[o2] = 0;
for (o2 = 2867; o2 <= 2869; o2++) r3[o2] = 1;
for (o2 = 2870; o2 <= 2888; o2++) r3[o2] = 2;
for (o2 = 2891; o2 <= 2895; o2++) r3[o2] = 2;
for (o2 = 2896; o2 <= 2898; o2++) r3[o2] = 1;
for (o2 = 2902; o2 <= 2908; o2++) r3[o2] = 2;
for (o2 = 2915; o2 <= 2920; o2++) r3[o2] = 2;
for (o2 = 2921; o2 <= 2923; o2++) r3[o2] = 1;
for (o2 = 2924; o2 <= 2930; o2++) r3[o2] = 2;
for (o2 = 2931; o2 <= 2962; o2++) r3[o2] = 0;
for (o2 = 2964; o2 <= 2968; o2++) r3[o2] = 2;
for (o2 = 2969; o2 <= 2973; o2++) r3[o2] = 0;
for (o2 = 2975; o2 <= 2991; o2++) r3[o2] = 0;
for (o2 = 2995; o2 <= 3051; o2++) r3[o2] = 0;
for (o2 = 3054; o2 <= 3079; o2++) r3[o2] = 0;
for (o2 = 3081; o2 <= 3088; o2++) r3[o2] = 0;
for (o2 = 3092; o2 <= 3101; o2++) r3[o2] = 0;
for (o2 = 3106; o2 <= 3138; o2++) r3[o2] = 0;
for (o2 = 3146; o2 <= 3151; o2++) r3[o2] = 0;
for (o2 = 3153; o2 <= 3166; o2++) r3[o2] = 0;
for (o2 = 3168; o2 <= 3172; o2++) r3[o2] = 0;
for (o2 = 3174; o2 <= 3203; o2++) r3[o2] = 0;
for (o2 = 3294; o2 <= 3358; o2++) r3[o2] = 0;
for (o2 = 3367; o2 <= 3403; o2++) r3[o2] = 0;
for (o2 = 3408; o2 <= 3416; o2++) r3[o2] = 0;
for (o2 = 3417; o2 <= 3438; o2++) r3[o2] = 2;
for (o2 = 3441; o2 <= 3446; o2++) r3[o2] = 2;
for (o2 = 3447; o2 <= 3450; o2++) r3[o2] = 0;
for (o2 = 3451; o2 <= 3459; o2++) r3[o2] = 2;
for (o2 = 3460; o2 <= 3478; o2++) r3[o2] = 0;
for (o2 = 3554; o2 <= 3559; o2++) r3[o2] = 0;
for (o2 = 3560; o2 <= 3570; o2++) r3[o2] = 2;
for (o2 = 3571; o2 <= 3581; o2++) r3[o2] = 0;
for (o2 = 3594; o2 <= 3597; o2++) r3[o2] = 0;
for (o2 = 3601; o2 <= 3604; o2++) r3[o2] = 0;
for (o2 = 3637; o2 <= 3639; o2++) r3[o2] = 0;
for (o2 = 3665; o2 <= 3667; o2++) r3[o2] = 0;
for (o2 = 3693; o2 <= 3695; o2++) r3[o2] = 0;
for (o2 = 3701; o2 <= 3727; o2++) r3[o2] = 0;
for (o2 = 3728; o2 <= 3739; o2++) r3[o2] = 2;
for (o2 = 3740; o2 <= 3751; o2++) r3[o2] = 0;
for (o2 = 3753; o2 <= 3760; o2++) r3[o2] = 2;
for (o2 = 3761; o2 <= 3773; o2++) r3[o2] = 0;
for (o2 = 3775; o2 <= 3777; o2++) r3[o2] = 0;
for (o2 = 3779; o2 <= 3781; o2++) r3[o2] = 0;
for (o2 = 3783; o2 <= 3785; o2++) r3[o2] = 0;
for (o2 = 3788; o2 <= 3791; o2++) r3[o2] = 0;
for (o2 = 3797; o2 <= 3802; o2++) r3[o2] = 0;
for (o2 = 3814; o2 <= 3816; o2++) r3[o2] = 0;
for (o2 = 3825; o2 <= 3829; o2++) r3[o2] = 0;
for (o2 = 3832; o2 <= 3841; o2++) r3[o2] = 0;
for (o2 = 3844; o2 <= 3852; o2++) r3[o2] = 0;
for (o2 = 3873; o2 <= 3885; o2++) r3[o2] = 0;
for (o2 = 3890; o2 <= 3893; o2++) r3[o2] = 0;
for (o2 = 3907; o2 <= 3912; o2++) r3[o2] = 0;
for (o2 = 3942; o2 <= 3950; o2++) r3[o2] = 0;
for (o2 = 3968; o2 <= 3970; o2++) r3[o2] = 0;
for (o2 = 3973; o2 <= 3976; o2++) r3[o2] = 0;
for (o2 = 3986; o2 <= 3989; o2++) r3[o2] = 0;
for (o2 = 3994; o2 <= 3997; o2++) r3[o2] = 0;
for (o2 = 4048; o2 <= 4051; o2++) r3[o2] = 0;
for (o2 = 4056; o2 <= 4063; o2++) r3[o2] = 0;
for (o2 = 4093; o2 <= 4096; o2++) r3[o2] = 0;
for (o2 = 4390; o2 <= 4398; o2++) r3[o2] = 0;
for (o2 = 4399; o2 <= 4413; o2++) r3[o2] = 2;
for (o2 = 4418; o2 <= 4433; o2++) r3[o2] = 2;
for (o2 = 4455; o2 <= 4457; o2++) r3[o2] = 2;
for (o2 = 4484; o2 <= 4489; o2++) r3[o2] = 0;
for (o2 = 4491; o2 <= 4554; o2++) r3[o2] = 0;
for (o2 = 4568; o2 <= 4589; o2++) r3[o2] = 0;
for (o2 = 4652; o2 <= 4656; o2++) r3[o2] = 0;
for (o2 = 4766; o2 <= 4800; o2++) r3[o2] = 0;
for (o2 = 5014; o2 <= 5016; o2++) r3[o2] = 0;
for (o2 = 5069; o2 <= 5072; o2++) r3[o2] = 0;
for (o2 = 5105; o2 <= 5130; o2++) r3[o2] = 0;
for (o2 = 5167; o2 <= 5188; o2++) r3[o2] = 0;
for (o2 = 5253; o2 <= 5259; o2++) r3[o2] = 0;
for (o2 = 5269; o2 <= 5275; o2++) r3[o2] = 0;
for (o2 = 5292; o2 <= 5311; o2++) r3[o2] = 0;
for (o2 = 5329; o2 <= 5331; o2++) r3[o2] = 0;
for (o2 = 5343; o2 <= 5349; o2++) r3[o2] = 0;
for (o2 = 5355; o2 <= 5357; o2++) r3[o2] = 0;
for (o2 = 5387; o2 <= 5389; o2++) r3[o2] = 0;
for (o2 = 5459; o2 <= 5463; o2++) r3[o2] = 0;
for (o2 = 5479; o2 <= 5482; o2++) r3[o2] = 0;
for (o2 = 5518; o2 <= 5520; o2++) r3[o2] = 0;
for (o2 = 5530; o2 <= 5539; o2++) r3[o2] = 0;
for (o2 = 5550; o2 <= 5552; o2++) r3[o2] = 0;
for (o2 = 5562; o2 <= 5583; o2++) r3[o2] = 0;
for (o2 = 5623; o2 <= 5625; o2++) r3[o2] = 2;
for (o2 = 5631; o2 <= 5639; o2++) r3[o2] = 0;
for (o2 = 5649; o2 <= 5653; o2++) r3[o2] = 0;
for (o2 = 5663; o2 <= 5680; o2++) r3[o2] = 0;
for (o2 = 5682; o2 <= 5685; o2++) r3[o2] = 0;
for (o2 = 5875; o2 <= 5877; o2++) r3[o2] = 0;
for (o2 = 5896; o2 <= 5899; o2++) r3[o2] = 0;
for (o2 = 5921; o2 <= 5940; o2++) r3[o2] = 0;
for (o2 = 6050; o2 <= 6125; o2++) r3[o2] = 0;
for (o2 = 6244; o2 <= 6275; o2++) r3[o2] = 0;
for (o2 = 6328; o2 <= 6348; o2++) r3[o2] = 0;
for (o2 = 6350; o2 <= 6356; o2++) r3[o2] = 0;
for (o2 = 6366; o2 <= 6372; o2++) r3[o2] = 0;
for (o2 = 6381; o2 <= 6387; o2++) r3[o2] = 0;
for (o2 = 6393; o2 <= 6404; o2++) r3[o2] = 0;
for (o2 = 6480; o2 <= 6483; o2++) r3[o2] = 0;
for (o2 = 6511; o2 <= 6514; o2++) r3[o2] = 0;
for (o2 = 6579; o2 <= 6581; o2++) r3[o2] = 0;
for (o2 = 6619; o2 <= 6624; o2++) r3[o2] = 0;
for (o2 = 6625; o2 <= 6627; o2++) r3[o2] = 2;
for (o2 = 6628; o2 <= 6632; o2++) r3[o2] = 0;
for (o2 = 6634; o2 <= 6637; o2++) r3[o2] = 0;
for (o2 = 6669; o2 <= 6692; o2++) r3[o2] = 0;
for (o2 = 6707; o2 <= 6709; o2++) r3[o2] = 0;
for (o2 = 6720; o2 <= 6723; o2++) r3[o2] = 0;
for (o2 = 6732; o2 <= 6738; o2++) r3[o2] = 0;
for (o2 = 6931; o2 <= 6933; o2++) r3[o2] = 0;
for (o2 = 6956; o2 <= 6959; o2++) r3[o2] = 0;
for (o2 = 7005; o2 <= 7007; o2++) r3[o2] = 0;
for (o2 = 7057; o2 <= 7070; o2++) r3[o2] = 2;
for (o2 = 7074; o2 <= 7082; o2++) r3[o2] = 0;
for (o2 = 7109; o2 <= 7118; o2++) r3[o2] = 0;
for (o2 = 7119; o2 <= 7127; o2++) r3[o2] = 1;
for (o2 = 7374; o2 <= 7376; o2++) r3[o2] = 0;
for (o2 = 7528; o2 <= 7586; o2++) r3[o2] = 0;
for (o2 = 7587; o2 <= 7645; o2++) r3[o2] = 2;
for (o2 = 7692; o2 <= 7696; o2++) r3[o2] = 0;
for (o2 = 7755; o2 <= 7787; o2++) r3[o2] = 0;
for (o2 = 7791; o2 <= 7795; o2++) r3[o2] = 0;
for (o2 = 7799; o2 <= 7801; o2++) r3[o2] = 0;
for (o2 = 7803; o2 <= 7805; o2++) r3[o2] = 0;
for (o2 = 7825; o2 <= 7831; o2++) r3[o2] = 0;
for (o2 = 7845; o2 <= 7859; o2++) r3[o2] = 0;
for (o2 = 8013; o2 <= 8032; o2++) r3[o2] = 0;
for (o2 = 8065; o2 <= 8068; o2++) r3[o2] = 1;
for (o2 = 8518; o2 <= 8529; o2++) r3[o2] = 2;
for (o2 = 8533; o2 <= 8536; o2++) r3[o2] = 2;
for (o2 = 8538; o2 <= 8540; o2++) r3[o2] = 2;
for (o2 = 8677; o2 <= 8679; o2++) r3[o2] = 0;
for (o2 = 8836; o2 <= 8840; o2++) r3[o2] = 0;
for (o2 = 8857; o2 <= 8859; o2++) r3[o2] = 0;
for (o2 = 8908; o2 <= 8910; o2++) r3[o2] = 0;
for (o2 = 9154; o2 <= 9159; o2++) r3[o2] = 0;
for (o2 = 9205; o2 <= 9218; o2++) r3[o2] = 0;
for (o2 = 9271; o2 <= 9273; o2++) r3[o2] = 0;
for (o2 = 9295; o2 <= 9297; o2++) r3[o2] = 0;
for (o2 = 9356; o2 <= 9360; o2++) r3[o2] = 0;
for (o2 = 9404; o2 <= 9407; o2++) r3[o2] = 0;
for (o2 = 9476; o2 <= 9482; o2++) r3[o2] = 0;
for (o2 = 9487; o2 <= 9494; o2++) r3[o2] = 0;
for (o2 = 9697; o2 <= 9699; o2++) r3[o2] = 0;
for (o2 = 9821; o2 <= 9865; o2++) r3[o2] = 0;
for (o2 = 10285; o2 <= 10291; o2++) r3[o2] = 0;
for (o2 = 10314; o2 <= 10317; o2++) r3[o2] = 0;
for (o2 = 10448; o2 <= 10465; o2++) r3[o2] = 0;
for (o2 = 10731; o2 <= 10733; o2++) r3[o2] = 0;
for (o2 = 11114; o2 <= 11118; o2++) r3[o2] = 0;
for (o2 = 20004; o2 <= 20032; o2++) r3[o2] = 0;
for (o2 = 20047; o2 <= 20049; o2++) r3[o2] = 0;
for (o2 = 20062; o2 <= 20092; o2++) r3[o2] = 0;
for (o2 = 20135; o2 <= 20138; o2++) r3[o2] = 0;
for (o2 = 20248; o2 <= 20258; o2++) r3[o2] = 0;
for (o2 = 20348; o2 <= 20358; o2++) r3[o2] = 0;
for (o2 = 20436; o2 <= 20440; o2++) r3[o2] = 0;
for (o2 = 20822; o2 <= 20824; o2++) r3[o2] = 0;
for (o2 = 20904; o2 <= 20932; o2++) r3[o2] = 0;
for (o2 = 20934; o2 <= 20936; o2++) r3[o2] = 0;
for (o2 = 21004; o2 <= 21032; o2++) r3[o2] = 0;
for (o2 = 21035; o2 <= 21037; o2++) r3[o2] = 0;
for (o2 = 21095; o2 <= 21097; o2++) r3[o2] = 0;
for (o2 = 21148; o2 <= 21150; o2++) r3[o2] = 0;
for (o2 = 21207; o2 <= 21264; o2++) r3[o2] = 0;
for (o2 = 21307; o2 <= 21364; o2++) r3[o2] = 0;
for (o2 = 21413; o2 <= 21423; o2++) r3[o2] = 0;
for (o2 = 21453; o2 <= 21463; o2++) r3[o2] = 0;
for (o2 = 21473; o2 <= 21483; o2++) r3[o2] = 0;
for (o2 = 21780; o2 <= 21782; o2++) r3[o2] = 0;
for (o2 = 21891; o2 <= 21894; o2++) r3[o2] = 0;
for (o2 = 21896; o2 <= 21899; o2++) r3[o2] = 0;
for (o2 = 22171; o2 <= 22177; o2++) r3[o2] = 0;
for (o2 = 22181; o2 <= 22187; o2++) r3[o2] = 0;
for (o2 = 22191; o2 <= 22197; o2++) r3[o2] = 0;
for (o2 = 22207; o2 <= 22222; o2++) r3[o2] = 0;
for (o2 = 22229; o2 <= 22232; o2++) r3[o2] = 0;
for (o2 = 22234; o2 <= 22236; o2++) r3[o2] = 0;
for (o2 = 22243; o2 <= 22250; o2++) r3[o2] = 0;
for (o2 = 22262; o2 <= 22265; o2++) r3[o2] = 0;
for (o2 = 22307; o2 <= 22322; o2++) r3[o2] = 0;
for (o2 = 22348; o2 <= 22357; o2++) r3[o2] = 0;
for (o2 = 22407; o2 <= 22422; o2++) r3[o2] = 0;
for (o2 = 22462; o2 <= 22465; o2++) r3[o2] = 0;
for (o2 = 22521; o2 <= 22525; o2++) r3[o2] = 0;
for (o2 = 22607; o2 <= 22622; o2++) r3[o2] = 0;
for (o2 = 22641; o2 <= 22646; o2++) r3[o2] = 0;
for (o2 = 22648; o2 <= 22657; o2++) r3[o2] = 0;
for (o2 = 22707; o2 <= 22722; o2++) r3[o2] = 0;
for (o2 = 22762; o2 <= 22765; o2++) r3[o2] = 0;
for (o2 = 22807; o2 <= 22822; o2++) r3[o2] = 0;
for (o2 = 22991; o2 <= 22994; o2++) r3[o2] = 0;
for (o2 = 23028; o2 <= 23038; o2++) r3[o2] = 0;
for (o2 = 23301; o2 <= 23333; o2++) r3[o2] = 2;
for (o2 = 23830; o2 <= 23853; o2++) r3[o2] = 0;
for (o2 = 23866; o2 <= 23872; o2++) r3[o2] = 0;
for (o2 = 23877; o2 <= 23884; o2++) r3[o2] = 0;
for (o2 = 23886; o2 <= 23894; o2++) r3[o2] = 0;
for (o2 = 23946; o2 <= 23948; o2++) r3[o2] = 0;
for (o2 = 24311; o2 <= 24313; o2++) r3[o2] = 0;
for (o2 = 24342; o2 <= 24347; o2++) r3[o2] = 0;
for (o2 = 24370; o2 <= 24374; o2++) r3[o2] = 10;
for (o2 = 24375; o2 <= 24381; o2++) r3[o2] = 0;
for (o2 = 24718; o2 <= 24721; o2++) r3[o2] = 0;
for (o2 = 24817; o2 <= 24821; o2++) r3[o2] = 0;
for (o2 = 24877; o2 <= 24882; o2++) r3[o2] = 0;
for (o2 = 24891; o2 <= 24893; o2++) r3[o2] = 0;
for (o2 = 25391; o2 <= 25395; o2++) r3[o2] = 0;
for (o2 = 25828; o2 <= 25838; o2++) r3[o2] = 0;
for (o2 = 26191; o2 <= 26195; o2++) r3[o2] = 0;
for (o2 = 26391; o2 <= 26393; o2++) r3[o2] = 0;
for (o2 = 26701; o2 <= 26722; o2++) r3[o2] = 0;
for (o2 = 26729; o2 <= 26799; o2++) r3[o2] = 2;
for (o2 = 26801; o2 <= 26803; o2++) r3[o2] = 2;
for (o2 = 26811; o2 <= 26813; o2++) r3[o2] = 2;
for (o2 = 26847; o2 <= 26870; o2++) r3[o2] = 2;
for (o2 = 26891; o2 <= 26899; o2++) r3[o2] = 0;
for (o2 = 26901; o2 <= 26923; o2++) r3[o2] = 0;
for (o2 = 26929; o2 <= 26946; o2++) r3[o2] = 0;
for (o2 = 26948; o2 <= 26998; o2++) r3[o2] = 0;
for (o2 = 27037; o2 <= 27040; o2++) r3[o2] = 0;
for (o2 = 27205; o2 <= 27232; o2++) r3[o2] = 0;
for (o2 = 27258; o2 <= 27260; o2++) r3[o2] = 0;
for (o2 = 27391; o2 <= 27398; o2++) r3[o2] = 0;
for (o2 = 27561; o2 <= 27564; o2++) r3[o2] = 0;
for (o2 = 27571; o2 <= 27574; o2++) r3[o2] = 0;
for (o2 = 27581; o2 <= 27584; o2++) r3[o2] = 0;
for (o2 = 27591; o2 <= 27594; o2++) r3[o2] = 0;
for (o2 = 27700; o2 <= 27707; o2++) r3[o2] = 0;
for (o2 = 28191; o2 <= 28193; o2++) r3[o2] = 0;
for (o2 = 28348; o2 <= 28358; o2++) r3[o2] = 0;
for (o2 = 28402; o2 <= 28432; o2++) r3[o2] = 0;
for (o2 = 28462; o2 <= 28492; o2++) r3[o2] = 0;
for (o2 = 29118; o2 <= 29122; o2++) r3[o2] = 0;
for (o2 = 29168; o2 <= 29172; o2++) r3[o2] = 0;
for (o2 = 29177; o2 <= 29185; o2++) r3[o2] = 0;
for (o2 = 29187; o2 <= 29195; o2++) r3[o2] = 0;
for (o2 = 29900; o2 <= 29903; o2++) r3[o2] = 0;
for (o2 = 30161; o2 <= 30179; o2++) r3[o2] = 0;
for (o2 = 30491; o2 <= 30494; o2++) r3[o2] = 0;
for (o2 = 30729; o2 <= 30732; o2++) r3[o2] = 0;
for (o2 = 31251; o2 <= 31259; o2++) r3[o2] = 0;
for (o2 = 31265; o2 <= 31268; o2++) r3[o2] = 0;
for (o2 = 31275; o2 <= 31279; o2++) r3[o2] = 0;
for (o2 = 31281; o2 <= 31297; o2++) r3[o2] = 0;
for (o2 = 31461; o2 <= 31469; o2++) r3[o2] = 0;
for (o2 = 31491; o2 <= 31495; o2++) r3[o2] = 0;
for (o2 = 31917; o2 <= 31922; o2++) r3[o2] = 0;
for (o2 = 31965; o2 <= 32e3; o2++) r3[o2] = 0;
for (o2 = 32001; o2 <= 32003; o2++) r3[o2] = 2;
for (o2 = 32005; o2 <= 32031; o2++) r3[o2] = 2;
for (o2 = 32033; o2 <= 32060; o2++) r3[o2] = 2;
for (o2 = 32064; o2 <= 32067; o2++) r3[o2] = 2;
for (o2 = 32074; o2 <= 32077; o2++) r3[o2] = 2;
for (o2 = 32081; o2 <= 32086; o2++) r3[o2] = 0;
for (o2 = 32107; o2 <= 32130; o2++) r3[o2] = 0;
for (o2 = 32133; o2 <= 32159; o2++) r3[o2] = 0;
for (o2 = 32164; o2 <= 32167; o2++) r3[o2] = 2;
for (o2 = 32180; o2 <= 32199; o2++) r3[o2] = 0;
for (o2 = 32201; o2 <= 32260; o2++) r3[o2] = 0;
for (o2 = 32301; o2 <= 32360; o2++) r3[o2] = 0;
for (o2 = 32401; o2 <= 32460; o2++) r3[o2] = 0;
for (o2 = 32501; o2 <= 32560; o2++) r3[o2] = 0;
for (o2 = 32601; o2 <= 32662; o2++) r3[o2] = 0;
for (o2 = 32664; o2 <= 32667; o2++) r3[o2] = 2;
for (o2 = 32701; o2 <= 32761; o2++) r3[o2] = 0;
for (o2 = 53001; o2 <= 53004; o2++) r3[o2] = 0;
for (o2 = 53008; o2 <= 53019; o2++) r3[o2] = 0;
for (o2 = 53021; o2 <= 53032; o2++) r3[o2] = 0;
for (o2 = 53034; o2 <= 53037; o2++) r3[o2] = 0;
for (o2 = 53042; o2 <= 53046; o2++) r3[o2] = 0;
for (o2 = 53074; o2 <= 53080; o2++) r3[o2] = 0;
for (o2 = 54001; o2 <= 54004; o2++) r3[o2] = 0;
for (o2 = 54008; o2 <= 54019; o2++) r3[o2] = 0;
for (o2 = 54021; o2 <= 54032; o2++) r3[o2] = 0;
for (o2 = 54034; o2 <= 54037; o2++) r3[o2] = 0;
for (o2 = 54042; o2 <= 54046; o2++) r3[o2] = 0;
for (o2 = 54048; o2 <= 54053; o2++) r3[o2] = 0;
for (o2 = 54074; o2 <= 54080; o2++) r3[o2] = 0;
for (o2 = 54098; o2 <= 54101; o2++) r3[o2] = 0;
for (o2 = 102001; o2 <= 102040; o2++) r3[o2] = 0;
for (o2 = 102042; o2 <= 102063; o2++) r3[o2] = 0;
for (o2 = 102065; o2 <= 102067; o2++) r3[o2] = 0;
for (o2 = 102070; o2 <= 102117; o2++) r3[o2] = 0;
for (o2 = 102122; o2 <= 102216; o2++) r3[o2] = 0;
for (o2 = 102221; o2 <= 102377; o2++) r3[o2] = 0;
for (o2 = 102382; o2 <= 102388; o2++) r3[o2] = 0;
for (o2 = 102389; o2 <= 102398; o2++) r3[o2] = 2;
for (o2 = 102399; o2 <= 102444; o2++) r3[o2] = 0;
for (o2 = 102445; o2 <= 102447; o2++) r3[o2] = 2;
for (o2 = 102448; o2 <= 102458; o2++) r3[o2] = 0;
for (o2 = 102459; o2 <= 102468; o2++) r3[o2] = 2;
for (o2 = 102469; o2 <= 102499; o2++) r3[o2] = 0;
for (o2 = 102500; o2 <= 102519; o2++) r3[o2] = 1;
for (o2 = 102520; o2 <= 102524; o2++) r3[o2] = 0;
for (o2 = 102525; o2 <= 102529; o2++) r3[o2] = 2;
for (o2 = 102530; o2 <= 102588; o2++) r3[o2] = 0;
for (o2 = 102590; o2 <= 102598; o2++) r3[o2] = 0;
for (o2 = 102601; o2 <= 102603; o2++) r3[o2] = 0;
for (o2 = 102605; o2 <= 102628; o2++) r3[o2] = 0;
for (o2 = 102629; o2 <= 102646; o2++) r3[o2] = 2;
for (o2 = 102648; o2 <= 102700; o2++) r3[o2] = 2;
for (o2 = 102701; o2 <= 102703; o2++) r3[o2] = 0;
for (o2 = 102707; o2 <= 102730; o2++) r3[o2] = 2;
for (o2 = 102733; o2 <= 102758; o2++) r3[o2] = 2;
for (o2 = 102767; o2 <= 102900; o2++) r3[o2] = 0;
for (o2 = 102901; o2 <= 102933; o2++) r3[o2] = 2;
for (o2 = 102934; o2 <= 102950; o2++) r3[o2] = 13;
for (o2 = 102951; o2 <= 102963; o2++) r3[o2] = 0;
for (o2 = 102965; o2 <= 102969; o2++) r3[o2] = 0;
for (o2 = 102971; o2 <= 102973; o2++) r3[o2] = 0;
for (o2 = 102975; o2 <= 102989; o2++) r3[o2] = 0;
for (o2 = 102990; o2 <= 102992; o2++) r3[o2] = 1;
for (o2 = 102997; o2 <= 103002; o2++) r3[o2] = 0;
for (o2 = 103003; o2 <= 103008; o2++) r3[o2] = 2;
for (o2 = 103009; o2 <= 103011; o2++) r3[o2] = 0;
for (o2 = 103012; o2 <= 103014; o2++) r3[o2] = 2;
for (o2 = 103019; o2 <= 103021; o2++) r3[o2] = 0;
for (o2 = 103022; o2 <= 103024; o2++) r3[o2] = 2;
for (o2 = 103029; o2 <= 103031; o2++) r3[o2] = 0;
for (o2 = 103032; o2 <= 103034; o2++) r3[o2] = 2;
for (o2 = 103065; o2 <= 103068; o2++) r3[o2] = 0;
for (o2 = 103074; o2 <= 103076; o2++) r3[o2] = 0;
for (o2 = 103077; o2 <= 103079; o2++) r3[o2] = 1;
for (o2 = 103080; o2 <= 103082; o2++) r3[o2] = 0;
for (o2 = 103083; o2 <= 103085; o2++) r3[o2] = 2;
for (o2 = 103090; o2 <= 103093; o2++) r3[o2] = 0;
for (o2 = 103097; o2 <= 103099; o2++) r3[o2] = 0;
for (o2 = 103100; o2 <= 103102; o2++) r3[o2] = 2;
for (o2 = 103107; o2 <= 103109; o2++) r3[o2] = 0;
for (o2 = 103110; o2 <= 103112; o2++) r3[o2] = 2;
for (o2 = 103113; o2 <= 103116; o2++) r3[o2] = 0;
for (o2 = 103117; o2 <= 103120; o2++) r3[o2] = 2;
for (o2 = 103153; o2 <= 103157; o2++) r3[o2] = 0;
for (o2 = 103158; o2 <= 103162; o2++) r3[o2] = 2;
for (o2 = 103163; o2 <= 103165; o2++) r3[o2] = 0;
for (o2 = 103166; o2 <= 103168; o2++) r3[o2] = 1;
for (o2 = 103169; o2 <= 103171; o2++) r3[o2] = 2;
for (o2 = 103186; o2 <= 103188; o2++) r3[o2] = 0;
for (o2 = 103189; o2 <= 103191; o2++) r3[o2] = 2;
for (o2 = 103192; o2 <= 103195; o2++) r3[o2] = 0;
for (o2 = 103196; o2 <= 103199; o2++) r3[o2] = 2;
for (o2 = 103200; o2 <= 103224; o2++) r3[o2] = 0;
for (o2 = 103225; o2 <= 103227; o2++) r3[o2] = 1;
for (o2 = 103232; o2 <= 103237; o2++) r3[o2] = 0;
for (o2 = 103238; o2 <= 103243; o2++) r3[o2] = 2;
for (o2 = 103244; o2 <= 103246; o2++) r3[o2] = 0;
for (o2 = 103247; o2 <= 103249; o2++) r3[o2] = 2;
for (o2 = 103254; o2 <= 103256; o2++) r3[o2] = 0;
for (o2 = 103257; o2 <= 103259; o2++) r3[o2] = 2;
for (o2 = 103264; o2 <= 103266; o2++) r3[o2] = 0;
for (o2 = 103267; o2 <= 103269; o2++) r3[o2] = 2;
for (o2 = 103300; o2 <= 103375; o2++) r3[o2] = 0;
for (o2 = 103381; o2 <= 103383; o2++) r3[o2] = 0;
for (o2 = 103384; o2 <= 103386; o2++) r3[o2] = 1;
for (o2 = 103387; o2 <= 103389; o2++) r3[o2] = 0;
for (o2 = 103390; o2 <= 103392; o2++) r3[o2] = 2;
for (o2 = 103397; o2 <= 103399; o2++) r3[o2] = 0;
for (o2 = 103400; o2 <= 103471; o2++) r3[o2] = 2;
for (o2 = 103476; o2 <= 103478; o2++) r3[o2] = 0;
for (o2 = 103479; o2 <= 103481; o2++) r3[o2] = 2;
for (o2 = 103486; o2 <= 103488; o2++) r3[o2] = 0;
for (o2 = 103489; o2 <= 103491; o2++) r3[o2] = 2;
for (o2 = 103492; o2 <= 103495; o2++) r3[o2] = 0;
for (o2 = 103496; o2 <= 103499; o2++) r3[o2] = 2;
for (o2 = 103528; o2 <= 103543; o2++) r3[o2] = 0;
for (o2 = 103544; o2 <= 103548; o2++) r3[o2] = 2;
for (o2 = 103549; o2 <= 103551; o2++) r3[o2] = 0;
for (o2 = 103552; o2 <= 103554; o2++) r3[o2] = 1;
for (o2 = 103555; o2 <= 103557; o2++) r3[o2] = 2;
for (o2 = 103558; o2 <= 103560; o2++) r3[o2] = 0;
for (o2 = 103571; o2 <= 103573; o2++) r3[o2] = 0;
for (o2 = 103574; o2 <= 103576; o2++) r3[o2] = 2;
for (o2 = 103577; o2 <= 103580; o2++) r3[o2] = 0;
for (o2 = 103581; o2 <= 103583; o2++) r3[o2] = 2;
for (o2 = 103595; o2 <= 103694; o2++) r3[o2] = 0;
for (o2 = 103696; o2 <= 103699; o2++) r3[o2] = 0;
for (o2 = 103700; o2 <= 103793; o2++) r3[o2] = 2;
for (o2 = 103794; o2 <= 103890; o2++) r3[o2] = 0;
for (o2 = 103891; o2 <= 103896; o2++) r3[o2] = 2;
for (o2 = 103900; o2 <= 103971; o2++) r3[o2] = 2;
for (o2 = 103972; o2 <= 103977; o2++) r3[o2] = 0;
for (o2 = 112e3; o2 <= 112101; o2++) r3[o2] = 0;

// node_modules/@arcgis/core/geometry/support/SupportedGCSWkids.js
var S2;
!function(S5) {
  S5[S5.CGCS2000 = 4490] = "CGCS2000", S5[S5.GCSMARS2000 = 104971] = "GCSMARS2000", S5[S5.GCSMARS2000_SPHERE = 104905] = "GCSMARS2000_SPHERE", S5[S5.GCSMOON2000 = 104903] = "GCSMOON2000";
}(S2 || (S2 = {}));

// node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var l2 = [102100, 102113, 3857, 3785, 900913];
var E2 = [104905, 104971];
var u2 = [4326, ...l2, ...E2];
var S3 = [-20037508342788905e-9, 20037508342788905e-9];
var o3 = [-20037508342787e-6, 20037508342787e-6];
var M2 = { wkTemplate: 'PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]', valid: S3, origin: o3, dx: 1e-5 };
var R2 = { 102113: { wkTemplate: 'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]', valid: S3, origin: o3, dx: 1e-5 }, 102100: M2, 3785: { wkTemplate: 'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]', valid: S3, origin: o3, dx: 1e-5 }, 3857: M2, 4326: { wkTemplate: 'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",{Central_Meridian}],UNIT["Degree",0.0174532925199433]]', altTemplate: 'PROJCS["WGS_1984_Plate_Carree",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Plate_Carree"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],UNIT["Degrees",111319.491]]', valid: [-180, 180], origin: [-180, 90], dx: 1e-5 }, 104971: { wkTemplate: 'GEOGCS["Mars_2000_(Sphere)",DATUM["Mars_2000_(Sphere)",SPHEROID["Mars_2000_(Sphere)",3396190.0,0.0]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]', valid: [-180, 180], origin: [-180, 90], dx: 1e-5 }, 104905: { wkTemplate: 'GEOGCS["GCS_Mars_2000",DATUM["D_Mars_2000",SPHEROID["Mars_2000_IAU_IAG",3396190.0,169.8944472236118]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]', valid: [-180, 180], origin: [-180, 90], dx: 1e-5 }, 900913: M2 };
function s3(e2, r4) {
  if (e2 === r4) return true;
  if (null == e2 || null == r4) return false;
  const n3 = e2.wkid, t3 = r4.wkid;
  if (null != n3 || null != t3) {
    if (n3 === t3) return true;
    if (O2(e2) && O2(r4)) return true;
    const i4 = e2.latestWkid;
    if (null != i4 && t3 === i4) return true;
    const _4 = r4.latestWkid;
    return null != _4 && n3 === _4;
  }
  let i3, _3;
  return e2.wkt2 && r4.wkt2 ? (i3 = e2.wkt2, _3 = r4.wkt2) : e2.wkt && r4.wkt && (i3 = e2.wkt, _3 = r4.wkt), !(!i3 || !_3) && i3.toUpperCase() === _3.toUpperCase();
}
function d2(e2) {
  const r4 = e2 == null ? void 0 : e2.wkid;
  return null != r4 && r4 >= 2e3 && R2[r4] || null;
}
function c2(e2) {
  if (!e2) return;
  const { wkid: r4, vcsWkid: n3 } = e2;
  if (r4) return n3 ? JSON.stringify({ wkid: r4, vcsWkid: n3 }) : String(r4);
  const t3 = e2.wkt || e2.wkt2;
  return JSON.stringify(t3 ? n3 ? { wkt: t3, vcsWkid: n3 } : { wkt: t3 } : {});
}
function P2(e2) {
  if (!N2(e2)) return false;
  const { wkid: r4 } = e2;
  if (r4) return null == r3[r4];
  const n3 = e2.wkt2 || e2.wkt;
  return !!n3 && /^\s*(?:GEOGCS|GEOGCRS|GEOGRAPHICCRS)/i.test(n3);
}
function A2(e2) {
  return !(D2(e2) || W(e2));
}
function C(e2) {
  return 4326 === (e2 == null ? void 0 : e2.wkid);
}
function k(e2) {
  return /^\s*(?:GEOD|GEODETIC|GEOG|GEOGRAPHIC|PROJ|PROJECTED|VERT|VERTICAL|ENG|ENGINEERING|PARAMETRIC|TIME|DERIVEDPROJ|COMPOUND|BOUND)CRS/i.test(e2);
}
function w(e2) {
  return (e2 == null ? void 0 : e2.wkid) === S2.CGCS2000;
}
function O2(e2) {
  const r4 = e2 == null ? void 0 : e2.wkid;
  return null != r4 && r4 >= 2e3 && l2.includes(r4);
}
function f2(e2) {
  return 32662 === (e2 == null ? void 0 : e2.wkid);
}
function I(e2) {
  return e2 === S2.GCSMARS2000 || e2 === S2.GCSMARS2000_SPHERE;
}
function D2(e2) {
  return I(e2 == null ? void 0 : e2.wkid);
}
function p2(e2) {
  return e2 === S2.GCSMOON2000;
}
function W(e2) {
  return p2(e2 == null ? void 0 : e2.wkid);
}
function g2(e2) {
  const r4 = e2 == null ? void 0 : e2.wkid;
  return null != r4 && r4 >= 2e3 && u2.includes(r4);
}
function N2(e2) {
  if (null == e2) return false;
  const r4 = e2.wkid;
  return null != r4 && r4 >= 2e3 || (null != e2.wkt2 || null != e2.wkt);
}
var U = { wkid: 4326, wkt: r(R2[4326].wkTemplate, { Central_Meridian: "0.0" }) };
var h = { wkid: 102100, latestWkid: 3857 };
var m = { wkid: 32662 };

// node_modules/@arcgis/core/geometry/ellipsoidUtils.js
function S4(n3) {
  return { wkt: `GEOCCS["Spherical geocentric",
    DATUM["Not specified",
      SPHEROID["Sphere",${n3.radius},0]],
    PRIMEM["Greenwich",0.0,
      AUTHORITY["EPSG","8901"]],
    UNIT["m",1.0],
    AXIS["Geocentric X",OTHER],
    AXIS["Geocentric Y",EAST],
    AXIS["Geocentric Z",NORTH]
  ]` };
}
var T2 = S4(t);
var G2 = S4(e);
var p3 = S4(s);
var u3 = { wkt: `GEOCCS["WGS 84",
  DATUM["WGS_1984",
    SPHEROID["WGS 84",${t.radius},298.257223563,
      AUTHORITY["EPSG","7030"]],
    AUTHORITY["EPSG","6326"]],
  PRIMEM["Greenwich",0,
    AUTHORITY["EPSG","8901"]],
  UNIT["m",1.0,
    AUTHORITY["EPSG","9001"]],
  AXIS["Geocentric X",OTHER],
  AXIS["Geocentric Y",OTHER],
  AXIS["Geocentric Z",NORTH],
  AUTHORITY["EPSG","4978"]
]` };
var I2 = G2.wkt.toUpperCase();
var E3 = p3.wkt.toUpperCase();
function s4(o4) {
  if (null != o4 && N2(o4)) {
    const n3 = o4.wkid, t3 = o4.wkt2 ?? o4.wkt;
    if (I(n3)) return e;
    const S5 = t3 == null ? void 0 : t3.toUpperCase();
    if (t3 && S5 === I2) return e;
    if (p2(n3) || S5 && S5 === E3) return s;
  }
  return t;
}
function R3(t3) {
  return I(t3) ? e : p2(t3) ? s : t;
}
function A3(n3) {
  return s3(n3, T2);
}
function O3(n3) {
  return A3(n3) || s3(n3, G2) || s3(n3, p3);
}

// node_modules/@arcgis/core/core/unitUtils.js
var l3 = 39.37;
var m2 = t.radius * Math.PI / 200;
var f3 = /(?:LENGTH)?UNIT\[([^\]]+)]]$/i;
var d3 = r3;
var U2 = /UNIT\[([^\]]+)]/i;
var B = /* @__PURE__ */ new Set([4305, 4807, 4810, 4811, 4812, 4816, 4819, 4821, 4901, 4902, 37225, 104025, 104026, 104139, 104140]);
var _2 = i()({ millimeter: "millimeters", centimeter: "centimeters", meter: "meters", meter_german: "german-meters", kilometer: "kilometers", decimeter: "decimeters", micrometer: "micrometers", nanometer: "nanometers", "50_kilometers": "50-kilometers", "150_kilometers": "150-kilometers", foot: "feet", foot_us: "us-feet", foot_clarke: "clarke-feet", fathom: "fathoms", nautical_mile: "nautical-miles", chain_us: "us-chains", link_us: "us-links", mile_us: "us-miles", yard_clarke: "clarke-yards", chain_clarke: "clarke-chains", link_clarke: "clarke-links", yard_sears: "sears-yards", foot_sears: "sears-feet", chain_sears: "sears-chains", link_sears: "sears-links", yard_benoit_1895_a: "benoit-1895-a-yards", foot_benoit_1895_a: "benoit-1895-a-feet", chain_benoit_1895_a: "benoit-1895-a-chains", link_benoit_1895_a: "benoit-1895-a-links", yard_benoit_1895_b: "benoit-1895-b-yards", foot_benoit_1895_b: "benoit-1895-b-feet", chain_benoit_1895_b: "benoit-1895-b-chains", link_benoit_1895_b: "benoit-1895-b-links", foot_1865: "1865-feet", foot_indian: "indian-feet", foot_indian_1937: "indian-1937-feet", foot_indian_1962: "indian-1962-feet", foot_indian_1975: "indian-1975-feet", yard_indian: "indian-yards", yard_indian_1937: "indian-1937-yards", yard_indian_1962: "indian-1962-yards", yard_indian_1975: "indian-1975-yards", statute_mile: "statute-miles", foot_gold_coast: "gold-coast-feet", foot_british_1936: "british-1936-feet", yard: "yards", chain: "chains", link: "links", yard_sears_1922_truncated: "sears-1922-truncated-yards", foot_sears_1922_truncated: "sears-1922-truncated-feet", chain_sears_1922_truncated: "sears-1922-truncated-chains", link_sears_1922_truncated: "sears-1922-truncated-links", yard_us: "us-yards", inch: "inches", inch_us: "us-inches", rod: "rods", rod_us: "us-rods", nautical_mile_us: "us-nautical-miles", nautical_mile_uk: "uk-nautical-miles", smoot: "smoots", vara_tx: "tx-vara", point: "points" });
var h2 = (e2) => e2 * e2;
var b = (e2) => e2 * e2 * e2;
var k2 = { length: { baseUnit: "meters", units: { millimeters: { inBaseUnits: 1e-3 }, centimeters: { inBaseUnits: 0.01 }, meters: { inBaseUnits: 1 }, feet: { inBaseUnits: 0.3048 }, "us-feet": { inBaseUnits: 0.3048006096012192 }, "clarke-feet": { inBaseUnits: 0.3047972654 }, fathoms: { inBaseUnits: 1.8288 }, "nautical-miles": { inBaseUnits: 1852 }, "german-meters": { inBaseUnits: 1.0000135965 }, "us-chains": { inBaseUnits: 20.11684023368047 }, "us-links": { inBaseUnits: 0.2011684023368047 }, "us-miles": { inBaseUnits: 1609.347218694438 }, kilometers: { inBaseUnits: 1e3 }, "clarke-yards": { inBaseUnits: 0.9143917962 }, "clarke-chains": { inBaseUnits: 20.1166195164 }, "clarke-links": { inBaseUnits: 0.201166195164 }, "sears-yards": { inBaseUnits: 0.9143984146160287 }, "sears-feet": { inBaseUnits: 0.3047994715386762 }, "sears-chains": { inBaseUnits: 20.11676512155263 }, "sears-links": { inBaseUnits: 0.2011676512155263 }, "benoit-1895-a-yards": { inBaseUnits: 0.9143992 }, "benoit-1895-a-feet": { inBaseUnits: 0.3047997333333333 }, "benoit-1895-a-chains": { inBaseUnits: 20.1167824 }, "benoit-1895-a-links": { inBaseUnits: 0.201167824 }, "benoit-1895-b-yards": { inBaseUnits: 0.9143992042898124 }, "benoit-1895-b-feet": { inBaseUnits: 0.3047997347632708 }, "benoit-1895-b-chains": { inBaseUnits: 20.11678249437587 }, "benoit-1895-b-links": { inBaseUnits: 0.2011678249437587 }, "1865-feet": { inBaseUnits: 0.3048008333333334 }, "indian-feet": { inBaseUnits: 0.3047995102481469 }, "indian-1937-feet": { inBaseUnits: 0.30479841 }, "indian-1962-feet": { inBaseUnits: 0.3047996 }, "indian-1975-feet": { inBaseUnits: 0.3047995 }, "indian-yards": { inBaseUnits: 0.9143985307444408 }, "indian-1937-yards": { inBaseUnits: 0.91439523 }, "indian-1962-yards": { inBaseUnits: 0.9143988 }, "indian-1975-yards": { inBaseUnits: 0.9143985 }, miles: { inBaseUnits: 1609.344 }, "statute-miles": { inBaseUnits: 1609.344 }, "gold-coast-feet": { inBaseUnits: 0.3047997101815088 }, "british-1936-feet": { inBaseUnits: 0.3048007491 }, yards: { inBaseUnits: 0.9144 }, chains: { inBaseUnits: 20.1168 }, links: { inBaseUnits: 0.201168 }, "sears-1922-truncated-yards": { inBaseUnits: 0.914398 }, "sears-1922-truncated-feet": { inBaseUnits: 0.3047993333333334 }, "sears-1922-truncated-chains": { inBaseUnits: 20.116756 }, "sears-1922-truncated-links": { inBaseUnits: 0.20116756 }, "us-yards": { inBaseUnits: 0.9144018288036576 }, decimeters: { inBaseUnits: 0.1 }, inches: { inBaseUnits: 0.0254 }, "us-inches": { inBaseUnits: 0.0254000508001016 }, rods: { inBaseUnits: 5.0292 }, "us-rods": { inBaseUnits: 5.029210058420118 }, "us-nautical-miles": { inBaseUnits: 1853.248 }, "uk-nautical-miles": { inBaseUnits: 1853.184 }, smoots: { inBaseUnits: 1.7018 }, "tx-vara": { inBaseUnits: 0.8466683600033867 }, points: { inBaseUnits: 3527777777777778e-19 }, micrometers: { inBaseUnits: 1e-6 }, nanometers: { inBaseUnits: 1e-9 }, "50-kilometers": { inBaseUnits: 5e4 }, "150-kilometers": { inBaseUnits: 15e4 } } }, area: { baseUnit: "square-meters", units: { "square-millimeters": { inBaseUnits: h2(1e-3) }, "square-centimeters": { inBaseUnits: h2(0.01) }, "square-decimeters": { inBaseUnits: h2(0.1) }, "square-meters": { inBaseUnits: 1 }, "square-kilometers": { inBaseUnits: h2(1e3) }, "square-inches": { inBaseUnits: h2(0.0254) }, "square-feet": { inBaseUnits: h2(0.3048) }, "square-yards": { inBaseUnits: h2(0.9144) }, "square-miles": { inBaseUnits: h2(1609.344) }, "square-nautical-miles": { inBaseUnits: h2(1852) }, "square-us-feet": { inBaseUnits: h2(1200 / 3937) }, acres: { inBaseUnits: 15625e-7 * h2(1609.344) }, ares: { inBaseUnits: 100 }, hectares: { inBaseUnits: 1e4 } } }, volume: { baseUnit: "liters", units: { liters: { inBaseUnits: 1 }, "cubic-millimeters": { inBaseUnits: 1e3 * b(1e-3) }, "cubic-centimeters": { inBaseUnits: 1e3 * b(0.01) }, "cubic-decimeters": { inBaseUnits: 1e3 * b(0.1) }, "cubic-meters": { inBaseUnits: 1e3 }, "cubic-kilometers": { inBaseUnits: 1e3 * b(1e3) }, "cubic-inches": { inBaseUnits: 1e3 * b(0.0254) }, "cubic-feet": { inBaseUnits: 1e3 * b(0.3048) }, "cubic-yards": { inBaseUnits: 1e3 * b(0.9144) }, "cubic-miles": { inBaseUnits: 1e3 * b(1609.344) } } }, angle: { baseUnit: "radians", units: { radians: { inBaseUnits: 1 }, degrees: { inBaseUnits: Math.PI / 180 } } } };
var y2 = (() => {
  const e2 = {};
  for (const s5 in k2) for (const i3 in k2[s5].units) e2[i3] = s5;
  return e2;
})();
function q(e2, s5, i3) {
  return e2 * k2[i3].units[s5].inBaseUnits;
}
function p4(e2, s5, i3) {
  return e2 / k2[i3].units[s5].inBaseUnits;
}
var w2 = ["metric", "imperial", "inches", "feet", "yards", "miles", "nautical-miles", "us-feet", "meters", "kilometers"];
var M3 = /* @__PURE__ */ new Map([["meters", "square-meters"], ["feet", "square-feet"], ["us-feet", "square-us-feet"]]);
function D3(e2) {
  const s5 = y2[e2];
  if (!s5) throw new Error("unknown type");
  return s5;
}
function P3(e2, s5 = null) {
  return s5 = s5 || D3(e2), k2[s5].baseUnit === e2;
}
function x(e2, s5, i3) {
  if (s5 === i3) return e2;
  const n3 = D3(s5);
  if (n3 !== D3(i3)) throw new Error("incompatible units");
  const t3 = P3(s5, n3) ? e2 : q(e2, s5, n3);
  return P3(i3, n3) ? t3 : p4(t3, i3, n3);
}
function E4(e2, s5, i3, n3 = false) {
  if (!n3 && P2(s5)) throw new Error("Unable to convert from an angular unit to a linear unit.");
  const t3 = se(s5);
  return t3 !== i3 && (e2 = t3 ? x(e2, t3, i3) : x(e2 *= Q(s5), "meters", i3)), e2;
}
function I3(e2, s5, i3, n3 = false) {
  if (!n3 && P2(i3)) throw new Error("Unable to convert from a linear unit to an angular unit.");
  const t3 = se(i3);
  return s5 !== t3 && (e2 = t3 ? x(e2, s5, t3) : x(e2, s5, "meters") / Q(i3)), e2;
}
function j(e2) {
  switch (e2) {
    case "metric":
      return "meters";
    case "imperial":
      return "feet";
    default:
      return e2;
  }
}
function R4(e2) {
  return j(e2);
}
function N3(e2) {
  switch (e2) {
    case "metric":
      return "square-meters";
    case "imperial":
      return "square-feet";
    default:
      return e2;
  }
}
function J(e2, s5) {
  const i3 = x(e2, s5, "meters");
  return Math.abs(i3) < 3e3 ? "meters" : "kilometers";
}
function T3(e2, s5) {
  const i3 = x(e2, s5, "meters");
  return Math.abs(i3) < 1e5 ? "meters" : "kilometers";
}
function K(e2, s5) {
  const i3 = x(e2, s5, "feet");
  return Math.abs(i3) < 1e3 ? "feet" : "miles";
}
function A4(e2, s5) {
  const i3 = x(e2, s5, "feet");
  return Math.abs(i3) < 1e5 ? "feet" : "miles";
}
function G3(e2, s5) {
  const i3 = x(e2, s5, "square-meters");
  return Math.abs(i3) < 3e6 ? "square-meters" : "square-kilometers";
}
function H(e2, s5) {
  const i3 = x(e2, s5, "square-feet");
  return Math.abs(i3) < 1e6 ? "square-feet" : "square-miles";
}
function Y(e2, s5, i3) {
  return x(e2, s5, "meters") / (i3 * Math.PI / 180);
}
function W2(e2) {
  return _2.fromJSON(e2.toLowerCase()) || null;
}
function $(e2) {
  if (null != e2 && !A2(e2)) return 1;
  const s5 = Q(e2);
  return s5 > 1e5 ? 1 : s5;
}
function z(e2) {
  return Q(e2) >= s4(e2).metersPerDegree ? "meters" : se(e2);
}
function Q(e2, s5 = t.metersPerDegree) {
  return V(e2, true) ?? s5;
}
function V(e2, s5 = false) {
  const i3 = (e2 == null ? void 0 : e2.wkid) ?? null, a2 = (e2 == null ? void 0 : e2.wkt2) ?? (e2 == null ? void 0 : e2.wkt) ?? null;
  let r4 = null;
  if (i3) {
    if (I(i3)) return e.metersPerDegree;
    if (p2(i3)) return s.metersPerDegree;
    r4 = d3.values[d3[i3]], !r4 && s5 && B.has(i3) && (r4 = m2);
  } else a2 && (re(a2) ? r4 = Z(f3.exec(a2), r4) : ae(a2) && (r4 = Z(U2.exec(a2), r4)));
  return r4;
}
function X(e2) {
  return P2(e2) ? 1 : Q(e2);
}
function Z(e2, s5) {
  return (e2 == null ? void 0 : e2[1]) ? ee(e2[1]) : s5;
}
function ee(e2) {
  return parseFloat(e2.split(",")[1]);
}
function se(e2) {
  const s5 = (e2 == null ? void 0 : e2.wkid) ?? null, i3 = (e2 == null ? void 0 : e2.wkt2) ?? (e2 == null ? void 0 : e2.wkt) ?? null;
  let n3 = null;
  if (s5) n3 = d3.units[d3[s5]];
  else if (i3) {
    const e3 = re(i3) ? f3 : ae(i3) ? U2 : null;
    if (e3) {
      const s6 = e3.exec(i3);
      (s6 == null ? void 0 : s6[1]) && (n3 = ue(s6[1]));
    }
  }
  return null != n3 ? W2(n3) : null;
}
function ie(e2) {
  const s5 = se(e2);
  return null != s5 && w2.includes(s5) ? s5 : null;
}
function ne(e2) {
  const s5 = z(e2);
  return null != s5 && w2.includes(s5) ? s5 : null;
}
function te(e2) {
  const s5 = se(e2);
  return null == s5 ? null : M3.get(s5);
}
function ae(e2) {
  return /^GEOCCS/i.test(e2);
}
function re(e2) {
  return /^\s*(?:PROJCS|PROJCRS|PROJECTEDCRS)/i.test(e2);
}
var ce = 1e-7;
function ue(e2) {
  const s5 = /[\\"']{1}([^\\"']+)/.exec(e2);
  let i3 = s5 == null ? void 0 : s5[1];
  if (!i3 || !W2(i3)) {
    const s6 = ee(e2);
    i3 = null;
    const n3 = d3.values;
    for (let e3 = 0; e3 < n3.length; ++e3) if (Math.abs(s6 - n3[e3]) < ce) {
      i3 = d3.units[e3];
      break;
    }
  }
  return i3;
}
function oe(e2) {
  const s5 = se(e2);
  if (null == s5) return null;
  switch (s5) {
    case "feet":
    case "us-feet":
    case "clarke-feet":
    case "fathoms":
    case "nautical-miles":
    case "us-chains":
    case "us-links":
    case "us-miles":
    case "clarke-yards":
    case "clarke-chains":
    case "clarke-links":
    case "sears-yards":
    case "sears-feet":
    case "sears-chains":
    case "sears-links":
    case "benoit-1895-a-yards":
    case "benoit-1895-a-feet":
    case "benoit-1895-a-chains":
    case "benoit-1895-a-links":
    case "benoit-1895-b-yards":
    case "benoit-1895-b-feet":
    case "benoit-1895-b-chains":
    case "benoit-1895-b-links":
    case "1865-feet":
    case "indian-feet":
    case "indian-1937-feet":
    case "indian-1962-feet":
    case "indian-1975-feet":
    case "indian-yards":
    case "indian-1937-yards":
    case "indian-1962-yards":
    case "indian-1975-yards":
    case "statute-miles":
    case "gold-coast-feet":
    case "british-1936-feet":
    case "yards":
    case "chains":
    case "links":
    case "sears-1922-truncated-yards":
    case "sears-1922-truncated-feet":
    case "sears-1922-truncated-chains":
    case "sears-1922-truncated-links":
    case "us-yards":
    case "inches":
    case "us-inches":
    case "rods":
    case "us-rods":
    case "us-nautical-miles":
    case "uk-nautical-miles":
    case "smoots":
    case "tx-vara":
    case "points":
      return "imperial";
    case "millimeters":
    case "centimeters":
    case "meters":
    case "german-meters":
    case "kilometers":
    case "decimeters":
    case "micrometers":
    case "nanometers":
    case "50-kilometers":
    case "150-kilometers":
      return "metric";
  }
  return null;
}
var le = { esriAcres: "acres", esriAres: "ares", esriHectares: "hectares", esriSquareCentimeters: "square-centimeters", esriSquareDecimeters: "square-decimeters", esriSquareFeet: "square-feet", esriSquareInches: "square-inches", esriSquareKilometers: "square-kilometers", esriSquareMeters: "square-meters", esriSquareMiles: "square-miles", esriSquareMillimeters: "square-millimeters", esriSquareUsFeet: "square-us-feet", esriSquareYards: "square-yards" };
var me = { esriCentimeters: "centimeters", esriDecimeters: "decimeters", esriFeet: "feet", esriInches: "inches", esriKilometers: "kilometers", esriMeters: "meters", esriMiles: "miles", esriMillimeters: "millimeters", esriNauticalMiles: "nautical-miles", esriYards: "yards" };
var fe = { esriDUDecimalDegrees: "degrees", esriDURadians: "radians" };
var de = i()(le);
var Ue = i()(me);
var Be = i()(fe);

export {
  r2 as r,
  _,
  P,
  s2 as s,
  p,
  a,
  f,
  O,
  G,
  S2 as S,
  r3 as r2,
  S3 as S2,
  s3 as s2,
  d2 as d,
  c2 as c,
  P2,
  A2 as A,
  C,
  k,
  w,
  O2,
  f2,
  I,
  D2 as D,
  p2,
  W,
  g2 as g,
  N2 as N,
  U,
  h,
  m,
  T2 as T,
  G2,
  p3,
  u3 as u,
  s4 as s3,
  R3 as R,
  A3 as A2,
  O3,
  l3 as l,
  B,
  D3 as D2,
  x,
  E4 as E,
  I3 as I2,
  j,
  R4 as R2,
  N3 as N2,
  J,
  T3 as T2,
  K,
  A4 as A3,
  G3,
  H,
  Y,
  W2,
  $,
  z,
  Q,
  V,
  X,
  se,
  ie,
  ne,
  te,
  re,
  oe,
  de,
  Ue,
  Be
};
//# sourceMappingURL=chunk-LTDNORB5.js.map
