import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'


const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://example-not-yet-live.com'
const OG_IMAGE = `${SITE_URL}/og-image.png`

export default function SEO({ title, description, schema }) {
  const { pathname } = useLocation()
  const fullTitle = `${title} | KTB Solar`
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="KTB Solar" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* Structured data (JSON-LD)  page-specific schema*/}
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  )
}
