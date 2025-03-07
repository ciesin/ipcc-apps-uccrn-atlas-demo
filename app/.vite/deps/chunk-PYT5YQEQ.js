import {
  R
} from "./chunk-IHQU26IU.js";
import {
  s
} from "./chunk-YOEVVGAF.js";
import {
  e as e2,
  i as i2
} from "./chunk-KGW5IGJ4.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";
import {
  i,
  y
} from "./chunk-U6JFTJMZ.js";
import {
  c
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/LodResources.js
var m = class {
  constructor(e3, t, r, s2) {
    this.material = e3, this.bufferWriter = e3.createBufferWriter(), this.vertexBufferLayout = this.bufferWriter.vertexBufferLayout, this.buffer = t, this.elementCount = r, this.boundingInfo = s2;
  }
  get numTriangles() {
    return this.elementCount / 3;
  }
  get numVertices() {
    return this.elementCount;
  }
  computeUsedMemory() {
    return this.buffer.byteLength + y;
  }
  getRenderGeometry() {
    return this;
  }
  intersect(e3, t, r, s2, n, i3, o, u) {
    const m2 = this.bufferWriter, a2 = this.buffer;
    m2.intersect(a2, e3, r, s2, (r2, s3, m3, a3, l2) => c2(r2, s3, m3, l2, e3, t, i3, o, n, u));
  }
};
var a = class {
  constructor(e3) {
    this.engineGeometry = e3;
  }
  get material() {
    return this.engineGeometry.material;
  }
  get numVertices() {
    return this.engineGeometry.attributes.get(e.POSITION).indices.length;
  }
  get numTriangles() {
    return this.engineGeometry.indexCount / 3;
  }
  get boundingInfo() {
    return this.engineGeometry.boundingInfo;
  }
  computeUsedMemory() {
    return Array.from(this.engineGeometry.attributes.values()).reduce((e3, t) => e3 + i(t.data, t.indices), 0);
  }
  getRenderGeometry() {
    const e3 = this.material, t = this.engineGeometry, r = t.attributes, s2 = t.boundingInfo, n = e3.createBufferWriter(), i3 = n.vertexBufferLayout, o = n.elementCount(r), u = i3.createBuffer(o);
    return n.write(null, null, r, null, u, 0), new m(e3, u.buffer, o, s2);
  }
  intersect(e3, t, r, s2, n, i3, o, u) {
    const m2 = this.engineGeometry;
    this.material.intersect(m2, e3.transform.transform, e3, r, s2, (r2, s3, m3, a2, l2) => c2(r2, s3, m3, l2, e3, t, i3, o, n, u));
  }
};
function c2(e3, t, r, o, m2, a2, c3, l2, f2, h2) {
  if (e3 < 0) return;
  if (a2 && !a2(m2.rayBegin, m2.rayEnd, e3)) return;
  const g = new s(c3.layerUid, c3.graphicUid(f2), r, l2, h2);
  if ((null == m2.results.min.drapedLayerOrder || o >= m2.results.min.drapedLayerOrder) && (null == m2.results.min.dist || e3 < m2.results.min.dist) && m2.results.min.set(i2.LOD, g, e3, t, m2.transform.transform, o), m2.options.store !== e2.MIN && (null == m2.results.max.drapedLayerOrder || o >= m2.results.max.drapedLayerOrder) && (null == m2.results.max.dist || e3 > m2.results.max.dist) && m2.results.max.set(i2.LOD, g, e3, t, m2.transform.transform, o), m2.options.store === e2.ALL) {
    const r2 = R(m2.results.min.ray);
    r2.set(i2.LOD, g, e3, t, m2.transform.transform, o), m2.results.all.push(r2);
  }
}
var l = class {
  constructor(e3, t = null) {
    this.geometry = e3, this.textures = t;
  }
  get material() {
    return this.geometry.material;
  }
  get numTriangles() {
    return this.geometry.numTriangles;
  }
};
var f = class {
  constructor(t, r, s2) {
    this.components = t, this.minScreenSpaceRadius = r, this.pivotOffset = s2;
    const n = c(this.components.map((e3) => e3.geometry));
    this.numVertices = n.reduce((e3, t2) => e3 + t2.numVertices, 0);
  }
};
var h = class {
  constructor(e3) {
    this.levels = e3, this.levels.sort((e4, t) => e4.minScreenSpaceRadius === t.minScreenSpaceRadius ? e4.numVertices - t.numVertices : e4.minScreenSpaceRadius - t.minScreenSpaceRadius);
  }
  getMaterials() {
    const t = [];
    return this.levels.forEach((e3) => e3.components.forEach((e4) => t.push(e4.geometry.material))), c(t);
  }
  getTextures() {
    const t = new Array();
    return this.levels.forEach((e3) => e3.components.forEach((e4) => {
      null != e4.textures && t.push(...e4.textures);
    })), c(t);
  }
  getGeometries() {
    const t = new Array();
    return this.levels.forEach((e3) => e3.components.forEach((e4) => {
      t.push(e4.geometry);
    })), c(t);
  }
  getEngineGeometries() {
    return this.getGeometries().map((e3) => e3.engineGeometry).filter((e3) => null != e3);
  }
  computeUsedMemory() {
    const e3 = this.getGeometries(), t = this.getTextures(), r = e3.reduce((e4, t2) => e4 + t2.computeUsedMemory(), 0);
    return t.reduce((e4, t2) => e4 + t2.memoryEstimate, 0) + r;
  }
};

export {
  m,
  a,
  l,
  f,
  h
};
//# sourceMappingURL=chunk-PYT5YQEQ.js.map
