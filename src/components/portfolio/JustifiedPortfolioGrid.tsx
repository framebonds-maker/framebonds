import { motion } from 'framer-motion'
import type { Project } from '@/constants/projects'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { staggerContainer } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Editorial masonry — CSS multi-column layout, the standard premium
 * portfolio pattern (Pinterest, Are.na, most agency sites). Each card keeps
 * its own footage at its exact ratio (no forced row height, no cropping);
 * columns naturally settle at different heights instead of being forced
 * into uniform rows or a horizontally-scrolling strip.
 *
 * Reveals on mount (`animate`), not `whileInView` — this grid's contents
 * change whenever a category filter is applied, and a `viewport={once:true}`
 * trigger never re-fires for cards that mount after the first reveal,
 * leaving them stuck at opacity 0 (this is exactly what caused filtered
 * categories to render as an empty column).
 */
export function JustifiedPortfolioGrid({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      key={projects.map((p) => p.slug).join('-')}
      variants={staggerContainer(stagger.medium)}
      initial="hidden"
      animate="visible"
      className="columns-1 gap-8 sm:columns-2 lg:columns-3"
    >
      {projects.map((project) => (
        <div key={project.slug} className="mb-8 break-inside-avoid">
          <ProjectCard project={project} />
        </div>
      ))}
    </motion.div>
  )
}
