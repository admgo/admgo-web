<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { TabsList, type TabsListProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<TabsListProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsList
    v-bind="delegatedProps"
    :class="
      cn(
        'text-secondary-text-color inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1',
        props.class,
      )
    "
  >
    <slot />
  </TabsList>
</template>
