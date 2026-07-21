import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { JustifiedPortfolioGrid } from '@/components/portfolio/JustifiedPortfolioGrid'
import { projects } from '@/constants/projects'

/**
 * Featured work — Volume III Ch4. Same justified-row engine as the full
 * Portfolio page: every card in a row shares one height, and each card's
 * width comes from its real footage ratio, so mixed orientations sit flush
 * with no cropping and no uneven gaps.
 */
export function FeaturedWork() {
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

        <div className="mt-14 md:mt-20">
          <JustifiedPortfolioGrid projects={projects} />
        </div>
      </Container>
    </Section>
  )
}
