import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Tag } from '@/components/ui/Tag'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

const audiences = ['Marketing Agencies', 'Branding Studios', 'Independent Consultants', 'Social Media Agencies']

/**
 * Self-qualification — Volume IV Ch5. Names the audience explicitly so
 * the wrong visitor self-selects out quickly, and the right one keeps reading.
 */
export function WhoThisIsFor() {
  return (
    <Section>
      <Container width="reading">
        <motion.div
          variants={staggerContainer(stagger.medium)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2.5">
            {audiences.map((a) => (
              <Tag key={a}>{a}</Tag>
            ))}
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mt-6 font-display text-heading-xl font-medium text-ink md:text-display-l"
          >
            If client work keeps growing faster than your production capacity, this is for you
            <span className="text-accent">.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-6 text-body-l leading-relaxed text-ink-secondary">
            This isn't for brands looking to hire a production studio directly — that's
            what our <a href="/services" className="text-ink underline decoration-edge-strong underline-offset-4 hover:decoration-ink">Services</a> page
            is for. This page is for agencies who need a production partner working quietly
            behind their own name.
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  )
}
