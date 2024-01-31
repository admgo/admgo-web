import {createRouter} from 'vue-router'
import {createWebHistory} from 'vue-router'
import {routes} from './routes.ts'

export  const router = createRouter({
    history: createWebHistory(),  // history 模式
    routes: routes,
})