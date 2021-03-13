/** @jsx h */
import { Fragment, h } from 'preact'

export default function Page404() {
  return (
    <Fragment>
      <h1>
        That's a nop!
        <span role="img" aria-label="crying face">
          😢
        </span>
      </h1>
      <h2>It looks like that page doesn't exist</h2>
      <p>
        There's plenty more content on the rest of the site, take a
        stroll through my <a href="/garden">garden</a>.
      </p>
    </Fragment>
  )
}
