import { RouteRecordRaw } from 'vue-router'
import login from '@/pages/login.vue'
import workbench from '@/pages/workspace/workbench.vue'

export const routes: Readonly<RouteRecordRaw[]> = [
  { path: '/login', component: login },
  { path: '/workbench', component: workbench },
]
