<script setup lang="ts">
import { cn } from '@/lib/utils.ts'
import { type HTMLAttributes, ref } from 'vue'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { ChevronRight, AppWindow } from 'lucide-vue-next'
import { Separator } from '@/components/ui/separator'
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
import { useMenuStore } from '@/store/menuStore.ts'
const { menu } = useMenuStore()

const click = (i: string) => {
  currentMenu.value = i
  currentCheckboxItem.value = ''
}
const select = (i: string, ii: string) => {
  currentMenu.value = i
  currentCheckboxItem.value = ii
}

const currentMenu = ref('')
const currentCheckboxItem = ref('')
</script>

<template>
  <Menubar
    :class="
      cn(
        'p-2 h-full border-0 bg-inherit rounded-none flex-col w-48 space-x-0 space-y-2 items-start shadow-xl',
        props.class,
      )
    "
  >
    <MenubarMenu v-for="m in menu.menu" :key="m.value" :value="m.value">
      <button
        v-if="m.type == 'item'"
        id="auth"
        :data-select="currentMenu == m.value ? 'true' : 'false'"
        type="button"
        role="menuitem"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        data-value="auth"
        data-radix-vue-collection-item=""
        tabindex="-1"
        data-orientation="horizontal"
        data-active="true"
        class="flex cursor-default items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground w-44 h-9 data-[select=true]:bg-amber-300 hover:cursor-pointer hover:bg-accent hover:text-accent-foreground"
        @click="click(m.value)"
      >
        {{ m.name }}
      </button>
      <component :is="Separator" v-if="m.type == 'separator'" />
      <div v-if="m.type == 'group'">
        <MenubarTrigger
          :data-select="currentMenu == m.value ? 'true' : 'false'"
          class="w-44 h-9 data-[select=true]:bg-accent hover:cursor-pointer hover:bg-accent hover:text-accent-foreground"
        >
          {{ m.name }}
          <MenubarShortcut> <ChevronRight class="h-4 w-4" /></MenubarShortcut>
        </MenubarTrigger>
        <MenubarContent side="right">
          <div v-for="i in m.content" :key="i.value">
            <!--          MenubarSeparator-->
            <component :is="MenubarSeparator" v-if="i.type == 'separator'" />
            <!--          MenubarCheckboxItem-->
            <component
              :is="MenubarCheckboxItem"
              v-if="i.type == 'item'"
              class="hover:cursor-pointer"
              :checked="currentCheckboxItem == i.value"
              @select="select(m.value, i.value)"
            >
              {{ i.name }} <MenubarShortcut>{{ i.shortcut }}</MenubarShortcut>
            </component>
          </div>
        </MenubarContent>
      </div>
    </MenubarMenu>
  </Menubar>
</template>

<style scoped></style>
