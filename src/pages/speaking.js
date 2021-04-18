/** @jsx h */
import { h } from 'preact'
import SpeakingCopy from '../../speaking-copy.js'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'

export default function SpeakingPage() {
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
        title="Speaking"
        titleTemplate={siteTitle}
        description={siteDescription || 'nothin’'}
        image={`image`}
        pathname={`${siteUrl}/speaking/`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <SpeakingCopy />
    </div>
  )
}
