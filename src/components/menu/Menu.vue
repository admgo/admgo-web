<script setup lang="ts">
// import { useRoute } from 'vitepress'
import Header from './header/Header.vue'
import Footer from './footer/Footer.vue'
import Body from './body/Body.vue'
// const $route = useRoute()
console.log('i am in menu')
</script>

<template>
  <div class="h-screen bg-gray-300">
    <div class="flex-col h-full flex">
      <!--    Menu Header-->
      <div class="flex-shrink-0 h-32">
        <Header></Header>
      </div>
      <!--    Menu Body-->
      <div class="flex-auto overflow-auto">
        <Body class=""></Body>
      </div>
      <!--    Menu Footer-->
      <div class="flex-shrink-0 h-[52px]">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
