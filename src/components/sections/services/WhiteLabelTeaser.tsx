import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionLabel } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { MediaPlaceholder } from '@/components/media/MediaPlaceholder'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * White-label teaser on the Services page — the full partnership case
 * lives at /agency-partners (Volume IV Ch5). This is the bridge.
 */
export function WhiteLabelTeaser() {
  return (
    <Section tone="secondary">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            variants={staggerContainer(stagger.medium)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>For Marketing Agencies</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="mt-5 font-display text-heading-l font-medium text-ink md:text-heading-xl"
            >
              Your production team.
              <br />
              Invisible to your clients<span className="text-accent">.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-5 max-w-md text-body-l text-ink-secondary">
              Take on more client work without expanding your payroll. We work entirely
              behind your brand — your clients never see our name.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8">
              <ButtonLink to="/agency-partners" variant="secondary" size="lg" withArrow>
                Explore Agency Partnerships
              </ButtonLink>
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <MediaPlaceholder hue="slate" className="aspect-[4/5]" />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
