import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { VideoPreview } from '@/components/media/VideoPreview'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

type CinematicBreakProps = {
  video: string
  poster: string
  eyebrow: string
  statement: ReactNode
  to?: string
  ctaLabel?: string
  /** Must match the source footage — a portrait clip stays contained at its
   * real ratio instead of being stretched into a cropped wide banner. */
  orientation?: 'portrait' | 'landscape'
}

/**
 * Cinematic break — Volume VI's "signature scene transition" pattern.
 * Reserved for pages that are otherwise a long stack of text (Agency
 * Partners, About, Home) so scrolling has at least one moment that stops
 * the eye instead of another paragraph block. Sized to the footage's own
 * aspect ratio rather than a fixed near-full-viewport height, so it reads
 * as one more section — not a detour that eats the whole scroll.
 */
export function CinematicBreak({
  video,
  poster,
  eyebrow,
  statement,
  to,
  ctaLabel,
  orientation = 'landscape',
}: CinematicBreakProps) {
  return (
    <Section spacing="compact">
      <Container width="wide">
        <VideoPreview
          src={video}
          poster={poster}
          autoPlay
          className={
            orientation === 'portrait'
              ? 'mx-auto aspect-[9/16] max-w-xs md:max-w-sm'
              : 'aspect-[16/9] md:aspect-[21/9]'
          }
          caption={
            <motion.div
              variants={staggerContainer(stagger.medium)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="max-w-2xl"
            >
              <motion.p
                variants={fadeInUp}
                className="text-label font-semibold uppercase tracking-[0.18em] text-ink/70"
              >
                {eyebrow}
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="mt-3 font-display text-heading-l font-medium text-ink md:text-heading-xl"
              >
                {statement}
              </motion.p>
              {to && (
                <motion.div variants={fadeInUp} className="mt-6">
                  <Link
                    to={to}
                    className="inline-flex items-center gap-2 text-body-s font-semibold text-ink transition-colors duration-[180ms] hover:text-accent-hover"
                  >
                    {ctaLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              )}
            </motion.div>
          }
        />
      </Container>
    </Section>
  )
}
