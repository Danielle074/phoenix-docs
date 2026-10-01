<script setup lang="ts">
import type { Block } from '@/types/cahier'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import logoPhoenix from '@/assets/images/logophoenix.png'

defineProps<{ block: Block }>()
</script>

<template>
  <p v-if="block.type === 'p'" class="max-w-3xl leading-relaxed">{{ block.text }}</p>

  <h3 v-else-if="block.type === 'h3'" class="mt-4 text-xl font-bold">{{ block.text }}</h3>

  <component
    :is="block.ordered ? 'ol' : 'ul'"
    v-else-if="block.type === 'list'"
    :class="[
      'max-w-3xl space-y-2 pl-6 leading-relaxed marker:font-semibold marker:text-primary',
      block.ordered ? 'list-decimal' : 'list-disc',
    ]"
  >
    <li v-for="item in block.items" :key="item">{{ item }}</li>
  </component>

  <Table v-else-if="block.type === 'table'">
    <TableHeader>
      <TableRow>
        <TableHead v-for="h in block.headers" :key="h">{{ h }}</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(row, i) in block.rows" :key="i">
        <TableCell v-for="(cell, j) in row" :key="j" :class="j === 0 ? 'font-medium' : ''">
          <!-- Cellule vide = champ à remplir par le prestataire -->
          <span v-if="cell === ''" class="text-muted-foreground">&nbsp;</span>
          <template v-else>{{ cell }}</template>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <div v-else-if="block.type === 'callout'" class="max-w-3xl rounded-lg border-l-4 border-primary bg-accent p-5">
    <div class="flex items-center gap-2">
      <img :src="logoPhoenix" alt="PHŒNIX" class="h-5 w-auto" />
      <p class="font-display font-bold">{{ block.title }}</p>
    </div>
    <p class="mt-1 text-sm leading-relaxed">{{ block.text }}</p>
  </div>
</template>