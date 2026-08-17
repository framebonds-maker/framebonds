import { useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Real video media — replaces MediaPlaceholder wherever a real clip exists.
 * Desktop: poster shows instantly; hover starts a muted loop ~250ms later
 * (Volume VI Ch5). Mobile: poster only — the play/pause icon is the only
 * thing that toggles playback; a tap anywhere else on the frame falls
 * through untouched, so a parent `<Link>` (the case study, the agency
 * page, whatever this preview represents) still navigates normally.
 */
type VideoPreviewProps = {
  src: string
  poster: string
  /** Show the play/pause affordance over the poster — the icon is the
   * only interactive part; it stops its own tap from bubbling, everything
   * else in the frame passes through to a wrapping `<Link>` if present. */
  play?: boolean
  /** Caption pinned bottom-left inside the frame. */
  caption?: ReactNode
  className?: string
  /** Hero usage — plays immediately on mount instead of waiting for hover. */
  autoPlay?: boolean
  /** Full-bleed usage — drops the rounded corners and border. */
  bare?: boolean
  /** 'contain' shows the whole frame letterboxed instead of cropping to
   * fill — for a clip whose orientation doesn't match the box it's placed
   * in and shouldn't be zoomed/cropped to force it. */
  fit?: 'cover' | 'contain'
  /** Shows a mute/unmute control — reserved for autoplaying hero footage
   * that actually carries sound. Starts muted; the visitor opts in. */
  soundToggle?: boolean
}

export function VideoPreview({
  src,
  poster,
  play,
  caption,
  className,
  autoPlay,
  bare,
  fit = 'cover',
  soundToggle,
}: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const [active, setActive] = useState(Boolean(autoPlay))
  const [muted, setMuted] = useState(true)
  // The poster stays up until the video actually has a frame decoded —
  // otherwise autoplay swaps to a black <video> element before its first
  // frame paints, showing a brief black flash instead of the poster.
  const [ready, setReady] = useState(false)
  const showVideo = active && ready

  function toggleSound(e: MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    setMuted((m) => !m)
  }

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

  // The icon button is the only thing that toggles playback. It stops its
  // own tap from bubbling so a wrapping <Link> doesn't also navigate; a
  // tap anywhere else on the frame is left completely alone.
  function togglePlay(e: MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    if (active) {
      // Pause in place (keeps position) rather than resetting to the
      // start — a real pause, not a stop, so a second tap resumes.
      clearTimeout(hoverTimer.current)
      setActive(false)
      videoRef.current?.pause()
    } else {
      setActive(true)
      videoRef.current?.play().catch(() => {})
    }
  }

  return (
    <div
      className={cn(
        'group/media relative overflow-hidden bg-[#101114]',
        bare ? 'rounded-none border-0' : 'rounded-[1rem] border border-edge',
        className,
      )}
      onMouseEnter={autoPlay || play ? undefined : startPreview}
      onMouseLeave={autoPlay || play ? undefined : stopPreview}
    >
      {/* The container aspect is chosen upstream to match the source footage
          exactly (see Project.media.orientation), so a plain cover fill
          never crops — the frame and the footage align perfectly. */}
      <img
        src={poster}
        alt=""
        aria-hidden
        className={cn(
          'absolute inset-0 h-full w-full transition-opacity duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
          fit === 'contain' ? 'object-contain' : 'object-cover',
          showVideo ? 'opacity-0' : 'opacity-100',
        )}
      />
      <video
        ref={videoRef}
        src={src}
        muted={!soundToggle || muted}
        loop
        playsInline
        autoPlay={autoPlay}
        preload={autoPlay ? 'auto' : 'metadata'}
        onLoadedData={() => setReady(true)}
        onCanPlay={() => setReady(true)}
        className={cn(
          'absolute inset-0 h-full w-full transition-opacity duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
          fit === 'contain' ? 'object-contain' : 'object-cover',
          showVideo ? 'opacity-100' : 'opacity-0',
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

      {play && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={showVideo ? 'Pause video' : 'Play video'}
            className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full border border-ink/25 bg-canvas/30 backdrop-blur-sm transition-all duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/media:scale-105 group-hover/media:border-ink/40 md:h-20 md:w-20"
          >
            {showVideo ? (
              <Pause className="h-6 w-6 fill-ink text-ink" />
            ) : (
              <Play className="ml-1 h-6 w-6 fill-ink text-ink" />
            )}
          </button>
        </div>
      )}

      {soundToggle && showVideo && (
        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          className="absolute bottom-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-canvas/40 text-ink/80 backdrop-blur-sm transition-colors duration-[180ms] hover:border-ink/40 hover:text-ink md:bottom-8 md:right-8"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      )}

      {caption && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
          {caption}
        </div>
      )}
    </div>
  )
}
