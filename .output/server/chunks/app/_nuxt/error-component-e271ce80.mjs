import { useSSRContext, computed, ref, watch, mergeProps, withCtx, createTextVNode, openBlock, createBlock, Fragment, createVNode, createCommentVNode } from 'vue';
import { c as clearError } from '../server.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { V as VApp, H as HeaderComponent, a as VMain, F as FooterComponent } from './VMain-c5e6f681.mjs';
import { u as useCommonStore } from './forwardRefs-911d47c7.mjs';
import { u as useHeaderStore } from './header-2846e1cc.mjs';
import { V as VContainer, a as VRow } from './VRow-30a22c26.mjs';
import { V as VCol } from './VCol-b511b50b.mjs';
import { V as VBtn } from './VBtn-a44162c6.mjs';
import { i as VImg } from './index-42cff7c0.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'cookie-es';
import 'ohash';
import 'qs';
import 'vue-3-breadcrumbs';
import 'pinia-plugin-persistedstate';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'defu';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import 'lodash';
import './svg-icon-b3207ad1.mjs';
import '@mdi/js';
import './tag-eb37962f.mjs';
import './index-b833480a.mjs';
import './lazy-3ff85225.mjs';
import './VDivider-26dc5a7b.mjs';
import './asyncData-c2a94982.mjs';

const _sfc_main = {
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const headerStore = useHeaderStore();
    headerStore.setHeader("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430");
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
                                      _push6(`<!--[--><p${_scopeId5}>\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u043F\u0435\u0440\u0435\u0448\u043B\u0438 \u0431\u044B\u043B\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430, \u043B\u0438\u0431\u043E \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0441\u0441\u044B\u043B\u043A\u0430 \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0430 \u043B\u0438\u0431\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u0430 \u043D\u0435\u0432\u0435\u0440\u043D\u043E. \u0412\u0435\u0440\u043D\u0438\u0442\u0435\u0441\u044C \u043D\u0430 `);
                                      _push6(ssrRenderComponent(VBtn, {
                                        variant: "plain",
                                        ripple: false,
                                        color: "secondary",
                                        class: "px-0",
                                        onClick: handleError
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 `);
                                          } else {
                                            return [
                                              createTextVNode("\u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(` \u043B\u0438\u0431\u043E \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\u043C \u0432 \u0448\u0430\u043F\u043A\u0435 \u0441\u0430\u0439\u0442\u0430. </p>`);
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
                                          createTextVNode("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u043F\u0435\u0440\u0435\u0448\u043B\u0438 \u0431\u044B\u043B\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430, \u043B\u0438\u0431\u043E \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0441\u0441\u044B\u043B\u043A\u0430 \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0430 \u043B\u0438\u0431\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u0430 \u043D\u0435\u0432\u0435\u0440\u043D\u043E. \u0412\u0435\u0440\u043D\u0438\u0442\u0435\u0441\u044C \u043D\u0430 "),
                                          createVNode(VBtn, {
                                            variant: "plain",
                                            ripple: false,
                                            color: "secondary",
                                            class: "px-0",
                                            onClick: handleError
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 ")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" \u043B\u0438\u0431\u043E \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\u043C \u0432 \u0448\u0430\u043F\u043A\u0435 \u0441\u0430\u0439\u0442\u0430. ")
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
                                        createTextVNode("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u043F\u0435\u0440\u0435\u0448\u043B\u0438 \u0431\u044B\u043B\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430, \u043B\u0438\u0431\u043E \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0441\u0441\u044B\u043B\u043A\u0430 \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0430 \u043B\u0438\u0431\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u0430 \u043D\u0435\u0432\u0435\u0440\u043D\u043E. \u0412\u0435\u0440\u043D\u0438\u0442\u0435\u0441\u044C \u043D\u0430 "),
                                        createVNode(VBtn, {
                                          variant: "plain",
                                          ripple: false,
                                          color: "secondary",
                                          class: "px-0",
                                          onClick: handleError
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 ")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" \u043B\u0438\u0431\u043E \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\u043C \u0432 \u0448\u0430\u043F\u043A\u0435 \u0441\u0430\u0439\u0442\u0430. ")
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
                                      createTextVNode("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u043F\u0435\u0440\u0435\u0448\u043B\u0438 \u0431\u044B\u043B\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430, \u043B\u0438\u0431\u043E \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0441\u0441\u044B\u043B\u043A\u0430 \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0430 \u043B\u0438\u0431\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u0430 \u043D\u0435\u0432\u0435\u0440\u043D\u043E. \u0412\u0435\u0440\u043D\u0438\u0442\u0435\u0441\u044C \u043D\u0430 "),
                                      createVNode(VBtn, {
                                        variant: "plain",
                                        ripple: false,
                                        color: "secondary",
                                        class: "px-0",
                                        onClick: handleError
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 ")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" \u043B\u0438\u0431\u043E \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\u043C \u0432 \u0448\u0430\u043F\u043A\u0435 \u0441\u0430\u0439\u0442\u0430. ")
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
                                    createTextVNode("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u043F\u0435\u0440\u0435\u0448\u043B\u0438 \u0431\u044B\u043B\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430, \u043B\u0438\u0431\u043E \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0441\u0441\u044B\u043B\u043A\u0430 \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0430 \u043B\u0438\u0431\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u0430 \u043D\u0435\u0432\u0435\u0440\u043D\u043E. \u0412\u0435\u0440\u043D\u0438\u0442\u0435\u0441\u044C \u043D\u0430 "),
                                    createVNode(VBtn, {
                                      variant: "plain",
                                      ripple: false,
                                      color: "secondary",
                                      class: "px-0",
                                      onClick: handleError
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 ")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" \u043B\u0438\u0431\u043E \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\u043C \u0432 \u0448\u0430\u043F\u043A\u0435 \u0441\u0430\u0439\u0442\u0430. ")
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
                                  createTextVNode("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u043F\u0435\u0440\u0435\u0448\u043B\u0438 \u0431\u044B\u043B\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430, \u043B\u0438\u0431\u043E \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0441\u0441\u044B\u043B\u043A\u0430 \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0430 \u043B\u0438\u0431\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u0430 \u043D\u0435\u0432\u0435\u0440\u043D\u043E. \u0412\u0435\u0440\u043D\u0438\u0442\u0435\u0441\u044C \u043D\u0430 "),
                                  createVNode(VBtn, {
                                    variant: "plain",
                                    ripple: false,
                                    color: "secondary",
                                    class: "px-0",
                                    onClick: handleError
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 ")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" \u043B\u0438\u0431\u043E \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\u043C \u0432 \u0448\u0430\u043F\u043A\u0435 \u0441\u0430\u0439\u0442\u0430. ")
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

export { _sfc_main$1 as default };
//# sourceMappingURL=error-component-e271ce80.mjs.map
