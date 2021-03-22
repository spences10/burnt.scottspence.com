/** @jsx h */
import { h } from 'preact'
import FAQ from '../../faq.js'
import SEO from '../components/seo/index.js'
import { SiteConfig } from '../site-config.js'

export default function IndexPage() {
  const {
    description,
    lastBuildDate,
    siteUrl,
    authorName,
    siteTwitter,
    siteLanguage,
    siteLocale,
  } = SiteConfig

  return (
    <div>
      <SEO title="FAQ" titleTemplate={siteUrl} />
      <FAQ />
    </div>
  )
}
