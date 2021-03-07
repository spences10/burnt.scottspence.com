import { h, Fragment } from 'preact'
import { useReducer, useState } from 'preact/hooks'

export default function Garden({ posts }) {
  return (
    <Fragment>
      {posts.map(post => {
        return (
          <Fragment>
            {!post.private ? (
              <p>
                <a
                  class="underline text-lg font-bold text-gray-900"
                  href={post.slug}
                >
                  {post.title}
                </a>
              </p>
            ) : null}
          </Fragment>
        )
      })}
    </Fragment>
  )
}
