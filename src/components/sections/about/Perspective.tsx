import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MediaPlaceholder } from '@/components/media/MediaPlaceholder'
import { fadeInUp, viewportOnce } from '@/animations/variants'

/**
 * Perspective / philosophy — Volume IV Ch4. Belief-driven, not biographical.
 * Deliberately generic on personnel per project instruction: no names,
 * no headcounts, no internal org detail.
 */
export function Perspective() {
  return (
    <Section tone="secondary">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <MediaPlaceholder hue="sage" className="aspect-[4/5]" />
          </motion.div>
          <div>
            <SectionHeading
              label="Our Perspective"
              title="Craft is not a finishing touch. It's the whole point."
            />
            <p className="max-w-md text-body-l leading-relaxed text-ink-secondary">
              A film can be technically correct and still feel forgettable. The difference
              between the two is never the equipment — it's whether every decision along
              the way was made on purpose. A frame held a second longer. A cut placed where
              the story actually turns. A color grade that matches the mood, not just the brand book.
            </p>
            <p className="mt-6 max-w-md text-body-l leading-relaxed text-ink-secondary">
              We hold every project to that standard, whether it carries the FrameBonds
              name or lives quietly inside a partner agency's own brand.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
