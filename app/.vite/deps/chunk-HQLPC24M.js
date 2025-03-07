// node_modules/@arcgis/core/geometry/support/Ellipsoid.js
var i = class {
  constructor(i2, t2, e2, s2, h, n) {
    this.semiMajorAxis = i2, this.flattening = t2, this.outerAtmosphereRimWidth = e2, this.atmosphereHeight = s2, this.scaleHeight = h;
    const r = 1 - this.flattening;
    this.semiMinorAxis = this.semiMajorAxis * r, this.halfSemiMajorAxis = this.semiMajorAxis / 2, this.halfCircumference = Math.PI * this.semiMajorAxis, this.metersPerDegree = this.halfCircumference / 180, this.inverseFlattening = 1 / (1 - this.flattening) - 1, this.eccentricitySquared = n || 2 * this.flattening - this.flattening * this.flattening, this.meanRadiusSemiAxes = (2 * this.semiMajorAxis + this.semiMinorAxis) / 3;
  }
  get radius() {
    return this.semiMajorAxis;
  }
};
var t = new i(6378137, 1 / 298.257223563, 3e5, 1e5, 0.085, 0.006694379990137799);
var e = new i(3396190, 1 / 169.8944472236118, 23e4, 6e4, 0.111);
var s = new i(1737400, 0, 0, 0, 0);

export {
  t,
  e,
  s
};
//# sourceMappingURL=chunk-HQLPC24M.js.map
