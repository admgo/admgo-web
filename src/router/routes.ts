import { RouteRecordRaw } from 'vue-router'
import { Layout } from '@/components/layout'
import workbench from '@/pages/workbench/overview.vue'
// import dashboard from '@/pages/workbench/dashboard.vue'
import test from '@/pages/test.vue'
import NotFound from '@/pages/404.vue'
// import Login from '@/components/login/Login.vue'

export const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'overview',
        meta: {
          title: '概览',
          requiresAuth: true,
        },
        component: workbench,
      },
      {
        path: '/test',
        name: 'test',
        meta: {
          title: '概览',
          requiresAuth: true,
        },
        component: test,
      },
    ],
  },
  // ===============404===============
  {
    // 404
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
      title: '404',
    },
    component: NotFound,
  },
]
