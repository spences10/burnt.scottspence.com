/** @jsx h */
import { h } from 'preact'
import { Helmet } from 'react-helmet'

export const Twitter = ({
  type = 'summary_large_image',
  username,
  title,
  desc,
  image,
}) => (
  <Helmet>
    {username && <meta name="twitter:creator" content={username} />}
    <meta name="twitter:card" content={type} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={desc} />
  </Helmet>
)
