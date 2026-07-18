import { Button, ButtonLink } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { Accordion, AccordionItem } from '@/components/ui/Accordion'
import { SectionHeading, SectionLabel } from '@/components/ui/SectionHeading'
import { Input, Textarea, Select } from '@/components/forms/Field'
import { Skeleton } from '@/components/feedback/Skeleton'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

/**
 * Internal living styleguide — visual reference for the design system.
 * Not linked from public navigation.
 */
export default function Styleguide() {
  return (
    <main className="min-h-screen bg-canvas pb-32">
      <Section spacing="hero">
        <Container>
          <SectionLabel>Design System</SectionLabel>
          <h1 className="mt-5 font-display text-display-l font-medium text-ink">
            The FrameBonds language.
          </h1>
          <p className="mt-6 max-w-xl text-body-l text-ink-secondary">
            Every component on this page shares one visual DNA — charcoal surfaces, ivory
            type, editorial serif headlines, and motion that whispers.
          </p>
        </Container>
      </Section>

      {/* Typography */}
      <Section spacing="compact" tone="secondary">
        <Container>
          <SectionHeading label="Typography" title="Two voices, one rhythm" />
          <div className="space-y-8">
            <p className="font-display text-display-xl font-medium text-ink">Display XL</p>
            <p className="font-display text-display-l font-medium text-ink">Display L</p>
            <p className="font-display text-heading-xl font-medium text-ink">Heading XL</p>
            <p className="font-display text-heading-l font-medium text-ink">Heading L</p>
            <p className="text-heading-m font-semibold text-ink">Heading M — Manrope</p>
            <p className="max-w-2xl text-body-l text-ink-secondary">
              Body Large — Every project begins with understanding your business, not planning a
              shoot. That belief shapes everything we produce.
            </p>
            <p className="max-w-2xl text-body text-ink-secondary">
              Body — Every project begins with understanding your business, not planning a shoot.
            </p>
            <p className="text-caption text-ink-muted">Caption — Jaipur, India · 2026</p>
          </div>
        </Container>
      </Section>

      {/* Buttons */}
      <Section spacing="compact">
        <Container>
          <SectionHeading label="Buttons" title="Four levels, one hierarchy" />
          <div className="flex flex-wrap items-center gap-5">
            <Button variant="primary" size="lg" withArrow>Book a Discovery Call</Button>
            <Button variant="secondary" size="lg">View Our Work</Button>
            <Button variant="text" withArrow>Read the Case Study</Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button variant="primary" size="md">Send Inquiry</Button>
            <Button variant="secondary" size="md">Explore Services</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" loading>Sending</Button>
            <Button variant="primary" disabled>Disabled</Button>
            <ButtonLink to="/styleguide" variant="secondary" size="md" withArrow>As Link</ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Cards */}
      <Section spacing="compact" tone="secondary">
        <Container>
          <SectionHeading label="Cards" title="Frames, not decoration" />
          <div className="grid gap-6 md:grid-cols-3">
            <Card variant="surface">
              <h3 className="font-display text-heading-m font-medium text-ink">Surface</h3>
              <p className="mt-3 text-body-s text-ink-secondary">
                Default container for grouped content when whitespace alone isn't enough.
              </p>
            </Card>
            <Card variant="elevated" interactive>
              <h3 className="font-display text-heading-m font-medium text-ink">Interactive</h3>
              <p className="mt-3 text-body-s text-ink-secondary">
                Hover me — a quiet lift, a brighter border. Nothing theatrical.
              </p>
            </Card>
            <Card variant="outline">
              <h3 className="font-display text-heading-m font-medium text-ink">Outline</h3>
              <p className="mt-3 text-body-s text-ink-secondary">
                Border-only frame for the quietest grouping.
              </p>
              <div className="mt-5 flex gap-2">
                <Tag>Retail</Tag>
                <Tag active>Commercial</Tag>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Forms */}
      <Section spacing="compact">
        <Container>
          <SectionHeading label="Forms" title="A conversation, not paperwork" />
          <div className="grid max-w-2xl gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Input label="Your Name" placeholder="Aarav Sharma" />
              <Input label="Email Address" type="email" placeholder="aarav@company.com" />
            </div>
            <Select label="Project Type">
              <option>Commercial Film</option>
              <option>Monthly Content</option>
              <option>White-Label Partnership</option>
            </Select>
            <Textarea
              label="Tell Us About Your Project"
              placeholder="Even a rough idea is enough — we'll figure it out together."
            />
            <Input
              label="Company"
              placeholder="FrameBonds Studio"
              error="We'd love to know your company name."
            />
          </div>
        </Container>
      </Section>

      {/* Accordion */}
      <Section spacing="compact" tone="secondary">
        <Container>
          <SectionHeading label="FAQ" title="Answers, on request" />
          <div className="max-w-2xl">
            <Accordion>
              <AccordionItem question="How long does a typical project take?" defaultOpen>
                Most projects are delivered within one to two weeks after the shoot. Larger
                campaigns get a timeline agreed before production begins.
              </AccordionItem>
              <AccordionItem question="Do you work with marketing agencies?">
                Yes — white-label production is one of our core partnership models. Your clients
                stay yours; we work behind your brand.
              </AccordionItem>
              <AccordionItem question="Do you travel for shoots?">
                We're based in Jaipur and travel for productions across India.
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </Section>

      {/* Skeleton */}
      <Section spacing="compact">
        <Container>
          <SectionHeading label="Loading" title="Structure before content" />
          <div className="grid max-w-2xl gap-4">
            <Skeleton className="aspect-video w-full" />
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </Container>
      </Section>
    </main>
  )
}
