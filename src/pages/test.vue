<script setup lang="ts">
import {
  Message,
  // MessageDescription,
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
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()
const color = ref('red')
const ccc = (e: any, ee: any) => {
  console.log(e, ee)
}

import { ref } from 'vue'
</script>

<template>
  <div>
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

    <Button
      @click="
        () => {
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          })
        }
      "
    >
      Add to calendar
    </Button>
  </div>
</template>

<style scoped></style>
