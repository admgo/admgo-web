<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { ChevronRight, Slash } from 'lucide-vue-next'
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList class="sm:gap-1 text-xs">
      <BreadcrumbItem>
        <BreadcrumbLink href="/"> Home </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator class="[&>svg]:size-2.5">
        <ChevronRight />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="/components"> Components </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator class="[&>svg]:size-2.5">
        <ChevronRight />
      </BreadcrumbSeparator>
    </BreadcrumbList>
  </Breadcrumb>
</template>
