import { useEffect, useState } from 'react'

/**
 * Respects `prefers-reduced-motion`. Volume VI/VIII: reduced motion must
 * remove large translation/parallax/mask reveals and replace with simple
 * opacity — never removing information, only movement.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = (event: MediaQueryListEvent) => setReduced(event.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return reduced
}
