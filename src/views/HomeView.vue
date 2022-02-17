<template>
  <div>
    <Header />
    <table>
      <tr>
        <th>Product Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
      <tr v-for="e in itemModels" :key="e.id">
        <td>{{ e.name }}</td>
        <td>{{ e.unitPrice }}</td>
        <td>
          <input
            :id="e.id + 'count'"
            class="count"
            type="number"
            name="count"
            min="1"
            v-model="e.count"
          />
          <button class="add" @click="addCart(e)">add</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Header from "@/components/Header.vue";
import { useUserStore } from "@/stores/user-store";
import { CartItem, Item } from "@/entities/item";

export default defineComponent({
  name: "HomeView",
  components: {
    Header,
  },
  setup() {
    const userStore = useUserStore();
    const items: Item[] = [
      {
        id: "001",
        name: "Small Bag",
        unitPrice: 1,
      },
      {
        id: "002",
        name: "Medium Bag",
        unitPrice: 3,
      },
      {
        id: "003",
        name: "Large Bag",
        unitPrice: 5,
      },
    ];
    const itemModels = items.map((e) => {
      return { ...e, count: 1 };
    });
    const addCart = (item: CartItem) => {
      userStore.addItem({ ...item });
    };
    return {
      itemModels,
      counter: computed(() => userStore.getCartSize),
      userStore,
      addCart,
    };
  },
});
</script>

<style scoped>
td {
  padding: 6px 20px;
}

.count {
  width: 50px;
}

.add {
  margin-left: 10px;
}
</style>
