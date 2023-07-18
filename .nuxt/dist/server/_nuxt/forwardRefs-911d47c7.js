import "vue";
import "hookable";
import { u as useAsyncData } from "./asyncData-c2a94982.js";
import "destr";
import "devalue";
import "klona";
import { h as defineStore } from "../server.mjs";
import { mdiFacebook, mdiInstagram, mdiTwitter } from "@mdi/js";
class Box {
  constructor(_ref) {
    let {
      x,
      y,
      width,
      height
    } = _ref;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function getOverflow(a, b) {
  return {
    x: {
      before: Math.max(0, b.left - a.left),
      after: Math.max(0, a.right - b.right)
    },
    y: {
      before: Math.max(0, b.top - a.top),
      after: Math.max(0, a.bottom - b.bottom)
    }
  };
}
function nullifyTransforms(el) {
  const rect = el.getBoundingClientRect();
  const style = getComputedStyle(el);
  const tx = style.transform;
  if (tx) {
    let ta, sx, sy, dx, dy;
    if (tx.startsWith("matrix3d(")) {
      ta = tx.slice(9, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[5];
      dx = +ta[12];
      dy = +ta[13];
    } else if (tx.startsWith("matrix(")) {
      ta = tx.slice(7, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[3];
      dx = +ta[4];
      dy = +ta[5];
    } else {
      return new Box(rect);
    }
    const to = style.transformOrigin;
    const x = rect.x - dx - (1 - sx) * parseFloat(to);
    const y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1));
    const w = sx ? rect.width / sx : el.offsetWidth + 1;
    const h = sy ? rect.height / sy : el.offsetHeight + 1;
    return new Box({
      x,
      y,
      width: w,
      height: h
    });
  } else {
    return new Box(rect);
  }
}
function animate(el, keyframes, options) {
  if (typeof el.animate === "undefined")
    return {
      finished: Promise.resolve()
    };
  let animation;
  try {
    animation = el.animate(keyframes, options);
  } catch (err) {
    return {
      finished: Promise.resolve()
    };
  }
  if (typeof animation.finished === "undefined") {
    animation.finished = new Promise((resolve) => {
      animation.onfinish = () => {
        resolve(animation);
      };
    });
  }
  return animation;
}
const standardEasing = "cubic-bezier(0.4, 0, 0.2, 1)";
const deceleratedEasing = "cubic-bezier(0.0, 0, 0.2, 1)";
const acceleratedEasing = "cubic-bezier(0.4, 0, 1, 1)";
const useCommonStore = defineStore({
  id: "common-store",
  state: () => {
    return {
      phones: [
        {
          number: "+375 (17) 336-11-00",
          href: "tel:+375173361100"
        },
        {
          number: "+375 (17) 336-66-00",
          href: "tel:+375173366600"
        },
        {
          number: "+375 (29) 153-19-00",
          href: "tel:+375291531900"
        }
      ],
      headerMenu: [
        {
          title: "Продукция",
          key: true,
          submenu: []
        },
        {
          title: "Клиентам",
          route: "for-clients",
          submenu: [
            {
              title: "Реквизиты",
              route: "/for-clients/requisites"
            },
            {
              title: "Технические требования",
              route: "/for-clients/requirements"
            }
          ]
        },
        {
          title: "О компании",
          route: "company",
          submenu: [
            {
              title: "Новости компании",
              route: "/company/articles"
            },
            {
              title: "История компании",
              route: "/company/history"
            }
          ]
        },
        {
          title: "Вакансии",
          route: "/vacancies"
        }
      ],
      footerMenu: [
        {
          title: "Продукция",
          route: "products"
        },
        {
          title: "Новости",
          route: "company/articles"
        },
        {
          title: "Клиентам",
          route: "for-clients"
        },
        {
          title: "О компании",
          route: "company"
        },
        {
          title: "Вакансии",
          route: "vacancies"
        },
        {
          title: "Контакты",
          route: "contacts"
        }
      ],
      networks: [
        {
          icon: mdiFacebook,
          href: "https://facebook.com"
        },
        {
          icon: mdiInstagram,
          href: "https://instagram.com"
        },
        {
          icon: mdiTwitter,
          href: "https://twitter.com"
        }
      ]
    };
  },
  getters: {
    getPhones: (state) => state.phones,
    getHeaderMenu: (state) => state.headerMenu,
    getFooterMenu: (state) => state.footerMenu,
    getNetworks: (state) => state.networks
  },
  actions: {
    async getHeader() {
      const { data } = await useAsyncData(
        "result",
        () => $fetch(`https://proxy.macroprint.site/api/sections/header`)
      );
      return { data };
    }
  }
});
const Refs = Symbol("Forwarded refs");
function getDescriptor(obj, key) {
  let currentObj = obj;
  while (currentObj) {
    const descriptor = Reflect.getOwnPropertyDescriptor(currentObj, key);
    if (descriptor)
      return descriptor;
    currentObj = Object.getPrototypeOf(currentObj);
  }
  return void 0;
}
function forwardRefs(target) {
  for (var _len = arguments.length, refs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    refs[_key - 1] = arguments[_key];
  }
  target[Refs] = refs;
  return new Proxy(target, {
    get(target2, key) {
      if (Reflect.has(target2, key)) {
        return Reflect.get(target2, key);
      }
      if (typeof key === "symbol" || key.startsWith("__"))
        return;
      for (const ref of refs) {
        if (ref.value && Reflect.has(ref.value, key)) {
          const val = Reflect.get(ref.value, key);
          return typeof val === "function" ? val.bind(ref.value) : val;
        }
      }
    },
    has(target2, key) {
      if (Reflect.has(target2, key)) {
        return true;
      }
      if (typeof key === "symbol" || key.startsWith("__"))
        return false;
      for (const ref of refs) {
        if (ref.value && Reflect.has(ref.value, key)) {
          return true;
        }
      }
      return false;
    },
    getOwnPropertyDescriptor(target2, key) {
      var _a;
      const descriptor = Reflect.getOwnPropertyDescriptor(target2, key);
      if (descriptor)
        return descriptor;
      if (typeof key === "symbol" || key.startsWith("__"))
        return;
      for (const ref of refs) {
        if (!ref.value)
          continue;
        const descriptor2 = getDescriptor(ref.value, key) ?? ("_" in ref.value ? getDescriptor((_a = ref.value._) == null ? void 0 : _a.setupState, key) : void 0);
        if (descriptor2)
          return descriptor2;
      }
      for (const ref of refs) {
        const childRefs = ref.value && ref.value[Refs];
        if (!childRefs)
          continue;
        const queue = childRefs.slice();
        while (queue.length) {
          const ref2 = queue.shift();
          const descriptor2 = getDescriptor(ref2.value, key);
          if (descriptor2)
            return descriptor2;
          const childRefs2 = ref2.value && ref2.value[Refs];
          if (childRefs2)
            queue.push(...childRefs2);
        }
      }
      return void 0;
    }
  });
}
export {
  Box as B,
  animate as a,
  acceleratedEasing as b,
  deceleratedEasing as d,
  forwardRefs as f,
  getOverflow as g,
  nullifyTransforms as n,
  standardEasing as s,
  useCommonStore as u
};
//# sourceMappingURL=forwardRefs-911d47c7.js.map
