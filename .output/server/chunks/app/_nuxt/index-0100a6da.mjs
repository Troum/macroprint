import { b as VExpandTransition, _ as __nuxt_component_0 } from './index-b833480a.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-img-b3621699.mjs';
import { computed, toRef, inject, provide, withAsyncContext, ref, watch, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, unref, renderList, createTextVNode, createCommentVNode, toDisplayString, useSSRContext, withDirectives, vShow, resolveDirective } from 'vue';
import { u as useServerSeoMeta } from './index-e31e4a76.mjs';
import { u as useFetch } from './fetch-e0645a22.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { S as SvgIcon } from './svg-icon-b3207ad1.mjs';
import { b as be, Z } from '../../vueperslides.es.mjs';
import { mdiArrowLeftThin, mdiArrowRightThin, mdiChevronDown, mdiChevronLeft } from '@mdi/js';
import { P as ProductCard } from './ProductCard-a17b46e5.mjs';
import { A as ArticleCard } from './ArticleCard-42e1ac0b.mjs';
import { M as MapComponent } from './MapComponent-1e0e99f5.mjs';
import { V as VContainer, a as VRow } from './VRow-30a22c26.mjs';
import { V as VCol } from './VCol-b511b50b.mjs';
import { m as makeGroupProps, u as useGroup, a as makeGroupItemProps, b as useGroupItem, V as VBtn } from './VBtn-a44162c6.mjs';
import { m as makeComponentProps, a as makeTagProps, u as useRender } from './tag-eb37962f.mjs';
import { p as propsFactory, m as makeThemeProps, d as genericComponent, j as provideTheme, l as provideDefaults, I as IconValue, F as useDisplay } from '../server.mjs';
import { m as makeLazyProps, u as useLazy } from './lazy-3ff85225.mjs';
import { R as Ripple, d as useBackgroundColor, j as makeElevationProps, b as makeRoundedProps, k as useElevation, c as useRounded, V as VIcon } from './index-42cff7c0.mjs';
import 'defu';
import 'ufo';
import 'unhead';
import 'ohash';
import './asyncData-c2a94982.mjs';
import 'truncate-html';
import './VCard-2fc4bd81.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'h3';
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
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';

const VExpansionPanelSymbol = Symbol.for("vuetify:v-expansion-panel");
const allowedVariants = ["default", "accordion", "inset", "popout"];
const makeVExpansionPanelsProps = propsFactory({
  color: String,
  variant: {
    type: String,
    default: "default",
    validator: (v) => allowedVariants.includes(v)
  },
  readonly: Boolean,
  ...makeComponentProps(),
  ...makeGroupProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VExpansionPanels");
const VExpansionPanels = genericComponent()({
  name: "VExpansionPanels",
  props: makeVExpansionPanelsProps(),
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useGroup(props, VExpansionPanelSymbol);
    const {
      themeClasses
    } = provideTheme(props);
    const variantClass = computed(() => props.variant && `v-expansion-panels--variant-${props.variant}`);
    provideDefaults({
      VExpansionPanel: {
        color: toRef(props, "color")
      },
      VExpansionPanelTitle: {
        readonly: toRef(props, "readonly")
      }
    });
    useRender(() => createVNode(props.tag, {
      "class": ["v-expansion-panels", themeClasses.value, variantClass.value, props.class],
      "style": props.style
    }, slots));
    return {};
  }
});
const makeVExpansionPanelTextProps = propsFactory({
  ...makeComponentProps(),
  ...makeLazyProps()
}, "VExpansionPanelText");
const VExpansionPanelText = genericComponent()({
  name: "VExpansionPanelText",
  props: makeVExpansionPanelTextProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const expansionPanel = inject(VExpansionPanelSymbol);
    if (!expansionPanel)
      throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent,
      onAfterLeave
    } = useLazy(props, expansionPanel.isSelected);
    useRender(() => createVNode(VExpandTransition, {
      "onAfterLeave": onAfterLeave
    }, {
      default: () => {
        var _a;
        return [withDirectives(createVNode("div", {
          "class": ["v-expansion-panel-text", props.class],
          "style": props.style
        }, [slots.default && hasContent.value && createVNode("div", {
          "class": "v-expansion-panel-text__wrapper"
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]), [[vShow, expansionPanel.isSelected.value]])];
      }
    }));
    return {};
  }
});
const makeVExpansionPanelTitleProps = propsFactory({
  color: String,
  expandIcon: {
    type: IconValue,
    default: "$expand"
  },
  collapseIcon: {
    type: IconValue,
    default: "$collapse"
  },
  hideActions: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: false
  },
  readonly: Boolean,
  ...makeComponentProps()
}, "VExpansionPanelTitle");
const VExpansionPanelTitle = genericComponent()({
  name: "VExpansionPanelTitle",
  directives: {
    Ripple
  },
  props: makeVExpansionPanelTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const expansionPanel = inject(VExpansionPanelSymbol);
    if (!expansionPanel)
      throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(props, "color");
    const slotProps = computed(() => ({
      collapseIcon: props.collapseIcon,
      disabled: expansionPanel.disabled.value,
      expanded: expansionPanel.isSelected.value,
      expandIcon: props.expandIcon,
      readonly: props.readonly
    }));
    useRender(() => {
      var _a;
      return withDirectives(createVNode("button", {
        "class": ["v-expansion-panel-title", {
          "v-expansion-panel-title--active": expansionPanel.isSelected.value
        }, backgroundColorClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style],
        "type": "button",
        "tabindex": expansionPanel.disabled.value ? -1 : void 0,
        "disabled": expansionPanel.disabled.value,
        "aria-expanded": expansionPanel.isSelected.value,
        "onClick": !props.readonly ? expansionPanel.toggle : void 0
      }, [createVNode("span", {
        "class": "v-expansion-panel-title__overlay"
      }, null), (_a = slots.default) == null ? void 0 : _a.call(slots, slotProps.value), !props.hideActions && createVNode("span", {
        "class": "v-expansion-panel-title__icon"
      }, [slots.actions ? slots.actions(slotProps.value) : createVNode(VIcon, {
        "icon": expansionPanel.isSelected.value ? props.collapseIcon : props.expandIcon
      }, null)])]), [[resolveDirective("ripple"), props.ripple]]);
    });
    return {};
  }
});
const makeVExpansionPanelProps = propsFactory({
  title: String,
  text: String,
  bgColor: String,
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeVExpansionPanelTitleProps()
}, "VExpansionPanel");
const VExpansionPanel = genericComponent()({
  name: "VExpansionPanel",
  props: makeVExpansionPanelProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const groupItem = useGroupItem(props, VExpansionPanelSymbol);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(props, "bgColor");
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const isDisabled = computed(() => (groupItem == null ? void 0 : groupItem.disabled.value) || props.disabled);
    const selectedIndices = computed(() => groupItem.group.items.value.reduce((arr, item, index) => {
      if (groupItem.group.selected.value.includes(item.id))
        arr.push(index);
      return arr;
    }, []));
    const isBeforeSelected = computed(() => {
      const index = groupItem.group.items.value.findIndex((item) => item.id === groupItem.id);
      return !groupItem.isSelected.value && selectedIndices.value.some((selectedIndex) => selectedIndex - index === 1);
    });
    const isAfterSelected = computed(() => {
      const index = groupItem.group.items.value.findIndex((item) => item.id === groupItem.id);
      return !groupItem.isSelected.value && selectedIndices.value.some((selectedIndex) => selectedIndex - index === -1);
    });
    provide(VExpansionPanelSymbol, groupItem);
    useRender(() => {
      const hasText = !!(slots.text || props.text);
      const hasTitle = !!(slots.title || props.title);
      return createVNode(props.tag, {
        "class": ["v-expansion-panel", {
          "v-expansion-panel--active": groupItem.isSelected.value,
          "v-expansion-panel--before-active": isBeforeSelected.value,
          "v-expansion-panel--after-active": isAfterSelected.value,
          "v-expansion-panel--disabled": isDisabled.value
        }, roundedClasses.value, backgroundColorClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style]
      }, {
        default: () => {
          var _a;
          return [createVNode("div", {
            "class": ["v-expansion-panel__shadow", ...elevationClasses.value]
          }, null), hasTitle && createVNode(VExpansionPanelTitle, {
            "key": "title",
            "collapseIcon": props.collapseIcon,
            "color": props.color,
            "expandIcon": props.expandIcon,
            "hideActions": props.hideActions,
            "ripple": props.ripple
          }, {
            default: () => [slots.title ? slots.title() : props.title]
          }), hasText && createVNode(VExpansionPanelText, {
            "key": "text",
            "eager": props.eager
          }, {
            default: () => [slots.text ? slots.text() : props.text]
          }), (_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    });
    return {};
  }
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: result } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/index", {
      baseURL: "https://proxy.macroprint.site",
      method: "GET"
    }, "$PslAyef5YX")), __temp = await __temp, __restore(), __temp);
    const page = computed(() => {
      return result.value;
    });
    const width = computed(() => {
      return useDisplay().width.value;
    });
    const { xlAndUp } = useDisplay();
    const xl = ref(false);
    const { mdAndDown } = useDisplay();
    const mobile = ref(false);
    watch(mdAndDown, (val) => {
      mobile.value = !!val;
    }, { immediate: true });
    watch(xlAndUp, (val) => {
      xl.value = !!val;
    }, { immediate: true });
    useServerSeoMeta({
      ogTitle: () => page.value["seo"]["og_title"],
      title: () => page.value["seo"].title,
      description: () => page.value["seo"].description,
      ogDescription: () => page.value["seo"]["og_description"],
      ogImage: () => "http://macroprint.by/img/mainLogo.png",
      ogUrl: () => "http://macroprint.by"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      const _component_nuxt_img = __nuxt_component_0$1;
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: true,
        class: "d-block pa-0 ma-0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_client_only, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_client_only, null, {
                default: withCtx(() => [
                  createVNode(VRow, { class: "pa-0" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        class: "pa-0 ma-0 index-page__slider-container",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          mobile.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode(unref(be), {
                              arrows: false,
                              autoplay: true,
                              fade: true,
                              "slide-ratio": 4,
                              class: "no-shadow pa-0 greeting"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(page.value.slides, (slide, index) => {
                                  return openBlock(), createBlock(unref(Z), {
                                    key: index,
                                    class: "pa-0"
                                  }, {
                                    content: withCtx(() => [
                                      createVNode(_component_nuxt_img, {
                                        provider: "strapi",
                                        height: 388,
                                        fit: "fill",
                                        src: slide.image
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "index-page__slider-container--greeting" }, [
                              createVNode("h1", { class: "text-uppercase text-white" }, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C"),
                              createVNode("h2", { class: "text-white" }, "\u041C\u044B \u0441\u0434\u0435\u043B\u0430\u0435\u043C \u0412\u0430\u0448 \u043C\u0438\u0440 \u044F\u0440\u0447\u0435."),
                              createVNode(VBtn, {
                                elevation: 0,
                                height: 48,
                                width: 185,
                                class: "mt-8",
                                color: "secondary",
                                style: { "text-transform": "initial" },
                                to: "company",
                                variant: "elevated"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041E \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 ")
                                ]),
                                _: 1
                              })
                            ])
                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createVNode(unref(be), {
                              arrows: false,
                              autoplay: true,
                              fade: true,
                              "slide-ratio": 1 / 2,
                              class: "no-shadow pa-0 greeting",
                              "fixed-height": "388px"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(page.value.slides, (slide, index) => {
                                  return openBlock(), createBlock(unref(Z), {
                                    key: index,
                                    class: "pa-0"
                                  }, {
                                    content: withCtx(() => [
                                      createVNode(_component_nuxt_img, {
                                        provider: "strapi",
                                        width: width.value,
                                        fit: "cover",
                                        src: slide.image
                                      }, null, 8, ["width", "src"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "index-page__slider-container--greeting" }, [
                              createVNode("h1", { class: "text-uppercase text-white" }, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C"),
                              createVNode("h2", { class: "text-white" }, "\u041C\u044B \u0441\u0434\u0435\u043B\u0430\u0435\u043C \u0412\u0430\u0448 \u043C\u0438\u0440 \u044F\u0440\u0447\u0435."),
                              createVNode(VBtn, {
                                elevation: 0,
                                height: 48,
                                width: 185,
                                class: "mt-8",
                                color: "secondary",
                                style: { "text-transform": "initial" },
                                to: "company",
                                variant: "elevated"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041E \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 ")
                                ]),
                                _: 1
                              })
                            ])
                          ], 64))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, { class: "index-page__products-container page__padding" }, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "text-center primary--text" }, "\u041F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"),
                          createVNode(VRow, { class: "mx-0 pa-0 mt-6" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                class: "products-wrapper",
                                style: xl.value ? `--count: ${page.value["products"].length}` : "",
                                cols: "12"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(page.value["products"], (product, index) => {
                                    return openBlock(), createBlock(ProductCard, {
                                      key: index,
                                      product
                                    }, null, 8, ["product"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["style"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  page.value["articles"].length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    mobile.value ? (openBlock(), createBlock(VRow, {
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
                              }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
                              page.value["articles"].length > 1 ? (openBlock(), createBlock("div", {
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
                                    createVNode("span", null, "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435")
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
                                    createVNode("span", null, "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435"),
                                    createVNode(unref(SvgIcon), {
                                      path: unref(mdiArrowRightThin),
                                      type: "mdi"
                                    }, null, 8, ["path"])
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])) : createCommentVNode("", true)
                            ]),
                            page.value["articles"].length > 2 ? (openBlock(), createBlock("div", {
                              key: 0,
                              style: { "position": "relative" },
                              class: "w-full"
                            }, [
                              createVNode("div", { style: { "position": "absolute", "width": "200%", "left": "-50%" } }, [
                                createVNode(unref(be), {
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(page.value["articles"], (article, index) => {
                                      return openBlock(), createBlock(unref(Z), {
                                        key: index,
                                        class: "pa-0"
                                      }, {
                                        content: withCtx(() => [
                                          createVNode(ArticleCard, { article }, null, 8, ["article"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 512)
                              ])
                            ])) : page.value["articles"].length === 2 ? (openBlock(), createBlock("div", {
                              key: 1,
                              style: { "position": "relative" },
                              class: "w-full"
                            }, [
                              createVNode(unref(be), {
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(page.value["articles"], (article, index) => {
                                    return openBlock(), createBlock(unref(Z), {
                                      key: index,
                                      class: "pa-0"
                                    }, {
                                      content: withCtx(() => [
                                        createVNode(ArticleCard, { article }, null, 8, ["article"])
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
                                article: page.value["articles"][0]
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
                                  createVNode("span", null, "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode("h3", { class: "text-center text-white" }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
                              createVNode(VBtn, {
                                flat: true,
                                height: 13,
                                ripple: false,
                                class: "article--button d-flex justify-start align-center",
                                variant: "plain",
                                onClick: ($event) => _ctx.$refs.articlesCarousel.next()
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
                            ]),
                            createVNode(unref(be), {
                              ref: "articlesCarousel",
                              arrows: false,
                              bullets: false,
                              "dragging-distance": 30,
                              gap: xl.value ? 1 : 3,
                              "slide-ratio": 1 / 4,
                              "visible-slides": xl.value ? 7 : 3,
                              class: "no-shadow mt-6",
                              "fixed-height": "567px",
                              "slide-multiple": ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(page.value["articles"], (article, index) => {
                                  return openBlock(), createBlock(unref(Z), {
                                    key: index,
                                    class: "pa-0"
                                  }, {
                                    content: withCtx(() => [
                                      createVNode(ArticleCard, { article }, null, 8, ["article"])
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
                  ], 64)) : createCommentVNode("", true),
                  mobile.value ? (openBlock(), createBlock(VRow, {
                    key: 1,
                    class: "ma-0 pa-0",
                    style: { "margin-top": "576px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        class: "ma-0 pa-0"
                      }, {
                        default: withCtx(() => [
                          page.value["vacancies"].length ? (openBlock(), createBlock(VRow, {
                            key: 0,
                            class: "index-page__vacancies-container page__padding"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "text-center primary--text" }, "\u0421\u043F\u0438\u0441\u043E\u043A \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439"),
                                  createVNode(VRow, { class: "mx-0 pa-0 mt-6" }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        class: "",
                                        cols: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VExpansionPanels, { class: "rounded" }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(page.value["vacancies"], (product, index) => {
                                                return openBlock(), createBlock(VExpansionPanel, {
                                                  key: index,
                                                  class: "my-4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VExpansionPanelTitle, { class: "bg-primary text-white rounded pr-0" }, {
                                                      default: withCtx(({ expanded }) => [
                                                        createVNode("div", {
                                                          class: "d-flex align-center justify-space-between",
                                                          style: { "width": "100%" }
                                                        }, [
                                                          createVNode("span", null, toDisplayString(product.title), 1),
                                                          createVNode(unref(SvgIcon), {
                                                            path: expanded ? unref(mdiChevronDown) : unref(mdiChevronLeft),
                                                            type: "mdi"
                                                          }, null, 8, ["path"])
                                                        ])
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VExpansionPanelText, {
                                                      class: "rounded",
                                                      innerHTML: product.description
                                                    }, null, 8, ["innerHTML"])
                                                  ]),
                                                  _: 2
                                                }, 1024);
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
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                    page.value["vacancies"].length ? (openBlock(), createBlock(VRow, {
                      key: 0,
                      class: "index-page__vacancies-container page__padding"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode("h3", { class: "text-center primary--text" }, "\u0421\u043F\u0438\u0441\u043E\u043A \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439"),
                            createVNode(VRow, { class: "mx-0 pa-0 mt-6" }, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  class: "",
                                  cols: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VExpansionPanels, { class: "rounded" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(page.value["vacancies"], (product, index) => {
                                          return openBlock(), createBlock(VExpansionPanel, {
                                            key: index,
                                            class: "my-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VExpansionPanelTitle, { class: "bg-primary text-white rounded pr-0" }, {
                                                default: withCtx(({ expanded }) => [
                                                  createVNode("div", {
                                                    class: "d-flex align-center justify-space-between",
                                                    style: { "width": "100%" }
                                                  }, [
                                                    createVNode("span", null, toDisplayString(product.title), 1),
                                                    createVNode(unref(SvgIcon), {
                                                      path: expanded ? unref(mdiChevronDown) : unref(mdiChevronLeft),
                                                      type: "mdi"
                                                    }, null, 8, ["path"])
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VExpansionPanelText, {
                                                class: "rounded pa-4",
                                                innerHTML: product.description
                                              }, null, 8, ["innerHTML"])
                                            ]),
                                            _: 2
                                          }, 1024);
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
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ], 64)),
                  createVNode(VRow, { class: "index-page__map-container" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        class: "pa-0 ma-0",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(MapComponent)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-0100a6da.mjs.map
