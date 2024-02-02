<script setup lang="ts">

import {cn} from "@/lib/utils.ts";
</script>

<template>
  <nav class="w-full flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 h-full">
    <div class="h-full  overflow-auto">
      <div class="bg-amber-700 ">
        <Button
            v-for="item in sidebarNavItems"
            :key="item.title"
            as="a"
            :href="item.href"
            variant="ghost"
            :class="cn(
              'w-full text-left justify-start',
              // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
            )"
        >
          {{ item.title }}
        </Button>
        <TooltipProvider :delayDuration=7>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="ghost" :class="cn(
              'w-full text-left justify-start',
              // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
            )">
                Hover
              </Button>
            </TooltipTrigger>
            <TooltipContent class="bg-background border-2" side="right">
              <div class="w-44 text-black dark:text-white">
                <Button
                    v-for="item in sidebarNavItems"
                    :key="item.title"
                    as="a"
                    :href="item.href"
                    variant="ghost"
                    :class="cn(
              'w-full text-left justify-start',
              // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
                )"
                >
                  {{ item.title }}
                </Button>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>