<template>
  <div class="dashboard-container">
    <div class="metrics">
      <Card
        headerTitle="Total Income"
        amount="600,000"
        percent="25"
        bgColor="#3B76EF"
      /><Card
        headerTitle="Total Income"
        amount="80,000"
        percent="45"
        bgColor="#63C7FF"
      /><Card
        headerTitle="Total Income"
        amount="100,000"
        percent="75"
        bgColor="#A66DD4"
      /><Card
        headerTitle="Total Income"
        amount="20,000"
        percent="95"
        bgColor="#6DD4B1"
      />
    </div>

    <div class="progressbar-metrics">
      <h2>Progress Overview</h2>
      <div class="progress-grid">
        <div v-for="item in progressData" :key="item.label" class="progressbar">
          <p>{{ item.label }}</p>
          <ProgressBar :progress="item.progress" class="custom-progress" />
        </div>
      </div>
    </div>

    <div class="progressbar-metrics">
      <h2>Overview</h2>
      <div class="progresscircle">
        <div v-for="data in progressData2" :key="data.id" class="progress-item">
          <ProgressCircle
            :progress="data.progress / 100"
            class="custom-progress"
          />
          <span class="progress-label">{{ data.label }}</span>
        </div>
      </div>
    </div>

    <div class="progressbar-metrics">
      <h2>Users</h2>
      <DataTable :columns="tableColumns" :rows="tableRows" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from "../components/Card.vue";
import DataTable from "@swarmakit/vue/src/components/DataTable/DataTable.vue";
import {
  tableColumns,
  tableRows,
  progressData,
  progressData2,
} from "../data/data";
import ProgressCircle from "@swarmakit/vue/src/components/ProgressCircle/ProgressCircle.vue";
import ProgressBar from "@swarmakit/vue/src/components/ProgressBar/ProgressBar.vue";
</script>

<style scoped>
.metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  background-color: #fff;
  padding: 1.25rem;
  border-radius: 0.5rem;
}

.progressbar-metrics {
  background: #fff;
  border-radius: 0.5rem;
  margin: 1.25rem 0;
  padding: 1.25rem;
}

.progressbar-metrics h2 {
  margin-bottom: 1.25rem;
}

.progressbar-metrics .progress-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.progressbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.progressbar p {
  width: 100%;
  max-width: 8rem;
  font-weight: 600;
}

.data-table[data-v-3645480b] {
  overflow-y: auto;
}

.progresscircle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.custom-progress {
  --progress-bar-color: rgb(47, 144, 247);
}

.progress-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress-label {
  margin-top: 8px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}
@media screen and (max-width: 700px) {
  .metrics {
    grid-template-columns: 1fr;
  }

  .progressbar {
    flex-direction: column;
    align-items: baseline;
    gap: 0.5rem;
  }

  .progressbar p {
    max-width: 100%;
  }
}
</style>
