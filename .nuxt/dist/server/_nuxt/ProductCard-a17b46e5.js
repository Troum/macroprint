import { _ as __nuxt_component_0 } from "./nuxt-img-b3621699.js";
import { computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import truncate from "truncate-html";
import { _ as _export_sfc } from "../server.mjs";
import { V as VCard, b as VCardTitle, c as VCardText, d as VCardActions } from "./VCard-2fc4bd81.js";
import { V as VBtn } from "./VBtn-a44162c6.js";
import { V as VImg } from "./index-42cff7c0.js";
const ProductCard_vue_vue_type_style_index_0_scoped_34783eda_lang = "";
const _sfc_main = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      default: {
        title: null,
        icon: null,
        image: null,
        description: null,
        slug: null
      }
    }
  },
  setup(__props) {
    const props = __props;
    const truncated = computed(() => {
      return truncate(props.product["shortDescription"], 4, { byWords: true });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0;
      _push(ssrRenderComponent(VCard, mergeProps({
        to: `/products/${__props.product["slug"]}`,
        elevation: 0,
        class: "pa-0",
        color: "white",
        style: { "position": "relative" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              provider: "strapi",
              src: __props.product["image"],
              width: "100%"
            }, null, _parent2, _scopeId));
            _push2(`<div class="product--icon__wrapper bg-secondary" data-v-34783eda${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_img, {
              provider: "strapi",
              width: 60,
              src: __props.product["icon"]
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VCardTitle, { class: "product--title primary--text" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.product["title"])}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.product["title"]), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "product--description" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardActions, { class: "product--actions" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    flat: true,
                    height: 13,
                    ripple: false,
                    to: `/products/${__props.product["slug"]}`,
                    class: "product--actions__detailed-button",
                    variant: "plain"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-secondary" data-v-34783eda${_scopeId3}>Подробнее</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-secondary" }, "Подробнее")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VImg, {
                    "max-width": 104,
                    src: "/images/vectors/horizontal.svg"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      flat: true,
                      height: 13,
                      ripple: false,
                      to: `/products/${__props.product["slug"]}`,
                      class: "product--actions__detailed-button",
                      variant: "plain"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-secondary" }, "Подробнее")
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(VImg, {
                      "max-width": 104,
                      src: "/images/vectors/horizontal.svg"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                provider: "strapi",
                src: __props.product["image"],
                width: "100%"
              }, null, 8, ["src"]),
              createVNode("div", { class: "product--icon__wrapper bg-secondary" }, [
                createVNode(_component_nuxt_img, {
                  provider: "strapi",
                  width: 60,
                  src: __props.product["icon"]
                }, null, 8, ["src"])
              ]),
              createVNode(VCardTitle, { class: "product--title primary--text" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.product["title"]), 1)
                ]),
                _: 1
              }),
              createVNode(VCardText, {
                class: "product--description",
                innerHTML: truncated.value
              }, null, 8, ["innerHTML"]),
              createVNode(VCardActions, { class: "product--actions" }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    flat: true,
                    height: 13,
                    ripple: false,
                    to: `/products/${__props.product["slug"]}`,
                    class: "product--actions__detailed-button",
                    variant: "plain"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-secondary" }, "Подробнее")
                    ]),
                    _: 1
                  }, 8, ["to"]),
                  createVNode(VImg, {
                    "max-width": 104,
                    src: "/images/vectors/horizontal.svg"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-34783eda"]]);
export {
  ProductCard as P
};
//# sourceMappingURL=ProductCard-a17b46e5.js.map
