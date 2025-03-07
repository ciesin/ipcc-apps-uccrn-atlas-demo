import {
  B,
  C as C2,
  E,
  b,
  d,
  f as f2,
  f2 as f3,
  f3 as f4,
  g as g2,
  l as l2,
  n as n4,
  p as p2,
  p2 as p3,
  p3 as p5,
  s as s2,
  s2 as s4,
  u as u3,
  x,
  y,
  y2
} from "./chunk-6CNFKQP7.js";
import {
  I2,
  P as P3,
  R,
  j as j3,
  x as x2
} from "./chunk-RQTCSDBY.js";
import {
  D
} from "./chunk-7SWL6AYJ.js";
import {
  C
} from "./chunk-GKX3Z6XX.js";
import {
  Ae,
  Be,
  Fe,
  G,
  H,
  I,
  Je,
  K,
  L,
  Me,
  Re,
  U,
  W,
  Xe,
  Y,
  Ye,
  Ze,
  _,
  be,
  ce,
  e as e2,
  ee,
  me,
  n as n5,
  ne,
  oe,
  q,
  r as r2,
  re,
  s,
  s2 as s3,
  te,
  v,
  ye
} from "./chunk-O4H354HZ.js";
import {
  M,
  d as d2,
  h,
  o as o3,
  p as p4,
  q as q2,
  w as w2
} from "./chunk-2SVLUMFO.js";
import {
  a,
  c,
  i as i2,
  l,
  p,
  r,
  u as u2
} from "./chunk-TA6O62P3.js";
import {
  o
} from "./chunk-Z2A222O3.js";
import {
  e,
  i,
  n as n3,
  o as o2,
  t
} from "./chunk-ZDVQNOKR.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  u
} from "./chunk-WLGGSXQY.js";
import {
  j as j2
} from "./chunk-T7KGE6VP.js";
import {
  P as P2
} from "./chunk-W633AKTD.js";
import {
  C as C3
} from "./chunk-PAGKMWJH.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j,
  n as n2
} from "./chunk-YUVX6H42.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  S,
  n
} from "./chunk-M6FNW7GP.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/arcade/functions/geomsync.js
var U2;
async function z() {
  null == U2 && (U2 = await import("./operators-ZSLABIRB.js"), await U2.loadAll());
}
function G2(z4, G4) {
  z4.disjoint = function(e6, n7) {
    return G4(e6, n7, (t4, r4, a3) => (a3 = Fe(a3), j3(a3, e6, n7), null === a3[0] || null === a3[1] || U2.disjoint.execute(a3[0], a3[1])));
  }, z4.intersects = function(e6, n7) {
    return G4(e6, n7, (t4, r4, a3) => (a3 = Fe(a3), j3(a3, e6, n7), null !== a3[0] && null !== a3[1] && U2.intersects.execute(a3[0], a3[1])));
  }, z4.touches = function(e6, n7) {
    return G4(e6, n7, (t4, r4, a3) => (a3 = Fe(a3), j3(a3, e6, n7), null !== a3[0] && null !== a3[1] && U2.touches.execute(a3[0], a3[1])));
  }, z4.crosses = function(e6, n7) {
    return G4(e6, n7, (t4, r4, a3) => (a3 = Fe(a3), j3(a3, e6, n7), null !== a3[0] && null !== a3[1] && U2.crosses.execute(a3[0], a3[1])));
  }, z4.within = function(e6, n7) {
    return G4(e6, n7, (t4, r4, a3) => (a3 = Fe(a3), j3(a3, e6, n7), null !== a3[0] && null !== a3[1] && U2.within.execute(a3[0], a3[1])));
  }, z4.contains = function(e6, n7) {
    return G4(e6, n7, (t4, r4, a3) => (a3 = Fe(a3), j3(a3, e6, n7), null !== a3[0] && null !== a3[1] && U2.contains.execute(a3[0], a3[1])));
  }, z4.overlaps = function(e6, n7) {
    return G4(e6, n7, (t4, r4, a3) => (a3 = Fe(a3), j3(a3, e6, n7), null !== a3[0] && null !== a3[1] && U2.overlaps.execute(a3[0], a3[1])));
  }, z4.equals = function(e6, n7) {
    return G4(e6, n7, (t4, r4, i4) => (oe(i4, 2, 2, e6, n7), i4[0] === i4[1] || (i4[0] instanceof n2 && i4[1] instanceof n2 ? U2.equals.execute(i4[0], i4[1]) : (te(i4[0]) && te(i4[1]) || re(i4[0]) && re(i4[1]) || !(!ne(i4[0]) || !ne(i4[1]))) && i4[0].equals(i4[1]))));
  }, z4.relate = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      if (u5 = Fe(u5), oe(u5, 3, 3, e6, r4), u5[0] instanceof n2 && u5[1] instanceof n2) return U2.relate.execute(u5[0], u5[1], ye(u5[2]));
      if (u5[0] instanceof n2 && null === u5[1]) return false;
      if (u5[1] instanceof n2 && null === u5[0]) return false;
      if (null === u5[0] && null === u5[1]) return false;
      throw new a(e6, r.InvalidParameter, r4);
    });
  }, z4.intersection = function(e6, n7) {
    return G4(e6, n7, (t4, r4, a3) => (a3 = Fe(a3), j3(a3, e6, n7), null === a3[0] || null === a3[1] ? null : U2.intersection.execute(a3[0], a3[1])));
  }, z4.union = function(e6, a3) {
    return G4(e6, a3, (l5, o5, u5) => {
      if (0 === (u5 = Fe(u5)).length) throw new a(e6, r.WrongNumberOfParameters, a3);
      const f6 = [];
      if (1 === u5.length) if (o2(u5[0])) {
        for (const r4 of Fe(u5[0])) if (null !== r4) {
          if (!(r4 instanceof n2)) throw new a(e6, r.InvalidParameter, a3);
          f6.push(r4);
        }
      } else {
        if (!ee(u5[0])) {
          if (u5[0] instanceof n2) return Ae(o(u5[0]), e6.spatialReference);
          if (null === u5[0]) return null;
          throw new a(e6, r.InvalidParameter, a3);
        }
        for (const r4 of Fe(u5[0].toArray())) if (null !== r4) {
          if (!(r4 instanceof n2)) throw new a(e6, r.InvalidParameter, a3);
          f6.push(r4);
        }
      }
      else for (const r4 of u5) if (null !== r4) {
        if (!(r4 instanceof n2)) throw new a(e6, r.InvalidParameter, a3);
        f6.push(r4);
      }
      return 0 === f6.length ? null : U2.union.executeMany(f6);
    });
  }, z4.difference = function(e6, n7) {
    return G4(e6, n7, (t4, a3, l5) => (l5 = Fe(l5), j3(l5, e6, n7), null === l5[0] ? null : null === l5[1] ? o(l5[0]) : U2.difference.execute(l5[0], l5[1])));
  }, z4.symmetricdifference = function(e6, n7) {
    return G4(e6, n7, (t4, a3, l5) => (l5 = Fe(l5), j3(l5, e6, n7), null === l5[0] && null === l5[1] ? null : null === l5[0] ? o(l5[1]) : null === l5[1] ? o(l5[0]) : U2.symmetricDifference.execute(l5[0], l5[1])));
  }, z4.clip = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      if (u5 = Fe(u5), oe(u5, 2, 2, e6, r4), !(u5[1] instanceof w) && null !== u5[1]) throw new a(e6, r.InvalidParameter, r4);
      if (null === u5[0]) return null;
      if (!(u5[0] instanceof n2)) throw new a(e6, r.InvalidParameter, r4);
      return null === u5[1] ? null : U2.clip.execute(u5[0], u5[1]);
    });
  }, z4.cut = function(e6, l5) {
    return G4(e6, l5, (o5, u5, f6) => {
      if (f6 = Fe(f6), oe(f6, 2, 2, e6, l5), !(f6[1] instanceof P2) && null !== f6[1]) throw new a(e6, r.InvalidParameter, l5);
      if (null === f6[0]) return [];
      if (!(f6[0] instanceof n2)) throw new a(e6, r.InvalidParameter, l5);
      return null === f6[1] ? [o(f6[0])] : U2.cut.execute(f6[0], f6[1]);
    });
  }, z4.area = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      oe(u5, 1, 2, e6, r4);
      let f6 = (u5 = Fe(u5))[0];
      if ((o2(u5[0]) || ee(u5[0])) && (f6 = Je(u5[0], e6.spatialReference)), null === f6) return 0;
      if (!(f6 instanceof n2)) throw new a(e6, r.InvalidParameter, r4);
      return p4(f6.spatialReference, q2(u5[1]), U2.area.execute(f6));
    });
  }, z4.areageodetic = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      oe(u5, 1, 2, e6, r4);
      let f6 = (u5 = Fe(u5))[0];
      if ((o2(u5[0]) || ee(u5[0])) && (f6 = Je(u5[0], e6.spatialReference)), null === f6) return 0;
      if (!(f6 instanceof n2)) throw new a(e6, r.InvalidParameter, r4);
      return h(M, q2(u5[1]), U2.geodeticArea.execute(f6));
    });
  }, z4.length = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      oe(u5, 1, 2, e6, r4);
      let f6 = (u5 = Fe(u5))[0];
      if ((o2(u5[0]) || ee(u5[0])) && (f6 = Me(u5[0], e6.spatialReference)), null === f6) return 0;
      if (!(f6 instanceof n2)) throw new a(e6, r.InvalidParameter, r4);
      return p4(f6.spatialReference, d2(u5[1]), U2.length.execute(f6));
    });
  }, z4.length3d = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      oe(u5, 1, 2, e6, r4);
      let f6 = (u5 = Fe(u5))[0];
      if ((o2(u5[0]) || ee(u5[0])) && (f6 = Me(u5[0], e6.spatialReference)), null === f6) return 0;
      if (!(f6 instanceof n2)) throw new a(e6, r.InvalidParameter, r4);
      return true === f6.hasZ ? p4(f6.spatialReference, d2(u5[1]), P3(f6)) : p4(f6.spatialReference, d2(u5[1]), U2.length.execute(f6));
    });
  }, z4.lengthgeodetic = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      oe(u5, 1, 2, e6, r4);
      let f6 = (u5 = Fe(u5))[0];
      if ((o2(u5[0]) || ee(u5[0])) && (f6 = Me(u5[0], e6.spatialReference)), null === f6) return 0;
      if (!(f6 instanceof n2)) throw new a(e6, r.InvalidParameter, r4);
      return h(o3, d2(u5[1]), U2.geodeticLength.execute(f6));
    });
  }, z4.distance = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      u5 = Fe(u5), oe(u5, 2, 3, e6, r4);
      let f6 = u5[0];
      if ((o2(u5[0]) || ee(u5[0])) && (f6 = Re(u5[0], e6.spatialReference)), !(f6 instanceof n2)) throw new a(e6, r.InvalidParameter, r4);
      let c3 = u5[1];
      if ((o2(u5[1]) || ee(u5[1])) && (c3 = Re(u5[1], e6.spatialReference)), !(c3 instanceof n2)) throw new a(e6, r.InvalidParameter, r4);
      return p4(f6.spatialReference, d2(u5[2]), U2.distance.execute(f6, c3));
    });
  }, z4.distancegeodetic = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      u5 = Fe(u5), oe(u5, 2, 3, e6, r4);
      const f6 = u5[0];
      if (!(f6 instanceof j)) throw new a(e6, r.InvalidParameter, r4);
      const s7 = u5[1];
      if (!(s7 instanceof j)) throw new a(e6, r.InvalidParameter, r4);
      const c3 = new P2({ paths: [], spatialReference: f6.spatialReference });
      return c3.addPath([f6, s7]), h(o3, d2(u5[2]), U2.geodeticLength.execute(c3));
    });
  }, z4.densify = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      if (u5 = Fe(u5), oe(u5, 2, 3, e6, r4), null === u5[0]) return null;
      if (!(u5[0] instanceof n2)) throw new a(e6, r.InvalidParameter, r4);
      const f6 = be(u5[1]);
      if (isNaN(f6)) throw new a(e6, r.InvalidParameter, r4);
      if (f6 <= 0) throw new a(e6, r.InvalidParameter, r4);
      const s7 = w2(d2(u5[2]), u5[0].spatialReference, f6);
      switch (u5[0].type) {
        case "polygon":
        case "polyline":
        case "extent":
          return U2.densify.execute(u5[0], s7);
        default:
          return u5[0];
      }
    });
  }, z4.densifygeodetic = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      if (u5 = Fe(u5), oe(u5, 2, 3, e6, r4), null === u5[0]) return null;
      if (!(u5[0] instanceof n2)) throw new a(e6, r.InvalidParameter, r4);
      const f6 = be(u5[1]);
      if (isNaN(f6)) throw new a(e6, r.InvalidParameter, r4);
      if (f6 <= 0) throw new a(e6, r.InvalidParameter, r4);
      const s7 = h(d2(u5[2]), o3, f6);
      switch (u5[0].type) {
        case "polygon":
        case "polyline":
        case "extent":
          return U2.geodeticDensify.execute(u5[0], s7);
        default:
          return u5[0];
      }
    });
  }, z4.generalize = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      if (u5 = Fe(u5), oe(u5, 2, 4, e6, r4), null === u5[0]) return null;
      if (!(u5[0] instanceof n2)) throw new a(e6, r.InvalidParameter, r4);
      const f6 = be(u5[1]);
      if (isNaN(f6)) throw new a(e6, r.InvalidParameter, r4);
      const s7 = w2(d2(u5[3]), u5[0].spatialReference, f6);
      return U2.generalize.execute(u5[0], s7, { removeDegenerateParts: Ze(q(u5[2], true)) });
    });
  }, z4.buffer = function(e6, l5) {
    return G4(e6, l5, (o5, u5, f6) => {
      if (f6 = Fe(f6), oe(f6, 2, 3, e6, l5), null === f6[0]) return null;
      if (!(f6[0] instanceof n2)) throw new a(e6, r.InvalidParameter, l5);
      const s7 = be(f6[1]);
      if (isNaN(s7)) throw new a(e6, r.InvalidParameter, l5);
      return 0 === s7 ? o(f6[0]) : U2.buffer.execute(f6[0], w2(d2(f6[2]), f6[0].spatialReference, s7));
    });
  }, z4.buffergeodetic = function(e6, l5) {
    return G4(e6, l5, (o5, u5, f6) => {
      if (f6 = Fe(f6), oe(f6, 2, 3, e6, l5), null === f6[0]) return null;
      if (!(f6[0] instanceof n2)) throw new a(e6, r.InvalidParameter, l5);
      const s7 = be(f6[1]);
      if (isNaN(s7)) throw new a(e6, r.InvalidParameter, l5);
      return 0 === s7 ? o(f6[0]) : U2.geodesicBuffer.execute(f6[0], h(d2(f6[2]), o3, s7));
    });
  }, z4.offset = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      if (u5 = Fe(u5), oe(u5, 2, 6, e6, r4), null === u5[0]) return null;
      if (!(u5[0] instanceof j2 || u5[0] instanceof P2)) throw new a(e6, r.InvalidParameter, r4);
      const s7 = be(u5[1]);
      if (isNaN(s7)) throw new a(e6, r.InvalidParameter, r4);
      const c3 = w2(d2(u5[2]), u5[0].spatialReference, s7), m = ye(u5[3] ?? "round").toLowerCase();
      let d5;
      switch (m) {
        case "round":
        case "bevel":
        case "miter":
        case "square":
          d5 = m;
          break;
        default:
          d5 = "round";
      }
      const w5 = be(q(u5[4], 10));
      if (isNaN(w5)) throw new a(e6, r.InvalidParameter, r4);
      const p7 = be(q(u5[5], 0));
      if (isNaN(p7)) throw new a(e6, r.InvalidParameter, r4);
      return U2.offset.execute(u5[0], c3, { joins: d5, miterLimit: w5, flattenError: p7 });
    });
  }, z4.rotate = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      var _a;
      if (u5 = Fe(u5), oe(u5, 2, 3, e6, r4), null === u5[0]) return null;
      if (!(u5[0] instanceof n2)) throw new a(e6, r.InvalidParameter, r4);
      const f6 = u5[0] instanceof w ? j2.fromExtent(u5[0]) : u5[0], s7 = be(u5[1]);
      if (isNaN(s7)) throw new a(e6, r.InvalidParameter, r4);
      const c3 = q(u5[2], null);
      if (null === c3) {
        const e7 = "point" === f6.type ? f6 : (_a = f6.extent) == null ? void 0 : _a.center;
        return U2.rotate(f6, s7, e7 == null ? void 0 : e7.x, e7 == null ? void 0 : e7.y);
      }
      if (c3 instanceof j) return U2.rotate(f6, s7, c3.x, c3.y);
      throw new a(e6, r.InvalidParameter, r4);
    });
  }, z4.centroid = function(e6, r4) {
    return G4(e6, r4, (e7, r5, l5) => {
      if (l5 = Fe(l5), oe(l5, 1, 2, e7, r5), null === l5[0]) return null;
      const o5 = ye(l5[1] ?? "geometric").toLowerCase();
      if ("geometric" !== o5 && "labelpoint" !== o5) throw new a(e7, r.InvalidParameter, r5);
      let u5 = l5[0];
      if ((o2(l5[0]) || ee(l5[0])) && (u5 = "geometric" === o5 ? Re(l5[0], e7.spatialReference) : Je(l5[0], e7.spatialReference), null === u5)) return null;
      if (!(u5 instanceof n2)) throw new a(e7, r.InvalidParameter, r5);
      return "geometric" === o5 ? U2.centroid.execute(u5) : U2.labelPoint.execute(u5);
    });
  }, z4.measuretocoordinate = function(e6, n7) {
    return G4(e6, n7, x2);
  }, z4.pointtocoordinate = function(e6, n7) {
    return G4(e6, n7, I2);
  }, z4.distancetocoordinate = function(e6, n7) {
    return G4(e6, n7, R);
  }, z4.multiparttosinglepart = function(e6, l5) {
    return G4(e6, l5, (o5, u5, f6) => {
      if (f6 = Fe(f6), oe(f6, 1, 1, e6, l5), null === f6[0]) return null;
      if (!(f6[0] instanceof n2)) throw new a(e6, r.InvalidParameter, l5);
      if (f6[0] instanceof j) return [Ae(o(f6[0]), e6.spatialReference)];
      if (f6[0] instanceof w) return [Ae(o(f6[0]), e6.spatialReference)];
      const s7 = U2.simplify.execute(f6[0]);
      if (s7 instanceof j2) {
        const e7 = [], n7 = [];
        for (let t4 = 0; t4 < s7.rings.length; t4++) if (s7.isClockwise(s7.rings[t4])) {
          const n8 = f({ rings: [s7.rings[t4]], hasZ: true === s7.hasZ, hasM: true === s7.hasM, spatialReference: s7.spatialReference.toJSON() });
          e7.push(n8);
        } else n7.push({ ring: s7.rings[t4], pt: s7.getPoint(t4, 0) });
        for (let t4 = 0; t4 < n7.length; t4++) for (let r4 = 0; r4 < e7.length; r4++) if (e7[r4].contains(n7[t4].pt)) {
          e7[r4].addRing(n7[t4].ring);
          break;
        }
        return e7;
      }
      if (s7 instanceof P2) {
        const e7 = [];
        for (let n7 = 0; n7 < s7.paths.length; n7++) {
          const t4 = f({ paths: [s7.paths[n7]], hasZ: true === s7.hasZ, hasM: true === s7.hasM, spatialReference: s7.spatialReference.toJSON() });
          e7.push(t4);
        }
        return e7;
      }
      if (f6[0] instanceof u) {
        const n7 = [], t4 = Ae(o(f6[0]), e6.spatialReference);
        for (let e7 = 0; e7 < t4.points.length; e7++) n7.push(t4.getPoint(e7));
        return n7;
      }
      return null;
    });
  }, z4.issimple = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      if (u5 = Fe(u5), oe(u5, 1, 1, e6, r4), null === u5[0]) return true;
      if (!(u5[0] instanceof n2)) throw new a(e6, r.InvalidParameter, r4);
      return U2.simplify.isSimple(u5[0]);
    });
  }, z4.simplify = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      if (u5 = Fe(u5), oe(u5, 1, 1, e6, r4), null === u5[0]) return null;
      if (!(u5[0] instanceof n2)) throw new a(e6, r.InvalidParameter, r4);
      return U2.simplify.execute(u5[0]);
    });
  }, z4.convexhull = function(e6, r4) {
    return G4(e6, r4, (l5, o5, u5) => {
      if (u5 = Fe(u5), oe(u5, 1, 1, e6, r4), null === u5[0]) return null;
      if (!(u5[0] instanceof n2)) throw new a(e6, r.InvalidParameter, r4);
      return U2.convexHull.execute(u5[0]);
    });
  }, z4.nearestcoordinate = function(r4, l5) {
    return G4(r4, l5, (o5, u5, f6) => {
      if (f6 = Fe(f6), oe(f6, 2, 2, r4, l5), !(f6[0] instanceof n2 || null === f6[0])) throw new a(r4, r.InvalidParameter, l5);
      if (!(f6[1] instanceof j || null === f6[1])) throw new a(r4, r.InvalidParameter, l5);
      if (null === f6[0] || null === f6[1]) return null;
      const s7 = f6[0] instanceof w ? j2.fromExtent(f6[0]) : f6[0], c3 = U2.proximity.getNearestCoordinate(s7, f6[1], { calculateLeftRightSide: true });
      return null === c3 || c3.isEmpty ? null : C.convertObjectToArcadeDictionary({ coordinate: c3.coordinate, distance: c3.distance, sideOfLine: 0 === c3.distance ? "straddle" : c3.rightSide ? "right" : "left" }, Be(r4), false, true);
    });
  }, z4.nearestvertex = function(r4, l5) {
    return G4(r4, l5, (o5, u5, f6) => {
      if (f6 = Fe(f6), oe(f6, 2, 2, r4, l5), !(f6[0] instanceof n2 || null === f6[0])) throw new a(r4, r.InvalidParameter, l5);
      if (!(f6[1] instanceof j || null === f6[1])) throw new a(r4, r.InvalidParameter, l5);
      if (null === f6[0] || null === f6[1]) return null;
      const s7 = f6[0] instanceof w ? j2.fromExtent(f6[0]) : f6[0], c3 = U2.proximity.getNearestVertex(s7, f6[1]);
      return null === c3 || c3.isEmpty ? null : C.convertObjectToArcadeDictionary({ coordinate: c3.coordinate, distance: c3.distance, sideOfLine: 0 === c3.distance ? "straddle" : c3.rightSide ? "right" : "left" }, Be(r4), false, true);
    });
  };
}

// node_modules/@arcgis/core/arcade/arcadeCompiler.js
var H2 = class extends r2 {
  constructor(e6, n7) {
    super(), this.paramCount = n7, this.fn = e6;
  }
  createFunction(e6) {
    return (...n7) => {
      if (n7.length !== this.paramCount) throw new a(e6, r.WrongNumberOfParameters, null);
      return this.fn(...n7);
    };
  }
  call(e6, n7) {
    return this.fn(...n7.arguments);
  }
  marshalledCall(e6, n7, t4, o5) {
    return o5(e6, n7, (n8, l5, r4) => {
      r4 = r4.map((n9) => !G(n9) || n9 instanceof s3 ? n9 : n5(n9, e6, o5));
      const a3 = this.call(t4, { arguments: r4 });
      return S(a3) ? a3.then((e7) => n5(e7, t4, o5)) : a3;
    });
  }
};
function X(e6, n7, t4) {
  try {
    return t4(e6, null, n7.arguments);
  } catch (o5) {
    throw o5;
  }
}
function ee2(e6, n7) {
  switch (n7.type) {
    case "AssignmentExpression":
      return pe(e6, n7);
    case "UpdateExpression":
      return ce2(e6, n7);
    case "TemplateLiteral":
      return Ce(e6, n7);
    case "Identifier":
      return _e(e6, n7);
    case "MemberExpression":
      return Me2(e6, n7);
    case "Literal":
      return null === n7.value || void 0 === n7.value ? "null" : JSON.stringify(n7.value);
    case "CallExpression":
      return Oe(e6, n7);
    case "UnaryExpression":
      return Fe2(e6, n7);
    case "BinaryExpression":
      return Ie(e6, n7);
    case "LogicalExpression":
      return Ae2(e6, n7);
    case "ArrayExpression":
      return $e(e6, n7);
    case "ObjectExpression":
      return te2(e6, n7);
    default:
      throw new c(e6, r.Unrecognized, n7);
  }
}
function ne2(e6, n7) {
  switch (n7.type) {
    case "EmptyStatement":
      return "lc.voidOperation";
    case "VariableDeclaration":
      return ve(e6, n7);
    case "BlockStatement":
      return fe(e6, n7);
    case "FunctionDeclaration":
      return we(e6, n7);
    case "ImportDeclaration":
      return ye2(e6, n7);
    case "ExportNamedDeclaration":
      return be2(e6, n7);
    case "ReturnStatement":
      return he(e6, n7);
    case "IfStatement":
      return de(e6, n7);
    case "ExpressionStatement":
      return me2(e6, n7);
    case "BreakStatement":
      return "break";
    case "ContinueStatement":
      return "continue";
    case "ForStatement":
      return ie(e6, n7);
    case "ForInStatement":
      return ae(e6, n7);
    case "ForOfStatement":
      return se(e6, n7);
    case "WhileStatement":
      return ue(e6, n7);
    default:
      throw new c(e6, r.Unrecognized, n7);
  }
}
function te2(e6, n7) {
  let t4 = "lang.dictionary([";
  for (let o5 = 0; o5 < n7.properties.length; o5++) {
    const l5 = n7.properties[o5];
    let r4;
    "Identifier" === l5.key.type ? (Se(l5.key.name), r4 = "'" + l5.key.name + "'") : r4 = ee2(e6, l5.key);
    o5 > 0 && (t4 += ","), t4 += "lang.strCheck(" + r4 + ",'ObjectExpression'),lang.aCheck(" + ee2(e6, l5.value) + ", 'ObjectExpression')";
  }
  return t4 += "])", t4;
}
function oe2(e6, n7, t4, o5, l5 = (e7, n8) => `${e7} = ${n8}`) {
  const r4 = Re2(e6), a3 = Re2(e6);
  return [`var ${r4} = ${t4};`, `for (var ${a3} = 0; ${a3} < ${r4}; ${a3}++) {`, `  ${l5(n7, a3)}`, `  ${ne2(e6, o5)}`, "}", "lastStatement = lc.voidOperation;"].join("\n");
}
function le(e6, n7, t4, o5, l5 = (e7) => e7) {
  const r4 = Re2(e6), a3 = Re2(e6);
  return [`var ${r4} = ${t4};`, `for (var ${a3} of ${r4}) {`, `  ${n7} = ${l5(a3)};`, `  ${ne2(e6, o5)}`, "}", "lastStatement = lc.voidOperation;"].join("\n");
}
function re2(e6, n7, t4, o5) {
  const l5 = Re2(e6);
  return [`var ${l5} = ${t4}.iterator(runtimeCtx.abortSignal);`, `while ((${n7} = lang.graphicToFeature(yield ${l5}.next(), ${t4}, runtimeCtx)) != null) {`, `  ${ne2(e6, o5)}`, "}", "lastStatement = lc.voidOperation;"].join("\n");
}
function ae(n7, t4) {
  const o5 = Re2(n7);
  let l5 = "var " + o5 + " = " + ee2(n7, t4.right) + ";\n";
  "VariableDeclaration" === t4.left.type && (l5 += ne2(n7, t4.left));
  const r4 = n4("VariableDeclaration" === t4.left.type ? t4.left.declarations[0].id : t4.left);
  Se(r4);
  let a3 = "";
  null !== n7.localScope && (void 0 !== n7.localScope[r4] ? a3 = "lscope['" + r4 + "']" : void 0 !== n7.localScope._SymbolsMap[r4] && (a3 = "lscope['" + n7.localScope._SymbolsMap[r4] + "']"));
  let s7 = "";
  if ("" === a3) {
    if (void 0 !== n7.globalScope[r4]) a3 = "gscope['" + r4 + "']";
    else if (void 0 !== n7.globalScope._SymbolsMap[r4]) a3 = "gscope['" + n7.globalScope._SymbolsMap[r4] + "']";
    else if (null !== n7.localScope) if (n7.undeclaredGlobalsInFunctions.has(r4)) a3 = "gscope['" + n7.undeclaredGlobalsInFunctions.get(r4).manglename + "']", s7 = n7.undeclaredGlobalsInFunctions.get(r4).manglename;
    else {
      const e6 = { manglename: Ne(n7), node: t4.left };
      n7.undeclaredGlobalsInFunctions.set(r4, e6), a3 = "gscope['" + e6.manglename + "']", s7 = e6.manglename;
    }
  }
  return s7 && (l5 += "lang.chkAssig('" + s7 + "',runtimeCtx); \n"), l5 += "if (" + o5 + "===null) {  lastStatement = lc.voidOperation; }\n ", l5 += "else if (lc.isArray(" + o5 + ") || lc.isString(" + o5 + ")) {\n", l5 += oe2(n7, a3, `${o5}.length`, t4.body), l5 += "}\n", l5 += "else if (lc.isImmutableArray(" + o5 + ")) {\n", l5 += oe2(n7, a3, `${o5}.length()`, t4.body), l5 += "}\n", l5 += "else if (( " + o5 + " instanceof lang.Dictionary) || lc.isDictionaryLike(" + o5 + ")) {\n", l5 += le(n7, a3, `${o5}.keys()`, t4.body), l5 += "}\n", n7.isAsync && (l5 += "else if (lc.isFeatureSet(" + o5 + ")) {\n", l5 += re2(n7, a3, o5, t4.body), l5 += "}\n"), l5 += `else if (lc.isGeometry(${o5})) {
`, l5 += le(n7, a3, `lang.getGeometryKeys(${o5})`, t4.body), l5 += "}\n", l5 += "else { lastStatement = lc.voidOperation; } \n", l5;
}
function se(n7, t4) {
  const o5 = Re2(n7);
  let l5 = "var " + o5 + " = " + ee2(n7, t4.right) + ";\n";
  "VariableDeclaration" === t4.left.type && (l5 += ne2(n7, t4.left));
  const r4 = n4("VariableDeclaration" === t4.left.type ? t4.left.declarations[0].id : t4.left);
  Se(r4);
  let a3 = "";
  null !== n7.localScope && (void 0 !== n7.localScope[r4] ? a3 = "lscope['" + r4 + "']" : void 0 !== n7.localScope._SymbolsMap[r4] && (a3 = "lscope['" + n7.localScope._SymbolsMap[r4] + "']"));
  let s7 = "";
  if ("" === a3) {
    if (void 0 !== n7.globalScope[r4]) a3 = "gscope['" + r4 + "']";
    else if (void 0 !== n7.globalScope._SymbolsMap[r4]) a3 = "gscope['" + n7.globalScope._SymbolsMap[r4] + "']";
    else if (null !== n7.localScope) if (n7.undeclaredGlobalsInFunctions.has(r4)) a3 = "gscope['" + n7.undeclaredGlobalsInFunctions.get(r4).manglename + "']", s7 = n7.undeclaredGlobalsInFunctions.get(r4).manglename;
    else {
      const e6 = { manglename: Ne(n7), node: t4.left };
      n7.undeclaredGlobalsInFunctions.set(r4, e6), a3 = "gscope['" + e6.manglename + "']", s7 = e6.manglename;
    }
  }
  return s7 && (l5 += "lang.chkAssig('" + s7 + "',runtimeCtx); \n"), l5 += "if (" + o5 + "===null) {  lastStatement = lc.voidOperation; }\n ", l5 += "else if (lc.isArray(" + o5 + ") || lc.isString(" + o5 + ")) {\n", l5 += oe2(n7, a3, `${o5}.length`, t4.body, (e6, n8) => [`if (${n8} >= ${o5}.length) {`, `  lang.error('${r.OutOfBounds}');`, "}", `${e6} = ${o5}[${n8}];`].join("\n")), l5 += "}\n", l5 += "else if (lc.isImmutableArray(" + o5 + ")) {\n", l5 += oe2(n7, a3, `${o5}.length()`, t4.body, (e6, n8) => `${e6} = ${o5}.get(${n8});`), l5 += "}\n", l5 += "else if (( " + o5 + " instanceof lang.Dictionary) || lc.isDictionaryLike(" + o5 + ")) {\n", l5 += le(n7, a3, `${o5}.keys()`, t4.body, (e6) => `lang.entry(${e6}, ${o5}.field(${e6}))`), l5 += "}\n", n7.isAsync && (l5 += "else if (lc.isFeatureSet(" + o5 + ")) {\n", l5 += re2(n7, a3, o5, t4.body), l5 += "}\n"), l5 += `else if (lc.isGeometry(${o5})) {
`, l5 += le(n7, a3, `lang.getGeometryKeys(${o5})`, t4.body, (e6) => `lang.entry(${e6}, lang.geometryMember(${o5}, ${e6}, runtimeCtx, null, 1))`), l5 += "}\n", l5 += "else { lastStatement = lc.voidOperation; } \n", l5;
}
function ie(e6, n7) {
  let t4 = "lastStatement = lc.voidOperation; \n";
  null !== n7.init && ("VariableDeclaration" === n7.init.type ? t4 += ne2(e6, n7.init) : t4 += ee2(e6, n7.init) + "; ");
  const o5 = Re2(e6), l5 = Re2(e6);
  return t4 += "var " + o5 + " = true; ", t4 += "\n do { ", null !== n7.update && (t4 += " if (" + o5 + "===false) {\n " + ee2(e6, n7.update) + "  \n}\n " + o5 + "=false; \n"), null !== n7.test && (t4 += "var " + l5 + " = " + ee2(e6, n7.test) + "; ", t4 += "if (" + l5 + "===false) { break; } else if (" + l5 + "!==true) { lang.error('" + r.BooleanConditionRequired + "');   }\n"), t4 += ne2(e6, n7.body), null !== n7.update && (t4 += "\n " + ee2(e6, n7.update)), t4 += "\n" + o5 + " = true; \n} while(true);  lastStatement = lc.voidOperation; ", t4;
}
function ce2(n7, t4) {
  if ("CallExpression" === t4.argument.type) throw new c(n7, r.NeverReach, t4);
  let o5;
  if ("MemberExpression" === t4.argument.type) {
    const e6 = ee2(n7, t4.argument.object);
    return true === t4.argument.computed ? o5 = ee2(n7, t4.argument.property) : (Se(t4.argument.property.name), o5 = "'" + t4.argument.property.name + "'"), "lang.memberupdate(" + e6 + "," + o5 + ",'" + t4.operator + "'," + t4.prefix + ")";
  }
  const l5 = n4(t4.argument);
  if (Se(l5), null !== n7.localScope) {
    if (void 0 !== n7.localScope[l5]) return "lang.update(lscope, '" + l5 + "','" + t4.operator + "'," + t4.prefix + ")";
    if (void 0 !== n7.localScope._SymbolsMap[l5]) return "lang.update(lscope, '" + n7.localScope._SymbolsMap[l5] + "','" + t4.operator + "'," + t4.prefix + ")";
  }
  if (void 0 !== n7.globalScope[l5]) return "lang.update(gscope, '" + l5 + "','" + t4.operator + "'," + t4.prefix + ")";
  if (void 0 !== n7.globalScope._SymbolsMap[l5]) return "lang.update(gscope, '" + n7.globalScope._SymbolsMap[l5] + "','" + t4.operator + "'," + t4.prefix + ")";
  if (null !== n7.localScope) {
    if (n7.undeclaredGlobalsInFunctions.has(l5)) return "lang.update(gscope,lang.chkAssig( '" + n7.undeclaredGlobalsInFunctions.get(l5).manglename + "',runtimeCtx),'" + t4.operator + "'," + t4.prefix + ")";
    const e6 = { manglename: Ne(n7), node: t4.argument };
    return n7.undeclaredGlobalsInFunctions.set(l5, e6), "lang.update(gscope, lang.chkAssig('" + e6.manglename + "',runtimeCtx),'" + t4.operator + "'," + t4.prefix + ")";
  }
  throw new a(n7, r.InvalidIdentifier, t4);
}
function ue(e6, n7) {
  let t4 = "lastStatement = lc.voidOperation; \n";
  const o5 = Re2(e6);
  return t4 += `
  var ${o5} = true;
    do {
      ${o5} = ${ee2(e6, n7.test)};
      if (${o5}==false) {
        break;
      }
      if (${o5}!==true) {
        lang.error('${r.BooleanConditionRequired}');
      }
      ${ne2(e6, n7.body)}
    }
    while (${o5} !== false);
    lastStatement = lc.voidOperation;
  `, t4;
}
function pe(n7, t4) {
  const o5 = ee2(n7, t4.right);
  if ("MemberExpression" === t4.left.type) {
    let e6;
    const l6 = ee2(n7, t4.left.object);
    return true === t4.left.computed ? e6 = ee2(n7, t4.left.property) : (e6 = "'" + t4.left.property.name + "'", Se(t4.left.property.name)), "lang.assignmember(" + l6 + "," + e6 + ",'" + t4.operator + "'," + o5 + ")";
  }
  const l5 = n4(t4.left);
  if (Se(l5), null !== n7.localScope) {
    if (void 0 !== n7.localScope[l5]) return "lscope['" + l5 + "']=lang.assign(" + o5 + ",'" + t4.operator + "', lscope['" + l5 + "'])";
    if (void 0 !== n7.localScope._SymbolsMap[l5]) return "lscope['" + n7.localScope._SymbolsMap[l5] + "']=lang.assign(" + o5 + ",'" + t4.operator + "', lscope['" + n7.localScope._SymbolsMap[l5] + "'])";
  }
  if (void 0 !== n7.globalScope[l5]) return "gscope['" + l5 + "']=lang.assign(" + o5 + ",'" + t4.operator + "', gscope['" + l5 + "'])";
  if (void 0 !== n7.globalScope._SymbolsMap[l5]) return "gscope['" + n7.globalScope._SymbolsMap[l5] + "']=lang.assign(" + o5 + ",'" + t4.operator + "', gscope['" + n7.globalScope._SymbolsMap[l5] + "'])";
  if (null !== n7.localScope) {
    if (n7.undeclaredGlobalsInFunctions.has(l5)) return "gscope[lang.chkAssig('" + n7.undeclaredGlobalsInFunctions.get(l5).manglename + "',runtimeCtx)]=lang.assign(" + o5 + ",'" + t4.operator + "', gscope['" + n7.undeclaredGlobalsInFunctions.get(l5).manglename + "'])";
    const e6 = { manglename: Ne(n7), node: t4.left };
    return n7.undeclaredGlobalsInFunctions.set(l5, e6), "gscope[lang.chkAssig('" + e6.manglename + "',runtimeCtx)]=lang.assign(" + o5 + ",'" + t4.operator + "', gscope['" + e6.manglename + "'])";
  }
  throw new a(n7, r.InvalidIdentifier, t4);
}
function me2(e6, n7) {
  return "AssignmentExpression" === n7.expression.type ? "lastStatement = lc.voidOperation; " + ee2(e6, n7.expression) + "; \n " : "lastStatement = " + ee2(e6, n7.expression) + "; ";
}
function ge(e6, n7) {
  return "BlockStatement" === n7.type ? ne2(e6, n7) : "ReturnStatement" === n7.type || "BreakStatement" === n7.type || "ContinueStatement" === n7.type ? ne2(e6, n7) + "; " : "ExpressionStatement" === n7.type ? ne2(e6, n7) : ne2(e6, n7) + "; ";
}
function de(e6, n7) {
  return `if (lang.mustBoolean(${ee2(e6, n7.test)}, runtimeCtx) === true) {
    ${ge(e6, n7.consequent)}
  } ` + (null !== n7.alternate ? "IfStatement" === n7.alternate.type ? " else " + de(e6, n7.alternate) : ` else {
      ${ge(e6, n7.alternate)}
    }
` : " else {\n      lastStatement = lc.voidOperation;\n    }\n");
}
function fe(e6, n7) {
  let t4 = "";
  for (let o5 = 0; o5 < n7.body.length; o5++) "EmptyStatement" !== n7.body[o5].type && ("ReturnStatement" === n7.body[o5].type || "BreakStatement" === n7.body[o5].type || "ContinueStatement" === n7.body[o5].type ? t4 += ne2(e6, n7.body[o5]) + "; \n" : t4 += ne2(e6, n7.body[o5]) + " \n");
  return t4;
}
function he(e6, n7) {
  if (null === n7.argument) return "return lc.voidOperation";
  return "return " + ee2(e6, n7.argument);
}
function ye2(n7, t4) {
  var _a;
  const o5 = n4(t4.specifiers[0].local);
  Se(o5);
  const l5 = (_a = n7.libraryResolver) == null ? void 0 : _a.loadLibrary(o5), r4 = Ne(n7);
  void 0 === n7.moduleFactory[l5.uri] && (n7.moduleFactory[l5.uri] = Xe2(l5.syntax, { interceptor: n7.interceptor, services: n7.services, moduleFactory: n7.moduleFactory, lrucache: n7.lrucache, timeZone: n7.timeZone ?? null, libraryResolver: n7.libraryResolver, customfunctions: n7.customfunctions, vars: {} }, n7.isAsync)), n7.moduleFactoryMap[r4] = l5.uri;
  let a3, s7 = "";
  return s7 = n7.isAsync ? "(yield lang.loadModule('" + r4 + "', runtimeCtx) ); " : "lang.loadModule('" + r4 + "', runtimeCtx); ", void 0 !== n7.globalScope[o5] ? "gscope['" + o5 + "']=" + s7 : void 0 !== n7.globalScope._SymbolsMap[o5] ? "gscope['" + n7.globalScope._SymbolsMap[o5] + "']=" + s7 : (n7.undeclaredGlobalsInFunctions.has(o5) ? (a3 = n7.undeclaredGlobalsInFunctions.get(o5).manglename, n7.undeclaredGlobalsInFunctions.delete(o5)) : a3 = Ne(n7), n7.globalScope._SymbolsMap[o5] = a3, n7.mangleMap[o5] = a3, "gscope[lang.setAssig('" + a3 + "', runtimeCtx)]=" + s7);
}
function be2(n7, t4) {
  const o5 = ne2(n7, t4.declaration);
  if ("FunctionDeclaration" === t4.declaration.type) n7.exports[n4(t4.declaration.id)] = "function";
  else if ("VariableDeclaration" === t4.declaration.type) for (const l5 of t4.declaration.declarations) n7.exports[n4(l5.id)] = "variable";
  return o5;
}
function Se(e6) {
  if ("iif" === e6) throw new i2();
  if ("decode" === e6) throw new i2();
  if ("when" === e6) throw new i2();
  if ("defaultvalue" === e6) throw new i2();
}
function we(n7, t4) {
  const o5 = n4(t4.id);
  let l5;
  Se(o5);
  let r4 = false;
  void 0 !== n7.globalScope[o5] ? l5 = o5 : void 0 !== n7.globalScope._SymbolsMap[o5] ? l5 = n7.globalScope._SymbolsMap[o5] : n7.undeclaredGlobalsInFunctions.has(o5) ? (l5 = n7.undeclaredGlobalsInFunctions.get(o5).manglename, n7.globalScope._SymbolsMap[o5] = l5, n7.mangleMap[o5] = l5, n7.undeclaredGlobalsInFunctions.delete(o5), r4 = true) : (l5 = Ne(n7), n7.globalScope._SymbolsMap[o5] = l5, n7.mangleMap[o5] = l5);
  const a3 = { isAsync: n7.isAsync, console: n7.console, exports: n7.exports, undeclaredGlobalsInFunctions: n7.undeclaredGlobalsInFunctions, customfunctions: n7.customfunctions, moduleFactory: n7.moduleFactory, moduleFactoryMap: n7.moduleFactoryMap, libraryResolver: n7.libraryResolver, lrucache: n7.lrucache, interceptor: n7.interceptor, services: n7.services, symbols: n7.symbols, mangleMap: n7.mangleMap, localScope: { _SymbolsMap: {} }, depthCounter: n7.depthCounter, globalScope: n7.globalScope };
  let s7 = "new lang.UserDefinedCompiledFunction( lang.functionDepthchecker(function() { var lastStatement = lc.voidOperation; \n   var lscope = runtimeCtx.localStack[runtimeCtx.localStack.length-1];\n";
  for (let i4 = 0; i4 < t4.params.length; i4++) {
    const o6 = n4(t4.params[i4]);
    Se(o6);
    const l6 = Ne(n7);
    a3.localScope._SymbolsMap[o6] = l6, a3.mangleMap[o6] = l6, s7 += "lscope['" + l6 + "']=arguments[" + i4.toString() + "];\n";
  }
  return true === n7.isAsync ? (s7 += "return lang.__awaiter(this, void 0, void 0, function* () {\n", s7 += fe(a3, t4.body) + "\n return lastStatement; ", s7 += "});  }", s7 += ", runtimeCtx)," + t4.params.length + ")", s7 += "\n lastStatement = lc.voidOperation; \n") : (s7 += fe(a3, t4.body) + "\n return lastStatement; }, runtimeCtx)," + t4.params.length + ")", s7 += "\n lastStatement = lc.voidOperation; \n"), r4 ? "gscope[lang.setAssig('" + l5 + "', runtimeCtx)]=" + s7 : "gscope['" + l5 + "']=" + s7;
}
function ve(e6, n7) {
  const t4 = [];
  for (let o5 = 0; o5 < n7.declarations.length; o5++) t4.push(xe(e6, n7.declarations[o5]));
  return t4.join("\n") + " \n lastStatement=  lc.voidOperation; \n";
}
function xe(n7, t4) {
  const o5 = null === t4.init ? null : ee2(n7, t4.init), l5 = n4(t4.id);
  if (Se(l5), null !== n7.localScope) {
    if (void 0 !== n7.localScope[l5]) return "lscope['" + l5 + "']=" + o5 + "; ";
    if (void 0 !== n7.localScope._SymbolsMap[l5]) return "lscope['" + n7.localScope._SymbolsMap[l5] + "']=" + o5 + "; ";
    const e6 = Ne(n7);
    return n7.localScope._SymbolsMap[l5] = e6, n7.mangleMap[l5] = e6, "lscope['" + e6 + "']=" + o5 + "; ";
  }
  if (void 0 !== n7.globalScope[l5]) return "gscope['" + l5 + "']=" + o5 + "; ";
  if (void 0 !== n7.globalScope._SymbolsMap[l5]) return "gscope['" + n7.globalScope._SymbolsMap[l5] + "']=" + o5 + "; ";
  if (n7.undeclaredGlobalsInFunctions.has(l5)) {
    const e6 = n7.undeclaredGlobalsInFunctions.get(l5).manglename;
    return n7.globalScope._SymbolsMap[l5] = e6, n7.mangleMap[l5] = e6, n7.undeclaredGlobalsInFunctions.delete(l5), "gscope[lang.setAssig('" + e6 + "', runtimeCtx)]=" + o5 + "; ";
  }
  const r4 = Ne(n7);
  return n7.globalScope._SymbolsMap[l5] = r4, n7.mangleMap[l5] = r4, "gscope['" + r4 + "']=" + o5 + "; ";
}
function Me2(e6, n7) {
  try {
    let t4;
    return true === n7.computed ? t4 = ee2(e6, n7.property) : (Se(n7.property.name), t4 = "'" + n7.property.name + "'"), "lang.member(" + ee2(e6, n7.object) + "," + t4 + ")";
  } catch (t4) {
    throw t4;
  }
}
function Fe2(e6, n7) {
  try {
    return "lang.unary(" + ee2(e6, n7.argument) + ",'" + n7.operator + "')";
  } catch (t4) {
    throw t4;
  }
}
function $e(e6, n7) {
  try {
    const t4 = [];
    for (let o5 = 0; o5 < n7.elements.length; o5++) "Literal" === n7.elements[o5].type ? t4.push(ee2(e6, n7.elements[o5])) : t4.push("lang.aCheck(" + ee2(e6, n7.elements[o5]) + ",'ArrayExpression')");
    return "[" + t4.join(",") + "]";
  } catch (t4) {
    throw t4;
  }
}
function Ce(e6, n7) {
  try {
    const t4 = [];
    let o5 = 0;
    for (const l5 of n7.quasis) t4.push(l5.value ? JSON.stringify(l5.value.cooked) : JSON.stringify("")), false === l5.tail && (t4.push(n7.expressions[o5] ? "lang.castString(lang.aCheck(" + ee2(e6, n7.expressions[o5]) + ", 'TemplateLiteral'))" : ""), o5++);
    return "([" + t4.join(",") + "]).join('')";
  } catch (t4) {
    throw t4;
  }
}
function Ie(e6, n7) {
  try {
    return "lang.binary(" + ee2(e6, n7.left) + "," + ee2(e6, n7.right) + ",'" + n7.operator + "')";
  } catch (t4) {
    throw t4;
  }
}
function Ae2(e6, n7) {
  try {
    if ("AssignmentExpression" === n7.left.type || "UpdateExpression" === n7.left.type) throw new c(e6, r.LogicalExpressionOnlyBoolean, n7);
    if ("AssignmentExpression" === n7.right.type || "UpdateExpression" === n7.right.type) throw new c(e6, r.LogicalExpressionOnlyBoolean, n7);
    if ("&&" === n7.operator || "||" === n7.operator) return "(lang.logicalCheck(" + ee2(e6, n7.left) + ") " + n7.operator + " lang.logicalCheck(" + ee2(e6, n7.right) + "))";
    throw new c(null, r.LogicExpressionOrAnd, null);
  } catch (t4) {
    throw t4;
  }
}
function _e(n7, t4) {
  try {
    const o5 = n4(t4);
    if (Se(o5), null !== n7.localScope) {
      if (void 0 !== n7.localScope[o5]) return "lscope['" + o5 + "']";
      if (void 0 !== n7.localScope._SymbolsMap[o5]) return "lscope['" + n7.localScope._SymbolsMap[o5] + "']";
    }
    if (void 0 !== n7.globalScope[o5]) return "gscope['" + o5 + "']";
    if (void 0 !== n7.globalScope._SymbolsMap[o5]) return "gscope['" + n7.globalScope._SymbolsMap[o5] + "']";
    if (null !== n7.localScope) {
      if (n7.undeclaredGlobalsInFunctions.has(o5)) return "gscope[lang.chkAssig('" + n7.undeclaredGlobalsInFunctions.get(o5).manglename + "',runtimeCtx)]";
      const e6 = { manglename: Ne(n7), node: t4 };
      return n7.undeclaredGlobalsInFunctions.set(o5, e6), "gscope[lang.chkAssig('" + e6.manglename + "',runtimeCtx)]";
    }
    throw new c(n7, r.InvalidIdentifier, t4);
  } catch (o5) {
    throw o5;
  }
}
function Oe(n7, t4) {
  try {
    if ("MemberExpression" === t4.callee.type) {
      let e6;
      true === t4.callee.computed ? e6 = ee2(n7, t4.callee.property) : (Se(t4.callee.property.name), e6 = "'" + t4.callee.property.name + "'");
      let o6 = "[";
      for (let l6 = 0; l6 < t4.arguments.length; l6++) l6 > 0 && (o6 += ", "), o6 += ee2(n7, t4.arguments[l6]);
      return o6 += "]", n7.isAsync ? "(yield lang.callModuleFunction(" + ee2(n7, t4.callee.object) + "," + o6 + "," + e6 + ",runtimeCtx))" : "lang.callModuleFunction(" + ee2(n7, t4.callee.object) + "," + o6 + "," + e6 + ",runtimeCtx)";
    }
    if ("Identifier" !== t4.callee.type) throw new c(n7, r.FunctionNotFound, t4);
    const o5 = n4(t4.callee);
    if ("iif" === o5) return ke(n7, t4);
    if ("when" === o5) return Ee(n7, t4);
    if ("defaultvalue" === o5) return Ge(n7, t4);
    if ("decode" === o5) return je(n7, t4);
    let l5 = "";
    if (null !== n7.localScope && (void 0 !== n7.localScope[o5] ? l5 = "lscope['" + o5 + "']" : void 0 !== n7.localScope._SymbolsMap[o5] && (l5 = "lscope['" + n7.localScope._SymbolsMap[o5] + "']")), "" === l5) {
      if (void 0 !== n7.globalScope[o5]) l5 = "gscope['" + o5 + "']";
      else if (void 0 !== n7.globalScope._SymbolsMap[o5]) l5 = "gscope['" + n7.globalScope._SymbolsMap[o5] + "']";
      else if (null !== n7.localScope) if (n7.undeclaredGlobalsInFunctions.has(o5)) l5 = "gscope[lang.chkAssig('" + n7.undeclaredGlobalsInFunctions.get(o5).manglename + "',runtimeCtx)]";
      else {
        const e6 = { manglename: Ne(n7), node: t4.callee };
        n7.undeclaredGlobalsInFunctions.set(o5, e6), l5 = "gscope[lang.chkAssig('" + e6.manglename + "',runtimeCtx)]";
      }
    }
    if ("" !== l5) {
      let e6 = "[";
      for (let o6 = 0; o6 < t4.arguments.length; o6++) o6 > 0 && (e6 += ", "), e6 += ee2(n7, t4.arguments[o6]);
      return e6 += "]", n7.isAsync ? "(yield lang.callfunc(" + l5 + "," + e6 + ",runtimeCtx) )" : "lang.callfunc(" + l5 + "," + e6 + ",runtimeCtx)";
    }
    throw new c(n7, r.FunctionNotFound, t4);
  } catch (o5) {
    throw o5;
  }
}
function ke(e6, n7) {
  try {
    if (3 !== n7.arguments.length) throw new c(e6, r.WrongNumberOfParameters, n7);
    const t4 = Re2(e6);
    return `${e6.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        var ${t4} = ${ee2(e6, n7.arguments[0])};

        if (${t4} === true) {
          return  ${ee2(e6, n7.arguments[1])};
        }
        else if (${t4} === false) {
          return ${ee2(e6, n7.arguments[2])};
        }
        else {
          lang.error('ExecutionErrorCodes.BooleanConditionRequired');
        }
      ${e6.isAsync ? "})}()))" : "}()"}`;
  } catch (t4) {
    throw t4;
  }
}
function Ge(e6, n7) {
  try {
    if (n7.arguments.length < 2 || n7.arguments.length > 3) throw new c(e6, r.WrongNumberOfParameters, n7);
    const t4 = Re2(e6), o5 = Re2(e6);
    return 3 === n7.arguments.length ? `${e6.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
      var ${t4} = ${ee2(e6, n7.arguments[0])};
      var ${o5} = ${ee2(e6, n7.arguments[1])};
      ${t4} = lang.getNestedOptionalValue(${t4}, ${o5});
      return ${t4} != null && ${t4} !== "" ? ${t4} : ${ee2(e6, n7.arguments[2])};
      ${e6.isAsync ? "})}()))" : "}()"}` : `${e6.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        var ${t4} = ${ee2(e6, n7.arguments[0])};
        if (${t4} === null) {
          return  ${ee2(e6, n7.arguments[1])};
        }
        if (${t4} === "") {
          return  ${ee2(e6, n7.arguments[1])};
        }
        if (${t4} === undefined) {
          return  ${ee2(e6, n7.arguments[1])};
        }
        return ${t4};
      ${e6.isAsync ? "})}()))" : "}()"}`;
  } catch (t4) {
    throw t4;
  }
}
function Ee(e6, n7) {
  try {
    if (n7.arguments.length < 3) throw new c(e6, r.WrongNumberOfParameters, n7);
    if (n7.arguments.length % 2 == 0) throw new c(e6, r.WrongNumberOfParameters, n7);
    const t4 = Re2(e6);
    let o5 = "var ";
    for (let l5 = 0; l5 < n7.arguments.length - 1; l5 += 2) o5 += `${t4} = lang.mustBoolean(${ee2(e6, n7.arguments[l5])}, runtimeCtx);
      if (${t4} === true ) {
        return ${ee2(e6, n7.arguments[l5 + 1])}
      }
`;
    return `${e6.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        ${o5}
        return ${ee2(e6, n7.arguments[n7.arguments.length - 1])}
        ${e6.isAsync ? "})}()))" : "}()"}`;
  } catch (t4) {
    throw t4;
  }
}
function je(e6, n7) {
  try {
    if (n7.arguments.length < 2) throw new c(e6, r.WrongNumberOfParameters, n7);
    if (2 === n7.arguments.length) return `(${ee2(e6, n7.arguments[1])})`;
    if ((n7.arguments.length - 1) % 2 == 0) throw new c(e6, r.WrongNumberOfParameters, n7);
    const t4 = Re2(e6), o5 = Re2(e6);
    let l5 = "var ";
    for (let r4 = 1; r4 < n7.arguments.length - 1; r4 += 2) l5 += `${o5} = ${ee2(e6, n7.arguments[r4])};
      if (lang.binary(${o5}, ${t4}, "==") === true ) {
        return ${ee2(e6, n7.arguments[r4 + 1])}
      }
`;
    return `${e6.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        var ${t4} = ${ee2(e6, n7.arguments[0])};
        ${l5}
        return ${ee2(e6, n7.arguments[n7.arguments.length - 1])}
        ${e6.isAsync ? "})}()))" : "}()"}`;
  } catch (t4) {
    throw t4;
  }
}
var Be2 = {};
function Ne(e6) {
  return e6.symbols.symbolCounter++, `_T${e6.symbols.symbolCounter}`;
}
function Re2(e6) {
  return e6.symbols.symbolCounter++, `_Tvar${e6.symbols.symbolCounter}`;
}
C2(Be2, X), E(Be2, X), g2(Be2, X, Ve), p5(Be2, X), B(Be2, X), f4(Be2, X), Be2.iif = function(e6, n7) {
  try {
    return X(e6, n7, (t4, o5, l5) => {
      throw new a(e6, r.Unrecognized, n7);
    });
  } catch (t4) {
    throw t4;
  }
}, Be2.decode = function(e6, n7) {
  try {
    return X(e6, n7, (t4, o5, l5) => {
      throw new a(e6, r.Unrecognized, n7);
    });
  } catch (t4) {
    throw t4;
  }
}, Be2.when = function(e6, n7) {
  try {
    return X(e6, n7, (t4, o5, l5) => {
      throw new a(e6, r.Unrecognized, n7);
    });
  } catch (t4) {
    throw t4;
  }
}, Be2.defaultvalue = function(e6, n7) {
  try {
    return X(e6, n7, (t4, o5, l5) => {
      throw new a(e6, r.Unrecognized, n7);
    });
  } catch (t4) {
    throw t4;
  }
};
var De = {};
for (const en in Be2) De[en] = new e2(Be2[en]);
G2(Be2, X);
for (const en in Be2) Be2[en] = new e2(Be2[en]);
var Le = function() {
};
Le.prototype = Be2;
var Ue = function() {
};
function Ke(e6, n7, t4) {
  const o5 = { _SymbolsMap: {} };
  e6 || (e6 = {}), t4 || (t4 = {}), o5.textformatting = 1, o5.infinity = 1, o5.pi = 1;
  for (const l5 in n7) o5[l5] = 1;
  for (const l5 in t4) o5[l5] = 1;
  for (const l5 in e6) o5[l5] = 1;
  return o5;
}
function Ze2(e6, n7, t4, o5) {
  const l5 = t4 ? new Ue() : new Le();
  e6 || (e6 = {}), n7 || (n7 = {});
  const r4 = new C({ newline: "\n", tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  r4.immutable = false, l5._SymbolsMap = { textformatting: 1, infinity: 1, pi: 1 }, l5.textformatting = r4, l5.infinity = Number.POSITIVE_INFINITY, l5.pi = Math.PI;
  for (const a3 in n7) l5[a3] = n7[a3], l5._SymbolsMap[a3] = 1;
  for (const a3 in e6) {
    const n8 = e6[a3];
    l5._SymbolsMap[a3] = 1, i(n8) ? l5[a3] = D.createFromGraphic(n8, o5 ?? null) : l5[a3] = n8;
  }
  return l5;
}
Ue.prototype = De;
function We(e6, n7) {
  const t4 = { mode: n7, compiled: true, functions: {}, signatures: [], standardFunction: X, standardFunctionAsync: X, evaluateIdentifier: Ve };
  for (let o5 = 0; o5 < e6.length; o5++) e6[o5].registerFunctions(t4);
  if ("sync" === n7) {
    for (const e7 in t4.functions) Be2[e7] = new e2(t4.functions[e7]), Le.prototype[e7] = Be2[e7];
    for (let e7 = 0; e7 < t4.signatures.length; e7++) s4(t4.signatures[e7], "sync");
  } else {
    for (const e7 in t4.functions) De[e7] = new e2(t4.functions[e7]), Ue.prototype[e7] = De[e7];
    for (let e7 = 0; e7 < t4.signatures.length; e7++) s4(t4.signatures[e7], "async");
  }
}
function Ve(e6, n7) {
  const t4 = n7.name;
  if ("_SymbolsMap" === t4) throw new a(e6, r.InvalidIdentifier, null);
  if (e6.localStack.length > 0) {
    const n8 = e6.localStack[e6.localStack.length - 1];
    if (!t4.toLowerCase().startsWith("_t") && void 0 !== n8[t4]) return n8[t4];
    const o6 = e6.mangleMap[t4];
    if (void 0 !== o6 && void 0 !== n8[o6]) return n8[o6];
  }
  if (!t4.toLowerCase().startsWith("_t") && void 0 !== e6.globalScope[t4]) return e6.globalScope[t4];
  if (1 === e6.globalScope._SymbolsMap[t4]) return e6.globalScope[t4];
  const o5 = e6.mangleMap[t4];
  return void 0 !== o5 ? e6.globalScope[o5] : void 0;
}
We([p3], "sync"), We([p3], "async");
var qe = 0;
var ze = { isNumber: (e6) => n3(e6), isArray: (e6) => o2(e6), isImmutableArray: (e6) => ee(e6), isDictionaryLike: (e6) => W(e6), isString: (e6) => e(e6), isDictionary: (e6) => K(e6), isGeometry: (e6) => U(e6), getGeometryKeys: (e6) => f2(e6), geometryMember: (e6, n7, t4, o5, r4 = 1) => d(e6, n7, t4, o5, r4), error(e6) {
  throw new a(null, e6, null);
}, __awaiter: (e6, n7, t4, o5) => new Promise((t5, l5) => {
  function r4(e7) {
    try {
      s7(o5.next(e7));
    } catch (n8) {
      l5(n8);
    }
  }
  function a3(e7) {
    try {
      s7(o5.throw(e7));
    } catch (n8) {
      l5(n8);
    }
  }
  function s7(e7) {
    var _a;
    e7.done ? t5(e7.value) : ((_a = e7.value) == null ? void 0 : _a.then) ? e7.value.then(r4, a3) : (qe++, qe % 100 == 0 ? setTimeout(() => {
      qe = 0, r4(e7.value);
    }, 0) : r4(e7.value));
  }
  s7((o5 = o5.apply(e6, n7 || [])).next());
}), functionDepthchecker: (e6, n7) => function() {
  if (n7.depthCounter.depth++, n7.localStack.push({}), n7.depthCounter.depth > 64) throw new a(null, r.MaximumCallDepth, null);
  const t4 = e6.apply(this, arguments);
  return S(t4) ? t4.then((e7) => (n7.depthCounter.depth--, n7.localStack.length = n7.localStack.length - 1, e7)) : (n7.depthCounter.depth--, n7.localStack.length = n7.localStack.length - 1, t4);
}, chkAssig(e6, n7) {
  if (void 0 === n7.gdefs[e6]) throw new a(n7, r.InvalidIdentifier, null);
  return e6;
}, mustBoolean(e6, n7) {
  if (true === e6 || false === e6) return e6;
  throw new a(n7, r.BooleanConditionRequired, null);
}, setAssig: (e6, n7) => (n7.gdefs[e6] = 1, e6), castString: (e6) => ye(e6), aCheck(e6, n7) {
  if (G(e6)) {
    if ("ArrayExpression" === n7) throw new a(null, r.NoFunctionInArray, null);
    if ("ObjectExpression" === n7) throw new a(null, r.NoFunctionInDictionary, null);
    throw new a(null, r.NoFunctionInTemplateLiteral, null);
  }
  return e6 === v ? null : e6;
}, Dictionary: C, Feature: D, UserDefinedCompiledFunction: H2, dictionary(e6) {
  const n7 = {}, t4 = /* @__PURE__ */ new Map();
  for (let l5 = 0; l5 < e6.length; l5 += 2) {
    if (G(e6[l5 + 1])) throw new a(null, r.NoFunctionInDictionary, null);
    if (false === e(e6[l5])) throw new a(null, r.KeyMustBeString, null);
    let o6 = e6[l5].toString();
    const r4 = o6.toLowerCase();
    t4.has(r4) ? o6 = t4.get(r4) : t4.set(r4, o6), e6[l5 + 1] === v ? n7[o6] = null : n7[o6] = e6[l5 + 1];
  }
  const o5 = new C(n7);
  return o5.immutable = false, o5;
}, entry: (e6, n7) => new C({ key: e6, value: n7 }), strCheck(e6) {
  if (false === e(e6)) throw new a(null, r.KeyMustBeString, null);
  return e6;
}, unary(e6, n7) {
  if (t(e6)) {
    if ("!" === n7) return !e6;
    if ("-" === n7) return -1 * be(e6);
    if ("+" === n7) return 1 * be(e6);
    if ("~" === n7) return ~be(e6);
    throw new a(null, r.UnsupportedUnaryOperator, null);
  }
  if ("-" === n7) return -1 * be(e6);
  if ("+" === n7) return 1 * be(e6);
  if ("~" === n7) return ~be(e6);
  throw new a(null, r.UnsupportedUnaryOperator, null);
}, logicalCheck(e6) {
  if (false === t(e6)) throw new a(null, r.LogicExpressionOrAnd, null);
  return e6;
}, logical(e6, n7, t4) {
  if (t(e6) && t(n7)) switch (t4) {
    case "||":
      return e6 || n7;
    case "&&":
      return e6 && n7;
    default:
      throw new a(null, r.LogicExpressionOrAnd, null);
  }
  throw new a(null, r.LogicExpressionOrAnd, null);
}, binary(e6, n7, t4) {
  switch (t4) {
    case "|":
    case "<<":
    case ">>":
    case ">>>":
    case "^":
    case "&":
      return Ye(be(e6), be(n7), t4);
    case "==":
    case "=":
      return me(e6, n7);
    case "!=":
      return !me(e6, n7);
    case "<":
    case ">":
    case "<=":
    case ">=":
      return ce(e6, n7, t4);
    case "+":
      return e(e6) || e(n7) ? ye(e6) + ye(n7) : be(e6) + be(n7);
    case "-":
      return be(e6) - be(n7);
    case "*":
      return be(e6) * be(n7);
    case "/":
      return be(e6) / be(n7);
    case "%":
      return be(e6) % be(n7);
    default:
      throw new a(null, r.UnsupportedOperator, null);
  }
}, assign(e6, n7, t4) {
  switch (n7) {
    case "=":
      return e6 === v ? null : e6;
    case "/=":
      return be(t4) / be(e6);
    case "*=":
      return be(t4) * be(e6);
    case "-=":
      return be(t4) - be(e6);
    case "+=":
      return e(t4) || e(e6) ? ye(t4) + ye(e6) : be(t4) + be(e6);
    case "%=":
      return be(t4) % be(e6);
    default:
      throw new a(null, r.UnsupportedOperator, null);
  }
}, update(e6, n7, t4, o5) {
  const l5 = be(e6[n7]);
  return e6[n7] = "++" === t4 ? l5 + 1 : l5 - 1, false === o5 ? l5 : "++" === t4 ? l5 + 1 : l5 - 1;
}, graphicToFeature: (e6, n7, t4) => null === e6 ? null : D.createFromGraphicLikeObject(e6.geometry, e6.attributes, n7, t4.timeZone), memberupdate(e6, n7, t4, o5) {
  let l5;
  if (o2(e6)) {
    if (!n3(n7)) throw new a(null, r.ArrayAccessorMustBeNumber, null);
    if (n7 < 0 && (n7 = e6.length + n7), n7 < 0 || n7 >= e6.length) throw new a(null, r.OutOfBounds, null);
    l5 = be(e6[n7]), e6[n7] = "++" === t4 ? l5 + 1 : l5 - 1;
  } else if (e6 instanceof C) {
    if (false === e(n7)) throw new a(null, r.KeyAccessorMustBeString, null);
    if (true !== e6.hasField(n7)) throw new a(null, r.FieldNotFound, null, { key: n7 });
    l5 = be(e6.field(n7)), e6.setField(n7, "++" === t4 ? l5 + 1 : l5 - 1);
  } else if (H(e6)) {
    if (false === e(n7)) throw new a(null, r.KeyAccessorMustBeString, null);
    if (true !== e6.hasField(n7)) throw new a(null, r.FieldNotFound, null);
    l5 = be(e6.field(n7)), e6.setField(n7, "++" === t4 ? l5 + 1 : l5 - 1);
  } else {
    if (ee(e6)) throw new a(null, r.Immutable, null);
    if (!(e6 instanceof Qe)) throw new a(null, r.InvalidIdentifier, null);
    if (false === e(n7)) throw new a(null, r.ModuleAccessorMustBeString, null);
    if (true !== e6.hasGlobal(n7)) throw new a(null, r.ModuleExportNotFound, null);
    l5 = be(e6.global(n7)), e6.setGlobal(n7, "++" === t4 ? l5 + 1 : l5 - 1);
  }
  return false === o5 ? l5 : "++" === t4 ? l5 + 1 : l5 - 1;
}, assignmember(e6, n7, t4, o5) {
  if (o2(e6)) {
    if (!n3(n7)) throw new a(null, r.ArrayAccessorMustBeNumber, null);
    if (n7 < 0 && (n7 = e6.length + n7), n7 < 0 || n7 > e6.length) throw new a(null, r.OutOfBounds, null);
    if (n7 === e6.length) {
      if ("=" !== t4) throw new a(null, r.OutOfBounds, null);
      e6[n7] = this.assign(o5, t4, e6[n7]);
    } else e6[n7] = this.assign(o5, t4, e6[n7]);
  } else if (e6 instanceof C) {
    if (false === e(n7)) throw new a(null, r.KeyAccessorMustBeString, null);
    if (true === e6.hasField(n7)) e6.setField(n7, this.assign(o5, t4, e6.field(n7)));
    else {
      if ("=" !== t4) throw new a(null, r.FieldNotFound, null);
      e6.setField(n7, this.assign(o5, t4, null));
    }
  } else if (H(e6)) {
    if (false === e(n7)) throw new a(null, r.KeyAccessorMustBeString, null);
    if (true === e6.hasField(n7)) e6.setField(n7, this.assign(o5, t4, e6.field(n7)));
    else {
      if ("=" !== t4) throw new a(null, r.FieldNotFound, null);
      e6.setField(n7, this.assign(o5, t4, null));
    }
  } else {
    if (ee(e6)) throw new a(null, r.Immutable, null);
    if (!(e6 instanceof Qe)) throw new a(null, r.InvalidIdentifier, null);
    if (false === e(n7)) throw new a(null, r.ModuleAccessorMustBeString, null);
    if (!e6.hasGlobal(n7)) throw new a(null, r.ModuleExportNotFound, null);
    e6.setGlobal(n7, this.assign(o5, t4, e6.global(n7)));
  }
}, member(e6, n7) {
  if (null === e6) throw new a(null, r.MemberOfNull, null);
  if (e6 instanceof C || W(e6)) {
    if (e(n7)) return e6.field(n7);
    throw new a(null, r.InvalidMemberAccessKey, null);
  }
  if (e6 instanceof n2) {
    if (e(n7)) return d(e6, n7, null, null);
    throw new a(null, r.InvalidMemberAccessKey, null);
  }
  if (o2(e6)) {
    if (n3(n7) && isFinite(n7) && Math.floor(n7) === n7) {
      if (n7 < 0 && (n7 = e6.length + n7), n7 >= e6.length || n7 < 0) throw new a(null, r.OutOfBounds, null);
      return e6[n7];
    }
    throw new a(null, r.InvalidMemberAccessKey, null);
  }
  if (e(e6)) {
    if (n3(n7) && isFinite(n7) && Math.floor(n7) === n7) {
      if (n7 < 0 && (n7 = e6.length + n7), n7 >= e6.length || n7 < 0) throw new a(null, r.OutOfBounds, null);
      return e6[n7];
    }
    throw new a(null, r.InvalidMemberAccessKey, null);
  }
  if (ee(e6)) {
    if (n3(n7) && isFinite(n7) && Math.floor(n7) === n7) {
      if (n7 < 0 && (n7 = e6.length() + n7), n7 >= e6.length() || n7 < 0) throw new a(null, r.OutOfBounds, null);
      return e6.get(n7);
    }
    throw new a(null, r.InvalidMemberAccessKey, null);
  }
  if (e6 instanceof Qe) {
    if (e(n7)) return e6.global(n7);
    throw new a(null, r.InvalidMemberAccessKey, null);
  }
  throw new a(null, r.InvalidMemberAccessKey, null);
}, callfunc: (e6, n7, t4) => e6.call(t4, { arguments: n7, preparsed: true }), loadModule(e6, n7) {
  const t4 = n7.moduleFactoryMap[e6];
  if (n7.moduleSingletons[t4]) return n7.moduleSingletons[t4];
  const o5 = n7.moduleFactory[t4]({ vars: {}, moduleSingletons: n7.moduleSingletons, depthCounter: n7.depthCounter, console: n7.console, abortSignal: n7.abortSignal, isAsync: n7.isAsync, services: n7.services, lrucache: n7.lrucache, timeZone: n7.timeZone ?? null, interceptor: n7.interceptor }, n7.spatialReference);
  return n7.moduleSingletons[t4] = o5, o5;
}, callModuleFunction(e6, n7, t4, o5) {
  if (!(e6 instanceof Qe)) throw new a(null, r.FunctionNotFound, null);
  const l5 = e6.global(t4);
  if (false === G(l5)) throw new a(null, r.CallNonFunction, null);
  return l5.call(o5, { preparsed: true, arguments: n7 });
}, getNestedOptionalValue: (e6, n7) => y(e6, n7) };
function Je2(e6) {
  console.log(e6);
}
function Ye2(e6, n7, o5 = false) {
  null === n7 && (n7 = { vars: {}, customfunctions: {} });
  let l5 = null;
  e6.usesModules && (l5 = new s2(null, e6.loadedModules));
  const r4 = { isAsync: o5, globalScope: Ke(n7.vars, o5 ? De : Be2, n7.customfunctions), moduleFactory: {}, moduleFactoryMap: {}, undeclaredGlobalsInFunctions: /* @__PURE__ */ new Map(), customfunctions: n7.customfunctions, libraryResolver: l5, localScope: null, mangleMap: {}, depthCounter: { depth: 1 }, exports: {}, console: Je2, lrucache: n7.lrucache, timeZone: n7.timeZone ?? null, interceptor: n7.interceptor, services: n7.services, symbols: { symbolCounter: 0 } };
  let a3 = fe(r4, e6);
  "" === a3 && (a3 = "lc.voidOperation; "), r4.undeclaredGlobalsInFunctions.size > 0 && r4.undeclaredGlobalsInFunctions.forEach((e7) => {
    throw new c(n7, r.InvalidIdentifier, e7.node);
  });
  let u5 = "";
  u5 = o5 ? "var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n" + a3 + "\n return lastStatement; }); } \n return this.postProcess(yield mainBody()); }); " : "var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n " + a3 + "\n return lastStatement; } \n return this.postProcess(mainBody()); ";
  const p7 = r4.moduleFactory, m = r4.moduleFactoryMap, g5 = r4.exports, d5 = {};
  let f6;
  for (f6 in g5) d5[f6] = r4.mangleMap[f6] ?? f6;
  const y4 = { lc: Xe, lang: ze, mangles: r4.mangleMap, postProcess(e7) {
    if (e7 instanceof _ && (e7 = e7.value), e7 instanceof I && (e7 = e7.value), e7 === v && (e7 = null), e7 === Y) throw new a(null, r.IllegalResult, null);
    if (e7 === L) throw new a(null, r.IllegalResult, null);
    if (G(e7)) throw new a(null, r.IllegalResult, null);
    return e7;
  }, prepare(e7, n8) {
    let t4 = e7.spatialReference;
    null == t4 && (t4 = g.WebMercator);
    const o6 = Ze2(e7.vars, e7.customfunctions, n8, e7.timeZone);
    return { localStack: [], isAsync: n8, moduleFactory: p7, moduleFactoryMap: m, mangleMap: this.mangles, moduleSingletons: {}, exports: g5, gdefs: {}, exportmangle: d5, spatialReference: t4, globalScope: o6, abortSignal: void 0 === e7.abortSignal || null === e7.abortSignal ? { aborted: false } : e7.abortSignal, localScope: null, services: e7.services, console: e7.console ?? Je2, lrucache: e7.lrucache, timeZone: e7.timeZone ?? null, interceptor: e7.interceptor, symbols: { symbolCounter: 0 }, depthCounter: { depth: 1 } };
  } };
  return new Function("context", "spatialReference", u5).bind(y4);
}
async function He() {
  return We([await import("./geomasync-7Y3GQK53.js")], "async"), true;
}
var Qe = class extends s {
  constructor(e6) {
    super(), this.moduleContext = e6;
  }
  hasGlobal(e6) {
    return void 0 === this.moduleContext.exports[e6] && (e6 = e6.toLowerCase()), void 0 !== this.moduleContext.exports[e6];
  }
  setGlobal(e6, n7) {
    const t4 = this.moduleContext.globalScope, o5 = e6.toLowerCase();
    if (G(n7)) throw new a(null, r.AssignModuleFunction, null);
    t4[this.moduleContext.exportmangle[o5]] = n7;
  }
  global(e6) {
    const n7 = this.moduleContext.globalScope, t4 = e6.toLowerCase(), o5 = n7[this.moduleContext.exportmangle[t4]];
    if (void 0 === o5) throw new a(null, r.InvalidIdentifier, null);
    if (G(o5) && !(o5 instanceof s3)) {
      const e7 = new s3();
      return e7.fn = o5, e7.parameterEvaluator = X, e7.context = this.moduleContext, n7[this.moduleContext.exportmangle[t4]] = e7, e7;
    }
    return o5;
  }
};
function Xe2(e6, n7, o5 = false) {
  const l5 = { isAsync: o5, moduleFactory: n7.moduleFactory, moduleFactoryMap: {}, libraryResolver: new s2(null, e6.loadedModules), globalScope: Ke(n7.vars, o5 ? De : Be2, n7.customfunctions), customfunctions: n7.customfunctions, localScope: null, mangleMap: {}, undeclaredGlobalsInFunctions: /* @__PURE__ */ new Map(), depthCounter: { depth: 1 }, exports: {}, console: Je2, lrucache: n7.lrucache, timeZone: n7.timeZone ?? null, interceptor: n7.interceptor, services: n7.services, symbols: { symbolCounter: 0 } };
  let r4 = fe(l5, e6);
  "" === r4 && (r4 = "lc.voidOperation; ");
  let a3 = "";
  a3 = o5 ? "var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n" + r4 + "\n return lastStatement; }); } \n yield mainBody(); \n return this.prepareModule(runtimeCtx); }); " : "var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n " + r4 + "\n return lastStatement; } \n mainBody(); \n return this.prepareModule(runtimeCtx); ";
  const s7 = l5.moduleFactory, i4 = l5.moduleFactoryMap, c3 = l5.exports, u5 = {};
  let p7;
  for (p7 in c3) u5[p7] = l5.mangleMap[p7] ?? p7;
  const m = { lc: Xe, lang: ze, mangles: l5.mangleMap, prepareModule: (e7) => new Qe(e7), prepare(e7, n8) {
    let t4 = e7.spatialReference;
    null == t4 && (t4 = new g({ wkid: 102100 }));
    const o6 = Ze2(e7.vars, e7.customfunctions, n8, e7.timeZone);
    return { localStack: [], isAsync: n8, exports: c3, exportmangle: u5, gdefs: {}, moduleFactory: s7, moduleFactoryMap: i4, moduleSingletons: e7.moduleSingletons, mangleMap: this.mangles, spatialReference: t4, globalScope: o6, abortSignal: void 0 === e7.abortSignal || null === e7.abortSignal ? { aborted: false } : e7.abortSignal, localScope: null, services: e7.services, console: e7.console ?? Je2, lrucache: e7.lrucache, timeZone: e7.timeZone ?? null, interceptor: e7.interceptor, symbols: { symbolCounter: 0 }, depthCounter: e7.depthCounter };
  } };
  return new Function("context", "spatialReference", a3).bind(m);
}

// node_modules/@arcgis/core/chunks/index.js
var e3 = { False: "false", Null: "null", True: "true" };
var t2 = { Break: "break", Continue: "continue", Else: "else", For: "for", Function: "function", If: "if", Import: "import", Export: "export", In: "in", Return: "return", Var: "var", While: "while" };
var u4 = { From: "from", Of: "of" };
var i3 = { AssignmentExpression: "AssignmentExpression", ArrayExpression: "ArrayExpression", BlockComment: "BlockComment", BlockStatement: "BlockStatement", BinaryExpression: "BinaryExpression", BreakStatement: "BreakStatement", CallExpression: "CallExpression", ContinueStatement: "ContinueStatement", EmptyStatement: "EmptyStatement", ExpressionStatement: "ExpressionStatement", ExportNamedDeclaration: "ExportNamedDeclaration", ExportSpecifier: "ExportSpecifier", ForStatement: "ForStatement", ForInStatement: "ForInStatement", ForOfStatement: "ForOfStatement", FunctionDeclaration: "FunctionDeclaration", Identifier: "Identifier", IfStatement: "IfStatement", ImportDeclaration: "ImportDeclaration", ImportDefaultSpecifier: "ImportDefaultSpecifier", LineComment: "LineComment", Literal: "Literal", LogicalExpression: "LogicalExpression", MemberExpression: "MemberExpression", ObjectExpression: "ObjectExpression", Program: "Program", Property: "Property", ReturnStatement: "ReturnStatement", TemplateElement: "TemplateElement", TemplateLiteral: "TemplateLiteral", UnaryExpression: "UnaryExpression", UpdateExpression: "UpdateExpression", VariableDeclaration: "VariableDeclaration", VariableDeclarator: "VariableDeclarator", WhileStatement: "WhileStatement" };
var r3 = ["++", "--"];
var n6 = ["-", "+", "!", "~"];
var s5 = ["=", "/=", "*=", "%=", "+=", "-="];
var a2 = ["||", "&&"];
var D2 = ["|", "&", ">>", "<<", ">>>", "^", "==", "!=", "<", "<=", ">", ">=", "+", "-", "*", "/", "%"];
var o4 = { "||": 1, "&&": 2, "|": 3, "^": 4, "&": 5, "==": 6, "!=": 6, "<": 7, ">": 7, "<=": 7, ">=": 7, "<<": 8, ">>": 8, ">>>": 8, "+": 9, "-": 9, "*": 10, "/": 10, "%": 10 };
var h2 = { Unknown: 0, BooleanLiteral: 1, EOF: 2, Identifier: 3, Keyword: 4, NullLiteral: 5, NumericLiteral: 6, Punctuator: 7, StringLiteral: 8, Template: 10 };
var c2 = ["Unknown", "Boolean", "<end>", "Identifier", "Keyword", "Null", "Numeric", "Punctuator", "String", "RegularExpression", "Template"];
var l3 = { InvalidModuleUri: "InvalidModuleUri", ForInOfLoopInitializer: "ForInOfLoopInitializer", IdentifierExpected: "IdentifierExpected", InvalidEscapedReservedWord: "InvalidEscapedReservedWord", InvalidExpression: "InvalidExpression", InvalidFunctionIdentifier: "InvalidFunctionIdentifier", InvalidHexEscapeSequence: "InvalidHexEscapeSequence", InvalidLeftHandSideInAssignment: "InvalidLeftHandSideInAssignment", InvalidLeftHandSideInForIn: "InvalidLeftHandSideInForIn", InvalidTemplateHead: "InvalidTemplateHead", InvalidVariableAssignment: "InvalidVariableAssignment", KeyMustBeString: "KeyMustBeString", NoFunctionInsideBlock: "NoFunctionInsideBlock", NoFunctionInsideFunction: "NoFunctionInsideFunction", ModuleExportRootOnly: "ModuleExportRootOnly", ModuleImportRootOnly: "ModuleImportRootOnly", PunctuatorExpected: "PunctuatorExpected", TemplateOctalLiteral: "TemplateOctalLiteral", UnexpectedBoolean: "UnexpectedBoolean", UnexpectedEndOfScript: "UnexpectedEndOfScript", UnexpectedIdentifier: "UnexpectedIdentifier", UnexpectedKeyword: "UnexpectedKeyword", UnexpectedNull: "UnexpectedNull", UnexpectedNumber: "UnexpectedNumber", UnexpectedPunctuator: "UnexpectedPunctuator", UnexpectedString: "UnexpectedString", UnexpectedTemplate: "UnexpectedTemplate", UnexpectedToken: "UnexpectedToken" };
var d3 = { [l3.InvalidModuleUri]: "Module uri must be a text literal.", [l3.ForInOfLoopInitializer]: "for-in loop variable declaration may not have an initializer.", [l3.IdentifierExpected]: "'${value}' is an invalid identifier.", [l3.InvalidEscapedReservedWord]: "Keyword cannot contain escaped characters.", [l3.InvalidExpression]: "Invalid expression.", [l3.InvalidFunctionIdentifier]: "'${value}' is an invalid function identifier.", [l3.InvalidHexEscapeSequence]: "Invalid hexadecimal escape sequence.", [l3.InvalidLeftHandSideInAssignment]: "Invalid left-hand side in assignment.", [l3.InvalidLeftHandSideInForIn]: "Invalid left-hand side in for-in.", [l3.InvalidTemplateHead]: "Invalid template structure.", [l3.InvalidVariableAssignment]: "Invalid variable assignment.", [l3.KeyMustBeString]: "Object property keys must be a word starting with a letter.", [l3.NoFunctionInsideBlock]: "Functions cannot be declared inside of code blocks.", [l3.NoFunctionInsideFunction]: "Functions cannot be declared inside another function.", [l3.ModuleExportRootOnly]: "Module exports cannot be declared inside of code blocks.", [l3.ModuleImportRootOnly]: "Module import cannot be declared inside of code blocks.", [l3.PunctuatorExpected]: "'${value}' expected.", [l3.TemplateOctalLiteral]: "Octal literals are not allowed in template literals.", [l3.UnexpectedBoolean]: "Unexpected boolean literal.", [l3.UnexpectedEndOfScript]: "Unexpected end of Arcade expression.", [l3.UnexpectedIdentifier]: "Unexpected identifier.", [l3.UnexpectedKeyword]: "Unexpected keyword.", [l3.UnexpectedNull]: "Unexpected null literal.", [l3.UnexpectedNumber]: "Unexpected number.", [l3.UnexpectedPunctuator]: "Unexpected punctuator.", [l3.UnexpectedString]: "Unexpected text literal.", [l3.UnexpectedTemplate]: "Unexpected quasi '${value}'.", [l3.UnexpectedToken]: "Unexpected token '${value}'." };
var C4 = class e4 extends Error {
  constructor({ code: t4, index: u5, line: i4, column: r4, len: n7 = 0, description: s7, data: a3 }) {
    var _a;
    super(s7 ?? t4), this.declaredRootClass = "esri.arcade.lib.diagnostic", this.name = "ParsingError", this.code = t4, this.index = u5, this.line = i4, this.column = r4, this.len = n7, this.data = a3, this.description = s7, this.range = { start: { line: i4, column: r4 - 1 }, end: { line: i4, column: r4 + n7 } }, (_a = Error.captureStackTrace) == null ? void 0 : _a.call(Error, this, e4);
  }
};
function F(e6) {
  return !!e6 && "object" == typeof e6 && "type" in e6 && e6.type === i3.Program;
}
function p6(e6) {
  return !!e6 && "object" == typeof e6 && "type" in e6 && e6.type === i3.BlockStatement;
}
function E2(e6) {
  return !!e6 && "object" == typeof e6 && "type" in e6 && e6.type === i3.BlockComment;
}
function A(e6) {
  return !!e6 && "object" == typeof e6 && "type" in e6 && e6.type === i3.EmptyStatement;
}
function B2(e6) {
  return !!e6 && "object" == typeof e6 && "type" in e6 && e6.type === i3.VariableDeclarator;
}
function f5(e6, t4) {
  return t4.loc.end.line === e6.loc.start.line && t4.loc.end.column <= e6.loc.start.column;
}
function k(e6, t4) {
  return e6.range[0] >= t4.range[0] && e6.range[1] <= t4.range[1];
}
var g3 = class {
  constructor() {
    this.comments = [], this._nodeStack = [], this._newComments = [];
  }
  insertInnerComments(e6) {
    if (!p6(e6) || 0 !== e6.body.length) return;
    let t4 = [];
    for (let u5 = this._newComments.length - 1; u5 >= 0; u5--) {
      let i4 = this._newComments[u5];
      e6.range[1] >= i4.range[0] && (t4.unshift(i4), this._newComments.splice(u5, 1));
    }
    t4.length && (e6.innerComments = t4);
  }
  attachTrailingComments(e6) {
    let t4 = this._nodeStack.at(-1);
    if (!t4) return;
    if (p6(e6) && k(t4, e6)) for (let i4 = this._newComments.length - 1; i4 >= 0; i4--) {
      let u6 = this._newComments[i4];
      k(u6, e6) && (t4.trailingComments = [...t4.trailingComments ?? [], u6], this._newComments.splice(i4, 1));
    }
    let u5 = [];
    if (this._newComments.length > 0) for (let i4 = this._newComments.length - 1; i4 >= 0; i4--) {
      let r4 = this._newComments[i4];
      f5(r4, t4) ? (t4.trailingComments = [...t4.trailingComments ?? [], r4], this._newComments.splice(i4, 1)) : f5(r4, e6) && (u5.unshift(r4), this._newComments.splice(i4, 1));
    }
    if (t4.trailingComments) {
      f5(t4.trailingComments[0], e6) && (u5 = [...u5, ...t4.trailingComments], delete t4.trailingComments);
    }
    u5.length > 0 && (e6.trailingComments = u5);
  }
  attachLeadingComments(e6) {
    let t4;
    for (; this._nodeStack.length > 0; ) {
      let u6 = this._nodeStack[this._nodeStack.length - 1];
      if (!(e6.range[0] <= u6.range[0])) break;
      t4 = u6, this._nodeStack.pop();
    }
    let u5 = [], i4 = [];
    if (null != t4) {
      if (!t4.leadingComments) return;
      for (let r4 = t4.leadingComments.length - 1; r4 >= 0; r4--) {
        let n7 = t4.leadingComments[r4];
        e6.range[0] >= n7.range[1] ? (u5.unshift(n7), t4.leadingComments.splice(r4, 1)) : B2(e6) && !E2(n7) && (i4.unshift(n7), t4.leadingComments.splice(r4, 1));
      }
      return 0 === t4.leadingComments.length && delete t4.leadingComments, u5.length && (e6.leadingComments = u5), void (i4.length && (e6.trailingComments = [...i4, ...e6.trailingComments ?? []]));
    }
    for (let r4 = this._newComments.length - 1; r4 >= 0; r4--) {
      let t5 = this._newComments[r4];
      e6.range[0] >= t5.range[0] && (u5.unshift(t5), this._newComments.splice(r4, 1));
    }
    u5.length && (e6.leadingComments = u5);
  }
  attachComments(e6) {
    if (F(e6) && e6.body.length > 0) {
      let t4 = this._nodeStack.at(-1);
      return t4 ? (t4.trailingComments = [...t4.trailingComments ?? [], ...this._newComments], this._newComments.length = 0, void this._nodeStack.pop()) : (e6.trailingComments = [...this._newComments], void (this._newComments.length = 0));
    }
    this.attachTrailingComments(e6), this.attachLeadingComments(e6), this.insertInnerComments(e6), this._nodeStack.push(e6);
  }
  collectComment(e6) {
    this.comments.push(e6), this._newComments.push(e6);
  }
};
var S2 = /\$\{(.*?)\}/gu;
function w3(e6, t4) {
  let u5 = d3[e6];
  return t4 ? u5.replace(S2, (e7, u6) => {
    var _a;
    return ((_a = t4[u6]) == null ? void 0 : _a.toString()) ?? "";
  }) : u5;
}
var y3 = class {
  constructor(e6 = false) {
    this.tolerant = e6, this.errors = [];
  }
  recordError(e6) {
    this.errors.push(e6);
  }
  tolerate(e6) {
    if (!this.tolerant) throw e6;
    this.recordError(e6);
  }
  throwError(e6) {
    throw e6.description ?? (e6.description = w3(e6.code, e6.data)), new C4(e6);
  }
  tolerateError(e6) {
    e6.description ?? (e6.description = w3(e6.code, e6.data));
    let t4 = new C4(e6);
    if (!this.tolerant) throw t4;
    this.recordError(t4);
  }
};
function I3(e6, t4) {
  if (!e6) throw new Error(`ASSERT: ${t4}`);
}
var T = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/u, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/u };
var b2 = { fromCodePoint: (e6) => e6 < 65536 ? String.fromCharCode(e6) : String.fromCharCode(55296 + (e6 - 65536 >> 10)) + String.fromCharCode(56320 + (e6 - 65536 & 1023)), isWhiteSpace: (e6) => 32 === e6 || 9 === e6 || 11 === e6 || 12 === e6 || 160 === e6 || e6 >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].includes(e6), isLineTerminator: (e6) => 10 === e6 || 13 === e6 || 8232 === e6 || 8233 === e6, isIdentifierStart: (e6) => 36 === e6 || 95 === e6 || e6 >= 65 && e6 <= 90 || e6 >= 97 && e6 <= 122 || 92 === e6 || e6 >= 128 && T.NonAsciiIdentifierStart.test(b2.fromCodePoint(e6)), isIdentifierPart: (e6) => 36 === e6 || 95 === e6 || e6 >= 65 && e6 <= 90 || e6 >= 97 && e6 <= 122 || e6 >= 48 && e6 <= 57 || 92 === e6 || e6 >= 128 && T.NonAsciiIdentifierPart.test(b2.fromCodePoint(e6)), isDecimalDigit: (e6) => e6 >= 48 && e6 <= 57, isHexDigit: (e6) => e6 >= 48 && e6 <= 57 || e6 >= 65 && e6 <= 70 || e6 >= 97 && e6 <= 102, isOctalDigit: (e6) => e6 >= 48 && e6 <= 55 };
function L2(e6) {
  return "0123456789abcdef".indexOf(e6.toLowerCase());
}
function v2(e6) {
  return "01234567".indexOf(e6);
}
var N = [[], [], []];
r3.forEach((e6) => {
  var _a;
  return (_a = N[e6.length - 1]) == null ? void 0 : _a.push(e6);
}), n6.forEach((e6) => {
  var _a;
  return (_a = N[e6.length - 1]) == null ? void 0 : _a.push(e6);
}), a2.forEach((e6) => {
  var _a;
  return (_a = N[e6.length - 1]) == null ? void 0 : _a.push(e6);
}), s5.forEach((e6) => {
  var _a;
  return (_a = N[e6.length - 1]) == null ? void 0 : _a.push(e6);
}), D2.forEach((e6) => {
  var _a;
  return (_a = N[e6.length - 1]) == null ? void 0 : _a.push(e6);
});
var U3 = class {
  constructor(e6, t4) {
    this.source = e6, this.errorHandler = t4, this._length = e6.length, this.index = 0, this.lineNumber = 1, this.lineStart = 0, this.curlyStack = [];
  }
  saveState() {
    return { index: this.index, lineNumber: this.lineNumber, lineStart: this.lineStart, curlyStack: this.curlyStack.slice() };
  }
  restoreState(e6) {
    this.index = e6.index, this.lineNumber = e6.lineNumber, this.lineStart = e6.lineStart, this.curlyStack = e6.curlyStack;
  }
  eof() {
    return this.index >= this._length;
  }
  throwUnexpectedToken(e6 = l3.UnexpectedToken) {
    this.errorHandler.throwError({ code: e6, index: this.index, line: this.lineNumber, column: this.index - this.lineStart + 1, data: { value: this.source.charAt(this.index) } });
  }
  tolerateUnexpectedToken(e6 = l3.UnexpectedToken) {
    this.errorHandler.tolerateError({ code: e6, index: this.index, line: this.lineNumber, column: this.index - this.lineStart + 1 });
  }
  skipSingleLineComment(e6) {
    let t4 = [], u5 = this.index - e6, i4 = { start: { line: this.lineNumber, column: this.index - this.lineStart - e6 }, end: { line: 0, column: 0 } };
    for (; !this.eof(); ) {
      let r5 = this.source.charCodeAt(this.index);
      if (this.index += 1, b2.isLineTerminator(r5)) {
        i4.end = { line: this.lineNumber, column: this.index - this.lineStart - 1 };
        let n7 = { multiLine: false, start: u5 + e6, end: this.index - 1, range: [u5, this.index - 1], loc: i4 };
        return t4.push(n7), 13 === r5 && 10 === this.source.charCodeAt(this.index) && (this.index += 1), this.lineNumber += 1, this.lineStart = this.index, t4;
      }
    }
    i4.end = { line: this.lineNumber, column: this.index - this.lineStart };
    let r4 = { multiLine: false, start: u5 + e6, end: this.index, range: [u5, this.index], loc: i4 };
    return t4.push(r4), t4;
  }
  skipMultiLineComment() {
    let e6 = [], t4 = this.index - 2, u5 = { start: { line: this.lineNumber, column: this.index - this.lineStart - 2 }, end: { line: 0, column: 0 } };
    for (; !this.eof(); ) {
      let i5 = this.source.charCodeAt(this.index);
      if (b2.isLineTerminator(i5)) 13 === i5 && 10 === this.source.charCodeAt(this.index + 1) && (this.index += 1), this.lineNumber += 1, this.index += 1, this.lineStart = this.index;
      else if (42 === i5) {
        if (47 === this.source.charCodeAt(this.index + 1)) {
          this.index += 2, u5.end = { line: this.lineNumber, column: this.index - this.lineStart };
          let i6 = { multiLine: true, start: t4 + 2, end: this.index - 2, range: [t4, this.index], loc: u5 };
          return e6.push(i6), e6;
        }
        this.index += 1;
      } else this.index += 1;
    }
    u5.end = { line: this.lineNumber, column: this.index - this.lineStart };
    let i4 = { multiLine: true, start: t4 + 2, end: this.index, range: [t4, this.index], loc: u5 };
    return e6.push(i4), this.tolerateUnexpectedToken(), e6;
  }
  scanComments() {
    let e6 = [];
    for (; !this.eof(); ) {
      let t4 = this.source.charCodeAt(this.index);
      if (b2.isWhiteSpace(t4)) this.index += 1;
      else if (b2.isLineTerminator(t4)) this.index += 1, 13 === t4 && 10 === this.source.charCodeAt(this.index) && (this.index += 1), this.lineNumber += 1, this.lineStart = this.index;
      else {
        if (47 !== t4) break;
        if (t4 = this.source.charCodeAt(this.index + 1), 47 === t4) {
          this.index += 2;
          let t5 = this.skipSingleLineComment(2);
          e6 = [...e6, ...t5];
        } else {
          if (42 !== t4) break;
          {
            this.index += 2;
            let t5 = this.skipMultiLineComment();
            e6 = [...e6, ...t5];
          }
        }
      }
    }
    return e6;
  }
  isKeyword(e6) {
    switch ((e6 = e6.toLowerCase()).length) {
      case 2:
        return e6 === t2.If || e6 === t2.In;
      case 3:
        return e6 === t2.Var || e6 === t2.For;
      case 4:
        return e6 === t2.Else;
      case 5:
        return e6 === t2.Break || e6 === t2.While;
      case 6:
        return e6 === t2.Return || e6 === t2.Import || e6 === t2.Export;
      case 8:
        return e6 === t2.Function || e6 === t2.Continue;
      default:
        return false;
    }
  }
  codePointAt(e6) {
    let t4 = this.source.charCodeAt(e6);
    if (t4 >= 55296 && t4 <= 56319) {
      let u5 = this.source.charCodeAt(e6 + 1);
      u5 >= 56320 && u5 <= 57343 && (t4 = 1024 * (t4 - 55296) + u5 - 56320 + 65536);
    }
    return t4;
  }
  scanHexEscape(e6) {
    let t4 = "u" === e6 ? 4 : 2, u5 = 0;
    for (let i4 = 0; i4 < t4; i4++) {
      if (this.eof() || !b2.isHexDigit(this.source.charCodeAt(this.index))) return null;
      u5 = 16 * u5 + L2(this.source[this.index] ?? ""), this.index += 1;
    }
    return String.fromCharCode(u5);
  }
  scanUnicodeCodePointEscape() {
    let e6 = this.source[this.index], t4 = 0;
    for ("}" === e6 && this.throwUnexpectedToken(); !this.eof() && (e6 = this.source[this.index] ?? "", this.index += 1, b2.isHexDigit(e6.charCodeAt(0))); ) t4 = 16 * t4 + L2(e6);
    return (t4 > 1114111 || "}" !== e6) && this.throwUnexpectedToken(), b2.fromCodePoint(t4);
  }
  getIdentifier() {
    let e6 = this.index;
    for (this.index += 1; !this.eof(); ) {
      let t4 = this.source.charCodeAt(this.index);
      if (92 === t4) return this.index = e6, this.getComplexIdentifier();
      if (t4 >= 55296 && t4 < 57343) return this.index = e6, this.getComplexIdentifier();
      if (!b2.isIdentifierPart(t4)) break;
      this.index += 1;
    }
    return this.source.slice(e6, this.index);
  }
  getComplexIdentifier() {
    let e6, t4 = this.codePointAt(this.index), u5 = b2.fromCodePoint(t4);
    for (this.index += u5.length, 92 === t4 && (117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), this.index += 1, "{" === this.source[this.index] ? (this.index += 1, e6 = this.scanUnicodeCodePointEscape()) : (e6 = this.scanHexEscape("u"), (null === e6 || "\\" === e6 || !b2.isIdentifierStart(e6.charCodeAt(0))) && this.throwUnexpectedToken()), u5 = e6); !this.eof() && (t4 = this.codePointAt(this.index), b2.isIdentifierPart(t4)); ) e6 = b2.fromCodePoint(t4), u5 += e6, this.index += e6.length, 92 === t4 && (u5 = u5.substring(0, u5.length - 1), 117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), this.index += 1, "{" === this.source[this.index] ? (this.index += 1, e6 = this.scanUnicodeCodePointEscape()) : (e6 = this.scanHexEscape("u"), (null === e6 || "\\" === e6 || !b2.isIdentifierPart(e6.charCodeAt(0))) && this.throwUnexpectedToken()), u5 += e6);
    return u5;
  }
  octalToDecimal(e6) {
    let t4 = "0" !== e6, u5 = v2(e6);
    return !this.eof() && b2.isOctalDigit(this.source.charCodeAt(this.index)) && (t4 = true, u5 = 8 * u5 + v2(this.source[this.index] ?? ""), this.index += 1, "0123".includes(e6) && !this.eof() && b2.isOctalDigit(this.source.charCodeAt(this.index)) && (u5 = 8 * u5 + v2(this.source[this.index] ?? ""), this.index += 1)), { code: u5, octal: t4 };
  }
  scanIdentifier() {
    let t4, u5 = this.index, i4 = 92 === this.source.charCodeAt(u5) ? this.getComplexIdentifier() : this.getIdentifier();
    if (t4 = 1 === i4.length ? h2.Identifier : this.isKeyword(i4) ? h2.Keyword : i4.toLowerCase() === e3.Null ? h2.NullLiteral : i4.toLowerCase() === e3.True || i4.toLowerCase() === e3.False ? h2.BooleanLiteral : h2.Identifier, t4 !== h2.Identifier && u5 + i4.length !== this.index) {
      let e6 = this.index;
      this.index = u5, this.tolerateUnexpectedToken(l3.InvalidEscapedReservedWord), this.index = e6;
    }
    return { type: t4, value: i4, lineNumber: this.lineNumber, lineStart: this.lineStart, start: u5, end: this.index };
  }
  scanPunctuator() {
    var _a;
    let e6 = this.index, t4 = this.source[this.index] ?? "";
    switch (t4) {
      case "(":
      case "{":
        "{" === t4 && this.curlyStack.push("{"), this.index += 1;
        break;
      case ".":
      case ")":
      case ";":
      case ",":
      case "[":
      case "]":
      case ":":
      case "?":
      case "~":
        this.index += 1;
        break;
      case "}":
        this.index += 1, this.curlyStack.pop();
        break;
      default:
        for (let e7 = N.length; e7 > 0; e7--) if (t4 = this.source.substring(this.index, this.index + e7), (_a = N[e7 - 1]) == null ? void 0 : _a.includes(t4)) {
          this.index += e7;
          break;
        }
    }
    return this.index === e6 && this.throwUnexpectedToken(), { type: h2.Punctuator, value: t4, lineNumber: this.lineNumber, lineStart: this.lineStart, start: e6, end: this.index };
  }
  scanHexLiteral(e6) {
    let t4 = "";
    for (; !this.eof() && b2.isHexDigit(this.source.charCodeAt(this.index)); ) t4 += this.source[this.index], this.index += 1;
    return 0 === t4.length && this.throwUnexpectedToken(), b2.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), { type: h2.NumericLiteral, value: Number.parseInt(`0x${t4}`, 16), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e6, end: this.index };
  }
  scanBinaryLiteral(e6) {
    let t4 = "";
    for (; !this.eof(); ) {
      let e7 = this.source[this.index];
      if ("0" !== e7 && "1" !== e7) break;
      t4 += this.source[this.index], this.index += 1;
    }
    if (0 === t4.length && this.throwUnexpectedToken(), !this.eof()) {
      let e7 = this.source.charCodeAt(this.index);
      (b2.isIdentifierStart(e7) || b2.isDecimalDigit(e7)) && this.throwUnexpectedToken();
    }
    return { type: h2.NumericLiteral, value: Number.parseInt(t4, 2), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e6, end: this.index };
  }
  scanOctalLiteral(e6, t4) {
    let u5 = "", i4 = false;
    for (b2.isOctalDigit(e6.charCodeAt(0)) && (i4 = true, u5 = `0${this.source[this.index]}`), this.index += 1; !this.eof() && b2.isOctalDigit(this.source.charCodeAt(this.index)); ) u5 += this.source[this.index], this.index += 1;
    return !i4 && 0 === u5.length && this.throwUnexpectedToken(), (b2.isIdentifierStart(this.source.charCodeAt(this.index)) || b2.isDecimalDigit(this.source.charCodeAt(this.index))) && this.throwUnexpectedToken(), { type: h2.NumericLiteral, value: Number.parseInt(u5, 8), lineNumber: this.lineNumber, lineStart: this.lineStart, start: t4, end: this.index };
  }
  scanNumericLiteral() {
    let e6 = this.index, t4 = this.source[e6] ?? "";
    I3(b2.isDecimalDigit(t4.charCodeAt(0)) || "." === t4, "Numeric literal must start with a decimal digit or a decimal point");
    let u5 = "";
    if ("." !== t4) {
      if (u5 = this.source[this.index] ?? "", this.index += 1, t4 = this.source[this.index] ?? "", "0" === u5) {
        if ("x" === t4 || "X" === t4) return this.index += 1, this.scanHexLiteral(e6);
        if ("b" === t4 || "B" === t4) return this.index += 1, this.scanBinaryLiteral(e6);
        if ("o" === t4 || "O" === t4) return this.scanOctalLiteral(t4, e6);
      }
      for (; b2.isDecimalDigit(this.source.charCodeAt(this.index)); ) u5 += this.source[this.index], this.index += 1;
      t4 = this.source[this.index] ?? "";
    }
    if ("." === t4) {
      for (u5 += this.source[this.index], this.index += 1; b2.isDecimalDigit(this.source.charCodeAt(this.index)); ) u5 += this.source[this.index], this.index += 1;
      t4 = this.source[this.index] ?? "";
    }
    if ("e" === t4 || "E" === t4) if (u5 += this.source[this.index], this.index += 1, t4 = this.source[this.index] ?? "", ("+" === t4 || "-" === t4) && (u5 += this.source[this.index], this.index += 1), b2.isDecimalDigit(this.source.charCodeAt(this.index))) for (; b2.isDecimalDigit(this.source.charCodeAt(this.index)); ) u5 += this.source[this.index], this.index += 1;
    else this.throwUnexpectedToken();
    return b2.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), { type: h2.NumericLiteral, value: Number.parseFloat(u5), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e6, end: this.index };
  }
  scanStringLiteral() {
    let e6 = this.index, t4 = this.source[e6];
    I3("'" === t4 || '"' === t4, "String literal must starts with a quote"), this.index += 1;
    let u5 = false, i4 = "";
    for (; !this.eof(); ) {
      let e7 = this.source[this.index] ?? "";
      if (this.index += 1, e7 === t4) {
        t4 = "";
        break;
      }
      if ("\\" === e7) if (e7 = this.source[this.index] ?? "", this.index += 1, e7 && b2.isLineTerminator(e7.charCodeAt(0))) this.lineNumber += 1, "\r" === e7 && "\n" === this.source[this.index] && (this.index += 1), this.lineStart = this.index;
      else switch (e7) {
        case "u":
          if ("{" === this.source[this.index]) this.index += 1, i4 += this.scanUnicodeCodePointEscape();
          else {
            let t5 = this.scanHexEscape(e7);
            null === t5 && this.throwUnexpectedToken(), i4 += t5;
          }
          break;
        case "x": {
          let t5 = this.scanHexEscape(e7);
          null === t5 && this.throwUnexpectedToken(l3.InvalidHexEscapeSequence), i4 += t5;
          break;
        }
        case "n":
          i4 += "\n";
          break;
        case "r":
          i4 += "\r";
          break;
        case "t":
          i4 += "	";
          break;
        case "b":
          i4 += "\b";
          break;
        case "f":
          i4 += "\f";
          break;
        case "v":
          i4 += "\v";
          break;
        case "8":
        case "9":
          i4 += e7, this.tolerateUnexpectedToken();
          break;
        default:
          if (e7 && b2.isOctalDigit(e7.charCodeAt(0))) {
            let t5 = this.octalToDecimal(e7);
            u5 = t5.octal || u5, i4 += String.fromCharCode(t5.code);
          } else i4 += e7;
      }
      else {
        if (b2.isLineTerminator(e7.charCodeAt(0))) break;
        i4 += e7;
      }
    }
    return "" !== t4 && (this.index = e6, this.throwUnexpectedToken()), { type: h2.StringLiteral, value: i4, lineNumber: this.lineNumber, lineStart: this.lineStart, start: e6, end: this.index };
  }
  scanTemplate() {
    let e6 = "", t4 = false, u5 = this.index, i4 = "`" === this.source[u5], r4 = false, n7 = 2;
    for (this.index += 1; !this.eof(); ) {
      let u6 = this.source[this.index] ?? "";
      if (this.index += 1, "`" === u6) {
        n7 = 1, r4 = true, t4 = true;
        break;
      }
      if ("$" !== u6) if ("\\" !== u6) b2.isLineTerminator(u6.charCodeAt(0)) ? (this.lineNumber += 1, "\r" === u6 && "\n" === this.source[this.index] && (this.index += 1), this.lineStart = this.index, e6 += "\n") : e6 += u6;
      else if (u6 = this.source[this.index] ?? "", this.index += 1, b2.isLineTerminator(u6.charCodeAt(0))) this.lineNumber += 1, "\r" === u6 && "\n" === this.source[this.index] && (this.index += 1), this.lineStart = this.index;
      else switch (u6) {
        case "n":
          e6 += "\n";
          break;
        case "r":
          e6 += "\r";
          break;
        case "t":
          e6 += "	";
          break;
        case "u":
          if ("{" === this.source[this.index]) this.index += 1, e6 += this.scanUnicodeCodePointEscape();
          else {
            let t5 = this.index, i5 = this.scanHexEscape(u6);
            null !== i5 ? e6 += i5 : (this.index = t5, e6 += u6);
          }
          break;
        case "x": {
          let t5 = this.scanHexEscape(u6);
          null === t5 && this.throwUnexpectedToken(l3.InvalidHexEscapeSequence), e6 += t5;
          break;
        }
        case "b":
          e6 += "\b";
          break;
        case "f":
          e6 += "\f";
          break;
        case "v":
          e6 += "\v";
          break;
        default:
          "0" === u6 ? (b2.isDecimalDigit(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(l3.TemplateOctalLiteral), e6 += "\0") : b2.isOctalDigit(u6.charCodeAt(0)) ? this.throwUnexpectedToken(l3.TemplateOctalLiteral) : e6 += u6;
      }
      else {
        if ("{" === this.source[this.index]) {
          this.curlyStack.push("${"), this.index += 1, t4 = true;
          break;
        }
        e6 += u6;
      }
    }
    return t4 || this.throwUnexpectedToken(), i4 || this.curlyStack.pop(), { type: h2.Template, value: this.source.slice(u5 + 1, this.index - n7), cooked: e6, head: i4, tail: r4, lineNumber: this.lineNumber, lineStart: this.lineStart, start: u5, end: this.index };
  }
  lex() {
    if (this.eof()) return { type: h2.EOF, value: "", lineNumber: this.lineNumber, lineStart: this.lineStart, start: this.index, end: this.index };
    let e6 = this.source.charCodeAt(this.index);
    return b2.isIdentifierStart(e6) ? this.scanIdentifier() : 40 === e6 || 41 === e6 || 59 === e6 ? this.scanPunctuator() : 39 === e6 || 34 === e6 ? this.scanStringLiteral() : 46 === e6 ? b2.isDecimalDigit(this.source.charCodeAt(this.index + 1)) ? this.scanNumericLiteral() : this.scanPunctuator() : b2.isDecimalDigit(e6) ? this.scanNumericLiteral() : 96 === e6 || 125 === e6 && "${" === this.curlyStack[this.curlyStack.length - 1] ? this.scanTemplate() : e6 >= 55296 && e6 < 57343 && b2.isIdentifierStart(this.codePointAt(this.index)) ? this.scanIdentifier() : this.scanPunctuator();
  }
};
var P4 = { None: 0, Function: 1, IfClause: 2, ForLoop: 4, ForOfLoop: 8, WhileLoop: 16 };
var M2 = { AsObject: 0, Automatic: 1 };
function O(e6, t4 = 0) {
  let u5 = e6.start - e6.lineStart, i4 = e6.lineNumber;
  return u5 < 0 && (u5 += t4, i4 -= 1), { index: e6.start, line: i4, column: u5 };
}
function R2(e6) {
  return [{ index: e6.range[0], ...e6.loc.start }, { index: e6.range[1], ...e6.loc.end }];
}
function z2(e6) {
  return e6 in o4 ? o4[e6] : 0;
}
var K2 = class {
  constructor(e6, t4 = {}, u5) {
    this.delegate = u5, this.hasLineTerminator = false, this.options = { tokens: "boolean" == typeof t4.tokens && t4.tokens, comments: "boolean" == typeof t4.comments && t4.comments, tolerant: "boolean" == typeof t4.tolerant && t4.tolerant }, this.options.comments && (this.commentHandler = new g3()), this.errorHandler = new y3(this.options.tolerant), this.scanner = new U3(e6, this.errorHandler), this.context = { isAssignmentTarget: false, blockContext: P4.None, curlyParsingType: M2.AsObject }, this.rawToken = { type: h2.EOF, value: "", lineNumber: this.scanner.lineNumber, lineStart: 0, start: 0, end: 0 }, this.tokens = [], this.startMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }, this.endMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }, this.readNextRawToken(), this.endMarker = { index: this.scanner.index, line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart };
  }
  throwIfInvalidType(e6, t4, { validTypes: u5, invalidTypes: i4 }) {
    (u5 == null ? void 0 : u5.some((t5) => e6.type === t5)) || (i4 == null ? void 0 : i4.some((t5) => e6.type === t5)) && this.throwError(l3.InvalidExpression, t4);
  }
  throwError(e6, t4, u5 = this.endMarker) {
    let { index: i4, line: r4, column: n7 } = t4, s7 = u5.index - i4 - 1;
    this.errorHandler.throwError({ code: e6, index: i4, line: r4, column: n7 + 1, len: s7 });
  }
  tolerateError(e6, t4) {
    throw new Error("######################################### !!!");
  }
  unexpectedTokenError(e6 = {}) {
    let t4, { rawToken: u5 } = e6, { code: i4, data: r4 } = e6;
    if (u5) {
      if (!i4) switch (u5.type) {
        case h2.EOF:
          i4 = l3.UnexpectedEndOfScript;
          break;
        case h2.Identifier:
          i4 = l3.UnexpectedIdentifier;
          break;
        case h2.NumericLiteral:
          i4 = l3.UnexpectedNumber;
          break;
        case h2.StringLiteral:
          i4 = l3.UnexpectedString;
          break;
        case h2.Template:
          i4 = l3.UnexpectedTemplate;
      }
      t4 = u5.value.toString();
    } else t4 = "ILLEGAL";
    i4 ?? (i4 = l3.UnexpectedToken), r4 ?? (r4 = { value: t4 });
    let n7 = w3(i4, r4);
    if (u5) {
      let e7 = u5.start, t5 = u5.lineNumber, s8 = u5.start - u5.lineStart + 1;
      return new C4({ code: i4, index: e7, line: t5, column: s8, len: u5.end - u5.start - 1, data: r4, description: n7 });
    }
    let { index: s7, line: a3 } = this.endMarker;
    return new C4({ code: i4, index: s7, line: a3, column: this.endMarker.column + 1, data: r4, description: n7 });
  }
  throwUnexpectedToken(e6 = {}) {
    throw e6.rawToken ?? (e6.rawToken = this.rawToken), this.unexpectedTokenError(e6);
  }
  collectComments(e6) {
    let { commentHandler: t4 } = this;
    !t4 || !e6.length || e6.forEach((e7) => {
      let u5 = { type: e7.multiLine ? i3.BlockComment : i3.LineComment, value: this.getSourceValue(e7), range: e7.range, loc: e7.loc };
      t4.collectComment(u5);
    });
  }
  peekAhead(e6) {
    let t4 = () => (this.scanner.scanComments(), this.scanner.lex()), u5 = this.scanner.saveState(), i4 = e6.call(this, t4);
    return this.scanner.restoreState(u5), i4;
  }
  getSourceValue(e6) {
    return this.scanner.source.slice(e6.start, e6.end);
  }
  convertToToken(e6) {
    return { type: c2[e6.type], value: this.getSourceValue(e6), range: [e6.start, e6.end], loc: { start: { line: this.startMarker.line, column: this.startMarker.column }, end: { line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart } } };
  }
  readNextRawToken() {
    this.endMarker.index = this.scanner.index, this.endMarker.line = this.scanner.lineNumber, this.endMarker.column = this.scanner.index - this.scanner.lineStart;
    let e6 = this.rawToken;
    this.collectComments(this.scanner.scanComments()), this.scanner.index !== this.startMarker.index && (this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart), this.rawToken = this.scanner.lex(), this.hasLineTerminator = e6.lineNumber !== this.rawToken.lineNumber, this.options.tokens && this.rawToken.type !== h2.EOF && this.tokens.push(this.convertToToken(this.rawToken));
  }
  captureStartMarker() {
    return { index: this.startMarker.index, line: this.startMarker.line, column: this.startMarker.column };
  }
  getItemLocation(e6) {
    return { range: [e6.index, this.endMarker.index], loc: { start: { line: e6.line, column: e6.column }, end: { line: this.endMarker.line, column: this.endMarker.column } } };
  }
  finalize(e6) {
    var _a, _b;
    return (this.delegate ?? this.commentHandler) && ((_a = this.commentHandler) == null ? void 0 : _a.attachComments(e6), (_b = this.delegate) == null ? void 0 : _b.call(this, e6)), e6;
  }
  expectPunctuator(e6) {
    let t4 = this.rawToken;
    this.matchPunctuator(e6) ? this.readNextRawToken() : this.throwUnexpectedToken({ rawToken: t4, code: l3.PunctuatorExpected, data: { value: e6 } });
  }
  expectKeyword(e6) {
    this.rawToken.type !== h2.Keyword || this.rawToken.value.toLowerCase() !== e6.toString() ? this.throwUnexpectedToken({ rawToken: this.rawToken }) : this.readNextRawToken();
  }
  expectContextualKeyword(e6) {
    this.rawToken.type !== h2.Identifier || this.rawToken.value.toLowerCase() !== e6 ? this.throwUnexpectedToken({ rawToken: this.rawToken }) : this.readNextRawToken();
  }
  matchKeyword(e6) {
    return this.rawToken.type === h2.Keyword && this.rawToken.value.toLowerCase() === e6;
  }
  matchContextualKeyword(e6) {
    return this.rawToken.type === h2.Identifier && this.rawToken.value === e6;
  }
  matchPunctuator(e6) {
    return this.rawToken.type === h2.Punctuator && this.rawToken.value === e6;
  }
  getMatchingPunctuator(e6) {
    if ("string" == typeof e6 && (e6 = e6.split("")), this.rawToken.type === h2.Punctuator && e6.length) return e6.find(this.matchPunctuator.bind(this));
  }
  isolateCoverGrammar(e6) {
    let t4 = this.context.isAssignmentTarget;
    this.context.isAssignmentTarget = true;
    let u5 = e6.call(this);
    return this.context.isAssignmentTarget = t4, u5;
  }
  inheritCoverGrammar(e6) {
    var t4;
    let u5 = this.context.isAssignmentTarget;
    this.context.isAssignmentTarget = true;
    let i4 = e6.call(this);
    return (t4 = this.context).isAssignmentTarget && (t4.isAssignmentTarget = u5), i4;
  }
  withBlockContext(e6, t4) {
    let u5 = this.context.blockContext;
    this.context.blockContext |= e6;
    let i4 = this.context.curlyParsingType;
    this.context.curlyParsingType = M2.Automatic;
    let r4 = t4.call(this);
    return this.context.blockContext = u5, this.context.curlyParsingType = i4, r4;
  }
  consumeSemicolon() {
    if (this.matchPunctuator(";")) this.readNextRawToken();
    else if (!this.hasLineTerminator) {
      if (this.rawToken.type === h2.EOF || this.matchPunctuator("}")) return this.endMarker.index = this.startMarker.index, this.endMarker.line = this.startMarker.line, void (this.endMarker.column = this.startMarker.column);
      this.throwUnexpectedToken({ rawToken: this.rawToken });
    }
  }
  parsePrimaryExpression() {
    let t4 = this.captureStartMarker(), u5 = this.rawToken;
    switch (u5.type) {
      case h2.Identifier:
        return this.readNextRawToken(), this.finalize({ type: i3.Identifier, name: u5.value, ...this.getItemLocation(t4) });
      case h2.NumericLiteral:
      case h2.StringLiteral:
        return this.context.isAssignmentTarget = false, this.readNextRawToken(), this.finalize({ type: i3.Literal, value: u5.value, raw: this.getSourceValue(u5), isString: "string" == typeof u5.value, ...this.getItemLocation(t4) });
      case h2.BooleanLiteral:
        return this.context.isAssignmentTarget = false, this.readNextRawToken(), this.finalize({ type: i3.Literal, value: u5.value.toLowerCase() === e3.True, raw: this.getSourceValue(u5), isString: false, ...this.getItemLocation(t4) });
      case h2.NullLiteral:
        return this.context.isAssignmentTarget = false, this.readNextRawToken(), this.finalize({ type: i3.Literal, value: null, raw: this.getSourceValue(u5), isString: false, ...this.getItemLocation(t4) });
      case h2.Template:
        return this.parseTemplateLiteral();
      case h2.Punctuator:
        switch (u5.value) {
          case "(":
            return this.inheritCoverGrammar(this.parseGroupExpression.bind(this));
          case "[":
            return this.inheritCoverGrammar(this.parseArrayInitializer.bind(this));
          case "{":
            return this.inheritCoverGrammar(this.parseObjectExpression.bind(this));
          default:
            return this.throwUnexpectedToken({ rawToken: this.rawToken });
        }
      case h2.Keyword:
        return this.context.isAssignmentTarget = false, this.throwUnexpectedToken({ rawToken: this.rawToken });
      default:
        return this.throwUnexpectedToken({ rawToken: this.rawToken });
    }
  }
  parseArrayInitializer() {
    let e6 = this.captureStartMarker();
    this.expectPunctuator("[");
    let t4 = [];
    for (; !this.matchPunctuator("]"); ) {
      let e7 = this.captureStartMarker();
      this.matchPunctuator(",") ? (this.readNextRawToken(), this.throwError(l3.InvalidExpression, e7)) : (t4.push(this.inheritCoverGrammar(this.parseAssignmentExpression.bind(this))), this.matchPunctuator("]") || this.expectPunctuator(","));
    }
    return this.expectPunctuator("]"), this.finalize({ type: i3.ArrayExpression, elements: t4, ...this.getItemLocation(e6) });
  }
  parseObjectPropertyKey() {
    let e6 = this.captureStartMarker(), t4 = this.rawToken;
    switch (t4.type) {
      case h2.StringLiteral:
        return this.readNextRawToken(), this.finalize({ type: i3.Literal, value: t4.value, raw: this.getSourceValue(t4), isString: true, ...this.getItemLocation(e6) });
      case h2.Identifier:
      case h2.BooleanLiteral:
      case h2.NullLiteral:
      case h2.Keyword:
        return this.readNextRawToken(), this.finalize({ type: i3.Identifier, name: t4.value, ...this.getItemLocation(e6) });
      default:
        this.throwError(l3.KeyMustBeString, e6);
    }
  }
  parseObjectProperty() {
    let e6 = this.rawToken, t4 = this.captureStartMarker(), u5 = this.parseObjectPropertyKey(), r4 = false, n7 = null;
    return this.matchPunctuator(":") ? (this.readNextRawToken(), n7 = this.inheritCoverGrammar(this.parseAssignmentExpression.bind(this))) : e6.type === h2.Identifier ? (r4 = true, n7 = this.finalize({ type: i3.Identifier, name: e6.value, ...this.getItemLocation(t4) })) : this.throwUnexpectedToken({ rawToken: this.rawToken }), this.finalize({ type: i3.Property, kind: "init", key: u5, value: n7, shorthand: r4, ...this.getItemLocation(t4) });
  }
  parseObjectExpression() {
    let e6 = this.captureStartMarker();
    this.expectPunctuator("{");
    let t4 = [];
    for (; !this.matchPunctuator("}"); ) t4.push(this.parseObjectProperty()), this.matchPunctuator("}") || this.expectPunctuator(",");
    return this.expectPunctuator("}"), this.finalize({ type: i3.ObjectExpression, properties: t4, ...this.getItemLocation(e6) });
  }
  parseTemplateElement(e6 = false) {
    let t4 = this.rawToken;
    t4.type !== h2.Template && this.throwUnexpectedToken({ rawToken: t4 }), e6 && !t4.head && this.throwUnexpectedToken({ code: l3.InvalidTemplateHead, rawToken: t4 });
    let u5 = this.captureStartMarker();
    this.readNextRawToken();
    let { value: r4, cooked: n7, tail: s7 } = t4, a3 = this.finalize({ type: i3.TemplateElement, value: { raw: r4, cooked: n7 }, tail: s7, ...this.getItemLocation(u5) });
    return a3.loc.start.column += 1, a3.loc.end.column -= s7 ? 1 : 2, a3;
  }
  parseTemplateLiteral() {
    let e6 = this.captureStartMarker(), t4 = [], u5 = [], r4 = this.parseTemplateElement(true);
    for (u5.push(r4); !r4.tail; ) t4.push(this.parseExpression()), r4 = this.parseTemplateElement(), u5.push(r4);
    return this.finalize({ type: i3.TemplateLiteral, quasis: u5, expressions: t4, ...this.getItemLocation(e6) });
  }
  parseGroupExpression() {
    this.expectPunctuator("(");
    let e6 = this.inheritCoverGrammar(this.parseAssignmentExpression.bind(this));
    return this.expectPunctuator(")"), e6;
  }
  parseArguments() {
    this.expectPunctuator("(");
    let e6 = [];
    if (!this.matchPunctuator(")")) for (; ; ) {
      let t4 = this.isolateCoverGrammar(this.parseAssignmentExpression.bind(this));
      if (e6.push(t4), this.matchPunctuator(")") || (this.expectPunctuator(","), this.matchPunctuator(")"))) break;
    }
    return this.expectPunctuator(")"), e6;
  }
  parseMemberName() {
    let e6 = this.rawToken, t4 = this.captureStartMarker();
    return this.readNextRawToken(), e6.type !== h2.NullLiteral && e6.type !== h2.Identifier && e6.type !== h2.Keyword && e6.type !== h2.BooleanLiteral && this.throwUnexpectedToken({ rawToken: e6 }), this.finalize({ type: i3.Identifier, name: e6.value, ...this.getItemLocation(t4) });
  }
  parseLeftHandSideExpression() {
    let e6, t4 = this.captureStartMarker(), u5 = this.inheritCoverGrammar(this.parsePrimaryExpression.bind(this)), r4 = this.captureStartMarker();
    for (; e6 = this.getMatchingPunctuator("([."); ) switch (e6) {
      case "(": {
        this.context.isAssignmentTarget = false, u5.type !== i3.Identifier && u5.type !== i3.MemberExpression && this.throwError(l3.IdentifierExpected, t4, r4);
        let e7 = this.parseArguments();
        u5 = this.finalize({ type: i3.CallExpression, callee: u5, arguments: e7, ...this.getItemLocation(t4) });
        continue;
      }
      case "[": {
        this.context.isAssignmentTarget = true, this.expectPunctuator("[");
        let e7 = this.isolateCoverGrammar(() => this.parseExpression());
        this.expectPunctuator("]"), u5 = this.finalize({ type: i3.MemberExpression, computed: true, object: u5, property: e7, ...this.getItemLocation(t4) });
        continue;
      }
      case ".": {
        this.context.isAssignmentTarget = true, this.expectPunctuator(".");
        let e7 = this.parseMemberName();
        u5 = this.finalize({ type: i3.MemberExpression, computed: false, object: u5, property: e7, ...this.getItemLocation(t4) });
        continue;
      }
    }
    return u5;
  }
  parseUpdateExpression() {
    let e6 = this.captureStartMarker(), t4 = this.getMatchingPunctuator(r3);
    if (t4) {
      this.readNextRawToken();
      let u6 = this.captureStartMarker(), r4 = this.inheritCoverGrammar(this.parseUnaryExpression.bind(this));
      return r4.type !== i3.Identifier && r4.type !== i3.MemberExpression && r4.type !== i3.CallExpression && this.throwError(l3.InvalidExpression, u6), this.context.isAssignmentTarget || this.tolerateError(l3.InvalidLeftHandSideInAssignment, e6), this.context.isAssignmentTarget = false, this.finalize({ type: i3.UpdateExpression, operator: t4, argument: r4, prefix: true, ...this.getItemLocation(e6) });
    }
    let u5 = this.captureStartMarker(), n7 = this.inheritCoverGrammar(this.parseLeftHandSideExpression.bind(this)), s7 = this.captureStartMarker();
    return this.hasLineTerminator || (t4 = this.getMatchingPunctuator(r3), !t4) ? n7 : (n7.type !== i3.Identifier && n7.type !== i3.MemberExpression && this.throwError(l3.InvalidExpression, u5, s7), this.context.isAssignmentTarget || this.tolerateError(l3.InvalidLeftHandSideInAssignment, e6), this.readNextRawToken(), this.context.isAssignmentTarget = false, this.finalize({ type: i3.UpdateExpression, operator: t4, argument: n7, prefix: false, ...this.getItemLocation(e6) }));
  }
  parseUnaryExpression() {
    let e6 = this.getMatchingPunctuator(n6);
    if (e6) {
      let t4 = this.captureStartMarker();
      this.readNextRawToken();
      let u5 = this.inheritCoverGrammar(this.parseUnaryExpression.bind(this));
      return this.context.isAssignmentTarget = false, this.finalize({ type: i3.UnaryExpression, operator: e6, argument: u5, prefix: true, ...this.getItemLocation(t4) });
    }
    return this.parseUpdateExpression();
  }
  parseBinaryExpression() {
    let e6 = this.rawToken, t4 = this.inheritCoverGrammar(this.parseUnaryExpression.bind(this));
    if (this.rawToken.type !== h2.Punctuator) return t4;
    let u5 = this.rawToken.value, i4 = z2(u5);
    if (0 === i4) return t4;
    this.readNextRawToken(), this.context.isAssignmentTarget = false;
    let r4 = [e6, this.rawToken], n7 = t4, s7 = this.inheritCoverGrammar(this.parseUnaryExpression.bind(this)), a3 = [n7, u5, s7], D4 = [i4];
    for (; this.rawToken.type === h2.Punctuator && (i4 = z2(this.rawToken.value)) > 0; ) {
      for (; a3.length > 2 && i4 <= D4[D4.length - 1]; ) {
        s7 = a3.pop();
        let e7 = a3.pop();
        D4.pop(), n7 = a3.pop(), r4.pop();
        let t5 = r4[r4.length - 1], u6 = O(t5, t5.lineStart);
        a3.push(this.finalize(this.createBinaryOrLogicalExpression(u6, e7, n7, s7)));
      }
      a3.push(this.rawToken.value), D4.push(i4), r4.push(this.rawToken), this.readNextRawToken(), a3.push(this.inheritCoverGrammar(this.parseUnaryExpression.bind(this)));
    }
    let o5 = a3.length - 1;
    t4 = a3[o5];
    let c3 = r4.pop();
    for (; o5 > 1; ) {
      let e7 = r4.pop();
      if (!e7) break;
      let u6 = c3 == null ? void 0 : c3.lineStart, i5 = O(e7, u6), n8 = a3[o5 - 1];
      t4 = this.finalize(this.createBinaryOrLogicalExpression(i5, n8, a3[o5 - 2], t4)), o5 -= 2, c3 = e7;
    }
    return t4;
  }
  createBinaryOrLogicalExpression(e6, t4, u5, r4) {
    let n7 = a2.includes(t4) ? i3.LogicalExpression : i3.BinaryExpression;
    return n7 === i3.BinaryExpression || ((u5.type === i3.AssignmentExpression || u5.type === i3.UpdateExpression) && this.throwError(l3.InvalidExpression, ...R2(u5)), (r4.type === i3.AssignmentExpression || r4.type === i3.UpdateExpression) && this.throwError(l3.InvalidExpression, ...R2(u5))), { type: n7, operator: t4, left: u5, right: r4, ...this.getItemLocation(e6) };
  }
  parseAssignmentExpression() {
    let e6 = this.captureStartMarker(), t4 = this.inheritCoverGrammar(this.parseBinaryExpression.bind(this)), u5 = this.captureStartMarker(), r4 = this.getMatchingPunctuator(s5);
    if (!r4) return t4;
    t4.type !== i3.Identifier && t4.type !== i3.MemberExpression && this.throwError(l3.InvalidExpression, e6, u5), this.context.isAssignmentTarget || this.tolerateError(l3.InvalidLeftHandSideInAssignment, e6), this.matchPunctuator("=") || (this.context.isAssignmentTarget = false), this.readNextRawToken();
    let n7 = this.isolateCoverGrammar(this.parseAssignmentExpression.bind(this));
    return this.finalize({ type: i3.AssignmentExpression, left: t4, operator: r4, right: n7, ...this.getItemLocation(e6) });
  }
  parseExpression() {
    return this.isolateCoverGrammar(this.parseAssignmentExpression.bind(this));
  }
  parseStatements(e6) {
    let t4 = [];
    for (; this.rawToken.type !== h2.EOF && !this.matchPunctuator(e6); ) {
      let e7 = this.parseStatementListItem();
      A(e7) || t4.push(e7);
    }
    return t4;
  }
  parseStatementListItem() {
    return this.context.isAssignmentTarget = true, this.matchKeyword(t2.Function) ? this.parseFunctionDeclaration() : this.matchKeyword(t2.Export) ? this.parseExportDeclaration() : this.matchKeyword(t2.Import) ? this.parseImportDeclaration() : this.parseStatement();
  }
  parseBlock() {
    let e6 = this.captureStartMarker();
    this.expectPunctuator("{");
    let t4 = this.parseStatements("}");
    return this.expectPunctuator("}"), this.finalize({ type: i3.BlockStatement, body: t4, ...this.getItemLocation(e6) });
  }
  parseObjectStatement() {
    let e6 = this.captureStartMarker(), t4 = this.parseObjectExpression();
    return this.finalize({ type: i3.ExpressionStatement, expression: t4, ...this.getItemLocation(e6) });
  }
  parseBlockOrObjectStatement() {
    return this.context.curlyParsingType === M2.AsObject || this.peekAhead((e6) => {
      let t4 = e6();
      return !(t4.type !== h2.Identifier && t4.type !== h2.StringLiteral || (t4 = e6(), t4.type !== h2.Punctuator || ":" !== t4.value));
    }) ? this.parseObjectStatement() : this.parseBlock();
  }
  parseIdentifier() {
    let e6 = this.rawToken;
    if (e6.type !== h2.Identifier) return null;
    let t4 = this.captureStartMarker();
    return this.readNextRawToken(), this.finalize({ type: i3.Identifier, name: e6.value, ...this.getItemLocation(t4) });
  }
  parseVariableDeclarator() {
    let e6 = this.captureStartMarker(), t4 = this.parseIdentifier();
    t4 || this.throwUnexpectedToken({ code: l3.IdentifierExpected });
    let u5 = null;
    if (this.matchPunctuator("=")) {
      this.readNextRawToken();
      let e7 = this.rawToken;
      try {
        u5 = this.isolateCoverGrammar(this.parseAssignmentExpression.bind(this));
      } catch {
        this.throwUnexpectedToken({ rawToken: e7, code: l3.InvalidVariableAssignment });
      }
    }
    return this.finalize({ type: i3.VariableDeclarator, id: t4, init: u5, ...this.getItemLocation(e6) });
  }
  parseVariableDeclarators() {
    let e6 = [this.parseVariableDeclarator()];
    for (; this.matchPunctuator(","); ) this.readNextRawToken(), e6.push(this.parseVariableDeclarator());
    return e6;
  }
  parseVariableDeclaration() {
    let e6 = this.captureStartMarker();
    this.expectKeyword(t2.Var);
    let u5 = this.parseVariableDeclarators();
    return this.consumeSemicolon(), this.finalize({ type: i3.VariableDeclaration, declarations: u5, kind: "var", ...this.getItemLocation(e6) });
  }
  parseEmptyStatement() {
    let e6 = this.captureStartMarker();
    return this.expectPunctuator(";"), this.finalize({ type: i3.EmptyStatement, ...this.getItemLocation(e6) });
  }
  parseExpressionStatement() {
    let e6 = this.captureStartMarker(), t4 = this.parseExpression();
    return this.consumeSemicolon(), this.finalize({ type: i3.ExpressionStatement, expression: t4, ...this.getItemLocation(e6) });
  }
  parseIfClause() {
    return this.withBlockContext(P4.IfClause, this.parseStatement.bind(this));
  }
  parseIfStatement() {
    let e6 = this.captureStartMarker();
    this.expectKeyword(t2.If), this.expectPunctuator("(");
    let u5 = this.captureStartMarker(), r4 = this.parseExpression(), n7 = this.captureStartMarker();
    this.expectPunctuator(")"), (r4.type === i3.AssignmentExpression || r4.type === i3.UpdateExpression) && this.throwError(l3.InvalidExpression, u5, n7);
    let s7 = this.parseIfClause(), a3 = null;
    return this.matchKeyword(t2.Else) && (this.readNextRawToken(), a3 = this.parseIfClause()), this.finalize({ type: i3.IfStatement, test: r4, consequent: s7, alternate: a3, ...this.getItemLocation(e6) });
  }
  parseWhileStatement() {
    let e6 = this.captureStartMarker();
    this.expectKeyword(t2.While), this.expectPunctuator("(");
    let u5 = this.captureStartMarker(), r4 = this.parseExpression(), n7 = this.captureStartMarker();
    this.expectPunctuator(")"), (r4.type === i3.AssignmentExpression || r4.type === i3.UpdateExpression) && this.throwError(l3.InvalidExpression, u5, n7);
    let s7 = this.withBlockContext(P4.WhileLoop, this.parseStatement.bind(this));
    return this.finalize({ type: i3.WhileStatement, test: r4, body: s7, ...this.getItemLocation(e6) });
  }
  parseForStatement() {
    let e6 = i3.ForStatement, r4 = null, n7 = null, s7 = null, a3 = null, D4 = null, o5 = this.captureStartMarker();
    if (this.expectKeyword(t2.For), this.expectPunctuator("("), this.matchKeyword(t2.Var)) {
      let n8 = this.captureStartMarker();
      this.readNextRawToken();
      let s8 = this.parseVariableDeclarators();
      r4 = this.finalize({ type: i3.VariableDeclaration, declarations: s8, kind: "var", ...this.getItemLocation(n8) });
      let D5 = this.matchKeyword(t2.In), o6 = this.matchContextualKeyword(u4.Of);
      1 === s8.length && (D5 || o6) && (s8[0].init && this.throwError(l3.ForInOfLoopInitializer, n8), e6 = D5 ? i3.ForInStatement : i3.ForOfStatement, a3 = r4);
    } else if (!this.matchPunctuator(";")) {
      let n8 = this.context.isAssignmentTarget, s8 = this.captureStartMarker();
      r4 = this.inheritCoverGrammar(this.parseAssignmentExpression.bind(this));
      let D5 = this.matchKeyword(t2.In), o6 = this.matchContextualKeyword(u4.Of);
      D5 || o6 ? (this.context.isAssignmentTarget || this.tolerateError(l3.InvalidLeftHandSideInForIn, s8), r4.type !== i3.Identifier && this.throwError(l3.InvalidLeftHandSideInForIn, s8), e6 = D5 ? i3.ForInStatement : i3.ForOfStatement, a3 = r4) : this.context.isAssignmentTarget = n8;
    }
    e6 === i3.ForStatement ? (this.expectPunctuator(";"), n7 = this.matchPunctuator(";") ? null : this.isolateCoverGrammar(this.parseExpression.bind(this)), this.expectPunctuator(";"), s7 = this.matchPunctuator(")") ? null : this.isolateCoverGrammar(this.parseExpression.bind(this))) : (this.readNextRawToken(), D4 = this.parseExpression()), this.expectPunctuator(")");
    let h4 = this.withBlockContext(e6 === i3.ForOfStatement ? P4.ForOfLoop : P4.ForLoop, () => this.isolateCoverGrammar(this.parseStatement.bind(this)));
    return e6 === i3.ForInStatement || e6 === i3.ForOfStatement ? this.finalize({ type: e6, left: a3, right: D4, body: h4, ...this.getItemLocation(o5) }) : this.finalize({ type: e6, init: r4, test: n7, update: s7, body: h4, ...this.getItemLocation(o5) });
  }
  parseContinueStatement() {
    let e6 = this.captureStartMarker();
    return this.expectKeyword(t2.Continue), this.consumeSemicolon(), this.finalize({ type: i3.ContinueStatement, ...this.getItemLocation(e6) });
  }
  parseBreakStatement() {
    let e6 = this.captureStartMarker();
    return this.expectKeyword(t2.Break), this.consumeSemicolon(), this.finalize({ type: i3.BreakStatement, ...this.getItemLocation(e6) });
  }
  parseReturnStatement() {
    let e6 = this.captureStartMarker();
    this.expectKeyword(t2.Return);
    let u5 = (this.matchPunctuator(";") || this.matchPunctuator("}") || this.hasLineTerminator || this.rawToken.type === h2.EOF) && this.rawToken.type !== h2.StringLiteral && this.rawToken.type !== h2.Template ? null : this.parseExpression();
    return this.consumeSemicolon(), this.finalize({ type: i3.ReturnStatement, argument: u5, ...this.getItemLocation(e6) });
  }
  parseStatement() {
    switch (this.rawToken.type) {
      case h2.BooleanLiteral:
      case h2.NullLiteral:
      case h2.NumericLiteral:
      case h2.StringLiteral:
      case h2.Template:
      case h2.Identifier:
        return this.parseExpressionStatement();
      case h2.Punctuator:
        return "{" === this.rawToken.value ? this.parseBlockOrObjectStatement() : "(" === this.rawToken.value ? this.parseExpressionStatement() : ";" === this.rawToken.value ? this.parseEmptyStatement() : this.parseExpressionStatement();
      case h2.Keyword:
        switch (this.rawToken.value.toLowerCase()) {
          case t2.Break:
            return this.parseBreakStatement();
          case t2.Continue:
            return this.parseContinueStatement();
          case t2.For:
            return this.parseForStatement();
          case t2.Function:
            return this.parseFunctionDeclaration();
          case t2.If:
            return this.parseIfStatement();
          case t2.Return:
            return this.parseReturnStatement();
          case t2.Var:
            return this.parseVariableDeclaration();
          case t2.While:
            return this.parseWhileStatement();
          default:
            return this.parseExpressionStatement();
        }
      default:
        return this.throwUnexpectedToken({ rawToken: this.rawToken });
    }
  }
  parseFormalParameters() {
    let e6 = [];
    if (this.expectPunctuator("("), !this.matchPunctuator(")")) for (; this.rawToken.type !== h2.EOF; ) {
      let t4 = this.parseIdentifier();
      if (t4 || this.throwUnexpectedToken({ rawToken: this.rawToken, code: l3.IdentifierExpected }), e6.push(t4), this.matchPunctuator(")") || (this.expectPunctuator(","), this.matchPunctuator(")"))) break;
    }
    return this.expectPunctuator(")"), e6;
  }
  parseFunctionDeclaration() {
    (this.context.blockContext & P4.Function) === P4.Function && this.throwUnexpectedToken({ code: l3.NoFunctionInsideFunction }), ((this.context.blockContext & P4.WhileLoop) === P4.WhileLoop || (this.context.blockContext & P4.ForOfLoop) === P4.ForOfLoop || (this.context.blockContext & P4.IfClause) === P4.IfClause) && this.throwUnexpectedToken({ code: l3.NoFunctionInsideBlock });
    let e6 = this.captureStartMarker();
    this.expectKeyword(t2.Function);
    let u5 = this.parseIdentifier();
    u5 || this.throwUnexpectedToken({ code: l3.InvalidFunctionIdentifier });
    let r4 = this.parseFormalParameters(), n7 = this.context.blockContext;
    this.context.blockContext |= P4.Function;
    let s7 = this.parseBlock();
    return this.context.blockContext = n7, this.finalize({ type: i3.FunctionDeclaration, id: u5, params: r4, body: s7, ...this.getItemLocation(e6) });
  }
  parseScript() {
    let e6 = this.captureStartMarker(), t4 = this.parseStatements(), u5 = this.finalize({ type: i3.Program, body: t4, ...this.getItemLocation(e6) });
    return this.options.tokens && (u5.tokens = this.tokens), this.options.tolerant && (u5.errors = this.errorHandler.errors), u5;
  }
  parseExportDeclaration() {
    this.context.blockContext !== P4.None && this.throwUnexpectedToken({ code: l3.ModuleExportRootOnly });
    let e6 = null, u5 = this.captureStartMarker();
    return this.expectKeyword(t2.Export), this.matchKeyword(t2.Var) ? e6 = this.parseVariableDeclaration() : this.matchKeyword("function") ? e6 = this.parseFunctionDeclaration() : this.throwUnexpectedToken({ code: l3.InvalidExpression }), this.finalize({ type: i3.ExportNamedDeclaration, declaration: e6, specifiers: [], source: null, ...this.getItemLocation(u5) });
  }
  parseModuleSpecifier() {
    let e6 = this.captureStartMarker(), t4 = this.rawToken;
    if (t4.type === h2.StringLiteral) return this.readNextRawToken(), this.finalize({ type: i3.Literal, value: t4.value, raw: this.getSourceValue(t4), isString: true, ...this.getItemLocation(e6) });
    this.throwError(l3.InvalidModuleUri, e6);
  }
  parseDefaultSpecifier() {
    let e6 = this.captureStartMarker(), t4 = this.parseIdentifier();
    return t4 || this.throwUnexpectedToken({ code: l3.IdentifierExpected }), this.finalize({ type: i3.ImportDefaultSpecifier, local: t4, ...this.getItemLocation(e6) });
  }
  parseImportDeclaration() {
    this.context.blockContext !== P4.None && this.throwUnexpectedToken({ code: l3.ModuleImportRootOnly });
    let e6 = this.captureStartMarker();
    this.expectKeyword(t2.Import);
    let r4 = this.parseDefaultSpecifier();
    this.expectContextualKeyword(u4.From);
    let n7 = this.parseModuleSpecifier();
    return this.finalize({ type: i3.ImportDeclaration, specifiers: [r4], source: n7, ...this.getItemLocation(e6) });
  }
};
function H3(e6, t4, u5) {
  return new K2(e6, t4, u5).parseScript();
}

// node_modules/@arcgis/core/arcade/parser.js
function d4(d5, r4 = []) {
  const s7 = H3(d5);
  if (null === s7.body || void 0 === s7.body) throw new C4({ index: 0, line: 0, column: 0, data: null, description: "", code: l3.InvalidExpression });
  return s7.loadedModules = {}, b(s7, r4), s7;
}

// node_modules/@arcgis/core/arcade/featureset/support/RecentlyUsedCache.js
var e5 = class _e2 {
  constructor(e6) {
    const t4 = this;
    t4._keys = [], t4._values = [], t4.length = 0, e6 && e6.forEach((e7) => {
      t4.set(e7[0], e7[1]);
    });
  }
  entries() {
    return [].slice.call(this.keys().map((e6, t4) => [e6, this._values[t4]]));
  }
  keys() {
    return [].slice.call(this._keys);
  }
  values() {
    return [].slice.call(this._values);
  }
  has(e6) {
    return this._keys.includes(e6);
  }
  get(e6) {
    const t4 = this._keys.indexOf(e6);
    return t4 > -1 ? this._values[t4] : null;
  }
  deepGet(t4) {
    if (!(t4 == null ? void 0 : t4.length)) return null;
    const s7 = (t5, a3) => null == t5 ? null : a3.length ? s7(t5 instanceof _e2 ? t5.get(a3[0]) : t5[a3[0]], a3.slice(1)) : t5;
    return s7(this.get(t4[0]), t4.slice(1));
  }
  set(e6, t4) {
    const s7 = this, a3 = this._keys.indexOf(e6);
    return a3 > -1 ? s7._values[a3] = t4 : (s7._keys.push(e6), s7._values.push(t4), s7.length = s7._values.length), this;
  }
  sortedSet(e6, t4, s7, a3) {
    const i4 = this, h4 = this._keys.length, r4 = s7 || 0, l5 = void 0 !== a3 ? a3 : h4 - 1;
    if (0 === h4) return i4._keys.push(e6), i4._values.push(t4), i4;
    if (e6 === this._keys[r4]) return this._values.splice(r4, 0, t4), this;
    if (e6 === this._keys[l5]) return this._values.splice(l5, 0, t4), this;
    if (e6 > this._keys[l5]) return this._keys.splice(l5 + 1, 0, e6), this._values.splice(l5 + 1, 0, t4), this;
    if (e6 < this._keys[r4]) return this._values.splice(r4, 0, t4), this._keys.splice(r4, 0, e6), this;
    if (r4 >= l5) return this;
    const n7 = r4 + Math.floor((l5 - r4) / 2);
    return e6 < this._keys[n7] ? this.sortedSet(e6, t4, r4, n7 - 1) : e6 > this._keys[n7] ? this.sortedSet(e6, t4, n7 + 1, l5) : this;
  }
  size() {
    return this.length;
  }
  clear() {
    const e6 = this;
    return e6._keys.length = e6.length = e6._values.length = 0, this;
  }
  delete(e6) {
    const t4 = this, s7 = t4._keys.indexOf(e6);
    return s7 > -1 && (t4._keys.splice(s7, 1), t4._values.splice(s7, 1), t4.length = t4._keys.length, true);
  }
  forEach(e6) {
    this._keys.forEach((t4, s7) => {
      e6(this._values[s7], t4, s7);
    });
  }
  map(e6) {
    return this.keys().map((t4, s7) => e6(this._values[s7], t4, s7));
  }
  filter(e6) {
    const t4 = this;
    return t4._keys.forEach((s7, a3) => {
      false === e6(t4._values[a3], s7, a3) && t4.delete(s7);
    }), this;
  }
  clone() {
    return new _e2(this.entries());
  }
};
var t3 = class {
  constructor(t4 = 20) {
    this._maxEntries = t4, this._values = new e5();
  }
  delete(e6) {
    this._values.has(e6) && this._values.delete(e6);
  }
  get(e6) {
    let t4 = null;
    return this._values.has(e6) && (t4 = this._values.get(e6), this._values.delete(e6), this._values.set(e6, t4)), t4;
  }
  put(e6, t4) {
    if (this._values.size() >= this._maxEntries) {
      const e7 = this._values.keys()[0];
      this._values.delete(e7);
    }
    this._values.set(e6, t4);
  }
};
var s6 = class {
  constructor(e6 = 20) {
    this._maxEntries = e6, this._cache = new t3(this._maxEntries), this._layerMetadata = new t3(this._maxEntries), this._serviceMetadata = new t3(this._maxEntries), this._portalItems = new t3(this._maxEntries), this._portalItemLayers = new t3(this._maxEntries);
  }
  clear() {
    this._cache = new t3(this._maxEntries), this._layerMetadata = new t3(this._maxEntries), this._serviceMetadata = new t3(this._maxEntries), this._portalItems = new t3(this._maxEntries), this._portalItemLayers = new t3(this._maxEntries);
  }
  addToCache(e6, t4) {
    this._cache.put(e6, t4);
  }
  removeFromCache(e6) {
    this._cache.delete(e6);
  }
  getFromCache(e6) {
    return this._cache.get(e6);
  }
  getCachedLayerMetadata(e6) {
    return this._layerMetadata.get(e6);
  }
  setCachedLayerMetadata(e6, t4) {
    this._layerMetadata.put(e6, t4);
  }
  removeCachedLayerMetadata(e6, t4) {
    this._layerMetadata.get(e6) === t4 && this._layerMetadata.delete(e6);
  }
  getCachedServiceMetadata(e6) {
    return this._serviceMetadata.get(e6);
  }
  setCachedServiceMetadata(e6, t4) {
    this._serviceMetadata.put(e6, t4);
  }
  removeCachedServiceMetadata(e6, t4) {
    this._serviceMetadata.get(e6) === t4 && this._serviceMetadata.delete(e6);
  }
  getCachedPortalItem(e6, t4) {
    return this._portalItems.get(`${t4}:${e6}`);
  }
  setCachedPortalItem(e6, t4, s7) {
    this._portalItems.put(`${t4}:${e6}`, s7);
  }
  removeCachedPortalItem(e6, t4, s7) {
    const a3 = `${t4}:${e6}`;
    this._portalItems.get(a3) === s7 && this._portalItems.delete(a3);
  }
  getCachedPortalItemLayer(e6, t4) {
    return this._portalItemLayers.get(`${t4}:${e6}`);
  }
  setCachedPortalItemLayer(e6, t4, s7) {
    this._portalItemLayers.put(`${t4}:${e6}`, s7);
  }
  removeCachedPortalItemLayer(e6, t4, s7) {
    const a3 = `${t4}:${e6}`;
    this._portalItemLayers.get(a3) === s7 && this._portalItemLayers.delete(a3);
  }
};

// node_modules/@arcgis/core/arcade/ArcadeModuleResolver.js
var l4 = class _l {
  constructor(e6) {
    this.portalUri = e6;
  }
  normalizeModuleUri(e6) {
    const o5 = /^[a-z0-9A-Z]+(@[0-9]+\.[0-9]+\.[0-9]+)?([?|/].*)?$/gi, s7 = /(?<portalurl>.+)\/home\/item\.html\?id=(?<itemid>.+)$/gi, c3 = /(?<portalurl>.+)\/sharing\/rest\/content\/users\/[a-zA-Z0-9]+\/items\/(?<itemid>.+)$/gi, u5 = /(?<portalurl>.+)\/sharing\/rest\/content\/items\/(?<itemid>.+)$/gi, n7 = /(?<itemid>.*)@(?<versionstring>[0-9]+\.[0-9]+\.[0-9]+)([?|/].*)?$/gi;
    if (e6.startsWith("portal+")) {
      let l5 = e6.slice(7), a3 = "", m = l5, d5 = false;
      for (const e7 of [s7, u5, c3]) {
        const t4 = e7.exec(l5);
        if (null !== t4) {
          const e8 = t4.groups;
          m = e8.itemid, a3 = e8.portalurl, d5 = true;
          break;
        }
      }
      if (false === d5) {
        if (!o5.test(l5)) throw new p(l.UnsupportedUriProtocol, { uri: e6 });
        m = l5, a3 = this.portalUri;
      }
      m.includes("/") && (m = m.split("/")[0]), m.includes("?") && (m = m.split("?")[0]);
      let h4 = "current";
      const p7 = n7.exec(m);
      if (null !== p7) {
        const e7 = p7.groups;
        m = e7.itemid, h4 = e7.versionstring;
      }
      return l5 = new C3({ url: a3 }).restUrl + "/content/items/" + m + "/resources/" + h4 + ".arc", { url: l5, scheme: "portal", uri: "PO:" + l5 };
    }
    if (e6.startsWith("mock")) {
      if ("mock" === e6) {
        return { url: "", scheme: "mock", data: '\n      export var hello = 1;\n      export function helloWorld() {\n          return "Hello World " + hello;\n      }\n  ', uri: "mock" };
      }
      const t4 = e6.replace("mock:", "");
      if (void 0 !== _l.mocks[t4]) return { url: "", scheme: "mock", data: _l.mocks[t4], uri: e6 };
    }
    throw new p(l.UnrecognizedUri, { uri: e6 });
  }
  async fetchModule(e6) {
    const t4 = _l.cachedModules.getFromCache(e6.uri);
    if (t4) return t4;
    const r4 = this.fetchSource(e6);
    _l.cachedModules.addToCache(e6.uri, r4);
    let o5 = null;
    try {
      o5 = await r4;
    } catch (s7) {
      throw _l.cachedModules.removeFromCache(e6.uri), s7;
    }
    return o5;
  }
  async fetchSource(s7) {
    if ("portal" === s7.scheme) {
      const t4 = await P(s7.url, { responseType: "text", query: {} });
      if (t4.data) return d4(t4.data, []);
    }
    if ("mock" === s7.scheme) return d4(s7.data ?? "", []);
    throw new p(l.UnsupportedUriProtocol);
  }
  static create(e6) {
    return new _l(e6);
  }
  static getDefault() {
    return this._default ?? (_l._default = _l._moduleResolverFactory());
  }
  static set moduleResolverClass(e6) {
    this._moduleResolverFactory = e6, this._default = null;
  }
};
l4.mocks = {}, l4.cachedModules = new s6(30), l4._default = null, l4._moduleResolverFactory = () => {
  const e6 = C3.getDefault();
  return new l4(e6.url);
};

// node_modules/@arcgis/core/arcade/arcadeRuntime.js
var Y2 = class extends r2 {
  constructor(e6, t4) {
    super(), this.definition = e6, this.context = t4;
  }
  createFunction(e6) {
    return (...t4) => {
      const n7 = { spatialReference: this.context.spatialReference, console: this.context.console, services: this.context.services, timeZone: this.context.timeZone ?? null, lrucache: this.context.lrucache, exports: this.context.exports, libraryResolver: this.context.libraryResolver, interceptor: this.context.interceptor, localScope: {}, depthCounter: { depth: e6.depthCounter.depth + 1 }, globalScope: this.context.globalScope };
      if (n7.depthCounter.depth > 64) throw new a(e6, r.MaximumCallDepth, null);
      return Oe2(this.definition, n7, t4, null);
    };
  }
  call(e6, t4) {
    return Q(e6, t4, (n7, r4, o5) => {
      const i4 = { spatialReference: e6.spatialReference, services: e6.services, globalScope: e6.globalScope, depthCounter: { depth: e6.depthCounter.depth + 1 }, libraryResolver: e6.libraryResolver, exports: e6.exports, timeZone: e6.timeZone ?? null, console: e6.console, lrucache: e6.lrucache, interceptor: e6.interceptor, localScope: {} };
      if (i4.depthCounter.depth > 64) throw new a(e6, r.MaximumCallDepth, t4);
      return Oe2(this.definition, i4, o5, t4);
    });
  }
  marshalledCall(e6, t4, n7, r4) {
    return r4(e6, t4, (o5, i4, l5) => {
      const a3 = { spatialReference: e6.spatialReference, globalScope: n7.globalScope, services: e6.services, depthCounter: { depth: e6.depthCounter.depth + 1 }, libraryResolver: e6.libraryResolver, exports: e6.exports, console: e6.console, timeZone: e6.timeZone ?? null, lrucache: e6.lrucache, interceptor: e6.interceptor, localScope: {} };
      return l5 = l5.map((t5) => !G(t5) || t5 instanceof s3 ? t5 : n5(t5, e6, r4)), n5(Oe2(this.definition, a3, l5, t4), n7, r4);
    });
  }
};
var H4 = class extends s {
  constructor(e6) {
    super(), this.source = e6;
  }
  global(t4) {
    const n7 = this.executingContext.globalScope[n4(t4)];
    if (G(n7.value) && !(n7.value instanceof s3)) {
      const e6 = new s3();
      e6.fn = n7.value, e6.parameterEvaluator = Q, e6.context = this.executingContext, n7.value = e6;
    }
    return n7.value;
  }
  setGlobal(t4, n7) {
    if (G(n7)) throw new a(null, r.AssignModuleFunction, null);
    this.executingContext.globalScope[n4(t4)] = { value: n7 };
  }
  hasGlobal(t4) {
    return void 0 === this.executingContext.exports[t4] && (t4 = n4(t4)), void 0 !== this.executingContext.exports[t4];
  }
  loadModule(e6) {
    let t4 = e6.spatialReference;
    null == t4 && (t4 = new g({ wkid: 102100 })), this.moduleScope = ke2({}, e6.customfunctions, e6.timeZone), this.executingContext = { spatialReference: t4, globalScope: this.moduleScope, localScope: null, libraryResolver: new s2(e6.libraryResolver._moduleSingletons, this.source.syntax.loadedModules), exports: {}, services: e6.services, console: e6.console ?? Ee2, timeZone: e6.timeZone ?? null, lrucache: e6.lrucache, interceptor: e6.interceptor, depthCounter: { depth: 1 } }, fe2(this.executingContext, this.source.syntax);
  }
};
function J(e6, t4) {
  const n7 = [];
  for (let r4 = 0; r4 < t4.arguments.length; r4++) n7.push(X2(e6, t4.arguments[r4]));
  return n7;
}
function Q(e6, t4, n7) {
  try {
    return true === t4.preparsed ? n7(e6, null, t4.arguments) : n7(e6, t4, J(e6, t4));
  } catch (r4) {
    throw r4;
  }
}
function X2(e6, t4) {
  try {
    switch (t4.type) {
      case "AssignmentExpression":
        return se2(e6, t4);
      case "UpdateExpression":
        return le2(e6, t4);
      case "TemplateLiteral":
        return Fe3(e6, t4);
      case "Identifier":
        return Ie2(e6, t4);
      case "MemberExpression":
        return ye3(e6, t4);
      case "Literal":
        return t4.value;
      case "CallExpression":
        return Ae3(e6, t4);
      case "UnaryExpression":
        return be3(e6, t4);
      case "BinaryExpression":
        return Se2(e6, t4);
      case "LogicalExpression":
        return xe2(e6, t4);
      case "ArrayExpression":
        return ve2(e6, t4);
      case "ObjectExpression":
        return ee3(e6, t4);
      default:
        throw new a(e6, r.Unrecognized, t4);
    }
  } catch (n7) {
    throw u2(e6, t4, n7);
  }
}
function $(e6, t4) {
  switch (t4.type) {
    case "EmptyStatement":
      return v;
    case "VariableDeclaration":
      return me3(e6, t4);
    case "ImportDeclaration":
      return de2(e6, t4);
    case "ExportNamedDeclaration":
      return we2(e6, t4);
    case "BlockStatement":
      return fe2(e6, t4);
    case "FunctionDeclaration":
      return he2(e6, t4);
    case "ReturnStatement":
      return pe2(e6, t4);
    case "IfStatement":
      return ue2(e6, t4);
    case "ExpressionStatement":
      return ce3(e6, t4);
    case "BreakStatement":
      return Y;
    case "ContinueStatement":
      return L;
    case "ForStatement":
      return re3(e6, t4);
    case "ForInStatement":
      return te3(e6, t4);
    case "ForOfStatement":
      return ne3(e6, t4);
    case "WhileStatement":
      return oe3(e6, t4);
    default:
      throw new a(e6, r.Unrecognized, t4);
  }
}
function ee3(e6, t4) {
  const n7 = {}, r4 = /* @__PURE__ */ new Map();
  for (let i4 = 0; i4 < t4.properties.length; i4++) {
    const o6 = t4.properties[i4], l5 = "Identifier" === o6.key.type ? o6.key.name : X2(e6, o6.key), c3 = X2(e6, o6.value);
    if (G(c3)) throw new a(e6, r.NoFunctionInDictionary, t4);
    if (false === e(l5)) throw new a(e6, r.KeyMustBeString, t4);
    let u5 = l5.toString();
    const f6 = u5.toLowerCase();
    r4.has(f6) ? u5 = r4.get(f6) : r4.set(f6, u5), n7[u5] = c3 === v ? null : c3;
  }
  const o5 = new C(n7);
  return o5.immutable = false, o5;
}
function te3(t4, n7) {
  const r4 = X2(t4, n7.right);
  "VariableDeclaration" === n7.left.type && me3(t4, n7.left);
  const o5 = n4("VariableDeclaration" === n7.left.type ? n7.left.declarations[0].id : n7.left);
  let c3 = null;
  if (null != t4.localScope && void 0 !== t4.localScope[o5] && (c3 = t4.localScope[o5]), null === c3 && void 0 !== t4.globalScope[o5] && (c3 = t4.globalScope[o5]), null === c3) throw new a(t4, r.InvalidIdentifier, n7);
  if (o2(r4) || e(r4)) {
    const e6 = r4.length;
    for (let r5 = 0; r5 < e6; r5++) {
      c3.value = r5;
      const e7 = $(t4, n7.body);
      if (e7 === Y) break;
      if (e7 instanceof _) return e7;
    }
    return v;
  }
  if (ee(r4)) {
    for (let e6 = 0; e6 < r4.length(); e6++) {
      c3.value = e6;
      const r5 = $(t4, n7.body);
      if (r5 === Y) break;
      if (r5 instanceof _) return r5;
    }
    return v;
  }
  if (r4 instanceof C || W(r4)) {
    const e6 = r4.keys();
    for (let r5 = 0; r5 < e6.length; r5++) {
      c3.value = e6[r5];
      const o6 = $(t4, n7.body);
      if (o6 === Y) break;
      if (o6 instanceof _) return o6;
    }
    return v;
  }
  if (U(r4)) {
    for (const e6 of f2(r4)) {
      c3.value = e6;
      const r5 = $(t4, n7.body);
      if (r5 === Y) break;
      if (r5 instanceof _) return r5;
    }
    return v;
  }
  return v;
}
function ne3(t4, n7) {
  const r4 = X2(t4, n7.right);
  "VariableDeclaration" === n7.left.type && $(t4, n7.left);
  const c3 = n4("VariableDeclaration" === n7.left.type ? n7.left.declarations[0].id : n7.left);
  let u5 = null;
  if (null != t4.localScope && void 0 !== t4.localScope[c3] && (u5 = t4.localScope[c3]), null === u5 && void 0 !== t4.globalScope[c3] && (u5 = t4.globalScope[c3]), null === u5) throw new a(t4, r.InvalidIdentifier, n7);
  if (o2(r4) || e(r4)) {
    const e6 = r4.length;
    for (let o5 = 0; o5 < e6; o5++) {
      if (o5 >= r4.length) throw new a(t4, r.OutOfBounds, n7);
      u5.value = r4[o5];
      const e7 = $(t4, n7.body);
      if (e7 === Y) break;
      if (e7 instanceof _) return e7;
    }
    return v;
  }
  if (ee(r4)) {
    for (let e6 = 0; e6 < r4.length(); e6++) {
      u5.value = r4.get(e6);
      const o5 = $(t4, n7.body);
      if (o5 === Y) break;
      if (o5 instanceof _) return o5;
    }
    return v;
  }
  if (r4 instanceof C || W(r4)) {
    for (const e6 of r4.keys()) {
      const o5 = r4.field(e6);
      u5.value = new C({ key: e6, value: o5 });
      const i4 = $(t4, n7.body);
      if (i4 === Y) break;
      if (i4 instanceof _) return i4;
    }
    return v;
  }
  if (U(r4)) {
    for (const e6 of f2(r4)) {
      const i4 = d(r4, e6, t4, n7, 1);
      u5.value = new C({ key: e6, value: i4 });
      const a3 = $(t4, n7.body);
      if (a3 === Y) break;
      if (a3 instanceof _) return a3;
    }
    return v;
  }
  return v;
}
function re3(e6, t4) {
  null !== t4.init && ("VariableDeclaration" === t4.init.type ? $(e6, t4.init) : X2(e6, t4.init));
  const n7 = { testResult: true, lastAction: v };
  do {
    ie2(e6, t4, n7);
  } while (true === n7.testResult);
  return n7.lastAction instanceof _ ? n7.lastAction : v;
}
function oe3(e6, t4) {
  const n7 = { testResult: true, lastAction: v };
  if (n7.testResult = X2(e6, t4.test), false === n7.testResult) return v;
  if (true !== n7.testResult) throw new a(e6, r.BooleanConditionRequired, t4);
  for (; true === n7.testResult && (n7.lastAction = $(e6, t4.body), n7.lastAction !== Y) && !(n7.lastAction instanceof _); ) if (n7.testResult = X2(e6, t4.test), true !== n7.testResult && false !== n7.testResult) throw new a(e6, r.BooleanConditionRequired, t4);
  return n7.lastAction instanceof _ ? n7.lastAction : v;
}
function ie2(e6, t4, n7) {
  if (null !== t4.test) {
    if (n7.testResult = X2(e6, t4.test), false === n7.testResult) return;
    if (true !== n7.testResult) throw new a(e6, r.BooleanConditionRequired, t4);
  }
  n7.lastAction = $(e6, t4.body), n7.lastAction !== Y ? n7.lastAction instanceof _ ? n7.testResult = false : null !== t4.update && X2(e6, t4.update) : n7.testResult = false;
}
function le2(t4, n7) {
  if ("CallExpression" === n7.argument.type) throw new a(t4, r.NeverReach, n7);
  let r4;
  if ("MemberExpression" === n7.argument.type) {
    const e6 = X2(t4, n7.argument.object);
    let o6;
    if (true === n7.argument.computed) o6 = X2(t4, n7.argument.property);
    else {
      if ("Identifier" !== n7.argument.property.type) throw new a(t4, r.Unrecognized, n7);
      o6 = n7.argument.property.name;
    }
    if (o2(e6)) {
      if (!n3(o6)) throw new a(t4, r.ArrayAccessorMustBeNumber, n7);
      if (o6 < 0 && (o6 = e6.length + o6), o6 < 0 || o6 >= e6.length) throw new a(t4, r.OutOfBounds, n7);
      r4 = be(e6[o6]), e6[o6] = "++" === n7.operator ? r4 + 1 : r4 - 1;
    } else if (e6 instanceof C) {
      if (false === e(o6)) throw new a(t4, r.KeyAccessorMustBeString, n7);
      if (true !== e6.hasField(o6)) throw new a(t4, r.FieldNotFound, n7);
      r4 = be(e6.field(o6)), e6.setField(o6, "++" === n7.operator ? r4 + 1 : r4 - 1);
    } else if (H(e6)) {
      if (false === e(o6)) throw new a(t4, r.KeyAccessorMustBeString, n7);
      if (true !== e6.hasField(o6)) throw new a(t4, r.FieldNotFound, n7);
      r4 = be(e6.field(o6)), e6.setField(o6, "++" === n7.operator ? r4 + 1 : r4 - 1);
    } else {
      if (ee(e6)) throw new a(t4, r.Immutable, n7);
      if (!(e6 instanceof H4)) throw new a(t4, r.InvalidParameter, n7);
      if (false === e(o6)) throw new a(t4, r.ModuleAccessorMustBeString, n7);
      if (true !== e6.hasGlobal(o6)) throw new a(t4, r.ModuleExportNotFound, n7);
      r4 = be(e6.global(o6)), e6.setGlobal(o6, "++" === n7.operator ? r4 + 1 : r4 - 1);
    }
    return false === n7.prefix ? r4 : "++" === n7.operator ? r4 + 1 : r4 - 1;
  }
  const o5 = n4(n7.argument);
  if (null != t4.localScope && void 0 !== t4.localScope[o5]) return r4 = be(t4.localScope[o5].value), t4.localScope[o5] = { value: "++" === n7.operator ? r4 + 1 : r4 - 1 }, false === n7.prefix ? r4 : "++" === n7.operator ? r4 + 1 : r4 - 1;
  if (void 0 !== t4.globalScope[o5]) return r4 = be(t4.globalScope[o5].value), t4.globalScope[o5] = { value: "++" === n7.operator ? r4 + 1 : r4 - 1 }, false === n7.prefix ? r4 : "++" === n7.operator ? r4 + 1 : r4 - 1;
  throw new a(t4, r.InvalidIdentifier, n7);
}
function ae2(e6, t4, n7, r4, o5) {
  switch (t4) {
    case "=":
      return e6 === v ? null : e6;
    case "/=":
      return be(n7) / be(e6);
    case "*=":
      return be(n7) * be(e6);
    case "-=":
      return be(n7) - be(e6);
    case "+=":
      return e(n7) || e(e6) ? ye(n7) + ye(e6) : be(n7) + be(e6);
    case "%=":
      return be(n7) % be(e6);
    default:
      throw new a(o5, r.UnsupportedOperator, r4);
  }
}
function se2(t4, n7) {
  if ("MemberExpression" === n7.left.type) {
    const e6 = X2(t4, n7.left.object);
    let r5;
    if (true === n7.left.computed) r5 = X2(t4, n7.left.property);
    else {
      if ("Identifier" !== n7.left.property.type) throw new a(t4, r.InvalidIdentifier, n7);
      r5 = n7.left.property.name;
    }
    const o6 = X2(t4, n7.right);
    if (o2(e6)) {
      if (!n3(r5)) throw new a(t4, r.ArrayAccessorMustBeNumber, n7);
      if (r5 < 0 && (r5 = e6.length + r5), r5 < 0 || r5 > e6.length) throw new a(t4, r.OutOfBounds, n7);
      if (r5 === e6.length) {
        if ("=" !== n7.operator) throw new a(t4, r.OutOfBounds, n7);
        e6[r5] = ae2(o6, n7.operator, e6[r5], n7, t4);
      } else e6[r5] = ae2(o6, n7.operator, e6[r5], n7, t4);
    } else if (e6 instanceof C) {
      if (false === e(r5)) throw new a(t4, r.KeyAccessorMustBeString, n7);
      if (true === e6.hasField(r5)) e6.setField(r5, ae2(o6, n7.operator, e6.field(r5), n7, t4));
      else {
        if ("=" !== n7.operator) throw new a(t4, r.FieldNotFound, n7, { key: r5 });
        e6.setField(r5, ae2(o6, n7.operator, null, n7, t4));
      }
    } else if (H(e6)) {
      if (false === e(r5)) throw new a(t4, r.KeyAccessorMustBeString, n7);
      if (true === e6.hasField(r5)) e6.setField(r5, ae2(o6, n7.operator, e6.field(r5), n7, t4));
      else {
        if ("=" !== n7.operator) throw new a(t4, r.FieldNotFound, n7, { key: r5 });
        e6.setField(r5, ae2(o6, n7.operator, null, n7, t4));
      }
    } else {
      if (ee(e6)) throw new a(t4, r.Immutable, n7);
      if (!(e6 instanceof H4)) throw new a(t4, r.InvalidIdentifier, n7);
      if (false === e(r5)) throw new a(t4, r.ModuleAccessorMustBeString, n7);
      if (true !== e6.hasGlobal(r5)) throw new a(t4, r.ModuleExportNotFound, n7);
      e6.setGlobal(r5, ae2(o6, n7.operator, e6.global(r5), n7, t4));
    }
    return v;
  }
  const r4 = n4(n7.left), o5 = X2(t4, n7.right);
  if (null != t4.localScope && void 0 !== t4.localScope[r4]) return t4.localScope[r4] = { value: ae2(o5, n7.operator, t4.localScope[r4].value, n7, t4) }, v;
  if (void 0 !== t4.globalScope[r4]) return t4.globalScope[r4] = { value: ae2(o5, n7.operator, t4.globalScope[r4].value, n7, t4) }, v;
  throw new a(t4, r.InvalidIdentifier, n7);
}
function ce3(e6, t4) {
  const n7 = X2(e6, t4.expression);
  return n7 === v ? v : new I(n7);
}
function ue2(e6, t4) {
  const n7 = X2(e6, t4.test);
  if (true === n7) return $(e6, t4.consequent);
  if (false === n7) return null !== t4.alternate ? $(e6, t4.alternate) : v;
  throw new a(e6, r.BooleanConditionRequired, t4);
}
function fe2(e6, t4) {
  let n7 = v;
  for (let r4 = 0; r4 < t4.body.length; r4++) if (n7 = $(e6, t4.body[r4]), n7 instanceof _ || n7 === Y || n7 === L) return n7;
  return n7;
}
function pe2(e6, t4) {
  if (null === t4.argument) return new _(v);
  const n7 = X2(e6, t4.argument);
  return new _(n7);
}
function he2(t4, n7) {
  const r4 = n4(n7.id);
  return t4.globalScope[r4] = { value: new Y2(n7, t4) }, v;
}
function de2(t4, n7) {
  var _a, _b;
  const r4 = n4(n7.specifiers[0].local), o5 = t4.libraryResolver.loadLibrary(r4);
  let i4;
  return ((_a = t4.libraryResolver._moduleSingletons) == null ? void 0 : _a.has(o5.uri)) ? i4 = t4.libraryResolver._moduleSingletons.get(o5.uri) : (i4 = new H4(o5), i4.loadModule(t4), (_b = t4.libraryResolver._moduleSingletons) == null ? void 0 : _b.set(o5.uri, i4)), t4.globalScope[r4] = { value: i4 }, v;
}
function we2(t4, n7) {
  if ($(t4, n7.declaration), "FunctionDeclaration" === n7.declaration.type) t4.exports[n4(n7.declaration.id)] = "function";
  else if ("VariableDeclaration" === n7.declaration.type) for (const r4 of n7.declaration.declarations) t4.exports[n4(r4.id)] = "variable";
  return v;
}
function me3(e6, t4) {
  for (let n7 = 0; n7 < t4.declarations.length; n7++) ge2(e6, t4.declarations[n7]);
  return v;
}
function ge2(t4, n7) {
  let r4 = null === n7.init ? null : X2(t4, n7.init);
  if (r4 === v && (r4 = null), "Identifier" !== n7.id.type) throw new a(t4, r.InvalidIdentifier, n7);
  const o5 = n4(n7.id);
  null != t4.localScope ? t4.localScope[o5] = { value: r4 } : t4.globalScope[o5] = { value: r4 };
}
function ye3(e6, t4) {
  try {
    const n7 = X2(e6, t4.object);
    if (null === n7) throw new a(e6, r.MemberOfNull, t4);
    if (false === t4.computed) {
      if ("Identifier" === t4.property.type) {
        if (n7 instanceof C || W(n7)) return n7.field(t4.property.name);
        if (n7 instanceof n2) return d(n7, t4.property.name, e6, t4);
        if (n7 instanceof H4) {
          if (!n7.hasGlobal(t4.property.name)) throw new a(e6, r.InvalidIdentifier, t4);
          return n7.global(t4.property.name);
        }
      }
      throw new a(e6, r.InvalidMemberAccessKey, t4);
    }
    let r4 = X2(e6, t4.property);
    if (n7 instanceof C || W(n7)) {
      if (e(r4)) return n7.field(r4);
      throw new a(e6, r.InvalidMemberAccessKey, t4);
    }
    if (n7 instanceof H4) {
      if (e(r4)) return n7.global(r4);
      throw new a(e6, r.InvalidMemberAccessKey, t4);
    }
    if (n7 instanceof n2) {
      if (e(r4)) return d(n7, r4, e6, t4);
      throw new a(e6, r.InvalidMemberAccessKey, t4);
    }
    if (o2(n7)) {
      if (n3(r4) && isFinite(r4) && Math.floor(r4) === r4) {
        if (r4 < 0 && (r4 = n7.length + r4), r4 >= n7.length || r4 < 0) throw new a(e6, r.OutOfBounds, t4);
        return n7[r4];
      }
      throw new a(e6, r.InvalidMemberAccessKey, t4);
    }
    if (e(n7)) {
      if (n3(r4) && isFinite(r4) && Math.floor(r4) === r4) {
        if (r4 < 0 && (r4 = n7.length + r4), r4 >= n7.length || r4 < 0) throw new a(e6, r.OutOfBounds, t4);
        return n7[r4];
      }
      throw new a(e6, r.InvalidMemberAccessKey, t4);
    }
    if (ee(n7)) {
      if (n3(r4) && isFinite(r4) && Math.floor(r4) === r4) {
        if (r4 < 0 && (r4 = n7.length() + r4), r4 >= n7.length() || r4 < 0) throw new a(e6, r.OutOfBounds, t4);
        return n7.get(r4);
      }
      throw new a(e6, r.InvalidMemberAccessKey, t4);
    }
    throw new a(e6, r.InvalidMemberAccessKey, t4);
  } catch (n7) {
    throw n7;
  }
}
function be3(e6, t4) {
  try {
    const n7 = X2(e6, t4.argument);
    if (t(n7)) {
      if ("!" === t4.operator) return !n7;
      if ("-" === t4.operator) return -1 * be(n7);
      if ("+" === t4.operator) return 1 * be(n7);
      if ("~" === t4.operator) return ~be(n7);
      throw new a(e6, r.UnsupportedUnaryOperator, t4);
    }
    if ("~" === t4.operator) return ~be(n7);
    if ("-" === t4.operator) return -1 * be(n7);
    if ("+" === t4.operator) return 1 * be(n7);
    throw new a(e6, r.UnsupportedUnaryOperator, t4);
  } catch (n7) {
    throw n7;
  }
}
function ve2(e6, t4) {
  try {
    const n7 = [];
    for (let r4 = 0; r4 < t4.elements.length; r4++) {
      const o5 = X2(e6, t4.elements[r4]);
      if (G(o5)) throw new a(e6, r.NoFunctionInArray, t4);
      o5 === v ? n7.push(null) : n7.push(o5);
    }
    return n7;
  } catch (n7) {
    throw n7;
  }
}
function Se2(e6, t4) {
  try {
    const n7 = X2(e6, t4.left), r4 = X2(e6, t4.right);
    switch (t4.operator) {
      case "|":
      case "<<":
      case ">>":
      case ">>>":
      case "^":
      case "&":
        return Ye(be(n7), be(r4), t4.operator);
      case "==":
        return me(n7, r4);
      case "!=":
        return !me(n7, r4);
      case "<":
      case ">":
      case "<=":
      case ">=":
        return ce(n7, r4, t4.operator);
      case "+":
        return e(n7) || e(r4) ? ye(n7) + ye(r4) : be(n7) + be(r4);
      case "-":
        return be(n7) - be(r4);
      case "*":
        return be(n7) * be(r4);
      case "/":
        return be(n7) / be(r4);
      case "%":
        return be(n7) % be(r4);
      default:
        throw new a(e6, r.UnsupportedOperator, t4);
    }
  } catch (n7) {
    throw n7;
  }
}
function xe2(e6, t4) {
  try {
    const n7 = X2(e6, t4.left);
    if (t(n7)) switch (t4.operator) {
      case "||": {
        if (true === n7) return n7;
        const r4 = X2(e6, t4.right);
        if (t(r4)) return r4;
        throw new a(e6, r.LogicExpressionOrAnd, t4);
      }
      case "&&": {
        if (false === n7) return n7;
        const r4 = X2(e6, t4.right);
        if (t(r4)) return r4;
        throw new a(e6, r.LogicExpressionOrAnd, t4);
      }
      default:
        throw new a(e6, r.LogicExpressionOrAnd, t4);
    }
    throw new a(e6, r.LogicalExpressionOnlyBoolean, t4);
  } catch (n7) {
    throw n7;
  }
}
function Re3(e6, t4, n7) {
  if (G(e6)) throw new a(t4, r.NoFunctionInTemplateLiteral, n7);
  return e6;
}
function Fe3(e6, t4) {
  let n7 = "", r4 = 0;
  for (const o5 of t4.quasis) if (n7 += o5.value ? o5.value.cooked : "", false === o5.tail) {
    n7 += t4.expressions[r4] ? ye(Re3(X2(e6, t4.expressions[r4]), e6, t4)) : "", r4++;
  }
  return n7;
}
function Ie2(t4, n7) {
  try {
    const r4 = n4(n7);
    if (null != t4.localScope && void 0 !== t4.localScope[r4]) return t4.localScope[r4].value;
    if (void 0 !== t4.globalScope[r4]) return t4.globalScope[r4].value;
    throw new a(t4, r.InvalidIdentifier, n7);
  } catch (r4) {
    throw r4;
  }
}
function Ae3(t4, n7) {
  try {
    if ("MemberExpression" === n7.callee.type) {
      const e6 = X2(t4, n7.callee.object);
      if (!(e6 instanceof H4)) throw new a(t4, r.FunctionNotFound, n7);
      const r5 = false === n7.callee.computed ? n7.callee.property.name : X2(t4, n7.callee.property);
      if (!e6.hasGlobal(r5)) throw new a(t4, r.FunctionNotFound, n7);
      const o5 = e6.global(r5);
      if (!G(o5)) throw new a(t4, r.CallNonFunction, n7);
      return o5.call(t4, n7);
    }
    if ("Identifier" !== n7.callee.type) throw new a(t4, r.FunctionNotFound, n7);
    const r4 = n4(n7.callee);
    if (null != t4.localScope && void 0 !== t4.localScope[r4]) {
      const e6 = t4.localScope[r4];
      if (G(e6.value)) return e6.value.call(t4, n7);
      throw new a(t4, r.CallNonFunction, n7);
    }
    if (void 0 !== t4.globalScope[r4]) {
      const e6 = t4.globalScope[r4];
      if (G(e6.value)) return e6.value.call(t4, n7);
      throw new a(t4, r.CallNonFunction, n7);
    }
    throw new a(t4, r.FunctionNotFound, n7);
  } catch (r4) {
    throw r4;
  }
}
var Me3 = {};
function Ce2(e6, t4, n7, r4) {
  try {
    const o5 = t4.arguments, i4 = X2(e6, o5[n7]);
    if (me(i4, r4)) return X2(e6, o5[n7 + 1]);
    {
      const i5 = o5.length - n7;
      return 1 === i5 ? X2(e6, o5[n7]) : 2 === i5 ? null : 3 === i5 ? X2(e6, o5[n7 + 2]) : Ce2(e6, t4, n7 + 2, r4);
    }
  } catch (o5) {
    throw o5;
  }
}
function Ne2(e6, t4, n7, r4) {
  try {
    const o5 = t4.arguments;
    if (true === r4) return X2(e6, o5[n7 + 1]);
    if (3 === o5.length - n7) return X2(e6, o5[n7 + 2]);
    {
      const r5 = X2(e6, o5[n7 + 2]);
      if (false === t(r5)) throw new a(e6, r.BooleanConditionRequired, o5[n7 + 2]);
      return Ne2(e6, t4, n7 + 2, r5);
    }
  } catch (o5) {
    throw o5;
  }
}
function Oe2(t4, n7, r4, o5) {
  try {
    const i4 = t4.body;
    if (r4.length !== t4.params.length) throw new a(n7, r.WrongNumberOfParameters, o5);
    if (null != n7.localScope) for (let o6 = 0; o6 < r4.length; o6++) n7.localScope[n4(t4.params[o6])] = { value: r4[o6] };
    const l5 = $(n7, i4);
    if (l5 instanceof _) return l5.value;
    if (l5 === Y) throw new a(n7, r.UnexpectedToken, o5);
    if (l5 === L) throw new a(n7, r.UnexpectedToken, o5);
    return l5 instanceof I ? l5.value : l5;
  } catch (i4) {
    throw i4;
  }
}
C2(Me3, Q), E(Me3, Q), g2(Me3, Q, Ie2), p5(Me3, Q), B(Me3, Q), f4(Me3, Q), G2(Me3, Q), Me3.iif = function(e6, t4) {
  try {
    if (true === t4.preparsed) throw new a(e6, r.NeverReach, t4);
    const n7 = t4.arguments;
    oe(null === n7 ? [] : n7, 3, 3, e6, t4);
    const r4 = X2(e6, n7[0]);
    if (false === t(r4)) throw new a(e6, r.BooleanConditionRequired, t4);
    return X2(e6, true === r4 ? n7[1] : n7[2]);
  } catch (n7) {
    throw n7;
  }
}, Me3.defaultvalue = function(e6, t4) {
  try {
    if (true === t4.preparsed) throw new a(e6, r.NeverReach, t4);
    const n7 = t4.arguments;
    oe(null === n7 ? [] : n7, 2, 3, e6, t4);
    const o5 = X2(e6, n7[0]);
    if (3 === n7.length) {
      const t5 = X2(e6, n7[1]), i4 = y(o5, t5);
      return null != i4 && "" !== i4 ? i4 : X2(e6, n7[2]);
    }
    return null === o5 || "" === o5 || void 0 === o5 ? X2(e6, n7[1]) : o5;
  } catch (n7) {
    throw n7;
  }
}, Me3.decode = function(e6, t4) {
  try {
    if (true === t4.preparsed) throw new a(e6, r.NeverReach, t4);
    const n7 = t4.arguments;
    if (n7.length < 2) throw new a(e6, r.WrongNumberOfParameters, t4);
    if (2 === n7.length) return X2(e6, n7[1]);
    {
      if ((n7.length - 1) % 2 == 0) throw new a(e6, r.WrongNumberOfParameters, t4);
      const r4 = X2(e6, n7[0]);
      return Ce2(e6, t4, 1, r4);
    }
  } catch (n7) {
    throw n7;
  }
}, Me3.when = function(e6, t4) {
  try {
    if (true === t4.preparsed) throw new a(e6, r.NeverReach, t4);
    const n7 = t4.arguments;
    if (n7.length < 3) throw new a(e6, r.WrongNumberOfParameters, t4);
    if (n7.length % 2 == 0) throw new a(e6, r.WrongNumberOfParameters, t4);
    const r4 = X2(e6, n7[0]);
    if (false === t(r4)) throw new a(e6, r.BooleanConditionRequired, n7[0]);
    return Ne2(e6, t4, 0, r4);
  } catch (n7) {
    throw n7;
  }
};
for (const Ke2 in Me3) Me3[Ke2] = { value: new e2(Me3[Ke2]) };
var Be3 = function() {
};
function ke2(e6, t4, n7) {
  const r4 = new Be3();
  e6 || (e6 = {}), t4 || (t4 = {});
  const o5 = new C({ newline: "\n", tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  o5.immutable = false, r4.textformatting = { value: o5 };
  for (const i4 in t4) r4[i4] = { value: new e2(t4[i4]) };
  for (const i4 in e6) r4[i4] = { value: i(e6[i4]) ? D.createFromGraphic(e6[i4], n7) : e6[i4] };
  return r4;
}
Be3.prototype = Me3, Be3.prototype.infinity = { value: Number.POSITIVE_INFINITY }, Be3.prototype.pi = { value: Math.PI };
function Ee2(e6) {
  console.log(e6);
}
function De2(e6) {
  const t4 = { mode: "sync", compiled: false, functions: {}, signatures: [], standardFunction: Q, evaluateIdentifier: Ie2 };
  for (let n7 = 0; n7 < e6.length; n7++) e6[n7].registerFunctions(t4);
  for (const n7 in t4.functions) Me3[n7] = { value: new e2(t4.functions[n7]) }, Be3.prototype[n7] = Me3[n7];
  for (let n7 = 0; n7 < t4.signatures.length; n7++) s4(t4.signatures[n7], "sync");
}
function Ue2(e6, t4) {
  let r4 = t4.spatialReference;
  null == r4 && (r4 = new g({ wkid: 102100 }));
  let o5 = null;
  e6.usesModules && (o5 = new s2(/* @__PURE__ */ new Map(), e6.loadedModules));
  const i4 = { spatialReference: r4, globalScope: ke2(t4.vars, t4.customfunctions, t4.timeZone), localScope: null, services: t4.services, exports: {}, libraryResolver: o5, console: t4.console ?? Ee2, timeZone: t4.timeZone ?? null, lrucache: t4.lrucache, interceptor: t4.interceptor, depthCounter: { depth: 1 } }, l5 = fe2(i4, e6);
  if (l5 instanceof _ || l5 instanceof I) {
    const e7 = l5.value;
    if (e7 === v) return null;
    if (G(e7)) throw new a(i4, r.IllegalResult, null);
    return e7;
  }
  if (l5 === v) return null;
  if (l5 === Y) throw new a(i4, r.IllegalResult, null);
  if (l5 === L) throw new a(i4, r.IllegalResult, null);
  throw new a(i4, r.NeverReach, null);
}
De2([p3]);

// node_modules/@arcgis/core/chunks/arcade.js
var w4 = /* @__PURE__ */ new Set(["feature", "angle", "bearing", "centroid", "envelopeintersects", "extent", "geometry", "isselfintersecting", "ringisclockwise"]);
var h3 = false;
var A2 = false;
var g4 = null;
var j4 = [];
function x3(r4, t4) {
  if (true === t4.useAsync || true === r4.isAsync) return M3(r4, t4);
  if (has("esri-csp-restrictions")) {
    return function(e6) {
      return Ue2(r4, e6);
    };
  }
  try {
    return Ye2(r4, t4);
  } catch (n7) {
    if ("esri.arcade.arcadeuncompilableerror" === n7.declaredRootClass) return function(e6) {
      return Ue2(r4, e6);
    };
    throw n7;
  }
}
function M3(r4, t4) {
  if (null === g4) throw new a(null, r.AsyncNotEnabled, null);
  if (has("esri-csp-restrictions")) {
    return function(e6) {
      return g4.executeScript(r4, e6);
    };
  }
  try {
    return Ye2(r4, t4, true);
  } catch (n7) {
    if ("esri.arcade.arcadeuncompilableerror" === n7.declaredRootClass) return function(e6) {
      return g4.executeScript(r4, e6);
    };
    throw n7;
  }
}
function v3(e6) {
  De2(e6), We(e6, "sync"), null === g4 ? j4.push(e6) : (We(e6, "async"), g4.extend(e6));
}
function F2(e6, r4 = []) {
  return d4(e6, r4);
}
function E3(e6, r4, t4 = []) {
  return G3(d4(e6, t4), r4);
}
function G3(e6, r4) {
  if (true === r4.useAsync || true === e6.isAsync) {
    if (null === g4) throw new a(null, r.AsyncNotEnabled, null);
    return g4.executeScript(e6, r4);
  }
  return Ue2(e6, r4);
}
function I4(e6, r4) {
  return x(e6, r4);
}
function U4(e6, r4) {
  return u3(e6, r4);
}
function _2(e6, r4 = false) {
  return void 0 === r4 && (r4 = false), p2(e6).map(({ varId: e7, memberId: r5 }) => `${e7}.${r5}`);
}
function C5(e6) {
  return f3(e6);
}
function R3(e6, r4 = []) {
  return void 0 === e6.usesGeometry && b(e6, r4), true === e6.usesGeometry;
}
var k2 = null;
function D3() {
  return k2 || (k2 = P5(), k2);
}
async function P5() {
  return await z(), A2 = true, true;
}
var z3 = null;
function L3() {
  return null !== z3 || (z3 = $2()), z3;
}
async function $2() {
  await He(), g4 = await import("./arcadeAsyncRuntime-KR24QX4F.js");
  for (const e6 of j4) g4.extend(e6), We(e6, "async");
  return j4 = null, true;
}
function N2() {
  return h3;
}
function O2() {
  return !!g4;
}
function T2() {
  return A2;
}
var q3 = null;
function B3() {
  return q3 || (q3 = V(), q3);
}
async function V() {
  await L3();
  const [e6, t4, n7, s7, a3, u5] = await Promise.all([import("./featureSetUtils-JXEARDBP.js"), import("./featuresetbase-SWYECWBL.js"), import("./featuresetgeom-YTFFJJDQ.js"), import("./featuresetstats-XM4JFGLU.js"), import("./featuresetstring-G6PLOXLR.js"), import("./knowledgegraph-CTFB3X6C.js")]);
  return re4 = e6, g4.extend([t4, n7, s7, a3, u5]), We([t4, n7, s7, a3, u5], "async"), h3 = true, true;
}
function H5(e6, r4 = []) {
  return void 0 === e6.usesFeatureSet && b(e6, r4), true === e6.usesFeatureSet;
}
function J2(e6, r4 = []) {
  return void 0 === e6.isAsync && b(e6, r4), true === e6.isAsync;
}
function K3(e6, r4) {
  if (r4) {
    for (const t4 of r4) if (I4(e6, t4)) return true;
    return false;
  }
  return false;
}
async function Q2(e6, r4, t4 = [], n7 = false, s7 = null) {
  return W2(/* @__PURE__ */ new Set(), e6, r4, t4, n7, s7);
}
async function W2(e6, r4, t4, n7 = [], s7 = false, a3 = null) {
  const u5 = "string" == typeof r4 ? F2(r4) : r4, o5 = [];
  return u5 && (false === T2() && (R3(u5) || s7) && o5.push(D3()), false === O2() && (true === u5.isAsync || t4) && o5.push(L3()), false === N2() && (H5(u5) || K3(u5, n7)) && o5.push(B3())), o5.length && await Promise.all(o5), await Y3(e6, u5, a3, t4, s7), true;
}
function X3(e6, r4 = []) {
  return void 0 === e6.usesModules && b(e6, r4), true === e6.usesModules;
}
async function Y3(e6, r4, t4 = null, s7 = false, a3 = false) {
  const i4 = l2(r4);
  null === t4 && i4.length > 0 && (t4 = l4.getDefault()), r4.loadedModules = {};
  for (const n7 of i4) {
    n(t4);
    const i5 = t4.normalizeModuleUri(n7.source);
    if (e6.has(i5.uri)) throw new a(null, r.CircularModules, null);
    e6.add(i5.uri);
    const c3 = await t4.fetchModule(i5);
    await W2(e6, c3, s7, [], a3, t4), e6.delete(i5.uri), c3.isAsync && (r4.isAsync = true), c3.usesFeatureSet && (r4.usesFeatureSet = true), c3.usesGeometry && (r4.usesGeometry = true), r4.loadedModules[n7.libname] = { uri: i5.uri, script: c3 };
  }
}
function Z(e6) {
  if (R3(e6)) return true;
  const r4 = y2(e6);
  let t4 = false;
  for (let n7 = 0; n7 < r4.length; n7++) if (w4.has(r4[n7])) {
    t4 = true;
    break;
  }
  return t4;
}
function ee4(e6, r4) {
  const t4 = null == r4 ? null : new Set(r4.map((e7) => e7.toLowerCase()));
  return p2(e6).some(({ varId: e7, memberId: r5 }) => "$view" === e7 && (null == t4 || t4.has(r5)));
}
var re4 = null;
function te4() {
  return re4;
}
var ne4 = Object.freeze(Object.defineProperty({ __proto__: null, _loadScriptDependenciesImpl: W2, compileScript: x3, enableAsyncSupport: L3, enableAsyncSupportImpl: $2, enableFeatureSetSupport: B3, enableFeatureSetSupportImpl: V, enableGeometrySupport: D3, enableGeometrySupportImpl: P5, executeScript: G3, extend: v3, extractExpectedFieldLiterals: C5, extractFieldLiterals: _2, featureSetUtils: te4, isAsyncEnabled: O2, isFeatureSetSupportEnabled: N2, isGeometryEnabled: T2, loadDependentModules: Y3, loadScriptDependencies: Q2, parseAndExecuteScript: E3, parseScript: F2, referencesFunction: U4, referencesMember: I4, scriptIsAsync: J2, scriptTouchesGeometry: Z, scriptUsesFeatureSet: H5, scriptUsesGeometryEngine: R3, scriptUsesModules: X3, scriptUsesViewProperties: ee4 }, Symbol.toStringTag, { value: "Module" }));

export {
  x3 as x,
  v3 as v,
  F2 as F,
  E3 as E,
  G3 as G,
  I4 as I,
  U4 as U,
  _2 as _,
  C5 as C,
  R3 as R,
  D3 as D,
  P5 as P,
  L3 as L,
  $2 as $,
  N2 as N,
  O2 as O,
  T2 as T,
  B3 as B,
  V,
  H5 as H,
  J2 as J,
  Q2 as Q,
  W2 as W,
  X3 as X,
  Y3 as Y,
  Z,
  ee4 as ee,
  te4 as te,
  ne4 as ne
};
//# sourceMappingURL=chunk-ZY4V5X7N.js.map
