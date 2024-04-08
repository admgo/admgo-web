<script setup lang="ts">
import { Menu } from '@/components/menu'
import Login from '@/components/login/Login.vue'
import { useUserStore } from '@/store/userStore.ts'
import { getCurrentInstance } from 'vue'
const { proxy }: any = getCurrentInstance()
console.log(proxy)
</script>

<template>
  <div v-if="useUserStore().isAuthenticated" class="h-screen">
    <div class="h-full overflow-auto">
      <div class="flex-row flex h-full">
        <!--        菜单-->
        <div class="w-48 bg-secondary-background h-full overflow-auto">
          <Menu />
        </div>
        <!--        主体-->
        <div class="flex-grow h-full bg-primary-background overflow-auto">
          <router-view />
        </div>
      </div>
    </div>
  </div>
  <div v-if="!useUserStore().isAuthenticated"><Login /></div>
</template>

<style scoped></style>
