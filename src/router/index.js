import { createRouter, createWebHistory } from 'vue-router';
import AttendanceView from '@/views/AttendanceView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AttendanceView,
  },
  {
    path: '/detalles/:id',
    name: 'StudentDetails',
    component: () => import('@/views/StudentDetails.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;