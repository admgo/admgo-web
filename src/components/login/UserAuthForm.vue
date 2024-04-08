<script setup lang="ts">
import { ref } from 'vue'
import { RefreshCw } from 'lucide-vue-next'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { login } from '@/api/user.api.ts'
import { useUserStore } from '@/store/userStore.ts'
import { router } from '@/router'

const isLoading = ref(false)

const username = ref()
const password = ref()

async function onSubmit(event: Event) {
  isLoading.value = true
  login
    .post({ username: username.value, password: password.value })
    .then((res) => {
      if (res.data.code === 0) {
        // useUserStore().isAuthenticated = true
        console.log(useUserStore().isAuthenticated)
      } else {
        console.log(res.data)
      }

      isLoading.value = false
    })
  event.preventDefault()
}
</script>

<template>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <Input
            id="username"
            v-model="username"
            placeholder="用户名"
            type="text"
            autocapitalize="none"
            autocomplete="on"
            autocorrect="off"
            :disabled="isLoading"
          />
          <Input
            id="password"
            v-model="password"
            class="my-2"
            placeholder="密码"
            type="password"
            autocapitalize="none"
            autocomplete="on"
            autocorrect="off"
            :disabled="isLoading"
          />
        </div>
        <Button :disabled="isLoading">
          <RefreshCw v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
          登录
        </Button>
      </div>
    </form>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground"> 或使用 </span>
      </div>
    </div>
    <div class="h-40 overflow-auto w-full">
      <Button
        class="w-full mb-2"
        variant="outline"
        type="button"
        :disabled="isLoading"
      >
        LDAP
      </Button>
      <Button
        class="w-full mb-2"
        variant="outline"
        type="button"
        :disabled="isLoading"
      >
        LDAP
      </Button>
      <Button
        class="w-full mb-2"
        variant="outline"
        type="button"
        :disabled="isLoading"
      >
        SSO
      </Button>
      <Button
        class="w-full mb-2"
        variant="outline"
        type="button"
        :disabled="isLoading"
      >
        Gitlab
      </Button>
    </div>
  </div>
</template>
