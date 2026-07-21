import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ButtonLink } from '@/components/ui/Button'
import { navLinks, site } from '@/constants/site'
import { duration, easing, stagger } from '@/constants/motion'

/**
 * Global navigation — Volume V Chapter 1.
 * Transparent over the hero; frosted charcoal + hairline border after scroll.
 * Mobile: full-screen overlay with staggered links (never a cramped dropdown).
 */
export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close the overlay on route change and on Escape. */
  useEffect(() => setMenuOpen(false), [location.pathname])
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
          scrolled
            ? 'border-b border-edge bg-canvas/85 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-18 max-w-[88rem] items-center justify-between px-6 md:h-20 md:px-10"
        >
          <Link
            to="/"
            className="font-display text-[1.35rem] font-medium tracking-[-0.01em] text-ink"
          >
            {site.name}
            <span className="text-accent">.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'group relative font-body text-body-s font-medium transition-colors duration-[180ms]',
                    isActive ? 'text-ink' : 'text-ink-secondary hover:text-ink',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      aria-hidden
                      className={cn(
                        'absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
                        isActive ? 'w-full' : 'w-0 group-hover:w-full',
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {location.pathname !== '/contact' && (
            <div className="hidden lg:block">
              <ButtonLink to="/contact" variant="primary" size="sm">
                Book a Call
              </ButtonLink>
            </div>
          )}

          {/* Mobile trigger */}
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-edge text-ink lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.normal, ease: easing.standard }}
            className="fixed inset-0 z-30 flex flex-col justify-between bg-canvas px-6 pt-32 pb-12 lg:hidden"
          >
            <motion.nav
              aria-label="Mobile"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: stagger.large } } }}
              className="flex flex-col gap-2"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: duration.medium, ease: easing.entrance },
                    },
                  }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        'block py-3 font-display text-heading-l font-medium transition-colors',
                        isActive ? 'text-accent' : 'text-ink',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: duration.medium, ease: easing.entrance }}
              className="flex flex-col gap-6"
            >
              <ButtonLink to="/contact" variant="primary" size="lg" withArrow className="w-full">
                Book a Call
              </ButtonLink>
              <p className="text-center text-caption text-ink-muted">{site.city}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
