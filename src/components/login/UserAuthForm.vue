<script setup lang="ts">
import { ref } from 'vue'
import { RefreshCw } from 'lucide-vue-next';
// import GitHubLogo from '~icons/radix-icons/github-logo'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
const isLoading = ref(false)
async function onSubmit(event: Event) {
  event.preventDefault()
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>

<template>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <Label class="sr-only" for="email">
            Email
          </Label>
          <Input
              id="email"
              placeholder="用户名"
              type="text"
              auto-capitalize="none"
              auto-complete="email"
              auto-correct="off"
              :disabled="isLoading"
          />
          <Input
              class="my-2"
              id="email"
              placeholder="密码"
              type="email"
              auto-capitalize="none"
              auto-complete="email"
              auto-correct="off"
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
        <span class="bg-background px-2 text-muted-foreground">
          或使用
        </span>
      </div>
    </div>
    <Button variant="outline" type="button" :disabled="isLoading">
      <LucideSpinner v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
      <GitHubLogo v-else class="mr-2 h-4 w-4" />
      LDAP
    </Button>
  </div>
</template>