import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowRight, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Button system — Volume V Chapter 2.
 * Four-level hierarchy: primary / secondary / text / icon.
 * Primary is ivory-filled (quiet contrast beats loud gold on charcoal);
 * the accent gold appears only in hover tints, focus rings, and details.
 */
export const buttonStyles = cva(
  [
    'group/btn relative inline-flex items-center justify-center gap-2.5',
    'font-body font-semibold tracking-[-0.01em] whitespace-nowrap select-none',
    'transition-all duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
    'active:scale-[0.99] disabled:pointer-events-none disabled:opacity-45',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-ink text-canvas rounded-[0.75rem]',
          'hover:bg-white hover:shadow-medium hover:-translate-y-px',
        ],
        secondary: [
          'bg-transparent text-ink rounded-[0.75rem]',
          'border border-edge-strong',
          'hover:border-ink-secondary hover:bg-surface',
        ],
        text: [
          'bg-transparent text-ink rounded-none px-0',
          'hover:text-accent-hover',
        ],
        icon: [
          'bg-transparent text-ink rounded-full',
          'border border-edge',
          'hover:border-edge-strong hover:bg-surface',
        ],
      },
      size: {
        sm: 'h-10 px-5 text-body-s',
        md: 'h-12 px-6 text-body-s',
        lg: 'h-14 px-8 text-body',
      },
    },
    compoundVariants: [
      { variant: 'text', size: 'sm', class: 'h-auto px-0' },
      { variant: 'text', size: 'md', class: 'h-auto px-0' },
      { variant: 'text', size: 'lg', class: 'h-auto px-0' },
      { variant: 'icon', size: 'sm', class: 'h-10 w-10 px-0' },
      { variant: 'icon', size: 'md', class: 'h-11 w-11 px-0' },
      { variant: 'icon', size: 'lg', class: 'h-12 w-12 px-0' },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type ButtonBaseProps = VariantProps<typeof buttonStyles> & {
  /** Trailing arrow that nudges right on hover — navigation affordance. */
  withArrow?: boolean
  loading?: boolean
  className?: string
  children?: ReactNode
}

/** Animated arrow used by both Button and ButtonLink. */
function TrailingArrow() {
  return (
    <ArrowRight
      aria-hidden
      className="h-4 w-4 transition-transform duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1"
    />
  )
}

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, withArrow, loading, className, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonStyles({ variant, size }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 aria-hidden className="h-4 w-4 animate-spin" />}
      {children}
      {withArrow && !loading && <TrailingArrow />}
    </button>
  ),
)
Button.displayName = 'Button'

type ButtonLinkProps = ButtonBaseProps & {
  to: string
  external?: boolean
}

/** Router-aware link with identical button styling. */
export function ButtonLink({
  to,
  external,
  variant,
  size,
  withArrow,
  className,
  children,
}: ButtonLinkProps) {
  const classes = cn(buttonStyles({ variant, size }), className)
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {withArrow && <TrailingArrow />}
      </a>
    )
  }
  return (
    <Link to={to} className={classes}>
      {children}
      {withArrow && <TrailingArrow />}
    </Link>
  )
}
