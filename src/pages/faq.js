/** @jsx h */
import { h } from 'preact'
import FAQ from '../../faq.js'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'

export default function IndexPage() {
  const {
    siteDescription,
    lastBuildDate,
    siteUrl,
    authorName,
    siteTwitter,
    siteLanguage,
    siteLocale,
  } = SiteMetadata

  return (
    <div>
      <SEO
        title="FAQ"
        titleTemplate={siteUrl}
        titleTemplate={`scottspence.com/faq`}
        description={siteDescription || 'nothin’'}
        image={`image`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <FAQ />
    </div>
  )
}
