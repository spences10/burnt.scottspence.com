/** @jsx h */
import { h } from 'preact'
import { Helmet } from 'react-helmet'

export const Facebook = ({
  url,
  type,
  title,
  desc,
  image,
  locale,
}) => (
  <Helmet>
    <meta property="og:locale" content={locale} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={desc} />
  </Helmet>
)
