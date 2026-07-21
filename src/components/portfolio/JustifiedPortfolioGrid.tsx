import { motion } from 'framer-motion'
import type { Project } from '@/constants/projects'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

const ROW_HEIGHT = 420

/**
 * A horizontal filmstrip on desktop — every card shares one height, width
 * comes from its own footage ratio, and the strip scrolls sideways within
 * its own bounds instead of stretching (and sometimes overflowing) the
 * page. Mobile stays a simple stacked column, full width, natural height.
 */
export function JustifiedPortfolioGrid({ projects }: { projects: Project[] }) {
  return (
    <>
      <motion.div
        variants={staggerContainer(stagger.medium)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="hidden gap-8 overflow-x-auto pb-4 md:flex [scrollbar-width:thin]"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} rowHeightPx={ROW_HEIGHT} />
        ))}
      </motion.div>

      <motion.div
        variants={staggerContainer(stagger.medium)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col gap-14 md:hidden"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} aspect="aspect-[4/3]" />
        ))}
      </motion.div>
    </>
  )
}
