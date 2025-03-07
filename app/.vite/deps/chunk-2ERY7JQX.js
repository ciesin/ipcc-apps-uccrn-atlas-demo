import {
  l
} from "./chunk-KAAAN25B.js";
import {
  I2 as I,
  P as P3,
  R,
  j as j3,
  x
} from "./chunk-RQTCSDBY.js";
import {
  t
} from "./chunk-SMPH4DRM.js";
import {
  a as a2
} from "./chunk-PE5QC36M.js";
import {
  C
} from "./chunk-GKX3Z6XX.js";
import {
  Ae,
  B,
  Be,
  Fe,
  Je,
  Me,
  Re,
  Ze,
  be,
  ee,
  ne,
  oe,
  q,
  re,
  te,
  ye
} from "./chunk-O4H354HZ.js";
import {
  a,
  r
} from "./chunk-TA6O62P3.js";
import {
  o
} from "./chunk-Z2A222O3.js";
import {
  o as o2
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
  C as C2
} from "./chunk-PAGKMWJH.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j,
  n
} from "./chunk-YUVX6H42.js";
import {
  P2 as P,
  s
} from "./chunk-UFBX3XSC.js";

// node_modules/@arcgis/core/portal/support/utils.js
async function r2(r3, t2, s2) {
  var _a, _b;
  const u2 = (_a = s) == null ? void 0 : _a.findCredential(r3.restUrl);
  if (!u2) return null;
  if ("loaded" === r3.loadStatus && "" === t2 && ((_b = r3.user) == null ? void 0 : _b.sourceJSON) && false === s2) return r3.user.sourceJSON;
  const o3 = { responseType: "json", query: { f: "json" } };
  if (s2 && (o3.query.returnUserLicenseTypeExtensions = true), "" === t2) {
    const e = await P(r3.restUrl + "/community/self", o3);
    if (e.data) {
      const n2 = e.data;
      if (n2 == null ? void 0 : n2.username) return n2;
    }
    return null;
  }
  const i = await P(r3.restUrl + "/community/users/" + t2, o3);
  if (i.data) {
    const e = i.data;
    return e.error ? null : e;
  }
  return null;
}

// node_modules/@arcgis/core/arcade/functions/geomasync.js
function M(n2) {
  if (null == n2) return n2;
  switch (typeof n2) {
    case "string":
    case "number":
      return n2;
    default:
      throw new a(null, r.InvalidParameter, null);
  }
}
function T(T2) {
  "async" === T2.mode && (T2.functions.disjoint = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, (e, r3, a3) => (a3 = Fe(a3), j3(a3, n2, t2), null === a3[0] || null === a3[1] || a2("disjoint", [a3[0].toJSON(), a3[1].toJSON()])));
  }, T2.functions.intersects = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, (e, r3, a3) => (a3 = Fe(a3), j3(a3, n2, t2), null !== a3[0] && null !== a3[1] && a2("intersects", [a3[0].toJSON(), a3[1].toJSON()])));
  }, T2.functions.touches = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, (e, r3, a3) => (a3 = Fe(a3), j3(a3, n2, t2), null !== a3[0] && null !== a3[1] && a2("touches", [a3[0].toJSON(), a3[1].toJSON()])));
  }, T2.functions.crosses = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, (e, r3, a3) => (a3 = Fe(a3), j3(a3, n2, t2), null !== a3[0] && null !== a3[1] && a2("crosses", [a3[0].toJSON(), a3[1].toJSON()])));
  }, T2.functions.within = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, (e, r3, a3) => (a3 = Fe(a3), j3(a3, n2, t2), null !== a3[0] && null !== a3[1] && a2("within", [a3[0].toJSON(), a3[1].toJSON()])));
  }, T2.functions.contains = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, (e, r3, a3) => (a3 = Fe(a3), j3(a3, n2, t2), null !== a3[0] && null !== a3[1] && a2("contains", [a3[0].toJSON(), a3[1].toJSON()])));
  }, T2.functions.overlaps = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, (e, r3, a3) => (a3 = Fe(a3), j3(a3, n2, t2), null !== a3[0] && null !== a3[1] && a2("overlaps", [a3[0].toJSON(), a3[1].toJSON()])));
  }, T2.functions.equals = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, (e, r3, a3) => (oe(a3, 2, 2, n2, t2), a3[0] === a3[1] || (a3[0] instanceof n && a3[1] instanceof n ? a2("equals", [a3[0].toJSON(), a3[1].toJSON()]) : (te(a3[0]) && te(a3[1]) || !!(re(a3[0]) && re(a3[1]) || ne(a3[0]) && ne(a3[1]))) && a3[0].equals(a3[1]))));
  }, T2.functions.relate = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, (a3, s2, c) => {
      if (c = Fe(c), oe(c, 3, 3, n2, t2), c[0] instanceof n && c[1] instanceof n) return a2("relate", [c[0].toJSON(), c[1].toJSON(), ye(c[2])]);
      if (c[0] instanceof n && null === c[1]) return false;
      if (c[1] instanceof n && null === c[0]) return false;
      if (null === c[0] && null === c[1]) return false;
      throw new a(n2, r.InvalidParameter, t2);
    });
  }, T2.functions.intersection = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (e, r3, a3) => (a3 = Fe(a3), j3(a3, n2, t2), null === a3[0] || null === a3[1] ? null : f(await a2("intersection", [a3[0].toJSON(), a3[1].toJSON()]))));
  }, T2.functions.union = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (o3, s2, c) => {
      if (0 === (c = Fe(c)).length) throw new a(n2, r.WrongNumberOfParameters, t2);
      const l2 = [];
      if (1 === c.length) if (o2(c[0])) {
        for (const a3 of Fe(c[0])) if (null !== a3) {
          if (!(a3 instanceof n)) throw new a(n2, r.InvalidParameter, t2);
          l2.push(a3.toJSON());
        }
      } else {
        if (!ee(c[0])) {
          if (c[0] instanceof n) return Ae(o(c[0]), n2.spatialReference);
          if (null === c[0]) return null;
          throw new a(n2, r.InvalidParameter, t2);
        }
        for (const a3 of Fe(c[0].toArray())) if (null !== a3) {
          if (!(a3 instanceof n)) throw new a(n2, r.InvalidParameter, t2);
          l2.push(a3.toJSON());
        }
      }
      else for (const a3 of c) if (null !== a3) {
        if (!(a3 instanceof n)) throw new a(n2, r.InvalidParameter, t2);
        l2.push(a3.toJSON());
      }
      return 0 === l2.length ? null : f(await a2("union", [l2]));
    });
  }, T2.functions.difference = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (e, r3, o3) => (o3 = Fe(o3), j3(o3, n2, t2), null === o3[0] ? null : null === o3[1] ? o(o3[0]) : f(await a2("difference", [o3[0].toJSON(), o3[1].toJSON()]))));
  }, T2.functions.symmetricdifference = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (e, r3, o3) => (o3 = Fe(o3), j3(o3, n2, t2), null === o3[0] && null === o3[1] ? null : null === o3[0] ? o(o3[1]) : null === o3[1] ? o(o3[0]) : f(await a2("symmetricDifference", [o3[0].toJSON(), o3[1].toJSON()]))));
  }, T2.functions.clip = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (a3, s2, c) => {
      if (c = Fe(c), oe(c, 2, 2, n2, t2), !(c[1] instanceof w) && null !== c[1]) throw new a(n2, r.InvalidParameter, t2);
      if (null === c[0]) return null;
      if (!(c[0] instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      return null === c[1] ? null : f(await a2("clip", [c[0].toJSON(), c[1].toJSON()]));
    });
  }, T2.functions.cut = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (s2, c, l2) => {
      if (l2 = Fe(l2), oe(l2, 2, 2, n2, t2), !(l2[1] instanceof P2) && null !== l2[1]) throw new a(n2, r.InvalidParameter, t2);
      if (null === l2[0]) return [];
      if (!(l2[0] instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      return null === l2[1] ? [o(l2[0])] : (await a2("cut", [l2[0].toJSON(), l2[1].toJSON()])).map((n3) => f(n3));
    });
  }, T2.functions.area = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (a3, s2, c) => {
      if (oe(c, 1, 2, n2, t2), c = Fe(c), B(c[0])) {
        const a4 = await c[0].sumArea(M(c[1]), false, n2.abortSignal);
        if (n2.abortSignal.aborted) throw new a(n2, r.Cancelled, t2);
        return a4;
      }
      let l2 = c[0];
      if ((o2(l2) || ee(l2)) && (l2 = Je(c[0], n2.spatialReference)), null === l2) return 0;
      if (!(l2 instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      return a2("area", [l2.toJSON(), M(c[1])]);
    });
  }, T2.functions.areageodetic = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (a3, s2, c) => {
      if (oe(c, 1, 2, n2, t2), c = Fe(c), B(c[0])) {
        const a4 = await c[0].sumArea(M(c[1]), true, n2.abortSignal);
        if (n2.abortSignal.aborted) throw new a(n2, r.Cancelled, t2);
        return a4;
      }
      let l2 = c[0];
      if ((o2(c[0]) || ee(c[0])) && (l2 = Je(c[0], n2.spatialReference)), null === l2) return 0;
      if (!(l2 instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      return a2("geodeticArea", [l2.toJSON(), M(c[1])]);
    });
  }, T2.functions.length = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (a3, s2, c) => {
      if (oe(c, 1, 2, n2, t2), c = Fe(c), B(c[0])) {
        const a4 = await c[0].sumLength(M(c[1]), false, n2.abortSignal);
        if (n2.abortSignal.aborted) throw new a(n2, r.Cancelled, t2);
        return a4;
      }
      let l2 = c[0];
      if ((o2(c[0]) || ee(c[0])) && (l2 = Me(c[0], n2.spatialReference)), null === l2) return 0;
      if (!(l2 instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      return a2("length", [l2.toJSON(), M(c[1])]);
    });
  }, T2.functions.length3d = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (a3, s2, c) => {
      if (oe(c, 1, 2, n2, t2), null === (c = Fe(c))[0]) return 0;
      let l2 = c[0];
      if ((o2(c[0]) || ee(c[0])) && (l2 = Me(c[0], n2.spatialReference)), null === l2) return 0;
      if (!(l2 instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      if (true === l2.hasZ) {
        const { convertFromSpatialReferenceUnit: n3, toLengthUnit: t3 } = await import("./unitConversion-WWNTUFKK.js"), e = P3(l2);
        return n3(l2.spatialReference, t3(c[1]), e);
      }
      return a2("length", [l2.toJSON(), M(c[1])]);
    });
  }, T2.functions.lengthgeodetic = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (a3, s2, c) => {
      if (oe(c, 1, 2, n2, t2), c = Fe(c), B(c[0])) {
        const a4 = await c[0].sumLength(M(c[1]), true, n2.abortSignal);
        if (n2.abortSignal.aborted) throw new a(n2, r.Cancelled, t2);
        return a4;
      }
      let l2 = c[0];
      if ((o2(c[0]) || ee(c[0])) && (l2 = Me(c[0], n2.spatialReference)), null === l2) return 0;
      if (!(l2 instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      return a2("geodeticLength", [l2.toJSON(), M(c[1])]);
    });
  }, T2.functions.distance = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (a3, s2, c) => {
      c = Fe(c), oe(c, 2, 3, n2, t2);
      let l2 = c[0];
      if ((o2(c[0]) || ee(c[0])) && (l2 = Re(c[0], n2.spatialReference)), !(l2 instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      let u2 = c[1];
      if ((o2(c[1]) || ee(c[1])) && (u2 = Re(c[1], n2.spatialReference)), !(u2 instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      return a2("distance", [l2.toJSON(), u2.toJSON(), M(c[2])]);
    });
  }, T2.functions.distancegeodetic = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (a3, s2, c) => {
      c = Fe(c), oe(c, 2, 3, n2, t2);
      const l2 = c[0];
      if (!(l2 instanceof j)) throw new a(n2, r.InvalidParameter, t2);
      const u2 = c[1];
      if (!(u2 instanceof j)) throw new a(n2, r.InvalidParameter, t2);
      const f2 = new P2({ paths: [], spatialReference: l2.spatialReference });
      return f2.addPath([l2, u2]), a2("geodeticLength", [f2.toJSON(), M(c[2])]);
    });
  }, T2.functions.densify = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (a3, s2, c) => {
      if (c = Fe(c), oe(c, 2, 3, n2, t2), null === c[0]) return null;
      if (!(c[0] instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      const l2 = be(c[1]);
      if (isNaN(l2)) throw new a(n2, r.InvalidParameter, t2);
      if (l2 <= 0) throw new a(n2, r.InvalidParameter, t2);
      switch (c[0].type) {
        case "polygon":
        case "polyline":
        case "extent":
          return f(await a2("densify", [c[0].toJSON(), l2, M(c[2])]));
        default:
          return c[0];
      }
    });
  }, T2.functions.densifygeodetic = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (a3, s2, c) => {
      if (c = Fe(c), oe(c, 2, 3, n2, t2), null === c[0]) return null;
      if (!(c[0] instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      const l2 = be(c[1]);
      if (isNaN(l2)) throw new a(n2, r.InvalidParameter, t2);
      if (l2 <= 0) throw new a(n2, r.InvalidParameter, t2);
      switch (c[0].type) {
        case "polygon":
        case "polyline":
        case "extent":
          return f(await a2("geodeticDensify", [c[0].toJSON(), l2, M(c[2])]));
        default:
          return c[0];
      }
    });
  }, T2.functions.generalize = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (a3, s2, c) => {
      if (c = Fe(c), oe(c, 2, 4, n2, t2), null === c[0]) return null;
      if (!(c[0] instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      const l2 = be(c[1]);
      if (isNaN(l2)) throw new a(n2, r.InvalidParameter, t2);
      const u2 = Ze(q(c[2], true));
      return f(await a2("generalize", [c[0].toJSON(), l2, M(c[3]), { removeDegenerateParts: u2 }]));
    });
  }, T2.functions.buffer = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (s2, c, l2) => {
      if (l2 = Fe(l2), oe(l2, 2, 3, n2, t2), null === l2[0]) return null;
      if (!(l2[0] instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      const u2 = be(l2[1]);
      if (isNaN(u2)) throw new a(n2, r.InvalidParameter, t2);
      return 0 === u2 ? o(l2[0]) : f(await a2("buffer", [l2[0].toJSON(), u2, M(l2[2])]));
    });
  }, T2.functions.buffergeodetic = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (s2, c, l2) => {
      if (l2 = Fe(l2), oe(l2, 2, 3, n2, t2), null === l2[0]) return null;
      if (!(l2[0] instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      const u2 = be(l2[1]);
      if (isNaN(u2)) throw new a(n2, r.InvalidParameter, t2);
      return 0 === u2 ? o(l2[0]) : f(await a2("geodesicBuffer", [l2[0].toJSON(), u2, M(l2[2])]));
    });
  }, T2.functions.offset = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (a3, s2, c) => {
      if (c = Fe(c), oe(c, 2, 6, n2, t2), null === c[0]) return null;
      if (!(c[0] instanceof j2 || c[0] instanceof P2)) throw new a(n2, r.InvalidParameter, t2);
      const l2 = be(c[1]);
      if (isNaN(l2)) throw new a(n2, r.InvalidParameter, t2);
      const f2 = ye(c[3] ?? "round").toLowerCase();
      let d;
      switch (f2) {
        case "round":
        case "bevel":
        case "miter":
        case "square":
          d = f2;
          break;
        default:
          d = "round";
      }
      const w2 = be(q(c[4], 10));
      if (isNaN(w2)) throw new a(n2, r.InvalidParameter, t2);
      const m = be(q(c[5], 0));
      if (isNaN(m)) throw new a(n2, r.InvalidParameter, t2);
      return f(await a2("offset", [c[0].toJSON(), l2, M(c[2]), { joins: d, miterLimit: w2, flattenError: m }]));
    });
  }, T2.functions.rotate = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (a3, s2, c) => {
      var _a;
      if (c = Fe(c), oe(c, 2, 3, n2, t2), null === c[0]) return null;
      if (!(c[0] instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      const l2 = c[0] instanceof w ? j2.fromExtent(c[0]) : c[0], u2 = be(c[1]);
      if (isNaN(u2)) throw new a(n2, r.InvalidParameter, t2);
      const f2 = q(c[2], null);
      if (null === f2) {
        const n3 = "point" === l2.type ? l2 : (_a = l2.extent) == null ? void 0 : _a.center;
        return f(await a2("rotate", [l2.toJSON(), u2, n3 == null ? void 0 : n3.x, n3 == null ? void 0 : n3.y]));
      }
      if (f2 instanceof j) return f(await a2("rotate", [l2.toJSON(), u2, f2.x, f2.y]));
      throw new a(n2, r.InvalidParameter, t2);
    });
  }, T2.functions.centroid = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (a3, s2, c) => {
      if (c = Fe(c), oe(c, 1, 2, n2, t2), null === c[0]) return null;
      const l2 = ye(c[1] ?? "geometric").toLowerCase();
      if ("geometric" !== l2 && "labelpoint" !== l2) throw new a(n2, r.InvalidParameter, t2);
      let d = c[0];
      if ((o2(c[0]) || ee(c[0])) && (d = "geometric" === l2 ? Re(c[0], n2.spatialReference) : Je(c[0], n2.spatialReference), null === d)) return null;
      if (!(d instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      return f("geometric" === l2 ? await a2("centroid", [d.toJSON()]) : await a2("labelPoint", [d.toJSON()]));
    });
  }, T2.functions.measuretocoordinate = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, x);
  }, T2.functions.pointtocoordinate = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, I);
  }, T2.functions.distancetocoordinate = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, R);
  }, T2.functions.multiparttosinglepart = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (s2, c, l2) => {
      if (l2 = Fe(l2), oe(l2, 1, 1, n2, t2), null === l2[0]) return null;
      if (!(l2[0] instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      if (l2[0] instanceof j) return [Ae(o(l2[0]), n2.spatialReference)];
      if (l2[0] instanceof w) return [Ae(o(l2[0]), n2.spatialReference)];
      const u2 = f(await a2("simplify", [l2[0].toJSON()]));
      if (u2 instanceof j2) {
        const n3 = [], t3 = [];
        for (let e = 0; e < u2.rings.length; e++) if (u2.isClockwise(u2.rings[e])) {
          const t4 = f({ rings: [u2.rings[e]], hasZ: true === u2.hasZ, hasM: true === u2.hasM, spatialReference: u2.spatialReference.toJSON() });
          n3.push(t4);
        } else t3.push({ ring: u2.rings[e], pt: u2.getPoint(e, 0) });
        for (let e = 0; e < t3.length; e++) for (let r3 = 0; r3 < n3.length; r3++) if (n3[r3].contains(t3[e].pt)) {
          n3[r3].addRing(t3[e].ring);
          break;
        }
        return n3;
      }
      if (u2 instanceof P2) {
        const n3 = [];
        for (let t3 = 0; t3 < u2.paths.length; t3++) {
          const e = f({ paths: [u2.paths[t3]], hasZ: true === u2.hasZ, hasM: true === u2.hasM, spatialReference: u2.spatialReference.toJSON() });
          n3.push(e);
        }
        return n3;
      }
      if (l2[0] instanceof u) {
        const t3 = [], e = Ae(o(l2[0]), n2.spatialReference);
        for (let n3 = 0; n3 < e.points.length; n3++) t3.push(e.getPoint(n3));
        return t3;
      }
      return null;
    });
  }, T2.functions.issimple = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, (a3, s2, c) => {
      if (c = Fe(c), oe(c, 1, 1, n2, t2), null === c[0]) return true;
      if (!(c[0] instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      return a2("isSimple", [c[0].toJSON()]);
    });
  }, T2.functions.simplify = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (a3, s2, c) => {
      if (c = Fe(c), oe(c, 1, 1, n2, t2), null === c[0]) return null;
      if (!(c[0] instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      return f(await a2("simplify", [c[0].toJSON()]));
    });
  }, T2.functions.convexhull = function(n2, t2) {
    return T2.standardFunctionAsync(n2, t2, async (a3, s2, c) => {
      if (c = Fe(c), oe(c, 1, 1, n2, t2), null === c[0]) return null;
      if (!(c[0] instanceof n)) throw new a(n2, r.InvalidParameter, t2);
      return f(await a2("convexHull", [c[0].toJSON()]));
    });
  }, T2.functions.getuser = function(a3, i) {
    return T2.standardFunctionAsync(a3, i, async (s2, c, l2) => {
      var _a, _b;
      oe(l2, 0, 2, a3, i);
      let f2 = q(l2[1], ""), d = true === f2;
      if (f2 = true === f2 || false === f2 ? "" : ye(f2), 0 === l2.length || l2[0] instanceof t) {
        let n2;
        n2 = ((_a = a3.services) == null ? void 0 : _a.portal) ? a3.services.portal : C2.getDefault(), l2.length > 0 && (n2 = l(l2[0], n2));
        const e = await r2(n2, f2, d);
        if (e) {
          const n3 = JSON.parse(JSON.stringify(e));
          for (const t2 of ["lastLogin", "created", "modified"]) void 0 !== n3[t2] && null !== n3[t2] && (n3[t2] = new Date(n3[t2]));
          return C.convertObjectToArcadeDictionary(n3, Be(a3));
        }
        return null;
      }
      let m = null;
      if (B(l2[0]) && (m = l2[0]), m) {
        if (d = false, f2) return null;
        await m.load();
        const e = await m.getOwningSystemUrl();
        if (!e) {
          if (!f2) {
            const n2 = await m.getIdentityUser();
            return n2 ? C.convertObjectToArcadeDictionary({ username: n2 }, Be(a3)) : null;
          }
          return null;
        }
        let r3;
        r3 = ((_b = a3.services) == null ? void 0 : _b.portal) ? a3.services.portal : C2.getDefault(), r3 = l(new t(e), r3);
        const i2 = await r2(r3, f2, d);
        if (i2) {
          const n2 = JSON.parse(JSON.stringify(i2));
          for (const t2 of ["lastLogin", "created", "modified"]) void 0 !== n2[t2] && null !== n2[t2] && (n2[t2] = new Date(n2[t2]));
          return C.convertObjectToArcadeDictionary(n2, Be(a3));
        }
        return null;
      }
      throw new a(a3, r.InvalidParameter, i);
    });
  }, T2.functions.nearestcoordinate = function(n2, a3) {
    return T2.standardFunctionAsync(n2, a3, async (s2, c, l2) => {
      if (l2 = Fe(l2), oe(l2, 2, 2, n2, a3), !(l2[0] instanceof n || null === l2[0])) throw new a(n2, r.InvalidParameter, a3);
      if (!(l2[1] instanceof j || null === l2[1])) throw new a(n2, r.InvalidParameter, a3);
      if (null === l2[0] || null === l2[1]) return null;
      const u2 = l2[0] instanceof w ? j2.fromExtent(l2[0]) : l2[0], f2 = await a2("getNearestCoordinate", [u2.toJSON(), l2[1].toJSON(), { calculateLeftRightSide: true }]);
      return null === f2 ? null : C.convertObjectToArcadeDictionary({ coordinate: f(f2.coordinate), distance: f2.distance, sideOfLine: 0 === f2.distance ? "straddle" : f2.rightSide ? "right" : "left" }, Be(n2), false, true);
    });
  }, T2.functions.nearestvertex = function(n2, a3) {
    return T2.standardFunctionAsync(n2, a3, async (s2, c, l2) => {
      if (l2 = Fe(l2), oe(l2, 2, 2, n2, a3), !(l2[0] instanceof n || null === l2[0])) throw new a(n2, r.InvalidParameter, a3);
      if (!(l2[1] instanceof j || null === l2[1])) throw new a(n2, r.InvalidParameter, a3);
      if (null === l2[0] || null === l2[1]) return null;
      const u2 = l2[0] instanceof w ? j2.fromExtent(l2[0]) : l2[0], f2 = await a2("getNearestVertex", [u2.toJSON(), l2[1].toJSON()]);
      return null === f2 ? null : C.convertObjectToArcadeDictionary({ coordinate: f(f2.coordinate), distance: f2.distance, sideOfLine: 0 === f2.distance ? "straddle" : f2.rightSide ? "right" : "left" }, Be(n2), false, true);
    });
  });
}

export {
  T
};
//# sourceMappingURL=chunk-2ERY7JQX.js.map
