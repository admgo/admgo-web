<script setup lang="ts">
import { login } from '@/api/user.api.ts'
import { Button } from '@/components/ui/button'
import { useRouteStore } from '@/store/routeStore.ts'
const c = () => {
  console.log(
    login.post({ username: 'lisi', password: 'lisi' }).then((res) => {
      console.log(res)
    }),
  )
}
// const routeStore = useRouteStore()
// console.log(routeStore.syncRoute())
const d = () => {
  console.log(
    login.post({ username: 'lidsi', password: 'lidsi' }).then((res) => {
      console.log(res)
    }),
  )
}
</script>

<template>
  <div>
    <Button @click="c">c</Button>
    <Button @click="d">d</Button>
  </div>
</template>

<style scoped></style>
