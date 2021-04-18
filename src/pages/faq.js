/** @jsx h */
import { h } from 'preact'
import FAQCopy from '../../faq-copy.js'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'

export default function FAQ() {
  const {
    siteTitle,
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
        titleTemplate={siteTitle}
        description={siteDescription || 'nothin’'}
        image={`image`}
        pathname={`${siteUrl}/faq/`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <FAQCopy />
    </div>
  )
}
