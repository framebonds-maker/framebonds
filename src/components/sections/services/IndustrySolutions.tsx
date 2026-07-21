import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Industry fit — Volume IV Ch3. Helps visitors self-qualify quickly.
 */
const industries = [
  { name: 'Fashion & Retail', goal: 'Premium product presentation and seasonal campaigns.' },
  { name: 'Luxury Retail', goal: 'Craftsmanship shown with the same care it was made with.' },
  { name: 'Fitness', goal: 'Genuine energy and community, captured without staging.' },
  { name: 'Automotive', goal: 'Detail-first films that make craftsmanship and performance felt.' },
  { name: 'Marketing Agencies', goal: 'A reliable white-label production partner behind your brand.' },
]

export function IndustrySolutions() {
  return (
    <Section>
      <Container>
        <SectionHeading label="Who We Work With" title="Built around your industry, not a template" />
        <motion.div
          variants={staggerContainer(stagger.medium)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-x-8 gap-y-10 border-t border-divider pt-10 md:grid-cols-3"
        >
          {industries.map((item) => (
            <motion.div key={item.name} variants={fadeInUp}>
              <h3 className="font-display text-heading-m font-medium text-ink">{item.name}</h3>
              <p className="mt-2 text-body-s text-ink-secondary">{item.goal}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
