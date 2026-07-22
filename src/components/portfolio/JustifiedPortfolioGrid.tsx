import { motion } from 'framer-motion'
import type { Project } from '@/constants/projects'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { staggerContainer } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Editorial grid — a real CSS grid, not multi-column masonry. Masonry fills
 * column-by-column, so two cards side by side can start at completely
 * different heights depending on what filled the column above them (that
 * read as "misaligned" — titles and metadata landed at different vertical
 * positions from one card to its neighbor). A grid keeps every row's cards
 * starting flush at the same top edge; each card still sizes to its own
 * footage ratio, so rows are free to vary in height row to row.
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
      className="grid grid-cols-1 items-start gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </motion.div>
  )
}
