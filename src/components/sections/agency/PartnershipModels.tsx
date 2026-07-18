import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

const models = [
  {
    name: 'Production Only',
    body: 'We shoot, you edit — for agencies with strong post capability who need reliable hands on set.',
  },
  {
    name: 'Editing Only',
    body: 'Send us your raw footage; we handle post-production to your brand or your client\'s specification.',
  },
  {
    name: 'End-to-End Production',
    body: 'Full production from brief to final delivery — the closest thing to an in-house team, without the overhead.',
  },
  {
    name: 'Monthly Partnership',
    body: 'An ongoing arrangement across recurring clients or campaigns, planned and scoped together in advance.',
  },
]

/**
 * Partnership models — Volume IV Ch5. Four flexible entry points, not a
 * single rigid package.
 */
export function PartnershipModels() {
  return (
    <Section>
      <Container width="wide">
        <SectionHeading
          label="Partnership Models"
          title="Work with us the way that fits your workflow"
          intro="Every model below can flex — most partnerships settle into a mix as the relationship matures."
        />
        <motion.div
          variants={staggerContainer(stagger.medium)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 md:grid-cols-2"
        >
          {models.map((model) => (
            <motion.div key={model.name} variants={fadeInUp}>
              <Card variant="surface" padding="lg" className="h-full">
                <h3 className="font-display text-heading-m font-medium text-ink">{model.name}</h3>
                <p className="mt-3 text-body-s leading-relaxed text-ink-secondary">{model.body}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
