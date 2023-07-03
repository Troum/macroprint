import { defineStore } from 'pinia'

export const useBreadcrumbsStore = defineStore({
    id: 'breadcrumbs-store',
    state: () => {
        return {
            breadcrumbs: [],
        }
    },
    persist: true,
    actions: {
        addBreadcrumbToBreadcrumbs(value: any) {
            this.breadcrumbs = value
        },
    },
    getters: {
        list: state => state.breadcrumbs,
    }
})
