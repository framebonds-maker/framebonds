import { Mail, MessageCircle } from 'lucide-react'
import { site } from '@/constants/site'
import { InstagramIcon } from '@/components/ui/SocialIcons'

const methods = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Message us directly',
    href: `https://wa.me/${site.whatsappNumber}`,
  },
  { icon: InstagramIcon, label: 'Instagram', value: '@framebonds', href: site.social.instagram },
]

/**
 * Alternative contact methods — Volume III Ch8. Sits beside the form so
 * the inquiry form never feels like the only door in.
 */
export function AlternativeContact() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="font-display text-heading-m font-medium text-ink">Prefer another way?</h3>
        <p className="mt-2 max-w-sm text-body-s text-ink-secondary">
          We typically respond within one business day.
        </p>
      </div>
      <ul className="flex flex-col gap-1">
        {methods.map(({ icon: Icon, label, value, href }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-4 rounded-[0.75rem] px-3 py-3.5 transition-colors duration-[180ms] hover:bg-surface"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-edge text-ink-secondary transition-colors group-hover:border-edge-strong group-hover:text-ink">
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="flex flex-col">
                <span className="text-body-s font-semibold text-ink">{label}</span>
                <span className="text-body-s text-ink-secondary">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
