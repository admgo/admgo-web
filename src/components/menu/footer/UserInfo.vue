<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LogOut, UserRoundCog, KeyRound, UserRound } from 'lucide-vue-next'
import { useSettingStore } from '@/store/settingStore.ts'
const setting = useSettingStore()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger class="h-full w-full">
      <Button :class="cn('p-0 m-0 b-0 h-full w-full')" variant="ghost">
        <div class="flex flex-row w-full h-full">
          <div class="w-[44px] h-[44px] flex justify-center items-center">
            <Avatar>
              <AvatarImage
                src="https://github.com/radix-vue.png"
                alt="@radix-vue"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div class="flex-grow h-full">
            <div class="flex flex-col h-full">
              <div class="h-1/2 relative">
                <span class="left-1 bottom-0 absolute">Kenley</span>
              </div>
              <div class="h-1/2 text-secondary-text-color text-xs relative">
                <span class="left-1 absolute">kenley</span>
              </div>
            </div>
          </div>
        </div>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem class="cursor-pointer" @click="setting.goTo('profile')">
        <UserRound class="w-4 h-4 ml-1"></UserRound>
        <span class="ml-2">个人资料</span>
      </DropdownMenuItem>
      <DropdownMenuItem class="cursor-pointer" @click="setting.goTo('account')">
        <KeyRound class="w-4 h-4 ml-1"></KeyRound>
        <span class="ml-2">修改密码</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem class="cursor-pointer">
        <UserRoundCog class="w-4 h-4 ml-1"></UserRoundCog>
        <span class="ml-2">管理员</span>
      </DropdownMenuItem>
      <!--      注销-->
      <DropdownMenuSeparator />
      <div class="flex items-center justify-center">
        <Button
          variant="outline"
          class="font-semibold w-5/6 my-0.5 h-8 leading-6"
        >
          注销
          <LogOut class="w-4 h-4 ml-2"></LogOut>
        </Button>
      </div>
      <DropdownMenuSeparator />
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped></style>
