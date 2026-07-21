import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { projects } from '@/constants/projects'
import { staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Featured work — Volume III Ch4. Editorial grid: each project's box shape
 * follows its own footage orientation (portrait footage gets a portrait
 * frame, never a cropped wide one) — composition varies row to row so the
 * mismatch never reads as an accident.
 */
export function FeaturedWork() {
  const [a, b, c, d, e] = projects.slice(0, 5)

  return (
    <Section tone="secondary">
      <Container width="wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            label="Selected Work"
            title={
              <>
                Proof, not promises<span className="text-accent">.</span>
              </>
            }
            intro="A curated selection — every project shown here earned its place."
            className="mb-0"
          />
          <ButtonLink to="/work" variant="secondary" size="md" withArrow className="mb-2">
            View All Work
          </ButtonLink>
        </div>

        <motion.div
          variants={staggerContainer(stagger.large)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:mt-20 md:grid-cols-12"
        >
          <ProjectCard project={a} portraitAspect="aspect-[9/16]" className="md:col-span-4" />
          <ProjectCard project={b} className="md:col-span-8" />
          <ProjectCard project={c} portraitAspect="aspect-[9/16]" className="md:col-span-4" />
          <ProjectCard project={d} portraitAspect="aspect-[9/16]" className="md:col-span-4" />
          <ProjectCard project={e} aspect="aspect-[4/3]" className="md:col-span-4" />
        </motion.div>
      </Container>
    </Section>
  )
}
