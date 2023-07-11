import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["piniaPersistedstate"]?: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["strapi"]?: typeof import("@nuxtjs/strapi").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@pinia-plugin-persistedstate/nuxt", Exclude<NuxtConfig["piniaPersistedstate"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxtjs/strapi", Exclude<NuxtConfig["strapi"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   strapi: {
      url: string,

      prefix: string,

      version: string,

      cookie: any,

      auth: any,

      cookieName: string,

      devtools: boolean,
   },
  }
  interface PublicRuntimeConfig {
   baseURL: string,

   persistedState: {
      storage: string,

      debug: boolean,

      cookieOptions: any,
   },

   strapi: {
      url: string,

      prefix: string,

      version: string,

      cookie: any,

      auth: any,

      cookieName: string,

      devtools: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }