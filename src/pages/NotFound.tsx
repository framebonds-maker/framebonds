import { motion } from 'framer-motion'
import { Seo } from '@/components/layout/Seo'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { ButtonLink } from '@/components/ui/Button'
import { fadeInUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * 404 — Volume III Ch10. Intentional, on-brand, respectful — never a
 * generic error dump or a joke.
 */
export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="This page couldn't be found." />
      <Section spacing="hero">
        <Container width="reading">
          <motion.div
            variants={staggerContainer(stagger.medium)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span variants={fadeInUp} className="font-display text-display-l font-medium text-accent">
              404
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="mt-5 font-display text-heading-xl font-medium text-ink md:text-display-l"
            >
              Looks like this story hasn't been written yet.
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-6 max-w-md text-body-l text-ink-secondary">
              The page you're looking for doesn't exist, or may have moved.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
              <ButtonLink to="/" variant="primary" size="lg" withArrow>
                Return Home
              </ButtonLink>
              <ButtonLink to="/work" variant="secondary" size="lg">
                View Portfolio
              </ButtonLink>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
