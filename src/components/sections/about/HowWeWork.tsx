import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MediaPlaceholder } from '@/components/media/MediaPlaceholder'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Behind-the-scenes teaser — Volume IV Ch4. Authentic production presence
 * without disclosing internal team structure or headcount.
 */
export function HowWeWork() {
  return (
    <Section tone="secondary">
      <Container>
        <SectionHeading
          label="Behind The Work"
          title="Every project gets the same attention, on set and off it"
          intro="Planning, production and post are treated as one continuous process — not handed off between disconnected stages."
        />
        <motion.div
          variants={staggerContainer(stagger.medium)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-3"
        >
          {(['amber', 'steel', 'terracotta'] as const).map((hue) => (
            <motion.div key={hue} variants={fadeInUp}>
              <MediaPlaceholder hue={hue} className="aspect-[4/5]" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
