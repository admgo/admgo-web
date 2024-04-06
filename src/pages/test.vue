<script setup lang="ts">
import {
  Message,
  MessageDescription,
  MessageTitle,
} from '@/components/ui/message'
import { useColorMode } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
const mode = useColorMode()
</script>

<template>
  <Message>
    <MessageTitle>Login Success</MessageTitle>
    <!--    <MessageDescription> login success </MessageDescription>-->
  </Message>

  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline"> change zhuti </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="mode = 'light'"> Light </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'dark'"> Dark </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'auto'"> System </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped></style>
