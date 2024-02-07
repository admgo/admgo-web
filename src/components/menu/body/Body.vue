<script setup lang="ts">
import { cn } from '@/lib/utils.ts'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Separator } from '@/components/ui/separator'
import { ChevronRight, AppWindow } from 'lucide-vue-next'
interface Item {
  name: string
  value: string
  href?: string
  sub?: Item[]
  child?: Item[]
}
const props = defineProps<{
  items: Item[]
  title: string
}>()
</script>

<template>
  <div class="mx-2">
    <!--    标题-->
    <h1 class="h-10 leading-10 ml-3 font-semibold text-sm">
      {{ props.title }}
    </h1>
    <!--    主体-->
    <nav
      class="w-full flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 h-full"
    >
      <div class="h-full">
        <div>
          <div v-for="item in props.items" :key="item.value" class="my-1">
            <!--                  判断是否是分组的菜单-->
            <!--                  是分组的菜单-->
            <div v-if="item.child != undefined">
              <!--                    分割线-->
              <Separator class="my-4" />
              <!--                    组标题-->
              <h1 class="ml-4 text-xs my-2 font-semibold">
                {{ item.name }}
              </h1>
              <!--                    按钮-->
              <div v-for="child in item.child" :key="child.value">
                <!--                      判断是否有二级菜单-->
                <!--                      无二级菜单-->
                <Button
                  v-if="child.sub == undefined"
                  as="a"
                  :href="child.href"
                  variant="ghost"
                  :class="
                    cn(
                      'w-full text-left justify-start px-2',
                      // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
                    )
                  "
                >
                  <div class="flex flex-row justify-center items-center w-full">
                    <AppWindow class="w-3 h-3 flex-shrink-0"></AppWindow>
                    <div class="flex-grow ml-1.5 overflow-hidden">
                      {{ child.name }}
                    </div>
                  </div>
                </Button>
                <!--                      有二级菜单-->
                <TooltipProvider
                  :delay-duration="7"
                  v-if="child.sub != undefined"
                >
                  <Tooltip>
                    <TooltipTrigger as-child>
                      <Button
                        variant="ghost"
                        :class="
                          cn(
                            'w-full text-left justify-start px-2',
                            // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
                          )
                        "
                      >
                        <div
                          class="flex flex-row justify-center items-center w-full"
                        >
                          <AppWindow class="w-3 h-3 flex-shrink-0"></AppWindow>
                          <div class="flex-grow ml-1.5 overflow-hidden">
                            {{ child.name }}
                          </div>
                          <ChevronRight
                            class="w-4 h-4 flex-shrink-0"
                          ></ChevronRight>
                        </div>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent class="bg-background border-2" side="right">
                      <div class="w-44 text-black dark:text-white">
                        <Button
                          v-for="s in child.sub"
                          :key="s.value"
                          as="a"
                          :href="s.href"
                          variant="ghost"
                          :class="
                            cn(
                              'w-full text-left justify-start px-2',
                              // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
                            )
                          "
                        >
                          <div
                            class="flex flex-row justify-center items-center w-full"
                          >
                            <AppWindow
                              class="w-3 h-3 flex-shrink-0"
                            ></AppWindow>
                            <div class="flex-grow ml-1.5 overflow-hidden">
                              {{ child.name }}
                            </div>
                          </div>
                        </Button>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <!--                  不是分组的菜单-->
            <div v-if="item.child == undefined">
              <!--                    按钮-->
              <!--                      判断是否有二级菜单-->
              <!--                      无二级菜单-->
              <Button
                v-if="item.sub == undefined"
                as="a"
                :href="item.href"
                variant="ghost"
                :class="
                  cn(
                    'w-full text-left justify-start px-2',
                    // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
                  )
                "
              >
                <div class="flex flex-row justify-center items-center w-full">
                  <AppWindow class="w-3 h-3 flex-shrink-0"></AppWindow>
                  <div class="flex-grow ml-1.5 overflow-hidden">
                    {{ item.name }}
                  </div>
                </div>
              </Button>
              <!--                      有二级菜单-->
              <TooltipProvider v-if="item.sub != undefined" :delay-duration="7">
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button
                      variant="ghost"
                      :class="
                        cn(
                          'w-full text-left justify-start px-2',
                          // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
                        )
                      "
                    >
                      <div
                        class="flex flex-row justify-center items-center w-full"
                      >
                        <AppWindow class="w-3 h-3 flex-shrink-0"></AppWindow>
                        <div class="flex-grow ml-1.5 overflow-hidden">
                          {{ item.name }}
                        </div>
                        <ChevronRight
                          class="w-4 h-4 flex-shrink-0"
                        ></ChevronRight>
                      </div>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent class="bg-background border-2" side="right">
                    <div class="w-44 text-black dark:text-white">
                      <Button
                        v-for="s in item.sub"
                        :key="s.value"
                        as="a"
                        :href="s.href"
                        variant="ghost"
                        :class="
                          cn(
                            'w-full text-left justify-start px-2',
                            // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
                          )
                        "
                      >
                        <div
                          class="flex flex-row justify-center items-center w-full"
                        >
                          <AppWindow class="w-3 h-3 flex-shrink-0"></AppWindow>
                          <div class="flex-grow ml-1.5 overflow-hidden">
                            {{ s.name }}
                          </div>
                        </div>
                      </Button>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
