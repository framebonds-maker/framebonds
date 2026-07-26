import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { site } from '@/constants/site'

/**
 * Mobile-only persistent action bar — desktop already resolves this via
 * the always-visible nav CTA, but on a phone the nav bar is easy to scroll
 * past on a long page. Keeps "Book a Call" and a direct WhatsApp tap one
 * thumb-reach away from wherever the visitor is on the page.
 *
 * Hides itself while the page's own Final CTA section is in view — every
 * page ends with a full "Book a Discovery Call" section, and showing the
 * identical button twice on screen at once reads as redundant.
 */
export function MobileStickyBar() {
  const { pathname } = useLocation()
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    setHidden(false)
    let observer: IntersectionObserver | undefined
    let attempts = 0

    // The page's Final CTA section may not exist yet the instant the route
    // changes (lazy-loaded page chunk) — retry briefly rather than give up.
    const tryAttach = () => {
      const target = document.querySelector('.final-cta-section')
      if (target) {
        observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.15 })
        observer.observe(target)
        return
      }
      attempts += 1
      if (attempts < 10) setTimeout(tryAttach, 200)
    }
    tryAttach()

    return () => observer?.disconnect()
  }, [pathname])

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-edge bg-canvas/95 px-4 py-3 backdrop-blur-md md:hidden"
          style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
        >
          <a
            href={`https://wa.me/${site.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on WhatsApp"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.75rem] border border-edge-strong text-ink active:scale-95 transition-transform duration-150"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <ButtonLink to="/contact" variant="primary" size="lg" className="flex-1">
            Book a Discovery Call
          </ButtonLink>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
