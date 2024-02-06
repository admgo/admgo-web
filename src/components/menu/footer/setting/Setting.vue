<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Settings, XCircle } from 'lucide-vue-next'
import { reactive, shallowRef } from 'vue'
import Account from './Account.vue'
import Profile from './Profile.vue'
import Theme from './Theme.vue'
const settingList = reactive([
  {
    name: '用户设置',
    value: 'userSetting',
    child: [
      {
        name: '我的账号',
        value: 'account',
        component: shallowRef(Account),
      },
      {
        name: '个人资料',
        value: 'profile',
        component: shallowRef(Profile),
      },
    ],
  },
  {
    name: 'APP设置',
    value: 'AppSetting',
    child: [
      {
        name: '外观',
        value: 'theme',
        component: shallowRef(Theme),
      },
    ],
  },
])

const tabValue = defineModel('account')
</script>

<template>
  <Dialog aria-disabled="true">
    <DialogTrigger>
      <Button variant="ghost">
        <Settings class="w-4 h-4"></Settings>
      </Button>
    </DialogTrigger>
    <DialogContent class="max-w-full p-0 m-0 border-0">
      <DialogTitle class="hidden" />
      <DialogDescription class="hidden" />
      <Tabs v-model="tabValue" default-value="account" class="w-full">
        <div class="flex flex-row">
          <div
            class="flex-grow flex-shrink-0 w-[218px] bg-secondary-background"
          >
            <TabsList
              class="py-16 px-3 flex-col h-screen w-[218px] justify-start items-start float-right bg-secondary-background overflow-auto"
            >
              <div v-for="g in settingList" class="w-full">
                <h1 class="ml-3 text-xs my-2 font-semibold">{{ g.name }}</h1>
                <TabsTrigger
                  :value="s.value"
                  class="font-semibold w-full my-0.5 h-8 leading-6"
                  v-for="s in g.child"
                >
                  {{ s.name }}
                </TabsTrigger>
                <Separator class="my-4" />
              </div>
            </TabsList>
          </div>
          <div class="flex-grow flex-shrink w-[800px]">
            <div v-for="g in settingList" :key="g.value">
              <TabsContent
                :value="s.value"
                v-for="s in g.child"
                :key="s.value"
                class="m-0 p-0 h-screen w-full overflow-auto"
              >
                <div class="flex flex-row h-full overflow-auto">
                  <div class="w-[800px] px-10 py-14">
                    <component :is="s.component"></component>
                  </div>
                  <div class="flex-grow"></div>
                </div>
              </TabsContent>
            </div>
          </div>
        </div>
      </Tabs>
      <DialogClose
        class="text-secondary-text-color hover:bg-accent absolute top-[40px] right-[90px] inline-flex h-[40px] w-[40px] appearance-none items-center justify-center rounded-full"
        aria-label="Close"
      >
        <div>
          <XCircle class="w-[40px] h-[40px]"></XCircle>
        </div>
      </DialogClose>
    </DialogContent>
  </Dialog>
</template>
