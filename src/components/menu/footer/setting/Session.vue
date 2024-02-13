<script setup lang="ts">
import { Smartphone } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div>
    <h1 class="text-xl font-semibold">会话记录</h1>
    <p class="text-sm text-secondary-text-color leading-8 my-2">
      以下是当前使用您在 admgo
      中登录的所有设备。您可以单独注销每个设备或一次注销所有其他设备。如果您发现不明登录记录，请注销该设备并立即更改您的
      admgo 账号密码。
    </p>
    <!--    当前会话-->
    <h1 class="text-sm text-secondary-text-color font-semibold mt-6">
      当前会话
    </h1>
    <ul class="divide-y divide-gray-200">
      <li class="py-3">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div
            class="flex-shrink-0 w-12 h-12 items-center justify-center flex bg-secondary-background rounded-full"
          >
            <Smartphone class="text-secondary-text-color"></Smartphone>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">
              Macos · Chrome
            </p>
            <p class="text-xs text-gray-500 truncate">
              于 2024-02-13 22:20:02 登录 112.12.38.91
            </p>
          </div>
        </div>
      </li>
    </ul>
    <!--    其他会话-->
    <h1 class="text-sm text-secondary-text-color font-semibold mt-6">
      其他会话
    </h1>
    <ul class="divide-y divide-gray-200">
      <li class="py-3">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div
            class="flex-shrink-0 w-12 h-12 items-center justify-center flex bg-secondary-background rounded-full"
          >
            <Smartphone class="text-secondary-text-color"></Smartphone>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">
              Macos · Chrome
            </p>
            <p class="text-xs text-gray-500 truncate">
              于 2024-02-13 22:20:02 登录 112.12.38.91
            </p>
          </div>
          <div
            class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
          >
            X
          </div>
        </div>
      </li>
      <li class="py-3">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div
            class="flex-shrink-0 w-12 h-12 items-center justify-center flex bg-secondary-background rounded-full"
          >
            <Smartphone class="text-secondary-text-color"></Smartphone>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">
              Macos · Chrome
            </p>
            <p class="text-xs text-gray-500 truncate">
              于 2024-02-13 22:20:02 登录 112.12.38.91
            </p>
          </div>
          <div
            class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
          >
            X
          </div>
        </div>
      </li>
    </ul>
    <!--    注销所有设备-->
    <h1 class="text-sm text-secondary-text-color font-semibold mt-6">
      注销所有设备
    </h1>
    <p class="text-sm text-secondary-text-color leading-8 my-2">
      注销所有除当前之外的所有会话
    </p>
    <Button variant="destructive"> 注销所有会话 </Button>
  </div>
</template>
