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
  /** Tailwind aspect class controls the frame shape per grid position. */
  aspect?: string
  className?: string
}

export function ProjectCard({ project, aspect = 'aspect-[16/10]', className }: ProjectCardProps) {
  return (
    <motion.article variants={staggerItem} className={cn('group', className)}>
      <Link to={`/work/${project.slug}`} className="block focus-visible:outline-accent">
        {project.media ? (
          <VideoPreview
            src={project.media.previewSrc}
            poster={project.media.previewPoster}
            className={aspect}
          />
        ) : (
          <MediaPlaceholder hue={project.hue} className={aspect} />
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
