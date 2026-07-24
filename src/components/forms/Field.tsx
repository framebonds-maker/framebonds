import { forwardRef, useId } from 'react'
import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Form field system — Volume V Chapter 4.
 * Labels always visible (never placeholder-only). Errors explain, never blame.
 */

const fieldBase = [
  'w-full rounded-[0.75rem] border bg-surface px-4 font-body text-body text-ink',
  'placeholder:text-ink-muted',
  'transition-colors duration-[180ms]',
  'border-edge hover:border-edge-strong',
  'focus:border-accent focus:outline-none',
  'disabled:opacity-50',
].join(' ')

type FieldWrapperProps = {
  label: string
  htmlFor: string
  optional?: boolean | string
  error?: string
  errorId: string
  children: ReactNode
}

function FieldWrapper({ label, htmlFor, optional, error, errorId, children }: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="font-body text-body-s font-semibold text-ink">
        {label}
        {optional && (
          <span className="ml-2 font-normal text-ink-muted">
            ({typeof optional === 'string' ? optional : 'Optional'})
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={errorId} role="alert" className="text-body-s text-error">
          {error}
        </p>
      )}
    </div>
  )
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  optional?: boolean | string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, optional, error, className, id, ...props }, ref) => {
    const autoId = useId()
    const fieldId = id ?? autoId
    const errorId = `${fieldId}-error`
    return (
      <FieldWrapper label={label} htmlFor={fieldId} optional={optional} error={error} errorId={errorId}>
        <input
          ref={ref}
          id={fieldId}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(fieldBase, 'h-13', error && 'border-error', className)}
          {...props}
        />
      </FieldWrapper>
    )
  },
)
Input.displayName = 'Input'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  optional?: boolean | string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, optional, error, className, id, rows = 5, ...props }, ref) => {
    const autoId = useId()
    const fieldId = id ?? autoId
    const errorId = `${fieldId}-error`
    return (
      <FieldWrapper label={label} htmlFor={fieldId} optional={optional} error={error} errorId={errorId}>
        <textarea
          ref={ref}
          id={fieldId}
          rows={rows}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(fieldBase, 'resize-y py-3.5', error && 'border-error', className)}
          {...props}
        />
      </FieldWrapper>
    )
  },
)
Textarea.displayName = 'Textarea'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  optional?: boolean | string
  error?: string
  children: ReactNode
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, optional, error, className, id, children, ...props }, ref) => {
    const autoId = useId()
    const fieldId = id ?? autoId
    const errorId = `${fieldId}-error`
    return (
      <FieldWrapper label={label} htmlFor={fieldId} optional={optional} error={error} errorId={errorId}>
        <select
          ref={ref}
          id={fieldId}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(fieldBase, 'h-13 appearance-none', error && 'border-error', className)}
          {...props}
        >
          {children}
        </select>
      </FieldWrapper>
    )
  },
)
Select.displayName = 'Select'
