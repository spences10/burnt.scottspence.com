/** @jsx h */
import { h } from 'preact'
import About from '../../about.js'
import MugFace from '../components/mugface.js'
import { Newsletter } from '../components/newsletter-form.js'
import SEO from '../components/seo/index.js'
import { SiteConfig } from '../site-config.js'

export default function IndexPage() {
  const {
    siteTitle,
    siteDescription,
    siteLastBuildDate,
    siteUrl,
    siteAuthorName,
    siteTwitter,
    siteLanguage,
    siteLocale,
  } = SiteConfig

  return (
    <div>
      <SEO title="Home" titleTemplate={siteTitle} />
      <h2 class="font-extrabold text-3xl mt-6">Hello World</h2>
      <Newsletter />
      <MugFace />
      <About />
    </div>
  )
}
