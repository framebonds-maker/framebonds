import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

const steps = [
  { title: 'Agency Brief', body: 'You share the client goal, deliverables and any brand guidelines.' },
  { title: 'Planning', body: 'We turn the brief into a shot list, schedule and clear scope together.' },
  { title: 'Production', body: 'We shoot on location or in studio, under your agency\'s direction.' },
  { title: 'Editing', body: 'Post-production follows your brand or client specification exactly.' },
  { title: 'Agency Review', body: 'You review first and relay one consolidated round of feedback.' },
  { title: 'Client Delivery', body: 'Final files reach your client through you — FrameBonds stays invisible.' },
]

/**
 * White-label workflow — Volume IV Ch5. Simple, linear, agency stays in
 * control of the client relationship at every step.
 */
export function HowItWorks() {
  return (
    <Section tone="secondary">
      <Container width="wide">
        <SectionHeading label="How It Works" title="A simple, predictable handoff" />
        <motion.div
          variants={staggerContainer(stagger.small)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-x-8 gap-y-10 border-t border-divider pt-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={fadeInUp}>
              <span className="font-display text-label font-semibold text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-heading-m font-medium text-ink">{step.title}</h3>
              <p className="mt-2 text-body-s leading-relaxed text-ink-secondary">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
