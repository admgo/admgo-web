import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingStore = defineStore('setting', () => {
  const defaultValue: string = 'account'
  let isOpen = ref(false)
  let tabValue = ref('account')
  const goTo = (value: string) => {
    tabValue.value = value
    isOpen.value = true
  }
  const open = () => {
    tabValue.value = defaultValue
    isOpen.value = true
  }
  const close = () => {
    isOpen.value = false
  }

  return { isOpen, goTo, tabValue, open, close }
})
