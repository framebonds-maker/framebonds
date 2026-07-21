import { motion } from 'framer-motion'
import type { Project } from '@/constants/projects'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

/**
 * Editorial masonry — CSS multi-column layout, the standard premium
 * portfolio pattern (Pinterest, Are.na, most agency sites). Each card keeps
 * its own footage at its exact ratio (no forced row height, no cropping);
 * columns naturally settle at different heights instead of being forced
 * into uniform rows or a horizontally-scrolling strip.
 */
export function JustifiedPortfolioGrid({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      variants={staggerContainer(stagger.medium)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
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
