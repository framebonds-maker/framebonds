import { Seo } from '@/components/layout/Seo'
import { HomeHero } from '@/components/sections/home/HomeHero'
import { FeaturedWork } from '@/components/sections/home/FeaturedWork'
import { Philosophy } from '@/components/sections/home/Philosophy'
import { ServicesSection } from '@/components/sections/home/ServicesSection'
import { ProcessSection } from '@/components/sections/home/ProcessSection'
import { WhyFrameBonds } from '@/components/sections/home/WhyFrameBonds'
import { QuoteSection } from '@/components/sections/home/QuoteSection'
import { CinematicBreak } from '@/components/sections/shared/CinematicBreak'
import { FinalCta } from '@/components/sections/shared/FinalCta'

/**
 * Homepage — Volume III. Nine-section continuous narrative:
 * Hero → Featured Work → Philosophy → Services → Process → Why → Quote → CTA.
 * This page is the design-language reference every other page follows.
 */
export default function Home() {
  return (
    <>
      <Seo
        title="Creative Production Partner for Brands & Agencies"
        description="FrameBonds crafts commercial films, social content and branded visuals for businesses and marketing agencies — planned with intention, produced with discipline."
      />
      <HomeHero />
      <FeaturedWork />
      <Philosophy />
      <ServicesSection />
      <ProcessSection />

      <CinematicBreak
        video="/videos/automotive-preview.mp4"
        poster="/videos/automotive-poster.jpg"
        autoPlay={false}
        eyebrow="Recent Work"
        statement={
          <>
            Every frame is a decision.
            <br />
            Not an accident<span className="text-accent">.</span>
          </>
        }
        to="/work"
        ctaLabel="See the full portfolio"
      />

      <WhyFrameBonds />
      <QuoteSection />
      <FinalCta />
    </>
  )
}
