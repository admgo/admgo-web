<script setup lang="ts">
// import { useRoute } from 'vitepress'
import { cn } from '@/lib/utils'
import Header from './header/Header.vue'
import Footer from './footer/Footer.vue'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Separator } from '@/components/ui/separator'

interface Item {
  name: string
  value: string
  href?: string
  sub?: Item[]
  child?: Item[]
}

// const $route = useRoute()

const sidebarNavItems: Item[] = [
  {
    name: '概览',
    value: 'overview',
    href: '/examples/forms/forms',
  },
  {
    name: '仪表盘',
    value: 'dashboard',
    sub: [
      {
        name: '水果盘',
        value: 'fruit',
        href: '/examples/forms/forms',
      },
      {
        name: '蔬菜盘',
        value: 'shucai',
        href: '/examples/forms/forms',
      },
    ],
  },
  {
    name: '个人中心',
    value: 'gerenzhongxin',
    child: [
      {
        name: '我的资料',
        value: 'my',
        href: '/examples/forms/forms',
      },
      {
        name: '我的账号',
        value: 'account',
        href: '/examples/forms/forms',
      },
      {
        name: '云厂商',
        value: 'cloud',
        sub: [
          {
            name: '阿里云',
            value: 'aliyun',
            href: '/examples/forms/forms',
          },
          {
            name: '华为云',
            value: 'huaweicloud',
            href: '/examples/forms/forms',
          },
        ],
      },
    ],
  },
]
</script>

<template>
  <div class="h-screen">
    <div class="flex-col h-full flex">
      <!--    Menu Header-->
      <div class="flex-shrink-0 h-32">
        <Header></Header>
      </div>
      <!--    Menu Body-->
      <div class="flex-auto overflow-auto">
        <div class="mx-2">
          <nav
            class="w-full flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 h-full"
          >
            <div class="h-full">
              <div>
                <div
                  class="my-1"
                  v-for="item in sidebarNavItems"
                  :key="item.value"
                >
                  <!--                  判断是否是分组的菜单-->
                  <!--                  是分组的菜单-->
                  <div v-if="item.child != undefined">
                    <!--                    分割线-->
                    <Separator class="my-4" />
                    <!--                    组标题-->
                    <h1 class="ml-3 text-xs my-2 font-semibold">
                      {{ item.name }}
                    </h1>
                    <!--                    按钮-->
                    <div v-for="child in item.child">
                      <!--                      判断是否有二级菜单-->
                      <!--                      无二级菜单-->
                      <Button
                        v-if="child.sub == undefined"
                        as="a"
                        :href="child.href"
                        variant="ghost"
                        :class="
                          cn(
                            'w-full text-left justify-start',
                            // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
                          )
                        "
                      >
                        {{ child.name }}
                      </Button>
                      <!--                      有二级菜单-->
                      <TooltipProvider
                        :delayDuration="7"
                        v-if="child.sub != undefined"
                      >
                        <Tooltip>
                          <TooltipTrigger as-child>
                            <Button
                              variant="ghost"
                              :class="
                                cn(
                                  'w-full text-left justify-start',
                                  // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
                                )
                              "
                            >
                              {{ child.name }}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent
                            class="bg-background border-2"
                            side="right"
                          >
                            <div class="w-44 text-black dark:text-white">
                              <Button
                                v-for="s in child.sub"
                                :key="s.value"
                                as="a"
                                :href="s.href"
                                variant="ghost"
                                :class="
                                  cn(
                                    'w-full text-left justify-start',
                                    // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
                                  )
                                "
                              >
                                {{ s.name }}
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
                          'w-full text-left justify-start',
                          // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
                        )
                      "
                      ><i data-lucide="badge-alert"></i>
                      {{ item.name }}
                    </Button>
                    <!--                      有二级菜单-->
                    <TooltipProvider
                      :delayDuration="7"
                      v-if="item.sub != undefined"
                    >
                      <Tooltip>
                        <TooltipTrigger as-child>
                          <Button
                            variant="ghost"
                            :class="
                              cn(
                                'w-full text-left justify-start',
                                // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
                              )
                            "
                          >
                            {{ item.name }}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent
                          class="bg-background border-2"
                          side="right"
                        >
                          <div class="w-44 text-black dark:text-white">
                            <Button
                              v-for="s in item.sub"
                              :key="s.value"
                              as="a"
                              :href="s.href"
                              variant="ghost"
                              :class="
                                cn(
                                  'w-full text-left justify-start',
                                  // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
                                )
                              "
                            >
                              {{ s.name }}
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
      </div>
      <!--    Menu Footer-->
      <div class="flex-shrink-0 h-[52px]">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
