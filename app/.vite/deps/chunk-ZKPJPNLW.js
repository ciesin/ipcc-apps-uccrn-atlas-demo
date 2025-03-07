import {
  F,
  L,
  N
} from "./chunk-QTWG47SG.js";
import {
  o,
  q,
  s as s3
} from "./chunk-53ZTROGC.js";
import {
  n
} from "./chunk-JLFSX3JT.js";
import {
  s
} from "./chunk-6P7HXSJ6.js";
import {
  s2
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/geometry/projection/localRotationUtils.js
function n2(t, n3, o3) {
  const r = Math.sin(t), a2 = Math.cos(t), i = Math.sin(n3), s4 = Math.cos(n3), c = o3;
  return c[0] = -r, c[4] = -i * a2, c[8] = s4 * a2, c[12] = 0, c[1] = a2, c[5] = -i * r, c[9] = s4 * r, c[13] = 0, c[2] = 0, c[6] = s4, c[10] = i, c[14] = 0, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, c;
}
function o2(o3, r, a2) {
  return n2(o3, r, a2), s3(a2, a2), a2;
}

// node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js
function m(r, e, m2, R) {
  const p = F(r, R);
  if (null == p) return false;
  const _ = p.source.spatialReferenceId, A = p.dest.spatialReferenceId;
  if (_ === A && !u(A) && (_ !== N.UNKNOWN || s2(r, R))) return q(m2, e), true;
  if (u(A)) {
    const r2 = L[_][N.LON_LAT], t = L[N.LON_LAT][A];
    return null != r2 && null != t && (r2(e, 0, C, 0), t(C, 0, E, 0), n2(a * C[0], a * C[1], m2), m2[12] = E[0], m2[13] = E[1], m2[14] = E[2], true);
  }
  const L2 = u(_);
  if ((A === N.WEB_MERCATOR || A === N.PLATE_CARREE || A === N.WGS84 || A === N.CGCS2000) && (_ === N.WGS84 || L2 || _ === N.WEB_MERCATOR || _ === N.CGCS2000)) {
    const r2 = L[_][N.LON_LAT], t = L[N.LON_LAT][A];
    return null != r2 && null != t && (r2(e, 0, C, 0), t(C, 0, E, 0), L2 ? o2(a * C[0], a * C[1], m2) : o(m2), m2[12] = E[0], m2[13] = E[1], m2[14] = E[2], true);
  }
  return false;
}
function u(r) {
  return r === N.SPHERICAL_ECEF || r === N.SPHERICAL_MARS_PCPF || r === N.SPHERICAL_MOON_PCPF || r === N.WGS84_ECEF;
}
var a = s(1);
var C = n();
var E = n();

export {
  n2 as n,
  m
};
//# sourceMappingURL=chunk-ZKPJPNLW.js.map
