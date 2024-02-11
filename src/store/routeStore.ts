import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { router } from '@/router'

export const useRouteStore = defineStore('store', () => {
  let route: RouteRecordRaw = reactive({
    path: '/workbench',
    name: 'workbench',
    component: () => import('@/pages/workspace/dashboard.vue'),
  })
  const getRoute = () => {
    // 异步获取路由信息
    return router
  }

  const changeRoute = (newRoute: RouteRecordRaw) => {
    route = newRoute
  }

  return { route, getRoute, changeRoute }
})
