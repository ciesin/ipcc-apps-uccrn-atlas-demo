// node_modules/@arcgis/core/chunks/SimpleGeometryCursor.js
var t = class {
  *[Symbol.iterator]() {
    let t2 = this.next();
    for (; t2; ) yield t2, t2 = this.next();
  }
};
var s = class extends t {
  constructor(t2) {
    super(), this.m_iGeom = -1, this.m_aGeoms = t2 ? t2.slice() : [];
  }
  next() {
    if (this.m_iGeom < this.m_aGeoms.length - 1) {
      const t2 = this.m_aGeoms[++this.m_iGeom];
      return this.m_aGeoms[this.m_iGeom] = null, t2;
    }
    return null;
  }
  tock() {
    return false;
  }
  getGeometryID() {
    return this.m_iGeom;
  }
  getRank() {
    return 1;
  }
};

export {
  t,
  s
};
//# sourceMappingURL=chunk-VUD5O2WG.js.map
