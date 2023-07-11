import { defineNuxtPlugin } from '#app'
import breadcrumbs from 'vue-3-breadcrumbs'

export default defineNuxtPlugin((nuxtApp) => {
    const app = nuxtApp.vueApp.use(breadcrumbs, {
        includeComponent: true
    })
    return {
        provide: {
            breadcrumbs: app.config.globalProperties.$breadcrumbs
        }
    }
})