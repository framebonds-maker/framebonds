import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { VideoPreview } from '@/components/media/VideoPreview'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'
import { cn } from '@/lib/utils'

/**
 * Service pillars — Volume IV Ch3. Problem → Solution → Outcome framing,
 * each pillar linked to real portfolio proof (Volume VII Ch4) — every card
 * plays real footage on hover and goes somewhere specific on click.
 */
type Pillar = {
  name: string
  problem: string
  solution: string
  video: string
  poster: string
  orientation: 'portrait' | 'landscape'
  to: string
  cta: string
}

const pillars: Pillar[] = [
  {
    name: 'Brand Films',
    problem: "Your business has a story, but most of what represents it online doesn't tell it.",
    solution:
      "We build a single, considered film around what makes your brand worth choosing — the kind of content that changes how people see you, not just what they see.",
    video: '/videos/raymond-preview.mp4',
    poster: '/videos/raymond-poster.jpg',
    orientation: 'portrait',
    to: '/work/ethnix-by-raymond',
    cta: 'Watch Ethnix by Raymond',
  },
  {
    name: 'Commercial Content',
    problem: 'Product and campaign content that looks like everyone else\'s rarely moves anyone.',
    solution:
      'Retail, product and campaign films built to sell without sounding like an advertisement — composed, graded and paced with intention.',
    video: '/videos/raymond-gallery-preview.mp4',
    poster: '/videos/raymond-gallery-poster.jpg',
    orientation: 'portrait',
    to: '/work/ethnix-campaign-cut',
    cta: 'Watch Ethnix by Raymond — Campaign Cut',
  },
  {
    name: 'Social Content Systems',
    problem: 'Consistent, premium social content is hard to sustain without a full-time hire.',
    solution:
      'A planned shoot — scoped to the days your monthly plan includes — generates a full month of on-brand content: reels, cutdowns and stills, so your feed never goes quiet.',
    video: '/videos/forge-preview.mp4',
    poster: '/videos/forge-poster.jpg',
    orientation: 'portrait',
    to: '/work/forge-athletics',
    cta: 'Watch Forge Athletics',
  },
  {
    name: 'White-Label Production',
    problem: 'Growing agency workload without growing your production overhead.',
    solution:
      "We become your production department — invisible to your clients, reliable to you. Your agency stays the face of every project.",
    video: '/videos/bts.mp4',
    poster: '/videos/bts-poster.jpg',
    orientation: 'portrait',
    to: '/agency-partners',
    cta: 'Explore Agency Partnerships',
  },
]

export function ServiceCategories() {
  return (
    <Section tone="secondary">
      <Container width="wide">
        <SectionHeading
          label="What We Offer"
          title="Four pillars, one standard"
          intro="Every service exists to solve a specific business problem — never just to fill a deliverables list."
        />

        <div className="flex flex-col gap-20 md:gap-28">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.name}
              variants={staggerContainer(stagger.medium)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className={cn(
                'grid items-center gap-10 md:grid-cols-2 md:gap-16',
                i % 2 === 1 && 'md:[&>*:first-child]:order-2',
              )}
            >
              <motion.div variants={fadeInUp}>
                <Link to={pillar.to} className="group block focus-visible:outline-accent">
                  <VideoPreview
                    src={pillar.video}
                    poster={pillar.poster}
                    play
                    className={cn(
                      'mx-auto',
                      pillar.orientation === 'portrait' ? 'aspect-[9/16] max-w-xs md:max-w-sm' : 'aspect-[16/9]',
                    )}
                  />
                </Link>
              </motion.div>
              <div>
                <motion.h3 variants={fadeInUp} className="font-display text-heading-l font-medium text-ink">
                  {pillar.name}
                </motion.h3>
                <motion.p variants={fadeInUp} className="mt-3 text-body-s text-ink-muted">
                  {pillar.problem}
                </motion.p>
                <motion.p variants={fadeInUp} className="mt-3 text-body-s leading-relaxed text-ink-secondary">
                  {pillar.solution}
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Link
                    to={pillar.to}
                    className="group mt-5 inline-flex items-center gap-2 text-body-s font-semibold text-ink transition-colors duration-[180ms] hover:text-accent-hover"
                  >
                    {pillar.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-[180ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
