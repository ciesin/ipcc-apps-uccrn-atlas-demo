import {
  C
} from "./chunk-GKX3Z6XX.js";

// node_modules/@arcgis/core/arcade/Attachment.js
var t = class _t extends C {
  constructor(e, t2, i, s, l, d, h) {
    super(), this.attachmentUrl = l, this.declaredClass = "esri.arcade.Attachment", this.immutable = false, this.setField("id", e), this.setField("name", t2), this.setField("contenttype", i), this.setField("size", s), this.setField("exifinfo", d), this.setField("keywords", h), this.immutable = true;
  }
  deepClone() {
    var _a;
    return new _t(this.field("id"), this.field("name"), this.field("contenttype"), this.field("size"), this.attachmentUrl, ((_a = this.field("exifinfo")) == null ? void 0 : _a.deepClone()) ?? null, this.field("keywords"));
  }
};

export {
  t
};
//# sourceMappingURL=chunk-4DEIS6AK.js.map
