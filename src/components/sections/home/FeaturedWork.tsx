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
 * Featured work — Volume III Ch4. Justified rows: every card in a row shares
 * one height, and each card's own width comes from its real footage ratio —
 * portrait and landscape footage sit flush together with no cropping and no
 * uneven gaps, the way a proper editorial layout mixes orientations.
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
          className="mt-14 flex flex-col gap-14 md:mt-20"
        >
          <div className="flex flex-col gap-14 md:flex-row md:gap-8">
            <ProjectCard project={a} rowHeight="md:h-[480px]" />
            <ProjectCard project={b} rowHeight="md:h-[480px]" />
          </div>
          <div className="flex flex-col gap-14 md:flex-row md:gap-8">
            <ProjectCard project={c} rowHeight="md:h-[380px]" />
            <ProjectCard project={d} rowHeight="md:h-[380px]" />
            <ProjectCard project={e} rowHeight="md:h-[380px]" />
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
