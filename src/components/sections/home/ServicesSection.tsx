import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Services — Volume III Ch6 / Volume VII Ch3. Outcome-first, presented as
 * editorial index rows (not SaaS cards): number, name, what it changes.
 */
const services = [
  {
    number: '01',
    title: 'Brand Films',
    outcome: 'The film that makes people understand — and remember — who you are.',
  },
  {
    number: '02',
    title: 'Commercial Content',
    outcome: 'Product, retail and campaign films built to sell without shouting.',
  },
  {
    number: '03',
    title: 'Social Content Systems',
    outcome: 'A month of premium, on-brand content captured in a single planned shoot.',
  },
  {
    number: '04',
    title: 'White-Label Production',
    outcome: 'Your agency’s production department — invisible to your clients, reliable to you.',
  },
]

export function ServicesSection() {
  return (
    <Section tone="secondary">
      <Container>
        <SectionHeading
          label="What We Do"
          title="Four ways in — one standard of craft"
          intro="Every service is planned around a business outcome, never just a deliverable."
        />

        <motion.div
          variants={staggerContainer(stagger.medium)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="border-t border-divider"
        >
          {services.map((service) => (
            <motion.div key={service.number} variants={fadeInUp}>
              <Link
                to="/services"
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-5 border-b border-divider py-8 transition-colors duration-[250ms] hover:bg-surface/40 md:grid-cols-[5rem_1fr_1fr_auto] md:items-center md:gap-8 md:py-10"
              >
                <span className="font-display text-body-s text-ink-muted">{service.number}</span>
                <h3 className="font-display text-heading-m font-medium text-ink transition-colors duration-[180ms] group-hover:text-accent-hover md:text-heading-l">
                  {service.title}
                </h3>
                <p className="col-span-3 text-body-s text-ink-secondary md:col-span-1">
                  {service.outcome}
                </p>
                <span
                  aria-hidden
                  className="hidden h-10 w-10 items-center justify-center rounded-full border border-edge text-ink-secondary transition-all duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-edge-strong group-hover:text-ink md:flex"
                >
                  <ArrowRight className="h-4 w-4 transition-transform duration-[250ms] group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
