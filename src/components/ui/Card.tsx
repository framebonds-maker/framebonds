import type { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Surface card — Volume V Chapter 3.
 * Content over decoration: subtle border, minimal elevation, generous padding.
 * Use only when whitespace alone can't organize the content.
 */
const cardStyles = cva('rounded-[1rem] transition-all duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]', {
  variants: {
    variant: {
      surface: 'bg-surface border border-edge',
      elevated: 'bg-surface-elevated border border-edge shadow-low',
      /** Border-only frame for quiet grouping. */
      outline: 'bg-transparent border border-edge',
      /** No chrome at all — spacing does the work. */
      ghost: 'bg-transparent',
    },
    padding: {
      none: 'p-0',
      md: 'p-6 md:p-8',
      lg: 'p-8 md:p-10',
    },
    interactive: {
      true: 'hover:border-edge-strong hover:bg-surface-elevated hover:-translate-y-1 hover:shadow-medium cursor-pointer',
      false: '',
    },
  },
  defaultVariants: { variant: 'surface', padding: 'md', interactive: false },
})

type CardProps = VariantProps<typeof cardStyles> & {
  className?: string
  children: ReactNode
}

export function Card({ variant, padding, interactive, className, children }: CardProps) {
  return <div className={cn(cardStyles({ variant, padding, interactive }), className)}>{children}</div>
}
