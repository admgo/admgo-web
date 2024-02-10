import { RouteRecordRaw } from 'vue-router'
import login from '@/pages/login.vue'
import { Layout } from '@/components/layout'
import workbench from '@/pages/workspace/workbench.vue'
import dashboard from '@/pages/workspace/dashboard.vue'
import NotFound from '@/pages/404.vue'

export const routes: Readonly<RouteRecordRaw[]> = [
  // ===============登录页===============
  { path: '/login', component: login, name: 'login' },
  // ===============/===============
  { path: '/', redirect: { name: 'overview' } },
  // ===============工作台===============
  {
    path: '/workbench',
    name: 'workbench',
    redirect: { name: 'overview' },
    component: Layout,
    children: [
      {
        path: '/workbench/overview',
        name: 'overview',
        component: workbench,
      },
      {
        path: '/workbench/dashboard',
        name: 'dashboard',
        component: dashboard,
      },
    ],
  },
  // ===============404===============
  {
    // 404
    path: '/404',
    name: '404',
    component: NotFound,
  },
  {
    // 404
    path: '/:catchAll(.*)',
    name: 'NotFound',
    redirect: { name: '404' },
  },
]
