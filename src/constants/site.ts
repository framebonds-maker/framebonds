/**
 * Site-wide constants. Contact details are placeholders until the user
 * supplies real ones — swap here, updates everywhere.
 */
export const site = {
  name: 'FrameBonds',
  tagline: 'Premium visual production for brands and agencies that value craftsmanship.',
  city: 'Jaipur, India',
  email: 'framebonds@gmail.com',
  social: {
    instagram: 'https://instagram.com/framebonds',
    linkedin: 'https://linkedin.com/company/framebonds',
    youtube: 'https://youtube.com/@framebonds',
  },
} as const

export const navLinks = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Agency Partners', to: '/agency-partners' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const
