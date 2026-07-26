import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { ButtonLink } from '@/components/ui/Button'
import { site } from '@/constants/site'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Final CTA — Volume III Ch10. Trust has already been earned; this section
 * simply opens the door. Calm, spacious, one dominant action. Reused across
 * every page's closing moment with page-specific copy.
 */
type FinalCtaProps = {
  heading?: ReactNode
  copy?: ReactNode
  primaryLabel?: string
  primaryTo?: string
}

export function FinalCta({
  heading = (
    <>
      Ready when you are<span className="text-accent">.</span>
    </>
  ),
  copy = "Whether you're building your brand or expanding your agency's capacity, let's talk about what you're trying to create.",
  primaryLabel = 'Book a Discovery Call',
  primaryTo = '/contact',
}: FinalCtaProps) {
  return (
    <Section spacing="hero" className="final-cta-section">
      <Container>
        <motion.div
          variants={staggerContainer(stagger.medium)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-display text-heading-xl font-medium text-ink md:text-display-l"
          >
            {heading}
          </motion.h2>
          <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-md text-body-l text-ink-secondary">
            {copy}
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink to={primaryTo} variant="primary" size="lg" withArrow>
              {primaryLabel}
            </ButtonLink>
            <ButtonLink to={`mailto:${site.email}`} variant="text" size="lg">
              or email us directly
            </ButtonLink>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
