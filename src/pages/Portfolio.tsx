import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Seo } from '@/components/layout/Seo'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionLabel } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { JustifiedPortfolioGrid } from '@/components/portfolio/JustifiedPortfolioGrid'
import { projects } from '@/constants/projects'
import { fadeInUp, viewportOnce } from '@/animations/variants'

const filters = ['All', ...Array.from(new Set(projects.map((p) => p.category)))] as const

/**
 * Portfolio — Volume IV Ch1. Quiet hero (not another showreel), then one
 * justified-row editorial grid — no separate "flagship strip" repeating the
 * same handful of projects twice, since every project here is real work.
 */
export default function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <>
      <Seo
        title="Selected Work"
        description="A curated collection of films, campaigns and branded content created for businesses and marketing agencies who value craftsmanship."
      />

      {/* Quiet hero — a still moment, not a showreel */}
      <Section spacing="hero">
        <Container>
          <SectionLabel>Selected Work</SectionLabel>
          <h1 className="mt-5 max-w-2xl font-display text-display-l font-medium text-ink">
            Work that speaks before we do<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-body-l text-ink-secondary">
            A curated collection — not an archive. Every project here represents the
            standard we hold every future one to.
          </p>
        </Container>
      </Section>

      {/* Filters + justified editorial grid */}
      <Section>
        <Container width="wide">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-14 flex flex-wrap gap-3 md:mb-16"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                className="rounded-full bg-transparent p-0"
              >
                <Tag active={active === f}>{f}</Tag>
              </button>
            ))}
          </motion.div>

          <JustifiedPortfolioGrid projects={filtered} />

          {filtered.length === 0 && (
            <p className="py-20 text-center text-body text-ink-muted">
              More work in this category is coming soon.
            </p>
          )}
        </Container>
      </Section>
    </>
  )
}
