import { h as defineStore } from "../server.mjs";
const useHeaderStore = defineStore({
  id: "header-store",
  state: () => {
    return {
      header: ""
    };
  },
  persist: true,
  actions: {
    setHeader(value) {
      this.header = value;
    }
  },
  getters: {
    title: (state) => state.header
  }
});
export {
  useHeaderStore as u
};
//# sourceMappingURL=header-2846e1cc.js.map
