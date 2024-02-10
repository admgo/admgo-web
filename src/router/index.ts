import {
  createRouter,
  NavigationGuardNext,
  RouteLocationNormalized,
} from 'vue-router'
import { createWebHistory } from 'vue-router'
import { routes } from './routes.ts'

export const router = createRouter({
  history: createWebHistory(), // history 模式
  routes: routes,
})

// 注册全局的导航守卫
router.beforeResolve(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => {
    console.log(to)
    console.log(from)
    next()
  },
)
