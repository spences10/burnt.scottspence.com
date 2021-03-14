/** @jsx h */
import { h } from 'preact'
import Speaking from '../../speaking.js'
import SEO from '../components/seo/index.js'
import { SiteConfig } from '../site-config.js'

export default function IndexPage() {
  const {
    description,
    lastBuildDate,
    siteUrl,
    authorName,
    twitterUsername,
    siteLanguage,
    siteLocale,
  } = SiteConfig

  return (
    <div>
      <SEO title="Speaking" titleTemplate={siteUrl} />
      <Speaking />
    </div>
  )
}
