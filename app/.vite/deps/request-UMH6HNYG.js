import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/core/workers/request.js
function e(e2, s2) {
  let a = s2.responseType;
  a ? "array-buffer" !== a && "blob" !== a && "json" !== a && "native" !== a && "native-request-init" !== a && "text" !== a && (a = "text") : a = "json", s2.responseType = a;
  const r = s2.signal;
  return delete s2.signal, globalThis.invokeStaticMessage("request", { url: e2, options: s2 }, { signal: r }).then(async (n) => {
    let o, i, l, u, c;
    if (n.data) if (n.data instanceof ArrayBuffer) {
      if (!("json" !== a && "text" !== a && "blob" !== a || (o = new Blob([n.data]), "json" !== a && "text" !== a || (u = await o.text(), "json" !== a)))) {
        try {
          i = JSON.parse(u || null);
        } catch (p) {
          const a2 = { ...p, url: e2, requestOptions: s2 };
          throw new s("request:server", p.message, a2);
        }
        if (i.error) {
          const a2 = { ...i.error, url: e2, requestOptions: s2 };
          throw new s("request:server", i.error.message, a2);
        }
      }
    } else "native" === a && (n.data.signal = r, l = await fetch(n.data.url, n.data), n.httpStatus = l.status);
    switch (a) {
      case "blob":
        c = o;
        break;
      case "json":
        c = i;
        break;
      case "native":
        c = l;
        break;
      case "text":
        c = u;
        break;
      default:
        c = n.data;
    }
    return { data: c, httpStatus: n.httpStatus, requestOptions: s2, ssl: n.ssl, url: e2 };
  });
}
export {
  e as execute
};
//# sourceMappingURL=request-UMH6HNYG.js.map
