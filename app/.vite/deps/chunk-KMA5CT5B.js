import {
  He,
  Yt
} from "./chunk-4K2OWETR.js";

// node_modules/@arcgis/core/chunks/ColorSet.js
var s = class extends He {
  _afterNew() {
    super._afterNewApplyThemes(), this._dirty.colors = false;
  }
  _beforeChanged() {
    this.isDirty("colors") && this.reset();
  }
  generateColors() {
    this.setPrivate("currentPass", this.getPrivate("currentPass", 0) + 1);
    const e = this.getPrivate("currentPass"), s2 = this.get("colors", [this.get("baseColor", Yt.fromHex(16711680))]);
    this.getPrivate("numColors") || this.setPrivate("numColors", s2.length);
    const r = this.getPrivate("numColors"), a = 0, i = this.get("passOptions"), o = this.get("reuse");
    for (let n = a; n < r; n++) if (o) s2.push(s2[n]);
    else {
      const r2 = s2[n].toHSL();
      let a2 = r2.h + (i.hue || 0) * e;
      for (; a2 > 1; ) a2 -= 1;
      let o2 = r2.s + (i.saturation || 0) * e;
      o2 > 1 && (o2 = 1), o2 < 0 && (o2 = 0);
      let l = r2.l + (i.lightness || 0) * e;
      for (; l > 1; ) l -= 1;
      s2.push(Yt.fromHSL(a2, o2, l));
    }
  }
  getIndex(e) {
    const s2 = this.get("colors", []), r = this.get("saturation");
    return e >= s2.length ? (this.generateColors(), this.getIndex(e)) : null != r ? Yt.saturate(s2[e], r) : s2[e];
  }
  next() {
    let e = this.getPrivate("currentStep", this.get("startIndex", 0));
    return this.setPrivate("currentStep", e + this.get("step", 1)), this.getIndex(e);
  }
  reset() {
    this.setPrivate("currentStep", this.get("startIndex", 0)), this.setPrivate("currentPass", 0);
  }
};
Object.defineProperty(s, "className", { enumerable: true, configurable: true, writable: true, value: "ColorSet" }), Object.defineProperty(s, "classNames", { enumerable: true, configurable: true, writable: true, value: He.classNames.concat([s.className]) });

export {
  s
};
//# sourceMappingURL=chunk-KMA5CT5B.js.map
