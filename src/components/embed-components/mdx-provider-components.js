/** @jsx h */
import { h } from 'preact'
import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider,
} from 'react-live'
import codeSyntaxHighlightTheme from '../../code-style.js'
import { DateDistance } from './date-distance.js'
import { DateUpdated } from './date-updated.js'
import { Sarcasm } from './sarcasm.js'
import { Small } from './small.js'
import { Spotify } from './spotify.js'
import { Tweet } from './tweet.js'
import { Vimeo } from './vimeo.js'
import { YouTube } from './youtube.js'

export const components = {
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
  Vimeo,
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
