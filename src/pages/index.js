/** @jsx h */
import { h } from 'preact'
import About from '../../about.js'
import { LandingHero } from '../components/landing-hero.js'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'

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
  } = SiteMetadata

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
      <LandingHero />
      <About />
    </div>
  )
}
