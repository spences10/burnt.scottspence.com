// Credit to Benjamin Lannon 💎
// https://github.com/lannonbr/Portfolio/blob/master/src/components/seo.js
/** @jsx h */
import { h } from 'preact'
import { Helmet } from 'react-helmet'

export default function SEO({
  description,
  lang = `en`,
  meta = [],
  title,
  ogImage,
}) {
  const metaDescription = description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s • Scott Spence`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: ogImage ? `summary_large_image` : `summary`,
        },
        {
          name: `twitter:creator`,
          content: 'spences10',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}
