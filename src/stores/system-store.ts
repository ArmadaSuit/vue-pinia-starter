import { defineStore } from "pinia";

export const useSystemStore = defineStore("systemStore", {
  state: () => {
    return {
      isLoading: false,
    };
  },
  actions: {
    startLoading() {
      this.isLoading = true;
    },
    endLoading() {
      this.isLoading = false;
    },
  },
});
