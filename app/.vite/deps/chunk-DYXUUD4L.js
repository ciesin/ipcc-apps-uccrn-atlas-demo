import {
  n,
  t
} from "./chunk-HYJ4YR5G.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/collisions/BoundingBox.js
var i = class _i {
  constructor(i2, e, s, r) {
    this.transformedX = 0, this.transformedY = 0, this.center = t(i2, e), this.centerT = n(), this.halfWidth = s / 2, this.halfHeight = r / 2, this.width = s, this.height = r;
  }
  get x() {
    return this.center[0];
  }
  get y() {
    return this.center[1];
  }
  get blX() {
    return this.center[0] + this.halfWidth;
  }
  get blY() {
    return this.center[1] + this.halfHeight;
  }
  get trX() {
    return this.center[0] - this.halfWidth;
  }
  get trY() {
    return this.center[1] - this.halfHeight;
  }
  get xmin() {
    return this.x - this.halfWidth;
  }
  get xmax() {
    return this.x + this.halfWidth;
  }
  get ymin() {
    return this.y - this.halfHeight;
  }
  get ymax() {
    return this.y + this.halfHeight;
  }
  set x(t2) {
    this.center[0] = t2;
  }
  set y(t2) {
    this.center[1] = t2;
  }
  clone() {
    return new _i(this.x, this.y, this.width, this.height);
  }
  serialize(t2) {
    return t2.writeF32(this.center[0]), t2.writeF32(this.center[1]), t2.push(this.width), t2.push(this.height), t2;
  }
  findCollisionDelta(t2, h = 4) {
    const i2 = Math.abs(t2.centerT[0] - this.centerT[0]), e = Math.abs(t2.centerT[1] - this.centerT[1]), s = (t2.halfWidth + this.halfWidth + h) / i2, r = (t2.halfHeight + this.halfHeight + h) / e, n2 = Math.min(s, r);
    return Math.log2(n2);
  }
  extend(t2) {
    const h = Math.min(this.xmin, t2.xmin), i2 = Math.min(this.ymin, t2.ymin), e = Math.max(this.xmax, t2.xmax) - h, s = Math.max(this.ymax, t2.ymax) - i2, r = h + e / 2, n2 = i2 + s / 2;
    this.width = e, this.height = s, this.halfWidth = e / 2, this.halfHeight = s / 2, this.x = r, this.y = n2;
  }
  static deserialize(t2) {
    const h = t2.readF32(), e = t2.readF32(), s = t2.readInt32(), r = t2.readInt32();
    return new _i(h, e, s, r);
  }
};

export {
  i
};
//# sourceMappingURL=chunk-DYXUUD4L.js.map
