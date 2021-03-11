/** @jsx h */
import { h } from 'preact'
import GeneralObserver from './general-observer.js'

export default function YouTube({
  youTubeId,
  aspectRatio = '16:9',
  autoPlay = false,
  skipTo = { hour: '0', minute: '0', second: '0' },
}) {
  const { hour, minute, second } = skipTo

  const tH = hour * 60
  const tM = minute * 60

  const startTime = tH + tM + second

  return (
    <GeneralObserver>
      <div
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding(aspectRatio),
        }}
      >
        <iframe
          width="560"
          height="315"
          title={`youTube-${youTubeId}`}
          src={`https://www.youtube-nocookie.com/embed/${youTubeId}?&autoplay=${autoPlay}&start=${startTime}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
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

export const getPadding = aspectRatio => {
  const config = {
    '1:1': {
      paddingTop: '100%',
    },
    '16:9': {
      paddingTop: '56.25%',
    },
    '4:3': {
      paddingTop: '75%',
    },
    '3:2': {
      paddingTop: '66.66%',
    },
    8.5: {
      paddingTop: '62.5%',
    },
  }
  return config[aspectRatio]
}