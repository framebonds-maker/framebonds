import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { VideoPreview } from '@/components/media/VideoPreview'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const paragraph =
  "A film can be technically correct and still feel forgettable — the difference is never the equipment, it's whether every decision was made on purpose. We hold every project to that standard, whether it carries the FrameBonds name or lives quietly inside a partner agency's own brand."

/**
 * Perspective / philosophy — Volume IV Ch4. Belief-driven, not biographical.
 * Deliberately generic on personnel per project instruction: no names,
 * no headcounts, no internal org detail.
 *
 * Desktop: one full-width video carries the whole moment — label, heading
 * and paragraph all sit directly over it, bottom-left. Mobile's taller,
 * narrower 4:5 frame doesn't have room for all of that without the text
 * running across the busy footage — only the label + heading stay on the
 * video there; the paragraph moves to its own block underneath.
 */
export function Perspective() {
  const isMobile = useIsMobile()

  return (
    <Section tone="secondary">
      <Container width="wide">
        <VideoPreview
          src="/videos/ratnasar-aria-full.mp4"
          poster="/videos/ratnasar-aria-poster.jpg"
          autoPlay={!isMobile}
          play={isMobile}
          allowTap={isMobile}
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
              {!isMobile && (
                <motion.p variants={fadeInUp} className="mt-4 text-body-l leading-relaxed text-ink-secondary">
                  {paragraph}
                </motion.p>
              )}
            </motion.div>
          }
        />
        {isMobile && (
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-6 text-body-l leading-relaxed text-ink-secondary"
          >
            {paragraph}
          </motion.p>
        )}
      </Container>
    </Section>
  )
}
