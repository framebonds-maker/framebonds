import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MediaPlaceholder } from '@/components/media/MediaPlaceholder'
import { ButtonLink } from '@/components/ui/Button'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'
import type { Project } from '@/constants/projects'

/**
 * Service pillars — Volume IV Ch3. Problem → Solution → Outcome framing,
 * each pillar linked to real portfolio proof (Volume VII Ch4).
 */
type Pillar = {
  name: string
  problem: string
  solution: string
  hue: Project['hue']
}

const pillars: Pillar[] = [
  {
    name: 'Brand Films',
    problem: "Your business has a story, but most of what represents it online doesn't tell it.",
    solution:
      "We build a single, considered film around what makes your brand worth choosing — the kind of content that changes how people see you, not just what they see.",
    hue: 'amber',
  },
  {
    name: 'Commercial Content',
    problem: 'Product and campaign content that looks like everyone else\'s rarely moves anyone.',
    solution:
      'Retail, product and campaign films built to sell without sounding like an advertisement — composed, graded and paced with intention.',
    hue: 'steel',
  },
  {
    name: 'Social Content Systems',
    problem: 'Consistent, premium social content is hard to sustain without a full-time hire.',
    solution:
      'A planned shoot — scoped to the days your monthly plan includes — generates a full month of on-brand content: reels, cutdowns and stills, so your feed never goes quiet.',
    hue: 'terracotta',
  },
  {
    name: 'White-Label Production',
    problem: 'Growing agency workload without growing your production overhead.',
    solution:
      "We become your production department — invisible to your clients, reliable to you. Your agency stays the face of every project.",
    hue: 'slate',
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

        <motion.div
          variants={staggerContainer(stagger.large)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-20"
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.name} variants={fadeInUp}>
              <MediaPlaceholder hue={pillar.hue} className="aspect-[16/10]" />
              <h3 className="mt-6 font-display text-heading-l font-medium text-ink">{pillar.name}</h3>
              <p className="mt-3 text-body-s text-ink-muted">{pillar.problem}</p>
              <p className="mt-3 text-body-s leading-relaxed text-ink-secondary">{pillar.solution}</p>
              <ButtonLink to="/work" variant="text" size="sm" withArrow className="mt-5">
                See Related Work
              </ButtonLink>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
