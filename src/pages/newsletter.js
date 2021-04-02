/** @jsx h */
import { h } from 'preact'
import { NewsLetterForm } from '../components/newsletter-form.js'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'

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
    <div>
      <SEO
        title={`Newsletter`}
        titleTemplate={siteTitle}
        description={siteDescription || 'nothin’'}
        image={`image`}
        pathname={`${siteUrl}/newsletter/`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <NewsLetterForm />
    </div>
  )
}
