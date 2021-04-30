/** @jsx h */
import { Fragment, h } from 'preact'
import NewsletterCopy from '../../newsletter-copy.js'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'
import { ogImageUrl } from '../util/og-image.js'

export default function Newsletter() {
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
    <Fragment>
      <SEO
        title="Newsletter"
        titleTemplate={siteTitle}
        description={siteDescription || 'nothin’'}
        image={ogImageUrl(
          siteAuthorName,
          'scottspence.com',
          `Newsletter`
        )}
        pathname={`${siteUrl}/newsletter/`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <NewsletterCopy />
    </Fragment>
  )
}
