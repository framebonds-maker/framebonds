import { useEffect, useState } from 'react'

const QUERY = '(max-width: 767px) and (pointer: coarse)'

/**
 * True only for an actual touch device at phone width — not just a narrow
 * desktop window. A resized desktop Chrome window still has `pointer: fine`
 * even under 768px, so it keeps normal hover behavior; only a real
 * touchscreen (phone/tablet) gets the tap-to-play / no-hover treatment.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia(QUERY).matches)

  useEffect(() => {
    const mql = window.matchMedia(QUERY)
    const onChange = () => setIsMobile(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return isMobile
}
