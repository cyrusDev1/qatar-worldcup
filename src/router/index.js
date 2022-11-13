import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Today from '../views/Today.vue'
import Standing from '../views/Standing.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
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
    }
  ]
})

export default router
