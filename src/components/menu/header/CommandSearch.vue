<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core'
import { ref, watch } from 'vue'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Input } from '@/components/ui/input'
import { ShieldBan } from 'lucide-vue-next'

const open = ref(false)

const { Slash } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === '/') e.preventDefault()
  },
})

watch([Slash], (v) => {
  if (v[0]) handleOpenChange()
})

function handleOpenChange() {
  open.value = !open.value
}
</script>

<template>
  <div>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          ><Input type="email" placeholder="搜索" @click="handleOpenChange"
        /></TooltipTrigger>
        <TooltipContent align="center" side="bottom">
          <p>输入/进行搜索</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <!--    命令提示框-->
    <CommandDialog v-model:open="open">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem value="calendar">
            <ShieldBan class="mr-2 h-4 w-4" />
            Calendar
          </CommandItem>
          <CommandItem value="search-emoji"> Search Emoji </CommandItem>
          <CommandItem value="calculator"> Calculator </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem value="profile"> Profile </CommandItem>
          <CommandItem value="billing"> Billing </CommandItem>
          <CommandItem value="settings"> Settings </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem value="profile"> Profile </CommandItem>
          <CommandItem value="billing"> Billing </CommandItem>
          <CommandItem value="settings"> Settings </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem value="profile"> Profile </CommandItem>
          <CommandItem value="billing"> Billing </CommandItem>
          <CommandItem value="settings"> Settings </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem value="profile"> Profile </CommandItem>
          <CommandItem value="billing"> Billing </CommandItem>
          <CommandItem value="settings"> Settings </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </div>
</template>
