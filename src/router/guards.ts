import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { setTitle } from '@/lib/utils.ts'
import { useRouteStore } from '@/store/routeStore.ts'
import { useUserStore } from '@/store/userStore.ts'

export const beforeEach = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  console.log(to)
  console.log(from)
  // console.log(_)

  if (useUserStore().isAuthenticated) {
  } else {
    useUserStore().isAuthenticated = false
  }

  next()
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
