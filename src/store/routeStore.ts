import { defineStore } from 'pinia'
import { ref } from 'vue'
import { router } from '@/router'
import { Layout } from '@/components/layout'
export const useRouteStore = defineStore('route', () => {
  // const isLoading = ref(false)
  const isAddRoutes = ref(false)
  const syncRoute = () => {
    // 异步获取路由信息
    router.addRoute({
      path: '/cmdb',
      name: 'cmdb',
      redirect: { name: 'cmdb-overview' },
      component: Layout,
      children: [
        {
          path: '/cmdb/overview',
          name: 'cmdb-overview',
          component: () => import('@/pages/cmdb/overview.vue'),
        },
      ],
    })
    isAddRoutes.value = true
  }

  return { isAddRoutes, syncRoute }
})
