import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionLabel } from '@/components/ui/SectionHeading'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Purpose before history — Volume IV Ch4. Explains why FrameBonds exists,
 * not when it was founded or by whom.
 */
export function WhyWeExist() {
  return (
    <Section>
      <Container width="reading">
        <motion.div
          variants={staggerContainer(stagger.medium)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>Why We Exist</SectionLabel>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="mt-5 font-display text-display-l font-medium text-ink"
          >
            Most brands don't have a content problem. They have a trust problem
            <span className="text-accent">.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-8 text-body-l leading-relaxed text-ink-secondary">
            Anyone can point a camera at a product. Far fewer can make a stranger stop,
            watch, and believe what they're looking at. That gap — between content that
            fills a feed and content that changes a mind — is the only thing FrameBonds
            was built to close.
          </motion.p>
          <motion.p variants={fadeInUp} className="mt-6 text-body-l leading-relaxed text-ink-secondary">
            We exist for the businesses and agencies who already know their work is good,
            but whose visual presence hasn't caught up to it yet. Not to produce more —
            to produce work that earns attention honestly, one considered project at a time.
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  )
}
