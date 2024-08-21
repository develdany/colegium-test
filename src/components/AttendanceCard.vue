
<template>
  <div class="card col-sm-3 mb-4 me-3" style="width: 19rem;" @click="handleClick">
    <div class="card-body">
      <div class="row align-items-center">
        <div class="col-sm-4">
          <img :src="studentImg" alt="student image" class="student-img" />
        </div>
        <div class="col-sm-8">
          <h6>{{ student.name }}</h6>
        </div>
      </div>
    </div>
    <div class="row mt-1 mb-3">
      <div class="col-12 text-center">
        <StatusButton 
          v-for="(status, index) in statuses" 
          :key="index"
          :text="status.text"
          :color="status.color"
          :currentStatus="student.status"
          @changeStatus="updateStatus"
        />
      </div>
    </div>
  </div>
</template>
  
<script>
import StatusButton from './StatusButton.vue';

export default {
  name: "AttendanceCard",
  props: {
    student: Object,
  },
  components: {
    StatusButton,
  },
  data() {
    return {
      statuses: [
        { text: 'P', color: 'green' },
        { text: 'V', color: 'blue' },
        { text: 'A', color: 'red' },
        { text: 'T', color: 'yellow' },
      ],
    };
  },
  computed: {
    studentImg() {
      return 'https://www.w3schools.com/howto/img_avatar2.png';
    },
  },
  methods: {
    handleClick() {
      alert(`ID: ${this.student.id}\nNombre: ${this.student.name}\nEstado: ${this.student.status}`);
      this.$router.push(`/detalles/${this.student.id}`);
    },
    updateStatus(newStatus) {
      this.props.student.status = newStatus;
      this.$emit('updateStatus', this.student);
    },
  },
};
</script>

<style scoped>

.student-img {
  vertical-align: middle;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin-right: 10px;
}

.card {
  border-radius: 15px;
}
</style>
  