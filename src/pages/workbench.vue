<script setup lang="ts">
import { Menu } from '@/components/menu'
// document.documentElement.classList.add('dark')
</script>

<template>
  <div class="h-screen">
    <div class="h-full overflow-auto">
      <div class="flex-row flex h-full">
        <!--        菜单-->
        <div class="w-48 bg-secondary-background h-full overflow-auto">
          <Menu></Menu>
        </div>
        <!--        主体-->
        <div class="flex-grow h-full bg-primary-background">body</div>
      </div>
    </div>
  </div>
</template>
