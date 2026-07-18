import { cn } from '@/lib/utils'

/**
 * Skeleton placeholder — Volume V Chapter 10.
 * Structure before content; soft shimmer, never harsh flashes.
 */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn('animate-pulse rounded-[0.75rem] bg-surface-elevated', className)}
    />
  )
}
