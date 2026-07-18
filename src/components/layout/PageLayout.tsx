import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/layout/Footer'
import { duration, easing } from '@/constants/motion'

/** Scroll to top on route change (browser back/forward keeps native restoration). */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

/**
 * Shared page shell: skip link, navigation, transition wrapper, footer.
 * Route transitions stay light — a quiet fade + small rise, never a show.
 */
export function PageLayout() {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-[0.5rem] focus:bg-ink focus:px-4 focus:py-2 focus:text-body-s focus:font-semibold focus:text-canvas"
      >
        Skip to main content
      </a>

      <Navigation />

      <motion.main
        id="main"
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: duration.slow, ease: easing.entrance }}
        className="flex-1"
      >
        <Outlet />
      </motion.main>

      <Footer />
    </div>
  )
}
