import { useRef } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

/**
 * Magnetic pull — the element leans a few px toward the cursor while
 * hovered, snapping back on leave. Reserved for primary CTAs (Volume VI:
 * movement stays in the 8–32px range, never theatrical).
 */
export function useMagnetic(strength = 14) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 })

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set((relX / rect.width) * strength)
    y.set((relY / rect.height) * strength)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return { ref, x: springX, y: springY, onMouseMove, onMouseLeave }
}
