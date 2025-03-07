import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/layers/support/exifUtils.js
function n(n2) {
  const { exifInfo: e, exifName: a3, tagName: u } = n2;
  if (!e || !a3 || !u) return null;
  const f = e.find((n3) => n3.name === a3);
  return f ? t({ tagName: u, tags: f.tags }) : null;
}
function t(n2) {
  const { tagName: t2, tags: e } = n2;
  if (!e || !t2) return null;
  const a3 = e.find((n3) => n3.name === t2);
  return (a3 == null ? void 0 : a3.value) || null;
}

// node_modules/@arcgis/core/rest/query/support/AttachmentInfo.js
var s;
var p = { 1: { id: 1, rotation: 0, mirrored: false }, 2: { id: 2, rotation: 0, mirrored: true }, 3: { id: 3, rotation: 180, mirrored: false }, 4: { id: 4, rotation: 180, mirrored: true }, 5: { id: 5, rotation: -90, mirrored: true }, 6: { id: 6, rotation: 90, mirrored: false }, 7: { id: 7, rotation: 90, mirrored: true }, 8: { id: 8, rotation: -90, mirrored: false } };
var d = s = class extends S {
  constructor(o) {
    super(o), this.contentType = null, this.exifInfo = null, this.id = null, this.globalId = null, this.keywords = null, this.name = null, this.parentGlobalId = null, this.parentObjectId = null, this.size = null, this.url = null;
  }
  get orientationInfo() {
    const { exifInfo: o } = this, t2 = n({ exifName: "Exif IFD0", tagName: "Orientation", exifInfo: o });
    return p[t2] || null;
  }
  clone() {
    return new s({ contentType: this.contentType, exifInfo: this.exifInfo, id: this.id, globalId: this.globalId, keywords: this.keywords, name: this.name, parentGlobalId: this.parentGlobalId, parentObjectId: this.parentObjectId, size: this.size, url: this.url });
  }
};
r([m({ type: String })], d.prototype, "contentType", void 0), r([m()], d.prototype, "exifInfo", void 0), r([m({ readOnly: true })], d.prototype, "orientationInfo", null), r([m({ type: x })], d.prototype, "id", void 0), r([m({ type: String })], d.prototype, "globalId", void 0), r([m({ type: String })], d.prototype, "keywords", void 0), r([m({ type: String })], d.prototype, "name", void 0), r([m({ json: { read: false } })], d.prototype, "parentGlobalId", void 0), r([m({ json: { read: false } })], d.prototype, "parentObjectId", void 0), r([m({ type: x })], d.prototype, "size", void 0), r([m({ json: { read: false } })], d.prototype, "url", void 0), d = s = r([a("esri.rest.query.support.AttachmentInfo")], d);
var a2 = d;

export {
  a2 as a
};
//# sourceMappingURL=chunk-TECUWEJV.js.map
