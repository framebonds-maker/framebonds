import { motion } from 'framer-motion'
import type { Project } from '@/constants/projects'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { staggerContainer } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/** Small per-card nudges to settle a specific masonry pairing — keyed by
 * slug rather than reworking the whole layout for one card. */
const NUDGE: Record<string, string> = {
  'ratnasar-aria-set': 'sm:mt-16',
}

/**
 * Editorial masonry — CSS multi-column layout, the standard premium
 * portfolio pattern (Pinterest, Are.na, most agency sites). Each card keeps
 * its own footage at its exact ratio (no forced row height, no cropping);
 * columns naturally settle at different heights instead of being forced
 * into uniform rows or a horizontally-scrolling strip.
 *
 * `large` switches to a different, dedicated layout — a side-by-side pair,
 * same technique as the homepage's FeaturedWork row (shared height, each
 * card's own native aspect ratio, no cropping) — used only when the Luxury
 * Retail tab is the active filter (see Portfolio.tsx). It never applies to
 * "All" or any other tab, so that view stays exactly as it was.
 *
 * Reveals on mount (`animate`), not `whileInView` — this grid's contents
 * change whenever a category filter is applied, and a `viewport={once:true}`
 * trigger never re-fires for cards that mount after the first reveal,
 * leaving them stuck at opacity 0 (this is exactly what caused filtered
 * categories to render as an empty column).
 */
export function JustifiedPortfolioGrid({ projects, large }: { projects: Project[]; large?: boolean }) {
  if (large) {
    return (
      <motion.div
        key={projects.map((p) => p.slug).join('-')}
        variants={staggerContainer(stagger.medium)}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-14 md:flex-row md:gap-8"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} rowHeight="md:h-[420px]" />
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      key={projects.map((p) => p.slug).join('-')}
      variants={staggerContainer(stagger.medium)}
      initial="hidden"
      animate="visible"
      className="columns-1 gap-8 sm:columns-2 lg:columns-3"
    >
      {projects.map((project) => (
        <div key={project.slug} className={`mb-8 break-inside-avoid ${NUDGE[project.slug] ?? ''}`}>
          <ProjectCard project={project} />
        </div>
      ))}
    </motion.div>
  )
}
