import { Seo } from '@/components/layout/Seo'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionLabel } from '@/components/ui/SectionHeading'
import { WhoThisIsFor } from '@/components/sections/agency/WhoThisIsFor'
import { WhyAgenciesPartner } from '@/components/sections/agency/WhyAgenciesPartner'
import { PartnershipModels } from '@/components/sections/agency/PartnershipModels'
import { HowItWorks } from '@/components/sections/agency/HowItWorks'
import { ConfidentialityPromise } from '@/components/sections/agency/ConfidentialityPromise'
import { CinematicBreak } from '@/components/sections/shared/CinematicBreak'
import { FaqSection } from '@/components/sections/shared/FaqSection'
import { FinalCta } from '@/components/sections/shared/FinalCta'
import { agencyFaq } from '@/constants/faq'

/**
 * Agency Partnership (White-Label) — Volume IV Ch5. Hero → Who This Is For
 * → Why Agencies Partner → Partnership Models → How It Works →
 * Confidentiality → FAQ → CTA. Collaborative tone throughout — a
 * partnership proposal, never a vendor pitch.
 */
export default function AgencyPartners() {
  return (
    <>
      <Seo
        title="Agency Partnerships"
        description="A white-label production partner for marketing agencies — take on more client work without expanding your team."
      />

      <Section spacing="hero">
        <Container>
          <SectionLabel>For Marketing Agencies</SectionLabel>
          <h1 className="mt-5 max-w-2xl font-display text-display-l font-medium text-ink">
            Your production team. Without expanding your payroll
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-body-l text-ink-secondary">
            A white-label production partner that helps agencies take on more client work
            without building or managing a larger production team.
          </p>
        </Container>
      </Section>

      <WhoThisIsFor />
      <WhyAgenciesPartner />

      <CinematicBreak
        video="/videos/bts.mp4"
        poster="/videos/bts-poster.jpg"
        orientation="portrait"
        autoPlay={false}
        eyebrow="On Set"
        statement={
          <>
            Your clients see the finished film.
            <br />
            We're the part they never see<span className="text-accent">.</span>
          </>
        }
      />

      <PartnershipModels />
      <HowItWorks />
      <ConfidentialityPromise />
      <FaqSection items={agencyFaq} label="Common Questions" title="What agencies usually ask first" />
      <FinalCta
        heading={
          <>
            Let's talk capacity<span className="text-accent">.</span>
          </>
        }
        copy="Tell us what your pipeline looks like — we'll show you exactly where we'd fit in."
        primaryLabel="Book a Partnership Call"
      />
    </>
  )
}
