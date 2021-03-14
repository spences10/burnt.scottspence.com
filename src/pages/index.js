/** @jsx h */
import { h } from 'preact'
import About from '../../about.js'
import MugFace from '../components/mugface.js'
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
      <SEO title="Home" titleTemplate={siteUrl} />
      <h1>Hello World</h1>
      <MugFace />
      <About />
    </div>
  )
}
