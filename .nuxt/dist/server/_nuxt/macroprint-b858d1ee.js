import { defineComponent, h, Suspense, nextTick, Transition, computed, provide, reactive, ref, watch, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { RouterView, useRoute } from "vue-router";
import { defu } from "defu";
import { D as useNuxtApp, a2 as appPageTransition, a3 as _wrapIf, a4 as appKeepalive } from "../server.mjs";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VApp, H as HeaderComponent, a as VMain, F as FooterComponent } from "./VMain-c5e6f681.js";
import { u as useCommonStore } from "./forwardRefs-911d47c7.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
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
import "./header-2846e1cc.js";
import "./index-42cff7c0.js";
import "./tag-eb37962f.js";
import "./VBtn-a44162c6.js";
import "./index-b833480a.js";
import "./lazy-3ff85225.js";
import "./VDivider-26dc5a7b.js";
import "./asyncData-c2a94982.js";
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
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
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
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
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
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
export {
  _sfc_main as default
};
//# sourceMappingURL=macroprint-b858d1ee.js.map
