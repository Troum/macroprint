import { defu } from 'defu';
import { defineNuxtModule, createResolver, addPlugin, addImportsDir, extendViteConfig, logger } from '@nuxt/kit';
import { joinURL } from 'ufo';

const module = defineNuxtModule({
  meta: {
    name: "@nuxtjs/strapi",
    configKey: "strapi",
    compatibility: {
      nuxt: "^3.0.0-rc.8"
    }
  },
  defaults: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
    auth: {},
    cookieName: "strapi_jwt",
    devtools: false
  },
  setup(options, nuxt) {
    nuxt.options.runtimeConfig.public.strapi = defu(nuxt.options.runtimeConfig.public.strapi, options);
    nuxt.options.runtimeConfig.strapi = defu(nuxt.options.runtimeConfig.strapi, options);
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = resolve("./runtime");
    nuxt.options.build.transpile.push(runtimeDir);
    addPlugin(resolve(runtimeDir, "strapi.plugin"));
    addImportsDir(resolve(runtimeDir, "composables"));
    addImportsDir(resolve(runtimeDir, `composables-${options.version}`));
    extendViteConfig((config) => {
      config.optimizeDeps = config.optimizeDeps || {};
      config.optimizeDeps.include = config.optimizeDeps.include || [];
      config.optimizeDeps.include.push("qs");
    });
    const adminUrl = joinURL(nuxt.options.runtimeConfig.public.strapi.url, "/admin/");
    logger.info(`Strapi Admin URL: ${adminUrl}`);
    if (options.devtools) {
      nuxt.hook("devtools:customTabs", (iframeTabs) => {
        iframeTabs.push({
          name: "strapi",
          title: "Strapi",
          icon: "i-logos-strapi-icon",
          view: {
            type: "iframe",
            src: adminUrl
          }
        });
      });
    }
  }
});

export { module as default };
