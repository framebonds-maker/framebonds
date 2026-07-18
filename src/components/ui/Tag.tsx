import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Category tag / status badge — Volume V Chapter 9.
 * Understated by design: low-contrast chrome, small type. Max 4 per item.
 */
export function Tag({
  children,
  active = false,
  className,
}: {
  children: ReactNode
  active?: boolean
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3.5 py-1.5 font-body text-caption font-medium transition-colors duration-[180ms]',
        active
          ? 'border-ink bg-ink text-canvas'
          : 'border-edge-strong text-ink-secondary',
        className,
      )}
    >
      {children}
    </span>
  )
}
