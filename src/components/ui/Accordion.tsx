import { useId, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { duration, easing } from '@/constants/motion'

/**
 * FAQ accordion — Volume V Chapter 7.
 * Multiple items may stay open (visitors compare answers).
 * Smooth height reveal, keyboard accessible, quiet chrome.
 */
type AccordionItemProps = {
  question: string
  children: ReactNode
  defaultOpen?: boolean
}

export function AccordionItem({ question, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()
  const buttonId = useId()

  return (
    <div className="border-b border-divider">
      <button
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-[180ms] hover:text-accent-hover md:py-7"
      >
        <span className="font-body text-body-l font-medium text-ink transition-colors duration-[180ms] group-hover:text-ink">
          {question}
        </span>
        <Plus
          aria-hidden
          className={cn(
            'h-5 w-5 shrink-0 text-ink-muted transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
            open && 'rotate-45 text-accent',
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: duration.normal, ease: easing.standard }}
            className="overflow-hidden"
          >
            <div className="max-w-2xl pb-7 text-body text-ink-secondary">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Accordion({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('border-t border-divider', className)}>{children}</div>
}
