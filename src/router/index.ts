import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.ts'
import { beforeEach, afterEach } from './guards.ts'

export const router = createRouter({
  history: createWebHistory(), // history 模式
  routes: routes,
  // strict: true,
})

// 注册全局的前置导航守卫
router.beforeResolve(beforeEach)

// 注册全局的后置导航守卫
router.afterEach(afterEach)
