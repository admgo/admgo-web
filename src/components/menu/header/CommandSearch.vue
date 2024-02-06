<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core'
import { ref, watch } from 'vue'
import {
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
import { Dialog, DialogContent } from '@/components/ui/dialog'
import Command from '../../ui/command/Command.vue'

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
    <Dialog v-model:open="open">
      <DialogContent class="overflow-hidden p-0 shadow-lg">
        <Command
          class="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
        >
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem value="calendar"> Calendar </CommandItem>
              <CommandItem value="search-emoji"> Search Emoji </CommandItem>
              <CommandItem value="calculator"> Calculator </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem value="profile"> Profile </CommandItem>
              <CommandItem value="billing"> Billing </CommandItem>
              <CommandItem value="settings"> Settings </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  </div>
</template>
