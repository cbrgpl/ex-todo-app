import { createRouter, createWebHistory } from 'vue-router'

import { testingRouteGuard } from './utils'

import EmptyLayout from '@/layouts/EmptyLayout.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: EmptyLayout
  },
  {
    path: '/testing',
    name: 'testing',
    component:  () => import( '@/views/TheTestingPage.vue' ),
    beforeEnter: testingRouteGuard
  }
]

const router = createRouter( {
  history: createWebHistory( process.env.BASE_URL ),
  routes
} )

export default router
