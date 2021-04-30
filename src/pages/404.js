/** @jsx h */
import { Fragment, h } from 'preact'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'
import { ogImageUrl } from '../util/og-image.js'

export default function Page404() {
  const { siteTitle, siteAuthorName } = SiteMetadata

  return (
    <Fragment>
      <SEO
        title="404"
        titleTemplate={siteTitle}
        image={ogImageUrl(siteAuthorName, 'scottspence.com', `404`)}
      />
      <h1>
        That's a nop!
        <span role="img" aria-label="crying face">
          😢
        </span>
      </h1>
      <h2>It looks like that page doesn't exist</h2>
      <p>
        There's plenty more content on the rest of the site, take a
        look at the <a href="/garden">writing</a> page.
      </p>
    </Fragment>
  )
}
