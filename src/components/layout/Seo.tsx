import { Helmet } from 'react-helmet-async'
import { site } from '@/constants/site'

/**
 * Per-page metadata — Volume VIII Chapter 8.
 * Unique title + description on every page; OG tags derived automatically.
 */
export function Seo({ title, description }: { title: string; description: string }) {
  const fullTitle = `${title} | ${site.name}`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
