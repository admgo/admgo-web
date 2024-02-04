<script setup lang="ts">
import UserTab from './Usertab.vue'
import { Settings } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="h-full flex flex-row">
    <!--    User-->
    <div class="h-full w-2/3 p-0 m-0">
      <div class="p-[4px] h-full w-full">
        <UserTab></UserTab>
      </div>
    </div>
    <div class="flex-grow h-full">
      <div class="flex justify-center items-center h-full">
        <Button variant="ghost">
          <Settings class="w-4 h-4" />
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
