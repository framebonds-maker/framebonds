import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { VideoPreview } from '@/components/media/VideoPreview'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const clips = [
  { src: '/videos/bts-preview.mp4', poster: '/videos/bts-poster.jpg', to: '/work/on-set' },
  { src: '/videos/coach-preview.mp4', poster: '/videos/coach-poster.jpg', to: '/work/coach-manish' },
  { src: '/videos/studio-session-preview.mp4', poster: '/videos/studio-session-poster.jpg', to: '/work/studio-session' },
]

/**
 * Behind-the-scenes teaser — Volume IV Ch4. Authentic production presence
 * without disclosing internal team structure or headcount.
 */
export function HowWeWork() {
  const isMobile = useIsMobile()
  return (
    <Section tone="secondary">
      <Container>
        <SectionHeading
          label="Behind The Work"
          title="Every project gets the same attention, on set and off it"
          intro="Planning, production and post are treated as one continuous process — not handed off between disconnected stages."
        />
        <motion.div
          variants={staggerContainer(stagger.medium)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-3"
        >
          {clips.map((clip) => (
            <motion.div key={clip.src} variants={fadeInUp}>
              {/* Mobile: the icon is the only way to toggle playback — a tap
                  anywhere else on the frame opens that clip's case study. */}
              {isMobile ? (
                <Link to={clip.to} className="block focus-visible:outline-accent">
                  <VideoPreview src={clip.src} poster={clip.poster} soundToggle play className="aspect-[9/16]" />
                </Link>
              ) : (
                <VideoPreview src={clip.src} poster={clip.poster} soundToggle className="aspect-[9/16]" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
