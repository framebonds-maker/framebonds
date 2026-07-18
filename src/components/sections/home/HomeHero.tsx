import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Button, ButtonLink } from '@/components/ui/Button'
import { MediaPlaceholder } from '@/components/media/MediaPlaceholder'
import { SectionLabel } from '@/components/ui/SectionHeading'
import { duration, easing } from '@/constants/motion'

/**
 * Homepage hero — Volume III Ch3.
 * Choreographed reveal: eyebrow → headline → copy → CTAs → showreel.
 * The headline leads with philosophy (curiosity), the sub-copy resolves
 * what FrameBonds actually is, the showreel frame carries the proof.
 */
const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: duration.feature, ease: easing.entrance },
})

export function HomeHero() {
  return (
    <section className="pt-36 pb-20 md:pt-48 md:pb-28">
      <Container width="wide">
        <motion.div {...reveal(0.05)}>
          <SectionLabel>Creative Production Partner</SectionLabel>
        </motion.div>

        <motion.h1
          {...reveal(0.15)}
          className="mt-7 max-w-4xl font-display text-[2.9rem] leading-[1.04] font-medium tracking-[-0.02em] text-ink md:text-display-xl"
        >
          The camera is easy.
          <br />
          <em className="text-ink-secondary italic">The story is everything.</em>
        </motion.h1>

        <motion.div
          {...reveal(0.28)}
          className="mt-9 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-xl text-body-l text-ink-secondary">
            FrameBonds crafts commercial films, social content and branded visuals for
            businesses and marketing agencies — planned with intention, produced with
            discipline, delivered without drama.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink to="/contact" variant="primary" size="lg" withArrow>
              Book a Discovery Call
            </ButtonLink>
            <ButtonLink to="/work" variant="secondary" size="lg">
              View Our Work
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.42, duration: 1.1, ease: easing.entrance }}
          className="mt-16 md:mt-20"
        >
          <MediaPlaceholder
            hue="amber"
            play
            className="aspect-[16/9] md:aspect-[21/9]"
            caption={
              <>
                <div>
                  <p className="text-label font-semibold uppercase tracking-[0.18em] text-ink/70">
                    Showreel
                  </p>
                  <p className="mt-1 font-display text-heading-m font-medium text-ink">
                    Two minutes of proof.
                  </p>
                </div>
                <Button
                  variant="icon"
                  size="md"
                  aria-label="Play showreel"
                  className="hidden border-ink/25 bg-canvas/30 backdrop-blur-sm md:flex"
                >
                  <span className="text-caption font-semibold">2:04</span>
                </Button>
              </>
            }
          />
        </motion.div>
      </Container>
    </section>
  )
}
