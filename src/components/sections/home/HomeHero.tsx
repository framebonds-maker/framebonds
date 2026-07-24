import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { ButtonLink } from '@/components/ui/Button'
import { VideoPreview } from '@/components/media/VideoPreview'
import { SectionLabel } from '@/components/ui/SectionHeading'
import { duration, easing } from '@/constants/motion'

/**
 * Homepage hero — Volume III Ch3.
 * Text and proof share one composition from the first frame — no separate
 * floating "recent work" block below with dead space around it. The
 * headline leads with philosophy (curiosity), the sub-copy resolves what
 * FrameBonds actually is, the reel beside it carries the proof immediately.
 */
const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: duration.feature, ease: easing.entrance },
})

export function HomeHero() {
  return (
    <section className="pt-36 pb-20 md:pt-44 md:pb-28">
      <Container width="wide">
        <div className="grid gap-12 md:grid-cols-[1.35fr_1fr] md:items-center md:gap-16">
          <div>
            <motion.div {...reveal(0.05)}>
              <SectionLabel>Creative Production Partner</SectionLabel>
            </motion.div>

            <motion.h1
              {...reveal(0.15)}
              className="mt-7 font-display text-[2.9rem] leading-[1.04] font-medium tracking-[-0.02em] text-ink md:text-display-xl"
            >
              The camera is easy.
              <br />
              <em className="text-ink-secondary italic">The story is everything.</em>
            </motion.h1>

            <motion.p {...reveal(0.25)} className="mt-7 max-w-lg text-body-l text-ink-secondary">
              FrameBonds crafts commercial films, social content and branded visuals for
              businesses and marketing agencies — planned with intention, produced with
              discipline, delivered without drama.
            </motion.p>

            <motion.div {...reveal(0.35)} className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink to="/contact" variant="primary" size="lg" withArrow>
                Book a Discovery Call
              </ButtonLink>
              <ButtonLink to="/work" variant="secondary" size="lg">
                View Our Work
              </ButtonLink>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: easing.entrance }}
          >
            <VideoPreview
              src="/videos/raymond-full.mp4"
              poster="/videos/raymond-poster.jpg"
              soundToggle
              className="mx-auto aspect-[9/16] w-full max-w-xs"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
