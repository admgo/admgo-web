import { RouteRecordRaw } from 'vue-router'
import login from '@/pages/login.vue'
import { Layout } from '@/components/layout'
import workbench from '@/pages/workspace/workbench.vue'

export const routes: Readonly<RouteRecordRaw[]> = [
  { path: '/login', component: login },
  {
    path: '/workbench',
    component: Layout,
    children: [
      {
        path: '/workbench',
        component: workbench,
      },
    ],
  },
]
