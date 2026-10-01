<script setup lang="ts">
import type { DocMeta } from '@/types/cahier'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import logoPhoenix from '@/assets/images/logophoenix.png'

defineProps<{ meta: DocMeta }>()
</script>

<template>
  <section id="couverture" class="mx-auto max-w-4xl pb-16 pt-10 md:pt-16">
    <img :src="logoPhoenix" alt="PHŒNIX – Jobs & Carrières" class="mb-10 h-20 w-auto md:h-28" />
    <Badge variant="secondary">{{ meta.subtitle }}</Badge>
    <h1 class="mt-5 text-4xl font-extrabold leading-[1.05] md:text-6xl">{{ meta.title }}</h1>
    <p class="mt-4 text-lg font-medium text-primary">{{ meta.audience }}</p>
    <p class="mt-6 max-w-2xl leading-relaxed text-muted-foreground">{{ meta.intro }}</p>

    <div class="mt-10 grid gap-6 md:grid-cols-[1fr_1.2fr]">
      <Table>
        <TableHeader>
          <TableRow><TableHead>Élément</TableHead><TableHead>Valeur</TableHead></TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="[label, value] in meta.info" :key="label">
            <TableCell class="font-medium">{{ label }}</TableCell>
            <TableCell>{{ value }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div class="rounded-lg border-l-4 border-primary bg-accent p-5">
        <h2 class="text-base font-bold">Statut du nom</h2>
        <p class="mt-2 text-sm leading-relaxed">{{ meta.nameStatus }}</p>
      </div>
    </div>
  </section>
</template>