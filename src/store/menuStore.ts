import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface Item {
  name: string
  value: string
  href?: string
  sub?: Item[]
  child?: Item[]
}
export const useMenuStore = defineStore('menu', () => {
  let menu: Item[] = reactive([
    {
      name: '',
      value: '',
    },
  ])
  function changeMenu(newMenu: Item[]) {
    menu = newMenu
  }

  return { menu, changeMenu }
})
