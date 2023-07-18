import { computed, ref, watch, mergeProps, withCtx, createTextVNode, openBlock, createBlock, Fragment, createVNode, createCommentVNode, useSSRContext } from "vue";
import "hookable";
import { c as clearError } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderComponent } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { V as VApp, H as HeaderComponent, a as VMain, F as FooterComponent } from "./VMain-c5e6f681.js";
import { u as useCommonStore } from "./forwardRefs-911d47c7.js";
import { u as useHeaderStore } from "./header-2846e1cc.js";
import { V as VContainer, a as VRow } from "./VRow-30a22c26.js";
import { V as VCol } from "./VCol-b511b50b.js";
import { V as VBtn } from "./VBtn-a44162c6.js";
import { V as VImg } from "./index-42cff7c0.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "h3";
import "ufo";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "cookie-es";
import "ohash";
import "qs";
import "vue-3-breadcrumbs";
import "pinia-plugin-persistedstate";
import "lodash";
import "./svg-icon-b3207ad1.js";
import "@mdi/js";
import "./tag-eb37962f.js";
import "./index-b833480a.js";
import "./lazy-3ff85225.js";
import "./VDivider-26dc5a7b.js";
import "./asyncData-c2a94982.js";
const _sfc_main = {
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const headerStore = useHeaderStore();
    headerStore.setHeader("Страница не найдена");
    const route = useRoute();
    const name = computed(() => {
      return route.name;
    });
    const fullPath = computed(() => {
      return route.fullPath;
    });
    const commonStore = useCommonStore();
    const result = ref({});
    commonStore.getHeader().then((response) => {
      result.value = response.data.value;
    });
    watch(fullPath, (val) => {
      commonStore.getHeader();
    }, { immediate: true });
    const paddingClass = computed(() => {
      return name.value === "index" ? "" : "pa-0";
    });
    const phones = computed(() => {
      return commonStore.getPhones;
    });
    const headerMenu = computed(() => {
      return commonStore.getHeaderMenu.map((item) => {
        if (item.key) {
          return {
            title: item.title,
            submenu: result.value["products_links"]
          };
        }
        if (Object.hasOwn(item, "submenu")) {
          return {
            title: item.title,
            submenu: item.submenu
          };
        }
        return {
          title: item.title,
          route: item.route
        };
      });
    });
    const footerMenu = computed(() => {
      return commonStore.getFooterMenu;
    });
    const networks = computed(() => {
      return commonStore.getNetworks;
    });
    const handleError = () => clearError({ redirect: "/" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, mergeProps({ class: "default__layout" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HeaderComponent, {
              menu: headerMenu.value,
              phones: phones.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, { class: paddingClass.value }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, {
                    fluid: true,
                    class: "d-block pa-0 ma-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { class: "pa-0 ma-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "d-flex flex-column align-center justify-center page__padding py-16",
                                style: { "row-gap": "40px" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (__props.error.statusCode === 404 || "404") {
                                      _push6(`<!--[--><p${_scopeId5}>Страница, на которую вы перешли была удалена, либо отсутствует. Возможно ссылка устарела либо введена неверно. Вернитесь на `);
                                      _push6(ssrRenderComponent(VBtn, {
                                        variant: "plain",
                                        ripple: false,
                                        color: "secondary",
                                        class: "px-0",
                                        onClick: handleError
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`главную страницу `);
                                          } else {
                                            return [
                                              createTextVNode("главную страницу ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(` либо свяжитесь с нами по телефонам в шапке сайта. </p>`);
                                      _push6(ssrRenderComponent(VImg, {
                                        "max-width": "75%",
                                        src: "/404.svg"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`<!--]-->`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      __props.error.statusCode === 404 || "404" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                        createVNode("p", null, [
                                          createTextVNode("Страница, на которую вы перешли была удалена, либо отсутствует. Возможно ссылка устарела либо введена неверно. Вернитесь на "),
                                          createVNode(VBtn, {
                                            variant: "plain",
                                            ripple: false,
                                            color: "secondary",
                                            class: "px-0",
                                            onClick: handleError
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("главную страницу ")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" либо свяжитесь с нами по телефонам в шапке сайта. ")
                                        ]),
                                        createVNode(VImg, {
                                          "max-width": "75%",
                                          src: "/404.svg"
                                        })
                                      ], 64)) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "d-flex flex-column align-center justify-center page__padding py-16",
                                  style: { "row-gap": "40px" }
                                }, {
                                  default: withCtx(() => [
                                    __props.error.statusCode === 404 || "404" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createVNode("p", null, [
                                        createTextVNode("Страница, на которую вы перешли была удалена, либо отсутствует. Возможно ссылка устарела либо введена неверно. Вернитесь на "),
                                        createVNode(VBtn, {
                                          variant: "plain",
                                          ripple: false,
                                          color: "secondary",
                                          class: "px-0",
                                          onClick: handleError
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("главную страницу ")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" либо свяжитесь с нами по телефонам в шапке сайта. ")
                                      ]),
                                      createVNode(VImg, {
                                        "max-width": "75%",
                                        src: "/404.svg"
                                      })
                                    ], 64)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, { class: "pa-0 ma-0" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                class: "d-flex flex-column align-center justify-center page__padding py-16",
                                style: { "row-gap": "40px" }
                              }, {
                                default: withCtx(() => [
                                  __props.error.statusCode === 404 || "404" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createVNode("p", null, [
                                      createTextVNode("Страница, на которую вы перешли была удалена, либо отсутствует. Возможно ссылка устарела либо введена неверно. Вернитесь на "),
                                      createVNode(VBtn, {
                                        variant: "plain",
                                        ripple: false,
                                        color: "secondary",
                                        class: "px-0",
                                        onClick: handleError
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("главную страницу ")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" либо свяжитесь с нами по телефонам в шапке сайта. ")
                                    ]),
                                    createVNode(VImg, {
                                      "max-width": "75%",
                                      src: "/404.svg"
                                    })
                                  ], 64)) : createCommentVNode("", true)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, {
                      fluid: true,
                      class: "d-block pa-0 ma-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, { class: "pa-0 ma-0" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              class: "d-flex flex-column align-center justify-center page__padding py-16",
                              style: { "row-gap": "40px" }
                            }, {
                              default: withCtx(() => [
                                __props.error.statusCode === 404 || "404" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createVNode("p", null, [
                                    createTextVNode("Страница, на которую вы перешли была удалена, либо отсутствует. Возможно ссылка устарела либо введена неверно. Вернитесь на "),
                                    createVNode(VBtn, {
                                      variant: "plain",
                                      ripple: false,
                                      color: "secondary",
                                      class: "px-0",
                                      onClick: handleError
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("главную страницу ")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" либо свяжитесь с нами по телефонам в шапке сайта. ")
                                  ]),
                                  createVNode(VImg, {
                                    "max-width": "75%",
                                    src: "/404.svg"
                                  })
                                ], 64)) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(FooterComponent, {
              menu: footerMenu.value,
              networks: networks.value,
              phones: phones.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HeaderComponent, {
                menu: headerMenu.value,
                phones: phones.value
              }, null, 8, ["menu", "phones"]),
              createVNode(VMain, { class: paddingClass.value }, {
                default: withCtx(() => [
                  createVNode(VContainer, {
                    fluid: true,
                    class: "d-block pa-0 ma-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, { class: "pa-0 ma-0" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            class: "d-flex flex-column align-center justify-center page__padding py-16",
                            style: { "row-gap": "40px" }
                          }, {
                            default: withCtx(() => [
                              __props.error.statusCode === 404 || "404" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createVNode("p", null, [
                                  createTextVNode("Страница, на которую вы перешли была удалена, либо отсутствует. Возможно ссылка устарела либо введена неверно. Вернитесь на "),
                                  createVNode(VBtn, {
                                    variant: "plain",
                                    ripple: false,
                                    color: "secondary",
                                    class: "px-0",
                                    onClick: handleError
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("главную страницу ")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" либо свяжитесь с нами по телефонам в шапке сайта. ")
                                ]),
                                createVNode(VImg, {
                                  "max-width": "75%",
                                  src: "/404.svg"
                                })
                              ], 64)) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(FooterComponent, {
                menu: footerMenu.value,
                networks: networks.value,
                phones: phones.value
              }, null, 8, ["menu", "networks", "phones"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _sfc_main$1 = _sfc_main;
export {
  _sfc_main$1 as default
};
//# sourceMappingURL=error-component-e271ce80.js.map
