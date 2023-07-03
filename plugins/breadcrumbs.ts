// @ts-ignore
import breadcrumbs from 'vue-3-breadcrumbs'

// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
    const app = nuxtApp.vueApp.use(breadcrumbs, {
        includeComponent: true, // same as for vue
    })
    return {
        provide: {
            breadcrumbs: app.config.globalProperties.$breadcrumbs
        }
    }
})
