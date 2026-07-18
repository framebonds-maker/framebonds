import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * tailwind-merge must be taught our custom design tokens, otherwise it
 * can't tell `text-canvas` (a color) apart from `text-body-s` (a font size)
 * and silently strips one of them when both appear on an element.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'display-xl',
            'display-l',
            'heading-xl',
            'heading-l',
            'heading-m',
            'body-l',
            'body',
            'body-s',
            'caption',
            'label',
          ],
        },
      ],
      'text-color': [
        {
          text: [
            'ink',
            'ink-secondary',
            'ink-muted',
            'canvas',
            'canvas-secondary',
            'surface',
            'surface-elevated',
            'accent',
            'accent-hover',
            'accent-muted',
            'success',
            'warning',
            'error',
            'info',
          ],
        },
      ],
    },
  },
})

/** Merge Tailwind classes safely, resolving conflicts (last wins). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
