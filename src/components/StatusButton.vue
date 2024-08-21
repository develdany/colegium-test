<template>
  <button
    :class="buttonClass"
    @click="emitChangeStatus"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "StatusButton",
  props: {
    text: String,
    color: String,
    currentStatus: String,
  },
  computed: {
    buttonClass() {
      return {
        'btn': true,
        'btn-outline': this.currentStatus !== this.text,
        [`btn-outline-${this.color}`]: this.currentStatus !== this.text,
        [`btn-${this.color}`]: this.currentStatus === this.text,
        'btn-square': true,
      };
    },
  },
  methods: {
    emitChangeStatus() {
      this.$emit('changeStatus', this.text);
    },
  },
};
</script>

<style scoped>
.btn-square {
  width: 60px;
  height: 60px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 2rem;
  padding: 0;
  margin: 0.2rem; 
}

.btn-outline-green {
  border-color: #4CAF50;
  color: #4CAF50;
}

.btn-outline-blue {
  border-color: #2196F3;
  color: #2196F3;
}

.btn-outline-red {
  border-color: #F44336;
  color: #F44336;
}

.btn-outline-yellow {
  border-color: #FFEB3B;
  color: #FFEB3B;
}

.btn-green {
  background-color: #4CAF50;
  color: white;
}

.btn-blue {
  background-color: #2196F3;
  color: white;
}

.btn-red {
  background-color: #F44336;
  color: white;
}

.btn-yellow {
  background-color: #FFEB3B;
  color: black; 
}
</style>
