import { withAsyncContext, computed, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useServerSeoMeta } from './index-e31e4a76.mjs';
import { u as useFetch } from './fetch-e0645a22.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useHeaderStore } from './header-2846e1cc.mjs';
import { V as VContainer, a as VRow } from './VRow-30a22c26.mjs';
import { V as VCol } from './VCol-b511b50b.mjs';
import 'unhead';
import '../server.mjs';
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
import './asyncData-c2a94982.mjs';
import './tag-eb37962f.mjs';

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
      description: () => "\u041F\u0435\u0440\u0432\u0430\u044F \u0432 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438 \u0444\u0430\u0431\u0440\u0438\u043A\u0430 \u0448\u0438\u0440\u043E\u043A\u043E\u0444\u043E\u0440\u043C\u0430\u0442\u043D\u043E\u0439 \u043F\u0435\u0447\u0430\u0442\u0438!",
      ogDescription: () => "\u041F\u0435\u0440\u0432\u0430\u044F \u0432 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438 \u0444\u0430\u0431\u0440\u0438\u043A\u0430 \u0448\u0438\u0440\u043E\u043A\u043E\u0444\u043E\u0440\u043C\u0430\u0442\u043D\u043E\u0439 \u043F\u0435\u0447\u0430\u0442\u0438!",
      ogImage: () => "http://macroprint.by/img/mainLogo.png",
      ogImageUrl: () => "http://macroprint.by/img/mainLogo.png",
      twitterCard: () => "summary_large_image",
      twitterTitle: () => page.value["title"],
      twitterDescription: () => "\u041F\u0435\u0440\u0432\u0430\u044F \u0432 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438 \u0444\u0430\u0431\u0440\u0438\u043A\u0430 \u0448\u0438\u0440\u043E\u043A\u043E\u0444\u043E\u0440\u043C\u0430\u0442\u043D\u043E\u0439 \u043F\u0435\u0447\u0430\u0442\u0438!",
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

export { _sfc_main as default };
//# sourceMappingURL=index-99f2cfb7.mjs.map
