import { createRouter, createWebHistory } from 'vue-router'

import { testingRouteGuard, authGuard } from './utils'

import EmptyLayout from '@/layouts/EmptyLayout/EmptyLayout.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: { name: 'auth' }
  },
  {
    path: '/auth',
    component: EmptyLayout,
    meta: {
      auth: false
    },
    children: [
      {
        path: '',
        name: 'auth',
        component: () => import ( '@/views/auth/TheAuth.vue' )
      }
    ]
  },
  {
    path: '/todo',
    component: () => import( '@layouts/TodoLayout/TodoLayout.vue' ),
    meta: {
      auth: true,
    },
    children: [
      {
        path: '',
        name: 'todo',
        component: () => import( '@/views/todo/TheUsers.vue' )
      },
      {
        path: 'graph',
        name: 'graph',
        component: () => import( '@/views/todo/TheGraph.vue' )
      }
    ]
  },
  {
    path: '/error-page',
    name: 'errorPage',
    component: EmptyLayout,
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

router.beforeEach( authGuard )

export default router
