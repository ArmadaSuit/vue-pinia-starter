import { CartItem } from "@/entities/item";
import { defineStore } from "pinia";
import { useSystemStore } from "./system-store";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      cart: new Array<CartItem>(),
    };
  },
  getters: {
    getCartSize: (state) => state.cart.length,
    getTotalAmount: (state) =>
      state.cart.reduce(
        (prev, current) => prev + current.unitPrice * current.count,
        0
      ),
  },
  actions: {
    addItem(item: CartItem) {
      // DEMO: Accessing other stores actions
      const systemStore = useSystemStore();
      systemStore.startLoading();
      setTimeout(() => systemStore.endLoading(), 500);

      for (const e of this.cart) {
        if (e.id === item.id) {
          e.count += item.count;
          return;
        }
      }
      this.cart.push(item);
    },
    updateItem(item: CartItem) {
      // DEMO: Accessing other stores actions
      const systemStore = useSystemStore();
      systemStore.startLoading();
      setTimeout(() => systemStore.endLoading(), 500);

      for (const e of this.cart) {
        if (e.id === item.id) {
          e.count === item.count;
          return;
        }
      }
      this.cart.push(item);
    },
    removeItem(id: string) {
      // DEMO: Accessing other stores actions
      const systemStore = useSystemStore();
      systemStore.startLoading();
      setTimeout(() => systemStore.endLoading(), 500);

      this.cart = this.cart.filter((e) => e.id !== id);
    },
  },
});
