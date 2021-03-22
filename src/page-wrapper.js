/** @jsx h */
import { MDXProvider } from '@mdx-js/preact'
import { h } from 'preact'
import { Helmet } from 'react-helmet'
import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider,
} from 'react-live'
import codeSyntaxHighlightTheme from './code-style.js'
import { ButtButt } from './components/buttbutt.js'
import { DateDistance } from './components/embed-components/date-distance.js'
import { DateUpdated } from './components/embed-components/date-updated.js'
import { Sarcasm } from './components/embed-components/sarcasm.js'
import { Small } from './components/embed-components/small.js'
import { Spotify } from './components/embed-components/spotify.js'
import { Tweet } from './components/embed-components/tweet.js'
import { YouTube } from './components/embed-components/youtube.js'
import { Footer } from './components/footer.js'
import { Header } from './components/header.js'
import SEO from './components/seo/index.js'
import { TableOfContents } from './components/table-of-contents.js'
import { SiteConfig } from './site-config.js'

const components = {
  codeblock: props => {
    if (props[`react-live`]) {
      return (
        <div class="overflow-hidden rounded-xl mb-4 text-lg">
          <LiveProvider
            code={props.codestring}
            noInline
            theme={codeSyntaxHighlightTheme}
          >
            <LiveEditor data-name="live-editor" />
            <LiveError />
            <LivePreview data-name="live-preview" />
          </LiveProvider>
        </div>
      )
    }
    return (
      <div
        class="mb-5 p-2 bg-code-bg overflow-auto rounded-lg"
        dangerouslySetInnerHTML={{ __html: props.children }}
      />
    )
  },
  pre: props => (
    <div
      class="bg-gray-100 overflow-auto"
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  ),
  Vimeo: props => <div></div>,
  Tweet,
  MarkdownParser: props => <div></div>,
  hr: props => <hr class="mb-10" />,
  Small,
  DateUpdated,
  DateDistance,
  Sarcasm,
  Spotify,
  YouTube,
}

export default function PageWrapper({
  children,
  type,
  title,
  description,
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
  } = SiteConfig

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
          href="https://rsms.me/inter/inter.css"
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
      <main class="relative leading-relaxed tracking-wide text-lg">
        <SEO
          title={siteTitle}
          titleTemplate={`scottspence.com`}
          description={description || 'nothin’'}
          image={`image`}
          pathname={siteUrl}
          siteLanguage={siteLanguage}
          siteLocale={siteLocale}
          twitterUsername={siteTwitter}
        />
        <Header />
        <article class="m-auto max-w-2xl prose px-6">
          {title ? (
            <h1 class="font-extrabold text-3xl mt-6">{title}</h1>
          ) : null}
          {title ? (
            <SEO
              title={title}
              titleTemplate={siteTitle}
              description={description || 'nothin’'}
              image={`image`}
              pathname={siteUrl}
              siteLanguage={siteLanguage}
              siteLocale={siteLocale}
              twitterUsername={siteTwitter}
            />
          ) : null}
          {title ? <TableOfContents /> : null}
          <div class="markdown">{children}</div>
          {title ? <ButtButt height="80" width="100" /> : null}
        </article>
        <Footer />
      </main>
    </MDXProvider>
  )
}
