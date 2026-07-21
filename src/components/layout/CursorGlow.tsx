import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * A quiet cursor companion — a soft accent ring that trails the pointer and
 * expands over anything clickable. Desktop with a real mouse only; never
 * simulated on touch, and it never blocks a click (pointer-events: none).
 */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(canHover && !reduced)
  }, [])

  useEffect(() => {
    if (!enabled) return

    function onMove(e: MouseEvent) {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      const target = e.target as Element
      setHovering(Boolean(target.closest('a, button, [role="button"], input, textarea, select')))
    }
    function onLeave() {
      setVisible(false)
    }

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] rounded-full border"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        borderColor: hovering ? 'rgb(201 160 92 / 55%)' : 'rgb(232 230 225 / 30%)',
      }}
      animate={{
        width: hovering ? 44 : 18,
        height: hovering ? 44 : 18,
        opacity: visible ? 1 : 0,
        backgroundColor: hovering ? 'rgb(201 160 92 / 10%)' : 'rgb(232 230 225 / 4%)',
      }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    />
  )
}
