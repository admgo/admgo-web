import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
// import { camelize, getCurrentInstance, toHandlerKey } from 'vue'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 修改窗口的标题.
 *
 * @param title - 标题
 *
 */
export const setTitle = (title: string | undefined) => {
  window.document.title =
    title == undefined ? 'admgo' : title == '' ? 'admgo' : title
}
