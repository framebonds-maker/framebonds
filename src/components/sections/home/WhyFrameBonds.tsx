import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Differentiation — Volume III Ch8. Observable behaviours, not adjectives.
 * Split layout: conviction on the left, evidence stacked on the right.
 */
const reasons = [
  {
    title: 'Quality over quantity',
    copy: "We'd rather deliver five pieces your brand is proud of than fifty it tolerates.",
  },
  {
    title: 'Business-first creativity',
    copy: 'Every creative decision has to earn its place by serving your objective — not our showreel.',
  },
  {
    title: 'One point of contact',
    copy: 'No freelancer roulette. One partner, one conversation, one consistent standard.',
  },
  {
    title: 'Built for the long term',
    copy: 'Our best clients are the ones still with us — because reliability compounds.',
  },
]

export function WhyFrameBonds() {
  return (
    <Section tone="secondary">
      <Container>
        <div className="grid gap-14 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div>
            <SectionHeading
              label="Why FrameBonds"
              title={
                <>
                  Anyone can film.
                  <br />
                  Few can be <em className="text-accent italic">trusted</em>.
                </>
              }
              intro="The difference isn't equipment — it's judgment, discipline, and how we treat your brand when you're not in the room."
              className="mb-8 md:mb-10"
            />
            <ButtonLink to="/about" variant="secondary" size="md" withArrow>
              How We Think
            </ButtonLink>
          </div>

          <motion.div
            variants={staggerContainer(stagger.medium)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="border-t border-divider"
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={fadeInUp}
                className="border-b border-divider py-7"
              >
                <h3 className="font-display text-heading-m font-medium text-ink">{reason.title}</h3>
                <p className="mt-2.5 max-w-xl text-body-s leading-relaxed text-ink-secondary">
                  {reason.copy}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
