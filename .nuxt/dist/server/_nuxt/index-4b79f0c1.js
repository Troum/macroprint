import { withAsyncContext, computed, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import "hookable";
import { u as useServerSeoMeta } from "./index-60a23cb4.js";
import { u as useFetch } from "./fetch-1c1a26c5.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useHeaderStore } from "./header-5532b7d3.js";
import { V as VContainer, a as VRow } from "./VRow-5d27b55a.js";
import { V as VCol } from "./VCol-9e15a614.js";
import "unhead";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "h3";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "cookie-es";
import "ohash";
import "qs";
import "vue-3-breadcrumbs";
import "pinia-plugin-persistedstate";
import "./asyncData-cccf8739.js";
import "./tag-d4286d97.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const headerStore = useHeaderStore();
    const { data: result } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/requisites", {
      baseURL: "https://proxy.macroprint.site",
      method: "GET"
    }, "$qnESk4ofZB")), __temp = await __temp, __restore(), __temp);
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
                    class: "page__padding py-16"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<article class="px-3"${_scopeId3}>${page.value.description}</article>`);
                      } else {
                        return [
                          createVNode("article", {
                            class: "px-3",
                            innerHTML: page.value.description
                          }, null, 8, ["innerHTML"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      class: "page__padding py-16"
                    }, {
                      default: withCtx(() => [
                        createVNode("article", {
                          class: "px-3",
                          innerHTML: page.value.description
                        }, null, 8, ["innerHTML"])
                      ]),
                      _: 1
                    })
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
                    class: "page__padding py-16"
                  }, {
                    default: withCtx(() => [
                      createVNode("article", {
                        class: "px-3",
                        innerHTML: page.value.description
                      }, null, 8, ["innerHTML"])
                    ]),
                    _: 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/for-clients/requisites/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-4b79f0c1.js.map
