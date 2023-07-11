import { defineStore } from 'pinia'
import _ from "lodash"

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
            if (!_.find(this.breadcrumbs, { title: value.title })) {
                this.breadcrumbs.push(value)
            }
        },
    },
    getters: {
        list: (state) => state.breadcrumbs,
    }
})
