<template>
  <div class="header-container">
    <div class="menubar">
      <CIcon :icon="cilMenu" @click="toggleSidebar" class="icons" />
    </div>

    <div class="profile-contain">
      <CIcon :icon="cilBell" class="icons" />
      <CIcon :icon="cilEnvelopeClosed" class="icons" />
      <DarkModeToggle />
      <Avatar imageSrc="../assets/images/profile.png" />
      <!-- <img src="../assets/images/profile.png" alt="profile-img" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from "@swarmakit/vue/src/components/Avatar/Avatar.vue";
import { CIcon } from "@coreui/icons-vue";
import { cilMenu, cilBell, cilEnvelopeClosed } from "@coreui/icons";
import DarkModeToggle from "@swarmakit/vue/src/components/DarkModeToggle/DarkModeToggle.vue";

import { defineEmits } from "vue";

const emit = defineEmits();

const toggleSidebar = () => {
  emit("toggle-sidebar");
};
</script>

<style>
.header-container {
  background: white;
  padding: 12px 20px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icons {
  width: 1.75rem;
}

.profile-contain {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-end;
  width: 100%;
}

.menubar {
  display: none;
}

@media (max-width: 768px) {
  .menubar {
    display: block;
  }
}
</style>
