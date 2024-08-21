<template>
  <div>
    <Header :summary="attendanceSummary" />
    <div class="container">
      <div class="row" >
        <AttendanceCard
          v-for="student in students"
          :key="student.id"
          :student="student"
          @updateStatus="updateStudentStatus"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>
  
<script>
import { studentsMock } from '@/data/studentsMock';
import AttendanceCard from '@/components/AttendanceCard.vue';
import Header from '@/components/HeaderAttendance.vue';
import Footer from '@/components/FooterAttendance.vue';

export default {
  components: {
    AttendanceCard,
    Header,
    Footer,
  },
  data() {
    return {
      students: studentsMock,
    };
  },
  computed: {
    attendanceSummary() {
      return this.students.reduce((summary, student) => {
        summary[student.status] = (summary[student.status] || 0) + 1;
        return summary;
      }, {});
    },
  },
  methods: {
    updateStudentStatus(updatedStudent) {
      const index = this.students.findIndex(student => student.id === updatedStudent.id);
      if (index !== -1) {
        this.$set(this.students, index, updatedStudent);
      }
    },
  },
};
</script>

  