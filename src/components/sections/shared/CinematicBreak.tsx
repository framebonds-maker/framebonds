import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { VideoPreview } from '@/components/media/VideoPreview'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'
import { useIsMobile } from '@/hooks/useIsMobile'

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
  /** Plays immediately on scroll-into-view instead of waiting for hover. */
  autoPlay?: boolean
}

/**
 * Cinematic break — Volume VI's "signature scene transition" pattern.
 * Reserved for pages that are otherwise a long stack of text (Agency
 * Partners, About, Home) so scrolling has at least one moment that stops
 * the eye instead of another paragraph block. Text and footage sit side by
 * side — copy on the left, video on the right — rather than overlaid on
 * top of each other, so there's never a clash with whatever's burned into
 * the footage itself.
 */
export function CinematicBreak({
  video,
  poster,
  eyebrow,
  statement,
  to,
  ctaLabel,
  orientation = 'landscape',
  autoPlay = true,
}: CinematicBreakProps) {
  const isMobile = useIsMobile()
  return (
    <Section spacing="compact">
      <Container width="wide">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            variants={staggerContainer(stagger.medium)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.p
              variants={fadeInUp}
              className="text-label font-semibold uppercase tracking-[0.18em] text-ink-muted"
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
                  className="inline-flex min-h-11 items-center gap-2 text-body-s font-semibold text-ink transition-colors duration-[180ms] hover:text-accent-hover"
                >
                  {ctaLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            )}
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <VideoPreview
              src={video}
              poster={poster}
              autoPlay={autoPlay && !isMobile}
              play={isMobile}
              allowTap={isMobile}
              soundToggle
              className={orientation === 'portrait' ? 'mx-auto aspect-[9/16] max-w-[92vw] md:max-w-sm' : 'aspect-[16/9]'}
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
