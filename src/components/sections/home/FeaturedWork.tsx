import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { getProjectBySlug } from '@/constants/projects'

/**
 * Featured work — Volume III Ch4. A small, hand-composed selection (not
 * the full catalogue — that lives on /work). Picked by slug (not just "the
 * first N featured projects") so the composition here stays deliberate as
 * new work gets added.
 */
export function FeaturedWork() {
  const aria = getProjectBySlug('ratnasar-aria-set')!
  const forge = getProjectBySlug('forge-athletics')!
  const studioSession = getProjectBySlug('studio-session')!

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

        <div className="mt-14 flex flex-col gap-14 md:mt-20 md:flex-row md:gap-8">
          <ProjectCard project={aria} rowHeight="md:h-[420px]" />
          <ProjectCard project={forge} rowHeight="md:h-[420px]" />
          <ProjectCard project={studioSession} rowHeight="md:h-[420px]" />
        </div>
      </Container>
    </Section>
  )
}
