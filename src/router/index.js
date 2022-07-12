import { createRouter, createWebHistory } from 'vue-router'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: EmptyLayout
  },
]

const router = createRouter( {
  history: createWebHistory( process.env.BASE_URL ),
  routes
} )

export default router
