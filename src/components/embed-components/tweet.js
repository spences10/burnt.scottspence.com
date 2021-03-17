/** @jsx h */
import { h } from 'preact'
import { GeneralObserver } from './general-observer.js'

export const Tweet = ({
  tweetLink,
  theme = 'light',
  align = 'left',
  hideConversation = false,
}) => (
  <GeneralObserver onEnter={() => handleTwttrLoad()}>
    <div class="twitter-tweet-mdx-embed" style={{ overflow: 'auto' }}>
      <blockquote
        class="twitter-tweet"
        data-theme={theme}
        data-align={align}
        data-conversation={hideConversation ? 'none' : ''}
      >
        <a
          href={`https://twitter.com/${tweetLink}?ref_src=twsrc%5Etfw`}
        >
          {typeof window !== 'undefined' && !window.twttr
            ? 'Loading'
            : ''}
        </a>
      </blockquote>
    </div>
  </GeneralObserver>
)

let isTwttrScriptAdded = false

const twttrClassNames = [`.twitter-tweet`].join(`,`)

const twttrEmbedScript = `
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs")
`

const twttrLoad = () => {
  if (
    typeof window.twttr !== `undefined` &&
    window.twttr.widgets &&
    typeof window.twttr.widgets.load === `function`
  ) {
    window.twttr.widgets.load(
      document.getElementsByClassName(`mdx-embed`)
    )
  }
}

const handleTwttrLoad = () => {
  if (document.querySelector(twttrClassNames) !== null) {
    if (!isTwttrScriptAdded) {
      createScriptTag(null, twttrEmbedScript)
      isTwttrScriptAdded = true
      return {
        status: 'createScriptTag',
      }
    }
  }
  twttrLoad()
  return {
    status: 'twttrLoad',
  }
}

const createScriptTag = (providerEmbedUrl, providerEmbedScript) => {
  const script = document.createElement(`script`)

  script.type = `text/javascript`

  if (providerEmbedUrl) {
    script.src = providerEmbedUrl
  }

  if (providerEmbedScript) {
    script.innerText = providerEmbedScript
  }

  script.onerror = error => {
    console.error(`MDXEmbedProvider ${error.type}`, error)
  }

  document.getElementsByTagName(`head`)[0].appendChild(script)
}
