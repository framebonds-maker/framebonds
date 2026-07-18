import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Conviction moment — no fabricated testimonials (Volume V Ch6 rule:
 * authentic only). Until real client words exist, the studio speaks for
 * itself, and the industries strip quietly signals breadth.
 */
const industries = [
  'Fashion & Retail',
  'Hospitality',
  'Real Estate',
  'Fitness',
  'Food & Beverage',
  'Marketing Agencies',
]

export function QuoteSection() {
  return (
    <Section>
      <Container>
        <motion.div
          variants={staggerContainer(stagger.medium)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeInUp}
            aria-hidden
            className="font-display text-heading-xl text-accent"
          >
            “
          </motion.p>
          <motion.blockquote
            variants={fadeInUp}
            className="font-display text-heading-l leading-[1.25] font-medium text-ink md:text-heading-xl"
          >
            We treat every brand as if our own name were on it — because in every frame we
            deliver, it is.
          </motion.blockquote>
          <motion.p variants={fadeInUp} className="mt-8 text-caption tracking-[0.14em] text-ink-muted uppercase">
            The FrameBonds standard
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(stagger.small)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-divider pt-12 md:mt-24"
        >
          {industries.map((industry) => (
            <motion.span
              key={industry}
              variants={fadeInUp}
              className="text-body-s text-ink-muted"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
