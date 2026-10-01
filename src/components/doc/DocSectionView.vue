<script setup lang="ts">
import type { DocSection } from '@/types/cahier'
import BlockRenderer from './BlockRenderer.vue'

defineProps<{ section: DocSection }>()
</script>

<template>
  <section :id="section.id" class="mx-auto max-w-4xl border-t py-12">
    <header class="mb-6 flex items-baseline gap-4">
      <span v-if="section.number" class="font-display text-4xl font-extrabold text-primary">{{ section.number }}</span>
      <h2 class="text-2xl font-extrabold md:text-3xl">{{ section.title }}</h2>
    </header>
    <div class="space-y-5">
      <BlockRenderer v-for="(block, i) in section.blocks" :key="i" :block="block" />
    </div>
    <!-- Point d’extension : <slot name="extra" /> pour intégrer vos propres éléments dans une section -->
    <slot name="extra" />
  </section>
</template>
