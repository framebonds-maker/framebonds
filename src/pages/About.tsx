import { Seo } from '@/components/layout/Seo'
import { WhyWeExist } from '@/components/sections/about/WhyWeExist'
import { Perspective } from '@/components/sections/about/Perspective'
import { CreativePrinciples } from '@/components/sections/about/CreativePrinciples'
import { HowWeWork } from '@/components/sections/about/HowWeWork'
import { CinematicBreak } from '@/components/sections/shared/CinematicBreak'
import { FinalCta } from '@/components/sections/shared/FinalCta'

/**
 * About — Volume IV Ch4. Purpose → Perspective → Principles → How We Work
 * → CTA. A credibility story, not a company history or team roster.
 */
export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="FrameBonds exists to close the gap between content that fills a feed and content that changes how a brand is perceived."
      />

      <WhyWeExist />
      <Perspective />
      <CreativePrinciples />

      <CinematicBreak
        video="/videos/forge-full.mp4"
        poster="/videos/forge-poster.jpg"
        eyebrow="On Set"
        statement={
          <>
            Every project gets the same attention,
            <br />
            on camera and off it<span className="text-accent">.</span>
          </>
        }
      />

      <HowWeWork />
      <FinalCta
        heading={
          <>
            Let's see if we're a fit<span className="text-accent">.</span>
          </>
        }
        copy="A short conversation tells us more than any proposal could. No pressure, no obligation."
        primaryLabel="Book a Discovery Call"
      />
    </>
  )
}
