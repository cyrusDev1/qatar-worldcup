import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Today from '../views/Today.vue'


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
    }
  ]
})

export default router
