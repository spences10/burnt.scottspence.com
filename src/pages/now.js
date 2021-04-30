/** @jsx h */
import { Fragment, h } from 'preact'
import NowCopy from '../../now-copy.js'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'
import { ogImageUrl } from '../util/og-image.js'

export default function Now() {
  const {
    siteTitle,
    siteDescription,
    siteUrl,
    siteTwitter,
    siteLanguage,
    siteLocale,
  } = SiteMetadata

  return (
    <Fragment>
      <SEO
        title="What I'm doing now"
        titleTemplate={siteTitle}
        description={siteDescription || 'nothin’'}
        image={ogImageUrl(siteAuthorName, 'scottspence.com', `Now`)}
        pathname={`${siteUrl}/now/`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <NowCopy />
    </Fragment>
  )
}
