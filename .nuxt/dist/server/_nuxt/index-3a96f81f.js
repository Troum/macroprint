import { withAsyncContext, computed, mergeProps, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, createCommentVNode, useSSRContext } from "vue";
import "hookable";
import { u as useServerSeoMeta } from "./index-e31e4a76.js";
import { u as useFetch } from "./fetch-e0645a22.js";
import "destr";
import "devalue";
import "klona";
import "vue-router";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { u as useHeaderStore } from "./header-2846e1cc.js";
import { A as ArticleCard } from "./ArticleCard-42e1ac0b.js";
import { V as VContainer, a as VRow } from "./VRow-30a22c26.js";
import { V as VCol } from "./VCol-b511b50b.js";
import "unhead";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "h3";
import "ufo";
import "@unhead/ssr";
import "@unhead/shared";
import "cookie-es";
import "ohash";
import "qs";
import "vue-3-breadcrumbs";
import "pinia-plugin-persistedstate";
import "./asyncData-c2a94982.js";
import "./nuxt-img-b3621699.js";
import "defu";
import "./svg-icon-b3207ad1.js";
import "@mdi/js";
import "truncate-html";
import "./VCard-2fc4bd81.js";
import "./tag-eb37962f.js";
import "./index-42cff7c0.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const headerStore = useHeaderStore();
    const { data: result } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/articles", {
      baseURL: "https://proxy.macroprint.site",
      method: "GET"
    }, "$5j38UDbxht")), __temp = await __temp, __restore(), __temp);
    const page = computed(() => {
      return result.value.page;
    });
    const articles = computed(() => {
      return result.value["articles"];
    });
    headerStore.setHeader(page.value["title"]);
    useServerSeoMeta({
      ogTitle: () => page.value["seo"]["og_title"],
      title: () => page.value["seo"].title,
      description: () => page.value["seo"].description,
      ogDescription: () => page.value["seo"]["og_description"],
      ogImage: () => "http://macroprint.by/img/mainLogo.png",
      ogImageUrl: () => "http://macroprint.by/img/mainLogo.png",
      twitterCard: () => "summary_large_image",
      twitterTitle: () => page.value["seo"].title,
      twitterDescription: () => page.value["seo"].description,
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
                  if (articles.value.length) {
                    _push3(ssrRenderComponent(VRow, { class: "page__padding" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            class: "articles__container"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(articles.value, (article, index) => {
                                  _push5(ssrRenderComponent(ArticleCard, { article }, null, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(articles.value, (article, index) => {
                                    return openBlock(), createBlock(ArticleCard, {
                                      key: index,
                                      article
                                    }, null, 8, ["article"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCol, {
                              cols: "12",
                              class: "articles__container"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(articles.value, (article, index) => {
                                  return openBlock(), createBlock(ArticleCard, {
                                    key: index,
                                    article
                                  }, null, 8, ["article"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    articles.value.length ? (openBlock(), createBlock(VRow, {
                      key: 0,
                      class: "page__padding"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          class: "articles__container"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(articles.value, (article, index) => {
                              return openBlock(), createBlock(ArticleCard, {
                                key: index,
                                article
                              }, null, 8, ["article"]);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { class: "pa-0" }, {
                default: withCtx(() => [
                  articles.value.length ? (openBlock(), createBlock(VRow, {
                    key: 0,
                    class: "page__padding"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        class: "articles__container"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(articles.value, (article, index) => {
                            return openBlock(), createBlock(ArticleCard, {
                              key: index,
                              article
                            }, null, 8, ["article"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/articles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-3a96f81f.js.map
