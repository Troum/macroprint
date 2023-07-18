import { withAsyncContext, computed, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, createTextVNode, toDisplayString, unref } from 'vue';
import { u as useServerSeoMeta } from './index-e31e4a76.mjs';
import { u as useFetch } from './fetch-e0645a22.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { u as useHeaderStore } from './header-2846e1cc.mjs';
import truncate from 'truncate-html';
import { _ as _export_sfc, Y as useRuntimeConfig } from '../server.mjs';
import { V as VCard, c as VCardTitle, a as VCardText } from './VCard-2fc4bd81.mjs';
import { h as VAvatar, i as VImg } from './index-42cff7c0.mjs';
import { V as VBtn } from './VBtn-a44162c6.mjs';
import { V as VContainer, a as VRow } from './VRow-30a22c26.mjs';
import { V as VCol } from './VCol-b511b50b.mjs';
import 'unhead';
import 'ohash';
import './asyncData-c2a94982.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import '@unhead/shared';
import 'vue-router';
import 'cookie-es';
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
import './tag-eb37962f.mjs';

const _sfc_main$2 = {
  __name: "RequirementCard",
  __ssrInlineRender: true,
  props: {
    requirement: {
      type: Object,
      default: {
        title: null,
        image: null,
        description: null
      }
    }
  },
  setup(__props) {
    const props = __props;
    const truncated = computed(() => {
      return truncate(props.requirement.description, 20, { byWords: true });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({
        elevation: 0,
        height: 175,
        class: "pa-0",
        color: "transparent",
        style: { "position": "relative" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, { class: "requirement--title text-primary px-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.requirement["title"])}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.requirement["title"]), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "requirement--description px-0" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardTitle, { class: "requirement--title text-primary px-0" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.requirement["title"]), 1)
                ]),
                _: 1
              }),
              createVNode(VCardText, {
                class: "requirement--description px-0",
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/RequirementCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const RequirementCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-11985d1e"]]);
const _sfc_main$1 = {
  __name: "FileCard",
  __ssrInlineRender: true,
  props: {
    file: {
      type: Object,
      default: {
        title: null,
        file: null
      }
    }
  },
  setup(__props) {
    const config = /* @__PURE__ */ useRuntimeConfig();
    const url = config.public["baseURL"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({
        elevation: 0,
        height: 120,
        class: "pa-0",
        color: "transparent",
        style: { "position": "relative" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "file__container" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VAvatar, {
                    class: "rounded-circle bg-primary",
                    size: 93
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VImg, {
                          "max-width": "27",
                          src: "/assets/images/vectors/file.svg"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VImg, {
                            "max-width": "27",
                            src: "/assets/images/vectors/file.svg"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardTitle, { class: "px-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          href: `${unref(url)}${__props.file["link"]}`,
                          ripple: false,
                          variant: "plain",
                          style: { "width": "max-content", "opacity": "1" },
                          class: "text-primary px-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="file--title" data-v-104e5327${_scopeId4}>${ssrInterpolate(__props.file["title"])}</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "file--title" }, toDisplayString(__props.file["title"]), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            href: `${unref(url)}${__props.file["link"]}`,
                            ripple: false,
                            variant: "plain",
                            style: { "width": "max-content", "opacity": "1" },
                            class: "text-primary px-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "file--title" }, toDisplayString(__props.file["title"]), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAvatar, {
                      class: "rounded-circle bg-primary",
                      size: 93
                    }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          "max-width": "27",
                          src: "/assets/images/vectors/file.svg"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCardTitle, { class: "px-0" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          href: `${unref(url)}${__props.file["link"]}`,
                          ripple: false,
                          variant: "plain",
                          style: { "width": "max-content", "opacity": "1" },
                          class: "text-primary px-0"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "file--title" }, toDisplayString(__props.file["title"]), 1)
                          ]),
                          _: 1
                        }, 8, ["href"])
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
              createVNode(VCardText, { class: "file__container" }, {
                default: withCtx(() => [
                  createVNode(VAvatar, {
                    class: "rounded-circle bg-primary",
                    size: 93
                  }, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        "max-width": "27",
                        src: "/assets/images/vectors/file.svg"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCardTitle, { class: "px-0" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        href: `${unref(url)}${__props.file["link"]}`,
                        ripple: false,
                        variant: "plain",
                        style: { "width": "max-content", "opacity": "1" },
                        class: "text-primary px-0"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "file--title" }, toDisplayString(__props.file["title"]), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/FileCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FileCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-104e5327"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const headerStore = useHeaderStore();
    const { data: result } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/requirements", {
      baseURL: "https://proxy.macroprint.site",
      method: "GET"
    }, "$00aZ8P9xAD")), __temp = await __temp, __restore(), __temp);
    const page = computed(() => {
      return result.value;
    });
    headerStore.setHeader(page.value["title"]);
    useServerSeoMeta({
      ogTitle: () => page.value["title"],
      title: () => page.value["title"],
      description: () => "\u041F\u0435\u0440\u0432\u0430\u044F \u0432 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438 \u0444\u0430\u0431\u0440\u0438\u043A\u0430 \u0448\u0438\u0440\u043E\u043A\u043E\u0444\u043E\u0440\u043C\u0430\u0442\u043D\u043E\u0439 \u043F\u0435\u0447\u0430\u0442\u0438!",
      ogDescription: () => "\u041F\u0435\u0440\u0432\u0430\u044F \u0432 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438 \u0444\u0430\u0431\u0440\u0438\u043A\u0430 \u0448\u0438\u0440\u043E\u043A\u043E\u0444\u043E\u0440\u043C\u0430\u0442\u043D\u043E\u0439 \u043F\u0435\u0447\u0430\u0442\u0438!",
      ogImage: () => "http://macroprint.by/img/mainLogo.png",
      ogUrl: () => "http://macroprint.by"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: true,
        class: "d-block pa-0 ma-0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { class: "pa-0 page__padding" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "py-16"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<article class="requirement__container"${_scopeId3}>${page.value.description}</article>`);
                      } else {
                        return [
                          createVNode("article", {
                            class: "requirement__container",
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
                      class: "py-16"
                    }, {
                      default: withCtx(() => [
                        createVNode("article", {
                          class: "requirement__container",
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
            _push2(ssrRenderComponent(VRow, {
              class: "pa-0 page__padding",
              style: { "background-color": "#f7f7f7" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "py-16 requirements__container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(page.value["requirements"], (requirement, index) => {
                          _push4(ssrRenderComponent(RequirementCard, { requirement }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(page.value["requirements"], (requirement, index) => {
                            return openBlock(), createBlock(RequirementCard, {
                              key: index,
                              requirement
                            }, null, 8, ["requirement"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      class: "py-16 requirements__container"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(page.value["requirements"], (requirement, index) => {
                          return openBlock(), createBlock(RequirementCard, {
                            key: index,
                            requirement
                          }, null, 8, ["requirement"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, {
              class: "pa-0 page__padding py-16",
              style: { "background-color": "#fff" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-center"${_scopeId3}>\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u0444\u0430\u0439\u043B\u043E\u0432</h2><h3 class="text-center" style="${ssrRenderStyle({ "font-size": "10px", "line-height": "13px" })}"${_scopeId3}> \u043C\u0430\u043D\u0443\u0430\u043B\u044B \u0438 \u0443\u0447\u0435\u0431\u043D\u0438\u043A\u0438 \u0441 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438 </h3>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-center" }, "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u0444\u0430\u0439\u043B\u043E\u0432"),
                          createVNode("h3", {
                            class: "text-center",
                            style: { "font-size": "10px", "line-height": "13px" }
                          }, " \u043C\u0430\u043D\u0443\u0430\u043B\u044B \u0438 \u0443\u0447\u0435\u0431\u043D\u0438\u043A\u0438 \u0441 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "requirement__files__container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(page.value["files"], (file, index) => {
                          _push4(ssrRenderComponent(FileCard, { file }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(page.value["files"], (file, index) => {
                            return openBlock(), createBlock(FileCard, {
                              key: index,
                              file
                            }, null, 8, ["file"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-center" }, "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u0444\u0430\u0439\u043B\u043E\u0432"),
                        createVNode("h3", {
                          class: "text-center",
                          style: { "font-size": "10px", "line-height": "13px" }
                        }, " \u043C\u0430\u043D\u0443\u0430\u043B\u044B \u0438 \u0443\u0447\u0435\u0431\u043D\u0438\u043A\u0438 \u0441 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "requirement__files__container"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(page.value["files"], (file, index) => {
                          return openBlock(), createBlock(FileCard, {
                            key: index,
                            file
                          }, null, 8, ["file"]);
                        }), 128))
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
              createVNode(VRow, { class: "pa-0 page__padding" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    class: "py-16"
                  }, {
                    default: withCtx(() => [
                      createVNode("article", {
                        class: "requirement__container",
                        innerHTML: page.value.description
                      }, null, 8, ["innerHTML"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, {
                class: "pa-0 page__padding",
                style: { "background-color": "#f7f7f7" }
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    class: "py-16 requirements__container"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(page.value["requirements"], (requirement, index) => {
                        return openBlock(), createBlock(RequirementCard, {
                          key: index,
                          requirement
                        }, null, 8, ["requirement"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, {
                class: "pa-0 page__padding py-16",
                style: { "background-color": "#fff" }
              }, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-center" }, "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u0444\u0430\u0439\u043B\u043E\u0432"),
                      createVNode("h3", {
                        class: "text-center",
                        style: { "font-size": "10px", "line-height": "13px" }
                      }, " \u043C\u0430\u043D\u0443\u0430\u043B\u044B \u0438 \u0443\u0447\u0435\u0431\u043D\u0438\u043A\u0438 \u0441 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "requirement__files__container"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(page.value["files"], (file, index) => {
                        return openBlock(), createBlock(FileCard, {
                          key: index,
                          file
                        }, null, 8, ["file"]);
                      }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/for-clients/requirements/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-647c785e.mjs.map
