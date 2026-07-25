import { useEffect, useState } from 'react'

/** Tracks the same mobile breakpoint used elsewhere (max-width: 767px). */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches,
  )

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)')
    const onChange = () => setIsMobile(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return isMobile
}
