<template>
  <div
    class="sidebar-container"
    :class="{ 'sidebar-open': isOpen, 'sidebar-default': isDesktop }"
  >
    <figure>
      <img src="../assets/images/logo.png" alt="Logo" class="logo" />
    </figure>

    <nav>
      <ul>
        <li @click="closeSidebar">
          <router-link to="/">Dashboard</router-link>
        </li>
        <li @click="closeSidebar">
          <router-link to="/sales">Sales</router-link>
        </li>
      </ul>

      <ul>
        Logout
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
const { isOpen } = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const isDesktop = window.innerWidth > 768; // For default desktop sidebar behavior

import { defineEmits } from "vue";

const emit = defineEmits();

const closeSidebar = () => {
  emit("close-sidebar");
};
</script>

<style scoped>
.sidebar-container {
  width: 100%;
  max-width: 300px;
  padding: 2.5rem 1rem;
  min-height: 100vh;
  background: #f7faff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 16px;
  transform: translateX(-300px);
  transition: transform 0.3s ease;
  z-index: 1000;
  display: block;
  box-shadow: -2px 0px 7px #4567ee;
}

.sidebar-open {
  transform: translateX(0);
}

.sidebar-default {
  transform: translateX(0);
}

figure {
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #000;
}

nav {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: calc(100% - 60px);
  padding: 1.25rem 0;
}

.sidebar-container ul {
  list-style: none;
  padding: 0;
}

.sidebar-container a {
  text-decoration: none;
}

.sidebar-container a.router-link-active {
  font-weight: bold;
  background: #4567ee;
  color: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  display: flex;
  margin: 0.75rem 0;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-300px);
  }

  .sidebar-open {
    transform: translateX(0);
  }
}
</style>
