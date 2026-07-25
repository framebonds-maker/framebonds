import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/constants/projects'
import { MediaPlaceholder } from '@/components/media/MediaPlaceholder'
import { VideoPreview } from '@/components/media/VideoPreview'
import { staggerItem } from '@/animations/variants'
import { cn } from '@/lib/utils'

/**
 * Portfolio card — the most important reusable component (Volume V Ch3).
 * The media dominates; text stays minimal: title, industry, nothing else.
 */
type ProjectCardProps = {
  project: Project
  /** Aspect box used only when there's no real footage (cinematic placeholder). */
  aspect?: string
  /** Aspect box for real portrait footage — defaults to the exact 9:16 source ratio. */
  portraitAspect?: string
  /** Aspect box for real landscape footage — defaults to the exact 16:9 source ratio. */
  landscapeAspect?: string
  /**
   * Justified-row mode — every card in the row shares this height (a
   * Tailwind height class, e.g. `"h-[300px] md:h-[440px]"`); width is
   * derived from each card's own footage ratio (`aspect-ratio` CSS), so
   * mixed portrait/landscape footage sits flush, top and bottom, with no
   * cropping and no uneven gaps. Cards without real footage grow to fill
   * whatever width is left in the row.
   */
  rowHeight?: string
  /** Same idea as `rowHeight`, but a computed pixel value (for dynamic
   * justified-row layouts) rather than a static Tailwind class. Assumes the
   * caller has already decided desktop-row layout is active. */
  rowHeightPx?: number
  /** 'contain' letterboxes instead of cropping — for a clip whose real
   * orientation doesn't match the box it's being placed in here. */
  mediaFit?: 'cover' | 'contain'
  className?: string
}

export function ProjectCard({
  project,
  aspect = 'aspect-[16/10]',
  portraitAspect = 'aspect-[9/16]',
  landscapeAspect = 'aspect-[16/9]',
  rowHeight,
  rowHeightPx,
  mediaFit,
  className,
}: ProjectCardProps) {
  if (rowHeightPx) {
    const ratio = project.media ? (project.media.orientation === 'portrait' ? 9 / 16 : 16 / 9) : 4 / 3
    return (
      <motion.article variants={staggerItem} whileTap={{ scale: 0.98 }} className={cn('group flex flex-col shrink-0', className)}>
        <Link to={`/work/${project.slug}`} className="block focus-visible:outline-accent">
          <div style={{ height: rowHeightPx, aspectRatio: ratio }} className="relative">
            {project.media ? (
              <VideoPreview
                src={project.media.heroSrc}
                poster={project.media.heroPoster}
                soundToggle
                className="h-full w-full"
              />
            ) : (
              <MediaPlaceholder hue={project.hue} className="h-full w-full" />
            )}
          </div>
          <ProjectCardCaption project={project} />
        </Link>
      </motion.article>
    )
  }

  if (rowHeight) {
    // Real footage keeps its exact ratio; placeholders default to a
    // reasonable box on mobile (stacked, full-width) and simply grow to
    // fill leftover row width on desktop — `rowHeight` should only carry
    // md+ height classes (e.g. "md:h-[420px]") so mobile stays full-width.
    const ratio = project.media ? (project.media.orientation === 'portrait' ? 9 / 16 : 16 / 9) : 4 / 3
    return (
      <motion.article
        variants={staggerItem}
        whileTap={{ scale: 0.98 }}
        className={cn('group flex flex-col', project.media ? 'md:shrink-0' : 'md:flex-1 md:basis-0', className)}
      >
        <Link to={`/work/${project.slug}`} className="block focus-visible:outline-accent">
          <div style={{ aspectRatio: ratio }} className={cn('relative w-full md:w-auto', rowHeight)}>
            {project.media ? (
              <VideoPreview
                src={project.media.heroSrc}
                poster={project.media.heroPoster}
                soundToggle
                className="h-full w-full"
              />
            ) : (
              <MediaPlaceholder hue={project.hue} className="h-full w-full" />
            )}
          </div>
          <ProjectCardCaption project={project} />
        </Link>
      </motion.article>
    )
  }

  const resolvedAspect = project.media
    ? project.media.orientation === 'portrait'
      ? portraitAspect
      : landscapeAspect
    : aspect

  return (
    <motion.article variants={staggerItem} whileTap={{ scale: 0.98 }} className={cn('group', className)}>
      <Link to={`/work/${project.slug}`} className="block focus-visible:outline-accent">
        {project.media ? (
          <VideoPreview
            src={project.media.heroSrc}
            poster={project.media.heroPoster}
            soundToggle
            className={resolvedAspect}
            fit={mediaFit}
          />
        ) : (
          <MediaPlaceholder hue={project.hue} className={resolvedAspect} />
        )}
        <ProjectCardCaption project={project} />
      </Link>
    </motion.article>
  )
}

function ProjectCardCaption({ project }: { project: Project }) {
  return (
    <div className="mt-5 flex items-start justify-between gap-4">
      <div>
        <h3 className="font-display text-heading-m font-medium text-ink transition-colors duration-[180ms] group-hover:text-accent-hover">
          {project.title}
        </h3>
        <p className="mt-1.5 text-caption text-ink-muted">
          {project.industry} · {project.year}
        </p>
      </div>
      <span
        aria-hidden
        className="mt-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-edge text-ink-secondary opacity-0 transition-all duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </div>
  )
}
