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
  className?: string
}

export function ProjectCard({
  project,
  aspect = 'aspect-[16/10]',
  portraitAspect = 'aspect-[9/16]',
  landscapeAspect = 'aspect-[16/9]',
  className,
}: ProjectCardProps) {
  const resolvedAspect = project.media
    ? project.media.orientation === 'portrait'
      ? portraitAspect
      : landscapeAspect
    : aspect

  return (
    <motion.article variants={staggerItem} className={cn('group', className)}>
      <Link to={`/work/${project.slug}`} className="block focus-visible:outline-accent">
        {project.media ? (
          <VideoPreview
            src={project.media.previewSrc}
            poster={project.media.previewPoster}
            className={resolvedAspect}
          />
        ) : (
          <MediaPlaceholder hue={project.hue} className={resolvedAspect} />
        )}
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
      </Link>
    </motion.article>
  )
}
