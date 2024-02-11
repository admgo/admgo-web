<script setup lang="ts">
import { Menu } from '@/components/menu'
</script>

<template>
  <div class="h-screen">
    <div class="h-full overflow-auto">
      <div class="flex-row flex h-full">
        <!--        菜单-->
        <div class="w-48 bg-secondary-background h-full overflow-auto">
          <Menu />
        </div>
        <!--        主体-->
        <div class="flex-grow h-full bg-primary-background">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
