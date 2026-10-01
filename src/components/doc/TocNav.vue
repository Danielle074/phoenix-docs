<script setup lang="ts">
import type { DocSection } from '@/types/cahier'
import { cn } from '@/lib/utils'

defineProps<{ sections: DocSection[]; activeId: string }>()
</script>

<template>
  <nav aria-label="Sommaire" class="space-y-1 text-sm">
    <p class="mb-3 font-display text-base font-bold">Sommaire</p>
    <a
      v-for="s in sections"
      :key="s.id"
      :href="`#${s.id}`"
      :aria-current="activeId === s.id ? 'true' : undefined"
      :class="cn(
        'flex gap-2 rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted',
        activeId === s.id && 'bg-accent font-semibold text-foreground',
      )"
    >
      <span class="w-5 shrink-0 text-primary">{{ s.number ?? '' }}</span>
      <span>{{ s.title }}</span>
    </a>
  </nav>
</template>