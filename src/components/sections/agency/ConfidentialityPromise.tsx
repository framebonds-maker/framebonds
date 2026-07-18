import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionLabel } from '@/components/ui/SectionHeading'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Confidentiality promise — Volume IV Ch5. Heavily emphasized per spec;
 * the single biggest objection an agency will have before partnering.
 */
export function ConfidentialityPromise() {
  return (
    <Section>
      <Container width="reading">
        <motion.div
          variants={staggerContainer(stagger.medium)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="border-l-2 border-accent/60 pl-8 md:pl-10"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-accent" strokeWidth={1.75} />
            <SectionLabel>Confidentiality Promise</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mt-5 font-display text-heading-l font-medium text-ink md:text-heading-xl"
          >
            Your client relationship is yours. Full stop.
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-5 max-w-xl text-body-l leading-relaxed text-ink-secondary">
            We never approach your clients directly, never reference your accounts in our
            own portfolio without permission, and sign an NDA on request before any brief
            is shared. White-label isn't a feature of our partnership — it's the default.
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  )
}
