<script setup lang="ts">
import { Header } from "@/components/head";
import { Menu } from "@/components/menu"
// document.documentElement.classList.add('dark')
</script>

<template>
  <div class="bg-gray-100 dark:bg-gray-900 flex flex-col h-screen">
<!--    头部-->
    <div class="h-14">
      <Header></Header>
    </div>
<!--    Body-->
    <div class="flex-grow overflow-auto">
      <div class="flex-row flex h-full">
<!--        菜单-->
        <div class="w-48 bg-background max-lg:hidden h-full">
          <Menu></Menu>
        </div>
<!--        主体-->
        <div class="flex-grow h-full">
          body
        </div>
      </div>
    </div>
  </div>
</template>