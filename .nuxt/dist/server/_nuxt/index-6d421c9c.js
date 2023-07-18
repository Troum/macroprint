import { withAsyncContext, computed, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import "hookable";
import { u as useServerSeoMeta } from "./index-e31e4a76.js";
import { u as useFetch } from "./fetch-e0645a22.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useHeaderStore } from "./header-2846e1cc.js";
import { _ as _export_sfc } from "../server.mjs";
import { V as VContainer, a as VRow } from "./VRow-30a22c26.js";
import { V as VCol } from "./VCol-b511b50b.js";
import "unhead";
import "ohash";
import "./asyncData-c2a94982.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "h3";
import "ufo";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "cookie-es";
import "qs";
import "vue-3-breadcrumbs";
import "pinia-plugin-persistedstate";
import "./tag-eb37962f.js";
const index_vue_vue_type_style_index_0_scoped_2844a0ad_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const headerStore = useHeaderStore();
    const { data: result } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/history", {
      baseURL: "https://proxy.macroprint.site",
      method: "GET"
    }, "$9ydnsMDU4J")), __temp = await __temp, __restore(), __temp);
    const page = computed(() => {
      return result.value;
    });
    headerStore.setHeader(page.value["title"]);
    useServerSeoMeta({
      ogTitle: () => page.value["title"],
      title: () => page.value["title"],
      description: () => "Первая в Беларуси фабрика широкоформатной печати!",
      ogDescription: () => "Первая в Беларуси фабрика широкоформатной печати!",
      ogImage: () => "http://macroprint.by/img/mainLogo.png",
      ogImageUrl: () => "http://macroprint.by/img/mainLogo.png",
      twitterCard: () => "summary_large_image",
      twitterTitle: () => page.value["title"],
      twitterDescription: () => "Первая в Беларуси фабрика широкоформатной печати!",
      twitterImage: () => "http://macroprint.by/img/mainLogo.png"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: true,
        class: "d-block pa-0 ma-0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { class: "pa-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "history__page page__padding py-10"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      class: "history__page page__padding py-10",
                      innerHTML: page.value.description
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { class: "pa-0" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    class: "history__page page__padding py-10",
                    innerHTML: page.value.description
                  }, null, 8, ["innerHTML"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/history/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2844a0ad"]]);
export {
  index as default
};
//# sourceMappingURL=index-6d421c9c.js.map
