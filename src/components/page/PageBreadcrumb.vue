<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { BreadcrumbItem } from '@/components/ui/breadcrumb'
import { ChevronDown } from 'lucide-vue-next'
</script>

<template>
  <BreadcrumbItem>
    <DropdownMenu>
      <DropdownMenuTrigger class="flex items-center gap-1">
        Components
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>Documentation</DropdownMenuItem>
        <DropdownMenuItem>Themes</DropdownMenuItem>
        <DropdownMenuItem>GitHub</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </BreadcrumbItem>
</template>
