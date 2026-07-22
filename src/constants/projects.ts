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
  category: 'Retail' | 'Automotive' | 'Fitness' | 'Luxury Retail' | 'White-Label' | 'Studio'
  /** Lets a piece also surface under another filter tab without duplicating
   * the whole project entry (e.g. a Studio piece that's also relevant work
   * for the Automotive or Fitness filter). */
  extraCategories?: Project['category'][]
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
    /** Drives which aspect box the frame renders in — must match the source so object-cover never crops. */
    orientation: 'portrait' | 'landscape'
    gallery?: { src: string; poster: string; orientation: 'portrait' | 'landscape' }[]
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
      orientation: 'portrait',
    },
  },
  {
    slug: 'ethnix-campaign-cut',
    title: 'Ethnix by Raymond — Campaign Cut',
    industry: 'Fashion & Retail',
    category: 'Retail',
    year: '2025',
    summary: 'A second cut from the same campaign, built for feed-first viewing.',
    hue: 'amber',
    client: 'Ethnix by Raymond',
    services: ['Social Cutdowns'],
    timeline: 'Delivered alongside the main campaign film',
    deliverables: ['Vertical Social Cutdown'],
    challenge:
      'The main campaign film needed a shorter, feed-native companion piece that still felt like part of the same story.',
    approach:
      'Re-cut from the same footage library with a faster pace, built for a viewer scrolling rather than sitting down to watch.',
    production: 'Edited from the same two-day shoot as the primary campaign film.',
    results: ['Delivered as a companion piece to the main campaign film'],
    media: {
      heroSrc: '/videos/raymond-gallery.mp4',
      heroPoster: '/videos/raymond-gallery-poster.jpg',
      previewSrc: '/videos/raymond-gallery-preview.mp4',
      previewPoster: '/videos/raymond-gallery-poster.jpg',
      orientation: 'portrait',
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
      orientation: 'landscape',
      gallery: [{ src: '/videos/bts.mp4', poster: '/videos/bts-poster.jpg', orientation: 'portrait' }],
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
      orientation: 'portrait',
      gallery: [{ src: '/videos/bts.mp4', poster: '/videos/bts-poster.jpg', orientation: 'portrait' }],
    },
  },
  {
    slug: 'coach-manish',
    title: 'Coach Manish',
    industry: 'Fitness',
    category: 'Fitness',
    year: '2025',
    summary: 'Personal-coaching content built around real sessions, not staged testimonials.',
    hue: 'slate',
    client: 'Mahakaya Gym',
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
      orientation: 'portrait',
      gallery: [
        { src: '/videos/studio-session-full.mp4', poster: '/videos/studio-session-poster.jpg', orientation: 'portrait' },
      ],
    },
  },
  {
    slug: 'ratnasar-aria-set',
    title: 'The Aria Set',
    industry: 'Luxury Retail',
    category: 'Luxury Retail',
    year: '2025',
    summary: 'A heritage set filmed to let craftsmanship carry the frame.',
    hue: 'plum',
    featured: true,
    client: 'Ratnasar Jewels',
    services: ['Brand Film', 'Social Content'],
    timeline: '1-week production',
    deliverables: ['Brand Film', 'Vertical Reels', 'Social Cutdowns'],
    challenge:
      'A heritage jewelry house needed this set shown with the same craftsmanship the pieces themselves were made with — not standard product-photography lighting.',
    approach:
      'Every piece was filmed in motion under controlled directional light, giving stones and metalwork room to catch and hold the light rather than sitting flat.',
    production: 'Studio production built around controlled lighting and slow, deliberate camera movement.',
    results: ['Delivered as a brand film and a set of vertical social cutdowns'],
    media: {
      heroSrc: '/videos/ratnasar-aria-full.mp4',
      heroPoster: '/videos/ratnasar-aria-poster.jpg',
      previewSrc: '/videos/ratnasar-aria-preview.mp4',
      previewPoster: '/videos/ratnasar-aria-poster.jpg',
      orientation: 'landscape',
    },
  },
  {
    slug: 'ratnasar-green-goddess-set',
    title: 'The Green Goddess Set',
    industry: 'Luxury Retail',
    category: 'Luxury Retail',
    year: '2025',
    summary: 'A second heritage set from the same house, given its own film.',
    hue: 'plum',
    client: 'Ratnasar Jewels',
    services: ['Brand Film', 'Social Content'],
    timeline: '1-week production',
    deliverables: ['Brand Film', 'Vertical Reels'],
    challenge:
      'Each set in the collection needed to feel distinct on camera, not like a repeat of the last — even shot in the same studio, back to back.',
    approach:
      'A different color story and pace from the Aria Set, so the two sets read as two considered films rather than one shoot split in half.',
    production: 'Studio production built around controlled lighting and slow, deliberate camera movement.',
    results: ['Delivered as a brand film and a set of vertical social cutdowns'],
    media: {
      heroSrc: '/videos/ratnasar-goddess-full.mp4',
      heroPoster: '/videos/ratnasar-goddess-poster.jpg',
      previewSrc: '/videos/ratnasar-goddess-preview.mp4',
      previewPoster: '/videos/ratnasar-goddess-poster.jpg',
      orientation: 'portrait',
    },
  },
  {
    slug: 'on-set',
    title: 'On Set',
    industry: 'Production',
    category: 'Studio',
    extraCategories: ['Automotive'],
    year: '2025',
    summary: 'A quiet look at the part of the process clients never see.',
    hue: 'slate',
    client: 'FrameBonds',
    services: ['Production Diary'],
    timeline: 'Ongoing',
    deliverables: ['Behind-the-Scenes Reel'],
    challenge:
      'Most of what a client sees is the finished film — rarely the planning, rigging and small adjustments that get it there.',
    approach:
      'Turning the camera on the process itself, on location, without staging anything specifically for it.',
    production: 'Documented during a regular production day, alongside the primary shoot.',
    results: [],
    media: {
      heroSrc: '/videos/bts.mp4',
      heroPoster: '/videos/bts-poster.jpg',
      previewSrc: '/videos/bts-preview.mp4',
      previewPoster: '/videos/bts-poster.jpg',
      orientation: 'portrait',
    },
  },
  {
    slug: 'studio-session',
    title: 'Studio Session',
    industry: 'Production',
    category: 'Studio',
    extraCategories: ['Fitness'],
    year: '2025',
    summary: 'A study in texture and light — practice with what was already in the room.',
    hue: 'slate',
    client: 'FrameBonds',
    services: ['Studio Practice'],
    timeline: 'Ongoing',
    deliverables: ['Detail Reel'],
    challenge: 'No client brief — just an eye for detail and equipment already on hand.',
    approach: 'Close, deliberate framing on texture, form and light rather than a staged subject.',
    production: 'Shot between client sessions in the same space.',
    results: [],
    media: {
      heroSrc: '/videos/studio-session-full.mp4',
      heroPoster: '/videos/studio-session-poster.jpg',
      previewSrc: '/videos/studio-session-preview.mp4',
      previewPoster: '/videos/studio-session-poster.jpg',
      orientation: 'portrait',
    },
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
