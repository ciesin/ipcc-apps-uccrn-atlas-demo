import {
  r as r2
} from "./chunk-ZYOZHQFS.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/layers/support/I3SLayerDefinitions.js
var p = class extends S {
  constructor() {
    super(...arguments), this.nodesPerPage = null, this.rootIndex = 0, this.lodSelectionMetricType = null;
  }
};
r([m({ type: Number })], p.prototype, "nodesPerPage", void 0), r([m({ type: Number })], p.prototype, "rootIndex", void 0), r([m({ type: String })], p.prototype, "lodSelectionMetricType", void 0), p = r([a("esri.layers.support.I3SLayerDefinitions.I3SNodePageDefinition")], p);
var i = class extends S {
  constructor() {
    super(...arguments), this.factor = 1;
  }
};
r([m({ type: Number, json: { read: { source: "textureSetDefinitionId" } } })], i.prototype, "id", void 0), r([m({ type: Number })], i.prototype, "factor", void 0), i = r([a("esri.layers.support.I3SLayerDefinitions.I3SMaterialTexture")], i);
var n = class extends S {
  constructor() {
    super(...arguments), this.baseColorFactor = [1, 1, 1, 1], this.baseColorTexture = null, this.metallicRoughnessTexture = null, this.metallicFactor = 1, this.roughnessFactor = 1;
  }
};
r([m({ type: [Number] })], n.prototype, "baseColorFactor", void 0), r([m({ type: i })], n.prototype, "baseColorTexture", void 0), r([m({ type: i })], n.prototype, "metallicRoughnessTexture", void 0), r([m({ type: Number })], n.prototype, "metallicFactor", void 0), r([m({ type: Number })], n.prototype, "roughnessFactor", void 0), n = r([a("esri.layers.support.I3SLayerDefinitions.I3SMaterialPBRMetallicRoughness")], n);
var a2 = class extends S {
  constructor() {
    super(...arguments), this.alphaMode = "opaque", this.alphaCutoff = 0.25, this.doubleSided = false, this.cullFace = "none", this.normalTexture = null, this.occlusionTexture = null, this.emissiveTexture = null, this.emissiveFactor = null, this.pbrMetallicRoughness = null;
  }
};
r([r2({ opaque: "opaque", mask: "mask", blend: "blend" })], a2.prototype, "alphaMode", void 0), r([m({ type: Number })], a2.prototype, "alphaCutoff", void 0), r([m({ type: Boolean })], a2.prototype, "doubleSided", void 0), r([r2({ none: "none", back: "back", front: "front" })], a2.prototype, "cullFace", void 0), r([m({ type: i })], a2.prototype, "normalTexture", void 0), r([m({ type: i })], a2.prototype, "occlusionTexture", void 0), r([m({ type: i })], a2.prototype, "emissiveTexture", void 0), r([m({ type: [Number] })], a2.prototype, "emissiveFactor", void 0), r([m({ type: n })], a2.prototype, "pbrMetallicRoughness", void 0), a2 = r([a("esri.layers.support.I3SLayerDefinitions.I3SMaterialDefinition")], a2);
var l = class extends S {
};
r([m({ type: String, json: { read: { source: ["name", "index"], reader: (e, t) => null != e ? e : `${t.index}` } } })], l.prototype, "name", void 0), r([r2({ jpg: "jpg", png: "png", dds: "dds", "ktx-etc2": "ktx-etc2", ktx2: "ktx2", basis: "basis" })], l.prototype, "format", void 0), l = r([a("esri.layers.support.I3SLayerDefinitions.I3STextureFormat")], l);
var y = class extends S {
  constructor() {
    super(...arguments), this.atlas = false;
  }
};
r([m({ type: [l] })], y.prototype, "formats", void 0), r([m({ type: Boolean })], y.prototype, "atlas", void 0), y = r([a("esri.layers.support.I3SLayerDefinitions.I3STextureSetDefinition")], y);
var u = class extends S {
};
r([r2({ Float32: "Float32", UInt64: "UInt64", UInt32: "UInt32", UInt16: "UInt16", UInt8: "UInt8" })], u.prototype, "type", void 0), r([m({ type: Number })], u.prototype, "component", void 0), u = r([a("esri.layers.support.I3SLayerDefinitions.I3SGeometryAttribute")], u);
var d = class extends S {
};
r([r2({ draco: "draco" })], d.prototype, "encoding", void 0), r([m({ type: [String] })], d.prototype, "attributes", void 0), d = r([a("esri.layers.support.I3SLayerDefinitions.I3SGeometryCompressedAttributes")], d);
var c = class extends S {
  constructor() {
    super(...arguments), this.offset = 0;
  }
};
r([m({ type: Number })], c.prototype, "offset", void 0), r([m({ type: u })], c.prototype, "position", void 0), r([m({ type: u })], c.prototype, "normal", void 0), r([m({ type: u })], c.prototype, "uv0", void 0), r([m({ type: u })], c.prototype, "color", void 0), r([m({ type: u })], c.prototype, "uvRegion", void 0), r([m({ type: u })], c.prototype, "featureId", void 0), r([m({ type: u })], c.prototype, "faceRange", void 0), r([m({ type: d })], c.prototype, "compressedAttributes", void 0), c = r([a("esri.layers.support.I3SLayerDefinitions.I3SGeometryBuffer")], c);
var m2 = class extends S {
};
r([r2({ triangle: "triangle" })], m2.prototype, "topology", void 0), r([m()], m2.prototype, "geometryBuffers", void 0), m2 = r([a("esri.layers.support.I3SLayerDefinitions.I3SGeometryDefinition")], m2);

export {
  p,
  a2 as a,
  y,
  m2 as m
};
//# sourceMappingURL=chunk-MIBVU3UX.js.map
