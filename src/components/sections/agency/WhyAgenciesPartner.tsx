import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

const reasons = [
  {
    title: 'Capacity without headcount',
    body: 'Take on another client, another campaign, another busy quarter — without hiring, training or managing an internal production team.',
  },
  {
    title: 'One point of contact',
    body: "A single production partner instead of a rotating list of freelancers, each with their own availability, standards and communication style.",
  },
  {
    title: 'Consistency your clients can feel',
    body: "The same quality and reliability on project five as project one — the thing freelancer marketplaces rarely deliver twice in a row.",
  },
  {
    title: 'Confidentiality by default',
    body: 'Every partnership runs white-label from day one. Your client relationship stays entirely yours.',
  },
]

/**
 * Why agencies partner — Volume IV Ch5. Frames FrameBonds as capacity,
 * not competition.
 */
export function WhyAgenciesPartner() {
  return (
    <Section tone="secondary">
      <Container width="wide">
        <SectionHeading
          label="Why Agencies Partner With Us"
          title="We work alongside your team, not instead of it"
        />
        <motion.div
          variants={staggerContainer(stagger.medium)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-x-10 gap-y-12 border-t border-divider pt-12 md:grid-cols-2"
        >
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={fadeInUp}>
              <h3 className="font-display text-heading-m font-medium text-ink">{reason.title}</h3>
              <p className="mt-3 text-body-s leading-relaxed text-ink-secondary">{reason.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
