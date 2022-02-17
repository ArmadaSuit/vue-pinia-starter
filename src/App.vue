<template>
  <div class="loader-wrap" v-if="systemStore.isLoading">
    <div class="loader">loading</div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useSystemStore } from "./stores/system-store";

export default defineComponent({
  setup() {
    const systemStore = useSystemStore();
    return { systemStore };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.loader-wrap {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  z-index: 1000;
}

.loader {
  font-size: 32px;
  animation: flash 0.3s linear infinite;
}

@keyframes flash {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>
