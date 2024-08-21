<template>
  <div class="mt-5 mb-2 text-center">Resumen del día</div>
  <div class="header">
    <span
      v-for="(count, status) in summary"
      :key="status"
      class="status-wrapper"
    >
      <span :class="statusClass(status)" class="status-circle">
        {{ status }}
      </span>
      <span :style="{ color: statusColor(status) }" class="status-count">
        {{ count }}
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "HeaderAttendance",
  props: {
    summary: Object,
  },
  methods: {
    statusClass(status) {
      return {
        'summary-item': true,
        [`summary-${status}`]: true,
      };
    },
    statusColor(status) {
      switch (status) {
        case 'P':
          return '#4CAF50';
        case 'V':
          return '#2196F3';
        case 'A':
          return '#F44336'; 
        case 'T':
          return '#FFEB3B';
        default:
          return '#000'; 
      }
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.status-wrapper {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.status-wrapper:last-child {
  margin-right: 0;
}

.status-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px; 
  height: 40px;
  border-radius: 50%; 
  font-size: 18px; 
  font-weight: bold;
  color: white; 
  margin-right: 7px;
}

.summary-P {
  background-color: #4CAF50;
}

.summary-V {
  background-color: #2196F3; 
}

.summary-A {
  background-color: #F44336; 
}

.summary-T {
  background-color: #FFEB3B;
}

.status-count {
  font-size: 16px;
  font-weight: bold;
}
</style>
