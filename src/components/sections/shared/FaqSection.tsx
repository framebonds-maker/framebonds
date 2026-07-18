import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion, AccordionItem } from '@/components/ui/Accordion'

type FaqEntry = { question: string; answer: string }

/**
 * Reusable FAQ section — Volume V Ch7. Multiple items may stay open;
 * questions are phrased the way visitors actually think them.
 */
export function FaqSection({
  items,
  label = 'Common Questions',
  title = "Answers before you have to ask",
  tone,
}: {
  items: readonly FaqEntry[]
  label?: string
  title?: string
  tone?: 'primary' | 'secondary'
}) {
  return (
    <Section tone={tone}>
      <Container width="reading">
        <SectionHeading label={label} title={title} />
        <Accordion>
          {items.map((item) => (
            <AccordionItem key={item.question} question={item.question}>
              {item.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  )
}
