/** @jsx h */
import { h } from 'preact'
import { GeneralObserver } from './general-observer.js'

export const Spotify = ({
  spotifyLink,
  width = 320,
  height = 380,
}) => (
  <GeneralObserver>
    <iframe
      title={`spotify-${spotifyLink}`}
      class="spotify-mdx-embed"
      src={`https://open.spotify.com/embed/${spotifyLink}`}
      width={width}
      height={height}
      frameBorder="0"
      allow="encrypted-media"
    />
  </GeneralObserver>
)
