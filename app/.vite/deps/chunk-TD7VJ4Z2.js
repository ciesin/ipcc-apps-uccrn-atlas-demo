import {
  e2 as e3,
  e3 as e4,
  s
} from "./chunk-XJ5CGMWY.js";
import {
  o2 as o
} from "./chunk-BSNHCIEC.js";
import {
  e as e2
} from "./chunk-D7JG6K4Y.js";
import {
  n
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js
function l(l2, n2) {
  const { vertex: s2, attributes: u } = l2;
  n2.hasVvInstancing && (n2.vvSize || n2.vvColor) && u.add(e.INSTANCEFEATUREATTRIBUTE, "vec4"), n2.vvSize ? (s2.uniforms.add(new e2("vvSizeMinSize", (e5) => e5.vvSize.minSize)), s2.uniforms.add(new e2("vvSizeMaxSize", (e5) => e5.vvSize.maxSize)), s2.uniforms.add(new e2("vvSizeOffset", (e5) => e5.vvSize.offset)), s2.uniforms.add(new e2("vvSizeFactor", (e5) => e5.vvSize.factor)), s2.uniforms.add(new o("vvSymbolRotationMatrix", (e5) => e5.vvSymbolRotationMatrix)), s2.uniforms.add(new e2("vvSymbolAnchor", (e5) => e5.vvSymbolAnchor)), s2.code.add(n`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`), s2.code.add(n`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${n2.hasVvInstancing ? n`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }` : ""}
    `)) : s2.code.add(n`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`), n2.vvColor ? (s2.constants.add("vvColorNumber", "int", e4), s2.uniforms.add(new s("vvColorValues", (e5) => e5.vvColor.values, e4), new e3("vvColorColors", (e5) => e5.vvColor.colors, e4)), s2.code.add(n`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${n2.hasVvInstancing ? n`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }` : "vec4 vvColor() { return vec4(1.0); }"}
    `)) : s2.code.add(n`vec4 vvColor() { return vec4(1.0); }`);
}

export {
  l
};
//# sourceMappingURL=chunk-TD7VJ4Z2.js.map
