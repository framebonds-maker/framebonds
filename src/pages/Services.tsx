import { Seo } from '@/components/layout/Seo'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionLabel } from '@/components/ui/SectionHeading'
import { ServiceCategories } from '@/components/sections/services/ServiceCategories'
import { WhiteLabelTeaser } from '@/components/sections/services/WhiteLabelTeaser'
import { IndustrySolutions } from '@/components/sections/services/IndustrySolutions'
import { FaqSection } from '@/components/sections/shared/FaqSection'
import { FinalCta } from '@/components/sections/shared/FinalCta'
import { servicesFaq } from '@/constants/faq'

/**
 * Services — Volume IV Ch3. Hero → Philosophy → Pillars → Industry Fit →
 * White-Label → FAQ → CTA. Outcome-first throughout; pricing stays a
 * conversation, never a published list (Volume VII Ch4).
 */
export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Creative production built around business outcomes — brand films, commercial content, social content systems, and white-label production for agencies."
      />

      <Section spacing="hero">
        <Container>
          <SectionLabel>Services</SectionLabel>
          <h1 className="mt-5 max-w-2xl font-display text-display-l font-medium text-ink">
            Production built around your goals, not our showreel<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-body-l text-ink-secondary">
            Every project begins with understanding your business — not planning a shoot.
            The service is simply how that understanding gets delivered.
          </p>
        </Container>
      </Section>

      <ServiceCategories />
      <IndustrySolutions />
      <WhiteLabelTeaser />
      <FaqSection items={servicesFaq} />
      <FinalCta
        heading={
          <>
            Not sure which service fits<span className="text-accent">?</span>
          </>
        }
        copy="Tell us what you're trying to achieve — we'll recommend the right approach on a short call."
        primaryLabel="Book a Discovery Call"
      />
    </>
  )
}
