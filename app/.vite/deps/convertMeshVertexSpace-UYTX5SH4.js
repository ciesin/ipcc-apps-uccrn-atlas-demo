import {
  p
} from "./chunk-SKW2R7G5.js";
import "./chunk-LMA7TSBN.js";
import {
  B
} from "./chunk-RJYMNNKW.js";
import "./chunk-D5KT2NSO.js";
import "./chunk-U2TKRMQE.js";
import "./chunk-IWFYZGBP.js";
import "./chunk-H2PMLL3X.js";
import "./chunk-ZKPJPNLW.js";
import "./chunk-YINRFSE5.js";
import "./chunk-A6DPK5GC.js";
import "./chunk-WXGA2B5U.js";
import "./chunk-X5RZJMNW.js";
import "./chunk-K24WU5UX.js";
import "./chunk-LH36NQSN.js";
import "./chunk-K35H6D4D.js";
import "./chunk-UMYFDXOJ.js";
import "./chunk-363AT5UF.js";
import "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-WJNMFEXQ.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import {
  s as s2
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  a,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/convertMeshVertexSpace.js
async function i(i2, n, c) {
  await Promise.resolve(), s2(c);
  const l = B(i2, n, { useEllipsoid: c == null ? void 0 : c.useEllipsoid });
  if (!l) throw new s("meshUtils:convertVertexSpace()", "Failed to convert to provided vertex space due to projection errors");
  const m = i2.cloneAndModifyVertexAttributes(new p({ ...l, uv: a(i2.vertexAttributes.uv), color: a(i2.vertexAttributes.color) }), n);
  return m.transform = null, m;
}
export {
  i as convertMeshVertexSpace
};
//# sourceMappingURL=convertMeshVertexSpace-UYTX5SH4.js.map
