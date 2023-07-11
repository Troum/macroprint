import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const svgIcon_vue_vue_type_style_index_0_scoped_76aa6b74_lang = "";
const types = {
  mdi: {
    size: 24,
    viewbox: "0 0 24 24"
  },
  "simple-icons": {
    size: 24,
    viewbox: "0 0 24 24"
  },
  default: {
    size: 0,
    viewbox: "0 0 0 0"
  }
};
const _sfc_main = {
  name: "icon",
  props: {
    type: String,
    path: { type: String, required: true },
    size: { type: [String, Number], default: 24 },
    viewbox: String,
    flip: {
      type: String,
      validator: (value) => ["horizontal", "vertical", "both", "none"].includes(value)
    },
    rotate: { type: Number, default: 0 }
  },
  computed: {
    styles() {
      return {
        "--sx": ["both", "horizontal"].includes(this.flip) ? "-1" : "1",
        "--sy": ["both", "vertical"].includes(this.flip) ? "-1" : "1",
        "--r": isNaN(this.rotate) ? this.rotate : this.rotate + "deg"
      };
    },
    defaults() {
      return types[this.type] || types.default;
    },
    sizeValue() {
      return this.size || this.defaults.size;
    },
    viewboxValue() {
      return this.viewbox || this.defaults.viewbox;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: $options.sizeValue,
    height: $options.sizeValue,
    viewBox: $options.viewboxValue,
    style: $options.styles
  }, _attrs))} data-v-76aa6b74><path${ssrRenderAttr("d", $props.path)} data-v-76aa6b74></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@jamescoyle/vue-icon/lib/svg-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SvgIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-76aa6b74"]]);
export {
  SvgIcon as S
};
//# sourceMappingURL=svg-icon-b3207ad1.js.map
