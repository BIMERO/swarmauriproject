<template>
  <div class="card" :style="{ backgroundColor: bgColor }">
    <p>{{ headerTitle }}</p>
    <h3>$ {{ amount }}</h3>
    <span>Saved {{ percent }}%</span>
  </div>
</template>

<script setup lang="ts">
const { headerTitle, amount, percent, bgColor } = defineProps({
  headerTitle: {
    type: String,
    default: "",
  },
  amount: {
    type: String,
    default: "",
  },
  percent: {
    type: String,
    default: "",
  },
  bgColor: {
    type: String,
    default: "#f4f4f9",
  },
});
</script>

<style scoped>
.card {
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card p {
  font-size: 18px;
  font-weight: 600;
}

.card h3 {
  font-size: 2rem;
}
</style>
