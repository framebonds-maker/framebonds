import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Input, Textarea, Select } from '@/components/forms/Field'
import { Button } from '@/components/ui/Button'
import { fadeInUp } from '@/animations/variants'

/**
 * Minimal inquiry form — Volume III Ch8 / Volume V Ch4. Server-side
 * validation is required at the real endpoint; this schema is the
 * client-side half of that contract, not a substitute for it.
 */
const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name.'),
  company: z.string().trim().min(1, 'Please enter your company or agency name.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  businessType: z.enum(['brand', 'agency', 'other'], {
    message: 'Please tell us which best describes you.',
  }),
  projectType: z.string().trim().min(1, 'Please select a project type.'),
  message: z.string().trim().min(10, 'A few sentences helps us prepare for the call.'),
})

type ContactValues = z.infer<typeof contactSchema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) })

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 600))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start gap-4 rounded-[1rem] border border-edge bg-surface p-8 md:p-10"
      >
        <CheckCircle2 className="h-8 w-8 text-accent" strokeWidth={1.5} />
        <h3 className="font-display text-heading-m font-medium text-ink">
          Thanks — that's landed in our inbox.
        </h3>
        <p className="max-w-sm text-body-s text-ink-secondary">
          We typically respond within one business day. In the meantime, feel free to look
          through some recent work.
        </p>
      </motion.div>
    )
  }

  return (
    <AnimatePresence>
      <motion.form
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-6"
      >
        <Input label="Full Name" placeholder="Jordan Patel" {...register('name')} error={errors.name?.message} />
        <Input
          label="Company / Agency"
          placeholder="Studio North"
          {...register('company')}
          error={errors.company?.message}
        />
        <Input
          label="Email"
          type="email"
          placeholder="jordan@studionorth.com"
          {...register('email')}
          error={errors.email?.message}
        />
        <Select
          label="Which best describes you?"
          defaultValue=""
          {...register('businessType')}
          error={errors.businessType?.message}
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="brand">A brand looking for production</option>
          <option value="agency">A marketing or branding agency</option>
          <option value="other">Something else</option>
        </Select>
        <Select
          label="Project Type"
          defaultValue=""
          {...register('projectType')}
          error={errors.projectType?.message}
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="brand-film">Brand Film</option>
          <option value="commercial">Commercial Content</option>
          <option value="social">Social Content System</option>
          <option value="white-label">White-Label Production</option>
          <option value="not-sure">Not sure yet</option>
        </Select>
        <Textarea
          label="Tell us about the project"
          placeholder="What are you trying to create, and what's the timeline?"
          {...register('message')}
          error={errors.message?.message}
        />
        <Button type="submit" variant="primary" size="lg" loading={isSubmitting} className="mt-2 self-start">
          Send Inquiry
        </Button>
      </motion.form>
    </AnimatePresence>
  )
}
