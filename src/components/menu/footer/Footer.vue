<script setup lang="ts">
import UserInfo from './UserInfo.vue'
import Setting from './setting/Setting.vue'
</script>

<template>
  <div class="h-full flex flex-row">
    <!--    User-->
    <div class="h-full w-2/3 p-0 m-0">
      <div class="p-[4px] h-full w-full">
        <UserInfo></UserInfo>
      </div>
    </div>
    <div class="flex-grow h-full">
      <div class="flex justify-center items-center h-full">
        <Setting></Setting>
      </div>
    </div>
  </div>
</template>
