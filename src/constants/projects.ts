/**
 * PLACEHOLDER portfolio data — the user will replace titles, summaries and
 * media with real projects after launch. Structure mirrors the future CMS
 * project model (Volume IX Ch2).
 *
 * `hue` drives the cinematic poster placeholder tint until real video
 * thumbnails exist. `quote` is intentionally omitted everywhere — Volume
 * VII forbids fabricated testimonials, so the case study template simply
 * hides that section until a real one exists.
 */
export type Project = {
  slug: string
  title: string
  industry: string
  category: 'Retail' | 'Real Estate' | 'Food & Beverage' | 'Fitness' | 'Luxury Retail' | 'Hospitality' | 'White-Label'
  year: string
  summary: string
  hue: 'amber' | 'steel' | 'sage' | 'terracotta' | 'plum' | 'slate'
  featured?: boolean
  client: string
  services: string[]
  timeline: string
  deliverables: string[]
  challenge: string
  approach: string
  production: string
  results: string[]
  /** Present only for real, confidentiality-cleared white-label work. */
  confidential?: boolean
}

export const projects: Project[] = [
  {
    slug: 'ethnix-by-raymond',
    title: 'Ethnix by Raymond',
    industry: 'Fashion & Retail',
    category: 'Retail',
    year: '2025',
    summary: 'A premium menswear campaign built on craftsmanship and restraint.',
    hue: 'amber',
    featured: true,
    client: 'Ethnix by Raymond',
    services: ['Brand Film', 'Product Photography', 'Social Content'],
    timeline: '3-week production, 7-day delivery',
    deliverables: ['Commercial Film', 'Vertical Reels', 'Product Photography', 'Social Cutdowns'],
    challenge:
      'A heritage menswear label needed a campaign that felt as considered as the tailoring itself — without leaning on the clichés the category usually reaches for.',
    approach:
      'We slowed everything down. Fewer cuts, longer holds, natural light wherever possible — letting fabric and craftsmanship carry the frame instead of movement.',
    production:
      'Two days on location with a small crew, built around available light and a shot list designed to protect the wardrobe department\'s time.',
    results: [
      'Campaign launched across the brand\'s flagship stores and digital channels',
      'Delivered a full content library from a single two-day shoot',
    ],
  },
  {
    slug: 'skyline-residences',
    title: 'Skyline Residences',
    industry: 'Real Estate',
    category: 'Real Estate',
    year: '2025',
    summary: 'Lifestyle-led films for a residential launch that sold the feeling first.',
    hue: 'steel',
    featured: true,
    client: 'Skyline Residences',
    services: ['Brand Film', 'Drone Cinematography', 'Social Content'],
    timeline: '2-week production, 7-day delivery',
    deliverables: ['Launch Film', 'Drone Sequences', 'Vertical Reels', 'Show-Unit Walkthrough'],
    challenge:
      'A residential launch needed to communicate lifestyle and scale simultaneously, for buyers comparing dozens of near-identical developments.',
    approach:
      'We treated the show unit like a home already lived in — natural movement, morning light, a family present but never posed.',
    production:
      'A full-day shoot combining drone establishing sequences with an intimate, handheld interior sequence.',
    results: [
      'Became the primary asset across the developer\'s launch campaign',
      'Reused across print, digital and on-site sales presentations',
    ],
  },
  {
    slug: 'the-morning-grind',
    title: 'The Morning Grind',
    industry: 'Food & Beverage',
    category: 'Food & Beverage',
    year: '2025',
    summary: 'A café brand made unmistakable through texture, light and ritual.',
    hue: 'terracotta',
    featured: true,
    client: 'The Morning Grind',
    services: ['Monthly Content Package', 'Photography'],
    timeline: 'Ongoing monthly partnership',
    deliverables: ['Monthly Reels', 'Product Photography', 'Seasonal Menu Content'],
    challenge:
      'An independent café needed a steady stream of premium content without the cost or complexity of a full-time production hire.',
    approach:
      'One planned shoot day per month, structured around seasonal menu changes, delivers a full month of content in a single session.',
    production:
      'Early-morning shoots to catch natural window light before the café opens, minimizing disruption to service.',
    results: [
      'Twelve consecutive months of on-time content delivery',
      'Content consistently used across the café\'s own social channels',
    ],
  },
  {
    slug: 'forge-athletics',
    title: 'Forge Athletics',
    industry: 'Fitness',
    category: 'Fitness',
    year: '2024',
    summary: 'Monthly content systems that keep a growing gym impossible to ignore.',
    hue: 'slate',
    client: 'Forge Athletics',
    services: ['Monthly Content Package', 'Brand Film'],
    timeline: 'Ongoing monthly partnership',
    deliverables: ['Monthly Reels', 'Member Testimonial Films', 'Class Highlight Reels'],
    challenge:
      'A fast-growing gym needed content that captured genuine energy without feeling like a stock fitness ad.',
    approach:
      'Filming real classes in progress rather than staged sessions, prioritizing authentic effort over choreographed movement.',
    production: 'Half-day monthly shoots embedded within live class schedules.',
    results: ['Consistent monthly content pipeline maintained for over a year'],
  },
  {
    slug: 'aurelia-jewels',
    title: 'Aurelia Jewels',
    industry: 'Luxury Retail',
    category: 'Luxury Retail',
    year: '2024',
    summary: 'Generations of craft, photographed like it deserves to be remembered.',
    hue: 'plum',
    client: 'Aurelia Jewels',
    services: ['Product Photography', 'Brand Film'],
    timeline: '1-week production',
    deliverables: ['Macro Product Photography', 'Brand Film', 'Social Content'],
    challenge:
      'A jewelry house needed to show craftsmanship at a level of detail that most retail photography never attempts.',
    approach: 'Macro-focused lighting setups designed to reveal texture, facet and material honestly.',
    production: 'Studio production across three days, built around controlled directional lighting.',
    results: ['Full product catalog refreshed with consistent visual language'],
  },
  {
    slug: 'banyan-and-oak',
    title: 'Banyan & Oak',
    industry: 'Hospitality',
    category: 'Hospitality',
    year: '2024',
    summary: 'A boutique stay told through atmosphere instead of amenities.',
    hue: 'sage',
    client: 'Banyan & Oak',
    services: ['Brand Film', 'Photography'],
    timeline: '4-day production',
    deliverables: ['Brand Film', 'Room & Property Photography', 'Social Content'],
    challenge:
      'A boutique property competing against larger hotel chains needed to sell atmosphere, not amenities.',
    approach: 'Slow, observational filming — the property at rest, in the hours guests actually experience it.',
    production: 'Four days on-site across sunrise and golden-hour sessions.',
    results: ['Direct booking inquiries attributed to the campaign\'s launch week'],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function getRelatedProjects(current: Project, count = 3) {
  return projects
    .filter((p) => p.slug !== current.slug)
    .sort((a, b) => (a.category === current.category ? -1 : 0) - (b.category === current.category ? -1 : 0))
    .slice(0, count)
}
