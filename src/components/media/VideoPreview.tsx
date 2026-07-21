import { useRef, useState, type ReactNode } from 'react'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Real video media — replaces MediaPlaceholder wherever a real clip exists.
 * Desktop: poster shows instantly; hover starts a muted loop ~250ms later
 * (Volume VI Ch5). Mobile: poster only, tap-to-play when `allowTap` is set.
 */
type VideoPreviewProps = {
  src: string
  poster: string
  /** Show the quiet play affordance over the poster. */
  play?: boolean
  /** Caption pinned bottom-left inside the frame. */
  caption?: ReactNode
  className?: string
  /** Let mobile taps toggle playback in place (case study heroes, not grid cards). */
  allowTap?: boolean
  /** Hero usage — plays immediately on mount instead of waiting for hover. */
  autoPlay?: boolean
}

export function VideoPreview({ src, poster, play, caption, className, allowTap, autoPlay }: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const [active, setActive] = useState(Boolean(autoPlay))

  function startPreview() {
    hoverTimer.current = setTimeout(() => {
      setActive(true)
      videoRef.current?.play().catch(() => {})
    }, 250)
  }

  function stopPreview() {
    clearTimeout(hoverTimer.current)
    setActive(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  function handleTap() {
    if (!allowTap) return
    if (active) {
      stopPreview()
    } else {
      setActive(true)
      videoRef.current?.play().catch(() => {})
    }
  }

  return (
    <div
      className={cn('group/media relative overflow-hidden rounded-[1rem] border border-edge bg-[#101114]', className)}
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
      onClick={handleTap}
    >
      <img
        src={poster}
        alt=""
        aria-hidden
        className={cn(
          'absolute inset-0 h-full w-full object-cover transition-opacity duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
          active ? 'opacity-0' : 'opacity-100',
        )}
      />
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        autoPlay={autoPlay}
        preload={autoPlay ? 'auto' : 'none'}
        className={cn(
          'absolute inset-0 h-full w-full scale-[1.02] object-cover transition-opacity duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
          active ? 'opacity-100' : 'opacity-0',
        )}
      />

      {/* Vignette for text legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to top, rgb(8 9 10 / 70%) 0%, transparent 42%), radial-gradient(120% 120% at 50% 40%, transparent 60%, rgb(8 9 10 / 40%) 100%)',
        }}
      />

      {play && !active && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ink/25 bg-canvas/30 backdrop-blur-sm transition-all duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/media:scale-105 group-hover/media:border-ink/40 md:h-20 md:w-20">
            <Play className="ml-1 h-6 w-6 fill-ink text-ink" />
          </span>
        </div>
      )}

      {caption && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
          {caption}
        </div>
      )}
    </div>
  )
}
