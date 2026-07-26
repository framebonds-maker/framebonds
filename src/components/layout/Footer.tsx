import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/SocialIcons'
import { navLinks, site } from '@/constants/site'
import { Container } from '@/components/layout/Container'

/**
 * Global footer — Volume IV Chapter 10 / Volume V Chapter 9.
 * The final impression: calm, spacious, nothing crowded.
 *
 * Deliberately has no CTA button of its own — every page already ends with
 * its own FinalCta section directly above this, and a second button here
 * just duplicated it on the same screen.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-divider bg-canvas">
      <Container width="wide" className="pt-14 pb-10 md:pt-16">
        {/* Info columns */}
        <div className="grid gap-12 pb-14 md:grid-cols-[2fr_1fr_1fr] md:pb-16">
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
            <ul className="mt-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex min-h-11 items-center text-body-s text-ink-secondary transition-colors duration-[180ms] hover:text-ink"
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
            <ul className="mt-2">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex min-h-11 items-center text-body-s text-ink-secondary transition-colors duration-[180ms] hover:text-ink"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex min-h-11 items-center text-body-s text-ink-secondary">{site.city}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              {[
                { href: site.social.instagram, label: 'Instagram', Icon: InstagramIcon },
                { href: `https://wa.me/${site.whatsappNumber}`, label: 'WhatsApp', Icon: MessageCircle },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-edge text-ink-secondary transition-all duration-[180ms] hover:border-edge-strong hover:text-ink"
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
