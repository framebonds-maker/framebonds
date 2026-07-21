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
  category: 'Retail' | 'Automotive' | 'Food & Beverage' | 'Fitness' | 'Luxury Retail' | 'Hospitality' | 'White-Label'
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
  /** Real footage, where it exists — falls back to the cinematic placeholder otherwise. */
  media?: {
    heroSrc: string
    heroPoster: string
    previewSrc: string
    previewPoster: string
    gallery?: { src: string; poster: string }[]
  }
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
    media: {
      heroSrc: '/videos/raymond-full.mp4',
      heroPoster: '/videos/raymond-poster.jpg',
      previewSrc: '/videos/raymond-preview.mp4',
      previewPoster: '/videos/raymond-poster.jpg',
      gallery: [{ src: '/videos/raymond-gallery.mp4', poster: '/videos/raymond-poster.jpg' }],
    },
  },
  {
    slug: 'velocity-auto',
    title: 'Velocity Auto',
    industry: 'Automotive',
    category: 'Automotive',
    year: '2025',
    summary: 'A feature film built around detail, motion and the craft under the hood.',
    hue: 'steel',
    featured: true,
    client: 'Velocity Auto',
    services: ['Brand Film', 'Social Content'],
    timeline: '1-week production, 7-day delivery',
    deliverables: ['Feature Film', 'Vertical Reels', 'Social Cutdowns'],
    challenge:
      'A dealership needed content that moved past spec sheets and showroom lighting — something that made the craftsmanship of each vehicle actually felt.',
    approach:
      'Movement carries the story here — tracking shots and detail passes paced to let each line and surface register, rather than a static walk-around.',
    production:
      'A single day combining moving-vehicle sequences with static detail and lighting setups on location.',
    results: ['Delivered a full vertical and horizontal content set from a single production day'],
    media: {
      heroSrc: '/videos/automotive-full.mp4',
      heroPoster: '/videos/automotive-poster.jpg',
      previewSrc: '/videos/automotive-preview.mp4',
      previewPoster: '/videos/automotive-poster.jpg',
    },
  },
  {
    slug: 'forge-athletics',
    title: 'Forge Athletics',
    industry: 'Fitness',
    category: 'Fitness',
    year: '2024',
    summary: 'Monthly content systems that keep a growing gym impossible to ignore.',
    hue: 'slate',
    featured: true,
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
    media: {
      heroSrc: '/videos/forge-full.mp4',
      heroPoster: '/videos/forge-poster.jpg',
      previewSrc: '/videos/forge-preview.mp4',
      previewPoster: '/videos/forge-poster.jpg',
    },
  },
  {
    slug: 'peak-form-coaching',
    title: 'Peak Form Coaching',
    industry: 'Fitness',
    category: 'Fitness',
    year: '2025',
    summary: 'Personal-coaching content built around real sessions, not staged testimonials.',
    hue: 'slate',
    client: 'Peak Form Coaching',
    services: ['Monthly Content Package', 'Social Content'],
    timeline: 'Ongoing monthly partnership',
    deliverables: ['Monthly Reels', 'Session Highlight Films'],
    challenge:
      'An independent coach needed content that built trust in their method, without the over-produced feel that makes fitness content forgettable.',
    approach:
      'We filmed real coaching sessions as they happened — cueing, form corrections, genuine effort — rather than reenacting them for the camera.',
    production: 'Half-day monthly shoots embedded within live coaching sessions.',
    results: ['Ongoing monthly content pipeline supporting client acquisition'],
    media: {
      heroSrc: '/videos/coach-full.mp4',
      heroPoster: '/videos/coach-poster.jpg',
      previewSrc: '/videos/coach-preview.mp4',
      previewPoster: '/videos/coach-poster.jpg',
    },
  },
  {
    slug: 'the-morning-grind',
    title: 'The Morning Grind',
    industry: 'Food & Beverage',
    category: 'Food & Beverage',
    year: '2025',
    summary: 'A café brand made unmistakable through texture, light and ritual.',
    hue: 'terracotta',
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
