// node_modules/@arcgis/core/layers/graphics/OptimizedFeatureSet.js
var e = class _e {
  constructor() {
    this.objectIdFieldName = null, this.globalIdFieldName = null, this.geohashFieldName = null, this.geometryProperties = null, this.geometryType = null, this.spatialReference = null, this.hasZ = false, this.hasM = false, this.features = [], this.fields = [], this.transform = null, this.exceededTransferLimit = false, this.uniqueIdField = null, this.queryGeometryType = null, this.queryGeometry = null;
  }
  weakClone() {
    const t = new _e();
    return t.objectIdFieldName = this.objectIdFieldName, t.globalIdFieldName = this.globalIdFieldName, t.geohashFieldName = this.geohashFieldName, t.geometryProperties = this.geometryProperties, t.geometryType = this.geometryType, t.spatialReference = this.spatialReference, t.hasZ = this.hasZ, t.hasM = this.hasM, t.features = this.features, t.fields = this.fields, t.transform = this.transform, t.exceededTransferLimit = this.exceededTransferLimit, t.uniqueIdField = this.uniqueIdField, t.queryGeometry = this.queryGeometry, t.queryGeometryType = this.queryGeometryType, t;
  }
};

export {
  e
};
//# sourceMappingURL=chunk-YRSM2W7P.js.map
