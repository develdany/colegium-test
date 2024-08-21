<template>
  <div class="row justify-content-end">
    <div class="footer mb-3 me-2 col-auto">
      <span class="status-wrapper">
        <span class="status-circle summary-P">P</span>
        <span class="status-text">Presente</span>
      </span>
  
      <span class="status-wrapper">
        <span class="status-circle summary-V">V</span>
        <span class="status-text">Presente Virtual</span>
      </span>
  
      <span class="status-wrapper">
        <span class="status-circle summary-A">A</span>
        <span class="status-text">Ausente</span>
      </span>
  
      <span class="status-wrapper">
        <span class="status-circle summary-T">T</span>
        <span class="status-text">Tarde/atraso</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterAttendance",
};
</script>

<style scoped>
.row{
  background-color: #9bc7eb;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.status-wrapper {
  display: flex;
  align-items: center;
  margin-right: 15px;
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
  color: #000000;
}

.status-text {
  font-size: 16px;
  font-weight: bold;
}
</style>
