import {
  i
} from "./chunk-PZ5WNCF2.js";

// node_modules/@arcgis/core/core/accessorSupport/originUtils.js
function i2(i3) {
  (i3 == null ? void 0 : i3.writtenProperties) && i3.writtenProperties.forEach(({ target: i4, propName: t, newOrigin: e }) => {
    i(i4) && e && i4.originOf(t) !== e && i4.updateOrigin(t, e);
  });
}

export {
  i2 as i
};
//# sourceMappingURL=chunk-ELTPMWLT.js.map
