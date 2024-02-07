<script setup lang="ts">
import CommandSearch from './CommandSearch.vue'
import { Button } from '@/components/ui/button'
import { Bell, Warehouse } from 'lucide-vue-next'
import PNG from '@/assets/logo/logo.png'
</script>

<template>
  <div class="h-full shadow flex flex-col">
    <div class="h-12">
      <div class="flex flex-row h-full">
        <div class="w-2/3 flex justify-center items-center">
          <div class="h-10 w-5/6">
            <img
              alt="Dashboard"
              class="block h-full"
              :image="{
                dark: PNG,
                light: PNG,
              }"
              :src="PNG"
            />
          </div>
        </div>
        <div class="w-1/3 flex justify-center items-center h-full">
          <Button
            variant="ghost"
            class="bg-primary-background x-0 p-0 h-3/4 w-5/6"
          >
            <Bell class="h-4 w-4 font-black"></Bell>
          </Button>
        </div>
      </div>
    </div>
    <div class="h-10">
      <div class="flex flex-row h-full">
        <div class="w-1/3 flex justify-center items-center h-full">
          <Button
            variant="ghost"
            class="bg-primary-background x-0 p-0 h-5/6 w-11/12"
          >
            <p class="text-sm text-muted-foreground">
              <Bell class="h-4 w-4 font-black"></Bell>
            </p>
          </Button>
        </div>
        <div class="w-1/3 flex justify-center items-center h-full">
          <Button
            variant="ghost"
            class="bg-primary-background x-0 p-0 h-5/6 w-11/12"
          >
            <p class="text-sm text-muted-foreground">
              <Bell class="h-4 w-4 font-black"></Bell>
            </p>
          </Button>
        </div>
        <div class="w-1/3 flex justify-center items-center h-full">
          <Button
            variant="ghost"
            class="bg-primary-background x-0 p-0 h-5/6 w-11/12"
          >
            <p class="text-sm text-muted-foreground">
              <Warehouse class="h-4 w-4 font-black" />
            </p>
          </Button>
        </div>
      </div>
    </div>
    <div class="h-10 px-2">
      <CommandSearch class="h-7 w-full leading-10"></CommandSearch>
    </div>
  </div>
</template>

<style scoped></style>
