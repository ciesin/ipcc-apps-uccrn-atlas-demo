import {
  t
} from "./chunk-G3BTTC3K.js";
import {
  t as t2
} from "./chunk-IHQU26IU.js";
import {
  J,
  ks
} from "./chunk-QUTHUJLU.js";
import {
  n as n4
} from "./chunk-GTKHPYCP.js";
import {
  V,
  ft
} from "./chunk-WAKNRSGF.js";
import {
  c,
  u as u2,
  x
} from "./chunk-NVEHOQKI.js";
import {
  c as c2
} from "./chunk-IWFYZGBP.js";
import {
  a
} from "./chunk-H2PMLL3X.js";
import {
  l
} from "./chunk-U7ERRXB6.js";
import {
  o,
  s as s2
} from "./chunk-UMYFDXOJ.js";
import {
  n
} from "./chunk-UCMTPLHQ.js";
import {
  u
} from "./chunk-G34KEQQG.js";
import {
  n as n3,
  r
} from "./chunk-53ZTROGC.js";
import {
  n as n2
} from "./chunk-JLFSX3JT.js";
import {
  M
} from "./chunk-6P7HXSJ6.js";
import {
  Q,
  X,
  s3 as s
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/geometry/support/coordinateSystem.js
function h(t3) {
  const { value: e, operations: n5 } = t3;
  return { operations: n5, value: n5.create(e) };
}
function j(t3, e, n5) {
  return t3.operations.setExtent(t3.value, e, n5.value), n5;
}
function d(t3, e) {
  return t3.operations.getExtent(t3.value, e), e;
}
function x2(t3) {
  return { operations: t3, value: t3.create() };
}
function A2(t3, e, n5 = x2(t3)) {
  return n5.operations = t3, t3.copy(e, n5.value), n5;
}
function b(t3) {
  return A2(ft, V(0, 0, 0, s(t3).radius));
}
var g2 = 2 ** 50;
function P2() {
  return A2(ks, J([0, 0, 0], [g2, 0, 0], [0, g2, 0]));
}
function R(t3, e, n5) {
  return t3.operations.axisAt(t3.value, e, n.Z, n5);
}
function S(t3, e, n5, o2) {
  return t3.operations.axisAt(t3.value, e, n5, o2);
}
function k(t3, e, n5) {
  return t3.operations.intersectRay(t3.value, e, n5);
}
function E(t3, e, n5) {
  return t3.operations.intersectRayClosestSilhouette(t3.value, e, n5);
}
function G(t3, e) {
  return t3.operations.altitudeAt(t3.value, e);
}
function O(t3, e, n5, o2) {
  return t3.operations.setAltitudeAt(t3.value, e, n5, o2);
}
function T(n5, o2, r2, i) {
  return o2 !== i && n3(i, o2), o(q, i[12], i[13], i[14]), O(n5, q, r2, q), i[12] = q[0], i[13] = q[1], i[14] = q[2], i;
}
function Z(t3, e, n5) {
  return t3.operations.elevate(t3.value, e, n5.value);
}
var q = n2();
var D = n2();

// node_modules/@arcgis/core/views/3d/support/RenderCoordsHelper.js
var B = class _B {
  constructor(t3, e, o2, r2) {
    this.viewingMode = t3, this.spatialReference = e, this.unitInMeters = o2, this._coordinateSystem = r2, this._tmpCoordinateSystem = h(r2), this.referenceEllipsoid = s(e), this.sphericalPCPF = a(e);
  }
  set extent(t3) {
    t3 && j(this._coordinateSystem, t3, this._coordinateSystem);
  }
  get extent() {
    return d(this._coordinateSystem, u());
  }
  getAltitude(t3) {
    return G(this._coordinateSystem, t3);
  }
  setAltitude(t3, e, o2 = t3) {
    return O(this._coordinateSystem, o2, e, t3);
  }
  setAltitudeOfTransformation(t3, e) {
    T(this._coordinateSystem, e, t3, e);
  }
  worldUpAtPosition(t3, e) {
    return R(this._coordinateSystem, t3, e);
  }
  worldBasisAtPosition(t3, e, o2) {
    return S(this._coordinateSystem, t3, e, o2);
  }
  basisMatrixAtPosition(t3, e) {
    const o2 = this.worldBasisAtPosition(t3, n.X, c.get()), i = this.worldBasisAtPosition(t3, n.Y, c.get()), s3 = this.worldBasisAtPosition(t3, n.Z, c.get());
    return r(e, o2[0], o2[1], o2[2], 0, i[0], i[1], i[2], 0, s3[0], s3[1], s3[2], 0, 0, 0, 0, 1), e;
  }
  headingAtPosition(e, o2) {
    const r2 = this.worldUpAtPosition(e, c.get()), i = this.worldBasisAtPosition(e, n.Y, c.get()), s3 = u2(o2, i, r2);
    return M(s3);
  }
  intersectManifoldClosestSilhouette(t3, e, o2) {
    return Z(this._coordinateSystem, e, this._tmpCoordinateSystem), E(this._tmpCoordinateSystem, t3, o2), o2;
  }
  intersectManifold(t3, e, o2) {
    Z(this._coordinateSystem, e, this._tmpCoordinateSystem);
    const r2 = c.get();
    return k(this._tmpCoordinateSystem, t3, r2) ? s2(o2, r2) : null;
  }
  intersectInfiniteManifold(t3, e, o2) {
    if (this.viewingMode === l.Global) return this.intersectManifold(t3, e, o2);
    Z(this._coordinateSystem, e, this._tmpCoordinateSystem);
    const r2 = this._tmpCoordinateSystem.value, s3 = c.get();
    return x(r2.plane, t3, s3) ? s2(o2, s3) : null;
  }
  toRenderCoords(t3, e, o2) {
    return t2(t3) ? c2(t3, e, this.spatialReference) : n4(t3, e, o2, this.spatialReference);
  }
  fromRenderCoords(t3, e, o2 = null) {
    return t2(e) ? (null != o2 && (e.spatialReference = o2), t(t3, this.spatialReference, e) ? e : null) : n4(t3, this.spatialReference, e, o2) ? e : null;
  }
  static create(t3, o2) {
    switch (t3) {
      case l.Local:
        return new _B(l.Local, o2, Q(o2), P2());
      case l.Global:
        return new _B(l.Global, o2, 1, b(o2));
    }
  }
  static renderUnitScaleFactor(t3, e) {
    return X(t3) / X(e);
  }
};

export {
  B
};
//# sourceMappingURL=chunk-ZB2X57X7.js.map
