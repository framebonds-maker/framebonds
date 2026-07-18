/**
 * Motion tokens — Volume VI Chapter 2.
 * Mirrors the CSS custom properties in src/styles/globals.css.
 * Never hardcode a duration/easing value anywhere else — reference these.
 */

export const duration = {
  instant: 0.08,
  veryFast: 0.12,
  fast: 0.18,
  normal: 0.25,
  medium: 0.35,
  slow: 0.5,
  cinematic: 0.7,
  feature: 0.9,
  immersive: 1.2,
} as const

export const easing = {
  standard: [0.22, 1, 0.36, 1],
  entrance: [0.16, 1, 0.3, 1],
  exit: [0.4, 0, 1, 1],
  linear: [0, 0, 1, 1],
} as const

/** Small vertical travel for reveals — 8–32px range per Volume VI, never more (theatrical). */
export const distance = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const

/** Stagger delay between list/grid items — never exceed 100ms between items. */
export const stagger = {
  small: 0.04,
  medium: 0.06,
  large: 0.08,
} as const
