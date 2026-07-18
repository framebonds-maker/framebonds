import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Four creative principles — Volume IV Ch4. Demonstrated through practice,
 * not adjectives.
 */
const principles = [
  {
    title: 'Purpose Before Production',
    body: "No shoot begins until we can answer why it matters to your business. A beautiful film aimed at the wrong outcome is still a wasted day.",
  },
  {
    title: 'Details Build Perception',
    body: 'The gap between good and forgettable usually lives in the details no one asks about — pacing, sound, color, rhythm. We treat those as the work, not the polish on top of it.',
  },
  {
    title: 'Consistency Creates Trust',
    body: "One exceptional project and three inconsistent ones erode more trust than they build. Every deliverable is held to the same standard, on schedule, every time.",
  },
  {
    title: 'Relationships Over Transactions',
    body: "We'd rather turn down a mismatched project than take it and manage the fallout later. The partnerships that last are the ones built on an honest fit from day one.",
  },
]

export function CreativePrinciples() {
  return (
    <Section>
      <Container width="wide">
        <SectionHeading
          label="How We Work"
          title="Four principles behind every project"
        />
        <motion.div
          variants={staggerContainer(stagger.medium)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-x-10 gap-y-12 border-t border-divider pt-12 md:grid-cols-2"
        >
          {principles.map((principle, index) => (
            <motion.div key={principle.title} variants={fadeInUp}>
              <span className="font-display text-label font-semibold text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-heading-m font-medium text-ink">
                {principle.title}
              </h3>
              <p className="mt-3 text-body-s leading-relaxed text-ink-secondary">{principle.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
