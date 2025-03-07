import {
  f
} from "./chunk-VY225BNN.js";
import {
  x
} from "./chunk-XWXWIBVO.js";
import {
  S
} from "./chunk-IP4HFFRO.js";
import {
  C,
  p
} from "./chunk-PAGKMWJH.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  _
} from "./chunk-ACGZOBZ6.js";
import {
  P2 as P,
  s as s4
} from "./chunk-UFBX3XSC.js";
import {
  J,
  K,
  T
} from "./chunk-F7TCEOHX.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a as a2,
  b,
  s as s3,
  u2 as u
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n,
  s,
  s2
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var j = (j2) => {
  let E = class extends j2 {
    constructor() {
      super(...arguments), this.resourceReferences = { portalItem: null, paths: [] }, this.userHasEditingPrivileges = true, this.userHasFullEditingPrivileges = false, this.userHasUpdateItemPrivileges = false;
    }
    destroy() {
      this.portalItem = u(this.portalItem), this.resourceReferences.portalItem = null, this.resourceReferences.paths.length = 0;
    }
    set portalItem(e) {
      e !== this._get("portalItem") && (this.removeOrigin("portal-item"), this._set("portalItem", e));
    }
    readPortalItem(e, t, r3) {
      if (t.itemId) return new S({ id: t.itemId, portal: r3 == null ? void 0 : r3.portal });
    }
    writePortalItem(e, t) {
      (e == null ? void 0 : e.id) && (t.itemId = e.id);
    }
    async loadFromPortal(e, t) {
      var _a;
      if ((_a = this.portalItem) == null ? void 0 : _a.id) try {
        const { load: r3 } = await import("./layersLoader-YVWJOYCA.js");
        return s3(t), await r3({ instance: this, supportedTypes: e.supportedTypes, validateItem: e.validateItem, supportsData: e.supportsData, layerModuleTypeMap: e.layerModuleTypeMap, populateGroupLayer: e.populateGroupLayer }, t);
      } catch (r3) {
        throw b(r3) || n.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})
  ${r3}`), r3;
      }
    }
    async finishLoadEditablePortalLayer(e) {
      this._set("userHasEditingPrivileges", await this._fetchUserHasEditingPrivileges(e).catch((e2) => (a2(e2), true)));
    }
    async setUserPrivileges(e, r3) {
      if (!s.userPrivilegesApplied) return this.finishLoadEditablePortalLayer(r3);
      if (this.url) try {
        const { features: { edit: t, fullEdit: s5 }, content: { updateItem: i } } = await this._fetchUserPrivileges(e, r3);
        this._set("userHasEditingPrivileges", t), this._set("userHasFullEditingPrivileges", s5), this._set("userHasUpdateItemPrivileges", i);
      } catch (s5) {
        a2(s5);
      }
    }
    async _fetchUserPrivileges(e, t) {
      var _a, _b;
      let s5 = this.portalItem;
      if (!e || !s5 || !s5.loaded || s5.sourceUrl) return this._fetchFallbackUserPrivileges(t);
      const i = !((_a = s4) == null ? void 0 : _a.findCredential(this.url)), o2 = e === s5.id;
      if (o2 && s5.portal.user) return this._getUserPrivileges(s5, i);
      let a3, l;
      if (o2) a3 = s5.portal.url;
      else try {
        a3 = await x(this.url, t);
      } catch (m2) {
        a2(m2);
      }
      if (!a3 || !T(a3, s5.portal.url)) return this._fetchFallbackUserPrivileges(t);
      try {
        const e2 = null != t ? t.signal : null;
        l = await ((_b = s4) == null ? void 0 : _b.getCredential(`${a3}/sharing`, { prompt: false, signal: e2 }));
      } catch (m2) {
        a2(m2);
      }
      const n2 = true, p2 = false, d = false;
      if (!l) return { features: { edit: n2, fullEdit: p2 }, content: { updateItem: d } };
      try {
        if (o2 ? await s5.reload() : (s5 = new S({ id: e, portal: { url: a3 } }), await s5.load(t)), s5.portal.user) return this._getUserPrivileges(s5, i);
      } catch (m2) {
        a2(m2);
      }
      return { features: { edit: n2, fullEdit: p2 }, content: { updateItem: d } };
    }
    _getUserPrivileges(e, t) {
      const r3 = f(e);
      return t && (r3.features.edit = true), r3;
    }
    async _fetchFallbackUserPrivileges(e) {
      let t = true;
      try {
        t = await this._fetchUserHasEditingPrivileges(e);
      } catch (r3) {
        a2(r3);
      }
      return { features: { edit: t, fullEdit: false }, content: { updateItem: false } };
    }
    async _fetchUserHasEditingPrivileges(e) {
      var _a;
      const t = this.url ? (_a = s4) == null ? void 0 : _a.findCredential(this.url) : null;
      if (!t) return true;
      const s5 = _2.credential === t ? _2.user : await this._fetchEditingUser(e);
      return _2.credential = t, _2.user = s5, null == (s5 == null ? void 0 : s5.privileges) || s5.privileges.includes("features:user:edit");
    }
    async _fetchEditingUser(e) {
      var _a, _b, _c;
      const t = (_b = (_a = this.portalItem) == null ? void 0 : _a.portal) == null ? void 0 : _b.user;
      if (t) return t;
      const o2 = (_c = s4) == null ? void 0 : _c.findServerInfo(this.url ?? "");
      if (!(o2 == null ? void 0 : o2.owningSystemUrl)) return null;
      const a3 = `${o2.owningSystemUrl}/sharing/rest`, l = C.getDefault();
      if (l && l.loaded && K(l.restUrl) === K(a3)) return l.user;
      const n2 = `${a3}/community/self`, p2 = null != e ? e.signal : null, u2 = await _(P(n2, { authMode: "no-prompt", query: { f: "json" }, signal: p2 }));
      return u2.ok ? p.fromJSON(u2.value.data) : null;
    }
    read(e, t) {
      t && (t.layer = this), super.read(e, t);
    }
    write(e, t) {
      var _a;
      const r3 = t == null ? void 0 : t.portal, s5 = ((_a = this.portalItem) == null ? void 0 : _a.id) && (this.portalItem.portal || C.getDefault());
      return r3 && s5 && !J(s5.restUrl, r3.restUrl) ? (t.messages && t.messages.push(new s2("layer:cross-portal", `The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`, { layer: this })), null) : super.write(e, { ...t, layer: this });
    }
  };
  return r([m({ type: S })], E.prototype, "portalItem", null), r([o("web-document", "portalItem", ["itemId"])], E.prototype, "readPortalItem", null), r([r2("web-document", "portalItem", { itemId: { type: String } })], E.prototype, "writePortalItem", null), r([m({ clonable: false })], E.prototype, "resourceReferences", void 0), r([m({ type: Boolean, readOnly: true })], E.prototype, "userHasEditingPrivileges", void 0), r([m({ type: Boolean, readOnly: true })], E.prototype, "userHasFullEditingPrivileges", void 0), r([m({ type: Boolean, readOnly: true })], E.prototype, "userHasUpdateItemPrivileges", void 0), E = r([a("esri.layers.mixins.PortalLayer")], E), E;
};
var _2 = { credential: null, user: null };

export {
  j
};
//# sourceMappingURL=chunk-7FOAM45I.js.map
