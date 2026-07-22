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
  const raymond = getProjectBySlug('ethnix-by-raymond')!
  const velocity = getProjectBySlug('velocity-auto')!
  const raymondLook2 = getProjectBySlug('ethnix-look-2')!
  const forge = getProjectBySlug('forge-athletics')!
  const aria = getProjectBySlug('ratnasar-aria-set')!

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
            <ProjectCard project={raymond} rowHeight="md:h-[480px]" />
            <ProjectCard project={velocity} rowHeight="md:h-[480px]" />
          </div>
          <div className="flex flex-col gap-14 md:flex-row md:gap-8">
            <ProjectCard project={raymondLook2} rowHeight="md:h-[380px]" />
            <ProjectCard project={forge} rowHeight="md:h-[380px]" />
          </div>
          <ProjectCard project={aria} aspect="aspect-[16/9] md:aspect-[21/9]" />
        </div>
      </Container>
    </Section>
  )
}
