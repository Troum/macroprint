import { _ as __nuxt_component_0 } from "./nuxt-img-c8b23274.js";
import { computed, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { S as SvgIcon } from "./svg-icon-b3207ad1.js";
import { mdiCalendar } from "@mdi/js";
import truncate from "truncate-html";
import { _ as _export_sfc, b as useDisplay } from "../server.mjs";
import { V as VCard, a as VCardSubtitle, b as VCardTitle, c as VCardText } from "./VCard-cc02c7f0.js";
const ArticleCard_vue_vue_type_style_index_0_scoped_de80ace7_lang = "";
const _sfc_main = {
  __name: "ArticleCard",
  __ssrInlineRender: true,
  props: {
    article: {
      type: Object,
      default: {
        title: null,
        date: null,
        image: null,
        description: null,
        slug: null
      }
    }
  },
  setup(__props) {
    const props = __props;
    const mobile = computed(() => {
      return useDisplay().mdAndDown.value;
    });
    const truncated = computed(() => {
      const count = mobile ? 10 : 20;
      return truncate(props.article.description, count, { byWords: true });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0;
      _push(ssrRenderComponent(VCard, mergeProps({
        elevation: 0,
        height: 567,
        class: "pa-0",
        color: "white",
        style: { "position": "relative" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              provider: "strapi",
              height: 274,
              src: __props.article["image"],
              fit: "cover"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardSubtitle, { class: "article--subtitle" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SvgIcon), {
                    path: unref(mdiCalendar),
                    size: 16,
                    type: "mdi"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-de80ace7${_scopeId2}>${ssrInterpolate(__props.article["date"])}</span>`);
                } else {
                  return [
                    createVNode(unref(SvgIcon), {
                      path: unref(mdiCalendar),
                      size: 16,
                      type: "mdi"
                    }, null, 8, ["path"]),
                    createVNode("span", null, toDisplayString(__props.article["date"]), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardTitle, { class: "article--title text-secondary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.article["title"])}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.article["title"]), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "article--description" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                provider: "strapi",
                height: 274,
                src: __props.article["image"],
                fit: "cover"
              }, null, 8, ["src"]),
              createVNode(VCardSubtitle, { class: "article--subtitle" }, {
                default: withCtx(() => [
                  createVNode(unref(SvgIcon), {
                    path: unref(mdiCalendar),
                    size: 16,
                    type: "mdi"
                  }, null, 8, ["path"]),
                  createVNode("span", null, toDisplayString(__props.article["date"]), 1)
                ]),
                _: 1
              }),
              createVNode(VCardTitle, { class: "article--title text-secondary" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.article["title"]), 1)
                ]),
                _: 1
              }),
              createVNode(VCardText, {
                class: "article--description",
                innerHTML: truncated.value
              }, null, 8, ["innerHTML"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/ArticleCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArticleCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de80ace7"]]);
export {
  ArticleCard as A
};
//# sourceMappingURL=ArticleCard-776ab4c4.js.map
