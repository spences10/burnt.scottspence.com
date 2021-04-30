/** @jsx h */
import { h } from 'preact'
import SpeakingCopy from '../../speaking-copy.js'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'
import { ogImageUrl } from '../util/og-image.js'

export default function SpeakingPage() {
  const {
    siteTitle,
    siteAuthorName,
    siteDescription,
    siteUrl,
    siteTwitter,
    siteLanguage,
    siteLocale,
  } = SiteMetadata

  return (
    <div>
      <SEO
        title="Speaking"
        titleTemplate={siteTitle}
        description={siteDescription || 'nothin’'}
        image={ogImageUrl(
          siteAuthorName,
          'scottspence.com',
          `Speaking`
        )}
        pathname={`${siteUrl}/speaking/`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <SpeakingCopy />
    </div>
  )
}
