import type { Variants } from 'framer-motion'
import { duration, easing, distance, stagger } from '@/constants/motion'

/**
 * Reusable Framer Motion variants — Volume VI signature motion patterns.
 * Compose these across components rather than writing one-off animations
 * per page. Consistency across identical interactions is the whole point.
 */

/** Standard section/element reveal: opacity + small upward translation. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: distance.md },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.medium, ease: easing.standard },
  },
}

/** Slightly larger reveal for hero-level headlines only (Volume VI editorial mask reveal). */
export const fadeInUpLarge: Variants = {
  hidden: { opacity: 0, y: distance.lg },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.feature, ease: easing.entrance },
  },
}

/** Media/image reveal: opacity + very subtle scale settle (camera finding focus). */
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.slow, ease: easing.standard },
  },
}

/** Container for staggered children (portfolio grids, card lists, etc). */
export const staggerContainer = (staggerAmount: number = stagger.medium): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerAmount,
    },
  },
})

/** Child item for use inside staggerContainer. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: distance.sm },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: easing.standard },
  },
}

/** Card hover lift — used by all card types per Volume V/VI consistency rule. */
export const cardHover = {
  rest: { y: 0, transition: { duration: duration.fast, ease: easing.standard } },
  hover: { y: -6, transition: { duration: duration.fast, ease: easing.standard } },
}

/** Button press feedback. */
export const buttonTap = {
  scale: 0.99,
}

/** Viewport trigger options shared across scroll reveals — animate once, ~20% into view. */
export const viewportOnce = { once: true, amount: 0.2 } as const
