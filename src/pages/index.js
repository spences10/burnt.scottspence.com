/** @jsx h */
import { h } from 'preact'
import AboutCopy from '../../about-copy.js'
import { LandingHero } from '../components/landing-hero.js'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'

export default function IndexPage() {
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
        title="Welcome!"
        titleTemplate={siteTitle}
        description={siteDescription || 'nothin’'}
        image={`image`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <LandingHero />
      <AboutCopy />
    </div>
  )
}
