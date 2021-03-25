/** @jsx h */
import { h } from 'preact'
import { NewsletterForm } from '../components/newsletter-form.js'
import SEO from '../components/seo/index.js'
import { SiteConfig } from '../site-config.js'

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
  } = SiteConfig

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
      <NewsletterForm />
    </div>
  )
}
