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

interface Item {
  title: string
  href: string
}

// const $route = useRoute()

const sidebarNavItems: Item[] = [
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Profile',
    href: '/examples/forms/forms',
  },
  {
    title: 'Account',
    href: '/examples/forms/account',
  },
  {
    title: 'Appearance',
    href: '/examples/forms/appearance',
  },
  {
    title: 'Notifications',
    href: '/examples/forms/notifications',
  },
  {
    title: 'Display',
    href: '/examples/forms/display',
  },
]
</script>

<template>
  <div class="h-full">
    <div class="flex-col h-full flex">
      <!--    Menu Header-->
      <div class="h-16">
        <Header class="w-full"></Header>
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
                  :key="item.title"
                >
                  <Button
                    as="a"
                    :href="item.href"
                    variant="ghost"
                    :class="
                      cn(
                        'w-full text-left justify-start',
                        // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
                      )
                    "
                  >
                    {{ item.title }}
                  </Button>
                </div>
                <TooltipProvider :delayDuration="7">
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
                          :class="
                            cn(
                              'w-full text-left justify-start',
                              // $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
                            )
                          "
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
        </div>
      </div>
      <!--    Menu Footer-->
      <div class="h-[52px]">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
