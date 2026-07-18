import type { ElementType, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Width-constrained container — Volume II Chapter 3.
 * Content never stretches edge-to-edge; each width has one defined purpose.
 */
const containerStyles = cva('mx-auto w-full px-6 md:px-10', {
  variants: {
    width: {
      /** Long-form reading (case study narrative, about copy). */
      reading: 'max-w-3xl',
      /** Standard content sections. */
      standard: 'max-w-6xl',
      /** Portfolio grids, galleries, wide editorial moments. */
      wide: 'max-w-[88rem]',
      /** Full-bleed cinematic media. */
      full: 'max-w-none px-0',
    },
  },
  defaultVariants: { width: 'standard' },
})

type ContainerProps = VariantProps<typeof containerStyles> & {
  as?: ElementType
  className?: string
  children: ReactNode
  id?: string
}

export function Container({ as: Tag = 'div', width, className, children, id }: ContainerProps) {
  return (
    <Tag id={id} className={cn(containerStyles({ width }), className)}>
      {children}
    </Tag>
  )
}
