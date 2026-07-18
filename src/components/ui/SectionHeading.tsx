import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Section eyebrow — small caps label with a short gold rule.
 * A recurring signature detail: quiet, editorial, unmistakably intentional.
 */
export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 font-body text-label font-semibold uppercase tracking-[0.18em] text-accent',
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-accent/60" />
      {children}
    </span>
  )
}

type SectionHeadingProps = {
  label?: string
  title: ReactNode
  intro?: ReactNode
  /** Center alignment reserved for intentional hero moments only. */
  align?: 'left' | 'center'
  className?: string
}

/**
 * Standard section opener: eyebrow → display serif title → optional intro.
 * One consistent reveal rhythm across the entire site (Volume VI).
 */
export function SectionHeading({ label, title, intro, align = 'left', className }: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer(stagger.medium)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        'mb-14 max-w-2xl md:mb-20',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {label && (
        <motion.div variants={fadeInUp} className={cn(align === 'center' && 'flex justify-center')}>
          <SectionLabel>{label}</SectionLabel>
        </motion.div>
      )}
      <motion.h2
        variants={fadeInUp}
        className="mt-5 font-display text-heading-l font-medium text-ink md:text-heading-xl"
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p variants={fadeInUp} className="mt-5 text-body-l text-ink-secondary">
          {intro}
        </motion.p>
      )}
    </motion.div>
  )
}
