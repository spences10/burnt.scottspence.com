import { h } from 'preact'
import { Helmet } from 'react-helmet'
import { MDXProvider } from '@mdx-js/preact'
import Butt from './components/buttbutt.js'

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
  MarkdownParser: props => <div></div>,
  DateDistance: props => <div></div>,
  Small: props => <div></div>,
  Sarcasm: props => <div></div>,
  Spotify: props => <div></div>,
}

export default function PageWrapper(props) {
  return (
    <MDXProvider components={components}>
      <div class="m-auto max-w-2xl">
        <Helmet>
          <link rel="stylesheet" href="/styles.css" />
        </Helmet>
        <article class="prose max-w-none">
          {props.title ? (
            <h2 class="font-extrabold text-3xl mt-6">
              {props.title}
            </h2>
          ) : null}
          {props.children}
          {props.title ? <Butt height="80" width="100" /> : null}
        </article>
      </div>
    </MDXProvider>
  )
}
