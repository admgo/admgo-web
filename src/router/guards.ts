import { RouteLocationNormalized } from 'vue-router'
import { setTitle } from '@/lib/utils.ts'
import { useRouteStore } from '@/store/routeStore.ts'

export const beforeEach = (to: RouteLocationNormalized) => {
  const routeStore = useRouteStore()
  if (!routeStore.isAddRoutes) {
    routeStore.syncRoute()
    return to.fullPath
  }
  return true
}

export const afterEach = (to: RouteLocationNormalized) => {
  setTitle(<string>to.meta.title)
}
