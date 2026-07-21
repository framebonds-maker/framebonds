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

function rowHeightFor(items: Project[], containerWidth: number) {
  const ratioSum = items.reduce((sum, item) => sum + projectRatio(item), 0)
  return (containerWidth - GAP * (items.length - 1)) / ratioSum
}

/** Greedy justified-row packing — the same technique a real photo editor
 * uses to mix portrait and landscape work in one row without cropping or
 * leaving uneven gaps: every row shares one computed height, and each
 * item's width is exactly height × its own ratio.
 *
 * A trailing row that doesn't have enough items to reach the ideal height
 * naturally would otherwise leave a dead gap at the end (e.g. one lone
 * landscape item capped short, half the row empty) — instead it gets
 * merged into the previous row and both share a recomputed height that
 * fills the container exactly. */
function layoutRows(items: Project[], containerWidth: number) {
  const rows: Project[][] = []
  let row: Project[] = []
  let ratioSum = 0

  for (const item of items) {
    const ratio = projectRatio(item)
    row.push(item)
    ratioSum += ratio
    const naturalWidth = IDEAL_ROW_HEIGHT * ratioSum + GAP * (row.length - 1)
    if (naturalWidth >= containerWidth) {
      rows.push(row)
      row = []
      ratioSum = 0
    }
  }

  if (row.length) {
    const naturalHeight = rowHeightFor(row, containerWidth)
    const lastFull = rows.pop()
    if (lastFull && naturalHeight > IDEAL_ROW_HEIGHT * 1.15) {
      // Trailing row is too sparse to stand alone — fold it into the
      // previous row instead of leaving dead space beside it.
      rows.push([...lastFull, ...row])
    } else {
      if (lastFull) rows.push(lastFull)
      rows.push(row)
    }
  }

  return rows.map((rowItems) => ({ items: rowItems, height: rowHeightFor(rowItems, containerWidth) }))
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
