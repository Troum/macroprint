import { defineStore } from 'pinia'

export const useHeaderStore = defineStore({
    id: 'header-store',
    state: () => {
        return {
            header: '',
        }
    },
    persist: true,
    actions: {
        setHeader(value: any) {
            this.header = value
        },
    },
    getters: {
        title: state => state.header,
    }
})
