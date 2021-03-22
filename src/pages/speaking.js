/** @jsx h */
import { h } from 'preact'
import Speaking from '../../speaking.js'
import SEO from '../components/seo/index.js'
import { SiteConfig } from '../site-config.js'

export default function IndexPage() {
  const {
    siteTitle,
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
      <SEO title="Speaking" titleTemplate={siteTitle} />
      <Speaking />
    </div>
  )
}
