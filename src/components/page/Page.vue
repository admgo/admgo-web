<script setup lang="ts">
import PageHeader from '@/components/page/PageHeader.vue'
import PageFooter from '@/components/page/PageFooter.vue'
import PageBody from '@/components/page/PageBody.vue'
import { cn } from '@/lib/utils.ts'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <div class="flex-col h-screen flex">
    <div class="flex-shrink-0">
      <PageHeader />
    </div>
    <div class="flex-auto overflow-auto p-10">
      <PageBody :class="cn('', props.class)">
        <slot />
      </PageBody>
    </div>
    <div class="flex-shrink-0">
      <PageFooter />
    </div>
  </div>
</template>

<style scoped></style>
