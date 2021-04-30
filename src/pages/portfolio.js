/** @jsx h */
import { h } from 'preact'
import PortfolioCopy from '../../portfolio-copy.js'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'
import { ogImageUrl } from '../util/og-image.js'

export default function Portfolio() {
  const {
    siteTitle,
    siteDescription,
    siteUrl,
    siteTwitter,
    siteLanguage,
    siteLocale,
  } = SiteMetadata

  return (
    <div>
      <SEO
        title="Portfolio"
        titleTemplate={siteTitle}
        description={siteDescription || 'nothin’'}
        image={ogImageUrl(
          siteAuthorName,
          'scottspence.com',
          `Portfolio`
        )}
        pathname={`${siteUrl}/portfolio/`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <PortfolioCopy />
    </div>
  )
}
