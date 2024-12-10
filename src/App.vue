<template>
  <div class="app_container">
    <Sidebar :isOpen="sidebarOpen" @click="closeSidebar" />

    <main :class="{ 'main-open': sidebarOpen && isDesktop }">
      <Header @toggleSidebar="toggleSidebar" />
      <section @click="closeSidebar">
        <router-view />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "./layout/Header.vue";
import Sidebar from "./layout/Sidebar.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const sidebarOpen = ref(false);
const isDesktop = ref(true);

const closeSidebar = () => {
  sidebarOpen.value = false;
};

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const updateScreenSize = () => {
  isDesktop.value = window.innerWidth > 768;
};

onMounted(() => {
  updateScreenSize();
  window.addEventListener("resize", updateScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateScreenSize);
});
</script>

<style scoped>
#app {
  min-height: 100vh;
  position: relative;
}

.app_container {
  display: flex;
}

main {
  min-height: 100vh;
  width: 100%;
  transition: margin-left 0.3s;
  margin-left: 300px;
  padding: 1.25rem;
}

.main-open {
  margin-left: 300px;
}

section {
  margin: 20px 0;
}

@media (max-width: 768px) {
  main {
    margin-left: 0;
  }
  .main-open {
    margin-left: 0;
  }
}
</style>
