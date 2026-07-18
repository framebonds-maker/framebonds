import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Vertical rhythm wrapper — every major page section shares the same
 * breathing room (Volume II Ch3: whitespace is structure).
 */
type SectionProps = {
  id?: string
  className?: string
  children: ReactNode
  /** Slightly lighter charcoal to separate sections without visible dividers. */
  tone?: 'primary' | 'secondary'
  /** Compact trims vertical padding for stacked sub-sections. */
  spacing?: 'default' | 'compact' | 'hero'
}

export function Section({ id, className, children, tone = 'primary', spacing = 'default' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        tone === 'secondary' && 'bg-canvas-secondary',
        spacing === 'default' && 'py-24 md:py-32',
        spacing === 'compact' && 'py-16 md:py-20',
        spacing === 'hero' && 'pt-36 pb-24 md:pt-44 md:pb-32',
        className,
      )}
    >
      {children}
    </section>
  )
}
