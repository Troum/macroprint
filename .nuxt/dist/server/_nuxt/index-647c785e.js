import { computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext, unref, withAsyncContext, openBlock, createBlock, Fragment, renderList } from "vue";
import "hookable";
import { u as useServerSeoMeta } from "./index-e31e4a76.js";
import { u as useFetch } from "./fetch-e0645a22.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { u as useHeaderStore } from "./header-2846e1cc.js";
import truncate from "truncate-html";
import { _ as _export_sfc, Y as useRuntimeConfig } from "../server.mjs";
import { V as VCard, b as VCardTitle, c as VCardText } from "./VCard-2fc4bd81.js";
import { r as VAvatar, V as VImg } from "./index-42cff7c0.js";
import { V as VBtn } from "./VBtn-a44162c6.js";
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
const RequirementCard_vue_vue_type_style_index_0_scoped_11985d1e_lang = "";
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
const FileCard_vue_vue_type_style_index_0_scoped_104e5327_lang = "";
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
      description: () => "Первая в Беларуси фабрика широкоформатной печати!",
      ogDescription: () => "Первая в Беларуси фабрика широкоформатной печати!",
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
                        _push4(`<h2 class="text-center"${_scopeId3}>Библиотека файлов</h2><h3 class="text-center" style="${ssrRenderStyle({ "font-size": "10px", "line-height": "13px" })}"${_scopeId3}> мануалы и учебники с техническими требованиями </h3>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-center" }, "Библиотека файлов"),
                          createVNode("h3", {
                            class: "text-center",
                            style: { "font-size": "10px", "line-height": "13px" }
                          }, " мануалы и учебники с техническими требованиями ")
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
                        createVNode("h2", { class: "text-center" }, "Библиотека файлов"),
                        createVNode("h3", {
                          class: "text-center",
                          style: { "font-size": "10px", "line-height": "13px" }
                        }, " мануалы и учебники с техническими требованиями ")
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
                      createVNode("h2", { class: "text-center" }, "Библиотека файлов"),
                      createVNode("h3", {
                        class: "text-center",
                        style: { "font-size": "10px", "line-height": "13px" }
                      }, " мануалы и учебники с техническими требованиями ")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-647c785e.js.map
