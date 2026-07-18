import type { ReactNode } from 'react'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Cinematic poster placeholder — stands in for real video/photo assets
 * until the user supplies them. Layered light, vignette and film grain
 * so empty media still feels like a frame from a graded film, never a
 * broken image slot.
 */
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")"

/** Desaturated cinematic tints — one per project until real thumbnails exist. */
const hues: Record<string, string> = {
  amber:
    'radial-gradient(120% 90% at 78% 18%, rgb(201 160 92 / 24%) 0%, transparent 55%), radial-gradient(90% 90% at 15% 88%, rgb(122 90 48 / 18%) 0%, transparent 50%)',
  steel:
    'radial-gradient(120% 90% at 75% 15%, rgb(111 140 170 / 20%) 0%, transparent 55%), radial-gradient(90% 90% at 12% 85%, rgb(60 80 105 / 18%) 0%, transparent 50%)',
  sage: 'radial-gradient(120% 90% at 72% 20%, rgb(126 150 118 / 20%) 0%, transparent 55%), radial-gradient(90% 90% at 18% 85%, rgb(70 92 66 / 16%) 0%, transparent 50%)',
  terracotta:
    'radial-gradient(120% 90% at 76% 16%, rgb(190 116 84 / 20%) 0%, transparent 55%), radial-gradient(90% 90% at 14% 88%, rgb(120 66 48 / 18%) 0%, transparent 50%)',
  plum: 'radial-gradient(120% 90% at 74% 18%, rgb(150 112 150 / 18%) 0%, transparent 55%), radial-gradient(90% 90% at 16% 86%, rgb(88 60 96 / 16%) 0%, transparent 50%)',
  slate:
    'radial-gradient(120% 90% at 78% 15%, rgb(140 148 160 / 16%) 0%, transparent 55%), radial-gradient(90% 90% at 15% 88%, rgb(74 80 92 / 16%) 0%, transparent 50%)',
}

type MediaPlaceholderProps = {
  hue?: keyof typeof hues
  /** Show the quiet play affordance (for video contexts). */
  play?: boolean
  /** Caption pinned bottom-left inside the frame. */
  caption?: ReactNode
  className?: string
}

export function MediaPlaceholder({ hue = 'amber', play, caption, className }: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        'group/media relative overflow-hidden rounded-[1rem] border border-edge bg-[#101114]',
        className,
      )}
    >
      {/* Tinted light */}
      <div
        aria-hidden
        className="absolute inset-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/media:scale-[1.03]"
        style={{ backgroundImage: hues[hue] }}
      />
      {/* Vignette */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to top, rgb(8 9 10 / 78%) 0%, transparent 42%), radial-gradient(120% 120% at 50% 40%, transparent 55%, rgb(8 9 10 / 55%) 100%)',
        }}
      />
      {/* Film grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.13] mix-blend-overlay"
        style={{ backgroundImage: NOISE }}
      />

      {play && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ink/25 bg-canvas/30 backdrop-blur-sm transition-all duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/media:scale-105 group-hover/media:border-ink/40 md:h-20 md:w-20">
            <Play className="ml-1 h-6 w-6 fill-ink text-ink" />
          </span>
        </div>
      )}

      {caption && (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
          {caption}
        </div>
      )}
    </div>
  )
}
