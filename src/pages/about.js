/** @jsx h */
import { Fragment, h } from 'preact'
import AboutCopy from '../../about-copy.js'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'
import { ogImageUrl } from '../util/og-image.js'

export default function About() {
  const {
    siteTitle,
    siteAuthorName,
    siteDescription,
    siteUrl,
    siteTwitter,
    siteLanguage,
    siteLocale,
  } = SiteMetadata

  return (
    <Fragment>
      <SEO
        title="About Scott"
        titleTemplate={siteTitle}
        description={siteDescription || 'nothin’'}
        image={ogImageUrl(siteAuthorName, 'scottspence.com', `About`)}
        pathname={`${siteUrl}/about/`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <AboutCopy />
    </Fragment>
  )
}
