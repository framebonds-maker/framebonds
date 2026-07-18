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
 * Featured work — Volume III Ch4. Editorial grid: the lead project gets the
 * full width, the rest alternate 7/5 columns so no two rows feel identical.
 */
export function FeaturedWork() {
  const [lead, ...rest] = projects.slice(0, 5)

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
          <ProjectCard project={lead} aspect="aspect-[16/9] md:aspect-[21/9]" className="md:col-span-12" />
          <ProjectCard project={rest[0]} aspect="aspect-[16/10]" className="md:col-span-7" />
          <ProjectCard project={rest[1]} aspect="aspect-[16/10] md:aspect-[4/3]" className="md:col-span-5" />
          <ProjectCard project={rest[2]} aspect="aspect-[16/10] md:aspect-[4/3]" className="md:col-span-5" />
          <ProjectCard project={rest[3]} aspect="aspect-[16/10]" className="md:col-span-7" />
        </motion.div>
      </Container>
    </Section>
  )
}
