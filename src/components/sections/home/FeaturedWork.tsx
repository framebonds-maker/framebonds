import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { projects } from '@/constants/projects'

/**
 * Featured work — Volume III Ch4. A small, hand-composed selection (not
 * the full catalogue — that lives on /work). Two flush rows, one landscape
 * paired with one portrait per row, sized to each clip's real ratio.
 */
export function FeaturedWork() {
  const featured = projects.filter((p) => p.featured)
  const [a, b, c, d] = featured

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
            intro="A few recent projects — see the full catalogue on the work page."
            className="mb-0"
          />
          <ButtonLink to="/work" variant="secondary" size="md" withArrow className="mb-2">
            View All Work
          </ButtonLink>
        </div>

        <div className="mt-14 flex flex-col gap-14 md:mt-20">
          <div className="flex flex-col gap-14 md:flex-row md:gap-8">
            <ProjectCard project={a} rowHeight="md:h-[480px]" />
            <ProjectCard project={b} rowHeight="md:h-[480px]" />
          </div>
          <div className="flex flex-col gap-14 md:flex-row md:gap-8">
            <ProjectCard project={c} rowHeight="md:h-[380px]" />
            <ProjectCard project={d} rowHeight="md:h-[380px]" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
