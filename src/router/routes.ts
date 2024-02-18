import { RouteRecordRaw } from 'vue-router'
import login from '@/pages/login.vue'
import { Layout } from '@/components/layout'
import workbench from '@/pages/workbench/overview.vue'
import dashboard from '@/pages/workbench/dashboard.vue'
import NotFound from '@/pages/404.vue'

export const routes: Readonly<RouteRecordRaw[]> = [
  // ===============登录页===============
  { path: '/login', component: login, name: 'login' },
  // ===============/===============
  { path: '/', redirect: { name: 'workbench-overview' } },
  // ===============工作台===============
  {
    path: '/',
    name: 'layout',
    redirect: { name: 'workbench-overview' },
    component: Layout,
    children: [
      {
        path: '/workbench/overview',
        name: 'workbench-overview',
        meta: {
          title: '概览',
        },
        component: workbench,
      },
      {
        path: '/workbench/dashboard',
        name: 'workbench-dashboard',
        meta: {
          title: '仪表盘',
        },
        component: dashboard,
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
