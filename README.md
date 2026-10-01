# PHŒNIX – Cahier des charges (Vue 3 + TypeScript + Tailwind v4 + shadcn-vue)

    npm install
    npm run dev          # développement
    npm run type-check   # vérification TypeScript
    npm run build        # build de production

## Où modifier / intégrer
- `src/data/meta.ts` : page de garde. `src/data/sections.ts` : tout le contenu (typé via `src/types/cahier.ts`).
- Nouveau type de bloc : l’ajouter dans `Block` (types) puis un `v-else-if` dans `components/doc/BlockRenderer.vue`.
- `DocSectionView.vue` expose un slot `extra` pour insérer vos propres composants dans une section.
- Autres composants shadcn-vue : `npx shadcn-vue@latest add button dialog …` (`components.json` est prêt).
