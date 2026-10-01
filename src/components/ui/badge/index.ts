import { cva, type VariantProps } from 'class-variance-authority'
export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        outline: 'border text-foreground',
        soft: 'bg-accent text-foreground',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)
export type BadgeVariants = VariantProps<typeof badgeVariants>
