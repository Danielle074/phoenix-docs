import type { DocMeta } from '@/types/cahier'

export const docMeta: DocMeta = {
  name: 'PHŒNIX',
  subtitle: 'Dossier confidentiel',
  title: 'Cahier des charges de la plateforme de mise en relation pour l’emploi',
  audience: 'Document destiné à la consultation et au chiffrage des prestataires techniques',
  intro:
    'Ce document permet aux prestataires de proposer une solution, un calendrier et un budget comparables pour la conception, le développement, le déploiement et la maintenance de PHŒNIX. La première version doit rester simple, mobile et fiable. Elle doit permettre à un candidat de trouver une offre et de postuler, puis à un employeur vérifié de publier une offre et de traiter les candidatures reçues.',
  confidentiality: 'Projet PHŒNIX (Dossier confidentiel)',
  info: [
    ['Nom de travail', 'PHŒNIX'],
    ['Version', '1.0'],
    ['Date', '18 septembre 2026'],
    ['Périmètre', 'Première version exploitable'],
    ['Marché initial', 'Côte d’Ivoire'],
  ],
  nameStatus:
    'PHŒNIX est un nom de travail. La disponibilité juridique, les noms de domaine et l’identité visuelle devront être validés séparément avant la mise en production.',
}
