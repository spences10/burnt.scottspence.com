/** @jsx h */
import { MDXProvider } from '@mdx-js/preact'
import { Fragment, h } from 'preact'
import { Helmet } from 'react-helmet'
import { ButtButt } from './components/buttbutt.js'
import { components } from './components/embed-components/mdx-provider-components.js'
import { Footer } from './components/footer.js'
import { Header } from './components/header.js'
import { NewsLetterForm } from './components/newsletter-form.js'
import { PrivateBanner } from './components/private-banner.js'
import SEO from './components/seo/index.js'
import { TableOfContents } from './components/table-of-contents.js'
import { SiteMetadata } from './site-config.js'
import { ogImageUrl } from './util/og-image.js'

export default function PageWrapper({
  children,
  date,
  description,
  slug,
  tags,
  timeToRead,
  title,
  private: isPrivate,
  type,
  ...meta
}) {
  const {
    siteTitle,
    siteLastBuildDate,
    siteUrl,
    siteAuthorName,
    siteTwitter,
    siteLanguage,
    siteLocale,
  } = SiteMetadata

  return (
    <MDXProvider components={components}>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicon.ico"
        />
        <script type="text/javascript" src="/theme.js"></script>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
        />
        <link rel="stylesheet" href="/styles.css" />
        <script
          src={`${process.env.TOAST_FATHOM_TRACKING_URL_SCOTTSPENCE_COM}/script.js`}
          spa="auto"
          site={process.env.TOAST_FATHOM_TRACKING_ID_SCOTTSPENCE_COM}
          defer
        ></script>
        <meta
          name="monetization"
          content="$ilp.uphold.com/bzPBWkMBzLmN"
        />
      </Helmet>
      <main class="relative text-lg tracking-wide leading-relaxed transition duration-100 delay-100 ease-in-out">
        <Header />
        <article class="prose m-auto px-6 max-w-2xl">
          {title ? (
            <Fragment>
              <h1 class="mb-2 text-3xl font-extrabold">{title}</h1>
              <div class="mb-2 text-xs font-semibold uppercase">
                {timeToRead} minutes to read
              </div>
              <div class="mb-10">
                {tags
                  ? tags.map(tag => (
                      <span class="sp bg-primary-400 inline-flex items-center mr-3 px-3 text-gray-100 text-xs font-medium leading-6 rounded-full lowercase">
                        {tag}
                      </span>
                    ))
                  : null}
              </div>
              {isPrivate ? <PrivateBanner /> : null}
            </Fragment>
          ) : null}
          {title ? (
            <SEO
              title={title}
              titleTemplate={siteTitle}
              description={description || 'nothin’'}
              image={ogImageUrl(
                siteAuthorName,
                'scottspence.com',
                title
              )}
              pathname={`${siteUrl}/${slug}`}
              siteLanguage={siteLanguage}
              siteLocale={siteLocale}
              twitterUsername={siteTwitter}
              author={siteAuthorName}
              article={true}
              publishedDate={date}
              modifiedDate={new Date(Date.now()).toISOString()}
            />
          ) : null}
          {title ? <TableOfContents /> : null}
          <div class="markdown">{children}</div>
          <div class="flex mb-20" />
          {title ? <ButtButt height="80" width="100" /> : null}
        </article>
        <NewsLetterForm />
        <Footer />
      </main>
    </MDXProvider>
  )
}
