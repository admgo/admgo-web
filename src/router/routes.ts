import { RouteRecordRaw } from 'vue-router'
import { Layout } from '@/components/layout'
import workbench from '@/pages/workbench/overview.vue'
// import dashboard from '@/pages/workbench/dashboard.vue'
import test from '@/pages/test-jsonform.vue'
import Cmdbs from '@/pages/namespace/cmdbs.vue'
import CmdbDashboard from '@/pages/namespace/cmdb/dashboard.vue'
import CmdbModel from '@/pages/namespace/cmdb/model.vue'
import dashboard from '@/pages/namespace/dashboard.vue'
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
      {
        path: '/:namespaces([A-Za-z0-9_-]+)+',
        alias: '/:namespaces([A-Za-z0-9_-]+)+/dashboard',
        name: 'namespace-dashboard',
        meta: {
          title: '概览',
          requiresAuth: true,
        },
        component: dashboard,
      },
      {
        path: '/:namespaces([A-Za-z0-9_-]+)+/cmdbs',
        name: 'namespace-cmdbs',
        meta: {
          title: 'Cmdbs',
          requiresAuth: true,
        },
        component: Cmdbs,
      },
      {
        path: '/:namespaces([A-Za-z0-9_-]+)+/cmdb/:cmdb([A-Za-z0-9_-]+)',
        alias:
          '/:namespaces([A-Za-z0-9_-]+)+/cmdb/:cmdb([A-Za-z0-9_-]+)/dashboard',
        name: 'namespace-cmdb-dashboard',
        meta: {
          title: 'CmdbDashboard',
          requiresAuth: true,
        },
        component: CmdbDashboard,
      },
      {
        path: '/:namespaces([A-Za-z0-9_-]+)+/cmdb/:cmdb([A-Za-z0-9_-]+)/model',
        name: 'namespace-cmdb-model',
        meta: {
          title: 'CmdbModel',
          requiresAuth: true,
        },
        component: CmdbModel,
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
