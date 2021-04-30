/** @jsx h */
import { h } from 'preact'
import PrivacyPolicyCopy from '../../privacy-policy-copy.js'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'
import { ogImageUrl } from '../util/og-image.js'

export default function PrivacyPolicy() {
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
    <div>
      <SEO
        title="Privacy Policy"
        titleTemplate={siteUrl}
        titleTemplate={siteTitle}
        description={siteDescription || 'nothin’'}
        image={ogImageUrl(
          siteAuthorName,
          'scottspence.com',
          `Privacy Policy`
        )}
        pathname={`${siteUrl}/privacy-policy/`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <PrivacyPolicyCopy />
    </div>
  )
}
