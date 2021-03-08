/** @jsx h */
import { MDXProvider } from '@mdx-js/preact'
import { h } from 'preact'
import { Helmet } from 'react-helmet'
import Butt from './components/buttbutt.js'
import Footer from './components/footer.js'
import Header from './components/header.js'
import SEO from './components/seo.js'

const components = {
  codeblock: props => (
    <div
      class="bg-gray-100 overflow-auto"
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  ),
  code: props => (
    <div
      class="bg-gray-100 overflow-auto"
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  ),
  YouTube: props => <div></div>,
  Vimeo: props => <div></div>,
  Tweet: props => <div></div>,
  Spotify: props => <div></div>,
  MarkdownParser: props => <div></div>,
  DateDistance: props => <div></div>,
  Small: props => <div></div>,
  Sarcasm: props => <div></div>,
}

export default function PageWrapper(props) {
  return (
    <MDXProvider components={components}>
      <main class="m-auto max-w-2xl">
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
          <link rel="stylesheet" href="/styles.css" />
        </Helmet>
        <Header />
        <article class="prose max-w-none">
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
          {props.children}
          {props.title ? <Butt height="80" width="100" /> : null}
          <Footer />
        </article>
      </main>
    </MDXProvider>
  )
}
