import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Today from '../views/Today.vue';
import Standing from '../views/Standing.vue';
import Calendar from '../views/Calendar.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/today',
      component: Today
    },
    {
      path: '/standing',
      component: Standing
    },
    {
      path: '/calendar',
      component: Calendar
    }
  ],
  linkActiveClass: 'active-link'
});

export default router;
