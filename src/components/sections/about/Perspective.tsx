import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { VideoPreview } from '@/components/media/VideoPreview'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Perspective / philosophy — Volume IV Ch4. Belief-driven, not biographical.
 * Deliberately generic on personnel per project instruction: no names,
 * no headcounts, no internal org detail. One full-width video carries the
 * whole moment — copy sits directly over it, bottom-left, rather than
 * splitting a boxed video and a separate text column.
 */
export function Perspective() {
  return (
    <Section tone="secondary">
      <Container width="wide">
        <VideoPreview
          src="/videos/ratnasar-aria-full.mp4"
          poster="/videos/ratnasar-aria-poster.jpg"
          autoPlay
          soundToggle
          className="aspect-[4/5] md:aspect-[16/9]"
          caption={
            <motion.div
              variants={staggerContainer(stagger.medium)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="max-w-xl"
            >
              <motion.p
                variants={fadeInUp}
                className="text-label font-semibold uppercase tracking-[0.18em] text-accent"
              >
                Our Perspective
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="mt-3 font-display text-heading-l font-medium text-ink md:text-heading-xl"
              >
                Craft is not a finishing touch. It's the whole point.
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-4 text-body-l leading-relaxed text-ink-secondary">
                A film can be technically correct and still feel forgettable — the
                difference is never the equipment, it's whether every decision was made
                on purpose. We hold every project to that standard, whether it carries
                the FrameBonds name or lives quietly inside a partner agency's own brand.
              </motion.p>
            </motion.div>
          }
        />
      </Container>
    </Section>
  )
}
