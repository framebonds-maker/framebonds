import { motion } from 'framer-motion'
import type { Project } from '@/constants/projects'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { useContainerWidth } from '@/hooks/useContainerWidth'
import { staggerContainer, viewportOnce } from '@/animations/variants'
import { stagger } from '@/constants/motion'

const GAP = 32
const IDEAL_ROW_HEIGHT = 420
const MOBILE_BREAKPOINT = 768

function projectRatio(project: Project) {
  if (!project.media) return 4 / 3
  return project.media.orientation === 'portrait' ? 9 / 16 : 16 / 9
}

/** Greedy justified-row packing — the same technique a real photo editor
 * uses to mix portrait and landscape work in one row without cropping or
 * leaving uneven gaps: every row shares one computed height, and each
 * item's width is exactly height × its own ratio. */
function layoutRows(items: Project[], containerWidth: number) {
  const rows: { items: Project[]; height: number }[] = []
  let row: Project[] = []
  let ratioSum = 0

  for (const item of items) {
    const ratio = projectRatio(item)
    row.push(item)
    ratioSum += ratio
    const naturalWidth = IDEAL_ROW_HEIGHT * ratioSum + GAP * (row.length - 1)
    if (naturalWidth >= containerWidth) {
      const height = (containerWidth - GAP * (row.length - 1)) / ratioSum
      rows.push({ items: row, height })
      row = []
      ratioSum = 0
    }
  }
  if (row.length) {
    const height = Math.min(IDEAL_ROW_HEIGHT, (containerWidth - GAP * (row.length - 1)) / ratioSum)
    rows.push({ items: row, height })
  }
  return rows
}

export function JustifiedPortfolioGrid({ projects }: { projects: Project[] }) {
  const [ref, width] = useContainerWidth<HTMLDivElement>()
  const isDesktop = width >= MOBILE_BREAKPOINT
  const rows = isDesktop ? layoutRows(projects, width) : []

  return (
    <div ref={ref}>
      {width === 0 ? null : isDesktop ? (
        <div className="flex flex-col gap-8">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              variants={staggerContainer(stagger.medium)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex gap-8"
            >
              {row.items.map((project) => (
                <ProjectCard key={project.slug} project={project} rowHeightPx={row.height} />
              ))}
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          variants={staggerContainer(stagger.medium)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-14"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} aspect="aspect-[4/3]" />
          ))}
        </motion.div>
      )}
    </div>
  )
}
