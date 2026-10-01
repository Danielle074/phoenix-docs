export type Block =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'callout'; title: string; text: string }

export interface DocSection {
  id: string
  /** Numéro affiché dans le sommaire (absent pour la synthèse) */
  number?: number
  title: string
  blocks: Block[]
}

export interface DocMeta {
  name: string
  subtitle: string
  title: string
  audience: string
  intro: string
  confidentiality: string
  info: [label: string, value: string][]
  nameStatus: string
}
