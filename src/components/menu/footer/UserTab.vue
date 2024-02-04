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
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped></style>
