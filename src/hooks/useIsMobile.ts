import { useEffect, useState } from 'react'

const QUERY = '(max-width: 767px)'

/**
 * Width-only, matching every other mobile-only style on the site (Tailwind's
 * `md:` breakpoint is width-only too). A narrow desktop window will get
 * mobile treatment here just like it gets mobile CSS everywhere else on the
 * site — that's consistent with the rest of the codebase, not a bug.
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
