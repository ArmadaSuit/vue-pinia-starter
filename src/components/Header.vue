<template>
  <div class="header">
    <div>Wonderful Shop</div>
    <div class="cart">
      <i class="bx bx-cart" @mouseover="mouseover" @mouseleave="mouseleave">
        <div class="cart-abstract" v-if="isShowCart && userStore.getCartSize">
          <div>
            <b> subtotal: {{ userStore.getTotalAmount }}</b>
          </div>
          <div v-for="e in userStore.cart" :key="e.id">
            <div>
              {{ e.name + " x " + e.count }}
              <i
                class="bx bx-trash"
                style="cursor: pointer"
                @click="userStore.removeItem(e.id)"
              ></i>
            </div>
          </div>
        </div>
      </i>
      <span class="cart-text" v-if="userStore.getCartSize">{{
        userStore.getCartSize
      }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { useUserStore } from "@/stores/user-store";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HeaderComponent",
  setup() {
    const userStore = useUserStore();
    const isShowCart = ref(false);
    const mouseover = () => {
      isShowCart.value = true;
    };
    const mouseleave = () => {
      isShowCart.value = false;
    };

    // subscribe
    userStore.$onAction(
      ({
        store, // store instance
        after, // hook if the action throws or rejects
      }) => {
        after(() => {
          if (!store.getCartSize) {
            // when trash all item on popup, mouseleave event is not kicked
            isShowCart.value = false;
          }
        });
      }
    );

    return { userStore, isShowCart, mouseover, mouseleave };
  },
});
</script>

<style scoped>
.header {
  background-color: bisque;
  font-size: 36px;
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  padding: 6px 12px;
}

.cart {
  position: relative;
  padding: 0 18px;
}

.cart-abstract {
  position: absolute;
  background-color: cornsilk;
  box-shadow: 2px 2px 4px gray;
  font-size: 16px;
  left: -130px;
  padding: 8px;
  border-radius: 4px;
  width: 200px;
}

.cart-abstract > div {
  padding: 6px 0;
}

.cart-text {
  background-color: red;
  display: block;

  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  position: absolute;
  top: 0px;
  right: 12px;
}
</style>
