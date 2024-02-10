import { post } from './axios.ts'

// Login
interface loginPostReq {
  username: string
  password: string
}

export const login = {
  post: (data: loginPostReq) => post('/v1/user/login', { data: data }),
}

// Logout
