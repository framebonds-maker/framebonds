import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/layout/Footer'
import { duration, easing } from '@/constants/motion'

/**
 * Shared page shell: skip link, navigation, transition wrapper, footer.
 * Route transitions are a real scene change — exit, then enter — never a
 * hard cut. Scroll resets only once the outgoing page has fully faded.
 */
export function PageLayout() {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-[0.5rem] focus:bg-ink focus:px-4 focus:py-2 focus:text-body-s focus:font-semibold focus:text-canvas"
      >
        Skip to main content
      </a>

      <Navigation />

      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
        <motion.main
          id="main"
          key={pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: duration.medium, ease: easing.standard }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  )
}
