/** @jsx h */
import { h } from 'preact'
import { GeneralObserver } from './general-observer.js'
import { getPadding } from './youtube.js'

export const Vimeo = ({
  vimeoId,
  autoPlay = false,
  skipTo = { hour: '0', minute: '0', second: '0' },
}) => {
  const { hour, minute, second } = skipTo

  return (
    <GeneralObserver>
      <div
        data-testid="vimeo"
        className="vimeo-mdx-embed"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding('16:9'),
        }}
      >
        <iframe
          title={`vimeo-${vimeoId}`}
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=${autoPlay}#t=${hour}h${minute}m${second}s`}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </GeneralObserver>
  )
}
