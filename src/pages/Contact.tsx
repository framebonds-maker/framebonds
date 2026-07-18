import { motion } from 'framer-motion'
import { Seo } from '@/components/layout/Seo'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionLabel } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/forms/ContactForm'
import { AlternativeContact } from '@/components/sections/contact/AlternativeContact'
import { FaqSection } from '@/components/sections/shared/FaqSection'
import { contactFaq } from '@/constants/faq'
import { fadeInUp, staggerContainer } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Contact — Volume III Ch8. Welcoming hero, minimal form, alternative
 * contact methods alongside it (never buried below), FAQ before the
 * commitment of submitting.
 */
export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Tell us about your project or agency's needs — we typically respond within one business day."
      />

      <Section spacing="hero">
        <Container width="reading">
          <motion.div variants={staggerContainer(stagger.medium)} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <SectionLabel>Contact</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="mt-5 font-display text-display-l font-medium text-ink"
            >
              Let's create something exceptional<span className="text-accent">.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-6 max-w-lg text-body-l text-ink-secondary">
              Share a few details about your project or your agency's workload, and we'll come
              to the first call already thinking about how to help.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container width="wide">
          <div className="grid gap-16 md:grid-cols-[1.4fr_1fr] md:gap-20">
            <ContactForm />
            <AlternativeContact />
          </div>
        </Container>
      </Section>

      <FaqSection items={contactFaq} label="Before You Reach Out" title="A few things people ask first" />
    </>
  )
}
