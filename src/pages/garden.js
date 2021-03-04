import { h, Fragment } from "preact";
import { useReducer, useState } from "preact/hooks";

export default function Garden({ posts }) {
  return (
    <Fragment>
      {posts.map((post) => {
        return (
          <Fragment>
            <a
              class="underline text-lg font-bold text-gray-900"
              href={post.slug}
            >
              {post.title}
            </a>
            <pre>{JSON.stringify(post, null, 2)}</pre>
          </Fragment>
        );
      })}
    </Fragment>
  );
}
