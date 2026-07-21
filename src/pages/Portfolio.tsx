import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Seo } from '@/components/layout/Seo'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionLabel } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { projects, type Project } from '@/constants/projects'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

const filters = ['All', ...Array.from(new Set(projects.map((p) => p.category)))] as const

/**
 * Portfolio — Volume IV Ch1. Quiet hero (not another showreel), 3 flagship
 * projects up top, then the full editorial grid with simple category filters.
 */
export default function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>('All')

  const featured = projects.filter((p) => p.featured)
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

      {/* Flagship projects — largest canvas */}
      <Section spacing="compact" tone="secondary">
        <Container width="wide">
          <motion.div
            variants={staggerContainer(stagger.large)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-14 md:flex-row md:gap-8"
          >
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} rowHeight="md:h-[420px]" />
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Filters + full grid */}
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

          <motion.div
            key={active}
            variants={staggerContainer(stagger.medium)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2"
          >
            {filtered.map((project: Project) => (
              <ProjectCard key={project.slug} project={project} aspect="aspect-[16/9]" />
            ))}
          </motion.div>

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
