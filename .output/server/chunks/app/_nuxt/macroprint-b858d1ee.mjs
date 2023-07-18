import { computed, ref, watch, mergeProps, withCtx, createVNode, useSSRContext, defineComponent, h, Suspense, nextTick, Transition, provide, reactive } from 'vue';
import { useRoute, RouterView } from 'vue-router';
import { defu } from 'defu';
import { D as useNuxtApp, a2 as appPageTransition, a3 as _wrapIf, a4 as appKeepalive } from '../server.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VApp, H as HeaderComponent, a as VMain, F as FooterComponent } from './VMain-c5e6f681.mjs';
import { u as useCommonStore } from './forwardRefs-911d47c7.mjs';
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
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import 'lodash';
import './svg-icon-b3207ad1.mjs';
import '@mdi/js';
import './header-2846e1cc.mjs';
import './index-42cff7c0.mjs';
import './tag-eb37962f.mjs';
import './VBtn-a44162c6.mjs';
import './index-b833480a.mjs';
import './lazy-3ff85225.mjs';
import './VDivider-26dc5a7b.mjs';
import './asyncData-c2a94982.mjs';

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? void 0 : _a2.default) === routeProps.Component.type;
  });
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : matchedRoute && interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a, _b, _c, _d;
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!((_b = (_a = props.transition) != null ? _a : routeProps.route.meta.pageTransition) != null ? _b : appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              (_d = (_c = props.keepalive) != null ? _c : routeProps.route.meta.keepalive) != null ? _d : appKeepalive,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => h(RouteProvider, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: "RouteProvider",
  // TODO: Type props
  // eslint-disable-next-line vue/require-prop-types
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const _sfc_main = {
  __name: "macroprint",
  __ssrInlineRender: true,
  setup(__props) {
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
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
                  _push3(ssrRenderComponent(_component_NuxtPage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtPage)
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
                  createVNode(_component_NuxtPage)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/macroprint.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=macroprint-b858d1ee.mjs.map
