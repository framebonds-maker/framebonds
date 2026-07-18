import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionLabel } from '@/components/ui/SectionHeading'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Positioning statement + three pillars — Volume III Ch5 / Volume VII Ch3.
 * Explains what FrameBonds actually is, in the client's terms.
 */
const pillars = [
  {
    title: 'Thoughtful planning',
    copy: 'Every shoot is planned before a camera is unpacked — so one production day gives you weeks of usable content.',
  },
  {
    title: 'Reliable production',
    copy: 'Clear timelines, honest communication, delivery you can build a campaign around. No chasing, no surprises.',
  },
  {
    title: 'Long-term partnership',
    copy: "We're not here for one video. We're here to become the production partner your brand keeps coming back to.",
  },
]

export function Philosophy() {
  return (
    <Section>
      <Container>
        <motion.div
          variants={staggerContainer(stagger.medium)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>Why We Exist</SectionLabel>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="mt-7 max-w-3xl font-display text-heading-l leading-[1.2] font-medium text-ink md:text-heading-xl"
          >
            Most businesses don't need <em className="italic">more</em> content. They need
            content that makes people{' '}
            <em className="text-accent italic">feel something</em> about their brand.
          </motion.p>
          <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-body-l text-ink-secondary">
            That's the difference between filming what a business does and telling people
            why it matters. We build every project around the second one.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(stagger.large)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-10 border-t border-divider pt-12 md:mt-20 md:grid-cols-3 md:gap-8"
        >
          {pillars.map((pillar, i) => (
            <motion.div key={pillar.title} variants={fadeInUp}>
              <p className="font-display text-body-s text-ink-muted">0{i + 1}</p>
              <h3 className="mt-3 font-display text-heading-m font-medium text-ink">
                {pillar.title}
              </h3>
              <p className="mt-3 text-body-s leading-relaxed text-ink-secondary">{pillar.copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
