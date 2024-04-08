import { defineStore } from 'pinia'
import { reactive } from 'vue'
type ContentItemType = 'item' | 'separator' | 'group'
interface Menubar {
  name: string
  menu: Array<MenubarMenu>
}
interface MenubarMenu {
  name: string
  value: string
  path?: string
  shortcut?: string
  type: ContentItemType
  content?: Array<MenubarMenuItem>
}
interface MenubarMenuItem {
  name: string
  value: string
  path?: string
  shortcut?: string
  type: ContentItemType
}
export const useMenuStore = defineStore('menu', () => {
  const menu: Menubar = reactive({
    name: 'admgo',
    menu: [
      {
        name: '单独的',
        value: 'item',
        type: 'item',
      },
      {
        name: '分割线',
        value: 'separator',
        type: 'separator',
      },
      {
        name: '权限',
        value: 'auth',
        type: 'group',
        content: [
          {
            type: 'item',
            name: 'New Window',
            value: 'new_win',
            path: '',
          },
          {
            type: 'separator',
            name: 'separator',
            value: 'hello',
            path: '',
          },
          {
            type: 'item',
            name: 'New Tab',
            value: 'new_tab',
            path: '',
          },
        ],
      },
      {
        name: 'Edit',
        value: 'Edit',
        type: 'group',
        content: [
          {
            type: 'item',
            name: 'Undo',
            value: 'Undo',
            path: '',
          },
          {
            type: 'item',
            name: 'Redo',
            value: 'Redo',
            path: '',
          },
        ],
      },
    ],
  })

  return { menu }
})
