import { defineStore } from 'pinia'
import VueCookies from 'vue-cookies'
// import { getCurrentInstance } from 'vue'
// const { proxy }: any = getCurrentInstance()
// console.log(proxy)
const isAuthenticated: boolean = VueCookies.get('access_token') != null
export const useUserStore = defineStore('user', () => {
  return { isAuthenticated }
})
