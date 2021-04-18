/** @jsx h */
import { h } from 'preact'
import PrivacyPolicyCopy from '../../privacy-policy-copy.js'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'

export default function PrivacyPolicy() {
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
        title="Privacy Policy"
        titleTemplate={siteUrl}
        titleTemplate={siteTitle}
        description={siteDescription || 'nothin’'}
        image={`image`}
        pathname={`${siteUrl}/privacy-policy/`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <PrivacyPolicyCopy />
    </div>
  )
}
