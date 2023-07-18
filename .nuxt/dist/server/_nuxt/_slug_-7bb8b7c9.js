import { withAsyncContext, computed, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import "hookable";
import { u as useServerSeoMeta } from "./index-e31e4a76.js";
import { u as useAsyncData } from "./asyncData-c2a94982.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { S as SvgIcon } from "./svg-icon-b3207ad1.js";
import { VueperSlides, VueperSlide } from "vueperslides";
import { mdiArrowLeftThin, mdiArrowRightThin } from "@mdi/js";
import { A as ArticleCard } from "./ArticleCard-42e1ac0b.js";
import { useRouter, useRoute } from "vue-router";
import { u as useHeaderStore } from "./header-2846e1cc.js";
import { V as VContainer, a as VRow } from "./VRow-30a22c26.js";
import { V as VCol } from "./VCol-b511b50b.js";
import { V as VBtn } from "./VBtn-a44162c6.js";
import { F as useDisplay } from "../server.mjs";
import "unhead";
import "./nuxt-img-b3621699.js";
import "defu";
import "ufo";
import "h3";
import "truncate-html";
import "./VCard-2fc4bd81.js";
import "./tag-eb37962f.js";
import "./index-42cff7c0.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "@unhead/ssr";
import "@unhead/shared";
import "cookie-es";
import "ohash";
import "qs";
import "vue-3-breadcrumbs";
import "pinia-plugin-persistedstate";
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const router = useRouter();
    const { data: result } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "result",
      () => $fetch(`https://proxy.macroprint.site/api/articles/${useRoute().params.slug}`)
    )), __temp = await __temp, __restore(), __temp);
    const article = computed(() => {
      return result.value;
    });
    const xl = computed(() => {
      return useDisplay().xlAndUp.value;
    });
    const mobile = computed(() => {
      return useDisplay().mdAndDown.value;
    });
    const headerStore = useHeaderStore();
    useServerSeoMeta({
      title: article.value.article["title"],
      description: article.value.article.seo["description"],
      ogDescription: article.value.article.seo["og_description"],
      ogTitle: article.value.article.seo["og_title"],
      ogType: "website",
      ogUrl: router.fullPath,
      ogLocale: "ru_RU"
    });
    headerStore.setHeader(article.value.article["title"]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: true,
        class: "d-block pa-0 ma-0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { class: "pa-0 ma-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "single-product__container page__padding"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<article${_scopeId3}>${unref(article).article.description}</article>`);
                      } else {
                        return [
                          createVNode("article", {
                            innerHTML: unref(article).article.description
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
                      class: "single-product__container page__padding"
                    }, {
                      default: withCtx(() => [
                        createVNode("article", {
                          innerHTML: unref(article).article.description
                        }, null, 8, ["innerHTML"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(article)["others"].length) {
              _push2(`<!--[-->`);
              if (unref(mobile)) {
                _push2(ssrRenderComponent(VRow, { class: "index-page__articles-container page__padding bg-primary" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VCol, {
                        cols: "12",
                        class: "d-flex justify-start flex-column d-lg-block",
                        style: { "position": "relative", "min-height": "770px" }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="title__container"${_scopeId3}><h3 class="text-center text-white" style="${ssrRenderStyle({ "width": "100%" })}"${_scopeId3}>Новости компании</h3>`);
                            if (unref(article)["others"].length > 1) {
                              _push4(`<div class="d-flex justify-space-between align-center px-4" style="${ssrRenderStyle({ "width": "100%" })}"${_scopeId3}>`);
                              _push4(ssrRenderComponent(VBtn, {
                                flat: true,
                                ripple: false,
                                class: "article--button d-flex justify-start align-center px-0",
                                variant: "plain",
                                style: { "width": "fit-content", "height": "fit-content" },
                                onClick: ($event) => _ctx.$refs.articlesCarousel.previous()
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(SvgIcon), {
                                      path: unref(mdiArrowLeftThin),
                                      type: "mdi"
                                    }, null, _parent5, _scopeId4));
                                    _push5(`<span${_scopeId4}>Предыдущие</span>`);
                                  } else {
                                    return [
                                      createVNode(unref(SvgIcon), {
                                        path: unref(mdiArrowLeftThin),
                                        type: "mdi"
                                      }, null, 8, ["path"]),
                                      createVNode("span", null, "Предыдущие")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(VBtn, {
                                flat: true,
                                ripple: false,
                                class: "article--button d-flex justify-start align-center px-0",
                                style: { "width": "fit-content", "height": "fit-content" },
                                variant: "plain",
                                onClick: ($event) => _ctx.$refs.articlesCarousel.next()
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<span${_scopeId4}>Следующие</span>`);
                                    _push5(ssrRenderComponent(unref(SvgIcon), {
                                      path: unref(mdiArrowRightThin),
                                      type: "mdi"
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode("span", null, "Следующие"),
                                      createVNode(unref(SvgIcon), {
                                        path: unref(mdiArrowRightThin),
                                        type: "mdi"
                                      }, null, 8, ["path"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent4, _scopeId3));
                              _push4(`</div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div>`);
                            if (unref(article)["others"].length > 2) {
                              _push4(`<div style="${ssrRenderStyle({ "position": "relative" })}" class="w-full"${_scopeId3}><div style="${ssrRenderStyle({ "position": "absolute", "width": "200%", "left": "-50%" })}"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(VueperSlides), {
                                ref: "articlesCarousel",
                                arrows: false,
                                bullets: false,
                                "dragging-distance": 70,
                                gap: 3,
                                "slide-ratio": 1 / 4,
                                "visible-slides": 3,
                                class: "no-shadow mt-6",
                                "fixed-height": "600px",
                                "slide-multiple": ""
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<!--[-->`);
                                    ssrRenderList(_ctx.page["articles"], (item, index) => {
                                      _push5(ssrRenderComponent(unref(VueperSlide), {
                                        key: index,
                                        class: "pa-0"
                                      }, {
                                        content: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(ssrRenderComponent(ArticleCard, { article: item }, null, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              createVNode(ArticleCard, { article: item }, null, 8, ["article"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                    });
                                    _push5(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.page["articles"], (item, index) => {
                                        return openBlock(), createBlock(unref(VueperSlide), {
                                          key: index,
                                          class: "pa-0"
                                        }, {
                                          content: withCtx(() => [
                                            createVNode(ArticleCard, { article: item }, null, 8, ["article"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent4, _scopeId3));
                              _push4(`</div></div>`);
                            } else if (unref(article)["others"].length === 2) {
                              _push4(`<div style="${ssrRenderStyle({ "position": "relative" })}" class="w-full"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(VueperSlides), {
                                ref: "articlesCarousel",
                                arrows: false,
                                bullets: false,
                                "dragging-distance": 70,
                                class: "no-shadow",
                                "visible-slides": 2,
                                "slide-ratio": 1 / 4,
                                gap: 5,
                                "arrows-outside": false,
                                "fixed-height": "600px",
                                "slide-multiple": ""
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<!--[-->`);
                                    ssrRenderList(unref(article)["others"], (item, index) => {
                                      _push5(ssrRenderComponent(unref(VueperSlide), {
                                        key: index,
                                        class: "pa-0"
                                      }, {
                                        content: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(ssrRenderComponent(ArticleCard, { article: item }, null, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              createVNode(ArticleCard, { article: item }, null, 8, ["article"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                    });
                                    _push5(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(article)["others"], (item, index) => {
                                        return openBlock(), createBlock(unref(VueperSlide), {
                                          key: index,
                                          class: "pa-0"
                                        }, {
                                          content: withCtx(() => [
                                            createVNode(ArticleCard, { article: item }, null, 8, ["article"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent4, _scopeId3));
                              _push4(`</div>`);
                            } else {
                              _push4(`<div style="${ssrRenderStyle({ "position": "relative" })}" class="d-flex justify-center align-center w-full mt-8"${_scopeId3}>`);
                              _push4(ssrRenderComponent(ArticleCard, {
                                article: unref(article)["others"][0]
                              }, null, _parent4, _scopeId3));
                              _push4(`</div>`);
                            }
                          } else {
                            return [
                              createVNode("div", { class: "title__container" }, [
                                createVNode("h3", {
                                  class: "text-center text-white",
                                  style: { "width": "100%" }
                                }, "Новости компании"),
                                unref(article)["others"].length > 1 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "d-flex justify-space-between align-center px-4",
                                  style: { "width": "100%" }
                                }, [
                                  createVNode(VBtn, {
                                    flat: true,
                                    ripple: false,
                                    class: "article--button d-flex justify-start align-center px-0",
                                    variant: "plain",
                                    style: { "width": "fit-content", "height": "fit-content" },
                                    onClick: ($event) => _ctx.$refs.articlesCarousel.previous()
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(SvgIcon), {
                                        path: unref(mdiArrowLeftThin),
                                        type: "mdi"
                                      }, null, 8, ["path"]),
                                      createVNode("span", null, "Предыдущие")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(VBtn, {
                                    flat: true,
                                    ripple: false,
                                    class: "article--button d-flex justify-start align-center px-0",
                                    style: { "width": "fit-content", "height": "fit-content" },
                                    variant: "plain",
                                    onClick: ($event) => _ctx.$refs.articlesCarousel.next()
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Следующие"),
                                      createVNode(unref(SvgIcon), {
                                        path: unref(mdiArrowRightThin),
                                        type: "mdi"
                                      }, null, 8, ["path"])
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])) : createCommentVNode("", true)
                              ]),
                              unref(article)["others"].length > 2 ? (openBlock(), createBlock("div", {
                                key: 0,
                                style: { "position": "relative" },
                                class: "w-full"
                              }, [
                                createVNode("div", { style: { "position": "absolute", "width": "200%", "left": "-50%" } }, [
                                  createVNode(unref(VueperSlides), {
                                    ref: "articlesCarousel",
                                    arrows: false,
                                    bullets: false,
                                    "dragging-distance": 70,
                                    gap: 3,
                                    "slide-ratio": 1 / 4,
                                    "visible-slides": 3,
                                    class: "no-shadow mt-6",
                                    "fixed-height": "600px",
                                    "slide-multiple": ""
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.page["articles"], (item, index) => {
                                        return openBlock(), createBlock(unref(VueperSlide), {
                                          key: index,
                                          class: "pa-0"
                                        }, {
                                          content: withCtx(() => [
                                            createVNode(ArticleCard, { article: item }, null, 8, ["article"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 512)
                                ])
                              ])) : unref(article)["others"].length === 2 ? (openBlock(), createBlock("div", {
                                key: 1,
                                style: { "position": "relative" },
                                class: "w-full"
                              }, [
                                createVNode(unref(VueperSlides), {
                                  ref: "articlesCarousel",
                                  arrows: false,
                                  bullets: false,
                                  "dragging-distance": 70,
                                  class: "no-shadow",
                                  "visible-slides": 2,
                                  "slide-ratio": 1 / 4,
                                  gap: 5,
                                  "arrows-outside": false,
                                  "fixed-height": "600px",
                                  "slide-multiple": ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(article)["others"], (item, index) => {
                                      return openBlock(), createBlock(unref(VueperSlide), {
                                        key: index,
                                        class: "pa-0"
                                      }, {
                                        content: withCtx(() => [
                                          createVNode(ArticleCard, { article: item }, null, 8, ["article"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 512)
                              ])) : (openBlock(), createBlock("div", {
                                key: 2,
                                style: { "position": "relative" },
                                class: "d-flex justify-center align-center w-full mt-8"
                              }, [
                                createVNode(ArticleCard, {
                                  article: unref(article)["others"][0]
                                }, null, 8, ["article"])
                              ]))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VCol, {
                          cols: "12",
                          class: "d-flex justify-start flex-column d-lg-block",
                          style: { "position": "relative", "min-height": "770px" }
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "title__container" }, [
                              createVNode("h3", {
                                class: "text-center text-white",
                                style: { "width": "100%" }
                              }, "Новости компании"),
                              unref(article)["others"].length > 1 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "d-flex justify-space-between align-center px-4",
                                style: { "width": "100%" }
                              }, [
                                createVNode(VBtn, {
                                  flat: true,
                                  ripple: false,
                                  class: "article--button d-flex justify-start align-center px-0",
                                  variant: "plain",
                                  style: { "width": "fit-content", "height": "fit-content" },
                                  onClick: ($event) => _ctx.$refs.articlesCarousel.previous()
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(SvgIcon), {
                                      path: unref(mdiArrowLeftThin),
                                      type: "mdi"
                                    }, null, 8, ["path"]),
                                    createVNode("span", null, "Предыдущие")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VBtn, {
                                  flat: true,
                                  ripple: false,
                                  class: "article--button d-flex justify-start align-center px-0",
                                  style: { "width": "fit-content", "height": "fit-content" },
                                  variant: "plain",
                                  onClick: ($event) => _ctx.$refs.articlesCarousel.next()
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Следующие"),
                                    createVNode(unref(SvgIcon), {
                                      path: unref(mdiArrowRightThin),
                                      type: "mdi"
                                    }, null, 8, ["path"])
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])) : createCommentVNode("", true)
                            ]),
                            unref(article)["others"].length > 2 ? (openBlock(), createBlock("div", {
                              key: 0,
                              style: { "position": "relative" },
                              class: "w-full"
                            }, [
                              createVNode("div", { style: { "position": "absolute", "width": "200%", "left": "-50%" } }, [
                                createVNode(unref(VueperSlides), {
                                  ref: "articlesCarousel",
                                  arrows: false,
                                  bullets: false,
                                  "dragging-distance": 70,
                                  gap: 3,
                                  "slide-ratio": 1 / 4,
                                  "visible-slides": 3,
                                  class: "no-shadow mt-6",
                                  "fixed-height": "600px",
                                  "slide-multiple": ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.page["articles"], (item, index) => {
                                      return openBlock(), createBlock(unref(VueperSlide), {
                                        key: index,
                                        class: "pa-0"
                                      }, {
                                        content: withCtx(() => [
                                          createVNode(ArticleCard, { article: item }, null, 8, ["article"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 512)
                              ])
                            ])) : unref(article)["others"].length === 2 ? (openBlock(), createBlock("div", {
                              key: 1,
                              style: { "position": "relative" },
                              class: "w-full"
                            }, [
                              createVNode(unref(VueperSlides), {
                                ref: "articlesCarousel",
                                arrows: false,
                                bullets: false,
                                "dragging-distance": 70,
                                class: "no-shadow",
                                "visible-slides": 2,
                                "slide-ratio": 1 / 4,
                                gap: 5,
                                "arrows-outside": false,
                                "fixed-height": "600px",
                                "slide-multiple": ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(article)["others"], (item, index) => {
                                    return openBlock(), createBlock(unref(VueperSlide), {
                                      key: index,
                                      class: "pa-0"
                                    }, {
                                      content: withCtx(() => [
                                        createVNode(ArticleCard, { article: item }, null, 8, ["article"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              }, 512)
                            ])) : (openBlock(), createBlock("div", {
                              key: 2,
                              style: { "position": "relative" },
                              class: "d-flex justify-center align-center w-full mt-8"
                            }, [
                              createVNode(ArticleCard, {
                                article: unref(article)["others"][0]
                              }, null, 8, ["article"])
                            ]))
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(VRow, { class: "index-page__articles-container page__padding bg-primary" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VCol, {
                        cols: "12",
                        class: "d-flex justify-start flex-column d-lg-block"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="title__container"${_scopeId3}>`);
                            _push4(ssrRenderComponent(VBtn, {
                              flat: true,
                              height: 13,
                              ripple: false,
                              class: "article--button d-flex justify-start align-center",
                              variant: "plain",
                              onClick: ($event) => _ctx.$refs.articlesCarousel.previous()
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(SvgIcon), {
                                    path: unref(mdiArrowLeftThin),
                                    type: "mdi"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span${_scopeId4}>Предыдущие</span>`);
                                } else {
                                  return [
                                    createVNode(unref(SvgIcon), {
                                      path: unref(mdiArrowLeftThin),
                                      type: "mdi"
                                    }, null, 8, ["path"]),
                                    createVNode("span", null, "Предыдущие")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`<h3 class="text-center text-white"${_scopeId3}>Новости компании</h3>`);
                            _push4(ssrRenderComponent(VBtn, {
                              flat: true,
                              height: 13,
                              ripple: false,
                              class: "article--button d-flex justify-start align-center",
                              variant: "plain",
                              onClick: ($event) => _ctx.$refs.articlesCarousel.next()
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span${_scopeId4}>Следующие</span>`);
                                  _push5(ssrRenderComponent(unref(SvgIcon), {
                                    path: unref(mdiArrowRightThin),
                                    type: "mdi"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode("span", null, "Следующие"),
                                    createVNode(unref(SvgIcon), {
                                      path: unref(mdiArrowRightThin),
                                      type: "mdi"
                                    }, null, 8, ["path"])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                            _push4(ssrRenderComponent(unref(VueperSlides), {
                              ref: "articlesCarousel",
                              arrows: false,
                              bullets: false,
                              "dragging-distance": 30,
                              gap: unref(xl) ? 1 : 3,
                              "slide-ratio": 1 / 4,
                              "visible-slides": unref(xl) ? 7 : 3,
                              class: "no-shadow mt-6",
                              "fixed-height": "567px",
                              "slide-multiple": ""
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(unref(article)["others"], (item, index) => {
                                    _push5(ssrRenderComponent(unref(VueperSlide), {
                                      key: index,
                                      class: "pa-0"
                                    }, {
                                      content: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(ArticleCard, { article: item }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(ArticleCard, { article: item }, null, 8, ["article"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(article)["others"], (item, index) => {
                                      return openBlock(), createBlock(unref(VueperSlide), {
                                        key: index,
                                        class: "pa-0"
                                      }, {
                                        content: withCtx(() => [
                                          createVNode(ArticleCard, { article: item }, null, 8, ["article"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode("div", { class: "title__container" }, [
                                createVNode(VBtn, {
                                  flat: true,
                                  height: 13,
                                  ripple: false,
                                  class: "article--button d-flex justify-start align-center",
                                  variant: "plain",
                                  onClick: ($event) => _ctx.$refs.articlesCarousel.previous()
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(SvgIcon), {
                                      path: unref(mdiArrowLeftThin),
                                      type: "mdi"
                                    }, null, 8, ["path"]),
                                    createVNode("span", null, "Предыдущие")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode("h3", { class: "text-center text-white" }, "Новости компании"),
                                createVNode(VBtn, {
                                  flat: true,
                                  height: 13,
                                  ripple: false,
                                  class: "article--button d-flex justify-start align-center",
                                  variant: "plain",
                                  onClick: ($event) => _ctx.$refs.articlesCarousel.next()
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Следующие"),
                                    createVNode(unref(SvgIcon), {
                                      path: unref(mdiArrowRightThin),
                                      type: "mdi"
                                    }, null, 8, ["path"])
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              createVNode(unref(VueperSlides), {
                                ref: "articlesCarousel",
                                arrows: false,
                                bullets: false,
                                "dragging-distance": 30,
                                gap: unref(xl) ? 1 : 3,
                                "slide-ratio": 1 / 4,
                                "visible-slides": unref(xl) ? 7 : 3,
                                class: "no-shadow mt-6",
                                "fixed-height": "567px",
                                "slide-multiple": ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(article)["others"], (item, index) => {
                                    return openBlock(), createBlock(unref(VueperSlide), {
                                      key: index,
                                      class: "pa-0"
                                    }, {
                                      content: withCtx(() => [
                                        createVNode(ArticleCard, { article: item }, null, 8, ["article"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["gap", "visible-slides"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VCol, {
                          cols: "12",
                          class: "d-flex justify-start flex-column d-lg-block"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "title__container" }, [
                              createVNode(VBtn, {
                                flat: true,
                                height: 13,
                                ripple: false,
                                class: "article--button d-flex justify-start align-center",
                                variant: "plain",
                                onClick: ($event) => _ctx.$refs.articlesCarousel.previous()
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(SvgIcon), {
                                    path: unref(mdiArrowLeftThin),
                                    type: "mdi"
                                  }, null, 8, ["path"]),
                                  createVNode("span", null, "Предыдущие")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode("h3", { class: "text-center text-white" }, "Новости компании"),
                              createVNode(VBtn, {
                                flat: true,
                                height: 13,
                                ripple: false,
                                class: "article--button d-flex justify-start align-center",
                                variant: "plain",
                                onClick: ($event) => _ctx.$refs.articlesCarousel.next()
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Следующие"),
                                  createVNode(unref(SvgIcon), {
                                    path: unref(mdiArrowRightThin),
                                    type: "mdi"
                                  }, null, 8, ["path"])
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            createVNode(unref(VueperSlides), {
                              ref: "articlesCarousel",
                              arrows: false,
                              bullets: false,
                              "dragging-distance": 30,
                              gap: unref(xl) ? 1 : 3,
                              "slide-ratio": 1 / 4,
                              "visible-slides": unref(xl) ? 7 : 3,
                              class: "no-shadow mt-6",
                              "fixed-height": "567px",
                              "slide-multiple": ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(article)["others"], (item, index) => {
                                  return openBlock(), createBlock(unref(VueperSlide), {
                                    key: index,
                                    class: "pa-0"
                                  }, {
                                    content: withCtx(() => [
                                      createVNode(ArticleCard, { article: item }, null, 8, ["article"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["gap", "visible-slides"])
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(VRow, { class: "pa-0 ma-0" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    class: "single-product__container page__padding"
                  }, {
                    default: withCtx(() => [
                      createVNode("article", {
                        innerHTML: unref(article).article.description
                      }, null, 8, ["innerHTML"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              unref(article)["others"].length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                unref(mobile) ? (openBlock(), createBlock(VRow, {
                  key: 0,
                  class: "index-page__articles-container page__padding bg-primary"
                }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      class: "d-flex justify-start flex-column d-lg-block",
                      style: { "position": "relative", "min-height": "770px" }
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "title__container" }, [
                          createVNode("h3", {
                            class: "text-center text-white",
                            style: { "width": "100%" }
                          }, "Новости компании"),
                          unref(article)["others"].length > 1 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "d-flex justify-space-between align-center px-4",
                            style: { "width": "100%" }
                          }, [
                            createVNode(VBtn, {
                              flat: true,
                              ripple: false,
                              class: "article--button d-flex justify-start align-center px-0",
                              variant: "plain",
                              style: { "width": "fit-content", "height": "fit-content" },
                              onClick: ($event) => _ctx.$refs.articlesCarousel.previous()
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(SvgIcon), {
                                  path: unref(mdiArrowLeftThin),
                                  type: "mdi"
                                }, null, 8, ["path"]),
                                createVNode("span", null, "Предыдущие")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              flat: true,
                              ripple: false,
                              class: "article--button d-flex justify-start align-center px-0",
                              style: { "width": "fit-content", "height": "fit-content" },
                              variant: "plain",
                              onClick: ($event) => _ctx.$refs.articlesCarousel.next()
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Следующие"),
                                createVNode(unref(SvgIcon), {
                                  path: unref(mdiArrowRightThin),
                                  type: "mdi"
                                }, null, 8, ["path"])
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])) : createCommentVNode("", true)
                        ]),
                        unref(article)["others"].length > 2 ? (openBlock(), createBlock("div", {
                          key: 0,
                          style: { "position": "relative" },
                          class: "w-full"
                        }, [
                          createVNode("div", { style: { "position": "absolute", "width": "200%", "left": "-50%" } }, [
                            createVNode(unref(VueperSlides), {
                              ref: "articlesCarousel",
                              arrows: false,
                              bullets: false,
                              "dragging-distance": 70,
                              gap: 3,
                              "slide-ratio": 1 / 4,
                              "visible-slides": 3,
                              class: "no-shadow mt-6",
                              "fixed-height": "600px",
                              "slide-multiple": ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.page["articles"], (item, index) => {
                                  return openBlock(), createBlock(unref(VueperSlide), {
                                    key: index,
                                    class: "pa-0"
                                  }, {
                                    content: withCtx(() => [
                                      createVNode(ArticleCard, { article: item }, null, 8, ["article"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            }, 512)
                          ])
                        ])) : unref(article)["others"].length === 2 ? (openBlock(), createBlock("div", {
                          key: 1,
                          style: { "position": "relative" },
                          class: "w-full"
                        }, [
                          createVNode(unref(VueperSlides), {
                            ref: "articlesCarousel",
                            arrows: false,
                            bullets: false,
                            "dragging-distance": 70,
                            class: "no-shadow",
                            "visible-slides": 2,
                            "slide-ratio": 1 / 4,
                            gap: 5,
                            "arrows-outside": false,
                            "fixed-height": "600px",
                            "slide-multiple": ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(article)["others"], (item, index) => {
                                return openBlock(), createBlock(unref(VueperSlide), {
                                  key: index,
                                  class: "pa-0"
                                }, {
                                  content: withCtx(() => [
                                    createVNode(ArticleCard, { article: item }, null, 8, ["article"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          }, 512)
                        ])) : (openBlock(), createBlock("div", {
                          key: 2,
                          style: { "position": "relative" },
                          class: "d-flex justify-center align-center w-full mt-8"
                        }, [
                          createVNode(ArticleCard, {
                            article: unref(article)["others"][0]
                          }, null, 8, ["article"])
                        ]))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(VRow, {
                  key: 1,
                  class: "index-page__articles-container page__padding bg-primary"
                }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      class: "d-flex justify-start flex-column d-lg-block"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "title__container" }, [
                          createVNode(VBtn, {
                            flat: true,
                            height: 13,
                            ripple: false,
                            class: "article--button d-flex justify-start align-center",
                            variant: "plain",
                            onClick: ($event) => _ctx.$refs.articlesCarousel.previous()
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(SvgIcon), {
                                path: unref(mdiArrowLeftThin),
                                type: "mdi"
                              }, null, 8, ["path"]),
                              createVNode("span", null, "Предыдущие")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode("h3", { class: "text-center text-white" }, "Новости компании"),
                          createVNode(VBtn, {
                            flat: true,
                            height: 13,
                            ripple: false,
                            class: "article--button d-flex justify-start align-center",
                            variant: "plain",
                            onClick: ($event) => _ctx.$refs.articlesCarousel.next()
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Следующие"),
                              createVNode(unref(SvgIcon), {
                                path: unref(mdiArrowRightThin),
                                type: "mdi"
                              }, null, 8, ["path"])
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        createVNode(unref(VueperSlides), {
                          ref: "articlesCarousel",
                          arrows: false,
                          bullets: false,
                          "dragging-distance": 30,
                          gap: unref(xl) ? 1 : 3,
                          "slide-ratio": 1 / 4,
                          "visible-slides": unref(xl) ? 7 : 3,
                          class: "no-shadow mt-6",
                          "fixed-height": "567px",
                          "slide-multiple": ""
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(article)["others"], (item, index) => {
                              return openBlock(), createBlock(unref(VueperSlide), {
                                key: index,
                                class: "pa-0"
                              }, {
                                content: withCtx(() => [
                                  createVNode(ArticleCard, { article: item }, null, 8, ["article"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["gap", "visible-slides"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }))
              ], 64)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/articles/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-7bb8b7c9.js.map
