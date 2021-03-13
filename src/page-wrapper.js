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
import Butt from './components/buttbutt.js'
import { DateDistance } from './components/date-distance.js'
import { DateUpdated } from './components/date-updated.js'
import Footer from './components/footer.js'
import Header from './components/header.js'
import SEO from './components/seo.js'
import { Small } from './components/small.js'
import { TableOfContents } from './components/table-of-contents.js'
import YouTube from './components/youtube.js'

const components = {
  codeblock: props => {
    if (props[`react-live`]) {
      return (
        <div
          class="overflow-hidden rounded"
          style={{ fontSize: '1em' }}
        >
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
        class="mb-5 p-2 bg-gray-900 overflow-auto rounded"
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
  YouTube,
  Vimeo: props => <div></div>,
  Tweet: props => <div></div>,
  Spotify: props => <div></div>,
  MarkdownParser: props => <div></div>,
  Sarcasm: props => <div></div>,
  hr: props => <hr class="mb-10" />,
  DateUpdated,
  DateDistance,
  Small,
}

export default function PageWrapper(props) {
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
        <link rel="stylesheet" href="/styles.css" preload />
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
      <main>
        <Header />
        <article class="m-auto max-w-2xl prose">
          {props.title ? (
            <h2 class="font-extrabold text-3xl mt-6">
              {props.title}
            </h2>
          ) : null}
          {props.title ? (
            <SEO
              title={props.title}
              description={props.description}
              ogImage={props.slug}
            />
          ) : null}
          {props.title ? <TableOfContents /> : null}
          {props.children}
          {props.title ? <Butt height="80" width="100" /> : null}
        </article>
        <Footer />
      </main>
    </MDXProvider>
  )
}
