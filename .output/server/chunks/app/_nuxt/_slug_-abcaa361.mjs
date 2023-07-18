import { _ as __nuxt_component_0 } from './nuxt-img-b3621699.mjs';
import { withAsyncContext, computed, mergeProps, withCtx, openBlock, createBlock, createVNode, Fragment, renderList, unref, toDisplayString, createCommentVNode, useSSRContext, createTextVNode } from 'vue';
import { u as useServerSeoMeta } from './index-e31e4a76.mjs';
import { u as useAsyncData } from './asyncData-c2a94982.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import _ from 'lodash';
import { S as SvgIcon } from './svg-icon-b3207ad1.mjs';
import { useRoute } from 'vue-router';
import { u as useHeaderStore } from './header-2846e1cc.mjs';
import { b as be, Z } from '../../vueperslides.es.mjs';
import { mdiChevronLeft, mdiChevronRight, mdiArrowLeftThin, mdiArrowRightThin } from '@mdi/js';
import truncate from 'truncate-html';
import { F as useDisplay, _ as _export_sfc } from '../server.mjs';
import { V as VCard, c as VCardTitle, d as VCardSubtitle, a as VCardText } from './VCard-2fc4bd81.mjs';
import { P as ProductCard } from './ProductCard-a17b46e5.mjs';
import { V as VContainer, a as VRow } from './VRow-30a22c26.mjs';
import { V as VCol } from './VCol-b511b50b.mjs';
import { V as VDivider } from './VDivider-26dc5a7b.mjs';
import { V as VBtn } from './VBtn-a44162c6.mjs';
import 'defu';
import 'ufo';
import 'unhead';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'h3';
import '@unhead/ssr';
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
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import './tag-eb37962f.mjs';
import './index-42cff7c0.mjs';

const _sfc_main$2 = {
  __name: "ExampleCard",
  __ssrInlineRender: true,
  props: {
    example: {
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
      return truncate(props.example.description, 8, { byWords: true });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0;
      _push(ssrRenderComponent(VCard, mergeProps({
        elevation: 0,
        height: 390,
        class: "pa-0",
        color: "transparent",
        style: { "position": "relative" }
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              provider: "strapi",
              height: 219,
              src: __props.example["image"],
              fit: "cover"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardTitle, { class: "example--title text-white px-0" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.example["title"])}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.example["title"]), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardSubtitle, {
              class: "px-0 text-secondary",
              style: { "opacity": "1" }
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.example["material"])}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.example["material"]), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "example--description px-0" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                provider: "strapi",
                height: 219,
                src: __props.example["image"],
                fit: "cover"
              }, null, 8, ["src"]),
              createVNode(VCardTitle, { class: "example--title text-white px-0" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.example["title"]), 1)
                ]),
                _: 1
              }),
              createVNode(VCardSubtitle, {
                class: "px-0 text-secondary",
                style: { "opacity": "1" }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.example["material"]), 1)
                ]),
                _: 1
              }),
              createVNode(VCardText, {
                class: "example--description px-0",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/ExampleCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ExampleCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e8d1494d"]]);
const _sfc_main$1 = {
  __name: "MaterialCard",
  __ssrInlineRender: true,
  props: {
    material: {
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
      return truncate(props.material["description"], 50, { byWords: true });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0;
      _push(ssrRenderComponent(VCard, mergeProps({
        elevation: 0,
        class: "pa-0",
        color: "white"
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              provider: "strapi",
              height: 200,
              src: __props.material["image"],
              fit: "cover"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardTitle, { class: "material--title primary--text" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.material["title"])}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.material["title"]), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "material--description" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                provider: "strapi",
                height: 200,
                src: __props.material["image"],
                fit: "cover"
              }, null, 8, ["src"]),
              createVNode(VCardTitle, { class: "material--title primary--text" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.material["title"]), 1)
                ]),
                _: 1
              }),
              createVNode(VCardText, {
                class: "material--description",
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/MaterialCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MaterialCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-004565fc"]]);
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const router = useRoute();
    const headerStore = useHeaderStore();
    const { data: result } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "result",
      () => $fetch(`https://proxy.macroprint.site/api/products/${useRoute().params.slug}`)
    )), __temp = await __temp, __restore(), __temp);
    const xl = computed(() => {
      return useDisplay().xlAndUp.value;
    });
    const mobile = computed(() => {
      return useDisplay().mdAndDown.value;
    });
    const width = computed(() => {
      return useDisplay().width.value;
    });
    const product = computed(() => {
      return result.value;
    });
    const hasMaterials = computed(() => {
      return !_.isEmpty(product.value["materials"]);
    });
    const hasExamples = computed(() => {
      return !_.isEmpty(product.value["examples"]);
    });
    useServerSeoMeta({
      title: product.value["title"],
      description: product.value["shortDescription"],
      ogTitle: product.value["title"],
      ogType: "website",
      ogUrl: router.fullPath,
      ogImage: product.value["image"],
      ogLocale: "ru_RU"
    });
    headerStore.setHeader(product.value["title"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0;
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: true,
        class: "d-block pa-0 ma-0"
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { class: "pa-0 ma-0" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "single-product__container page__padding"
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (mobile.value) {
                          _push4(ssrRenderComponent(_component_nuxt_img, {
                            alt: product.value.title,
                            provider: "strapi",
                            src: product.value.image,
                            fit: "cover",
                            width: width.value - 30,
                            height: "100%"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_component_nuxt_img, {
                            alt: product.value.title,
                            provider: "strapi",
                            src: product.value.image,
                            fit: "cover",
                            width: "540",
                            height: "540"
                          }, null, _parent4, _scopeId3));
                        }
                        _push4(`<div class="single-product__description"${_scopeId3}><article${_scopeId3}>${product.value.description}</article></div>`);
                      } else {
                        return [
                          mobile.value ? (openBlock(), createBlock(_component_nuxt_img, {
                            key: 0,
                            alt: product.value.title,
                            provider: "strapi",
                            src: product.value.image,
                            fit: "cover",
                            width: width.value - 30,
                            height: "100%"
                          }, null, 8, ["alt", "src", "width"])) : (openBlock(), createBlock(_component_nuxt_img, {
                            key: 1,
                            alt: product.value.title,
                            provider: "strapi",
                            src: product.value.image,
                            fit: "cover",
                            width: "540",
                            height: "540"
                          }, null, 8, ["alt", "src"])),
                          createVNode("div", { class: "single-product__description" }, [
                            createVNode("article", {
                              innerHTML: product.value.description
                            }, null, 8, ["innerHTML"])
                          ])
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
                        mobile.value ? (openBlock(), createBlock(_component_nuxt_img, {
                          key: 0,
                          alt: product.value.title,
                          provider: "strapi",
                          src: product.value.image,
                          fit: "cover",
                          width: width.value - 30,
                          height: "100%"
                        }, null, 8, ["alt", "src", "width"])) : (openBlock(), createBlock(_component_nuxt_img, {
                          key: 1,
                          alt: product.value.title,
                          provider: "strapi",
                          src: product.value.image,
                          fit: "cover",
                          width: "540",
                          height: "540"
                        }, null, 8, ["alt", "src"])),
                        createVNode("div", { class: "single-product__description" }, [
                          createVNode("article", {
                            innerHTML: product.value.description
                          }, null, 8, ["innerHTML"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (hasMaterials.value) {
              _push2(ssrRenderComponent(VRow, {
                class: "ma-0 pa-0",
                style: { "background-color": "#F7F7F7" }
              }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCol, {
                      cols: "12",
                      class: "single-product-materials__container page__padding ma-0"
                    }, {
                      default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(product.value["materials"], (material, index) => {
                            _push4(ssrRenderComponent(MaterialCard, { material }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(product.value["materials"], (material, index) => {
                              return openBlock(), createBlock(MaterialCard, {
                                key: index,
                                material
                              }, null, 8, ["material"]);
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
                        class: "single-product-materials__container page__padding ma-0"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(product.value["materials"], (material, index) => {
                            return openBlock(), createBlock(MaterialCard, {
                              key: index,
                              material
                            }, null, 8, ["material"]);
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
              _push2(`<!---->`);
            }
            if (hasExamples.value) {
              _push2(ssrRenderComponent(VRow, { class: "single-product-examples__container page__padding bg-primary ma-0" }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCol, {
                      cols: "12",
                      class: "ma-0 pa-0"
                    }, {
                      default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (mobile.value) {
                            _push4(`<div class="title__container"${_scopeId3}><div class="d-flex flex-column justify-center align-center" style="${ssrRenderStyle({ "row-gap": "15px" })}"${_scopeId3}><h2 class="text-center text-white"${_scopeId3}>\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u0440\u0430\u0431\u043E\u0442</h2>`);
                            _push4(ssrRenderComponent(VDivider, {
                              color: "secondary",
                              style: { "height": "1px", "width": "300px", "opacity": "1" }
                            }, null, _parent4, _scopeId3));
                            if (product.value["benefit"]) {
                              _push4(`<h3 class="text-center text-white text-uppercase"${_scopeId3}>${ssrInterpolate(product.value["benefit"])}</h3>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div><div class="d-flex align-center my-6"${_scopeId3}>`);
                            _push4(ssrRenderComponent(VBtn, {
                              flat: true,
                              height: 13,
                              ripple: false,
                              class: "example--button d-flex justify-start align-center",
                              variant: "plain",
                              onClick: ($event) => _ctx.$refs.examplesCarousel.previous()
                            }, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(SvgIcon), {
                                    size: "32",
                                    path: unref(mdiChevronLeft),
                                    type: "mdi"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(SvgIcon), {
                                      size: "32",
                                      path: unref(mdiChevronLeft),
                                      type: "mdi"
                                    }, null, 8, ["path"])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VBtn, {
                              flat: true,
                              height: 13,
                              ripple: false,
                              class: "example--button d-flex justify-start align-center",
                              variant: "plain",
                              onClick: ($event) => _ctx.$refs.examplesCarousel.next()
                            }, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(SvgIcon), {
                                    size: "32",
                                    path: unref(mdiChevronRight),
                                    type: "mdi"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(SvgIcon), {
                                      size: "32",
                                      path: unref(mdiChevronRight),
                                      type: "mdi"
                                    }, null, 8, ["path"])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`</div></div>`);
                          } else {
                            _push4(`<div class="title__container"${_scopeId3}>`);
                            _push4(ssrRenderComponent(VBtn, {
                              flat: true,
                              height: 13,
                              ripple: false,
                              class: "example--button d-flex justify-start align-center",
                              variant: "plain",
                              onClick: ($event) => _ctx.$refs.examplesCarousel.previous()
                            }, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(SvgIcon), {
                                    path: unref(mdiArrowLeftThin),
                                    type: "mdi"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span${_scopeId4}>\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435</span>`);
                                } else {
                                  return [
                                    createVNode(unref(SvgIcon), {
                                      path: unref(mdiArrowLeftThin),
                                      type: "mdi"
                                    }, null, 8, ["path"]),
                                    createVNode("span", null, "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`<div class="d-flex flex-column justify-center align-center" style="${ssrRenderStyle({ "row-gap": "15px" })}"${_scopeId3}><h2 class="text-center text-white"${_scopeId3}>\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u0440\u0430\u0431\u043E\u0442</h2>`);
                            _push4(ssrRenderComponent(VDivider, {
                              color: "secondary",
                              style: { "height": "1px", "width": "300px", "opacity": "1" }
                            }, null, _parent4, _scopeId3));
                            if (product.value["benefit"]) {
                              _push4(`<h3 class="text-center text-white text-uppercase"${_scopeId3}>${ssrInterpolate(product.value["benefit"])}</h3>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div>`);
                            _push4(ssrRenderComponent(VBtn, {
                              flat: true,
                              height: 13,
                              ripple: false,
                              class: "example--button d-flex justify-start align-center",
                              variant: "plain",
                              onClick: ($event) => _ctx.$refs.examplesCarousel.next()
                            }, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span${_scopeId4}>\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435</span>`);
                                  _push5(ssrRenderComponent(unref(SvgIcon), {
                                    path: unref(mdiArrowRightThin),
                                    type: "mdi"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode("span", null, "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435"),
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
                          }
                          if (mobile.value) {
                            _push4(`<div class="d-flex justify-center align-baseline" style="${ssrRenderStyle({ "min-height": "600px", "position": "relative" })}"${_scopeId3}><div style="${ssrRenderStyle({ "position": "absolute", "width": "200%" })}"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(be), {
                              ref: "examplesCarousel",
                              arrows: false,
                              bullets: false,
                              "dragging-distance": 30,
                              gap: 3,
                              "slide-ratio": 1 / 4,
                              "visible-slides": xl.value ? 4 : 3,
                              class: "no-shadow mt-6",
                              "fixed-height": "390px",
                              "slide-multiple": ""
                            }, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(product.value.examples, (example, index) => {
                                    _push5(ssrRenderComponent(unref(Z), {
                                      key: index,
                                      class: "pa-0"
                                    }, {
                                      content: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(ExampleCard, { example }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(ExampleCard, { example }, null, 8, ["example"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (openBlock(true), createBlock(Fragment, null, renderList(product.value.examples, (example, index) => {
                                      return openBlock(), createBlock(unref(Z), {
                                        key: index,
                                        class: "pa-0"
                                      }, {
                                        content: withCtx(() => [
                                          createVNode(ExampleCard, { example }, null, 8, ["example"])
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
                          } else {
                            _push4(ssrRenderComponent(unref(be), {
                              ref: "examplesCarousel",
                              arrows: false,
                              bullets: false,
                              "dragging-distance": 30,
                              gap: xl.value ? 1 : 3,
                              "slide-ratio": 1 / 4,
                              "visible-slides": xl.value ? 4 : 3,
                              class: "no-shadow mt-6",
                              "fixed-height": "390px",
                              "slide-multiple": ""
                            }, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(product.value.examples, (example, index) => {
                                    _push5(ssrRenderComponent(unref(Z), {
                                      key: index,
                                      class: "pa-0"
                                    }, {
                                      content: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(ExampleCard, { example }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(ExampleCard, { example }, null, 8, ["example"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (openBlock(true), createBlock(Fragment, null, renderList(product.value.examples, (example, index) => {
                                      return openBlock(), createBlock(unref(Z), {
                                        key: index,
                                        class: "pa-0"
                                      }, {
                                        content: withCtx(() => [
                                          createVNode(ExampleCard, { example }, null, 8, ["example"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          }
                        } else {
                          return [
                            mobile.value ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "title__container"
                            }, [
                              createVNode("div", {
                                class: "d-flex flex-column justify-center align-center",
                                style: { "row-gap": "15px" }
                              }, [
                                createVNode("h2", { class: "text-center text-white" }, "\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u0440\u0430\u0431\u043E\u0442"),
                                createVNode(VDivider, {
                                  color: "secondary",
                                  style: { "height": "1px", "width": "300px", "opacity": "1" }
                                }),
                                product.value["benefit"] ? (openBlock(), createBlock("h3", {
                                  key: 0,
                                  class: "text-center text-white text-uppercase"
                                }, toDisplayString(product.value["benefit"]), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "d-flex align-center my-6" }, [
                                createVNode(VBtn, {
                                  flat: true,
                                  height: 13,
                                  ripple: false,
                                  class: "example--button d-flex justify-start align-center",
                                  variant: "plain",
                                  onClick: ($event) => _ctx.$refs.examplesCarousel.previous()
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(SvgIcon), {
                                      size: "32",
                                      path: unref(mdiChevronLeft),
                                      type: "mdi"
                                    }, null, 8, ["path"])
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VBtn, {
                                  flat: true,
                                  height: 13,
                                  ripple: false,
                                  class: "example--button d-flex justify-start align-center",
                                  variant: "plain",
                                  onClick: ($event) => _ctx.$refs.examplesCarousel.next()
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(SvgIcon), {
                                      size: "32",
                                      path: unref(mdiChevronRight),
                                      type: "mdi"
                                    }, null, 8, ["path"])
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])
                            ])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "title__container"
                            }, [
                              createVNode(VBtn, {
                                flat: true,
                                height: 13,
                                ripple: false,
                                class: "example--button d-flex justify-start align-center",
                                variant: "plain",
                                onClick: ($event) => _ctx.$refs.examplesCarousel.previous()
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(SvgIcon), {
                                    path: unref(mdiArrowLeftThin),
                                    type: "mdi"
                                  }, null, 8, ["path"]),
                                  createVNode("span", null, "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode("div", {
                                class: "d-flex flex-column justify-center align-center",
                                style: { "row-gap": "15px" }
                              }, [
                                createVNode("h2", { class: "text-center text-white" }, "\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u0440\u0430\u0431\u043E\u0442"),
                                createVNode(VDivider, {
                                  color: "secondary",
                                  style: { "height": "1px", "width": "300px", "opacity": "1" }
                                }),
                                product.value["benefit"] ? (openBlock(), createBlock("h3", {
                                  key: 0,
                                  class: "text-center text-white text-uppercase"
                                }, toDisplayString(product.value["benefit"]), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode(VBtn, {
                                flat: true,
                                height: 13,
                                ripple: false,
                                class: "example--button d-flex justify-start align-center",
                                variant: "plain",
                                onClick: ($event) => _ctx.$refs.examplesCarousel.next()
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435"),
                                  createVNode(unref(SvgIcon), {
                                    path: unref(mdiArrowRightThin),
                                    type: "mdi"
                                  }, null, 8, ["path"])
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])),
                            mobile.value ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "d-flex justify-center align-baseline",
                              style: { "min-height": "600px", "position": "relative" }
                            }, [
                              createVNode("div", { style: { "position": "absolute", "width": "200%" } }, [
                                createVNode(unref(be), {
                                  ref: "examplesCarousel",
                                  arrows: false,
                                  bullets: false,
                                  "dragging-distance": 30,
                                  gap: 3,
                                  "slide-ratio": 1 / 4,
                                  "visible-slides": xl.value ? 4 : 3,
                                  class: "no-shadow mt-6",
                                  "fixed-height": "390px",
                                  "slide-multiple": ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(product.value.examples, (example, index) => {
                                      return openBlock(), createBlock(unref(Z), {
                                        key: index,
                                        class: "pa-0"
                                      }, {
                                        content: withCtx(() => [
                                          createVNode(ExampleCard, { example }, null, 8, ["example"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["visible-slides"])
                              ])
                            ])) : (openBlock(), createBlock(unref(be), {
                              key: 3,
                              ref: "examplesCarousel",
                              arrows: false,
                              bullets: false,
                              "dragging-distance": 30,
                              gap: xl.value ? 1 : 3,
                              "slide-ratio": 1 / 4,
                              "visible-slides": xl.value ? 4 : 3,
                              class: "no-shadow mt-6",
                              "fixed-height": "390px",
                              "slide-multiple": ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(product.value.examples, (example, index) => {
                                  return openBlock(), createBlock(unref(Z), {
                                    key: index,
                                    class: "pa-0"
                                  }, {
                                    content: withCtx(() => [
                                      createVNode(ExampleCard, { example }, null, 8, ["example"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["gap", "visible-slides"]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCol, {
                        cols: "12",
                        class: "ma-0 pa-0"
                      }, {
                        default: withCtx(() => [
                          mobile.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "title__container"
                          }, [
                            createVNode("div", {
                              class: "d-flex flex-column justify-center align-center",
                              style: { "row-gap": "15px" }
                            }, [
                              createVNode("h2", { class: "text-center text-white" }, "\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u0440\u0430\u0431\u043E\u0442"),
                              createVNode(VDivider, {
                                color: "secondary",
                                style: { "height": "1px", "width": "300px", "opacity": "1" }
                              }),
                              product.value["benefit"] ? (openBlock(), createBlock("h3", {
                                key: 0,
                                class: "text-center text-white text-uppercase"
                              }, toDisplayString(product.value["benefit"]), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "d-flex align-center my-6" }, [
                              createVNode(VBtn, {
                                flat: true,
                                height: 13,
                                ripple: false,
                                class: "example--button d-flex justify-start align-center",
                                variant: "plain",
                                onClick: ($event) => _ctx.$refs.examplesCarousel.previous()
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(SvgIcon), {
                                    size: "32",
                                    path: unref(mdiChevronLeft),
                                    type: "mdi"
                                  }, null, 8, ["path"])
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VBtn, {
                                flat: true,
                                height: 13,
                                ripple: false,
                                class: "example--button d-flex justify-start align-center",
                                variant: "plain",
                                onClick: ($event) => _ctx.$refs.examplesCarousel.next()
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(SvgIcon), {
                                    size: "32",
                                    path: unref(mdiChevronRight),
                                    type: "mdi"
                                  }, null, 8, ["path"])
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "title__container"
                          }, [
                            createVNode(VBtn, {
                              flat: true,
                              height: 13,
                              ripple: false,
                              class: "example--button d-flex justify-start align-center",
                              variant: "plain",
                              onClick: ($event) => _ctx.$refs.examplesCarousel.previous()
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(SvgIcon), {
                                  path: unref(mdiArrowLeftThin),
                                  type: "mdi"
                                }, null, 8, ["path"]),
                                createVNode("span", null, "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode("div", {
                              class: "d-flex flex-column justify-center align-center",
                              style: { "row-gap": "15px" }
                            }, [
                              createVNode("h2", { class: "text-center text-white" }, "\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u0440\u0430\u0431\u043E\u0442"),
                              createVNode(VDivider, {
                                color: "secondary",
                                style: { "height": "1px", "width": "300px", "opacity": "1" }
                              }),
                              product.value["benefit"] ? (openBlock(), createBlock("h3", {
                                key: 0,
                                class: "text-center text-white text-uppercase"
                              }, toDisplayString(product.value["benefit"]), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode(VBtn, {
                              flat: true,
                              height: 13,
                              ripple: false,
                              class: "example--button d-flex justify-start align-center",
                              variant: "plain",
                              onClick: ($event) => _ctx.$refs.examplesCarousel.next()
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435"),
                                createVNode(unref(SvgIcon), {
                                  path: unref(mdiArrowRightThin),
                                  type: "mdi"
                                }, null, 8, ["path"])
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])),
                          mobile.value ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "d-flex justify-center align-baseline",
                            style: { "min-height": "600px", "position": "relative" }
                          }, [
                            createVNode("div", { style: { "position": "absolute", "width": "200%" } }, [
                              createVNode(unref(be), {
                                ref: "examplesCarousel",
                                arrows: false,
                                bullets: false,
                                "dragging-distance": 30,
                                gap: 3,
                                "slide-ratio": 1 / 4,
                                "visible-slides": xl.value ? 4 : 3,
                                class: "no-shadow mt-6",
                                "fixed-height": "390px",
                                "slide-multiple": ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(product.value.examples, (example, index) => {
                                    return openBlock(), createBlock(unref(Z), {
                                      key: index,
                                      class: "pa-0"
                                    }, {
                                      content: withCtx(() => [
                                        createVNode(ExampleCard, { example }, null, 8, ["example"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["visible-slides"])
                            ])
                          ])) : (openBlock(), createBlock(unref(be), {
                            key: 3,
                            ref: "examplesCarousel",
                            arrows: false,
                            bullets: false,
                            "dragging-distance": 30,
                            gap: xl.value ? 1 : 3,
                            "slide-ratio": 1 / 4,
                            "visible-slides": xl.value ? 4 : 3,
                            class: "no-shadow mt-6",
                            "fixed-height": "390px",
                            "slide-multiple": ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(product.value.examples, (example, index) => {
                                return openBlock(), createBlock(unref(Z), {
                                  key: index,
                                  class: "pa-0"
                                }, {
                                  content: withCtx(() => [
                                    createVNode(ExampleCard, { example }, null, 8, ["example"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["gap", "visible-slides"]))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(VRow, { class: "single-product-others__products-container page__padding ma-0" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "pa-0 ma-0"
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-center primary--text"${_scopeId3}>\u0414\u0440\u0443\u0433\u0430\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F</h2>`);
                        _push4(ssrRenderComponent(VRow, { class: "mx-0 pa-0 mt-6" }, {
                          default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                class: "products-wrapper",
                                cols: "12"
                              }, {
                                default: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(product.value["others"], (other, index) => {
                                      _push6(ssrRenderComponent(ProductCard, { product: other }, null, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(product.value["others"], (other, index) => {
                                        return openBlock(), createBlock(ProductCard, {
                                          key: index,
                                          product: other
                                        }, null, 8, ["product"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  class: "products-wrapper",
                                  cols: "12"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(product.value["others"], (other, index) => {
                                      return openBlock(), createBlock(ProductCard, {
                                        key: index,
                                        product: other
                                      }, null, 8, ["product"]);
                                    }), 128))
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
                          createVNode("h2", { class: "text-center primary--text" }, "\u0414\u0440\u0443\u0433\u0430\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"),
                          createVNode(VRow, { class: "mx-0 pa-0 mt-6" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                class: "products-wrapper",
                                cols: "12"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(product.value["others"], (other, index) => {
                                    return openBlock(), createBlock(ProductCard, {
                                      key: index,
                                      product: other
                                    }, null, 8, ["product"]);
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      class: "pa-0 ma-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-center primary--text" }, "\u0414\u0440\u0443\u0433\u0430\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"),
                        createVNode(VRow, { class: "mx-0 pa-0 mt-6" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              class: "products-wrapper",
                              cols: "12"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(product.value["others"], (other, index) => {
                                  return openBlock(), createBlock(ProductCard, {
                                    key: index,
                                    product: other
                                  }, null, 8, ["product"]);
                                }), 128))
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
          } else {
            return [
              createVNode(VRow, { class: "pa-0 ma-0" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    class: "single-product__container page__padding"
                  }, {
                    default: withCtx(() => [
                      mobile.value ? (openBlock(), createBlock(_component_nuxt_img, {
                        key: 0,
                        alt: product.value.title,
                        provider: "strapi",
                        src: product.value.image,
                        fit: "cover",
                        width: width.value - 30,
                        height: "100%"
                      }, null, 8, ["alt", "src", "width"])) : (openBlock(), createBlock(_component_nuxt_img, {
                        key: 1,
                        alt: product.value.title,
                        provider: "strapi",
                        src: product.value.image,
                        fit: "cover",
                        width: "540",
                        height: "540"
                      }, null, 8, ["alt", "src"])),
                      createVNode("div", { class: "single-product__description" }, [
                        createVNode("article", {
                          innerHTML: product.value.description
                        }, null, 8, ["innerHTML"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              hasMaterials.value ? (openBlock(), createBlock(VRow, {
                key: 0,
                class: "ma-0 pa-0",
                style: { "background-color": "#F7F7F7" }
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    class: "single-product-materials__container page__padding ma-0"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(product.value["materials"], (material, index) => {
                        return openBlock(), createBlock(MaterialCard, {
                          key: index,
                          material
                        }, null, 8, ["material"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              hasExamples.value ? (openBlock(), createBlock(VRow, {
                key: 1,
                class: "single-product-examples__container page__padding bg-primary ma-0"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    class: "ma-0 pa-0"
                  }, {
                    default: withCtx(() => [
                      mobile.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "title__container"
                      }, [
                        createVNode("div", {
                          class: "d-flex flex-column justify-center align-center",
                          style: { "row-gap": "15px" }
                        }, [
                          createVNode("h2", { class: "text-center text-white" }, "\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u0440\u0430\u0431\u043E\u0442"),
                          createVNode(VDivider, {
                            color: "secondary",
                            style: { "height": "1px", "width": "300px", "opacity": "1" }
                          }),
                          product.value["benefit"] ? (openBlock(), createBlock("h3", {
                            key: 0,
                            class: "text-center text-white text-uppercase"
                          }, toDisplayString(product.value["benefit"]), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "d-flex align-center my-6" }, [
                          createVNode(VBtn, {
                            flat: true,
                            height: 13,
                            ripple: false,
                            class: "example--button d-flex justify-start align-center",
                            variant: "plain",
                            onClick: ($event) => _ctx.$refs.examplesCarousel.previous()
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(SvgIcon), {
                                size: "32",
                                path: unref(mdiChevronLeft),
                                type: "mdi"
                              }, null, 8, ["path"])
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            flat: true,
                            height: 13,
                            ripple: false,
                            class: "example--button d-flex justify-start align-center",
                            variant: "plain",
                            onClick: ($event) => _ctx.$refs.examplesCarousel.next()
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(SvgIcon), {
                                size: "32",
                                path: unref(mdiChevronRight),
                                type: "mdi"
                              }, null, 8, ["path"])
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "title__container"
                      }, [
                        createVNode(VBtn, {
                          flat: true,
                          height: 13,
                          ripple: false,
                          class: "example--button d-flex justify-start align-center",
                          variant: "plain",
                          onClick: ($event) => _ctx.$refs.examplesCarousel.previous()
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(SvgIcon), {
                              path: unref(mdiArrowLeftThin),
                              type: "mdi"
                            }, null, 8, ["path"]),
                            createVNode("span", null, "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode("div", {
                          class: "d-flex flex-column justify-center align-center",
                          style: { "row-gap": "15px" }
                        }, [
                          createVNode("h2", { class: "text-center text-white" }, "\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u0440\u0430\u0431\u043E\u0442"),
                          createVNode(VDivider, {
                            color: "secondary",
                            style: { "height": "1px", "width": "300px", "opacity": "1" }
                          }),
                          product.value["benefit"] ? (openBlock(), createBlock("h3", {
                            key: 0,
                            class: "text-center text-white text-uppercase"
                          }, toDisplayString(product.value["benefit"]), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode(VBtn, {
                          flat: true,
                          height: 13,
                          ripple: false,
                          class: "example--button d-flex justify-start align-center",
                          variant: "plain",
                          onClick: ($event) => _ctx.$refs.examplesCarousel.next()
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435"),
                            createVNode(unref(SvgIcon), {
                              path: unref(mdiArrowRightThin),
                              type: "mdi"
                            }, null, 8, ["path"])
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])),
                      mobile.value ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "d-flex justify-center align-baseline",
                        style: { "min-height": "600px", "position": "relative" }
                      }, [
                        createVNode("div", { style: { "position": "absolute", "width": "200%" } }, [
                          createVNode(unref(be), {
                            ref: "examplesCarousel",
                            arrows: false,
                            bullets: false,
                            "dragging-distance": 30,
                            gap: 3,
                            "slide-ratio": 1 / 4,
                            "visible-slides": xl.value ? 4 : 3,
                            class: "no-shadow mt-6",
                            "fixed-height": "390px",
                            "slide-multiple": ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(product.value.examples, (example, index) => {
                                return openBlock(), createBlock(unref(Z), {
                                  key: index,
                                  class: "pa-0"
                                }, {
                                  content: withCtx(() => [
                                    createVNode(ExampleCard, { example }, null, 8, ["example"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["visible-slides"])
                        ])
                      ])) : (openBlock(), createBlock(unref(be), {
                        key: 3,
                        ref: "examplesCarousel",
                        arrows: false,
                        bullets: false,
                        "dragging-distance": 30,
                        gap: xl.value ? 1 : 3,
                        "slide-ratio": 1 / 4,
                        "visible-slides": xl.value ? 4 : 3,
                        class: "no-shadow mt-6",
                        "fixed-height": "390px",
                        "slide-multiple": ""
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(product.value.examples, (example, index) => {
                            return openBlock(), createBlock(unref(Z), {
                              key: index,
                              class: "pa-0"
                            }, {
                              content: withCtx(() => [
                                createVNode(ExampleCard, { example }, null, 8, ["example"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["gap", "visible-slides"]))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(VRow, { class: "single-product-others__products-container page__padding ma-0" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    class: "pa-0 ma-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-center primary--text" }, "\u0414\u0440\u0443\u0433\u0430\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"),
                      createVNode(VRow, { class: "mx-0 pa-0 mt-6" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            class: "products-wrapper",
                            cols: "12"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(product.value["others"], (other, index) => {
                                return openBlock(), createBlock(ProductCard, {
                                  key: index,
                                  product: other
                                }, null, 8, ["product"]);
                              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-abcaa361.mjs.map
