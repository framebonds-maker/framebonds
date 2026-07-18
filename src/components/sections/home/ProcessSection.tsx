import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Process — Volume III Ch7. Five steps, each one answering an unspoken
 * client worry. Certainty is the product of this section.
 */
const steps = [
  {
    title: 'Discovery',
    copy: 'We learn your business before we talk about cameras.',
  },
  {
    title: 'Planning',
    copy: 'Shot lists, locations, schedule — decided before shoot day.',
  },
  {
    title: 'Production',
    copy: 'A calm, prepared shoot that respects your time.',
  },
  {
    title: 'Post',
    copy: 'Edit, colour, sound — where the story comes together.',
  },
  {
    title: 'Delivery',
    copy: 'Every format you need, ready to publish. Then we stay reachable.',
  },
]

export function ProcessSection() {
  return (
    <Section>
      <Container width="wide">
        <SectionHeading
          label="How It Works"
          title="A process you never have to chase"
          intro="You always know what's happening, what's next, and when it lands."
        />

        <motion.ol
          variants={staggerContainer(stagger.large)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-x-8 gap-y-12 md:grid-cols-5"
        >
          {steps.map((step, i) => (
            <motion.li key={step.title} variants={fadeInUp} className="relative">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-edge-strong font-display text-body-s text-ink">
                  {i + 1}
                </span>
                <span aria-hidden className="hidden h-px flex-1 bg-divider md:block" />
              </div>
              <h3 className="mt-5 font-display text-heading-m font-medium text-ink">{step.title}</h3>
              <p className="mt-2.5 text-body-s leading-relaxed text-ink-secondary">{step.copy}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  )
}
