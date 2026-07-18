import { Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Seo } from '@/components/layout/Seo'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionLabel } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { MediaPlaceholder } from '@/components/media/MediaPlaceholder'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { getProjectBySlug, getRelatedProjects } from '@/constants/projects'
import { fadeInUp, imageReveal, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Case study — Volume IV Ch2. Documentary storytelling formula:
 * Why? (challenge) → How? (approach/production) → What? (deliverables) →
 * What changed? (results). No fabricated quotes — Volume VII forbids it,
 * so this template simply omits that section until a real one exists.
 */
export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) return <Navigate to="/work" replace />

  const related = getRelatedProjects(project)

  return (
    <>
      <Seo
        title={`${project.title} — Case Study`}
        description={project.summary}
      />

      {/* Hero */}
      <Section spacing="hero" className="!pb-0">
        <Container width="wide">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer(stagger.medium)}>
            <motion.div variants={fadeInUp}>
              <SectionLabel>{project.industry}</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="mt-5 max-w-3xl font-display text-display-l font-medium text-ink"
            >
              {project.title}
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-6 max-w-xl text-body-l text-ink-secondary">
              {project.summary}
            </motion.p>
          </motion.div>

          <motion.div variants={imageReveal} initial="hidden" animate="visible" className="mt-12 md:mt-16">
            <MediaPlaceholder hue={project.hue} play className="aspect-[16/9] md:aspect-[21/9]" />
          </motion.div>
        </Container>
      </Section>

      {/* Quick overview */}
      <Section spacing="compact">
        <Container width="wide">
          <div className="grid grid-cols-2 gap-8 border-y border-divider py-10 md:grid-cols-4 md:py-12">
            {[
              { label: 'Client', value: project.client },
              { label: 'Services', value: project.services.join(', ') },
              { label: 'Timeline', value: project.timeline },
              { label: 'Year', value: project.year },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-label font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  {item.label}
                </p>
                <p className="mt-2.5 text-body-s text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Challenge */}
      <Section spacing="compact" tone="secondary">
        <Container width="reading">
          <motion.div
            variants={staggerContainer(stagger.medium)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>The Challenge</SectionLabel>
            </motion.div>
            <motion.p variants={fadeInUp} className="mt-6 text-heading-m font-medium text-ink md:text-heading-l">
              {project.challenge}
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Approach */}
      <Section spacing="compact">
        <Container width="reading">
          <motion.div
            variants={staggerContainer(stagger.medium)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Creative Approach</SectionLabel>
            </motion.div>
            <motion.p variants={fadeInUp} className="mt-6 text-body-l leading-relaxed text-ink-secondary">
              {project.approach}
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Production */}
      <Section spacing="compact" tone="secondary">
        <Container width="reading">
          <motion.div
            variants={staggerContainer(stagger.medium)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Production</SectionLabel>
            </motion.div>
            <motion.p variants={fadeInUp} className="mt-6 text-body-l leading-relaxed text-ink-secondary">
              {project.production}
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Gallery */}
      <Section>
        <Container width="wide">
          <motion.div
            variants={staggerContainer(stagger.medium)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6"
          >
            <motion.div variants={fadeInUp} className="col-span-2">
              <MediaPlaceholder hue={project.hue} className="aspect-[16/9]" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <MediaPlaceholder hue={project.hue} className="aspect-[3/4]" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <MediaPlaceholder hue={project.hue} className="aspect-square" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <MediaPlaceholder hue={project.hue} className="aspect-square" />
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Deliverables + Results */}
      <Section spacing="compact" tone="secondary">
        <Container width="wide">
          <div className="grid gap-14 md:grid-cols-2 md:gap-20">
            <motion.div
              variants={staggerContainer(stagger.small)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.div variants={fadeInUp}>
                <SectionLabel>Final Deliverables</SectionLabel>
              </motion.div>
              <motion.ul variants={fadeInUp} className="mt-6 space-y-3">
                {project.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-body-s text-ink-secondary">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {d}
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              variants={staggerContainer(stagger.small)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.div variants={fadeInUp}>
                <SectionLabel>Results</SectionLabel>
              </motion.div>
              <motion.ul variants={fadeInUp} className="mt-6 space-y-3">
                {project.results.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-body-s text-ink-secondary">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {r}
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Related work */}
      <Section>
        <Container width="wide">
          <SectionLabel>More Work</SectionLabel>
          <motion.div
            variants={staggerContainer(stagger.large)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-8 grid gap-8 md:grid-cols-3"
          >
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} aspect="aspect-[4/5]" />
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="compact" tone="secondary">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <p className="max-w-md font-display text-heading-m font-medium text-ink">
              Inspired by this project? Let's talk about yours.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonLink to="/contact" variant="primary" size="lg" withArrow>
                Book a Discovery Call
              </ButtonLink>
              <ButtonLink to="/work" variant="secondary" size="lg">
                Back to Work
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
