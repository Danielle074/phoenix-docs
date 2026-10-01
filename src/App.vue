<script setup lang="ts">
import { Printer } from 'lucide-vue-next'
import { docMeta } from '@/data/meta'
import { sections } from '@/data/sections'
import { useScrollSpy } from '@/composables/useScrollSpy'
import CoverPage from '@/components/doc/CoverPage.vue'
import DocSectionView from '@/components/doc/DocSectionView.vue'
import TocNav from '@/components/doc/TocNav.vue'
import logoPhoenix from '@/assets/images/logophoenix.png'

const print = () => window.print()
const { activeId } = useScrollSpy(sections.map((s) => s.id))
</script>

<template>
  <header class="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
    <div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
      <img :src="logoPhoenix" alt="PHŒNIX" class="h-8 w-auto" />
      <button
        type="button"
        class="no-print inline-flex items-center gap-2 rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground hover:opacity-90"
        @click="print"
      >
        <Printer class="size-4" /> Imprimer / PDF
      </button>
    </div>
  </header>

  <div class="mx-auto flex max-w-7xl gap-10 px-4">
    <aside class="scrollbar-hide sticky top-20 hidden h-[calc(100vh-6rem)] w-64 shrink-0 overflow-y-auto py-10 lg:block">
      <TocNav :sections="sections" :active-id="activeId" />
    </aside>

    <main class="min-w-0 flex-1">
      <CoverPage :meta="docMeta" />
      <DocSectionView v-for="s in sections" :key="s.id" :section="s" />
      <footer class="mx-auto max-w-4xl border-t py-8 text-sm text-muted-foreground">
        {{ docMeta.confidentiality }} · Cahier des charges fonctionnel · Version 1.0 · Fin du cahier des charges
      </footer>
    </main>
  </div>
</template>