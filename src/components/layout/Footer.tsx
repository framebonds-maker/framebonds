import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from '@/components/ui/SocialIcons'
import { navLinks, site } from '@/constants/site'
import { Container } from '@/components/layout/Container'

/**
 * Global footer — Volume IV Chapter 10 / Volume V Chapter 9.
 * The final impression: calm, spacious, nothing crowded.
 *
 * The footer CTA stays deliberately small (a text link, not a button) —
 * pages like Home already have their own dedicated Final CTA section
 * right above this. Volume III Ch10 is explicit that the footer's CTA
 * should "quietly conclude," never repeat the big emotional close.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-divider bg-canvas">
      <Container width="wide" className="pt-14 pb-10 md:pt-16">
        {/* Quiet closing line — fallback CTA for pages without their own */}
        <Link
          to="/contact"
          className="group flex items-center justify-between gap-4 border-b border-divider pb-12 md:pb-14"
        >
          <span className="text-body-l text-ink-secondary transition-colors duration-[180ms] group-hover:text-ink">
            Ready to start your next project?
          </span>
          <span className="flex shrink-0 items-center gap-2 text-body-s font-semibold text-ink">
            Book a Discovery Call
            <ArrowRight className="h-4 w-4 transition-transform duration-[180ms] group-hover:translate-x-1" />
          </span>
        </Link>

        {/* Info columns */}
        <div className="grid gap-12 py-14 md:grid-cols-[2fr_1fr_1fr] md:py-16">
          <div className="max-w-sm">
            <Link to="/" className="font-display text-[1.35rem] font-medium text-ink">
              {site.name}
              <span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-body-s text-ink-secondary">{site.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <p className="text-label font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-body-s text-ink-secondary transition-colors duration-[180ms] hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-label font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Connect
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-body-s text-ink-secondary transition-colors duration-[180ms] hover:text-ink"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-body-s text-ink-secondary">{site.city}</li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[
                { href: site.social.instagram, label: 'Instagram', Icon: InstagramIcon },
                { href: site.social.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
                { href: site.social.youtube, label: 'YouTube', Icon: YoutubeIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-edge text-ink-secondary transition-all duration-[180ms] hover:border-edge-strong hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal line */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-divider pt-8 text-caption text-ink-muted md:flex-row md:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Crafted with intention in {site.city.split(',')[0]}.</p>
        </div>
      </Container>
    </footer>
  )
}
