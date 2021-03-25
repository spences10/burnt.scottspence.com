/** @jsx h */
import { h } from 'preact'
import About from '../../about.js'
import MugFace from '../components/mugface.js'
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
      <SEO
        title={siteTitle}
        titleTemplate={`scottspence.com`}
        description={siteDescription || 'nothin’'}
        image={`image`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <h2 class="font-extrabold text-3xl mt-6">Hello World</h2>
      <MugFace />
      <About />
    </div>
  )
}
