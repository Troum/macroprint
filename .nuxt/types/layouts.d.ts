import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "macroprint"
declare module "/var/www/macroprint.site/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}