/** @jsx h */
import { h } from 'preact'
import UsesCopy from '../../uses-copy.js'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'

export default function Uses() {
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
        title="Uses"
        titleTemplate={siteTitle}
        description={siteDescription || 'nothin’'}
        image={`image`}
        pathname={`${siteUrl}/uses/`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <UsesCopy />
    </div>
  )
}
