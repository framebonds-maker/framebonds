/**
 * PLACEHOLDER portfolio data — the user will replace titles, summaries and
 * media with real projects after launch. Structure mirrors the future CMS
 * project model (Volume IX Ch2).
 *
 * `hue` drives the cinematic poster placeholder tint until real video
 * thumbnails exist.
 */
export type Project = {
  slug: string
  title: string
  industry: string
  year: string
  summary: string
  hue: 'amber' | 'steel' | 'sage' | 'terracotta' | 'plum' | 'slate'
}

export const projects: Project[] = [
  {
    slug: 'ethnix-by-raymond',
    title: 'Ethnix by Raymond',
    industry: 'Fashion & Retail',
    year: '2025',
    summary: 'A premium menswear campaign built on craftsmanship and restraint.',
    hue: 'amber',
  },
  {
    slug: 'skyline-residences',
    title: 'Skyline Residences',
    industry: 'Real Estate',
    year: '2025',
    summary: 'Lifestyle-led films for a residential launch that sold the feeling first.',
    hue: 'steel',
  },
  {
    slug: 'the-morning-grind',
    title: 'The Morning Grind',
    industry: 'Food & Beverage',
    year: '2025',
    summary: 'A café brand made unmistakable through texture, light and ritual.',
    hue: 'terracotta',
  },
  {
    slug: 'forge-athletics',
    title: 'Forge Athletics',
    industry: 'Fitness',
    year: '2024',
    summary: 'Monthly content systems that keep a growing gym impossible to ignore.',
    hue: 'slate',
  },
  {
    slug: 'aurelia-jewels',
    title: 'Aurelia Jewels',
    industry: 'Luxury Retail',
    year: '2024',
    summary: 'Generations of craft, photographed like it deserves to be remembered.',
    hue: 'plum',
  },
  {
    slug: 'banyan-and-oak',
    title: 'Banyan & Oak',
    industry: 'Hospitality',
    year: '2024',
    summary: 'A boutique stay told through atmosphere instead of amenities.',
    hue: 'sage',
  },
]
