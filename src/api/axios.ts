import { createAxiosByInterceptors } from '@/lib/request.ts'
import { AxiosRequestConfig } from 'axios'

const axios = createAxiosByInterceptors({
  baseURL:
    import.meta.env.VITE_PROTOCOL +
    '://' +
    import.meta.env.VITE_DOMAIN +
    import.meta.env.VITE_BASE_URL,
})

export function get(api: string, c: AxiosRequestConfig) {
  return axios.get(api, c)
}

export function post(api: string, data: any, c: AxiosRequestConfig) {
  return axios.post(api, data, c)
}

export function put(api: string, data: any, c: AxiosRequestConfig) {
  return axios.put(api, data, c)
}

export function del(api: string, c: AxiosRequestConfig) {
  return axios.delete(api, c)
}
