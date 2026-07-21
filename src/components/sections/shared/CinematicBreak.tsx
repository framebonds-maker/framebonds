import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
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
}

/**
 * Full-bleed cinematic break — Volume VI's "signature scene transition"
 * pattern. Reserved for pages that are otherwise a long stack of text
 * (Agency Partners, Services) so scrolling has at least one moment that
 * stops the eye instead of another paragraph block.
 */
export function CinematicBreak({ video, poster, eyebrow, statement, to, ctaLabel }: CinematicBreakProps) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden md:min-h-[88vh]">
      <div className="absolute inset-0">
        <VideoPreview src={video} poster={poster} autoPlay bare className="h-full w-full" />
      </div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to top, rgb(10 10 11 / 92%) 0%, rgb(10 10 11 / 55%) 45%, rgb(10 10 11 / 15%) 75%, transparent 100%)',
        }}
      />
      <Container className="relative z-10 pb-16 md:pb-24">
        <motion.div
          variants={staggerContainer(stagger.medium)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={fadeInUp}
            className="text-label font-semibold uppercase tracking-[0.18em] text-ink/70"
          >
            {eyebrow}
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-2xl font-display text-heading-xl font-medium text-ink md:text-display-l"
          >
            {statement}
          </motion.p>
          {to && (
            <motion.div variants={fadeInUp} className="mt-8">
              <Link
                to={to}
                className="inline-flex items-center gap-2 text-body font-semibold text-ink transition-colors duration-[180ms] hover:text-accent-hover"
              >
                {ctaLabel}
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
