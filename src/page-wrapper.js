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
import Butt from './components/buttbutt.js'
import Footer from './components/footer.js'
import Header from './components/header.js'
import SEO from './components/seo.js'

const components = {
  codeblock: props => {
    if (props[`react-live`]) {
      return (
        <LiveProvider
          code={props.codestring}
          noInline
          theme={codeSyntaxHighlightTheme}
        >
          <LiveEditor data-name="live-editor" />
          <LiveError />
          <LivePreview data-name="live-preview" />
        </LiveProvider>
      )
    }
    return (
      <div
        class="p-2 bg-gray-900 overflow-auto"
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

const codeSyntaxHighlightTheme = {
  plain: { color: '#d6deeb', backgroundColor: '#011627' },
  styles: [
    {
      types: ['changed'],
      style: { color: 'rgb(162, 191, 252)', fontStyle: 'italic' },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgba(239, 83, 80, 0.56)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['inserted', 'attr-name'],
      style: { color: 'rgb(173, 219, 103)', fontStyle: 'italic' },
    },
    {
      types: ['comment'],
      style: { color: 'rgb(99, 119, 119)', fontStyle: 'italic' },
    },
    {
      types: ['string', 'url'],
      style: { color: 'rgb(173, 219, 103)' },
    },
    { types: ['variable'], style: { color: 'rgb(214, 222, 235)' } },
    { types: ['number'], style: { color: 'rgb(247, 140, 108)' } },
    {
      types: ['builtin', 'char', 'constant', 'function'],
      style: { color: 'rgb(130, 170, 255)' },
    },
    {
      types: ['punctuation'],
      style: { color: 'rgb(199, 146, 234)' },
    },
    {
      types: ['selector', 'doctype'],
      style: { color: 'rgb(199, 146, 234)', fontStyle: 'italic' },
    },
    { types: ['class-name'], style: { color: 'rgb(255, 203, 139)' } },
    {
      types: ['tag', 'operator', 'keyword'],
      style: { color: 'rgb(127, 219, 202)' },
    },
    { types: ['boolean'], style: { color: 'rgb(255, 88, 116)' } },
    { types: ['property'], style: { color: 'rgb(128, 203, 196)' } },
    { types: ['namespace'], style: { color: 'rgb(178, 204, 214)' } },
  ],
}
